import {
  ab as Bt,
  am as Ct,
  r as Y,
  F as Et,
  c7 as r1,
  aL as a1,
  aw as fn,
  c8 as n1,
  aJ as pn,
  G as ae,
  H as Me,
  j as l0,
  I as Dt,
  K as V0,
  a3 as It,
  aM as qe,
  aN as ha,
  c9 as i1,
  bP as s1,
  a8 as vn,
  aD as gn,
  A as bn,
  aH as l1,
  aP as yn,
  ca as wt,
  a_ as _t,
  bQ as o1,
  bR as u1,
  b7 as c1,
  a$ as h1,
  E as at,
  a6 as m1,
  B as d1,
  g as G0,
} from "./index-BM3ZINIl.js";
import { d as xn, o as wn } from "./TextField-D8vc_sXz.js";
import {
  f as f1,
  p as ma,
  a as da,
  n as fa,
  h as p1,
  s as v1,
  c as g1,
  v as b1,
  S as y1,
} from "./index-Yb6ONXKu.js";
function x1(r) {
  return Bt("MuiCollapse", r);
}
Ct("MuiCollapse", [
  "root",
  "horizontal",
  "vertical",
  "entered",
  "hidden",
  "wrapper",
  "wrapperInner",
]);
const w1 = (r) => {
    const { orientation: e, classes: t } = r;
    return Dt(
      {
        root: ["root", e],
        entered: ["entered"],
        hidden: ["hidden"],
        wrapper: ["wrapper", e],
        wrapperInner: ["wrapperInner", e],
      },
      x1,
      t,
    );
  },
  S1 = V0("div", {
    name: "MuiCollapse",
    slot: "Root",
    overridesResolver: (r, e) => {
      const { ownerState: t } = r;
      return [
        e.root,
        e[t.orientation],
        t.state === "entered" && e.entered,
        t.state === "exited" && !t.in && t.collapsedSize === "0px" && e.hidden,
      ];
    },
  })(
    It(({ theme: r }) => ({
      height: 0,
      overflow: "hidden",
      transition: r.transitions.create("height"),
      variants: [
        {
          props: { orientation: "horizontal" },
          style: { height: "auto", width: 0, transition: r.transitions.create("width") },
        },
        { props: { state: "entered" }, style: { height: "auto", overflow: "visible" } },
        { props: { state: "entered", orientation: "horizontal" }, style: { width: "auto" } },
        {
          props: ({ ownerState: e }) => e.state === "exited" && !e.in && e.collapsedSize === "0px",
          style: { visibility: "hidden" },
        },
      ],
    })),
  ),
  k1 = V0("div", { name: "MuiCollapse", slot: "Wrapper" })({
    display: "flex",
    width: "100%",
    variants: [{ props: { orientation: "horizontal" }, style: { width: "auto", height: "100%" } }],
  }),
  T1 = V0("div", { name: "MuiCollapse", slot: "WrapperInner" })({
    width: "100%",
    variants: [{ props: { orientation: "horizontal" }, style: { width: "auto", height: "100%" } }],
  }),
  pa = Y.forwardRef(function (e, t) {
    const a = Et({ props: e, name: "MuiCollapse" }),
      {
        addEndListener: n,
        children: i,
        className: l,
        collapsedSize: u = "0px",
        component: c,
        easing: d,
        in: f,
        onEnter: g,
        onEntered: y,
        onEntering: x,
        onExit: w,
        onExited: T,
        onExiting: B,
        orientation: C = "vertical",
        slots: N = {},
        slotProps: q = {},
        style: O,
        timeout: $ = r1.standard,
        TransitionComponent: P = a1,
        ...U
      } = a,
      X = { ...a, orientation: C, collapsedSize: u },
      G = w1(X),
      J = fn(),
      Z = n1(),
      V = Y.useRef(null),
      x0 = Y.useRef(),
      t0 = typeof u == "number" ? `${u}px` : u,
      c0 = C === "horizontal",
      d0 = c0 ? "width" : "height",
      a0 = Y.useRef(null),
      w0 = pn(t, a0),
      J0 = () => (V.current ? V.current[c0 ? "clientWidth" : "clientHeight"] : 0),
      L0 = qe(a0, (K, O0) => {
        (V.current && c0 && (V.current.style.position = "absolute"),
          (K.style[d0] = t0),
          g && g(K, O0));
      }),
      C0 = qe(a0, (K, O0) => {
        const D0 = J0();
        V.current && c0 && (V.current.style.position = "");
        const { duration: m0, easing: k0 } = ha(
          { style: O, timeout: $, easing: d },
          { mode: "enter" },
        );
        if ($ === "auto") {
          const F0 = J.transitions.getAutoHeightDuration(D0);
          ((K.style.transitionDuration = `${F0}ms`), (x0.current = F0));
        } else K.style.transitionDuration = typeof m0 == "string" ? m0 : `${m0}ms`;
        ((K.style[d0] = `${D0}px`), (K.style.transitionTimingFunction = k0), x && x(K, O0));
      }),
      Q0 = qe(a0, (K, O0) => {
        ((K.style[d0] = "auto"), y && y(K, O0));
      }),
      h0 = qe(a0, (K) => {
        ((K.style[d0] = `${J0()}px`), w && w(K));
      }),
      _0 = qe(a0, T),
      ye = qe(a0, (K) => {
        const O0 = J0(),
          { duration: D0, easing: m0 } = ha({ style: O, timeout: $, easing: d }, { mode: "exit" });
        if ($ === "auto") {
          const k0 = J.transitions.getAutoHeightDuration(O0);
          ((K.style.transitionDuration = `${k0}ms`), (x0.current = k0));
        } else K.style.transitionDuration = typeof D0 == "string" ? D0 : `${D0}ms`;
        ((K.style[d0] = t0), (K.style.transitionTimingFunction = m0), B && B(K));
      }),
      Ve = (K) => {
        ($ === "auto" && Z.start(x0.current || 0, K), n && n(a0.current, K));
      },
      E0 = { slots: N, slotProps: q, component: c },
      [Ce, H0] = ae("root", {
        ref: w0,
        className: Me(G.root, l),
        elementType: S1,
        externalForwardedProps: E0,
        ownerState: X,
        additionalProps: { style: { [c0 ? "minWidth" : "minHeight"]: t0, ...O } },
      }),
      [Ee, De] = ae("wrapper", {
        ref: V,
        className: G.wrapper,
        elementType: k1,
        externalForwardedProps: E0,
        ownerState: X,
      }),
      [Ie, ee] = ae("wrapperInner", {
        className: G.wrapperInner,
        elementType: T1,
        externalForwardedProps: E0,
        ownerState: X,
      });
    return l0.jsx(P, {
      in: f,
      onEnter: L0,
      onEntered: Q0,
      onEntering: C0,
      onExit: h0,
      onExited: _0,
      onExiting: ye,
      addEndListener: Ve,
      nodeRef: a0,
      timeout: $ === "auto" ? null : $,
      ...U,
      children: (K, { ownerState: O0, ...D0 }) => {
        const m0 = { ...X, state: K };
        return l0.jsx(Ce, {
          ...H0,
          className: Me(
            H0.className,
            { entered: G.entered, exited: !f && t0 === "0px" && G.hidden }[K],
          ),
          ownerState: m0,
          ...D0,
          children: l0.jsx(Ee, {
            ...De,
            ownerState: m0,
            children: l0.jsx(Ie, { ...ee, ownerState: m0, children: i }),
          }),
        });
      },
    });
  });
pa && (pa.muiSupportAuto = !0);
function A1(r) {
  return Bt("MuiTab", r);
}
const W0 = Ct("MuiTab", [
    "root",
    "labelIcon",
    "textColorInherit",
    "textColorPrimary",
    "textColorSecondary",
    "selected",
    "disabled",
    "fullWidth",
    "wrapped",
    "icon",
  ]),
  M1 = (r) => {
    const {
        classes: e,
        textColor: t,
        fullWidth: a,
        wrapped: n,
        icon: i,
        label: l,
        selected: u,
        disabled: c,
      } = r,
      d = {
        root: [
          "root",
          i && l && "labelIcon",
          `textColor${vn(t)}`,
          a && "fullWidth",
          n && "wrapped",
          u && "selected",
          c && "disabled",
        ],
        icon: ["icon"],
      };
    return Dt(d, A1, e);
  },
  z1 = V0(gn, {
    name: "MuiTab",
    slot: "Root",
    overridesResolver: (r, e) => {
      const { ownerState: t } = r;
      return [
        e.root,
        t.label && t.icon && e.labelIcon,
        e[`textColor${vn(t.textColor)}`],
        t.fullWidth && e.fullWidth,
        t.wrapped && e.wrapped,
        { [`& .${W0.icon}`]: e.icon },
      ];
    },
  })(
    It(({ theme: r }) => ({
      ...r.typography.button,
      maxWidth: 360,
      minWidth: 90,
      position: "relative",
      minHeight: 48,
      flexShrink: 0,
      padding: "12px 16px",
      overflow: "hidden",
      whiteSpace: "normal",
      textAlign: "center",
      lineHeight: 1.25,
      variants: [
        {
          props: ({ ownerState: e }) =>
            e.label && (e.iconPosition === "top" || e.iconPosition === "bottom"),
          style: { flexDirection: "column" },
        },
        {
          props: ({ ownerState: e }) =>
            e.label && e.iconPosition !== "top" && e.iconPosition !== "bottom",
          style: { flexDirection: "row" },
        },
        {
          props: ({ ownerState: e }) => e.icon && e.label,
          style: { minHeight: 72, paddingTop: 9, paddingBottom: 9 },
        },
        {
          props: ({ ownerState: e, iconPosition: t }) => e.icon && e.label && t === "top",
          style: { [`& > .${W0.icon}`]: { marginBottom: 6 } },
        },
        {
          props: ({ ownerState: e, iconPosition: t }) => e.icon && e.label && t === "bottom",
          style: { [`& > .${W0.icon}`]: { marginTop: 6 } },
        },
        {
          props: ({ ownerState: e, iconPosition: t }) => e.icon && e.label && t === "start",
          style: { [`& > .${W0.icon}`]: { marginRight: r.spacing(1) } },
        },
        {
          props: ({ ownerState: e, iconPosition: t }) => e.icon && e.label && t === "end",
          style: { [`& > .${W0.icon}`]: { marginLeft: r.spacing(1) } },
        },
        {
          props: { textColor: "inherit" },
          style: {
            color: "inherit",
            opacity: 0.6,
            [`&.${W0.selected}`]: { opacity: 1 },
            [`&.${W0.disabled}`]: { opacity: (r.vars || r).palette.action.disabledOpacity },
          },
        },
        {
          props: { textColor: "primary" },
          style: {
            color: (r.vars || r).palette.text.secondary,
            [`&.${W0.selected}`]: { color: (r.vars || r).palette.primary.main },
            [`&.${W0.disabled}`]: { color: (r.vars || r).palette.text.disabled },
          },
        },
        {
          props: { textColor: "secondary" },
          style: {
            color: (r.vars || r).palette.text.secondary,
            [`&.${W0.selected}`]: { color: (r.vars || r).palette.secondary.main },
            [`&.${W0.disabled}`]: { color: (r.vars || r).palette.text.disabled },
          },
        },
        {
          props: ({ ownerState: e }) => e.fullWidth,
          style: { flexShrink: 1, flexGrow: 1, flexBasis: 0, maxWidth: "none" },
        },
        { props: ({ ownerState: e }) => e.wrapped, style: { fontSize: r.typography.pxToRem(12) } },
      ],
    })),
  ),
  T4 = Y.forwardRef(function (e, t) {
    const a = Et({ props: e, name: "MuiTab" }),
      {
        className: n,
        disabled: i = !1,
        disableFocusRipple: l = !1,
        fullWidth: u,
        icon: c,
        iconPosition: d = "top",
        indicator: f,
        label: g,
        onChange: y,
        onClick: x,
        onFocus: w,
        selected: T,
        selectionFollowsFocus: B,
        textColor: C = "inherit",
        value: N,
        wrapped: q = !1,
        ...O
      } = a,
      $ = i1(),
      P = s1({ id: N, ref: t, disabled: i, selected: T }),
      X = $.getItemMap().size === 0 && T ? 0 : P.tabIndex,
      G = {
        ...a,
        disabled: i,
        disableFocusRipple: l,
        selected: T,
        icon: !!c,
        iconPosition: d,
        label: !!g,
        fullWidth: u,
        textColor: C,
        wrapped: q,
      },
      J = M1(G),
      Z =
        c && g && Y.isValidElement(c)
          ? Y.cloneElement(c, { className: Me(J.icon, c.props.className) })
          : c,
      V = (t0) => {
        (!T && y && y(t0, N), x && x(t0));
      },
      x0 = (t0) => {
        (B && !T && y && y(t0, N), w && w(t0));
      };
    return l0.jsxs(z1, {
      internalNativeButton: !0,
      focusRipple: !l,
      className: Me(J.root, n),
      ref: P.ref,
      role: "tab",
      "aria-selected": T,
      disabled: i,
      onClick: V,
      onFocus: x0,
      tabIndex: X,
      ownerState: G,
      ...O,
      children: [
        d === "top" || d === "start"
          ? l0.jsxs(Y.Fragment, { children: [Z, g] })
          : l0.jsxs(Y.Fragment, { children: [g, Z] }),
        f,
      ],
    });
  }),
  B1 = bn(l0.jsx("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })),
  C1 = bn(l0.jsx("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" }));
function E1(r) {
  return (1 + Math.sin(Math.PI * r - Math.PI / 2)) / 2;
}
function D1(r, e, t, a = {}, n = () => {}) {
  const { ease: i = E1, duration: l = 300 } = a;
  let u = null;
  const c = e[r];
  let d = !1;
  const f = () => {
      d = !0;
    },
    g = (y) => {
      if (d) {
        n(new Error("Animation cancelled"));
        return;
      }
      u === null && (u = y);
      const x = Math.min(1, (y - u) / l);
      if (((e[r] = i(x) * (t - c) + c), x >= 1)) {
        requestAnimationFrame(() => {
          n(null);
        });
        return;
      }
      requestAnimationFrame(g);
    };
  return c === t
    ? (n(new Error("Element already at target position")), f)
    : (requestAnimationFrame(g), f);
}
const I1 = { width: 99, height: 99, position: "absolute", top: -9999, overflow: "scroll" };
function R1(r) {
  const { onChange: e, ...t } = r,
    a = Y.useRef(),
    n = Y.useRef(null),
    i = () => {
      a.current = n.current.offsetHeight - n.current.clientHeight;
    };
  return (
    l1(() => {
      const l = xn(() => {
          const c = a.current;
          (i(), c !== a.current && e(a.current));
        }),
        u = wn(n.current);
      return (
        u.addEventListener("resize", l),
        () => {
          (l.clear(), u.removeEventListener("resize", l));
        }
      );
    }, [e]),
    Y.useEffect(() => {
      (i(), e(a.current));
    }, [e]),
    l0.jsx("div", { style: I1, ...t, ref: n })
  );
}
function N1(r) {
  return Bt("MuiTabScrollButton", r);
}
const q1 = Ct("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]),
  L1 = (r) => {
    const { classes: e, orientation: t, disabled: a } = r;
    return Dt({ root: ["root", t, a && "disabled"] }, N1, e);
  },
  H1 = V0(gn, {
    name: "MuiTabScrollButton",
    slot: "Root",
    overridesResolver: (r, e) => {
      const { ownerState: t } = r;
      return [e.root, t.orientation && e[t.orientation]];
    },
  })({
    width: 40,
    flexShrink: 0,
    opacity: 0.8,
    [`&.${q1.disabled}`]: { opacity: 0 },
    variants: [
      {
        props: { orientation: "vertical" },
        style: {
          width: "100%",
          height: 40,
          "& svg": { transform: "var(--TabScrollButton-svgRotate)" },
        },
      },
    ],
  }),
  O1 = Y.forwardRef(function (e, t) {
    const a = Et({ props: e, name: "MuiTabScrollButton" }),
      {
        className: n,
        slots: i = {},
        slotProps: l = {},
        direction: u,
        orientation: c,
        disabled: d,
        ...f
      } = a,
      { nativeButton: g, ...y } = f,
      x = yn(),
      w = { isRtl: x, ...a },
      T = L1(w),
      B = i.StartScrollButtonIcon ?? B1,
      C = i.EndScrollButtonIcon ?? C1,
      N = wt({
        elementType: B,
        externalSlotProps: l.startScrollButtonIcon,
        additionalProps: { fontSize: "small" },
        ownerState: w,
      }),
      q = wt({
        elementType: C,
        externalSlotProps: l.endScrollButtonIcon,
        additionalProps: { fontSize: "small" },
        ownerState: w,
      });
    return l0.jsx(H1, {
      component: "div",
      className: Me(T.root, n),
      ref: t,
      role: null,
      ownerState: w,
      tabIndex: null,
      ...y,
      style: {
        ...y.style,
        ...(c === "vertical" && { "--TabScrollButton-svgRotate": `rotate(${x ? -90 : 90}deg)` }),
      },
      children: u === "left" ? l0.jsx(B, { ...N }) : l0.jsx(C, { ...q }),
    });
  });
function F1(r) {
  return Bt("MuiTabs", r);
}
const er = Ct("MuiTabs", [
    "root",
    "vertical",
    "list",
    "centered",
    "scroller",
    "fixed",
    "scrollableX",
    "scrollableY",
    "hideScrollbar",
    "scrollButtons",
    "scrollButtonsHideMobile",
    "indicator",
  ]),
  P1 = (r) => {
    const {
      vertical: e,
      fixed: t,
      hideScrollbar: a,
      scrollableX: n,
      scrollableY: i,
      centered: l,
      scrollButtonsHideMobile: u,
      classes: c,
    } = r;
    return Dt(
      {
        root: ["root", e && "vertical"],
        scroller: [
          "scroller",
          t && "fixed",
          a && "hideScrollbar",
          n && "scrollableX",
          i && "scrollableY",
        ],
        list: ["list", e && "vertical", l && "centered"],
        indicator: ["indicator"],
        scrollButtons: ["scrollButtons", u && "scrollButtonsHideMobile"],
        scrollableX: [n && "scrollableX"],
        hideScrollbar: [a && "hideScrollbar"],
      },
      F1,
      c,
    );
  },
  $1 = V0("div", {
    name: "MuiTabs",
    slot: "Root",
    overridesResolver: (r, e) => {
      const { ownerState: t } = r;
      return [
        { [`& .${er.scrollButtons}`]: e.scrollButtons },
        { [`& .${er.scrollButtons}`]: t.scrollButtonsHideMobile && e.scrollButtonsHideMobile },
        e.root,
        t.vertical && e.vertical,
      ];
    },
  })(
    It(({ theme: r }) => ({
      overflow: "hidden",
      minHeight: 48,
      WebkitOverflowScrolling: "touch",
      display: "flex",
      variants: [
        { props: ({ ownerState: e }) => e.vertical, style: { flexDirection: "column" } },
        {
          props: ({ ownerState: e }) => e.scrollButtonsHideMobile,
          style: {
            [`& .${er.scrollButtons}`]: { [r.breakpoints.down("sm")]: { display: "none" } },
          },
        },
      ],
    })),
  ),
  G1 = V0("div", {
    name: "MuiTabs",
    slot: "Scroller",
    overridesResolver: (r, e) => {
      const { ownerState: t } = r;
      return [
        e.scroller,
        t.fixed && e.fixed,
        t.hideScrollbar && e.hideScrollbar,
        t.scrollableX && e.scrollableX,
        t.scrollableY && e.scrollableY,
      ];
    },
  })({
    position: "relative",
    display: "inline-block",
    flex: "1 1 auto",
    whiteSpace: "nowrap",
    variants: [
      { props: ({ ownerState: r }) => r.fixed, style: { overflowX: "hidden", width: "100%" } },
      {
        props: ({ ownerState: r }) => r.hideScrollbar,
        style: { scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } },
      },
      {
        props: ({ ownerState: r }) => r.scrollableX,
        style: { overflowX: "auto", overflowY: "hidden" },
      },
      {
        props: ({ ownerState: r }) => r.scrollableY,
        style: { overflowY: "auto", overflowX: "hidden" },
      },
    ],
  }),
  W1 = V0("div", {
    name: "MuiTabs",
    slot: "List",
    overridesResolver: (r, e) => {
      const { ownerState: t } = r;
      return [e.list, t.centered && e.centered];
    },
  })({
    display: "flex",
    variants: [
      { props: ({ ownerState: r }) => r.vertical, style: { flexDirection: "column" } },
      { props: ({ ownerState: r }) => r.centered, style: { justifyContent: "center" } },
    ],
  }),
  j1 = V0("span", { name: "MuiTabs", slot: "Indicator" })(
    It(({ theme: r }) => ({
      position: "absolute",
      height: 2,
      bottom: 0,
      width: "100%",
      transition: r.transitions.create(),
      variants: [
        {
          props: { indicatorColor: "primary" },
          style: { backgroundColor: (r.vars || r).palette.primary.main },
        },
        {
          props: { indicatorColor: "secondary" },
          style: { backgroundColor: (r.vars || r).palette.secondary.main },
        },
        { props: ({ ownerState: e }) => e.vertical, style: { height: "100%", width: 2, right: 0 } },
      ],
    })),
  ),
  U1 = V0(R1)({
    overflowX: "auto",
    overflowY: "hidden",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" },
  }),
  va = {},
  A4 = Y.forwardRef(function (e, t) {
    const a = Et({ props: e, name: "MuiTabs" }),
      n = fn(),
      i = yn(),
      {
        "aria-label": l,
        "aria-labelledby": u,
        action: c,
        centered: d = !1,
        children: f,
        className: g,
        component: y = "div",
        allowScrollButtonsMobile: x = !1,
        indicatorColor: w = "primary",
        onChange: T,
        orientation: B = "horizontal",
        scrollButtons: C = "auto",
        selectionFollowsFocus: N,
        slots: q = {},
        slotProps: O = {},
        textColor: $ = "primary",
        value: P,
        variant: U = "standard",
        visibleScrollbar: X = !1,
        ...G
      } = a,
      J = U === "scrollable",
      Z = B === "vertical",
      V = Z ? "scrollTop" : "scrollLeft",
      x0 = Z ? "top" : "left",
      t0 = Z ? "bottom" : "right",
      c0 = Z ? "clientHeight" : "clientWidth",
      d0 = Z ? "height" : "width",
      a0 = {
        ...a,
        component: y,
        allowScrollButtonsMobile: x,
        indicatorColor: w,
        orientation: B,
        vertical: Z,
        scrollButtons: C,
        textColor: $,
        variant: U,
        visibleScrollbar: X,
        fixed: !J,
        hideScrollbar: J && !X,
        scrollableX: J && !Z,
        scrollableY: J && Z,
        centered: d && !J,
        scrollButtonsHideMobile: !x,
      },
      w0 = P1(a0),
      J0 = wt({
        elementType: q.startScrollButtonIcon,
        externalSlotProps: O.startScrollButtonIcon,
        ownerState: a0,
      }),
      L0 = wt({
        elementType: q.endScrollButtonIcon,
        externalSlotProps: O.endScrollButtonIcon,
        ownerState: a0,
      }),
      [C0, Q0] = Y.useState(!1),
      [h0, _0] = Y.useState(va),
      [ye, Ve] = Y.useState(!1),
      [E0, Ce] = Y.useState(!1),
      [H0, Ee] = Y.useState(!1),
      De = P === !1 ? null : P,
      [Ie, ee] = Y.useState(!1),
      [K, O0] = Y.useState({ overflow: "hidden", scrollbarWidth: 0 }),
      D0 = new Map(),
      m0 = Y.useRef(null),
      k0 = Y.useRef(null),
      F0 = { slots: q, slotProps: O },
      xe = () => {
        const I = m0.current;
        let R;
        if (I) {
          const Q = I.getBoundingClientRect();
          R = {
            clientWidth: I.clientWidth,
            scrollLeft: I.scrollLeft,
            scrollTop: I.scrollTop,
            scrollWidth: I.scrollWidth,
            top: Q.top,
            bottom: Q.bottom,
            left: Q.left,
            right: Q.right,
          };
        }
        let W;
        if (I && P !== !1) {
          const Q = k0.current.children;
          if (Q.length > 0) {
            const g0 = Q[D0.get(P)];
            W = g0 ? g0.getBoundingClientRect() : null;
          }
        }
        return { tabsMeta: R, tabMeta: W };
      },
      we = _t(() => {
        const { tabsMeta: I, tabMeta: R } = xe();
        let W = 0,
          Q;
        Z
          ? ((Q = "top"), R && I && (W = R.top - I.top + I.scrollTop))
          : ((Q = i ? "right" : "left"),
            R && I && (W = (i ? -1 : 1) * (R[Q] - I[Q] + I.scrollLeft)));
        const g0 = { [Q]: W, [d0]: R ? R[d0] : 0 };
        if (typeof h0[Q] != "number" || typeof h0[d0] != "number") _0(g0);
        else {
          const Se = Math.abs(h0[Q] - g0[Q]),
            ke = Math.abs(h0[d0] - g0[d0]);
          (Se >= 1 || ke >= 1) && _0(g0);
        }
      }),
      Ye = (I, { animation: R = !0 } = {}) => {
        R
          ? D1(V, m0.current, I, { duration: n.transitions.duration.standard })
          : (m0.current[V] = I);
      },
      Re = (I) => {
        let R = m0.current[V];
        (Z ? (R += I) : (R += I * (i ? -1 : 1)), Ye(R));
      },
      Ke = () => {
        const I = m0.current[c0];
        let R = 0;
        const W = Array.from(k0.current.children);
        for (let Q = 0; Q < W.length; Q += 1) {
          const g0 = W[Q];
          if (R + g0[c0] > I) {
            Q === 0 && (R = I);
            break;
          }
          R += g0[c0];
        }
        return R;
      },
      st = () => {
        Re(-1 * Ke());
      },
      Yt = () => {
        Re(Ke());
      },
      [Kt, { onChange: te, ...Ne }] = ae("scrollbar", {
        className: Me(w0.scrollableX, w0.hideScrollbar),
        elementType: U1,
        shouldForwardComponentProp: !0,
        externalForwardedProps: F0,
        ownerState: a0,
      }),
      Wi = Y.useCallback(
        (I) => {
          (te == null || te(I), O0({ overflow: null, scrollbarWidth: I }));
        },
        [te],
      ),
      [ia, sa] = ae("scrollButtons", {
        className: w0.scrollButtons,
        elementType: O1,
        externalForwardedProps: F0,
        ownerState: a0,
        additionalProps: {
          orientation: B,
          slots: {
            StartScrollButtonIcon: q.startScrollButtonIcon,
            EndScrollButtonIcon: q.endScrollButtonIcon,
          },
          slotProps: { startScrollButtonIcon: J0, endScrollButtonIcon: L0 },
        },
      }),
      ji = () => {
        const I = {};
        I.scrollbarSizeListener = J ? l0.jsx(Kt, { ...Ne, onChange: Wi }) : null;
        const W = J && ((C === "auto" && (ye || E0)) || C === !0);
        return (
          (I.scrollButtonStart = W
            ? l0.jsx(ia, { direction: i ? "right" : "left", onClick: st, disabled: !ye, ...sa })
            : null),
          (I.scrollButtonEnd = W
            ? l0.jsx(ia, { direction: i ? "left" : "right", onClick: Yt, disabled: !E0, ...sa })
            : null),
          I
        );
      },
      la = _t((I) => {
        const { tabsMeta: R, tabMeta: W } = xe();
        if (!(!W || !R)) {
          if (W[x0] < R[x0]) {
            const Q = R[V] + (W[x0] - R[x0]);
            Ye(Q, { animation: I });
          } else if (W[t0] > R[t0]) {
            const Q = R[V] + (W[t0] - R[t0]);
            Ye(Q, { animation: I });
          }
        }
      }),
      lt = _t(() => {
        J && C !== !1 && Ee(!H0);
      });
    (Y.useEffect(() => {
      const I = xn(() => {
        m0.current && we();
      });
      let R;
      const W = (Se) => {
          (Se.forEach((ke) => {
            (ke.removedNodes.forEach((Ze) => {
              R == null || R.unobserve(Ze);
            }),
              ke.addedNodes.forEach((Ze) => {
                R == null || R.observe(Ze);
              }));
          }),
            I(),
            lt());
        },
        Q = wn(m0.current);
      Q.addEventListener("resize", I);
      let g0;
      return (
        typeof ResizeObserver < "u" &&
          ((R = new ResizeObserver(I)),
          Array.from(k0.current.children).forEach((Se) => {
            R.observe(Se);
          })),
        typeof MutationObserver < "u" &&
          ((g0 = new MutationObserver(W)), g0.observe(k0.current, { childList: !0 })),
        () => {
          (I.clear(),
            Q.removeEventListener("resize", I),
            g0 == null || g0.disconnect(),
            R == null || R.disconnect());
        }
      );
    }, [we, lt]),
      Y.useEffect(() => {
        const I = Array.from(k0.current.children),
          R = I.length;
        if (typeof IntersectionObserver < "u" && R > 0 && J && C !== !1) {
          const W = I[0],
            Q = I[R - 1],
            g0 = { root: m0.current, threshold: 0.99 },
            Se = (Qt) => {
              Ve(!Qt[0].isIntersecting);
            },
            ke = new IntersectionObserver(Se, g0);
          ke.observe(W);
          const Ze = (Qt) => {
              Ce(!Qt[0].isIntersecting);
            },
            ca = new IntersectionObserver(Ze, g0);
          return (
            ca.observe(Q),
            () => {
              (ke.disconnect(), ca.disconnect());
            }
          );
        }
      }, [J, C, H0, f == null ? void 0 : f.length]),
      Y.useEffect(() => {
        Q0(!0);
      }, []),
      Y.useEffect(() => {
        we();
      }),
      Y.useEffect(() => {
        la(va !== h0);
      }, [la, h0]),
      Y.useImperativeHandle(c, () => ({ updateIndicator: we, updateScrollButtons: lt }), [we, lt]));
    const [Ui, Xi] = ae("indicator", {
        className: w0.indicator,
        elementType: j1,
        externalForwardedProps: F0,
        ownerState: a0,
        additionalProps: { style: h0 },
      }),
      oa = l0.jsx(Ui, { ...Xi }),
      ua = o1({ activeItemId: Ie ? void 0 : De, orientation: B, isRtl: i }),
      Zt = ua.getContainerProps(),
      Vi = Y.Children.toArray(f)
        .filter(Y.isValidElement)
        .map((I, R) => {
          const W = I.props.value === void 0 ? R : I.props.value;
          return (D0.set(W, R), { child: I, index: R, childValue: W });
        })
        .map(({ child: I, childValue: R }) => {
          const W = R === P;
          return Y.cloneElement(I, {
            fullWidth: U === "fullWidth",
            indicator: W && !C0 && oa,
            selected: W,
            selectionFollowsFocus: N,
            onChange: T,
            textColor: $,
            value: R,
          });
        }),
      Jt = ji(),
      [Yi, Ki] = ae("root", {
        ref: t,
        className: Me(w0.root, g),
        elementType: $1,
        externalForwardedProps: { ...F0, ...G, component: y },
        ownerState: a0,
      }),
      [Zi, Ji] = ae("scroller", {
        ref: m0,
        className: w0.scroller,
        elementType: G1,
        externalForwardedProps: F0,
        ownerState: a0,
        additionalProps: {
          style: {
            overflow: K.overflow,
            [Z ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: X ? void 0 : -K.scrollbarWidth,
          },
        },
      }),
      Qi = pn(Zt.ref, k0),
      _i = (I) => {
        const R = k0.current,
          W = c1(h1(R));
        (W == null ? void 0 : W.getAttribute("role")) === "tab" && Zt.onKeyDown(I);
      },
      [e1, t1] = ae("list", {
        ref: Qi,
        className: w0.list,
        elementType: W1,
        externalForwardedProps: F0,
        ownerState: a0,
        getSlotProps: (I) => ({
          ...I,
          onBlur: (R) => {
            var W;
            (R.currentTarget.contains(R.relatedTarget) || ee(!1),
              (W = I.onBlur) == null || W.call(I, R));
          },
          onKeyDown: (R) => {
            var W;
            (_i(R), (W = I.onKeyDown) == null || W.call(I, R));
          },
          onFocus: (R) => {
            var W;
            (ee(!0), Zt.onFocus(R), (W = I.onFocus) == null || W.call(I, R));
          },
        }),
      });
    return l0.jsxs(Yi, {
      ...Ki,
      children: [
        Jt.scrollButtonStart,
        Jt.scrollbarSizeListener,
        l0.jsxs(Zi, {
          ...Ji,
          children: [
            l0.jsx(e1, {
              "aria-label": l,
              "aria-labelledby": u,
              "aria-orientation": B === "vertical" ? "vertical" : null,
              role: "tablist",
              ...t1,
              children: l0.jsx(u1.Provider, { value: ua, children: Vi }),
            }),
            C0 && oa,
          ],
        }),
        Jt.scrollButtonEnd,
      ],
    });
  });
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X1 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  M4 = at("chevron-down", X1);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const V1 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  z4 = at("chevron-right", V1);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y1 = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6",
      },
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }],
  ],
  B4 = at("file-text", Y1);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K1 = [
    [
      "path",
      {
        d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
        key: "18887p",
      },
    ],
  ],
  C4 = at("message-square", K1);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z1 = [
    ["path", { d: "M13 21h8", key: "1jsn5i" }],
    ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu",
      },
    ],
  ],
  E4 = at("pencil-line", Z1),
  ga = /[#.]/g;
function J1(r, e) {
  const t = r || "",
    a = {};
  let n = 0,
    i,
    l;
  for (; n < t.length;) {
    ga.lastIndex = n;
    const u = ga.exec(t),
      c = t.slice(n, u ? u.index : t.length);
    (c &&
      (i
        ? i === "#"
          ? (a.id = c)
          : Array.isArray(a.className)
            ? a.className.push(c)
            : (a.className = [c])
        : (l = c),
      (n += c.length)),
      u && ((i = u[0]), n++));
  }
  return { type: "element", tagName: l || e || "div", properties: a, children: [] };
}
function Sn(r, e, t) {
  const a = t ? ts(t) : void 0;
  function n(i, l, ...u) {
    let c;
    if (i == null) {
      c = { type: "root", children: [] };
      const d = l;
      u.unshift(d);
    } else {
      c = J1(i, e);
      const d = c.tagName.toLowerCase(),
        f = a ? a.get(d) : void 0;
      if (((c.tagName = f || d), Q1(l))) u.unshift(l);
      else for (const [g, y] of Object.entries(l)) _1(r, c.properties, g, y);
    }
    for (const d of u) yr(c.children, d);
    return (
      c.type === "element" &&
        c.tagName === "template" &&
        ((c.content = { type: "root", children: c.children }), (c.children = [])),
      c
    );
  }
  return n;
}
function Q1(r) {
  if (r === null || typeof r != "object" || Array.isArray(r)) return !0;
  if (typeof r.type != "string") return !1;
  const e = r,
    t = Object.keys(r);
  for (const a of t) {
    const n = e[a];
    if (n && typeof n == "object") {
      if (!Array.isArray(n)) return !0;
      const i = n;
      for (const l of i) if (typeof l != "number" && typeof l != "string") return !0;
    }
  }
  return !!("children" in r && Array.isArray(r.children));
}
function _1(r, e, t, a) {
  const n = f1(r, t);
  let i;
  if (a != null) {
    if (typeof a == "number") {
      if (Number.isNaN(a)) return;
      i = a;
    } else
      typeof a == "boolean"
        ? (i = a)
        : typeof a == "string"
          ? n.spaceSeparated
            ? (i = ma(a))
            : n.commaSeparated
              ? (i = da(a))
              : n.commaOrSpaceSeparated
                ? (i = ma(da(a).join(" ")))
                : (i = ba(n, n.property, a))
          : Array.isArray(a)
            ? (i = [...a])
            : (i = n.property === "style" ? es(a) : String(a));
    if (Array.isArray(i)) {
      const l = [];
      for (const u of i) l.push(ba(n, n.property, u));
      i = l;
    }
    (n.property === "className" && Array.isArray(e.className) && (i = e.className.concat(i)),
      (e[n.property] = i));
  }
}
function yr(r, e) {
  if (e != null)
    if (typeof e == "number" || typeof e == "string") r.push({ type: "text", value: String(e) });
    else if (Array.isArray(e)) for (const t of e) yr(r, t);
    else if (typeof e == "object" && "type" in e) e.type === "root" ? yr(r, e.children) : r.push(e);
    else throw new Error("Expected node, nodes, or string, got `" + e + "`");
}
function ba(r, e, t) {
  if (typeof t == "string") {
    if (r.number && t && !Number.isNaN(Number(t))) return Number(t);
    if ((r.boolean || r.overloadedBoolean) && (t === "" || fa(t) === fa(e))) return !0;
  }
  return t;
}
function es(r) {
  const e = [];
  for (const [t, a] of Object.entries(r)) e.push([t, a].join(": "));
  return e.join("; ");
}
function ts(r) {
  const e = new Map();
  for (const t of r) e.set(t.toLowerCase(), t);
  return e;
}
const rs = [
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "solidColor",
    "textArea",
    "textPath",
  ],
  as = Sn(p1, "div"),
  ns = Sn(v1, "g", rs),
  tr = { html: "http://www.w3.org/1999/xhtml", svg: "http://www.w3.org/2000/svg" };
function is(r, e) {
  return kn(r, {}) || { type: "root", children: [] };
}
function kn(r, e) {
  const t = ss(r, e);
  return (t && e.afterTransform && e.afterTransform(r, t), t);
}
function ss(r, e) {
  switch (r.nodeType) {
    case 1:
      return cs(r, e);
    case 3:
      return os(r);
    case 8:
      return us(r);
    case 9:
      return ya(r, e);
    case 10:
      return ls();
    case 11:
      return ya(r, e);
    default:
      return;
  }
}
function ya(r, e) {
  return { type: "root", children: Tn(r, e) };
}
function ls() {
  return { type: "doctype" };
}
function os(r) {
  return { type: "text", value: r.nodeValue || "" };
}
function us(r) {
  return { type: "comment", value: r.nodeValue || "" };
}
function cs(r, e) {
  const t = r.namespaceURI,
    a = t === tr.svg ? ns : as,
    n = t === tr.html ? r.tagName.toLowerCase() : r.tagName,
    i = t === tr.html && n === "template" ? r.content : r,
    l = r.getAttributeNames(),
    u = {};
  let c = -1;
  for (; ++c < l.length;) u[l[c]] = r.getAttribute(l[c]) || "";
  return a(n, u, Tn(i, e));
}
function Tn(r, e) {
  const t = r.childNodes,
    a = [];
  let n = -1;
  for (; ++n < t.length;) {
    const i = kn(t[n], e);
    i !== void 0 && a.push(i);
  }
  return a;
}
new DOMParser();
function hs(r, e) {
  const t = ms(r);
  return is(t);
}
function ms(r) {
  const e = document.createElement("template");
  return ((e.innerHTML = r), e.content);
}
const xa = function (r, e, t) {
    const a = g1(t);
    if (!r || !r.type || !r.children) throw new Error("Expected parent node");
    if (typeof e == "number") {
      if (e < 0 || e === Number.POSITIVE_INFINITY)
        throw new Error("Expected positive finite number as index");
    } else if (((e = r.children.indexOf(e)), e < 0))
      throw new Error("Expected child node or index");
    for (; ++e < r.children.length;) if (a(r.children[e], e, r)) return r.children[e];
  },
  ze = function (r) {
    if (r == null) return ps;
    if (typeof r == "string") return fs(r);
    if (typeof r == "object") return ds(r);
    if (typeof r == "function") return Or(r);
    throw new Error("Expected function, string, or array as `test`");
  };
function ds(r) {
  const e = [];
  let t = -1;
  for (; ++t < r.length;) e[t] = ze(r[t]);
  return Or(a);
  function a(...n) {
    let i = -1;
    for (; ++i < e.length;) if (e[i].apply(this, n)) return !0;
    return !1;
  }
}
function fs(r) {
  return Or(e);
  function e(t) {
    return t.tagName === r;
  }
}
function Or(r) {
  return e;
  function e(t, a, n) {
    return !!(vs(t) && r.call(this, t, typeof a == "number" ? a : void 0, n || void 0));
  }
}
function ps(r) {
  return !!(
    r &&
    typeof r == "object" &&
    "type" in r &&
    r.type === "element" &&
    "tagName" in r &&
    typeof r.tagName == "string"
  );
}
function vs(r) {
  return r !== null && typeof r == "object" && "type" in r && "tagName" in r;
}
const wa = /\n/g,
  Sa = /[\t ]+/g,
  xr = ze("br"),
  ka = ze(Ts),
  gs = ze("p"),
  Ta = ze("tr"),
  bs = ze([
    "datalist",
    "head",
    "noembed",
    "noframes",
    "noscript",
    "rp",
    "script",
    "style",
    "template",
    "title",
    ks,
    As,
  ]),
  An = ze([
    "address",
    "article",
    "aside",
    "blockquote",
    "body",
    "caption",
    "center",
    "dd",
    "dialog",
    "dir",
    "dl",
    "dt",
    "div",
    "figure",
    "figcaption",
    "footer",
    "form,",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "legend",
    "li",
    "listing",
    "main",
    "menu",
    "nav",
    "ol",
    "p",
    "plaintext",
    "pre",
    "section",
    "ul",
    "xmp",
  ]);
function ys(r, e) {
  const t = e || {},
    a = "children" in r ? r.children : [],
    n = An(r),
    i = Bn(r, { whitespace: t.whitespace || "normal" }),
    l = [];
  (r.type === "text" || r.type === "comment") &&
    l.push(...zn(r, { breakBefore: !0, breakAfter: !0 }));
  let u = -1;
  for (; ++u < a.length;)
    l.push(
      ...Mn(a[u], r, {
        whitespace: i,
        breakBefore: u ? void 0 : n,
        breakAfter: u < a.length - 1 ? xr(a[u + 1]) : n,
      }),
    );
  const c = [];
  let d;
  for (u = -1; ++u < l.length;) {
    const f = l[u];
    typeof f == "number"
      ? d !== void 0 && f > d && (d = f)
      : f &&
        (d !== void 0 &&
          d > -1 &&
          c.push(
            `
`.repeat(d) || " ",
          ),
        (d = -1),
        c.push(f));
  }
  return c.join("");
}
function Mn(r, e, t) {
  return r.type === "element"
    ? xs(r, e, t)
    : r.type === "text"
      ? t.whitespace === "normal"
        ? zn(r, t)
        : ws(r)
      : [];
}
function xs(r, e, t) {
  const a = Bn(r, t),
    n = r.children || [];
  let i = -1,
    l = [];
  if (bs(r)) return l;
  let u, c;
  for (
    xr(r) || (Ta(r) && xa(e, r, Ta))
      ? (c = `
`)
      : gs(r)
        ? ((u = 2), (c = 2))
        : An(r) && ((u = 1), (c = 1));
    ++i < n.length;
  )
    l = l.concat(
      Mn(n[i], r, {
        whitespace: a,
        breakBefore: i ? void 0 : u,
        breakAfter: i < n.length - 1 ? xr(n[i + 1]) : c,
      }),
    );
  return (ka(r) && xa(e, r, ka) && l.push("	"), u && l.unshift(u), c && l.push(c), l);
}
function zn(r, e) {
  const t = String(r.value),
    a = [],
    n = [];
  let i = 0;
  for (; i <= t.length;) {
    wa.lastIndex = i;
    const c = wa.exec(t),
      d = c && "index" in c ? c.index : t.length;
    (a.push(
      Ss(
        t.slice(i, d).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""),
        i === 0 ? e.breakBefore : !0,
        d === t.length ? e.breakAfter : !0,
      ),
    ),
      (i = d + 1));
  }
  let l = -1,
    u;
  for (; ++l < a.length;)
    a[l].charCodeAt(a[l].length - 1) === 8203 ||
    (l < a.length - 1 && a[l + 1].charCodeAt(0) === 8203)
      ? (n.push(a[l]), (u = void 0))
      : a[l]
        ? (typeof u == "number" && n.push(u), n.push(a[l]), (u = 0))
        : (l === 0 || l === a.length - 1) && n.push(0);
  return n;
}
function ws(r) {
  return [String(r.value)];
}
function Ss(r, e, t) {
  const a = [];
  let n = 0,
    i;
  for (; n < r.length;) {
    Sa.lastIndex = n;
    const l = Sa.exec(r);
    ((i = l ? l.index : r.length),
      !n && !i && l && !e && a.push(""),
      n !== i && a.push(r.slice(n, i)),
      (n = l ? i + l[0].length : i));
  }
  return (n !== i && !t && a.push(""), a.join(" "));
}
function Bn(r, e) {
  if (r.type === "element") {
    const t = r.properties || {};
    switch (r.tagName) {
      case "listing":
      case "plaintext":
      case "xmp":
        return "pre";
      case "nobr":
        return "nowrap";
      case "pre":
        return t.wrap ? "pre-wrap" : "pre";
      case "td":
      case "th":
        return t.noWrap ? "nowrap" : e.whitespace;
      case "textarea":
        return "pre-wrap";
    }
  }
  return e.whitespace;
}
function ks(r) {
  return !!(r.properties || {}).hidden;
}
function Ts(r) {
  return r.tagName === "td" || r.tagName === "th";
}
function As(r) {
  return r.tagName === "dialog" && !(r.properties || {}).open;
}
class A extends Error {
  constructor(e, t) {
    var a = "KaTeX parse error: " + e,
      n,
      i,
      l = t && t.loc;
    if (l && l.start <= l.end) {
      var u = l.lexer.input;
      ((n = l.start),
        (i = l.end),
        n === u.length ? (a += " at end of input: ") : (a += " at position " + (n + 1) + ": "));
      var c = u.slice(n, i).replace(/[^]/g, "$&̲"),
        d;
      n > 15 ? (d = "…" + u.slice(n - 15, n)) : (d = u.slice(0, n));
      var f;
      (i + 15 < u.length ? (f = u.slice(i, i + 15) + "…") : (f = u.slice(i)), (a += d + c + f));
    }
    (super(a),
      (this.name = "ParseError"),
      Object.setPrototypeOf(this, A.prototype),
      (this.position = n),
      n != null && i != null && (this.length = i - n),
      (this.rawMessage = e));
  }
}
var Ms = /([A-Z])/g,
  Fr = (r) => r.replace(Ms, "-$1").toLowerCase(),
  zs = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;" },
  Bs = /[&><"']/g,
  S0 = (r) => String(r).replace(Bs, (e) => zs[e]),
  bt = (r) =>
    r.type === "ordgroup" || r.type === "color"
      ? r.body.length === 1
        ? bt(r.body[0])
        : r
      : r.type === "font"
        ? bt(r.body)
        : r,
  Cs = new Set(["mathord", "textord", "atom"]),
  le = (r) => Cs.has(bt(r).type),
  Es = (r) => {
    var e = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(r);
    return e
      ? e[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1])
        ? null
        : e[1].toLowerCase()
      : "_relative";
  },
  wr = {
    displayMode: {
      type: "boolean",
      description:
        "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
      cli: "-d, --display-mode",
    },
    output: {
      type: { enum: ["htmlAndMathml", "html", "mathml"] },
      description: "Determines the markup language of the output.",
      cli: "-F, --format <type>",
    },
    leqno: {
      type: "boolean",
      description: "Render display math in leqno style (left-justified tags).",
    },
    fleqn: { type: "boolean", description: "Render display math flush left." },
    throwOnError: {
      type: "boolean",
      default: !0,
      cli: "-t, --no-throw-on-error",
      cliDescription:
        "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error.",
    },
    errorColor: {
      type: "string",
      default: "#cc0000",
      cli: "-c, --error-color <color>",
      cliDescription:
        "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
      cliProcessor: (r) => "#" + r,
    },
    macros: {
      type: "object",
      cli: "-m, --macro <def>",
      cliDescription:
        "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
      cliDefault: [],
      cliProcessor: (r, e) => (e.push(r), e),
    },
    minRuleThickness: {
      type: "number",
      description:
        "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
      processor: (r) => Math.max(0, r),
      cli: "--min-rule-thickness <size>",
      cliProcessor: parseFloat,
    },
    colorIsTextColor: {
      type: "boolean",
      description:
        "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
      cli: "-b, --color-is-text-color",
    },
    strict: {
      type: [{ enum: ["warn", "ignore", "error"] }, "boolean", "function"],
      description:
        "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
      cli: "-S, --strict",
      cliDefault: !1,
    },
    trust: {
      type: ["boolean", "function"],
      description: "Trust the input, enabling all HTML features such as \\url.",
      cli: "-T, --trust",
    },
    maxSize: {
      type: "number",
      default: 1 / 0,
      description:
        "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
      processor: (r) => Math.max(0, r),
      cli: "-s, --max-size <n>",
      cliProcessor: parseInt,
    },
    maxExpand: {
      type: "number",
      default: 1e3,
      description:
        "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
      processor: (r) => Math.max(0, r),
      cli: "-e, --max-expand <n>",
      cliProcessor: (r) => (r === "Infinity" ? 1 / 0 : parseInt(r)),
    },
    globalGroup: { type: "boolean", cli: !1 },
  };
function Ds(r) {
  if ("default" in r) return r.default;
  var e = r.type,
    t = Array.isArray(e) ? e[0] : e;
  if (typeof t != "string") return t.enum[0];
  switch (t) {
    case "boolean":
      return !1;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
  }
}
class Pr {
  constructor(e) {
    (e === void 0 && (e = {}), (e = e || {}));
    for (var t of Object.keys(wr)) {
      var a = wr[t],
        n = e[t];
      this[t] = n !== void 0 ? (a.processor ? a.processor(n) : n) : Ds(a);
    }
  }
  reportNonstrict(e, t, a) {
    var n = this.strict;
    if ((typeof n == "function" && (n = n(e, t, a)), !(!n || n === "ignore"))) {
      if (n === !0 || n === "error")
        throw new A(
          "LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"),
          a,
        );
      n === "warn"
        ? typeof console < "u" &&
          console.warn(
            "LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]"),
          )
        : typeof console < "u" &&
          console.warn(
            "LaTeX-incompatible input and strict mode is set to " +
              ("unrecognized '" + n + "': " + t + " [" + e + "]"),
          );
    }
  }
  useStrictBehavior(e, t, a) {
    var n = this.strict;
    if (typeof n == "function")
      try {
        n = n(e, t, a);
      } catch {
        n = "error";
      }
    return !n || n === "ignore"
      ? !1
      : n === !0 || n === "error"
        ? !0
        : n === "warn"
          ? (typeof console < "u" &&
              console.warn(
                "LaTeX-incompatible input and strict mode is set to 'warn': " +
                  (t + " [" + e + "]"),
              ),
            !1)
          : (typeof console < "u" &&
              console.warn(
                "LaTeX-incompatible input and strict mode is set to " +
                  ("unrecognized '" + n + "': " + t + " [" + e + "]"),
              ),
            !1);
  }
  isTrusted(e) {
    if ("url" in e && e.url && !e.protocol) {
      var t = Es(e.url);
      if (t == null) return !1;
      e.protocol = t;
    }
    var a = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!a;
  }
}
class ce {
  constructor(e, t, a) {
    ((this.id = e), (this.size = t), (this.cramped = a));
  }
  sup() {
    return U0[Is[this.id]];
  }
  sub() {
    return U0[Rs[this.id]];
  }
  fracNum() {
    return U0[Ns[this.id]];
  }
  fracDen() {
    return U0[qs[this.id]];
  }
  cramp() {
    return U0[Ls[this.id]];
  }
  text() {
    return U0[Hs[this.id]];
  }
  isTight() {
    return this.size >= 2;
  }
}
var $r = 0,
  St = 1,
  He = 2,
  ie = 3,
  et = 4,
  P0 = 5,
  Oe = 6,
  M0 = 7,
  U0 = [
    new ce($r, 0, !1),
    new ce(St, 0, !0),
    new ce(He, 1, !1),
    new ce(ie, 1, !0),
    new ce(et, 2, !1),
    new ce(P0, 2, !0),
    new ce(Oe, 3, !1),
    new ce(M0, 3, !0),
  ],
  Is = [et, P0, et, P0, Oe, M0, Oe, M0],
  Rs = [P0, P0, P0, P0, M0, M0, M0, M0],
  Ns = [He, ie, et, P0, Oe, M0, Oe, M0],
  qs = [ie, ie, P0, P0, M0, M0, M0, M0],
  Ls = [St, St, ie, ie, P0, P0, M0, M0],
  Hs = [$r, St, He, ie, He, ie, He, ie],
  F = { DISPLAY: U0[$r], TEXT: U0[He], SCRIPT: U0[et], SCRIPTSCRIPT: U0[Oe] },
  Sr = [
    {
      name: "latin",
      blocks: [
        [256, 591],
        [768, 879],
      ],
    },
    { name: "cyrillic", blocks: [[1024, 1279]] },
    { name: "armenian", blocks: [[1328, 1423]] },
    { name: "brahmic", blocks: [[2304, 4255]] },
    { name: "georgian", blocks: [[4256, 4351]] },
    {
      name: "cjk",
      blocks: [
        [12288, 12543],
        [19968, 40879],
        [65280, 65376],
      ],
    },
    { name: "hangul", blocks: [[44032, 55215]] },
  ];
function Os(r) {
  for (var e = 0; e < Sr.length; e++)
    for (var t = Sr[e], a = 0; a < t.blocks.length; a++) {
      var n = t.blocks[a];
      if (r >= n[0] && r <= n[1]) return t.name;
    }
  return null;
}
var yt = [];
Sr.forEach((r) => r.blocks.forEach((e) => yt.push(...e)));
function Cn(r) {
  for (var e = 0; e < yt.length; e += 2) if (r >= yt[e] && r <= yt[e + 1]) return !0;
  return !1;
}
var b0 = (r) => r + " " + r,
  Le = 80,
  Fs = function (e, t) {
    return (
      "M95," +
      (622 + e + t) +
      `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` +
      e / 2.075 +
      " -" +
      e +
      `
c5.3,-9.3,12,-14,20,-14
H400000v` +
      (40 + e) +
      `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` +
      (834 + e) +
      " " +
      t +
      "h400000v" +
      (40 + e) +
      "h-400000z"
    );
  },
  Ps = function (e, t) {
    return (
      "M263," +
      (601 + e + t) +
      `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` +
      e / 2.084 +
      " -" +
      e +
      `
c4.7,-7.3,11,-11,19,-11
H40000v` +
      (40 + e) +
      `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` +
      (1001 + e) +
      " " +
      t +
      "h400000v" +
      (40 + e) +
      "h-400000z"
    );
  },
  $s = function (e, t) {
    return (
      "M983 " +
      (10 + e + t) +
      `
l` +
      e / 3.13 +
      " -" +
      e +
      `
c4,-6.7,10,-10,18,-10 H400000v` +
      (40 + e) +
      `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` +
      (1001 + e) +
      " " +
      t +
      "h400000v" +
      (40 + e) +
      "h-400000z"
    );
  },
  Gs = function (e, t) {
    return (
      "M424," +
      (2398 + e + t) +
      `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` +
      e / 4.223 +
      " -" +
      e +
      `c4,-6.7,10,-10,18,-10 H400000
v` +
      (40 + e) +
      `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` +
      (1001 + e) +
      " " +
      t +
      `
h400000v` +
      (40 + e) +
      "h-400000z"
    );
  },
  Ws = function (e, t) {
    return (
      "M473," +
      (2713 + e + t) +
      `
c339.3,-1799.3,509.3,-2700,510,-2702 l` +
      e / 5.298 +
      " -" +
      e +
      `
c3.3,-7.3,9.3,-11,18,-11 H400000v` +
      (40 + e) +
      `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` +
      (1001 + e) +
      " " +
      t +
      "h400000v" +
      (40 + e) +
      "H1017.7z"
    );
  },
  js = function (e) {
    var t = e / 2;
    return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
  },
  Us = function (e, t, a) {
    var n = a - 54 - t - e;
    return (
      "M702 " +
      (e + t) +
      "H400000" +
      (40 + e) +
      `
H742v` +
      n +
      `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` +
      t +
      "H400000v" +
      (40 + e) +
      "H742z"
    );
  },
  Xs = function (e, t, a) {
    t = 1e3 * t;
    var n = "";
    switch (e) {
      case "sqrtMain":
        n = Fs(t, Le);
        break;
      case "sqrtSize1":
        n = Ps(t, Le);
        break;
      case "sqrtSize2":
        n = $s(t, Le);
        break;
      case "sqrtSize3":
        n = Gs(t, Le);
        break;
      case "sqrtSize4":
        n = Ws(t, Le);
        break;
      case "sqrtTall":
        n = Us(t, Le, a);
    }
    return n;
  },
  Vs = function (e, t) {
    switch (e) {
      case "⎜":
        return b0("M291 0 H417 V" + t + " H291z");
      case "∣":
        return b0("M145 0 H188 V" + t + " H145z");
      case "∥":
        return b0("M145 0 H188 V" + t + " H145z") + b0("M367 0 H410 V" + t + " H367z");
      case "⎟":
        return b0("M457 0 H583 V" + t + " H457z");
      case "⎢":
        return b0("M319 0 H403 V" + t + " H319z");
      case "⎥":
        return b0("M263 0 H347 V" + t + " H263z");
      case "⎪":
        return b0("M384 0 H504 V" + t + " H384z");
      case "⏐":
        return b0("M312 0 H355 V" + t + " H312z");
      case "‖":
        return b0("M257 0 H300 V" + t + " H257z") + b0("M478 0 H521 V" + t + " H478z");
      default:
        return "";
    }
  },
  Aa = {
    doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
    doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
    leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
    leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
    leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
    leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
    leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
    leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
    leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
    leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
    leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
    lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
    leftlinesegment: b0("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),
    leftbracketunder: b0("M0 0 h120 V290 H399995 v120 H0z"),
    leftbracketover: b0("M0 440 h120 V150 H399995 v-120 H0z"),
    leftmapsto: b0("M40 281 V448H0V74H40V241H400000v40z"),
    leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
    longequal: b0("M0 50 h400000 v40H0z m0 194h40000v40H0z"),
    midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
    midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
    oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
    oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
    oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
    oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
    rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
    rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
    rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
    rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
    rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
    rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
    rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
    rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
    rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
    righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
    rightlinesegment: b0("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),
    rightbracketunder: b0("M399995 0 h-120 V290 H0 v120 H400000z"),
    rightbracketover: b0("M399995 440 h-120 V150 H0 v-120 H399995z"),
    rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
    twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
    twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
    tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
    tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
    tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
    tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
    vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
    widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
    widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
    widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
    widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
    widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
    widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
    widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
    widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
    baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
    rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
    baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
    rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
    shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
    shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`,
  },
  Ys = function (e, t) {
    switch (e) {
      case "lbrack":
        return (
          "M403 1759 V84 H666 V0 H319 V1759 v" +
          t +
          ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` +
          t +
          " v1759 h84z"
        );
      case "rbrack":
        return (
          "M347 1759 V0 H0 V84 H263 V1759 v" +
          t +
          ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` +
          t +
          " v1759 h84z"
        );
      case "vert":
        return (
          "M145 15 v585 v" +
          t +
          ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` +
          -t +
          ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` +
          t +
          " v585 h43z"
        );
      case "doublevert":
        return (
          "M145 15 v585 v" +
          t +
          ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` +
          -t +
          ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` +
          t +
          ` v585 h43z
M367 15 v585 v` +
          t +
          ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` +
          -t +
          ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` +
          t +
          " v585 h43z"
        );
      case "lfloor":
        return (
          "M319 602 V0 H403 V602 v" +
          t +
          ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` +
          t +
          " v1715 H319z"
        );
      case "rfloor":
        return (
          "M319 602 V0 H403 V602 v" +
          t +
          ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` +
          t +
          " v1715 H319z"
        );
      case "lceil":
        return (
          "M403 1759 V84 H666 V0 H319 V1759 v" +
          t +
          ` v602 h84z
M403 1759 V0 H319 V1759 v` +
          t +
          " v602 h84z"
        );
      case "rceil":
        return (
          "M347 1759 V0 H0 V84 H263 V1759 v" +
          t +
          ` v602 h84z
M347 1759 V0 h-84 V1759 v` +
          t +
          " v602 h84z"
        );
      case "lparen":
        return (
          `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` +
          (t + 84) +
          `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` +
          (t + 92) +
          `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`
        );
      case "rparen":
        return (
          `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` +
          (t + 9) +
          `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` +
          (t + 144) +
          `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`
        );
      default:
        throw new Error("Unknown stretchy delimiter.");
    }
  };
class We {
  constructor(e) {
    ((this.children = e),
      (this.classes = []),
      (this.height = 0),
      (this.depth = 0),
      (this.maxFontSize = 0),
      (this.style = {}));
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++)
      e.appendChild(this.children[t].toNode());
    return e;
  }
  toMarkup() {
    for (var e = "", t = 0; t < this.children.length; t++) e += this.children[t].toMarkup();
    return e;
  }
  toText() {
    var e = (t) => t.toText();
    return this.children.map(e).join("");
  }
}
var kr = {
    pt: 1,
    mm: 7227 / 2540,
    cm: 7227 / 254,
    in: 72.27,
    bp: 803 / 800,
    pc: 12,
    dd: 1238 / 1157,
    cc: 14856 / 1157,
    nd: 685 / 642,
    nc: 1370 / 107,
    sp: 1 / 65536,
    px: 803 / 800,
  },
  Ks = { ex: !0, em: !0, mu: !0 },
  En = function (e) {
    return (typeof e != "string" && (e = e.unit), e in kr || e in Ks || e === "ex");
  },
  o0 = function (e, t) {
    var a;
    if (e.unit in kr) a = kr[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
    else if (e.unit === "mu") a = t.fontMetrics().cssEmPerMu;
    else {
      var n;
      if ((t.style.isTight() ? (n = t.havingStyle(t.style.text())) : (n = t), e.unit === "ex"))
        a = n.fontMetrics().xHeight;
      else if (e.unit === "em") a = n.fontMetrics().quad;
      else throw new A("Invalid unit: '" + e.unit + "'");
      n !== t && (a *= n.sizeMultiplier / t.sizeMultiplier);
    }
    return Math.min(e.number * a, t.maxSize);
  },
  z = function (e) {
    return +e.toFixed(4) + "em";
  },
  fe = function (e) {
    return e.filter((t) => t).join(" ");
  },
  Dn = function (e, t, a) {
    if (
      ((this.classes = e || []),
      (this.attributes = {}),
      (this.height = 0),
      (this.depth = 0),
      (this.maxFontSize = 0),
      (this.style = a || {}),
      t)
    ) {
      t.style.isTight() && this.classes.push("mtight");
      var n = t.getColor();
      n && (this.style.color = n);
    }
  },
  In = function (e) {
    var t = document.createElement(e);
    t.className = fe(this.classes);
    for (var a of Object.keys(this.style)) t.style[a] = this.style[a];
    for (var n of Object.keys(this.attributes)) t.setAttribute(n, this.attributes[n]);
    for (var i = 0; i < this.children.length; i++) t.appendChild(this.children[i].toNode());
    return t;
  },
  Zs = /[\s"'>/=\x00-\x1f]/,
  Rn = function (e) {
    var t = "<" + e;
    this.classes.length && (t += ' class="' + S0(fe(this.classes)) + '"');
    var a = "";
    for (var n of Object.keys(this.style)) a += Fr(n) + ":" + this.style[n] + ";";
    a && (t += ' style="' + S0(a) + '"');
    for (var i of Object.keys(this.attributes)) {
      if (Zs.test(i)) throw new A("Invalid attribute name '" + i + "'");
      t += " " + i + '="' + S0(this.attributes[i]) + '"';
    }
    t += ">";
    for (var l = 0; l < this.children.length; l++) t += this.children[l].toMarkup();
    return ((t += "</" + e + ">"), t);
  };
class je {
  constructor(e, t, a, n) {
    (Dn.call(this, e, a, n), (this.children = t || []));
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return In.call(this, "span");
  }
  toMarkup() {
    return Rn.call(this, "span");
  }
}
class Rt {
  constructor(e, t, a, n) {
    (Dn.call(this, t, n), (this.children = a || []), this.setAttribute("href", e));
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return In.call(this, "a");
  }
  toMarkup() {
    return Rn.call(this, "a");
  }
}
class Js {
  constructor(e, t, a) {
    ((this.alt = t),
      (this.src = e),
      (this.classes = ["mord"]),
      (this.height = 0),
      (this.depth = 0),
      (this.maxFontSize = 0),
      (this.style = a));
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    var e = document.createElement("img");
    ((e.src = this.src), (e.alt = this.alt), (e.className = "mord"));
    for (var t of Object.keys(this.style)) e.style[t] = this.style[t];
    return e;
  }
  toMarkup() {
    var e = '<img src="' + S0(this.src) + '"' + (' alt="' + S0(this.alt) + '"'),
      t = "";
    for (var a of Object.keys(this.style)) t += Fr(a) + ":" + this.style[a] + ";";
    return (t && (e += ' style="' + S0(t) + '"'), (e += "'/>"), e);
  }
}
var Qs = { î: "ı̂", ï: "ı̈", í: "ı́", ì: "ı̀" };
class R0 {
  constructor(e, t, a, n, i, l, u, c) {
    ((this.text = e),
      (this.height = t || 0),
      (this.depth = a || 0),
      (this.italic = n || 0),
      (this.skew = i || 0),
      (this.width = l || 0),
      (this.classes = u || []),
      (this.style = c || {}),
      (this.maxFontSize = 0));
    var d = Os(this.text.charCodeAt(0));
    (d && this.classes.push(d + "_fallback"),
      /[îïíì]/.test(this.text) && (this.text = Qs[this.text]));
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    var e = document.createTextNode(this.text),
      t = null;
    (this.italic > 0 &&
      ((t = document.createElement("span")), (t.style.marginRight = z(this.italic))),
      this.classes.length > 0 &&
        ((t = t || document.createElement("span")), (t.className = fe(this.classes))));
    for (var a of Object.keys(this.style))
      ((t = t || document.createElement("span")), (t.style[a] = this.style[a]));
    return t ? (t.appendChild(e), t) : e;
  }
  toMarkup() {
    var e = !1,
      t = "<span";
    this.classes.length && ((e = !0), (t += ' class="'), (t += S0(fe(this.classes))), (t += '"'));
    var a = "";
    this.italic > 0 && (a += "margin-right:" + z(this.italic) + ";");
    for (var n of Object.keys(this.style)) a += Fr(n) + ":" + this.style[n] + ";";
    a && ((e = !0), (t += ' style="' + S0(a) + '"'));
    var i = S0(this.text);
    return e ? ((t += ">"), (t += i), (t += "</span>"), t) : i;
  }
}
class se {
  constructor(e, t) {
    ((this.children = e || []), (this.attributes = t || {}));
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg",
      t = document.createElementNS(e, "svg");
    for (var a of Object.keys(this.attributes)) t.setAttribute(a, this.attributes[a]);
    for (var n = 0; n < this.children.length; n++) t.appendChild(this.children[n].toNode());
    return t;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t of Object.keys(this.attributes)) e += " " + t + '="' + S0(this.attributes[t]) + '"';
    e += ">";
    for (var a = 0; a < this.children.length; a++) e += this.children[a].toMarkup();
    return ((e += "</svg>"), e);
  }
}
class pe {
  constructor(e, t) {
    ((this.pathName = e), (this.alternate = t));
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg",
      t = document.createElementNS(e, "path");
    return (
      this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", Aa[this.pathName]),
      t
    );
  }
  toMarkup() {
    return this.alternate
      ? '<path d="' + S0(this.alternate) + '"/>'
      : '<path d="' + S0(Aa[this.pathName]) + '"/>';
  }
}
class Tr {
  constructor(e) {
    this.attributes = e || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg",
      t = document.createElementNS(e, "line");
    for (var a of Object.keys(this.attributes)) t.setAttribute(a, this.attributes[a]);
    return t;
  }
  toMarkup() {
    var e = "<line";
    for (var t of Object.keys(this.attributes)) e += " " + t + '="' + S0(this.attributes[t]) + '"';
    return ((e += "/>"), e);
  }
}
function _s(r) {
  if (r instanceof R0) return r;
  throw new Error("Expected symbolNode but got " + String(r) + ".");
}
function el(r) {
  if (r instanceof je) return r;
  throw new Error("Expected span<HtmlDomNode> but got " + String(r) + ".");
}
var tl = (r) => r instanceof je || r instanceof Rt || r instanceof We,
  X0 = {
    "AMS-Regular": {
      32: [0, 0, 0, 0, 0.25],
      65: [0, 0.68889, 0, 0, 0.72222],
      66: [0, 0.68889, 0, 0, 0.66667],
      67: [0, 0.68889, 0, 0, 0.72222],
      68: [0, 0.68889, 0, 0, 0.72222],
      69: [0, 0.68889, 0, 0, 0.66667],
      70: [0, 0.68889, 0, 0, 0.61111],
      71: [0, 0.68889, 0, 0, 0.77778],
      72: [0, 0.68889, 0, 0, 0.77778],
      73: [0, 0.68889, 0, 0, 0.38889],
      74: [0.16667, 0.68889, 0, 0, 0.5],
      75: [0, 0.68889, 0, 0, 0.77778],
      76: [0, 0.68889, 0, 0, 0.66667],
      77: [0, 0.68889, 0, 0, 0.94445],
      78: [0, 0.68889, 0, 0, 0.72222],
      79: [0.16667, 0.68889, 0, 0, 0.77778],
      80: [0, 0.68889, 0, 0, 0.61111],
      81: [0.16667, 0.68889, 0, 0, 0.77778],
      82: [0, 0.68889, 0, 0, 0.72222],
      83: [0, 0.68889, 0, 0, 0.55556],
      84: [0, 0.68889, 0, 0, 0.66667],
      85: [0, 0.68889, 0, 0, 0.72222],
      86: [0, 0.68889, 0, 0, 0.72222],
      87: [0, 0.68889, 0, 0, 1],
      88: [0, 0.68889, 0, 0, 0.72222],
      89: [0, 0.68889, 0, 0, 0.72222],
      90: [0, 0.68889, 0, 0, 0.66667],
      107: [0, 0.68889, 0, 0, 0.55556],
      160: [0, 0, 0, 0, 0.25],
      165: [0, 0.675, 0.025, 0, 0.75],
      174: [0.15559, 0.69224, 0, 0, 0.94666],
      240: [0, 0.68889, 0, 0, 0.55556],
      295: [0, 0.68889, 0, 0, 0.54028],
      710: [0, 0.825, 0, 0, 2.33334],
      732: [0, 0.9, 0, 0, 2.33334],
      770: [0, 0.825, 0, 0, 2.33334],
      771: [0, 0.9, 0, 0, 2.33334],
      989: [0.08167, 0.58167, 0, 0, 0.77778],
      1008: [0, 0.43056, 0.04028, 0, 0.66667],
      8245: [0, 0.54986, 0, 0, 0.275],
      8463: [0, 0.68889, 0, 0, 0.54028],
      8487: [0, 0.68889, 0, 0, 0.72222],
      8498: [0, 0.68889, 0, 0, 0.55556],
      8502: [0, 0.68889, 0, 0, 0.66667],
      8503: [0, 0.68889, 0, 0, 0.44445],
      8504: [0, 0.68889, 0, 0, 0.66667],
      8513: [0, 0.68889, 0, 0, 0.63889],
      8592: [-0.03598, 0.46402, 0, 0, 0.5],
      8594: [-0.03598, 0.46402, 0, 0, 0.5],
      8602: [-0.13313, 0.36687, 0, 0, 1],
      8603: [-0.13313, 0.36687, 0, 0, 1],
      8606: [0.01354, 0.52239, 0, 0, 1],
      8608: [0.01354, 0.52239, 0, 0, 1],
      8610: [0.01354, 0.52239, 0, 0, 1.11111],
      8611: [0.01354, 0.52239, 0, 0, 1.11111],
      8619: [0, 0.54986, 0, 0, 1],
      8620: [0, 0.54986, 0, 0, 1],
      8621: [-0.13313, 0.37788, 0, 0, 1.38889],
      8622: [-0.13313, 0.36687, 0, 0, 1],
      8624: [0, 0.69224, 0, 0, 0.5],
      8625: [0, 0.69224, 0, 0, 0.5],
      8630: [0, 0.43056, 0, 0, 1],
      8631: [0, 0.43056, 0, 0, 1],
      8634: [0.08198, 0.58198, 0, 0, 0.77778],
      8635: [0.08198, 0.58198, 0, 0, 0.77778],
      8638: [0.19444, 0.69224, 0, 0, 0.41667],
      8639: [0.19444, 0.69224, 0, 0, 0.41667],
      8642: [0.19444, 0.69224, 0, 0, 0.41667],
      8643: [0.19444, 0.69224, 0, 0, 0.41667],
      8644: [0.1808, 0.675, 0, 0, 1],
      8646: [0.1808, 0.675, 0, 0, 1],
      8647: [0.1808, 0.675, 0, 0, 1],
      8648: [0.19444, 0.69224, 0, 0, 0.83334],
      8649: [0.1808, 0.675, 0, 0, 1],
      8650: [0.19444, 0.69224, 0, 0, 0.83334],
      8651: [0.01354, 0.52239, 0, 0, 1],
      8652: [0.01354, 0.52239, 0, 0, 1],
      8653: [-0.13313, 0.36687, 0, 0, 1],
      8654: [-0.13313, 0.36687, 0, 0, 1],
      8655: [-0.13313, 0.36687, 0, 0, 1],
      8666: [0.13667, 0.63667, 0, 0, 1],
      8667: [0.13667, 0.63667, 0, 0, 1],
      8669: [-0.13313, 0.37788, 0, 0, 1],
      8672: [-0.064, 0.437, 0, 0, 1.334],
      8674: [-0.064, 0.437, 0, 0, 1.334],
      8705: [0, 0.825, 0, 0, 0.5],
      8708: [0, 0.68889, 0, 0, 0.55556],
      8709: [0.08167, 0.58167, 0, 0, 0.77778],
      8717: [0, 0.43056, 0, 0, 0.42917],
      8722: [-0.03598, 0.46402, 0, 0, 0.5],
      8724: [0.08198, 0.69224, 0, 0, 0.77778],
      8726: [0.08167, 0.58167, 0, 0, 0.77778],
      8733: [0, 0.69224, 0, 0, 0.77778],
      8736: [0, 0.69224, 0, 0, 0.72222],
      8737: [0, 0.69224, 0, 0, 0.72222],
      8738: [0.03517, 0.52239, 0, 0, 0.72222],
      8739: [0.08167, 0.58167, 0, 0, 0.22222],
      8740: [0.25142, 0.74111, 0, 0, 0.27778],
      8741: [0.08167, 0.58167, 0, 0, 0.38889],
      8742: [0.25142, 0.74111, 0, 0, 0.5],
      8756: [0, 0.69224, 0, 0, 0.66667],
      8757: [0, 0.69224, 0, 0, 0.66667],
      8764: [-0.13313, 0.36687, 0, 0, 0.77778],
      8765: [-0.13313, 0.37788, 0, 0, 0.77778],
      8769: [-0.13313, 0.36687, 0, 0, 0.77778],
      8770: [-0.03625, 0.46375, 0, 0, 0.77778],
      8774: [0.30274, 0.79383, 0, 0, 0.77778],
      8776: [-0.01688, 0.48312, 0, 0, 0.77778],
      8778: [0.08167, 0.58167, 0, 0, 0.77778],
      8782: [0.06062, 0.54986, 0, 0, 0.77778],
      8783: [0.06062, 0.54986, 0, 0, 0.77778],
      8785: [0.08198, 0.58198, 0, 0, 0.77778],
      8786: [0.08198, 0.58198, 0, 0, 0.77778],
      8787: [0.08198, 0.58198, 0, 0, 0.77778],
      8790: [0, 0.69224, 0, 0, 0.77778],
      8791: [0.22958, 0.72958, 0, 0, 0.77778],
      8796: [0.08198, 0.91667, 0, 0, 0.77778],
      8806: [0.25583, 0.75583, 0, 0, 0.77778],
      8807: [0.25583, 0.75583, 0, 0, 0.77778],
      8808: [0.25142, 0.75726, 0, 0, 0.77778],
      8809: [0.25142, 0.75726, 0, 0, 0.77778],
      8812: [0.25583, 0.75583, 0, 0, 0.5],
      8814: [0.20576, 0.70576, 0, 0, 0.77778],
      8815: [0.20576, 0.70576, 0, 0, 0.77778],
      8816: [0.30274, 0.79383, 0, 0, 0.77778],
      8817: [0.30274, 0.79383, 0, 0, 0.77778],
      8818: [0.22958, 0.72958, 0, 0, 0.77778],
      8819: [0.22958, 0.72958, 0, 0, 0.77778],
      8822: [0.1808, 0.675, 0, 0, 0.77778],
      8823: [0.1808, 0.675, 0, 0, 0.77778],
      8828: [0.13667, 0.63667, 0, 0, 0.77778],
      8829: [0.13667, 0.63667, 0, 0, 0.77778],
      8830: [0.22958, 0.72958, 0, 0, 0.77778],
      8831: [0.22958, 0.72958, 0, 0, 0.77778],
      8832: [0.20576, 0.70576, 0, 0, 0.77778],
      8833: [0.20576, 0.70576, 0, 0, 0.77778],
      8840: [0.30274, 0.79383, 0, 0, 0.77778],
      8841: [0.30274, 0.79383, 0, 0, 0.77778],
      8842: [0.13597, 0.63597, 0, 0, 0.77778],
      8843: [0.13597, 0.63597, 0, 0, 0.77778],
      8847: [0.03517, 0.54986, 0, 0, 0.77778],
      8848: [0.03517, 0.54986, 0, 0, 0.77778],
      8858: [0.08198, 0.58198, 0, 0, 0.77778],
      8859: [0.08198, 0.58198, 0, 0, 0.77778],
      8861: [0.08198, 0.58198, 0, 0, 0.77778],
      8862: [0, 0.675, 0, 0, 0.77778],
      8863: [0, 0.675, 0, 0, 0.77778],
      8864: [0, 0.675, 0, 0, 0.77778],
      8865: [0, 0.675, 0, 0, 0.77778],
      8872: [0, 0.69224, 0, 0, 0.61111],
      8873: [0, 0.69224, 0, 0, 0.72222],
      8874: [0, 0.69224, 0, 0, 0.88889],
      8876: [0, 0.68889, 0, 0, 0.61111],
      8877: [0, 0.68889, 0, 0, 0.61111],
      8878: [0, 0.68889, 0, 0, 0.72222],
      8879: [0, 0.68889, 0, 0, 0.72222],
      8882: [0.03517, 0.54986, 0, 0, 0.77778],
      8883: [0.03517, 0.54986, 0, 0, 0.77778],
      8884: [0.13667, 0.63667, 0, 0, 0.77778],
      8885: [0.13667, 0.63667, 0, 0, 0.77778],
      8888: [0, 0.54986, 0, 0, 1.11111],
      8890: [0.19444, 0.43056, 0, 0, 0.55556],
      8891: [0.19444, 0.69224, 0, 0, 0.61111],
      8892: [0.19444, 0.69224, 0, 0, 0.61111],
      8901: [0, 0.54986, 0, 0, 0.27778],
      8903: [0.08167, 0.58167, 0, 0, 0.77778],
      8905: [0.08167, 0.58167, 0, 0, 0.77778],
      8906: [0.08167, 0.58167, 0, 0, 0.77778],
      8907: [0, 0.69224, 0, 0, 0.77778],
      8908: [0, 0.69224, 0, 0, 0.77778],
      8909: [-0.03598, 0.46402, 0, 0, 0.77778],
      8910: [0, 0.54986, 0, 0, 0.76042],
      8911: [0, 0.54986, 0, 0, 0.76042],
      8912: [0.03517, 0.54986, 0, 0, 0.77778],
      8913: [0.03517, 0.54986, 0, 0, 0.77778],
      8914: [0, 0.54986, 0, 0, 0.66667],
      8915: [0, 0.54986, 0, 0, 0.66667],
      8916: [0, 0.69224, 0, 0, 0.66667],
      8918: [0.0391, 0.5391, 0, 0, 0.77778],
      8919: [0.0391, 0.5391, 0, 0, 0.77778],
      8920: [0.03517, 0.54986, 0, 0, 1.33334],
      8921: [0.03517, 0.54986, 0, 0, 1.33334],
      8922: [0.38569, 0.88569, 0, 0, 0.77778],
      8923: [0.38569, 0.88569, 0, 0, 0.77778],
      8926: [0.13667, 0.63667, 0, 0, 0.77778],
      8927: [0.13667, 0.63667, 0, 0, 0.77778],
      8928: [0.30274, 0.79383, 0, 0, 0.77778],
      8929: [0.30274, 0.79383, 0, 0, 0.77778],
      8934: [0.23222, 0.74111, 0, 0, 0.77778],
      8935: [0.23222, 0.74111, 0, 0, 0.77778],
      8936: [0.23222, 0.74111, 0, 0, 0.77778],
      8937: [0.23222, 0.74111, 0, 0, 0.77778],
      8938: [0.20576, 0.70576, 0, 0, 0.77778],
      8939: [0.20576, 0.70576, 0, 0, 0.77778],
      8940: [0.30274, 0.79383, 0, 0, 0.77778],
      8941: [0.30274, 0.79383, 0, 0, 0.77778],
      8994: [0.19444, 0.69224, 0, 0, 0.77778],
      8995: [0.19444, 0.69224, 0, 0, 0.77778],
      9416: [0.15559, 0.69224, 0, 0, 0.90222],
      9484: [0, 0.69224, 0, 0, 0.5],
      9488: [0, 0.69224, 0, 0, 0.5],
      9492: [0, 0.37788, 0, 0, 0.5],
      9496: [0, 0.37788, 0, 0, 0.5],
      9585: [0.19444, 0.68889, 0, 0, 0.88889],
      9586: [0.19444, 0.74111, 0, 0, 0.88889],
      9632: [0, 0.675, 0, 0, 0.77778],
      9633: [0, 0.675, 0, 0, 0.77778],
      9650: [0, 0.54986, 0, 0, 0.72222],
      9651: [0, 0.54986, 0, 0, 0.72222],
      9654: [0.03517, 0.54986, 0, 0, 0.77778],
      9660: [0, 0.54986, 0, 0, 0.72222],
      9661: [0, 0.54986, 0, 0, 0.72222],
      9664: [0.03517, 0.54986, 0, 0, 0.77778],
      9674: [0.11111, 0.69224, 0, 0, 0.66667],
      9733: [0.19444, 0.69224, 0, 0, 0.94445],
      10003: [0, 0.69224, 0, 0, 0.83334],
      10016: [0, 0.69224, 0, 0, 0.83334],
      10731: [0.11111, 0.69224, 0, 0, 0.66667],
      10846: [0.19444, 0.75583, 0, 0, 0.61111],
      10877: [0.13667, 0.63667, 0, 0, 0.77778],
      10878: [0.13667, 0.63667, 0, 0, 0.77778],
      10885: [0.25583, 0.75583, 0, 0, 0.77778],
      10886: [0.25583, 0.75583, 0, 0, 0.77778],
      10887: [0.13597, 0.63597, 0, 0, 0.77778],
      10888: [0.13597, 0.63597, 0, 0, 0.77778],
      10889: [0.26167, 0.75726, 0, 0, 0.77778],
      10890: [0.26167, 0.75726, 0, 0, 0.77778],
      10891: [0.48256, 0.98256, 0, 0, 0.77778],
      10892: [0.48256, 0.98256, 0, 0, 0.77778],
      10901: [0.13667, 0.63667, 0, 0, 0.77778],
      10902: [0.13667, 0.63667, 0, 0, 0.77778],
      10933: [0.25142, 0.75726, 0, 0, 0.77778],
      10934: [0.25142, 0.75726, 0, 0, 0.77778],
      10935: [0.26167, 0.75726, 0, 0, 0.77778],
      10936: [0.26167, 0.75726, 0, 0, 0.77778],
      10937: [0.26167, 0.75726, 0, 0, 0.77778],
      10938: [0.26167, 0.75726, 0, 0, 0.77778],
      10949: [0.25583, 0.75583, 0, 0, 0.77778],
      10950: [0.25583, 0.75583, 0, 0, 0.77778],
      10955: [0.28481, 0.79383, 0, 0, 0.77778],
      10956: [0.28481, 0.79383, 0, 0, 0.77778],
      57350: [0.08167, 0.58167, 0, 0, 0.22222],
      57351: [0.08167, 0.58167, 0, 0, 0.38889],
      57352: [0.08167, 0.58167, 0, 0, 0.77778],
      57353: [0, 0.43056, 0.04028, 0, 0.66667],
      57356: [0.25142, 0.75726, 0, 0, 0.77778],
      57357: [0.25142, 0.75726, 0, 0, 0.77778],
      57358: [0.41951, 0.91951, 0, 0, 0.77778],
      57359: [0.30274, 0.79383, 0, 0, 0.77778],
      57360: [0.30274, 0.79383, 0, 0, 0.77778],
      57361: [0.41951, 0.91951, 0, 0, 0.77778],
      57366: [0.25142, 0.75726, 0, 0, 0.77778],
      57367: [0.25142, 0.75726, 0, 0, 0.77778],
      57368: [0.25142, 0.75726, 0, 0, 0.77778],
      57369: [0.25142, 0.75726, 0, 0, 0.77778],
      57370: [0.13597, 0.63597, 0, 0, 0.77778],
      57371: [0.13597, 0.63597, 0, 0, 0.77778],
    },
    "Caligraphic-Regular": {
      32: [0, 0, 0, 0, 0.25],
      65: [0, 0.68333, 0, 0.19445, 0.79847],
      66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
      67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
      68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
      69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
      70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
      71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
      72: [0, 0.68333, 0.00965, 0.11111, 0.84452],
      73: [0, 0.68333, 0.07382, 0, 0.54452],
      74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
      75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
      76: [0, 0.68333, 0, 0.13889, 0.68972],
      77: [0, 0.68333, 0, 0.13889, 1.2009],
      78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
      79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
      80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
      81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
      82: [0, 0.68333, 0, 0.08334, 0.8475],
      83: [0, 0.68333, 0.075, 0.13889, 0.60556],
      84: [0, 0.68333, 0.25417, 0, 0.54464],
      85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
      86: [0, 0.68333, 0.08222, 0, 0.61278],
      87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
      88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
      89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
      90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
      160: [0, 0, 0, 0, 0.25],
    },
    "Fraktur-Regular": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69141, 0, 0, 0.29574],
      34: [0, 0.69141, 0, 0, 0.21471],
      38: [0, 0.69141, 0, 0, 0.73786],
      39: [0, 0.69141, 0, 0, 0.21201],
      40: [0.24982, 0.74947, 0, 0, 0.38865],
      41: [0.24982, 0.74947, 0, 0, 0.38865],
      42: [0, 0.62119, 0, 0, 0.27764],
      43: [0.08319, 0.58283, 0, 0, 0.75623],
      44: [0, 0.10803, 0, 0, 0.27764],
      45: [0.08319, 0.58283, 0, 0, 0.75623],
      46: [0, 0.10803, 0, 0, 0.27764],
      47: [0.24982, 0.74947, 0, 0, 0.50181],
      48: [0, 0.47534, 0, 0, 0.50181],
      49: [0, 0.47534, 0, 0, 0.50181],
      50: [0, 0.47534, 0, 0, 0.50181],
      51: [0.18906, 0.47534, 0, 0, 0.50181],
      52: [0.18906, 0.47534, 0, 0, 0.50181],
      53: [0.18906, 0.47534, 0, 0, 0.50181],
      54: [0, 0.69141, 0, 0, 0.50181],
      55: [0.18906, 0.47534, 0, 0, 0.50181],
      56: [0, 0.69141, 0, 0, 0.50181],
      57: [0.18906, 0.47534, 0, 0, 0.50181],
      58: [0, 0.47534, 0, 0, 0.21606],
      59: [0.12604, 0.47534, 0, 0, 0.21606],
      61: [-0.13099, 0.36866, 0, 0, 0.75623],
      63: [0, 0.69141, 0, 0, 0.36245],
      65: [0, 0.69141, 0, 0, 0.7176],
      66: [0, 0.69141, 0, 0, 0.88397],
      67: [0, 0.69141, 0, 0, 0.61254],
      68: [0, 0.69141, 0, 0, 0.83158],
      69: [0, 0.69141, 0, 0, 0.66278],
      70: [0.12604, 0.69141, 0, 0, 0.61119],
      71: [0, 0.69141, 0, 0, 0.78539],
      72: [0.06302, 0.69141, 0, 0, 0.7203],
      73: [0, 0.69141, 0, 0, 0.55448],
      74: [0.12604, 0.69141, 0, 0, 0.55231],
      75: [0, 0.69141, 0, 0, 0.66845],
      76: [0, 0.69141, 0, 0, 0.66602],
      77: [0, 0.69141, 0, 0, 1.04953],
      78: [0, 0.69141, 0, 0, 0.83212],
      79: [0, 0.69141, 0, 0, 0.82699],
      80: [0.18906, 0.69141, 0, 0, 0.82753],
      81: [0.03781, 0.69141, 0, 0, 0.82699],
      82: [0, 0.69141, 0, 0, 0.82807],
      83: [0, 0.69141, 0, 0, 0.82861],
      84: [0, 0.69141, 0, 0, 0.66899],
      85: [0, 0.69141, 0, 0, 0.64576],
      86: [0, 0.69141, 0, 0, 0.83131],
      87: [0, 0.69141, 0, 0, 1.04602],
      88: [0, 0.69141, 0, 0, 0.71922],
      89: [0.18906, 0.69141, 0, 0, 0.83293],
      90: [0.12604, 0.69141, 0, 0, 0.60201],
      91: [0.24982, 0.74947, 0, 0, 0.27764],
      93: [0.24982, 0.74947, 0, 0, 0.27764],
      94: [0, 0.69141, 0, 0, 0.49965],
      97: [0, 0.47534, 0, 0, 0.50046],
      98: [0, 0.69141, 0, 0, 0.51315],
      99: [0, 0.47534, 0, 0, 0.38946],
      100: [0, 0.62119, 0, 0, 0.49857],
      101: [0, 0.47534, 0, 0, 0.40053],
      102: [0.18906, 0.69141, 0, 0, 0.32626],
      103: [0.18906, 0.47534, 0, 0, 0.5037],
      104: [0.18906, 0.69141, 0, 0, 0.52126],
      105: [0, 0.69141, 0, 0, 0.27899],
      106: [0, 0.69141, 0, 0, 0.28088],
      107: [0, 0.69141, 0, 0, 0.38946],
      108: [0, 0.69141, 0, 0, 0.27953],
      109: [0, 0.47534, 0, 0, 0.76676],
      110: [0, 0.47534, 0, 0, 0.52666],
      111: [0, 0.47534, 0, 0, 0.48885],
      112: [0.18906, 0.52396, 0, 0, 0.50046],
      113: [0.18906, 0.47534, 0, 0, 0.48912],
      114: [0, 0.47534, 0, 0, 0.38919],
      115: [0, 0.47534, 0, 0, 0.44266],
      116: [0, 0.62119, 0, 0, 0.33301],
      117: [0, 0.47534, 0, 0, 0.5172],
      118: [0, 0.52396, 0, 0, 0.5118],
      119: [0, 0.52396, 0, 0, 0.77351],
      120: [0.18906, 0.47534, 0, 0, 0.38865],
      121: [0.18906, 0.47534, 0, 0, 0.49884],
      122: [0.18906, 0.47534, 0, 0, 0.39054],
      160: [0, 0, 0, 0, 0.25],
      8216: [0, 0.69141, 0, 0, 0.21471],
      8217: [0, 0.69141, 0, 0, 0.21471],
      58112: [0, 0.62119, 0, 0, 0.49749],
      58113: [0, 0.62119, 0, 0, 0.4983],
      58114: [0.18906, 0.69141, 0, 0, 0.33328],
      58115: [0.18906, 0.69141, 0, 0, 0.32923],
      58116: [0.18906, 0.47534, 0, 0, 0.50343],
      58117: [0, 0.69141, 0, 0, 0.33301],
      58118: [0, 0.62119, 0, 0, 0.33409],
      58119: [0, 0.47534, 0, 0, 0.50073],
    },
    "Main-Bold": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0, 0, 0.35],
      34: [0, 0.69444, 0, 0, 0.60278],
      35: [0.19444, 0.69444, 0, 0, 0.95833],
      36: [0.05556, 0.75, 0, 0, 0.575],
      37: [0.05556, 0.75, 0, 0, 0.95833],
      38: [0, 0.69444, 0, 0, 0.89444],
      39: [0, 0.69444, 0, 0, 0.31944],
      40: [0.25, 0.75, 0, 0, 0.44722],
      41: [0.25, 0.75, 0, 0, 0.44722],
      42: [0, 0.75, 0, 0, 0.575],
      43: [0.13333, 0.63333, 0, 0, 0.89444],
      44: [0.19444, 0.15556, 0, 0, 0.31944],
      45: [0, 0.44444, 0, 0, 0.38333],
      46: [0, 0.15556, 0, 0, 0.31944],
      47: [0.25, 0.75, 0, 0, 0.575],
      48: [0, 0.64444, 0, 0, 0.575],
      49: [0, 0.64444, 0, 0, 0.575],
      50: [0, 0.64444, 0, 0, 0.575],
      51: [0, 0.64444, 0, 0, 0.575],
      52: [0, 0.64444, 0, 0, 0.575],
      53: [0, 0.64444, 0, 0, 0.575],
      54: [0, 0.64444, 0, 0, 0.575],
      55: [0, 0.64444, 0, 0, 0.575],
      56: [0, 0.64444, 0, 0, 0.575],
      57: [0, 0.64444, 0, 0, 0.575],
      58: [0, 0.44444, 0, 0, 0.31944],
      59: [0.19444, 0.44444, 0, 0, 0.31944],
      60: [0.08556, 0.58556, 0, 0, 0.89444],
      61: [-0.10889, 0.39111, 0, 0, 0.89444],
      62: [0.08556, 0.58556, 0, 0, 0.89444],
      63: [0, 0.69444, 0, 0, 0.54305],
      64: [0, 0.69444, 0, 0, 0.89444],
      65: [0, 0.68611, 0, 0, 0.86944],
      66: [0, 0.68611, 0, 0, 0.81805],
      67: [0, 0.68611, 0, 0, 0.83055],
      68: [0, 0.68611, 0, 0, 0.88194],
      69: [0, 0.68611, 0, 0, 0.75555],
      70: [0, 0.68611, 0, 0, 0.72361],
      71: [0, 0.68611, 0, 0, 0.90416],
      72: [0, 0.68611, 0, 0, 0.9],
      73: [0, 0.68611, 0, 0, 0.43611],
      74: [0, 0.68611, 0, 0, 0.59444],
      75: [0, 0.68611, 0, 0, 0.90138],
      76: [0, 0.68611, 0, 0, 0.69166],
      77: [0, 0.68611, 0, 0, 1.09166],
      78: [0, 0.68611, 0, 0, 0.9],
      79: [0, 0.68611, 0, 0, 0.86388],
      80: [0, 0.68611, 0, 0, 0.78611],
      81: [0.19444, 0.68611, 0, 0, 0.86388],
      82: [0, 0.68611, 0, 0, 0.8625],
      83: [0, 0.68611, 0, 0, 0.63889],
      84: [0, 0.68611, 0, 0, 0.8],
      85: [0, 0.68611, 0, 0, 0.88472],
      86: [0, 0.68611, 0.01597, 0, 0.86944],
      87: [0, 0.68611, 0.01597, 0, 1.18888],
      88: [0, 0.68611, 0, 0, 0.86944],
      89: [0, 0.68611, 0.02875, 0, 0.86944],
      90: [0, 0.68611, 0, 0, 0.70277],
      91: [0.25, 0.75, 0, 0, 0.31944],
      92: [0.25, 0.75, 0, 0, 0.575],
      93: [0.25, 0.75, 0, 0, 0.31944],
      94: [0, 0.69444, 0, 0, 0.575],
      95: [0.31, 0.13444, 0.03194, 0, 0.575],
      97: [0, 0.44444, 0, 0, 0.55902],
      98: [0, 0.69444, 0, 0, 0.63889],
      99: [0, 0.44444, 0, 0, 0.51111],
      100: [0, 0.69444, 0, 0, 0.63889],
      101: [0, 0.44444, 0, 0, 0.52708],
      102: [0, 0.69444, 0.10903, 0, 0.35139],
      103: [0.19444, 0.44444, 0.01597, 0, 0.575],
      104: [0, 0.69444, 0, 0, 0.63889],
      105: [0, 0.69444, 0, 0, 0.31944],
      106: [0.19444, 0.69444, 0, 0, 0.35139],
      107: [0, 0.69444, 0, 0, 0.60694],
      108: [0, 0.69444, 0, 0, 0.31944],
      109: [0, 0.44444, 0, 0, 0.95833],
      110: [0, 0.44444, 0, 0, 0.63889],
      111: [0, 0.44444, 0, 0, 0.575],
      112: [0.19444, 0.44444, 0, 0, 0.63889],
      113: [0.19444, 0.44444, 0, 0, 0.60694],
      114: [0, 0.44444, 0, 0, 0.47361],
      115: [0, 0.44444, 0, 0, 0.45361],
      116: [0, 0.63492, 0, 0, 0.44722],
      117: [0, 0.44444, 0, 0, 0.63889],
      118: [0, 0.44444, 0.01597, 0, 0.60694],
      119: [0, 0.44444, 0.01597, 0, 0.83055],
      120: [0, 0.44444, 0, 0, 0.60694],
      121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
      122: [0, 0.44444, 0, 0, 0.51111],
      123: [0.25, 0.75, 0, 0, 0.575],
      124: [0.25, 0.75, 0, 0, 0.31944],
      125: [0.25, 0.75, 0, 0, 0.575],
      126: [0.35, 0.34444, 0, 0, 0.575],
      160: [0, 0, 0, 0, 0.25],
      163: [0, 0.69444, 0, 0, 0.86853],
      168: [0, 0.69444, 0, 0, 0.575],
      172: [0, 0.44444, 0, 0, 0.76666],
      176: [0, 0.69444, 0, 0, 0.86944],
      177: [0.13333, 0.63333, 0, 0, 0.89444],
      184: [0.17014, 0, 0, 0, 0.51111],
      198: [0, 0.68611, 0, 0, 1.04166],
      215: [0.13333, 0.63333, 0, 0, 0.89444],
      216: [0.04861, 0.73472, 0, 0, 0.89444],
      223: [0, 0.69444, 0, 0, 0.59722],
      230: [0, 0.44444, 0, 0, 0.83055],
      247: [0.13333, 0.63333, 0, 0, 0.89444],
      248: [0.09722, 0.54167, 0, 0, 0.575],
      305: [0, 0.44444, 0, 0, 0.31944],
      338: [0, 0.68611, 0, 0, 1.16944],
      339: [0, 0.44444, 0, 0, 0.89444],
      567: [0.19444, 0.44444, 0, 0, 0.35139],
      710: [0, 0.69444, 0, 0, 0.575],
      711: [0, 0.63194, 0, 0, 0.575],
      713: [0, 0.59611, 0, 0, 0.575],
      714: [0, 0.69444, 0, 0, 0.575],
      715: [0, 0.69444, 0, 0, 0.575],
      728: [0, 0.69444, 0, 0, 0.575],
      729: [0, 0.69444, 0, 0, 0.31944],
      730: [0, 0.69444, 0, 0, 0.86944],
      732: [0, 0.69444, 0, 0, 0.575],
      733: [0, 0.69444, 0, 0, 0.575],
      915: [0, 0.68611, 0, 0, 0.69166],
      916: [0, 0.68611, 0, 0, 0.95833],
      920: [0, 0.68611, 0, 0, 0.89444],
      923: [0, 0.68611, 0, 0, 0.80555],
      926: [0, 0.68611, 0, 0, 0.76666],
      928: [0, 0.68611, 0, 0, 0.9],
      931: [0, 0.68611, 0, 0, 0.83055],
      933: [0, 0.68611, 0, 0, 0.89444],
      934: [0, 0.68611, 0, 0, 0.83055],
      936: [0, 0.68611, 0, 0, 0.89444],
      937: [0, 0.68611, 0, 0, 0.83055],
      8211: [0, 0.44444, 0.03194, 0, 0.575],
      8212: [0, 0.44444, 0.03194, 0, 1.14999],
      8216: [0, 0.69444, 0, 0, 0.31944],
      8217: [0, 0.69444, 0, 0, 0.31944],
      8220: [0, 0.69444, 0, 0, 0.60278],
      8221: [0, 0.69444, 0, 0, 0.60278],
      8224: [0.19444, 0.69444, 0, 0, 0.51111],
      8225: [0.19444, 0.69444, 0, 0, 0.51111],
      8242: [0, 0.55556, 0, 0, 0.34444],
      8407: [0, 0.72444, 0.15486, 0, 0.575],
      8463: [0, 0.69444, 0, 0, 0.66759],
      8465: [0, 0.69444, 0, 0, 0.83055],
      8467: [0, 0.69444, 0, 0, 0.47361],
      8472: [0.19444, 0.44444, 0, 0, 0.74027],
      8476: [0, 0.69444, 0, 0, 0.83055],
      8501: [0, 0.69444, 0, 0, 0.70277],
      8592: [-0.10889, 0.39111, 0, 0, 1.14999],
      8593: [0.19444, 0.69444, 0, 0, 0.575],
      8594: [-0.10889, 0.39111, 0, 0, 1.14999],
      8595: [0.19444, 0.69444, 0, 0, 0.575],
      8596: [-0.10889, 0.39111, 0, 0, 1.14999],
      8597: [0.25, 0.75, 0, 0, 0.575],
      8598: [0.19444, 0.69444, 0, 0, 1.14999],
      8599: [0.19444, 0.69444, 0, 0, 1.14999],
      8600: [0.19444, 0.69444, 0, 0, 1.14999],
      8601: [0.19444, 0.69444, 0, 0, 1.14999],
      8636: [-0.10889, 0.39111, 0, 0, 1.14999],
      8637: [-0.10889, 0.39111, 0, 0, 1.14999],
      8640: [-0.10889, 0.39111, 0, 0, 1.14999],
      8641: [-0.10889, 0.39111, 0, 0, 1.14999],
      8656: [-0.10889, 0.39111, 0, 0, 1.14999],
      8657: [0.19444, 0.69444, 0, 0, 0.70277],
      8658: [-0.10889, 0.39111, 0, 0, 1.14999],
      8659: [0.19444, 0.69444, 0, 0, 0.70277],
      8660: [-0.10889, 0.39111, 0, 0, 1.14999],
      8661: [0.25, 0.75, 0, 0, 0.70277],
      8704: [0, 0.69444, 0, 0, 0.63889],
      8706: [0, 0.69444, 0.06389, 0, 0.62847],
      8707: [0, 0.69444, 0, 0, 0.63889],
      8709: [0.05556, 0.75, 0, 0, 0.575],
      8711: [0, 0.68611, 0, 0, 0.95833],
      8712: [0.08556, 0.58556, 0, 0, 0.76666],
      8715: [0.08556, 0.58556, 0, 0, 0.76666],
      8722: [0.13333, 0.63333, 0, 0, 0.89444],
      8723: [0.13333, 0.63333, 0, 0, 0.89444],
      8725: [0.25, 0.75, 0, 0, 0.575],
      8726: [0.25, 0.75, 0, 0, 0.575],
      8727: [-0.02778, 0.47222, 0, 0, 0.575],
      8728: [-0.02639, 0.47361, 0, 0, 0.575],
      8729: [-0.02639, 0.47361, 0, 0, 0.575],
      8730: [0.18, 0.82, 0, 0, 0.95833],
      8733: [0, 0.44444, 0, 0, 0.89444],
      8734: [0, 0.44444, 0, 0, 1.14999],
      8736: [0, 0.69224, 0, 0, 0.72222],
      8739: [0.25, 0.75, 0, 0, 0.31944],
      8741: [0.25, 0.75, 0, 0, 0.575],
      8743: [0, 0.55556, 0, 0, 0.76666],
      8744: [0, 0.55556, 0, 0, 0.76666],
      8745: [0, 0.55556, 0, 0, 0.76666],
      8746: [0, 0.55556, 0, 0, 0.76666],
      8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
      8764: [-0.10889, 0.39111, 0, 0, 0.89444],
      8768: [0.19444, 0.69444, 0, 0, 0.31944],
      8771: [0.00222, 0.50222, 0, 0, 0.89444],
      8773: [0.027, 0.638, 0, 0, 0.894],
      8776: [0.02444, 0.52444, 0, 0, 0.89444],
      8781: [0.00222, 0.50222, 0, 0, 0.89444],
      8801: [0.00222, 0.50222, 0, 0, 0.89444],
      8804: [0.19667, 0.69667, 0, 0, 0.89444],
      8805: [0.19667, 0.69667, 0, 0, 0.89444],
      8810: [0.08556, 0.58556, 0, 0, 1.14999],
      8811: [0.08556, 0.58556, 0, 0, 1.14999],
      8826: [0.08556, 0.58556, 0, 0, 0.89444],
      8827: [0.08556, 0.58556, 0, 0, 0.89444],
      8834: [0.08556, 0.58556, 0, 0, 0.89444],
      8835: [0.08556, 0.58556, 0, 0, 0.89444],
      8838: [0.19667, 0.69667, 0, 0, 0.89444],
      8839: [0.19667, 0.69667, 0, 0, 0.89444],
      8846: [0, 0.55556, 0, 0, 0.76666],
      8849: [0.19667, 0.69667, 0, 0, 0.89444],
      8850: [0.19667, 0.69667, 0, 0, 0.89444],
      8851: [0, 0.55556, 0, 0, 0.76666],
      8852: [0, 0.55556, 0, 0, 0.76666],
      8853: [0.13333, 0.63333, 0, 0, 0.89444],
      8854: [0.13333, 0.63333, 0, 0, 0.89444],
      8855: [0.13333, 0.63333, 0, 0, 0.89444],
      8856: [0.13333, 0.63333, 0, 0, 0.89444],
      8857: [0.13333, 0.63333, 0, 0, 0.89444],
      8866: [0, 0.69444, 0, 0, 0.70277],
      8867: [0, 0.69444, 0, 0, 0.70277],
      8868: [0, 0.69444, 0, 0, 0.89444],
      8869: [0, 0.69444, 0, 0, 0.89444],
      8900: [-0.02639, 0.47361, 0, 0, 0.575],
      8901: [-0.02639, 0.47361, 0, 0, 0.31944],
      8902: [-0.02778, 0.47222, 0, 0, 0.575],
      8968: [0.25, 0.75, 0, 0, 0.51111],
      8969: [0.25, 0.75, 0, 0, 0.51111],
      8970: [0.25, 0.75, 0, 0, 0.51111],
      8971: [0.25, 0.75, 0, 0, 0.51111],
      8994: [-0.13889, 0.36111, 0, 0, 1.14999],
      8995: [-0.13889, 0.36111, 0, 0, 1.14999],
      9651: [0.19444, 0.69444, 0, 0, 1.02222],
      9657: [-0.02778, 0.47222, 0, 0, 0.575],
      9661: [0.19444, 0.69444, 0, 0, 1.02222],
      9667: [-0.02778, 0.47222, 0, 0, 0.575],
      9711: [0.19444, 0.69444, 0, 0, 1.14999],
      9824: [0.12963, 0.69444, 0, 0, 0.89444],
      9825: [0.12963, 0.69444, 0, 0, 0.89444],
      9826: [0.12963, 0.69444, 0, 0, 0.89444],
      9827: [0.12963, 0.69444, 0, 0, 0.89444],
      9837: [0, 0.75, 0, 0, 0.44722],
      9838: [0.19444, 0.69444, 0, 0, 0.44722],
      9839: [0.19444, 0.69444, 0, 0, 0.44722],
      10216: [0.25, 0.75, 0, 0, 0.44722],
      10217: [0.25, 0.75, 0, 0, 0.44722],
      10815: [0, 0.68611, 0, 0, 0.9],
      10927: [0.19667, 0.69667, 0, 0, 0.89444],
      10928: [0.19667, 0.69667, 0, 0, 0.89444],
      57376: [0.19444, 0.69444, 0, 0, 0],
    },
    "Main-BoldItalic": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0.11417, 0, 0.38611],
      34: [0, 0.69444, 0.07939, 0, 0.62055],
      35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
      37: [0.05556, 0.75, 0.12861, 0, 0.94444],
      38: [0, 0.69444, 0.08528, 0, 0.88555],
      39: [0, 0.69444, 0.12945, 0, 0.35555],
      40: [0.25, 0.75, 0.15806, 0, 0.47333],
      41: [0.25, 0.75, 0.03306, 0, 0.47333],
      42: [0, 0.75, 0.14333, 0, 0.59111],
      43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
      44: [0.19444, 0.14722, 0, 0, 0.35555],
      45: [0, 0.44444, 0.02611, 0, 0.41444],
      46: [0, 0.14722, 0, 0, 0.35555],
      47: [0.25, 0.75, 0.15806, 0, 0.59111],
      48: [0, 0.64444, 0.13167, 0, 0.59111],
      49: [0, 0.64444, 0.13167, 0, 0.59111],
      50: [0, 0.64444, 0.13167, 0, 0.59111],
      51: [0, 0.64444, 0.13167, 0, 0.59111],
      52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
      53: [0, 0.64444, 0.13167, 0, 0.59111],
      54: [0, 0.64444, 0.13167, 0, 0.59111],
      55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
      56: [0, 0.64444, 0.13167, 0, 0.59111],
      57: [0, 0.64444, 0.13167, 0, 0.59111],
      58: [0, 0.44444, 0.06695, 0, 0.35555],
      59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
      61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
      63: [0, 0.69444, 0.11472, 0, 0.59111],
      64: [0, 0.69444, 0.09208, 0, 0.88555],
      65: [0, 0.68611, 0, 0, 0.86555],
      66: [0, 0.68611, 0.0992, 0, 0.81666],
      67: [0, 0.68611, 0.14208, 0, 0.82666],
      68: [0, 0.68611, 0.09062, 0, 0.87555],
      69: [0, 0.68611, 0.11431, 0, 0.75666],
      70: [0, 0.68611, 0.12903, 0, 0.72722],
      71: [0, 0.68611, 0.07347, 0, 0.89527],
      72: [0, 0.68611, 0.17208, 0, 0.8961],
      73: [0, 0.68611, 0.15681, 0, 0.47166],
      74: [0, 0.68611, 0.145, 0, 0.61055],
      75: [0, 0.68611, 0.14208, 0, 0.89499],
      76: [0, 0.68611, 0, 0, 0.69777],
      77: [0, 0.68611, 0.17208, 0, 1.07277],
      78: [0, 0.68611, 0.17208, 0, 0.8961],
      79: [0, 0.68611, 0.09062, 0, 0.85499],
      80: [0, 0.68611, 0.0992, 0, 0.78721],
      81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
      82: [0, 0.68611, 0.02559, 0, 0.85944],
      83: [0, 0.68611, 0.11264, 0, 0.64999],
      84: [0, 0.68611, 0.12903, 0, 0.7961],
      85: [0, 0.68611, 0.17208, 0, 0.88083],
      86: [0, 0.68611, 0.18625, 0, 0.86555],
      87: [0, 0.68611, 0.18625, 0, 1.15999],
      88: [0, 0.68611, 0.15681, 0, 0.86555],
      89: [0, 0.68611, 0.19803, 0, 0.86555],
      90: [0, 0.68611, 0.14208, 0, 0.70888],
      91: [0.25, 0.75, 0.1875, 0, 0.35611],
      93: [0.25, 0.75, 0.09972, 0, 0.35611],
      94: [0, 0.69444, 0.06709, 0, 0.59111],
      95: [0.31, 0.13444, 0.09811, 0, 0.59111],
      97: [0, 0.44444, 0.09426, 0, 0.59111],
      98: [0, 0.69444, 0.07861, 0, 0.53222],
      99: [0, 0.44444, 0.05222, 0, 0.53222],
      100: [0, 0.69444, 0.10861, 0, 0.59111],
      101: [0, 0.44444, 0.085, 0, 0.53222],
      102: [0.19444, 0.69444, 0.21778, 0, 0.4],
      103: [0.19444, 0.44444, 0.105, 0, 0.53222],
      104: [0, 0.69444, 0.09426, 0, 0.59111],
      105: [0, 0.69326, 0.11387, 0, 0.35555],
      106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
      107: [0, 0.69444, 0.11111, 0, 0.53222],
      108: [0, 0.69444, 0.10861, 0, 0.29666],
      109: [0, 0.44444, 0.09426, 0, 0.94444],
      110: [0, 0.44444, 0.09426, 0, 0.64999],
      111: [0, 0.44444, 0.07861, 0, 0.59111],
      112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
      113: [0.19444, 0.44444, 0.105, 0, 0.53222],
      114: [0, 0.44444, 0.11111, 0, 0.50167],
      115: [0, 0.44444, 0.08167, 0, 0.48694],
      116: [0, 0.63492, 0.09639, 0, 0.385],
      117: [0, 0.44444, 0.09426, 0, 0.62055],
      118: [0, 0.44444, 0.11111, 0, 0.53222],
      119: [0, 0.44444, 0.11111, 0, 0.76777],
      120: [0, 0.44444, 0.12583, 0, 0.56055],
      121: [0.19444, 0.44444, 0.105, 0, 0.56166],
      122: [0, 0.44444, 0.13889, 0, 0.49055],
      126: [0.35, 0.34444, 0.11472, 0, 0.59111],
      160: [0, 0, 0, 0, 0.25],
      168: [0, 0.69444, 0.11473, 0, 0.59111],
      176: [0, 0.69444, 0, 0, 0.94888],
      184: [0.17014, 0, 0, 0, 0.53222],
      198: [0, 0.68611, 0.11431, 0, 1.02277],
      216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
      223: [0.19444, 0.69444, 0.09736, 0, 0.665],
      230: [0, 0.44444, 0.085, 0, 0.82666],
      248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
      305: [0, 0.44444, 0.09426, 0, 0.35555],
      338: [0, 0.68611, 0.11431, 0, 1.14054],
      339: [0, 0.44444, 0.085, 0, 0.82666],
      567: [0.19444, 0.44444, 0.04611, 0, 0.385],
      710: [0, 0.69444, 0.06709, 0, 0.59111],
      711: [0, 0.63194, 0.08271, 0, 0.59111],
      713: [0, 0.59444, 0.10444, 0, 0.59111],
      714: [0, 0.69444, 0.08528, 0, 0.59111],
      715: [0, 0.69444, 0, 0, 0.59111],
      728: [0, 0.69444, 0.10333, 0, 0.59111],
      729: [0, 0.69444, 0.12945, 0, 0.35555],
      730: [0, 0.69444, 0, 0, 0.94888],
      732: [0, 0.69444, 0.11472, 0, 0.59111],
      733: [0, 0.69444, 0.11472, 0, 0.59111],
      915: [0, 0.68611, 0.12903, 0, 0.69777],
      916: [0, 0.68611, 0, 0, 0.94444],
      920: [0, 0.68611, 0.09062, 0, 0.88555],
      923: [0, 0.68611, 0, 0, 0.80666],
      926: [0, 0.68611, 0.15092, 0, 0.76777],
      928: [0, 0.68611, 0.17208, 0, 0.8961],
      931: [0, 0.68611, 0.11431, 0, 0.82666],
      933: [0, 0.68611, 0.10778, 0, 0.88555],
      934: [0, 0.68611, 0.05632, 0, 0.82666],
      936: [0, 0.68611, 0.10778, 0, 0.88555],
      937: [0, 0.68611, 0.0992, 0, 0.82666],
      8211: [0, 0.44444, 0.09811, 0, 0.59111],
      8212: [0, 0.44444, 0.09811, 0, 1.18221],
      8216: [0, 0.69444, 0.12945, 0, 0.35555],
      8217: [0, 0.69444, 0.12945, 0, 0.35555],
      8220: [0, 0.69444, 0.16772, 0, 0.62055],
      8221: [0, 0.69444, 0.07939, 0, 0.62055],
    },
    "Main-Italic": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0.12417, 0, 0.30667],
      34: [0, 0.69444, 0.06961, 0, 0.51444],
      35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
      37: [0.05556, 0.75, 0.13639, 0, 0.81777],
      38: [0, 0.69444, 0.09694, 0, 0.76666],
      39: [0, 0.69444, 0.12417, 0, 0.30667],
      40: [0.25, 0.75, 0.16194, 0, 0.40889],
      41: [0.25, 0.75, 0.03694, 0, 0.40889],
      42: [0, 0.75, 0.14917, 0, 0.51111],
      43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
      44: [0.19444, 0.10556, 0, 0, 0.30667],
      45: [0, 0.43056, 0.02826, 0, 0.35778],
      46: [0, 0.10556, 0, 0, 0.30667],
      47: [0.25, 0.75, 0.16194, 0, 0.51111],
      48: [0, 0.64444, 0.13556, 0, 0.51111],
      49: [0, 0.64444, 0.13556, 0, 0.51111],
      50: [0, 0.64444, 0.13556, 0, 0.51111],
      51: [0, 0.64444, 0.13556, 0, 0.51111],
      52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
      53: [0, 0.64444, 0.13556, 0, 0.51111],
      54: [0, 0.64444, 0.13556, 0, 0.51111],
      55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
      56: [0, 0.64444, 0.13556, 0, 0.51111],
      57: [0, 0.64444, 0.13556, 0, 0.51111],
      58: [0, 0.43056, 0.0582, 0, 0.30667],
      59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
      61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
      63: [0, 0.69444, 0.1225, 0, 0.51111],
      64: [0, 0.69444, 0.09597, 0, 0.76666],
      65: [0, 0.68333, 0, 0, 0.74333],
      66: [0, 0.68333, 0.10257, 0, 0.70389],
      67: [0, 0.68333, 0.14528, 0, 0.71555],
      68: [0, 0.68333, 0.09403, 0, 0.755],
      69: [0, 0.68333, 0.12028, 0, 0.67833],
      70: [0, 0.68333, 0.13305, 0, 0.65277],
      71: [0, 0.68333, 0.08722, 0, 0.77361],
      72: [0, 0.68333, 0.16389, 0, 0.74333],
      73: [0, 0.68333, 0.15806, 0, 0.38555],
      74: [0, 0.68333, 0.14028, 0, 0.525],
      75: [0, 0.68333, 0.14528, 0, 0.76888],
      76: [0, 0.68333, 0, 0, 0.62722],
      77: [0, 0.68333, 0.16389, 0, 0.89666],
      78: [0, 0.68333, 0.16389, 0, 0.74333],
      79: [0, 0.68333, 0.09403, 0, 0.76666],
      80: [0, 0.68333, 0.10257, 0, 0.67833],
      81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
      82: [0, 0.68333, 0.03868, 0, 0.72944],
      83: [0, 0.68333, 0.11972, 0, 0.56222],
      84: [0, 0.68333, 0.13305, 0, 0.71555],
      85: [0, 0.68333, 0.16389, 0, 0.74333],
      86: [0, 0.68333, 0.18361, 0, 0.74333],
      87: [0, 0.68333, 0.18361, 0, 0.99888],
      88: [0, 0.68333, 0.15806, 0, 0.74333],
      89: [0, 0.68333, 0.19383, 0, 0.74333],
      90: [0, 0.68333, 0.14528, 0, 0.61333],
      91: [0.25, 0.75, 0.1875, 0, 0.30667],
      93: [0.25, 0.75, 0.10528, 0, 0.30667],
      94: [0, 0.69444, 0.06646, 0, 0.51111],
      95: [0.31, 0.12056, 0.09208, 0, 0.51111],
      97: [0, 0.43056, 0.07671, 0, 0.51111],
      98: [0, 0.69444, 0.06312, 0, 0.46],
      99: [0, 0.43056, 0.05653, 0, 0.46],
      100: [0, 0.69444, 0.10333, 0, 0.51111],
      101: [0, 0.43056, 0.07514, 0, 0.46],
      102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
      103: [0.19444, 0.43056, 0.08847, 0, 0.46],
      104: [0, 0.69444, 0.07671, 0, 0.51111],
      105: [0, 0.65536, 0.1019, 0, 0.30667],
      106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
      107: [0, 0.69444, 0.10764, 0, 0.46],
      108: [0, 0.69444, 0.10333, 0, 0.25555],
      109: [0, 0.43056, 0.07671, 0, 0.81777],
      110: [0, 0.43056, 0.07671, 0, 0.56222],
      111: [0, 0.43056, 0.06312, 0, 0.51111],
      112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
      113: [0.19444, 0.43056, 0.08847, 0, 0.46],
      114: [0, 0.43056, 0.10764, 0, 0.42166],
      115: [0, 0.43056, 0.08208, 0, 0.40889],
      116: [0, 0.61508, 0.09486, 0, 0.33222],
      117: [0, 0.43056, 0.07671, 0, 0.53666],
      118: [0, 0.43056, 0.10764, 0, 0.46],
      119: [0, 0.43056, 0.10764, 0, 0.66444],
      120: [0, 0.43056, 0.12042, 0, 0.46389],
      121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
      122: [0, 0.43056, 0.12292, 0, 0.40889],
      126: [0.35, 0.31786, 0.11585, 0, 0.51111],
      160: [0, 0, 0, 0, 0.25],
      168: [0, 0.66786, 0.10474, 0, 0.51111],
      176: [0, 0.69444, 0, 0, 0.83129],
      184: [0.17014, 0, 0, 0, 0.46],
      198: [0, 0.68333, 0.12028, 0, 0.88277],
      216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
      223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
      230: [0, 0.43056, 0.07514, 0, 0.71555],
      248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
      338: [0, 0.68333, 0.12028, 0, 0.98499],
      339: [0, 0.43056, 0.07514, 0, 0.71555],
      710: [0, 0.69444, 0.06646, 0, 0.51111],
      711: [0, 0.62847, 0.08295, 0, 0.51111],
      713: [0, 0.56167, 0.10333, 0, 0.51111],
      714: [0, 0.69444, 0.09694, 0, 0.51111],
      715: [0, 0.69444, 0, 0, 0.51111],
      728: [0, 0.69444, 0.10806, 0, 0.51111],
      729: [0, 0.66786, 0.11752, 0, 0.30667],
      730: [0, 0.69444, 0, 0, 0.83129],
      732: [0, 0.66786, 0.11585, 0, 0.51111],
      733: [0, 0.69444, 0.1225, 0, 0.51111],
      915: [0, 0.68333, 0.13305, 0, 0.62722],
      916: [0, 0.68333, 0, 0, 0.81777],
      920: [0, 0.68333, 0.09403, 0, 0.76666],
      923: [0, 0.68333, 0, 0, 0.69222],
      926: [0, 0.68333, 0.15294, 0, 0.66444],
      928: [0, 0.68333, 0.16389, 0, 0.74333],
      931: [0, 0.68333, 0.12028, 0, 0.71555],
      933: [0, 0.68333, 0.11111, 0, 0.76666],
      934: [0, 0.68333, 0.05986, 0, 0.71555],
      936: [0, 0.68333, 0.11111, 0, 0.76666],
      937: [0, 0.68333, 0.10257, 0, 0.71555],
      8211: [0, 0.43056, 0.09208, 0, 0.51111],
      8212: [0, 0.43056, 0.09208, 0, 1.02222],
      8216: [0, 0.69444, 0.12417, 0, 0.30667],
      8217: [0, 0.69444, 0.12417, 0, 0.30667],
      8220: [0, 0.69444, 0.1685, 0, 0.51444],
      8221: [0, 0.69444, 0.06961, 0, 0.51444],
      8463: [0, 0.68889, 0, 0, 0.54028],
    },
    "Main-Regular": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0, 0, 0.27778],
      34: [0, 0.69444, 0, 0, 0.5],
      35: [0.19444, 0.69444, 0, 0, 0.83334],
      36: [0.05556, 0.75, 0, 0, 0.5],
      37: [0.05556, 0.75, 0, 0, 0.83334],
      38: [0, 0.69444, 0, 0, 0.77778],
      39: [0, 0.69444, 0, 0, 0.27778],
      40: [0.25, 0.75, 0, 0, 0.38889],
      41: [0.25, 0.75, 0, 0, 0.38889],
      42: [0, 0.75, 0, 0, 0.5],
      43: [0.08333, 0.58333, 0, 0, 0.77778],
      44: [0.19444, 0.10556, 0, 0, 0.27778],
      45: [0, 0.43056, 0, 0, 0.33333],
      46: [0, 0.10556, 0, 0, 0.27778],
      47: [0.25, 0.75, 0, 0, 0.5],
      48: [0, 0.64444, 0, 0, 0.5],
      49: [0, 0.64444, 0, 0, 0.5],
      50: [0, 0.64444, 0, 0, 0.5],
      51: [0, 0.64444, 0, 0, 0.5],
      52: [0, 0.64444, 0, 0, 0.5],
      53: [0, 0.64444, 0, 0, 0.5],
      54: [0, 0.64444, 0, 0, 0.5],
      55: [0, 0.64444, 0, 0, 0.5],
      56: [0, 0.64444, 0, 0, 0.5],
      57: [0, 0.64444, 0, 0, 0.5],
      58: [0, 0.43056, 0, 0, 0.27778],
      59: [0.19444, 0.43056, 0, 0, 0.27778],
      60: [0.0391, 0.5391, 0, 0, 0.77778],
      61: [-0.13313, 0.36687, 0, 0, 0.77778],
      62: [0.0391, 0.5391, 0, 0, 0.77778],
      63: [0, 0.69444, 0, 0, 0.47222],
      64: [0, 0.69444, 0, 0, 0.77778],
      65: [0, 0.68333, 0, 0, 0.75],
      66: [0, 0.68333, 0, 0, 0.70834],
      67: [0, 0.68333, 0, 0, 0.72222],
      68: [0, 0.68333, 0, 0, 0.76389],
      69: [0, 0.68333, 0, 0, 0.68056],
      70: [0, 0.68333, 0, 0, 0.65278],
      71: [0, 0.68333, 0, 0, 0.78472],
      72: [0, 0.68333, 0, 0, 0.75],
      73: [0, 0.68333, 0, 0, 0.36111],
      74: [0, 0.68333, 0, 0, 0.51389],
      75: [0, 0.68333, 0, 0, 0.77778],
      76: [0, 0.68333, 0, 0, 0.625],
      77: [0, 0.68333, 0, 0, 0.91667],
      78: [0, 0.68333, 0, 0, 0.75],
      79: [0, 0.68333, 0, 0, 0.77778],
      80: [0, 0.68333, 0, 0, 0.68056],
      81: [0.19444, 0.68333, 0, 0, 0.77778],
      82: [0, 0.68333, 0, 0, 0.73611],
      83: [0, 0.68333, 0, 0, 0.55556],
      84: [0, 0.68333, 0, 0, 0.72222],
      85: [0, 0.68333, 0, 0, 0.75],
      86: [0, 0.68333, 0.01389, 0, 0.75],
      87: [0, 0.68333, 0.01389, 0, 1.02778],
      88: [0, 0.68333, 0, 0, 0.75],
      89: [0, 0.68333, 0.025, 0, 0.75],
      90: [0, 0.68333, 0, 0, 0.61111],
      91: [0.25, 0.75, 0, 0, 0.27778],
      92: [0.25, 0.75, 0, 0, 0.5],
      93: [0.25, 0.75, 0, 0, 0.27778],
      94: [0, 0.69444, 0, 0, 0.5],
      95: [0.31, 0.12056, 0.02778, 0, 0.5],
      97: [0, 0.43056, 0, 0, 0.5],
      98: [0, 0.69444, 0, 0, 0.55556],
      99: [0, 0.43056, 0, 0, 0.44445],
      100: [0, 0.69444, 0, 0, 0.55556],
      101: [0, 0.43056, 0, 0, 0.44445],
      102: [0, 0.69444, 0.07778, 0, 0.30556],
      103: [0.19444, 0.43056, 0.01389, 0, 0.5],
      104: [0, 0.69444, 0, 0, 0.55556],
      105: [0, 0.66786, 0, 0, 0.27778],
      106: [0.19444, 0.66786, 0, 0, 0.30556],
      107: [0, 0.69444, 0, 0, 0.52778],
      108: [0, 0.69444, 0, 0, 0.27778],
      109: [0, 0.43056, 0, 0, 0.83334],
      110: [0, 0.43056, 0, 0, 0.55556],
      111: [0, 0.43056, 0, 0, 0.5],
      112: [0.19444, 0.43056, 0, 0, 0.55556],
      113: [0.19444, 0.43056, 0, 0, 0.52778],
      114: [0, 0.43056, 0, 0, 0.39167],
      115: [0, 0.43056, 0, 0, 0.39445],
      116: [0, 0.61508, 0, 0, 0.38889],
      117: [0, 0.43056, 0, 0, 0.55556],
      118: [0, 0.43056, 0.01389, 0, 0.52778],
      119: [0, 0.43056, 0.01389, 0, 0.72222],
      120: [0, 0.43056, 0, 0, 0.52778],
      121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
      122: [0, 0.43056, 0, 0, 0.44445],
      123: [0.25, 0.75, 0, 0, 0.5],
      124: [0.25, 0.75, 0, 0, 0.27778],
      125: [0.25, 0.75, 0, 0, 0.5],
      126: [0.35, 0.31786, 0, 0, 0.5],
      160: [0, 0, 0, 0, 0.25],
      163: [0, 0.69444, 0, 0, 0.76909],
      167: [0.19444, 0.69444, 0, 0, 0.44445],
      168: [0, 0.66786, 0, 0, 0.5],
      172: [0, 0.43056, 0, 0, 0.66667],
      176: [0, 0.69444, 0, 0, 0.75],
      177: [0.08333, 0.58333, 0, 0, 0.77778],
      182: [0.19444, 0.69444, 0, 0, 0.61111],
      184: [0.17014, 0, 0, 0, 0.44445],
      198: [0, 0.68333, 0, 0, 0.90278],
      215: [0.08333, 0.58333, 0, 0, 0.77778],
      216: [0.04861, 0.73194, 0, 0, 0.77778],
      223: [0, 0.69444, 0, 0, 0.5],
      230: [0, 0.43056, 0, 0, 0.72222],
      247: [0.08333, 0.58333, 0, 0, 0.77778],
      248: [0.09722, 0.52778, 0, 0, 0.5],
      305: [0, 0.43056, 0, 0, 0.27778],
      338: [0, 0.68333, 0, 0, 1.01389],
      339: [0, 0.43056, 0, 0, 0.77778],
      567: [0.19444, 0.43056, 0, 0, 0.30556],
      710: [0, 0.69444, 0, 0, 0.5],
      711: [0, 0.62847, 0, 0, 0.5],
      713: [0, 0.56778, 0, 0, 0.5],
      714: [0, 0.69444, 0, 0, 0.5],
      715: [0, 0.69444, 0, 0, 0.5],
      728: [0, 0.69444, 0, 0, 0.5],
      729: [0, 0.66786, 0, 0, 0.27778],
      730: [0, 0.69444, 0, 0, 0.75],
      732: [0, 0.66786, 0, 0, 0.5],
      733: [0, 0.69444, 0, 0, 0.5],
      915: [0, 0.68333, 0, 0, 0.625],
      916: [0, 0.68333, 0, 0, 0.83334],
      920: [0, 0.68333, 0, 0, 0.77778],
      923: [0, 0.68333, 0, 0, 0.69445],
      926: [0, 0.68333, 0, 0, 0.66667],
      928: [0, 0.68333, 0, 0, 0.75],
      931: [0, 0.68333, 0, 0, 0.72222],
      933: [0, 0.68333, 0, 0, 0.77778],
      934: [0, 0.68333, 0, 0, 0.72222],
      936: [0, 0.68333, 0, 0, 0.77778],
      937: [0, 0.68333, 0, 0, 0.72222],
      8211: [0, 0.43056, 0.02778, 0, 0.5],
      8212: [0, 0.43056, 0.02778, 0, 1],
      8216: [0, 0.69444, 0, 0, 0.27778],
      8217: [0, 0.69444, 0, 0, 0.27778],
      8220: [0, 0.69444, 0, 0, 0.5],
      8221: [0, 0.69444, 0, 0, 0.5],
      8224: [0.19444, 0.69444, 0, 0, 0.44445],
      8225: [0.19444, 0.69444, 0, 0, 0.44445],
      8230: [0, 0.123, 0, 0, 1.172],
      8242: [0, 0.55556, 0, 0, 0.275],
      8407: [0, 0.71444, 0.15382, 0, 0.5],
      8463: [0, 0.68889, 0, 0, 0.54028],
      8465: [0, 0.69444, 0, 0, 0.72222],
      8467: [0, 0.69444, 0, 0.11111, 0.41667],
      8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
      8476: [0, 0.69444, 0, 0, 0.72222],
      8501: [0, 0.69444, 0, 0, 0.61111],
      8592: [-0.13313, 0.36687, 0, 0, 1],
      8593: [0.19444, 0.69444, 0, 0, 0.5],
      8594: [-0.13313, 0.36687, 0, 0, 1],
      8595: [0.19444, 0.69444, 0, 0, 0.5],
      8596: [-0.13313, 0.36687, 0, 0, 1],
      8597: [0.25, 0.75, 0, 0, 0.5],
      8598: [0.19444, 0.69444, 0, 0, 1],
      8599: [0.19444, 0.69444, 0, 0, 1],
      8600: [0.19444, 0.69444, 0, 0, 1],
      8601: [0.19444, 0.69444, 0, 0, 1],
      8614: [0.011, 0.511, 0, 0, 1],
      8617: [0.011, 0.511, 0, 0, 1.126],
      8618: [0.011, 0.511, 0, 0, 1.126],
      8636: [-0.13313, 0.36687, 0, 0, 1],
      8637: [-0.13313, 0.36687, 0, 0, 1],
      8640: [-0.13313, 0.36687, 0, 0, 1],
      8641: [-0.13313, 0.36687, 0, 0, 1],
      8652: [0.011, 0.671, 0, 0, 1],
      8656: [-0.13313, 0.36687, 0, 0, 1],
      8657: [0.19444, 0.69444, 0, 0, 0.61111],
      8658: [-0.13313, 0.36687, 0, 0, 1],
      8659: [0.19444, 0.69444, 0, 0, 0.61111],
      8660: [-0.13313, 0.36687, 0, 0, 1],
      8661: [0.25, 0.75, 0, 0, 0.61111],
      8704: [0, 0.69444, 0, 0, 0.55556],
      8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
      8707: [0, 0.69444, 0, 0, 0.55556],
      8709: [0.05556, 0.75, 0, 0, 0.5],
      8711: [0, 0.68333, 0, 0, 0.83334],
      8712: [0.0391, 0.5391, 0, 0, 0.66667],
      8715: [0.0391, 0.5391, 0, 0, 0.66667],
      8722: [0.08333, 0.58333, 0, 0, 0.77778],
      8723: [0.08333, 0.58333, 0, 0, 0.77778],
      8725: [0.25, 0.75, 0, 0, 0.5],
      8726: [0.25, 0.75, 0, 0, 0.5],
      8727: [-0.03472, 0.46528, 0, 0, 0.5],
      8728: [-0.05555, 0.44445, 0, 0, 0.5],
      8729: [-0.05555, 0.44445, 0, 0, 0.5],
      8730: [0.2, 0.8, 0, 0, 0.83334],
      8733: [0, 0.43056, 0, 0, 0.77778],
      8734: [0, 0.43056, 0, 0, 1],
      8736: [0, 0.69224, 0, 0, 0.72222],
      8739: [0.25, 0.75, 0, 0, 0.27778],
      8741: [0.25, 0.75, 0, 0, 0.5],
      8743: [0, 0.55556, 0, 0, 0.66667],
      8744: [0, 0.55556, 0, 0, 0.66667],
      8745: [0, 0.55556, 0, 0, 0.66667],
      8746: [0, 0.55556, 0, 0, 0.66667],
      8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
      8764: [-0.13313, 0.36687, 0, 0, 0.77778],
      8768: [0.19444, 0.69444, 0, 0, 0.27778],
      8771: [-0.03625, 0.46375, 0, 0, 0.77778],
      8773: [-0.022, 0.589, 0, 0, 0.778],
      8776: [-0.01688, 0.48312, 0, 0, 0.77778],
      8781: [-0.03625, 0.46375, 0, 0, 0.77778],
      8784: [-0.133, 0.673, 0, 0, 0.778],
      8801: [-0.03625, 0.46375, 0, 0, 0.77778],
      8804: [0.13597, 0.63597, 0, 0, 0.77778],
      8805: [0.13597, 0.63597, 0, 0, 0.77778],
      8810: [0.0391, 0.5391, 0, 0, 1],
      8811: [0.0391, 0.5391, 0, 0, 1],
      8826: [0.0391, 0.5391, 0, 0, 0.77778],
      8827: [0.0391, 0.5391, 0, 0, 0.77778],
      8834: [0.0391, 0.5391, 0, 0, 0.77778],
      8835: [0.0391, 0.5391, 0, 0, 0.77778],
      8838: [0.13597, 0.63597, 0, 0, 0.77778],
      8839: [0.13597, 0.63597, 0, 0, 0.77778],
      8846: [0, 0.55556, 0, 0, 0.66667],
      8849: [0.13597, 0.63597, 0, 0, 0.77778],
      8850: [0.13597, 0.63597, 0, 0, 0.77778],
      8851: [0, 0.55556, 0, 0, 0.66667],
      8852: [0, 0.55556, 0, 0, 0.66667],
      8853: [0.08333, 0.58333, 0, 0, 0.77778],
      8854: [0.08333, 0.58333, 0, 0, 0.77778],
      8855: [0.08333, 0.58333, 0, 0, 0.77778],
      8856: [0.08333, 0.58333, 0, 0, 0.77778],
      8857: [0.08333, 0.58333, 0, 0, 0.77778],
      8866: [0, 0.69444, 0, 0, 0.61111],
      8867: [0, 0.69444, 0, 0, 0.61111],
      8868: [0, 0.69444, 0, 0, 0.77778],
      8869: [0, 0.69444, 0, 0, 0.77778],
      8872: [0.249, 0.75, 0, 0, 0.867],
      8900: [-0.05555, 0.44445, 0, 0, 0.5],
      8901: [-0.05555, 0.44445, 0, 0, 0.27778],
      8902: [-0.03472, 0.46528, 0, 0, 0.5],
      8904: [0.005, 0.505, 0, 0, 0.9],
      8942: [0.03, 0.903, 0, 0, 0.278],
      8943: [-0.19, 0.313, 0, 0, 1.172],
      8945: [-0.1, 0.823, 0, 0, 1.282],
      8968: [0.25, 0.75, 0, 0, 0.44445],
      8969: [0.25, 0.75, 0, 0, 0.44445],
      8970: [0.25, 0.75, 0, 0, 0.44445],
      8971: [0.25, 0.75, 0, 0, 0.44445],
      8994: [-0.14236, 0.35764, 0, 0, 1],
      8995: [-0.14236, 0.35764, 0, 0, 1],
      9136: [0.244, 0.744, 0, 0, 0.412],
      9137: [0.244, 0.745, 0, 0, 0.412],
      9651: [0.19444, 0.69444, 0, 0, 0.88889],
      9657: [-0.03472, 0.46528, 0, 0, 0.5],
      9661: [0.19444, 0.69444, 0, 0, 0.88889],
      9667: [-0.03472, 0.46528, 0, 0, 0.5],
      9711: [0.19444, 0.69444, 0, 0, 1],
      9824: [0.12963, 0.69444, 0, 0, 0.77778],
      9825: [0.12963, 0.69444, 0, 0, 0.77778],
      9826: [0.12963, 0.69444, 0, 0, 0.77778],
      9827: [0.12963, 0.69444, 0, 0, 0.77778],
      9837: [0, 0.75, 0, 0, 0.38889],
      9838: [0.19444, 0.69444, 0, 0, 0.38889],
      9839: [0.19444, 0.69444, 0, 0, 0.38889],
      10216: [0.25, 0.75, 0, 0, 0.38889],
      10217: [0.25, 0.75, 0, 0, 0.38889],
      10222: [0.244, 0.744, 0, 0, 0.412],
      10223: [0.244, 0.745, 0, 0, 0.412],
      10229: [0.011, 0.511, 0, 0, 1.609],
      10230: [0.011, 0.511, 0, 0, 1.638],
      10231: [0.011, 0.511, 0, 0, 1.859],
      10232: [0.024, 0.525, 0, 0, 1.609],
      10233: [0.024, 0.525, 0, 0, 1.638],
      10234: [0.024, 0.525, 0, 0, 1.858],
      10236: [0.011, 0.511, 0, 0, 1.638],
      10815: [0, 0.68333, 0, 0, 0.75],
      10927: [0.13597, 0.63597, 0, 0, 0.77778],
      10928: [0.13597, 0.63597, 0, 0, 0.77778],
      57376: [0.19444, 0.69444, 0, 0, 0],
    },
    "Math-BoldItalic": {
      32: [0, 0, 0, 0, 0.25],
      48: [0, 0.44444, 0, 0, 0.575],
      49: [0, 0.44444, 0, 0, 0.575],
      50: [0, 0.44444, 0, 0, 0.575],
      51: [0.19444, 0.44444, 0, 0, 0.575],
      52: [0.19444, 0.44444, 0, 0, 0.575],
      53: [0.19444, 0.44444, 0, 0, 0.575],
      54: [0, 0.64444, 0, 0, 0.575],
      55: [0.19444, 0.44444, 0, 0, 0.575],
      56: [0, 0.64444, 0, 0, 0.575],
      57: [0.19444, 0.44444, 0, 0, 0.575],
      65: [0, 0.68611, 0, 0, 0.86944],
      66: [0, 0.68611, 0.04835, 0, 0.8664],
      67: [0, 0.68611, 0.06979, 0, 0.81694],
      68: [0, 0.68611, 0.03194, 0, 0.93812],
      69: [0, 0.68611, 0.05451, 0, 0.81007],
      70: [0, 0.68611, 0.15972, 0, 0.68889],
      71: [0, 0.68611, 0, 0, 0.88673],
      72: [0, 0.68611, 0.08229, 0, 0.98229],
      73: [0, 0.68611, 0.07778, 0, 0.51111],
      74: [0, 0.68611, 0.10069, 0, 0.63125],
      75: [0, 0.68611, 0.06979, 0, 0.97118],
      76: [0, 0.68611, 0, 0, 0.75555],
      77: [0, 0.68611, 0.11424, 0, 1.14201],
      78: [0, 0.68611, 0.11424, 0, 0.95034],
      79: [0, 0.68611, 0.03194, 0, 0.83666],
      80: [0, 0.68611, 0.15972, 0, 0.72309],
      81: [0.19444, 0.68611, 0, 0, 0.86861],
      82: [0, 0.68611, 0.00421, 0, 0.87235],
      83: [0, 0.68611, 0.05382, 0, 0.69271],
      84: [0, 0.68611, 0.15972, 0, 0.63663],
      85: [0, 0.68611, 0.11424, 0, 0.80027],
      86: [0, 0.68611, 0.25555, 0, 0.67778],
      87: [0, 0.68611, 0.15972, 0, 1.09305],
      88: [0, 0.68611, 0.07778, 0, 0.94722],
      89: [0, 0.68611, 0.25555, 0, 0.67458],
      90: [0, 0.68611, 0.06979, 0, 0.77257],
      97: [0, 0.44444, 0, 0, 0.63287],
      98: [0, 0.69444, 0, 0, 0.52083],
      99: [0, 0.44444, 0, 0, 0.51342],
      100: [0, 0.69444, 0, 0, 0.60972],
      101: [0, 0.44444, 0, 0, 0.55361],
      102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
      103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
      104: [0, 0.69444, 0, 0, 0.66759],
      105: [0, 0.69326, 0, 0, 0.4048],
      106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
      107: [0, 0.69444, 0.01852, 0, 0.6037],
      108: [0, 0.69444, 0.0088, 0, 0.34815],
      109: [0, 0.44444, 0, 0, 1.0324],
      110: [0, 0.44444, 0, 0, 0.71296],
      111: [0, 0.44444, 0, 0, 0.58472],
      112: [0.19444, 0.44444, 0, 0, 0.60092],
      113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
      114: [0, 0.44444, 0.03194, 0, 0.5287],
      115: [0, 0.44444, 0, 0, 0.53125],
      116: [0, 0.63492, 0, 0, 0.41528],
      117: [0, 0.44444, 0, 0, 0.68102],
      118: [0, 0.44444, 0.03704, 0, 0.56666],
      119: [0, 0.44444, 0.02778, 0, 0.83148],
      120: [0, 0.44444, 0, 0, 0.65903],
      121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
      122: [0, 0.44444, 0.04213, 0, 0.55509],
      160: [0, 0, 0, 0, 0.25],
      915: [0, 0.68611, 0.15972, 0, 0.65694],
      916: [0, 0.68611, 0, 0, 0.95833],
      920: [0, 0.68611, 0.03194, 0, 0.86722],
      923: [0, 0.68611, 0, 0, 0.80555],
      926: [0, 0.68611, 0.07458, 0, 0.84125],
      928: [0, 0.68611, 0.08229, 0, 0.98229],
      931: [0, 0.68611, 0.05451, 0, 0.88507],
      933: [0, 0.68611, 0.15972, 0, 0.67083],
      934: [0, 0.68611, 0, 0, 0.76666],
      936: [0, 0.68611, 0.11653, 0, 0.71402],
      937: [0, 0.68611, 0.04835, 0, 0.8789],
      945: [0, 0.44444, 0, 0, 0.76064],
      946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
      947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
      948: [0, 0.69444, 0.03819, 0, 0.52222],
      949: [0, 0.44444, 0, 0, 0.52882],
      950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
      951: [0.19444, 0.44444, 0.03704, 0, 0.6],
      952: [0, 0.69444, 0.03194, 0, 0.5618],
      953: [0, 0.44444, 0, 0, 0.41204],
      954: [0, 0.44444, 0, 0, 0.66759],
      955: [0, 0.69444, 0, 0, 0.67083],
      956: [0.19444, 0.44444, 0, 0, 0.70787],
      957: [0, 0.44444, 0.06898, 0, 0.57685],
      958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
      959: [0, 0.44444, 0, 0, 0.58472],
      960: [0, 0.44444, 0.03704, 0, 0.68241],
      961: [0.19444, 0.44444, 0, 0, 0.6118],
      962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
      963: [0, 0.44444, 0.03704, 0, 0.68588],
      964: [0, 0.44444, 0.13472, 0, 0.52083],
      965: [0, 0.44444, 0.03704, 0, 0.63055],
      966: [0.19444, 0.44444, 0, 0, 0.74722],
      967: [0.19444, 0.44444, 0, 0, 0.71805],
      968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
      969: [0, 0.44444, 0.03704, 0, 0.71782],
      977: [0, 0.69444, 0, 0, 0.69155],
      981: [0.19444, 0.69444, 0, 0, 0.7125],
      982: [0, 0.44444, 0.03194, 0, 0.975],
      1009: [0.19444, 0.44444, 0, 0, 0.6118],
      1013: [0, 0.44444, 0, 0, 0.48333],
      57649: [0, 0.44444, 0, 0, 0.39352],
      57911: [0.19444, 0.44444, 0, 0, 0.43889],
    },
    "Math-Italic": {
      32: [0, 0, 0, 0, 0.25],
      48: [0, 0.43056, 0, 0, 0.5],
      49: [0, 0.43056, 0, 0, 0.5],
      50: [0, 0.43056, 0, 0, 0.5],
      51: [0.19444, 0.43056, 0, 0, 0.5],
      52: [0.19444, 0.43056, 0, 0, 0.5],
      53: [0.19444, 0.43056, 0, 0, 0.5],
      54: [0, 0.64444, 0, 0, 0.5],
      55: [0.19444, 0.43056, 0, 0, 0.5],
      56: [0, 0.64444, 0, 0, 0.5],
      57: [0.19444, 0.43056, 0, 0, 0.5],
      65: [0, 0.68333, 0, 0.13889, 0.75],
      66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
      67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
      68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
      69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
      70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
      71: [0, 0.68333, 0, 0.08334, 0.78625],
      72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
      73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
      74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
      75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
      76: [0, 0.68333, 0, 0.02778, 0.68056],
      77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
      78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
      79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
      80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
      81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
      82: [0, 0.68333, 0.00773, 0.08334, 0.75929],
      83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
      84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
      85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
      86: [0, 0.68333, 0.22222, 0, 0.58333],
      87: [0, 0.68333, 0.13889, 0, 0.94445],
      88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
      89: [0, 0.68333, 0.22222, 0, 0.58056],
      90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
      97: [0, 0.43056, 0, 0, 0.52859],
      98: [0, 0.69444, 0, 0, 0.42917],
      99: [0, 0.43056, 0, 0.05556, 0.43276],
      100: [0, 0.69444, 0, 0.16667, 0.52049],
      101: [0, 0.43056, 0, 0.05556, 0.46563],
      102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
      103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
      104: [0, 0.69444, 0, 0, 0.57616],
      105: [0, 0.65952, 0, 0, 0.34451],
      106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
      107: [0, 0.69444, 0.03148, 0, 0.5206],
      108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
      109: [0, 0.43056, 0, 0, 0.87801],
      110: [0, 0.43056, 0, 0, 0.60023],
      111: [0, 0.43056, 0, 0.05556, 0.48472],
      112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
      113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
      114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
      115: [0, 0.43056, 0, 0.05556, 0.46875],
      116: [0, 0.61508, 0, 0.08334, 0.36111],
      117: [0, 0.43056, 0, 0.02778, 0.57246],
      118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
      119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
      120: [0, 0.43056, 0, 0.02778, 0.57153],
      121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
      122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
      160: [0, 0, 0, 0, 0.25],
      915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
      916: [0, 0.68333, 0, 0.16667, 0.83334],
      920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
      923: [0, 0.68333, 0, 0.16667, 0.69445],
      926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
      928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
      931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
      933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
      934: [0, 0.68333, 0, 0.08334, 0.66667],
      936: [0, 0.68333, 0.11, 0.05556, 0.61222],
      937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
      945: [0, 0.43056, 0.0037, 0.02778, 0.6397],
      946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
      947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
      948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
      949: [0, 0.43056, 0, 0.08334, 0.46632],
      950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
      951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
      952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
      953: [0, 0.43056, 0, 0.05556, 0.35394],
      954: [0, 0.43056, 0, 0, 0.57616],
      955: [0, 0.69444, 0, 0, 0.58334],
      956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
      957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
      958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
      959: [0, 0.43056, 0, 0.05556, 0.48472],
      960: [0, 0.43056, 0.03588, 0, 0.57003],
      961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
      962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
      963: [0, 0.43056, 0.03588, 0, 0.57141],
      964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
      965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
      966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
      967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
      968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
      969: [0, 0.43056, 0.03588, 0, 0.62245],
      977: [0, 0.69444, 0, 0.08334, 0.59144],
      981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
      982: [0, 0.43056, 0.02778, 0, 0.82813],
      1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
      1013: [0, 0.43056, 0, 0.05556, 0.4059],
      57649: [0, 0.43056, 0, 0.02778, 0.32246],
      57911: [0.19444, 0.43056, 0, 0.08334, 0.38403],
    },
    "SansSerif-Bold": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0, 0, 0.36667],
      34: [0, 0.69444, 0, 0, 0.55834],
      35: [0.19444, 0.69444, 0, 0, 0.91667],
      36: [0.05556, 0.75, 0, 0, 0.55],
      37: [0.05556, 0.75, 0, 0, 1.02912],
      38: [0, 0.69444, 0, 0, 0.83056],
      39: [0, 0.69444, 0, 0, 0.30556],
      40: [0.25, 0.75, 0, 0, 0.42778],
      41: [0.25, 0.75, 0, 0, 0.42778],
      42: [0, 0.75, 0, 0, 0.55],
      43: [0.11667, 0.61667, 0, 0, 0.85556],
      44: [0.10556, 0.13056, 0, 0, 0.30556],
      45: [0, 0.45833, 0, 0, 0.36667],
      46: [0, 0.13056, 0, 0, 0.30556],
      47: [0.25, 0.75, 0, 0, 0.55],
      48: [0, 0.69444, 0, 0, 0.55],
      49: [0, 0.69444, 0, 0, 0.55],
      50: [0, 0.69444, 0, 0, 0.55],
      51: [0, 0.69444, 0, 0, 0.55],
      52: [0, 0.69444, 0, 0, 0.55],
      53: [0, 0.69444, 0, 0, 0.55],
      54: [0, 0.69444, 0, 0, 0.55],
      55: [0, 0.69444, 0, 0, 0.55],
      56: [0, 0.69444, 0, 0, 0.55],
      57: [0, 0.69444, 0, 0, 0.55],
      58: [0, 0.45833, 0, 0, 0.30556],
      59: [0.10556, 0.45833, 0, 0, 0.30556],
      61: [-0.09375, 0.40625, 0, 0, 0.85556],
      63: [0, 0.69444, 0, 0, 0.51945],
      64: [0, 0.69444, 0, 0, 0.73334],
      65: [0, 0.69444, 0, 0, 0.73334],
      66: [0, 0.69444, 0, 0, 0.73334],
      67: [0, 0.69444, 0, 0, 0.70278],
      68: [0, 0.69444, 0, 0, 0.79445],
      69: [0, 0.69444, 0, 0, 0.64167],
      70: [0, 0.69444, 0, 0, 0.61111],
      71: [0, 0.69444, 0, 0, 0.73334],
      72: [0, 0.69444, 0, 0, 0.79445],
      73: [0, 0.69444, 0, 0, 0.33056],
      74: [0, 0.69444, 0, 0, 0.51945],
      75: [0, 0.69444, 0, 0, 0.76389],
      76: [0, 0.69444, 0, 0, 0.58056],
      77: [0, 0.69444, 0, 0, 0.97778],
      78: [0, 0.69444, 0, 0, 0.79445],
      79: [0, 0.69444, 0, 0, 0.79445],
      80: [0, 0.69444, 0, 0, 0.70278],
      81: [0.10556, 0.69444, 0, 0, 0.79445],
      82: [0, 0.69444, 0, 0, 0.70278],
      83: [0, 0.69444, 0, 0, 0.61111],
      84: [0, 0.69444, 0, 0, 0.73334],
      85: [0, 0.69444, 0, 0, 0.76389],
      86: [0, 0.69444, 0.01528, 0, 0.73334],
      87: [0, 0.69444, 0.01528, 0, 1.03889],
      88: [0, 0.69444, 0, 0, 0.73334],
      89: [0, 0.69444, 0.0275, 0, 0.73334],
      90: [0, 0.69444, 0, 0, 0.67223],
      91: [0.25, 0.75, 0, 0, 0.34306],
      93: [0.25, 0.75, 0, 0, 0.34306],
      94: [0, 0.69444, 0, 0, 0.55],
      95: [0.35, 0.10833, 0.03056, 0, 0.55],
      97: [0, 0.45833, 0, 0, 0.525],
      98: [0, 0.69444, 0, 0, 0.56111],
      99: [0, 0.45833, 0, 0, 0.48889],
      100: [0, 0.69444, 0, 0, 0.56111],
      101: [0, 0.45833, 0, 0, 0.51111],
      102: [0, 0.69444, 0.07639, 0, 0.33611],
      103: [0.19444, 0.45833, 0.01528, 0, 0.55],
      104: [0, 0.69444, 0, 0, 0.56111],
      105: [0, 0.69444, 0, 0, 0.25556],
      106: [0.19444, 0.69444, 0, 0, 0.28611],
      107: [0, 0.69444, 0, 0, 0.53056],
      108: [0, 0.69444, 0, 0, 0.25556],
      109: [0, 0.45833, 0, 0, 0.86667],
      110: [0, 0.45833, 0, 0, 0.56111],
      111: [0, 0.45833, 0, 0, 0.55],
      112: [0.19444, 0.45833, 0, 0, 0.56111],
      113: [0.19444, 0.45833, 0, 0, 0.56111],
      114: [0, 0.45833, 0.01528, 0, 0.37222],
      115: [0, 0.45833, 0, 0, 0.42167],
      116: [0, 0.58929, 0, 0, 0.40417],
      117: [0, 0.45833, 0, 0, 0.56111],
      118: [0, 0.45833, 0.01528, 0, 0.5],
      119: [0, 0.45833, 0.01528, 0, 0.74445],
      120: [0, 0.45833, 0, 0, 0.5],
      121: [0.19444, 0.45833, 0.01528, 0, 0.5],
      122: [0, 0.45833, 0, 0, 0.47639],
      126: [0.35, 0.34444, 0, 0, 0.55],
      160: [0, 0, 0, 0, 0.25],
      168: [0, 0.69444, 0, 0, 0.55],
      176: [0, 0.69444, 0, 0, 0.73334],
      180: [0, 0.69444, 0, 0, 0.55],
      184: [0.17014, 0, 0, 0, 0.48889],
      305: [0, 0.45833, 0, 0, 0.25556],
      567: [0.19444, 0.45833, 0, 0, 0.28611],
      710: [0, 0.69444, 0, 0, 0.55],
      711: [0, 0.63542, 0, 0, 0.55],
      713: [0, 0.63778, 0, 0, 0.55],
      728: [0, 0.69444, 0, 0, 0.55],
      729: [0, 0.69444, 0, 0, 0.30556],
      730: [0, 0.69444, 0, 0, 0.73334],
      732: [0, 0.69444, 0, 0, 0.55],
      733: [0, 0.69444, 0, 0, 0.55],
      915: [0, 0.69444, 0, 0, 0.58056],
      916: [0, 0.69444, 0, 0, 0.91667],
      920: [0, 0.69444, 0, 0, 0.85556],
      923: [0, 0.69444, 0, 0, 0.67223],
      926: [0, 0.69444, 0, 0, 0.73334],
      928: [0, 0.69444, 0, 0, 0.79445],
      931: [0, 0.69444, 0, 0, 0.79445],
      933: [0, 0.69444, 0, 0, 0.85556],
      934: [0, 0.69444, 0, 0, 0.79445],
      936: [0, 0.69444, 0, 0, 0.85556],
      937: [0, 0.69444, 0, 0, 0.79445],
      8211: [0, 0.45833, 0.03056, 0, 0.55],
      8212: [0, 0.45833, 0.03056, 0, 1.10001],
      8216: [0, 0.69444, 0, 0, 0.30556],
      8217: [0, 0.69444, 0, 0, 0.30556],
      8220: [0, 0.69444, 0, 0, 0.55834],
      8221: [0, 0.69444, 0, 0, 0.55834],
    },
    "SansSerif-Italic": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0.05733, 0, 0.31945],
      34: [0, 0.69444, 0.00316, 0, 0.5],
      35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
      36: [0.05556, 0.75, 0.11156, 0, 0.5],
      37: [0.05556, 0.75, 0.03126, 0, 0.83334],
      38: [0, 0.69444, 0.03058, 0, 0.75834],
      39: [0, 0.69444, 0.07816, 0, 0.27778],
      40: [0.25, 0.75, 0.13164, 0, 0.38889],
      41: [0.25, 0.75, 0.02536, 0, 0.38889],
      42: [0, 0.75, 0.11775, 0, 0.5],
      43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
      44: [0.125, 0.08333, 0, 0, 0.27778],
      45: [0, 0.44444, 0.01946, 0, 0.33333],
      46: [0, 0.08333, 0, 0, 0.27778],
      47: [0.25, 0.75, 0.13164, 0, 0.5],
      48: [0, 0.65556, 0.11156, 0, 0.5],
      49: [0, 0.65556, 0.11156, 0, 0.5],
      50: [0, 0.65556, 0.11156, 0, 0.5],
      51: [0, 0.65556, 0.11156, 0, 0.5],
      52: [0, 0.65556, 0.11156, 0, 0.5],
      53: [0, 0.65556, 0.11156, 0, 0.5],
      54: [0, 0.65556, 0.11156, 0, 0.5],
      55: [0, 0.65556, 0.11156, 0, 0.5],
      56: [0, 0.65556, 0.11156, 0, 0.5],
      57: [0, 0.65556, 0.11156, 0, 0.5],
      58: [0, 0.44444, 0.02502, 0, 0.27778],
      59: [0.125, 0.44444, 0.02502, 0, 0.27778],
      61: [-0.13, 0.37, 0.05087, 0, 0.77778],
      63: [0, 0.69444, 0.11809, 0, 0.47222],
      64: [0, 0.69444, 0.07555, 0, 0.66667],
      65: [0, 0.69444, 0, 0, 0.66667],
      66: [0, 0.69444, 0.08293, 0, 0.66667],
      67: [0, 0.69444, 0.11983, 0, 0.63889],
      68: [0, 0.69444, 0.07555, 0, 0.72223],
      69: [0, 0.69444, 0.11983, 0, 0.59722],
      70: [0, 0.69444, 0.13372, 0, 0.56945],
      71: [0, 0.69444, 0.11983, 0, 0.66667],
      72: [0, 0.69444, 0.08094, 0, 0.70834],
      73: [0, 0.69444, 0.13372, 0, 0.27778],
      74: [0, 0.69444, 0.08094, 0, 0.47222],
      75: [0, 0.69444, 0.11983, 0, 0.69445],
      76: [0, 0.69444, 0, 0, 0.54167],
      77: [0, 0.69444, 0.08094, 0, 0.875],
      78: [0, 0.69444, 0.08094, 0, 0.70834],
      79: [0, 0.69444, 0.07555, 0, 0.73611],
      80: [0, 0.69444, 0.08293, 0, 0.63889],
      81: [0.125, 0.69444, 0.07555, 0, 0.73611],
      82: [0, 0.69444, 0.08293, 0, 0.64584],
      83: [0, 0.69444, 0.09205, 0, 0.55556],
      84: [0, 0.69444, 0.13372, 0, 0.68056],
      85: [0, 0.69444, 0.08094, 0, 0.6875],
      86: [0, 0.69444, 0.1615, 0, 0.66667],
      87: [0, 0.69444, 0.1615, 0, 0.94445],
      88: [0, 0.69444, 0.13372, 0, 0.66667],
      89: [0, 0.69444, 0.17261, 0, 0.66667],
      90: [0, 0.69444, 0.11983, 0, 0.61111],
      91: [0.25, 0.75, 0.15942, 0, 0.28889],
      93: [0.25, 0.75, 0.08719, 0, 0.28889],
      94: [0, 0.69444, 0.0799, 0, 0.5],
      95: [0.35, 0.09444, 0.08616, 0, 0.5],
      97: [0, 0.44444, 0.00981, 0, 0.48056],
      98: [0, 0.69444, 0.03057, 0, 0.51667],
      99: [0, 0.44444, 0.08336, 0, 0.44445],
      100: [0, 0.69444, 0.09483, 0, 0.51667],
      101: [0, 0.44444, 0.06778, 0, 0.44445],
      102: [0, 0.69444, 0.21705, 0, 0.30556],
      103: [0.19444, 0.44444, 0.10836, 0, 0.5],
      104: [0, 0.69444, 0.01778, 0, 0.51667],
      105: [0, 0.67937, 0.09718, 0, 0.23889],
      106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
      107: [0, 0.69444, 0.08336, 0, 0.48889],
      108: [0, 0.69444, 0.09483, 0, 0.23889],
      109: [0, 0.44444, 0.01778, 0, 0.79445],
      110: [0, 0.44444, 0.01778, 0, 0.51667],
      111: [0, 0.44444, 0.06613, 0, 0.5],
      112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
      113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
      114: [0, 0.44444, 0.10836, 0, 0.34167],
      115: [0, 0.44444, 0.0778, 0, 0.38333],
      116: [0, 0.57143, 0.07225, 0, 0.36111],
      117: [0, 0.44444, 0.04169, 0, 0.51667],
      118: [0, 0.44444, 0.10836, 0, 0.46111],
      119: [0, 0.44444, 0.10836, 0, 0.68334],
      120: [0, 0.44444, 0.09169, 0, 0.46111],
      121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
      122: [0, 0.44444, 0.08752, 0, 0.43472],
      126: [0.35, 0.32659, 0.08826, 0, 0.5],
      160: [0, 0, 0, 0, 0.25],
      168: [0, 0.67937, 0.06385, 0, 0.5],
      176: [0, 0.69444, 0, 0, 0.73752],
      184: [0.17014, 0, 0, 0, 0.44445],
      305: [0, 0.44444, 0.04169, 0, 0.23889],
      567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
      710: [0, 0.69444, 0.0799, 0, 0.5],
      711: [0, 0.63194, 0.08432, 0, 0.5],
      713: [0, 0.60889, 0.08776, 0, 0.5],
      714: [0, 0.69444, 0.09205, 0, 0.5],
      715: [0, 0.69444, 0, 0, 0.5],
      728: [0, 0.69444, 0.09483, 0, 0.5],
      729: [0, 0.67937, 0.07774, 0, 0.27778],
      730: [0, 0.69444, 0, 0, 0.73752],
      732: [0, 0.67659, 0.08826, 0, 0.5],
      733: [0, 0.69444, 0.09205, 0, 0.5],
      915: [0, 0.69444, 0.13372, 0, 0.54167],
      916: [0, 0.69444, 0, 0, 0.83334],
      920: [0, 0.69444, 0.07555, 0, 0.77778],
      923: [0, 0.69444, 0, 0, 0.61111],
      926: [0, 0.69444, 0.12816, 0, 0.66667],
      928: [0, 0.69444, 0.08094, 0, 0.70834],
      931: [0, 0.69444, 0.11983, 0, 0.72222],
      933: [0, 0.69444, 0.09031, 0, 0.77778],
      934: [0, 0.69444, 0.04603, 0, 0.72222],
      936: [0, 0.69444, 0.09031, 0, 0.77778],
      937: [0, 0.69444, 0.08293, 0, 0.72222],
      8211: [0, 0.44444, 0.08616, 0, 0.5],
      8212: [0, 0.44444, 0.08616, 0, 1],
      8216: [0, 0.69444, 0.07816, 0, 0.27778],
      8217: [0, 0.69444, 0.07816, 0, 0.27778],
      8220: [0, 0.69444, 0.14205, 0, 0.5],
      8221: [0, 0.69444, 0.00316, 0, 0.5],
    },
    "SansSerif-Regular": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0, 0, 0.31945],
      34: [0, 0.69444, 0, 0, 0.5],
      35: [0.19444, 0.69444, 0, 0, 0.83334],
      36: [0.05556, 0.75, 0, 0, 0.5],
      37: [0.05556, 0.75, 0, 0, 0.83334],
      38: [0, 0.69444, 0, 0, 0.75834],
      39: [0, 0.69444, 0, 0, 0.27778],
      40: [0.25, 0.75, 0, 0, 0.38889],
      41: [0.25, 0.75, 0, 0, 0.38889],
      42: [0, 0.75, 0, 0, 0.5],
      43: [0.08333, 0.58333, 0, 0, 0.77778],
      44: [0.125, 0.08333, 0, 0, 0.27778],
      45: [0, 0.44444, 0, 0, 0.33333],
      46: [0, 0.08333, 0, 0, 0.27778],
      47: [0.25, 0.75, 0, 0, 0.5],
      48: [0, 0.65556, 0, 0, 0.5],
      49: [0, 0.65556, 0, 0, 0.5],
      50: [0, 0.65556, 0, 0, 0.5],
      51: [0, 0.65556, 0, 0, 0.5],
      52: [0, 0.65556, 0, 0, 0.5],
      53: [0, 0.65556, 0, 0, 0.5],
      54: [0, 0.65556, 0, 0, 0.5],
      55: [0, 0.65556, 0, 0, 0.5],
      56: [0, 0.65556, 0, 0, 0.5],
      57: [0, 0.65556, 0, 0, 0.5],
      58: [0, 0.44444, 0, 0, 0.27778],
      59: [0.125, 0.44444, 0, 0, 0.27778],
      61: [-0.13, 0.37, 0, 0, 0.77778],
      63: [0, 0.69444, 0, 0, 0.47222],
      64: [0, 0.69444, 0, 0, 0.66667],
      65: [0, 0.69444, 0, 0, 0.66667],
      66: [0, 0.69444, 0, 0, 0.66667],
      67: [0, 0.69444, 0, 0, 0.63889],
      68: [0, 0.69444, 0, 0, 0.72223],
      69: [0, 0.69444, 0, 0, 0.59722],
      70: [0, 0.69444, 0, 0, 0.56945],
      71: [0, 0.69444, 0, 0, 0.66667],
      72: [0, 0.69444, 0, 0, 0.70834],
      73: [0, 0.69444, 0, 0, 0.27778],
      74: [0, 0.69444, 0, 0, 0.47222],
      75: [0, 0.69444, 0, 0, 0.69445],
      76: [0, 0.69444, 0, 0, 0.54167],
      77: [0, 0.69444, 0, 0, 0.875],
      78: [0, 0.69444, 0, 0, 0.70834],
      79: [0, 0.69444, 0, 0, 0.73611],
      80: [0, 0.69444, 0, 0, 0.63889],
      81: [0.125, 0.69444, 0, 0, 0.73611],
      82: [0, 0.69444, 0, 0, 0.64584],
      83: [0, 0.69444, 0, 0, 0.55556],
      84: [0, 0.69444, 0, 0, 0.68056],
      85: [0, 0.69444, 0, 0, 0.6875],
      86: [0, 0.69444, 0.01389, 0, 0.66667],
      87: [0, 0.69444, 0.01389, 0, 0.94445],
      88: [0, 0.69444, 0, 0, 0.66667],
      89: [0, 0.69444, 0.025, 0, 0.66667],
      90: [0, 0.69444, 0, 0, 0.61111],
      91: [0.25, 0.75, 0, 0, 0.28889],
      93: [0.25, 0.75, 0, 0, 0.28889],
      94: [0, 0.69444, 0, 0, 0.5],
      95: [0.35, 0.09444, 0.02778, 0, 0.5],
      97: [0, 0.44444, 0, 0, 0.48056],
      98: [0, 0.69444, 0, 0, 0.51667],
      99: [0, 0.44444, 0, 0, 0.44445],
      100: [0, 0.69444, 0, 0, 0.51667],
      101: [0, 0.44444, 0, 0, 0.44445],
      102: [0, 0.69444, 0.06944, 0, 0.30556],
      103: [0.19444, 0.44444, 0.01389, 0, 0.5],
      104: [0, 0.69444, 0, 0, 0.51667],
      105: [0, 0.67937, 0, 0, 0.23889],
      106: [0.19444, 0.67937, 0, 0, 0.26667],
      107: [0, 0.69444, 0, 0, 0.48889],
      108: [0, 0.69444, 0, 0, 0.23889],
      109: [0, 0.44444, 0, 0, 0.79445],
      110: [0, 0.44444, 0, 0, 0.51667],
      111: [0, 0.44444, 0, 0, 0.5],
      112: [0.19444, 0.44444, 0, 0, 0.51667],
      113: [0.19444, 0.44444, 0, 0, 0.51667],
      114: [0, 0.44444, 0.01389, 0, 0.34167],
      115: [0, 0.44444, 0, 0, 0.38333],
      116: [0, 0.57143, 0, 0, 0.36111],
      117: [0, 0.44444, 0, 0, 0.51667],
      118: [0, 0.44444, 0.01389, 0, 0.46111],
      119: [0, 0.44444, 0.01389, 0, 0.68334],
      120: [0, 0.44444, 0, 0, 0.46111],
      121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
      122: [0, 0.44444, 0, 0, 0.43472],
      126: [0.35, 0.32659, 0, 0, 0.5],
      160: [0, 0, 0, 0, 0.25],
      168: [0, 0.67937, 0, 0, 0.5],
      176: [0, 0.69444, 0, 0, 0.66667],
      184: [0.17014, 0, 0, 0, 0.44445],
      305: [0, 0.44444, 0, 0, 0.23889],
      567: [0.19444, 0.44444, 0, 0, 0.26667],
      710: [0, 0.69444, 0, 0, 0.5],
      711: [0, 0.63194, 0, 0, 0.5],
      713: [0, 0.60889, 0, 0, 0.5],
      714: [0, 0.69444, 0, 0, 0.5],
      715: [0, 0.69444, 0, 0, 0.5],
      728: [0, 0.69444, 0, 0, 0.5],
      729: [0, 0.67937, 0, 0, 0.27778],
      730: [0, 0.69444, 0, 0, 0.66667],
      732: [0, 0.67659, 0, 0, 0.5],
      733: [0, 0.69444, 0, 0, 0.5],
      915: [0, 0.69444, 0, 0, 0.54167],
      916: [0, 0.69444, 0, 0, 0.83334],
      920: [0, 0.69444, 0, 0, 0.77778],
      923: [0, 0.69444, 0, 0, 0.61111],
      926: [0, 0.69444, 0, 0, 0.66667],
      928: [0, 0.69444, 0, 0, 0.70834],
      931: [0, 0.69444, 0, 0, 0.72222],
      933: [0, 0.69444, 0, 0, 0.77778],
      934: [0, 0.69444, 0, 0, 0.72222],
      936: [0, 0.69444, 0, 0, 0.77778],
      937: [0, 0.69444, 0, 0, 0.72222],
      8211: [0, 0.44444, 0.02778, 0, 0.5],
      8212: [0, 0.44444, 0.02778, 0, 1],
      8216: [0, 0.69444, 0, 0, 0.27778],
      8217: [0, 0.69444, 0, 0, 0.27778],
      8220: [0, 0.69444, 0, 0, 0.5],
      8221: [0, 0.69444, 0, 0, 0.5],
    },
    "Script-Regular": {
      32: [0, 0, 0, 0, 0.25],
      65: [0, 0.7, 0.22925, 0, 0.80253],
      66: [0, 0.7, 0.04087, 0, 0.90757],
      67: [0, 0.7, 0.1689, 0, 0.66619],
      68: [0, 0.7, 0.09371, 0, 0.77443],
      69: [0, 0.7, 0.18583, 0, 0.56162],
      70: [0, 0.7, 0.13634, 0, 0.89544],
      71: [0, 0.7, 0.17322, 0, 0.60961],
      72: [0, 0.7, 0.29694, 0, 0.96919],
      73: [0, 0.7, 0.19189, 0, 0.80907],
      74: [0.27778, 0.7, 0.19189, 0, 1.05159],
      75: [0, 0.7, 0.31259, 0, 0.91364],
      76: [0, 0.7, 0.19189, 0, 0.87373],
      77: [0, 0.7, 0.15981, 0, 1.08031],
      78: [0, 0.7, 0.3525, 0, 0.9015],
      79: [0, 0.7, 0.08078, 0, 0.73787],
      80: [0, 0.7, 0.08078, 0, 1.01262],
      81: [0, 0.7, 0.03305, 0, 0.88282],
      82: [0, 0.7, 0.06259, 0, 0.85],
      83: [0, 0.7, 0.19189, 0, 0.86767],
      84: [0, 0.7, 0.29087, 0, 0.74697],
      85: [0, 0.7, 0.25815, 0, 0.79996],
      86: [0, 0.7, 0.27523, 0, 0.62204],
      87: [0, 0.7, 0.27523, 0, 0.80532],
      88: [0, 0.7, 0.26006, 0, 0.94445],
      89: [0, 0.7, 0.2939, 0, 0.70961],
      90: [0, 0.7, 0.24037, 0, 0.8212],
      160: [0, 0, 0, 0, 0.25],
    },
    "Size1-Regular": {
      32: [0, 0, 0, 0, 0.25],
      40: [0.35001, 0.85, 0, 0, 0.45834],
      41: [0.35001, 0.85, 0, 0, 0.45834],
      47: [0.35001, 0.85, 0, 0, 0.57778],
      91: [0.35001, 0.85, 0, 0, 0.41667],
      92: [0.35001, 0.85, 0, 0, 0.57778],
      93: [0.35001, 0.85, 0, 0, 0.41667],
      123: [0.35001, 0.85, 0, 0, 0.58334],
      125: [0.35001, 0.85, 0, 0, 0.58334],
      160: [0, 0, 0, 0, 0.25],
      710: [0, 0.72222, 0, 0, 0.55556],
      732: [0, 0.72222, 0, 0, 0.55556],
      770: [0, 0.72222, 0, 0, 0.55556],
      771: [0, 0.72222, 0, 0, 0.55556],
      8214: [-99e-5, 0.601, 0, 0, 0.77778],
      8593: [1e-5, 0.6, 0, 0, 0.66667],
      8595: [1e-5, 0.6, 0, 0, 0.66667],
      8657: [1e-5, 0.6, 0, 0, 0.77778],
      8659: [1e-5, 0.6, 0, 0, 0.77778],
      8719: [0.25001, 0.75, 0, 0, 0.94445],
      8720: [0.25001, 0.75, 0, 0, 0.94445],
      8721: [0.25001, 0.75, 0, 0, 1.05556],
      8730: [0.35001, 0.85, 0, 0, 1],
      8739: [-0.00599, 0.606, 0, 0, 0.33333],
      8741: [-0.00599, 0.606, 0, 0, 0.55556],
      8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
      8748: [0.306, 0.805, 0.19445, 0, 0.47222],
      8749: [0.306, 0.805, 0.19445, 0, 0.47222],
      8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
      8896: [0.25001, 0.75, 0, 0, 0.83334],
      8897: [0.25001, 0.75, 0, 0, 0.83334],
      8898: [0.25001, 0.75, 0, 0, 0.83334],
      8899: [0.25001, 0.75, 0, 0, 0.83334],
      8968: [0.35001, 0.85, 0, 0, 0.47222],
      8969: [0.35001, 0.85, 0, 0, 0.47222],
      8970: [0.35001, 0.85, 0, 0, 0.47222],
      8971: [0.35001, 0.85, 0, 0, 0.47222],
      9168: [-99e-5, 0.601, 0, 0, 0.66667],
      10216: [0.35001, 0.85, 0, 0, 0.47222],
      10217: [0.35001, 0.85, 0, 0, 0.47222],
      10752: [0.25001, 0.75, 0, 0, 1.11111],
      10753: [0.25001, 0.75, 0, 0, 1.11111],
      10754: [0.25001, 0.75, 0, 0, 1.11111],
      10756: [0.25001, 0.75, 0, 0, 0.83334],
      10758: [0.25001, 0.75, 0, 0, 0.83334],
    },
    "Size2-Regular": {
      32: [0, 0, 0, 0, 0.25],
      40: [0.65002, 1.15, 0, 0, 0.59722],
      41: [0.65002, 1.15, 0, 0, 0.59722],
      47: [0.65002, 1.15, 0, 0, 0.81111],
      91: [0.65002, 1.15, 0, 0, 0.47222],
      92: [0.65002, 1.15, 0, 0, 0.81111],
      93: [0.65002, 1.15, 0, 0, 0.47222],
      123: [0.65002, 1.15, 0, 0, 0.66667],
      125: [0.65002, 1.15, 0, 0, 0.66667],
      160: [0, 0, 0, 0, 0.25],
      710: [0, 0.75, 0, 0, 1],
      732: [0, 0.75, 0, 0, 1],
      770: [0, 0.75, 0, 0, 1],
      771: [0, 0.75, 0, 0, 1],
      8719: [0.55001, 1.05, 0, 0, 1.27778],
      8720: [0.55001, 1.05, 0, 0, 1.27778],
      8721: [0.55001, 1.05, 0, 0, 1.44445],
      8730: [0.65002, 1.15, 0, 0, 1],
      8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
      8748: [0.862, 1.36, 0.44445, 0, 0.55556],
      8749: [0.862, 1.36, 0.44445, 0, 0.55556],
      8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
      8896: [0.55001, 1.05, 0, 0, 1.11111],
      8897: [0.55001, 1.05, 0, 0, 1.11111],
      8898: [0.55001, 1.05, 0, 0, 1.11111],
      8899: [0.55001, 1.05, 0, 0, 1.11111],
      8968: [0.65002, 1.15, 0, 0, 0.52778],
      8969: [0.65002, 1.15, 0, 0, 0.52778],
      8970: [0.65002, 1.15, 0, 0, 0.52778],
      8971: [0.65002, 1.15, 0, 0, 0.52778],
      10216: [0.65002, 1.15, 0, 0, 0.61111],
      10217: [0.65002, 1.15, 0, 0, 0.61111],
      10752: [0.55001, 1.05, 0, 0, 1.51112],
      10753: [0.55001, 1.05, 0, 0, 1.51112],
      10754: [0.55001, 1.05, 0, 0, 1.51112],
      10756: [0.55001, 1.05, 0, 0, 1.11111],
      10758: [0.55001, 1.05, 0, 0, 1.11111],
    },
    "Size3-Regular": {
      32: [0, 0, 0, 0, 0.25],
      40: [0.95003, 1.45, 0, 0, 0.73611],
      41: [0.95003, 1.45, 0, 0, 0.73611],
      47: [0.95003, 1.45, 0, 0, 1.04445],
      91: [0.95003, 1.45, 0, 0, 0.52778],
      92: [0.95003, 1.45, 0, 0, 1.04445],
      93: [0.95003, 1.45, 0, 0, 0.52778],
      123: [0.95003, 1.45, 0, 0, 0.75],
      125: [0.95003, 1.45, 0, 0, 0.75],
      160: [0, 0, 0, 0, 0.25],
      710: [0, 0.75, 0, 0, 1.44445],
      732: [0, 0.75, 0, 0, 1.44445],
      770: [0, 0.75, 0, 0, 1.44445],
      771: [0, 0.75, 0, 0, 1.44445],
      8730: [0.95003, 1.45, 0, 0, 1],
      8968: [0.95003, 1.45, 0, 0, 0.58334],
      8969: [0.95003, 1.45, 0, 0, 0.58334],
      8970: [0.95003, 1.45, 0, 0, 0.58334],
      8971: [0.95003, 1.45, 0, 0, 0.58334],
      10216: [0.95003, 1.45, 0, 0, 0.75],
      10217: [0.95003, 1.45, 0, 0, 0.75],
    },
    "Size4-Regular": {
      32: [0, 0, 0, 0, 0.25],
      40: [1.25003, 1.75, 0, 0, 0.79167],
      41: [1.25003, 1.75, 0, 0, 0.79167],
      47: [1.25003, 1.75, 0, 0, 1.27778],
      91: [1.25003, 1.75, 0, 0, 0.58334],
      92: [1.25003, 1.75, 0, 0, 1.27778],
      93: [1.25003, 1.75, 0, 0, 0.58334],
      123: [1.25003, 1.75, 0, 0, 0.80556],
      125: [1.25003, 1.75, 0, 0, 0.80556],
      160: [0, 0, 0, 0, 0.25],
      710: [0, 0.825, 0, 0, 1.8889],
      732: [0, 0.825, 0, 0, 1.8889],
      770: [0, 0.825, 0, 0, 1.8889],
      771: [0, 0.825, 0, 0, 1.8889],
      8730: [1.25003, 1.75, 0, 0, 1],
      8968: [1.25003, 1.75, 0, 0, 0.63889],
      8969: [1.25003, 1.75, 0, 0, 0.63889],
      8970: [1.25003, 1.75, 0, 0, 0.63889],
      8971: [1.25003, 1.75, 0, 0, 0.63889],
      9115: [0.64502, 1.155, 0, 0, 0.875],
      9116: [1e-5, 0.6, 0, 0, 0.875],
      9117: [0.64502, 1.155, 0, 0, 0.875],
      9118: [0.64502, 1.155, 0, 0, 0.875],
      9119: [1e-5, 0.6, 0, 0, 0.875],
      9120: [0.64502, 1.155, 0, 0, 0.875],
      9121: [0.64502, 1.155, 0, 0, 0.66667],
      9122: [-99e-5, 0.601, 0, 0, 0.66667],
      9123: [0.64502, 1.155, 0, 0, 0.66667],
      9124: [0.64502, 1.155, 0, 0, 0.66667],
      9125: [-99e-5, 0.601, 0, 0, 0.66667],
      9126: [0.64502, 1.155, 0, 0, 0.66667],
      9127: [1e-5, 0.9, 0, 0, 0.88889],
      9128: [0.65002, 1.15, 0, 0, 0.88889],
      9129: [0.90001, 0, 0, 0, 0.88889],
      9130: [0, 0.3, 0, 0, 0.88889],
      9131: [1e-5, 0.9, 0, 0, 0.88889],
      9132: [0.65002, 1.15, 0, 0, 0.88889],
      9133: [0.90001, 0, 0, 0, 0.88889],
      9143: [0.88502, 0.915, 0, 0, 1.05556],
      10216: [1.25003, 1.75, 0, 0, 0.80556],
      10217: [1.25003, 1.75, 0, 0, 0.80556],
      57344: [-0.00499, 0.605, 0, 0, 1.05556],
      57345: [-0.00499, 0.605, 0, 0, 1.05556],
      57680: [0, 0.12, 0, 0, 0.45],
      57681: [0, 0.12, 0, 0, 0.45],
      57682: [0, 0.12, 0, 0, 0.45],
      57683: [0, 0.12, 0, 0, 0.45],
    },
    "Typewriter-Regular": {
      32: [0, 0, 0, 0, 0.525],
      33: [0, 0.61111, 0, 0, 0.525],
      34: [0, 0.61111, 0, 0, 0.525],
      35: [0, 0.61111, 0, 0, 0.525],
      36: [0.08333, 0.69444, 0, 0, 0.525],
      37: [0.08333, 0.69444, 0, 0, 0.525],
      38: [0, 0.61111, 0, 0, 0.525],
      39: [0, 0.61111, 0, 0, 0.525],
      40: [0.08333, 0.69444, 0, 0, 0.525],
      41: [0.08333, 0.69444, 0, 0, 0.525],
      42: [0, 0.52083, 0, 0, 0.525],
      43: [-0.08056, 0.53055, 0, 0, 0.525],
      44: [0.13889, 0.125, 0, 0, 0.525],
      45: [-0.08056, 0.53055, 0, 0, 0.525],
      46: [0, 0.125, 0, 0, 0.525],
      47: [0.08333, 0.69444, 0, 0, 0.525],
      48: [0, 0.61111, 0, 0, 0.525],
      49: [0, 0.61111, 0, 0, 0.525],
      50: [0, 0.61111, 0, 0, 0.525],
      51: [0, 0.61111, 0, 0, 0.525],
      52: [0, 0.61111, 0, 0, 0.525],
      53: [0, 0.61111, 0, 0, 0.525],
      54: [0, 0.61111, 0, 0, 0.525],
      55: [0, 0.61111, 0, 0, 0.525],
      56: [0, 0.61111, 0, 0, 0.525],
      57: [0, 0.61111, 0, 0, 0.525],
      58: [0, 0.43056, 0, 0, 0.525],
      59: [0.13889, 0.43056, 0, 0, 0.525],
      60: [-0.05556, 0.55556, 0, 0, 0.525],
      61: [-0.19549, 0.41562, 0, 0, 0.525],
      62: [-0.05556, 0.55556, 0, 0, 0.525],
      63: [0, 0.61111, 0, 0, 0.525],
      64: [0, 0.61111, 0, 0, 0.525],
      65: [0, 0.61111, 0, 0, 0.525],
      66: [0, 0.61111, 0, 0, 0.525],
      67: [0, 0.61111, 0, 0, 0.525],
      68: [0, 0.61111, 0, 0, 0.525],
      69: [0, 0.61111, 0, 0, 0.525],
      70: [0, 0.61111, 0, 0, 0.525],
      71: [0, 0.61111, 0, 0, 0.525],
      72: [0, 0.61111, 0, 0, 0.525],
      73: [0, 0.61111, 0, 0, 0.525],
      74: [0, 0.61111, 0, 0, 0.525],
      75: [0, 0.61111, 0, 0, 0.525],
      76: [0, 0.61111, 0, 0, 0.525],
      77: [0, 0.61111, 0, 0, 0.525],
      78: [0, 0.61111, 0, 0, 0.525],
      79: [0, 0.61111, 0, 0, 0.525],
      80: [0, 0.61111, 0, 0, 0.525],
      81: [0.13889, 0.61111, 0, 0, 0.525],
      82: [0, 0.61111, 0, 0, 0.525],
      83: [0, 0.61111, 0, 0, 0.525],
      84: [0, 0.61111, 0, 0, 0.525],
      85: [0, 0.61111, 0, 0, 0.525],
      86: [0, 0.61111, 0, 0, 0.525],
      87: [0, 0.61111, 0, 0, 0.525],
      88: [0, 0.61111, 0, 0, 0.525],
      89: [0, 0.61111, 0, 0, 0.525],
      90: [0, 0.61111, 0, 0, 0.525],
      91: [0.08333, 0.69444, 0, 0, 0.525],
      92: [0.08333, 0.69444, 0, 0, 0.525],
      93: [0.08333, 0.69444, 0, 0, 0.525],
      94: [0, 0.61111, 0, 0, 0.525],
      95: [0.09514, 0, 0, 0, 0.525],
      96: [0, 0.61111, 0, 0, 0.525],
      97: [0, 0.43056, 0, 0, 0.525],
      98: [0, 0.61111, 0, 0, 0.525],
      99: [0, 0.43056, 0, 0, 0.525],
      100: [0, 0.61111, 0, 0, 0.525],
      101: [0, 0.43056, 0, 0, 0.525],
      102: [0, 0.61111, 0, 0, 0.525],
      103: [0.22222, 0.43056, 0, 0, 0.525],
      104: [0, 0.61111, 0, 0, 0.525],
      105: [0, 0.61111, 0, 0, 0.525],
      106: [0.22222, 0.61111, 0, 0, 0.525],
      107: [0, 0.61111, 0, 0, 0.525],
      108: [0, 0.61111, 0, 0, 0.525],
      109: [0, 0.43056, 0, 0, 0.525],
      110: [0, 0.43056, 0, 0, 0.525],
      111: [0, 0.43056, 0, 0, 0.525],
      112: [0.22222, 0.43056, 0, 0, 0.525],
      113: [0.22222, 0.43056, 0, 0, 0.525],
      114: [0, 0.43056, 0, 0, 0.525],
      115: [0, 0.43056, 0, 0, 0.525],
      116: [0, 0.55358, 0, 0, 0.525],
      117: [0, 0.43056, 0, 0, 0.525],
      118: [0, 0.43056, 0, 0, 0.525],
      119: [0, 0.43056, 0, 0, 0.525],
      120: [0, 0.43056, 0, 0, 0.525],
      121: [0.22222, 0.43056, 0, 0, 0.525],
      122: [0, 0.43056, 0, 0, 0.525],
      123: [0.08333, 0.69444, 0, 0, 0.525],
      124: [0.08333, 0.69444, 0, 0, 0.525],
      125: [0.08333, 0.69444, 0, 0, 0.525],
      126: [0, 0.61111, 0, 0, 0.525],
      127: [0, 0.61111, 0, 0, 0.525],
      160: [0, 0, 0, 0, 0.525],
      176: [0, 0.61111, 0, 0, 0.525],
      184: [0.19445, 0, 0, 0, 0.525],
      305: [0, 0.43056, 0, 0, 0.525],
      567: [0.22222, 0.43056, 0, 0, 0.525],
      711: [0, 0.56597, 0, 0, 0.525],
      713: [0, 0.56555, 0, 0, 0.525],
      714: [0, 0.61111, 0, 0, 0.525],
      715: [0, 0.61111, 0, 0, 0.525],
      728: [0, 0.61111, 0, 0, 0.525],
      730: [0, 0.61111, 0, 0, 0.525],
      770: [0, 0.61111, 0, 0, 0.525],
      771: [0, 0.61111, 0, 0, 0.525],
      776: [0, 0.61111, 0, 0, 0.525],
      915: [0, 0.61111, 0, 0, 0.525],
      916: [0, 0.61111, 0, 0, 0.525],
      920: [0, 0.61111, 0, 0, 0.525],
      923: [0, 0.61111, 0, 0, 0.525],
      926: [0, 0.61111, 0, 0, 0.525],
      928: [0, 0.61111, 0, 0, 0.525],
      931: [0, 0.61111, 0, 0, 0.525],
      933: [0, 0.61111, 0, 0, 0.525],
      934: [0, 0.61111, 0, 0, 0.525],
      936: [0, 0.61111, 0, 0, 0.525],
      937: [0, 0.61111, 0, 0, 0.525],
      8216: [0, 0.61111, 0, 0, 0.525],
      8217: [0, 0.61111, 0, 0, 0.525],
      8242: [0, 0.61111, 0, 0, 0.525],
      9251: [0.11111, 0.21944, 0, 0, 0.525],
    },
  },
  ot = {
    slant: [0.25, 0.25, 0.25],
    space: [0, 0, 0],
    stretch: [0, 0, 0],
    shrink: [0, 0, 0],
    xHeight: [0.431, 0.431, 0.431],
    quad: [1, 1.171, 1.472],
    extraSpace: [0, 0, 0],
    num1: [0.677, 0.732, 0.925],
    num2: [0.394, 0.384, 0.387],
    num3: [0.444, 0.471, 0.504],
    denom1: [0.686, 0.752, 1.025],
    denom2: [0.345, 0.344, 0.532],
    sup1: [0.413, 0.503, 0.504],
    sup2: [0.363, 0.431, 0.404],
    sup3: [0.289, 0.286, 0.294],
    sub1: [0.15, 0.143, 0.2],
    sub2: [0.247, 0.286, 0.4],
    supDrop: [0.386, 0.353, 0.494],
    subDrop: [0.05, 0.071, 0.1],
    delim1: [2.39, 1.7, 1.98],
    delim2: [1.01, 1.157, 1.42],
    axisHeight: [0.25, 0.25, 0.25],
    defaultRuleThickness: [0.04, 0.049, 0.049],
    bigOpSpacing1: [0.111, 0.111, 0.111],
    bigOpSpacing2: [0.166, 0.166, 0.166],
    bigOpSpacing3: [0.2, 0.2, 0.2],
    bigOpSpacing4: [0.6, 0.611, 0.611],
    bigOpSpacing5: [0.1, 0.143, 0.143],
    sqrtRuleThickness: [0.04, 0.04, 0.04],
    ptPerEm: [10, 10, 10],
    doubleRuleSep: [0.2, 0.2, 0.2],
    arrayRuleWidth: [0.04, 0.04, 0.04],
    fboxsep: [0.3, 0.3, 0.3],
    fboxrule: [0.04, 0.04, 0.04],
  },
  Ma = {
    Å: "A",
    Ð: "D",
    Þ: "o",
    å: "a",
    ð: "d",
    þ: "o",
    А: "A",
    Б: "B",
    В: "B",
    Г: "F",
    Д: "A",
    Е: "E",
    Ж: "K",
    З: "3",
    И: "N",
    Й: "N",
    К: "K",
    Л: "N",
    М: "M",
    Н: "H",
    О: "O",
    П: "N",
    Р: "P",
    С: "C",
    Т: "T",
    У: "y",
    Ф: "O",
    Х: "X",
    Ц: "U",
    Ч: "h",
    Ш: "W",
    Щ: "W",
    Ъ: "B",
    Ы: "X",
    Ь: "B",
    Э: "3",
    Ю: "X",
    Я: "R",
    а: "a",
    б: "b",
    в: "a",
    г: "r",
    д: "y",
    е: "e",
    ж: "m",
    з: "e",
    и: "n",
    й: "n",
    к: "n",
    л: "n",
    м: "m",
    н: "n",
    о: "o",
    п: "n",
    р: "p",
    с: "c",
    т: "o",
    у: "y",
    ф: "b",
    х: "x",
    ц: "n",
    ч: "n",
    ш: "w",
    щ: "w",
    ъ: "a",
    ы: "m",
    ь: "a",
    э: "e",
    ю: "m",
    я: "r",
  };
function rl(r, e) {
  X0[r] = e;
}
function Gr(r, e, t) {
  if (!X0[e]) throw new Error("Font metrics not found for font: " + e + ".");
  var a = r.charCodeAt(0),
    n = X0[e][a];
  if (
    (!n && r[0] in Ma && ((a = Ma[r[0]].charCodeAt(0)), (n = X0[e][a])),
    !n && t === "text" && Cn(a) && (n = X0[e][77]),
    n)
  )
    return { depth: n[0], height: n[1], italic: n[2], skew: n[3], width: n[4] };
}
var rr = {};
function al(r) {
  var e;
  if ((r >= 5 ? (e = 0) : r >= 3 ? (e = 1) : (e = 2), !rr[e])) {
    var t = (rr[e] = { cssEmPerMu: ot.quad[e] / 18 });
    for (var a in ot) ot.hasOwnProperty(a) && (t[a] = ot[a][e]);
  }
  return rr[e];
}
var nl = { bin: 1, close: 1, inner: 1, open: 1, punct: 1, rel: 1 },
  il = { "accent-token": 1, mathord: 1, "op-token": 1, spacing: 1, textord: 1 },
  n0 = { math: {}, text: {} };
function s(r, e, t, a, n, i) {
  ((n0[r][n] = { font: e, group: t, replace: a }), i && a && (n0[r][a] = n0[r][n]));
}
var o = "math",
  S = "text",
  h = "main",
  p = "ams",
  i0 = "accent-token",
  D = "bin",
  z0 = "close",
  Ue = "inner",
  L = "mathord",
  v0 = "op-token",
  N0 = "open",
  nt = "punct",
  v = "rel",
  oe = "spacing",
  b = "textord";
s(o, h, v, "≡", "\\equiv", !0);
s(o, h, v, "≺", "\\prec", !0);
s(o, h, v, "≻", "\\succ", !0);
s(o, h, v, "∼", "\\sim", !0);
s(o, h, v, "⊥", "\\perp");
s(o, h, v, "⪯", "\\preceq", !0);
s(o, h, v, "⪰", "\\succeq", !0);
s(o, h, v, "≃", "\\simeq", !0);
s(o, h, v, "∣", "\\mid", !0);
s(o, h, v, "≪", "\\ll", !0);
s(o, h, v, "≫", "\\gg", !0);
s(o, h, v, "≍", "\\asymp", !0);
s(o, h, v, "∥", "\\parallel");
s(o, h, v, "⋈", "\\bowtie", !0);
s(o, h, v, "⌣", "\\smile", !0);
s(o, h, v, "⊑", "\\sqsubseteq", !0);
s(o, h, v, "⊒", "\\sqsupseteq", !0);
s(o, h, v, "≐", "\\doteq", !0);
s(o, h, v, "⌢", "\\frown", !0);
s(o, h, v, "∋", "\\ni", !0);
s(o, h, v, "∝", "\\propto", !0);
s(o, h, v, "⊢", "\\vdash", !0);
s(o, h, v, "⊣", "\\dashv", !0);
s(o, h, v, "∋", "\\owns");
s(o, h, nt, ".", "\\ldotp");
s(o, h, nt, "⋅", "\\cdotp");
s(o, h, nt, "⋅", "·");
s(S, h, b, "⋅", "·");
s(o, h, b, "#", "\\#");
s(S, h, b, "#", "\\#");
s(o, h, b, "&", "\\&");
s(S, h, b, "&", "\\&");
s(o, h, b, "ℵ", "\\aleph", !0);
s(o, h, b, "∀", "\\forall", !0);
s(o, h, b, "ℏ", "\\hbar", !0);
s(o, h, b, "∃", "\\exists", !0);
s(o, h, b, "∇", "\\nabla", !0);
s(o, h, b, "♭", "\\flat", !0);
s(o, h, b, "ℓ", "\\ell", !0);
s(o, h, b, "♮", "\\natural", !0);
s(o, h, b, "♣", "\\clubsuit", !0);
s(o, h, b, "℘", "\\wp", !0);
s(o, h, b, "♯", "\\sharp", !0);
s(o, h, b, "♢", "\\diamondsuit", !0);
s(o, h, b, "ℜ", "\\Re", !0);
s(o, h, b, "♡", "\\heartsuit", !0);
s(o, h, b, "ℑ", "\\Im", !0);
s(o, h, b, "♠", "\\spadesuit", !0);
s(o, h, b, "§", "\\S", !0);
s(S, h, b, "§", "\\S");
s(o, h, b, "¶", "\\P", !0);
s(S, h, b, "¶", "\\P");
s(o, h, b, "†", "\\dag");
s(S, h, b, "†", "\\dag");
s(S, h, b, "†", "\\textdagger");
s(o, h, b, "‡", "\\ddag");
s(S, h, b, "‡", "\\ddag");
s(S, h, b, "‡", "\\textdaggerdbl");
s(o, h, z0, "⎱", "\\rmoustache", !0);
s(o, h, N0, "⎰", "\\lmoustache", !0);
s(o, h, z0, "⟯", "\\rgroup", !0);
s(o, h, N0, "⟮", "\\lgroup", !0);
s(o, h, D, "∓", "\\mp", !0);
s(o, h, D, "⊖", "\\ominus", !0);
s(o, h, D, "⊎", "\\uplus", !0);
s(o, h, D, "⊓", "\\sqcap", !0);
s(o, h, D, "∗", "\\ast");
s(o, h, D, "⊔", "\\sqcup", !0);
s(o, h, D, "◯", "\\bigcirc", !0);
s(o, h, D, "∙", "\\bullet", !0);
s(o, h, D, "‡", "\\ddagger");
s(o, h, D, "≀", "\\wr", !0);
s(o, h, D, "⨿", "\\amalg");
s(o, h, D, "&", "\\And");
s(o, h, v, "⟵", "\\longleftarrow", !0);
s(o, h, v, "⇐", "\\Leftarrow", !0);
s(o, h, v, "⟸", "\\Longleftarrow", !0);
s(o, h, v, "⟶", "\\longrightarrow", !0);
s(o, h, v, "⇒", "\\Rightarrow", !0);
s(o, h, v, "⟹", "\\Longrightarrow", !0);
s(o, h, v, "↔", "\\leftrightarrow", !0);
s(o, h, v, "⟷", "\\longleftrightarrow", !0);
s(o, h, v, "⇔", "\\Leftrightarrow", !0);
s(o, h, v, "⟺", "\\Longleftrightarrow", !0);
s(o, h, v, "↦", "\\mapsto", !0);
s(o, h, v, "⟼", "\\longmapsto", !0);
s(o, h, v, "↗", "\\nearrow", !0);
s(o, h, v, "↩", "\\hookleftarrow", !0);
s(o, h, v, "↪", "\\hookrightarrow", !0);
s(o, h, v, "↘", "\\searrow", !0);
s(o, h, v, "↼", "\\leftharpoonup", !0);
s(o, h, v, "⇀", "\\rightharpoonup", !0);
s(o, h, v, "↙", "\\swarrow", !0);
s(o, h, v, "↽", "\\leftharpoondown", !0);
s(o, h, v, "⇁", "\\rightharpoondown", !0);
s(o, h, v, "↖", "\\nwarrow", !0);
s(o, h, v, "⇌", "\\rightleftharpoons", !0);
s(o, p, v, "≮", "\\nless", !0);
s(o, p, v, "", "\\@nleqslant");
s(o, p, v, "", "\\@nleqq");
s(o, p, v, "⪇", "\\lneq", !0);
s(o, p, v, "≨", "\\lneqq", !0);
s(o, p, v, "", "\\@lvertneqq");
s(o, p, v, "⋦", "\\lnsim", !0);
s(o, p, v, "⪉", "\\lnapprox", !0);
s(o, p, v, "⊀", "\\nprec", !0);
s(o, p, v, "⋠", "\\npreceq", !0);
s(o, p, v, "⋨", "\\precnsim", !0);
s(o, p, v, "⪹", "\\precnapprox", !0);
s(o, p, v, "≁", "\\nsim", !0);
s(o, p, v, "", "\\@nshortmid");
s(o, p, v, "∤", "\\nmid", !0);
s(o, p, v, "⊬", "\\nvdash", !0);
s(o, p, v, "⊭", "\\nvDash", !0);
s(o, p, v, "⋪", "\\ntriangleleft");
s(o, p, v, "⋬", "\\ntrianglelefteq", !0);
s(o, p, v, "⊊", "\\subsetneq", !0);
s(o, p, v, "", "\\@varsubsetneq");
s(o, p, v, "⫋", "\\subsetneqq", !0);
s(o, p, v, "", "\\@varsubsetneqq");
s(o, p, v, "≯", "\\ngtr", !0);
s(o, p, v, "", "\\@ngeqslant");
s(o, p, v, "", "\\@ngeqq");
s(o, p, v, "⪈", "\\gneq", !0);
s(o, p, v, "≩", "\\gneqq", !0);
s(o, p, v, "", "\\@gvertneqq");
s(o, p, v, "⋧", "\\gnsim", !0);
s(o, p, v, "⪊", "\\gnapprox", !0);
s(o, p, v, "⊁", "\\nsucc", !0);
s(o, p, v, "⋡", "\\nsucceq", !0);
s(o, p, v, "⋩", "\\succnsim", !0);
s(o, p, v, "⪺", "\\succnapprox", !0);
s(o, p, v, "≆", "\\ncong", !0);
s(o, p, v, "", "\\@nshortparallel");
s(o, p, v, "∦", "\\nparallel", !0);
s(o, p, v, "⊯", "\\nVDash", !0);
s(o, p, v, "⋫", "\\ntriangleright");
s(o, p, v, "⋭", "\\ntrianglerighteq", !0);
s(o, p, v, "", "\\@nsupseteqq");
s(o, p, v, "⊋", "\\supsetneq", !0);
s(o, p, v, "", "\\@varsupsetneq");
s(o, p, v, "⫌", "\\supsetneqq", !0);
s(o, p, v, "", "\\@varsupsetneqq");
s(o, p, v, "⊮", "\\nVdash", !0);
s(o, p, v, "⪵", "\\precneqq", !0);
s(o, p, v, "⪶", "\\succneqq", !0);
s(o, p, v, "", "\\@nsubseteqq");
s(o, p, D, "⊴", "\\unlhd");
s(o, p, D, "⊵", "\\unrhd");
s(o, p, v, "↚", "\\nleftarrow", !0);
s(o, p, v, "↛", "\\nrightarrow", !0);
s(o, p, v, "⇍", "\\nLeftarrow", !0);
s(o, p, v, "⇏", "\\nRightarrow", !0);
s(o, p, v, "↮", "\\nleftrightarrow", !0);
s(o, p, v, "⇎", "\\nLeftrightarrow", !0);
s(o, p, v, "△", "\\vartriangle");
s(o, p, b, "ℏ", "\\hslash");
s(o, p, b, "▽", "\\triangledown");
s(o, p, b, "◊", "\\lozenge");
s(o, p, b, "Ⓢ", "\\circledS");
s(o, p, b, "®", "\\circledR");
s(S, p, b, "®", "\\circledR");
s(o, p, b, "∡", "\\measuredangle", !0);
s(o, p, b, "∄", "\\nexists");
s(o, p, b, "℧", "\\mho");
s(o, p, b, "Ⅎ", "\\Finv", !0);
s(o, p, b, "⅁", "\\Game", !0);
s(o, p, b, "‵", "\\backprime");
s(o, p, b, "▲", "\\blacktriangle");
s(o, p, b, "▼", "\\blacktriangledown");
s(o, p, b, "■", "\\blacksquare");
s(o, p, b, "⧫", "\\blacklozenge");
s(o, p, b, "★", "\\bigstar");
s(o, p, b, "∢", "\\sphericalangle", !0);
s(o, p, b, "∁", "\\complement", !0);
s(o, p, b, "ð", "\\eth", !0);
s(S, h, b, "ð", "ð");
s(o, p, b, "╱", "\\diagup");
s(o, p, b, "╲", "\\diagdown");
s(o, p, b, "□", "\\square");
s(o, p, b, "□", "\\Box");
s(o, p, b, "◊", "\\Diamond");
s(o, p, b, "¥", "\\yen", !0);
s(S, p, b, "¥", "\\yen", !0);
s(o, p, b, "✓", "\\checkmark", !0);
s(S, p, b, "✓", "\\checkmark");
s(o, p, b, "ℶ", "\\beth", !0);
s(o, p, b, "ℸ", "\\daleth", !0);
s(o, p, b, "ℷ", "\\gimel", !0);
s(o, p, b, "ϝ", "\\digamma", !0);
s(o, p, b, "ϰ", "\\varkappa");
s(o, p, N0, "┌", "\\@ulcorner", !0);
s(o, p, z0, "┐", "\\@urcorner", !0);
s(o, p, N0, "└", "\\@llcorner", !0);
s(o, p, z0, "┘", "\\@lrcorner", !0);
s(o, p, v, "≦", "\\leqq", !0);
s(o, p, v, "⩽", "\\leqslant", !0);
s(o, p, v, "⪕", "\\eqslantless", !0);
s(o, p, v, "≲", "\\lesssim", !0);
s(o, p, v, "⪅", "\\lessapprox", !0);
s(o, p, v, "≊", "\\approxeq", !0);
s(o, p, D, "⋖", "\\lessdot");
s(o, p, v, "⋘", "\\lll", !0);
s(o, p, v, "≶", "\\lessgtr", !0);
s(o, p, v, "⋚", "\\lesseqgtr", !0);
s(o, p, v, "⪋", "\\lesseqqgtr", !0);
s(o, p, v, "≑", "\\doteqdot");
s(o, p, v, "≓", "\\risingdotseq", !0);
s(o, p, v, "≒", "\\fallingdotseq", !0);
s(o, p, v, "∽", "\\backsim", !0);
s(o, p, v, "⋍", "\\backsimeq", !0);
s(o, p, v, "⫅", "\\subseteqq", !0);
s(o, p, v, "⋐", "\\Subset", !0);
s(o, p, v, "⊏", "\\sqsubset", !0);
s(o, p, v, "≼", "\\preccurlyeq", !0);
s(o, p, v, "⋞", "\\curlyeqprec", !0);
s(o, p, v, "≾", "\\precsim", !0);
s(o, p, v, "⪷", "\\precapprox", !0);
s(o, p, v, "⊲", "\\vartriangleleft");
s(o, p, v, "⊴", "\\trianglelefteq");
s(o, p, v, "⊨", "\\vDash", !0);
s(o, p, v, "⊪", "\\Vvdash", !0);
s(o, p, v, "⌣", "\\smallsmile");
s(o, p, v, "⌢", "\\smallfrown");
s(o, p, v, "≏", "\\bumpeq", !0);
s(o, p, v, "≎", "\\Bumpeq", !0);
s(o, p, v, "≧", "\\geqq", !0);
s(o, p, v, "⩾", "\\geqslant", !0);
s(o, p, v, "⪖", "\\eqslantgtr", !0);
s(o, p, v, "≳", "\\gtrsim", !0);
s(o, p, v, "⪆", "\\gtrapprox", !0);
s(o, p, D, "⋗", "\\gtrdot");
s(o, p, v, "⋙", "\\ggg", !0);
s(o, p, v, "≷", "\\gtrless", !0);
s(o, p, v, "⋛", "\\gtreqless", !0);
s(o, p, v, "⪌", "\\gtreqqless", !0);
s(o, p, v, "≖", "\\eqcirc", !0);
s(o, p, v, "≗", "\\circeq", !0);
s(o, p, v, "≜", "\\triangleq", !0);
s(o, p, v, "∼", "\\thicksim");
s(o, p, v, "≈", "\\thickapprox");
s(o, p, v, "⫆", "\\supseteqq", !0);
s(o, p, v, "⋑", "\\Supset", !0);
s(o, p, v, "⊐", "\\sqsupset", !0);
s(o, p, v, "≽", "\\succcurlyeq", !0);
s(o, p, v, "⋟", "\\curlyeqsucc", !0);
s(o, p, v, "≿", "\\succsim", !0);
s(o, p, v, "⪸", "\\succapprox", !0);
s(o, p, v, "⊳", "\\vartriangleright");
s(o, p, v, "⊵", "\\trianglerighteq");
s(o, p, v, "⊩", "\\Vdash", !0);
s(o, p, v, "∣", "\\shortmid");
s(o, p, v, "∥", "\\shortparallel");
s(o, p, v, "≬", "\\between", !0);
s(o, p, v, "⋔", "\\pitchfork", !0);
s(o, p, v, "∝", "\\varpropto");
s(o, p, v, "◀", "\\blacktriangleleft");
s(o, p, v, "∴", "\\therefore", !0);
s(o, p, v, "∍", "\\backepsilon");
s(o, p, v, "▶", "\\blacktriangleright");
s(o, p, v, "∵", "\\because", !0);
s(o, p, v, "⋘", "\\llless");
s(o, p, v, "⋙", "\\gggtr");
s(o, p, D, "⊲", "\\lhd");
s(o, p, D, "⊳", "\\rhd");
s(o, p, v, "≂", "\\eqsim", !0);
s(o, h, v, "⋈", "\\Join");
s(o, p, v, "≑", "\\Doteq", !0);
s(o, p, D, "∔", "\\dotplus", !0);
s(o, p, D, "∖", "\\smallsetminus");
s(o, p, D, "⋒", "\\Cap", !0);
s(o, p, D, "⋓", "\\Cup", !0);
s(o, p, D, "⩞", "\\doublebarwedge", !0);
s(o, p, D, "⊟", "\\boxminus", !0);
s(o, p, D, "⊞", "\\boxplus", !0);
s(o, p, D, "⋇", "\\divideontimes", !0);
s(o, p, D, "⋉", "\\ltimes", !0);
s(o, p, D, "⋊", "\\rtimes", !0);
s(o, p, D, "⋋", "\\leftthreetimes", !0);
s(o, p, D, "⋌", "\\rightthreetimes", !0);
s(o, p, D, "⋏", "\\curlywedge", !0);
s(o, p, D, "⋎", "\\curlyvee", !0);
s(o, p, D, "⊝", "\\circleddash", !0);
s(o, p, D, "⊛", "\\circledast", !0);
s(o, p, D, "⋅", "\\centerdot");
s(o, p, D, "⊺", "\\intercal", !0);
s(o, p, D, "⋒", "\\doublecap");
s(o, p, D, "⋓", "\\doublecup");
s(o, p, D, "⊠", "\\boxtimes", !0);
s(o, p, v, "⇢", "\\dashrightarrow", !0);
s(o, p, v, "⇠", "\\dashleftarrow", !0);
s(o, p, v, "⇇", "\\leftleftarrows", !0);
s(o, p, v, "⇆", "\\leftrightarrows", !0);
s(o, p, v, "⇚", "\\Lleftarrow", !0);
s(o, p, v, "↞", "\\twoheadleftarrow", !0);
s(o, p, v, "↢", "\\leftarrowtail", !0);
s(o, p, v, "↫", "\\looparrowleft", !0);
s(o, p, v, "⇋", "\\leftrightharpoons", !0);
s(o, p, v, "↶", "\\curvearrowleft", !0);
s(o, p, v, "↺", "\\circlearrowleft", !0);
s(o, p, v, "↰", "\\Lsh", !0);
s(o, p, v, "⇈", "\\upuparrows", !0);
s(o, p, v, "↿", "\\upharpoonleft", !0);
s(o, p, v, "⇃", "\\downharpoonleft", !0);
s(o, h, v, "⊶", "\\origof", !0);
s(o, h, v, "⊷", "\\imageof", !0);
s(o, p, v, "⊸", "\\multimap", !0);
s(o, p, v, "↭", "\\leftrightsquigarrow", !0);
s(o, p, v, "⇉", "\\rightrightarrows", !0);
s(o, p, v, "⇄", "\\rightleftarrows", !0);
s(o, p, v, "↠", "\\twoheadrightarrow", !0);
s(o, p, v, "↣", "\\rightarrowtail", !0);
s(o, p, v, "↬", "\\looparrowright", !0);
s(o, p, v, "↷", "\\curvearrowright", !0);
s(o, p, v, "↻", "\\circlearrowright", !0);
s(o, p, v, "↱", "\\Rsh", !0);
s(o, p, v, "⇊", "\\downdownarrows", !0);
s(o, p, v, "↾", "\\upharpoonright", !0);
s(o, p, v, "⇂", "\\downharpoonright", !0);
s(o, p, v, "⇝", "\\rightsquigarrow", !0);
s(o, p, v, "⇝", "\\leadsto");
s(o, p, v, "⇛", "\\Rrightarrow", !0);
s(o, p, v, "↾", "\\restriction");
s(o, h, b, "‘", "`");
s(o, h, b, "$", "\\$");
s(S, h, b, "$", "\\$");
s(S, h, b, "$", "\\textdollar");
s(o, h, b, "%", "\\%");
s(S, h, b, "%", "\\%");
s(o, h, b, "_", "\\_");
s(S, h, b, "_", "\\_");
s(S, h, b, "_", "\\textunderscore");
s(o, h, b, "∠", "\\angle", !0);
s(o, h, b, "∞", "\\infty", !0);
s(o, h, b, "′", "\\prime");
s(o, h, b, "△", "\\triangle");
s(o, h, b, "Γ", "\\Gamma", !0);
s(o, h, b, "Δ", "\\Delta", !0);
s(o, h, b, "Θ", "\\Theta", !0);
s(o, h, b, "Λ", "\\Lambda", !0);
s(o, h, b, "Ξ", "\\Xi", !0);
s(o, h, b, "Π", "\\Pi", !0);
s(o, h, b, "Σ", "\\Sigma", !0);
s(o, h, b, "Υ", "\\Upsilon", !0);
s(o, h, b, "Φ", "\\Phi", !0);
s(o, h, b, "Ψ", "\\Psi", !0);
s(o, h, b, "Ω", "\\Omega", !0);
s(o, h, b, "A", "Α");
s(o, h, b, "B", "Β");
s(o, h, b, "E", "Ε");
s(o, h, b, "Z", "Ζ");
s(o, h, b, "H", "Η");
s(o, h, b, "I", "Ι");
s(o, h, b, "K", "Κ");
s(o, h, b, "M", "Μ");
s(o, h, b, "N", "Ν");
s(o, h, b, "O", "Ο");
s(o, h, b, "P", "Ρ");
s(o, h, b, "T", "Τ");
s(o, h, b, "X", "Χ");
s(o, h, b, "¬", "\\neg", !0);
s(o, h, b, "¬", "\\lnot");
s(o, h, b, "⊤", "\\top");
s(o, h, b, "⊥", "\\bot");
s(o, h, b, "∅", "\\emptyset");
s(o, p, b, "∅", "\\varnothing");
s(o, h, L, "α", "\\alpha", !0);
s(o, h, L, "β", "\\beta", !0);
s(o, h, L, "γ", "\\gamma", !0);
s(o, h, L, "δ", "\\delta", !0);
s(o, h, L, "ϵ", "\\epsilon", !0);
s(o, h, L, "ζ", "\\zeta", !0);
s(o, h, L, "η", "\\eta", !0);
s(o, h, L, "θ", "\\theta", !0);
s(o, h, L, "ι", "\\iota", !0);
s(o, h, L, "κ", "\\kappa", !0);
s(o, h, L, "λ", "\\lambda", !0);
s(o, h, L, "μ", "\\mu", !0);
s(o, h, L, "ν", "\\nu", !0);
s(o, h, L, "ξ", "\\xi", !0);
s(o, h, L, "ο", "\\omicron", !0);
s(o, h, L, "π", "\\pi", !0);
s(o, h, L, "ρ", "\\rho", !0);
s(o, h, L, "σ", "\\sigma", !0);
s(o, h, L, "τ", "\\tau", !0);
s(o, h, L, "υ", "\\upsilon", !0);
s(o, h, L, "ϕ", "\\phi", !0);
s(o, h, L, "χ", "\\chi", !0);
s(o, h, L, "ψ", "\\psi", !0);
s(o, h, L, "ω", "\\omega", !0);
s(o, h, L, "ε", "\\varepsilon", !0);
s(o, h, L, "ϑ", "\\vartheta", !0);
s(o, h, L, "ϖ", "\\varpi", !0);
s(o, h, L, "ϱ", "\\varrho", !0);
s(o, h, L, "ς", "\\varsigma", !0);
s(o, h, L, "φ", "\\varphi", !0);
s(o, h, D, "∗", "*", !0);
s(o, h, D, "+", "+");
s(o, h, D, "−", "-", !0);
s(o, h, D, "⋅", "\\cdot", !0);
s(o, h, D, "∘", "\\circ", !0);
s(o, h, D, "÷", "\\div", !0);
s(o, h, D, "±", "\\pm", !0);
s(o, h, D, "×", "\\times", !0);
s(o, h, D, "∩", "\\cap", !0);
s(o, h, D, "∪", "\\cup", !0);
s(o, h, D, "∖", "\\setminus", !0);
s(o, h, D, "∧", "\\land");
s(o, h, D, "∨", "\\lor");
s(o, h, D, "∧", "\\wedge", !0);
s(o, h, D, "∨", "\\vee", !0);
s(o, h, b, "√", "\\surd");
s(o, h, N0, "⟨", "\\langle", !0);
s(o, h, N0, "∣", "\\lvert");
s(o, h, N0, "∥", "\\lVert");
s(o, h, z0, "?", "?");
s(o, h, z0, "!", "!");
s(o, h, z0, "⟩", "\\rangle", !0);
s(o, h, z0, "∣", "\\rvert");
s(o, h, z0, "∥", "\\rVert");
s(o, h, v, "=", "=");
s(o, h, v, ":", ":");
s(o, h, v, "≈", "\\approx", !0);
s(o, h, v, "≅", "\\cong", !0);
s(o, h, v, "≥", "\\ge");
s(o, h, v, "≥", "\\geq", !0);
s(o, h, v, "←", "\\gets");
s(o, h, v, ">", "\\gt", !0);
s(o, h, v, "∈", "\\in", !0);
s(o, h, v, "", "\\@not");
s(o, h, v, "⊂", "\\subset", !0);
s(o, h, v, "⊃", "\\supset", !0);
s(o, h, v, "⊆", "\\subseteq", !0);
s(o, h, v, "⊇", "\\supseteq", !0);
s(o, p, v, "⊈", "\\nsubseteq", !0);
s(o, p, v, "⊉", "\\nsupseteq", !0);
s(o, h, v, "⊨", "\\models");
s(o, h, v, "←", "\\leftarrow", !0);
s(o, h, v, "≤", "\\le");
s(o, h, v, "≤", "\\leq", !0);
s(o, h, v, "<", "\\lt", !0);
s(o, h, v, "→", "\\rightarrow", !0);
s(o, h, v, "→", "\\to");
s(o, p, v, "≱", "\\ngeq", !0);
s(o, p, v, "≰", "\\nleq", !0);
s(o, h, oe, " ", "\\ ");
s(o, h, oe, " ", "\\space");
s(o, h, oe, " ", "\\nobreakspace");
s(S, h, oe, " ", "\\ ");
s(S, h, oe, " ", " ");
s(S, h, oe, " ", "\\space");
s(S, h, oe, " ", "\\nobreakspace");
s(o, h, oe, null, "\\nobreak");
s(o, h, oe, null, "\\allowbreak");
s(o, h, nt, ",", ",");
s(o, h, nt, ";", ";");
s(o, p, D, "⊼", "\\barwedge", !0);
s(o, p, D, "⊻", "\\veebar", !0);
s(o, h, D, "⊙", "\\odot", !0);
s(o, h, D, "⊕", "\\oplus", !0);
s(o, h, D, "⊗", "\\otimes", !0);
s(o, h, b, "∂", "\\partial", !0);
s(o, h, D, "⊘", "\\oslash", !0);
s(o, p, D, "⊚", "\\circledcirc", !0);
s(o, p, D, "⊡", "\\boxdot", !0);
s(o, h, D, "△", "\\bigtriangleup");
s(o, h, D, "▽", "\\bigtriangledown");
s(o, h, D, "†", "\\dagger");
s(o, h, D, "⋄", "\\diamond");
s(o, h, D, "⋆", "\\star");
s(o, h, D, "◃", "\\triangleleft");
s(o, h, D, "▹", "\\triangleright");
s(o, h, N0, "{", "\\{");
s(S, h, b, "{", "\\{");
s(S, h, b, "{", "\\textbraceleft");
s(o, h, z0, "}", "\\}");
s(S, h, b, "}", "\\}");
s(S, h, b, "}", "\\textbraceright");
s(o, h, N0, "{", "\\lbrace");
s(o, h, z0, "}", "\\rbrace");
s(o, h, N0, "[", "\\lbrack", !0);
s(S, h, b, "[", "\\lbrack", !0);
s(o, h, z0, "]", "\\rbrack", !0);
s(S, h, b, "]", "\\rbrack", !0);
s(o, h, N0, "(", "\\lparen", !0);
s(o, h, z0, ")", "\\rparen", !0);
s(S, h, b, "<", "\\textless", !0);
s(S, h, b, ">", "\\textgreater", !0);
s(o, h, N0, "⌊", "\\lfloor", !0);
s(o, h, z0, "⌋", "\\rfloor", !0);
s(o, h, N0, "⌈", "\\lceil", !0);
s(o, h, z0, "⌉", "\\rceil", !0);
s(o, h, b, "\\", "\\backslash");
s(o, h, b, "∣", "|");
s(o, h, b, "∣", "\\vert");
s(S, h, b, "|", "\\textbar", !0);
s(o, h, b, "∥", "\\|");
s(o, h, b, "∥", "\\Vert");
s(S, h, b, "∥", "\\textbardbl");
s(S, h, b, "~", "\\textasciitilde");
s(S, h, b, "\\", "\\textbackslash");
s(S, h, b, "^", "\\textasciicircum");
s(o, h, v, "↑", "\\uparrow", !0);
s(o, h, v, "⇑", "\\Uparrow", !0);
s(o, h, v, "↓", "\\downarrow", !0);
s(o, h, v, "⇓", "\\Downarrow", !0);
s(o, h, v, "↕", "\\updownarrow", !0);
s(o, h, v, "⇕", "\\Updownarrow", !0);
s(o, h, v0, "∐", "\\coprod");
s(o, h, v0, "⋁", "\\bigvee");
s(o, h, v0, "⋀", "\\bigwedge");
s(o, h, v0, "⨄", "\\biguplus");
s(o, h, v0, "⋂", "\\bigcap");
s(o, h, v0, "⋃", "\\bigcup");
s(o, h, v0, "∫", "\\int");
s(o, h, v0, "∫", "\\intop");
s(o, h, v0, "∬", "\\iint");
s(o, h, v0, "∭", "\\iiint");
s(o, h, v0, "∏", "\\prod");
s(o, h, v0, "∑", "\\sum");
s(o, h, v0, "⨂", "\\bigotimes");
s(o, h, v0, "⨁", "\\bigoplus");
s(o, h, v0, "⨀", "\\bigodot");
s(o, h, v0, "∮", "\\oint");
s(o, h, v0, "∯", "\\oiint");
s(o, h, v0, "∰", "\\oiiint");
s(o, h, v0, "⨆", "\\bigsqcup");
s(o, h, v0, "∫", "\\smallint");
s(S, h, Ue, "…", "\\textellipsis");
s(o, h, Ue, "…", "\\mathellipsis");
s(S, h, Ue, "…", "\\ldots", !0);
s(o, h, Ue, "…", "\\ldots", !0);
s(o, h, Ue, "⋯", "\\@cdots", !0);
s(o, h, Ue, "⋱", "\\ddots", !0);
s(o, h, b, "⋮", "\\varvdots");
s(S, h, b, "⋮", "\\varvdots");
s(o, h, i0, "ˊ", "\\acute");
s(o, h, i0, "ˋ", "\\grave");
s(o, h, i0, "¨", "\\ddot");
s(o, h, i0, "~", "\\tilde");
s(o, h, i0, "ˉ", "\\bar");
s(o, h, i0, "˘", "\\breve");
s(o, h, i0, "ˇ", "\\check");
s(o, h, i0, "^", "\\hat");
s(o, h, i0, "⃗", "\\vec");
s(o, h, i0, "˙", "\\dot");
s(o, h, i0, "˚", "\\mathring");
s(o, h, L, "", "\\@imath");
s(o, h, L, "", "\\@jmath");
s(o, h, b, "ı", "ı");
s(o, h, b, "ȷ", "ȷ");
s(S, h, b, "ı", "\\i", !0);
s(S, h, b, "ȷ", "\\j", !0);
s(S, h, b, "ß", "\\ss", !0);
s(S, h, b, "æ", "\\ae", !0);
s(S, h, b, "œ", "\\oe", !0);
s(S, h, b, "ø", "\\o", !0);
s(S, h, b, "Æ", "\\AE", !0);
s(S, h, b, "Œ", "\\OE", !0);
s(S, h, b, "Ø", "\\O", !0);
s(S, h, i0, "ˊ", "\\'");
s(S, h, i0, "ˋ", "\\`");
s(S, h, i0, "ˆ", "\\^");
s(S, h, i0, "˜", "\\~");
s(S, h, i0, "ˉ", "\\=");
s(S, h, i0, "˘", "\\u");
s(S, h, i0, "˙", "\\.");
s(S, h, i0, "¸", "\\c");
s(S, h, i0, "˚", "\\r");
s(S, h, i0, "ˇ", "\\v");
s(S, h, i0, "¨", '\\"');
s(S, h, i0, "˝", "\\H");
s(S, h, i0, "◯", "\\textcircled");
var Nn = { "--": !0, "---": !0, "``": !0, "''": !0 };
s(S, h, b, "–", "--", !0);
s(S, h, b, "–", "\\textendash");
s(S, h, b, "—", "---", !0);
s(S, h, b, "—", "\\textemdash");
s(S, h, b, "‘", "`", !0);
s(S, h, b, "‘", "\\textquoteleft");
s(S, h, b, "’", "'", !0);
s(S, h, b, "’", "\\textquoteright");
s(S, h, b, "“", "``", !0);
s(S, h, b, "“", "\\textquotedblleft");
s(S, h, b, "”", "''", !0);
s(S, h, b, "”", "\\textquotedblright");
s(o, h, b, "°", "\\degree", !0);
s(S, h, b, "°", "\\degree");
s(S, h, b, "°", "\\textdegree", !0);
s(o, h, b, "£", "\\pounds");
s(o, h, b, "£", "\\mathsterling", !0);
s(S, h, b, "£", "\\pounds");
s(S, h, b, "£", "\\textsterling", !0);
s(o, p, b, "✠", "\\maltese");
s(S, p, b, "✠", "\\maltese");
var za = '0123456789/@."';
for (var ar = 0; ar < za.length; ar++) {
  var Ba = za.charAt(ar);
  s(o, h, b, Ba, Ba);
}
var Ca = '0123456789!@*()-=+";:?/.,';
for (var nr = 0; nr < Ca.length; nr++) {
  var Ea = Ca.charAt(nr);
  s(S, h, b, Ea, Ea);
}
var kt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var ir = 0; ir < kt.length; ir++) {
  var ut = kt.charAt(ir);
  (s(o, h, L, ut, ut), s(S, h, b, ut, ut));
}
s(o, p, b, "C", "ℂ");
s(S, p, b, "C", "ℂ");
s(o, p, b, "H", "ℍ");
s(S, p, b, "H", "ℍ");
s(o, p, b, "N", "ℕ");
s(S, p, b, "N", "ℕ");
s(o, p, b, "P", "ℙ");
s(S, p, b, "P", "ℙ");
s(o, p, b, "Q", "ℚ");
s(S, p, b, "Q", "ℚ");
s(o, p, b, "R", "ℝ");
s(S, p, b, "R", "ℝ");
s(o, p, b, "Z", "ℤ");
s(S, p, b, "Z", "ℤ");
s(o, h, L, "h", "ℎ");
s(S, h, L, "h", "ℎ");
var H = "";
for (var T0 = 0; T0 < kt.length; T0++) {
  var u0 = kt.charAt(T0);
  ((H = String.fromCharCode(55349, 56320 + T0)),
    s(o, h, L, u0, H),
    s(S, h, b, u0, H),
    (H = String.fromCharCode(55349, 56372 + T0)),
    s(o, h, L, u0, H),
    s(S, h, b, u0, H),
    (H = String.fromCharCode(55349, 56424 + T0)),
    s(o, h, L, u0, H),
    s(S, h, b, u0, H),
    (H = String.fromCharCode(55349, 56580 + T0)),
    s(o, h, L, u0, H),
    s(S, h, b, u0, H),
    (H = String.fromCharCode(55349, 56684 + T0)),
    s(o, h, L, u0, H),
    s(S, h, b, u0, H),
    (H = String.fromCharCode(55349, 56736 + T0)),
    s(o, h, L, u0, H),
    s(S, h, b, u0, H),
    (H = String.fromCharCode(55349, 56788 + T0)),
    s(o, h, L, u0, H),
    s(S, h, b, u0, H),
    (H = String.fromCharCode(55349, 56840 + T0)),
    s(o, h, L, u0, H),
    s(S, h, b, u0, H),
    (H = String.fromCharCode(55349, 56944 + T0)),
    s(o, h, L, u0, H),
    s(S, h, b, u0, H),
    T0 < 26 &&
      ((H = String.fromCharCode(55349, 56632 + T0)),
      s(o, h, L, u0, H),
      s(S, h, b, u0, H),
      (H = String.fromCharCode(55349, 56476 + T0)),
      s(o, h, L, u0, H),
      s(S, h, b, u0, H)));
}
H = "𝕜";
s(o, h, L, "k", H);
s(S, h, b, "k", H);
for (var Te = 0; Te < 10; Te++) {
  var he = Te.toString();
  ((H = String.fromCharCode(55349, 57294 + Te)),
    s(o, h, L, he, H),
    s(S, h, b, he, H),
    (H = String.fromCharCode(55349, 57314 + Te)),
    s(o, h, L, he, H),
    s(S, h, b, he, H),
    (H = String.fromCharCode(55349, 57324 + Te)),
    s(o, h, L, he, H),
    s(S, h, b, he, H),
    (H = String.fromCharCode(55349, 57334 + Te)),
    s(o, h, L, he, H),
    s(S, h, b, he, H));
}
var Ar = "ÐÞþ";
for (var sr = 0; sr < Ar.length; sr++) {
  var ct = Ar.charAt(sr);
  (s(o, h, L, ct, ct), s(S, h, b, ct, ct));
}
var ht = [
    ["mathbf", "textbf", "Main-Bold"],
    ["mathbf", "textbf", "Main-Bold"],
    ["mathnormal", "textit", "Math-Italic"],
    ["mathnormal", "textit", "Math-Italic"],
    ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
    ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
    ["mathscr", "textscr", "Script-Regular"],
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
    ["mathfrak", "textfrak", "Fraktur-Regular"],
    ["mathfrak", "textfrak", "Fraktur-Regular"],
    ["mathbb", "textbb", "AMS-Regular"],
    ["mathbb", "textbb", "AMS-Regular"],
    ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
    ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
    ["mathsf", "textsf", "SansSerif-Regular"],
    ["mathsf", "textsf", "SansSerif-Regular"],
    ["mathboldsf", "textboldsf", "SansSerif-Bold"],
    ["mathboldsf", "textboldsf", "SansSerif-Bold"],
    ["mathitsf", "textitsf", "SansSerif-Italic"],
    ["mathitsf", "textitsf", "SansSerif-Italic"],
    ["", "", ""],
    ["", "", ""],
    ["mathtt", "texttt", "Typewriter-Regular"],
    ["mathtt", "texttt", "Typewriter-Regular"],
  ],
  Da = [
    ["mathbf", "textbf", "Main-Bold"],
    ["", "", ""],
    ["mathsf", "textsf", "SansSerif-Regular"],
    ["mathboldsf", "textboldsf", "SansSerif-Bold"],
    ["mathtt", "texttt", "Typewriter-Regular"],
  ],
  sl = (r, e) => {
    var t = r.charCodeAt(0),
      a = r.charCodeAt(1),
      n = (t - 55296) * 1024 + (a - 56320) + 65536,
      i = e === "math" ? 0 : 1;
    if (119808 <= n && n < 120484) {
      var l = Math.floor((n - 119808) / 26);
      return [ht[l][2], ht[l][i]];
    } else if (120782 <= n && n <= 120831) {
      var u = Math.floor((n - 120782) / 10);
      return [Da[u][2], Da[u][i]];
    } else {
      if (n === 120485 || n === 120486) return [ht[0][2], ht[0][i]];
      if (120486 < n && n < 120782) return ["", ""];
      throw new A("Unsupported character: " + r);
    }
  },
  Nt = function (e, t, a) {
    if (n0[a][e]) {
      var n = n0[a][e].replace;
      n && (e = n);
    }
    return { value: e, metrics: Gr(e, t, a) };
  },
  A0 = function (e, t, a, n, i) {
    var l = Nt(e, t, a),
      u = l.metrics;
    e = l.value;
    var c;
    if (u) {
      var d = u.italic;
      ((a === "text" || (n && n.font === "mathit")) && (d = 0),
        (c = new R0(e, u.height, u.depth, d, u.skew, u.width, i)));
    } else
      (typeof console < "u" &&
        console.warn(
          "No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + a + "'"),
        ),
        (c = new R0(e, 0, 0, 0, 0, 0, i)));
    if (n) {
      ((c.maxFontSize = n.sizeMultiplier), n.style.isTight() && c.classes.push("mtight"));
      var f = n.getColor();
      f && (c.style.color = f);
    }
    return c;
  },
  Wr = function (e, t, a, n) {
    return (
      n === void 0 && (n = []),
      a.font === "boldsymbol" && Nt(e, "Main-Bold", t).metrics
        ? A0(e, "Main-Bold", t, a, n.concat(["mathbf"]))
        : e === "\\" || n0[t][e].font === "main"
          ? A0(e, "Main-Regular", t, a, n)
          : A0(e, "AMS-Regular", t, a, n.concat(["amsrm"]))
    );
  },
  ll = function (e, t, a, n, i) {
    return i !== "textord" && Nt(e, "Math-BoldItalic", t).metrics
      ? { fontName: "Math-BoldItalic", fontClass: "boldsymbol" }
      : { fontName: "Main-Bold", fontClass: "mathbf" };
  },
  qt = function (e, t, a) {
    var n = e.mode,
      i = e.text,
      l = ["mord"],
      u = n === "math" || (n === "text" && t.font),
      c = u ? t.font : t.fontFamily,
      d = "",
      f = "";
    if ((i.charCodeAt(0) === 55349 && ([d, f] = sl(i, n)), d.length > 0))
      return A0(i, d, n, t, l.concat(f));
    if (c) {
      var g, y;
      if (c === "boldsymbol") {
        var x = ll(i, n, t, l, a);
        ((g = x.fontName), (y = [x.fontClass]));
      } else
        u
          ? ((g = Mr[c].fontName), (y = [c]))
          : ((g = mt(c, t.fontWeight, t.fontShape)), (y = [c, t.fontWeight, t.fontShape]));
      if (Nt(i, g, n).metrics) return A0(i, g, n, t, l.concat(y));
      if (Nn.hasOwnProperty(i) && g.slice(0, 10) === "Typewriter") {
        for (var w = [], T = 0; T < i.length; T++) w.push(A0(i[T], g, n, t, l.concat(y)));
        return ue(w);
      }
    }
    if (a === "mathord") return A0(i, "Math-Italic", n, t, l.concat(["mathnormal"]));
    if (a === "textord") {
      var B = n0[n][i] && n0[n][i].font;
      if (B === "ams") {
        var C = mt("amsrm", t.fontWeight, t.fontShape);
        return A0(i, C, n, t, l.concat("amsrm", t.fontWeight, t.fontShape));
      } else if (B === "main" || !B) {
        var N = mt("textrm", t.fontWeight, t.fontShape);
        return A0(i, N, n, t, l.concat(t.fontWeight, t.fontShape));
      } else {
        var q = mt(B, t.fontWeight, t.fontShape);
        return A0(i, q, n, t, l.concat(q, t.fontWeight, t.fontShape));
      }
    } else throw new Error("unexpected type: " + a + " in makeOrd");
  },
  ol = (r, e) => {
    if (
      fe(r.classes) !== fe(e.classes) ||
      r.skew !== e.skew ||
      r.maxFontSize !== e.maxFontSize ||
      (r.italic !== 0 && r.hasClass("mathnormal"))
    )
      return !1;
    if (r.classes.length === 1) {
      var t = r.classes[0];
      if (t === "mbin" || t === "mord") return !1;
    }
    for (var a of Object.keys(r.style)) if (r.style[a] !== e.style[a]) return !1;
    for (var n of Object.keys(e.style)) if (r.style[n] !== e.style[n]) return !1;
    return !0;
  },
  qn = (r) => {
    for (var e = 0; e < r.length - 1; e++) {
      var t = r[e],
        a = r[e + 1];
      t instanceof R0 &&
        a instanceof R0 &&
        ol(t, a) &&
        ((t.text += a.text),
        (t.height = Math.max(t.height, a.height)),
        (t.depth = Math.max(t.depth, a.depth)),
        (t.italic = a.italic),
        r.splice(e + 1, 1),
        e--);
    }
    return r;
  },
  jr = function (e) {
    for (var t = 0, a = 0, n = 0, i = 0; i < e.children.length; i++) {
      var l = e.children[i];
      (l.height > t && (t = l.height),
        l.depth > a && (a = l.depth),
        l.maxFontSize > n && (n = l.maxFontSize));
    }
    ((e.height = t), (e.depth = a), (e.maxFontSize = n));
  },
  k = function (e, t, a, n) {
    var i = new je(e, t, a, n);
    return (jr(i), i);
  },
  ve = (r, e, t, a) => new je(r, e, t, a),
  Fe = function (e, t, a) {
    var n = k([e], [], t);
    return (
      (n.height = Math.max(a || t.fontMetrics().defaultRuleThickness, t.minRuleThickness)),
      (n.style.borderBottomWidth = z(n.height)),
      (n.maxFontSize = 1),
      n
    );
  },
  ul = function (e, t, a, n) {
    var i = new Rt(e, t, a, n);
    return (jr(i), i);
  },
  ue = function (e) {
    var t = new We(e);
    return (jr(t), t);
  },
  Pe = function (e, t) {
    return e instanceof We ? k([], [e], t) : e;
  },
  cl = function (e) {
    if (e.positionType === "individualShift") {
      for (
        var t = e.children, a = [t[0]], n = -t[0].shift - t[0].elem.depth, i = n, l = 1;
        l < t.length;
        l++
      ) {
        var u = -t[l].shift - i - t[l].elem.depth,
          c = u - (t[l - 1].elem.height + t[l - 1].elem.depth);
        ((i = i + u), a.push({ type: "kern", size: c }), a.push(t[l]));
      }
      return { children: a, depth: n };
    }
    var d;
    if (e.positionType === "top") {
      for (var f = e.positionData, g = 0; g < e.children.length; g++) {
        var y = e.children[g];
        f -= y.type === "kern" ? y.size : y.elem.height + y.elem.depth;
      }
      d = f;
    } else if (e.positionType === "bottom") d = -e.positionData;
    else {
      var x = e.children[0];
      if (x.type !== "elem") throw new Error('First child must have type "elem".');
      if (e.positionType === "shift") d = -x.elem.depth - e.positionData;
      else if (e.positionType === "firstBaseline") d = -x.elem.depth;
      else throw new Error("Invalid positionType " + e.positionType + ".");
    }
    return { children: e.children, depth: d };
  },
  _ = function (e, t) {
    for (var { children: a, depth: n } = cl(e), i = 0, l = 0; l < a.length; l++) {
      var u = a[l];
      if (u.type === "elem") {
        var c = u.elem;
        i = Math.max(i, c.maxFontSize, c.height);
      }
    }
    i += 2;
    var d = k(["pstrut"], []);
    d.style.height = z(i);
    for (var f = [], g = n, y = n, x = n, w = 0; w < a.length; w++) {
      var T = a[w];
      if (T.type === "kern") x += T.size;
      else {
        var B = T.elem,
          C = T.wrapperClasses || [],
          N = T.wrapperStyle || {},
          q = k(C, [d, B], void 0, N);
        ((q.style.top = z(-i - x - B.depth)),
          T.marginLeft && (q.style.marginLeft = T.marginLeft),
          T.marginRight && (q.style.marginRight = T.marginRight),
          f.push(q),
          (x += B.height + B.depth));
      }
      ((g = Math.min(g, x)), (y = Math.max(y, x)));
    }
    var O = k(["vlist"], f);
    O.style.height = z(y);
    var $;
    if (g < 0) {
      var P = k([], []),
        U = k(["vlist"], [P]);
      U.style.height = z(-g);
      var X = k(["vlist-s"], [new R0("​")]);
      $ = [k(["vlist-r"], [O, X]), k(["vlist-r"], [U])];
    } else $ = [k(["vlist-r"], [O])];
    var G = k(["vlist-t"], $);
    return ($.length === 2 && G.classes.push("vlist-t2"), (G.height = y), (G.depth = -g), G);
  },
  Ln = (r, e) => {
    var t = k(["mspace"], [], e),
      a = o0(r, e);
    return ((t.style.marginRight = z(a)), t);
  },
  mt = function (e, t, a) {
    var n = "";
    switch (e) {
      case "amsrm":
        n = "AMS";
        break;
      case "textrm":
        n = "Main";
        break;
      case "textsf":
        n = "SansSerif";
        break;
      case "texttt":
        n = "Typewriter";
        break;
      default:
        n = e;
    }
    var i;
    return (
      t === "textbf" && a === "textit"
        ? (i = "BoldItalic")
        : t === "textbf"
          ? (i = "Bold")
          : t === "textit"
            ? (i = "Italic")
            : (i = "Regular"),
      n + "-" + i
    );
  },
  Mr = {
    mathbf: { variant: "bold", fontName: "Main-Bold" },
    mathrm: { variant: "normal", fontName: "Main-Regular" },
    textit: { variant: "italic", fontName: "Main-Italic" },
    mathit: { variant: "italic", fontName: "Main-Italic" },
    mathnormal: { variant: "italic", fontName: "Math-Italic" },
    mathsfit: { variant: "sans-serif-italic", fontName: "SansSerif-Italic" },
    mathbb: { variant: "double-struck", fontName: "AMS-Regular" },
    mathcal: { variant: "script", fontName: "Caligraphic-Regular" },
    mathfrak: { variant: "fraktur", fontName: "Fraktur-Regular" },
    mathscr: { variant: "script", fontName: "Script-Regular" },
    mathsf: { variant: "sans-serif", fontName: "SansSerif-Regular" },
    mathtt: { variant: "monospace", fontName: "Typewriter-Regular" },
  },
  Hn = {
    vec: ["vec", 0.471, 0.714],
    oiintSize1: ["oiintSize1", 0.957, 0.499],
    oiintSize2: ["oiintSize2", 1.472, 0.659],
    oiiintSize1: ["oiiintSize1", 1.304, 0.499],
    oiiintSize2: ["oiiintSize2", 1.98, 0.659],
  },
  On = function (e, t) {
    var [a, n, i] = Hn[e],
      l = new pe(a),
      u = new se([l], {
        width: z(n),
        height: z(i),
        style: "width:" + z(n),
        viewBox: "0 0 " + 1e3 * n + " " + 1e3 * i,
        preserveAspectRatio: "xMinYMin",
      }),
      c = ve(["overlay"], [u], t);
    return ((c.height = i), (c.style.height = z(i)), (c.style.width = z(n)), c);
  },
  s0 = { number: 3, unit: "mu" },
  Ae = { number: 4, unit: "mu" },
  re = { number: 5, unit: "mu" },
  hl = {
    mord: { mop: s0, mbin: Ae, mrel: re, minner: s0 },
    mop: { mord: s0, mop: s0, mrel: re, minner: s0 },
    mbin: { mord: Ae, mop: Ae, mopen: Ae, minner: Ae },
    mrel: { mord: re, mop: re, mopen: re, minner: re },
    mopen: {},
    mclose: { mop: s0, mbin: Ae, mrel: re, minner: s0 },
    mpunct: { mord: s0, mop: s0, mrel: re, mopen: s0, mclose: s0, mpunct: s0, minner: s0 },
    minner: { mord: s0, mop: s0, mbin: Ae, mrel: re, mopen: s0, mpunct: s0, minner: s0 },
  },
  ml = {
    mord: { mop: s0 },
    mop: { mord: s0, mop: s0 },
    mbin: {},
    mrel: {},
    mopen: {},
    mclose: { mop: s0 },
    mpunct: {},
    minner: { mop: s0 },
  },
  Fn = {},
  Tt = {},
  At = {};
function E(r) {
  for (
    var { type: e, names: t, props: a, handler: n, htmlBuilder: i, mathmlBuilder: l } = r,
      u = {
        type: e,
        numArgs: a.numArgs,
        argTypes: a.argTypes,
        allowedInArgument: !!a.allowedInArgument,
        allowedInText: !!a.allowedInText,
        allowedInMath: a.allowedInMath === void 0 ? !0 : a.allowedInMath,
        numOptionalArgs: a.numOptionalArgs || 0,
        infix: !!a.infix,
        primitive: !!a.primitive,
        handler: n,
      },
      c = 0;
    c < t.length;
    ++c
  )
    Fn[t[c]] = u;
  e && (i && (Tt[e] = i), l && (At[e] = l));
}
function Be(r) {
  var { type: e, htmlBuilder: t, mathmlBuilder: a } = r;
  E({
    type: e,
    names: [],
    props: { numArgs: 0 },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: t,
    mathmlBuilder: a,
  });
}
var Mt = function (e) {
    return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
  },
  f0 = function (e) {
    return e.type === "ordgroup" ? e.body : [e];
  },
  dl = new Set(["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"]),
  fl = new Set(["rightmost", "mrel", "mclose", "mpunct"]),
  pl = { display: F.DISPLAY, text: F.TEXT, script: F.SCRIPT, scriptscript: F.SCRIPTSCRIPT },
  vl = {
    mord: "mord",
    mop: "mop",
    mbin: "mbin",
    mrel: "mrel",
    mopen: "mopen",
    mclose: "mclose",
    mpunct: "mpunct",
    minner: "minner",
  },
  y0 = function (e, t, a, n) {
    n === void 0 && (n = [null, null]);
    for (var i = [], l = 0; l < e.length; l++) {
      var u = e0(e[l], t);
      if (u instanceof We) {
        var c = u.children;
        i.push(...c);
      } else i.push(u);
    }
    if ((qn(i), !a)) return i;
    var d = t;
    if (e.length === 1) {
      var f = e[0];
      f.type === "sizing"
        ? (d = t.havingSize(f.size))
        : f.type === "styling" && (d = t.havingStyle(pl[f.style]));
    }
    var g = k([n[0] || "leftmost"], [], t),
      y = k([n[1] || "rightmost"], [], t),
      x = a === "root";
    return (
      zr(
        i,
        (w, T) => {
          var B = T.classes[0],
            C = w.classes[0];
          B === "mbin" && fl.has(C)
            ? (T.classes[0] = "mord")
            : C === "mbin" && dl.has(B) && (w.classes[0] = "mord");
        },
        { node: g },
        y,
        x,
      ),
      zr(
        i,
        (w, T) => {
          var B,
            C,
            N = Cr(T),
            q = Cr(w),
            O =
              N && q
                ? w.hasClass("mtight")
                  ? (B = ml[N]) == null
                    ? void 0
                    : B[q]
                  : (C = hl[N]) == null
                    ? void 0
                    : C[q]
                : null;
          if (O) return Ln(O, d);
        },
        { node: g },
        y,
        x,
      ),
      i
    );
  },
  zr = function (e, t, a, n, i) {
    n && e.push(n);
    for (var l = 0; l < e.length; l++) {
      var u = e[l],
        c = Pn(u);
      if (c) {
        zr(c.children, t, a, null, i);
        continue;
      }
      var d = !u.hasClass("mspace");
      if (d) {
        var f = t(u, a.node);
        f && (a.insertAfter ? a.insertAfter(f) : (e.unshift(f), l++));
      }
      (d ? (a.node = u) : i && u.hasClass("newline") && (a.node = k(["leftmost"])),
        (a.insertAfter = ((g) => (y) => {
          (e.splice(g + 1, 0, y), l++);
        })(l)));
    }
    n && e.pop();
  },
  Pn = function (e) {
    return e instanceof We || e instanceof Rt || (e instanceof je && e.hasClass("enclosing"))
      ? e
      : null;
  },
  Br = function (e, t) {
    var a = Pn(e);
    if (a) {
      var n = a.children;
      if (n.length) {
        if (t === "right") return Br(n[n.length - 1], "right");
        if (t === "left") return Br(n[0], "left");
      }
    }
    return e;
  },
  Cr = function (e, t) {
    if (!e) return null;
    t && (e = Br(e, t));
    var a = e.classes[0];
    return vl[a] || null;
  },
  tt = function (e, t) {
    var a = ["nulldelimiter"].concat(e.baseSizingClasses());
    return k(t.concat(a));
  },
  e0 = function (e, t, a) {
    if (!e) return k();
    if (Tt[e.type]) {
      var n = Tt[e.type](e, t);
      if (a && t.size !== a.size) {
        n = k(t.sizingClasses(a), [n], t);
        var i = t.sizeMultiplier / a.sizeMultiplier;
        ((n.height *= i), (n.depth *= i));
      }
      return n;
    } else throw new A("Got group of unknown type: '" + e.type + "'");
  };
function dt(r, e) {
  var t = k(["base"], r, e),
    a = k(["strut"]);
  return (
    (a.style.height = z(t.height + t.depth)),
    t.depth && (a.style.verticalAlign = z(-t.depth)),
    t.children.unshift(a),
    t
  );
}
function Er(r, e) {
  var t = null;
  r.length === 1 && r[0].type === "tag" && ((t = r[0].tag), (r = r[0].body));
  var a = y0(r, e, "root"),
    n;
  a.length === 2 && a[1].hasClass("tag") && (n = a.pop());
  for (var i = [], l = [], u = 0; u < a.length; u++)
    if (
      (l.push(a[u]), a[u].hasClass("mbin") || a[u].hasClass("mrel") || a[u].hasClass("allowbreak"))
    ) {
      for (
        var c = !1;
        u < a.length - 1 && a[u + 1].hasClass("mspace") && !a[u + 1].hasClass("newline");
      )
        (u++, l.push(a[u]), a[u].hasClass("nobreak") && (c = !0));
      c || (i.push(dt(l, e)), (l = []));
    } else
      a[u].hasClass("newline") &&
        (l.pop(), l.length > 0 && (i.push(dt(l, e)), (l = [])), i.push(a[u]));
  l.length > 0 && i.push(dt(l, e));
  var d;
  t ? ((d = dt(y0(t, e, !0), e)), (d.classes = ["tag"]), i.push(d)) : n && i.push(n);
  var f = k(["katex-html"], i);
  if ((f.setAttribute("aria-hidden", "true"), d)) {
    var g = d.children[0];
    ((g.style.height = z(f.height + f.depth)), f.depth && (g.style.verticalAlign = z(-f.depth)));
  }
  return f;
}
function $n(r) {
  return new We(r);
}
class M {
  constructor(e, t, a) {
    ((this.type = e), (this.attributes = {}), (this.children = t || []), (this.classes = a || []));
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  toNode() {
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) &&
        e.setAttribute(t, this.attributes[t]);
    this.classes.length > 0 && (e.className = fe(this.classes));
    for (var a = 0; a < this.children.length; a++)
      if (this.children[a] instanceof p0 && this.children[a + 1] instanceof p0) {
        for (
          var n = this.children[a].toText() + this.children[++a].toText();
          this.children[a + 1] instanceof p0;
        )
          n += this.children[++a].toText();
        e.appendChild(new p0(n).toNode());
      } else e.appendChild(this.children[a].toNode());
    return e;
  }
  toMarkup() {
    var e = "<" + this.type;
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) &&
        ((e += " " + t + '="'), (e += S0(this.attributes[t])), (e += '"'));
    (this.classes.length > 0 && (e += ' class ="' + S0(fe(this.classes)) + '"'), (e += ">"));
    for (var a = 0; a < this.children.length; a++) e += this.children[a].toMarkup();
    return ((e += "</" + this.type + ">"), e);
  }
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
}
class p0 {
  constructor(e) {
    this.text = e;
  }
  toNode() {
    return document.createTextNode(this.text);
  }
  toMarkup() {
    return S0(this.toText());
  }
  toText() {
    return this.text;
  }
}
class Gn {
  constructor(e) {
    ((this.width = e),
      e >= 0.05555 && e <= 0.05556
        ? (this.character = " ")
        : e >= 0.1666 && e <= 0.1667
          ? (this.character = " ")
          : e >= 0.2222 && e <= 0.2223
            ? (this.character = " ")
            : e >= 0.2777 && e <= 0.2778
              ? (this.character = "  ")
              : e >= -0.05556 && e <= -0.05555
                ? (this.character = " ⁣")
                : e >= -0.1667 && e <= -0.1666
                  ? (this.character = " ⁣")
                  : e >= -0.2223 && e <= -0.2222
                    ? (this.character = " ⁣")
                    : e >= -0.2778 && e <= -0.2777
                      ? (this.character = " ⁣")
                      : (this.character = null));
  }
  toNode() {
    if (this.character) return document.createTextNode(this.character);
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
    return (e.setAttribute("width", z(this.width)), e);
  }
  toMarkup() {
    return this.character
      ? "<mtext>" + this.character + "</mtext>"
      : '<mspace width="' + z(this.width) + '"/>';
  }
  toText() {
    return this.character ? this.character : " ";
  }
}
var gl = new Set(["\\imath", "\\jmath"]),
  bl = new Set(["mrow", "mtable"]),
  $0 = function (e, t, a) {
    return (
      n0[t][e] &&
        n0[t][e].replace &&
        e.charCodeAt(0) !== 55349 &&
        !(
          Nn.hasOwnProperty(e) &&
          a &&
          ((a.fontFamily && a.fontFamily.slice(4, 6) === "tt") ||
            (a.font && a.font.slice(4, 6) === "tt"))
        ) &&
        (e = n0[t][e].replace),
      new p0(e)
    );
  },
  Ur = function (e) {
    return e.length === 1 ? e[0] : new M("mrow", e);
  },
  Xr = function (e, t) {
    if (t.fontFamily === "texttt") return "monospace";
    if (t.fontFamily === "textsf")
      return t.fontShape === "textit" && t.fontWeight === "textbf"
        ? "sans-serif-bold-italic"
        : t.fontShape === "textit"
          ? "sans-serif-italic"
          : t.fontWeight === "textbf"
            ? "bold-sans-serif"
            : "sans-serif";
    if (t.fontShape === "textit" && t.fontWeight === "textbf") return "bold-italic";
    if (t.fontShape === "textit") return "italic";
    if (t.fontWeight === "textbf") return "bold";
    var a = t.font;
    if (!a || a === "mathnormal") return null;
    var n = e.mode;
    if (a === "mathit") return "italic";
    if (a === "boldsymbol") return e.type === "textord" ? "bold" : "bold-italic";
    if (a === "mathbf") return "bold";
    if (a === "mathbb") return "double-struck";
    if (a === "mathsfit") return "sans-serif-italic";
    if (a === "mathfrak") return "fraktur";
    if (a === "mathscr" || a === "mathcal") return "script";
    if (a === "mathsf") return "sans-serif";
    if (a === "mathtt") return "monospace";
    var i = e.text;
    if (gl.has(i)) return null;
    if (n0[n][i]) {
      var l = n0[n][i].replace;
      l && (i = l);
    }
    var u = Mr[a].fontName;
    return Gr(i, u, n) ? Mr[a].variant : null;
  };
function lr(r) {
  if (!r) return !1;
  if (r.type === "mi" && r.children.length === 1) {
    var e = r.children[0];
    return e instanceof p0 && e.text === ".";
  } else if (
    r.type === "mo" &&
    r.children.length === 1 &&
    r.getAttribute("separator") === "true" &&
    r.getAttribute("lspace") === "0em" &&
    r.getAttribute("rspace") === "0em"
  ) {
    var t = r.children[0];
    return t instanceof p0 && t.text === ",";
  } else return !1;
}
var q0 = function (e, t, a) {
    if (e.length === 1) {
      var n = r0(e[0], t);
      return (
        a &&
          n instanceof M &&
          n.type === "mo" &&
          (n.setAttribute("lspace", "0em"), n.setAttribute("rspace", "0em")),
        [n]
      );
    }
    for (var i = [], l, u = 0; u < e.length; u++) {
      var c = r0(e[u], t);
      if (c instanceof M && l instanceof M) {
        if (
          c.type === "mtext" &&
          l.type === "mtext" &&
          c.getAttribute("mathvariant") === l.getAttribute("mathvariant")
        ) {
          l.children.push(...c.children);
          continue;
        } else if (c.type === "mn" && l.type === "mn") {
          l.children.push(...c.children);
          continue;
        } else if (lr(c) && l.type === "mn") {
          l.children.push(...c.children);
          continue;
        } else if (c.type === "mn" && lr(l))
          ((c.children = [...l.children, ...c.children]), i.pop());
        else if (
          (c.type === "msup" || c.type === "msub") &&
          c.children.length >= 1 &&
          (l.type === "mn" || lr(l))
        ) {
          var d = c.children[0];
          d instanceof M &&
            d.type === "mn" &&
            ((d.children = [...l.children, ...d.children]), i.pop());
        } else if (l.type === "mi" && l.children.length === 1) {
          var f = l.children[0];
          if (
            f instanceof p0 &&
            f.text === "̸" &&
            (c.type === "mo" || c.type === "mi" || c.type === "mn")
          ) {
            var g = c.children[0];
            g instanceof p0 &&
              g.text.length > 0 &&
              ((g.text = g.text.slice(0, 1) + "̸" + g.text.slice(1)), i.pop());
          }
        }
      }
      (i.push(c), (l = c));
    }
    return i;
  },
  ge = function (e, t, a) {
    return Ur(q0(e, t, a));
  },
  r0 = function (e, t) {
    if (!e) return new M("mrow");
    if (At[e.type]) {
      var a = At[e.type](e, t);
      return a;
    } else throw new A("Got group of unknown type: '" + e.type + "'");
  };
function Ia(r, e, t, a, n) {
  var i = q0(r, t),
    l;
  i.length === 1 && i[0] instanceof M && bl.has(i[0].type) ? (l = i[0]) : (l = new M("mrow", i));
  var u = new M("annotation", [new p0(e)]);
  u.setAttribute("encoding", "application/x-tex");
  var c = new M("semantics", [l, u]),
    d = new M("math", [c]);
  (d.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"),
    a && d.setAttribute("display", "block"));
  var f = n ? "katex" : "katex-mathml";
  return k([f], [d]);
}
var yl = [
    [1, 1, 1],
    [2, 1, 1],
    [3, 1, 1],
    [4, 2, 1],
    [5, 2, 1],
    [6, 3, 1],
    [7, 4, 2],
    [8, 6, 3],
    [9, 7, 6],
    [10, 8, 7],
    [11, 10, 9],
  ],
  Ra = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488],
  Na = function (e, t) {
    return t.size < 2 ? e : yl[e - 1][t.size - 1];
  };
class ne {
  constructor(e) {
    ((this.style = e.style),
      (this.color = e.color),
      (this.size = e.size || ne.BASESIZE),
      (this.textSize = e.textSize || this.size),
      (this.phantom = !!e.phantom),
      (this.font = e.font || ""),
      (this.fontFamily = e.fontFamily || ""),
      (this.fontWeight = e.fontWeight || ""),
      (this.fontShape = e.fontShape || ""),
      (this.sizeMultiplier = Ra[this.size - 1]),
      (this.maxSize = e.maxSize),
      (this.minRuleThickness = e.minRuleThickness),
      (this._fontMetrics = void 0));
  }
  extend(e) {
    var t = {
      style: this.style,
      size: this.size,
      textSize: this.textSize,
      color: this.color,
      phantom: this.phantom,
      font: this.font,
      fontFamily: this.fontFamily,
      fontWeight: this.fontWeight,
      fontShape: this.fontShape,
      maxSize: this.maxSize,
      minRuleThickness: this.minRuleThickness,
    };
    return (Object.assign(t, e), new ne(t));
  }
  havingStyle(e) {
    return this.style === e ? this : this.extend({ style: e, size: Na(this.textSize, e) });
  }
  havingCrampedStyle() {
    return this.havingStyle(this.style.cramp());
  }
  havingSize(e) {
    return this.size === e && this.textSize === e
      ? this
      : this.extend({ style: this.style.text(), size: e, textSize: e, sizeMultiplier: Ra[e - 1] });
  }
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = Na(ne.BASESIZE, e);
    return this.size === t && this.textSize === ne.BASESIZE && this.style === e
      ? this
      : this.extend({ style: e, size: t });
  }
  havingBaseSizing() {
    var e;
    switch (this.style.id) {
      case 4:
      case 5:
        e = 3;
        break;
      case 6:
      case 7:
        e = 1;
        break;
      default:
        e = 6;
    }
    return this.extend({ style: this.style.text(), size: e });
  }
  withColor(e) {
    return this.extend({ color: e });
  }
  withPhantom() {
    return this.extend({ phantom: !0 });
  }
  withFont(e) {
    return this.extend({ font: e });
  }
  withTextFontFamily(e) {
    return this.extend({ fontFamily: e, font: "" });
  }
  withTextFontWeight(e) {
    return this.extend({ fontWeight: e, font: "" });
  }
  withTextFontShape(e) {
    return this.extend({ fontShape: e, font: "" });
  }
  sizingClasses(e) {
    return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : [];
  }
  baseSizingClasses() {
    return this.size !== ne.BASESIZE
      ? ["sizing", "reset-size" + this.size, "size" + ne.BASESIZE]
      : [];
  }
  fontMetrics() {
    return (this._fontMetrics || (this._fontMetrics = al(this.size)), this._fontMetrics);
  }
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
ne.BASESIZE = 6;
var Wn = function (e) {
    return new ne({
      style: e.displayMode ? F.DISPLAY : F.TEXT,
      maxSize: e.maxSize,
      minRuleThickness: e.minRuleThickness,
    });
  },
  jn = function (e, t) {
    if (t.displayMode) {
      var a = ["katex-display"];
      (t.leqno && a.push("leqno"), t.fleqn && a.push("fleqn"), (e = k(a, [e])));
    }
    return e;
  },
  xl = function (e, t, a) {
    var n = Wn(a),
      i;
    if (a.output === "mathml") return Ia(e, t, n, a.displayMode, !0);
    if (a.output === "html") {
      var l = Er(e, n);
      i = k(["katex"], [l]);
    } else {
      var u = Ia(e, t, n, a.displayMode, !1),
        c = Er(e, n);
      i = k(["katex"], [u, c]);
    }
    return jn(i, a);
  },
  wl = function (e, t, a) {
    var n = Wn(a),
      i = Er(e, n),
      l = k(["katex"], [i]);
    return jn(l, a);
  },
  Sl = {
    widehat: "^",
    widecheck: "ˇ",
    widetilde: "~",
    utilde: "~",
    overleftarrow: "←",
    underleftarrow: "←",
    xleftarrow: "←",
    overrightarrow: "→",
    underrightarrow: "→",
    xrightarrow: "→",
    underbrace: "⏟",
    overbrace: "⏞",
    underbracket: "⎵",
    overbracket: "⎴",
    overgroup: "⏠",
    undergroup: "⏡",
    overleftrightarrow: "↔",
    underleftrightarrow: "↔",
    xleftrightarrow: "↔",
    Overrightarrow: "⇒",
    xRightarrow: "⇒",
    overleftharpoon: "↼",
    xleftharpoonup: "↼",
    overrightharpoon: "⇀",
    xrightharpoonup: "⇀",
    xLeftarrow: "⇐",
    xLeftrightarrow: "⇔",
    xhookleftarrow: "↩",
    xhookrightarrow: "↪",
    xmapsto: "↦",
    xrightharpoondown: "⇁",
    xleftharpoondown: "↽",
    xrightleftharpoons: "⇌",
    xleftrightharpoons: "⇋",
    xtwoheadleftarrow: "↞",
    xtwoheadrightarrow: "↠",
    xlongequal: "=",
    xtofrom: "⇄",
    xrightleftarrows: "⇄",
    xrightequilibrium: "⇌",
    xleftequilibrium: "⇋",
    "\\cdrightarrow": "→",
    "\\cdleftarrow": "←",
    "\\cdlongequal": "=",
  },
  Lt = function (e) {
    var t = new M("mo", [new p0(Sl[e.replace(/^\\/, "")])]);
    return (t.setAttribute("stretchy", "true"), t);
  },
  kl = {
    overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
    overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
    underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
    underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
    xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
    "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
    xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
    "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
    Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
    xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
    xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
    overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
    xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
    xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
    overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
    xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
    xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
    xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
    "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
    xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
    xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
    overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
    overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
    underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
    underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
    xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
    xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
    xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
    xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
    xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
    xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
    overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
    underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
    overbracket: [["leftbracketover", "rightbracketover"], 1.6, 440],
    underbracket: [["leftbracketunder", "rightbracketunder"], 1.6, 410],
    overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
    undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
    xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
    xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
    xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
    xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
    xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716],
  },
  Tl = new Set(["widehat", "widecheck", "widetilde", "utilde"]),
  Ht = function (e, t) {
    function a() {
      var u = 4e5,
        c = e.label.slice(1);
      if (Tl.has(c)) {
        var d = e,
          f = d.base.type === "ordgroup" ? d.base.body.length : 1,
          g,
          y,
          x;
        if (f > 5)
          c === "widehat" || c === "widecheck"
            ? ((g = 420), (u = 2364), (x = 0.42), (y = c + "4"))
            : ((g = 312), (u = 2340), (x = 0.34), (y = "tilde4"));
        else {
          var w = [1, 1, 2, 2, 3, 3][f];
          c === "widehat" || c === "widecheck"
            ? ((u = [0, 1062, 2364, 2364, 2364][w]),
              (g = [0, 239, 300, 360, 420][w]),
              (x = [0, 0.24, 0.3, 0.3, 0.36, 0.42][w]),
              (y = c + w))
            : ((u = [0, 600, 1033, 2339, 2340][w]),
              (g = [0, 260, 286, 306, 312][w]),
              (x = [0, 0.26, 0.286, 0.3, 0.306, 0.34][w]),
              (y = "tilde" + w));
        }
        var T = new pe(y),
          B = new se([T], {
            width: "100%",
            height: z(x),
            viewBox: "0 0 " + u + " " + g,
            preserveAspectRatio: "none",
          });
        return { span: ve([], [B], t), minWidth: 0, height: x };
      } else {
        var C = [],
          N = kl[c],
          [q, O, $] = N,
          P = $ / 1e3,
          U = q.length,
          X,
          G;
        if (U === 1) {
          var J = N[3];
          ((X = ["hide-tail"]), (G = [J]));
        } else if (U === 2)
          ((X = ["halfarrow-left", "halfarrow-right"]), (G = ["xMinYMin", "xMaxYMin"]));
        else if (U === 3)
          ((X = ["brace-left", "brace-center", "brace-right"]),
            (G = ["xMinYMin", "xMidYMin", "xMaxYMin"]));
        else
          throw new Error(
            `Correct katexImagesData or update code here to support
                    ` +
              U +
              " children.",
          );
        for (var Z = 0; Z < U; Z++) {
          var V = new pe(q[Z]),
            x0 = new se([V], {
              width: "400em",
              height: z(P),
              viewBox: "0 0 " + u + " " + $,
              preserveAspectRatio: G[Z] + " slice",
            }),
            t0 = ve([X[Z]], [x0], t);
          if (U === 1) return { span: t0, minWidth: O, height: P };
          ((t0.style.height = z(P)), C.push(t0));
        }
        return { span: k(["stretchy"], C, t), minWidth: O, height: P };
      }
    }
    var { span: n, minWidth: i, height: l } = a();
    return ((n.height = l), (n.style.height = z(l)), i > 0 && (n.style.minWidth = z(i)), n);
  },
  Al = function (e, t, a, n, i) {
    var l,
      u = e.height + e.depth + a + n;
    if (/fbox|color|angl/.test(t)) {
      if (((l = k(["stretchy", t], [], i)), t === "fbox")) {
        var c = i.color && i.getColor();
        c && (l.style.borderColor = c);
      }
    } else {
      var d = [];
      (/^[bx]cancel$/.test(t) &&
        d.push(new Tr({ x1: "0", y1: "0", x2: "100%", y2: "100%", "stroke-width": "0.046em" })),
        /^x?cancel$/.test(t) &&
          d.push(new Tr({ x1: "0", y1: "100%", x2: "100%", y2: "0", "stroke-width": "0.046em" })));
      var f = new se(d, { width: "100%", height: z(u) });
      l = ve([], [f], i);
    }
    return ((l.height = u), (l.style.height = z(u)), l);
  };
function j(r, e) {
  if (!r || r.type !== e)
    throw new Error(
      "Expected node of type " + e + ", but got " + (r ? "node of type " + r.type : String(r)),
    );
  return r;
}
function Ot(r) {
  var e = Ft(r);
  if (!e)
    throw new Error(
      "Expected node of symbol group type, but got " + (r ? "node of type " + r.type : String(r)),
    );
  return e;
}
function Ft(r) {
  return r && (r.type === "atom" || il.hasOwnProperty(r.type)) ? r : null;
}
var Un = (r) => {
    if (r instanceof R0) return r;
    if (tl(r) && r.children.length === 1) return Un(r.children[0]);
  },
  Vr = (r, e) => {
    var t, a, n;
    r && r.type === "supsub"
      ? ((a = j(r.base, "accent")), (t = a.base), (r.base = t), (n = el(e0(r, e))), (r.base = a))
      : ((a = j(r, "accent")), (t = a.base));
    var i = e0(t, e.havingCrampedStyle()),
      l = a.isShifty && le(t),
      u = 0;
    if (l) {
      var c, d;
      u = (c = (d = Un(i)) == null ? void 0 : d.skew) != null ? c : 0;
    }
    var f = a.label === "\\c",
      g = f ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight),
      y;
    if (a.isStretchy)
      ((y = Ht(a, e)),
        (y = _({
          positionType: "firstBaseline",
          children: [
            { type: "elem", elem: i },
            {
              type: "elem",
              elem: y,
              wrapperClasses: ["svg-align"],
              wrapperStyle:
                u > 0 ? { width: "calc(100% - " + z(2 * u) + ")", marginLeft: z(2 * u) } : void 0,
            },
          ],
        })));
    else {
      var x, w;
      (a.label === "\\vec"
        ? ((x = On("vec", e)), (w = Hn.vec[1]))
        : ((x = qt({ mode: a.mode, text: a.label }, e, "textord")),
          (x = _s(x)),
          (x.italic = 0),
          (w = x.width),
          f && (g += x.depth)),
        (y = k(["accent-body"], [x])));
      var T = a.label === "\\textcircled";
      T && (y.classes.push("accent-full"), (g = i.height));
      var B = u;
      (T || (B -= w / 2),
        (y.style.left = z(B)),
        a.label === "\\textcircled" && (y.style.top = ".2em"),
        (y = _({
          positionType: "firstBaseline",
          children: [
            { type: "elem", elem: i },
            { type: "kern", size: -g },
            { type: "elem", elem: y },
          ],
        })));
    }
    var C = k(["mord", "accent"], [y], e);
    return n
      ? ((n.children[0] = C), (n.height = Math.max(C.height, n.height)), (n.classes[0] = "mord"), n)
      : C;
  },
  Xn = (r, e) => {
    var t = r.isStretchy ? Lt(r.label) : new M("mo", [$0(r.label, r.mode)]),
      a = new M("mover", [r0(r.base, e), t]);
    return (a.setAttribute("accent", "true"), a);
  },
  Ml = new RegExp(
    [
      "\\acute",
      "\\grave",
      "\\ddot",
      "\\tilde",
      "\\bar",
      "\\breve",
      "\\check",
      "\\hat",
      "\\vec",
      "\\dot",
      "\\mathring",
    ]
      .map((r) => "\\" + r)
      .join("|"),
  );
E({
  type: "accent",
  names: [
    "\\acute",
    "\\grave",
    "\\ddot",
    "\\tilde",
    "\\bar",
    "\\breve",
    "\\check",
    "\\hat",
    "\\vec",
    "\\dot",
    "\\mathring",
    "\\widecheck",
    "\\widehat",
    "\\widetilde",
    "\\overrightarrow",
    "\\overleftarrow",
    "\\Overrightarrow",
    "\\overleftrightarrow",
    "\\overgroup",
    "\\overlinesegment",
    "\\overleftharpoon",
    "\\overrightharpoon",
  ],
  props: { numArgs: 1 },
  handler: (r, e) => {
    var t = Mt(e[0]),
      a = !Ml.test(r.funcName),
      n =
        !a ||
        r.funcName === "\\widehat" ||
        r.funcName === "\\widetilde" ||
        r.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: r.parser.mode,
      label: r.funcName,
      isStretchy: a,
      isShifty: n,
      base: t,
    };
  },
  htmlBuilder: Vr,
  mathmlBuilder: Xn,
});
E({
  type: "accent",
  names: [
    "\\'",
    "\\`",
    "\\^",
    "\\~",
    "\\=",
    "\\u",
    "\\.",
    '\\"',
    "\\c",
    "\\r",
    "\\H",
    "\\v",
    "\\textcircled",
  ],
  props: { numArgs: 1, allowedInText: !0, allowedInMath: !0, argTypes: ["primitive"] },
  handler: (r, e) => {
    var t = e[0],
      a = r.parser.mode;
    return (
      a === "math" &&
        (r.parser.settings.reportNonstrict(
          "mathVsTextAccents",
          "LaTeX's accent " + r.funcName + " works only in text mode",
        ),
        (a = "text")),
      { type: "accent", mode: a, label: r.funcName, isStretchy: !1, isShifty: !0, base: t }
    );
  },
  htmlBuilder: Vr,
  mathmlBuilder: Xn,
});
E({
  type: "accentUnder",
  names: [
    "\\underleftarrow",
    "\\underrightarrow",
    "\\underleftrightarrow",
    "\\undergroup",
    "\\underlinesegment",
    "\\utilde",
  ],
  props: { numArgs: 1 },
  handler: (r, e) => {
    var { parser: t, funcName: a } = r,
      n = e[0];
    return { type: "accentUnder", mode: t.mode, label: a, base: n };
  },
  htmlBuilder: (r, e) => {
    var t = e0(r.base, e),
      a = Ht(r, e),
      n = r.label === "\\utilde" ? 0.12 : 0,
      i = _({
        positionType: "top",
        positionData: t.height,
        children: [
          { type: "elem", elem: a, wrapperClasses: ["svg-align"] },
          { type: "kern", size: n },
          { type: "elem", elem: t },
        ],
      });
    return k(["mord", "accentunder"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = Lt(r.label),
      a = new M("munder", [r0(r.base, e), t]);
    return (a.setAttribute("accentunder", "true"), a);
  },
});
var ft = (r) => {
  var e = new M("mpadded", r ? [r] : []);
  return (e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e);
};
E({
  type: "xArrow",
  names: [
    "\\xleftarrow",
    "\\xrightarrow",
    "\\xLeftarrow",
    "\\xRightarrow",
    "\\xleftrightarrow",
    "\\xLeftrightarrow",
    "\\xhookleftarrow",
    "\\xhookrightarrow",
    "\\xmapsto",
    "\\xrightharpoondown",
    "\\xrightharpoonup",
    "\\xleftharpoondown",
    "\\xleftharpoonup",
    "\\xrightleftharpoons",
    "\\xleftrightharpoons",
    "\\xlongequal",
    "\\xtwoheadrightarrow",
    "\\xtwoheadleftarrow",
    "\\xtofrom",
    "\\xrightleftarrows",
    "\\xrightequilibrium",
    "\\xleftequilibrium",
    "\\\\cdrightarrow",
    "\\\\cdleftarrow",
    "\\\\cdlongequal",
  ],
  props: { numArgs: 1, numOptionalArgs: 1 },
  handler(r, e, t) {
    var { parser: a, funcName: n } = r;
    return { type: "xArrow", mode: a.mode, label: n, body: e[0], below: t[0] };
  },
  htmlBuilder(r, e) {
    var t = e.style,
      a = e.havingStyle(t.sup()),
      n = Pe(e0(r.body, a, e), e),
      i = r.label.slice(0, 2) === "\\x" ? "x" : "cd";
    n.classes.push(i + "-arrow-pad");
    var l;
    r.below &&
      ((a = e.havingStyle(t.sub())),
      (l = Pe(e0(r.below, a, e), e)),
      l.classes.push(i + "-arrow-pad"));
    var u = Ht(r, e),
      c = -e.fontMetrics().axisHeight + 0.5 * u.height,
      d = -e.fontMetrics().axisHeight - 0.5 * u.height - 0.111;
    (n.depth > 0.25 || r.label === "\\xleftequilibrium") && (d -= n.depth);
    var f;
    if (l) {
      var g = -e.fontMetrics().axisHeight + l.height + 0.5 * u.height + 0.111;
      f = _({
        positionType: "individualShift",
        children: [
          { type: "elem", elem: n, shift: d },
          { type: "elem", elem: u, shift: c },
          { type: "elem", elem: l, shift: g },
        ],
      });
    } else
      f = _({
        positionType: "individualShift",
        children: [
          { type: "elem", elem: n, shift: d },
          { type: "elem", elem: u, shift: c },
        ],
      });
    return (
      f.children[0].children[0].children[1].classes.push("svg-align"),
      k(["mrel", "x-arrow"], [f], e)
    );
  },
  mathmlBuilder(r, e) {
    var t = Lt(r.label);
    t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var a;
    if (r.body) {
      var n = ft(r0(r.body, e));
      if (r.below) {
        var i = ft(r0(r.below, e));
        a = new M("munderover", [t, i, n]);
      } else a = new M("mover", [t, n]);
    } else if (r.below) {
      var l = ft(r0(r.below, e));
      a = new M("munder", [t, l]);
    } else ((a = ft()), (a = new M("mover", [t, a])));
    return a;
  },
});
function Vn(r, e) {
  var t = y0(r.body, e, !0);
  return k([r.mclass], t, e);
}
function Yn(r, e) {
  var t,
    a = q0(r.body, e);
  return (
    r.mclass === "minner"
      ? (t = new M("mpadded", a))
      : r.mclass === "mord"
        ? r.isCharacterBox
          ? ((t = a[0]), (t.type = "mi"))
          : (t = new M("mi", a))
        : (r.isCharacterBox ? ((t = a[0]), (t.type = "mo")) : (t = new M("mo", a)),
          r.mclass === "mbin"
            ? ((t.attributes.lspace = "0.22em"), (t.attributes.rspace = "0.22em"))
            : r.mclass === "mpunct"
              ? ((t.attributes.lspace = "0em"), (t.attributes.rspace = "0.17em"))
              : r.mclass === "mopen" || r.mclass === "mclose"
                ? ((t.attributes.lspace = "0em"), (t.attributes.rspace = "0em"))
                : r.mclass === "minner" &&
                  ((t.attributes.lspace = "0.0556em"), (t.attributes.width = "+0.1111em"))),
    t
  );
}
E({
  type: "mclass",
  names: [
    "\\mathord",
    "\\mathbin",
    "\\mathrel",
    "\\mathopen",
    "\\mathclose",
    "\\mathpunct",
    "\\mathinner",
  ],
  props: { numArgs: 1, primitive: !0 },
  handler(r, e) {
    var { parser: t, funcName: a } = r,
      n = e[0];
    return {
      type: "mclass",
      mode: t.mode,
      mclass: "m" + a.slice(5),
      body: f0(n),
      isCharacterBox: le(n),
    };
  },
  htmlBuilder: Vn,
  mathmlBuilder: Yn,
});
var Pt = (r) => {
  var e = r.type === "ordgroup" && r.body.length ? r.body[0] : r;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
E({
  type: "mclass",
  names: ["\\@binrel"],
  props: { numArgs: 2 },
  handler(r, e) {
    var { parser: t } = r;
    return {
      type: "mclass",
      mode: t.mode,
      mclass: Pt(e[0]),
      body: f0(e[1]),
      isCharacterBox: le(e[1]),
    };
  },
});
E({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  props: { numArgs: 2 },
  handler(r, e) {
    var { parser: t, funcName: a } = r,
      n = e[1],
      i = e[0],
      l;
    a !== "\\stackrel" ? (l = Pt(n)) : (l = "mrel");
    var u = {
        type: "op",
        mode: n.mode,
        limits: !0,
        alwaysHandleSupSub: !0,
        parentIsSupSub: !1,
        symbol: !1,
        suppressBaseShift: a !== "\\stackrel",
        body: f0(n),
      },
      c = {
        type: "supsub",
        mode: i.mode,
        base: u,
        sup: a === "\\underset" ? null : i,
        sub: a === "\\underset" ? i : null,
      };
    return { type: "mclass", mode: t.mode, mclass: l, body: [c], isCharacterBox: le(c) };
  },
  htmlBuilder: Vn,
  mathmlBuilder: Yn,
});
E({
  type: "pmb",
  names: ["\\pmb"],
  props: { numArgs: 1, allowedInText: !0 },
  handler(r, e) {
    var { parser: t } = r;
    return { type: "pmb", mode: t.mode, mclass: Pt(e[0]), body: f0(e[0]) };
  },
  htmlBuilder(r, e) {
    var t = y0(r.body, e, !0),
      a = k([r.mclass], t, e);
    return ((a.style.textShadow = "0.02em 0.01em 0.04px"), a);
  },
  mathmlBuilder(r, e) {
    var t = q0(r.body, e),
      a = new M("mstyle", t);
    return (a.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), a);
  },
});
var zl = {
    ">": "\\\\cdrightarrow",
    "<": "\\\\cdleftarrow",
    "=": "\\\\cdlongequal",
    A: "\\uparrow",
    V: "\\downarrow",
    "|": "\\Vert",
    ".": "no arrow",
  },
  qa = () => ({ type: "styling", body: [], mode: "math", style: "display" }),
  La = (r) => r.type === "textord" && r.text === "@",
  Bl = (r, e) => (r.type === "mathord" || r.type === "atom") && r.text === e;
function Cl(r, e, t) {
  var a = zl[r];
  switch (a) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return t.callFunction(a, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var n = t.callFunction("\\\\cdleft", [e[0]], []),
        i = { type: "atom", text: a, mode: "math", family: "rel" },
        l = t.callFunction("\\Big", [i], []),
        u = t.callFunction("\\\\cdright", [e[1]], []),
        c = { type: "ordgroup", mode: "math", body: [n, l, u] };
      return t.callFunction("\\\\cdparent", [c], []);
    }
    case "\\\\cdlongequal":
      return t.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var d = { type: "textord", text: "\\Vert", mode: "math" };
      return t.callFunction("\\Big", [d], []);
    }
    default:
      return { type: "textord", text: " ", mode: "math" };
  }
}
function El(r) {
  var e = [];
  for (
    r.gullet.beginGroup(), r.gullet.macros.set("\\cr", "\\\\\\relax"), r.gullet.beginGroup();
    ;
  ) {
    (e.push(r.parseExpression(!1, "\\\\")), r.gullet.endGroup(), r.gullet.beginGroup());
    var t = r.fetch().text;
    if (t === "&" || t === "\\\\") r.consume();
    else if (t === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else throw new A("Expected \\\\ or \\cr or \\end", r.nextToken);
  }
  for (var a = [], n = [a], i = 0; i < e.length; i++) {
    for (var l = e[i], u = qa(), c = 0; c < l.length; c++)
      if (!La(l[c])) u.body.push(l[c]);
      else {
        (a.push(u), (c += 1));
        var d = Ot(l[c]).text,
          f = new Array(2);
        if (
          ((f[0] = { type: "ordgroup", mode: "math", body: [] }),
          (f[1] = { type: "ordgroup", mode: "math", body: [] }),
          !"=|.".includes(d))
        )
          if ("<>AV".includes(d))
            for (var g = 0; g < 2; g++) {
              for (var y = !0, x = c + 1; x < l.length; x++) {
                if (Bl(l[x], d)) {
                  ((y = !1), (c = x));
                  break;
                }
                if (La(l[x]))
                  throw new A("Missing a " + d + " character to complete a CD arrow.", l[x]);
                f[g].body.push(l[x]);
              }
              if (y) throw new A("Missing a " + d + " character to complete a CD arrow.", l[c]);
            }
          else throw new A('Expected one of "<>AV=|." after @', l[c]);
        var w = Cl(d, f, r),
          T = { type: "styling", body: [w], mode: "math", style: "display" };
        (a.push(T), (u = qa()));
      }
    (i % 2 === 0 ? a.push(u) : a.shift(), (a = []), n.push(a));
  }
  (r.gullet.endGroup(), r.gullet.endGroup());
  var B = new Array(n[0].length).fill({ type: "align", align: "c", pregap: 0.25, postgap: 0.25 });
  return {
    type: "array",
    mode: "math",
    body: n,
    arraystretch: 1,
    addJot: !0,
    rowGaps: [null],
    cols: B,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(n.length + 1).fill([]),
  };
}
E({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: { numArgs: 1 },
  handler(r, e) {
    var { parser: t, funcName: a } = r;
    return { type: "cdlabel", mode: t.mode, side: a.slice(4), label: e[0] };
  },
  htmlBuilder(r, e) {
    var t = e.havingStyle(e.style.sup()),
      a = Pe(e0(r.label, t, e), e);
    return (
      a.classes.push("cd-label-" + r.side),
      (a.style.bottom = z(0.8 - a.depth)),
      (a.height = 0),
      (a.depth = 0),
      a
    );
  },
  mathmlBuilder(r, e) {
    var t = new M("mrow", [r0(r.label, e)]);
    return (
      (t = new M("mpadded", [t])),
      t.setAttribute("width", "0"),
      r.side === "left" && t.setAttribute("lspace", "-1width"),
      t.setAttribute("voffset", "0.7em"),
      (t = new M("mstyle", [t])),
      t.setAttribute("displaystyle", "false"),
      t.setAttribute("scriptlevel", "1"),
      t
    );
  },
});
E({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  props: { numArgs: 1 },
  handler(r, e) {
    var { parser: t } = r;
    return { type: "cdlabelparent", mode: t.mode, fragment: e[0] };
  },
  htmlBuilder(r, e) {
    var t = Pe(e0(r.fragment, e), e);
    return (t.classes.push("cd-vert-arrow"), t);
  },
  mathmlBuilder(r, e) {
    return new M("mrow", [r0(r.fragment, e)]);
  },
});
E({
  type: "textord",
  names: ["\\@char"],
  props: { numArgs: 1, allowedInText: !0 },
  handler(r, e) {
    for (
      var { parser: t } = r, a = j(e[0], "ordgroup"), n = a.body, i = "", l = 0;
      l < n.length;
      l++
    ) {
      var u = j(n[l], "textord");
      i += u.text;
    }
    var c = parseInt(i),
      d;
    if (isNaN(c)) throw new A("\\@char has non-numeric argument " + i);
    if (c < 0 || c >= 1114111) throw new A("\\@char with invalid code point " + i);
    return (
      c <= 65535
        ? (d = String.fromCharCode(c))
        : ((c -= 65536), (d = String.fromCharCode((c >> 10) + 55296, (c & 1023) + 56320))),
      { type: "textord", mode: t.mode, text: d }
    );
  },
});
var Kn = (r, e) => {
    var t = y0(r.body, e.withColor(r.color), !1);
    return ue(t);
  },
  Zn = (r, e) => {
    var t = q0(r.body, e.withColor(r.color)),
      a = new M("mstyle", t);
    return (a.setAttribute("mathcolor", r.color), a);
  };
E({
  type: "color",
  names: ["\\textcolor"],
  props: { numArgs: 2, allowedInText: !0, argTypes: ["color", "original"] },
  handler(r, e) {
    var { parser: t } = r,
      a = j(e[0], "color-token").color,
      n = e[1];
    return { type: "color", mode: t.mode, color: a, body: f0(n) };
  },
  htmlBuilder: Kn,
  mathmlBuilder: Zn,
});
E({
  type: "color",
  names: ["\\color"],
  props: { numArgs: 1, allowedInText: !0, argTypes: ["color"] },
  handler(r, e) {
    var { parser: t, breakOnTokenText: a } = r,
      n = j(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", n);
    var i = t.parseExpression(!0, a);
    return { type: "color", mode: t.mode, color: n, body: i };
  },
  htmlBuilder: Kn,
  mathmlBuilder: Zn,
});
E({
  type: "cr",
  names: ["\\\\"],
  props: { numArgs: 0, numOptionalArgs: 0, allowedInText: !0 },
  handler(r, e, t) {
    var { parser: a } = r,
      n = a.gullet.future().text === "[" ? a.parseSizeGroup(!0) : null,
      i =
        !a.settings.displayMode ||
        !a.settings.useStrictBehavior(
          "newLineInDisplayMode",
          "In LaTeX, \\\\ or \\newline does nothing in display mode",
        );
    return { type: "cr", mode: a.mode, newLine: i, size: n && j(n, "size").value };
  },
  htmlBuilder(r, e) {
    var t = k(["mspace"], [], e);
    return (
      r.newLine && (t.classes.push("newline"), r.size && (t.style.marginTop = z(o0(r.size, e)))),
      t
    );
  },
  mathmlBuilder(r, e) {
    var t = new M("mspace");
    return (
      r.newLine &&
        (t.setAttribute("linebreak", "newline"),
        r.size && t.setAttribute("height", z(o0(r.size, e)))),
      t
    );
  },
});
var Dr = {
    "\\global": "\\global",
    "\\long": "\\\\globallong",
    "\\\\globallong": "\\\\globallong",
    "\\def": "\\gdef",
    "\\gdef": "\\gdef",
    "\\edef": "\\xdef",
    "\\xdef": "\\xdef",
    "\\let": "\\\\globallet",
    "\\futurelet": "\\\\globalfuture",
  },
  Jn = (r) => {
    var e = r.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(e)) throw new A("Expected a control sequence", r);
    return e;
  },
  Dl = (r) => {
    var e = r.gullet.popToken();
    return (
      e.text === "=" && ((e = r.gullet.popToken()), e.text === " " && (e = r.gullet.popToken())),
      e
    );
  },
  Qn = (r, e, t, a) => {
    var n = r.gullet.macros.get(t.text);
    (n == null &&
      ((t.noexpand = !0),
      (n = { tokens: [t], numArgs: 0, unexpandable: !r.gullet.isExpandable(t.text) })),
      r.gullet.macros.set(e, n, a));
  };
E({
  type: "internal",
  names: ["\\global", "\\long", "\\\\globallong"],
  props: { numArgs: 0, allowedInText: !0 },
  handler(r) {
    var { parser: e, funcName: t } = r;
    e.consumeSpaces();
    var a = e.fetch();
    if (Dr[a.text])
      return (
        (t === "\\global" || t === "\\\\globallong") && (a.text = Dr[a.text]),
        j(e.parseFunction(), "internal")
      );
    throw new A("Invalid token after macro prefix", a);
  },
});
E({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  props: { numArgs: 0, allowedInText: !0, primitive: !0 },
  handler(r) {
    var { parser: e, funcName: t } = r,
      a = e.gullet.popToken(),
      n = a.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(n)) throw new A("Expected a control sequence", a);
    for (var i = 0, l, u = [[]]; e.gullet.future().text !== "{";)
      if (((a = e.gullet.popToken()), a.text === "#")) {
        if (e.gullet.future().text === "{") {
          ((l = e.gullet.future()), u[i].push("{"));
          break;
        }
        if (((a = e.gullet.popToken()), !/^[1-9]$/.test(a.text)))
          throw new A('Invalid argument number "' + a.text + '"');
        if (parseInt(a.text) !== i + 1)
          throw new A('Argument number "' + a.text + '" out of order');
        (i++, u.push([]));
      } else {
        if (a.text === "EOF") throw new A("Expected a macro definition");
        u[i].push(a.text);
      }
    var { tokens: c } = e.gullet.consumeArg();
    return (
      l && c.unshift(l),
      (t === "\\edef" || t === "\\xdef") && ((c = e.gullet.expandTokens(c)), c.reverse()),
      e.gullet.macros.set(n, { tokens: c, numArgs: i, delimiters: u }, t === Dr[t]),
      { type: "internal", mode: e.mode }
    );
  },
});
E({
  type: "internal",
  names: ["\\let", "\\\\globallet"],
  props: { numArgs: 0, allowedInText: !0, primitive: !0 },
  handler(r) {
    var { parser: e, funcName: t } = r,
      a = Jn(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var n = Dl(e);
    return (Qn(e, a, n, t === "\\\\globallet"), { type: "internal", mode: e.mode });
  },
});
E({
  type: "internal",
  names: ["\\futurelet", "\\\\globalfuture"],
  props: { numArgs: 0, allowedInText: !0, primitive: !0 },
  handler(r) {
    var { parser: e, funcName: t } = r,
      a = Jn(e.gullet.popToken()),
      n = e.gullet.popToken(),
      i = e.gullet.popToken();
    return (
      Qn(e, a, i, t === "\\\\globalfuture"),
      e.gullet.pushToken(i),
      e.gullet.pushToken(n),
      { type: "internal", mode: e.mode }
    );
  },
});
var Je = function (e, t, a) {
    var n = n0.math[e] && n0.math[e].replace,
      i = Gr(n || e, t, a);
    if (!i) throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
    return i;
  },
  Yr = function (e, t, a, n) {
    var i = a.havingBaseStyle(t),
      l = k(n.concat(i.sizingClasses(a)), [e], a),
      u = i.sizeMultiplier / a.sizeMultiplier;
    return ((l.height *= u), (l.depth *= u), (l.maxFontSize = i.sizeMultiplier), l);
  },
  _n = function (e, t, a) {
    var n = t.havingBaseStyle(a),
      i = (1 - t.sizeMultiplier / n.sizeMultiplier) * t.fontMetrics().axisHeight;
    (e.classes.push("delimcenter"), (e.style.top = z(i)), (e.height -= i), (e.depth += i));
  },
  Il = function (e, t, a, n, i, l) {
    var u = A0(e, "Main-Regular", i, n),
      c = Yr(u, t, n, l);
    return (_n(c, n, t), c);
  },
  Rl = function (e, t, a, n) {
    return A0(e, "Size" + t + "-Regular", a, n);
  },
  ei = function (e, t, a, n, i, l) {
    var u = Rl(e, t, i, n),
      c = Yr(k(["delimsizing", "size" + t], [u], n), F.TEXT, n, l);
    return (a && _n(c, n, F.TEXT), c);
  },
  or = function (e, t, a) {
    var n;
    t === "Size1-Regular" ? (n = "delim-size1") : (n = "delim-size4");
    var i = k(["delimsizinginner", n], [k([], [A0(e, t, a)])]);
    return { type: "elem", elem: i };
  },
  ur = function (e, t, a) {
    var n = X0["Size4-Regular"][e.charCodeAt(0)]
        ? X0["Size4-Regular"][e.charCodeAt(0)][4]
        : X0["Size1-Regular"][e.charCodeAt(0)][4],
      i = new pe("inner", Vs(e, Math.round(1e3 * t))),
      l = new se([i], {
        width: z(n),
        height: z(t),
        style: "width:" + z(n),
        viewBox: "0 0 " + 1e3 * n + " " + Math.round(1e3 * t),
        preserveAspectRatio: "xMinYMin",
      }),
      u = ve([], [l], a);
    return (
      (u.height = t),
      (u.style.height = z(t)),
      (u.style.width = z(n)),
      { type: "elem", elem: u }
    );
  },
  Ir = 0.008,
  pt = { type: "kern", size: -1 * Ir },
  Nl = new Set(["|", "\\lvert", "\\rvert", "\\vert"]),
  ql = new Set(["\\|", "\\lVert", "\\rVert", "\\Vert"]),
  ti = function (e, t, a, n, i, l) {
    var u,
      c,
      d,
      f,
      g = "",
      y = 0;
    ((u = d = f = e), (c = null));
    var x = "Size1-Regular";
    e === "\\uparrow"
      ? (d = f = "⏐")
      : e === "\\Uparrow"
        ? (d = f = "‖")
        : e === "\\downarrow"
          ? (u = d = "⏐")
          : e === "\\Downarrow"
            ? (u = d = "‖")
            : e === "\\updownarrow"
              ? ((u = "\\uparrow"), (d = "⏐"), (f = "\\downarrow"))
              : e === "\\Updownarrow"
                ? ((u = "\\Uparrow"), (d = "‖"), (f = "\\Downarrow"))
                : Nl.has(e)
                  ? ((d = "∣"), (g = "vert"), (y = 333))
                  : ql.has(e)
                    ? ((d = "∥"), (g = "doublevert"), (y = 556))
                    : e === "[" || e === "\\lbrack"
                      ? ((u = "⎡"),
                        (d = "⎢"),
                        (f = "⎣"),
                        (x = "Size4-Regular"),
                        (g = "lbrack"),
                        (y = 667))
                      : e === "]" || e === "\\rbrack"
                        ? ((u = "⎤"),
                          (d = "⎥"),
                          (f = "⎦"),
                          (x = "Size4-Regular"),
                          (g = "rbrack"),
                          (y = 667))
                        : e === "\\lfloor" || e === "⌊"
                          ? ((d = u = "⎢"),
                            (f = "⎣"),
                            (x = "Size4-Regular"),
                            (g = "lfloor"),
                            (y = 667))
                          : e === "\\lceil" || e === "⌈"
                            ? ((u = "⎡"),
                              (d = f = "⎢"),
                              (x = "Size4-Regular"),
                              (g = "lceil"),
                              (y = 667))
                            : e === "\\rfloor" || e === "⌋"
                              ? ((d = u = "⎥"),
                                (f = "⎦"),
                                (x = "Size4-Regular"),
                                (g = "rfloor"),
                                (y = 667))
                              : e === "\\rceil" || e === "⌉"
                                ? ((u = "⎤"),
                                  (d = f = "⎥"),
                                  (x = "Size4-Regular"),
                                  (g = "rceil"),
                                  (y = 667))
                                : e === "(" || e === "\\lparen"
                                  ? ((u = "⎛"),
                                    (d = "⎜"),
                                    (f = "⎝"),
                                    (x = "Size4-Regular"),
                                    (g = "lparen"),
                                    (y = 875))
                                  : e === ")" || e === "\\rparen"
                                    ? ((u = "⎞"),
                                      (d = "⎟"),
                                      (f = "⎠"),
                                      (x = "Size4-Regular"),
                                      (g = "rparen"),
                                      (y = 875))
                                    : e === "\\{" || e === "\\lbrace"
                                      ? ((u = "⎧"),
                                        (c = "⎨"),
                                        (f = "⎩"),
                                        (d = "⎪"),
                                        (x = "Size4-Regular"))
                                      : e === "\\}" || e === "\\rbrace"
                                        ? ((u = "⎫"),
                                          (c = "⎬"),
                                          (f = "⎭"),
                                          (d = "⎪"),
                                          (x = "Size4-Regular"))
                                        : e === "\\lgroup" || e === "⟮"
                                          ? ((u = "⎧"), (f = "⎩"), (d = "⎪"), (x = "Size4-Regular"))
                                          : e === "\\rgroup" || e === "⟯"
                                            ? ((u = "⎫"),
                                              (f = "⎭"),
                                              (d = "⎪"),
                                              (x = "Size4-Regular"))
                                            : e === "\\lmoustache" || e === "⎰"
                                              ? ((u = "⎧"),
                                                (f = "⎭"),
                                                (d = "⎪"),
                                                (x = "Size4-Regular"))
                                              : (e === "\\rmoustache" || e === "⎱") &&
                                                ((u = "⎫"),
                                                (f = "⎩"),
                                                (d = "⎪"),
                                                (x = "Size4-Regular"));
    var w = Je(u, x, i),
      T = w.height + w.depth,
      B = Je(d, x, i),
      C = B.height + B.depth,
      N = Je(f, x, i),
      q = N.height + N.depth,
      O = 0,
      $ = 1;
    if (c !== null) {
      var P = Je(c, x, i);
      ((O = P.height + P.depth), ($ = 2));
    }
    var U = T + q + O,
      X = Math.max(0, Math.ceil((t - U) / ($ * C))),
      G = U + X * $ * C,
      J = n.fontMetrics().axisHeight;
    a && (J *= n.sizeMultiplier);
    var Z = G / 2 - J,
      V = [];
    if (g.length > 0) {
      var x0 = G - T - q,
        t0 = Math.round(G * 1e3),
        c0 = Ys(g, Math.round(x0 * 1e3)),
        d0 = new pe(g, c0),
        a0 = z(y / 1e3),
        w0 = z(t0 / 1e3),
        J0 = new se([d0], { width: a0, height: w0, viewBox: "0 0 " + y + " " + t0 }),
        L0 = ve([], [J0], n);
      ((L0.height = t0 / 1e3),
        (L0.style.width = a0),
        (L0.style.height = w0),
        V.push({ type: "elem", elem: L0 }));
    } else {
      if ((V.push(or(f, x, i)), V.push(pt), c === null)) {
        var C0 = G - T - q + 2 * Ir;
        V.push(ur(d, C0, n));
      } else {
        var Q0 = (G - T - q - O) / 2 + 2 * Ir;
        (V.push(ur(d, Q0, n)), V.push(pt), V.push(or(c, x, i)), V.push(pt), V.push(ur(d, Q0, n)));
      }
      (V.push(pt), V.push(or(u, x, i)));
    }
    var h0 = n.havingBaseStyle(F.TEXT),
      _0 = _({ positionType: "bottom", positionData: Z, children: V });
    return Yr(k(["delimsizing", "mult"], [_0], h0), F.TEXT, n, l);
  },
  cr = 80,
  hr = 0.08,
  mr = function (e, t, a, n, i) {
    var l = Xs(e, n, a),
      u = new pe(e, l),
      c = new se([u], {
        width: "400em",
        height: z(t),
        viewBox: "0 0 400000 " + a,
        preserveAspectRatio: "xMinYMin slice",
      });
    return ve(["hide-tail"], [c], i);
  },
  Ll = function (e, t) {
    var a = t.havingBaseSizing(),
      n = si("\\surd", e * a.sizeMultiplier, ii, a),
      i = a.sizeMultiplier,
      l = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness),
      u,
      c = 0,
      d = 0,
      f = 0,
      g;
    return (
      n.type === "small"
        ? ((f = 1e3 + 1e3 * l + cr),
          e < 1 ? (i = 1) : e < 1.4 && (i = 0.7),
          (c = (1 + l + hr) / i),
          (d = (1 + l) / i),
          (u = mr("sqrtMain", c, f, l, t)),
          (u.style.minWidth = "0.853em"),
          (g = 0.833 / i))
        : n.type === "large"
          ? ((f = (1e3 + cr) * Qe[n.size]),
            (d = (Qe[n.size] + l) / i),
            (c = (Qe[n.size] + l + hr) / i),
            (u = mr("sqrtSize" + n.size, c, f, l, t)),
            (u.style.minWidth = "1.02em"),
            (g = 1 / i))
          : ((c = e + l + hr),
            (d = e + l),
            (f = Math.floor(1e3 * e + l) + cr),
            (u = mr("sqrtTall", c, f, l, t)),
            (u.style.minWidth = "0.742em"),
            (g = 1.056)),
      (u.height = d),
      (u.style.height = z(c)),
      { span: u, advanceWidth: g, ruleWidth: (t.fontMetrics().sqrtRuleThickness + l) * i }
    );
  },
  ri = new Set([
    "(",
    "\\lparen",
    ")",
    "\\rparen",
    "[",
    "\\lbrack",
    "]",
    "\\rbrack",
    "\\{",
    "\\lbrace",
    "\\}",
    "\\rbrace",
    "\\lfloor",
    "\\rfloor",
    "⌊",
    "⌋",
    "\\lceil",
    "\\rceil",
    "⌈",
    "⌉",
    "\\surd",
  ]),
  Hl = new Set([
    "\\uparrow",
    "\\downarrow",
    "\\updownarrow",
    "\\Uparrow",
    "\\Downarrow",
    "\\Updownarrow",
    "|",
    "\\|",
    "\\vert",
    "\\Vert",
    "\\lvert",
    "\\rvert",
    "\\lVert",
    "\\rVert",
    "\\lgroup",
    "\\rgroup",
    "⟮",
    "⟯",
    "\\lmoustache",
    "\\rmoustache",
    "⎰",
    "⎱",
  ]),
  ai = new Set(["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"]),
  Qe = [0, 1.2, 1.8, 2.4, 3],
  ni = function (e, t, a, n, i) {
    if (
      (e === "<" || e === "\\lt" || e === "⟨"
        ? (e = "\\langle")
        : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"),
      ri.has(e) || ai.has(e))
    )
      return ei(e, t, !1, a, n, i);
    if (Hl.has(e)) return ti(e, Qe[t], !1, a, n, i);
    throw new A("Illegal delimiter: '" + e + "'");
  },
  Ol = [
    { type: "small", style: F.SCRIPTSCRIPT },
    { type: "small", style: F.SCRIPT },
    { type: "small", style: F.TEXT },
    { type: "large", size: 1 },
    { type: "large", size: 2 },
    { type: "large", size: 3 },
    { type: "large", size: 4 },
  ],
  Fl = [
    { type: "small", style: F.SCRIPTSCRIPT },
    { type: "small", style: F.SCRIPT },
    { type: "small", style: F.TEXT },
    { type: "stack" },
  ],
  ii = [
    { type: "small", style: F.SCRIPTSCRIPT },
    { type: "small", style: F.SCRIPT },
    { type: "small", style: F.TEXT },
    { type: "large", size: 1 },
    { type: "large", size: 2 },
    { type: "large", size: 3 },
    { type: "large", size: 4 },
    { type: "stack" },
  ],
  Pl = function (e) {
    if (e.type === "small") return "Main-Regular";
    if (e.type === "large") return "Size" + e.size + "-Regular";
    if (e.type === "stack") return "Size4-Regular";
    var t = e.type;
    throw new Error("Add support for delim type '" + t + "' here.");
  },
  si = function (e, t, a, n) {
    for (var i = Math.min(2, 3 - n.style.size), l = i; l < a.length; l++) {
      var u = a[l];
      if (u.type === "stack") break;
      var c = Je(e, Pl(u), "math"),
        d = c.height + c.depth;
      if (u.type === "small") {
        var f = n.havingBaseStyle(u.style);
        d *= f.sizeMultiplier;
      }
      if (d > t) return u;
    }
    return a[a.length - 1];
  },
  Rr = function (e, t, a, n, i, l) {
    e === "<" || e === "\\lt" || e === "⟨"
      ? (e = "\\langle")
      : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
    var u;
    ai.has(e) ? (u = Ol) : ri.has(e) ? (u = ii) : (u = Fl);
    var c = si(e, t, u, n);
    return c.type === "small"
      ? Il(e, c.style, a, n, i, l)
      : c.type === "large"
        ? ei(e, c.size, a, n, i, l)
        : ti(e, t, a, n, i, l);
  },
  dr = function (e, t, a, n, i, l) {
    var u = n.fontMetrics().axisHeight * n.sizeMultiplier,
      c = 901,
      d = 5 / n.fontMetrics().ptPerEm,
      f = Math.max(t - u, a + u),
      g = Math.max((f / 500) * c, 2 * f - d);
    return Rr(e, g, !0, n, i, l);
  },
  Ha = {
    "\\bigl": { mclass: "mopen", size: 1 },
    "\\Bigl": { mclass: "mopen", size: 2 },
    "\\biggl": { mclass: "mopen", size: 3 },
    "\\Biggl": { mclass: "mopen", size: 4 },
    "\\bigr": { mclass: "mclose", size: 1 },
    "\\Bigr": { mclass: "mclose", size: 2 },
    "\\biggr": { mclass: "mclose", size: 3 },
    "\\Biggr": { mclass: "mclose", size: 4 },
    "\\bigm": { mclass: "mrel", size: 1 },
    "\\Bigm": { mclass: "mrel", size: 2 },
    "\\biggm": { mclass: "mrel", size: 3 },
    "\\Biggm": { mclass: "mrel", size: 4 },
    "\\big": { mclass: "mord", size: 1 },
    "\\Big": { mclass: "mord", size: 2 },
    "\\bigg": { mclass: "mord", size: 3 },
    "\\Bigg": { mclass: "mord", size: 4 },
  },
  $l = new Set([
    "(",
    "\\lparen",
    ")",
    "\\rparen",
    "[",
    "\\lbrack",
    "]",
    "\\rbrack",
    "\\{",
    "\\lbrace",
    "\\}",
    "\\rbrace",
    "\\lfloor",
    "\\rfloor",
    "⌊",
    "⌋",
    "\\lceil",
    "\\rceil",
    "⌈",
    "⌉",
    "<",
    ">",
    "\\langle",
    "⟨",
    "\\rangle",
    "⟩",
    "\\lt",
    "\\gt",
    "\\lvert",
    "\\rvert",
    "\\lVert",
    "\\rVert",
    "\\lgroup",
    "\\rgroup",
    "⟮",
    "⟯",
    "\\lmoustache",
    "\\rmoustache",
    "⎰",
    "⎱",
    "/",
    "\\backslash",
    "|",
    "\\vert",
    "\\|",
    "\\Vert",
    "\\uparrow",
    "\\Uparrow",
    "\\downarrow",
    "\\Downarrow",
    "\\updownarrow",
    "\\Updownarrow",
    ".",
  ]);
function $t(r, e) {
  var t = Ft(r);
  if (t && $l.has(t.text)) return t;
  throw t
    ? new A("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", r)
    : new A("Invalid delimiter type '" + r.type + "'", r);
}
E({
  type: "delimsizing",
  names: [
    "\\bigl",
    "\\Bigl",
    "\\biggl",
    "\\Biggl",
    "\\bigr",
    "\\Bigr",
    "\\biggr",
    "\\Biggr",
    "\\bigm",
    "\\Bigm",
    "\\biggm",
    "\\Biggm",
    "\\big",
    "\\Big",
    "\\bigg",
    "\\Bigg",
  ],
  props: { numArgs: 1, argTypes: ["primitive"] },
  handler: (r, e) => {
    var t = $t(e[0], r);
    return {
      type: "delimsizing",
      mode: r.parser.mode,
      size: Ha[r.funcName].size,
      mclass: Ha[r.funcName].mclass,
      delim: t.text,
    };
  },
  htmlBuilder: (r, e) =>
    r.delim === "." ? k([r.mclass]) : ni(r.delim, r.size, e, r.mode, [r.mclass]),
  mathmlBuilder: (r) => {
    var e = [];
    r.delim !== "." && e.push($0(r.delim, r.mode));
    var t = new M("mo", e);
    (r.mclass === "mopen" || r.mclass === "mclose"
      ? t.setAttribute("fence", "true")
      : t.setAttribute("fence", "false"),
      t.setAttribute("stretchy", "true"));
    var a = z(Qe[r.size]);
    return (t.setAttribute("minsize", a), t.setAttribute("maxsize", a), t);
  },
});
function Oa(r) {
  if (!r.body) throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
E({
  type: "leftright-right",
  names: ["\\right"],
  props: { numArgs: 1, primitive: !0 },
  handler: (r, e) => {
    var t = r.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string") throw new A("\\current@color set to non-string in \\right");
    return { type: "leftright-right", mode: r.parser.mode, delim: $t(e[0], r).text, color: t };
  },
});
E({
  type: "leftright",
  names: ["\\left"],
  props: { numArgs: 1, primitive: !0 },
  handler: (r, e) => {
    var t = $t(e[0], r),
      a = r.parser;
    ++a.leftrightDepth;
    var n = a.parseExpression(!1);
    (--a.leftrightDepth, a.expect("\\right", !1));
    var i = j(a.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: a.mode,
      body: n,
      left: t.text,
      right: i.delim,
      rightColor: i.color,
    };
  },
  htmlBuilder: (r, e) => {
    Oa(r);
    for (
      var t = y0(r.body, e, !0, ["mopen", "mclose"]), a = 0, n = 0, i = !1, l = 0;
      l < t.length;
      l++
    )
      t[l].isMiddle ? (i = !0) : ((a = Math.max(t[l].height, a)), (n = Math.max(t[l].depth, n)));
    ((a *= e.sizeMultiplier), (n *= e.sizeMultiplier));
    var u;
    if (
      (r.left === "." ? (u = tt(e, ["mopen"])) : (u = dr(r.left, a, n, e, r.mode, ["mopen"])),
      t.unshift(u),
      i)
    )
      for (var c = 1; c < t.length; c++) {
        var d = t[c],
          f = d.isMiddle;
        f && (t[c] = dr(f.delim, a, n, f.options, r.mode, []));
      }
    var g;
    if (r.right === ".") g = tt(e, ["mclose"]);
    else {
      var y = r.rightColor ? e.withColor(r.rightColor) : e;
      g = dr(r.right, a, n, y, r.mode, ["mclose"]);
    }
    return (t.push(g), k(["minner"], t, e));
  },
  mathmlBuilder: (r, e) => {
    Oa(r);
    var t = q0(r.body, e);
    if (r.left !== ".") {
      var a = new M("mo", [$0(r.left, r.mode)]);
      (a.setAttribute("fence", "true"), t.unshift(a));
    }
    if (r.right !== ".") {
      var n = new M("mo", [$0(r.right, r.mode)]);
      (n.setAttribute("fence", "true"),
        r.rightColor && n.setAttribute("mathcolor", r.rightColor),
        t.push(n));
    }
    return Ur(t);
  },
});
E({
  type: "middle",
  names: ["\\middle"],
  props: { numArgs: 1, primitive: !0 },
  handler: (r, e) => {
    var t = $t(e[0], r);
    if (!r.parser.leftrightDepth) throw new A("\\middle without preceding \\left", t);
    return { type: "middle", mode: r.parser.mode, delim: t.text };
  },
  htmlBuilder: (r, e) => {
    var t;
    if (r.delim === ".") t = tt(e, []);
    else {
      t = ni(r.delim, 1, e, r.mode, []);
      var a = { delim: r.delim, options: e };
      t.isMiddle = a;
    }
    return t;
  },
  mathmlBuilder: (r, e) => {
    var t = r.delim === "\\vert" || r.delim === "|" ? $0("|", "text") : $0(r.delim, r.mode),
      a = new M("mo", [t]);
    return (
      a.setAttribute("fence", "true"),
      a.setAttribute("lspace", "0.05em"),
      a.setAttribute("rspace", "0.05em"),
      a
    );
  },
});
var Gt = (r, e) => {
    var t = Pe(e0(r.body, e), e),
      a = r.label.slice(1),
      n = e.sizeMultiplier,
      i,
      l = 0,
      u = le(r.body);
    if (a === "sout")
      ((i = k(["stretchy", "sout"])),
        (i.height = e.fontMetrics().defaultRuleThickness / n),
        (l = -0.5 * e.fontMetrics().xHeight));
    else if (a === "phase") {
      var c = o0({ number: 0.6, unit: "pt" }, e),
        d = o0({ number: 0.35, unit: "ex" }, e),
        f = e.havingBaseSizing();
      n = n / f.sizeMultiplier;
      var g = t.height + t.depth + c + d;
      t.style.paddingLeft = z(g / 2 + c);
      var y = Math.floor(1e3 * g * n),
        x = js(y),
        w = new se([new pe("phase", x)], {
          width: "400em",
          height: z(y / 1e3),
          viewBox: "0 0 400000 " + y,
          preserveAspectRatio: "xMinYMin slice",
        });
      ((i = ve(["hide-tail"], [w], e)), (i.style.height = z(g)), (l = t.depth + c + d));
    } else {
      /cancel/.test(a)
        ? u || t.classes.push("cancel-pad")
        : a === "angl"
          ? t.classes.push("anglpad")
          : t.classes.push("boxpad");
      var T = 0,
        B = 0,
        C = 0;
      (/box/.test(a)
        ? ((C = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness)),
          (T = e.fontMetrics().fboxsep + (a === "colorbox" ? 0 : C)),
          (B = T))
        : a === "angl"
          ? ((C = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness)),
            (T = 4 * C),
            (B = Math.max(0, 0.25 - t.depth)))
          : ((T = u ? 0.2 : 0), (B = T)),
        (i = Al(t, a, T, B, e)),
        /fbox|boxed|fcolorbox/.test(a)
          ? ((i.style.borderStyle = "solid"), (i.style.borderWidth = z(C)))
          : a === "angl" &&
            C !== 0.049 &&
            ((i.style.borderTopWidth = z(C)), (i.style.borderRightWidth = z(C))),
        (l = t.depth + B),
        r.backgroundColor &&
          ((i.style.backgroundColor = r.backgroundColor),
          r.borderColor && (i.style.borderColor = r.borderColor)));
    }
    var N;
    if (r.backgroundColor)
      N = _({
        positionType: "individualShift",
        children: [
          { type: "elem", elem: i, shift: l },
          { type: "elem", elem: t, shift: 0 },
        ],
      });
    else {
      var q = /cancel|phase/.test(a) ? ["svg-align"] : [];
      N = _({
        positionType: "individualShift",
        children: [
          { type: "elem", elem: t, shift: 0 },
          { type: "elem", elem: i, shift: l, wrapperClasses: q },
        ],
      });
    }
    return (
      /cancel/.test(a) && ((N.height = t.height), (N.depth = t.depth)),
      /cancel/.test(a) && !u ? k(["mord", "cancel-lap"], [N], e) : k(["mord"], [N], e)
    );
  },
  Wt = (r, e) => {
    var t = 0,
      a = new M(r.label.includes("colorbox") ? "mpadded" : "menclose", [r0(r.body, e)]);
    switch (r.label) {
      case "\\cancel":
        a.setAttribute("notation", "updiagonalstrike");
        break;
      case "\\bcancel":
        a.setAttribute("notation", "downdiagonalstrike");
        break;
      case "\\phase":
        a.setAttribute("notation", "phasorangle");
        break;
      case "\\sout":
        a.setAttribute("notation", "horizontalstrike");
        break;
      case "\\fbox":
        a.setAttribute("notation", "box");
        break;
      case "\\angl":
        a.setAttribute("notation", "actuarial");
        break;
      case "\\fcolorbox":
      case "\\colorbox":
        if (
          ((t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm),
          a.setAttribute("width", "+" + 2 * t + "pt"),
          a.setAttribute("height", "+" + 2 * t + "pt"),
          a.setAttribute("lspace", t + "pt"),
          a.setAttribute("voffset", t + "pt"),
          r.label === "\\fcolorbox")
        ) {
          var n = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness);
          a.setAttribute("style", "border: " + z(n) + " solid " + r.borderColor);
        }
        break;
      case "\\xcancel":
        a.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
        break;
    }
    return (r.backgroundColor && a.setAttribute("mathbackground", r.backgroundColor), a);
  };
E({
  type: "enclose",
  names: ["\\colorbox"],
  props: { numArgs: 2, allowedInText: !0, argTypes: ["color", "text"] },
  handler(r, e, t) {
    var { parser: a, funcName: n } = r,
      i = j(e[0], "color-token").color,
      l = e[1];
    return { type: "enclose", mode: a.mode, label: n, backgroundColor: i, body: l };
  },
  htmlBuilder: Gt,
  mathmlBuilder: Wt,
});
E({
  type: "enclose",
  names: ["\\fcolorbox"],
  props: { numArgs: 3, allowedInText: !0, argTypes: ["color", "color", "text"] },
  handler(r, e, t) {
    var { parser: a, funcName: n } = r,
      i = j(e[0], "color-token").color,
      l = j(e[1], "color-token").color,
      u = e[2];
    return { type: "enclose", mode: a.mode, label: n, backgroundColor: l, borderColor: i, body: u };
  },
  htmlBuilder: Gt,
  mathmlBuilder: Wt,
});
E({
  type: "enclose",
  names: ["\\fbox"],
  props: { numArgs: 1, argTypes: ["hbox"], allowedInText: !0 },
  handler(r, e) {
    var { parser: t } = r;
    return { type: "enclose", mode: t.mode, label: "\\fbox", body: e[0] };
  },
});
E({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\phase"],
  props: { numArgs: 1 },
  handler(r, e) {
    var { parser: t, funcName: a } = r,
      n = e[0];
    return { type: "enclose", mode: t.mode, label: a, body: n };
  },
  htmlBuilder: Gt,
  mathmlBuilder: Wt,
});
E({
  type: "enclose",
  names: ["\\sout"],
  props: { numArgs: 1, allowedInText: !0 },
  handler(r, e) {
    var { parser: t, funcName: a } = r;
    t.mode === "math" &&
      t.settings.reportNonstrict("mathVsSout", "LaTeX's \\sout works only in text mode");
    var n = e[0];
    return { type: "enclose", mode: t.mode, label: a, body: n };
  },
  htmlBuilder: Gt,
  mathmlBuilder: Wt,
});
E({
  type: "enclose",
  names: ["\\angl"],
  props: { numArgs: 1, argTypes: ["hbox"], allowedInText: !1 },
  handler(r, e) {
    var { parser: t } = r;
    return { type: "enclose", mode: t.mode, label: "\\angl", body: e[0] };
  },
});
var li = {};
function Y0(r) {
  for (
    var { type: e, names: t, props: a, handler: n, htmlBuilder: i, mathmlBuilder: l } = r,
      u = { type: e, numArgs: a.numArgs || 0, allowedInText: !1, numOptionalArgs: 0, handler: n },
      c = 0;
    c < t.length;
    ++c
  )
    li[t[c]] = u;
  (i && (Tt[e] = i), l && (At[e] = l));
}
var oi = {};
function m(r, e) {
  oi[r] = e;
}
class B0 {
  constructor(e, t, a) {
    ((this.lexer = e), (this.start = t), (this.end = a));
  }
  static range(e, t) {
    return t
      ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer
        ? null
        : new B0(e.loc.lexer, e.loc.start, t.loc.end)
      : e && e.loc;
  }
}
class I0 {
  constructor(e, t) {
    ((this.text = e), (this.loc = t));
  }
  range(e, t) {
    return new I0(t, B0.range(this, e));
  }
}
function Fa(r) {
  var e = [];
  r.consumeSpaces();
  var t = r.fetch().text;
  for (
    t === "\\relax" && (r.consume(), r.consumeSpaces(), (t = r.fetch().text));
    t === "\\hline" || t === "\\hdashline";
  )
    (r.consume(), e.push(t === "\\hdashline"), r.consumeSpaces(), (t = r.fetch().text));
  return e;
}
var jt = (r) => {
    var e = r.parser.settings;
    if (!e.displayMode) throw new A("{" + r.envName + "} can be used only in display mode.");
  },
  Gl = new Set(["gather", "gather*"]);
function Kr(r) {
  if (!r.includes("ed")) return !r.includes("*");
}
function be(r, e, t) {
  var {
    hskipBeforeAndAfter: a,
    addJot: n,
    cols: i,
    arraystretch: l,
    colSeparationType: u,
    autoTag: c,
    singleRow: d,
    emptySingleRow: f,
    maxNumCols: g,
    leqno: y,
  } = e;
  if ((r.gullet.beginGroup(), d || r.gullet.macros.set("\\cr", "\\\\\\relax"), !l)) {
    var x = r.gullet.expandMacroAsText("\\arraystretch");
    if (x == null) l = 1;
    else if (((l = parseFloat(x)), !l || l < 0)) throw new A("Invalid \\arraystretch: " + x);
  }
  r.gullet.beginGroup();
  var w = [],
    T = [w],
    B = [],
    C = [],
    N = c != null ? [] : void 0;
  function q() {
    c && r.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function O() {
    N &&
      (r.gullet.macros.get("\\df@tag")
        ? (N.push(r.subparse([new I0("\\df@tag")])), r.gullet.macros.set("\\df@tag", void 0, !0))
        : N.push(!!c && r.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (q(), C.push(Fa(r)); ;) {
    var $ = r.parseExpression(!1, d ? "\\end" : "\\\\");
    (r.gullet.endGroup(), r.gullet.beginGroup());
    var P = { type: "ordgroup", mode: r.mode, body: $ };
    (t && (P = { type: "styling", mode: r.mode, style: t, body: [P] }), w.push(P));
    var U = r.fetch().text;
    if (U === "&") {
      if (g && w.length === g) {
        if (d || u) throw new A("Too many tab characters: &", r.nextToken);
        r.settings.reportNonstrict(
          "textEnv",
          "Too few columns specified in the {array} column argument.",
        );
      }
      r.consume();
    } else if (U === "\\end") {
      (O(),
        w.length === 1 &&
          P.type === "styling" &&
          P.body.length === 1 &&
          P.body[0].type === "ordgroup" &&
          P.body[0].body.length === 0 &&
          (T.length > 1 || !f) &&
          T.pop(),
        C.length < T.length + 1 && C.push([]));
      break;
    } else if (U === "\\\\") {
      r.consume();
      var X = void 0;
      (r.gullet.future().text !== " " && (X = r.parseSizeGroup(!0)),
        B.push(X ? X.value : null),
        O(),
        C.push(Fa(r)),
        (w = []),
        T.push(w),
        q());
    } else throw new A("Expected & or \\\\ or \\cr or \\end", r.nextToken);
  }
  return (
    r.gullet.endGroup(),
    r.gullet.endGroup(),
    {
      type: "array",
      mode: r.mode,
      addJot: n,
      arraystretch: l,
      body: T,
      cols: i,
      rowGaps: B,
      hskipBeforeAndAfter: a,
      hLinesBeforeRow: C,
      colSeparationType: u,
      tags: N,
      leqno: y,
    }
  );
}
function Zr(r) {
  return r.slice(0, 1) === "d" ? "display" : "text";
}
var K0 = function (e, t) {
    var a,
      n,
      i = e.body.length,
      l = e.hLinesBeforeRow,
      u = 0,
      c = new Array(i),
      d = [],
      f = Math.max(t.fontMetrics().arrayRuleWidth, t.minRuleThickness),
      g = 1 / t.fontMetrics().ptPerEm,
      y = 5 * g;
    if (e.colSeparationType && e.colSeparationType === "small") {
      var x = t.havingStyle(F.SCRIPT).sizeMultiplier;
      y = 0.2778 * (x / t.sizeMultiplier);
    }
    var w = e.colSeparationType === "CD" ? o0({ number: 3, unit: "ex" }, t) : 12 * g,
      T = 3 * g,
      B = e.arraystretch * w,
      C = 0.7 * B,
      N = 0.3 * B,
      q = 0;
    function O(te) {
      for (var Ne = 0; Ne < te.length; ++Ne)
        (Ne > 0 && (q += 0.25), d.push({ pos: q, isDashed: te[Ne] }));
    }
    for (O(l[0]), a = 0; a < e.body.length; ++a) {
      var $ = e.body[a],
        P = C,
        U = N;
      u < $.length && (u = $.length);
      var X = new Array($.length);
      for (n = 0; n < $.length; ++n) {
        var G = e0($[n], t);
        (U < G.depth && (U = G.depth), P < G.height && (P = G.height), (X[n] = G));
      }
      var J = e.rowGaps[a],
        Z = 0;
      (J && ((Z = o0(J, t)), Z > 0 && ((Z += N), U < Z && (U = Z), (Z = 0))),
        e.addJot && a < e.body.length - 1 && (U += T),
        (X.height = P),
        (X.depth = U),
        (q += P),
        (X.pos = q),
        (q += U + Z),
        (c[a] = X),
        O(l[a + 1]));
    }
    var V = q / 2 + t.fontMetrics().axisHeight,
      x0 = e.cols || [],
      t0 = [],
      c0,
      d0,
      a0 = [];
    if (e.tags && e.tags.some((te) => te))
      for (a = 0; a < i; ++a) {
        var w0 = c[a],
          J0 = w0.pos - V,
          L0 = e.tags[a],
          C0 = void 0;
        (L0 === !0
          ? (C0 = k(["eqn-num"], [], t))
          : L0 === !1
            ? (C0 = k([], [], t))
            : (C0 = k([], y0(L0, t, !0), t)),
          (C0.depth = w0.depth),
          (C0.height = w0.height),
          a0.push({ type: "elem", elem: C0, shift: J0 }));
      }
    for (n = 0, d0 = 0; n < u || d0 < x0.length; ++n, ++d0) {
      for (var Q0, h0 = x0[d0], _0 = !0; ((ye = h0) == null ? void 0 : ye.type) === "separator";) {
        var ye;
        if (
          (_0 ||
            ((c0 = k(["arraycolsep"], [])),
            (c0.style.width = z(t.fontMetrics().doubleRuleSep)),
            t0.push(c0)),
          h0.separator === "|" || h0.separator === ":")
        ) {
          var Ve = h0.separator === "|" ? "solid" : "dashed",
            E0 = k(["vertical-separator"], [], t);
          ((E0.style.height = z(q)),
            (E0.style.borderRightWidth = z(f)),
            (E0.style.borderRightStyle = Ve),
            (E0.style.margin = "0 " + z(-f / 2)));
          var Ce = q - V;
          (Ce && (E0.style.verticalAlign = z(-Ce)), t0.push(E0));
        } else throw new A("Invalid separator type: " + h0.separator);
        (d0++, (h0 = x0[d0]), (_0 = !1));
      }
      if (!(n >= u)) {
        var H0 = void 0;
        if (n > 0 || e.hskipBeforeAndAfter) {
          var Ee, De;
          ((H0 = (Ee = (De = h0) == null ? void 0 : De.pregap) != null ? Ee : y),
            H0 !== 0 && ((c0 = k(["arraycolsep"], [])), (c0.style.width = z(H0)), t0.push(c0)));
        }
        var Ie = [];
        for (a = 0; a < i; ++a) {
          var ee = c[a],
            K = ee[n];
          if (K) {
            var O0 = ee.pos - V;
            ((K.depth = ee.depth),
              (K.height = ee.height),
              Ie.push({ type: "elem", elem: K, shift: O0 }));
          }
        }
        var D0 = _({ positionType: "individualShift", children: Ie }),
          m0 = k(["col-align-" + (((Q0 = h0) == null ? void 0 : Q0.align) || "c")], [D0]);
        if ((t0.push(m0), n < u - 1 || e.hskipBeforeAndAfter)) {
          var k0, F0;
          ((H0 = (k0 = (F0 = h0) == null ? void 0 : F0.postgap) != null ? k0 : y),
            H0 !== 0 && ((c0 = k(["arraycolsep"], [])), (c0.style.width = z(H0)), t0.push(c0)));
        }
      }
    }
    var xe = k(["mtable"], t0);
    if (d.length > 0) {
      for (
        var we = Fe("hline", t, f),
          Ye = Fe("hdashline", t, f),
          Re = [{ type: "elem", elem: xe, shift: 0 }];
        d.length > 0;
      ) {
        var Ke = d.pop(),
          st = Ke.pos - V;
        Ke.isDashed
          ? Re.push({ type: "elem", elem: Ye, shift: st })
          : Re.push({ type: "elem", elem: we, shift: st });
      }
      xe = _({ positionType: "individualShift", children: Re });
    }
    if (a0.length === 0) return k(["mord"], [xe], t);
    var Yt = _({ positionType: "individualShift", children: a0 }),
      Kt = k(["tag"], [Yt], t);
    return ue([xe, Kt]);
  },
  Wl = { c: "center ", l: "left ", r: "right " },
  Z0 = function (e, t) {
    for (
      var a = [], n = new M("mtd", [], ["mtr-glue"]), i = new M("mtd", [], ["mml-eqn-num"]), l = 0;
      l < e.body.length;
      l++
    ) {
      for (var u = e.body[l], c = [], d = 0; d < u.length; d++) c.push(new M("mtd", [r0(u[d], t)]));
      (e.tags && e.tags[l] && (c.unshift(n), c.push(n), e.leqno ? c.unshift(i) : c.push(i)),
        a.push(new M("mtr", c)));
    }
    var f = new M("mtable", a),
      g = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
    f.setAttribute("rowspacing", z(g));
    var y = "",
      x = "";
    if (e.cols && e.cols.length > 0) {
      var w = e.cols,
        T = "",
        B = !1,
        C = 0,
        N = w.length;
      (w[0].type === "separator" && ((y += "top "), (C = 1)),
        w[w.length - 1].type === "separator" && ((y += "bottom "), (N -= 1)));
      for (var q = C; q < N; q++) {
        var O = w[q];
        O.type === "align"
          ? ((x += Wl[O.align]), B && (T += "none "), (B = !0))
          : O.type === "separator" &&
            B &&
            ((T += O.separator === "|" ? "solid " : "dashed "), (B = !1));
      }
      (f.setAttribute("columnalign", x.trim()),
        /[sd]/.test(T) && f.setAttribute("columnlines", T.trim()));
    }
    if (e.colSeparationType === "align") {
      for (var $ = e.cols || [], P = "", U = 1; U < $.length; U++) P += U % 2 ? "0em " : "1em ";
      f.setAttribute("columnspacing", P.trim());
    } else
      e.colSeparationType === "alignat" || e.colSeparationType === "gather"
        ? f.setAttribute("columnspacing", "0em")
        : e.colSeparationType === "small"
          ? f.setAttribute("columnspacing", "0.2778em")
          : e.colSeparationType === "CD"
            ? f.setAttribute("columnspacing", "0.5em")
            : f.setAttribute("columnspacing", "1em");
    var X = "",
      G = e.hLinesBeforeRow;
    ((y += G[0].length > 0 ? "left " : ""), (y += G[G.length - 1].length > 0 ? "right " : ""));
    for (var J = 1; J < G.length - 1; J++)
      X += G[J].length === 0 ? "none " : G[J][0] ? "dashed " : "solid ";
    return (
      /[sd]/.test(X) && f.setAttribute("rowlines", X.trim()),
      y !== "" && ((f = new M("menclose", [f])), f.setAttribute("notation", y.trim())),
      e.arraystretch &&
        e.arraystretch < 1 &&
        ((f = new M("mstyle", [f])), f.setAttribute("scriptlevel", "1")),
      f
    );
  },
  ui = function (e, t) {
    e.envName.includes("ed") || jt(e);
    var a = [],
      n = e.envName.includes("at") ? "alignat" : "align",
      i = e.envName === "split",
      l = be(
        e.parser,
        {
          cols: a,
          addJot: !0,
          autoTag: i ? void 0 : Kr(e.envName),
          emptySingleRow: !0,
          colSeparationType: n,
          maxNumCols: i ? 2 : void 0,
          leqno: e.parser.settings.leqno,
        },
        "display",
      ),
      u = 0,
      c = 0,
      d = { type: "ordgroup", mode: e.mode, body: [] };
    if (t[0] && t[0].type === "ordgroup") {
      for (var f = "", g = 0; g < t[0].body.length; g++) {
        var y = j(t[0].body[g], "textord");
        f += y.text;
      }
      ((u = Number(f)), (c = u * 2));
    }
    var x = !c;
    l.body.forEach(function (C) {
      for (var N = 1; N < C.length; N += 2) {
        var q = j(C[N], "styling"),
          O = j(q.body[0], "ordgroup");
        O.body.unshift(d);
      }
      if (x) c < C.length && (c = C.length);
      else {
        var $ = C.length / 2;
        if (u < $)
          throw new A("Too many math in a row: " + ("expected " + u + ", but got " + $), C[0]);
      }
    });
    for (var w = 0; w < c; ++w) {
      var T = "r",
        B = 0;
      (w % 2 === 1 ? (T = "l") : w > 0 && x && (B = 1),
        (a[w] = { type: "align", align: T, pregap: B, postgap: 0 }));
    }
    return ((l.colSeparationType = x ? "align" : "alignat"), l);
  };
Y0({
  type: "array",
  names: ["array", "darray"],
  props: { numArgs: 1 },
  handler(r, e) {
    var t = Ft(e[0]),
      a = t ? [e[0]] : j(e[0], "ordgroup").body,
      n = a.map(function (l) {
        var u = Ot(l),
          c = u.text;
        if ("lcr".includes(c)) return { type: "align", align: c };
        if (c === "|") return { type: "separator", separator: "|" };
        if (c === ":") return { type: "separator", separator: ":" };
        throw new A("Unknown column alignment: " + c, l);
      }),
      i = { cols: n, hskipBeforeAndAfter: !0, maxNumCols: n.length };
    return be(r.parser, i, Zr(r.envName));
  },
  htmlBuilder: K0,
  mathmlBuilder: Z0,
});
Y0({
  type: "array",
  names: [
    "matrix",
    "pmatrix",
    "bmatrix",
    "Bmatrix",
    "vmatrix",
    "Vmatrix",
    "matrix*",
    "pmatrix*",
    "bmatrix*",
    "Bmatrix*",
    "vmatrix*",
    "Vmatrix*",
  ],
  props: { numArgs: 0 },
  handler(r) {
    var e = {
        matrix: null,
        pmatrix: ["(", ")"],
        bmatrix: ["[", "]"],
        Bmatrix: ["\\{", "\\}"],
        vmatrix: ["|", "|"],
        Vmatrix: ["\\Vert", "\\Vert"],
      }[r.envName.replace("*", "")],
      t = "c",
      a = { hskipBeforeAndAfter: !1, cols: [{ type: "align", align: t }] };
    if (r.envName.charAt(r.envName.length - 1) === "*") {
      var n = r.parser;
      if ((n.consumeSpaces(), n.fetch().text === "[")) {
        if ((n.consume(), n.consumeSpaces(), (t = n.fetch().text), !"lcr".includes(t)))
          throw new A("Expected l or c or r", n.nextToken);
        (n.consume(),
          n.consumeSpaces(),
          n.expect("]"),
          n.consume(),
          (a.cols = [{ type: "align", align: t }]));
      }
    }
    var i = be(r.parser, a, Zr(r.envName)),
      l = Math.max(0, ...i.body.map((u) => u.length));
    return (
      (i.cols = new Array(l).fill({ type: "align", align: t })),
      e
        ? {
            type: "leftright",
            mode: r.mode,
            body: [i],
            left: e[0],
            right: e[1],
            rightColor: void 0,
          }
        : i
    );
  },
  htmlBuilder: K0,
  mathmlBuilder: Z0,
});
Y0({
  type: "array",
  names: ["smallmatrix"],
  props: { numArgs: 0 },
  handler(r) {
    var e = { arraystretch: 0.5 },
      t = be(r.parser, e, "script");
    return ((t.colSeparationType = "small"), t);
  },
  htmlBuilder: K0,
  mathmlBuilder: Z0,
});
Y0({
  type: "array",
  names: ["subarray"],
  props: { numArgs: 1 },
  handler(r, e) {
    var t = Ft(e[0]),
      a = t ? [e[0]] : j(e[0], "ordgroup").body,
      n = a.map(function (u) {
        var c = Ot(u),
          d = c.text;
        if ("lc".includes(d)) return { type: "align", align: d };
        throw new A("Unknown column alignment: " + d, u);
      });
    if (n.length > 1) throw new A("{subarray} can contain only one column");
    var i = { cols: n, hskipBeforeAndAfter: !1, arraystretch: 0.5 },
      l = be(r.parser, i, "script");
    if (l.body.length > 0 && l.body[0].length > 1)
      throw new A("{subarray} can contain only one column");
    return l;
  },
  htmlBuilder: K0,
  mathmlBuilder: Z0,
});
Y0({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: { numArgs: 0 },
  handler(r) {
    var e = {
        arraystretch: 1.2,
        cols: [
          { type: "align", align: "l", pregap: 0, postgap: 1 },
          { type: "align", align: "l", pregap: 0, postgap: 0 },
        ],
      },
      t = be(r.parser, e, Zr(r.envName));
    return {
      type: "leftright",
      mode: r.mode,
      body: [t],
      left: r.envName.includes("r") ? "." : "\\{",
      right: r.envName.includes("r") ? "\\}" : ".",
      rightColor: void 0,
    };
  },
  htmlBuilder: K0,
  mathmlBuilder: Z0,
});
Y0({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: { numArgs: 0 },
  handler: ui,
  htmlBuilder: K0,
  mathmlBuilder: Z0,
});
Y0({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: { numArgs: 0 },
  handler(r) {
    Gl.has(r.envName) && jt(r);
    var e = {
      cols: [{ type: "align", align: "c" }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: Kr(r.envName),
      emptySingleRow: !0,
      leqno: r.parser.settings.leqno,
    };
    return be(r.parser, e, "display");
  },
  htmlBuilder: K0,
  mathmlBuilder: Z0,
});
Y0({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: { numArgs: 1 },
  handler: ui,
  htmlBuilder: K0,
  mathmlBuilder: Z0,
});
Y0({
  type: "array",
  names: ["equation", "equation*"],
  props: { numArgs: 0 },
  handler(r) {
    jt(r);
    var e = {
      autoTag: Kr(r.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: r.parser.settings.leqno,
    };
    return be(r.parser, e, "display");
  },
  htmlBuilder: K0,
  mathmlBuilder: Z0,
});
Y0({
  type: "array",
  names: ["CD"],
  props: { numArgs: 0 },
  handler(r) {
    return (jt(r), El(r.parser));
  },
  htmlBuilder: K0,
  mathmlBuilder: Z0,
});
m("\\nonumber", "\\gdef\\@eqnsw{0}");
m("\\notag", "\\nonumber");
E({
  type: "text",
  names: ["\\hline", "\\hdashline"],
  props: { numArgs: 0, allowedInText: !0, allowedInMath: !0 },
  handler(r, e) {
    throw new A(r.funcName + " valid only within array environment");
  },
});
var Pa = li;
E({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: { numArgs: 1, argTypes: ["text"] },
  handler(r, e) {
    var { parser: t, funcName: a } = r,
      n = e[0];
    if (n.type !== "ordgroup") throw new A("Invalid environment name", n);
    for (var i = "", l = 0; l < n.body.length; ++l) i += j(n.body[l], "textord").text;
    if (a === "\\begin") {
      if (!Pa.hasOwnProperty(i)) throw new A("No such environment: " + i, n);
      var u = Pa[i],
        { args: c, optArgs: d } = t.parseArguments("\\begin{" + i + "}", u),
        f = { mode: t.mode, envName: i, parser: t },
        g = u.handler(f, c, d);
      t.expect("\\end", !1);
      var y = t.nextToken,
        x = j(t.parseFunction(), "environment");
      if (x.name !== i)
        throw new A("Mismatch: \\begin{" + i + "} matched by \\end{" + x.name + "}", y);
      return g;
    }
    return { type: "environment", mode: t.mode, name: i, nameGroup: n };
  },
});
var ci = (r, e) => {
    var t = r.font,
      a = e.withFont(t);
    return e0(r.body, a);
  },
  hi = (r, e) => {
    var t = r.font,
      a = e.withFont(t);
    return r0(r.body, a);
  },
  $a = {
    "\\Bbb": "\\mathbb",
    "\\bold": "\\mathbf",
    "\\frak": "\\mathfrak",
    "\\bm": "\\boldsymbol",
  };
E({
  type: "font",
  names: [
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
    "\\mathsfit",
    "\\mathbb",
    "\\mathcal",
    "\\mathfrak",
    "\\mathscr",
    "\\mathsf",
    "\\mathtt",
    "\\Bbb",
    "\\bold",
    "\\frak",
  ],
  props: { numArgs: 1, allowedInArgument: !0 },
  handler: (r, e) => {
    var { parser: t, funcName: a } = r,
      n = Mt(e[0]),
      i = a;
    return (i in $a && (i = $a[i]), { type: "font", mode: t.mode, font: i.slice(1), body: n });
  },
  htmlBuilder: ci,
  mathmlBuilder: hi,
});
E({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: { numArgs: 1 },
  handler: (r, e) => {
    var { parser: t } = r,
      a = e[0];
    return {
      type: "mclass",
      mode: t.mode,
      mclass: Pt(a),
      body: [{ type: "font", mode: t.mode, font: "boldsymbol", body: a }],
      isCharacterBox: le(a),
    };
  },
});
E({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  props: { numArgs: 0, allowedInText: !0 },
  handler: (r, e) => {
    var { parser: t, funcName: a, breakOnTokenText: n } = r,
      { mode: i } = t,
      l = t.parseExpression(!0, n),
      u = "math" + a.slice(1);
    return { type: "font", mode: i, font: u, body: { type: "ordgroup", mode: t.mode, body: l } };
  },
  htmlBuilder: ci,
  mathmlBuilder: hi,
});
var jl = (r, e) => {
    var t = e.style,
      a = t.fracNum(),
      n = t.fracDen(),
      i;
    i = e.havingStyle(a);
    var l = e0(r.numer, i, e);
    if (r.continued) {
      var u = 8.5 / e.fontMetrics().ptPerEm,
        c = 3.5 / e.fontMetrics().ptPerEm;
      ((l.height = l.height < u ? u : l.height), (l.depth = l.depth < c ? c : l.depth));
    }
    i = e.havingStyle(n);
    var d = e0(r.denom, i, e),
      f,
      g,
      y;
    r.hasBarLine
      ? (r.barSize
          ? ((g = o0(r.barSize, e)), (f = Fe("frac-line", e, g)))
          : (f = Fe("frac-line", e)),
        (g = f.height),
        (y = f.height))
      : ((f = null), (g = 0), (y = e.fontMetrics().defaultRuleThickness));
    var x, w, T;
    t.size === F.DISPLAY.size
      ? ((x = e.fontMetrics().num1),
        g > 0 ? (w = 3 * y) : (w = 7 * y),
        (T = e.fontMetrics().denom1))
      : (g > 0 ? ((x = e.fontMetrics().num2), (w = y)) : ((x = e.fontMetrics().num3), (w = 3 * y)),
        (T = e.fontMetrics().denom2));
    var B;
    if (f) {
      var N = e.fontMetrics().axisHeight;
      (x - l.depth - (N + 0.5 * g) < w && (x += w - (x - l.depth - (N + 0.5 * g))),
        N - 0.5 * g - (d.height - T) < w && (T += w - (N - 0.5 * g - (d.height - T))));
      var q = -(N - 0.5 * g);
      B = _({
        positionType: "individualShift",
        children: [
          { type: "elem", elem: d, shift: T },
          { type: "elem", elem: f, shift: q },
          { type: "elem", elem: l, shift: -x },
        ],
      });
    } else {
      var C = x - l.depth - (d.height - T);
      (C < w && ((x += 0.5 * (w - C)), (T += 0.5 * (w - C))),
        (B = _({
          positionType: "individualShift",
          children: [
            { type: "elem", elem: d, shift: T },
            { type: "elem", elem: l, shift: -x },
          ],
        })));
    }
    ((i = e.havingStyle(t)),
      (B.height *= i.sizeMultiplier / e.sizeMultiplier),
      (B.depth *= i.sizeMultiplier / e.sizeMultiplier));
    var O;
    t.size === F.DISPLAY.size
      ? (O = e.fontMetrics().delim1)
      : t.size === F.SCRIPTSCRIPT.size
        ? (O = e.havingStyle(F.SCRIPT).fontMetrics().delim2)
        : (O = e.fontMetrics().delim2);
    var $, P;
    return (
      r.leftDelim == null
        ? ($ = tt(e, ["mopen"]))
        : ($ = Rr(r.leftDelim, O, !0, e.havingStyle(t), r.mode, ["mopen"])),
      r.continued
        ? (P = k([]))
        : r.rightDelim == null
          ? (P = tt(e, ["mclose"]))
          : (P = Rr(r.rightDelim, O, !0, e.havingStyle(t), r.mode, ["mclose"])),
      k(["mord"].concat(i.sizingClasses(e)), [$, k(["mfrac"], [B]), P], e)
    );
  },
  Ul = (r, e) => {
    var t = new M("mfrac", [r0(r.numer, e), r0(r.denom, e)]);
    if (!r.hasBarLine) t.setAttribute("linethickness", "0px");
    else if (r.barSize) {
      var a = o0(r.barSize, e);
      t.setAttribute("linethickness", z(a));
    }
    if (r.leftDelim != null || r.rightDelim != null) {
      var n = [];
      if (r.leftDelim != null) {
        var i = new M("mo", [new p0(r.leftDelim.replace("\\", ""))]);
        (i.setAttribute("fence", "true"), n.push(i));
      }
      if ((n.push(t), r.rightDelim != null)) {
        var l = new M("mo", [new p0(r.rightDelim.replace("\\", ""))]);
        (l.setAttribute("fence", "true"), n.push(l));
      }
      return Ur(n);
    }
    return t;
  },
  mi = (r, e) => {
    if (!e) return r;
    var t = { type: "styling", mode: r.mode, style: e, body: [r] };
    return t;
  };
E({
  type: "genfrac",
  names: [
    "\\cfrac",
    "\\dfrac",
    "\\frac",
    "\\tfrac",
    "\\dbinom",
    "\\binom",
    "\\tbinom",
    "\\\\atopfrac",
    "\\\\bracefrac",
    "\\\\brackfrac",
  ],
  props: { numArgs: 2, allowedInArgument: !0 },
  handler: (r, e) => {
    var { parser: t, funcName: a } = r,
      n = e[0],
      i = e[1],
      l,
      u = null,
      c = null;
    switch (a) {
      case "\\cfrac":
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        l = !0;
        break;
      case "\\\\atopfrac":
        l = !1;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        ((l = !1), (u = "("), (c = ")"));
        break;
      case "\\\\bracefrac":
        ((l = !1), (u = "\\{"), (c = "\\}"));
        break;
      case "\\\\brackfrac":
        ((l = !1), (u = "["), (c = "]"));
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    var d = a === "\\cfrac",
      f = null;
    return (
      d || a.startsWith("\\d") ? (f = "display") : a.startsWith("\\t") && (f = "text"),
      mi(
        {
          type: "genfrac",
          mode: t.mode,
          numer: n,
          denom: i,
          continued: d,
          hasBarLine: l,
          leftDelim: u,
          rightDelim: c,
          barSize: null,
        },
        f,
      )
    );
  },
  htmlBuilder: jl,
  mathmlBuilder: Ul,
});
E({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  props: { numArgs: 0, infix: !0 },
  handler(r) {
    var { parser: e, funcName: t, token: a } = r,
      n;
    switch (t) {
      case "\\over":
        n = "\\frac";
        break;
      case "\\choose":
        n = "\\binom";
        break;
      case "\\atop":
        n = "\\\\atopfrac";
        break;
      case "\\brace":
        n = "\\\\bracefrac";
        break;
      case "\\brack":
        n = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return { type: "infix", mode: e.mode, replaceWith: n, token: a };
  },
});
var Ga = ["display", "text", "script", "scriptscript"],
  Wa = function (e) {
    var t = null;
    return (e.length > 0 && ((t = e), (t = t === "." ? null : t)), t);
  };
E({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: !0,
    argTypes: ["math", "math", "size", "text", "math", "math"],
  },
  handler(r, e) {
    var { parser: t } = r,
      a = e[4],
      n = e[5],
      i = Mt(e[0]),
      l = i.type === "atom" && i.family === "open" ? Wa(i.text) : null,
      u = Mt(e[1]),
      c = u.type === "atom" && u.family === "close" ? Wa(u.text) : null,
      d = j(e[2], "size"),
      f,
      g = null;
    d.isBlank ? (f = !0) : ((g = d.value), (f = g.number > 0));
    var y = null,
      x = e[3];
    if (x.type === "ordgroup") {
      if (x.body.length > 0) {
        var w = j(x.body[0], "textord");
        y = Ga[Number(w.text)];
      }
    } else ((x = j(x, "textord")), (y = Ga[Number(x.text)]));
    return mi(
      {
        type: "genfrac",
        mode: t.mode,
        numer: a,
        denom: n,
        continued: !1,
        hasBarLine: f,
        barSize: g,
        leftDelim: l,
        rightDelim: c,
      },
      y,
    );
  },
});
E({
  type: "infix",
  names: ["\\above"],
  props: { numArgs: 1, argTypes: ["size"], infix: !0 },
  handler(r, e) {
    var { parser: t, funcName: a, token: n } = r;
    return {
      type: "infix",
      mode: t.mode,
      replaceWith: "\\\\abovefrac",
      size: j(e[0], "size").value,
      token: n,
    };
  },
});
E({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  props: { numArgs: 3, argTypes: ["math", "size", "math"] },
  handler: (r, e) => {
    var { parser: t, funcName: a } = r,
      n = e[0],
      i = j(e[1], "infix").size;
    if (!i) throw new Error("\\\\abovefrac expected size, but got " + String(i));
    var l = e[2],
      u = i.number > 0;
    return {
      type: "genfrac",
      mode: t.mode,
      numer: n,
      denom: l,
      continued: !1,
      hasBarLine: u,
      barSize: i,
      leftDelim: null,
      rightDelim: null,
    };
  },
});
var di = (r, e) => {
    var t = e.style,
      a,
      n;
    r.type === "supsub"
      ? ((a = r.sup ? e0(r.sup, e.havingStyle(t.sup()), e) : e0(r.sub, e.havingStyle(t.sub()), e)),
        (n = j(r.base, "horizBrace")))
      : (n = j(r, "horizBrace"));
    var i = e0(n.base, e.havingBaseStyle(F.DISPLAY)),
      l = Ht(n, e),
      u;
    if (
      (n.isOver
        ? ((u = _({
            positionType: "firstBaseline",
            children: [
              { type: "elem", elem: i },
              { type: "kern", size: 0.1 },
              { type: "elem", elem: l },
            ],
          })),
          u.children[0].children[0].children[1].classes.push("svg-align"))
        : ((u = _({
            positionType: "bottom",
            positionData: i.depth + 0.1 + l.height,
            children: [
              { type: "elem", elem: l },
              { type: "kern", size: 0.1 },
              { type: "elem", elem: i },
            ],
          })),
          u.children[0].children[0].children[0].classes.push("svg-align")),
      a)
    ) {
      var c = k(["minner", n.isOver ? "mover" : "munder"], [u], e);
      n.isOver
        ? (u = _({
            positionType: "firstBaseline",
            children: [
              { type: "elem", elem: c },
              { type: "kern", size: 0.2 },
              { type: "elem", elem: a },
            ],
          }))
        : (u = _({
            positionType: "bottom",
            positionData: c.depth + 0.2 + a.height + a.depth,
            children: [
              { type: "elem", elem: a },
              { type: "kern", size: 0.2 },
              { type: "elem", elem: c },
            ],
          }));
    }
    return k(["minner", n.isOver ? "mover" : "munder"], [u], e);
  },
  Xl = (r, e) => {
    var t = Lt(r.label);
    return new M(r.isOver ? "mover" : "munder", [r0(r.base, e), t]);
  };
E({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace", "\\overbracket", "\\underbracket"],
  props: { numArgs: 1 },
  handler(r, e) {
    var { parser: t, funcName: a } = r;
    return { type: "horizBrace", mode: t.mode, label: a, isOver: a.includes("\\over"), base: e[0] };
  },
  htmlBuilder: di,
  mathmlBuilder: Xl,
});
E({
  type: "href",
  names: ["\\href"],
  props: { numArgs: 2, argTypes: ["url", "original"], allowedInText: !0 },
  handler: (r, e) => {
    var { parser: t } = r,
      a = e[1],
      n = j(e[0], "url").url;
    return t.settings.isTrusted({ command: "\\href", url: n })
      ? { type: "href", mode: t.mode, href: n, body: f0(a) }
      : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (r, e) => {
    var t = y0(r.body, e, !1);
    return ul(r.href, [], t, e);
  },
  mathmlBuilder: (r, e) => {
    var t = ge(r.body, e);
    return (t instanceof M || (t = new M("mrow", [t])), t.setAttribute("href", r.href), t);
  },
});
E({
  type: "href",
  names: ["\\url"],
  props: { numArgs: 1, argTypes: ["url"], allowedInText: !0 },
  handler: (r, e) => {
    var { parser: t } = r,
      a = j(e[0], "url").url;
    if (!t.settings.isTrusted({ command: "\\url", url: a })) return t.formatUnsupportedCmd("\\url");
    for (var n = [], i = 0; i < a.length; i++) {
      var l = a[i];
      (l === "~" && (l = "\\textasciitilde"), n.push({ type: "textord", mode: "text", text: l }));
    }
    var u = { type: "text", mode: t.mode, font: "\\texttt", body: n };
    return { type: "href", mode: t.mode, href: a, body: f0(u) };
  },
});
E({
  type: "hbox",
  names: ["\\hbox"],
  props: { numArgs: 1, argTypes: ["text"], allowedInText: !0, primitive: !0 },
  handler(r, e) {
    var { parser: t } = r;
    return { type: "hbox", mode: t.mode, body: f0(e[0]) };
  },
  htmlBuilder(r, e) {
    var t = y0(r.body, e, !1);
    return ue(t);
  },
  mathmlBuilder(r, e) {
    return new M("mrow", q0(r.body, e));
  },
});
E({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  props: { numArgs: 2, argTypes: ["raw", "original"], allowedInText: !0 },
  handler: (r, e) => {
    var { parser: t, funcName: a, token: n } = r,
      i = j(e[0], "raw").string,
      l = e[1];
    t.settings.strict &&
      t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var u,
      c = {};
    switch (a) {
      case "\\htmlClass":
        ((c.class = i), (u = { command: "\\htmlClass", class: i }));
        break;
      case "\\htmlId":
        ((c.id = i), (u = { command: "\\htmlId", id: i }));
        break;
      case "\\htmlStyle":
        ((c.style = i), (u = { command: "\\htmlStyle", style: i }));
        break;
      case "\\htmlData": {
        for (var d = i.split(","), f = 0; f < d.length; f++) {
          var g = d[f],
            y = g.indexOf("=");
          if (y < 0) throw new A("\\htmlData key/value '" + g + "' missing equals sign");
          var x = g.slice(0, y),
            w = g.slice(y + 1);
          c["data-" + x.trim()] = w;
        }
        u = { command: "\\htmlData", attributes: c };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return t.settings.isTrusted(u)
      ? { type: "html", mode: t.mode, attributes: c, body: f0(l) }
      : t.formatUnsupportedCmd(a);
  },
  htmlBuilder: (r, e) => {
    var t = y0(r.body, e, !1),
      a = ["enclosing"];
    r.attributes.class && a.push(...r.attributes.class.trim().split(/\s+/));
    var n = k(a, t, e);
    for (var i in r.attributes)
      i !== "class" && r.attributes.hasOwnProperty(i) && n.setAttribute(i, r.attributes[i]);
    return n;
  },
  mathmlBuilder: (r, e) => ge(r.body, e),
});
E({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  props: { numArgs: 2, allowedInArgument: !0, allowedInText: !0 },
  handler: (r, e) => {
    var { parser: t } = r;
    return { type: "htmlmathml", mode: t.mode, html: f0(e[0]), mathml: f0(e[1]) };
  },
  htmlBuilder: (r, e) => {
    var t = y0(r.html, e, !1);
    return ue(t);
  },
  mathmlBuilder: (r, e) => ge(r.mathml, e),
});
var fr = function (e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e)) return { number: +e, unit: "bp" };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t) throw new A("Invalid size: '" + e + "' in \\includegraphics");
  var a = { number: +(t[1] + t[2]), unit: t[3] };
  if (!En(a)) throw new A("Invalid unit: '" + a.unit + "' in \\includegraphics.");
  return a;
};
E({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: { numArgs: 1, numOptionalArgs: 1, argTypes: ["raw", "url"], allowedInText: !1 },
  handler: (r, e, t) => {
    var { parser: a } = r,
      n = { number: 0, unit: "em" },
      i = { number: 0.9, unit: "em" },
      l = { number: 0, unit: "em" },
      u = "";
    if (t[0])
      for (var c = j(t[0], "raw").string, d = c.split(","), f = 0; f < d.length; f++) {
        var g = d[f].split("=");
        if (g.length === 2) {
          var y = g[1].trim();
          switch (g[0].trim()) {
            case "alt":
              u = y;
              break;
            case "width":
              n = fr(y);
              break;
            case "height":
              i = fr(y);
              break;
            case "totalheight":
              l = fr(y);
              break;
            default:
              throw new A("Invalid key: '" + g[0] + "' in \\includegraphics.");
          }
        }
      }
    var x = j(e[0], "url").url;
    return (
      u === "" &&
        ((u = x), (u = u.replace(/^.*[\\/]/, "")), (u = u.substring(0, u.lastIndexOf(".")))),
      a.settings.isTrusted({ command: "\\includegraphics", url: x })
        ? {
            type: "includegraphics",
            mode: a.mode,
            alt: u,
            width: n,
            height: i,
            totalheight: l,
            src: x,
          }
        : a.formatUnsupportedCmd("\\includegraphics")
    );
  },
  htmlBuilder: (r, e) => {
    var t = o0(r.height, e),
      a = 0;
    r.totalheight.number > 0 && (a = o0(r.totalheight, e) - t);
    var n = 0;
    r.width.number > 0 && (n = o0(r.width, e));
    var i = { height: z(t + a) };
    (n > 0 && (i.width = z(n)), a > 0 && (i.verticalAlign = z(-a)));
    var l = new Js(r.src, r.alt, i);
    return ((l.height = t), (l.depth = a), l);
  },
  mathmlBuilder: (r, e) => {
    var t = new M("mglyph", []);
    t.setAttribute("alt", r.alt);
    var a = o0(r.height, e),
      n = 0;
    if (
      (r.totalheight.number > 0 &&
        ((n = o0(r.totalheight, e) - a), t.setAttribute("valign", z(-n))),
      t.setAttribute("height", z(a + n)),
      r.width.number > 0)
    ) {
      var i = o0(r.width, e);
      t.setAttribute("width", z(i));
    }
    return (t.setAttribute("src", r.src), t);
  },
});
E({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  props: { numArgs: 1, argTypes: ["size"], primitive: !0, allowedInText: !0 },
  handler(r, e) {
    var { parser: t, funcName: a } = r,
      n = j(e[0], "size");
    if (t.settings.strict) {
      var i = a[1] === "m",
        l = n.value.unit === "mu";
      i
        ? (l ||
            t.settings.reportNonstrict(
              "mathVsTextUnits",
              "LaTeX's " + a + " supports only mu units, " + ("not " + n.value.unit + " units"),
            ),
          t.mode !== "math" &&
            t.settings.reportNonstrict(
              "mathVsTextUnits",
              "LaTeX's " + a + " works only in math mode",
            ))
        : l &&
          t.settings.reportNonstrict(
            "mathVsTextUnits",
            "LaTeX's " + a + " doesn't support mu units",
          );
    }
    return { type: "kern", mode: t.mode, dimension: n.value };
  },
  htmlBuilder(r, e) {
    return Ln(r.dimension, e);
  },
  mathmlBuilder(r, e) {
    var t = o0(r.dimension, e);
    return new Gn(t);
  },
});
E({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  props: { numArgs: 1, allowedInText: !0 },
  handler: (r, e) => {
    var { parser: t, funcName: a } = r,
      n = e[0];
    return { type: "lap", mode: t.mode, alignment: a.slice(5), body: n };
  },
  htmlBuilder: (r, e) => {
    var t;
    r.alignment === "clap"
      ? ((t = k([], [e0(r.body, e)])), (t = k(["inner"], [t], e)))
      : (t = k(["inner"], [e0(r.body, e)]));
    var a = k(["fix"], []),
      n = k([r.alignment], [t, a], e),
      i = k(["strut"]);
    return (
      (i.style.height = z(n.height + n.depth)),
      n.depth && (i.style.verticalAlign = z(-n.depth)),
      n.children.unshift(i),
      (n = k(["thinbox"], [n], e)),
      k(["mord", "vbox"], [n], e)
    );
  },
  mathmlBuilder: (r, e) => {
    var t = new M("mpadded", [r0(r.body, e)]);
    if (r.alignment !== "rlap") {
      var a = r.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", a + "width");
    }
    return (t.setAttribute("width", "0px"), t);
  },
});
E({
  type: "styling",
  names: ["\\(", "$"],
  props: { numArgs: 0, allowedInText: !0, allowedInMath: !1 },
  handler(r, e) {
    var { funcName: t, parser: a } = r,
      n = a.mode;
    a.switchMode("math");
    var i = t === "\\(" ? "\\)" : "$",
      l = a.parseExpression(!1, i);
    return (
      a.expect(i),
      a.switchMode(n),
      { type: "styling", mode: a.mode, style: "text", body: l }
    );
  },
});
E({
  type: "text",
  names: ["\\)", "\\]"],
  props: { numArgs: 0, allowedInText: !0, allowedInMath: !1 },
  handler(r, e) {
    throw new A("Mismatched " + r.funcName);
  },
});
var ja = (r, e) => {
  switch (e.style.size) {
    case F.DISPLAY.size:
      return r.display;
    case F.TEXT.size:
      return r.text;
    case F.SCRIPT.size:
      return r.script;
    case F.SCRIPTSCRIPT.size:
      return r.scriptscript;
    default:
      return r.text;
  }
};
E({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: { numArgs: 4, primitive: !0 },
  handler: (r, e) => {
    var { parser: t } = r;
    return {
      type: "mathchoice",
      mode: t.mode,
      display: f0(e[0]),
      text: f0(e[1]),
      script: f0(e[2]),
      scriptscript: f0(e[3]),
    };
  },
  htmlBuilder: (r, e) => {
    var t = ja(r, e),
      a = y0(t, e, !1);
    return ue(a);
  },
  mathmlBuilder: (r, e) => {
    var t = ja(r, e);
    return ge(t, e);
  },
});
var fi = (r, e, t, a, n, i, l) => {
    r = k([], [r]);
    var u = t && le(t),
      c,
      d;
    if (e) {
      var f = e0(e, a.havingStyle(n.sup()), a);
      d = {
        elem: f,
        kern: Math.max(a.fontMetrics().bigOpSpacing1, a.fontMetrics().bigOpSpacing3 - f.depth),
      };
    }
    if (t) {
      var g = e0(t, a.havingStyle(n.sub()), a);
      c = {
        elem: g,
        kern: Math.max(a.fontMetrics().bigOpSpacing2, a.fontMetrics().bigOpSpacing4 - g.height),
      };
    }
    var y;
    if (d && c) {
      var x = a.fontMetrics().bigOpSpacing5 + c.elem.height + c.elem.depth + c.kern + r.depth + l;
      y = _({
        positionType: "bottom",
        positionData: x,
        children: [
          { type: "kern", size: a.fontMetrics().bigOpSpacing5 },
          { type: "elem", elem: c.elem, marginLeft: z(-i) },
          { type: "kern", size: c.kern },
          { type: "elem", elem: r },
          { type: "kern", size: d.kern },
          { type: "elem", elem: d.elem, marginLeft: z(i) },
          { type: "kern", size: a.fontMetrics().bigOpSpacing5 },
        ],
      });
    } else if (c) {
      var w = r.height - l;
      y = _({
        positionType: "top",
        positionData: w,
        children: [
          { type: "kern", size: a.fontMetrics().bigOpSpacing5 },
          { type: "elem", elem: c.elem, marginLeft: z(-i) },
          { type: "kern", size: c.kern },
          { type: "elem", elem: r },
        ],
      });
    } else if (d) {
      var T = r.depth + l;
      y = _({
        positionType: "bottom",
        positionData: T,
        children: [
          { type: "elem", elem: r },
          { type: "kern", size: d.kern },
          { type: "elem", elem: d.elem, marginLeft: z(i) },
          { type: "kern", size: a.fontMetrics().bigOpSpacing5 },
        ],
      });
    } else return r;
    var B = [y];
    if (c && i !== 0 && !u) {
      var C = k(["mspace"], [], a);
      ((C.style.marginRight = z(i)), B.unshift(C));
    }
    return k(["mop", "op-limits"], B, a);
  },
  pi = new Set(["\\smallint"]),
  Xe = (r, e) => {
    var t,
      a,
      n = !1,
      i;
    r.type === "supsub"
      ? ((t = r.sup), (a = r.sub), (i = j(r.base, "op")), (n = !0))
      : (i = j(r, "op"));
    var l = e.style,
      u = !1;
    l.size === F.DISPLAY.size && i.symbol && !pi.has(i.name) && (u = !0);
    var c;
    if (i.symbol) {
      var d = u ? "Size2-Regular" : "Size1-Regular",
        f = "";
      if (
        ((i.name === "\\oiint" || i.name === "\\oiiint") &&
          ((f = i.name.slice(1)), (i.name = f === "oiint" ? "\\iint" : "\\iiint")),
        (c = A0(i.name, d, "math", e, ["mop", "op-symbol", u ? "large-op" : "small-op"])),
        f.length > 0)
      ) {
        var g = c.italic,
          y = On(f + "Size" + (u ? "2" : "1"), e);
        ((c = _({
          positionType: "individualShift",
          children: [
            { type: "elem", elem: c, shift: 0 },
            { type: "elem", elem: y, shift: u ? 0.08 : 0 },
          ],
        })),
          (i.name = "\\" + f),
          c.classes.unshift("mop"),
          (c.italic = g));
      }
    } else if (i.body) {
      var x = y0(i.body, e, !0);
      x.length === 1 && x[0] instanceof R0
        ? ((c = x[0]), (c.classes[0] = "mop"))
        : (c = k(["mop"], x, e));
    } else {
      for (var w = [], T = 1; T < i.name.length; T++) w.push(Wr(i.name[T], i.mode, e));
      c = k(["mop"], w, e);
    }
    var B = 0,
      C = 0;
    return (
      (c instanceof R0 || i.name === "\\oiint" || i.name === "\\oiiint") &&
        !i.suppressBaseShift &&
        ((B = (c.height - c.depth) / 2 - e.fontMetrics().axisHeight), (C = c.italic || 0)),
      n
        ? fi(c, t, a, e, l, C, B)
        : (B && ((c.style.position = "relative"), (c.style.top = z(B))), c)
    );
  },
  it = (r, e) => {
    var t;
    if (r.symbol)
      ((t = new M("mo", [$0(r.name, r.mode)])),
        pi.has(r.name) && t.setAttribute("largeop", "false"));
    else if (r.body) t = new M("mo", q0(r.body, e));
    else {
      t = new M("mi", [new p0(r.name.slice(1))]);
      var a = new M("mo", [$0("⁡", "text")]);
      r.parentIsSupSub ? (t = new M("mrow", [t, a])) : (t = $n([t, a]));
    }
    return t;
  },
  Vl = {
    "∏": "\\prod",
    "∐": "\\coprod",
    "∑": "\\sum",
    "⋀": "\\bigwedge",
    "⋁": "\\bigvee",
    "⋂": "\\bigcap",
    "⋃": "\\bigcup",
    "⨀": "\\bigodot",
    "⨁": "\\bigoplus",
    "⨂": "\\bigotimes",
    "⨄": "\\biguplus",
    "⨆": "\\bigsqcup",
  };
E({
  type: "op",
  names: [
    "\\coprod",
    "\\bigvee",
    "\\bigwedge",
    "\\biguplus",
    "\\bigcap",
    "\\bigcup",
    "\\intop",
    "\\prod",
    "\\sum",
    "\\bigotimes",
    "\\bigoplus",
    "\\bigodot",
    "\\bigsqcup",
    "\\smallint",
    "∏",
    "∐",
    "∑",
    "⋀",
    "⋁",
    "⋂",
    "⋃",
    "⨀",
    "⨁",
    "⨂",
    "⨄",
    "⨆",
  ],
  props: { numArgs: 0 },
  handler: (r, e) => {
    var { parser: t, funcName: a } = r,
      n = a;
    return (
      n.length === 1 && (n = Vl[n]),
      { type: "op", mode: t.mode, limits: !0, parentIsSupSub: !1, symbol: !0, name: n }
    );
  },
  htmlBuilder: Xe,
  mathmlBuilder: it,
});
E({
  type: "op",
  names: ["\\mathop"],
  props: { numArgs: 1, primitive: !0 },
  handler: (r, e) => {
    var { parser: t } = r,
      a = e[0];
    return { type: "op", mode: t.mode, limits: !1, parentIsSupSub: !1, symbol: !1, body: f0(a) };
  },
  htmlBuilder: Xe,
  mathmlBuilder: it,
});
var Yl = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint",
};
E({
  type: "op",
  names: [
    "\\arcsin",
    "\\arccos",
    "\\arctan",
    "\\arctg",
    "\\arcctg",
    "\\arg",
    "\\ch",
    "\\cos",
    "\\cosec",
    "\\cosh",
    "\\cot",
    "\\cotg",
    "\\coth",
    "\\csc",
    "\\ctg",
    "\\cth",
    "\\deg",
    "\\dim",
    "\\exp",
    "\\hom",
    "\\ker",
    "\\lg",
    "\\ln",
    "\\log",
    "\\sec",
    "\\sin",
    "\\sinh",
    "\\sh",
    "\\tan",
    "\\tanh",
    "\\tg",
    "\\th",
  ],
  props: { numArgs: 0 },
  handler(r) {
    var { parser: e, funcName: t } = r;
    return { type: "op", mode: e.mode, limits: !1, parentIsSupSub: !1, symbol: !1, name: t };
  },
  htmlBuilder: Xe,
  mathmlBuilder: it,
});
E({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  props: { numArgs: 0 },
  handler(r) {
    var { parser: e, funcName: t } = r;
    return { type: "op", mode: e.mode, limits: !0, parentIsSupSub: !1, symbol: !1, name: t };
  },
  htmlBuilder: Xe,
  mathmlBuilder: it,
});
E({
  type: "op",
  names: [
    "\\int",
    "\\iint",
    "\\iiint",
    "\\oint",
    "\\oiint",
    "\\oiiint",
    "∫",
    "∬",
    "∭",
    "∮",
    "∯",
    "∰",
  ],
  props: { numArgs: 0, allowedInArgument: !0 },
  handler(r) {
    var { parser: e, funcName: t } = r,
      a = t;
    return (
      a.length === 1 && (a = Yl[a]),
      { type: "op", mode: e.mode, limits: !1, parentIsSupSub: !1, symbol: !0, name: a }
    );
  },
  htmlBuilder: Xe,
  mathmlBuilder: it,
});
var vi = (r, e) => {
    var t,
      a,
      n = !1,
      i;
    r.type === "supsub"
      ? ((t = r.sup), (a = r.sub), (i = j(r.base, "operatorname")), (n = !0))
      : (i = j(r, "operatorname"));
    var l;
    if (i.body.length > 0) {
      for (
        var u = i.body.map((g) => {
            var y = ("text" in g) ? g.text : void 0;
            return typeof y == "string" ? { type: "textord", mode: g.mode, text: y } : g;
          }),
          c = y0(u, e.withFont("mathrm"), !0),
          d = 0;
        d < c.length;
        d++
      ) {
        var f = c[d];
        f instanceof R0 && (f.text = f.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
      }
      l = k(["mop"], c, e);
    } else l = k(["mop"], [], e);
    return n ? fi(l, t, a, e, e.style, 0, 0) : l;
  },
  Kl = (r, e) => {
    for (var t = q0(r.body, e.withFont("mathrm")), a = !0, n = 0; n < t.length; n++) {
      var i = t[n];
      if (!(i instanceof Gn))
        if (i instanceof M)
          switch (i.type) {
            case "mi":
            case "mn":
            case "mspace":
            case "mtext":
              break;
            case "mo": {
              var l = i.children[0];
              i.children.length === 1 && l instanceof p0
                ? (l.text = l.text.replace(/\u2212/, "-").replace(/\u2217/, "*"))
                : (a = !1);
              break;
            }
            default:
              a = !1;
          }
        else a = !1;
    }
    if (a) {
      var u = t.map((f) => f.toText()).join("");
      t = [new p0(u)];
    }
    var c = new M("mi", t);
    c.setAttribute("mathvariant", "normal");
    var d = new M("mo", [$0("⁡", "text")]);
    return r.parentIsSupSub ? new M("mrow", [c, d]) : $n([c, d]);
  };
E({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: { numArgs: 1 },
  handler: (r, e) => {
    var { parser: t, funcName: a } = r,
      n = e[0];
    return {
      type: "operatorname",
      mode: t.mode,
      body: f0(n),
      alwaysHandleSupSub: a === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1,
    };
  },
  htmlBuilder: vi,
  mathmlBuilder: Kl,
});
m("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
Be({
  type: "ordgroup",
  htmlBuilder(r, e) {
    return r.semisimple ? ue(y0(r.body, e, !1)) : k(["mord"], y0(r.body, e, !0), e);
  },
  mathmlBuilder(r, e) {
    return ge(r.body, e, !0);
  },
});
E({
  type: "overline",
  names: ["\\overline"],
  props: { numArgs: 1 },
  handler(r, e) {
    var { parser: t } = r,
      a = e[0];
    return { type: "overline", mode: t.mode, body: a };
  },
  htmlBuilder(r, e) {
    var t = e0(r.body, e.havingCrampedStyle()),
      a = Fe("overline-line", e),
      n = e.fontMetrics().defaultRuleThickness,
      i = _({
        positionType: "firstBaseline",
        children: [
          { type: "elem", elem: t },
          { type: "kern", size: 3 * n },
          { type: "elem", elem: a },
          { type: "kern", size: n },
        ],
      });
    return k(["mord", "overline"], [i], e);
  },
  mathmlBuilder(r, e) {
    var t = new M("mo", [new p0("‾")]);
    t.setAttribute("stretchy", "true");
    var a = new M("mover", [r0(r.body, e), t]);
    return (a.setAttribute("accent", "true"), a);
  },
});
E({
  type: "phantom",
  names: ["\\phantom"],
  props: { numArgs: 1, allowedInText: !0 },
  handler: (r, e) => {
    var { parser: t } = r,
      a = e[0];
    return { type: "phantom", mode: t.mode, body: f0(a) };
  },
  htmlBuilder: (r, e) => {
    var t = y0(r.body, e.withPhantom(), !1);
    return ue(t);
  },
  mathmlBuilder: (r, e) => {
    var t = q0(r.body, e);
    return new M("mphantom", t);
  },
});
m("\\hphantom", "\\smash{\\phantom{#1}}");
E({
  type: "vphantom",
  names: ["\\vphantom"],
  props: { numArgs: 1, allowedInText: !0 },
  handler: (r, e) => {
    var { parser: t } = r,
      a = e[0];
    return { type: "vphantom", mode: t.mode, body: a };
  },
  htmlBuilder: (r, e) => {
    var t = k(["inner"], [e0(r.body, e.withPhantom())]),
      a = k(["fix"], []);
    return k(["mord", "rlap"], [t, a], e);
  },
  mathmlBuilder: (r, e) => {
    var t = q0(f0(r.body), e),
      a = new M("mphantom", t),
      n = new M("mpadded", [a]);
    return (n.setAttribute("width", "0px"), n);
  },
});
E({
  type: "raisebox",
  names: ["\\raisebox"],
  props: { numArgs: 2, argTypes: ["size", "hbox"], allowedInText: !0 },
  handler(r, e) {
    var { parser: t } = r,
      a = j(e[0], "size").value,
      n = e[1];
    return { type: "raisebox", mode: t.mode, dy: a, body: n };
  },
  htmlBuilder(r, e) {
    var t = e0(r.body, e),
      a = o0(r.dy, e);
    return _({ positionType: "shift", positionData: -a, children: [{ type: "elem", elem: t }] });
  },
  mathmlBuilder(r, e) {
    var t = new M("mpadded", [r0(r.body, e)]),
      a = r.dy.number + r.dy.unit;
    return (t.setAttribute("voffset", a), t);
  },
});
E({
  type: "internal",
  names: ["\\relax"],
  props: { numArgs: 0, allowedInText: !0, allowedInArgument: !0 },
  handler(r) {
    var { parser: e } = r;
    return { type: "internal", mode: e.mode };
  },
});
E({
  type: "rule",
  names: ["\\rule"],
  props: {
    numArgs: 2,
    numOptionalArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    argTypes: ["size", "size", "size"],
  },
  handler(r, e, t) {
    var { parser: a } = r,
      n = t[0],
      i = j(e[0], "size"),
      l = j(e[1], "size");
    return {
      type: "rule",
      mode: a.mode,
      shift: n && j(n, "size").value,
      width: i.value,
      height: l.value,
    };
  },
  htmlBuilder(r, e) {
    var t = k(["mord", "rule"], [], e),
      a = o0(r.width, e),
      n = o0(r.height, e),
      i = r.shift ? o0(r.shift, e) : 0;
    return (
      (t.style.borderRightWidth = z(a)),
      (t.style.borderTopWidth = z(n)),
      (t.style.bottom = z(i)),
      (t.width = a),
      (t.height = n + i),
      (t.depth = -i),
      (t.maxFontSize = n * 1.125 * e.sizeMultiplier),
      t
    );
  },
  mathmlBuilder(r, e) {
    var t = o0(r.width, e),
      a = o0(r.height, e),
      n = r.shift ? o0(r.shift, e) : 0,
      i = (e.color && e.getColor()) || "black",
      l = new M("mspace");
    (l.setAttribute("mathbackground", i),
      l.setAttribute("width", z(t)),
      l.setAttribute("height", z(a)));
    var u = new M("mpadded", [l]);
    return (
      n >= 0
        ? u.setAttribute("height", z(n))
        : (u.setAttribute("height", z(n)), u.setAttribute("depth", z(-n))),
      u.setAttribute("voffset", z(n)),
      u
    );
  },
});
function gi(r, e, t) {
  for (var a = y0(r, e, !1), n = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < a.length; i++) {
    var l = a[i].classes.indexOf("sizing");
    (l < 0
      ? Array.prototype.push.apply(a[i].classes, e.sizingClasses(t))
      : a[i].classes[l + 1] === "reset-size" + e.size &&
        (a[i].classes[l + 1] = "reset-size" + t.size),
      (a[i].height *= n),
      (a[i].depth *= n));
  }
  return ue(a);
}
var Ua = [
    "\\tiny",
    "\\sixptsize",
    "\\scriptsize",
    "\\footnotesize",
    "\\small",
    "\\normalsize",
    "\\large",
    "\\Large",
    "\\LARGE",
    "\\huge",
    "\\Huge",
  ],
  Zl = (r, e) => {
    var t = e.havingSize(r.size);
    return gi(r.body, t, e);
  };
E({
  type: "sizing",
  names: Ua,
  props: { numArgs: 0, allowedInText: !0 },
  handler: (r, e) => {
    var { breakOnTokenText: t, funcName: a, parser: n } = r,
      i = n.parseExpression(!1, t);
    return { type: "sizing", mode: n.mode, size: Ua.indexOf(a) + 1, body: i };
  },
  htmlBuilder: Zl,
  mathmlBuilder: (r, e) => {
    var t = e.havingSize(r.size),
      a = q0(r.body, t),
      n = new M("mstyle", a);
    return (n.setAttribute("mathsize", z(t.sizeMultiplier)), n);
  },
});
E({
  type: "smash",
  names: ["\\smash"],
  props: { numArgs: 1, numOptionalArgs: 1, allowedInText: !0 },
  handler: (r, e, t) => {
    var { parser: a } = r,
      n = !1,
      i = !1,
      l = t[0] && j(t[0], "ordgroup");
    if (l)
      for (var u = "", c = 0; c < l.body.length; ++c) {
        var d = l.body[c];
        if (((u = Ot(d).text), u === "t")) n = !0;
        else if (u === "b") i = !0;
        else {
          ((n = !1), (i = !1));
          break;
        }
      }
    else ((n = !0), (i = !0));
    var f = e[0];
    return { type: "smash", mode: a.mode, body: f, smashHeight: n, smashDepth: i };
  },
  htmlBuilder: (r, e) => {
    var t = k([], [e0(r.body, e)]);
    if (!r.smashHeight && !r.smashDepth) return t;
    if (
      (r.smashHeight && (t.height = 0),
      r.smashDepth && (t.depth = 0),
      r.smashHeight && r.smashDepth)
    )
      return k(["mord", "smash"], [t], e);
    if (t.children)
      for (var a = 0; a < t.children.length; a++)
        (r.smashHeight && (t.children[a].height = 0), r.smashDepth && (t.children[a].depth = 0));
    var n = _({ positionType: "firstBaseline", children: [{ type: "elem", elem: t }] });
    return k(["mord"], [n], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new M("mpadded", [r0(r.body, e)]);
    return (
      r.smashHeight && t.setAttribute("height", "0px"),
      r.smashDepth && t.setAttribute("depth", "0px"),
      t
    );
  },
});
E({
  type: "sqrt",
  names: ["\\sqrt"],
  props: { numArgs: 1, numOptionalArgs: 1 },
  handler(r, e, t) {
    var { parser: a } = r,
      n = t[0],
      i = e[0];
    return { type: "sqrt", mode: a.mode, body: i, index: n };
  },
  htmlBuilder(r, e) {
    var t = e0(r.body, e.havingCrampedStyle());
    (t.height === 0 && (t.height = e.fontMetrics().xHeight), (t = Pe(t, e)));
    var a = e.fontMetrics(),
      n = a.defaultRuleThickness,
      i = n;
    e.style.id < F.TEXT.id && (i = e.fontMetrics().xHeight);
    var l = n + i / 4,
      u = t.height + t.depth + l + n,
      { span: c, ruleWidth: d, advanceWidth: f } = Ll(u, e),
      g = c.height - d;
    g > t.height + t.depth + l && (l = (l + g - t.height - t.depth) / 2);
    var y = c.height - t.height - l - d;
    t.style.paddingLeft = z(f);
    var x = _({
      positionType: "firstBaseline",
      children: [
        { type: "elem", elem: t, wrapperClasses: ["svg-align"] },
        { type: "kern", size: -(t.height + y) },
        { type: "elem", elem: c },
        { type: "kern", size: d },
      ],
    });
    if (r.index) {
      var w = e.havingStyle(F.SCRIPTSCRIPT),
        T = e0(r.index, w, e),
        B = 0.6 * (x.height - x.depth),
        C = _({ positionType: "shift", positionData: -B, children: [{ type: "elem", elem: T }] }),
        N = k(["root"], [C]);
      return k(["mord", "sqrt"], [N, x], e);
    } else return k(["mord", "sqrt"], [x], e);
  },
  mathmlBuilder(r, e) {
    var { body: t, index: a } = r;
    return a ? new M("mroot", [r0(t, e), r0(a, e)]) : new M("msqrt", [r0(t, e)]);
  },
});
var Xa = { display: F.DISPLAY, text: F.TEXT, script: F.SCRIPT, scriptscript: F.SCRIPTSCRIPT };
E({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  props: { numArgs: 0, allowedInText: !0, primitive: !0 },
  handler(r, e) {
    var { breakOnTokenText: t, funcName: a, parser: n } = r,
      i = n.parseExpression(!0, t),
      l = a.slice(1, a.length - 5);
    return { type: "styling", mode: n.mode, style: l, body: i };
  },
  htmlBuilder(r, e) {
    var t = Xa[r.style],
      a = e.havingStyle(t).withFont("");
    return gi(r.body, a, e);
  },
  mathmlBuilder(r, e) {
    var t = Xa[r.style],
      a = e.havingStyle(t),
      n = q0(r.body, a),
      i = new M("mstyle", n),
      l = {
        display: ["0", "true"],
        text: ["0", "false"],
        script: ["1", "false"],
        scriptscript: ["2", "false"],
      },
      u = l[r.style];
    return (i.setAttribute("scriptlevel", u[0]), i.setAttribute("displaystyle", u[1]), i);
  },
});
var Jl = function (e, t) {
  var a = e.base;
  if (a)
    if (a.type === "op") {
      var n = a.limits && (t.style.size === F.DISPLAY.size || a.alwaysHandleSupSub);
      return n ? Xe : null;
    } else if (a.type === "operatorname") {
      var i = a.alwaysHandleSupSub && (t.style.size === F.DISPLAY.size || a.limits);
      return i ? vi : null;
    } else {
      if (a.type === "accent") return le(a.base) ? Vr : null;
      if (a.type === "horizBrace") {
        var l = !e.sub;
        return l === a.isOver ? di : null;
      } else return null;
    }
  else return null;
};
Be({
  type: "supsub",
  htmlBuilder(r, e) {
    var t = Jl(r, e);
    if (t) return t(r, e);
    var { base: a, sup: n, sub: i } = r,
      l = e0(a, e),
      u,
      c,
      d = e.fontMetrics(),
      f = 0,
      g = 0,
      y = a && le(a);
    if (n) {
      var x = e.havingStyle(e.style.sup());
      ((u = e0(n, x, e)),
        y || (f = l.height - (x.fontMetrics().supDrop * x.sizeMultiplier) / e.sizeMultiplier));
    }
    if (i) {
      var w = e.havingStyle(e.style.sub());
      ((c = e0(i, w, e)),
        y || (g = l.depth + (w.fontMetrics().subDrop * w.sizeMultiplier) / e.sizeMultiplier));
    }
    var T;
    e.style === F.DISPLAY ? (T = d.sup1) : e.style.cramped ? (T = d.sup3) : (T = d.sup2);
    var B = e.sizeMultiplier,
      C = z(0.5 / d.ptPerEm / B),
      N = null;
    if (c) {
      var q =
        r.base &&
        r.base.type === "op" &&
        r.base.name &&
        (r.base.name === "\\oiint" || r.base.name === "\\oiiint");
      (l instanceof R0 || q) && (N = z(-l.italic));
    }
    var O;
    if (u && c) {
      ((f = Math.max(f, T, u.depth + 0.25 * d.xHeight)), (g = Math.max(g, d.sub2)));
      var $ = d.defaultRuleThickness,
        P = 4 * $;
      if (f - u.depth - (c.height - g) < P) {
        g = P - (f - u.depth) + c.height;
        var U = 0.8 * d.xHeight - (f - u.depth);
        U > 0 && ((f += U), (g -= U));
      }
      var X = [
        { type: "elem", elem: c, shift: g, marginRight: C, marginLeft: N },
        { type: "elem", elem: u, shift: -f, marginRight: C },
      ];
      O = _({ positionType: "individualShift", children: X });
    } else if (c) {
      g = Math.max(g, d.sub1, c.height - 0.8 * d.xHeight);
      var G = [{ type: "elem", elem: c, marginLeft: N, marginRight: C }];
      O = _({ positionType: "shift", positionData: g, children: G });
    } else if (u)
      ((f = Math.max(f, T, u.depth + 0.25 * d.xHeight)),
        (O = _({
          positionType: "shift",
          positionData: -f,
          children: [{ type: "elem", elem: u, marginRight: C }],
        })));
    else throw new Error("supsub must have either sup or sub.");
    var J = Cr(l, "right") || "mord";
    return k([J], [l, k(["msupsub"], [O])], e);
  },
  mathmlBuilder(r, e) {
    var t = !1,
      a,
      n;
    (r.base &&
      r.base.type === "horizBrace" &&
      ((n = !!r.sup), n === r.base.isOver && ((t = !0), (a = r.base.isOver))),
      r.base &&
        (r.base.type === "op" || r.base.type === "operatorname") &&
        (r.base.parentIsSupSub = !0));
    var i = [r0(r.base, e)];
    (r.sub && i.push(r0(r.sub, e)), r.sup && i.push(r0(r.sup, e)));
    var l;
    if (t) l = a ? "mover" : "munder";
    else if (r.sub)
      if (r.sup) {
        var d = r.base;
        (d && d.type === "op" && d.limits && e.style === F.DISPLAY) ||
        (d &&
          d.type === "operatorname" &&
          d.alwaysHandleSupSub &&
          (e.style === F.DISPLAY || d.limits))
          ? (l = "munderover")
          : (l = "msubsup");
      } else {
        var c = r.base;
        (c && c.type === "op" && c.limits && (e.style === F.DISPLAY || c.alwaysHandleSupSub)) ||
        (c &&
          c.type === "operatorname" &&
          c.alwaysHandleSupSub &&
          (c.limits || e.style === F.DISPLAY))
          ? (l = "munder")
          : (l = "msub");
      }
    else {
      var u = r.base;
      (u && u.type === "op" && u.limits && (e.style === F.DISPLAY || u.alwaysHandleSupSub)) ||
      (u &&
        u.type === "operatorname" &&
        u.alwaysHandleSupSub &&
        (u.limits || e.style === F.DISPLAY))
        ? (l = "mover")
        : (l = "msup");
    }
    return new M(l, i);
  },
});
Be({
  type: "atom",
  htmlBuilder(r, e) {
    return Wr(r.text, r.mode, e, ["m" + r.family]);
  },
  mathmlBuilder(r, e) {
    var t = new M("mo", [$0(r.text, r.mode)]);
    if (r.family === "bin") {
      var a = Xr(r, e);
      a === "bold-italic" && t.setAttribute("mathvariant", a);
    } else
      r.family === "punct"
        ? t.setAttribute("separator", "true")
        : (r.family === "open" || r.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  },
});
var bi = { mi: "italic", mn: "normal", mtext: "normal" };
Be({
  type: "mathord",
  htmlBuilder(r, e) {
    return qt(r, e, "mathord");
  },
  mathmlBuilder(r, e) {
    var t = new M("mi", [$0(r.text, r.mode, e)]),
      a = Xr(r, e) || "italic";
    return (a !== bi[t.type] && t.setAttribute("mathvariant", a), t);
  },
});
Be({
  type: "textord",
  htmlBuilder(r, e) {
    return qt(r, e, "textord");
  },
  mathmlBuilder(r, e) {
    var t = $0(r.text, r.mode, e),
      a = Xr(r, e) || "normal",
      n;
    return (
      r.mode === "text"
        ? (n = new M("mtext", [t]))
        : /[0-9]/.test(r.text)
          ? (n = new M("mn", [t]))
          : r.text === "\\prime"
            ? (n = new M("mo", [t]))
            : (n = new M("mi", [t])),
      a !== bi[n.type] && n.setAttribute("mathvariant", a),
      n
    );
  },
});
var pr = { "\\nobreak": "nobreak", "\\allowbreak": "allowbreak" },
  vr = {
    " ": {},
    "\\ ": {},
    "~": { className: "nobreak" },
    "\\space": {},
    "\\nobreakspace": { className: "nobreak" },
  };
Be({
  type: "spacing",
  htmlBuilder(r, e) {
    if (vr.hasOwnProperty(r.text)) {
      var t = vr[r.text].className || "";
      if (r.mode === "text") {
        var a = qt(r, e, "textord");
        return (a.classes.push(t), a);
      } else return k(["mspace", t], [Wr(r.text, r.mode, e)], e);
    } else {
      if (pr.hasOwnProperty(r.text)) return k(["mspace", pr[r.text]], [], e);
      throw new A('Unknown type of space "' + r.text + '"');
    }
  },
  mathmlBuilder(r, e) {
    var t;
    if (vr.hasOwnProperty(r.text)) t = new M("mtext", [new p0(" ")]);
    else {
      if (pr.hasOwnProperty(r.text)) return new M("mspace");
      throw new A('Unknown type of space "' + r.text + '"');
    }
    return t;
  },
});
var Va = () => {
  var r = new M("mtd", []);
  return (r.setAttribute("width", "50%"), r);
};
Be({
  type: "tag",
  mathmlBuilder(r, e) {
    var t = new M("mtable", [
      new M("mtr", [Va(), new M("mtd", [ge(r.body, e)]), Va(), new M("mtd", [ge(r.tag, e)])]),
    ]);
    return (t.setAttribute("width", "100%"), t);
  },
});
var Ya = {
    "\\text": void 0,
    "\\textrm": "textrm",
    "\\textsf": "textsf",
    "\\texttt": "texttt",
    "\\textnormal": "textrm",
  },
  Ka = { "\\textbf": "textbf", "\\textmd": "textmd" },
  Ql = { "\\textit": "textit", "\\textup": "textup" },
  Za = (r, e) => {
    var t = r.font;
    if (t) {
      if (Ya[t]) return e.withTextFontFamily(Ya[t]);
      if (Ka[t]) return e.withTextFontWeight(Ka[t]);
      if (t === "\\emph")
        return e.fontShape === "textit"
          ? e.withTextFontShape("textup")
          : e.withTextFontShape("textit");
    } else return e;
    return e.withTextFontShape(Ql[t]);
  };
E({
  type: "text",
  names: [
    "\\text",
    "\\textrm",
    "\\textsf",
    "\\texttt",
    "\\textnormal",
    "\\textbf",
    "\\textmd",
    "\\textit",
    "\\textup",
    "\\emph",
  ],
  props: { numArgs: 1, argTypes: ["text"], allowedInArgument: !0, allowedInText: !0 },
  handler(r, e) {
    var { parser: t, funcName: a } = r,
      n = e[0];
    return { type: "text", mode: t.mode, body: f0(n), font: a };
  },
  htmlBuilder(r, e) {
    var t = Za(r, e),
      a = y0(r.body, t, !0);
    return k(["mord", "text"], a, t);
  },
  mathmlBuilder(r, e) {
    var t = Za(r, e);
    return ge(r.body, t);
  },
});
E({
  type: "underline",
  names: ["\\underline"],
  props: { numArgs: 1, allowedInText: !0 },
  handler(r, e) {
    var { parser: t } = r;
    return { type: "underline", mode: t.mode, body: e[0] };
  },
  htmlBuilder(r, e) {
    var t = e0(r.body, e),
      a = Fe("underline-line", e),
      n = e.fontMetrics().defaultRuleThickness,
      i = _({
        positionType: "top",
        positionData: t.height,
        children: [
          { type: "kern", size: n },
          { type: "elem", elem: a },
          { type: "kern", size: 3 * n },
          { type: "elem", elem: t },
        ],
      });
    return k(["mord", "underline"], [i], e);
  },
  mathmlBuilder(r, e) {
    var t = new M("mo", [new p0("‾")]);
    t.setAttribute("stretchy", "true");
    var a = new M("munder", [r0(r.body, e), t]);
    return (a.setAttribute("accentunder", "true"), a);
  },
});
E({
  type: "vcenter",
  names: ["\\vcenter"],
  props: { numArgs: 1, argTypes: ["original"], allowedInText: !1 },
  handler(r, e) {
    var { parser: t } = r;
    return { type: "vcenter", mode: t.mode, body: e[0] };
  },
  htmlBuilder(r, e) {
    var t = e0(r.body, e),
      a = e.fontMetrics().axisHeight,
      n = 0.5 * (t.height - a - (t.depth + a));
    return _({ positionType: "shift", positionData: n, children: [{ type: "elem", elem: t }] });
  },
  mathmlBuilder(r, e) {
    var t = new M("mpadded", [r0(r.body, e)], ["vcenter"]);
    return new M("mrow", [t]);
  },
});
E({
  type: "verb",
  names: ["\\verb"],
  props: { numArgs: 0, allowedInText: !0 },
  handler(r, e, t) {
    throw new A("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(r, e) {
    for (var t = Ja(r), a = [], n = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
      var l = t[i];
      (l === "~" && (l = "\\textasciitilde"),
        a.push(A0(l, "Typewriter-Regular", r.mode, n, ["mord", "texttt"])));
    }
    return k(["mord", "text"].concat(n.sizingClasses(e)), qn(a), n);
  },
  mathmlBuilder(r, e) {
    var t = new p0(Ja(r)),
      a = new M("mtext", [t]);
    return (a.setAttribute("mathvariant", "monospace"), a);
  },
});
var Ja = (r) => r.body.replace(/ /g, r.star ? "␣" : " "),
  me = Fn,
  yi = `[ \r
	]`,
  _l = "\\\\[a-zA-Z@]+",
  eo = "\\\\[^\uD800-\uDFFF]",
  to = "(" + _l + ")" + yi + "*",
  ro = `\\\\(
|[ \r	]+
?)[ \r	]*`,
  Nr = "[̀-ͯ]",
  ao = new RegExp(Nr + "+$"),
  no =
    "(" +
    yi +
    "+)|" +
    (ro + "|") +
    "([!-\\[\\]-‧‪-퟿豈-￿]" +
    (Nr + "*") +
    "|[\uD800-\uDBFF][\uDC00-\uDFFF]" +
    (Nr + "*") +
    "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" +
    ("|" + to) +
    ("|" + eo + ")");
class Qa {
  constructor(e, t) {
    ((this.input = e),
      (this.settings = t),
      (this.tokenRegex = new RegExp(no, "g")),
      (this.catcodes = { "%": 14, "~": 13 }));
  }
  setCatcode(e, t) {
    this.catcodes[e] = t;
  }
  lex() {
    var e = this.input,
      t = this.tokenRegex.lastIndex;
    if (t === e.length) return new I0("EOF", new B0(this, t, t));
    var a = this.tokenRegex.exec(e);
    if (a === null || a.index !== t)
      throw new A("Unexpected character: '" + e[t] + "'", new I0(e[t], new B0(this, t, t + 1)));
    var n = a[6] || a[3] || (a[2] ? "\\ " : " ");
    if (this.catcodes[n] === 14) {
      var i = e.indexOf(
        `
`,
        this.tokenRegex.lastIndex,
      );
      return (
        i === -1
          ? ((this.tokenRegex.lastIndex = e.length),
            this.settings.reportNonstrict(
              "commentAtEnd",
              "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)",
            ))
          : (this.tokenRegex.lastIndex = i + 1),
        this.lex()
      );
    }
    return new I0(n, new B0(this, t, this.tokenRegex.lastIndex));
  }
}
class io {
  constructor(e, t) {
    (e === void 0 && (e = {}),
      t === void 0 && (t = {}),
      (this.current = t),
      (this.builtins = e),
      (this.undefStack = []));
  }
  beginGroup() {
    this.undefStack.push({});
  }
  endGroup() {
    if (this.undefStack.length === 0)
      throw new A(
        "Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug",
      );
    var e = this.undefStack.pop();
    for (var t in e)
      e.hasOwnProperty(t) && (e[t] == null ? delete this.current[t] : (this.current[t] = e[t]));
  }
  endGroups() {
    for (; this.undefStack.length > 0;) this.endGroup();
  }
  has(e) {
    return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
  }
  get(e) {
    return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
  }
  set(e, t, a) {
    if ((a === void 0 && (a = !1), a)) {
      for (var n = 0; n < this.undefStack.length; n++) delete this.undefStack[n][e];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t);
    } else {
      var i = this.undefStack[this.undefStack.length - 1];
      i && !i.hasOwnProperty(e) && (i[e] = this.current[e]);
    }
    t == null ? delete this.current[e] : (this.current[e] = t);
  }
}
var so = oi;
m("\\noexpand", function (r) {
  var e = r.popToken();
  return (
    r.isExpandable(e.text) && ((e.noexpand = !0), (e.treatAsRelax = !0)),
    { tokens: [e], numArgs: 0 }
  );
});
m("\\expandafter", function (r) {
  var e = r.popToken();
  return (r.expandOnce(!0), { tokens: [e], numArgs: 0 });
});
m("\\@firstoftwo", function (r) {
  var e = r.consumeArgs(2);
  return { tokens: e[0], numArgs: 0 };
});
m("\\@secondoftwo", function (r) {
  var e = r.consumeArgs(2);
  return { tokens: e[1], numArgs: 0 };
});
m("\\@ifnextchar", function (r) {
  var e = r.consumeArgs(3);
  r.consumeSpaces();
  var t = r.future();
  return e[0].length === 1 && e[0][0].text === t.text
    ? { tokens: e[1], numArgs: 0 }
    : { tokens: e[2], numArgs: 0 };
});
m("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
m("\\TextOrMath", function (r) {
  var e = r.consumeArgs(2);
  return r.mode === "text" ? { tokens: e[0], numArgs: 0 } : { tokens: e[1], numArgs: 0 };
});
var _a = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15,
};
m("\\char", function (r) {
  var e = r.popToken(),
    t,
    a = 0;
  if (e.text === "'") ((t = 8), (e = r.popToken()));
  else if (e.text === '"') ((t = 16), (e = r.popToken()));
  else if (e.text === "`")
    if (((e = r.popToken()), e.text[0] === "\\")) a = e.text.charCodeAt(1);
    else {
      if (e.text === "EOF") throw new A("\\char` missing argument");
      a = e.text.charCodeAt(0);
    }
  else t = 10;
  if (t) {
    if (((a = _a[e.text]), a == null || a >= t))
      throw new A("Invalid base-" + t + " digit " + e.text);
    for (var n; (n = _a[r.future().text]) != null && n < t;) ((a *= t), (a += n), r.popToken());
  }
  return "\\@char{" + a + "}";
});
var Jr = (r, e, t, a) => {
  var n = r.consumeArg().tokens;
  if (n.length !== 1) throw new A("\\newcommand's first argument must be a macro name");
  var i = n[0].text,
    l = r.isDefined(i);
  if (l && !e)
    throw new A("\\newcommand{" + i + "} attempting to redefine " + (i + "; use \\renewcommand"));
  if (!l && !t)
    throw new A(
      "\\renewcommand{" + i + "} when command " + i + " does not yet exist; use \\newcommand",
    );
  var u = 0;
  if (((n = r.consumeArg().tokens), n.length === 1 && n[0].text === "[")) {
    for (var c = "", d = r.expandNextToken(); d.text !== "]" && d.text !== "EOF";)
      ((c += d.text), (d = r.expandNextToken()));
    if (!c.match(/^\s*[0-9]+\s*$/)) throw new A("Invalid number of arguments: " + c);
    ((u = parseInt(c)), (n = r.consumeArg().tokens));
  }
  return ((l && a) || r.macros.set(i, { tokens: n, numArgs: u }), "");
};
m("\\newcommand", (r) => Jr(r, !1, !0, !1));
m("\\renewcommand", (r) => Jr(r, !0, !1, !1));
m("\\providecommand", (r) => Jr(r, !0, !0, !0));
m("\\message", (r) => {
  var e = r.consumeArgs(1)[0];
  return (
    console.log(
      e
        .reverse()
        .map((t) => t.text)
        .join(""),
    ),
    ""
  );
});
m("\\errmessage", (r) => {
  var e = r.consumeArgs(1)[0];
  return (
    console.error(
      e
        .reverse()
        .map((t) => t.text)
        .join(""),
    ),
    ""
  );
});
m("\\show", (r) => {
  var e = r.popToken(),
    t = e.text;
  return (console.log(e, r.macros.get(t), me[t], n0.math[t], n0.text[t]), "");
});
m("\\bgroup", "{");
m("\\egroup", "}");
m("~", "\\nobreakspace");
m("\\lq", "`");
m("\\rq", "'");
m("\\aa", "\\r a");
m("\\AA", "\\r A");
m("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
m("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
m("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
m("ℬ", "\\mathscr{B}");
m("ℰ", "\\mathscr{E}");
m("ℱ", "\\mathscr{F}");
m("ℋ", "\\mathscr{H}");
m("ℐ", "\\mathscr{I}");
m("ℒ", "\\mathscr{L}");
m("ℳ", "\\mathscr{M}");
m("ℛ", "\\mathscr{R}");
m("ℭ", "\\mathfrak{C}");
m("ℌ", "\\mathfrak{H}");
m("ℨ", "\\mathfrak{Z}");
m("\\Bbbk", "\\Bbb{k}");
m("\\llap", "\\mathllap{\\textrm{#1}}");
m("\\rlap", "\\mathrlap{\\textrm{#1}}");
m("\\clap", "\\mathclap{\\textrm{#1}}");
m("\\mathstrut", "\\vphantom{(}");
m("\\underbar", "\\underline{\\text{#1}}");
m("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');
m("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
m("\\ne", "\\neq");
m("≠", "\\neq");
m("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
m("∉", "\\notin");
m(
  "≘",
  "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}",
);
m("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
m("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
m("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
m("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
m("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
m("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
m("⟂", "\\perp");
m("‼", "\\mathclose{!\\mkern-0.8mu!}");
m("∌", "\\notni");
m("⌜", "\\ulcorner");
m("⌝", "\\urcorner");
m("⌞", "\\llcorner");
m("⌟", "\\lrcorner");
m("©", "\\copyright");
m("®", "\\textregistered");
m("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
m("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
m("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
m("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
m("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
m("⋮", "\\vdots");
m("\\varGamma", "\\mathit{\\Gamma}");
m("\\varDelta", "\\mathit{\\Delta}");
m("\\varTheta", "\\mathit{\\Theta}");
m("\\varLambda", "\\mathit{\\Lambda}");
m("\\varXi", "\\mathit{\\Xi}");
m("\\varPi", "\\mathit{\\Pi}");
m("\\varSigma", "\\mathit{\\Sigma}");
m("\\varUpsilon", "\\mathit{\\Upsilon}");
m("\\varPhi", "\\mathit{\\Phi}");
m("\\varPsi", "\\mathit{\\Psi}");
m("\\varOmega", "\\mathit{\\Omega}");
m("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
m(
  "\\colon",
  "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax",
);
m("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
m("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
m("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
m("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
m("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");
m("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
var en = {
    ",": "\\dotsc",
    "\\not": "\\dotsb",
    "+": "\\dotsb",
    "=": "\\dotsb",
    "<": "\\dotsb",
    ">": "\\dotsb",
    "-": "\\dotsb",
    "*": "\\dotsb",
    ":": "\\dotsb",
    "\\DOTSB": "\\dotsb",
    "\\coprod": "\\dotsb",
    "\\bigvee": "\\dotsb",
    "\\bigwedge": "\\dotsb",
    "\\biguplus": "\\dotsb",
    "\\bigcap": "\\dotsb",
    "\\bigcup": "\\dotsb",
    "\\prod": "\\dotsb",
    "\\sum": "\\dotsb",
    "\\bigotimes": "\\dotsb",
    "\\bigoplus": "\\dotsb",
    "\\bigodot": "\\dotsb",
    "\\bigsqcup": "\\dotsb",
    "\\And": "\\dotsb",
    "\\longrightarrow": "\\dotsb",
    "\\Longrightarrow": "\\dotsb",
    "\\longleftarrow": "\\dotsb",
    "\\Longleftarrow": "\\dotsb",
    "\\longleftrightarrow": "\\dotsb",
    "\\Longleftrightarrow": "\\dotsb",
    "\\mapsto": "\\dotsb",
    "\\longmapsto": "\\dotsb",
    "\\hookrightarrow": "\\dotsb",
    "\\doteq": "\\dotsb",
    "\\mathbin": "\\dotsb",
    "\\mathrel": "\\dotsb",
    "\\relbar": "\\dotsb",
    "\\Relbar": "\\dotsb",
    "\\xrightarrow": "\\dotsb",
    "\\xleftarrow": "\\dotsb",
    "\\DOTSI": "\\dotsi",
    "\\int": "\\dotsi",
    "\\oint": "\\dotsi",
    "\\iint": "\\dotsi",
    "\\iiint": "\\dotsi",
    "\\iiiint": "\\dotsi",
    "\\idotsint": "\\dotsi",
    "\\DOTSX": "\\dotsx",
  },
  lo = new Set(["bin", "rel"]);
m("\\dots", function (r) {
  var e = "\\dotso",
    t = r.expandAfterFuture().text;
  return (
    t in en
      ? (e = en[t])
      : (t.slice(0, 4) === "\\not" || (t in n0.math && lo.has(n0.math[t].group))) &&
        (e = "\\dotsb"),
    e
  );
});
var Qr = {
  ")": !0,
  "]": !0,
  "\\rbrack": !0,
  "\\}": !0,
  "\\rbrace": !0,
  "\\rangle": !0,
  "\\rceil": !0,
  "\\rfloor": !0,
  "\\rgroup": !0,
  "\\rmoustache": !0,
  "\\right": !0,
  "\\bigr": !0,
  "\\biggr": !0,
  "\\Bigr": !0,
  "\\Biggr": !0,
  $: !0,
  ";": !0,
  ".": !0,
  ",": !0,
};
m("\\dotso", function (r) {
  var e = r.future().text;
  return e in Qr ? "\\ldots\\," : "\\ldots";
});
m("\\dotsc", function (r) {
  var e = r.future().text;
  return e in Qr && e !== "," ? "\\ldots\\," : "\\ldots";
});
m("\\cdots", function (r) {
  var e = r.future().text;
  return e in Qr ? "\\@cdots\\," : "\\@cdots";
});
m("\\dotsb", "\\cdots");
m("\\dotsm", "\\cdots");
m("\\dotsi", "\\!\\cdots");
m("\\dotsx", "\\ldots\\,");
m("\\DOTSI", "\\relax");
m("\\DOTSB", "\\relax");
m("\\DOTSX", "\\relax");
m("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
m("\\,", "\\tmspace+{3mu}{.1667em}");
m("\\thinspace", "\\,");
m("\\>", "\\mskip{4mu}");
m("\\:", "\\tmspace+{4mu}{.2222em}");
m("\\medspace", "\\:");
m("\\;", "\\tmspace+{5mu}{.2777em}");
m("\\thickspace", "\\;");
m("\\!", "\\tmspace-{3mu}{.1667em}");
m("\\negthinspace", "\\!");
m("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
m("\\negthickspace", "\\tmspace-{5mu}{.277em}");
m("\\enspace", "\\kern.5em ");
m("\\enskip", "\\hskip.5em\\relax");
m("\\quad", "\\hskip1em\\relax");
m("\\qquad", "\\hskip2em\\relax");
m("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
m("\\tag@paren", "\\tag@literal{({#1})}");
m("\\tag@literal", (r) => {
  if (r.macros.get("\\df@tag")) throw new A("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
m(
  "\\bmod",
  "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}",
);
m("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
m("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
m(
  "\\mod",
  "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1",
);
m("\\newline", "\\\\\\relax");
m("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var xi = z(X0["Main-Regular"][84][1] - 0.7 * X0["Main-Regular"][65][1]);
m(
  "\\LaTeX",
  "\\textrm{\\html@mathml{" +
    ("L\\kern-.36em\\raisebox{" + xi + "}{\\scriptstyle A}") +
    "\\kern-.15em\\TeX}{LaTeX}}",
);
m(
  "\\KaTeX",
  "\\textrm{\\html@mathml{" +
    ("K\\kern-.17em\\raisebox{" + xi + "}{\\scriptstyle A}") +
    "\\kern-.15em\\TeX}{KaTeX}}",
);
m("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
m("\\@hspace", "\\hskip #1\\relax");
m("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
m("\\ordinarycolon", ":");
m("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
m(
  "\\dblcolon",
  '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}',
);
m(
  "\\coloneqq",
  '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}',
);
m(
  "\\Coloneqq",
  '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}',
);
m(
  "\\coloneq",
  '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}',
);
m(
  "\\Coloneq",
  '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}',
);
m(
  "\\eqqcolon",
  '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}',
);
m(
  "\\Eqqcolon",
  '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}',
);
m(
  "\\eqcolon",
  '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}',
);
m(
  "\\Eqcolon",
  '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}',
);
m(
  "\\colonapprox",
  '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}',
);
m(
  "\\Colonapprox",
  '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}',
);
m(
  "\\colonsim",
  '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}',
);
m(
  "\\Colonsim",
  '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}',
);
m("∷", "\\dblcolon");
m("∹", "\\eqcolon");
m("≔", "\\coloneqq");
m("≕", "\\eqqcolon");
m("⩴", "\\Coloneqq");
m("\\ratio", "\\vcentcolon");
m("\\coloncolon", "\\dblcolon");
m("\\colonequals", "\\coloneqq");
m("\\coloncolonequals", "\\Coloneqq");
m("\\equalscolon", "\\eqqcolon");
m("\\equalscoloncolon", "\\Eqqcolon");
m("\\colonminus", "\\coloneq");
m("\\coloncolonminus", "\\Coloneq");
m("\\minuscolon", "\\eqcolon");
m("\\minuscoloncolon", "\\Eqcolon");
m("\\coloncolonapprox", "\\Colonapprox");
m("\\coloncolonsim", "\\Colonsim");
m("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
m("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
m("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
m("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
m("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
m("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
m("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
m("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
m("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
m("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
m("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
m("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
m("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
m("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
m("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
m("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
m("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
m("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
m("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
m("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
m("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
m("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
m("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
m("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
m("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
m("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
m("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
m("\\imath", "\\html@mathml{\\@imath}{ı}");
m("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
m("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
m("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
m("⟦", "\\llbracket");
m("⟧", "\\rrbracket");
m("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
m("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
m("⦃", "\\lBrace");
m("⦄", "\\rBrace");
m(
  "\\minuso",
  "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}",
);
m("⦵", "\\minuso");
m("\\darr", "\\downarrow");
m("\\dArr", "\\Downarrow");
m("\\Darr", "\\Downarrow");
m("\\lang", "\\langle");
m("\\rang", "\\rangle");
m("\\uarr", "\\uparrow");
m("\\uArr", "\\Uparrow");
m("\\Uarr", "\\Uparrow");
m("\\N", "\\mathbb{N}");
m("\\R", "\\mathbb{R}");
m("\\Z", "\\mathbb{Z}");
m("\\alef", "\\aleph");
m("\\alefsym", "\\aleph");
m("\\Alpha", "\\mathrm{A}");
m("\\Beta", "\\mathrm{B}");
m("\\bull", "\\bullet");
m("\\Chi", "\\mathrm{X}");
m("\\clubs", "\\clubsuit");
m("\\cnums", "\\mathbb{C}");
m("\\Complex", "\\mathbb{C}");
m("\\Dagger", "\\ddagger");
m("\\diamonds", "\\diamondsuit");
m("\\empty", "\\emptyset");
m("\\Epsilon", "\\mathrm{E}");
m("\\Eta", "\\mathrm{H}");
m("\\exist", "\\exists");
m("\\harr", "\\leftrightarrow");
m("\\hArr", "\\Leftrightarrow");
m("\\Harr", "\\Leftrightarrow");
m("\\hearts", "\\heartsuit");
m("\\image", "\\Im");
m("\\infin", "\\infty");
m("\\Iota", "\\mathrm{I}");
m("\\isin", "\\in");
m("\\Kappa", "\\mathrm{K}");
m("\\larr", "\\leftarrow");
m("\\lArr", "\\Leftarrow");
m("\\Larr", "\\Leftarrow");
m("\\lrarr", "\\leftrightarrow");
m("\\lrArr", "\\Leftrightarrow");
m("\\Lrarr", "\\Leftrightarrow");
m("\\Mu", "\\mathrm{M}");
m("\\natnums", "\\mathbb{N}");
m("\\Nu", "\\mathrm{N}");
m("\\Omicron", "\\mathrm{O}");
m("\\plusmn", "\\pm");
m("\\rarr", "\\rightarrow");
m("\\rArr", "\\Rightarrow");
m("\\Rarr", "\\Rightarrow");
m("\\real", "\\Re");
m("\\reals", "\\mathbb{R}");
m("\\Reals", "\\mathbb{R}");
m("\\Rho", "\\mathrm{P}");
m("\\sdot", "\\cdot");
m("\\sect", "\\S");
m("\\spades", "\\spadesuit");
m("\\sub", "\\subset");
m("\\sube", "\\subseteq");
m("\\supe", "\\supseteq");
m("\\Tau", "\\mathrm{T}");
m("\\thetasym", "\\vartheta");
m("\\weierp", "\\wp");
m("\\Zeta", "\\mathrm{Z}");
m("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
m("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
m("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
m("\\bra", "\\mathinner{\\langle{#1}|}");
m("\\ket", "\\mathinner{|{#1}\\rangle}");
m("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
m("\\Bra", "\\left\\langle#1\\right|");
m("\\Ket", "\\left|#1\\right\\rangle");
var wi = (r) => (e) => {
  var t = e.consumeArg().tokens,
    a = e.consumeArg().tokens,
    n = e.consumeArg().tokens,
    i = e.consumeArg().tokens,
    l = e.macros.get("|"),
    u = e.macros.get("\\|");
  e.macros.beginGroup();
  var c = (g) => (y) => {
    r && (y.macros.set("|", l), n.length && y.macros.set("\\|", u));
    var x = g;
    if (!g && n.length) {
      var w = y.future();
      w.text === "|" && (y.popToken(), (x = !0));
    }
    return { tokens: x ? n : a, numArgs: 0 };
  };
  (e.macros.set("|", c(!1)), n.length && e.macros.set("\\|", c(!0)));
  var d = e.consumeArg().tokens,
    f = e.expandTokens([...i, ...d, ...t]);
  return (e.macros.endGroup(), { tokens: f.reverse(), numArgs: 0 });
};
m("\\bra@ket", wi(!1));
m("\\bra@set", wi(!0));
m(
  "\\Braket",
  "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}",
);
m("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
m("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
m("\\angln", "{\\angl n}");
m("\\blue", "\\textcolor{##6495ed}{#1}");
m("\\orange", "\\textcolor{##ffa500}{#1}");
m("\\pink", "\\textcolor{##ff00af}{#1}");
m("\\red", "\\textcolor{##df0030}{#1}");
m("\\green", "\\textcolor{##28ae7b}{#1}");
m("\\gray", "\\textcolor{gray}{#1}");
m("\\purple", "\\textcolor{##9d38bd}{#1}");
m("\\blueA", "\\textcolor{##ccfaff}{#1}");
m("\\blueB", "\\textcolor{##80f6ff}{#1}");
m("\\blueC", "\\textcolor{##63d9ea}{#1}");
m("\\blueD", "\\textcolor{##11accd}{#1}");
m("\\blueE", "\\textcolor{##0c7f99}{#1}");
m("\\tealA", "\\textcolor{##94fff5}{#1}");
m("\\tealB", "\\textcolor{##26edd5}{#1}");
m("\\tealC", "\\textcolor{##01d1c1}{#1}");
m("\\tealD", "\\textcolor{##01a995}{#1}");
m("\\tealE", "\\textcolor{##208170}{#1}");
m("\\greenA", "\\textcolor{##b6ffb0}{#1}");
m("\\greenB", "\\textcolor{##8af281}{#1}");
m("\\greenC", "\\textcolor{##74cf70}{#1}");
m("\\greenD", "\\textcolor{##1fab54}{#1}");
m("\\greenE", "\\textcolor{##0d923f}{#1}");
m("\\goldA", "\\textcolor{##ffd0a9}{#1}");
m("\\goldB", "\\textcolor{##ffbb71}{#1}");
m("\\goldC", "\\textcolor{##ff9c39}{#1}");
m("\\goldD", "\\textcolor{##e07d10}{#1}");
m("\\goldE", "\\textcolor{##a75a05}{#1}");
m("\\redA", "\\textcolor{##fca9a9}{#1}");
m("\\redB", "\\textcolor{##ff8482}{#1}");
m("\\redC", "\\textcolor{##f9685d}{#1}");
m("\\redD", "\\textcolor{##e84d39}{#1}");
m("\\redE", "\\textcolor{##bc2612}{#1}");
m("\\maroonA", "\\textcolor{##ffbde0}{#1}");
m("\\maroonB", "\\textcolor{##ff92c6}{#1}");
m("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
m("\\maroonD", "\\textcolor{##ca337c}{#1}");
m("\\maroonE", "\\textcolor{##9e034e}{#1}");
m("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
m("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
m("\\purpleC", "\\textcolor{##aa87ff}{#1}");
m("\\purpleD", "\\textcolor{##7854ab}{#1}");
m("\\purpleE", "\\textcolor{##543b78}{#1}");
m("\\mintA", "\\textcolor{##f5f9e8}{#1}");
m("\\mintB", "\\textcolor{##edf2df}{#1}");
m("\\mintC", "\\textcolor{##e0e5cc}{#1}");
m("\\grayA", "\\textcolor{##f6f7f7}{#1}");
m("\\grayB", "\\textcolor{##f0f1f2}{#1}");
m("\\grayC", "\\textcolor{##e3e5e6}{#1}");
m("\\grayD", "\\textcolor{##d6d8da}{#1}");
m("\\grayE", "\\textcolor{##babec2}{#1}");
m("\\grayF", "\\textcolor{##888d93}{#1}");
m("\\grayG", "\\textcolor{##626569}{#1}");
m("\\grayH", "\\textcolor{##3b3e40}{#1}");
m("\\grayI", "\\textcolor{##21242c}{#1}");
m("\\kaBlue", "\\textcolor{##314453}{#1}");
m("\\kaGreen", "\\textcolor{##71B307}{#1}");
var Si = { "^": !0, _: !0, "\\limits": !0, "\\nolimits": !0 };
class oo {
  constructor(e, t, a) {
    ((this.settings = t),
      (this.expansionCount = 0),
      this.feed(e),
      (this.macros = new io(so, t.macros)),
      (this.mode = a),
      (this.stack = []));
  }
  feed(e) {
    this.lexer = new Qa(e, this.settings);
  }
  switchMode(e) {
    this.mode = e;
  }
  beginGroup() {
    this.macros.beginGroup();
  }
  endGroup() {
    this.macros.endGroup();
  }
  endGroups() {
    this.macros.endGroups();
  }
  future() {
    return (
      this.stack.length === 0 && this.pushToken(this.lexer.lex()),
      this.stack[this.stack.length - 1]
    );
  }
  popToken() {
    return (this.future(), this.stack.pop());
  }
  pushToken(e) {
    this.stack.push(e);
  }
  pushTokens(e) {
    this.stack.push(...e);
  }
  scanArgument(e) {
    var t, a, n;
    if (e) {
      if ((this.consumeSpaces(), this.future().text !== "[")) return null;
      ((t = this.popToken()), ({ tokens: n, end: a } = this.consumeArg(["]"])));
    } else ({ tokens: n, start: t, end: a } = this.consumeArg());
    return (this.pushToken(new I0("EOF", a.loc)), this.pushTokens(n), new I0("", B0.range(t, a)));
  }
  consumeSpaces() {
    for (;;) {
      var e = this.future();
      if (e.text === " ") this.stack.pop();
      else break;
    }
  }
  consumeArg(e) {
    var t = [],
      a = e && e.length > 0;
    a || this.consumeSpaces();
    var n = this.future(),
      i,
      l = 0,
      u = 0;
    do {
      if (((i = this.popToken()), t.push(i), i.text === "{")) ++l;
      else if (i.text === "}") {
        if ((--l, l === -1)) throw new A("Extra }", i);
      } else if (i.text === "EOF")
        throw new A(
          "Unexpected end of input in a macro argument, expected '" + (e && a ? e[u] : "}") + "'",
          i,
        );
      if (e && a)
        if ((l === 0 || (l === 1 && e[u] === "{")) && i.text === e[u]) {
          if ((++u, u === e.length)) {
            t.splice(-u, u);
            break;
          }
        } else u = 0;
    } while (l !== 0 || a);
    return (
      n.text === "{" && t[t.length - 1].text === "}" && (t.pop(), t.shift()),
      t.reverse(),
      { tokens: t, start: n, end: i }
    );
  }
  consumeArgs(e, t) {
    if (t) {
      if (t.length !== e + 1)
        throw new A("The length of delimiters doesn't match the number of args!");
      for (var a = t[0], n = 0; n < a.length; n++) {
        var i = this.popToken();
        if (a[n] !== i.text) throw new A("Use of the macro doesn't match its definition", i);
      }
    }
    for (var l = [], u = 0; u < e; u++) l.push(this.consumeArg(t && t[u + 1]).tokens);
    return l;
  }
  countExpansion(e) {
    if (((this.expansionCount += e), this.expansionCount > this.settings.maxExpand))
      throw new A("Too many expansions: infinite loop or need to increase maxExpand setting");
  }
  expandOnce(e) {
    var t = this.popToken(),
      a = t.text,
      n = t.noexpand ? null : this._getExpansion(a);
    if (n == null || (e && n.unexpandable)) {
      if (e && n == null && a[0] === "\\" && !this.isDefined(a))
        throw new A("Undefined control sequence: " + a);
      return (this.pushToken(t), !1);
    }
    this.countExpansion(1);
    var i = n.tokens,
      l = this.consumeArgs(n.numArgs, n.delimiters);
    if (n.numArgs) {
      i = i.slice();
      for (var u = i.length - 1; u >= 0; --u) {
        var c = i[u];
        if (c.text === "#") {
          if (u === 0) throw new A("Incomplete placeholder at end of macro body", c);
          if (((c = i[--u]), c.text === "#")) i.splice(u + 1, 1);
          else if (/^[1-9]$/.test(c.text)) i.splice(u, 2, ...l[+c.text - 1]);
          else throw new A("Not a valid argument number", c);
        }
      }
    }
    return (this.pushTokens(i), i.length);
  }
  expandAfterFuture() {
    return (this.expandOnce(), this.future());
  }
  expandNextToken() {
    for (;;)
      if (this.expandOnce() === !1) {
        var e = this.stack.pop();
        return (e.treatAsRelax && (e.text = "\\relax"), e);
      }
  }
  expandMacro(e) {
    return this.macros.has(e) ? this.expandTokens([new I0(e)]) : void 0;
  }
  expandTokens(e) {
    var t = [],
      a = this.stack.length;
    for (this.pushTokens(e); this.stack.length > a;)
      if (this.expandOnce(!0) === !1) {
        var n = this.stack.pop();
        (n.treatAsRelax && ((n.noexpand = !1), (n.treatAsRelax = !1)), t.push(n));
      }
    return (this.countExpansion(t.length), t);
  }
  expandMacroAsText(e) {
    var t = this.expandMacro(e);
    return t && t.map((a) => a.text).join("");
  }
  _getExpansion(e) {
    var t = this.macros.get(e);
    if (t == null) return t;
    if (e.length === 1) {
      var a = this.lexer.catcodes[e];
      if (a != null && a !== 13) return;
    }
    var n = typeof t == "function" ? t(this) : t;
    if (typeof n == "string") {
      var i = 0;
      if (n.includes("#")) for (var l = n.replace(/##/g, ""); l.includes("#" + (i + 1));) ++i;
      for (var u = new Qa(n, this.settings), c = [], d = u.lex(); d.text !== "EOF";)
        (c.push(d), (d = u.lex()));
      c.reverse();
      var f = { tokens: c, numArgs: i };
      return f;
    }
    return n;
  }
  isDefined(e) {
    return (
      this.macros.has(e) ||
      me.hasOwnProperty(e) ||
      n0.math.hasOwnProperty(e) ||
      n0.text.hasOwnProperty(e) ||
      Si.hasOwnProperty(e)
    );
  }
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null
      ? typeof t == "string" || typeof t == "function" || !t.unexpandable
      : me.hasOwnProperty(e) && !me[e].primitive;
  }
}
var tn = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,
  vt = Object.freeze({
    "₊": "+",
    "₋": "-",
    "₌": "=",
    "₍": "(",
    "₎": ")",
    "₀": "0",
    "₁": "1",
    "₂": "2",
    "₃": "3",
    "₄": "4",
    "₅": "5",
    "₆": "6",
    "₇": "7",
    "₈": "8",
    "₉": "9",
    ₐ: "a",
    ₑ: "e",
    ₕ: "h",
    ᵢ: "i",
    ⱼ: "j",
    ₖ: "k",
    ₗ: "l",
    ₘ: "m",
    ₙ: "n",
    ₒ: "o",
    ₚ: "p",
    ᵣ: "r",
    ₛ: "s",
    ₜ: "t",
    ᵤ: "u",
    ᵥ: "v",
    ₓ: "x",
    ᵦ: "β",
    ᵧ: "γ",
    ᵨ: "ρ",
    ᵩ: "ϕ",
    ᵪ: "χ",
    "⁺": "+",
    "⁻": "-",
    "⁼": "=",
    "⁽": "(",
    "⁾": ")",
    "⁰": "0",
    "¹": "1",
    "²": "2",
    "³": "3",
    "⁴": "4",
    "⁵": "5",
    "⁶": "6",
    "⁷": "7",
    "⁸": "8",
    "⁹": "9",
    ᴬ: "A",
    ᴮ: "B",
    ᴰ: "D",
    ᴱ: "E",
    ᴳ: "G",
    ᴴ: "H",
    ᴵ: "I",
    ᴶ: "J",
    ᴷ: "K",
    ᴸ: "L",
    ᴹ: "M",
    ᴺ: "N",
    ᴼ: "O",
    ᴾ: "P",
    ᴿ: "R",
    ᵀ: "T",
    ᵁ: "U",
    ⱽ: "V",
    ᵂ: "W",
    ᵃ: "a",
    ᵇ: "b",
    ᶜ: "c",
    ᵈ: "d",
    ᵉ: "e",
    ᶠ: "f",
    ᵍ: "g",
    ʰ: "h",
    ⁱ: "i",
    ʲ: "j",
    ᵏ: "k",
    ˡ: "l",
    ᵐ: "m",
    ⁿ: "n",
    ᵒ: "o",
    ᵖ: "p",
    ʳ: "r",
    ˢ: "s",
    ᵗ: "t",
    ᵘ: "u",
    ᵛ: "v",
    ʷ: "w",
    ˣ: "x",
    ʸ: "y",
    ᶻ: "z",
    ᵝ: "β",
    ᵞ: "γ",
    ᵟ: "δ",
    ᵠ: "ϕ",
    ᵡ: "χ",
    ᶿ: "θ",
  }),
  gr = {
    "́": { text: "\\'", math: "\\acute" },
    "̀": { text: "\\`", math: "\\grave" },
    "̈": { text: '\\"', math: "\\ddot" },
    "̃": { text: "\\~", math: "\\tilde" },
    "̄": { text: "\\=", math: "\\bar" },
    "̆": { text: "\\u", math: "\\breve" },
    "̌": { text: "\\v", math: "\\check" },
    "̂": { text: "\\^", math: "\\hat" },
    "̇": { text: "\\.", math: "\\dot" },
    "̊": { text: "\\r", math: "\\mathring" },
    "̋": { text: "\\H" },
    "̧": { text: "\\c" },
  },
  rn = {
    á: "á",
    à: "à",
    ä: "ä",
    ǟ: "ǟ",
    ã: "ã",
    ā: "ā",
    ă: "ă",
    ắ: "ắ",
    ằ: "ằ",
    ẵ: "ẵ",
    ǎ: "ǎ",
    â: "â",
    ấ: "ấ",
    ầ: "ầ",
    ẫ: "ẫ",
    ȧ: "ȧ",
    ǡ: "ǡ",
    å: "å",
    ǻ: "ǻ",
    ḃ: "ḃ",
    ć: "ć",
    ḉ: "ḉ",
    č: "č",
    ĉ: "ĉ",
    ċ: "ċ",
    ç: "ç",
    ď: "ď",
    ḋ: "ḋ",
    ḑ: "ḑ",
    é: "é",
    è: "è",
    ë: "ë",
    ẽ: "ẽ",
    ē: "ē",
    ḗ: "ḗ",
    ḕ: "ḕ",
    ĕ: "ĕ",
    ḝ: "ḝ",
    ě: "ě",
    ê: "ê",
    ế: "ế",
    ề: "ề",
    ễ: "ễ",
    ė: "ė",
    ȩ: "ȩ",
    ḟ: "ḟ",
    ǵ: "ǵ",
    ḡ: "ḡ",
    ğ: "ğ",
    ǧ: "ǧ",
    ĝ: "ĝ",
    ġ: "ġ",
    ģ: "ģ",
    ḧ: "ḧ",
    ȟ: "ȟ",
    ĥ: "ĥ",
    ḣ: "ḣ",
    ḩ: "ḩ",
    í: "í",
    ì: "ì",
    ï: "ï",
    ḯ: "ḯ",
    ĩ: "ĩ",
    ī: "ī",
    ĭ: "ĭ",
    ǐ: "ǐ",
    î: "î",
    ǰ: "ǰ",
    ĵ: "ĵ",
    ḱ: "ḱ",
    ǩ: "ǩ",
    ķ: "ķ",
    ĺ: "ĺ",
    ľ: "ľ",
    ļ: "ļ",
    ḿ: "ḿ",
    ṁ: "ṁ",
    ń: "ń",
    ǹ: "ǹ",
    ñ: "ñ",
    ň: "ň",
    ṅ: "ṅ",
    ņ: "ņ",
    ó: "ó",
    ò: "ò",
    ö: "ö",
    ȫ: "ȫ",
    õ: "õ",
    ṍ: "ṍ",
    ṏ: "ṏ",
    ȭ: "ȭ",
    ō: "ō",
    ṓ: "ṓ",
    ṑ: "ṑ",
    ŏ: "ŏ",
    ǒ: "ǒ",
    ô: "ô",
    ố: "ố",
    ồ: "ồ",
    ỗ: "ỗ",
    ȯ: "ȯ",
    ȱ: "ȱ",
    ő: "ő",
    ṕ: "ṕ",
    ṗ: "ṗ",
    ŕ: "ŕ",
    ř: "ř",
    ṙ: "ṙ",
    ŗ: "ŗ",
    ś: "ś",
    ṥ: "ṥ",
    š: "š",
    ṧ: "ṧ",
    ŝ: "ŝ",
    ṡ: "ṡ",
    ş: "ş",
    ẗ: "ẗ",
    ť: "ť",
    ṫ: "ṫ",
    ţ: "ţ",
    ú: "ú",
    ù: "ù",
    ü: "ü",
    ǘ: "ǘ",
    ǜ: "ǜ",
    ǖ: "ǖ",
    ǚ: "ǚ",
    ũ: "ũ",
    ṹ: "ṹ",
    ū: "ū",
    ṻ: "ṻ",
    ŭ: "ŭ",
    ǔ: "ǔ",
    û: "û",
    ů: "ů",
    ű: "ű",
    ṽ: "ṽ",
    ẃ: "ẃ",
    ẁ: "ẁ",
    ẅ: "ẅ",
    ŵ: "ŵ",
    ẇ: "ẇ",
    ẘ: "ẘ",
    ẍ: "ẍ",
    ẋ: "ẋ",
    ý: "ý",
    ỳ: "ỳ",
    ÿ: "ÿ",
    ỹ: "ỹ",
    ȳ: "ȳ",
    ŷ: "ŷ",
    ẏ: "ẏ",
    ẙ: "ẙ",
    ź: "ź",
    ž: "ž",
    ẑ: "ẑ",
    ż: "ż",
    Á: "Á",
    À: "À",
    Ä: "Ä",
    Ǟ: "Ǟ",
    Ã: "Ã",
    Ā: "Ā",
    Ă: "Ă",
    Ắ: "Ắ",
    Ằ: "Ằ",
    Ẵ: "Ẵ",
    Ǎ: "Ǎ",
    Â: "Â",
    Ấ: "Ấ",
    Ầ: "Ầ",
    Ẫ: "Ẫ",
    Ȧ: "Ȧ",
    Ǡ: "Ǡ",
    Å: "Å",
    Ǻ: "Ǻ",
    Ḃ: "Ḃ",
    Ć: "Ć",
    Ḉ: "Ḉ",
    Č: "Č",
    Ĉ: "Ĉ",
    Ċ: "Ċ",
    Ç: "Ç",
    Ď: "Ď",
    Ḋ: "Ḋ",
    Ḑ: "Ḑ",
    É: "É",
    È: "È",
    Ë: "Ë",
    Ẽ: "Ẽ",
    Ē: "Ē",
    Ḗ: "Ḗ",
    Ḕ: "Ḕ",
    Ĕ: "Ĕ",
    Ḝ: "Ḝ",
    Ě: "Ě",
    Ê: "Ê",
    Ế: "Ế",
    Ề: "Ề",
    Ễ: "Ễ",
    Ė: "Ė",
    Ȩ: "Ȩ",
    Ḟ: "Ḟ",
    Ǵ: "Ǵ",
    Ḡ: "Ḡ",
    Ğ: "Ğ",
    Ǧ: "Ǧ",
    Ĝ: "Ĝ",
    Ġ: "Ġ",
    Ģ: "Ģ",
    Ḧ: "Ḧ",
    Ȟ: "Ȟ",
    Ĥ: "Ĥ",
    Ḣ: "Ḣ",
    Ḩ: "Ḩ",
    Í: "Í",
    Ì: "Ì",
    Ï: "Ï",
    Ḯ: "Ḯ",
    Ĩ: "Ĩ",
    Ī: "Ī",
    Ĭ: "Ĭ",
    Ǐ: "Ǐ",
    Î: "Î",
    İ: "İ",
    Ĵ: "Ĵ",
    Ḱ: "Ḱ",
    Ǩ: "Ǩ",
    Ķ: "Ķ",
    Ĺ: "Ĺ",
    Ľ: "Ľ",
    Ļ: "Ļ",
    Ḿ: "Ḿ",
    Ṁ: "Ṁ",
    Ń: "Ń",
    Ǹ: "Ǹ",
    Ñ: "Ñ",
    Ň: "Ň",
    Ṅ: "Ṅ",
    Ņ: "Ņ",
    Ó: "Ó",
    Ò: "Ò",
    Ö: "Ö",
    Ȫ: "Ȫ",
    Õ: "Õ",
    Ṍ: "Ṍ",
    Ṏ: "Ṏ",
    Ȭ: "Ȭ",
    Ō: "Ō",
    Ṓ: "Ṓ",
    Ṑ: "Ṑ",
    Ŏ: "Ŏ",
    Ǒ: "Ǒ",
    Ô: "Ô",
    Ố: "Ố",
    Ồ: "Ồ",
    Ỗ: "Ỗ",
    Ȯ: "Ȯ",
    Ȱ: "Ȱ",
    Ő: "Ő",
    Ṕ: "Ṕ",
    Ṗ: "Ṗ",
    Ŕ: "Ŕ",
    Ř: "Ř",
    Ṙ: "Ṙ",
    Ŗ: "Ŗ",
    Ś: "Ś",
    Ṥ: "Ṥ",
    Š: "Š",
    Ṧ: "Ṧ",
    Ŝ: "Ŝ",
    Ṡ: "Ṡ",
    Ş: "Ş",
    Ť: "Ť",
    Ṫ: "Ṫ",
    Ţ: "Ţ",
    Ú: "Ú",
    Ù: "Ù",
    Ü: "Ü",
    Ǘ: "Ǘ",
    Ǜ: "Ǜ",
    Ǖ: "Ǖ",
    Ǚ: "Ǚ",
    Ũ: "Ũ",
    Ṹ: "Ṹ",
    Ū: "Ū",
    Ṻ: "Ṻ",
    Ŭ: "Ŭ",
    Ǔ: "Ǔ",
    Û: "Û",
    Ů: "Ů",
    Ű: "Ű",
    Ṽ: "Ṽ",
    Ẃ: "Ẃ",
    Ẁ: "Ẁ",
    Ẅ: "Ẅ",
    Ŵ: "Ŵ",
    Ẇ: "Ẇ",
    Ẍ: "Ẍ",
    Ẋ: "Ẋ",
    Ý: "Ý",
    Ỳ: "Ỳ",
    Ÿ: "Ÿ",
    Ỹ: "Ỹ",
    Ȳ: "Ȳ",
    Ŷ: "Ŷ",
    Ẏ: "Ẏ",
    Ź: "Ź",
    Ž: "Ž",
    Ẑ: "Ẑ",
    Ż: "Ż",
    ά: "ά",
    ὰ: "ὰ",
    ᾱ: "ᾱ",
    ᾰ: "ᾰ",
    έ: "έ",
    ὲ: "ὲ",
    ή: "ή",
    ὴ: "ὴ",
    ί: "ί",
    ὶ: "ὶ",
    ϊ: "ϊ",
    ΐ: "ΐ",
    ῒ: "ῒ",
    ῑ: "ῑ",
    ῐ: "ῐ",
    ό: "ό",
    ὸ: "ὸ",
    ύ: "ύ",
    ὺ: "ὺ",
    ϋ: "ϋ",
    ΰ: "ΰ",
    ῢ: "ῢ",
    ῡ: "ῡ",
    ῠ: "ῠ",
    ώ: "ώ",
    ὼ: "ὼ",
    Ύ: "Ύ",
    Ὺ: "Ὺ",
    Ϋ: "Ϋ",
    Ῡ: "Ῡ",
    Ῠ: "Ῠ",
    Ώ: "Ώ",
    Ὼ: "Ὼ",
  };
class Ut {
  constructor(e, t) {
    ((this.mode = "math"),
      (this.gullet = new oo(e, t, this.mode)),
      (this.settings = t),
      (this.leftrightDepth = 0),
      (this.nextToken = null));
  }
  expect(e, t) {
    if ((t === void 0 && (t = !0), this.fetch().text !== e))
      throw new A("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
    t && this.consume();
  }
  consume() {
    this.nextToken = null;
  }
  fetch() {
    return (
      this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()),
      this.nextToken
    );
  }
  switchMode(e) {
    ((this.mode = e), this.gullet.switchMode(e));
  }
  parse() {
    (this.settings.globalGroup || this.gullet.beginGroup(),
      this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor"));
    try {
      var e = this.parseExpression(!1);
      return (this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e);
    } finally {
      this.gullet.endGroups();
    }
  }
  subparse(e) {
    var t = this.nextToken;
    (this.consume(), this.gullet.pushToken(new I0("}")), this.gullet.pushTokens(e));
    var a = this.parseExpression(!1);
    return (this.expect("}"), (this.nextToken = t), a);
  }
  parseExpression(e, t) {
    for (var a = []; ;) {
      this.mode === "math" && this.consumeSpaces();
      var n = this.fetch();
      if (
        Ut.endOfExpression.has(n.text) ||
        (t && n.text === t) ||
        (e && me[n.text] && me[n.text].infix)
      )
        break;
      var i = this.parseAtom(t);
      if (i) {
        if (i.type === "internal") continue;
      } else break;
      a.push(i);
    }
    return (this.mode === "text" && this.formLigatures(a), this.handleInfixNodes(a));
  }
  handleInfixNodes(e) {
    for (var t = -1, a, n = 0; n < e.length; n++) {
      var i = e[n];
      if (i.type === "infix") {
        if (t !== -1) throw new A("only one infix operator per group", i.token);
        ((t = n), (a = i.replaceWith));
      }
    }
    if (t !== -1 && a) {
      var l,
        u,
        c = e.slice(0, t),
        d = e.slice(t + 1);
      (c.length === 1 && c[0].type === "ordgroup"
        ? (l = c[0])
        : (l = { type: "ordgroup", mode: this.mode, body: c }),
        d.length === 1 && d[0].type === "ordgroup"
          ? (u = d[0])
          : (u = { type: "ordgroup", mode: this.mode, body: d }));
      var f;
      return (
        a === "\\\\abovefrac"
          ? (f = this.callFunction(a, [l, e[t], u], []))
          : (f = this.callFunction(a, [l, u], [])),
        [f]
      );
    } else return e;
  }
  handleSupSubscript(e) {
    var t = this.fetch(),
      a = t.text;
    (this.consume(), this.consumeSpaces());
    var n;
    do {
      var i;
      n = this.parseGroup(e);
    } while (((i = n) == null ? void 0 : i.type) === "internal");
    if (!n) throw new A("Expected group after '" + a + "'", t);
    return n;
  }
  formatUnsupportedCmd(e) {
    for (var t = [], a = 0; a < e.length; a++)
      t.push({ type: "textord", mode: "text", text: e[a] });
    var n = { type: "text", mode: this.mode, body: t },
      i = { type: "color", mode: this.mode, color: this.settings.errorColor, body: [n] };
    return i;
  }
  parseAtom(e) {
    var t = this.parseGroup("atom", e);
    if ((t == null ? void 0 : t.type) === "internal" || this.mode === "text") return t;
    for (var a, n; ;) {
      this.consumeSpaces();
      var i = this.fetch();
      if (i.text === "\\limits" || i.text === "\\nolimits") {
        if (t && t.type === "op") {
          var l = i.text === "\\limits";
          ((t.limits = l), (t.alwaysHandleSupSub = !0));
        } else if (t && t.type === "operatorname")
          t.alwaysHandleSupSub && (t.limits = i.text === "\\limits");
        else throw new A("Limit controls must follow a math operator", i);
        this.consume();
      } else if (i.text === "^") {
        if (a) throw new A("Double superscript", i);
        a = this.handleSupSubscript("superscript");
      } else if (i.text === "_") {
        if (n) throw new A("Double subscript", i);
        n = this.handleSupSubscript("subscript");
      } else if (i.text === "'") {
        if (a) throw new A("Double superscript", i);
        var u = { type: "textord", mode: this.mode, text: "\\prime" },
          c = [u];
        for (this.consume(); this.fetch().text === "'";) (c.push(u), this.consume());
        (this.fetch().text === "^" && c.push(this.handleSupSubscript("superscript")),
          (a = { type: "ordgroup", mode: this.mode, body: c }));
      } else if (vt[i.text]) {
        var d = tn.test(i.text),
          f = [];
        for (f.push(new I0(vt[i.text])), this.consume(); ;) {
          var g = this.fetch().text;
          if (!vt[g] || tn.test(g) !== d) break;
          (f.unshift(new I0(vt[g])), this.consume());
        }
        var y = this.subparse(f);
        d
          ? (n = { type: "ordgroup", mode: "math", body: y })
          : (a = { type: "ordgroup", mode: "math", body: y });
      } else break;
    }
    return a || n ? { type: "supsub", mode: this.mode, base: t, sup: a, sub: n } : t;
  }
  parseFunction(e, t) {
    var a = this.fetch(),
      n = a.text,
      i = me[n];
    if (!i) return null;
    if ((this.consume(), t && t !== "atom" && !i.allowedInArgument))
      throw new A("Got function '" + n + "' with no arguments" + (t ? " as " + t : ""), a);
    if (this.mode === "text" && !i.allowedInText)
      throw new A("Can't use function '" + n + "' in text mode", a);
    if (this.mode === "math" && i.allowedInMath === !1)
      throw new A("Can't use function '" + n + "' in math mode", a);
    var { args: l, optArgs: u } = this.parseArguments(n, i);
    return this.callFunction(n, l, u, a, e);
  }
  callFunction(e, t, a, n, i) {
    var l = { funcName: e, parser: this, token: n, breakOnTokenText: i },
      u = me[e];
    if (u && u.handler) return u.handler(l, t, a);
    throw new A("No function handler for " + e);
  }
  parseArguments(e, t) {
    var a = t.numArgs + t.numOptionalArgs;
    if (a === 0) return { args: [], optArgs: [] };
    for (var n = [], i = [], l = 0; l < a; l++) {
      var u = t.argTypes && t.argTypes[l],
        c = l < t.numOptionalArgs;
      (("primitive" in t && t.primitive && u == null) ||
        (t.type === "sqrt" && l === 1 && i[0] == null)) &&
        (u = "primitive");
      var d = this.parseGroupOfType("argument to '" + e + "'", u, c);
      if (c) i.push(d);
      else if (d != null) n.push(d);
      else throw new A("Null argument, please report this as a bug");
    }
    return { args: n, optArgs: i };
  }
  parseGroupOfType(e, t, a) {
    switch (t) {
      case "color":
        return this.parseColorGroup(a);
      case "size":
        return this.parseSizeGroup(a);
      case "url":
        return this.parseUrlGroup(a);
      case "math":
      case "text":
        return this.parseArgumentGroup(a, t);
      case "hbox": {
        var n = this.parseArgumentGroup(a, "text");
        return n != null ? { type: "styling", mode: n.mode, body: [n], style: "text" } : null;
      }
      case "raw": {
        var i = this.parseStringGroup("raw", a);
        return i != null ? { type: "raw", mode: "text", string: i.text } : null;
      }
      case "primitive": {
        if (a) throw new A("A primitive argument cannot be optional");
        var l = this.parseGroup(e);
        if (l == null) throw new A("Expected group as " + e, this.fetch());
        return l;
      }
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(a);
      default:
        throw new A("Unknown group type as " + e, this.fetch());
    }
  }
  consumeSpaces() {
    for (; this.fetch().text === " ";) this.consume();
  }
  parseStringGroup(e, t) {
    var a = this.gullet.scanArgument(t);
    if (a == null) return null;
    for (var n = "", i; (i = this.fetch()).text !== "EOF";) ((n += i.text), this.consume());
    return (this.consume(), (a.text = n), a);
  }
  parseRegexGroup(e, t) {
    for (
      var a = this.fetch(), n = a, i = "", l;
      (l = this.fetch()).text !== "EOF" && e.test(i + l.text);
    )
      ((n = l), (i += n.text), this.consume());
    if (i === "") throw new A("Invalid " + t + ": '" + a.text + "'", a);
    return a.range(n, i);
  }
  parseColorGroup(e) {
    var t = this.parseStringGroup("color", e);
    if (t == null) return null;
    var a = /^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
    if (!a) throw new A("Invalid color: '" + t.text + "'", t);
    var n = a[0];
    return (
      /^[0-9a-f]{6}$/i.test(n) && (n = "#" + n),
      { type: "color-token", mode: this.mode, color: n }
    );
  }
  parseSizeGroup(e) {
    var t,
      a = !1;
    if (
      (this.gullet.consumeSpaces(),
      !e && this.gullet.future().text !== "{"
        ? (t = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size"))
        : (t = this.parseStringGroup("size", e)),
      !t)
    )
      return null;
    !e && t.text.length === 0 && ((t.text = "0pt"), (a = !0));
    var n = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
    if (!n) throw new A("Invalid size: '" + t.text + "'", t);
    var i = { number: +(n[1] + n[2]), unit: n[3] };
    if (!En(i)) throw new A("Invalid unit: '" + i.unit + "'", t);
    return { type: "size", mode: this.mode, value: i, isBlank: a };
  }
  parseUrlGroup(e) {
    (this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12));
    var t = this.parseStringGroup("url", e);
    if ((this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), t == null))
      return null;
    var a = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return { type: "url", mode: this.mode, url: a };
  }
  parseArgumentGroup(e, t) {
    var a = this.gullet.scanArgument(e);
    if (a == null) return null;
    var n = this.mode;
    (t && this.switchMode(t), this.gullet.beginGroup());
    var i = this.parseExpression(!1, "EOF");
    (this.expect("EOF"), this.gullet.endGroup());
    var l = { type: "ordgroup", mode: this.mode, loc: a.loc, body: i };
    return (t && this.switchMode(n), l);
  }
  parseGroup(e, t) {
    var a = this.fetch(),
      n = a.text,
      i;
    if (n === "{" || n === "\\begingroup") {
      this.consume();
      var l = n === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var u = this.parseExpression(!1, l),
        c = this.fetch();
      (this.expect(l),
        this.gullet.endGroup(),
        (i = {
          type: "ordgroup",
          mode: this.mode,
          loc: B0.range(a, c),
          body: u,
          semisimple: n === "\\begingroup" || void 0,
        }));
    } else if (
      ((i = this.parseFunction(t, e) || this.parseSymbol()),
      i == null && n[0] === "\\" && !Si.hasOwnProperty(n))
    ) {
      if (this.settings.throwOnError) throw new A("Undefined control sequence: " + n, a);
      ((i = this.formatUnsupportedCmd(n)), this.consume());
    }
    return i;
  }
  formLigatures(e) {
    for (var t = e.length - 1, a = 0; a < t; ++a) {
      var n = e[a];
      if (n.type === "textord") {
        var i = n.text,
          l = e[a + 1];
        if (!(!l || l.type !== "textord")) {
          if (i === "-" && l.text === "-") {
            var u = e[a + 2];
            a + 1 < t && u && u.type === "textord" && u.text === "-"
              ? (e.splice(a, 3, {
                  type: "textord",
                  mode: "text",
                  loc: B0.range(n, u),
                  text: "---",
                }),
                (t -= 2))
              : (e.splice(a, 2, { type: "textord", mode: "text", loc: B0.range(n, l), text: "--" }),
                (t -= 1));
          }
          (i === "'" || i === "`") &&
            l.text === i &&
            (e.splice(a, 2, { type: "textord", mode: "text", loc: B0.range(n, l), text: i + i }),
            (t -= 1));
        }
      }
    }
  }
  parseSymbol() {
    var e = this.fetch(),
      t = e.text;
    if (/^\\verb[^a-zA-Z]/.test(t)) {
      this.consume();
      var a = t.slice(5),
        n = a.charAt(0) === "*";
      if ((n && (a = a.slice(1)), a.length < 2 || a.charAt(0) !== a.slice(-1)))
        throw new A(`\\verb assertion failed --
                    please report what input caused this bug`);
      return ((a = a.slice(1, -1)), { type: "verb", mode: "text", body: a, star: n });
    }
    rn.hasOwnProperty(t[0]) &&
      !n0[this.mode][t[0]] &&
      (this.settings.strict &&
        this.mode === "math" &&
        this.settings.reportNonstrict(
          "unicodeTextInMathMode",
          'Accented Unicode text character "' + t[0] + '" used in math mode',
          e,
        ),
      (t = rn[t[0]] + t.slice(1)));
    var i = ao.exec(t);
    i && ((t = t.substring(0, i.index)), t === "i" ? (t = "ı") : t === "j" && (t = "ȷ"));
    var l;
    if (n0[this.mode][t]) {
      this.settings.strict &&
        this.mode === "math" &&
        Ar.includes(t) &&
        this.settings.reportNonstrict(
          "unicodeTextInMathMode",
          'Latin-1/Unicode text character "' + t[0] + '" used in math mode',
          e,
        );
      var u = n0[this.mode][t].group,
        c = B0.range(e),
        d;
      if (nl.hasOwnProperty(u)) {
        var f = u;
        d = { type: "atom", mode: this.mode, family: f, loc: c, text: t };
      } else d = { type: u, mode: this.mode, loc: c, text: t };
      l = d;
    } else if (t.charCodeAt(0) >= 128)
      (this.settings.strict &&
        (Cn(t.charCodeAt(0))
          ? this.mode === "math" &&
            this.settings.reportNonstrict(
              "unicodeTextInMathMode",
              'Unicode text character "' + t[0] + '" used in math mode',
              e,
            )
          : this.settings.reportNonstrict(
              "unknownSymbol",
              'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"),
              e,
            )),
        (l = { type: "textord", mode: "text", loc: B0.range(e), text: t }));
    else return null;
    if ((this.consume(), i))
      for (var g = 0; g < i[0].length; g++) {
        var y = i[0][g];
        if (!gr[y]) throw new A("Unknown accent ' " + y + "'", e);
        var x = gr[y][this.mode] || gr[y].text;
        if (!x) throw new A("Accent " + y + " unsupported in " + this.mode + " mode", e);
        l = {
          type: "accent",
          mode: this.mode,
          loc: B0.range(e),
          label: x,
          isStretchy: !1,
          isShifty: !0,
          base: l,
        };
      }
    return l;
  }
}
Ut.endOfExpression = new Set(["}", "\\endgroup", "\\end", "\\right", "&"]);
var _r = function (e, t) {
    if (!(typeof e == "string" || e instanceof String))
      throw new TypeError("KaTeX can only parse string typed expression");
    var a = new Ut(e, t);
    delete a.gullet.macros.current["\\df@tag"];
    var n = a.parse();
    if (
      (delete a.gullet.macros.current["\\current@color"],
      delete a.gullet.macros.current["\\color"],
      a.gullet.macros.get("\\df@tag"))
    ) {
      if (!t.displayMode) throw new A("\\tag works only in display equations");
      n = [{ type: "tag", mode: "text", body: n, tag: a.subparse([new I0("\\df@tag")]) }];
    }
    return n;
  },
  ki = function (e, t, a) {
    t.textContent = "";
    var n = ea(e, a).toNode();
    t.appendChild(n);
  };
typeof document < "u" &&
  document.compatMode !== "CSS1Compat" &&
  (typeof console < "u" &&
    console.warn(
      "Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.",
    ),
  (ki = function () {
    throw new A("KaTeX doesn't work in quirks mode.");
  }));
var uo = function (e, t) {
    var a = ea(e, t).toMarkup();
    return a;
  },
  co = function (e, t) {
    var a = new Pr(t);
    return _r(e, a);
  },
  Ti = function (e, t, a) {
    if (a.throwOnError || !(e instanceof A)) throw e;
    var n = k(["katex-error"], [new R0(t)]);
    return (
      n.setAttribute("title", e.toString()),
      n.setAttribute("style", "color:" + a.errorColor),
      n
    );
  },
  ea = function (e, t) {
    var a = new Pr(t);
    try {
      var n = _r(e, a);
      return xl(n, e, a);
    } catch (i) {
      return Ti(i, e, a);
    }
  },
  ho = function (e, t) {
    var a = new Pr(t);
    try {
      var n = _r(e, a);
      return wl(n, e, a);
    } catch (i) {
      return Ti(i, e, a);
    }
  },
  mo = "0.16.45",
  fo = { Span: je, Anchor: Rt, SymbolNode: R0, SvgNode: se, PathNode: pe, LineNode: Tr },
  an = {
    version: mo,
    render: ki,
    renderToString: uo,
    ParseError: A,
    SETTINGS_SCHEMA: wr,
    __parse: co,
    __renderToDomTree: ea,
    __renderToHTMLTree: ho,
    __setFontMetrics: rl,
    __defineSymbol: s,
    __defineFunction: E,
    __defineMacro: m,
    __domTree: fo,
  };
const po = {},
  vo = [];
function go(r) {
  const e = r || po;
  return function (t, a) {
    b1(t, "element", function (n, i) {
      const l = Array.isArray(n.properties.className) ? n.properties.className : vo,
        u = l.includes("language-math"),
        c = l.includes("math-display"),
        d = l.includes("math-inline");
      let f = c;
      if (!u && !c && !d) return;
      let g = i[i.length - 1],
        y = n;
      if (
        (n.tagName === "code" &&
          u &&
          g &&
          g.type === "element" &&
          g.tagName === "pre" &&
          ((y = g), (g = i[i.length - 2]), (f = !0)),
        !g)
      )
        return;
      const x = ys(y, { whitespace: "pre" });
      let w;
      try {
        w = an.renderToString(x, { ...e, displayMode: f, throwOnError: !0 });
      } catch (B) {
        const C = B,
          N = C.name.toLowerCase();
        a.message("Could not render math with KaTeX", {
          ancestors: [...i, n],
          cause: C,
          place: n.position,
          ruleId: N,
          source: "rehype-katex",
        });
        try {
          w = an.renderToString(x, { ...e, displayMode: f, strict: "ignore", throwOnError: !1 });
        } catch {
          w = [
            {
              type: "element",
              tagName: "span",
              properties: {
                className: ["katex-error"],
                style: "color:" + (e.errorColor || "#cc0000"),
                title: String(B),
              },
              children: [{ type: "text", value: x }],
            },
          ];
        }
      }
      typeof w == "string" && (w = hs(w).children);
      const T = g.children.indexOf(y);
      return (g.children.splice(T, 1, ...w), y1);
    });
  };
}
const bo = /(^|[^\\])%.*$/gm,
  yo = /\\(?:(?:re)?newcommand|providecommand)\*?/g,
  xo = /\\DeclareMathOperator(\*)?/g,
  nn = /[A-Za-z]/,
  Ai = /^\\(?:[A-Za-z]+|.)$/,
  wo = (r) => r.replace(bo, "$1"),
  So = (r, e) => {
    let t = 0;
    for (let a = e - 1; a >= 0 && r[a] === "\\"; a -= 1) t += 1;
    return t % 2 === 1;
  },
  Xt = (r, e) => {
    let t = e;
    for (; t < r.length && /\s/.test(r[t]);) t += 1;
    return t;
  },
  Vt = (r, e, t, a) => {
    if (r[e] !== t) return null;
    let n = 0;
    for (let i = e; i < r.length; i += 1) {
      const l = r[i];
      if (!So(r, i)) {
        if (l === t) {
          n += 1;
          continue;
        }
        if (l === a && ((n -= 1), n === 0)) return { value: r.slice(e + 1, i), endIndex: i + 1 };
      }
    }
    return null;
  },
  ko = (r, e) => {
    if (r[e] !== "\\" || e + 1 >= r.length) return null;
    let t = e + 1;
    if (nn.test(r[t])) for (; t < r.length && nn.test(r[t]);) t += 1;
    else t += 1;
    const a = r.slice(e, t);
    return Ai.test(a) ? { name: a, endIndex: t } : null;
  },
  Mi = (r, e) => {
    const t = Xt(r, e);
    if (r[t] === "{") {
      const a = Vt(r, t, "{", "}");
      if (!a) return null;
      const n = a.value.trim();
      return Ai.test(n) ? { name: n, endIndex: a.endIndex } : null;
    }
    return ko(r, t);
  },
  sn = (r, e) => {
    const t = Xt(r, e);
    return Vt(r, t, "[", "]");
  },
  To = (r, e) => {
    for (const t of r.matchAll(yo)) {
      const a = Mi(r, t.index + t[0].length);
      if (!a) continue;
      let n = a.endIndex;
      const i = sn(r, n);
      if (i && ((n = i.endIndex), sn(r, n))) continue;
      const l = Xt(r, n),
        u = Vt(r, l, "{", "}");
      u && (e[a.name] = u.value.trim());
    }
  },
  Ao = (r, e) => {
    for (const t of r.matchAll(xo)) {
      const a = t[1] === "*",
        n = Mi(r, t.index + t[0].length);
      if (!n) continue;
      const i = Xt(r, n.endIndex),
        l = Vt(r, i, "{", "}");
      l && (e[n.name] = `\\operatorname${a ? "*" : ""}{${l.value.trim()}}`);
    }
  },
  br = (r) => {
    const e = {},
      t = wo(r);
    return (To(t, e), Ao(t, e), e);
  },
  D4 = (...r) => {
    const e = {};
    for (const t of r) t && Object.assign(e, t);
    return Object.keys(e).length > 0 ? e : void 0;
  },
  I4 = (r) => {
    const e = {};
    return r.map(
      (t) => (
        Object.assign(e, br(t.content)),
        t.quote && Object.assign(e, br(t.quote.text)),
        t.reasoning && Object.assign(e, br(t.reasoning)),
        { ...e }
      ),
    );
  },
  j0 = (r, e) => {
    let t = 0;
    for (let a = e - 1; a >= 0 && r[a] === "\\"; a -= 1) t += 1;
    return t % 2 === 1;
  },
  rt = (r, e) => {
    const t = /\r\n|\n|\r(?!\n)/.exec(r.slice(e));
    return t ? e + t.index + t[0].length : r.length;
  },
  zi = (r, e) =>
    Math.max(
      r.lastIndexOf(
        `
`,
        e - 1,
      ),
      r.lastIndexOf("\r", e - 1),
    ) + 1,
  Bi = (r, e) =>
    r.startsWith(
      `\r
`,
      e,
    )
      ? 2
      : r[e] === "\r" ||
          r[e] ===
            `
`
        ? 1
        : 0,
  ta = (r) => {
    let e = r,
      t = "",
      a = 0;
    for (;;) {
      const n = e.match(/^ {0,3}>[ \t]?/);
      if (!n) return { content: e, depth: a, prefix: t };
      ((t += n[0]), (e = e.slice(n[0].length)), (a += 1));
    }
  },
  $e = (r) => ta(r).content,
  Ge = (r) => {
    let e = 0;
    for (const t of r)
      if (t === " ") e += 1;
      else if (t === "	") e += 4 - (e % 4);
      else break;
    return e;
  },
  Ci = (r) => {
    const t = $e(r).match(/^( *)([-+*]|\d{1,9}[.)])([ \t]+)/);
    return t ? t[1].length + t[2].length + Math.min(Ge(t[3]), 4) : null;
  },
  ra = (r, e, t) => {
    let a = e;
    for (; r[a] === t;) a += 1;
    return a - e;
  },
  Mo = [
    "align",
    "align*",
    "alignat",
    "alignat*",
    "aligned",
    "alignedat",
    "array",
    "Bmatrix",
    "Bmatrix*",
    "bmatrix",
    "bmatrix*",
    "cases",
    "CD",
    "darray",
    "dcases",
    "drcases",
    "equation",
    "equation*",
    "gather",
    "gather*",
    "gathered",
    "matrix",
    "matrix*",
    "pmatrix",
    "pmatrix*",
    "rcases",
    "smallmatrix",
    "split",
    "subarray",
    "vmatrix",
    "vmatrix*",
    "Vmatrix",
    "Vmatrix*",
  ],
  Ei = Mo.map((r) => r.replace("*", "\\*")).join("|"),
  zo = new RegExp(`\\\\(begin|end)\\{(${Ei})\\}`, "g"),
  ln = new RegExp(
    `^((?: {0,3}>[ \\t]?)*(?:[ \\t]*(?:[-+*]|\\d{1,9}[.)])[ \\t]+|[ \\t]*))\\\\begin\\{(${Ei})\\}`,
    "gm",
  ),
  Bo = /(?:\r\n|\n|\r(?!\n))(?: {0,3}>[ \t]?)*[ \t]*(?:\r\n|\n|\r(?!\n))/,
  Di = /^(?:\r\n|\n|\r(?!\n))(?: {0,3}>[ \t]?)*[ \t]*(?:\r\n|\n|\r(?!\n))/,
  aa = (r, e) => (r[e] === "$" ? ra(r, e, "$") : 0),
  Ii = (r, e) => !j0(r, e) && ["\\(", "\\)", "\\[", "\\]"].some((t) => r.startsWith(t, e)),
  Ri = (r, e, t) => {
    const a = t.length;
    let n = e;
    for (; n < r.length;) {
      const i = Bi(r, n);
      if (i > 0) {
        if (t !== "$$" || Di.test(r.slice(n))) return -1;
        n += i;
        continue;
      }
      if (Ii(r, n)) return -1;
      if (r[n] !== "$" || j0(r, n)) {
        n += 1;
        continue;
      }
      return aa(r, n) === a ? n : -1;
    }
    return -1;
  },
  Ni = (r, e, t) => {
    let a = e;
    for (; a < r.length;) {
      const n = Bi(r, a);
      if (n > 0) {
        if (t !== "\\]" || Di.test(r.slice(a))) return -1;
        a += n;
        continue;
      }
      if (r.startsWith(t, a) && !j0(r, a)) return a;
      if (Ii(r, a) || (r[a] === "$" && !j0(r, a))) return -1;
      a += 1;
    }
    return -1;
  },
  qi = (r, e) => {
    if (r[e] === "$" && !j0(r, e)) {
      const t = aa(r, e);
      return t === 1
        ? { opening: "$", closing: "$" }
        : t === 2
          ? { opening: "$$", closing: "$$" }
          : null;
    }
    return r[e] !== "\\" || j0(r, e)
      ? null
      : r.startsWith("\\(", e)
        ? { opening: "\\(", closing: "\\)" }
        : r.startsWith("\\[", e)
          ? { opening: "\\[", closing: "\\]" }
          : null;
  },
  Li = (r) => {
    const e = [];
    let t = 0,
      a = 0;
    for (; t < r.length;) {
      const n = qi(r, t);
      if (!n) {
        if (r[t] === "\\" && !j0(r, t) && (r.startsWith("\\)", t) || r.startsWith("\\]", t)))
          return { segments: [{ kind: "text", value: r }], valid: !1 };
        if (r[t] === "$" && !j0(r, t) && aa(r, t) > 2)
          return { segments: [{ kind: "text", value: r }], valid: !1 };
        t += 1;
        continue;
      }
      const i = t + n.opening.length;
      let l;
      if (
        (n.opening === "$" || n.opening === "$$"
          ? (l = Ri(r, i, n.opening))
          : (l = Ni(r, i, n.opening === "\\(" ? "\\)" : "\\]")),
        l === -1)
      )
        return { segments: [{ kind: "text", value: r }], valid: !1 };
      (a < t && e.push({ kind: "text", value: r.slice(a, t) }),
        e.push({
          kind: "math",
          openingDelimiter: n.opening,
          closingDelimiter: n.closing,
          body: r.slice(i, l),
        }),
        (t = l + n.closing.length),
        (a = t));
    }
    return (
      a < r.length && e.push({ kind: "text", value: r.slice(a) }),
      { segments: e, valid: !0 }
    );
  },
  Co = (r, e) => {
    const t = zi(r, e);
    for (let a = t; a < e; a += 1) if (r[a] === "%" && !j0(r, a)) return !0;
    return !1;
  },
  Eo = (r, e, t, a, { stopAtMarkdownBlock: n = !1 } = {}) => {
    const i = new RegExp(a.source, a.flags),
      l = [e];
    let u = t;
    i.lastIndex = t;
    for (const c of r.matchAll(i)) {
      if (c.index < t || Co(r, c.index)) continue;
      if (n && Bo.test(r.slice(u, c.index))) return null;
      const d = c[1],
        f = c[2];
      if (d === "begin") l.push(f);
      else {
        if (l.at(-1) !== f) return null;
        if ((l.pop(), l.length === 0))
          return { endTokenStart: c.index, end: c.index + c[0].length };
      }
      u = c.index + c[0].length;
    }
    return null;
  },
  Do = (r) => {
    const e = ta(r),
      t = e.content.match(/^([ \t]*)([-+*]|\d{1,9}[.)])([ \t]+)$/);
    if (!t && !/^[ \t]*$/.test(e.content)) return null;
    const a = t ? Ci(e.content) : Ge(e.content);
    return a === null
      ? null
      : {
          blockquoteDepth: e.depth,
          continuationPrefix: `${e.prefix}${" ".repeat(a)}`,
          contentIndent: a,
          openingPrefix: r,
        };
  },
  Io = (r, e, t) => {
    const a = ta(r.openingPrefix),
      n = a.content.match(/^([ \t]*)(?:[-+*]|\d{1,9}[.)])[ \t]+$/),
      i = Ge((n == null ? void 0 : n[1]) ?? a.content),
      l = t.get(e) ?? null;
    return i <= 3 || (l !== null && i >= l && i < l + 4);
  },
  Ro = (r, e) => {
    let t = 0,
      a = 0;
    for (; t < r.length && a < e;) {
      if (r[t] === " ") a += 1;
      else if (r[t] === "	") a += 4 - (a % 4);
      else break;
      t += 1;
    }
    return a >= e ? r.slice(t) : r;
  },
  No = (r, e) => {
    let t = r;
    for (let a = 0; a < e; a += 1) {
      const n = t.match(/^ {0,3}>[ \t]?/);
      if (!n) return r;
      t = t.slice(n[0].length);
    }
    return t;
  },
  R4 = (r, e) =>
    r.split(/\r\n|\n|\r(?!\n)/).map((t, a) => {
      if (a === 0) return t;
      const n = No(t, e.blockquoteDepth);
      return Ro(n, e.contentIndent);
    }).join(`
`),
  Hi = (r, e, t) => {
    const a = new RegExp(ln.source, ln.flags),
      n = [];
    let i = -1;
    for (const l of r.matchAll(a)) {
      const u = Do(l[1]);
      if (
        !u ||
        !Io(u, l.index, t) ||
        l.index < i ||
        e.some((d) => l.index < d.end && d.start < l.index + l[0].length)
      )
        continue;
      const c = Eo(r, l[2], l.index + l[0].length, zo, { stopAtMarkdownBlock: !0 });
      c && (n.push({ start: l.index, end: c.end }), (i = c.end));
    }
    return n;
  },
  qo = (r, e) => {
    const t = [];
    let a = 0;
    for (; a < r.length;) {
      const n = qi(r, a);
      if (
        !n ||
        (n.opening !== "$$" && n.opening !== "\\[") ||
        e.some((c) => a < c.end && c.start < a + n.opening.length)
      ) {
        a += 1;
        continue;
      }
      const i = a + n.opening.length,
        l = n.opening === "$$" ? Ri(r, i, "$$") : Ni(r, i, "\\]");
      if (l === -1) {
        a += n.opening.length;
        continue;
      }
      const u = l + n.closing.length;
      (t.push({ start: a, end: u }), (a = u));
    }
    return t;
  },
  Lo = (r) => {
    const e = r.match(/^[ \t]*(?:>[ \t]*)*(`{3,}|~{3,})/);
    return e ? { character: e[1][0], length: e[1].length } : null;
  },
  Ho = (r, e, t) => {
    const a = r.match(/^[ \t]*(?:>[ \t]*)*(`+|~+)[ \t]*(?:(?:\r\n|\n|\r(?!\n)))?$/);
    return !!(a && a[1][0] === e && a[1].length >= t);
  },
  Oo = (r) => {
    const e = [];
    let t = 0;
    for (; t < r.length;) {
      const a = rt(r, t),
        n = Lo(r.slice(t, a));
      if (!n) {
        t = a;
        continue;
      }
      let i = a,
        l = r.length;
      for (; i < r.length;) {
        const u = rt(r, i);
        if (Ho(r.slice(i, u), n.character, n.length)) {
          l = u;
          break;
        }
        i = u;
      }
      (e.push({ start: t, end: l }), (t = l));
    }
    return e;
  },
  qr = (r) => $e(r).trim().length === 0,
  Fo = (r) => {
    const e = $e(r).trimEnd();
    return (
      /^ {0,3}#{1,6}(?:[ \t]+|$)/.test(e) ||
      /^ {0,3}(?:(?:\*[ \t]*){3,}|(?:_[ \t]*){3,}|(?:-[ \t]*){3,})$/.test(e) ||
      /^ {0,3}=+[ \t]*$/.test(e)
    );
  },
  Po = (r, e, t) => {
    if (t <= e) return null;
    let a = t;
    return (
      r[a - 1] ===
        `
` && (a -= 1),
      r[a - 1] === "\r" && (a -= 1),
      { start: Math.max(e, zi(r, a)), end: t }
    );
  },
  Oi = (r) => {
    const e = new Map();
    let t = null,
      a = 0;
    for (; a < r.length;) {
      const n = rt(r, a),
        i = r.slice(a, n);
      if ((e.set(a, t), !qr(i))) {
        const l = Ci(i);
        l !== null ? (t = l) : Ge($e(i)) === 0 && (t = null);
      }
      a = n;
    }
    return e;
  },
  on = (r, e, t, a) => {
    const n = [];
    let i = e;
    for (; i < t;) {
      const l = Math.min(rt(r, i), t),
        u = r.slice(i, l),
        c = Po(r, e, i),
        d = c === null || qr(r.slice(c.start, c.end)) || Fo(r.slice(c.start, c.end)),
        g = (a.get(i) ?? null ?? 0) + 4;
      if (!d || Ge($e(u)) < g) {
        i = l;
        continue;
      }
      const y = i;
      let x = l;
      for (i = l; i < t;) {
        const w = Math.min(rt(r, i), t),
          T = r.slice(i, w);
        if (Ge($e(T)) < g && !qr(T)) break;
        ((x = w), (i = w));
      }
      n.push({ start: y, end: x });
    }
    return n;
  },
  $o = (r, e, t, a) => {
    let n = e;
    for (; n < a;) {
      const i = r.indexOf("`", n);
      if (i === -1 || i >= a) return -1;
      const l = ra(r, i, "`");
      if (l === t) return i;
      n = i + l;
    }
    return -1;
  },
  Go = (r, e, t) => {
    const a = [];
    let n = e;
    for (; n < t;) {
      const i = r.indexOf("`", n);
      if (i === -1 || i >= t) break;
      if (j0(r, i)) {
        n = i + 1;
        continue;
      }
      const l = ra(r, i, "`"),
        u = $o(r, i + l, l, t);
      if (u === -1) {
        n = i + l;
        continue;
      }
      (a.push({ start: i, end: u + l }), (n = u + l));
    }
    return a;
  },
  Wo = (r, { protectLinkReferenceDefinitions: e = !0 } = {}) => {
    var n;
    const t = [];
    let a = 0;
    for (; a < r.length;) {
      const i = r.indexOf("](", a);
      if (i === -1) break;
      const l = i + 2;
      let u = 1,
        c = l;
      for (; c < r.length;) {
        const d = r[c];
        if (
          d ===
            `
` ||
          d === "\r"
        )
          break;
        if (!j0(r, c)) {
          if (d === "(") u += 1;
          else if (d === ")" && ((u -= 1), u === 0)) {
            (t.push({ start: l, end: c }), (c += 1));
            break;
          }
        }
        c += 1;
      }
      a = Math.max(l, c);
    }
    if (e)
      for (const i of r.matchAll(
        /^(?: {0,3}>[ \t]*)* {0,3}\[[^\]\r\n]+\]:[ \t]*(?:<[^>\r\n]*>|[^\s\r\n]+)[^\r\n]*$/gm,
      )) {
        const l = i[0].indexOf("]:") + 2,
          u = i.index + l,
          c = ((n = i[0].slice(l).match(/^[ \t]*/)) == null ? void 0 : n[0].length) ?? 0;
        t.push({ start: u + c, end: i.index + i[0].length });
      }
    return t;
  },
  jo = (r, { protectStandaloneHtmlTags: e = !0 } = {}) => [
    ...[...r.matchAll(/<(code|pre|script|style|textarea)\b[^>]*>[\s\S]*?<\/\1\s*>/gi)].map((t) => ({
      start: t.index,
      end: t.index + t[0].length,
    })),
    ...[...r.matchAll(/<!--[\s\S]*?(?:-->|$)/g)].map((t) => ({
      start: t.index,
      end: t.index + t[0].length,
    })),
    ...(e
      ? [...r.matchAll(/<\/?[A-Za-z][^>\r\n]*>/g)].map((t) => ({
          start: t.index,
          end: t.index + t[0].length,
        }))
      : []),
  ],
  zt = (r) => {
    const e = [...r].sort((a, n) => a.start - n.start),
      t = [];
    for (const a of e) {
      const n = t.at(-1);
      n && a.start <= n.end ? (n.end = Math.max(n.end, a.end)) : t.push({ ...a });
    }
    return t;
  },
  un = (r, e, t, a = {}) =>
    zt([
      ...Go(r, e, t),
      ...Wo(r.slice(e, t), a).map((n) => ({ start: e + n.start, end: e + n.end })),
      ...jo(r.slice(e, t), a).map((n) => ({ start: e + n.start, end: e + n.end })),
    ]),
  Fi = (r, e = {}) => {
    const t = Oo(r),
      a = Oi(r),
      n = [];
    let i = 0;
    for (const f of t) (n.push(...un(r, i, f.start, e)), (i = f.end));
    n.push(...un(r, i, r.length, e));
    const l = [...t, ...n],
      u = [...Hi(r, l, a), ...qo(r, l)],
      c = [...t];
    i = 0;
    for (const f of t)
      (c.push(
        ...on(r, i, f.start, a).filter((g) => !u.some((y) => y.start <= g.start && g.end <= y.end)),
      ),
        (i = f.end));
    (c.push(
      ...on(r, i, r.length, a).filter((f) => !u.some((g) => g.start <= f.start && f.end <= g.end)),
    ),
      c.sort((f, g) => f.start - g.start));
    const d = [...c, ...n.filter((f) => !c.some((g) => f.start < g.end && g.start < f.end))];
    return zt(d);
  },
  Uo = (r, e) => {
    const t = Fi(r);
    if (t.length === 0) return e(r, { leadingLinePrefix: "" });
    const a = [];
    let n = 0,
      i = "";
    const l = (u) => {
      a.push(u);
      const c = Math.max(
        u.lastIndexOf(`
`),
        u.lastIndexOf("\r"),
      );
      i = c === -1 ? `${i}${u}` : u.slice(c + 1);
    };
    for (const u of t)
      (l(e(r.slice(n, u.start), { leadingLinePrefix: i })),
        l(r.slice(u.start, u.end)),
        (n = u.end));
    return (l(e(r.slice(n), { leadingLinePrefix: i })), a.join(""));
  },
  Xo = (r, e) =>
    Uo(r, (t) => {
      const a = Li(t);
      return a.valid
        ? a.segments
            .map((n) =>
              n.kind !== "math" || (n.openingDelimiter !== "$" && n.openingDelimiter !== "$$")
                ? n.kind === "text"
                  ? n.value
                  : `${n.openingDelimiter}${n.body}${n.closingDelimiter}`
                : `${n.openingDelimiter}${e(n.body, n.openingDelimiter)}${n.closingDelimiter}`,
            )
            .join("")
        : t;
    }),
  Vo = (r, e) => {
    const t = [];
    let a = 0;
    const n = (i, l) => {
      if (i === l) return;
      const u = Li(r.slice(i, l));
      if (!u.valid) {
        t.push({ start: i, end: l });
        return;
      }
      let c = i;
      for (const d of u.segments) {
        if (d.kind === "text") {
          c += d.value.length;
          continue;
        }
        const f = d.openingDelimiter.length + d.body.length + d.closingDelimiter.length;
        (t.push({ start: c, end: c + f }), (c += f));
      }
    };
    for (const i of e) (n(a, i.start), (a = i.end));
    return (n(a, r.length), t);
  },
  Yo = (r, e = {}) => {
    const t = Fi(r, e),
      a = Vo(r, t),
      n = Hi(r, [...t, ...a], Oi(r)),
      i = zt([...a, ...n]);
    return { mathRanges: i, protectedRanges: zt([...t, ...i]) };
  },
  N4 = (r, e, t = {}) => {
    const { protectedRanges: a } = Yo(r, t);
    if (a.length === 0) return e(r);
    let n = "";
    for (; r.includes(n);) n += "";
    let i = "";
    for (; r.includes(i) || i === n;) i += "";
    const l = [],
      u = [];
    let c = 0;
    for (const f of a) {
      u.push(r.slice(c, f.start));
      const g = `${n}${l.length}${i}`;
      (l.push(r.slice(f.start, f.end)), u.push(g), (c = f.end));
    }
    u.push(r.slice(c));
    let d = e(u.join(""));
    if (
      (l.forEach((f, g) => {
        d = d.replaceAll(`${n}${g}${i}`, () => f);
      }),
      d.includes(n) || d.includes(i))
    )
      throw new Error("Markdown prose transformation corrupted a protected marker.");
    return d;
  },
  Ko = "application/x-tex",
  Zo = "katex-error",
  cn = "\\htmlData",
  Jo = "highlight-id=",
  Qo = /[\p{L}\p{N}_]/u,
  gt = /[A-Za-z]/,
  _o = /\\[A-Za-z]+/,
  e4 = {
    "\\alpha": "α",
    "\\beta": "β",
    "\\gamma": "γ",
    "\\delta": "δ",
    "\\epsilon": "ϵ",
    "\\varepsilon": "ε",
    "\\zeta": "ζ",
    "\\eta": "η",
    "\\theta": "θ",
    "\\vartheta": "ϑ",
    "\\iota": "ι",
    "\\kappa": "κ",
    "\\lambda": "λ",
    "\\mu": "μ",
    "\\nu": "ν",
    "\\xi": "ξ",
    "\\pi": "π",
    "\\varpi": "ϖ",
    "\\rho": "ρ",
    "\\varrho": "ϱ",
    "\\sigma": "σ",
    "\\varsigma": "ς",
    "\\tau": "τ",
    "\\upsilon": "υ",
    "\\phi": "ϕ",
    "\\varphi": "φ",
    "\\chi": "χ",
    "\\psi": "ψ",
    "\\omega": "ω",
    "\\Gamma": "Γ",
    "\\Delta": "Δ",
    "\\Theta": "Θ",
    "\\Lambda": "Λ",
    "\\Xi": "Ξ",
    "\\Pi": "Π",
    "\\Sigma": "Σ",
    "\\Upsilon": "Υ",
    "\\Phi": "Φ",
    "\\Psi": "Ψ",
    "\\Omega": "Ω",
  },
  t4 = [
    (r) => ({
      display: "inline-block",
      position: "relative",
      zIndex: 1,
      borderRadius: r.shape.borderRadiusPx,
      backgroundColor: G0(r.palette.warning.main, 0.08),
      boxShadow: `inset 0 -0.09em 0 ${G0(r.palette.warning.main, 0.48)}`,
      color: "inherit",
      cursor: "help",
      outline: "none",
      transition: r.transitions.create(["background-color", "box-shadow"], {
        duration: r.transitions.duration.shortest,
      }),
      "&:hover, &:focus-visible": {
        backgroundColor: G0(r.palette.warning.main, 0.3),
        boxShadow: `inset 0 0 0 1px ${G0(r.palette.warning.main, 0.62)}`,
      },
    }),
    (r) =>
      r.applyStyles("dark", {
        backgroundColor: G0(r.palette.warning.main, 0.2),
        boxShadow: `inset 0 0 0 1px ${G0(r.palette.warning.main, 0.58)}, 0 0 10px ${G0(r.palette.warning.main, 0.16)}`,
        color: r.palette.warning.main,
        textShadow: `0 0 8px ${G0(r.palette.warning.main, 0.34)}`,
        "&:hover, &:focus-visible": {
          backgroundColor: G0(r.palette.warning.main, 0.34),
          boxShadow: `inset 0 0 0 1px ${G0(r.palette.warning.main, 0.9)}, 0 0 14px ${G0(r.palette.warning.main, 0.28)}`,
        },
      }),
  ],
  r4 = (r, e) => r.trim().replace(/[^A-Za-z0-9_-]+/g, "-") || `highlight-${e}`,
  de = (r) => !!(r && Qo.test(r)),
  hn = (r, e) => {
    let t = 0;
    for (let a = e - 1; a >= 0 && r[a] === "\\"; a -= 1) t += 1;
    return t % 2 === 1;
  },
  Lr = (r, e) => {
    if (r[e] !== "{") return null;
    let t = 0;
    for (let a = e; a < r.length; a += 1) {
      if (r[a] === "{" && !hn(r, a)) {
        t += 1;
        continue;
      }
      if (r[a] === "}" && !hn(r, a) && ((t -= 1), t === 0))
        return { content: r.slice(e + 1, a), endIndex: a + 1 };
    }
    return null;
  },
  mn = (r, e) => {
    if (!r.startsWith(cn, e)) return null;
    const t = Lr(r, e + cn.length);
    if (!(t != null && t.content.startsWith(Jo))) return null;
    const a = Lr(r, t.endIndex);
    return a ? { content: xt(a.content), endIndex: a.endIndex } : null;
  },
  xt = (r) => {
    let e = "",
      t = 0;
    for (; t < r.length;) {
      const a = mn(r, t);
      if (a) {
        ((e += a.content), (t = a.endIndex));
        continue;
      }
      const n = Lr(r, t);
      if (n) {
        const i = mn(n.content, 0);
        if ((i == null ? void 0 : i.endIndex) === n.content.length) {
          ((e += i.content), (t = n.endIndex));
          continue;
        }
      }
      ((e += r[t]), (t += 1));
    }
    return e;
  },
  na = (r) => {
    const e = r.trim();
    return e.startsWith("$$") && e.endsWith("$$")
      ? e.slice(2, -2).trim()
      : e.startsWith("$") && e.endsWith("$")
        ? e.slice(1, -1).trim()
        : (e.startsWith("\\(") && e.endsWith("\\)")) || (e.startsWith("\\[") && e.endsWith("\\]"))
          ? e.slice(2, -2).trim()
          : e;
  },
  Pi = (r) => r.replace(/\\(?:left|right)/g, "").trim(),
  _e = (r, e) => {
    const t = e.trim();
    !t || t === "$" || r.add(t);
  },
  a4 = (r) => {
    const e = Pi(na(r)),
      t = new Set(),
      a = [
        e,
        e.replace(/([_^])([A-Za-z0-9])/g, "$1{$2}"),
        e.replace(/([_^])\{([A-Za-z0-9])\}/g, "$1$2"),
      ];
    for (const n of a) (_e(t, n), _e(t, n.replace(/\s+/g, "")));
    return [...t];
  },
  n4 = (r) => {
    let e = Pi(na(r))
      .replace(/\\(?:mathbb|mathcal|mathrm|mathbf|mathfrak|mathsf|operatorname)\{([^{}]+)\}/g, "$1")
      .replace(/\\[A-Za-z]+/g, (t) => e4[t] ?? t);
    return _o.test(e)
      ? null
      : ((e = e.replace(/[{}]/g, "").replace(/\s+/g, " ").trim()), e || null);
  },
  i4 = (r) => {
    const e = new Set(),
      t = na(r),
      a = t !== r.trim(),
      n = n4(t);
    return (
      n && (!a || Array.from(n).length > 1) && (_e(e, n), _e(e, n.replace(/\s+/g, ""))),
      !t.includes("\\") && t === r.trim() && _e(e, t),
      [...e]
    );
  },
  dn = (r) => [...r].sort((e, t) => t.term.length - e.term.length || e.term.localeCompare(t.term)),
  q4 = (r) => {
    const e = new Set(),
      t = new Map(),
      a = [],
      n = [];
    return (
      r.forEach((i, l) => {
        const u = i.text.trim(),
          c = i.tooltip.trim();
        if (!u || !c) return;
        let d = r4(i.id, l);
        e.has(d) && (d = `${d}-${l}`);
        const f = { ...i, id: d, text: u, tooltip: c };
        (e.add(d), t.set(d, f));
        for (const g of a4(u)) a.push({ id: d, term: g });
        for (const g of i4(u)) n.push({ id: d, term: g });
      }),
      { allowedHighlightIds: e, highlightsById: t, latexTerms: dn(a), textTerms: dn(n) }
    );
  },
  s4 = (r, e, t) => {
    const a = r[e - 1],
      n = r[e + t.length],
      i = t[0],
      l = t[t.length - 1];
    return !((de(i) && de(a)) || (de(l) && de(n)));
  },
  l4 = (r, e, t) => {
    const a = r[e - 1],
      n = r[e + t.length],
      i = t.length === 1 && gt.test(t);
    return t.startsWith("\\")
      ? !gt.test(n ?? "")
      : a === "\\"
        ? !1
        : i
          ? !gt.test(a ?? "") && !gt.test(n ?? "")
          : !((de(t[0]) && de(a)) || (de(t[t.length - 1]) && de(n)));
  },
  $i = (r, e, t, a) => t.find(({ term: n }) => r.startsWith(n, e) && a(r, e, n)),
  o4 = (r, e) => `{\\htmlData{highlight-id=${r}}{${e}}}`,
  u4 = (r, e) => {
    if (e.length === 0) return r;
    let t = "",
      a = 0;
    for (; a < r.length;) {
      const n = $i(r, a, e, l4);
      if (!n) {
        ((t += r[a]), (a += 1));
        continue;
      }
      ((t += o4(n.id, n.term)), (a += n.term.length));
    }
    return t;
  },
  L4 = (r, e) => (e.length === 0 ? r : Xo(r, (t) => u4(t, e))),
  Gi = (r) => {
    var t;
    const e = (t = r.properties) == null ? void 0 : t.className;
    return Array.isArray(e) ? e.map(String) : typeof e == "string" ? e.split(/\s+/) : [];
  },
  c4 = (r) => {
    var a, n;
    const e = (a = r.properties) == null ? void 0 : a.dataHighlightId,
      t = (n = r.properties) == null ? void 0 : n["data-highlight-id"];
    return typeof e == "string" ? e : typeof t == "string" ? t : null;
  },
  h4 = (r) => {
    const e = r.tagName.toLowerCase(),
      t = Gi(r);
    return (
      !!c4(r) ||
      e === "a" ||
      e === "annotation" ||
      e === "code" ||
      e === "math" ||
      e === "pre" ||
      e === "script" ||
      e === "style" ||
      e === "textarea" ||
      t.includes("katex-mathml")
    );
  },
  m4 = (r, e) => ({
    type: "element",
    tagName: "span",
    properties: { dataHighlightId: r },
    children: [{ type: "text", value: e }],
  }),
  d4 = (r, e) => {
    const t = [],
      a = r.value;
    let n = 0,
      i = 0;
    for (; n < a.length;) {
      const l = $i(a, n, e, s4);
      if (!l) {
        n += 1;
        continue;
      }
      (i < n && t.push({ type: "text", value: a.slice(i, n) }),
        t.push(m4(l.id, a.slice(n, n + l.term.length))),
        (n += l.term.length),
        (i = n));
    }
    return (
      i < a.length && t.push({ type: "text", value: a.slice(i) }),
      t.length === 1 && t[0].type === "text" ? [r] : t
    );
  },
  f4 = (r) => () => (e) => {
    const t = (a) => {
      for (let n = 0; n < a.length; n += 1) {
        const i = a[n];
        if (i.type === "text") {
          const l = d4(i, r);
          (a.splice(n, 1, ...l), (n += l.length - 1));
          continue;
        }
        i.type === "element" && !h4(i) && t(i.children);
      }
    };
    t(e.children);
  },
  Hr = (r) =>
    r.children
      .map((e) => (e.type === "text" ? e.value : e.type === "element" ? Hr(e) : ""))
      .join(""),
  p4 = (r) => {
    var e;
    return (
      r.tagName.toLowerCase() === "annotation" &&
      ((e = r.properties) == null ? void 0 : e.encoding) === Ko
    );
  },
  v4 = (r) => Gi(r).includes(Zo),
  g4 = () => (r) => {
    const e = (t) => {
      var a;
      for (const n of t)
        if (n.type === "element") {
          if (p4(n)) {
            n.children = [{ type: "text", value: xt(Hr(n)) }];
            continue;
          }
          if (v4(n)) {
            const i = xt(Hr(n)),
              l = (a = n.properties) == null ? void 0 : a.title;
            ((n.children = [{ type: "text", value: i }]),
              typeof l == "string" && (n.properties.title = xt(l)));
            continue;
          }
          e(n.children);
        }
    };
    e(r.children);
  },
  b4 = (r, e) => ({
    ...e,
    strict: (t, a, n) =>
      t === "htmlExtension"
        ? "ignore"
        : typeof e.strict == "function"
          ? e.strict(t, a, n)
          : e.strict,
    trust: (t) => {
      if (t.command !== "\\htmlData")
        return typeof e.trust == "function" ? e.trust(t) : e.trust === !0;
      const a = t.attributes,
        n = a["data-highlight-id"];
      return Object.keys(a).length === 1 && typeof n == "string" && r.has(n);
    },
  }),
  H4 = (r, e, t = {}) =>
    r.allowedHighlightIds.size === 0
      ? e
      : [[go, b4(r.allowedHighlightIds, t)], g4, f4(r.textTerms)],
  y4 = (r) =>
    typeof r.dataHighlightId == "string"
      ? r.dataHighlightId
      : typeof r["data-highlight-id"] == "string"
        ? r["data-highlight-id"]
        : null,
  O4 = (r, e, t, a) => {
    const n = e == null ? void 0 : e.span;
    return {
      ...r,
      ...e,
      span: ({ node: l, children: u, ...c }) => {
        const d = c,
          f = y4(d),
          g = f ? t.get(f) : null;
        if (!g) return n ? Y.createElement(n, { node: l, ...c }, u) : Y.createElement("span", c, u);
        const { dataHighlightId: y, "data-highlight-id": x, ...w } = d,
          T = [g.tooltip, g.note].filter(Boolean).join(" ");
        return l0.jsx(m1, {
          arrow: !0,
          enterDelay: 120,
          title: a(g),
          children: l0.jsx(d1, {
            component: "span",
            ...w,
            "aria-label": `${g.text}: ${T}`,
            tabIndex: 0,
            sx: t4,
            children: u,
          }),
        });
      },
    };
  };
export {
  ln as B,
  z4 as C,
  B4 as F,
  C4 as M,
  E4 as P,
  A4 as T,
  T4 as a,
  M4 as b,
  I4 as c,
  pa as d,
  br as e,
  Uo as f,
  Yo as g,
  Eo as h,
  Bi as i,
  Do as j,
  zo as k,
  R4 as l,
  D4 as m,
  go as n,
  q4 as o,
  L4 as p,
  H4 as q,
  Xo as r,
  Li as s,
  N4 as t,
  O4 as u,
  xt as v,
  an as w,
};
