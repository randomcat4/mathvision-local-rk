import {
  r as h,
  j as W,
  H as k,
  a7 as v,
  a8 as c,
  a9 as R,
  I as G,
  aa as $,
  ab as M,
  F as P,
  K as S,
} from "./index-BM3ZINIl.jsx";
const T = $();
const j = v("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (e, s) => {
    const { ownerState: o } = e;
    return [
      s.root,
      s[`maxWidth${c(String(o.maxWidth))}`],
      o.fixed && s.fixed,
      o.disableGutters && s.disableGutters,
    ];
  },
});
const y = (e) =>
  R({
    props: e,
    name: "MuiContainer",
    defaultTheme: T,
  });
const L = (e, s) => {
  const o = (i) => M(s, i);
  const { classes: u, fixed: p, disableGutters: l, maxWidth: t } = e;
  const a = {
    root: [
      "root",
      t && `maxWidth${c(String(t))}`,
      p && "fixed",
      l && "disableGutters",
    ],
  };
  return G(a, o, u);
};
function N(e = {}) {
  const {
    createStyledComponent: s = j,
    useThemeProps: o = y,
    componentName: u = "MuiContainer",
  } = e;
  const _Component = s(
    ({ theme: t, ownerState: a }) => ({
      width: "100%",
      marginLeft: "auto",
      boxSizing: "border-box",
      marginRight: "auto",
      ...(!a.disableGutters && {
        paddingLeft: t.spacing(2),
        paddingRight: t.spacing(2),
        [t.breakpoints.up("sm")]: {
          paddingLeft: t.spacing(3),
          paddingRight: t.spacing(3),
        },
      }),
    }),
    ({ theme: t, ownerState: a }) =>
      a.fixed &&
      Object.keys(t.breakpoints.values).reduce((i, r) => {
        const d = r;
        const n = t.breakpoints.values[d];
        if (n !== 0) {
          i[t.breakpoints.up(d)] = {
            maxWidth: `${n}${t.breakpoints.unit}`,
          };
        }
        return i;
      }, {}),
    ({ theme: t, ownerState: a }) => ({
      ...(a.maxWidth === "xs" && {
        [t.breakpoints.up("xs")]: {
          maxWidth: Math.max(t.breakpoints.values.xs, 444),
        },
      }),
      ...(a.maxWidth &&
        a.maxWidth !== "xs" && {
          [t.breakpoints.up(a.maxWidth)]: {
            maxWidth: `${t.breakpoints.values[a.maxWidth]}${t.breakpoints.unit}`,
          },
        }),
    }),
  );
  return h.forwardRef(function (a, i) {
    const r = o(a);
    const {
      className: d,
      component: n = "div",
      disableGutters: m = false,
      fixed: b = false,
      maxWidth: f = "lg",
      classes: U,
      ...C
    } = r;
    const x = {
      ...r,
      component: n,
      disableGutters: m,
      fixed: b,
      maxWidth: f,
    };
    const g = L(x, u);
    return (
      <_Component
        as={n}
        ownerState={x}
        className={k(g.root, d)}
        ref={i}
        {...C}
      />
    );
  });
}
const Container = N({
  createStyledComponent: S("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, s) => {
      const { ownerState: o } = e;
      return [
        s.root,
        s[`maxWidth${c(String(o.maxWidth))}`],
        o.fixed && s.fixed,
        o.disableGutters && s.disableGutters,
      ];
    },
  }),
  useThemeProps: (e) =>
    P({
      props: e,
      name: "MuiContainer",
    }),
});
export { Container as C };
