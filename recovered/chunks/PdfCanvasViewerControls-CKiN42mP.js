import { E as R, j as l, B as V, T as F, V as a } from "./index-BM3ZINIl.js";
import { D as M } from "./katex.min-ADdKj7O-.js";
import { C as w } from "./chevron-left-BwEFN4zp.js";
import { C as z } from "./MarkdownHighlights-C-ZhT8z1.js";
import { Z as O, a as Z } from "./zoom-in-uCZ29dqq.js";
import { E as I } from "./LoadingSection-wWBu2CqJ.js";
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L = [
    ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
    ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }],
  ],
  N = R("chevrons-right", L),
  S = 60,
  W = 180,
  B = 20,
  J = 120,
  T = (s) => ({
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    gap: s.spacing(0.4),
  }),
  g = (s, i) => {
    if (i === void 0) return s;
    const r = Array.isArray(s) ? s : [s],
      n = Array.isArray(i) ? i : [i];
    return [...r, ...n];
  },
  K = ({
    downloadFileName: s = "compiled.pdf",
    isReady: i,
    maxZoom: r = W,
    minZoom: n = S,
    onDownload: j,
    onOpenInNewTab: d,
    onPageChange: m,
    onZoomChange: p,
    page: o,
    pageCount: e,
    pdfUrl: x = null,
    showDownloadButton: P = !0,
    showOpenInNewTabButton: _ = !!d,
    showPageLabel: A = !1,
    showPageControls: D = !0,
    sx: E,
    zoom: c,
    zoomStep: u = B,
  }) => {
    const v = g(T, E),
      h = i && e !== null,
      C = h && o > 1,
      f = h && o < e,
      k = i && c > n,
      y = i && c < r,
      b =
        j ??
        (x
          ? () => {
              const t = document.createElement("a");
              ((t.href = x), (t.download = s), document.body.appendChild(t), t.click(), t.remove());
            }
          : void 0);
    return l.jsxs(V, {
      sx: v,
      children: [
        A
          ? l.jsx(F, {
              variant: "caption",
              color: "textSecondary",
              children: e ? `Page ${o} of ${e}` : "Loading PDF",
            })
          : null,
        P
          ? l.jsx(a, {
              tooltip: "Download PDF",
              "aria-label": "Download PDF",
              size: "small",
              disableRipple: !0,
              disabled: !b,
              onClick: b,
              children: l.jsx(M, { size: 17 }),
            })
          : null,
        D
          ? l.jsxs(l.Fragment, {
              children: [
                l.jsx(a, {
                  tooltip: "Previous page",
                  "aria-label": "Previous page",
                  size: "small",
                  disableRipple: !0,
                  disabled: !C,
                  onClick: () => {
                    m(Math.max(1, o - 1));
                  },
                  children: l.jsx(w, { size: 17 }),
                }),
                l.jsx(a, {
                  tooltip: "Next page",
                  "aria-label": "Next page",
                  size: "small",
                  disableRipple: !0,
                  disabled: !f,
                  onClick: () => {
                    e !== null && m(Math.min(e, o + 1));
                  },
                  children: l.jsx(z, { size: 17 }),
                }),
                l.jsx(a, {
                  tooltip: "Last page",
                  "aria-label": "Last page",
                  size: "small",
                  disableRipple: !0,
                  disabled: !f || e === null,
                  onClick: () => {
                    e !== null && m(e);
                  },
                  children: l.jsx(N, { size: 17 }),
                }),
              ],
            })
          : null,
        l.jsx(a, {
          tooltip: "Zoom out",
          "aria-label": "Zoom out",
          size: "small",
          disableRipple: !0,
          disabled: !k,
          onClick: () => {
            p(Math.max(n, c - u));
          },
          children: l.jsx(O, { size: 17 }),
        }),
        l.jsx(a, {
          tooltip: "Zoom in",
          "aria-label": "Zoom in",
          size: "small",
          disableRipple: !0,
          disabled: !y,
          onClick: () => {
            p(Math.min(r, c + u));
          },
          children: l.jsx(Z, { size: 17 }),
        }),
        _
          ? l.jsx(a, {
              tooltip: "Open PDF in new tab",
              "aria-label": "Open PDF in new tab",
              size: "small",
              disableRipple: !0,
              disabled: !d,
              onClick: d,
              children: l.jsx(I, { size: 17 }),
            })
          : null,
      ],
    });
  };
export { J as P, K as a, W as b, S as c, B as d, g as m };
