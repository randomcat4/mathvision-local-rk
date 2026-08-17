const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["assets/PdfContinuousCanvasViewer-CbJuZJkv.js", "assets/index-BM3ZINIl.js", "assets/index-DCmpUGyQ.css", "assets/index-D0EP5Hzg.js", "assets/usePdfDocument-D5PFNoxR.js", "assets/pdfDocument-V1r75ju6.js", "assets/PdfCanvasViewerControls-CKiN42mP.js", "assets/katex.min-ADdKj7O-.js", "assets/katex-CfVKi3_s.css", "assets/chevron-left-BwEFN4zp.js", "assets/MarkdownHighlights-C-ZhT8z1.js", "assets/TextField-D8vc_sXz.js", "assets/index-Yb6ONXKu.js", "assets/zoom-in-uCZ29dqq.js", "assets/LoadingSection-wWBu2CqJ.js", "assets/Alert-DnFVD8li.js"]) => i.map(i => d[i]);
import { j as e, B as _Component4, C as _Component5, T as _Component2, r as s, $ as g } from "./index-BM3ZINIl.js";
import { P as u, a as P } from "./PdfCanvasViewerControls-CKiN42mP.js";
import { A as _Component6 } from "./Alert-DnFVD8li.js";
import { S as _Component } from "./OpenInNewRounded-D-7V5TzF.js";
import { F as _Component3 } from "./TextField-D8vc_sXz.js";
const _Component7 = s.lazy(() => g(() => import("./PdfContinuousCanvasViewer-CbJuZJkv.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])).then(t => ({
  default: t.PdfContinuousCanvasViewer
})));
const C = t => ({
  display: "inline-flex",
  alignItems: "center",
  gap: t.spacing(0.4),
  mr: "auto"
});
const v = {
  minWidth: 0,
  width: "100%"
};
const S = {
  minWidth: 0,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 1
};
const y = t => ({
  flex: "0 0 auto",
  width: "100%",
  height: "min(70vh, 48rem)",
  minHeight: "28rem",
  borderRadius: t.shape.borderRadiusPx,
  [t.breakpoints.down(720)]: {
    height: "32rem",
    minHeight: "22rem"
  }
});
const l = t => ({
  minHeight: "18rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: t.spacing(1),
  padding: t.spacing(2)
});
const R = ({
  displayMode: t,
  onDisplayModeChange: n
}) => {
  const i = t === "pdf";
  return <_Component4 sx={C}><_Component checked={i} size="small" id="switch-pdf-latex" onChange={(r, o) => {
      n(o ? "pdf" : "latex");
    }} slotProps={{
      input: {
        "aria-label": "Toggle writeup PDF preview"
      }
    }} /><_Component3 htmlFor="switch-pdf-latex"><_Component2 variant="caption">View as PDF</_Component2></_Component3></_Component4>;
};
const T = ({
  isPdfPreparing: t,
  isPdfReady: n,
  pdfCompileError: i = null,
  pdfUrl: r = null
}) => t ? <_Component4 sx={l}><_Component5 size={28} /><_Component2 variant="body2" color="textSecondary" align="center">Compiling PDF</_Component2></_Component4> : n && r ? <D pdfUrl={r} /> : i ? <_Component4 sx={v}><_Component6 severity="error" variant="outlined">{i}</_Component6></_Component4> : <_Component4 sx={l}><_Component2 variant="body2" color="textSecondary" align="center">No PDF preview available.</_Component2></_Component4>;
const D = ({
  pdfUrl: t
}) => {
  const [n, i] = s.useState(1);
  const [r, o] = s.useState(u);
  const [c, p] = s.useState(null);
  const h = c !== null;
  s.useEffect(() => {
    i(1);
    o(u);
    p(null);
  }, [t]);
  return <_Component4 sx={S}><P isReady={h} page={n} pageCount={c} pdfUrl={t} showPageLabel={true} showPageControls={false} zoom={r} onPageChange={i} onZoomChange={o} /><s.Suspense fallback={<_Component4 sx={l}><_Component5 size={28} /></_Component4>}><_Component7 ariaLabel="Compiled writeup PDF preview" loadErrorMessage="Could not load compiled writeup PDF." pdfUrl={t} renderErrorMessage="Could not render compiled writeup PDF preview." scale={r / 100} stateSx={l} sx={y} onPageChange={i} onPageCountChange={p} /></s.Suspense></_Component4>;
};
export { R as W, T as a };
