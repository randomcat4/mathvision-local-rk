import {
  ab as j,
  am as I,
  r as u,
  F as M,
  j as i,
  H as B,
  I as z,
  K as S,
  T as F,
  aQ as A,
  G as D,
  a8 as x,
  a3 as C,
  aV as N,
  E as O,
  _ as R,
  A as U,
} from "./index-BM3ZINIl.jsx";
import { S as V } from "./FormControlLabel-CQvCddOM.jsx";
import { D as _Component4, a as E, b as H, c as W } from "./MChip-DiH8NXBU.jsx";
function _(t) {
  return j("MuiDialogContentText", t);
}
I("MuiDialogContentText", ["root"]);
const L = (t) => {
  const { classes: o } = t;
  const a = z(
    {
      root: ["root"],
    },
    _,
    o,
  );
  return {
    ...o,
    ...a,
  };
};
const X = S(F, {
  shouldForwardProp: (t) => A(t) || t === "classes",
  name: "MuiDialogContentText",
  slot: "Root",
})({});
const G = u.forwardRef(function (o, s) {
  const a = M({
    props: o,
    name: "MuiDialogContentText",
  });
  const { children: d, className: r, ...c } = a;
  const n = L(c);
  return (
    <X
      component="p"
      variant="body1"
      color="textSecondary"
      ref={s}
      ownerState={c}
      className={B(n.root, r)}
      {...a}
      classes={n}
    />
  );
});
function K(t) {
  return j("MuiSwitch", t);
}
const e = I("MuiSwitch", [
  "root",
  "edgeStart",
  "edgeEnd",
  "switchBase",
  "colorPrimary",
  "colorSecondary",
  "sizeSmall",
  "sizeMedium",
  "checked",
  "disabled",
  "input",
  "thumb",
  "track",
]);
const Q = (t) => {
  const { classes: o, edge: s, size: a, color: d, checked: r, disabled: c } = t;
  const n = {
    root: ["root", s && `edge${x(s)}`, `size${x(a)}`],
    switchBase: ["switchBase", `color${x(d)}`, r && "checked", c && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"],
  };
  const f = z(n, K, o);
  return {
    ...o,
    ...f,
  };
};
const J = S("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (t, o) => {
    const { ownerState: s } = t;
    return [o.root, s.edge && o[`edge${x(s.edge)}`], o[`size${x(s.size)}`]];
  },
})({
  display: "inline-flex",
  width: 58,
  height: 38,
  overflow: "hidden",
  padding: 12,
  boxSizing: "border-box",
  position: "relative",
  flexShrink: 0,
  zIndex: 0,
  verticalAlign: "middle",
  "@media print": {
    colorAdjust: "exact",
  },
  variants: [
    {
      props: {
        edge: "start",
      },
      style: {
        marginLeft: -8,
      },
    },
    {
      props: {
        edge: "end",
      },
      style: {
        marginRight: -8,
      },
    },
    {
      props: {
        size: "small",
      },
      style: {
        width: 40,
        height: 24,
        padding: 7,
        [`& .${e.thumb}`]: {
          width: 16,
          height: 16,
        },
        [`& .${e.switchBase}`]: {
          padding: 4,
          [`&.${e.checked}`]: {
            transform: "translateX(16px)",
          },
        },
      },
    },
  ],
});
const Y = S(V, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (t, o) => {
    const { ownerState: s } = t;
    return [
      o.switchBase,
      {
        [`& .${e.input}`]: o.input,
      },
      s.color !== "default" && o[`color${x(s.color)}`],
    ];
  },
})(
  C(({ theme: t }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    color: t.vars
      ? t.vars.palette.Switch.defaultColor
      : `${t.palette.mode === "light" ? t.palette.common.white : t.palette.grey[300]}`,
    transition: t.transitions.create(["left", "transform"], {
      duration: t.transitions.duration.shortest,
    }),
    [`&.${e.checked}`]: {
      transform: "translateX(20px)",
    },
    [`&.${e.disabled}`]: {
      color: t.vars
        ? t.vars.palette.Switch.defaultDisabledColor
        : `${t.palette.mode === "light" ? t.palette.grey[100] : t.palette.grey[600]}`,
    },
    [`&.${e.checked} + .${e.track}`]: {
      opacity: 0.5,
    },
    [`&.${e.disabled} + .${e.track}`]: {
      opacity: t.vars
        ? t.vars.opacity.switchTrackDisabled
        : `${t.palette.mode === "light" ? 0.12 : 0.2}`,
    },
    [`& .${e.input}`]: {
      left: "-100%",
      width: "300%",
    },
  })),
  C(({ theme: t }) => ({
    "&:hover": {
      backgroundColor: t.alpha(
        (t.vars || t).palette.action.active,
        (t.vars || t).palette.action.hoverOpacity,
      ),
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    variants: [
      ...Object.entries(t.palette)
        .filter(N(["light"]))
        .map(([o]) => ({
          props: {
            color: o,
          },
          style: {
            [`&.${e.checked}`]: {
              color: (t.vars || t).palette[o].main,
              "&:hover": {
                backgroundColor: t.alpha(
                  (t.vars || t).palette[o].main,
                  (t.vars || t).palette.action.hoverOpacity,
                ),
                "@media (hover: none)": {
                  backgroundColor: "transparent",
                },
              },
              [`&.${e.disabled}`]: {
                color: t.vars
                  ? t.vars.palette.Switch[`${o}DisabledColor`]
                  : `${t.palette.mode === "light" ? t.lighten(t.palette[o].main, 0.62) : t.darken(t.palette[o].main, 0.55)}`,
              },
            },
            [`&.${e.checked} + .${e.track}`]: {
              backgroundColor: (t.vars || t).palette[o].main,
            },
          },
        })),
    ],
  })),
);
const Z = S("span", {
  name: "MuiSwitch",
  slot: "Track",
})(
  C(({ theme: t }) => ({
    height: "100%",
    width: "100%",
    borderRadius: 7,
    boxSizing: "border-box",
    border: "1px solid transparent",
    zIndex: -1,
    transition: t.transitions.create(["opacity", "background-color"], {
      duration: t.transitions.duration.shortest,
    }),
    backgroundColor: t.vars
      ? t.vars.palette.common.onBackground
      : `${t.palette.mode === "light" ? t.palette.common.black : t.palette.common.white}`,
    opacity: t.vars
      ? t.vars.opacity.switchTrack
      : `${t.palette.mode === "light" ? 0.38 : 0.3}`,
  })),
);
const tt = S("span", {
  name: "MuiSwitch",
  slot: "Thumb",
})(
  C(({ theme: t }) => ({
    boxShadow: (t.vars || t).shadows[1],
    backgroundColor: "currentColor",
    boxSizing: "border-box",
    border: "1px solid transparent",
    width: 20,
    height: 20,
    borderRadius: "50%",
  })),
);
const nt = u.forwardRef(function (o, s) {
  const a = M({
    props: o,
    name: "MuiSwitch",
  });
  const {
    className: d,
    color: r = "primary",
    edge: c = false,
    size: n = "medium",
    sx: f,
    slots: g = {},
    slotProps: l = {},
    ...m
  } = a;
  const p = {
    ...a,
    color: r,
    edge: c,
    size: n,
  };
  const h = Q(p);
  const b = {
    slots: g,
    slotProps: l,
  };
  const [$, k] = D("root", {
    className: B(h.root, d),
    elementType: J,
    externalForwardedProps: b,
    ownerState: p,
    additionalProps: {
      sx: f,
    },
  });
  const [_Component, T] = D("thumb", {
    className: h.thumb,
    elementType: tt,
    externalForwardedProps: b,
    ownerState: p,
  });
  const v = <_Component {...T} />;
  const [_Component2, P] = D("track", {
    className: h.track,
    elementType: Z,
    externalForwardedProps: b,
    ownerState: p,
  });
  return (
    <$ {...k}>
      <Y
        type="checkbox"
        icon={v}
        checkedIcon={v}
        ref={s}
        ownerState={p}
        {...m}
        classes={{
          ...h,
          root: h.switchBase,
        }}
        slots={{
          ...(g.switchBase && {
            root: g.switchBase,
          }),
          ...(g.input && {
            input: g.input,
          }),
        }}
        slotProps={{
          ...(l.switchBase && {
            root:
              typeof l.switchBase == "function"
                ? l.switchBase(p)
                : l.switchBase,
          }),
          input: {
            role: "switch",
          },
          ...(l.input && {
            input: typeof l.input == "function" ? l.input(p) : l.input,
          }),
        }}
      />
      <_Component2 {...P} />
    </$>
  );
});
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = [
  [
    "path",
    {
      d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
      key: "18mbvz",
    },
  ],
  [
    "path",
    {
      d: "M6.453 15h11.094",
      key: "3shlmq",
    },
  ],
  [
    "path",
    {
      d: "M8.5 2h7",
      key: "csnxdl",
    },
  ],
];
const rt = O("flask-conical", ot);
const ct = (t) => {
  const [o, s] = u.useState(null);
  const a = u.useCallback(() => {
    s(null);
  }, []);
  const d = u.useCallback((n) => {
    s(n);
  }, []);
  const r = o !== null ? t(o, a) : null;
  const c = r ? <_Component3 {...r} open={true} onClose={a} /> : null;
  return {
    activate: d,
    close: a,
    confirmationDialog: c,
    isOpen: o !== null,
  };
};
function _Component3({
  open: t,
  title: o,
  message: s,
  cancelLabel: a = "Cancel",
  confirmLabel: d,
  onClose: r,
  onConfirm: c,
  isPending: n = false,
  pendingConfirmLabel: f,
  cancelVariant: g = "text",
  confirmAutoFocus: l = false,
  confirmColor: m = "primary",
  confirmStartIcon: p,
}) {
  const h = u.useId();
  const b = u.useRef(false);
  const [$, k] = u.useState(false);
  const w = n || $;
  const T = u.useCallback(async () => {
    if (!n && !b.current) {
      b.current = true;
      k(true);
      try {
        await c();
      } finally {
        b.current = false;
        k(false);
      }
    }
  }, [n, c]);
  const v = `${h}-title`;
  const y = `${h}-description`;
  return (
    <_Component4
      open={t}
      onClose={w ? undefined : r}
      aria-labelledby={v}
      aria-describedby={y}
      maxWidth="xs"
      fullWidth={true}
    >
      <E
        sx={{
          textAlign: "center",
        }}
        id={v}
      >
        {o}
      </E>
      <H
        sx={{
          textAlign: "center",
        }}
      >
        <G id={y} variant="body2">
          {s}
        </G>
      </H>
      <W>
        <R
          type="button"
          color="secondary"
          variant={g}
          disabled={w}
          onClick={r}
          fullWidth={true}
        >
          {a}
        </R>
        <R
          type="button"
          color={m}
          variant="contained"
          disabled={w}
          startIcon={p}
          autoFocus={l}
          onClick={() => void T()}
          fullWidth={true}
        >
          {w ? (f ?? d) : d}
        </R>
      </W>
    </_Component4>
  );
}
const lt = U(
  <path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1M14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1h-5c-.55 0-1 .45-1 1" />,
);
export { _Component3 as C, rt as F, lt as O, nt as S, ct as u };
