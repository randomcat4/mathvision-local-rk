import { aT as an, j as Ve } from "./index-BM3ZINIl.js";
import {
  s as at,
  h as qn,
  f as Un,
  b as $n,
  d as Qn,
  v as Yn,
} from "./index-Yb6ONXKu.js";
function Wl() {}
const Xn = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
const Wn = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
const Gn = {};
function Ct(e, t) {
  return (Gn.jsx ? Wn : Xn).test(e);
}
const Jn = /[ \t\n\f\r]/g;
function Kn(e) {
  if (typeof e == "object") {
    if (e.type === "text") {
      return Tt(e.value);
    } else {
      return false;
    }
  } else {
    return Tt(e);
  }
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
var ge = {};
var He;
var At;
function er() {
  if (At) {
    return He;
  }
  At = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
  var t = /\n/g;
  var n = /^\s*/;
  var r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
  var i = /^:\s*/;
  var u = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
  var l = /^[;\s]*/;
  var a = /^\s+|\s+$/g;
  var c = `
`;
  var s = "/";
  var o = "*";
  var f = "";
  var d = "comment";
  var h = "declaration";
  function w(I, x) {
    if (typeof I != "string") {
      throw new TypeError("First argument must be a string");
    }
    if (!I) {
      return [];
    }
    x = x || {};
    var _ = 1;
    var S = 1;
    function B(A) {
      var b = A.match(t);
      if (b) {
        _ += b.length;
      }
      var O = A.lastIndexOf(c);
      S = ~O ? A.length - O : S + A.length;
    }
    function j() {
      var A = {
        line: _,
        column: S,
      };
      return function (b) {
        b.position = new y(A);
        D();
        return b;
      };
    }
    function y(A) {
      this.start = A;
      this.end = {
        line: _,
        column: S,
      };
      this.source = x.source;
    }
    y.prototype.content = I;
    function F(A) {
      var b = new Error(x.source + ":" + _ + ":" + S + ": " + A);
      b.reason = A;
      b.filename = x.source;
      b.line = _;
      b.column = S;
      b.source = I;
      if (!x.silent) {
        throw b;
      }
    }
    function v(A) {
      var b = A.exec(I);
      if (b) {
        var O = b[0];
        B(O);
        I = I.slice(O.length);
        return b;
      }
    }
    function D() {
      v(n);
    }
    function R(A) {
      var b;
      for (A = A || []; (b = T());) {
        if (b !== false) {
          A.push(b);
        }
      }
      return A;
    }
    function T() {
      var A = j();
      if (s == I.charAt(0) && o == I.charAt(1)) {
        for (
          var b = 2;
          f != I.charAt(b) && (o != I.charAt(b) || s != I.charAt(b + 1));
        ) {
          ++b;
        }
        b += 2;
        if (f === I.charAt(b - 1)) {
          return F("End of comment missing");
        }
        var O = I.slice(2, b - 2);
        S += 2;
        B(O);
        I = I.slice(b);
        S += 2;
        return A({
          type: d,
          comment: O,
        });
      }
    }
    function C() {
      var A = j();
      var b = v(r);
      if (b) {
        T();
        if (!v(i)) {
          return F("property missing ':'");
        }
        var O = v(u);
        var q = A({
          type: h,
          property: E(b[0].replace(e, f)),
          value: O ? E(O[0].replace(e, f)) : f,
        });
        v(l);
        return q;
      }
    }
    function V() {
      var A = [];
      R(A);
      for (var b; (b = C());) {
        if (b !== false) {
          A.push(b);
          R(A);
        }
      }
      return A;
    }
    D();
    return V();
  }
  function E(I) {
    if (I) {
      return I.replace(a, f);
    } else {
      return f;
    }
  }
  He = w;
  return He;
}
var zt;
function tr() {
  if (zt) {
    return ge;
  }
  zt = 1;
  var e =
    (ge && ge.__importDefault) ||
    function (r) {
      if (r && r.__esModule) {
        return r;
      } else {
        return {
          default: r,
        };
      }
    };
  Object.defineProperty(ge, "__esModule", {
    value: true,
  });
  ge.default = n;
  const t = e(er());
  function n(r, i) {
    let u = null;
    if (!r || typeof r != "string") {
      return u;
    }
    const l = (0, t.default)(r);
    const a = typeof i == "function";
    l.forEach((c) => {
      if (c.type !== "declaration") {
        return;
      }
      const { property: s, value: o } = c;
      if (a) {
        i(s, o, c);
      } else if (o) {
        u = u || {};
        u[s] = o;
      }
    });
    return u;
  }
  return ge;
}
var Ee = {};
var _t;
function nr() {
  if (_t) {
    return Ee;
  }
  _t = 1;
  Object.defineProperty(Ee, "__esModule", {
    value: true,
  });
  Ee.camelCase = undefined;
  var e = /^--[a-zA-Z0-9_-]+$/;
  var t = /-([a-z])/g;
  var n = /^[^-]+$/;
  var r = /^-(webkit|moz|ms|o|khtml)-/;
  var i = /^-(ms)-/;
  function u(s) {
    return !s || n.test(s) || e.test(s);
  }
  function l(s, o) {
    return o.toUpperCase();
  }
  function a(s, o) {
    return `${o}-`;
  }
  function c(s, o = {}) {
    if (u(s)) {
      return s;
    } else {
      s = s.toLowerCase();
      if (o.reactCompat) {
        s = s.replace(i, a);
      } else {
        s = s.replace(r, a);
      }
      return s.replace(t, l);
    }
  }
  Ee.camelCase = c;
  return Ee;
}
var Ie;
var Pt;
function rr() {
  if (Pt) {
    return Ie;
  }
  Pt = 1;
  var e =
    (Ie && Ie.__importDefault) ||
    function (i) {
      if (i && i.__esModule) {
        return i;
      } else {
        return {
          default: i,
        };
      }
    };
  var t = e(tr());
  var n = nr();
  function r(i, u) {
    var l = {};
    if (!!i && typeof i == "string") {
      (0, t.default)(i, function (a, c) {
        if (a && c) {
          l[(0, n.camelCase)(a, u)] = c;
        }
      });
    }
    return l;
  }
  r.default = r;
  Ie = r;
  return Ie;
}
var ir = rr();
const ur = an(ir);
const sn = on("end");
const st = on("start");
function on(e) {
  return t;
  function t(n) {
    const r = (n && n.position && n.position[e]) || {};
    if (
      typeof r.line == "number" &&
      r.line > 0 &&
      typeof r.column == "number" &&
      r.column > 0
    ) {
      return {
        line: r.line,
        column: r.column,
        offset:
          typeof r.offset == "number" && r.offset > -1 ? r.offset : undefined,
      };
    }
  }
}
function lr(e) {
  const t = st(e);
  const n = sn(e);
  if (t && n) {
    return {
      start: t,
      end: n,
    };
  }
}
function Ae(e) {
  if (!e || typeof e != "object") {
    return "";
  } else if ("position" in e || "type" in e) {
    return Nt(e.position);
  } else if ("start" in e || "end" in e) {
    return Nt(e);
  } else if ("line" in e || "column" in e) {
    return et(e);
  } else {
    return "";
  }
}
function et(e) {
  return Ft(e && e.line) + ":" + Ft(e && e.column);
}
function Nt(e) {
  return et(e && e.start) + "-" + et(e && e.end);
}
function Ft(e) {
  if (e && typeof e == "number") {
    return e;
  } else {
    return 1;
  }
}
class $ extends Error {
  constructor(t, n, r) {
    super();
    if (typeof n == "string") {
      r = n;
      n = undefined;
    }
    let i = "";
    let u = {};
    let l = false;
    if (n) {
      if ("line" in n && "column" in n) {
        u = {
          place: n,
        };
      } else if ("start" in n && "end" in n) {
        u = {
          place: n,
        };
      } else if ("type" in n) {
        u = {
          ancestors: [n],
          place: n.position,
        };
      } else {
        u = {
          ...n,
        };
      }
    }
    if (typeof t == "string") {
      i = t;
    } else if (!u.cause && t) {
      l = true;
      i = t.message;
      u.cause = t;
    }
    if (!u.ruleId && !u.source && typeof r == "string") {
      const c = r.indexOf(":");
      if (c === -1) {
        u.ruleId = r;
      } else {
        u.source = r.slice(0, c);
        u.ruleId = r.slice(c + 1);
      }
    }
    if (!u.place && u.ancestors && u.ancestors) {
      const c = u.ancestors[u.ancestors.length - 1];
      if (c) {
        u.place = c.position;
      }
    }
    const a = u.place && "start" in u.place ? u.place.start : u.place;
    this.ancestors = u.ancestors || undefined;
    this.cause = u.cause || undefined;
    this.column = a ? a.column : undefined;
    this.fatal = undefined;
    this.file = "";
    this.message = i;
    this.line = a ? a.line : undefined;
    this.name = Ae(u.place) || "1:1";
    this.place = u.place || undefined;
    this.reason = this.message;
    this.ruleId = u.ruleId || undefined;
    this.source = u.source || undefined;
    this.stack =
      l && u.cause && typeof u.cause.stack == "string" ? u.cause.stack : "";
    this.actual = undefined;
    this.expected = undefined;
    this.note = undefined;
    this.url = undefined;
  }
}
$.prototype.file = "";
$.prototype.name = "";
$.prototype.reason = "";
$.prototype.message = "";
$.prototype.stack = "";
$.prototype.column = undefined;
$.prototype.line = undefined;
$.prototype.ancestors = undefined;
$.prototype.cause = undefined;
$.prototype.fatal = undefined;
$.prototype.place = undefined;
$.prototype.ruleId = undefined;
$.prototype.source = undefined;
const ot = {}.hasOwnProperty;
const ar = new Map();
const sr = /[A-Z]/g;
const or = new Set(["table", "tbody", "thead", "tfoot", "tr"]);
const cr = new Set(["td", "th"]);
const cn = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function fr(e, t) {
  if (!t || t.Fragment === undefined) {
    throw new TypeError("Expected `Fragment` in options");
  }
  const n = t.filePath || undefined;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function") {
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`",
      );
    }
    r = kr(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function") {
      throw new TypeError("Expected `jsx` in production options");
    }
    if (typeof t.jsxs != "function") {
      throw new TypeError("Expected `jsxs` in production options");
    }
    r = xr(n, t.jsx, t.jsxs);
  }
  const i = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: r,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : undefined,
    filePath: n,
    ignoreInvalidStyle: t.ignoreInvalidStyle || false,
    passKeys: t.passKeys !== false,
    passNode: t.passNode || false,
    schema: t.space === "svg" ? at : qn,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== false,
  };
  const u = fn(i, e, undefined);
  if (u && typeof u != "string") {
    return u;
  } else {
    return i.create(
      e,
      i.Fragment,
      {
        children: u || undefined,
      },
      undefined,
    );
  }
}
function fn(e, t, n) {
  if (t.type === "element") {
    return hr(e, t, n);
  }
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") {
    return pr(e, t);
  }
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") {
    return dr(e, t, n);
  }
  if (t.type === "mdxjsEsm") {
    return mr(e, t);
  }
  if (t.type === "root") {
    return gr(e, t, n);
  }
  if (t.type === "text") {
    return yr(e, t);
  }
}
function hr(e, t, n) {
  const r = e.schema;
  let i = r;
  if (t.tagName.toLowerCase() === "svg" && r.space === "html") {
    i = at;
    e.schema = i;
  }
  e.ancestors.push(t);
  const u = pn(e, t.tagName, false);
  const l = wr(e, t);
  let a = ft(e, t);
  if (or.has(t.tagName)) {
    a = a.filter(function (c) {
      if (typeof c == "string") {
        return !Kn(c);
      } else {
        return true;
      }
    });
  }
  hn(e, l, u, t);
  ct(l, a);
  e.ancestors.pop();
  e.schema = r;
  return e.create(t, u, l, n);
}
function pr(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    r.type;
    return e.evaluater.evaluateExpression(r.expression);
  }
  Pe(e, t.position);
}
function mr(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    return e.evaluater.evaluateProgram(t.data.estree);
  }
  Pe(e, t.position);
}
function dr(e, t, n) {
  const r = e.schema;
  let i = r;
  if (t.name === "svg" && r.space === "html") {
    i = at;
    e.schema = i;
  }
  e.ancestors.push(t);
  const u = t.name === null ? e.Fragment : pn(e, t.name, true);
  const l = br(e, t);
  const a = ft(e, t);
  hn(e, l, u, t);
  ct(l, a);
  e.ancestors.pop();
  e.schema = r;
  return e.create(t, u, l, n);
}
function gr(e, t, n) {
  const r = {};
  ct(r, ft(e, t));
  return e.create(t, e.Fragment, r, n);
}
function yr(e, t) {
  return t.value;
}
function hn(e, t, n, r) {
  if (typeof n != "string" && n !== e.Fragment && e.passNode) {
    t.node = r;
  }
}
function ct(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    if (n) {
      e.children = n;
    }
  }
}
function xr(e, t, n) {
  return r;
  function r(i, u, l, a) {
    const s = Array.isArray(l.children) ? n : t;
    if (a) {
      return s(u, l, a);
    } else {
      return s(u, l);
    }
  }
}
function kr(e, t) {
  return n;
  function n(r, i, u, l) {
    const a = Array.isArray(u.children);
    const c = st(r);
    return t(
      i,
      u,
      l,
      a,
      {
        columnNumber: c ? c.column - 1 : undefined,
        fileName: e,
        lineNumber: c ? c.line : undefined,
      },
      undefined,
    );
  }
}
function wr(e, t) {
  const n = {};
  let r;
  let i;
  for (i in t.properties) {
    if (i !== "children" && ot.call(t.properties, i)) {
      const u = Sr(e, i, t.properties[i]);
      if (u) {
        const [l, a] = u;
        if (
          e.tableCellAlignToStyle &&
          l === "align" &&
          typeof a == "string" &&
          cr.has(t.tagName)
        ) {
          r = a;
        } else {
          n[l] = a;
        }
      }
    }
  }
  if (r) {
    const u = (n.style ||= {});
    u[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function br(e, t) {
  const n = {};
  for (const r of t.attributes) {
    if (r.type === "mdxJsxExpressionAttribute") {
      if (r.data && r.data.estree && e.evaluater) {
        const u = r.data.estree.body[0];
        u.type;
        const l = u.expression;
        l.type;
        const a = l.properties[0];
        a.type;
        Object.assign(n, e.evaluater.evaluateExpression(a.argument));
      } else {
        Pe(e, t.position);
      }
    } else {
      const i = r.name;
      let u;
      if (r.value && typeof r.value == "object") {
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type;
          u = e.evaluater.evaluateExpression(a.expression);
        } else {
          Pe(e, t.position);
        }
      } else {
        u = r.value === null ? true : r.value;
      }
      n[i] = u;
    }
  }
  return n;
}
function ft(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? new Map() : ar;
  while (++r < t.children.length) {
    const u = t.children[r];
    let l;
    if (e.passKeys) {
      const c =
        u.type === "element"
          ? u.tagName
          : u.type === "mdxJsxFlowElement" || u.type === "mdxJsxTextElement"
            ? u.name
            : undefined;
      if (c) {
        const s = i.get(c) || 0;
        l = c + "-" + s;
        i.set(c, s + 1);
      }
    }
    const a = fn(e, u, l);
    if (a !== undefined) {
      n.push(a);
    }
  }
  return n;
}
function Sr(e, t, n) {
  const r = Un(e.schema, t);
  if (n != null && (typeof n != "number" || !Number.isNaN(n))) {
    if (Array.isArray(n)) {
      n = r.commaSeparated ? $n(n) : Qn(n);
    }
    if (r.property === "style") {
      let i = typeof n == "object" ? n : Er(e, String(n));
      if (e.stylePropertyNameCase === "css") {
        i = Ir(i);
      }
      return ["style", i];
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
    return ur(t, {
      reactCompat: true,
    });
  } catch (n) {
    if (e.ignoreInvalidStyle) {
      return {};
    }
    const r = n;
    const i = new $("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime",
    });
    i.file = e.filePath || undefined;
    i.url = cn + "#cannot-parse-style-attribute";
    throw i;
  }
}
function pn(e, t, n) {
  let r;
  if (!n) {
    r = {
      type: "Literal",
      value: t,
    };
  } else if (t.includes(".")) {
    const i = t.split(".");
    let u = -1;
    let l;
    while (++u < i.length) {
      const a = Ct(i[u])
        ? {
            type: "Identifier",
            name: i[u],
          }
        : {
            type: "Literal",
            value: i[u],
          };
      l = l
        ? {
            type: "MemberExpression",
            object: l,
            property: a,
            computed: !!u && a.type === "Literal",
            optional: false,
          }
        : a;
    }
    r = l;
  } else {
    r =
      Ct(t) && !/^[a-z]/.test(t)
        ? {
            type: "Identifier",
            name: t,
          }
        : {
            type: "Literal",
            value: t,
          };
  }
  if (r.type === "Literal") {
    const i = r.value;
    if (ot.call(e.components, i)) {
      return e.components[i];
    } else {
      return i;
    }
  }
  if (e.evaluater) {
    return e.evaluater.evaluateExpression(r);
  }
  Pe(e);
}
function Pe(e, t) {
  const n = new $("Cannot handle MDX estrees without `createEvaluater`", {
    ancestors: e.ancestors,
    place: t,
    ruleId: "mdx-estree",
    source: "hast-util-to-jsx-runtime",
  });
  n.file = e.filePath || undefined;
  n.url = cn + "#cannot-handle-mdx-estrees-without-createevaluater";
  throw n;
}
function Ir(e) {
  const t = {};
  let n;
  for (n in e) {
    if (ot.call(e, n)) {
      t[Cr(n)] = e[n];
    }
  }
  return t;
}
function Cr(e) {
  let t = e.replace(sr, Tr);
  if (t.slice(0, 3) === "ms-") {
    t = "-" + t;
  }
  return t;
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
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video",
  ],
};
const Ar = {};
function zr(e, t) {
  const n = Ar;
  const r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : true;
  const i = typeof n.includeHtml == "boolean" ? n.includeHtml : true;
  return mn(e, r, i);
}
function mn(e, t, n) {
  if (_r(e)) {
    if ("value" in e) {
      if (e.type === "html" && !n) {
        return "";
      } else {
        return e.value;
      }
    }
    if (t && "alt" in e && e.alt) {
      return e.alt;
    }
    if ("children" in e) {
      return Lt(e.children, t, n);
    }
  }
  if (Array.isArray(e)) {
    return Lt(e, t, n);
  } else {
    return "";
  }
}
function Lt(e, t, n) {
  const r = [];
  let i = -1;
  while (++i < e.length) {
    r[i] = mn(e[i], t, n);
  }
  return r.join("");
}
function _r(e) {
  return !!e && typeof e == "object";
}
const Dt = document.createElement("i");
function ht(e) {
  const t = "&" + e + ";";
  Dt.innerHTML = t;
  const n = Dt.textContent;
  if ((n.charCodeAt(n.length - 1) === 59 && e !== "semi") || n === t) {
    return false;
  } else {
    return n;
  }
}
function re(e, t, n, r) {
  const i = e.length;
  let u = 0;
  let l;
  if (t < 0) {
    t = -t > i ? 0 : i + t;
  } else {
    t = t > i ? i : t;
  }
  n = n > 0 ? n : 0;
  if (r.length < 10000) {
    l = Array.from(r);
    l.unshift(t, n);
    e.splice(...l);
  } else {
    for (n && e.splice(t, n); u < r.length;) {
      l = r.slice(u, u + 10000);
      l.unshift(t, 0);
      e.splice(...l);
      u += 10000;
      t += 10000;
    }
  }
}
function G(e, t) {
  if (e.length > 0) {
    re(e, e.length, 0, t);
    return e;
  } else {
    return t;
  }
}
const Rt = {}.hasOwnProperty;
function Pr(e) {
  const t = {};
  let n = -1;
  while (++n < e.length) {
    Nr(t, e[n]);
  }
  return t;
}
function Nr(e, t) {
  let n;
  for (n in t) {
    const i = (Rt.call(e, n) ? e[n] : undefined) || (e[n] = {});
    const u = t[n];
    let l;
    if (u) {
      for (l in u) {
        if (!Rt.call(i, l)) {
          i[l] = [];
        }
        const a = u[l];
        Fr(i[l], Array.isArray(a) ? a : a ? [a] : []);
      }
    }
  }
}
function Fr(e, t) {
  let n = -1;
  const r = [];
  while (++n < t.length) {
    (t[n].add === "after" ? e : r).push(t[n]);
  }
  re(e, 0, 0, r);
}
function dn(e, t) {
  const n = Number.parseInt(e, t);
  if (
    n < 9 ||
    n === 11 ||
    (n > 13 && n < 32) ||
    (n > 126 && n < 160) ||
    (n > 55295 && n < 57344) ||
    (n > 64975 && n < 65008) ||
    (n & 65535) === 65535 ||
    (n & 65535) === 65534 ||
    n > 1114111
  ) {
    return "�";
  } else {
    return String.fromCodePoint(n);
  }
}
function xe(e) {
  return e
    .replace(/[\t\n\r ]+/g, " ")
    .replace(/^ | $/g, "")
    .toLowerCase()
    .toUpperCase();
}
const ne = ce(/[A-Za-z]/);
const W = ce(/[\dA-Za-z]/);
const Lr = ce(/[#-'*+\--9=?A-Z^-~]/);
function tt(e) {
  return e !== null && (e < 32 || e === 127);
}
const nt = ce(/\d/);
const Dr = ce(/[\dA-Fa-f]/);
const Rr = ce(/[!-/:-@[-`{-~]/);
function z(e) {
  return e !== null && e < -2;
}
function Y(e) {
  return e !== null && (e < 0 || e === 32);
}
function L(e) {
  return e === -2 || e === -1 || e === 32;
}
const Or = ce(new RegExp("\\p{P}|\\p{S}", "u"));
const Br = ce(/\s/);
function ce(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function ke(e) {
  const t = [];
  let n = -1;
  let r = 0;
  let i = 0;
  while (++n < e.length) {
    const u = e.charCodeAt(n);
    let l = "";
    if (u === 37 && W(e.charCodeAt(n + 1)) && W(e.charCodeAt(n + 2))) {
      i = 2;
    } else if (u < 128) {
      if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(u))) {
        l = String.fromCharCode(u);
      }
    } else if (u > 55295 && u < 57344) {
      const a = e.charCodeAt(n + 1);
      if (u < 56320 && a > 56319 && a < 57344) {
        l = String.fromCharCode(u, a);
        i = 1;
      } else {
        l = "�";
      }
    } else {
      l = String.fromCharCode(u);
    }
    if (l) {
      t.push(e.slice(r, n), encodeURIComponent(l));
      r = n + i + 1;
      l = "";
    }
    if (i) {
      n += i;
      i = 0;
    }
  }
  return t.join("") + e.slice(r);
}
function H(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let u = 0;
  return l;
  function l(c) {
    if (L(c)) {
      e.enter(n);
      return a(c);
    } else {
      return t(c);
    }
  }
  function a(c) {
    if (L(c) && u++ < i) {
      e.consume(c);
      return a;
    } else {
      e.exit(n);
      return t(c);
    }
  }
}
const Mr = {
  tokenize: jr,
};
function jr(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    e.enter("lineEnding");
    e.consume(a);
    e.exit("lineEnding");
    return H(e, t, "linePrefix");
  }
  function i(a) {
    e.enter("paragraph");
    return u(a);
  }
  function u(a) {
    const c = e.enter("chunkText", {
      contentType: "text",
      previous: n,
    });
    if (n) {
      n.next = c;
    }
    n = c;
    return l(a);
  }
  function l(a) {
    if (a === null) {
      e.exit("chunkText");
      e.exit("paragraph");
      e.consume(a);
      return;
    }
    if (z(a)) {
      e.consume(a);
      e.exit("chunkText");
      return u;
    } else {
      e.consume(a);
      return l;
    }
  }
}
const vr = {
  tokenize: Vr,
};
const Ot = {
  tokenize: Hr,
};
function Vr(e) {
  const t = this;
  const n = [];
  let r = 0;
  let i;
  let u;
  let l;
  return a;
  function a(S) {
    if (r < n.length) {
      const B = n[r];
      t.containerState = B[1];
      return e.attempt(B[0].continuation, c, s)(S);
    }
    return s(S);
  }
  function c(S) {
    r++;
    if (t.containerState._closeFlow) {
      t.containerState._closeFlow = undefined;
      if (i) {
        _();
      }
      const B = t.events.length;
      let j = B;
      let y;
      while (j--) {
        if (t.events[j][0] === "exit" && t.events[j][1].type === "chunkFlow") {
          y = t.events[j][1].end;
          break;
        }
      }
      x(r);
      let F = B;
      while (F < t.events.length) {
        t.events[F][1].end = {
          ...y,
        };
        F++;
      }
      re(t.events, j + 1, 0, t.events.slice(B));
      t.events.length = F;
      return s(S);
    }
    return a(S);
  }
  function s(S) {
    if (r === n.length) {
      if (!i) {
        return d(S);
      }
      if (i.currentConstruct && i.currentConstruct.concrete) {
        return w(S);
      }
      t.interrupt = !!i.currentConstruct && !i._gfmTableDynamicInterruptHack;
    }
    t.containerState = {};
    return e.check(Ot, o, f)(S);
  }
  function o(S) {
    if (i) {
      _();
    }
    x(r);
    return d(S);
  }
  function f(S) {
    t.parser.lazy[t.now().line] = r !== n.length;
    l = t.now().offset;
    return w(S);
  }
  function d(S) {
    t.containerState = {};
    return e.attempt(Ot, h, w)(S);
  }
  function h(S) {
    r++;
    n.push([t.currentConstruct, t.containerState]);
    return d(S);
  }
  function w(S) {
    if (S === null) {
      if (i) {
        _();
      }
      x(0);
      e.consume(S);
      return;
    }
    i = i || t.parser.flow(t.now());
    e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: u,
    });
    return E(S);
  }
  function E(S) {
    if (S === null) {
      I(e.exit("chunkFlow"), true);
      x(0);
      e.consume(S);
      return;
    }
    if (z(S)) {
      e.consume(S);
      I(e.exit("chunkFlow"));
      r = 0;
      t.interrupt = undefined;
      return a;
    } else {
      e.consume(S);
      return E;
    }
  }
  function I(S, B) {
    const j = t.sliceStream(S);
    if (B) {
      j.push(null);
    }
    S.previous = u;
    if (u) {
      u.next = S;
    }
    u = S;
    i.defineSkip(S.start);
    i.write(j);
    if (t.parser.lazy[S.start.line]) {
      let y = i.events.length;
      while (y--) {
        if (
          i.events[y][1].start.offset < l &&
          (!i.events[y][1].end || i.events[y][1].end.offset > l)
        ) {
          return;
        }
      }
      const F = t.events.length;
      let v = F;
      let D;
      let R;
      while (v--) {
        if (t.events[v][0] === "exit" && t.events[v][1].type === "chunkFlow") {
          if (D) {
            R = t.events[v][1].end;
            break;
          }
          D = true;
        }
      }
      x(r);
      y = F;
      while (y < t.events.length) {
        t.events[y][1].end = {
          ...R,
        };
        y++;
      }
      re(t.events, v + 1, 0, t.events.slice(F));
      t.events.length = y;
    }
  }
  function x(S) {
    let B = n.length;
    while (B-- > S) {
      const j = n[B];
      t.containerState = j[1];
      j[0].exit.call(t, e);
    }
    n.length = S;
  }
  function _() {
    i.write([null]);
    u = undefined;
    i = undefined;
    t.containerState._closeFlow = undefined;
  }
}
function Hr(e, t, n) {
  return H(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented")
      ? undefined
      : 4,
  );
}
function Bt(e) {
  if (e === null || Y(e) || Br(e)) {
    return 1;
  }
  if (Or(e)) {
    return 2;
  }
}
function pt(e, t, n) {
  const r = [];
  let i = -1;
  while (++i < e.length) {
    const u = e[i].resolveAll;
    if (u && !r.includes(u)) {
      t = u(t, n);
      r.push(u);
    }
  }
  return t;
}
const rt = {
  name: "attention",
  resolveAll: qr,
  tokenize: Ur,
};
function qr(e, t) {
  let n = -1;
  let r;
  let i;
  let u;
  let l;
  let a;
  let c;
  let s;
  let o;
  while (++n < e.length) {
    if (
      e[n][0] === "enter" &&
      e[n][1].type === "attentionSequence" &&
      e[n][1]._close
    ) {
      for (r = n; r--;) {
        if (
          e[r][0] === "exit" &&
          e[r][1].type === "attentionSequence" &&
          e[r][1]._open &&
          t.sliceSerialize(e[r][1]).charCodeAt(0) ===
            t.sliceSerialize(e[n][1]).charCodeAt(0)
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
          ) {
            continue;
          }
          c =
            e[r][1].end.offset - e[r][1].start.offset > 1 &&
            e[n][1].end.offset - e[n][1].start.offset > 1
              ? 2
              : 1;
          const f = {
            ...e[r][1].end,
          };
          const d = {
            ...e[n][1].start,
          };
          Mt(f, -c);
          Mt(d, c);
          l = {
            type: c > 1 ? "strongSequence" : "emphasisSequence",
            start: f,
            end: {
              ...e[r][1].end,
            },
          };
          a = {
            type: c > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[n][1].start,
            },
            end: d,
          };
          u = {
            type: c > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end,
            },
            end: {
              ...e[n][1].start,
            },
          };
          i = {
            type: c > 1 ? "strong" : "emphasis",
            start: {
              ...l.start,
            },
            end: {
              ...a.end,
            },
          };
          e[r][1].end = {
            ...l.start,
          };
          e[n][1].start = {
            ...a.end,
          };
          s = [];
          if (e[r][1].end.offset - e[r][1].start.offset) {
            s = G(s, [
              ["enter", e[r][1], t],
              ["exit", e[r][1], t],
            ]);
          }
          s = G(s, [
            ["enter", i, t],
            ["enter", l, t],
            ["exit", l, t],
            ["enter", u, t],
          ]);
          s = G(
            s,
            pt(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t),
          );
          s = G(s, [
            ["exit", u, t],
            ["enter", a, t],
            ["exit", a, t],
            ["exit", i, t],
          ]);
          if (e[n][1].end.offset - e[n][1].start.offset) {
            o = 2;
            s = G(s, [
              ["enter", e[n][1], t],
              ["exit", e[n][1], t],
            ]);
          } else {
            o = 0;
          }
          re(e, r - 1, n - r + 3, s);
          n = r + s.length - o - 2;
          break;
        }
      }
    }
  }
  for (n = -1; ++n < e.length;) {
    if (e[n][1].type === "attentionSequence") {
      e[n][1].type = "data";
    }
  }
  return e;
}
function Ur(e, t) {
  const n = this.parser.constructs.attentionMarkers.null;
  const r = this.previous;
  const i = Bt(r);
  let u;
  return l;
  function l(c) {
    u = c;
    e.enter("attentionSequence");
    return a(c);
  }
  function a(c) {
    if (c === u) {
      e.consume(c);
      return a;
    }
    const s = e.exit("attentionSequence");
    const o = Bt(c);
    const f = !o || (o === 2 && i) || n.includes(c);
    const d = !i || (i === 2 && o) || n.includes(r);
    s._open = !!(u === 42 ? f : f && (i || !d));
    s._close = !!(u === 42 ? d : d && (o || !f));
    return t(c);
  }
}
function Mt(e, t) {
  e.column += t;
  e.offset += t;
  e._bufferIndex += t;
}
const $r = {
  name: "autolink",
  tokenize: Qr,
};
function Qr(e, t, n) {
  let r = 0;
  return i;
  function i(h) {
    e.enter("autolink");
    e.enter("autolinkMarker");
    e.consume(h);
    e.exit("autolinkMarker");
    e.enter("autolinkProtocol");
    return u;
  }
  function u(h) {
    if (ne(h)) {
      e.consume(h);
      return l;
    } else if (h === 64) {
      return n(h);
    } else {
      return s(h);
    }
  }
  function l(h) {
    if (h === 43 || h === 45 || h === 46 || W(h)) {
      r = 1;
      return a(h);
    } else {
      return s(h);
    }
  }
  function a(h) {
    if (h === 58) {
      e.consume(h);
      r = 0;
      return c;
    } else if ((h === 43 || h === 45 || h === 46 || W(h)) && r++ < 32) {
      e.consume(h);
      return a;
    } else {
      r = 0;
      return s(h);
    }
  }
  function c(h) {
    if (h === 62) {
      e.exit("autolinkProtocol");
      e.enter("autolinkMarker");
      e.consume(h);
      e.exit("autolinkMarker");
      e.exit("autolink");
      return t;
    } else if (h === null || h === 32 || h === 60 || tt(h)) {
      return n(h);
    } else {
      e.consume(h);
      return c;
    }
  }
  function s(h) {
    if (h === 64) {
      e.consume(h);
      return o;
    } else if (Lr(h)) {
      e.consume(h);
      return s;
    } else {
      return n(h);
    }
  }
  function o(h) {
    if (W(h)) {
      return f(h);
    } else {
      return n(h);
    }
  }
  function f(h) {
    if (h === 46) {
      e.consume(h);
      r = 0;
      return o;
    } else if (h === 62) {
      e.exit("autolinkProtocol").type = "autolinkEmail";
      e.enter("autolinkMarker");
      e.consume(h);
      e.exit("autolinkMarker");
      e.exit("autolink");
      return t;
    } else {
      return d(h);
    }
  }
  function d(h) {
    if ((h === 45 || W(h)) && r++ < 63) {
      const w = h === 45 ? d : f;
      e.consume(h);
      return w;
    }
    return n(h);
  }
}
const je = {
  partial: true,
  tokenize: Yr,
};
function Yr(e, t, n) {
  return r;
  function r(u) {
    if (L(u)) {
      return H(e, i, "linePrefix")(u);
    } else {
      return i(u);
    }
  }
  function i(u) {
    if (u === null || z(u)) {
      return t(u);
    } else {
      return n(u);
    }
  }
}
const gn = {
  continuation: {
    tokenize: Wr,
  },
  exit: Gr,
  name: "blockQuote",
  tokenize: Xr,
};
function Xr(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    if (l === 62) {
      const a = r.containerState;
      if (!a.open) {
        e.enter("blockQuote", {
          _container: true,
        });
        a.open = true;
      }
      e.enter("blockQuotePrefix");
      e.enter("blockQuoteMarker");
      e.consume(l);
      e.exit("blockQuoteMarker");
      return u;
    }
    return n(l);
  }
  function u(l) {
    if (L(l)) {
      e.enter("blockQuotePrefixWhitespace");
      e.consume(l);
      e.exit("blockQuotePrefixWhitespace");
      e.exit("blockQuotePrefix");
      return t;
    } else {
      e.exit("blockQuotePrefix");
      return t(l);
    }
  }
}
function Wr(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    if (L(l)) {
      return H(
        e,
        u,
        "linePrefix",
        r.parser.constructs.disable.null.includes("codeIndented")
          ? undefined
          : 4,
      )(l);
    } else {
      return u(l);
    }
  }
  function u(l) {
    return e.attempt(gn, t, n)(l);
  }
}
function Gr(e) {
  e.exit("blockQuote");
}
const yn = {
  name: "characterEscape",
  tokenize: Jr,
};
function Jr(e, t, n) {
  return r;
  function r(u) {
    e.enter("characterEscape");
    e.enter("escapeMarker");
    e.consume(u);
    e.exit("escapeMarker");
    return i;
  }
  function i(u) {
    if (Rr(u)) {
      e.enter("characterEscapeValue");
      e.consume(u);
      e.exit("characterEscapeValue");
      e.exit("characterEscape");
      return t;
    } else {
      return n(u);
    }
  }
}
const xn = {
  name: "characterReference",
  tokenize: Kr,
};
function Kr(e, t, n) {
  const r = this;
  let i = 0;
  let u;
  let l;
  return a;
  function a(f) {
    e.enter("characterReference");
    e.enter("characterReferenceMarker");
    e.consume(f);
    e.exit("characterReferenceMarker");
    return c;
  }
  function c(f) {
    if (f === 35) {
      e.enter("characterReferenceMarkerNumeric");
      e.consume(f);
      e.exit("characterReferenceMarkerNumeric");
      return s;
    } else {
      e.enter("characterReferenceValue");
      u = 31;
      l = W;
      return o(f);
    }
  }
  function s(f) {
    if (f === 88 || f === 120) {
      e.enter("characterReferenceMarkerHexadecimal");
      e.consume(f);
      e.exit("characterReferenceMarkerHexadecimal");
      e.enter("characterReferenceValue");
      u = 6;
      l = Dr;
      return o;
    } else {
      e.enter("characterReferenceValue");
      u = 7;
      l = nt;
      return o(f);
    }
  }
  function o(f) {
    if (f === 59 && i) {
      const d = e.exit("characterReferenceValue");
      if (l === W && !ht(r.sliceSerialize(d))) {
        return n(f);
      } else {
        e.enter("characterReferenceMarker");
        e.consume(f);
        e.exit("characterReferenceMarker");
        e.exit("characterReference");
        return t;
      }
    }
    if (l(f) && i++ < u) {
      e.consume(f);
      return o;
    } else {
      return n(f);
    }
  }
}
const jt = {
  partial: true,
  tokenize: ei,
};
const vt = {
  concrete: true,
  name: "codeFenced",
  tokenize: Zr,
};
function Zr(e, t, n) {
  const r = this;
  const i = {
    partial: true,
    tokenize: j,
  };
  let u = 0;
  let l = 0;
  let a;
  return c;
  function c(y) {
    return s(y);
  }
  function s(y) {
    const F = r.events[r.events.length - 1];
    u =
      F && F[1].type === "linePrefix"
        ? F[2].sliceSerialize(F[1], true).length
        : 0;
    a = y;
    e.enter("codeFenced");
    e.enter("codeFencedFence");
    e.enter("codeFencedFenceSequence");
    return o(y);
  }
  function o(y) {
    if (y === a) {
      l++;
      e.consume(y);
      return o;
    } else if (l < 3) {
      return n(y);
    } else {
      e.exit("codeFencedFenceSequence");
      if (L(y)) {
        return H(e, f, "whitespace")(y);
      } else {
        return f(y);
      }
    }
  }
  function f(y) {
    if (y === null || z(y)) {
      e.exit("codeFencedFence");
      if (r.interrupt) {
        return t(y);
      } else {
        return e.check(jt, E, B)(y);
      }
    } else {
      e.enter("codeFencedFenceInfo");
      e.enter("chunkString", {
        contentType: "string",
      });
      return d(y);
    }
  }
  function d(y) {
    if (y === null || z(y)) {
      e.exit("chunkString");
      e.exit("codeFencedFenceInfo");
      return f(y);
    } else if (L(y)) {
      e.exit("chunkString");
      e.exit("codeFencedFenceInfo");
      return H(e, h, "whitespace")(y);
    } else if (y === 96 && y === a) {
      return n(y);
    } else {
      e.consume(y);
      return d;
    }
  }
  function h(y) {
    if (y === null || z(y)) {
      return f(y);
    } else {
      e.enter("codeFencedFenceMeta");
      e.enter("chunkString", {
        contentType: "string",
      });
      return w(y);
    }
  }
  function w(y) {
    if (y === null || z(y)) {
      e.exit("chunkString");
      e.exit("codeFencedFenceMeta");
      return f(y);
    } else if (y === 96 && y === a) {
      return n(y);
    } else {
      e.consume(y);
      return w;
    }
  }
  function E(y) {
    return e.attempt(i, B, I)(y);
  }
  function I(y) {
    e.enter("lineEnding");
    e.consume(y);
    e.exit("lineEnding");
    return x;
  }
  function x(y) {
    if (u > 0 && L(y)) {
      return H(e, _, "linePrefix", u + 1)(y);
    } else {
      return _(y);
    }
  }
  function _(y) {
    if (y === null || z(y)) {
      return e.check(jt, E, B)(y);
    } else {
      e.enter("codeFlowValue");
      return S(y);
    }
  }
  function S(y) {
    if (y === null || z(y)) {
      e.exit("codeFlowValue");
      return _(y);
    } else {
      e.consume(y);
      return S;
    }
  }
  function B(y) {
    e.exit("codeFenced");
    return t(y);
  }
  function j(y, F, v) {
    let D = 0;
    return R;
    function R(b) {
      y.enter("lineEnding");
      y.consume(b);
      y.exit("lineEnding");
      return T;
    }
    function T(b) {
      y.enter("codeFencedFence");
      if (L(b)) {
        return H(
          y,
          C,
          "linePrefix",
          r.parser.constructs.disable.null.includes("codeIndented")
            ? undefined
            : 4,
        )(b);
      } else {
        return C(b);
      }
    }
    function C(b) {
      if (b === a) {
        y.enter("codeFencedFenceSequence");
        return V(b);
      } else {
        return v(b);
      }
    }
    function V(b) {
      if (b === a) {
        D++;
        y.consume(b);
        return V;
      } else if (D >= l) {
        y.exit("codeFencedFenceSequence");
        if (L(b)) {
          return H(y, A, "whitespace")(b);
        } else {
          return A(b);
        }
      } else {
        return v(b);
      }
    }
    function A(b) {
      if (b === null || z(b)) {
        y.exit("codeFencedFence");
        return F(b);
      } else {
        return v(b);
      }
    }
  }
}
function ei(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    if (l === null) {
      return n(l);
    } else {
      e.enter("lineEnding");
      e.consume(l);
      e.exit("lineEnding");
      return u;
    }
  }
  function u(l) {
    if (r.parser.lazy[r.now().line]) {
      return n(l);
    } else {
      return t(l);
    }
  }
}
const Ue = {
  name: "codeIndented",
  tokenize: ni,
};
const ti = {
  partial: true,
  tokenize: ri,
};
function ni(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    e.enter("codeIndented");
    return H(e, u, "linePrefix", 5)(s);
  }
  function u(s) {
    const o = r.events[r.events.length - 1];
    if (
      o &&
      o[1].type === "linePrefix" &&
      o[2].sliceSerialize(o[1], true).length >= 4
    ) {
      return l(s);
    } else {
      return n(s);
    }
  }
  function l(s) {
    if (s === null) {
      return c(s);
    } else if (z(s)) {
      return e.attempt(ti, l, c)(s);
    } else {
      e.enter("codeFlowValue");
      return a(s);
    }
  }
  function a(s) {
    if (s === null || z(s)) {
      e.exit("codeFlowValue");
      return l(s);
    } else {
      e.consume(s);
      return a;
    }
  }
  function c(s) {
    e.exit("codeIndented");
    return t(s);
  }
}
function ri(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    if (r.parser.lazy[r.now().line]) {
      return n(l);
    } else if (z(l)) {
      e.enter("lineEnding");
      e.consume(l);
      e.exit("lineEnding");
      return i;
    } else {
      return H(e, u, "linePrefix", 5)(l);
    }
  }
  function u(l) {
    const a = r.events[r.events.length - 1];
    if (
      a &&
      a[1].type === "linePrefix" &&
      a[2].sliceSerialize(a[1], true).length >= 4
    ) {
      return t(l);
    } else if (z(l)) {
      return i(l);
    } else {
      return n(l);
    }
  }
}
const ii = {
  name: "codeText",
  previous: li,
  resolve: ui,
  tokenize: ai,
};
function ui(e) {
  let t = e.length - 4;
  let n = 3;
  let r;
  let i;
  if (
    (e[n][1].type === "lineEnding" || e[n][1].type === "space") &&
    (e[t][1].type === "lineEnding" || e[t][1].type === "space")
  ) {
    for (r = n; ++r < t;) {
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding";
        e[t][1].type = "codeTextPadding";
        n += 2;
        t -= 2;
        break;
      }
    }
  }
  r = n - 1;
  t++;
  while (++r <= t) {
    if (i === undefined) {
      if (r !== t && e[r][1].type !== "lineEnding") {
        i = r;
      }
    } else if (r === t || e[r][1].type === "lineEnding") {
      e[i][1].type = "codeTextData";
      if (r !== i + 2) {
        e[i][1].end = e[r - 1][1].end;
        e.splice(i + 2, r - i - 2);
        t -= r - i - 2;
        r = i + 2;
      }
      i = undefined;
    }
  }
  return e;
}
function li(e) {
  return (
    e !== 96 ||
    this.events[this.events.length - 1][1].type === "characterEscape"
  );
}
function ai(e, t, n) {
  let r = 0;
  let i;
  let u;
  return l;
  function l(f) {
    e.enter("codeText");
    e.enter("codeTextSequence");
    return a(f);
  }
  function a(f) {
    if (f === 96) {
      e.consume(f);
      r++;
      return a;
    } else {
      e.exit("codeTextSequence");
      return c(f);
    }
  }
  function c(f) {
    if (f === null) {
      return n(f);
    } else if (f === 32) {
      e.enter("space");
      e.consume(f);
      e.exit("space");
      return c;
    } else if (f === 96) {
      u = e.enter("codeTextSequence");
      i = 0;
      return o(f);
    } else if (z(f)) {
      e.enter("lineEnding");
      e.consume(f);
      e.exit("lineEnding");
      return c;
    } else {
      e.enter("codeTextData");
      return s(f);
    }
  }
  function s(f) {
    if (f === null || f === 32 || f === 96 || z(f)) {
      e.exit("codeTextData");
      return c(f);
    } else {
      e.consume(f);
      return s;
    }
  }
  function o(f) {
    if (f === 96) {
      e.consume(f);
      i++;
      return o;
    } else if (i === r) {
      e.exit("codeTextSequence");
      e.exit("codeText");
      return t(f);
    } else {
      u.type = "codeTextData";
      return s(f);
    }
  }
}
class si {
  constructor(t) {
    this.left = t ? [...t] : [];
    this.right = [];
  }
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length) {
      throw new RangeError(
        "Cannot access index `" +
          t +
          "` in a splice buffer of size `" +
          (this.left.length + this.right.length) +
          "`",
      );
    }
    if (t < this.left.length) {
      return this.left[t];
    } else {
      return this.right[this.right.length - t + this.left.length - 1];
    }
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    this.setCursor(0);
    return this.right.pop();
  }
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    if (r < this.left.length) {
      return this.left.slice(t, r);
    } else if (t > this.left.length) {
      return this.right
        .slice(
          this.right.length - r + this.left.length,
          this.right.length - t + this.left.length,
        )
        .reverse();
    } else {
      return this.left
        .slice(t)
        .concat(
          this.right.slice(this.right.length - r + this.left.length).reverse(),
        );
    }
  }
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const u = this.right.splice(
      this.right.length - i,
      Number.POSITIVE_INFINITY,
    );
    if (r) {
      Ce(this.left, r);
    }
    return u.reverse();
  }
  pop() {
    this.setCursor(Number.POSITIVE_INFINITY);
    return this.left.pop();
  }
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY);
    this.left.push(t);
  }
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY);
    Ce(this.left, t);
  }
  unshift(t) {
    this.setCursor(0);
    this.right.push(t);
  }
  unshiftMany(t) {
    this.setCursor(0);
    Ce(this.right, t.reverse());
  }
  setCursor(t) {
    if (
      t !== this.left.length &&
      (!(t > this.left.length) || this.right.length !== 0) &&
      (!(t < 0) || this.left.length !== 0)
    ) {
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
}
function Ce(e, t) {
  let n = 0;
  if (t.length < 10000) {
    e.push(...t);
  } else {
    while (n < t.length) {
      e.push(...t.slice(n, n + 10000));
      n += 10000;
    }
  }
}
function kn(e) {
  const t = {};
  let n = -1;
  let r;
  let i;
  let u;
  let l;
  let a;
  let c;
  let s;
  const o = new si(e);
  while (++n < o.length) {
    while (n in t) {
      n = t[n];
    }
    r = o.get(n);
    if (
      n &&
      r[1].type === "chunkFlow" &&
      o.get(n - 1)[1].type === "listItemPrefix" &&
      ((c = r[1]._tokenizer.events),
      (u = 0),
      u < c.length && c[u][1].type === "lineEndingBlank" && (u += 2),
      u < c.length && c[u][1].type === "content")
    ) {
      while (++u < c.length && c[u][1].type !== "content") {
        if (c[u][1].type === "chunkText") {
          c[u][1]._isInFirstContentOfListItem = true;
          u++;
        }
      }
    }
    if (r[0] === "enter") {
      if (r[1].contentType) {
        Object.assign(t, oi(o, n));
        n = t[n];
        s = true;
      }
    } else if (r[1]._container) {
      u = n;
      i = undefined;
      while (u--) {
        l = o.get(u);
        if (l[1].type === "lineEnding" || l[1].type === "lineEndingBlank") {
          if (l[0] === "enter") {
            if (i) {
              o.get(i)[1].type = "lineEndingBlank";
            }
            l[1].type = "lineEnding";
            i = u;
          }
        } else if (
          l[1].type !== "linePrefix" &&
          l[1].type !== "listItemIndent"
        ) {
          break;
        }
      }
      if (i) {
        r[1].end = {
          ...o.get(i)[1].start,
        };
        a = o.slice(i, n);
        a.unshift(r);
        o.splice(i, n - i + 1, a);
      }
    }
  }
  re(e, 0, Number.POSITIVE_INFINITY, o.slice(0));
  return !s;
}
function oi(e, t) {
  const n = e.get(t)[1];
  const r = e.get(t)[2];
  let i = t - 1;
  const u = [];
  let l = n._tokenizer;
  if (!l) {
    l = r.parser[n.contentType](n.start);
    if (n._contentTypeTextTrailing) {
      l._contentTypeTextTrailing = true;
    }
  }
  const a = l.events;
  const c = [];
  const s = {};
  let o;
  let f;
  let d = -1;
  let h = n;
  let w = 0;
  let E = 0;
  const I = [E];
  while (h) {
    while (e.get(++i)[1] !== h);
    u.push(i);
    if (!h._tokenizer) {
      o = r.sliceStream(h);
      if (!h.next) {
        o.push(null);
      }
      if (f) {
        l.defineSkip(h.start);
      }
      if (h._isInFirstContentOfListItem) {
        l._gfmTasklistFirstContentOfListItem = true;
      }
      l.write(o);
      if (h._isInFirstContentOfListItem) {
        l._gfmTasklistFirstContentOfListItem = undefined;
      }
    }
    f = h;
    h = h.next;
  }
  for (h = n; ++d < a.length;) {
    if (
      a[d][0] === "exit" &&
      a[d - 1][0] === "enter" &&
      a[d][1].type === a[d - 1][1].type &&
      a[d][1].start.line !== a[d][1].end.line
    ) {
      E = d + 1;
      I.push(E);
      h._tokenizer = undefined;
      h.previous = undefined;
      h = h.next;
    }
  }
  l.events = [];
  if (h) {
    h._tokenizer = undefined;
    h.previous = undefined;
  } else {
    I.pop();
  }
  d = I.length;
  while (d--) {
    const x = a.slice(I[d], I[d + 1]);
    const _ = u.pop();
    c.push([_, _ + x.length - 1]);
    e.splice(_, 2, x);
  }
  c.reverse();
  d = -1;
  while (++d < c.length) {
    s[w + c[d][0]] = w + c[d][1];
    w += c[d][1] - c[d][0] - 1;
  }
  return s;
}
const ci = {
  resolve: hi,
  tokenize: pi,
};
const fi = {
  partial: true,
  tokenize: mi,
};
function hi(e) {
  kn(e);
  return e;
}
function pi(e, t) {
  let n;
  return r;
  function r(a) {
    e.enter("content");
    n = e.enter("chunkContent", {
      contentType: "content",
    });
    return i(a);
  }
  function i(a) {
    if (a === null) {
      return u(a);
    } else if (z(a)) {
      return e.check(fi, l, u)(a);
    } else {
      e.consume(a);
      return i;
    }
  }
  function u(a) {
    e.exit("chunkContent");
    e.exit("content");
    return t(a);
  }
  function l(a) {
    e.consume(a);
    e.exit("chunkContent");
    n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n,
    });
    n = n.next;
    return i;
  }
}
function mi(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    e.exit("chunkContent");
    e.enter("lineEnding");
    e.consume(l);
    e.exit("lineEnding");
    return H(e, u, "linePrefix");
  }
  function u(l) {
    if (l === null || z(l)) {
      return n(l);
    }
    const a = r.events[r.events.length - 1];
    if (
      !r.parser.constructs.disable.null.includes("codeIndented") &&
      a &&
      a[1].type === "linePrefix" &&
      a[2].sliceSerialize(a[1], true).length >= 4
    ) {
      return t(l);
    } else {
      return e.interrupt(r.parser.constructs.flow, n, t)(l);
    }
  }
}
function wn(e, t, n, r, i, u, l, a, c) {
  const s = c || Number.POSITIVE_INFINITY;
  let o = 0;
  return f;
  function f(x) {
    if (x === 60) {
      e.enter(r);
      e.enter(i);
      e.enter(u);
      e.consume(x);
      e.exit(u);
      return d;
    } else if (x === null || x === 32 || x === 41 || tt(x)) {
      return n(x);
    } else {
      e.enter(r);
      e.enter(l);
      e.enter(a);
      e.enter("chunkString", {
        contentType: "string",
      });
      return E(x);
    }
  }
  function d(x) {
    if (x === 62) {
      e.enter(u);
      e.consume(x);
      e.exit(u);
      e.exit(i);
      e.exit(r);
      return t;
    } else {
      e.enter(a);
      e.enter("chunkString", {
        contentType: "string",
      });
      return h(x);
    }
  }
  function h(x) {
    if (x === 62) {
      e.exit("chunkString");
      e.exit(a);
      return d(x);
    } else if (x === null || x === 60 || z(x)) {
      return n(x);
    } else {
      e.consume(x);
      if (x === 92) {
        return w;
      } else {
        return h;
      }
    }
  }
  function w(x) {
    if (x === 60 || x === 62 || x === 92) {
      e.consume(x);
      return h;
    } else {
      return h(x);
    }
  }
  function E(x) {
    if (!o && (x === null || x === 41 || Y(x))) {
      e.exit("chunkString");
      e.exit(a);
      e.exit(l);
      e.exit(r);
      return t(x);
    } else if (o < s && x === 40) {
      e.consume(x);
      o++;
      return E;
    } else if (x === 41) {
      e.consume(x);
      o--;
      return E;
    } else if (x === null || x === 32 || x === 40 || tt(x)) {
      return n(x);
    } else {
      e.consume(x);
      if (x === 92) {
        return I;
      } else {
        return E;
      }
    }
  }
  function I(x) {
    if (x === 40 || x === 41 || x === 92) {
      e.consume(x);
      return E;
    } else {
      return E(x);
    }
  }
}
function bn(e, t, n, r, i, u) {
  const l = this;
  let a = 0;
  let c;
  return s;
  function s(h) {
    e.enter(r);
    e.enter(i);
    e.consume(h);
    e.exit(i);
    e.enter(u);
    return o;
  }
  function o(h) {
    if (
      a > 999 ||
      h === null ||
      h === 91 ||
      (h === 93 && !c) ||
      (h === 94 && !a && "_hiddenFootnoteSupport" in l.parser.constructs)
    ) {
      return n(h);
    } else if (h === 93) {
      e.exit(u);
      e.enter(i);
      e.consume(h);
      e.exit(i);
      e.exit(r);
      return t;
    } else if (z(h)) {
      e.enter("lineEnding");
      e.consume(h);
      e.exit("lineEnding");
      return o;
    } else {
      e.enter("chunkString", {
        contentType: "string",
      });
      return f(h);
    }
  }
  function f(h) {
    if (h === null || h === 91 || h === 93 || z(h) || a++ > 999) {
      e.exit("chunkString");
      return o(h);
    } else {
      e.consume(h);
      c ||= !L(h);
      if (h === 92) {
        return d;
      } else {
        return f;
      }
    }
  }
  function d(h) {
    if (h === 91 || h === 92 || h === 93) {
      e.consume(h);
      a++;
      return f;
    } else {
      return f(h);
    }
  }
}
function Sn(e, t, n, r, i, u) {
  let l;
  return a;
  function a(d) {
    if (d === 34 || d === 39 || d === 40) {
      e.enter(r);
      e.enter(i);
      e.consume(d);
      e.exit(i);
      l = d === 40 ? 41 : d;
      return c;
    } else {
      return n(d);
    }
  }
  function c(d) {
    if (d === l) {
      e.enter(i);
      e.consume(d);
      e.exit(i);
      e.exit(r);
      return t;
    } else {
      e.enter(u);
      return s(d);
    }
  }
  function s(d) {
    if (d === l) {
      e.exit(u);
      return c(l);
    } else if (d === null) {
      return n(d);
    } else if (z(d)) {
      e.enter("lineEnding");
      e.consume(d);
      e.exit("lineEnding");
      return H(e, s, "linePrefix");
    } else {
      e.enter("chunkString", {
        contentType: "string",
      });
      return o(d);
    }
  }
  function o(d) {
    if (d === l || d === null || z(d)) {
      e.exit("chunkString");
      return s(d);
    } else {
      e.consume(d);
      if (d === 92) {
        return f;
      } else {
        return o;
      }
    }
  }
  function f(d) {
    if (d === l || d === 92) {
      e.consume(d);
      return o;
    } else {
      return o(d);
    }
  }
}
function ze(e, t) {
  let n;
  return r;
  function r(i) {
    if (z(i)) {
      e.enter("lineEnding");
      e.consume(i);
      e.exit("lineEnding");
      n = true;
      return r;
    } else if (L(i)) {
      return H(e, r, n ? "linePrefix" : "lineSuffix")(i);
    } else {
      return t(i);
    }
  }
}
const di = {
  name: "definition",
  tokenize: yi,
};
const gi = {
  partial: true,
  tokenize: xi,
};
function yi(e, t, n) {
  const r = this;
  let i;
  return u;
  function u(h) {
    e.enter("definition");
    return l(h);
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
    i = xe(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1));
    if (h === 58) {
      e.enter("definitionMarker");
      e.consume(h);
      e.exit("definitionMarker");
      return c;
    } else {
      return n(h);
    }
  }
  function c(h) {
    if (Y(h)) {
      return ze(e, s)(h);
    } else {
      return s(h);
    }
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
    if (L(h)) {
      return H(e, d, "whitespace")(h);
    } else {
      return d(h);
    }
  }
  function d(h) {
    if (h === null || z(h)) {
      e.exit("definition");
      r.parser.defined.push(i);
      return t(h);
    } else {
      return n(h);
    }
  }
}
function xi(e, t, n) {
  return r;
  function r(a) {
    if (Y(a)) {
      return ze(e, i)(a);
    } else {
      return n(a);
    }
  }
  function i(a) {
    return Sn(
      e,
      u,
      n,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString",
    )(a);
  }
  function u(a) {
    if (L(a)) {
      return H(e, l, "whitespace")(a);
    } else {
      return l(a);
    }
  }
  function l(a) {
    if (a === null || z(a)) {
      return t(a);
    } else {
      return n(a);
    }
  }
}
const ki = {
  name: "hardBreakEscape",
  tokenize: wi,
};
function wi(e, t, n) {
  return r;
  function r(u) {
    e.enter("hardBreakEscape");
    e.consume(u);
    return i;
  }
  function i(u) {
    if (z(u)) {
      e.exit("hardBreakEscape");
      return t(u);
    } else {
      return n(u);
    }
  }
}
const bi = {
  name: "headingAtx",
  resolve: Si,
  tokenize: Ei,
};
function Si(e, t) {
  let n = e.length - 2;
  let r = 3;
  let i;
  let u;
  if (e[r][1].type === "whitespace") {
    r += 2;
  }
  if (n - 2 > r && e[n][1].type === "whitespace") {
    n -= 2;
  }
  if (
    e[n][1].type === "atxHeadingSequence" &&
    (r === n - 1 || (n - 4 > r && e[n - 2][1].type === "whitespace"))
  ) {
    n -= r + 1 === n ? 2 : 4;
  }
  if (n > r) {
    i = {
      type: "atxHeadingText",
      start: e[r][1].start,
      end: e[n][1].end,
    };
    u = {
      type: "chunkText",
      start: e[r][1].start,
      end: e[n][1].end,
      contentType: "text",
    };
    re(e, r, n - r + 1, [
      ["enter", i, t],
      ["enter", u, t],
      ["exit", u, t],
      ["exit", i, t],
    ]);
  }
  return e;
}
function Ei(e, t, n) {
  let r = 0;
  return i;
  function i(o) {
    e.enter("atxHeading");
    return u(o);
  }
  function u(o) {
    e.enter("atxHeadingSequence");
    return l(o);
  }
  function l(o) {
    if (o === 35 && r++ < 6) {
      e.consume(o);
      return l;
    } else if (o === null || Y(o)) {
      e.exit("atxHeadingSequence");
      return a(o);
    } else {
      return n(o);
    }
  }
  function a(o) {
    if (o === 35) {
      e.enter("atxHeadingSequence");
      return c(o);
    } else if (o === null || z(o)) {
      e.exit("atxHeading");
      return t(o);
    } else if (L(o)) {
      return H(e, a, "whitespace")(o);
    } else {
      e.enter("atxHeadingText");
      return s(o);
    }
  }
  function c(o) {
    if (o === 35) {
      e.consume(o);
      return c;
    } else {
      e.exit("atxHeadingSequence");
      return a(o);
    }
  }
  function s(o) {
    if (o === null || o === 35 || Y(o)) {
      e.exit("atxHeadingText");
      return a(o);
    } else {
      e.consume(o);
      return s;
    }
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
];
const Vt = ["pre", "script", "style", "textarea"];
const Ci = {
  concrete: true,
  name: "htmlFlow",
  resolveTo: zi,
  tokenize: _i,
};
const Ti = {
  partial: true,
  tokenize: Ni,
};
const Ai = {
  partial: true,
  tokenize: Pi,
};
function zi(e) {
  let t = e.length;
  while (t-- && (e[t][0] !== "enter" || e[t][1].type !== "htmlFlow"));
  if (t > 1 && e[t - 2][1].type === "linePrefix") {
    e[t][1].start = e[t - 2][1].start;
    e[t + 1][1].start = e[t - 2][1].start;
    e.splice(t - 2, 2);
  }
  return e;
}
function _i(e, t, n) {
  const r = this;
  let i;
  let u;
  let l;
  let a;
  let c;
  return s;
  function s(m) {
    return o(m);
  }
  function o(m) {
    e.enter("htmlFlow");
    e.enter("htmlFlowData");
    e.consume(m);
    return f;
  }
  function f(m) {
    if (m === 33) {
      e.consume(m);
      return d;
    } else if (m === 47) {
      e.consume(m);
      u = true;
      return E;
    } else if (m === 63) {
      e.consume(m);
      i = 3;
      if (r.interrupt) {
        return t;
      } else {
        return p;
      }
    } else if (ne(m)) {
      e.consume(m);
      l = String.fromCharCode(m);
      return I;
    } else {
      return n(m);
    }
  }
  function d(m) {
    if (m === 45) {
      e.consume(m);
      i = 2;
      return h;
    } else if (m === 91) {
      e.consume(m);
      i = 5;
      a = 0;
      return w;
    } else if (ne(m)) {
      e.consume(m);
      i = 4;
      if (r.interrupt) {
        return t;
      } else {
        return p;
      }
    } else {
      return n(m);
    }
  }
  function h(m) {
    if (m === 45) {
      e.consume(m);
      if (r.interrupt) {
        return t;
      } else {
        return p;
      }
    } else {
      return n(m);
    }
  }
  function w(m) {
    const Z = "CDATA[";
    if (m === Z.charCodeAt(a++)) {
      e.consume(m);
      if (a === Z.length) {
        if (r.interrupt) {
          return t;
        } else {
          return C;
        }
      } else {
        return w;
      }
    } else {
      return n(m);
    }
  }
  function E(m) {
    if (ne(m)) {
      e.consume(m);
      l = String.fromCharCode(m);
      return I;
    } else {
      return n(m);
    }
  }
  function I(m) {
    if (m === null || m === 47 || m === 62 || Y(m)) {
      const Z = m === 47;
      const fe = l.toLowerCase();
      if (!Z && !u && Vt.includes(fe)) {
        i = 1;
        if (r.interrupt) {
          return t(m);
        } else {
          return C(m);
        }
      } else if (Ii.includes(l.toLowerCase())) {
        i = 6;
        if (Z) {
          e.consume(m);
          return x;
        } else if (r.interrupt) {
          return t(m);
        } else {
          return C(m);
        }
      } else {
        i = 7;
        if (r.interrupt && !r.parser.lazy[r.now().line]) {
          return n(m);
        } else if (u) {
          return _(m);
        } else {
          return S(m);
        }
      }
    }
    if (m === 45 || W(m)) {
      e.consume(m);
      l += String.fromCharCode(m);
      return I;
    } else {
      return n(m);
    }
  }
  function x(m) {
    if (m === 62) {
      e.consume(m);
      if (r.interrupt) {
        return t;
      } else {
        return C;
      }
    } else {
      return n(m);
    }
  }
  function _(m) {
    if (L(m)) {
      e.consume(m);
      return _;
    } else {
      return R(m);
    }
  }
  function S(m) {
    if (m === 47) {
      e.consume(m);
      return R;
    } else if (m === 58 || m === 95 || ne(m)) {
      e.consume(m);
      return B;
    } else if (L(m)) {
      e.consume(m);
      return S;
    } else {
      return R(m);
    }
  }
  function B(m) {
    if (m === 45 || m === 46 || m === 58 || m === 95 || W(m)) {
      e.consume(m);
      return B;
    } else {
      return j(m);
    }
  }
  function j(m) {
    if (m === 61) {
      e.consume(m);
      return y;
    } else if (L(m)) {
      e.consume(m);
      return j;
    } else {
      return S(m);
    }
  }
  function y(m) {
    if (m === null || m === 60 || m === 61 || m === 62 || m === 96) {
      return n(m);
    } else if (m === 34 || m === 39) {
      e.consume(m);
      c = m;
      return F;
    } else if (L(m)) {
      e.consume(m);
      return y;
    } else {
      return v(m);
    }
  }
  function F(m) {
    if (m === c) {
      e.consume(m);
      c = null;
      return D;
    } else if (m === null || z(m)) {
      return n(m);
    } else {
      e.consume(m);
      return F;
    }
  }
  function v(m) {
    if (
      m === null ||
      m === 34 ||
      m === 39 ||
      m === 47 ||
      m === 60 ||
      m === 61 ||
      m === 62 ||
      m === 96 ||
      Y(m)
    ) {
      return j(m);
    } else {
      e.consume(m);
      return v;
    }
  }
  function D(m) {
    if (m === 47 || m === 62 || L(m)) {
      return S(m);
    } else {
      return n(m);
    }
  }
  function R(m) {
    if (m === 62) {
      e.consume(m);
      return T;
    } else {
      return n(m);
    }
  }
  function T(m) {
    if (m === null || z(m)) {
      return C(m);
    } else if (L(m)) {
      e.consume(m);
      return T;
    } else {
      return n(m);
    }
  }
  function C(m) {
    if (m === 45 && i === 2) {
      e.consume(m);
      return O;
    } else if (m === 60 && i === 1) {
      e.consume(m);
      return q;
    } else if (m === 62 && i === 4) {
      e.consume(m);
      return K;
    } else if (m === 63 && i === 3) {
      e.consume(m);
      return p;
    } else if (m === 93 && i === 5) {
      e.consume(m);
      return ie;
    } else if (z(m) && (i === 6 || i === 7)) {
      e.exit("htmlFlowData");
      return e.check(Ti, ue, V)(m);
    } else if (m === null || z(m)) {
      e.exit("htmlFlowData");
      return V(m);
    } else {
      e.consume(m);
      return C;
    }
  }
  function V(m) {
    return e.check(Ai, A, ue)(m);
  }
  function A(m) {
    e.enter("lineEnding");
    e.consume(m);
    e.exit("lineEnding");
    return b;
  }
  function b(m) {
    if (m === null || z(m)) {
      return V(m);
    } else {
      e.enter("htmlFlowData");
      return C(m);
    }
  }
  function O(m) {
    if (m === 45) {
      e.consume(m);
      return p;
    } else {
      return C(m);
    }
  }
  function q(m) {
    if (m === 47) {
      e.consume(m);
      l = "";
      return J;
    } else {
      return C(m);
    }
  }
  function J(m) {
    if (m === 62) {
      const Z = l.toLowerCase();
      if (Vt.includes(Z)) {
        e.consume(m);
        return K;
      } else {
        return C(m);
      }
    }
    if (ne(m) && l.length < 8) {
      e.consume(m);
      l += String.fromCharCode(m);
      return J;
    } else {
      return C(m);
    }
  }
  function ie(m) {
    if (m === 93) {
      e.consume(m);
      return p;
    } else {
      return C(m);
    }
  }
  function p(m) {
    if (m === 62) {
      e.consume(m);
      return K;
    } else if (m === 45 && i === 2) {
      e.consume(m);
      return p;
    } else {
      return C(m);
    }
  }
  function K(m) {
    if (m === null || z(m)) {
      e.exit("htmlFlowData");
      return ue(m);
    } else {
      e.consume(m);
      return K;
    }
  }
  function ue(m) {
    e.exit("htmlFlow");
    return t(m);
  }
}
function Pi(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    if (z(l)) {
      e.enter("lineEnding");
      e.consume(l);
      e.exit("lineEnding");
      return u;
    } else {
      return n(l);
    }
  }
  function u(l) {
    if (r.parser.lazy[r.now().line]) {
      return n(l);
    } else {
      return t(l);
    }
  }
}
function Ni(e, t, n) {
  return r;
  function r(i) {
    e.enter("lineEnding");
    e.consume(i);
    e.exit("lineEnding");
    return e.attempt(je, t, n);
  }
}
const Fi = {
  name: "htmlText",
  tokenize: Li,
};
function Li(e, t, n) {
  const r = this;
  let i;
  let u;
  let l;
  return a;
  function a(p) {
    e.enter("htmlText");
    e.enter("htmlTextData");
    e.consume(p);
    return c;
  }
  function c(p) {
    if (p === 33) {
      e.consume(p);
      return s;
    } else if (p === 47) {
      e.consume(p);
      return j;
    } else if (p === 63) {
      e.consume(p);
      return S;
    } else if (ne(p)) {
      e.consume(p);
      return v;
    } else {
      return n(p);
    }
  }
  function s(p) {
    if (p === 45) {
      e.consume(p);
      return o;
    } else if (p === 91) {
      e.consume(p);
      u = 0;
      return w;
    } else if (ne(p)) {
      e.consume(p);
      return _;
    } else {
      return n(p);
    }
  }
  function o(p) {
    if (p === 45) {
      e.consume(p);
      return h;
    } else {
      return n(p);
    }
  }
  function f(p) {
    if (p === null) {
      return n(p);
    } else if (p === 45) {
      e.consume(p);
      return d;
    } else if (z(p)) {
      l = f;
      return q(p);
    } else {
      e.consume(p);
      return f;
    }
  }
  function d(p) {
    if (p === 45) {
      e.consume(p);
      return h;
    } else {
      return f(p);
    }
  }
  function h(p) {
    if (p === 62) {
      return O(p);
    } else if (p === 45) {
      return d(p);
    } else {
      return f(p);
    }
  }
  function w(p) {
    const K = "CDATA[";
    if (p === K.charCodeAt(u++)) {
      e.consume(p);
      if (u === K.length) {
        return E;
      } else {
        return w;
      }
    } else {
      return n(p);
    }
  }
  function E(p) {
    if (p === null) {
      return n(p);
    } else if (p === 93) {
      e.consume(p);
      return I;
    } else if (z(p)) {
      l = E;
      return q(p);
    } else {
      e.consume(p);
      return E;
    }
  }
  function I(p) {
    if (p === 93) {
      e.consume(p);
      return x;
    } else {
      return E(p);
    }
  }
  function x(p) {
    if (p === 62) {
      return O(p);
    } else if (p === 93) {
      e.consume(p);
      return x;
    } else {
      return E(p);
    }
  }
  function _(p) {
    if (p === null || p === 62) {
      return O(p);
    } else if (z(p)) {
      l = _;
      return q(p);
    } else {
      e.consume(p);
      return _;
    }
  }
  function S(p) {
    if (p === null) {
      return n(p);
    } else if (p === 63) {
      e.consume(p);
      return B;
    } else if (z(p)) {
      l = S;
      return q(p);
    } else {
      e.consume(p);
      return S;
    }
  }
  function B(p) {
    if (p === 62) {
      return O(p);
    } else {
      return S(p);
    }
  }
  function j(p) {
    if (ne(p)) {
      e.consume(p);
      return y;
    } else {
      return n(p);
    }
  }
  function y(p) {
    if (p === 45 || W(p)) {
      e.consume(p);
      return y;
    } else {
      return F(p);
    }
  }
  function F(p) {
    if (z(p)) {
      l = F;
      return q(p);
    } else if (L(p)) {
      e.consume(p);
      return F;
    } else {
      return O(p);
    }
  }
  function v(p) {
    if (p === 45 || W(p)) {
      e.consume(p);
      return v;
    } else if (p === 47 || p === 62 || Y(p)) {
      return D(p);
    } else {
      return n(p);
    }
  }
  function D(p) {
    if (p === 47) {
      e.consume(p);
      return O;
    } else if (p === 58 || p === 95 || ne(p)) {
      e.consume(p);
      return R;
    } else if (z(p)) {
      l = D;
      return q(p);
    } else if (L(p)) {
      e.consume(p);
      return D;
    } else {
      return O(p);
    }
  }
  function R(p) {
    if (p === 45 || p === 46 || p === 58 || p === 95 || W(p)) {
      e.consume(p);
      return R;
    } else {
      return T(p);
    }
  }
  function T(p) {
    if (p === 61) {
      e.consume(p);
      return C;
    } else if (z(p)) {
      l = T;
      return q(p);
    } else if (L(p)) {
      e.consume(p);
      return T;
    } else {
      return D(p);
    }
  }
  function C(p) {
    if (p === null || p === 60 || p === 61 || p === 62 || p === 96) {
      return n(p);
    } else if (p === 34 || p === 39) {
      e.consume(p);
      i = p;
      return V;
    } else if (z(p)) {
      l = C;
      return q(p);
    } else if (L(p)) {
      e.consume(p);
      return C;
    } else {
      e.consume(p);
      return A;
    }
  }
  function V(p) {
    if (p === i) {
      e.consume(p);
      i = undefined;
      return b;
    } else if (p === null) {
      return n(p);
    } else if (z(p)) {
      l = V;
      return q(p);
    } else {
      e.consume(p);
      return V;
    }
  }
  function A(p) {
    if (
      p === null ||
      p === 34 ||
      p === 39 ||
      p === 60 ||
      p === 61 ||
      p === 96
    ) {
      return n(p);
    } else if (p === 47 || p === 62 || Y(p)) {
      return D(p);
    } else {
      e.consume(p);
      return A;
    }
  }
  function b(p) {
    if (p === 47 || p === 62 || Y(p)) {
      return D(p);
    } else {
      return n(p);
    }
  }
  function O(p) {
    if (p === 62) {
      e.consume(p);
      e.exit("htmlTextData");
      e.exit("htmlText");
      return t;
    } else {
      return n(p);
    }
  }
  function q(p) {
    e.exit("htmlTextData");
    e.enter("lineEnding");
    e.consume(p);
    e.exit("lineEnding");
    return J;
  }
  function J(p) {
    if (L(p)) {
      return H(
        e,
        ie,
        "linePrefix",
        r.parser.constructs.disable.null.includes("codeIndented")
          ? undefined
          : 4,
      )(p);
    } else {
      return ie(p);
    }
  }
  function ie(p) {
    e.enter("htmlTextData");
    return l(p);
  }
}
const mt = {
  name: "labelEnd",
  resolveAll: Bi,
  resolveTo: Mi,
  tokenize: ji,
};
const Di = {
  tokenize: vi,
};
const Ri = {
  tokenize: Vi,
};
const Oi = {
  tokenize: Hi,
};
function Bi(e) {
  let t = -1;
  const n = [];
  while (++t < e.length) {
    const r = e[t][1];
    n.push(e[t]);
    if (
      r.type === "labelImage" ||
      r.type === "labelLink" ||
      r.type === "labelEnd"
    ) {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data";
      t += i;
    }
  }
  if (e.length !== n.length) {
    re(e, 0, e.length, n);
  }
  return e;
}
function Mi(e, t) {
  let n = e.length;
  let r = 0;
  let i;
  let u;
  let l;
  let a;
  while (n--) {
    i = e[n][1];
    if (u) {
      if (i.type === "link" || (i.type === "labelLink" && i._inactive)) {
        break;
      }
      if (e[n][0] === "enter" && i.type === "labelLink") {
        i._inactive = true;
      }
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
    } else if (i.type === "labelEnd") {
      l = n;
    }
  }
  const c = {
    type: e[u][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[u][1].start,
    },
    end: {
      ...e[e.length - 1][1].end,
    },
  };
  const s = {
    type: "label",
    start: {
      ...e[u][1].start,
    },
    end: {
      ...e[l][1].end,
    },
  };
  const o = {
    type: "labelText",
    start: {
      ...e[u + r + 2][1].end,
    },
    end: {
      ...e[l - 2][1].start,
    },
  };
  a = [
    ["enter", c, t],
    ["enter", s, t],
  ];
  a = G(a, e.slice(u + 1, u + r + 3));
  a = G(a, [["enter", o, t]]);
  a = G(
    a,
    pt(t.parser.constructs.insideSpan.null, e.slice(u + r + 4, l - 3), t),
  );
  a = G(a, [["exit", o, t], e[l - 2], e[l - 1], ["exit", s, t]]);
  a = G(a, e.slice(l + 1));
  a = G(a, [["exit", c, t]]);
  re(e, u, e.length, a);
  return e;
}
function ji(e, t, n) {
  const r = this;
  let i = r.events.length;
  let u;
  let l;
  while (i--) {
    if (
      (r.events[i][1].type === "labelImage" ||
        r.events[i][1].type === "labelLink") &&
      !r.events[i][1]._balanced
    ) {
      u = r.events[i][1];
      break;
    }
  }
  return a;
  function a(d) {
    if (u) {
      if (u._inactive) {
        return f(d);
      } else {
        l = r.parser.defined.includes(
          xe(
            r.sliceSerialize({
              start: u.end,
              end: r.now(),
            }),
          ),
        );
        e.enter("labelEnd");
        e.enter("labelMarker");
        e.consume(d);
        e.exit("labelMarker");
        e.exit("labelEnd");
        return c;
      }
    } else {
      return n(d);
    }
  }
  function c(d) {
    if (d === 40) {
      return e.attempt(Di, o, l ? o : f)(d);
    } else if (d === 91) {
      return e.attempt(Ri, o, l ? s : f)(d);
    } else if (l) {
      return o(d);
    } else {
      return f(d);
    }
  }
  function s(d) {
    return e.attempt(Oi, o, f)(d);
  }
  function o(d) {
    return t(d);
  }
  function f(d) {
    u._balanced = true;
    return n(d);
  }
}
function vi(e, t, n) {
  return r;
  function r(f) {
    e.enter("resource");
    e.enter("resourceMarker");
    e.consume(f);
    e.exit("resourceMarker");
    return i;
  }
  function i(f) {
    if (Y(f)) {
      return ze(e, u)(f);
    } else {
      return u(f);
    }
  }
  function u(f) {
    if (f === 41) {
      return o(f);
    } else {
      return wn(
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
  }
  function l(f) {
    if (Y(f)) {
      return ze(e, c)(f);
    } else {
      return o(f);
    }
  }
  function a(f) {
    return n(f);
  }
  function c(f) {
    if (f === 34 || f === 39 || f === 40) {
      return Sn(
        e,
        s,
        n,
        "resourceTitle",
        "resourceTitleMarker",
        "resourceTitleString",
      )(f);
    } else {
      return o(f);
    }
  }
  function s(f) {
    if (Y(f)) {
      return ze(e, o)(f);
    } else {
      return o(f);
    }
  }
  function o(f) {
    if (f === 41) {
      e.enter("resourceMarker");
      e.consume(f);
      e.exit("resourceMarker");
      e.exit("resource");
      return t;
    } else {
      return n(f);
    }
  }
}
function Vi(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return bn.call(
      r,
      e,
      u,
      l,
      "reference",
      "referenceMarker",
      "referenceString",
    )(a);
  }
  function u(a) {
    if (
      r.parser.defined.includes(
        xe(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)),
      )
    ) {
      return t(a);
    } else {
      return n(a);
    }
  }
  function l(a) {
    return n(a);
  }
}
function Hi(e, t, n) {
  return r;
  function r(u) {
    e.enter("reference");
    e.enter("referenceMarker");
    e.consume(u);
    e.exit("referenceMarker");
    return i;
  }
  function i(u) {
    if (u === 93) {
      e.enter("referenceMarker");
      e.consume(u);
      e.exit("referenceMarker");
      e.exit("reference");
      return t;
    } else {
      return n(u);
    }
  }
}
const qi = {
  name: "labelStartImage",
  resolveAll: mt.resolveAll,
  tokenize: Ui,
};
function Ui(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    e.enter("labelImage");
    e.enter("labelImageMarker");
    e.consume(a);
    e.exit("labelImageMarker");
    return u;
  }
  function u(a) {
    if (a === 91) {
      e.enter("labelMarker");
      e.consume(a);
      e.exit("labelMarker");
      e.exit("labelImage");
      return l;
    } else {
      return n(a);
    }
  }
  function l(a) {
    if (a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs) {
      return n(a);
    } else {
      return t(a);
    }
  }
}
const $i = {
  name: "labelStartLink",
  resolveAll: mt.resolveAll,
  tokenize: Qi,
};
function Qi(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    e.enter("labelLink");
    e.enter("labelMarker");
    e.consume(l);
    e.exit("labelMarker");
    e.exit("labelLink");
    return u;
  }
  function u(l) {
    if (l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs) {
      return n(l);
    } else {
      return t(l);
    }
  }
}
const $e = {
  name: "lineEnding",
  tokenize: Yi,
};
function Yi(e, t) {
  return n;
  function n(r) {
    e.enter("lineEnding");
    e.consume(r);
    e.exit("lineEnding");
    return H(e, t, "linePrefix");
  }
}
const Oe = {
  name: "thematicBreak",
  tokenize: Xi,
};
function Xi(e, t, n) {
  let r = 0;
  let i;
  return u;
  function u(s) {
    e.enter("thematicBreak");
    return l(s);
  }
  function l(s) {
    i = s;
    return a(s);
  }
  function a(s) {
    if (s === i) {
      e.enter("thematicBreakSequence");
      return c(s);
    } else if (r >= 3 && (s === null || z(s))) {
      e.exit("thematicBreak");
      return t(s);
    } else {
      return n(s);
    }
  }
  function c(s) {
    if (s === i) {
      e.consume(s);
      r++;
      return c;
    } else {
      e.exit("thematicBreakSequence");
      if (L(s)) {
        return H(e, a, "whitespace")(s);
      } else {
        return a(s);
      }
    }
  }
}
const Q = {
  continuation: {
    tokenize: Ki,
  },
  exit: eu,
  name: "list",
  tokenize: Ji,
};
const Wi = {
  partial: true,
  tokenize: tu,
};
const Gi = {
  partial: true,
  tokenize: Zi,
};
function Ji(e, t, n) {
  const r = this;
  const i = r.events[r.events.length - 1];
  let u =
    i && i[1].type === "linePrefix"
      ? i[2].sliceSerialize(i[1], true).length
      : 0;
  let l = 0;
  return a;
  function a(h) {
    const w =
      r.containerState.type ||
      (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered");
    if (
      w === "listUnordered"
        ? !r.containerState.marker || h === r.containerState.marker
        : nt(h)
    ) {
      if (!r.containerState.type) {
        r.containerState.type = w;
        e.enter(w, {
          _container: true,
        });
      }
      if (w === "listUnordered") {
        e.enter("listItemPrefix");
        if (h === 42 || h === 45) {
          return e.check(Oe, n, s)(h);
        } else {
          return s(h);
        }
      }
      if (!r.interrupt || h === 49) {
        e.enter("listItemPrefix");
        e.enter("listItemValue");
        return c(h);
      }
    }
    return n(h);
  }
  function c(h) {
    if (nt(h) && ++l < 10) {
      e.consume(h);
      return c;
    } else if (
      (!r.interrupt || l < 2) &&
      (r.containerState.marker
        ? h === r.containerState.marker
        : h === 41 || h === 46)
    ) {
      e.exit("listItemValue");
      return s(h);
    } else {
      return n(h);
    }
  }
  function s(h) {
    e.enter("listItemMarker");
    e.consume(h);
    e.exit("listItemMarker");
    r.containerState.marker = r.containerState.marker || h;
    return e.check(je, r.interrupt ? n : o, e.attempt(Wi, d, f));
  }
  function o(h) {
    r.containerState.initialBlankLine = true;
    u++;
    return d(h);
  }
  function f(h) {
    if (L(h)) {
      e.enter("listItemPrefixWhitespace");
      e.consume(h);
      e.exit("listItemPrefixWhitespace");
      return d;
    } else {
      return n(h);
    }
  }
  function d(h) {
    r.containerState.size =
      u + r.sliceSerialize(e.exit("listItemPrefix"), true).length;
    return t(h);
  }
}
function Ki(e, t, n) {
  const r = this;
  r.containerState._closeFlow = undefined;
  return e.check(je, i, u);
  function i(a) {
    r.containerState.furtherBlankLines =
      r.containerState.furtherBlankLines || r.containerState.initialBlankLine;
    return H(e, t, "listItemIndent", r.containerState.size + 1)(a);
  }
  function u(a) {
    if (r.containerState.furtherBlankLines || !L(a)) {
      r.containerState.furtherBlankLines = undefined;
      r.containerState.initialBlankLine = undefined;
      return l(a);
    } else {
      r.containerState.furtherBlankLines = undefined;
      r.containerState.initialBlankLine = undefined;
      return e.attempt(Gi, t, l)(a);
    }
  }
  function l(a) {
    r.containerState._closeFlow = true;
    r.interrupt = undefined;
    return H(
      e,
      e.attempt(Q, t, n),
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4,
    )(a);
  }
}
function Zi(e, t, n) {
  const r = this;
  return H(e, i, "listItemIndent", r.containerState.size + 1);
  function i(u) {
    const l = r.events[r.events.length - 1];
    if (
      l &&
      l[1].type === "listItemIndent" &&
      l[2].sliceSerialize(l[1], true).length === r.containerState.size
    ) {
      return t(u);
    } else {
      return n(u);
    }
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
    r.parser.constructs.disable.null.includes("codeIndented") ? undefined : 5,
  );
  function i(u) {
    const l = r.events[r.events.length - 1];
    if (!L(u) && l && l[1].type === "listItemPrefixWhitespace") {
      return t(u);
    } else {
      return n(u);
    }
  }
}
const Ht = {
  name: "setextUnderline",
  resolveTo: nu,
  tokenize: ru,
};
function nu(e, t) {
  let n = e.length;
  let r;
  let i;
  let u;
  while (n--) {
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      if (e[n][1].type === "paragraph") {
        i = n;
      }
    } else {
      if (e[n][1].type === "content") {
        e.splice(n, 1);
      }
      if (!u && e[n][1].type === "definition") {
        u = n;
      }
    }
  }
  const l = {
    type: "setextHeading",
    start: {
      ...e[r][1].start,
    },
    end: {
      ...e[e.length - 1][1].end,
    },
  };
  e[i][1].type = "setextHeadingText";
  if (u) {
    e.splice(i, 0, ["enter", l, t]);
    e.splice(u + 1, 0, ["exit", e[r][1], t]);
    e[r][1].end = {
      ...e[u][1].end,
    };
  } else {
    e[r][1] = l;
  }
  e.push(["exit", l, t]);
  return e;
}
function ru(e, t, n) {
  const r = this;
  let i;
  return u;
  function u(s) {
    let o = r.events.length;
    let f;
    while (o--) {
      if (
        r.events[o][1].type !== "lineEnding" &&
        r.events[o][1].type !== "linePrefix" &&
        r.events[o][1].type !== "content"
      ) {
        f = r.events[o][1].type === "paragraph";
        break;
      }
    }
    if (!r.parser.lazy[r.now().line] && (r.interrupt || f)) {
      e.enter("setextHeadingLine");
      i = s;
      return l(s);
    } else {
      return n(s);
    }
  }
  function l(s) {
    e.enter("setextHeadingLineSequence");
    return a(s);
  }
  function a(s) {
    if (s === i) {
      e.consume(s);
      return a;
    } else {
      e.exit("setextHeadingLineSequence");
      if (L(s)) {
        return H(e, c, "lineSuffix")(s);
      } else {
        return c(s);
      }
    }
  }
  function c(s) {
    if (s === null || z(s)) {
      e.exit("setextHeadingLine");
      return t(s);
    } else {
      return n(s);
    }
  }
}
const iu = {
  tokenize: uu,
};
function uu(e) {
  const t = this;
  const n = e.attempt(
    je,
    r,
    e.attempt(
      this.parser.constructs.flowInitial,
      i,
      H(
        e,
        e.attempt(this.parser.constructs.flow, i, e.attempt(ci, i)),
        "linePrefix",
      ),
    ),
  );
  return n;
  function r(u) {
    if (u === null) {
      e.consume(u);
      return;
    }
    e.enter("lineEndingBlank");
    e.consume(u);
    e.exit("lineEndingBlank");
    t.currentConstruct = undefined;
    return n;
  }
  function i(u) {
    if (u === null) {
      e.consume(u);
      return;
    }
    e.enter("lineEnding");
    e.consume(u);
    e.exit("lineEnding");
    t.currentConstruct = undefined;
    return n;
  }
}
const lu = {
  resolveAll: In(),
};
const au = En("string");
const su = En("text");
function En(e) {
  return {
    resolveAll: In(e === "text" ? ou : undefined),
    tokenize: t,
  };
  function t(n) {
    const r = this;
    const i = this.parser.constructs[e];
    const u = n.attempt(i, l, a);
    return l;
    function l(o) {
      if (s(o)) {
        return u(o);
      } else {
        return a(o);
      }
    }
    function a(o) {
      if (o === null) {
        n.consume(o);
        return;
      }
      n.enter("data");
      n.consume(o);
      return c;
    }
    function c(o) {
      if (s(o)) {
        n.exit("data");
        return u(o);
      } else {
        n.consume(o);
        return c;
      }
    }
    function s(o) {
      if (o === null) {
        return true;
      }
      const f = i[o];
      let d = -1;
      if (f) {
        while (++d < f.length) {
          const h = f[d];
          if (!h.previous || h.previous.call(r, r.previous)) {
            return true;
          }
        }
      }
      return false;
    }
  }
}
function In(e) {
  return t;
  function t(n, r) {
    let i = -1;
    let u;
    while (++i <= n.length) {
      if (u === undefined) {
        if (n[i] && n[i][1].type === "data") {
          u = i;
          i++;
        }
      } else if (!n[i] || n[i][1].type !== "data") {
        if (i !== u + 2) {
          n[u][1].end = n[i - 1][1].end;
          n.splice(u + 2, i - u - 2);
          i = u + 2;
        }
        u = undefined;
      }
    }
    if (e) {
      return e(n, r);
    } else {
      return n;
    }
  }
}
function ou(e, t) {
  let n = 0;
  while (++n <= e.length) {
    if (
      (n === e.length || e[n][1].type === "lineEnding") &&
      e[n - 1][1].type === "data"
    ) {
      const r = e[n - 1][1];
      const i = t.sliceStream(r);
      let u = i.length;
      let l = -1;
      let a = 0;
      let c;
      while (u--) {
        const s = i[u];
        if (typeof s == "string") {
          for (l = s.length; s.charCodeAt(l - 1) === 32;) {
            a++;
            l--;
          }
          if (l) {
            break;
          }
          l = -1;
        } else if (s === -2) {
          c = true;
          a++;
        } else if (s !== -1) {
          u++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length) {
        a = 0;
      }
      if (a) {
        const s = {
          type:
            n === e.length || c || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: u ? l : r.start._bufferIndex + l,
            _index: r.start._index + u,
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a,
          },
          end: {
            ...r.end,
          },
        };
        r.end = {
          ...s.start,
        };
        if (r.start.offset === r.end.offset) {
          Object.assign(r, s);
        } else {
          e.splice(n, 0, ["enter", s, t], ["exit", s, t]);
          n += 2;
        }
      }
      n++;
    }
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
};
const fu = {
  91: di,
};
const hu = {
  [-2]: Ue,
  [-1]: Ue,
  32: Ue,
};
const pu = {
  35: bi,
  42: Oe,
  45: [Ht, Oe],
  60: Ci,
  61: Ht,
  95: Oe,
  96: vt,
  126: vt,
};
const mu = {
  38: xn,
  92: yn,
};
const du = {
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
};
const gu = {
  null: [rt, lu],
};
const yu = {
  null: [42, 95],
};
const xu = {
  null: [],
};
const ku = Object.freeze(
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
    {
      value: "Module",
    },
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
  const i = {};
  const u = [];
  let l = [];
  let a = [];
  const c = {
    attempt: F(j),
    check: F(y),
    consume: _,
    enter: S,
    exit: B,
    interrupt: F(y, {
      interrupt: true,
    }),
  };
  const s = {
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
  if (t.resolveAll) {
    u.push(t);
  }
  return s;
  function f(T) {
    l = G(l, T);
    I();
    if (l[l.length - 1] !== null) {
      return [];
    } else {
      v(t, 0);
      s.events = pt(u, s.events, s);
      return s.events;
    }
  }
  function d(T, C) {
    return Su(h(T), C);
  }
  function h(T) {
    return bu(l, T);
  }
  function w() {
    const { _bufferIndex: T, _index: C, line: V, column: A, offset: b } = r;
    return {
      _bufferIndex: T,
      _index: C,
      line: V,
      column: A,
      offset: b,
    };
  }
  function E(T) {
    i[T.line] = T.column;
    R();
  }
  function I() {
    let T;
    while (r._index < l.length) {
      const C = l[r._index];
      if (typeof C == "string") {
        T = r._index;
        if (r._bufferIndex < 0) {
          r._bufferIndex = 0;
        }
        while (r._index === T && r._bufferIndex < C.length) {
          x(C.charCodeAt(r._bufferIndex));
        }
      } else {
        x(C);
      }
    }
  }
  function x(T) {
    o = o(T);
  }
  function _(T) {
    if (z(T)) {
      r.line++;
      r.column = 1;
      r.offset += T === -3 ? 2 : 1;
      R();
    } else if (T !== -1) {
      r.column++;
      r.offset++;
    }
    if (r._bufferIndex < 0) {
      r._index++;
    } else {
      r._bufferIndex++;
      if (r._bufferIndex === l[r._index].length) {
        r._bufferIndex = -1;
        r._index++;
      }
    }
    s.previous = T;
  }
  function S(T, C) {
    const V = C || {};
    V.type = T;
    V.start = w();
    s.events.push(["enter", V, s]);
    a.push(V);
    return V;
  }
  function B(T) {
    const C = a.pop();
    C.end = w();
    s.events.push(["exit", C, s]);
    return C;
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
      let q;
      let J;
      let ie;
      let p;
      if (Array.isArray(A)) {
        return ue(A);
      } else if ("tokenize" in A) {
        return ue([A]);
      } else {
        return K(A);
      }
      function K(U) {
        return we;
        function we(se) {
          const pe = se !== null && U[se];
          const me = se !== null && U.null;
          const Fe = [
            ...(Array.isArray(pe) ? pe : pe ? [pe] : []),
            ...(Array.isArray(me) ? me : me ? [me] : []),
          ];
          return ue(Fe)(se);
        }
      }
      function ue(U) {
        q = U;
        J = 0;
        if (U.length === 0) {
          return O;
        } else {
          return m(U[J]);
        }
      }
      function m(U) {
        return we;
        function we(se) {
          p = D();
          ie = U;
          if (!U.partial) {
            s.currentConstruct = U;
          }
          if (U.name && s.parser.constructs.disable.null.includes(U.name)) {
            return fe();
          } else {
            return U.tokenize.call(
              C ? Object.assign(Object.create(s), C) : s,
              c,
              Z,
              fe,
            )(se);
          }
        }
      }
      function Z(U) {
        T(ie, p);
        return b;
      }
      function fe(U) {
        p.restore();
        if (++J < q.length) {
          return m(q[J]);
        } else {
          return O;
        }
      }
    }
  }
  function v(T, C) {
    if (T.resolveAll && !u.includes(T)) {
      u.push(T);
    }
    if (T.resolve) {
      re(s.events, C, s.events.length - C, T.resolve(s.events.slice(C), s));
    }
    if (T.resolveTo) {
      s.events = T.resolveTo(s.events, s);
    }
  }
  function D() {
    const T = w();
    const C = s.previous;
    const V = s.currentConstruct;
    const A = s.events.length;
    const b = Array.from(a);
    return {
      from: A,
      restore: O,
    };
    function O() {
      r = T;
      s.previous = C;
      s.currentConstruct = V;
      s.events.length = A;
      a = b;
      R();
    }
  }
  function R() {
    if (r.line in i && r.column < 2) {
      r.column = i[r.line];
      r.offset += i[r.line] - 1;
    }
  }
}
function bu(e, t) {
  const n = t.start._index;
  const r = t.start._bufferIndex;
  const i = t.end._index;
  const u = t.end._bufferIndex;
  let l;
  if (n === i) {
    l = [e[n].slice(r, u)];
  } else {
    l = e.slice(n, i);
    if (r > -1) {
      const a = l[0];
      if (typeof a == "string") {
        l[0] = a.slice(r);
      } else {
        l.shift();
      }
    }
    if (u > 0) {
      l.push(e[i].slice(0, u));
    }
  }
  return l;
}
function Su(e, t) {
  let n = -1;
  const r = [];
  let i;
  while (++n < e.length) {
    const u = e[n];
    let l;
    if (typeof u == "string") {
      l = u;
    } else {
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
          l = t ? " " : "\t";
          break;
        }
        case -1: {
          if (!t && i) {
            continue;
          }
          l = " ";
          break;
        }
        default:
          l = String.fromCharCode(u);
      }
    }
    i = u === -2;
    r.push(l);
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
  while (!kn(e));
  return e;
}
const qt = /[\0\t\n\r]/g;
function Cu() {
  let e = 1;
  let t = "";
  let n = true;
  let r;
  return i;
  function i(u, l, a) {
    const c = [];
    let s;
    let o;
    let f;
    let d;
    let h;
    u =
      t +
      (typeof u == "string"
        ? u.toString()
        : new TextDecoder(l || undefined).decode(u));
    f = 0;
    t = "";
    if (n) {
      if (u.charCodeAt(0) === 65279) {
        f++;
      }
      n = undefined;
    }
    while (f < u.length) {
      qt.lastIndex = f;
      s = qt.exec(u);
      d = s && s.index !== undefined ? s.index : u.length;
      h = u.charCodeAt(d);
      if (!s) {
        t = u.slice(f);
        break;
      }
      if (h === 10 && f === d && r) {
        c.push(-3);
        r = undefined;
      } else {
        if (r) {
          c.push(-5);
          r = undefined;
        }
        if (f < d) {
          c.push(u.slice(f, d));
          e += d - f;
        }
        switch (h) {
          case 0: {
            c.push(65533);
            e++;
            break;
          }
          case 9: {
            o = Math.ceil(e / 4) * 4;
            c.push(-2);
            while (e++ < o) {
              c.push(-1);
            }
            break;
          }
          case 10: {
            c.push(-4);
            e = 1;
            break;
          }
          default:
            r = true;
            e = 1;
        }
      }
      f = d + 1;
    }
    if (a) {
      if (r) {
        c.push(-5);
      }
      if (t) {
        c.push(t);
      }
      c.push(null);
    }
    return c;
  }
}
const Tu = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Au(e) {
  return e.replace(Tu, zu);
}
function zu(e, t, n) {
  if (t) {
    return t;
  }
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1);
    const u = i === 120 || i === 88;
    return dn(n.slice(u ? 2 : 1), u ? 16 : 10);
  }
  return ht(n) || e;
}
const Cn = {}.hasOwnProperty;
function _u(e, t, n) {
  if (t && typeof t == "object") {
    n = t;
    t = undefined;
  }
  return Pu(n)(
    Iu(
      Eu(n)
        .document()
        .write(Cu()(e, t, true)),
    ),
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
    let k = {
      type: "root",
      children: [],
    };
    const P = {
      stack: [k],
      tokenStack: [],
      config: t,
      enter: a,
      exit: s,
      buffer: l,
      resume: o,
      data: n,
    };
    const N = [];
    let M = -1;
    while (++M < g.length) {
      if (g[M][1].type === "listOrdered" || g[M][1].type === "listUnordered") {
        if (g[M][0] === "enter") {
          N.push(M);
        } else {
          const ee = N.pop();
          M = i(g, ee, M);
        }
      }
    }
    for (M = -1; ++M < g.length;) {
      const ee = t[g[M][0]];
      if (Cn.call(ee, g[M][1].type)) {
        ee[g[M][1].type].call(
          Object.assign(
            {
              sliceSerialize: g[M][2].sliceSerialize,
            },
            P,
          ),
          g[M][1],
        );
      }
    }
    if (P.tokenStack.length > 0) {
      const ee = P.tokenStack[P.tokenStack.length - 1];
      (ee[1] || Ut).call(P, undefined, ee[0]);
    }
    k.position = {
      start: oe(
        g.length > 0
          ? g[0][1].start
          : {
              line: 1,
              column: 1,
              offset: 0,
            },
      ),
      end: oe(
        g.length > 0
          ? g[g.length - 2][1].end
          : {
              line: 1,
              column: 1,
              offset: 0,
            },
      ),
    };
    M = -1;
    while (++M < t.transforms.length) {
      k = t.transforms[M](k) || k;
    }
    return k;
  }
  function i(g, k, P) {
    let N = k - 1;
    let M = -1;
    let ee = false;
    let he;
    let le;
    let be;
    let Se;
    while (++N <= P) {
      const X = g[N];
      switch (X[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          if (X[0] === "enter") {
            M++;
          } else {
            M--;
          }
          Se = undefined;
          break;
        }
        case "lineEndingBlank": {
          if (X[0] === "enter") {
            if (he && !Se && !M && !be) {
              be = N;
            }
            Se = undefined;
          }
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Se = undefined;
      }
      if (
        (!M && X[0] === "enter" && X[1].type === "listItemPrefix") ||
        (M === -1 &&
          X[0] === "exit" &&
          (X[1].type === "listUnordered" || X[1].type === "listOrdered"))
      ) {
        if (he) {
          let de = N;
          for (le = undefined; de--;) {
            const ae = g[de];
            if (
              ae[1].type === "lineEnding" ||
              ae[1].type === "lineEndingBlank"
            ) {
              if (ae[0] === "exit") {
                continue;
              }
              if (le) {
                g[le][1].type = "lineEndingBlank";
                ee = true;
              }
              ae[1].type = "lineEnding";
              le = de;
            } else if (
              ae[1].type !== "linePrefix" &&
              ae[1].type !== "blockQuotePrefix" &&
              ae[1].type !== "blockQuotePrefixWhitespace" &&
              ae[1].type !== "blockQuoteMarker" &&
              ae[1].type !== "listItemIndent"
            ) {
              break;
            }
          }
          if (be && (!le || be < le)) {
            he._spread = true;
          }
          he.end = Object.assign({}, le ? g[le][1].start : X[1].end);
          g.splice(le || N, 0, ["exit", he, X[2]]);
          N++;
          P++;
        }
        if (X[1].type === "listItemPrefix") {
          const de = {
            type: "listItem",
            _spread: false,
            start: Object.assign({}, X[1].start),
            end: undefined,
          };
          he = de;
          g.splice(N, 0, ["enter", de, X[2]]);
          N++;
          P++;
          be = undefined;
          Se = true;
        }
      }
    }
    g[k][1]._spread = ee;
    return P;
  }
  function u(g, k) {
    return P;
    function P(N) {
      a.call(this, g(N), N);
      if (k) {
        k.call(this, N);
      }
    }
  }
  function l() {
    this.stack.push({
      type: "fragment",
      children: [],
    });
  }
  function a(g, k, P) {
    this.stack[this.stack.length - 1].children.push(g);
    this.stack.push(g);
    this.tokenStack.push([k, P || undefined]);
    g.position = {
      start: oe(k.start),
      end: undefined,
    };
  }
  function c(g) {
    return k;
    function k(P) {
      if (g) {
        g.call(this, P);
      }
      s.call(this, P);
    }
  }
  function s(g, k) {
    const P = this.stack.pop();
    const N = this.tokenStack.pop();
    if (N) {
      if (N[0].type !== g.type) {
        if (k) {
          k.call(this, g, N[0]);
        } else {
          (N[1] || Ut).call(this, g, N[0]);
        }
      }
    } else {
      throw new Error(
        "Cannot close `" +
          g.type +
          "` (" +
          Ae({
            start: g.start,
            end: g.end,
          }) +
          "): it’s not open",
      );
    }
    P.position.end = oe(g.end);
  }
  function o() {
    return zr(this.stack.pop());
  }
  function f() {
    this.data.expectingFirstListItemValue = true;
  }
  function d(g) {
    if (this.data.expectingFirstListItemValue) {
      const k = this.stack[this.stack.length - 2];
      k.start = Number.parseInt(this.sliceSerialize(g), 10);
      this.data.expectingFirstListItemValue = undefined;
    }
  }
  function h() {
    const g = this.resume();
    const k = this.stack[this.stack.length - 1];
    k.lang = g;
  }
  function w() {
    const g = this.resume();
    const k = this.stack[this.stack.length - 1];
    k.meta = g;
  }
  function E() {
    if (!this.data.flowCodeInside) {
      this.buffer();
      this.data.flowCodeInside = true;
    }
  }
  function I() {
    const g = this.resume();
    const k = this.stack[this.stack.length - 1];
    k.value = g.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
    this.data.flowCodeInside = undefined;
  }
  function x() {
    const g = this.resume();
    const k = this.stack[this.stack.length - 1];
    k.value = g.replace(/(\r?\n|\r)$/g, "");
  }
  function _(g) {
    const k = this.resume();
    const P = this.stack[this.stack.length - 1];
    P.label = k;
    P.identifier = xe(this.sliceSerialize(g)).toLowerCase();
  }
  function S() {
    const g = this.resume();
    const k = this.stack[this.stack.length - 1];
    k.title = g;
  }
  function B() {
    const g = this.resume();
    const k = this.stack[this.stack.length - 1];
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
    this.data.setextHeadingSlurpLineEnding = true;
  }
  function F(g) {
    const k = this.stack[this.stack.length - 1];
    k.depth = this.sliceSerialize(g).codePointAt(0) === 61 ? 1 : 2;
  }
  function v() {
    this.data.setextHeadingSlurpLineEnding = undefined;
  }
  function D(g) {
    const P = this.stack[this.stack.length - 1].children;
    let N = P[P.length - 1];
    if (!N || N.type !== "text") {
      N = Vn();
      N.position = {
        start: oe(g.start),
        end: undefined,
      };
      P.push(N);
    }
    this.stack.push(N);
  }
  function R(g) {
    const k = this.stack.pop();
    k.value += this.sliceSerialize(g);
    k.position.end = oe(g.end);
  }
  function T(g) {
    const k = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const P = k.children[k.children.length - 1];
      P.position.end = oe(g.end);
      this.data.atHardBreak = undefined;
      return;
    }
    if (
      !this.data.setextHeadingSlurpLineEnding &&
      t.canContainEols.includes(k.type)
    ) {
      D.call(this, g);
      R.call(this, g);
    }
  }
  function C() {
    this.data.atHardBreak = true;
  }
  function V() {
    const g = this.resume();
    const k = this.stack[this.stack.length - 1];
    k.value = g;
  }
  function A() {
    const g = this.resume();
    const k = this.stack[this.stack.length - 1];
    k.value = g;
  }
  function b() {
    const g = this.resume();
    const k = this.stack[this.stack.length - 1];
    k.value = g;
  }
  function O() {
    const g = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const k = this.data.referenceType || "shortcut";
      g.type += "Reference";
      g.referenceType = k;
      delete g.url;
      delete g.title;
    } else {
      delete g.identifier;
      delete g.label;
    }
    this.data.referenceType = undefined;
  }
  function q() {
    const g = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const k = this.data.referenceType || "shortcut";
      g.type += "Reference";
      g.referenceType = k;
      delete g.url;
      delete g.title;
    } else {
      delete g.identifier;
      delete g.label;
    }
    this.data.referenceType = undefined;
  }
  function J(g) {
    const k = this.sliceSerialize(g);
    const P = this.stack[this.stack.length - 2];
    P.label = Au(k);
    P.identifier = xe(k).toLowerCase();
  }
  function ie() {
    const g = this.stack[this.stack.length - 1];
    const k = this.resume();
    const P = this.stack[this.stack.length - 1];
    this.data.inReference = true;
    if (P.type === "link") {
      const N = g.children;
      P.children = N;
    } else {
      P.alt = k;
    }
  }
  function p() {
    const g = this.resume();
    const k = this.stack[this.stack.length - 1];
    k.url = g;
  }
  function K() {
    const g = this.resume();
    const k = this.stack[this.stack.length - 1];
    k.title = g;
  }
  function ue() {
    this.data.inReference = undefined;
  }
  function m() {
    this.data.referenceType = "collapsed";
  }
  function Z(g) {
    const k = this.resume();
    const P = this.stack[this.stack.length - 1];
    P.label = k;
    P.identifier = xe(this.sliceSerialize(g)).toLowerCase();
    this.data.referenceType = "full";
  }
  function fe(g) {
    this.data.characterReferenceType = g.type;
  }
  function U(g) {
    const k = this.sliceSerialize(g);
    const P = this.data.characterReferenceType;
    let N;
    if (P) {
      N = dn(k, P === "characterReferenceMarkerNumeric" ? 10 : 16);
      this.data.characterReferenceType = undefined;
    } else {
      N = ht(k);
    }
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
    return {
      type: "blockquote",
      children: [],
    };
  }
  function Fe() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: "",
    };
  }
  function Dn() {
    return {
      type: "inlineCode",
      value: "",
    };
  }
  function Rn() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: "",
    };
  }
  function On() {
    return {
      type: "emphasis",
      children: [],
    };
  }
  function wt() {
    return {
      type: "heading",
      depth: 0,
      children: [],
    };
  }
  function bt() {
    return {
      type: "break",
    };
  }
  function St() {
    return {
      type: "html",
      value: "",
    };
  }
  function Bn() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null,
    };
  }
  function Et() {
    return {
      type: "link",
      title: null,
      url: "",
      children: [],
    };
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
    return {
      type: "listItem",
      spread: g._spread,
      checked: null,
      children: [],
    };
  }
  function jn() {
    return {
      type: "paragraph",
      children: [],
    };
  }
  function vn() {
    return {
      type: "strong",
      children: [],
    };
  }
  function Vn() {
    return {
      type: "text",
      value: "",
    };
  }
  function Hn() {
    return {
      type: "thematicBreak",
    };
  }
}
function oe(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset,
  };
}
function Tn(e, t) {
  let n = -1;
  while (++n < t.length) {
    const r = t[n];
    if (Array.isArray(r)) {
      Tn(e, r);
    } else {
      Nu(e, r);
    }
  }
}
function Nu(e, t) {
  let n;
  for (n in t) {
    if (Cn.call(t, n)) {
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          if (r) {
            e[n].push(...r);
          }
          break;
        }
        case "transforms": {
          const r = t[n];
          if (r) {
            e[n].push(...r);
          }
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          if (r) {
            Object.assign(e[n], r);
          }
          break;
        }
      }
    }
  }
}
function Ut(e, t) {
  throw e
    ? new Error(
        "Cannot close `" +
          e.type +
          "` (" +
          Ae({
            start: e.start,
            end: e.end,
          }) +
          "): a different token (`" +
          t.type +
          "`, " +
          Ae({
            start: t.start,
            end: t.end,
          }) +
          ") is open",
      )
    : new Error(
        "Cannot close document, a token (`" +
          t.type +
          "`, " +
          Ae({
            start: t.start,
            end: t.end,
          }) +
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
    children: e.wrap(e.all(t), true),
  };
  e.patch(t, n);
  return e.applyData(t, n);
}
function Du(e, t) {
  const n = {
    type: "element",
    tagName: "br",
    properties: {},
    children: [],
  };
  e.patch(t, n);
  return [
    e.applyData(t, n),
    {
      type: "text",
      value: `
`,
    },
  ];
}
function Ru(e, t) {
  const n = t.value
    ? `${t.value}
`
    : "";
  const r = {};
  const i = t.lang ? t.lang.split(/\s+/) : [];
  if (i.length > 0) {
    r.className = ["language-" + i[0]];
  }
  let u = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [
      {
        type: "text",
        value: n,
      },
    ],
  };
  if (t.meta) {
    u.data = {
      meta: t.meta,
    };
  }
  e.patch(t, u);
  u = e.applyData(t, u);
  u = {
    type: "element",
    tagName: "pre",
    properties: {},
    children: [u],
  };
  e.patch(t, u);
  return u;
}
function Ou(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t),
  };
  e.patch(t, n);
  return e.applyData(t, n);
}
function Bu(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t),
  };
  e.patch(t, n);
  return e.applyData(t, n);
}
function Mu(e, t) {
  const n =
    typeof e.options.clobberPrefix == "string"
      ? e.options.clobberPrefix
      : "user-content-";
  const r = String(t.identifier).toUpperCase();
  const i = ke(r.toLowerCase());
  const u = e.footnoteOrder.indexOf(r);
  let l;
  let a = e.footnoteCounts.get(r);
  if (a === undefined) {
    a = 0;
    e.footnoteOrder.push(r);
    l = e.footnoteOrder.length;
  } else {
    l = u + 1;
  }
  a += 1;
  e.footnoteCounts.set(r, a);
  const c = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: true,
      ariaDescribedBy: ["footnote-label"],
    },
    children: [
      {
        type: "text",
        value: String(l),
      },
    ],
  };
  e.patch(t, c);
  const s = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [c],
  };
  e.patch(t, s);
  return e.applyData(t, s);
}
function ju(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t),
  };
  e.patch(t, n);
  return e.applyData(t, n);
}
function vu(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = {
      type: "raw",
      value: t.value,
    };
    e.patch(t, n);
    return e.applyData(t, n);
  }
}
function An(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed") {
    r += "[]";
  } else if (n === "full") {
    r += "[" + (t.label || t.identifier) + "]";
  }
  if (t.type === "imageReference") {
    return [
      {
        type: "text",
        value: "![" + t.alt + r,
      },
    ];
  }
  const i = e.all(t);
  const u = i[0];
  if (u && u.type === "text") {
    u.value = "[" + u.value;
  } else {
    i.unshift({
      type: "text",
      value: "[",
    });
  }
  const l = i[i.length - 1];
  if (l && l.type === "text") {
    l.value += r;
  } else {
    i.push({
      type: "text",
      value: r,
    });
  }
  return i;
}
function Vu(e, t) {
  const n = String(t.identifier).toUpperCase();
  const r = e.definitionById.get(n);
  if (!r) {
    return An(e, t);
  }
  const i = {
    src: ke(r.url || ""),
    alt: t.alt,
  };
  if (r.title !== null && r.title !== undefined) {
    i.title = r.title;
  }
  const u = {
    type: "element",
    tagName: "img",
    properties: i,
    children: [],
  };
  e.patch(t, u);
  return e.applyData(t, u);
}
function Hu(e, t) {
  const n = {
    src: ke(t.url),
  };
  if (t.alt !== null && t.alt !== undefined) {
    n.alt = t.alt;
  }
  if (t.title !== null && t.title !== undefined) {
    n.title = t.title;
  }
  const r = {
    type: "element",
    tagName: "img",
    properties: n,
    children: [],
  };
  e.patch(t, r);
  return e.applyData(t, r);
}
function qu(e, t) {
  const n = {
    type: "text",
    value: t.value.replace(/\r?\n|\r/g, " "),
  };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n],
  };
  e.patch(t, r);
  return e.applyData(t, r);
}
function Uu(e, t) {
  const n = String(t.identifier).toUpperCase();
  const r = e.definitionById.get(n);
  if (!r) {
    return An(e, t);
  }
  const i = {
    href: ke(r.url || ""),
  };
  if (r.title !== null && r.title !== undefined) {
    i.title = r.title;
  }
  const u = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t),
  };
  e.patch(t, u);
  return e.applyData(t, u);
}
function $u(e, t) {
  const n = {
    href: ke(t.url),
  };
  if (t.title !== null && t.title !== undefined) {
    n.title = t.title;
  }
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t),
  };
  e.patch(t, r);
  return e.applyData(t, r);
}
function Qu(e, t, n) {
  const r = e.all(t);
  const i = n ? Yu(n) : zn(t);
  const u = {};
  const l = [];
  if (typeof t.checked == "boolean") {
    const o = r[0];
    let f;
    if (o && o.type === "element" && o.tagName === "p") {
      f = o;
    } else {
      f = {
        type: "element",
        tagName: "p",
        properties: {},
        children: [],
      };
      r.unshift(f);
    }
    if (f.children.length > 0) {
      f.children.unshift({
        type: "text",
        value: " ",
      });
    }
    f.children.unshift({
      type: "element",
      tagName: "input",
      properties: {
        type: "checkbox",
        checked: t.checked,
        disabled: true,
      },
      children: [],
    });
    u.className = ["task-list-item"];
  }
  let a = -1;
  while (++a < r.length) {
    const o = r[a];
    if (i || a !== 0 || o.type !== "element" || o.tagName !== "p") {
      l.push({
        type: "text",
        value: `
`,
      });
    }
    if (o.type === "element" && o.tagName === "p" && !i) {
      l.push(...o.children);
    } else {
      l.push(o);
    }
  }
  const c = r[r.length - 1];
  if (c && (i || c.type !== "element" || c.tagName !== "p")) {
    l.push({
      type: "text",
      value: `
`,
    });
  }
  const s = {
    type: "element",
    tagName: "li",
    properties: u,
    children: l,
  };
  e.patch(t, s);
  return e.applyData(t, s);
}
function Yu(e) {
  let t = false;
  if (e.type === "list") {
    t = e.spread || false;
    const n = e.children;
    let r = -1;
    while (!t && ++r < n.length) {
      t = zn(n[r]);
    }
  }
  return t;
}
function zn(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Xu(e, t) {
  const n = {};
  const r = e.all(t);
  let i = -1;
  for (
    typeof t.start == "number" && t.start !== 1 && (n.start = t.start);
    ++i < r.length;
  ) {
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
    children: e.wrap(r, true),
  };
  e.patch(t, u);
  return e.applyData(t, u);
}
function Wu(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t),
  };
  e.patch(t, n);
  return e.applyData(t, n);
}
function Gu(e, t) {
  const n = {
    type: "root",
    children: e.wrap(e.all(t)),
  };
  e.patch(t, n);
  return e.applyData(t, n);
}
function Ju(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t),
  };
  e.patch(t, n);
  return e.applyData(t, n);
}
function Ku(e, t) {
  const n = e.all(t);
  const r = n.shift();
  const i = [];
  if (r) {
    const l = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], true),
    };
    e.patch(t.children[0], l);
    i.push(l);
  }
  if (n.length > 0) {
    const l = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, true),
    };
    const a = st(t.children[1]);
    const c = sn(t.children[t.children.length - 1]);
    if (a && c) {
      l.position = {
        start: a,
        end: c,
      };
    }
    i.push(l);
  }
  const u = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, true),
  };
  e.patch(t, u);
  return e.applyData(t, u);
}
function Zu(e, t, n) {
  const r = n ? n.children : undefined;
  const u = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td";
  const l = n && n.type === "table" ? n.align : undefined;
  const a = l ? l.length : t.children.length;
  let c = -1;
  const s = [];
  while (++c < a) {
    const f = t.children[c];
    const d = {};
    const h = l ? l[c] : undefined;
    if (h) {
      d.align = h;
    }
    let w = {
      type: "element",
      tagName: u,
      properties: d,
      children: [],
    };
    if (f) {
      w.children = e.all(f);
      e.patch(f, w);
      w = e.applyData(f, w);
    }
    s.push(w);
  }
  const o = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(s, true),
  };
  e.patch(t, o);
  return e.applyData(t, o);
}
function el(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    properties: {},
    children: e.all(t),
  };
  e.patch(t, n);
  return e.applyData(t, n);
}
const $t = 9;
const Qt = 32;
function tl(e) {
  const t = String(e);
  const n = /\r?\n|\r/g;
  let r = n.exec(t);
  let i = 0;
  const u = [];
  while (r) {
    u.push(Yt(t.slice(i, r.index), i > 0, true), r[0]);
    i = r.index + r[0].length;
    r = n.exec(t);
  }
  u.push(Yt(t.slice(i), i > 0, false));
  return u.join("");
}
function Yt(e, t, n) {
  let r = 0;
  let i = e.length;
  if (t) {
    let u = e.codePointAt(r);
    while (u === $t || u === Qt) {
      r++;
      u = e.codePointAt(r);
    }
  }
  if (n) {
    let u = e.codePointAt(i - 1);
    while (u === $t || u === Qt) {
      i--;
      u = e.codePointAt(i - 1);
    }
  }
  if (i > r) {
    return e.slice(r, i);
  } else {
    return "";
  }
}
function nl(e, t) {
  const n = {
    type: "text",
    value: tl(String(t.value)),
  };
  e.patch(t, n);
  return e.applyData(t, n);
}
function rl(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: [],
  };
  e.patch(t, n);
  return e.applyData(t, n);
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
const _n = -1;
const ve = 0;
const _e = 1;
const Be = 2;
const dt = 3;
const gt = 4;
const yt = 5;
const xt = 6;
const Pn = 7;
const Nn = 8;
const Xt = typeof self == "object" ? self : globalThis;
const ul = (e, t) => {
  const n = (i, u) => {
    e.set(u, i);
    return i;
  };
  const r = (i) => {
    if (e.has(i)) {
      return e.get(i);
    }
    const [u, l] = t[i];
    switch (u) {
      case ve:
      case _n:
        return n(l, i);
      case _e: {
        const a = n([], i);
        for (const c of l) {
          a.push(r(c));
        }
        return a;
      }
      case Be: {
        const a = n({}, i);
        for (const [c, s] of l) {
          a[r(c)] = r(s);
        }
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
        for (const [c, s] of l) {
          a.set(r(c), r(s));
        }
        return a;
      }
      case xt: {
        const a = n(new Set(), i);
        for (const c of l) {
          a.add(r(c));
        }
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
};
const Wt = (e) => ul(new Map(), e)(0);
const ye = "";
const { toString: ll } = {};
const { keys: al } = Object;
const Te = (e) => {
  const t = typeof e;
  if (t !== "object" || !e) {
    return [ve, t];
  }
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
  if (n.includes("Array")) {
    return [_e, n];
  } else if (n.includes("Error")) {
    return [Pn, n];
  } else {
    return [Be, n];
  }
};
const De = ([e, t]) => e === ve && (t === "function" || t === "symbol");
const sl = (e, t, n, r) => {
  const i = (l, a) => {
    const c = r.push(l) - 1;
    n.set(a, c);
    return c;
  };
  const u = (l) => {
    if (n.has(l)) {
      return n.get(l);
    }
    let [a, c] = Te(l);
    switch (a) {
      case ve: {
        let o = l;
        switch (c) {
          case "bigint":
            a = Nn;
            o = l.toString();
            break;
          case "function":
          case "symbol":
            if (e) {
              throw new TypeError("unable to serialize " + c);
            }
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
          if (c === "DataView") {
            d = new Uint8Array(l.buffer);
          } else if (c === "ArrayBuffer") {
            d = new Uint8Array(l);
          }
          return i([c, [...d]], l);
        }
        const o = [];
        const f = i([a, o], l);
        for (const d of l) {
          o.push(u(d));
        }
        return f;
      }
      case Be: {
        if (c) {
          switch (c) {
            case "BigInt":
              return i([c, l.toString()], l);
            case "Boolean":
            case "Number":
            case "String":
              return i([c, l.valueOf()], l);
          }
        }
        if (t && "toJSON" in l) {
          return u(l.toJSON());
        }
        const o = [];
        const f = i([a, o], l);
        for (const d of al(l)) {
          if (e || !De(Te(l[d]))) {
            o.push([u(d), u(l[d])]);
          }
        }
        return f;
      }
      case dt:
        return i([a, l.toISOString()], l);
      case gt: {
        const { source: o, flags: f } = l;
        return i(
          [
            a,
            {
              source: o,
              flags: f,
            },
          ],
          l,
        );
      }
      case yt: {
        const o = [];
        const f = i([a, o], l);
        for (const [d, h] of l) {
          if (e || (!De(Te(d)) && !De(Te(h)))) {
            o.push([u(d), u(h)]);
          }
        }
        return f;
      }
      case xt: {
        const o = [];
        const f = i([a, o], l);
        for (const d of l) {
          if (e || !De(Te(d))) {
            o.push(u(d));
          }
        }
        return f;
      }
    }
    const { message: s } = l;
    return i(
      [
        a,
        {
          name: c,
          message: s,
        },
      ],
      l,
    );
  };
  return u;
};
const Gt = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  sl(!t && !n, !!t, new Map(), r)(e);
  return r;
};
const Me =
  typeof structuredClone == "function"
    ? (e, t) =>
        t && ("json" in t || "lossy" in t) ? Wt(Gt(e, t)) : structuredClone(e)
    : (e, t) => Wt(Gt(e, t));
function ol(e, t) {
  const n = [
    {
      type: "text",
      value: "↩",
    },
  ];
  if (t > 1) {
    n.push({
      type: "element",
      tagName: "sup",
      properties: {},
      children: [
        {
          type: "text",
          value: String(t),
        },
      ],
    });
  }
  return n;
}
function cl(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function fl(e) {
  const t =
    typeof e.options.clobberPrefix == "string"
      ? e.options.clobberPrefix
      : "user-content-";
  const n = e.options.footnoteBackContent || ol;
  const r = e.options.footnoteBackLabel || cl;
  const i = e.options.footnoteLabel || "Footnotes";
  const u = e.options.footnoteLabelTagName || "h2";
  const l = e.options.footnoteLabelProperties || {
    className: ["sr-only"],
  };
  const a = [];
  let c = -1;
  while (++c < e.footnoteOrder.length) {
    const s = e.footnoteById.get(e.footnoteOrder[c]);
    if (!s) {
      continue;
    }
    const o = e.all(s);
    const f = String(s.identifier).toUpperCase();
    const d = ke(f.toLowerCase());
    let h = 0;
    const w = [];
    const E = e.footnoteCounts.get(f);
    while (E !== undefined && ++h <= E) {
      if (w.length > 0) {
        w.push({
          type: "text",
          value: " ",
        });
      }
      let _ = typeof n == "string" ? n : n(c, h);
      if (typeof _ == "string") {
        _ = {
          type: "text",
          value: _,
        };
      }
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
      });
    }
    const I = o[o.length - 1];
    if (I && I.type === "element" && I.tagName === "p") {
      const _ = I.children[I.children.length - 1];
      if (_ && _.type === "text") {
        _.value += " ";
      } else {
        I.children.push({
          type: "text",
          value: " ",
        });
      }
      I.children.push(...w);
    } else {
      o.push(...w);
    }
    const x = {
      type: "element",
      tagName: "li",
      properties: {
        id: t + "fn-" + d,
      },
      children: e.wrap(o, true),
    };
    e.patch(s, x);
    a.push(x);
  }
  if (a.length !== 0) {
    return {
      type: "element",
      tagName: "section",
      properties: {
        dataFootnotes: true,
        className: ["footnotes"],
      },
      children: [
        {
          type: "element",
          tagName: u,
          properties: {
            ...Me(l),
            id: "footnote-label",
          },
          children: [
            {
              type: "text",
              value: i,
            },
          ],
        },
        {
          type: "text",
          value: `
`,
        },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(a, true),
        },
        {
          type: "text",
          value: `
`,
        },
      ],
    };
  }
}
function Fn(e, t, n, r) {
  let i;
  let u;
  let l;
  if (typeof t == "function" && typeof n != "function") {
    u = undefined;
    l = t;
    i = n;
  } else {
    u = t;
    l = n;
    i = r;
  }
  Yn(e, u, a, i);
  function a(c, s) {
    const o = s[s.length - 1];
    const f = o ? o.children.indexOf(c) : undefined;
    return l(c, f, o);
  }
}
const it = {}.hasOwnProperty;
const hl = {};
function pl(e, t) {
  const n = t || hl;
  const r = new Map();
  const i = new Map();
  const u = new Map();
  const l = {
    ...il,
    ...n.handlers,
  };
  const a = {
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
  Fn(e, function (o) {
    if (o.type === "definition" || o.type === "footnoteDefinition") {
      const f = o.type === "definition" ? r : i;
      const d = String(o.identifier).toUpperCase();
      if (!f.has(d)) {
        f.set(d, o);
      }
    }
  });
  return a;
  function c(o, f) {
    const d = o.type;
    const h = a.handlers[d];
    if (it.call(a.handlers, d) && h) {
      return h(a, o, f);
    }
    if (a.options.passThrough && a.options.passThrough.includes(d)) {
      if ("children" in o) {
        const { children: E, ...I } = o;
        const x = Me(I);
        x.children = a.all(o);
        return x;
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
      while (++h < d.length) {
        const w = a.one(d[h], o);
        if (w) {
          if (
            h &&
            d[h - 1].type === "break" &&
            (!Array.isArray(w) && w.type === "text" && (w.value = Jt(w.value)),
            !Array.isArray(w) && w.type === "element")
          ) {
            const E = w.children[0];
            if (E && E.type === "text") {
              E.value = Jt(E.value);
            }
          }
          if (Array.isArray(w)) {
            f.push(...w);
          } else {
            f.push(w);
          }
        }
      }
    }
    return f;
  }
}
function ml(e, t) {
  if (e.position) {
    t.position = lr(e);
  }
}
function dl(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName;
    const i = e.data.hChildren;
    const u = e.data.hProperties;
    if (typeof r == "string") {
      if (n.type === "element") {
        n.tagName = r;
      } else {
        const l = "children" in n ? n.children : [n];
        n = {
          type: "element",
          tagName: r,
          properties: {},
          children: l,
        };
      }
    }
    if (n.type === "element" && u) {
      Object.assign(n.properties, Me(u));
    }
    if ("children" in n && n.children && i !== null && i !== undefined) {
      n.children = i;
    }
  }
  return n;
}
function gl(e, t) {
  const n = t.data || {};
  const r =
    "value" in t && !it.call(n, "hProperties") && !it.call(n, "hChildren")
      ? {
          type: "text",
          value: t.value,
        }
      : {
          type: "element",
          tagName: "div",
          properties: {},
          children: e.all(t),
        };
  e.patch(t, r);
  return e.applyData(t, r);
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
  ) {
    if (r) {
      n.push({
        type: "text",
        value: `
`,
      });
    }
    n.push(e[r]);
  }
  if (t && e.length > 0) {
    n.push({
      type: "text",
      value: `
`,
    });
  }
  return n;
}
function Jt(e) {
  let t = 0;
  let n = e.charCodeAt(t);
  while (n === 9 || n === 32) {
    t++;
    n = e.charCodeAt(t);
  }
  return e.slice(t);
}
function Kt(e, t) {
  const n = pl(e, t);
  const r = n.one(e, undefined);
  const i = fl(n);
  const u = Array.isArray(r)
    ? {
        type: "root",
        children: r,
      }
    : r || {
        type: "root",
        children: [],
      };
  if (i) {
    u.children.push(
      {
        type: "text",
        value: `
`,
      },
      i,
    );
  }
  return u;
}
function xl(e, t) {
  if (e && "run" in e) {
    return async function (n, r) {
      const i = Kt(n, {
        file: r,
        ...t,
      });
      await e.run(i, r);
    };
  } else {
    return function (n, r) {
      return Kt(n, {
        file: r,
        ...(e || t),
      });
    };
  }
}
function Zt(e) {
  if (e) {
    throw e;
  }
}
var Qe;
var en;
function kl() {
  if (en) {
    return Qe;
  }
  en = 1;
  var e = Object.prototype.hasOwnProperty;
  var t = Object.prototype.toString;
  var n = Object.defineProperty;
  var r = Object.getOwnPropertyDescriptor;
  function i(s) {
    if (typeof Array.isArray == "function") {
      return Array.isArray(s);
    } else {
      return t.call(s) === "[object Array]";
    }
  }
  function u(s) {
    if (!s || t.call(s) !== "[object Object]") {
      return false;
    }
    var o = e.call(s, "constructor");
    var f =
      s.constructor &&
      s.constructor.prototype &&
      e.call(s.constructor.prototype, "isPrototypeOf");
    if (s.constructor && !o && !f) {
      return false;
    }
    var d;
    for (d in s);
    return typeof d === "undefined" || e.call(s, d);
  }
  function l(s, o) {
    if (n && o.name === "__proto__") {
      n(s, o.name, {
        enumerable: true,
        configurable: true,
        value: o.newValue,
        writable: true,
      });
    } else {
      s[o.name] = o.newValue;
    }
  }
  function a(s, o) {
    if (o === "__proto__") {
      if (e.call(s, o)) {
        if (r) {
          return r(s, o).value;
        }
      } else {
        return;
      }
    }
    return s[o];
  }
  Qe = function c() {
    var s;
    var o;
    var f;
    var d;
    var h;
    var w;
    var E = arguments[0];
    var I = 1;
    var x = arguments.length;
    var _ = false;
    if (typeof E == "boolean") {
      _ = E;
      E = arguments[1] || {};
      I = 2;
    }
    if (E == null || (typeof E != "object" && typeof E != "function")) {
      E = {};
    }
    for (; I < x; ++I) {
      s = arguments[I];
      if (s != null) {
        for (o in s) {
          f = a(E, o);
          d = a(s, o);
          if (E !== d) {
            if (_ && d && (u(d) || (h = i(d)))) {
              if (h) {
                h = false;
                w = f && i(f) ? f : [];
              } else {
                w = f && u(f) ? f : {};
              }
              l(E, {
                name: o,
                newValue: c(_, w, d),
              });
            } else if (typeof d !== "undefined") {
              l(E, {
                name: o,
                newValue: d,
              });
            }
          }
        }
      }
    }
    return E;
  };
  return Qe;
}
var wl = kl();
const Ye = an(wl);
function ut(e) {
  if (typeof e != "object" || e === null) {
    return false;
  }
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function bl() {
  const e = [];
  const t = {
    run: n,
    use: r,
  };
  return t;
  function n(...i) {
    let u = -1;
    const l = i.pop();
    if (typeof l != "function") {
      throw new TypeError("Expected function as last argument, not " + l);
    }
    a(null, ...i);
    function a(c, ...s) {
      const o = e[++u];
      let f = -1;
      if (c) {
        l(c);
        return;
      }
      while (++f < i.length) {
        if (s[f] === null || s[f] === undefined) {
          s[f] = i[f];
        }
      }
      i = s;
      if (o) {
        Sl(o, a)(...s);
      } else {
        l(null, ...s);
      }
    }
  }
  function r(i) {
    if (typeof i != "function") {
      throw new TypeError("Expected `middelware` to be a function, not " + i);
    }
    e.push(i);
    return t;
  }
}
function Sl(e, t) {
  let n;
  return r;
  function r(...l) {
    const a = e.length > l.length;
    let c;
    if (a) {
      l.push(i);
    }
    try {
      c = e.apply(this, l);
    } catch (s) {
      const o = s;
      if (a && n) {
        throw o;
      }
      return i(o);
    }
    if (!a) {
      if (c && c.then && typeof c.then == "function") {
        c.then(u, i);
      } else if (c instanceof Error) {
        i(c);
      } else {
        u(c);
      }
    }
  }
  function i(l, ...a) {
    if (!n) {
      n = true;
      t(l, ...a);
    }
  }
  function u(l) {
    i(null, l);
  }
}
const te = {
  basename: El,
  dirname: Il,
  extname: Cl,
  join: Tl,
  sep: "/",
};
function El(e, t) {
  if (t !== undefined && typeof t != "string") {
    throw new TypeError('"ext" argument must be a string');
  }
  Ne(e);
  let n = 0;
  let r = -1;
  let i = e.length;
  let u;
  if (t === undefined || t.length === 0 || t.length > e.length) {
    while (i--) {
      if (e.codePointAt(i) === 47) {
        if (u) {
          n = i + 1;
          break;
        }
      } else if (r < 0) {
        u = true;
        r = i + 1;
      }
    }
    if (r < 0) {
      return "";
    } else {
      return e.slice(n, r);
    }
  }
  if (t === e) {
    return "";
  }
  let l = -1;
  let a = t.length - 1;
  while (i--) {
    if (e.codePointAt(i) === 47) {
      if (u) {
        n = i + 1;
        break;
      }
    } else {
      if (l < 0) {
        u = true;
        l = i + 1;
      }
      if (a > -1) {
        if (e.codePointAt(i) === t.codePointAt(a--)) {
          if (a < 0) {
            r = i;
          }
        } else {
          a = -1;
          r = l;
        }
      }
    }
  }
  if (n === r) {
    r = l;
  } else if (r < 0) {
    r = e.length;
  }
  return e.slice(n, r);
}
function Il(e) {
  Ne(e);
  if (e.length === 0) {
    return ".";
  }
  let t = -1;
  let n = e.length;
  let r;
  while (--n) {
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else {
      r ||= true;
    }
  }
  if (t < 0) {
    if (e.codePointAt(0) === 47) {
      return "/";
    } else {
      return ".";
    }
  } else if (t === 1 && e.codePointAt(0) === 47) {
    return "//";
  } else {
    return e.slice(0, t);
  }
}
function Cl(e) {
  Ne(e);
  let t = e.length;
  let n = -1;
  let r = 0;
  let i = -1;
  let u = 0;
  let l;
  while (t--) {
    const a = e.codePointAt(t);
    if (a === 47) {
      if (l) {
        r = t + 1;
        break;
      }
      continue;
    }
    if (n < 0) {
      l = true;
      n = t + 1;
    }
    if (a === 46) {
      if (i < 0) {
        i = t;
      } else if (u !== 1) {
        u = 1;
      }
    } else if (i > -1) {
      u = -1;
    }
  }
  if (i < 0 || n < 0 || u === 0 || (u === 1 && i === n - 1 && i === r + 1)) {
    return "";
  } else {
    return e.slice(i, n);
  }
}
function Tl(...e) {
  let t = -1;
  let n;
  while (++t < e.length) {
    Ne(e[t]);
    if (e[t]) {
      n = n === undefined ? e[t] : n + "/" + e[t];
    }
  }
  if (n === undefined) {
    return ".";
  } else {
    return Al(n);
  }
}
function Al(e) {
  Ne(e);
  const t = e.codePointAt(0) === 47;
  let n = zl(e, !t);
  if (n.length === 0 && !t) {
    n = ".";
  }
  if (n.length > 0 && e.codePointAt(e.length - 1) === 47) {
    n += "/";
  }
  if (t) {
    return "/" + n;
  } else {
    return n;
  }
}
function zl(e, t) {
  let n = "";
  let r = 0;
  let i = -1;
  let u = 0;
  let l = -1;
  let a;
  let c;
  while (++l <= e.length) {
    if (l < e.length) {
      a = e.codePointAt(l);
    } else {
      if (a === 47) {
        break;
      }
      a = 47;
    }
    if (a === 47) {
      if (i !== l - 1 && u !== 1) {
        if (i !== l - 1 && u === 2) {
          if (
            n.length < 2 ||
            r !== 2 ||
            n.codePointAt(n.length - 1) !== 46 ||
            n.codePointAt(n.length - 2) !== 46
          ) {
            if (n.length > 2) {
              c = n.lastIndexOf("/");
              if (c !== n.length - 1) {
                if (c < 0) {
                  n = "";
                  r = 0;
                } else {
                  n = n.slice(0, c);
                  r = n.length - 1 - n.lastIndexOf("/");
                }
                i = l;
                u = 0;
                continue;
              }
            } else if (n.length > 0) {
              n = "";
              r = 0;
              i = l;
              u = 0;
              continue;
            }
          }
          if (t) {
            n = n.length > 0 ? n + "/.." : "..";
            r = 2;
          }
        } else {
          if (n.length > 0) {
            n += "/" + e.slice(i + 1, l);
          } else {
            n = e.slice(i + 1, l);
          }
          r = l - i - 1;
        }
      }
      i = l;
      u = 0;
    } else if (a === 46 && u > -1) {
      u++;
    } else {
      u = -1;
    }
  }
  return n;
}
function Ne(e) {
  if (typeof e != "string") {
    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
  }
}
const _l = {
  cwd: Pl,
};
function Pl() {
  return "/";
}
function lt(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    !!("href" in e) &&
    !!e.href &&
    !!("protocol" in e) &&
    !!e.protocol &&
    e.auth === undefined
  );
}
function Nl(e) {
  if (typeof e == "string") {
    e = new URL(e);
  } else if (!lt(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        e +
        "`",
    );
    t.code = "ERR_INVALID_ARG_TYPE";
    throw t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    t.code = "ERR_INVALID_URL_SCHEME";
    throw t;
  }
  return Fl(e);
}
function Fl(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin',
    );
    r.code = "ERR_INVALID_FILE_URL_HOST";
    throw r;
  }
  const t = e.pathname;
  let n = -1;
  while (++n < t.length) {
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters",
        );
        i.code = "ERR_INVALID_FILE_URL_PATH";
        throw i;
      }
    }
  }
  return decodeURIComponent(t);
}
const Xe = ["history", "path", "basename", "stem", "extname", "dirname"];
class Ln {
  constructor(t) {
    let n;
    if (t) {
      if (lt(t)) {
        n = {
          path: t,
        };
      } else if (typeof t == "string" || Ll(t)) {
        n = {
          value: t,
        };
      } else {
        n = t;
      }
    } else {
      n = {};
    }
    this.cwd = "cwd" in n ? "" : _l.cwd();
    this.data = {};
    this.history = [];
    this.messages = [];
    this.value;
    this.map;
    this.result;
    this.stored;
    let r = -1;
    while (++r < Xe.length) {
      const u = Xe[r];
      if (u in n && n[u] !== undefined && n[u] !== null) {
        this[u] = u === "history" ? [...n[u]] : n[u];
      }
    }
    let i;
    for (i in n) {
      if (!Xe.includes(i)) {
        this[i] = n[i];
      }
    }
  }
  get basename() {
    if (typeof this.path == "string") {
      return te.basename(this.path);
    } else {
      return undefined;
    }
  }
  set basename(t) {
    Ge(t, "basename");
    We(t, "basename");
    this.path = te.join(this.dirname || "", t);
  }
  get dirname() {
    if (typeof this.path == "string") {
      return te.dirname(this.path);
    } else {
      return undefined;
    }
  }
  set dirname(t) {
    tn(this.basename, "dirname");
    this.path = te.join(t || "", this.basename);
  }
  get extname() {
    if (typeof this.path == "string") {
      return te.extname(this.path);
    } else {
      return undefined;
    }
  }
  set extname(t) {
    We(t, "extname");
    tn(this.dirname, "extname");
    if (t) {
      if (t.codePointAt(0) !== 46) {
        throw new Error("`extname` must start with `.`");
      }
      if (t.includes(".", 1)) {
        throw new Error("`extname` cannot contain multiple dots");
      }
    }
    this.path = te.join(this.dirname, this.stem + (t || ""));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(t) {
    if (lt(t)) {
      t = Nl(t);
    }
    Ge(t, "path");
    if (this.path !== t) {
      this.history.push(t);
    }
  }
  get stem() {
    if (typeof this.path == "string") {
      return te.basename(this.path, this.extname);
    } else {
      return undefined;
    }
  }
  set stem(t) {
    Ge(t, "stem");
    We(t, "stem");
    this.path = te.join(this.dirname || "", t + (this.extname || ""));
  }
  fail(t, n, r) {
    const i = this.message(t, n, r);
    i.fatal = true;
    throw i;
  }
  info(t, n, r) {
    const i = this.message(t, n, r);
    i.fatal = undefined;
    return i;
  }
  message(t, n, r) {
    const i = new $(t, n, r);
    if (this.path) {
      i.name = this.path + ":" + i.name;
      i.file = this.path;
    }
    i.fatal = false;
    this.messages.push(i);
    return i;
  }
  toString(t) {
    if (this.value === undefined) {
      return "";
    } else if (typeof this.value == "string") {
      return this.value;
    } else {
      return new TextDecoder(t || undefined).decode(this.value);
    }
  }
}
function We(e, t) {
  if (e && e.includes(te.sep)) {
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + te.sep + "`",
    );
  }
}
function Ge(e, t) {
  if (!e) {
    throw new Error("`" + t + "` cannot be empty");
  }
}
function tn(e, t) {
  if (!e) {
    throw new Error("Setting `" + t + "` requires `path` to be set too");
  }
}
function Ll(e) {
  return (
    !!e &&
    typeof e == "object" &&
    !!("byteLength" in e) &&
    !!("byteOffset" in e)
  );
}
const Dl = function (e) {
  const r = this.constructor.prototype;
  const i = r[e];
  const u = function () {
    return i.apply(u, arguments);
  };
  Object.setPrototypeOf(u, r);
  return u;
};
const Rl = {}.hasOwnProperty;
class kt extends Dl {
  constructor() {
    super("copy");
    this.Compiler = undefined;
    this.Parser = undefined;
    this.attachers = [];
    this.compiler = undefined;
    this.freezeIndex = -1;
    this.frozen = undefined;
    this.namespace = {};
    this.parser = undefined;
    this.transformers = bl();
  }
  copy() {
    const t = new kt();
    let n = -1;
    while (++n < this.attachers.length) {
      const r = this.attachers[n];
      t.use(...r);
    }
    t.data(Ye(true, {}, this.namespace));
    return t;
  }
  data(t, n) {
    if (typeof t == "string") {
      if (arguments.length === 2) {
        Ze("data", this.frozen);
        this.namespace[t] = n;
        return this;
      } else {
        return (Rl.call(this.namespace, t) && this.namespace[t]) || undefined;
      }
    } else if (t) {
      Ze("data", this.frozen);
      this.namespace = t;
      return this;
    } else {
      return this.namespace;
    }
  }
  freeze() {
    if (this.frozen) {
      return this;
    }
    const t = this;
    while (++this.freezeIndex < this.attachers.length) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === false) {
        continue;
      }
      if (r[0] === true) {
        r[0] = undefined;
      }
      const i = n.call(t, ...r);
      if (typeof i == "function") {
        this.transformers.use(i);
      }
    }
    this.frozen = true;
    this.freezeIndex = Number.POSITIVE_INFINITY;
    return this;
  }
  parse(t) {
    this.freeze();
    const n = Re(t);
    const r = this.parser || this.Parser;
    Je("parse", r);
    return r(String(n), n);
  }
  process(t, n) {
    const r = this;
    this.freeze();
    Je("process", this.parser || this.Parser);
    Ke("process", this.compiler || this.Compiler);
    if (n) {
      return i(undefined, n);
    } else {
      return new Promise(i);
    }
    function i(u, l) {
      const a = Re(t);
      const c = r.parse(a);
      r.run(c, a, function (o, f, d) {
        if (o || !f || !d) {
          return s(o);
        }
        const h = f;
        const w = r.stringify(h, d);
        if (Ml(w)) {
          d.value = w;
        } else {
          d.result = w;
        }
        s(o, d);
      });
      function s(o, f) {
        if (o || !f) {
          l(o);
        } else if (u) {
          u(f);
        } else {
          n(undefined, f);
        }
      }
    }
  }
  processSync(t) {
    let n = false;
    let r;
    this.freeze();
    Je("processSync", this.parser || this.Parser);
    Ke("processSync", this.compiler || this.Compiler);
    this.process(t, i);
    rn("processSync", "process", n);
    return r;
    function i(u, l) {
      n = true;
      Zt(u);
      r = l;
    }
  }
  run(t, n, r) {
    nn(t);
    this.freeze();
    const i = this.transformers;
    if (!r && typeof n == "function") {
      r = n;
      n = undefined;
    }
    if (r) {
      return u(undefined, r);
    } else {
      return new Promise(u);
    }
    function u(l, a) {
      const c = Re(n);
      i.run(t, c, s);
      function s(o, f, d) {
        const h = f || t;
        if (o) {
          a(o);
        } else if (l) {
          l(h);
        } else {
          r(undefined, h, d);
        }
      }
    }
  }
  runSync(t, n) {
    let r = false;
    let i;
    this.run(t, n, u);
    rn("runSync", "run", r);
    return i;
    function u(l, a) {
      Zt(l);
      i = a;
      r = true;
    }
  }
  stringify(t, n) {
    this.freeze();
    const r = Re(n);
    const i = this.compiler || this.Compiler;
    Ke("stringify", i);
    nn(t);
    return i(t, r);
  }
  use(t, ...n) {
    const r = this.attachers;
    const i = this.namespace;
    Ze("use", this.frozen);
    if (t != null) {
      if (typeof t == "function") {
        c(t, n);
      } else if (typeof t == "object") {
        if (Array.isArray(t)) {
          a(t);
        } else {
          l(t);
        }
      } else {
        throw new TypeError("Expected usable value, not `" + t + "`");
      }
    }
    return this;
    function u(s) {
      if (typeof s == "function") {
        c(s, []);
      } else if (typeof s == "object") {
        if (Array.isArray(s)) {
          const [o, ...f] = s;
          c(o, f);
        } else {
          l(s);
        }
      } else {
        throw new TypeError("Expected usable value, not `" + s + "`");
      }
    }
    function l(s) {
      if (!("plugins" in s) && !("settings" in s)) {
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither",
        );
      }
      a(s.plugins);
      if (s.settings) {
        i.settings = Ye(true, i.settings, s.settings);
      }
    }
    function a(s) {
      let o = -1;
      if (s != null) {
        if (Array.isArray(s)) {
          while (++o < s.length) {
            const f = s[o];
            u(f);
          }
        } else {
          throw new TypeError("Expected a list of plugins, not `" + s + "`");
        }
      }
    }
    function c(s, o) {
      let f = -1;
      let d = -1;
      while (++f < r.length) {
        if (r[f][0] === s) {
          d = f;
          break;
        }
      }
      if (d === -1) {
        r.push([s, ...o]);
      } else if (o.length > 0) {
        let [h, ...w] = o;
        const E = r[d][1];
        if (ut(E) && ut(h)) {
          h = Ye(true, E, h);
        }
        r[d] = [s, h, ...w];
      }
    }
  }
}
const Ol = new kt().freeze();
function Je(e, t) {
  if (typeof t != "function") {
    throw new TypeError("Cannot `" + e + "` without `parser`");
  }
}
function Ke(e, t) {
  if (typeof t != "function") {
    throw new TypeError("Cannot `" + e + "` without `compiler`");
  }
}
function Ze(e, t) {
  if (t) {
    throw new Error(
      "Cannot call `" +
        e +
        "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.",
    );
  }
}
function nn(e) {
  if (!ut(e) || typeof e.type != "string") {
    throw new TypeError("Expected node, got `" + e + "`");
  }
}
function rn(e, t, n) {
  if (!n) {
    throw new Error("`" + e + "` finished async. Use `" + t + "` instead");
  }
}
function Re(e) {
  if (Bl(e)) {
    return e;
  } else {
    return new Ln(e);
  }
}
function Bl(e) {
  return (
    !!e && typeof e == "object" && !!("message" in e) && !!("messages" in e)
  );
}
function Ml(e) {
  return typeof e == "string" || jl(e);
}
function jl(e) {
  return (
    !!e &&
    typeof e == "object" &&
    !!("byteLength" in e) &&
    !!("byteOffset" in e)
  );
}
const vl = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md";
const un = [];
const ln = {
  allowDangerousHtml: true,
};
const Vl = /^(https?|ircs?|mailto|xmpp)$/i;
const Hl = [
  {
    from: "astPlugins",
    id: "remove-buggy-html-in-markdown-parser",
  },
  {
    from: "allowDangerousHtml",
    id: "remove-buggy-html-in-markdown-parser",
  },
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
  {
    from: "className",
    id: "remove-classname",
  },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements",
  },
  {
    from: "escapeHtml",
    id: "remove-buggy-html-in-markdown-parser",
  },
  {
    from: "includeElementIndex",
    id: "#remove-includeelementindex",
  },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex",
  },
  {
    from: "linkTarget",
    id: "remove-linktarget",
  },
  {
    from: "plugins",
    id: "change-plugins-to-remarkplugins",
    to: "remarkPlugins",
  },
  {
    from: "rawSourcePos",
    id: "#remove-rawsourcepos",
  },
  {
    from: "renderers",
    id: "change-renderers-to-components",
    to: "components",
  },
  {
    from: "source",
    id: "change-source-to-children",
    to: "children",
  },
  {
    from: "sourcePos",
    id: "#remove-sourcepos",
  },
  {
    from: "transformImageUri",
    id: "#add-urltransform",
    to: "urlTransform",
  },
  {
    from: "transformLinkUri",
    id: "#add-urltransform",
    to: "urlTransform",
  },
];
function Gl(e) {
  const t = ql(e);
  const n = Ul(e);
  return $l(t.runSync(t.parse(n), n), e);
}
function ql(e) {
  const t = e.rehypePlugins || un;
  const n = e.remarkPlugins || un;
  const r = e.remarkRehypeOptions
    ? {
        ...e.remarkRehypeOptions,
        ...ln,
      }
    : ln;
  return Ol().use(Fu).use(n).use(xl, r).use(t);
}
function Ul(e) {
  const t = e.children || "";
  const n = new Ln();
  if (typeof t == "string") {
    n.value = t;
  }
  return n;
}
function $l(e, t) {
  const n = t.allowedElements;
  const r = t.allowElement;
  const i = t.components;
  const u = t.disallowedElements;
  const l = t.skipHtml;
  const a = t.unwrapDisallowed;
  const c = t.urlTransform || Ql;
  for (const o of Hl) {
    if (Object.hasOwn(t, o.from)) {
      "" +
        o.from +
        (o.to ? "use `" + o.to + "` instead" : "remove it") +
        vl +
        o.id;
      undefined;
    }
  }
  Fn(e, s);
  return fr(e, {
    Fragment: Ve.Fragment,
    components: i,
    ignoreInvalidStyle: true,
    jsx: Ve.jsx,
    jsxs: Ve.jsxs,
    passKeys: true,
    passNode: true,
  });
  function s(o, f, d) {
    if (o.type === "raw" && d && typeof f == "number") {
      if (l) {
        d.children.splice(f, 1);
      } else {
        d.children[f] = {
          type: "text",
          value: o.value,
        };
      }
      return f;
    }
    if (o.type === "element") {
      let h;
      for (h in qe) {
        if (Object.hasOwn(qe, h) && Object.hasOwn(o.properties, h)) {
          const w = o.properties[h];
          const E = qe[h];
          if (E === null || E.includes(o.tagName)) {
            o.properties[h] = c(String(w || ""), h, o);
          }
        }
      }
    }
    if (o.type === "element") {
      let h = n ? !n.includes(o.tagName) : u ? u.includes(o.tagName) : false;
      if (!h && r && typeof f == "number") {
        h = !r(o, f, d);
      }
      if (h && d && typeof f == "number") {
        if (a && o.children) {
          d.children.splice(f, 1, ...o.children);
        } else {
          d.children.splice(f, 1);
        }
        return f;
      }
    }
  }
}
function Ql(e) {
  const t = e.indexOf(":");
  const n = e.indexOf("?");
  const r = e.indexOf("#");
  const i = e.indexOf("/");
  if (
    t === -1 ||
    (i !== -1 && t > i) ||
    (n !== -1 && t > n) ||
    (r !== -1 && t > r) ||
    Vl.test(e.slice(0, t))
  ) {
    return e;
  } else {
    return "";
  }
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
