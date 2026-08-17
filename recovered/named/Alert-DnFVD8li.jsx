import {
  ab as V,
  am as E,
  A as c,
  j as e,
  r as U,
  F as W,
  G as n,
  H as Z,
  bn as D,
  a8 as G,
  I as K,
  K as g,
  Q,
  a3 as q,
  aV as v,
} from "./index-BM3ZINIl.js";
function J(t) {
  return V("MuiAlert", t);
}
const M = E("MuiAlert", [
  "root",
  "action",
  "icon",
  "message",
  "filled",
  "colorSuccess",
  "colorInfo",
  "colorWarning",
  "colorError",
  "outlined",
  "standard",
]);
const X = c(
  <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" />,
);
const Y = c(
  <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />,
);
const _ = c(
  <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />,
);
const _Component = c(
  <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z" />,
);
const ot = c(
  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />,
);
const et = (t) => {
  const { variant: s, color: a, severity: o, classes: i } = t;
  const u = {
    root: ["root", `color${G(a || o)}`, `${s}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"],
  };
  return K(u, J, i);
};
const st = g(Q, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (t, s) => {
    const { ownerState: a } = t;
    return [s.root, s[a.variant]];
  },
})(
  q(({ theme: t }) => {
    const s = t.palette.mode === "light" ? t.darken : t.lighten;
    const a = t.palette.mode === "light" ? t.lighten : t.darken;
    return {
      ...t.typography.body2,
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px",
      variants: [
        ...Object.entries(t.palette)
          .filter(v(["light"]))
          .map(([o]) => ({
            props: {
              colorSeverity: o,
              variant: "standard",
            },
            style: {
              color: t.vars
                ? t.vars.palette.Alert[`${o}Color`]
                : s(t.palette[o].light, 0.6),
              backgroundColor: t.vars
                ? t.vars.palette.Alert[`${o}StandardBg`]
                : a(t.palette[o].light, 0.9),
              [`& .${M.icon}`]: t.vars
                ? {
                    color: t.vars.palette.Alert[`${o}IconColor`],
                  }
                : {
                    color: t.palette[o].main,
                  },
            },
          })),
        ...Object.entries(t.palette)
          .filter(v(["light"]))
          .map(([o]) => ({
            props: {
              colorSeverity: o,
              variant: "outlined",
            },
            style: {
              color: t.vars
                ? t.vars.palette.Alert[`${o}Color`]
                : s(t.palette[o].light, 0.6),
              border: `1px solid ${(t.vars || t).palette[o].light}`,
              [`& .${M.icon}`]: t.vars
                ? {
                    color: t.vars.palette.Alert[`${o}IconColor`],
                  }
                : {
                    color: t.palette[o].main,
                  },
            },
          })),
        ...Object.entries(t.palette)
          .filter(v(["dark"]))
          .map(([o]) => ({
            props: {
              colorSeverity: o,
              variant: "filled",
            },
            style: {
              fontWeight: t.typography.fontWeightMedium,
              ...(t.vars
                ? {
                    color: t.vars.palette.Alert[`${o}FilledColor`],
                    backgroundColor: t.vars.palette.Alert[`${o}FilledBg`],
                  }
                : {
                    backgroundColor:
                      t.palette.mode === "dark"
                        ? t.palette[o].dark
                        : t.palette[o].main,
                    color: t.palette.getContrastText(t.palette[o].main),
                  }),
            },
          })),
      ],
    };
  }),
);
const at = g("div", {
  name: "MuiAlert",
  slot: "Icon",
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9,
});
const lt = g("div", {
  name: "MuiAlert",
  slot: "Message",
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto",
});
const rt = g("div", {
  name: "MuiAlert",
  slot: "Action",
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8,
});
const j = {
  success: <X fontSize="inherit" />,
  warning: <Y fontSize="inherit" />,
  error: <_ fontSize="inherit" />,
  info: <_Component fontSize="inherit" />,
};
const it = U.forwardRef(function (s, a) {
  const o = W({
    props: s,
    name: "MuiAlert",
  });
  const {
    action: i,
    children: u,
    className: m,
    closeText: x = "Close",
    color: A,
    icon: C,
    iconMapping: I = j,
    onClose: f,
    role: z = "alert",
    severity: p = "success",
    slotProps: P = {},
    slots: b = {},
    variant: L = "standard",
    ...$
  } = o;
  const l = {
    ...o,
    color: A,
    severity: p,
    variant: L,
    colorSeverity: A || p,
  };
  const d = et(l);
  const r = {
    slots: b,
    slotProps: P,
  };
  const [_Component3, h] = n("root", {
    ref: a,
    shouldForwardComponentProp: true,
    className: Z(d.root, m),
    elementType: st,
    externalForwardedProps: {
      ...r,
      ...$,
    },
    ownerState: l,
    additionalProps: {
      role: z,
      elevation: 0,
    },
  });
  const [R, T] = n("icon", {
    className: d.icon,
    elementType: at,
    externalForwardedProps: r,
    ownerState: l,
  });
  const [_Component2, B] = n("message", {
    className: d.message,
    elementType: lt,
    externalForwardedProps: r,
    ownerState: l,
  });
  const [S, y] = n("action", {
    className: d.action,
    elementType: rt,
    externalForwardedProps: r,
    ownerState: l,
  });
  const [F, O] = n("closeButton", {
    elementType: D,
    externalForwardedProps: r,
    ownerState: l,
  });
  const [H, N] = n("closeIcon", {
    elementType: ot,
    externalForwardedProps: r,
    ownerState: l,
  });
  return (
    <_Component3 {...h}>
      {C !== false ? <R {...T}>{C || I[p] || j[p]}</R> : null}
      <_Component2 {...B}>{u}</_Component2>
      {i != null ? <S {...y}>{i}</S> : null}
      {i == null && f ? (
        <S {...y}>
          <F
            size="small"
            aria-label={x}
            title={x}
            color="inherit"
            onClick={f}
            {...O}
          >
            <H fontSize="small" {...N} />
          </F>
        </S>
      ) : null}
    </_Component3>
  );
});
export { it as A, ot as C };
