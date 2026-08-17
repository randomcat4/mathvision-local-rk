import { e as p } from "./MarkdownHighlights-C-ZhT8z1.jsx";
import { c, L as s, a as i, b as T } from "./latexTextPatterns-B444ow6Q.js";
const _ = /\r?\n/,
  m =
    /[ \t]+(\\(?:documentclass|usepackage|newtheorem|theoremstyle|title|author|date|maketitle)\b)/g,
  N =
    /\s*(\\(?:section|subsection|subsubsection|paragraph)\*?(?:\[[^\]]*])?\{(?:[^{}]|\{[^{}]*\})*})\s*/g,
  E =
    "document|abstract|theorem|proposition|lemma|corollary|definition|example|remark|proof|quote|itemize|enumerate|thebibliography",
  L = new RegExp(`(\\\\begin\\{(?:${E})\\}(?:\\[[^\\]]*])?)\\s*`, "g"),
  g = new RegExp(`\\s*(\\\\end\\{(?:${E})\\})`, "g"),
  R = /\s*\$\$\s*/g,
  u = /\s*\\\[\s*/g,
  b = /\s*\\\]\s*/g,
  M = (n) => {
    let e = !0;
    return n.replace(R, () => {
      const a = e
        ? `

$$
`
        : `
$$

`;
      return ((e = !e), a);
    });
  },
  $ = (n) =>
    M(n)
      .replace(
        m,
        `
$1`,
      )
      .replace(
        N,
        `

$1

`,
      )
      .replace(
        L,
        `

$1

`,
      )
      .replace(
        g,
        `

$1

`,
      )
      .replace(
        c,
        `

`,
      )
      .replace(
        u,
        `

\\[
`,
      )
      .replace(
        b,
        `
\\]

`,
      )
      .replace(
        /[ \t]+\n/g,
        `
`,
      )
      .replace(
        /\n[ \t]+/g,
        `
`,
      )
      .replace(
        /\n{3,}/g,
        `

`,
      )
      .trim(),
  P = (n) => {
    const e = n.trim().replace(
      /\r\n?/g,
      `
`,
    );
    return _.test(e) ? e : $(e);
  },
  I = /\\begin\{document\}([\s\S]*?)\\end\{document\}/i,
  O = /(^|[^\\])%.*$/gm,
  h = /\\begin\{abstract\}([\s\S]*?)\\end\{abstract\}/g,
  d = /\\(section|subsection|subsubsection|paragraph)\*?(?:\[[^\]]*])?\{((?:[^{}]|\{[^{}]*\})*)\}/g,
  X =
    /\\begin\{(theorem|proposition|lemma|corollary|definition|example|remark|proof)\}(?:\[([^\]]+)])?([\s\S]*?)\\end\{\1\}/g,
  x = /\\begin\{quote\}([\s\S]*?)\\end\{quote\}/g,
  f = /\\begin\{thebibliography\}(?:\{[^}]*\})?[\s\S]*?\\end\{thebibliography\}/g,
  D = /~?\\label\{[^}]+}/g,
  S = /\\begin\{(itemize|enumerate)\}(?:\[[^\]]*])?/g,
  C = { section: "##", subsection: "###", subsubsection: "####", paragraph: "#####" },
  B = {
    theorem: "Theorem",
    proposition: "Proposition",
    lemma: "Lemma",
    corollary: "Corollary",
    definition: "Definition",
    example: "Example",
    remark: "Remark",
    proof: "Proof",
  },
  k = (n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  y = (n) => {
    var e;
    return (((e = I.exec(n)) == null ? void 0 : e[1]) ?? n).trim();
  },
  z = (n) => {
    const e = new Map();
    for (const [a, r] of Object.entries(p(n))) r.includes("#") || e.set(a.slice(1), r);
    return e;
  },
  w = (n, e) => {
    if (e.size === 0) return n;
    const a = [...e.keys()]
        .sort((t, o) => o.length - t.length)
        .map(k)
        .join("|"),
      r = new RegExp(`\\\\(${a})(?![A-Za-z])`, "g");
    return n.replace(r, (t, o) => e.get(o) ?? t);
  },
  l = (n) =>
    n
      .replace(/\\\\(?:\[[^\]]*])?/g, " ")
      .replace(s, (e, a, r) =>
        a === "textbf" ? `**${r}**` : a === "texttt" ? `\`${r}\`` : `*${r}*`,
      )
      .replace(i, "$1")
      .replace(T, "[$1]")
      .replace(/\\[a-zA-Z]+\*?(?:\[[^\]]*])?/g, "")
      .replace(/[{}]/g, "")
      .replace(/~/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  Y = (n, e, a) => {
    const r = B[n],
      t = e ? l(e) : "";
    return `

**${t ? `${r} (${t})` : r}.**

${a.trim()}

`;
  },
  V = (n) =>
    n
      .trim()
      .split(/\r?\n/)
      .map((e) => (e.trim() ? `> ${e.trim()}` : ">")).join(`
`),
  G = (n) => {
    const e = P(n),
      a = z(e);
    return w(y(e), a)
      .replace(O, "$1")
      .replace(/\\maketitle\b/g, "")
      .replace(f, "")
      .replace(
        h,
        (r, t) => `

## Abstract

${t.trim()}

`,
      )
      .replace(
        d,
        (r, t, o) => `

${C[t]} ${l(o)}

`,
      )
      .replace(X, (r, t, o, A) => Y(t, o, A))
      .replace(
        x,
        (r, t) => `

${V(t)}

`,
      )
      .replace(S, "\\begin{$1}")
      .replace(s, (r, t, o) =>
        t === "textbf" ? `**${o}**` : t === "texttt" ? `\`${o}\`` : `*${o}*`,
      )
      .replace(D, "")
      .replace(i, "$1")
      .replace(T, "[$1]")
      .replace(
        c,
        `

`,
      )
      .replace(/\\(noindent|smallskip|medskip|bigskip)\b/g, "")
      .replace(
        /\n{3,}/g,
        `

`,
      )
      .trim();
  };
export { G as b };
