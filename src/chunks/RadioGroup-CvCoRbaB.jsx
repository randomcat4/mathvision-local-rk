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
} from "./index-BM3ZINIl.jsx";
import { S as X } from "./FormControlLabel-CQvCddOM.jsx";
import { u as _, c as oo } from "./TextField-D8vc_sXz.jsx";
import { F as _Component4 } from "./FormGroup-BsLWbxpH.jsx";
const to = U(
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />,
);
const ao = U(
  <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z" />,
);
const _Component3 = b("span", {
  name: "MuiRadioButtonIcon",
  shouldForwardProp: $,
})({
  position: "relative",
  display: "flex",
});
const _Component = b(to, {
  name: "MuiRadioButtonIcon",
})({
  transform: "scale(1)",
});
const _Component2 = b(ao, {
  name: "MuiRadioButtonIcon",
})(
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
        props: {
          checked: true,
        },
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
  const { checked: e = false, classes: t = {}, fontSize: s } = o;
  const r = {
    ...o,
    checked: e,
  };
  return (
    <_Component3 className={t.root} ownerState={r}>
      <_Component fontSize={s} className={t.background} ownerState={r} />
      <_Component2 fontSize={s} className={t.dot} ownerState={r} />
    </_Component3>
  );
}
const T = i.createContext(undefined);
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
]);
const co = (o) => {
  const { classes: e, color: t, size: s } = o;
  const r = {
    root: ["root", `color${S(t)}`, s !== "medium" && `size${S(s)}`],
  };
  return {
    ...e,
    ...D(r, lo, e),
  };
};
const uo = b(X, {
  shouldForwardProp: (o) => $(o) || o === "classes",
  name: "MuiRadio",
  slot: "Root",
  overridesResolver: (o, e) => {
    const { ownerState: t } = o;
    return [
      e.root,
      t.size !== "medium" && e[`size${S(t.size)}`],
      e[`color${S(t.color)}`],
    ];
  },
})(
  V(({ theme: o }) => ({
    color: (o.vars || o).palette.text.secondary,
    [`&.${N.disabled}`]: {
      color: (o.vars || o).palette.action.disabled,
    },
    variants: [
      {
        props: {
          color: "default",
          disabled: false,
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
        .filter(G())
        .map(([e]) => ({
          props: {
            color: e,
            disabled: false,
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
        .filter(G())
        .map(([e]) => ({
          props: {
            color: e,
            disabled: false,
          },
          style: {
            [`&.${N.checked}`]: {
              color: (o.vars || o).palette[e].main,
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
function po(o, e) {
  if (typeof e == "object" && e !== null) {
    return o === e;
  } else {
    return String(o) === String(e);
  }
}
const fo = <H checked={true} />;
const mo = <H />;
const bo = i.forwardRef(function (e, t) {
  const s = Q({
    props: e,
    name: "MuiRadio",
  });
  const {
    checked: r,
    checkedIcon: f = fo,
    color: x = "primary",
    icon: m = mo,
    name: l,
    onChange: P,
    size: c = "medium",
    className: u,
    disabled: h,
    disableRipple: R = false,
    slots: d = {},
    slotProps: C = {},
    ...v
  } = s;
  const g = _();
  let a = h;
  if (g && typeof a === "undefined") {
    a = g.disabled;
  }
  a ??= false;
  const k = {
    ...s,
    disabled: a,
    disableRipple: R,
    color: x,
    size: c,
  };
  const w = co(k);
  const p = io();
  let I = r;
  const A = oo(P, p && p.onChange);
  let j = l;
  if (p) {
    if (typeof I === "undefined") {
      I = po(p.value, s.value);
    }
    if (typeof j === "undefined") {
      j = p.name;
    }
  }
  const z = C.input;
  const [J, K] = Y("root", {
    ref: t,
    elementType: uo,
    className: q(w.root, u),
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      slots: d,
      slotProps: C,
      ...v,
    },
    getSlotProps: (y) => ({
      ...y,
      onChange: (F, ...M) => {
        var B;
        if ((B = y.onChange) != null) {
          B.call(y, F, ...M);
        }
        A(F, ...M);
      },
    }),
    ownerState: k,
    additionalProps: {
      type: "radio",
      icon: i.cloneElement(m, {
        fontSize: m.props.fontSize ?? c,
      }),
      checkedIcon: i.cloneElement(f, {
        fontSize: f.props.fontSize ?? c,
      }),
      disabled: a,
      name: j,
      checked: I,
      slots: d,
      slotProps: {
        input: typeof z == "function" ? z(k) : z,
      },
    },
  });
  return <J {...K} classes={w} />;
});
function Ro(o) {
  return E("MuiRadioGroup", o);
}
O("MuiRadioGroup", ["root", "row", "error"]);
const Co = (o) => {
  const { classes: e, row: t, error: s } = o;
  return D(
    {
      root: ["root", t && "row", s && "error"],
    },
    Ro,
    e,
  );
};
const xo = i.forwardRef(function (e, t) {
  const {
    actions: s,
    children: r,
    className: f,
    defaultValue: x,
    name: m,
    onChange: l,
    value: P,
    ...c
  } = e;
  const u = i.useRef(null);
  const h = Co(e);
  const [R, d] = Z({
    controlled: P,
    default: x,
    name: "RadioGroup",
  });
  i.useImperativeHandle(
    s,
    () => ({
      focus: () => {
        let a = u.current.querySelector("input:not(:disabled):checked");
        a ||= u.current.querySelector("input:not(:disabled)");
        if (a) {
          a.focus();
        }
      },
    }),
    [],
  );
  const C = L(t, u);
  const v = W(m);
  const g = i.useMemo(
    () => ({
      name: v,
      onChange(a) {
        d(a.target.value);
        if (l) {
          l(a, a.target.value);
        }
      },
      value: R,
    }),
    [v, l, d, R],
  );
  return (
    <T.Provider value={g}>
      <_Component4 role="radiogroup" ref={C} className={q(h.root, f)} {...c}>
        {r}
      </_Component4>
    </T.Provider>
  );
});
export { xo as R, bo as a };
