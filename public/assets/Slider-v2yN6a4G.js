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
const st = 2,
  it = [],
  Ce = {};
function oe(e, a, s, l, p) {
  return s === 1 ? Math.min(e + a, p) : Math.max(e - a, l);
}
function Xe(e, a) {
  return e - a;
}
function Be(e, a, s = -1) {
  const l =
      e.reduce((g, S, f) => {
        const u = Math.abs(a - S);
        return g == null || u <= g.distance ? { distance: u, index: f } : g;
      }, null) ?? Ce,
    { index: p } = l;
  return p == null ? p : s >= 0 && e[s] === e[p] ? s : p;
}
function Le(e, a) {
  if (a.current != null && e.changedTouches) {
    const s = e;
    for (let l = 0; l < s.changedTouches.length; l += 1) {
      const p = s.changedTouches[l];
      if (p.identifier === a.current) return { x: p.clientX, y: p.clientY };
    }
    return !1;
  }
  return { x: e.clientX, y: e.clientY };
}
function Ae(e, a, s) {
  return ((e - a) * 100) / (s - a);
}
function lt(e, a, s) {
  return (s - a) * e + a;
}
function ct(e) {
  if (Math.abs(e) < 1) {
    const s = e.toExponential().split("e-"),
      l = s[0].split(".")[1];
    return (l ? l.length : 0) + parseInt(s[1], 10);
  }
  const a = e.toString().split(".")[1];
  return a ? a.length : 0;
}
function ut(e, a, s) {
  const l = Math.round((e - s) / a) * a + s;
  return Number(l.toFixed(ct(a)));
}
function _e(e, a, s) {
  const l = e.slice();
  return ((l[s] = a), l.sort(Xe));
}
function Ie(e, a, s, l) {
  var S, f;
  const p = se(e.current),
    g = je(p);
  if (
    !((S = e.current) != null && S.contains(g)) ||
    Number(g == null ? void 0 : g.getAttribute("data-index")) !== a
  ) {
    const u =
      (f = e.current) == null ? void 0 : f.querySelector(`[type="range"][data-index="${a}"]`);
    u != null &&
      (l == null
        ? u.focus({ preventScroll: !0 })
        : u.focus({ preventScroll: !0, focusVisible: l }));
  }
  s && s(a);
}
function Te(e, a) {
  return typeof e == "number" && typeof a == "number"
    ? e === a
    : typeof e == "object" && typeof a == "object"
      ? ot(e, a)
      : !1;
}
const dt = {
    horizontal: { offset: (e) => ({ left: `${e}%` }), leap: (e) => ({ width: `${e}%` }) },
    "horizontal-reverse": {
      offset: (e) => ({ right: `${e}%` }),
      leap: (e) => ({ width: `${e}%` }),
    },
    vertical: { offset: (e) => ({ bottom: `${e}%` }), leap: (e) => ({ height: `${e}%` }) },
  },
  pt = (e) => e;
function ft(e) {
  const {
      "aria-labelledby": a,
      defaultValue: s,
      disabled: l = !1,
      disableSwap: p = !1,
      isRtl: g = !1,
      marks: S = !1,
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
    } = e,
    $ = m.useRef(void 0),
    te = m.useRef(null),
    [D, B] = m.useState(-1),
    [Re, _] = m.useState(-1),
    [q, ke] = m.useState(!1),
    re = m.useRef(0),
    ae = m.useRef(-1),
    O = m.useRef(!1),
    ce = m.useRef(-1),
    R = he(() => {
      te.current != null && (cancelAnimationFrame(te.current), (te.current = null));
    }),
    M = m.useRef(null),
    [T, v] = Je({ controlled: Ye, default: s ?? u, name: "Slider" }),
    z = he((t, r, n) => {
      const o = "nativeEvent" in t ? t.nativeEvent : t,
        d = new o.constructor(o.type, o);
      (Object.defineProperty(d, "target", { writable: !0, value: { value: r, name: Z } }),
        (M.current = r),
        V == null || V(d, r, n));
    }),
    W = Array.isArray(T),
    x = m.useMemo(() => {
      if (typeof T == "number") return [ne(T, u, f)];
      if (T == null) return [u];
      const t = T.slice().sort(Xe);
      for (let r = 0; r < t.length; r += 1) {
        const n = t[r];
        t[r] = n == null ? u : ne(n, u, f);
      }
      return t;
    }, [T, u, f]),
    F = m.useMemo(() => {
      if (S === !0 && P != null) {
        const t = new Array(Math.floor((f - u) / P) + 1);
        for (let r = 0; r < t.length; r += 1) t[r] = { value: u + P * r };
        return t;
      }
      return Array.isArray(S) ? S : it;
    }, [S, P, u, f]),
    y = m.useMemo(() => {
      const t = new Array(F.length);
      for (let r = 0; r < F.length; r += 1) t[r] = F[r].value;
      return t;
    }, [F]),
    [ue, N] = m.useState(-1),
    h = m.useRef(null),
    de = Qe(ye, h),
    Ve = (t) => (r) => {
      var o;
      const n = Number(r.currentTarget.getAttribute("data-index"));
      (Ke(r.target) && N(n), _(n), (o = t == null ? void 0 : t.onFocus) == null || o.call(t, r));
    },
    pe = (t) => (r) => {
      var n;
      (Ke(r.target) || N(-1), _(-1), (n = t == null ? void 0 : t.onBlur) == null || n.call(t, r));
    },
    w = (t, r) => {
      const n = Number(t.currentTarget.getAttribute("data-index")),
        o = x[n],
        d = y.indexOf(o);
      let i = r;
      if (F && P == null) {
        const c = y[y.length - 1];
        i >= c ? (i = c) : i <= y[0] ? (i = y[0]) : (i = i < o ? y[d - 1] : y[d + 1]);
      }
      if (((i = ne(i, u, f)), W)) {
        p && (i = ne(i, x[n - 1] || -1 / 0, x[n + 1] || 1 / 0));
        const c = i;
        i = _e(x, i, n);
        let b = n;
        (p || (b = i.indexOf(c)), Ie(h, b));
      }
      (v(i), N(n), V && !Te(i, T) && z(t, i, n), H && H(t, M.current ?? i));
    },
    Me = (t) => (r) => {
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
        const o = Number(r.currentTarget.getAttribute("data-index")),
          d = x[o];
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
          const c = y[y.length - 1],
            b = y.indexOf(d),
            A = [g ? "ArrowRight" : "ArrowLeft", "ArrowDown", "PageDown", "Home"],
            U = [g ? "ArrowLeft" : "ArrowRight", "ArrowUp", "PageUp", "End"];
          A.includes(r.key)
            ? b === 0
              ? (i = y[0])
              : (i = y[b - 1])
            : U.includes(r.key) && (b === y.length - 1 ? (i = c) : (i = y[b + 1]));
        }
        i != null && w(r, i);
      }
      (n = t == null ? void 0 : t.onKeyDown) == null || n.call(t, r);
    };
  (Ze(() => {
    var r;
    const t = je(se(h.current));
    l && (r = h.current) != null && r.contains(t) && t != null && "blur" in t && t.blur();
  }, [l]),
    l && D !== -1 && B(-1),
    l && ue !== -1 && N(-1));
  const ze = (t) => (r) => {
      var n;
      ((n = t.onChange) == null || n.call(t, r), w(r, r.currentTarget.valueAsNumber));
    },
    X = m.useRef(void 0);
  let k = K;
  g && K === "horizontal" && (k += "-reverse");
  const L = (t) => {
      const { current: r } = h;
      if (!r) return null;
      const { width: n, height: o, bottom: d, left: i } = r.getBoundingClientRect();
      let c;
      (k.startsWith("vertical") ? (c = (d - t.y) / o) : (c = (t.x - i) / n),
        k.includes("-reverse") && (c = 1 - c));
      let b;
      if (((b = lt(c, u, f)), P)) b = ut(b, P, u);
      else {
        const U = Be(y, b);
        b = y[U];
      }
      b = ne(b, u, f);
      let A = 0;
      if (W) {
        const U = X.current !== -1;
        ((A = U ? X.current : Be(x, b, ae.current)),
          p && (b = ne(b, x[A - 1] || -1 / 0, x[A + 1] || 1 / 0)));
        const Ge = b;
        ((b = _e(x, b, A)), (p && U) || ((A = b.indexOf(Ge)), (X.current = A)));
      }
      return { newValue: b, activeIndex: A };
    },
    G = he((t) => {
      if ("pointerId" in t && t.pointerId !== ce.current) return;
      const r = Le(t, $);
      if (!r) return;
      if (((re.current += 1), t.type === "pointermove" && t.buttons === 0)) {
        j(t);
        return;
      }
      const n = L(r);
      n &&
        (Ie(h, n.activeIndex, B, !1),
        (ae.current = n.activeIndex),
        v(n.newValue),
        !q && re.current > st && ke(!0),
        V && !Te(n.newValue, T) && z(t, n.newValue, n.activeIndex));
    }),
    j = he((t) => {
      var o;
      if ("pointerId" in t && t.pointerId !== ce.current) return;
      const r = Le(t, $);
      if ((ke(!1), !r)) return;
      const n = L(r);
      (B(-1),
        t.type === "touchend" && _(-1),
        n && H && H(t, M.current ?? n.newValue),
        "pointerType" in t &&
          (o = h.current) != null &&
          o.hasPointerCapture(t.pointerId) &&
          h.current.releasePointerCapture(t.pointerId),
        ($.current = void 0),
        (ce.current = -1),
        J());
    }),
    fe = he((t) => {
      if (l) return;
      if (O.current) {
        O.current = !1;
        const d = t.changedTouches[0];
        d != null && ($.current = d.identifier);
        return;
      }
      const r = t.changedTouches[0];
      r != null && ($.current = r.identifier);
      const n = Le(t, $);
      if (n !== !1) {
        X.current = -1;
        const d = L(n);
        d &&
          (Ie(h, d.activeIndex, B, !1),
          (ae.current = d.activeIndex),
          v(d.newValue),
          V && !Te(d.newValue, T) && z(t, d.newValue, d.activeIndex));
      }
      re.current = 0;
      const o = se(h.current);
      (o.addEventListener("touchmove", G, { passive: !0 }),
        o.addEventListener("touchend", j, { passive: !0 }));
    }),
    J = m.useCallback(() => {
      const t = se(h.current);
      (t.removeEventListener("pointermove", G),
        t.removeEventListener("pointerup", j),
        t.removeEventListener("touchmove", G),
        t.removeEventListener("touchend", j));
    }, [j, G]);
  (m.useEffect(() => {
    const t = h.current;
    if (t)
      return (
        t.addEventListener("touchstart", fe, { passive: !0 }),
        () => {
          (t.removeEventListener("touchstart", fe), R(), J());
        }
      );
  }, [J, fe, R]),
    m.useEffect(() => {
      l && (J(), R());
    }, [l, J, R]));
  const Fe = (t) => (r) => {
      var d, i;
      if (
        ((d = t.onPointerDown) == null || d.call(t, r),
        r.pointerType === "touch" && (O.current = !0),
        l || r.defaultPrevented || r.button !== 0)
      )
        return;
      const n = Le(r, $);
      if (n !== !1) {
        X.current = -1;
        const c = L(n);
        if (c) {
          const b =
              (i = h.current) == null
                ? void 0
                : i.querySelector(`input[type="range"][data-index="${c.activeIndex}"]`),
            A = se(h.current),
            U = b != null && b === je(A);
          (B(c.activeIndex),
            (ae.current = c.activeIndex),
            U
              ? r.preventDefault()
              : (R(),
                (te.current = requestAnimationFrame(() => {
                  ((te.current = null), Ie(h, c.activeIndex, void 0, !1));
                }))),
            v(c.newValue),
            V && !Te(c.newValue, T) && z(r, c.newValue, c.activeIndex));
        }
      }
      ((re.current = 0), (ce.current = r.pointerId));
      const o = se(h.current);
      try {
        r.currentTarget.setPointerCapture(r.pointerId);
      } catch {}
      (o.addEventListener("pointermove", G, { passive: !0 }), o.addEventListener("pointerup", j));
    },
    xe = Ae(W ? x[0] : u, u, f),
    Ne = Ae(x[x.length - 1], u, f) - xe,
    be = (t = Ce) => {
      const r = De(t),
        n = { onPointerDown: Fe(r) },
        o = { ...r, ...n };
      return { ...t, ref: de, ...o };
    },
    Ee = (t) => (r) => {
      var o;
      (o = t.onMouseOver) == null || o.call(t, r);
      const n = Number(r.currentTarget.getAttribute("data-index"));
      _(n);
    },
    $e = (t) => (r) => {
      var n;
      ((n = t.onMouseLeave) == null || n.call(t, r), _(-1));
    },
    we = (t = Ce) => {
      const r = De(t),
        n = { onMouseOver: Ee(r), onMouseLeave: $e(r) };
      return { ...t, ...r, ...n };
    },
    me = (t) => {
      let r;
      return (
        W ? (D === t ? (r = 2) : ae.current === t && (r = 1)) : D === t && (r = 1),
        { pointerEvents: D !== -1 && D !== t ? "none" : void 0, zIndex: r }
      );
    };
  let ge;
  return (
    K === "vertical" && (ge = g ? "vertical-rl" : "vertical-lr"),
    {
      active: D,
      axis: k,
      axisProps: dt,
      dragging: q,
      focusedThumbIndex: ue,
      getHiddenInputProps: (t = Ce) => {
        const r = De(t),
          n = { onChange: ze(r), onFocus: Ve(r), onBlur: pe(r), onKeyDown: Me(r) },
          o = { ...r, ...n };
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
          step: e.step === null && e.marks ? "any" : (e.step ?? void 0),
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
    }
  );
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
  ]),
  mt = (e) => {
    const { open: a } = e;
    return {
      offset: ve(a && C.valueLabelOpen),
      circle: C.valueLabelCircle,
      label: C.valueLabelLabel,
    };
  };
function gt(e) {
  const { children: a, className: s, value: l } = e,
    p = mt(e);
  return a
    ? m.cloneElement(
        a,
        { className: a.props.className },
        I.jsxs(m.Fragment, {
          children: [
            a.props.children,
            I.jsx("span", {
              className: ve(p.offset, s),
              "aria-hidden": !0,
              children: I.jsx("span", {
                className: p.circle,
                children: I.jsx("span", { className: p.label, children: l }),
              }),
            }),
          ],
        }),
      )
    : null;
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
        s.track === !1 && a.trackFalse,
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
      "@media print": { colorAdjust: "exact" },
      [`&.${C.disabled}`]: {
        pointerEvents: "none",
        cursor: "default",
        color: (e.vars || e).palette.grey[400],
      },
      [`&.${C.dragging}`]: { [`& .${C.thumb}, & .${C.track}`]: { transition: "none" } },
      variants: [
        ...Object.entries(e.palette)
          .filter(Ue())
          .map(([a]) => ({ props: { color: a }, style: { color: (e.vars || e).palette[a].main } })),
        {
          props: { orientation: "horizontal" },
          style: {
            height: 4,
            width: "100%",
            padding: "13px 0",
            "@media (pointer: coarse)": { padding: "20px 0" },
          },
        },
        { props: { orientation: "horizontal", size: "small" }, style: { height: 2 } },
        { props: { orientation: "horizontal", marked: !0 }, style: { marginBottom: 20 } },
        {
          props: { orientation: "vertical" },
          style: {
            height: "100%",
            width: 4,
            padding: "0 13px",
            "@media (pointer: coarse)": { padding: "0 20px" },
          },
        },
        { props: { orientation: "vertical", size: "small" }, style: { width: 2 } },
        { props: { orientation: "vertical", marked: !0 }, style: { marginRight: 44 } },
      ],
    })),
  ),
  vt = Q("span", { name: "MuiSlider", slot: "Rail" })({
    display: "block",
    position: "absolute",
    borderRadius: "inherit",
    backgroundColor: "currentColor",
    opacity: 0.38,
    variants: [
      {
        props: { orientation: "horizontal" },
        style: { width: "100%", height: "inherit", top: "50%", transform: "translateY(-50%)" },
      },
      {
        props: { orientation: "vertical" },
        style: { height: "100%", width: "inherit", left: "50%", transform: "translateX(-50%)" },
      },
      { props: { track: "inverted" }, style: { opacity: 1 } },
    ],
  }),
  yt = Q("span", { name: "MuiSlider", slot: "Track" })(
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
        { props: { size: "small" }, style: { border: "none" } },
        {
          props: { orientation: "horizontal" },
          style: { height: "inherit", top: "50%", transform: "translateY(-50%)" },
        },
        {
          props: { orientation: "vertical" },
          style: { width: "inherit", left: "50%", transform: "translateX(-50%)" },
        },
        { props: { track: !1 }, style: { display: "none" } },
        ...Object.entries(e.palette)
          .filter(Ue())
          .map(([a]) => ({
            props: { color: a, track: "inverted" },
            style: {
              ...(e.vars
                ? {
                    backgroundColor: e.vars.palette.Slider[`${a}Track`],
                    borderColor: e.vars.palette.Slider[`${a}Track`],
                  }
                : {
                    backgroundColor: e.lighten(e.palette[a].main, 0.62),
                    borderColor: e.lighten(e.palette[a].main, 0.62),
                    ...e.applyStyles("dark", { backgroundColor: e.darken(e.palette[a].main, 0.5) }),
                    ...e.applyStyles("dark", { borderColor: e.darken(e.palette[a].main, 0.5) }),
                  }),
            },
          })),
      ],
    })),
  ),
  kt = Q("span", { name: "MuiSlider", slot: "Thumb" })(
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
      [`&.${C.disabled}`]: { "&:hover": { boxShadow: "none" } },
      variants: [
        {
          props: { size: "small" },
          style: { width: 12, height: 12, "&::before": { boxShadow: "none" } },
        },
        {
          props: { orientation: "horizontal" },
          style: { top: "50%", transform: "translate(-50%, -50%)" },
        },
        {
          props: { orientation: "vertical" },
          style: { left: "50%", transform: "translate(-50%, 50%)" },
        },
        ...Object.entries(e.palette)
          .filter(Ue())
          .map(([a]) => ({
            props: { color: a },
            style: {
              [`&:hover, &.${C.focusVisible}`]: {
                boxShadow: `0px 0px 0px 8px ${e.alpha((e.vars || e).palette[a].main, 0.16)}`,
                "@media (hover: none)": { boxShadow: "none" },
              },
              [`&.${C.active}`]: {
                boxShadow: `0px 0px 0px 14px ${e.alpha((e.vars || e).palette[a].main, 0.16)}`,
              },
            },
          })),
      ],
    })),
  ),
  xt = Q(gt, { name: "MuiSlider", slot: "ValueLabel" })(
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
          props: { orientation: "horizontal" },
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
            [`&.${C.valueLabelOpen}`]: { transform: "translateY(-100%) scale(1)" },
          },
        },
        {
          props: { orientation: "vertical" },
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
            [`&.${C.valueLabelOpen}`]: { transform: "translateY(-50%) scale(1)" },
          },
        },
        {
          props: { size: "small" },
          style: { fontSize: e.typography.pxToRem(12), padding: "0.25rem 0.5rem" },
        },
        { props: { orientation: "vertical", size: "small" }, style: { right: "20px" } },
      ],
    })),
  ),
  wt = Q("span", {
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
          props: { orientation: "horizontal" },
          style: { top: "50%", transform: "translate(-1px, -50%)" },
        },
        {
          props: { orientation: "vertical" },
          style: { left: "50%", transform: "translate(-50%, 1px)" },
        },
        {
          props: { markActive: !0 },
          style: { backgroundColor: (e.vars || e).palette.background.paper, opacity: 0.8 },
        },
      ],
    })),
  ),
  St = Q("span", {
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
          props: { orientation: "horizontal" },
          style: {
            top: 30,
            transform: "translateX(-50%)",
            "@media (pointer: coarse)": { top: 40 },
          },
        },
        {
          props: { orientation: "vertical" },
          style: {
            left: 36,
            transform: "translateY(50%)",
            "@media (pointer: coarse)": { left: 44 },
          },
        },
        { props: { markLabelActive: !0 }, style: { color: (e.vars || e).palette.text.primary } },
      ],
    })),
  ),
  Lt = (e) => {
    const {
        disabled: a,
        dragging: s,
        marked: l,
        orientation: p,
        track: g,
        classes: S,
        color: f,
        size: u,
      } = e,
      Z = {
        root: [
          "root",
          a && "disabled",
          s && "dragging",
          l && "marked",
          p === "vertical" && "vertical",
          g === "inverted" && "trackInverted",
          g === !1 && "trackFalse",
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
  },
  It = ({ children: e }) => e,
  Ct = m.forwardRef(function (a, s) {
    const l = tt({ props: a, name: "MuiSlider" }),
      p = rt(),
      {
        "aria-label": g,
        "aria-valuetext": S,
        "aria-labelledby": f,
        color: u = "primary",
        classes: Z,
        className: V,
        disableSwap: H = !1,
        disabled: K = !1,
        getAriaLabel: ye,
        getAriaValueText: le,
        marks: P = !1,
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
      } = l,
      v = {
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
      },
      {
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
      } = ft({ ...v, rootRef: s });
    ((v.marked = pe.length > 0 && pe.some((n) => n.label)),
      (v.dragging = Ve),
      (v.focusedThumbIndex = h));
    const k = Lt(v),
      L = { slots: re, slotProps: ke },
      [G, j] = Y("root", {
        elementType: ht,
        getSlotProps: W,
        externalForwardedProps: { ...L, ...T },
        ownerState: v,
        className: [k.root, V],
      }),
      [fe, J] = Y("rail", {
        elementType: vt,
        externalForwardedProps: L,
        ownerState: v,
        className: k.rail,
      }),
      [Fe, xe] = Y("track", {
        elementType: yt,
        externalForwardedProps: L,
        additionalProps: { style: { ...z[N].offset(Me), ...z[N].leap(ze) } },
        ownerState: v,
        className: k.track,
      }),
      [Ne, be] = Y("thumb", {
        elementType: kt,
        getSlotProps: F,
        externalForwardedProps: L,
        ownerState: v,
        className: k.thumb,
      }),
      [Ee, $e] = Y("valueLabel", {
        elementType: xt,
        externalForwardedProps: L,
        ownerState: v,
        className: k.valueLabel,
      }),
      [we, me] = Y("mark", {
        elementType: wt,
        externalForwardedProps: L,
        ownerState: v,
        className: k.mark,
      }),
      [ge, Se] = Y("markLabel", {
        elementType: St,
        externalForwardedProps: L,
        ownerState: v,
        className: k.markLabel,
      }),
      [t, r] = Y("input", {
        elementType: "input",
        getSlotProps: x,
        externalForwardedProps: L,
        ownerState: v,
      });
    return I.jsxs(G, {
      ...j,
      children: [
        I.jsx(fe, { ...J }),
        I.jsx(Fe, { ...xe }),
        pe
          .filter((n) => n.value >= ee && n.value <= E)
          .map((n, o) => {
            const d = Ae(n.value, ee, E),
              i = z[N].offset(d);
            let c;
            return (
              O === !1
                ? (c = w.includes(n.value))
                : (c =
                    (O === "normal" &&
                      (de ? n.value >= w[0] && n.value <= w[w.length - 1] : n.value <= w[0])) ||
                    (O === "inverted" &&
                      (de ? n.value <= w[0] || n.value >= w[w.length - 1] : n.value >= w[0]))),
              I.jsxs(
                m.Fragment,
                {
                  children: [
                    I.jsx(we, {
                      "data-index": o,
                      ...me,
                      ...(!Oe(we) && { markActive: c }),
                      style: { ...i, ...me.style },
                      className: ve(me.className, c && k.markActive),
                    }),
                    n.label != null
                      ? I.jsx(ge, {
                          "aria-hidden": !0,
                          "data-index": o,
                          ...Se,
                          ...(!Oe(ge) && { markLabelActive: c }),
                          style: { ...i, ...Se.style },
                          className: ve(k.markLabel, Se.className, c && k.markLabelActive),
                          children: n.label,
                        })
                      : null,
                  ],
                },
                o,
              )
            );
          }),
        w.map((n, o) => {
          const d = Ae(n, ee, E),
            i = z[N].offset(d),
            c = R === "off" ? It : Ee;
          return I.jsx(
            c,
            {
              ...(!Oe(c) && {
                valueLabelFormat: M,
                valueLabelDisplay: R,
                value: typeof M == "function" ? M(q(n), o) : M,
                index: o,
                open: y === o || ue === o || R === "on",
                disabled: K,
              }),
              ...$e,
              children: I.jsx(Ne, {
                "data-index": o,
                ...be,
                className: ve(
                  k.thumb,
                  be.className,
                  ue === o && k.active,
                  h === o && k.focusVisible,
                ),
                style: { ...i, ...X(o), ...be.style },
                children: I.jsx(t, {
                  "data-index": o,
                  "aria-label": ye ? ye(o) : g,
                  "aria-valuenow": q(n),
                  "aria-labelledby": f,
                  "aria-valuetext": le ? le(q(n), o) : S,
                  value: w[o],
                  ...r,
                }),
              }),
            },
            o,
          );
        }),
      ],
    });
  });
export { Ct as S };
