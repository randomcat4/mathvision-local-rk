import {
  r as f,
  ab as Z,
  am as _,
  F as G,
  G as O,
  H as K,
  j as S,
  a8 as n,
  I as q,
  K as T,
  a3 as J,
  aV as Q,
} from "./index-BM3ZINIl.js";
function z(a) {
  const o = f.useRef({});
  return (
    f.useEffect(() => {
      o.current = a;
    }),
    o.current
  );
}
function aa(a) {
  const { badgeContent: o, invisible: t = !1, max: r = 99, showZero: e = !1 } = a,
    l = z({ badgeContent: o, max: r });
  let s = t;
  t === !1 && o === 0 && !e && (s = !0);
  const { badgeContent: i, max: c = r } = s ? l : a,
    g = i && Number(i) > c ? `${c}+` : i;
  return { badgeContent: i, invisible: s, max: c, displayValue: g };
}
function oa(a) {
  return Z("MuiBadge", a);
}
const ta = _("MuiBadge", [
    "root",
    "badge",
    "dot",
    "standard",
    "anchorOriginTopRight",
    "anchorOriginBottomRight",
    "anchorOriginTopLeft",
    "anchorOriginBottomLeft",
    "invisible",
    "colorError",
    "colorInfo",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorWarning",
    "overlapRectangular",
    "overlapCircular",
    "anchorOriginTopLeftCircular",
    "anchorOriginTopLeftRectangular",
    "anchorOriginTopRightCircular",
    "anchorOriginTopRightRectangular",
    "anchorOriginBottomLeftCircular",
    "anchorOriginBottomLeftRectangular",
    "anchorOriginBottomRightCircular",
    "anchorOriginBottomRightRectangular",
  ]),
  u = 10,
  v = 4,
  ra = (a) => {
    const { color: o, anchorOrigin: t, invisible: r, overlap: e, variant: l, classes: s = {} } = a,
      i = {
        root: ["root"],
        badge: [
          "badge",
          l,
          r && "invisible",
          `anchorOrigin${n(t.vertical)}${n(t.horizontal)}`,
          `anchorOrigin${n(t.vertical)}${n(t.horizontal)}${n(e)}`,
          `overlap${n(e)}`,
          o !== "default" && `color${n(o)}`,
        ],
      };
    return q(i, oa, s);
  },
  ea = T("span", { name: "MuiBadge", slot: "Root" })({
    position: "relative",
    display: "inline-flex",
    verticalAlign: "middle",
    flexShrink: 0,
  }),
  na = T("span", {
    name: "MuiBadge",
    slot: "Badge",
    overridesResolver: (a, o) => {
      const { ownerState: t } = a;
      return [
        o.badge,
        o[t.variant],
        o[
          `anchorOrigin${n(t.anchorOrigin.vertical)}${n(t.anchorOrigin.horizontal)}${n(t.overlap)}`
        ],
        t.color !== "default" && o[`color${n(t.color)}`],
        t.invisible && o.invisible,
      ];
    },
  })(
    J(({ theme: a }) => ({
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      position: "absolute",
      boxSizing: "border-box",
      fontFamily: a.typography.fontFamily,
      fontWeight: a.typography.fontWeightMedium,
      fontSize: a.typography.pxToRem(12),
      minWidth: u * 2,
      lineHeight: 1,
      padding: "0 6px",
      height: u * 2,
      borderRadius: u,
      zIndex: 1,
      transition: a.transitions.create("transform", {
        easing: a.transitions.easing.easeInOut,
        duration: a.transitions.duration.enteringScreen,
      }),
      variants: [
        ...Object.entries(a.palette)
          .filter(Q(["contrastText"]))
          .map(([o]) => ({
            props: { color: o },
            style: {
              backgroundColor: (a.vars || a).palette[o].main,
              color: (a.vars || a).palette[o].contrastText,
            },
          })),
        {
          props: { variant: "dot" },
          style: { borderRadius: v, height: v * 2, minWidth: v * 2, padding: 0 },
        },
        {
          props: { invisible: !0 },
          style: {
            transition: a.transitions.create("transform", {
              easing: a.transitions.easing.easeInOut,
              duration: a.transitions.duration.leavingScreen,
            }),
          },
        },
        {
          style: ({ ownerState: o }) => {
            const { vertical: t, horizontal: r } = o.anchorOrigin,
              e = o.overlap === "circular" ? "14%" : 0;
            return {
              "--Badge-translateX": r === "right" ? "50%" : "-50%",
              "--Badge-translateY": t === "top" ? "-50%" : "50%",
              top: t === "top" ? e : "initial",
              bottom: t === "bottom" ? e : "initial",
              right: r === "right" ? e : "initial",
              left: r === "left" ? e : "initial",
              transform: "scale(1) translate(var(--Badge-translateX), var(--Badge-translateY))",
              transformOrigin: `${r === "right" ? "100%" : "0%"} ${t === "top" ? "0%" : "100%"}`,
              [`&.${ta.invisible}`]: {
                transform: "scale(0) translate(var(--Badge-translateX), var(--Badge-translateY))",
              },
            };
          },
        },
      ],
    })),
  );
function $(a) {
  return {
    vertical: (a == null ? void 0 : a.vertical) ?? "top",
    horizontal: (a == null ? void 0 : a.horizontal) ?? "right",
  };
}
const sa = f.forwardRef(function (o, t) {
  const r = G({ props: o, name: "MuiBadge" }),
    {
      anchorOrigin: e,
      className: l,
      classes: s,
      component: i,
      children: c,
      overlap: g = "rectangular",
      color: b = "default",
      invisible: w = !1,
      max: F = 99,
      badgeContent: h,
      slots: I,
      slotProps: D,
      showZero: m = !1,
      variant: p = "standard",
      ...j
    } = r,
    {
      badgeContent: x,
      invisible: A,
      max: L,
      displayValue: M,
    } = aa({ max: F, invisible: w, badgeContent: h, showZero: m }),
    U = z({ anchorOrigin: $(e), color: b, overlap: g, variant: p, badgeContent: h }),
    B = A || (x == null && p !== "dot"),
    { color: V = b, overlap: W = g, anchorOrigin: N, variant: P = p } = B ? U : r,
    k = $(N),
    y = P !== "dot" ? M : void 0,
    d = {
      ...r,
      badgeContent: x,
      invisible: B,
      max: L,
      displayValue: y,
      showZero: m,
      anchorOrigin: k,
      color: V,
      overlap: W,
      variant: P,
    },
    R = ra(d),
    C = { slots: I, slotProps: D },
    [E, H] = O("root", {
      elementType: ea,
      externalForwardedProps: { ...C, ...j },
      ownerState: d,
      className: K(R.root, l),
      ref: t,
      additionalProps: { as: i },
    }),
    [X, Y] = O("badge", {
      elementType: na,
      externalForwardedProps: C,
      ownerState: d,
      className: R.badge,
    });
  return S.jsxs(E, { ...H, children: [c, S.jsx(X, { ...Y, children: y })] });
});
export { sa as B, z as u };
