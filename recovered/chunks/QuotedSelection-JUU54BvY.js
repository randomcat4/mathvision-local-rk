import { r as l, j as r, Q as m, V as x, B as g, X as y, g as e } from "./index-BM3ZINIl.js";
import { a as C } from "./Markdown-Dh8LhaRc.js";
import { Q as u } from "./quote-DYxVpGUS.js";
const k = (a, s, i) => (t) => {
    const o = a === "message",
      c = e(t.palette.primary.main, o ? 0.26 : 0.2),
      d = e(t.palette.primary.main, o ? 0.09 : 0.055);
    return {
      minWidth: 0,
      width: "100%",
      display: "grid",
      gridTemplateColumns: i ? "auto minmax(0, 1fr) auto" : "auto minmax(0, 1fr)",
      alignItems: "start",
      gap: t.spacing(1),
      marginBottom: t.spacing(o ? 1 : 1.5),
      padding: t.spacing(o ? 0.9 : 1.15, o ? 1.1 : 1.25),
      borderColor: c,
      borderLeft: `3px solid ${e(t.palette.primary.main, o ? 0.68 : 0.48)}`,
      borderRadius: t.shape.borderRadiusPx,
      backgroundColor: d,
      backgroundImage: "none",
      boxShadow: `inset 0 1px 0 ${e(t.palette.background.paper, o ? 0.78 : 0.68)}`,
      cursor: s ? "pointer" : "default",
      transition: t.transitions.create(["background-color", "border-color", "box-shadow"], {
        duration: t.transitions.duration.shorter,
      }),
      ...(s
        ? {
            "&:hover": {
              borderColor: e(t.palette.primary.main, 0.38),
              borderLeftColor: t.palette.primary.main,
              backgroundColor: e(t.palette.primary.main, o ? 0.13 : 0.09),
              boxShadow: `inset 0 1px 0 ${e(t.palette.background.paper, 0.86)}, 0 8px 20px ${e(t.palette.primary.main, 0.08)}`,
            },
          }
        : {}),
    };
  },
  S = (a) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: a.spacing(3.5),
    height: a.spacing(3.5),
    color: a.palette.primary.main,
  }),
  f = (a) => ({ width: a.spacing(3.5), height: a.spacing(3.5), color: a.palette.primary.main }),
  j = (a) => ({
    width: a.spacing(3.5),
    height: a.spacing(3.5),
    color: a.palette.text.secondary,
    "&:hover": { backgroundColor: e(a.palette.text.primary, 0.08), color: a.palette.text.primary },
  }),
  I = { minWidth: 0 },
  w = ({ quote: a, tone: s, onJump: i, onRemove: t }) => {
    const o = i !== void 0,
      c = l.useCallback(
        (n) => {
          if (!i) return;
          const p = n.target;
          (p instanceof Element && p.closest("a, button")) || i(a.messageIndex);
        },
        [i, a.messageIndex],
      ),
      d = l.useCallback(
        (n) => {
          (n.stopPropagation(), i == null || i(a.messageIndex));
        },
        [i, a.messageIndex],
      ),
      b = l.useCallback(
        (n) => {
          (n.stopPropagation(), t == null || t());
        },
        [t],
      );
    return r.jsxs(m, {
      variant: o ? "interactive" : "inset",
      sx: k(s, o, t !== void 0),
      onClick: o ? c : void 0,
      children: [
        o &&
          r.jsx(x, {
            type: "button",
            size: "small",
            tooltip: "Jump to quoted selection",
            "aria-label": "Jump to quoted selection",
            sx: f,
            onClick: d,
            children: r.jsx(u, { size: 19 }),
          }),
        !o && r.jsx(g, { sx: S, "aria-hidden": "true", children: r.jsx(u, { size: 19 }) }),
        r.jsx(g, {
          sx: I,
          children: r.jsx(C, { content: a.text, tone: s === "message" ? "user" : "assistant" }),
        }),
        t &&
          r.jsx(x, {
            type: "button",
            size: "small",
            tooltip: "Remove quoted selection",
            "aria-label": "Remove quoted selection",
            sx: j,
            onClick: b,
            children: r.jsx(y, { size: 18 }),
          }),
      ],
    });
  },
  z = l.memo(w);
export { z as Q };
