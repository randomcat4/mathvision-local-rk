import {
  r as s,
  j as t,
  B as _Component,
  C as _,
  g as A,
} from "./index-BM3ZINIl.js";
import { u as F } from "./index-D0EP5Hzg.js";
import { u as $ } from "./usePdfDocument-D5PFNoxR.js";
import { r as D } from "./pdfDocument-V1r75ju6.js";
import { m as V } from "./PdfCanvasViewerControls-CKiN42mP.js";
import { A as _Component2 } from "./Alert-DnFVD8li.js";
import "./katex.min-ADdKj7O-.js";
import "./chevron-left-BwEFN4zp.js";
import "./MarkdownHighlights-C-ZhT8z1.js";
import "./TextField-D8vc_sXz.js";
import "./index-Yb6ONXKu.js";
import "./zoom-in-uCZ29dqq.js";
import "./LoadingSection-wWBu2CqJ.js";
const H = 980;
const N = 16;
const U = 1;
const W = (e) => ({
  flex: 1,
  minHeight: 0,
  overflow: "auto",
  position: "relative",
  padding: e.spacing(1.5),
  backgroundColor: A(e.palette.text.primary, 0.04),
});
const G = {
  position: "relative",
  width: "100%",
  minWidth: 0,
};
const L = (e) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  boxSizing: "border-box",
  paddingBottom: e.spacing(2),
});
const B = {
  position: "relative",
  width: "max-content",
  minWidth: 0,
};
const X = (e) => ({
  display: "block",
  maxWidth: "none",
  backgroundColor: e.palette.common.white,
  boxShadow: `0 10px 28px ${A(e.palette.text.primary, 0.18)}`,
});
const K = (e) => ({
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: A(e.palette.background.paper, 0.42),
});
const Y = (e) => ({
  position: "absolute",
  inset: e.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const q = (e) => ({
  flex: 1,
  minHeight: "18rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: e.spacing(2),
});
const J = s.memo(
  ({
    ariaLabel: e,
    canvasSx: j,
    estimatedPageHeight: y,
    pageNumber: i,
    pdfDocument: v,
    renderErrorMessage: c,
    scale: h,
  }) => {
    const l = s.useRef(null);
    const [w, P] = s.useState(false);
    const [u, d] = s.useState(false);
    const [a, m] = s.useState(null);
    s.useEffect(() => {
      P(false);
      m(null);
      const r = l.current;
      if (!r) {
        return;
      }
      const g = r.getContext("2d");
      if (!g) {
        m(c);
        return;
      }
      d(true);
      let f = false;
      const C = D({
        canvas: r,
        canvasContext: g,
        pageNumber: i,
        pdfDocument: v,
        scale: h,
      });
      C.promise
        .then(() => {
          if (!f) {
            P(true);
          }
        })
        .catch((S) => {
          if (!f) {
            m(S instanceof Error ? S.message : c);
          }
        })
        .finally(() => {
          if (!f) {
            d(false);
          }
        });
      return () => {
        f = true;
        C.cancel();
      };
    }, [i, v, c, h]);
    return (
      <_Component
        sx={B}
        style={{
          minHeight: w ? undefined : `${y}px`,
        }}
      >
        <_Component
          component="canvas"
          ref={l}
          aria-label={`${e}, page ${i}`}
          sx={j}
        />
        {u ? (
          <_Component sx={K}>
            <_ size={28} />
          </_Component>
        ) : null}
        {a ? (
          <_Component sx={Y}>
            <_Component2 severity="error" variant="outlined">
              {a}
            </_Component2>
          </_Component>
        ) : null}
      </_Component>
    );
  },
);
const PdfContinuousCanvasViewer = ({
  ariaLabel: e = "PDF preview",
  canvasSx: j,
  loadErrorMessage: y = "Could not load PDF.",
  onPageChange: i,
  onPageCountChange: v,
  pdfUrl: c,
  renderErrorMessage: h = "Could not render PDF preview.",
  scale: l = 1,
  stateSx: w,
  sx: P,
}) => {
  const u = s.useRef(null);
  const d = s.useRef(1);
  const a = s.useRef(i);
  const {
    isPdfDocumentLoading: m,
    pdfDocument: r,
    pdfLoadError: g,
  } = $({
    loadErrorMessage: y,
    onPageCountChange: v,
    pdfUrl: c,
  });
  const f = (r == null ? undefined : r.numPages) ?? 0;
  const C = Math.round(H * l + N);
  const S = V(W, P);
  const O = V(X, j);
  const E = V(q, w);
  s.useEffect(() => {
    a.current = i;
  }, [i]);
  const R = s.useCallback((n) => {
    var x;
    if (d.current !== n) {
      d.current = n;
      if ((x = a.current) != null) {
        x.call(a, n);
      }
    }
  }, []);
  const p = F({
    count: f,
    estimateSize: () => C,
    getItemKey: (n) => `pdf-page-${n + 1}`,
    getScrollElement: () => u.current,
    overscan: U,
    useAnimationFrameWithResizeObserver: true,
    onChange: (n) => {
      const x = u.current;
      const b = n.getVirtualItems();
      if (!x || b.length === 0) {
        return;
      }
      const I = x.scrollTop + x.clientHeight * 0.35;
      const k = b.find((T) => T.start <= I && T.end >= I) ?? b[0];
      R(k.index + 1);
    },
  });
  s.useEffect(() => {
    var n;
    R(1);
    if ((n = u.current) != null) {
      n.scrollTo({
        top: 0,
        left: 0,
      });
    }
  }, [c, R]);
  s.useLayoutEffect(() => {
    if (r) {
      p.measure();
      p.scrollToIndex(d.current - 1, {
        align: "start",
      });
    }
  }, [p, r, l]);
  if (m && !r) {
    return (
      <_Component sx={E}>
        <_ size={28} />
      </_Component>
    );
  } else if (g) {
    return (
      <_Component sx={E}>
        <_Component2 severity="error" variant="outlined">
          {g}
        </_Component2>
      </_Component>
    );
  } else if (r) {
    return (
      <_Component ref={u} sx={S}>
        <_Component
          sx={G}
          style={{
            height: `${p.getTotalSize()}px`,
          }}
        >
          {p.getVirtualItems().map((n) => (
            <_Component
              ref={p.measureElement}
              data-index={n.index}
              sx={L}
              style={{
                transform: `translateY(${n.start}px)`,
              }}
              key={n.key}
            >
              <J
                ariaLabel={e}
                canvasSx={O}
                estimatedPageHeight={C}
                pageNumber={n.index + 1}
                pdfDocument={r}
                renderErrorMessage={h}
                scale={l}
              />
            </_Component>
          ))}
        </_Component>
      </_Component>
    );
  } else {
    return (
      <_Component sx={E}>
        <_ size={28} />
      </_Component>
    );
  }
};
export { PdfContinuousCanvasViewer };
