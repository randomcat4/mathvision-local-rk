import {
  A as go,
  j as p,
  ab as z,
  am as L,
  r as d,
  F as O,
  aJ as bo,
  aD as io,
  H as $,
  G as R,
  a8 as m,
  I as A,
  K as C,
  aQ as fo,
  a3 as lo,
  aV as _,
  aw as vo,
  Q as co,
  bu as yo,
  T as xo,
  E as ko,
  a6 as _Component5,
} from "./index-BM3ZINIl.js";
import { e as Co, M as Do, B as So } from "./TextField-D8vc_sXz.js";
const $o = go(
  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />,
);
function mo(o) {
  return z("MuiChip", o);
}
const e = L("MuiChip", [
  "root",
  "sizeSmall",
  "sizeMedium",
  "colorDefault",
  "colorError",
  "colorInfo",
  "colorPrimary",
  "colorSecondary",
  "colorSuccess",
  "colorWarning",
  "disabled",
  "clickable",
  "deletable",
  "outlined",
  "filled",
  "avatar",
  "icon",
  "label",
  "deleteIcon",
  "focusVisible",
]);
const wo = (o) => {
  const {
    classes: a,
    disabled: t,
    size: r,
    color: i,
    onDelete: s,
    clickable: c,
    variant: n,
  } = o;
  const u = {
    root: [
      "root",
      n,
      t && "disabled",
      `size${m(r)}`,
      `color${m(i)}`,
      c && "clickable",
      s && "deletable",
    ],
    label: ["label"],
    avatar: ["avatar"],
    icon: ["icon"],
    deleteIcon: ["deleteIcon"],
  };
  return A(u, mo, a);
};
const Ro = C("div", {
  name: "MuiChip",
  slot: "Root",
  shouldForwardProp: (o) =>
    fo(o) && o !== "focusableWhenDisabled" && o !== "skipFocusWhenDisabled",
  overridesResolver: (o, a) => {
    const { ownerState: t } = o;
    const { color: r, clickable: i, onDelete: s, size: c, variant: n } = t;
    return [
      {
        [`& .${e.avatar}`]: a.avatar,
      },
      {
        [`& .${e.icon}`]: a.icon,
      },
      {
        [`& .${e.deleteIcon}`]: a.deleteIcon,
      },
      a.root,
      a[`size${m(c)}`],
      a[`color${m(r)}`],
      i && a.clickable,
      s && a.deletable,
      a[n],
    ];
  },
})(
  lo(({ theme: o }) => {
    const a =
      o.palette.mode === "light" ? o.palette.grey[700] : o.palette.grey[300];
    return {
      maxWidth: "100%",
      fontFamily: o.typography.fontFamily,
      fontSize: o.typography.pxToRem(13),
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: 32,
      lineHeight: 1.5,
      color: (o.vars || o).palette.text.primary,
      backgroundColor: (o.vars || o).palette.action.selected,
      borderRadius: 16,
      whiteSpace: "nowrap",
      transition: o.transitions.create(["background-color", "box-shadow"]),
      cursor: "unset",
      outline: 0,
      textDecoration: "none",
      border: 0,
      padding: 0,
      verticalAlign: "middle",
      boxSizing: "border-box",
      [`&.${e.disabled}`]: {
        opacity: (o.vars || o).palette.action.disabledOpacity,
        pointerEvents: "none",
      },
      [`& .${e.avatar}`]: {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: o.vars ? o.vars.palette.Chip.defaultAvatarColor : a,
        fontSize: o.typography.pxToRem(12),
      },
      [`& .${e.icon}`]: {
        marginLeft: 5,
        marginRight: -6,
      },
      [`& .${e.deleteIcon}`]: {
        WebkitTapHighlightColor: "transparent",
        color: o.alpha((o.vars || o).palette.text.primary, 0.26),
        fontSize: 22,
        cursor: "pointer",
        margin: "0 5px 0 -6px",
        "&:hover": {
          color: o.alpha((o.vars || o).palette.text.primary, 0.4),
        },
      },
      variants: [
        {
          props: {
            color: "primary",
          },
          style: {
            [`& .${e.avatar}`]: {
              color: (o.vars || o).palette.primary.contrastText,
              backgroundColor: (o.vars || o).palette.primary.dark,
            },
          },
        },
        {
          props: {
            color: "secondary",
          },
          style: {
            [`& .${e.avatar}`]: {
              color: (o.vars || o).palette.secondary.contrastText,
              backgroundColor: (o.vars || o).palette.secondary.dark,
            },
          },
        },
        {
          props: {
            size: "small",
          },
          style: {
            height: 24,
            [`& .${e.avatar}`]: {
              marginLeft: 4,
              marginRight: -4,
              width: 18,
              height: 18,
              fontSize: o.typography.pxToRem(10),
            },
            [`& .${e.icon}`]: {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4,
            },
            [`& .${e.deleteIcon}`]: {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4,
            },
          },
        },
        ...Object.entries(o.palette)
          .filter(_(["contrastText"]))
          .map(([t]) => ({
            props: {
              color: t,
            },
            style: {
              backgroundColor: (o.vars || o).palette[t].main,
              color: (o.vars || o).palette[t].contrastText,
              [`& .${e.deleteIcon}`]: {
                color: o.alpha((o.vars || o).palette[t].contrastText, 0.7),
                "&:hover, &:active": {
                  color: (o.vars || o).palette[t].contrastText,
                },
              },
            },
          })),
        {
          props: (t) => t.iconColor === t.color,
          style: {
            [`& .${e.icon}`]: {
              color: o.vars ? o.vars.palette.Chip.defaultIconColor : a,
            },
          },
        },
        {
          props: (t) => t.iconColor === t.color && t.color !== "default",
          style: {
            [`& .${e.icon}`]: {
              color: "inherit",
            },
          },
        },
        {
          props: {
            onDelete: true,
          },
          style: {
            [`&.${e.focusVisible}`]: {
              backgroundColor: o.alpha(
                (o.vars || o).palette.action.selected,
                `${(o.vars || o).palette.action.selectedOpacity} + ${(o.vars || o).palette.action.focusOpacity}`,
              ),
            },
          },
        },
        ...Object.entries(o.palette)
          .filter(_(["dark"]))
          .map(([t]) => ({
            props: {
              color: t,
              onDelete: true,
            },
            style: {
              [`&.${e.focusVisible}`]: {
                background: (o.vars || o).palette[t].dark,
              },
            },
          })),
        {
          props: {
            clickable: true,
          },
          style: {
            userSelect: "none",
            WebkitTapHighlightColor: "transparent",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: o.alpha(
                (o.vars || o).palette.action.selected,
                `${(o.vars || o).palette.action.selectedOpacity} + ${(o.vars || o).palette.action.hoverOpacity}`,
              ),
            },
            [`&.${e.focusVisible}`]: {
              backgroundColor: o.alpha(
                (o.vars || o).palette.action.selected,
                `${(o.vars || o).palette.action.selectedOpacity} + ${(o.vars || o).palette.action.focusOpacity}`,
              ),
            },
            "&:active": {
              boxShadow: (o.vars || o).shadows[1],
            },
          },
        },
        ...Object.entries(o.palette)
          .filter(_(["dark"]))
          .map(([t]) => ({
            props: {
              color: t,
              clickable: true,
            },
            style: {
              [`&:hover, &.${e.focusVisible}`]: {
                backgroundColor: (o.vars || o).palette[t].dark,
              },
            },
          })),
        {
          props: {
            variant: "outlined",
          },
          style: {
            backgroundColor: "transparent",
            border: o.vars
              ? `1px solid ${o.vars.palette.Chip.defaultBorder}`
              : `1px solid ${o.palette.mode === "light" ? o.palette.grey[400] : o.palette.grey[700]}`,
            [`&.${e.clickable}:hover`]: {
              backgroundColor: (o.vars || o).palette.action.hover,
            },
            [`&.${e.focusVisible}`]: {
              backgroundColor: (o.vars || o).palette.action.focus,
            },
            [`& .${e.avatar}`]: {
              marginLeft: 4,
            },
            [`& .${e.icon}`]: {
              marginLeft: 4,
            },
            [`& .${e.deleteIcon}`]: {
              marginRight: 5,
            },
          },
        },
        {
          props: {
            size: "small",
            variant: "outlined",
          },
          style: {
            [`& .${e.avatar}`]: {
              marginLeft: 2,
            },
            [`& .${e.icon}`]: {
              marginLeft: 2,
            },
            [`& .${e.deleteIcon}`]: {
              marginRight: 3,
            },
          },
        },
        ...Object.entries(o.palette)
          .filter(_())
          .map(([t]) => ({
            props: {
              variant: "outlined",
              color: t,
            },
            style: {
              color: (o.vars || o).palette[t].main,
              border: `1px solid ${o.alpha((o.vars || o).palette[t].main, 0.7)}`,
              [`&.${e.clickable}:hover`]: {
                backgroundColor: o.alpha(
                  (o.vars || o).palette[t].main,
                  (o.vars || o).palette.action.hoverOpacity,
                ),
              },
              [`&.${e.focusVisible}`]: {
                backgroundColor: o.alpha(
                  (o.vars || o).palette[t].main,
                  (o.vars || o).palette.action.focusOpacity,
                ),
              },
              [`& .${e.deleteIcon}`]: {
                color: o.alpha((o.vars || o).palette[t].main, 0.7),
                "&:hover, &:active": {
                  color: (o.vars || o).palette[t].main,
                },
              },
            },
          })),
      ],
    };
  }),
);
const Po = C("span", {
  name: "MuiChip",
  slot: "Label",
})({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  variants: [
    {
      props: {
        variant: "outlined",
      },
      style: {
        paddingLeft: 11,
        paddingRight: 11,
      },
    },
    {
      props: {
        size: "small",
      },
      style: {
        paddingLeft: 8,
        paddingRight: 8,
      },
    },
    {
      props: {
        size: "small",
        variant: "outlined",
      },
      style: {
        paddingLeft: 7,
        paddingRight: 7,
      },
    },
  ],
});
function no(o) {
  return o.key === "Backspace" || o.key === "Delete";
}
const Y = d.forwardRef(function (a, t) {
  const r = O({
    props: a,
    name: "MuiChip",
  });
  const {
    avatar: i,
    className: s,
    clickable: c,
    color: n = "default",
    component: u,
    deleteIcon: g,
    disabled: v = false,
    icon: b,
    label: P,
    onClick: T,
    onDelete: f,
    onKeyDown: M,
    onKeyUp: W,
    size: X = "medium",
    variant: Q = "filled",
    tabIndex: G,
    skipFocusWhenDisabled: J = false,
    slots: q = {},
    slotProps: U = {},
    ...Z
  } = r;
  const { nativeButton: y, ...h } = Z;
  const I = d.useRef(null);
  const oo = bo(I, t);
  const V = (l) => {
    l.stopPropagation();
    f(l);
  };
  const j = (l) => {
    if (l.currentTarget === l.target && no(l)) {
      l.preventDefault();
    }
    if (M) {
      M(l);
    }
  };
  const ao = (l) => {
    if (l.currentTarget === l.target && f && no(l)) {
      f(l);
    }
    if (W) {
      W(l);
    }
  };
  const x = c !== false && T ? true : c;
  const F = x || f ? io : u || "div";
  const N = {
    ...r,
    component: F,
    disabled: v,
    size: X,
    color: n,
    iconColor: (d.isValidElement(b) && b.props.color) || n,
    onDelete: !!f,
    clickable: x,
    variant: Q,
  };
  const k = wo(N);
  const to =
    F === io
      ? {
          component: u || "div",
          internalNativeButton: false,
          focusVisibleClassName: k.focusVisible,
          ...(f && {
            disableRipple: true,
          }),
          ...(y !== undefined && {
            nativeButton: y,
          }),
        }
      : {};
  let B = null;
  if (f) {
    B =
      g && d.isValidElement(g) ? (
        d.cloneElement(g, {
          className: $(g.props.className, k.deleteIcon),
          onClick: V,
        })
      ) : (
        <$o className={k.deleteIcon} onClick={V} />
      );
  }
  let E = null;
  if (i && d.isValidElement(i)) {
    E = d.cloneElement(i, {
      className: $(k.avatar, i.props.className),
    });
  }
  let K = null;
  if (b && d.isValidElement(b)) {
    K = d.cloneElement(b, {
      className: $(k.icon, b.props.className),
    });
  }
  const H = {
    slots: q,
    slotProps: U,
  };
  const [_Component2, ro] = R("root", {
    elementType: Ro,
    externalForwardedProps: {
      ...H,
      ...h,
    },
    ownerState: N,
    shouldForwardComponentProp: true,
    ref: oo,
    className: $(k.root, s),
    additionalProps: {
      disabled: x && v ? true : undefined,
      tabIndex: J && v ? -1 : G,
      ...to,
    },
    getSlotProps: (l) => ({
      ...l,
      onClick: (D) => {
        var S;
        if ((S = l.onClick) != null) {
          S.call(l, D);
        }
        if (T != null) {
          T(D);
        }
      },
      onKeyDown: (D) => {
        var S;
        if ((S = l.onKeyDown) != null) {
          S.call(l, D);
        }
        j(D);
      },
      onKeyUp: (D) => {
        var S;
        if ((S = l.onKeyUp) != null) {
          S.call(l, D);
        }
        ao(D);
      },
    }),
  });
  const [_Component, uo] = R("label", {
    elementType: Po,
    externalForwardedProps: H,
    ownerState: N,
    className: k.label,
  });
  return (
    <_Component2 as={F} {...ro}>
      {E || K}
      <_Component {...uo}>{P}</_Component>
      {B}
    </_Component2>
  );
});
function To(o) {
  return z("MuiDialog", o);
}
L("MuiDialog", [
  "root",
  "backdrop",
  "scrollPaper",
  "scrollBody",
  "container",
  "paper",
  "paperWidthFalse",
  "paperWidthXs",
  "paperWidthSm",
  "paperWidthMd",
  "paperWidthLg",
  "paperWidthXl",
  "paperFullWidth",
  "paperFullScreen",
]);
const po = d.createContext({});
const Mo = C(So, {
  name: "MuiDialog",
  slot: "Backdrop",
})({
  zIndex: -1,
});
const ho = (o) => {
  const { classes: a, scroll: t, maxWidth: r, fullWidth: i, fullScreen: s } = o;
  const c = {
    root: ["root"],
    backdrop: ["backdrop"],
    container: ["container", `scroll${m(t)}`],
    paper: [
      "paper",
      `paperWidth${m(String(r))}`,
      i && "paperFullWidth",
      s && "paperFullScreen",
    ],
  };
  return A(c, To, a);
};
const Wo = C(Do, {
  name: "MuiDialog",
  slot: "Root",
})({
  "@media print": {
    position: "absolute !important",
  },
});
const Io = C("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (o, a) => {
    const { ownerState: t } = o;
    return [a.container, a[`scroll${m(t.scroll)}`]];
  },
})({
  height: "100%",
  "@media print": {
    height: "auto",
  },
  outline: 0,
  variants: [
    {
      props: {
        scroll: "paper",
      },
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      props: {
        scroll: "body",
      },
      style: {
        overflowY: "auto",
        overflowX: "hidden",
        textAlign: "center",
        "&::after": {
          content: '""',
          display: "inline-block",
          verticalAlign: "middle",
          height: "100%",
          width: "0",
        },
      },
    },
  ],
});
const jo = C(co, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (o, a) => {
    const { ownerState: t } = o;
    return [
      a.paper,
      a[`paperWidth${m(String(t.maxWidth))}`],
      t.fullWidth && a.paperFullWidth,
      t.fullScreen && a.paperFullScreen,
    ];
  },
})(
  lo(({ theme: o }) => ({
    margin: 32,
    position: "relative",
    overflowY: "auto",
    "@media print": {
      overflowY: "visible",
      boxShadow: "none",
    },
    variants: [
      {
        props: {
          scroll: "paper",
        },
        style: {
          display: "flex",
          flexDirection: "column",
          maxHeight: "calc(100% - 64px)",
        },
      },
      {
        props: {
          scroll: "body",
        },
        style: {
          display: "inline-block",
          verticalAlign: "middle",
          textAlign: "initial",
        },
      },
      {
        props: ({ ownerState: a }) => !a.maxWidth,
        style: {
          maxWidth: "calc(100% - 64px)",
        },
      },
      {
        props: {
          maxWidth: "xs",
        },
        style: {
          maxWidth:
            o.breakpoints.unit === "px"
              ? Math.max(o.breakpoints.values.xs, 444)
              : `max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,
        },
      },
      {
        props: {
          maxWidth: "xs",
          scroll: "body",
        },
        style: {
          [o.breakpoints.down(Math.max(o.breakpoints.values.xs, 444) + 64)]: {
            maxWidth: "calc(100% - 64px)",
          },
        },
      },
      ...Object.keys(o.breakpoints.values)
        .filter((a) => a !== "xs")
        .map((a) => ({
          props: {
            maxWidth: a,
          },
          style: {
            maxWidth: `${o.breakpoints.values[a]}${o.breakpoints.unit}`,
          },
        })),
      ...Object.keys(o.breakpoints.values)
        .filter((a) => a !== "xs")
        .map((a) => ({
          props: {
            maxWidth: a,
            scroll: "body",
          },
          style: {
            [o.breakpoints.down(o.breakpoints.values[a] + 64)]: {
              maxWidth: "calc(100% - 64px)",
            },
          },
        })),
      {
        props: ({ ownerState: a }) => a.fullWidth,
        style: {
          width: "calc(100% - 64px)",
        },
      },
      {
        props: ({ ownerState: a }) => a.fullScreen,
        style: {
          margin: 0,
          width: "100%",
          maxWidth: "100%",
          height: "100%",
          maxHeight: "none",
          borderRadius: 0,
        },
      },
      {
        props: ({ ownerState: a }) => a.fullScreen && a.scroll === "body",
        style: {
          margin: 0,
          maxWidth: "100%",
        },
      },
    ],
  })),
);
const Yo = d.forwardRef(function (a, t) {
  const r = O({
    props: a,
    name: "MuiDialog",
  });
  const i = vo();
  const s = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen,
  };
  const {
    "aria-describedby": c,
    "aria-labelledby": n,
    "aria-modal": u = true,
    children: g,
    className: v,
    fullScreen: b = false,
    fullWidth: P = false,
    maxWidth: T = "sm",
    onClick: f,
    onClose: M,
    open: W,
    PaperComponent: X = co,
    role: Q = "dialog",
    scroll: G = "paper",
    slots: J = {},
    slotProps: q = {},
    transitionDuration: U = s,
    ...Z
  } = r;
  const y = {
    ...r,
    fullScreen: b,
    fullWidth: P,
    maxWidth: T,
    scroll: G,
  };
  const h = ho(y);
  const I = d.useRef();
  const oo = (w) => {
    I.current = w.target === w.currentTarget;
  };
  const V = (w) => {
    if (f) {
      f(w);
    }
    if (I.current) {
      I.current = null;
      if (M) {
        M(w, "backdropClick");
      }
    }
  };
  const j = yo(n);
  const ao = d.useMemo(
    () => ({
      titleId: j,
    }),
    [j],
  );
  const x = {
    slots: J,
    slotProps: q,
  };
  const [F, N] = R("root", {
    elementType: Wo,
    shouldForwardComponentProp: true,
    externalForwardedProps: x,
    ownerState: y,
    className: $(h.root, v),
    ref: t,
  });
  const [k, to] = R("backdrop", {
    elementType: Mo,
    shouldForwardComponentProp: true,
    externalForwardedProps: x,
    ownerState: y,
    className: h.backdrop,
  });
  const [B, E] = R("paper", {
    elementType: jo,
    shouldForwardComponentProp: true,
    externalForwardedProps: x,
    ownerState: y,
    className: h.paper,
  });
  const [K, H] = R("container", {
    elementType: Io,
    externalForwardedProps: x,
    ownerState: y,
    className: h.container,
  });
  const [_Component3, ro] = R("transition", {
    elementType: Co,
    externalForwardedProps: x,
    ownerState: y,
    additionalProps: {
      appear: true,
      in: W,
      timeout: U,
      role: "presentation",
    },
  });
  return (
    <F
      closeAfterTransition={true}
      slots={{
        backdrop: k,
      }}
      slotProps={{
        backdrop: {
          transitionDuration: U,
          ...to,
        },
      }}
      onClose={M}
      open={W}
      onClick={V}
      {...N}
      {...Z}
    >
      <_Component3 {...ro}>
        <K onMouseDown={oo} {...H}>
          <B
            as={X}
            elevation={24}
            role={Q}
            aria-describedby={c}
            aria-labelledby={j}
            aria-modal={u}
            {...E}
          >
            <po.Provider value={ao}>{g}</po.Provider>
          </B>
        </K>
      </_Component3>
    </F>
  );
});
function Fo(o) {
  return z("MuiDialogActions", o);
}
L("MuiDialogActions", ["root", "spacing"]);
const No = (o) => {
  const { classes: a, disableSpacing: t } = o;
  return A(
    {
      root: ["root", !t && "spacing"],
    },
    Fo,
    a,
  );
};
const _Component4 = C("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (o, a) => {
    const { ownerState: t } = o;
    return [a.root, !t.disableSpacing && a.spacing];
  },
})({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto",
  variants: [
    {
      props: ({ ownerState: o }) => !o.disableSpacing,
      style: {
        "& > :not(style) ~ :not(style)": {
          marginLeft: 8,
        },
      },
    },
  ],
});
const Xo = d.forwardRef(function (a, t) {
  const r = O({
    props: a,
    name: "MuiDialogActions",
  });
  const { className: i, disableSpacing: s = false, ...c } = r;
  const n = {
    ...r,
    disableSpacing: s,
  };
  const u = No(n);
  return <_Component4 className={$(u.root, i)} ownerState={n} ref={t} {...c} />;
});
function Lo(o) {
  return z("MuiDialogContent", o);
}
L("MuiDialogContent", ["root", "dividers"]);
function Oo(o) {
  return z("MuiDialogTitle", o);
}
const Ao = L("MuiDialogTitle", ["root"]);
const Uo = (o) => {
  const { classes: a, dividers: t } = o;
  return A(
    {
      root: ["root", t && "dividers"],
    },
    Lo,
    a,
  );
};
const Vo = C("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (o, a) => {
    const { ownerState: t } = o;
    return [a.root, t.dividers && a.dividers];
  },
})(
  lo(({ theme: o }) => ({
    flex: "1 1 auto",
    WebkitOverflowScrolling: "touch",
    overflowY: "auto",
    padding: "20px 24px",
    variants: [
      {
        props: ({ ownerState: a }) => a.dividers,
        style: {
          padding: "16px 24px",
          borderTop: `1px solid ${(o.vars || o).palette.divider}`,
          borderBottom: `1px solid ${(o.vars || o).palette.divider}`,
        },
      },
      {
        props: ({ ownerState: a }) => !a.dividers,
        style: {
          [`.${Ao.root} + &`]: {
            paddingTop: 0,
          },
        },
      },
    ],
  })),
);
const Qo = d.forwardRef(function (a, t) {
  const r = O({
    props: a,
    name: "MuiDialogContent",
  });
  const { className: i, dividers: s = false, ...c } = r;
  const n = {
    ...r,
    dividers: s,
  };
  const u = Uo(n);
  return <Vo className={$(u.root, i)} ownerState={n} ref={t} {...c} />;
});
const Bo = (o) => {
  const { classes: a } = o;
  return A(
    {
      root: ["root"],
    },
    Oo,
    a,
  );
};
const Eo = C(xo, {
  name: "MuiDialogTitle",
  slot: "Root",
})({
  padding: "16px 24px",
  flex: "0 0 auto",
});
const Go = d.forwardRef(function (a, t) {
  const r = O({
    props: a,
    name: "MuiDialogTitle",
  });
  const { className: i, id: s, ...c } = r;
  const n = r;
  const u = Bo(n);
  const { titleId: g = s } = d.useContext(po);
  return (
    <Eo
      component="h2"
      className={$(u.root, i)}
      ownerState={n}
      ref={t}
      variant="h6"
      id={s ?? g}
      {...c}
    />
  );
});
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ko = [
  [
    "path",
    {
      d: "M20 6 9 17l-5-5",
      key: "1gmf2c",
    },
  ],
];
const Jo = ko("check", Ko);
const qo = (o) => {
  if (o.link !== undefined) {
    const { link: s, rel: c, target: n, tooltip: u, ...g } = o;
    const v = n ?? "_blank";
    const b = c ?? (v === "_blank" ? "noopener noreferrer" : undefined);
    const P = o.clickable || !!s || !!o.onClick;
    if (u) {
      return (
        <_Component5 title={u}>
          <Y {...g} clickable={P} component="a" href={s} rel={b} target={v} />
        </_Component5>
      );
    } else {
      return (
        <Y {...g} clickable={P} component="a" href={s} rel={b} target={v} />
      );
    }
  }
  const { link: a, tooltip: t, ...r } = o;
  const i = o.clickable || !!a || !!o.onClick;
  if (t) {
    return (
      <_Component5 title={t}>
        <Y {...r} clickable={i} />
      </_Component5>
    );
  } else {
    return <Y {...r} clickable={i} />;
  }
};
export { Jo as C, Yo as D, qo as M, Go as a, Qo as b, Xo as c, Y as d };
