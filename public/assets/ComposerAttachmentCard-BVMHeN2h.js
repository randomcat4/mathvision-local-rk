import {
  A as w,
  j as o,
  r as l,
  B as j,
  T as k,
  V as R,
  a6 as S,
  g as a,
} from "./index-BM3ZINIl.js";
import { u as A, a as h } from "./useAttachmentContent-15uaQfvd.js";
import { A as I, a as T } from "./AttachmentFileName-BwwbwxPg.js";
import { L as $ } from "./latexAttachmentPreviewLazy-DKgWJirC.js";
import { i as E } from "./latexAttachment-C8umpCPo.js";
import { i as q } from "./ThinkingElapsedLabel-DKCKD95O.js";
import { C as B } from "./Card-Bf0WPnf4.js";
const O = w(
    o.jsx("path", {
      d: "M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4",
    }),
  ),
  U = (e) => (r) => ({
    boxSizing: "border-box",
    minWidth: 0,
    width: "fit-content",
    maxWidth: "min(100%, 28rem)",
    display: "flex",
    alignItems: "center",
    gap: r.spacing(1.4),
    padding: r.spacing(1.25, 1.5),
    borderRadius: r.shape.borderRadiusPx,
    border: `1px solid ${a(r.palette.text.primary, 0.08)}`,
    backgroundColor: a(r.palette.background.paper, 0.86),
    boxShadow: `0 10px 24px ${a(r.palette.text.primary, 0.05)}`,
    cursor: e ? "pointer" : "default",
    transition: r.transitions.create(["border-color", "background-color"], {
      duration: r.transitions.duration.shorter,
    }),
    ...(e
      ? {
          "&:hover": {
            borderColor: a(r.palette.primary.main, 0.18),
            backgroundColor: a(r.palette.background.paper, 0.92),
          },
          "&:focus-visible": {
            outline: `2px solid ${a(r.palette.primary.main, 0.42)}`,
            outlineOffset: 2,
          },
        }
      : null),
  }),
  W = {
    minWidth: 0,
    maxWidth: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 0.25,
  },
  z = (e) => ({
    width: e.spacing(4),
    height: e.spacing(4),
    flex: "0 0 auto",
    borderRadius: e.shape.borderRadiusPx,
    backgroundColor: a(e.palette.text.primary, 0.06),
    color: e.palette.text.secondary,
    "&:hover": { backgroundColor: a(e.palette.text.primary, 0.1), color: e.palette.text.primary },
  }),
  J = ({ attachment: e, disabled: r = !1, onRemove: m }) => {
    const s = E(e.name),
      u = q(e.name),
      b = A(e.storage === "local" && e.kind === "image" ? e.file : null),
      x = h(
        e.storage === "stored" ? e.attachmentId : null,
        e.storage === "stored" && e.kind === "image",
      ),
      v = b ?? x.objectUrl,
      [C, g] = l.useState(null),
      [P, f] = l.useState(null),
      [y, d] = l.useState(!1),
      i = l.useRef(0),
      L = (n) => {
        i.current += 1;
        const p = i.current;
        if (!n || !s) {
          d(!1);
          return;
        }
        (f(null),
          g(null),
          d(!0),
          (e.storage === "local" ? e.file.text() : x.load().then((t) => t.text()))
            .then((t) => {
              p === i.current && g(t);
            })
            .catch((t) => {
              p === i.current && f(t instanceof Error ? t.message : `Could not read ${e.name}.`);
            })
            .finally(() => {
              p === i.current && d(!1);
            }));
      },
      c = o.jsxs(B, {
        variant: "inset",
        sx: U(s),
        role: s ? "button" : void 0,
        tabIndex: s ? 0 : void 0,
        "aria-label": s ? `Preview ${e.name}` : void 0,
        children: [
          o.jsx(I, { kind: e.kind, name: e.name, href: v }),
          o.jsxs(j, {
            sx: W,
            children: [
              o.jsx(T, { name: e.name }),
              o.jsxs(k, {
                variant: "caption",
                color: "textSecondary",
                children: [
                  e.kind === "image" && "Photo",
                  e.kind === "file" && !u && "File",
                  u && "Pasted text",
                ],
              }),
            ],
          }),
          o.jsx(R, {
            sx: z,
            "aria-label": `Remove ${e.name}`,
            disabled: r,
            disableRipple: !0,
            onClick: (n) => {
              (n.stopPropagation(), m());
            },
            onKeyDown: (n) => {
              n.stopPropagation();
            },
            children: o.jsx(O, { fontSize: "small" }),
          }),
        ],
      });
    return s
      ? o.jsx(l.Suspense, {
          fallback: c,
          children: o.jsx($, {
            name: e.name,
            source: C,
            isLoading: y,
            errorMessage: P,
            onOpenChange: L,
            triggerTooltip: e.name,
            children: c,
          }),
        })
      : o.jsx(S, { title: e.name, describeChild: !0, children: c });
  };
export { J as C };
