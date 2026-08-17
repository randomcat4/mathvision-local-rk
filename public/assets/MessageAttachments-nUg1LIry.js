import {
  r as l,
  j as r,
  B as s,
  a6 as j,
  T as F,
  a5 as b,
  aD as N,
  g as t,
} from "./index-BM3ZINIl.js";
import { a as P } from "./useAttachmentContent-15uaQfvd.js";
import { a as C, A as H } from "./AttachmentFileName-BwwbwxPg.js";
import { L as _ } from "./latexAttachmentPreviewLazy-DKgWJirC.js";
import { i as Y, d as z } from "./latexAttachment-C8umpCPo.js";
import { i as G } from "./ThinkingElapsedLabel-DKCKD95O.js";
import { C as g } from "./Card-Bf0WPnf4.js";
const q = (e, a) => `data:${e};base64,${a}`,
  $ = (e) => (e.dataBase64 ? q(e.contentType || "application/octet-stream", e.dataBase64) : null),
  f = (e) => ({
    minWidth: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: e.spacing(1.4),
    padding: e.spacing(1.4, 1.6),
    borderRadius: e.shape.borderRadiusPx,
    border: `1px solid ${t(e.palette.text.primary, 0.08)}`,
    backgroundColor: t(e.palette.background.paper, 0.86),
    boxShadow: `0 10px 24px ${t(e.palette.text.primary, 0.05)}`,
    color: e.palette.text.primary,
    appearance: "none",
    font: "inherit",
    textAlign: "left",
    textDecoration: "none",
    cursor: "pointer",
    transition: e.transitions.create(
      ["transform", "border-color", "background-color", "box-shadow"],
      { duration: e.transitions.duration.shorter },
    ),
    "&:hover": {
      transform: "translateY(-1px)",
      borderColor: t(e.palette.primary.main, 0.18),
      backgroundColor: t(e.palette.background.paper, 0.92),
      boxShadow: `0 14px 28px ${t(e.palette.text.primary, 0.08)}`,
    },
  }),
  k = (e) => ({
    minWidth: 0,
    overflow: "hidden",
    borderRadius: e.shape.borderRadiusPx,
    border: `1px solid ${t(e.palette.text.primary, 0.08)}`,
    backgroundColor: t(e.palette.background.paper, 0.9),
    boxShadow: `0 12px 28px ${t(e.palette.text.primary, 0.06)}`,
  }),
  J = { display: "block", color: "inherit", textDecoration: "none" },
  K = (e) => ({
    width: "100%",
    maxHeight: "28rem",
    display: "block",
    objectFit: "contain",
    backgroundColor: t(e.palette.text.primary, 0.03),
  }),
  L = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 1.6,
    px: 1.8,
    pt: 1.6,
    pb: 1.7,
  },
  A = { minWidth: 0, flex: "1 1 12rem" },
  Q = { minWidth: 0, flex: 1, display: "flex", flexDirection: "column", gap: 0.25 },
  V = {
    display: "inline-flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 0.9,
    flex: "0 0 auto",
  },
  D = (e) => ({
    display: "inline-flex",
    alignItems: "center",
    minHeight: e.spacing(4),
    padding: e.spacing(0.4, 1.4),
    borderRadius: e.shape.borderRadiusPx,
    border: `1px solid ${t(e.palette.primary.main, 0.14)}`,
    backgroundColor: t(e.palette.primary.main, 0.05),
    textDecoration: "none",
    transition: e.transitions.create(["transform", "border-color", "background-color"], {
      duration: e.transitions.duration.shorter,
    }),
    "&:hover": {
      transform: "translateY(-1px)",
      borderColor: t(e.palette.primary.main, 0.24),
      backgroundColor: t(e.palette.primary.main, 0.09),
    },
  }),
  X = { display: "flex", flexDirection: "column", gap: 1.4, mb: 1.6 },
  Z = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(14rem, min(100%, 22rem)))",
    gap: 1.7,
    mb: 1.6,
  },
  ee = ({ attachment: e }) => {
    const a = P(e.attachmentId, !e.dataBase64),
      o = a.objectUrl ?? $(e);
    return o
      ? r.jsx(j, {
          title: e.name,
          describeChild: !0,
          children: r.jsxs(s, {
            sx: k,
            children: [
              r.jsx(b, {
                href: o,
                target: "_blank",
                rel: "noreferrer",
                underline: "none",
                sx: J,
                children: r.jsx(s, { component: "img", src: o, alt: e.name, sx: K }),
              }),
              r.jsxs(s, {
                sx: L,
                children: [
                  r.jsx(s, { sx: A, children: r.jsx(C, { name: e.name }) }),
                  r.jsxs(s, {
                    sx: V,
                    children: [
                      r.jsx(b, {
                        href: o,
                        target: "_blank",
                        rel: "noreferrer",
                        variant: "button",
                        color: "primary",
                        underline: "none",
                        sx: D,
                        children: "Open",
                      }),
                      r.jsx(b, {
                        href: o,
                        download: e.name,
                        variant: "button",
                        color: "primary",
                        underline: "none",
                        sx: D,
                        children: "Download",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : r.jsx(j, {
          title: e.name,
          describeChild: !0,
          children: r.jsx(s, {
            sx: k,
            children: r.jsx(s, {
              sx: L,
              children: r.jsxs(s, {
                sx: A,
                children: [
                  r.jsx(C, { name: e.name }),
                  r.jsxs(F, {
                    variant: "caption",
                    color: a.error || !e.attachmentId ? "error" : "textSecondary",
                    children: [
                      a.error && "Could not load image.",
                      !a.error && e.attachmentId && "Loading image...",
                      !a.error && !e.attachmentId && "Image content is unavailable.",
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
  },
  re = ({ attachment: e }) => {
    const a = P(e.attachmentId, !1),
      o = a.objectUrl ?? $(e),
      n = Y(e.name),
      c = G(e.name),
      v = l.useMemo(() => (!n || !e.dataBase64 ? null : z(e.dataBase64)), [e.dataBase64, n]),
      [B, E] = l.useState(null),
      [R, y] = l.useState(null),
      [T, h] = l.useState(!1),
      [p, S] = l.useState(!1),
      [M, w] = l.useState(null),
      U = v ?? B,
      W = (i) => {
        if (!i || !n || v) {
          h(!1);
          return;
        }
        if (!e.attachmentId) {
          y("Preview source is unavailable for this attachment.");
          return;
        }
        (y(null),
          h(!0),
          a
            .load()
            .then((d) => d.text())
            .then(E)
            .catch((d) => {
              y(d instanceof Error ? d.message : `Could not load ${e.name}.`);
            })
            .finally(() => {
              h(!1);
            }));
      },
      O = async () => {
        if (!e.attachmentId) {
          w("File content is unavailable.");
          return;
        }
        (w(null), S(!0));
        try {
          const i = await a.load(),
            d = URL.createObjectURL(i),
            x = document.createElement("a");
          ((x.href = d),
            (x.download = e.name),
            document.body.appendChild(x),
            x.click(),
            x.remove(),
            window.setTimeout(() => {
              URL.revokeObjectURL(d);
            }, 0));
        } catch (i) {
          w(i instanceof Error ? i.message : "Could not download file.");
        } finally {
          S(!1);
        }
      },
      I = M ?? a.error,
      m = !!I || (!o && !e.attachmentId),
      u = r.jsxs(r.Fragment, {
        children: [
          r.jsx(H, { kind: "file", name: e.name, href: o }),
          r.jsxs(s, {
            sx: Q,
            children: [
              r.jsx(C, { name: e.name }),
              r.jsxs(F, {
                variant: "caption",
                color: m ? "error" : "textSecondary",
                children: [
                  I && "Could not load file.",
                  !I && !o && !e.attachmentId && "File content is unavailable.",
                  !m && p && "Downloading file...",
                  !m && !p && !c && "File",
                  !m && !p && c && "Pasted text",
                ],
              }),
            ],
          }),
        ],
      });
    if (n) {
      const i = r.jsx(g, {
        component: "button",
        type: "button",
        variant: "interactive",
        sx: f,
        children: u,
      });
      return r.jsx(l.Suspense, {
        fallback: i,
        children: r.jsx(_, {
          name: e.name,
          source: U,
          isLoading: T,
          errorMessage: R,
          onOpenChange: W,
          triggerTooltip: e.name,
          children: i,
        }),
      });
    }
    return o
      ? r.jsx(j, {
          title: e.name,
          describeChild: !0,
          children: r.jsx(g, {
            component: b,
            variant: "interactive",
            href: o,
            download: e.name,
            target: "_blank",
            rel: "noreferrer",
            underline: "none",
            sx: f,
            children: u,
          }),
        })
      : e.attachmentId
        ? r.jsx(g, {
            component: N,
            variant: "interactive",
            type: "button",
            "aria-label": `Download ${e.name}`,
            sx: f,
            disabled: p,
            onClick: () => {
              O();
            },
            children: u,
          })
        : r.jsx(j, {
            title: e.name,
            describeChild: !0,
            children: r.jsx(g, { variant: "inset", sx: f, children: u }),
          });
  },
  ne = ({ attachments: e }) => {
    const a = e.filter((n) => n.kind === "image"),
      o = e.filter((n) => n.kind === "file");
    return r.jsxs(r.Fragment, {
      children: [
        a.length > 0 &&
          r.jsx(s, {
            sx: Z,
            children: a.map((n, c) => r.jsx(ee, { attachment: n }, n.id ?? `${n.name}-${c}`)),
          }),
        o.length > 0 &&
          r.jsx(s, {
            sx: X,
            children: o.map((n, c) => r.jsx(re, { attachment: n }, n.id ?? `${n.name}-${c}`)),
          }),
      ],
    });
  },
  ce = l.memo(ne);
export { ce as M };
