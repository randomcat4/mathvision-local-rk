import {
  j as y,
  r as E,
  B as I,
  a5 as _Component4,
  V as _Component3,
  g as C,
} from "./index-BM3ZINIl.js";
import { D as _Component2 } from "./katex.min-ADdKj7O-.js";
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
import { C as _Component } from "./CopyButton-BcOsqrNJ.js";
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
  M as _Component5,
  k as At,
} from "./index-DzMT-bSF.js";
import { c as De, v as Et, E as St } from "./index-Yb6ONXKu.js";
var Ft = {
  inline: ["$", "$"],
  display: ["$$", "$$"],
};
function Dt(e, n = Ft) {
  for (
    var t = e.querySelectorAll(".katex-mathml + .katex-html"), r = 0;
    r < t.length;
    r++
  ) {
    var o = t[r];
    if (o.remove) {
      o.remove();
    } else if (o.parentNode) {
      o.parentNode.removeChild(o);
    }
  }
  for (var l = e.querySelectorAll(".katex-mathml"), i = 0; i < l.length; i++) {
    var s = l[i];
    var a = s.querySelector("annotation");
    if (a) {
      if (s.replaceWith) {
        s.replaceWith(a);
      } else if (s.parentNode) {
        s.parentNode.replaceChild(a, s);
      }
      a.innerHTML = n.inline[0] + a.innerHTML + n.inline[1];
    }
  }
  for (
    var u = e.querySelectorAll(".katex-display annotation"), h = 0;
    h < u.length;
    h++
  ) {
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
  if (!!n && !n.isCollapsed && !!e.clipboardData) {
    var t = e.clipboardData;
    var r = n.getRangeAt(0);
    var o = me(r.startContainer);
    if (o) {
      r.setStartBefore(o);
    }
    var l = me(r.endContainer);
    if (l) {
      r.setEndAfter(l);
    }
    var i = r.cloneContents();
    if (i.querySelector(".katex-mathml")) {
      var s = Array.prototype.map
        .call(i.childNodes, (a) =>
          a instanceof Text ? a.textContent : a.outerHTML,
        )
        .join("");
      t.setData("text/html", s);
      t.setData("text/plain", Dt(i).textContent);
      e.preventDefault();
    }
  }
});
function pe(e, n) {
  const t = String(e);
  if (typeof n != "string") {
    throw new TypeError("Expected character");
  }
  let r = 0;
  let o = t.indexOf(n);
  while (o !== -1) {
    r++;
    o = t.indexOf(n, o + n.length);
  }
  return r;
}
function Lt(e) {
  if (typeof e != "string") {
    throw new TypeError("Expected a string");
  }
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Rt(e, n, t) {
  const o = De((t || {}).ignore || []);
  const l = zt(n);
  let i = -1;
  while (++i < l.length) {
    Et(e, "text", s);
  }
  function s(u, h) {
    let c = -1;
    let m;
    while (++c < h.length) {
      const k = h[c];
      const f = m ? m.children : undefined;
      if (o(k, f ? f.indexOf(k) : undefined, m)) {
        return;
      }
      m = k;
    }
    if (m) {
      return a(u, h);
    }
  }
  function a(u, h) {
    const c = h[h.length - 1];
    const m = l[i][0];
    const k = l[i][1];
    let f = 0;
    const b = c.children.indexOf(u);
    let x = false;
    let d = [];
    m.lastIndex = 0;
    let w = m.exec(u.value);
    while (w) {
      const v = w.index;
      const T = {
        index: w.index,
        input: w.input,
        stack: [...h, u],
      };
      let M = k(...w, T);
      if (typeof M == "string") {
        M =
          M.length > 0
            ? {
                type: "text",
                value: M,
              }
            : undefined;
      }
      if (M === false) {
        m.lastIndex = v + 1;
      } else {
        if (f !== v) {
          d.push({
            type: "text",
            value: u.value.slice(f, v),
          });
        }
        if (Array.isArray(M)) {
          d.push(...M);
        } else if (M) {
          d.push(M);
        }
        f = v + w[0].length;
        x = true;
      }
      if (!m.global) {
        break;
      }
      w = m.exec(u.value);
    }
    if (x) {
      if (f < u.value.length) {
        d.push({
          type: "text",
          value: u.value.slice(f),
        });
      }
      c.children.splice(b, 1, ...d);
    } else {
      d = [u];
    }
    return b + d.length;
  }
}
function zt(e) {
  const n = [];
  if (!Array.isArray(e)) {
    throw new TypeError("Expected find and replace tuple or list of tuples");
  }
  const t = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  while (++r < t.length) {
    const o = t[r];
    n.push([It(o[0]), Pt(o[1])]);
  }
  return n;
}
function It(e) {
  if (typeof e == "string") {
    return new RegExp(Lt(e), "g");
  } else {
    return e;
  }
}
function Pt(e) {
  if (typeof e == "function") {
    return e;
  } else {
    return function () {
      return e;
    };
  }
}
const K = "phrasing";
const Q = ["autolink", "link", "image", "label"];
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
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: K,
        notInConstruct: Q,
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: K,
        notInConstruct: Q,
      },
    ],
  };
}
function Nt(e) {
  this.enter(
    {
      type: "link",
      title: null,
      url: "",
      children: [],
    },
    e,
  );
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
  L(n.type === "link");
  n.url = "http://" + this.sliceSerialize(e);
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
      [
        new RegExp(
          "(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)",
          "gu",
        ),
        Ut,
      ],
    ],
    {
      ignore: ["link", "linkReference"],
    },
  );
}
function qt(e, n, t, r, o) {
  let l = "";
  if (
    !Le(o) ||
    (/^w/i.test(n) && ((t = n + t), (n = ""), (l = "http://")), !Vt(t))
  ) {
    return false;
  }
  const i = Xt(t + r);
  if (!i[0]) {
    return false;
  }
  const s = {
    type: "link",
    title: null,
    url: l + n + i[0],
    children: [
      {
        type: "text",
        value: n + i[0],
      },
    ],
  };
  if (i[1]) {
    return [
      s,
      {
        type: "text",
        value: i[1],
      },
    ];
  } else {
    return s;
  }
}
function Ut(e, n, t, r) {
  if (!Le(r, true) || /[-\d_]$/.test(t)) {
    return false;
  } else {
    return {
      type: "link",
      title: null,
      url: "mailto:" + n + "@" + t,
      children: [
        {
          type: "text",
          value: n + "@" + t,
        },
      ],
    };
  }
}
function Vt(e) {
  const n = e.split(".");
  return (
    !(n.length < 2) &&
    (!n[n.length - 1] ||
      (!/_/.test(n[n.length - 1]) && !!/[a-zA-Z\d]/.test(n[n.length - 1]))) &&
    (!n[n.length - 2] ||
      (!/_/.test(n[n.length - 2]) && !!/[a-zA-Z\d]/.test(n[n.length - 2])))
  );
}
function Xt(e) {
  const n = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!n) {
    return [e, undefined];
  }
  e = e.slice(0, n.index);
  let t = n[0];
  let r = t.indexOf(")");
  const o = pe(e, "(");
  let l = pe(e, ")");
  while (r !== -1 && o > l) {
    e += t.slice(0, r + 1);
    t = t.slice(r + 1);
    r = t.indexOf(")");
    l++;
  }
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
  this.enter(
    {
      type: "footnoteReference",
      identifier: "",
      label: "",
    },
    e,
  );
}
function Qt() {
  this.buffer();
}
function Yt(e) {
  this.enter(
    {
      type: "footnoteDefinition",
      identifier: "",
      label: "",
      children: [],
    },
    e,
  );
}
function Zt(e) {
  const n = this.resume();
  const t = this.stack[this.stack.length - 1];
  L(t.type === "footnoteReference");
  t.identifier = q(this.sliceSerialize(e)).toLowerCase();
  t.label = n;
}
function Jt(e) {
  this.exit(e);
}
function en(e) {
  const n = this.resume();
  const t = this.stack[this.stack.length - 1];
  L(t.type === "footnoteDefinition");
  t.identifier = q(this.sliceSerialize(e)).toLowerCase();
  t.label = n;
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
  const i = t.enter("footnoteReference");
  const s = t.enter("reference");
  l += o.move(
    t.safe(t.associationId(e), {
      after: "]",
      before: l,
    }),
  );
  s();
  i();
  l += o.move("]");
  return l;
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
  let n = false;
  if (e && e.firstLineBlank) {
    n = true;
  }
  return {
    handlers: {
      footnoteDefinition: t,
      footnoteReference: Re,
    },
    unsafe: [
      {
        character: "[",
        inConstruct: ["label", "phrasing", "reference"],
      },
    ],
  };
  function t(r, o, l, i) {
    const s = l.createTracker(i);
    let a = s.move("[^");
    const u = l.enter("footnoteDefinition");
    const h = l.enter("label");
    a += s.move(
      l.safe(l.associationId(r), {
        before: a,
        after: "]",
      }),
    );
    h();
    a += s.move("]:");
    if (r.children && r.children.length > 0) {
      s.shift(4);
      a += s.move(
        (n
          ? `
`
          : " ") + l.indentLines(l.containerFlow(r, s.current()), n ? ze : an),
      );
    }
    u();
    return a;
  }
}
function an(e, n, t) {
  if (n === 0) {
    return e;
  } else {
    return ze(e, n, t);
  }
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
  return {
    canContainEols: ["delete"],
    enter: {
      strikethrough: cn,
    },
    exit: {
      strikethrough: hn,
    },
  };
}
function un() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: ln,
      },
    ],
    handlers: {
      delete: Ie,
    },
  };
}
function cn(e) {
  this.enter(
    {
      type: "delete",
      children: [],
    },
    e,
  );
}
function hn(e) {
  this.exit(e);
}
function Ie(e, n, t, r) {
  const o = t.createTracker(r);
  const l = t.enter("strikethrough");
  let i = o.move("~~");
  i += t.containerPhrasing(e, {
    ...o.current(),
    before: i,
    after: "~",
  });
  i += o.move("~~");
  l();
  return i;
}
function fn() {
  return "~";
}
function mn(e) {
  return e.length;
}
function pn(e, n) {
  const t = n || {};
  const r = (t.align || []).concat();
  const o = t.stringLength || mn;
  const l = [];
  const i = [];
  const s = [];
  const a = [];
  let u = 0;
  let h = -1;
  while (++h < e.length) {
    const g = [];
    const b = [];
    let x = -1;
    for (e[h].length > u && (u = e[h].length); ++x < e[h].length;) {
      const d = dn(e[h][x]);
      if (t.alignDelimiters !== false) {
        const w = o(d);
        b[x] = w;
        if (a[x] === undefined || w > a[x]) {
          a[x] = w;
        }
      }
      g.push(d);
    }
    i[h] = g;
    s[h] = b;
  }
  let c = -1;
  if (typeof r == "object" && "length" in r) {
    while (++c < u) {
      l[c] = de(r[c]);
    }
  } else {
    const g = de(r);
    while (++c < u) {
      l[c] = g;
    }
  }
  c = -1;
  const m = [];
  const k = [];
  while (++c < u) {
    const g = l[c];
    let b = "";
    let x = "";
    if (g === 99) {
      b = ":";
      x = ":";
    } else if (g === 108) {
      b = ":";
    } else if (g === 114) {
      x = ":";
    }
    let d =
      t.alignDelimiters === false ? 1 : Math.max(1, a[c] - b.length - x.length);
    const w = b + "-".repeat(d) + x;
    if (t.alignDelimiters !== false) {
      d = b.length + d + x.length;
      if (d > a[c]) {
        a[c] = d;
      }
      k[c] = d;
    }
    m[c] = w;
  }
  i.splice(1, 0, m);
  s.splice(1, 0, k);
  h = -1;
  const f = [];
  while (++h < i.length) {
    const g = i[h];
    const b = s[h];
    c = -1;
    const x = [];
    while (++c < u) {
      const d = g[c] || "";
      let w = "";
      let v = "";
      if (t.alignDelimiters !== false) {
        const T = a[c] - (b[c] || 0);
        const M = l[c];
        if (M === 114) {
          w = " ".repeat(T);
        } else if (M === 99) {
          if (T % 2) {
            w = " ".repeat(T / 2 + 0.5);
            v = " ".repeat(T / 2 - 0.5);
          } else {
            w = " ".repeat(T / 2);
            v = w;
          }
        } else {
          v = " ".repeat(T);
        }
      }
      if (t.delimiterStart !== false && !c) {
        x.push("|");
      }
      if (
        t.padding !== false &&
        (t.alignDelimiters !== false || d !== "") &&
        (t.delimiterStart !== false || c)
      ) {
        x.push(" ");
      }
      if (t.alignDelimiters !== false) {
        x.push(w);
      }
      x.push(d);
      if (t.alignDelimiters !== false) {
        x.push(v);
      }
      if (t.padding !== false) {
        x.push(" ");
      }
      if (t.delimiterEnd !== false || c !== u - 1) {
        x.push("|");
      }
    }
    f.push(
      t.delimiterEnd === false ? x.join("").replace(/ +$/, "") : x.join(""),
    );
  }
  return f.join(`
`);
}
function dn(e) {
  if (e == null) {
    return "";
  } else {
    return String(e);
  }
}
function de(e) {
  const n = typeof e == "string" ? e.codePointAt(0) : 0;
  if (n === 67 || n === 99) {
    return 99;
  } else if (n === 76 || n === 108) {
    return 108;
  } else if (n === 82 || n === 114) {
    return 114;
  } else {
    return 0;
  }
}
function gn(e, n, t, r) {
  const o = t.enter("blockquote");
  const l = t.createTracker(r);
  l.move("> ");
  l.shift(2);
  const i = t.indentLines(t.containerFlow(e, l.current()), kn);
  o();
  return i;
}
function kn(e, n, t) {
  return ">" + (t ? "" : " ") + e;
}
function xn(e, n) {
  return ge(e, n.inConstruct, true) && !ge(e, n.notInConstruct, false);
}
function ge(e, n, t) {
  if (typeof n == "string") {
    n = [n];
  }
  if (!n || n.length === 0) {
    return t;
  }
  let r = -1;
  while (++r < n.length) {
    if (e.includes(n[r])) {
      return true;
    }
  }
  return false;
}
function ke(e, n, t, r) {
  let o = -1;
  while (++o < t.unsafe.length) {
    if (
      t.unsafe[o].character ===
        `
` &&
      xn(t.stack, t.unsafe[o])
    ) {
      if (/[ \t]/.test(r.before)) {
        return "";
      } else {
        return " ";
      }
    }
  }
  return `\\
`;
}
function Pe(e, n) {
  const t = String(e);
  let r = t.indexOf(n);
  let o = r;
  let l = 0;
  let i = 0;
  if (typeof n != "string") {
    throw new TypeError("Expected substring");
  }
  while (r !== -1) {
    if (r === o) {
      if (++l > i) {
        i = l;
      }
    } else {
      l = 1;
    }
    o = r + n.length;
    r = t.indexOf(n, o);
  }
  return i;
}
function bn(e, n) {
  return (
    n.options.fences === false &&
    !!e.value &&
    !e.lang &&
    !!/[^ \r\n]/.test(e.value) &&
    !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value)
  );
}
function wn(e) {
  const n = e.options.fence || "`";
  if (n !== "`" && n !== "~") {
    throw new Error(
      "Cannot serialize code with `" +
        n +
        "` for `options.fence`, expected `` ` `` or `~`",
    );
  }
  return n;
}
function yn(e, n, t, r) {
  const o = wn(t);
  const l = e.value || "";
  const i = o === "`" ? "GraveAccent" : "Tilde";
  if (bn(e, t)) {
    const c = t.enter("codeIndented");
    const m = t.indentLines(l, Cn);
    c();
    return m;
  }
  const s = t.createTracker(r);
  const a = o.repeat(Math.max(Pe(l, o) + 1, 3));
  const u = t.enter("codeFenced");
  let h = s.move(a);
  if (e.lang) {
    const c = t.enter(`codeFencedLang${i}`);
    h += s.move(
      t.safe(e.lang, {
        before: h,
        after: " ",
        encode: ["`"],
        ...s.current(),
      }),
    );
    c();
  }
  if (e.lang && e.meta) {
    const c = t.enter(`codeFencedMeta${i}`);
    h += s.move(" ");
    h += s.move(
      t.safe(e.meta, {
        before: h,
        after: `
`,
        encode: ["`"],
        ...s.current(),
      }),
    );
    c();
  }
  h += s.move(`
`);
  if (l) {
    h += s.move(`${l}
`);
  }
  h += s.move(a);
  u();
  return h;
}
function Cn(e, n, t) {
  return (t ? "" : "    ") + e;
}
function ie(e) {
  const n = e.options.quote || '"';
  if (n !== '"' && n !== "'") {
    throw new Error(
      "Cannot serialize title with `" +
        n +
        "` for `options.quote`, expected `\"`, or `'`",
    );
  }
  return n;
}
function Tn(e, n, t, r) {
  const o = ie(t);
  const l = o === '"' ? "Quote" : "Apostrophe";
  const i = t.enter("definition");
  let s = t.enter("label");
  const a = t.createTracker(r);
  let u = a.move("[");
  u += a.move(
    t.safe(t.associationId(e), {
      before: u,
      after: "]",
      ...a.current(),
    }),
  );
  u += a.move("]: ");
  s();
  if (!e.url || /[\0- \u007F]/.test(e.url)) {
    s = t.enter("destinationLiteral");
    u += a.move("<");
    u += a.move(
      t.safe(e.url, {
        before: u,
        after: ">",
        ...a.current(),
      }),
    );
    u += a.move(">");
  } else {
    s = t.enter("destinationRaw");
    u += a.move(
      t.safe(e.url, {
        before: u,
        after: e.title
          ? " "
          : `
`,
        ...a.current(),
      }),
    );
  }
  s();
  if (e.title) {
    s = t.enter(`title${l}`);
    u += a.move(" " + o);
    u += a.move(
      t.safe(e.title, {
        before: u,
        after: o,
        ...a.current(),
      }),
    );
    u += a.move(o);
    s();
  }
  i();
  return u;
}
function Mn(e) {
  const n = e.options.emphasis || "*";
  if (n !== "*" && n !== "_") {
    throw new Error(
      "Cannot serialize emphasis with `" +
        n +
        "` for `options.emphasis`, expected `*`, or `_`",
    );
  }
  return n;
}
function H(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function X(e, n, t) {
  const r = V(e);
  const o = V(n);
  if (r === undefined) {
    if (o === undefined) {
      if (t === "_") {
        return {
          inside: true,
          outside: true,
        };
      } else {
        return {
          inside: false,
          outside: false,
        };
      }
    } else if (o === 1) {
      return {
        inside: true,
        outside: true,
      };
    } else {
      return {
        inside: false,
        outside: true,
      };
    }
  } else if (r === 1) {
    if (o === undefined) {
      return {
        inside: false,
        outside: false,
      };
    } else if (o === 1) {
      return {
        inside: true,
        outside: true,
      };
    } else {
      return {
        inside: false,
        outside: false,
      };
    }
  } else if (o === undefined) {
    return {
      inside: false,
      outside: false,
    };
  } else if (o === 1) {
    return {
      inside: true,
      outside: false,
    };
  } else {
    return {
      inside: false,
      outside: false,
    };
  }
}
$e.peek = vn;
function $e(e, n, t, r) {
  const o = Mn(t);
  const l = t.enter("emphasis");
  const i = t.createTracker(r);
  const s = i.move(o);
  let a = i.move(
    t.containerPhrasing(e, {
      after: o,
      before: s,
      ...i.current(),
    }),
  );
  const u = a.charCodeAt(0);
  const h = X(r.before.charCodeAt(r.before.length - 1), u, o);
  if (h.inside) {
    a = H(u) + a.slice(1);
  }
  const c = a.charCodeAt(a.length - 1);
  const m = X(r.after.charCodeAt(0), c, o);
  if (m.inside) {
    a = a.slice(0, -1) + H(c);
  }
  const k = i.move(o);
  l();
  t.attentionEncodeSurroundingInfo = {
    after: m.outside,
    before: h.outside,
  };
  return s + a + k;
}
function vn(e, n, t) {
  return t.options.emphasis || "*";
}
function An(e, n) {
  let t = false;
  wt(e, function (r) {
    if (("value" in r && /\r?\n|\r/.test(r.value)) || r.type === "break") {
      t = true;
      return St;
    }
  });
  return (
    (!e.depth || !!(e.depth < 3)) && !!Fe(e) && (!!n.options.setext || !!t)
  );
}
function En(e, n, t, r) {
  const o = Math.max(Math.min(6, e.depth || 1), 1);
  const l = t.createTracker(r);
  if (An(e, t)) {
    const h = t.enter("headingSetext");
    const c = t.enter("phrasing");
    const m = t.containerPhrasing(e, {
      ...l.current(),
      before: `
`,
      after: `
`,
    });
    c();
    h();
    return `${m}
${(o === 1 ? "=" : "-").repeat(
  m.length -
    (Math.max(
      m.lastIndexOf("\r"),
      m.lastIndexOf(`
`),
    ) +
      1),
)}`;
  }
  const i = "#".repeat(o);
  const s = t.enter("headingAtx");
  const a = t.enter("phrasing");
  l.move(i + " ");
  let u = t.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...l.current(),
  });
  if (/^[\t ]/.test(u)) {
    u = H(u.charCodeAt(0)) + u.slice(1);
  }
  u = u ? i + " " + u : i;
  if (t.options.closeAtx) {
    u += " " + i;
  }
  a();
  s();
  return u;
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
  const o = ie(t);
  const l = o === '"' ? "Quote" : "Apostrophe";
  const i = t.enter("image");
  let s = t.enter("label");
  const a = t.createTracker(r);
  let u = a.move("![");
  u += a.move(
    t.safe(e.alt, {
      before: u,
      after: "]",
      ...a.current(),
    }),
  );
  u += a.move("](");
  s();
  if ((!e.url && e.title) || /[\0- \u007F]/.test(e.url)) {
    s = t.enter("destinationLiteral");
    u += a.move("<");
    u += a.move(
      t.safe(e.url, {
        before: u,
        after: ">",
        ...a.current(),
      }),
    );
    u += a.move(">");
  } else {
    s = t.enter("destinationRaw");
    u += a.move(
      t.safe(e.url, {
        before: u,
        after: e.title ? " " : ")",
        ...a.current(),
      }),
    );
  }
  s();
  if (e.title) {
    s = t.enter(`title${l}`);
    u += a.move(" " + o);
    u += a.move(
      t.safe(e.title, {
        before: u,
        after: o,
        ...a.current(),
      }),
    );
    u += a.move(o);
    s();
  }
  u += a.move(")");
  i();
  return u;
}
function Fn() {
  return "!";
}
Oe.peek = Dn;
function Oe(e, n, t, r) {
  const o = e.referenceType;
  const l = t.enter("imageReference");
  let i = t.enter("label");
  const s = t.createTracker(r);
  let a = s.move("![");
  const u = t.safe(e.alt, {
    before: a,
    after: "]",
    ...s.current(),
  });
  a += s.move(u + "][");
  i();
  const h = t.stack;
  t.stack = [];
  i = t.enter("reference");
  const c = t.safe(t.associationId(e), {
    before: a,
    after: "]",
    ...s.current(),
  });
  i();
  t.stack = h;
  l();
  if (o === "full" || !u || u !== c) {
    a += s.move(c + "]");
  } else if (o === "shortcut") {
    a = a.slice(0, -1);
  } else {
    a += s.move("]");
  }
  return a;
}
function Dn() {
  return "!";
}
je.peek = Ln;
function je(e, n, t) {
  let r = e.value || "";
  let o = "`";
  let l = -1;
  while (new RegExp("(^|[^`])" + o + "([^`]|$)").test(r)) {
    o += "`";
  }
  for (
    /[^ \r\n]/.test(r) &&
    ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) &&
    (r = " " + r + " ");
    ++l < t.unsafe.length;
  ) {
    const i = t.unsafe[l];
    const s = t.compilePattern(i);
    let a;
    if (i.atBreak) {
      while ((a = s.exec(r))) {
        let u = a.index;
        if (r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13) {
          u--;
        }
        r = r.slice(0, u) + " " + r.slice(a.index + 1);
      }
    }
  }
  return o + r + o;
}
function Ln() {
  return "`";
}
function Be(e, n) {
  const t = Fe(e);
  return (
    !n.options.resourceLink &&
    !!e.url &&
    !e.title &&
    !!e.children &&
    e.children.length === 1 &&
    e.children[0].type === "text" &&
    (t === e.url || "mailto:" + t === e.url) &&
    !!/^[a-z][a-z+.-]+:/i.test(e.url) &&
    !/[\0- <>\u007F]/.test(e.url)
  );
}
We.peek = Rn;
function We(e, n, t, r) {
  const o = ie(t);
  const l = o === '"' ? "Quote" : "Apostrophe";
  const i = t.createTracker(r);
  let s;
  let a;
  if (Be(e, t)) {
    const h = t.stack;
    t.stack = [];
    s = t.enter("autolink");
    let c = i.move("<");
    c += i.move(
      t.containerPhrasing(e, {
        before: c,
        after: ">",
        ...i.current(),
      }),
    );
    c += i.move(">");
    s();
    t.stack = h;
    return c;
  }
  s = t.enter("link");
  a = t.enter("label");
  let u = i.move("[");
  u += i.move(
    t.containerPhrasing(e, {
      before: u,
      after: "](",
      ...i.current(),
    }),
  );
  u += i.move("](");
  a();
  if ((!e.url && e.title) || /[\0- \u007F]/.test(e.url)) {
    a = t.enter("destinationLiteral");
    u += i.move("<");
    u += i.move(
      t.safe(e.url, {
        before: u,
        after: ">",
        ...i.current(),
      }),
    );
    u += i.move(">");
  } else {
    a = t.enter("destinationRaw");
    u += i.move(
      t.safe(e.url, {
        before: u,
        after: e.title ? " " : ")",
        ...i.current(),
      }),
    );
  }
  a();
  if (e.title) {
    a = t.enter(`title${l}`);
    u += i.move(" " + o);
    u += i.move(
      t.safe(e.title, {
        before: u,
        after: o,
        ...i.current(),
      }),
    );
    u += i.move(o);
    a();
  }
  u += i.move(")");
  s();
  return u;
}
function Rn(e, n, t) {
  if (Be(e, t)) {
    return "<";
  } else {
    return "[";
  }
}
He.peek = zn;
function He(e, n, t, r) {
  const o = e.referenceType;
  const l = t.enter("linkReference");
  let i = t.enter("label");
  const s = t.createTracker(r);
  let a = s.move("[");
  const u = t.containerPhrasing(e, {
    before: a,
    after: "]",
    ...s.current(),
  });
  a += s.move(u + "][");
  i();
  const h = t.stack;
  t.stack = [];
  i = t.enter("reference");
  const c = t.safe(t.associationId(e), {
    before: a,
    after: "]",
    ...s.current(),
  });
  i();
  t.stack = h;
  l();
  if (o === "full" || !u || u !== c) {
    a += s.move(c + "]");
  } else if (o === "shortcut") {
    a = a.slice(0, -1);
  } else {
    a += s.move("]");
  }
  return a;
}
function zn() {
  return "[";
}
function oe(e) {
  const n = e.options.bullet || "*";
  if (n !== "*" && n !== "+" && n !== "-") {
    throw new Error(
      "Cannot serialize items with `" +
        n +
        "` for `options.bullet`, expected `*`, `+`, or `-`",
    );
  }
  return n;
}
function In(e) {
  const n = oe(e);
  const t = e.options.bulletOther;
  if (!t) {
    if (n === "*") {
      return "-";
    } else {
      return "*";
    }
  }
  if (t !== "*" && t !== "+" && t !== "-") {
    throw new Error(
      "Cannot serialize items with `" +
        t +
        "` for `options.bulletOther`, expected `*`, `+`, or `-`",
    );
  }
  if (t === n) {
    throw new Error(
      "Expected `bullet` (`" +
        n +
        "`) and `bulletOther` (`" +
        t +
        "`) to be different",
    );
  }
  return t;
}
function Pn(e) {
  const n = e.options.bulletOrdered || ".";
  if (n !== "." && n !== ")") {
    throw new Error(
      "Cannot serialize items with `" +
        n +
        "` for `options.bulletOrdered`, expected `.` or `)`",
    );
  }
  return n;
}
function qe(e) {
  const n = e.options.rule || "*";
  if (n !== "*" && n !== "-" && n !== "_") {
    throw new Error(
      "Cannot serialize rules with `" +
        n +
        "` for `options.rule`, expected `*`, `-`, or `_`",
    );
  }
  return n;
}
function $n(e, n, t, r) {
  const o = t.enter("list");
  const l = t.bulletCurrent;
  let i = e.ordered ? Pn(t) : oe(t);
  const s = e.ordered ? (i === "." ? ")" : ".") : In(t);
  let a = n && t.bulletLastUsed ? i === t.bulletLastUsed : false;
  if (!e.ordered) {
    const h = e.children ? e.children[0] : undefined;
    if (
      (i === "*" || i === "-") &&
      h &&
      (!h.children || !h.children[0]) &&
      t.stack[t.stack.length - 1] === "list" &&
      t.stack[t.stack.length - 2] === "listItem" &&
      t.stack[t.stack.length - 3] === "list" &&
      t.stack[t.stack.length - 4] === "listItem" &&
      t.indexStack[t.indexStack.length - 1] === 0 &&
      t.indexStack[t.indexStack.length - 2] === 0 &&
      t.indexStack[t.indexStack.length - 3] === 0
    ) {
      a = true;
    }
    if (qe(t) === i && h) {
      let c = -1;
      while (++c < e.children.length) {
        const m = e.children[c];
        if (
          m &&
          m.type === "listItem" &&
          m.children &&
          m.children[0] &&
          m.children[0].type === "thematicBreak"
        ) {
          a = true;
          break;
        }
      }
    }
  }
  if (a) {
    i = s;
  }
  t.bulletCurrent = i;
  const u = t.containerFlow(e, r);
  t.bulletLastUsed = i;
  t.bulletCurrent = l;
  o();
  return u;
}
function _n(e) {
  const n = e.options.listItemIndent || "one";
  if (n !== "tab" && n !== "one" && n !== "mixed") {
    throw new Error(
      "Cannot serialize items with `" +
        n +
        "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`",
    );
  }
  return n;
}
function Nn(e, n, t, r) {
  const o = _n(t);
  let l = t.bulletCurrent || oe(t);
  if (n && n.type === "list" && n.ordered) {
    l =
      (typeof n.start == "number" && n.start > -1 ? n.start : 1) +
      (t.options.incrementListMarker === false ? 0 : n.children.indexOf(e)) +
      l;
  }
  let i = l.length + 1;
  if (
    o === "tab" ||
    (o === "mixed" && ((n && n.type === "list" && n.spread) || e.spread))
  ) {
    i = Math.ceil(i / 4) * 4;
  }
  const s = t.createTracker(r);
  s.move(l + " ".repeat(i - l.length));
  s.shift(i);
  const a = t.enter("listItem");
  const u = t.indentLines(t.containerFlow(e, s.current()), h);
  a();
  return u;
  function h(c, m, k) {
    if (m) {
      return (k ? "" : " ".repeat(i)) + c;
    } else {
      return (k ? l : l + " ".repeat(i - l.length)) + c;
    }
  }
}
function On(e, n, t, r) {
  const o = t.enter("paragraph");
  const l = t.enter("phrasing");
  const i = t.containerPhrasing(e, r);
  l();
  o();
  return i;
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
  if (n !== "*" && n !== "_") {
    throw new Error(
      "Cannot serialize strong with `" +
        n +
        "` for `options.strong`, expected `*`, or `_`",
    );
  }
  return n;
}
Ue.peek = Hn;
function Ue(e, n, t, r) {
  const o = Wn(t);
  const l = t.enter("strong");
  const i = t.createTracker(r);
  const s = i.move(o + o);
  let a = i.move(
    t.containerPhrasing(e, {
      after: o,
      before: s,
      ...i.current(),
    }),
  );
  const u = a.charCodeAt(0);
  const h = X(r.before.charCodeAt(r.before.length - 1), u, o);
  if (h.inside) {
    a = H(u) + a.slice(1);
  }
  const c = a.charCodeAt(a.length - 1);
  const m = X(r.after.charCodeAt(0), c, o);
  if (m.inside) {
    a = a.slice(0, -1) + H(c);
  }
  const k = i.move(o + o);
  l();
  t.attentionEncodeSurroundingInfo = {
    after: m.outside,
    before: h.outside,
  };
  return s + a + k;
}
function Hn(e, n, t) {
  return t.options.strong || "*";
}
function qn(e, n, t, r) {
  return t.safe(e.value, r);
}
function Un(e) {
  const n = e.options.ruleRepetition || 3;
  if (n < 3) {
    throw new Error(
      "Cannot serialize rules with repetition `" +
        n +
        "` for `options.ruleRepetition`, expected `3` or more",
    );
  }
  return n;
}
function Vn(e, n, t) {
  const r = (qe(t) + (t.options.ruleSpaces ? " " : "")).repeat(Un(t));
  if (t.options.ruleSpaces) {
    return r.slice(0, -1);
  } else {
    return r;
  }
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
    enter: {
      table: Gn,
      tableData: xe,
      tableHeader: xe,
      tableRow: Qn,
    },
    exit: {
      codeText: Yn,
      table: Kn,
      tableData: Z,
      tableHeader: Z,
      tableRow: Z,
    },
  };
}
function Gn(e) {
  const n = e._align;
  this.enter(
    {
      type: "table",
      align: n.map(function (t) {
        if (t === "none") {
          return null;
        } else {
          return t;
        }
      }),
      children: [],
    },
    e,
  );
  this.data.inTable = true;
}
function Kn(e) {
  this.exit(e);
  this.data.inTable = undefined;
}
function Qn(e) {
  this.enter(
    {
      type: "tableRow",
      children: [],
    },
    e,
  );
}
function Z(e) {
  this.exit(e);
}
function xe(e) {
  this.enter(
    {
      type: "tableCell",
      children: [],
    },
    e,
  );
}
function Yn(e) {
  let n = this.resume();
  if (this.data.inTable) {
    n = n.replace(/\\([\\|])/g, Zn);
  }
  const t = this.stack[this.stack.length - 1];
  L(t.type === "inlineCode");
  t.value = n;
  this.exit(e);
}
function Zn(e, n) {
  if (n === "|") {
    return n;
  } else {
    return e;
  }
}
function Jn(e) {
  const n = e || {};
  const t = n.tableCellPadding;
  const r = n.tablePipeAlign;
  const o = n.stringLength;
  const l = t ? " " : "|";
  return {
    unsafe: [
      {
        character: "\r",
        inConstruct: "tableCell",
      },
      {
        character: `
`,
        inConstruct: "tableCell",
      },
      {
        atBreak: true,
        character: "|",
        after: "[\t :-]",
      },
      {
        character: "|",
        inConstruct: "tableCell",
      },
      {
        atBreak: true,
        character: ":",
        after: "-",
      },
      {
        atBreak: true,
        character: "-",
        after: "[:|-]",
      },
    ],
    handlers: {
      inlineCode: m,
      table: i,
      tableCell: a,
      tableRow: s,
    },
  };
  function i(k, f, g, b) {
    return u(h(k, g, b), k.align);
  }
  function s(k, f, g, b) {
    const x = c(k, g, b);
    const d = u([x]);
    return d.slice(
      0,
      d.indexOf(`
`),
    );
  }
  function a(k, f, g, b) {
    const x = g.enter("tableCell");
    const d = g.enter("phrasing");
    const w = g.containerPhrasing(k, {
      ...b,
      before: l,
      after: l,
    });
    d();
    x();
    return w;
  }
  function u(k, f) {
    return pn(k, {
      align: f,
      alignDelimiters: r,
      padding: t,
      stringLength: o,
    });
  }
  function h(k, f, g) {
    const b = k.children;
    let x = -1;
    const d = [];
    const w = f.enter("table");
    while (++x < b.length) {
      d[x] = c(b[x], f, g);
    }
    w();
    return d;
  }
  function c(k, f, g) {
    const b = k.children;
    let x = -1;
    const d = [];
    const w = f.enter("tableRow");
    while (++x < b.length) {
      d[x] = a(b[x], k, f, g);
    }
    w();
    return d;
  }
  function m(k, f, g) {
    let b = Ve.inlineCode(k, f, g);
    if (g.stack.includes("tableCell")) {
      b = b.replace(/\|/g, "\\$&");
    }
    return b;
  }
}
function er() {
  return {
    exit: {
      taskListCheckValueChecked: be,
      taskListCheckValueUnchecked: be,
      paragraph: nr,
    },
  };
}
function tr() {
  return {
    unsafe: [
      {
        atBreak: true,
        character: "-",
        after: "[:|-]",
      },
    ],
    handlers: {
      listItem: rr,
    },
  };
}
function be(e) {
  const n = this.stack[this.stack.length - 2];
  L(n.type === "listItem");
  n.checked = e.type === "taskListCheckValueChecked";
}
function nr(e) {
  const n = this.stack[this.stack.length - 2];
  if (n && n.type === "listItem" && typeof n.checked == "boolean") {
    const t = this.stack[this.stack.length - 1];
    L(t.type === "paragraph");
    const r = t.children[0];
    if (r && r.type === "text") {
      const o = n.children;
      let l = -1;
      let i;
      while (++l < o.length) {
        const s = o[l];
        if (s.type === "paragraph") {
          i = s;
          break;
        }
      }
      if (i === t) {
        r.value = r.value.slice(1);
        if (r.value.length === 0) {
          t.children.shift();
        } else if (
          t.position &&
          r.position &&
          typeof r.position.start.offset == "number"
        ) {
          r.position.start.column++;
          r.position.start.offset++;
          t.position.start = Object.assign({}, r.position.start);
        }
      }
    }
  }
  this.exit(e);
}
function rr(e, n, t, r) {
  const o = e.children[0];
  const l = typeof e.checked == "boolean" && o && o.type === "paragraph";
  const i = "[" + (e.checked ? "x" : " ") + "] ";
  const s = t.createTracker(r);
  if (l) {
    s.move(i);
  }
  let a = Ve.listItem(e, n, t, {
    ...r,
    ...s.current(),
  });
  if (l) {
    a = a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u);
  }
  return a;
  function u(h) {
    return h + i;
  }
}
function ir() {
  return [$t(), rn(), sn(), Xn(), er()];
}
function or(e) {
  return {
    extensions: [_t(), on(e), un(), Jn(e), tr()],
  };
}
const ar = {
  tokenize: fr,
  partial: true,
};
const Xe = {
  tokenize: mr,
  partial: true,
};
const Ge = {
  tokenize: pr,
  partial: true,
};
const Ke = {
  tokenize: dr,
  partial: true,
};
const lr = {
  tokenize: gr,
  partial: true,
};
const Qe = {
  name: "wwwAutolink",
  tokenize: cr,
  previous: Ze,
};
const Ye = {
  name: "protocolAutolink",
  tokenize: hr,
  previous: Je,
};
const P = {
  name: "emailAutolink",
  tokenize: ur,
  previous: et,
};
const z = {};
function sr() {
  return {
    text: z,
  };
}
let N = 48;
while (N < 123) {
  z[N] = P;
  N++;
  if (N === 58) {
    N = 65;
  } else if (N === 91) {
    N = 97;
  }
}
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
  let o;
  let l;
  return i;
  function i(c) {
    if (!ee(c) || !et.call(r, r.previous) || ae(r.events)) {
      return t(c);
    } else {
      e.enter("literalAutolink");
      e.enter("literalAutolinkEmail");
      return s(c);
    }
  }
  function s(c) {
    if (ee(c)) {
      e.consume(c);
      return s;
    } else if (c === 64) {
      e.consume(c);
      return a;
    } else {
      return t(c);
    }
  }
  function a(c) {
    if (c === 46) {
      return e.check(lr, h, u)(c);
    } else if (c === 45 || c === 95 || re(c)) {
      l = true;
      e.consume(c);
      return a;
    } else {
      return h(c);
    }
  }
  function u(c) {
    e.consume(c);
    o = true;
    return a;
  }
  function h(c) {
    if (l && o && W(r.previous)) {
      e.exit("literalAutolinkEmail");
      e.exit("literalAutolink");
      return n(c);
    } else {
      return t(c);
    }
  }
}
function cr(e, n, t) {
  const r = this;
  return o;
  function o(i) {
    if ((i !== 87 && i !== 119) || !Ze.call(r, r.previous) || ae(r.events)) {
      return t(i);
    } else {
      e.enter("literalAutolink");
      e.enter("literalAutolinkWww");
      return e.check(ar, e.attempt(Xe, e.attempt(Ge, l), t), t)(i);
    }
  }
  function l(i) {
    e.exit("literalAutolinkWww");
    e.exit("literalAutolink");
    return n(i);
  }
}
function hr(e, n, t) {
  const r = this;
  let o = "";
  let l = false;
  return i;
  function i(c) {
    if ((c === 72 || c === 104) && Je.call(r, r.previous) && !ae(r.events)) {
      e.enter("literalAutolink");
      e.enter("literalAutolinkHttp");
      o += String.fromCodePoint(c);
      e.consume(c);
      return s;
    } else {
      return t(c);
    }
  }
  function s(c) {
    if (W(c) && o.length < 5) {
      o += String.fromCodePoint(c);
      e.consume(c);
      return s;
    }
    if (c === 58) {
      const m = o.toLowerCase();
      if (m === "http" || m === "https") {
        e.consume(c);
        return a;
      }
    }
    return t(c);
  }
  function a(c) {
    if (c === 47) {
      e.consume(c);
      if (l) {
        return u;
      } else {
        l = true;
        return a;
      }
    } else {
      return t(c);
    }
  }
  function u(c) {
    if (c === null || yt(c) || S(c) || B(c) || ne(c)) {
      return t(c);
    } else {
      return e.attempt(Xe, e.attempt(Ge, h), t)(c);
    }
  }
  function h(c) {
    e.exit("literalAutolinkHttp");
    e.exit("literalAutolink");
    return n(c);
  }
}
function fr(e, n, t) {
  let r = 0;
  return o;
  function o(i) {
    if ((i === 87 || i === 119) && r < 3) {
      r++;
      e.consume(i);
      return o;
    } else if (i === 46 && r === 3) {
      e.consume(i);
      return l;
    } else {
      return t(i);
    }
  }
  function l(i) {
    if (i === null) {
      return t(i);
    } else {
      return n(i);
    }
  }
}
function mr(e, n, t) {
  let r;
  let o;
  let l;
  return i;
  function i(u) {
    if (u === 46 || u === 95) {
      return e.check(Ke, a, s)(u);
    } else if (u === null || S(u) || B(u) || (u !== 45 && ne(u))) {
      return a(u);
    } else {
      l = true;
      e.consume(u);
      return i;
    }
  }
  function s(u) {
    if (u === 95) {
      r = true;
    } else {
      o = r;
      r = undefined;
    }
    e.consume(u);
    return i;
  }
  function a(u) {
    if (o || r || !l) {
      return t(u);
    } else {
      return n(u);
    }
  }
}
function pr(e, n) {
  let t = 0;
  let r = 0;
  return o;
  function o(i) {
    if (i === 40) {
      t++;
      e.consume(i);
      return o;
    } else if (i === 41 && r < t) {
      return l(i);
    } else if (
      i === 33 ||
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
    ) {
      return e.check(Ke, n, l)(i);
    } else if (i === null || S(i) || B(i)) {
      return n(i);
    } else {
      e.consume(i);
      return o;
    }
  }
  function l(i) {
    if (i === 41) {
      r++;
    }
    e.consume(i);
    return o;
  }
}
function dr(e, n, t) {
  return r;
  function r(s) {
    if (
      s === 33 ||
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
    ) {
      e.consume(s);
      return r;
    } else if (s === 38) {
      e.consume(s);
      return l;
    } else if (s === 93) {
      e.consume(s);
      return o;
    } else if (s === 60 || s === null || S(s) || B(s)) {
      return n(s);
    } else {
      return t(s);
    }
  }
  function o(s) {
    if (s === null || s === 40 || s === 91 || S(s) || B(s)) {
      return n(s);
    } else {
      return r(s);
    }
  }
  function l(s) {
    if (W(s)) {
      return i(s);
    } else {
      return t(s);
    }
  }
  function i(s) {
    if (s === 59) {
      e.consume(s);
      return r;
    } else if (W(s)) {
      e.consume(s);
      return i;
    } else {
      return t(s);
    }
  }
}
function gr(e, n, t) {
  return r;
  function r(l) {
    e.consume(l);
    return o;
  }
  function o(l) {
    if (re(l)) {
      return t(l);
    } else {
      return n(l);
    }
  }
}
function Ze(e) {
  return (
    e === null ||
    e === 40 ||
    e === 42 ||
    e === 95 ||
    e === 91 ||
    e === 93 ||
    e === 126 ||
    S(e)
  );
}
function Je(e) {
  return !W(e);
}
function et(e) {
  return e !== 47 && !ee(e);
}
function ee(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || re(e);
}
function ae(e) {
  let n = e.length;
  let t = false;
  while (n--) {
    const r = e[n][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      t = true;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      t = false;
      break;
    }
  }
  if (e.length > 0 && !t) {
    e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
  }
  return t;
}
const kr = {
  tokenize: vr,
  partial: true,
};
function xr() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: Cr,
        continuation: {
          tokenize: Tr,
        },
        exit: Mr,
      },
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: yr,
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: br,
        resolveTo: wr,
      },
    },
  };
}
function br(e, n, t) {
  const r = this;
  let o = r.events.length;
  const l = (r.parser.gfmFootnotes ||= []);
  let i;
  while (o--) {
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
    ) {
      break;
    }
  }
  return s;
  function s(a) {
    if (!i || !i._balanced) {
      return t(a);
    }
    const u = q(
      r.sliceSerialize({
        start: i.end,
        end: r.now(),
      }),
    );
    if (u.codePointAt(0) !== 94 || !l.includes(u.slice(1))) {
      return t(a);
    } else {
      e.enter("gfmFootnoteCallLabelMarker");
      e.consume(a);
      e.exit("gfmFootnoteCallLabelMarker");
      return n(a);
    }
  }
}
function wr(e, n) {
  let t = e.length;
  while (t--) {
    if (e[t][1].type === "labelImage" && e[t][0] === "enter") {
      e[t][1];
      break;
    }
  }
  e[t + 1][1].type = "data";
  e[t + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[t + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end),
  };
  const o = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[t + 3][1].end),
    end: Object.assign({}, e[t + 3][1].end),
  };
  o.end.column++;
  o.end.offset++;
  o.end._bufferIndex++;
  const l = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, o.end),
    end: Object.assign({}, e[e.length - 1][1].start),
  };
  const i = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, l.start),
    end: Object.assign({}, l.end),
  };
  const s = [
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
  e.splice(t, e.length - t + 1, ...s);
  return e;
}
function yr(e, n, t) {
  const r = this;
  const o = (r.parser.gfmFootnotes ||= []);
  let l = 0;
  let i;
  return s;
  function s(c) {
    e.enter("gfmFootnoteCall");
    e.enter("gfmFootnoteCallLabelMarker");
    e.consume(c);
    e.exit("gfmFootnoteCallLabelMarker");
    return a;
  }
  function a(c) {
    if (c !== 94) {
      return t(c);
    } else {
      e.enter("gfmFootnoteCallMarker");
      e.consume(c);
      e.exit("gfmFootnoteCallMarker");
      e.enter("gfmFootnoteCallString");
      e.enter("chunkString").contentType = "string";
      return u;
    }
  }
  function u(c) {
    if (l > 999 || (c === 93 && !i) || c === null || c === 91 || S(c)) {
      return t(c);
    }
    if (c === 93) {
      e.exit("chunkString");
      const m = e.exit("gfmFootnoteCallString");
      if (o.includes(q(r.sliceSerialize(m)))) {
        e.enter("gfmFootnoteCallLabelMarker");
        e.consume(c);
        e.exit("gfmFootnoteCallLabelMarker");
        e.exit("gfmFootnoteCall");
        return n;
      } else {
        return t(c);
      }
    }
    if (!S(c)) {
      i = true;
    }
    l++;
    e.consume(c);
    if (c === 92) {
      return h;
    } else {
      return u;
    }
  }
  function h(c) {
    if (c === 91 || c === 92 || c === 93) {
      e.consume(c);
      l++;
      return u;
    } else {
      return u(c);
    }
  }
}
function Cr(e, n, t) {
  const r = this;
  const o = (r.parser.gfmFootnotes ||= []);
  let l;
  let i = 0;
  let s;
  return a;
  function a(f) {
    e.enter("gfmFootnoteDefinition")._container = true;
    e.enter("gfmFootnoteDefinitionLabel");
    e.enter("gfmFootnoteDefinitionLabelMarker");
    e.consume(f);
    e.exit("gfmFootnoteDefinitionLabelMarker");
    return u;
  }
  function u(f) {
    if (f === 94) {
      e.enter("gfmFootnoteDefinitionMarker");
      e.consume(f);
      e.exit("gfmFootnoteDefinitionMarker");
      e.enter("gfmFootnoteDefinitionLabelString");
      e.enter("chunkString").contentType = "string";
      return h;
    } else {
      return t(f);
    }
  }
  function h(f) {
    if (i > 999 || (f === 93 && !s) || f === null || f === 91 || S(f)) {
      return t(f);
    }
    if (f === 93) {
      e.exit("chunkString");
      const g = e.exit("gfmFootnoteDefinitionLabelString");
      l = q(r.sliceSerialize(g));
      e.enter("gfmFootnoteDefinitionLabelMarker");
      e.consume(f);
      e.exit("gfmFootnoteDefinitionLabelMarker");
      e.exit("gfmFootnoteDefinitionLabel");
      return m;
    }
    if (!S(f)) {
      s = true;
    }
    i++;
    e.consume(f);
    if (f === 92) {
      return c;
    } else {
      return h;
    }
  }
  function c(f) {
    if (f === 91 || f === 92 || f === 93) {
      e.consume(f);
      i++;
      return h;
    } else {
      return h(f);
    }
  }
  function m(f) {
    if (f === 58) {
      e.enter("definitionMarker");
      e.consume(f);
      e.exit("definitionMarker");
      if (!o.includes(l)) {
        o.push(l);
      }
      return F(e, k, "gfmFootnoteDefinitionWhitespace");
    } else {
      return t(f);
    }
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
    if (
      i &&
      i[1].type === "gfmFootnoteDefinitionIndent" &&
      i[2].sliceSerialize(i[1], true).length === 4
    ) {
      return n(l);
    } else {
      return t(l);
    }
  }
}
function Ar(e) {
  let t = (e || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: l,
    resolveAll: o,
  };
  if (t == null) {
    t = true;
  }
  return {
    text: {
      126: r,
    },
    insideSpan: {
      null: [r],
    },
    attentionMarkers: {
      null: [126],
    },
  };
  function o(i, s) {
    let a = -1;
    while (++a < i.length) {
      if (
        i[a][0] === "enter" &&
        i[a][1].type === "strikethroughSequenceTemporary" &&
        i[a][1]._close
      ) {
        let u = a;
        while (u--) {
          if (
            i[u][0] === "exit" &&
            i[u][1].type === "strikethroughSequenceTemporary" &&
            i[u][1]._open &&
            i[a][1].end.offset - i[a][1].start.offset ===
              i[u][1].end.offset - i[u][1].start.offset
          ) {
            i[a][1].type = "strikethroughSequence";
            i[u][1].type = "strikethroughSequence";
            const h = {
              type: "strikethrough",
              start: Object.assign({}, i[u][1].start),
              end: Object.assign({}, i[a][1].end),
            };
            const c = {
              type: "strikethroughText",
              start: Object.assign({}, i[u][1].end),
              end: Object.assign({}, i[a][1].start),
            };
            const m = [
              ["enter", h, s],
              ["enter", i[u][1], s],
              ["exit", i[u][1], s],
              ["enter", c, s],
            ];
            const k = s.parser.constructs.insideSpan.null;
            if (k) {
              G(m, m.length, 0, Tt(k, i.slice(u + 1, a), s));
            }
            G(m, m.length, 0, [
              ["exit", c, s],
              ["enter", i[a][1], s],
              ["exit", i[a][1], s],
              ["exit", h, s],
            ]);
            G(i, u - 1, a - u + 3, m);
            a = u + m.length - 2;
            break;
          }
        }
      }
    }
    for (a = -1; ++a < i.length;) {
      if (i[a][1].type === "strikethroughSequenceTemporary") {
        i[a][1].type = "data";
      }
    }
    return i;
  }
  function l(i, s, a) {
    const u = this.previous;
    const h = this.events;
    let c = 0;
    return m;
    function m(f) {
      if (u === 126 && h[h.length - 1][1].type !== "characterEscape") {
        return a(f);
      } else {
        i.enter("strikethroughSequenceTemporary");
        return k(f);
      }
    }
    function k(f) {
      const g = V(u);
      if (f === 126) {
        if (c > 1) {
          return a(f);
        } else {
          i.consume(f);
          c++;
          return k;
        }
      }
      if (c < 2 && !t) {
        return a(f);
      }
      const b = i.exit("strikethroughSequenceTemporary");
      const x = V(f);
      b._open = !x || (x === 2 && !!g);
      b._close = !g || (g === 2 && !!x);
      return s(f);
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
    this.map.sort(function (l, i) {
      return l[0] - i[0];
    });
    if (this.map.length === 0) {
      return;
    }
    let t = this.map.length;
    const r = [];
    while (t > 0) {
      t -= 1;
      r.push(n.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]);
      n.length = this.map[t][0];
    }
    r.push(n.slice());
    n.length = 0;
    let o = r.pop();
    while (o) {
      for (const l of o) {
        n.push(l);
      }
      o = r.pop();
    }
    this.map.length = 0;
  }
}
function Sr(e, n, t, r) {
  let o = 0;
  if (t !== 0 || r.length !== 0) {
    while (o < e.map.length) {
      if (e.map[o][0] === n) {
        e.map[o][1] += t;
        e.map[o][2].push(...r);
        return;
      }
      o += 1;
    }
    e.map.push([n, t, r]);
  }
}
function Fr(e, n) {
  let t = false;
  const r = [];
  while (n < e.length) {
    const o = e[n];
    if (t) {
      if (o[0] === "enter") {
        if (o[1].type === "tableContent") {
          r.push(e[n + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
        }
      } else if (o[1].type === "tableContent") {
        if (e[n - 1][1].type === "tableDelimiterMarker") {
          const l = r.length - 1;
          r[l] = r[l] === "left" ? "center" : "right";
        }
      } else if (o[1].type === "tableDelimiterRow") {
        break;
      }
    } else if (o[0] === "enter" && o[1].type === "tableDelimiterRow") {
      t = true;
    }
    n += 1;
  }
  return r;
}
function Dr() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Lr,
        resolveAll: Rr,
      },
    },
  };
}
function Lr(e, n, t) {
  const r = this;
  let o = 0;
  let l = 0;
  let i;
  return s;
  function s(p) {
    let _ = r.events.length - 1;
    while (_ > -1) {
      const ce = r.events[_][1].type;
      if (ce === "lineEnding" || ce === "linePrefix") {
        _--;
      } else {
        break;
      }
    }
    const se = _ > -1 ? r.events[_][1].type : null;
    const ue = se === "tableHead" || se === "tableRow" ? M : a;
    if (ue === M && r.parser.lazy[r.now().line]) {
      return t(p);
    } else {
      return ue(p);
    }
  }
  function a(p) {
    e.enter("tableHead");
    e.enter("tableRow");
    return u(p);
  }
  function u(p) {
    if (p !== 124) {
      i = true;
      l += 1;
    }
    return h(p);
  }
  function h(p) {
    if (p === null) {
      return t(p);
    } else if (D(p)) {
      if (l > 1) {
        l = 0;
        r.interrupt = true;
        e.exit("tableRow");
        e.enter("lineEnding");
        e.consume(p);
        e.exit("lineEnding");
        return k;
      } else {
        return t(p);
      }
    } else if (O(p)) {
      return F(e, h, "whitespace")(p);
    } else {
      l += 1;
      if (i) {
        i = false;
        o += 1;
      }
      if (p === 124) {
        e.enter("tableCellDivider");
        e.consume(p);
        e.exit("tableCellDivider");
        i = true;
        return h;
      } else {
        e.enter("data");
        return c(p);
      }
    }
  }
  function c(p) {
    if (p === null || p === 124 || S(p)) {
      e.exit("data");
      return h(p);
    } else {
      e.consume(p);
      if (p === 92) {
        return m;
      } else {
        return c;
      }
    }
  }
  function m(p) {
    if (p === 92 || p === 124) {
      e.consume(p);
      return c;
    } else {
      return c(p);
    }
  }
  function k(p) {
    r.interrupt = false;
    if (r.parser.lazy[r.now().line]) {
      return t(p);
    } else {
      e.enter("tableDelimiterRow");
      i = false;
      if (O(p)) {
        return F(
          e,
          f,
          "linePrefix",
          r.parser.constructs.disable.null.includes("codeIndented")
            ? undefined
            : 4,
        )(p);
      } else {
        return f(p);
      }
    }
  }
  function f(p) {
    if (p === 45 || p === 58) {
      return b(p);
    } else if (p === 124) {
      i = true;
      e.enter("tableCellDivider");
      e.consume(p);
      e.exit("tableCellDivider");
      return g;
    } else {
      return T(p);
    }
  }
  function g(p) {
    if (O(p)) {
      return F(e, b, "whitespace")(p);
    } else {
      return b(p);
    }
  }
  function b(p) {
    if (p === 58) {
      l += 1;
      i = true;
      e.enter("tableDelimiterMarker");
      e.consume(p);
      e.exit("tableDelimiterMarker");
      return x;
    } else if (p === 45) {
      l += 1;
      return x(p);
    } else if (p === null || D(p)) {
      return v(p);
    } else {
      return T(p);
    }
  }
  function x(p) {
    if (p === 45) {
      e.enter("tableDelimiterFiller");
      return d(p);
    } else {
      return T(p);
    }
  }
  function d(p) {
    if (p === 45) {
      e.consume(p);
      return d;
    } else if (p === 58) {
      i = true;
      e.exit("tableDelimiterFiller");
      e.enter("tableDelimiterMarker");
      e.consume(p);
      e.exit("tableDelimiterMarker");
      return w;
    } else {
      e.exit("tableDelimiterFiller");
      return w(p);
    }
  }
  function w(p) {
    if (O(p)) {
      return F(e, v, "whitespace")(p);
    } else {
      return v(p);
    }
  }
  function v(p) {
    if (p === 124) {
      return f(p);
    } else if (p === null || D(p)) {
      if (!i || o !== l) {
        return T(p);
      } else {
        e.exit("tableDelimiterRow");
        e.exit("tableHead");
        return n(p);
      }
    } else {
      return T(p);
    }
  }
  function T(p) {
    return t(p);
  }
  function M(p) {
    e.enter("tableRow");
    return R(p);
  }
  function R(p) {
    if (p === 124) {
      e.enter("tableCellDivider");
      e.consume(p);
      e.exit("tableCellDivider");
      return R;
    } else if (p === null || D(p)) {
      e.exit("tableRow");
      return n(p);
    } else if (O(p)) {
      return F(e, R, "whitespace")(p);
    } else {
      e.enter("data");
      return $(p);
    }
  }
  function $(p) {
    if (p === null || p === 124 || S(p)) {
      e.exit("data");
      return R(p);
    } else {
      e.consume(p);
      if (p === 92) {
        return A;
      } else {
        return $;
      }
    }
  }
  function A(p) {
    if (p === 92 || p === 124) {
      e.consume(p);
      return $;
    } else {
      return $(p);
    }
  }
}
function Rr(e, n) {
  let t = -1;
  let r = true;
  let o = 0;
  let l = [0, 0, 0, 0];
  let i = [0, 0, 0, 0];
  let s = false;
  let a = 0;
  let u;
  let h;
  let c;
  const m = new Er();
  while (++t < e.length) {
    const k = e[t];
    const f = k[1];
    if (k[0] === "enter") {
      if (f.type === "tableHead") {
        s = false;
        if (a !== 0) {
          we(m, n, a, u, h);
          h = undefined;
          a = 0;
        }
        u = {
          type: "table",
          start: Object.assign({}, f.start),
          end: Object.assign({}, f.end),
        };
        m.add(t, 0, [["enter", u, n]]);
      } else if (f.type === "tableRow" || f.type === "tableDelimiterRow") {
        r = true;
        c = undefined;
        l = [0, 0, 0, 0];
        i = [0, t + 1, 0, 0];
        if (s) {
          s = false;
          h = {
            type: "tableBody",
            start: Object.assign({}, f.start),
            end: Object.assign({}, f.end),
          };
          m.add(t, 0, [["enter", h, n]]);
        }
        o = f.type === "tableDelimiterRow" ? 2 : h ? 3 : 1;
      } else if (
        o &&
        (f.type === "data" ||
          f.type === "tableDelimiterMarker" ||
          f.type === "tableDelimiterFiller")
      ) {
        r = false;
        if (i[2] === 0) {
          if (l[1] !== 0) {
            i[0] = i[1];
            c = U(m, n, l, o, undefined, c);
            l = [0, 0, 0, 0];
          }
          i[2] = t;
        }
      } else if (f.type === "tableCellDivider") {
        if (r) {
          r = false;
        } else {
          if (l[1] !== 0) {
            i[0] = i[1];
            c = U(m, n, l, o, undefined, c);
          }
          l = i;
          i = [l[1], t, 0, 0];
        }
      }
    } else if (f.type === "tableHead") {
      s = true;
      a = t;
    } else if (f.type === "tableRow" || f.type === "tableDelimiterRow") {
      a = t;
      if (l[1] !== 0) {
        i[0] = i[1];
        c = U(m, n, l, o, t, c);
      } else if (i[1] !== 0) {
        c = U(m, n, i, o, t, c);
      }
      o = 0;
    } else if (
      o &&
      (f.type === "data" ||
        f.type === "tableDelimiterMarker" ||
        f.type === "tableDelimiterFiller")
    ) {
      i[3] = t;
    }
  }
  if (a !== 0) {
    we(m, n, a, u, h);
  }
  m.consume(n.events);
  t = -1;
  while (++t < n.events.length) {
    const k = n.events[t];
    if (k[0] === "enter" && k[1].type === "table") {
      k[1]._align = Fr(n.events, t);
    }
  }
  return e;
}
function U(e, n, t, r, o, l) {
  const i = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData";
  const s = "tableContent";
  if (t[0] !== 0) {
    l.end = Object.assign({}, j(n.events, t[0]));
    e.add(t[0], 0, [["exit", l, n]]);
  }
  const a = j(n.events, t[1]);
  l = {
    type: i,
    start: Object.assign({}, a),
    end: Object.assign({}, a),
  };
  e.add(t[1], 0, [["enter", l, n]]);
  if (t[2] !== 0) {
    const u = j(n.events, t[2]);
    const h = j(n.events, t[3]);
    const c = {
      type: s,
      start: Object.assign({}, u),
      end: Object.assign({}, h),
    };
    e.add(t[2], 0, [["enter", c, n]]);
    if (r !== 2) {
      const m = n.events[t[2]];
      const k = n.events[t[3]];
      m[1].end = Object.assign({}, k[1].end);
      m[1].type = "chunkText";
      m[1].contentType = "text";
      if (t[3] > t[2] + 1) {
        const f = t[2] + 1;
        const g = t[3] - t[2] - 1;
        e.add(f, g, []);
      }
    }
    e.add(t[3] + 1, 0, [["exit", c, n]]);
  }
  if (o !== undefined) {
    l.end = Object.assign({}, j(n.events, o));
    e.add(o, 0, [["exit", l, n]]);
    l = undefined;
  }
  return l;
}
function we(e, n, t, r, o) {
  const l = [];
  const i = j(n.events, t);
  if (o) {
    o.end = Object.assign({}, i);
    l.push(["exit", o, n]);
  }
  r.end = Object.assign({}, i);
  l.push(["exit", r, n]);
  e.add(t + 1, 0, l);
}
function j(e, n) {
  const t = e[n];
  const r = t[0] === "enter" ? "start" : "end";
  return t[1][r];
}
const zr = {
  name: "tasklistCheck",
  tokenize: Pr,
};
function Ir() {
  return {
    text: {
      91: zr,
    },
  };
}
function Pr(e, n, t) {
  const r = this;
  return o;
  function o(a) {
    if (r.previous !== null || !r._gfmTasklistFirstContentOfListItem) {
      return t(a);
    } else {
      e.enter("taskListCheck");
      e.enter("taskListCheckMarker");
      e.consume(a);
      e.exit("taskListCheckMarker");
      return l;
    }
  }
  function l(a) {
    if (S(a)) {
      e.enter("taskListCheckValueUnchecked");
      e.consume(a);
      e.exit("taskListCheckValueUnchecked");
      return i;
    } else if (a === 88 || a === 120) {
      e.enter("taskListCheckValueChecked");
      e.consume(a);
      e.exit("taskListCheckValueChecked");
      return i;
    } else {
      return t(a);
    }
  }
  function i(a) {
    if (a === 93) {
      e.enter("taskListCheckMarker");
      e.consume(a);
      e.exit("taskListCheckMarker");
      e.exit("taskListCheck");
      return s;
    } else {
      return t(a);
    }
  }
  function s(a) {
    if (D(a)) {
      return n(a);
    } else if (O(a)) {
      return e.check(
        {
          tokenize: $r,
        },
        n,
        t,
      )(a);
    } else {
      return t(a);
    }
  }
}
function $r(e, n, t) {
  return F(e, r, "whitespace");
  function r(o) {
    if (o === null) {
      return t(o);
    } else {
      return n(o);
    }
  }
}
function _r(e) {
  return Mt([sr(), xr(), Ar(e), Dr(), Ir()]);
}
const Nr = {};
function Or(e) {
  const n = this;
  const t = e || Nr;
  const r = n.data();
  const o = (r.micromarkExtensions ||= []);
  const l = (r.fromMarkdownExtensions ||= []);
  const i = (r.toMarkdownExtensions ||= []);
  o.push(_r(t));
  l.push(ir());
  i.push(or(t));
}
function jr() {
  return {
    enter: {
      mathFlow: e,
      mathFlowFenceMeta: n,
      mathText: l,
    },
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
      properties: {
        className: ["language-math", "math-display"],
      },
      children: [],
    };
    this.enter(
      {
        type: "math",
        meta: null,
        value: "",
        data: {
          hName: "pre",
          hChildren: [u],
        },
      },
      a,
    );
  }
  function n() {
    this.buffer();
  }
  function t() {
    const a = this.resume();
    const u = this.stack[this.stack.length - 1];
    L(u.type === "math");
    u.meta = a;
  }
  function r() {
    if (!this.data.mathFlowInside) {
      this.buffer();
      this.data.mathFlowInside = true;
    }
  }
  function o(a) {
    const u = this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
    const h = this.stack[this.stack.length - 1];
    L(h.type === "math");
    this.exit(a);
    h.value = u;
    const c = h.data.hChildren[0];
    L(c.type === "element");
    L(c.tagName === "code");
    c.children.push({
      type: "text",
      value: u,
    });
    this.data.mathFlowInside = undefined;
  }
  function l(a) {
    this.enter(
      {
        type: "inlineMath",
        value: "",
        data: {
          hName: "code",
          hProperties: {
            className: ["language-math", "math-inline"],
          },
          hChildren: [],
        },
      },
      a,
    );
    this.buffer();
  }
  function i(a) {
    const u = this.resume();
    const h = this.stack[this.stack.length - 1];
    L(h.type === "inlineMath");
    this.exit(a);
    h.value = u;
    h.data.hChildren.push({
      type: "text",
      value: u,
    });
  }
  function s(a) {
    this.config.enter.data.call(this, a);
    this.config.exit.data.call(this, a);
  }
}
function Br(e) {
  let n = (e || {}).singleDollarTextMath;
  if (n == null) {
    n = true;
  }
  r.peek = o;
  return {
    unsafe: [
      {
        character: "\r",
        inConstruct: "mathFlowMeta",
      },
      {
        character: `
`,
        inConstruct: "mathFlowMeta",
      },
      {
        character: "$",
        after: n ? undefined : "\\$",
        inConstruct: "phrasing",
      },
      {
        character: "$",
        inConstruct: "mathFlowMeta",
      },
      {
        atBreak: true,
        character: "$",
        after: "\\$",
      },
    ],
    handlers: {
      math: t,
      inlineMath: r,
    },
  };
  function t(l, i, s, a) {
    const u = l.value || "";
    const h = s.createTracker(a);
    const c = "$".repeat(Math.max(Pe(u, "$") + 1, 2));
    const m = s.enter("mathFlow");
    let k = h.move(c);
    if (l.meta) {
      const f = s.enter("mathFlowMeta");
      k += h.move(
        s.safe(l.meta, {
          after: `
`,
          before: k,
          encode: ["$"],
          ...h.current(),
        }),
      );
      f();
    }
    k += h.move(`
`);
    if (u) {
      k += h.move(`${u}
`);
    }
    k += h.move(c);
    m();
    return k;
  }
  function r(l, i, s) {
    let a = l.value || "";
    let u = 1;
    for (
      n || u++;
      new RegExp("(^|[^$])" + "\\$".repeat(u) + "([^$]|$)").test(a);
    ) {
      u++;
    }
    const h = "$".repeat(u);
    if (
      /[^ \r\n]/.test(a) &&
      ((/^[ \r\n]/.test(a) && /[ \r\n]$/.test(a)) || /^\$|\$$/.test(a))
    ) {
      a = " " + a + " ";
    }
    let c = -1;
    while (++c < s.unsafe.length) {
      const m = s.unsafe[c];
      if (!m.atBreak) {
        continue;
      }
      const k = s.compilePattern(m);
      let f;
      while ((f = k.exec(a))) {
        let g = f.index;
        if (a.codePointAt(g) === 10 && a.codePointAt(g - 1) === 13) {
          g--;
        }
        a = a.slice(0, g) + " " + a.slice(f.index + 1);
      }
    }
    return h + a + h;
  }
  function o() {
    return "$";
  }
}
const Wr = {
  tokenize: Hr,
  concrete: true,
  name: "mathFlow",
};
const ye = {
  tokenize: qr,
  partial: true,
};
function Hr(e, n, t) {
  const r = this;
  const o = r.events[r.events.length - 1];
  const l =
    o && o[1].type === "linePrefix"
      ? o[2].sliceSerialize(o[1], true).length
      : 0;
  let i = 0;
  return s;
  function s(d) {
    e.enter("mathFlow");
    e.enter("mathFlowFence");
    e.enter("mathFlowFenceSequence");
    return a(d);
  }
  function a(d) {
    if (d === 36) {
      e.consume(d);
      i++;
      return a;
    } else if (i < 2) {
      return t(d);
    } else {
      e.exit("mathFlowFenceSequence");
      return F(e, u, "whitespace")(d);
    }
  }
  function u(d) {
    if (d === null || D(d)) {
      return c(d);
    } else {
      e.enter("mathFlowFenceMeta");
      e.enter("chunkString", {
        contentType: "string",
      });
      return h(d);
    }
  }
  function h(d) {
    if (d === null || D(d)) {
      e.exit("chunkString");
      e.exit("mathFlowFenceMeta");
      return c(d);
    } else if (d === 36) {
      return t(d);
    } else {
      e.consume(d);
      return h;
    }
  }
  function c(d) {
    e.exit("mathFlowFence");
    if (r.interrupt) {
      return n(d);
    } else {
      return e.attempt(ye, m, b)(d);
    }
  }
  function m(d) {
    return e.attempt(
      {
        tokenize: x,
        partial: true,
      },
      b,
      k,
    )(d);
  }
  function k(d) {
    return (l ? F(e, f, "linePrefix", l + 1) : f)(d);
  }
  function f(d) {
    if (d === null) {
      return b(d);
    } else if (D(d)) {
      return e.attempt(ye, m, b)(d);
    } else {
      e.enter("mathFlowValue");
      return g(d);
    }
  }
  function g(d) {
    if (d === null || D(d)) {
      e.exit("mathFlowValue");
      return f(d);
    } else {
      e.consume(d);
      return g;
    }
  }
  function b(d) {
    e.exit("mathFlow");
    return n(d);
  }
  function x(d, w, v) {
    let T = 0;
    return F(
      d,
      M,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4,
    );
    function M(A) {
      d.enter("mathFlowFence");
      d.enter("mathFlowFenceSequence");
      return R(A);
    }
    function R(A) {
      if (A === 36) {
        T++;
        d.consume(A);
        return R;
      } else if (T < i) {
        return v(A);
      } else {
        d.exit("mathFlowFenceSequence");
        return F(d, $, "whitespace")(A);
      }
    }
    function $(A) {
      if (A === null || D(A)) {
        d.exit("mathFlowFence");
        return w(A);
      } else {
        return v(A);
      }
    }
  }
}
function qr(e, n, t) {
  const r = this;
  return o;
  function o(i) {
    if (i === null) {
      return n(i);
    } else {
      e.enter("lineEnding");
      e.consume(i);
      e.exit("lineEnding");
      return l;
    }
  }
  function l(i) {
    if (r.parser.lazy[r.now().line]) {
      return t(i);
    } else {
      return n(i);
    }
  }
}
function Ur(e) {
  let t = (e || {}).singleDollarTextMath;
  if (t == null) {
    t = true;
  }
  return {
    tokenize: r,
    resolve: Vr,
    previous: Xr,
    name: "mathText",
  };
  function r(o, l, i) {
    let s = 0;
    let a;
    let u;
    return h;
    function h(g) {
      o.enter("mathText");
      o.enter("mathTextSequence");
      return c(g);
    }
    function c(g) {
      if (g === 36) {
        o.consume(g);
        s++;
        return c;
      } else if (s < 2 && !t) {
        return i(g);
      } else {
        o.exit("mathTextSequence");
        return m(g);
      }
    }
    function m(g) {
      if (g === null) {
        return i(g);
      } else if (g === 36) {
        u = o.enter("mathTextSequence");
        a = 0;
        return f(g);
      } else if (g === 32) {
        o.enter("space");
        o.consume(g);
        o.exit("space");
        return m;
      } else if (D(g)) {
        o.enter("lineEnding");
        o.consume(g);
        o.exit("lineEnding");
        return m;
      } else {
        o.enter("mathTextData");
        return k(g);
      }
    }
    function k(g) {
      if (g === null || g === 32 || g === 36 || D(g)) {
        o.exit("mathTextData");
        return m(g);
      } else {
        o.consume(g);
        return k;
      }
    }
    function f(g) {
      if (g === 36) {
        o.consume(g);
        a++;
        return f;
      } else if (a === s) {
        o.exit("mathTextSequence");
        o.exit("mathText");
        return l(g);
      } else {
        u.type = "mathTextData";
        return k(g);
      }
    }
  }
}
function Vr(e) {
  let n = e.length - 4;
  let t = 3;
  let r;
  let o;
  if (
    (e[t][1].type === "lineEnding" || e[t][1].type === "space") &&
    (e[n][1].type === "lineEnding" || e[n][1].type === "space")
  ) {
    for (r = t; ++r < n;) {
      if (e[r][1].type === "mathTextData") {
        e[n][1].type = "mathTextPadding";
        e[t][1].type = "mathTextPadding";
        t += 2;
        n -= 2;
        break;
      }
    }
  }
  r = t - 1;
  n++;
  while (++r <= n) {
    if (o === undefined) {
      if (r !== n && e[r][1].type !== "lineEnding") {
        o = r;
      }
    } else if (r === n || e[r][1].type === "lineEnding") {
      e[o][1].type = "mathTextData";
      if (r !== o + 2) {
        e[o][1].end = e[r - 1][1].end;
        e.splice(o + 2, r - o - 2);
        n -= r - o - 2;
        r = o + 2;
      }
      o = undefined;
    }
  }
  return e;
}
function Xr(e) {
  return (
    e !== 36 ||
    this.events[this.events.length - 1][1].type === "characterEscape"
  );
}
function Gr(e) {
  return {
    flow: {
      36: Wr,
    },
    text: {
      36: Ur(e),
    },
  };
}
const Kr = {};
function Qr(e) {
  const n = this;
  const t = e || Kr;
  const r = n.data();
  const o = (r.micromarkExtensions ||= []);
  const l = (r.fromMarkdownExtensions ||= []);
  const i = (r.toMarkdownExtensions ||= []);
  o.push(Gr(t));
  l.push(jr());
  i.push(Br(t));
}
const Ce = /\\begin\{(itemize|enumerate)\}/g;
const Yr = /\\(begin|end)\{(itemize|enumerate)\}/g;
const Zr = /\\item(?:\s*\[[^\]\r\n]*\])?\s*/g;
const Jr = /\\\$(?=\s*\d)/g;
const ei = /\\{2,}(?=[A-Za-z|{}])/g;
const ti = /\\mathbbm\b/g;
const ni = (e, n) => {
  const t = e === "enumerate" ? "1." : "-";
  const r = [...n.matchAll(Zr)];
  if (r.length === 0) {
    return n.trim();
  } else {
    return r
      .map((o, l) => {
        var k;
        const s = (o.index ?? 0) + o[0].length;
        const a = ((k = r[l + 1]) == null ? undefined : k.index) ?? n.length;
        const u = n.slice(s, a).trim();
        if (!u) {
          return null;
        }
        const [h = "", ...c] = u.replace(
          /\r\n|\n|\r(?!\n)/g,
          `
`,
        ).split(`
`);
        const m = c.map((f) => (f.trim() ? `  ${f.trim()}` : "")).join(`
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
  }
};
const ri = (e, n, t) => {
  if (n === 0) {
    return t.length === 0;
  }
  const r = e.slice(0, n);
  return /(?:\r\n|\n|\r(?!\n))[ \t]*(?:\r\n|\n|\r(?!\n))[ \t]*$/.test(r);
};
const ii = (e, n) => {
  const t = new RegExp(Ce.source, Ce.flags);
  const r = [];
  let o = 0;
  for (const l of e.matchAll(t)) {
    if (l.index < o || !ri(e, l.index, n)) {
      continue;
    }
    const i = l[1];
    if (i !== "itemize" && i !== "enumerate") {
      throw new Error("Unexpected LaTeX list environment.");
    }
    const s = l.index + l[0].length;
    const a = Ae(e, i, s, Yr, {
      stopAtMarkdownBlock: true,
    });
    if (a) {
      r.push(e.slice(o, l.index));
      r.push(ni(i, e.slice(s, a.endTokenStart)));
      o = a.end;
      t.lastIndex = a.end;
    }
  }
  r.push(e.slice(o));
  return r.join("");
};
const oi = (e, n) => {
  const t = new RegExp(fe.source, fe.flags);
  const r = [];
  let o = 0;
  for (const l of e.matchAll(t)) {
    if (l.index < o) {
      continue;
    }
    const i = l[1];
    const s = l.index === 0 ? `${n}${i}` : i;
    const a = Ee(s);
    if (!a) {
      continue;
    }
    const u = l[2];
    const h = l.index + i.length;
    const c = l.index + l[0].length;
    const m = Ae(e, u, c, ht, {
      stopAtMarkdownBlock: true,
    });
    if (!m) {
      continue;
    }
    const k = tt(Se(e.slice(h, m.end).trim(), a), true);
    const f =
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
    r.push(`${i}$$
${g}
${a.continuationPrefix}$$${
      f
        ? `
${a.continuationPrefix}`
        : ""
    }`);
    o = m.end;
    t.lastIndex = m.end;
  }
  r.push(e.slice(o));
  return r.join("");
};
const tt = (e, n) => {
  const t = e.replace(ti, "\\mathbb").replace(Jr, "\\text{\\textdollar}");
  if (n) {
    return t;
  } else {
    return t.replace(ei, (r) => (r.length === 2 ? "\\" : r));
  }
};
const ai = (
  e,
  {
    atDisplayLineStart: n,
    displayIndentation: t,
    needsTrailingDisplayBreak: r,
  },
) => {
  if (!e.body.trim()) {
    return `${e.openingDelimiter}${e.body}${e.closingDelimiter}`;
  }
  const o = e.openingDelimiter === "$$" || e.openingDelimiter === "\\[";
  const l = o ? Ee(t) : null;
  const i = tt(l ? Se(e.body, l) : e.body, o);
  const s = (a) => {
    const u = (l == null ? undefined : l.continuationPrefix) ?? t;
    const h = i
      .trim()
      .split(/\r\n|\n|\r(?!\n)/)
      .map((m) => (!u || m.startsWith(u) ? m : `${u}${m}`)).join(`
`);
    const c = (l == null ? undefined : l.continuationPrefix) ?? "";
    return `${a === "\\[" ? "$$" : a}
${h}
${u}$$${
      r
        ? `
${c}`
        : ""
    }`;
  };
  if (e.openingDelimiter === "\\[") {
    if (l) {
      return s("\\[");
    } else {
      return `
$$
${i.trim().replace(
  /\r\n|\r(?!\n)/g,
  `
`,
)}
$$
`;
    }
  } else if (e.openingDelimiter === "\\(") {
    return `$${i}$`;
  } else if (e.openingDelimiter === "$$" && (n || l)) {
    return s("$$");
  } else {
    return `${e.openingDelimiter}${i}${e.closingDelimiter}`;
  }
};
const li = (e, { leadingLinePrefix: n }) => {
  const t = he(e);
  if (!t.valid) {
    return e;
  }
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
    const u = t.segments[a + 1];
    const h = (u == null ? undefined : u.kind) === "text" ? u.value : "";
    l(
      ai(s, {
        atDisplayLineStart: /^[ \t]*$/.test(o),
        displayIndentation: o,
        needsTrailingDisplayBreak: !!h && ct(h, 0) === 0,
      }),
    );
  });
  const i = r.join("");
  if (he(i).valid) {
    return i;
  } else {
    return e;
  }
};
const si = (e, n) => {
  const t = ve(e, (r) => ii(r, ""));
  if (n === "canonical") {
    return t;
  } else {
    return ut(t, li);
  }
};
const ui = (e) => {
  var t;
  const n = (t = e.properties) == null ? undefined : t.className;
  if (Array.isArray(n)) {
    return n.map(String);
  } else if (typeof n == "string") {
    return n.split(/\s+/);
  } else {
    return [];
  }
};
const ci = (e) => e.type === "element";
const hi = (e) => ui(e).includes("katex-display");
const fi = (e) =>
  `math-${e.replace(/[^A-Za-z0-9_-]+/g, "-").replace(/^-|-$/g, "")}`;
const mi = (e) => () => (n) => {
  let t = 1;
  const r = () => {
    const l = `${e}.${t}`;
    t += 1;
    return l;
  };
  const o = (l) => {
    for (let i = 0; i < l.length; i += 1) {
      const s = l[i];
      if (ci(s)) {
        if (hi(s)) {
          const a = r();
          l[i] = {
            type: "element",
            tagName: "span",
            properties: {
              className: ["markdown-numbered-math"],
              dataMathLabel: a,
              id: fi(a),
            },
            children: [
              {
                type: "element",
                tagName: "span",
                properties: {
                  className: ["markdown-math-label"],
                  ariaLabel: `Equation ${a}`,
                },
                children: [
                  {
                    type: "text",
                    value: a,
                  },
                ],
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
};
const nt = E.createContext(undefined);
const Wi = ({ children: e, macros: n }) => (
  <nt.Provider value={n}>{e}</nt.Provider>
);
const pi = () => E.useContext(nt);
const di = [
  "data:image/png;base64,",
  "data:image/jpeg;base64,",
  "data:image/svg+xml;base64,",
];
const gi = [
  "data:application/json;base64,",
  "data:application/pdf;base64,",
  "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,",
  "data:text/csv;base64,",
];
const le = (e) => di.some((n) => e.startsWith(n));
const rt = (e) => gi.some((n) => e.startsWith(n));
const Hi = (e) => le(e) || rt(e);
const ki = [Or, Qr];
const xi =
  /^[ \t>]*\[Equation ([0-9]+(?:\.[0-9]+)?)\]:[ \t]*#[ \t]*".*"[ \t]*$/gm;
const bi = {
  "\\diff": "\\mathop{}\\!d",
};
const wi = {
  allowedHighlightIds: new Set(),
  highlightsById: new Map(),
  latexTerms: [],
  textTerms: [],
};
const yi = (e) =>
  ve(e, (n) => n.replace(xi, ""), {
    protectLinkReferenceDefinitions: false,
  });
const Ci = (e) => {
  var t;
  const n = (t = e.properties) == null ? undefined : t.className;
  if (Array.isArray(n)) {
    return n.map(String);
  } else if (typeof n == "string") {
    return n.split(/\s+/);
  } else {
    return [];
  }
};
const it = (e) => e.type === "element";
const ot = (e) =>
  e.type === "text" ? e.value : it(e) ? e.children.map(ot).join("") : "";
const Ti = (e) => {
  const n =
    e == null
      ? undefined
      : e.children.find((r) => it(r) && r.tagName.toLowerCase() === "code");
  if (!n) {
    return null;
  }
  const t = Ci(n);
  if (t.includes("language-math") || t.includes("math-display")) {
    return null;
  } else {
    return n.children.map(ot).join("");
  }
};
const Mi = (e) => ({
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
  "& .MuiButton-startIcon": {
    marginRight: e.spacing(0.52),
  },
});
const vi = ({ node: e, children: n, ...t }) => {
  const r = Ti(e);
  if (r != null && r.trim()) {
    return (
      <I className="markdown-code-block">
        <I className="markdown-code-block-actions">
          <_Component
            content={r}
            label="Copy"
            message="Code copied"
            size="small"
            sx={Mi}
            tooltipLabel="Copy code"
            variant="outlined"
          />
        </I>
        <pre {...t}>{n}</pre>
      </I>
    );
  } else {
    return <pre {...t}>{n}</pre>;
  }
};
const Ai = ({ node: e, children: n, ...t }) => (
  <I className="markdown-table-scroll" tabIndex={0}>
    <table {...t}>{n}</table>
  </I>
);
const Ei = ({ node: e, src: n, alt: t, ...r }) => {
  if (!n || !le(n)) {
    return <img src={n} alt={t} {...r} />;
  }
  const o = (t == null ? undefined : t.trim()) || "Python artifact";
  const l = n.startsWith("data:image/jpeg;")
    ? "jpg"
    : n.startsWith("data:image/svg+xml;")
      ? "svg"
      : "png";
  const i =
    o
      .replace(/[/\\?%*:|"<>]/g, "-")
      .replace(/\s+/g, " ")
      .trim() || "python-artifact";
  const s = () => {
    const a = document.createElement("a");
    a.href = n;
    a.download = i.toLowerCase().endsWith(`.${l}`) ? i : `${i}.${l}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  return (
    <I component="span" className="markdown-artifact-image">
      <I component="img" src={n} alt={o} {...r} />
      <I component="span" className="markdown-artifact-image-actions">
        <_Component3
          tooltip="Download image"
          aria-label={`Download ${o}`}
          size="small"
          disableRipple={true}
          onClick={s}
        >
          <_Component2 size={17} />
        </_Component3>
      </I>
    </I>
  );
};
const te = {
  a: ({ node: e, ...n }) => (
    <_Component4 {...n} target="_blank" rel="noreferrer" />
  ),
  img: Ei,
  table: Ai,
};
const Si = {
  ...te,
  a: ({ node: e, children: n }) => <span>{n}</span>,
  img: ({ node: e, alt: n }) => <span>{n}</span>,
  p: ({ node: e, ...n }) => <span {...n} />,
};
const Fi = (e, n, t) =>
  (n === "src" && t.tagName === "img" && le(e)) ||
  (n === "href" && t.tagName === "a" && rt(e))
    ? e
    : At(e);
const Di = {
  maxWidth: "min(26rem, 72vw)",
  minWidth: 0,
};
const Li = (e) => ({
  display: "inline-block",
  marginBottom: e.spacing(1.1),
  color: e.palette.text.secondary,
  fontSize: "0.88rem",
  fontWeight: 800,
  lineHeight: 1.25,
  "& :where(p)": {
    margin: 0,
  },
  "& :where(.katex)": {
    fontSize: "1em",
  },
});
const Te = {
  fontSize: "1rem",
};
const Ri = (e) => ({
  marginTop: e.spacing(1.4),
  paddingTop: e.spacing(1.4),
  borderTop: `1px solid ${C(e.palette.text.primary, 0.12)}`,
  color: e.palette.text.secondary,
});
const Me = (e) => (n) => {
  const t = e === "user";
  const r = n.palette.primary.main;
  const o = C(n.palette.text.primary, 0.08);
  const l = t
    ? n.palette.getContrastText(n.palette.primary.dark)
    : n.palette.text.primary;
  const i = t
    ? C(n.palette.primary.dark, 0.38)
    : C(n.palette.text.primary, 0.04);
  const s = t ? C(n.palette.text.primary, 0.08) : C(r, 0.08);
  const a = C(r, t ? 0.18 : 0.22);
  const u = t ? C(n.palette.text.primary, 0.04) : C(r, 0.05);
  return {
    color: "inherit",
    fontSize: "0.98rem",
    maxWidth: "100%",
    minWidth: 0,
    overflowWrap: "anywhere",
    "& > :first-of-type": {
      marginTop: 0,
    },
    "& > :last-child": {
      marginBottom: 0,
    },
    "& :where(h1, h2, h3, h4, h5, h6)": {
      margin: "1.2rem 0 0.55rem",
      lineHeight: 1.3,
      letterSpacing: "-0.02em",
    },
    "& :where(h1)": {
      fontSize: "1.28rem",
    },
    "& :where(h2)": {
      fontSize: "1.14rem",
    },
    "& :where(h3, h4, h5, h6)": {
      fontSize: "1.02rem",
    },
    "& :where(p, ul, ol, blockquote, pre, .markdown-table-scroll, hr)": {
      margin: "0.95rem 0 0",
    },
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
    "& :where(ul, ol)": {
      paddingLeft: "1.35rem",
    },
    "& :where(li + li)": {
      marginTop: "0.3rem",
    },
    "& :where(li > p)": {
      marginTop: "0.4rem",
    },
    "& :where(a)": {
      color: r,
      textDecorationColor: C(r, 0.35),
      textUnderlineOffset: "0.18em",
    },
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
    "& :where(.markdown-table-scroll)": {
      maxWidth: "100%",
      overflowX: "auto",
    },
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
    "& :where(th)": {
      background: C(r, 0.06),
      fontWeight: 700,
    },
    "& :where(hr)": {
      border: 0,
      height: "1px",
      background: o,
    },
    "& :where(img)": {
      display: "block",
      maxWidth: "100%",
      borderRadius: n.shape.borderRadiusPx,
    },
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
    "& :where(pre > code.language-math)": {
      display: "block",
      minWidth: 0,
      whiteSpace: "normal",
    },
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
    "& :where(.katex .fbox)": {
      pointerEvents: "none",
    },
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
    "& :where(code)": {
      fontSize: "0.92em",
    },
  };
};
const zi = {
  display: "inline",
  fontSize: "inherit",
  overflowWrap: "inherit",
};
const Ii = ({
  content: e,
  tone: n = "assistant",
  sx: t,
  components: r,
  highlights: o = [],
  latexMacros: l,
  mathLabelPrefix: i,
  mathSyntax: s = "compatibility",
  mode: a = "default",
  inline: u = false,
  showCodeCopyButton: h = false,
}) => {
  const c = pi();
  const m = a === "compact";
  const k = E.useMemo(() => si(e, s), [e, s]);
  const f = E.useMemo(() => ft(e), [e]);
  const g = E.useMemo(() => mt(bi, c, l, f), [c, f, l]);
  const b = E.useMemo(
    () =>
      g
        ? {
            macros: g,
          }
        : {},
    [g],
  );
  const x = E.useMemo(() => [[pt, b]], [b]);
  const d = E.useMemo(() => (m ? wi : dt(o)), [m, o]);
  const w = E.useMemo(() => yi(k), [k]);
  const v = E.useMemo(
    () => (m ? w : gt(w, d.latexTerms)),
    [w, d.latexTerms, m],
  );
  const T = E.useMemo(() => kt(d, x, b), [x, d, b]);
  const M = E.useMemo(
    () => (m || i === undefined ? T : [...T, mi(i)]),
    [m, i, T],
  );
  const R = u ? [Me(n), zi] : [Me(n)];
  const $ = Array.isArray(t) ? [...R, ...t] : [...R, t];
  const A = E.useMemo(
    () =>
      u
        ? Si
        : h && !m
          ? {
              ...te,
              pre: vi,
            }
          : te,
    [u, m, h],
  );
  const p = E.useMemo(
    () =>
      m
        ? r
          ? {
              ...A,
              ...r,
            }
          : A
        : xt(A, r, d.highlightsById, (_) => (
            <Pi highlight={_} mathSyntax={s} />
          )),
    [A, r, d.highlightsById, m, s],
  );
  return (
    <I component={u ? "span" : "div"} sx={$}>
      <_Component5
        remarkPlugins={ki}
        rehypePlugins={M}
        components={p}
        urlTransform={Fi}
      >
        {v}
      </_Component5>
    </I>
  );
};
const J = E.memo(Ii);
const Pi = ({ highlight: e, mathSyntax: n }) => (
  <I sx={Di}>
    <J content={e.text} mathSyntax={n} mode="compact" sx={Li} />
    <J content={e.tooltip} mathSyntax={n} mode="compact" sx={Te} />
    {e.note ? (
      <I sx={Ri}>
        <J content={e.note} mathSyntax={n} mode="compact" sx={Te} />
      </I>
    ) : null}
  </I>
);
export { Wi as M, J as a, le as b, Hi as i };
