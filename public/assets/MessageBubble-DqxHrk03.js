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
  T as h,
  B as K,
  g as l,
} from "./index-BM3ZINIl.js";
import { O as so } from "./OpenInNewRounded-D-7V5TzF.js";
import { M as ao } from "./MChip-DiH8NXBU.js";
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
  ]),
  po = (o) => {
    const { classes: t, square: n, expanded: r, disabled: a, disableGutters: e } = o;
    return V(
      {
        root: ["root", !n && "rounded", r && "expanded", a && "disabled", !e && "gutters"],
        heading: ["heading"],
        region: ["region"],
      },
      lo,
      t,
    );
  },
  uo = m(ro, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (o, t) => {
      const { ownerState: n } = o;
      return [
        { [`& .${P.region}`]: t.region },
        t.root,
        !n.square && t.rounded,
        !n.disableGutters && t.gutters,
      ];
    },
  })(
    A(({ theme: o }) => {
      const t = { duration: o.transitions.duration.shortest };
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
        "&:first-of-type": { "&::before": { display: "none" } },
        [`&.${P.expanded}`]: {
          "&::before": { opacity: 0 },
          "&:first-of-type": { marginTop: 0 },
          "&:last-of-type": { marginBottom: 0 },
          "& + &": { "&::before": { display: "none" } },
        },
        [`&.${P.disabled}`]: { backgroundColor: (o.vars || o).palette.action.disabledBackground },
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
        { props: (t) => !t.disableGutters, style: { [`&.${P.expanded}`]: { margin: "16px 0" } } },
      ],
    })),
  ),
  xo = m("h3", { name: "MuiAccordion", slot: "Heading" })({ all: "unset" }),
  go = m("div", { name: "MuiAccordion", slot: "Region" })({}),
  mo = g.forwardRef(function (t, n) {
    const r = F({ props: t, name: "MuiAccordion" }),
      {
        children: a,
        className: e,
        defaultExpanded: i = !1,
        disabled: d = !1,
        disableGutters: c = !1,
        expanded: b,
        onChange: R,
        slots: B = {},
        slotProps: T = {},
        ...W
      } = r,
      [p, M] = no({ controlled: b, default: i, name: "Accordion", state: "expanded" }),
      k = g.useCallback(
        (to) => {
          (M(!p), R && R(to, !p));
        },
        [p, R, M],
      ),
      [x, ...S] = g.Children.toArray(a),
      w = g.useMemo(
        () => ({ expanded: p, disabled: d, disableGutters: c, toggle: k }),
        [p, d, c, k],
      ),
      f = { ...r, disabled: d, disableGutters: c, expanded: p },
      v = po(f),
      C = { slots: B, slotProps: T },
      [E, D] = y("root", {
        elementType: uo,
        externalForwardedProps: { ...C, ...W },
        className: N(v.root, e),
        shouldForwardComponentProp: !0,
        ownerState: f,
        ref: n,
      }),
      [G, u] = y("heading", {
        elementType: xo,
        externalForwardedProps: C,
        className: v.heading,
        ownerState: f,
      }),
      [$, j] = y("transition", { elementType: io, externalForwardedProps: C, ownerState: f }),
      [Z, oo] = y("region", {
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
    return s.jsxs(E, {
      ...D,
      children: [
        s.jsx(G, { ...u, children: s.jsx(q.Provider, { value: w, children: x }) }),
        s.jsx($, { in: p, timeout: "auto", ...j, children: s.jsx(Z, { ...oo, children: S }) }),
      ],
    });
  });
function bo(o) {
  return O("MuiAccordionDetails", o);
}
H("MuiAccordionDetails", ["root"]);
const fo = (o) => {
    const { classes: t } = o;
    return V({ root: ["root"] }, bo, t);
  },
  yo = m("div", { name: "MuiAccordionDetails", slot: "Root" })(
    A(({ theme: o }) => ({ padding: o.spacing(1, 2, 2) })),
  ),
  So = g.forwardRef(function (t, n) {
    const r = F({ props: t, name: "MuiAccordionDetails" }),
      { className: a, ...e } = r,
      i = r,
      d = fo(i);
    return s.jsx(yo, { className: N(d.root, a), ref: n, ownerState: i, ...e });
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
  ]),
  ho = (o) => {
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
  },
  Io = m(eo, { name: "MuiAccordionSummary", slot: "Root" })(
    A(({ theme: o }) => {
      const t = { duration: o.transitions.duration.shortest };
      return {
        display: "flex",
        width: "100%",
        minHeight: 48,
        padding: o.spacing(0, 2),
        transition: o.transitions.create(["min-height", "background-color"], t),
        [`&.${I.focusVisible}`]: { backgroundColor: (o.vars || o).palette.action.focus },
        [`&.${I.disabled}`]: { opacity: (o.vars || o).palette.action.disabledOpacity },
        [`&:hover:not(.${I.disabled})`]: { cursor: "pointer" },
        variants: [
          { props: (n) => !n.disableGutters, style: { [`&.${I.expanded}`]: { minHeight: 64 } } },
        ],
      };
    }),
  ),
  Ao = m("span", { name: "MuiAccordionSummary", slot: "Content" })(
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
            [`&.${I.expanded}`]: { margin: "20px 0" },
          },
        },
      ],
    })),
  ),
  Ro = m("span", { name: "MuiAccordionSummary", slot: "ExpandIconWrapper" })(
    A(({ theme: o }) => ({
      display: "flex",
      color: (o.vars || o).palette.action.active,
      transform: "rotate(0deg)",
      transition: o.transitions.create("transform", { duration: o.transitions.duration.shortest }),
      [`&.${I.expanded}`]: { transform: "rotate(180deg)" },
    })),
  ),
  Mo = g.forwardRef(function (t, n) {
    const r = F({ props: t, name: "MuiAccordionSummary" }),
      {
        children: a,
        className: e,
        expandIcon: i,
        focusVisibleClassName: d,
        onClick: c,
        slots: b,
        slotProps: R,
        ...B
      } = r,
      { disabled: T = !1, disableGutters: W, expanded: p, toggle: M } = g.useContext(q),
      k = (u) => {
        (M && M(u), c && c(u));
      },
      x = { ...r, expanded: p, disabled: T, disableGutters: W },
      S = ho(x),
      w = { slots: b, slotProps: R },
      [f, v] = y("root", {
        ref: n,
        shouldForwardComponentProp: !0,
        className: N(S.root, e),
        elementType: Io,
        externalForwardedProps: { ...w, ...B },
        ownerState: x,
        additionalProps: {
          focusRipple: !1,
          disableRipple: !0,
          internalNativeButton: !0,
          disabled: T,
          "aria-expanded": p,
          focusVisibleClassName: N(S.focusVisible, d),
        },
        getSlotProps: (u) => ({
          ...u,
          onClick: ($) => {
            var j;
            ((j = u.onClick) == null || j.call(u, $), k($));
          },
        }),
      }),
      [C, E] = y("content", {
        className: S.content,
        elementType: Ao,
        externalForwardedProps: w,
        ownerState: x,
      }),
      [D, G] = y("expandIconWrapper", {
        className: S.expandIconWrapper,
        elementType: Ro,
        externalForwardedProps: w,
        ownerState: x,
      });
    return s.jsxs(f, {
      ...v,
      children: [s.jsx(C, { ...E, children: a }), i && s.jsx(D, { ...G, children: i })],
    });
  }),
  wo = z(s.jsx("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })),
  vo = z(
    s.jsx("path", {
      d: "M19.3 16.9c.58-1.01.95-2.23.51-3.65-.53-1.72-2.04-3.05-3.84-3.22-2.87-.28-5.23 2.07-4.95 4.95.18 1.79 1.5 3.31 3.22 3.84 1.43.44 2.64.07 3.65-.51l2.5 2.5c.39.39 1.01.39 1.4 0s.39-1.01 0-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5M12 20v2C6.48 22 2 17.52 2 12S6.48 2 12 2c4.84 0 8.87 3.44 9.8 8h-2.07c-.64-2.46-2.4-4.47-4.73-5.41V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1H8v2h2v3H9l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.41 3.59 8 8 8",
    }),
  ),
  To = /[\p{L}\p{N}_]/u,
  U = (o) => !!(o && To.test(o)),
  Q = (o, t) =>
    Number.isInteger(t) &&
    t >= 0 &&
    t <= o.length &&
    co(o).mathRanges.some((n) => n.start < t && t < n.end),
  ko = (o, t) => t > 0 && t < o.length && U(o[t - 1]) && U(o[t]),
  $o = (o, t) => {
    let n = t;
    for (; U(o[n]);) n += 1;
    return n;
  },
  jo = (o) => `<${o.replace(/>/g, "%3E")}>`,
  Po = (o) => o.replace(/\\/g, "\\\\").replace(/\[/g, "\\[").replace(/\]/g, "\\]"),
  No = "assistant-source-citation",
  Bo = "vertexaisearch.cloud.google.com",
  Wo = /(?:\r?\n){1,2}[ \t]{0,3}(?:#{1,6}[ \t]*|(?:[-+*]|\d+[.)])[ \t]*)$/,
  Eo = (o) => ({
    marginTop: o.spacing(1.6),
    borderRadius: o.shape.borderRadiusPx,
    border: `1px solid ${l(o.palette.text.primary, 0.09)}`,
    backgroundColor: l(o.palette.background.paper, 0.54),
    boxShadow: "none",
    "&::before": { display: "none" },
    "&.Mui-expanded": { margin: `${o.spacing(1.6)} 0 0` },
  }),
  Do = (o) => ({
    minHeight: "2.5rem",
    padding: o.spacing(0, 1.25),
    "&.Mui-expanded": { minHeight: "2.5rem" },
    "& .MuiAccordionSummary-content": {
      alignItems: "center",
      justifyContent: "space-between",
      gap: o.spacing(1.2),
      minWidth: 0,
      margin: o.spacing(0.65, 0),
    },
    "& .MuiAccordionSummary-content.Mui-expanded": { margin: o.spacing(0.65, 0) },
  }),
  Go = (o) => ({ display: "inline-flex", alignItems: "center", gap: o.spacing(0.75), minWidth: 0 }),
  Lo = (o) => ({
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: o.spacing(0.85),
    padding: o.spacing(0, 1.25, 1.15),
  }),
  _o = (o) => ({
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
  }),
  Uo = (o) => ({ flexWrap: "wrap", gap: o.spacing(0.6), marginTop: o.spacing(0.45) }),
  Oo = (o) => ({ color: o.palette.primary.main, opacity: 0.78 }),
  _ = (o) => o.replace(/[-_]+/g, " ").replace(/\b\w/g, (t) => t.toUpperCase()),
  Ho = (o) => {
    var t;
    return ((t = o.title) == null ? void 0 : t.trim()) || o.domain.trim() || o.url;
  },
  Y = (o) => {
    var a;
    const t = o.domain
        .trim()
        .replace(/^www\./i, "")
        .replace(/\/+$/g, ""),
      n = (a = o.title) == null ? void 0 : a.trim();
    return t === Bo && n ? n : t || new URL(o.url).hostname.replace(/^www\./i, "") || o.url;
  },
  Zo = Y,
  J = (o) => o.map((t) => `[${Po(Y(t))}](${jo(t.url)} "${No}")`).join(""),
  X = (o) =>
    o
      .filter((t) => t.type === "text")
      .map((t) => t.text ?? "")
      .join(""),
  Fo = (o, t) => {
    if (
      t.startIndex === void 0 ||
      t.startIndex === null ||
      t.endIndex === void 0 ||
      t.endIndex === null ||
      t.startIndex < 0 ||
      t.endIndex < t.startIndex ||
      t.endIndex > o.length
    )
      return null;
    let n = t.endIndex;
    ko(o, n) && (n = $o(o, n));
    const r = o.slice(0, n).match(Wo);
    return ((r == null ? void 0 : r.index) !== void 0 && (n = r.index), Q(o, n) ? null : n);
  },
  Vo = (o, t, n) => {
    const r = o.slice(0, t),
      a = o.slice(t),
      e = r && !/\s$/.test(r) ? " " : "",
      i = a && !/^[\s.,;:!?)]/.test(a) && !n.endsWith(" ") ? " " : "";
    return `${r}${e}${n}${i}${a}`;
  },
  zo = (o, t, n) => {
    if (t.length === 0 || n.length === 0) return o;
    const r = new Map(t.map((e) => [e.id, e])),
      a = n
        .map((e, i) => {
          const d = e.sourceIds.map((b) => r.get(b)).filter((b) => b !== void 0),
            c = Fo(o, e);
          return { citationIndex: i, insertIndex: c, marker: J(d) };
        })
        .filter((e) => e.insertIndex !== null && !!e.marker)
        .sort((e, i) => i.insertIndex - e.insertIndex || i.citationIndex - e.citationIndex);
    return a.length === 0 ? o : a.reduce((e, i) => Vo(e, i.insertIndex, i.marker), o);
  },
  Ko = (o, t, n) => {
    if (t.length === 0 || n.length === 0) return o;
    const r = new Map(t.map((d) => [d.id, d])),
      a = X(n);
    let e = 0;
    const i = n
      .map((d) => {
        if (d.type === "text") {
          const c = d.text ?? "";
          return ((e += c.length), c);
        }
        return Q(a, e) ? "" : J(d.sourceIds.map((c) => r.get(c)).filter((c) => c !== void 0));
      })
      .join("");
    return i.trim() ? i : o;
  },
  ot = (o) => {
    const t = o.sources ?? [],
      n = o.textSegments ?? [],
      r = o.citations ?? [];
    return t.length === 0
      ? o.content
      : r.length > 0 && (n.length === 0 || X(n) === o.content)
        ? zo(o.content, t, r)
        : Ko(o.content, t, n);
  },
  tt = (o) => {
    const t = o.sources ?? [],
      n = new Set();
    for (const r of o.textSegments ?? [])
      if (r.type === "citation") for (const a of r.sourceIds) n.add(a);
    for (const r of o.citations ?? []) for (const a of r.sourceIds) n.add(a);
    return n.size > 0 ? t.filter((r) => n.has(r.id)) : t.filter((r) => r.status === "used");
  },
  nt = ({ sources: o = [] }) => {
    if (o.length === 0) return null;
    const t = `${o.length} ${o.length === 1 ? "source" : "sources"}`;
    return s.jsxs(mo, {
      disableGutters: !0,
      sx: Eo,
      children: [
        s.jsx(Mo, {
          expandIcon: s.jsx(wo, { fontSize: "small" }),
          sx: Do,
          children: s.jsxs(L, {
            component: "span",
            direction: "row",
            sx: Go,
            children: [
              s.jsx(vo, { fontSize: "small" }),
              s.jsx(h, {
                component: "span",
                variant: "assistantSourceSummary",
                color: "textPrimary",
                children: t,
              }),
            ],
          }),
        }),
        s.jsx(So, {
          sx: Lo,
          children: o.map((n, r) =>
            s.jsxs(
              K,
              {
                component: "a",
                sx: _o,
                href: n.url,
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                  s.jsx(ao, {
                    label: r + 1,
                    sx: { borderRadius: 999 },
                    variant: "outlined",
                    color: "primary",
                  }),
                  s.jsxs(L, {
                    sx: { minWidth: 0 },
                    children: [
                      s.jsx(h, {
                        variant: "assistantSourceTitle",
                        color: "textPrimary",
                        children: Ho(n),
                      }),
                      s.jsxs(L, {
                        component: "span",
                        direction: "row",
                        useFlexGap: !0,
                        sx: Uo,
                        children: [
                          s.jsx(h, {
                            component: "span",
                            variant: "assistantSourceMeta",
                            color: "textSecondary",
                            children: n.domain || n.url,
                          }),
                          s.jsx(h, {
                            component: "span",
                            variant: "assistantSourceMeta",
                            color: "textSecondary",
                            children: _(n.provider),
                          }),
                          s.jsx(h, {
                            component: "span",
                            variant: "assistantSourceMeta",
                            color: "textSecondary",
                            children: _(n.tool),
                          }),
                          n.status !== "used"
                            ? s.jsx(h, {
                                component: "span",
                                variant: "assistantSourceMeta",
                                color: "textSecondary",
                                children: _(n.status),
                              })
                            : null,
                        ],
                      }),
                    ],
                  }),
                  s.jsx(so, { fontSize: "small", sx: Oo }),
                ],
              },
              n.id,
            ),
          ),
        }),
      ],
    });
  },
  qo = m(K, { shouldForwardProp: (o) => o !== "type" && o !== "isHighlighted" })(
    ({ theme: o, type: t, isHighlighted: n }) => {
      const r = t === "user",
        a = l(o.palette.text.primary, 0.08),
        e = l(o.palette.text.primary, 0.08),
        i = l(o.palette.primary.main, 0.55),
        d = o.palette.background.paper,
        c = r ? `0 14px 34px ${e}` : `0 16px 42px ${e}`;
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
          : { background: l(d, 0.8), border: `1px solid ${a}`, boxShadow: c }),
        ...(n
          ? { outlineColor: i, boxShadow: `0 0 0 4px ${l(o.palette.primary.main, 0.12)}, ${c}` }
          : {}),
      };
    },
  ),
  rt = ({ type: o, ...t }) => s.jsx(qo, { type: o, ...t, "data-chat-message-bubble": "" });
export {
  No as A,
  wo as E,
  rt as M,
  Po as a,
  $o as b,
  Q as c,
  nt as d,
  mo as e,
  Mo as f,
  Zo as g,
  So as h,
  ko as i,
  ot as j,
  tt as k,
  jo as t,
};
