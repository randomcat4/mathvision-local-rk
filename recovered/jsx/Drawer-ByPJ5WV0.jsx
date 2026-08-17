import { r as m, aw as U, aJ as q, aK as G, j as k, aL as J, aM as b, aN as W, aO as Z, ab as _, am as tt, F as et, aP as rt, G as F, H as X, a8 as ot, I as nt, K as V, a3 as O, Q as st, aQ as at } from "./index-BM3ZINIl.js";
import { d as it, o as A, m as lt, M as pt } from "./TextField-D8vc_sXz.js";
const ct = {
  visibility: "hidden"
};
function dt(e, t, a) {
  const o = a && a.getBoundingClientRect();
  const p = A(t);
  const D = t.style.transform;
  const E = t.style.transition;
  t.style.transition = "";
  t.style.transform = "";
  const s = t.getBoundingClientRect();
  const l = p.getComputedStyle(t).getPropertyValue("transform");
  t.style.transform = D;
  t.style.transition = E;
  let n = 0;
  let h = 0;
  if (l && l !== "none" && typeof l == "string") {
    const c = l.split("(")[1].split(")")[0].split(",");
    n = parseInt(c[4], 10);
    h = parseInt(c[5], 10);
  }
  if (e === "left") {
    if (o) {
      return `translateX(${o.right + n - s.left}px)`;
    } else {
      return `translateX(${p.innerWidth + n - s.left}px)`;
    }
  } else if (e === "right") {
    if (o) {
      return `translateX(-${s.right - o.left - n}px)`;
    } else {
      return `translateX(-${s.left + s.width - n}px)`;
    }
  } else if (e === "up") {
    if (o) {
      return `translateY(${o.bottom + h - s.top}px)`;
    } else {
      return `translateY(${p.innerHeight + h - s.top}px)`;
    }
  } else if (o) {
    return `translateY(-${s.top - o.top + s.height - h}px)`;
  } else {
    return `translateY(-${s.top + s.height - h}px)`;
  }
}
function ut(e) {
  if (typeof e == "function") {
    return e();
  } else {
    return e;
  }
}
function I(e, t, a) {
  const o = ut(a);
  const p = dt(e, t, o);
  if (p) {
    t.style.transform = p;
  }
}
const ft = m.forwardRef(function (t, a) {
  const o = U();
  const p = {
    enter: o.transitions.easing.easeOut,
    exit: o.transitions.easing.sharp
  };
  const D = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  };
  const {
    addEndListener: E,
    appear: s = true,
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
  } = t;
  const i = m.useRef(null);
  const x = q(G(f), i, a);
  const v = b(i, (r, u) => {
    I(n, r, l);
    Z(r);
    if ($) {
      $(r, u);
    }
  });
  const y = b(i, (r, u) => {
    const R = W({
      timeout: P,
      style: d,
      easing: h
    }, {
      mode: "enter"
    });
    r.style.transition = o.transitions.create("transform", R);
    r.style.transform = "none";
    if (T) {
      T(r, u);
    }
  });
  const Y = b(i, S);
  const B = b(i, M);
  const H = b(i, r => {
    const u = W({
      timeout: P,
      style: d,
      easing: h
    }, {
      mode: "exit"
    });
    r.style.transition = o.transitions.create("transform", u);
    I(n, r, l);
    if (g) {
      g(r);
    }
  });
  const N = b(i, r => {
    r.style.transition = "";
    if (z) {
      z(r);
    }
  });
  const j = r => {
    if (E) {
      E(i.current, r);
    }
  };
  const C = m.useCallback(() => {
    if (i.current) {
      I(n, i.current, l);
    }
  }, [n, l]);
  m.useEffect(() => {
    if (c || n === "down" || n === "right") {
      return;
    }
    const r = it(() => {
      if (i.current) {
        I(n, i.current, l);
      }
    });
    const u = A(i.current);
    u.addEventListener("resize", r);
    return () => {
      r.clear();
      u.removeEventListener("resize", r);
    };
  }, [n, c, l]);
  m.useEffect(() => {
    if (!c) {
      C();
    }
  }, [c, C]);
  return <J nodeRef={i} onEnter={v} onEntered={Y} onEntering={y} onExit={H} onExited={N} onExiting={B} addEndListener={j} appear={s} in={c} timeout={P} {...L}>{(r, {
      ownerState: u,
      ...R
    }) => {
      let w;
      if (r === "exited" && !c) {
        w = d || f.props.style ? {
          visibility: "hidden",
          ...d,
          ...f.props.style
        } : ct;
      } else if (d && f.props.style) {
        w = {
          ...d,
          ...f.props.style
        };
      } else {
        w = d || f.props.style;
      }
      return m.cloneElement(f, {
        ref: x,
        style: w,
        ...R
      });
    }}</J>;
});
function ht(e) {
  return _("MuiDrawer", e);
}
tt("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "modal"]);
const K = (e, t) => {
  const {
    ownerState: a
  } = e;
  return [t.root, (a.variant === "permanent" || a.variant === "persistent") && t.docked, a.variant === "temporary" && t.modal];
};
const mt = e => {
  const {
    classes: t,
    anchor: a,
    variant: o
  } = e;
  const p = {
    root: ["root", `anchor${ot(a)}`],
    docked: [(o === "permanent" || o === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper"]
  };
  return nt(p, ht, t);
};
const gt = V(pt, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: K
})(O(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
})));
const yt = V("div", {
  shouldForwardProp: at,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: false,
  overridesResolver: K
})({
  flex: "0 0 auto"
});
const xt = V(st, {
  name: "MuiDrawer",
  slot: "Paper"
})(O(({
  theme: e
}) => ({
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
  variants: [{
    props: {
      anchor: "left"
    },
    style: {
      left: 0
    }
  }, {
    props: {
      anchor: "top"
    },
    style: {
      top: 0,
      left: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: {
      anchor: "right"
    },
    style: {
      right: 0
    }
  }, {
    props: {
      anchor: "bottom"
    },
    style: {
      top: "auto",
      left: 0,
      bottom: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "left" && t.variant !== "temporary",
    style: {
      borderRight: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "top" && t.variant !== "temporary",
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "right" && t.variant !== "temporary",
    style: {
      borderLeft: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "bottom" && t.variant !== "temporary",
    style: {
      borderTop: `1px solid ${(e.vars || e).palette.divider}`
    }
  }]
})));
const Q = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function vt(e) {
  return ["left", "right"].includes(e);
}
function wt({
  direction: e
}, t) {
  if (e === "rtl" && vt(t)) {
    return Q[t];
  } else {
    return t;
  }
}
const Rt = m.forwardRef(function (t, a) {
  const o = et({
    props: t,
    name: "MuiDrawer"
  });
  const p = U();
  const D = rt();
  const E = {
    enter: p.transitions.duration.enteringScreen,
    exit: p.transitions.duration.leavingScreen
  };
  const {
    anchor: s = "left",
    children: f,
    className: l,
    elevation: n = 16,
    hideBackdrop: h = false,
    ModalProps: c = {},
    onClose: $,
    open: S = false,
    transitionDuration: T = E,
    variant: g = "temporary",
    slots: z = {},
    slotProps: M = {},
    ...d
  } = o;
  const P = m.useRef(false);
  m.useEffect(() => {
    P.current = true;
  }, []);
  const L = wt({
    direction: D ? "rtl" : "ltr"
  }, s);
  const x = {
    ...o,
    anchor: s,
    elevation: n,
    open: S,
    variant: g,
    ...d
  };
  const v = mt(x);
  const y = {
    slots: z,
    slotProps: {
      ...M,
      backdrop: lt(M.backdrop, {
        transitionDuration: T
      })
    }
  };
  const [Y, B] = F("root", {
    ref: a,
    elementType: gt,
    className: X(v.root, v.modal, l),
    shouldForwardComponentProp: true,
    ownerState: x,
    externalForwardedProps: {
      ...y,
      ...d,
      ...c
    },
    additionalProps: {
      open: S,
      onClose: $,
      hideBackdrop: h,
      slots: {
        backdrop: y.slots.backdrop
      },
      slotProps: {
        backdrop: y.slotProps.backdrop
      }
    }
  });
  const [H, N] = F("paper", {
    elementType: xt,
    shouldForwardComponentProp: true,
    className: v.paper,
    ownerState: x,
    externalForwardedProps: y,
    additionalProps: {
      elevation: g === "temporary" ? n : 0,
      square: true,
      ...(g === "temporary" && {
        role: "dialog",
        "aria-modal": "true"
      })
    }
  });
  const [_Component, C] = F("docked", {
    elementType: yt,
    ref: a,
    className: X(v.root, v.docked, l),
    ownerState: x,
    externalForwardedProps: y,
    additionalProps: d
  });
  const [_Component2, u] = F("transition", {
    elementType: ft,
    ownerState: x,
    externalForwardedProps: y,
    additionalProps: {
      in: S,
      direction: Q[L],
      timeout: T,
      appear: P.current
    }
  });
  const R = <H {...N}>{f}</H>;
  if (g === "permanent") {
    return <_Component {...C}>{R}</_Component>;
  }
  const w = <_Component2 {...u}>{R}</_Component2>;
  if (g === "persistent") {
    return <_Component {...C}>{w}</_Component>;
  } else {
    return <Y {...B}>{w}</Y>;
  }
});
export { Rt as D };
