const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/PdfCanvasViewer-jW4Ex2Pm.js",
      "assets/index-BM3ZINIl.js",
      "assets/index-DCmpUGyQ.css",
      "assets/usePdfDocument-D5PFNoxR.js",
      "assets/pdfDocument-V1r75ju6.js",
      "assets/PdfCanvasViewerControls-CKiN42mP.js",
      "assets/katex.min-ADdKj7O-.js",
      "assets/katex-CfVKi3_s.css",
      "assets/chevron-left-BwEFN4zp.js",
      "assets/MarkdownHighlights-C-ZhT8z1.js",
      "assets/TextField-D8vc_sXz.js",
      "assets/index-Yb6ONXKu.js",
      "assets/zoom-in-uCZ29dqq.js",
      "assets/LoadingSection-wWBu2CqJ.js",
      "assets/Alert-DnFVD8li.js",
    ]),
) => i.map((i) => d[i]);
var sl = Object.defineProperty;
var al = (e, t, n) =>
  t in e ? sl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var ae = (e, t, n) => al(e, typeof t != "symbol" ? t + "" : t, n);
import {
  bI as cl,
  R as ll,
  r as z,
  j as R,
  g as re,
  B as pe,
  T as Gt,
  V as ul,
  C as ds,
  _ as ui,
  $ as dl,
} from "./index-BM3ZINIl.js";
import { u as fl } from "./useResizablePanelWidth-DfMwOMGi.js";
import { a as hl } from "./Markdown-Dh8LhaRc.js";
import { P as di, a as pl } from "./PdfCanvasViewerControls-CKiN42mP.js";
import "./LatexProjectFolderExpansionContext-DKFyp-6E.js";
import "./source-editor-CGMzw50e.js";
import "./useAttachmentContent-15uaQfvd.js";
import { R as fi } from "./LatexWorkspaceCanvas-DKG1oD4d.js";
import { u as gl } from "./useQueuedWriteupPdf-CoC8uXix.js";
import { T as ml, a as hi } from "./MarkdownHighlights-C-ZhT8z1.js";
import { P as yl } from "./panel-left-open-BNgbA-Qm.js";
import { P as xl } from "./panel-left-close-BNWX01EL.js";
import { A as wl } from "./Alert-DnFVD8li.js";
function le(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++) (r = le(e[n])) !== "" && (t += (t && " ") + r);
  else for (let n in e) e[n] && (t += (t && " ") + n);
  return t;
}
var vl = { value: () => {} };
function an() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Ft(n);
}
function Ft(e) {
  this._ = e;
}
function bl(e, t) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (n) {
      var r = "",
        i = n.indexOf(".");
      if ((i >= 0 && ((r = n.slice(i + 1)), (n = n.slice(0, i))), n && !t.hasOwnProperty(n)))
        throw new Error("unknown type: " + n);
      return { type: n, name: r };
    });
}
Ft.prototype = an.prototype = {
  constructor: Ft,
  on: function (e, t) {
    var n = this._,
      r = bl(e + "", n),
      i,
      s = -1,
      o = r.length;
    if (arguments.length < 2) {
      for (; ++s < o;) if ((i = (e = r[s]).type) && (i = _l(n[i], e.name))) return i;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++s < o;)
      if ((i = (e = r[s]).type)) n[i] = pi(n[i], e.name, t);
      else if (t == null) for (i in n) n[i] = pi(n[i], e.name, null);
    return this;
  },
  copy: function () {
    var e = {},
      t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Ft(e);
  },
  call: function (e, t) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), r = 0, i, s; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (s = this._[e], r = 0, i = s.length; r < i; ++r) s[r].value.apply(t, n);
  },
  apply: function (e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], i = 0, s = r.length; i < s; ++i) r[i].value.apply(t, n);
  },
};
function _l(e, t) {
  for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function pi(e, t, n) {
  for (var r = 0, i = e.length; r < i; ++r)
    if (e[r].name === t) {
      ((e[r] = vl), (e = e.slice(0, r).concat(e.slice(r + 1))));
      break;
    }
  return (n != null && e.push({ name: t, value: n }), e);
}
var Er = "http://www.w3.org/1999/xhtml";
const gi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Er,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/",
};
function cn(e) {
  var t = (e += ""),
    n = t.indexOf(":");
  return (
    n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)),
    gi.hasOwnProperty(t) ? { space: gi[t], local: e } : e
  );
}
function El(e) {
  return function () {
    var t = this.ownerDocument,
      n = this.namespaceURI;
    return n === Er && t.documentElement.namespaceURI === Er
      ? t.createElement(e)
      : t.createElementNS(n, e);
  };
}
function Sl(e) {
  return function () {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function fs(e) {
  var t = cn(e);
  return (t.local ? Sl : El)(t);
}
function Nl() {}
function Or(e) {
  return e == null
    ? Nl
    : function () {
        return this.querySelector(e);
      };
}
function Cl(e) {
  typeof e != "function" && (e = Or(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], o = s.length, a = (r[i] = new Array(o)), l, d, u = 0; u < o; ++u)
      (l = s[u]) &&
        (d = e.call(l, l.__data__, u, s)) &&
        ("__data__" in l && (d.__data__ = l.__data__), (a[u] = d));
  return new fe(r, this._parents);
}
function kl(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Ml() {
  return [];
}
function hs(e) {
  return e == null
    ? Ml
    : function () {
        return this.querySelectorAll(e);
      };
}
function Il(e) {
  return function () {
    return kl(e.apply(this, arguments));
  };
}
function Pl(e) {
  typeof e == "function" ? (e = Il(e)) : (e = hs(e));
  for (var t = this._groups, n = t.length, r = [], i = [], s = 0; s < n; ++s)
    for (var o = t[s], a = o.length, l, d = 0; d < a; ++d)
      (l = o[d]) && (r.push(e.call(l, l.__data__, d, o)), i.push(l));
  return new fe(r, i);
}
function ps(e) {
  return function () {
    return this.matches(e);
  };
}
function gs(e) {
  return function (t) {
    return t.matches(e);
  };
}
var Al = Array.prototype.find;
function Tl(e) {
  return function () {
    return Al.call(this.children, e);
  };
}
function Rl() {
  return this.firstElementChild;
}
function Ll(e) {
  return this.select(e == null ? Rl : Tl(typeof e == "function" ? e : gs(e)));
}
var $l = Array.prototype.filter;
function Dl() {
  return Array.from(this.children);
}
function Ol(e) {
  return function () {
    return $l.call(this.children, e);
  };
}
function jl(e) {
  return this.selectAll(e == null ? Dl : Ol(typeof e == "function" ? e : gs(e)));
}
function Hl(e) {
  typeof e != "function" && (e = ps(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], o = s.length, a = (r[i] = []), l, d = 0; d < o; ++d)
      (l = s[d]) && e.call(l, l.__data__, d, s) && a.push(l);
  return new fe(r, this._parents);
}
function ms(e) {
  return new Array(e.length);
}
function zl() {
  return new fe(this._enter || this._groups.map(ms), this._parents);
}
function Xt(e, t) {
  ((this.ownerDocument = e.ownerDocument),
    (this.namespaceURI = e.namespaceURI),
    (this._next = null),
    (this._parent = e),
    (this.__data__ = t));
}
Xt.prototype = {
  constructor: Xt,
  appendChild: function (e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function (e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function (e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function (e) {
    return this._parent.querySelectorAll(e);
  },
};
function Vl(e) {
  return function () {
    return e;
  };
}
function Fl(e, t, n, r, i, s) {
  for (var o = 0, a, l = t.length, d = s.length; o < d; ++o)
    (a = t[o]) ? ((a.__data__ = s[o]), (r[o] = a)) : (n[o] = new Xt(e, s[o]));
  for (; o < l; ++o) (a = t[o]) && (i[o] = a);
}
function Bl(e, t, n, r, i, s, o) {
  var a,
    l,
    d = new Map(),
    u = t.length,
    c = s.length,
    f = new Array(u),
    h;
  for (a = 0; a < u; ++a)
    (l = t[a]) &&
      ((f[a] = h = o.call(l, l.__data__, a, t) + ""), d.has(h) ? (i[a] = l) : d.set(h, l));
  for (a = 0; a < c; ++a)
    ((h = o.call(e, s[a], a, s) + ""),
      (l = d.get(h)) ? ((r[a] = l), (l.__data__ = s[a]), d.delete(h)) : (n[a] = new Xt(e, s[a])));
  for (a = 0; a < u; ++a) (l = t[a]) && d.get(f[a]) === l && (i[a] = l);
}
function ql(e) {
  return e.__data__;
}
function Wl(e, t) {
  if (!arguments.length) return Array.from(this, ql);
  var n = t ? Bl : Fl,
    r = this._parents,
    i = this._groups;
  typeof e != "function" && (e = Vl(e));
  for (var s = i.length, o = new Array(s), a = new Array(s), l = new Array(s), d = 0; d < s; ++d) {
    var u = r[d],
      c = i[d],
      f = c.length,
      h = Yl(e.call(u, u && u.__data__, d, r)),
      p = h.length,
      v = (a[d] = new Array(p)),
      m = (o[d] = new Array(p)),
      y = (l[d] = new Array(f));
    n(u, c, v, m, y, h, t);
    for (var x = 0, g = 0, w, C; x < p; ++x)
      if ((w = v[x])) {
        for (x >= g && (g = x + 1); !(C = m[g]) && ++g < p;);
        w._next = C || null;
      }
  }
  return ((o = new fe(o, r)), (o._enter = a), (o._exit = l), o);
}
function Yl(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Gl() {
  return new fe(this._exit || this._groups.map(ms), this._parents);
}
function Xl(e, t, n) {
  var r = this.enter(),
    i = this,
    s = this.exit();
  return (
    typeof e == "function" ? ((r = e(r)), r && (r = r.selection())) : (r = r.append(e + "")),
    t != null && ((i = t(i)), i && (i = i.selection())),
    n == null ? s.remove() : n(s),
    r && i ? r.merge(i).order() : i
  );
}
function Ul(e) {
  for (
    var t = e.selection ? e.selection() : e,
      n = this._groups,
      r = t._groups,
      i = n.length,
      s = r.length,
      o = Math.min(i, s),
      a = new Array(i),
      l = 0;
    l < o;
    ++l
  )
    for (var d = n[l], u = r[l], c = d.length, f = (a[l] = new Array(c)), h, p = 0; p < c; ++p)
      (h = d[p] || u[p]) && (f[p] = h);
  for (; l < i; ++l) a[l] = n[l];
  return new fe(a, this._parents);
}
function Kl() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n;)
    for (var r = e[t], i = r.length - 1, s = r[i], o; --i >= 0;)
      (o = r[i]) &&
        (s && o.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(o, s), (s = o));
  return this;
}
function Zl(e) {
  e || (e = Ql);
  function t(c, f) {
    return c && f ? e(c.__data__, f.__data__) : !c - !f;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var o = n[s], a = o.length, l = (i[s] = new Array(a)), d, u = 0; u < a; ++u)
      (d = o[u]) && (l[u] = d);
    l.sort(t);
  }
  return new fe(i, this._parents).order();
}
function Ql(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Jl() {
  var e = arguments[0];
  return ((arguments[0] = this), e.apply(null, arguments), this);
}
function eu() {
  return Array.from(this);
}
function tu() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, s = r.length; i < s; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function nu() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function ru() {
  return !this.node();
}
function iu(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var i = t[n], s = 0, o = i.length, a; s < o; ++s)
      (a = i[s]) && e.call(a, a.__data__, s, i);
  return this;
}
function ou(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function su(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function au(e, t) {
  return function () {
    this.setAttribute(e, t);
  };
}
function cu(e, t) {
  return function () {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function lu(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function uu(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function du(e, t) {
  var n = cn(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each(
    (t == null
      ? n.local
        ? su
        : ou
      : typeof t == "function"
        ? n.local
          ? uu
          : lu
        : n.local
          ? cu
          : au)(n, t),
  );
}
function ys(e) {
  return (e.ownerDocument && e.ownerDocument.defaultView) || (e.document && e) || e.defaultView;
}
function fu(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function hu(e, t, n) {
  return function () {
    this.style.setProperty(e, t, n);
  };
}
function pu(e, t, n) {
  return function () {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function gu(e, t, n) {
  return arguments.length > 1
    ? this.each((t == null ? fu : typeof t == "function" ? pu : hu)(e, t, n ?? ""))
    : rt(this.node(), e);
}
function rt(e, t) {
  return e.style.getPropertyValue(t) || ys(e).getComputedStyle(e, null).getPropertyValue(t);
}
function mu(e) {
  return function () {
    delete this[e];
  };
}
function yu(e, t) {
  return function () {
    this[e] = t;
  };
}
function xu(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : (this[e] = n);
  };
}
function wu(e, t) {
  return arguments.length > 1
    ? this.each((t == null ? mu : typeof t == "function" ? xu : yu)(e, t))
    : this.node()[e];
}
function xs(e) {
  return e.trim().split(/^|\s+/);
}
function jr(e) {
  return e.classList || new ws(e);
}
function ws(e) {
  ((this._node = e), (this._names = xs(e.getAttribute("class") || "")));
}
ws.prototype = {
  add: function (e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function (e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function (e) {
    return this._names.indexOf(e) >= 0;
  },
};
function vs(e, t) {
  for (var n = jr(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function bs(e, t) {
  for (var n = jr(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function vu(e) {
  return function () {
    vs(this, e);
  };
}
function bu(e) {
  return function () {
    bs(this, e);
  };
}
function _u(e, t) {
  return function () {
    (t.apply(this, arguments) ? vs : bs)(this, e);
  };
}
function Eu(e, t) {
  var n = xs(e + "");
  if (arguments.length < 2) {
    for (var r = jr(this.node()), i = -1, s = n.length; ++i < s;) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? _u : t ? vu : bu)(n, t));
}
function Su() {
  this.textContent = "";
}
function Nu(e) {
  return function () {
    this.textContent = e;
  };
}
function Cu(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function ku(e) {
  return arguments.length
    ? this.each(e == null ? Su : (typeof e == "function" ? Cu : Nu)(e))
    : this.node().textContent;
}
function Mu() {
  this.innerHTML = "";
}
function Iu(e) {
  return function () {
    this.innerHTML = e;
  };
}
function Pu(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Au(e) {
  return arguments.length
    ? this.each(e == null ? Mu : (typeof e == "function" ? Pu : Iu)(e))
    : this.node().innerHTML;
}
function Tu() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ru() {
  return this.each(Tu);
}
function Lu() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function $u() {
  return this.each(Lu);
}
function Du(e) {
  var t = typeof e == "function" ? e : fs(e);
  return this.select(function () {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Ou() {
  return null;
}
function ju(e, t) {
  var n = typeof e == "function" ? e : fs(e),
    r = t == null ? Ou : typeof t == "function" ? t : Or(t);
  return this.select(function () {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Hu() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function zu() {
  return this.each(Hu);
}
function Vu() {
  var e = this.cloneNode(!1),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Fu() {
  var e = this.cloneNode(!0),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Bu(e) {
  return this.select(e ? Fu : Vu);
}
function qu(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Wu(e) {
  return function (t) {
    e.call(this, t, this.__data__);
  };
}
function Yu(e) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (t) {
      var n = "",
        r = t.indexOf(".");
      return (r >= 0 && ((n = t.slice(r + 1)), (t = t.slice(0, r))), { type: t, name: n });
    });
}
function Gu(e) {
  return function () {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, i = t.length, s; n < i; ++n)
        ((s = t[n]),
          (!e.type || s.type === e.type) && s.name === e.name
            ? this.removeEventListener(s.type, s.listener, s.options)
            : (t[++r] = s));
      ++r ? (t.length = r) : delete this.__on;
    }
  };
}
function Xu(e, t, n) {
  return function () {
    var r = this.__on,
      i,
      s = Wu(t);
    if (r) {
      for (var o = 0, a = r.length; o < a; ++o)
        if ((i = r[o]).type === e.type && i.name === e.name) {
          (this.removeEventListener(i.type, i.listener, i.options),
            this.addEventListener(i.type, (i.listener = s), (i.options = n)),
            (i.value = t));
          return;
        }
    }
    (this.addEventListener(e.type, s, n),
      (i = { type: e.type, name: e.name, value: t, listener: s, options: n }),
      r ? r.push(i) : (this.__on = [i]));
  };
}
function Uu(e, t, n) {
  var r = Yu(e + ""),
    i,
    s = r.length,
    o;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, d = a.length, u; l < d; ++l)
        for (i = 0, u = a[l]; i < s; ++i)
          if ((o = r[i]).type === u.type && o.name === u.name) return u.value;
    }
    return;
  }
  for (a = t ? Xu : Gu, i = 0; i < s; ++i) this.each(a(r[i], t, n));
  return this;
}
function _s(e, t, n) {
  var r = ys(e),
    i = r.CustomEvent;
  (typeof i == "function"
    ? (i = new i(t, n))
    : ((i = r.document.createEvent("Event")),
      n
        ? (i.initEvent(t, n.bubbles, n.cancelable), (i.detail = n.detail))
        : i.initEvent(t, !1, !1)),
    e.dispatchEvent(i));
}
function Ku(e, t) {
  return function () {
    return _s(this, e, t);
  };
}
function Zu(e, t) {
  return function () {
    return _s(this, e, t.apply(this, arguments));
  };
}
function Qu(e, t) {
  return this.each((typeof t == "function" ? Zu : Ku)(e, t));
}
function* Ju() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, s = r.length, o; i < s; ++i) (o = r[i]) && (yield o);
}
var Es = [null];
function fe(e, t) {
  ((this._groups = e), (this._parents = t));
}
function kt() {
  return new fe([[document.documentElement]], Es);
}
function ed() {
  return this;
}
fe.prototype = kt.prototype = {
  constructor: fe,
  select: Cl,
  selectAll: Pl,
  selectChild: Ll,
  selectChildren: jl,
  filter: Hl,
  data: Wl,
  enter: zl,
  exit: Gl,
  join: Xl,
  merge: Ul,
  selection: ed,
  order: Kl,
  sort: Zl,
  call: Jl,
  nodes: eu,
  node: tu,
  size: nu,
  empty: ru,
  each: iu,
  attr: du,
  style: gu,
  property: wu,
  classed: Eu,
  text: ku,
  html: Au,
  raise: Ru,
  lower: $u,
  append: Du,
  insert: ju,
  remove: zu,
  clone: Bu,
  datum: qu,
  on: Uu,
  dispatch: Qu,
  [Symbol.iterator]: Ju,
};
function de(e) {
  return typeof e == "string"
    ? new fe([[document.querySelector(e)]], [document.documentElement])
    : new fe([[e]], Es);
}
function td(e) {
  let t;
  for (; (t = e.sourceEvent);) e = t;
  return e;
}
function me(e, t) {
  if (((e = td(e)), t === void 0 && (t = e.currentTarget), t)) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return (
        (r.x = e.clientX),
        (r.y = e.clientY),
        (r = r.matrixTransform(t.getScreenCTM().inverse())),
        [r.x, r.y]
      );
    }
    if (t.getBoundingClientRect) {
      var i = t.getBoundingClientRect();
      return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const nd = { passive: !1 },
  xt = { capture: !0, passive: !1 };
function bn(e) {
  e.stopImmediatePropagation();
}
function et(e) {
  (e.preventDefault(), e.stopImmediatePropagation());
}
function Ss(e) {
  var t = e.document.documentElement,
    n = de(e).on("dragstart.drag", et, xt);
  "onselectstart" in t
    ? n.on("selectstart.drag", et, xt)
    : ((t.__noselect = t.style.MozUserSelect), (t.style.MozUserSelect = "none"));
}
function Ns(e, t) {
  var n = e.document.documentElement,
    r = de(e).on("dragstart.drag", null);
  (t &&
    (r.on("click.drag", et, xt),
    setTimeout(function () {
      r.on("click.drag", null);
    }, 0)),
    "onselectstart" in n
      ? r.on("selectstart.drag", null)
      : ((n.style.MozUserSelect = n.__noselect), delete n.__noselect));
}
const Rt = (e) => () => e;
function Sr(
  e,
  {
    sourceEvent: t,
    subject: n,
    target: r,
    identifier: i,
    active: s,
    x: o,
    y: a,
    dx: l,
    dy: d,
    dispatch: u,
  },
) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: s, enumerable: !0, configurable: !0 },
    x: { value: o, enumerable: !0, configurable: !0 },
    y: { value: a, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: d, enumerable: !0, configurable: !0 },
    _: { value: u },
  });
}
Sr.prototype.on = function () {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function rd(e) {
  return !e.ctrlKey && !e.button;
}
function id() {
  return this.parentNode;
}
function od(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function sd() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Cs() {
  var e = rd,
    t = id,
    n = od,
    r = sd,
    i = {},
    s = an("start", "drag", "end"),
    o = 0,
    a,
    l,
    d,
    u,
    c = 0;
  function f(w) {
    w.on("mousedown.drag", h)
      .filter(r)
      .on("touchstart.drag", m)
      .on("touchmove.drag", y, nd)
      .on("touchend.drag touchcancel.drag", x)
      .style("touch-action", "none")
      .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(w, C) {
    if (!(u || !e.call(this, w, C))) {
      var N = g(this, t.call(this, w, C), w, C, "mouse");
      N &&
        (de(w.view).on("mousemove.drag", p, xt).on("mouseup.drag", v, xt),
        Ss(w.view),
        bn(w),
        (d = !1),
        (a = w.clientX),
        (l = w.clientY),
        N("start", w));
    }
  }
  function p(w) {
    if ((et(w), !d)) {
      var C = w.clientX - a,
        N = w.clientY - l;
      d = C * C + N * N > c;
    }
    i.mouse("drag", w);
  }
  function v(w) {
    (de(w.view).on("mousemove.drag mouseup.drag", null), Ns(w.view, d), et(w), i.mouse("end", w));
  }
  function m(w, C) {
    if (e.call(this, w, C)) {
      var N = w.changedTouches,
        M = t.call(this, w, C),
        b = N.length,
        S,
        I;
      for (S = 0; S < b; ++S)
        (I = g(this, M, w, C, N[S].identifier, N[S])) && (bn(w), I("start", w, N[S]));
    }
  }
  function y(w) {
    var C = w.changedTouches,
      N = C.length,
      M,
      b;
    for (M = 0; M < N; ++M) (b = i[C[M].identifier]) && (et(w), b("drag", w, C[M]));
  }
  function x(w) {
    var C = w.changedTouches,
      N = C.length,
      M,
      b;
    for (
      u && clearTimeout(u),
        u = setTimeout(function () {
          u = null;
        }, 500),
        M = 0;
      M < N;
      ++M
    )
      (b = i[C[M].identifier]) && (bn(w), b("end", w, C[M]));
  }
  function g(w, C, N, M, b, S) {
    var I = s.copy(),
      E = me(S || N, C),
      k,
      O,
      _;
    if (
      (_ = n.call(
        w,
        new Sr("beforestart", {
          sourceEvent: N,
          target: f,
          identifier: b,
          active: o,
          x: E[0],
          y: E[1],
          dx: 0,
          dy: 0,
          dispatch: I,
        }),
        M,
      )) != null
    )
      return (
        (k = _.x - E[0] || 0),
        (O = _.y - E[1] || 0),
        function T(A, D, V) {
          var $ = E,
            B;
          switch (A) {
            case "start":
              ((i[b] = T), (B = o++));
              break;
            case "end":
              (delete i[b], --o);
            case "drag":
              ((E = me(V || D, C)), (B = o));
              break;
          }
          I.call(
            A,
            w,
            new Sr(A, {
              sourceEvent: D,
              subject: _,
              target: f,
              identifier: b,
              active: B,
              x: E[0] + k,
              y: E[1] + O,
              dx: E[0] - $[0],
              dy: E[1] - $[1],
              dispatch: I,
            }),
            M,
          );
        }
      );
  }
  return (
    (f.filter = function (w) {
      return arguments.length ? ((e = typeof w == "function" ? w : Rt(!!w)), f) : e;
    }),
    (f.container = function (w) {
      return arguments.length ? ((t = typeof w == "function" ? w : Rt(w)), f) : t;
    }),
    (f.subject = function (w) {
      return arguments.length ? ((n = typeof w == "function" ? w : Rt(w)), f) : n;
    }),
    (f.touchable = function (w) {
      return arguments.length ? ((r = typeof w == "function" ? w : Rt(!!w)), f) : r;
    }),
    (f.on = function () {
      var w = s.on.apply(s, arguments);
      return w === s ? f : w;
    }),
    (f.clickDistance = function (w) {
      return arguments.length ? ((c = (w = +w) * w), f) : Math.sqrt(c);
    }),
    f
  );
}
function Hr(e, t, n) {
  ((e.prototype = t.prototype = n), (n.constructor = e));
}
function ks(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Mt() {}
var wt = 0.7,
  Ut = 1 / wt,
  tt = "\\s*([+-]?\\d+)\\s*",
  vt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  Ce = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  ad = /^#([0-9a-f]{3,8})$/,
  cd = new RegExp(`^rgb\\(${tt},${tt},${tt}\\)$`),
  ld = new RegExp(`^rgb\\(${Ce},${Ce},${Ce}\\)$`),
  ud = new RegExp(`^rgba\\(${tt},${tt},${tt},${vt}\\)$`),
  dd = new RegExp(`^rgba\\(${Ce},${Ce},${Ce},${vt}\\)$`),
  fd = new RegExp(`^hsl\\(${vt},${Ce},${Ce}\\)$`),
  hd = new RegExp(`^hsla\\(${vt},${Ce},${Ce},${vt}\\)$`),
  mi = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Hr(Mt, Ye, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: yi,
  formatHex: yi,
  formatHex8: pd,
  formatHsl: gd,
  formatRgb: xi,
  toString: xi,
});
function yi() {
  return this.rgb().formatHex();
}
function pd() {
  return this.rgb().formatHex8();
}
function gd() {
  return Ms(this).formatHsl();
}
function xi() {
  return this.rgb().formatRgb();
}
function Ye(e) {
  var t, n;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = ad.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? wi(t)
          : n === 3
            ? new ue(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : n === 8
              ? Lt((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (t & 255) / 255)
              : n === 4
                ? Lt(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = cd.exec(e))
        ? new ue(t[1], t[2], t[3], 1)
        : (t = ld.exec(e))
          ? new ue((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
          : (t = ud.exec(e))
            ? Lt(t[1], t[2], t[3], t[4])
            : (t = dd.exec(e))
              ? Lt((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
              : (t = fd.exec(e))
                ? _i(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = hd.exec(e))
                  ? _i(t[1], t[2] / 100, t[3] / 100, t[4])
                  : mi.hasOwnProperty(e)
                    ? wi(mi[e])
                    : e === "transparent"
                      ? new ue(NaN, NaN, NaN, 0)
                      : null
  );
}
function wi(e) {
  return new ue((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function Lt(e, t, n, r) {
  return (r <= 0 && (e = t = n = NaN), new ue(e, t, n, r));
}
function md(e) {
  return (
    e instanceof Mt || (e = Ye(e)),
    e ? ((e = e.rgb()), new ue(e.r, e.g, e.b, e.opacity)) : new ue()
  );
}
function Nr(e, t, n, r) {
  return arguments.length === 1 ? md(e) : new ue(e, t, n, r ?? 1);
}
function ue(e, t, n, r) {
  ((this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r));
}
Hr(
  ue,
  Nr,
  ks(Mt, {
    brighter(e) {
      return (
        (e = e == null ? Ut : Math.pow(Ut, e)),
        new ue(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? wt : Math.pow(wt, e)),
        new ue(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new ue(qe(this.r), qe(this.g), qe(this.b), Kt(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: vi,
    formatHex: vi,
    formatHex8: yd,
    formatRgb: bi,
    toString: bi,
  }),
);
function vi() {
  return `#${Be(this.r)}${Be(this.g)}${Be(this.b)}`;
}
function yd() {
  return `#${Be(this.r)}${Be(this.g)}${Be(this.b)}${Be((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function bi() {
  const e = Kt(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${qe(this.r)}, ${qe(this.g)}, ${qe(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Kt(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function qe(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Be(e) {
  return ((e = qe(e)), (e < 16 ? "0" : "") + e.toString(16));
}
function _i(e, t, n, r) {
  return (
    r <= 0 ? (e = t = n = NaN) : n <= 0 || n >= 1 ? (e = t = NaN) : t <= 0 && (e = NaN),
    new ye(e, t, n, r)
  );
}
function Ms(e) {
  if (e instanceof ye) return new ye(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Mt || (e = Ye(e)), !e)) return new ye();
  if (e instanceof ye) return e;
  e = e.rgb();
  var t = e.r / 255,
    n = e.g / 255,
    r = e.b / 255,
    i = Math.min(t, n, r),
    s = Math.max(t, n, r),
    o = NaN,
    a = s - i,
    l = (s + i) / 2;
  return (
    a
      ? (t === s
          ? (o = (n - r) / a + (n < r) * 6)
          : n === s
            ? (o = (r - t) / a + 2)
            : (o = (t - n) / a + 4),
        (a /= l < 0.5 ? s + i : 2 - s - i),
        (o *= 60))
      : (a = l > 0 && l < 1 ? 0 : o),
    new ye(o, a, l, e.opacity)
  );
}
function xd(e, t, n, r) {
  return arguments.length === 1 ? Ms(e) : new ye(e, t, n, r ?? 1);
}
function ye(e, t, n, r) {
  ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
}
Hr(
  ye,
  xd,
  ks(Mt, {
    brighter(e) {
      return (
        (e = e == null ? Ut : Math.pow(Ut, e)),
        new ye(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? wt : Math.pow(wt, e)),
        new ye(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        i = 2 * n - r;
      return new ue(
        _n(e >= 240 ? e - 240 : e + 120, i, r),
        _n(e, i, r),
        _n(e < 120 ? e + 240 : e - 120, i, r),
        this.opacity,
      );
    },
    clamp() {
      return new ye(Ei(this.h), $t(this.s), $t(this.l), Kt(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = Kt(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${Ei(this.h)}, ${$t(this.s) * 100}%, ${$t(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  }),
);
function Ei(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function $t(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function _n(e, t, n) {
  return (
    (e < 60 ? t + ((n - t) * e) / 60 : e < 180 ? n : e < 240 ? t + ((n - t) * (240 - e)) / 60 : t) *
    255
  );
}
const zr = (e) => () => e;
function wd(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function vd(e, t, n) {
  return (
    (e = Math.pow(e, n)),
    (t = Math.pow(t, n) - e),
    (n = 1 / n),
    function (r) {
      return Math.pow(e + r * t, n);
    }
  );
}
function bd(e) {
  return (e = +e) == 1
    ? Is
    : function (t, n) {
        return n - t ? vd(t, n, e) : zr(isNaN(t) ? n : t);
      };
}
function Is(e, t) {
  var n = t - e;
  return n ? wd(e, n) : zr(isNaN(e) ? t : e);
}
const Zt = (function e(t) {
  var n = bd(t);
  function r(i, s) {
    var o = n((i = Nr(i)).r, (s = Nr(s)).r),
      a = n(i.g, s.g),
      l = n(i.b, s.b),
      d = Is(i.opacity, s.opacity);
    return function (u) {
      return ((i.r = o(u)), (i.g = a(u)), (i.b = l(u)), (i.opacity = d(u)), i + "");
    };
  }
  return ((r.gamma = e), r);
})(1);
function _d(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    i;
  return function (s) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - s) + t[i] * s;
    return r;
  };
}
function Ed(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Sd(e, t) {
  var n = t ? t.length : 0,
    r = e ? Math.min(n, e.length) : 0,
    i = new Array(r),
    s = new Array(n),
    o;
  for (o = 0; o < r; ++o) i[o] = mt(e[o], t[o]);
  for (; o < n; ++o) s[o] = t[o];
  return function (a) {
    for (o = 0; o < r; ++o) s[o] = i[o](a);
    return s;
  };
}
function Nd(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return (n.setTime(e * (1 - r) + t * r), n);
    }
  );
}
function Ne(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function Cd(e, t) {
  var n = {},
    r = {},
    i;
  ((e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {}));
  for (i in t) i in e ? (n[i] = mt(e[i], t[i])) : (r[i] = t[i]);
  return function (s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var Cr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  En = new RegExp(Cr.source, "g");
function kd(e) {
  return function () {
    return e;
  };
}
function Md(e) {
  return function (t) {
    return e(t) + "";
  };
}
function Ps(e, t) {
  var n = (Cr.lastIndex = En.lastIndex = 0),
    r,
    i,
    s,
    o = -1,
    a = [],
    l = [];
  for (e = e + "", t = t + ""; (r = Cr.exec(e)) && (i = En.exec(t));)
    ((s = i.index) > n && ((s = t.slice(n, s)), a[o] ? (a[o] += s) : (a[++o] = s)),
      (r = r[0]) === (i = i[0])
        ? a[o]
          ? (a[o] += i)
          : (a[++o] = i)
        : ((a[++o] = null), l.push({ i: o, x: Ne(r, i) })),
      (n = En.lastIndex));
  return (
    n < t.length && ((s = t.slice(n)), a[o] ? (a[o] += s) : (a[++o] = s)),
    a.length < 2
      ? l[0]
        ? Md(l[0].x)
        : kd(t)
      : ((t = l.length),
        function (d) {
          for (var u = 0, c; u < t; ++u) a[(c = l[u]).i] = c.x(d);
          return a.join("");
        })
  );
}
function mt(e, t) {
  var n = typeof t,
    r;
  return t == null || n === "boolean"
    ? zr(t)
    : (n === "number"
        ? Ne
        : n === "string"
          ? (r = Ye(t))
            ? ((t = r), Zt)
            : Ps
          : t instanceof Ye
            ? Zt
            : t instanceof Date
              ? Nd
              : Ed(t)
                ? _d
                : Array.isArray(t)
                  ? Sd
                  : (typeof t.valueOf != "function" && typeof t.toString != "function") || isNaN(t)
                    ? Cd
                    : Ne)(e, t);
}
var Si = 180 / Math.PI,
  kr = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
function As(e, t, n, r, i, s) {
  var o, a, l;
  return (
    (o = Math.sqrt(e * e + t * t)) && ((e /= o), (t /= o)),
    (l = e * n + t * r) && ((n -= e * l), (r -= t * l)),
    (a = Math.sqrt(n * n + r * r)) && ((n /= a), (r /= a), (l /= a)),
    e * r < t * n && ((e = -e), (t = -t), (l = -l), (o = -o)),
    {
      translateX: i,
      translateY: s,
      rotate: Math.atan2(t, e) * Si,
      skewX: Math.atan(l) * Si,
      scaleX: o,
      scaleY: a,
    }
  );
}
var Dt;
function Id(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? kr : As(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Pd(e) {
  return e == null ||
    (Dt || (Dt = document.createElementNS("http://www.w3.org/2000/svg", "g")),
    Dt.setAttribute("transform", e),
    !(e = Dt.transform.baseVal.consolidate()))
    ? kr
    : ((e = e.matrix), As(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Ts(e, t, n, r) {
  function i(d) {
    return d.length ? d.pop() + " " : "";
  }
  function s(d, u, c, f, h, p) {
    if (d !== c || u !== f) {
      var v = h.push("translate(", null, t, null, n);
      p.push({ i: v - 4, x: Ne(d, c) }, { i: v - 2, x: Ne(u, f) });
    } else (c || f) && h.push("translate(" + c + t + f + n);
  }
  function o(d, u, c, f) {
    d !== u
      ? (d - u > 180 ? (u += 360) : u - d > 180 && (d += 360),
        f.push({ i: c.push(i(c) + "rotate(", null, r) - 2, x: Ne(d, u) }))
      : u && c.push(i(c) + "rotate(" + u + r);
  }
  function a(d, u, c, f) {
    d !== u
      ? f.push({ i: c.push(i(c) + "skewX(", null, r) - 2, x: Ne(d, u) })
      : u && c.push(i(c) + "skewX(" + u + r);
  }
  function l(d, u, c, f, h, p) {
    if (d !== c || u !== f) {
      var v = h.push(i(h) + "scale(", null, ",", null, ")");
      p.push({ i: v - 4, x: Ne(d, c) }, { i: v - 2, x: Ne(u, f) });
    } else (c !== 1 || f !== 1) && h.push(i(h) + "scale(" + c + "," + f + ")");
  }
  return function (d, u) {
    var c = [],
      f = [];
    return (
      (d = e(d)),
      (u = e(u)),
      s(d.translateX, d.translateY, u.translateX, u.translateY, c, f),
      o(d.rotate, u.rotate, c, f),
      a(d.skewX, u.skewX, c, f),
      l(d.scaleX, d.scaleY, u.scaleX, u.scaleY, c, f),
      (d = u = null),
      function (h) {
        for (var p = -1, v = f.length, m; ++p < v;) c[(m = f[p]).i] = m.x(h);
        return c.join("");
      }
    );
  };
}
var Ad = Ts(Id, "px, ", "px)", "deg)"),
  Td = Ts(Pd, ", ", ")", ")"),
  Rd = 1e-12;
function Ni(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Ld(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function $d(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Bt = (function e(t, n, r) {
  function i(s, o) {
    var a = s[0],
      l = s[1],
      d = s[2],
      u = o[0],
      c = o[1],
      f = o[2],
      h = u - a,
      p = c - l,
      v = h * h + p * p,
      m,
      y;
    if (v < Rd)
      ((y = Math.log(f / d) / t),
        (m = function (M) {
          return [a + M * h, l + M * p, d * Math.exp(t * M * y)];
        }));
    else {
      var x = Math.sqrt(v),
        g = (f * f - d * d + r * v) / (2 * d * n * x),
        w = (f * f - d * d - r * v) / (2 * f * n * x),
        C = Math.log(Math.sqrt(g * g + 1) - g),
        N = Math.log(Math.sqrt(w * w + 1) - w);
      ((y = (N - C) / t),
        (m = function (M) {
          var b = M * y,
            S = Ni(C),
            I = (d / (n * x)) * (S * $d(t * b + C) - Ld(C));
          return [a + I * h, l + I * p, (d * S) / Ni(t * b + C)];
        }));
    }
    return ((m.duration = (y * 1e3 * t) / Math.SQRT2), m);
  }
  return (
    (i.rho = function (s) {
      var o = Math.max(0.001, +s),
        a = o * o,
        l = a * a;
      return e(o, a, l);
    }),
    i
  );
})(Math.SQRT2, 2, 4);
var it = 0,
  pt = 0,
  ft = 0,
  Rs = 1e3,
  Qt,
  gt,
  Jt = 0,
  Ge = 0,
  ln = 0,
  bt = typeof performance == "object" && performance.now ? performance : Date,
  Ls =
    typeof window == "object" && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (e) {
          setTimeout(e, 17);
        };
function Vr() {
  return Ge || (Ls(Dd), (Ge = bt.now() + ln));
}
function Dd() {
  Ge = 0;
}
function en() {
  this._call = this._time = this._next = null;
}
en.prototype = $s.prototype = {
  constructor: en,
  restart: function (e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    ((n = (n == null ? Vr() : +n) + (t == null ? 0 : +t)),
      !this._next && gt !== this && (gt ? (gt._next = this) : (Qt = this), (gt = this)),
      (this._call = e),
      (this._time = n),
      Mr());
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), Mr());
  },
};
function $s(e, t, n) {
  var r = new en();
  return (r.restart(e, t, n), r);
}
function Od() {
  (Vr(), ++it);
  for (var e = Qt, t; e;) ((t = Ge - e._time) >= 0 && e._call.call(void 0, t), (e = e._next));
  --it;
}
function Ci() {
  ((Ge = (Jt = bt.now()) + ln), (it = pt = 0));
  try {
    Od();
  } finally {
    ((it = 0), Hd(), (Ge = 0));
  }
}
function jd() {
  var e = bt.now(),
    t = e - Jt;
  t > Rs && ((ln -= t), (Jt = e));
}
function Hd() {
  for (var e, t = Qt, n, r = 1 / 0; t;)
    t._call
      ? (r > t._time && (r = t._time), (e = t), (t = t._next))
      : ((n = t._next), (t._next = null), (t = e ? (e._next = n) : (Qt = n)));
  ((gt = e), Mr(r));
}
function Mr(e) {
  if (!it) {
    pt && (pt = clearTimeout(pt));
    var t = e - Ge;
    t > 24
      ? (e < 1 / 0 && (pt = setTimeout(Ci, e - bt.now() - ln)), ft && (ft = clearInterval(ft)))
      : (ft || ((Jt = bt.now()), (ft = setInterval(jd, Rs))), (it = 1), Ls(Ci));
  }
}
function ki(e, t, n) {
  var r = new en();
  return (
    (t = t == null ? 0 : +t),
    r.restart(
      (i) => {
        (r.stop(), e(i + t));
      },
      t,
      n,
    ),
    r
  );
}
var zd = an("start", "end", "cancel", "interrupt"),
  Vd = [],
  Ds = 0,
  Mi = 1,
  Ir = 2,
  qt = 3,
  Ii = 4,
  Pr = 5,
  Wt = 6;
function un(e, t, n, r, i, s) {
  var o = e.__transition;
  if (!o) e.__transition = {};
  else if (n in o) return;
  Fd(e, n, {
    name: t,
    index: r,
    group: i,
    on: zd,
    tween: Vd,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: Ds,
  });
}
function Fr(e, t) {
  var n = _e(e, t);
  if (n.state > Ds) throw new Error("too late; already scheduled");
  return n;
}
function ke(e, t) {
  var n = _e(e, t);
  if (n.state > qt) throw new Error("too late; already running");
  return n;
}
function _e(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Fd(e, t, n) {
  var r = e.__transition,
    i;
  ((r[t] = n), (n.timer = $s(s, 0, n.time)));
  function s(d) {
    ((n.state = Mi), n.timer.restart(o, n.delay, n.time), n.delay <= d && o(d - n.delay));
  }
  function o(d) {
    var u, c, f, h;
    if (n.state !== Mi) return l();
    for (u in r)
      if (((h = r[u]), h.name === n.name)) {
        if (h.state === qt) return ki(o);
        h.state === Ii
          ? ((h.state = Wt),
            h.timer.stop(),
            h.on.call("interrupt", e, e.__data__, h.index, h.group),
            delete r[u])
          : +u < t &&
            ((h.state = Wt),
            h.timer.stop(),
            h.on.call("cancel", e, e.__data__, h.index, h.group),
            delete r[u]);
      }
    if (
      (ki(function () {
        n.state === qt && ((n.state = Ii), n.timer.restart(a, n.delay, n.time), a(d));
      }),
      (n.state = Ir),
      n.on.call("start", e, e.__data__, n.index, n.group),
      n.state === Ir)
    ) {
      for (n.state = qt, i = new Array((f = n.tween.length)), u = 0, c = -1; u < f; ++u)
        (h = n.tween[u].value.call(e, e.__data__, n.index, n.group)) && (i[++c] = h);
      i.length = c + 1;
    }
  }
  function a(d) {
    for (
      var u =
          d < n.duration
            ? n.ease.call(null, d / n.duration)
            : (n.timer.restart(l), (n.state = Pr), 1),
        c = -1,
        f = i.length;
      ++c < f;
    )
      i[c].call(e, u);
    n.state === Pr && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    ((n.state = Wt), n.timer.stop(), delete r[t]);
    for (var d in r) return;
    delete e.__transition;
  }
}
function Yt(e, t) {
  var n = e.__transition,
    r,
    i,
    s = !0,
    o;
  if (n) {
    t = t == null ? null : t + "";
    for (o in n) {
      if ((r = n[o]).name !== t) {
        s = !1;
        continue;
      }
      ((i = r.state > Ir && r.state < Pr),
        (r.state = Wt),
        r.timer.stop(),
        r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group),
        delete n[o]);
    }
    s && delete e.__transition;
  }
}
function Bd(e) {
  return this.each(function () {
    Yt(this, e);
  });
}
function qd(e, t) {
  var n, r;
  return function () {
    var i = ke(this, e),
      s = i.tween;
    if (s !== n) {
      r = n = s;
      for (var o = 0, a = r.length; o < a; ++o)
        if (r[o].name === t) {
          ((r = r.slice()), r.splice(o, 1));
          break;
        }
    }
    i.tween = r;
  };
}
function Wd(e, t, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function () {
    var s = ke(this, e),
      o = s.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var a = { name: t, value: n }, l = 0, d = i.length; l < d; ++l)
        if (i[l].name === t) {
          i[l] = a;
          break;
        }
      l === d && i.push(a);
    }
    s.tween = i;
  };
}
function Yd(e, t) {
  var n = this._id;
  if (((e += ""), arguments.length < 2)) {
    for (var r = _e(this.node(), n).tween, i = 0, s = r.length, o; i < s; ++i)
      if ((o = r[i]).name === e) return o.value;
    return null;
  }
  return this.each((t == null ? qd : Wd)(n, e, t));
}
function Br(e, t, n) {
  var r = e._id;
  return (
    e.each(function () {
      var i = ke(this, r);
      (i.value || (i.value = {}))[t] = n.apply(this, arguments);
    }),
    function (i) {
      return _e(i, r).value[t];
    }
  );
}
function Os(e, t) {
  var n;
  return (typeof t == "number" ? Ne : t instanceof Ye ? Zt : (n = Ye(t)) ? ((t = n), Zt) : Ps)(
    e,
    t,
  );
}
function Gd(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function Xd(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ud(e, t, n) {
  var r,
    i = n + "",
    s;
  return function () {
    var o = this.getAttribute(e);
    return o === i ? null : o === r ? s : (s = t((r = o), n));
  };
}
function Kd(e, t, n) {
  var r,
    i = n + "",
    s;
  return function () {
    var o = this.getAttributeNS(e.space, e.local);
    return o === i ? null : o === r ? s : (s = t((r = o), n));
  };
}
function Zd(e, t, n) {
  var r, i, s;
  return function () {
    var o,
      a = n(this),
      l;
    return a == null
      ? void this.removeAttribute(e)
      : ((o = this.getAttribute(e)),
        (l = a + ""),
        o === l ? null : o === r && l === i ? s : ((i = l), (s = t((r = o), a))));
  };
}
function Qd(e, t, n) {
  var r, i, s;
  return function () {
    var o,
      a = n(this),
      l;
    return a == null
      ? void this.removeAttributeNS(e.space, e.local)
      : ((o = this.getAttributeNS(e.space, e.local)),
        (l = a + ""),
        o === l ? null : o === r && l === i ? s : ((i = l), (s = t((r = o), a))));
  };
}
function Jd(e, t) {
  var n = cn(e),
    r = n === "transform" ? Td : Os;
  return this.attrTween(
    e,
    typeof t == "function"
      ? (n.local ? Qd : Zd)(n, r, Br(this, "attr." + e, t))
      : t == null
        ? (n.local ? Xd : Gd)(n)
        : (n.local ? Kd : Ud)(n, r, t),
  );
}
function ef(e, t) {
  return function (n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function tf(e, t) {
  return function (n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function nf(e, t) {
  var n, r;
  function i() {
    var s = t.apply(this, arguments);
    return (s !== r && (n = (r = s) && tf(e, s)), n);
  }
  return ((i._value = t), i);
}
function rf(e, t) {
  var n, r;
  function i() {
    var s = t.apply(this, arguments);
    return (s !== r && (n = (r = s) && ef(e, s)), n);
  }
  return ((i._value = t), i);
}
function of(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = cn(e);
  return this.tween(n, (r.local ? nf : rf)(r, t));
}
function sf(e, t) {
  return function () {
    Fr(this, e).delay = +t.apply(this, arguments);
  };
}
function af(e, t) {
  return (
    (t = +t),
    function () {
      Fr(this, e).delay = t;
    }
  );
}
function cf(e) {
  var t = this._id;
  return arguments.length
    ? this.each((typeof e == "function" ? sf : af)(t, e))
    : _e(this.node(), t).delay;
}
function lf(e, t) {
  return function () {
    ke(this, e).duration = +t.apply(this, arguments);
  };
}
function uf(e, t) {
  return (
    (t = +t),
    function () {
      ke(this, e).duration = t;
    }
  );
}
function df(e) {
  var t = this._id;
  return arguments.length
    ? this.each((typeof e == "function" ? lf : uf)(t, e))
    : _e(this.node(), t).duration;
}
function ff(e, t) {
  if (typeof t != "function") throw new Error();
  return function () {
    ke(this, e).ease = t;
  };
}
function hf(e) {
  var t = this._id;
  return arguments.length ? this.each(ff(t, e)) : _e(this.node(), t).ease;
}
function pf(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    ke(this, e).ease = n;
  };
}
function gf(e) {
  if (typeof e != "function") throw new Error();
  return this.each(pf(this._id, e));
}
function mf(e) {
  typeof e != "function" && (e = ps(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], o = s.length, a = (r[i] = []), l, d = 0; d < o; ++d)
      (l = s[d]) && e.call(l, l.__data__, d, s) && a.push(l);
  return new Re(r, this._parents, this._name, this._id);
}
function yf(e) {
  if (e._id !== this._id) throw new Error();
  for (
    var t = this._groups,
      n = e._groups,
      r = t.length,
      i = n.length,
      s = Math.min(r, i),
      o = new Array(r),
      a = 0;
    a < s;
    ++a
  )
    for (var l = t[a], d = n[a], u = l.length, c = (o[a] = new Array(u)), f, h = 0; h < u; ++h)
      (f = l[h] || d[h]) && (c[h] = f);
  for (; a < r; ++a) o[a] = t[a];
  return new Re(o, this._parents, this._name, this._id);
}
function xf(e) {
  return (e + "")
    .trim()
    .split(/^|\s+/)
    .every(function (t) {
      var n = t.indexOf(".");
      return (n >= 0 && (t = t.slice(0, n)), !t || t === "start");
    });
}
function wf(e, t, n) {
  var r,
    i,
    s = xf(t) ? Fr : ke;
  return function () {
    var o = s(this, e),
      a = o.on;
    (a !== r && (i = (r = a).copy()).on(t, n), (o.on = i));
  };
}
function vf(e, t) {
  var n = this._id;
  return arguments.length < 2 ? _e(this.node(), n).on.on(e) : this.each(wf(n, e, t));
}
function bf(e) {
  return function () {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function _f() {
  return this.on("end.remove", bf(this._id));
}
function Ef(e) {
  var t = this._name,
    n = this._id;
  typeof e != "function" && (e = Or(e));
  for (var r = this._groups, i = r.length, s = new Array(i), o = 0; o < i; ++o)
    for (var a = r[o], l = a.length, d = (s[o] = new Array(l)), u, c, f = 0; f < l; ++f)
      (u = a[f]) &&
        (c = e.call(u, u.__data__, f, a)) &&
        ("__data__" in u && (c.__data__ = u.__data__), (d[f] = c), un(d[f], t, n, f, d, _e(u, n)));
  return new Re(s, this._parents, t, n);
}
function Sf(e) {
  var t = this._name,
    n = this._id;
  typeof e != "function" && (e = hs(e));
  for (var r = this._groups, i = r.length, s = [], o = [], a = 0; a < i; ++a)
    for (var l = r[a], d = l.length, u, c = 0; c < d; ++c)
      if ((u = l[c])) {
        for (var f = e.call(u, u.__data__, c, l), h, p = _e(u, n), v = 0, m = f.length; v < m; ++v)
          (h = f[v]) && un(h, t, n, v, f, p);
        (s.push(f), o.push(u));
      }
  return new Re(s, o, t, n);
}
var Nf = kt.prototype.constructor;
function Cf() {
  return new Nf(this._groups, this._parents);
}
function kf(e, t) {
  var n, r, i;
  return function () {
    var s = rt(this, e),
      o = (this.style.removeProperty(e), rt(this, e));
    return s === o ? null : s === n && o === r ? i : (i = t((n = s), (r = o)));
  };
}
function js(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function Mf(e, t, n) {
  var r,
    i = n + "",
    s;
  return function () {
    var o = rt(this, e);
    return o === i ? null : o === r ? s : (s = t((r = o), n));
  };
}
function If(e, t, n) {
  var r, i, s;
  return function () {
    var o = rt(this, e),
      a = n(this),
      l = a + "";
    return (
      a == null && (l = a = (this.style.removeProperty(e), rt(this, e))),
      o === l ? null : o === r && l === i ? s : ((i = l), (s = t((r = o), a)))
    );
  };
}
function Pf(e, t) {
  var n,
    r,
    i,
    s = "style." + t,
    o = "end." + s,
    a;
  return function () {
    var l = ke(this, e),
      d = l.on,
      u = l.value[s] == null ? a || (a = js(t)) : void 0;
    ((d !== n || i !== u) && (r = (n = d).copy()).on(o, (i = u)), (l.on = r));
  };
}
function Af(e, t, n) {
  var r = (e += "") == "transform" ? Ad : Os;
  return t == null
    ? this.styleTween(e, kf(e, r)).on("end.style." + e, js(e))
    : typeof t == "function"
      ? this.styleTween(e, If(e, r, Br(this, "style." + e, t))).each(Pf(this._id, e))
      : this.styleTween(e, Mf(e, r, t), n).on("end.style." + e, null);
}
function Tf(e, t, n) {
  return function (r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Rf(e, t, n) {
  var r, i;
  function s() {
    var o = t.apply(this, arguments);
    return (o !== i && (r = (i = o) && Tf(e, o, n)), r);
  }
  return ((s._value = t), s);
}
function Lf(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, Rf(e, t, n ?? ""));
}
function $f(e) {
  return function () {
    this.textContent = e;
  };
}
function Df(e) {
  return function () {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Of(e) {
  return this.tween(
    "text",
    typeof e == "function" ? Df(Br(this, "text", e)) : $f(e == null ? "" : e + ""),
  );
}
function jf(e) {
  return function (t) {
    this.textContent = e.call(this, t);
  };
}
function Hf(e) {
  var t, n;
  function r() {
    var i = e.apply(this, arguments);
    return (i !== n && (t = (n = i) && jf(i)), t);
  }
  return ((r._value = e), r);
}
function zf(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Hf(e));
}
function Vf() {
  for (
    var e = this._name, t = this._id, n = Hs(), r = this._groups, i = r.length, s = 0;
    s < i;
    ++s
  )
    for (var o = r[s], a = o.length, l, d = 0; d < a; ++d)
      if ((l = o[d])) {
        var u = _e(l, t);
        un(l, e, n, d, o, {
          time: u.time + u.delay + u.duration,
          delay: 0,
          duration: u.duration,
          ease: u.ease,
        });
      }
  return new Re(r, this._parents, e, n);
}
function Ff() {
  var e,
    t,
    n = this,
    r = n._id,
    i = n.size();
  return new Promise(function (s, o) {
    var a = { value: o },
      l = {
        value: function () {
          --i === 0 && s();
        },
      };
    (n.each(function () {
      var d = ke(this, r),
        u = d.on;
      (u !== e &&
        ((t = (e = u).copy()), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)),
        (d.on = t));
    }),
      i === 0 && s());
  });
}
var Bf = 0;
function Re(e, t, n, r) {
  ((this._groups = e), (this._parents = t), (this._name = n), (this._id = r));
}
function Hs() {
  return ++Bf;
}
var Ae = kt.prototype;
Re.prototype = {
  constructor: Re,
  select: Ef,
  selectAll: Sf,
  selectChild: Ae.selectChild,
  selectChildren: Ae.selectChildren,
  filter: mf,
  merge: yf,
  selection: Cf,
  transition: Vf,
  call: Ae.call,
  nodes: Ae.nodes,
  node: Ae.node,
  size: Ae.size,
  empty: Ae.empty,
  each: Ae.each,
  on: vf,
  attr: Jd,
  attrTween: of,
  style: Af,
  styleTween: Lf,
  text: Of,
  textTween: zf,
  remove: _f,
  tween: Yd,
  delay: cf,
  duration: df,
  ease: hf,
  easeVarying: gf,
  end: Ff,
  [Symbol.iterator]: Ae[Symbol.iterator],
};
function qf(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Wf = { time: null, delay: 0, duration: 250, ease: qf };
function Yf(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]);)
    if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
  return n;
}
function Gf(e) {
  var t, n;
  e instanceof Re
    ? ((t = e._id), (e = e._name))
    : ((t = Hs()), ((n = Wf).time = Vr()), (e = e == null ? null : e + ""));
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var o = r[s], a = o.length, l, d = 0; d < a; ++d)
      (l = o[d]) && un(l, e, t, d, o, n || Yf(l, t));
  return new Re(r, this._parents, e, t);
}
kt.prototype.interrupt = Bd;
kt.prototype.transition = Gf;
const Ot = (e) => () => e;
function Xf(e, { sourceEvent: t, target: n, transform: r, dispatch: i }) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: i },
  });
}
function Te(e, t, n) {
  ((this.k = e), (this.x = t), (this.y = n));
}
Te.prototype = {
  constructor: Te,
  scale: function (e) {
    return e === 1 ? this : new Te(this.k * e, this.x, this.y);
  },
  translate: function (e, t) {
    return (e === 0) & (t === 0) ? this : new Te(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function (e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function (e) {
    return e * this.k + this.x;
  },
  applyY: function (e) {
    return e * this.k + this.y;
  },
  invert: function (e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function (e) {
    return (e - this.x) / this.k;
  },
  invertY: function (e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function (e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function (e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function () {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  },
};
var dn = new Te(1, 0, 0);
zs.prototype = Te.prototype;
function zs(e) {
  for (; !e.__zoom;) if (!(e = e.parentNode)) return dn;
  return e.__zoom;
}
function Sn(e) {
  e.stopImmediatePropagation();
}
function ht(e) {
  (e.preventDefault(), e.stopImmediatePropagation());
}
function Uf(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Kf() {
  var e = this;
  return e instanceof SVGElement
    ? ((e = e.ownerSVGElement || e),
      e.hasAttribute("viewBox")
        ? ((e = e.viewBox.baseVal),
          [
            [e.x, e.y],
            [e.x + e.width, e.y + e.height],
          ])
        : [
            [0, 0],
            [e.width.baseVal.value, e.height.baseVal.value],
          ])
    : [
        [0, 0],
        [e.clientWidth, e.clientHeight],
      ];
}
function Pi() {
  return this.__zoom || dn;
}
function Zf(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * (e.ctrlKey ? 10 : 1);
}
function Qf() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Jf(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0],
    i = e.invertX(t[1][0]) - n[1][0],
    s = e.invertY(t[0][1]) - n[0][1],
    o = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    o > s ? (s + o) / 2 : Math.min(0, s) || Math.max(0, o),
  );
}
function Vs() {
  var e = Uf,
    t = Kf,
    n = Jf,
    r = Zf,
    i = Qf,
    s = [0, 1 / 0],
    o = [
      [-1 / 0, -1 / 0],
      [1 / 0, 1 / 0],
    ],
    a = 250,
    l = Bt,
    d = an("start", "zoom", "end"),
    u,
    c,
    f,
    h = 500,
    p = 150,
    v = 0,
    m = 10;
  function y(_) {
    _.property("__zoom", Pi)
      .on("wheel.zoom", b, { passive: !1 })
      .on("mousedown.zoom", S)
      .on("dblclick.zoom", I)
      .filter(i)
      .on("touchstart.zoom", E)
      .on("touchmove.zoom", k)
      .on("touchend.zoom touchcancel.zoom", O)
      .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  ((y.transform = function (_, T, A, D) {
    var V = _.selection ? _.selection() : _;
    (V.property("__zoom", Pi),
      _ !== V
        ? C(_, T, A, D)
        : V.interrupt().each(function () {
            N(this, arguments)
              .event(D)
              .start()
              .zoom(null, typeof T == "function" ? T.apply(this, arguments) : T)
              .end();
          }));
  }),
    (y.scaleBy = function (_, T, A, D) {
      y.scaleTo(
        _,
        function () {
          var V = this.__zoom.k,
            $ = typeof T == "function" ? T.apply(this, arguments) : T;
          return V * $;
        },
        A,
        D,
      );
    }),
    (y.scaleTo = function (_, T, A, D) {
      y.transform(
        _,
        function () {
          var V = t.apply(this, arguments),
            $ = this.__zoom,
            B = A == null ? w(V) : typeof A == "function" ? A.apply(this, arguments) : A,
            q = $.invert(B),
            F = typeof T == "function" ? T.apply(this, arguments) : T;
          return n(g(x($, F), B, q), V, o);
        },
        A,
        D,
      );
    }),
    (y.translateBy = function (_, T, A, D) {
      y.transform(
        _,
        function () {
          return n(
            this.__zoom.translate(
              typeof T == "function" ? T.apply(this, arguments) : T,
              typeof A == "function" ? A.apply(this, arguments) : A,
            ),
            t.apply(this, arguments),
            o,
          );
        },
        null,
        D,
      );
    }),
    (y.translateTo = function (_, T, A, D, V) {
      y.transform(
        _,
        function () {
          var $ = t.apply(this, arguments),
            B = this.__zoom,
            q = D == null ? w($) : typeof D == "function" ? D.apply(this, arguments) : D;
          return n(
            dn
              .translate(q[0], q[1])
              .scale(B.k)
              .translate(
                typeof T == "function" ? -T.apply(this, arguments) : -T,
                typeof A == "function" ? -A.apply(this, arguments) : -A,
              ),
            $,
            o,
          );
        },
        D,
        V,
      );
    }));
  function x(_, T) {
    return ((T = Math.max(s[0], Math.min(s[1], T))), T === _.k ? _ : new Te(T, _.x, _.y));
  }
  function g(_, T, A) {
    var D = T[0] - A[0] * _.k,
      V = T[1] - A[1] * _.k;
    return D === _.x && V === _.y ? _ : new Te(_.k, D, V);
  }
  function w(_) {
    return [(+_[0][0] + +_[1][0]) / 2, (+_[0][1] + +_[1][1]) / 2];
  }
  function C(_, T, A, D) {
    _.on("start.zoom", function () {
      N(this, arguments).event(D).start();
    })
      .on("interrupt.zoom end.zoom", function () {
        N(this, arguments).event(D).end();
      })
      .tween("zoom", function () {
        var V = this,
          $ = arguments,
          B = N(V, $).event(D),
          q = t.apply(V, $),
          F = A == null ? w(q) : typeof A == "function" ? A.apply(V, $) : A,
          P = Math.max(q[1][0] - q[0][0], q[1][1] - q[0][1]),
          L = V.__zoom,
          j = typeof T == "function" ? T.apply(V, $) : T,
          W = l(L.invert(F).concat(P / L.k), j.invert(F).concat(P / j.k));
        return function (G) {
          if (G === 1) G = j;
          else {
            var H = W(G),
              Y = P / H[2];
            G = new Te(Y, F[0] - H[0] * Y, F[1] - H[1] * Y);
          }
          B.zoom(null, G);
        };
      });
  }
  function N(_, T, A) {
    return (!A && _.__zooming) || new M(_, T);
  }
  function M(_, T) {
    ((this.that = _),
      (this.args = T),
      (this.active = 0),
      (this.sourceEvent = null),
      (this.extent = t.apply(_, T)),
      (this.taps = 0));
  }
  M.prototype = {
    event: function (_) {
      return (_ && (this.sourceEvent = _), this);
    },
    start: function () {
      return (++this.active === 1 && ((this.that.__zooming = this), this.emit("start")), this);
    },
    zoom: function (_, T) {
      return (
        this.mouse && _ !== "mouse" && (this.mouse[1] = T.invert(this.mouse[0])),
        this.touch0 && _ !== "touch" && (this.touch0[1] = T.invert(this.touch0[0])),
        this.touch1 && _ !== "touch" && (this.touch1[1] = T.invert(this.touch1[0])),
        (this.that.__zoom = T),
        this.emit("zoom"),
        this
      );
    },
    end: function () {
      return (--this.active === 0 && (delete this.that.__zooming, this.emit("end")), this);
    },
    emit: function (_) {
      var T = de(this.that).datum();
      d.call(
        _,
        this.that,
        new Xf(_, {
          sourceEvent: this.sourceEvent,
          target: y,
          transform: this.that.__zoom,
          dispatch: d,
        }),
        T,
      );
    },
  };
  function b(_, ...T) {
    if (!e.apply(this, arguments)) return;
    var A = N(this, T).event(_),
      D = this.__zoom,
      V = Math.max(s[0], Math.min(s[1], D.k * Math.pow(2, r.apply(this, arguments)))),
      $ = me(_);
    if (A.wheel)
      ((A.mouse[0][0] !== $[0] || A.mouse[0][1] !== $[1]) &&
        (A.mouse[1] = D.invert((A.mouse[0] = $))),
        clearTimeout(A.wheel));
    else {
      if (D.k === V) return;
      ((A.mouse = [$, D.invert($)]), Yt(this), A.start());
    }
    (ht(_),
      (A.wheel = setTimeout(B, p)),
      A.zoom("mouse", n(g(x(D, V), A.mouse[0], A.mouse[1]), A.extent, o)));
    function B() {
      ((A.wheel = null), A.end());
    }
  }
  function S(_, ...T) {
    if (f || !e.apply(this, arguments)) return;
    var A = _.currentTarget,
      D = N(this, T, !0).event(_),
      V = de(_.view).on("mousemove.zoom", F, !0).on("mouseup.zoom", P, !0),
      $ = me(_, A),
      B = _.clientX,
      q = _.clientY;
    (Ss(_.view), Sn(_), (D.mouse = [$, this.__zoom.invert($)]), Yt(this), D.start());
    function F(L) {
      if ((ht(L), !D.moved)) {
        var j = L.clientX - B,
          W = L.clientY - q;
        D.moved = j * j + W * W > v;
      }
      D.event(L).zoom(
        "mouse",
        n(g(D.that.__zoom, (D.mouse[0] = me(L, A)), D.mouse[1]), D.extent, o),
      );
    }
    function P(L) {
      (V.on("mousemove.zoom mouseup.zoom", null), Ns(L.view, D.moved), ht(L), D.event(L).end());
    }
  }
  function I(_, ...T) {
    if (e.apply(this, arguments)) {
      var A = this.__zoom,
        D = me(_.changedTouches ? _.changedTouches[0] : _, this),
        V = A.invert(D),
        $ = A.k * (_.shiftKey ? 0.5 : 2),
        B = n(g(x(A, $), D, V), t.apply(this, T), o);
      (ht(_),
        a > 0
          ? de(this).transition().duration(a).call(C, B, D, _)
          : de(this).call(y.transform, B, D, _));
    }
  }
  function E(_, ...T) {
    if (e.apply(this, arguments)) {
      var A = _.touches,
        D = A.length,
        V = N(this, T, _.changedTouches.length === D).event(_),
        $,
        B,
        q,
        F;
      for (Sn(_), B = 0; B < D; ++B)
        ((q = A[B]),
          (F = me(q, this)),
          (F = [F, this.__zoom.invert(F), q.identifier]),
          V.touch0
            ? !V.touch1 && V.touch0[2] !== F[2] && ((V.touch1 = F), (V.taps = 0))
            : ((V.touch0 = F), ($ = !0), (V.taps = 1 + !!u)));
      (u && (u = clearTimeout(u)),
        $ &&
          (V.taps < 2 &&
            ((c = F[0]),
            (u = setTimeout(function () {
              u = null;
            }, h))),
          Yt(this),
          V.start()));
    }
  }
  function k(_, ...T) {
    if (this.__zooming) {
      var A = N(this, T).event(_),
        D = _.changedTouches,
        V = D.length,
        $,
        B,
        q,
        F;
      for (ht(_), $ = 0; $ < V; ++$)
        ((B = D[$]),
          (q = me(B, this)),
          A.touch0 && A.touch0[2] === B.identifier
            ? (A.touch0[0] = q)
            : A.touch1 && A.touch1[2] === B.identifier && (A.touch1[0] = q));
      if (((B = A.that.__zoom), A.touch1)) {
        var P = A.touch0[0],
          L = A.touch0[1],
          j = A.touch1[0],
          W = A.touch1[1],
          G = (G = j[0] - P[0]) * G + (G = j[1] - P[1]) * G,
          H = (H = W[0] - L[0]) * H + (H = W[1] - L[1]) * H;
        ((B = x(B, Math.sqrt(G / H))),
          (q = [(P[0] + j[0]) / 2, (P[1] + j[1]) / 2]),
          (F = [(L[0] + W[0]) / 2, (L[1] + W[1]) / 2]));
      } else if (A.touch0) ((q = A.touch0[0]), (F = A.touch0[1]));
      else return;
      A.zoom("touch", n(g(B, q, F), A.extent, o));
    }
  }
  function O(_, ...T) {
    if (this.__zooming) {
      var A = N(this, T).event(_),
        D = _.changedTouches,
        V = D.length,
        $,
        B;
      for (
        Sn(_),
          f && clearTimeout(f),
          f = setTimeout(function () {
            f = null;
          }, h),
          $ = 0;
        $ < V;
        ++$
      )
        ((B = D[$]),
          A.touch0 && A.touch0[2] === B.identifier
            ? delete A.touch0
            : A.touch1 && A.touch1[2] === B.identifier && delete A.touch1);
      if ((A.touch1 && !A.touch0 && ((A.touch0 = A.touch1), delete A.touch1), A.touch0))
        A.touch0[1] = this.__zoom.invert(A.touch0[0]);
      else if (
        (A.end(), A.taps === 2 && ((B = me(B, this)), Math.hypot(c[0] - B[0], c[1] - B[1]) < m))
      ) {
        var q = de(this).on("dblclick.zoom");
        q && q.apply(this, arguments);
      }
    }
  }
  return (
    (y.wheelDelta = function (_) {
      return arguments.length ? ((r = typeof _ == "function" ? _ : Ot(+_)), y) : r;
    }),
    (y.filter = function (_) {
      return arguments.length ? ((e = typeof _ == "function" ? _ : Ot(!!_)), y) : e;
    }),
    (y.touchable = function (_) {
      return arguments.length ? ((i = typeof _ == "function" ? _ : Ot(!!_)), y) : i;
    }),
    (y.extent = function (_) {
      return arguments.length
        ? ((t =
            typeof _ == "function"
              ? _
              : Ot([
                  [+_[0][0], +_[0][1]],
                  [+_[1][0], +_[1][1]],
                ])),
          y)
        : t;
    }),
    (y.scaleExtent = function (_) {
      return arguments.length ? ((s[0] = +_[0]), (s[1] = +_[1]), y) : [s[0], s[1]];
    }),
    (y.translateExtent = function (_) {
      return arguments.length
        ? ((o[0][0] = +_[0][0]),
          (o[1][0] = +_[1][0]),
          (o[0][1] = +_[0][1]),
          (o[1][1] = +_[1][1]),
          y)
        : [
            [o[0][0], o[0][1]],
            [o[1][0], o[1][1]],
          ];
    }),
    (y.constrain = function (_) {
      return arguments.length ? ((n = _), y) : n;
    }),
    (y.duration = function (_) {
      return arguments.length ? ((a = +_), y) : a;
    }),
    (y.interpolate = function (_) {
      return arguments.length ? ((l = _), y) : l;
    }),
    (y.on = function () {
      var _ = d.on.apply(d, arguments);
      return _ === d ? y : _;
    }),
    (y.clickDistance = function (_) {
      return arguments.length ? ((v = (_ = +_) * _), y) : Math.sqrt(v);
    }),
    (y.tapDistance = function (_) {
      return arguments.length ? ((m = +_), y) : m;
    }),
    y
  );
}
const ve = {
    error001: (e = "react") =>
      `Seems like you have not used zustand provider as an ancestor. Help: https://${e}flow.dev/error#001`,
    error002: () =>
      "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
    error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
    error004: () => "The parent container needs a width and a height to render the graph.",
    error005: () => "Only child nodes can use a parent extent.",
    error006: () => "Can't create edge. An edge needs a source and a target.",
    error007: (e) => `The old edge with id=${e} does not exist.`,
    error009: (e) => `Marker type "${e}" doesn't exist.`,
    error008: (e, { id: t, sourceHandle: n, targetHandle: r }) =>
      `Couldn't create edge for ${e} handle id: "${e === "source" ? n : r}", edge id: ${t}.`,
    error010: () =>
      "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
    error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
    error012: (e) =>
      `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
    error013: (e = "react") =>
      `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
    error014: () =>
      "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
    error015: () =>
      "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",
    error016: (e) =>
      `Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`,
  },
  _t = [
    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
  ],
  Fs = ["Enter", " ", "Escape"],
  Bs = {
    "node.a11yDescription.default":
      "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
    "node.a11yDescription.keyboardDisabled":
      "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
    "node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) =>
      `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
    "edge.a11yDescription.default":
      "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
    "controls.ariaLabel": "Control Panel",
    "controls.zoomIn.ariaLabel": "Zoom In",
    "controls.zoomOut.ariaLabel": "Zoom Out",
    "controls.fitView.ariaLabel": "Fit View",
    "controls.interactive.ariaLabel": "Toggle Interactivity",
    "minimap.ariaLabel": "Mini Map",
    "handle.ariaLabel": "Handle",
  };
var ot;
(function (e) {
  ((e.Strict = "strict"), (e.Loose = "loose"));
})(ot || (ot = {}));
var We;
(function (e) {
  ((e.Free = "free"), (e.Vertical = "vertical"), (e.Horizontal = "horizontal"));
})(We || (We = {}));
var Et;
(function (e) {
  ((e.Partial = "partial"), (e.Full = "full"));
})(Et || (Et = {}));
const qs = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
  pointer: null,
};
var Oe;
(function (e) {
  ((e.Bezier = "default"),
    (e.Straight = "straight"),
    (e.Step = "step"),
    (e.SmoothStep = "smoothstep"),
    (e.SimpleBezier = "simplebezier"));
})(Oe || (Oe = {}));
var tn;
(function (e) {
  ((e.Arrow = "arrow"), (e.ArrowClosed = "arrowclosed"));
})(tn || (tn = {}));
var Z;
(function (e) {
  ((e.Left = "left"), (e.Top = "top"), (e.Right = "right"), (e.Bottom = "bottom"));
})(Z || (Z = {}));
const Ai = { [Z.Left]: Z.Right, [Z.Right]: Z.Left, [Z.Top]: Z.Bottom, [Z.Bottom]: Z.Top };
function Ws(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Ys = (e) => "id" in e && "source" in e && "target" in e,
  eh = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e),
  qr = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e),
  It = (e, t = [0, 0]) => {
    const { width: n, height: r } = Le(e),
      i = e.origin ?? t,
      s = n * i[0],
      o = r * i[1];
    return { x: e.position.x - s, y: e.position.y - o };
  },
  th = (e, t = { nodeOrigin: [0, 0] }) => {
    if (e.length === 0) return { x: 0, y: 0, width: 0, height: 0 };
    const n = e.reduce(
      (r, i) => {
        const s = typeof i == "string";
        let o = !t.nodeLookup && !s ? i : void 0;
        t.nodeLookup && (o = s ? t.nodeLookup.get(i) : qr(i) ? i : t.nodeLookup.get(i.id));
        const a = o ? nn(o, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
        return fn(r, a);
      },
      { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
    );
    return hn(n);
  },
  Pt = (e, t = {}) => {
    let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
      r = !1;
    return (
      e.forEach((i) => {
        (t.filter === void 0 || t.filter(i)) && ((n = fn(n, nn(i))), (r = !0));
      }),
      r ? hn(n) : { x: 0, y: 0, width: 0, height: 0 }
    );
  },
  Wr = (e, t, [n, r, i] = [0, 0, 1], s = !1, o = !1) => {
    const a = { ...ut(t, [n, r, i]), width: t.width / i, height: t.height / i },
      l = [];
    for (const d of e.values()) {
      const { measured: u, selectable: c = !0, hidden: f = !1 } = d;
      if ((o && !c) || f) continue;
      const h = u.width ?? d.width ?? d.initialWidth ?? null,
        p = u.height ?? d.height ?? d.initialHeight ?? null,
        v = St(a, at(d)),
        m = (h ?? 0) * (p ?? 0),
        y = s && v > 0;
      (!d.internals.handleBounds || y || v >= m || d.dragging) && l.push(d);
    }
    return l;
  },
  nh = (e, t) => {
    const n = new Set();
    return (
      e.forEach((r) => {
        n.add(r.id);
      }),
      t.filter((r) => n.has(r.source) || n.has(r.target))
    );
  };
function rh(e, t) {
  const n = new Map(),
    r = t != null && t.nodes ? new Set(t.nodes.map((i) => i.id)) : null;
  return (
    e.forEach((i) => {
      i.measured.width &&
        i.measured.height &&
        ((t == null ? void 0 : t.includeHiddenNodes) || !i.hidden) &&
        (!r || r.has(i.id)) &&
        n.set(i.id, i);
    }),
    n
  );
}
async function ih({ nodes: e, width: t, height: n, panZoom: r, minZoom: i, maxZoom: s }, o) {
  if (e.size === 0) return !0;
  const a = rh(e, o),
    l = Pt(a),
    d = Gr(
      l,
      t,
      n,
      (o == null ? void 0 : o.minZoom) ?? i,
      (o == null ? void 0 : o.maxZoom) ?? s,
      (o == null ? void 0 : o.padding) ?? 0.1,
    );
  return (
    await r.setViewport(d, {
      duration: o == null ? void 0 : o.duration,
      ease: o == null ? void 0 : o.ease,
      interpolate: o == null ? void 0 : o.interpolate,
    }),
    !0
  );
}
function Gs({
  nodeId: e,
  nextPosition: t,
  nodeLookup: n,
  nodeOrigin: r = [0, 0],
  nodeExtent: i,
  onError: s,
}) {
  const o = n.get(e),
    a = o.parentId ? n.get(o.parentId) : void 0,
    { x: l, y: d } = a ? a.internals.positionAbsolute : { x: 0, y: 0 },
    u = o.origin ?? r;
  let c = o.extent || i;
  if (o.extent === "parent" && !o.expandParent)
    if (!a) s == null || s("005", ve.error005());
    else {
      const h = a.measured.width,
        p = a.measured.height;
      h &&
        p &&
        (c = [
          [l, d],
          [l + h, d + p],
        ]);
    }
  else
    a &&
      Ue(o.extent) &&
      (c = [
        [o.extent[0][0] + l, o.extent[0][1] + d],
        [o.extent[1][0] + l, o.extent[1][1] + d],
      ]);
  const f = Ue(c) ? Xe(t, c, o.measured) : t;
  return (
    (o.measured.width === void 0 || o.measured.height === void 0) &&
      (s == null || s("015", ve.error015())),
    {
      position: {
        x: f.x - l + (o.measured.width ?? 0) * u[0],
        y: f.y - d + (o.measured.height ?? 0) * u[1],
      },
      positionAbsolute: f,
    }
  );
}
async function oh({
  nodesToRemove: e = [],
  edgesToRemove: t = [],
  nodes: n,
  edges: r,
  onBeforeDelete: i,
}) {
  const s = new Set(e.map((f) => f.id)),
    o = [];
  for (const f of n) {
    if (f.deletable === !1) continue;
    const h = s.has(f.id),
      p = !h && f.parentId && o.find((v) => v.id === f.parentId);
    (h || p) && o.push(f);
  }
  const a = new Set(t.map((f) => f.id)),
    l = r.filter((f) => f.deletable !== !1),
    u = nh(o, l);
  for (const f of l) a.has(f.id) && !u.find((p) => p.id === f.id) && u.push(f);
  if (!i) return { edges: u, nodes: o };
  const c = await i({ nodes: o, edges: u });
  return typeof c == "boolean" ? (c ? { edges: u, nodes: o } : { edges: [], nodes: [] }) : c;
}
const st = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n),
  Xe = (e = { x: 0, y: 0 }, t, n) => ({
    x: st(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
    y: st(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0)),
  });
function Xs(e, t, n) {
  const { width: r, height: i } = Le(n),
    { x: s, y: o } = n.internals.positionAbsolute;
  return Xe(
    e,
    [
      [s, o],
      [s + r, o + i],
    ],
    t,
  );
}
const Ti = (e, t, n) =>
    e < t ? st(Math.abs(e - t), 1, t) / t : e > n ? -st(Math.abs(e - n), 1, t) / t : 0,
  Yr = (e, t, n = 15, r = 40) => {
    const i = Ti(e.x, r, t.width - r) * n,
      s = Ti(e.y, r, t.height - r) * n;
    return [i, s];
  },
  fn = (e, t) => ({
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x2, t.x2),
    y2: Math.max(e.y2, t.y2),
  }),
  Ar = ({ x: e, y: t, width: n, height: r }) => ({ x: e, y: t, x2: e + n, y2: t + r }),
  hn = ({ x: e, y: t, x2: n, y2: r }) => ({ x: e, y: t, width: n - e, height: r - t }),
  at = (e, t = [0, 0]) => {
    var i, s;
    const { x: n, y: r } = qr(e) ? e.internals.positionAbsolute : It(e, t);
    return {
      x: n,
      y: r,
      width: ((i = e.measured) == null ? void 0 : i.width) ?? e.width ?? e.initialWidth ?? 0,
      height: ((s = e.measured) == null ? void 0 : s.height) ?? e.height ?? e.initialHeight ?? 0,
    };
  },
  nn = (e, t = [0, 0]) => {
    var i, s;
    const { x: n, y: r } = qr(e) ? e.internals.positionAbsolute : It(e, t);
    return {
      x: n,
      y: r,
      x2: n + (((i = e.measured) == null ? void 0 : i.width) ?? e.width ?? e.initialWidth ?? 0),
      y2: r + (((s = e.measured) == null ? void 0 : s.height) ?? e.height ?? e.initialHeight ?? 0),
    };
  },
  Us = (e, t) => hn(fn(Ar(e), Ar(t))),
  St = (e, t) => {
    const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)),
      r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
    return Math.ceil(n * r);
  },
  Ri = (e) => xe(e.width) && xe(e.height) && xe(e.x) && xe(e.y),
  xe = (e) => !isNaN(e) && isFinite(e),
  Ks = (e, t) => (n, r) => {},
  At = (e, t = [1, 1]) => ({ x: t[0] * Math.round(e.x / t[0]), y: t[1] * Math.round(e.y / t[1]) }),
  ut = ({ x: e, y: t }, [n, r, i], s = !1, o = [1, 1]) => {
    const a = { x: (e - n) / i, y: (t - r) / i };
    return s ? At(a, o) : a;
  },
  ct = ({ x: e, y: t }, [n, r, i]) => ({ x: e * i + n, y: t * i + r });
function Ze(e, t) {
  if (typeof e == "number") return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n)) return Math.floor(n);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n)) return Math.floor(t * n * 0.01);
  }
  return (
    console.error(
      `The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`,
    ),
    0
  );
}
function sh(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = Ze(e, n),
      i = Ze(e, t);
    return { top: r, right: i, bottom: r, left: i, x: i * 2, y: r * 2 };
  }
  if (typeof e == "object") {
    const r = Ze(e.top ?? e.y ?? 0, n),
      i = Ze(e.bottom ?? e.y ?? 0, n),
      s = Ze(e.left ?? e.x ?? 0, t),
      o = Ze(e.right ?? e.x ?? 0, t);
    return { top: r, right: o, bottom: i, left: s, x: s + o, y: r + i };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function ah(e, t, n, r, i, s) {
  const { x: o, y: a } = ct(e, [t, n, r]),
    { x: l, y: d } = ct({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]),
    u = i - l,
    c = s - d;
  return { left: Math.floor(o), top: Math.floor(a), right: Math.floor(u), bottom: Math.floor(c) };
}
const Gr = (e, t, n, r, i, s) => {
    const o = sh(s, t, n),
      a = (t - o.x) / e.width,
      l = (n - o.y) / e.height,
      d = Math.min(a, l),
      u = st(d, r, i),
      c = e.x + e.width / 2,
      f = e.y + e.height / 2,
      h = t / 2 - c * u,
      p = n / 2 - f * u,
      v = ah(e, h, p, u, t, n),
      m = {
        left: Math.min(v.left - o.left, 0),
        top: Math.min(v.top - o.top, 0),
        right: Math.min(v.right - o.right, 0),
        bottom: Math.min(v.bottom - o.bottom, 0),
      };
    return { x: h - m.left + m.right, y: p - m.top + m.bottom, zoom: u };
  },
  Nt = () => {
    var e;
    return (
      typeof navigator < "u" &&
      ((e = navigator == null ? void 0 : navigator.userAgent) == null
        ? void 0
        : e.indexOf("Mac")) >= 0
    );
  };
function Ue(e) {
  return e != null && e !== "parent";
}
function Le(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0,
  };
}
function Zs(e) {
  var t, n;
  return (
    (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 &&
    (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0
  );
}
function Qs(e, t = { width: 0, height: 0 }, n, r, i) {
  const s = { ...e },
    o = r.get(n);
  if (o) {
    const a = o.origin || i;
    ((s.x += o.internals.positionAbsolute.x - (t.width ?? 0) * a[0]),
      (s.y += o.internals.positionAbsolute.y - (t.height ?? 0) * a[1]));
  }
  return s;
}
function Li(e, t) {
  if (e.size !== t.size) return !1;
  for (const n of e) if (!t.has(n)) return !1;
  return !0;
}
function ch() {
  let e, t;
  return {
    promise: new Promise((r, i) => {
      ((e = r), (t = i));
    }),
    resolve: e,
    reject: t,
  };
}
function lh(e) {
  return { ...Bs, ...(e || {}) };
}
function yt(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: i }) {
  const { x: s, y: o } = we(e),
    a = ut(
      { x: s - ((i == null ? void 0 : i.left) ?? 0), y: o - ((i == null ? void 0 : i.top) ?? 0) },
      r,
    ),
    { x: l, y: d } = n ? At(a, t) : a;
  return { xSnapped: l, ySnapped: d, ...a };
}
const Xr = (e) => ({ width: e.offsetWidth, height: e.offsetHeight }),
  Js = (e) => {
    var t;
    return (
      ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) ||
      (window == null ? void 0 : window.document)
    );
  },
  uh = ["INPUT", "SELECT", "TEXTAREA"];
function ea(e) {
  var r, i;
  const t =
    ((i = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : i[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1
    ? !1
    : uh.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const ta = (e) => "clientX" in e,
  we = (e, t) => {
    var s, o;
    const n = ta(e),
      r = n ? e.clientX : (s = e.touches) == null ? void 0 : s[0].clientX,
      i = n ? e.clientY : (o = e.touches) == null ? void 0 : o[0].clientY;
    return {
      x: r - ((t == null ? void 0 : t.left) ?? 0),
      y: i - ((t == null ? void 0 : t.top) ?? 0),
    };
  },
  $i = (e, t, n, r, i) => {
    const s = t.querySelectorAll(`.${e}`);
    return !s || !s.length
      ? null
      : Array.from(s).map((o) => {
          const a = o.getBoundingClientRect();
          return {
            id: o.getAttribute("data-handleid"),
            type: e,
            nodeId: i,
            position: o.getAttribute("data-handlepos"),
            x: (a.left - n.left) / r,
            y: (a.top - n.top) / r,
            ...Xr(o),
          };
        });
  };
function na({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: r,
  sourceControlX: i,
  sourceControlY: s,
  targetControlX: o,
  targetControlY: a,
}) {
  const l = e * 0.125 + i * 0.375 + o * 0.375 + n * 0.125,
    d = t * 0.125 + s * 0.375 + a * 0.375 + r * 0.125,
    u = Math.abs(l - e),
    c = Math.abs(d - t);
  return [l, d, u, c];
}
function jt(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Di({ pos: e, x1: t, y1: n, x2: r, y2: i, c: s }) {
  switch (e) {
    case Z.Left:
      return [t - jt(t - r, s), n];
    case Z.Right:
      return [t + jt(r - t, s), n];
    case Z.Top:
      return [t, n - jt(n - i, s)];
    case Z.Bottom:
      return [t, n + jt(i - n, s)];
  }
}
function ra({
  sourceX: e,
  sourceY: t,
  sourcePosition: n = Z.Bottom,
  targetX: r,
  targetY: i,
  targetPosition: s = Z.Top,
  curvature: o = 0.25,
}) {
  const [a, l] = Di({ pos: n, x1: e, y1: t, x2: r, y2: i, c: o }),
    [d, u] = Di({ pos: s, x1: r, y1: i, x2: e, y2: t, c: o }),
    [c, f, h, p] = na({
      sourceX: e,
      sourceY: t,
      targetX: r,
      targetY: i,
      sourceControlX: a,
      sourceControlY: l,
      targetControlX: d,
      targetControlY: u,
    });
  return [`M${e},${t} C${a},${l} ${d},${u} ${r},${i}`, c, f, h, p];
}
function ia({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const i = Math.abs(n - e) / 2,
    s = n < e ? n + i : n - i,
    o = Math.abs(r - t) / 2,
    a = r < t ? r + o : r - o;
  return [s, a, i, o];
}
function dh({
  sourceNode: e,
  targetNode: t,
  selected: n = !1,
  zIndex: r = 0,
  elevateOnSelect: i = !1,
  zIndexMode: s = "basic",
}) {
  if (s === "manual") return r;
  const o = i && n ? r + 1e3 : r,
    a = Math.max(
      e.parentId || (i && e.selected) ? e.internals.z : 0,
      t.parentId || (i && t.selected) ? t.internals.z : 0,
    );
  return o + a;
}
function fh({ sourceNode: e, targetNode: t, width: n, height: r, transform: i }) {
  const s = fn(nn(e), nn(t));
  (s.x === s.x2 && (s.x2 += 1), s.y === s.y2 && (s.y2 += 1));
  const o = { x: -i[0] / i[2], y: -i[1] / i[2], width: n / i[2], height: r / i[2] };
  return St(o, hn(s)) > 0;
}
const hh = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) =>
    `xy-edge__${e}${t || ""}-${n}${r || ""}`,
  ph = (e, t) =>
    t.some(
      (n) =>
        n.source === e.source &&
        n.target === e.target &&
        (n.sourceHandle === e.sourceHandle || (!n.sourceHandle && !e.sourceHandle)) &&
        (n.targetHandle === e.targetHandle || (!n.targetHandle && !e.targetHandle)),
    ),
  gh = (e, t, n = {}) => {
    var s;
    if (!e.source || !e.target)
      return ((s = n.onError) == null || s.call(n, "006", ve.error006()), t);
    const r = n.getEdgeId || hh;
    let i;
    return (
      Ys(e) ? (i = { ...e }) : (i = { ...e, id: r(e) }),
      ph(i, t)
        ? t
        : (i.sourceHandle === null && delete i.sourceHandle,
          i.targetHandle === null && delete i.targetHandle,
          t.concat(i))
    );
  };
function oa({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [i, s, o, a] = ia({ sourceX: e, sourceY: t, targetX: n, targetY: r });
  return [`M ${e},${t}L ${n},${r}`, i, s, o, a];
}
const Oi = {
    [Z.Left]: { x: -1, y: 0 },
    [Z.Right]: { x: 1, y: 0 },
    [Z.Top]: { x: 0, y: -1 },
    [Z.Bottom]: { x: 0, y: 1 },
  },
  mh = ({ source: e, sourcePosition: t = Z.Bottom, target: n }) =>
    t === Z.Left || t === Z.Right
      ? e.x < n.x
        ? { x: 1, y: 0 }
        : { x: -1, y: 0 }
      : e.y < n.y
        ? { x: 0, y: 1 }
        : { x: 0, y: -1 },
  ji = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function yh({
  source: e,
  sourcePosition: t = Z.Bottom,
  target: n,
  targetPosition: r = Z.Top,
  center: i,
  offset: s,
  stepPosition: o,
}) {
  const a = Oi[t],
    l = Oi[r],
    d = { x: e.x + a.x * s, y: e.y + a.y * s },
    u = { x: n.x + l.x * s, y: n.y + l.y * s },
    c = mh({ source: d, sourcePosition: t, target: u }),
    f = c.x !== 0 ? "x" : "y",
    h = c[f];
  let p = [],
    v,
    m;
  const y = { x: 0, y: 0 },
    x = { x: 0, y: 0 },
    [, , g, w] = ia({ sourceX: e.x, sourceY: e.y, targetX: n.x, targetY: n.y });
  if (a[f] * l[f] === -1) {
    f === "x"
      ? ((v = i.x ?? d.x + (u.x - d.x) * o), (m = i.y ?? (d.y + u.y) / 2))
      : ((v = i.x ?? (d.x + u.x) / 2), (m = i.y ?? d.y + (u.y - d.y) * o));
    const b = [
        { x: v, y: d.y },
        { x: v, y: u.y },
      ],
      S = [
        { x: d.x, y: m },
        { x: u.x, y: m },
      ];
    a[f] === h ? (p = f === "x" ? b : S) : (p = f === "x" ? S : b);
  } else {
    const b = [{ x: d.x, y: u.y }],
      S = [{ x: u.x, y: d.y }];
    if ((f === "x" ? (p = a.x === h ? S : b) : (p = a.y === h ? b : S), t === r)) {
      const _ = Math.abs(e[f] - n[f]);
      if (_ <= s) {
        const T = Math.min(s - 1, s - _);
        a[f] === h ? (y[f] = (d[f] > e[f] ? -1 : 1) * T) : (x[f] = (u[f] > n[f] ? -1 : 1) * T);
      }
    }
    if (t !== r) {
      const _ = f === "x" ? "y" : "x",
        T = a[f] === l[_],
        A = d[_] > u[_],
        D = d[_] < u[_];
      ((a[f] === 1 && ((!T && A) || (T && D))) || (a[f] !== 1 && ((!T && D) || (T && A)))) &&
        (p = f === "x" ? b : S);
    }
    const I = { x: d.x + y.x, y: d.y + y.y },
      E = { x: u.x + x.x, y: u.y + x.y },
      k = Math.max(Math.abs(I.x - p[0].x), Math.abs(E.x - p[0].x)),
      O = Math.max(Math.abs(I.y - p[0].y), Math.abs(E.y - p[0].y));
    k >= O ? ((v = (I.x + E.x) / 2), (m = p[0].y)) : ((v = p[0].x), (m = (I.y + E.y) / 2));
  }
  const C = { x: d.x + y.x, y: d.y + y.y },
    N = { x: u.x + x.x, y: u.y + x.y };
  return [
    [
      e,
      ...(C.x !== p[0].x || C.y !== p[0].y ? [C] : []),
      ...p,
      ...(N.x !== p[p.length - 1].x || N.y !== p[p.length - 1].y ? [N] : []),
      n,
    ],
    v,
    m,
    g,
    w,
  ];
}
function xh(e, t, n, r) {
  const i = Math.min(ji(e, t) / 2, ji(t, n) / 2, r),
    { x: s, y: o } = t;
  if ((e.x === s && s === n.x) || (e.y === o && o === n.y)) return `L${s} ${o}`;
  if (e.y === o) {
    const d = e.x < n.x ? -1 : 1,
      u = e.y < n.y ? 1 : -1;
    return `L ${s + i * d},${o}Q ${s},${o} ${s},${o + i * u}`;
  }
  const a = e.x < n.x ? 1 : -1,
    l = e.y < n.y ? -1 : 1;
  return `L ${s},${o + i * l}Q ${s},${o} ${s + i * a},${o}`;
}
function Tr({
  sourceX: e,
  sourceY: t,
  sourcePosition: n = Z.Bottom,
  targetX: r,
  targetY: i,
  targetPosition: s = Z.Top,
  borderRadius: o = 5,
  centerX: a,
  centerY: l,
  offset: d = 20,
  stepPosition: u = 0.5,
}) {
  const [c, f, h, p, v] = yh({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: i },
    targetPosition: s,
    center: { x: a, y: l },
    offset: d,
    stepPosition: u,
  });
  let m = `M${c[0].x} ${c[0].y}`;
  for (let y = 1; y < c.length - 1; y++) m += xh(c[y - 1], c[y], c[y + 1], o);
  return ((m += `L${c[c.length - 1].x} ${c[c.length - 1].y}`), [m, f, h, p, v]);
}
function Hi(e) {
  var t;
  return (
    e &&
    !!(e.internals.handleBounds || ((t = e.handles) != null && t.length)) &&
    !!(e.measured.width || e.width || e.initialWidth)
  );
}
function wh(e) {
  var c;
  const { sourceNode: t, targetNode: n } = e;
  if (!Hi(t) || !Hi(n)) return null;
  const r = t.internals.handleBounds || zi(t.handles),
    i = n.internals.handleBounds || zi(n.handles),
    s = Vi((r == null ? void 0 : r.source) ?? [], e.sourceHandle),
    o = Vi(
      e.connectionMode === ot.Strict
        ? ((i == null ? void 0 : i.target) ?? [])
        : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
      e.targetHandle,
    );
  if (!s || !o)
    return (
      (c = e.onError) == null ||
        c.call(
          e,
          "008",
          ve.error008(s ? "target" : "source", {
            id: e.id,
            sourceHandle: e.sourceHandle,
            targetHandle: e.targetHandle,
          }),
        ),
      null
    );
  const a = (s == null ? void 0 : s.position) || Z.Bottom,
    l = (o == null ? void 0 : o.position) || Z.Top,
    d = Ke(t, s, a),
    u = Ke(n, o, l);
  return {
    sourceX: d.x,
    sourceY: d.y,
    targetX: u.x,
    targetY: u.y,
    sourcePosition: a,
    targetPosition: l,
  };
}
function zi(e) {
  if (!e) return null;
  const t = [],
    n = [];
  for (const r of e)
    ((r.width = r.width ?? 1),
      (r.height = r.height ?? 1),
      r.type === "source" ? t.push(r) : r.type === "target" && n.push(r));
  return { source: t, target: n };
}
function Ke(e, t, n = Z.Left, r = !1) {
  const i = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x,
    s = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y,
    { width: o, height: a } = t ?? Le(e);
  if (r) return { x: i + o / 2, y: s + a / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Z.Top:
      return { x: i + o / 2, y: s };
    case Z.Right:
      return { x: i + o, y: s + a / 2 };
    case Z.Bottom:
      return { x: i + o / 2, y: s + a };
    case Z.Left:
      return { x: i, y: s + a / 2 };
  }
}
function Vi(e, t) {
  return (e && (t ? e.find((n) => n.id === t) : e[0])) || null;
}
function Rr(e, t) {
  return e
    ? typeof e == "string"
      ? e
      : `${t ? `${t}__` : ""}${Object.keys(e)
          .sort()
          .map((r) => `${r}=${e[r]}`)
          .join("&")}`
    : "";
}
function vh(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: i }) {
  const s = new Set();
  return e
    .reduce(
      (o, a) => (
        [a.markerStart || r, a.markerEnd || i].forEach((l) => {
          if (l && typeof l == "object") {
            const d = Rr(l, t);
            s.has(d) || (o.push({ id: d, color: l.color || n, ...l }), s.add(d));
          }
        }),
        o
      ),
      [],
    )
    .sort((o, a) => o.id.localeCompare(a.id));
}
const sa = 1e3,
  bh = 10,
  Ur = {
    nodeOrigin: [0, 0],
    nodeExtent: _t,
    elevateNodesOnSelect: !0,
    zIndexMode: "basic",
    defaults: {},
  },
  _h = { ...Ur, checkEquality: !0 };
function Kr(e, t) {
  const n = { ...e };
  for (const r in t) t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Eh(e, t, n) {
  const r = Kr(Ur, n);
  for (const i of e.values())
    if (i.parentId) Qr(i, e, t, r);
    else {
      const s = It(i, r.nodeOrigin),
        o = Ue(i.extent) ? i.extent : r.nodeExtent,
        a = Xe(s, o, Le(i));
      i.internals.positionAbsolute = a;
    }
}
function Sh(e, t) {
  if (!e.handles) return e.measured ? (t == null ? void 0 : t.internals.handleBounds) : void 0;
  const n = [],
    r = [];
  for (const i of e.handles) {
    const s = {
      id: i.id,
      width: i.width ?? 1,
      height: i.height ?? 1,
      nodeId: e.id,
      x: i.x,
      y: i.y,
      position: i.position,
      type: i.type,
    };
    i.type === "source" ? n.push(s) : i.type === "target" && r.push(s);
  }
  return { source: n, target: r };
}
function Zr(e) {
  return e === "manual";
}
function Lr(e, t, n, r = {}) {
  var u, c;
  const i = Kr(_h, r),
    s = { i: 0 },
    o = new Map(t),
    a = i != null && i.elevateNodesOnSelect && !Zr(i.zIndexMode) ? sa : 0;
  let l = e.length > 0,
    d = !1;
  (t.clear(), n.clear());
  for (const f of e) {
    let h = o.get(f.id);
    if (i.checkEquality && f === (h == null ? void 0 : h.internals.userNode)) t.set(f.id, h);
    else {
      const p = It(f, i.nodeOrigin),
        v = Ue(f.extent) ? f.extent : i.nodeExtent,
        m = Xe(p, v, Le(f));
      ((h = {
        ...i.defaults,
        ...f,
        measured: {
          width: (u = f.measured) == null ? void 0 : u.width,
          height: (c = f.measured) == null ? void 0 : c.height,
        },
        internals: {
          positionAbsolute: m,
          handleBounds: Sh(f, h),
          z: aa(f, a, i.zIndexMode),
          userNode: f,
        },
      }),
        t.set(f.id, h));
    }
    ((h.measured === void 0 || h.measured.width === void 0 || h.measured.height === void 0) &&
      !h.hidden &&
      (l = !1),
      f.parentId && Qr(h, t, n, r, s),
      d || (d = f.selected ?? !1));
  }
  return { nodesInitialized: l, hasSelectedNodes: d };
}
function Nh(e, t) {
  if (!e.parentId) return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, new Map([[e.id, e]]));
}
function Qr(e, t, n, r, i) {
  const { elevateNodesOnSelect: s, nodeOrigin: o, nodeExtent: a, zIndexMode: l } = Kr(Ur, r),
    d = e.parentId,
    u = t.get(d);
  if (!u) {
    console.warn(
      `Parent node ${d} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`,
    );
    return;
  }
  (Nh(e, n),
    i &&
      !u.parentId &&
      u.internals.rootParentIndex === void 0 &&
      l === "auto" &&
      ((u.internals.rootParentIndex = ++i.i), (u.internals.z = u.internals.z + i.i * bh)),
    i && u.internals.rootParentIndex !== void 0 && (i.i = u.internals.rootParentIndex));
  const c = s && !Zr(l) ? sa : 0,
    { x: f, y: h, z: p } = Ch(e, u, o, a, c, l),
    { positionAbsolute: v } = e.internals,
    m = f !== v.x || h !== v.y;
  (m || p !== e.internals.z) &&
    t.set(e.id, {
      ...e,
      internals: { ...e.internals, positionAbsolute: m ? { x: f, y: h } : v, z: p },
    });
}
function aa(e, t, n) {
  const r = xe(e.zIndex) ? e.zIndex : 0;
  return Zr(n) ? r : r + (e.selected ? t : 0);
}
function Ch(e, t, n, r, i, s) {
  const { x: o, y: a } = t.internals.positionAbsolute,
    l = Le(e),
    d = It(e, n),
    u = Ue(e.extent) ? Xe(d, e.extent, l) : d;
  let c = Xe({ x: o + u.x, y: a + u.y }, r, l);
  e.extent === "parent" && (c = Xs(c, l, t));
  const f = aa(e, i, s),
    h = t.internals.z ?? 0;
  return { x: c.x, y: c.y, z: h >= f ? h + 1 : f };
}
function Jr(e, t, n, r = [0, 0]) {
  var o;
  const i = [],
    s = new Map();
  for (const a of e) {
    const l = t.get(a.parentId);
    if (!l) continue;
    const d = ((o = s.get(a.parentId)) == null ? void 0 : o.expandedRect) ?? at(l),
      u = Us(d, a.rect);
    s.set(a.parentId, { expandedRect: u, parent: l });
  }
  return (
    s.size > 0 &&
      s.forEach(({ expandedRect: a, parent: l }, d) => {
        var g;
        const u = l.internals.positionAbsolute,
          c = Le(l),
          f = l.origin ?? r,
          h = a.x < u.x ? Math.round(Math.abs(u.x - a.x)) : 0,
          p = a.y < u.y ? Math.round(Math.abs(u.y - a.y)) : 0,
          v = Math.max(c.width, Math.round(a.width)),
          m = Math.max(c.height, Math.round(a.height)),
          y = (v - c.width) * f[0],
          x = (m - c.height) * f[1];
        ((h > 0 || p > 0 || y || x) &&
          (i.push({
            id: d,
            type: "position",
            position: { x: l.position.x - h + y, y: l.position.y - p + x },
          }),
          (g = n.get(d)) == null ||
            g.forEach((w) => {
              e.some((C) => C.id === w.id) ||
                i.push({
                  id: w.id,
                  type: "position",
                  position: { x: w.position.x + h, y: w.position.y + p },
                });
            })),
          (c.width < a.width || c.height < a.height || h || p) &&
            i.push({
              id: d,
              type: "dimensions",
              setAttributes: !0,
              dimensions: { width: v + (h ? f[0] * h - y : 0), height: m + (p ? f[1] * p - x : 0) },
            }));
      }),
    i
  );
}
function kh(e, t, n, r, i, s, o) {
  const a = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let l = !1;
  if (!a) return { changes: [], updatedInternals: l };
  const d = [],
    u = window.getComputedStyle(a),
    { m22: c } = new window.DOMMatrixReadOnly(u.transform),
    f = [];
  for (const h of e.values()) {
    const p = t.get(h.id);
    if (!p) continue;
    if (p.hidden) {
      (t.set(p.id, { ...p, internals: { ...p.internals, handleBounds: void 0 } }), (l = !0));
      continue;
    }
    const v = Xr(h.nodeElement),
      m = p.measured.width !== v.width || p.measured.height !== v.height;
    if (!!(v.width && v.height && (m || !p.internals.handleBounds || h.force))) {
      const x = h.nodeElement.getBoundingClientRect(),
        g = Ue(p.extent) ? p.extent : s;
      let { positionAbsolute: w } = p.internals;
      p.parentId && p.extent === "parent"
        ? (w = Xs(w, v, t.get(p.parentId)))
        : g && (w = Xe(w, g, v));
      const C = {
        ...p,
        measured: v,
        internals: {
          ...p.internals,
          positionAbsolute: w,
          handleBounds: {
            source: $i("source", h.nodeElement, x, c, p.id),
            target: $i("target", h.nodeElement, x, c, p.id),
          },
        },
      };
      (t.set(p.id, C),
        p.parentId && Qr(C, t, n, { nodeOrigin: i, zIndexMode: o }),
        (l = !0),
        m &&
          (d.push({ id: p.id, type: "dimensions", dimensions: v }),
          p.expandParent &&
            p.parentId &&
            f.push({ id: p.id, parentId: p.parentId, rect: at(C, i) })));
    }
  }
  if (f.length > 0) {
    const h = Jr(f, t, n, i);
    d.push(...h);
  }
  return { changes: d, updatedInternals: l };
}
async function Mh({ delta: e, panZoom: t, transform: n, translateExtent: r, width: i, height: s }) {
  if (!t || (!e.x && !e.y)) return !1;
  const o = await t.setViewportConstrained(
    { x: n[0] + e.x, y: n[1] + e.y, zoom: n[2] },
    [
      [0, 0],
      [i, s],
    ],
    r,
  );
  return !!o && (o.x !== n[0] || o.y !== n[1] || o.k !== n[2]);
}
function Fi(e, t, n, r, i, s) {
  let o = i;
  const a = r.get(o) || new Map();
  (r.set(o, a.set(n, t)), (o = `${i}-${e}`));
  const l = r.get(o) || new Map();
  if ((r.set(o, l.set(n, t)), s)) {
    o = `${i}-${e}-${s}`;
    const d = r.get(o) || new Map();
    r.set(o, d.set(n, t));
  }
}
function ca(e, t, n) {
  (e.clear(), t.clear());
  for (const r of n) {
    const { source: i, target: s, sourceHandle: o = null, targetHandle: a = null } = r,
      l = { edgeId: r.id, source: i, target: s, sourceHandle: o, targetHandle: a },
      d = `${i}-${o}--${s}-${a}`,
      u = `${s}-${a}--${i}-${o}`;
    (Fi("source", l, u, e, i, o), Fi("target", l, d, e, s, a), t.set(r.id, r));
  }
}
function la(e, t) {
  if (!e.parentId) return !1;
  const n = t.get(e.parentId);
  return n ? (n.selected ? !0 : la(n, t)) : !1;
}
function Bi(e, t, n) {
  var i;
  let r = e;
  do {
    if ((i = r == null ? void 0 : r.matches) != null && i.call(r, t)) return !0;
    if (r === n) return !1;
    r = r == null ? void 0 : r.parentElement;
  } while (r);
  return !1;
}
function Ih(e, t, n, r) {
  const i = new Map();
  for (const [s, o] of e)
    if (
      (o.selected || o.id === r) &&
      (!o.parentId || !la(o, e)) &&
      (o.draggable || (t && typeof o.draggable > "u"))
    ) {
      const a = e.get(s);
      a &&
        i.set(s, {
          id: s,
          position: a.position || { x: 0, y: 0 },
          distance: {
            x: n.x - a.internals.positionAbsolute.x,
            y: n.y - a.internals.positionAbsolute.y,
          },
          extent: a.extent,
          parentId: a.parentId,
          origin: a.origin,
          expandParent: a.expandParent,
          internals: { positionAbsolute: a.internals.positionAbsolute || { x: 0, y: 0 } },
          measured: { width: a.measured.width ?? 0, height: a.measured.height ?? 0 },
        });
    }
  return i;
}
function Nn({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var o, a, l;
  const i = [];
  for (const [d, u] of t) {
    const c = (o = n.get(d)) == null ? void 0 : o.internals.userNode;
    c && i.push({ ...c, position: u.position, dragging: r });
  }
  if (!e) return [i[0], i];
  const s = (a = n.get(e)) == null ? void 0 : a.internals.userNode;
  return [
    s
      ? {
          ...s,
          position: ((l = t.get(e)) == null ? void 0 : l.position) || s.position,
          dragging: r,
        }
      : i[0],
    i,
  ];
}
function Ph({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const i = e.values().next().value;
  if (!i) return null;
  const s = { x: n - i.distance.x, y: r - i.distance.y },
    o = At(s, t);
  return { x: o.x - s.x, y: o.y - s.y };
}
function Ah({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: i }) {
  let s = { x: null, y: null },
    o = 0,
    a = new Map(),
    l = !1,
    d = { x: 0, y: 0 },
    u = null,
    c = !1,
    f = null,
    h = !1,
    p = !1,
    v = null;
  function m({
    noDragClassName: x,
    handleSelector: g,
    domNode: w,
    isSelectable: C,
    nodeId: N,
    nodeClickDistance: M = 0,
  }) {
    f = de(w);
    function b({ x: k, y: O }) {
      const {
        nodeLookup: _,
        nodeExtent: T,
        snapGrid: A,
        snapToGrid: D,
        nodeOrigin: V,
        onNodeDrag: $,
        onSelectionDrag: B,
        onError: q,
        updateNodePositions: F,
      } = t();
      s = { x: k, y: O };
      let P = !1;
      const L = a.size > 1,
        j = L && T ? Ar(Pt(a)) : null,
        W = L && D ? Ph({ dragItems: a, snapGrid: A, x: k, y: O }) : null;
      for (const [G, H] of a) {
        if (!_.has(G)) continue;
        let Y = { x: k - H.distance.x, y: O - H.distance.y };
        D && (Y = W ? { x: Math.round(Y.x + W.x), y: Math.round(Y.y + W.y) } : At(Y, A));
        let K = null;
        if (L && T && !H.extent && j) {
          const { positionAbsolute: X } = H.internals,
            J = X.x - j.x + T[0][0],
            te = X.x + H.measured.width - j.x2 + T[1][0],
            ne = X.y - j.y + T[0][1],
            se = X.y + H.measured.height - j.y2 + T[1][1];
          K = [
            [J, ne],
            [te, se],
          ];
        }
        const { position: Q, positionAbsolute: U } = Gs({
          nodeId: G,
          nextPosition: Y,
          nodeLookup: _,
          nodeExtent: K || T,
          nodeOrigin: V,
          onError: q,
        });
        ((P = P || H.position.x !== Q.x || H.position.y !== Q.y),
          (H.position = Q),
          (H.internals.positionAbsolute = U));
      }
      if (((p = p || P), !!P && (F(a, !0), v && (r || $ || (!N && B))))) {
        const [G, H] = Nn({ nodeId: N, dragItems: a, nodeLookup: _ });
        (r == null || r(v, a, G, H), $ == null || $(v, G, H), N || B == null || B(v, H));
      }
    }
    async function S() {
      if (!u) return;
      const { transform: k, panBy: O, autoPanSpeed: _, autoPanOnNodeDrag: T } = t();
      if (!T) {
        ((l = !1), cancelAnimationFrame(o));
        return;
      }
      const [A, D] = Yr(d, u, _);
      ((A !== 0 || D !== 0) &&
        ((s.x = (s.x ?? 0) - A / k[2]),
        (s.y = (s.y ?? 0) - D / k[2]),
        (await O({ x: A, y: D })) && b(s)),
        (o = requestAnimationFrame(S)));
    }
    function I(k) {
      var L;
      const {
        nodeLookup: O,
        multiSelectionActive: _,
        nodesDraggable: T,
        transform: A,
        snapGrid: D,
        snapToGrid: V,
        selectNodesOnDrag: $,
        onNodeDragStart: B,
        onSelectionDragStart: q,
        unselectNodesAndEdges: F,
      } = t();
      ((c = !0),
        (!$ || !C) && !_ && N && (((L = O.get(N)) != null && L.selected) || F()),
        C && $ && N && (e == null || e(N)));
      const P = yt(k.sourceEvent, { transform: A, snapGrid: D, snapToGrid: V, containerBounds: u });
      if (((s = P), (a = Ih(O, T, P, N)), a.size > 0 && (n || B || (!N && q)))) {
        const [j, W] = Nn({ nodeId: N, dragItems: a, nodeLookup: O });
        (n == null || n(k.sourceEvent, a, j, W),
          B == null || B(k.sourceEvent, j, W),
          N || q == null || q(k.sourceEvent, W));
      }
    }
    const E = Cs()
      .clickDistance(M)
      .on("start", (k) => {
        const { domNode: O, nodeDragThreshold: _, transform: T, snapGrid: A, snapToGrid: D } = t();
        ((u = (O == null ? void 0 : O.getBoundingClientRect()) || null),
          (h = !1),
          (p = !1),
          (v = k.sourceEvent),
          _ === 0 && I(k),
          (s = yt(k.sourceEvent, { transform: T, snapGrid: A, snapToGrid: D, containerBounds: u })),
          (d = we(k.sourceEvent, u)));
      })
      .on("drag", (k) => {
        const {
            autoPanOnNodeDrag: O,
            transform: _,
            snapGrid: T,
            snapToGrid: A,
            nodeDragThreshold: D,
            nodeLookup: V,
          } = t(),
          $ = yt(k.sourceEvent, { transform: _, snapGrid: T, snapToGrid: A, containerBounds: u });
        if (
          ((v = k.sourceEvent),
          ((k.sourceEvent.type === "touchmove" && k.sourceEvent.touches.length > 1) ||
            (N && !V.has(N))) &&
            (h = !0),
          !h)
        ) {
          if ((!l && O && c && ((l = !0), S()), !c)) {
            const B = we(k.sourceEvent, u),
              q = B.x - d.x,
              F = B.y - d.y;
            Math.sqrt(q * q + F * F) > D && I(k);
          }
          (s.x !== $.xSnapped || s.y !== $.ySnapped) &&
            a &&
            c &&
            ((d = we(k.sourceEvent, u)), b($));
        }
      })
      .on("end", (k) => {
        if (!c || h) {
          h && a.size > 0 && t().updateNodePositions(a, !1);
          return;
        }
        if (((l = !1), (c = !1), cancelAnimationFrame(o), a.size > 0)) {
          const {
            nodeLookup: O,
            updateNodePositions: _,
            onNodeDragStop: T,
            onSelectionDragStop: A,
          } = t();
          if ((p && (_(a, !1), (p = !1)), i || T || (!N && A))) {
            const [D, V] = Nn({ nodeId: N, dragItems: a, nodeLookup: O, dragging: !1 });
            (i == null || i(k.sourceEvent, a, D, V),
              T == null || T(k.sourceEvent, D, V),
              N || A == null || A(k.sourceEvent, V));
          }
        }
      })
      .filter((k) => {
        const O = k.target;
        return !k.button && (!x || !Bi(O, `.${x}`, w)) && (!g || Bi(O, g, w));
      });
    f.call(E);
  }
  function y() {
    f == null || f.on(".drag", null);
  }
  return { update: m, destroy: y };
}
function Th(e, t, n) {
  const r = [],
    i = { x: e.x - n, y: e.y - n, width: n * 2, height: n * 2 };
  for (const s of t.values()) St(i, at(s)) > 0 && r.push(s);
  return r;
}
const Rh = 250;
function Lh(e, t, n, r) {
  var a, l;
  let i = [],
    s = 1 / 0;
  const o = Th(e, n, t + Rh);
  for (const d of o) {
    const u = [
      ...(((a = d.internals.handleBounds) == null ? void 0 : a.source) ?? []),
      ...(((l = d.internals.handleBounds) == null ? void 0 : l.target) ?? []),
    ];
    for (const c of u) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id) continue;
      const { x: f, y: h } = Ke(d, c, c.position, !0),
        p = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(h - e.y, 2));
      p > t ||
        (p < s ? ((i = [{ ...c, x: f, y: h }]), (s = p)) : p === s && i.push({ ...c, x: f, y: h }));
    }
  }
  if (!i.length) return null;
  if (i.length > 1) {
    const d = r.type === "source" ? "target" : "source";
    return i.find((u) => u.type === d) ?? i[0];
  }
  return i[0];
}
function ua(e, t, n, r, i, s = !1) {
  var d, u, c;
  const o = r.get(e);
  if (!o) return null;
  const a =
      i === "strict"
        ? (d = o.internals.handleBounds) == null
          ? void 0
          : d[t]
        : [
            ...(((u = o.internals.handleBounds) == null ? void 0 : u.source) ?? []),
            ...(((c = o.internals.handleBounds) == null ? void 0 : c.target) ?? []),
          ],
    l = (n ? (a == null ? void 0 : a.find((f) => f.id === n)) : a == null ? void 0 : a[0]) ?? null;
  return l && s ? { ...l, ...Ke(o, l, l.position, !0) } : l;
}
function da(e, t) {
  return (
    e ||
    (t != null && t.classList.contains("target")
      ? "target"
      : t != null && t.classList.contains("source")
        ? "source"
        : null)
  );
}
function $h(e, t) {
  let n = null;
  return (t ? (n = !0) : e && !t && (n = !1), n);
}
const fa = () => !0;
function Dh(
  e,
  {
    connectionMode: t,
    connectionRadius: n,
    handleId: r,
    nodeId: i,
    edgeUpdaterType: s,
    isTarget: o,
    domNode: a,
    nodeLookup: l,
    lib: d,
    autoPanOnConnect: u,
    flowId: c,
    panBy: f,
    cancelConnection: h,
    onConnectStart: p,
    onConnect: v,
    onConnectEnd: m,
    isValidConnection: y = fa,
    onReconnectEnd: x,
    updateConnection: g,
    getTransform: w,
    getFromHandle: C,
    autoPanSpeed: N,
    dragThreshold: M = 1,
    handleDomNode: b,
  },
) {
  const S = Js(e.target);
  let I = 0,
    E;
  const { x: k, y: O } = we(e),
    _ = da(s, b),
    T = a == null ? void 0 : a.getBoundingClientRect();
  let A = !1;
  if (!T || !_) return;
  const D = ua(i, _, r, l, t);
  if (!D) return;
  let V = we(e, T),
    $ = !1,
    B = null,
    q = !1,
    F = null;
  function P() {
    if (!u || !T) return;
    const [Q, U] = Yr(V, T, N);
    (f({ x: Q, y: U }), (I = requestAnimationFrame(P)));
  }
  const L = { ...D, nodeId: i, type: _, position: D.position },
    j = l.get(i);
  let G = {
    inProgress: !0,
    isValid: null,
    from: Ke(j, L, Z.Left, !0),
    fromHandle: L,
    fromPosition: L.position,
    fromNode: j,
    to: V,
    toHandle: null,
    toPosition: Ai[L.position],
    toNode: null,
    pointer: V,
  };
  function H() {
    ((A = !0), g(G), p == null || p(e, { nodeId: i, handleId: r, handleType: _ }));
  }
  M === 0 && H();
  function Y(Q) {
    if (!A) {
      const { x: se, y: he } = we(Q),
        Ee = se - k,
        Se = he - O;
      if (!(Ee * Ee + Se * Se > M * M)) return;
      H();
    }
    if (!C() || !L) {
      K(Q);
      return;
    }
    const U = w();
    ((V = we(Q, T)), (E = Lh(ut(V, U, !1, [1, 1]), n, l, L)), $ || (P(), ($ = !0)));
    const X = ha(Q, {
      handle: E,
      connectionMode: t,
      fromNodeId: i,
      fromHandleId: r,
      fromType: o ? "target" : "source",
      isValidConnection: y,
      doc: S,
      lib: d,
      flowId: c,
      nodeLookup: l,
    });
    ((F = X.handleDomNode), (B = X.connection), (q = $h(!!E, X.isValid)));
    const J = l.get(i),
      te = J ? Ke(J, L, Z.Left, !0) : G.from,
      ne = {
        ...G,
        from: te,
        isValid: q,
        to: X.toHandle && q ? ct({ x: X.toHandle.x, y: X.toHandle.y }, U) : V,
        toHandle: X.toHandle,
        toPosition: q && X.toHandle ? X.toHandle.position : Ai[L.position],
        toNode: X.toHandle ? l.get(X.toHandle.nodeId) : null,
        pointer: V,
      };
    (g(ne), (G = ne));
  }
  function K(Q) {
    if (!("touches" in Q && Q.touches.length > 0)) {
      if (A) {
        (E || F) && B && q && (v == null || v(B));
        const { inProgress: U, ...X } = G,
          J = { ...X, toPosition: G.toHandle ? G.toPosition : null };
        (m == null || m(Q, J), s && (x == null || x(Q, J)));
      }
      (h(),
        cancelAnimationFrame(I),
        ($ = !1),
        (q = !1),
        (B = null),
        (F = null),
        S.removeEventListener("mousemove", Y),
        S.removeEventListener("mouseup", K),
        S.removeEventListener("touchmove", Y),
        S.removeEventListener("touchend", K));
    }
  }
  (S.addEventListener("mousemove", Y),
    S.addEventListener("mouseup", K),
    S.addEventListener("touchmove", Y),
    S.addEventListener("touchend", K));
}
function ha(
  e,
  {
    handle: t,
    connectionMode: n,
    fromNodeId: r,
    fromHandleId: i,
    fromType: s,
    doc: o,
    lib: a,
    flowId: l,
    isValidConnection: d = fa,
    nodeLookup: u,
  },
) {
  const c = s === "target",
    f = t
      ? o.querySelector(
          `.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`,
        )
      : null,
    { x: h, y: p } = we(e),
    v = o.elementFromPoint(h, p),
    m = v != null && v.classList.contains(`${a}-flow__handle`) ? v : f,
    y = { handleDomNode: m, isValid: !1, connection: null, toHandle: null };
  if (m) {
    const x = da(void 0, m),
      g = m.getAttribute("data-nodeid"),
      w = m.getAttribute("data-handleid"),
      C = m.classList.contains("connectable"),
      N = m.classList.contains("connectableend");
    if (!g || !x) return y;
    const M = {
      source: c ? g : r,
      sourceHandle: c ? w : i,
      target: c ? r : g,
      targetHandle: c ? i : w,
    };
    y.connection = M;
    const S =
      C &&
      N &&
      (n === ot.Strict ? (c && x === "source") || (!c && x === "target") : g !== r || w !== i);
    ((y.isValid = S && d(M)), (y.toHandle = ua(g, x, w, u, n, !0)));
  }
  return y;
}
const $r = { onPointerDown: Dh, isValid: ha };
function Oh({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const i = de(e);
  function s({
    translateExtent: a,
    width: l,
    height: d,
    zoomStep: u = 1,
    pannable: c = !0,
    zoomable: f = !0,
    inversePan: h = !1,
  }) {
    const p = (g) => {
      if (g.sourceEvent.type !== "wheel" || !t) return;
      const w = n(),
        C = g.sourceEvent.ctrlKey && Nt() ? 10 : 1,
        N =
          -g.sourceEvent.deltaY *
          (g.sourceEvent.deltaMode === 1 ? 0.05 : g.sourceEvent.deltaMode ? 1 : 0.002) *
          u,
        M = w[2] * Math.pow(2, N * C);
      t.scaleTo(M);
    };
    let v = [0, 0];
    const m = (g) => {
        (g.sourceEvent.type === "mousedown" || g.sourceEvent.type === "touchstart") &&
          (v = [
            g.sourceEvent.clientX ?? g.sourceEvent.touches[0].clientX,
            g.sourceEvent.clientY ?? g.sourceEvent.touches[0].clientY,
          ]);
      },
      y = (g) => {
        const w = n();
        if ((g.sourceEvent.type !== "mousemove" && g.sourceEvent.type !== "touchmove") || !t)
          return;
        const C = [
            g.sourceEvent.clientX ?? g.sourceEvent.touches[0].clientX,
            g.sourceEvent.clientY ?? g.sourceEvent.touches[0].clientY,
          ],
          N = [C[0] - v[0], C[1] - v[1]];
        v = C;
        const M = r() * Math.max(w[2], Math.log(w[2])) * (h ? -1 : 1),
          b = { x: w[0] - N[0] * M, y: w[1] - N[1] * M },
          S = [
            [0, 0],
            [l, d],
          ];
        t.setViewportConstrained({ x: b.x, y: b.y, zoom: w[2] }, S, a);
      },
      x = Vs()
        .on("start", m)
        .on("zoom", c ? y : null)
        .on("zoom.wheel", f ? p : null);
    i.call(x, {});
  }
  function o() {
    i.on("zoom", null);
  }
  return { update: s, destroy: o, pointer: me };
}
const pn = (e) => ({ x: e.x, y: e.y, zoom: e.k }),
  Cn = ({ x: e, y: t, zoom: n }) => dn.translate(e, t).scale(n),
  Qe = (e, t) => e.target.closest(`.${t}`),
  pa = (e, t) => t === 2 && Array.isArray(e) && e.includes(2),
  jh = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2,
  kn = (e, t = 0, n = jh, r = () => {}) => {
    const i = typeof t == "number" && t > 0;
    return (i || r(), i ? e.transition().duration(t).ease(n).on("end", r) : e);
  },
  ga = (e) => {
    const t = e.ctrlKey && Nt() ? 10 : 1;
    return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * t;
  };
function Hh({
  zoomPanValues: e,
  noWheelClassName: t,
  d3Selection: n,
  d3Zoom: r,
  panOnScrollMode: i,
  panOnScrollSpeed: s,
  zoomOnPinch: o,
  onPanZoomStart: a,
  onPanZoom: l,
  onPanZoomEnd: d,
}) {
  return (u) => {
    if (Qe(u, t)) return (u.ctrlKey && u.preventDefault(), !1);
    (u.preventDefault(), u.stopImmediatePropagation());
    const c = n.property("__zoom").k || 1;
    if (u.ctrlKey && o) {
      const m = me(u),
        y = ga(u),
        x = c * Math.pow(2, y);
      r.scaleTo(n, x, m, u);
      return;
    }
    const f = u.deltaMode === 1 ? 20 : 1;
    let h = i === We.Vertical ? 0 : u.deltaX * f,
      p = i === We.Horizontal ? 0 : u.deltaY * f;
    (!Nt() && u.shiftKey && i !== We.Vertical && ((h = u.deltaY * f), (p = 0)),
      r.translateBy(n, -(h / c) * s, -(p / c) * s, { internal: !0 }));
    const v = pn(n.property("__zoom"));
    (clearTimeout(e.panScrollTimeout),
      e.isPanScrolling
        ? (l == null || l(u, v),
          (e.panScrollTimeout = setTimeout(() => {
            (d == null || d(u, v), (e.isPanScrolling = !1));
          }, 150)))
        : ((e.isPanScrolling = !0), a == null || a(u, v)));
  };
}
function zh({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function (r, i) {
    const s = r.type === "wheel",
      o = !t && s && !r.ctrlKey,
      a = Qe(r, e);
    if ((r.ctrlKey && s && a && r.preventDefault(), o || a)) return null;
    (r.preventDefault(), n.call(this, r, i));
  };
}
function Vh({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var s, o, a;
    if ((s = r.sourceEvent) != null && s.internal) return;
    const i = pn(r.transform);
    ((e.mouseButton = ((o = r.sourceEvent) == null ? void 0 : o.button) || 0),
      (e.isZoomingOrPanning = !0),
      (e.prevViewport = i),
      ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0),
      n && (n == null || n(r.sourceEvent, i)));
  };
}
function Fh({
  zoomPanValues: e,
  panOnDrag: t,
  onPaneContextMenu: n,
  onTransformChange: r,
  onPanZoom: i,
}) {
  return (s) => {
    var o, a;
    ((e.usedRightMouseButton = !!(n && pa(t, e.mouseButton ?? 0))),
      ((o = s.sourceEvent) != null && o.sync) || r([s.transform.x, s.transform.y, s.transform.k]),
      i &&
        !((a = s.sourceEvent) != null && a.internal) &&
        (i == null || i(s.sourceEvent, pn(s.transform))));
  };
}
function Bh({
  zoomPanValues: e,
  panOnDrag: t,
  panOnScroll: n,
  onDraggingChange: r,
  onPanZoomEnd: i,
  onPaneContextMenu: s,
}) {
  return (o) => {
    var a;
    if (
      !((a = o.sourceEvent) != null && a.internal) &&
      ((e.isZoomingOrPanning = !1),
      s &&
        pa(t, e.mouseButton ?? 0) &&
        !e.usedRightMouseButton &&
        o.sourceEvent &&
        s(o.sourceEvent),
      (e.usedRightMouseButton = !1),
      r(!1),
      i)
    ) {
      const l = pn(o.transform);
      ((e.prevViewport = l),
        clearTimeout(e.timerId),
        (e.timerId = setTimeout(
          () => {
            i == null || i(o.sourceEvent, l);
          },
          n ? 150 : 0,
        )));
    }
  };
}
function qh({
  zoomActivationKeyPressed: e,
  zoomOnScroll: t,
  zoomOnPinch: n,
  panOnDrag: r,
  panOnScroll: i,
  zoomOnDoubleClick: s,
  userSelectionActive: o,
  noWheelClassName: a,
  noPanClassName: l,
  lib: d,
  connectionInProgress: u,
}) {
  return (c) => {
    var m;
    const f = e || t,
      h = n && c.ctrlKey,
      p = c.type === "wheel";
    if (
      c.button === 1 &&
      c.type === "mousedown" &&
      (Qe(c, `${d}-flow__node`) || Qe(c, `${d}-flow__edge`))
    )
      return !0;
    if (
      (!r && !f && !i && !s && !n) ||
      o ||
      (u && !p) ||
      (Qe(c, a) && p) ||
      (Qe(c, l) && (!p || (i && p && !e))) ||
      (!n && c.ctrlKey && p)
    )
      return !1;
    if (!n && c.type === "touchstart" && ((m = c.touches) == null ? void 0 : m.length) > 1)
      return (c.preventDefault(), !1);
    if (
      (!f && !i && !h && p) ||
      (!r && (c.type === "mousedown" || c.type === "touchstart")) ||
      (Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
    )
      return !1;
    const v = (Array.isArray(r) && r.includes(c.button)) || !c.button || c.button <= 1;
    return (!c.ctrlKey || p) && v;
  };
}
function Wh({
  domNode: e,
  minZoom: t,
  maxZoom: n,
  translateExtent: r,
  viewport: i,
  onPanZoom: s,
  onPanZoomStart: o,
  onPanZoomEnd: a,
  onDraggingChange: l,
}) {
  const d = {
      isZoomingOrPanning: !1,
      usedRightMouseButton: !1,
      prevViewport: {},
      mouseButton: 0,
      timerId: void 0,
      panScrollTimeout: void 0,
      isPanScrolling: !1,
    },
    u = e.getBoundingClientRect(),
    c = Vs().scaleExtent([t, n]).translateExtent(r),
    f = de(e).call(c);
  x(
    { x: i.x, y: i.y, zoom: st(i.zoom, t, n) },
    [
      [0, 0],
      [u.width, u.height],
    ],
    r,
  );
  const h = f.on("wheel.zoom"),
    p = f.on("dblclick.zoom");
  c.wheelDelta(ga);
  async function v(E, k) {
    return f
      ? new Promise((O) => {
          c == null ||
            c.interpolate((k == null ? void 0 : k.interpolate) === "linear" ? mt : Bt).transform(
              kn(f, k == null ? void 0 : k.duration, k == null ? void 0 : k.ease, () => O(!0)),
              E,
            );
        })
      : !1;
  }
  function m({
    noWheelClassName: E,
    noPanClassName: k,
    onPaneContextMenu: O,
    userSelectionActive: _,
    panOnScroll: T,
    panOnDrag: A,
    panOnScrollMode: D,
    panOnScrollSpeed: V,
    preventScrolling: $,
    zoomOnPinch: B,
    zoomOnScroll: q,
    zoomOnDoubleClick: F,
    zoomActivationKeyPressed: P,
    lib: L,
    onTransformChange: j,
    connectionInProgress: W,
    paneClickDistance: G,
    selectionOnDrag: H,
  }) {
    _ && !d.isZoomingOrPanning && y();
    const Y = T && !P && !_;
    c.clickDistance(H ? 1 / 0 : !xe(G) || G < 0 ? 0 : G);
    const K = Y
      ? Hh({
          zoomPanValues: d,
          noWheelClassName: E,
          d3Selection: f,
          d3Zoom: c,
          panOnScrollMode: D,
          panOnScrollSpeed: V,
          zoomOnPinch: B,
          onPanZoomStart: o,
          onPanZoom: s,
          onPanZoomEnd: a,
        })
      : zh({ noWheelClassName: E, preventScrolling: $, d3ZoomHandler: h });
    f.on("wheel.zoom", K, { passive: !1 });
    const Q = Vh({ zoomPanValues: d, onDraggingChange: l, onPanZoomStart: o });
    c.on("start", Q);
    const U = Fh({
      zoomPanValues: d,
      panOnDrag: A,
      onPaneContextMenu: !!O,
      onPanZoom: s,
      onTransformChange: j,
    });
    c.on("zoom", U);
    const X = Bh({
      zoomPanValues: d,
      panOnDrag: A,
      panOnScroll: T,
      onPaneContextMenu: O,
      onPanZoomEnd: a,
      onDraggingChange: l,
    });
    c.on("end", X);
    const J = qh({
      zoomActivationKeyPressed: P,
      panOnDrag: A,
      zoomOnScroll: q,
      panOnScroll: T,
      zoomOnDoubleClick: F,
      zoomOnPinch: B,
      userSelectionActive: _,
      noPanClassName: k,
      noWheelClassName: E,
      lib: L,
      connectionInProgress: W,
    });
    (c.filter(J), F ? f.on("dblclick.zoom", p) : f.on("dblclick.zoom", null));
  }
  function y() {
    c.on("zoom", null);
  }
  async function x(E, k, O) {
    const _ = Cn(E),
      T = c == null ? void 0 : c.constrain()(_, k, O);
    return (T && (await v(T)), T);
  }
  async function g(E, k) {
    const O = Cn(E);
    return (await v(O, k), O);
  }
  function w(E) {
    if (f) {
      const k = Cn(E),
        O = f.property("__zoom");
      (O.k !== E.zoom || O.x !== E.x || O.y !== E.y) &&
        (c == null || c.transform(f, k, null, { sync: !0 }));
    }
  }
  function C() {
    const E = f ? zs(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: E.x, y: E.y, zoom: E.k };
  }
  async function N(E, k) {
    return f
      ? new Promise((O) => {
          c == null ||
            c.interpolate((k == null ? void 0 : k.interpolate) === "linear" ? mt : Bt).scaleTo(
              kn(f, k == null ? void 0 : k.duration, k == null ? void 0 : k.ease, () => O(!0)),
              E,
            );
        })
      : !1;
  }
  async function M(E, k) {
    return f
      ? new Promise((O) => {
          c == null ||
            c.interpolate((k == null ? void 0 : k.interpolate) === "linear" ? mt : Bt).scaleBy(
              kn(f, k == null ? void 0 : k.duration, k == null ? void 0 : k.ease, () => O(!0)),
              E,
            );
        })
      : !1;
  }
  function b(E) {
    c == null || c.scaleExtent(E);
  }
  function S(E) {
    c == null || c.translateExtent(E);
  }
  function I(E) {
    const k = !xe(E) || E < 0 ? 0 : E;
    c == null || c.clickDistance(k);
  }
  return {
    update: m,
    destroy: y,
    setViewport: g,
    setViewportConstrained: x,
    getViewport: C,
    scaleTo: N,
    scaleBy: M,
    setScaleExtent: b,
    setTranslateExtent: S,
    syncViewport: w,
    setClickDistance: I,
  };
}
var lt;
(function (e) {
  ((e.Line = "line"), (e.Handle = "handle"));
})(lt || (lt = {}));
function Yh({ width: e, prevWidth: t, height: n, prevHeight: r, affectsX: i, affectsY: s }) {
  const o = e - t,
    a = n - r,
    l = [o > 0 ? 1 : o < 0 ? -1 : 0, a > 0 ? 1 : a < 0 ? -1 : 0];
  return (o && i && (l[0] = l[0] * -1), a && s && (l[1] = l[1] * -1), l);
}
function qi(e) {
  const t = e.includes("right") || e.includes("left"),
    n = e.includes("bottom") || e.includes("top"),
    r = e.includes("left"),
    i = e.includes("top");
  return { isHorizontal: t, isVertical: n, affectsX: r, affectsY: i };
}
function $e(e, t) {
  return Math.max(0, t - e);
}
function De(e, t) {
  return Math.max(0, e - t);
}
function Ht(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function Wi(e, t) {
  return e ? !t : t;
}
function Gh(e, t, n, r, i, s, o, a) {
  let { affectsX: l, affectsY: d } = t;
  const { isHorizontal: u, isVertical: c } = t,
    f = u && c,
    { xSnapped: h, ySnapped: p } = n,
    { minWidth: v, maxWidth: m, minHeight: y, maxHeight: x } = r,
    { x: g, y: w, width: C, height: N, aspectRatio: M } = e;
  let b = Math.floor(u ? h - e.pointerX : 0),
    S = Math.floor(c ? p - e.pointerY : 0);
  const I = C + (l ? -b : b),
    E = N + (d ? -S : S),
    k = -s[0] * C,
    O = -s[1] * N;
  let _ = Ht(I, v, m),
    T = Ht(E, y, x);
  if (o) {
    let V = 0,
      $ = 0;
    (l && b < 0 ? (V = $e(g + b + k, o[0][0])) : !l && b > 0 && (V = De(g + I + k, o[1][0])),
      d && S < 0 ? ($ = $e(w + S + O, o[0][1])) : !d && S > 0 && ($ = De(w + E + O, o[1][1])),
      (_ = Math.max(_, V)),
      (T = Math.max(T, $)));
  }
  if (a) {
    let V = 0,
      $ = 0;
    (l && b > 0 ? (V = De(g + b, a[0][0])) : !l && b < 0 && (V = $e(g + I, a[1][0])),
      d && S > 0 ? ($ = De(w + S, a[0][1])) : !d && S < 0 && ($ = $e(w + E, a[1][1])),
      (_ = Math.max(_, V)),
      (T = Math.max(T, $)));
  }
  if (i) {
    if (u) {
      const V = Ht(I / M, y, x) * M;
      if (((_ = Math.max(_, V)), o)) {
        let $ = 0;
        ((!l && !d) || (l && !d && f)
          ? ($ = De(w + O + I / M, o[1][1]) * M)
          : ($ = $e(w + O + (l ? b : -b) / M, o[0][1]) * M),
          (_ = Math.max(_, $)));
      }
      if (a) {
        let $ = 0;
        ((!l && !d) || (l && !d && f)
          ? ($ = $e(w + I / M, a[1][1]) * M)
          : ($ = De(w + (l ? b : -b) / M, a[0][1]) * M),
          (_ = Math.max(_, $)));
      }
    }
    if (c) {
      const V = Ht(E * M, v, m) / M;
      if (((T = Math.max(T, V)), o)) {
        let $ = 0;
        ((!l && !d) || (d && !l && f)
          ? ($ = De(g + E * M + k, o[1][0]) / M)
          : ($ = $e(g + (d ? S : -S) * M + k, o[0][0]) / M),
          (T = Math.max(T, $)));
      }
      if (a) {
        let $ = 0;
        ((!l && !d) || (d && !l && f)
          ? ($ = $e(g + E * M, a[1][0]) / M)
          : ($ = De(g + (d ? S : -S) * M, a[0][0]) / M),
          (T = Math.max(T, $)));
      }
    }
  }
  ((S = S + (S < 0 ? T : -T)),
    (b = b + (b < 0 ? _ : -_)),
    i &&
      (f
        ? I > E * M
          ? (S = (Wi(l, d) ? -b : b) / M)
          : (b = (Wi(l, d) ? -S : S) * M)
        : u
          ? ((S = b / M), (d = l))
          : ((b = S * M), (l = d))));
  const A = l ? g + b : g,
    D = d ? w + S : w;
  return {
    width: C + (l ? -b : b),
    height: N + (d ? -S : S),
    x: s[0] * b * (l ? -1 : 1) + A,
    y: s[1] * S * (d ? -1 : 1) + D,
  };
}
const ma = { width: 0, height: 0, x: 0, y: 0 },
  Xh = { ...ma, pointerX: 0, pointerY: 0, aspectRatio: 1 };
function Uh(e, t, n) {
  const r = t.position.x + e.position.x,
    i = t.position.y + e.position.y,
    s = e.measured.width ?? 0,
    o = e.measured.height ?? 0,
    a = n[0] * s,
    l = n[1] * o;
  return [
    [r - a, i - l],
    [r + s - a, i + o - l],
  ];
}
function Kh({ domNode: e, nodeId: t, getStoreItems: n, onChange: r, onEnd: i }) {
  const s = de(e);
  let o = {
    controlDirection: qi("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE,
    },
    resizeDirection: void 0,
    keepAspectRatio: !1,
  };
  function a({
    controlPosition: d,
    boundaries: u,
    keepAspectRatio: c,
    resizeDirection: f,
    onResizeStart: h,
    onResize: p,
    onResizeEnd: v,
    shouldResize: m,
  }) {
    let y = { ...ma },
      x = { ...Xh };
    o = { boundaries: u, resizeDirection: f, keepAspectRatio: c, controlDirection: qi(d) };
    let g,
      w = null,
      C = [],
      N,
      M,
      b,
      S = !1;
    const I = Cs()
      .on("start", (E) => {
        const {
          nodeLookup: k,
          transform: O,
          snapGrid: _,
          snapToGrid: T,
          nodeOrigin: A,
          paneDomNode: D,
        } = n();
        if (((g = k.get(t)), !g)) return;
        w = (D == null ? void 0 : D.getBoundingClientRect()) ?? null;
        const { xSnapped: V, ySnapped: $ } = yt(E.sourceEvent, {
          transform: O,
          snapGrid: _,
          snapToGrid: T,
          containerBounds: w,
        });
        ((y = {
          width: g.measured.width ?? 0,
          height: g.measured.height ?? 0,
          x: g.position.x ?? 0,
          y: g.position.y ?? 0,
        }),
          (x = { ...y, pointerX: V, pointerY: $, aspectRatio: y.width / y.height }),
          (N = void 0),
          (M = Ue(g.extent) ? g.extent : void 0),
          g.parentId && (g.extent === "parent" || g.expandParent) && (N = k.get(g.parentId)),
          N &&
            g.extent === "parent" &&
            (M = [
              [0, 0],
              [N.measured.width, N.measured.height],
            ]),
          (C = []),
          (b = void 0));
        for (const [B, q] of k)
          if (
            q.parentId === t &&
            (C.push({ id: B, position: { ...q.position }, extent: q.extent }),
            q.extent === "parent" || q.expandParent)
          ) {
            const F = Uh(q, g, q.origin ?? A);
            b
              ? (b = [
                  [Math.min(F[0][0], b[0][0]), Math.min(F[0][1], b[0][1])],
                  [Math.max(F[1][0], b[1][0]), Math.max(F[1][1], b[1][1])],
                ])
              : (b = F);
          }
        h == null || h(E, { ...y });
      })
      .on("drag", (E) => {
        const { transform: k, snapGrid: O, snapToGrid: _, nodeOrigin: T } = n(),
          A = yt(E.sourceEvent, { transform: k, snapGrid: O, snapToGrid: _, containerBounds: w }),
          D = [];
        if (!g) return;
        const { x: V, y: $, width: B, height: q } = y,
          F = {},
          P = g.origin ?? T,
          {
            width: L,
            height: j,
            x: W,
            y: G,
          } = Gh(x, o.controlDirection, A, o.boundaries, o.keepAspectRatio, P, M, b),
          H = L !== B,
          Y = j !== q,
          K = W !== V && H,
          Q = G !== $ && Y;
        if (!K && !Q && !H && !Y) return;
        if (
          (K || Q || P[0] === 1 || P[1] === 1) &&
          ((F.x = K ? W : y.x), (F.y = Q ? G : y.y), (y.x = F.x), (y.y = F.y), C.length > 0)
        ) {
          const te = W - V,
            ne = G - $;
          for (const se of C)
            ((se.position = {
              x: se.position.x - te + P[0] * (L - B),
              y: se.position.y - ne + P[1] * (j - q),
            }),
              D.push(se));
        }
        if (
          ((H || Y) &&
            ((F.width =
              H && (!o.resizeDirection || o.resizeDirection === "horizontal") ? L : y.width),
            (F.height =
              Y && (!o.resizeDirection || o.resizeDirection === "vertical") ? j : y.height),
            (y.width = F.width),
            (y.height = F.height)),
          N && g.expandParent)
        ) {
          const te = P[0] * (F.width ?? 0);
          F.x && F.x < te && ((y.x = te), (x.x = x.x - (F.x - te)));
          const ne = P[1] * (F.height ?? 0);
          F.y && F.y < ne && ((y.y = ne), (x.y = x.y - (F.y - ne)));
        }
        const U = Yh({
            width: y.width,
            prevWidth: B,
            height: y.height,
            prevHeight: q,
            affectsX: o.controlDirection.affectsX,
            affectsY: o.controlDirection.affectsY,
          }),
          X = { ...y, direction: U };
        (m == null ? void 0 : m(E, X)) !== !1 && ((S = !0), p == null || p(E, X), r(F, D));
      })
      .on("end", (E) => {
        S && (v == null || v(E, { ...y }), i == null || i({ ...y }), (S = !1));
      });
    s.call(I);
  }
  function l() {
    s.on(".drag", null);
  }
  return { update: a, destroy: l };
}
const Zh = {},
  Yi = (e) => {
    let t;
    const n = new Set(),
      r = (u, c) => {
        const f = typeof u == "function" ? u(t) : u;
        if (!Object.is(f, t)) {
          const h = t;
          ((t = (c ?? (typeof f != "object" || f === null)) ? f : Object.assign({}, t, f)),
            n.forEach((p) => p(t, h)));
        }
      },
      i = () => t,
      l = {
        setState: r,
        getState: i,
        getInitialState: () => d,
        subscribe: (u) => (n.add(u), () => n.delete(u)),
        destroy: () => {
          ((Zh ? "production" : void 0) !== "production" &&
            console.warn(
              "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.",
            ),
            n.clear());
        },
      },
      d = (t = e(r, i, l));
    return l;
  },
  Qh = (e) => (e ? Yi(e) : Yi),
  { useDebugValue: Jh } = ll,
  { useSyncExternalStoreWithSelector: ep } = cl,
  tp = (e) => e;
function ya(e, t = tp, n) {
  const r = ep(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
  return (Jh(r), r);
}
const Gi = (e, t) => {
    const n = Qh(e),
      r = (i, s = t) => ya(n, i, s);
    return (Object.assign(r, n), r);
  },
  np = (e, t) => (e ? Gi(e, t) : Gi);
function ie(e, t) {
  if (Object.is(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [r, i] of e) if (!Object.is(i, t.get(r))) return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const r of e) if (!t.has(r)) return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length) return !1;
  for (const r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r])) return !1;
  return !0;
}
const gn = z.createContext(null),
  rp = gn.Provider,
  xa = ve.error001("react");
function ee(e, t) {
  const n = z.useContext(gn);
  if (n === null) throw new Error(xa);
  return ya(n, e, t);
}
function oe() {
  const e = z.useContext(gn);
  if (e === null) throw new Error(xa);
  return z.useMemo(
    () => ({ getState: e.getState, setState: e.setState, subscribe: e.subscribe }),
    [e],
  );
}
const Xi = { display: "none" },
  ip = {
    position: "absolute",
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0px, 0px, 0px, 0px)",
    clipPath: "inset(100%)",
  },
  wa = "react-flow__node-desc",
  va = "react-flow__edge-desc",
  op = "react-flow__aria-live",
  sp = (e) => e.ariaLiveMessage,
  ap = (e) => e.ariaLabelConfig;
function cp({ rfId: e }) {
  const t = ee(sp);
  return R.jsx("div", {
    id: `${op}-${e}`,
    "aria-live": "assertive",
    "aria-atomic": "true",
    style: ip,
    children: t,
  });
}
function lp({ rfId: e, disableKeyboardA11y: t }) {
  const n = ee(ap);
  return R.jsxs(R.Fragment, {
    children: [
      R.jsx("div", {
        id: `${wa}-${e}`,
        style: Xi,
        children: t
          ? n["node.a11yDescription.default"]
          : n["node.a11yDescription.keyboardDisabled"],
      }),
      R.jsx("div", { id: `${va}-${e}`, style: Xi, children: n["edge.a11yDescription.default"] }),
      !t && R.jsx(cp, { rfId: e }),
    ],
  });
}
const mn = z.forwardRef(
  ({ position: e = "top-left", children: t, className: n, style: r, ...i }, s) => {
    const o = `${e}`.split("-");
    return R.jsx("div", {
      className: le(["react-flow__panel", n, ...o]),
      style: r,
      ref: s,
      ...i,
      children: t,
    });
  },
);
mn.displayName = "Panel";
function up({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution
    ? null
    : R.jsx(mn, {
        position: t,
        className: "react-flow__attribution",
        "data-message":
          "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev",
        children: R.jsx("a", {
          href: "https://reactflow.dev",
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "React Flow attribution",
          children: "React Flow",
        }),
      });
}
const dp = (e) => {
    const t = [],
      n = [];
    for (const [, r] of e.nodeLookup) r.selected && t.push(r.internals.userNode);
    for (const [, r] of e.edgeLookup) r.selected && n.push(r);
    return { selectedNodes: t, selectedEdges: n };
  },
  zt = (e) => e.id;
function fp(e, t) {
  return (
    ie(e.selectedNodes.map(zt), t.selectedNodes.map(zt)) &&
    ie(e.selectedEdges.map(zt), t.selectedEdges.map(zt))
  );
}
function hp({ onSelectionChange: e }) {
  const t = oe(),
    { selectedNodes: n, selectedEdges: r } = ee(dp, fp);
  return (
    z.useEffect(() => {
      const i = { nodes: n, edges: r };
      (e == null || e(i), t.getState().onSelectionChangeHandlers.forEach((s) => s(i)));
    }, [n, r, e]),
    null
  );
}
const pp = (e) => !!e.onSelectionChangeHandlers;
function gp({ onSelectionChange: e }) {
  const t = ee(pp);
  return e || t ? R.jsx(hp, { onSelectionChange: e }) : null;
}
const ba = [0, 0],
  mp = { x: 0, y: 0, zoom: 1 },
  yp = [
    "nodes",
    "edges",
    "defaultNodes",
    "defaultEdges",
    "onConnect",
    "onConnectStart",
    "onConnectEnd",
    "onClickConnectStart",
    "onClickConnectEnd",
    "nodesDraggable",
    "autoPanOnNodeFocus",
    "nodesConnectable",
    "nodesFocusable",
    "edgesFocusable",
    "edgesReconnectable",
    "elevateNodesOnSelect",
    "elevateEdgesOnSelect",
    "minZoom",
    "maxZoom",
    "nodeExtent",
    "onNodesChange",
    "onEdgesChange",
    "elementsSelectable",
    "connectionMode",
    "snapGrid",
    "snapToGrid",
    "translateExtent",
    "connectOnClick",
    "defaultEdgeOptions",
    "fitView",
    "fitViewOptions",
    "onNodesDelete",
    "onEdgesDelete",
    "onDelete",
    "onNodeDrag",
    "onNodeDragStart",
    "onNodeDragStop",
    "onSelectionDrag",
    "onSelectionDragStart",
    "onSelectionDragStop",
    "onMoveStart",
    "onMove",
    "onMoveEnd",
    "noPanClassName",
    "nodeOrigin",
    "autoPanOnConnect",
    "autoPanOnNodeDrag",
    "onError",
    "connectionRadius",
    "isValidConnection",
    "selectNodesOnDrag",
    "nodeDragThreshold",
    "connectionDragThreshold",
    "onBeforeDelete",
    "debug",
    "autoPanSpeed",
    "ariaLabelConfig",
    "zIndexMode",
  ],
  Ui = [...yp, "rfId"],
  xp = (e) => ({
    setNodes: e.setNodes,
    setEdges: e.setEdges,
    setMinZoom: e.setMinZoom,
    setMaxZoom: e.setMaxZoom,
    setTranslateExtent: e.setTranslateExtent,
    setNodeExtent: e.setNodeExtent,
    reset: e.reset,
    setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
  }),
  Ki = {
    translateExtent: _t,
    nodeOrigin: ba,
    minZoom: 0.5,
    maxZoom: 2,
    elementsSelectable: !0,
    noPanClassName: "nopan",
    rfId: "1",
  };
function wp(e) {
  const {
      setNodes: t,
      setEdges: n,
      setMinZoom: r,
      setMaxZoom: i,
      setTranslateExtent: s,
      setNodeExtent: o,
      reset: a,
      setDefaultNodesAndEdges: l,
    } = ee(xp, ie),
    d = oe();
  z.useEffect(
    () => (
      l(e.defaultNodes, e.defaultEdges),
      () => {
        ((u.current = Ki), a());
      }
    ),
    [],
  );
  const u = z.useRef(Ki);
  return (
    z.useEffect(
      () => {
        for (const c of Ui) {
          const f = e[c],
            h = u.current[c];
          f !== h &&
            (typeof e[c] > "u" ||
              (c === "nodes"
                ? t(f)
                : c === "edges"
                  ? n(f)
                  : c === "minZoom"
                    ? r(f)
                    : c === "maxZoom"
                      ? i(f)
                      : c === "translateExtent"
                        ? s(f)
                        : c === "nodeExtent"
                          ? o(f)
                          : c === "ariaLabelConfig"
                            ? d.setState({ ariaLabelConfig: lh(f) })
                            : c === "fitView"
                              ? d.setState({ fitViewQueued: f })
                              : c === "fitViewOptions"
                                ? d.setState({ fitViewOptions: f })
                                : d.setState({ [c]: f })));
        }
        u.current = e;
      },
      Ui.map((c) => e[c]),
    ),
    null
  );
}
function Zi() {
  return typeof window > "u" || !window.matchMedia
    ? null
    : window.matchMedia("(prefers-color-scheme: dark)");
}
function vp(e) {
  var r;
  const [t, n] = z.useState(e === "system" ? null : e);
  return (
    z.useEffect(() => {
      if (e !== "system") {
        n(e);
        return;
      }
      const i = Zi(),
        s = () => n(i != null && i.matches ? "dark" : "light");
      return (
        s(),
        i == null || i.addEventListener("change", s),
        () => {
          i == null || i.removeEventListener("change", s);
        }
      );
    }, [e]),
    t !== null ? t : (r = Zi()) != null && r.matches ? "dark" : "light"
  );
}
const Qi = typeof document < "u" ? document : null;
function Ct(e = null, t = { target: Qi, actInsideInputWithModifier: !0 }) {
  const [n, r] = z.useState(!1),
    i = z.useRef(!1),
    s = z.useRef(new Set([])),
    [o, a] = z.useMemo(() => {
      if (e !== null) {
        const d = (Array.isArray(e) ? e : [e])
            .filter((c) => typeof c == "string")
            .map((c) =>
              c
                .replace(
                  "+",
                  `
`,
                )
                .replace(
                  `

`,
                  `
+`,
                ).split(`
`),
            ),
          u = d.reduce((c, f) => c.concat(...f), []);
        return [d, u];
      }
      return [[], []];
    }, [e]);
  return (
    z.useEffect(() => {
      const l = (t == null ? void 0 : t.target) ?? Qi,
        d = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
      if (e !== null) {
        const u = (h) => {
            var m, y;
            if (
              ((i.current = h.ctrlKey || h.metaKey || h.shiftKey || h.altKey),
              (!i.current || (i.current && !d)) && ea(h))
            )
              return !1;
            const v = eo(h.code, a);
            if ((s.current.add(h[v]), Ji(o, s.current, !1))) {
              const x =
                  ((y = (m = h.composedPath) == null ? void 0 : m.call(h)) == null
                    ? void 0
                    : y[0]) || h.target,
                g =
                  (x == null ? void 0 : x.nodeName) === "BUTTON" ||
                  (x == null ? void 0 : x.nodeName) === "A";
              (t.preventDefault !== !1 && (i.current || !g) && h.preventDefault(), r(!0));
            }
          },
          c = (h) => {
            const p = eo(h.code, a);
            (Ji(o, s.current, !0) ? (r(!1), s.current.clear()) : s.current.delete(h[p]),
              h.key === "Meta" && s.current.clear(),
              (i.current = !1));
          },
          f = () => {
            (s.current.clear(), r(!1));
          };
        return (
          l == null || l.addEventListener("keydown", u),
          l == null || l.addEventListener("keyup", c),
          window.addEventListener("blur", f),
          window.addEventListener("contextmenu", f),
          () => {
            (l == null || l.removeEventListener("keydown", u),
              l == null || l.removeEventListener("keyup", c),
              window.removeEventListener("blur", f),
              window.removeEventListener("contextmenu", f));
          }
        );
      }
    }, [e, r]),
    n
  );
}
function Ji(e, t, n) {
  return e.filter((r) => n || r.length === t.size).some((r) => r.every((i) => t.has(i)));
}
function eo(e, t) {
  return t.includes(e) ? "code" : "key";
}
const bp = () => {
  const e = oe();
  return z.useMemo(
    () => ({
      zoomIn: async (t) => {
        const { panZoom: n } = e.getState();
        return n ? n.scaleBy(1.2, t) : !1;
      },
      zoomOut: async (t) => {
        const { panZoom: n } = e.getState();
        return n ? n.scaleBy(1 / 1.2, t) : !1;
      },
      zoomTo: async (t, n) => {
        const { panZoom: r } = e.getState();
        return r ? r.scaleTo(t, n) : !1;
      },
      getZoom: () => e.getState().transform[2],
      setViewport: async (t, n) => {
        const {
          transform: [r, i, s],
          panZoom: o,
        } = e.getState();
        return o
          ? (await o.setViewport({ x: t.x ?? r, y: t.y ?? i, zoom: t.zoom ?? s }, n), !0)
          : !1;
      },
      getViewport: () => {
        const [t, n, r] = e.getState().transform;
        return { x: t, y: n, zoom: r };
      },
      setCenter: async (t, n, r) => e.getState().setCenter(t, n, r),
      fitBounds: async (t, n) => {
        const { width: r, height: i, minZoom: s, maxZoom: o, panZoom: a } = e.getState(),
          l = Gr(t, r, i, s, o, (n == null ? void 0 : n.padding) ?? 0.1);
        return a
          ? (await a.setViewport(l, {
              duration: n == null ? void 0 : n.duration,
              ease: n == null ? void 0 : n.ease,
              interpolate: n == null ? void 0 : n.interpolate,
            }),
            !0)
          : !1;
      },
      screenToFlowPosition: (t, n = {}) => {
        const { transform: r, snapGrid: i, snapToGrid: s, domNode: o } = e.getState();
        if (!o) return t;
        const { x: a, y: l } = o.getBoundingClientRect(),
          d = { x: t.x - a, y: t.y - l },
          u = n.snapGrid ?? i,
          c = n.snapToGrid ?? s;
        return ut(d, r, c, u);
      },
      flowToScreenPosition: (t) => {
        const { transform: n, domNode: r } = e.getState();
        if (!r) return t;
        const { x: i, y: s } = r.getBoundingClientRect(),
          o = ct(t, n);
        return { x: o.x + i, y: o.y + s };
      },
    }),
    [],
  );
};
function _a(e, t) {
  const n = [],
    r = new Map(),
    i = [];
  for (const s of e)
    if (s.type === "add") {
      i.push(s);
      continue;
    } else if (s.type === "remove" || s.type === "replace") r.set(s.id, [s]);
    else {
      const o = r.get(s.id);
      o ? o.push(s) : r.set(s.id, [s]);
    }
  for (const s of t) {
    const o = r.get(s.id);
    if (!o) {
      n.push(s);
      continue;
    }
    if (o[0].type === "remove") continue;
    if (o[0].type === "replace") {
      n.push({ ...o[0].item });
      continue;
    }
    const a = { ...s };
    for (const l of o) _p(l, a);
    n.push(a);
  }
  return (
    i.length &&
      i.forEach((s) => {
        s.index !== void 0 ? n.splice(s.index, 0, { ...s.item }) : n.push({ ...s.item });
      }),
    n
  );
}
function _p(e, t) {
  switch (e.type) {
    case "select": {
      t.selected = e.selected;
      break;
    }
    case "position": {
      (typeof e.position < "u" && (t.position = e.position),
        typeof e.dragging < "u" && (t.dragging = e.dragging));
      break;
    }
    case "dimensions": {
      (typeof e.dimensions < "u" &&
        ((t.measured = { ...e.dimensions }),
        e.setAttributes &&
          ((e.setAttributes === !0 || e.setAttributes === "width") &&
            (t.width = e.dimensions.width),
          (e.setAttributes === !0 || e.setAttributes === "height") &&
            (t.height = e.dimensions.height))),
        typeof e.resizing == "boolean" && (t.resizing = e.resizing));
      break;
    }
  }
}
function Ep(e, t) {
  return _a(e, t);
}
function Sp(e, t) {
  return _a(e, t);
}
function Fe(e, t) {
  return { id: e, type: "select", selected: t };
}
function Je(e, t = new Set(), n = !1) {
  const r = [];
  for (const [i, s] of e) {
    const o = t.has(i);
    !(s.selected === void 0 && !o) &&
      s.selected !== o &&
      (n && (s.selected = o), r.push(Fe(s.id, o)));
  }
  return r;
}
function to({ items: e = [], lookup: t }) {
  var i;
  const n = [],
    r = new Map(e.map((s) => [s.id, s]));
  for (const [s, o] of e.entries()) {
    const a = t.get(o.id),
      l = ((i = a == null ? void 0 : a.internals) == null ? void 0 : i.userNode) ?? a;
    (l !== void 0 && l !== o && n.push({ id: o.id, item: o, type: "replace" }),
      l === void 0 && n.push({ item: o, type: "add", index: s }));
  }
  for (const [s] of t) r.get(s) === void 0 && n.push({ id: s, type: "remove" });
  return n;
}
function no(e) {
  return { id: e.id, type: "remove" };
}
const Np = Ks();
function Cp(e, t, n = {}) {
  return gh(e, t, { ...n, onError: n.onError ?? Np });
}
const ro = (e) => eh(e),
  kp = (e) => Ys(e);
function Ea(e) {
  return z.forwardRef(e);
}
const Mp = typeof window < "u" ? z.useLayoutEffect : z.useEffect;
function io(e) {
  const [t, n] = z.useState(BigInt(0)),
    [r] = z.useState(() => Ip(() => n((i) => i + BigInt(1))));
  return (
    Mp(() => {
      const i = r.get();
      i.length && (e(i), r.reset());
    }, [t]),
    r
  );
}
function Ip(e) {
  let t = [];
  return {
    get: () => t,
    reset: () => {
      t = [];
    },
    push: (n) => {
      (t.push(n), e());
    },
  };
}
const Sa = z.createContext(null);
function Pp({ children: e }) {
  const t = oe(),
    n = z.useCallback((a) => {
      const {
        nodes: l = [],
        setNodes: d,
        hasDefaultNodes: u,
        onNodesChange: c,
        nodeLookup: f,
        fitViewQueued: h,
        onNodesChangeMiddlewareMap: p,
      } = t.getState();
      let v = l;
      for (const y of a) v = typeof y == "function" ? y(v) : y;
      let m = to({ items: v, lookup: f });
      for (const y of p.values()) m = y(m);
      (u && d(v),
        m.length > 0
          ? c == null || c(m)
          : h &&
            window.requestAnimationFrame(() => {
              const { fitViewQueued: y, nodes: x, setNodes: g } = t.getState();
              y && g(x);
            }));
    }, []),
    r = io(n),
    i = z.useCallback((a) => {
      const {
        edges: l = [],
        setEdges: d,
        hasDefaultEdges: u,
        onEdgesChange: c,
        edgeLookup: f,
      } = t.getState();
      let h = l;
      for (const p of a) h = typeof p == "function" ? p(h) : p;
      u ? d(h) : c && c(to({ items: h, lookup: f }));
    }, []),
    s = io(i),
    o = z.useMemo(() => ({ nodeQueue: r, edgeQueue: s }), []);
  return R.jsx(Sa.Provider, { value: o, children: e });
}
function Ap() {
  const e = z.useContext(Sa);
  if (!e) throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const Tp = (e) => !!e.panZoom;
function ei() {
  const e = bp(),
    t = oe(),
    n = Ap(),
    r = ee(Tp),
    i = z.useMemo(() => {
      const s = (c) => t.getState().nodeLookup.get(c),
        o = (c) => {
          n.nodeQueue.push(c);
        },
        a = (c) => {
          n.edgeQueue.push(c);
        },
        l = (c) => {
          var y, x;
          const { nodeLookup: f, nodeOrigin: h } = t.getState(),
            p = ro(c) ? c : f.get(c.id),
            v = p.parentId ? Qs(p.position, p.measured, p.parentId, f, h) : p.position,
            m = {
              ...p,
              position: v,
              width: ((y = p.measured) == null ? void 0 : y.width) ?? p.width,
              height: ((x = p.measured) == null ? void 0 : x.height) ?? p.height,
            };
          return at(m);
        },
        d = (c, f, h = { replace: !1 }) => {
          o((p) =>
            p.map((v) => {
              if (v.id === c) {
                const m = typeof f == "function" ? f(v) : f;
                return h.replace && ro(m) ? m : { ...v, ...m };
              }
              return v;
            }),
          );
        },
        u = (c, f, h = { replace: !1 }) => {
          a((p) =>
            p.map((v) => {
              if (v.id === c) {
                const m = typeof f == "function" ? f(v) : f;
                return h.replace && kp(m) ? m : { ...v, ...m };
              }
              return v;
            }),
          );
        };
      return {
        getNodes: () => t.getState().nodes.map((c) => ({ ...c })),
        getNode: (c) => {
          var f;
          return (f = s(c)) == null ? void 0 : f.internals.userNode;
        },
        getInternalNode: s,
        getEdges: () => {
          const { edges: c = [] } = t.getState();
          return c.map((f) => ({ ...f }));
        },
        getEdge: (c) => t.getState().edgeLookup.get(c),
        setNodes: o,
        setEdges: a,
        addNodes: (c) => {
          const f = Array.isArray(c) ? c : [c];
          n.nodeQueue.push((h) => [...h, ...f]);
        },
        addEdges: (c) => {
          const f = Array.isArray(c) ? c : [c];
          n.edgeQueue.push((h) => [...h, ...f]);
        },
        toObject: () => {
          const { nodes: c = [], edges: f = [], transform: h } = t.getState(),
            [p, v, m] = h;
          return {
            nodes: c.map((y) => ({ ...y })),
            edges: f.map((y) => ({ ...y })),
            viewport: { x: p, y: v, zoom: m },
          };
        },
        deleteElements: async ({ nodes: c = [], edges: f = [] }) => {
          const {
              nodes: h,
              edges: p,
              onNodesDelete: v,
              onEdgesDelete: m,
              triggerNodeChanges: y,
              triggerEdgeChanges: x,
              onDelete: g,
              onBeforeDelete: w,
            } = t.getState(),
            { nodes: C, edges: N } = await oh({
              nodesToRemove: c,
              edgesToRemove: f,
              nodes: h,
              edges: p,
              onBeforeDelete: w,
            }),
            M = N.length > 0,
            b = C.length > 0;
          if (M) {
            const S = N.map(no);
            (m == null || m(N), x(S));
          }
          if (b) {
            const S = C.map(no);
            (v == null || v(C), y(S));
          }
          return (
            (b || M) && (g == null || g({ nodes: C, edges: N })),
            { deletedNodes: C, deletedEdges: N }
          );
        },
        getIntersectingNodes: (c, f = !0, h) => {
          const p = Ri(c),
            v = p ? c : l(c),
            m = h !== void 0;
          return v
            ? (h || t.getState().nodes).filter((y) => {
                const x = t.getState().nodeLookup.get(y.id);
                if (x && !p && (y.id === c.id || !x.internals.positionAbsolute)) return !1;
                const g = at(m ? y : x),
                  w = St(g, v);
                return (f && w > 0) || w >= g.width * g.height || w >= v.width * v.height;
              })
            : [];
        },
        isNodeIntersecting: (c, f, h = !0) => {
          const v = Ri(c) ? c : l(c);
          if (!v) return !1;
          const m = St(v, f);
          return (h && m > 0) || m >= f.width * f.height || m >= v.width * v.height;
        },
        updateNode: d,
        updateNodeData: (c, f, h = { replace: !1 }) => {
          d(
            c,
            (p) => {
              const v = typeof f == "function" ? f(p) : f;
              return h.replace ? { ...p, data: v } : { ...p, data: { ...p.data, ...v } };
            },
            h,
          );
        },
        updateEdge: u,
        updateEdgeData: (c, f, h = { replace: !1 }) => {
          u(
            c,
            (p) => {
              const v = typeof f == "function" ? f(p) : f;
              return h.replace ? { ...p, data: v } : { ...p, data: { ...p.data, ...v } };
            },
            h,
          );
        },
        getNodesBounds: (c) => {
          const { nodeLookup: f, nodeOrigin: h } = t.getState();
          return th(c, { nodeLookup: f, nodeOrigin: h });
        },
        getHandleConnections: ({ type: c, id: f, nodeId: h }) => {
          var p;
          return Array.from(
            ((p = t.getState().connectionLookup.get(`${h}-${c}${f ? `-${f}` : ""}`)) == null
              ? void 0
              : p.values()) ?? [],
          );
        },
        getNodeConnections: ({ type: c, handleId: f, nodeId: h }) => {
          var p;
          return Array.from(
            ((p = t
              .getState()
              .connectionLookup.get(`${h}${c ? (f ? `-${c}-${f}` : `-${c}`) : ""}`)) == null
              ? void 0
              : p.values()) ?? [],
          );
        },
        fitView: async (c) => {
          const f = t.getState().fitViewResolver ?? ch();
          return (
            t.setState({ fitViewQueued: !0, fitViewOptions: c, fitViewResolver: f }),
            n.nodeQueue.push((h) => [...h]),
            f.promise
          );
        },
      };
    }, []);
  return z.useMemo(() => ({ ...i, ...e, viewportInitialized: r }), [r]);
}
const oo = (e) => e.selected,
  Rp = typeof window < "u" ? window : void 0;
function Lp({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = oe(),
    { deleteElements: r } = ei(),
    i = Ct(e, { actInsideInputWithModifier: !1 }),
    s = Ct(t, { target: Rp });
  (z.useEffect(() => {
    if (i) {
      const { edges: o, nodes: a } = n.getState();
      (r({ nodes: a.filter(oo), edges: o.filter(oo) }), n.setState({ nodesSelectionActive: !1 }));
    }
  }, [i]),
    z.useEffect(() => {
      n.setState({ multiSelectionActive: s });
    }, [s]));
}
function $p(e) {
  const t = oe();
  z.useEffect(() => {
    const n = () => {
      var i, s, o, a;
      if (
        !e.current ||
        !(((s = (i = e.current).checkVisibility) == null ? void 0 : s.call(i)) ?? !0)
      )
        return !1;
      const r = Xr(e.current);
      ((r.height === 0 || r.width === 0) &&
        ((a = (o = t.getState()).onError) == null || a.call(o, "004", ve.error004())),
        t.setState({ width: r.width || 500, height: r.height || 500 }));
    };
    if (e.current) {
      (n(), window.addEventListener("resize", n));
      const r = new ResizeObserver(() => n());
      return (
        r.observe(e.current),
        () => {
          (window.removeEventListener("resize", n), r && e.current && r.unobserve(e.current));
        }
      );
    }
  }, []);
}
const yn = { position: "absolute", width: "100%", height: "100%", top: 0, left: 0 },
  Dp = (e) => ({
    userSelectionActive: e.userSelectionActive,
    lib: e.lib,
    connectionInProgress: e.connection.inProgress,
  });
function Op({
  onPaneContextMenu: e,
  zoomOnScroll: t = !0,
  zoomOnPinch: n = !0,
  panOnScroll: r = !1,
  panOnScrollSpeed: i = 0.5,
  panOnScrollMode: s = We.Free,
  zoomOnDoubleClick: o = !0,
  panOnDrag: a = !0,
  defaultViewport: l,
  translateExtent: d,
  minZoom: u,
  maxZoom: c,
  zoomActivationKeyCode: f,
  preventScrolling: h = !0,
  children: p,
  noWheelClassName: v,
  noPanClassName: m,
  onViewportChange: y,
  isControlledViewport: x,
  paneClickDistance: g,
  selectionOnDrag: w,
}) {
  const C = oe(),
    N = z.useRef(null),
    { userSelectionActive: M, lib: b, connectionInProgress: S } = ee(Dp, ie),
    I = Ct(f),
    E = z.useRef();
  $p(N);
  const k = z.useCallback(
    (O) => {
      (y == null || y({ x: O[0], y: O[1], zoom: O[2] }), x || C.setState({ transform: O }));
    },
    [y, x],
  );
  return (
    z.useEffect(() => {
      if (N.current) {
        E.current = Wh({
          domNode: N.current,
          minZoom: u,
          maxZoom: c,
          translateExtent: d,
          viewport: l,
          onDraggingChange: (A) =>
            C.setState((D) => (D.paneDragging === A ? D : { paneDragging: A })),
          onPanZoomStart: (A, D) => {
            const { onViewportChangeStart: V, onMoveStart: $ } = C.getState();
            ($ == null || $(A, D), V == null || V(D));
          },
          onPanZoom: (A, D) => {
            const { onViewportChange: V, onMove: $ } = C.getState();
            ($ == null || $(A, D), V == null || V(D));
          },
          onPanZoomEnd: (A, D) => {
            const { onViewportChangeEnd: V, onMoveEnd: $ } = C.getState();
            ($ == null || $(A, D), V == null || V(D));
          },
        });
        const { x: O, y: _, zoom: T } = E.current.getViewport();
        return (
          C.setState({
            panZoom: E.current,
            transform: [O, _, T],
            domNode: N.current.closest(".react-flow"),
          }),
          () => {
            var A;
            (A = E.current) == null || A.destroy();
          }
        );
      }
    }, []),
    z.useEffect(() => {
      var O;
      (O = E.current) == null ||
        O.update({
          onPaneContextMenu: e,
          zoomOnScroll: t,
          zoomOnPinch: n,
          panOnScroll: r,
          panOnScrollSpeed: i,
          panOnScrollMode: s,
          zoomOnDoubleClick: o,
          panOnDrag: a,
          zoomActivationKeyPressed: I,
          preventScrolling: h,
          noPanClassName: m,
          userSelectionActive: M,
          noWheelClassName: v,
          lib: b,
          onTransformChange: k,
          connectionInProgress: S,
          selectionOnDrag: w,
          paneClickDistance: g,
        });
    }, [e, t, n, r, i, s, o, a, I, h, m, M, v, b, k, S, w, g]),
    R.jsx("div", { className: "react-flow__renderer", ref: N, style: yn, children: p })
  );
}
const jp = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect,
});
function Hp() {
  const { userSelectionActive: e, userSelectionRect: t } = ee(jp, ie);
  return e && t
    ? R.jsx("div", {
        className: "react-flow__selection react-flow__container",
        style: { width: t.width, height: t.height, transform: `translate(${t.x}px, ${t.y}px)` },
      })
    : null;
}
const Mn = (e, t) => (n) => {
    n.target === t.current && (e == null || e(n));
  },
  zp = (e) => ({
    userSelectionActive: e.userSelectionActive,
    elementsSelectable: e.elementsSelectable,
    connectionInProgress: e.connection.inProgress,
    dragging: e.paneDragging,
    panBy: e.panBy,
    autoPanSpeed: e.autoPanSpeed,
  });
function Vp({
  isSelecting: e,
  selectionKeyPressed: t,
  selectionMode: n = Et.Full,
  panOnDrag: r,
  autoPanOnSelection: i,
  paneClickDistance: s,
  selectionOnDrag: o,
  onSelectionStart: a,
  onSelectionEnd: l,
  onPaneClick: d,
  onPaneContextMenu: u,
  onPaneScroll: c,
  onPaneMouseEnter: f,
  onPaneMouseMove: h,
  onPaneMouseLeave: p,
  children: v,
}) {
  const m = z.useRef(0),
    y = oe(),
    {
      userSelectionActive: x,
      elementsSelectable: g,
      dragging: w,
      connectionInProgress: C,
      panBy: N,
      autoPanSpeed: M,
    } = ee(zp, ie),
    b = g && (e || x),
    S = z.useRef(null),
    I = z.useRef(),
    E = z.useRef(new Set()),
    k = z.useRef(new Set()),
    O = z.useRef(!1),
    _ = z.useRef({ x: 0, y: 0 }),
    T = z.useRef(!1),
    A = (H) => {
      if (O.current || C) {
        O.current = !1;
        return;
      }
      (d == null || d(H),
        y.getState().resetSelectedElements(),
        y.setState({ nodesSelectionActive: !1 }));
    },
    D = (H) => {
      if (Array.isArray(r) && r != null && r.includes(2)) {
        H.preventDefault();
        return;
      }
      u == null || u(H);
    },
    V = c ? (H) => c(H) : void 0,
    $ = (H) => {
      O.current && (H.stopPropagation(), (O.current = !1));
    },
    B = (H) => {
      var se, he;
      const { domNode: Y, transform: K } = y.getState();
      if (((I.current = Y == null ? void 0 : Y.getBoundingClientRect()), !I.current)) return;
      const Q = H.target === S.current;
      if (
        (!Q && !!H.target.closest(".nokey")) ||
        !e ||
        !((o && Q) || t) ||
        H.button !== 0 ||
        !H.isPrimary
      )
        return;
      ((he = (se = H.target) == null ? void 0 : se.setPointerCapture) == null ||
        he.call(se, H.pointerId),
        (O.current = !1));
      const { x: J, y: te } = we(H.nativeEvent, I.current),
        ne = ut({ x: J, y: te }, K);
      (y.setState({
        userSelectionRect: { width: 0, height: 0, startX: ne.x, startY: ne.y, x: J, y: te },
      }),
        Q || (H.stopPropagation(), H.preventDefault()));
    };
  function q(H, Y) {
    const { userSelectionRect: K } = y.getState();
    if (!K) return;
    const {
        transform: Q,
        nodeLookup: U,
        edgeLookup: X,
        connectionLookup: J,
        triggerNodeChanges: te,
        triggerEdgeChanges: ne,
        defaultEdgeOptions: se,
      } = y.getState(),
      he = { x: K.startX, y: K.startY },
      { x: Ee, y: Se } = ct(he, Q),
      Me = {
        startX: he.x,
        startY: he.y,
        x: H < Ee ? H : Ee,
        y: Y < Se ? Y : Se,
        width: Math.abs(H - Ee),
        height: Math.abs(Y - Se),
      },
      dt = E.current,
      He = k.current;
    ((E.current = new Set(Wr(U, Me, Q, n === Et.Partial, !0).map((ge) => ge.id))),
      (k.current = new Set()));
    const ze = (se == null ? void 0 : se.selectable) ?? !0;
    for (const ge of E.current) {
      const Ie = J.get(ge);
      if (Ie)
        for (const { edgeId: Pe } of Ie.values()) {
          const Ve = X.get(Pe);
          Ve && (Ve.selectable ?? ze) && k.current.add(Pe);
        }
    }
    if (!Li(dt, E.current)) {
      const ge = Je(U, E.current, !0);
      te(ge);
    }
    if (!Li(He, k.current)) {
      const ge = Je(X, k.current);
      ne(ge);
    }
    y.setState({ userSelectionRect: Me, userSelectionActive: !0, nodesSelectionActive: !1 });
  }
  function F() {
    if (!i || !I.current) return;
    const [H, Y] = Yr(_.current, I.current, M);
    N({ x: H, y: Y }).then((K) => {
      if (!O.current || !K) {
        m.current = requestAnimationFrame(F);
        return;
      }
      const { x: Q, y: U } = _.current;
      (q(Q, U), (m.current = requestAnimationFrame(F)));
    });
  }
  const P = () => {
    (cancelAnimationFrame(m.current), (m.current = 0), (T.current = !1));
  };
  z.useEffect(() => () => P(), []);
  const L = (H) => {
      const { userSelectionRect: Y, transform: K, resetSelectedElements: Q } = y.getState();
      if (!I.current || !Y) return;
      const { x: U, y: X } = we(H.nativeEvent, I.current);
      _.current = { x: U, y: X };
      const J = ct({ x: Y.startX, y: Y.startY }, K);
      if (!O.current) {
        const te = t ? 0 : s;
        if (Math.hypot(U - J.x, X - J.y) <= te) return;
        (Q(), a == null || a(H));
      }
      ((O.current = !0), T.current || (F(), (T.current = !0)), q(U, X));
    },
    j = (H) => {
      var Y, K;
      H.button === 0 &&
        ((K = (Y = H.target) == null ? void 0 : Y.releasePointerCapture) == null ||
          K.call(Y, H.pointerId),
        !x && H.target === S.current && y.getState().userSelectionRect && (A == null || A(H)),
        y.setState({ userSelectionActive: !1, userSelectionRect: null }),
        O.current && (l == null || l(H), y.setState({ nodesSelectionActive: E.current.size > 0 })),
        P());
    },
    W = (H) => {
      var Y, K;
      ((K = (Y = H.target) == null ? void 0 : Y.releasePointerCapture) == null ||
        K.call(Y, H.pointerId),
        P());
    },
    G = r === !0 || (Array.isArray(r) && r.includes(0));
  return R.jsxs("div", {
    className: le(["react-flow__pane", { draggable: G, dragging: w, selection: e }]),
    onClick: b ? void 0 : Mn(A, S),
    onContextMenu: Mn(D, S),
    onWheel: Mn(V, S),
    onPointerEnter: b ? void 0 : f,
    onPointerMove: b ? L : h,
    onPointerUp: b ? j : void 0,
    onPointerCancel: b ? W : void 0,
    onPointerDownCapture: b ? B : void 0,
    onClickCapture: b ? $ : void 0,
    onPointerLeave: p,
    ref: S,
    style: yn,
    children: [v, R.jsx(Hp, {})],
  });
}
function Dr({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
  const {
      addSelectedNodes: i,
      unselectNodesAndEdges: s,
      multiSelectionActive: o,
      nodeLookup: a,
      onError: l,
    } = t.getState(),
    d = a.get(e);
  if (!d) {
    l == null || l("012", ve.error012(e));
    return;
  }
  (t.setState({ nodesSelectionActive: !1 }),
    d.selected
      ? (n || (d.selected && o)) &&
        (s({ nodes: [d], edges: [] }),
        requestAnimationFrame(() => {
          var u;
          return (u = r == null ? void 0 : r.current) == null ? void 0 : u.blur();
        }))
      : i([e]));
}
function Na({
  nodeRef: e,
  disabled: t = !1,
  noDragClassName: n,
  handleSelector: r,
  nodeId: i,
  isSelectable: s,
  nodeClickDistance: o,
}) {
  const a = oe(),
    [l, d] = z.useState(!1),
    u = z.useRef();
  return (
    z.useEffect(() => {
      u.current = Ah({
        getStoreItems: () => a.getState(),
        onNodeMouseDown: (c) => {
          Dr({ id: c, store: a, nodeRef: e });
        },
        onDragStart: () => {
          d(!0);
        },
        onDragStop: () => {
          d(!1);
        },
      });
    }, []),
    z.useEffect(() => {
      if (!(t || !e.current || !u.current))
        return (
          u.current.update({
            noDragClassName: n,
            handleSelector: r,
            domNode: e.current,
            isSelectable: s,
            nodeId: i,
            nodeClickDistance: o,
          }),
          () => {
            var c;
            (c = u.current) == null || c.destroy();
          }
        );
    }, [n, r, t, s, e, i, o]),
    l
  );
}
const Fp = (e) => (t) => t.selected && (t.draggable || (e && typeof t.draggable > "u"));
function Ca() {
  const e = oe();
  return z.useCallback((n) => {
    const {
        nodeExtent: r,
        snapToGrid: i,
        snapGrid: s,
        nodesDraggable: o,
        onError: a,
        updateNodePositions: l,
        nodeLookup: d,
        nodeOrigin: u,
      } = e.getState(),
      c = new Map(),
      f = Fp(o),
      h = i ? s[0] : 5,
      p = i ? s[1] : 5,
      v = n.direction.x * h * n.factor,
      m = n.direction.y * p * n.factor;
    for (const [, y] of d) {
      if (!f(y)) continue;
      let x = { x: y.internals.positionAbsolute.x + v, y: y.internals.positionAbsolute.y + m };
      i && (x = At(x, s));
      const { position: g, positionAbsolute: w } = Gs({
        nodeId: y.id,
        nextPosition: x,
        nodeLookup: d,
        nodeExtent: r,
        nodeOrigin: u,
        onError: a,
      });
      ((y.position = g), (y.internals.positionAbsolute = w), c.set(y.id, y));
    }
    l(c);
  }, []);
}
const ti = z.createContext(null),
  Bp = ti.Provider;
ti.Consumer;
const ka = () => z.useContext(ti),
  qp = (e) => ({
    connectOnClick: e.connectOnClick,
    noPanClassName: e.noPanClassName,
    rfId: e.rfId,
  }),
  Wp = (e, t, n) => (r) => {
    const { connectionClickStartHandle: i, connectionMode: s, connection: o } = r,
      { fromHandle: a, toHandle: l, isValid: d } = o,
      u =
        (l == null ? void 0 : l.nodeId) === e &&
        (l == null ? void 0 : l.id) === t &&
        (l == null ? void 0 : l.type) === n;
    return {
      connectingFrom:
        (a == null ? void 0 : a.nodeId) === e &&
        (a == null ? void 0 : a.id) === t &&
        (a == null ? void 0 : a.type) === n,
      connectingTo: u,
      clickConnecting:
        (i == null ? void 0 : i.nodeId) === e &&
        (i == null ? void 0 : i.id) === t &&
        (i == null ? void 0 : i.type) === n,
      isPossibleEndHandle:
        s === ot.Strict
          ? (a == null ? void 0 : a.type) !== n
          : e !== (a == null ? void 0 : a.nodeId) || t !== (a == null ? void 0 : a.id),
      connectionInProcess: !!a,
      clickConnectionInProcess: !!i,
      valid: u && d,
    };
  };
function Yp(
  {
    type: e = "source",
    position: t = Z.Top,
    isValidConnection: n,
    isConnectable: r = !0,
    isConnectableStart: i = !0,
    isConnectableEnd: s = !0,
    id: o,
    onConnect: a,
    children: l,
    className: d,
    onMouseDown: u,
    onTouchStart: c,
    ...f
  },
  h,
) {
  var T, A;
  const p = o || null,
    v = e === "target",
    m = oe(),
    y = ka(),
    { connectOnClick: x, noPanClassName: g, rfId: w } = ee(qp, ie),
    {
      connectingFrom: C,
      connectingTo: N,
      clickConnecting: M,
      isPossibleEndHandle: b,
      connectionInProcess: S,
      clickConnectionInProcess: I,
      valid: E,
    } = ee(Wp(y, p, e), ie);
  y || (A = (T = m.getState()).onError) == null || A.call(T, "010", ve.error010());
  const k = (D) => {
      const { defaultEdgeOptions: V, onConnect: $, hasDefaultEdges: B } = m.getState(),
        q = { ...V, ...D };
      if (B) {
        const { edges: F, setEdges: P, onError: L } = m.getState();
        P(Cp(q, F, { onError: L }));
      }
      ($ == null || $(q), a == null || a(q));
    },
    O = (D) => {
      if (!y) return;
      const V = ta(D.nativeEvent);
      if (i && ((V && D.button === 0) || !V)) {
        const $ = m.getState();
        $r.onPointerDown(D.nativeEvent, {
          handleDomNode: D.currentTarget,
          autoPanOnConnect: $.autoPanOnConnect,
          connectionMode: $.connectionMode,
          connectionRadius: $.connectionRadius,
          domNode: $.domNode,
          nodeLookup: $.nodeLookup,
          lib: $.lib,
          isTarget: v,
          handleId: p,
          nodeId: y,
          flowId: $.rfId,
          panBy: $.panBy,
          cancelConnection: $.cancelConnection,
          onConnectStart: $.onConnectStart,
          onConnectEnd: (...B) => {
            var q, F;
            return (F = (q = m.getState()).onConnectEnd) == null ? void 0 : F.call(q, ...B);
          },
          updateConnection: $.updateConnection,
          onConnect: k,
          isValidConnection:
            n ||
            ((...B) => {
              var q, F;
              return (
                ((F = (q = m.getState()).isValidConnection) == null ? void 0 : F.call(q, ...B)) ??
                !0
              );
            }),
          getTransform: () => m.getState().transform,
          getFromHandle: () => m.getState().connection.fromHandle,
          autoPanSpeed: $.autoPanSpeed,
          dragThreshold: $.connectionDragThreshold,
        });
      }
      V ? u == null || u(D) : c == null || c(D);
    },
    _ = (D) => {
      const {
        onClickConnectStart: V,
        onClickConnectEnd: $,
        connectionClickStartHandle: B,
        connectionMode: q,
        isValidConnection: F,
        lib: P,
        rfId: L,
        nodeLookup: j,
        connection: W,
      } = m.getState();
      if (!y || (!B && !i)) return;
      if (!B) {
        (V == null || V(D.nativeEvent, { nodeId: y, handleId: p, handleType: e }),
          m.setState({ connectionClickStartHandle: { nodeId: y, type: e, id: p } }));
        return;
      }
      const G = Js(D.target),
        H = n || F,
        { connection: Y, isValid: K } = $r.isValid(D.nativeEvent, {
          handle: { nodeId: y, id: p, type: e },
          connectionMode: q,
          fromNodeId: B.nodeId,
          fromHandleId: B.id || null,
          fromType: B.type,
          isValidConnection: H,
          flowId: L,
          doc: G,
          lib: P,
          nodeLookup: j,
        });
      K && Y && k(Y);
      const Q = structuredClone(W);
      (delete Q.inProgress,
        (Q.toPosition = Q.toHandle ? Q.toHandle.position : null),
        $ == null || $(D, Q),
        m.setState({ connectionClickStartHandle: null }));
    };
  return R.jsx("div", {
    "data-handleid": p,
    "data-nodeid": y,
    "data-handlepos": t,
    "data-id": `${w}-${y}-${p}-${e}`,
    className: le([
      "react-flow__handle",
      `react-flow__handle-${t}`,
      "nodrag",
      g,
      d,
      {
        source: !v,
        target: v,
        connectable: r,
        connectablestart: i,
        connectableend: s,
        clickconnecting: M,
        connectingfrom: C,
        connectingto: N,
        valid: E,
        connectionindicator: r && (!S || b) && (S || I ? s : i),
      },
    ]),
    onMouseDown: O,
    onTouchStart: O,
    onClick: x ? _ : void 0,
    ref: h,
    ...f,
    children: l,
  });
}
const rn = z.memo(Ea(Yp));
function Gp({ data: e, isConnectable: t, sourcePosition: n = Z.Bottom }) {
  return R.jsxs(R.Fragment, {
    children: [
      e == null ? void 0 : e.label,
      R.jsx(rn, { type: "source", position: n, isConnectable: t }),
    ],
  });
}
function Xp({
  data: e,
  isConnectable: t,
  targetPosition: n = Z.Top,
  sourcePosition: r = Z.Bottom,
}) {
  return R.jsxs(R.Fragment, {
    children: [
      R.jsx(rn, { type: "target", position: n, isConnectable: t }),
      e == null ? void 0 : e.label,
      R.jsx(rn, { type: "source", position: r, isConnectable: t }),
    ],
  });
}
function Up() {
  return null;
}
function Kp({ data: e, isConnectable: t, targetPosition: n = Z.Top }) {
  return R.jsxs(R.Fragment, {
    children: [
      R.jsx(rn, { type: "target", position: n, isConnectable: t }),
      e == null ? void 0 : e.label,
    ],
  });
}
const on = {
    ArrowUp: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 },
    ArrowRight: { x: 1, y: 0 },
  },
  so = { input: Gp, default: Xp, output: Kp, group: Up };
function Zp(e) {
  var t, n, r, i;
  return e.internals.handleBounds === void 0
    ? {
        width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
        height: e.height ?? e.initialHeight ?? ((n = e.style) == null ? void 0 : n.height),
      }
    : {
        width: e.width ?? ((r = e.style) == null ? void 0 : r.width),
        height: e.height ?? ((i = e.style) == null ? void 0 : i.height),
      };
}
const Qp = (e) => {
  const { width: t, height: n, x: r, y: i } = Pt(e.nodeLookup, { filter: (s) => !!s.selected });
  return {
    width: xe(t) ? t : null,
    height: xe(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${i}px)`,
  };
};
function Jp({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const r = oe(),
    { width: i, height: s, transformString: o, userSelectionActive: a } = ee(Qp, ie),
    l = Ca(),
    d = z.useRef(null);
  z.useEffect(() => {
    var h;
    n || (h = d.current) == null || h.focus({ preventScroll: !0 });
  }, [n]);
  const u = !a && i !== null && s !== null;
  if ((Na({ nodeRef: d, disabled: !u }), !u)) return null;
  const c = e
      ? (h) => {
          const p = r.getState().nodes.filter((v) => v.selected);
          e(h, p);
        }
      : void 0,
    f = (h) => {
      Object.prototype.hasOwnProperty.call(on, h.key) &&
        (h.preventDefault(), l({ direction: on[h.key], factor: h.shiftKey ? 4 : 1 }));
    };
  return R.jsx("div", {
    className: le(["react-flow__nodesselection", "react-flow__container", t]),
    style: { transform: o },
    children: R.jsx("div", {
      ref: d,
      className: "react-flow__nodesselection-rect",
      onContextMenu: c,
      tabIndex: n ? void 0 : -1,
      onKeyDown: n ? void 0 : f,
      style: { width: i, height: s },
    }),
  });
}
const ao = typeof window < "u" ? window : void 0,
  eg = (e) => ({
    nodesSelectionActive: e.nodesSelectionActive,
    userSelectionActive: e.userSelectionActive,
  });
function Ma({
  children: e,
  onPaneClick: t,
  onPaneMouseEnter: n,
  onPaneMouseMove: r,
  onPaneMouseLeave: i,
  onPaneContextMenu: s,
  onPaneScroll: o,
  paneClickDistance: a,
  deleteKeyCode: l,
  selectionKeyCode: d,
  selectionOnDrag: u,
  selectionMode: c,
  onSelectionStart: f,
  onSelectionEnd: h,
  multiSelectionKeyCode: p,
  panActivationKeyCode: v,
  zoomActivationKeyCode: m,
  elementsSelectable: y,
  zoomOnScroll: x,
  zoomOnPinch: g,
  panOnScroll: w,
  panOnScrollSpeed: C,
  panOnScrollMode: N,
  zoomOnDoubleClick: M,
  panOnDrag: b,
  autoPanOnSelection: S,
  defaultViewport: I,
  translateExtent: E,
  minZoom: k,
  maxZoom: O,
  preventScrolling: _,
  onSelectionContextMenu: T,
  noWheelClassName: A,
  noPanClassName: D,
  disableKeyboardA11y: V,
  onViewportChange: $,
  isControlledViewport: B,
}) {
  const { nodesSelectionActive: q, userSelectionActive: F } = ee(eg, ie),
    P = Ct(d, { target: ao }),
    L = Ct(v, { target: ao }),
    j = L || b,
    W = L || w,
    G = u && j !== !0,
    H = P || F || G;
  return (
    Lp({ deleteKeyCode: l, multiSelectionKeyCode: p }),
    R.jsx(Op, {
      onPaneContextMenu: s,
      elementsSelectable: y,
      zoomOnScroll: x,
      zoomOnPinch: g,
      panOnScroll: W,
      panOnScrollSpeed: C,
      panOnScrollMode: N,
      zoomOnDoubleClick: M,
      panOnDrag: !P && j,
      defaultViewport: I,
      translateExtent: E,
      minZoom: k,
      maxZoom: O,
      zoomActivationKeyCode: m,
      preventScrolling: _,
      noWheelClassName: A,
      noPanClassName: D,
      onViewportChange: $,
      isControlledViewport: B,
      paneClickDistance: a,
      selectionOnDrag: G,
      children: R.jsxs(Vp, {
        onSelectionStart: f,
        onSelectionEnd: h,
        onPaneClick: t,
        onPaneMouseEnter: n,
        onPaneMouseMove: r,
        onPaneMouseLeave: i,
        onPaneContextMenu: s,
        onPaneScroll: o,
        panOnDrag: j,
        autoPanOnSelection: S,
        isSelecting: !!H,
        selectionMode: c,
        selectionKeyPressed: P,
        paneClickDistance: a,
        selectionOnDrag: G,
        children: [
          e,
          q && R.jsx(Jp, { onSelectionContextMenu: T, noPanClassName: D, disableKeyboardA11y: V }),
        ],
      }),
    })
  );
}
Ma.displayName = "FlowRenderer";
const tg = z.memo(Ma),
  ng = (e) => (t) =>
    e
      ? Wr(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map(
          (n) => n.id,
        )
      : Array.from(t.nodeLookup.keys());
function rg(e) {
  return ee(z.useCallback(ng(e), [e]), ie);
}
const ig = (e) => e.updateNodeInternals;
function og() {
  const e = ee(ig),
    [t] = z.useState(() =>
      typeof ResizeObserver > "u"
        ? null
        : new ResizeObserver((n) => {
            const r = new Map();
            (n.forEach((i) => {
              const s = i.target.getAttribute("data-id");
              r.set(s, { id: s, nodeElement: i.target, force: !0 });
            }),
              e(r));
          }),
    );
  return (
    z.useEffect(
      () => () => {
        t == null || t.disconnect();
      },
      [t],
    ),
    t
  );
}
function sg({ node: e, nodeType: t, hasDimensions: n, resizeObserver: r }) {
  const i = oe(),
    s = z.useRef(null),
    o = z.useRef(null),
    a = z.useRef(e.sourcePosition),
    l = z.useRef(e.targetPosition),
    d = z.useRef(t),
    u = n && !!e.internals.handleBounds;
  return (
    z.useEffect(() => {
      s.current &&
        !e.hidden &&
        (!u || o.current !== s.current) &&
        (o.current && (r == null || r.unobserve(o.current)),
        r == null || r.observe(s.current),
        (o.current = s.current));
    }, [u, e.hidden]),
    z.useEffect(
      () => () => {
        o.current && (r == null || r.unobserve(o.current), (o.current = null));
      },
      [],
    ),
    z.useEffect(() => {
      if (s.current) {
        const c = d.current !== t,
          f = a.current !== e.sourcePosition,
          h = l.current !== e.targetPosition;
        (c || f || h) &&
          ((d.current = t),
          (a.current = e.sourcePosition),
          (l.current = e.targetPosition),
          i
            .getState()
            .updateNodeInternals(
              new Map([[e.id, { id: e.id, nodeElement: s.current, force: !0 }]]),
            ));
      }
    }, [e.id, t, e.sourcePosition, e.targetPosition]),
    s
  );
}
function ag({
  id: e,
  onClick: t,
  onMouseEnter: n,
  onMouseMove: r,
  onMouseLeave: i,
  onContextMenu: s,
  onDoubleClick: o,
  nodesDraggable: a,
  elementsSelectable: l,
  nodesConnectable: d,
  nodesFocusable: u,
  resizeObserver: c,
  noDragClassName: f,
  noPanClassName: h,
  disableKeyboardA11y: p,
  rfId: v,
  nodeTypes: m,
  nodeClickDistance: y,
  onError: x,
}) {
  const {
    node: g,
    internals: w,
    isParent: C,
  } = ee((H) => {
    const Y = H.nodeLookup.get(e),
      K = H.parentLookup.has(e);
    return { node: Y, internals: Y.internals, isParent: K };
  }, ie);
  let N = g.type || "default",
    M = (m == null ? void 0 : m[N]) || so[N];
  M === void 0 &&
    (x == null || x("003", ve.error003(N)),
    (N = "default"),
    (M = (m == null ? void 0 : m.default) || so.default));
  const b = !!(g.draggable || (a && typeof g.draggable > "u")),
    S = !!(g.selectable || (l && typeof g.selectable > "u")),
    I = !!(g.connectable || (d && typeof g.connectable > "u")),
    E = !!(g.focusable || (u && typeof g.focusable > "u")),
    k = oe(),
    O = Zs(g),
    _ = sg({ node: g, nodeType: N, hasDimensions: O, resizeObserver: c }),
    T = Na({
      nodeRef: _,
      disabled: g.hidden || !b,
      noDragClassName: f,
      handleSelector: g.dragHandle,
      nodeId: e,
      isSelectable: S,
      nodeClickDistance: y,
    }),
    A = Ca();
  if (g.hidden) return null;
  const D = Le(g),
    V = Zp(g),
    $ = S || b || t || n || r || i,
    B = n ? (H) => n(H, { ...w.userNode }) : void 0,
    q = r ? (H) => r(H, { ...w.userNode }) : void 0,
    F = i ? (H) => i(H, { ...w.userNode }) : void 0,
    P = s ? (H) => s(H, { ...w.userNode }) : void 0,
    L = o ? (H) => o(H, { ...w.userNode }) : void 0,
    j = (H) => {
      const { selectNodesOnDrag: Y, nodeDragThreshold: K } = k.getState();
      (S && (!Y || !b || K > 0) && Dr({ id: e, store: k, nodeRef: _ }),
        t && t(H, { ...w.userNode }));
    },
    W = (H) => {
      if (!(ea(H.nativeEvent) || p)) {
        if (Fs.includes(H.key) && S) {
          const Y = H.key === "Escape";
          Dr({ id: e, store: k, unselect: Y, nodeRef: _ });
        } else if (b && g.selected && Object.prototype.hasOwnProperty.call(on, H.key)) {
          H.preventDefault();
          const { ariaLabelConfig: Y } = k.getState();
          (k.setState({
            ariaLiveMessage: Y["node.a11yDescription.ariaLiveMessage"]({
              direction: H.key.replace("Arrow", "").toLowerCase(),
              x: ~~w.positionAbsolute.x,
              y: ~~w.positionAbsolute.y,
            }),
          }),
            A({ direction: on[H.key], factor: H.shiftKey ? 4 : 1 }));
        }
      }
    },
    G = () => {
      var J;
      if (p || !((J = _.current) != null && J.matches(":focus-visible"))) return;
      const {
        transform: H,
        width: Y,
        height: K,
        autoPanOnNodeFocus: Q,
        setCenter: U,
      } = k.getState();
      if (!Q) return;
      Wr(new Map([[e, g]]), { x: 0, y: 0, width: Y, height: K }, H, !0).length > 0 ||
        U(g.position.x + D.width / 2, g.position.y + D.height / 2, { zoom: H[2] });
    };
  return R.jsx("div", {
    className: le([
      "react-flow__node",
      `react-flow__node-${N}`,
      { [h]: b },
      g.className,
      { selected: g.selected, selectable: S, parent: C, draggable: b, dragging: T },
    ]),
    ref: _,
    style: {
      zIndex: w.z,
      transform: `translate(${w.positionAbsolute.x}px,${w.positionAbsolute.y}px)`,
      pointerEvents: $ ? "all" : "none",
      visibility: O ? "visible" : "hidden",
      ...g.style,
      ...V,
    },
    "data-id": e,
    "data-testid": `rf__node-${e}`,
    onMouseEnter: B,
    onMouseMove: q,
    onMouseLeave: F,
    onContextMenu: P,
    onClick: j,
    onDoubleClick: L,
    onKeyDown: E ? W : void 0,
    tabIndex: E ? 0 : void 0,
    onFocus: E ? G : void 0,
    role: g.ariaRole ?? (E ? "group" : void 0),
    "aria-roledescription": "node",
    "aria-describedby": p ? void 0 : `${wa}-${v}`,
    "aria-label": g.ariaLabel,
    ...g.domAttributes,
    children: R.jsx(Bp, {
      value: e,
      children: R.jsx(M, {
        id: e,
        data: g.data,
        type: N,
        positionAbsoluteX: w.positionAbsolute.x,
        positionAbsoluteY: w.positionAbsolute.y,
        selected: g.selected ?? !1,
        selectable: S,
        draggable: b,
        deletable: g.deletable ?? !0,
        isConnectable: I,
        sourcePosition: g.sourcePosition,
        targetPosition: g.targetPosition,
        dragging: T,
        dragHandle: g.dragHandle,
        zIndex: w.z,
        parentId: g.parentId,
        ...D,
      }),
    }),
  });
}
var cg = z.memo(ag);
const lg = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError,
});
function Ia(e) {
  const {
      nodesDraggable: t,
      nodesConnectable: n,
      nodesFocusable: r,
      elementsSelectable: i,
      onError: s,
    } = ee(lg, ie),
    o = rg(e.onlyRenderVisibleElements),
    a = og();
  return R.jsx("div", {
    className: "react-flow__nodes",
    style: yn,
    children: o.map((l) =>
      R.jsx(
        cg,
        {
          id: l,
          nodeTypes: e.nodeTypes,
          nodeExtent: e.nodeExtent,
          onClick: e.onNodeClick,
          onMouseEnter: e.onNodeMouseEnter,
          onMouseMove: e.onNodeMouseMove,
          onMouseLeave: e.onNodeMouseLeave,
          onContextMenu: e.onNodeContextMenu,
          onDoubleClick: e.onNodeDoubleClick,
          noDragClassName: e.noDragClassName,
          noPanClassName: e.noPanClassName,
          rfId: e.rfId,
          disableKeyboardA11y: e.disableKeyboardA11y,
          resizeObserver: a,
          nodesDraggable: t,
          nodesConnectable: n,
          nodesFocusable: r,
          elementsSelectable: i,
          nodeClickDistance: e.nodeClickDistance,
          onError: s,
        },
        l,
      ),
    ),
  });
}
Ia.displayName = "NodeRenderer";
const ug = z.memo(Ia);
function dg(e) {
  return ee(
    z.useCallback(
      (n) => {
        if (!e) return n.edges.map((i) => i.id);
        const r = [];
        if (n.width && n.height)
          for (const i of n.edges) {
            const s = n.nodeLookup.get(i.source),
              o = n.nodeLookup.get(i.target);
            s &&
              o &&
              fh({
                sourceNode: s,
                targetNode: o,
                width: n.width,
                height: n.height,
                transform: n.transform,
              }) &&
              r.push(i.id);
          }
        return r;
      },
      [e],
    ),
    ie,
  );
}
const fg = ({ color: e = "none", strokeWidth: t = 1 }) => {
    const n = { strokeWidth: t, ...(e && { stroke: e }) };
    return R.jsx("polyline", {
      className: "arrow",
      style: n,
      strokeLinecap: "round",
      fill: "none",
      strokeLinejoin: "round",
      points: "-5,-4 0,0 -5,4",
    });
  },
  hg = ({ color: e = "none", strokeWidth: t = 1 }) => {
    const n = { strokeWidth: t, ...(e && { stroke: e, fill: e }) };
    return R.jsx("polyline", {
      className: "arrowclosed",
      style: n,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "-5,-4 0,0 -5,4 -5,-4",
    });
  },
  co = { [tn.Arrow]: fg, [tn.ArrowClosed]: hg };
function pg(e) {
  const t = oe();
  return z.useMemo(() => {
    var i, s;
    return Object.prototype.hasOwnProperty.call(co, e)
      ? co[e]
      : ((s = (i = t.getState()).onError) == null || s.call(i, "009", ve.error009(e)), null);
  }, [e]);
}
const gg = ({
    id: e,
    type: t,
    color: n,
    width: r = 12.5,
    height: i = 12.5,
    markerUnits: s = "strokeWidth",
    strokeWidth: o,
    orient: a = "auto-start-reverse",
  }) => {
    const l = pg(t);
    return l
      ? R.jsx("marker", {
          className: "react-flow__arrowhead",
          id: e,
          markerWidth: `${r}`,
          markerHeight: `${i}`,
          viewBox: "-10 -10 20 20",
          markerUnits: s,
          orient: a,
          refX: "0",
          refY: "0",
          children: R.jsx(l, { color: n, strokeWidth: o }),
        })
      : null;
  },
  Pa = ({ defaultColor: e, rfId: t }) => {
    const n = ee((s) => s.edges),
      r = ee((s) => s.defaultEdgeOptions),
      i = z.useMemo(
        () =>
          vh(n, {
            id: t,
            defaultColor: e,
            defaultMarkerStart: r == null ? void 0 : r.markerStart,
            defaultMarkerEnd: r == null ? void 0 : r.markerEnd,
          }),
        [n, r, t, e],
      );
    return i.length
      ? R.jsx("svg", {
          className: "react-flow__marker",
          "aria-hidden": "true",
          children: R.jsx("defs", {
            children: i.map((s) =>
              R.jsx(
                gg,
                {
                  id: s.id,
                  type: s.type,
                  color: s.color,
                  width: s.width,
                  height: s.height,
                  markerUnits: s.markerUnits,
                  strokeWidth: s.strokeWidth,
                  orient: s.orient,
                },
                s.id,
              ),
            ),
          }),
        })
      : null;
  };
Pa.displayName = "MarkerDefinitions";
var mg = z.memo(Pa);
function Aa({
  x: e,
  y: t,
  label: n,
  labelStyle: r,
  labelShowBg: i = !0,
  labelBgStyle: s,
  labelBgPadding: o = [2, 4],
  labelBgBorderRadius: a = 2,
  children: l,
  className: d,
  ...u
}) {
  const [c, f] = z.useState({ x: 1, y: 0, width: 0, height: 0 }),
    h = le(["react-flow__edge-textwrapper", d]),
    p = z.useRef(null);
  return (
    z.useEffect(() => {
      if (p.current) {
        const v = p.current.getBBox();
        f({ x: v.x, y: v.y, width: v.width, height: v.height });
      }
    }, [n]),
    n
      ? R.jsxs("g", {
          transform: `translate(${e - c.width / 2} ${t - c.height / 2})`,
          className: h,
          visibility: c.width ? "visible" : "hidden",
          ...u,
          children: [
            i &&
              R.jsx("rect", {
                width: c.width + 2 * o[0],
                x: -o[0],
                y: -o[1],
                height: c.height + 2 * o[1],
                className: "react-flow__edge-textbg",
                style: s,
                rx: a,
                ry: a,
              }),
            R.jsx("text", {
              className: "react-flow__edge-text",
              y: c.height / 2,
              dy: "0.3em",
              ref: p,
              style: r,
              children: n,
            }),
            l,
          ],
        })
      : null
  );
}
Aa.displayName = "EdgeText";
const yg = z.memo(Aa);
function xn({
  path: e,
  labelX: t,
  labelY: n,
  label: r,
  labelStyle: i,
  labelShowBg: s,
  labelBgStyle: o,
  labelBgPadding: a,
  labelBgBorderRadius: l,
  interactionWidth: d = 20,
  ...u
}) {
  return R.jsxs(R.Fragment, {
    children: [
      R.jsx("path", {
        ...u,
        d: e,
        fill: "none",
        className: le(["react-flow__edge-path", u.className]),
      }),
      d
        ? R.jsx("path", {
            d: e,
            fill: "none",
            strokeOpacity: 0,
            strokeWidth: d,
            className: "react-flow__edge-interaction",
          })
        : null,
      r && xe(t) && xe(n)
        ? R.jsx(yg, {
            x: t,
            y: n,
            label: r,
            labelStyle: i,
            labelShowBg: s,
            labelBgStyle: o,
            labelBgPadding: a,
            labelBgBorderRadius: l,
          })
        : null,
    ],
  });
}
function lo({ pos: e, x1: t, y1: n, x2: r, y2: i }) {
  return e === Z.Left || e === Z.Right ? [0.5 * (t + r), n] : [t, 0.5 * (n + i)];
}
function Ta({
  sourceX: e,
  sourceY: t,
  sourcePosition: n = Z.Bottom,
  targetX: r,
  targetY: i,
  targetPosition: s = Z.Top,
}) {
  const [o, a] = lo({ pos: n, x1: e, y1: t, x2: r, y2: i }),
    [l, d] = lo({ pos: s, x1: r, y1: i, x2: e, y2: t }),
    [u, c, f, h] = na({
      sourceX: e,
      sourceY: t,
      targetX: r,
      targetY: i,
      sourceControlX: o,
      sourceControlY: a,
      targetControlX: l,
      targetControlY: d,
    });
  return [`M${e},${t} C${o},${a} ${l},${d} ${r},${i}`, u, c, f, h];
}
function Ra(e) {
  return z.memo(
    ({
      id: t,
      sourceX: n,
      sourceY: r,
      targetX: i,
      targetY: s,
      sourcePosition: o,
      targetPosition: a,
      label: l,
      labelStyle: d,
      labelShowBg: u,
      labelBgStyle: c,
      labelBgPadding: f,
      labelBgBorderRadius: h,
      style: p,
      markerEnd: v,
      markerStart: m,
      interactionWidth: y,
    }) => {
      const [x, g, w] = Ta({
          sourceX: n,
          sourceY: r,
          sourcePosition: o,
          targetX: i,
          targetY: s,
          targetPosition: a,
        }),
        C = e.isInternal ? void 0 : t;
      return R.jsx(xn, {
        id: C,
        path: x,
        labelX: g,
        labelY: w,
        label: l,
        labelStyle: d,
        labelShowBg: u,
        labelBgStyle: c,
        labelBgPadding: f,
        labelBgBorderRadius: h,
        style: p,
        markerEnd: v,
        markerStart: m,
        interactionWidth: y,
      });
    },
  );
}
const xg = Ra({ isInternal: !1 }),
  La = Ra({ isInternal: !0 });
xg.displayName = "SimpleBezierEdge";
La.displayName = "SimpleBezierEdgeInternal";
function $a(e) {
  return z.memo(
    ({
      id: t,
      sourceX: n,
      sourceY: r,
      targetX: i,
      targetY: s,
      label: o,
      labelStyle: a,
      labelShowBg: l,
      labelBgStyle: d,
      labelBgPadding: u,
      labelBgBorderRadius: c,
      style: f,
      sourcePosition: h = Z.Bottom,
      targetPosition: p = Z.Top,
      markerEnd: v,
      markerStart: m,
      pathOptions: y,
      interactionWidth: x,
    }) => {
      const [g, w, C] = Tr({
          sourceX: n,
          sourceY: r,
          sourcePosition: h,
          targetX: i,
          targetY: s,
          targetPosition: p,
          borderRadius: y == null ? void 0 : y.borderRadius,
          offset: y == null ? void 0 : y.offset,
          stepPosition: y == null ? void 0 : y.stepPosition,
        }),
        N = e.isInternal ? void 0 : t;
      return R.jsx(xn, {
        id: N,
        path: g,
        labelX: w,
        labelY: C,
        label: o,
        labelStyle: a,
        labelShowBg: l,
        labelBgStyle: d,
        labelBgPadding: u,
        labelBgBorderRadius: c,
        style: f,
        markerEnd: v,
        markerStart: m,
        interactionWidth: x,
      });
    },
  );
}
const Da = $a({ isInternal: !1 }),
  Oa = $a({ isInternal: !0 });
Da.displayName = "SmoothStepEdge";
Oa.displayName = "SmoothStepEdgeInternal";
function ja(e) {
  return z.memo(({ id: t, ...n }) => {
    var i;
    const r = e.isInternal ? void 0 : t;
    return R.jsx(Da, {
      ...n,
      id: r,
      pathOptions: z.useMemo(() => {
        var s;
        return { borderRadius: 0, offset: (s = n.pathOptions) == null ? void 0 : s.offset };
      }, [(i = n.pathOptions) == null ? void 0 : i.offset]),
    });
  });
}
const wg = ja({ isInternal: !1 }),
  Ha = ja({ isInternal: !0 });
wg.displayName = "StepEdge";
Ha.displayName = "StepEdgeInternal";
function za(e) {
  return z.memo(
    ({
      id: t,
      sourceX: n,
      sourceY: r,
      targetX: i,
      targetY: s,
      label: o,
      labelStyle: a,
      labelShowBg: l,
      labelBgStyle: d,
      labelBgPadding: u,
      labelBgBorderRadius: c,
      style: f,
      markerEnd: h,
      markerStart: p,
      interactionWidth: v,
    }) => {
      const [m, y, x] = oa({ sourceX: n, sourceY: r, targetX: i, targetY: s }),
        g = e.isInternal ? void 0 : t;
      return R.jsx(xn, {
        id: g,
        path: m,
        labelX: y,
        labelY: x,
        label: o,
        labelStyle: a,
        labelShowBg: l,
        labelBgStyle: d,
        labelBgPadding: u,
        labelBgBorderRadius: c,
        style: f,
        markerEnd: h,
        markerStart: p,
        interactionWidth: v,
      });
    },
  );
}
const vg = za({ isInternal: !1 }),
  Va = za({ isInternal: !0 });
vg.displayName = "StraightEdge";
Va.displayName = "StraightEdgeInternal";
function Fa(e) {
  return z.memo(
    ({
      id: t,
      sourceX: n,
      sourceY: r,
      targetX: i,
      targetY: s,
      sourcePosition: o = Z.Bottom,
      targetPosition: a = Z.Top,
      label: l,
      labelStyle: d,
      labelShowBg: u,
      labelBgStyle: c,
      labelBgPadding: f,
      labelBgBorderRadius: h,
      style: p,
      markerEnd: v,
      markerStart: m,
      pathOptions: y,
      interactionWidth: x,
    }) => {
      const [g, w, C] = ra({
          sourceX: n,
          sourceY: r,
          sourcePosition: o,
          targetX: i,
          targetY: s,
          targetPosition: a,
          curvature: y == null ? void 0 : y.curvature,
        }),
        N = e.isInternal ? void 0 : t;
      return R.jsx(xn, {
        id: N,
        path: g,
        labelX: w,
        labelY: C,
        label: l,
        labelStyle: d,
        labelShowBg: u,
        labelBgStyle: c,
        labelBgPadding: f,
        labelBgBorderRadius: h,
        style: p,
        markerEnd: v,
        markerStart: m,
        interactionWidth: x,
      });
    },
  );
}
const bg = Fa({ isInternal: !1 }),
  Ba = Fa({ isInternal: !0 });
bg.displayName = "BezierEdge";
Ba.displayName = "BezierEdgeInternal";
const uo = { default: Ba, straight: Va, step: Ha, smoothstep: Oa, simplebezier: La },
  fo = {
    sourceX: null,
    sourceY: null,
    targetX: null,
    targetY: null,
    sourcePosition: null,
    targetPosition: null,
  },
  _g = (e, t, n) => (n === Z.Left ? e - t : n === Z.Right ? e + t : e),
  Eg = (e, t, n) => (n === Z.Top ? e - t : n === Z.Bottom ? e + t : e),
  ho = "react-flow__edgeupdater";
function po({
  position: e,
  centerX: t,
  centerY: n,
  radius: r = 10,
  onMouseDown: i,
  onMouseEnter: s,
  onMouseOut: o,
  type: a,
}) {
  return R.jsx("circle", {
    onMouseDown: i,
    onMouseEnter: s,
    onMouseOut: o,
    className: le([ho, `${ho}-${a}`]),
    cx: _g(t, r, e),
    cy: Eg(n, r, e),
    r,
    stroke: "transparent",
    fill: "transparent",
  });
}
function Sg({
  isReconnectable: e,
  reconnectRadius: t,
  edge: n,
  sourceX: r,
  sourceY: i,
  targetX: s,
  targetY: o,
  sourcePosition: a,
  targetPosition: l,
  onReconnect: d,
  onReconnectStart: u,
  onReconnectEnd: c,
  setReconnecting: f,
  setUpdateHover: h,
}) {
  const p = oe(),
    v = (w, C) => {
      if (w.button !== 0) return;
      const {
          autoPanOnConnect: N,
          domNode: M,
          connectionMode: b,
          connectionRadius: S,
          lib: I,
          onConnectStart: E,
          cancelConnection: k,
          nodeLookup: O,
          rfId: _,
          panBy: T,
          updateConnection: A,
        } = p.getState(),
        D = C.type === "target",
        V = (q, F) => {
          (f(!1), c == null || c(q, n, C.type, F));
        },
        $ = (q) => (d == null ? void 0 : d(n, q)),
        B = (q, F) => {
          (f(!0), u == null || u(w, n, C.type), E == null || E(q, F));
        };
      $r.onPointerDown(w.nativeEvent, {
        autoPanOnConnect: N,
        connectionMode: b,
        connectionRadius: S,
        domNode: M,
        handleId: C.id,
        nodeId: C.nodeId,
        nodeLookup: O,
        isTarget: D,
        edgeUpdaterType: C.type,
        lib: I,
        flowId: _,
        cancelConnection: k,
        panBy: T,
        isValidConnection: (...q) => {
          var F, P;
          return (
            ((P = (F = p.getState()).isValidConnection) == null ? void 0 : P.call(F, ...q)) ?? !0
          );
        },
        onConnect: $,
        onConnectStart: B,
        onConnectEnd: (...q) => {
          var F, P;
          return (P = (F = p.getState()).onConnectEnd) == null ? void 0 : P.call(F, ...q);
        },
        onReconnectEnd: V,
        updateConnection: A,
        getTransform: () => p.getState().transform,
        getFromHandle: () => p.getState().connection.fromHandle,
        dragThreshold: p.getState().connectionDragThreshold,
        handleDomNode: w.currentTarget,
      });
    },
    m = (w) => v(w, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }),
    y = (w) => v(w, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }),
    x = () => h(!0),
    g = () => h(!1);
  return R.jsxs(R.Fragment, {
    children: [
      (e === !0 || e === "source") &&
        R.jsx(po, {
          position: a,
          centerX: r,
          centerY: i,
          radius: t,
          onMouseDown: m,
          onMouseEnter: x,
          onMouseOut: g,
          type: "source",
        }),
      (e === !0 || e === "target") &&
        R.jsx(po, {
          position: l,
          centerX: s,
          centerY: o,
          radius: t,
          onMouseDown: y,
          onMouseEnter: x,
          onMouseOut: g,
          type: "target",
        }),
    ],
  });
}
function Ng({
  id: e,
  edgesFocusable: t,
  edgesReconnectable: n,
  elementsSelectable: r,
  onClick: i,
  onDoubleClick: s,
  onContextMenu: o,
  onMouseEnter: a,
  onMouseMove: l,
  onMouseLeave: d,
  reconnectRadius: u,
  onReconnect: c,
  onReconnectStart: f,
  onReconnectEnd: h,
  rfId: p,
  edgeTypes: v,
  noPanClassName: m,
  onError: y,
  disableKeyboardA11y: x,
}) {
  let g = ee((U) => U.edgeLookup.get(e));
  const w = ee((U) => U.defaultEdgeOptions);
  g = w ? { ...w, ...g } : g;
  let C = g.type || "default",
    N = (v == null ? void 0 : v[C]) || uo[C];
  N === void 0 &&
    (y == null || y("011", ve.error011(C)),
    (C = "default"),
    (N = (v == null ? void 0 : v.default) || uo.default));
  const M = !!(g.focusable || (t && typeof g.focusable > "u")),
    b = typeof c < "u" && (g.reconnectable || (n && typeof g.reconnectable > "u")),
    S = !!(g.selectable || (r && typeof g.selectable > "u")),
    I = z.useRef(null),
    [E, k] = z.useState(!1),
    [O, _] = z.useState(!1),
    T = oe(),
    {
      zIndex: A,
      sourceX: D,
      sourceY: V,
      targetX: $,
      targetY: B,
      sourcePosition: q,
      targetPosition: F,
    } = ee(
      z.useCallback(
        (U) => {
          const X = U.nodeLookup.get(g.source),
            J = U.nodeLookup.get(g.target);
          if (!X || !J) return { zIndex: g.zIndex, ...fo };
          const te = wh({
            id: e,
            sourceNode: X,
            targetNode: J,
            sourceHandle: g.sourceHandle || null,
            targetHandle: g.targetHandle || null,
            connectionMode: U.connectionMode,
            onError: y,
          });
          return {
            zIndex: dh({
              selected: g.selected,
              zIndex: g.zIndex,
              sourceNode: X,
              targetNode: J,
              elevateOnSelect: U.elevateEdgesOnSelect,
              zIndexMode: U.zIndexMode,
            }),
            ...(te || fo),
          };
        },
        [g.source, g.target, g.sourceHandle, g.targetHandle, g.selected, g.zIndex],
      ),
      ie,
    ),
    P = z.useMemo(
      () => (g.markerStart ? `url('#${Rr(g.markerStart, p)}')` : void 0),
      [g.markerStart, p],
    ),
    L = z.useMemo(() => (g.markerEnd ? `url('#${Rr(g.markerEnd, p)}')` : void 0), [g.markerEnd, p]);
  if (g.hidden || D === null || V === null || $ === null || B === null) return null;
  const j = (U) => {
      var ne;
      const {
        addSelectedEdges: X,
        unselectNodesAndEdges: J,
        multiSelectionActive: te,
      } = T.getState();
      (S &&
        (T.setState({ nodesSelectionActive: !1 }),
        g.selected && te
          ? (J({ nodes: [], edges: [g] }), (ne = I.current) == null || ne.blur())
          : X([e])),
        i && i(U, g));
    },
    W = s
      ? (U) => {
          s(U, { ...g });
        }
      : void 0,
    G = o
      ? (U) => {
          o(U, { ...g });
        }
      : void 0,
    H = a
      ? (U) => {
          a(U, { ...g });
        }
      : void 0,
    Y = l
      ? (U) => {
          l(U, { ...g });
        }
      : void 0,
    K = d
      ? (U) => {
          d(U, { ...g });
        }
      : void 0,
    Q = (U) => {
      var X;
      if (!x && Fs.includes(U.key) && S) {
        const { unselectNodesAndEdges: J, addSelectedEdges: te } = T.getState();
        U.key === "Escape" ? ((X = I.current) == null || X.blur(), J({ edges: [g] })) : te([e]);
      }
    };
  return R.jsx("svg", {
    style: { zIndex: A },
    children: R.jsxs("g", {
      className: le([
        "react-flow__edge",
        `react-flow__edge-${C}`,
        g.className,
        m,
        {
          selected: g.selected,
          animated: g.animated,
          inactive: !S && !i,
          updating: E,
          selectable: S,
        },
      ]),
      onClick: j,
      onDoubleClick: W,
      onContextMenu: G,
      onMouseEnter: H,
      onMouseMove: Y,
      onMouseLeave: K,
      onKeyDown: M ? Q : void 0,
      tabIndex: M ? 0 : void 0,
      role: g.ariaRole ?? (M ? "group" : "img"),
      "aria-roledescription": "edge",
      "data-id": e,
      "data-testid": `rf__edge-${e}`,
      "aria-label":
        g.ariaLabel === null ? void 0 : g.ariaLabel || `Edge from ${g.source} to ${g.target}`,
      "aria-describedby": M ? `${va}-${p}` : void 0,
      ref: I,
      ...g.domAttributes,
      children: [
        !O &&
          R.jsx(N, {
            id: e,
            source: g.source,
            target: g.target,
            type: g.type,
            selected: g.selected,
            animated: g.animated,
            selectable: S,
            deletable: g.deletable ?? !0,
            label: g.label,
            labelStyle: g.labelStyle,
            labelShowBg: g.labelShowBg,
            labelBgStyle: g.labelBgStyle,
            labelBgPadding: g.labelBgPadding,
            labelBgBorderRadius: g.labelBgBorderRadius,
            sourceX: D,
            sourceY: V,
            targetX: $,
            targetY: B,
            sourcePosition: q,
            targetPosition: F,
            data: g.data,
            style: g.style,
            sourceHandleId: g.sourceHandle,
            targetHandleId: g.targetHandle,
            markerStart: P,
            markerEnd: L,
            pathOptions: "pathOptions" in g ? g.pathOptions : void 0,
            interactionWidth: g.interactionWidth,
          }),
        b &&
          R.jsx(Sg, {
            edge: g,
            isReconnectable: b,
            reconnectRadius: u,
            onReconnect: c,
            onReconnectStart: f,
            onReconnectEnd: h,
            sourceX: D,
            sourceY: V,
            targetX: $,
            targetY: B,
            sourcePosition: q,
            targetPosition: F,
            setUpdateHover: k,
            setReconnecting: _,
          }),
      ],
    }),
  });
}
var Cg = z.memo(Ng);
const kg = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError,
});
function qa({
  defaultMarkerColor: e,
  onlyRenderVisibleElements: t,
  rfId: n,
  edgeTypes: r,
  noPanClassName: i,
  onReconnect: s,
  onEdgeContextMenu: o,
  onEdgeMouseEnter: a,
  onEdgeMouseMove: l,
  onEdgeMouseLeave: d,
  onEdgeClick: u,
  reconnectRadius: c,
  onEdgeDoubleClick: f,
  onReconnectStart: h,
  onReconnectEnd: p,
  disableKeyboardA11y: v,
}) {
  const {
      edgesFocusable: m,
      edgesReconnectable: y,
      elementsSelectable: x,
      onError: g,
    } = ee(kg, ie),
    w = dg(t);
  return R.jsxs("div", {
    className: "react-flow__edges",
    children: [
      R.jsx(mg, { defaultColor: e, rfId: n }),
      w.map((C) =>
        R.jsx(
          Cg,
          {
            id: C,
            edgesFocusable: m,
            edgesReconnectable: y,
            elementsSelectable: x,
            noPanClassName: i,
            onReconnect: s,
            onContextMenu: o,
            onMouseEnter: a,
            onMouseMove: l,
            onMouseLeave: d,
            onClick: u,
            reconnectRadius: c,
            onDoubleClick: f,
            onReconnectStart: h,
            onReconnectEnd: p,
            rfId: n,
            onError: g,
            edgeTypes: r,
            disableKeyboardA11y: v,
          },
          C,
        ),
      ),
    ],
  });
}
qa.displayName = "EdgeRenderer";
const Mg = z.memo(qa),
  Ig = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function Pg({ children: e }) {
  const t = ee(Ig);
  return R.jsx("div", {
    className: "react-flow__viewport xyflow__viewport react-flow__container",
    style: { transform: t },
    children: e,
  });
}
function Ag(e) {
  const t = ei(),
    n = z.useRef(!1);
  z.useEffect(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), (n.current = !0));
  }, [e, t.viewportInitialized]);
}
const Tg = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function Rg(e) {
  const t = ee(Tg),
    n = oe();
  return (
    z.useEffect(() => {
      e && (t == null || t(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
    }, [e, t]),
    null
  );
}
function Lg(e) {
  return e.connection.inProgress
    ? { ...e.connection, to: ut(e.connection.to, e.transform) }
    : { ...e.connection };
}
function $g(e) {
  return Lg;
}
function Dg(e) {
  const t = $g();
  return ee(t, ie);
}
const Og = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height,
});
function jg({ containerStyle: e, style: t, type: n, component: r }) {
  const { nodesConnectable: i, width: s, height: o, isValid: a, inProgress: l } = ee(Og, ie);
  return !(s && i && l)
    ? null
    : R.jsx("svg", {
        style: e,
        width: s,
        height: o,
        className: "react-flow__connectionline react-flow__container",
        children: R.jsx("g", {
          className: le(["react-flow__connection", Ws(a)]),
          children: R.jsx(Wa, { style: t, type: n, CustomComponent: r, isValid: a }),
        }),
      });
}
const Wa = ({ style: e, type: t = Oe.Bezier, CustomComponent: n, isValid: r }) => {
  const {
    inProgress: i,
    from: s,
    fromNode: o,
    fromHandle: a,
    fromPosition: l,
    to: d,
    toNode: u,
    toHandle: c,
    toPosition: f,
    pointer: h,
  } = Dg();
  if (!i) return;
  if (n)
    return R.jsx(n, {
      connectionLineType: t,
      connectionLineStyle: e,
      fromNode: o,
      fromHandle: a,
      fromX: s.x,
      fromY: s.y,
      toX: d.x,
      toY: d.y,
      fromPosition: l,
      toPosition: f,
      connectionStatus: Ws(r),
      toNode: u,
      toHandle: c,
      pointer: h,
    });
  let p = "";
  const v = {
    sourceX: s.x,
    sourceY: s.y,
    sourcePosition: l,
    targetX: d.x,
    targetY: d.y,
    targetPosition: f,
  };
  switch (t) {
    case Oe.Bezier:
      [p] = ra(v);
      break;
    case Oe.SimpleBezier:
      [p] = Ta(v);
      break;
    case Oe.Step:
      [p] = Tr({ ...v, borderRadius: 0 });
      break;
    case Oe.SmoothStep:
      [p] = Tr(v);
      break;
    default:
      [p] = oa(v);
  }
  return R.jsx("path", { d: p, fill: "none", className: "react-flow__connection-path", style: e });
};
Wa.displayName = "ConnectionLine";
const Hg = {};
function go(e = Hg) {
  (z.useRef(e), oe(), z.useEffect(() => {}, [e]));
}
function zg() {
  (oe(), z.useRef(!1), z.useEffect(() => {}, []));
}
function Ya({
  nodeTypes: e,
  edgeTypes: t,
  onInit: n,
  onNodeClick: r,
  onEdgeClick: i,
  onNodeDoubleClick: s,
  onEdgeDoubleClick: o,
  onNodeMouseEnter: a,
  onNodeMouseMove: l,
  onNodeMouseLeave: d,
  onNodeContextMenu: u,
  onSelectionContextMenu: c,
  onSelectionStart: f,
  onSelectionEnd: h,
  connectionLineType: p,
  connectionLineStyle: v,
  connectionLineComponent: m,
  connectionLineContainerStyle: y,
  selectionKeyCode: x,
  selectionOnDrag: g,
  selectionMode: w,
  multiSelectionKeyCode: C,
  panActivationKeyCode: N,
  zoomActivationKeyCode: M,
  deleteKeyCode: b,
  onlyRenderVisibleElements: S,
  elementsSelectable: I,
  defaultViewport: E,
  translateExtent: k,
  minZoom: O,
  maxZoom: _,
  preventScrolling: T,
  defaultMarkerColor: A,
  zoomOnScroll: D,
  zoomOnPinch: V,
  panOnScroll: $,
  panOnScrollSpeed: B,
  panOnScrollMode: q,
  zoomOnDoubleClick: F,
  panOnDrag: P,
  autoPanOnSelection: L,
  onPaneClick: j,
  onPaneMouseEnter: W,
  onPaneMouseMove: G,
  onPaneMouseLeave: H,
  onPaneScroll: Y,
  onPaneContextMenu: K,
  paneClickDistance: Q,
  nodeClickDistance: U,
  onEdgeContextMenu: X,
  onEdgeMouseEnter: J,
  onEdgeMouseMove: te,
  onEdgeMouseLeave: ne,
  reconnectRadius: se,
  onReconnect: he,
  onReconnectStart: Ee,
  onReconnectEnd: Se,
  noDragClassName: Me,
  noWheelClassName: dt,
  noPanClassName: He,
  disableKeyboardA11y: ze,
  nodeExtent: ge,
  rfId: Ie,
  viewport: Pe,
  onViewportChange: Ve,
}) {
  return (
    go(e),
    go(t),
    zg(),
    Ag(n),
    Rg(Pe),
    R.jsx(tg, {
      onPaneClick: j,
      onPaneMouseEnter: W,
      onPaneMouseMove: G,
      onPaneMouseLeave: H,
      onPaneContextMenu: K,
      onPaneScroll: Y,
      paneClickDistance: Q,
      deleteKeyCode: b,
      selectionKeyCode: x,
      selectionOnDrag: g,
      selectionMode: w,
      onSelectionStart: f,
      onSelectionEnd: h,
      multiSelectionKeyCode: C,
      panActivationKeyCode: N,
      zoomActivationKeyCode: M,
      elementsSelectable: I,
      zoomOnScroll: D,
      zoomOnPinch: V,
      zoomOnDoubleClick: F,
      panOnScroll: $,
      panOnScrollSpeed: B,
      panOnScrollMode: q,
      panOnDrag: P,
      autoPanOnSelection: L,
      defaultViewport: E,
      translateExtent: k,
      minZoom: O,
      maxZoom: _,
      onSelectionContextMenu: c,
      preventScrolling: T,
      noDragClassName: Me,
      noWheelClassName: dt,
      noPanClassName: He,
      disableKeyboardA11y: ze,
      onViewportChange: Ve,
      isControlledViewport: !!Pe,
      children: R.jsxs(Pg, {
        children: [
          R.jsx(Mg, {
            edgeTypes: t,
            onEdgeClick: i,
            onEdgeDoubleClick: o,
            onReconnect: he,
            onReconnectStart: Ee,
            onReconnectEnd: Se,
            onlyRenderVisibleElements: S,
            onEdgeContextMenu: X,
            onEdgeMouseEnter: J,
            onEdgeMouseMove: te,
            onEdgeMouseLeave: ne,
            reconnectRadius: se,
            defaultMarkerColor: A,
            noPanClassName: He,
            disableKeyboardA11y: ze,
            rfId: Ie,
          }),
          R.jsx(jg, { style: v, type: p, component: m, containerStyle: y }),
          R.jsx("div", { className: "react-flow__edgelabel-renderer" }),
          R.jsx(ug, {
            nodeTypes: e,
            onNodeClick: r,
            onNodeDoubleClick: s,
            onNodeMouseEnter: a,
            onNodeMouseMove: l,
            onNodeMouseLeave: d,
            onNodeContextMenu: u,
            nodeClickDistance: U,
            onlyRenderVisibleElements: S,
            noPanClassName: He,
            noDragClassName: Me,
            disableKeyboardA11y: ze,
            nodeExtent: ge,
            rfId: Ie,
          }),
          R.jsx("div", { className: "react-flow__viewport-portal" }),
        ],
      }),
    })
  );
}
Ya.displayName = "GraphView";
const Vg = z.memo(Ya),
  Fg = Ks(),
  mo = ({
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: r,
    width: i,
    height: s,
    fitView: o,
    fitViewOptions: a,
    minZoom: l = 0.5,
    maxZoom: d = 2,
    nodeOrigin: u,
    nodeExtent: c,
    zIndexMode: f = "basic",
  } = {}) => {
    const h = new Map(),
      p = new Map(),
      v = new Map(),
      m = new Map(),
      y = r ?? t ?? [],
      x = n ?? e ?? [],
      g = u ?? [0, 0],
      w = c ?? _t;
    ca(v, m, y);
    const { nodesInitialized: C } = Lr(x, h, p, { nodeOrigin: g, nodeExtent: w, zIndexMode: f });
    let N = [0, 0, 1];
    if (o && i && s) {
      const M = Pt(h, {
          filter: (E) => !!((E.width || E.initialWidth) && (E.height || E.initialHeight)),
        }),
        { x: b, y: S, zoom: I } = Gr(M, i, s, l, d, (a == null ? void 0 : a.padding) ?? 0.1);
      N = [b, S, I];
    }
    return {
      rfId: "1",
      width: i ?? 0,
      height: s ?? 0,
      transform: N,
      nodes: x,
      nodesInitialized: C,
      nodeLookup: h,
      parentLookup: p,
      edges: y,
      edgeLookup: m,
      connectionLookup: v,
      onNodesChange: null,
      onEdgesChange: null,
      hasDefaultNodes: n !== void 0,
      hasDefaultEdges: r !== void 0,
      panZoom: null,
      minZoom: l,
      maxZoom: d,
      translateExtent: _t,
      nodeExtent: w,
      nodesSelectionActive: !1,
      userSelectionActive: !1,
      userSelectionRect: null,
      connectionMode: ot.Strict,
      domNode: null,
      paneDragging: !1,
      noPanClassName: "nopan",
      nodeOrigin: g,
      nodeDragThreshold: 1,
      connectionDragThreshold: 1,
      snapGrid: [15, 15],
      snapToGrid: !1,
      nodesDraggable: !0,
      nodesConnectable: !0,
      nodesFocusable: !0,
      edgesFocusable: !0,
      edgesReconnectable: !0,
      elementsSelectable: !0,
      elevateNodesOnSelect: !0,
      elevateEdgesOnSelect: !0,
      selectNodesOnDrag: !0,
      multiSelectionActive: !1,
      fitViewQueued: o ?? !1,
      fitViewOptions: a,
      fitViewResolver: null,
      connection: { ...qs },
      connectionClickStartHandle: null,
      connectOnClick: !0,
      ariaLiveMessage: "",
      autoPanOnConnect: !0,
      autoPanOnNodeDrag: !0,
      autoPanOnNodeFocus: !0,
      autoPanSpeed: 15,
      connectionRadius: 20,
      onError: Fg,
      isValidConnection: void 0,
      onSelectionChangeHandlers: [],
      lib: "react",
      debug: !1,
      ariaLabelConfig: Bs,
      zIndexMode: f,
      onNodesChangeMiddlewareMap: new Map(),
      onEdgesChangeMiddlewareMap: new Map(),
    };
  },
  Bg = ({
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: r,
    width: i,
    height: s,
    fitView: o,
    fitViewOptions: a,
    minZoom: l,
    maxZoom: d,
    nodeOrigin: u,
    nodeExtent: c,
    zIndexMode: f,
  }) =>
    np((h, p) => {
      async function v() {
        const {
          nodeLookup: m,
          panZoom: y,
          fitViewOptions: x,
          fitViewResolver: g,
          width: w,
          height: C,
          minZoom: N,
          maxZoom: M,
        } = p();
        y &&
          (await ih({ nodes: m, width: w, height: C, panZoom: y, minZoom: N, maxZoom: M }, x),
          g == null || g.resolve(!0),
          h({ fitViewResolver: null }));
      }
      return {
        ...mo({
          nodes: e,
          edges: t,
          width: i,
          height: s,
          fitView: o,
          fitViewOptions: a,
          minZoom: l,
          maxZoom: d,
          nodeOrigin: u,
          nodeExtent: c,
          defaultNodes: n,
          defaultEdges: r,
          zIndexMode: f,
        }),
        setNodes: (m) => {
          const {
              nodeLookup: y,
              parentLookup: x,
              nodeOrigin: g,
              elevateNodesOnSelect: w,
              fitViewQueued: C,
              zIndexMode: N,
              nodesSelectionActive: M,
            } = p(),
            { nodesInitialized: b, hasSelectedNodes: S } = Lr(m, y, x, {
              nodeOrigin: g,
              nodeExtent: c,
              elevateNodesOnSelect: w,
              checkEquality: !0,
              zIndexMode: N,
            }),
            I = M && S;
          C && b
            ? (v(),
              h({
                nodes: m,
                nodesInitialized: b,
                fitViewQueued: !1,
                fitViewOptions: void 0,
                nodesSelectionActive: I,
              }))
            : h({ nodes: m, nodesInitialized: b, nodesSelectionActive: I });
        },
        setEdges: (m) => {
          const { connectionLookup: y, edgeLookup: x } = p();
          (ca(y, x, m), h({ edges: m }));
        },
        setDefaultNodesAndEdges: (m, y) => {
          if (m) {
            const { setNodes: x } = p();
            (x(m), h({ hasDefaultNodes: !0 }));
          }
          if (y) {
            const { setEdges: x } = p();
            (x(y), h({ hasDefaultEdges: !0 }));
          }
        },
        updateNodeInternals: (m) => {
          const {
              triggerNodeChanges: y,
              nodeLookup: x,
              parentLookup: g,
              domNode: w,
              nodeOrigin: C,
              nodeExtent: N,
              debug: M,
              fitViewQueued: b,
              zIndexMode: S,
            } = p(),
            { changes: I, updatedInternals: E } = kh(m, x, g, w, C, N, S);
          E &&
            (Eh(x, g, { nodeOrigin: C, nodeExtent: N, zIndexMode: S }),
            b ? (v(), h({ fitViewQueued: !1, fitViewOptions: void 0 })) : h({}),
            (I == null ? void 0 : I.length) > 0 &&
              (M && console.log("React Flow: trigger node changes", I), y == null || y(I)));
        },
        updateNodePositions: (m, y = !1) => {
          const x = [];
          let g = [];
          const {
            nodeLookup: w,
            triggerNodeChanges: C,
            connection: N,
            updateConnection: M,
            onNodesChangeMiddlewareMap: b,
          } = p();
          for (const [S, I] of m) {
            const E = w.get(S),
              k = !!(
                E != null &&
                E.expandParent &&
                E != null &&
                E.parentId &&
                I != null &&
                I.position
              ),
              O = {
                id: S,
                type: "position",
                position: k
                  ? { x: Math.max(0, I.position.x), y: Math.max(0, I.position.y) }
                  : I.position,
                dragging: y,
              };
            if (E && N.inProgress && N.fromNode.id === E.id) {
              const _ = Ke(E, N.fromHandle, Z.Left, !0);
              M({ ...N, from: _ });
            }
            (k &&
              E.parentId &&
              x.push({
                id: S,
                parentId: E.parentId,
                rect: {
                  ...I.internals.positionAbsolute,
                  width: I.measured.width ?? 0,
                  height: I.measured.height ?? 0,
                },
              }),
              g.push(O));
          }
          if (x.length > 0) {
            const { parentLookup: S, nodeOrigin: I } = p(),
              E = Jr(x, w, S, I);
            g.push(...E);
          }
          for (const S of b.values()) g = S(g);
          C(g);
        },
        triggerNodeChanges: (m) => {
          const { onNodesChange: y, setNodes: x, nodes: g, hasDefaultNodes: w, debug: C } = p();
          if (m != null && m.length) {
            if (w) {
              const N = Ep(m, g);
              x(N);
            }
            (C && console.log("React Flow: trigger node changes", m), y == null || y(m));
          }
        },
        triggerEdgeChanges: (m) => {
          const { onEdgesChange: y, setEdges: x, edges: g, hasDefaultEdges: w, debug: C } = p();
          if (m != null && m.length) {
            if (w) {
              const N = Sp(m, g);
              x(N);
            }
            (C && console.log("React Flow: trigger edge changes", m), y == null || y(m));
          }
        },
        addSelectedNodes: (m) => {
          const {
            multiSelectionActive: y,
            edgeLookup: x,
            nodeLookup: g,
            triggerNodeChanges: w,
            triggerEdgeChanges: C,
          } = p();
          if (y) {
            const N = m.map((M) => Fe(M, !0));
            w(N);
            return;
          }
          (w(Je(g, new Set([...m]), !0)), C(Je(x)));
        },
        addSelectedEdges: (m) => {
          const {
            multiSelectionActive: y,
            edgeLookup: x,
            nodeLookup: g,
            triggerNodeChanges: w,
            triggerEdgeChanges: C,
          } = p();
          if (y) {
            const N = m.map((M) => Fe(M, !0));
            C(N);
            return;
          }
          (C(Je(x, new Set([...m]))), w(Je(g, new Set(), !0)));
        },
        unselectNodesAndEdges: ({ nodes: m, edges: y } = {}) => {
          const {
              edges: x,
              nodes: g,
              nodeLookup: w,
              triggerNodeChanges: C,
              triggerEdgeChanges: N,
            } = p(),
            M = m || g,
            b = y || x,
            S = [];
          for (const E of M) {
            if (!E.selected) continue;
            const k = w.get(E.id);
            (k && (k.selected = !1), S.push(Fe(E.id, !1)));
          }
          const I = [];
          for (const E of b) E.selected && I.push(Fe(E.id, !1));
          (C(S), N(I));
        },
        setMinZoom: (m) => {
          const { panZoom: y, maxZoom: x } = p();
          (y == null || y.setScaleExtent([m, x]), h({ minZoom: m }));
        },
        setMaxZoom: (m) => {
          const { panZoom: y, minZoom: x } = p();
          (y == null || y.setScaleExtent([x, m]), h({ maxZoom: m }));
        },
        setTranslateExtent: (m) => {
          var y;
          ((y = p().panZoom) == null || y.setTranslateExtent(m), h({ translateExtent: m }));
        },
        resetSelectedElements: () => {
          const {
            edges: m,
            nodes: y,
            triggerNodeChanges: x,
            triggerEdgeChanges: g,
            elementsSelectable: w,
          } = p();
          if (!w) return;
          const C = y.reduce((M, b) => (b.selected ? [...M, Fe(b.id, !1)] : M), []),
            N = m.reduce((M, b) => (b.selected ? [...M, Fe(b.id, !1)] : M), []);
          (x(C), g(N));
        },
        setNodeExtent: (m) => {
          const {
            nodes: y,
            nodeLookup: x,
            parentLookup: g,
            nodeOrigin: w,
            elevateNodesOnSelect: C,
            nodeExtent: N,
            zIndexMode: M,
          } = p();
          (m[0][0] === N[0][0] &&
            m[0][1] === N[0][1] &&
            m[1][0] === N[1][0] &&
            m[1][1] === N[1][1]) ||
            (Lr(y, x, g, {
              nodeOrigin: w,
              nodeExtent: m,
              elevateNodesOnSelect: C,
              checkEquality: !1,
              zIndexMode: M,
            }),
            h({ nodeExtent: m }));
        },
        panBy: (m) => {
          const { transform: y, width: x, height: g, panZoom: w, translateExtent: C } = p();
          return Mh({
            delta: m,
            panZoom: w,
            transform: y,
            translateExtent: C,
            width: x,
            height: g,
          });
        },
        setCenter: async (m, y, x) => {
          const { width: g, height: w, maxZoom: C, panZoom: N } = p();
          if (!N) return !1;
          const M = typeof (x == null ? void 0 : x.zoom) < "u" ? x.zoom : C;
          return (
            await N.setViewport(
              { x: g / 2 - m * M, y: w / 2 - y * M, zoom: M },
              {
                duration: x == null ? void 0 : x.duration,
                ease: x == null ? void 0 : x.ease,
                interpolate: x == null ? void 0 : x.interpolate,
              },
            ),
            !0
          );
        },
        cancelConnection: () => {
          h({ connection: { ...qs } });
        },
        updateConnection: (m) => {
          h({ connection: m });
        },
        reset: () => h({ ...mo() }),
      };
    }, Object.is);
function qg({
  initialNodes: e,
  initialEdges: t,
  defaultNodes: n,
  defaultEdges: r,
  initialWidth: i,
  initialHeight: s,
  initialMinZoom: o,
  initialMaxZoom: a,
  initialFitViewOptions: l,
  fitView: d,
  nodeOrigin: u,
  nodeExtent: c,
  zIndexMode: f,
  children: h,
}) {
  const [p] = z.useState(() =>
    Bg({
      nodes: e,
      edges: t,
      defaultNodes: n,
      defaultEdges: r,
      width: i,
      height: s,
      fitView: d,
      minZoom: o,
      maxZoom: a,
      fitViewOptions: l,
      nodeOrigin: u,
      nodeExtent: c,
      zIndexMode: f,
    }),
  );
  return R.jsx(rp, { value: p, children: R.jsx(Pp, { children: h }) });
}
function Wg({
  children: e,
  nodes: t,
  edges: n,
  defaultNodes: r,
  defaultEdges: i,
  width: s,
  height: o,
  fitView: a,
  fitViewOptions: l,
  minZoom: d,
  maxZoom: u,
  nodeOrigin: c,
  nodeExtent: f,
  zIndexMode: h,
}) {
  return z.useContext(gn)
    ? R.jsx(R.Fragment, { children: e })
    : R.jsx(qg, {
        initialNodes: t,
        initialEdges: n,
        defaultNodes: r,
        defaultEdges: i,
        initialWidth: s,
        initialHeight: o,
        fitView: a,
        initialFitViewOptions: l,
        initialMinZoom: d,
        initialMaxZoom: u,
        nodeOrigin: c,
        nodeExtent: f,
        zIndexMode: h,
        children: e,
      });
}
const Yg = { width: "100%", height: "100%", overflow: "hidden", position: "relative", zIndex: 0 };
function Gg(
  {
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: r,
    className: i,
    nodeTypes: s,
    edgeTypes: o,
    onNodeClick: a,
    onEdgeClick: l,
    onInit: d,
    onMove: u,
    onMoveStart: c,
    onMoveEnd: f,
    onConnect: h,
    onConnectStart: p,
    onConnectEnd: v,
    onClickConnectStart: m,
    onClickConnectEnd: y,
    onNodeMouseEnter: x,
    onNodeMouseMove: g,
    onNodeMouseLeave: w,
    onNodeContextMenu: C,
    onNodeDoubleClick: N,
    onNodeDragStart: M,
    onNodeDrag: b,
    onNodeDragStop: S,
    onNodesDelete: I,
    onEdgesDelete: E,
    onDelete: k,
    onSelectionChange: O,
    onSelectionDragStart: _,
    onSelectionDrag: T,
    onSelectionDragStop: A,
    onSelectionContextMenu: D,
    onSelectionStart: V,
    onSelectionEnd: $,
    onBeforeDelete: B,
    connectionMode: q,
    connectionLineType: F = Oe.Bezier,
    connectionLineStyle: P,
    connectionLineComponent: L,
    connectionLineContainerStyle: j,
    deleteKeyCode: W = "Backspace",
    selectionKeyCode: G = "Shift",
    selectionOnDrag: H = !1,
    selectionMode: Y = Et.Full,
    panActivationKeyCode: K = "Space",
    multiSelectionKeyCode: Q = Nt() ? "Meta" : "Control",
    zoomActivationKeyCode: U = Nt() ? "Meta" : "Control",
    snapToGrid: X,
    snapGrid: J,
    onlyRenderVisibleElements: te = !1,
    selectNodesOnDrag: ne,
    nodesDraggable: se,
    autoPanOnNodeFocus: he,
    nodesConnectable: Ee,
    nodesFocusable: Se,
    nodeOrigin: Me = ba,
    edgesFocusable: dt,
    edgesReconnectable: He,
    elementsSelectable: ze = !0,
    defaultViewport: ge = mp,
    minZoom: Ie = 0.5,
    maxZoom: Pe = 2,
    translateExtent: Ve = _t,
    preventScrolling: nc = !0,
    nodeExtent: wn,
    defaultMarkerColor: rc = "#b1b1b7",
    zoomOnScroll: ic = !0,
    zoomOnPinch: oc = !0,
    panOnScroll: sc = !1,
    panOnScrollSpeed: ac = 0.5,
    panOnScrollMode: cc = We.Free,
    zoomOnDoubleClick: lc = !0,
    panOnDrag: uc = !0,
    onPaneClick: dc,
    onPaneMouseEnter: fc,
    onPaneMouseMove: hc,
    onPaneMouseLeave: pc,
    onPaneScroll: gc,
    onPaneContextMenu: mc,
    paneClickDistance: yc = 1,
    nodeClickDistance: xc = 0,
    children: wc,
    onReconnect: vc,
    onReconnectStart: bc,
    onReconnectEnd: _c,
    onEdgeContextMenu: Ec,
    onEdgeDoubleClick: Sc,
    onEdgeMouseEnter: Nc,
    onEdgeMouseMove: Cc,
    onEdgeMouseLeave: kc,
    reconnectRadius: Mc = 10,
    onNodesChange: Ic,
    onEdgesChange: Pc,
    noDragClassName: Ac = "nodrag",
    noWheelClassName: Tc = "nowheel",
    noPanClassName: ri = "nopan",
    fitView: ii,
    fitViewOptions: oi,
    connectOnClick: Rc,
    attributionPosition: Lc,
    proOptions: $c,
    defaultEdgeOptions: Dc,
    elevateNodesOnSelect: Oc = !0,
    elevateEdgesOnSelect: jc = !1,
    disableKeyboardA11y: si = !1,
    autoPanOnConnect: Hc,
    autoPanOnNodeDrag: zc,
    autoPanOnSelection: Vc = !0,
    autoPanSpeed: Fc,
    connectionRadius: Bc,
    isValidConnection: qc,
    onError: Wc,
    style: Yc,
    id: ai,
    nodeDragThreshold: Gc,
    connectionDragThreshold: Xc,
    viewport: Uc,
    onViewportChange: Kc,
    width: Zc,
    height: Qc,
    colorMode: Jc = "light",
    debug: el,
    onScroll: Tt,
    ariaLabelConfig: tl,
    zIndexMode: ci = "basic",
    ...nl
  },
  rl,
) {
  const vn = ai || "1",
    il = vp(Jc),
    ol = z.useCallback(
      (li) => {
        (li.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), Tt == null || Tt(li));
      },
      [Tt],
    );
  return R.jsx("div", {
    "data-testid": "rf__wrapper",
    ...nl,
    onScroll: ol,
    style: { ...Yc, ...Yg },
    ref: rl,
    className: le(["react-flow", i, il]),
    id: ai,
    role: "application",
    children: R.jsxs(Wg, {
      nodes: e,
      edges: t,
      width: Zc,
      height: Qc,
      fitView: ii,
      fitViewOptions: oi,
      minZoom: Ie,
      maxZoom: Pe,
      nodeOrigin: Me,
      nodeExtent: wn,
      zIndexMode: ci,
      children: [
        R.jsx(wp, {
          nodes: e,
          edges: t,
          defaultNodes: n,
          defaultEdges: r,
          onConnect: h,
          onConnectStart: p,
          onConnectEnd: v,
          onClickConnectStart: m,
          onClickConnectEnd: y,
          nodesDraggable: se,
          autoPanOnNodeFocus: he,
          nodesConnectable: Ee,
          nodesFocusable: Se,
          edgesFocusable: dt,
          edgesReconnectable: He,
          elementsSelectable: ze,
          elevateNodesOnSelect: Oc,
          elevateEdgesOnSelect: jc,
          minZoom: Ie,
          maxZoom: Pe,
          nodeExtent: wn,
          onNodesChange: Ic,
          onEdgesChange: Pc,
          snapToGrid: X,
          snapGrid: J,
          connectionMode: q,
          translateExtent: Ve,
          connectOnClick: Rc,
          defaultEdgeOptions: Dc,
          fitView: ii,
          fitViewOptions: oi,
          onNodesDelete: I,
          onEdgesDelete: E,
          onDelete: k,
          onNodeDragStart: M,
          onNodeDrag: b,
          onNodeDragStop: S,
          onSelectionDrag: T,
          onSelectionDragStart: _,
          onSelectionDragStop: A,
          onMove: u,
          onMoveStart: c,
          onMoveEnd: f,
          noPanClassName: ri,
          nodeOrigin: Me,
          rfId: vn,
          autoPanOnConnect: Hc,
          autoPanOnNodeDrag: zc,
          autoPanSpeed: Fc,
          onError: Wc,
          connectionRadius: Bc,
          isValidConnection: qc,
          selectNodesOnDrag: ne,
          nodeDragThreshold: Gc,
          connectionDragThreshold: Xc,
          onBeforeDelete: B,
          debug: el,
          ariaLabelConfig: tl,
          zIndexMode: ci,
        }),
        R.jsx(Vg, {
          onInit: d,
          onNodeClick: a,
          onEdgeClick: l,
          onNodeMouseEnter: x,
          onNodeMouseMove: g,
          onNodeMouseLeave: w,
          onNodeContextMenu: C,
          onNodeDoubleClick: N,
          nodeTypes: s,
          edgeTypes: o,
          connectionLineType: F,
          connectionLineStyle: P,
          connectionLineComponent: L,
          connectionLineContainerStyle: j,
          selectionKeyCode: G,
          selectionOnDrag: H,
          selectionMode: Y,
          deleteKeyCode: W,
          multiSelectionKeyCode: Q,
          panActivationKeyCode: K,
          zoomActivationKeyCode: U,
          onlyRenderVisibleElements: te,
          defaultViewport: ge,
          translateExtent: Ve,
          minZoom: Ie,
          maxZoom: Pe,
          preventScrolling: nc,
          zoomOnScroll: ic,
          zoomOnPinch: oc,
          zoomOnDoubleClick: lc,
          panOnScroll: sc,
          panOnScrollSpeed: ac,
          panOnScrollMode: cc,
          panOnDrag: uc,
          autoPanOnSelection: Vc,
          onPaneClick: dc,
          onPaneMouseEnter: fc,
          onPaneMouseMove: hc,
          onPaneMouseLeave: pc,
          onPaneScroll: gc,
          onPaneContextMenu: mc,
          paneClickDistance: yc,
          nodeClickDistance: xc,
          onSelectionContextMenu: D,
          onSelectionStart: V,
          onSelectionEnd: $,
          onReconnect: vc,
          onReconnectStart: bc,
          onReconnectEnd: _c,
          onEdgeContextMenu: Ec,
          onEdgeDoubleClick: Sc,
          onEdgeMouseEnter: Nc,
          onEdgeMouseMove: Cc,
          onEdgeMouseLeave: kc,
          reconnectRadius: Mc,
          defaultMarkerColor: rc,
          noDragClassName: Ac,
          noWheelClassName: Tc,
          noPanClassName: ri,
          rfId: vn,
          disableKeyboardA11y: si,
          nodeExtent: wn,
          viewport: Uc,
          onViewportChange: Kc,
        }),
        R.jsx(gp, { onSelectionChange: O }),
        wc,
        R.jsx(up, { proOptions: $c, position: Lc }),
        R.jsx(lp, { rfId: vn, disableKeyboardA11y: si }),
      ],
    }),
  });
}
var $m = Ea(Gg);
function Xg({ dimensions: e, lineWidth: t, variant: n, className: r }) {
  return R.jsx("path", {
    strokeWidth: t,
    d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`,
    className: le(["react-flow__background-pattern", n, r]),
  });
}
function Ug({ radius: e, className: t }) {
  return R.jsx("circle", {
    cx: e,
    cy: e,
    r: e,
    className: le(["react-flow__background-pattern", "dots", t]),
  });
}
var je;
(function (e) {
  ((e.Lines = "lines"), (e.Dots = "dots"), (e.Cross = "cross"));
})(je || (je = {}));
const Kg = { [je.Dots]: 1, [je.Lines]: 1, [je.Cross]: 6 },
  Zg = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function Ga({
  id: e,
  variant: t = je.Dots,
  gap: n = 20,
  size: r,
  lineWidth: i = 1,
  offset: s = 0,
  color: o,
  bgColor: a,
  style: l,
  className: d,
  patternClassName: u,
}) {
  const c = z.useRef(null),
    { transform: f, patternId: h } = ee(Zg, ie),
    p = r || Kg[t],
    v = t === je.Dots,
    m = t === je.Cross,
    y = Array.isArray(n) ? n : [n, n],
    x = [y[0] * f[2] || 1, y[1] * f[2] || 1],
    g = p * f[2],
    w = Array.isArray(s) ? s : [s, s],
    C = m ? [g, g] : x,
    N = [w[0] * f[2] || 1 + C[0] / 2, w[1] * f[2] || 1 + C[1] / 2],
    M = `${h}${e || ""}`;
  return R.jsxs("svg", {
    className: le(["react-flow__background", d]),
    style: {
      ...l,
      ...yn,
      "--xy-background-color-props": a,
      "--xy-background-pattern-color-props": o,
    },
    ref: c,
    "data-testid": "rf__background",
    children: [
      R.jsx("pattern", {
        id: M,
        x: f[0] % x[0],
        y: f[1] % x[1],
        width: x[0],
        height: x[1],
        patternUnits: "userSpaceOnUse",
        patternTransform: `translate(-${N[0]},-${N[1]})`,
        children: v
          ? R.jsx(Ug, { radius: g / 2, className: u })
          : R.jsx(Xg, { dimensions: C, lineWidth: i, variant: t, className: u }),
      }),
      R.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${M})` }),
    ],
  });
}
Ga.displayName = "Background";
const Dm = z.memo(Ga);
function Qg() {
  return R.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    children: R.jsx("path", {
      d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z",
    }),
  });
}
function Jg() {
  return R.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 5",
    children: R.jsx("path", { d: "M0 0h32v4.2H0z" }),
  });
}
function e0() {
  return R.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 30",
    children: R.jsx("path", {
      d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z",
    }),
  });
}
function t0() {
  return R.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 32",
    children: R.jsx("path", {
      d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z",
    }),
  });
}
function n0() {
  return R.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 32",
    children: R.jsx("path", {
      d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z",
    }),
  });
}
function Vt({ children: e, className: t, ...n }) {
  return R.jsx("button", {
    type: "button",
    className: le(["react-flow__controls-button", t]),
    ...n,
    children: e,
  });
}
const r0 = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig,
});
function Xa({
  style: e,
  showZoom: t = !0,
  showFitView: n = !0,
  showInteractive: r = !0,
  fitViewOptions: i,
  onZoomIn: s,
  onZoomOut: o,
  onFitView: a,
  onInteractiveChange: l,
  className: d,
  children: u,
  position: c = "bottom-left",
  orientation: f = "vertical",
  "aria-label": h,
}) {
  const p = oe(),
    { isInteractive: v, minZoomReached: m, maxZoomReached: y, ariaLabelConfig: x } = ee(r0, ie),
    { zoomIn: g, zoomOut: w, fitView: C } = ei(),
    N = () => {
      (g(), s == null || s());
    },
    M = () => {
      (w(), o == null || o());
    },
    b = () => {
      (C(i), a == null || a());
    },
    S = () => {
      (p.setState({ nodesDraggable: !v, nodesConnectable: !v, elementsSelectable: !v }),
        l == null || l(!v));
    },
    I = f === "horizontal" ? "horizontal" : "vertical";
  return R.jsxs(mn, {
    className: le(["react-flow__controls", I, d]),
    position: c,
    style: e,
    "data-testid": "rf__controls",
    "aria-label": h ?? x["controls.ariaLabel"],
    children: [
      t &&
        R.jsxs(R.Fragment, {
          children: [
            R.jsx(Vt, {
              onClick: N,
              className: "react-flow__controls-zoomin",
              title: x["controls.zoomIn.ariaLabel"],
              "aria-label": x["controls.zoomIn.ariaLabel"],
              disabled: y,
              children: R.jsx(Qg, {}),
            }),
            R.jsx(Vt, {
              onClick: M,
              className: "react-flow__controls-zoomout",
              title: x["controls.zoomOut.ariaLabel"],
              "aria-label": x["controls.zoomOut.ariaLabel"],
              disabled: m,
              children: R.jsx(Jg, {}),
            }),
          ],
        }),
      n &&
        R.jsx(Vt, {
          className: "react-flow__controls-fitview",
          onClick: b,
          title: x["controls.fitView.ariaLabel"],
          "aria-label": x["controls.fitView.ariaLabel"],
          children: R.jsx(e0, {}),
        }),
      r &&
        R.jsx(Vt, {
          className: "react-flow__controls-interactive",
          onClick: S,
          title: x["controls.interactive.ariaLabel"],
          "aria-label": x["controls.interactive.ariaLabel"],
          children: v ? R.jsx(n0, {}) : R.jsx(t0, {}),
        }),
      u,
    ],
  });
}
Xa.displayName = "Controls";
const Om = z.memo(Xa);
function i0({
  id: e,
  x: t,
  y: n,
  width: r,
  height: i,
  style: s,
  color: o,
  strokeColor: a,
  strokeWidth: l,
  className: d,
  borderRadius: u,
  shapeRendering: c,
  selected: f,
  onClick: h,
}) {
  const { background: p, backgroundColor: v } = s || {},
    m = o || p || v;
  return R.jsx("rect", {
    className: le(["react-flow__minimap-node", { selected: f }, d]),
    x: t,
    y: n,
    rx: u,
    ry: u,
    width: r,
    height: i,
    style: { fill: m, stroke: a, strokeWidth: l },
    shapeRendering: c,
    onClick: h ? (y) => h(y, e) : void 0,
  });
}
const o0 = z.memo(i0),
  s0 = (e) => e.nodes.map((t) => t.id),
  In = (e) => (e instanceof Function ? e : () => e);
function a0({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: r = 5,
  nodeStrokeWidth: i,
  nodeComponent: s = o0,
  onClick: o,
}) {
  const a = ee(s0, ie),
    l = In(t),
    d = In(e),
    u = In(n),
    c = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return R.jsx(R.Fragment, {
    children: a.map((f) =>
      R.jsx(
        l0,
        {
          id: f,
          nodeColorFunc: l,
          nodeStrokeColorFunc: d,
          nodeClassNameFunc: u,
          nodeBorderRadius: r,
          nodeStrokeWidth: i,
          NodeComponent: s,
          onClick: o,
          shapeRendering: c,
        },
        f,
      ),
    ),
  });
}
function c0({
  id: e,
  nodeColorFunc: t,
  nodeStrokeColorFunc: n,
  nodeClassNameFunc: r,
  nodeBorderRadius: i,
  nodeStrokeWidth: s,
  shapeRendering: o,
  NodeComponent: a,
  onClick: l,
}) {
  const {
    node: d,
    x: u,
    y: c,
    width: f,
    height: h,
  } = ee((p) => {
    const v = p.nodeLookup.get(e);
    if (!v) return { node: void 0, x: 0, y: 0, width: 0, height: 0 };
    const m = v.internals.userNode,
      { x: y, y: x } = v.internals.positionAbsolute,
      { width: g, height: w } = Le(m);
    return { node: m, x: y, y: x, width: g, height: w };
  }, ie);
  return !d || d.hidden || !Zs(d)
    ? null
    : R.jsx(a, {
        x: u,
        y: c,
        width: f,
        height: h,
        style: d.style,
        selected: !!d.selected,
        className: r(d),
        color: t(d),
        borderRadius: i,
        strokeColor: n(d),
        strokeWidth: s,
        shapeRendering: o,
        onClick: l,
        id: d.id,
      });
}
const l0 = z.memo(c0);
var u0 = z.memo(a0);
const d0 = 200,
  f0 = 150,
  h0 = (e) => !e.hidden,
  p0 = (e) => {
    const t = {
      x: -e.transform[0] / e.transform[2],
      y: -e.transform[1] / e.transform[2],
      width: e.width / e.transform[2],
      height: e.height / e.transform[2],
    };
    return {
      viewBB: t,
      boundingRect: e.nodeLookup.size > 0 ? Us(Pt(e.nodeLookup, { filter: h0 }), t) : t,
      rfId: e.rfId,
      panZoom: e.panZoom,
      translateExtent: e.translateExtent,
      flowWidth: e.width,
      flowHeight: e.height,
      ariaLabelConfig: e.ariaLabelConfig,
    };
  },
  g0 = "react-flow__minimap-desc";
function Ua({
  style: e,
  className: t,
  nodeStrokeColor: n,
  nodeColor: r,
  nodeClassName: i = "",
  nodeBorderRadius: s = 5,
  nodeStrokeWidth: o,
  nodeComponent: a,
  bgColor: l,
  maskColor: d,
  maskStrokeColor: u,
  maskStrokeWidth: c,
  position: f = "bottom-right",
  onClick: h,
  onNodeClick: p,
  pannable: v = !1,
  zoomable: m = !1,
  ariaLabel: y,
  inversePan: x,
  zoomStep: g = 1,
  offsetScale: w = 5,
}) {
  const C = oe(),
    N = z.useRef(null),
    {
      boundingRect: M,
      viewBB: b,
      rfId: S,
      panZoom: I,
      translateExtent: E,
      flowWidth: k,
      flowHeight: O,
      ariaLabelConfig: _,
    } = ee(p0, ie),
    T = (e == null ? void 0 : e.width) ?? d0,
    A = (e == null ? void 0 : e.height) ?? f0,
    D = M.width / T,
    V = M.height / A,
    $ = Math.max(D, V),
    B = $ * T,
    q = $ * A,
    F = w * $,
    P = M.x - (B - M.width) / 2 - F,
    L = M.y - (q - M.height) / 2 - F,
    j = B + F * 2,
    W = q + F * 2,
    G = `${g0}-${S}`,
    H = z.useRef(0),
    Y = z.useRef();
  ((H.current = $),
    z.useEffect(() => {
      if (N.current && I)
        return (
          (Y.current = Oh({
            domNode: N.current,
            panZoom: I,
            getTransform: () => C.getState().transform,
            getViewScale: () => H.current,
          })),
          () => {
            var X;
            (X = Y.current) == null || X.destroy();
          }
        );
    }, [I]),
    z.useEffect(() => {
      var X;
      (X = Y.current) == null ||
        X.update({
          translateExtent: E,
          width: k,
          height: O,
          inversePan: x,
          pannable: v,
          zoomStep: g,
          zoomable: m,
        });
    }, [v, m, x, g, E, k, O]));
  const K = h
      ? (X) => {
          var ne;
          const [J, te] = ((ne = Y.current) == null ? void 0 : ne.pointer(X)) || [0, 0];
          h(X, { x: J, y: te });
        }
      : void 0,
    Q = p
      ? z.useCallback((X, J) => {
          const te = C.getState().nodeLookup.get(J).internals.userNode;
          p(X, te);
        }, [])
      : void 0,
    U = y ?? _["minimap.ariaLabel"];
  return R.jsx(mn, {
    position: f,
    style: {
      ...e,
      "--xy-minimap-background-color-props": typeof l == "string" ? l : void 0,
      "--xy-minimap-mask-background-color-props": typeof d == "string" ? d : void 0,
      "--xy-minimap-mask-stroke-color-props": typeof u == "string" ? u : void 0,
      "--xy-minimap-mask-stroke-width-props": typeof c == "number" ? c * $ : void 0,
      "--xy-minimap-node-background-color-props": typeof r == "string" ? r : void 0,
      "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
      "--xy-minimap-node-stroke-width-props": typeof o == "number" ? o : void 0,
    },
    className: le(["react-flow__minimap", t]),
    "data-testid": "rf__minimap",
    children: R.jsxs("svg", {
      width: T,
      height: A,
      viewBox: `${P} ${L} ${j} ${W}`,
      className: "react-flow__minimap-svg",
      role: "img",
      "aria-labelledby": G,
      ref: N,
      onClick: K,
      children: [
        U && R.jsx("title", { id: G, children: U }),
        R.jsx(u0, {
          onClick: Q,
          nodeColor: r,
          nodeStrokeColor: n,
          nodeBorderRadius: s,
          nodeClassName: i,
          nodeStrokeWidth: o,
          nodeComponent: a,
        }),
        R.jsx("path", {
          className: "react-flow__minimap-mask",
          d: `M${P - F},${L - F}h${j + F * 2}v${W + F * 2}h${-j - F * 2}z
        M${b.x},${b.y}h${b.width}v${b.height}h${-b.width}z`,
          fillRule: "evenodd",
          pointerEvents: "none",
        }),
      ],
    }),
  });
}
Ua.displayName = "MiniMap";
z.memo(Ua);
const m0 = (e) => (t) => (e ? `${Math.max(1 / t.transform[2], 1)}` : void 0),
  y0 = { [lt.Line]: "right", [lt.Handle]: "bottom-right" };
function x0({
  nodeId: e,
  position: t,
  variant: n = lt.Handle,
  className: r,
  style: i = void 0,
  children: s,
  color: o,
  minWidth: a = 10,
  minHeight: l = 10,
  maxWidth: d = Number.MAX_VALUE,
  maxHeight: u = Number.MAX_VALUE,
  keepAspectRatio: c = !1,
  resizeDirection: f,
  autoScale: h = !0,
  shouldResize: p,
  onResizeStart: v,
  onResize: m,
  onResizeEnd: y,
}) {
  const x = ka(),
    g = typeof e == "string" ? e : x,
    w = oe(),
    C = z.useRef(null),
    N = n === lt.Handle,
    M = ee(z.useCallback(m0(N && h), [N, h]), ie),
    b = z.useRef(null),
    S = t ?? y0[n];
  z.useEffect(() => {
    if (!(!C.current || !g))
      return (
        b.current ||
          (b.current = Kh({
            domNode: C.current,
            nodeId: g,
            getStoreItems: () => {
              const {
                nodeLookup: E,
                transform: k,
                snapGrid: O,
                snapToGrid: _,
                nodeOrigin: T,
                domNode: A,
              } = w.getState();
              return {
                nodeLookup: E,
                transform: k,
                snapGrid: O,
                snapToGrid: _,
                nodeOrigin: T,
                paneDomNode: A,
              };
            },
            onChange: (E, k) => {
              const {
                  triggerNodeChanges: O,
                  nodeLookup: _,
                  parentLookup: T,
                  nodeOrigin: A,
                } = w.getState(),
                D = [],
                V = { x: E.x, y: E.y },
                $ = _.get(g);
              if ($ && $.expandParent && $.parentId) {
                const B = $.origin ?? A,
                  q = E.width ?? $.measured.width ?? 0,
                  F = E.height ?? $.measured.height ?? 0,
                  P = {
                    id: $.id,
                    parentId: $.parentId,
                    rect: {
                      width: q,
                      height: F,
                      ...Qs(
                        { x: E.x ?? $.position.x, y: E.y ?? $.position.y },
                        { width: q, height: F },
                        $.parentId,
                        _,
                        B,
                      ),
                    },
                  },
                  L = Jr([P], _, T, A);
                (D.push(...L),
                  (V.x = E.x ? Math.max(B[0] * q, E.x) : void 0),
                  (V.y = E.y ? Math.max(B[1] * F, E.y) : void 0));
              }
              if (V.x !== void 0 && V.y !== void 0) {
                const B = { id: g, type: "position", position: { ...V } };
                D.push(B);
              }
              if (E.width !== void 0 && E.height !== void 0) {
                const q = {
                  id: g,
                  type: "dimensions",
                  resizing: !0,
                  setAttributes: f ? (f === "horizontal" ? "width" : "height") : !0,
                  dimensions: { width: E.width, height: E.height },
                };
                D.push(q);
              }
              for (const B of k) {
                const q = { ...B, type: "position" };
                D.push(q);
              }
              O(D);
            },
            onEnd: ({ width: E, height: k }) => {
              const O = {
                id: g,
                type: "dimensions",
                resizing: !1,
                dimensions: { width: E, height: k },
              };
              w.getState().triggerNodeChanges([O]);
            },
          })),
        b.current.update({
          controlPosition: S,
          boundaries: { minWidth: a, minHeight: l, maxWidth: d, maxHeight: u },
          keepAspectRatio: c,
          resizeDirection: f,
          onResizeStart: v,
          onResize: m,
          onResizeEnd: y,
          shouldResize: p,
        }),
        () => {
          var E;
          (E = b.current) == null || E.destroy();
        }
      );
  }, [S, a, l, d, u, c, v, m, y, p]);
  const I = S.split("-");
  return R.jsx("div", {
    className: le(["react-flow__resize-control", "nodrag", ...I, n, r]),
    ref: C,
    style: { ...i, scale: M, ...(o && { [N ? "backgroundColor" : "borderColor"]: o }) },
    children: s,
  });
}
z.memo(x0);
const jm = "mathHarnessNode",
  Hm = 1600,
  zm = "We couldn’t complete the Math Harness request. Please try again.",
  Vm = "We cannot process this request at this time.",
  Fm = 248,
  Bm = 128,
  w0 = 376,
  v0 = 280,
  b0 = 640,
  _0 = 52,
  E0 = "ai-math.math-harness-writeup-panel-width.v1",
  qm = { padding: 0.18 },
  Wm = { hideAttribution: !0 };
var Pn, yo;
function ni() {
  if (yo) return Pn;
  yo = 1;
  var e = "\0",
    t = "\0",
    n = "";
  class r {
    constructor(u) {
      ae(this, "_isDirected", !0);
      ae(this, "_isMultigraph", !1);
      ae(this, "_isCompound", !1);
      ae(this, "_label");
      ae(this, "_defaultNodeLabelFn", () => {});
      ae(this, "_defaultEdgeLabelFn", () => {});
      ae(this, "_nodes", {});
      ae(this, "_in", {});
      ae(this, "_preds", {});
      ae(this, "_out", {});
      ae(this, "_sucs", {});
      ae(this, "_edgeObjs", {});
      ae(this, "_edgeLabels", {});
      ae(this, "_nodeCount", 0);
      ae(this, "_edgeCount", 0);
      ae(this, "_parent");
      ae(this, "_children");
      (u &&
        ((this._isDirected = Object.hasOwn(u, "directed") ? u.directed : !0),
        (this._isMultigraph = Object.hasOwn(u, "multigraph") ? u.multigraph : !1),
        (this._isCompound = Object.hasOwn(u, "compound") ? u.compound : !1)),
        this._isCompound && ((this._parent = {}), (this._children = {}), (this._children[t] = {})));
    }
    isDirected() {
      return this._isDirected;
    }
    isMultigraph() {
      return this._isMultigraph;
    }
    isCompound() {
      return this._isCompound;
    }
    setGraph(u) {
      return ((this._label = u), this);
    }
    graph() {
      return this._label;
    }
    setDefaultNodeLabel(u) {
      return (
        (this._defaultNodeLabelFn = u),
        typeof u != "function" && (this._defaultNodeLabelFn = () => u),
        this
      );
    }
    nodeCount() {
      return this._nodeCount;
    }
    nodes() {
      return Object.keys(this._nodes);
    }
    sources() {
      var u = this;
      return this.nodes().filter((c) => Object.keys(u._in[c]).length === 0);
    }
    sinks() {
      var u = this;
      return this.nodes().filter((c) => Object.keys(u._out[c]).length === 0);
    }
    setNodes(u, c) {
      var f = arguments,
        h = this;
      return (
        u.forEach(function (p) {
          f.length > 1 ? h.setNode(p, c) : h.setNode(p);
        }),
        this
      );
    }
    setNode(u, c) {
      return Object.hasOwn(this._nodes, u)
        ? (arguments.length > 1 && (this._nodes[u] = c), this)
        : ((this._nodes[u] = arguments.length > 1 ? c : this._defaultNodeLabelFn(u)),
          this._isCompound &&
            ((this._parent[u] = t), (this._children[u] = {}), (this._children[t][u] = !0)),
          (this._in[u] = {}),
          (this._preds[u] = {}),
          (this._out[u] = {}),
          (this._sucs[u] = {}),
          ++this._nodeCount,
          this);
    }
    node(u) {
      return this._nodes[u];
    }
    hasNode(u) {
      return Object.hasOwn(this._nodes, u);
    }
    removeNode(u) {
      var c = this;
      if (Object.hasOwn(this._nodes, u)) {
        var f = (h) => c.removeEdge(c._edgeObjs[h]);
        (delete this._nodes[u],
          this._isCompound &&
            (this._removeFromParentsChildList(u),
            delete this._parent[u],
            this.children(u).forEach(function (h) {
              c.setParent(h);
            }),
            delete this._children[u]),
          Object.keys(this._in[u]).forEach(f),
          delete this._in[u],
          delete this._preds[u],
          Object.keys(this._out[u]).forEach(f),
          delete this._out[u],
          delete this._sucs[u],
          --this._nodeCount);
      }
      return this;
    }
    setParent(u, c) {
      if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
      if (c === void 0) c = t;
      else {
        c += "";
        for (var f = c; f !== void 0; f = this.parent(f))
          if (f === u)
            throw new Error("Setting " + c + " as parent of " + u + " would create a cycle");
        this.setNode(c);
      }
      return (
        this.setNode(u),
        this._removeFromParentsChildList(u),
        (this._parent[u] = c),
        (this._children[c][u] = !0),
        this
      );
    }
    _removeFromParentsChildList(u) {
      delete this._children[this._parent[u]][u];
    }
    parent(u) {
      if (this._isCompound) {
        var c = this._parent[u];
        if (c !== t) return c;
      }
    }
    children(u = t) {
      if (this._isCompound) {
        var c = this._children[u];
        if (c) return Object.keys(c);
      } else {
        if (u === t) return this.nodes();
        if (this.hasNode(u)) return [];
      }
    }
    predecessors(u) {
      var c = this._preds[u];
      if (c) return Object.keys(c);
    }
    successors(u) {
      var c = this._sucs[u];
      if (c) return Object.keys(c);
    }
    neighbors(u) {
      var c = this.predecessors(u);
      if (c) {
        const h = new Set(c);
        for (var f of this.successors(u)) h.add(f);
        return Array.from(h.values());
      }
    }
    isLeaf(u) {
      var c;
      return (
        this.isDirected() ? (c = this.successors(u)) : (c = this.neighbors(u)),
        c.length === 0
      );
    }
    filterNodes(u) {
      var c = new this.constructor({
        directed: this._isDirected,
        multigraph: this._isMultigraph,
        compound: this._isCompound,
      });
      c.setGraph(this.graph());
      var f = this;
      (Object.entries(this._nodes).forEach(function ([v, m]) {
        u(v) && c.setNode(v, m);
      }),
        Object.values(this._edgeObjs).forEach(function (v) {
          c.hasNode(v.v) && c.hasNode(v.w) && c.setEdge(v, f.edge(v));
        }));
      var h = {};
      function p(v) {
        var m = f.parent(v);
        return m === void 0 || c.hasNode(m) ? ((h[v] = m), m) : m in h ? h[m] : p(m);
      }
      return (this._isCompound && c.nodes().forEach((v) => c.setParent(v, p(v))), c);
    }
    setDefaultEdgeLabel(u) {
      return (
        (this._defaultEdgeLabelFn = u),
        typeof u != "function" && (this._defaultEdgeLabelFn = () => u),
        this
      );
    }
    edgeCount() {
      return this._edgeCount;
    }
    edges() {
      return Object.values(this._edgeObjs);
    }
    setPath(u, c) {
      var f = this,
        h = arguments;
      return (
        u.reduce(function (p, v) {
          return (h.length > 1 ? f.setEdge(p, v, c) : f.setEdge(p, v), v);
        }),
        this
      );
    }
    setEdge() {
      var u,
        c,
        f,
        h,
        p = !1,
        v = arguments[0];
      (typeof v == "object" && v !== null && "v" in v
        ? ((u = v.v),
          (c = v.w),
          (f = v.name),
          arguments.length === 2 && ((h = arguments[1]), (p = !0)))
        : ((u = v),
          (c = arguments[1]),
          (f = arguments[3]),
          arguments.length > 2 && ((h = arguments[2]), (p = !0))),
        (u = "" + u),
        (c = "" + c),
        f !== void 0 && (f = "" + f));
      var m = o(this._isDirected, u, c, f);
      if (Object.hasOwn(this._edgeLabels, m)) return (p && (this._edgeLabels[m] = h), this);
      if (f !== void 0 && !this._isMultigraph)
        throw new Error("Cannot set a named edge when isMultigraph = false");
      (this.setNode(u),
        this.setNode(c),
        (this._edgeLabels[m] = p ? h : this._defaultEdgeLabelFn(u, c, f)));
      var y = a(this._isDirected, u, c, f);
      return (
        (u = y.v),
        (c = y.w),
        Object.freeze(y),
        (this._edgeObjs[m] = y),
        i(this._preds[c], u),
        i(this._sucs[u], c),
        (this._in[c][m] = y),
        (this._out[u][m] = y),
        this._edgeCount++,
        this
      );
    }
    edge(u, c, f) {
      var h =
        arguments.length === 1 ? l(this._isDirected, arguments[0]) : o(this._isDirected, u, c, f);
      return this._edgeLabels[h];
    }
    edgeAsObj() {
      const u = this.edge(...arguments);
      return typeof u != "object" ? { label: u } : u;
    }
    hasEdge(u, c, f) {
      var h =
        arguments.length === 1 ? l(this._isDirected, arguments[0]) : o(this._isDirected, u, c, f);
      return Object.hasOwn(this._edgeLabels, h);
    }
    removeEdge(u, c, f) {
      var h =
          arguments.length === 1 ? l(this._isDirected, arguments[0]) : o(this._isDirected, u, c, f),
        p = this._edgeObjs[h];
      return (
        p &&
          ((u = p.v),
          (c = p.w),
          delete this._edgeLabels[h],
          delete this._edgeObjs[h],
          s(this._preds[c], u),
          s(this._sucs[u], c),
          delete this._in[c][h],
          delete this._out[u][h],
          this._edgeCount--),
        this
      );
    }
    inEdges(u, c) {
      var f = this._in[u];
      if (f) {
        var h = Object.values(f);
        return c ? h.filter((p) => p.v === c) : h;
      }
    }
    outEdges(u, c) {
      var f = this._out[u];
      if (f) {
        var h = Object.values(f);
        return c ? h.filter((p) => p.w === c) : h;
      }
    }
    nodeEdges(u, c) {
      var f = this.inEdges(u, c);
      if (f) return f.concat(this.outEdges(u, c));
    }
  }
  function i(d, u) {
    d[u] ? d[u]++ : (d[u] = 1);
  }
  function s(d, u) {
    --d[u] || delete d[u];
  }
  function o(d, u, c, f) {
    var h = "" + u,
      p = "" + c;
    if (!d && h > p) {
      var v = h;
      ((h = p), (p = v));
    }
    return h + n + p + n + (f === void 0 ? e : f);
  }
  function a(d, u, c, f) {
    var h = "" + u,
      p = "" + c;
    if (!d && h > p) {
      var v = h;
      ((h = p), (p = v));
    }
    var m = { v: h, w: p };
    return (f && (m.name = f), m);
  }
  function l(d, u) {
    return o(d, u.v, u.w, u.name);
  }
  return ((Pn = r), Pn);
}
var An, xo;
function S0() {
  return (xo || ((xo = 1), (An = "2.2.4")), An);
}
var Tn, wo;
function N0() {
  return (wo || ((wo = 1), (Tn = { Graph: ni(), version: S0() })), Tn);
}
var Rn, vo;
function C0() {
  if (vo) return Rn;
  vo = 1;
  var e = ni();
  Rn = { write: t, read: i };
  function t(s) {
    var o = {
      options: { directed: s.isDirected(), multigraph: s.isMultigraph(), compound: s.isCompound() },
      nodes: n(s),
      edges: r(s),
    };
    return (s.graph() !== void 0 && (o.value = structuredClone(s.graph())), o);
  }
  function n(s) {
    return s.nodes().map(function (o) {
      var a = s.node(o),
        l = s.parent(o),
        d = { v: o };
      return (a !== void 0 && (d.value = a), l !== void 0 && (d.parent = l), d);
    });
  }
  function r(s) {
    return s.edges().map(function (o) {
      var a = s.edge(o),
        l = { v: o.v, w: o.w };
      return (o.name !== void 0 && (l.name = o.name), a !== void 0 && (l.value = a), l);
    });
  }
  function i(s) {
    var o = new e(s.options).setGraph(s.value);
    return (
      s.nodes.forEach(function (a) {
        (o.setNode(a.v, a.value), a.parent && o.setParent(a.v, a.parent));
      }),
      s.edges.forEach(function (a) {
        o.setEdge({ v: a.v, w: a.w, name: a.name }, a.value);
      }),
      o
    );
  }
  return Rn;
}
var Ln, bo;
function k0() {
  if (bo) return Ln;
  ((bo = 1), (Ln = e));
  function e(t) {
    var n = {},
      r = [],
      i;
    function s(o) {
      Object.hasOwn(n, o) ||
        ((n[o] = !0), i.push(o), t.successors(o).forEach(s), t.predecessors(o).forEach(s));
    }
    return (
      t.nodes().forEach(function (o) {
        ((i = []), s(o), i.length && r.push(i));
      }),
      r
    );
  }
  return Ln;
}
var $n, _o;
function Ka() {
  if (_o) return $n;
  _o = 1;
  class e {
    constructor() {
      ae(this, "_arr", []);
      ae(this, "_keyIndices", {});
    }
    size() {
      return this._arr.length;
    }
    keys() {
      return this._arr.map(function (n) {
        return n.key;
      });
    }
    has(n) {
      return Object.hasOwn(this._keyIndices, n);
    }
    priority(n) {
      var r = this._keyIndices[n];
      if (r !== void 0) return this._arr[r].priority;
    }
    min() {
      if (this.size() === 0) throw new Error("Queue underflow");
      return this._arr[0].key;
    }
    add(n, r) {
      var i = this._keyIndices;
      if (((n = String(n)), !Object.hasOwn(i, n))) {
        var s = this._arr,
          o = s.length;
        return ((i[n] = o), s.push({ key: n, priority: r }), this._decrease(o), !0);
      }
      return !1;
    }
    removeMin() {
      this._swap(0, this._arr.length - 1);
      var n = this._arr.pop();
      return (delete this._keyIndices[n.key], this._heapify(0), n.key);
    }
    decrease(n, r) {
      var i = this._keyIndices[n];
      if (r > this._arr[i].priority)
        throw new Error(
          "New priority is greater than current priority. Key: " +
            n +
            " Old: " +
            this._arr[i].priority +
            " New: " +
            r,
        );
      ((this._arr[i].priority = r), this._decrease(i));
    }
    _heapify(n) {
      var r = this._arr,
        i = 2 * n,
        s = i + 1,
        o = n;
      i < r.length &&
        ((o = r[i].priority < r[o].priority ? i : o),
        s < r.length && (o = r[s].priority < r[o].priority ? s : o),
        o !== n && (this._swap(n, o), this._heapify(o)));
    }
    _decrease(n) {
      for (
        var r = this._arr, i = r[n].priority, s;
        n !== 0 && ((s = n >> 1), !(r[s].priority < i));
      )
        (this._swap(n, s), (n = s));
    }
    _swap(n, r) {
      var i = this._arr,
        s = this._keyIndices,
        o = i[n],
        a = i[r];
      ((i[n] = a), (i[r] = o), (s[a.key] = n), (s[o.key] = r));
    }
  }
  return (($n = e), $n);
}
var Dn, Eo;
function Za() {
  if (Eo) return Dn;
  Eo = 1;
  var e = Ka();
  Dn = n;
  var t = () => 1;
  function n(i, s, o, a) {
    return r(
      i,
      String(s),
      o || t,
      a ||
        function (l) {
          return i.outEdges(l);
        },
    );
  }
  function r(i, s, o, a) {
    var l = {},
      d = new e(),
      u,
      c,
      f = function (h) {
        var p = h.v !== u ? h.v : h.w,
          v = l[p],
          m = o(h),
          y = c.distance + m;
        if (m < 0)
          throw new Error(
            "dijkstra does not allow negative edge weights. Bad edge: " + h + " Weight: " + m,
          );
        y < v.distance && ((v.distance = y), (v.predecessor = u), d.decrease(p, y));
      };
    for (
      i.nodes().forEach(function (h) {
        var p = h === s ? 0 : Number.POSITIVE_INFINITY;
        ((l[h] = { distance: p }), d.add(h, p));
      });
      d.size() > 0 && ((u = d.removeMin()), (c = l[u]), c.distance !== Number.POSITIVE_INFINITY);
    )
      a(u).forEach(f);
    return l;
  }
  return Dn;
}
var On, So;
function M0() {
  if (So) return On;
  So = 1;
  var e = Za();
  On = t;
  function t(n, r, i) {
    return n.nodes().reduce(function (s, o) {
      return ((s[o] = e(n, o, r, i)), s);
    }, {});
  }
  return On;
}
var jn, No;
function Qa() {
  if (No) return jn;
  ((No = 1), (jn = e));
  function e(t) {
    var n = 0,
      r = [],
      i = {},
      s = [];
    function o(a) {
      var l = (i[a] = { onStack: !0, lowlink: n, index: n++ });
      if (
        (r.push(a),
        t.successors(a).forEach(function (c) {
          Object.hasOwn(i, c)
            ? i[c].onStack && (l.lowlink = Math.min(l.lowlink, i[c].index))
            : (o(c), (l.lowlink = Math.min(l.lowlink, i[c].lowlink)));
        }),
        l.lowlink === l.index)
      ) {
        var d = [],
          u;
        do ((u = r.pop()), (i[u].onStack = !1), d.push(u));
        while (a !== u);
        s.push(d);
      }
    }
    return (
      t.nodes().forEach(function (a) {
        Object.hasOwn(i, a) || o(a);
      }),
      s
    );
  }
  return jn;
}
var Hn, Co;
function I0() {
  if (Co) return Hn;
  Co = 1;
  var e = Qa();
  Hn = t;
  function t(n) {
    return e(n).filter(function (r) {
      return r.length > 1 || (r.length === 1 && n.hasEdge(r[0], r[0]));
    });
  }
  return Hn;
}
var zn, ko;
function P0() {
  if (ko) return zn;
  ((ko = 1), (zn = t));
  var e = () => 1;
  function t(r, i, s) {
    return n(
      r,
      i || e,
      s ||
        function (o) {
          return r.outEdges(o);
        },
    );
  }
  function n(r, i, s) {
    var o = {},
      a = r.nodes();
    return (
      a.forEach(function (l) {
        ((o[l] = {}),
          (o[l][l] = { distance: 0 }),
          a.forEach(function (d) {
            l !== d && (o[l][d] = { distance: Number.POSITIVE_INFINITY });
          }),
          s(l).forEach(function (d) {
            var u = d.v === l ? d.w : d.v,
              c = i(d);
            o[l][u] = { distance: c, predecessor: l };
          }));
      }),
      a.forEach(function (l) {
        var d = o[l];
        a.forEach(function (u) {
          var c = o[u];
          a.forEach(function (f) {
            var h = c[l],
              p = d[f],
              v = c[f],
              m = h.distance + p.distance;
            m < v.distance && ((v.distance = m), (v.predecessor = p.predecessor));
          });
        });
      }),
      o
    );
  }
  return zn;
}
var Vn, Mo;
function Ja() {
  if (Mo) return Vn;
  Mo = 1;
  function e(n) {
    var r = {},
      i = {},
      s = [];
    function o(a) {
      if (Object.hasOwn(i, a)) throw new t();
      Object.hasOwn(r, a) ||
        ((i[a] = !0), (r[a] = !0), n.predecessors(a).forEach(o), delete i[a], s.push(a));
    }
    if ((n.sinks().forEach(o), Object.keys(r).length !== n.nodeCount())) throw new t();
    return s;
  }
  class t extends Error {
    constructor() {
      super(...arguments);
    }
  }
  return ((Vn = e), (e.CycleException = t), Vn);
}
var Fn, Io;
function A0() {
  if (Io) return Fn;
  Io = 1;
  var e = Ja();
  Fn = t;
  function t(n) {
    try {
      e(n);
    } catch (r) {
      if (r instanceof e.CycleException) return !1;
      throw r;
    }
    return !0;
  }
  return Fn;
}
var Bn, Po;
function ec() {
  if (Po) return Bn;
  ((Po = 1), (Bn = e));
  function e(i, s, o) {
    Array.isArray(s) || (s = [s]);
    var a = i.isDirected() ? (c) => i.successors(c) : (c) => i.neighbors(c),
      l = o === "post" ? t : n,
      d = [],
      u = {};
    return (
      s.forEach((c) => {
        if (!i.hasNode(c)) throw new Error("Graph does not have node: " + c);
        l(c, a, u, d);
      }),
      d
    );
  }
  function t(i, s, o, a) {
    for (var l = [[i, !1]]; l.length > 0;) {
      var d = l.pop();
      d[1]
        ? a.push(d[0])
        : Object.hasOwn(o, d[0]) ||
          ((o[d[0]] = !0), l.push([d[0], !0]), r(s(d[0]), (u) => l.push([u, !1])));
    }
  }
  function n(i, s, o, a) {
    for (var l = [i]; l.length > 0;) {
      var d = l.pop();
      Object.hasOwn(o, d) || ((o[d] = !0), a.push(d), r(s(d), (u) => l.push(u)));
    }
  }
  function r(i, s) {
    for (var o = i.length; o--;) s(i[o], o, i);
    return i;
  }
  return Bn;
}
var qn, Ao;
function T0() {
  if (Ao) return qn;
  Ao = 1;
  var e = ec();
  qn = t;
  function t(n, r) {
    return e(n, r, "post");
  }
  return qn;
}
var Wn, To;
function R0() {
  if (To) return Wn;
  To = 1;
  var e = ec();
  Wn = t;
  function t(n, r) {
    return e(n, r, "pre");
  }
  return Wn;
}
var Yn, Ro;
function L0() {
  if (Ro) return Yn;
  Ro = 1;
  var e = ni(),
    t = Ka();
  Yn = n;
  function n(r, i) {
    var s = new e(),
      o = {},
      a = new t(),
      l;
    function d(c) {
      var f = c.v === l ? c.w : c.v,
        h = a.priority(f);
      if (h !== void 0) {
        var p = i(c);
        p < h && ((o[f] = l), a.decrease(f, p));
      }
    }
    if (r.nodeCount() === 0) return s;
    (r.nodes().forEach(function (c) {
      (a.add(c, Number.POSITIVE_INFINITY), s.setNode(c));
    }),
      a.decrease(r.nodes()[0], 0));
    for (var u = !1; a.size() > 0;) {
      if (((l = a.removeMin()), Object.hasOwn(o, l))) s.setEdge(l, o[l]);
      else {
        if (u) throw new Error("Input graph is not connected: " + r);
        u = !0;
      }
      r.nodeEdges(l).forEach(d);
    }
    return s;
  }
  return Yn;
}
var Gn, Lo;
function $0() {
  return (
    Lo ||
      ((Lo = 1),
      (Gn = {
        components: k0(),
        dijkstra: Za(),
        dijkstraAll: M0(),
        findCycles: I0(),
        floydWarshall: P0(),
        isAcyclic: A0(),
        postorder: T0(),
        preorder: R0(),
        prim: L0(),
        tarjan: Qa(),
        topsort: Ja(),
      })),
    Gn
  );
}
var Xn, $o;
function be() {
  if ($o) return Xn;
  $o = 1;
  var e = N0();
  return ((Xn = { Graph: e.Graph, json: C0(), alg: $0(), version: e.version }), Xn);
}
var Un, Do;
function D0() {
  if (Do) return Un;
  Do = 1;
  class e {
    constructor() {
      let i = {};
      ((i._next = i._prev = i), (this._sentinel = i));
    }
    dequeue() {
      let i = this._sentinel,
        s = i._prev;
      if (s !== i) return (t(s), s);
    }
    enqueue(i) {
      let s = this._sentinel;
      (i._prev && i._next && t(i),
        (i._next = s._next),
        (s._next._prev = i),
        (s._next = i),
        (i._prev = s));
    }
    toString() {
      let i = [],
        s = this._sentinel,
        o = s._prev;
      for (; o !== s;) (i.push(JSON.stringify(o, n)), (o = o._prev));
      return "[" + i.join(", ") + "]";
    }
  }
  function t(r) {
    ((r._prev._next = r._next), (r._next._prev = r._prev), delete r._next, delete r._prev);
  }
  function n(r, i) {
    if (r !== "_next" && r !== "_prev") return i;
  }
  return ((Un = e), Un);
}
var Kn, Oo;
function O0() {
  if (Oo) return Kn;
  Oo = 1;
  let e = be().Graph,
    t = D0();
  Kn = r;
  let n = () => 1;
  function r(d, u) {
    if (d.nodeCount() <= 1) return [];
    let c = o(d, u || n);
    return i(c.graph, c.buckets, c.zeroIdx).flatMap((h) => d.outEdges(h.v, h.w));
  }
  function i(d, u, c) {
    let f = [],
      h = u[u.length - 1],
      p = u[0],
      v;
    for (; d.nodeCount();) {
      for (; (v = p.dequeue());) s(d, u, c, v);
      for (; (v = h.dequeue());) s(d, u, c, v);
      if (d.nodeCount()) {
        for (let m = u.length - 2; m > 0; --m)
          if (((v = u[m].dequeue()), v)) {
            f = f.concat(s(d, u, c, v, !0));
            break;
          }
      }
    }
    return f;
  }
  function s(d, u, c, f, h) {
    let p = h ? [] : void 0;
    return (
      d.inEdges(f.v).forEach((v) => {
        let m = d.edge(v),
          y = d.node(v.v);
        (h && p.push({ v: v.v, w: v.w }), (y.out -= m), a(u, c, y));
      }),
      d.outEdges(f.v).forEach((v) => {
        let m = d.edge(v),
          y = v.w,
          x = d.node(y);
        ((x.in -= m), a(u, c, x));
      }),
      d.removeNode(f.v),
      p
    );
  }
  function o(d, u) {
    let c = new e(),
      f = 0,
      h = 0;
    (d.nodes().forEach((m) => {
      c.setNode(m, { v: m, in: 0, out: 0 });
    }),
      d.edges().forEach((m) => {
        let y = c.edge(m.v, m.w) || 0,
          x = u(m),
          g = y + x;
        (c.setEdge(m.v, m.w, g),
          (h = Math.max(h, (c.node(m.v).out += x))),
          (f = Math.max(f, (c.node(m.w).in += x))));
      }));
    let p = l(h + f + 3).map(() => new t()),
      v = f + 1;
    return (
      c.nodes().forEach((m) => {
        a(p, v, c.node(m));
      }),
      { graph: c, buckets: p, zeroIdx: v }
    );
  }
  function a(d, u, c) {
    c.out ? (c.in ? d[c.out - c.in + u].enqueue(c) : d[d.length - 1].enqueue(c)) : d[0].enqueue(c);
  }
  function l(d) {
    const u = [];
    for (let c = 0; c < d; c++) u.push(c);
    return u;
  }
  return Kn;
}
var Zn, jo;
function ce() {
  if (jo) return Zn;
  jo = 1;
  let e = be().Graph;
  Zn = {
    addBorderNode: u,
    addDummyNode: t,
    applyWithChunking: h,
    asNonCompoundGraph: r,
    buildLayerMatrix: a,
    intersectRect: o,
    mapValues: N,
    maxRank: p,
    normalizeRanks: l,
    notime: y,
    partition: v,
    pick: C,
    predecessorWeights: s,
    range: w,
    removeEmptyRanks: d,
    simplify: n,
    successorWeights: i,
    time: m,
    uniqueId: g,
    zipObject: M,
  };
  function t(b, S, I, E) {
    for (var k = E; b.hasNode(k);) k = g(E);
    return ((I.dummy = S), b.setNode(k, I), k);
  }
  function n(b) {
    let S = new e().setGraph(b.graph());
    return (
      b.nodes().forEach((I) => S.setNode(I, b.node(I))),
      b.edges().forEach((I) => {
        let E = S.edge(I.v, I.w) || { weight: 0, minlen: 1 },
          k = b.edge(I);
        S.setEdge(I.v, I.w, { weight: E.weight + k.weight, minlen: Math.max(E.minlen, k.minlen) });
      }),
      S
    );
  }
  function r(b) {
    let S = new e({ multigraph: b.isMultigraph() }).setGraph(b.graph());
    return (
      b.nodes().forEach((I) => {
        b.children(I).length || S.setNode(I, b.node(I));
      }),
      b.edges().forEach((I) => {
        S.setEdge(I, b.edge(I));
      }),
      S
    );
  }
  function i(b) {
    let S = b.nodes().map((I) => {
      let E = {};
      return (
        b.outEdges(I).forEach((k) => {
          E[k.w] = (E[k.w] || 0) + b.edge(k).weight;
        }),
        E
      );
    });
    return M(b.nodes(), S);
  }
  function s(b) {
    let S = b.nodes().map((I) => {
      let E = {};
      return (
        b.inEdges(I).forEach((k) => {
          E[k.v] = (E[k.v] || 0) + b.edge(k).weight;
        }),
        E
      );
    });
    return M(b.nodes(), S);
  }
  function o(b, S) {
    let I = b.x,
      E = b.y,
      k = S.x - I,
      O = S.y - E,
      _ = b.width / 2,
      T = b.height / 2;
    if (!k && !O) throw new Error("Not possible to find intersection inside of the rectangle");
    let A, D;
    return (
      Math.abs(O) * _ > Math.abs(k) * T
        ? (O < 0 && (T = -T), (A = (T * k) / O), (D = T))
        : (k < 0 && (_ = -_), (A = _), (D = (_ * O) / k)),
      { x: I + A, y: E + D }
    );
  }
  function a(b) {
    let S = w(p(b) + 1).map(() => []);
    return (
      b.nodes().forEach((I) => {
        let E = b.node(I),
          k = E.rank;
        k !== void 0 && (S[k][E.order] = I);
      }),
      S
    );
  }
  function l(b) {
    let S = b.nodes().map((E) => {
        let k = b.node(E).rank;
        return k === void 0 ? Number.MAX_VALUE : k;
      }),
      I = h(Math.min, S);
    b.nodes().forEach((E) => {
      let k = b.node(E);
      Object.hasOwn(k, "rank") && (k.rank -= I);
    });
  }
  function d(b) {
    let S = b.nodes().map((_) => b.node(_).rank),
      I = h(Math.min, S),
      E = [];
    b.nodes().forEach((_) => {
      let T = b.node(_).rank - I;
      (E[T] || (E[T] = []), E[T].push(_));
    });
    let k = 0,
      O = b.graph().nodeRankFactor;
    Array.from(E).forEach((_, T) => {
      _ === void 0 && T % O !== 0
        ? --k
        : _ !== void 0 && k && _.forEach((A) => (b.node(A).rank += k));
    });
  }
  function u(b, S, I, E) {
    let k = { width: 0, height: 0 };
    return (arguments.length >= 4 && ((k.rank = I), (k.order = E)), t(b, "border", k, S));
  }
  function c(b, S = f) {
    const I = [];
    for (let E = 0; E < b.length; E += S) {
      const k = b.slice(E, E + S);
      I.push(k);
    }
    return I;
  }
  const f = 65535;
  function h(b, S) {
    if (S.length > f) {
      const I = c(S);
      return b.apply(
        null,
        I.map((E) => b.apply(null, E)),
      );
    } else return b.apply(null, S);
  }
  function p(b) {
    const I = b.nodes().map((E) => {
      let k = b.node(E).rank;
      return k === void 0 ? Number.MIN_VALUE : k;
    });
    return h(Math.max, I);
  }
  function v(b, S) {
    let I = { lhs: [], rhs: [] };
    return (
      b.forEach((E) => {
        S(E) ? I.lhs.push(E) : I.rhs.push(E);
      }),
      I
    );
  }
  function m(b, S) {
    let I = Date.now();
    try {
      return S();
    } finally {
      console.log(b + " time: " + (Date.now() - I) + "ms");
    }
  }
  function y(b, S) {
    return S();
  }
  let x = 0;
  function g(b) {
    var S = ++x;
    return b + ("" + S);
  }
  function w(b, S, I = 1) {
    S == null && ((S = b), (b = 0));
    let E = (O) => O < S;
    I < 0 && (E = (O) => S < O);
    const k = [];
    for (let O = b; E(O); O += I) k.push(O);
    return k;
  }
  function C(b, S) {
    const I = {};
    for (const E of S) b[E] !== void 0 && (I[E] = b[E]);
    return I;
  }
  function N(b, S) {
    let I = S;
    return (
      typeof S == "string" && (I = (E) => E[S]),
      Object.entries(b).reduce((E, [k, O]) => ((E[k] = I(O, k)), E), {})
    );
  }
  function M(b, S) {
    return b.reduce((I, E, k) => ((I[E] = S[k]), I), {});
  }
  return Zn;
}
var Qn, Ho;
function j0() {
  if (Ho) return Qn;
  Ho = 1;
  let e = O0(),
    t = ce().uniqueId;
  Qn = { run: n, undo: i };
  function n(s) {
    (s.graph().acyclicer === "greedy" ? e(s, a(s)) : r(s)).forEach((l) => {
      let d = s.edge(l);
      (s.removeEdge(l),
        (d.forwardName = l.name),
        (d.reversed = !0),
        s.setEdge(l.w, l.v, d, t("rev")));
    });
    function a(l) {
      return (d) => l.edge(d).weight;
    }
  }
  function r(s) {
    let o = [],
      a = {},
      l = {};
    function d(u) {
      Object.hasOwn(l, u) ||
        ((l[u] = !0),
        (a[u] = !0),
        s.outEdges(u).forEach((c) => {
          Object.hasOwn(a, c.w) ? o.push(c) : d(c.w);
        }),
        delete a[u]);
    }
    return (s.nodes().forEach(d), o);
  }
  function i(s) {
    s.edges().forEach((o) => {
      let a = s.edge(o);
      if (a.reversed) {
        s.removeEdge(o);
        let l = a.forwardName;
        (delete a.reversed, delete a.forwardName, s.setEdge(o.w, o.v, a, l));
      }
    });
  }
  return Qn;
}
var Jn, zo;
function H0() {
  if (zo) return Jn;
  zo = 1;
  let e = ce();
  Jn = { run: t, undo: r };
  function t(i) {
    ((i.graph().dummyChains = []), i.edges().forEach((s) => n(i, s)));
  }
  function n(i, s) {
    let o = s.v,
      a = i.node(o).rank,
      l = s.w,
      d = i.node(l).rank,
      u = s.name,
      c = i.edge(s),
      f = c.labelRank;
    if (d === a + 1) return;
    i.removeEdge(s);
    let h, p, v;
    for (v = 0, ++a; a < d; ++v, ++a)
      ((c.points = []),
        (p = { width: 0, height: 0, edgeLabel: c, edgeObj: s, rank: a }),
        (h = e.addDummyNode(i, "edge", p, "_d")),
        a === f &&
          ((p.width = c.width),
          (p.height = c.height),
          (p.dummy = "edge-label"),
          (p.labelpos = c.labelpos)),
        i.setEdge(o, h, { weight: c.weight }, u),
        v === 0 && i.graph().dummyChains.push(h),
        (o = h));
    i.setEdge(o, l, { weight: c.weight }, u);
  }
  function r(i) {
    i.graph().dummyChains.forEach((s) => {
      let o = i.node(s),
        a = o.edgeLabel,
        l;
      for (i.setEdge(o.edgeObj, a); o.dummy;)
        ((l = i.successors(s)[0]),
          i.removeNode(s),
          a.points.push({ x: o.x, y: o.y }),
          o.dummy === "edge-label" &&
            ((a.x = o.x), (a.y = o.y), (a.width = o.width), (a.height = o.height)),
          (s = l),
          (o = i.node(s)));
    });
  }
  return Jn;
}
var er, Vo;
function sn() {
  if (Vo) return er;
  Vo = 1;
  const { applyWithChunking: e } = ce();
  er = { longestPath: t, slack: n };
  function t(r) {
    var i = {};
    function s(o) {
      var a = r.node(o);
      if (Object.hasOwn(i, o)) return a.rank;
      i[o] = !0;
      let l = r
        .outEdges(o)
        .map((u) => (u == null ? Number.POSITIVE_INFINITY : s(u.w) - r.edge(u).minlen));
      var d = e(Math.min, l);
      return (d === Number.POSITIVE_INFINITY && (d = 0), (a.rank = d));
    }
    r.sources().forEach(s);
  }
  function n(r, i) {
    return r.node(i.w).rank - r.node(i.v).rank - r.edge(i).minlen;
  }
  return er;
}
var tr, Fo;
function tc() {
  if (Fo) return tr;
  Fo = 1;
  var e = be().Graph,
    t = sn().slack;
  tr = n;
  function n(o) {
    var a = new e({ directed: !1 }),
      l = o.nodes()[0],
      d = o.nodeCount();
    a.setNode(l, {});
    for (var u, c; r(a, o) < d;)
      ((u = i(a, o)), (c = a.hasNode(u.v) ? t(o, u) : -t(o, u)), s(a, o, c));
    return a;
  }
  function r(o, a) {
    function l(d) {
      a.nodeEdges(d).forEach((u) => {
        var c = u.v,
          f = d === c ? u.w : c;
        !o.hasNode(f) && !t(a, u) && (o.setNode(f, {}), o.setEdge(d, f, {}), l(f));
      });
    }
    return (o.nodes().forEach(l), o.nodeCount());
  }
  function i(o, a) {
    return a.edges().reduce(
      (d, u) => {
        let c = Number.POSITIVE_INFINITY;
        return (o.hasNode(u.v) !== o.hasNode(u.w) && (c = t(a, u)), c < d[0] ? [c, u] : d);
      },
      [Number.POSITIVE_INFINITY, null],
    )[1];
  }
  function s(o, a, l) {
    o.nodes().forEach((d) => (a.node(d).rank += l));
  }
  return tr;
}
var nr, Bo;
function z0() {
  if (Bo) return nr;
  Bo = 1;
  var e = tc(),
    t = sn().slack,
    n = sn().longestPath,
    r = be().alg.preorder,
    i = be().alg.postorder,
    s = ce().simplify;
  ((nr = o),
    (o.initLowLimValues = u),
    (o.initCutValues = a),
    (o.calcCutValue = d),
    (o.leaveEdge = f),
    (o.enterEdge = h),
    (o.exchangeEdges = p));
  function o(x) {
    ((x = s(x)), n(x));
    var g = e(x);
    (u(g), a(g, x));
    for (var w, C; (w = f(g));) ((C = h(g, x, w)), p(g, x, w, C));
  }
  function a(x, g) {
    var w = i(x, x.nodes());
    ((w = w.slice(0, w.length - 1)), w.forEach((C) => l(x, g, C)));
  }
  function l(x, g, w) {
    var C = x.node(w),
      N = C.parent;
    x.edge(w, N).cutvalue = d(x, g, w);
  }
  function d(x, g, w) {
    var C = x.node(w),
      N = C.parent,
      M = !0,
      b = g.edge(w, N),
      S = 0;
    return (
      b || ((M = !1), (b = g.edge(N, w))),
      (S = b.weight),
      g.nodeEdges(w).forEach((I) => {
        var E = I.v === w,
          k = E ? I.w : I.v;
        if (k !== N) {
          var O = E === M,
            _ = g.edge(I).weight;
          if (((S += O ? _ : -_), m(x, w, k))) {
            var T = x.edge(w, k).cutvalue;
            S += O ? -T : T;
          }
        }
      }),
      S
    );
  }
  function u(x, g) {
    (arguments.length < 2 && (g = x.nodes()[0]), c(x, {}, 1, g));
  }
  function c(x, g, w, C, N) {
    var M = w,
      b = x.node(C);
    return (
      (g[C] = !0),
      x.neighbors(C).forEach((S) => {
        Object.hasOwn(g, S) || (w = c(x, g, w, S, C));
      }),
      (b.low = M),
      (b.lim = w++),
      N ? (b.parent = N) : delete b.parent,
      w
    );
  }
  function f(x) {
    return x.edges().find((g) => x.edge(g).cutvalue < 0);
  }
  function h(x, g, w) {
    var C = w.v,
      N = w.w;
    g.hasEdge(C, N) || ((C = w.w), (N = w.v));
    var M = x.node(C),
      b = x.node(N),
      S = M,
      I = !1;
    M.lim > b.lim && ((S = b), (I = !0));
    var E = g.edges().filter((k) => I === y(x, x.node(k.v), S) && I !== y(x, x.node(k.w), S));
    return E.reduce((k, O) => (t(g, O) < t(g, k) ? O : k));
  }
  function p(x, g, w, C) {
    var N = w.v,
      M = w.w;
    (x.removeEdge(N, M), x.setEdge(C.v, C.w, {}), u(x), a(x, g), v(x, g));
  }
  function v(x, g) {
    var w = x.nodes().find((N) => !g.node(N).parent),
      C = r(x, w);
    ((C = C.slice(1)),
      C.forEach((N) => {
        var M = x.node(N).parent,
          b = g.edge(N, M),
          S = !1;
        (b || ((b = g.edge(M, N)), (S = !0)),
          (g.node(N).rank = g.node(M).rank + (S ? b.minlen : -b.minlen)));
      }));
  }
  function m(x, g, w) {
    return x.hasEdge(g, w);
  }
  function y(x, g, w) {
    return w.low <= g.lim && g.lim <= w.lim;
  }
  return nr;
}
var rr, qo;
function V0() {
  if (qo) return rr;
  qo = 1;
  var e = sn(),
    t = e.longestPath,
    n = tc(),
    r = z0();
  rr = i;
  function i(l) {
    var d = l.graph().ranker;
    if (d instanceof Function) return d(l);
    switch (l.graph().ranker) {
      case "network-simplex":
        a(l);
        break;
      case "tight-tree":
        o(l);
        break;
      case "longest-path":
        s(l);
        break;
      case "none":
        break;
      default:
        a(l);
    }
  }
  var s = t;
  function o(l) {
    (t(l), n(l));
  }
  function a(l) {
    r(l);
  }
  return rr;
}
var ir, Wo;
function F0() {
  if (Wo) return ir;
  ((Wo = 1), (ir = e));
  function e(r) {
    let i = n(r);
    r.graph().dummyChains.forEach((s) => {
      let o = r.node(s),
        a = o.edgeObj,
        l = t(r, i, a.v, a.w),
        d = l.path,
        u = l.lca,
        c = 0,
        f = d[c],
        h = !0;
      for (; s !== a.w;) {
        if (((o = r.node(s)), h)) {
          for (; (f = d[c]) !== u && r.node(f).maxRank < o.rank;) c++;
          f === u && (h = !1);
        }
        if (!h) {
          for (; c < d.length - 1 && r.node((f = d[c + 1])).minRank <= o.rank;) c++;
          f = d[c];
        }
        (r.setParent(s, f), (s = r.successors(s)[0]));
      }
    });
  }
  function t(r, i, s, o) {
    let a = [],
      l = [],
      d = Math.min(i[s].low, i[o].low),
      u = Math.max(i[s].lim, i[o].lim),
      c,
      f;
    c = s;
    do ((c = r.parent(c)), a.push(c));
    while (c && (i[c].low > d || u > i[c].lim));
    for (f = c, c = o; (c = r.parent(c)) !== f;) l.push(c);
    return { path: a.concat(l.reverse()), lca: f };
  }
  function n(r) {
    let i = {},
      s = 0;
    function o(a) {
      let l = s;
      (r.children(a).forEach(o), (i[a] = { low: l, lim: s++ }));
    }
    return (r.children().forEach(o), i);
  }
  return ir;
}
var or, Yo;
function B0() {
  if (Yo) return or;
  Yo = 1;
  let e = ce();
  or = { run: t, cleanup: s };
  function t(o) {
    let a = e.addDummyNode(o, "root", {}, "_root"),
      l = r(o),
      d = Object.values(l),
      u = e.applyWithChunking(Math.max, d) - 1,
      c = 2 * u + 1;
    ((o.graph().nestingRoot = a), o.edges().forEach((h) => (o.edge(h).minlen *= c)));
    let f = i(o) + 1;
    (o.children().forEach((h) => n(o, a, c, f, u, l, h)), (o.graph().nodeRankFactor = c));
  }
  function n(o, a, l, d, u, c, f) {
    let h = o.children(f);
    if (!h.length) {
      f !== a && o.setEdge(a, f, { weight: 0, minlen: l });
      return;
    }
    let p = e.addBorderNode(o, "_bt"),
      v = e.addBorderNode(o, "_bb"),
      m = o.node(f);
    (o.setParent(p, f),
      (m.borderTop = p),
      o.setParent(v, f),
      (m.borderBottom = v),
      h.forEach((y) => {
        n(o, a, l, d, u, c, y);
        let x = o.node(y),
          g = x.borderTop ? x.borderTop : y,
          w = x.borderBottom ? x.borderBottom : y,
          C = x.borderTop ? d : 2 * d,
          N = g !== w ? 1 : u - c[f] + 1;
        (o.setEdge(p, g, { weight: C, minlen: N, nestingEdge: !0 }),
          o.setEdge(w, v, { weight: C, minlen: N, nestingEdge: !0 }));
      }),
      o.parent(f) || o.setEdge(a, p, { weight: 0, minlen: u + c[f] }));
  }
  function r(o) {
    var a = {};
    function l(d, u) {
      var c = o.children(d);
      (c && c.length && c.forEach((f) => l(f, u + 1)), (a[d] = u));
    }
    return (o.children().forEach((d) => l(d, 1)), a);
  }
  function i(o) {
    return o.edges().reduce((a, l) => a + o.edge(l).weight, 0);
  }
  function s(o) {
    var a = o.graph();
    (o.removeNode(a.nestingRoot),
      delete a.nestingRoot,
      o.edges().forEach((l) => {
        var d = o.edge(l);
        d.nestingEdge && o.removeEdge(l);
      }));
  }
  return or;
}
var sr, Go;
function q0() {
  if (Go) return sr;
  Go = 1;
  let e = ce();
  sr = t;
  function t(r) {
    function i(s) {
      let o = r.children(s),
        a = r.node(s);
      if ((o.length && o.forEach(i), Object.hasOwn(a, "minRank"))) {
        ((a.borderLeft = []), (a.borderRight = []));
        for (let l = a.minRank, d = a.maxRank + 1; l < d; ++l)
          (n(r, "borderLeft", "_bl", s, a, l), n(r, "borderRight", "_br", s, a, l));
      }
    }
    r.children().forEach(i);
  }
  function n(r, i, s, o, a, l) {
    let d = { width: 0, height: 0, rank: l, borderType: i },
      u = a[i][l - 1],
      c = e.addDummyNode(r, "border", d, s);
    ((a[i][l] = c), r.setParent(c, o), u && r.setEdge(u, c, { weight: 1 }));
  }
  return sr;
}
var ar, Xo;
function W0() {
  if (Xo) return ar;
  ((Xo = 1), (ar = { adjust: e, undo: t }));
  function e(l) {
    let d = l.graph().rankdir.toLowerCase();
    (d === "lr" || d === "rl") && n(l);
  }
  function t(l) {
    let d = l.graph().rankdir.toLowerCase();
    ((d === "bt" || d === "rl") && i(l), (d === "lr" || d === "rl") && (o(l), n(l)));
  }
  function n(l) {
    (l.nodes().forEach((d) => r(l.node(d))), l.edges().forEach((d) => r(l.edge(d))));
  }
  function r(l) {
    let d = l.width;
    ((l.width = l.height), (l.height = d));
  }
  function i(l) {
    (l.nodes().forEach((d) => s(l.node(d))),
      l.edges().forEach((d) => {
        let u = l.edge(d);
        (u.points.forEach(s), Object.hasOwn(u, "y") && s(u));
      }));
  }
  function s(l) {
    l.y = -l.y;
  }
  function o(l) {
    (l.nodes().forEach((d) => a(l.node(d))),
      l.edges().forEach((d) => {
        let u = l.edge(d);
        (u.points.forEach(a), Object.hasOwn(u, "x") && a(u));
      }));
  }
  function a(l) {
    let d = l.x;
    ((l.x = l.y), (l.y = d));
  }
  return ar;
}
var cr, Uo;
function Y0() {
  if (Uo) return cr;
  Uo = 1;
  let e = ce();
  cr = t;
  function t(n) {
    let r = {},
      i = n.nodes().filter((u) => !n.children(u).length),
      s = i.map((u) => n.node(u).rank),
      o = e.applyWithChunking(Math.max, s),
      a = e.range(o + 1).map(() => []);
    function l(u) {
      if (r[u]) return;
      r[u] = !0;
      let c = n.node(u);
      (a[c.rank].push(u), n.successors(u).forEach(l));
    }
    return (i.sort((u, c) => n.node(u).rank - n.node(c).rank).forEach(l), a);
  }
  return cr;
}
var lr, Ko;
function G0() {
  if (Ko) return lr;
  Ko = 1;
  let e = ce().zipObject;
  lr = t;
  function t(r, i) {
    let s = 0;
    for (let o = 1; o < i.length; ++o) s += n(r, i[o - 1], i[o]);
    return s;
  }
  function n(r, i, s) {
    let o = e(
        s,
        s.map((f, h) => h),
      ),
      a = i.flatMap((f) =>
        r
          .outEdges(f)
          .map((h) => ({ pos: o[h.w], weight: r.edge(h).weight }))
          .sort((h, p) => h.pos - p.pos),
      ),
      l = 1;
    for (; l < s.length;) l <<= 1;
    let d = 2 * l - 1;
    l -= 1;
    let u = new Array(d).fill(0),
      c = 0;
    return (
      a.forEach((f) => {
        let h = f.pos + l;
        u[h] += f.weight;
        let p = 0;
        for (; h > 0;) (h % 2 && (p += u[h + 1]), (h = (h - 1) >> 1), (u[h] += f.weight));
        c += f.weight * p;
      }),
      c
    );
  }
  return lr;
}
var ur, Zo;
function X0() {
  if (Zo) return ur;
  ((Zo = 1), (ur = e));
  function e(t, n = []) {
    return n.map((r) => {
      let i = t.inEdges(r);
      if (i.length) {
        let s = i.reduce(
          (o, a) => {
            let l = t.edge(a),
              d = t.node(a.v);
            return { sum: o.sum + l.weight * d.order, weight: o.weight + l.weight };
          },
          { sum: 0, weight: 0 },
        );
        return { v: r, barycenter: s.sum / s.weight, weight: s.weight };
      } else return { v: r };
    });
  }
  return ur;
}
var dr, Qo;
function U0() {
  if (Qo) return dr;
  Qo = 1;
  let e = ce();
  dr = t;
  function t(i, s) {
    let o = {};
    (i.forEach((l, d) => {
      let u = (o[l.v] = { indegree: 0, in: [], out: [], vs: [l.v], i: d });
      l.barycenter !== void 0 && ((u.barycenter = l.barycenter), (u.weight = l.weight));
    }),
      s.edges().forEach((l) => {
        let d = o[l.v],
          u = o[l.w];
        d !== void 0 && u !== void 0 && (u.indegree++, d.out.push(o[l.w]));
      }));
    let a = Object.values(o).filter((l) => !l.indegree);
    return n(a);
  }
  function n(i) {
    let s = [];
    function o(l) {
      return (d) => {
        d.merged ||
          ((d.barycenter === void 0 || l.barycenter === void 0 || d.barycenter >= l.barycenter) &&
            r(l, d));
      };
    }
    function a(l) {
      return (d) => {
        (d.in.push(l), --d.indegree === 0 && i.push(d));
      };
    }
    for (; i.length;) {
      let l = i.pop();
      (s.push(l), l.in.reverse().forEach(o(l)), l.out.forEach(a(l)));
    }
    return s.filter((l) => !l.merged).map((l) => e.pick(l, ["vs", "i", "barycenter", "weight"]));
  }
  function r(i, s) {
    let o = 0,
      a = 0;
    (i.weight && ((o += i.barycenter * i.weight), (a += i.weight)),
      s.weight && ((o += s.barycenter * s.weight), (a += s.weight)),
      (i.vs = s.vs.concat(i.vs)),
      (i.barycenter = o / a),
      (i.weight = a),
      (i.i = Math.min(s.i, i.i)),
      (s.merged = !0));
  }
  return dr;
}
var fr, Jo;
function K0() {
  if (Jo) return fr;
  Jo = 1;
  let e = ce();
  fr = t;
  function t(i, s) {
    let o = e.partition(i, (p) => Object.hasOwn(p, "barycenter")),
      a = o.lhs,
      l = o.rhs.sort((p, v) => v.i - p.i),
      d = [],
      u = 0,
      c = 0,
      f = 0;
    (a.sort(r(!!s)),
      (f = n(d, l, f)),
      a.forEach((p) => {
        ((f += p.vs.length),
          d.push(p.vs),
          (u += p.barycenter * p.weight),
          (c += p.weight),
          (f = n(d, l, f)));
      }));
    let h = { vs: d.flat(!0) };
    return (c && ((h.barycenter = u / c), (h.weight = c)), h);
  }
  function n(i, s, o) {
    let a;
    for (; s.length && (a = s[s.length - 1]).i <= o;) (s.pop(), i.push(a.vs), o++);
    return o;
  }
  function r(i) {
    return (s, o) =>
      s.barycenter < o.barycenter
        ? -1
        : s.barycenter > o.barycenter
          ? 1
          : i
            ? o.i - s.i
            : s.i - o.i;
  }
  return fr;
}
var hr, es;
function Z0() {
  if (es) return hr;
  es = 1;
  let e = X0(),
    t = U0(),
    n = K0();
  hr = r;
  function r(o, a, l, d) {
    let u = o.children(a),
      c = o.node(a),
      f = c ? c.borderLeft : void 0,
      h = c ? c.borderRight : void 0,
      p = {};
    f && (u = u.filter((x) => x !== f && x !== h));
    let v = e(o, u);
    v.forEach((x) => {
      if (o.children(x.v).length) {
        let g = r(o, x.v, l, d);
        ((p[x.v] = g), Object.hasOwn(g, "barycenter") && s(x, g));
      }
    });
    let m = t(v, l);
    i(m, p);
    let y = n(m, d);
    if (f && ((y.vs = [f, y.vs, h].flat(!0)), o.predecessors(f).length)) {
      let x = o.node(o.predecessors(f)[0]),
        g = o.node(o.predecessors(h)[0]);
      (Object.hasOwn(y, "barycenter") || ((y.barycenter = 0), (y.weight = 0)),
        (y.barycenter = (y.barycenter * y.weight + x.order + g.order) / (y.weight + 2)),
        (y.weight += 2));
    }
    return y;
  }
  function i(o, a) {
    o.forEach((l) => {
      l.vs = l.vs.flatMap((d) => (a[d] ? a[d].vs : d));
    });
  }
  function s(o, a) {
    o.barycenter !== void 0
      ? ((o.barycenter =
          (o.barycenter * o.weight + a.barycenter * a.weight) / (o.weight + a.weight)),
        (o.weight += a.weight))
      : ((o.barycenter = a.barycenter), (o.weight = a.weight));
  }
  return hr;
}
var pr, ts;
function Q0() {
  if (ts) return pr;
  ts = 1;
  let e = be().Graph,
    t = ce();
  pr = n;
  function n(i, s, o, a) {
    a || (a = i.nodes());
    let l = r(i),
      d = new e({ compound: !0 }).setGraph({ root: l }).setDefaultNodeLabel((u) => i.node(u));
    return (
      a.forEach((u) => {
        let c = i.node(u),
          f = i.parent(u);
        (c.rank === s || (c.minRank <= s && s <= c.maxRank)) &&
          (d.setNode(u),
          d.setParent(u, f || l),
          i[o](u).forEach((h) => {
            let p = h.v === u ? h.w : h.v,
              v = d.edge(p, u),
              m = v !== void 0 ? v.weight : 0;
            d.setEdge(p, u, { weight: i.edge(h).weight + m });
          }),
          Object.hasOwn(c, "minRank") &&
            d.setNode(u, { borderLeft: c.borderLeft[s], borderRight: c.borderRight[s] }));
      }),
      d
    );
  }
  function r(i) {
    for (var s; i.hasNode((s = t.uniqueId("_root"))););
    return s;
  }
  return pr;
}
var gr, ns;
function J0() {
  if (ns) return gr;
  ((ns = 1), (gr = e));
  function e(t, n, r) {
    let i = {},
      s;
    r.forEach((o) => {
      let a = t.parent(o),
        l,
        d;
      for (; a;) {
        if (((l = t.parent(a)), l ? ((d = i[l]), (i[l] = a)) : ((d = s), (s = a)), d && d !== a)) {
          n.setEdge(d, a);
          return;
        }
        a = l;
      }
    });
  }
  return gr;
}
var mr, rs;
function em() {
  if (rs) return mr;
  rs = 1;
  let e = Y0(),
    t = G0(),
    n = Z0(),
    r = Q0(),
    i = J0(),
    s = be().Graph,
    o = ce();
  mr = a;
  function a(c, f) {
    if (f && typeof f.customOrder == "function") {
      f.customOrder(c, a);
      return;
    }
    let h = o.maxRank(c),
      p = l(c, o.range(1, h + 1), "inEdges"),
      v = l(c, o.range(h - 1, -1, -1), "outEdges"),
      m = e(c);
    if ((u(c, m), f && f.disableOptimalOrderHeuristic)) return;
    let y = Number.POSITIVE_INFINITY,
      x;
    for (let g = 0, w = 0; w < 4; ++g, ++w) {
      (d(g % 2 ? p : v, g % 4 >= 2), (m = o.buildLayerMatrix(c)));
      let C = t(c, m);
      C < y && ((w = 0), (x = Object.assign({}, m)), (y = C));
    }
    u(c, x);
  }
  function l(c, f, h) {
    const p = new Map(),
      v = (m, y) => {
        (p.has(m) || p.set(m, []), p.get(m).push(y));
      };
    for (const m of c.nodes()) {
      const y = c.node(m);
      if (
        (typeof y.rank == "number" && v(y.rank, m),
        typeof y.minRank == "number" && typeof y.maxRank == "number")
      )
        for (let x = y.minRank; x <= y.maxRank; x++) x !== y.rank && v(x, m);
    }
    return f.map(function (m) {
      return r(c, m, h, p.get(m) || []);
    });
  }
  function d(c, f) {
    let h = new s();
    c.forEach(function (p) {
      let v = p.graph().root,
        m = n(p, v, h, f);
      (m.vs.forEach((y, x) => (p.node(y).order = x)), i(p, h, m.vs));
    });
  }
  function u(c, f) {
    Object.values(f).forEach((h) => h.forEach((p, v) => (c.node(p).order = v)));
  }
  return mr;
}
var yr, is;
function tm() {
  if (is) return yr;
  is = 1;
  let e = be().Graph,
    t = ce();
  yr = {
    positionX: h,
    findType1Conflicts: n,
    findType2Conflicts: r,
    addConflict: s,
    hasConflict: o,
    verticalAlignment: a,
    horizontalCompaction: l,
    alignCoordinates: c,
    findSmallestWidthAlignment: u,
    balance: f,
  };
  function n(m, y) {
    let x = {};
    function g(w, C) {
      let N = 0,
        M = 0,
        b = w.length,
        S = C[C.length - 1];
      return (
        C.forEach((I, E) => {
          let k = i(m, I),
            O = k ? m.node(k).order : b;
          (k || I === S) &&
            (C.slice(M, E + 1).forEach((_) => {
              m.predecessors(_).forEach((T) => {
                let A = m.node(T),
                  D = A.order;
                (D < N || O < D) && !(A.dummy && m.node(_).dummy) && s(x, T, _);
              });
            }),
            (M = E + 1),
            (N = O));
        }),
        C
      );
    }
    return (y.length && y.reduce(g), x);
  }
  function r(m, y) {
    let x = {};
    function g(C, N, M, b, S) {
      let I;
      t.range(N, M).forEach((E) => {
        ((I = C[E]),
          m.node(I).dummy &&
            m.predecessors(I).forEach((k) => {
              let O = m.node(k);
              O.dummy && (O.order < b || O.order > S) && s(x, k, I);
            }));
      });
    }
    function w(C, N) {
      let M = -1,
        b,
        S = 0;
      return (
        N.forEach((I, E) => {
          if (m.node(I).dummy === "border") {
            let k = m.predecessors(I);
            k.length && ((b = m.node(k[0]).order), g(N, S, E, M, b), (S = E), (M = b));
          }
          g(N, S, N.length, b, C.length);
        }),
        N
      );
    }
    return (y.length && y.reduce(w), x);
  }
  function i(m, y) {
    if (m.node(y).dummy) return m.predecessors(y).find((x) => m.node(x).dummy);
  }
  function s(m, y, x) {
    if (y > x) {
      let w = y;
      ((y = x), (x = w));
    }
    let g = m[y];
    (g || (m[y] = g = {}), (g[x] = !0));
  }
  function o(m, y, x) {
    if (y > x) {
      let g = y;
      ((y = x), (x = g));
    }
    return !!m[y] && Object.hasOwn(m[y], x);
  }
  function a(m, y, x, g) {
    let w = {},
      C = {},
      N = {};
    return (
      y.forEach((M) => {
        M.forEach((b, S) => {
          ((w[b] = b), (C[b] = b), (N[b] = S));
        });
      }),
      y.forEach((M) => {
        let b = -1;
        M.forEach((S) => {
          let I = g(S);
          if (I.length) {
            I = I.sort((k, O) => N[k] - N[O]);
            let E = (I.length - 1) / 2;
            for (let k = Math.floor(E), O = Math.ceil(E); k <= O; ++k) {
              let _ = I[k];
              C[S] === S &&
                b < N[_] &&
                !o(x, S, _) &&
                ((C[_] = S), (C[S] = w[S] = w[_]), (b = N[_]));
            }
          }
        });
      }),
      { root: w, align: C }
    );
  }
  function l(m, y, x, g, w) {
    let C = {},
      N = d(m, y, x, w),
      M = w ? "borderLeft" : "borderRight";
    function b(E, k) {
      let O = N.nodes(),
        _ = O.pop(),
        T = {};
      for (; _;) (T[_] ? E(_) : ((T[_] = !0), O.push(_), (O = O.concat(k(_)))), (_ = O.pop()));
    }
    function S(E) {
      C[E] = N.inEdges(E).reduce((k, O) => Math.max(k, C[O.v] + N.edge(O)), 0);
    }
    function I(E) {
      let k = N.outEdges(E).reduce(
          (_, T) => Math.min(_, C[T.w] - N.edge(T)),
          Number.POSITIVE_INFINITY,
        ),
        O = m.node(E);
      k !== Number.POSITIVE_INFINITY && O.borderType !== M && (C[E] = Math.max(C[E], k));
    }
    return (
      b(S, N.predecessors.bind(N)),
      b(I, N.successors.bind(N)),
      Object.keys(g).forEach((E) => (C[E] = C[x[E]])),
      C
    );
  }
  function d(m, y, x, g) {
    let w = new e(),
      C = m.graph(),
      N = p(C.nodesep, C.edgesep, g);
    return (
      y.forEach((M) => {
        let b;
        M.forEach((S) => {
          let I = x[S];
          if ((w.setNode(I), b)) {
            var E = x[b],
              k = w.edge(E, I);
            w.setEdge(E, I, Math.max(N(m, S, b), k || 0));
          }
          b = S;
        });
      }),
      w
    );
  }
  function u(m, y) {
    return Object.values(y).reduce(
      (x, g) => {
        let w = Number.NEGATIVE_INFINITY,
          C = Number.POSITIVE_INFINITY;
        Object.entries(g).forEach(([M, b]) => {
          let S = v(m, M) / 2;
          ((w = Math.max(b + S, w)), (C = Math.min(b - S, C)));
        });
        const N = w - C;
        return (N < x[0] && (x = [N, g]), x);
      },
      [Number.POSITIVE_INFINITY, null],
    )[1];
  }
  function c(m, y) {
    let x = Object.values(y),
      g = t.applyWithChunking(Math.min, x),
      w = t.applyWithChunking(Math.max, x);
    ["u", "d"].forEach((C) => {
      ["l", "r"].forEach((N) => {
        let M = C + N,
          b = m[M];
        if (b === y) return;
        let S = Object.values(b),
          I = g - t.applyWithChunking(Math.min, S);
        (N !== "l" && (I = w - t.applyWithChunking(Math.max, S)),
          I && (m[M] = t.mapValues(b, (E) => E + I)));
      });
    });
  }
  function f(m, y) {
    return t.mapValues(m.ul, (x, g) => {
      if (y) return m[y.toLowerCase()][g];
      {
        let w = Object.values(m)
          .map((C) => C[g])
          .sort((C, N) => C - N);
        return (w[1] + w[2]) / 2;
      }
    });
  }
  function h(m) {
    let y = t.buildLayerMatrix(m),
      x = Object.assign(n(m, y), r(m, y)),
      g = {},
      w;
    ["u", "d"].forEach((N) => {
      ((w = N === "u" ? y : Object.values(y).reverse()),
        ["l", "r"].forEach((M) => {
          M === "r" && (w = w.map((E) => Object.values(E).reverse()));
          let b = (N === "u" ? m.predecessors : m.successors).bind(m),
            S = a(m, w, x, b),
            I = l(m, w, S.root, S.align, M === "r");
          (M === "r" && (I = t.mapValues(I, (E) => -E)), (g[N + M] = I));
        }));
    });
    let C = u(m, g);
    return (c(g, C), f(g, m.graph().align));
  }
  function p(m, y, x) {
    return (g, w, C) => {
      let N = g.node(w),
        M = g.node(C),
        b = 0,
        S;
      if (((b += N.width / 2), Object.hasOwn(N, "labelpos")))
        switch (N.labelpos.toLowerCase()) {
          case "l":
            S = -N.width / 2;
            break;
          case "r":
            S = N.width / 2;
            break;
        }
      if (
        (S && (b += x ? S : -S),
        (S = 0),
        (b += (N.dummy ? y : m) / 2),
        (b += (M.dummy ? y : m) / 2),
        (b += M.width / 2),
        Object.hasOwn(M, "labelpos"))
      )
        switch (M.labelpos.toLowerCase()) {
          case "l":
            S = M.width / 2;
            break;
          case "r":
            S = -M.width / 2;
            break;
        }
      return (S && (b += x ? S : -S), (S = 0), b);
    };
  }
  function v(m, y) {
    return m.node(y).width;
  }
  return yr;
}
var xr, os;
function nm() {
  if (os) return xr;
  os = 1;
  let e = ce(),
    t = tm().positionX;
  xr = n;
  function n(i) {
    ((i = e.asNonCompoundGraph(i)),
      r(i),
      Object.entries(t(i)).forEach(([s, o]) => (i.node(s).x = o)));
  }
  function r(i) {
    let s = e.buildLayerMatrix(i),
      o = i.graph().ranksep,
      a = 0;
    s.forEach((l) => {
      const d = l.reduce((u, c) => {
        const f = i.node(c).height;
        return u > f ? u : f;
      }, 0);
      (l.forEach((u) => (i.node(u).y = a + d / 2)), (a += d + o));
    });
  }
  return xr;
}
var wr, ss;
function rm() {
  if (ss) return wr;
  ss = 1;
  let e = j0(),
    t = H0(),
    n = V0(),
    r = ce().normalizeRanks,
    i = F0(),
    s = ce().removeEmptyRanks,
    o = B0(),
    a = q0(),
    l = W0(),
    d = em(),
    u = nm(),
    c = ce(),
    f = be().Graph;
  wr = h;
  function h(P, L) {
    let j = L && L.debugTiming ? c.time : c.notime;
    j("layout", () => {
      let W = j("  buildLayoutGraph", () => b(P));
      (j("  runLayout", () => p(W, j, L)), j("  updateInputGraph", () => v(P, W)));
    });
  }
  function p(P, L, j) {
    (L("    makeSpaceForEdgeLabels", () => S(P)),
      L("    removeSelfEdges", () => V(P)),
      L("    acyclic", () => e.run(P)),
      L("    nestingGraph.run", () => o.run(P)),
      L("    rank", () => n(c.asNonCompoundGraph(P))),
      L("    injectEdgeLabelProxies", () => I(P)),
      L("    removeEmptyRanks", () => s(P)),
      L("    nestingGraph.cleanup", () => o.cleanup(P)),
      L("    normalizeRanks", () => r(P)),
      L("    assignRankMinMax", () => E(P)),
      L("    removeEdgeLabelProxies", () => k(P)),
      L("    normalize.run", () => t.run(P)),
      L("    parentDummyChains", () => i(P)),
      L("    addBorderSegments", () => a(P)),
      L("    order", () => d(P, j)),
      L("    insertSelfEdges", () => $(P)),
      L("    adjustCoordinateSystem", () => l.adjust(P)),
      L("    position", () => u(P)),
      L("    positionSelfEdges", () => B(P)),
      L("    removeBorderNodes", () => D(P)),
      L("    normalize.undo", () => t.undo(P)),
      L("    fixupEdgeLabelCoords", () => T(P)),
      L("    undoCoordinateSystem", () => l.undo(P)),
      L("    translateGraph", () => O(P)),
      L("    assignNodeIntersects", () => _(P)),
      L("    reversePoints", () => A(P)),
      L("    acyclic.undo", () => e.undo(P)));
  }
  function v(P, L) {
    (P.nodes().forEach((j) => {
      let W = P.node(j),
        G = L.node(j);
      W &&
        ((W.x = G.x),
        (W.y = G.y),
        (W.rank = G.rank),
        L.children(j).length && ((W.width = G.width), (W.height = G.height)));
    }),
      P.edges().forEach((j) => {
        let W = P.edge(j),
          G = L.edge(j);
        ((W.points = G.points), Object.hasOwn(G, "x") && ((W.x = G.x), (W.y = G.y)));
      }),
      (P.graph().width = L.graph().width),
      (P.graph().height = L.graph().height));
  }
  let m = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
    y = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" },
    x = ["acyclicer", "ranker", "rankdir", "align"],
    g = ["width", "height", "rank"],
    w = { width: 0, height: 0 },
    C = ["minlen", "weight", "width", "height", "labeloffset"],
    N = { minlen: 1, weight: 1, width: 0, height: 0, labeloffset: 10, labelpos: "r" },
    M = ["labelpos"];
  function b(P) {
    let L = new f({ multigraph: !0, compound: !0 }),
      j = F(P.graph());
    return (
      L.setGraph(Object.assign({}, y, q(j, m), c.pick(j, x))),
      P.nodes().forEach((W) => {
        let G = F(P.node(W));
        const H = q(G, g);
        (Object.keys(w).forEach((Y) => {
          H[Y] === void 0 && (H[Y] = w[Y]);
        }),
          L.setNode(W, H),
          L.setParent(W, P.parent(W)));
      }),
      P.edges().forEach((W) => {
        let G = F(P.edge(W));
        L.setEdge(W, Object.assign({}, N, q(G, C), c.pick(G, M)));
      }),
      L
    );
  }
  function S(P) {
    let L = P.graph();
    ((L.ranksep /= 2),
      P.edges().forEach((j) => {
        let W = P.edge(j);
        ((W.minlen *= 2),
          W.labelpos.toLowerCase() !== "c" &&
            (L.rankdir === "TB" || L.rankdir === "BT"
              ? (W.width += W.labeloffset)
              : (W.height += W.labeloffset)));
      }));
  }
  function I(P) {
    P.edges().forEach((L) => {
      let j = P.edge(L);
      if (j.width && j.height) {
        let W = P.node(L.v),
          H = { rank: (P.node(L.w).rank - W.rank) / 2 + W.rank, e: L };
        c.addDummyNode(P, "edge-proxy", H, "_ep");
      }
    });
  }
  function E(P) {
    let L = 0;
    (P.nodes().forEach((j) => {
      let W = P.node(j);
      W.borderTop &&
        ((W.minRank = P.node(W.borderTop).rank),
        (W.maxRank = P.node(W.borderBottom).rank),
        (L = Math.max(L, W.maxRank)));
    }),
      (P.graph().maxRank = L));
  }
  function k(P) {
    P.nodes().forEach((L) => {
      let j = P.node(L);
      j.dummy === "edge-proxy" && ((P.edge(j.e).labelRank = j.rank), P.removeNode(L));
    });
  }
  function O(P) {
    let L = Number.POSITIVE_INFINITY,
      j = 0,
      W = Number.POSITIVE_INFINITY,
      G = 0,
      H = P.graph(),
      Y = H.marginx || 0,
      K = H.marginy || 0;
    function Q(U) {
      let X = U.x,
        J = U.y,
        te = U.width,
        ne = U.height;
      ((L = Math.min(L, X - te / 2)),
        (j = Math.max(j, X + te / 2)),
        (W = Math.min(W, J - ne / 2)),
        (G = Math.max(G, J + ne / 2)));
    }
    (P.nodes().forEach((U) => Q(P.node(U))),
      P.edges().forEach((U) => {
        let X = P.edge(U);
        Object.hasOwn(X, "x") && Q(X);
      }),
      (L -= Y),
      (W -= K),
      P.nodes().forEach((U) => {
        let X = P.node(U);
        ((X.x -= L), (X.y -= W));
      }),
      P.edges().forEach((U) => {
        let X = P.edge(U);
        (X.points.forEach((J) => {
          ((J.x -= L), (J.y -= W));
        }),
          Object.hasOwn(X, "x") && (X.x -= L),
          Object.hasOwn(X, "y") && (X.y -= W));
      }),
      (H.width = j - L + Y),
      (H.height = G - W + K));
  }
  function _(P) {
    P.edges().forEach((L) => {
      let j = P.edge(L),
        W = P.node(L.v),
        G = P.node(L.w),
        H,
        Y;
      (j.points
        ? ((H = j.points[0]), (Y = j.points[j.points.length - 1]))
        : ((j.points = []), (H = G), (Y = W)),
        j.points.unshift(c.intersectRect(W, H)),
        j.points.push(c.intersectRect(G, Y)));
    });
  }
  function T(P) {
    P.edges().forEach((L) => {
      let j = P.edge(L);
      if (Object.hasOwn(j, "x"))
        switch (
          ((j.labelpos === "l" || j.labelpos === "r") && (j.width -= j.labeloffset), j.labelpos)
        ) {
          case "l":
            j.x -= j.width / 2 + j.labeloffset;
            break;
          case "r":
            j.x += j.width / 2 + j.labeloffset;
            break;
        }
    });
  }
  function A(P) {
    P.edges().forEach((L) => {
      let j = P.edge(L);
      j.reversed && j.points.reverse();
    });
  }
  function D(P) {
    (P.nodes().forEach((L) => {
      if (P.children(L).length) {
        let j = P.node(L),
          W = P.node(j.borderTop),
          G = P.node(j.borderBottom),
          H = P.node(j.borderLeft[j.borderLeft.length - 1]),
          Y = P.node(j.borderRight[j.borderRight.length - 1]);
        ((j.width = Math.abs(Y.x - H.x)),
          (j.height = Math.abs(G.y - W.y)),
          (j.x = H.x + j.width / 2),
          (j.y = W.y + j.height / 2));
      }
    }),
      P.nodes().forEach((L) => {
        P.node(L).dummy === "border" && P.removeNode(L);
      }));
  }
  function V(P) {
    P.edges().forEach((L) => {
      if (L.v === L.w) {
        var j = P.node(L.v);
        (j.selfEdges || (j.selfEdges = []),
          j.selfEdges.push({ e: L, label: P.edge(L) }),
          P.removeEdge(L));
      }
    });
  }
  function $(P) {
    var L = c.buildLayerMatrix(P);
    L.forEach((j) => {
      var W = 0;
      j.forEach((G, H) => {
        var Y = P.node(G);
        ((Y.order = H + W),
          (Y.selfEdges || []).forEach((K) => {
            c.addDummyNode(
              P,
              "selfedge",
              {
                width: K.label.width,
                height: K.label.height,
                rank: Y.rank,
                order: H + ++W,
                e: K.e,
                label: K.label,
              },
              "_se",
            );
          }),
          delete Y.selfEdges);
      });
    });
  }
  function B(P) {
    P.nodes().forEach((L) => {
      var j = P.node(L);
      if (j.dummy === "selfedge") {
        var W = P.node(j.e.v),
          G = W.x + W.width / 2,
          H = W.y,
          Y = j.x - G,
          K = W.height / 2;
        (P.setEdge(j.e, j.label),
          P.removeNode(L),
          (j.label.points = [
            { x: G + (2 * Y) / 3, y: H - K },
            { x: G + (5 * Y) / 6, y: H - K },
            { x: G + Y, y: H },
            { x: G + (5 * Y) / 6, y: H + K },
            { x: G + (2 * Y) / 3, y: H + K },
          ]),
          (j.label.x = j.x),
          (j.label.y = j.y));
      }
    });
  }
  function q(P, L) {
    return c.mapValues(c.pick(P, L), Number);
  }
  function F(P) {
    var L = {};
    return (
      P &&
        Object.entries(P).forEach(([j, W]) => {
          (typeof j == "string" && (j = j.toLowerCase()), (L[j] = W));
        }),
      L
    );
  }
  return wr;
}
var vr, as;
function im() {
  if (as) return vr;
  as = 1;
  let e = ce(),
    t = be().Graph;
  vr = { debugOrdering: n };
  function n(r) {
    let i = e.buildLayerMatrix(r),
      s = new t({ compound: !0, multigraph: !0 }).setGraph({});
    return (
      r.nodes().forEach((o) => {
        (s.setNode(o, { label: o }), s.setParent(o, "layer" + r.node(o).rank));
      }),
      r.edges().forEach((o) => s.setEdge(o.v, o.w, {}, o.name)),
      i.forEach((o, a) => {
        let l = "layer" + a;
        (s.setNode(l, { rank: "same" }),
          o.reduce((d, u) => (s.setEdge(d, u, { style: "invis" }), u)));
      }),
      s
    );
  }
  return vr;
}
var br, cs;
function om() {
  return (cs || ((cs = 1), (br = "1.1.8")), br);
}
var _r, ls;
function sm() {
  return (
    ls ||
      ((ls = 1),
      (_r = {
        graphlib: be(),
        layout: rm(),
        debug: im(),
        util: { time: ce().time, notime: ce().notime },
        version: om(),
      })),
    _r
  );
}
var us = sm();
const Ym = ({ edges: e, errorLabel: t, nodeHeight: n, nodeSizes: r, nodes: i, nodeWidth: s }) => {
    const o = new us.graphlib.Graph();
    (o.setGraph({
      rankdir: "LR",
      ranker: "tight-tree",
      nodesep: 44,
      edgesep: 18,
      ranksep: 96,
      marginx: 28,
      marginy: 28,
    }),
      o.setDefaultEdgeLabel(() => ({})));
    const a = new Map();
    for (const f of i) {
      const h = (r == null ? void 0 : r.get(f.id)) ?? { width: s, height: n };
      (a.set(f.id, h), o.setNode(f.id, h));
    }
    const l = new Set(i.map((f) => f.id));
    for (const f of e) l.has(f.source) && l.has(f.target) && o.setEdge(f.source, f.target);
    us.layout(o);
    const d = new Map(),
      u = new Map();
    for (const f of e)
      (d.set(f.target, (d.get(f.target) ?? 0) + 1), u.set(f.source, (u.get(f.source) ?? 0) + 1));
    const c = new Map();
    for (const f of i) {
      const h = o.node(f.id),
        p = a.get(f.id);
      if (!h || !p) throw new Error(`${t} graph node '${f.id}' is missing its layout.`);
      c.set(f.id, { x: h.x - p.width / 2, y: h.y - p.height / 2 });
    }
    return { incomingCounts: d, outgoingCounts: u, positions: c };
  },
  am =
    ({ isCollapsed: e, width: t }) =>
    (n) => ({
      position: "relative",
      width: `${t}px`,
      maxWidth: "100%",
      minWidth: 0,
      minHeight: 0,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      border: `1px solid ${re(n.palette.text.primary, 0.08)}`,
      borderRadius: n.shape.borderRadiusPx,
      backgroundColor: re(n.palette.background.paper, 0.92),
      transition: n.transitions.create(["background-color", "width"], {
        duration: n.transitions.duration.shorter,
      }),
      [n.breakpoints.down(1e3)]: { width: e ? `${t}px` : "100%", minHeight: e ? 0 : "24rem" },
    }),
  cm = (e) => (t) => ({
    flex: "0 0 auto",
    minHeight: "2.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: e ? "center" : "space-between",
    gap: t.spacing(0.35),
  }),
  lm = { flex: "0 0 auto", mr: 2 },
  um = (e) => ({
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: e.zIndex.drawer + 1,
    width: "1.3rem",
    height: "100%",
    padding: 0,
    border: 0,
    borderRadius: 0,
    backgroundColor: "transparent",
    cursor: "col-resize",
    touchAction: "none",
    "&::after": {
      content: '""',
      position: "absolute",
      top: "0.75rem",
      right: "0.5rem",
      bottom: "0.75rem",
      width: "2px",
      borderRadius: "999px",
      backgroundColor: re(e.palette.text.primary, 0.08),
      transition: e.transitions.create(["background-color", "width"], {
        duration: e.transitions.duration.shortest,
      }),
    },
    "&:hover::after, &:focus-visible::after, &[data-resizing='true']::after": {
      width: "3px",
      backgroundColor: re(e.palette.primary.main, 0.46),
    },
    "&:focus-visible": {
      outline: `2px solid ${re(e.palette.primary.main, 0.22)}`,
      outlineOffset: "-2px",
    },
    [e.breakpoints.down(1e3)]: { display: "none" },
  }),
  dm = (e) => ({
    flex: 1,
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
    padding: e.spacing(1.1),
    overflow: "hidden",
  }),
  fm = { flex: 1, minWidth: 0, minHeight: 0, overflow: "auto" },
  hm = { flex: 1, minWidth: 0, minHeight: 0, display: "flex", flexDirection: "column" },
  nt = (e) => ({
    flex: 1,
    minHeight: "14rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: e.spacing(1),
    padding: e.spacing(2),
    textAlign: "center",
  }),
  pm = (e) => ({
    flex: 1,
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
    gap: e.spacing(0.8),
  }),
  gm = (e) => ({ paddingBottom: e.spacing(0.2) }),
  mm = (e) => ({ padding: e.spacing(1), borderRadius: e.shape.radiusSmPx }),
  ym = z.lazy(() =>
    dl(
      () => import("./PdfCanvasViewer-jW4Ex2Pm.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
    ).then((e) => ({ default: e.PdfCanvasViewer })),
  ),
  xm = ({ writeupSource: e }) => {
    if (!e)
      return R.jsx(pe, {
        sx: nt,
        children: R.jsx(Gt, {
          variant: "body2",
          color: "textSecondary",
          align: "center",
          children: "No writeup source is available.",
        }),
      });
    const t = `\`\`\`\`latex
${e}
\`\`\`\``;
    return R.jsx(pe, { sx: fm, children: R.jsx(hl, { content: t, showCodeCopyButton: !0 }) });
  },
  wm = ({
    isPdfPreparing: e,
    isPdfReady: t,
    pdfCompileError: n = null,
    pdfUrl: r = null,
    onPreparePdf: i,
  }) =>
    e
      ? R.jsxs(pe, {
          sx: nt,
          children: [
            R.jsx(ds, { size: 28 }),
            R.jsx(Gt, {
              variant: "body2",
              color: "textSecondary",
              align: "center",
              children: "Preparing compiled PDF.",
            }),
          ],
        })
      : t && r
        ? R.jsx(vm, { pdfUrl: r })
        : n
          ? R.jsxs(pe, {
              sx: hm,
              children: [
                R.jsx(wl, { severity: "error", variant: "outlined", children: n }),
                R.jsx(pe, {
                  sx: nt,
                  children: R.jsx(ui, {
                    onClick: i,
                    endIcon: R.jsx(fi, {}),
                    children: "Retry PDF compile",
                  }),
                }),
              ],
            })
          : R.jsxs(pe, {
              sx: nt,
              children: [
                R.jsx(Gt, {
                  variant: "body2",
                  color: "textSecondary",
                  align: "center",
                  children: "No PDF preview is available.",
                }),
                R.jsx(ui, { onClick: i, endIcon: R.jsx(fi, {}), children: "Compile PDF" }),
              ],
            }),
  vm = ({ pdfUrl: e }) => {
    const [t, n] = z.useState(1),
      [r, i] = z.useState(di),
      [s, o] = z.useState(null),
      a = s !== null;
    return (
      z.useEffect(() => {
        (n(1), i(di), o(null));
      }, [e]),
      R.jsxs(pe, {
        sx: pm,
        children: [
          R.jsx(pl, {
            isReady: a,
            page: t,
            pageCount: s,
            pdfUrl: e,
            showPageLabel: !0,
            sx: gm,
            zoom: r,
            onPageChange: n,
            onZoomChange: i,
          }),
          R.jsx(z.Suspense, {
            fallback: R.jsx(pe, { sx: nt, children: R.jsx(ds, { size: 28 }) }),
            children: R.jsx(ym, {
              ariaLabel: "Compiled writeup PDF page preview",
              loadErrorMessage: "Could not load compiled writeup PDF.",
              page: t,
              pdfUrl: e,
              renderErrorMessage: "Could not render compiled writeup PDF preview.",
              scale: r / 100,
              stateSx: nt,
              sx: mm,
              onPageChange: n,
              onPageCountChange: o,
            }),
          }),
        ],
      })
    );
  },
  Gm = ({
    isOpen: e,
    messageIndex: t,
    readOnly: n = !1,
    sourceTitle: r = "LaTeX source",
    writeupSource: i,
  }) => {
    const [s, o] = z.useState("writeupSource"),
      [a, l] = z.useState(!1),
      { width: d, resizeHandleProps: u } = fl({
        storageKey: E0,
        defaultWidth: w0,
        minWidth: v0,
        maxWidth: b0,
        resizeEdge: "right",
      }),
      c = i.trim(),
      f = !n && a,
      h = n ? "writeupSource" : s,
      p = f ? _0 : d,
      {
        isWriteupPdfPreparing: v,
        isWriteupPdfReady: m,
        pdfCompileError: y,
        pdfUrl: x,
        prepareWriteupPdfPreview: g,
      } = gl({
        areWriteupActionsEnabled: !n && !!c,
        shouldPrepareWriteupPdf: e && !n && !f && h === "compiledPdf" && !!c,
        writeupPdfPreparationPriority: t,
        writeupSource: c,
      }),
      w = z.useCallback(
        (M = !0) => {
          g({ forceCompile: M, showErrorToast: !1 });
        },
        [g],
      ),
      C = z.useCallback(
        (M, b) => {
          (o(b), b === "compiledPdf" && w(!1));
        },
        [w],
      ),
      N = z.useCallback(() => {
        const M = a && s === "compiledPdf";
        (l(!a), M && w(!1));
      }, [a, w, s]);
    return R.jsxs(pe, {
      sx: am({ isCollapsed: f, width: p }),
      children: [
        R.jsxs(pe, {
          sx: cm(f),
          children: [
            n && R.jsx(Gt, { variant: "subtitle2", noWrap: !0, children: r }),
            !n &&
              !f &&
              R.jsxs(ml, {
                value: h,
                variant: "fullWidth",
                "aria-label": "Math-harness writeup preview",
                onChange: C,
                sx: { p: 0, m: 1 },
                children: [
                  R.jsx(hi, {
                    disableRipple: !0,
                    value: "writeupSource",
                    label: "Writeup source",
                    id: "math-harness-writeup-source-tab",
                    "aria-controls": "math-harness-writeup-source-panel",
                  }),
                  R.jsx(hi, {
                    disableRipple: !0,
                    value: "compiledPdf",
                    label: "Compiled PDF",
                    id: "math-harness-compiled-pdf-tab",
                    "aria-controls": "math-harness-compiled-pdf-panel",
                  }),
                ],
              }),
            !n &&
              R.jsx(ul, {
                tooltip: f ? "Expand writeup preview" : "Collapse writeup preview",
                "aria-label": f ? "Expand writeup preview" : "Collapse writeup preview",
                "aria-expanded": !f,
                size: "small",
                sx: { ...(f ? {} : { mr: 2 }), ...lm },
                onClick: N,
                children: f ? R.jsx(yl, { size: 18 }) : R.jsx(xl, { size: 18 }),
              }),
          ],
        }),
        f
          ? null
          : R.jsxs(R.Fragment, {
              children: [
                R.jsx(pe, {
                  sx: dm,
                  role: "tabpanel",
                  "aria-label": n ? r : void 0,
                  id:
                    h === "writeupSource"
                      ? "math-harness-writeup-source-panel"
                      : "math-harness-compiled-pdf-panel",
                  "aria-labelledby":
                    !n && h === "writeupSource"
                      ? "math-harness-writeup-source-tab"
                      : n
                        ? void 0
                        : "math-harness-compiled-pdf-tab",
                  children:
                    h === "writeupSource"
                      ? R.jsx(xm, { writeupSource: c })
                      : R.jsx(wm, {
                          isPdfPreparing: v,
                          isPdfReady: m,
                          pdfCompileError: y,
                          pdfUrl: x,
                          onPreparePdf: () => {
                            w();
                          },
                        }),
                }),
                !n && R.jsx(pe, { "aria-label": "Resize writeup preview panel", ...u, sx: um }),
              ],
            }),
      ],
    });
  },
  Xm = (e) => ({
    minWidth: 0,
    flex: 1,
    minHeight: 0,
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    gap: e.spacing(1.4),
    padding: e.spacing(1.4),
    border: `1px solid ${re(e.palette.text.primary, 0.08)}`,
    borderRadius: e.shape.borderRadiusPx,
    backgroundColor: re(e.palette.background.paper, 0.92),
  }),
  Um = (e) => ({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: e.spacing(1),
  }),
  Km = { minWidth: 0 },
  Zm = (e) => ({
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: e.spacing(0.8),
    [e.breakpoints.down(520)]: { gridTemplateColumns: "1fr" },
  }),
  Qm = (e) => ({
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: e.spacing(0.25),
    padding: e.spacing(0.9, 1),
    border: `1px solid ${re(e.palette.text.primary, 0.08)}`,
    borderRadius: e.shape.radiusSmPx,
    backgroundColor: re(e.palette.text.primary, 0.025),
  }),
  Jm = (e) => ({ minWidth: 0, display: "flex", flexDirection: "column", gap: e.spacing(0.75) }),
  ey = (e) => ({
    minWidth: 0,
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) auto",
    alignItems: "center",
    gap: e.spacing(1),
    padding: e.spacing(0.85, 1),
    border: `1px solid ${re(e.palette.text.primary, 0.08)}`,
    borderRadius: e.shape.radiusSmPx,
    backgroundColor: re(e.palette.text.primary, 0.025),
  }),
  ty = (e) => ({
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: e.spacing(0.4),
    padding: e.spacing(0.9, 1),
    border: `1px solid ${re(e.palette.text.primary, 0.08)}`,
    borderRadius: e.shape.radiusSmPx,
    backgroundColor: re(e.palette.text.primary, 0.025),
  }),
  ny = (e) => ({
    width: "min(96rem, calc(100vw - 2rem))",
    height: "min(54rem, calc(100dvh - 2rem))",
    maxWidth: "none",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: e.shape.radiusLgPx,
  }),
  ry = (e) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: e.spacing(1.4),
    padding: e.spacing(1.7, 2),
    borderBottom: `1px solid ${re(e.palette.text.primary, 0.08)}`,
  }),
  iy = { minWidth: 0 },
  oy = (e) => ({
    display: "flex",
    alignItems: "center",
    gap: e.spacing(0.8),
    flexWrap: "wrap",
    justifyContent: "flex-end",
  }),
  sy = (e) => ({
    transformOrigin: "center",
    boxShadow: `0 0 0 0 ${re(e.palette.info.main, 0.44)}`,
    animation: "mathHarnessActiveRunBadgePulse 1.6s ease-out infinite",
    "&::after": {
      content: '""',
      position: "absolute",
      inset: "-0.28rem",
      border: `1px solid ${re(e.palette.info.main, 0.38)}`,
      borderRadius: "50%",
      opacity: 0.62,
      animation: "mathHarnessActiveRunBadgeRing 1.6s ease-out infinite",
    },
    "@keyframes mathHarnessActiveRunBadgePulse": {
      "0%, 100%": { transform: "scale(1)", boxShadow: `0 0 0 0 ${re(e.palette.info.main, 0.44)}` },
      "58%": { transform: "scale(1.12)", boxShadow: `0 0 0 0.42rem ${re(e.palette.info.main, 0)}` },
    },
    "@keyframes mathHarnessActiveRunBadgeRing": {
      "0%": { opacity: 0.62, transform: "scale(0.72)" },
      "70%, 100%": { opacity: 0, transform: "scale(1.65)" },
    },
    "@media (prefers-reduced-motion: reduce)": {
      animation: "none",
      boxShadow: `0 0 0 0.22rem ${re(e.palette.info.main, 0.18)}`,
      "&::after": { display: "none" },
    },
  }),
  ay =
    ({ showWriteupPreview: e }) =>
    (t) => ({
      flex: 1,
      minHeight: 0,
      display: "grid",
      gridTemplateColumns: e
        ? "auto minmax(0, 1.5fr) minmax(22rem, 0.9fr)"
        : "minmax(0, 1.5fr) minmax(22rem, 0.9fr)",
      gap: t.spacing(1.4),
      padding: t.spacing(1.4),
      backgroundColor: re(t.palette.text.primary, 0.025),
      [t.breakpoints.down(1e3)]: { gridTemplateColumns: "minmax(0, 1fr)" },
    }),
  cy = (e) => ({
    minWidth: 0,
    minHeight: "24rem",
    overflow: "hidden",
    border: `1px solid ${re(e.palette.text.primary, 0.08)}`,
    borderRadius: e.shape.borderRadiusPx,
    backgroundColor: re(e.palette.background.paper, 0.78),
    "& .react-flow__pane": { cursor: "grab" },
    "& .react-flow__pane.dragging": { cursor: "grabbing" },
    "& .react-flow__controls": {
      overflow: "hidden",
      borderRadius: e.shape.radiusSmPx,
      border: `1px solid ${re(e.palette.text.primary, 0.08)}`,
      boxShadow: `0 10px 24px ${re(e.palette.text.primary, 0.1)}`,
    },
    "& .react-flow__controls-button": {
      width: "1.75rem",
      height: "1.75rem",
      borderBottomColor: re(e.palette.text.primary, 0.08),
    },
  }),
  ly = (e) => ({
    minWidth: 0,
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
    gap: e.spacing(1.2),
    overflow: "hidden",
  }),
  uy = (e) => ({
    height: "100%",
    minHeight: "24rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: e.spacing(1),
    padding: e.spacing(2),
    textAlign: "center",
  });
export {
  _0 as A,
  Dm as B,
  Om as C,
  w0 as D,
  b0 as E,
  v0 as F,
  E0 as G,
  rn as H,
  ey as I,
  ny as J,
  tn as M,
  Z as P,
  iy as a,
  Ym as b,
  oy as c,
  cy as d,
  uy as e,
  Wm as f,
  ry as g,
  qm as h,
  $m as i,
  ay as j,
  Xm as k,
  Um as l,
  Km as m,
  Qm as n,
  zm as o,
  Bm as p,
  Fm as q,
  jm as r,
  Jm as s,
  Zm as t,
  ty as u,
  Vm as v,
  Hm as w,
  sy as x,
  Gm as y,
  ly as z,
};
