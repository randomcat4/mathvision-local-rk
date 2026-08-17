import {
  A as U,
  j as n,
  K as b,
  aQ as $,
  a3 as V,
  r as i,
  ab as E,
  am as O,
  F as Q,
  G as Y,
  H as q,
  a8 as S,
  I as D,
  aV as G,
  aY as Z,
  aJ as L,
  bu as W,
} from "./index-BM3ZINIl.js";
import { S as X } from "./FormControlLabel-CQvCddOM.js";
import { u as _, c as oo } from "./TextField-D8vc_sXz.js";
import { F as eo } from "./FormGroup-BsLWbxpH.js";
const to = U(
    n.jsx("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    }),
  ),
  ao = U(
    n.jsx("path", {
      d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z",
    }),
  ),
  so = b("span", { name: "MuiRadioButtonIcon", shouldForwardProp: $ })({
    position: "relative",
    display: "flex",
  }),
  ro = b(to, { name: "MuiRadioButtonIcon" })({ transform: "scale(1)" }),
  no = b(ao, { name: "MuiRadioButtonIcon" })(
    V(({ theme: o }) => ({
      left: 0,
      position: "absolute",
      transform: "scale(0)",
      transition: o.transitions.create("transform", {
        easing: o.transitions.easing.easeIn,
        duration: o.transitions.duration.shortest,
      }),
      variants: [
        {
          props: { checked: !0 },
          style: {
            transform: "scale(1)",
            transition: o.transitions.create("transform", {
              easing: o.transitions.easing.easeOut,
              duration: o.transitions.duration.shortest,
            }),
          },
        },
      ],
    })),
  );
function H(o) {
  const { checked: e = !1, classes: t = {}, fontSize: s } = o,
    r = { ...o, checked: e };
  return n.jsxs(so, {
    className: t.root,
    ownerState: r,
    children: [
      n.jsx(ro, { fontSize: s, className: t.background, ownerState: r }),
      n.jsx(no, { fontSize: s, className: t.dot, ownerState: r }),
    ],
  });
}
const T = i.createContext(void 0);
function io() {
  return i.useContext(T);
}
function lo(o) {
  return E("MuiRadio", o);
}
const N = O("MuiRadio", [
    "root",
    "checked",
    "disabled",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
  ]),
  co = (o) => {
    const { classes: e, color: t, size: s } = o,
      r = { root: ["root", `color${S(t)}`, s !== "medium" && `size${S(s)}`] };
    return { ...e, ...D(r, lo, e) };
  },
  uo = b(X, {
    shouldForwardProp: (o) => $(o) || o === "classes",
    name: "MuiRadio",
    slot: "Root",
    overridesResolver: (o, e) => {
      const { ownerState: t } = o;
      return [e.root, t.size !== "medium" && e[`size${S(t.size)}`], e[`color${S(t.color)}`]];
    },
  })(
    V(({ theme: o }) => ({
      color: (o.vars || o).palette.text.secondary,
      [`&.${N.disabled}`]: { color: (o.vars || o).palette.action.disabled },
      variants: [
        {
          props: { color: "default", disabled: !1, disableRipple: !1 },
          style: {
            "&:hover": {
              backgroundColor: o.alpha(
                (o.vars || o).palette.action.active,
                (o.vars || o).palette.action.hoverOpacity,
              ),
            },
          },
        },
        ...Object.entries(o.palette)
          .filter(G())
          .map(([e]) => ({
            props: { color: e, disabled: !1, disableRipple: !1 },
            style: {
              "&:hover": {
                backgroundColor: o.alpha(
                  (o.vars || o).palette[e].main,
                  (o.vars || o).palette.action.hoverOpacity,
                ),
              },
            },
          })),
        ...Object.entries(o.palette)
          .filter(G())
          .map(([e]) => ({
            props: { color: e, disabled: !1 },
            style: { [`&.${N.checked}`]: { color: (o.vars || o).palette[e].main } },
          })),
        {
          props: { disableRipple: !1 },
          style: { "&:hover": { "@media (hover: none)": { backgroundColor: "transparent" } } },
        },
      ],
    })),
  );
function po(o, e) {
  return typeof e == "object" && e !== null ? o === e : String(o) === String(e);
}
const fo = n.jsx(H, { checked: !0 }),
  mo = n.jsx(H, {}),
  bo = i.forwardRef(function (e, t) {
    const s = Q({ props: e, name: "MuiRadio" }),
      {
        checked: r,
        checkedIcon: f = fo,
        color: x = "primary",
        icon: m = mo,
        name: l,
        onChange: P,
        size: c = "medium",
        className: u,
        disabled: h,
        disableRipple: R = !1,
        slots: d = {},
        slotProps: C = {},
        ...v
      } = s,
      g = _();
    let a = h;
    (g && typeof a > "u" && (a = g.disabled), a ?? (a = !1));
    const k = { ...s, disabled: a, disableRipple: R, color: x, size: c },
      w = co(k),
      p = io();
    let I = r;
    const A = oo(P, p && p.onChange);
    let j = l;
    p && (typeof I > "u" && (I = po(p.value, s.value)), typeof j > "u" && (j = p.name));
    const z = C.input,
      [J, K] = Y("root", {
        ref: t,
        elementType: uo,
        className: q(w.root, u),
        shouldForwardComponentProp: !0,
        externalForwardedProps: { slots: d, slotProps: C, ...v },
        getSlotProps: (y) => ({
          ...y,
          onChange: (F, ...M) => {
            var B;
            ((B = y.onChange) == null || B.call(y, F, ...M), A(F, ...M));
          },
        }),
        ownerState: k,
        additionalProps: {
          type: "radio",
          icon: i.cloneElement(m, { fontSize: m.props.fontSize ?? c }),
          checkedIcon: i.cloneElement(f, { fontSize: f.props.fontSize ?? c }),
          disabled: a,
          name: j,
          checked: I,
          slots: d,
          slotProps: { input: typeof z == "function" ? z(k) : z },
        },
      });
    return n.jsx(J, { ...K, classes: w });
  });
function Ro(o) {
  return E("MuiRadioGroup", o);
}
O("MuiRadioGroup", ["root", "row", "error"]);
const Co = (o) => {
    const { classes: e, row: t, error: s } = o;
    return D({ root: ["root", t && "row", s && "error"] }, Ro, e);
  },
  xo = i.forwardRef(function (e, t) {
    const {
        actions: s,
        children: r,
        className: f,
        defaultValue: x,
        name: m,
        onChange: l,
        value: P,
        ...c
      } = e,
      u = i.useRef(null),
      h = Co(e),
      [R, d] = Z({ controlled: P, default: x, name: "RadioGroup" });
    i.useImperativeHandle(
      s,
      () => ({
        focus: () => {
          let a = u.current.querySelector("input:not(:disabled):checked");
          (a || (a = u.current.querySelector("input:not(:disabled)")), a && a.focus());
        },
      }),
      [],
    );
    const C = L(t, u),
      v = W(m),
      g = i.useMemo(
        () => ({
          name: v,
          onChange(a) {
            (d(a.target.value), l && l(a, a.target.value));
          },
          value: R,
        }),
        [v, l, d, R],
      );
    return n.jsx(T.Provider, {
      value: g,
      children: n.jsx(eo, {
        role: "radiogroup",
        ref: C,
        className: q(h.root, f),
        ...c,
        children: r,
      }),
    });
  });
export { xo as R, bo as a };
