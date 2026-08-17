const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = (m.f ||= [
    "assets/pdfDocument-V1r75ju6.js",
    "assets/index-BM3ZINIl.js",
    "assets/index-DCmpUGyQ.css",
  ]),
) => i.map((i) => d[i]);
var Mr = Object.defineProperty;
var Or = (e, r, a) =>
  r in e
    ? Mr(e, r, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: a,
      })
    : (e[r] = a);
var Ct = (e, r, a) => Or(e, typeof r != "symbol" ? r + "" : r, a);
import {
  h as qe,
  s as Br,
  n as St,
  o as Nr,
  i as Wr,
  L as Hr,
} from "./source-editor-CGMzw50e.jsx";
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
  x as _Component2,
  _ as _Component7,
  T as I,
  B as _Component8,
  C as Oe,
  aT as en,
  V as Q,
  aD as $e,
  $ as Tt,
  X as _Component41,
  S as Et,
  bv as _Component45,
} from "./index-BM3ZINIl.jsx";
import {
  b as Ue,
  T as _Component6,
  L as _Component46,
} from "./TextField-D8vc_sXz.jsx";
import { F as _Component } from "./file-plus-_oOf3yl8.js";
import {
  H as nn,
  h as _Component3,
  A as _Component5,
  T as _Component1,
  a as Se,
  j as _Component23,
  G as _Component28,
  J as ln,
} from "./SidebarTreeConnector-DsRNfBIo.jsx";
import { U as _Component4 } from "./upload-Df6L5ERk.js";
import {
  D as _t,
  a as Rt,
  b as It,
  c as At,
  C as _Component15,
  M as _Component27,
} from "./MChip-DiH8NXBU.jsx";
import {
  g as dn,
  L as _Component36,
} from "./latexWorkspacePanelVisibility-BotBQ6b-.js";
import { O as Lt, P as Dt } from "./useLatexQueries-DBpKOPUv.js";
import {
  F as _Component9,
  M as _Component10,
  b as Me,
  T as _Component34,
  a as Ye,
  C as _Component38,
} from "./MarkdownHighlights-C-ZhT8z1.jsx";
import { C as _Component0 } from "./code-xml-DmfSENe3.js";
import { D as Fe } from "./Divider-BcuihGce.jsx";
import { P as _Component12 } from "./play-3zl_nde-.js";
import { S as _Component13 } from "./save-Bre0AB4-.js";
import {
  L as _Component14,
  C as _Component32,
  S as $t,
} from "./search-CE89ACSU.jsx";
import { L as _Component16 } from "./ListItemIcon-CaLBil7Q.jsx";
import {
  R as _Component17,
  S as _Component18,
  F as _Component24,
} from "./square-D0gg5_xj.js";
import { P as _Component19 } from "./pencil-DHia85Iy.js";
import { H as _Component20 } from "./history-7HBMn_Gr.js";
import { a as _Component21 } from "./CopyButton-BcOsqrNJ.js";
import { F as _Component22 } from "./file-input-BGVdGffy.js";
import {
  u as jn,
  S as _Component33,
} from "./useResizablePanelValue-D_NwbF9E.js";
import { A as _Component29 } from "./Alert-DnFVD8li.jsx";
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
import { E as Ln } from "./LoadingSection-wWBu2CqJ.jsx";
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
]);
const Bn = (e, r) => {
  const { ownerState: a } = e;
  return [
    {
      [`& .${O.grouped}`]: r.grouped,
    },
    {
      [`& .${O.firstButton}`]: r.firstButton,
    },
    {
      [`& .${O.lastButton}`]: r.lastButton,
    },
    {
      [`& .${O.middleButton}`]: r.middleButton,
    },
    r.root,
    r[a.variant],
    a.disableElevation === true && r.disableElevation,
    a.fullWidth && r.fullWidth,
    a.orientation === "vertical" && r.vertical,
  ];
};
const Nn = (e) => {
  const {
    classes: r,
    color: a,
    disabled: o,
    disableElevation: d,
    fullWidth: c,
    orientation: p,
    variant: i,
  } = e;
  const s = {
    root: [
      "root",
      i,
      p,
      c && "fullWidth",
      d && "disableElevation",
      `color${Yr(a)}`,
    ],
    grouped: ["grouped", o && "disabled"],
    firstButton: ["firstButton"],
    lastButton: ["lastButton"],
    middleButton: ["middleButton"],
  };
  return Zr(s, On, r);
};
const Wn = Qr("div", {
  name: "MuiButtonGroup",
  slot: "Root",
  overridesResolver: Bn,
})(
  Jr(({ theme: e }) => ({
    display: "inline-flex",
    borderRadius: (e.vars || e).shape.borderRadius,
    variants: [
      {
        props: {
          variant: "contained",
        },
        style: {
          boxShadow: (e.vars || e).shadows[2],
          [`& .${O.grouped}`]: {
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          },
        },
      },
      {
        props: {
          disableElevation: true,
        },
        style: {
          boxShadow: "none",
        },
      },
      {
        props: {
          fullWidth: true,
        },
        style: {
          width: "100%",
        },
      },
      {
        props: {
          orientation: "vertical",
        },
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
        props: {
          orientation: "horizontal",
        },
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
        props: {
          variant: "text",
          orientation: "horizontal",
        },
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
        props: {
          variant: "text",
          orientation: "vertical",
        },
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
            props: {
              variant: "text",
              color: r,
            },
            style: {
              [`& .${O.firstButton},& .${O.middleButton}`]: {
                borderColor: e.alpha((e.vars || e).palette[r].main, 0.5),
              },
            },
          },
        ]),
      {
        props: {
          variant: "outlined",
          orientation: "horizontal",
        },
        style: {
          [`& .${O.firstButton},& .${O.middleButton}`]: {
            borderRightColor: "transparent",
            "&:hover": {
              borderRightColor: "currentColor",
            },
          },
          [`& .${O.lastButton},& .${O.middleButton}`]: {
            marginLeft: -1,
          },
        },
      },
      {
        props: {
          variant: "outlined",
          orientation: "vertical",
        },
        style: {
          [`& .${O.firstButton},& .${O.middleButton}`]: {
            borderBottomColor: "transparent",
            "&:hover": {
              borderBottomColor: "currentColor",
            },
          },
          [`& .${O.lastButton},& .${O.middleButton}`]: {
            marginTop: -1,
          },
        },
      },
      {
        props: {
          variant: "contained",
          orientation: "horizontal",
        },
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
        props: {
          variant: "contained",
          orientation: "vertical",
        },
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
          props: {
            variant: "contained",
            color: r,
          },
          style: {
            [`& .${O.firstButton},& .${O.middleButton}`]: {
              borderColor: (e.vars || e).palette[r].dark,
            },
          },
        })),
    ],
    [`& .${O.grouped}`]: {
      minWidth: 40,
    },
  })),
);
const Hn = f.forwardRef(function (r, a) {
  const o = qr({
    props: r,
    name: "MuiButtonGroup",
  });
  const {
    children: d,
    className: c,
    color: p = "primary",
    component: i = "div",
    disabled: s = false,
    disableElevation: n = false,
    disableFocusRipple: u = false,
    disableRipple: l = false,
    fullWidth: x = false,
    orientation: h = "horizontal",
    size: m = "medium",
    variant: g = "outlined",
    ...C
  } = o;
  const b = {
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
  };
  const L = Nn(b);
  const F = f.useMemo(
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
  );
  const T = nn(d);
  const P = T.length;
  const _ = (M) => {
    const W = M === 0;
    const B = M === P - 1;
    if (W && B) {
      return "";
    } else if (W) {
      return L.firstButton;
    } else if (B) {
      return L.lastButton;
    } else {
      return L.middleButton;
    }
  };
  return (
    <Wn
      as={i}
      role="group"
      className={Kr(L.root, c)}
      ref={a}
      ownerState={b}
      {...C}
    >
      <Gr.Provider value={F}>
        {T.map((M, W) => (
          <Ur.Provider value={_(W)} key={W}>
            {M}
          </Ur.Provider>
        ))}
      </Gr.Provider>
    </Wn>
  );
});
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vn = [
  [
    "path",
    {
      d: "M12 5v14",
      key: "s699le",
    },
  ],
  [
    "path",
    {
      d: "m19 12-7 7-7-7",
      key: "1idqje",
    },
  ],
];
const Xn = oe("arrow-down", Vn);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qn = [
  [
    "path",
    {
      d: "m5 12 7-7 7 7",
      key: "hav0vg",
    },
  ],
  [
    "path",
    {
      d: "M12 19V5",
      key: "x0mq9r",
    },
  ],
];
const Gn = oe("arrow-up", qn);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Un = [
  [
    "path",
    {
      d: "M12 7v14",
      key: "1akyts",
    },
  ],
  [
    "path",
    {
      d: "M16 12h2",
      key: "7q9ll5",
    },
  ],
  [
    "path",
    {
      d: "M16 8h2",
      key: "msurwy",
    },
  ],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y",
    },
  ],
  [
    "path",
    {
      d: "M6 12h2",
      key: "32wvfc",
    },
  ],
  [
    "path",
    {
      d: "M6 8h2",
      key: "30oboj",
    },
  ],
];
const _Component47 = oe("book-open-text", Un);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kn = [
  [
    "path",
    {
      d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",
      key: "ezmyqa",
    },
  ],
  [
    "path",
    {
      d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
      key: "e1hn23",
    },
  ],
];
const Yn = oe("braces", Kn);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      key: "afitv7",
    },
  ],
  [
    "path",
    {
      d: "M12 3v18",
      key: "108xh3",
    },
  ],
];
const Qn = oe("columns-2", Zn);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jn = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6",
    },
  ],
  [
    "path",
    {
      d: "M9 10h6",
      key: "9gxzsh",
    },
  ],
  [
    "path",
    {
      d: "M12 13V7",
      key: "h0r20n",
    },
  ],
  [
    "path",
    {
      d: "M9 17h6",
      key: "r8uit2",
    },
  ],
];
const _Component30 = oe("file-diff", Jn);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ta = [
  [
    "path",
    {
      d: "M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127",
      key: "wfxp4w",
    },
  ],
  [
    "path",
    {
      d: "M14 2v5a1 1 0 0 0 1 1h5",
      key: "wfsgrz",
    },
  ],
  [
    "path",
    {
      d: "m5 11-3 3",
      key: "1dgrs4",
    },
  ],
  [
    "path",
    {
      d: "m5 17-3-3h10",
      key: "1mvvaf",
    },
  ],
];
const _Component31 = oe("file-output", ta);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ra = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6",
    },
  ],
  [
    "path",
    {
      d: "M14 2v5a1 1 0 0 0 1 1h5",
      key: "wfsgrz",
    },
  ],
  [
    "circle",
    {
      cx: "11.5",
      cy: "14.5",
      r: "2.5",
      key: "1bq0ko",
    },
  ],
  [
    "path",
    {
      d: "M13.3 16.3 15 18",
      key: "2quom7",
    },
  ],
];
const _Component11 = oe("file-search", ra);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aa = [
  [
    "path",
    {
      d: "M10 8h.01",
      key: "1r9ogq",
    },
  ],
  [
    "path",
    {
      d: "M12 12h.01",
      key: "1mp3jc",
    },
  ],
  [
    "path",
    {
      d: "M14 8h.01",
      key: "1primd",
    },
  ],
  [
    "path",
    {
      d: "M16 12h.01",
      key: "1l6xoz",
    },
  ],
  [
    "path",
    {
      d: "M18 8h.01",
      key: "emo2bl",
    },
  ],
  [
    "path",
    {
      d: "M6 8h.01",
      key: "x9i8wu",
    },
  ],
  [
    "path",
    {
      d: "M7 16h10",
      key: "wp8him",
    },
  ],
  [
    "path",
    {
      d: "M8 12h.01",
      key: "czm47f",
    },
  ],
  [
    "rect",
    {
      width: "20",
      height: "16",
      x: "2",
      y: "4",
      rx: "2",
      key: "18n3k1",
    },
  ],
];
const _Component26 = oe("keyboard", aa);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ia = [
  [
    "path",
    {
      d: "m16 6 4 14",
      key: "ji33uf",
    },
  ],
  [
    "path",
    {
      d: "M12 6v14",
      key: "1n7gus",
    },
  ],
  [
    "path",
    {
      d: "M8 8v12",
      key: "1gg7y9",
    },
  ],
  [
    "path",
    {
      d: "M4 4v16",
      key: "6qkkli",
    },
  ],
];
const sa = oe("library", ia);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const la = [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      key: "afitv7",
    },
  ],
  [
    "path",
    {
      d: "M3 15h18",
      key: "5xshup",
    },
  ],
];
const _Component25 = oe("panel-bottom", la);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const da = [
  [
    "path",
    {
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "143wyd",
    },
  ],
  [
    "path",
    {
      d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",
      key: "1itne7",
    },
  ],
  [
    "rect",
    {
      x: "6",
      y: "14",
      width: "12",
      height: "8",
      rx: "1",
      key: "1ue0tg",
    },
  ],
];
const _Component40 = oe("printer", da);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pa = [
  [
    "path",
    {
      d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
      key: "1p45f6",
    },
  ],
  [
    "path",
    {
      d: "M21 3v5h-5",
      key: "1q7to0",
    },
  ],
];
const _Component39 = oe("rotate-cw", pa);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xa = [
  [
    "path",
    {
      d: "M15 12h-5",
      key: "r7krc0",
    },
  ],
  [
    "path",
    {
      d: "M15 8h-5",
      key: "1khuty",
    },
  ],
  [
    "path",
    {
      d: "M19 17V5a2 2 0 0 0-2-2H4",
      key: "zz82l3",
    },
  ],
  [
    "path",
    {
      d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
      key: "1ph1d7",
    },
  ],
];
const Ft = oe("scroll-text", xa);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ha = [
  [
    "path",
    {
      d: "M14 17H5",
      key: "gfn3mx",
    },
  ],
  [
    "path",
    {
      d: "M19 7h-9",
      key: "6i9tg",
    },
  ],
  [
    "circle",
    {
      cx: "17",
      cy: "17",
      r: "3",
      key: "18b49y",
    },
  ],
  [
    "circle",
    {
      cx: "7",
      cy: "7",
      r: "3",
      key: "dfmy0x",
    },
  ],
];
const Mt = oe("settings-2", ha);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ma = [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn",
    },
  ],
  [
    "line",
    {
      x1: "3",
      x2: "21",
      y1: "9",
      y2: "9",
      key: "1vqk6q",
    },
  ],
  [
    "line",
    {
      x1: "3",
      x2: "21",
      y1: "15",
      y2: "15",
      key: "o2sbyz",
    },
  ],
  [
    "line",
    {
      x1: "9",
      x2: "9",
      y1: "9",
      y2: "21",
      key: "1ib60c",
    },
  ],
  [
    "line",
    {
      x1: "15",
      x2: "15",
      y1: "9",
      y2: "21",
      key: "1n26ft",
    },
  ],
];
const _Component37 = oe("sheet", ma);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ba = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0",
    },
  ],
  [
    "circle",
    {
      cx: "7.5",
      cy: "7.5",
      r: ".5",
      fill: "currentColor",
      key: "kqv944",
    },
  ],
];
const ya = oe("tag", ba);
const br = 0.5;
const yr = 0.25;
const va = 0.75;
const ja = 0.5;
const wa = 1160;
const ws = 800;
const Ca = "ai-math.latex-pdf-panel-ratio.v2";
const Sa = "ai-math.latex-chat-panel-ratio.v2";
const Pa = "68rem";
const jt = "42rem";
const ka = "34rem";
const Ta = "24rem";
const vr = "--latex-workspace-document-ratio";
const jr = "--latex-workspace-chat-ratio";
const wr = "--latex-document-source-ratio";
const Cr = "--latex-document-pdf-ratio";
const Ea = (e, r) => ({
  [vr]: e,
  [jr]: r,
});
const _a = (e, r) => ({
  [wr]: e,
  [Cr]: r,
});
const Ra = `var(${vr}, 1)`;
const Ia = `var(${jr}, 1)`;
const Aa = `var(${wr}, 1)`;
const La = `var(${Cr}, 1)`;
const Sr = (e) => ({
  minWidth: 0,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  border: `1px solid ${A(e.palette.text.primary, 0.08)}`,
  borderRadius: e.shape.borderRadiusPx,
  backgroundColor: A(e.palette.background.paper, 0.84),
  boxShadow: `0 18px 38px ${A(e.palette.text.primary, 0.06)}`,
});
const Cs = (e) => ({
  height: "100%",
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  containerName: "latex-workspace",
  containerType: "inline-size",
  backgroundColor: "transparent",
  color: e.palette.text.primary,
});
const Da = (e) => ({
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
});
const za = {
  minWidth: 0,
  flex: "1 1 auto",
  display: "flex",
  alignItems: "center",
  flexWrap: "nowrap",
  gap: 1.2,
  [`@container latex-workspace (max-width: ${jt})`]: {
    width: "100%",
  },
};
const $a = {
  flex: "0 0 auto",
  minWidth: 0,
  display: "inline-flex",
  alignItems: "center",
};
const Fa = {
  minWidth: 0,
  flex: "1 1 15rem",
  display: "flex",
  alignItems: "center",
  gap: 0.8,
};
const Ma = {
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
};
const Oa = (e) => ({
  minWidth: 0,
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: e.spacing(0.75),
  flexWrap: "nowrap",
  [`@container latex-workspace (max-width: ${Pa})`]: {
    '& [data-latex-toolbar-view-label="true"]': {
      display: "none",
    },
    '& [data-latex-toolbar-collapse="dense"]': {
      width: e.spacing(5),
      minWidth: e.spacing(5),
      paddingInline: e.spacing(1),
    },
    '& [data-latex-toolbar-label="dense"]': {
      display: "none",
    },
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
    '& [data-latex-toolbar-label="compact"]': {
      display: "none",
    },
    '& [data-latex-toolbar-action="compiler"]': {
      minWidth: e.spacing(5),
      paddingInline: e.spacing(1),
    },
    '& [data-latex-toolbar-action="compiler"] .MuiButton-endIcon': {
      margin: 0,
    },
    '& [data-latex-toolbar-compiler-label="true"]': {
      display: "none",
    },
  },
  [`@container latex-workspace (max-width: ${Ta})`]: {
    '& [data-latex-toolbar-action="compile"]': {
      minWidth: e.spacing(5),
      paddingInline: e.spacing(1),
    },
    '& [data-latex-toolbar-action="compile"] .MuiButton-startIcon': {
      margin: 0,
    },
    '& [data-latex-toolbar-compile-label="true"]': {
      display: "none",
    },
  },
});
const nt = (e) => ({
  flex: "0 0 auto",
  display: "inline-flex",
  alignItems: "center",
  gap: e.spacing(0.75),
});
const at = (e) => ({
  alignSelf: "center",
  height: e.spacing(3),
  marginInline: e.spacing(0.25),
  borderColor: A(e.palette.text.primary, 0.1),
});
const We = (e) => {
  const r = pt(e, {
    elevated: false,
    labeled: true,
    preserveSelectedWhenDisabled: false,
    selected: false,
    selection: "soft",
    size: "toolbar",
    surface: "plain",
    tone: "default",
  });
  const a = pt(e, {
    elevated: false,
    labeled: true,
    preserveSelectedWhenDisabled: true,
    selected: true,
    selection: "soft",
    size: "toolbar",
    surface: "plain",
    tone: "default",
  });
  return {
    ...r,
    "& .MuiButton-startIcon, & .MuiButton-endIcon": {
      margin: 0,
    },
    '&[aria-expanded="true"], &[aria-pressed="true"]': a,
  };
};
const Ba = (e) => ({
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
});
const Ot = (e) => ({
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
});
const Na = {
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
};
const Wa = (e) => ({
  flex: "0 0 auto",
  padding: e.spacing(0.5, 0.75),
  borderBottom: `1px solid ${A(e.palette.text.primary, 0.08)}`,
  backgroundColor: A(e.palette.background.paper, 0.88),
  "& .MuiToggleButton-root": {
    gap: e.spacing(0.55),
  },
});
const Ha = (e) => ({
  flex: "1 1 auto",
  minWidth: 0,
  minHeight: 0,
  display: "flex",
  alignItems: "stretch",
  gap: e.spacing(1),
  overflow: "hidden",
});
const Bt = (e) => (r) => ({
  ...Sr(r),
  flex: e ? "1 1 auto" : `${Ia} 1 0%`,
  minWidth: 0,
});
const Pr = {
  minWidth: 0,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
};
const Va = (e) => ({
  ...Sr(e),
  flex: `${Ra} 1 0%`,
  flexDirection: "row",
  contain: "inline-size",
});
const Xa = {
  ...Pr,
  containerName: "latex-source-panel",
  containerType: "inline-size",
  flex: `${Aa} 1 0%`,
};
const qa = (e) => (r) => ({
  ...Pr,
  containerName: "latex-pdf-panel",
  containerType: "inline-size",
  flex: e ? "1 1 auto" : `${La} 1 0%`,
  "&:fullscreen": {
    backgroundColor: r.palette.background.paper,
  },
});
const Ss = "latex-editor-keybindings-v1";
const kr = [
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
];
const Ga = new Map([
  ["alt", "Alt"],
  ["ctrl", "Ctrl"],
  ["control", "Ctrl"],
  ["cmd", "Meta"],
  ["command", "Meta"],
  ["meta", "Meta"],
  ["mod", "Mod"],
  ["option", "Alt"],
  ["shift", "Shift"],
]);
const Ua = new Map(
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
);
const Ka = (e) => {
  const r = e.trim();
  if (!r) {
    return false;
  }
  const a = r
    .replaceAll("+", "-")
    .split("-")
    .map((n) => n.trim())
    .filter(Boolean);
  if (a.length === 0) {
    return false;
  }
  const o = a.at(-1);
  if (!o) {
    throw new Error("A shortcut must include a key.");
  }
  const d = a.slice(0, -1).map((n) => {
    const u = Ga.get(n.toLowerCase());
    if (!u) {
      throw new Error(`Unknown shortcut modifier: ${n}.`);
    }
    return u;
  });
  if (new Set(d).size !== d.length) {
    throw new Error("A shortcut cannot repeat a modifier.");
  }
  const c = Ua.get(o.toLowerCase());
  const p = /^F(?:[1-9]|1[0-2])$/i.test(o);
  const i = /^[a-z0-9]$/i.test(o);
  if (!c && !p && !i) {
    throw new Error(`Unknown shortcut key: ${o}.`);
  }
  const s = c ?? (p ? o.toUpperCase() : o.toLowerCase());
  return [...d, s].join("-");
};
const Ya = (e) => {
  const r = {
    ...e,
    save: qe.save,
    compile: qe.compile,
  };
  const a = new Map();
  for (const o of [
    {
      label: "Save",
      shortcut: qe.save,
    },
    {
      label: "Compile",
      shortcut: qe.compile,
    },
  ]) {
    if (!o.shortcut) {
      throw new Error(`The default ${o.label} shortcut must be configured.`);
    }
    a.set(o.shortcut.toLowerCase(), o.label);
  }
  for (const o of kr) {
    const d = e[o.key];
    if (d !== false && typeof d != "string") {
      throw new Error(`${o.label} must be a shortcut or disabled.`);
    }
    const c = d === false ? false : Ka(d);
    r[o.key] = c;
    if (!c) {
      continue;
    }
    const p = a.get(c.toLowerCase());
    if (p) {
      throw new Error(`${o.label} and ${p} cannot use the same shortcut.`);
    }
    a.set(c.toLowerCase(), o.label);
  }
  return r;
};
const Ps = (e) => {
  const r = JSON.parse(e);
  if (!r || typeof r != "object" || Array.isArray(r)) {
    throw new Error("Stored LaTeX keybindings must be an object.");
  }
  const a = r;
  const o = {
    ...qe,
  };
  for (const d of kr) {
    const c = a[d.key];
    if (c !== undefined) {
      if (c !== false && typeof c != "string") {
        throw new Error(`Stored ${d.label} shortcut is invalid.`);
      }
      o[d.key] = c;
    }
  }
  return Ya(o);
};
const Nt = [
  {
    extension: ".tex",
    label: "LaTeX source (.tex)",
  },
  {
    extension: ".bib",
    label: "Bibliography (.bib)",
  },
  {
    extension: ".sty",
    label: "Style package (.sty)",
  },
  {
    extension: ".cls",
    label: "Document class (.cls)",
  },
];
const Za = f.forwardRef(function (
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
  const h = f.useRef(null);
  const m = f.useRef(null);
  const [g, C] = f.useState(null);
  const [b, L] = f.useState(null);
  const [F, T] = f.useState("");
  const [P, _] = f.useState("");
  const [M, W] = f.useState(".tex");
  const [B, U] = f.useState(null);
  const q = f.useRef(o);
  const H = f.useRef({
    onDeleteNode: c,
    onRenameNode: i,
    onSelectFile: s,
    onSetMainFile: n,
    onUploadFiles: u,
    onRetryLoad: l,
  });
  q.current = o;
  H.current = {
    onDeleteNode: c,
    onRenameNode: i,
    onSelectFile: s,
    onSetMainFile: n,
    onUploadFiles: u,
    onRetryLoad: l,
  };
  const k = f.useCallback(() => {
    if (!r) {
      L(null);
      T("");
      _("");
      W(".tex");
    }
  }, [r]);
  const E = f.useCallback((v, Z = "") => {
    C(null);
    L({
      mode: v,
      parentPath: Z,
    });
    T("");
    _("");
    W(".tex");
  }, []);
  const le = f.useCallback((v) => {
    C(null);
    L({
      mode: "move",
      file: v,
    });
    T(v.path);
    _("");
    W(".tex");
  }, []);
  const V = f.useCallback(
    (v) => {
      if (!q.current) {
        throw new Error(
          "A LaTeX project must be selected before managing its files.",
        );
      }
      C(null);
      if (v === "new-file") {
        E("create-file");
        return;
      }
      if (v === "new-folder") {
        E("create-folder");
        return;
      }
      if (v === "upload-files") {
        if (!h.current) {
          throw new Error("The LaTeX file upload control is unavailable.");
        }
        h.current.click();
        return;
      }
      if (v === "import-zip") {
        if (!m.current) {
          throw new Error("The LaTeX project import control is unavailable.");
        }
        m.current.click();
        return;
      }
      const Z = v;
      throw new Error(`Unsupported LaTeX project file action: ${Z}`);
    },
    [E],
  );
  const Y = f.useCallback((v) => {
    C(v);
  }, []);
  const S = f.useCallback(
    (v, Z = "") => {
      if (!q.current) {
        throw new Error(
          "A LaTeX project must be selected before creating project items.",
        );
      }
      E(v === "folder" ? "create-folder" : "create-file", Z);
    },
    [E],
  );
  const K = f.useCallback((v) => H.current.onDeleteNode(v), []);
  const j = f.useCallback((v, Z) => H.current.onRenameNode(v, Z), []);
  const D = f.useCallback((v) => H.current.onSelectFile(v), []);
  const z = f.useCallback((v) => H.current.onSetMainFile(v), []);
  const X = f.useCallback(() => {
    H.current.onRetryLoad();
  }, []);
  const N = f.useCallback(async (v) => {
    if (v.length > 0) {
      await H.current.onUploadFiles(v);
    }
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
  const $ = P.trim();
  const G = $.includes("/") || $.includes("\\");
  const se = Nt.find(({ extension: v }) => $.toLowerCase().endsWith(v));
  const ee = se ? $.slice(0, -se.extension.length) : $;
  const te = `${ee}${M}`;
  const ye = (b == null ? undefined : b.mode) === "create-file" ? te : $;
  const he =
    b && b.mode !== "move" && b.parentPath ? `${b.parentPath}/${ye}` : ye;
  const R = F.trim();
  const xe =
    (b == null ? undefined : b.mode) === "move"
      ? R.length > 0 && R !== b.file.path
      : $.length > 0 &&
        !G &&
        ((b == null ? undefined : b.mode) !== "create-file" || ee.length > 0);
  const ve = async () => {
    if (!b || !xe) {
      return;
    }
    let v;
    if (b.mode === "move") {
      v = await i(b.file, R);
    } else {
      v = await d(b.mode === "create-folder" ? "folder" : "text", he);
    }
    if (v) {
      L(null);
      T("");
      _("");
      W(".tex");
    }
  };
  const ke = async (v) => {
    if (!B) {
      return;
    }
    if (
      await p(B, {
        replace: v,
      })
    ) {
      U(null);
    }
  };
  const Ce = (v) => {
    if (v.target.files) {
      N(Array.from(v.target.files));
    }
    v.target.value = "";
  };
  return (
    <t.Fragment>
      <input ref={h} hidden={true} multiple={true} type="file" onChange={Ce} />
      <input
        ref={m}
        hidden={true}
        type="file"
        accept=".zip,application/zip"
        onChange={(v) => {
          var Te;
          const Z = (Te = v.target.files) == null ? undefined : Te[0];
          if (Z) {
            U(Z);
          }
          v.target.value = "";
        }}
      />
      <Ue
        anchorEl={g}
        open={!!g}
        onClose={() => {
          C(null);
        }}
      >
        <_Component2 disabled={!o || r || a} onClick={() => V("new-file")}>
          <_Component size={16} />
          New file
        </_Component2>
        <_Component2 disabled={!o || r || a} onClick={() => V("new-folder")}>
          <_Component3 size={16} />
          New folder
        </_Component2>
        <_Component2
          disabled={!o || r || a}
          onClick={() => {
            V("upload-files");
          }}
        >
          <_Component4 size={16} />
          Upload files
        </_Component2>
        <_Component2
          disabled={!o || r || a}
          onClick={() => {
            V("import-zip");
          }}
        >
          <_Component5 size={16} />
          Import ZIP
        </_Component2>
      </Ue>
      <_t
        open={!!b}
        fullWidth={true}
        maxWidth="xs"
        aria-labelledby="latex-node-dialog-title"
        onClose={k}
      >
        <Rt id="latex-node-dialog-title">
          {(b == null ? undefined : b.mode) === "create-file" && "New file"}
          {(b == null ? undefined : b.mode) === "create-folder" && "New folder"}
          {(b == null ? undefined : b.mode) === "move" && "Move project item"}
        </Rt>
        <It>
          {(b == null ? undefined : b.mode) === "create-file" && (
            <t.Fragment>
              <_Component6
                autoFocus={true}
                fullWidth={true}
                error={G}
                helperText={
                  G
                    ? "Enter a file name only."
                    : ee
                      ? `The file will be created as ${he}.`
                      : b.parentPath
                        ? `The file will be created inside ${b.parentPath}.`
                        : "The file will be created in the project root."
                }
                label="File name"
                margin="normal"
                placeholder="introduction"
                value={P}
                onChange={(v) => {
                  _(v.target.value);
                }}
                onKeyDown={(v) => {
                  if (v.key === "Enter" && xe) {
                    v.preventDefault();
                    ve();
                  }
                }}
              />
              <_Component6
                fullWidth={true}
                select={true}
                label="File type"
                margin="normal"
                value={M}
                onChange={(v) => {
                  W(v.target.value);
                }}
              >
                {Nt.map(({ extension: v, label: Z }) => (
                  <_Component2 value={v} key={v}>
                    {Z}
                  </_Component2>
                ))}
              </_Component6>
            </t.Fragment>
          )}
          {(b == null ? undefined : b.mode) === "create-folder" && (
            <_Component6
              autoFocus={true}
              fullWidth={true}
              error={G}
              helperText={
                G
                  ? "Enter a folder name only."
                  : b.parentPath
                    ? `The folder will be created inside ${b.parentPath}.`
                    : "The folder will be created in the project root."
              }
              label="Folder name"
              margin="normal"
              placeholder="chapters"
              value={P}
              onChange={(v) => {
                _(v.target.value);
              }}
              onKeyDown={(v) => {
                if (v.key === "Enter" && xe) {
                  v.preventDefault();
                  ve();
                }
              }}
            />
          )}
          {(b == null ? undefined : b.mode) === "move" && (
            <_Component6
              autoFocus={true}
              fullWidth={true}
              label="Project path"
              margin="normal"
              placeholder="chapters/introduction.tex"
              value={F}
              onChange={(v) => {
                T(v.target.value);
              }}
              onKeyDown={(v) => {
                if (v.key === "Enter" && xe) {
                  v.preventDefault();
                  ve();
                }
              }}
            />
          )}
        </It>
        <At>
          <_Component7 variant="outlined" disabled={r} onClick={k}>
            Cancel
          </_Component7>
          <_Component7
            variant="contained"
            disabled={r || !xe}
            onClick={() => {
              ve();
            }}
          >
            {(b == null ? undefined : b.mode) === "move" ? "Move" : "Create"}
          </_Component7>
        </At>
      </_t>
      <_t
        open={!!B}
        fullWidth={true}
        maxWidth="sm"
        aria-labelledby="latex-import-project-title"
        onClose={
          r
            ? undefined
            : () => {
                U(null);
              }
        }
      >
        <Rt id="latex-import-project-title">
          Import {(B == null ? undefined : B.name) ?? "ZIP project"}
        </Rt>
        <It>
          <I variant="body2" color="textSecondary">
            Merge adds files whose paths are not already present. Replace
            removes the current project files, imports the complete archive, and
            selects its main document.
          </I>
        </It>
        <At>
          <_Component7
            variant="outlined"
            disabled={r}
            onClick={() => {
              U(null);
            }}
          >
            Cancel
          </_Component7>
          <_Component7
            variant="outlined"
            disabled={r}
            onClick={() => {
              ke(false);
            }}
          >
            Merge non-conflicting files
          </_Component7>
          <_Component7
            color="warning"
            variant="contained"
            disabled={r}
            onClick={() => {
              ke(true);
            }}
          >
            Replace current project
          </_Component7>
        </At>
      </_t>
    </t.Fragment>
  );
});
const ks = f.memo(Za);
const Ts = f.memo(function ({
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
  const [Y, S] = f.useState(null);
  const [K, j] = f.useState(null);
  const [D, z] = f.useState(null);
  const X = dn(x);
  const N = Lt.find(($) => $.value === r);
  if (!N) {
    throw new Error(`Unsupported LaTeX compiler: ${r}`);
  }
  return (
    <_Component8 component="header" sx={Da}>
      <_Component8 sx={za}>
        {a && <_Component8 sx={$a}>{a}</_Component8>}
        <_Component8 sx={Fa}>
          <_Component9 size={18} aria-hidden={true} />
          <_Component8 sx={Ma}>
            <I variant="subtitle1" color="textPrimary" noWrap={true}>
              {(m == null ? undefined : m.name) ?? "LaTeX Projects"}
            </I>
            <I variant="caption" color="textSecondary" noWrap={true}>
              {g ?? "Create a project to begin writing"}
            </I>
          </_Component8>
        </_Component8>
      </_Component8>
      <_Component8 role="toolbar" aria-label="LaTeX editor actions" sx={Oa}>
        {!c && (
          <t.Fragment>
            <_Component1
              exclusive={true}
              size="medium"
              color="primary"
              value={X}
              disabled={!m}
              aria-label="LaTeX editor view"
              sx={Ba}
              onChange={($, G) => {
                if (G) {
                  V(G);
                }
              }}
            >
              <Se value="source" aria-label="Show source only">
                <_Component0 size={17} />
                <span data-latex-toolbar-view-label="true">Source</span>
              </Se>
              <Se value="pdf" aria-label="Show PDF only">
                <_Component9 size={17} />
                <span data-latex-toolbar-view-label="true">PDF</span>
              </Se>
              <Se value="split" aria-label="Show source and PDF side by side">
                <Qn size={17} />
                <span data-latex-toolbar-view-label="true">Split</span>
              </Se>
            </_Component1>
            <Fe
              aria-hidden="true"
              flexItem={true}
              orientation="vertical"
              sx={at}
            />
          </t.Fragment>
        )}
        <_Component8 role="group" aria-label="Workspace commands" sx={nt}>
          {!c && (
            <_Component7
              data-latex-toolbar-collapse="dense"
              variant="text"
              tooltip={x.chat ? "Hide project chat" : "Show project chat"}
              aria-label={
                x.chat ? "Hide project chat panel" : "Show project chat panel"
              }
              aria-pressed={x.chat}
              disabled={!m}
              startIcon={<_Component10 size={17} />}
              sx={We}
              onClick={E}
            >
              <span data-latex-toolbar-label="dense">Chat</span>
            </_Component7>
          )}
          <_Component7
            data-latex-toolbar-collapse="dense"
            variant="text"
            tooltip="Search project (Ctrl/Cmd+Shift+F)"
            aria-label="Search project"
            disabled={!m}
            startIcon={<_Component11 size={17} />}
            sx={We}
            onClick={q}
          >
            <span data-latex-toolbar-label="dense">Search</span>
          </_Component7>
        </_Component8>
        <Fe aria-hidden="true" flexItem={true} orientation="vertical" sx={at} />
        <_Component8 role="group" aria-label="Project commands" sx={nt}>
          <_Component7
            data-latex-toolbar-collapse="compact"
            variant="text"
            aria-label="Project"
            aria-controls={K ? "latex-project-menu" : undefined}
            aria-haspopup="menu"
            aria-expanded={!!K}
            disabled={!m}
            startIcon={<_Component9 size={17} />}
            endIcon={<Me size={16} />}
            sx={We}
            onClick={($) => {
              j($.currentTarget);
            }}
          >
            <span data-latex-toolbar-label="compact">Project</span>
          </_Component7>
          <_Component7
            data-latex-toolbar-collapse="compact"
            variant="text"
            aria-label="Tools"
            aria-controls={D ? "latex-tools-menu" : undefined}
            aria-haspopup="menu"
            aria-expanded={!!D}
            disabled={!m}
            startIcon={<Mt size={17} />}
            endIcon={<Me size={16} />}
            sx={We}
            onClick={($) => {
              z($.currentTarget);
            }}
          >
            <span data-latex-toolbar-label="compact">Tools</span>
          </_Component7>
        </_Component8>
        <Fe aria-hidden="true" flexItem={true} orientation="vertical" sx={at} />
        <_Component8 role="group" aria-label="Build commands" sx={nt}>
          <Hn
            disableElevation={true}
            variant="contained"
            aria-label="Compile project controls"
          >
            <_Component7
              data-latex-toolbar-action="compile"
              tooltip={`Compile with ${N.label} (Ctrl/Cmd+S or Ctrl/Cmd+Enter)`}
              aria-label={
                d ? `Compiling with ${N.label}` : `Compile with ${N.label}`
              }
              disabled={!m || d || l}
              startIcon={
                d ? (
                  <Oe size={16} thickness={5} color="inherit" />
                ) : (
                  <_Component12 size={16} />
                )
              }
              onClick={() => {
                b(false);
              }}
            >
              <span data-latex-toolbar-compile-label="true">
                {d ? "Compiling…" : "Compile"}
              </span>
            </_Component7>
            <_Component7
              data-latex-toolbar-action="compiler"
              aria-label={`Compile options; current compiler ${N.label}`}
              aria-controls={Y ? "latex-compile-menu" : undefined}
              aria-haspopup="menu"
              aria-expanded={!!Y}
              disabled={!m}
              endIcon={<Me size={16} />}
              onClick={($) => {
                S($.currentTarget);
              }}
            >
              <span data-latex-toolbar-compiler-label="true">{N.label}</span>
            </_Component7>
          </Hn>
          <_Component7
            data-latex-toolbar-collapse="dense"
            variant="text"
            tooltip="Save project"
            aria-label="Save project"
            disabled={!m || l}
            startIcon={
              l ? (
                <Oe size={16} thickness={5} color="inherit" />
              ) : (
                <_Component13 size={16} />
              )
            }
            sx={We}
            onClick={() => {
              H();
            }}
          >
            <span data-latex-toolbar-label="dense">Save</span>
          </_Component7>
        </_Component8>
      </_Component8>
      <Ue
        id="latex-compile-menu"
        anchorEl={Y}
        open={!!Y}
        variant="menu"
        onClose={() => {
          S(null);
        }}
      >
        <_Component14>Compiler</_Component14>
        {Lt.map(($) => (
          <_Component2
            selected={r === $.value}
            disabled={!m || l || d}
            onClick={() => {
              S(null);
              L($.value);
            }}
            key={$.value}
          >
            <_Component16>
              {r === $.value && <_Component15 size={16} />}
            </_Component16>
            {$.label}
          </_Component2>
        ))}
        <Fe />
        <_Component14>Build</_Component14>
        <_Component2
          disabled={d}
          onClick={() => {
            S(null);
            b(true);
          }}
        >
          <_Component16
            sx={{
              mr: -1.5,
            }}
          >
            <_Component17 />
          </_Component16>
          Recompile from scratch
        </_Component2>
        <_Component2
          disabled={!d || o}
          onClick={() => {
            S(null);
            C();
          }}
        >
          <_Component16
            sx={{
              mr: -1.5,
            }}
          >
            <_Component18 />
          </_Component16>
          {o ? "Cancelling…" : "Cancel compilation"}
        </_Component2>
      </Ue>
      <Ue
        id="latex-project-menu"
        anchorEl={K}
        open={!!K}
        onClose={() => {
          j(null);
        }}
      >
        <_Component2
          disabled={!m || n || !P}
          onClick={() => {
            if (!K) {
              throw new Error("The project actions menu is not open.");
            }
            const $ = K;
            j(null);
            if (P != null) {
              P($);
            }
          }}
        >
          <_Component16>
            <_Component size={16} />
          </_Component16>
          Add files or folders
        </_Component2>
        <_Component2
          disabled={!m || n}
          onClick={() => {
            j(null);
            U();
          }}
        >
          <_Component16>
            <_Component19 size={16} />
          </_Component16>
          Rename project
        </_Component2>
        <_Component2
          disabled={!m || s}
          onClick={() => {
            j(null);
            B();
          }}
        >
          <_Component16>
            <_Component20 size={16} />
          </_Component16>
          {s ? "Opening history…" : "Project history"}
        </_Component2>
        <_Component2
          disabled={!m || p}
          onClick={() => {
            j(null);
            T();
          }}
        >
          <_Component16>
            <_Component21 size={16} />
          </_Component16>
          {p ? "Copying project…" : "Make a copy"}
        </_Component2>
        <_Component2
          disabled={!m || n}
          onClick={() => {
            j(null);
            W();
          }}
        >
          <_Component16>
            <_Component22 size={16} />
          </_Component16>
          {i ? "Opening Overleaf…" : "Open in Overleaf"}
        </_Component2>
        <Fe />
        <_Component2
          disabled={!m || n}
          onClick={() => {
            j(null);
            F();
          }}
        >
          <_Component16>
            <_Component23 size={16} />
          </_Component16>
          Delete project
        </_Component2>
      </Ue>
      <Ue
        id="latex-tools-menu"
        anchorEl={D}
        open={!!D}
        onClose={() => {
          z(null);
        }}
      >
        <_Component2
          disabled={!m}
          onClick={() => {
            z(null);
            le();
          }}
        >
          <_Component16>
            <_Component24 size={16} />
          </_Component16>
          {u ? "Writing focus is active" : "Focus writing"}
        </_Component2>
        <_Component2
          disabled={!m}
          onClick={() => {
            z(null);
            k();
          }}
        >
          <_Component16>
            <_Component25 size={16} />
          </_Component16>
          {h ? "Hide output panel" : "Show output panel"}
        </_Component2>
        <Fe />
        <_Component2
          disabled={!m}
          onClick={() => {
            z(null);
            M();
          }}
        >
          <_Component16>
            <_Component26 size={16} />
          </_Component16>
          Keyboard shortcuts
        </_Component2>
        <_Component2
          disabled={!m}
          onClick={() => {
            z(null);
            _();
          }}
        >
          <_Component16>
            <Mt size={16} />
          </_Component16>
          Editor settings
        </_Component2>
      </Ue>
    </_Component8>
  );
});
class fe extends Error {
  constructor(a, o, d) {
    super(
      o,
      d === undefined
        ? undefined
        : {
            cause: d,
          },
    );
    Ct(this, "operation");
    this.name = "LatexDraftRecoveryStorageError";
    this.operation = a;
  }
}
const Qa = "ai-math-latex-durability";
const Ja = 1;
const Ze = "recovery-drafts";
const Wt = "workspace-id";
const tt = (e, r) => {
  if (e.trim().length === 0) {
    throw new Error(`${r} must not be blank.`);
  }
};
const ot = ({ workspaceId: e, fileId: r }) => {
  tt(e, "LaTeX recovery workspace id");
  tt(r, "LaTeX recovery file id");
  return JSON.stringify([e, r]);
};
const it = (e) => {
  if (!e || typeof e != "object") {
    return false;
  }
  const r = e;
  return (
    r.schemaVersion === 1 &&
    typeof r.id == "string" &&
    typeof r.workspaceId == "string" &&
    r.workspaceId.trim().length > 0 &&
    typeof r.fileId == "string" &&
    r.fileId.trim().length > 0 &&
    typeof r.fileName == "string" &&
    (r.projectName === undefined || typeof r.projectName == "string") &&
    typeof r.source == "string" &&
    (r.baseRevision === null || typeof r.baseRevision == "string") &&
    typeof r.updatedAt == "number" &&
    Number.isFinite(r.updatedAt)
  );
};
const Ht = (e, r) =>
  r instanceof fe
    ? r
    : new fe(e, `Could not ${e} the local LaTeX recovery draft store.`, r);
const eo = (e, r) =>
  new Promise((a, o) => {
    e.onsuccess = () => {
      a(e.result);
    };
    e.onerror = () => {
      o(
        new fe(
          r,
          `IndexedDB request failed while trying to ${r} a LaTeX recovery draft.`,
          e.error,
        ),
      );
    };
  });
const to = (e, r) =>
  new Promise((a, o) => {
    e.oncomplete = () => {
      a();
    };
    e.onerror = () => {
      o(
        new fe(
          r,
          `IndexedDB transaction failed while trying to ${r} a LaTeX recovery draft.`,
          e.error,
        ),
      );
    };
    e.onabort = () => {
      o(
        new fe(
          r,
          `IndexedDB transaction was aborted while trying to ${r} a LaTeX recovery draft.`,
          e.error,
        ),
      );
    };
  });
const ro = ({ databaseName: e = Qa, indexedDB: r } = {}) => {
  tt(e, "LaTeX recovery database name");
  const a = () => {
    const n =
      r ?? (typeof window === "undefined" ? undefined : window.indexedDB);
    if (!n) {
      throw new fe(
        "open",
        "IndexedDB is unavailable; local LaTeX draft recovery cannot start.",
      );
    }
    return n;
  };
  const o = async () => {
    let n;
    try {
      n = a().open(e, Ja);
    } catch (u) {
      throw Ht("open", u);
    }
    return new Promise((u, l) => {
      let x = false;
      n.onupgradeneeded = () => {
        const h = n.result;
        if (!h.objectStoreNames.contains(Ze)) {
          h.createObjectStore(Ze, {
            keyPath: "id",
          }).createIndex(Wt, "workspaceId", {
            unique: false,
          });
        }
      };
      n.onsuccess = () => {
        if (x) {
          n.result.close();
          return;
        }
        x = true;
        u(n.result);
      };
      n.onerror = () => {
        if (!x) {
          x = true;
          l(
            new fe(
              "open",
              "Could not open the local LaTeX recovery draft database.",
              n.error,
            ),
          );
        }
      };
      n.onblocked = () => {
        if (!x) {
          x = true;
          l(
            new fe(
              "open",
              "The local LaTeX recovery draft database is blocked by another browser tab.",
            ),
          );
        }
      };
    });
  };
  const d = async (n, u, l) => {
    const x = await o();
    try {
      const h = x.transaction(Ze, u);
      const m = to(h, n);
      const g = l(h.objectStore(Ze));
      const C = await eo(g, n);
      await m;
      return C;
    } catch (h) {
      throw Ht(n, h);
    } finally {
      x.close();
    }
  };
  return {
    read: async (n) => {
      const u = ot(n);
      const l = await d("read", "readonly", (m) => m.get(u));
      if (l === undefined) {
        return null;
      }
      if (!it(l)) {
        throw new fe("read", "The stored LaTeX recovery draft is invalid.");
      }
      if (l.id !== u) {
        throw new fe(
          "read",
          "The stored LaTeX recovery draft does not match the requested file.",
        );
      }
      const { id: x, ...h } = l;
      return h;
    },
    write: async (n) => {
      const u = ot(n);
      if (
        !it({
          ...n,
          id: u,
        })
      ) {
        throw new fe("write", "Cannot store an invalid LaTeX recovery draft.");
      }
      await d("write", "readwrite", (l) =>
        l.put({
          ...n,
          id: u,
        }),
      );
    },
    remove: async (n) => {
      const u = ot(n);
      await d("remove", "readwrite", (l) => l.delete(u));
    },
    list: async (n) => {
      if (n !== undefined) {
        tt(n, "LaTeX recovery workspace id");
      }
      const u = await d("list", "readonly", (l) =>
        n === undefined ? l.getAll() : l.index(Wt).getAll(n),
      );
      if (!Array.isArray(u)) {
        throw new fe("list", "The local LaTeX recovery draft list is invalid.");
      }
      return u.map((l) => {
        if (!it(l)) {
          throw new fe(
            "list",
            "The local LaTeX recovery draft list contains an invalid record.",
          );
        }
        const { id: x, ...h } = l;
        return h;
      });
    },
  };
};
const Es = ro();
var He = {
  exports: {},
};
var Ge = {
  exports: {},
};
var Ae = {};
var st = {};
var Vt;
function no() {
  if (!Vt) {
    Vt = 1;
    Object.defineProperty(st, "__esModule", {
      value: true,
    });
  }
  return st;
}
var lt = {};
var Xt;
function ao() {
  if (!Xt) {
    Xt = 1;
    (function (e) {
      Object.defineProperty(e, "__esModule", {
        value: true,
      });
      e.types = undefined;
      (function (r) {
        r[(r.ROOT = 0)] = "ROOT";
        r[(r.GROUP = 1)] = "GROUP";
        r[(r.POSITION = 2)] = "POSITION";
        r[(r.SET = 3)] = "SET";
        r[(r.RANGE = 4)] = "RANGE";
        r[(r.REPETITION = 5)] = "REPETITION";
        r[(r.REFERENCE = 6)] = "REFERENCE";
        r[(r.CHAR = 7)] = "CHAR";
      })((e.types ||= {}));
    })(lt);
  }
  return lt;
}
var ct = {};
var qt;
function oo() {
  if (!qt) {
    qt = 1;
    Object.defineProperty(ct, "__esModule", {
      value: true,
    });
  }
  return ct;
}
var Gt;
function Pe() {
  if (!Gt) {
    Gt = 1;
    (function (e) {
      var r =
        (Ae && Ae.__createBinding) ||
        (Object.create
          ? function (o, d, c, p = c) {
              Object.defineProperty(o, p, {
                enumerable: true,
                get: function () {
                  return d[c];
                },
              });
            }
          : function (o, d, c, p = c) {
              o[p] = d[c];
            });
      var a =
        (Ae && Ae.__exportStar) ||
        function (o, d) {
          for (var c in o) {
            if (
              c !== "default" &&
              !Object.prototype.hasOwnProperty.call(d, c)
            ) {
              r(d, o, c);
            }
          }
        };
      Object.defineProperty(e, "__esModule", {
        value: true,
      });
      a(no(), e);
      a(ao(), e);
      a(oo(), e);
    })(Ae);
  }
  return Ae;
}
var ge = {};
var ue = {};
var ne = {};
var Ut;
function wt() {
  if (Ut) {
    return ne;
  }
  Ut = 1;
  Object.defineProperty(ne, "__esModule", {
    value: true,
  });
  ne.anyChar =
    ne.notWhitespace =
    ne.whitespace =
    ne.notInts =
    ne.ints =
    ne.notWords =
    ne.words =
      undefined;
  const e = Pe();
  const r = () => [
    {
      type: e.types.RANGE,
      from: 48,
      to: 57,
    },
  ];
  const a = () => [
    {
      type: e.types.CHAR,
      value: 95,
    },
    {
      type: e.types.RANGE,
      from: 97,
      to: 122,
    },
    {
      type: e.types.RANGE,
      from: 65,
      to: 90,
    },
    {
      type: e.types.RANGE,
      from: 48,
      to: 57,
    },
  ];
  const o = () => [
    {
      type: e.types.CHAR,
      value: 9,
    },
    {
      type: e.types.CHAR,
      value: 10,
    },
    {
      type: e.types.CHAR,
      value: 11,
    },
    {
      type: e.types.CHAR,
      value: 12,
    },
    {
      type: e.types.CHAR,
      value: 13,
    },
    {
      type: e.types.CHAR,
      value: 32,
    },
    {
      type: e.types.CHAR,
      value: 160,
    },
    {
      type: e.types.CHAR,
      value: 5760,
    },
    {
      type: e.types.RANGE,
      from: 8192,
      to: 8202,
    },
    {
      type: e.types.CHAR,
      value: 8232,
    },
    {
      type: e.types.CHAR,
      value: 8233,
    },
    {
      type: e.types.CHAR,
      value: 8239,
    },
    {
      type: e.types.CHAR,
      value: 8287,
    },
    {
      type: e.types.CHAR,
      value: 12288,
    },
    {
      type: e.types.CHAR,
      value: 65279,
    },
  ];
  const d = () => [
    {
      type: e.types.CHAR,
      value: 10,
    },
    {
      type: e.types.CHAR,
      value: 13,
    },
    {
      type: e.types.CHAR,
      value: 8232,
    },
    {
      type: e.types.CHAR,
      value: 8233,
    },
  ];
  ne.words = () => ({
    type: e.types.SET,
    set: a(),
    not: false,
  });
  ne.notWords = () => ({
    type: e.types.SET,
    set: a(),
    not: true,
  });
  ne.ints = () => ({
    type: e.types.SET,
    set: r(),
    not: false,
  });
  ne.notInts = () => ({
    type: e.types.SET,
    set: r(),
    not: true,
  });
  ne.whitespace = () => ({
    type: e.types.SET,
    set: o(),
    not: false,
  });
  ne.notWhitespace = () => ({
    type: e.types.SET,
    set: o(),
    not: true,
  });
  ne.anyChar = () => ({
    type: e.types.SET,
    set: d(),
    not: true,
  });
  return ne;
}
var Kt;
function io() {
  if (Kt) {
    return ue;
  }
  Kt = 1;
  var e =
    (ue && ue.__createBinding) ||
    (Object.create
      ? function (p, i, s, n = s) {
          Object.defineProperty(p, n, {
            enumerable: true,
            get: function () {
              return i[s];
            },
          });
        }
      : function (p, i, s, n = s) {
          p[n] = i[s];
        });
  var r =
    (ue && ue.__setModuleDefault) ||
    (Object.create
      ? function (p, i) {
          Object.defineProperty(p, "default", {
            enumerable: true,
            value: i,
          });
        }
      : function (p, i) {
          p.default = i;
        });
  var a =
    (ue && ue.__importStar) ||
    function (p) {
      if (p && p.__esModule) {
        return p;
      }
      var i = {};
      if (p != null) {
        for (var s in p) {
          if (s !== "default" && Object.prototype.hasOwnProperty.call(p, s)) {
            e(i, p, s);
          }
        }
      }
      r(i, p);
      return i;
    };
  Object.defineProperty(ue, "__esModule", {
    value: true,
  });
  ue.tokenizeClass = ue.strToChars = undefined;
  const o = Pe();
  const d = a(wt());
  const c = "@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?";
  ue.strToChars = (p) => {
    const i =
      /(\[\\b\])|(\\)?\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|c([@A-Z[\\\]^?])|([0tnvfr]))/g;
    return p.replace(i, (s, n, u, l, x, h, m) => {
      if (u) {
        return s;
      }
      let g = n
        ? 8
        : l
          ? parseInt(l, 16)
          : x
            ? parseInt(x, 16)
            : h
              ? c.indexOf(h)
              : {
                  0: 0,
                  t: 9,
                  n: 10,
                  v: 11,
                  f: 12,
                  r: 13,
                }[m];
      let C = String.fromCharCode(g);
      if (/[[\]{}^$.|?*+()]/.test(C)) {
        return `\\${C}`;
      } else {
        return C;
      }
    });
  };
  ue.tokenizeClass = (p, i) => {
    let g = [];
    let C;
    let b;
    const L =
      /\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\]\\]))-(((?:\\)])|(((?:\\)?([^\]])))))|(\])|(?:\\)?([^])/g;
    while ((C = L.exec(p)) !== null) {
      const F =
        (C[1] && d.words()) ??
        (C[2] && d.ints()) ??
        (C[3] && d.whitespace()) ??
        (C[4] && d.notWords()) ??
        (C[5] && d.notInts()) ??
        (C[6] && d.notWhitespace()) ??
        (C[7] && {
          type: o.types.RANGE,
          from: (C[8] || C[9]).charCodeAt(0),
          to: (b = C[10]).charCodeAt(b.length - 1),
        }) ??
        ((b = C[16]) && {
          type: o.types.CHAR,
          value: b.charCodeAt(0),
        });
      if (F) {
        g.push(F);
      } else {
        return [g, L.lastIndex];
      }
    }
    throw new SyntaxError(
      `Invalid regular expression: /${i}/: Unterminated character class`,
    );
  };
  return ue;
}
var Yt;
function Zt() {
  if (Yt) {
    return ge;
  }
  Yt = 1;
  var e =
    (ge && ge.__createBinding) ||
    (Object.create
      ? function (u, l, x, h = x) {
          Object.defineProperty(u, h, {
            enumerable: true,
            get: function () {
              return l[x];
            },
          });
        }
      : function (u, l, x, h = x) {
          u[h] = l[x];
        });
  var r =
    (ge && ge.__setModuleDefault) ||
    (Object.create
      ? function (u, l) {
          Object.defineProperty(u, "default", {
            enumerable: true,
            value: l,
          });
        }
      : function (u, l) {
          u.default = l;
        });
  var a =
    (ge && ge.__importStar) ||
    function (u) {
      if (u && u.__esModule) {
        return u;
      }
      var l = {};
      if (u != null) {
        for (var x in u) {
          if (x !== "default" && Object.prototype.hasOwnProperty.call(u, x)) {
            e(l, u, x);
          }
        }
      }
      r(l, u);
      return l;
    };
  Object.defineProperty(ge, "__esModule", {
    value: true,
  });
  ge.tokenizer = undefined;
  const o = a(io());
  const d = Pe();
  const c = a(wt());
  const p = /^[a-zA-Z_$]$/i;
  const i = /^[a-zA-Z0-9_$]$/i;
  const s = /\d/;
  ge.tokenizer = (u) => {
    let l = 0;
    let x;
    let h = {
      type: d.types.ROOT,
      stack: [],
    };
    let m = h;
    let g = h.stack;
    let C = [];
    let b = [];
    let L = 0;
    const F = (P) => {
      throw new SyntaxError(
        `Invalid regular expression: /${u}/: Nothing to repeat at column ${P - 1}`,
      );
    };
    let T = o.strToChars(u);
    while (l < T.length) {
      switch ((x = T[l++])) {
        case "\\":
          if (l === T.length) {
            throw new SyntaxError(
              `Invalid regular expression: /${u}/: \\ at end of pattern`,
            );
          }
          switch ((x = T[l++])) {
            case "b":
              g.push({
                type: d.types.POSITION,
                value: "b",
              });
              break;
            case "B":
              g.push({
                type: d.types.POSITION,
                value: "B",
              });
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
                while (l < T.length && s.test(T[l])) {
                  P += T[l++];
                }
                let _ = parseInt(P, 10);
                const M = {
                  type: d.types.REFERENCE,
                  value: _,
                };
                g.push(M);
                b.push({
                  reference: M,
                  stack: g,
                  index: g.length - 1,
                });
              } else {
                g.push({
                  type: d.types.CHAR,
                  value: x.charCodeAt(0),
                });
              }
          }
          break;
        case "^":
          g.push({
            type: d.types.POSITION,
            value: "^",
          });
          break;
        case "$":
          g.push({
            type: d.types.POSITION,
            value: "$",
          });
          break;
        case "[": {
          let P;
          if (T[l] === "^") {
            P = true;
            l++;
          } else {
            P = false;
          }
          let _ = o.tokenizeClass(T.slice(l), u);
          l += _[1];
          g.push({
            type: d.types.SET,
            set: _[0],
            not: P,
          });
          break;
        }
        case ".":
          g.push(c.anyChar());
          break;
        case "(": {
          let P = {
            type: d.types.GROUP,
            stack: [],
            remember: true,
          };
          if (T[l] === "?") {
            x = T[l + 1];
            l += 2;
            if (x === "=") {
              P.followedBy = true;
              P.remember = false;
            } else if (x === "!") {
              P.notFollowedBy = true;
              P.remember = false;
            } else if (x === "<") {
              let _ = "";
              if (p.test(T[l])) {
                _ += T[l];
                l++;
              } else {
                throw new SyntaxError(
                  `Invalid regular expression: /${u}/: Invalid capture group name, character '${T[l]}' after '<' at column ${l + 1}`,
                );
              }
              while (l < T.length && i.test(T[l])) {
                _ += T[l];
                l++;
              }
              if (!_) {
                throw new SyntaxError(
                  `Invalid regular expression: /${u}/: Invalid capture group name, character '${T[l]}' after '<' at column ${l + 1}`,
                );
              }
              if (T[l] !== ">") {
                throw new SyntaxError(
                  `Invalid regular expression: /${u}/: Unclosed capture group name, expected '>', found '${T[l]}' at column ${l + 1}`,
                );
              }
              P.name = _;
              l++;
            } else if (x === ":") {
              P.remember = false;
            } else {
              throw new SyntaxError(
                `Invalid regular expression: /${u}/: Invalid group, character '${x}' after '?' at column ${l - 1}`,
              );
            }
          } else {
            L += 1;
          }
          g.push(P);
          C.push(m);
          m = P;
          g = P.stack;
          break;
        }
        case ")":
          if (C.length === 0) {
            throw new SyntaxError(
              `Invalid regular expression: /${u}/: Unmatched ) at column ${l - 1}`,
            );
          }
          m = C.pop();
          g = m.options ? m.options[m.options.length - 1] : m.stack;
          break;
        case "|": {
          if (!m.options) {
            m.options = [m.stack];
            delete m.stack;
          }
          let P = [];
          m.options.push(P);
          g = P;
          break;
        }
        case "{": {
          let P = /^(\d+)(,(\d+)?)?\}/.exec(T.slice(l));
          let _;
          let M;
          if (P !== null) {
            if (g.length === 0) {
              F(l);
            }
            _ = parseInt(P[1], 10);
            M = P[2] ? (P[3] ? parseInt(P[3], 10) : Infinity) : _;
            l += P[0].length;
            g.push({
              type: d.types.REPETITION,
              min: _,
              max: M,
              value: g.pop(),
            });
          } else {
            g.push({
              type: d.types.CHAR,
              value: 123,
            });
          }
          break;
        }
        case "?":
          if (g.length === 0) {
            F(l);
          }
          g.push({
            type: d.types.REPETITION,
            min: 0,
            max: 1,
            value: g.pop(),
          });
          break;
        case "+":
          if (g.length === 0) {
            F(l);
          }
          g.push({
            type: d.types.REPETITION,
            min: 1,
            max: Infinity,
            value: g.pop(),
          });
          break;
        case "*":
          if (g.length === 0) {
            F(l);
          }
          g.push({
            type: d.types.REPETITION,
            min: 0,
            max: Infinity,
            value: g.pop(),
          });
          break;
        default:
          g.push({
            type: d.types.CHAR,
            value: x.charCodeAt(0),
          });
      }
    }
    if (C.length !== 0) {
      throw new SyntaxError(
        `Invalid regular expression: /${u}/: Unterminated group`,
      );
    }
    n(b, L);
    return h;
  };
  function n(u, l) {
    for (const x of u.reverse()) {
      if (l < x.reference.value) {
        x.reference.type = d.types.CHAR;
        const h = x.reference.value.toString();
        x.reference.value = parseInt(h, 8);
        if (!/^[0-7]+$/.test(h)) {
          let m = 0;
          while (h[m] !== "8" && h[m] !== "9") {
            m += 1;
          }
          if (m === 0) {
            x.reference.value = h.charCodeAt(0);
            m += 1;
          } else {
            x.reference.value = parseInt(h.slice(0, m), 8);
          }
          if (h.length > m) {
            const g = x.stack.splice(x.index + 1);
            for (const C of h.slice(m)) {
              x.stack.push({
                type: d.types.CHAR,
                value: C.charCodeAt(0),
              });
            }
            x.stack.push(...g);
          }
        }
      }
    }
  }
  return ge;
}
var dt = {};
var pe = {};
var ae = {};
var Qt;
function so() {
  if (Qt) {
    return ae;
  }
  Qt = 1;
  var e =
    (ae && ae.__createBinding) ||
    (Object.create
      ? function (p, i, s, n = s) {
          Object.defineProperty(p, n, {
            enumerable: true,
            get: function () {
              return i[s];
            },
          });
        }
      : function (p, i, s, n = s) {
          p[n] = i[s];
        });
  var r =
    (ae && ae.__setModuleDefault) ||
    (Object.create
      ? function (p, i) {
          Object.defineProperty(p, "default", {
            enumerable: true,
            value: i,
          });
        }
      : function (p, i) {
          p.default = i;
        });
  var a =
    (ae && ae.__importStar) ||
    function (p) {
      if (p && p.__esModule) {
        return p;
      }
      var i = {};
      if (p != null) {
        for (var s in p) {
          if (s !== "default" && Object.prototype.hasOwnProperty.call(p, s)) {
            e(i, p, s);
          }
        }
      }
      r(i, p);
      return i;
    };
  Object.defineProperty(ae, "__esModule", {
    value: true,
  });
  ae.NOTANYCHAR = ae.WHITESPACE = ae.WORDS = ae.INTS = undefined;
  const o = a(wt());
  const d = Pe();
  function c(p) {
    let i = {};
    let s = 0;
    for (const n of p) {
      if (n.type === d.types.CHAR) {
        i[n.value] = true;
      }
      if (n.type === d.types.RANGE) {
        i[`${n.from}-${n.to}`] = true;
      }
      s += 1;
    }
    return {
      lookup: () => Object.assign({}, i),
      len: s,
    };
  }
  ae.INTS = c(o.ints().set);
  ae.WORDS = c(o.words().set);
  ae.WHITESPACE = c(o.whitespace().set);
  ae.NOTANYCHAR = c(o.anyChar().set);
  return ae;
}
var Jt;
function lo() {
  if (Jt) {
    return pe;
  }
  Jt = 1;
  var e =
    (pe && pe.__createBinding) ||
    (Object.create
      ? function (n, u, l, x = l) {
          Object.defineProperty(n, x, {
            enumerable: true,
            get: function () {
              return u[l];
            },
          });
        }
      : function (n, u, l, x = l) {
          n[x] = u[l];
        });
  var r =
    (pe && pe.__setModuleDefault) ||
    (Object.create
      ? function (n, u) {
          Object.defineProperty(n, "default", {
            enumerable: true,
            value: u,
          });
        }
      : function (n, u) {
          n.default = u;
        });
  var a =
    (pe && pe.__importStar) ||
    function (n) {
      if (n && n.__esModule) {
        return n;
      }
      var u = {};
      if (n != null) {
        for (var l in n) {
          if (l !== "default" && Object.prototype.hasOwnProperty.call(n, l)) {
            e(u, n, l);
          }
        }
      }
      r(u, n);
      return u;
    };
  Object.defineProperty(pe, "__esModule", {
    value: true,
  });
  pe.writeSetTokens = pe.setChar = undefined;
  const o = Pe();
  const d = a(so());
  function c(n) {
    if (n === 94) {
      return "\\^";
    } else if (n === 92) {
      return "\\\\";
    } else if (n === 93) {
      return "\\]";
    } else if (n === 45) {
      return "\\-";
    } else {
      return String.fromCharCode(n);
    }
  }
  pe.setChar = c;
  function p(n, { lookup: u, len: l }) {
    if (l !== n.length) {
      return false;
    }
    const x = u();
    for (const h of n) {
      if (h.type === o.types.SET) {
        return false;
      }
      const m = h.type === o.types.CHAR ? h.value : `${h.from}-${h.to}`;
      if (x[m]) {
        x[m] = false;
      } else {
        return false;
      }
    }
    return true;
  }
  function i(n, u = false) {
    if (p(n.set, d.INTS)) {
      if (n.not) {
        return "\\D";
      } else {
        return "\\d";
      }
    }
    if (p(n.set, d.WORDS)) {
      if (n.not) {
        return "\\W";
      } else {
        return "\\w";
      }
    }
    if (n.not && p(n.set, d.NOTANYCHAR)) {
      return ".";
    }
    if (p(n.set, d.WHITESPACE)) {
      if (n.not) {
        return "\\S";
      } else {
        return "\\s";
      }
    }
    let l = "";
    for (let h = 0; h < n.set.length; h++) {
      const m = n.set[h];
      l += s(m);
    }
    const x = `${n.not ? "^" : ""}${l}`;
    if (u) {
      return x;
    } else {
      return `[${x}]`;
    }
  }
  pe.writeSetTokens = i;
  function s(n) {
    if (n.type === o.types.CHAR) {
      return c(n.value);
    } else if (n.type === o.types.RANGE) {
      return `${c(n.from)}-${c(n.to)}`;
    } else {
      return i(n, true);
    }
  }
  return pe;
}
var er;
function tr() {
  if (!er) {
    er = 1;
    (function (e) {
      Object.defineProperty(e, "__esModule", {
        value: true,
      });
      e.reconstruct = undefined;
      const r = Pe();
      const a = lo();
      const o = (c) => c.map(e.reconstruct).join("");
      const d = (c) => {
        if ("options" in c) {
          return c.options.map(o).join("|");
        }
        if ("stack" in c) {
          return o(c.stack);
        }
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
            if (c.value === "^" || c.value === "$") {
              return c.value;
            } else {
              return `\\${c.value}`;
            }
          case r.types.REFERENCE:
            return `\\${c.value}`;
          case r.types.SET:
            return a.writeSetTokens(c);
          case r.types.GROUP:
            return `(${c.name ? `?<${c.name}>` : c.remember ? "" : c.followedBy ? "?=" : c.notFollowedBy ? "?!" : "?:"}${d(c)})`;
          case r.types.REPETITION: {
            const { min: p, max: i } = c;
            let s;
            if (p === 0 && i === 1) {
              s = "?";
            } else if (p === 1 && i === Infinity) {
              s = "+";
            } else if (p === 0 && i === Infinity) {
              s = "*";
            } else if (i === Infinity) {
              s = `{${p},}`;
            } else if (p === i) {
              s = `{${p}}`;
            } else {
              s = `{${p},${i}}`;
            }
            return `${e.reconstruct(c.value)}${s}`;
          }
          case r.types.RANGE:
            return `${a.setChar(c.from)}-${a.setChar(c.to)}`;
          default:
            throw new Error(`Invalid token type ${c}`);
        }
      };
    })(dt);
  }
  return dt;
}
var Qe = Ge.exports;
var rr;
function nr() {
  if (!rr) {
    rr = 1;
    (function (e, r) {
      var a =
        (Qe && Qe.__createBinding) ||
        (Object.create
          ? function (i, s, n, u = n) {
              Object.defineProperty(i, u, {
                enumerable: true,
                get: function () {
                  return s[n];
                },
              });
            }
          : function (i, s, n, u = n) {
              i[u] = s[n];
            });
      var o =
        (Qe && Qe.__exportStar) ||
        function (i, s) {
          for (var n in i) {
            if (
              n !== "default" &&
              !Object.prototype.hasOwnProperty.call(s, n)
            ) {
              a(s, i, n);
            }
          }
        };
      Object.defineProperty(r, "__esModule", {
        value: true,
      });
      r.types = undefined;
      const d = Pe();
      Object.defineProperty(r, "types", {
        enumerable: true,
        get: function () {
          return d.types;
        },
      });
      o(Zt(), r);
      o(tr(), r);
      const c = Zt();
      const p = tr();
      o(Pe(), r);
      r.default = c.tokenizer;
      e.exports = c.tokenizer;
      e.exports.types = d.types;
      e.exports.reconstruct = p.reconstruct;
    })(Ge, Ge.exports);
  }
  return Ge.exports;
}
var ar;
function co() {
  if (ar) {
    return He.exports;
  }
  ar = 1;
  const e = nr();
  const { types: r } = nr();
  function a(c, p, i) {
    var h;
    var m;
    let s;
    let n;
    let u;
    if (c.type === r.REPETITION && (i++, p.reps++, i > 1 || p.reps > p.limit)) {
      return false;
    }
    const l = c.options || ((h = c.value) == null ? undefined : h.options);
    if (l) {
      s = 0;
      u = l.length;
      for (; s < u; s++) {
        n = a(
          {
            stack: l[s],
          },
          p,
          i,
        );
        if (!n) {
          return false;
        }
      }
    }
    const x = c.stack || ((m = c.value) == null ? undefined : m.stack);
    if (!x) {
      return true;
    }
    s = 0;
    u = x.length;
    for (; s < u; s++) {
      n = a(x[s], p, i);
      if (!n) {
        return false;
      }
    }
    return true;
  }
  function o(c, p) {
    const i = {
      reps: 0,
      limit: (p == null ? undefined : p.limit) ?? 25,
    };
    if (d(c)) {
      c = c.source;
    } else if (typeof c != "string") {
      c = String(c);
    }
    try {
      return a(e(c), i, 0);
    } catch {
      return false;
    }
  }
  function d(c) {
    return Object.prototype.toString.call(c) === "[object RegExp]";
  }
  He.exports = o;
  He.exports.default = o;
  He.exports.safeRegex = o;
  return He.exports;
}
var uo = co();
const _s = en(uo);
const po = 0.02;
const fo = 0.1;
const xt = 10000;
const xo = (e) => Math.round(e * xt) / xt;
const Tr = (e) => Math.round(e * xt) / 100;
const ho = (e) => `${Tr(e)}%`;
const Er = ({
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
  return {
    ratio: x,
    resizeHandleProps: h,
  };
};
const mo = (e, r) => (a) => ({
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
  transition: a.transitions.create("flex-basis", {
    duration: a.transitions.duration.shorter,
  }),
});
const go = (e) => ({
  minHeight: "2.8rem",
  minWidth: 0,
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  paddingInline: e.spacing(0.75),
  borderBottom: `1px solid ${A(e.palette.text.primary, 0.08)}`,
});
const bo = (e) => ({
  flex: "1 1 auto",
  minHeight: "2.75rem",
  minWidth: 0,
  "& .MuiTab-root": {
    minHeight: "2.75rem",
    paddingInline: e.spacing(1.25),
  },
});
const yo = (e) => ({
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
});
const vo = (e) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: e.spacing(0.65),
});
const jo = {
  flex: 1,
  minHeight: 0,
  overflow: "hidden",
};
const ut = (e) => ({
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
});
const Le = (e) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: e.spacing(0.8),
  padding: e.spacing(0.7, 0.85),
  borderRadius: e.shape.radiusSmPx,
  textAlign: "left",
  "&:hover": {
    backgroundColor: A(e.palette.primary.main, 0.07),
  },
  '&[aria-current="true"]': {
    backgroundColor: A(e.palette.primary.main, 0.11),
  },
  "&:focus-visible": {
    outline: `2px solid ${A(e.palette.primary.main, 0.42)}`,
    outlineOffset: -2,
  },
});
const De = {
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};
const Ve = (e) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: e.spacing(1),
  padding: e.spacing(2),
  color: e.palette.text.secondary,
});
const wo = (e) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: e.spacing(1),
  overflow: "auto",
  padding: e.spacing(1),
  "& pre": {
    margin: 0,
    whiteSpace: "pre-wrap",
    overflowWrap: "anywhere",
  },
});
const _r = (e) => {
  var o;
  var d;
  const r =
    "hasPdf" in e ? e.success : (o = e.result) == null ? undefined : o.success;
  const a =
    "hasPdf" in e
      ? e.durationMs
      : (d = e.result) == null
        ? undefined
        : d.durationMs;
  if (e.status === "completed" && r && typeof a == "number") {
    return `Compiled in ${a} ms`;
  } else if (e.status === "completed" && r === false && typeof a == "number") {
    return `LaTeX failed in ${a} ms`;
  } else if (e.status === "completed") {
    return "Compile completed without output";
  } else if (e.status === "failed") {
    return "Compiler infrastructure failed";
  } else if (e.status === "cancelled") {
    return "Compile cancelled";
  } else if (e.status === "running") {
    return "Compile running";
  } else {
    return "Compile queued";
  }
};
const ze = (e, ...r) =>
  !e ||
  r.some((a) =>
    String(a ?? "")
      .toLocaleLowerCase()
      .includes(e),
  );
const Co = ({
  activeTab: e,
  compileHistory: r,
  compileResult: a,
  diagnostics: o,
  onOpenDiagnostic: d,
}) => {
  const [c, p] = f.useState("all");
  const [i, s] = f.useState({
    problems: "",
    log: "",
    outputs: "",
    history: "",
  });
  const [n, u] = f.useState(null);
  const l = i[e];
  const x = i.problems.trim().toLocaleLowerCase();
  const h = i.log.trim().toLocaleLowerCase();
  const m = i.outputs.trim().toLocaleLowerCase();
  const g = i.history.trim().toLocaleLowerCase();
  const C = f.useMemo(
    () =>
      o.filter(
        (k) =>
          (c === "all" || k.severity === c) &&
          ze(x, k.message, k.file, k.line, k.column, k.package, k.code),
      ),
    [o, c, x],
  );
  const b = f.useMemo(
    () => ({
      error: o.filter(({ severity: k }) => k === "error").length,
      hint: o.filter(({ severity: k }) => k === "hint").length,
      info: o.filter(({ severity: k }) => k === "info").length,
      warning: o.filter(({ severity: k }) => k === "warning").length,
    }),
    [o],
  );
  const L = f.useMemo(
    () => (a == null ? undefined : a.outputFiles) ?? [],
    [a == null ? undefined : a.outputFiles],
  );
  const F = L.reduce((k, E) => k + E.sizeBytes, 0);
  const T = f.useMemo(
    () => L.filter((k) => ze(m, k.path, k.sizeBytes, "latexmk generated")),
    [m, L],
  );
  const P = f.useMemo(
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
  );
  const _ = f.useMemo(() => {
    const k = (a == null ? undefined : a.log) ?? "";
    if (h) {
      return k.split(/\r?\n/).filter((E) => ze(h, E)).join(`
`);
    } else {
      return k;
    }
  }, [a == null ? undefined : a.log, h]);
  const M =
    !!a &&
    (!!a.pdfAttachmentId || !!a.pdfBase64) &&
    !!ze(m, "document.pdf", "compiled pdf");
  const W =
    a != null &&
    !!a.outputAttachmentId &&
    !!ze(m, "generated files zip archive");
  const B = !!a && !!ze(m, "compile.log compiler output");
  const U = M || W || B || T.length > 0;
  const q = f.useCallback(
    (k) => {
      s((E) => ({
        ...E,
        [e]: k,
      }));
    },
    [e],
  );
  const H = f.useCallback(
    (k) => {
      if (C.length === 0) {
        return;
      }
      const E = n ? C.indexOf(n) : -1;
      const le =
        E === -1 ? (k === 1 ? 0 : C.length - 1) : (E + k + C.length) % C.length;
      const V = C[le];
      u(V);
      d(V);
    },
    [C, d, n],
  );
  f.useEffect(() => {
    if (C.length === 0) {
      return;
    }
    const k = (E) => {
      if (
        !E.defaultPrevented &&
        !E.isComposing &&
        !E.repeat &&
        !E.altKey &&
        !E.ctrlKey &&
        !E.metaKey &&
        E.code === "F8"
      ) {
        E.preventDefault();
        H(E.shiftKey ? -1 : 1);
      }
    };
    document.addEventListener("keydown", k);
    return () => {
      document.removeEventListener("keydown", k);
    };
  }, [C.length, H]);
  return {
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
  };
};
const So = (e) => {
  const r = typeof e.file == "string" ? e.file : null;
  const a = typeof e.column == "number" ? e.column : null;
  const o = e.line ? `Line ${e.line}${a !== null ? `:${a}` : ""}` : "Project";
  return [e.package ? `Package ${e.package}` : null, r, o, e.code]
    .filter(Boolean)
    .join(" · ");
};
const or = (e) =>
  e < 1024
    ? `${e} B`
    : e < 1048576
      ? `${(e / 1024).toFixed(1)} KiB`
      : `${(e / 1048576).toFixed(1)} MiB`;
const Po = (e) =>
  e === "error" || e === "warning" || e === "info" ? e : "secondary";
const ir = (e) => e.replace(/\s+/g, " ").trim() || "(empty)";
const _Component35 = ({
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
  } = c;
  const E = (d == null ? undefined : d.proposal.edits) ?? [];
  const le = H.trim().toLocaleLowerCase();
  const V = E.filter((S) =>
    [S.path, S.oldText, S.newText].some((K) =>
      K.toLocaleLowerCase().includes(le),
    ),
  );
  const Y = new Set(E.map((S) => S.fileId)).size;
  return (
    <t.Fragment>
      {e === "problems" && (
        <_Component8 sx={ut}>
          <_Component8>
            <_Component6
              fullWidth={true}
              size="small"
              label="Filter problems"
              value={H}
              onChange={(S) => k(S.target.value)}
              sx={{
                mb: 1,
              }}
            />
            <_Component27
              clickable={true}
              size="small"
              color={h === "all" ? "primary" : "default"}
              label={`All ${o.length}`}
              onClick={() => M("all")}
            />
            <_Component27
              clickable={true}
              size="small"
              color={h === "error" ? "error" : "default"}
              label={`Errors ${x.error}`}
              onClick={() => M("error")}
            />
            <_Component27
              clickable={true}
              size="small"
              color={h === "warning" ? "warning" : "default"}
              label={`Warnings ${x.warning}`}
              onClick={() => M("warning")}
            />
            {x.info > 0 && (
              <_Component27
                clickable={true}
                size="small"
                color={h === "info" ? "info" : "default"}
                label={`Info ${x.info}`}
                onClick={() => M("info")}
              />
            )}
            {x.hint > 0 && (
              <_Component27
                clickable={true}
                size="small"
                color={h === "hint" ? "secondary" : "default"}
                label={`Hints ${x.hint}`}
                onClick={() => M("hint")}
              />
            )}
            <Q
              tooltip="Previous diagnostic (Shift+F8)"
              aria-label="Previous LaTeX diagnostic"
              size="small"
              disabled={g.length === 0}
              onClick={() => F(-1)}
            >
              <Gn size={16} />
            </Q>
            <Q
              tooltip="Next diagnostic (F8)"
              aria-label="Next LaTeX diagnostic"
              size="small"
              disabled={g.length === 0}
              onClick={() => F(1)}
            >
              <Xn size={16} />
            </Q>
          </_Component8>
          {g.length > 0 &&
            g.map((S, K) => (
              <$e
                aria-current={S === _ ? "true" : undefined}
                disableRipple={true}
                sx={Le}
                onClick={() => {
                  W(S);
                  s(S);
                }}
                key={`${S.severity}-${S.line ?? "project"}-${K}`}
              >
                <_Component28 aria-hidden={true} size={16} />
                <_Component8 sx={De}>
                  <I variant="body2" color="textPrimary">
                    {S.message}
                  </I>
                  <_Component27
                    size="small"
                    color={Po(S.severity)}
                    label={S.severity}
                  />
                  <I variant="caption">{So(S)}</I>
                </_Component8>
              </$e>
            ))}
          {g.length === 0 && (
            <_Component8 sx={Ve}>
              <I variant="body2" color="textSecondary">
                No diagnostics match this filter.
              </I>
            </_Component8>
          )}
        </_Component8>
      )}
      {e === "log" && (
        <_Component8 sx={wo}>
          <_Component6
            fullWidth={true}
            size="small"
            label="Filter compiler log"
            value={H}
            onChange={(S) => k(S.target.value)}
          />
          {C && (
            <I variant="codeBlock" component="pre">
              {C}
            </I>
          )}
          {!C && a != null && !!a.log && (
            <_Component29 severity="info" variant="outlined">
              No compiler log lines match this filter.
            </_Component29>
          )}
          {!C && (a == null || !a.log) && (
            <_Component29 severity="info" variant="outlined">
              Compile the project to inspect its complete log.
            </_Component29>
          )}
        </_Component8>
      )}
      {e === "outputs" && (
        <_Component8 sx={ut}>
          <_Component6
            fullWidth={true}
            size="small"
            label="Filter document changes and output files"
            value={H}
            onChange={(S) => k(S.target.value)}
          />
          {d && (
            <_Component8>
              <I variant="subtitle2" color="textPrimary">
                Document changes
              </I>
              <I variant="caption" color="textSecondary">
                {d.proposal.summary} · {E.length}{" "}
                {E.length === 1 ? "change" : "changes"} across {Y}{" "}
                {Y === 1 ? "file" : "files"}
              </I>
            </_Component8>
          )}
          {d &&
            V.map((S, K) => (
              <$e
                disableRipple={true}
                sx={Le}
                aria-label={"Open proposed change in " + S.path}
                onClick={() => {
                  d.onOpenFile(S.fileId);
                }}
                key={S.fileId + "-" + K}
              >
                <_Component30 aria-hidden={true} size={16} />
                <_Component8 sx={De}>
                  <I variant="body2" color="textPrimary" noWrap={true}>
                    {S.path}
                  </I>
                  <I variant="caption" color="error" noWrap={true}>
                    − {ir(S.oldText)}
                  </I>
                  <I variant="caption" color="success.main" noWrap={true}>
                    + {ir(S.newText)}
                  </I>
                </_Component8>
              </$e>
            ))}
          {d && V.length === 0 && (
            <_Component8 sx={Ve}>
              <I variant="body2" color="textSecondary">
                No document changes match this filter.
              </I>
            </_Component8>
          )}
          {a && (
            <t.Fragment>
              <_Component8>
                <I variant="subtitle2" color="textPrimary">
                  Generated outputs
                </I>
              </_Component8>
              {q && (
                <$e disableRipple={true} sx={Le} onClick={u}>
                  <_Component31 aria-hidden={true} size={16} />
                  <_Component8 sx={De}>
                    <I variant="body2" color="textPrimary">
                      document.pdf
                    </I>
                    <I variant="caption">Compiled PDF · {a.durationMs} ms</I>
                  </_Component8>
                </$e>
              )}
              {U && (
                <$e disableRipple={true} sx={Le} onClick={i}>
                  <_Component5 aria-hidden={true} size={16} />
                  <_Component8 sx={De}>
                    <I variant="body2" color="textPrimary">
                      Download generated files
                    </I>
                    <I variant="caption">
                      ZIP archive · {P.length}{" "}
                      {P.length === 1 ? "file" : "files"} · {or(T)}
                    </I>
                  </_Component8>
                </$e>
              )}
              {b.map((S) => (
                <_Component8 sx={Le} key={S.path}>
                  <_Component31 aria-hidden={true} size={16} />
                  <_Component8 sx={De}>
                    <I variant="body2" color="textPrimary">
                      {S.path}
                    </I>
                    <I variant="caption">
                      Generated by latexmk · {or(S.sizeBytes)}
                    </I>
                  </_Component8>
                </_Component8>
              ))}
              {B && (
                <$e disableRipple={true} sx={Le} onClick={p}>
                  <Ft aria-hidden={true} size={16} />
                  <_Component8 sx={De}>
                    <I variant="body2" color="textPrimary">
                      compile.log
                    </I>
                    <I variant="caption">Complete compiler output</I>
                  </_Component8>
                </$e>
              )}
              {!L && (
                <_Component8 sx={Ve}>
                  <I variant="body2" color="textSecondary">
                    No output files match this filter.
                  </I>
                </_Component8>
              )}
            </t.Fragment>
          )}
          {!a && (
            <_Component8 sx={Ve}>
              <Ft aria-hidden={true} size={20} />
              <I variant="body2" color="textSecondary">
                Compile the project to generate output files.
              </I>
            </_Component8>
          )}
        </_Component8>
      )}
      {e === "history" && (
        <_Component8 sx={ut}>
          <_Component6
            fullWidth={true}
            size="small"
            label="Filter build history"
            value={H}
            onChange={(S) => k(S.target.value)}
          />
          {m.length > 0 &&
            m.map((S) => (
              <$e
                aria-current={S.id === l ? "true" : undefined}
                disableRipple={true}
                sx={Le}
                onClick={() => (n == null ? undefined : n(S))}
                key={S.id}
              >
                <_Component20 />
                <_Component8 sx={De}>
                  <I variant="body2" color="textPrimary">
                    {_r(S)}
                  </I>
                  <I variant="caption">
                    {S.compiler ?? "pdflatex"} · Revision{" "}
                    {S.documentRevision ?? "legacy"} ·{" "}
                    {new Date(S.createdAt).toLocaleString()}
                  </I>
                </_Component8>
              </$e>
            ))}
          {m.length === 0 && (
            <_Component8 sx={Ve}>
              <I variant="body2" color="textSecondary">
                {r.length
                  ? "No build history entries match this filter."
                  : "No builds yet."}
              </I>
            </_Component8>
          )}
        </_Component8>
      )}
    </t.Fragment>
  );
};
const Je = ({ icon: e, label: r, count: a }) => (
  <_Component8 sx={vo}>
    {e}
    <span>{r}</span>
    {a !== undefined && (
      <_Component27 size="xs" label={a} color={a ? "primary" : "default"} />
    )}
  </_Component8>
);
const To = f.memo(function ({
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
  return (
    <_Component8 component="section" sx={mo(i, p)}>
      <$e
        aria-label={i ? "Collapse output panel" : "Expand output panel"}
        aria-expanded={i}
        disableRipple={true}
        sx={yo}
        onClick={g}
      >
        {i ? <Me size={16} /> : <_Component32 size={16} />}
        <I variant="button">Output</I>
      </$e>
      <_Component8 sx={go}>
        <_Component34
          value={r}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="LaTeX workspace output"
          sx={bo}
          onChange={(b, L) => {
            n(L);
          }}
        >
          <Ye
            disableRipple={true}
            value="problems"
            label={
              <Je
                icon={<Cn aria-hidden={true} />}
                label="Problems"
                count={d.length}
              />
            }
          />
          <Ye
            disableRipple={true}
            value="log"
            label={
              <Je icon={<_Component33 aria-hidden={true} />} label="Log" />
            }
          />
          <Ye
            disableRipple={true}
            value="outputs"
            label={
              <Je
                icon={<_Component31 aria-hidden={true} />}
                label="Output files"
              />
            }
          />
          <Ye
            disableRipple={true}
            value="history"
            label={
              <Je
                label="Builds"
                icon={<_Component20 aria-hidden={true} />}
                count={a.length}
              />
            }
          />
        </_Component34>
      </_Component8>
      {i && (
        <_Component8 sx={jo}>
          <_Component35
            activeTab={r}
            compileHistory={a}
            compileResult={o}
            diagnostics={d}
            editProposalReview={c}
            model={C}
            onDownloadLog={u}
            onDownloadOutputs={l}
            onOpenDiagnostic={x}
            onSelectCompileJob={h}
            onShowPdf={m}
            selectedCompileJobId={s}
          />
        </_Component8>
      )}
    </_Component8>
  );
});
const Eo = 0.16;
const _o = 148;
const Ro = (e) => ({
  flex: "0 0 7.75rem",
  width: "7.75rem",
  minHeight: 0,
  position: "relative",
  overflowY: "auto",
  borderRight: `1px solid ${A(e.palette.text.primary, 0.09)}`,
  backgroundColor: A(e.palette.background.paper, 0.82),
});
const Io = {
  position: "relative",
  width: "100%",
};
const Ao = {
  position: "absolute",
  insetInline: 0,
  top: 0,
  display: "flex",
  justifyContent: "center",
  padding: 0.75,
};
const Lo = (e) => (r) => ({
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
});
const Do = (e) => ({
  display: "block",
  maxWidth: "6rem",
  maxHeight: "7.25rem",
  backgroundColor: e.palette.common.white,
  boxShadow: `0 3px 9px ${A(e.palette.common.black, 0.2)}`,
});
const sr = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const Rr = f.memo(
  ({
    isSelected: e,
    pageNumber: r,
    pdfDocument: a,
    rotation: o,
    onPageChange: d,
  }) => {
    const c = f.useRef(null);
    const [p, i] = f.useState(false);
    f.useEffect(() => {
      const s = c.current;
      const n = s == null ? undefined : s.getContext("2d");
      if (!s || !n) {
        return;
      }
      let u = false;
      let l = null;
      i(false);
      a.getPage(r)
        .then((x) => {
          if (u) {
            x.cleanup();
            return;
          }
          const h = x.getViewport({
            scale: Eo,
            rotation: o,
          });
          const m = Math.min(window.devicePixelRatio || 1, 1.5);
          s.width = Math.floor(h.width * m);
          s.height = Math.floor(h.height * m);
          s.style.width = `${h.width}px`;
          s.style.height = `${h.height}px`;
          l = x.render({
            canvasContext: n,
            viewport: h,
            transform: m === 1 ? undefined : [m, 0, 0, m, 0, 0],
          });
          return l.promise.finally(() => {
            x.cleanup();
          });
        })
        .catch((x) => {
          if (
            !u &&
            (!(x instanceof Error) || x.name !== "RenderingCancelledException")
          ) {
            i(true);
          }
        });
      return () => {
        u = true;
        if (l != null) {
          l.cancel();
        }
      };
    }, [r, a, o]);
    return (
      <_Component8
        component="button"
        type="button"
        aria-label={`Go to PDF page ${r}`}
        aria-current={e ? "page" : undefined}
        sx={Lo(e)}
        onClick={() => {
          d(r);
        }}
      >
        <_Component8
          ref={c}
          component="canvas"
          aria-hidden={true}
          sx={Do}
          style={{
            display: p ? "none" : undefined,
          }}
        />
        {p && (
          <I variant="caption" color="error">
            Preview unavailable
          </I>
        )}
        <I variant="caption">{r}</I>
      </_Component8>
    );
  },
);
Rr.displayName = "PdfThumbnail";
const _Component42 = ({
  page: e,
  pdfUrl: r,
  rotation: a = 0,
  onPageChange: o,
}) => {
  const d = f.useRef(null);
  const {
    isPdfDocumentLoading: c,
    pdfDocument: p,
    pdfLoadError: i,
  } = Pn({
    pdfUrl: r,
    loadErrorMessage: "Could not load PDF thumbnails.",
  });
  const s = (p == null ? undefined : p.numPages) ?? 0;
  const n = Sn({
    count: s,
    estimateSize: () => _o,
    getScrollElement: () => d.current,
    overscan: 2,
  });
  f.useLayoutEffect(() => {
    if (s > 0) {
      n.scrollToIndex(Math.min(s, Math.max(1, e)) - 1, {
        align: "auto",
      });
    }
  }, [e, s, n]);
  return (
    <_Component8
      ref={d}
      component="nav"
      aria-label="PDF page thumbnails"
      sx={Ro}
    >
      {(c || !p) && !i && (
        <_Component8 sx={sr}>
          <Oe size={22} />
        </_Component8>
      )}
      {i && (
        <_Component8 sx={sr}>
          <I variant="caption" color="error" align="center">
            Thumbnails unavailable
          </I>
        </_Component8>
      )}
      {p && (
        <_Component8
          sx={Io}
          style={{
            height: n.getTotalSize(),
          }}
        >
          {n.getVirtualItems().map((u) => (
            <_Component8
              sx={Ao}
              style={{
                height: u.size,
                transform: `translateY(${u.start}px)`,
              }}
              key={u.key}
            >
              <Rr
                isSelected={u.index + 1 === e}
                pageNumber={u.index + 1}
                pdfDocument={p}
                rotation={a}
                onPageChange={o}
              />
            </_Component8>
          ))}
        </_Component8>
      )}
    </_Component8>
  );
};
const rt = (e) => {
  if (!Number.isFinite(e.x) || !Number.isFinite(e.y)) {
    throw new Error("PDF synchronization coordinates must be finite.");
  }
};
const $o = (e, r) => {
  rt(r);
  const [a, o] = e.convertToPdfPoint(r.x, r.y);
  const d = {
    x: a - e.rawDims.pageX,
    y: e.rawDims.pageY + e.rawDims.pageHeight - o,
  };
  rt(d);
  return d;
};
const Fo = (e, r) => {
  rt(r);
  const a = e.rawDims.pageX + r.x;
  const o = e.rawDims.pageY + e.rawDims.pageHeight - r.y;
  const [d, c] = e.convertToViewportPoint(a, o);
  const p = {
    x: d,
    y: c,
  };
  rt(p);
  return p;
};
const Mo = {
  flex: 1,
  minWidth: 0,
  minHeight: 0,
  position: "relative",
};
const Oo = (e) => ({
  position: "absolute",
  inset: 0,
  overflow: "auto",
  backgroundColor: e.palette.common.white,
  "& .pdfViewer": {
    minHeight: "100%",
    paddingBlock: 0,
    backgroundColor: e.palette.common.white,
  },
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
  "& .textLayer ::selection": {
    backgroundColor: e.palette.primary.light,
  },
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
    "0%": {
      boxShadow: `0 0 0 0 ${e.palette.primary.main}88`,
    },
    "100%": {
      boxShadow: `0 0 0 12px ${e.palette.primary.main}00`,
    },
  },
});
const Bo = {
  "& .pdfViewer .page": {
    cursor: "crosshair",
  },
};
const lr = (e) => ({
  position: "absolute",
  inset: 0,
  zIndex: 3,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: e.spacing(2),
  backgroundColor: e.palette.background.paper,
});
const No = f.forwardRef(function (
  {
    ariaLabel: r = "PDF document",
    pageMode: a = "continuous",
    onPageChange: o,
    onPageCountChange: d,
    onSearchCountChange: c,
    page: p,
    pdfUrl: i,
    positionSelectionEnabled: s = false,
    rotation: n,
    scaleValue: u,
    searchRequest: l,
    sx: x,
    onPositionSelect: h,
  },
  m,
) {
  const g = f.useRef(null);
  const C = f.useRef(null);
  const b = f.useRef(null);
  const L = f.useRef(0);
  const F = f.useRef(o);
  const T = f.useRef(d);
  const P = f.useRef(h);
  const _ = f.useRef(c);
  const M = f.useRef(l ?? null);
  const W = f.useRef(null);
  const B = f.useRef(null);
  const U = f.useRef(null);
  const q = f.useRef(n);
  const H = f.useRef(u);
  const [k, E] = f.useState(null);
  const [le, V] = f.useState(true);
  f.useEffect(() => {
    F.current = o;
    T.current = d;
    P.current = h;
    _.current = c;
    q.current = n;
    H.current = u;
  }, [o, d, h, c, n, u]);
  const Y = f.useCallback((j) => {
    const D = b.current;
    const z = g.current;
    if (
      !Number.isInteger(j.page) ||
      j.page < 1 ||
      !Number.isFinite(j.x) ||
      !Number.isFinite(j.y)
    ) {
      return;
    }
    if (!D || !D.ready || !z) {
      U.current = j;
      return;
    }
    if (j.page > D.viewer.pagesCount) {
      return;
    }
    U.current = null;
    D.viewer.currentPageNumber = j.page;
    const X = () => {
      const N = D.viewer.getPageView(j.page - 1);
      if (!N) {
        return;
      }
      const $ = Fo(N.viewport, j);
      const G = z.getBoundingClientRect();
      const se = N.div.getBoundingClientRect();
      z.scrollTo({
        left: z.scrollLeft + se.left - G.left + $.x - z.clientWidth / 2,
        top: z.scrollTop + se.top - G.top + $.y - z.clientHeight / 2,
        behavior: "smooth",
      });
      N.div
        .querySelectorAll(".latex-synctex-target")
        .forEach((te) => te.remove());
      const ee = document.createElement("span");
      ee.className = "latex-synctex-target";
      ee.setAttribute("aria-hidden", "true");
      ee.style.left = `${$.x}px`;
      ee.style.top = `${$.y}px`;
      N.div.appendChild(ee);
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
        if ((j = g.current) != null) {
          j.focus();
        }
      },
      nextPage: () => {
        var j;
        if ((j = b.current) != null) {
          j.viewer.nextPage();
        }
      },
      previousPage: () => {
        var j;
        if ((j = b.current) != null) {
          j.viewer.previousPage();
        }
      },
      scrollToPosition: Y,
    }),
    [Y],
  );
  const S = f.useCallback(() => {
    const j = b.current;
    const D = M.current;
    if (!j || !j.ready || !D) {
      return;
    }
    const z = W.current;
    if (
      (z == null ? undefined : z.generation) === j.generation &&
      z.nonce === D.nonce
    ) {
      return;
    }
    const X = B.current;
    const N =
      D.query.length > 0 &&
      (X == null ? undefined : X.generation) === j.generation &&
      X.query === D.query;
    j.eventBus.dispatch("find", {
      source: g.current,
      type: N ? "again" : "",
      query: D.query,
      phraseSearch: true,
      caseSensitive: false,
      entireWord: false,
      highlightAll: true,
      findPrevious: D.previous ?? false,
      matchDiacritics: true,
    });
    W.current = {
      generation: j.generation,
      nonce: D.nonce,
    };
    B.current = {
      generation: j.generation,
      query: D.query,
    };
  }, []);
  const K = f.useCallback(
    (j) => {
      const D = s || j.ctrlKey || j.metaKey;
      const z = j.target;
      const X = b.current;
      if (!D || !P.current || !X || !(z instanceof Element)) {
        return;
      }
      const N = z.closest(".page");
      const $ = Number.parseInt(
        (N == null ? undefined : N.dataset.pageNumber) ?? "",
        10,
      );
      if (!N || !Number.isInteger($) || $ < 1) {
        return;
      }
      const G = X.viewer.getPageView($ - 1);
      if (!G) {
        return;
      }
      j.preventDefault();
      j.stopPropagation();
      const se = G.div.getBoundingClientRect();
      const ee = $o(G.viewport, {
        x: j.clientX - se.left,
        y: j.clientY - se.top,
      });
      P.current({
        page: $,
        ...ee,
      });
    },
    [s],
  );
  f.useEffect(() => {
    var se;
    var ee;
    const j = g.current;
    const D = C.current;
    if (!j || !D) {
      throw new Error("PDF viewer elements were not mounted.");
    }
    let z = false;
    let X = null;
    let N = null;
    const $ = new AbortController();
    const G = L.current + 1;
    L.current = G;
    V(true);
    E(null);
    if ((se = T.current) != null) {
      se.call(T, null);
    }
    if ((ee = _.current) != null) {
      ee.call(_, 0, 0);
    }
    Promise.all([
      kn(),
      Tt(
        () => import("./pdfDocument-V1r75ju6.js").then((te) => te.p),
        __vite__mapDeps([0, 1, 2]),
      ),
      Tt(() => import("./pdf_viewer-BXbC1ghE.js"), []),
    ])
      .then(async ([te, ye, he]) => {
        if (z) {
          return;
        }
        const R = new he.EventBus();
        const xe = new he.PDFLinkService({
          eventBus: R,
          externalLinkTarget: he.LinkTarget.BLANK,
        });
        const ve = new he.PDFFindController({
          eventBus: R,
          linkService: xe,
        });
        const ke = a === "single" ? he.PDFSinglePageViewer : he.PDFViewer;
        const Ce = {
          container: j,
          viewer: D,
          eventBus: R,
          linkService: xe,
          findController: ve,
          enableHWA: true,
          removePageBorders: true,
          abortSignal: $.signal,
        };
        const v = new ke(Ce);
        xe.setViewer(v);
        const Z = () => {
          var _e;
          const me = b.current;
          if (!me || me.generation !== G) {
            return;
          }
          me.ready = true;
          v.currentScaleValue = H.current;
          v.pagesRotation = q.current;
          if ((_e = T.current) != null) {
            _e.call(T, v.pagesCount);
          }
          const je = U.current;
          if (je) {
            Y(je);
          }
          S();
          V(false);
        };
        const Te = (me) => {
          var je;
          if (me.pageNumber) {
            if ((je = F.current) != null) {
              je.call(F, me.pageNumber);
            }
          }
        };
        const Be = (me) => {
          var je;
          var _e;
          var w;
          if ((w = _.current) != null) {
            w.call(
              _,
              ((je = me.matchesCount) == null ? undefined : je.current) ?? 0,
              ((_e = me.matchesCount) == null ? undefined : _e.total) ?? 0,
            );
          }
        };
        R.on("pagesinit", Z);
        R.on("pagechanging", Te);
        R.on("updatefindmatchescount", Be);
        let Ke = false;
        N = () => {
          if (!Ke) {
            Ke = true;
            R.off("pagesinit", Z);
            R.off("pagechanging", Te);
            R.off("updatefindmatchescount", Be);
            $.abort();
            v.setDocument(null);
          }
        };
        X = ye.getDocument(i);
        const Ee = await X.promise;
        if (!z) {
          xe.setDocument(Ee);
          ve.setDocument(Ee);
          b.current = {
            eventBus: R,
            generation: G,
            loadingTask: X,
            pdfDocument: Ee,
            ready: false,
            viewer: v,
          };
          v.setDocument(Ee);
        }
      })
      .catch((te) => {
        if (!z) {
          if (N != null) {
            N();
          }
          E(te instanceof Error ? te.message : "Could not load compiled PDF.");
          V(false);
        }
      });
    return () => {
      z = true;
      if (N != null) {
        N();
      }
      $.abort();
      const te = b.current;
      if ((te == null ? undefined : te.generation) === G) {
        b.current = null;
        te.pdfDocument.destroy();
        te.loadingTask.destroy();
      } else if (X != null) {
        X.destroy();
      }
      D.replaceChildren();
    };
  }, [S, a, i, Y]);
  f.useEffect(() => {
    var D;
    const j = (D = b.current) == null ? undefined : D.viewer;
    if (j && j.currentPageNumber !== p && p >= 1 && p <= j.pagesCount) {
      j.currentPageNumber = p;
    }
  }, [p]);
  f.useEffect(() => {
    var D;
    const j = (D = b.current) == null ? undefined : D.viewer;
    if (j) {
      j.currentScaleValue = u;
    }
  }, [u]);
  f.useEffect(() => {
    var D;
    const j = (D = b.current) == null ? undefined : D.viewer;
    if (j) {
      j.pagesRotation = n;
    }
  }, [n]);
  f.useEffect(() => {
    M.current = l ?? null;
    S();
  }, [S, l]);
  return (
    <_Component8 sx={[Mo, ...(Array.isArray(x) ? x : x ? [x] : [])]}>
      <_Component8
        ref={g}
        tabIndex={0}
        role="document"
        aria-label={r}
        data-page-mode={a}
        sx={[Oo, ...(s ? [Bo] : [])]}
        onClickCapture={K}
      >
        <div ref={C} className="pdfViewer" />
        {le ? (
          <_Component8 sx={lr}>
            <Oe size={28} />
          </_Component8>
        ) : null}
        {k ? (
          <_Component8 sx={lr}>
            <_Component29 severity="error" variant="outlined">
              {k}
            </_Component29>
          </_Component8>
        ) : null}
      </_Component8>
    </_Component8>
  );
});
const Wo = {
  minWidth: 0,
  display: "flex",
  alignItems: "center",
  gap: 1,
};
const Ir = (e) => ({
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: e.spacing(1),
  padding: e.spacing(1.1, 1.25),
  borderBottom: `1px solid ${A(e.palette.text.primary, 0.08)}`,
});
const Ar = (e) => ({
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  gap: e.spacing(0.4),
});
const Ho = "30rem";
const Vo = "22rem";
const Xo = "24rem";
const qo = {
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
};
const Go = (e) => ({
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
    '& [data-pdf-toolbar-collapse="early"]': {
      display: "none",
    },
  },
  "@container latex-pdf-panel (max-width: 44rem)": {
    '& [data-pdf-toolbar-collapse="medium"]': {
      display: "none",
    },
  },
  "@container latex-pdf-panel (max-width: 38rem)": {
    '& [data-pdf-toolbar-collapse="compact"]': {
      display: "none",
    },
  },
  [`@container latex-pdf-panel (max-width: ${Xo})`]: {
    '& [data-pdf-page-total="true"]': {
      display: "none",
    },
  },
});
const Uo = (e) => ({
  flex: "0 0 auto",
  minWidth: 0,
  display: "flex",
  alignItems: "center",
  gap: e.spacing(0.4),
  padding: e.spacing(0.45, 0.75),
  borderBottom: `1px solid ${A(e.palette.text.primary, 0.08)}`,
  backgroundColor: A(e.palette.background.paper, 0.72),
  "& .MuiTextField-root": {
    flex: "1 1 auto",
    minWidth: "8rem",
  },
  "& .MuiInputBase-root": {
    height: e.spacing(4.5),
  },
  [`@container latex-pdf-panel (max-width: ${Vo})`]: {
    '& [data-pdf-search-navigation="true"]': {
      display: "none",
    },
  },
});
const Ko = (e) => ({
  width: "4.25rem",
  flex: "0 0 auto",
  "& .MuiInputBase-root": {
    height: e.spacing(4),
  },
  "& .MuiInputBase-input": {
    padding: e.spacing(0.5, 0.75),
    textAlign: "center",
  },
});
const Yo = (e) => ({
  minWidth: 0,
  flex: "0 1 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: e.spacing(0.25),
});
const Zo = (e) => ({
  ...pt(e, {
    elevated: false,
    labeled: true,
    preserveSelectedWhenDisabled: false,
    selected: false,
    selection: "soft",
    size: "compact",
    surface: "outlined",
    tone: "default",
  }),
  "& .MuiButton-endIcon": {
    marginLeft: 0,
  },
});
const Qo = (e) => ({
  ...Ir(e),
  minWidth: 0,
  gap: e.spacing(0.75),
  padding: e.spacing(0.75, 1),
  [`@container latex-pdf-panel (max-width: ${Ho})`]: {
    flexWrap: "wrap",
    gap: e.spacing(0.5),
    padding: e.spacing(0.6, 0.75),
    "& .MuiToggleButton-root": {
      padding: e.spacing(0.45, 0.75),
    },
  },
});
const Jo = (e) => ({
  ...Ar(e),
  flexWrap: "nowrap",
  marginLeft: "auto",
});
const ei = (e) => ({
  flex: 1,
  minHeight: 0,
  display: "flex",
  overflow: "hidden",
  backgroundColor: e.palette.common.white,
});
const ti = {
  minWidth: 0,
  flex: "1 1 auto",
  display: "flex",
  alignItems: "center",
  gap: 0.75,
};
const Ne = (e) => ({
  flex: 1,
  minHeight: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: e.spacing(2),
});
const Lr = "page-width";
const cr = [
  {
    label: "Fit width",
    value: Lr,
  },
  {
    label: "Fit page",
    value: "page-fit",
  },
  {
    label: "75%",
    value: "0.75",
  },
  {
    label: "100%",
    value: "1",
  },
  {
    label: "125%",
    value: "1.25",
  },
  {
    label: "150%",
    value: "1.5",
  },
  {
    label: "200%",
    value: "2",
  },
];
const ri = 500;
const _Component43 = f.memo(No);
const ai = (e, r) => {
  const a = document.createElement("a");
  a.href = e;
  a.download = r;
  document.body.appendChild(a);
  a.click();
  a.remove();
};
const _Component50 = f.memo(function ({
  canSync: r = false,
  isSyncing: a = false,
  pdfAttachmentId: o,
  pdfBase64: d,
  pdfDownloadFileName: c,
  isFluid: p,
  isStale: i = false,
  pdfRevision: s = null,
  syncRequest: n,
  onReverseSync: u,
}) {
  const l = f.useId();
  const x = f.useId();
  const h = f.useRef(null);
  const m = f.useRef(null);
  const [g, C] = f.useState(1);
  const [b, L] = f.useState("1");
  const [F, T] = f.useState(0);
  const [P, _] = f.useState(Lr);
  const M = f.useRef(false);
  const [W, B] = f.useState(null);
  const [U, q] = f.useState("continuous");
  const [H, k] = f.useState(false);
  const [E, le] = f.useState(false);
  const [V, Y] = f.useState(false);
  const [S, K] = f.useState(false);
  const [j, D] = f.useState("");
  const [z, X] = f.useState(null);
  const [N, $] = f.useState(0);
  const [G, se] = f.useState(0);
  const [ee, te] = f.useState(null);
  const ye = Tn(o);
  const he = En(d);
  const R = ye.objectUrl ?? he;
  const [xe, ve] = f.useState(null);
  const ke = !!R && xe === R;
  const Ce = cr.find((w) => w.value === P);
  const v = f.useCallback((w) => {
    C(w);
    L(String(w));
  }, []);
  f.useEffect(() => {
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
  }, [R]);
  f.useEffect(() => {
    v(1);
    B(null);
    K(false);
    D("");
    $(0);
    se(0);
    X(null);
  }, [v, R]);
  f.useEffect(() => {
    var w;
    if (n) {
      v(n.position.page);
      if ((w = m.current) != null) {
        w.scrollToPosition(n.position);
      }
    }
  }, [v, F, P, R, n, U]);
  f.useEffect(() => {
    const w = () => {
      le(document.fullscreenElement === h.current);
    };
    w();
    document.addEventListener("fullscreenchange", w);
    return () => {
      document.removeEventListener("fullscreenchange", w);
    };
  }, []);
  const Z = f.useCallback((w, J = false) => {
    const Re = w.trim();
    if (!Re) {
      X((Ie) => ({
        nonce: ((Ie == null ? undefined : Ie.nonce) ?? 0) + 1,
        query: "",
      }));
      $(0);
      se(0);
      return;
    }
    X((Ie) => ({
      nonce: ((Ie == null ? undefined : Ie.nonce) ?? 0) + 1,
      previous: J,
      query: Re,
    }));
  }, []);
  const Te = f.useCallback((w, J) => {
    $(w);
    se(J);
  }, []);
  const Be = f.useCallback(
    (w = false) => {
      Z(j, w);
    },
    [Z, j],
  );
  const Ke = f.useCallback(() => {
    D("");
    Z("");
  }, [Z]);
  const Ee = f.useCallback(() => {
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
  }, [v, g, b, W]);
  const me = f.useCallback(() => {
    if (R) {
      window.open(R, "_blank", "noopener,noreferrer");
    }
  }, [R]);
  const je = f.useCallback(() => {
    if (!R) {
      return;
    }
    const w = document.createElement("iframe");
    w.hidden = true;
    w.src = R;
    w.addEventListener(
      "load",
      () => {
        var J;
        var Re;
        if ((J = w.contentWindow) != null) {
          J.focus();
        }
        if ((Re = w.contentWindow) != null) {
          Re.print();
        }
        window.setTimeout(() => {
          w.remove();
        }, 1000);
      },
      {
        once: true,
      },
    );
    document.body.appendChild(w);
  }, [R]);
  const _e = f.useCallback(() => {
    const w = h.current;
    if (!w) {
      throw new Error("PDF panel was not mounted.");
    }
    if (document.fullscreenElement === w) {
      document.exitFullscreen();
      return;
    }
    w.requestFullscreen();
  }, []);
  if (!Ce) {
    throw new Error(`Unsupported PDF scale value: ${P}`);
  }
  return (
    <_Component8 ref={h} component="section" sx={qa(p)}>
      <_Component8 sx={Qo}>
        <_Component8 sx={ti}>
          <I variant="h6" color="textPrimary" noWrap={true}>
            PDF
          </I>
          {s !== null && (
            <I variant="caption" color="textSecondary" noWrap={true}>
              Revision {s}
            </I>
          )}
          {i && (
            <_Component27
              size="small"
              color="warning"
              tooltip={
                s !== null
                  ? `Revision ${s} does not include your latest project changes. Compile to update it.`
                  : "This PDF does not include your latest project changes. Compile to update it."
              }
              label="Out of date"
            />
          )}
        </_Component8>
        <_Component8 sx={Jo}>
          <_Component1
            exclusive={true}
            size="small"
            value={U}
            aria-label="PDF page layout"
            onChange={(w, J) => {
              if (J) {
                q(J);
              }
            }}
          >
            <Se value="continuous" aria-label="Continuous PDF view">
              Continuous
            </Se>
            <Se value="single" aria-label="Single-page PDF view">
              Single
            </Se>
          </_Component1>
        </_Component8>
      </_Component8>
      <_Component8 sx={Go}>
        <Q
          tooltip={
            S
              ? "Hide PDF search"
              : j.trim()
                ? G
                  ? `Show PDF search (${N}/${G})`
                  : "Show PDF search (no matches)"
                : "Search PDF"
          }
          aria-label="Toggle PDF search"
          aria-controls={S ? l : undefined}
          aria-expanded={S}
          size="small"
          disabled={!R}
          color={S || j.trim() ? "primary" : "default"}
          onClick={() => {
            K((w) => !w);
          }}
        >
          <$t size={17} />
        </Q>
        <_Component8 data-pdf-toolbar-group="document" sx={Yo}>
          <Q
            data-pdf-toolbar-collapse="compact"
            tooltip={
              r
                ? V
                  ? "Stop selecting PDF positions"
                  : "Jump from PDF to source (or Ctrl/Cmd+click)"
                : "Recompile the current source to enable SyncTeX"
            }
            aria-label={
              V
                ? "Disable PDF to source synchronization"
                : "Enable PDF to source synchronization"
            }
            size="small"
            disabled={!r || a}
            color={V ? "primary" : "default"}
            onClick={() => {
              Y((w) => !w);
            }}
          >
            {a ? <Oe size={16} /> : <_Component36 size={17} />}
          </Q>
          <Q
            data-pdf-toolbar-collapse="compact"
            tooltip={H ? "Hide page thumbnails" : "Show page thumbnails"}
            aria-label={
              H ? "Hide PDF page thumbnails" : "Show PDF page thumbnails"
            }
            size="small"
            disabled={!R}
            color={H ? "primary" : "default"}
            onClick={() => {
              k((w) => !w);
            }}
          >
            <_Component37 size={17} />
          </Q>
          <Q
            tooltip="Previous page"
            aria-label="Previous PDF page"
            size="small"
            disabled={!R || g <= 1}
            onClick={() => {
              v(Math.max(1, g - 1));
            }}
          >
            <_n size={17} />
          </Q>
          <_Component6
            value={b}
            size="small"
            disabled={!R}
            sx={Ko}
            slotProps={{
              htmlInput: {
                "aria-label": "PDF page number",
                inputMode: "numeric",
                pattern: "[0-9]*",
              },
            }}
            onChange={(w) => {
              const J = w.target.value;
              if (J === "" || /^\d+$/.test(J)) {
                L(J);
              }
            }}
            onBlur={() => {
              if (!M.current) {
                Ee();
              }
            }}
            onFocus={(w) => {
              w.currentTarget.select();
            }}
            onKeyDown={(w) => {
              if (w.key === "Enter") {
                w.preventDefault();
                Ee();
                w.currentTarget.blur();
              }
              if (w.key === "Escape") {
                w.preventDefault();
                M.current = true;
                L(String(g));
                w.currentTarget.blur();
                M.current = false;
              }
            }}
          />
          {W !== null && (
            <I
              data-pdf-page-total="true"
              variant="caption"
              color="textSecondary"
              noWrap={true}
            >
              of {W}
            </I>
          )}
          <Q
            tooltip="Next page"
            aria-label="Next PDF page"
            size="small"
            disabled={!R || !W || g >= W}
            onClick={() => {
              v(Math.min(W ?? g + 1, g + 1));
            }}
          >
            <_Component38 size={17} />
          </Q>
          <_Component7
            variant="text"
            size="small"
            tooltip={`PDF zoom: ${Ce.label}`}
            aria-label={`PDF zoom; current ${Ce.label}`}
            aria-controls={ee ? x : undefined}
            aria-haspopup="menu"
            aria-expanded={!!ee}
            disabled={!R}
            endIcon={<Me size={15} />}
            sx={Zo}
            onClick={(w) => {
              te(w.currentTarget);
            }}
          >
            {Ce.label}
          </_Component7>
          <Q
            data-pdf-toolbar-collapse="compact"
            tooltip="Rotate PDF"
            aria-label="Rotate PDF clockwise"
            size="small"
            disabled={!R}
            onClick={() => {
              T((w) => (w + 90) % 360);
            }}
          >
            <_Component39 size={17} />
          </Q>
          <Q
            data-pdf-toolbar-collapse="medium"
            tooltip="Download PDF"
            aria-label="Download PDF"
            size="small"
            disabled={!R}
            onClick={() => {
              if (R) {
                ai(R, c);
              }
            }}
          >
            <Rn size={17} />
          </Q>
          <Q
            data-pdf-toolbar-collapse="early"
            tooltip="Print PDF"
            aria-label="Print PDF"
            size="small"
            disabled={!R}
            onClick={je}
          >
            <_Component40 size={17} />
          </Q>
          <Q
            data-pdf-toolbar-collapse="medium"
            tooltip={E ? "Exit fullscreen" : "Fullscreen PDF"}
            aria-label={E ? "Exit PDF fullscreen" : "View PDF fullscreen"}
            size="small"
            disabled={!R}
            color={E ? "primary" : "default"}
            onClick={_e}
          >
            {E && <In size={17} />}
            {!E && <An size={17} />}
          </Q>
          <Q
            data-pdf-toolbar-collapse="early"
            tooltip="Open PDF in new tab"
            aria-label="Open PDF in new tab"
            size="small"
            disabled={!R}
            onClick={me}
          >
            <Ln size={17} />
          </Q>
        </_Component8>
      </_Component8>
      {S && (
        <_Component8 id={l} sx={Uo}>
          <_Component6
            autoFocus={true}
            value={j}
            size="small"
            placeholder="Search PDF"
            slotProps={{
              htmlInput: {
                "aria-label": "Search PDF",
              },
            }}
            onChange={(w) => {
              const J = w.target.value;
              D(J);
              Z(J);
            }}
            onKeyDown={(w) => {
              if (w.key === "Enter") {
                w.preventDefault();
                Be(w.shiftKey);
              }
              if (w.key === "Escape") {
                w.preventDefault();
                K(false);
              }
            }}
          />
          <Q
            data-pdf-search-navigation="true"
            tooltip="Find previous"
            aria-label="Find previous in PDF"
            size="small"
            disabled={!j.trim()}
            onClick={() => {
              Be(true);
            }}
          >
            <_Component32 size={16} />
          </Q>
          <Q
            data-pdf-search-navigation="true"
            tooltip="Find next"
            aria-label="Find next in PDF"
            size="small"
            disabled={!j.trim()}
            onClick={() => {
              Be(false);
            }}
          >
            <Me size={16} />
          </Q>
          {j.trim() && (
            <I variant="caption" noWrap={true}>
              {G ? `${N}/${G}` : "No matches"}
            </I>
          )}
          <Q
            tooltip="Clear PDF search"
            aria-label="Clear PDF search"
            size="small"
            disabled={!j}
            onClick={Ke}
          >
            <Dn size={16} />
          </Q>
          <Q
            tooltip="Hide PDF search"
            aria-label="Hide PDF search"
            size="small"
            onClick={() => {
              K(false);
            }}
          >
            <_Component41 size={16} />
          </Q>
        </_Component8>
      )}
      <Ue
        id={x}
        anchorEl={ee}
        open={!!ee}
        onClose={() => {
          te(null);
        }}
      >
        {cr.map((w) => (
          <_Component2
            selected={w.value === P}
            onClick={() => {
              _(w.value);
              te(null);
            }}
            key={w.value}
          >
            {w.label}
          </_Component2>
        ))}
      </Ue>
      <_Component8 sx={qo}>
        {ke && R ? (
          <_Component8 sx={ei}>
            {H && (
              <_Component42 page={g} pdfUrl={R} rotation={F} onPageChange={v} />
            )}
            <_Component43
              ref={m}
              ariaLabel="Compiled LaTeX PDF"
              page={g}
              pageMode={U}
              pdfUrl={R}
              positionSelectionEnabled={r && !a && V}
              rotation={F}
              scaleValue={P}
              searchRequest={z}
              onPageChange={v}
              onPageCountChange={B}
              onPositionSelect={r && !a ? u : undefined}
              onSearchCountChange={Te}
            />
          </_Component8>
        ) : null}
        {!ke && (ye.isLoading || R) ? (
          <_Component8 sx={Ne}>
            <Oe size={28} />
          </_Component8>
        ) : null}
        {!R && !ye.isLoading ? (
          <_Component8 sx={Ne}>
            <$t aria-hidden={true} size={22} />
            <I
              variant="body2"
              color={ye.error ? "error" : "textSecondary"}
              align="center"
            >
              {ye.error
                ? "Could not load the compiled PDF."
                : "Compile the project to generate a searchable PDF preview."}
            </I>
          </_Component8>
        ) : null}
      </_Component8>
    </_Component8>
  );
});
const Dr = "52.5rem";
const ii = {
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
};
const si = {
  flex: 1,
  minWidth: 0,
  minHeight: 0,
  display: "flex",
  overflow: "hidden",
};
const li = {
  flex: "1 1 auto",
  minWidth: 0,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
};
const ci = (e) => ({
  flex: "0 0 auto",
  display: "flex",
  flexDirection: "column",
  gap: e.spacing(0.8),
  padding: e.spacing(1, 1.25),
  borderBottom: `1px solid ${A(e.palette.primary.main, 0.24)}`,
  backgroundColor: A(e.palette.primary.main, 0.055),
});
const di = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 1,
  [`@container latex-source-panel (max-width: ${Dr})`]: {
    alignItems: "flex-start",
    flexDirection: "column",
  },
};
const ui = (e) => ({
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: e.spacing(0.2),
});
const pi = (e) => ({
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  gap: e.spacing(0.6),
});
const fi = (e) => ({
  flex: "0 0 clamp(13rem, 22%, 19rem)",
  minWidth: 0,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  borderLeft: `1px solid ${A(e.palette.text.primary, 0.08)}`,
  backgroundColor: A(e.palette.background.paper, 0.58),
  [`@container latex-source-panel (max-width: ${Dr})`]: {
    display: "none",
  },
});
const xi = ({
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
  const F = f.useMemo(
    () => Array.from(new Set(l.edits.map((M) => M.fileId))),
    [l.edits],
  );
  const T = F.indexOf(r ?? "");
  const P =
    F.length > 1 ? F[(T + 1 + F.length) % F.length] : T === -1 ? F[0] : null;
  const _ = l.edits.filter((M) => M.fileId === r).length;
  return (
    <_Component8
      component="section"
      aria-label="Review proposed LaTeX edits"
      sx={ci}
    >
      <_Component8 sx={di}>
        <_Component8 sx={ui}>
          <I variant="subtitle2" color="textPrimary" noWrap={true}>
            {l.summary}
          </I>
          <I variant="caption" color="textSecondary">
            {_ > 0
              ? `${_} proposed ${_ === 1 ? "change" : "changes"} in this file`
              : `${l.edits.length} proposed ${l.edits.length === 1 ? "change" : "changes"} across ${F.length} ${F.length === 1 ? "file" : "files"}`}{" "}
            · red is removed, green is added
          </I>
        </_Component8>
        <_Component8 sx={pi}>
          {_ > 0 && !u && (
            <t.Fragment>
              <Q
                type="button"
                size="small"
                tooltip="Previous proposed change"
                aria-label="Previous proposed change"
                onClick={L}
              >
                <_Component32 size={16} />
              </Q>
              <Q
                type="button"
                size="small"
                tooltip="Next proposed change"
                aria-label="Next proposed change"
                onClick={g}
              >
                <Me size={16} />
              </Q>
            </t.Fragment>
          )}
          {P && (
            <_Component7
              type="button"
              size="small"
              variant="outlined"
              endIcon={<$n size={15} />}
              onClick={() => {
                C(P);
              }}
            >
              {T === -1 ? "Open change" : "Next file"}
            </_Component7>
          )}
          {Dt}
          <_Component7
            type="button"
            size="small"
            variant="contained"
            startIcon={<_Component15 size={15} />}
            disabled={i || a || !!u || s || !!x || o || d}
            onClick={h}
          >
            {d ? "Applying" : "Apply"}
          </_Component7>
          <Q
            type="button"
            size="small"
            tooltip="Dismiss proposed edits"
            aria-label="Dismiss proposed edits"
            disabled={c}
            onClick={m}
          >
            <_Component41 size={16} />
          </Q>
        </_Component8>
      </_Component8>
      {i && <_Component29 severity="warning">{zn}</_Component29>}
      {!i && a && (
        <_Component29 severity="warning">
          Finish saving or revert the current draft before applying this
          proposal.
        </_Component29>
      )}
      {!i && !a && o && (
        <_Component29 severity="info">
          Wait for the current project chat response before applying this
          proposal.
        </_Component29>
      )}
      {!i && !a && u && <_Component29 severity="warning">{u}</_Component29>}
      {!i && !x && s && (
        <_Component29 severity="info">
          Compiling the proposed project automatically. Apply will be available
          after this exact snapshot compiles successfully.
        </_Component29>
      )}
      {!i && x && <_Component29 severity="error">{x}</_Component29>}
      {!i && e && <_Component29 severity="error">{e}</_Component29>}
      {Dt}
    </_Component8>
  );
};
const _Component48 = f.memo(xi);
const mi = {
  part: 0,
  chapter: 1,
  section: 2,
  subsection: 3,
  subsubsection: 4,
  paragraph: 5,
  subparagraph: 6,
};
const gi = new Set([
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
]);
const dr = (e) =>
  e
    .replace(/\\(?:textbf|textit|texttt|emph|texorpdfstring)\*?\s*/g, "")
    .replace(/\\[A-Za-z@]+\*?/g, "")
    .replace(/[{}]/g, "")
    .replace(/~/g, " ")
    .replace(/\s+/g, " ")
    .trim();
const Xe = (e, r, a) => {
  e.push({
    ...a,
    id: `${r}:${a.kind}:${a.from}:${a.title}`,
    filePath: r,
    line: 1,
  });
};
const ht = (e, r) => {
  const a = [];
  const o = Br(e);
  const d = new Set(gi);
  for (const i of o.matchAll(/\\newtheorem\*?\s*\{([^{}]+)}/g)) {
    d.add(i[1].trim());
  }
  for (const i of o.matchAll(
    /\\(part|chapter|section|subsection|subsubsection|paragraph|subparagraph)\*?(?:\s*\[[^\]]*])?\s*/g,
  )) {
    const s = i.index + i[0].length;
    const n = St(e, s);
    if (!n) {
      continue;
    }
    const u = dr(n.value);
    if (u) {
      Xe(a, r, {
        kind: "section",
        title: u,
        detail: i[1],
        level: mi[i[1]],
        from: i.index,
        to: n.to,
      });
    }
  }
  for (const i of o.matchAll(/\\begin\s*\{([^{}]+)}/g)) {
    const s = i[1].trim();
    if (!d.has(s)) {
      continue;
    }
    const n = i.index + i[0].length;
    const u = o.slice(n).search(/\S/);
    const l = u === -1 ? -1 : n + u;
    const x = l >= 0 && o[l] === "[" ? St(e, l, "[", "]") : null;
    const h = s.charAt(0).toUpperCase() + s.slice(1);
    const m = x ? `${h}: ${dr(x.value)}` : h;
    Xe(a, r, {
      kind: "theorem",
      title: m,
      detail: s,
      level: 7,
      from: i.index,
      to: (x == null ? undefined : x.to) ?? i.index + i[0].length,
    });
  }
  for (const i of o.matchAll(/\\label\s*\{([^{}]+)}/g)) {
    Xe(a, r, {
      kind: "label",
      title: i[1].trim(),
      level: 8,
      from: i.index,
      to: i.index + i[0].length,
    });
  }
  for (const i of o.matchAll(
    /\\(?:auto|page|eq|name|v|V|c|C)?ref\*?\s*\{([^{}]+)}/g,
  )) {
    Xe(a, r, {
      kind: "reference",
      title: i[1].trim(),
      level: 8,
      from: i.index,
      to: i.index + i[0].length,
    });
  }
  for (const i of o.matchAll(
    /\\(?:text|paren|foot|smart|super)?cite\w*\*?(?:\s*\[[^\]]*]){0,2}\s*\{([^{}]+)}/g,
  )) {
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
  }
  const c = a.sort((i, s) => i.from - s.from);
  const p = Nr(
    e,
    c.map((i) => i.from),
  );
  return c.map((i, s) => ({
    ...i,
    line: p[s],
  }));
};
const bi = (e, r, a) => {
  var d;
  const o = ht(a, r);
  if ((d = e == null ? undefined : e.files) != null) {
    d.filter((c) => c.path !== r && Wr(c)).forEach((c) => {
      o.push(...ht(c.content ?? "", c.path));
    });
  }
  return o;
};
const yi = {
  citation: sa,
  label: ya,
  reference: Fn,
  section: _Component47,
  theorem: Yn,
};
const vi = {
  display: "flex",
  minHeight: 0,
  flexDirection: "column",
};
const ji = {
  alignItems: "center",
  justifyContent: "space-between",
  padding: 1.5,
};
const wi = {
  padding: 1.5,
};
const Ci = {
  minHeight: 0,
  overflowY: "auto",
};
const Si = {
  padding: 3,
};
const Pi = {
  minWidth: 32,
};
const ki = {
  minWidth: 0,
};
const Ti = (e) => ({
  paddingLeft: Math.min(4, 1 + e * 0.35),
});
const Ei = (e) =>
  [e.title, e.detail, e.filePath, e.kind]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
const _Component49 = f.memo(
  ({
    currentFilePath: e,
    currentPosition: r,
    currentSource: a,
    projectContext: o,
    onNavigate: d,
  }) => {
    const [c, p] = f.useState("");
    const i = f.useMemo(() => ht(a, e), [e, a]);
    const s = f.useMemo(() => bi(o, e, ""), [e, o]);
    const n = f.useMemo(() => [...i, ...s], [i, s]);
    const u = c.trim().toLowerCase();
    const l = f.useMemo(() => n.filter((h) => !u || Ei(h).includes(u)), [u, n]);
    const x = f.useMemo(() => {
      var h;
      if (r !== undefined) {
        if (
          (h = n.filter((m) => m.filePath === e && m.from <= r).at(-1)) == null
        ) {
          return undefined;
        } else {
          return h.id;
        }
      }
    }, [e, r, n]);
    return (
      <_Component8 component="nav" aria-label="Document outline" sx={vi}>
        <Et direction="row" sx={ji}>
          <I variant="subtitle2">Outline</I>
          <I variant="caption">
            {n.length} {n.length === 1 ? "item" : "items"}
          </I>
        </Et>
        <Fe />
        <_Component8 sx={wi}>
          <_Component6
            fullWidth={true}
            size="small"
            value={c}
            label="Filter outline"
            onChange={(h) => {
              p(h.target.value);
            }}
          />
        </_Component8>
        <_Component46 dense={true} disablePadding={true} sx={Ci}>
          {l.map((h) => {
            const _Component44 = yi[h.kind];
            return (
              <_Component45
                selected={h.id === x}
                sx={Ti(h.level)}
                onClick={() => {
                  d(h);
                }}
                key={h.id}
              >
                <_Component16 sx={Pi}>
                  <_Component44 size={16} aria-hidden="true" />
                </_Component16>
                <Et sx={ki}>
                  <I variant="body2" noWrap={true}>
                    {h.title}
                  </I>
                  <I variant="caption" color="textSecondary" noWrap={true}>
                    {h.filePath}:{h.line} · {h.kind}
                  </I>
                </Et>
              </_Component45>
            );
          })}
        </_Component46>
        {l.length === 0 && (
          <_Component8 sx={Si}>
            <I variant="body2" color="textSecondary" align="center">
              {n.length === 0
                ? "Add a section, theorem, label, or citation to build the outline."
                : "No outline items match this filter."}
            </I>
          </_Component8>
        )}
      </_Component8>
    );
  },
);
_Component49.displayName = "LatexOutlinePanel";
const _i = 300;
const ur = [];
const Ri = f.memo(function ({
  diagnostics: r,
  draftSource: a,
  fileId: o,
  filePath: d,
  fontSizeRem: c,
  isMainFile: p,
  isSyncing: i = false,
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
  const W = f.useId();
  const B = s !== null;
  const U = s === null ? a : s.status === "ready" ? s.source : "";
  const q = (s == null ? undefined : s.path) ?? d;
  const H = s ? q !== null && q === s.mainFilePath : p;
  const k = s ? `${o ?? "source"}:history:${s.revision ?? "unknown"}` : o;
  const [E, le] = f.useState(false);
  const V = f.useRef(0);
  const [Y, S] = f.useState(() => ({
    fileId: o,
    filePath: q,
    position: 0,
    source: U,
  }));
  const K = f.useCallback(
    (z) => {
      if (!B) {
        T(z);
      }
    },
    [B, T],
  );
  const j = f.useCallback(
    (z) => {
      V.current = z.cursorOffset;
      if (E) {
        S((X) => ({
          ...X,
          position: z.cursorOffset,
        }));
      }
      P(z);
    },
    [E, P],
  );
  f.useEffect(() => {
    if (!E) {
      return;
    }
    const z = window.setTimeout(
      () => {
        S({
          fileId: o,
          filePath: q,
          position: V.current,
          source: U,
        });
      },
      Y.fileId === o ? _i : 0,
    );
    return () => {
      window.clearTimeout(z);
    };
  }, [q, U, o, E, Y.fileId]);
  const D = Y.fileId === o;
  return (
    <_Component8 component="section" sx={Xa}>
      <_Component8 sx={Ir}>
        <_Component8 sx={Wo}>
          <_Component0 aria-hidden={true} />
          <I variant="h6" noWrap={true}>
            {q ?? "Source"}
          </I>
          {H && <_Component27 size="small" color="primary" label="Main" />}
          {s && (
            <_Component27
              size="small"
              color="warning"
              label={`Build r${s.revision ?? "?"}`}
            />
          )}
        </_Component8>
        <_Component8 sx={Ar}>
          <Q
            tooltip={h ?? "Jump from cursor to compiled PDF"}
            aria-label="Synchronize source cursor with PDF"
            disabled={!!h || i || !_}
            onClick={_}
            loading={i}
          >
            <_Component36 />
          </Q>
          {B && M && (
            <Q
              tooltip="Return to current source"
              aria-label="Return to current source"
              onClick={M}
            >
              <_Component41 size={17} />
            </Q>
          )}
          <Q
            tooltip={E ? "Minimize document outline" : "Show document outline"}
            aria-label={
              E ? "Minimize document outline" : "Show document outline"
            }
            aria-controls={W}
            aria-expanded={E}
            color={E ? "primary" : "default"}
            onClick={() => {
              if (!E) {
                S({
                  fileId: o,
                  filePath: q,
                  position: V.current,
                  source: U,
                });
              }
              le((z) => !z);
            }}
          >
            <_Component47 />
          </Q>
        </_Component8>
      </_Component8>
      {u && !B && <_Component48 {...u} currentFileId={o} />}
      <_Component8 sx={ii}>
        {!o && (
          <_Component8 sx={Ne}>
            <I variant="body2" color="textSecondary" align="center">
              Select a text file from the project tree to start editing.
            </I>
          </_Component8>
        )}
        {(s == null ? undefined : s.status) === "loading" && (
          <_Component8 sx={Ne}>
            <Oe size={28} />
            <I variant="body2" color="textSecondary" align="center">
              Loading source for build revision {s.revision ?? "?"}…
            </I>
          </_Component8>
        )}
        {(s == null ? undefined : s.status) === "error" && (
          <_Component8 sx={Ne}>
            <_Component29 severity="error" variant="outlined">
              {s.message}
            </_Component29>
          </_Component8>
        )}
        {(s == null ? undefined : s.status) === "unavailable" && (
          <_Component8 sx={Ne}>
            <_Component29 severity="info" variant="outlined">
              {s.message}
            </_Component29>
          </_Component8>
        )}
        {o && q && (!s || s.status === "ready") && (
          <_Component8 sx={si}>
            <_Component8 sx={li}>
              <Hr
                fileKey={k ?? undefined}
                fileName={q}
                value={U}
                diagnostics={r}
                fontSizeRem={c}
                keybindings={n}
                projectContext={l}
                proposedEdits={B ? ur : x}
                editable={!B}
                enableCommandPalette={!B}
                onChange={K}
                onCompile={B ? undefined : m}
                onCreateEditor={g}
                onLiveDiagnosticsChange={B ? undefined : C}
                onSave={B ? undefined : L}
                onSaveShortcut={B ? undefined : F}
                onStatusChange={j}
              />
            </_Component8>
            {E && (
              <_Component8 id={W} component="aside" sx={fi}>
                <_Component49
                  currentFilePath={q}
                  currentPosition={D ? Y.position : undefined}
                  currentSource={D ? Y.source : ""}
                  projectContext={l}
                  onNavigate={b}
                />
              </_Component8>
            )}
          </_Component8>
        )}
      </_Component8>
    </_Component8>
  );
});
const Ii = "0.75rem";
const Ai = (e) => ({
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
});
const Li = (e) => ({
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
  transition: e.transitions.create(
    ["background-color", "border-color", "box-shadow", "color"],
    {
      duration: e.transitions.duration.shortest,
    },
  ),
});
const $r = (e) => {
  const r = e.previousElementSibling;
  const a = e.nextElementSibling;
  if (!(r instanceof HTMLElement) || !(a instanceof HTMLElement)) {
    throw new Error("The resizable LaTeX panels were not mounted.");
  }
  const o = r.getBoundingClientRect().width;
  const d = a.getBoundingClientRect().width;
  const c = o + d;
  if (!Number.isFinite(c) || c <= 0) {
    throw new Error("The resizable LaTeX panels must have a positive width.");
  }
  return {
    value: d / c,
    pixelsPerValue: c,
  };
};
const Fr = f.memo(function ({ ariaLabel: r, resizeHandleProps: a }) {
  return (
    <_Component8 component="div" {...a} aria-label={r} sx={Ai}>
      <_Component8 aria-hidden={true} data-latex-resize-grip="true" sx={Li}>
        <Mn size={14} />
      </_Component8>
    </_Component8>
  );
});
const Di = f.memo(function ({
  pdfPanelProps: r,
  showPdf: a,
  showSource: o,
  sourcePanelProps: d,
}) {
  const { ratio: c, resizeHandleProps: p } = Er({
    storageKey: Ca,
    defaultRatio: br,
    minRatio: yr,
    maxRatio: va,
    resizeEdge: "left",
    getResizeStartMetrics: $r,
    storedValueErrorMessage:
      "Stored LaTeX PDF panel ratio must be a finite number.",
    readErrorMessage: "Ignoring unreadable LaTeX PDF panel ratio.",
    writeErrorMessage: "Could not save LaTeX PDF panel ratio.",
  });
  const i = o && a;
  return (
    <_Component8
      component="section"
      aria-label="LaTeX document workspace"
      style={_a(i ? 1 - c : 1, i ? c : 1)}
      sx={Va}
    >
      {o && <Ri {...d} />}
      {i && (
        <Fr ariaLabel="Resize source and PDF panes" resizeHandleProps={p} />
      )}
      {a && <_Component50 {...r} isFluid={!o} />}
    </_Component8>
  );
});
const _Component51 = ({ value: e, onChange: r }) => (
  <_Component8 component="nav" aria-label="LaTeX workspace views" sx={Wa}>
    <_Component1
      exclusive={true}
      fullWidth={true}
      size="small"
      value={e}
      onChange={(a, o) => {
        if (o) {
          r(o);
        }
      }}
    >
      <Se value="source">
        <_Component0 size={16} />
        Source
      </Se>
      <Se value="pdf">
        <_Component9 size={16} />
        PDF
      </Se>
      <Se value="chat">
        <_Component10 size={16} />
        Chat
      </Se>
    </_Component1>
  </_Component8>
);
const Rs = f.memo(function ({
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
    storedValueErrorMessage:
      "Stored LaTeX chat panel ratio must be a finite number.",
    readErrorMessage: "Ignoring unreadable LaTeX chat panel ratio.",
    writeErrorMessage: "Could not save LaTeX chat panel ratio.",
  });
  const C = n || i;
  const b = s && !!r;
  const L = !d && C && b;
  return (
    <t.Fragment>
      {d && <_Component51 value={l} onChange={h} />}
      <_Component8 sx={Na}>
        {o && (
          <_Component29 severity="error" variant="outlined">
            Project files could not be loaded. Refresh the page to retry.
          </_Component29>
        )}
        {p && (
          <_Component29
            severity="error"
            variant="outlined"
            action={
              <_Component7 color="inherit" size="small" onClick={x}>
                Retry recovery
              </_Component7>
            }
          >
            Local crash recovery is unavailable: {p.message}
          </_Component29>
        )}
        {(!d || (l !== "problems" && l !== "chat")) && (
          <_Component8 sx={Ot}>
            <_Component8 style={Ea(L ? 1 - m : 1, L ? m : 1)} sx={Ha}>
              {C && (
                <Di
                  pdfPanelProps={c}
                  showPdf={i}
                  showSource={n}
                  sourcePanelProps={u}
                />
              )}
              {!d && b && (
                <t.Fragment>
                  {C && (
                    <Fr
                      ariaLabel="Resize workspace and chat panels"
                      resizeHandleProps={g}
                    />
                  )}
                  <_Component8 sx={Bt(!C)}>{r}</_Component8>
                </t.Fragment>
              )}
            </_Component8>
          </_Component8>
        )}
        {d && l === "chat" && r && (
          <_Component8 sx={Ot}>
            <_Component8 sx={Bt(true)}>{r}</_Component8>
          </_Component8>
        )}
        <To {...a} isFluid={d} />
      </_Component8>
    </t.Fragment>
  );
});
export {
  _Component30 as F,
  fe as L,
  _Component39 as R,
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
