import {
  ab as c,
  am as d,
  r as C,
  F as u,
  j as p,
  H as m,
  I as f,
  K as x,
  Q as y,
} from "./index-BM3ZINIl.js";
function M(s) {
  return c("MuiCard", s);
}
d("MuiCard", ["root"]);
const R = (s) => {
    const { classes: t } = s;
    return f({ root: ["root"] }, M, t);
  },
  U = x(y, { name: "MuiCard", slot: "Root" })({ overflow: "hidden" }),
  j = C.forwardRef(function (t, a) {
    const o = u({ props: t, name: "MuiCard" }),
      { className: n, raised: e = !1, ...l } = o,
      r = { ...o, raised: e },
      i = R(r);
    return p.jsx(U, {
      className: m(i.root, n),
      elevation: e ? 8 : void 0,
      ref: a,
      ownerState: r,
      ...l,
    });
  });
export { j as C };
