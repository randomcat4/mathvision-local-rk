import {
  r as n,
  F as m,
  L as I,
  j as p,
  H as x,
  I as u,
  a4 as f,
  K as g,
  a3 as L,
} from "./index-BM3ZINIl.js";
const d = (t) => {
  const { alignItems: s, classes: o } = t;
  return u(
    {
      root: ["root", s === "flex-start" && "alignItemsFlexStart"],
    },
    f,
    o,
  );
};
const _Component = g("div", {
  name: "MuiListItemIcon",
  slot: "Root",
  overridesResolver: (t, s) => {
    const { ownerState: o } = t;
    return [s.root, o.alignItems === "flex-start" && s.alignItemsFlexStart];
  },
})(
  L(({ theme: t }) => ({
    minWidth: t.spacing(4.5),
    color: (t.vars || t).palette.action.active,
    flexShrink: 0,
    display: "inline-flex",
    variants: [
      {
        props: {
          alignItems: "flex-start",
        },
        style: {
          marginTop: 8,
        },
      },
    ],
  })),
);
const ListItemIcon = n.forwardRef(function (s, o) {
  const e = m({
    props: s,
    name: "MuiListItemIcon",
  });
  const { className: r, ...i } = e;
  const l = n.useContext(I);
  const a = {
    ...e,
    alignItems: l.alignItems,
  };
  const c = d(a);
  return <_Component className={x(c.root, r)} ownerState={a} ref={o} {...i} />;
});
export { ListItemIcon as L };
