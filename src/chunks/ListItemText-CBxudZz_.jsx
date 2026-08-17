import {
  r as L,
  F as N,
  L as F,
  G as u,
  H as k,
  T as p,
  j as T,
  I as B,
  J as E,
  K as M,
  N as c,
  P as g,
} from "./index-BM3ZINIl.jsx";
const U = (e) => {
  const { classes: s, inset: o, primary: a, secondary: y, dense: d } = e;
  return B(
    {
      root: ["root", o && "inset", d && "dense", a && y && "multiline"],
      primary: ["primary"],
      secondary: ["secondary"],
    },
    E,
    s,
  );
};
const D = M("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, s) => {
    const { ownerState: o } = e;
    return [
      {
        [`& .${c.primary}`]: s.primary,
      },
      {
        [`& .${c.secondary}`]: s.secondary,
      },
      s.root,
      o.inset && s.inset,
      o.primary && o.secondary && s.multiline,
      o.dense && s.dense,
    ];
  },
})({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4,
  [`.${g.root}:where(& .${c.primary})`]: {
    display: "block",
  },
  [`.${g.root}:where(& .${c.secondary})`]: {
    display: "block",
  },
  variants: [
    {
      props: ({ ownerState: e }) => e.primary && e.secondary,
      style: {
        marginTop: 6,
        marginBottom: 6,
      },
    },
    {
      props: ({ ownerState: e }) => e.inset,
      style: {
        paddingLeft: 56,
      },
    },
  ],
});
const ListItemText = L.forwardRef(function (s, o) {
  const a = N({
    props: s,
    name: "MuiListItemText",
  });
  const {
    children: y,
    className: d,
    disableTypography: n = false,
    inset: P = false,
    primary: f,
    secondary: v,
    slots: I = {},
    slotProps: S = {},
    ...C
  } = a;
  const { dense: h } = L.useContext(F);
  let t = f ?? y;
  let r = v;
  const i = {
    ...a,
    disableTypography: n,
    inset: P,
    primary: !!t,
    secondary: !!r,
    dense: h,
  };
  const m = U(i);
  const x = {
    slots: I,
    slotProps: S,
  };
  const [_Component, w] = u("root", {
    className: k(m.root, d),
    elementType: D,
    externalForwardedProps: {
      ...x,
      ...C,
    },
    ownerState: i,
    ref: o,
  });
  const [R, l] = u("primary", {
    className: m.primary,
    elementType: p,
    externalForwardedProps: x,
    ownerState: i,
  });
  const [$, j] = u("secondary", {
    className: m.secondary,
    elementType: p,
    externalForwardedProps: x,
    ownerState: i,
  });
  if (t != null && t.type !== p && !n) {
    t = (
      <R
        variant={h ? "body2" : "body1"}
        component={l != null && l.variant ? undefined : "span"}
        {...l}
      >
        {t}
      </R>
    );
  }
  if (r != null && r.type !== p && !n) {
    r = (
      <$ variant="body2" color="textSecondary" {...j}>
        {r}
      </$>
    );
  }
  return (
    <_Component {...w}>
      {t}
      {r}
    </_Component>
  );
});
export { ListItemText as L };
