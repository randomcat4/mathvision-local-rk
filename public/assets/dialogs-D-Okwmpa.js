import { j as e, T as m, _ as s, r as j, B as v, g as c } from "./index-BM3ZINIl.js";
import { D as u, a as x, b as g, c as b, C as w } from "./MChip-DiH8NXBU.js";
import { F as T } from "./MarkdownHighlights-C-ZhT8z1.js";
import { T as S } from "./TextField-D8vc_sXz.js";
import { C as A } from "./OpenInNewRounded-D-7V5TzF.js";
import { A as h } from "./Alert-DnFVD8li.js";
const M = ({
    error: t,
    isDiscarding: a = !1,
    isSaving: r,
    open: n,
    onCancel: i,
    onDiscard: l,
    onSaveAndContinue: d,
  }) =>
    e.jsxs(u, {
      open: n,
      "aria-labelledby": "latex-unsaved-changes-title",
      onClose: r || a ? void 0 : i,
      children: [
        e.jsx(x, { id: "latex-unsaved-changes-title", children: "Save your changes?" }),
        e.jsxs(g, {
          children: [
            e.jsx(m, {
              variant: "body2",
              color: "textSecondary",
              children:
                "This file has changes that have not reached the server. Save them before continuing, or explicitly discard the local draft.",
            }),
            t && e.jsx(h, { severity: "error", variant: "outlined", children: t.message }),
          ],
        }),
        e.jsxs(b, {
          children: [
            e.jsx(s, { variant: "outlined", disabled: r || a, onClick: i, children: "Stay here" }),
            e.jsx(s, {
              color: "error",
              disabled: r || a,
              onClick: l,
              children: a ? "Discarding…" : "Discard and continue",
            }),
            e.jsx(s, {
              variant: "contained",
              disabled: r || a,
              onClick: d,
              children: r ? "Saving…" : "Save and continue",
            }),
          ],
        }),
      ],
    }),
  F = ({
    error: t,
    isDiscarding: a = !1,
    isCurrentRevision: r,
    open: n,
    record: i,
    onDiscard: l,
    onRestore: d,
  }) =>
    e.jsxs(u, {
      open: n,
      "aria-labelledby": "latex-recovery-title",
      maxWidth: "sm",
      fullWidth: !0,
      children: [
        e.jsx(x, { id: "latex-recovery-title", children: "Recover local changes" }),
        e.jsxs(g, {
          children: [
            e.jsxs(m, {
              variant: "body2",
              color: "textSecondary",
              children: [
                "A newer local draft for ",
                (i == null ? void 0 : i.fileName) ?? "this file",
                " survived a refresh or browser crash.",
              ],
            }),
            !r &&
              e.jsx(h, {
                severity: "warning",
                variant: "outlined",
                children:
                  "The server copy changed after this recovery draft was created. Restoring it will keep the local text for review, but the next save may require conflict resolution.",
              }),
            t && e.jsx(h, { severity: "error", variant: "outlined", children: t.message }),
          ],
        }),
        e.jsxs(b, {
          children: [
            e.jsx(s, {
              color: "error",
              disabled: a,
              onClick: l,
              children: a ? "Discarding…" : "Discard local draft",
            }),
            e.jsx(s, { variant: "contained", disabled: a, onClick: d, children: "Restore draft" }),
          ],
        }),
      ],
    }),
  O = ({
    currentRevision: t,
    error: a,
    isReloading: r = !1,
    open: n,
    onKeepLocalChanges: i,
    onReloadServerCopy: l,
  }) =>
    e.jsxs(u, {
      open: n,
      fullWidth: !0,
      maxWidth: "sm",
      "aria-labelledby": "latex-save-conflict-title",
      children: [
        e.jsx(x, { id: "latex-save-conflict-title", children: "This project changed elsewhere" }),
        e.jsxs(g, {
          children: [
            e.jsxs(m, {
              variant: "body2",
              color: "textSecondary",
              children: [
                "Another tab or device saved a newer revision. Reload the server copy to avoid overwriting it, or explicitly keep your local text and save it on top of revision ",
                t ?? "the latest",
                ".",
              ],
            }),
            a && e.jsx(h, { severity: "error", variant: "outlined", children: a.message }),
          ],
        }),
        e.jsxs(b, {
          children: [
            e.jsx(s, {
              variant: "outlined",
              disabled: r,
              onClick: l,
              children: r ? "Reloading…" : "Reload server copy",
            }),
            e.jsx(s, {
              color: "warning",
              variant: "contained",
              disabled: t === null || r,
              onClick: i,
              children: "Keep my local changes",
            }),
          ],
        }),
      ],
    }),
  D = ({ isDeleting: t, open: a, target: r, onCancel: n, onConfirm: i }) =>
    e.jsx(A, {
      open: a,
      title: `Delete ${r}?`,
      message:
        "This removes the item from your active workspace. The server keeps a recoverable archived record.",
      confirmLabel: "Delete",
      pendingConfirmLabel: "Deleting...",
      confirmColor: "error",
      isPending: t,
      onClose: n,
      onConfirm: i,
    }),
  p = [
    {
      id: "article",
      name: "Article",
      description: "A clean article with sensible typography and math packages.",
      projectName: "Untitled article",
      source: String.raw`\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb,amsthm}
\usepackage{graphicx}
\usepackage[hidelinks]{hyperref}

\title{Untitled Article}
\author{}
\date{\today}

\begin{document}
\maketitle

\begin{abstract}
Write a concise summary of your work.
\end{abstract}

\section{Introduction}
Start writing here.

\end{document}
`,
    },
    {
      id: "report",
      name: "Technical report",
      description: "A chapter-based report with contents and bibliography hooks.",
      projectName: "Technical report",
      source: String.raw`\documentclass[11pt]{report}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb,amsthm}
\usepackage{graphicx}
\usepackage[hidelinks]{hyperref}

\title{Technical Report}
\author{}
\date{\today}

\begin{document}
\maketitle
\tableofcontents

\chapter{Introduction}
Start writing here.

\chapter{Results}

\end{document}
`,
    },
    {
      id: "presentation",
      name: "Beamer presentation",
      description: "A polished widescreen slide deck with title and content frames.",
      projectName: "Presentation",
      source: String.raw`\documentclass[aspectratio=169]{beamer}
\usetheme{Madrid}
\usepackage{amsmath,amssymb}

\title{Presentation Title}
\author{}
\date{\today}

\begin{document}

\begin{frame}
  \titlepage
\end{frame}

\begin{frame}{Overview}
  \begin{itemize}
    \item First idea
    \item Second idea
  \end{itemize}
\end{frame}

\end{document}
`,
    },
    {
      id: "research-paper",
      name: "Research paper",
      description: "A two-column paper with theorem environments and BibLaTeX.",
      projectName: "Research paper",
      source: String.raw`\documentclass[10pt,twocolumn]{article}
\usepackage[margin=0.8in]{geometry}
\usepackage{amsmath,amssymb,amsthm}
\usepackage{graphicx}
\usepackage[hidelinks]{hyperref}
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{references.bib}

\newtheorem{theorem}{Theorem}
\newtheorem{lemma}[theorem]{Lemma}

\title{Research Paper}
\author{}
\date{}

\begin{document}
\maketitle

\begin{abstract}
Summarize the problem, method, and principal result.
\end{abstract}

\section{Introduction}

\section{Main result}

\printbibliography
\end{document}
`,
    },
  ],
  L = (t) => ({
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: t.spacing(1),
    marginTop: t.spacing(1.5),
    [t.breakpoints.down("sm")]: { gridTemplateColumns: "1fr" },
  }),
  R = (t) => (a) => ({
    minHeight: "7rem",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: a.spacing(1),
    padding: a.spacing(1.25),
    border: `1px solid ${t ? c(a.palette.primary.main, 0.55) : c(a.palette.text.primary, 0.12)}`,
    borderRadius: a.shape.borderRadiusPx,
    backgroundColor: t ? c(a.palette.primary.main, 0.1) : c(a.palette.background.paper, 0.55),
    color: a.palette.text.primary,
    textAlign: "left",
    cursor: "pointer",
    transition: a.transitions.create(["background-color", "border-color", "transform"]),
    "&:hover": {
      borderColor: c(a.palette.primary.main, 0.4),
      backgroundColor: c(a.palette.primary.main, 0.07),
      transform: "translateY(-1px)",
    },
    "&:focus-visible": {
      outline: `2px solid ${c(a.palette.primary.main, 0.45)}`,
      outlineOffset: 2,
    },
  }),
  P = { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 0.35 },
  N = ({ isCreating: t, open: a, onClose: r, onCreate: n }) => {
    const [i, l] = j.useState("article"),
      d = j.useMemo(() => p.find((o) => o.id === i) ?? p[0], [i]),
      [y, k] = j.useState(p[0].projectName),
      C = (o) => {
        (l(o.id), k(o.projectName));
      };
    return e.jsxs(u, {
      open: a,
      fullWidth: !0,
      maxWidth: "md",
      "aria-labelledby": "latex-create-project-title",
      onClose: t ? void 0 : r,
      children: [
        e.jsx(x, { id: "latex-create-project-title", children: "Create a LaTeX project" }),
        e.jsxs(g, {
          dividers: !0,
          children: [
            e.jsx(m, {
              variant: "body2",
              color: "textSecondary",
              children:
                "Pick a starting point and name the project. A main.tex file is created automatically; you can add folders, bibliography files, packages, and assets afterward.",
            }),
            e.jsx(v, {
              sx: L,
              children: p.map((o) => {
                const f = o.id === i;
                return e.jsxs(
                  v,
                  {
                    component: "button",
                    type: "button",
                    "aria-pressed": f,
                    sx: R(f),
                    onClick: () => {
                      C(o);
                    },
                    children: [
                      f ? e.jsx(w, { size: 20 }) : e.jsx(T, { size: 20 }),
                      e.jsxs(v, {
                        sx: P,
                        children: [
                          e.jsx(m, { variant: "subtitle1", children: o.name }),
                          e.jsx(m, {
                            variant: "body2",
                            color: "textSecondary",
                            children: o.description,
                          }),
                        ],
                      }),
                    ],
                  },
                  o.id,
                );
              }),
            }),
            e.jsx(S, {
              fullWidth: !0,
              autoFocus: !0,
              margin: "normal",
              label: "Project name",
              value: y,
              onChange: (o) => {
                k(o.target.value);
              },
            }),
          ],
        }),
        e.jsxs(b, {
          children: [
            e.jsx(s, { variant: "outlined", disabled: t, onClick: r, children: "Cancel" }),
            e.jsx(s, {
              variant: "contained",
              disabled: t || y.trim().length === 0,
              onClick: () => {
                n({ name: y, source: d.source, templateId: d.id }).then((o) => {
                  o && r();
                });
              },
              children: t ? "Creating…" : "Create project",
            }),
          ],
        }),
      ],
    });
  },
  U = Object.freeze(
    Object.defineProperty(
      { __proto__: null, LatexCreateProjectDialog: N, LatexDeleteConfirmationDialog: D },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
export { N as L, D as a, M as b, F as c, O as d, U as e };
