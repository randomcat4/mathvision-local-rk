import {
  E as R,
  j as l,
  B as V,
  T as F,
  V as _Component,
} from "./index-BM3ZINIl.js";
import { D as M } from "./katex.min-ADdKj7O-.js";
import { C as _Component2 } from "./chevron-left-BwEFN4zp.js";
import { C as _Component3 } from "./MarkdownHighlights-C-ZhT8z1.js";
import { Z as O, a as Z } from "./zoom-in-uCZ29dqq.js";
import { E as I } from "./LoadingSection-wWBu2CqJ.js";
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L = [
  [
    "path",
    {
      d: "m6 17 5-5-5-5",
      key: "xnjwq",
    },
  ],
  [
    "path",
    {
      d: "m13 17 5-5-5-5",
      key: "17xmmf",
    },
  ],
];
const N = R("chevrons-right", L);
const S = 60;
const W = 180;
const B = 20;
const J = 120;
const T = (s) => ({
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  gap: s.spacing(0.4),
});
const g = (s, i) => {
  if (i === undefined) {
    return s;
  }
  const r = Array.isArray(s) ? s : [s];
  const n = Array.isArray(i) ? i : [i];
  return [...r, ...n];
};
const K = ({
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
  showDownloadButton: P = true,
  showOpenInNewTabButton: _ = !!d,
  showPageLabel: A = false,
  showPageControls: D = true,
  sx: E,
  zoom: c,
  zoomStep: u = B,
}) => {
  const v = g(T, E);
  const h = i && e !== null;
  const C = h && o > 1;
  const f = h && o < e;
  const k = i && c > n;
  const y = i && c < r;
  const b =
    j ??
    (x
      ? () => {
          const t = document.createElement("a");
          t.href = x;
          t.download = s;
          document.body.appendChild(t);
          t.click();
          t.remove();
        }
      : undefined);
  return (
    <V sx={v}>
      {A ? (
        <F variant="caption" color="textSecondary">
          {e ? `Page ${o} of ${e}` : "Loading PDF"}
        </F>
      ) : null}
      {P ? (
        <_Component
          tooltip="Download PDF"
          aria-label="Download PDF"
          size="small"
          disableRipple={true}
          disabled={!b}
          onClick={b}
        >
          <M size={17} />
        </_Component>
      ) : null}
      {D ? (
        <l.Fragment>
          <_Component
            tooltip="Previous page"
            aria-label="Previous page"
            size="small"
            disableRipple={true}
            disabled={!C}
            onClick={() => {
              m(Math.max(1, o - 1));
            }}
          >
            <_Component2 size={17} />
          </_Component>
          <_Component
            tooltip="Next page"
            aria-label="Next page"
            size="small"
            disableRipple={true}
            disabled={!f}
            onClick={() => {
              if (e !== null) {
                m(Math.min(e, o + 1));
              }
            }}
          >
            <_Component3 size={17} />
          </_Component>
          <_Component
            tooltip="Last page"
            aria-label="Last page"
            size="small"
            disableRipple={true}
            disabled={!f || e === null}
            onClick={() => {
              if (e !== null) {
                m(e);
              }
            }}
          >
            <N size={17} />
          </_Component>
        </l.Fragment>
      ) : null}
      <_Component
        tooltip="Zoom out"
        aria-label="Zoom out"
        size="small"
        disableRipple={true}
        disabled={!k}
        onClick={() => {
          p(Math.max(n, c - u));
        }}
      >
        <O size={17} />
      </_Component>
      <_Component
        tooltip="Zoom in"
        aria-label="Zoom in"
        size="small"
        disableRipple={true}
        disabled={!y}
        onClick={() => {
          p(Math.min(r, c + u));
        }}
      >
        <Z size={17} />
      </_Component>
      {_ ? (
        <_Component
          tooltip="Open PDF in new tab"
          aria-label="Open PDF in new tab"
          size="small"
          disableRipple={true}
          disabled={!d}
          onClick={d}
        >
          <I size={17} />
        </_Component>
      ) : null}
    </V>
  );
};
export { J as P, K as a, W as b, S as c, B as d, g as m };
