import { ab as n, am as c, r as u, F as m, j as p, H as T, I as g, K as y, T as A, a3 as f } from "./index-BM3ZINIl.js";
function h(t) {
  return n("MuiAlertTitle", t);
}
c("MuiAlertTitle", ["root"]);
const x = t => {
  const {
    classes: s
  } = t;
  return g({
    root: ["root"]
  }, h, s);
};
const C = y(A, {
  name: "MuiAlertTitle",
  slot: "Root"
})(f(({
  theme: t
}) => ({
  fontWeight: t.typography.fontWeightMedium,
  marginTop: -2
})));
const d = u.forwardRef(function (s, e) {
  const o = m({
    props: s,
    name: "MuiAlertTitle"
  });
  const {
    className: a,
    ...l
  } = o;
  const r = o;
  const i = x(r);
  return <C gutterBottom={true} component="div" ownerState={r} ref={e} className={T(i.root, a)} {...l} />;
});
export { d as A };
