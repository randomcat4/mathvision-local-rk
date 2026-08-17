const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/PdfContinuousCanvasViewer-CbJuZJkv.js",
      "assets/index-BM3ZINIl.js",
      "assets/index-DCmpUGyQ.css",
      "assets/index-D0EP5Hzg.js",
      "assets/usePdfDocument-D5PFNoxR.js",
      "assets/pdfDocument-V1r75ju6.js",
      "assets/PdfCanvasViewerControls-CKiN42mP.js",
      "assets/katex.min-ADdKj7O-.js",
      "assets/katex-CfVKi3_s.css",
      "assets/chevron-left-BwEFN4zp.js",
      "assets/MarkdownHighlights-C-ZhT8z1.js",
      "assets/TextField-D8vc_sXz.js",
      "assets/index-Yb6ONXKu.js",
      "assets/zoom-in-uCZ29dqq.js",
      "assets/LoadingSection-wWBu2CqJ.js",
      "assets/Alert-DnFVD8li.js",
    ]),
) => i.map((i) => d[i]);
import { j as e, B as a, C as x, T as d, r as s, $ as g } from "./index-BM3ZINIl.js";
import { P as u, a as P } from "./PdfCanvasViewerControls-CKiN42mP.js";
import { A as f } from "./Alert-DnFVD8li.js";
import { S as m } from "./OpenInNewRounded-D-7V5TzF.js";
import { F as w } from "./TextField-D8vc_sXz.js";
const j = s.lazy(() =>
    g(
      () => import("./PdfContinuousCanvasViewer-CbJuZJkv.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
    ).then((t) => ({ default: t.PdfContinuousCanvasViewer })),
  ),
  C = (t) => ({ display: "inline-flex", alignItems: "center", gap: t.spacing(0.4), mr: "auto" }),
  v = { minWidth: 0, width: "100%" },
  S = { minWidth: 0, width: "100%", display: "flex", flexDirection: "column", gap: 1 },
  y = (t) => ({
    flex: "0 0 auto",
    width: "100%",
    height: "min(70vh, 48rem)",
    minHeight: "28rem",
    borderRadius: t.shape.borderRadiusPx,
    [t.breakpoints.down(720)]: { height: "32rem", minHeight: "22rem" },
  }),
  l = (t) => ({
    minHeight: "18rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: t.spacing(1),
    padding: t.spacing(2),
  }),
  R = ({ displayMode: t, onDisplayModeChange: n }) => {
    const i = t === "pdf";
    return e.jsxs(a, {
      sx: C,
      children: [
        e.jsx(m, {
          checked: i,
          size: "small",
          id: "switch-pdf-latex",
          onChange: (r, o) => {
            n(o ? "pdf" : "latex");
          },
          slotProps: { input: { "aria-label": "Toggle writeup PDF preview" } },
        }),
        e.jsx(w, {
          htmlFor: "switch-pdf-latex",
          children: e.jsx(d, { variant: "caption", children: "View as PDF" }),
        }),
      ],
    });
  },
  T = ({ isPdfPreparing: t, isPdfReady: n, pdfCompileError: i = null, pdfUrl: r = null }) =>
    t
      ? e.jsxs(a, {
          sx: l,
          children: [
            e.jsx(x, { size: 28 }),
            e.jsx(d, {
              variant: "body2",
              color: "textSecondary",
              align: "center",
              children: "Compiling PDF",
            }),
          ],
        })
      : n && r
        ? e.jsx(D, { pdfUrl: r })
        : i
          ? e.jsx(a, {
              sx: v,
              children: e.jsx(f, { severity: "error", variant: "outlined", children: i }),
            })
          : e.jsx(a, {
              sx: l,
              children: e.jsx(d, {
                variant: "body2",
                color: "textSecondary",
                align: "center",
                children: "No PDF preview available.",
              }),
            }),
  D = ({ pdfUrl: t }) => {
    const [n, i] = s.useState(1),
      [r, o] = s.useState(u),
      [c, p] = s.useState(null),
      h = c !== null;
    return (
      s.useEffect(() => {
        (i(1), o(u), p(null));
      }, [t]),
      e.jsxs(a, {
        sx: S,
        children: [
          e.jsx(P, {
            isReady: h,
            page: n,
            pageCount: c,
            pdfUrl: t,
            showPageLabel: !0,
            showPageControls: !1,
            zoom: r,
            onPageChange: i,
            onZoomChange: o,
          }),
          e.jsx(s.Suspense, {
            fallback: e.jsx(a, { sx: l, children: e.jsx(x, { size: 28 }) }),
            children: e.jsx(j, {
              ariaLabel: "Compiled writeup PDF preview",
              loadErrorMessage: "Could not load compiled writeup PDF.",
              pdfUrl: t,
              renderErrorMessage: "Could not render compiled writeup PDF preview.",
              scale: r / 100,
              stateSx: l,
              sx: y,
              onPageChange: i,
              onPageCountChange: p,
            }),
          }),
        ],
      })
    );
  };
export { R as W, T as a };
