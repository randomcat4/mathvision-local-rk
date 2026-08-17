import { r as s, j as t, B as o, C as _, g as A } from "./index-BM3ZINIl.js";
import { u as F } from "./index-D0EP5Hzg.js";
import { u as $ } from "./usePdfDocument-D5PFNoxR.js";
import { r as D } from "./pdfDocument-V1r75ju6.js";
import { m as V } from "./PdfCanvasViewerControls-CKiN42mP.js";
import { A as z } from "./Alert-DnFVD8li.js";
import "./katex.min-ADdKj7O-.js";
import "./chevron-left-BwEFN4zp.js";
import "./MarkdownHighlights-C-ZhT8z1.js";
import "./TextField-D8vc_sXz.js";
import "./index-Yb6ONXKu.js";
import "./zoom-in-uCZ29dqq.js";
import "./LoadingSection-wWBu2CqJ.js";
const H = 980,
  N = 16,
  U = 1,
  W = (e) => ({
    flex: 1,
    minHeight: 0,
    overflow: "auto",
    position: "relative",
    padding: e.spacing(1.5),
    backgroundColor: A(e.palette.text.primary, 0.04),
  }),
  G = { position: "relative", width: "100%", minWidth: 0 },
  L = (e) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    boxSizing: "border-box",
    paddingBottom: e.spacing(2),
  }),
  B = { position: "relative", width: "max-content", minWidth: 0 },
  X = (e) => ({
    display: "block",
    maxWidth: "none",
    backgroundColor: e.palette.common.white,
    boxShadow: `0 10px 28px ${A(e.palette.text.primary, 0.18)}`,
  }),
  K = (e) => ({
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: A(e.palette.background.paper, 0.42),
  }),
  Y = (e) => ({
    position: "absolute",
    inset: e.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  q = (e) => ({
    flex: 1,
    minHeight: "18rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: e.spacing(2),
  }),
  J = s.memo(
    ({
      ariaLabel: e,
      canvasSx: j,
      estimatedPageHeight: y,
      pageNumber: i,
      pdfDocument: v,
      renderErrorMessage: c,
      scale: h,
    }) => {
      const l = s.useRef(null),
        [w, P] = s.useState(!1),
        [u, d] = s.useState(!1),
        [a, m] = s.useState(null);
      return (
        s.useEffect(() => {
          (P(!1), m(null));
          const r = l.current;
          if (!r) return;
          const g = r.getContext("2d");
          if (!g) {
            m(c);
            return;
          }
          d(!0);
          let f = !1;
          const C = D({ canvas: r, canvasContext: g, pageNumber: i, pdfDocument: v, scale: h });
          return (
            C.promise
              .then(() => {
                f || P(!0);
              })
              .catch((S) => {
                f || m(S instanceof Error ? S.message : c);
              })
              .finally(() => {
                f || d(!1);
              }),
            () => {
              ((f = !0), C.cancel());
            }
          );
        }, [i, v, c, h]),
        t.jsxs(o, {
          sx: B,
          style: { minHeight: w ? void 0 : `${y}px` },
          children: [
            t.jsx(o, { component: "canvas", ref: l, "aria-label": `${e}, page ${i}`, sx: j }),
            u ? t.jsx(o, { sx: K, children: t.jsx(_, { size: 28 }) }) : null,
            a
              ? t.jsx(o, {
                  sx: Y,
                  children: t.jsx(z, { severity: "error", variant: "outlined", children: a }),
                })
              : null,
          ],
        })
      );
    },
  ),
  ue = ({
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
    const u = s.useRef(null),
      d = s.useRef(1),
      a = s.useRef(i),
      {
        isPdfDocumentLoading: m,
        pdfDocument: r,
        pdfLoadError: g,
      } = $({ loadErrorMessage: y, onPageCountChange: v, pdfUrl: c }),
      f = (r == null ? void 0 : r.numPages) ?? 0,
      C = Math.round(H * l + N),
      S = V(W, P),
      O = V(X, j),
      E = V(q, w);
    s.useEffect(() => {
      a.current = i;
    }, [i]);
    const R = s.useCallback((n) => {
        var x;
        d.current !== n && ((d.current = n), (x = a.current) == null || x.call(a, n));
      }, []),
      p = F({
        count: f,
        estimateSize: () => C,
        getItemKey: (n) => `pdf-page-${n + 1}`,
        getScrollElement: () => u.current,
        overscan: U,
        useAnimationFrameWithResizeObserver: !0,
        onChange: (n) => {
          const x = u.current,
            b = n.getVirtualItems();
          if (!x || b.length === 0) return;
          const I = x.scrollTop + x.clientHeight * 0.35,
            k = b.find((T) => T.start <= I && T.end >= I) ?? b[0];
          R(k.index + 1);
        },
      });
    return (
      s.useEffect(() => {
        var n;
        (R(1), (n = u.current) == null || n.scrollTo({ top: 0, left: 0 }));
      }, [c, R]),
      s.useLayoutEffect(() => {
        r && (p.measure(), p.scrollToIndex(d.current - 1, { align: "start" }));
      }, [p, r, l]),
      m && !r
        ? t.jsx(o, { sx: E, children: t.jsx(_, { size: 28 }) })
        : g
          ? t.jsx(o, {
              sx: E,
              children: t.jsx(z, { severity: "error", variant: "outlined", children: g }),
            })
          : r
            ? t.jsx(o, {
                ref: u,
                sx: S,
                children: t.jsx(o, {
                  sx: G,
                  style: { height: `${p.getTotalSize()}px` },
                  children: p
                    .getVirtualItems()
                    .map((n) =>
                      t.jsx(
                        o,
                        {
                          ref: p.measureElement,
                          "data-index": n.index,
                          sx: L,
                          style: { transform: `translateY(${n.start}px)` },
                          children: t.jsx(J, {
                            ariaLabel: e,
                            canvasSx: O,
                            estimatedPageHeight: C,
                            pageNumber: n.index + 1,
                            pdfDocument: r,
                            renderErrorMessage: h,
                            scale: l,
                          }),
                        },
                        n.key,
                      ),
                    ),
                }),
              })
            : t.jsx(o, { sx: E, children: t.jsx(_, { size: 28 }) })
    );
  };
export { ue as PdfContinuousCanvasViewer };
