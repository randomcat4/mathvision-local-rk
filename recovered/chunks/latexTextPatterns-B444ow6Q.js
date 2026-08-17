const A = /\\(emph|textit|textbf|texttt)\{((?:[^{}]|\{[^{}]*\})*)\}/g,
  T = /\\(?:eqref|ref)\{([^}]+)\}/g,
  t = /\\cite\{([^}]+)\}/g,
  E = /\s*\\par\b\s*/g;
export { A as L, T as a, t as b, E as c };
