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
} from "./index-BM3ZINIl.jsx";
import { S as B } from "./FormControlLabel-CQvCddOM.jsx";
import { m as O, u as E, f as N } from "./TextField-D8vc_sXz.jsx";
const D = v(
  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />,
);
const L = v(
  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />,
);
const T = v(
  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z" />,
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
]);
const K = (o) => {
  const { classes: e, indeterminate: r, color: t, size: a } = o;
  const l = {
    root: ["root", r && "indeterminate", `color${m(t)}`, `size${m(a)}`],
  };
  const i = R(l, A, e);
  return {
    ...e,
    ...i,
  };
};
const Q = j(B, {
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
        props: {
          color: "default",
          disableRipple: false,
        },
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
          props: {
            color: e,
            disableRipple: false,
          },
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
          props: {
            color: e,
          },
          style: {
            [`&.${C.checked}, &.${C.indeterminate}`]: {
              color: (o.vars || o).palette[e].main,
            },
            [`&.${C.disabled}`]: {
              color: (o.vars || o).palette.action.disabled,
            },
          },
        })),
      {
        props: {
          disableRipple: false,
        },
        style: {
          "&:hover": {
            "@media (hover: none)": {
              backgroundColor: "transparent",
            },
          },
        },
      },
    ],
  })),
);
const W = <L />;
const q = <D />;
const J = <T />;
const ro = u.forwardRef(function (e, r) {
  const t = I({
    props: e,
    name: "MuiCheckbox",
  });
  const {
    checkedIcon: a = W,
    color: l = "primary",
    icon: i = q,
    indeterminate: n = false,
    indeterminateIcon: p = J,
    size: c = "medium",
    disableRipple: d = false,
    className: M,
    slots: h = {},
    slotProps: b = {},
    ...g
  } = t;
  const k = n ? p : i;
  const w = n ? p : a;
  const f = {
    ...t,
    disableRipple: d,
    color: l,
    indeterminate: n,
    size: c,
  };
  const S = K(f);
  const x = b.input;
  const [G, $] = H("root", {
    ref: r,
    elementType: Q,
    className: P(S.root, M),
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      slots: h,
      slotProps: b,
      ...g,
    },
    ownerState: f,
    additionalProps: {
      type: "checkbox",
      icon: u.cloneElement(k, {
        fontSize: k.props.fontSize ?? c,
      }),
      checkedIcon: u.cloneElement(w, {
        fontSize: w.props.fontSize ?? c,
      }),
      disableRipple: d,
      slots: h,
      slotProps: {
        input: O(typeof x == "function" ? x(f) : x, {
          "data-indeterminate": n,
        }),
      },
    },
  });
  return <G {...$} classes={S} />;
});
function X(o) {
  return z("MuiFormGroup", o);
}
F("MuiFormGroup", ["root", "row", "error"]);
const Y = (o) => {
  const { classes: e, row: r, error: t } = o;
  return R(
    {
      root: ["root", r && "row", t && "error"],
    },
    X,
    e,
  );
};
const Z = j("div", {
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
  variants: [
    {
      props: {
        row: true,
      },
      style: {
        flexDirection: "row",
      },
    },
  ],
});
const to = u.forwardRef(function (e, r) {
  const t = I({
    props: e,
    name: "MuiFormGroup",
  });
  const { className: a, row: l = false, ...i } = t;
  const n = E();
  const p = N({
    props: t,
    muiFormControl: n,
    states: ["error"],
  });
  const c = {
    ...t,
    row: l,
    error: p.error,
  };
  const d = Y(c);
  return <Z className={P(d.root, a)} ownerState={c} ref={r} {...i} />;
});
export { ro as C, to as F };
