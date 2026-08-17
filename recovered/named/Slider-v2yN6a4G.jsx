import {
  r as m,
  a_ as he,
  aY as Je,
  b6 as ne,
  aJ as Qe,
  aH as Ze,
  b7 as je,
  a$ as se,
  b8 as De,
  b9 as Ke,
  ab as He,
  am as et,
  j as I,
  H as ve,
  F as tt,
  aP as rt,
  G as Y,
  ba as Oe,
  a8 as Pe,
  I as at,
  K as Q,
  a3 as ie,
  aV as Ue,
  bb as We,
} from "./index-BM3ZINIl.js";
const nt = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
};
function ot(e, a, s = (l, p) => l === p) {
  return e.length === a.length && e.every((l, p) => s(l, a[p]));
}
const st = 2;
const it = [];
const Ce = {};
function oe(e, a, s, l, p) {
  if (s === 1) {
    return Math.min(e + a, p);
  } else {
    return Math.max(e - a, l);
  }
}
function Xe(e, a) {
  return e - a;
}
function Be(e, a, s = -1) {
  const l =
    e.reduce((g, S, f) => {
      const u = Math.abs(a - S);
      if (g == null || u <= g.distance) {
        return {
          distance: u,
          index: f,
        };
      } else {
        return g;
      }
    }, null) ?? Ce;
  const { index: p } = l;
  if (p == null) {
    return p;
  } else if (s >= 0 && e[s] === e[p]) {
    return s;
  } else {
    return p;
  }
}
function Le(e, a) {
  if (a.current != null && e.changedTouches) {
    const s = e;
    for (let l = 0; l < s.changedTouches.length; l += 1) {
      const p = s.changedTouches[l];
      if (p.identifier === a.current) {
        return {
          x: p.clientX,
          y: p.clientY,
        };
      }
    }
    return false;
  }
  return {
    x: e.clientX,
    y: e.clientY,
  };
}
function Ae(e, a, s) {
  return ((e - a) * 100) / (s - a);
}
function lt(e, a, s) {
  return (s - a) * e + a;
}
function ct(e) {
  if (Math.abs(e) < 1) {
    const s = e.toExponential().split("e-");
    const l = s[0].split(".")[1];
    return (l ? l.length : 0) + parseInt(s[1], 10);
  }
  const a = e.toString().split(".")[1];
  if (a) {
    return a.length;
  } else {
    return 0;
  }
}
function ut(e, a, s) {
  const l = Math.round((e - s) / a) * a + s;
  return Number(l.toFixed(ct(a)));
}
function _e(e, a, s) {
  const l = e.slice();
  l[s] = a;
  return l.sort(Xe);
}
function Ie(e, a, s, l) {
  var S;
  var f;
  const p = se(e.current);
  const g = je(p);
  if (
    (S = e.current) == null ||
    !S.contains(g) ||
    Number(g == null ? undefined : g.getAttribute("data-index")) !== a
  ) {
    const u =
      (f = e.current) == null
        ? undefined
        : f.querySelector(`[type="range"][data-index="${a}"]`);
    if (u != null) {
      if (l == null) {
        u.focus({
          preventScroll: true,
        });
      } else {
        u.focus({
          preventScroll: true,
          focusVisible: l,
        });
      }
    }
  }
  if (s) {
    s(a);
  }
}
function Te(e, a) {
  if (typeof e == "number" && typeof a == "number") {
    return e === a;
  } else if (typeof e == "object" && typeof a == "object") {
    return ot(e, a);
  } else {
    return false;
  }
}
const dt = {
  horizontal: {
    offset: (e) => ({
      left: `${e}%`,
    }),
    leap: (e) => ({
      width: `${e}%`,
    }),
  },
  "horizontal-reverse": {
    offset: (e) => ({
      right: `${e}%`,
    }),
    leap: (e) => ({
      width: `${e}%`,
    }),
  },
  vertical: {
    offset: (e) => ({
      bottom: `${e}%`,
    }),
    leap: (e) => ({
      height: `${e}%`,
    }),
  },
};
const pt = (e) => e;
function ft(e) {
  const {
    "aria-labelledby": a,
    defaultValue: s,
    disabled: l = false,
    disableSwap: p = false,
    isRtl: g = false,
    marks: S = false,
    max: f = 100,
    min: u = 0,
    name: Z,
    onChange: V,
    onChangeCommitted: H,
    orientation: K = "horizontal",
    rootRef: ye,
    scale: le = pt,
    step: P = 1,
    shiftStep: E = 10,
    tabIndex: ee,
    value: Ye,
  } = e;
  const $ = m.useRef(undefined);
  const te = m.useRef(null);
  const [D, B] = m.useState(-1);
  const [Re, _] = m.useState(-1);
  const [q, ke] = m.useState(false);
  const re = m.useRef(0);
  const ae = m.useRef(-1);
  const O = m.useRef(false);
  const ce = m.useRef(-1);
  const R = he(() => {
    if (te.current != null) {
      cancelAnimationFrame(te.current);
      te.current = null;
    }
  });
  const M = m.useRef(null);
  const [T, v] = Je({
    controlled: Ye,
    default: s ?? u,
    name: "Slider",
  });
  const z = he((t, r, n) => {
    const o = "nativeEvent" in t ? t.nativeEvent : t;
    const d = new o.constructor(o.type, o);
    Object.defineProperty(d, "target", {
      writable: true,
      value: {
        value: r,
        name: Z,
      },
    });
    M.current = r;
    if (V != null) {
      V(d, r, n);
    }
  });
  const W = Array.isArray(T);
  const x = m.useMemo(() => {
    if (typeof T == "number") {
      return [ne(T, u, f)];
    }
    if (T == null) {
      return [u];
    }
    const t = T.slice().sort(Xe);
    for (let r = 0; r < t.length; r += 1) {
      const n = t[r];
      t[r] = n == null ? u : ne(n, u, f);
    }
    return t;
  }, [T, u, f]);
  const F = m.useMemo(() => {
    if (S === true && P != null) {
      const t = new Array(Math.floor((f - u) / P) + 1);
      for (let r = 0; r < t.length; r += 1) {
        t[r] = {
          value: u + P * r,
        };
      }
      return t;
    }
    if (Array.isArray(S)) {
      return S;
    } else {
      return it;
    }
  }, [S, P, u, f]);
  const y = m.useMemo(() => {
    const t = new Array(F.length);
    for (let r = 0; r < F.length; r += 1) {
      t[r] = F[r].value;
    }
    return t;
  }, [F]);
  const [ue, N] = m.useState(-1);
  const h = m.useRef(null);
  const de = Qe(ye, h);
  const Ve = (t) => (r) => {
    var o;
    const n = Number(r.currentTarget.getAttribute("data-index"));
    if (Ke(r.target)) {
      N(n);
    }
    _(n);
    if ((o = t == null ? undefined : t.onFocus) != null) {
      o.call(t, r);
    }
  };
  const pe = (t) => (r) => {
    var n;
    if (!Ke(r.target)) {
      N(-1);
    }
    _(-1);
    if ((n = t == null ? undefined : t.onBlur) != null) {
      n.call(t, r);
    }
  };
  const w = (t, r) => {
    const n = Number(t.currentTarget.getAttribute("data-index"));
    const o = x[n];
    const d = y.indexOf(o);
    let i = r;
    if (F && P == null) {
      const c = y[y.length - 1];
      if (i >= c) {
        i = c;
      } else if (i <= y[0]) {
        i = y[0];
      } else {
        i = i < o ? y[d - 1] : y[d + 1];
      }
    }
    i = ne(i, u, f);
    if (W) {
      if (p) {
        i = ne(i, x[n - 1] || -Infinity, x[n + 1] || Infinity);
      }
      const c = i;
      i = _e(x, i, n);
      let b = n;
      if (!p) {
        b = i.indexOf(c);
      }
      Ie(h, b);
    }
    v(i);
    N(n);
    if (V && !Te(i, T)) {
      z(t, i, n);
    }
    if (H) {
      H(t, M.current ?? i);
    }
  };
  const Me = (t) => (r) => {
    var n;
    if (
      [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "PageUp",
        "PageDown",
        "Home",
        "End",
      ].includes(r.key)
    ) {
      r.preventDefault();
      const o = Number(r.currentTarget.getAttribute("data-index"));
      const d = x[o];
      let i = null;
      if (P != null) {
        const c = r.shiftKey ? E : P;
        switch (r.key) {
          case "ArrowUp":
            i = oe(d, c, 1, u, f);
            break;
          case "ArrowRight":
            i = oe(d, c, g ? -1 : 1, u, f);
            break;
          case "ArrowDown":
            i = oe(d, c, -1, u, f);
            break;
          case "ArrowLeft":
            i = oe(d, c, g ? 1 : -1, u, f);
            break;
          case "PageUp":
            i = oe(d, E, 1, u, f);
            break;
          case "PageDown":
            i = oe(d, E, -1, u, f);
            break;
          case "Home":
            i = u;
            break;
          case "End":
            i = f;
            break;
        }
      } else if (F) {
        const c = y[y.length - 1];
        const b = y.indexOf(d);
        const A = [
          g ? "ArrowRight" : "ArrowLeft",
          "ArrowDown",
          "PageDown",
          "Home",
        ];
        const U = [g ? "ArrowLeft" : "ArrowRight", "ArrowUp", "PageUp", "End"];
        if (A.includes(r.key)) {
          if (b === 0) {
            i = y[0];
          } else {
            i = y[b - 1];
          }
        } else if (U.includes(r.key)) {
          if (b === y.length - 1) {
            i = c;
          } else {
            i = y[b + 1];
          }
        }
      }
      if (i != null) {
        w(r, i);
      }
    }
    if ((n = t == null ? undefined : t.onKeyDown) != null) {
      n.call(t, r);
    }
  };
  Ze(() => {
    var r;
    const t = je(se(h.current));
    if (
      l &&
      (r = h.current) != null &&
      r.contains(t) &&
      t != null &&
      "blur" in t
    ) {
      t.blur();
    }
  }, [l]);
  if (l && D !== -1) {
    B(-1);
  }
  if (l && ue !== -1) {
    N(-1);
  }
  const ze = (t) => (r) => {
    var n;
    if ((n = t.onChange) != null) {
      n.call(t, r);
    }
    w(r, r.currentTarget.valueAsNumber);
  };
  const X = m.useRef(undefined);
  let k = K;
  if (g && K === "horizontal") {
    k += "-reverse";
  }
  const L = (t) => {
    const { current: r } = h;
    if (!r) {
      return null;
    }
    const {
      width: n,
      height: o,
      bottom: d,
      left: i,
    } = r.getBoundingClientRect();
    let c;
    if (k.startsWith("vertical")) {
      c = (d - t.y) / o;
    } else {
      c = (t.x - i) / n;
    }
    if (k.includes("-reverse")) {
      c = 1 - c;
    }
    let b;
    b = lt(c, u, f);
    if (P) {
      b = ut(b, P, u);
    } else {
      const U = Be(y, b);
      b = y[U];
    }
    b = ne(b, u, f);
    let A = 0;
    if (W) {
      const U = X.current !== -1;
      A = U ? X.current : Be(x, b, ae.current);
      if (p) {
        b = ne(b, x[A - 1] || -Infinity, x[A + 1] || Infinity);
      }
      const Ge = b;
      b = _e(x, b, A);
      if (!p || !U) {
        A = b.indexOf(Ge);
        X.current = A;
      }
    }
    return {
      newValue: b,
      activeIndex: A,
    };
  };
  const G = he((t) => {
    if ("pointerId" in t && t.pointerId !== ce.current) {
      return;
    }
    const r = Le(t, $);
    if (!r) {
      return;
    }
    re.current += 1;
    if (t.type === "pointermove" && t.buttons === 0) {
      j(t);
      return;
    }
    const n = L(r);
    if (n) {
      Ie(h, n.activeIndex, B, false);
      ae.current = n.activeIndex;
      v(n.newValue);
      if (!q && re.current > st) {
        ke(true);
      }
      if (V && !Te(n.newValue, T)) {
        z(t, n.newValue, n.activeIndex);
      }
    }
  });
  const j = he((t) => {
    var o;
    if ("pointerId" in t && t.pointerId !== ce.current) {
      return;
    }
    const r = Le(t, $);
    ke(false);
    if (!r) {
      return;
    }
    const n = L(r);
    B(-1);
    if (t.type === "touchend") {
      _(-1);
    }
    if (n && H) {
      H(t, M.current ?? n.newValue);
    }
    if (
      "pointerType" in t &&
      (o = h.current) != null &&
      o.hasPointerCapture(t.pointerId)
    ) {
      h.current.releasePointerCapture(t.pointerId);
    }
    $.current = undefined;
    ce.current = -1;
    J();
  });
  const fe = he((t) => {
    if (l) {
      return;
    }
    if (O.current) {
      O.current = false;
      const d = t.changedTouches[0];
      if (d != null) {
        $.current = d.identifier;
      }
      return;
    }
    const r = t.changedTouches[0];
    if (r != null) {
      $.current = r.identifier;
    }
    const n = Le(t, $);
    if (n !== false) {
      X.current = -1;
      const d = L(n);
      if (d) {
        Ie(h, d.activeIndex, B, false);
        ae.current = d.activeIndex;
        v(d.newValue);
        if (V && !Te(d.newValue, T)) {
          z(t, d.newValue, d.activeIndex);
        }
      }
    }
    re.current = 0;
    const o = se(h.current);
    o.addEventListener("touchmove", G, {
      passive: true,
    });
    o.addEventListener("touchend", j, {
      passive: true,
    });
  });
  const J = m.useCallback(() => {
    const t = se(h.current);
    t.removeEventListener("pointermove", G);
    t.removeEventListener("pointerup", j);
    t.removeEventListener("touchmove", G);
    t.removeEventListener("touchend", j);
  }, [j, G]);
  m.useEffect(() => {
    const t = h.current;
    if (t) {
      t.addEventListener("touchstart", fe, {
        passive: true,
      });
      return () => {
        t.removeEventListener("touchstart", fe);
        R();
        J();
      };
    }
  }, [J, fe, R]);
  m.useEffect(() => {
    if (l) {
      J();
      R();
    }
  }, [l, J, R]);
  const Fe = (t) => (r) => {
    var d;
    var i;
    if ((d = t.onPointerDown) != null) {
      d.call(t, r);
    }
    if (r.pointerType === "touch") {
      O.current = true;
    }
    if (l || r.defaultPrevented || r.button !== 0) {
      return;
    }
    const n = Le(r, $);
    if (n !== false) {
      X.current = -1;
      const c = L(n);
      if (c) {
        const b =
          (i = h.current) == null
            ? undefined
            : i.querySelector(
                `input[type="range"][data-index="${c.activeIndex}"]`,
              );
        const A = se(h.current);
        const U = b != null && b === je(A);
        B(c.activeIndex);
        ae.current = c.activeIndex;
        if (U) {
          r.preventDefault();
        } else {
          R();
          te.current = requestAnimationFrame(() => {
            te.current = null;
            Ie(h, c.activeIndex, undefined, false);
          });
        }
        v(c.newValue);
        if (V && !Te(c.newValue, T)) {
          z(r, c.newValue, c.activeIndex);
        }
      }
    }
    re.current = 0;
    ce.current = r.pointerId;
    const o = se(h.current);
    try {
      r.currentTarget.setPointerCapture(r.pointerId);
    } catch {}
    o.addEventListener("pointermove", G, {
      passive: true,
    });
    o.addEventListener("pointerup", j);
  };
  const xe = Ae(W ? x[0] : u, u, f);
  const Ne = Ae(x[x.length - 1], u, f) - xe;
  const be = (t = Ce) => {
    const r = De(t);
    const n = {
      onPointerDown: Fe(r),
    };
    const o = {
      ...r,
      ...n,
    };
    return {
      ...t,
      ref: de,
      ...o,
    };
  };
  const Ee = (t) => (r) => {
    var o;
    if ((o = t.onMouseOver) != null) {
      o.call(t, r);
    }
    const n = Number(r.currentTarget.getAttribute("data-index"));
    _(n);
  };
  const $e = (t) => (r) => {
    var n;
    if ((n = t.onMouseLeave) != null) {
      n.call(t, r);
    }
    _(-1);
  };
  const we = (t = Ce) => {
    const r = De(t);
    const n = {
      onMouseOver: Ee(r),
      onMouseLeave: $e(r),
    };
    return {
      ...t,
      ...r,
      ...n,
    };
  };
  const me = (t) => {
    let r;
    if (W) {
      if (D === t) {
        r = 2;
      } else if (ae.current === t) {
        r = 1;
      }
    } else if (D === t) {
      r = 1;
    }
    return {
      pointerEvents: D !== -1 && D !== t ? "none" : undefined,
      zIndex: r,
    };
  };
  let ge;
  if (K === "vertical") {
    ge = g ? "vertical-rl" : "vertical-lr";
  }
  return {
    active: D,
    axis: k,
    axisProps: dt,
    dragging: q,
    focusedThumbIndex: ue,
    getHiddenInputProps: (t = Ce) => {
      const r = De(t);
      const n = {
        onChange: ze(r),
        onFocus: Ve(r),
        onBlur: pe(r),
        onKeyDown: Me(r),
      };
      const o = {
        ...r,
        ...n,
      };
      return {
        tabIndex: ee,
        "aria-labelledby": a,
        "aria-orientation": K,
        "aria-valuemax": le(f),
        "aria-valuemin": le(u),
        name: Z,
        type: "range",
        min: e.min,
        max: e.max,
        step: e.step === null && e.marks ? "any" : (e.step ?? undefined),
        disabled: l,
        ...t,
        ...o,
        style: {
          ...nt,
          direction: g ? "rtl" : "ltr",
          width: "100%",
          height: "100%",
          writingMode: ge,
        },
      };
    },
    getRootProps: be,
    getThumbProps: we,
    marks: F,
    open: Re,
    range: W,
    rootRef: de,
    trackLeap: Ne,
    trackOffset: xe,
    values: x,
    getThumbStyle: me,
  };
}
function bt(e) {
  return He("MuiSlider", e);
}
const C = et("MuiSlider", [
  "root",
  "active",
  "colorPrimary",
  "colorSecondary",
  "colorError",
  "colorInfo",
  "colorSuccess",
  "colorWarning",
  "disabled",
  "dragging",
  "focusVisible",
  "mark",
  "markActive",
  "marked",
  "markLabel",
  "markLabelActive",
  "rail",
  "sizeSmall",
  "thumb",
  "track",
  "trackInverted",
  "trackFalse",
  "valueLabel",
  "valueLabelOpen",
  "valueLabelCircle",
  "valueLabelLabel",
  "vertical",
]);
const mt = (e) => {
  const { open: a } = e;
  return {
    offset: ve(a && C.valueLabelOpen),
    circle: C.valueLabelCircle,
    label: C.valueLabelLabel,
  };
};
function gt(e) {
  const { children: a, className: s, value: l } = e;
  const p = mt(e);
  if (a) {
    return m.cloneElement(
      a,
      {
        className: a.props.className,
      },
      <m.Fragment>
        {a.props.children}
        <span className={ve(p.offset, s)} aria-hidden={true}>
          <span className={p.circle}>
            <span className={p.label}>{l}</span>
          </span>
        </span>
      </m.Fragment>,
    );
  } else {
    return null;
  }
}
function qe(e) {
  return e;
}
const ht = Q("span", {
  name: "MuiSlider",
  slot: "Root",
  overridesResolver: (e, a) => {
    const { ownerState: s } = e;
    return [
      a.root,
      a[`color${Pe(s.color)}`],
      s.size !== "medium" && a[`size${Pe(s.size)}`],
      s.marked && a.marked,
      s.orientation === "vertical" && a.vertical,
      s.track === "inverted" && a.trackInverted,
      s.track === false && a.trackFalse,
    ];
  },
})(
  ie(({ theme: e }) => ({
    borderRadius: 12,
    boxSizing: "content-box",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    touchAction: "none",
    WebkitTapHighlightColor: "transparent",
    "@media print": {
      colorAdjust: "exact",
    },
    [`&.${C.disabled}`]: {
      pointerEvents: "none",
      cursor: "default",
      color: (e.vars || e).palette.grey[400],
    },
    [`&.${C.dragging}`]: {
      [`& .${C.thumb}, & .${C.track}`]: {
        transition: "none",
      },
    },
    variants: [
      ...Object.entries(e.palette)
        .filter(Ue())
        .map(([a]) => ({
          props: {
            color: a,
          },
          style: {
            color: (e.vars || e).palette[a].main,
          },
        })),
      {
        props: {
          orientation: "horizontal",
        },
        style: {
          height: 4,
          width: "100%",
          padding: "13px 0",
          "@media (pointer: coarse)": {
            padding: "20px 0",
          },
        },
      },
      {
        props: {
          orientation: "horizontal",
          size: "small",
        },
        style: {
          height: 2,
        },
      },
      {
        props: {
          orientation: "horizontal",
          marked: true,
        },
        style: {
          marginBottom: 20,
        },
      },
      {
        props: {
          orientation: "vertical",
        },
        style: {
          height: "100%",
          width: 4,
          padding: "0 13px",
          "@media (pointer: coarse)": {
            padding: "0 20px",
          },
        },
      },
      {
        props: {
          orientation: "vertical",
          size: "small",
        },
        style: {
          width: 2,
        },
      },
      {
        props: {
          orientation: "vertical",
          marked: true,
        },
        style: {
          marginRight: 44,
        },
      },
    ],
  })),
);
const vt = Q("span", {
  name: "MuiSlider",
  slot: "Rail",
})({
  display: "block",
  position: "absolute",
  borderRadius: "inherit",
  backgroundColor: "currentColor",
  opacity: 0.38,
  variants: [
    {
      props: {
        orientation: "horizontal",
      },
      style: {
        width: "100%",
        height: "inherit",
        top: "50%",
        transform: "translateY(-50%)",
      },
    },
    {
      props: {
        orientation: "vertical",
      },
      style: {
        height: "100%",
        width: "inherit",
        left: "50%",
        transform: "translateX(-50%)",
      },
    },
    {
      props: {
        track: "inverted",
      },
      style: {
        opacity: 1,
      },
    },
  ],
});
const yt = Q("span", {
  name: "MuiSlider",
  slot: "Track",
})(
  ie(({ theme: e }) => ({
    display: "block",
    position: "absolute",
    borderRadius: "inherit",
    border: "1px solid currentColor",
    backgroundColor: "currentColor",
    transition: e.transitions.create(["left", "width", "bottom", "height"], {
      duration: e.transitions.duration.shortest,
    }),
    variants: [
      {
        props: {
          size: "small",
        },
        style: {
          border: "none",
        },
      },
      {
        props: {
          orientation: "horizontal",
        },
        style: {
          height: "inherit",
          top: "50%",
          transform: "translateY(-50%)",
        },
      },
      {
        props: {
          orientation: "vertical",
        },
        style: {
          width: "inherit",
          left: "50%",
          transform: "translateX(-50%)",
        },
      },
      {
        props: {
          track: false,
        },
        style: {
          display: "none",
        },
      },
      ...Object.entries(e.palette)
        .filter(Ue())
        .map(([a]) => ({
          props: {
            color: a,
            track: "inverted",
          },
          style: {
            ...(e.vars
              ? {
                  backgroundColor: e.vars.palette.Slider[`${a}Track`],
                  borderColor: e.vars.palette.Slider[`${a}Track`],
                }
              : {
                  backgroundColor: e.lighten(e.palette[a].main, 0.62),
                  borderColor: e.lighten(e.palette[a].main, 0.62),
                  ...e.applyStyles("dark", {
                    backgroundColor: e.darken(e.palette[a].main, 0.5),
                  }),
                  ...e.applyStyles("dark", {
                    borderColor: e.darken(e.palette[a].main, 0.5),
                  }),
                }),
          },
        })),
    ],
  })),
);
const kt = Q("span", {
  name: "MuiSlider",
  slot: "Thumb",
})(
  ie(({ theme: e }) => ({
    position: "absolute",
    width: 20,
    height: 20,
    boxSizing: "border-box",
    borderRadius: "50%",
    outline: 0,
    backgroundColor: "currentColor",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: e.transitions.create(["box-shadow", "left", "bottom"], {
      duration: e.transitions.duration.shortest,
    }),
    "&::before": {
      position: "absolute",
      content: '""',
      borderRadius: "inherit",
      width: "100%",
      height: "100%",
      boxShadow: (e.vars || e).shadows[2],
    },
    "&::after": {
      position: "absolute",
      content: '""',
      borderRadius: "50%",
      width: 42,
      height: 42,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    [`&.${C.disabled}`]: {
      "&:hover": {
        boxShadow: "none",
      },
    },
    variants: [
      {
        props: {
          size: "small",
        },
        style: {
          width: 12,
          height: 12,
          "&::before": {
            boxShadow: "none",
          },
        },
      },
      {
        props: {
          orientation: "horizontal",
        },
        style: {
          top: "50%",
          transform: "translate(-50%, -50%)",
        },
      },
      {
        props: {
          orientation: "vertical",
        },
        style: {
          left: "50%",
          transform: "translate(-50%, 50%)",
        },
      },
      ...Object.entries(e.palette)
        .filter(Ue())
        .map(([a]) => ({
          props: {
            color: a,
          },
          style: {
            [`&:hover, &.${C.focusVisible}`]: {
              boxShadow: `0px 0px 0px 8px ${e.alpha((e.vars || e).palette[a].main, 0.16)}`,
              "@media (hover: none)": {
                boxShadow: "none",
              },
            },
            [`&.${C.active}`]: {
              boxShadow: `0px 0px 0px 14px ${e.alpha((e.vars || e).palette[a].main, 0.16)}`,
            },
          },
        })),
    ],
  })),
);
const xt = Q(gt, {
  name: "MuiSlider",
  slot: "ValueLabel",
})(
  ie(({ theme: e }) => ({
    zIndex: 1,
    whiteSpace: "nowrap",
    ...e.typography.body2,
    fontWeight: 500,
    transition: e.transitions.create(["transform"], {
      duration: e.transitions.duration.shortest,
    }),
    position: "absolute",
    backgroundColor: (e.vars || e).palette.grey[600],
    borderRadius: 2,
    color: (e.vars || e).palette.common.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.25rem 0.75rem",
    variants: [
      {
        props: {
          orientation: "horizontal",
        },
        style: {
          transform: "translateY(-100%) scale(0)",
          top: "-10px",
          transformOrigin: "bottom center",
          "&::before": {
            position: "absolute",
            content: '""',
            width: 8,
            height: 8,
            transform: "translate(-50%, 50%) rotate(45deg)",
            backgroundColor: "inherit",
            bottom: 0,
            left: "50%",
          },
          [`&.${C.valueLabelOpen}`]: {
            transform: "translateY(-100%) scale(1)",
          },
        },
      },
      {
        props: {
          orientation: "vertical",
        },
        style: {
          transform: "translateY(-50%) scale(0)",
          right: "30px",
          top: "50%",
          transformOrigin: "right center",
          "&::before": {
            position: "absolute",
            content: '""',
            width: 8,
            height: 8,
            transform: "translate(-50%, -50%) rotate(45deg)",
            backgroundColor: "inherit",
            right: -8,
            top: "50%",
          },
          [`&.${C.valueLabelOpen}`]: {
            transform: "translateY(-50%) scale(1)",
          },
        },
      },
      {
        props: {
          size: "small",
        },
        style: {
          fontSize: e.typography.pxToRem(12),
          padding: "0.25rem 0.5rem",
        },
      },
      {
        props: {
          orientation: "vertical",
          size: "small",
        },
        style: {
          right: "20px",
        },
      },
    ],
  })),
);
const wt = Q("span", {
  name: "MuiSlider",
  slot: "Mark",
  shouldForwardProp: (e) => We(e) && e !== "markActive",
  overridesResolver: (e, a) => {
    const { markActive: s } = e;
    return [a.mark, s && a.markActive];
  },
})(
  ie(({ theme: e }) => ({
    position: "absolute",
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: "currentColor",
    variants: [
      {
        props: {
          orientation: "horizontal",
        },
        style: {
          top: "50%",
          transform: "translate(-1px, -50%)",
        },
      },
      {
        props: {
          orientation: "vertical",
        },
        style: {
          left: "50%",
          transform: "translate(-50%, 1px)",
        },
      },
      {
        props: {
          markActive: true,
        },
        style: {
          backgroundColor: (e.vars || e).palette.background.paper,
          opacity: 0.8,
        },
      },
    ],
  })),
);
const St = Q("span", {
  name: "MuiSlider",
  slot: "MarkLabel",
  shouldForwardProp: (e) => We(e) && e !== "markLabelActive",
})(
  ie(({ theme: e }) => ({
    ...e.typography.body2,
    color: (e.vars || e).palette.text.secondary,
    position: "absolute",
    whiteSpace: "nowrap",
    variants: [
      {
        props: {
          orientation: "horizontal",
        },
        style: {
          top: 30,
          transform: "translateX(-50%)",
          "@media (pointer: coarse)": {
            top: 40,
          },
        },
      },
      {
        props: {
          orientation: "vertical",
        },
        style: {
          left: 36,
          transform: "translateY(50%)",
          "@media (pointer: coarse)": {
            left: 44,
          },
        },
      },
      {
        props: {
          markLabelActive: true,
        },
        style: {
          color: (e.vars || e).palette.text.primary,
        },
      },
    ],
  })),
);
const Lt = (e) => {
  const {
    disabled: a,
    dragging: s,
    marked: l,
    orientation: p,
    track: g,
    classes: S,
    color: f,
    size: u,
  } = e;
  const Z = {
    root: [
      "root",
      a && "disabled",
      s && "dragging",
      l && "marked",
      p === "vertical" && "vertical",
      g === "inverted" && "trackInverted",
      g === false && "trackFalse",
      f && `color${Pe(f)}`,
      u && `size${Pe(u)}`,
    ],
    rail: ["rail"],
    track: ["track"],
    mark: ["mark"],
    markActive: ["markActive"],
    markLabel: ["markLabel"],
    markLabelActive: ["markLabelActive"],
    valueLabel: ["valueLabel"],
    thumb: ["thumb", a && "disabled"],
    active: ["active"],
    disabled: ["disabled"],
    focusVisible: ["focusVisible"],
  };
  return at(Z, bt, S);
};
const It = ({ children: e }) => e;
const Slider = m.forwardRef(function (a, s) {
  const l = tt({
    props: a,
    name: "MuiSlider",
  });
  const p = rt();
  const {
    "aria-label": g,
    "aria-valuetext": S,
    "aria-labelledby": f,
    color: u = "primary",
    classes: Z,
    className: V,
    disableSwap: H = false,
    disabled: K = false,
    getAriaLabel: ye,
    getAriaValueText: le,
    marks: P = false,
    max: E = 100,
    min: ee = 0,
    name: Ye,
    onChange: $,
    onChangeCommitted: te,
    orientation: D = "horizontal",
    shiftStep: B = 10,
    size: Re = "medium",
    step: _ = 1,
    scale: q = qe,
    slotProps: ke = {},
    slots: re = {},
    tabIndex: ae,
    track: O = "normal",
    value: ce,
    valueLabelDisplay: R = "off",
    valueLabelFormat: M = qe,
    ...T
  } = l;
  const v = {
    ...l,
    isRtl: p,
    max: E,
    min: ee,
    classes: Z,
    disabled: K,
    disableSwap: H,
    orientation: D,
    marks: P,
    color: u,
    size: Re,
    step: _,
    shiftStep: B,
    scale: q,
    track: O,
    valueLabelDisplay: R,
    valueLabelFormat: M,
  };
  const {
    axisProps: z,
    getRootProps: W,
    getHiddenInputProps: x,
    getThumbProps: F,
    open: y,
    active: ue,
    axis: N,
    focusedThumbIndex: h,
    range: de,
    dragging: Ve,
    marks: pe,
    values: w,
    trackOffset: Me,
    trackLeap: ze,
    getThumbStyle: X,
  } = ft({
    ...v,
    rootRef: s,
  });
  v.marked = pe.length > 0 && pe.some((n) => n.label);
  v.dragging = Ve;
  v.focusedThumbIndex = h;
  const k = Lt(v);
  const L = {
    slots: re,
    slotProps: ke,
  };
  const [G, j] = Y("root", {
    elementType: ht,
    getSlotProps: W,
    externalForwardedProps: {
      ...L,
      ...T,
    },
    ownerState: v,
    className: [k.root, V],
  });
  const [_Component, J] = Y("rail", {
    elementType: vt,
    externalForwardedProps: L,
    ownerState: v,
    className: k.rail,
  });
  const [Fe, xe] = Y("track", {
    elementType: yt,
    externalForwardedProps: L,
    additionalProps: {
      style: {
        ...z[N].offset(Me),
        ...z[N].leap(ze),
      },
    },
    ownerState: v,
    className: k.track,
  });
  const [Ne, be] = Y("thumb", {
    elementType: kt,
    getSlotProps: F,
    externalForwardedProps: L,
    ownerState: v,
    className: k.thumb,
  });
  const [Ee, $e] = Y("valueLabel", {
    elementType: xt,
    externalForwardedProps: L,
    ownerState: v,
    className: k.valueLabel,
  });
  const [_Component2, me] = Y("mark", {
    elementType: wt,
    externalForwardedProps: L,
    ownerState: v,
    className: k.mark,
  });
  const [_Component3, Se] = Y("markLabel", {
    elementType: St,
    externalForwardedProps: L,
    ownerState: v,
    className: k.markLabel,
  });
  const [_Component4, r] = Y("input", {
    elementType: "input",
    getSlotProps: x,
    externalForwardedProps: L,
    ownerState: v,
  });
  return (
    <G {...j}>
      <_Component {...J} />
      <Fe {...xe} />
      {pe
        .filter((n) => n.value >= ee && n.value <= E)
        .map((n, o) => {
          const d = Ae(n.value, ee, E);
          const i = z[N].offset(d);
          let c;
          if (O === false) {
            c = w.includes(n.value);
          } else {
            c =
              (O === "normal" &&
                (de
                  ? n.value >= w[0] && n.value <= w[w.length - 1]
                  : n.value <= w[0])) ||
              (O === "inverted" &&
                (de
                  ? n.value <= w[0] || n.value >= w[w.length - 1]
                  : n.value >= w[0]));
          }
          return (
            <m.Fragment key={o}>
              <_Component2
                data-index={o}
                {...me}
                {...(!Oe(_Component2) && {
                  markActive: c,
                })}
                style={{
                  ...i,
                  ...me.style,
                }}
                className={ve(me.className, c && k.markActive)}
              />
              {n.label != null ? (
                <_Component3
                  aria-hidden={true}
                  data-index={o}
                  {...Se}
                  {...(!Oe(_Component3) && {
                    markLabelActive: c,
                  })}
                  style={{
                    ...i,
                    ...Se.style,
                  }}
                  className={ve(
                    k.markLabel,
                    Se.className,
                    c && k.markLabelActive,
                  )}
                >
                  {n.label}
                </_Component3>
              ) : null}
            </m.Fragment>
          );
        })}
      {w.map((n, o) => {
        const d = Ae(n, ee, E);
        const i = z[N].offset(d);
        const _Component5 = R === "off" ? It : Ee;
        return (
          <_Component5
            {...(!Oe(_Component5) && {
              valueLabelFormat: M,
              valueLabelDisplay: R,
              value: typeof M == "function" ? M(q(n), o) : M,
              index: o,
              open: y === o || ue === o || R === "on",
              disabled: K,
            })}
            {...$e}
            key={o}
          >
            <Ne
              data-index={o}
              {...be}
              className={ve(
                k.thumb,
                be.className,
                ue === o && k.active,
                h === o && k.focusVisible,
              )}
              style={{
                ...i,
                ...X(o),
                ...be.style,
              }}
            >
              <_Component4
                data-index={o}
                aria-label={ye ? ye(o) : g}
                aria-valuenow={q(n)}
                aria-labelledby={f}
                aria-valuetext={le ? le(q(n), o) : S}
                value={w[o]}
                {...r}
              />
            </Ne>
          </_Component5>
        );
      })}
    </G>
  );
});
export { Slider as S };
