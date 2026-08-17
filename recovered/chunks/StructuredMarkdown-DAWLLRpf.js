import { j as I } from "./index-BM3ZINIl.js";
import { a as x } from "./Markdown-Dh8LhaRc.js";
import { t as M } from "./MarkdownHighlights-C-ZhT8z1.js";
import {
  t as g,
  a as w,
  A as k,
  i as h,
  b as A,
  c as E,
  g as R,
} from "./MessageBubble-DqxHrk03.js";
import { a as L, p as S } from "./assistantStructuredResponseLazy-CCAemx3W.js";
const _ =
    /\(\s*\[([^\]\n]+)\]\((<[^>\n]+>|https?:\/\/[^\s)\n]+)(?:\s+(?:"[^"\n]*"|'[^'\n]*'|\([^)\n]*\)))?\)\s*\)/gi,
  N = /\[([^\]\n]+)\]\((<https?:\/\/[^>\n]+>|https?:\/\/[^\s)\n]+)\)/gi,
  b = (t) => t.trim().replace(/^<|>$/g, ""),
  $ = (t) =>
    t
      .replace(/\\/g, "")
      .trim()
      .replace(/^https?:\/\//i, "")
      .replace(/^www\./i, "")
      .replace(/[./]+$/g, "")
      .toLowerCase(),
  v = (t) => {
    try {
      return new URL(b(t)).hostname.replace(/^www\./i, "").toLowerCase();
    } catch {
      return null;
    }
  },
  P = (t, r) => {
    const n = v(r);
    return n ? $(t) === n : !1;
  },
  p = (t, r) => `[${t}](${r} "${k}")`,
  B = (t) => t.replace(_, (r, n, i) => p(n, i)).replace(N, (r, n, i) => (P(n, i) ? p(n, i) : r)),
  D = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  K = (t) =>
    t.replace(/\\([\\/"bfnrt])/g, (r, n) =>
      n === "b"
        ? "\b"
        : n === "f"
          ? "\f"
          : n === "n"
            ? `
`
            : n === "r"
              ? "\r"
              : n === "t"
                ? "	"
                : n,
    ),
  O = (t) => {
    const r = t.trim(),
      n = K(r).trim();
    return [...new Set([r, n])].filter(Boolean);
  },
  y = (t, r) => {
    if (r.index === void 0) return null;
    const n = r.index,
      i = n + r[0].length,
      o = h(t, n) || h(t, i) ? A(t, i) : i;
    return E(t, o) ? null : o;
  },
  j = /\[([^\]\n]+)\](?!\s*\()/g,
  U = /\s*[,;]\s*/,
  W = (t, r) => {
    const n = new Map(
      r.flatMap((i) => {
        var s;
        const o = i.source_id.trim(),
          a = (s = i.link) == null ? void 0 : s.trim();
        return o && a ? [[o, { href: a, sourceId: o }]] : [];
      }),
    );
    return n.size === 0
      ? t
      : M(t, (i) =>
          i.replace(j, (o, a, s) => {
            const u = i[s - 1],
              d = i[s + o.length];
            if (u === "!" || u === "[" || d === "]") return o;
            const c = a
              .split(U)
              .map((e) => e.trim())
              .filter(Boolean)
              .map((e) => n.get(e));
            return c.length === 0 || c.some((e) => e === void 0)
              ? o
              : c
                  .map((e) => {
                    if (!e) throw new Error("Literature source marker resolved without a source.");
                    return p(w(`[${e.sourceId}]`), g(e.href));
                  })
                  .join(" ");
          }),
        );
  },
  z = (t, r) => r.some((n) => t.includes(n.url)),
  H = (t) =>
    t
      .map((r) => {
        const n = w(R(r));
        return p(n, g(r.url));
      })
      .join(""),
  J = (t, r, n) => {
    var a;
    if (!t.trim() || r.length === 0 || n.length === 0) return t;
    const i = new Map(r.map((s) => [s.id, s]));
    let o = t;
    for (const s of n) {
      const u = (a = s.anchorText ?? s.citedText) == null ? void 0 : a.trim();
      if (!u) continue;
      const d = s.sourceIds.map((e) => i.get(e)).filter((e) => e !== void 0);
      if (d.length === 0 || z(o, d)) continue;
      const l = O(u)
        .map((e) => {
          const m = new RegExp(D(e).replace(/\s+/g, "\\s+"), "g");
          return [...o.matchAll(m)];
        })
        .find((e) => e.length === 1 && e[0].index !== void 0);
      if (!l || l[0].index === void 0) continue;
      const c = y(o, l[0]);
      c !== null && (o = `${o.slice(0, c)} ${H(d)}${o.slice(c)}`);
    }
    return o;
  },
  X = ({
    areCitationPreviewsEnabled: t = !0,
    components: r,
    content: n,
    citations: i = [],
    definitionHighlights: o = [],
    mathLabelPrefix: a,
    mathSyntax: s = "compatibility",
    literatureSources: u = [],
    mode: d = "default",
    sources: l = [],
    sx: c,
  }) => {
    if (!n.trim()) return null;
    const e = d === "compact",
      m = W(n, u),
      T = e ? m : B(J(m, l, i)),
      f = !e || u.length > 0 ? (t ? L : S) : void 0,
      C = f && r ? { ...f, ...r } : (r ?? f);
    return I.jsx(x, {
      content: T,
      mathLabelPrefix: e ? void 0 : a,
      mathSyntax: s,
      mode: d,
      sx: c,
      components: C,
      highlights: e ? void 0 : o,
      showCodeCopyButton: !e,
    });
  };
export { X as S };
