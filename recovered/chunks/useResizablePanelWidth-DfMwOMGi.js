import { r as d } from "./index-BM3ZINIl.js";
import { u as x } from "./useResizablePanelValue-D_NwbF9E.js";
const A = 16,
  P = 64,
  T = (e) => Math.round(e),
  f = (e) => e,
  _ = (e) => `${e}px`,
  v = ({
    storageKey: e,
    defaultWidth: s,
    minWidth: l,
    maxWidth: r,
    resizeEdge: u,
    getResizeStartWidth: a,
    step: n = A,
    pageStep: i = P,
    storedValueErrorMessage: o = "Stored panel width must be a finite number.",
    readErrorMessage: t,
    writeErrorMessage: m,
  }) => {
    const c = d.useCallback(
        (V, b) => ({ value: (a == null ? void 0 : a(V)) ?? b, pixelsPerValue: 1 }),
        [a],
      ),
      { value: E, resizeHandleProps: p } = x({
        storageKey: e,
        defaultValue: s,
        minValue: l,
        maxValue: r,
        resizeEdge: u,
        getResizeStartMetrics: c,
        normalizeValue: T,
        getAriaValue: f,
        getAriaValueText: _,
        step: n,
        pageStep: i,
        storedValueErrorMessage: o,
        resizeMetricsErrorMessage:
          "Resizable panel width measurements must be finite and positive.",
        readErrorMessage: t,
        writeErrorMessage: m,
      });
    return { width: E, resizeHandleProps: p };
  };
export { v as u };
