/** Behavior-preserving recovery of latexTextPatterns-B444ow6Q.js. */

export const latexEmphasisPattern = /\\(emph|textit|textbf|texttt)\{((?:[^{}]|\{[^{}]*\})*)\}/g;
export const latexReferencePattern = /\\(?:eqref|ref)\{([^}]+)\}/g;
export const latexCitationPattern = /\\cite\{([^}]+)\}/g;
export const latexParagraphPattern = /\s*\\par\b\s*/g;
