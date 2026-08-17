import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "#production-react";
import { createLucideIcon } from "../../runtime/lucideRuntime.js";
import { useStoredValue } from "../../shared/browser/useStoredValue";

export const SquareTerminalIcon = createLucideIcon("square-terminal", [
  ["path", { d: "m7 11 2-2-2-2", key: "1lz0vl" }],
  ["path", { d: "M11 13h4", key: "1p7l4v" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
]);

type ResizeEdge = "left" | "right";
interface ResizeMetrics { value: number; pixelsPerValue: number }
interface PointerStart { pointerId: number; startX: number; startValue: number; pixelsPerValue: number }

export interface UseResizablePanelValueOptions {
  storageKey: string;
  defaultValue: number;
  minValue: number;
  maxValue: number;
  resizeEdge: ResizeEdge;
  getResizeStartMetrics(element: HTMLElement, currentValue: number): ResizeMetrics;
  normalizeValue(value: number): number;
  getAriaValue(value: number): number;
  getAriaValueText(value: number): string;
  step: number;
  pageStep: number;
  storedValueErrorMessage: string;
  resizeMetricsErrorMessage: string;
  readErrorMessage?: string;
  writeErrorMessage?: string;
}

export function useResizablePanelValue({
  storageKey,
  defaultValue,
  minValue,
  maxValue,
  resizeEdge,
  getResizeStartMetrics,
  normalizeValue,
  getAriaValue,
  getAriaValueText,
  step,
  pageStep,
  storedValueErrorMessage,
  resizeMetricsErrorMessage,
  readErrorMessage,
  writeErrorMessage,
}: UseResizablePanelValueOptions) {
  const clamp = useCallback(
    (value: number) => Math.min(maxValue, Math.max(minValue, normalizeValue(value))),
    [maxValue, minValue, normalizeValue],
  );
  const parseStoredValue = useCallback(
    (serialized: string) => {
      const parsed: unknown = JSON.parse(serialized);
      if (typeof parsed !== "number" || !Number.isFinite(parsed)) {
        throw new Error(storedValueErrorMessage);
      }
      return clamp(parsed);
    },
    [clamp, storedValueErrorMessage],
  );
  const { value: storedValue, setValue: setStoredValue } = useStoredValue({
    storageKey,
    defaultValue,
    parse: parseStoredValue,
    readErrorMessage,
    writeErrorMessage,
  });
  const [value, setValue] = useState(storedValue);
  const valueRef = useRef(storedValue);
  const pointerStart = useRef<PointerStart | null>(null);
  const animationFrame = useRef<number | null>(null);
  const [isResizing, setIsResizing] = useState(false);
  const commitValue = useCallback(
    (next: number) => {
      const clamped = clamp(next);
      valueRef.current = clamped;
      setValue((current) => (current === clamped ? current : clamped));
      return clamped;
    },
    [clamp],
  );
  const cancelAnimationFrame = useCallback(() => {
    if (animationFrame.current !== null) {
      window.cancelAnimationFrame(animationFrame.current);
      animationFrame.current = null;
    }
  }, []);
  const scheduleValue = useCallback(
    (next: number) => {
      valueRef.current = clamp(next);
      if (animationFrame.current === null) {
        animationFrame.current = window.requestAnimationFrame(() => {
          animationFrame.current = null;
          commitValue(valueRef.current);
        });
      }
    },
    [clamp, commitValue],
  );

  useEffect(() => {
    cancelAnimationFrame();
    commitValue(storedValue);
  }, [cancelAnimationFrame, commitValue, storedValue]);
  useEffect(() => () => cancelAnimationFrame(), [cancelAnimationFrame]);
  useEffect(() => {
    if (!isResizing || typeof document === "undefined") return;
    const previousCursor = document.body.style.cursor;
    const previousUserSelect = document.body.style.userSelect;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
    return () => {
      document.body.style.cursor = previousCursor;
      document.body.style.userSelect = previousUserSelect;
    };
  }, [isResizing]);

  const persistValue = useCallback(
    (next: number) => {
      cancelAnimationFrame();
      const committed = commitValue(next);
      setStoredValue(committed);
    },
    [cancelAnimationFrame, commitValue, setStoredValue],
  );
  const handlePointerDown = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (event.button !== 0) return;
      const metrics = getResizeStartMetrics(event.currentTarget, valueRef.current);
      if (
        !Number.isFinite(metrics.value) ||
        !Number.isFinite(metrics.pixelsPerValue) ||
        metrics.pixelsPerValue <= 0
      ) {
        throw new Error(resizeMetricsErrorMessage);
      }
      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      cancelAnimationFrame();
      pointerStart.current = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startValue: commitValue(metrics.value),
        pixelsPerValue: metrics.pixelsPerValue,
      };
      setIsResizing(true);
    },
    [cancelAnimationFrame, commitValue, getResizeStartMetrics, resizeMetricsErrorMessage],
  );
  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      const start = pointerStart.current;
      if (!start || start.pointerId !== event.pointerId) return;
      const pixelDelta = resizeEdge === "left"
        ? start.startX - event.clientX
        : event.clientX - start.startX;
      scheduleValue(start.startValue + pixelDelta / start.pixelsPerValue);
    },
    [resizeEdge, scheduleValue],
  );
  const handlePointerEnd = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      const start = pointerStart.current;
      if (!start || start.pointerId !== event.pointerId) return;
      pointerStart.current = null;
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
      cancelAnimationFrame();
      commitValue(valueRef.current);
      setIsResizing(false);
      setStoredValue(valueRef.current);
    },
    [cancelAnimationFrame, commitValue, setStoredValue],
  );
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      const leftDelta = resizeEdge === "left" ? step : -step;
      const rightDelta = resizeEdge === "left" ? -step : step;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        persistValue(valueRef.current + leftDelta);
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        persistValue(valueRef.current + rightDelta);
        return;
      }
      if (event.key === "PageDown") {
        event.preventDefault();
        persistValue(valueRef.current - pageStep);
        return;
      }
      if (event.key === "PageUp") {
        event.preventDefault();
        persistValue(valueRef.current + pageStep);
        return;
      }
      if (event.key === "Home") {
        event.preventDefault();
        persistValue(minValue);
        return;
      }
      if (event.key === "End") {
        event.preventDefault();
        persistValue(maxValue);
      }
    },
    [maxValue, minValue, pageStep, persistValue, resizeEdge, step],
  );
  const reset = useCallback(() => persistValue(defaultValue), [defaultValue, persistValue]);
  const resizeHandleProps = useMemo(
    () => ({
      "aria-orientation": "vertical" as const,
      "aria-valuemax": getAriaValue(maxValue),
      "aria-valuemin": getAriaValue(minValue),
      "aria-valuenow": getAriaValue(value),
      "aria-valuetext": getAriaValueText(value),
      "data-resizing": isResizing ? "true" : undefined,
      onDoubleClick: reset,
      onKeyDown: handleKeyDown,
      onLostPointerCapture: handlePointerEnd,
      onPointerCancel: handlePointerEnd,
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerEnd,
      role: "separator",
      tabIndex: 0,
    }),
    [getAriaValue, getAriaValueText, handleKeyDown, handlePointerDown, handlePointerEnd, handlePointerMove, isResizing, maxValue, minValue, reset, value],
  );
  return { value, resizeHandleProps };
}
