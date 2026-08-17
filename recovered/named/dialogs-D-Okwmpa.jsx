import {
  j as e,
  T as _Component2,
  _ as _Component5,
  r as j,
  B as _Component9,
  g as c,
} from "./index-BM3ZINIl.js";
import {
  D as _Component7,
  a as _Component,
  b as _Component4,
  c as _Component6,
  C as _Component8,
} from "./MChip-DiH8NXBU.js";
import { F as T } from "./MarkdownHighlights-C-ZhT8z1.js";
import { T as S } from "./TextField-D8vc_sXz.js";
import { C as A } from "./OpenInNewRounded-D-7V5TzF.js";
import { A as _Component3 } from "./Alert-DnFVD8li.js";
const M = ({
  error: t,
  isDiscarding: a = false,
  isSaving: r,
  open: n,
  onCancel: i,
  onDiscard: l,
  onSaveAndContinue: d,
}) => (
  <_Component7
    open={n}
    aria-labelledby="latex-unsaved-changes-title"
    onClose={r || a ? undefined : i}
  >
    <_Component id="latex-unsaved-changes-title">Save your changes?</_Component>
    <_Component4>
      <_Component2 variant="body2" color="textSecondary">
        This file has changes that have not reached the server. Save them before
        continuing, or explicitly discard the local draft.
      </_Component2>
      {t && (
        <_Component3 severity="error" variant="outlined">
          {t.message}
        </_Component3>
      )}
    </_Component4>
    <_Component6>
      <_Component5 variant="outlined" disabled={r || a} onClick={i}>
        Stay here
      </_Component5>
      <_Component5 color="error" disabled={r || a} onClick={l}>
        {a ? "Discarding…" : "Discard and continue"}
      </_Component5>
      <_Component5 variant="contained" disabled={r || a} onClick={d}>
        {r ? "Saving…" : "Save and continue"}
      </_Component5>
    </_Component6>
  </_Component7>
);
const F = ({
  error: t,
  isDiscarding: a = false,
  isCurrentRevision: r,
  open: n,
  record: i,
  onDiscard: l,
  onRestore: d,
}) => (
  <_Component7
    open={n}
    aria-labelledby="latex-recovery-title"
    maxWidth="sm"
    fullWidth={true}
  >
    <_Component id="latex-recovery-title">Recover local changes</_Component>
    <_Component4>
      <_Component2 variant="body2" color="textSecondary">
        A newer local draft for{" "}
        {(i == null ? undefined : i.fileName) ?? "this file"} survived a refresh
        or browser crash.
      </_Component2>
      {!r && (
        <_Component3 severity="warning" variant="outlined">
          The server copy changed after this recovery draft was created.
          Restoring it will keep the local text for review, but the next save
          may require conflict resolution.
        </_Component3>
      )}
      {t && (
        <_Component3 severity="error" variant="outlined">
          {t.message}
        </_Component3>
      )}
    </_Component4>
    <_Component6>
      <_Component5 color="error" disabled={a} onClick={l}>
        {a ? "Discarding…" : "Discard local draft"}
      </_Component5>
      <_Component5 variant="contained" disabled={a} onClick={d}>
        Restore draft
      </_Component5>
    </_Component6>
  </_Component7>
);
const O = ({
  currentRevision: t,
  error: a,
  isReloading: r = false,
  open: n,
  onKeepLocalChanges: i,
  onReloadServerCopy: l,
}) => (
  <_Component7
    open={n}
    fullWidth={true}
    maxWidth="sm"
    aria-labelledby="latex-save-conflict-title"
  >
    <_Component id="latex-save-conflict-title">
      This project changed elsewhere
    </_Component>
    <_Component4>
      <_Component2 variant="body2" color="textSecondary">
        Another tab or device saved a newer revision. Reload the server copy to
        avoid overwriting it, or explicitly keep your local text and save it on
        top of revision {t ?? "the latest"}.
      </_Component2>
      {a && (
        <_Component3 severity="error" variant="outlined">
          {a.message}
        </_Component3>
      )}
    </_Component4>
    <_Component6>
      <_Component5 variant="outlined" disabled={r} onClick={l}>
        {r ? "Reloading…" : "Reload server copy"}
      </_Component5>
      <_Component5
        color="warning"
        variant="contained"
        disabled={t === null || r}
        onClick={i}
      >
        Keep my local changes
      </_Component5>
    </_Component6>
  </_Component7>
);
const D = ({
  isDeleting: t,
  open: a,
  target: r,
  onCancel: n,
  onConfirm: i,
}) => (
  <A
    open={a}
    title={`Delete ${r}?`}
    message="This removes the item from your active workspace. The server keeps a recoverable archived record."
    confirmLabel="Delete"
    pendingConfirmLabel="Deleting..."
    confirmColor="error"
    isPending={t}
    onClose={n}
    onConfirm={i}
  />
);
const p = [
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
    description:
      "A polished widescreen slide deck with title and content frames.",
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
];
const L = (t) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: t.spacing(1),
  marginTop: t.spacing(1.5),
  [t.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
});
const R = (t) => (a) => ({
  minHeight: "7rem",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: a.spacing(1),
  padding: a.spacing(1.25),
  border: `1px solid ${t ? c(a.palette.primary.main, 0.55) : c(a.palette.text.primary, 0.12)}`,
  borderRadius: a.shape.borderRadiusPx,
  backgroundColor: t
    ? c(a.palette.primary.main, 0.1)
    : c(a.palette.background.paper, 0.55),
  color: a.palette.text.primary,
  textAlign: "left",
  cursor: "pointer",
  transition: a.transitions.create([
    "background-color",
    "border-color",
    "transform",
  ]),
  "&:hover": {
    borderColor: c(a.palette.primary.main, 0.4),
    backgroundColor: c(a.palette.primary.main, 0.07),
    transform: "translateY(-1px)",
  },
  "&:focus-visible": {
    outline: `2px solid ${c(a.palette.primary.main, 0.45)}`,
    outlineOffset: 2,
  },
});
const P = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: 0.35,
};
const N = ({ isCreating: t, open: a, onClose: r, onCreate: n }) => {
  const [i, l] = j.useState("article");
  const d = j.useMemo(() => p.find((o) => o.id === i) ?? p[0], [i]);
  const [y, k] = j.useState(p[0].projectName);
  const C = (o) => {
    l(o.id);
    k(o.projectName);
  };
  return (
    <_Component7
      open={a}
      fullWidth={true}
      maxWidth="md"
      aria-labelledby="latex-create-project-title"
      onClose={t ? undefined : r}
    >
      <_Component id="latex-create-project-title">
        Create a LaTeX project
      </_Component>
      <_Component4 dividers={true}>
        <_Component2 variant="body2" color="textSecondary">
          Pick a starting point and name the project. A main.tex file is created
          automatically; you can add folders, bibliography files, packages, and
          assets afterward.
        </_Component2>
        <_Component9 sx={L}>
          {p.map((o) => {
            const f = o.id === i;
            return (
              <_Component9
                component="button"
                type="button"
                aria-pressed={f}
                sx={R(f)}
                onClick={() => {
                  C(o);
                }}
                key={o.id}
              >
                {f ? <_Component8 size={20} /> : <T size={20} />}
                <_Component9 sx={P}>
                  <_Component2 variant="subtitle1">{o.name}</_Component2>
                  <_Component2 variant="body2" color="textSecondary">
                    {o.description}
                  </_Component2>
                </_Component9>
              </_Component9>
            );
          })}
        </_Component9>
        <S
          fullWidth={true}
          autoFocus={true}
          margin="normal"
          label="Project name"
          value={y}
          onChange={(o) => {
            k(o.target.value);
          }}
        />
      </_Component4>
      <_Component6>
        <_Component5 variant="outlined" disabled={t} onClick={r}>
          Cancel
        </_Component5>
        <_Component5
          variant="contained"
          disabled={t || y.trim().length === 0}
          onClick={() => {
            n({
              name: y,
              source: d.source,
              templateId: d.id,
            }).then((o) => {
              if (o) {
                r();
              }
            });
          }}
        >
          {t ? "Creating…" : "Create project"}
        </_Component5>
      </_Component6>
    </_Component7>
  );
};
const U = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      LatexCreateProjectDialog: N,
      LatexDeleteConfirmationDialog: D,
    },
    Symbol.toStringTag,
    {
      value: "Module",
    },
  ),
);
export { N as L, D as a, M as b, F as c, O as d, U as e };
