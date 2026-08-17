import {
  r as n,
  am as W,
  ab as A,
  bT as Z,
  F,
  j as i,
  H,
  a8 as V,
  I as G,
  K as Y,
  aD as J,
  a3 as K,
  aV as Q,
  E as C,
  B as T,
  T as z,
  g,
  a6 as ee,
} from "./index-BM3ZINIl.js";
import { M as te, C as re, d as oe } from "./MarkdownHighlights-C-ZhT8z1.js";
import { F as ae } from "./file-code-corner-DV79SyC0.js";
import { D as ne } from "./Divider-BcuihGce.js";
import { I as ie } from "./TextField-D8vc_sXz.js";
function se(e) {
  return n.Children.toArray(e).filter((t) => n.isValidElement(t));
}
function le(e) {
  return A("MuiToggleButton", e);
}
const k = W("MuiToggleButton", [
    "root",
    "disabled",
    "selected",
    "standard",
    "primary",
    "secondary",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
    "fullWidth",
  ]),
  U = n.createContext({}),
  q = n.createContext(void 0);
function ce(e, t) {
  return t === void 0 || e === void 0 ? !1 : Array.isArray(t) ? t.includes(e) : e === t;
}
const de = (e) => {
    const { classes: t, fullWidth: r, selected: o, disabled: a, size: u, color: x } = e,
      b = { root: ["root", o && "selected", a && "disabled", r && "fullWidth", `size${V(u)}`, x] };
    return G(b, le, t);
  },
  ue = Y(J, {
    name: "MuiToggleButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, t[`size${V(r.size)}`]];
    },
  })(
    K(({ theme: e }) => ({
      ...e.typography.button,
      borderRadius: (e.vars || e).shape.borderRadius,
      padding: 11,
      border: `1px solid ${(e.vars || e).palette.divider}`,
      color: (e.vars || e).palette.action.active,
      [`&.${k.disabled}`]: {
        color: (e.vars || e).palette.action.disabled,
        border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`,
      },
      "&:hover": {
        textDecoration: "none",
        backgroundColor: e.alpha(
          (e.vars || e).palette.text.primary,
          (e.vars || e).palette.action.hoverOpacity,
        ),
        "@media (hover: none)": { backgroundColor: "transparent" },
      },
      variants: [
        {
          props: { color: "standard" },
          style: {
            [`&.${k.selected}`]: {
              color: (e.vars || e).palette.text.primary,
              backgroundColor: e.alpha(
                (e.vars || e).palette.text.primary,
                (e.vars || e).palette.action.selectedOpacity,
              ),
              "&:hover": {
                backgroundColor: e.alpha(
                  (e.vars || e).palette.text.primary,
                  `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`,
                ),
                "@media (hover: none)": {
                  backgroundColor: e.alpha(
                    (e.vars || e).palette.text.primary,
                    (e.vars || e).palette.action.selectedOpacity,
                  ),
                },
              },
            },
          },
        },
        ...Object.entries(e.palette)
          .filter(Q())
          .map(([t]) => ({
            props: { color: t },
            style: {
              [`&.${k.selected}`]: {
                color: (e.vars || e).palette[t].main,
                backgroundColor: e.alpha(
                  (e.vars || e).palette[t].main,
                  (e.vars || e).palette.action.selectedOpacity,
                ),
                "&:hover": {
                  backgroundColor: e.alpha(
                    (e.vars || e).palette[t].main,
                    `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`,
                  ),
                  "@media (hover: none)": {
                    backgroundColor: e.alpha(
                      (e.vars || e).palette[t].main,
                      (e.vars || e).palette.action.selectedOpacity,
                    ),
                  },
                },
              },
            },
          })),
        { props: { fullWidth: !0 }, style: { width: "100%" } },
        { props: { size: "small" }, style: { padding: 7, fontSize: e.typography.pxToRem(13) } },
        { props: { size: "large" }, style: { padding: 15, fontSize: e.typography.pxToRem(15) } },
      ],
    })),
  ),
  Qe = n.forwardRef(function (t, r) {
    const { value: o, ...a } = n.useContext(U),
      u = n.useContext(q),
      x = Z({ ...a, selected: ce(t.value, o) }, t),
      b = F({ props: x, name: "MuiToggleButton" }),
      {
        children: v,
        className: s,
        color: m = "standard",
        disabled: y = !1,
        disableFocusRipple: R = !1,
        fullWidth: p = !1,
        onChange: B,
        onClick: w,
        selected: d,
        size: h = "medium",
        value: E,
        ...M
      } = b,
      S = { ...b, color: m, disabled: y, disableFocusRipple: R, fullWidth: p, size: h },
      I = de(S),
      $ = (f) => {
        (w && (w(f, E), f.defaultPrevented)) || (B && B(f, E));
      },
      l = u || "";
    return i.jsx(ue, {
      className: H(a.className, I.root, s, l),
      internalNativeButton: !0,
      disabled: y,
      focusRipple: !R,
      ref: r,
      onClick: $,
      onChange: B,
      value: E,
      ownerState: S,
      "aria-pressed": d,
      ...M,
      children: v,
    });
  });
function pe(e) {
  return A("MuiToggleButtonGroup", e);
}
const c = W("MuiToggleButtonGroup", [
    "root",
    "selected",
    "horizontal",
    "vertical",
    "disabled",
    "grouped",
    "fullWidth",
    "firstButton",
    "lastButton",
    "middleButton",
  ]),
  fe = (e) => {
    const { classes: t, orientation: r, fullWidth: o, disabled: a } = e;
    return G(
      {
        root: ["root", r, o && "fullWidth"],
        grouped: ["grouped", a && "disabled"],
        firstButton: ["firstButton"],
        lastButton: ["lastButton"],
        middleButton: ["middleButton"],
      },
      pe,
      t,
    );
  },
  ge = Y("div", {
    name: "MuiToggleButtonGroup",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        { [`& .${c.grouped}`]: t.grouped },
        { [`& .${c.firstButton}`]: t.firstButton },
        { [`& .${c.lastButton}`]: t.lastButton },
        { [`& .${c.middleButton}`]: t.middleButton },
        t.root,
        r.orientation === "vertical" && t.vertical,
        r.fullWidth && t.fullWidth,
      ];
    },
  })(
    K(({ theme: e }) => ({
      display: "inline-flex",
      borderRadius: (e.vars || e).shape.borderRadius,
      variants: [
        {
          props: { orientation: "vertical" },
          style: {
            flexDirection: "column",
            [`& .${c.grouped}`]: {
              [`&.${c.selected} + .${c.grouped}.${c.selected}`]: { borderTop: 0, marginTop: 0 },
            },
            [`& .${c.firstButton},& .${c.middleButton}`]: {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            },
            [`& .${c.lastButton},& .${c.middleButton}`]: {
              marginTop: -1,
              borderTop: "1px solid transparent",
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            },
            [`& .${c.lastButton}.${k.disabled},& .${c.middleButton}.${k.disabled}`]: {
              borderTop: "1px solid transparent",
            },
          },
        },
        { props: { fullWidth: !0 }, style: { width: "100%" } },
        {
          props: { orientation: "horizontal" },
          style: {
            [`& .${c.grouped}`]: {
              [`&.${c.selected} + .${c.grouped}.${c.selected}`]: { borderLeft: 0, marginLeft: 0 },
            },
            [`& .${c.firstButton},& .${c.middleButton}`]: {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
            [`& .${c.lastButton},& .${c.middleButton}`]: {
              marginLeft: -1,
              borderLeft: "1px solid transparent",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
            [`& .${c.lastButton}.${k.disabled},& .${c.middleButton}.${k.disabled}`]: {
              borderLeft: "1px solid transparent",
            },
          },
        },
      ],
    })),
  ),
  et = n.forwardRef(function (t, r) {
    const o = F({ props: t, name: "MuiToggleButtonGroup" }),
      {
        children: a,
        className: u,
        color: x = "standard",
        disabled: b = !1,
        exclusive: v = !1,
        fullWidth: s = !1,
        onChange: m,
        orientation: y = "horizontal",
        size: R = "medium",
        value: p,
        ...B
      } = o,
      w = { ...o, disabled: b, fullWidth: s, orientation: y, size: R },
      d = fe(w),
      h = n.useCallback(
        (l, f) => {
          if (!m) return;
          const D = p && p.indexOf(f);
          let _;
          (p && D >= 0 ? ((_ = p.slice()), _.splice(D, 1)) : (_ = p ? p.concat(f) : [f]), m(l, _));
        },
        [m, p],
      ),
      E = n.useCallback(
        (l, f) => {
          m && m(l, p === f ? null : f);
        },
        [m, p],
      ),
      M = n.useMemo(
        () => ({
          className: d.grouped,
          onChange: v ? E : h,
          value: p,
          size: R,
          fullWidth: s,
          color: x,
          disabled: b,
        }),
        [d.grouped, v, E, h, p, R, s, x, b],
      ),
      S = se(a),
      I = S.length,
      $ = (l) => {
        const f = l === 0,
          D = l === I - 1;
        return f && D ? "" : f ? d.firstButton : D ? d.lastButton : d.middleButton;
      };
    return i.jsx(ge, {
      role: "group",
      className: H(d.root, u),
      ref: r,
      ownerState: w,
      ...B,
      children: i.jsx(U.Provider, {
        value: M,
        children: S.map((l, f) => i.jsx(q.Provider, { value: $(f), children: l }, f)),
      }),
    });
  });
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xe = [
    ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
    ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
    ["path", { d: "M10 12h4", key: "a56b0p" }],
  ],
  tt = C("archive", xe);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const be = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  rt = C("circle-alert", be);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const me = [
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
    ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
    ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
  ],
  ot = C("ellipsis", me);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ye = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6",
      },
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ],
  he = C("file", ye);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ve = [
    [
      "path",
      {
        d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",
        key: "fm4g5t",
      },
    ],
    ["path", { d: "M2 13h10", key: "pgb2dq" }],
    ["path", { d: "m9 16 3-3-3-3", key: "6m91ic" }],
  ],
  at = C("folder-input", ve);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Re = [
    [
      "path",
      {
        d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
        key: "usdka0",
      },
    ],
  ],
  nt = C("folder-open", Re);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ce = [
    ["path", { d: "M12 10v6", key: "1bos4e" }],
    ["path", { d: "M9 13h6", key: "1uhe8q" }],
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
        key: "1kt360",
      },
    ],
  ],
  it = C("folder-plus", Ce);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const we = [
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
        key: "1kt360",
      },
    ],
  ],
  Be = C("folder", we);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ee = [
    [
      "path",
      { d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4", key: "re6nr2" },
    ],
    ["path", { d: "M2 6h4", key: "aawbzj" }],
    ["path", { d: "M2 10h4", key: "l0bgd4" }],
    ["path", { d: "M2 14h4", key: "1gsvsf" }],
    ["path", { d: "M2 18h4", key: "1bu2t1" }],
    [
      "path",
      {
        d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
        key: "pqwjuv",
      },
    ],
  ],
  Se = C("notebook-pen", Ee);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ke = [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
  ],
  st = C("trash-2", ke),
  lt = (e, t, r) => {
    let o = null,
      a = !1;
    const u = window.setTimeout(() => {
      if (!a) {
        if (typeof window.requestIdleCallback == "function") {
          o = window.requestIdleCallback(
            () => {
              ((o = null), a || e());
            },
            { timeout: r },
          );
          return;
        }
        e();
      }
    }, t);
    return () => {
      ((a = !0), window.clearTimeout(u), o !== null && (window.cancelIdleCallback(o), (o = null)));
    };
  },
  ct = {
    p: 0,
    "& .MuiMenuItem-root": { gap: 0.9 },
    "& .MuiListItemIcon-root": { minWidth: "auto", color: "inherit", mr: 0.5 },
  },
  dt = (e) => ({ color: e.palette.error.main, "& .MuiListItemIcon-root": { minWidth: "auto" } }),
  ut = (e) => ({ zIndex: e.zIndex.drawer + 2 }),
  pt = { width: "min(17.5rem, calc(100vw - 2rem))", mt: 1, ml: 1, p: 1 },
  ft = { mt: 0, ml: 0 },
  Te = (e) => ({
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    gap: e.spacing(0.85),
    padding: e.spacing(0.55, 0.75, 0.7),
  }),
  Me = (e) => ({
    width: "1.8rem",
    height: "1.8rem",
    flex: "0 0 1.8rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: e.palette.primary.main,
    backgroundColor: g(e.palette.primary.main, 0.09),
    border: `1px solid ${g(e.palette.primary.main, 0.13)}`,
    borderRadius: e.shape.radiusSmPx,
  }),
  Ie = { minWidth: 0, flex: 1 },
  $e = { marginBottom: 0.55 },
  gt = ({ kind: e, title: t }) =>
    i.jsxs(i.Fragment, {
      children: [
        i.jsxs(T, {
          sx: Te,
          children: [
            i.jsxs(T, {
              "aria-hidden": "true",
              sx: Me,
              children: [
                e === "chat" && i.jsx(te, { size: 16 }),
                e === "file" && i.jsx(he, { size: 16 }),
                e === "folder" && i.jsx(Be, { size: 16 }),
                e === "latex-project" && i.jsx(ae, { size: 16 }),
                e === "notebook" && i.jsx(Se, { size: 16 }),
              ],
            }),
            i.jsxs(T, {
              sx: Ie,
              children: [
                i.jsxs(z, {
                  variant: "caption",
                  color: "textSecondary",
                  children: [
                    e === "chat" && "Chat actions",
                    e === "file" && "File actions",
                    e === "folder" && "Folder actions",
                    e === "latex-project" && "Project actions",
                    e === "notebook" && "Notebook actions",
                  ],
                }),
                i.jsx(z, {
                  title: t,
                  variant: "subtitle2",
                  color: "textPrimary",
                  noWrap: !0,
                  children: t,
                }),
              ],
            }),
          ],
        }),
        i.jsx(ne, { sx: $e }),
      ],
    }),
  De = '[data-sidebar-row-action-trigger="true"]',
  xt = (e, t, r) => {
    (e.preventDefault(), e.stopPropagation());
    const o = e.currentTarget.querySelector(De);
    if (!o) throw new Error(`Sidebar actions are missing for ${t}.`);
    o.disabled || (r({ left: e.clientX + 8, top: e.clientY + 8 }), o.click());
  },
  bt = (e, t) => {
    const r = e.target;
    if (!(r instanceof Element) || !r.closest(".MuiBackdrop-root")) return;
    (e.preventDefault(), e.stopPropagation());
    const o = e.currentTarget,
      a = o.style.display;
    let u = null;
    try {
      ((o.style.display = "none"), (u = document.elementFromPoint(e.clientX, e.clientY)));
    } finally {
      o.style.display = a;
    }
    (t(),
      u == null ||
        u.dispatchEvent(
          new window.MouseEvent("contextmenu", {
            bubbles: !0,
            cancelable: !0,
            button: 2,
            buttons: 2,
            clientX: e.clientX,
            clientY: e.clientY,
            ctrlKey: e.ctrlKey,
            altKey: e.altKey,
            shiftKey: e.shiftKey,
            metaKey: e.metaKey,
          }),
        ));
  },
  _e = "var(--sidebar-explorer-row-min-height, 2.25rem)",
  mt = "0.85rem",
  yt = "0.80rem",
  L = (e, t) => g(t ? e.palette.primary.main : e.palette.text.primary, t ? 0.72 : 0.55),
  ht =
    ({ hasUnread: e = !1, isContextMenuOpen: t, isInActivePath: r = !1, isSelected: o }) =>
    (a) => {
      const u = o
          ? g(a.palette.primary.main, 0.12)
          : r
            ? g(a.palette.primary.main, 0.04)
            : e
              ? g(a.palette.info.main, 0.07)
              : "transparent",
        x = o
          ? g(a.palette.primary.main, 0.16)
          : e
            ? g(a.palette.info.main, 0.1)
            : g(a.palette.text.primary, 0.055);
      return {
        width: "100%",
        minWidth: 0,
        minHeight: _e,
        padding: a.spacing(0.15, 0.45),
        border: `1px solid ${t ? g(a.palette.primary.main, 0.56) : o ? g(a.palette.primary.main, 0.22) : r ? g(a.palette.primary.main, 0.16) : "transparent"}`,
        borderRadius: a.shape.radiusSmPx,
        position: "relative",
        overflow: "hidden",
        backgroundColor: !o && t ? g(a.palette.primary.main, 0.09) : u,
        boxShadow: t ? `inset 3px 0 0 ${a.palette.primary.main}` : "none",
        transition: a.transitions.create(["background-color", "border-color", "box-shadow"], {
          duration: a.transitions.duration.shortest,
        }),
        "&.Mui-selected": { backgroundColor: u },
        "&.Mui-selected:hover, &:hover": {
          borderColor: o ? g(a.palette.primary.main, 0.28) : g(a.palette.primary.main, 0.12),
          backgroundColor: x,
        },
        "&:focus-visible": {
          outline: `2px solid ${g(a.palette.primary.main, 0.3)}`,
          outlineOffset: -1,
        },
      };
    },
  vt = (e) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "calc(100% - var(--sidebar-explorer-tree-guide-offset))",
    minWidth: 0,
    marginLeft: "var(--sidebar-explorer-tree-guide-offset)",
    paddingLeft: "var(--sidebar-explorer-tree-guide-span)",
    "& > *": { position: "relative" },
    "& > *::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: "calc(-1 * var(--sidebar-explorer-tree-guide-span))",
      borderLeft: `1.5px solid ${L(e, !1)}`,
    },
    "& > *::after": {
      content: '""',
      position: "absolute",
      top: "calc(var(--sidebar-explorer-row-min-height) / 2)",
      left: "calc(-1 * var(--sidebar-explorer-tree-guide-span))",
      width: "var(--sidebar-explorer-tree-guide-span)",
      borderTop: `1.5px solid ${L(e, !1)}`,
    },
    "& > *:last-child::before": {
      bottom: "auto",
      height: "calc(var(--sidebar-explorer-row-min-height) / 2)",
    },
    '& > [data-active-explorer-path="true"]::before, & > [data-active-explorer-path="true"]::after, & > *:has([data-active-explorer-path="true"])::before, & > *:has([data-active-explorer-path="true"])::after, & > *:has(~ [data-active-explorer-path="true"])::before, & > *:has(~ * [data-active-explorer-path="true"])::before':
      { borderColor: L(e, !0) },
  }),
  Rt = {
    position: "absolute",
    top: "50%",
    right: "0.5rem",
    transform: "translateY(-50%)",
    display: "flex",
    alignItems: "center",
  },
  Ct = (e) => ({
    width: "var(--sidebar-explorer-action-size, 1.75rem)",
    minWidth: "var(--sidebar-explorer-action-size, 1.75rem)",
    height: "var(--sidebar-explorer-action-size, 1.75rem)",
    flex: "0 0 var(--sidebar-explorer-action-size, 1.75rem)",
    padding: e.spacing(0.25),
    border: `1px solid ${g(e.palette.text.primary, 0.08)}`,
    borderRadius: "50%",
    color: e.palette.text.primary,
    backgroundColor: e.palette.common.white,
    transition: e.transitions.create(["border-color", "color"], {
      duration: e.transitions.duration.shortest,
    }),
    "&:hover": {
      color: e.palette.primary.main,
      borderColor: g(e.palette.primary.main, 0.2),
      backgroundColor: e.palette.common.white,
    },
    "&.Mui-focusVisible": { backgroundColor: e.palette.common.white },
  }),
  X = n.createContext({ density: "comfortable", showLastEdited: !0 }),
  wt = ({ children: e, density: t, showLastEdited: r }) => {
    const o = n.useMemo(() => ({ density: t, showLastEdited: r }), [t, r]);
    return i.jsx(X.Provider, { value: o, children: e });
  },
  N = () => n.useContext(X),
  Le = ["compact", "comfortable", "large"],
  O = {
    compact: {
      actionSize: "1.75rem",
      dateVariant: "sidebarExplorerDateCompact",
      iconSize: 16,
      labelVariant: "sidebarExplorerLabelCompact",
      markerIconSize: 14,
      rowMinHeight: "2.65rem",
      virtualRowHeight: 44,
    },
    comfortable: {
      actionSize: "1.9rem",
      dateVariant: "sidebarExplorerDateComfortable",
      iconSize: 18,
      labelVariant: "sidebarExplorerLabelComfortable",
      markerIconSize: 16,
      rowMinHeight: "2.8rem",
      virtualRowHeight: 47,
    },
    large: {
      actionSize: "2rem",
      dateVariant: "sidebarExplorerDateLarge",
      iconSize: 19,
      labelVariant: "sidebarExplorerLabelLarge",
      markerIconSize: 17,
      rowMinHeight: "3rem",
      virtualRowHeight: 50,
    },
  },
  Bt = (e) => {
    if (Le.includes(e)) return e;
    throw new Error(`Unsupported sidebar explorer density '${e}'.`);
  },
  ze = 1440 * 60 * 1e3,
  je = (e) => {
    const t = new Date(e);
    if (Number.isNaN(t.getTime())) throw new Error(`Invalid sidebar explorer date '${e}'.`);
    return t;
  },
  Pe = (e, t) => {
    const r = new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime(),
      o = new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime(),
      a = Math.round((r - o) / ze);
    return a === 0
      ? new Intl.DateTimeFormat(void 0, { timeStyle: "short" }).format(e)
      : a === 1
        ? "Yesterday"
        : new Intl.DateTimeFormat(void 0, {
            month: "short",
            day: "numeric",
            ...(e.getFullYear() === t.getFullYear() ? {} : { year: "numeric" }),
          }).format(e);
  },
  Ne = ({ timestamp: e }) => {
    const { density: t, showLastEdited: r } = N();
    if (!r) return null;
    const o = je(e),
      a = new Intl.DateTimeFormat(void 0, { dateStyle: "medium", timeStyle: "short" }).format(o);
    return i.jsx(ee, {
      title: `Last edited ${a}`,
      children: i.jsx(z, {
        variant: O[t].dateVariant,
        color: "textSecondary",
        align: "left",
        noWrap: !0,
        children: Pe(o, new Date()),
      }),
    });
  },
  Oe = 500,
  We = (e) => ({
    width: "fit-content",
    minWidth: 0,
    maxWidth: "100%",
    overflow: "hidden",
    cursor: e ? "text" : "inherit",
  }),
  Ae = (e, t) => (r) => ({
    width: t ? "fit-content" : "100%",
    minWidth: 0,
    maxWidth: "100%",
    color: r.palette.text.primary,
    backgroundColor: r.palette.background.paper,
    border: `1px solid ${r.palette.primary.main}`,
    borderRadius: r.shape.radiusSmPx,
    boxShadow: `0 0 0 2px ${g(r.palette.primary.main, 0.14)}`,
    "& .MuiInputBase-input": {
      ...r.typography[e],
      width: t ? "auto" : "100%",
      minWidth: t ? "1ch" : 0,
      maxWidth: "100%",
      height: "auto",
      boxSizing: "border-box",
      padding: r.spacing(0, 0.35),
      ...(t && { fieldSizing: "content" }),
    },
  }),
  Fe = ({ children: e, isEnabled: t, onClick: r, onDoubleClick: o }) =>
    i.jsx(T, {
      "data-inline-rename-trigger": "true",
      sx: We(t),
      onClick: r,
      onDoubleClick: o,
      children: e,
    }),
  He = ({
    ariaLabel: e,
    isContentSized: t = !1,
    isPending: r,
    maxLength: o,
    typographyVariant: a,
    value: u,
    onCancel: x,
    onChange: b,
    onSubmit: v,
  }) =>
    i.jsx(ie, {
      autoFocus: !0,
      disabled: r,
      fullWidth: !t,
      value: u,
      slotProps: {
        input: { "aria-label": e, maxLength: o, size: t ? Math.max(1, u.length) : void 0 },
      },
      sx: Ae(a, t),
      onBlur: () => {
        v();
      },
      onChange: (s) => {
        b(s.target.value);
      },
      onClick: (s) => {
        s.stopPropagation();
      },
      onFocus: (s) => {
        s.currentTarget.select();
      },
      onKeyDown: (s) => {
        (s.stopPropagation(),
          !s.nativeEvent.isComposing &&
            (s.key === "Enter" && (s.preventDefault(), v()),
            s.key === "Escape" && (s.preventDefault(), x())));
      },
      onMouseDown: (s) => {
        s.stopPropagation();
      },
    }),
  Ve = ({
    isLabelActive: e,
    isPending: t,
    isSingleClickRenameEnabled: r,
    value: o,
    onRename: a,
  }) => {
    const [u, x] = n.useState(!1),
      [b, v] = n.useState(o),
      s = n.useRef(null),
      m = n.useRef(null),
      y = n.useRef(!1),
      R = n.useRef(e),
      p = n.useRef(t),
      B = n.useRef(r),
      w = n.useRef(o);
    ((R.current = e), (p.current = t), (B.current = r), (w.current = o));
    const d = n.useCallback(() => {
        (s.current !== null && (clearTimeout(s.current), (s.current = null)),
          m.current &&
            (document.removeEventListener("pointerdown", m.current, !0), (m.current = null)));
      }, []),
      h = n.useCallback(() => {
        (d(), !p.current && (v(w.current), (y.current = !0), x(!0)));
      }, [d]),
      E = n.useCallback(() => {
        (d(), (y.current = !1), v(w.current), x(!1));
      }, [d]),
      M = n.useCallback(async () => {
        if ((d(), !!y.current)) {
          y.current = !1;
          try {
            if ((await a(b)) === !1) {
              y.current = !0;
              return;
            }
            x(!1);
          } catch (l) {
            throw ((y.current = !0), l);
          }
        }
      }, [d, a, b]),
      S = n.useCallback(
        (l) => {
          if (
            !R.current ||
            p.current ||
            y.current ||
            !B.current ||
            (l.preventDefault(), l.stopPropagation(), d(), l.detail > 1)
          )
            return;
          s.current = setTimeout(() => {
            ((s.current = null), h());
          }, Oe);
          const f = () => {
            d();
          };
          ((m.current = f), document.addEventListener("pointerdown", f, { capture: !0, once: !0 }));
        },
        [h, d],
      ),
      I = n.useCallback(
        (l) => {
          (d(),
            !(!R.current || p.current || y.current) &&
              (l.preventDefault(), l.stopPropagation(), h()));
        },
        [h, d],
      ),
      $ = n.useCallback(
        (l) =>
          l.key !== "F2" || p.current ? !1 : (l.preventDefault(), l.stopPropagation(), h(), !0),
        [h],
      );
    return (
      n.useEffect(() => d, [d]),
      {
        beginRename: h,
        cancelRename: E,
        handleLabelClick: S,
        handleLabelDoubleClick: I,
        handleRenameKeyDown: $,
        isRenaming: u,
        renameDraft: b,
        setRenameDraft: v,
        submitRename: M,
      }
    );
  },
  Et = Fe,
  St = (e) => {
    const { density: t } = N(),
      r = O[t].labelVariant;
    return i.jsx(He, { ...e, typographyVariant: r });
  },
  kt = Ve,
  j = { enter: "cubic-bezier(0.22, 1, 0.36, 1)", exit: "cubic-bezier(0.4, 0, 1, 1)" },
  P = { enter: 320, exit: 280 },
  Tt = { enter: 300, exit: 240 },
  Ge = (e) => (t) => ({
    transform: e ? "rotate(90deg)" : "rotate(0deg)",
    transition: t.transitions.create("transform", {
      duration: e ? P.enter : P.exit,
      easing: e ? j.enter : j.exit,
    }),
    "@media (prefers-reduced-motion: reduce)": { transition: "none" },
  }),
  Mt = ({ isExpanded: e, size: t }) =>
    i.jsx(T, { component: re, "aria-hidden": "true", size: t, sx: Ge(e) }),
  It = ({ children: e, isExpanded: t, sx: r }) =>
    i.jsx(oe, { in: t, timeout: P, easing: j, sx: r, children: e }),
  Ye = (e) => ({
    maxWidth: "100%",
    minWidth: 0,
    display: "flex",
    alignItems: "baseline",
    gap: e.spacing(1.25),
    overflow: "hidden",
  }),
  $t = ({ detail: e, timestamp: t }) => {
    const { density: r } = N();
    return i.jsxs(T, {
      sx: Ye,
      children: [
        i.jsx(Ne, { timestamp: t }),
        i.jsx(z, { variant: O[r].dateVariant, color: "textSecondary", noWrap: !0, children: e }),
      ],
    });
  },
  Ke = (e, t, r, o) => (a) => ({
    position: "absolute",
    zIndex: 0,
    top: "calc(var(--sidebar-explorer-row-min-height) / 2)",
    left: "var(--sidebar-explorer-tree-guide-offset)",
    height: `calc(var(--sidebar-explorer-row-min-height) / 2 + ${e} + ${t})`,
    borderLeft: `1.5px solid ${L(a, o)}`,
    opacity: r ? 1 : 0,
    pointerEvents: "none",
    transition: r
      ? "none"
      : a.transitions.create("opacity", { duration: a.transitions.duration.shortest }),
    "@media (prefers-reduced-motion: reduce)": { transition: "none" },
  }),
  Dt = ({ endExtension: e = "0px", gap: t, isExpanded: r, isInActivePath: o }) =>
    i.jsx(T, { "aria-hidden": "true", sx: Ke(t, e, r, o) });
export {
  tt as A,
  vt as B,
  Ve as C,
  Bt as D,
  St as E,
  nt as F,
  rt as G,
  se as H,
  He as I,
  lt as J,
  _e as K,
  L,
  j as M,
  Se as N,
  Tt as O,
  yt as P,
  mt as Q,
  Le as R,
  gt as S,
  et as T,
  wt as U,
  P as V,
  Qe as a,
  Ct as b,
  ft as c,
  ct as d,
  pt as e,
  ut as f,
  at as g,
  it as h,
  dt as i,
  st as j,
  bt as k,
  kt as l,
  O as m,
  Et as n,
  $t as o,
  Mt as p,
  xt as q,
  Dt as r,
  Rt as s,
  It as t,
  N as u,
  ht as v,
  Be as w,
  he as x,
  Ne as y,
  ot as z,
};
