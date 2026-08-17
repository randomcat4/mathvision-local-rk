const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/source-editor-CGMzw50e.js",
      "assets/index-BM3ZINIl.js",
      "assets/index-DCmpUGyQ.css",
      "assets/SidebarTreeConnector-DsRNfBIo.js",
      "assets/MarkdownHighlights-C-ZhT8z1.js",
      "assets/TextField-D8vc_sXz.js",
      "assets/index-Yb6ONXKu.js",
      "assets/file-code-corner-DV79SyC0.js",
      "assets/Divider-BcuihGce.js",
      "assets/cache-BNzcfneg.js",
      "assets/useLatexQueries-DBpKOPUv.js",
      "assets/useQuery-DM2qiUYb.js",
      "assets/search-CE89ACSU.js",
      "assets/useMutation-C1SgG9wr.js",
      "assets/useInfiniteQuery-CdNTitqC.js",
      "assets/katex.min-ADdKj7O-.js",
      "assets/katex-CfVKi3_s.css",
      "assets/MChip-DiH8NXBU.js",
    ]),
) => i.map((i) => d[i]);
import {
  g as y,
  j as t,
  B as r,
  T as j,
  C,
  r as n,
  $ as O,
  t as f,
  V,
  X as W,
  _ as T,
} from "./index-BM3ZINIl.js";
import { A as I } from "./Alert-DnFVD8li.js";
import { b as U } from "./latexPreview-B9IEPCtV.js";
import { a as Y } from "./Markdown-Dh8LhaRc.js";
import { T as K, a as X } from "./MarkdownHighlights-C-ZhT8z1.js";
import { u as Q, c as q, e as G, i as Z, j as ee } from "./useLatexQueries-DBpKOPUv.js";
import { a as k } from "./latexNaming-BAjxoZ-G.js";
import { u as te } from "./usePdfObjectUrl-Cd7ol8-S.js";
import { a as re } from "./useAttachmentContent-15uaQfvd.js";
import { u as ae } from "./useControlOrMetaShortcut-DL7j4WBM.js";
import { D as se } from "./Drawer-ByPJ5WV0.js";
import { T as oe } from "./TextField-D8vc_sXz.js";
import { P as ie } from "./play-3zl_nde-.js";
import { F as ne } from "./file-plus-_oOf3yl8.js";
import "./latexTextPatterns-B444ow6Q.js";
import "./katex.min-ADdKj7O-.js";
import "./CopyButton-BcOsqrNJ.js";
import "./MChip-DiH8NXBU.js";
import "./index-DzMT-bSF.js";
import "./index-Yb6ONXKu.js";
import "./useQuery-DM2qiUYb.js";
import "./search-CE89ACSU.js";
import "./useMutation-C1SgG9wr.js";
import "./useInfiniteQuery-CdNTitqC.js";
import "./cache-BNzcfneg.js";
import "./attachmentsApi-BHgxfYft.js";
import "./authFetch-DXjDztUP.js";
const le = (e) => `${e.line ? `Line ${e.line}` : "Document"}: ${e.message}`,
  ce = { width: "min(100vw, 72rem)", maxWidth: "100vw", display: "flex", flexDirection: "column" },
  de = (e) => ({
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: e.spacing(1),
    padding: e.spacing(1.5, 2),
    borderBottom: `1px solid ${y(e.palette.text.primary, 0.08)}`,
  }),
  xe = (e) => ({
    flex: 1,
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
    gap: e.spacing(2),
    padding: e.spacing(2),
  }),
  pe = (e) => ({
    flex: 1,
    minHeight: 0,
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) minmax(20rem, 0.82fr)",
    gap: e.spacing(1.5),
    [e.breakpoints.down(900)]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "minmax(22rem, 1fr) minmax(18rem, 0.8fr)",
    },
  }),
  ue = { display: "flex", justifyContent: "flex-end", gap: 1 },
  M = (e) => ({
    minWidth: 0,
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    border: `1px solid ${y(e.palette.text.primary, 0.08)}`,
    borderRadius: e.shape.borderRadiusPx,
    backgroundColor: y(e.palette.background.paper, 0.84),
  }),
  _ = (e) => ({
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: e.spacing(1),
    padding: e.spacing(1.1, 1.25),
    borderBottom: `1px solid ${y(e.palette.text.primary, 0.08)}`,
  }),
  me = (e) => ({
    minHeight: 0,
    flex: "0 1 auto",
    maxWidth: "100%",
    "& .MuiTabs-list": { gap: e.spacing(0.4) },
    "& .MuiTab-root": { minHeight: "2rem", paddingInline: e.spacing(1.2) },
  }),
  fe = { flex: 1, minHeight: 0, display: "flex", flexDirection: "column" },
  ge = { flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center" },
  be = (e) => ({ flex: 1, minHeight: 0, overflowY: "auto", padding: e.spacing(1.4) }),
  he = { flex: 1, minHeight: 0, display: "flex", flexDirection: "column" },
  je = { flex: 1, minHeight: 0, width: "100%", border: 0 },
  S = (e) => ({
    flex: 1,
    minHeight: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: e.spacing(2),
  }),
  ye = (e) => ({
    flex: "0 0 auto",
    display: "flex",
    flexDirection: "column",
    gap: e.spacing(0.75),
    maxHeight: "11rem",
    overflowY: "auto",
    padding: e.spacing(1),
    borderTop: `1px solid ${y(e.palette.text.primary, 0.08)}`,
  }),
  Ce = (e, o) =>
    o
      ? { message: "Compiling...", type: "textSecondary" }
      : e
        ? e.success
          ? { message: `Compiled in ${e.durationMs} ms`, type: "success" }
          : { message: "Compile failed", type: "error" }
        : { message: "Not compiled", type: "textSecondary" },
  ve = ({
    compileResult: e,
    diagnostics: o,
    isCompiling: i,
    pdfUrl: x,
    isPdfLoading: p,
    hasPdfError: u,
  }) => {
    const c = Ce(e, i);
    return t.jsxs(r, {
      sx: M,
      children: [
        t.jsxs(r, {
          sx: _,
          children: [
            t.jsx(j, { variant: "subtitle2", color: "textPrimary", children: "Compiled PDF" }),
            t.jsx(j, { variant: "caption", color: c.type, children: c.message }),
          ],
        }),
        t.jsxs(r, {
          sx: he,
          children: [
            i && t.jsx(r, { sx: S, children: t.jsx(C, { size: 28 }) }),
            !i &&
              x &&
              t.jsx(r, {
                component: "iframe",
                title: "Compiled LaTeX draft preview",
                src: x,
                sx: je,
              }),
            !i && !x && p && t.jsx(r, { sx: S, children: t.jsx(C, { size: 28 }) }),
            !i &&
              !x &&
              !p &&
              t.jsx(r, {
                sx: S,
                children: t.jsx(j, {
                  variant: "body2",
                  color: u ? "error" : "textSecondary",
                  align: "center",
                  children: u ? "Could not load the compiled PDF." : "No PDF preview available.",
                }),
              }),
            e &&
              t.jsxs(r, {
                sx: ye,
                children: [
                  o.length === 0 &&
                    t.jsx(I, {
                      severity: e.success ? "success" : "info",
                      variant: "outlined",
                      children: e.success ? "No compiler diagnostics." : "No diagnostics returned.",
                    }),
                  o.map((l, s) =>
                    t.jsx(
                      I,
                      {
                        severity: l.severity === "error" ? "error" : "warning",
                        variant: "outlined",
                        children: le(l),
                      },
                      `${l.severity}-${l.line ?? "doc"}-${s}`,
                    ),
                  ),
                ],
              }),
          ],
        }),
      ],
    });
  },
  Le = n.lazy(() =>
    O(
      () => import("./source-editor-CGMzw50e.js").then((e) => e.p),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]),
    ).then((e) => ({ default: e.LatexSourceEditor })),
  ),
  Se = ({ fileName: e, draftSource: o, diagnostics: i, isBusy: x, onSourceChange: p }) => {
    const [u, c] = n.useState("source"),
      l = n.useMemo(() => U(o), [o]);
    return t.jsxs(r, {
      sx: M,
      children: [
        t.jsxs(r, {
          sx: _,
          children: [
            t.jsx(j, { variant: "subtitle2", color: "textPrimary", children: "Source" }),
            t.jsxs(K, {
              value: u,
              variant: "scrollable",
              scrollButtons: !1,
              "aria-label": "LaTeX source views",
              sx: me,
              onChange: (s, m) => {
                c(m);
              },
              children: [
                t.jsx(X, {
                  disableRipple: !0,
                  value: "source",
                  label: "Editing",
                  id: "latex-create-source-tab",
                  "aria-controls": "latex-create-source-panel",
                }),
                t.jsx(X, {
                  disableRipple: !0,
                  value: "preview",
                  label: "Preview",
                  id: "latex-create-preview-tab",
                  "aria-controls": "latex-create-preview-panel",
                }),
              ],
            }),
          ],
        }),
        t.jsxs(r, {
          sx: fe,
          children: [
            u === "source" &&
              t.jsx(n.Suspense, {
                fallback: t.jsx(r, { sx: ge, children: t.jsx(C, { size: 22 }) }),
                children: t.jsx(Le, {
                  value: o,
                  fileName: e,
                  diagnostics: i,
                  editable: !x,
                  role: "tabpanel",
                  id: "latex-create-source-panel",
                  ariaLabelledBy: "latex-create-source-tab",
                  onChange: p,
                }),
              }),
            u === "preview" &&
              t.jsxs(r, {
                sx: be,
                role: "tabpanel",
                id: "latex-create-preview-panel",
                "aria-labelledby": "latex-create-preview-tab",
                children: [
                  l && t.jsx(Y, { content: l }),
                  !l &&
                    t.jsx(r, {
                      sx: S,
                      children: t.jsx(j, {
                        variant: "body2",
                        color: "textSecondary",
                        align: "center",
                        children: "No math expressions found in the source.",
                      }),
                    }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  Ze = ({ open: e, initialName: o, onClose: i, onDocumentCreated: x }) => {
    const [p, u] = n.useState(o),
      [c, l] = n.useState(""),
      [s, m] = n.useState(null),
      [F, $] = n.useState(null),
      [g, v] = n.useState(null),
      E = Q(),
      B = q(),
      w = G(g, { enabled: !!g }),
      d = w.data,
      D = E.isPending,
      L = B.isPending || !!g || Z(d),
      b = D || L,
      A = s !== null && F === c ? s.diagnostics : [],
      P = re(s == null ? void 0 : s.pdfAttachmentId),
      z = te(s == null ? void 0 : s.pdfBase64),
      N = P.objectUrl ?? z;
    (n.useEffect(() => {
      if (!(!g || !d)) {
        if (d.status === "completed") {
          if ((v(null), !d.result)) {
            (m(null), f.error("LaTeX compile job finished without a result."));
            return;
          }
          (m(d.result),
            d.result.success
              ? f.success("LaTeX compiled.")
              : f.error(
                  "LaTeX compile failed. " + d.result.diagnostics.map((a) => a.message).join(", "),
                ));
          return;
        }
        d.status === "failed" && (v(null), m(null), f.error("Could not compile LaTeX."));
      }
    }, [d, g]),
      n.useEffect(() => {
        !g || !w.isError || (v(null), m(null), f.error("Could not load LaTeX compile job."));
      }, [g, w.isError]));
    const H = async () => {
      if (!b)
        try {
          k(p);
          const a = c;
          (m(null), $(a));
          const h = await B.mutateAsync({ input: { source: a } });
          v(h.id);
        } catch (a) {
          f.error(a instanceof Error ? a.message : "Could not compile LaTeX.");
        }
    };
    ae({ enabled: e && !b, keyCode: ["Enter", "KeyS"], onShortcut: H });
    const R = async (a) => {
      a.preventDefault();
      try {
        const h = k(p),
          J = await E.mutateAsync({ input: { name: h, source: c } });
        (x(J), f.success("LaTeX project created."));
      } catch (h) {
        f.error(h instanceof Error ? h.message : "Could not create LaTeX project.");
      }
    };
    return t.jsxs(se, {
      anchor: "right",
      open: e,
      onClose: i,
      slotProps: { paper: { variant: "panel", sx: ce } },
      children: [
        t.jsxs(r, {
          sx: de,
          children: [
            t.jsx(j, { variant: "h6", color: "textPrimary", children: "Create LaTeX project" }),
            t.jsx(V, {
              "aria-label": "Close add LaTeX drawer",
              disableRipple: !0,
              onClick: i,
              children: t.jsx(W, { size: 18 }),
            }),
          ],
        }),
        t.jsxs(r, {
          component: "form",
          sx: xe,
          onSubmit: R,
          children: [
            t.jsx(oe, {
              autoFocus: !0,
              label: "Project name",
              value: p,
              disabled: b,
              size: "small",
              onChange: (a) => {
                u(a.target.value);
              },
            }),
            t.jsxs(r, {
              sx: pe,
              children: [
                t.jsx(Se, {
                  fileName: ee,
                  draftSource: c,
                  diagnostics: A,
                  isBusy: b,
                  onSourceChange: (a) => {
                    (l(a), m(null));
                  },
                }),
                t.jsx(ve, {
                  compileResult: s,
                  diagnostics: A,
                  isCompiling: L,
                  pdfUrl: N,
                  isPdfLoading: P.isLoading,
                  hasPdfError: !!P.error,
                }),
              ],
            }),
            t.jsxs(r, {
              sx: ue,
              children: [
                t.jsx(T, {
                  type: "button",
                  variant: "text",
                  color: "secondary",
                  disableRipple: !0,
                  disabled: b,
                  onClick: i,
                  children: "Cancel",
                }),
                t.jsx(T, {
                  type: "button",
                  variant: "outlined",
                  tooltip: "Compile (Ctrl+Enter / Cmd+Enter / Ctrl+S / Cmd+S)",
                  disableRipple: !0,
                  disabled: b,
                  startIcon: L
                    ? t.jsx(C, { size: 16, thickness: 5, color: "inherit" })
                    : t.jsx(ie, { size: 16 }),
                  onClick: () => {
                    H();
                  },
                  children: L ? "Compiling..." : "Compile",
                }),
                t.jsx(T, {
                  type: "submit",
                  variant: "contained",
                  disableRipple: !0,
                  disabled: b,
                  startIcon: D
                    ? t.jsx(C, { size: 16, thickness: 5, color: "inherit" })
                    : t.jsx(ne, { size: 16 }),
                  children: D ? "Creating..." : "Create",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
export { Ze as LatexDocumentCreateDrawer };
