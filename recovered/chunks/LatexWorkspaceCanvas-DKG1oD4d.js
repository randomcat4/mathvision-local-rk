const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/pdfDocument-V1r75ju6.js",
      "assets/index-BM3ZINIl.js",
      "assets/index-DCmpUGyQ.css",
    ]),
) => i.map((i) => d[i]);
var Mr = Object.defineProperty;
var Or = (e, r, a) =>
  r in e ? Mr(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (e[r] = a);
var Ct = (e, r, a) => Or(e, typeof r != "symbol" ? r + "" : r, a);
import { h as qe, s as Br, n as St, o as Nr, i as Wr, L as Hr } from "./source-editor-CGMzw50e.js";
import {
  ab as Vr,
  am as Xr,
  r as f,
  F as qr,
  j as t,
  cw as Gr,
  cx as Ur,
  H as Kr,
  a8 as Yr,
  I as Zr,
  K as Qr,
  a3 as Jr,
  aV as Pt,
  E as oe,
  cy as kt,
  g as A,
  cz as pt,
  x as re,
  _ as ie,
  T as I,
  B as y,
  C as Oe,
  aT as en,
  V as Q,
  aD as $e,
  $ as Tt,
  X as mt,
  S as Et,
  bv as tn,
} from "./index-BM3ZINIl.js";
import { b as Ue, T as be, L as rn } from "./TextField-D8vc_sXz.js";
import { F as pr } from "./file-plus-_oOf3yl8.js";
import {
  H as nn,
  h as an,
  A as fr,
  T as gt,
  a as Se,
  j as on,
  G as sn,
  J as ln,
} from "./SidebarTreeConnector-DsRNfBIo.js";
import { U as cn } from "./upload-Df6L5ERk.js";
import { D as _t, a as Rt, b as It, c as At, C as xr, M as we } from "./MChip-DiH8NXBU.js";
import { g as dn, L as hr } from "./latexWorkspacePanelVisibility-BotBQ6b-.js";
import { O as Lt, P as Dt } from "./useLatexQueries-DBpKOPUv.js";
import {
  F as et,
  M as mr,
  b as Me,
  T as un,
  a as Ye,
  C as pn,
} from "./MarkdownHighlights-C-ZhT8z1.js";
import { C as bt } from "./code-xml-DmfSENe3.js";
import { D as Fe } from "./Divider-BcuihGce.js";
import { P as fn } from "./play-3zl_nde-.js";
import { S as xn } from "./save-Bre0AB4-.js";
import { L as zt, C as yt, S as $t } from "./search-CE89ACSU.js";
import { L as ce } from "./ListItemIcon-CaLBil7Q.js";
import { R as hn, S as mn, F as gn } from "./square-D0gg5_xj.js";
import { P as bn } from "./pencil-DHia85Iy.js";
import { H as vt } from "./history-7HBMn_Gr.js";
import { a as yn } from "./CopyButton-BcOsqrNJ.js";
import { F as vn } from "./file-input-BGVdGffy.js";
import { u as jn, S as wn } from "./useResizablePanelValue-D_NwbF9E.js";
import { A as de } from "./Alert-DnFVD8li.js";
import { T as Cn } from "./triangle-alert-C5eP7BuB.js";
import { u as Sn } from "./index-D0EP5Hzg.js";
import { u as Pn } from "./usePdfDocument-D5PFNoxR.js";
import { e as kn } from "./pdfDocument-V1r75ju6.js";
import { a as Tn } from "./useAttachmentContent-15uaQfvd.js";
import { u as En } from "./usePdfObjectUrl-Cd7ol8-S.js";
import { C as _n } from "./chevron-left-BwEFN4zp.js";
import { D as Rn } from "./katex.min-ADdKj7O-.js";
import { M as In } from "./minimize-2-DiBwEVni.js";
import { M as An } from "./maximize-2-B07z4fzS.js";
import { E as Ln } from "./LoadingSection-wWBu2CqJ.js";
import { E as Dn } from "./eraser-B4pclN2p.js";
import { a as zn } from "./latexProjectChatMessages-Cty9Jluh.js";
import { A as $n } from "./arrow-right-DvMAP92m.js";
import { Q as Fn } from "./quote-DYxVpGUS.js";
import { G as Mn } from "./grip-vertical-DCI0_0hx.js";
function On(e) {
  return Vr("MuiButtonGroup", e);
}
const O = Xr("MuiButtonGroup", [
    "root",
    "contained",
    "outlined",
    "text",
    "disableElevation",
    "disabled",
    "firstButton",
    "fullWidth",
    "horizontal",
    "vertical",
    "colorPrimary",
    "colorSecondary",
    "grouped",
    "lastButton",
    "middleButton",
  ]),
  Bn = (e, r) => {
    const { ownerState: a } = e;
    return [
      { [`& .${O.grouped}`]: r.grouped },
      { [`& .${O.firstButton}`]: r.firstButton },
      { [`& .${O.lastButton}`]: r.lastButton },
      { [`& .${O.middleButton}`]: r.middleButton },
      r.root,
      r[a.variant],
      a.disableElevation === !0 && r.disableElevation,
      a.fullWidth && r.fullWidth,
      a.orientation === "vertical" && r.vertical,
    ];
  },
  Nn = (e) => {
    const {
        classes: r,
        color: a,
        disabled: o,
        disableElevation: d,
        fullWidth: c,
        orientation: p,
        variant: i,
      } = e,
      s = {
        root: ["root", i, p, c && "fullWidth", d && "disableElevation", `color${Yr(a)}`],
        grouped: ["grouped", o && "disabled"],
        firstButton: ["firstButton"],
        lastButton: ["lastButton"],
        middleButton: ["middleButton"],
      };
    return Zr(s, On, r);
  },
  Wn = Qr("div", { name: "MuiButtonGroup", slot: "Root", overridesResolver: Bn })(
    Jr(({ theme: e }) => ({
      display: "inline-flex",
      borderRadius: (e.vars || e).shape.borderRadius,
      variants: [
        {
          props: { variant: "contained" },
          style: {
            boxShadow: (e.vars || e).shadows[2],
            [`& .${O.grouped}`]: { boxShadow: "none", "&:hover": { boxShadow: "none" } },
          },
        },
        { props: { disableElevation: !0 }, style: { boxShadow: "none" } },
        { props: { fullWidth: !0 }, style: { width: "100%" } },
        {
          props: { orientation: "vertical" },
          style: {
            flexDirection: "column",
            [`& .${O.lastButton},& .${O.middleButton}`]: {
              borderTopRightRadius: 0,
              borderTopLeftRadius: 0,
            },
            [`& .${O.firstButton},& .${O.middleButton}`]: {
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 0,
            },
          },
        },
        {
          props: { orientation: "horizontal" },
          style: {
            [`& .${O.firstButton},& .${O.middleButton}`]: {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
            [`& .${O.lastButton},& .${O.middleButton}`]: {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
          },
        },
        {
          props: { variant: "text", orientation: "horizontal" },
          style: {
            [`& .${O.firstButton},& .${O.middleButton}`]: {
              borderRight: e.vars
                ? `1px solid ${e.alpha(e.vars.palette.common.onBackground, 0.23)}`
                : `1px solid ${e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
              [`&.${O.disabled}`]: {
                borderRight: `1px solid ${(e.vars || e).palette.action.disabled}`,
              },
            },
          },
        },
        {
          props: { variant: "text", orientation: "vertical" },
          style: {
            [`& .${O.firstButton},& .${O.middleButton}`]: {
              borderBottom: e.vars
                ? `1px solid ${e.alpha(e.vars.palette.common.onBackground, 0.23)}`
                : `1px solid ${e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
              [`&.${O.disabled}`]: {
                borderBottom: `1px solid ${(e.vars || e).palette.action.disabled}`,
              },
            },
          },
        },
        ...Object.entries(e.palette)
          .filter(Pt())
          .flatMap(([r]) => [
            {
              props: { variant: "text", color: r },
              style: {
                [`& .${O.firstButton},& .${O.middleButton}`]: {
                  borderColor: e.alpha((e.vars || e).palette[r].main, 0.5),
                },
              },
            },
          ]),
        {
          props: { variant: "outlined", orientation: "horizontal" },
          style: {
            [`& .${O.firstButton},& .${O.middleButton}`]: {
              borderRightColor: "transparent",
              "&:hover": { borderRightColor: "currentColor" },
            },
            [`& .${O.lastButton},& .${O.middleButton}`]: { marginLeft: -1 },
          },
        },
        {
          props: { variant: "outlined", orientation: "vertical" },
          style: {
            [`& .${O.firstButton},& .${O.middleButton}`]: {
              borderBottomColor: "transparent",
              "&:hover": { borderBottomColor: "currentColor" },
            },
            [`& .${O.lastButton},& .${O.middleButton}`]: { marginTop: -1 },
          },
        },
        {
          props: { variant: "contained", orientation: "horizontal" },
          style: {
            [`& .${O.firstButton},& .${O.middleButton}`]: {
              borderRight: `1px solid ${(e.vars || e).palette.grey[400]}`,
              [`&.${O.disabled}`]: {
                borderRight: `1px solid ${(e.vars || e).palette.action.disabled}`,
              },
            },
          },
        },
        {
          props: { variant: "contained", orientation: "vertical" },
          style: {
            [`& .${O.firstButton},& .${O.middleButton}`]: {
              borderBottom: `1px solid ${(e.vars || e).palette.grey[400]}`,
              [`&.${O.disabled}`]: {
                borderBottom: `1px solid ${(e.vars || e).palette.action.disabled}`,
              },
            },
          },
        },
        ...Object.entries(e.palette)
          .filter(Pt(["dark"]))
          .map(([r]) => ({
            props: { variant: "contained", color: r },
            style: {
              [`& .${O.firstButton},& .${O.middleButton}`]: {
                borderColor: (e.vars || e).palette[r].dark,
              },
            },
          })),
      ],
      [`& .${O.grouped}`]: { minWidth: 40 },
    })),
  ),
  Hn = f.forwardRef(function (r, a) {
    const o = qr({ props: r, name: "MuiButtonGroup" }),
      {
        children: d,
        className: c,
        color: p = "primary",
        component: i = "div",
        disabled: s = !1,
        disableElevation: n = !1,
        disableFocusRipple: u = !1,
        disableRipple: l = !1,
        fullWidth: x = !1,
        orientation: h = "horizontal",
        size: m = "medium",
        variant: g = "outlined",
        ...C
      } = o,
      b = {
        ...o,
        color: p,
        component: i,
        disabled: s,
        disableElevation: n,
        disableFocusRipple: u,
        disableRipple: l,
        fullWidth: x,
        orientation: h,
        size: m,
        variant: g,
      },
      L = Nn(b),
      F = f.useMemo(
        () => ({
          className: L.grouped,
          color: p,
          disabled: s,
          disableElevation: n,
          disableFocusRipple: u,
          disableRipple: l,
          fullWidth: x,
          size: m,
          variant: g,
        }),
        [p, s, n, u, l, x, m, g, L.grouped],
      ),
      T = nn(d),
      P = T.length,
      _ = (M) => {
        const W = M === 0,
          B = M === P - 1;
        return W && B ? "" : W ? L.firstButton : B ? L.lastButton : L.middleButton;
      };
    return t.jsx(Wn, {
      as: i,
      role: "group",
      className: Kr(L.root, c),
      ref: a,
      ownerState: b,
      ...C,
      children: t.jsx(Gr.Provider, {
        value: F,
        children: T.map((M, W) => t.jsx(Ur.Provider, { value: _(W), children: M }, W)),
      }),
    });
  });
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vn = [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
  ],
  Xn = oe("arrow-down", Vn);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qn = [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }],
  ],
  Gn = oe("arrow-up", qn);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Un = [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    ["path", { d: "M16 12h2", key: "7q9ll5" }],
    ["path", { d: "M16 8h2", key: "msurwy" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
    ["path", { d: "M6 12h2", key: "32wvfc" }],
    ["path", { d: "M6 8h2", key: "30oboj" }],
  ],
  gr = oe("book-open-text", Un);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kn = [
    [
      "path",
      { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1", key: "ezmyqa" },
    ],
    [
      "path",
      {
        d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
        key: "e1hn23",
      },
    ],
  ],
  Yn = oe("braces", Kn);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zn = [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M12 3v18", key: "108xh3" }],
  ],
  Qn = oe("columns-2", Zn);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jn = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6",
      },
    ],
    ["path", { d: "M9 10h6", key: "9gxzsh" }],
    ["path", { d: "M12 13V7", key: "h0r20n" }],
    ["path", { d: "M9 17h6", key: "r8uit2" }],
  ],
  ea = oe("file-diff", Jn);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ta = [
    [
      "path",
      {
        d: "M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127",
        key: "wfxp4w",
      },
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "m5 11-3 3", key: "1dgrs4" }],
    ["path", { d: "m5 17-3-3h10", key: "1mvvaf" }],
  ],
  ft = oe("file-output", ta);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ra = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6",
      },
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["circle", { cx: "11.5", cy: "14.5", r: "2.5", key: "1bq0ko" }],
    ["path", { d: "M13.3 16.3 15 18", key: "2quom7" }],
  ],
  na = oe("file-search", ra);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aa = [
    ["path", { d: "M10 8h.01", key: "1r9ogq" }],
    ["path", { d: "M12 12h.01", key: "1mp3jc" }],
    ["path", { d: "M14 8h.01", key: "1primd" }],
    ["path", { d: "M16 12h.01", key: "1l6xoz" }],
    ["path", { d: "M18 8h.01", key: "emo2bl" }],
    ["path", { d: "M6 8h.01", key: "x9i8wu" }],
    ["path", { d: "M7 16h10", key: "wp8him" }],
    ["path", { d: "M8 12h.01", key: "czm47f" }],
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ],
  oa = oe("keyboard", aa);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ia = [
    ["path", { d: "m16 6 4 14", key: "ji33uf" }],
    ["path", { d: "M12 6v14", key: "1n7gus" }],
    ["path", { d: "M8 8v12", key: "1gg7y9" }],
    ["path", { d: "M4 4v16", key: "6qkkli" }],
  ],
  sa = oe("library", ia);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const la = [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M3 15h18", key: "5xshup" }],
  ],
  ca = oe("panel-bottom", la);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const da = [
    [
      "path",
      {
        d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
        key: "143wyd",
      },
    ],
    ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }],
    ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1", key: "1ue0tg" }],
  ],
  ua = oe("printer", da);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pa = [
    ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ],
  fa = oe("rotate-cw", pa);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xa = [
    ["path", { d: "M15 12h-5", key: "r7krc0" }],
    ["path", { d: "M15 8h-5", key: "1khuty" }],
    ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
    [
      "path",
      {
        d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
        key: "1ph1d7",
      },
    ],
  ],
  Ft = oe("scroll-text", xa);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ha = [
    ["path", { d: "M14 17H5", key: "gfn3mx" }],
    ["path", { d: "M19 7h-9", key: "6i9tg" }],
    ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
    ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }],
  ],
  Mt = oe("settings-2", ha);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ma = [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
    ["line", { x1: "3", x2: "21", y1: "9", y2: "9", key: "1vqk6q" }],
    ["line", { x1: "3", x2: "21", y1: "15", y2: "15", key: "o2sbyz" }],
    ["line", { x1: "9", x2: "9", y1: "9", y2: "21", key: "1ib60c" }],
    ["line", { x1: "15", x2: "15", y1: "9", y2: "21", key: "1n26ft" }],
  ],
  ga = oe("sheet", ma);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ba = [
    [
      "path",
      {
        d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
        key: "vktsd0",
      },
    ],
    ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }],
  ],
  ya = oe("tag", ba),
  br = 0.5,
  yr = 0.25,
  va = 0.75,
  ja = 0.5,
  wa = 1160,
  ws = 800,
  Ca = "ai-math.latex-pdf-panel-ratio.v2",
  Sa = "ai-math.latex-chat-panel-ratio.v2",
  Pa = "68rem",
  jt = "42rem",
  ka = "34rem",
  Ta = "24rem",
  vr = "--latex-workspace-document-ratio",
  jr = "--latex-workspace-chat-ratio",
  wr = "--latex-document-source-ratio",
  Cr = "--latex-document-pdf-ratio",
  Ea = (e, r) => ({ [vr]: e, [jr]: r }),
  _a = (e, r) => ({ [wr]: e, [Cr]: r }),
  Ra = `var(${vr}, 1)`,
  Ia = `var(${jr}, 1)`,
  Aa = `var(${wr}, 1)`,
  La = `var(${Cr}, 1)`,
  Sr = (e) => ({
    minWidth: 0,
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    border: `1px solid ${A(e.palette.text.primary, 0.08)}`,
    borderRadius: e.shape.borderRadiusPx,
    backgroundColor: A(e.palette.background.paper, 0.84),
    boxShadow: `0 18px 38px ${A(e.palette.text.primary, 0.06)}`,
  }),
  Cs = (e) => ({
    height: "100%",
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    containerName: "latex-workspace",
    containerType: "inline-size",
    backgroundColor: "transparent",
    color: e.palette.text.primary,
  }),
  Da = (e) => ({
    flex: "0 0 auto",
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: e.spacing(1.5),
    padding: e.spacing(1, 1.4),
    borderBottom: `1px solid ${A(e.palette.text.primary, 0.08)}`,
    backgroundColor: A(e.palette.background.paper, 0.82),
    backdropFilter: "blur(18px)",
    [`@container latex-workspace (max-width: ${jt})`]: {
      alignItems: "stretch",
      flexDirection: "column",
      padding: e.spacing(1, 1.1),
    },
  }),
  za = {
    minWidth: 0,
    flex: "1 1 auto",
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
    gap: 1.2,
    [`@container latex-workspace (max-width: ${jt})`]: { width: "100%" },
  },
  $a = { flex: "0 0 auto", minWidth: 0, display: "inline-flex", alignItems: "center" },
  Fa = { minWidth: 0, flex: "1 1 15rem", display: "flex", alignItems: "center", gap: 0.8 },
  Ma = { minWidth: 0, display: "flex", flexDirection: "column" },
  Oa = (e) => ({
    minWidth: 0,
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: e.spacing(0.75),
    flexWrap: "nowrap",
    [`@container latex-workspace (max-width: ${Pa})`]: {
      '& [data-latex-toolbar-view-label="true"]': { display: "none" },
      '& [data-latex-toolbar-collapse="dense"]': {
        width: e.spacing(5),
        minWidth: e.spacing(5),
        paddingInline: e.spacing(1),
      },
      '& [data-latex-toolbar-label="dense"]': { display: "none" },
    },
    [`@container latex-workspace (max-width: ${jt})`]: {
      width: "100%",
      justifyContent: "flex-end",
      gap: e.spacing(0.5),
    },
    [`@container latex-workspace (max-width: ${ka})`]: {
      '& [data-latex-toolbar-collapse="compact"]': {
        width: e.spacing(6.5),
        minWidth: e.spacing(6.5),
        paddingInline: e.spacing(0.75),
      },
      '& [data-latex-toolbar-label="compact"]': { display: "none" },
      '& [data-latex-toolbar-action="compiler"]': {
        minWidth: e.spacing(5),
        paddingInline: e.spacing(1),
      },
      '& [data-latex-toolbar-action="compiler"] .MuiButton-endIcon': { margin: 0 },
      '& [data-latex-toolbar-compiler-label="true"]': { display: "none" },
    },
    [`@container latex-workspace (max-width: ${Ta})`]: {
      '& [data-latex-toolbar-action="compile"]': {
        minWidth: e.spacing(5),
        paddingInline: e.spacing(1),
      },
      '& [data-latex-toolbar-action="compile"] .MuiButton-startIcon': { margin: 0 },
      '& [data-latex-toolbar-compile-label="true"]': { display: "none" },
    },
  }),
  nt = (e) => ({
    flex: "0 0 auto",
    display: "inline-flex",
    alignItems: "center",
    gap: e.spacing(0.75),
  }),
  at = (e) => ({
    alignSelf: "center",
    height: e.spacing(3),
    marginInline: e.spacing(0.25),
    borderColor: A(e.palette.text.primary, 0.1),
  }),
  We = (e) => {
    const r = pt(e, {
        elevated: !1,
        labeled: !0,
        preserveSelectedWhenDisabled: !1,
        selected: !1,
        selection: "soft",
        size: "toolbar",
        surface: "plain",
        tone: "default",
      }),
      a = pt(e, {
        elevated: !1,
        labeled: !0,
        preserveSelectedWhenDisabled: !0,
        selected: !0,
        selection: "soft",
        size: "toolbar",
        surface: "plain",
        tone: "default",
      });
    return {
      ...r,
      "& .MuiButton-startIcon, & .MuiButton-endIcon": { margin: 0 },
      '&[aria-expanded="true"], &[aria-pressed="true"]': a,
    };
  },
  Ba = (e) => ({
    flex: "0 0 auto",
    borderRadius: e.shape.radiusMd,
    gap: e.spacing(0.25),
    padding: e.spacing(0.25),
    backgroundColor: A(e.palette.text.primary, 0.035),
    "& .MuiToggleButtonGroup-grouped": {
      minWidth: e.spacing(5),
      minHeight: kt,
      height: kt,
      gap: e.spacing(0.65),
      margin: 0,
      padding: e.spacing(0.5, 1),
      border: 0,
      borderRadius: e.shape.radiusSmPx,
      color: e.palette.text.secondary,
    },
    "& .MuiToggleButtonGroup-grouped:hover:not(.Mui-disabled)": {
      color: e.palette.text.primary,
      backgroundColor: A(e.palette.text.primary, 0.06),
    },
    "& .MuiToggleButtonGroup-grouped.Mui-selected": {
      color: e.palette.primary.main,
      backgroundColor: A(e.palette.primary.main, 0.14),
    },
    "& .MuiToggleButtonGroup-grouped.Mui-selected:hover": {
      backgroundColor: A(e.palette.primary.main, 0.18),
    },
  }),
  Ot = (e) => ({
    flex: 1,
    minHeight: 0,
    display: "flex",
    alignItems: "stretch",
    gap: e.spacing(1.4),
    padding: e.spacing(1.4),
    overflow: "hidden",
    [`@container latex-workspace (max-width: ${wa}px)`]: {
      padding: e.spacing(0.75),
      overflow: "hidden",
    },
  }),
  Na = { flex: 1, minHeight: 0, display: "flex", flexDirection: "column", overflow: "hidden" },
  Wa = (e) => ({
    flex: "0 0 auto",
    padding: e.spacing(0.5, 0.75),
    borderBottom: `1px solid ${A(e.palette.text.primary, 0.08)}`,
    backgroundColor: A(e.palette.background.paper, 0.88),
    "& .MuiToggleButton-root": { gap: e.spacing(0.55) },
  }),
  Ha = (e) => ({
    flex: "1 1 auto",
    minWidth: 0,
    minHeight: 0,
    display: "flex",
    alignItems: "stretch",
    gap: e.spacing(1),
    overflow: "hidden",
  }),
  Bt = (e) => (r) => ({ ...Sr(r), flex: e ? "1 1 auto" : `${Ia} 1 0%`, minWidth: 0 }),
  Pr = { minWidth: 0, minHeight: 0, display: "flex", flexDirection: "column", overflow: "hidden" },
  Va = (e) => ({ ...Sr(e), flex: `${Ra} 1 0%`, flexDirection: "row", contain: "inline-size" }),
  Xa = {
    ...Pr,
    containerName: "latex-source-panel",
    containerType: "inline-size",
    flex: `${Aa} 1 0%`,
  },
  qa = (e) => (r) => ({
    ...Pr,
    containerName: "latex-pdf-panel",
    containerType: "inline-size",
    flex: e ? "1 1 auto" : `${La} 1 0%`,
    "&:fullscreen": { backgroundColor: r.palette.background.paper },
  }),
  Ss = "latex-editor-keybindings-v1",
  kr = [
    {
      key: "openCommandPalette",
      label: "Command palette",
      description: "Search and run editor commands.",
    },
    {
      key: "formatDocument",
      label: "Format document",
      description: "Format the complete active file.",
    },
    {
      key: "formatSelection",
      label: "Format selection",
      description: "Format only the selected source.",
    },
    {
      key: "nextDiagnostic",
      label: "Next diagnostic",
      description: "Move to the next editor problem.",
    },
    {
      key: "previousDiagnostic",
      label: "Previous diagnostic",
      description: "Move to the previous editor problem.",
    },
  ],
  Ga = new Map([
    ["alt", "Alt"],
    ["ctrl", "Ctrl"],
    ["control", "Ctrl"],
    ["cmd", "Meta"],
    ["command", "Meta"],
    ["meta", "Meta"],
    ["mod", "Mod"],
    ["option", "Alt"],
    ["shift", "Shift"],
  ]),
  Ua = new Map(
    [
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "Backspace",
      "Delete",
      "End",
      "Enter",
      "Escape",
      "Home",
      "Insert",
      "PageDown",
      "PageUp",
      "Space",
      "Tab",
    ].map((e) => [e.toLowerCase(), e]),
  ),
  Ka = (e) => {
    const r = e.trim();
    if (!r) return !1;
    const a = r
      .replaceAll("+", "-")
      .split("-")
      .map((n) => n.trim())
      .filter(Boolean);
    if (a.length === 0) return !1;
    const o = a.at(-1);
    if (!o) throw new Error("A shortcut must include a key.");
    const d = a.slice(0, -1).map((n) => {
      const u = Ga.get(n.toLowerCase());
      if (!u) throw new Error(`Unknown shortcut modifier: ${n}.`);
      return u;
    });
    if (new Set(d).size !== d.length) throw new Error("A shortcut cannot repeat a modifier.");
    const c = Ua.get(o.toLowerCase()),
      p = /^F(?:[1-9]|1[0-2])$/i.test(o),
      i = /^[a-z0-9]$/i.test(o);
    if (!c && !p && !i) throw new Error(`Unknown shortcut key: ${o}.`);
    const s = c ?? (p ? o.toUpperCase() : o.toLowerCase());
    return [...d, s].join("-");
  },
  Ya = (e) => {
    const r = { ...e, save: qe.save, compile: qe.compile },
      a = new Map();
    for (const o of [
      { label: "Save", shortcut: qe.save },
      { label: "Compile", shortcut: qe.compile },
    ]) {
      if (!o.shortcut) throw new Error(`The default ${o.label} shortcut must be configured.`);
      a.set(o.shortcut.toLowerCase(), o.label);
    }
    for (const o of kr) {
      const d = e[o.key];
      if (d !== !1 && typeof d != "string")
        throw new Error(`${o.label} must be a shortcut or disabled.`);
      const c = d === !1 ? !1 : Ka(d);
      if (((r[o.key] = c), !c)) continue;
      const p = a.get(c.toLowerCase());
      if (p) throw new Error(`${o.label} and ${p} cannot use the same shortcut.`);
      a.set(c.toLowerCase(), o.label);
    }
    return r;
  },
  Ps = (e) => {
    const r = JSON.parse(e);
    if (!r || typeof r != "object" || Array.isArray(r))
      throw new Error("Stored LaTeX keybindings must be an object.");
    const a = r,
      o = { ...qe };
    for (const d of kr) {
      const c = a[d.key];
      if (c !== void 0) {
        if (c !== !1 && typeof c != "string")
          throw new Error(`Stored ${d.label} shortcut is invalid.`);
        o[d.key] = c;
      }
    }
    return Ya(o);
  },
  Nt = [
    { extension: ".tex", label: "LaTeX source (.tex)" },
    { extension: ".bib", label: "Bibliography (.bib)" },
    { extension: ".sty", label: "Style package (.sty)" },
    { extension: ".cls", label: "Document class (.cls)" },
  ],
  Za = f.forwardRef(function (
    {
      isBusy: r,
      isError: a,
      selectedDocumentId: o,
      onCreateNode: d,
      onDeleteNode: c,
      onImportProject: p,
      onRenameNode: i,
      onSelectFile: s,
      onSetMainFile: n,
      onUploadFiles: u,
      onRetryLoad: l,
    },
    x,
  ) {
    const h = f.useRef(null),
      m = f.useRef(null),
      [g, C] = f.useState(null),
      [b, L] = f.useState(null),
      [F, T] = f.useState(""),
      [P, _] = f.useState(""),
      [M, W] = f.useState(".tex"),
      [B, U] = f.useState(null),
      q = f.useRef(o),
      H = f.useRef({
        onDeleteNode: c,
        onRenameNode: i,
        onSelectFile: s,
        onSetMainFile: n,
        onUploadFiles: u,
        onRetryLoad: l,
      });
    ((q.current = o),
      (H.current = {
        onDeleteNode: c,
        onRenameNode: i,
        onSelectFile: s,
        onSetMainFile: n,
        onUploadFiles: u,
        onRetryLoad: l,
      }));
    const k = f.useCallback(() => {
        r || (L(null), T(""), _(""), W(".tex"));
      }, [r]),
      E = f.useCallback((v, Z = "") => {
        (C(null), L({ mode: v, parentPath: Z }), T(""), _(""), W(".tex"));
      }, []),
      le = f.useCallback((v) => {
        (C(null), L({ mode: "move", file: v }), T(v.path), _(""), W(".tex"));
      }, []),
      V = f.useCallback(
        (v) => {
          if (!q.current)
            throw new Error("A LaTeX project must be selected before managing its files.");
          if ((C(null), v === "new-file")) {
            E("create-file");
            return;
          }
          if (v === "new-folder") {
            E("create-folder");
            return;
          }
          if (v === "upload-files") {
            if (!h.current) throw new Error("The LaTeX file upload control is unavailable.");
            h.current.click();
            return;
          }
          if (v === "import-zip") {
            if (!m.current) throw new Error("The LaTeX project import control is unavailable.");
            m.current.click();
            return;
          }
          const Z = v;
          throw new Error(`Unsupported LaTeX project file action: ${Z}`);
        },
        [E],
      ),
      Y = f.useCallback((v) => {
        C(v);
      }, []),
      S = f.useCallback(
        (v, Z = "") => {
          if (!q.current)
            throw new Error("A LaTeX project must be selected before creating project items.");
          E(v === "folder" ? "create-folder" : "create-file", Z);
        },
        [E],
      ),
      K = f.useCallback((v) => H.current.onDeleteNode(v), []),
      j = f.useCallback((v, Z) => H.current.onRenameNode(v, Z), []),
      D = f.useCallback((v) => H.current.onSelectFile(v), []),
      z = f.useCallback((v) => H.current.onSetMainFile(v), []),
      X = f.useCallback(() => {
        H.current.onRetryLoad();
      }, []),
      N = f.useCallback(async (v) => {
        v.length > 0 && (await H.current.onUploadFiles(v));
      }, []);
    f.useImperativeHandle(
      x,
      () => ({
        documentId: o,
        isUnavailable: a,
        createNode: S,
        deleteFile: K,
        moveFile: le,
        openMenu: Y,
        renameFile: j,
        retryLoad: X,
        run: V,
        selectFile: D,
        setMainFile: z,
        uploadFiles: N,
      }),
      [S, K, a, Y, le, j, X, V, D, o, z, N],
    );
    const $ = P.trim(),
      G = $.includes("/") || $.includes("\\"),
      se = Nt.find(({ extension: v }) => $.toLowerCase().endsWith(v)),
      ee = se ? $.slice(0, -se.extension.length) : $,
      te = `${ee}${M}`,
      ye = (b == null ? void 0 : b.mode) === "create-file" ? te : $,
      he = b && b.mode !== "move" && b.parentPath ? `${b.parentPath}/${ye}` : ye,
      R = F.trim(),
      xe =
        (b == null ? void 0 : b.mode) === "move"
          ? R.length > 0 && R !== b.file.path
          : $.length > 0 &&
            !G &&
            ((b == null ? void 0 : b.mode) !== "create-file" || ee.length > 0),
      ve = async () => {
        if (!b || !xe) return;
        let v;
        (b.mode === "move"
          ? (v = await i(b.file, R))
          : (v = await d(b.mode === "create-folder" ? "folder" : "text", he)),
          v && (L(null), T(""), _(""), W(".tex")));
      },
      ke = async (v) => {
        if (!B) return;
        (await p(B, { replace: v })) && U(null);
      },
      Ce = (v) => {
        (v.target.files && N(Array.from(v.target.files)), (v.target.value = ""));
      };
    return t.jsxs(t.Fragment, {
      children: [
        t.jsx("input", { ref: h, hidden: !0, multiple: !0, type: "file", onChange: Ce }),
        t.jsx("input", {
          ref: m,
          hidden: !0,
          type: "file",
          accept: ".zip,application/zip",
          onChange: (v) => {
            var Te;
            const Z = (Te = v.target.files) == null ? void 0 : Te[0];
            (Z && U(Z), (v.target.value = ""));
          },
        }),
        t.jsxs(Ue, {
          anchorEl: g,
          open: !!g,
          onClose: () => {
            C(null);
          },
          children: [
            t.jsxs(re, {
              disabled: !o || r || a,
              onClick: () => V("new-file"),
              children: [t.jsx(pr, { size: 16 }), "New file"],
            }),
            t.jsxs(re, {
              disabled: !o || r || a,
              onClick: () => V("new-folder"),
              children: [t.jsx(an, { size: 16 }), "New folder"],
            }),
            t.jsxs(re, {
              disabled: !o || r || a,
              onClick: () => {
                V("upload-files");
              },
              children: [t.jsx(cn, { size: 16 }), "Upload files"],
            }),
            t.jsxs(re, {
              disabled: !o || r || a,
              onClick: () => {
                V("import-zip");
              },
              children: [t.jsx(fr, { size: 16 }), "Import ZIP"],
            }),
          ],
        }),
        t.jsxs(_t, {
          open: !!b,
          fullWidth: !0,
          maxWidth: "xs",
          "aria-labelledby": "latex-node-dialog-title",
          onClose: k,
          children: [
            t.jsxs(Rt, {
              id: "latex-node-dialog-title",
              children: [
                (b == null ? void 0 : b.mode) === "create-file" && "New file",
                (b == null ? void 0 : b.mode) === "create-folder" && "New folder",
                (b == null ? void 0 : b.mode) === "move" && "Move project item",
              ],
            }),
            t.jsxs(It, {
              children: [
                (b == null ? void 0 : b.mode) === "create-file" &&
                  t.jsxs(t.Fragment, {
                    children: [
                      t.jsx(be, {
                        autoFocus: !0,
                        fullWidth: !0,
                        error: G,
                        helperText: G
                          ? "Enter a file name only."
                          : ee
                            ? `The file will be created as ${he}.`
                            : b.parentPath
                              ? `The file will be created inside ${b.parentPath}.`
                              : "The file will be created in the project root.",
                        label: "File name",
                        margin: "normal",
                        placeholder: "introduction",
                        value: P,
                        onChange: (v) => {
                          _(v.target.value);
                        },
                        onKeyDown: (v) => {
                          v.key === "Enter" && xe && (v.preventDefault(), ve());
                        },
                      }),
                      t.jsx(be, {
                        fullWidth: !0,
                        select: !0,
                        label: "File type",
                        margin: "normal",
                        value: M,
                        onChange: (v) => {
                          W(v.target.value);
                        },
                        children: Nt.map(({ extension: v, label: Z }) =>
                          t.jsx(re, { value: v, children: Z }, v),
                        ),
                      }),
                    ],
                  }),
                (b == null ? void 0 : b.mode) === "create-folder" &&
                  t.jsx(be, {
                    autoFocus: !0,
                    fullWidth: !0,
                    error: G,
                    helperText: G
                      ? "Enter a folder name only."
                      : b.parentPath
                        ? `The folder will be created inside ${b.parentPath}.`
                        : "The folder will be created in the project root.",
                    label: "Folder name",
                    margin: "normal",
                    placeholder: "chapters",
                    value: P,
                    onChange: (v) => {
                      _(v.target.value);
                    },
                    onKeyDown: (v) => {
                      v.key === "Enter" && xe && (v.preventDefault(), ve());
                    },
                  }),
                (b == null ? void 0 : b.mode) === "move" &&
                  t.jsx(be, {
                    autoFocus: !0,
                    fullWidth: !0,
                    label: "Project path",
                    margin: "normal",
                    placeholder: "chapters/introduction.tex",
                    value: F,
                    onChange: (v) => {
                      T(v.target.value);
                    },
                    onKeyDown: (v) => {
                      v.key === "Enter" && xe && (v.preventDefault(), ve());
                    },
                  }),
              ],
            }),
            t.jsxs(At, {
              children: [
                t.jsx(ie, { variant: "outlined", disabled: r, onClick: k, children: "Cancel" }),
                t.jsx(ie, {
                  variant: "contained",
                  disabled: r || !xe,
                  onClick: () => {
                    ve();
                  },
                  children: (b == null ? void 0 : b.mode) === "move" ? "Move" : "Create",
                }),
              ],
            }),
          ],
        }),
        t.jsxs(_t, {
          open: !!B,
          fullWidth: !0,
          maxWidth: "sm",
          "aria-labelledby": "latex-import-project-title",
          onClose: r
            ? void 0
            : () => {
                U(null);
              },
          children: [
            t.jsxs(Rt, {
              id: "latex-import-project-title",
              children: ["Import ", (B == null ? void 0 : B.name) ?? "ZIP project"],
            }),
            t.jsx(It, {
              children: t.jsx(I, {
                variant: "body2",
                color: "textSecondary",
                children:
                  "Merge adds files whose paths are not already present. Replace removes the current project files, imports the complete archive, and selects its main document.",
              }),
            }),
            t.jsxs(At, {
              children: [
                t.jsx(ie, {
                  variant: "outlined",
                  disabled: r,
                  onClick: () => {
                    U(null);
                  },
                  children: "Cancel",
                }),
                t.jsx(ie, {
                  variant: "outlined",
                  disabled: r,
                  onClick: () => {
                    ke(!1);
                  },
                  children: "Merge non-conflicting files",
                }),
                t.jsx(ie, {
                  color: "warning",
                  variant: "contained",
                  disabled: r,
                  onClick: () => {
                    ke(!0);
                  },
                  children: "Replace current project",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }),
  ks = f.memo(Za),
  Ts = f.memo(function ({
    compiler: r,
    headerToolbar: a,
    isCancelling: o,
    isCompiling: d,
    isCompactLayout: c,
    isCopying: p,
    isOpeningInOverleaf: i,
    isOpeningHistory: s,
    isProjectBusy: n,
    isFocusLayout: u,
    isSaving: l,
    panelVisibility: x,
    problemsOpen: h,
    selectedDocument: m,
    selectedFilePath: g = null,
    onCancelCompile: C,
    onCompile: b,
    onCompilerChange: L,
    onDeleteProject: F,
    onMakeCopy: T,
    onOpenFileActions: P,
    onOpenEditorSettings: _,
    onOpenKeybindings: M,
    onOpenProjectInOverleaf: W,
    onOpenHistory: B,
    onRenameProject: U,
    onOpenSearch: q,
    onSave: H,
    onToggleProblems: k,
    onToggleChat: E,
    onFocusLayout: le,
    onPrimaryViewChange: V,
  }) {
    const [Y, S] = f.useState(null),
      [K, j] = f.useState(null),
      [D, z] = f.useState(null),
      X = dn(x),
      N = Lt.find(($) => $.value === r);
    if (!N) throw new Error(`Unsupported LaTeX compiler: ${r}`);
    return t.jsxs(y, {
      component: "header",
      sx: Da,
      children: [
        t.jsxs(y, {
          sx: za,
          children: [
            a && t.jsx(y, { sx: $a, children: a }),
            t.jsxs(y, {
              sx: Fa,
              children: [
                t.jsx(et, { size: 18, "aria-hidden": !0 }),
                t.jsxs(y, {
                  sx: Ma,
                  children: [
                    t.jsx(I, {
                      variant: "subtitle1",
                      color: "textPrimary",
                      noWrap: !0,
                      children: (m == null ? void 0 : m.name) ?? "LaTeX Projects",
                    }),
                    t.jsx(I, {
                      variant: "caption",
                      color: "textSecondary",
                      noWrap: !0,
                      children: g ?? "Create a project to begin writing",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        t.jsxs(y, {
          role: "toolbar",
          "aria-label": "LaTeX editor actions",
          sx: Oa,
          children: [
            !c &&
              t.jsxs(t.Fragment, {
                children: [
                  t.jsxs(gt, {
                    exclusive: !0,
                    size: "medium",
                    color: "primary",
                    value: X,
                    disabled: !m,
                    "aria-label": "LaTeX editor view",
                    sx: Ba,
                    onChange: ($, G) => {
                      G && V(G);
                    },
                    children: [
                      t.jsxs(Se, {
                        value: "source",
                        "aria-label": "Show source only",
                        children: [
                          t.jsx(bt, { size: 17 }),
                          t.jsx("span", {
                            "data-latex-toolbar-view-label": "true",
                            children: "Source",
                          }),
                        ],
                      }),
                      t.jsxs(Se, {
                        value: "pdf",
                        "aria-label": "Show PDF only",
                        children: [
                          t.jsx(et, { size: 17 }),
                          t.jsx("span", {
                            "data-latex-toolbar-view-label": "true",
                            children: "PDF",
                          }),
                        ],
                      }),
                      t.jsxs(Se, {
                        value: "split",
                        "aria-label": "Show source and PDF side by side",
                        children: [
                          t.jsx(Qn, { size: 17 }),
                          t.jsx("span", {
                            "data-latex-toolbar-view-label": "true",
                            children: "Split",
                          }),
                        ],
                      }),
                    ],
                  }),
                  t.jsx(Fe, {
                    "aria-hidden": "true",
                    flexItem: !0,
                    orientation: "vertical",
                    sx: at,
                  }),
                ],
              }),
            t.jsxs(y, {
              role: "group",
              "aria-label": "Workspace commands",
              sx: nt,
              children: [
                !c &&
                  t.jsx(ie, {
                    "data-latex-toolbar-collapse": "dense",
                    variant: "text",
                    tooltip: x.chat ? "Hide project chat" : "Show project chat",
                    "aria-label": x.chat ? "Hide project chat panel" : "Show project chat panel",
                    "aria-pressed": x.chat,
                    disabled: !m,
                    startIcon: t.jsx(mr, { size: 17 }),
                    sx: We,
                    onClick: E,
                    children: t.jsx("span", {
                      "data-latex-toolbar-label": "dense",
                      children: "Chat",
                    }),
                  }),
                t.jsx(ie, {
                  "data-latex-toolbar-collapse": "dense",
                  variant: "text",
                  tooltip: "Search project (Ctrl/Cmd+Shift+F)",
                  "aria-label": "Search project",
                  disabled: !m,
                  startIcon: t.jsx(na, { size: 17 }),
                  sx: We,
                  onClick: q,
                  children: t.jsx("span", {
                    "data-latex-toolbar-label": "dense",
                    children: "Search",
                  }),
                }),
              ],
            }),
            t.jsx(Fe, { "aria-hidden": "true", flexItem: !0, orientation: "vertical", sx: at }),
            t.jsxs(y, {
              role: "group",
              "aria-label": "Project commands",
              sx: nt,
              children: [
                t.jsx(ie, {
                  "data-latex-toolbar-collapse": "compact",
                  variant: "text",
                  "aria-label": "Project",
                  "aria-controls": K ? "latex-project-menu" : void 0,
                  "aria-haspopup": "menu",
                  "aria-expanded": !!K,
                  disabled: !m,
                  startIcon: t.jsx(et, { size: 17 }),
                  endIcon: t.jsx(Me, { size: 16 }),
                  sx: We,
                  onClick: ($) => {
                    j($.currentTarget);
                  },
                  children: t.jsx("span", {
                    "data-latex-toolbar-label": "compact",
                    children: "Project",
                  }),
                }),
                t.jsx(ie, {
                  "data-latex-toolbar-collapse": "compact",
                  variant: "text",
                  "aria-label": "Tools",
                  "aria-controls": D ? "latex-tools-menu" : void 0,
                  "aria-haspopup": "menu",
                  "aria-expanded": !!D,
                  disabled: !m,
                  startIcon: t.jsx(Mt, { size: 17 }),
                  endIcon: t.jsx(Me, { size: 16 }),
                  sx: We,
                  onClick: ($) => {
                    z($.currentTarget);
                  },
                  children: t.jsx("span", {
                    "data-latex-toolbar-label": "compact",
                    children: "Tools",
                  }),
                }),
              ],
            }),
            t.jsx(Fe, { "aria-hidden": "true", flexItem: !0, orientation: "vertical", sx: at }),
            t.jsxs(y, {
              role: "group",
              "aria-label": "Build commands",
              sx: nt,
              children: [
                t.jsxs(Hn, {
                  disableElevation: !0,
                  variant: "contained",
                  "aria-label": "Compile project controls",
                  children: [
                    t.jsx(ie, {
                      "data-latex-toolbar-action": "compile",
                      tooltip: `Compile with ${N.label} (Ctrl/Cmd+S or Ctrl/Cmd+Enter)`,
                      "aria-label": d ? `Compiling with ${N.label}` : `Compile with ${N.label}`,
                      disabled: !m || d || l,
                      startIcon: d
                        ? t.jsx(Oe, { size: 16, thickness: 5, color: "inherit" })
                        : t.jsx(fn, { size: 16 }),
                      onClick: () => {
                        b(!1);
                      },
                      children: t.jsx("span", {
                        "data-latex-toolbar-compile-label": "true",
                        children: d ? "Compiling…" : "Compile",
                      }),
                    }),
                    t.jsx(ie, {
                      "data-latex-toolbar-action": "compiler",
                      "aria-label": `Compile options; current compiler ${N.label}`,
                      "aria-controls": Y ? "latex-compile-menu" : void 0,
                      "aria-haspopup": "menu",
                      "aria-expanded": !!Y,
                      disabled: !m,
                      endIcon: t.jsx(Me, { size: 16 }),
                      onClick: ($) => {
                        S($.currentTarget);
                      },
                      children: t.jsx("span", {
                        "data-latex-toolbar-compiler-label": "true",
                        children: N.label,
                      }),
                    }),
                  ],
                }),
                t.jsx(ie, {
                  "data-latex-toolbar-collapse": "dense",
                  variant: "text",
                  tooltip: "Save project",
                  "aria-label": "Save project",
                  disabled: !m || l,
                  startIcon: l
                    ? t.jsx(Oe, { size: 16, thickness: 5, color: "inherit" })
                    : t.jsx(xn, { size: 16 }),
                  sx: We,
                  onClick: () => {
                    H();
                  },
                  children: t.jsx("span", {
                    "data-latex-toolbar-label": "dense",
                    children: "Save",
                  }),
                }),
              ],
            }),
          ],
        }),
        t.jsxs(Ue, {
          id: "latex-compile-menu",
          anchorEl: Y,
          open: !!Y,
          variant: "menu",
          onClose: () => {
            S(null);
          },
          children: [
            t.jsx(zt, { children: "Compiler" }),
            Lt.map(($) =>
              t.jsxs(
                re,
                {
                  selected: r === $.value,
                  disabled: !m || l || d,
                  onClick: () => {
                    (S(null), L($.value));
                  },
                  children: [
                    t.jsx(ce, { children: r === $.value && t.jsx(xr, { size: 16 }) }),
                    $.label,
                  ],
                },
                $.value,
              ),
            ),
            t.jsx(Fe, {}),
            t.jsx(zt, { children: "Build" }),
            t.jsxs(re, {
              disabled: d,
              onClick: () => {
                (S(null), b(!0));
              },
              children: [
                t.jsx(ce, { sx: { mr: -1.5 }, children: t.jsx(hn, {}) }),
                "Recompile from scratch",
              ],
            }),
            t.jsxs(re, {
              disabled: !d || o,
              onClick: () => {
                (S(null), C());
              },
              children: [
                t.jsx(ce, { sx: { mr: -1.5 }, children: t.jsx(mn, {}) }),
                o ? "Cancelling…" : "Cancel compilation",
              ],
            }),
          ],
        }),
        t.jsxs(Ue, {
          id: "latex-project-menu",
          anchorEl: K,
          open: !!K,
          onClose: () => {
            j(null);
          },
          children: [
            t.jsxs(re, {
              disabled: !m || n || !P,
              onClick: () => {
                if (!K) throw new Error("The project actions menu is not open.");
                const $ = K;
                (j(null), P == null || P($));
              },
              children: [t.jsx(ce, { children: t.jsx(pr, { size: 16 }) }), "Add files or folders"],
            }),
            t.jsxs(re, {
              disabled: !m || n,
              onClick: () => {
                (j(null), U());
              },
              children: [t.jsx(ce, { children: t.jsx(bn, { size: 16 }) }), "Rename project"],
            }),
            t.jsxs(re, {
              disabled: !m || s,
              onClick: () => {
                (j(null), B());
              },
              children: [
                t.jsx(ce, { children: t.jsx(vt, { size: 16 }) }),
                s ? "Opening history…" : "Project history",
              ],
            }),
            t.jsxs(re, {
              disabled: !m || p,
              onClick: () => {
                (j(null), T());
              },
              children: [
                t.jsx(ce, { children: t.jsx(yn, { size: 16 }) }),
                p ? "Copying project…" : "Make a copy",
              ],
            }),
            t.jsxs(re, {
              disabled: !m || n,
              onClick: () => {
                (j(null), W());
              },
              children: [
                t.jsx(ce, { children: t.jsx(vn, { size: 16 }) }),
                i ? "Opening Overleaf…" : "Open in Overleaf",
              ],
            }),
            t.jsx(Fe, {}),
            t.jsxs(re, {
              disabled: !m || n,
              onClick: () => {
                (j(null), F());
              },
              children: [t.jsx(ce, { children: t.jsx(on, { size: 16 }) }), "Delete project"],
            }),
          ],
        }),
        t.jsxs(Ue, {
          id: "latex-tools-menu",
          anchorEl: D,
          open: !!D,
          onClose: () => {
            z(null);
          },
          children: [
            t.jsxs(re, {
              disabled: !m,
              onClick: () => {
                (z(null), le());
              },
              children: [
                t.jsx(ce, { children: t.jsx(gn, { size: 16 }) }),
                u ? "Writing focus is active" : "Focus writing",
              ],
            }),
            t.jsxs(re, {
              disabled: !m,
              onClick: () => {
                (z(null), k());
              },
              children: [
                t.jsx(ce, { children: t.jsx(ca, { size: 16 }) }),
                h ? "Hide output panel" : "Show output panel",
              ],
            }),
            t.jsx(Fe, {}),
            t.jsxs(re, {
              disabled: !m,
              onClick: () => {
                (z(null), M());
              },
              children: [t.jsx(ce, { children: t.jsx(oa, { size: 16 }) }), "Keyboard shortcuts"],
            }),
            t.jsxs(re, {
              disabled: !m,
              onClick: () => {
                (z(null), _());
              },
              children: [t.jsx(ce, { children: t.jsx(Mt, { size: 16 }) }), "Editor settings"],
            }),
          ],
        }),
      ],
    });
  });
class fe extends Error {
  constructor(a, o, d) {
    super(o, d === void 0 ? void 0 : { cause: d });
    Ct(this, "operation");
    ((this.name = "LatexDraftRecoveryStorageError"), (this.operation = a));
  }
}
const Qa = "ai-math-latex-durability",
  Ja = 1,
  Ze = "recovery-drafts",
  Wt = "workspace-id",
  tt = (e, r) => {
    if (e.trim().length === 0) throw new Error(`${r} must not be blank.`);
  },
  ot = ({ workspaceId: e, fileId: r }) => (
    tt(e, "LaTeX recovery workspace id"),
    tt(r, "LaTeX recovery file id"),
    JSON.stringify([e, r])
  ),
  it = (e) => {
    if (!e || typeof e != "object") return !1;
    const r = e;
    return (
      r.schemaVersion === 1 &&
      typeof r.id == "string" &&
      typeof r.workspaceId == "string" &&
      r.workspaceId.trim().length > 0 &&
      typeof r.fileId == "string" &&
      r.fileId.trim().length > 0 &&
      typeof r.fileName == "string" &&
      (r.projectName === void 0 || typeof r.projectName == "string") &&
      typeof r.source == "string" &&
      (r.baseRevision === null || typeof r.baseRevision == "string") &&
      typeof r.updatedAt == "number" &&
      Number.isFinite(r.updatedAt)
    );
  },
  Ht = (e, r) =>
    r instanceof fe ? r : new fe(e, `Could not ${e} the local LaTeX recovery draft store.`, r),
  eo = (e, r) =>
    new Promise((a, o) => {
      ((e.onsuccess = () => {
        a(e.result);
      }),
        (e.onerror = () => {
          o(
            new fe(
              r,
              `IndexedDB request failed while trying to ${r} a LaTeX recovery draft.`,
              e.error,
            ),
          );
        }));
    }),
  to = (e, r) =>
    new Promise((a, o) => {
      ((e.oncomplete = () => {
        a();
      }),
        (e.onerror = () => {
          o(
            new fe(
              r,
              `IndexedDB transaction failed while trying to ${r} a LaTeX recovery draft.`,
              e.error,
            ),
          );
        }),
        (e.onabort = () => {
          o(
            new fe(
              r,
              `IndexedDB transaction was aborted while trying to ${r} a LaTeX recovery draft.`,
              e.error,
            ),
          );
        }));
    }),
  ro = ({ databaseName: e = Qa, indexedDB: r } = {}) => {
    tt(e, "LaTeX recovery database name");
    const a = () => {
        const n = r ?? (typeof window > "u" ? void 0 : window.indexedDB);
        if (!n)
          throw new fe(
            "open",
            "IndexedDB is unavailable; local LaTeX draft recovery cannot start.",
          );
        return n;
      },
      o = async () => {
        let n;
        try {
          n = a().open(e, Ja);
        } catch (u) {
          throw Ht("open", u);
        }
        return new Promise((u, l) => {
          let x = !1;
          ((n.onupgradeneeded = () => {
            const h = n.result;
            h.objectStoreNames.contains(Ze) ||
              h
                .createObjectStore(Ze, { keyPath: "id" })
                .createIndex(Wt, "workspaceId", { unique: !1 });
          }),
            (n.onsuccess = () => {
              if (x) {
                n.result.close();
                return;
              }
              ((x = !0), u(n.result));
            }),
            (n.onerror = () => {
              x ||
                ((x = !0),
                l(
                  new fe(
                    "open",
                    "Could not open the local LaTeX recovery draft database.",
                    n.error,
                  ),
                ));
            }),
            (n.onblocked = () => {
              x ||
                ((x = !0),
                l(
                  new fe(
                    "open",
                    "The local LaTeX recovery draft database is blocked by another browser tab.",
                  ),
                ));
            }));
        });
      },
      d = async (n, u, l) => {
        const x = await o();
        try {
          const h = x.transaction(Ze, u),
            m = to(h, n),
            g = l(h.objectStore(Ze)),
            C = await eo(g, n);
          return (await m, C);
        } catch (h) {
          throw Ht(n, h);
        } finally {
          x.close();
        }
      };
    return {
      read: async (n) => {
        const u = ot(n),
          l = await d("read", "readonly", (m) => m.get(u));
        if (l === void 0) return null;
        if (!it(l)) throw new fe("read", "The stored LaTeX recovery draft is invalid.");
        if (l.id !== u)
          throw new fe(
            "read",
            "The stored LaTeX recovery draft does not match the requested file.",
          );
        const { id: x, ...h } = l;
        return h;
      },
      write: async (n) => {
        const u = ot(n);
        if (!it({ ...n, id: u }))
          throw new fe("write", "Cannot store an invalid LaTeX recovery draft.");
        await d("write", "readwrite", (l) => l.put({ ...n, id: u }));
      },
      remove: async (n) => {
        const u = ot(n);
        await d("remove", "readwrite", (l) => l.delete(u));
      },
      list: async (n) => {
        n !== void 0 && tt(n, "LaTeX recovery workspace id");
        const u = await d("list", "readonly", (l) =>
          n === void 0 ? l.getAll() : l.index(Wt).getAll(n),
        );
        if (!Array.isArray(u))
          throw new fe("list", "The local LaTeX recovery draft list is invalid.");
        return u.map((l) => {
          if (!it(l))
            throw new fe("list", "The local LaTeX recovery draft list contains an invalid record.");
          const { id: x, ...h } = l;
          return h;
        });
      },
    };
  },
  Es = ro();
var He = { exports: {} },
  Ge = { exports: {} },
  Ae = {},
  st = {},
  Vt;
function no() {
  return (Vt || ((Vt = 1), Object.defineProperty(st, "__esModule", { value: !0 })), st);
}
var lt = {},
  Xt;
function ao() {
  return (
    Xt ||
      ((Xt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.types = void 0),
          (function (r) {
            ((r[(r.ROOT = 0)] = "ROOT"),
              (r[(r.GROUP = 1)] = "GROUP"),
              (r[(r.POSITION = 2)] = "POSITION"),
              (r[(r.SET = 3)] = "SET"),
              (r[(r.RANGE = 4)] = "RANGE"),
              (r[(r.REPETITION = 5)] = "REPETITION"),
              (r[(r.REFERENCE = 6)] = "REFERENCE"),
              (r[(r.CHAR = 7)] = "CHAR"));
          })(e.types || (e.types = {})));
      })(lt)),
    lt
  );
}
var ct = {},
  qt;
function oo() {
  return (qt || ((qt = 1), Object.defineProperty(ct, "__esModule", { value: !0 })), ct);
}
var Gt;
function Pe() {
  return (
    Gt ||
      ((Gt = 1),
      (function (e) {
        var r =
            (Ae && Ae.__createBinding) ||
            (Object.create
              ? function (o, d, c, p) {
                  (p === void 0 && (p = c),
                    Object.defineProperty(o, p, {
                      enumerable: !0,
                      get: function () {
                        return d[c];
                      },
                    }));
                }
              : function (o, d, c, p) {
                  (p === void 0 && (p = c), (o[p] = d[c]));
                }),
          a =
            (Ae && Ae.__exportStar) ||
            function (o, d) {
              for (var c in o)
                c !== "default" && !Object.prototype.hasOwnProperty.call(d, c) && r(d, o, c);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), a(no(), e), a(ao(), e), a(oo(), e));
      })(Ae)),
    Ae
  );
}
var ge = {},
  ue = {},
  ne = {},
  Ut;
function wt() {
  if (Ut) return ne;
  ((Ut = 1),
    Object.defineProperty(ne, "__esModule", { value: !0 }),
    (ne.anyChar =
      ne.notWhitespace =
      ne.whitespace =
      ne.notInts =
      ne.ints =
      ne.notWords =
      ne.words =
        void 0));
  const e = Pe(),
    r = () => [{ type: e.types.RANGE, from: 48, to: 57 }],
    a = () => [
      { type: e.types.CHAR, value: 95 },
      { type: e.types.RANGE, from: 97, to: 122 },
      { type: e.types.RANGE, from: 65, to: 90 },
      { type: e.types.RANGE, from: 48, to: 57 },
    ],
    o = () => [
      { type: e.types.CHAR, value: 9 },
      { type: e.types.CHAR, value: 10 },
      { type: e.types.CHAR, value: 11 },
      { type: e.types.CHAR, value: 12 },
      { type: e.types.CHAR, value: 13 },
      { type: e.types.CHAR, value: 32 },
      { type: e.types.CHAR, value: 160 },
      { type: e.types.CHAR, value: 5760 },
      { type: e.types.RANGE, from: 8192, to: 8202 },
      { type: e.types.CHAR, value: 8232 },
      { type: e.types.CHAR, value: 8233 },
      { type: e.types.CHAR, value: 8239 },
      { type: e.types.CHAR, value: 8287 },
      { type: e.types.CHAR, value: 12288 },
      { type: e.types.CHAR, value: 65279 },
    ],
    d = () => [
      { type: e.types.CHAR, value: 10 },
      { type: e.types.CHAR, value: 13 },
      { type: e.types.CHAR, value: 8232 },
      { type: e.types.CHAR, value: 8233 },
    ];
  return (
    (ne.words = () => ({ type: e.types.SET, set: a(), not: !1 })),
    (ne.notWords = () => ({ type: e.types.SET, set: a(), not: !0 })),
    (ne.ints = () => ({ type: e.types.SET, set: r(), not: !1 })),
    (ne.notInts = () => ({ type: e.types.SET, set: r(), not: !0 })),
    (ne.whitespace = () => ({ type: e.types.SET, set: o(), not: !1 })),
    (ne.notWhitespace = () => ({ type: e.types.SET, set: o(), not: !0 })),
    (ne.anyChar = () => ({ type: e.types.SET, set: d(), not: !0 })),
    ne
  );
}
var Kt;
function io() {
  if (Kt) return ue;
  Kt = 1;
  var e =
      (ue && ue.__createBinding) ||
      (Object.create
        ? function (p, i, s, n) {
            (n === void 0 && (n = s),
              Object.defineProperty(p, n, {
                enumerable: !0,
                get: function () {
                  return i[s];
                },
              }));
          }
        : function (p, i, s, n) {
            (n === void 0 && (n = s), (p[n] = i[s]));
          }),
    r =
      (ue && ue.__setModuleDefault) ||
      (Object.create
        ? function (p, i) {
            Object.defineProperty(p, "default", { enumerable: !0, value: i });
          }
        : function (p, i) {
            p.default = i;
          }),
    a =
      (ue && ue.__importStar) ||
      function (p) {
        if (p && p.__esModule) return p;
        var i = {};
        if (p != null)
          for (var s in p)
            s !== "default" && Object.prototype.hasOwnProperty.call(p, s) && e(i, p, s);
        return (r(i, p), i);
      };
  (Object.defineProperty(ue, "__esModule", { value: !0 }),
    (ue.tokenizeClass = ue.strToChars = void 0));
  const o = Pe(),
    d = a(wt()),
    c = "@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?";
  return (
    (ue.strToChars = (p) => {
      const i = /(\[\\b\])|(\\)?\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|c([@A-Z[\\\]^?])|([0tnvfr]))/g;
      return p.replace(i, (s, n, u, l, x, h, m) => {
        if (u) return s;
        let g = n
            ? 8
            : l
              ? parseInt(l, 16)
              : x
                ? parseInt(x, 16)
                : h
                  ? c.indexOf(h)
                  : { 0: 0, t: 9, n: 10, v: 11, f: 12, r: 13 }[m],
          C = String.fromCharCode(g);
        return /[[\]{}^$.|?*+()]/.test(C) ? `\\${C}` : C;
      });
    }),
    (ue.tokenizeClass = (p, i) => {
      var s, n, u, l, x, h, m;
      let g = [],
        C,
        b;
      const L =
        /\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\]\\]))-(((?:\\)])|(((?:\\)?([^\]])))))|(\])|(?:\\)?([^])/g;
      for (; (C = L.exec(p)) !== null;) {
        const F =
          (m =
            (h =
              (x =
                (l =
                  (u =
                    (n =
                      (s = C[1] && d.words()) !== null && s !== void 0 ? s : C[2] && d.ints()) !==
                      null && n !== void 0
                      ? n
                      : C[3] && d.whitespace()) !== null && u !== void 0
                    ? u
                    : C[4] && d.notWords()) !== null && l !== void 0
                  ? l
                  : C[5] && d.notInts()) !== null && x !== void 0
                ? x
                : C[6] && d.notWhitespace()) !== null && h !== void 0
              ? h
              : C[7] && {
                  type: o.types.RANGE,
                  from: (C[8] || C[9]).charCodeAt(0),
                  to: (b = C[10]).charCodeAt(b.length - 1),
                }) !== null && m !== void 0
            ? m
            : (b = C[16]) && { type: o.types.CHAR, value: b.charCodeAt(0) };
        if (F) g.push(F);
        else return [g, L.lastIndex];
      }
      throw new SyntaxError(`Invalid regular expression: /${i}/: Unterminated character class`);
    }),
    ue
  );
}
var Yt;
function Zt() {
  if (Yt) return ge;
  Yt = 1;
  var e =
      (ge && ge.__createBinding) ||
      (Object.create
        ? function (u, l, x, h) {
            (h === void 0 && (h = x),
              Object.defineProperty(u, h, {
                enumerable: !0,
                get: function () {
                  return l[x];
                },
              }));
          }
        : function (u, l, x, h) {
            (h === void 0 && (h = x), (u[h] = l[x]));
          }),
    r =
      (ge && ge.__setModuleDefault) ||
      (Object.create
        ? function (u, l) {
            Object.defineProperty(u, "default", { enumerable: !0, value: l });
          }
        : function (u, l) {
            u.default = l;
          }),
    a =
      (ge && ge.__importStar) ||
      function (u) {
        if (u && u.__esModule) return u;
        var l = {};
        if (u != null)
          for (var x in u)
            x !== "default" && Object.prototype.hasOwnProperty.call(u, x) && e(l, u, x);
        return (r(l, u), l);
      };
  (Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.tokenizer = void 0));
  const o = a(io()),
    d = Pe(),
    c = a(wt()),
    p = /^[a-zA-Z_$]$/i,
    i = /^[a-zA-Z0-9_$]$/i,
    s = /\d/;
  ge.tokenizer = (u) => {
    let l = 0,
      x,
      h = { type: d.types.ROOT, stack: [] },
      m = h,
      g = h.stack,
      C = [],
      b = [],
      L = 0;
    const F = (P) => {
      throw new SyntaxError(
        `Invalid regular expression: /${u}/: Nothing to repeat at column ${P - 1}`,
      );
    };
    let T = o.strToChars(u);
    for (; l < T.length;)
      switch ((x = T[l++])) {
        case "\\":
          if (l === T.length)
            throw new SyntaxError(`Invalid regular expression: /${u}/: \\ at end of pattern`);
          switch ((x = T[l++])) {
            case "b":
              g.push({ type: d.types.POSITION, value: "b" });
              break;
            case "B":
              g.push({ type: d.types.POSITION, value: "B" });
              break;
            case "w":
              g.push(c.words());
              break;
            case "W":
              g.push(c.notWords());
              break;
            case "d":
              g.push(c.ints());
              break;
            case "D":
              g.push(c.notInts());
              break;
            case "s":
              g.push(c.whitespace());
              break;
            case "S":
              g.push(c.notWhitespace());
              break;
            default:
              if (s.test(x)) {
                let P = x;
                for (; l < T.length && s.test(T[l]);) P += T[l++];
                let _ = parseInt(P, 10);
                const M = { type: d.types.REFERENCE, value: _ };
                (g.push(M), b.push({ reference: M, stack: g, index: g.length - 1 }));
              } else g.push({ type: d.types.CHAR, value: x.charCodeAt(0) });
          }
          break;
        case "^":
          g.push({ type: d.types.POSITION, value: "^" });
          break;
        case "$":
          g.push({ type: d.types.POSITION, value: "$" });
          break;
        case "[": {
          let P;
          T[l] === "^" ? ((P = !0), l++) : (P = !1);
          let _ = o.tokenizeClass(T.slice(l), u);
          ((l += _[1]), g.push({ type: d.types.SET, set: _[0], not: P }));
          break;
        }
        case ".":
          g.push(c.anyChar());
          break;
        case "(": {
          let P = { type: d.types.GROUP, stack: [], remember: !0 };
          if (T[l] === "?")
            if (((x = T[l + 1]), (l += 2), x === "=")) ((P.followedBy = !0), (P.remember = !1));
            else if (x === "!") ((P.notFollowedBy = !0), (P.remember = !1));
            else if (x === "<") {
              let _ = "";
              if (p.test(T[l])) ((_ += T[l]), l++);
              else
                throw new SyntaxError(
                  `Invalid regular expression: /${u}/: Invalid capture group name, character '${T[l]}' after '<' at column ${l + 1}`,
                );
              for (; l < T.length && i.test(T[l]);) ((_ += T[l]), l++);
              if (!_)
                throw new SyntaxError(
                  `Invalid regular expression: /${u}/: Invalid capture group name, character '${T[l]}' after '<' at column ${l + 1}`,
                );
              if (T[l] !== ">")
                throw new SyntaxError(
                  `Invalid regular expression: /${u}/: Unclosed capture group name, expected '>', found '${T[l]}' at column ${l + 1}`,
                );
              ((P.name = _), l++);
            } else if (x === ":") P.remember = !1;
            else
              throw new SyntaxError(
                `Invalid regular expression: /${u}/: Invalid group, character '${x}' after '?' at column ${l - 1}`,
              );
          else L += 1;
          (g.push(P), C.push(m), (m = P), (g = P.stack));
          break;
        }
        case ")":
          if (C.length === 0)
            throw new SyntaxError(
              `Invalid regular expression: /${u}/: Unmatched ) at column ${l - 1}`,
            );
          ((m = C.pop()), (g = m.options ? m.options[m.options.length - 1] : m.stack));
          break;
        case "|": {
          m.options || ((m.options = [m.stack]), delete m.stack);
          let P = [];
          (m.options.push(P), (g = P));
          break;
        }
        case "{": {
          let P = /^(\d+)(,(\d+)?)?\}/.exec(T.slice(l)),
            _,
            M;
          P !== null
            ? (g.length === 0 && F(l),
              (_ = parseInt(P[1], 10)),
              (M = P[2] ? (P[3] ? parseInt(P[3], 10) : 1 / 0) : _),
              (l += P[0].length),
              g.push({ type: d.types.REPETITION, min: _, max: M, value: g.pop() }))
            : g.push({ type: d.types.CHAR, value: 123 });
          break;
        }
        case "?":
          (g.length === 0 && F(l),
            g.push({ type: d.types.REPETITION, min: 0, max: 1, value: g.pop() }));
          break;
        case "+":
          (g.length === 0 && F(l),
            g.push({ type: d.types.REPETITION, min: 1, max: 1 / 0, value: g.pop() }));
          break;
        case "*":
          (g.length === 0 && F(l),
            g.push({ type: d.types.REPETITION, min: 0, max: 1 / 0, value: g.pop() }));
          break;
        default:
          g.push({ type: d.types.CHAR, value: x.charCodeAt(0) });
      }
    if (C.length !== 0)
      throw new SyntaxError(`Invalid regular expression: /${u}/: Unterminated group`);
    return (n(b, L), h);
  };
  function n(u, l) {
    for (const x of u.reverse())
      if (l < x.reference.value) {
        x.reference.type = d.types.CHAR;
        const h = x.reference.value.toString();
        if (((x.reference.value = parseInt(h, 8)), !/^[0-7]+$/.test(h))) {
          let m = 0;
          for (; h[m] !== "8" && h[m] !== "9";) m += 1;
          if (
            (m === 0
              ? ((x.reference.value = h.charCodeAt(0)), (m += 1))
              : (x.reference.value = parseInt(h.slice(0, m), 8)),
            h.length > m)
          ) {
            const g = x.stack.splice(x.index + 1);
            for (const C of h.slice(m))
              x.stack.push({ type: d.types.CHAR, value: C.charCodeAt(0) });
            x.stack.push(...g);
          }
        }
      }
  }
  return ge;
}
var dt = {},
  pe = {},
  ae = {},
  Qt;
function so() {
  if (Qt) return ae;
  Qt = 1;
  var e =
      (ae && ae.__createBinding) ||
      (Object.create
        ? function (p, i, s, n) {
            (n === void 0 && (n = s),
              Object.defineProperty(p, n, {
                enumerable: !0,
                get: function () {
                  return i[s];
                },
              }));
          }
        : function (p, i, s, n) {
            (n === void 0 && (n = s), (p[n] = i[s]));
          }),
    r =
      (ae && ae.__setModuleDefault) ||
      (Object.create
        ? function (p, i) {
            Object.defineProperty(p, "default", { enumerable: !0, value: i });
          }
        : function (p, i) {
            p.default = i;
          }),
    a =
      (ae && ae.__importStar) ||
      function (p) {
        if (p && p.__esModule) return p;
        var i = {};
        if (p != null)
          for (var s in p)
            s !== "default" && Object.prototype.hasOwnProperty.call(p, s) && e(i, p, s);
        return (r(i, p), i);
      };
  (Object.defineProperty(ae, "__esModule", { value: !0 }),
    (ae.NOTANYCHAR = ae.WHITESPACE = ae.WORDS = ae.INTS = void 0));
  const o = a(wt()),
    d = Pe();
  function c(p) {
    let i = {},
      s = 0;
    for (const n of p)
      (n.type === d.types.CHAR && (i[n.value] = !0),
        n.type === d.types.RANGE && (i[`${n.from}-${n.to}`] = !0),
        (s += 1));
    return { lookup: () => Object.assign({}, i), len: s };
  }
  return (
    (ae.INTS = c(o.ints().set)),
    (ae.WORDS = c(o.words().set)),
    (ae.WHITESPACE = c(o.whitespace().set)),
    (ae.NOTANYCHAR = c(o.anyChar().set)),
    ae
  );
}
var Jt;
function lo() {
  if (Jt) return pe;
  Jt = 1;
  var e =
      (pe && pe.__createBinding) ||
      (Object.create
        ? function (n, u, l, x) {
            (x === void 0 && (x = l),
              Object.defineProperty(n, x, {
                enumerable: !0,
                get: function () {
                  return u[l];
                },
              }));
          }
        : function (n, u, l, x) {
            (x === void 0 && (x = l), (n[x] = u[l]));
          }),
    r =
      (pe && pe.__setModuleDefault) ||
      (Object.create
        ? function (n, u) {
            Object.defineProperty(n, "default", { enumerable: !0, value: u });
          }
        : function (n, u) {
            n.default = u;
          }),
    a =
      (pe && pe.__importStar) ||
      function (n) {
        if (n && n.__esModule) return n;
        var u = {};
        if (n != null)
          for (var l in n)
            l !== "default" && Object.prototype.hasOwnProperty.call(n, l) && e(u, n, l);
        return (r(u, n), u);
      };
  (Object.defineProperty(pe, "__esModule", { value: !0 }),
    (pe.writeSetTokens = pe.setChar = void 0));
  const o = Pe(),
    d = a(so());
  function c(n) {
    return n === 94
      ? "\\^"
      : n === 92
        ? "\\\\"
        : n === 93
          ? "\\]"
          : n === 45
            ? "\\-"
            : String.fromCharCode(n);
  }
  pe.setChar = c;
  function p(n, { lookup: u, len: l }) {
    if (l !== n.length) return !1;
    const x = u();
    for (const h of n) {
      if (h.type === o.types.SET) return !1;
      const m = h.type === o.types.CHAR ? h.value : `${h.from}-${h.to}`;
      if (x[m]) x[m] = !1;
      else return !1;
    }
    return !0;
  }
  function i(n, u = !1) {
    if (p(n.set, d.INTS)) return n.not ? "\\D" : "\\d";
    if (p(n.set, d.WORDS)) return n.not ? "\\W" : "\\w";
    if (n.not && p(n.set, d.NOTANYCHAR)) return ".";
    if (p(n.set, d.WHITESPACE)) return n.not ? "\\S" : "\\s";
    let l = "";
    for (let h = 0; h < n.set.length; h++) {
      const m = n.set[h];
      l += s(m);
    }
    const x = `${n.not ? "^" : ""}${l}`;
    return u ? x : `[${x}]`;
  }
  pe.writeSetTokens = i;
  function s(n) {
    return n.type === o.types.CHAR
      ? c(n.value)
      : n.type === o.types.RANGE
        ? `${c(n.from)}-${c(n.to)}`
        : i(n, !0);
  }
  return pe;
}
var er;
function tr() {
  return (
    er ||
      ((er = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.reconstruct = void 0));
        const r = Pe(),
          a = lo(),
          o = (c) => c.map(e.reconstruct).join(""),
          d = (c) => {
            if ("options" in c) return c.options.map(o).join("|");
            if ("stack" in c) return o(c.stack);
            throw new Error("options or stack must be Root or Group token");
          };
        e.reconstruct = (c) => {
          switch (c.type) {
            case r.types.ROOT:
              return d(c);
            case r.types.CHAR: {
              const p = String.fromCharCode(c.value);
              return (/[[\\{}$^.|?*+()]/.test(p) ? "\\" : "") + p;
            }
            case r.types.POSITION:
              return c.value === "^" || c.value === "$" ? c.value : `\\${c.value}`;
            case r.types.REFERENCE:
              return `\\${c.value}`;
            case r.types.SET:
              return a.writeSetTokens(c);
            case r.types.GROUP:
              return `(${c.name ? `?<${c.name}>` : c.remember ? "" : c.followedBy ? "?=" : c.notFollowedBy ? "?!" : "?:"}${d(c)})`;
            case r.types.REPETITION: {
              const { min: p, max: i } = c;
              let s;
              return (
                p === 0 && i === 1
                  ? (s = "?")
                  : p === 1 && i === 1 / 0
                    ? (s = "+")
                    : p === 0 && i === 1 / 0
                      ? (s = "*")
                      : i === 1 / 0
                        ? (s = `{${p},}`)
                        : p === i
                          ? (s = `{${p}}`)
                          : (s = `{${p},${i}}`),
                `${e.reconstruct(c.value)}${s}`
              );
            }
            case r.types.RANGE:
              return `${a.setChar(c.from)}-${a.setChar(c.to)}`;
            default:
              throw new Error(`Invalid token type ${c}`);
          }
        };
      })(dt)),
    dt
  );
}
var Qe = Ge.exports,
  rr;
function nr() {
  return (
    rr ||
      ((rr = 1),
      (function (e, r) {
        var a =
            (Qe && Qe.__createBinding) ||
            (Object.create
              ? function (i, s, n, u) {
                  (u === void 0 && (u = n),
                    Object.defineProperty(i, u, {
                      enumerable: !0,
                      get: function () {
                        return s[n];
                      },
                    }));
                }
              : function (i, s, n, u) {
                  (u === void 0 && (u = n), (i[u] = s[n]));
                }),
          o =
            (Qe && Qe.__exportStar) ||
            function (i, s) {
              for (var n in i)
                n !== "default" && !Object.prototype.hasOwnProperty.call(s, n) && a(s, i, n);
            };
        (Object.defineProperty(r, "__esModule", { value: !0 }), (r.types = void 0));
        const d = Pe();
        (Object.defineProperty(r, "types", {
          enumerable: !0,
          get: function () {
            return d.types;
          },
        }),
          o(Zt(), r),
          o(tr(), r));
        const c = Zt(),
          p = tr();
        (o(Pe(), r),
          (r.default = c.tokenizer),
          (e.exports = c.tokenizer),
          (e.exports.types = d.types),
          (e.exports.reconstruct = p.reconstruct));
      })(Ge, Ge.exports)),
    Ge.exports
  );
}
var ar;
function co() {
  if (ar) return He.exports;
  ar = 1;
  const e = nr(),
    { types: r } = nr();
  function a(c, p, i) {
    var h, m;
    let s, n, u;
    if (c.type === r.REPETITION && (i++, p.reps++, i > 1 || p.reps > p.limit)) return !1;
    const l = c.options || ((h = c.value) == null ? void 0 : h.options);
    if (l) {
      for (s = 0, u = l.length; s < u; s++) if (((n = a({ stack: l[s] }, p, i)), !n)) return !1;
    }
    const x = c.stack || ((m = c.value) == null ? void 0 : m.stack);
    if (!x) return !0;
    for (s = 0, u = x.length; s < u; s++) if (((n = a(x[s], p, i)), !n)) return !1;
    return !0;
  }
  function o(c, p) {
    const i = { reps: 0, limit: (p == null ? void 0 : p.limit) ?? 25 };
    d(c) ? (c = c.source) : typeof c != "string" && (c = String(c));
    try {
      return a(e(c), i, 0);
    } catch {
      return !1;
    }
  }
  function d(c) {
    return Object.prototype.toString.call(c) === "[object RegExp]";
  }
  return ((He.exports = o), (He.exports.default = o), (He.exports.safeRegex = o), He.exports);
}
var uo = co();
const _s = en(uo),
  po = 0.02,
  fo = 0.1,
  xt = 1e4,
  xo = (e) => Math.round(e * xt) / xt,
  Tr = (e) => Math.round(e * xt) / 100,
  ho = (e) => `${Tr(e)}%`,
  Er = ({
    storageKey: e,
    defaultRatio: r,
    minRatio: a,
    maxRatio: o,
    resizeEdge: d,
    getResizeStartMetrics: c,
    step: p = po,
    pageStep: i = fo,
    storedValueErrorMessage: s = "Stored panel ratio must be a finite number.",
    resizeMetricsErrorMessage:
      n = "Resizable panel ratio measurements must be finite and positive.",
    readErrorMessage: u,
    writeErrorMessage: l,
  }) => {
    const { value: x, resizeHandleProps: h } = jn({
      storageKey: e,
      defaultValue: r,
      minValue: a,
      maxValue: o,
      resizeEdge: d,
      getResizeStartMetrics: c,
      normalizeValue: xo,
      getAriaValue: Tr,
      getAriaValueText: ho,
      step: p,
      pageStep: i,
      storedValueErrorMessage: s,
      resizeMetricsErrorMessage: n,
      readErrorMessage: u,
      writeErrorMessage: l,
    });
    return { ratio: x, resizeHandleProps: h };
  },
  mo = (e, r) => (a) => ({
    flex: e ? (r ? "1 1 auto" : "0 0 min(15rem, 34vh)") : "0 0 2.8rem",
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
    position: "relative",
    zIndex: 2,
    overflow: "visible",
    marginTop: r ? a.spacing(3.5) : 0,
    borderTop: `1px solid ${A(a.palette.text.primary, 0.1)}`,
    backgroundColor: A(a.palette.background.paper, 0.96),
    transition: a.transitions.create("flex-basis", { duration: a.transitions.duration.shorter }),
  }),
  go = (e) => ({
    minHeight: "2.8rem",
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    paddingInline: e.spacing(0.75),
    borderBottom: `1px solid ${A(e.palette.text.primary, 0.08)}`,
  }),
  bo = (e) => ({
    flex: "1 1 auto",
    minHeight: "2.75rem",
    minWidth: 0,
    "& .MuiTab-root": { minHeight: "2.75rem", paddingInline: e.spacing(1.25) },
  }),
  yo = (e) => ({
    position: "absolute",
    top: 0,
    left: "50%",
    zIndex: 3,
    width: e.spacing(10),
    minWidth: e.spacing(10),
    maxWidth: e.spacing(10),
    height: e.spacing(3.5),
    minHeight: e.spacing(3.5),
    maxHeight: e.spacing(3.5),
    boxSizing: "border-box",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: e.spacing(0.4),
    transform: "translate(-50%, -100%)",
    paddingInline: e.spacing(1),
    border: `1px solid ${A(e.palette.text.primary, 0.16)}`,
    borderBottom: 0,
    borderRadius: `${e.shape.radiusMdPx} ${e.shape.radiusMdPx} 0 0`,
    color: e.palette.text.secondary,
    backgroundColor: A(e.palette.background.paper, 0.98),
    boxShadow: "none",
    transition: "none",
    "&:focus-visible": {
      outline: `2px solid ${A(e.palette.primary.main, 0.34)}`,
      outlineOffset: 2,
    },
  }),
  vo = (e) => ({ display: "inline-flex", alignItems: "center", gap: e.spacing(0.65) }),
  jo = { flex: 1, minHeight: 0, overflow: "hidden" },
  ut = (e) => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: e.spacing(0.5),
    padding: e.spacing(1),
    overflowY: "auto",
    "& > div:first-of-type": {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: e.spacing(0.5),
      paddingBottom: e.spacing(0.4),
    },
  }),
  Le = (e) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: e.spacing(0.8),
    padding: e.spacing(0.7, 0.85),
    borderRadius: e.shape.radiusSmPx,
    textAlign: "left",
    "&:hover": { backgroundColor: A(e.palette.primary.main, 0.07) },
    '&[aria-current="true"]': { backgroundColor: A(e.palette.primary.main, 0.11) },
    "&:focus-visible": {
      outline: `2px solid ${A(e.palette.primary.main, 0.42)}`,
      outlineOffset: -2,
    },
  }),
  De = { minWidth: 0, display: "flex", flexDirection: "column", alignItems: "flex-start" },
  Ve = (e) => ({
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: e.spacing(1),
    padding: e.spacing(2),
    color: e.palette.text.secondary,
  }),
  wo = (e) => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: e.spacing(1),
    overflow: "auto",
    padding: e.spacing(1),
    "& pre": { margin: 0, whiteSpace: "pre-wrap", overflowWrap: "anywhere" },
  }),
  _r = (e) => {
    var o, d;
    const r = "hasPdf" in e ? e.success : (o = e.result) == null ? void 0 : o.success,
      a = "hasPdf" in e ? e.durationMs : (d = e.result) == null ? void 0 : d.durationMs;
    return e.status === "completed" && r && typeof a == "number"
      ? `Compiled in ${a} ms`
      : e.status === "completed" && r === !1 && typeof a == "number"
        ? `LaTeX failed in ${a} ms`
        : e.status === "completed"
          ? "Compile completed without output"
          : e.status === "failed"
            ? "Compiler infrastructure failed"
            : e.status === "cancelled"
              ? "Compile cancelled"
              : e.status === "running"
                ? "Compile running"
                : "Compile queued";
  },
  ze = (e, ...r) =>
    !e ||
    r.some((a) =>
      String(a ?? "")
        .toLocaleLowerCase()
        .includes(e),
    ),
  Co = ({
    activeTab: e,
    compileHistory: r,
    compileResult: a,
    diagnostics: o,
    onOpenDiagnostic: d,
  }) => {
    const [c, p] = f.useState("all"),
      [i, s] = f.useState({ problems: "", log: "", outputs: "", history: "" }),
      [n, u] = f.useState(null),
      l = i[e],
      x = i.problems.trim().toLocaleLowerCase(),
      h = i.log.trim().toLocaleLowerCase(),
      m = i.outputs.trim().toLocaleLowerCase(),
      g = i.history.trim().toLocaleLowerCase(),
      C = f.useMemo(
        () =>
          o.filter(
            (k) =>
              (c === "all" || k.severity === c) &&
              ze(x, k.message, k.file, k.line, k.column, k.package, k.code),
          ),
        [o, c, x],
      ),
      b = f.useMemo(
        () => ({
          error: o.filter(({ severity: k }) => k === "error").length,
          hint: o.filter(({ severity: k }) => k === "hint").length,
          info: o.filter(({ severity: k }) => k === "info").length,
          warning: o.filter(({ severity: k }) => k === "warning").length,
        }),
        [o],
      ),
      L = f.useMemo(
        () => (a == null ? void 0 : a.outputFiles) ?? [],
        [a == null ? void 0 : a.outputFiles],
      ),
      F = L.reduce((k, E) => k + E.sizeBytes, 0),
      T = f.useMemo(() => L.filter((k) => ze(m, k.path, k.sizeBytes, "latexmk generated")), [m, L]),
      P = f.useMemo(
        () =>
          r.filter((k) =>
            ze(
              g,
              _r(k),
              k.status,
              k.compiler,
              k.documentRevision,
              k.createdAt,
              new Date(k.createdAt).toLocaleString(),
            ),
          ),
        [r, g],
      ),
      _ = f.useMemo(() => {
        const k = (a == null ? void 0 : a.log) ?? "";
        return h
          ? k.split(/\r?\n/).filter((E) => ze(h, E)).join(`
`)
          : k;
      }, [a == null ? void 0 : a.log, h]),
      M = !!(a && (a.pdfAttachmentId || a.pdfBase64) && ze(m, "document.pdf", "compiled pdf")),
      W = !!(a != null && a.outputAttachmentId && ze(m, "generated files zip archive")),
      B = !!(a && ze(m, "compile.log compiler output")),
      U = M || W || B || T.length > 0,
      q = f.useCallback(
        (k) => {
          s((E) => ({ ...E, [e]: k }));
        },
        [e],
      ),
      H = f.useCallback(
        (k) => {
          if (C.length === 0) return;
          const E = n ? C.indexOf(n) : -1,
            le = E === -1 ? (k === 1 ? 0 : C.length - 1) : (E + k + C.length) % C.length,
            V = C[le];
          (u(V), d(V));
        },
        [C, d, n],
      );
    return (
      f.useEffect(() => {
        if (C.length === 0) return;
        const k = (E) => {
          E.defaultPrevented ||
            E.isComposing ||
            E.repeat ||
            E.altKey ||
            E.ctrlKey ||
            E.metaKey ||
            E.code !== "F8" ||
            (E.preventDefault(), H(E.shiftKey ? -1 : 1));
        };
        return (
          document.addEventListener("keydown", k),
          () => {
            document.removeEventListener("keydown", k);
          }
        );
      }, [C.length, H]),
      {
        diagnosticCounts: b,
        filter: c,
        filteredCompileHistory: P,
        filteredDiagnostics: C,
        filteredLog: _,
        filteredOutputFiles: T,
        hasFilteredOutput: U,
        navigateDiagnostic: H,
        outputBytes: F,
        outputFiles: L,
        selectedDiagnostic: n,
        setFilter: p,
        setSelectedDiagnostic: u,
        showCompileLog: B,
        showOutputArchive: W,
        showPdfOutput: M,
        textFilter: l,
        updateTextFilter: q,
      }
    );
  },
  So = (e) => {
    const r = typeof e.file == "string" ? e.file : null,
      a = typeof e.column == "number" ? e.column : null,
      o = e.line ? `Line ${e.line}${a !== null ? `:${a}` : ""}` : "Project";
    return [e.package ? `Package ${e.package}` : null, r, o, e.code].filter(Boolean).join(" · ");
  },
  or = (e) =>
    e < 1024
      ? `${e} B`
      : e < 1024 * 1024
        ? `${(e / 1024).toFixed(1)} KiB`
        : `${(e / (1024 * 1024)).toFixed(1)} MiB`,
  Po = (e) => (e === "error" || e === "warning" || e === "info" ? e : "secondary"),
  ir = (e) => e.replace(/\s+/g, " ").trim() || "(empty)",
  ko = ({
    activeTab: e,
    compileHistory: r,
    compileResult: a,
    diagnostics: o,
    editProposalReview: d,
    model: c,
    onDownloadLog: p,
    onDownloadOutputs: i,
    onOpenDiagnostic: s,
    onSelectCompileJob: n,
    onShowPdf: u,
    selectedCompileJobId: l,
  }) => {
    const {
        diagnosticCounts: x,
        filter: h,
        filteredCompileHistory: m,
        filteredDiagnostics: g,
        filteredLog: C,
        filteredOutputFiles: b,
        hasFilteredOutput: L,
        navigateDiagnostic: F,
        outputBytes: T,
        outputFiles: P,
        selectedDiagnostic: _,
        setFilter: M,
        setSelectedDiagnostic: W,
        showCompileLog: B,
        showOutputArchive: U,
        showPdfOutput: q,
        textFilter: H,
        updateTextFilter: k,
      } = c,
      E = (d == null ? void 0 : d.proposal.edits) ?? [],
      le = H.trim().toLocaleLowerCase(),
      V = E.filter((S) =>
        [S.path, S.oldText, S.newText].some((K) => K.toLocaleLowerCase().includes(le)),
      ),
      Y = new Set(E.map((S) => S.fileId)).size;
    return t.jsxs(t.Fragment, {
      children: [
        e === "problems" &&
          t.jsxs(y, {
            sx: ut,
            children: [
              t.jsxs(y, {
                children: [
                  t.jsx(be, {
                    fullWidth: !0,
                    size: "small",
                    label: "Filter problems",
                    value: H,
                    onChange: (S) => k(S.target.value),
                    sx: { mb: 1 },
                  }),
                  t.jsx(we, {
                    clickable: !0,
                    size: "small",
                    color: h === "all" ? "primary" : "default",
                    label: `All ${o.length}`,
                    onClick: () => M("all"),
                  }),
                  t.jsx(we, {
                    clickable: !0,
                    size: "small",
                    color: h === "error" ? "error" : "default",
                    label: `Errors ${x.error}`,
                    onClick: () => M("error"),
                  }),
                  t.jsx(we, {
                    clickable: !0,
                    size: "small",
                    color: h === "warning" ? "warning" : "default",
                    label: `Warnings ${x.warning}`,
                    onClick: () => M("warning"),
                  }),
                  x.info > 0 &&
                    t.jsx(we, {
                      clickable: !0,
                      size: "small",
                      color: h === "info" ? "info" : "default",
                      label: `Info ${x.info}`,
                      onClick: () => M("info"),
                    }),
                  x.hint > 0 &&
                    t.jsx(we, {
                      clickable: !0,
                      size: "small",
                      color: h === "hint" ? "secondary" : "default",
                      label: `Hints ${x.hint}`,
                      onClick: () => M("hint"),
                    }),
                  t.jsx(Q, {
                    tooltip: "Previous diagnostic (Shift+F8)",
                    "aria-label": "Previous LaTeX diagnostic",
                    size: "small",
                    disabled: g.length === 0,
                    onClick: () => F(-1),
                    children: t.jsx(Gn, { size: 16 }),
                  }),
                  t.jsx(Q, {
                    tooltip: "Next diagnostic (F8)",
                    "aria-label": "Next LaTeX diagnostic",
                    size: "small",
                    disabled: g.length === 0,
                    onClick: () => F(1),
                    children: t.jsx(Xn, { size: 16 }),
                  }),
                ],
              }),
              g.length > 0 &&
                g.map((S, K) =>
                  t.jsxs(
                    $e,
                    {
                      "aria-current": S === _ ? "true" : void 0,
                      disableRipple: !0,
                      sx: Le,
                      onClick: () => {
                        (W(S), s(S));
                      },
                      children: [
                        t.jsx(sn, { "aria-hidden": !0, size: 16 }),
                        t.jsxs(y, {
                          sx: De,
                          children: [
                            t.jsx(I, {
                              variant: "body2",
                              color: "textPrimary",
                              children: S.message,
                            }),
                            t.jsx(we, { size: "small", color: Po(S.severity), label: S.severity }),
                            t.jsx(I, { variant: "caption", children: So(S) }),
                          ],
                        }),
                      ],
                    },
                    `${S.severity}-${S.line ?? "project"}-${K}`,
                  ),
                ),
              g.length === 0 &&
                t.jsx(y, {
                  sx: Ve,
                  children: t.jsx(I, {
                    variant: "body2",
                    color: "textSecondary",
                    children: "No diagnostics match this filter.",
                  }),
                }),
            ],
          }),
        e === "log" &&
          t.jsxs(y, {
            sx: wo,
            children: [
              t.jsx(be, {
                fullWidth: !0,
                size: "small",
                label: "Filter compiler log",
                value: H,
                onChange: (S) => k(S.target.value),
              }),
              C && t.jsx(I, { variant: "codeBlock", component: "pre", children: C }),
              !C &&
                !!(a != null && a.log) &&
                t.jsx(de, {
                  severity: "info",
                  variant: "outlined",
                  children: "No compiler log lines match this filter.",
                }),
              !C &&
                !(a != null && a.log) &&
                t.jsx(de, {
                  severity: "info",
                  variant: "outlined",
                  children: "Compile the project to inspect its complete log.",
                }),
            ],
          }),
        e === "outputs" &&
          t.jsxs(y, {
            sx: ut,
            children: [
              t.jsx(be, {
                fullWidth: !0,
                size: "small",
                label: "Filter document changes and output files",
                value: H,
                onChange: (S) => k(S.target.value),
              }),
              d &&
                t.jsxs(y, {
                  children: [
                    t.jsx(I, {
                      variant: "subtitle2",
                      color: "textPrimary",
                      children: "Document changes",
                    }),
                    t.jsxs(I, {
                      variant: "caption",
                      color: "textSecondary",
                      children: [
                        d.proposal.summary,
                        " · ",
                        E.length,
                        " ",
                        E.length === 1 ? "change" : "changes",
                        " across",
                        " ",
                        Y,
                        " ",
                        Y === 1 ? "file" : "files",
                      ],
                    }),
                  ],
                }),
              d &&
                V.map((S, K) =>
                  t.jsxs(
                    $e,
                    {
                      disableRipple: !0,
                      sx: Le,
                      "aria-label": "Open proposed change in " + S.path,
                      onClick: () => {
                        d.onOpenFile(S.fileId);
                      },
                      children: [
                        t.jsx(ea, { "aria-hidden": !0, size: 16 }),
                        t.jsxs(y, {
                          sx: De,
                          children: [
                            t.jsx(I, {
                              variant: "body2",
                              color: "textPrimary",
                              noWrap: !0,
                              children: S.path,
                            }),
                            t.jsxs(I, {
                              variant: "caption",
                              color: "error",
                              noWrap: !0,
                              children: ["− ", ir(S.oldText)],
                            }),
                            t.jsxs(I, {
                              variant: "caption",
                              color: "success.main",
                              noWrap: !0,
                              children: ["+ ", ir(S.newText)],
                            }),
                          ],
                        }),
                      ],
                    },
                    S.fileId + "-" + K,
                  ),
                ),
              d &&
                V.length === 0 &&
                t.jsx(y, {
                  sx: Ve,
                  children: t.jsx(I, {
                    variant: "body2",
                    color: "textSecondary",
                    children: "No document changes match this filter.",
                  }),
                }),
              a &&
                t.jsxs(t.Fragment, {
                  children: [
                    t.jsx(y, {
                      children: t.jsx(I, {
                        variant: "subtitle2",
                        color: "textPrimary",
                        children: "Generated outputs",
                      }),
                    }),
                    q &&
                      t.jsxs($e, {
                        disableRipple: !0,
                        sx: Le,
                        onClick: u,
                        children: [
                          t.jsx(ft, { "aria-hidden": !0, size: 16 }),
                          t.jsxs(y, {
                            sx: De,
                            children: [
                              t.jsx(I, {
                                variant: "body2",
                                color: "textPrimary",
                                children: "document.pdf",
                              }),
                              t.jsxs(I, {
                                variant: "caption",
                                children: ["Compiled PDF · ", a.durationMs, " ms"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    U &&
                      t.jsxs($e, {
                        disableRipple: !0,
                        sx: Le,
                        onClick: i,
                        children: [
                          t.jsx(fr, { "aria-hidden": !0, size: 16 }),
                          t.jsxs(y, {
                            sx: De,
                            children: [
                              t.jsx(I, {
                                variant: "body2",
                                color: "textPrimary",
                                children: "Download generated files",
                              }),
                              t.jsxs(I, {
                                variant: "caption",
                                children: [
                                  "ZIP archive · ",
                                  P.length,
                                  " ",
                                  P.length === 1 ? "file" : "files",
                                  " ·",
                                  " ",
                                  or(T),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    b.map((S) =>
                      t.jsxs(
                        y,
                        {
                          sx: Le,
                          children: [
                            t.jsx(ft, { "aria-hidden": !0, size: 16 }),
                            t.jsxs(y, {
                              sx: De,
                              children: [
                                t.jsx(I, {
                                  variant: "body2",
                                  color: "textPrimary",
                                  children: S.path,
                                }),
                                t.jsxs(I, {
                                  variant: "caption",
                                  children: ["Generated by latexmk ·", " ", or(S.sizeBytes)],
                                }),
                              ],
                            }),
                          ],
                        },
                        S.path,
                      ),
                    ),
                    B &&
                      t.jsxs($e, {
                        disableRipple: !0,
                        sx: Le,
                        onClick: p,
                        children: [
                          t.jsx(Ft, { "aria-hidden": !0, size: 16 }),
                          t.jsxs(y, {
                            sx: De,
                            children: [
                              t.jsx(I, {
                                variant: "body2",
                                color: "textPrimary",
                                children: "compile.log",
                              }),
                              t.jsx(I, {
                                variant: "caption",
                                children: "Complete compiler output",
                              }),
                            ],
                          }),
                        ],
                      }),
                    !L &&
                      t.jsx(y, {
                        sx: Ve,
                        children: t.jsx(I, {
                          variant: "body2",
                          color: "textSecondary",
                          children: "No output files match this filter.",
                        }),
                      }),
                  ],
                }),
              !a &&
                t.jsxs(y, {
                  sx: Ve,
                  children: [
                    t.jsx(Ft, { "aria-hidden": !0, size: 20 }),
                    t.jsx(I, {
                      variant: "body2",
                      color: "textSecondary",
                      children: "Compile the project to generate output files.",
                    }),
                  ],
                }),
            ],
          }),
        e === "history" &&
          t.jsxs(y, {
            sx: ut,
            children: [
              t.jsx(be, {
                fullWidth: !0,
                size: "small",
                label: "Filter build history",
                value: H,
                onChange: (S) => k(S.target.value),
              }),
              m.length > 0 &&
                m.map((S) =>
                  t.jsxs(
                    $e,
                    {
                      "aria-current": S.id === l ? "true" : void 0,
                      disableRipple: !0,
                      sx: Le,
                      onClick: () => (n == null ? void 0 : n(S)),
                      children: [
                        t.jsx(vt, {}),
                        t.jsxs(y, {
                          sx: De,
                          children: [
                            t.jsx(I, { variant: "body2", color: "textPrimary", children: _r(S) }),
                            t.jsxs(I, {
                              variant: "caption",
                              children: [
                                S.compiler ?? "pdflatex",
                                " · Revision",
                                " ",
                                S.documentRevision ?? "legacy",
                                " ·",
                                " ",
                                new Date(S.createdAt).toLocaleString(),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    S.id,
                  ),
                ),
              m.length === 0 &&
                t.jsx(y, {
                  sx: Ve,
                  children: t.jsx(I, {
                    variant: "body2",
                    color: "textSecondary",
                    children: r.length
                      ? "No build history entries match this filter."
                      : "No builds yet.",
                  }),
                }),
            ],
          }),
      ],
    });
  },
  Je = ({ icon: e, label: r, count: a }) =>
    t.jsxs(y, {
      sx: vo,
      children: [
        e,
        t.jsx("span", { children: r }),
        a !== void 0 && t.jsx(we, { size: "xs", label: a, color: a ? "primary" : "default" }),
      ],
    }),
  To = f.memo(function ({
    activeTab: r,
    compileHistory: a = [],
    compileResult: o,
    diagnostics: d,
    editProposalReview: c,
    isFluid: p,
    isOpen: i,
    selectedCompileJobId: s,
    onActiveTabChange: n,
    onDownloadLog: u,
    onDownloadOutputs: l,
    onOpenDiagnostic: x,
    onSelectCompileJob: h,
    onShowPdf: m,
    onToggle: g,
  }) {
    const C = Co({
      activeTab: r,
      compileHistory: a,
      compileResult: o,
      diagnostics: d,
      onOpenDiagnostic: x,
    });
    return t.jsxs(y, {
      component: "section",
      sx: mo(i, p),
      children: [
        t.jsxs($e, {
          "aria-label": i ? "Collapse output panel" : "Expand output panel",
          "aria-expanded": i,
          disableRipple: !0,
          sx: yo,
          onClick: g,
          children: [
            i ? t.jsx(Me, { size: 16 }) : t.jsx(yt, { size: 16 }),
            t.jsx(I, { variant: "button", children: "Output" }),
          ],
        }),
        t.jsx(y, {
          sx: go,
          children: t.jsxs(un, {
            value: r,
            variant: "scrollable",
            scrollButtons: "auto",
            "aria-label": "LaTeX workspace output",
            sx: bo,
            onChange: (b, L) => {
              n(L);
            },
            children: [
              t.jsx(Ye, {
                disableRipple: !0,
                value: "problems",
                label: t.jsx(Je, {
                  icon: t.jsx(Cn, { "aria-hidden": !0 }),
                  label: "Problems",
                  count: d.length,
                }),
              }),
              t.jsx(Ye, {
                disableRipple: !0,
                value: "log",
                label: t.jsx(Je, { icon: t.jsx(wn, { "aria-hidden": !0 }), label: "Log" }),
              }),
              t.jsx(Ye, {
                disableRipple: !0,
                value: "outputs",
                label: t.jsx(Je, { icon: t.jsx(ft, { "aria-hidden": !0 }), label: "Output files" }),
              }),
              t.jsx(Ye, {
                disableRipple: !0,
                value: "history",
                label: t.jsx(Je, {
                  label: "Builds",
                  icon: t.jsx(vt, { "aria-hidden": !0 }),
                  count: a.length,
                }),
              }),
            ],
          }),
        }),
        i &&
          t.jsx(y, {
            sx: jo,
            children: t.jsx(ko, {
              activeTab: r,
              compileHistory: a,
              compileResult: o,
              diagnostics: d,
              editProposalReview: c,
              model: C,
              onDownloadLog: u,
              onDownloadOutputs: l,
              onOpenDiagnostic: x,
              onSelectCompileJob: h,
              onShowPdf: m,
              selectedCompileJobId: s,
            }),
          }),
      ],
    });
  }),
  Eo = 0.16,
  _o = 148,
  Ro = (e) => ({
    flex: "0 0 7.75rem",
    width: "7.75rem",
    minHeight: 0,
    position: "relative",
    overflowY: "auto",
    borderRight: `1px solid ${A(e.palette.text.primary, 0.09)}`,
    backgroundColor: A(e.palette.background.paper, 0.82),
  }),
  Io = { position: "relative", width: "100%" },
  Ao = {
    position: "absolute",
    insetInline: 0,
    top: 0,
    display: "flex",
    justifyContent: "center",
    padding: 0.75,
  },
  Lo = (e) => (r) => ({
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: r.spacing(0.35),
    padding: r.spacing(0.5),
    border: `1px solid ${e ? r.palette.primary.main : A(r.palette.text.primary, 0.12)}`,
    borderRadius: r.shape.radiusSmPx,
    backgroundColor: e ? A(r.palette.primary.main, 0.1) : "transparent",
    color: r.palette.text.primary,
    cursor: "pointer",
    "&:focus-visible": {
      outline: `2px solid ${A(r.palette.primary.main, 0.45)}`,
      outlineOffset: 1,
    },
  }),
  Do = (e) => ({
    display: "block",
    maxWidth: "6rem",
    maxHeight: "7.25rem",
    backgroundColor: e.palette.common.white,
    boxShadow: `0 3px 9px ${A(e.palette.common.black, 0.2)}`,
  }),
  sr = { height: "100%", display: "flex", alignItems: "center", justifyContent: "center" },
  Rr = f.memo(({ isSelected: e, pageNumber: r, pdfDocument: a, rotation: o, onPageChange: d }) => {
    const c = f.useRef(null),
      [p, i] = f.useState(!1);
    return (
      f.useEffect(() => {
        const s = c.current,
          n = s == null ? void 0 : s.getContext("2d");
        if (!s || !n) return;
        let u = !1,
          l = null;
        return (
          i(!1),
          a
            .getPage(r)
            .then((x) => {
              if (u) {
                x.cleanup();
                return;
              }
              const h = x.getViewport({ scale: Eo, rotation: o }),
                m = Math.min(window.devicePixelRatio || 1, 1.5);
              return (
                (s.width = Math.floor(h.width * m)),
                (s.height = Math.floor(h.height * m)),
                (s.style.width = `${h.width}px`),
                (s.style.height = `${h.height}px`),
                (l = x.render({
                  canvasContext: n,
                  viewport: h,
                  transform: m === 1 ? void 0 : [m, 0, 0, m, 0, 0],
                })),
                l.promise.finally(() => {
                  x.cleanup();
                })
              );
            })
            .catch((x) => {
              !u && (!(x instanceof Error) || x.name !== "RenderingCancelledException") && i(!0);
            }),
          () => {
            ((u = !0), l == null || l.cancel());
          }
        );
      }, [r, a, o]),
      t.jsxs(y, {
        component: "button",
        type: "button",
        "aria-label": `Go to PDF page ${r}`,
        "aria-current": e ? "page" : void 0,
        sx: Lo(e),
        onClick: () => {
          d(r);
        },
        children: [
          t.jsx(y, {
            ref: c,
            component: "canvas",
            "aria-hidden": !0,
            sx: Do,
            style: { display: p ? "none" : void 0 },
          }),
          p && t.jsx(I, { variant: "caption", color: "error", children: "Preview unavailable" }),
          t.jsx(I, { variant: "caption", children: r }),
        ],
      })
    );
  });
Rr.displayName = "PdfThumbnail";
const zo = ({ page: e, pdfUrl: r, rotation: a = 0, onPageChange: o }) => {
    const d = f.useRef(null),
      {
        isPdfDocumentLoading: c,
        pdfDocument: p,
        pdfLoadError: i,
      } = Pn({ pdfUrl: r, loadErrorMessage: "Could not load PDF thumbnails." }),
      s = (p == null ? void 0 : p.numPages) ?? 0,
      n = Sn({ count: s, estimateSize: () => _o, getScrollElement: () => d.current, overscan: 2 });
    return (
      f.useLayoutEffect(() => {
        s > 0 && n.scrollToIndex(Math.min(s, Math.max(1, e)) - 1, { align: "auto" });
      }, [e, s, n]),
      t.jsxs(y, {
        ref: d,
        component: "nav",
        "aria-label": "PDF page thumbnails",
        sx: Ro,
        children: [
          (c || !p) && !i && t.jsx(y, { sx: sr, children: t.jsx(Oe, { size: 22 }) }),
          i &&
            t.jsx(y, {
              sx: sr,
              children: t.jsx(I, {
                variant: "caption",
                color: "error",
                align: "center",
                children: "Thumbnails unavailable",
              }),
            }),
          p &&
            t.jsx(y, {
              sx: Io,
              style: { height: n.getTotalSize() },
              children: n
                .getVirtualItems()
                .map((u) =>
                  t.jsx(
                    y,
                    {
                      sx: Ao,
                      style: { height: u.size, transform: `translateY(${u.start}px)` },
                      children: t.jsx(Rr, {
                        isSelected: u.index + 1 === e,
                        pageNumber: u.index + 1,
                        pdfDocument: p,
                        rotation: a,
                        onPageChange: o,
                      }),
                    },
                    u.key,
                  ),
                ),
            }),
        ],
      })
    );
  },
  rt = (e) => {
    if (!Number.isFinite(e.x) || !Number.isFinite(e.y))
      throw new Error("PDF synchronization coordinates must be finite.");
  },
  $o = (e, r) => {
    rt(r);
    const [a, o] = e.convertToPdfPoint(r.x, r.y),
      d = { x: a - e.rawDims.pageX, y: e.rawDims.pageY + e.rawDims.pageHeight - o };
    return (rt(d), d);
  },
  Fo = (e, r) => {
    rt(r);
    const a = e.rawDims.pageX + r.x,
      o = e.rawDims.pageY + e.rawDims.pageHeight - r.y,
      [d, c] = e.convertToViewportPoint(a, o),
      p = { x: d, y: c };
    return (rt(p), p);
  },
  Mo = { flex: 1, minWidth: 0, minHeight: 0, position: "relative" },
  Oo = (e) => ({
    position: "absolute",
    inset: 0,
    overflow: "auto",
    backgroundColor: e.palette.common.white,
    "& .pdfViewer": { minHeight: "100%", paddingBlock: 0, backgroundColor: e.palette.common.white },
    "& .pdfViewer .page": {
      margin: "0 auto",
      border: 0,
      borderRadius: 0,
      backgroundColor: e.palette.common.white,
      boxShadow: "none",
    },
    '&[data-page-mode="continuous"] .pdfViewer .page:not(:last-child)': {
      boxShadow: `0 1px 0 ${e.palette.divider}`,
    },
    "& .textLayer ::selection": { backgroundColor: e.palette.primary.light },
    "& .latex-synctex-target": {
      position: "absolute",
      zIndex: 5,
      width: 14,
      height: 14,
      border: `2px solid ${e.palette.primary.main}`,
      borderRadius: "50%",
      backgroundColor: e.palette.primary.main,
      boxShadow: `0 0 0 4px ${e.palette.primary.main}33`,
      pointerEvents: "none",
      transform: "translate(-50%, -50%)",
      animation: "latexSyncTargetPulse 900ms ease-out 2",
    },
    "@keyframes latexSyncTargetPulse": {
      "0%": { boxShadow: `0 0 0 0 ${e.palette.primary.main}88` },
      "100%": { boxShadow: `0 0 0 12px ${e.palette.primary.main}00` },
    },
  }),
  Bo = { "& .pdfViewer .page": { cursor: "crosshair" } },
  lr = (e) => ({
    position: "absolute",
    inset: 0,
    zIndex: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: e.spacing(2),
    backgroundColor: e.palette.background.paper,
  }),
  No = f.forwardRef(function (
    {
      ariaLabel: r = "PDF document",
      pageMode: a = "continuous",
      onPageChange: o,
      onPageCountChange: d,
      onSearchCountChange: c,
      page: p,
      pdfUrl: i,
      positionSelectionEnabled: s = !1,
      rotation: n,
      scaleValue: u,
      searchRequest: l,
      sx: x,
      onPositionSelect: h,
    },
    m,
  ) {
    const g = f.useRef(null),
      C = f.useRef(null),
      b = f.useRef(null),
      L = f.useRef(0),
      F = f.useRef(o),
      T = f.useRef(d),
      P = f.useRef(h),
      _ = f.useRef(c),
      M = f.useRef(l ?? null),
      W = f.useRef(null),
      B = f.useRef(null),
      U = f.useRef(null),
      q = f.useRef(n),
      H = f.useRef(u),
      [k, E] = f.useState(null),
      [le, V] = f.useState(!0);
    f.useEffect(() => {
      ((F.current = o),
        (T.current = d),
        (P.current = h),
        (_.current = c),
        (q.current = n),
        (H.current = u));
    }, [o, d, h, c, n, u]);
    const Y = f.useCallback((j) => {
      const D = b.current,
        z = g.current;
      if (!Number.isInteger(j.page) || j.page < 1 || !Number.isFinite(j.x) || !Number.isFinite(j.y))
        return;
      if (!D || !D.ready || !z) {
        U.current = j;
        return;
      }
      if (j.page > D.viewer.pagesCount) return;
      ((U.current = null), (D.viewer.currentPageNumber = j.page));
      const X = () => {
        const N = D.viewer.getPageView(j.page - 1);
        if (!N) return;
        const $ = Fo(N.viewport, j),
          G = z.getBoundingClientRect(),
          se = N.div.getBoundingClientRect();
        (z.scrollTo({
          left: z.scrollLeft + se.left - G.left + $.x - z.clientWidth / 2,
          top: z.scrollTop + se.top - G.top + $.y - z.clientHeight / 2,
          behavior: "smooth",
        }),
          N.div.querySelectorAll(".latex-synctex-target").forEach((te) => te.remove()));
        const ee = document.createElement("span");
        ((ee.className = "latex-synctex-target"),
          ee.setAttribute("aria-hidden", "true"),
          (ee.style.left = `${$.x}px`),
          (ee.style.top = `${$.y}px`),
          N.div.appendChild(ee));
      };
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(X);
      });
    }, []);
    f.useImperativeHandle(
      m,
      () => ({
        focus: () => {
          var j;
          (j = g.current) == null || j.focus();
        },
        nextPage: () => {
          var j;
          (j = b.current) == null || j.viewer.nextPage();
        },
        previousPage: () => {
          var j;
          (j = b.current) == null || j.viewer.previousPage();
        },
        scrollToPosition: Y,
      }),
      [Y],
    );
    const S = f.useCallback(() => {
        const j = b.current,
          D = M.current;
        if (!j || !j.ready || !D) return;
        const z = W.current;
        if ((z == null ? void 0 : z.generation) === j.generation && z.nonce === D.nonce) return;
        const X = B.current,
          N =
            D.query.length > 0 &&
            (X == null ? void 0 : X.generation) === j.generation &&
            X.query === D.query;
        (j.eventBus.dispatch("find", {
          source: g.current,
          type: N ? "again" : "",
          query: D.query,
          phraseSearch: !0,
          caseSensitive: !1,
          entireWord: !1,
          highlightAll: !0,
          findPrevious: D.previous ?? !1,
          matchDiacritics: !0,
        }),
          (W.current = { generation: j.generation, nonce: D.nonce }),
          (B.current = { generation: j.generation, query: D.query }));
      }, []),
      K = f.useCallback(
        (j) => {
          const D = s || j.ctrlKey || j.metaKey,
            z = j.target,
            X = b.current;
          if (!D || !P.current || !X || !(z instanceof Element)) return;
          const N = z.closest(".page"),
            $ = Number.parseInt((N == null ? void 0 : N.dataset.pageNumber) ?? "", 10);
          if (!N || !Number.isInteger($) || $ < 1) return;
          const G = X.viewer.getPageView($ - 1);
          if (!G) return;
          (j.preventDefault(), j.stopPropagation());
          const se = G.div.getBoundingClientRect(),
            ee = $o(G.viewport, { x: j.clientX - se.left, y: j.clientY - se.top });
          P.current({ page: $, ...ee });
        },
        [s],
      );
    return (
      f.useEffect(() => {
        var se, ee;
        const j = g.current,
          D = C.current;
        if (!j || !D) throw new Error("PDF viewer elements were not mounted.");
        let z = !1,
          X = null,
          N = null;
        const $ = new AbortController(),
          G = L.current + 1;
        return (
          (L.current = G),
          V(!0),
          E(null),
          (se = T.current) == null || se.call(T, null),
          (ee = _.current) == null || ee.call(_, 0, 0),
          Promise.all([
            kn(),
            Tt(
              () => import("./pdfDocument-V1r75ju6.js").then((te) => te.p),
              __vite__mapDeps([0, 1, 2]),
            ),
            Tt(() => import("./pdf_viewer-BXbC1ghE.js"), []),
          ])
            .then(async ([te, ye, he]) => {
              if (z) return;
              const R = new he.EventBus(),
                xe = new he.PDFLinkService({
                  eventBus: R,
                  externalLinkTarget: he.LinkTarget.BLANK,
                }),
                ve = new he.PDFFindController({ eventBus: R, linkService: xe }),
                ke = a === "single" ? he.PDFSinglePageViewer : he.PDFViewer,
                Ce = {
                  container: j,
                  viewer: D,
                  eventBus: R,
                  linkService: xe,
                  findController: ve,
                  enableHWA: !0,
                  removePageBorders: !0,
                  abortSignal: $.signal,
                },
                v = new ke(Ce);
              xe.setViewer(v);
              const Z = () => {
                  var _e;
                  const me = b.current;
                  if (!me || me.generation !== G) return;
                  ((me.ready = !0),
                    (v.currentScaleValue = H.current),
                    (v.pagesRotation = q.current),
                    (_e = T.current) == null || _e.call(T, v.pagesCount));
                  const je = U.current;
                  (je && Y(je), S(), V(!1));
                },
                Te = (me) => {
                  var je;
                  me.pageNumber && ((je = F.current) == null || je.call(F, me.pageNumber));
                },
                Be = (me) => {
                  var je, _e, w;
                  (w = _.current) == null ||
                    w.call(
                      _,
                      ((je = me.matchesCount) == null ? void 0 : je.current) ?? 0,
                      ((_e = me.matchesCount) == null ? void 0 : _e.total) ?? 0,
                    );
                };
              (R.on("pagesinit", Z), R.on("pagechanging", Te), R.on("updatefindmatchescount", Be));
              let Ke = !1;
              ((N = () => {
                Ke ||
                  ((Ke = !0),
                  R.off("pagesinit", Z),
                  R.off("pagechanging", Te),
                  R.off("updatefindmatchescount", Be),
                  $.abort(),
                  v.setDocument(null));
              }),
                (X = ye.getDocument(i)));
              const Ee = await X.promise;
              z ||
                (xe.setDocument(Ee),
                ve.setDocument(Ee),
                (b.current = {
                  eventBus: R,
                  generation: G,
                  loadingTask: X,
                  pdfDocument: Ee,
                  ready: !1,
                  viewer: v,
                }),
                v.setDocument(Ee));
            })
            .catch((te) => {
              z ||
                (N == null || N(),
                E(te instanceof Error ? te.message : "Could not load compiled PDF."),
                V(!1));
            }),
          () => {
            ((z = !0), N == null || N(), $.abort());
            const te = b.current;
            ((te == null ? void 0 : te.generation) === G
              ? ((b.current = null), te.pdfDocument.destroy(), te.loadingTask.destroy())
              : X == null || X.destroy(),
              D.replaceChildren());
          }
        );
      }, [S, a, i, Y]),
      f.useEffect(() => {
        var D;
        const j = (D = b.current) == null ? void 0 : D.viewer;
        j && j.currentPageNumber !== p && p >= 1 && p <= j.pagesCount && (j.currentPageNumber = p);
      }, [p]),
      f.useEffect(() => {
        var D;
        const j = (D = b.current) == null ? void 0 : D.viewer;
        j && (j.currentScaleValue = u);
      }, [u]),
      f.useEffect(() => {
        var D;
        const j = (D = b.current) == null ? void 0 : D.viewer;
        j && (j.pagesRotation = n);
      }, [n]),
      f.useEffect(() => {
        ((M.current = l ?? null), S());
      }, [S, l]),
      t.jsx(y, {
        sx: [Mo, ...(Array.isArray(x) ? x : x ? [x] : [])],
        children: t.jsxs(y, {
          ref: g,
          tabIndex: 0,
          role: "document",
          "aria-label": r,
          "data-page-mode": a,
          sx: [Oo, ...(s ? [Bo] : [])],
          onClickCapture: K,
          children: [
            t.jsx("div", { ref: C, className: "pdfViewer" }),
            le ? t.jsx(y, { sx: lr, children: t.jsx(Oe, { size: 28 }) }) : null,
            k
              ? t.jsx(y, {
                  sx: lr,
                  children: t.jsx(de, { severity: "error", variant: "outlined", children: k }),
                })
              : null,
          ],
        }),
      })
    );
  }),
  Wo = { minWidth: 0, display: "flex", alignItems: "center", gap: 1 },
  Ir = (e) => ({
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: e.spacing(1),
    padding: e.spacing(1.1, 1.25),
    borderBottom: `1px solid ${A(e.palette.text.primary, 0.08)}`,
  }),
  Ar = (e) => ({
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    gap: e.spacing(0.4),
  }),
  Ho = "30rem",
  Vo = "22rem",
  Xo = "24rem",
  qo = { flex: 1, minHeight: 0, display: "flex", flexDirection: "column" },
  Go = (e) => ({
    flex: "0 0 auto",
    minHeight: "2.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: e.spacing(0.5),
    padding: e.spacing(0.4, 0.75),
    overflow: "hidden",
    borderBottom: `1px solid ${A(e.palette.text.primary, 0.08)}`,
    backgroundColor: A(e.palette.background.paper, 0.72),
    "@container latex-pdf-panel (max-width: 52rem)": {
      '& [data-pdf-toolbar-collapse="early"]': { display: "none" },
    },
    "@container latex-pdf-panel (max-width: 44rem)": {
      '& [data-pdf-toolbar-collapse="medium"]': { display: "none" },
    },
    "@container latex-pdf-panel (max-width: 38rem)": {
      '& [data-pdf-toolbar-collapse="compact"]': { display: "none" },
    },
    [`@container latex-pdf-panel (max-width: ${Xo})`]: {
      '& [data-pdf-page-total="true"]': { display: "none" },
    },
  }),
  Uo = (e) => ({
    flex: "0 0 auto",
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    gap: e.spacing(0.4),
    padding: e.spacing(0.45, 0.75),
    borderBottom: `1px solid ${A(e.palette.text.primary, 0.08)}`,
    backgroundColor: A(e.palette.background.paper, 0.72),
    "& .MuiTextField-root": { flex: "1 1 auto", minWidth: "8rem" },
    "& .MuiInputBase-root": { height: e.spacing(4.5) },
    [`@container latex-pdf-panel (max-width: ${Vo})`]: {
      '& [data-pdf-search-navigation="true"]': { display: "none" },
    },
  }),
  Ko = (e) => ({
    width: "4.25rem",
    flex: "0 0 auto",
    "& .MuiInputBase-root": { height: e.spacing(4) },
    "& .MuiInputBase-input": { padding: e.spacing(0.5, 0.75), textAlign: "center" },
  }),
  Yo = (e) => ({
    minWidth: 0,
    flex: "0 1 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: e.spacing(0.25),
  }),
  Zo = (e) => ({
    ...pt(e, {
      elevated: !1,
      labeled: !0,
      preserveSelectedWhenDisabled: !1,
      selected: !1,
      selection: "soft",
      size: "compact",
      surface: "outlined",
      tone: "default",
    }),
    "& .MuiButton-endIcon": { marginLeft: 0 },
  }),
  Qo = (e) => ({
    ...Ir(e),
    minWidth: 0,
    gap: e.spacing(0.75),
    padding: e.spacing(0.75, 1),
    [`@container latex-pdf-panel (max-width: ${Ho})`]: {
      flexWrap: "wrap",
      gap: e.spacing(0.5),
      padding: e.spacing(0.6, 0.75),
      "& .MuiToggleButton-root": { padding: e.spacing(0.45, 0.75) },
    },
  }),
  Jo = (e) => ({ ...Ar(e), flexWrap: "nowrap", marginLeft: "auto" }),
  ei = (e) => ({
    flex: 1,
    minHeight: 0,
    display: "flex",
    overflow: "hidden",
    backgroundColor: e.palette.common.white,
  }),
  ti = { minWidth: 0, flex: "1 1 auto", display: "flex", alignItems: "center", gap: 0.75 },
  Ne = (e) => ({
    flex: 1,
    minHeight: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: e.spacing(2),
  }),
  Lr = "page-width",
  cr = [
    { label: "Fit width", value: Lr },
    { label: "Fit page", value: "page-fit" },
    { label: "75%", value: "0.75" },
    { label: "100%", value: "1" },
    { label: "125%", value: "1.25" },
    { label: "150%", value: "1.5" },
    { label: "200%", value: "2" },
  ],
  ri = 500,
  ni = f.memo(No),
  ai = (e, r) => {
    const a = document.createElement("a");
    ((a.href = e), (a.download = r), document.body.appendChild(a), a.click(), a.remove());
  },
  oi = f.memo(function ({
    canSync: r = !1,
    isSyncing: a = !1,
    pdfAttachmentId: o,
    pdfBase64: d,
    pdfDownloadFileName: c,
    isFluid: p,
    isStale: i = !1,
    pdfRevision: s = null,
    syncRequest: n,
    onReverseSync: u,
  }) {
    const l = f.useId(),
      x = f.useId(),
      h = f.useRef(null),
      m = f.useRef(null),
      [g, C] = f.useState(1),
      [b, L] = f.useState("1"),
      [F, T] = f.useState(0),
      [P, _] = f.useState(Lr),
      M = f.useRef(!1),
      [W, B] = f.useState(null),
      [U, q] = f.useState("continuous"),
      [H, k] = f.useState(!1),
      [E, le] = f.useState(!1),
      [V, Y] = f.useState(!1),
      [S, K] = f.useState(!1),
      [j, D] = f.useState(""),
      [z, X] = f.useState(null),
      [N, $] = f.useState(0),
      [G, se] = f.useState(0),
      [ee, te] = f.useState(null),
      ye = Tn(o),
      he = En(d),
      R = ye.objectUrl ?? he,
      [xe, ve] = f.useState(null),
      ke = !!(R && xe === R),
      Ce = cr.find((w) => w.value === P),
      v = f.useCallback((w) => {
        (C(w), L(String(w)));
      }, []);
    (f.useEffect(() => {
      if (!R) {
        ve(null);
        return;
      }
      return ln(
        () => {
          ve(R);
        },
        0,
        ri,
      );
    }, [R]),
      f.useEffect(() => {
        (v(1), B(null), K(!1), D(""), $(0), se(0), X(null));
      }, [v, R]),
      f.useEffect(() => {
        var w;
        n && (v(n.position.page), (w = m.current) == null || w.scrollToPosition(n.position));
      }, [v, F, P, R, n, U]),
      f.useEffect(() => {
        const w = () => {
          le(document.fullscreenElement === h.current);
        };
        return (
          w(),
          document.addEventListener("fullscreenchange", w),
          () => {
            document.removeEventListener("fullscreenchange", w);
          }
        );
      }, []));
    const Z = f.useCallback((w, J = !1) => {
        const Re = w.trim();
        if (!Re) {
          (X((Ie) => ({ nonce: ((Ie == null ? void 0 : Ie.nonce) ?? 0) + 1, query: "" })),
            $(0),
            se(0));
          return;
        }
        X((Ie) => ({ nonce: ((Ie == null ? void 0 : Ie.nonce) ?? 0) + 1, previous: J, query: Re }));
      }, []),
      Te = f.useCallback((w, J) => {
        ($(w), se(J));
      }, []),
      Be = f.useCallback(
        (w = !1) => {
          Z(j, w);
        },
        [Z, j],
      ),
      Ke = f.useCallback(() => {
        (D(""), Z(""));
      }, [Z]),
      Ee = f.useCallback(() => {
        const w = b.trim();
        if (!/^\d+$/.test(w)) {
          L(String(g));
          return;
        }
        const J = Number(w);
        if (!Number.isSafeInteger(J)) {
          L(String(g));
          return;
        }
        const Re = Math.max(1, W ?? J);
        v(Math.min(Re, Math.max(1, J)));
      }, [v, g, b, W]),
      me = f.useCallback(() => {
        R && window.open(R, "_blank", "noopener,noreferrer");
      }, [R]),
      je = f.useCallback(() => {
        if (!R) return;
        const w = document.createElement("iframe");
        ((w.hidden = !0),
          (w.src = R),
          w.addEventListener(
            "load",
            () => {
              var J, Re;
              ((J = w.contentWindow) == null || J.focus(),
                (Re = w.contentWindow) == null || Re.print(),
                window.setTimeout(() => {
                  w.remove();
                }, 1e3));
            },
            { once: !0 },
          ),
          document.body.appendChild(w));
      }, [R]),
      _e = f.useCallback(() => {
        const w = h.current;
        if (!w) throw new Error("PDF panel was not mounted.");
        if (document.fullscreenElement === w) {
          document.exitFullscreen();
          return;
        }
        w.requestFullscreen();
      }, []);
    if (!Ce) throw new Error(`Unsupported PDF scale value: ${P}`);
    return t.jsxs(y, {
      ref: h,
      component: "section",
      sx: qa(p),
      children: [
        t.jsxs(y, {
          sx: Qo,
          children: [
            t.jsxs(y, {
              sx: ti,
              children: [
                t.jsx(I, { variant: "h6", color: "textPrimary", noWrap: !0, children: "PDF" }),
                s !== null &&
                  t.jsxs(I, {
                    variant: "caption",
                    color: "textSecondary",
                    noWrap: !0,
                    children: ["Revision ", s],
                  }),
                i &&
                  t.jsx(we, {
                    size: "small",
                    color: "warning",
                    tooltip:
                      s !== null
                        ? `Revision ${s} does not include your latest project changes. Compile to update it.`
                        : "This PDF does not include your latest project changes. Compile to update it.",
                    label: "Out of date",
                  }),
              ],
            }),
            t.jsx(y, {
              sx: Jo,
              children: t.jsxs(gt, {
                exclusive: !0,
                size: "small",
                value: U,
                "aria-label": "PDF page layout",
                onChange: (w, J) => {
                  J && q(J);
                },
                children: [
                  t.jsx(Se, {
                    value: "continuous",
                    "aria-label": "Continuous PDF view",
                    children: "Continuous",
                  }),
                  t.jsx(Se, {
                    value: "single",
                    "aria-label": "Single-page PDF view",
                    children: "Single",
                  }),
                ],
              }),
            }),
          ],
        }),
        t.jsxs(y, {
          sx: Go,
          children: [
            t.jsx(Q, {
              tooltip: S
                ? "Hide PDF search"
                : j.trim()
                  ? G
                    ? `Show PDF search (${N}/${G})`
                    : "Show PDF search (no matches)"
                  : "Search PDF",
              "aria-label": "Toggle PDF search",
              "aria-controls": S ? l : void 0,
              "aria-expanded": S,
              size: "small",
              disabled: !R,
              color: S || j.trim() ? "primary" : "default",
              onClick: () => {
                K((w) => !w);
              },
              children: t.jsx($t, { size: 17 }),
            }),
            t.jsxs(y, {
              "data-pdf-toolbar-group": "document",
              sx: Yo,
              children: [
                t.jsx(Q, {
                  "data-pdf-toolbar-collapse": "compact",
                  tooltip: r
                    ? V
                      ? "Stop selecting PDF positions"
                      : "Jump from PDF to source (or Ctrl/Cmd+click)"
                    : "Recompile the current source to enable SyncTeX",
                  "aria-label": V
                    ? "Disable PDF to source synchronization"
                    : "Enable PDF to source synchronization",
                  size: "small",
                  disabled: !r || a,
                  color: V ? "primary" : "default",
                  onClick: () => {
                    Y((w) => !w);
                  },
                  children: a ? t.jsx(Oe, { size: 16 }) : t.jsx(hr, { size: 17 }),
                }),
                t.jsx(Q, {
                  "data-pdf-toolbar-collapse": "compact",
                  tooltip: H ? "Hide page thumbnails" : "Show page thumbnails",
                  "aria-label": H ? "Hide PDF page thumbnails" : "Show PDF page thumbnails",
                  size: "small",
                  disabled: !R,
                  color: H ? "primary" : "default",
                  onClick: () => {
                    k((w) => !w);
                  },
                  children: t.jsx(ga, { size: 17 }),
                }),
                t.jsx(Q, {
                  tooltip: "Previous page",
                  "aria-label": "Previous PDF page",
                  size: "small",
                  disabled: !R || g <= 1,
                  onClick: () => {
                    v(Math.max(1, g - 1));
                  },
                  children: t.jsx(_n, { size: 17 }),
                }),
                t.jsx(be, {
                  value: b,
                  size: "small",
                  disabled: !R,
                  sx: Ko,
                  slotProps: {
                    htmlInput: {
                      "aria-label": "PDF page number",
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                    },
                  },
                  onChange: (w) => {
                    const J = w.target.value;
                    (J === "" || /^\d+$/.test(J)) && L(J);
                  },
                  onBlur: () => {
                    M.current || Ee();
                  },
                  onFocus: (w) => {
                    w.currentTarget.select();
                  },
                  onKeyDown: (w) => {
                    (w.key === "Enter" && (w.preventDefault(), Ee(), w.currentTarget.blur()),
                      w.key === "Escape" &&
                        (w.preventDefault(),
                        (M.current = !0),
                        L(String(g)),
                        w.currentTarget.blur(),
                        (M.current = !1)));
                  },
                }),
                W !== null &&
                  t.jsxs(I, {
                    "data-pdf-page-total": "true",
                    variant: "caption",
                    color: "textSecondary",
                    noWrap: !0,
                    children: ["of ", W],
                  }),
                t.jsx(Q, {
                  tooltip: "Next page",
                  "aria-label": "Next PDF page",
                  size: "small",
                  disabled: !R || !W || g >= W,
                  onClick: () => {
                    v(Math.min(W ?? g + 1, g + 1));
                  },
                  children: t.jsx(pn, { size: 17 }),
                }),
                t.jsx(ie, {
                  variant: "text",
                  size: "small",
                  tooltip: `PDF zoom: ${Ce.label}`,
                  "aria-label": `PDF zoom; current ${Ce.label}`,
                  "aria-controls": ee ? x : void 0,
                  "aria-haspopup": "menu",
                  "aria-expanded": !!ee,
                  disabled: !R,
                  endIcon: t.jsx(Me, { size: 15 }),
                  sx: Zo,
                  onClick: (w) => {
                    te(w.currentTarget);
                  },
                  children: Ce.label,
                }),
                t.jsx(Q, {
                  "data-pdf-toolbar-collapse": "compact",
                  tooltip: "Rotate PDF",
                  "aria-label": "Rotate PDF clockwise",
                  size: "small",
                  disabled: !R,
                  onClick: () => {
                    T((w) => (w + 90) % 360);
                  },
                  children: t.jsx(fa, { size: 17 }),
                }),
                t.jsx(Q, {
                  "data-pdf-toolbar-collapse": "medium",
                  tooltip: "Download PDF",
                  "aria-label": "Download PDF",
                  size: "small",
                  disabled: !R,
                  onClick: () => {
                    R && ai(R, c);
                  },
                  children: t.jsx(Rn, { size: 17 }),
                }),
                t.jsx(Q, {
                  "data-pdf-toolbar-collapse": "early",
                  tooltip: "Print PDF",
                  "aria-label": "Print PDF",
                  size: "small",
                  disabled: !R,
                  onClick: je,
                  children: t.jsx(ua, { size: 17 }),
                }),
                t.jsxs(Q, {
                  "data-pdf-toolbar-collapse": "medium",
                  tooltip: E ? "Exit fullscreen" : "Fullscreen PDF",
                  "aria-label": E ? "Exit PDF fullscreen" : "View PDF fullscreen",
                  size: "small",
                  disabled: !R,
                  color: E ? "primary" : "default",
                  onClick: _e,
                  children: [E && t.jsx(In, { size: 17 }), !E && t.jsx(An, { size: 17 })],
                }),
                t.jsx(Q, {
                  "data-pdf-toolbar-collapse": "early",
                  tooltip: "Open PDF in new tab",
                  "aria-label": "Open PDF in new tab",
                  size: "small",
                  disabled: !R,
                  onClick: me,
                  children: t.jsx(Ln, { size: 17 }),
                }),
              ],
            }),
          ],
        }),
        S &&
          t.jsxs(y, {
            id: l,
            sx: Uo,
            children: [
              t.jsx(be, {
                autoFocus: !0,
                value: j,
                size: "small",
                placeholder: "Search PDF",
                slotProps: { htmlInput: { "aria-label": "Search PDF" } },
                onChange: (w) => {
                  const J = w.target.value;
                  (D(J), Z(J));
                },
                onKeyDown: (w) => {
                  (w.key === "Enter" && (w.preventDefault(), Be(w.shiftKey)),
                    w.key === "Escape" && (w.preventDefault(), K(!1)));
                },
              }),
              t.jsx(Q, {
                "data-pdf-search-navigation": "true",
                tooltip: "Find previous",
                "aria-label": "Find previous in PDF",
                size: "small",
                disabled: !j.trim(),
                onClick: () => {
                  Be(!0);
                },
                children: t.jsx(yt, { size: 16 }),
              }),
              t.jsx(Q, {
                "data-pdf-search-navigation": "true",
                tooltip: "Find next",
                "aria-label": "Find next in PDF",
                size: "small",
                disabled: !j.trim(),
                onClick: () => {
                  Be(!1);
                },
                children: t.jsx(Me, { size: 16 }),
              }),
              j.trim() &&
                t.jsx(I, {
                  variant: "caption",
                  noWrap: !0,
                  children: G ? `${N}/${G}` : "No matches",
                }),
              t.jsx(Q, {
                tooltip: "Clear PDF search",
                "aria-label": "Clear PDF search",
                size: "small",
                disabled: !j,
                onClick: Ke,
                children: t.jsx(Dn, { size: 16 }),
              }),
              t.jsx(Q, {
                tooltip: "Hide PDF search",
                "aria-label": "Hide PDF search",
                size: "small",
                onClick: () => {
                  K(!1);
                },
                children: t.jsx(mt, { size: 16 }),
              }),
            ],
          }),
        t.jsx(Ue, {
          id: x,
          anchorEl: ee,
          open: !!ee,
          onClose: () => {
            te(null);
          },
          children: cr.map((w) =>
            t.jsx(
              re,
              {
                selected: w.value === P,
                onClick: () => {
                  (_(w.value), te(null));
                },
                children: w.label,
              },
              w.value,
            ),
          ),
        }),
        t.jsxs(y, {
          sx: qo,
          children: [
            ke && R
              ? t.jsxs(y, {
                  sx: ei,
                  children: [
                    H && t.jsx(zo, { page: g, pdfUrl: R, rotation: F, onPageChange: v }),
                    t.jsx(ni, {
                      ref: m,
                      ariaLabel: "Compiled LaTeX PDF",
                      page: g,
                      pageMode: U,
                      pdfUrl: R,
                      positionSelectionEnabled: r && !a && V,
                      rotation: F,
                      scaleValue: P,
                      searchRequest: z,
                      onPageChange: v,
                      onPageCountChange: B,
                      onPositionSelect: r && !a ? u : void 0,
                      onSearchCountChange: Te,
                    }),
                  ],
                })
              : null,
            !ke && (ye.isLoading || R)
              ? t.jsx(y, { sx: Ne, children: t.jsx(Oe, { size: 28 }) })
              : null,
            !R && !ye.isLoading
              ? t.jsxs(y, {
                  sx: Ne,
                  children: [
                    t.jsx($t, { "aria-hidden": !0, size: 22 }),
                    t.jsx(I, {
                      variant: "body2",
                      color: ye.error ? "error" : "textSecondary",
                      align: "center",
                      children: ye.error
                        ? "Could not load the compiled PDF."
                        : "Compile the project to generate a searchable PDF preview.",
                    }),
                  ],
                })
              : null,
          ],
        }),
      ],
    });
  }),
  Dr = "52.5rem",
  ii = { flex: 1, minHeight: 0, display: "flex", flexDirection: "column" },
  si = { flex: 1, minWidth: 0, minHeight: 0, display: "flex", overflow: "hidden" },
  li = {
    flex: "1 1 auto",
    minWidth: 0,
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  ci = (e) => ({
    flex: "0 0 auto",
    display: "flex",
    flexDirection: "column",
    gap: e.spacing(0.8),
    padding: e.spacing(1, 1.25),
    borderBottom: `1px solid ${A(e.palette.primary.main, 0.24)}`,
    backgroundColor: A(e.palette.primary.main, 0.055),
  }),
  di = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 1,
    [`@container latex-source-panel (max-width: ${Dr})`]: {
      alignItems: "flex-start",
      flexDirection: "column",
    },
  },
  ui = (e) => ({ minWidth: 0, display: "flex", flexDirection: "column", gap: e.spacing(0.2) }),
  pi = (e) => ({ flex: "0 0 auto", display: "flex", alignItems: "center", gap: e.spacing(0.6) }),
  fi = (e) => ({
    flex: "0 0 clamp(13rem, 22%, 19rem)",
    minWidth: 0,
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    borderLeft: `1px solid ${A(e.palette.text.primary, 0.08)}`,
    backgroundColor: A(e.palette.background.paper, 0.58),
    [`@container latex-source-panel (max-width: ${Dr})`]: { display: "none" },
  }),
  xi = ({
    applyError: e,
    currentFileId: r,
    hasUnsavedChanges: a,
    isChatRunning: o,
    isApplying: d,
    isDismissing: c,
    isPreparingPdfPreview: p,
    isStale: i,
    isValidationPending: s,
    pdfPreviewError: n,
    previewError: u,
    proposal: l,
    validationError: x,
    onApply: h,
    onDismiss: m,
    onNextChange: g,
    onOpenFile: C,
    onPreviewPdf: b,
    onPreviousChange: L,
  }) => {
    const F = f.useMemo(() => Array.from(new Set(l.edits.map((M) => M.fileId))), [l.edits]),
      T = F.indexOf(r ?? ""),
      P = F.length > 1 ? F[(T + 1 + F.length) % F.length] : T === -1 ? F[0] : null,
      _ = l.edits.filter((M) => M.fileId === r).length;
    return t.jsxs(y, {
      component: "section",
      "aria-label": "Review proposed LaTeX edits",
      sx: ci,
      children: [
        t.jsxs(y, {
          sx: di,
          children: [
            t.jsxs(y, {
              sx: ui,
              children: [
                t.jsx(I, {
                  variant: "subtitle2",
                  color: "textPrimary",
                  noWrap: !0,
                  children: l.summary,
                }),
                t.jsxs(I, {
                  variant: "caption",
                  color: "textSecondary",
                  children: [
                    _ > 0
                      ? `${_} proposed ${_ === 1 ? "change" : "changes"} in this file`
                      : `${l.edits.length} proposed ${l.edits.length === 1 ? "change" : "changes"} across ${F.length} ${F.length === 1 ? "file" : "files"}`,
                    " · ",
                    "red is removed, green is added",
                  ],
                }),
              ],
            }),
            t.jsxs(y, {
              sx: pi,
              children: [
                _ > 0 &&
                  !u &&
                  t.jsxs(t.Fragment, {
                    children: [
                      t.jsx(Q, {
                        type: "button",
                        size: "small",
                        tooltip: "Previous proposed change",
                        "aria-label": "Previous proposed change",
                        onClick: L,
                        children: t.jsx(yt, { size: 16 }),
                      }),
                      t.jsx(Q, {
                        type: "button",
                        size: "small",
                        tooltip: "Next proposed change",
                        "aria-label": "Next proposed change",
                        onClick: g,
                        children: t.jsx(Me, { size: 16 }),
                      }),
                    ],
                  }),
                P &&
                  t.jsx(ie, {
                    type: "button",
                    size: "small",
                    variant: "outlined",
                    endIcon: t.jsx($n, { size: 15 }),
                    onClick: () => {
                      C(P);
                    },
                    children: T === -1 ? "Open change" : "Next file",
                  }),
                Dt,
                t.jsx(ie, {
                  type: "button",
                  size: "small",
                  variant: "contained",
                  startIcon: t.jsx(xr, { size: 15 }),
                  disabled: i || a || !!u || s || !!x || o || d,
                  onClick: h,
                  children: d ? "Applying" : "Apply",
                }),
                t.jsx(Q, {
                  type: "button",
                  size: "small",
                  tooltip: "Dismiss proposed edits",
                  "aria-label": "Dismiss proposed edits",
                  disabled: c,
                  onClick: m,
                  children: t.jsx(mt, { size: 16 }),
                }),
              ],
            }),
          ],
        }),
        i && t.jsx(de, { severity: "warning", children: zn }),
        !i &&
          a &&
          t.jsx(de, {
            severity: "warning",
            children: "Finish saving or revert the current draft before applying this proposal.",
          }),
        !i &&
          !a &&
          o &&
          t.jsx(de, {
            severity: "info",
            children: "Wait for the current project chat response before applying this proposal.",
          }),
        !i && !a && u && t.jsx(de, { severity: "warning", children: u }),
        !i &&
          !x &&
          s &&
          t.jsx(de, {
            severity: "info",
            children:
              "Compiling the proposed project automatically. Apply will be available after this exact snapshot compiles successfully.",
          }),
        !i && x && t.jsx(de, { severity: "error", children: x }),
        !i && e && t.jsx(de, { severity: "error", children: e }),
        Dt,
      ],
    });
  },
  hi = f.memo(xi),
  mi = {
    part: 0,
    chapter: 1,
    section: 2,
    subsection: 3,
    subsubsection: 4,
    paragraph: 5,
    subparagraph: 6,
  },
  gi = new Set([
    "axiom",
    "claim",
    "conjecture",
    "corollary",
    "definition",
    "example",
    "exercise",
    "lemma",
    "proof",
    "proposition",
    "remark",
    "theorem",
  ]),
  dr = (e) =>
    e
      .replace(/\\(?:textbf|textit|texttt|emph|texorpdfstring)\*?\s*/g, "")
      .replace(/\\[A-Za-z@]+\*?/g, "")
      .replace(/[{}]/g, "")
      .replace(/~/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  Xe = (e, r, a) => {
    e.push({ ...a, id: `${r}:${a.kind}:${a.from}:${a.title}`, filePath: r, line: 1 });
  },
  ht = (e, r) => {
    const a = [],
      o = Br(e),
      d = new Set(gi);
    for (const i of o.matchAll(/\\newtheorem\*?\s*\{([^{}]+)}/g)) d.add(i[1].trim());
    for (const i of o.matchAll(
      /\\(part|chapter|section|subsection|subsubsection|paragraph|subparagraph)\*?(?:\s*\[[^\]]*])?\s*/g,
    )) {
      const s = i.index + i[0].length,
        n = St(e, s);
      if (!n) continue;
      const u = dr(n.value);
      u &&
        Xe(a, r, {
          kind: "section",
          title: u,
          detail: i[1],
          level: mi[i[1]],
          from: i.index,
          to: n.to,
        });
    }
    for (const i of o.matchAll(/\\begin\s*\{([^{}]+)}/g)) {
      const s = i[1].trim();
      if (!d.has(s)) continue;
      const n = i.index + i[0].length,
        u = o.slice(n).search(/\S/),
        l = u === -1 ? -1 : n + u,
        x = l >= 0 && o[l] === "[" ? St(e, l, "[", "]") : null,
        h = s.charAt(0).toUpperCase() + s.slice(1),
        m = x ? `${h}: ${dr(x.value)}` : h;
      Xe(a, r, {
        kind: "theorem",
        title: m,
        detail: s,
        level: 7,
        from: i.index,
        to: (x == null ? void 0 : x.to) ?? i.index + i[0].length,
      });
    }
    for (const i of o.matchAll(/\\label\s*\{([^{}]+)}/g))
      Xe(a, r, {
        kind: "label",
        title: i[1].trim(),
        level: 8,
        from: i.index,
        to: i.index + i[0].length,
      });
    for (const i of o.matchAll(/\\(?:auto|page|eq|name|v|V|c|C)?ref\*?\s*\{([^{}]+)}/g))
      Xe(a, r, {
        kind: "reference",
        title: i[1].trim(),
        level: 8,
        from: i.index,
        to: i.index + i[0].length,
      });
    for (const i of o.matchAll(
      /\\(?:text|paren|foot|smart|super)?cite\w*\*?(?:\s*\[[^\]]*]){0,2}\s*\{([^{}]+)}/g,
    ))
      i[1]
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .forEach((s) => {
          Xe(a, r, {
            kind: "citation",
            title: s,
            level: 8,
            from: i.index,
            to: i.index + i[0].length,
          });
        });
    const c = a.sort((i, s) => i.from - s.from),
      p = Nr(
        e,
        c.map((i) => i.from),
      );
    return c.map((i, s) => ({ ...i, line: p[s] }));
  },
  bi = (e, r, a) => {
    var d;
    const o = ht(a, r);
    return (
      (d = e == null ? void 0 : e.files) == null ||
        d
          .filter((c) => c.path !== r && Wr(c))
          .forEach((c) => {
            o.push(...ht(c.content ?? "", c.path));
          }),
      o
    );
  },
  yi = { citation: sa, label: ya, reference: Fn, section: gr, theorem: Yn },
  vi = { display: "flex", minHeight: 0, flexDirection: "column" },
  ji = { alignItems: "center", justifyContent: "space-between", padding: 1.5 },
  wi = { padding: 1.5 },
  Ci = { minHeight: 0, overflowY: "auto" },
  Si = { padding: 3 },
  Pi = { minWidth: 32 },
  ki = { minWidth: 0 },
  Ti = (e) => ({ paddingLeft: Math.min(4, 1 + e * 0.35) }),
  Ei = (e) => [e.title, e.detail, e.filePath, e.kind].filter(Boolean).join(" ").toLowerCase(),
  zr = f.memo(
    ({
      currentFilePath: e,
      currentPosition: r,
      currentSource: a,
      projectContext: o,
      onNavigate: d,
    }) => {
      const [c, p] = f.useState(""),
        i = f.useMemo(() => ht(a, e), [e, a]),
        s = f.useMemo(() => bi(o, e, ""), [e, o]),
        n = f.useMemo(() => [...i, ...s], [i, s]),
        u = c.trim().toLowerCase(),
        l = f.useMemo(() => n.filter((h) => !u || Ei(h).includes(u)), [u, n]),
        x = f.useMemo(() => {
          var h;
          if (r !== void 0)
            return (h = n.filter((m) => m.filePath === e && m.from <= r).at(-1)) == null
              ? void 0
              : h.id;
        }, [e, r, n]);
      return t.jsxs(y, {
        component: "nav",
        "aria-label": "Document outline",
        sx: vi,
        children: [
          t.jsxs(Et, {
            direction: "row",
            sx: ji,
            children: [
              t.jsx(I, { variant: "subtitle2", children: "Outline" }),
              t.jsxs(I, {
                variant: "caption",
                children: [n.length, " ", n.length === 1 ? "item" : "items"],
              }),
            ],
          }),
          t.jsx(Fe, {}),
          t.jsx(y, {
            sx: wi,
            children: t.jsx(be, {
              fullWidth: !0,
              size: "small",
              value: c,
              label: "Filter outline",
              onChange: (h) => {
                p(h.target.value);
              },
            }),
          }),
          t.jsx(rn, {
            dense: !0,
            disablePadding: !0,
            sx: Ci,
            children: l.map((h) => {
              const m = yi[h.kind];
              return t.jsxs(
                tn,
                {
                  selected: h.id === x,
                  sx: Ti(h.level),
                  onClick: () => {
                    d(h);
                  },
                  children: [
                    t.jsx(ce, { sx: Pi, children: t.jsx(m, { size: 16, "aria-hidden": "true" }) }),
                    t.jsxs(Et, {
                      sx: ki,
                      children: [
                        t.jsx(I, { variant: "body2", noWrap: !0, children: h.title }),
                        t.jsxs(I, {
                          variant: "caption",
                          color: "textSecondary",
                          noWrap: !0,
                          children: [h.filePath, ":", h.line, " · ", h.kind],
                        }),
                      ],
                    }),
                  ],
                },
                h.id,
              );
            }),
          }),
          l.length === 0 &&
            t.jsx(y, {
              sx: Si,
              children: t.jsx(I, {
                variant: "body2",
                color: "textSecondary",
                align: "center",
                children:
                  n.length === 0
                    ? "Add a section, theorem, label, or citation to build the outline."
                    : "No outline items match this filter.",
              }),
            }),
        ],
      });
    },
  );
zr.displayName = "LatexOutlinePanel";
const _i = 300,
  ur = [],
  Ri = f.memo(function ({
    diagnostics: r,
    draftSource: a,
    fileId: o,
    filePath: d,
    fontSizeRem: c,
    isMainFile: p,
    isSyncing: i = !1,
    historicalSource: s = null,
    keybindings: n,
    editProposalReview: u = null,
    projectContext: l,
    proposedEdits: x = ur,
    syncDisabledReason: h,
    onCompile: m,
    onCreateEditor: g,
    onLiveDiagnosticsChange: C,
    onNavigateOutline: b,
    onSave: L,
    onSaveShortcut: F,
    onSourceChange: T,
    onStatusChange: P,
    onSyncPdf: _,
    onClearHistoricalSource: M,
  }) {
    const W = f.useId(),
      B = s !== null,
      U = s === null ? a : s.status === "ready" ? s.source : "",
      q = (s == null ? void 0 : s.path) ?? d,
      H = s ? q !== null && q === s.mainFilePath : p,
      k = s ? `${o ?? "source"}:history:${s.revision ?? "unknown"}` : o,
      [E, le] = f.useState(!1),
      V = f.useRef(0),
      [Y, S] = f.useState(() => ({ fileId: o, filePath: q, position: 0, source: U })),
      K = f.useCallback(
        (z) => {
          B || T(z);
        },
        [B, T],
      ),
      j = f.useCallback(
        (z) => {
          ((V.current = z.cursorOffset), E && S((X) => ({ ...X, position: z.cursorOffset })), P(z));
        },
        [E, P],
      );
    f.useEffect(() => {
      if (!E) return;
      const z = window.setTimeout(
        () => {
          S({ fileId: o, filePath: q, position: V.current, source: U });
        },
        Y.fileId === o ? _i : 0,
      );
      return () => {
        window.clearTimeout(z);
      };
    }, [q, U, o, E, Y.fileId]);
    const D = Y.fileId === o;
    return t.jsxs(y, {
      component: "section",
      sx: Xa,
      children: [
        t.jsxs(y, {
          sx: Ir,
          children: [
            t.jsxs(y, {
              sx: Wo,
              children: [
                t.jsx(bt, { "aria-hidden": !0 }),
                t.jsx(I, { variant: "h6", noWrap: !0, children: q ?? "Source" }),
                H && t.jsx(we, { size: "small", color: "primary", label: "Main" }),
                s &&
                  t.jsx(we, {
                    size: "small",
                    color: "warning",
                    label: `Build r${s.revision ?? "?"}`,
                  }),
              ],
            }),
            t.jsxs(y, {
              sx: Ar,
              children: [
                t.jsx(Q, {
                  tooltip: h ?? "Jump from cursor to compiled PDF",
                  "aria-label": "Synchronize source cursor with PDF",
                  disabled: !!h || i || !_,
                  onClick: _,
                  loading: i,
                  children: t.jsx(hr, {}),
                }),
                B &&
                  M &&
                  t.jsx(Q, {
                    tooltip: "Return to current source",
                    "aria-label": "Return to current source",
                    onClick: M,
                    children: t.jsx(mt, { size: 17 }),
                  }),
                t.jsx(Q, {
                  tooltip: E ? "Minimize document outline" : "Show document outline",
                  "aria-label": E ? "Minimize document outline" : "Show document outline",
                  "aria-controls": W,
                  "aria-expanded": E,
                  color: E ? "primary" : "default",
                  onClick: () => {
                    (E || S({ fileId: o, filePath: q, position: V.current, source: U }),
                      le((z) => !z));
                  },
                  children: t.jsx(gr, {}),
                }),
              ],
            }),
          ],
        }),
        u && !B && t.jsx(hi, { ...u, currentFileId: o }),
        t.jsxs(y, {
          sx: ii,
          children: [
            !o &&
              t.jsx(y, {
                sx: Ne,
                children: t.jsx(I, {
                  variant: "body2",
                  color: "textSecondary",
                  align: "center",
                  children: "Select a text file from the project tree to start editing.",
                }),
              }),
            (s == null ? void 0 : s.status) === "loading" &&
              t.jsxs(y, {
                sx: Ne,
                children: [
                  t.jsx(Oe, { size: 28 }),
                  t.jsxs(I, {
                    variant: "body2",
                    color: "textSecondary",
                    align: "center",
                    children: ["Loading source for build revision", " ", s.revision ?? "?", "…"],
                  }),
                ],
              }),
            (s == null ? void 0 : s.status) === "error" &&
              t.jsx(y, {
                sx: Ne,
                children: t.jsx(de, {
                  severity: "error",
                  variant: "outlined",
                  children: s.message,
                }),
              }),
            (s == null ? void 0 : s.status) === "unavailable" &&
              t.jsx(y, {
                sx: Ne,
                children: t.jsx(de, { severity: "info", variant: "outlined", children: s.message }),
              }),
            o &&
              q &&
              (!s || s.status === "ready") &&
              t.jsxs(y, {
                sx: si,
                children: [
                  t.jsx(y, {
                    sx: li,
                    children: t.jsx(Hr, {
                      fileKey: k ?? void 0,
                      fileName: q,
                      value: U,
                      diagnostics: r,
                      fontSizeRem: c,
                      keybindings: n,
                      projectContext: l,
                      proposedEdits: B ? ur : x,
                      editable: !B,
                      enableCommandPalette: !B,
                      onChange: K,
                      onCompile: B ? void 0 : m,
                      onCreateEditor: g,
                      onLiveDiagnosticsChange: B ? void 0 : C,
                      onSave: B ? void 0 : L,
                      onSaveShortcut: B ? void 0 : F,
                      onStatusChange: j,
                    }),
                  }),
                  E &&
                    t.jsx(y, {
                      id: W,
                      component: "aside",
                      sx: fi,
                      children: t.jsx(zr, {
                        currentFilePath: q,
                        currentPosition: D ? Y.position : void 0,
                        currentSource: D ? Y.source : "",
                        projectContext: l,
                        onNavigate: b,
                      }),
                    }),
                ],
              }),
          ],
        }),
      ],
    });
  }),
  Ii = "0.75rem",
  Ai = (e) => ({
    flex: `0 0 ${Ii}`,
    alignSelf: "stretch",
    position: "relative",
    zIndex: 2,
    marginInline: e.spacing(-0.35),
    padding: 0,
    border: 0,
    borderRadius: 0,
    backgroundColor: "transparent",
    cursor: "col-resize",
    touchAction: "none",
    "&::after": {
      content: '""',
      position: "absolute",
      top: "0.8rem",
      left: "50%",
      bottom: "0.8rem",
      width: "2px",
      transform: "translateX(-50%)",
      borderRadius: "999px",
      backgroundColor: A(e.palette.text.primary, 0.08),
      transition: e.transitions.create(["background-color", "width"], {
        duration: e.transitions.duration.shortest,
      }),
    },
    "&:hover::after, &:focus-visible::after, &[data-resizing='true']::after": {
      width: "3px",
      backgroundColor: A(e.palette.primary.main, 0.46),
    },
    "&:hover > [data-latex-resize-grip='true'], &:focus-visible > [data-latex-resize-grip='true'], &[data-resizing='true'] > [data-latex-resize-grip='true']":
      {
        color: e.palette.primary.main,
        borderColor: A(e.palette.primary.main, 0.34),
        backgroundColor: A(e.palette.primary.main, 0.1),
        boxShadow: `0 8px 20px ${A(e.palette.primary.main, 0.16)}`,
      },
    "&:focus-visible": {
      outline: `2px solid ${A(e.palette.primary.main, 0.22)}`,
      outlineOffset: "-2px",
    },
  }),
  Li = (e) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 3,
    transform: "translate(-50%, -50%)",
    width: "1.25rem",
    height: "2.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: e.palette.text.secondary,
    border: `1px solid ${A(e.palette.text.primary, 0.12)}`,
    borderRadius: e.shape.radiusSmPx,
    backgroundColor: A(e.palette.background.paper, 0.96),
    boxShadow: `0 6px 16px ${A(e.palette.text.primary, 0.1)}`,
    pointerEvents: "none",
    transition: e.transitions.create(["background-color", "border-color", "box-shadow", "color"], {
      duration: e.transitions.duration.shortest,
    }),
  }),
  $r = (e) => {
    const r = e.previousElementSibling,
      a = e.nextElementSibling;
    if (!(r instanceof HTMLElement) || !(a instanceof HTMLElement))
      throw new Error("The resizable LaTeX panels were not mounted.");
    const o = r.getBoundingClientRect().width,
      d = a.getBoundingClientRect().width,
      c = o + d;
    if (!Number.isFinite(c) || c <= 0)
      throw new Error("The resizable LaTeX panels must have a positive width.");
    return { value: d / c, pixelsPerValue: c };
  },
  Fr = f.memo(function ({ ariaLabel: r, resizeHandleProps: a }) {
    return t.jsx(y, {
      component: "div",
      ...a,
      "aria-label": r,
      sx: Ai,
      children: t.jsx(y, {
        "aria-hidden": !0,
        "data-latex-resize-grip": "true",
        sx: Li,
        children: t.jsx(Mn, { size: 14 }),
      }),
    });
  }),
  Di = f.memo(function ({ pdfPanelProps: r, showPdf: a, showSource: o, sourcePanelProps: d }) {
    const { ratio: c, resizeHandleProps: p } = Er({
        storageKey: Ca,
        defaultRatio: br,
        minRatio: yr,
        maxRatio: va,
        resizeEdge: "left",
        getResizeStartMetrics: $r,
        storedValueErrorMessage: "Stored LaTeX PDF panel ratio must be a finite number.",
        readErrorMessage: "Ignoring unreadable LaTeX PDF panel ratio.",
        writeErrorMessage: "Could not save LaTeX PDF panel ratio.",
      }),
      i = o && a;
    return t.jsxs(y, {
      component: "section",
      "aria-label": "LaTeX document workspace",
      style: _a(i ? 1 - c : 1, i ? c : 1),
      sx: Va,
      children: [
        o && t.jsx(Ri, { ...d }),
        i && t.jsx(Fr, { ariaLabel: "Resize source and PDF panes", resizeHandleProps: p }),
        a && t.jsx(oi, { ...r, isFluid: !o }),
      ],
    });
  }),
  zi = ({ value: e, onChange: r }) =>
    t.jsx(y, {
      component: "nav",
      "aria-label": "LaTeX workspace views",
      sx: Wa,
      children: t.jsxs(gt, {
        exclusive: !0,
        fullWidth: !0,
        size: "small",
        value: e,
        onChange: (a, o) => {
          o && r(o);
        },
        children: [
          t.jsxs(Se, { value: "source", children: [t.jsx(bt, { size: 16 }), "Source"] }),
          t.jsxs(Se, { value: "pdf", children: [t.jsx(et, { size: 16 }), "PDF"] }),
          t.jsxs(Se, { value: "chat", children: [t.jsx(mr, { size: 16 }), "Chat"] }),
        ],
      }),
    }),
  Rs = f.memo(function ({
    chatPanel: r = null,
    diagnosticsDockProps: a,
    filesLoadError: o,
    isCompactLayout: d,
    pdfPanelProps: c,
    recoveryError: p,
    showPdf: i,
    showChat: s,
    showSource: n,
    sourcePanelProps: u,
    workspaceView: l,
    onRetryRecovery: x,
    onWorkspaceViewChange: h,
  }) {
    const { ratio: m, resizeHandleProps: g } = Er({
        storageKey: Sa,
        defaultRatio: br,
        minRatio: yr,
        maxRatio: ja,
        resizeEdge: "left",
        getResizeStartMetrics: $r,
        storedValueErrorMessage: "Stored LaTeX chat panel ratio must be a finite number.",
        readErrorMessage: "Ignoring unreadable LaTeX chat panel ratio.",
        writeErrorMessage: "Could not save LaTeX chat panel ratio.",
      }),
      C = n || i,
      b = s && !!r,
      L = !d && C && b;
    return t.jsxs(t.Fragment, {
      children: [
        d && t.jsx(zi, { value: l, onChange: h }),
        t.jsxs(y, {
          sx: Na,
          children: [
            o &&
              t.jsx(de, {
                severity: "error",
                variant: "outlined",
                children: "Project files could not be loaded. Refresh the page to retry.",
              }),
            p &&
              t.jsxs(de, {
                severity: "error",
                variant: "outlined",
                action: t.jsx(ie, {
                  color: "inherit",
                  size: "small",
                  onClick: x,
                  children: "Retry recovery",
                }),
                children: ["Local crash recovery is unavailable: ", p.message],
              }),
            (!d || (l !== "problems" && l !== "chat")) &&
              t.jsx(y, {
                sx: Ot,
                children: t.jsxs(y, {
                  style: Ea(L ? 1 - m : 1, L ? m : 1),
                  sx: Ha,
                  children: [
                    C &&
                      t.jsx(Di, {
                        pdfPanelProps: c,
                        showPdf: i,
                        showSource: n,
                        sourcePanelProps: u,
                      }),
                    !d &&
                      b &&
                      t.jsxs(t.Fragment, {
                        children: [
                          C &&
                            t.jsx(Fr, {
                              ariaLabel: "Resize workspace and chat panels",
                              resizeHandleProps: g,
                            }),
                          t.jsx(y, { sx: Bt(!C), children: r }),
                        ],
                      }),
                  ],
                }),
              }),
            d &&
              l === "chat" &&
              r &&
              t.jsx(y, { sx: Ot, children: t.jsx(y, { sx: Bt(!0), children: r }) }),
            t.jsx(To, { ...a, isFluid: d }),
          ],
        }),
      ],
    });
  });
export {
  ea as F,
  fe as L,
  fa as R,
  kr as a,
  ws as b,
  Ss as c,
  Ts as d,
  Rs as e,
  ks as f,
  ot as g,
  _s as i,
  Es as l,
  Ps as p,
  Ya as v,
  Cs as w,
};
