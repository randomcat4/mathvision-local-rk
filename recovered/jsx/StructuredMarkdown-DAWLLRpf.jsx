import { j as I } from "./index-BM3ZINIl.js";
import { a as _Component } from "./Markdown-Dh8LhaRc.js";
import { t as M } from "./MarkdownHighlights-C-ZhT8z1.js";
import { t as g, a as w, A as k, i as h, b as A, c as E, g as R } from "./MessageBubble-DqxHrk03.js";
import { a as L, p as S } from "./assistantStructuredResponseLazy-CCAemx3W.js";
const _ = /\(\s*\[([^\]\n]+)\]\((<[^>\n]+>|https?:\/\/[^\s)\n]+)(?:\s+(?:"[^"\n]*"|'[^'\n]*'|\([^)\n]*\)))?\)\s*\)/gi;
const N = /\[([^\]\n]+)\]\((<https?:\/\/[^>\n]+>|https?:\/\/[^\s)\n]+)\)/gi;
const b = t => t.trim().replace(/^<|>$/g, "");
const $ = t => t.replace(/\\/g, "").trim().replace(/^https?:\/\//i, "").replace(/^www\./i, "").replace(/[./]+$/g, "").toLowerCase();
const v = t => {
  try {
    return new URL(b(t)).hostname.replace(/^www\./i, "").toLowerCase();
  } catch {
    return null;
  }
};
const P = (t, r) => {
  const n = v(r);
  if (n) {
    return $(t) === n;
  } else {
    return false;
  }
};
const p = (t, r) => `[${t}](${r} "${k}")`;
const B = t => t.replace(_, (r, n, i) => p(n, i)).replace(N, (r, n, i) => P(n, i) ? p(n, i) : r);
const D = t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const K = t => t.replace(/\\([\\/"bfnrt])/g, (r, n) => n === "b" ? "\b" : n === "f" ? "\f" : n === "n" ? `
` : n === "r" ? "\r" : n === "t" ? "\t" : n);
const O = t => {
  const r = t.trim();
  const n = K(r).trim();
  return [...new Set([r, n])].filter(Boolean);
};
const y = (t, r) => {
  if (r.index === undefined) {
    return null;
  }
  const n = r.index;
  const i = n + r[0].length;
  const o = h(t, n) || h(t, i) ? A(t, i) : i;
  if (E(t, o)) {
    return null;
  } else {
    return o;
  }
};
const j = /\[([^\]\n]+)\](?!\s*\()/g;
const U = /\s*[,;]\s*/;
const W = (t, r) => {
  const n = new Map(r.flatMap(i => {
    var s;
    const o = i.source_id.trim();
    const a = (s = i.link) == null ? undefined : s.trim();
    if (o && a) {
      return [[o, {
        href: a,
        sourceId: o
      }]];
    } else {
      return [];
    }
  }));
  if (n.size === 0) {
    return t;
  } else {
    return M(t, i => i.replace(j, (o, a, s) => {
      const u = i[s - 1];
      const d = i[s + o.length];
      if (u === "!" || u === "[" || d === "]") {
        return o;
      }
      const c = a.split(U).map(e => e.trim()).filter(Boolean).map(e => n.get(e));
      if (c.length === 0 || c.some(e => e === undefined)) {
        return o;
      } else {
        return c.map(e => {
          if (!e) {
            throw new Error("Literature source marker resolved without a source.");
          }
          return p(w(`[${e.sourceId}]`), g(e.href));
        }).join(" ");
      }
    }));
  }
};
const z = (t, r) => r.some(n => t.includes(n.url));
const H = t => t.map(r => {
  const n = w(R(r));
  return p(n, g(r.url));
}).join("");
const J = (t, r, n) => {
  var a;
  if (!t.trim() || r.length === 0 || n.length === 0) {
    return t;
  }
  const i = new Map(r.map(s => [s.id, s]));
  let o = t;
  for (const s of n) {
    const u = (a = s.anchorText ?? s.citedText) == null ? undefined : a.trim();
    if (!u) {
      continue;
    }
    const d = s.sourceIds.map(e => i.get(e)).filter(e => e !== undefined);
    if (d.length === 0 || z(o, d)) {
      continue;
    }
    const l = O(u).map(e => {
      const m = new RegExp(D(e).replace(/\s+/g, "\\s+"), "g");
      return [...o.matchAll(m)];
    }).find(e => e.length === 1 && e[0].index !== undefined);
    if (!l || l[0].index === undefined) {
      continue;
    }
    const c = y(o, l[0]);
    if (c !== null) {
      o = `${o.slice(0, c)} ${H(d)}${o.slice(c)}`;
    }
  }
  return o;
};
const X = ({
  areCitationPreviewsEnabled: t = true,
  components: r,
  content: n,
  citations: i = [],
  definitionHighlights: o = [],
  mathLabelPrefix: a,
  mathSyntax: s = "compatibility",
  literatureSources: u = [],
  mode: d = "default",
  sources: l = [],
  sx: c
}) => {
  if (!n.trim()) {
    return null;
  }
  const e = d === "compact";
  const m = W(n, u);
  const T = e ? m : B(J(m, l, i));
  const f = !e || u.length > 0 ? t ? L : S : undefined;
  const C = f && r ? {
    ...f,
    ...r
  } : r ?? f;
  return <_Component content={T} mathLabelPrefix={e ? undefined : a} mathSyntax={s} mode={d} sx={c} components={C} highlights={e ? undefined : o} showCodeCopyButton={!e} />;
};
export { X as S };
