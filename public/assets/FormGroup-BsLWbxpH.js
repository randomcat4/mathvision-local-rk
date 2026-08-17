import {
  A as v,
  j as s,
  ab as z,
  am as F,
  r as u,
  F as I,
  G as H,
  H as P,
  a8 as m,
  I as R,
  K as j,
  aQ as U,
  a3 as V,
  aV as y,
} from "./index-BM3ZINIl.js";
import { S as B } from "./FormControlLabel-CQvCddOM.js";
import { m as O, u as E, f as N } from "./TextField-D8vc_sXz.js";
const D = v(
    s.jsx("path", {
      d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
    }),
  ),
  L = v(
    s.jsx("path", {
      d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    }),
  ),
  T = v(
    s.jsx("path", {
      d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z",
    }),
  );
function A(o) {
  return z("MuiCheckbox", o);
}
const C = F("MuiCheckbox", [
    "root",
    "checked",
    "disabled",
    "indeterminate",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
    "sizeMedium",
  ]),
  K = (o) => {
    const { classes: e, indeterminate: r, color: t, size: a } = o,
      l = { root: ["root", r && "indeterminate", `color${m(t)}`, `size${m(a)}`] },
      i = R(l, A, e);
    return { ...e, ...i };
  },
  Q = j(B, {
    shouldForwardProp: (o) => U(o) || o === "classes",
    name: "MuiCheckbox",
    slot: "Root",
    overridesResolver: (o, e) => {
      const { ownerState: r } = o;
      return [
        e.root,
        r.indeterminate && e.indeterminate,
        e[`size${m(r.size)}`],
        r.color !== "default" && e[`color${m(r.color)}`],
      ];
    },
  })(
    V(({ theme: o }) => ({
      color: (o.vars || o).palette.text.secondary,
      variants: [
        {
          props: { color: "default", disableRipple: !1 },
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
          .filter(y())
          .map(([e]) => ({
            props: { color: e, disableRipple: !1 },
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
          .filter(y())
          .map(([e]) => ({
            props: { color: e },
            style: {
              [`&.${C.checked}, &.${C.indeterminate}`]: { color: (o.vars || o).palette[e].main },
              [`&.${C.disabled}`]: { color: (o.vars || o).palette.action.disabled },
            },
          })),
        {
          props: { disableRipple: !1 },
          style: { "&:hover": { "@media (hover: none)": { backgroundColor: "transparent" } } },
        },
      ],
    })),
  ),
  W = s.jsx(L, {}),
  q = s.jsx(D, {}),
  J = s.jsx(T, {}),
  ro = u.forwardRef(function (e, r) {
    const t = I({ props: e, name: "MuiCheckbox" }),
      {
        checkedIcon: a = W,
        color: l = "primary",
        icon: i = q,
        indeterminate: n = !1,
        indeterminateIcon: p = J,
        size: c = "medium",
        disableRipple: d = !1,
        className: M,
        slots: h = {},
        slotProps: b = {},
        ...g
      } = t,
      k = n ? p : i,
      w = n ? p : a,
      f = { ...t, disableRipple: d, color: l, indeterminate: n, size: c },
      S = K(f),
      x = b.input,
      [G, $] = H("root", {
        ref: r,
        elementType: Q,
        className: P(S.root, M),
        shouldForwardComponentProp: !0,
        externalForwardedProps: { slots: h, slotProps: b, ...g },
        ownerState: f,
        additionalProps: {
          type: "checkbox",
          icon: u.cloneElement(k, { fontSize: k.props.fontSize ?? c }),
          checkedIcon: u.cloneElement(w, { fontSize: w.props.fontSize ?? c }),
          disableRipple: d,
          slots: h,
          slotProps: { input: O(typeof x == "function" ? x(f) : x, { "data-indeterminate": n }) },
        },
      });
    return s.jsx(G, { ...$, classes: S });
  });
function X(o) {
  return z("MuiFormGroup", o);
}
F("MuiFormGroup", ["root", "row", "error"]);
const Y = (o) => {
    const { classes: e, row: r, error: t } = o;
    return R({ root: ["root", r && "row", t && "error"] }, X, e);
  },
  Z = j("div", {
    name: "MuiFormGroup",
    slot: "Root",
    overridesResolver: (o, e) => {
      const { ownerState: r } = o;
      return [e.root, r.row && e.row];
    },
  })({
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    variants: [{ props: { row: !0 }, style: { flexDirection: "row" } }],
  }),
  to = u.forwardRef(function (e, r) {
    const t = I({ props: e, name: "MuiFormGroup" }),
      { className: a, row: l = !1, ...i } = t,
      n = E(),
      p = N({ props: t, muiFormControl: n, states: ["error"] }),
      c = { ...t, row: l, error: p.error },
      d = Y(c);
    return s.jsx(Z, { className: P(d.root, a), ownerState: c, ref: r, ...i });
  });
export { ro as C, to as F };
