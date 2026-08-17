import {
  r as n,
  j as e,
  B as c,
  T as p,
  V as y,
  X as C,
  a6 as L,
  g as E,
} from "./index-BM3ZINIl.js";
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
    flexDirection: "column",
  },
  A = (a) => ({
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: a.spacing(1),
    padding: a.spacing(1.5, 2),
    borderBottom: `1px solid ${E(a.palette.text.primary, 0.08)}`,
  }),
  W = { minWidth: 0, display: "flex", flexDirection: "column" },
  X = (a) => ({ flex: 1, minHeight: 0, overflowY: "auto", padding: a.spacing(2) }),
  H = (a) => ({
    minHeight: "14rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: a.spacing(2),
  }),
  J = ({
    name: a,
    source: i,
    defaultOpen: g = !1,
    isLoading: m = !1,
    errorMessage: h,
    onOpenChange: d,
    children: v,
    drawerProps: D,
    triggerTooltip: f,
  }) => {
    const [w, b] = n.useState(g),
      u = n.useMemo(() => (i ? B(i) : ""), [i]),
      x = m || !(i != null && i.trim()),
      s = n.Children.only(v);
    if (!n.isValidElement(s))
      throw new Error("LatexAttachmentPreviewDrawer requires a single React element child.");
    const l = (t) => {
        (b(t), d == null || d(t));
      },
      j = n.cloneElement(s, {
        "aria-expanded": w,
        "aria-haspopup": "dialog",
        onClick: (t) => {
          var r, o;
          ((o = (r = s.props).onClick) == null || o.call(r, t), t.defaultPrevented || l(!0));
        },
        onKeyDown: (t) => {
          var r, o;
          ((o = (r = s.props).onKeyDown) == null || o.call(r, t),
            !t.defaultPrevented &&
              (t.key === "Enter" || t.key === " ") &&
              (t.preventDefault(), l(!0)));
        },
      }),
      P = () => {
        if (x || !i) return;
        const t = URL.createObjectURL(new Blob([i], { type: "text/x-tex;charset=utf-8" })),
          r = document.createElement("a");
        ((r.href = t),
          (r.download = a),
          document.body.appendChild(r),
          r.click(),
          r.remove(),
          URL.revokeObjectURL(t));
      },
      k = f ? e.jsx(L, { title: f, describeChild: !0, children: j }) : j;
    return e.jsxs(e.Fragment, {
      children: [
        k,
        e.jsxs(R, {
          anchor: "right",
          open: w,
          onClose: () => {
            l(!1);
          },
          slotProps: { paper: { variant: "panel", sx: U } },
          sx: { zIndex: 9999 },
          ...D,
          children: [
            e.jsxs(c, {
              sx: A,
              children: [
                e.jsxs(c, {
                  sx: W,
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx(p, { variant: "h6", color: "textPrimary", noWrap: !0, children: a }),
                        e.jsx(p, {
                          variant: "caption",
                          color: "textSecondary",
                          children: "Quick math extract · not a compiled document",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx(y, {
                          onClick: P,
                          tooltip: "Download LaTeX source",
                          disabled: x,
                          children: e.jsx(I, {}),
                        }),
                        e.jsx(T, {
                          label: "Copy LaTeX source",
                          content: i ?? "",
                          disabled: x,
                          iconOnly: !0,
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx(y, {
                  tooltip: "Close math extract",
                  "aria-label": "Close LaTeX math extract",
                  disableRipple: !0,
                  onClick: () => {
                    l(!1);
                  },
                  children: e.jsx(C, { size: 18 }),
                }),
              ],
            }),
            e.jsx(c, {
              sx: X,
              children: u
                ? e.jsx(S, { content: u })
                : e.jsx(c, {
                    sx: H,
                    children: e.jsx(p, {
                      variant: "body2",
                      color: h ? "error" : "textSecondary",
                      align: "center",
                      children:
                        h ??
                        (m
                          ? "Loading math extract..."
                          : "No math expressions found in the source."),
                    }),
                  }),
            }),
          ],
        }),
      ],
    });
  };
export { J as LatexAttachmentPreviewDrawer, ee as decodeBase64Text, te as isLatexAttachmentName };
