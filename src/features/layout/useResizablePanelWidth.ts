import { useCallback } from "#production-react";
import { useResizablePanelValue } from "./useResizablePanelValue";

export interface UseResizablePanelWidthOptions {
  storageKey: string;
  defaultWidth: number;
  minWidth: number;
  maxWidth: number;
  resizeEdge: "left" | "right";
  getResizeStartWidth?: (element: HTMLElement) => number;
  step?: number;
  pageStep?: number;
  storedValueErrorMessage?: string;
  readErrorMessage?: string;
  writeErrorMessage?: string;
}

export function useResizablePanelWidth({
  storageKey,
  defaultWidth,
  minWidth,
  maxWidth,
  resizeEdge,
  getResizeStartWidth,
  step = 16,
  pageStep = 64,
  storedValueErrorMessage = "Stored panel width must be a finite number.",
  readErrorMessage,
  writeErrorMessage,
}: UseResizablePanelWidthOptions) {
  const getResizeStartMetrics = useCallback(
    (element: HTMLElement, currentWidth: number) => ({
      value: getResizeStartWidth?.(element) ?? currentWidth,
      pixelsPerValue: 1,
    }),
    [getResizeStartWidth],
  );
  const { value, resizeHandleProps } = useResizablePanelValue({
    storageKey,
    defaultValue: defaultWidth,
    minValue: minWidth,
    maxValue: maxWidth,
    resizeEdge,
    getResizeStartMetrics,
    normalizeValue: Math.round,
    getAriaValue: (width) => width,
    getAriaValueText: (width) => `${width}px`,
    step,
    pageStep,
    storedValueErrorMessage,
    resizeMetricsErrorMessage: "Resizable panel width measurements must be finite and positive.",
    readErrorMessage,
    writeErrorMessage,
  });
  return { width: value, resizeHandleProps };
}
