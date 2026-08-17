import {
  ab as Q,
  am as W,
  r as N,
  aY as se,
  G as z,
  j as b,
  a8 as E,
  I as Y,
  K as R,
  aD as re,
  aQ as ae,
  F as le,
  T as K,
  H as O,
  a3 as J,
} from "./index-BM3ZINIl.jsx";
import { u as V, f as ne } from "./TextField-D8vc_sXz.jsx";
function ie(o) {
  return Q("PrivateSwitchBase", o);
}
W("PrivateSwitchBase", [
  "root",
  "checked",
  "disabled",
  "input",
  "edgeStart",
  "edgeEnd",
]);
const ce = (o) => {
  const { classes: t, checked: l, disabled: r, edge: n } = o;
  const u = {
    root: ["root", l && "checked", r && "disabled", n && `edge${E(n)}`],
    input: ["input"],
  };
  return Y(u, ie, t);
};
const de = R(re, {
  name: "MuiSwitchBase",
})({
  padding: 9,
  borderRadius: "50%",
  variants: [
    {
      props: {
        edge: "start",
        size: "small",
      },
      style: {
        marginLeft: -3,
      },
    },
    {
      props: ({ edge: o, ownerState: t }) =>
        o === "start" && t.size !== "small",
      style: {
        marginLeft: -12,
      },
    },
    {
      props: {
        edge: "end",
        size: "small",
      },
      style: {
        marginRight: -3,
      },
    },
    {
      props: ({ edge: o, ownerState: t }) => o === "end" && t.size !== "small",
      style: {
        marginRight: -12,
      },
    },
  ],
});
const pe = R("input", {
  name: "MuiSwitchBase",
  shouldForwardProp: ae,
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1,
});
const Ce = N.forwardRef(function (t, l) {
  const {
    autoFocus: r,
    checked: n,
    checkedIcon: u,
    defaultChecked: i,
    disabled: v,
    disableFocusRipple: y = false,
    edge: U = false,
    icon: L,
    id: T,
    name: D,
    onBlur: I,
    onChange: F,
    onFocus: S,
    readOnly: w,
    required: A = false,
    tabIndex: $,
    type: c,
    value: f,
    slots: h = {},
    slotProps: x = {},
    ...j
  } = t;
  const { nativeButton: g, ...C } = j;
  const [B, q] = se({
    controlled: n,
    default: !!i,
    name: "SwitchBase",
    state: "checked",
  });
  const s = V();
  const d = (e) => {
    if (S) {
      S(e);
    }
    if (s && s.onFocus) {
      s.onFocus(e);
    }
  };
  const m = (e) => {
    if (I) {
      I(e);
    }
    if (s && s.onBlur) {
      s.onBlur(e);
    }
  };
  const X = (e) => {
    if (e.nativeEvent.defaultPrevented || w) {
      return;
    }
    const a = e.target.checked;
    q(a);
    if (F) {
      F(e, a);
    }
  };
  let k = v;
  if (s && typeof k === "undefined") {
    k = s.disabled;
  }
  const Z = c === "checkbox" || c === "radio";
  const M = {
    ...t,
    checked: B,
    disabled: k,
    disableFocusRipple: y,
    edge: U,
  };
  const H = ce(M);
  const G = {
    slots: h,
    slotProps: x,
  };
  const [_, ee] = z("root", {
    ref: l,
    elementType: de,
    className: H.root,
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      ...G,
      component: "span",
      ...C,
    },
    getSlotProps: (e) => ({
      ...e,
      onFocus: (a) => {
        var p;
        if ((p = e.onFocus) != null) {
          p.call(e, a);
        }
        d(a);
      },
      onBlur: (a) => {
        var p;
        if ((p = e.onBlur) != null) {
          p.call(e, a);
        }
        m(a);
      },
    }),
    ownerState: M,
    additionalProps: {
      centerRipple: true,
      focusRipple: !y,
      role: undefined,
      tabIndex: null,
    },
  });
  const [_Component, te] = z("input", {
    elementType: pe,
    className: H.input,
    externalForwardedProps: G,
    getSlotProps: (e) => ({
      ...e,
      onChange: (a) => {
        var p;
        if ((p = e.onChange) != null) {
          p.call(e, a);
        }
        X(a);
      },
    }),
    ownerState: M,
    additionalProps: {
      autoFocus: r,
      checked: n,
      defaultChecked: i,
      disabled: k,
      id: Z ? T : undefined,
      name: D,
      readOnly: w,
      required: A,
      tabIndex: $,
      type: c,
      ...(c === "checkbox" && f === undefined
        ? {}
        : {
            value: f,
          }),
    },
  });
  return (
    <_ {...ee}>
      <_Component {...te} />
      {B ? u : L}
    </_>
  );
});
function ue(o) {
  return Q("MuiFormControlLabel", o);
}
const P = W("MuiFormControlLabel", [
  "root",
  "labelPlacementStart",
  "labelPlacementTop",
  "labelPlacementBottom",
  "disabled",
  "label",
  "error",
  "required",
  "asterisk",
]);
const me = (o) => {
  const {
    classes: t,
    disabled: l,
    labelPlacement: r,
    error: n,
    required: u,
  } = o;
  const i = {
    root: [
      "root",
      l && "disabled",
      `labelPlacement${E(r)}`,
      n && "error",
      u && "required",
    ],
    label: ["label", l && "disabled"],
    asterisk: ["asterisk", n && "error"],
  };
  return Y(i, ue, t);
};
const _Component4 = R("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (o, t) => {
    const { ownerState: l } = o;
    return [
      {
        [`& .${P.label}`]: t.label,
      },
      t.root,
      t[`labelPlacement${E(l.labelPlacement)}`],
    ];
  },
})(
  J(({ theme: o }) => ({
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    verticalAlign: "middle",
    WebkitTapHighlightColor: "transparent",
    marginLeft: -11,
    marginRight: 16,
    [`&.${P.disabled}`]: {
      cursor: "default",
    },
    [`& .${P.label}`]: {
      [`&.${P.disabled}`]: {
        color: (o.vars || o).palette.text.disabled,
      },
    },
    variants: [
      {
        props: {
          labelPlacement: "start",
        },
        style: {
          flexDirection: "row-reverse",
          marginRight: -11,
        },
      },
      {
        props: {
          labelPlacement: "top",
        },
        style: {
          flexDirection: "column-reverse",
        },
      },
      {
        props: {
          labelPlacement: "bottom",
        },
        style: {
          flexDirection: "column",
        },
      },
      {
        props: ({ labelPlacement: t }) =>
          t === "start" || t === "top" || t === "bottom",
        style: {
          marginLeft: 16,
        },
      },
    ],
  })),
);
const _Component3 = R("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk",
})(
  J(({ theme: o }) => ({
    [`&.${P.error}`]: {
      color: (o.vars || o).palette.error.main,
    },
  })),
);
const Pe = N.forwardRef(function (t, l) {
  const r = le({
    props: t,
    name: "MuiFormControlLabel",
  });
  const {
    checked: n,
    className: u,
    control: i,
    disabled: v,
    disableTypography: y,
    inputRef: U,
    label: L,
    labelPlacement: T = "end",
    name: D,
    onChange: I,
    required: F,
    slots: S = {},
    slotProps: w = {},
    value: A,
    ...$
  } = r;
  const c = V();
  const f = v ?? i.props.disabled ?? (c == null ? undefined : c.disabled);
  const h = F ?? i.props.required;
  const x = {
    disabled: f,
    required: h,
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((m) => {
    if (typeof i.props[m] === "undefined" && typeof r[m] !== "undefined") {
      x[m] = r[m];
    }
  });
  const j = ne({
    props: r,
    muiFormControl: c,
    states: ["error"],
  });
  const g = {
    ...r,
    disabled: f,
    labelPlacement: T,
    required: h,
    error: j.error,
  };
  const C = me(g);
  const B = {
    slots: S,
    slotProps: w,
  };
  const [_Component2, s] = z("typography", {
    elementType: K,
    externalForwardedProps: B,
    ownerState: g,
  });
  let d = L;
  if (d != null && d.type !== K && !y) {
    d = (
      <_Component2
        component="span"
        {...s}
        className={O(C.label, s == null ? undefined : s.className)}
      >
        {d}
      </_Component2>
    );
  }
  return (
    <_Component4 className={O(C.root, u)} ownerState={g} ref={l} {...$}>
      {N.cloneElement(i, x)}
      {h ? (
        <div>
          {d}
          <_Component3 ownerState={g} aria-hidden={true} className={C.asterisk}>
             *
          </_Component3>
        </div>
      ) : (
        d
      )}
    </_Component4>
  );
});
export { Pe as F, Ce as S };
