import { L as o, D as l } from "./useLatexQueries-DBpKOPUv.js";
import { L as m, a as T, b as E } from "./latexTextPatterns-B444ow6Q.js";
const L = /\\title(?:\s*\[[^\]]*])?\s*\{((?:[^{}]|\{[^{}]*\})*)\}/i,
  i = (t) => {
    const e = t.trim();
    return e.toLowerCase().endsWith(o) ? e.slice(0, -o.length) : e;
  },
  A = (t) => {
    const e = i(t).trim();
    if (!e) throw new Error("LaTeX file name must not be blank.");
    if (e.includes("/") || e.includes("\\"))
      throw new Error("LaTeX file name must not contain path separators.");
    return `${e}${o}`;
  },
  s = (t) => {
    const e = i(t).trim();
    if (!e) throw new Error("LaTeX project name must not be blank.");
    if (e.includes("/") || e.includes("\\"))
      throw new Error("LaTeX project name must not contain path separators.");
    return e;
  },
  d = (t, e = l) => {
    const a = s(e),
      r = new Set(t.map((n) => s(n.name).toLowerCase()));
    if (!r.has(a.toLowerCase())) return a;
    for (let n = 2; n < 1e3; n += 1) {
      const c = `${a}-${n}`;
      if (!r.has(c.toLowerCase())) return c;
    }
    throw new Error("Could not allocate a unique LaTeX project name.");
  },
  u = (t) =>
    t
      .replace(/\\\\(?:\[[^\]]*])?/g, " ")
      .replace(m, "$2")
      .replace(T, "$1")
      .replace(E, "$1")
      .replace(/\\[a-zA-Z]+\*?(?:\[[^\]]*])?/g, "")
      .replace(/[{}]/g, "")
      .replace(/~/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  w = (t) => {
    var r;
    const e = (r = L.exec(t)) == null ? void 0 : r[1];
    if (!e) return null;
    const a = u(e)
      .replace(/[\\/]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    return a ? s(a) : null;
  };
export { s as a, d as b, A as c, w as g };
