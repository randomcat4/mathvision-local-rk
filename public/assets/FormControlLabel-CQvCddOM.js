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
} from "./index-BM3ZINIl.js";
import { u as V, f as ne } from "./TextField-D8vc_sXz.js";
function ie(o) {
  return Q("PrivateSwitchBase", o);
}
W("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const ce = (o) => {
    const { classes: t, checked: l, disabled: r, edge: n } = o,
      u = { root: ["root", l && "checked", r && "disabled", n && `edge${E(n)}`], input: ["input"] };
    return Y(u, ie, t);
  },
  de = R(re, { name: "MuiSwitchBase" })({
    padding: 9,
    borderRadius: "50%",
    variants: [
      { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } },
      {
        props: ({ edge: o, ownerState: t }) => o === "start" && t.size !== "small",
        style: { marginLeft: -12 },
      },
      { props: { edge: "end", size: "small" }, style: { marginRight: -3 } },
      {
        props: ({ edge: o, ownerState: t }) => o === "end" && t.size !== "small",
        style: { marginRight: -12 },
      },
    ],
  }),
  pe = R("input", { name: "MuiSwitchBase", shouldForwardProp: ae })({
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
  }),
  Ce = N.forwardRef(function (t, l) {
    const {
        autoFocus: r,
        checked: n,
        checkedIcon: u,
        defaultChecked: i,
        disabled: v,
        disableFocusRipple: y = !1,
        edge: U = !1,
        icon: L,
        id: T,
        name: D,
        onBlur: I,
        onChange: F,
        onFocus: S,
        readOnly: w,
        required: A = !1,
        tabIndex: $,
        type: c,
        value: f,
        slots: h = {},
        slotProps: x = {},
        ...j
      } = t,
      { nativeButton: g, ...C } = j,
      [B, q] = se({ controlled: n, default: !!i, name: "SwitchBase", state: "checked" }),
      s = V(),
      d = (e) => {
        (S && S(e), s && s.onFocus && s.onFocus(e));
      },
      m = (e) => {
        (I && I(e), s && s.onBlur && s.onBlur(e));
      },
      X = (e) => {
        if (e.nativeEvent.defaultPrevented || w) return;
        const a = e.target.checked;
        (q(a), F && F(e, a));
      };
    let k = v;
    s && typeof k > "u" && (k = s.disabled);
    const Z = c === "checkbox" || c === "radio",
      M = { ...t, checked: B, disabled: k, disableFocusRipple: y, edge: U },
      H = ce(M),
      G = { slots: h, slotProps: x },
      [_, ee] = z("root", {
        ref: l,
        elementType: de,
        className: H.root,
        shouldForwardComponentProp: !0,
        externalForwardedProps: { ...G, component: "span", ...C },
        getSlotProps: (e) => ({
          ...e,
          onFocus: (a) => {
            var p;
            ((p = e.onFocus) == null || p.call(e, a), d(a));
          },
          onBlur: (a) => {
            var p;
            ((p = e.onBlur) == null || p.call(e, a), m(a));
          },
        }),
        ownerState: M,
        additionalProps: { centerRipple: !0, focusRipple: !y, role: void 0, tabIndex: null },
      }),
      [oe, te] = z("input", {
        elementType: pe,
        className: H.input,
        externalForwardedProps: G,
        getSlotProps: (e) => ({
          ...e,
          onChange: (a) => {
            var p;
            ((p = e.onChange) == null || p.call(e, a), X(a));
          },
        }),
        ownerState: M,
        additionalProps: {
          autoFocus: r,
          checked: n,
          defaultChecked: i,
          disabled: k,
          id: Z ? T : void 0,
          name: D,
          readOnly: w,
          required: A,
          tabIndex: $,
          type: c,
          ...(c === "checkbox" && f === void 0 ? {} : { value: f }),
        },
      });
    return b.jsxs(_, { ...ee, children: [b.jsx(oe, { ...te }), B ? u : L] });
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
  ]),
  me = (o) => {
    const { classes: t, disabled: l, labelPlacement: r, error: n, required: u } = o,
      i = {
        root: ["root", l && "disabled", `labelPlacement${E(r)}`, n && "error", u && "required"],
        label: ["label", l && "disabled"],
        asterisk: ["asterisk", n && "error"],
      };
    return Y(i, ue, t);
  },
  be = R("label", {
    name: "MuiFormControlLabel",
    slot: "Root",
    overridesResolver: (o, t) => {
      const { ownerState: l } = o;
      return [{ [`& .${P.label}`]: t.label }, t.root, t[`labelPlacement${E(l.labelPlacement)}`]];
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
      [`&.${P.disabled}`]: { cursor: "default" },
      [`& .${P.label}`]: { [`&.${P.disabled}`]: { color: (o.vars || o).palette.text.disabled } },
      variants: [
        {
          props: { labelPlacement: "start" },
          style: { flexDirection: "row-reverse", marginRight: -11 },
        },
        { props: { labelPlacement: "top" }, style: { flexDirection: "column-reverse" } },
        { props: { labelPlacement: "bottom" }, style: { flexDirection: "column" } },
        {
          props: ({ labelPlacement: t }) => t === "start" || t === "top" || t === "bottom",
          style: { marginLeft: 16 },
        },
      ],
    })),
  ),
  fe = R("span", { name: "MuiFormControlLabel", slot: "Asterisk" })(
    J(({ theme: o }) => ({ [`&.${P.error}`]: { color: (o.vars || o).palette.error.main } })),
  ),
  Pe = N.forwardRef(function (t, l) {
    const r = le({ props: t, name: "MuiFormControlLabel" }),
      {
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
      } = r,
      c = V(),
      f = v ?? i.props.disabled ?? (c == null ? void 0 : c.disabled),
      h = F ?? i.props.required,
      x = { disabled: f, required: h };
    ["checked", "name", "onChange", "value", "inputRef"].forEach((m) => {
      typeof i.props[m] > "u" && typeof r[m] < "u" && (x[m] = r[m]);
    });
    const j = ne({ props: r, muiFormControl: c, states: ["error"] }),
      g = { ...r, disabled: f, labelPlacement: T, required: h, error: j.error },
      C = me(g),
      B = { slots: S, slotProps: w },
      [q, s] = z("typography", { elementType: K, externalForwardedProps: B, ownerState: g });
    let d = L;
    return (
      d != null &&
        d.type !== K &&
        !y &&
        (d = b.jsx(q, {
          component: "span",
          ...s,
          className: O(C.label, s == null ? void 0 : s.className),
          children: d,
        })),
      b.jsxs(be, {
        className: O(C.root, u),
        ownerState: g,
        ref: l,
        ...$,
        children: [
          N.cloneElement(i, x),
          h
            ? b.jsxs("div", {
                children: [
                  d,
                  b.jsxs(fe, {
                    ownerState: g,
                    "aria-hidden": !0,
                    className: C.asterisk,
                    children: [" ", "*"],
                  }),
                ],
              })
            : d,
        ],
      })
    );
  });
export { Pe as F, Ce as S };
