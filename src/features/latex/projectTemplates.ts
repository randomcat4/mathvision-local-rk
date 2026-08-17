export interface LatexProjectTemplate {
  id: string;
  name: string;
  description: string;
  projectName: string;
  source: string;
}

export const latexProjectTemplates: readonly LatexProjectTemplate[] = [
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
] as const;

export function getLatexProjectTemplate(id: string): LatexProjectTemplate {
  return latexProjectTemplates.find((template) => template.id === id) ?? latexProjectTemplates[0];
}
