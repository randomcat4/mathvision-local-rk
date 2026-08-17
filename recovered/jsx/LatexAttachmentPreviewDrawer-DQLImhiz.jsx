import { r as n, j as e, B as _Component3, T as _Component, V as _Component2, X as C, a6 as L, g as E } from "./index-BM3ZINIl.js";
import { a as S } from "./Markdown-Dh8LhaRc.js";
import { b as B } from "./latexPreview-B9IEPCtV.js";
import { C as T } from "./CopyButton-BcOsqrNJ.js";
import { d as ee, i as te } from "./latexAttachment-C8umpCPo.js";
import { D as R } from "./Drawer-ByPJ5WV0.js";
import { D as I } from "./katex.min-ADdKj7O-.js";
import "./MarkdownHighlights-C-ZhT8z1.js";
import "./TextField-D8vc_sXz.js";
import "./index-Yb6ONXKu.js";
import "./index-DzMT-bSF.js";
import "./latexTextPatterns-B444ow6Q.js";
import "./MChip-DiH8NXBU.js";
const U = {
  width: "min(100vw, 48rem)",
  maxWidth: "100vw",
  display: "flex",
  flexDirection: "column"
};
const A = a => ({
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: a.spacing(1),
  padding: a.spacing(1.5, 2),
  borderBottom: `1px solid ${E(a.palette.text.primary, 0.08)}`
});
const W = {
  minWidth: 0,
  display: "flex",
  flexDirection: "column"
};
const X = a => ({
  flex: 1,
  minHeight: 0,
  overflowY: "auto",
  padding: a.spacing(2)
});
const H = a => ({
  minHeight: "14rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: a.spacing(2)
});
const J = ({
  name: a,
  source: i,
  defaultOpen: g = false,
  isLoading: m = false,
  errorMessage: h,
  onOpenChange: d,
  children: v,
  drawerProps: D,
  triggerTooltip: f
}) => {
  const [w, b] = n.useState(g);
  const u = n.useMemo(() => i ? B(i) : "", [i]);
  const x = m || i == null || !i.trim();
  const s = n.Children.only(v);
  if (!n.isValidElement(s)) {
    throw new Error("LatexAttachmentPreviewDrawer requires a single React element child.");
  }
  const l = t => {
    b(t);
    if (d != null) {
      d(t);
    }
  };
  const j = n.cloneElement(s, {
    "aria-expanded": w,
    "aria-haspopup": "dialog",
    onClick: t => {
      var r;
      var o;
      if ((o = (r = s.props).onClick) != null) {
        o.call(r, t);
      }
      if (!t.defaultPrevented) {
        l(true);
      }
    },
    onKeyDown: t => {
      var r;
      var o;
      if ((o = (r = s.props).onKeyDown) != null) {
        o.call(r, t);
      }
      if (!t.defaultPrevented && (t.key === "Enter" || t.key === " ")) {
        t.preventDefault();
        l(true);
      }
    }
  });
  const P = () => {
    if (x || !i) {
      return;
    }
    const t = URL.createObjectURL(new Blob([i], {
      type: "text/x-tex;charset=utf-8"
    }));
    const r = document.createElement("a");
    r.href = t;
    r.download = a;
    document.body.appendChild(r);
    r.click();
    r.remove();
    URL.revokeObjectURL(t);
  };
  const k = f ? <L title={f} describeChild={true}>{j}</L> : j;
  return <e.Fragment>{k}<R anchor="right" open={w} onClose={() => {
      l(false);
    }} slotProps={{
      paper: {
        variant: "panel",
        sx: U
      }
    }} sx={{
      zIndex: 9999
    }} {...D}><_Component3 sx={A}><_Component3 sx={W}><div><_Component variant="h6" color="textPrimary" noWrap={true}>{a}</_Component><_Component variant="caption" color="textSecondary">Quick math extract · not a compiled document</_Component></div><div><_Component2 onClick={P} tooltip="Download LaTeX source" disabled={x}><I /></_Component2><T label="Copy LaTeX source" content={i ?? ""} disabled={x} iconOnly={true} /></div></_Component3><_Component2 tooltip="Close math extract" aria-label="Close LaTeX math extract" disableRipple={true} onClick={() => {
          l(false);
        }}><C size={18} /></_Component2></_Component3><_Component3 sx={X}>{u ? <S content={u} /> : <_Component3 sx={H}><_Component variant="body2" color={h ? "error" : "textSecondary"} align="center">{h ?? (m ? "Loading math extract..." : "No math expressions found in the source.")}</_Component></_Component3>}</_Component3></R></e.Fragment>;
};
export { J as LatexAttachmentPreviewDrawer, ee as decodeBase64Text, te as isLatexAttachmentName };
