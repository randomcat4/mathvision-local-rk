import { aT as an, j as Ve } from "./index-BM3ZINIl.js";
import { s as at, h as qn, f as Un, b as $n, d as Qn, v as Yn } from "./index-Yb6ONXKu.js";
function Wl() {}
const Xn = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Wn = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Gn = {};
function Ct(e, t) {
  return (Gn.jsx ? Wn : Xn).test(e);
}
const Jn = /[ \t\n\f\r]/g;
function Kn(e) {
  return typeof e == "object" ? (e.type === "text" ? Tt(e.value) : !1) : Tt(e);
}
function Tt(e) {
  return e.replace(Jn, "") === "";
}
const Zn = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink",
};
var ge = {},
  He,
  At;
function er() {
  if (At) return He;
  At = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    t = /\n/g,
    n = /^\s*/,
    r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    i = /^:\s*/,
    u = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    l = /^[;\s]*/,
    a = /^\s+|\s+$/g,
    c = `
`,
    s = "/",
    o = "*",
    f = "",
    d = "comment",
    h = "declaration";
  function w(I, x) {
    if (typeof I != "string") throw new TypeError("First argument must be a string");
    if (!I) return [];
    x = x || {};
    var _ = 1,
      S = 1;
    function B(A) {
      var b = A.match(t);
      b && (_ += b.length);
      var O = A.lastIndexOf(c);
      S = ~O ? A.length - O : S + A.length;
    }
    function j() {
      var A = { line: _, column: S };
      return function (b) {
        return ((b.position = new y(A)), D(), b);
      };
    }
    function y(A) {
      ((this.start = A), (this.end = { line: _, column: S }), (this.source = x.source));
    }
    y.prototype.content = I;
    function F(A) {
      var b = new Error(x.source + ":" + _ + ":" + S + ": " + A);
      if (
        ((b.reason = A),
        (b.filename = x.source),
        (b.line = _),
        (b.column = S),
        (b.source = I),
        !x.silent)
      )
        throw b;
    }
    function v(A) {
      var b = A.exec(I);
      if (b) {
        var O = b[0];
        return (B(O), (I = I.slice(O.length)), b);
      }
    }
    function D() {
      v(n);
    }
    function R(A) {
      var b;
      for (A = A || []; (b = T());) b !== !1 && A.push(b);
      return A;
    }
    function T() {
      var A = j();
      if (!(s != I.charAt(0) || o != I.charAt(1))) {
        for (var b = 2; f != I.charAt(b) && (o != I.charAt(b) || s != I.charAt(b + 1));) ++b;
        if (((b += 2), f === I.charAt(b - 1))) return F("End of comment missing");
        var O = I.slice(2, b - 2);
        return ((S += 2), B(O), (I = I.slice(b)), (S += 2), A({ type: d, comment: O }));
      }
    }
    function C() {
      var A = j(),
        b = v(r);
      if (b) {
        if ((T(), !v(i))) return F("property missing ':'");
        var O = v(u),
          q = A({ type: h, property: E(b[0].replace(e, f)), value: O ? E(O[0].replace(e, f)) : f });
        return (v(l), q);
      }
    }
    function V() {
      var A = [];
      R(A);
      for (var b; (b = C());) b !== !1 && (A.push(b), R(A));
      return A;
    }
    return (D(), V());
  }
  function E(I) {
    return I ? I.replace(a, f) : f;
  }
  return ((He = w), He);
}
var zt;
function tr() {
  if (zt) return ge;
  zt = 1;
  var e =
    (ge && ge.__importDefault) ||
    function (r) {
      return r && r.__esModule ? r : { default: r };
    };
  (Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.default = n));
  const t = e(er());
  function n(r, i) {
    let u = null;
    if (!r || typeof r != "string") return u;
    const l = (0, t.default)(r),
      a = typeof i == "function";
    return (
      l.forEach((c) => {
        if (c.type !== "declaration") return;
        const { property: s, value: o } = c;
        a ? i(s, o, c) : o && ((u = u || {}), (u[s] = o));
      }),
      u
    );
  }
  return ge;
}
var Ee = {},
  _t;
function nr() {
  if (_t) return Ee;
  ((_t = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.camelCase = void 0));
  var e = /^--[a-zA-Z0-9_-]+$/,
    t = /-([a-z])/g,
    n = /^[^-]+$/,
    r = /^-(webkit|moz|ms|o|khtml)-/,
    i = /^-(ms)-/,
    u = function (s) {
      return !s || n.test(s) || e.test(s);
    },
    l = function (s, o) {
      return o.toUpperCase();
    },
    a = function (s, o) {
      return "".concat(o, "-");
    },
    c = function (s, o) {
      return (
        o === void 0 && (o = {}),
        u(s)
          ? s
          : ((s = s.toLowerCase()),
            o.reactCompat ? (s = s.replace(i, a)) : (s = s.replace(r, a)),
            s.replace(t, l))
      );
    };
  return ((Ee.camelCase = c), Ee);
}
var Ie, Pt;
function rr() {
  if (Pt) return Ie;
  Pt = 1;
  var e =
      (Ie && Ie.__importDefault) ||
      function (i) {
        return i && i.__esModule ? i : { default: i };
      },
    t = e(tr()),
    n = nr();
  function r(i, u) {
    var l = {};
    return (
      !i ||
        typeof i != "string" ||
        (0, t.default)(i, function (a, c) {
          a && c && (l[(0, n.camelCase)(a, u)] = c);
        }),
      l
    );
  }
  return ((r.default = r), (Ie = r), Ie);
}
var ir = rr();
const ur = an(ir),
  sn = on("end"),
  st = on("start");
function on(e) {
  return t;
  function t(n) {
    const r = (n && n.position && n.position[e]) || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0,
      };
  }
}
function lr(e) {
  const t = st(e),
    n = sn(e);
  if (t && n) return { start: t, end: n };
}
function Ae(e) {
  return !e || typeof e != "object"
    ? ""
    : "position" in e || "type" in e
      ? Nt(e.position)
      : "start" in e || "end" in e
        ? Nt(e)
        : "line" in e || "column" in e
          ? et(e)
          : "";
}
function et(e) {
  return Ft(e && e.line) + ":" + Ft(e && e.column);
}
function Nt(e) {
  return et(e && e.start) + "-" + et(e && e.end);
}
function Ft(e) {
  return e && typeof e == "number" ? e : 1;
}
class $ extends Error {
  constructor(t, n, r) {
    (super(), typeof n == "string" && ((r = n), (n = void 0)));
    let i = "",
      u = {},
      l = !1;
    if (
      (n &&
        ("line" in n && "column" in n
          ? (u = { place: n })
          : "start" in n && "end" in n
            ? (u = { place: n })
            : "type" in n
              ? (u = { ancestors: [n], place: n.position })
              : (u = { ...n })),
      typeof t == "string" ? (i = t) : !u.cause && t && ((l = !0), (i = t.message), (u.cause = t)),
      !u.ruleId && !u.source && typeof r == "string")
    ) {
      const c = r.indexOf(":");
      c === -1 ? (u.ruleId = r) : ((u.source = r.slice(0, c)), (u.ruleId = r.slice(c + 1)));
    }
    if (!u.place && u.ancestors && u.ancestors) {
      const c = u.ancestors[u.ancestors.length - 1];
      c && (u.place = c.position);
    }
    const a = u.place && "start" in u.place ? u.place.start : u.place;
    ((this.ancestors = u.ancestors || void 0),
      (this.cause = u.cause || void 0),
      (this.column = a ? a.column : void 0),
      (this.fatal = void 0),
      (this.file = ""),
      (this.message = i),
      (this.line = a ? a.line : void 0),
      (this.name = Ae(u.place) || "1:1"),
      (this.place = u.place || void 0),
      (this.reason = this.message),
      (this.ruleId = u.ruleId || void 0),
      (this.source = u.source || void 0),
      (this.stack = l && u.cause && typeof u.cause.stack == "string" ? u.cause.stack : ""),
      (this.actual = void 0),
      (this.expected = void 0),
      (this.note = void 0),
      (this.url = void 0));
  }
}
$.prototype.file = "";
$.prototype.name = "";
$.prototype.reason = "";
$.prototype.message = "";
$.prototype.stack = "";
$.prototype.column = void 0;
$.prototype.line = void 0;
$.prototype.ancestors = void 0;
$.prototype.cause = void 0;
$.prototype.fatal = void 0;
$.prototype.place = void 0;
$.prototype.ruleId = void 0;
$.prototype.source = void 0;
const ot = {}.hasOwnProperty,
  ar = new Map(),
  sr = /[A-Z]/g,
  or = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
  cr = new Set(["td", "th"]),
  cn = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function fr(e, t) {
  if (!t || t.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError("Expected `jsxDEV` in options when `development: true`");
    r = kr(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function") throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function") throw new TypeError("Expected `jsxs` in production options");
    r = xr(n, t.jsx, t.jsxs);
  }
  const i = {
      Fragment: t.Fragment,
      ancestors: [],
      components: t.components || {},
      create: r,
      elementAttributeNameCase: t.elementAttributeNameCase || "react",
      evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
      filePath: n,
      ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
      passKeys: t.passKeys !== !1,
      passNode: t.passNode || !1,
      schema: t.space === "svg" ? at : qn,
      stylePropertyNameCase: t.stylePropertyNameCase || "dom",
      tableCellAlignToStyle: t.tableCellAlignToStyle !== !1,
    },
    u = fn(i, e, void 0);
  return u && typeof u != "string" ? u : i.create(e, i.Fragment, { children: u || void 0 }, void 0);
}
function fn(e, t, n) {
  if (t.type === "element") return hr(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return pr(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return dr(e, t, n);
  if (t.type === "mdxjsEsm") return mr(e, t);
  if (t.type === "root") return gr(e, t, n);
  if (t.type === "text") return yr(e, t);
}
function hr(e, t, n) {
  const r = e.schema;
  let i = r;
  (t.tagName.toLowerCase() === "svg" && r.space === "html" && ((i = at), (e.schema = i)),
    e.ancestors.push(t));
  const u = pn(e, t.tagName, !1),
    l = wr(e, t);
  let a = ft(e, t);
  return (
    or.has(t.tagName) &&
      (a = a.filter(function (c) {
        return typeof c == "string" ? !Kn(c) : !0;
      })),
    hn(e, l, u, t),
    ct(l, a),
    e.ancestors.pop(),
    (e.schema = r),
    e.create(t, u, l, n)
  );
}
function pr(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return (r.type, e.evaluater.evaluateExpression(r.expression));
  }
  Pe(e, t.position);
}
function mr(e, t) {
  if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
  Pe(e, t.position);
}
function dr(e, t, n) {
  const r = e.schema;
  let i = r;
  (t.name === "svg" && r.space === "html" && ((i = at), (e.schema = i)), e.ancestors.push(t));
  const u = t.name === null ? e.Fragment : pn(e, t.name, !0),
    l = br(e, t),
    a = ft(e, t);
  return (hn(e, l, u, t), ct(l, a), e.ancestors.pop(), (e.schema = r), e.create(t, u, l, n));
}
function gr(e, t, n) {
  const r = {};
  return (ct(r, ft(e, t)), e.create(t, e.Fragment, r, n));
}
function yr(e, t) {
  return t.value;
}
function hn(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function ct(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function xr(e, t, n) {
  return r;
  function r(i, u, l, a) {
    const s = Array.isArray(l.children) ? n : t;
    return a ? s(u, l, a) : s(u, l);
  }
}
function kr(e, t) {
  return n;
  function n(r, i, u, l) {
    const a = Array.isArray(u.children),
      c = st(r);
    return t(
      i,
      u,
      l,
      a,
      { columnNumber: c ? c.column - 1 : void 0, fileName: e, lineNumber: c ? c.line : void 0 },
      void 0,
    );
  }
}
function wr(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && ot.call(t.properties, i)) {
      const u = Sr(e, i, t.properties[i]);
      if (u) {
        const [l, a] = u;
        e.tableCellAlignToStyle && l === "align" && typeof a == "string" && cr.has(t.tagName)
          ? (r = a)
          : (n[l] = a);
      }
    }
  if (r) {
    const u = n.style || (n.style = {});
    u[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function br(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const u = r.data.estree.body[0];
        u.type;
        const l = u.expression;
        l.type;
        const a = l.properties[0];
        (a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument)));
      } else Pe(e, t.position);
    else {
      const i = r.name;
      let u;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          (a.type, (u = e.evaluater.evaluateExpression(a.expression)));
        } else Pe(e, t.position);
      else u = r.value === null ? !0 : r.value;
      n[i] = u;
    }
  return n;
}
function ft(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? new Map() : ar;
  for (; ++r < t.children.length;) {
    const u = t.children[r];
    let l;
    if (e.passKeys) {
      const c =
        u.type === "element"
          ? u.tagName
          : u.type === "mdxJsxFlowElement" || u.type === "mdxJsxTextElement"
            ? u.name
            : void 0;
      if (c) {
        const s = i.get(c) || 0;
        ((l = c + "-" + s), i.set(c, s + 1));
      }
    }
    const a = fn(e, u, l);
    a !== void 0 && n.push(a);
  }
  return n;
}
function Sr(e, t, n) {
  const r = Un(e.schema, t);
  if (!(n == null || (typeof n == "number" && Number.isNaN(n)))) {
    if ((Array.isArray(n) && (n = r.commaSeparated ? $n(n) : Qn(n)), r.property === "style")) {
      let i = typeof n == "object" ? n : Er(e, String(n));
      return (e.stylePropertyNameCase === "css" && (i = Ir(i)), ["style", i]);
    }
    return [
      e.elementAttributeNameCase === "react" && r.space
        ? Zn[r.property] || r.property
        : r.attribute,
      n,
    ];
  }
}
function Er(e, t) {
  try {
    return ur(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle) return {};
    const r = n,
      i = new $("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: r,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime",
      });
    throw ((i.file = e.filePath || void 0), (i.url = cn + "#cannot-parse-style-attribute"), i);
  }
}
function pn(e, t, n) {
  let r;
  if (!n) r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let u = -1,
      l;
    for (; ++u < i.length;) {
      const a = Ct(i[u]) ? { type: "Identifier", name: i[u] } : { type: "Literal", value: i[u] };
      l = l
        ? {
            type: "MemberExpression",
            object: l,
            property: a,
            computed: !!(u && a.type === "Literal"),
            optional: !1,
          }
        : a;
    }
    r = l;
  } else
    r =
      Ct(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = r.value;
    return ot.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater) return e.evaluater.evaluateExpression(r);
  Pe(e);
}
function Pe(e, t) {
  const n = new $("Cannot handle MDX estrees without `createEvaluater`", {
    ancestors: e.ancestors,
    place: t,
    ruleId: "mdx-estree",
    source: "hast-util-to-jsx-runtime",
  });
  throw (
    (n.file = e.filePath || void 0),
    (n.url = cn + "#cannot-handle-mdx-estrees-without-createevaluater"),
    n
  );
}
function Ir(e) {
  const t = {};
  let n;
  for (n in e) ot.call(e, n) && (t[Cr(n)] = e[n]);
  return t;
}
function Cr(e) {
  let t = e.replace(sr, Tr);
  return (t.slice(0, 3) === "ms-" && (t = "-" + t), t);
}
function Tr(e) {
  return "-" + e.toLowerCase();
}
const qe = {
    action: ["form"],
    cite: ["blockquote", "del", "ins", "q"],
    data: ["object"],
    formAction: ["button", "input"],
    href: ["a", "area", "base", "link"],
    icon: ["menuitem"],
    itemId: null,
    manifest: ["html"],
    ping: ["a", "area"],
    poster: ["video"],
    src: ["audio", "embed", "iframe", "img", "input", "script", "source", "track", "video"],
  },
  Ar = {};
function zr(e, t) {
  const n = Ar,
    r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0,
    i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return mn(e, r, i);
}
function mn(e, t, n) {
  if (_r(e)) {
    if ("value" in e) return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt) return e.alt;
    if ("children" in e) return Lt(e.children, t, n);
  }
  return Array.isArray(e) ? Lt(e, t, n) : "";
}
function Lt(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length;) r[i] = mn(e[i], t, n);
  return r.join("");
}
function _r(e) {
  return !!(e && typeof e == "object");
}
const Dt = document.createElement("i");
function ht(e) {
  const t = "&" + e + ";";
  Dt.innerHTML = t;
  const n = Dt.textContent;
  return (n.charCodeAt(n.length - 1) === 59 && e !== "semi") || n === t ? !1 : n;
}
function re(e, t, n, r) {
  const i = e.length;
  let u = 0,
    l;
  if ((t < 0 ? (t = -t > i ? 0 : i + t) : (t = t > i ? i : t), (n = n > 0 ? n : 0), r.length < 1e4))
    ((l = Array.from(r)), l.unshift(t, n), e.splice(...l));
  else
    for (n && e.splice(t, n); u < r.length;)
      ((l = r.slice(u, u + 1e4)), l.unshift(t, 0), e.splice(...l), (u += 1e4), (t += 1e4));
}
function G(e, t) {
  return e.length > 0 ? (re(e, e.length, 0, t), e) : t;
}
const Rt = {}.hasOwnProperty;
function Pr(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length;) Nr(t, e[n]);
  return t;
}
function Nr(e, t) {
  let n;
  for (n in t) {
    const i = (Rt.call(e, n) ? e[n] : void 0) || (e[n] = {}),
      u = t[n];
    let l;
    if (u)
      for (l in u) {
        Rt.call(i, l) || (i[l] = []);
        const a = u[l];
        Fr(i[l], Array.isArray(a) ? a : a ? [a] : []);
      }
  }
}
function Fr(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
  re(e, 0, 0, r);
}
function dn(e, t) {
  const n = Number.parseInt(e, t);
  return n < 9 ||
    n === 11 ||
    (n > 13 && n < 32) ||
    (n > 126 && n < 160) ||
    (n > 55295 && n < 57344) ||
    (n > 64975 && n < 65008) ||
    (n & 65535) === 65535 ||
    (n & 65535) === 65534 ||
    n > 1114111
    ? "�"
    : String.fromCodePoint(n);
}
function xe(e) {
  return e
    .replace(/[\t\n\r ]+/g, " ")
    .replace(/^ | $/g, "")
    .toLowerCase()
    .toUpperCase();
}
const ne = ce(/[A-Za-z]/),
  W = ce(/[\dA-Za-z]/),
  Lr = ce(/[#-'*+\--9=?A-Z^-~]/);
function tt(e) {
  return e !== null && (e < 32 || e === 127);
}
const nt = ce(/\d/),
  Dr = ce(/[\dA-Fa-f]/),
  Rr = ce(/[!-/:-@[-`{-~]/);
function z(e) {
  return e !== null && e < -2;
}
function Y(e) {
  return e !== null && (e < 0 || e === 32);
}
function L(e) {
  return e === -2 || e === -1 || e === 32;
}
const Or = ce(new RegExp("\\p{P}|\\p{S}", "u")),
  Br = ce(/\s/);
function ce(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function ke(e) {
  const t = [];
  let n = -1,
    r = 0,
    i = 0;
  for (; ++n < e.length;) {
    const u = e.charCodeAt(n);
    let l = "";
    if (u === 37 && W(e.charCodeAt(n + 1)) && W(e.charCodeAt(n + 2))) i = 2;
    else if (u < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(u)) || (l = String.fromCharCode(u));
    else if (u > 55295 && u < 57344) {
      const a = e.charCodeAt(n + 1);
      u < 56320 && a > 56319 && a < 57344 ? ((l = String.fromCharCode(u, a)), (i = 1)) : (l = "�");
    } else l = String.fromCharCode(u);
    (l && (t.push(e.slice(r, n), encodeURIComponent(l)), (r = n + i + 1), (l = "")),
      i && ((n += i), (i = 0)));
  }
  return t.join("") + e.slice(r);
}
function H(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let u = 0;
  return l;
  function l(c) {
    return L(c) ? (e.enter(n), a(c)) : t(c);
  }
  function a(c) {
    return L(c) && u++ < i ? (e.consume(c), a) : (e.exit(n), t(c));
  }
}
const Mr = { tokenize: jr };
function jr(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), H(e, t, "linePrefix"));
  }
  function i(a) {
    return (e.enter("paragraph"), u(a));
  }
  function u(a) {
    const c = e.enter("chunkText", { contentType: "text", previous: n });
    return (n && (n.next = c), (n = c), l(a));
  }
  function l(a) {
    if (a === null) {
      (e.exit("chunkText"), e.exit("paragraph"), e.consume(a));
      return;
    }
    return z(a) ? (e.consume(a), e.exit("chunkText"), u) : (e.consume(a), l);
  }
}
const vr = { tokenize: Vr },
  Ot = { tokenize: Hr };
function Vr(e) {
  const t = this,
    n = [];
  let r = 0,
    i,
    u,
    l;
  return a;
  function a(S) {
    if (r < n.length) {
      const B = n[r];
      return ((t.containerState = B[1]), e.attempt(B[0].continuation, c, s)(S));
    }
    return s(S);
  }
  function c(S) {
    if ((r++, t.containerState._closeFlow)) {
      ((t.containerState._closeFlow = void 0), i && _());
      const B = t.events.length;
      let j = B,
        y;
      for (; j--;)
        if (t.events[j][0] === "exit" && t.events[j][1].type === "chunkFlow") {
          y = t.events[j][1].end;
          break;
        }
      x(r);
      let F = B;
      for (; F < t.events.length;) ((t.events[F][1].end = { ...y }), F++);
      return (re(t.events, j + 1, 0, t.events.slice(B)), (t.events.length = F), s(S));
    }
    return a(S);
  }
  function s(S) {
    if (r === n.length) {
      if (!i) return d(S);
      if (i.currentConstruct && i.currentConstruct.concrete) return w(S);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return ((t.containerState = {}), e.check(Ot, o, f)(S));
  }
  function o(S) {
    return (i && _(), x(r), d(S));
  }
  function f(S) {
    return ((t.parser.lazy[t.now().line] = r !== n.length), (l = t.now().offset), w(S));
  }
  function d(S) {
    return ((t.containerState = {}), e.attempt(Ot, h, w)(S));
  }
  function h(S) {
    return (r++, n.push([t.currentConstruct, t.containerState]), d(S));
  }
  function w(S) {
    if (S === null) {
      (i && _(), x(0), e.consume(S));
      return;
    }
    return (
      (i = i || t.parser.flow(t.now())),
      e.enter("chunkFlow", { _tokenizer: i, contentType: "flow", previous: u }),
      E(S)
    );
  }
  function E(S) {
    if (S === null) {
      (I(e.exit("chunkFlow"), !0), x(0), e.consume(S));
      return;
    }
    return z(S)
      ? (e.consume(S), I(e.exit("chunkFlow")), (r = 0), (t.interrupt = void 0), a)
      : (e.consume(S), E);
  }
  function I(S, B) {
    const j = t.sliceStream(S);
    if (
      (B && j.push(null),
      (S.previous = u),
      u && (u.next = S),
      (u = S),
      i.defineSkip(S.start),
      i.write(j),
      t.parser.lazy[S.start.line])
    ) {
      let y = i.events.length;
      for (; y--;)
        if (
          i.events[y][1].start.offset < l &&
          (!i.events[y][1].end || i.events[y][1].end.offset > l)
        )
          return;
      const F = t.events.length;
      let v = F,
        D,
        R;
      for (; v--;)
        if (t.events[v][0] === "exit" && t.events[v][1].type === "chunkFlow") {
          if (D) {
            R = t.events[v][1].end;
            break;
          }
          D = !0;
        }
      for (x(r), y = F; y < t.events.length;) ((t.events[y][1].end = { ...R }), y++);
      (re(t.events, v + 1, 0, t.events.slice(F)), (t.events.length = y));
    }
  }
  function x(S) {
    let B = n.length;
    for (; B-- > S;) {
      const j = n[B];
      ((t.containerState = j[1]), j[0].exit.call(t, e));
    }
    n.length = S;
  }
  function _() {
    (i.write([null]), (u = void 0), (i = void 0), (t.containerState._closeFlow = void 0));
  }
}
function Hr(e, t, n) {
  return H(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4,
  );
}
function Bt(e) {
  if (e === null || Y(e) || Br(e)) return 1;
  if (Or(e)) return 2;
}
function pt(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length;) {
    const u = e[i].resolveAll;
    u && !r.includes(u) && ((t = u(t, n)), r.push(u));
  }
  return t;
}
const rt = { name: "attention", resolveAll: qr, tokenize: Ur };
function qr(e, t) {
  let n = -1,
    r,
    i,
    u,
    l,
    a,
    c,
    s,
    o;
  for (; ++n < e.length;)
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--;)
        if (
          e[r][0] === "exit" &&
          e[r][1].type === "attentionSequence" &&
          e[r][1]._open &&
          t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)
        ) {
          if (
            (e[r][1]._close || e[n][1]._open) &&
            (e[n][1].end.offset - e[n][1].start.offset) % 3 &&
            !(
              (e[r][1].end.offset -
                e[r][1].start.offset +
                e[n][1].end.offset -
                e[n][1].start.offset) %
              3
            )
          )
            continue;
          c =
            e[r][1].end.offset - e[r][1].start.offset > 1 &&
            e[n][1].end.offset - e[n][1].start.offset > 1
              ? 2
              : 1;
          const f = { ...e[r][1].end },
            d = { ...e[n][1].start };
          (Mt(f, -c),
            Mt(d, c),
            (l = {
              type: c > 1 ? "strongSequence" : "emphasisSequence",
              start: f,
              end: { ...e[r][1].end },
            }),
            (a = {
              type: c > 1 ? "strongSequence" : "emphasisSequence",
              start: { ...e[n][1].start },
              end: d,
            }),
            (u = {
              type: c > 1 ? "strongText" : "emphasisText",
              start: { ...e[r][1].end },
              end: { ...e[n][1].start },
            }),
            (i = { type: c > 1 ? "strong" : "emphasis", start: { ...l.start }, end: { ...a.end } }),
            (e[r][1].end = { ...l.start }),
            (e[n][1].start = { ...a.end }),
            (s = []),
            e[r][1].end.offset - e[r][1].start.offset &&
              (s = G(s, [
                ["enter", e[r][1], t],
                ["exit", e[r][1], t],
              ])),
            (s = G(s, [
              ["enter", i, t],
              ["enter", l, t],
              ["exit", l, t],
              ["enter", u, t],
            ])),
            (s = G(s, pt(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t))),
            (s = G(s, [
              ["exit", u, t],
              ["enter", a, t],
              ["exit", a, t],
              ["exit", i, t],
            ])),
            e[n][1].end.offset - e[n][1].start.offset
              ? ((o = 2),
                (s = G(s, [
                  ["enter", e[n][1], t],
                  ["exit", e[n][1], t],
                ])))
              : (o = 0),
            re(e, r - 1, n - r + 3, s),
            (n = r + s.length - o - 2));
          break;
        }
    }
  for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function Ur(e, t) {
  const n = this.parser.constructs.attentionMarkers.null,
    r = this.previous,
    i = Bt(r);
  let u;
  return l;
  function l(c) {
    return ((u = c), e.enter("attentionSequence"), a(c));
  }
  function a(c) {
    if (c === u) return (e.consume(c), a);
    const s = e.exit("attentionSequence"),
      o = Bt(c),
      f = !o || (o === 2 && i) || n.includes(c),
      d = !i || (i === 2 && o) || n.includes(r);
    return (
      (s._open = !!(u === 42 ? f : f && (i || !d))),
      (s._close = !!(u === 42 ? d : d && (o || !f))),
      t(c)
    );
  }
}
function Mt(e, t) {
  ((e.column += t), (e.offset += t), (e._bufferIndex += t));
}
const $r = { name: "autolink", tokenize: Qr };
function Qr(e, t, n) {
  let r = 0;
  return i;
  function i(h) {
    return (
      e.enter("autolink"),
      e.enter("autolinkMarker"),
      e.consume(h),
      e.exit("autolinkMarker"),
      e.enter("autolinkProtocol"),
      u
    );
  }
  function u(h) {
    return ne(h) ? (e.consume(h), l) : h === 64 ? n(h) : s(h);
  }
  function l(h) {
    return h === 43 || h === 45 || h === 46 || W(h) ? ((r = 1), a(h)) : s(h);
  }
  function a(h) {
    return h === 58
      ? (e.consume(h), (r = 0), c)
      : (h === 43 || h === 45 || h === 46 || W(h)) && r++ < 32
        ? (e.consume(h), a)
        : ((r = 0), s(h));
  }
  function c(h) {
    return h === 62
      ? (e.exit("autolinkProtocol"),
        e.enter("autolinkMarker"),
        e.consume(h),
        e.exit("autolinkMarker"),
        e.exit("autolink"),
        t)
      : h === null || h === 32 || h === 60 || tt(h)
        ? n(h)
        : (e.consume(h), c);
  }
  function s(h) {
    return h === 64 ? (e.consume(h), o) : Lr(h) ? (e.consume(h), s) : n(h);
  }
  function o(h) {
    return W(h) ? f(h) : n(h);
  }
  function f(h) {
    return h === 46
      ? (e.consume(h), (r = 0), o)
      : h === 62
        ? ((e.exit("autolinkProtocol").type = "autolinkEmail"),
          e.enter("autolinkMarker"),
          e.consume(h),
          e.exit("autolinkMarker"),
          e.exit("autolink"),
          t)
        : d(h);
  }
  function d(h) {
    if ((h === 45 || W(h)) && r++ < 63) {
      const w = h === 45 ? d : f;
      return (e.consume(h), w);
    }
    return n(h);
  }
}
const je = { partial: !0, tokenize: Yr };
function Yr(e, t, n) {
  return r;
  function r(u) {
    return L(u) ? H(e, i, "linePrefix")(u) : i(u);
  }
  function i(u) {
    return u === null || z(u) ? t(u) : n(u);
  }
}
const gn = { continuation: { tokenize: Wr }, exit: Gr, name: "blockQuote", tokenize: Xr };
function Xr(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    if (l === 62) {
      const a = r.containerState;
      return (
        a.open || (e.enter("blockQuote", { _container: !0 }), (a.open = !0)),
        e.enter("blockQuotePrefix"),
        e.enter("blockQuoteMarker"),
        e.consume(l),
        e.exit("blockQuoteMarker"),
        u
      );
    }
    return n(l);
  }
  function u(l) {
    return L(l)
      ? (e.enter("blockQuotePrefixWhitespace"),
        e.consume(l),
        e.exit("blockQuotePrefixWhitespace"),
        e.exit("blockQuotePrefix"),
        t)
      : (e.exit("blockQuotePrefix"), t(l));
  }
}
function Wr(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return L(l)
      ? H(
          e,
          u,
          "linePrefix",
          r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4,
        )(l)
      : u(l);
  }
  function u(l) {
    return e.attempt(gn, t, n)(l);
  }
}
function Gr(e) {
  e.exit("blockQuote");
}
const yn = { name: "characterEscape", tokenize: Jr };
function Jr(e, t, n) {
  return r;
  function r(u) {
    return (
      e.enter("characterEscape"),
      e.enter("escapeMarker"),
      e.consume(u),
      e.exit("escapeMarker"),
      i
    );
  }
  function i(u) {
    return Rr(u)
      ? (e.enter("characterEscapeValue"),
        e.consume(u),
        e.exit("characterEscapeValue"),
        e.exit("characterEscape"),
        t)
      : n(u);
  }
}
const xn = { name: "characterReference", tokenize: Kr };
function Kr(e, t, n) {
  const r = this;
  let i = 0,
    u,
    l;
  return a;
  function a(f) {
    return (
      e.enter("characterReference"),
      e.enter("characterReferenceMarker"),
      e.consume(f),
      e.exit("characterReferenceMarker"),
      c
    );
  }
  function c(f) {
    return f === 35
      ? (e.enter("characterReferenceMarkerNumeric"),
        e.consume(f),
        e.exit("characterReferenceMarkerNumeric"),
        s)
      : (e.enter("characterReferenceValue"), (u = 31), (l = W), o(f));
  }
  function s(f) {
    return f === 88 || f === 120
      ? (e.enter("characterReferenceMarkerHexadecimal"),
        e.consume(f),
        e.exit("characterReferenceMarkerHexadecimal"),
        e.enter("characterReferenceValue"),
        (u = 6),
        (l = Dr),
        o)
      : (e.enter("characterReferenceValue"), (u = 7), (l = nt), o(f));
  }
  function o(f) {
    if (f === 59 && i) {
      const d = e.exit("characterReferenceValue");
      return l === W && !ht(r.sliceSerialize(d))
        ? n(f)
        : (e.enter("characterReferenceMarker"),
          e.consume(f),
          e.exit("characterReferenceMarker"),
          e.exit("characterReference"),
          t);
    }
    return l(f) && i++ < u ? (e.consume(f), o) : n(f);
  }
}
const jt = { partial: !0, tokenize: ei },
  vt = { concrete: !0, name: "codeFenced", tokenize: Zr };
function Zr(e, t, n) {
  const r = this,
    i = { partial: !0, tokenize: j };
  let u = 0,
    l = 0,
    a;
  return c;
  function c(y) {
    return s(y);
  }
  function s(y) {
    const F = r.events[r.events.length - 1];
    return (
      (u = F && F[1].type === "linePrefix" ? F[2].sliceSerialize(F[1], !0).length : 0),
      (a = y),
      e.enter("codeFenced"),
      e.enter("codeFencedFence"),
      e.enter("codeFencedFenceSequence"),
      o(y)
    );
  }
  function o(y) {
    return y === a
      ? (l++, e.consume(y), o)
      : l < 3
        ? n(y)
        : (e.exit("codeFencedFenceSequence"), L(y) ? H(e, f, "whitespace")(y) : f(y));
  }
  function f(y) {
    return y === null || z(y)
      ? (e.exit("codeFencedFence"), r.interrupt ? t(y) : e.check(jt, E, B)(y))
      : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), d(y));
  }
  function d(y) {
    return y === null || z(y)
      ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(y))
      : L(y)
        ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), H(e, h, "whitespace")(y))
        : y === 96 && y === a
          ? n(y)
          : (e.consume(y), d);
  }
  function h(y) {
    return y === null || z(y)
      ? f(y)
      : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), w(y));
  }
  function w(y) {
    return y === null || z(y)
      ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(y))
      : y === 96 && y === a
        ? n(y)
        : (e.consume(y), w);
  }
  function E(y) {
    return e.attempt(i, B, I)(y);
  }
  function I(y) {
    return (e.enter("lineEnding"), e.consume(y), e.exit("lineEnding"), x);
  }
  function x(y) {
    return u > 0 && L(y) ? H(e, _, "linePrefix", u + 1)(y) : _(y);
  }
  function _(y) {
    return y === null || z(y) ? e.check(jt, E, B)(y) : (e.enter("codeFlowValue"), S(y));
  }
  function S(y) {
    return y === null || z(y) ? (e.exit("codeFlowValue"), _(y)) : (e.consume(y), S);
  }
  function B(y) {
    return (e.exit("codeFenced"), t(y));
  }
  function j(y, F, v) {
    let D = 0;
    return R;
    function R(b) {
      return (y.enter("lineEnding"), y.consume(b), y.exit("lineEnding"), T);
    }
    function T(b) {
      return (
        y.enter("codeFencedFence"),
        L(b)
          ? H(
              y,
              C,
              "linePrefix",
              r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4,
            )(b)
          : C(b)
      );
    }
    function C(b) {
      return b === a ? (y.enter("codeFencedFenceSequence"), V(b)) : v(b);
    }
    function V(b) {
      return b === a
        ? (D++, y.consume(b), V)
        : D >= l
          ? (y.exit("codeFencedFenceSequence"), L(b) ? H(y, A, "whitespace")(b) : A(b))
          : v(b);
    }
    function A(b) {
      return b === null || z(b) ? (y.exit("codeFencedFence"), F(b)) : v(b);
    }
  }
}
function ei(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return l === null ? n(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), u);
  }
  function u(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
const Ue = { name: "codeIndented", tokenize: ni },
  ti = { partial: !0, tokenize: ri };
function ni(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return (e.enter("codeIndented"), H(e, u, "linePrefix", 5)(s));
  }
  function u(s) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "linePrefix" && o[2].sliceSerialize(o[1], !0).length >= 4
      ? l(s)
      : n(s);
  }
  function l(s) {
    return s === null ? c(s) : z(s) ? e.attempt(ti, l, c)(s) : (e.enter("codeFlowValue"), a(s));
  }
  function a(s) {
    return s === null || z(s) ? (e.exit("codeFlowValue"), l(s)) : (e.consume(s), a);
  }
  function c(s) {
    return (e.exit("codeIndented"), t(s));
  }
}
function ri(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return r.parser.lazy[r.now().line]
      ? n(l)
      : z(l)
        ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i)
        : H(e, u, "linePrefix", 5)(l);
  }
  function u(l) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4
      ? t(l)
      : z(l)
        ? i(l)
        : n(l);
  }
}
const ii = { name: "codeText", previous: li, resolve: ui, tokenize: ai };
function ui(e) {
  let t = e.length - 4,
    n = 3,
    r,
    i;
  if (
    (e[n][1].type === "lineEnding" || e[n][1].type === "space") &&
    (e[t][1].type === "lineEnding" || e[t][1].type === "space")
  ) {
    for (r = n; ++r < t;)
      if (e[r][1].type === "codeTextData") {
        ((e[n][1].type = "codeTextPadding"),
          (e[t][1].type = "codeTextPadding"),
          (n += 2),
          (t -= 2));
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t;)
    i === void 0
      ? r !== t && e[r][1].type !== "lineEnding" && (i = r)
      : (r === t || e[r][1].type === "lineEnding") &&
        ((e[i][1].type = "codeTextData"),
        r !== i + 2 &&
          ((e[i][1].end = e[r - 1][1].end),
          e.splice(i + 2, r - i - 2),
          (t -= r - i - 2),
          (r = i + 2)),
        (i = void 0));
  return e;
}
function li(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function ai(e, t, n) {
  let r = 0,
    i,
    u;
  return l;
  function l(f) {
    return (e.enter("codeText"), e.enter("codeTextSequence"), a(f));
  }
  function a(f) {
    return f === 96 ? (e.consume(f), r++, a) : (e.exit("codeTextSequence"), c(f));
  }
  function c(f) {
    return f === null
      ? n(f)
      : f === 32
        ? (e.enter("space"), e.consume(f), e.exit("space"), c)
        : f === 96
          ? ((u = e.enter("codeTextSequence")), (i = 0), o(f))
          : z(f)
            ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), c)
            : (e.enter("codeTextData"), s(f));
  }
  function s(f) {
    return f === null || f === 32 || f === 96 || z(f)
      ? (e.exit("codeTextData"), c(f))
      : (e.consume(f), s);
  }
  function o(f) {
    return f === 96
      ? (e.consume(f), i++, o)
      : i === r
        ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f))
        : ((u.type = "codeTextData"), s(f));
  }
}
class si {
  constructor(t) {
    ((this.left = t ? [...t] : []), (this.right = []));
  }
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError(
        "Cannot access index `" +
          t +
          "` in a splice buffer of size `" +
          (this.left.length + this.right.length) +
          "`",
      );
    return t < this.left.length
      ? this.left[t]
      : this.right[this.right.length - t + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return (this.setCursor(0), this.right.pop());
  }
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length
      ? this.left.slice(t, r)
      : t > this.left.length
        ? this.right
            .slice(
              this.right.length - r + this.left.length,
              this.right.length - t + this.left.length,
            )
            .reverse()
        : this.left
            .slice(t)
            .concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const u = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return (r && Ce(this.left, r), u.reverse());
  }
  pop() {
    return (this.setCursor(Number.POSITIVE_INFINITY), this.left.pop());
  }
  push(t) {
    (this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t));
  }
  pushMany(t) {
    (this.setCursor(Number.POSITIVE_INFINITY), Ce(this.left, t));
  }
  unshift(t) {
    (this.setCursor(0), this.right.push(t));
  }
  unshiftMany(t) {
    (this.setCursor(0), Ce(this.right, t.reverse()));
  }
  setCursor(t) {
    if (!(
      t === this.left.length ||
      (t > this.left.length && this.right.length === 0) ||
      (t < 0 && this.left.length === 0)
    ))
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        Ce(this.right, n.reverse());
      } else {
        const n = this.right.splice(
          this.left.length + this.right.length - t,
          Number.POSITIVE_INFINITY,
        );
        Ce(this.left, n.reverse());
      }
  }
}
function Ce(e, t) {
  let n = 0;
  if (t.length < 1e4) e.push(...t);
  else for (; n < t.length;) (e.push(...t.slice(n, n + 1e4)), (n += 1e4));
}
function kn(e) {
  const t = {};
  let n = -1,
    r,
    i,
    u,
    l,
    a,
    c,
    s;
  const o = new si(e);
  for (; ++n < o.length;) {
    for (; n in t;) n = t[n];
    if (
      ((r = o.get(n)),
      n &&
        r[1].type === "chunkFlow" &&
        o.get(n - 1)[1].type === "listItemPrefix" &&
        ((c = r[1]._tokenizer.events),
        (u = 0),
        u < c.length && c[u][1].type === "lineEndingBlank" && (u += 2),
        u < c.length && c[u][1].type === "content"))
    )
      for (; ++u < c.length && c[u][1].type !== "content";)
        c[u][1].type === "chunkText" && ((c[u][1]._isInFirstContentOfListItem = !0), u++);
    if (r[0] === "enter") r[1].contentType && (Object.assign(t, oi(o, n)), (n = t[n]), (s = !0));
    else if (r[1]._container) {
      for (u = n, i = void 0; u--;)
        if (((l = o.get(u)), l[1].type === "lineEnding" || l[1].type === "lineEndingBlank"))
          l[0] === "enter" &&
            (i && (o.get(i)[1].type = "lineEndingBlank"), (l[1].type = "lineEnding"), (i = u));
        else if (!(l[1].type === "linePrefix" || l[1].type === "listItemIndent")) break;
      i &&
        ((r[1].end = { ...o.get(i)[1].start }),
        (a = o.slice(i, n)),
        a.unshift(r),
        o.splice(i, n - i + 1, a));
    }
  }
  return (re(e, 0, Number.POSITIVE_INFINITY, o.slice(0)), !s);
}
function oi(e, t) {
  const n = e.get(t)[1],
    r = e.get(t)[2];
  let i = t - 1;
  const u = [];
  let l = n._tokenizer;
  l ||
    ((l = r.parser[n.contentType](n.start)),
    n._contentTypeTextTrailing && (l._contentTypeTextTrailing = !0));
  const a = l.events,
    c = [],
    s = {};
  let o,
    f,
    d = -1,
    h = n,
    w = 0,
    E = 0;
  const I = [E];
  for (; h;) {
    for (; e.get(++i)[1] !== h;);
    (u.push(i),
      h._tokenizer ||
        ((o = r.sliceStream(h)),
        h.next || o.push(null),
        f && l.defineSkip(h.start),
        h._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0),
        l.write(o),
        h._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)),
      (f = h),
      (h = h.next));
  }
  for (h = n; ++d < a.length;)
    a[d][0] === "exit" &&
      a[d - 1][0] === "enter" &&
      a[d][1].type === a[d - 1][1].type &&
      a[d][1].start.line !== a[d][1].end.line &&
      ((E = d + 1), I.push(E), (h._tokenizer = void 0), (h.previous = void 0), (h = h.next));
  for (
    l.events = [], h ? ((h._tokenizer = void 0), (h.previous = void 0)) : I.pop(), d = I.length;
    d--;
  ) {
    const x = a.slice(I[d], I[d + 1]),
      _ = u.pop();
    (c.push([_, _ + x.length - 1]), e.splice(_, 2, x));
  }
  for (c.reverse(), d = -1; ++d < c.length;)
    ((s[w + c[d][0]] = w + c[d][1]), (w += c[d][1] - c[d][0] - 1));
  return s;
}
const ci = { resolve: hi, tokenize: pi },
  fi = { partial: !0, tokenize: mi };
function hi(e) {
  return (kn(e), e);
}
function pi(e, t) {
  let n;
  return r;
  function r(a) {
    return (e.enter("content"), (n = e.enter("chunkContent", { contentType: "content" })), i(a));
  }
  function i(a) {
    return a === null ? u(a) : z(a) ? e.check(fi, l, u)(a) : (e.consume(a), i);
  }
  function u(a) {
    return (e.exit("chunkContent"), e.exit("content"), t(a));
  }
  function l(a) {
    return (
      e.consume(a),
      e.exit("chunkContent"),
      (n.next = e.enter("chunkContent", { contentType: "content", previous: n })),
      (n = n.next),
      i
    );
  }
}
function mi(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return (
      e.exit("chunkContent"),
      e.enter("lineEnding"),
      e.consume(l),
      e.exit("lineEnding"),
      H(e, u, "linePrefix")
    );
  }
  function u(l) {
    if (l === null || z(l)) return n(l);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") &&
      a &&
      a[1].type === "linePrefix" &&
      a[2].sliceSerialize(a[1], !0).length >= 4
      ? t(l)
      : e.interrupt(r.parser.constructs.flow, n, t)(l);
  }
}
function wn(e, t, n, r, i, u, l, a, c) {
  const s = c || Number.POSITIVE_INFINITY;
  let o = 0;
  return f;
  function f(x) {
    return x === 60
      ? (e.enter(r), e.enter(i), e.enter(u), e.consume(x), e.exit(u), d)
      : x === null || x === 32 || x === 41 || tt(x)
        ? n(x)
        : (e.enter(r),
          e.enter(l),
          e.enter(a),
          e.enter("chunkString", { contentType: "string" }),
          E(x));
  }
  function d(x) {
    return x === 62
      ? (e.enter(u), e.consume(x), e.exit(u), e.exit(i), e.exit(r), t)
      : (e.enter(a), e.enter("chunkString", { contentType: "string" }), h(x));
  }
  function h(x) {
    return x === 62
      ? (e.exit("chunkString"), e.exit(a), d(x))
      : x === null || x === 60 || z(x)
        ? n(x)
        : (e.consume(x), x === 92 ? w : h);
  }
  function w(x) {
    return x === 60 || x === 62 || x === 92 ? (e.consume(x), h) : h(x);
  }
  function E(x) {
    return !o && (x === null || x === 41 || Y(x))
      ? (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(x))
      : o < s && x === 40
        ? (e.consume(x), o++, E)
        : x === 41
          ? (e.consume(x), o--, E)
          : x === null || x === 32 || x === 40 || tt(x)
            ? n(x)
            : (e.consume(x), x === 92 ? I : E);
  }
  function I(x) {
    return x === 40 || x === 41 || x === 92 ? (e.consume(x), E) : E(x);
  }
}
function bn(e, t, n, r, i, u) {
  const l = this;
  let a = 0,
    c;
  return s;
  function s(h) {
    return (e.enter(r), e.enter(i), e.consume(h), e.exit(i), e.enter(u), o);
  }
  function o(h) {
    return a > 999 ||
      h === null ||
      h === 91 ||
      (h === 93 && !c) ||
      (h === 94 && !a && "_hiddenFootnoteSupport" in l.parser.constructs)
      ? n(h)
      : h === 93
        ? (e.exit(u), e.enter(i), e.consume(h), e.exit(i), e.exit(r), t)
        : z(h)
          ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), o)
          : (e.enter("chunkString", { contentType: "string" }), f(h));
  }
  function f(h) {
    return h === null || h === 91 || h === 93 || z(h) || a++ > 999
      ? (e.exit("chunkString"), o(h))
      : (e.consume(h), c || (c = !L(h)), h === 92 ? d : f);
  }
  function d(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), a++, f) : f(h);
  }
}
function Sn(e, t, n, r, i, u) {
  let l;
  return a;
  function a(d) {
    return d === 34 || d === 39 || d === 40
      ? (e.enter(r), e.enter(i), e.consume(d), e.exit(i), (l = d === 40 ? 41 : d), c)
      : n(d);
  }
  function c(d) {
    return d === l ? (e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : (e.enter(u), s(d));
  }
  function s(d) {
    return d === l
      ? (e.exit(u), c(l))
      : d === null
        ? n(d)
        : z(d)
          ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), H(e, s, "linePrefix"))
          : (e.enter("chunkString", { contentType: "string" }), o(d));
  }
  function o(d) {
    return d === l || d === null || z(d)
      ? (e.exit("chunkString"), s(d))
      : (e.consume(d), d === 92 ? f : o);
  }
  function f(d) {
    return d === l || d === 92 ? (e.consume(d), o) : o(d);
  }
}
function ze(e, t) {
  let n;
  return r;
  function r(i) {
    return z(i)
      ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), (n = !0), r)
      : L(i)
        ? H(e, r, n ? "linePrefix" : "lineSuffix")(i)
        : t(i);
  }
}
const di = { name: "definition", tokenize: yi },
  gi = { partial: !0, tokenize: xi };
function yi(e, t, n) {
  const r = this;
  let i;
  return u;
  function u(h) {
    return (e.enter("definition"), l(h));
  }
  function l(h) {
    return bn.call(
      r,
      e,
      a,
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString",
    )(h);
  }
  function a(h) {
    return (
      (i = xe(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))),
      h === 58 ? (e.enter("definitionMarker"), e.consume(h), e.exit("definitionMarker"), c) : n(h)
    );
  }
  function c(h) {
    return Y(h) ? ze(e, s)(h) : s(h);
  }
  function s(h) {
    return wn(
      e,
      o,
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString",
    )(h);
  }
  function o(h) {
    return e.attempt(gi, f, f)(h);
  }
  function f(h) {
    return L(h) ? H(e, d, "whitespace")(h) : d(h);
  }
  function d(h) {
    return h === null || z(h) ? (e.exit("definition"), r.parser.defined.push(i), t(h)) : n(h);
  }
}
function xi(e, t, n) {
  return r;
  function r(a) {
    return Y(a) ? ze(e, i)(a) : n(a);
  }
  function i(a) {
    return Sn(e, u, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function u(a) {
    return L(a) ? H(e, l, "whitespace")(a) : l(a);
  }
  function l(a) {
    return a === null || z(a) ? t(a) : n(a);
  }
}
const ki = { name: "hardBreakEscape", tokenize: wi };
function wi(e, t, n) {
  return r;
  function r(u) {
    return (e.enter("hardBreakEscape"), e.consume(u), i);
  }
  function i(u) {
    return z(u) ? (e.exit("hardBreakEscape"), t(u)) : n(u);
  }
}
const bi = { name: "headingAtx", resolve: Si, tokenize: Ei };
function Si(e, t) {
  let n = e.length - 2,
    r = 3,
    i,
    u;
  return (
    e[r][1].type === "whitespace" && (r += 2),
    n - 2 > r && e[n][1].type === "whitespace" && (n -= 2),
    e[n][1].type === "atxHeadingSequence" &&
      (r === n - 1 || (n - 4 > r && e[n - 2][1].type === "whitespace")) &&
      (n -= r + 1 === n ? 2 : 4),
    n > r &&
      ((i = { type: "atxHeadingText", start: e[r][1].start, end: e[n][1].end }),
      (u = { type: "chunkText", start: e[r][1].start, end: e[n][1].end, contentType: "text" }),
      re(e, r, n - r + 1, [
        ["enter", i, t],
        ["enter", u, t],
        ["exit", u, t],
        ["exit", i, t],
      ])),
    e
  );
}
function Ei(e, t, n) {
  let r = 0;
  return i;
  function i(o) {
    return (e.enter("atxHeading"), u(o));
  }
  function u(o) {
    return (e.enter("atxHeadingSequence"), l(o));
  }
  function l(o) {
    return o === 35 && r++ < 6
      ? (e.consume(o), l)
      : o === null || Y(o)
        ? (e.exit("atxHeadingSequence"), a(o))
        : n(o);
  }
  function a(o) {
    return o === 35
      ? (e.enter("atxHeadingSequence"), c(o))
      : o === null || z(o)
        ? (e.exit("atxHeading"), t(o))
        : L(o)
          ? H(e, a, "whitespace")(o)
          : (e.enter("atxHeadingText"), s(o));
  }
  function c(o) {
    return o === 35 ? (e.consume(o), c) : (e.exit("atxHeadingSequence"), a(o));
  }
  function s(o) {
    return o === null || o === 35 || Y(o) ? (e.exit("atxHeadingText"), a(o)) : (e.consume(o), s);
  }
}
const Ii = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul",
  ],
  Vt = ["pre", "script", "style", "textarea"],
  Ci = { concrete: !0, name: "htmlFlow", resolveTo: zi, tokenize: _i },
  Ti = { partial: !0, tokenize: Ni },
  Ai = { partial: !0, tokenize: Pi };
function zi(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
  return (
    t > 1 &&
      e[t - 2][1].type === "linePrefix" &&
      ((e[t][1].start = e[t - 2][1].start),
      (e[t + 1][1].start = e[t - 2][1].start),
      e.splice(t - 2, 2)),
    e
  );
}
function _i(e, t, n) {
  const r = this;
  let i, u, l, a, c;
  return s;
  function s(m) {
    return o(m);
  }
  function o(m) {
    return (e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(m), f);
  }
  function f(m) {
    return m === 33
      ? (e.consume(m), d)
      : m === 47
        ? (e.consume(m), (u = !0), E)
        : m === 63
          ? (e.consume(m), (i = 3), r.interrupt ? t : p)
          : ne(m)
            ? (e.consume(m), (l = String.fromCharCode(m)), I)
            : n(m);
  }
  function d(m) {
    return m === 45
      ? (e.consume(m), (i = 2), h)
      : m === 91
        ? (e.consume(m), (i = 5), (a = 0), w)
        : ne(m)
          ? (e.consume(m), (i = 4), r.interrupt ? t : p)
          : n(m);
  }
  function h(m) {
    return m === 45 ? (e.consume(m), r.interrupt ? t : p) : n(m);
  }
  function w(m) {
    const Z = "CDATA[";
    return m === Z.charCodeAt(a++)
      ? (e.consume(m), a === Z.length ? (r.interrupt ? t : C) : w)
      : n(m);
  }
  function E(m) {
    return ne(m) ? (e.consume(m), (l = String.fromCharCode(m)), I) : n(m);
  }
  function I(m) {
    if (m === null || m === 47 || m === 62 || Y(m)) {
      const Z = m === 47,
        fe = l.toLowerCase();
      return !Z && !u && Vt.includes(fe)
        ? ((i = 1), r.interrupt ? t(m) : C(m))
        : Ii.includes(l.toLowerCase())
          ? ((i = 6), Z ? (e.consume(m), x) : r.interrupt ? t(m) : C(m))
          : ((i = 7), r.interrupt && !r.parser.lazy[r.now().line] ? n(m) : u ? _(m) : S(m));
    }
    return m === 45 || W(m) ? (e.consume(m), (l += String.fromCharCode(m)), I) : n(m);
  }
  function x(m) {
    return m === 62 ? (e.consume(m), r.interrupt ? t : C) : n(m);
  }
  function _(m) {
    return L(m) ? (e.consume(m), _) : R(m);
  }
  function S(m) {
    return m === 47
      ? (e.consume(m), R)
      : m === 58 || m === 95 || ne(m)
        ? (e.consume(m), B)
        : L(m)
          ? (e.consume(m), S)
          : R(m);
  }
  function B(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || W(m) ? (e.consume(m), B) : j(m);
  }
  function j(m) {
    return m === 61 ? (e.consume(m), y) : L(m) ? (e.consume(m), j) : S(m);
  }
  function y(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96
      ? n(m)
      : m === 34 || m === 39
        ? (e.consume(m), (c = m), F)
        : L(m)
          ? (e.consume(m), y)
          : v(m);
  }
  function F(m) {
    return m === c ? (e.consume(m), (c = null), D) : m === null || z(m) ? n(m) : (e.consume(m), F);
  }
  function v(m) {
    return m === null ||
      m === 34 ||
      m === 39 ||
      m === 47 ||
      m === 60 ||
      m === 61 ||
      m === 62 ||
      m === 96 ||
      Y(m)
      ? j(m)
      : (e.consume(m), v);
  }
  function D(m) {
    return m === 47 || m === 62 || L(m) ? S(m) : n(m);
  }
  function R(m) {
    return m === 62 ? (e.consume(m), T) : n(m);
  }
  function T(m) {
    return m === null || z(m) ? C(m) : L(m) ? (e.consume(m), T) : n(m);
  }
  function C(m) {
    return m === 45 && i === 2
      ? (e.consume(m), O)
      : m === 60 && i === 1
        ? (e.consume(m), q)
        : m === 62 && i === 4
          ? (e.consume(m), K)
          : m === 63 && i === 3
            ? (e.consume(m), p)
            : m === 93 && i === 5
              ? (e.consume(m), ie)
              : z(m) && (i === 6 || i === 7)
                ? (e.exit("htmlFlowData"), e.check(Ti, ue, V)(m))
                : m === null || z(m)
                  ? (e.exit("htmlFlowData"), V(m))
                  : (e.consume(m), C);
  }
  function V(m) {
    return e.check(Ai, A, ue)(m);
  }
  function A(m) {
    return (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), b);
  }
  function b(m) {
    return m === null || z(m) ? V(m) : (e.enter("htmlFlowData"), C(m));
  }
  function O(m) {
    return m === 45 ? (e.consume(m), p) : C(m);
  }
  function q(m) {
    return m === 47 ? (e.consume(m), (l = ""), J) : C(m);
  }
  function J(m) {
    if (m === 62) {
      const Z = l.toLowerCase();
      return Vt.includes(Z) ? (e.consume(m), K) : C(m);
    }
    return ne(m) && l.length < 8 ? (e.consume(m), (l += String.fromCharCode(m)), J) : C(m);
  }
  function ie(m) {
    return m === 93 ? (e.consume(m), p) : C(m);
  }
  function p(m) {
    return m === 62 ? (e.consume(m), K) : m === 45 && i === 2 ? (e.consume(m), p) : C(m);
  }
  function K(m) {
    return m === null || z(m) ? (e.exit("htmlFlowData"), ue(m)) : (e.consume(m), K);
  }
  function ue(m) {
    return (e.exit("htmlFlow"), t(m));
  }
}
function Pi(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return z(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), u) : n(l);
  }
  function u(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
function Ni(e, t, n) {
  return r;
  function r(i) {
    return (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(je, t, n));
  }
}
const Fi = { name: "htmlText", tokenize: Li };
function Li(e, t, n) {
  const r = this;
  let i, u, l;
  return a;
  function a(p) {
    return (e.enter("htmlText"), e.enter("htmlTextData"), e.consume(p), c);
  }
  function c(p) {
    return p === 33
      ? (e.consume(p), s)
      : p === 47
        ? (e.consume(p), j)
        : p === 63
          ? (e.consume(p), S)
          : ne(p)
            ? (e.consume(p), v)
            : n(p);
  }
  function s(p) {
    return p === 45
      ? (e.consume(p), o)
      : p === 91
        ? (e.consume(p), (u = 0), w)
        : ne(p)
          ? (e.consume(p), _)
          : n(p);
  }
  function o(p) {
    return p === 45 ? (e.consume(p), h) : n(p);
  }
  function f(p) {
    return p === null
      ? n(p)
      : p === 45
        ? (e.consume(p), d)
        : z(p)
          ? ((l = f), q(p))
          : (e.consume(p), f);
  }
  function d(p) {
    return p === 45 ? (e.consume(p), h) : f(p);
  }
  function h(p) {
    return p === 62 ? O(p) : p === 45 ? d(p) : f(p);
  }
  function w(p) {
    const K = "CDATA[";
    return p === K.charCodeAt(u++) ? (e.consume(p), u === K.length ? E : w) : n(p);
  }
  function E(p) {
    return p === null
      ? n(p)
      : p === 93
        ? (e.consume(p), I)
        : z(p)
          ? ((l = E), q(p))
          : (e.consume(p), E);
  }
  function I(p) {
    return p === 93 ? (e.consume(p), x) : E(p);
  }
  function x(p) {
    return p === 62 ? O(p) : p === 93 ? (e.consume(p), x) : E(p);
  }
  function _(p) {
    return p === null || p === 62 ? O(p) : z(p) ? ((l = _), q(p)) : (e.consume(p), _);
  }
  function S(p) {
    return p === null
      ? n(p)
      : p === 63
        ? (e.consume(p), B)
        : z(p)
          ? ((l = S), q(p))
          : (e.consume(p), S);
  }
  function B(p) {
    return p === 62 ? O(p) : S(p);
  }
  function j(p) {
    return ne(p) ? (e.consume(p), y) : n(p);
  }
  function y(p) {
    return p === 45 || W(p) ? (e.consume(p), y) : F(p);
  }
  function F(p) {
    return z(p) ? ((l = F), q(p)) : L(p) ? (e.consume(p), F) : O(p);
  }
  function v(p) {
    return p === 45 || W(p) ? (e.consume(p), v) : p === 47 || p === 62 || Y(p) ? D(p) : n(p);
  }
  function D(p) {
    return p === 47
      ? (e.consume(p), O)
      : p === 58 || p === 95 || ne(p)
        ? (e.consume(p), R)
        : z(p)
          ? ((l = D), q(p))
          : L(p)
            ? (e.consume(p), D)
            : O(p);
  }
  function R(p) {
    return p === 45 || p === 46 || p === 58 || p === 95 || W(p) ? (e.consume(p), R) : T(p);
  }
  function T(p) {
    return p === 61 ? (e.consume(p), C) : z(p) ? ((l = T), q(p)) : L(p) ? (e.consume(p), T) : D(p);
  }
  function C(p) {
    return p === null || p === 60 || p === 61 || p === 62 || p === 96
      ? n(p)
      : p === 34 || p === 39
        ? (e.consume(p), (i = p), V)
        : z(p)
          ? ((l = C), q(p))
          : L(p)
            ? (e.consume(p), C)
            : (e.consume(p), A);
  }
  function V(p) {
    return p === i
      ? (e.consume(p), (i = void 0), b)
      : p === null
        ? n(p)
        : z(p)
          ? ((l = V), q(p))
          : (e.consume(p), V);
  }
  function A(p) {
    return p === null || p === 34 || p === 39 || p === 60 || p === 61 || p === 96
      ? n(p)
      : p === 47 || p === 62 || Y(p)
        ? D(p)
        : (e.consume(p), A);
  }
  function b(p) {
    return p === 47 || p === 62 || Y(p) ? D(p) : n(p);
  }
  function O(p) {
    return p === 62 ? (e.consume(p), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(p);
  }
  function q(p) {
    return (e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), J);
  }
  function J(p) {
    return L(p)
      ? H(
          e,
          ie,
          "linePrefix",
          r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4,
        )(p)
      : ie(p);
  }
  function ie(p) {
    return (e.enter("htmlTextData"), l(p));
  }
}
const mt = { name: "labelEnd", resolveAll: Bi, resolveTo: Mi, tokenize: ji },
  Di = { tokenize: vi },
  Ri = { tokenize: Vi },
  Oi = { tokenize: Hi };
function Bi(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length;) {
    const r = e[t][1];
    if (
      (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd")
    ) {
      const i = r.type === "labelImage" ? 4 : 2;
      ((r.type = "data"), (t += i));
    }
  }
  return (e.length !== n.length && re(e, 0, e.length, n), e);
}
function Mi(e, t) {
  let n = e.length,
    r = 0,
    i,
    u,
    l,
    a;
  for (; n--;)
    if (((i = e[n][1]), u)) {
      if (i.type === "link" || (i.type === "labelLink" && i._inactive)) break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (l) {
      if (
        e[n][0] === "enter" &&
        (i.type === "labelImage" || i.type === "labelLink") &&
        !i._balanced &&
        ((u = n), i.type !== "labelLink")
      ) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (l = n);
  const c = {
      type: e[u][1].type === "labelLink" ? "link" : "image",
      start: { ...e[u][1].start },
      end: { ...e[e.length - 1][1].end },
    },
    s = { type: "label", start: { ...e[u][1].start }, end: { ...e[l][1].end } },
    o = { type: "labelText", start: { ...e[u + r + 2][1].end }, end: { ...e[l - 2][1].start } };
  return (
    (a = [
      ["enter", c, t],
      ["enter", s, t],
    ]),
    (a = G(a, e.slice(u + 1, u + r + 3))),
    (a = G(a, [["enter", o, t]])),
    (a = G(a, pt(t.parser.constructs.insideSpan.null, e.slice(u + r + 4, l - 3), t))),
    (a = G(a, [["exit", o, t], e[l - 2], e[l - 1], ["exit", s, t]])),
    (a = G(a, e.slice(l + 1))),
    (a = G(a, [["exit", c, t]])),
    re(e, u, e.length, a),
    e
  );
}
function ji(e, t, n) {
  const r = this;
  let i = r.events.length,
    u,
    l;
  for (; i--;)
    if (
      (r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") &&
      !r.events[i][1]._balanced
    ) {
      u = r.events[i][1];
      break;
    }
  return a;
  function a(d) {
    return u
      ? u._inactive
        ? f(d)
        : ((l = r.parser.defined.includes(xe(r.sliceSerialize({ start: u.end, end: r.now() })))),
          e.enter("labelEnd"),
          e.enter("labelMarker"),
          e.consume(d),
          e.exit("labelMarker"),
          e.exit("labelEnd"),
          c)
      : n(d);
  }
  function c(d) {
    return d === 40
      ? e.attempt(Di, o, l ? o : f)(d)
      : d === 91
        ? e.attempt(Ri, o, l ? s : f)(d)
        : l
          ? o(d)
          : f(d);
  }
  function s(d) {
    return e.attempt(Oi, o, f)(d);
  }
  function o(d) {
    return t(d);
  }
  function f(d) {
    return ((u._balanced = !0), n(d));
  }
}
function vi(e, t, n) {
  return r;
  function r(f) {
    return (
      e.enter("resource"),
      e.enter("resourceMarker"),
      e.consume(f),
      e.exit("resourceMarker"),
      i
    );
  }
  function i(f) {
    return Y(f) ? ze(e, u)(f) : u(f);
  }
  function u(f) {
    return f === 41
      ? o(f)
      : wn(
          e,
          l,
          a,
          "resourceDestination",
          "resourceDestinationLiteral",
          "resourceDestinationLiteralMarker",
          "resourceDestinationRaw",
          "resourceDestinationString",
          32,
        )(f);
  }
  function l(f) {
    return Y(f) ? ze(e, c)(f) : o(f);
  }
  function a(f) {
    return n(f);
  }
  function c(f) {
    return f === 34 || f === 39 || f === 40
      ? Sn(e, s, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(f)
      : o(f);
  }
  function s(f) {
    return Y(f) ? ze(e, o)(f) : o(f);
  }
  function o(f) {
    return f === 41
      ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), t)
      : n(f);
  }
}
function Vi(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return bn.call(r, e, u, l, "reference", "referenceMarker", "referenceString")(a);
  }
  function u(a) {
    return r.parser.defined.includes(
      xe(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)),
    )
      ? t(a)
      : n(a);
  }
  function l(a) {
    return n(a);
  }
}
function Hi(e, t, n) {
  return r;
  function r(u) {
    return (
      e.enter("reference"),
      e.enter("referenceMarker"),
      e.consume(u),
      e.exit("referenceMarker"),
      i
    );
  }
  function i(u) {
    return u === 93
      ? (e.enter("referenceMarker"),
        e.consume(u),
        e.exit("referenceMarker"),
        e.exit("reference"),
        t)
      : n(u);
  }
}
const qi = { name: "labelStartImage", resolveAll: mt.resolveAll, tokenize: Ui };
function Ui(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return (
      e.enter("labelImage"),
      e.enter("labelImageMarker"),
      e.consume(a),
      e.exit("labelImageMarker"),
      u
    );
  }
  function u(a) {
    return a === 91
      ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), l)
      : n(a);
  }
  function l(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
  }
}
const $i = { name: "labelStartLink", resolveAll: mt.resolveAll, tokenize: Qi };
function Qi(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return (
      e.enter("labelLink"),
      e.enter("labelMarker"),
      e.consume(l),
      e.exit("labelMarker"),
      e.exit("labelLink"),
      u
    );
  }
  function u(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const $e = { name: "lineEnding", tokenize: Yi };
function Yi(e, t) {
  return n;
  function n(r) {
    return (e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), H(e, t, "linePrefix"));
  }
}
const Oe = { name: "thematicBreak", tokenize: Xi };
function Xi(e, t, n) {
  let r = 0,
    i;
  return u;
  function u(s) {
    return (e.enter("thematicBreak"), l(s));
  }
  function l(s) {
    return ((i = s), a(s));
  }
  function a(s) {
    return s === i
      ? (e.enter("thematicBreakSequence"), c(s))
      : r >= 3 && (s === null || z(s))
        ? (e.exit("thematicBreak"), t(s))
        : n(s);
  }
  function c(s) {
    return s === i
      ? (e.consume(s), r++, c)
      : (e.exit("thematicBreakSequence"), L(s) ? H(e, a, "whitespace")(s) : a(s));
  }
}
const Q = { continuation: { tokenize: Ki }, exit: eu, name: "list", tokenize: Ji },
  Wi = { partial: !0, tokenize: tu },
  Gi = { partial: !0, tokenize: Zi };
function Ji(e, t, n) {
  const r = this,
    i = r.events[r.events.length - 1];
  let u = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0,
    l = 0;
  return a;
  function a(h) {
    const w =
      r.containerState.type || (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered");
    if (w === "listUnordered" ? !r.containerState.marker || h === r.containerState.marker : nt(h)) {
      if (
        (r.containerState.type || ((r.containerState.type = w), e.enter(w, { _container: !0 })),
        w === "listUnordered")
      )
        return (e.enter("listItemPrefix"), h === 42 || h === 45 ? e.check(Oe, n, s)(h) : s(h));
      if (!r.interrupt || h === 49)
        return (e.enter("listItemPrefix"), e.enter("listItemValue"), c(h));
    }
    return n(h);
  }
  function c(h) {
    return nt(h) && ++l < 10
      ? (e.consume(h), c)
      : (!r.interrupt || l < 2) &&
          (r.containerState.marker ? h === r.containerState.marker : h === 41 || h === 46)
        ? (e.exit("listItemValue"), s(h))
        : n(h);
  }
  function s(h) {
    return (
      e.enter("listItemMarker"),
      e.consume(h),
      e.exit("listItemMarker"),
      (r.containerState.marker = r.containerState.marker || h),
      e.check(je, r.interrupt ? n : o, e.attempt(Wi, d, f))
    );
  }
  function o(h) {
    return ((r.containerState.initialBlankLine = !0), u++, d(h));
  }
  function f(h) {
    return L(h)
      ? (e.enter("listItemPrefixWhitespace"), e.consume(h), e.exit("listItemPrefixWhitespace"), d)
      : n(h);
  }
  function d(h) {
    return (
      (r.containerState.size = u + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
      t(h)
    );
  }
}
function Ki(e, t, n) {
  const r = this;
  return ((r.containerState._closeFlow = void 0), e.check(je, i, u));
  function i(a) {
    return (
      (r.containerState.furtherBlankLines =
        r.containerState.furtherBlankLines || r.containerState.initialBlankLine),
      H(e, t, "listItemIndent", r.containerState.size + 1)(a)
    );
  }
  function u(a) {
    return r.containerState.furtherBlankLines || !L(a)
      ? ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        l(a))
      : ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        e.attempt(Gi, t, l)(a));
  }
  function l(a) {
    return (
      (r.containerState._closeFlow = !0),
      (r.interrupt = void 0),
      H(
        e,
        e.attempt(Q, t, n),
        "linePrefix",
        r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4,
      )(a)
    );
  }
}
function Zi(e, t, n) {
  const r = this;
  return H(e, i, "listItemIndent", r.containerState.size + 1);
  function i(u) {
    const l = r.events[r.events.length - 1];
    return l &&
      l[1].type === "listItemIndent" &&
      l[2].sliceSerialize(l[1], !0).length === r.containerState.size
      ? t(u)
      : n(u);
  }
}
function eu(e) {
  e.exit(this.containerState.type);
}
function tu(e, t, n) {
  const r = this;
  return H(
    e,
    i,
    "listItemPrefixWhitespace",
    r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5,
  );
  function i(u) {
    const l = r.events[r.events.length - 1];
    return !L(u) && l && l[1].type === "listItemPrefixWhitespace" ? t(u) : n(u);
  }
}
const Ht = { name: "setextUnderline", resolveTo: nu, tokenize: ru };
function nu(e, t) {
  let n = e.length,
    r,
    i,
    u;
  for (; n--;)
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      (e[n][1].type === "content" && e.splice(n, 1),
        !u && e[n][1].type === "definition" && (u = n));
  const l = {
    type: "setextHeading",
    start: { ...e[r][1].start },
    end: { ...e[e.length - 1][1].end },
  };
  return (
    (e[i][1].type = "setextHeadingText"),
    u
      ? (e.splice(i, 0, ["enter", l, t]),
        e.splice(u + 1, 0, ["exit", e[r][1], t]),
        (e[r][1].end = { ...e[u][1].end }))
      : (e[r][1] = l),
    e.push(["exit", l, t]),
    e
  );
}
function ru(e, t, n) {
  const r = this;
  let i;
  return u;
  function u(s) {
    let o = r.events.length,
      f;
    for (; o--;)
      if (
        r.events[o][1].type !== "lineEnding" &&
        r.events[o][1].type !== "linePrefix" &&
        r.events[o][1].type !== "content"
      ) {
        f = r.events[o][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || f)
      ? (e.enter("setextHeadingLine"), (i = s), l(s))
      : n(s);
  }
  function l(s) {
    return (e.enter("setextHeadingLineSequence"), a(s));
  }
  function a(s) {
    return s === i
      ? (e.consume(s), a)
      : (e.exit("setextHeadingLineSequence"), L(s) ? H(e, c, "lineSuffix")(s) : c(s));
  }
  function c(s) {
    return s === null || z(s) ? (e.exit("setextHeadingLine"), t(s)) : n(s);
  }
}
const iu = { tokenize: uu };
function uu(e) {
  const t = this,
    n = e.attempt(
      je,
      r,
      e.attempt(
        this.parser.constructs.flowInitial,
        i,
        H(e, e.attempt(this.parser.constructs.flow, i, e.attempt(ci, i)), "linePrefix"),
      ),
    );
  return n;
  function r(u) {
    if (u === null) {
      e.consume(u);
      return;
    }
    return (
      e.enter("lineEndingBlank"),
      e.consume(u),
      e.exit("lineEndingBlank"),
      (t.currentConstruct = void 0),
      n
    );
  }
  function i(u) {
    if (u === null) {
      e.consume(u);
      return;
    }
    return (
      e.enter("lineEnding"),
      e.consume(u),
      e.exit("lineEnding"),
      (t.currentConstruct = void 0),
      n
    );
  }
}
const lu = { resolveAll: In() },
  au = En("string"),
  su = En("text");
function En(e) {
  return { resolveAll: In(e === "text" ? ou : void 0), tokenize: t };
  function t(n) {
    const r = this,
      i = this.parser.constructs[e],
      u = n.attempt(i, l, a);
    return l;
    function l(o) {
      return s(o) ? u(o) : a(o);
    }
    function a(o) {
      if (o === null) {
        n.consume(o);
        return;
      }
      return (n.enter("data"), n.consume(o), c);
    }
    function c(o) {
      return s(o) ? (n.exit("data"), u(o)) : (n.consume(o), c);
    }
    function s(o) {
      if (o === null) return !0;
      const f = i[o];
      let d = -1;
      if (f)
        for (; ++d < f.length;) {
          const h = f[d];
          if (!h.previous || h.previous.call(r, r.previous)) return !0;
        }
      return !1;
    }
  }
}
function In(e) {
  return t;
  function t(n, r) {
    let i = -1,
      u;
    for (; ++i <= n.length;)
      u === void 0
        ? n[i] && n[i][1].type === "data" && ((u = i), i++)
        : (!n[i] || n[i][1].type !== "data") &&
          (i !== u + 2 &&
            ((n[u][1].end = n[i - 1][1].end), n.splice(u + 2, i - u - 2), (i = u + 2)),
          (u = void 0));
    return e ? e(n, r) : n;
  }
}
function ou(e, t) {
  let n = 0;
  for (; ++n <= e.length;)
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1],
        i = t.sliceStream(r);
      let u = i.length,
        l = -1,
        a = 0,
        c;
      for (; u--;) {
        const s = i[u];
        if (typeof s == "string") {
          for (l = s.length; s.charCodeAt(l - 1) === 32;) (a++, l--);
          if (l) break;
          l = -1;
        } else if (s === -2) ((c = !0), a++);
        else if (s !== -1) {
          u++;
          break;
        }
      }
      if ((t._contentTypeTextTrailing && n === e.length && (a = 0), a)) {
        const s = {
          type: n === e.length || c || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: u ? l : r.start._bufferIndex + l,
            _index: r.start._index + u,
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a,
          },
          end: { ...r.end },
        };
        ((r.end = { ...s.start }),
          r.start.offset === r.end.offset
            ? Object.assign(r, s)
            : (e.splice(n, 0, ["enter", s, t], ["exit", s, t]), (n += 2)));
      }
      n++;
    }
  return e;
}
const cu = {
    42: Q,
    43: Q,
    45: Q,
    48: Q,
    49: Q,
    50: Q,
    51: Q,
    52: Q,
    53: Q,
    54: Q,
    55: Q,
    56: Q,
    57: Q,
    62: gn,
  },
  fu = { 91: di },
  hu = { [-2]: Ue, [-1]: Ue, 32: Ue },
  pu = { 35: bi, 42: Oe, 45: [Ht, Oe], 60: Ci, 61: Ht, 95: Oe, 96: vt, 126: vt },
  mu = { 38: xn, 92: yn },
  du = {
    [-5]: $e,
    [-4]: $e,
    [-3]: $e,
    33: qi,
    38: xn,
    42: rt,
    60: [$r, Fi],
    91: $i,
    92: [ki, yn],
    93: mt,
    95: rt,
    96: ii,
  },
  gu = { null: [rt, lu] },
  yu = { null: [42, 95] },
  xu = { null: [] },
  ku = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: yu,
        contentInitial: fu,
        disable: xu,
        document: cu,
        flow: pu,
        flowInitial: hu,
        insideSpan: gu,
        string: mu,
        text: du,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
function wu(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: (n && n.line) || 1,
    column: (n && n.column) || 1,
    offset: (n && n.offset) || 0,
  };
  const i = {},
    u = [];
  let l = [],
    a = [];
  const c = {
      attempt: F(j),
      check: F(y),
      consume: _,
      enter: S,
      exit: B,
      interrupt: F(y, { interrupt: !0 }),
    },
    s = {
      code: null,
      containerState: {},
      defineSkip: E,
      events: [],
      now: w,
      parser: e,
      previous: null,
      sliceSerialize: d,
      sliceStream: h,
      write: f,
    };
  let o = t.tokenize.call(s, c);
  return (t.resolveAll && u.push(t), s);
  function f(T) {
    return (
      (l = G(l, T)),
      I(),
      l[l.length - 1] !== null ? [] : (v(t, 0), (s.events = pt(u, s.events, s)), s.events)
    );
  }
  function d(T, C) {
    return Su(h(T), C);
  }
  function h(T) {
    return bu(l, T);
  }
  function w() {
    const { _bufferIndex: T, _index: C, line: V, column: A, offset: b } = r;
    return { _bufferIndex: T, _index: C, line: V, column: A, offset: b };
  }
  function E(T) {
    ((i[T.line] = T.column), R());
  }
  function I() {
    let T;
    for (; r._index < l.length;) {
      const C = l[r._index];
      if (typeof C == "string")
        for (
          T = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
          r._index === T && r._bufferIndex < C.length;
        )
          x(C.charCodeAt(r._bufferIndex));
      else x(C);
    }
  }
  function x(T) {
    o = o(T);
  }
  function _(T) {
    (z(T)
      ? (r.line++, (r.column = 1), (r.offset += T === -3 ? 2 : 1), R())
      : T !== -1 && (r.column++, r.offset++),
      r._bufferIndex < 0
        ? r._index++
        : (r._bufferIndex++,
          r._bufferIndex === l[r._index].length && ((r._bufferIndex = -1), r._index++)),
      (s.previous = T));
  }
  function S(T, C) {
    const V = C || {};
    return ((V.type = T), (V.start = w()), s.events.push(["enter", V, s]), a.push(V), V);
  }
  function B(T) {
    const C = a.pop();
    return ((C.end = w()), s.events.push(["exit", C, s]), C);
  }
  function j(T, C) {
    v(T, C.from);
  }
  function y(T, C) {
    C.restore();
  }
  function F(T, C) {
    return V;
    function V(A, b, O) {
      let q, J, ie, p;
      return Array.isArray(A) ? ue(A) : "tokenize" in A ? ue([A]) : K(A);
      function K(U) {
        return we;
        function we(se) {
          const pe = se !== null && U[se],
            me = se !== null && U.null,
            Fe = [
              ...(Array.isArray(pe) ? pe : pe ? [pe] : []),
              ...(Array.isArray(me) ? me : me ? [me] : []),
            ];
          return ue(Fe)(se);
        }
      }
      function ue(U) {
        return ((q = U), (J = 0), U.length === 0 ? O : m(U[J]));
      }
      function m(U) {
        return we;
        function we(se) {
          return (
            (p = D()),
            (ie = U),
            U.partial || (s.currentConstruct = U),
            U.name && s.parser.constructs.disable.null.includes(U.name)
              ? fe()
              : U.tokenize.call(C ? Object.assign(Object.create(s), C) : s, c, Z, fe)(se)
          );
        }
      }
      function Z(U) {
        return (T(ie, p), b);
      }
      function fe(U) {
        return (p.restore(), ++J < q.length ? m(q[J]) : O);
      }
    }
  }
  function v(T, C) {
    (T.resolveAll && !u.includes(T) && u.push(T),
      T.resolve && re(s.events, C, s.events.length - C, T.resolve(s.events.slice(C), s)),
      T.resolveTo && (s.events = T.resolveTo(s.events, s)));
  }
  function D() {
    const T = w(),
      C = s.previous,
      V = s.currentConstruct,
      A = s.events.length,
      b = Array.from(a);
    return { from: A, restore: O };
    function O() {
      ((r = T), (s.previous = C), (s.currentConstruct = V), (s.events.length = A), (a = b), R());
    }
  }
  function R() {
    r.line in i && r.column < 2 && ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
  }
}
function bu(e, t) {
  const n = t.start._index,
    r = t.start._bufferIndex,
    i = t.end._index,
    u = t.end._bufferIndex;
  let l;
  if (n === i) l = [e[n].slice(r, u)];
  else {
    if (((l = e.slice(n, i)), r > -1)) {
      const a = l[0];
      typeof a == "string" ? (l[0] = a.slice(r)) : l.shift();
    }
    u > 0 && l.push(e[i].slice(0, u));
  }
  return l;
}
function Su(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length;) {
    const u = e[n];
    let l;
    if (typeof u == "string") l = u;
    else
      switch (u) {
        case -5: {
          l = "\r";
          break;
        }
        case -4: {
          l = `
`;
          break;
        }
        case -3: {
          l = `\r
`;
          break;
        }
        case -2: {
          l = t ? " " : "	";
          break;
        }
        case -1: {
          if (!t && i) continue;
          l = " ";
          break;
        }
        default:
          l = String.fromCharCode(u);
      }
    ((i = u === -2), r.push(l));
  }
  return r.join("");
}
function Eu(e) {
  const r = {
    constructs: Pr([ku, ...((e || {}).extensions || [])]),
    content: i(Mr),
    defined: [],
    document: i(vr),
    flow: i(iu),
    lazy: {},
    string: i(au),
    text: i(su),
  };
  return r;
  function i(u) {
    return l;
    function l(a) {
      return wu(r, u, a);
    }
  }
}
function Iu(e) {
  for (; !kn(e););
  return e;
}
const qt = /[\0\t\n\r]/g;
function Cu() {
  let e = 1,
    t = "",
    n = !0,
    r;
  return i;
  function i(u, l, a) {
    const c = [];
    let s, o, f, d, h;
    for (
      u = t + (typeof u == "string" ? u.toString() : new TextDecoder(l || void 0).decode(u)),
        f = 0,
        t = "",
        n && (u.charCodeAt(0) === 65279 && f++, (n = void 0));
      f < u.length;
    ) {
      if (
        ((qt.lastIndex = f),
        (s = qt.exec(u)),
        (d = s && s.index !== void 0 ? s.index : u.length),
        (h = u.charCodeAt(d)),
        !s)
      ) {
        t = u.slice(f);
        break;
      }
      if (h === 10 && f === d && r) (c.push(-3), (r = void 0));
      else
        switch (
          (r && (c.push(-5), (r = void 0)), f < d && (c.push(u.slice(f, d)), (e += d - f)), h)
        ) {
          case 0: {
            (c.push(65533), e++);
            break;
          }
          case 9: {
            for (o = Math.ceil(e / 4) * 4, c.push(-2); e++ < o;) c.push(-1);
            break;
          }
          case 10: {
            (c.push(-4), (e = 1));
            break;
          }
          default:
            ((r = !0), (e = 1));
        }
      f = d + 1;
    }
    return (a && (r && c.push(-5), t && c.push(t), c.push(null)), c);
  }
}
const Tu = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Au(e) {
  return e.replace(Tu, zu);
}
function zu(e, t, n) {
  if (t) return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1),
      u = i === 120 || i === 88;
    return dn(n.slice(u ? 2 : 1), u ? 16 : 10);
  }
  return ht(n) || e;
}
const Cn = {}.hasOwnProperty;
function _u(e, t, n) {
  return (
    t && typeof t == "object" && ((n = t), (t = void 0)),
    Pu(n)(
      Iu(
        Eu(n)
          .document()
          .write(Cu()(e, t, !0)),
      ),
    )
  );
}
function Pu(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: u(Et),
      autolinkProtocol: D,
      autolinkEmail: D,
      atxHeading: u(wt),
      blockQuote: u(me),
      characterEscape: D,
      characterReference: D,
      codeFenced: u(Fe),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: u(Fe, l),
      codeText: u(Dn, l),
      codeTextData: D,
      data: D,
      codeFlowValue: D,
      definition: u(Rn),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: u(On),
      hardBreakEscape: u(bt),
      hardBreakTrailing: u(bt),
      htmlFlow: u(St, l),
      htmlFlowData: D,
      htmlText: u(St, l),
      htmlTextData: D,
      image: u(Bn),
      label: l,
      link: u(Et),
      listItem: u(Mn),
      listItemValue: d,
      listOrdered: u(It, f),
      listUnordered: u(It),
      paragraph: u(jn),
      reference: m,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: u(wt),
      strong: u(vn),
      thematicBreak: u(Hn),
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: j,
      autolink: c(),
      autolinkEmail: pe,
      autolinkProtocol: se,
      blockQuote: c(),
      characterEscapeValue: R,
      characterReferenceMarkerHexadecimal: fe,
      characterReferenceMarkerNumeric: fe,
      characterReferenceValue: U,
      characterReference: we,
      codeFenced: c(I),
      codeFencedFence: E,
      codeFencedFenceInfo: h,
      codeFencedFenceMeta: w,
      codeFlowValue: R,
      codeIndented: c(x),
      codeText: c(b),
      codeTextData: R,
      data: R,
      definition: c(),
      definitionDestinationString: B,
      definitionLabelString: _,
      definitionTitleString: S,
      emphasis: c(),
      hardBreakEscape: c(C),
      hardBreakTrailing: c(C),
      htmlFlow: c(V),
      htmlFlowData: R,
      htmlText: c(A),
      htmlTextData: R,
      image: c(q),
      label: ie,
      labelText: J,
      lineEnding: T,
      link: c(O),
      listItem: c(),
      listOrdered: c(),
      listUnordered: c(),
      paragraph: c(),
      referenceString: Z,
      resourceDestinationString: p,
      resourceTitleString: K,
      resource: ue,
      setextHeading: c(v),
      setextHeadingLineSequence: F,
      setextHeadingText: y,
      strong: c(),
      thematicBreak: c(),
    },
  };
  Tn(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(g) {
    let k = { type: "root", children: [] };
    const P = {
        stack: [k],
        tokenStack: [],
        config: t,
        enter: a,
        exit: s,
        buffer: l,
        resume: o,
        data: n,
      },
      N = [];
    let M = -1;
    for (; ++M < g.length;)
      if (g[M][1].type === "listOrdered" || g[M][1].type === "listUnordered")
        if (g[M][0] === "enter") N.push(M);
        else {
          const ee = N.pop();
          M = i(g, ee, M);
        }
    for (M = -1; ++M < g.length;) {
      const ee = t[g[M][0]];
      Cn.call(ee, g[M][1].type) &&
        ee[g[M][1].type].call(
          Object.assign({ sliceSerialize: g[M][2].sliceSerialize }, P),
          g[M][1],
        );
    }
    if (P.tokenStack.length > 0) {
      const ee = P.tokenStack[P.tokenStack.length - 1];
      (ee[1] || Ut).call(P, void 0, ee[0]);
    }
    for (
      k.position = {
        start: oe(g.length > 0 ? g[0][1].start : { line: 1, column: 1, offset: 0 }),
        end: oe(g.length > 0 ? g[g.length - 2][1].end : { line: 1, column: 1, offset: 0 }),
      },
        M = -1;
      ++M < t.transforms.length;
    )
      k = t.transforms[M](k) || k;
    return k;
  }
  function i(g, k, P) {
    let N = k - 1,
      M = -1,
      ee = !1,
      he,
      le,
      be,
      Se;
    for (; ++N <= P;) {
      const X = g[N];
      switch (X[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          (X[0] === "enter" ? M++ : M--, (Se = void 0));
          break;
        }
        case "lineEndingBlank": {
          X[0] === "enter" && (he && !Se && !M && !be && (be = N), (Se = void 0));
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Se = void 0;
      }
      if (
        (!M && X[0] === "enter" && X[1].type === "listItemPrefix") ||
        (M === -1 &&
          X[0] === "exit" &&
          (X[1].type === "listUnordered" || X[1].type === "listOrdered"))
      ) {
        if (he) {
          let de = N;
          for (le = void 0; de--;) {
            const ae = g[de];
            if (ae[1].type === "lineEnding" || ae[1].type === "lineEndingBlank") {
              if (ae[0] === "exit") continue;
              (le && ((g[le][1].type = "lineEndingBlank"), (ee = !0)),
                (ae[1].type = "lineEnding"),
                (le = de));
            } else if (!(
              ae[1].type === "linePrefix" ||
              ae[1].type === "blockQuotePrefix" ||
              ae[1].type === "blockQuotePrefixWhitespace" ||
              ae[1].type === "blockQuoteMarker" ||
              ae[1].type === "listItemIndent"
            ))
              break;
          }
          (be && (!le || be < le) && (he._spread = !0),
            (he.end = Object.assign({}, le ? g[le][1].start : X[1].end)),
            g.splice(le || N, 0, ["exit", he, X[2]]),
            N++,
            P++);
        }
        if (X[1].type === "listItemPrefix") {
          const de = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, X[1].start),
            end: void 0,
          };
          ((he = de), g.splice(N, 0, ["enter", de, X[2]]), N++, P++, (be = void 0), (Se = !0));
        }
      }
    }
    return ((g[k][1]._spread = ee), P);
  }
  function u(g, k) {
    return P;
    function P(N) {
      (a.call(this, g(N), N), k && k.call(this, N));
    }
  }
  function l() {
    this.stack.push({ type: "fragment", children: [] });
  }
  function a(g, k, P) {
    (this.stack[this.stack.length - 1].children.push(g),
      this.stack.push(g),
      this.tokenStack.push([k, P || void 0]),
      (g.position = { start: oe(k.start), end: void 0 }));
  }
  function c(g) {
    return k;
    function k(P) {
      (g && g.call(this, P), s.call(this, P));
    }
  }
  function s(g, k) {
    const P = this.stack.pop(),
      N = this.tokenStack.pop();
    if (N) N[0].type !== g.type && (k ? k.call(this, g, N[0]) : (N[1] || Ut).call(this, g, N[0]));
    else
      throw new Error(
        "Cannot close `" + g.type + "` (" + Ae({ start: g.start, end: g.end }) + "): it’s not open",
      );
    P.position.end = oe(g.end);
  }
  function o() {
    return zr(this.stack.pop());
  }
  function f() {
    this.data.expectingFirstListItemValue = !0;
  }
  function d(g) {
    if (this.data.expectingFirstListItemValue) {
      const k = this.stack[this.stack.length - 2];
      ((k.start = Number.parseInt(this.sliceSerialize(g), 10)),
        (this.data.expectingFirstListItemValue = void 0));
    }
  }
  function h() {
    const g = this.resume(),
      k = this.stack[this.stack.length - 1];
    k.lang = g;
  }
  function w() {
    const g = this.resume(),
      k = this.stack[this.stack.length - 1];
    k.meta = g;
  }
  function E() {
    this.data.flowCodeInside || (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function I() {
    const g = this.resume(),
      k = this.stack[this.stack.length - 1];
    ((k.value = g.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")), (this.data.flowCodeInside = void 0));
  }
  function x() {
    const g = this.resume(),
      k = this.stack[this.stack.length - 1];
    k.value = g.replace(/(\r?\n|\r)$/g, "");
  }
  function _(g) {
    const k = this.resume(),
      P = this.stack[this.stack.length - 1];
    ((P.label = k), (P.identifier = xe(this.sliceSerialize(g)).toLowerCase()));
  }
  function S() {
    const g = this.resume(),
      k = this.stack[this.stack.length - 1];
    k.title = g;
  }
  function B() {
    const g = this.resume(),
      k = this.stack[this.stack.length - 1];
    k.url = g;
  }
  function j(g) {
    const k = this.stack[this.stack.length - 1];
    if (!k.depth) {
      const P = this.sliceSerialize(g).length;
      k.depth = P;
    }
  }
  function y() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function F(g) {
    const k = this.stack[this.stack.length - 1];
    k.depth = this.sliceSerialize(g).codePointAt(0) === 61 ? 1 : 2;
  }
  function v() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function D(g) {
    const P = this.stack[this.stack.length - 1].children;
    let N = P[P.length - 1];
    ((!N || N.type !== "text") &&
      ((N = Vn()), (N.position = { start: oe(g.start), end: void 0 }), P.push(N)),
      this.stack.push(N));
  }
  function R(g) {
    const k = this.stack.pop();
    ((k.value += this.sliceSerialize(g)), (k.position.end = oe(g.end)));
  }
  function T(g) {
    const k = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const P = k.children[k.children.length - 1];
      ((P.position.end = oe(g.end)), (this.data.atHardBreak = void 0));
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      t.canContainEols.includes(k.type) &&
      (D.call(this, g), R.call(this, g));
  }
  function C() {
    this.data.atHardBreak = !0;
  }
  function V() {
    const g = this.resume(),
      k = this.stack[this.stack.length - 1];
    k.value = g;
  }
  function A() {
    const g = this.resume(),
      k = this.stack[this.stack.length - 1];
    k.value = g;
  }
  function b() {
    const g = this.resume(),
      k = this.stack[this.stack.length - 1];
    k.value = g;
  }
  function O() {
    const g = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const k = this.data.referenceType || "shortcut";
      ((g.type += "Reference"), (g.referenceType = k), delete g.url, delete g.title);
    } else (delete g.identifier, delete g.label);
    this.data.referenceType = void 0;
  }
  function q() {
    const g = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const k = this.data.referenceType || "shortcut";
      ((g.type += "Reference"), (g.referenceType = k), delete g.url, delete g.title);
    } else (delete g.identifier, delete g.label);
    this.data.referenceType = void 0;
  }
  function J(g) {
    const k = this.sliceSerialize(g),
      P = this.stack[this.stack.length - 2];
    ((P.label = Au(k)), (P.identifier = xe(k).toLowerCase()));
  }
  function ie() {
    const g = this.stack[this.stack.length - 1],
      k = this.resume(),
      P = this.stack[this.stack.length - 1];
    if (((this.data.inReference = !0), P.type === "link")) {
      const N = g.children;
      P.children = N;
    } else P.alt = k;
  }
  function p() {
    const g = this.resume(),
      k = this.stack[this.stack.length - 1];
    k.url = g;
  }
  function K() {
    const g = this.resume(),
      k = this.stack[this.stack.length - 1];
    k.title = g;
  }
  function ue() {
    this.data.inReference = void 0;
  }
  function m() {
    this.data.referenceType = "collapsed";
  }
  function Z(g) {
    const k = this.resume(),
      P = this.stack[this.stack.length - 1];
    ((P.label = k),
      (P.identifier = xe(this.sliceSerialize(g)).toLowerCase()),
      (this.data.referenceType = "full"));
  }
  function fe(g) {
    this.data.characterReferenceType = g.type;
  }
  function U(g) {
    const k = this.sliceSerialize(g),
      P = this.data.characterReferenceType;
    let N;
    P
      ? ((N = dn(k, P === "characterReferenceMarkerNumeric" ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (N = ht(k));
    const M = this.stack[this.stack.length - 1];
    M.value += N;
  }
  function we(g) {
    const k = this.stack.pop();
    k.position.end = oe(g.end);
  }
  function se(g) {
    R.call(this, g);
    const k = this.stack[this.stack.length - 1];
    k.url = this.sliceSerialize(g);
  }
  function pe(g) {
    R.call(this, g);
    const k = this.stack[this.stack.length - 1];
    k.url = "mailto:" + this.sliceSerialize(g);
  }
  function me() {
    return { type: "blockquote", children: [] };
  }
  function Fe() {
    return { type: "code", lang: null, meta: null, value: "" };
  }
  function Dn() {
    return { type: "inlineCode", value: "" };
  }
  function Rn() {
    return { type: "definition", identifier: "", label: null, title: null, url: "" };
  }
  function On() {
    return { type: "emphasis", children: [] };
  }
  function wt() {
    return { type: "heading", depth: 0, children: [] };
  }
  function bt() {
    return { type: "break" };
  }
  function St() {
    return { type: "html", value: "" };
  }
  function Bn() {
    return { type: "image", title: null, url: "", alt: null };
  }
  function Et() {
    return { type: "link", title: null, url: "", children: [] };
  }
  function It(g) {
    return {
      type: "list",
      ordered: g.type === "listOrdered",
      start: null,
      spread: g._spread,
      children: [],
    };
  }
  function Mn(g) {
    return { type: "listItem", spread: g._spread, checked: null, children: [] };
  }
  function jn() {
    return { type: "paragraph", children: [] };
  }
  function vn() {
    return { type: "strong", children: [] };
  }
  function Vn() {
    return { type: "text", value: "" };
  }
  function Hn() {
    return { type: "thematicBreak" };
  }
}
function oe(e) {
  return { line: e.line, column: e.column, offset: e.offset };
}
function Tn(e, t) {
  let n = -1;
  for (; ++n < t.length;) {
    const r = t[n];
    Array.isArray(r) ? Tn(e, r) : Nu(e, r);
  }
}
function Nu(e, t) {
  let n;
  for (n in t)
    if (Cn.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function Ut(e, t) {
  throw e
    ? new Error(
        "Cannot close `" +
          e.type +
          "` (" +
          Ae({ start: e.start, end: e.end }) +
          "): a different token (`" +
          t.type +
          "`, " +
          Ae({ start: t.start, end: t.end }) +
          ") is open",
      )
    : new Error(
        "Cannot close document, a token (`" +
          t.type +
          "`, " +
          Ae({ start: t.start, end: t.end }) +
          ") is still open",
      );
}
function Fu(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return _u(r, {
      ...t.data("settings"),
      ...e,
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || [],
    });
  }
}
function Lu(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
function Du(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return (
    e.patch(t, n),
    [
      e.applyData(t, n),
      {
        type: "text",
        value: `
`,
      },
    ]
  );
}
function Ru(e, t) {
  const n = t.value
      ? t.value +
        `
`
      : "",
    r = {},
    i = t.lang ? t.lang.split(/\s+/) : [];
  i.length > 0 && (r.className = ["language-" + i[0]]);
  let u = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }],
  };
  return (
    t.meta && (u.data = { meta: t.meta }),
    e.patch(t, u),
    (u = e.applyData(t, u)),
    (u = { type: "element", tagName: "pre", properties: {}, children: [u] }),
    e.patch(t, u),
    u
  );
}
function Ou(e, t) {
  const n = { type: "element", tagName: "del", properties: {}, children: e.all(t) };
  return (e.patch(t, n), e.applyData(t, n));
}
function Bu(e, t) {
  const n = { type: "element", tagName: "em", properties: {}, children: e.all(t) };
  return (e.patch(t, n), e.applyData(t, n));
}
function Mu(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-",
    r = String(t.identifier).toUpperCase(),
    i = ke(r.toLowerCase()),
    u = e.footnoteOrder.indexOf(r);
  let l,
    a = e.footnoteCounts.get(r);
  (a === void 0 ? ((a = 0), e.footnoteOrder.push(r), (l = e.footnoteOrder.length)) : (l = u + 1),
    (a += 1),
    e.footnoteCounts.set(r, a));
  const c = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"],
    },
    children: [{ type: "text", value: String(l) }],
  };
  e.patch(t, c);
  const s = { type: "element", tagName: "sup", properties: {}, children: [c] };
  return (e.patch(t, s), e.applyData(t, s));
}
function ju(e, t) {
  const n = { type: "element", tagName: "h" + t.depth, properties: {}, children: e.all(t) };
  return (e.patch(t, n), e.applyData(t, n));
}
function vu(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return (e.patch(t, n), e.applyData(t, n));
  }
}
function An(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (
    (n === "collapsed" ? (r += "[]") : n === "full" && (r += "[" + (t.label || t.identifier) + "]"),
    t.type === "imageReference")
  )
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t),
    u = i[0];
  u && u.type === "text" ? (u.value = "[" + u.value) : i.unshift({ type: "text", value: "[" });
  const l = i[i.length - 1];
  return (l && l.type === "text" ? (l.value += r) : i.push({ type: "text", value: r }), i);
}
function Vu(e, t) {
  const n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n);
  if (!r) return An(e, t);
  const i = { src: ke(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const u = { type: "element", tagName: "img", properties: i, children: [] };
  return (e.patch(t, u), e.applyData(t, u));
}
function Hu(e, t) {
  const n = { src: ke(t.url) };
  (t.alt !== null && t.alt !== void 0 && (n.alt = t.alt),
    t.title !== null && t.title !== void 0 && (n.title = t.title));
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return (e.patch(t, r), e.applyData(t, r));
}
function qu(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = { type: "element", tagName: "code", properties: {}, children: [n] };
  return (e.patch(t, r), e.applyData(t, r));
}
function Uu(e, t) {
  const n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n);
  if (!r) return An(e, t);
  const i = { href: ke(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const u = { type: "element", tagName: "a", properties: i, children: e.all(t) };
  return (e.patch(t, u), e.applyData(t, u));
}
function $u(e, t) {
  const n = { href: ke(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "a", properties: n, children: e.all(t) };
  return (e.patch(t, r), e.applyData(t, r));
}
function Qu(e, t, n) {
  const r = e.all(t),
    i = n ? Yu(n) : zn(t),
    u = {},
    l = [];
  if (typeof t.checked == "boolean") {
    const o = r[0];
    let f;
    (o && o.type === "element" && o.tagName === "p"
      ? (f = o)
      : ((f = { type: "element", tagName: "p", properties: {}, children: [] }), r.unshift(f)),
      f.children.length > 0 && f.children.unshift({ type: "text", value: " " }),
      f.children.unshift({
        type: "element",
        tagName: "input",
        properties: { type: "checkbox", checked: t.checked, disabled: !0 },
        children: [],
      }),
      (u.className = ["task-list-item"]));
  }
  let a = -1;
  for (; ++a < r.length;) {
    const o = r[a];
    ((i || a !== 0 || o.type !== "element" || o.tagName !== "p") &&
      l.push({
        type: "text",
        value: `
`,
      }),
      o.type === "element" && o.tagName === "p" && !i ? l.push(...o.children) : l.push(o));
  }
  const c = r[r.length - 1];
  c &&
    (i || c.type !== "element" || c.tagName !== "p") &&
    l.push({
      type: "text",
      value: `
`,
    });
  const s = { type: "element", tagName: "li", properties: u, children: l };
  return (e.patch(t, s), e.applyData(t, s));
}
function Yu(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length;) t = zn(n[r]);
  }
  return t;
}
function zn(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Xu(e, t) {
  const n = {},
    r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
    const l = r[i];
    if (
      l.type === "element" &&
      l.tagName === "li" &&
      l.properties &&
      Array.isArray(l.properties.className) &&
      l.properties.className.includes("task-list-item")
    ) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const u = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0),
  };
  return (e.patch(t, u), e.applyData(t, u));
}
function Wu(e, t) {
  const n = { type: "element", tagName: "p", properties: {}, children: e.all(t) };
  return (e.patch(t, n), e.applyData(t, n));
}
function Gu(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return (e.patch(t, n), e.applyData(t, n));
}
function Ju(e, t) {
  const n = { type: "element", tagName: "strong", properties: {}, children: e.all(t) };
  return (e.patch(t, n), e.applyData(t, n));
}
function Ku(e, t) {
  const n = e.all(t),
    r = n.shift(),
    i = [];
  if (r) {
    const l = { type: "element", tagName: "thead", properties: {}, children: e.wrap([r], !0) };
    (e.patch(t.children[0], l), i.push(l));
  }
  if (n.length > 0) {
    const l = { type: "element", tagName: "tbody", properties: {}, children: e.wrap(n, !0) },
      a = st(t.children[1]),
      c = sn(t.children[t.children.length - 1]);
    (a && c && (l.position = { start: a, end: c }), i.push(l));
  }
  const u = { type: "element", tagName: "table", properties: {}, children: e.wrap(i, !0) };
  return (e.patch(t, u), e.applyData(t, u));
}
function Zu(e, t, n) {
  const r = n ? n.children : void 0,
    u = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td",
    l = n && n.type === "table" ? n.align : void 0,
    a = l ? l.length : t.children.length;
  let c = -1;
  const s = [];
  for (; ++c < a;) {
    const f = t.children[c],
      d = {},
      h = l ? l[c] : void 0;
    h && (d.align = h);
    let w = { type: "element", tagName: u, properties: d, children: [] };
    (f && ((w.children = e.all(f)), e.patch(f, w), (w = e.applyData(f, w))), s.push(w));
  }
  const o = { type: "element", tagName: "tr", properties: {}, children: e.wrap(s, !0) };
  return (e.patch(t, o), e.applyData(t, o));
}
function el(e, t) {
  const n = { type: "element", tagName: "td", properties: {}, children: e.all(t) };
  return (e.patch(t, n), e.applyData(t, n));
}
const $t = 9,
  Qt = 32;
function tl(e) {
  const t = String(e),
    n = /\r?\n|\r/g;
  let r = n.exec(t),
    i = 0;
  const u = [];
  for (; r;)
    (u.push(Yt(t.slice(i, r.index), i > 0, !0), r[0]),
      (i = r.index + r[0].length),
      (r = n.exec(t)));
  return (u.push(Yt(t.slice(i), i > 0, !1)), u.join(""));
}
function Yt(e, t, n) {
  let r = 0,
    i = e.length;
  if (t) {
    let u = e.codePointAt(r);
    for (; u === $t || u === Qt;) (r++, (u = e.codePointAt(r)));
  }
  if (n) {
    let u = e.codePointAt(i - 1);
    for (; u === $t || u === Qt;) (i--, (u = e.codePointAt(i - 1)));
  }
  return i > r ? e.slice(r, i) : "";
}
function nl(e, t) {
  const n = { type: "text", value: tl(String(t.value)) };
  return (e.patch(t, n), e.applyData(t, n));
}
function rl(e, t) {
  const n = { type: "element", tagName: "hr", properties: {}, children: [] };
  return (e.patch(t, n), e.applyData(t, n));
}
const il = {
  blockquote: Lu,
  break: Du,
  code: Ru,
  delete: Ou,
  emphasis: Bu,
  footnoteReference: Mu,
  heading: ju,
  html: vu,
  imageReference: Vu,
  image: Hu,
  inlineCode: qu,
  linkReference: Uu,
  link: $u,
  listItem: Qu,
  list: Xu,
  paragraph: Wu,
  root: Gu,
  strong: Ju,
  table: Ku,
  tableCell: el,
  tableRow: Zu,
  text: nl,
  thematicBreak: rl,
  toml: Le,
  yaml: Le,
  definition: Le,
  footnoteDefinition: Le,
};
function Le() {}
const _n = -1,
  ve = 0,
  _e = 1,
  Be = 2,
  dt = 3,
  gt = 4,
  yt = 5,
  xt = 6,
  Pn = 7,
  Nn = 8,
  Xt = typeof self == "object" ? self : globalThis,
  ul = (e, t) => {
    const n = (i, u) => (e.set(u, i), i),
      r = (i) => {
        if (e.has(i)) return e.get(i);
        const [u, l] = t[i];
        switch (u) {
          case ve:
          case _n:
            return n(l, i);
          case _e: {
            const a = n([], i);
            for (const c of l) a.push(r(c));
            return a;
          }
          case Be: {
            const a = n({}, i);
            for (const [c, s] of l) a[r(c)] = r(s);
            return a;
          }
          case dt:
            return n(new Date(l), i);
          case gt: {
            const { source: a, flags: c } = l;
            return n(new RegExp(a, c), i);
          }
          case yt: {
            const a = n(new Map(), i);
            for (const [c, s] of l) a.set(r(c), r(s));
            return a;
          }
          case xt: {
            const a = n(new Set(), i);
            for (const c of l) a.add(r(c));
            return a;
          }
          case Pn: {
            const { name: a, message: c } = l;
            return n(new Xt[a](c), i);
          }
          case Nn:
            return n(BigInt(l), i);
          case "BigInt":
            return n(Object(BigInt(l)), i);
          case "ArrayBuffer":
            return n(new Uint8Array(l).buffer, l);
          case "DataView": {
            const { buffer: a } = new Uint8Array(l);
            return n(new DataView(a), l);
          }
        }
        return n(new Xt[u](l), i);
      };
    return r;
  },
  Wt = (e) => ul(new Map(), e)(0),
  ye = "",
  { toString: ll } = {},
  { keys: al } = Object,
  Te = (e) => {
    const t = typeof e;
    if (t !== "object" || !e) return [ve, t];
    const n = ll.call(e).slice(8, -1);
    switch (n) {
      case "Array":
        return [_e, ye];
      case "Object":
        return [Be, ye];
      case "Date":
        return [dt, ye];
      case "RegExp":
        return [gt, ye];
      case "Map":
        return [yt, ye];
      case "Set":
        return [xt, ye];
      case "DataView":
        return [_e, n];
    }
    return n.includes("Array") ? [_e, n] : n.includes("Error") ? [Pn, n] : [Be, n];
  },
  De = ([e, t]) => e === ve && (t === "function" || t === "symbol"),
  sl = (e, t, n, r) => {
    const i = (l, a) => {
        const c = r.push(l) - 1;
        return (n.set(a, c), c);
      },
      u = (l) => {
        if (n.has(l)) return n.get(l);
        let [a, c] = Te(l);
        switch (a) {
          case ve: {
            let o = l;
            switch (c) {
              case "bigint":
                ((a = Nn), (o = l.toString()));
                break;
              case "function":
              case "symbol":
                if (e) throw new TypeError("unable to serialize " + c);
                o = null;
                break;
              case "undefined":
                return i([_n], l);
            }
            return i([a, o], l);
          }
          case _e: {
            if (c) {
              let d = l;
              return (
                c === "DataView"
                  ? (d = new Uint8Array(l.buffer))
                  : c === "ArrayBuffer" && (d = new Uint8Array(l)),
                i([c, [...d]], l)
              );
            }
            const o = [],
              f = i([a, o], l);
            for (const d of l) o.push(u(d));
            return f;
          }
          case Be: {
            if (c)
              switch (c) {
                case "BigInt":
                  return i([c, l.toString()], l);
                case "Boolean":
                case "Number":
                case "String":
                  return i([c, l.valueOf()], l);
              }
            if (t && "toJSON" in l) return u(l.toJSON());
            const o = [],
              f = i([a, o], l);
            for (const d of al(l)) (e || !De(Te(l[d]))) && o.push([u(d), u(l[d])]);
            return f;
          }
          case dt:
            return i([a, l.toISOString()], l);
          case gt: {
            const { source: o, flags: f } = l;
            return i([a, { source: o, flags: f }], l);
          }
          case yt: {
            const o = [],
              f = i([a, o], l);
            for (const [d, h] of l) (e || !(De(Te(d)) || De(Te(h)))) && o.push([u(d), u(h)]);
            return f;
          }
          case xt: {
            const o = [],
              f = i([a, o], l);
            for (const d of l) (e || !De(Te(d))) && o.push(u(d));
            return f;
          }
        }
        const { message: s } = l;
        return i([a, { name: c, message: s }], l);
      };
    return u;
  },
  Gt = (e, { json: t, lossy: n } = {}) => {
    const r = [];
    return (sl(!(t || n), !!t, new Map(), r)(e), r);
  },
  Me =
    typeof structuredClone == "function"
      ? (e, t) => (t && ("json" in t || "lossy" in t) ? Wt(Gt(e, t)) : structuredClone(e))
      : (e, t) => Wt(Gt(e, t));
function ol(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return (
    t > 1 &&
      n.push({
        type: "element",
        tagName: "sup",
        properties: {},
        children: [{ type: "text", value: String(t) }],
      }),
    n
  );
}
function cl(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function fl(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-",
    n = e.options.footnoteBackContent || ol,
    r = e.options.footnoteBackLabel || cl,
    i = e.options.footnoteLabel || "Footnotes",
    u = e.options.footnoteLabelTagName || "h2",
    l = e.options.footnoteLabelProperties || { className: ["sr-only"] },
    a = [];
  let c = -1;
  for (; ++c < e.footnoteOrder.length;) {
    const s = e.footnoteById.get(e.footnoteOrder[c]);
    if (!s) continue;
    const o = e.all(s),
      f = String(s.identifier).toUpperCase(),
      d = ke(f.toLowerCase());
    let h = 0;
    const w = [],
      E = e.footnoteCounts.get(f);
    for (; E !== void 0 && ++h <= E;) {
      w.length > 0 && w.push({ type: "text", value: " " });
      let _ = typeof n == "string" ? n : n(c, h);
      (typeof _ == "string" && (_ = { type: "text", value: _ }),
        w.push({
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + t + "fnref-" + d + (h > 1 ? "-" + h : ""),
            dataFootnoteBackref: "",
            ariaLabel: typeof r == "string" ? r : r(c, h),
            className: ["data-footnote-backref"],
          },
          children: Array.isArray(_) ? _ : [_],
        }));
    }
    const I = o[o.length - 1];
    if (I && I.type === "element" && I.tagName === "p") {
      const _ = I.children[I.children.length - 1];
      (_ && _.type === "text" ? (_.value += " ") : I.children.push({ type: "text", value: " " }),
        I.children.push(...w));
    } else o.push(...w);
    const x = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + d },
      children: e.wrap(o, !0),
    };
    (e.patch(s, x), a.push(x));
  }
  if (a.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: u,
          properties: { ...Me(l), id: "footnote-label" },
          children: [{ type: "text", value: i }],
        },
        {
          type: "text",
          value: `
`,
        },
        { type: "element", tagName: "ol", properties: {}, children: e.wrap(a, !0) },
        {
          type: "text",
          value: `
`,
        },
      ],
    };
}
function Fn(e, t, n, r) {
  let i, u, l;
  (typeof t == "function" && typeof n != "function"
    ? ((u = void 0), (l = t), (i = n))
    : ((u = t), (l = n), (i = r)),
    Yn(e, u, a, i));
  function a(c, s) {
    const o = s[s.length - 1],
      f = o ? o.children.indexOf(c) : void 0;
    return l(c, f, o);
  }
}
const it = {}.hasOwnProperty,
  hl = {};
function pl(e, t) {
  const n = t || hl,
    r = new Map(),
    i = new Map(),
    u = new Map(),
    l = { ...il, ...n.handlers },
    a = {
      all: s,
      applyData: dl,
      definitionById: r,
      footnoteById: i,
      footnoteCounts: u,
      footnoteOrder: [],
      handlers: l,
      one: c,
      options: n,
      patch: ml,
      wrap: yl,
    };
  return (
    Fn(e, function (o) {
      if (o.type === "definition" || o.type === "footnoteDefinition") {
        const f = o.type === "definition" ? r : i,
          d = String(o.identifier).toUpperCase();
        f.has(d) || f.set(d, o);
      }
    }),
    a
  );
  function c(o, f) {
    const d = o.type,
      h = a.handlers[d];
    if (it.call(a.handlers, d) && h) return h(a, o, f);
    if (a.options.passThrough && a.options.passThrough.includes(d)) {
      if ("children" in o) {
        const { children: E, ...I } = o,
          x = Me(I);
        return ((x.children = a.all(o)), x);
      }
      return Me(o);
    }
    return (a.options.unknownHandler || gl)(a, o, f);
  }
  function s(o) {
    const f = [];
    if ("children" in o) {
      const d = o.children;
      let h = -1;
      for (; ++h < d.length;) {
        const w = a.one(d[h], o);
        if (w) {
          if (
            h &&
            d[h - 1].type === "break" &&
            (!Array.isArray(w) && w.type === "text" && (w.value = Jt(w.value)),
            !Array.isArray(w) && w.type === "element")
          ) {
            const E = w.children[0];
            E && E.type === "text" && (E.value = Jt(E.value));
          }
          Array.isArray(w) ? f.push(...w) : f.push(w);
        }
      }
    }
    return f;
  }
}
function ml(e, t) {
  e.position && (t.position = lr(e));
}
function dl(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName,
      i = e.data.hChildren,
      u = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element") n.tagName = r;
      else {
        const l = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: l };
      }
    (n.type === "element" && u && Object.assign(n.properties, Me(u)),
      "children" in n && n.children && i !== null && i !== void 0 && (n.children = i));
  }
  return n;
}
function gl(e, t) {
  const n = t.data || {},
    r =
      "value" in t && !(it.call(n, "hProperties") || it.call(n, "hChildren"))
        ? { type: "text", value: t.value }
        : { type: "element", tagName: "div", properties: {}, children: e.all(t) };
  return (e.patch(t, r), e.applyData(t, r));
}
function yl(e, t) {
  const n = [];
  let r = -1;
  for (
    t &&
    n.push({
      type: "text",
      value: `
`,
    });
    ++r < e.length;
  )
    (r &&
      n.push({
        type: "text",
        value: `
`,
      }),
      n.push(e[r]));
  return (
    t &&
      e.length > 0 &&
      n.push({
        type: "text",
        value: `
`,
      }),
    n
  );
}
function Jt(e) {
  let t = 0,
    n = e.charCodeAt(t);
  for (; n === 9 || n === 32;) (t++, (n = e.charCodeAt(t)));
  return e.slice(t);
}
function Kt(e, t) {
  const n = pl(e, t),
    r = n.one(e, void 0),
    i = fl(n),
    u = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return (
    i &&
      u.children.push(
        {
          type: "text",
          value: `
`,
        },
        i,
      ),
    u
  );
}
function xl(e, t) {
  return e && "run" in e
    ? async function (n, r) {
        const i = Kt(n, { file: r, ...t });
        await e.run(i, r);
      }
    : function (n, r) {
        return Kt(n, { file: r, ...(e || t) });
      };
}
function Zt(e) {
  if (e) throw e;
}
var Qe, en;
function kl() {
  if (en) return Qe;
  en = 1;
  var e = Object.prototype.hasOwnProperty,
    t = Object.prototype.toString,
    n = Object.defineProperty,
    r = Object.getOwnPropertyDescriptor,
    i = function (s) {
      return typeof Array.isArray == "function" ? Array.isArray(s) : t.call(s) === "[object Array]";
    },
    u = function (s) {
      if (!s || t.call(s) !== "[object Object]") return !1;
      var o = e.call(s, "constructor"),
        f =
          s.constructor &&
          s.constructor.prototype &&
          e.call(s.constructor.prototype, "isPrototypeOf");
      if (s.constructor && !o && !f) return !1;
      var d;
      for (d in s);
      return typeof d > "u" || e.call(s, d);
    },
    l = function (s, o) {
      n && o.name === "__proto__"
        ? n(s, o.name, { enumerable: !0, configurable: !0, value: o.newValue, writable: !0 })
        : (s[o.name] = o.newValue);
    },
    a = function (s, o) {
      if (o === "__proto__")
        if (e.call(s, o)) {
          if (r) return r(s, o).value;
        } else return;
      return s[o];
    };
  return (
    (Qe = function c() {
      var s,
        o,
        f,
        d,
        h,
        w,
        E = arguments[0],
        I = 1,
        x = arguments.length,
        _ = !1;
      for (
        typeof E == "boolean" && ((_ = E), (E = arguments[1] || {}), (I = 2)),
          (E == null || (typeof E != "object" && typeof E != "function")) && (E = {});
        I < x;
        ++I
      )
        if (((s = arguments[I]), s != null))
          for (o in s)
            ((f = a(E, o)),
              (d = a(s, o)),
              E !== d &&
                (_ && d && (u(d) || (h = i(d)))
                  ? (h ? ((h = !1), (w = f && i(f) ? f : [])) : (w = f && u(f) ? f : {}),
                    l(E, { name: o, newValue: c(_, w, d) }))
                  : typeof d < "u" && l(E, { name: o, newValue: d })));
      return E;
    }),
    Qe
  );
}
var wl = kl();
const Ye = an(wl);
function ut(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function bl() {
  const e = [],
    t = { run: n, use: r };
  return t;
  function n(...i) {
    let u = -1;
    const l = i.pop();
    if (typeof l != "function") throw new TypeError("Expected function as last argument, not " + l);
    a(null, ...i);
    function a(c, ...s) {
      const o = e[++u];
      let f = -1;
      if (c) {
        l(c);
        return;
      }
      for (; ++f < i.length;) (s[f] === null || s[f] === void 0) && (s[f] = i[f]);
      ((i = s), o ? Sl(o, a)(...s) : l(null, ...s));
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError("Expected `middelware` to be a function, not " + i);
    return (e.push(i), t);
  }
}
function Sl(e, t) {
  let n;
  return r;
  function r(...l) {
    const a = e.length > l.length;
    let c;
    a && l.push(i);
    try {
      c = e.apply(this, l);
    } catch (s) {
      const o = s;
      if (a && n) throw o;
      return i(o);
    }
    a ||
      (c && c.then && typeof c.then == "function"
        ? c.then(u, i)
        : c instanceof Error
          ? i(c)
          : u(c));
  }
  function i(l, ...a) {
    n || ((n = !0), t(l, ...a));
  }
  function u(l) {
    i(null, l);
  }
}
const te = { basename: El, dirname: Il, extname: Cl, join: Tl, sep: "/" };
function El(e, t) {
  if (t !== void 0 && typeof t != "string") throw new TypeError('"ext" argument must be a string');
  Ne(e);
  let n = 0,
    r = -1,
    i = e.length,
    u;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--;)
      if (e.codePointAt(i) === 47) {
        if (u) {
          n = i + 1;
          break;
        }
      } else r < 0 && ((u = !0), (r = i + 1));
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e) return "";
  let l = -1,
    a = t.length - 1;
  for (; i--;)
    if (e.codePointAt(i) === 47) {
      if (u) {
        n = i + 1;
        break;
      }
    } else
      (l < 0 && ((u = !0), (l = i + 1)),
        a > -1 &&
          (e.codePointAt(i) === t.codePointAt(a--) ? a < 0 && (r = i) : ((a = -1), (r = l))));
  return (n === r ? (r = l) : r < 0 && (r = e.length), e.slice(n, r));
}
function Il(e) {
  if ((Ne(e), e.length === 0)) return ".";
  let t = -1,
    n = e.length,
    r;
  for (; --n;)
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0
    ? e.codePointAt(0) === 47
      ? "/"
      : "."
    : t === 1 && e.codePointAt(0) === 47
      ? "//"
      : e.slice(0, t);
}
function Cl(e) {
  Ne(e);
  let t = e.length,
    n = -1,
    r = 0,
    i = -1,
    u = 0,
    l;
  for (; t--;) {
    const a = e.codePointAt(t);
    if (a === 47) {
      if (l) {
        r = t + 1;
        break;
      }
      continue;
    }
    (n < 0 && ((l = !0), (n = t + 1)),
      a === 46 ? (i < 0 ? (i = t) : u !== 1 && (u = 1)) : i > -1 && (u = -1));
  }
  return i < 0 || n < 0 || u === 0 || (u === 1 && i === n - 1 && i === r + 1) ? "" : e.slice(i, n);
}
function Tl(...e) {
  let t = -1,
    n;
  for (; ++t < e.length;) (Ne(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]));
  return n === void 0 ? "." : Al(n);
}
function Al(e) {
  Ne(e);
  const t = e.codePointAt(0) === 47;
  let n = zl(e, !t);
  return (
    n.length === 0 && !t && (n = "."),
    n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"),
    t ? "/" + n : n
  );
}
function zl(e, t) {
  let n = "",
    r = 0,
    i = -1,
    u = 0,
    l = -1,
    a,
    c;
  for (; ++l <= e.length;) {
    if (l < e.length) a = e.codePointAt(l);
    else {
      if (a === 47) break;
      a = 47;
    }
    if (a === 47) {
      if (!(i === l - 1 || u === 1))
        if (i !== l - 1 && u === 2) {
          if (
            n.length < 2 ||
            r !== 2 ||
            n.codePointAt(n.length - 1) !== 46 ||
            n.codePointAt(n.length - 2) !== 46
          ) {
            if (n.length > 2) {
              if (((c = n.lastIndexOf("/")), c !== n.length - 1)) {
                (c < 0
                  ? ((n = ""), (r = 0))
                  : ((n = n.slice(0, c)), (r = n.length - 1 - n.lastIndexOf("/"))),
                  (i = l),
                  (u = 0));
                continue;
              }
            } else if (n.length > 0) {
              ((n = ""), (r = 0), (i = l), (u = 0));
              continue;
            }
          }
          t && ((n = n.length > 0 ? n + "/.." : ".."), (r = 2));
        } else
          (n.length > 0 ? (n += "/" + e.slice(i + 1, l)) : (n = e.slice(i + 1, l)),
            (r = l - i - 1));
      ((i = l), (u = 0));
    } else a === 46 && u > -1 ? u++ : (u = -1);
  }
  return n;
}
function Ne(e) {
  if (typeof e != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
}
const _l = { cwd: Pl };
function Pl() {
  return "/";
}
function lt(e) {
  return !!(
    e !== null &&
    typeof e == "object" &&
    "href" in e &&
    e.href &&
    "protocol" in e &&
    e.protocol &&
    e.auth === void 0
  );
}
function Nl(e) {
  if (typeof e == "string") e = new URL(e);
  else if (!lt(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`",
    );
    throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw ((t.code = "ERR_INVALID_URL_SCHEME"), t);
  }
  return Fl(e);
}
function Fl(e) {
  if (e.hostname !== "") {
    const r = new TypeError('File URL host must be "localhost" or empty on darwin');
    throw ((r.code = "ERR_INVALID_FILE_URL_HOST"), r);
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length;)
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError("File URL path must not include encoded / characters");
        throw ((i.code = "ERR_INVALID_FILE_URL_PATH"), i);
      }
    }
  return decodeURIComponent(t);
}
const Xe = ["history", "path", "basename", "stem", "extname", "dirname"];
class Ln {
  constructor(t) {
    let n;
    (t
      ? lt(t)
        ? (n = { path: t })
        : typeof t == "string" || Ll(t)
          ? (n = { value: t })
          : (n = t)
      : (n = {}),
      (this.cwd = "cwd" in n ? "" : _l.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored);
    let r = -1;
    for (; ++r < Xe.length;) {
      const u = Xe[r];
      u in n && n[u] !== void 0 && n[u] !== null && (this[u] = u === "history" ? [...n[u]] : n[u]);
    }
    let i;
    for (i in n) Xe.includes(i) || (this[i] = n[i]);
  }
  get basename() {
    return typeof this.path == "string" ? te.basename(this.path) : void 0;
  }
  set basename(t) {
    (Ge(t, "basename"), We(t, "basename"), (this.path = te.join(this.dirname || "", t)));
  }
  get dirname() {
    return typeof this.path == "string" ? te.dirname(this.path) : void 0;
  }
  set dirname(t) {
    (tn(this.basename, "dirname"), (this.path = te.join(t || "", this.basename)));
  }
  get extname() {
    return typeof this.path == "string" ? te.extname(this.path) : void 0;
  }
  set extname(t) {
    if ((We(t, "extname"), tn(this.dirname, "extname"), t)) {
      if (t.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = te.join(this.dirname, this.stem + (t || ""));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(t) {
    (lt(t) && (t = Nl(t)), Ge(t, "path"), this.path !== t && this.history.push(t));
  }
  get stem() {
    return typeof this.path == "string" ? te.basename(this.path, this.extname) : void 0;
  }
  set stem(t) {
    (Ge(t, "stem"),
      We(t, "stem"),
      (this.path = te.join(this.dirname || "", t + (this.extname || ""))));
  }
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw ((i.fatal = !0), i);
  }
  info(t, n, r) {
    const i = this.message(t, n, r);
    return ((i.fatal = void 0), i);
  }
  message(t, n, r) {
    const i = new $(t, n, r);
    return (
      this.path && ((i.name = this.path + ":" + i.name), (i.file = this.path)),
      (i.fatal = !1),
      this.messages.push(i),
      i
    );
  }
  toString(t) {
    return this.value === void 0
      ? ""
      : typeof this.value == "string"
        ? this.value
        : new TextDecoder(t || void 0).decode(this.value);
  }
}
function We(e, t) {
  if (e && e.includes(te.sep))
    throw new Error("`" + t + "` cannot be a path: did not expect `" + te.sep + "`");
}
function Ge(e, t) {
  if (!e) throw new Error("`" + t + "` cannot be empty");
}
function tn(e, t) {
  if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function Ll(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Dl = function (e) {
    const r = this.constructor.prototype,
      i = r[e],
      u = function () {
        return i.apply(u, arguments);
      };
    return (Object.setPrototypeOf(u, r), u);
  },
  Rl = {}.hasOwnProperty;
class kt extends Dl {
  constructor() {
    (super("copy"),
      (this.Compiler = void 0),
      (this.Parser = void 0),
      (this.attachers = []),
      (this.compiler = void 0),
      (this.freezeIndex = -1),
      (this.frozen = void 0),
      (this.namespace = {}),
      (this.parser = void 0),
      (this.transformers = bl()));
  }
  copy() {
    const t = new kt();
    let n = -1;
    for (; ++n < this.attachers.length;) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return (t.data(Ye(!0, {}, this.namespace)), t);
  }
  data(t, n) {
    return typeof t == "string"
      ? arguments.length === 2
        ? (Ze("data", this.frozen), (this.namespace[t] = n), this)
        : (Rl.call(this.namespace, t) && this.namespace[t]) || void 0
      : t
        ? (Ze("data", this.frozen), (this.namespace = t), this)
        : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const t = this;
    for (; ++this.freezeIndex < this.attachers.length;) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1) continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return ((this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this);
  }
  parse(t) {
    this.freeze();
    const n = Re(t),
      r = this.parser || this.Parser;
    return (Je("parse", r), r(String(n), n));
  }
  process(t, n) {
    const r = this;
    return (
      this.freeze(),
      Je("process", this.parser || this.Parser),
      Ke("process", this.compiler || this.Compiler),
      n ? i(void 0, n) : new Promise(i)
    );
    function i(u, l) {
      const a = Re(t),
        c = r.parse(a);
      r.run(c, a, function (o, f, d) {
        if (o || !f || !d) return s(o);
        const h = f,
          w = r.stringify(h, d);
        (Ml(w) ? (d.value = w) : (d.result = w), s(o, d));
      });
      function s(o, f) {
        o || !f ? l(o) : u ? u(f) : n(void 0, f);
      }
    }
  }
  processSync(t) {
    let n = !1,
      r;
    return (
      this.freeze(),
      Je("processSync", this.parser || this.Parser),
      Ke("processSync", this.compiler || this.Compiler),
      this.process(t, i),
      rn("processSync", "process", n),
      r
    );
    function i(u, l) {
      ((n = !0), Zt(u), (r = l));
    }
  }
  run(t, n, r) {
    (nn(t), this.freeze());
    const i = this.transformers;
    return (
      !r && typeof n == "function" && ((r = n), (n = void 0)),
      r ? u(void 0, r) : new Promise(u)
    );
    function u(l, a) {
      const c = Re(n);
      i.run(t, c, s);
      function s(o, f, d) {
        const h = f || t;
        o ? a(o) : l ? l(h) : r(void 0, h, d);
      }
    }
  }
  runSync(t, n) {
    let r = !1,
      i;
    return (this.run(t, n, u), rn("runSync", "run", r), i);
    function u(l, a) {
      (Zt(l), (i = a), (r = !0));
    }
  }
  stringify(t, n) {
    this.freeze();
    const r = Re(n),
      i = this.compiler || this.Compiler;
    return (Ke("stringify", i), nn(t), i(t, r));
  }
  use(t, ...n) {
    const r = this.attachers,
      i = this.namespace;
    if ((Ze("use", this.frozen), t != null))
      if (typeof t == "function") c(t, n);
      else if (typeof t == "object") Array.isArray(t) ? a(t) : l(t);
      else throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function u(s) {
      if (typeof s == "function") c(s, []);
      else if (typeof s == "object")
        if (Array.isArray(s)) {
          const [o, ...f] = s;
          c(o, f);
        } else l(s);
      else throw new TypeError("Expected usable value, not `" + s + "`");
    }
    function l(s) {
      if (!("plugins" in s) && !("settings" in s))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither",
        );
      (a(s.plugins), s.settings && (i.settings = Ye(!0, i.settings, s.settings)));
    }
    function a(s) {
      let o = -1;
      if (s != null)
        if (Array.isArray(s))
          for (; ++o < s.length;) {
            const f = s[o];
            u(f);
          }
        else throw new TypeError("Expected a list of plugins, not `" + s + "`");
    }
    function c(s, o) {
      let f = -1,
        d = -1;
      for (; ++f < r.length;)
        if (r[f][0] === s) {
          d = f;
          break;
        }
      if (d === -1) r.push([s, ...o]);
      else if (o.length > 0) {
        let [h, ...w] = o;
        const E = r[d][1];
        (ut(E) && ut(h) && (h = Ye(!0, E, h)), (r[d] = [s, h, ...w]));
      }
    }
  }
}
const Ol = new kt().freeze();
function Je(e, t) {
  if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Ke(e, t) {
  if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Ze(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" +
        e +
        "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.",
    );
}
function nn(e) {
  if (!ut(e) || typeof e.type != "string") throw new TypeError("Expected node, got `" + e + "`");
}
function rn(e, t, n) {
  if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function Re(e) {
  return Bl(e) ? e : new Ln(e);
}
function Bl(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Ml(e) {
  return typeof e == "string" || jl(e);
}
function jl(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const vl = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
  un = [],
  ln = { allowDangerousHtml: !0 },
  Vl = /^(https?|ircs?|mailto|xmpp)$/i,
  Hl = [
    { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
    { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
    {
      from: "allowNode",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowElement",
    },
    {
      from: "allowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowedElements",
    },
    { from: "className", id: "remove-classname" },
    {
      from: "disallowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "disallowedElements",
    },
    { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
    { from: "includeElementIndex", id: "#remove-includeelementindex" },
    { from: "includeNodeIndex", id: "change-includenodeindex-to-includeelementindex" },
    { from: "linkTarget", id: "remove-linktarget" },
    { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
    { from: "rawSourcePos", id: "#remove-rawsourcepos" },
    { from: "renderers", id: "change-renderers-to-components", to: "components" },
    { from: "source", id: "change-source-to-children", to: "children" },
    { from: "sourcePos", id: "#remove-sourcepos" },
    { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
    { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" },
  ];
function Gl(e) {
  const t = ql(e),
    n = Ul(e);
  return $l(t.runSync(t.parse(n), n), e);
}
function ql(e) {
  const t = e.rehypePlugins || un,
    n = e.remarkPlugins || un,
    r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...ln } : ln;
  return Ol().use(Fu).use(n).use(xl, r).use(t);
}
function Ul(e) {
  const t = e.children || "",
    n = new Ln();
  return (typeof t == "string" && (n.value = t), n);
}
function $l(e, t) {
  const n = t.allowedElements,
    r = t.allowElement,
    i = t.components,
    u = t.disallowedElements,
    l = t.skipHtml,
    a = t.unwrapDisallowed,
    c = t.urlTransform || Ql;
  for (const o of Hl)
    Object.hasOwn(t, o.from) &&
      ("" + o.from + (o.to ? "use `" + o.to + "` instead" : "remove it") + vl + o.id, void 0);
  return (
    Fn(e, s),
    fr(e, {
      Fragment: Ve.Fragment,
      components: i,
      ignoreInvalidStyle: !0,
      jsx: Ve.jsx,
      jsxs: Ve.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
  function s(o, f, d) {
    if (o.type === "raw" && d && typeof f == "number")
      return (l ? d.children.splice(f, 1) : (d.children[f] = { type: "text", value: o.value }), f);
    if (o.type === "element") {
      let h;
      for (h in qe)
        if (Object.hasOwn(qe, h) && Object.hasOwn(o.properties, h)) {
          const w = o.properties[h],
            E = qe[h];
          (E === null || E.includes(o.tagName)) && (o.properties[h] = c(String(w || ""), h, o));
        }
    }
    if (o.type === "element") {
      let h = n ? !n.includes(o.tagName) : u ? u.includes(o.tagName) : !1;
      if ((!h && r && typeof f == "number" && (h = !r(o, f, d)), h && d && typeof f == "number"))
        return (
          a && o.children ? d.children.splice(f, 1, ...o.children) : d.children.splice(f, 1),
          f
        );
    }
  }
}
function Ql(e) {
  const t = e.indexOf(":"),
    n = e.indexOf("?"),
    r = e.indexOf("#"),
    i = e.indexOf("/");
  return t === -1 ||
    (i !== -1 && t > i) ||
    (n !== -1 && t > n) ||
    (r !== -1 && t > r) ||
    Vl.test(e.slice(0, t))
    ? e
    : "";
}
export {
  Gl as M,
  Or as a,
  W as b,
  Bt as c,
  ne as d,
  tt as e,
  je as f,
  H as g,
  z as h,
  L as i,
  Pr as j,
  Ql as k,
  Y as m,
  xe as n,
  Wl as o,
  pt as r,
  re as s,
  zr as t,
  Br as u,
  Fn as v,
};
