import { j as y, r as E, B as I, a5 as at, V as lt, g as C } from "./index-BM3ZINIl.js";
import { D as st } from "./katex.min-ADdKj7O-.js";
import {
  t as ve,
  f as ut,
  h as Ae,
  s as he,
  i as ct,
  B as fe,
  j as Ee,
  k as ht,
  l as Se,
  e as ft,
  m as mt,
  n as pt,
  o as dt,
  p as gt,
  q as kt,
  u as xt,
} from "./MarkdownHighlights-C-ZhT8z1.js";
import { C as bt } from "./CopyButton-BcOsqrNJ.js";
import {
  o as L,
  u as B,
  a as ne,
  n as q,
  c as V,
  v as wt,
  t as Fe,
  b as re,
  d as W,
  m as S,
  e as yt,
  f as Ct,
  g as F,
  s as G,
  r as Tt,
  h as D,
  i as O,
  j as Mt,
  M as vt,
  k as At,
} from "./index-DzMT-bSF.js";
import { c as De, v as Et, E as St } from "./index-Yb6ONXKu.js";
var Ft = { inline: ["$", "$"], display: ["$$", "$$"] };
function Dt(e, n) {
  n === void 0 && (n = Ft);
  for (var t = e.querySelectorAll(".katex-mathml + .katex-html"), r = 0; r < t.length; r++) {
    var o = t[r];
    o.remove ? o.remove() : o.parentNode && o.parentNode.removeChild(o);
  }
  for (var l = e.querySelectorAll(".katex-mathml"), i = 0; i < l.length; i++) {
    var s = l[i],
      a = s.querySelector("annotation");
    a &&
      (s.replaceWith ? s.replaceWith(a) : s.parentNode && s.parentNode.replaceChild(a, s),
      (a.innerHTML = n.inline[0] + a.innerHTML + n.inline[1]));
  }
  for (var u = e.querySelectorAll(".katex-display annotation"), h = 0; h < u.length; h++) {
    var c = u[h];
    c.innerHTML =
      n.display[0] +
      c.innerHTML.substr(
        n.inline[0].length,
        c.innerHTML.length - n.inline[0].length - n.inline[1].length,
      ) +
      n.display[1];
  }
  return e;
}
function me(e) {
  var n = e instanceof Element ? e : e.parentElement;
  return n && n.closest(".katex");
}
document.addEventListener("copy", function (e) {
  var n = window.getSelection();
  if (!(!n || n.isCollapsed || !e.clipboardData)) {
    var t = e.clipboardData,
      r = n.getRangeAt(0),
      o = me(r.startContainer);
    o && r.setStartBefore(o);
    var l = me(r.endContainer);
    l && r.setEndAfter(l);
    var i = r.cloneContents();
    if (i.querySelector(".katex-mathml")) {
      var s = Array.prototype.map
        .call(i.childNodes, (a) => (a instanceof Text ? a.textContent : a.outerHTML))
        .join("");
      (t.setData("text/html", s), t.setData("text/plain", Dt(i).textContent), e.preventDefault());
    }
  }
});
function pe(e, n) {
  const t = String(e);
  if (typeof n != "string") throw new TypeError("Expected character");
  let r = 0,
    o = t.indexOf(n);
  for (; o !== -1;) (r++, (o = t.indexOf(n, o + n.length)));
  return r;
}
function Lt(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Rt(e, n, t) {
  const o = De((t || {}).ignore || []),
    l = zt(n);
  let i = -1;
  for (; ++i < l.length;) Et(e, "text", s);
  function s(u, h) {
    let c = -1,
      m;
    for (; ++c < h.length;) {
      const k = h[c],
        f = m ? m.children : void 0;
      if (o(k, f ? f.indexOf(k) : void 0, m)) return;
      m = k;
    }
    if (m) return a(u, h);
  }
  function a(u, h) {
    const c = h[h.length - 1],
      m = l[i][0],
      k = l[i][1];
    let f = 0;
    const b = c.children.indexOf(u);
    let x = !1,
      d = [];
    m.lastIndex = 0;
    let w = m.exec(u.value);
    for (; w;) {
      const v = w.index,
        T = { index: w.index, input: w.input, stack: [...h, u] };
      let M = k(...w, T);
      if (
        (typeof M == "string" && (M = M.length > 0 ? { type: "text", value: M } : void 0),
        M === !1
          ? (m.lastIndex = v + 1)
          : (f !== v && d.push({ type: "text", value: u.value.slice(f, v) }),
            Array.isArray(M) ? d.push(...M) : M && d.push(M),
            (f = v + w[0].length),
            (x = !0)),
        !m.global)
      )
        break;
      w = m.exec(u.value);
    }
    return (
      x
        ? (f < u.value.length && d.push({ type: "text", value: u.value.slice(f) }),
          c.children.splice(b, 1, ...d))
        : (d = [u]),
      b + d.length
    );
  }
}
function zt(e) {
  const n = [];
  if (!Array.isArray(e)) throw new TypeError("Expected find and replace tuple or list of tuples");
  const t = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < t.length;) {
    const o = t[r];
    n.push([It(o[0]), Pt(o[1])]);
  }
  return n;
}
function It(e) {
  return typeof e == "string" ? new RegExp(Lt(e), "g") : e;
}
function Pt(e) {
  return typeof e == "function"
    ? e
    : function () {
        return e;
      };
}
const K = "phrasing",
  Q = ["autolink", "link", "image", "label"];
function $t() {
  return {
    transforms: [Ht],
    enter: {
      literalAutolink: Nt,
      literalAutolinkEmail: Y,
      literalAutolinkHttp: Y,
      literalAutolinkWww: Y,
    },
    exit: {
      literalAutolink: Wt,
      literalAutolinkEmail: Bt,
      literalAutolinkHttp: Ot,
      literalAutolinkWww: jt,
    },
  };
}
function _t() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: K,
        notInConstruct: Q,
      },
      { character: ".", before: "[Ww]", after: "[\\-.\\w]", inConstruct: K, notInConstruct: Q },
      { character: ":", before: "[ps]", after: "\\/", inConstruct: K, notInConstruct: Q },
    ],
  };
}
function Nt(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Y(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Ot(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function jt(e) {
  this.config.exit.data.call(this, e);
  const n = this.stack[this.stack.length - 1];
  (L(n.type === "link"), (n.url = "http://" + this.sliceSerialize(e)));
}
function Bt(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Wt(e) {
  this.exit(e);
}
function Ht(e) {
  Rt(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, qt],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), Ut],
    ],
    { ignore: ["link", "linkReference"] },
  );
}
function qt(e, n, t, r, o) {
  let l = "";
  if (!Le(o) || (/^w/i.test(n) && ((t = n + t), (n = ""), (l = "http://")), !Vt(t))) return !1;
  const i = Xt(t + r);
  if (!i[0]) return !1;
  const s = {
    type: "link",
    title: null,
    url: l + n + i[0],
    children: [{ type: "text", value: n + i[0] }],
  };
  return i[1] ? [s, { type: "text", value: i[1] }] : s;
}
function Ut(e, n, t, r) {
  return !Le(r, !0) || /[-\d_]$/.test(t)
    ? !1
    : {
        type: "link",
        title: null,
        url: "mailto:" + n + "@" + t,
        children: [{ type: "text", value: n + "@" + t }],
      };
}
function Vt(e) {
  const n = e.split(".");
  return !(
    n.length < 2 ||
    (n[n.length - 1] && (/_/.test(n[n.length - 1]) || !/[a-zA-Z\d]/.test(n[n.length - 1]))) ||
    (n[n.length - 2] && (/_/.test(n[n.length - 2]) || !/[a-zA-Z\d]/.test(n[n.length - 2])))
  );
}
function Xt(e) {
  const n = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!n) return [e, void 0];
  e = e.slice(0, n.index);
  let t = n[0],
    r = t.indexOf(")");
  const o = pe(e, "(");
  let l = pe(e, ")");
  for (; r !== -1 && o > l;)
    ((e += t.slice(0, r + 1)), (t = t.slice(r + 1)), (r = t.indexOf(")")), l++);
  return [e, t];
}
function Le(e, n) {
  const t = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || B(t) || ne(t)) && (!n || t !== 47);
}
Re.peek = nn;
function Gt() {
  this.buffer();
}
function Kt(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function Qt() {
  this.buffer();
}
function Yt(e) {
  this.enter({ type: "footnoteDefinition", identifier: "", label: "", children: [] }, e);
}
function Zt(e) {
  const n = this.resume(),
    t = this.stack[this.stack.length - 1];
  (L(t.type === "footnoteReference"),
    (t.identifier = q(this.sliceSerialize(e)).toLowerCase()),
    (t.label = n));
}
function Jt(e) {
  this.exit(e);
}
function en(e) {
  const n = this.resume(),
    t = this.stack[this.stack.length - 1];
  (L(t.type === "footnoteDefinition"),
    (t.identifier = q(this.sliceSerialize(e)).toLowerCase()),
    (t.label = n));
}
function tn(e) {
  this.exit(e);
}
function nn() {
  return "[";
}
function Re(e, n, t, r) {
  const o = t.createTracker(r);
  let l = o.move("[^");
  const i = t.enter("footnoteReference"),
    s = t.enter("reference");
  return (
    (l += o.move(t.safe(t.associationId(e), { after: "]", before: l }))),
    s(),
    i(),
    (l += o.move("]")),
    l
  );
}
function rn() {
  return {
    enter: {
      gfmFootnoteCallString: Gt,
      gfmFootnoteCall: Kt,
      gfmFootnoteDefinitionLabelString: Qt,
      gfmFootnoteDefinition: Yt,
    },
    exit: {
      gfmFootnoteCallString: Zt,
      gfmFootnoteCall: Jt,
      gfmFootnoteDefinitionLabelString: en,
      gfmFootnoteDefinition: tn,
    },
  };
}
function on(e) {
  let n = !1;
  return (
    e && e.firstLineBlank && (n = !0),
    {
      handlers: { footnoteDefinition: t, footnoteReference: Re },
      unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }],
    }
  );
  function t(r, o, l, i) {
    const s = l.createTracker(i);
    let a = s.move("[^");
    const u = l.enter("footnoteDefinition"),
      h = l.enter("label");
    return (
      (a += s.move(l.safe(l.associationId(r), { before: a, after: "]" }))),
      h(),
      (a += s.move("]:")),
      r.children &&
        r.children.length > 0 &&
        (s.shift(4),
        (a += s.move(
          (n
            ? `
`
            : " ") + l.indentLines(l.containerFlow(r, s.current()), n ? ze : an),
        ))),
      u(),
      a
    );
  }
}
function an(e, n, t) {
  return n === 0 ? e : ze(e, n, t);
}
function ze(e, n, t) {
  return (t ? "" : "    ") + e;
}
const ln = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe",
];
Ie.peek = fn;
function sn() {
  return { canContainEols: ["delete"], enter: { strikethrough: cn }, exit: { strikethrough: hn } };
}
function un() {
  return {
    unsafe: [{ character: "~", inConstruct: "phrasing", notInConstruct: ln }],
    handlers: { delete: Ie },
  };
}
function cn(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function hn(e) {
  this.exit(e);
}
function Ie(e, n, t, r) {
  const o = t.createTracker(r),
    l = t.enter("strikethrough");
  let i = o.move("~~");
  return (
    (i += t.containerPhrasing(e, { ...o.current(), before: i, after: "~" })),
    (i += o.move("~~")),
    l(),
    i
  );
}
function fn() {
  return "~";
}
function mn(e) {
  return e.length;
}
function pn(e, n) {
  const t = n || {},
    r = (t.align || []).concat(),
    o = t.stringLength || mn,
    l = [],
    i = [],
    s = [],
    a = [];
  let u = 0,
    h = -1;
  for (; ++h < e.length;) {
    const g = [],
      b = [];
    let x = -1;
    for (e[h].length > u && (u = e[h].length); ++x < e[h].length;) {
      const d = dn(e[h][x]);
      if (t.alignDelimiters !== !1) {
        const w = o(d);
        ((b[x] = w), (a[x] === void 0 || w > a[x]) && (a[x] = w));
      }
      g.push(d);
    }
    ((i[h] = g), (s[h] = b));
  }
  let c = -1;
  if (typeof r == "object" && "length" in r) for (; ++c < u;) l[c] = de(r[c]);
  else {
    const g = de(r);
    for (; ++c < u;) l[c] = g;
  }
  c = -1;
  const m = [],
    k = [];
  for (; ++c < u;) {
    const g = l[c];
    let b = "",
      x = "";
    g === 99 ? ((b = ":"), (x = ":")) : g === 108 ? (b = ":") : g === 114 && (x = ":");
    let d = t.alignDelimiters === !1 ? 1 : Math.max(1, a[c] - b.length - x.length);
    const w = b + "-".repeat(d) + x;
    (t.alignDelimiters !== !1 &&
      ((d = b.length + d + x.length), d > a[c] && (a[c] = d), (k[c] = d)),
      (m[c] = w));
  }
  (i.splice(1, 0, m), s.splice(1, 0, k), (h = -1));
  const f = [];
  for (; ++h < i.length;) {
    const g = i[h],
      b = s[h];
    c = -1;
    const x = [];
    for (; ++c < u;) {
      const d = g[c] || "";
      let w = "",
        v = "";
      if (t.alignDelimiters !== !1) {
        const T = a[c] - (b[c] || 0),
          M = l[c];
        M === 114
          ? (w = " ".repeat(T))
          : M === 99
            ? T % 2
              ? ((w = " ".repeat(T / 2 + 0.5)), (v = " ".repeat(T / 2 - 0.5)))
              : ((w = " ".repeat(T / 2)), (v = w))
            : (v = " ".repeat(T));
      }
      (t.delimiterStart !== !1 && !c && x.push("|"),
        t.padding !== !1 &&
          !(t.alignDelimiters === !1 && d === "") &&
          (t.delimiterStart !== !1 || c) &&
          x.push(" "),
        t.alignDelimiters !== !1 && x.push(w),
        x.push(d),
        t.alignDelimiters !== !1 && x.push(v),
        t.padding !== !1 && x.push(" "),
        (t.delimiterEnd !== !1 || c !== u - 1) && x.push("|"));
    }
    f.push(t.delimiterEnd === !1 ? x.join("").replace(/ +$/, "") : x.join(""));
  }
  return f.join(`
`);
}
function dn(e) {
  return e == null ? "" : String(e);
}
function de(e) {
  const n = typeof e == "string" ? e.codePointAt(0) : 0;
  return n === 67 || n === 99 ? 99 : n === 76 || n === 108 ? 108 : n === 82 || n === 114 ? 114 : 0;
}
function gn(e, n, t, r) {
  const o = t.enter("blockquote"),
    l = t.createTracker(r);
  (l.move("> "), l.shift(2));
  const i = t.indentLines(t.containerFlow(e, l.current()), kn);
  return (o(), i);
}
function kn(e, n, t) {
  return ">" + (t ? "" : " ") + e;
}
function xn(e, n) {
  return ge(e, n.inConstruct, !0) && !ge(e, n.notInConstruct, !1);
}
function ge(e, n, t) {
  if ((typeof n == "string" && (n = [n]), !n || n.length === 0)) return t;
  let r = -1;
  for (; ++r < n.length;) if (e.includes(n[r])) return !0;
  return !1;
}
function ke(e, n, t, r) {
  let o = -1;
  for (; ++o < t.unsafe.length;)
    if (
      t.unsafe[o].character ===
        `
` &&
      xn(t.stack, t.unsafe[o])
    )
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function Pe(e, n) {
  const t = String(e);
  let r = t.indexOf(n),
    o = r,
    l = 0,
    i = 0;
  if (typeof n != "string") throw new TypeError("Expected substring");
  for (; r !== -1;)
    (r === o ? ++l > i && (i = l) : (l = 1), (o = r + n.length), (r = t.indexOf(n, o)));
  return i;
}
function bn(e, n) {
  return !!(
    n.options.fences === !1 &&
    e.value &&
    !e.lang &&
    /[^ \r\n]/.test(e.value) &&
    !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value)
  );
}
function wn(e) {
  const n = e.options.fence || "`";
  if (n !== "`" && n !== "~")
    throw new Error(
      "Cannot serialize code with `" + n + "` for `options.fence`, expected `` ` `` or `~`",
    );
  return n;
}
function yn(e, n, t, r) {
  const o = wn(t),
    l = e.value || "",
    i = o === "`" ? "GraveAccent" : "Tilde";
  if (bn(e, t)) {
    const c = t.enter("codeIndented"),
      m = t.indentLines(l, Cn);
    return (c(), m);
  }
  const s = t.createTracker(r),
    a = o.repeat(Math.max(Pe(l, o) + 1, 3)),
    u = t.enter("codeFenced");
  let h = s.move(a);
  if (e.lang) {
    const c = t.enter(`codeFencedLang${i}`);
    ((h += s.move(t.safe(e.lang, { before: h, after: " ", encode: ["`"], ...s.current() }))), c());
  }
  if (e.lang && e.meta) {
    const c = t.enter(`codeFencedMeta${i}`);
    ((h += s.move(" ")),
      (h += s.move(
        t.safe(e.meta, {
          before: h,
          after: `
`,
          encode: ["`"],
          ...s.current(),
        }),
      )),
      c());
  }
  return (
    (h += s.move(`
`)),
    l &&
      (h += s.move(
        l +
          `
`,
      )),
    (h += s.move(a)),
    u(),
    h
  );
}
function Cn(e, n, t) {
  return (t ? "" : "    ") + e;
}
function ie(e) {
  const n = e.options.quote || '"';
  if (n !== '"' && n !== "'")
    throw new Error(
      "Cannot serialize title with `" + n + "` for `options.quote`, expected `\"`, or `'`",
    );
  return n;
}
function Tn(e, n, t, r) {
  const o = ie(t),
    l = o === '"' ? "Quote" : "Apostrophe",
    i = t.enter("definition");
  let s = t.enter("label");
  const a = t.createTracker(r);
  let u = a.move("[");
  return (
    (u += a.move(t.safe(t.associationId(e), { before: u, after: "]", ...a.current() }))),
    (u += a.move("]: ")),
    s(),
    !e.url || /[\0- \u007F]/.test(e.url)
      ? ((s = t.enter("destinationLiteral")),
        (u += a.move("<")),
        (u += a.move(t.safe(e.url, { before: u, after: ">", ...a.current() }))),
        (u += a.move(">")))
      : ((s = t.enter("destinationRaw")),
        (u += a.move(
          t.safe(e.url, {
            before: u,
            after: e.title
              ? " "
              : `
`,
            ...a.current(),
          }),
        ))),
    s(),
    e.title &&
      ((s = t.enter(`title${l}`)),
      (u += a.move(" " + o)),
      (u += a.move(t.safe(e.title, { before: u, after: o, ...a.current() }))),
      (u += a.move(o)),
      s()),
    i(),
    u
  );
}
function Mn(e) {
  const n = e.options.emphasis || "*";
  if (n !== "*" && n !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + n + "` for `options.emphasis`, expected `*`, or `_`",
    );
  return n;
}
function H(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function X(e, n, t) {
  const r = V(e),
    o = V(n);
  return r === void 0
    ? o === void 0
      ? t === "_"
        ? { inside: !0, outside: !0 }
        : { inside: !1, outside: !1 }
      : o === 1
        ? { inside: !0, outside: !0 }
        : { inside: !1, outside: !0 }
    : r === 1
      ? o === void 0
        ? { inside: !1, outside: !1 }
        : o === 1
          ? { inside: !0, outside: !0 }
          : { inside: !1, outside: !1 }
      : o === void 0
        ? { inside: !1, outside: !1 }
        : o === 1
          ? { inside: !0, outside: !1 }
          : { inside: !1, outside: !1 };
}
$e.peek = vn;
function $e(e, n, t, r) {
  const o = Mn(t),
    l = t.enter("emphasis"),
    i = t.createTracker(r),
    s = i.move(o);
  let a = i.move(t.containerPhrasing(e, { after: o, before: s, ...i.current() }));
  const u = a.charCodeAt(0),
    h = X(r.before.charCodeAt(r.before.length - 1), u, o);
  h.inside && (a = H(u) + a.slice(1));
  const c = a.charCodeAt(a.length - 1),
    m = X(r.after.charCodeAt(0), c, o);
  m.inside && (a = a.slice(0, -1) + H(c));
  const k = i.move(o);
  return (
    l(),
    (t.attentionEncodeSurroundingInfo = { after: m.outside, before: h.outside }),
    s + a + k
  );
}
function vn(e, n, t) {
  return t.options.emphasis || "*";
}
function An(e, n) {
  let t = !1;
  return (
    wt(e, function (r) {
      if (("value" in r && /\r?\n|\r/.test(r.value)) || r.type === "break") return ((t = !0), St);
    }),
    !!((!e.depth || e.depth < 3) && Fe(e) && (n.options.setext || t))
  );
}
function En(e, n, t, r) {
  const o = Math.max(Math.min(6, e.depth || 1), 1),
    l = t.createTracker(r);
  if (An(e, t)) {
    const h = t.enter("headingSetext"),
      c = t.enter("phrasing"),
      m = t.containerPhrasing(e, {
        ...l.current(),
        before: `
`,
        after: `
`,
      });
    return (
      c(),
      h(),
      m +
        `
` +
        (o === 1 ? "=" : "-").repeat(
          m.length -
            (Math.max(
              m.lastIndexOf("\r"),
              m.lastIndexOf(`
`),
            ) +
              1),
        )
    );
  }
  const i = "#".repeat(o),
    s = t.enter("headingAtx"),
    a = t.enter("phrasing");
  l.move(i + " ");
  let u = t.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...l.current(),
  });
  return (
    /^[\t ]/.test(u) && (u = H(u.charCodeAt(0)) + u.slice(1)),
    (u = u ? i + " " + u : i),
    t.options.closeAtx && (u += " " + i),
    a(),
    s(),
    u
  );
}
_e.peek = Sn;
function _e(e) {
  return e.value || "";
}
function Sn() {
  return "<";
}
Ne.peek = Fn;
function Ne(e, n, t, r) {
  const o = ie(t),
    l = o === '"' ? "Quote" : "Apostrophe",
    i = t.enter("image");
  let s = t.enter("label");
  const a = t.createTracker(r);
  let u = a.move("![");
  return (
    (u += a.move(t.safe(e.alt, { before: u, after: "]", ...a.current() }))),
    (u += a.move("](")),
    s(),
    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
      ? ((s = t.enter("destinationLiteral")),
        (u += a.move("<")),
        (u += a.move(t.safe(e.url, { before: u, after: ">", ...a.current() }))),
        (u += a.move(">")))
      : ((s = t.enter("destinationRaw")),
        (u += a.move(t.safe(e.url, { before: u, after: e.title ? " " : ")", ...a.current() })))),
    s(),
    e.title &&
      ((s = t.enter(`title${l}`)),
      (u += a.move(" " + o)),
      (u += a.move(t.safe(e.title, { before: u, after: o, ...a.current() }))),
      (u += a.move(o)),
      s()),
    (u += a.move(")")),
    i(),
    u
  );
}
function Fn() {
  return "!";
}
Oe.peek = Dn;
function Oe(e, n, t, r) {
  const o = e.referenceType,
    l = t.enter("imageReference");
  let i = t.enter("label");
  const s = t.createTracker(r);
  let a = s.move("![");
  const u = t.safe(e.alt, { before: a, after: "]", ...s.current() });
  ((a += s.move(u + "][")), i());
  const h = t.stack;
  ((t.stack = []), (i = t.enter("reference")));
  const c = t.safe(t.associationId(e), { before: a, after: "]", ...s.current() });
  return (
    i(),
    (t.stack = h),
    l(),
    o === "full" || !u || u !== c
      ? (a += s.move(c + "]"))
      : o === "shortcut"
        ? (a = a.slice(0, -1))
        : (a += s.move("]")),
    a
  );
}
function Dn() {
  return "!";
}
je.peek = Ln;
function je(e, n, t) {
  let r = e.value || "",
    o = "`",
    l = -1;
  for (; new RegExp("(^|[^`])" + o + "([^`]|$)").test(r);) o += "`";
  for (
    /[^ \r\n]/.test(r) &&
    ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) &&
    (r = " " + r + " ");
    ++l < t.unsafe.length;
  ) {
    const i = t.unsafe[l],
      s = t.compilePattern(i);
    let a;
    if (i.atBreak)
      for (; (a = s.exec(r));) {
        let u = a.index;
        (r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--,
          (r = r.slice(0, u) + " " + r.slice(a.index + 1)));
      }
  }
  return o + r + o;
}
function Ln() {
  return "`";
}
function Be(e, n) {
  const t = Fe(e);
  return !!(
    !n.options.resourceLink &&
    e.url &&
    !e.title &&
    e.children &&
    e.children.length === 1 &&
    e.children[0].type === "text" &&
    (t === e.url || "mailto:" + t === e.url) &&
    /^[a-z][a-z+.-]+:/i.test(e.url) &&
    !/[\0- <>\u007F]/.test(e.url)
  );
}
We.peek = Rn;
function We(e, n, t, r) {
  const o = ie(t),
    l = o === '"' ? "Quote" : "Apostrophe",
    i = t.createTracker(r);
  let s, a;
  if (Be(e, t)) {
    const h = t.stack;
    ((t.stack = []), (s = t.enter("autolink")));
    let c = i.move("<");
    return (
      (c += i.move(t.containerPhrasing(e, { before: c, after: ">", ...i.current() }))),
      (c += i.move(">")),
      s(),
      (t.stack = h),
      c
    );
  }
  ((s = t.enter("link")), (a = t.enter("label")));
  let u = i.move("[");
  return (
    (u += i.move(t.containerPhrasing(e, { before: u, after: "](", ...i.current() }))),
    (u += i.move("](")),
    a(),
    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
      ? ((a = t.enter("destinationLiteral")),
        (u += i.move("<")),
        (u += i.move(t.safe(e.url, { before: u, after: ">", ...i.current() }))),
        (u += i.move(">")))
      : ((a = t.enter("destinationRaw")),
        (u += i.move(t.safe(e.url, { before: u, after: e.title ? " " : ")", ...i.current() })))),
    a(),
    e.title &&
      ((a = t.enter(`title${l}`)),
      (u += i.move(" " + o)),
      (u += i.move(t.safe(e.title, { before: u, after: o, ...i.current() }))),
      (u += i.move(o)),
      a()),
    (u += i.move(")")),
    s(),
    u
  );
}
function Rn(e, n, t) {
  return Be(e, t) ? "<" : "[";
}
He.peek = zn;
function He(e, n, t, r) {
  const o = e.referenceType,
    l = t.enter("linkReference");
  let i = t.enter("label");
  const s = t.createTracker(r);
  let a = s.move("[");
  const u = t.containerPhrasing(e, { before: a, after: "]", ...s.current() });
  ((a += s.move(u + "][")), i());
  const h = t.stack;
  ((t.stack = []), (i = t.enter("reference")));
  const c = t.safe(t.associationId(e), { before: a, after: "]", ...s.current() });
  return (
    i(),
    (t.stack = h),
    l(),
    o === "full" || !u || u !== c
      ? (a += s.move(c + "]"))
      : o === "shortcut"
        ? (a = a.slice(0, -1))
        : (a += s.move("]")),
    a
  );
}
function zn() {
  return "[";
}
function oe(e) {
  const n = e.options.bullet || "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bullet`, expected `*`, `+`, or `-`",
    );
  return n;
}
function In(e) {
  const n = oe(e),
    t = e.options.bulletOther;
  if (!t) return n === "*" ? "-" : "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" +
        t +
        "` for `options.bulletOther`, expected `*`, `+`, or `-`",
    );
  if (t === n)
    throw new Error(
      "Expected `bullet` (`" + n + "`) and `bulletOther` (`" + t + "`) to be different",
    );
  return t;
}
function Pn(e) {
  const n = e.options.bulletOrdered || ".";
  if (n !== "." && n !== ")")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOrdered`, expected `.` or `)`",
    );
  return n;
}
function qe(e) {
  const n = e.options.rule || "*";
  if (n !== "*" && n !== "-" && n !== "_")
    throw new Error(
      "Cannot serialize rules with `" + n + "` for `options.rule`, expected `*`, `-`, or `_`",
    );
  return n;
}
function $n(e, n, t, r) {
  const o = t.enter("list"),
    l = t.bulletCurrent;
  let i = e.ordered ? Pn(t) : oe(t);
  const s = e.ordered ? (i === "." ? ")" : ".") : In(t);
  let a = n && t.bulletLastUsed ? i === t.bulletLastUsed : !1;
  if (!e.ordered) {
    const h = e.children ? e.children[0] : void 0;
    if (
      ((i === "*" || i === "-") &&
        h &&
        (!h.children || !h.children[0]) &&
        t.stack[t.stack.length - 1] === "list" &&
        t.stack[t.stack.length - 2] === "listItem" &&
        t.stack[t.stack.length - 3] === "list" &&
        t.stack[t.stack.length - 4] === "listItem" &&
        t.indexStack[t.indexStack.length - 1] === 0 &&
        t.indexStack[t.indexStack.length - 2] === 0 &&
        t.indexStack[t.indexStack.length - 3] === 0 &&
        (a = !0),
      qe(t) === i && h)
    ) {
      let c = -1;
      for (; ++c < e.children.length;) {
        const m = e.children[c];
        if (
          m &&
          m.type === "listItem" &&
          m.children &&
          m.children[0] &&
          m.children[0].type === "thematicBreak"
        ) {
          a = !0;
          break;
        }
      }
    }
  }
  (a && (i = s), (t.bulletCurrent = i));
  const u = t.containerFlow(e, r);
  return ((t.bulletLastUsed = i), (t.bulletCurrent = l), o(), u);
}
function _n(e) {
  const n = e.options.listItemIndent || "one";
  if (n !== "tab" && n !== "one" && n !== "mixed")
    throw new Error(
      "Cannot serialize items with `" +
        n +
        "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`",
    );
  return n;
}
function Nn(e, n, t, r) {
  const o = _n(t);
  let l = t.bulletCurrent || oe(t);
  n &&
    n.type === "list" &&
    n.ordered &&
    (l =
      (typeof n.start == "number" && n.start > -1 ? n.start : 1) +
      (t.options.incrementListMarker === !1 ? 0 : n.children.indexOf(e)) +
      l);
  let i = l.length + 1;
  (o === "tab" || (o === "mixed" && ((n && n.type === "list" && n.spread) || e.spread))) &&
    (i = Math.ceil(i / 4) * 4);
  const s = t.createTracker(r);
  (s.move(l + " ".repeat(i - l.length)), s.shift(i));
  const a = t.enter("listItem"),
    u = t.indentLines(t.containerFlow(e, s.current()), h);
  return (a(), u);
  function h(c, m, k) {
    return m ? (k ? "" : " ".repeat(i)) + c : (k ? l : l + " ".repeat(i - l.length)) + c;
  }
}
function On(e, n, t, r) {
  const o = t.enter("paragraph"),
    l = t.enter("phrasing"),
    i = t.containerPhrasing(e, r);
  return (l(), o(), i);
}
const jn = De([
  "break",
  "delete",
  "emphasis",
  "footnote",
  "footnoteReference",
  "image",
  "imageReference",
  "inlineCode",
  "inlineMath",
  "link",
  "linkReference",
  "mdxJsxTextElement",
  "mdxTextExpression",
  "strong",
  "text",
  "textDirective",
]);
function Bn(e, n, t, r) {
  return (
    e.children.some(function (i) {
      return jn(i);
    })
      ? t.containerPhrasing
      : t.containerFlow
  ).call(t, e, r);
}
function Wn(e) {
  const n = e.options.strong || "*";
  if (n !== "*" && n !== "_")
    throw new Error(
      "Cannot serialize strong with `" + n + "` for `options.strong`, expected `*`, or `_`",
    );
  return n;
}
Ue.peek = Hn;
function Ue(e, n, t, r) {
  const o = Wn(t),
    l = t.enter("strong"),
    i = t.createTracker(r),
    s = i.move(o + o);
  let a = i.move(t.containerPhrasing(e, { after: o, before: s, ...i.current() }));
  const u = a.charCodeAt(0),
    h = X(r.before.charCodeAt(r.before.length - 1), u, o);
  h.inside && (a = H(u) + a.slice(1));
  const c = a.charCodeAt(a.length - 1),
    m = X(r.after.charCodeAt(0), c, o);
  m.inside && (a = a.slice(0, -1) + H(c));
  const k = i.move(o + o);
  return (
    l(),
    (t.attentionEncodeSurroundingInfo = { after: m.outside, before: h.outside }),
    s + a + k
  );
}
function Hn(e, n, t) {
  return t.options.strong || "*";
}
function qn(e, n, t, r) {
  return t.safe(e.value, r);
}
function Un(e) {
  const n = e.options.ruleRepetition || 3;
  if (n < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" +
        n +
        "` for `options.ruleRepetition`, expected `3` or more",
    );
  return n;
}
function Vn(e, n, t) {
  const r = (qe(t) + (t.options.ruleSpaces ? " " : "")).repeat(Un(t));
  return t.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Ve = {
  blockquote: gn,
  break: ke,
  code: yn,
  definition: Tn,
  emphasis: $e,
  hardBreak: ke,
  heading: En,
  html: _e,
  image: Ne,
  imageReference: Oe,
  inlineCode: je,
  link: We,
  linkReference: He,
  list: $n,
  listItem: Nn,
  paragraph: On,
  root: Bn,
  strong: Ue,
  text: qn,
  thematicBreak: Vn,
};
function Xn() {
  return {
    enter: { table: Gn, tableData: xe, tableHeader: xe, tableRow: Qn },
    exit: { codeText: Yn, table: Kn, tableData: Z, tableHeader: Z, tableRow: Z },
  };
}
function Gn(e) {
  const n = e._align;
  (this.enter(
    {
      type: "table",
      align: n.map(function (t) {
        return t === "none" ? null : t;
      }),
      children: [],
    },
    e,
  ),
    (this.data.inTable = !0));
}
function Kn(e) {
  (this.exit(e), (this.data.inTable = void 0));
}
function Qn(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Z(e) {
  this.exit(e);
}
function xe(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function Yn(e) {
  let n = this.resume();
  this.data.inTable && (n = n.replace(/\\([\\|])/g, Zn));
  const t = this.stack[this.stack.length - 1];
  (L(t.type === "inlineCode"), (t.value = n), this.exit(e));
}
function Zn(e, n) {
  return n === "|" ? n : e;
}
function Jn(e) {
  const n = e || {},
    t = n.tableCellPadding,
    r = n.tablePipeAlign,
    o = n.stringLength,
    l = t ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      {
        character: `
`,
        inConstruct: "tableCell",
      },
      { atBreak: !0, character: "|", after: "[	 :-]" },
      { character: "|", inConstruct: "tableCell" },
      { atBreak: !0, character: ":", after: "-" },
      { atBreak: !0, character: "-", after: "[:|-]" },
    ],
    handlers: { inlineCode: m, table: i, tableCell: a, tableRow: s },
  };
  function i(k, f, g, b) {
    return u(h(k, g, b), k.align);
  }
  function s(k, f, g, b) {
    const x = c(k, g, b),
      d = u([x]);
    return d.slice(
      0,
      d.indexOf(`
`),
    );
  }
  function a(k, f, g, b) {
    const x = g.enter("tableCell"),
      d = g.enter("phrasing"),
      w = g.containerPhrasing(k, { ...b, before: l, after: l });
    return (d(), x(), w);
  }
  function u(k, f) {
    return pn(k, { align: f, alignDelimiters: r, padding: t, stringLength: o });
  }
  function h(k, f, g) {
    const b = k.children;
    let x = -1;
    const d = [],
      w = f.enter("table");
    for (; ++x < b.length;) d[x] = c(b[x], f, g);
    return (w(), d);
  }
  function c(k, f, g) {
    const b = k.children;
    let x = -1;
    const d = [],
      w = f.enter("tableRow");
    for (; ++x < b.length;) d[x] = a(b[x], k, f, g);
    return (w(), d);
  }
  function m(k, f, g) {
    let b = Ve.inlineCode(k, f, g);
    return (g.stack.includes("tableCell") && (b = b.replace(/\|/g, "\\$&")), b);
  }
}
function er() {
  return {
    exit: { taskListCheckValueChecked: be, taskListCheckValueUnchecked: be, paragraph: nr },
  };
}
function tr() {
  return { unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }], handlers: { listItem: rr } };
}
function be(e) {
  const n = this.stack[this.stack.length - 2];
  (L(n.type === "listItem"), (n.checked = e.type === "taskListCheckValueChecked"));
}
function nr(e) {
  const n = this.stack[this.stack.length - 2];
  if (n && n.type === "listItem" && typeof n.checked == "boolean") {
    const t = this.stack[this.stack.length - 1];
    L(t.type === "paragraph");
    const r = t.children[0];
    if (r && r.type === "text") {
      const o = n.children;
      let l = -1,
        i;
      for (; ++l < o.length;) {
        const s = o[l];
        if (s.type === "paragraph") {
          i = s;
          break;
        }
      }
      i === t &&
        ((r.value = r.value.slice(1)),
        r.value.length === 0
          ? t.children.shift()
          : t.position &&
            r.position &&
            typeof r.position.start.offset == "number" &&
            (r.position.start.column++,
            r.position.start.offset++,
            (t.position.start = Object.assign({}, r.position.start))));
    }
  }
  this.exit(e);
}
function rr(e, n, t, r) {
  const o = e.children[0],
    l = typeof e.checked == "boolean" && o && o.type === "paragraph",
    i = "[" + (e.checked ? "x" : " ") + "] ",
    s = t.createTracker(r);
  l && s.move(i);
  let a = Ve.listItem(e, n, t, { ...r, ...s.current() });
  return (l && (a = a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), a);
  function u(h) {
    return h + i;
  }
}
function ir() {
  return [$t(), rn(), sn(), Xn(), er()];
}
function or(e) {
  return { extensions: [_t(), on(e), un(), Jn(e), tr()] };
}
const ar = { tokenize: fr, partial: !0 },
  Xe = { tokenize: mr, partial: !0 },
  Ge = { tokenize: pr, partial: !0 },
  Ke = { tokenize: dr, partial: !0 },
  lr = { tokenize: gr, partial: !0 },
  Qe = { name: "wwwAutolink", tokenize: cr, previous: Ze },
  Ye = { name: "protocolAutolink", tokenize: hr, previous: Je },
  P = { name: "emailAutolink", tokenize: ur, previous: et },
  z = {};
function sr() {
  return { text: z };
}
let N = 48;
for (; N < 123;) ((z[N] = P), N++, N === 58 ? (N = 65) : N === 91 && (N = 97));
z[43] = P;
z[45] = P;
z[46] = P;
z[95] = P;
z[72] = [P, Ye];
z[104] = [P, Ye];
z[87] = [P, Qe];
z[119] = [P, Qe];
function ur(e, n, t) {
  const r = this;
  let o, l;
  return i;
  function i(c) {
    return !ee(c) || !et.call(r, r.previous) || ae(r.events)
      ? t(c)
      : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(c));
  }
  function s(c) {
    return ee(c) ? (e.consume(c), s) : c === 64 ? (e.consume(c), a) : t(c);
  }
  function a(c) {
    return c === 46
      ? e.check(lr, h, u)(c)
      : c === 45 || c === 95 || re(c)
        ? ((l = !0), e.consume(c), a)
        : h(c);
  }
  function u(c) {
    return (e.consume(c), (o = !0), a);
  }
  function h(c) {
    return l && o && W(r.previous)
      ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), n(c))
      : t(c);
  }
}
function cr(e, n, t) {
  const r = this;
  return o;
  function o(i) {
    return (i !== 87 && i !== 119) || !Ze.call(r, r.previous) || ae(r.events)
      ? t(i)
      : (e.enter("literalAutolink"),
        e.enter("literalAutolinkWww"),
        e.check(ar, e.attempt(Xe, e.attempt(Ge, l), t), t)(i));
  }
  function l(i) {
    return (e.exit("literalAutolinkWww"), e.exit("literalAutolink"), n(i));
  }
}
function hr(e, n, t) {
  const r = this;
  let o = "",
    l = !1;
  return i;
  function i(c) {
    return (c === 72 || c === 104) && Je.call(r, r.previous) && !ae(r.events)
      ? (e.enter("literalAutolink"),
        e.enter("literalAutolinkHttp"),
        (o += String.fromCodePoint(c)),
        e.consume(c),
        s)
      : t(c);
  }
  function s(c) {
    if (W(c) && o.length < 5) return ((o += String.fromCodePoint(c)), e.consume(c), s);
    if (c === 58) {
      const m = o.toLowerCase();
      if (m === "http" || m === "https") return (e.consume(c), a);
    }
    return t(c);
  }
  function a(c) {
    return c === 47 ? (e.consume(c), l ? u : ((l = !0), a)) : t(c);
  }
  function u(c) {
    return c === null || yt(c) || S(c) || B(c) || ne(c)
      ? t(c)
      : e.attempt(Xe, e.attempt(Ge, h), t)(c);
  }
  function h(c) {
    return (e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), n(c));
  }
}
function fr(e, n, t) {
  let r = 0;
  return o;
  function o(i) {
    return (i === 87 || i === 119) && r < 3
      ? (r++, e.consume(i), o)
      : i === 46 && r === 3
        ? (e.consume(i), l)
        : t(i);
  }
  function l(i) {
    return i === null ? t(i) : n(i);
  }
}
function mr(e, n, t) {
  let r, o, l;
  return i;
  function i(u) {
    return u === 46 || u === 95
      ? e.check(Ke, a, s)(u)
      : u === null || S(u) || B(u) || (u !== 45 && ne(u))
        ? a(u)
        : ((l = !0), e.consume(u), i);
  }
  function s(u) {
    return (u === 95 ? (r = !0) : ((o = r), (r = void 0)), e.consume(u), i);
  }
  function a(u) {
    return o || r || !l ? t(u) : n(u);
  }
}
function pr(e, n) {
  let t = 0,
    r = 0;
  return o;
  function o(i) {
    return i === 40
      ? (t++, e.consume(i), o)
      : i === 41 && r < t
        ? l(i)
        : i === 33 ||
            i === 34 ||
            i === 38 ||
            i === 39 ||
            i === 41 ||
            i === 42 ||
            i === 44 ||
            i === 46 ||
            i === 58 ||
            i === 59 ||
            i === 60 ||
            i === 63 ||
            i === 93 ||
            i === 95 ||
            i === 126
          ? e.check(Ke, n, l)(i)
          : i === null || S(i) || B(i)
            ? n(i)
            : (e.consume(i), o);
  }
  function l(i) {
    return (i === 41 && r++, e.consume(i), o);
  }
}
function dr(e, n, t) {
  return r;
  function r(s) {
    return s === 33 ||
      s === 34 ||
      s === 39 ||
      s === 41 ||
      s === 42 ||
      s === 44 ||
      s === 46 ||
      s === 58 ||
      s === 59 ||
      s === 63 ||
      s === 95 ||
      s === 126
      ? (e.consume(s), r)
      : s === 38
        ? (e.consume(s), l)
        : s === 93
          ? (e.consume(s), o)
          : s === 60 || s === null || S(s) || B(s)
            ? n(s)
            : t(s);
  }
  function o(s) {
    return s === null || s === 40 || s === 91 || S(s) || B(s) ? n(s) : r(s);
  }
  function l(s) {
    return W(s) ? i(s) : t(s);
  }
  function i(s) {
    return s === 59 ? (e.consume(s), r) : W(s) ? (e.consume(s), i) : t(s);
  }
}
function gr(e, n, t) {
  return r;
  function r(l) {
    return (e.consume(l), o);
  }
  function o(l) {
    return re(l) ? t(l) : n(l);
  }
}
function Ze(e) {
  return (
    e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || S(e)
  );
}
function Je(e) {
  return !W(e);
}
function et(e) {
  return !(e === 47 || ee(e));
}
function ee(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || re(e);
}
function ae(e) {
  let n = e.length,
    t = !1;
  for (; n--;) {
    const r = e[n][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      t = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      t = !1;
      break;
    }
  }
  return (e.length > 0 && !t && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), t);
}
const kr = { tokenize: vr, partial: !0 };
function xr() {
  return {
    document: {
      91: { name: "gfmFootnoteDefinition", tokenize: Cr, continuation: { tokenize: Tr }, exit: Mr },
    },
    text: {
      91: { name: "gfmFootnoteCall", tokenize: yr },
      93: { name: "gfmPotentialFootnoteCall", add: "after", tokenize: br, resolveTo: wr },
    },
  };
}
function br(e, n, t) {
  const r = this;
  let o = r.events.length;
  const l = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let i;
  for (; o--;) {
    const a = r.events[o][1];
    if (a.type === "labelImage") {
      i = a;
      break;
    }
    if (
      a.type === "gfmFootnoteCall" ||
      a.type === "labelLink" ||
      a.type === "label" ||
      a.type === "image" ||
      a.type === "link"
    )
      break;
  }
  return s;
  function s(a) {
    if (!i || !i._balanced) return t(a);
    const u = q(r.sliceSerialize({ start: i.end, end: r.now() }));
    return u.codePointAt(0) !== 94 || !l.includes(u.slice(1))
      ? t(a)
      : (e.enter("gfmFootnoteCallLabelMarker"),
        e.consume(a),
        e.exit("gfmFootnoteCallLabelMarker"),
        n(a));
  }
}
function wr(e, n) {
  let t = e.length;
  for (; t--;)
    if (e[t][1].type === "labelImage" && e[t][0] === "enter") {
      e[t][1];
      break;
    }
  ((e[t + 1][1].type = "data"), (e[t + 3][1].type = "gfmFootnoteCallLabelMarker"));
  const r = {
      type: "gfmFootnoteCall",
      start: Object.assign({}, e[t + 3][1].start),
      end: Object.assign({}, e[e.length - 1][1].end),
    },
    o = {
      type: "gfmFootnoteCallMarker",
      start: Object.assign({}, e[t + 3][1].end),
      end: Object.assign({}, e[t + 3][1].end),
    };
  (o.end.column++, o.end.offset++, o.end._bufferIndex++);
  const l = {
      type: "gfmFootnoteCallString",
      start: Object.assign({}, o.end),
      end: Object.assign({}, e[e.length - 1][1].start),
    },
    i = {
      type: "chunkString",
      contentType: "string",
      start: Object.assign({}, l.start),
      end: Object.assign({}, l.end),
    },
    s = [
      e[t + 1],
      e[t + 2],
      ["enter", r, n],
      e[t + 3],
      e[t + 4],
      ["enter", o, n],
      ["exit", o, n],
      ["enter", l, n],
      ["enter", i, n],
      ["exit", i, n],
      ["exit", l, n],
      e[e.length - 2],
      e[e.length - 1],
      ["exit", r, n],
    ];
  return (e.splice(t, e.length - t + 1, ...s), e);
}
function yr(e, n, t) {
  const r = this,
    o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l = 0,
    i;
  return s;
  function s(c) {
    return (
      e.enter("gfmFootnoteCall"),
      e.enter("gfmFootnoteCallLabelMarker"),
      e.consume(c),
      e.exit("gfmFootnoteCallLabelMarker"),
      a
    );
  }
  function a(c) {
    return c !== 94
      ? t(c)
      : (e.enter("gfmFootnoteCallMarker"),
        e.consume(c),
        e.exit("gfmFootnoteCallMarker"),
        e.enter("gfmFootnoteCallString"),
        (e.enter("chunkString").contentType = "string"),
        u);
  }
  function u(c) {
    if (l > 999 || (c === 93 && !i) || c === null || c === 91 || S(c)) return t(c);
    if (c === 93) {
      e.exit("chunkString");
      const m = e.exit("gfmFootnoteCallString");
      return o.includes(q(r.sliceSerialize(m)))
        ? (e.enter("gfmFootnoteCallLabelMarker"),
          e.consume(c),
          e.exit("gfmFootnoteCallLabelMarker"),
          e.exit("gfmFootnoteCall"),
          n)
        : t(c);
    }
    return (S(c) || (i = !0), l++, e.consume(c), c === 92 ? h : u);
  }
  function h(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), l++, u) : u(c);
  }
}
function Cr(e, n, t) {
  const r = this,
    o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l,
    i = 0,
    s;
  return a;
  function a(f) {
    return (
      (e.enter("gfmFootnoteDefinition")._container = !0),
      e.enter("gfmFootnoteDefinitionLabel"),
      e.enter("gfmFootnoteDefinitionLabelMarker"),
      e.consume(f),
      e.exit("gfmFootnoteDefinitionLabelMarker"),
      u
    );
  }
  function u(f) {
    return f === 94
      ? (e.enter("gfmFootnoteDefinitionMarker"),
        e.consume(f),
        e.exit("gfmFootnoteDefinitionMarker"),
        e.enter("gfmFootnoteDefinitionLabelString"),
        (e.enter("chunkString").contentType = "string"),
        h)
      : t(f);
  }
  function h(f) {
    if (i > 999 || (f === 93 && !s) || f === null || f === 91 || S(f)) return t(f);
    if (f === 93) {
      e.exit("chunkString");
      const g = e.exit("gfmFootnoteDefinitionLabelString");
      return (
        (l = q(r.sliceSerialize(g))),
        e.enter("gfmFootnoteDefinitionLabelMarker"),
        e.consume(f),
        e.exit("gfmFootnoteDefinitionLabelMarker"),
        e.exit("gfmFootnoteDefinitionLabel"),
        m
      );
    }
    return (S(f) || (s = !0), i++, e.consume(f), f === 92 ? c : h);
  }
  function c(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), i++, h) : h(f);
  }
  function m(f) {
    return f === 58
      ? (e.enter("definitionMarker"),
        e.consume(f),
        e.exit("definitionMarker"),
        o.includes(l) || o.push(l),
        F(e, k, "gfmFootnoteDefinitionWhitespace"))
      : t(f);
  }
  function k(f) {
    return n(f);
  }
}
function Tr(e, n, t) {
  return e.check(Ct, n, e.attempt(kr, n, t));
}
function Mr(e) {
  e.exit("gfmFootnoteDefinition");
}
function vr(e, n, t) {
  const r = this;
  return F(e, o, "gfmFootnoteDefinitionIndent", 5);
  function o(l) {
    const i = r.events[r.events.length - 1];
    return i &&
      i[1].type === "gfmFootnoteDefinitionIndent" &&
      i[2].sliceSerialize(i[1], !0).length === 4
      ? n(l)
      : t(l);
  }
}
function Ar(e) {
  let t = (e || {}).singleTilde;
  const r = { name: "strikethrough", tokenize: l, resolveAll: o };
  return (
    t == null && (t = !0),
    { text: { 126: r }, insideSpan: { null: [r] }, attentionMarkers: { null: [126] } }
  );
  function o(i, s) {
    let a = -1;
    for (; ++a < i.length;)
      if (
        i[a][0] === "enter" &&
        i[a][1].type === "strikethroughSequenceTemporary" &&
        i[a][1]._close
      ) {
        let u = a;
        for (; u--;)
          if (
            i[u][0] === "exit" &&
            i[u][1].type === "strikethroughSequenceTemporary" &&
            i[u][1]._open &&
            i[a][1].end.offset - i[a][1].start.offset === i[u][1].end.offset - i[u][1].start.offset
          ) {
            ((i[a][1].type = "strikethroughSequence"), (i[u][1].type = "strikethroughSequence"));
            const h = {
                type: "strikethrough",
                start: Object.assign({}, i[u][1].start),
                end: Object.assign({}, i[a][1].end),
              },
              c = {
                type: "strikethroughText",
                start: Object.assign({}, i[u][1].end),
                end: Object.assign({}, i[a][1].start),
              },
              m = [
                ["enter", h, s],
                ["enter", i[u][1], s],
                ["exit", i[u][1], s],
                ["enter", c, s],
              ],
              k = s.parser.constructs.insideSpan.null;
            (k && G(m, m.length, 0, Tt(k, i.slice(u + 1, a), s)),
              G(m, m.length, 0, [
                ["exit", c, s],
                ["enter", i[a][1], s],
                ["exit", i[a][1], s],
                ["exit", h, s],
              ]),
              G(i, u - 1, a - u + 3, m),
              (a = u + m.length - 2));
            break;
          }
      }
    for (a = -1; ++a < i.length;)
      i[a][1].type === "strikethroughSequenceTemporary" && (i[a][1].type = "data");
    return i;
  }
  function l(i, s, a) {
    const u = this.previous,
      h = this.events;
    let c = 0;
    return m;
    function m(f) {
      return u === 126 && h[h.length - 1][1].type !== "characterEscape"
        ? a(f)
        : (i.enter("strikethroughSequenceTemporary"), k(f));
    }
    function k(f) {
      const g = V(u);
      if (f === 126) return c > 1 ? a(f) : (i.consume(f), c++, k);
      if (c < 2 && !t) return a(f);
      const b = i.exit("strikethroughSequenceTemporary"),
        x = V(f);
      return ((b._open = !x || (x === 2 && !!g)), (b._close = !g || (g === 2 && !!x)), s(f));
    }
  }
}
class Er {
  constructor() {
    this.map = [];
  }
  add(n, t, r) {
    Sr(this, n, t, r);
  }
  consume(n) {
    if (
      (this.map.sort(function (l, i) {
        return l[0] - i[0];
      }),
      this.map.length === 0)
    )
      return;
    let t = this.map.length;
    const r = [];
    for (; t > 0;)
      ((t -= 1),
        r.push(n.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]),
        (n.length = this.map[t][0]));
    (r.push(n.slice()), (n.length = 0));
    let o = r.pop();
    for (; o;) {
      for (const l of o) n.push(l);
      o = r.pop();
    }
    this.map.length = 0;
  }
}
function Sr(e, n, t, r) {
  let o = 0;
  if (!(t === 0 && r.length === 0)) {
    for (; o < e.map.length;) {
      if (e.map[o][0] === n) {
        ((e.map[o][1] += t), e.map[o][2].push(...r));
        return;
      }
      o += 1;
    }
    e.map.push([n, t, r]);
  }
}
function Fr(e, n) {
  let t = !1;
  const r = [];
  for (; n < e.length;) {
    const o = e[n];
    if (t) {
      if (o[0] === "enter")
        o[1].type === "tableContent" &&
          r.push(e[n + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (o[1].type === "tableContent") {
        if (e[n - 1][1].type === "tableDelimiterMarker") {
          const l = r.length - 1;
          r[l] = r[l] === "left" ? "center" : "right";
        }
      } else if (o[1].type === "tableDelimiterRow") break;
    } else o[0] === "enter" && o[1].type === "tableDelimiterRow" && (t = !0);
    n += 1;
  }
  return r;
}
function Dr() {
  return { flow: { null: { name: "table", tokenize: Lr, resolveAll: Rr } } };
}
function Lr(e, n, t) {
  const r = this;
  let o = 0,
    l = 0,
    i;
  return s;
  function s(p) {
    let _ = r.events.length - 1;
    for (; _ > -1;) {
      const ce = r.events[_][1].type;
      if (ce === "lineEnding" || ce === "linePrefix") _--;
      else break;
    }
    const se = _ > -1 ? r.events[_][1].type : null,
      ue = se === "tableHead" || se === "tableRow" ? M : a;
    return ue === M && r.parser.lazy[r.now().line] ? t(p) : ue(p);
  }
  function a(p) {
    return (e.enter("tableHead"), e.enter("tableRow"), u(p));
  }
  function u(p) {
    return (p === 124 || ((i = !0), (l += 1)), h(p));
  }
  function h(p) {
    return p === null
      ? t(p)
      : D(p)
        ? l > 1
          ? ((l = 0),
            (r.interrupt = !0),
            e.exit("tableRow"),
            e.enter("lineEnding"),
            e.consume(p),
            e.exit("lineEnding"),
            k)
          : t(p)
        : O(p)
          ? F(e, h, "whitespace")(p)
          : ((l += 1),
            i && ((i = !1), (o += 1)),
            p === 124
              ? (e.enter("tableCellDivider"), e.consume(p), e.exit("tableCellDivider"), (i = !0), h)
              : (e.enter("data"), c(p)));
  }
  function c(p) {
    return p === null || p === 124 || S(p)
      ? (e.exit("data"), h(p))
      : (e.consume(p), p === 92 ? m : c);
  }
  function m(p) {
    return p === 92 || p === 124 ? (e.consume(p), c) : c(p);
  }
  function k(p) {
    return (
      (r.interrupt = !1),
      r.parser.lazy[r.now().line]
        ? t(p)
        : (e.enter("tableDelimiterRow"),
          (i = !1),
          O(p)
            ? F(
                e,
                f,
                "linePrefix",
                r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4,
              )(p)
            : f(p))
    );
  }
  function f(p) {
    return p === 45 || p === 58
      ? b(p)
      : p === 124
        ? ((i = !0), e.enter("tableCellDivider"), e.consume(p), e.exit("tableCellDivider"), g)
        : T(p);
  }
  function g(p) {
    return O(p) ? F(e, b, "whitespace")(p) : b(p);
  }
  function b(p) {
    return p === 58
      ? ((l += 1),
        (i = !0),
        e.enter("tableDelimiterMarker"),
        e.consume(p),
        e.exit("tableDelimiterMarker"),
        x)
      : p === 45
        ? ((l += 1), x(p))
        : p === null || D(p)
          ? v(p)
          : T(p);
  }
  function x(p) {
    return p === 45 ? (e.enter("tableDelimiterFiller"), d(p)) : T(p);
  }
  function d(p) {
    return p === 45
      ? (e.consume(p), d)
      : p === 58
        ? ((i = !0),
          e.exit("tableDelimiterFiller"),
          e.enter("tableDelimiterMarker"),
          e.consume(p),
          e.exit("tableDelimiterMarker"),
          w)
        : (e.exit("tableDelimiterFiller"), w(p));
  }
  function w(p) {
    return O(p) ? F(e, v, "whitespace")(p) : v(p);
  }
  function v(p) {
    return p === 124
      ? f(p)
      : p === null || D(p)
        ? !i || o !== l
          ? T(p)
          : (e.exit("tableDelimiterRow"), e.exit("tableHead"), n(p))
        : T(p);
  }
  function T(p) {
    return t(p);
  }
  function M(p) {
    return (e.enter("tableRow"), R(p));
  }
  function R(p) {
    return p === 124
      ? (e.enter("tableCellDivider"), e.consume(p), e.exit("tableCellDivider"), R)
      : p === null || D(p)
        ? (e.exit("tableRow"), n(p))
        : O(p)
          ? F(e, R, "whitespace")(p)
          : (e.enter("data"), $(p));
  }
  function $(p) {
    return p === null || p === 124 || S(p)
      ? (e.exit("data"), R(p))
      : (e.consume(p), p === 92 ? A : $);
  }
  function A(p) {
    return p === 92 || p === 124 ? (e.consume(p), $) : $(p);
  }
}
function Rr(e, n) {
  let t = -1,
    r = !0,
    o = 0,
    l = [0, 0, 0, 0],
    i = [0, 0, 0, 0],
    s = !1,
    a = 0,
    u,
    h,
    c;
  const m = new Er();
  for (; ++t < e.length;) {
    const k = e[t],
      f = k[1];
    k[0] === "enter"
      ? f.type === "tableHead"
        ? ((s = !1),
          a !== 0 && (we(m, n, a, u, h), (h = void 0), (a = 0)),
          (u = { type: "table", start: Object.assign({}, f.start), end: Object.assign({}, f.end) }),
          m.add(t, 0, [["enter", u, n]]))
        : f.type === "tableRow" || f.type === "tableDelimiterRow"
          ? ((r = !0),
            (c = void 0),
            (l = [0, 0, 0, 0]),
            (i = [0, t + 1, 0, 0]),
            s &&
              ((s = !1),
              (h = {
                type: "tableBody",
                start: Object.assign({}, f.start),
                end: Object.assign({}, f.end),
              }),
              m.add(t, 0, [["enter", h, n]])),
            (o = f.type === "tableDelimiterRow" ? 2 : h ? 3 : 1))
          : o &&
              (f.type === "data" ||
                f.type === "tableDelimiterMarker" ||
                f.type === "tableDelimiterFiller")
            ? ((r = !1),
              i[2] === 0 &&
                (l[1] !== 0 && ((i[0] = i[1]), (c = U(m, n, l, o, void 0, c)), (l = [0, 0, 0, 0])),
                (i[2] = t)))
            : f.type === "tableCellDivider" &&
              (r
                ? (r = !1)
                : (l[1] !== 0 && ((i[0] = i[1]), (c = U(m, n, l, o, void 0, c))),
                  (l = i),
                  (i = [l[1], t, 0, 0])))
      : f.type === "tableHead"
        ? ((s = !0), (a = t))
        : f.type === "tableRow" || f.type === "tableDelimiterRow"
          ? ((a = t),
            l[1] !== 0
              ? ((i[0] = i[1]), (c = U(m, n, l, o, t, c)))
              : i[1] !== 0 && (c = U(m, n, i, o, t, c)),
            (o = 0))
          : o &&
            (f.type === "data" ||
              f.type === "tableDelimiterMarker" ||
              f.type === "tableDelimiterFiller") &&
            (i[3] = t);
  }
  for (a !== 0 && we(m, n, a, u, h), m.consume(n.events), t = -1; ++t < n.events.length;) {
    const k = n.events[t];
    k[0] === "enter" && k[1].type === "table" && (k[1]._align = Fr(n.events, t));
  }
  return e;
}
function U(e, n, t, r, o, l) {
  const i = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData",
    s = "tableContent";
  t[0] !== 0 && ((l.end = Object.assign({}, j(n.events, t[0]))), e.add(t[0], 0, [["exit", l, n]]));
  const a = j(n.events, t[1]);
  if (
    ((l = { type: i, start: Object.assign({}, a), end: Object.assign({}, a) }),
    e.add(t[1], 0, [["enter", l, n]]),
    t[2] !== 0)
  ) {
    const u = j(n.events, t[2]),
      h = j(n.events, t[3]),
      c = { type: s, start: Object.assign({}, u), end: Object.assign({}, h) };
    if ((e.add(t[2], 0, [["enter", c, n]]), r !== 2)) {
      const m = n.events[t[2]],
        k = n.events[t[3]];
      if (
        ((m[1].end = Object.assign({}, k[1].end)),
        (m[1].type = "chunkText"),
        (m[1].contentType = "text"),
        t[3] > t[2] + 1)
      ) {
        const f = t[2] + 1,
          g = t[3] - t[2] - 1;
        e.add(f, g, []);
      }
    }
    e.add(t[3] + 1, 0, [["exit", c, n]]);
  }
  return (
    o !== void 0 &&
      ((l.end = Object.assign({}, j(n.events, o))), e.add(o, 0, [["exit", l, n]]), (l = void 0)),
    l
  );
}
function we(e, n, t, r, o) {
  const l = [],
    i = j(n.events, t);
  (o && ((o.end = Object.assign({}, i)), l.push(["exit", o, n])),
    (r.end = Object.assign({}, i)),
    l.push(["exit", r, n]),
    e.add(t + 1, 0, l));
}
function j(e, n) {
  const t = e[n],
    r = t[0] === "enter" ? "start" : "end";
  return t[1][r];
}
const zr = { name: "tasklistCheck", tokenize: Pr };
function Ir() {
  return { text: { 91: zr } };
}
function Pr(e, n, t) {
  const r = this;
  return o;
  function o(a) {
    return r.previous !== null || !r._gfmTasklistFirstContentOfListItem
      ? t(a)
      : (e.enter("taskListCheck"),
        e.enter("taskListCheckMarker"),
        e.consume(a),
        e.exit("taskListCheckMarker"),
        l);
  }
  function l(a) {
    return S(a)
      ? (e.enter("taskListCheckValueUnchecked"),
        e.consume(a),
        e.exit("taskListCheckValueUnchecked"),
        i)
      : a === 88 || a === 120
        ? (e.enter("taskListCheckValueChecked"),
          e.consume(a),
          e.exit("taskListCheckValueChecked"),
          i)
        : t(a);
  }
  function i(a) {
    return a === 93
      ? (e.enter("taskListCheckMarker"),
        e.consume(a),
        e.exit("taskListCheckMarker"),
        e.exit("taskListCheck"),
        s)
      : t(a);
  }
  function s(a) {
    return D(a) ? n(a) : O(a) ? e.check({ tokenize: $r }, n, t)(a) : t(a);
  }
}
function $r(e, n, t) {
  return F(e, r, "whitespace");
  function r(o) {
    return o === null ? t(o) : n(o);
  }
}
function _r(e) {
  return Mt([sr(), xr(), Ar(e), Dr(), Ir()]);
}
const Nr = {};
function Or(e) {
  const n = this,
    t = e || Nr,
    r = n.data(),
    o = r.micromarkExtensions || (r.micromarkExtensions = []),
    l = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []),
    i = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  (o.push(_r(t)), l.push(ir()), i.push(or(t)));
}
function jr() {
  return {
    enter: { mathFlow: e, mathFlowFenceMeta: n, mathText: l },
    exit: {
      mathFlow: o,
      mathFlowFence: r,
      mathFlowFenceMeta: t,
      mathFlowValue: s,
      mathText: i,
      mathTextData: s,
    },
  };
  function e(a) {
    const u = {
      type: "element",
      tagName: "code",
      properties: { className: ["language-math", "math-display"] },
      children: [],
    };
    this.enter({ type: "math", meta: null, value: "", data: { hName: "pre", hChildren: [u] } }, a);
  }
  function n() {
    this.buffer();
  }
  function t() {
    const a = this.resume(),
      u = this.stack[this.stack.length - 1];
    (L(u.type === "math"), (u.meta = a));
  }
  function r() {
    this.data.mathFlowInside || (this.buffer(), (this.data.mathFlowInside = !0));
  }
  function o(a) {
    const u = this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""),
      h = this.stack[this.stack.length - 1];
    (L(h.type === "math"), this.exit(a), (h.value = u));
    const c = h.data.hChildren[0];
    (L(c.type === "element"),
      L(c.tagName === "code"),
      c.children.push({ type: "text", value: u }),
      (this.data.mathFlowInside = void 0));
  }
  function l(a) {
    (this.enter(
      {
        type: "inlineMath",
        value: "",
        data: {
          hName: "code",
          hProperties: { className: ["language-math", "math-inline"] },
          hChildren: [],
        },
      },
      a,
    ),
      this.buffer());
  }
  function i(a) {
    const u = this.resume(),
      h = this.stack[this.stack.length - 1];
    (L(h.type === "inlineMath"),
      this.exit(a),
      (h.value = u),
      h.data.hChildren.push({ type: "text", value: u }));
  }
  function s(a) {
    (this.config.enter.data.call(this, a), this.config.exit.data.call(this, a));
  }
}
function Br(e) {
  let n = (e || {}).singleDollarTextMath;
  return (
    n == null && (n = !0),
    (r.peek = o),
    {
      unsafe: [
        { character: "\r", inConstruct: "mathFlowMeta" },
        {
          character: `
`,
          inConstruct: "mathFlowMeta",
        },
        { character: "$", after: n ? void 0 : "\\$", inConstruct: "phrasing" },
        { character: "$", inConstruct: "mathFlowMeta" },
        { atBreak: !0, character: "$", after: "\\$" },
      ],
      handlers: { math: t, inlineMath: r },
    }
  );
  function t(l, i, s, a) {
    const u = l.value || "",
      h = s.createTracker(a),
      c = "$".repeat(Math.max(Pe(u, "$") + 1, 2)),
      m = s.enter("mathFlow");
    let k = h.move(c);
    if (l.meta) {
      const f = s.enter("mathFlowMeta");
      ((k += h.move(
        s.safe(l.meta, {
          after: `
`,
          before: k,
          encode: ["$"],
          ...h.current(),
        }),
      )),
        f());
    }
    return (
      (k += h.move(`
`)),
      u &&
        (k += h.move(
          u +
            `
`,
        )),
      (k += h.move(c)),
      m(),
      k
    );
  }
  function r(l, i, s) {
    let a = l.value || "",
      u = 1;
    for (n || u++; new RegExp("(^|[^$])" + "\\$".repeat(u) + "([^$]|$)").test(a);) u++;
    const h = "$".repeat(u);
    /[^ \r\n]/.test(a) &&
      ((/^[ \r\n]/.test(a) && /[ \r\n]$/.test(a)) || /^\$|\$$/.test(a)) &&
      (a = " " + a + " ");
    let c = -1;
    for (; ++c < s.unsafe.length;) {
      const m = s.unsafe[c];
      if (!m.atBreak) continue;
      const k = s.compilePattern(m);
      let f;
      for (; (f = k.exec(a));) {
        let g = f.index;
        (a.codePointAt(g) === 10 && a.codePointAt(g - 1) === 13 && g--,
          (a = a.slice(0, g) + " " + a.slice(f.index + 1)));
      }
    }
    return h + a + h;
  }
  function o() {
    return "$";
  }
}
const Wr = { tokenize: Hr, concrete: !0, name: "mathFlow" },
  ye = { tokenize: qr, partial: !0 };
function Hr(e, n, t) {
  const r = this,
    o = r.events[r.events.length - 1],
    l = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], !0).length : 0;
  let i = 0;
  return s;
  function s(d) {
    return (e.enter("mathFlow"), e.enter("mathFlowFence"), e.enter("mathFlowFenceSequence"), a(d));
  }
  function a(d) {
    return d === 36
      ? (e.consume(d), i++, a)
      : i < 2
        ? t(d)
        : (e.exit("mathFlowFenceSequence"), F(e, u, "whitespace")(d));
  }
  function u(d) {
    return d === null || D(d)
      ? c(d)
      : (e.enter("mathFlowFenceMeta"), e.enter("chunkString", { contentType: "string" }), h(d));
  }
  function h(d) {
    return d === null || D(d)
      ? (e.exit("chunkString"), e.exit("mathFlowFenceMeta"), c(d))
      : d === 36
        ? t(d)
        : (e.consume(d), h);
  }
  function c(d) {
    return (e.exit("mathFlowFence"), r.interrupt ? n(d) : e.attempt(ye, m, b)(d));
  }
  function m(d) {
    return e.attempt({ tokenize: x, partial: !0 }, b, k)(d);
  }
  function k(d) {
    return (l ? F(e, f, "linePrefix", l + 1) : f)(d);
  }
  function f(d) {
    return d === null ? b(d) : D(d) ? e.attempt(ye, m, b)(d) : (e.enter("mathFlowValue"), g(d));
  }
  function g(d) {
    return d === null || D(d) ? (e.exit("mathFlowValue"), f(d)) : (e.consume(d), g);
  }
  function b(d) {
    return (e.exit("mathFlow"), n(d));
  }
  function x(d, w, v) {
    let T = 0;
    return F(
      d,
      M,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4,
    );
    function M(A) {
      return (d.enter("mathFlowFence"), d.enter("mathFlowFenceSequence"), R(A));
    }
    function R(A) {
      return A === 36
        ? (T++, d.consume(A), R)
        : T < i
          ? v(A)
          : (d.exit("mathFlowFenceSequence"), F(d, $, "whitespace")(A));
    }
    function $(A) {
      return A === null || D(A) ? (d.exit("mathFlowFence"), w(A)) : v(A);
    }
  }
}
function qr(e, n, t) {
  const r = this;
  return o;
  function o(i) {
    return i === null ? n(i) : (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), l);
  }
  function l(i) {
    return r.parser.lazy[r.now().line] ? t(i) : n(i);
  }
}
function Ur(e) {
  let t = (e || {}).singleDollarTextMath;
  return (t == null && (t = !0), { tokenize: r, resolve: Vr, previous: Xr, name: "mathText" });
  function r(o, l, i) {
    let s = 0,
      a,
      u;
    return h;
    function h(g) {
      return (o.enter("mathText"), o.enter("mathTextSequence"), c(g));
    }
    function c(g) {
      return g === 36
        ? (o.consume(g), s++, c)
        : s < 2 && !t
          ? i(g)
          : (o.exit("mathTextSequence"), m(g));
    }
    function m(g) {
      return g === null
        ? i(g)
        : g === 36
          ? ((u = o.enter("mathTextSequence")), (a = 0), f(g))
          : g === 32
            ? (o.enter("space"), o.consume(g), o.exit("space"), m)
            : D(g)
              ? (o.enter("lineEnding"), o.consume(g), o.exit("lineEnding"), m)
              : (o.enter("mathTextData"), k(g));
    }
    function k(g) {
      return g === null || g === 32 || g === 36 || D(g)
        ? (o.exit("mathTextData"), m(g))
        : (o.consume(g), k);
    }
    function f(g) {
      return g === 36
        ? (o.consume(g), a++, f)
        : a === s
          ? (o.exit("mathTextSequence"), o.exit("mathText"), l(g))
          : ((u.type = "mathTextData"), k(g));
    }
  }
}
function Vr(e) {
  let n = e.length - 4,
    t = 3,
    r,
    o;
  if (
    (e[t][1].type === "lineEnding" || e[t][1].type === "space") &&
    (e[n][1].type === "lineEnding" || e[n][1].type === "space")
  ) {
    for (r = t; ++r < n;)
      if (e[r][1].type === "mathTextData") {
        ((e[n][1].type = "mathTextPadding"),
          (e[t][1].type = "mathTextPadding"),
          (t += 2),
          (n -= 2));
        break;
      }
  }
  for (r = t - 1, n++; ++r <= n;)
    o === void 0
      ? r !== n && e[r][1].type !== "lineEnding" && (o = r)
      : (r === n || e[r][1].type === "lineEnding") &&
        ((e[o][1].type = "mathTextData"),
        r !== o + 2 &&
          ((e[o][1].end = e[r - 1][1].end),
          e.splice(o + 2, r - o - 2),
          (n -= r - o - 2),
          (r = o + 2)),
        (o = void 0));
  return e;
}
function Xr(e) {
  return e !== 36 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Gr(e) {
  return { flow: { 36: Wr }, text: { 36: Ur(e) } };
}
const Kr = {};
function Qr(e) {
  const n = this,
    t = e || Kr,
    r = n.data(),
    o = r.micromarkExtensions || (r.micromarkExtensions = []),
    l = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []),
    i = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  (o.push(Gr(t)), l.push(jr()), i.push(Br(t)));
}
const Ce = /\\begin\{(itemize|enumerate)\}/g,
  Yr = /\\(begin|end)\{(itemize|enumerate)\}/g,
  Zr = /\\item(?:\s*\[[^\]\r\n]*\])?\s*/g,
  Jr = /\\\$(?=\s*\d)/g,
  ei = /\\{2,}(?=[A-Za-z|{}])/g,
  ti = /\\mathbbm\b/g,
  ni = (e, n) => {
    const t = e === "enumerate" ? "1." : "-",
      r = [...n.matchAll(Zr)];
    return r.length === 0
      ? n.trim()
      : r
          .map((o, l) => {
            var k;
            const s = (o.index ?? 0) + o[0].length,
              a = ((k = r[l + 1]) == null ? void 0 : k.index) ?? n.length,
              u = n.slice(s, a).trim();
            if (!u) return null;
            const [h = "", ...c] = u.replace(
                /\r\n|\n|\r(?!\n)/g,
                `
`,
              ).split(`
`),
              m = c.map((f) => (f.trim() ? `  ${f.trim()}` : "")).join(`
`);
            return `${t} ${h.trim()}${
              m
                ? `
${m}`
                : ""
            }`;
          })
          .filter((o) => !!o).join(`
`);
  },
  ri = (e, n, t) => {
    if (n === 0) return t.length === 0;
    const r = e.slice(0, n);
    return /(?:\r\n|\n|\r(?!\n))[ \t]*(?:\r\n|\n|\r(?!\n))[ \t]*$/.test(r);
  },
  ii = (e, n) => {
    const t = new RegExp(Ce.source, Ce.flags),
      r = [];
    let o = 0;
    for (const l of e.matchAll(t)) {
      if (l.index < o || !ri(e, l.index, n)) continue;
      const i = l[1];
      if (i !== "itemize" && i !== "enumerate")
        throw new Error("Unexpected LaTeX list environment.");
      const s = l.index + l[0].length,
        a = Ae(e, i, s, Yr, { stopAtMarkdownBlock: !0 });
      a &&
        (r.push(e.slice(o, l.index)),
        r.push(ni(i, e.slice(s, a.endTokenStart))),
        (o = a.end),
        (t.lastIndex = a.end));
    }
    return (r.push(e.slice(o)), r.join(""));
  },
  oi = (e, n) => {
    const t = new RegExp(fe.source, fe.flags),
      r = [];
    let o = 0;
    for (const l of e.matchAll(t)) {
      if (l.index < o) continue;
      const i = l[1],
        s = l.index === 0 ? `${n}${i}` : i,
        a = Ee(s);
      if (!a) continue;
      const u = l[2],
        h = l.index + i.length,
        c = l.index + l[0].length,
        m = Ae(e, u, c, ht, { stopAtMarkdownBlock: !0 });
      if (!m) continue;
      const k = tt(Se(e.slice(h, m.end).trim(), a), !0),
        f =
          m.end < e.length &&
          e[m.end] !== "\r" &&
          e[m.end] !==
            `
`;
      r.push(e.slice(o, l.index));
      const g = k
        .split(
          `
`,
        )
        .map((b) => `${a.continuationPrefix}${b}`).join(`
`);
      (r.push(`${i}$$
${g}
${a.continuationPrefix}$$${
        f
          ? `
${a.continuationPrefix}`
          : ""
      }`),
        (o = m.end),
        (t.lastIndex = m.end));
    }
    return (r.push(e.slice(o)), r.join(""));
  },
  tt = (e, n) => {
    const t = e.replace(ti, "\\mathbb").replace(Jr, "\\text{\\textdollar}");
    return n ? t : t.replace(ei, (r) => (r.length === 2 ? "\\" : r));
  },
  ai = (e, { atDisplayLineStart: n, displayIndentation: t, needsTrailingDisplayBreak: r }) => {
    if (!e.body.trim()) return `${e.openingDelimiter}${e.body}${e.closingDelimiter}`;
    const o = e.openingDelimiter === "$$" || e.openingDelimiter === "\\[",
      l = o ? Ee(t) : null,
      i = tt(l ? Se(e.body, l) : e.body, o),
      s = (a) => {
        const u = (l == null ? void 0 : l.continuationPrefix) ?? t,
          h = i
            .trim()
            .split(/\r\n|\n|\r(?!\n)/)
            .map((m) => (!u || m.startsWith(u) ? m : `${u}${m}`)).join(`
`),
          c = (l == null ? void 0 : l.continuationPrefix) ?? "";
        return `${a === "\\[" ? "$$" : a}
${h}
${u}$$${
          r
            ? `
${c}`
            : ""
        }`;
      };
    return e.openingDelimiter === "\\["
      ? l
        ? s("\\[")
        : `
$$
${i.trim().replace(
  /\r\n|\r(?!\n)/g,
  `
`,
)}
$$
`
      : e.openingDelimiter === "\\("
        ? `$${i}$`
        : e.openingDelimiter === "$$" && (n || l)
          ? s("$$")
          : `${e.openingDelimiter}${i}${e.closingDelimiter}`;
  },
  li = (e, { leadingLinePrefix: n }) => {
    const t = he(e);
    if (!t.valid) return e;
    const r = [];
    let o = n;
    const l = (s) => {
      r.push(s);
      const a = Math.max(
        s.lastIndexOf(`
`),
        s.lastIndexOf("\r"),
      );
      o = a === -1 ? `${o}${s}` : s.slice(a + 1);
    };
    t.segments.forEach((s, a) => {
      if (s.kind !== "math") {
        l(oi(s.value, o));
        return;
      }
      const u = t.segments[a + 1],
        h = (u == null ? void 0 : u.kind) === "text" ? u.value : "";
      l(
        ai(s, {
          atDisplayLineStart: /^[ \t]*$/.test(o),
          displayIndentation: o,
          needsTrailingDisplayBreak: !!(h && ct(h, 0) === 0),
        }),
      );
    });
    const i = r.join("");
    return he(i).valid ? i : e;
  },
  si = (e, n) => {
    const t = ve(e, (r) => ii(r, ""));
    return n === "canonical" ? t : ut(t, li);
  },
  ui = (e) => {
    var t;
    const n = (t = e.properties) == null ? void 0 : t.className;
    return Array.isArray(n) ? n.map(String) : typeof n == "string" ? n.split(/\s+/) : [];
  },
  ci = (e) => e.type === "element",
  hi = (e) => ui(e).includes("katex-display"),
  fi = (e) => `math-${e.replace(/[^A-Za-z0-9_-]+/g, "-").replace(/^-|-$/g, "")}`,
  mi = (e) => () => (n) => {
    let t = 1;
    const r = () => {
        const l = `${e}.${t}`;
        return ((t += 1), l);
      },
      o = (l) => {
        for (let i = 0; i < l.length; i += 1) {
          const s = l[i];
          if (ci(s)) {
            if (hi(s)) {
              const a = r();
              l[i] = {
                type: "element",
                tagName: "span",
                properties: { className: ["markdown-numbered-math"], dataMathLabel: a, id: fi(a) },
                children: [
                  {
                    type: "element",
                    tagName: "span",
                    properties: { className: ["markdown-math-label"], ariaLabel: `Equation ${a}` },
                    children: [{ type: "text", value: a }],
                  },
                  s,
                ],
              };
              continue;
            }
            o(s.children);
          }
        }
      };
    o(n.children);
  },
  nt = E.createContext(void 0),
  Wi = ({ children: e, macros: n }) => y.jsx(nt.Provider, { value: n, children: e }),
  pi = () => E.useContext(nt),
  di = ["data:image/png;base64,", "data:image/jpeg;base64,", "data:image/svg+xml;base64,"],
  gi = [
    "data:application/json;base64,",
    "data:application/pdf;base64,",
    "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,",
    "data:text/csv;base64,",
  ],
  le = (e) => di.some((n) => e.startsWith(n)),
  rt = (e) => gi.some((n) => e.startsWith(n)),
  Hi = (e) => le(e) || rt(e),
  ki = [Or, Qr],
  xi = /^[ \t>]*\[Equation ([0-9]+(?:\.[0-9]+)?)\]:[ \t]*#[ \t]*".*"[ \t]*$/gm,
  bi = { "\\diff": "\\mathop{}\\!d" },
  wi = { allowedHighlightIds: new Set(), highlightsById: new Map(), latexTerms: [], textTerms: [] },
  yi = (e) => ve(e, (n) => n.replace(xi, ""), { protectLinkReferenceDefinitions: !1 }),
  Ci = (e) => {
    var t;
    const n = (t = e.properties) == null ? void 0 : t.className;
    return Array.isArray(n) ? n.map(String) : typeof n == "string" ? n.split(/\s+/) : [];
  },
  it = (e) => e.type === "element",
  ot = (e) => (e.type === "text" ? e.value : it(e) ? e.children.map(ot).join("") : ""),
  Ti = (e) => {
    const n =
      e == null ? void 0 : e.children.find((r) => it(r) && r.tagName.toLowerCase() === "code");
    if (!n) return null;
    const t = Ci(n);
    return t.includes("language-math") || t.includes("math-display")
      ? null
      : n.children.map(ot).join("");
  },
  Mi = (e) => ({
    minHeight: "1.85rem",
    padding: e.spacing(0.2, 0.82),
    borderColor: C(e.palette.text.primary, 0.08),
    backgroundColor: C(e.palette.background.paper, 0.56),
    boxShadow: "none",
    color: "inherit",
    "&:hover:not(.Mui-disabled)": {
      borderColor: C(e.palette.text.primary, 0.16),
      backgroundColor: C(e.palette.background.paper, 0.82),
      boxShadow: "none",
      transform: "none",
    },
    "& .MuiButton-startIcon": { marginRight: e.spacing(0.52) },
  }),
  vi = ({ node: e, children: n, ...t }) => {
    const r = Ti(e);
    return r != null && r.trim()
      ? y.jsxs(I, {
          className: "markdown-code-block",
          children: [
            y.jsx(I, {
              className: "markdown-code-block-actions",
              children: y.jsx(bt, {
                content: r,
                label: "Copy",
                message: "Code copied",
                size: "small",
                sx: Mi,
                tooltipLabel: "Copy code",
                variant: "outlined",
              }),
            }),
            y.jsx("pre", { ...t, children: n }),
          ],
        })
      : y.jsx("pre", { ...t, children: n });
  },
  Ai = ({ node: e, children: n, ...t }) =>
    y.jsx(I, {
      className: "markdown-table-scroll",
      tabIndex: 0,
      children: y.jsx("table", { ...t, children: n }),
    }),
  Ei = ({ node: e, src: n, alt: t, ...r }) => {
    if (!n || !le(n)) return y.jsx("img", { src: n, alt: t, ...r });
    const o = (t == null ? void 0 : t.trim()) || "Python artifact",
      l = n.startsWith("data:image/jpeg;")
        ? "jpg"
        : n.startsWith("data:image/svg+xml;")
          ? "svg"
          : "png",
      i =
        o
          .replace(/[/\\?%*:|"<>]/g, "-")
          .replace(/\s+/g, " ")
          .trim() || "python-artifact",
      s = () => {
        const a = document.createElement("a");
        ((a.href = n),
          (a.download = i.toLowerCase().endsWith(`.${l}`) ? i : `${i}.${l}`),
          document.body.appendChild(a),
          a.click(),
          a.remove());
      };
    return y.jsxs(I, {
      component: "span",
      className: "markdown-artifact-image",
      children: [
        y.jsx(I, { component: "img", src: n, alt: o, ...r }),
        y.jsx(I, {
          component: "span",
          className: "markdown-artifact-image-actions",
          children: y.jsx(lt, {
            tooltip: "Download image",
            "aria-label": `Download ${o}`,
            size: "small",
            disableRipple: !0,
            onClick: s,
            children: y.jsx(st, { size: 17 }),
          }),
        }),
      ],
    });
  },
  te = {
    a: ({ node: e, ...n }) => y.jsx(at, { ...n, target: "_blank", rel: "noreferrer" }),
    img: Ei,
    table: Ai,
  },
  Si = {
    ...te,
    a: ({ node: e, children: n }) => y.jsx("span", { children: n }),
    img: ({ node: e, alt: n }) => y.jsx("span", { children: n }),
    p: ({ node: e, ...n }) => y.jsx("span", { ...n }),
  },
  Fi = (e, n, t) =>
    (n === "src" && t.tagName === "img" && le(e)) || (n === "href" && t.tagName === "a" && rt(e))
      ? e
      : At(e),
  Di = { maxWidth: "min(26rem, 72vw)", minWidth: 0 },
  Li = (e) => ({
    display: "inline-block",
    marginBottom: e.spacing(1.1),
    color: e.palette.text.secondary,
    fontSize: "0.88rem",
    fontWeight: 800,
    lineHeight: 1.25,
    "& :where(p)": { margin: 0 },
    "& :where(.katex)": { fontSize: "1em" },
  }),
  Te = { fontSize: "1rem" },
  Ri = (e) => ({
    marginTop: e.spacing(1.4),
    paddingTop: e.spacing(1.4),
    borderTop: `1px solid ${C(e.palette.text.primary, 0.12)}`,
    color: e.palette.text.secondary,
  }),
  Me = (e) => (n) => {
    const t = e === "user",
      r = n.palette.primary.main,
      o = C(n.palette.text.primary, 0.08),
      l = t ? n.palette.getContrastText(n.palette.primary.dark) : n.palette.text.primary,
      i = t ? C(n.palette.primary.dark, 0.38) : C(n.palette.text.primary, 0.04),
      s = t ? C(n.palette.text.primary, 0.08) : C(r, 0.08),
      a = C(r, t ? 0.18 : 0.22),
      u = t ? C(n.palette.text.primary, 0.04) : C(r, 0.05);
    return {
      color: "inherit",
      fontSize: "0.98rem",
      maxWidth: "100%",
      minWidth: 0,
      overflowWrap: "anywhere",
      "& > :first-of-type": { marginTop: 0 },
      "& > :last-child": { marginBottom: 0 },
      "& :where(h1, h2, h3, h4, h5, h6)": {
        margin: "1.2rem 0 0.55rem",
        lineHeight: 1.3,
        letterSpacing: "-0.02em",
      },
      "& :where(h1)": { fontSize: "1.28rem" },
      "& :where(h2)": { fontSize: "1.14rem" },
      "& :where(h3, h4, h5, h6)": { fontSize: "1.02rem" },
      "& :where(p, ul, ol, blockquote, pre, .markdown-table-scroll, hr)": { margin: "0.95rem 0 0" },
      "& :where(.markdown-code-block)": {
        maxWidth: "100%",
        margin: "0.95rem 0 0",
        overflow: "hidden",
        borderRadius: n.shape.borderRadiusPx,
        background: i,
        color: l,
        boxShadow: `inset 0 0 0 1px ${C(t ? n.palette.background.paper : n.palette.text.primary, t ? 0.08 : 0.04)}`,
      },
      "& :where(.markdown-code-block-actions)": {
        display: "flex",
        justifyContent: "flex-end",
        padding: n.spacing(0.5, 0.55, 0),
      },
      "& :where(.markdown-code-block > pre)": {
        margin: 0,
        paddingTop: n.spacing(0.45),
        background: "transparent",
        boxShadow: "none",
      },
      "& :where(ul, ol)": { paddingLeft: "1.35rem" },
      "& :where(li + li)": { marginTop: "0.3rem" },
      "& :where(li > p)": { marginTop: "0.4rem" },
      "& :where(a)": { color: r, textDecorationColor: C(r, 0.35), textUnderlineOffset: "0.18em" },
      "& :where(blockquote)": {
        padding: "0.15rem 0 0.15rem 0.95rem",
        borderLeft: `3px solid ${a}`,
        color: n.palette.text.secondary,
      },
      "& :where(:not(pre) > code)": {
        padding: "0.15rem 0.38rem",
        borderRadius: n.shape.borderRadiusPx,
        background: s,
        fontSize: "0.92em",
      },
      "& :where(pre)": {
        maxWidth: "100%",
        overflowX: "auto",
        padding: "0.95rem 1rem",
        borderRadius: n.shape.borderRadiusPx,
        background: i,
        color: l,
        boxShadow: `inset 0 0 0 1px ${C(t ? n.palette.background.paper : n.palette.text.primary, t ? 0.08 : 0.04)}`,
      },
      "& :where(pre code)": {
        display: "block",
        minWidth: "max-content",
        background: "transparent",
        color: "inherit",
        fontSize: "0.92rem",
        lineHeight: 1.65,
      },
      "& :where(.markdown-table-scroll)": { maxWidth: "100%", overflowX: "auto" },
      "& :where(.markdown-table-scroll table)": {
        width: "max-content",
        minWidth: "100%",
        borderCollapse: "collapse",
      },
      "& :where(th, td)": {
        padding: "0.55rem 0.7rem",
        border: `1px solid ${o}`,
        textAlign: "left",
      },
      "& :where(th)": { background: C(r, 0.06), fontWeight: 700 },
      "& :where(hr)": { border: 0, height: "1px", background: o },
      "& :where(img)": { display: "block", maxWidth: "100%", borderRadius: n.shape.borderRadiusPx },
      "& :where(.markdown-artifact-image)": {
        display: "inline-block",
        position: "relative",
        width: "fit-content",
        maxWidth: "100%",
        margin: "0.95rem 0 0",
        overflow: "hidden",
        borderRadius: n.shape.borderRadiusPx,
        border: `1px solid ${C(n.palette.text.primary, 0.08)}`,
        backgroundColor: C(n.palette.background.paper, 0.88),
        boxShadow: `0 12px 28px ${C(n.palette.text.primary, 0.06)}`,
      },
      "& :where(.markdown-artifact-image > img)": {
        width: "auto",
        maxWidth: "100%",
        maxHeight: "32rem",
        objectFit: "contain",
        backgroundColor: C(n.palette.text.primary, 0.03),
      },
      "& :where(.markdown-artifact-image-actions)": {
        position: "absolute",
        top: n.spacing(0.65),
        right: n.spacing(0.65),
        display: "inline-flex",
        borderRadius: n.shape.borderRadiusPx,
        backgroundColor: C(n.palette.background.paper, 0.86),
        boxShadow: `0 8px 20px ${C(n.palette.text.primary, 0.14)}`,
        backdropFilter: "blur(8px)",
      },
      "& :where(code.language-math)": {
        padding: 0,
        borderRadius: n.shape.borderRadiusPx,
        background: "transparent",
        fontSize: "1em",
      },
      "& :where(pre:has(> code.language-math))": {
        padding: 0,
        background: "transparent",
        boxShadow: "none",
        overflow: "visible",
      },
      "& :where(pre > code.language-math)": { display: "block", minWidth: 0, whiteSpace: "normal" },
      "& :where(.katex)": {
        color: "inherit",
        borderRadius: n.shape.radiusSmPx,
        cursor: "text",
        fontSize: "1.04em",
        transition: n.transitions.create(["background-color", "box-shadow"], {
          duration: n.transitions.duration.shortest,
        }),
      },
      "& :where(:not(.katex-display) > .katex)": {
        maxWidth: "100%",
        overflowX: "auto",
        overflowY: "hidden",
        verticalAlign: "middle",
      },
      "& :where(.katex:hover)": {
        backgroundColor: C(r, t ? 0.08 : 0.07),
        boxShadow: `0 0 0 2px ${C(r, t ? 0.08 : 0.1)}`,
      },
      "& :where(.katex .fbox)": { pointerEvents: "none" },
      "& :where(.katex-display)": {
        margin: "1rem 0",
        maxWidth: "100%",
        overflowX: "auto",
        overflowY: "hidden",
        padding: "0.85rem 1rem",
        borderRadius: n.shape.borderRadiusPx,
        background: u,
      },
      "& :where(.markdown-numbered-math)": {
        display: "grid",
        width: "100%",
        boxSizing: "border-box",
        maxWidth: "100%",
        minWidth: 0,
        gridTemplateColumns: "auto minmax(0, 1fr)",
        alignItems: "center",
        gap: n.spacing(1.2),
        margin: "1rem 0",
        padding: "0.85rem 1rem",
        borderRadius: n.shape.borderRadiusPx,
        background: u,
      },
      "& :where(.markdown-numbered-math > .katex-display)": {
        margin: 0,
        minWidth: 0,
        padding: 0,
        background: "transparent",
      },
      "& :where(.markdown-math-label)": {
        color: n.palette.text.primary,
        fontFamily: n.typography.fontFamily,
        fontSize: n.typography.pxToRem(15.5),
        fontVariantNumeric: "tabular-nums",
        fontWeight: 800,
        justifySelf: "start",
        lineHeight: 1.2,
        minWidth: "2.7rem",
        whiteSpace: "nowrap",
      },
      "& :where(code)": { fontSize: "0.92em" },
    };
  },
  zi = { display: "inline", fontSize: "inherit", overflowWrap: "inherit" },
  Ii = ({
    content: e,
    tone: n = "assistant",
    sx: t,
    components: r,
    highlights: o = [],
    latexMacros: l,
    mathLabelPrefix: i,
    mathSyntax: s = "compatibility",
    mode: a = "default",
    inline: u = !1,
    showCodeCopyButton: h = !1,
  }) => {
    const c = pi(),
      m = a === "compact",
      k = E.useMemo(() => si(e, s), [e, s]),
      f = E.useMemo(() => ft(e), [e]),
      g = E.useMemo(() => mt(bi, c, l, f), [c, f, l]),
      b = E.useMemo(() => (g ? { macros: g } : {}), [g]),
      x = E.useMemo(() => [[pt, b]], [b]),
      d = E.useMemo(() => (m ? wi : dt(o)), [m, o]),
      w = E.useMemo(() => yi(k), [k]),
      v = E.useMemo(() => (m ? w : gt(w, d.latexTerms)), [w, d.latexTerms, m]),
      T = E.useMemo(() => kt(d, x, b), [x, d, b]),
      M = E.useMemo(() => (m || i === void 0 ? T : [...T, mi(i)]), [m, i, T]),
      R = u ? [Me(n), zi] : [Me(n)],
      $ = Array.isArray(t) ? [...R, ...t] : [...R, t],
      A = E.useMemo(() => (u ? Si : h && !m ? { ...te, pre: vi } : te), [u, m, h]),
      p = E.useMemo(
        () =>
          m
            ? r
              ? { ...A, ...r }
              : A
            : xt(A, r, d.highlightsById, (_) => y.jsx(Pi, { highlight: _, mathSyntax: s })),
        [A, r, d.highlightsById, m, s],
      );
    return y.jsx(I, {
      component: u ? "span" : "div",
      sx: $,
      children: y.jsx(vt, {
        remarkPlugins: ki,
        rehypePlugins: M,
        components: p,
        urlTransform: Fi,
        children: v,
      }),
    });
  },
  J = E.memo(Ii),
  Pi = ({ highlight: e, mathSyntax: n }) =>
    y.jsxs(I, {
      sx: Di,
      children: [
        y.jsx(J, { content: e.text, mathSyntax: n, mode: "compact", sx: Li }),
        y.jsx(J, { content: e.tooltip, mathSyntax: n, mode: "compact", sx: Te }),
        e.note
          ? y.jsx(I, {
              sx: Ri,
              children: y.jsx(J, { content: e.note, mathSyntax: n, mode: "compact", sx: Te }),
            })
          : null,
      ],
    });
export { Wi as M, J as a, le as b, Hi as i };
