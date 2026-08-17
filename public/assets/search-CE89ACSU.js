import {
  ab as S,
  am as h,
  r as n,
  F as m,
  j as x,
  H as k,
  a8 as u,
  I as C,
  K as L,
  a3 as R,
  p as v,
  b5 as M,
  ar as j,
  E as p,
} from "./index-BM3ZINIl.js";
function E(e) {
  return S("MuiListSubheader", e);
}
h("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const z = (e) => {
    const { classes: t, color: s, disableGutters: o, inset: r, disableSticky: i } = e,
      a = {
        root: [
          "root",
          s !== "default" && `color${u(s)}`,
          !o && "gutters",
          r && "inset",
          !i && "sticky",
        ],
      };
    return C(a, E, t);
  },
  U = L("li", {
    name: "MuiListSubheader",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: s } = e;
      return [
        t.root,
        s.color !== "default" && t[`color${u(s.color)}`],
        !s.disableGutters && t.gutters,
        s.inset && t.inset,
        !s.disableSticky && t.sticky,
      ];
    },
  })(
    R(({ theme: e }) => ({
      boxSizing: "border-box",
      lineHeight: "48px",
      listStyle: "none",
      color: (e.vars || e).palette.text.secondary,
      fontFamily: e.typography.fontFamily,
      fontWeight: e.typography.fontWeightMedium,
      fontSize: e.typography.pxToRem(14),
      variants: [
        { props: { color: "primary" }, style: { color: (e.vars || e).palette.primary.main } },
        { props: { color: "inherit" }, style: { color: "inherit" } },
        {
          props: ({ ownerState: t }) => !t.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 },
        },
        { props: ({ ownerState: t }) => t.inset, style: { paddingLeft: 72 } },
        {
          props: ({ ownerState: t }) => !t.disableSticky,
          style: {
            position: "sticky",
            top: 0,
            zIndex: 1,
            backgroundColor: (e.vars || e).palette.background.paper,
          },
        },
      ],
    })),
  ),
  _ = n.forwardRef(function (t, s) {
    const o = m({ props: t, name: "MuiListSubheader" }),
      {
        className: r,
        color: i = "default",
        component: a = "li",
        disableGutters: d = !1,
        disableSticky: y = !1,
        inset: f = !1,
        ...b
      } = o,
      c = { ...o, color: i, component: a, disableGutters: d, disableSticky: y, inset: f },
      g = z(c);
    return x.jsx(U, { as: a, className: k(g.root, r), ref: s, ownerState: c, ...b });
  });
function l(e, t) {
  return e.findAll(t.filters).map((s) => (t.select ? t.select(s) : s.state));
}
function w(e = {}, t) {
  const s = v().getMutationCache(),
    o = n.useRef(e),
    r = n.useRef(null);
  return (
    r.current === null && (r.current = l(s, e)),
    n.useEffect(() => {
      o.current = e;
    }),
    n.useSyncExternalStore(
      n.useCallback(
        (i) =>
          s.subscribe(() => {
            const a = M(r.current, l(s, o.current));
            r.current !== a && ((r.current = a), j.schedule(i));
          }),
        [s],
      ),
      () => r.current,
      () => r.current,
    )
  );
}
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  F = p("chevron-up", G);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  $ = p("search", I);
export { F as C, _ as L, $ as S, w as u };
