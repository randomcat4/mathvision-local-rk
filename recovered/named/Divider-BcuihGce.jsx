import {
  r as m,
  F as w,
  j as v,
  H as y,
  I as A,
  a2 as D,
  K as g,
  a3 as f,
} from "./index-BM3ZINIl.js";
const R = (r) => {
  const {
    absolute: t,
    children: e,
    classes: n,
    flexItem: s,
    orientation: i,
    textAlign: l,
    variant: o,
  } = r;
  return A(
    {
      root: [
        "root",
        t && "absolute",
        o,
        i === "vertical" && "vertical",
        s && "flexItem",
        e && "withChildren",
        l === "right" && i !== "vertical" && "textAlignRight",
        l === "left" && i !== "vertical" && "textAlignLeft",
      ],
      wrapper: ["wrapper", i === "vertical" && "wrapperVertical"],
    },
    D,
    n,
  );
};
const L = g("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (r, t) => {
    const { ownerState: e } = r;
    return [
      t.root,
      e.absolute && t.absolute,
      t[e.variant],
      e.orientation === "vertical" && t.vertical,
      e.flexItem && t.flexItem,
      e.children && t.withChildren,
      e.textAlign === "right" &&
        e.orientation !== "vertical" &&
        t.textAlignRight,
      e.textAlign === "left" && e.orientation !== "vertical" && t.textAlignLeft,
    ];
  },
})(
  f(({ theme: r }) => ({
    margin: 0,
    flexShrink: 0,
    borderWidth: 0,
    borderStyle: "solid",
    borderColor: (r.vars || r).palette.divider,
    borderBottomWidth: "thin",
    variants: [
      {
        props: {
          absolute: true,
        },
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
        },
      },
      {
        props: {
          variant: "inset",
        },
        style: {
          marginLeft: 72,
        },
      },
      {
        props: {
          variant: "middle",
          orientation: "horizontal",
        },
        style: {
          marginLeft: r.spacing(2),
          marginRight: r.spacing(2),
        },
      },
      {
        props: {
          variant: "middle",
          orientation: "vertical",
        },
        style: {
          marginTop: r.spacing(1),
          marginBottom: r.spacing(1),
        },
      },
      {
        props: {
          orientation: "vertical",
        },
        style: {
          height: "100%",
          borderBottomWidth: 0,
          borderRightWidth: "thin",
        },
      },
      {
        props: {
          flexItem: true,
        },
        style: {
          alignSelf: "stretch",
          height: "auto",
        },
      },
      {
        props: ({ ownerState: t }) => !!t.children,
        style: {
          display: "flex",
          textAlign: "center",
          border: 0,
          borderTopStyle: "solid",
          borderLeftStyle: "solid",
          "&::before, &::after": {
            content: '""',
            alignSelf: "center",
          },
        },
      },
      {
        props: ({ ownerState: t }) =>
          t.children && t.orientation !== "vertical",
        style: {
          "&::before, &::after": {
            width: "100%",
            borderTop: `thin solid ${(r.vars || r).palette.divider}`,
            borderTopStyle: "inherit",
          },
        },
      },
      {
        props: ({ ownerState: t }) =>
          t.orientation === "vertical" && t.children,
        style: {
          flexDirection: "column",
          "&::before, &::after": {
            height: "100%",
            borderLeft: `thin solid ${(r.vars || r).palette.divider}`,
            borderLeftStyle: "inherit",
          },
        },
      },
      {
        props: ({ ownerState: t }) =>
          t.textAlign === "right" && t.orientation !== "vertical",
        style: {
          "&::before": {
            width: "90%",
          },
          "&::after": {
            width: "10%",
          },
        },
      },
      {
        props: ({ ownerState: t }) =>
          t.textAlign === "left" && t.orientation !== "vertical",
        style: {
          "&::before": {
            width: "10%",
          },
          "&::after": {
            width: "90%",
          },
        },
      },
    ],
  })),
);
const S = g("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (r, t) => {
    const { ownerState: e } = r;
    return [t.wrapper, e.orientation === "vertical" && t.wrapperVertical];
  },
})(
  f(({ theme: r }) => ({
    display: "inline-block",
    paddingLeft: `calc(${r.spacing(1)} * 1.2)`,
    paddingRight: `calc(${r.spacing(1)} * 1.2)`,
    whiteSpace: "nowrap",
    variants: [
      {
        props: {
          orientation: "vertical",
        },
        style: {
          paddingTop: `calc(${r.spacing(1)} * 1.2)`,
          paddingBottom: `calc(${r.spacing(1)} * 1.2)`,
        },
      },
    ],
  })),
);
const Divider = m.forwardRef(function (t, e) {
  const n = w({
    props: t,
    name: "MuiDivider",
  });
  const {
    absolute: s = false,
    children: i,
    className: l,
    orientation: o = "horizontal",
    component: a = i || o === "vertical" ? "div" : "hr",
    flexItem: h = false,
    role: p = a !== "hr" ? "separator" : undefined,
    textAlign: b = "center",
    variant: x = "fullWidth",
    ...u
  } = n;
  const c = {
    ...n,
    absolute: s,
    component: a,
    flexItem: h,
    orientation: o,
    role: p,
    textAlign: b,
    variant: x,
  };
  const d = R(c);
  return (
    <L
      as={a}
      className={y(d.root, l)}
      role={p}
      ref={e}
      ownerState={c}
      aria-orientation={
        p === "separator" && (a !== "hr" || o === "vertical") ? o : undefined
      }
      {...u}
    >
      {i ? (
        <S className={d.wrapper} ownerState={c}>
          {i}
        </S>
      ) : null}
    </L>
  );
});
export { Divider as D };
