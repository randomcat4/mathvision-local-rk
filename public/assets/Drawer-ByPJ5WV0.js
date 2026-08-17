import {
  r as m,
  aw as U,
  aJ as q,
  aK as G,
  j as k,
  aL as J,
  aM as b,
  aN as W,
  aO as Z,
  ab as _,
  am as tt,
  F as et,
  aP as rt,
  G as F,
  H as X,
  a8 as ot,
  I as nt,
  K as V,
  a3 as O,
  Q as st,
  aQ as at,
} from "./index-BM3ZINIl.js";
import { d as it, o as A, m as lt, M as pt } from "./TextField-D8vc_sXz.js";
const ct = { visibility: "hidden" };
function dt(e, t, a) {
  const o = a && a.getBoundingClientRect(),
    p = A(t),
    D = t.style.transform,
    E = t.style.transition;
  ((t.style.transition = ""), (t.style.transform = ""));
  const s = t.getBoundingClientRect(),
    l = p.getComputedStyle(t).getPropertyValue("transform");
  ((t.style.transform = D), (t.style.transition = E));
  let n = 0,
    h = 0;
  if (l && l !== "none" && typeof l == "string") {
    const c = l.split("(")[1].split(")")[0].split(",");
    ((n = parseInt(c[4], 10)), (h = parseInt(c[5], 10)));
  }
  return e === "left"
    ? o
      ? `translateX(${o.right + n - s.left}px)`
      : `translateX(${p.innerWidth + n - s.left}px)`
    : e === "right"
      ? o
        ? `translateX(-${s.right - o.left - n}px)`
        : `translateX(-${s.left + s.width - n}px)`
      : e === "up"
        ? o
          ? `translateY(${o.bottom + h - s.top}px)`
          : `translateY(${p.innerHeight + h - s.top}px)`
        : o
          ? `translateY(-${s.top - o.top + s.height - h}px)`
          : `translateY(-${s.top + s.height - h}px)`;
}
function ut(e) {
  return typeof e == "function" ? e() : e;
}
function I(e, t, a) {
  const o = ut(a),
    p = dt(e, t, o);
  p && (t.style.transform = p);
}
const ft = m.forwardRef(function (t, a) {
  const o = U(),
    p = { enter: o.transitions.easing.easeOut, exit: o.transitions.easing.sharp },
    D = {
      enter: o.transitions.duration.enteringScreen,
      exit: o.transitions.duration.leavingScreen,
    },
    {
      addEndListener: E,
      appear: s = !0,
      children: f,
      container: l,
      direction: n = "down",
      easing: h = p,
      in: c,
      onEnter: $,
      onEntered: S,
      onEntering: T,
      onExit: g,
      onExited: z,
      onExiting: M,
      style: d,
      timeout: P = D,
      ...L
    } = t,
    i = m.useRef(null),
    x = q(G(f), i, a),
    v = b(i, (r, u) => {
      (I(n, r, l), Z(r), $ && $(r, u));
    }),
    y = b(i, (r, u) => {
      const R = W({ timeout: P, style: d, easing: h }, { mode: "enter" });
      ((r.style.transition = o.transitions.create("transform", R)),
        (r.style.transform = "none"),
        T && T(r, u));
    }),
    Y = b(i, S),
    B = b(i, M),
    H = b(i, (r) => {
      const u = W({ timeout: P, style: d, easing: h }, { mode: "exit" });
      ((r.style.transition = o.transitions.create("transform", u)), I(n, r, l), g && g(r));
    }),
    N = b(i, (r) => {
      ((r.style.transition = ""), z && z(r));
    }),
    j = (r) => {
      E && E(i.current, r);
    },
    C = m.useCallback(() => {
      i.current && I(n, i.current, l);
    }, [n, l]);
  return (
    m.useEffect(() => {
      if (c || n === "down" || n === "right") return;
      const r = it(() => {
          i.current && I(n, i.current, l);
        }),
        u = A(i.current);
      return (
        u.addEventListener("resize", r),
        () => {
          (r.clear(), u.removeEventListener("resize", r));
        }
      );
    }, [n, c, l]),
    m.useEffect(() => {
      c || C();
    }, [c, C]),
    k.jsx(J, {
      nodeRef: i,
      onEnter: v,
      onEntered: Y,
      onEntering: y,
      onExit: H,
      onExited: N,
      onExiting: B,
      addEndListener: j,
      appear: s,
      in: c,
      timeout: P,
      ...L,
      children: (r, { ownerState: u, ...R }) => {
        let w;
        return (
          r === "exited" && !c
            ? (w = d || f.props.style ? { visibility: "hidden", ...d, ...f.props.style } : ct)
            : d && f.props.style
              ? (w = { ...d, ...f.props.style })
              : (w = d || f.props.style),
          m.cloneElement(f, { ref: x, style: w, ...R })
        );
      },
    })
  );
});
function ht(e) {
  return _("MuiDrawer", e);
}
tt("MuiDrawer", [
  "root",
  "docked",
  "paper",
  "anchorLeft",
  "anchorRight",
  "anchorTop",
  "anchorBottom",
  "modal",
]);
const K = (e, t) => {
    const { ownerState: a } = e;
    return [
      t.root,
      (a.variant === "permanent" || a.variant === "persistent") && t.docked,
      a.variant === "temporary" && t.modal,
    ];
  },
  mt = (e) => {
    const { classes: t, anchor: a, variant: o } = e,
      p = {
        root: ["root", `anchor${ot(a)}`],
        docked: [(o === "permanent" || o === "persistent") && "docked"],
        modal: ["modal"],
        paper: ["paper"],
      };
    return nt(p, ht, t);
  },
  gt = V(pt, { name: "MuiDrawer", slot: "Root", overridesResolver: K })(
    O(({ theme: e }) => ({ zIndex: (e.vars || e).zIndex.drawer })),
  ),
  yt = V("div", {
    shouldForwardProp: at,
    name: "MuiDrawer",
    slot: "Docked",
    skipVariantsResolver: !1,
    overridesResolver: K,
  })({ flex: "0 0 auto" }),
  xt = V(st, { name: "MuiDrawer", slot: "Paper" })(
    O(({ theme: e }) => ({
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      flex: "1 0 auto",
      zIndex: (e.vars || e).zIndex.drawer,
      WebkitOverflowScrolling: "touch",
      position: "fixed",
      top: 0,
      outline: 0,
      variants: [
        { props: { anchor: "left" }, style: { left: 0 } },
        {
          props: { anchor: "top" },
          style: { top: 0, left: 0, right: 0, height: "auto", maxHeight: "100%" },
        },
        { props: { anchor: "right" }, style: { right: 0 } },
        {
          props: { anchor: "bottom" },
          style: { top: "auto", left: 0, bottom: 0, right: 0, height: "auto", maxHeight: "100%" },
        },
        {
          props: ({ ownerState: t }) => t.anchor === "left" && t.variant !== "temporary",
          style: { borderRight: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: ({ ownerState: t }) => t.anchor === "top" && t.variant !== "temporary",
          style: { borderBottom: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: ({ ownerState: t }) => t.anchor === "right" && t.variant !== "temporary",
          style: { borderLeft: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: ({ ownerState: t }) => t.anchor === "bottom" && t.variant !== "temporary",
          style: { borderTop: `1px solid ${(e.vars || e).palette.divider}` },
        },
      ],
    })),
  ),
  Q = { left: "right", right: "left", top: "down", bottom: "up" };
function vt(e) {
  return ["left", "right"].includes(e);
}
function wt({ direction: e }, t) {
  return e === "rtl" && vt(t) ? Q[t] : t;
}
const Rt = m.forwardRef(function (t, a) {
  const o = et({ props: t, name: "MuiDrawer" }),
    p = U(),
    D = rt(),
    E = {
      enter: p.transitions.duration.enteringScreen,
      exit: p.transitions.duration.leavingScreen,
    },
    {
      anchor: s = "left",
      children: f,
      className: l,
      elevation: n = 16,
      hideBackdrop: h = !1,
      ModalProps: c = {},
      onClose: $,
      open: S = !1,
      transitionDuration: T = E,
      variant: g = "temporary",
      slots: z = {},
      slotProps: M = {},
      ...d
    } = o,
    P = m.useRef(!1);
  m.useEffect(() => {
    P.current = !0;
  }, []);
  const L = wt({ direction: D ? "rtl" : "ltr" }, s),
    x = { ...o, anchor: s, elevation: n, open: S, variant: g, ...d },
    v = mt(x),
    y = { slots: z, slotProps: { ...M, backdrop: lt(M.backdrop, { transitionDuration: T }) } },
    [Y, B] = F("root", {
      ref: a,
      elementType: gt,
      className: X(v.root, v.modal, l),
      shouldForwardComponentProp: !0,
      ownerState: x,
      externalForwardedProps: { ...y, ...d, ...c },
      additionalProps: {
        open: S,
        onClose: $,
        hideBackdrop: h,
        slots: { backdrop: y.slots.backdrop },
        slotProps: { backdrop: y.slotProps.backdrop },
      },
    }),
    [H, N] = F("paper", {
      elementType: xt,
      shouldForwardComponentProp: !0,
      className: v.paper,
      ownerState: x,
      externalForwardedProps: y,
      additionalProps: {
        elevation: g === "temporary" ? n : 0,
        square: !0,
        ...(g === "temporary" && { role: "dialog", "aria-modal": "true" }),
      },
    }),
    [j, C] = F("docked", {
      elementType: yt,
      ref: a,
      className: X(v.root, v.docked, l),
      ownerState: x,
      externalForwardedProps: y,
      additionalProps: d,
    }),
    [r, u] = F("transition", {
      elementType: ft,
      ownerState: x,
      externalForwardedProps: y,
      additionalProps: { in: S, direction: Q[L], timeout: T, appear: P.current },
    }),
    R = k.jsx(H, { ...N, children: f });
  if (g === "permanent") return k.jsx(j, { ...C, children: R });
  const w = k.jsx(r, { ...u, children: R });
  return g === "persistent" ? k.jsx(j, { ...C, children: w }) : k.jsx(Y, { ...B, children: w });
});
export { Rt as D };
