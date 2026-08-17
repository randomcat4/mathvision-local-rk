import { r as l, j as r, Q as _Component5, V as _Component2, B as _Component3, X as _Component4, g as e } from "./index-BM3ZINIl.js";
import { a as C } from "./Markdown-Dh8LhaRc.js";
import { Q as _Component } from "./quote-DYxVpGUS.js";
const k = (a, s, i) => t => {
  const o = a === "message";
  const c = e(t.palette.primary.main, o ? 0.26 : 0.2);
  const d = e(t.palette.primary.main, o ? 0.09 : 0.055);
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
      duration: t.transitions.duration.shorter
    }),
    ...(s ? {
      "&:hover": {
        borderColor: e(t.palette.primary.main, 0.38),
        borderLeftColor: t.palette.primary.main,
        backgroundColor: e(t.palette.primary.main, o ? 0.13 : 0.09),
        boxShadow: `inset 0 1px 0 ${e(t.palette.background.paper, 0.86)}, 0 8px 20px ${e(t.palette.primary.main, 0.08)}`
      }
    } : {})
  };
};
const S = a => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: a.spacing(3.5),
  height: a.spacing(3.5),
  color: a.palette.primary.main
});
const f = a => ({
  width: a.spacing(3.5),
  height: a.spacing(3.5),
  color: a.palette.primary.main
});
const j = a => ({
  width: a.spacing(3.5),
  height: a.spacing(3.5),
  color: a.palette.text.secondary,
  "&:hover": {
    backgroundColor: e(a.palette.text.primary, 0.08),
    color: a.palette.text.primary
  }
});
const I = {
  minWidth: 0
};
const w = ({
  quote: a,
  tone: s,
  onJump: i,
  onRemove: t
}) => {
  const o = i !== undefined;
  const c = l.useCallback(n => {
    if (!i) {
      return;
    }
    const p = n.target;
    if (!(p instanceof Element) || !p.closest("a, button")) {
      i(a.messageIndex);
    }
  }, [i, a.messageIndex]);
  const d = l.useCallback(n => {
    n.stopPropagation();
    if (i != null) {
      i(a.messageIndex);
    }
  }, [i, a.messageIndex]);
  const b = l.useCallback(n => {
    n.stopPropagation();
    if (t != null) {
      t();
    }
  }, [t]);
  return <_Component5 variant={o ? "interactive" : "inset"} sx={k(s, o, t !== undefined)} onClick={o ? c : undefined}>{o && <_Component2 type="button" size="small" tooltip="Jump to quoted selection" aria-label="Jump to quoted selection" sx={f} onClick={d}><_Component size={19} /></_Component2>}{!o && <_Component3 sx={S} aria-hidden="true"><_Component size={19} /></_Component3>}<_Component3 sx={I}><C content={a.text} tone={s === "message" ? "user" : "assistant"} /></_Component3>{t && <_Component2 type="button" size="small" tooltip="Remove quoted selection" aria-label="Remove quoted selection" sx={j} onClick={b}><_Component4 size={18} /></_Component2>}</_Component5>;
};
const z = l.memo(w);
export { z as Q };
