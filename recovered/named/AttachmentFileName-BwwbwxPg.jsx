import {
  A as i,
  j as t,
  B as _Component,
  g as s,
  T as _Component4,
  K as l,
} from "./index-BM3ZINIl.js";
const _Component2 = i(
  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.9 13.98l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68c.25.33.01.8-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02" />,
);
const _Component3 = i(
  <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59zm7 6V3.5L18.5 9H14c-.55 0-1-.45-1-1" />,
);
const c = {
  width: "3rem",
  height: "3rem",
  flex: "0 0 auto",
  overflow: "hidden",
  borderRadius: (e) => e.shape.borderRadiusPx,
  background: (e) => s(e.palette.primary.main, 0.08),
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: (e) => e.palette.primary.main,
};
const h = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};
const u = ({ kind: e, name: a, href: o }) =>
  e === "image" && o ? (
    <_Component sx={c}>
      <_Component component="img" src={o} alt={a} sx={h} />
    </_Component>
  ) : (
    <_Component sx={c}>
      {e === "image" ? (
        <_Component2 fontSize="small" />
      ) : (
        <_Component3 fontSize="small" />
      )}
    </_Component>
  );
const x = 2;
const _Component5 = l("span")({
  minWidth: 0,
  maxWidth: "100%",
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: x,
  overflowWrap: "anywhere",
  wordBreak: "break-word",
});
const b = ({ name: e, variant: a = "subtitle2" }) => (
  <_Component5>
    <_Component4 component="span" variant={a}>
      {e}
    </_Component4>
  </_Component5>
);
export { u as A, b as a };
