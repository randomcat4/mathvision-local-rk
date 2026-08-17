import {
  r as g,
  ab as O,
  am as H,
  F,
  aY as no,
  G as y,
  H as N,
  j as s,
  I as V,
  K as m,
  Q as ro,
  a3 as A,
  aD as eo,
  A as z,
  S as L,
  T as _Component5,
  B as K,
  g as l,
} from "./index-BM3ZINIl.js";
import { O as _Component7 } from "./OpenInNewRounded-D-7V5TzF.js";
import { M as _Component6 } from "./MChip-DiH8NXBU.js";
import { d as io, g as co } from "./MarkdownHighlights-C-ZhT8z1.js";
const q = g.createContext({});
function lo(o) {
  return O("MuiAccordion", o);
}
const P = H("MuiAccordion", [
  "root",
  "heading",
  "rounded",
  "expanded",
  "disabled",
  "gutters",
  "region",
]);
const po = (o) => {
  const {
    classes: t,
    square: n,
    expanded: r,
    disabled: a,
    disableGutters: e,
  } = o;
  return V(
    {
      root: [
        "root",
        !n && "rounded",
        r && "expanded",
        a && "disabled",
        !e && "gutters",
      ],
      heading: ["heading"],
      region: ["region"],
    },
    lo,
    t,
  );
};
const uo = m(ro, {
  name: "MuiAccordion",
  slot: "Root",
  overridesResolver: (o, t) => {
    const { ownerState: n } = o;
    return [
      {
        [`& .${P.region}`]: t.region,
      },
      t.root,
      !n.square && t.rounded,
      !n.disableGutters && t.gutters,
    ];
  },
})(
  A(({ theme: o }) => {
    const t = {
      duration: o.transitions.duration.shortest,
    };
    return {
      position: "relative",
      transition: o.transitions.create(["margin"], t),
      overflowAnchor: "none",
      "&::before": {
        position: "absolute",
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: (o.vars || o).palette.divider,
        transition: o.transitions.create(["opacity", "background-color"], t),
      },
      "&:first-of-type": {
        "&::before": {
          display: "none",
        },
      },
      [`&.${P.expanded}`]: {
        "&::before": {
          opacity: 0,
        },
        "&:first-of-type": {
          marginTop: 0,
        },
        "&:last-of-type": {
          marginBottom: 0,
        },
        "& + &": {
          "&::before": {
            display: "none",
          },
        },
      },
      [`&.${P.disabled}`]: {
        backgroundColor: (o.vars || o).palette.action.disabledBackground,
      },
    };
  }),
  A(({ theme: o }) => ({
    variants: [
      {
        props: (t) => !t.square,
        style: {
          borderRadius: 0,
          "&:first-of-type": {
            borderTopLeftRadius: (o.vars || o).shape.borderRadius,
            borderTopRightRadius: (o.vars || o).shape.borderRadius,
          },
          "&:last-of-type": {
            borderBottomLeftRadius: (o.vars || o).shape.borderRadius,
            borderBottomRightRadius: (o.vars || o).shape.borderRadius,
            "@supports (-ms-ime-align: auto)": {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            },
          },
        },
      },
      {
        props: (t) => !t.disableGutters,
        style: {
          [`&.${P.expanded}`]: {
            margin: "16px 0",
          },
        },
      },
    ],
  })),
);
const xo = m("h3", {
  name: "MuiAccordion",
  slot: "Heading",
})({
  all: "unset",
});
const go = m("div", {
  name: "MuiAccordion",
  slot: "Region",
})({});
const _Component8 = g.forwardRef(function (t, n) {
  const r = F({
    props: t,
    name: "MuiAccordion",
  });
  const {
    children: a,
    className: e,
    defaultExpanded: i = false,
    disabled: d = false,
    disableGutters: c = false,
    expanded: b,
    onChange: R,
    slots: B = {},
    slotProps: T = {},
    ...W
  } = r;
  const [p, M] = no({
    controlled: b,
    default: i,
    name: "Accordion",
    state: "expanded",
  });
  const k = g.useCallback(
    (to) => {
      M(!p);
      if (R) {
        R(to, !p);
      }
    },
    [p, R, M],
  );
  const [x, ...S] = g.Children.toArray(a);
  const w = g.useMemo(
    () => ({
      expanded: p,
      disabled: d,
      disableGutters: c,
      toggle: k,
    }),
    [p, d, c, k],
  );
  const f = {
    ...r,
    disabled: d,
    disableGutters: c,
    expanded: p,
  };
  const v = po(f);
  const C = {
    slots: B,
    slotProps: T,
  };
  const [E, D] = y("root", {
    elementType: uo,
    externalForwardedProps: {
      ...C,
      ...W,
    },
    className: N(v.root, e),
    shouldForwardComponentProp: true,
    ownerState: f,
    ref: n,
  });
  const [G, u] = y("heading", {
    elementType: xo,
    externalForwardedProps: C,
    className: v.heading,
    ownerState: f,
  });
  const [$, j] = y("transition", {
    elementType: io,
    externalForwardedProps: C,
    ownerState: f,
  });
  const [Z, oo] = y("region", {
    elementType: go,
    externalForwardedProps: C,
    ownerState: f,
    className: v.region,
    additionalProps: {
      "aria-labelledby": x.props.id,
      id: x.props["aria-controls"],
      role: "region",
    },
  });
  return (
    <E {...D}>
      <G {...u}>
        <q.Provider value={w}>{x}</q.Provider>
      </G>
      <$ in={p} timeout="auto" {...j}>
        <Z {...oo}>{S}</Z>
      </$>
    </E>
  );
});
function bo(o) {
  return O("MuiAccordionDetails", o);
}
H("MuiAccordionDetails", ["root"]);
const fo = (o) => {
  const { classes: t } = o;
  return V(
    {
      root: ["root"],
    },
    bo,
    t,
  );
};
const _Component = m("div", {
  name: "MuiAccordionDetails",
  slot: "Root",
})(
  A(({ theme: o }) => ({
    padding: o.spacing(1, 2, 2),
  })),
);
const So = g.forwardRef(function (t, n) {
  const r = F({
    props: t,
    name: "MuiAccordionDetails",
  });
  const { className: a, ...e } = r;
  const i = r;
  const d = fo(i);
  return <_Component className={N(d.root, a)} ref={n} ownerState={i} {...e} />;
});
function Co(o) {
  return O("MuiAccordionSummary", o);
}
const I = H("MuiAccordionSummary", [
  "root",
  "expanded",
  "focusVisible",
  "disabled",
  "gutters",
  "content",
  "expandIconWrapper",
]);
const ho = (o) => {
  const { classes: t, expanded: n, disabled: r, disableGutters: a } = o;
  return V(
    {
      root: ["root", n && "expanded", r && "disabled", !a && "gutters"],
      focusVisible: ["focusVisible"],
      content: ["content", n && "expanded"],
      expandIconWrapper: ["expandIconWrapper", n && "expanded"],
    },
    Co,
    t,
  );
};
const Io = m(eo, {
  name: "MuiAccordionSummary",
  slot: "Root",
})(
  A(({ theme: o }) => {
    const t = {
      duration: o.transitions.duration.shortest,
    };
    return {
      display: "flex",
      width: "100%",
      minHeight: 48,
      padding: o.spacing(0, 2),
      transition: o.transitions.create(["min-height", "background-color"], t),
      [`&.${I.focusVisible}`]: {
        backgroundColor: (o.vars || o).palette.action.focus,
      },
      [`&.${I.disabled}`]: {
        opacity: (o.vars || o).palette.action.disabledOpacity,
      },
      [`&:hover:not(.${I.disabled})`]: {
        cursor: "pointer",
      },
      variants: [
        {
          props: (n) => !n.disableGutters,
          style: {
            [`&.${I.expanded}`]: {
              minHeight: 64,
            },
          },
        },
      ],
    };
  }),
);
const Ao = m("span", {
  name: "MuiAccordionSummary",
  slot: "Content",
})(
  A(({ theme: o }) => ({
    display: "flex",
    textAlign: "start",
    flexGrow: 1,
    margin: "12px 0",
    variants: [
      {
        props: (t) => !t.disableGutters,
        style: {
          transition: o.transitions.create(["margin"], {
            duration: o.transitions.duration.shortest,
          }),
          [`&.${I.expanded}`]: {
            margin: "20px 0",
          },
        },
      },
    ],
  })),
);
const Ro = m("span", {
  name: "MuiAccordionSummary",
  slot: "ExpandIconWrapper",
})(
  A(({ theme: o }) => ({
    display: "flex",
    color: (o.vars || o).palette.action.active,
    transform: "rotate(0deg)",
    transition: o.transitions.create("transform", {
      duration: o.transitions.duration.shortest,
    }),
    [`&.${I.expanded}`]: {
      transform: "rotate(180deg)",
    },
  })),
);
const Mo = g.forwardRef(function (t, n) {
  const r = F({
    props: t,
    name: "MuiAccordionSummary",
  });
  const {
    children: a,
    className: e,
    expandIcon: i,
    focusVisibleClassName: d,
    onClick: c,
    slots: b,
    slotProps: R,
    ...B
  } = r;
  const {
    disabled: T = false,
    disableGutters: W,
    expanded: p,
    toggle: M,
  } = g.useContext(q);
  const k = (u) => {
    if (M) {
      M(u);
    }
    if (c) {
      c(u);
    }
  };
  const x = {
    ...r,
    expanded: p,
    disabled: T,
    disableGutters: W,
  };
  const S = ho(x);
  const w = {
    slots: b,
    slotProps: R,
  };
  const [_Component2, v] = y("root", {
    ref: n,
    shouldForwardComponentProp: true,
    className: N(S.root, e),
    elementType: Io,
    externalForwardedProps: {
      ...w,
      ...B,
    },
    ownerState: x,
    additionalProps: {
      focusRipple: false,
      disableRipple: true,
      internalNativeButton: true,
      disabled: T,
      "aria-expanded": p,
      focusVisibleClassName: N(S.focusVisible, d),
    },
    getSlotProps: (u) => ({
      ...u,
      onClick: ($) => {
        var j;
        if ((j = u.onClick) != null) {
          j.call(u, $);
        }
        k($);
      },
    }),
  });
  const [C, E] = y("content", {
    className: S.content,
    elementType: Ao,
    externalForwardedProps: w,
    ownerState: x,
  });
  const [D, G] = y("expandIconWrapper", {
    className: S.expandIconWrapper,
    elementType: Ro,
    externalForwardedProps: w,
    ownerState: x,
  });
  return (
    <_Component2 {...v}>
      <C {...E}>{a}</C>
      {i && <D {...G}>{i}</D>}
    </_Component2>
  );
});
const _Component3 = z(
  <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />,
);
const _Component4 = z(
  <path d="M19.3 16.9c.58-1.01.95-2.23.51-3.65-.53-1.72-2.04-3.05-3.84-3.22-2.87-.28-5.23 2.07-4.95 4.95.18 1.79 1.5 3.31 3.22 3.84 1.43.44 2.64.07 3.65-.51l2.5 2.5c.39.39 1.01.39 1.4 0s.39-1.01 0-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5M12 20v2C6.48 22 2 17.52 2 12S6.48 2 12 2c4.84 0 8.87 3.44 9.8 8h-2.07c-.64-2.46-2.4-4.47-4.73-5.41V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1H8v2h2v3H9l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.41 3.59 8 8 8" />,
);
const To = /[\p{L}\p{N}_]/u;
const U = (o) => !!o && !!To.test(o);
const Q = (o, t) =>
  Number.isInteger(t) &&
  t >= 0 &&
  t <= o.length &&
  co(o).mathRanges.some((n) => n.start < t && t < n.end);
const ko = (o, t) => t > 0 && t < o.length && U(o[t - 1]) && U(o[t]);
const $o = (o, t) => {
  let n = t;
  while (U(o[n])) {
    n += 1;
  }
  return n;
};
const jo = (o) => `<${o.replace(/>/g, "%3E")}>`;
const Po = (o) =>
  o.replace(/\\/g, "\\\\").replace(/\[/g, "\\[").replace(/\]/g, "\\]");
const No = "assistant-source-citation";
const Bo = "vertexaisearch.cloud.google.com";
const Wo = /(?:\r?\n){1,2}[ \t]{0,3}(?:#{1,6}[ \t]*|(?:[-+*]|\d+[.)])[ \t]*)$/;
const Eo = (o) => ({
  marginTop: o.spacing(1.6),
  borderRadius: o.shape.borderRadiusPx,
  border: `1px solid ${l(o.palette.text.primary, 0.09)}`,
  backgroundColor: l(o.palette.background.paper, 0.54),
  boxShadow: "none",
  "&::before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: `${o.spacing(1.6)} 0 0`,
  },
});
const Do = (o) => ({
  minHeight: "2.5rem",
  padding: o.spacing(0, 1.25),
  "&.Mui-expanded": {
    minHeight: "2.5rem",
  },
  "& .MuiAccordionSummary-content": {
    alignItems: "center",
    justifyContent: "space-between",
    gap: o.spacing(1.2),
    minWidth: 0,
    margin: o.spacing(0.65, 0),
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    margin: o.spacing(0.65, 0),
  },
});
const Go = (o) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: o.spacing(0.75),
  minWidth: 0,
});
const Lo = (o) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: o.spacing(0.85),
  padding: o.spacing(0, 1.25, 1.15),
});
const _o = (o) => ({
  display: "grid",
  gridTemplateColumns: "auto minmax(0, 1fr) auto",
  gap: o.spacing(1.15),
  alignItems: "center",
  minWidth: 0,
  padding: o.spacing(1.1, 1.2),
  borderRadius: o.shape.borderRadiusPx,
  border: `1px solid ${l(o.palette.text.primary, 0.08)}`,
  backgroundColor: l(o.palette.background.default, 0.48),
  color: "inherit",
  textDecoration: "none",
  transition: o.transitions.create(["border-color", "background-color"], {
    duration: o.transitions.duration.shortest,
  }),
  "&:hover": {
    borderColor: l(o.palette.primary.main, 0.22),
    backgroundColor: l(o.palette.primary.main, 0.055),
  },
});
const Uo = (o) => ({
  flexWrap: "wrap",
  gap: o.spacing(0.6),
  marginTop: o.spacing(0.45),
});
const Oo = (o) => ({
  color: o.palette.primary.main,
  opacity: 0.78,
});
const _ = (o) =>
  o.replace(/[-_]+/g, " ").replace(/\b\w/g, (t) => t.toUpperCase());
const Ho = (o) => {
  var t;
  return (
    ((t = o.title) == null ? undefined : t.trim()) || o.domain.trim() || o.url
  );
};
const Y = (o) => {
  var a;
  const t = o.domain
    .trim()
    .replace(/^www\./i, "")
    .replace(/\/+$/g, "");
  const n = (a = o.title) == null ? undefined : a.trim();
  if (t === Bo && n) {
    return n;
  } else {
    return t || new URL(o.url).hostname.replace(/^www\./i, "") || o.url;
  }
};
const Zo = Y;
const J = (o) => o.map((t) => `[${Po(Y(t))}](${jo(t.url)} "${No}")`).join("");
const X = (o) =>
  o
    .filter((t) => t.type === "text")
    .map((t) => t.text ?? "")
    .join("");
const Fo = (o, t) => {
  if (
    t.startIndex === undefined ||
    t.startIndex === null ||
    t.endIndex === undefined ||
    t.endIndex === null ||
    t.startIndex < 0 ||
    t.endIndex < t.startIndex ||
    t.endIndex > o.length
  ) {
    return null;
  }
  let n = t.endIndex;
  if (ko(o, n)) {
    n = $o(o, n);
  }
  const r = o.slice(0, n).match(Wo);
  if ((r == null ? undefined : r.index) !== undefined) {
    n = r.index;
  }
  if (Q(o, n)) {
    return null;
  } else {
    return n;
  }
};
const Vo = (o, t, n) => {
  const r = o.slice(0, t);
  const a = o.slice(t);
  const e = r && !/\s$/.test(r) ? " " : "";
  const i = a && !/^[\s.,;:!?)]/.test(a) && !n.endsWith(" ") ? " " : "";
  return `${r}${e}${n}${i}${a}`;
};
const zo = (o, t, n) => {
  if (t.length === 0 || n.length === 0) {
    return o;
  }
  const r = new Map(t.map((e) => [e.id, e]));
  const a = n
    .map((e, i) => {
      const d = e.sourceIds.map((b) => r.get(b)).filter((b) => b !== undefined);
      const c = Fo(o, e);
      return {
        citationIndex: i,
        insertIndex: c,
        marker: J(d),
      };
    })
    .filter((e) => e.insertIndex !== null && !!e.marker)
    .sort(
      (e, i) =>
        i.insertIndex - e.insertIndex || i.citationIndex - e.citationIndex,
    );
  if (a.length === 0) {
    return o;
  } else {
    return a.reduce((e, i) => Vo(e, i.insertIndex, i.marker), o);
  }
};
const Ko = (o, t, n) => {
  if (t.length === 0 || n.length === 0) {
    return o;
  }
  const r = new Map(t.map((d) => [d.id, d]));
  const a = X(n);
  let e = 0;
  const i = n
    .map((d) => {
      if (d.type === "text") {
        const c = d.text ?? "";
        e += c.length;
        return c;
      }
      if (Q(a, e)) {
        return "";
      } else {
        return J(
          d.sourceIds.map((c) => r.get(c)).filter((c) => c !== undefined),
        );
      }
    })
    .join("");
  if (i.trim()) {
    return i;
  } else {
    return o;
  }
};
const ot = (o) => {
  const t = o.sources ?? [];
  const n = o.textSegments ?? [];
  const r = o.citations ?? [];
  if (t.length === 0) {
    return o.content;
  } else if (r.length > 0 && (n.length === 0 || X(n) === o.content)) {
    return zo(o.content, t, r);
  } else {
    return Ko(o.content, t, n);
  }
};
const tt = (o) => {
  const t = o.sources ?? [];
  const n = new Set();
  for (const r of o.textSegments ?? []) {
    if (r.type === "citation") {
      for (const a of r.sourceIds) {
        n.add(a);
      }
    }
  }
  for (const r of o.citations ?? []) {
    for (const a of r.sourceIds) {
      n.add(a);
    }
  }
  if (n.size > 0) {
    return t.filter((r) => n.has(r.id));
  } else {
    return t.filter((r) => r.status === "used");
  }
};
const nt = ({ sources: o = [] }) => {
  if (o.length === 0) {
    return null;
  }
  const t = `${o.length} ${o.length === 1 ? "source" : "sources"}`;
  return (
    <_Component8 disableGutters={true} sx={Eo}>
      <Mo expandIcon={<_Component3 fontSize="small" />} sx={Do}>
        <L component="span" direction="row" sx={Go}>
          <_Component4 fontSize="small" />
          <_Component5
            component="span"
            variant="assistantSourceSummary"
            color="textPrimary"
          >
            {t}
          </_Component5>
        </L>
      </Mo>
      <So sx={Lo}>
        {o.map((n, r) => (
          <K
            component="a"
            sx={_o}
            href={n.url}
            target="_blank"
            rel="noopener noreferrer"
            key={n.id}
          >
            <_Component6
              label={r + 1}
              sx={{
                borderRadius: 999,
              }}
              variant="outlined"
              color="primary"
            />
            <L
              sx={{
                minWidth: 0,
              }}
            >
              <_Component5 variant="assistantSourceTitle" color="textPrimary">
                {Ho(n)}
              </_Component5>
              <L component="span" direction="row" useFlexGap={true} sx={Uo}>
                <_Component5
                  component="span"
                  variant="assistantSourceMeta"
                  color="textSecondary"
                >
                  {n.domain || n.url}
                </_Component5>
                <_Component5
                  component="span"
                  variant="assistantSourceMeta"
                  color="textSecondary"
                >
                  {_(n.provider)}
                </_Component5>
                <_Component5
                  component="span"
                  variant="assistantSourceMeta"
                  color="textSecondary"
                >
                  {_(n.tool)}
                </_Component5>
                {n.status !== "used" ? (
                  <_Component5
                    component="span"
                    variant="assistantSourceMeta"
                    color="textSecondary"
                  >
                    {_(n.status)}
                  </_Component5>
                ) : null}
              </L>
            </L>
            <_Component7 fontSize="small" sx={Oo} />
          </K>
        ))}
      </So>
    </_Component8>
  );
};
const _Component9 = m(K, {
  shouldForwardProp: (o) => o !== "type" && o !== "isHighlighted",
})(({ theme: o, type: t, isHighlighted: n }) => {
  const r = t === "user";
  const a = l(o.palette.text.primary, 0.08);
  const e = l(o.palette.text.primary, 0.08);
  const i = l(o.palette.primary.main, 0.55);
  const d = o.palette.background.paper;
  const c = r ? `0 14px 34px ${e}` : `0 16px 42px ${e}`;
  return {
    boxSizing: "border-box",
    maxWidth: "100%",
    minWidth: 0,
    borderRadius: o.shape.radiusLgPx,
    padding: o.spacing(1, 2),
    wordBreak: "break-word",
    outline: "2px solid transparent",
    outlineOffset: o.spacing(0.35),
    transition: o.transitions.create(["box-shadow", "outline-color"], {
      duration: o.transitions.duration.standard,
    }),
    ...(r
      ? {
          color: o.palette.text.primary,
          background: `linear-gradient(180deg, ${l(d, 0.98)} 0%, ${l(d, 0.92)} 100%)`,
          border: `1px solid ${a}`,
          boxShadow: c,
        }
      : {
          background: l(d, 0.8),
          border: `1px solid ${a}`,
          boxShadow: c,
        }),
    ...(n
      ? {
          outlineColor: i,
          boxShadow: `0 0 0 4px ${l(o.palette.primary.main, 0.12)}, ${c}`,
        }
      : {}),
  };
});
const rt = ({ type: o, ...t }) => (
  <_Component9 type={o} {...t} data-chat-message-bubble="" />
);
export {
  No as A,
  _Component3 as E,
  rt as M,
  Po as a,
  $o as b,
  Q as c,
  nt as d,
  _Component8 as e,
  Mo as f,
  Zo as g,
  So as h,
  ko as i,
  ot as j,
  tt as k,
  jo as t,
};
