import { r, j as t, B as n, C as m, g as v } from "./index-BM3ZINIl.js";
import { u as k } from "./usePdfDocument-D5PFNoxR.js";
import { r as L } from "./pdfDocument-V1r75ju6.js";
import { m as C } from "./PdfCanvasViewerControls-CKiN42mP.js";
import { P as ie, b as ce, c as le, d as de, a as fe } from "./PdfCanvasViewerControls-CKiN42mP.js";
import { A as Z } from "./Alert-DnFVD8li.js";
import "./katex.min-ADdKj7O-.js";
import "./chevron-left-BwEFN4zp.js";
import "./MarkdownHighlights-C-ZhT8z1.js";
import "./TextField-D8vc_sXz.js";
import "./index-Yb6ONXKu.js";
import "./zoom-in-uCZ29dqq.js";
import "./LoadingSection-wWBu2CqJ.js";
const z = (e) => ({
    flex: 1,
    minHeight: 0,
    overflow: "auto",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: e.spacing(1.5),
    backgroundColor: v(e.palette.text.primary, 0.04),
  }),
  B = (e) => ({
    display: "block",
    maxWidth: "none",
    backgroundColor: e.palette.common.white,
    boxShadow: `0 10px 28px ${v(e.palette.text.primary, 0.18)}`,
  }),
  T = (e) => ({
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: v(e.palette.background.paper, 0.42),
  }),
  H = { position: "relative", width: "max-content", minWidth: 0 },
  X = (e) => ({
    flex: 1,
    minHeight: "18rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: e.spacing(2),
  }),
  se = ({
    ariaLabel: e = "PDF page preview",
    canvasSx: A,
    loadErrorMessage: D = "Could not load PDF.",
    onPageChange: i,
    onPageCountChange: b,
    page: c = 1,
    pdfUrl: g,
    renderErrorMessage: l = "Could not render PDF preview.",
    rotation: P = 0,
    scale: S = 1,
    stateSx: I,
    sx: O,
  }) => {
    const d = r.useRef(null),
      a = r.useRef(i),
      [F, f] = r.useState(!1),
      [E, o] = r.useState(null),
      {
        isPdfDocumentLoading: j,
        pdfDocument: s,
        pdfLoadError: V,
      } = k({ loadErrorMessage: D, onPageCountChange: b, pdfUrl: g }),
      W = j || F,
      M = C(z, O),
      N = C(B, A),
      p = C(X, I);
    return (
      r.useEffect(() => {
        a.current = i;
      }, [i]),
      r.useEffect(() => {
        (o(null), f(!1));
      }, [g]),
      r.useEffect(() => {
        var y;
        if (!s || !d.current) return;
        const u = Math.min(Math.max(c, 1), s.numPages);
        if (u !== c) {
          (y = a.current) == null || y.call(a, u);
          return;
        }
        const _ = d.current,
          w = _.getContext("2d");
        if (!w) {
          o(l);
          return;
        }
        (o(null), f(!0));
        let x = !1;
        const h = L({
          canvas: _,
          canvasContext: w,
          pageNumber: u,
          pdfDocument: s,
          rotation: P,
          scale: S,
        });
        return (
          h.promise
            .catch((R) => {
              x || o(R instanceof Error ? R.message : l);
            })
            .finally(() => {
              x || f(!1);
            }),
          () => {
            ((x = !0), h.cancel());
          }
        );
      }, [c, s, l, P, S]),
      j && !s
        ? t.jsx(n, { sx: p, children: t.jsx(m, { size: 28 }) })
        : V || E
          ? t.jsx(n, {
              sx: p,
              children: t.jsx(Z, { severity: "error", variant: "outlined", children: V ?? E }),
            })
          : s
            ? t.jsx(n, {
                sx: M,
                children: t.jsxs(n, {
                  sx: H,
                  children: [
                    t.jsx(n, { component: "canvas", ref: d, "aria-label": e, sx: N }),
                    W ? t.jsx(n, { sx: T, children: t.jsx(m, { size: 28 }) }) : null,
                  ],
                }),
              })
            : t.jsx(n, { sx: p, children: t.jsx(m, { size: 28 }) })
    );
  };
export {
  ie as PDF_CANVAS_VIEWER_DEFAULT_ZOOM,
  ce as PDF_CANVAS_VIEWER_MAX_ZOOM,
  le as PDF_CANVAS_VIEWER_MIN_ZOOM,
  de as PDF_CANVAS_VIEWER_ZOOM_STEP,
  se as PdfCanvasViewer,
  fe as PdfCanvasViewerControls,
};
