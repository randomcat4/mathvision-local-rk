import { useCallback, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import type { ResearchNode } from "./types";

export interface GraphBounds {
  width: number;
  height: number;
}

const MIN_ZOOM = 0.08;
const MAX_ZOOM = 1.35;

function clampZoom(value: number): number {
  return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, value));
}

export function useGraphViewport(bounds: GraphBounds) {
  const canvasRef = useRef<HTMLElement>(null);
  const dragRef = useRef<{ pointerId: number; x: number; y: number; left: number; top: number } | null>(null);
  const [zoom, setZoom] = useState(0.62);
  const [isPanning, setIsPanning] = useState(false);

  const zoomTo = useCallback((value: number) => setZoom(clampZoom(value)), []);
  const zoomIn = useCallback(() => setZoom((value) => clampZoom(value + (value < 0.4 ? 0.08 : 0.12))), []);
  const zoomOut = useCallback(() => setZoom((value) => clampZoom(value - (value <= 0.4 ? 0.08 : 0.12))), []);

  const fit = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const horizontal = Math.max(0, canvas.clientWidth - 48) / bounds.width;
    const vertical = Math.max(0, canvas.clientHeight - 48) / bounds.height;
    const next = clampZoom(Math.min(horizontal, vertical, 1));
    canvas.scrollTo({ left: 0, top: 0, behavior: "auto" });
    setZoom(next);
  }, [bounds.height, bounds.width]);

  const focusNode = useCallback((node: ResearchNode) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const x = (node.x + 105) * zoom - canvas.clientWidth / 2;
    const y = (node.y + 52) * zoom - canvas.clientHeight / 2;
    canvas.scrollTo({ left: Math.max(0, x), top: Math.max(0, y), behavior: "smooth" });
  }, [zoom]);

  const onPointerDown = useCallback((event: ReactPointerEvent<HTMLElement>) => {
    if (event.button !== 0) return;
    const target = event.target as HTMLElement;
    if (target.closest("button, input, a, [role='dialog']")) return;
    const canvas = event.currentTarget;
    dragRef.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      left: canvas.scrollLeft,
      top: canvas.scrollTop,
    };
    canvas.setPointerCapture(event.pointerId);
    setIsPanning(true);
  }, []);

  const onPointerMove = useCallback((event: ReactPointerEvent<HTMLElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const canvas = event.currentTarget;
    canvas.scrollLeft = drag.left - (event.clientX - drag.x);
    canvas.scrollTop = drag.top - (event.clientY - drag.y);
  }, []);

  const stopPanning = useCallback((event: ReactPointerEvent<HTMLElement>) => {
    if (dragRef.current?.pointerId !== event.pointerId) return;
    dragRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    setIsPanning(false);
  }, []);

  const viewportSize = useMemo(() => ({
    width: Math.max(1, bounds.width * zoom),
    height: Math.max(1, bounds.height * zoom),
  }), [bounds.height, bounds.width, zoom]);

  return {
    canvasRef,
    fit,
    focusNode,
    isPanning,
    onPointerDown,
    onPointerMove,
    onPointerUp: stopPanning,
    onPointerCancel: stopPanning,
    viewportSize,
    zoom,
    zoomIn,
    zoomOut,
    zoomTo,
  };
}
