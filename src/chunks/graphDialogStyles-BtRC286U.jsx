const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = (m.f ||= [
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
  t in e
    ? sl(e, t, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: n,
      })
    : (e[t] = n);
var ae = (e, t, n) => al(e, typeof t != "symbol" ? t + "" : t, n);
import {
  bI as cl,
  R as ll,
  r as z,
  j as R,
  g as re,
  B as _Component26,
  T as Gt,
  V as _Component39,
  C as _Component28,
  _ as _Component32,
  $ as dl,
} from "./index-BM3ZINIl.jsx";
import { u as fl } from "./useResizablePanelWidth-DfMwOMGi.js";
import { a as _Component27 } from "./Markdown-Dh8LhaRc.jsx";
import {
  P as di,
  a as _Component33,
} from "./PdfCanvasViewerControls-CKiN42mP.js";
import "./LatexProjectFolderExpansionContext-DKFyp-6E.js";
import "./source-editor-CGMzw50e.jsx";
import "./useAttachmentContent-15uaQfvd.js";
import { R as _Component31 } from "./LatexWorkspaceCanvas-DKG1oD4d.jsx";
import { u as gl } from "./useQueuedWriteupPdf-CoC8uXix.js";
import {
  T as _Component36,
  a as _Component35,
} from "./MarkdownHighlights-C-ZhT8z1.jsx";
import { P as _Component37 } from "./panel-left-open-BNgbA-Qm.js";
import { P as _Component38 } from "./panel-left-close-BNWX01EL.js";
import { A as _Component30 } from "./Alert-DnFVD8li.jsx";
function le(e) {
  if (typeof e == "string" || typeof e == "number") {
    return "" + e;
  }
  let t = "";
  if (Array.isArray(e)) {
    for (let n = 0, r; n < e.length; n++) {
      if ((r = le(e[n])) !== "") {
        t += (t && " ") + r;
      }
    }
  } else {
    for (let n in e) {
      if (e[n]) {
        t += (t && " ") + n;
      }
    }
  }
  return t;
}
var vl = {
  value: () => {},
};
function an() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) {
      throw new Error("illegal type: " + r);
    }
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
      var r = "";
      var i = n.indexOf(".");
      if (i >= 0) {
        r = n.slice(i + 1);
        n = n.slice(0, i);
      }
      if (n && !t.hasOwnProperty(n)) {
        throw new Error("unknown type: " + n);
      }
      return {
        type: n,
        name: r,
      };
    });
}
Ft.prototype = an.prototype = {
  constructor: Ft,
  on: function (e, t) {
    var n = this._;
    var r = bl(e + "", n);
    var i;
    var s = -1;
    var o = r.length;
    if (arguments.length < 2) {
      while (++s < o) {
        if ((i = (e = r[s]).type) && (i = _l(n[i], e.name))) {
          return i;
        }
      }
      return;
    }
    if (t != null && typeof t != "function") {
      throw new Error("invalid callback: " + t);
    }
    while (++s < o) {
      if ((i = (e = r[s]).type)) {
        n[i] = pi(n[i], e.name, t);
      } else if (t == null) {
        for (i in n) {
          n[i] = pi(n[i], e.name, null);
        }
      }
    }
    return this;
  },
  copy: function () {
    var e = {};
    var t = this._;
    for (var n in t) {
      e[n] = t[n].slice();
    }
    return new Ft(e);
  },
  call: function (e, t) {
    if ((i = arguments.length - 2) > 0) {
      var n = new Array(i);
      for (var r = 0, i, s; r < i; ++r) {
        n[r] = arguments[r + 2];
      }
    }
    if (!this._.hasOwnProperty(e)) {
      throw new Error("unknown type: " + e);
    }
    s = this._[e];
    r = 0;
    i = s.length;
    for (; r < i; ++r) {
      s[r].value.apply(t, n);
    }
  },
  apply: function (e, t, n) {
    if (!this._.hasOwnProperty(e)) {
      throw new Error("unknown type: " + e);
    }
    var r = this._[e];
    for (var i = 0, s = r.length; i < s; ++i) {
      r[i].value.apply(t, n);
    }
  },
};
function _l(e, t) {
  for (var n = 0, r = e.length, i; n < r; ++n) {
    if ((i = e[n]).name === t) {
      return i.value;
    }
  }
}
function pi(e, t, n) {
  for (var r = 0, i = e.length; r < i; ++r) {
    if (e[r].name === t) {
      e[r] = vl;
      e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  }
  if (n != null) {
    e.push({
      name: t,
      value: n,
    });
  }
  return e;
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
  var t = (e += "");
  var n = t.indexOf(":");
  if (n >= 0 && (t = e.slice(0, n)) !== "xmlns") {
    e = e.slice(n + 1);
  }
  if (gi.hasOwnProperty(t)) {
    return {
      space: gi[t],
      local: e,
    };
  } else {
    return e;
  }
}
function El(e) {
  return function () {
    var t = this.ownerDocument;
    var n = this.namespaceURI;
    if (n === Er && t.documentElement.namespaceURI === Er) {
      return t.createElement(e);
    } else {
      return t.createElementNS(n, e);
    }
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
  if (e == null) {
    return Nl;
  } else {
    return function () {
      return this.querySelector(e);
    };
  }
}
function Cl(e) {
  if (typeof e != "function") {
    e = Or(e);
  }
  var t = this._groups;
  for (var n = t.length, r = new Array(n), i = 0; i < n; ++i) {
    var s = t[i];
    for (var o = s.length, a = (r[i] = new Array(o)), l, d, u = 0; u < o; ++u) {
      if ((l = s[u]) && (d = e.call(l, l.__data__, u, s))) {
        if ("__data__" in l) {
          d.__data__ = l.__data__;
        }
        a[u] = d;
      }
    }
  }
  return new fe(r, this._parents);
}
function kl(e) {
  if (e == null) {
    return [];
  } else if (Array.isArray(e)) {
    return e;
  } else {
    return Array.from(e);
  }
}
function Ml() {
  return [];
}
function hs(e) {
  if (e == null) {
    return Ml;
  } else {
    return function () {
      return this.querySelectorAll(e);
    };
  }
}
function Il(e) {
  return function () {
    return kl(e.apply(this, arguments));
  };
}
function Pl(e) {
  if (typeof e == "function") {
    e = Il(e);
  } else {
    e = hs(e);
  }
  var t = this._groups;
  for (var n = t.length, r = [], i = [], s = 0; s < n; ++s) {
    var o = t[s];
    for (var a = o.length, l, d = 0; d < a; ++d) {
      if ((l = o[d])) {
        r.push(e.call(l, l.__data__, d, o));
        i.push(l);
      }
    }
  }
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
  return this.selectAll(
    e == null ? Dl : Ol(typeof e == "function" ? e : gs(e)),
  );
}
function Hl(e) {
  if (typeof e != "function") {
    e = ps(e);
  }
  var t = this._groups;
  for (var n = t.length, r = new Array(n), i = 0; i < n; ++i) {
    var s = t[i];
    for (var o = s.length, a = (r[i] = []), l, d = 0; d < o; ++d) {
      if ((l = s[d]) && e.call(l, l.__data__, d, s)) {
        a.push(l);
      }
    }
  }
  return new fe(r, this._parents);
}
function ms(e) {
  return new Array(e.length);
}
function zl() {
  return new fe(this._enter || this._groups.map(ms), this._parents);
}
function Xt(e, t) {
  this.ownerDocument = e.ownerDocument;
  this.namespaceURI = e.namespaceURI;
  this._next = null;
  this._parent = e;
  this.__data__ = t;
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
  for (var o = 0, a, l = t.length, d = s.length; o < d; ++o) {
    if ((a = t[o])) {
      a.__data__ = s[o];
      r[o] = a;
    } else {
      n[o] = new Xt(e, s[o]);
    }
  }
  for (; o < l; ++o) {
    if ((a = t[o])) {
      i[o] = a;
    }
  }
}
function Bl(e, t, n, r, i, s, o) {
  var a;
  var l;
  var d = new Map();
  var u = t.length;
  var c = s.length;
  var f = new Array(u);
  var h;
  for (a = 0; a < u; ++a) {
    if ((l = t[a])) {
      f[a] = h = o.call(l, l.__data__, a, t) + "";
      if (d.has(h)) {
        i[a] = l;
      } else {
        d.set(h, l);
      }
    }
  }
  for (a = 0; a < c; ++a) {
    h = o.call(e, s[a], a, s) + "";
    if ((l = d.get(h))) {
      r[a] = l;
      l.__data__ = s[a];
      d.delete(h);
    } else {
      n[a] = new Xt(e, s[a]);
    }
  }
  for (a = 0; a < u; ++a) {
    if ((l = t[a]) && d.get(f[a]) === l) {
      i[a] = l;
    }
  }
}
function ql(e) {
  return e.__data__;
}
function Wl(e, t) {
  if (!arguments.length) {
    return Array.from(this, ql);
  }
  var n = t ? Bl : Fl;
  var r = this._parents;
  var i = this._groups;
  if (typeof e != "function") {
    e = Vl(e);
  }
  for (
    var s = i.length,
      o = new Array(s),
      a = new Array(s),
      l = new Array(s),
      d = 0;
    d < s;
    ++d
  ) {
    var u = r[d];
    var c = i[d];
    var f = c.length;
    var h = Yl(e.call(u, u && u.__data__, d, r));
    var p = h.length;
    var v = (a[d] = new Array(p));
    var m = (o[d] = new Array(p));
    var y = (l[d] = new Array(f));
    n(u, c, v, m, y, h, t);
    for (var x = 0, g = 0, w, C; x < p; ++x) {
      if ((w = v[x])) {
        for (x >= g && (g = x + 1); !(C = m[g]) && ++g < p;);
        w._next = C || null;
      }
    }
  }
  o = new fe(o, r);
  o._enter = a;
  o._exit = l;
  return o;
}
function Yl(e) {
  if (typeof e == "object" && "length" in e) {
    return e;
  } else {
    return Array.from(e);
  }
}
function Gl() {
  return new fe(this._exit || this._groups.map(ms), this._parents);
}
function Xl(e, t, n) {
  var r = this.enter();
  var i = this;
  var s = this.exit();
  if (typeof e == "function") {
    r = e(r);
    r &&= r.selection();
  } else {
    r = r.append(e + "");
  }
  if (t != null) {
    i = t(i);
    i &&= i.selection();
  }
  if (n == null) {
    s.remove();
  } else {
    n(s);
  }
  if (r && i) {
    return r.merge(i).order();
  } else {
    return i;
  }
}
function Ul(e) {
  var t = e.selection ? e.selection() : e;
  var n = this._groups;
  var r = t._groups;
  var i = n.length;
  var s = r.length;
  for (var o = Math.min(i, s), a = new Array(i), l = 0; l < o; ++l) {
    var d = n[l];
    var u = r[l];
    for (var c = d.length, f = (a[l] = new Array(c)), h, p = 0; p < c; ++p) {
      if ((h = d[p] || u[p])) {
        f[p] = h;
      }
    }
  }
  for (; l < i; ++l) {
    a[l] = n[l];
  }
  return new fe(a, this._parents);
}
function Kl() {
  var e = this._groups;
  for (var t = -1, n = e.length; ++t < n;) {
    var r = e[t];
    for (var i = r.length - 1, s = r[i], o; --i >= 0;) {
      if ((o = r[i])) {
        if (s && o.compareDocumentPosition(s) ^ 4) {
          s.parentNode.insertBefore(o, s);
        }
        s = o;
      }
    }
  }
  return this;
}
function Zl(e) {
  e ||= Ql;
  function t(c, f) {
    if (c && f) {
      return e(c.__data__, f.__data__);
    } else {
      return !c - !f;
    }
  }
  var n = this._groups;
  for (var r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    var o = n[s];
    for (var a = o.length, l = (i[s] = new Array(a)), d, u = 0; u < a; ++u) {
      if ((d = o[u])) {
        l[u] = d;
      }
    }
    l.sort(t);
  }
  return new fe(i, this._parents).order();
}
function Ql(e, t) {
  if (e < t) {
    return -1;
  } else if (e > t) {
    return 1;
  } else if (e >= t) {
    return 0;
  } else {
    return NaN;
  }
}
function Jl() {
  var e = arguments[0];
  arguments[0] = this;
  e.apply(null, arguments);
  return this;
}
function eu() {
  return Array.from(this);
}
function tu() {
  var e = this._groups;
  for (var t = 0, n = e.length; t < n; ++t) {
    var r = e[t];
    for (var i = 0, s = r.length; i < s; ++i) {
      var o = r[i];
      if (o) {
        return o;
      }
    }
  }
  return null;
}
function nu() {
  let e = 0;
  for (const t of this) {
    ++e;
  }
  return e;
}
function ru() {
  return !this.node();
}
function iu(e) {
  var t = this._groups;
  for (var n = 0, r = t.length; n < r; ++n) {
    var i = t[n];
    for (var s = 0, o = i.length, a; s < o; ++s) {
      if ((a = i[s])) {
        e.call(a, a.__data__, s, i);
      }
    }
  }
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
    if (n == null) {
      this.removeAttribute(e);
    } else {
      this.setAttribute(e, n);
    }
  };
}
function uu(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    if (n == null) {
      this.removeAttributeNS(e.space, e.local);
    } else {
      this.setAttributeNS(e.space, e.local, n);
    }
  };
}
function du(e, t) {
  var n = cn(e);
  if (arguments.length < 2) {
    var r = this.node();
    if (n.local) {
      return r.getAttributeNS(n.space, n.local);
    } else {
      return r.getAttribute(n);
    }
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
  return (
    (e.ownerDocument && e.ownerDocument.defaultView) ||
    (e.document && e) ||
    e.defaultView
  );
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
    if (r == null) {
      this.style.removeProperty(e);
    } else {
      this.style.setProperty(e, r, n);
    }
  };
}
function gu(e, t, n) {
  if (arguments.length > 1) {
    return this.each(
      (t == null ? fu : typeof t == "function" ? pu : hu)(e, t, n ?? ""),
    );
  } else {
    return rt(this.node(), e);
  }
}
function rt(e, t) {
  return (
    e.style.getPropertyValue(t) ||
    ys(e).getComputedStyle(e, null).getPropertyValue(t)
  );
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
    if (n == null) {
      delete this[e];
    } else {
      this[e] = n;
    }
  };
}
function wu(e, t) {
  if (arguments.length > 1) {
    return this.each((t == null ? mu : typeof t == "function" ? xu : yu)(e, t));
  } else {
    return this.node()[e];
  }
}
function xs(e) {
  return e.trim().split(/^|\s+/);
}
function jr(e) {
  return e.classList || new ws(e);
}
function ws(e) {
  this._node = e;
  this._names = xs(e.getAttribute("class") || "");
}
ws.prototype = {
  add: function (e) {
    var t = this._names.indexOf(e);
    if (t < 0) {
      this._names.push(e);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function (e) {
    var t = this._names.indexOf(e);
    if (t >= 0) {
      this._names.splice(t, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function (e) {
    return this._names.indexOf(e) >= 0;
  },
};
function vs(e, t) {
  var n = jr(e);
  for (var r = -1, i = t.length; ++r < i;) {
    n.add(t[r]);
  }
}
function bs(e, t) {
  var n = jr(e);
  for (var r = -1, i = t.length; ++r < i;) {
    n.remove(t[r]);
  }
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
    var r = jr(this.node());
    for (var i = -1, s = n.length; ++i < s;) {
      if (!r.contains(n[i])) {
        return false;
      }
    }
    return true;
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
  if (arguments.length) {
    return this.each(e == null ? Su : (typeof e == "function" ? Cu : Nu)(e));
  } else {
    return this.node().textContent;
  }
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
  if (arguments.length) {
    return this.each(e == null ? Mu : (typeof e == "function" ? Pu : Iu)(e));
  } else {
    return this.node().innerHTML;
  }
}
function Tu() {
  if (this.nextSibling) {
    this.parentNode.appendChild(this);
  }
}
function Ru() {
  return this.each(Tu);
}
function Lu() {
  if (this.previousSibling) {
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
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
  var n = typeof e == "function" ? e : fs(e);
  var r = t == null ? Ou : typeof t == "function" ? t : Or(t);
  return this.select(function () {
    return this.insertBefore(
      n.apply(this, arguments),
      r.apply(this, arguments) || null,
    );
  });
}
function Hu() {
  var e = this.parentNode;
  if (e) {
    e.removeChild(this);
  }
}
function zu() {
  return this.each(Hu);
}
function Vu() {
  var e = this.cloneNode(false);
  var t = this.parentNode;
  if (t) {
    return t.insertBefore(e, this.nextSibling);
  } else {
    return e;
  }
}
function Fu() {
  var e = this.cloneNode(true);
  var t = this.parentNode;
  if (t) {
    return t.insertBefore(e, this.nextSibling);
  } else {
    return e;
  }
}
function Bu(e) {
  return this.select(e ? Fu : Vu);
}
function qu(e) {
  if (arguments.length) {
    return this.property("__data__", e);
  } else {
    return this.node().__data__;
  }
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
      var n = "";
      var r = t.indexOf(".");
      if (r >= 0) {
        n = t.slice(r + 1);
        t = t.slice(0, r);
      }
      return {
        type: t,
        name: n,
      };
    });
}
function Gu(e) {
  return function () {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, i = t.length, s; n < i; ++n) {
        s = t[n];
        if ((!e.type || s.type === e.type) && s.name === e.name) {
          this.removeEventListener(s.type, s.listener, s.options);
        } else {
          t[++r] = s;
        }
      }
      if (++r) {
        t.length = r;
      } else {
        delete this.__on;
      }
    }
  };
}
function Xu(e, t, n) {
  return function () {
    var r = this.__on;
    var i;
    var s = Wu(t);
    if (r) {
      for (var o = 0, a = r.length; o < a; ++o) {
        if ((i = r[o]).type === e.type && i.name === e.name) {
          this.removeEventListener(i.type, i.listener, i.options);
          this.addEventListener(i.type, (i.listener = s), (i.options = n));
          i.value = t;
          return;
        }
      }
    }
    this.addEventListener(e.type, s, n);
    i = {
      type: e.type,
      name: e.name,
      value: t,
      listener: s,
      options: n,
    };
    if (r) {
      r.push(i);
    } else {
      this.__on = [i];
    }
  };
}
function Uu(e, t, n) {
  var r = Yu(e + "");
  var i;
  var s = r.length;
  var o;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, d = a.length, u; l < d; ++l) {
        i = 0;
        u = a[l];
        for (; i < s; ++i) {
          if ((o = r[i]).type === u.type && o.name === u.name) {
            return u.value;
          }
        }
      }
    }
    return;
  }
  a = t ? Xu : Gu;
  i = 0;
  for (; i < s; ++i) {
    this.each(a(r[i], t, n));
  }
  return this;
}
function _s(e, t, n) {
  var r = ys(e);
  var i = r.CustomEvent;
  if (typeof i == "function") {
    i = new i(t, n);
  } else {
    i = r.document.createEvent("Event");
    if (n) {
      i.initEvent(t, n.bubbles, n.cancelable);
      i.detail = n.detail;
    } else {
      i.initEvent(t, false, false);
    }
  }
  e.dispatchEvent(i);
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
  var e = this._groups;
  for (var t = 0, n = e.length; t < n; ++t) {
    var r = e[t];
    for (var i = 0, s = r.length, o; i < s; ++i) {
      if ((o = r[i])) {
        yield o;
      }
    }
  }
}
var Es = [null];
function fe(e, t) {
  this._groups = e;
  this._parents = t;
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
  if (typeof e == "string") {
    return new fe([[document.querySelector(e)]], [document.documentElement]);
  } else {
    return new fe([[e]], Es);
  }
}
function td(e) {
  let t;
  while ((t = e.sourceEvent)) {
    e = t;
  }
  return e;
}
function me(e, t) {
  e = td(e);
  if (t === undefined) {
    t = e.currentTarget;
  }
  if (t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      r.x = e.clientX;
      r.y = e.clientY;
      r = r.matrixTransform(t.getScreenCTM().inverse());
      return [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var i = t.getBoundingClientRect();
      return [
        e.clientX - i.left - t.clientLeft,
        e.clientY - i.top - t.clientTop,
      ];
    }
  }
  return [e.pageX, e.pageY];
}
const nd = {
  passive: false,
};
const xt = {
  capture: true,
  passive: false,
};
function bn(e) {
  e.stopImmediatePropagation();
}
function et(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
}
function Ss(e) {
  var t = e.document.documentElement;
  var n = de(e).on("dragstart.drag", et, xt);
  if ("onselectstart" in t) {
    n.on("selectstart.drag", et, xt);
  } else {
    t.__noselect = t.style.MozUserSelect;
    t.style.MozUserSelect = "none";
  }
}
function Ns(e, t) {
  var n = e.document.documentElement;
  var r = de(e).on("dragstart.drag", null);
  if (t) {
    r.on("click.drag", et, xt);
    setTimeout(function () {
      r.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in n) {
    r.on("selectstart.drag", null);
  } else {
    n.style.MozUserSelect = n.__noselect;
    delete n.__noselect;
  }
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
    type: {
      value: e,
      enumerable: true,
      configurable: true,
    },
    sourceEvent: {
      value: t,
      enumerable: true,
      configurable: true,
    },
    subject: {
      value: n,
      enumerable: true,
      configurable: true,
    },
    target: {
      value: r,
      enumerable: true,
      configurable: true,
    },
    identifier: {
      value: i,
      enumerable: true,
      configurable: true,
    },
    active: {
      value: s,
      enumerable: true,
      configurable: true,
    },
    x: {
      value: o,
      enumerable: true,
      configurable: true,
    },
    y: {
      value: a,
      enumerable: true,
      configurable: true,
    },
    dx: {
      value: l,
      enumerable: true,
      configurable: true,
    },
    dy: {
      value: d,
      enumerable: true,
      configurable: true,
    },
    _: {
      value: u,
    },
  });
}
Sr.prototype.on = function () {
  var e = this._.on.apply(this._, arguments);
  if (e === this._) {
    return this;
  } else {
    return e;
  }
};
function rd(e) {
  return !e.ctrlKey && !e.button;
}
function id() {
  return this.parentNode;
}
function od(e, t) {
  return (
    t ?? {
      x: e.x,
      y: e.y,
    }
  );
}
function sd() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Cs() {
  var e = rd;
  var t = id;
  var n = od;
  var r = sd;
  var i = {};
  var s = an("start", "drag", "end");
  var o = 0;
  var a;
  var l;
  var d;
  var u;
  var c = 0;
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
    if (!u && !!e.call(this, w, C)) {
      var N = g(this, t.call(this, w, C), w, C, "mouse");
      if (N) {
        de(w.view).on("mousemove.drag", p, xt).on("mouseup.drag", v, xt);
        Ss(w.view);
        bn(w);
        d = false;
        a = w.clientX;
        l = w.clientY;
        N("start", w);
      }
    }
  }
  function p(w) {
    et(w);
    if (!d) {
      var C = w.clientX - a;
      var N = w.clientY - l;
      d = C * C + N * N > c;
    }
    i.mouse("drag", w);
  }
  function v(w) {
    de(w.view).on("mousemove.drag mouseup.drag", null);
    Ns(w.view, d);
    et(w);
    i.mouse("end", w);
  }
  function m(w, C) {
    if (e.call(this, w, C)) {
      var N = w.changedTouches;
      var M = t.call(this, w, C);
      var b = N.length;
      var S;
      var I;
      for (S = 0; S < b; ++S) {
        if ((I = g(this, M, w, C, N[S].identifier, N[S]))) {
          bn(w);
          I("start", w, N[S]);
        }
      }
    }
  }
  function y(w) {
    var C = w.changedTouches;
    var N = C.length;
    var M;
    var b;
    for (M = 0; M < N; ++M) {
      if ((b = i[C[M].identifier])) {
        et(w);
        b("drag", w, C[M]);
      }
    }
  }
  function x(w) {
    var C = w.changedTouches;
    var N = C.length;
    var M;
    var b;
    if (u) {
      clearTimeout(u);
    }
    u = setTimeout(function () {
      u = null;
    }, 500);
    M = 0;
    for (; M < N; ++M) {
      if ((b = i[C[M].identifier])) {
        bn(w);
        b("end", w, C[M]);
      }
    }
  }
  function g(w, C, N, M, b, S) {
    var I = s.copy();
    var E = me(S || N, C);
    var k;
    var O;
    var _;
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
    ) {
      k = _.x - E[0] || 0;
      O = _.y - E[1] || 0;
      return function T(A, D, V) {
        var $ = E;
        var B;
        switch (A) {
          case "start":
            i[b] = T;
            B = o++;
            break;
          case "end":
            delete i[b];
            --o;
          case "drag":
            E = me(V || D, C);
            B = o;
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
      };
    }
  }
  f.filter = function (w) {
    if (arguments.length) {
      e = typeof w == "function" ? w : Rt(!!w);
      return f;
    } else {
      return e;
    }
  };
  f.container = function (w) {
    if (arguments.length) {
      t = typeof w == "function" ? w : Rt(w);
      return f;
    } else {
      return t;
    }
  };
  f.subject = function (w) {
    if (arguments.length) {
      n = typeof w == "function" ? w : Rt(w);
      return f;
    } else {
      return n;
    }
  };
  f.touchable = function (w) {
    if (arguments.length) {
      r = typeof w == "function" ? w : Rt(!!w);
      return f;
    } else {
      return r;
    }
  };
  f.on = function () {
    var w = s.on.apply(s, arguments);
    if (w === s) {
      return f;
    } else {
      return w;
    }
  };
  f.clickDistance = function (w) {
    if (arguments.length) {
      c = (w = +w) * w;
      return f;
    } else {
      return Math.sqrt(c);
    }
  };
  return f;
}
function Hr(e, t, n) {
  e.prototype = t.prototype = n;
  n.constructor = e;
}
function ks(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) {
    n[r] = t[r];
  }
  return n;
}
function Mt() {}
var wt = 0.7;
var Ut = 1 / wt;
var tt = "\\s*([+-]?\\d+)\\s*";
var vt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var Ce = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var ad = /^#([0-9a-f]{3,8})$/;
var cd = new RegExp(`^rgb\\(${tt},${tt},${tt}\\)$`);
var ld = new RegExp(`^rgb\\(${Ce},${Ce},${Ce}\\)$`);
var ud = new RegExp(`^rgba\\(${tt},${tt},${tt},${vt}\\)$`);
var dd = new RegExp(`^rgba\\(${Ce},${Ce},${Ce},${vt}\\)$`);
var fd = new RegExp(`^hsl\\(${vt},${Ce},${Ce}\\)$`);
var hd = new RegExp(`^hsla\\(${vt},${Ce},${Ce},${vt}\\)$`);
var mi = {
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
  var t;
  var n;
  e = (e + "").trim().toLowerCase();
  if ((t = ad.exec(e))) {
    n = t[1].length;
    t = parseInt(t[1], 16);
    if (n === 6) {
      return wi(t);
    } else if (n === 3) {
      return new ue(
        ((t >> 8) & 15) | ((t >> 4) & 240),
        ((t >> 4) & 15) | (t & 240),
        ((t & 15) << 4) | (t & 15),
        1,
      );
    } else if (n === 8) {
      return Lt(
        (t >> 24) & 255,
        (t >> 16) & 255,
        (t >> 8) & 255,
        (t & 255) / 255,
      );
    } else if (n === 4) {
      return Lt(
        ((t >> 12) & 15) | ((t >> 8) & 240),
        ((t >> 8) & 15) | ((t >> 4) & 240),
        ((t >> 4) & 15) | (t & 240),
        (((t & 15) << 4) | (t & 15)) / 255,
      );
    } else {
      return null;
    }
  } else if ((t = cd.exec(e))) {
    return new ue(t[1], t[2], t[3], 1);
  } else if ((t = ld.exec(e))) {
    return new ue(
      (t[1] * 255) / 100,
      (t[2] * 255) / 100,
      (t[3] * 255) / 100,
      1,
    );
  } else if ((t = ud.exec(e))) {
    return Lt(t[1], t[2], t[3], t[4]);
  } else if ((t = dd.exec(e))) {
    return Lt((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4]);
  } else if ((t = fd.exec(e))) {
    return _i(t[1], t[2] / 100, t[3] / 100, 1);
  } else if ((t = hd.exec(e))) {
    return _i(t[1], t[2] / 100, t[3] / 100, t[4]);
  } else if (mi.hasOwnProperty(e)) {
    return wi(mi[e]);
  } else if (e === "transparent") {
    return new ue(NaN, NaN, NaN, 0);
  } else {
    return null;
  }
}
function wi(e) {
  return new ue((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function Lt(e, t, n, r) {
  if (r <= 0) {
    e = t = n = NaN;
  }
  return new ue(e, t, n, r);
}
function md(e) {
  if (!(e instanceof Mt)) {
    e = Ye(e);
  }
  if (e) {
    e = e.rgb();
    return new ue(e.r, e.g, e.b, e.opacity);
  } else {
    return new ue();
  }
}
function Nr(e, t, n, r) {
  if (arguments.length === 1) {
    return md(e);
  } else {
    return new ue(e, t, n, r ?? 1);
  }
}
function ue(e, t, n, r) {
  this.r = +e;
  this.g = +t;
  this.b = +n;
  this.opacity = +r;
}
Hr(
  ue,
  Nr,
  ks(Mt, {
    brighter(e) {
      e = e == null ? Ut : Math.pow(Ut, e);
      return new ue(this.r * e, this.g * e, this.b * e, this.opacity);
    },
    darker(e) {
      e = e == null ? wt : Math.pow(wt, e);
      return new ue(this.r * e, this.g * e, this.b * e, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new ue(qe(this.r), qe(this.g), qe(this.b), Kt(this.opacity));
    },
    displayable() {
      return (
        this.r >= -0.5 &&
        this.r < 255.5 &&
        this.g >= -0.5 &&
        this.g < 255.5 &&
        this.b >= -0.5 &&
        this.b < 255.5 &&
        this.opacity >= 0 &&
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
  if (isNaN(e)) {
    return 1;
  } else {
    return Math.max(0, Math.min(1, e));
  }
}
function qe(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Be(e) {
  e = qe(e);
  return (e < 16 ? "0" : "") + e.toString(16);
}
function _i(e, t, n, r) {
  if (r <= 0) {
    e = t = n = NaN;
  } else if (n <= 0 || n >= 1) {
    e = t = NaN;
  } else if (t <= 0) {
    e = NaN;
  }
  return new ye(e, t, n, r);
}
function Ms(e) {
  if (e instanceof ye) {
    return new ye(e.h, e.s, e.l, e.opacity);
  }
  if (!(e instanceof Mt)) {
    e = Ye(e);
  }
  if (!e) {
    return new ye();
  }
  if (e instanceof ye) {
    return e;
  }
  e = e.rgb();
  var t = e.r / 255;
  var n = e.g / 255;
  var r = e.b / 255;
  var i = Math.min(t, n, r);
  var s = Math.max(t, n, r);
  var o = NaN;
  var a = s - i;
  var l = (s + i) / 2;
  if (a) {
    if (t === s) {
      o = (n - r) / a + (n < r) * 6;
    } else if (n === s) {
      o = (r - t) / a + 2;
    } else {
      o = (t - n) / a + 4;
    }
    a /= l < 0.5 ? s + i : 2 - s - i;
    o *= 60;
  } else {
    a = l > 0 && l < 1 ? 0 : o;
  }
  return new ye(o, a, l, e.opacity);
}
function xd(e, t, n, r) {
  if (arguments.length === 1) {
    return Ms(e);
  } else {
    return new ye(e, t, n, r ?? 1);
  }
}
function ye(e, t, n, r) {
  this.h = +e;
  this.s = +t;
  this.l = +n;
  this.opacity = +r;
}
Hr(
  ye,
  xd,
  ks(Mt, {
    brighter(e) {
      e = e == null ? Ut : Math.pow(Ut, e);
      return new ye(this.h, this.s, this.l * e, this.opacity);
    },
    darker(e) {
      e = e == null ? wt : Math.pow(wt, e);
      return new ye(this.h, this.s, this.l * e, this.opacity);
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360;
      var t = isNaN(e) || isNaN(this.s) ? 0 : this.s;
      var n = this.l;
      var r = n + (n < 0.5 ? n : 1 - n) * t;
      var i = n * 2 - r;
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
        ((this.s >= 0 && this.s <= 1) || isNaN(this.s)) &&
        this.l >= 0 &&
        this.l <= 1 &&
        this.opacity >= 0 &&
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
  e = (e || 0) % 360;
  if (e < 0) {
    return e + 360;
  } else {
    return e;
  }
}
function $t(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function _n(e, t, n) {
  return (
    (e < 60
      ? t + ((n - t) * e) / 60
      : e < 180
        ? n
        : e < 240
          ? t + ((n - t) * (240 - e)) / 60
          : t) * 255
  );
}
const zr = (e) => () => e;
function wd(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function vd(e, t, n) {
  e = Math.pow(e, n);
  t = Math.pow(t, n) - e;
  n = 1 / n;
  return function (r) {
    return Math.pow(e + r * t, n);
  };
}
function bd(e) {
  if ((e = +e) == 1) {
    return Is;
  } else {
    return function (t, n) {
      if (n - t) {
        return vd(t, n, e);
      } else {
        return zr(isNaN(t) ? n : t);
      }
    };
  }
}
function Is(e, t) {
  var n = t - e;
  if (n) {
    return wd(e, n);
  } else {
    return zr(isNaN(e) ? t : e);
  }
}
const Zt = (function e(t) {
  var n = bd(t);
  function r(i, s) {
    var o = n((i = Nr(i)).r, (s = Nr(s)).r);
    var a = n(i.g, s.g);
    var l = n(i.b, s.b);
    var d = Is(i.opacity, s.opacity);
    return function (u) {
      i.r = o(u);
      i.g = a(u);
      i.b = l(u);
      i.opacity = d(u);
      return i + "";
    };
  }
  r.gamma = e;
  return r;
})(1);
function _d(e, t) {
  t ||= [];
  var n = e ? Math.min(t.length, e.length) : 0;
  var r = t.slice();
  var i;
  return function (s) {
    for (i = 0; i < n; ++i) {
      r[i] = e[i] * (1 - s) + t[i] * s;
    }
    return r;
  };
}
function Ed(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Sd(e, t) {
  var n = t ? t.length : 0;
  var r = e ? Math.min(n, e.length) : 0;
  var i = new Array(r);
  var s = new Array(n);
  var o;
  for (o = 0; o < r; ++o) {
    i[o] = mt(e[o], t[o]);
  }
  for (; o < n; ++o) {
    s[o] = t[o];
  }
  return function (a) {
    for (o = 0; o < r; ++o) {
      s[o] = i[o](a);
    }
    return s;
  };
}
function Nd(e, t) {
  var n = new Date();
  e = +e;
  t = +t;
  return function (r) {
    n.setTime(e * (1 - r) + t * r);
    return n;
  };
}
function Ne(e, t) {
  e = +e;
  t = +t;
  return function (n) {
    return e * (1 - n) + t * n;
  };
}
function Cd(e, t) {
  var n = {};
  var r = {};
  var i;
  if (e === null || typeof e != "object") {
    e = {};
  }
  if (t === null || typeof t != "object") {
    t = {};
  }
  for (i in t) {
    if (i in e) {
      n[i] = mt(e[i], t[i]);
    } else {
      r[i] = t[i];
    }
  }
  return function (s) {
    for (i in n) {
      r[i] = n[i](s);
    }
    return r;
  };
}
var Cr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var En = new RegExp(Cr.source, "g");
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
  var n = (Cr.lastIndex = En.lastIndex = 0);
  var r;
  var i;
  var s;
  var o = -1;
  var a = [];
  var l = [];
  e = e + "";
  t = t + "";
  while ((r = Cr.exec(e)) && (i = En.exec(t))) {
    if ((s = i.index) > n) {
      s = t.slice(n, s);
      if (a[o]) {
        a[o] += s;
      } else {
        a[++o] = s;
      }
    }
    if ((r = r[0]) === (i = i[0])) {
      if (a[o]) {
        a[o] += i;
      } else {
        a[++o] = i;
      }
    } else {
      a[++o] = null;
      l.push({
        i: o,
        x: Ne(r, i),
      });
    }
    n = En.lastIndex;
  }
  if (n < t.length) {
    s = t.slice(n);
    if (a[o]) {
      a[o] += s;
    } else {
      a[++o] = s;
    }
  }
  if (a.length < 2) {
    if (l[0]) {
      return Md(l[0].x);
    } else {
      return kd(t);
    }
  } else {
    t = l.length;
    return function (d) {
      for (var u = 0, c; u < t; ++u) {
        a[(c = l[u]).i] = c.x(d);
      }
      return a.join("");
    };
  }
}
function mt(e, t) {
  var n = typeof t;
  var r;
  if (t == null || n === "boolean") {
    return zr(t);
  } else {
    return (
      n === "number"
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
                  : (typeof t.valueOf != "function" &&
                        typeof t.toString != "function") ||
                      isNaN(t)
                    ? Cd
                    : Ne
    )(e, t);
  }
}
var Si = 180 / Math.PI;
var kr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1,
};
function As(e, t, n, r, i, s) {
  var o;
  var a;
  var l;
  if ((o = Math.sqrt(e * e + t * t))) {
    e /= o;
    t /= o;
  }
  if ((l = e * n + t * r)) {
    n -= e * l;
    r -= t * l;
  }
  if ((a = Math.sqrt(n * n + r * r))) {
    n /= a;
    r /= a;
    l /= a;
  }
  if (e * r < t * n) {
    e = -e;
    t = -t;
    l = -l;
    o = -o;
  }
  return {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(t, e) * Si,
    skewX: Math.atan(l) * Si,
    scaleX: o,
    scaleY: a,
  };
}
var Dt;
function Id(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(
    e + "",
  );
  if (t.isIdentity) {
    return kr;
  } else {
    return As(t.a, t.b, t.c, t.d, t.e, t.f);
  }
}
function Pd(e) {
  if (
    e == null ||
    ((Dt ||= document.createElementNS("http://www.w3.org/2000/svg", "g")),
    Dt.setAttribute("transform", e),
    !(e = Dt.transform.baseVal.consolidate()))
  ) {
    return kr;
  } else {
    e = e.matrix;
    return As(e.a, e.b, e.c, e.d, e.e, e.f);
  }
}
function Ts(e, t, n, r) {
  function i(d) {
    if (d.length) {
      return d.pop() + " ";
    } else {
      return "";
    }
  }
  function s(d, u, c, f, h, p) {
    if (d !== c || u !== f) {
      var v = h.push("translate(", null, t, null, n);
      p.push(
        {
          i: v - 4,
          x: Ne(d, c),
        },
        {
          i: v - 2,
          x: Ne(u, f),
        },
      );
    } else if (c || f) {
      h.push("translate(" + c + t + f + n);
    }
  }
  function o(d, u, c, f) {
    if (d !== u) {
      if (d - u > 180) {
        u += 360;
      } else if (u - d > 180) {
        d += 360;
      }
      f.push({
        i: c.push(i(c) + "rotate(", null, r) - 2,
        x: Ne(d, u),
      });
    } else if (u) {
      c.push(i(c) + "rotate(" + u + r);
    }
  }
  function a(d, u, c, f) {
    if (d !== u) {
      f.push({
        i: c.push(i(c) + "skewX(", null, r) - 2,
        x: Ne(d, u),
      });
    } else if (u) {
      c.push(i(c) + "skewX(" + u + r);
    }
  }
  function l(d, u, c, f, h, p) {
    if (d !== c || u !== f) {
      var v = h.push(i(h) + "scale(", null, ",", null, ")");
      p.push(
        {
          i: v - 4,
          x: Ne(d, c),
        },
        {
          i: v - 2,
          x: Ne(u, f),
        },
      );
    } else if (c !== 1 || f !== 1) {
      h.push(i(h) + "scale(" + c + "," + f + ")");
    }
  }
  return function (d, u) {
    var c = [];
    var f = [];
    d = e(d);
    u = e(u);
    s(d.translateX, d.translateY, u.translateX, u.translateY, c, f);
    o(d.rotate, u.rotate, c, f);
    a(d.skewX, u.skewX, c, f);
    l(d.scaleX, d.scaleY, u.scaleX, u.scaleY, c, f);
    d = u = null;
    return function (h) {
      for (var p = -1, v = f.length, m; ++p < v;) {
        c[(m = f[p]).i] = m.x(h);
      }
      return c.join("");
    };
  };
}
var Ad = Ts(Id, "px, ", "px)", "deg)");
var Td = Ts(Pd, ", ", ")", ")");
var Rd = 1e-12;
function Ni(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Ld(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function $d(e) {
  return ((e = Math.exp(e * 2)) - 1) / (e + 1);
}
const Bt = (function e(t, n, r) {
  function i(s, o) {
    var a = s[0];
    var l = s[1];
    var d = s[2];
    var u = o[0];
    var c = o[1];
    var f = o[2];
    var h = u - a;
    var p = c - l;
    var v = h * h + p * p;
    var m;
    var y;
    if (v < Rd) {
      y = Math.log(f / d) / t;
      m = function (M) {
        return [a + M * h, l + M * p, d * Math.exp(t * M * y)];
      };
    } else {
      var x = Math.sqrt(v);
      var g = (f * f - d * d + r * v) / (d * 2 * n * x);
      var w = (f * f - d * d - r * v) / (f * 2 * n * x);
      var C = Math.log(Math.sqrt(g * g + 1) - g);
      var N = Math.log(Math.sqrt(w * w + 1) - w);
      y = (N - C) / t;
      m = function (M) {
        var b = M * y;
        var S = Ni(C);
        var I = (d / (n * x)) * (S * $d(t * b + C) - Ld(C));
        return [a + I * h, l + I * p, (d * S) / Ni(t * b + C)];
      };
    }
    m.duration = (y * 1000 * t) / Math.SQRT2;
    return m;
  }
  i.rho = function (s) {
    var o = Math.max(0.001, +s);
    var a = o * o;
    var l = a * a;
    return e(o, a, l);
  };
  return i;
})(Math.SQRT2, 2, 4);
var it = 0;
var pt = 0;
var ft = 0;
var Rs = 1000;
var Qt;
var gt;
var Jt = 0;
var Ge = 0;
var ln = 0;
var bt = typeof performance == "object" && performance.now ? performance : Date;
var Ls =
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
    if (typeof e != "function") {
      throw new TypeError("callback is not a function");
    }
    n = (n == null ? Vr() : +n) + (t == null ? 0 : +t);
    if (!this._next && gt !== this) {
      if (gt) {
        gt._next = this;
      } else {
        Qt = this;
      }
      gt = this;
    }
    this._call = e;
    this._time = n;
    Mr();
  },
  stop: function () {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      Mr();
    }
  },
};
function $s(e, t, n) {
  var r = new en();
  r.restart(e, t, n);
  return r;
}
function Od() {
  Vr();
  ++it;
  for (var e = Qt, t; e;) {
    if ((t = Ge - e._time) >= 0) {
      e._call.call(undefined, t);
    }
    e = e._next;
  }
  --it;
}
function Ci() {
  Ge = (Jt = bt.now()) + ln;
  it = pt = 0;
  try {
    Od();
  } finally {
    it = 0;
    Hd();
    Ge = 0;
  }
}
function jd() {
  var e = bt.now();
  var t = e - Jt;
  if (t > Rs) {
    ln -= t;
    Jt = e;
  }
}
function Hd() {
  for (var e, t = Qt, n, r = Infinity; t;) {
    if (t._call) {
      if (r > t._time) {
        r = t._time;
      }
      e = t;
      t = t._next;
    } else {
      n = t._next;
      t._next = null;
      t = e ? (e._next = n) : (Qt = n);
    }
  }
  gt = e;
  Mr(r);
}
function Mr(e) {
  if (!it) {
    pt &&= clearTimeout(pt);
    var t = e - Ge;
    if (t > 24) {
      if (e < Infinity) {
        pt = setTimeout(Ci, e - bt.now() - ln);
      }
      ft &&= clearInterval(ft);
    } else {
      if (!ft) {
        Jt = bt.now();
        ft = setInterval(jd, Rs);
      }
      it = 1;
      Ls(Ci);
    }
  }
}
function ki(e, t, n) {
  var r = new en();
  t = t == null ? 0 : +t;
  r.restart(
    (i) => {
      r.stop();
      e(i + t);
    },
    t,
    n,
  );
  return r;
}
var zd = an("start", "end", "cancel", "interrupt");
var Vd = [];
var Ds = 0;
var Mi = 1;
var Ir = 2;
var qt = 3;
var Ii = 4;
var Pr = 5;
var Wt = 6;
function un(e, t, n, r, i, s) {
  var o = e.__transition;
  if (!o) {
    e.__transition = {};
  } else if (n in o) {
    return;
  }
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
  if (n.state > Ds) {
    throw new Error("too late; already scheduled");
  }
  return n;
}
function ke(e, t) {
  var n = _e(e, t);
  if (n.state > qt) {
    throw new Error("too late; already running");
  }
  return n;
}
function _e(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) {
    throw new Error("transition not found");
  }
  return n;
}
function Fd(e, t, n) {
  var r = e.__transition;
  var i;
  r[t] = n;
  n.timer = $s(s, 0, n.time);
  function s(d) {
    n.state = Mi;
    n.timer.restart(o, n.delay, n.time);
    if (n.delay <= d) {
      o(d - n.delay);
    }
  }
  function o(d) {
    var u;
    var c;
    var f;
    var h;
    if (n.state !== Mi) {
      return l();
    }
    for (u in r) {
      h = r[u];
      if (h.name === n.name) {
        if (h.state === qt) {
          return ki(o);
        }
        if (h.state === Ii) {
          h.state = Wt;
          h.timer.stop();
          h.on.call("interrupt", e, e.__data__, h.index, h.group);
          delete r[u];
        } else if (+u < t) {
          h.state = Wt;
          h.timer.stop();
          h.on.call("cancel", e, e.__data__, h.index, h.group);
          delete r[u];
        }
      }
    }
    ki(function () {
      if (n.state === qt) {
        n.state = Ii;
        n.timer.restart(a, n.delay, n.time);
        a(d);
      }
    });
    n.state = Ir;
    n.on.call("start", e, e.__data__, n.index, n.group);
    if (n.state === Ir) {
      n.state = qt;
      i = new Array((f = n.tween.length));
      u = 0;
      c = -1;
      for (; u < f; ++u) {
        if ((h = n.tween[u].value.call(e, e.__data__, n.index, n.group))) {
          i[++c] = h;
        }
      }
      i.length = c + 1;
    }
  }
  function a(d) {
    var u =
      d < n.duration
        ? n.ease.call(null, d / n.duration)
        : (n.timer.restart(l), (n.state = Pr), 1);
    for (var c = -1, f = i.length; ++c < f;) {
      i[c].call(e, u);
    }
    if (n.state === Pr) {
      n.on.call("end", e, e.__data__, n.index, n.group);
      l();
    }
  }
  function l() {
    n.state = Wt;
    n.timer.stop();
    delete r[t];
    for (var d in r) {
      return;
    }
    delete e.__transition;
  }
}
function Yt(e, t) {
  var n = e.__transition;
  var r;
  var i;
  var s = true;
  var o;
  if (n) {
    t = t == null ? null : t + "";
    for (o in n) {
      if ((r = n[o]).name !== t) {
        s = false;
        continue;
      }
      i = r.state > Ir && r.state < Pr;
      r.state = Wt;
      r.timer.stop();
      r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group);
      delete n[o];
    }
    if (s) {
      delete e.__transition;
    }
  }
}
function Bd(e) {
  return this.each(function () {
    Yt(this, e);
  });
}
function qd(e, t) {
  var n;
  var r;
  return function () {
    var i = ke(this, e);
    var s = i.tween;
    if (s !== n) {
      r = n = s;
      for (var o = 0, a = r.length; o < a; ++o) {
        if (r[o].name === t) {
          r = r.slice();
          r.splice(o, 1);
          break;
        }
      }
    }
    i.tween = r;
  };
}
function Wd(e, t, n) {
  var r;
  var i;
  if (typeof n != "function") {
    throw new Error();
  }
  return function () {
    var s = ke(this, e);
    var o = s.tween;
    if (o !== r) {
      i = (r = o).slice();
      var a = {
        name: t,
        value: n,
      };
      for (var l = 0, d = i.length; l < d; ++l) {
        if (i[l].name === t) {
          i[l] = a;
          break;
        }
      }
      if (l === d) {
        i.push(a);
      }
    }
    s.tween = i;
  };
}
function Yd(e, t) {
  var n = this._id;
  e += "";
  if (arguments.length < 2) {
    var r = _e(this.node(), n).tween;
    for (var i = 0, s = r.length, o; i < s; ++i) {
      if ((o = r[i]).name === e) {
        return o.value;
      }
    }
    return null;
  }
  return this.each((t == null ? qd : Wd)(n, e, t));
}
function Br(e, t, n) {
  var r = e._id;
  e.each(function () {
    var i = ke(this, r);
    (i.value ||= {})[t] = n.apply(this, arguments);
  });
  return function (i) {
    return _e(i, r).value[t];
  };
}
function Os(e, t) {
  var n;
  return (
    typeof t == "number"
      ? Ne
      : t instanceof Ye
        ? Zt
        : (n = Ye(t))
          ? ((t = n), Zt)
          : Ps
  )(e, t);
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
  var r;
  var i = n + "";
  var s;
  return function () {
    var o = this.getAttribute(e);
    if (o === i) {
      return null;
    } else if (o === r) {
      return s;
    } else {
      return (s = t((r = o), n));
    }
  };
}
function Kd(e, t, n) {
  var r;
  var i = n + "";
  var s;
  return function () {
    var o = this.getAttributeNS(e.space, e.local);
    if (o === i) {
      return null;
    } else if (o === r) {
      return s;
    } else {
      return (s = t((r = o), n));
    }
  };
}
function Zd(e, t, n) {
  var r;
  var i;
  var s;
  return function () {
    var o;
    var a = n(this);
    var l;
    if (a == null) {
      this.removeAttribute(e);
      return;
    } else {
      o = this.getAttribute(e);
      l = a + "";
      if (o === l) {
        return null;
      } else if (o === r && l === i) {
        return s;
      } else {
        i = l;
        return (s = t((r = o), a));
      }
    }
  };
}
function Qd(e, t, n) {
  var r;
  var i;
  var s;
  return function () {
    var o;
    var a = n(this);
    var l;
    if (a == null) {
      this.removeAttributeNS(e.space, e.local);
      return;
    } else {
      o = this.getAttributeNS(e.space, e.local);
      l = a + "";
      if (o === l) {
        return null;
      } else if (o === r && l === i) {
        return s;
      } else {
        i = l;
        return (s = t((r = o), a));
      }
    }
  };
}
function Jd(e, t) {
  var n = cn(e);
  var r = n === "transform" ? Td : Os;
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
  var n;
  var r;
  function i() {
    var s = t.apply(this, arguments);
    if (s !== r) {
      n = (r = s) && tf(e, s);
    }
    return n;
  }
  i._value = t;
  return i;
}
function rf(e, t) {
  var n;
  var r;
  function i() {
    var s = t.apply(this, arguments);
    if (s !== r) {
      n = (r = s) && ef(e, s);
    }
    return n;
  }
  i._value = t;
  return i;
}
function of(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) {
    return (n = this.tween(n)) && n._value;
  }
  if (t == null) {
    return this.tween(n, null);
  }
  if (typeof t != "function") {
    throw new Error();
  }
  var r = cn(e);
  return this.tween(n, (r.local ? nf : rf)(r, t));
}
function sf(e, t) {
  return function () {
    Fr(this, e).delay = +t.apply(this, arguments);
  };
}
function af(e, t) {
  t = +t;
  return function () {
    Fr(this, e).delay = t;
  };
}
function cf(e) {
  var t = this._id;
  if (arguments.length) {
    return this.each((typeof e == "function" ? sf : af)(t, e));
  } else {
    return _e(this.node(), t).delay;
  }
}
function lf(e, t) {
  return function () {
    ke(this, e).duration = +t.apply(this, arguments);
  };
}
function uf(e, t) {
  t = +t;
  return function () {
    ke(this, e).duration = t;
  };
}
function df(e) {
  var t = this._id;
  if (arguments.length) {
    return this.each((typeof e == "function" ? lf : uf)(t, e));
  } else {
    return _e(this.node(), t).duration;
  }
}
function ff(e, t) {
  if (typeof t != "function") {
    throw new Error();
  }
  return function () {
    ke(this, e).ease = t;
  };
}
function hf(e) {
  var t = this._id;
  if (arguments.length) {
    return this.each(ff(t, e));
  } else {
    return _e(this.node(), t).ease;
  }
}
function pf(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    if (typeof n != "function") {
      throw new Error();
    }
    ke(this, e).ease = n;
  };
}
function gf(e) {
  if (typeof e != "function") {
    throw new Error();
  }
  return this.each(pf(this._id, e));
}
function mf(e) {
  if (typeof e != "function") {
    e = ps(e);
  }
  var t = this._groups;
  for (var n = t.length, r = new Array(n), i = 0; i < n; ++i) {
    var s = t[i];
    for (var o = s.length, a = (r[i] = []), l, d = 0; d < o; ++d) {
      if ((l = s[d]) && e.call(l, l.__data__, d, s)) {
        a.push(l);
      }
    }
  }
  return new Re(r, this._parents, this._name, this._id);
}
function yf(e) {
  if (e._id !== this._id) {
    throw new Error();
  }
  var t = this._groups;
  var n = e._groups;
  var r = t.length;
  var i = n.length;
  for (var s = Math.min(r, i), o = new Array(r), a = 0; a < s; ++a) {
    var l = t[a];
    var d = n[a];
    for (var u = l.length, c = (o[a] = new Array(u)), f, h = 0; h < u; ++h) {
      if ((f = l[h] || d[h])) {
        c[h] = f;
      }
    }
  }
  for (; a < r; ++a) {
    o[a] = t[a];
  }
  return new Re(o, this._parents, this._name, this._id);
}
function xf(e) {
  return (e + "")
    .trim()
    .split(/^|\s+/)
    .every(function (t) {
      var n = t.indexOf(".");
      if (n >= 0) {
        t = t.slice(0, n);
      }
      return !t || t === "start";
    });
}
function wf(e, t, n) {
  var r;
  var i;
  var s = xf(t) ? Fr : ke;
  return function () {
    var o = s(this, e);
    var a = o.on;
    if (a !== r) {
      (i = (r = a).copy()).on(t, n);
    }
    o.on = i;
  };
}
function vf(e, t) {
  var n = this._id;
  if (arguments.length < 2) {
    return _e(this.node(), n).on.on(e);
  } else {
    return this.each(wf(n, e, t));
  }
}
function bf(e) {
  return function () {
    var t = this.parentNode;
    for (var n in this.__transition) {
      if (+n !== e) {
        return;
      }
    }
    if (t) {
      t.removeChild(this);
    }
  };
}
function _f() {
  return this.on("end.remove", bf(this._id));
}
function Ef(e) {
  var t = this._name;
  var n = this._id;
  if (typeof e != "function") {
    e = Or(e);
  }
  var r = this._groups;
  for (var i = r.length, s = new Array(i), o = 0; o < i; ++o) {
    var a = r[o];
    for (var l = a.length, d = (s[o] = new Array(l)), u, c, f = 0; f < l; ++f) {
      if ((u = a[f]) && (c = e.call(u, u.__data__, f, a))) {
        if ("__data__" in u) {
          c.__data__ = u.__data__;
        }
        d[f] = c;
        un(d[f], t, n, f, d, _e(u, n));
      }
    }
  }
  return new Re(s, this._parents, t, n);
}
function Sf(e) {
  var t = this._name;
  var n = this._id;
  if (typeof e != "function") {
    e = hs(e);
  }
  var r = this._groups;
  for (var i = r.length, s = [], o = [], a = 0; a < i; ++a) {
    var l = r[a];
    for (var d = l.length, u, c = 0; c < d; ++c) {
      if ((u = l[c])) {
        var f = e.call(u, u.__data__, c, l);
        var h;
        var p = _e(u, n);
        for (var v = 0, m = f.length; v < m; ++v) {
          if ((h = f[v])) {
            un(h, t, n, v, f, p);
          }
        }
        s.push(f);
        o.push(u);
      }
    }
  }
  return new Re(s, o, t, n);
}
var Nf = kt.prototype.constructor;
function Cf() {
  return new Nf(this._groups, this._parents);
}
function kf(e, t) {
  var n;
  var r;
  var i;
  return function () {
    var s = rt(this, e);
    this.style.removeProperty(e);
    var o = rt(this, e);
    if (s === o) {
      return null;
    } else if (s === n && o === r) {
      return i;
    } else {
      return (i = t((n = s), (r = o)));
    }
  };
}
function js(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function Mf(e, t, n) {
  var r;
  var i = n + "";
  var s;
  return function () {
    var o = rt(this, e);
    if (o === i) {
      return null;
    } else if (o === r) {
      return s;
    } else {
      return (s = t((r = o), n));
    }
  };
}
function If(e, t, n) {
  var r;
  var i;
  var s;
  return function () {
    var o = rt(this, e);
    var a = n(this);
    var l = a + "";
    if (a == null) {
      this.style.removeProperty(e);
      l = a = rt(this, e);
    }
    if (o === l) {
      return null;
    } else if (o === r && l === i) {
      return s;
    } else {
      i = l;
      return (s = t((r = o), a));
    }
  };
}
function Pf(e, t) {
  var n;
  var r;
  var i;
  var s = "style." + t;
  var o = "end." + s;
  var a;
  return function () {
    var l = ke(this, e);
    var d = l.on;
    var u = l.value[s] == null ? (a ||= js(t)) : undefined;
    if (d !== n || i !== u) {
      (r = (n = d).copy()).on(o, (i = u));
    }
    l.on = r;
  };
}
function Af(e, t, n) {
  var r = (e += "") == "transform" ? Ad : Os;
  if (t == null) {
    return this.styleTween(e, kf(e, r)).on("end.style." + e, js(e));
  } else if (typeof t == "function") {
    return this.styleTween(e, If(e, r, Br(this, "style." + e, t))).each(
      Pf(this._id, e),
    );
  } else {
    return this.styleTween(e, Mf(e, r, t), n).on("end.style." + e, null);
  }
}
function Tf(e, t, n) {
  return function (r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Rf(e, t, n) {
  var r;
  var i;
  function s() {
    var o = t.apply(this, arguments);
    if (o !== i) {
      r = (i = o) && Tf(e, o, n);
    }
    return r;
  }
  s._value = t;
  return s;
}
function Lf(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) {
    return (r = this.tween(r)) && r._value;
  }
  if (t == null) {
    return this.tween(r, null);
  }
  if (typeof t != "function") {
    throw new Error();
  }
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
    typeof e == "function"
      ? Df(Br(this, "text", e))
      : $f(e == null ? "" : e + ""),
  );
}
function jf(e) {
  return function (t) {
    this.textContent = e.call(this, t);
  };
}
function Hf(e) {
  var t;
  var n;
  function r() {
    var i = e.apply(this, arguments);
    if (i !== n) {
      t = (n = i) && jf(i);
    }
    return t;
  }
  r._value = e;
  return r;
}
function zf(e) {
  var t = "text";
  if (arguments.length < 1) {
    return (t = this.tween(t)) && t._value;
  }
  if (e == null) {
    return this.tween(t, null);
  }
  if (typeof e != "function") {
    throw new Error();
  }
  return this.tween(t, Hf(e));
}
function Vf() {
  var e = this._name;
  var t = this._id;
  var n = Hs();
  var r = this._groups;
  for (var i = r.length, s = 0; s < i; ++s) {
    var o = r[s];
    for (var a = o.length, l, d = 0; d < a; ++d) {
      if ((l = o[d])) {
        var u = _e(l, t);
        un(l, e, n, d, o, {
          time: u.time + u.delay + u.duration,
          delay: 0,
          duration: u.duration,
          ease: u.ease,
        });
      }
    }
  }
  return new Re(r, this._parents, e, n);
}
function Ff() {
  var e;
  var t;
  var n = this;
  var r = n._id;
  var i = n.size();
  return new Promise(function (s, o) {
    var a = {
      value: o,
    };
    var l = {
      value: function () {
        if (--i === 0) {
          s();
        }
      },
    };
    n.each(function () {
      var d = ke(this, r);
      var u = d.on;
      if (u !== e) {
        t = (e = u).copy();
        t._.cancel.push(a);
        t._.interrupt.push(a);
        t._.end.push(l);
      }
      d.on = t;
    });
    if (i === 0) {
      s();
    }
  });
}
var Bf = 0;
function Re(e, t, n, r) {
  this._groups = e;
  this._parents = t;
  this._name = n;
  this._id = r;
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
var Wf = {
  time: null,
  delay: 0,
  duration: 250,
  ease: qf,
};
function Yf(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]);) {
    if (!(e = e.parentNode)) {
      throw new Error(`transition ${t} not found`);
    }
  }
  return n;
}
function Gf(e) {
  var t;
  var n;
  if (e instanceof Re) {
    t = e._id;
    e = e._name;
  } else {
    t = Hs();
    (n = Wf).time = Vr();
    e = e == null ? null : e + "";
  }
  var r = this._groups;
  for (var i = r.length, s = 0; s < i; ++s) {
    var o = r[s];
    for (var a = o.length, l, d = 0; d < a; ++d) {
      if ((l = o[d])) {
        un(l, e, t, d, o, n || Yf(l, t));
      }
    }
  }
  return new Re(r, this._parents, e, t);
}
kt.prototype.interrupt = Bd;
kt.prototype.transition = Gf;
const Ot = (e) => () => e;
function Xf(e, { sourceEvent: t, target: n, transform: r, dispatch: i }) {
  Object.defineProperties(this, {
    type: {
      value: e,
      enumerable: true,
      configurable: true,
    },
    sourceEvent: {
      value: t,
      enumerable: true,
      configurable: true,
    },
    target: {
      value: n,
      enumerable: true,
      configurable: true,
    },
    transform: {
      value: r,
      enumerable: true,
      configurable: true,
    },
    _: {
      value: i,
    },
  });
}
function Te(e, t, n) {
  this.k = e;
  this.x = t;
  this.y = n;
}
Te.prototype = {
  constructor: Te,
  scale: function (e) {
    if (e === 1) {
      return this;
    } else {
      return new Te(this.k * e, this.x, this.y);
    }
  },
  translate: function (e, t) {
    if ((e === 0) & (t === 0)) {
      return this;
    } else {
      return new Te(this.k, this.x + this.k * e, this.y + this.k * t);
    }
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
  while (!e.__zoom) {
    if (!(e = e.parentNode)) {
      return dn;
    }
  }
  return e.__zoom;
}
function Sn(e) {
  e.stopImmediatePropagation();
}
function ht(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
}
function Uf(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Kf() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [
        [e.x, e.y],
        [e.x + e.width, e.y + e.height],
      ];
    } else {
      return [
        [0, 0],
        [e.width.baseVal.value, e.height.baseVal.value],
      ];
    }
  } else {
    return [
      [0, 0],
      [e.clientWidth, e.clientHeight],
    ];
  }
}
function Pi() {
  return this.__zoom || dn;
}
function Zf(e) {
  return (
    -e.deltaY *
    (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) *
    (e.ctrlKey ? 10 : 1)
  );
}
function Qf() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Jf(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0];
  var i = e.invertX(t[1][0]) - n[1][0];
  var s = e.invertY(t[0][1]) - n[0][1];
  var o = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    o > s ? (s + o) / 2 : Math.min(0, s) || Math.max(0, o),
  );
}
function Vs() {
  var e = Uf;
  var t = Kf;
  var n = Jf;
  var r = Zf;
  var i = Qf;
  var s = [0, Infinity];
  var o = [
    [-Infinity, -Infinity],
    [Infinity, Infinity],
  ];
  var a = 250;
  var l = Bt;
  var d = an("start", "zoom", "end");
  var u;
  var c;
  var f;
  var h = 500;
  var p = 150;
  var v = 0;
  var m = 10;
  function y(_) {
    _.property("__zoom", Pi)
      .on("wheel.zoom", b, {
        passive: false,
      })
      .on("mousedown.zoom", S)
      .on("dblclick.zoom", I)
      .filter(i)
      .on("touchstart.zoom", E)
      .on("touchmove.zoom", k)
      .on("touchend.zoom touchcancel.zoom", O)
      .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  y.transform = function (_, T, A, D) {
    var V = _.selection ? _.selection() : _;
    V.property("__zoom", Pi);
    if (_ !== V) {
      C(_, T, A, D);
    } else {
      V.interrupt().each(function () {
        N(this, arguments)
          .event(D)
          .start()
          .zoom(null, typeof T == "function" ? T.apply(this, arguments) : T)
          .end();
      });
    }
  };
  y.scaleBy = function (_, T, A, D) {
    y.scaleTo(
      _,
      function () {
        var V = this.__zoom.k;
        var $ = typeof T == "function" ? T.apply(this, arguments) : T;
        return V * $;
      },
      A,
      D,
    );
  };
  y.scaleTo = function (_, T, A, D) {
    y.transform(
      _,
      function () {
        var V = t.apply(this, arguments);
        var $ = this.__zoom;
        var B =
          A == null
            ? w(V)
            : typeof A == "function"
              ? A.apply(this, arguments)
              : A;
        var q = $.invert(B);
        var F = typeof T == "function" ? T.apply(this, arguments) : T;
        return n(g(x($, F), B, q), V, o);
      },
      A,
      D,
    );
  };
  y.translateBy = function (_, T, A, D) {
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
  };
  y.translateTo = function (_, T, A, D, V) {
    y.transform(
      _,
      function () {
        var $ = t.apply(this, arguments);
        var B = this.__zoom;
        var q =
          D == null
            ? w($)
            : typeof D == "function"
              ? D.apply(this, arguments)
              : D;
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
  };
  function x(_, T) {
    T = Math.max(s[0], Math.min(s[1], T));
    if (T === _.k) {
      return _;
    } else {
      return new Te(T, _.x, _.y);
    }
  }
  function g(_, T, A) {
    var D = T[0] - A[0] * _.k;
    var V = T[1] - A[1] * _.k;
    if (D === _.x && V === _.y) {
      return _;
    } else {
      return new Te(_.k, D, V);
    }
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
        var V = this;
        var $ = arguments;
        var B = N(V, $).event(D);
        var q = t.apply(V, $);
        var F = A == null ? w(q) : typeof A == "function" ? A.apply(V, $) : A;
        var P = Math.max(q[1][0] - q[0][0], q[1][1] - q[0][1]);
        var L = V.__zoom;
        var j = typeof T == "function" ? T.apply(V, $) : T;
        var W = l(L.invert(F).concat(P / L.k), j.invert(F).concat(P / j.k));
        return function (G) {
          if (G === 1) {
            G = j;
          } else {
            var H = W(G);
            var Y = P / H[2];
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
    this.that = _;
    this.args = T;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = t.apply(_, T);
    this.taps = 0;
  }
  M.prototype = {
    event: function (_) {
      if (_) {
        this.sourceEvent = _;
      }
      return this;
    },
    start: function () {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function (_, T) {
      if (this.mouse && _ !== "mouse") {
        this.mouse[1] = T.invert(this.mouse[0]);
      }
      if (this.touch0 && _ !== "touch") {
        this.touch0[1] = T.invert(this.touch0[0]);
      }
      if (this.touch1 && _ !== "touch") {
        this.touch1[1] = T.invert(this.touch1[0]);
      }
      this.that.__zoom = T;
      this.emit("zoom");
      return this;
    },
    end: function () {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
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
    if (!e.apply(this, arguments)) {
      return;
    }
    var A = N(this, T).event(_);
    var D = this.__zoom;
    var V = Math.max(
      s[0],
      Math.min(s[1], D.k * Math.pow(2, r.apply(this, arguments))),
    );
    var $ = me(_);
    if (A.wheel) {
      if (A.mouse[0][0] !== $[0] || A.mouse[0][1] !== $[1]) {
        A.mouse[1] = D.invert((A.mouse[0] = $));
      }
      clearTimeout(A.wheel);
    } else {
      if (D.k === V) {
        return;
      }
      A.mouse = [$, D.invert($)];
      Yt(this);
      A.start();
    }
    ht(_);
    A.wheel = setTimeout(B, p);
    A.zoom("mouse", n(g(x(D, V), A.mouse[0], A.mouse[1]), A.extent, o));
    function B() {
      A.wheel = null;
      A.end();
    }
  }
  function S(_, ...T) {
    if (f || !e.apply(this, arguments)) {
      return;
    }
    var A = _.currentTarget;
    var D = N(this, T, true).event(_);
    var V = de(_.view)
      .on("mousemove.zoom", F, true)
      .on("mouseup.zoom", P, true);
    var $ = me(_, A);
    var B = _.clientX;
    var q = _.clientY;
    Ss(_.view);
    Sn(_);
    D.mouse = [$, this.__zoom.invert($)];
    Yt(this);
    D.start();
    function F(L) {
      ht(L);
      if (!D.moved) {
        var j = L.clientX - B;
        var W = L.clientY - q;
        D.moved = j * j + W * W > v;
      }
      D.event(L).zoom(
        "mouse",
        n(g(D.that.__zoom, (D.mouse[0] = me(L, A)), D.mouse[1]), D.extent, o),
      );
    }
    function P(L) {
      V.on("mousemove.zoom mouseup.zoom", null);
      Ns(L.view, D.moved);
      ht(L);
      D.event(L).end();
    }
  }
  function I(_, ...T) {
    if (e.apply(this, arguments)) {
      var A = this.__zoom;
      var D = me(_.changedTouches ? _.changedTouches[0] : _, this);
      var V = A.invert(D);
      var $ = A.k * (_.shiftKey ? 0.5 : 2);
      var B = n(g(x(A, $), D, V), t.apply(this, T), o);
      ht(_);
      if (a > 0) {
        de(this).transition().duration(a).call(C, B, D, _);
      } else {
        de(this).call(y.transform, B, D, _);
      }
    }
  }
  function E(_, ...T) {
    if (e.apply(this, arguments)) {
      var A = _.touches;
      var D = A.length;
      var V = N(this, T, _.changedTouches.length === D).event(_);
      var $;
      var B;
      var q;
      var F;
      Sn(_);
      B = 0;
      for (; B < D; ++B) {
        q = A[B];
        F = me(q, this);
        F = [F, this.__zoom.invert(F), q.identifier];
        if (V.touch0) {
          if (!V.touch1 && V.touch0[2] !== F[2]) {
            V.touch1 = F;
            V.taps = 0;
          }
        } else {
          V.touch0 = F;
          $ = true;
          V.taps = 1 + !!u;
        }
      }
      u &&= clearTimeout(u);
      if ($) {
        if (V.taps < 2) {
          c = F[0];
          u = setTimeout(function () {
            u = null;
          }, h);
        }
        Yt(this);
        V.start();
      }
    }
  }
  function k(_, ...T) {
    if (this.__zooming) {
      var A = N(this, T).event(_);
      var D = _.changedTouches;
      var V = D.length;
      var $;
      var B;
      var q;
      var F;
      ht(_);
      $ = 0;
      for (; $ < V; ++$) {
        B = D[$];
        q = me(B, this);
        if (A.touch0 && A.touch0[2] === B.identifier) {
          A.touch0[0] = q;
        } else if (A.touch1 && A.touch1[2] === B.identifier) {
          A.touch1[0] = q;
        }
      }
      B = A.that.__zoom;
      if (A.touch1) {
        var P = A.touch0[0];
        var L = A.touch0[1];
        var j = A.touch1[0];
        var W = A.touch1[1];
        var G = (G = j[0] - P[0]) * G + (G = j[1] - P[1]) * G;
        var H = (H = W[0] - L[0]) * H + (H = W[1] - L[1]) * H;
        B = x(B, Math.sqrt(G / H));
        q = [(P[0] + j[0]) / 2, (P[1] + j[1]) / 2];
        F = [(L[0] + W[0]) / 2, (L[1] + W[1]) / 2];
      } else if (A.touch0) {
        q = A.touch0[0];
        F = A.touch0[1];
      } else {
        return;
      }
      A.zoom("touch", n(g(B, q, F), A.extent, o));
    }
  }
  function O(_, ...T) {
    if (this.__zooming) {
      var A = N(this, T).event(_);
      var D = _.changedTouches;
      var V = D.length;
      var $;
      var B;
      Sn(_);
      if (f) {
        clearTimeout(f);
      }
      f = setTimeout(function () {
        f = null;
      }, h);
      $ = 0;
      for (; $ < V; ++$) {
        B = D[$];
        if (A.touch0 && A.touch0[2] === B.identifier) {
          delete A.touch0;
        } else if (A.touch1 && A.touch1[2] === B.identifier) {
          delete A.touch1;
        }
      }
      if (A.touch1 && !A.touch0) {
        A.touch0 = A.touch1;
        delete A.touch1;
      }
      if (A.touch0) {
        A.touch0[1] = this.__zoom.invert(A.touch0[0]);
      } else {
        A.end();
        if (
          A.taps === 2 &&
          ((B = me(B, this)), Math.hypot(c[0] - B[0], c[1] - B[1]) < m)
        ) {
          var q = de(this).on("dblclick.zoom");
          if (q) {
            q.apply(this, arguments);
          }
        }
      }
    }
  }
  y.wheelDelta = function (_) {
    if (arguments.length) {
      r = typeof _ == "function" ? _ : Ot(+_);
      return y;
    } else {
      return r;
    }
  };
  y.filter = function (_) {
    if (arguments.length) {
      e = typeof _ == "function" ? _ : Ot(!!_);
      return y;
    } else {
      return e;
    }
  };
  y.touchable = function (_) {
    if (arguments.length) {
      i = typeof _ == "function" ? _ : Ot(!!_);
      return y;
    } else {
      return i;
    }
  };
  y.extent = function (_) {
    if (arguments.length) {
      t =
        typeof _ == "function"
          ? _
          : Ot([
              [+_[0][0], +_[0][1]],
              [+_[1][0], +_[1][1]],
            ]);
      return y;
    } else {
      return t;
    }
  };
  y.scaleExtent = function (_) {
    if (arguments.length) {
      s[0] = +_[0];
      s[1] = +_[1];
      return y;
    } else {
      return [s[0], s[1]];
    }
  };
  y.translateExtent = function (_) {
    if (arguments.length) {
      o[0][0] = +_[0][0];
      o[1][0] = +_[1][0];
      o[0][1] = +_[0][1];
      o[1][1] = +_[1][1];
      return y;
    } else {
      return [
        [o[0][0], o[0][1]],
        [o[1][0], o[1][1]],
      ];
    }
  };
  y.constrain = function (_) {
    if (arguments.length) {
      n = _;
      return y;
    } else {
      return n;
    }
  };
  y.duration = function (_) {
    if (arguments.length) {
      a = +_;
      return y;
    } else {
      return a;
    }
  };
  y.interpolate = function (_) {
    if (arguments.length) {
      l = _;
      return y;
    } else {
      return l;
    }
  };
  y.on = function () {
    var _ = d.on.apply(d, arguments);
    if (_ === d) {
      return y;
    } else {
      return _;
    }
  };
  y.clickDistance = function (_) {
    if (arguments.length) {
      v = (_ = +_) * _;
      return y;
    } else {
      return Math.sqrt(v);
    }
  };
  y.tapDistance = function (_) {
    if (arguments.length) {
      m = +_;
      return y;
    } else {
      return m;
    }
  };
  return y;
}
const ve = {
  error001: (e = "react") =>
    `Seems like you have not used zustand provider as an ancestor. Help: https://${e}flow.dev/error#001`,
  error002: () =>
    "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
  error004: () =>
    "The parent container needs a width and a height to render the graph.",
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
};
const _t = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
];
const Fs = ["Enter", " ", "Escape"];
const Bs = {
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
  e.Strict = "strict";
  e.Loose = "loose";
})((ot ||= {}));
var We;
(function (e) {
  e.Free = "free";
  e.Vertical = "vertical";
  e.Horizontal = "horizontal";
})((We ||= {}));
var Et;
(function (e) {
  e.Partial = "partial";
  e.Full = "full";
})((Et ||= {}));
const qs = {
  inProgress: false,
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
  e.Bezier = "default";
  e.Straight = "straight";
  e.Step = "step";
  e.SmoothStep = "smoothstep";
  e.SimpleBezier = "simplebezier";
})((Oe ||= {}));
var tn;
(function (e) {
  e.Arrow = "arrow";
  e.ArrowClosed = "arrowclosed";
})((tn ||= {}));
var Z;
(function (e) {
  e.Left = "left";
  e.Top = "top";
  e.Right = "right";
  e.Bottom = "bottom";
})((Z ||= {}));
const Ai = {
  [Z.Left]: Z.Right,
  [Z.Right]: Z.Left,
  [Z.Top]: Z.Bottom,
  [Z.Bottom]: Z.Top,
};
function Ws(e) {
  if (e === null) {
    return null;
  } else if (e) {
    return "valid";
  } else {
    return "invalid";
  }
}
const Ys = (e) => "id" in e && "source" in e && "target" in e;
const eh = (e) =>
  "id" in e && "position" in e && !("source" in e) && !("target" in e);
const qr = (e) =>
  "id" in e && "internals" in e && !("source" in e) && !("target" in e);
const It = (e, t = [0, 0]) => {
  const { width: n, height: r } = Le(e);
  const i = e.origin ?? t;
  const s = n * i[0];
  const o = r * i[1];
  return {
    x: e.position.x - s,
    y: e.position.y - o,
  };
};
const th = (
  e,
  t = {
    nodeOrigin: [0, 0],
  },
) => {
  if (e.length === 0) {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
  }
  const n = e.reduce(
    (r, i) => {
      const s = typeof i == "string";
      let o = !t.nodeLookup && !s ? i : undefined;
      if (t.nodeLookup) {
        o = s ? t.nodeLookup.get(i) : qr(i) ? i : t.nodeLookup.get(i.id);
      }
      const a = o
        ? nn(o, t.nodeOrigin)
        : {
            x: 0,
            y: 0,
            x2: 0,
            y2: 0,
          };
      return fn(r, a);
    },
    {
      x: Infinity,
      y: Infinity,
      x2: -Infinity,
      y2: -Infinity,
    },
  );
  return hn(n);
};
const Pt = (e, t = {}) => {
  let n = {
    x: Infinity,
    y: Infinity,
    x2: -Infinity,
    y2: -Infinity,
  };
  let r = false;
  e.forEach((i) => {
    if (t.filter === undefined || t.filter(i)) {
      n = fn(n, nn(i));
      r = true;
    }
  });
  if (r) {
    return hn(n);
  } else {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
  }
};
const Wr = (e, t, [n, r, i] = [0, 0, 1], s = false, o = false) => {
  const a = {
    ...ut(t, [n, r, i]),
    width: t.width / i,
    height: t.height / i,
  };
  const l = [];
  for (const d of e.values()) {
    const { measured: u, selectable: c = true, hidden: f = false } = d;
    if ((o && !c) || f) {
      continue;
    }
    const h = u.width ?? d.width ?? d.initialWidth ?? null;
    const p = u.height ?? d.height ?? d.initialHeight ?? null;
    const v = St(a, at(d));
    const m = (h ?? 0) * (p ?? 0);
    const y = s && v > 0;
    if (!d.internals.handleBounds || y || v >= m || d.dragging) {
      l.push(d);
    }
  }
  return l;
};
const nh = (e, t) => {
  const n = new Set();
  e.forEach((r) => {
    n.add(r.id);
  });
  return t.filter((r) => n.has(r.source) || n.has(r.target));
};
function rh(e, t) {
  const n = new Map();
  const r = t != null && t.nodes ? new Set(t.nodes.map((i) => i.id)) : null;
  e.forEach((i) => {
    if (
      i.measured.width &&
      i.measured.height &&
      ((t == null ? undefined : t.includeHiddenNodes) || !i.hidden) &&
      (!r || r.has(i.id))
    ) {
      n.set(i.id, i);
    }
  });
  return n;
}
async function ih(
  { nodes: e, width: t, height: n, panZoom: r, minZoom: i, maxZoom: s },
  o,
) {
  if (e.size === 0) {
    return true;
  }
  const a = rh(e, o);
  const l = Pt(a);
  const d = Gr(
    l,
    t,
    n,
    (o == null ? undefined : o.minZoom) ?? i,
    (o == null ? undefined : o.maxZoom) ?? s,
    (o == null ? undefined : o.padding) ?? 0.1,
  );
  await r.setViewport(d, {
    duration: o == null ? undefined : o.duration,
    ease: o == null ? undefined : o.ease,
    interpolate: o == null ? undefined : o.interpolate,
  });
  return true;
}
function Gs({
  nodeId: e,
  nextPosition: t,
  nodeLookup: n,
  nodeOrigin: r = [0, 0],
  nodeExtent: i,
  onError: s,
}) {
  const o = n.get(e);
  const a = o.parentId ? n.get(o.parentId) : undefined;
  const { x: l, y: d } = a
    ? a.internals.positionAbsolute
    : {
        x: 0,
        y: 0,
      };
  const u = o.origin ?? r;
  let c = o.extent || i;
  if (o.extent === "parent" && !o.expandParent) {
    if (!a) {
      if (s != null) {
        s("005", ve.error005());
      }
    } else {
      const h = a.measured.width;
      const p = a.measured.height;
      if (h && p) {
        c = [
          [l, d],
          [l + h, d + p],
        ];
      }
    }
  } else if (a && Ue(o.extent)) {
    c = [
      [o.extent[0][0] + l, o.extent[0][1] + d],
      [o.extent[1][0] + l, o.extent[1][1] + d],
    ];
  }
  const f = Ue(c) ? Xe(t, c, o.measured) : t;
  if (o.measured.width === undefined || o.measured.height === undefined) {
    if (s != null) {
      s("015", ve.error015());
    }
  }
  return {
    position: {
      x: f.x - l + (o.measured.width ?? 0) * u[0],
      y: f.y - d + (o.measured.height ?? 0) * u[1],
    },
    positionAbsolute: f,
  };
}
async function oh({
  nodesToRemove: e = [],
  edgesToRemove: t = [],
  nodes: n,
  edges: r,
  onBeforeDelete: i,
}) {
  const s = new Set(e.map((f) => f.id));
  const o = [];
  for (const f of n) {
    if (f.deletable === false) {
      continue;
    }
    const h = s.has(f.id);
    const p = !h && f.parentId && o.find((v) => v.id === f.parentId);
    if (h || p) {
      o.push(f);
    }
  }
  const a = new Set(t.map((f) => f.id));
  const l = r.filter((f) => f.deletable !== false);
  const u = nh(o, l);
  for (const f of l) {
    if (a.has(f.id) && !u.find((p) => p.id === f.id)) {
      u.push(f);
    }
  }
  if (!i) {
    return {
      edges: u,
      nodes: o,
    };
  }
  const c = await i({
    nodes: o,
    edges: u,
  });
  if (typeof c == "boolean") {
    if (c) {
      return {
        edges: u,
        nodes: o,
      };
    } else {
      return {
        edges: [],
        nodes: [],
      };
    }
  } else {
    return c;
  }
}
const st = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n);
const Xe = (
  e = {
    x: 0,
    y: 0,
  },
  t,
  n,
) => ({
  x: st(e.x, t[0][0], t[1][0] - ((n == null ? undefined : n.width) ?? 0)),
  y: st(e.y, t[0][1], t[1][1] - ((n == null ? undefined : n.height) ?? 0)),
});
function Xs(e, t, n) {
  const { width: r, height: i } = Le(n);
  const { x: s, y: o } = n.internals.positionAbsolute;
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
  e < t
    ? st(Math.abs(e - t), 1, t) / t
    : e > n
      ? -st(Math.abs(e - n), 1, t) / t
      : 0;
const Yr = (e, t, n = 15, r = 40) => {
  const i = Ti(e.x, r, t.width - r) * n;
  const s = Ti(e.y, r, t.height - r) * n;
  return [i, s];
};
const fn = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2),
});
const Ar = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r,
});
const hn = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t,
});
const at = (e, t = [0, 0]) => {
  var i;
  var s;
  const { x: n, y: r } = qr(e) ? e.internals.positionAbsolute : It(e, t);
  return {
    x: n,
    y: r,
    width:
      ((i = e.measured) == null ? undefined : i.width) ??
      e.width ??
      e.initialWidth ??
      0,
    height:
      ((s = e.measured) == null ? undefined : s.height) ??
      e.height ??
      e.initialHeight ??
      0,
  };
};
const nn = (e, t = [0, 0]) => {
  var i;
  var s;
  const { x: n, y: r } = qr(e) ? e.internals.positionAbsolute : It(e, t);
  return {
    x: n,
    y: r,
    x2:
      n +
      (((i = e.measured) == null ? undefined : i.width) ??
        e.width ??
        e.initialWidth ??
        0),
    y2:
      r +
      (((s = e.measured) == null ? undefined : s.height) ??
        e.height ??
        e.initialHeight ??
        0),
  };
};
const Us = (e, t) => hn(fn(Ar(e), Ar(t)));
const St = (e, t) => {
  const n = Math.max(
    0,
    Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x),
  );
  const r = Math.max(
    0,
    Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y),
  );
  return Math.ceil(n * r);
};
const Ri = (e) => xe(e.width) && xe(e.height) && xe(e.x) && xe(e.y);
const xe = (e) => !isNaN(e) && isFinite(e);
const Ks = (e, t) => (n, r) => {};
const At = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1]),
});
const ut = ({ x: e, y: t }, [n, r, i], s = false, o = [1, 1]) => {
  const a = {
    x: (e - n) / i,
    y: (t - r) / i,
  };
  if (s) {
    return At(a, o);
  } else {
    return a;
  }
};
const ct = ({ x: e, y: t }, [n, r, i]) => ({
  x: e * i + n,
  y: t * i + r,
});
function Ze(e, t) {
  if (typeof e == "number") {
    return Math.floor((t - t / (1 + e)) * 0.5);
  }
  if (typeof e == "string" && e.endsWith("px")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n)) {
      return Math.floor(n);
    }
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n)) {
      return Math.floor(t * n * 0.01);
    }
  }
  console.error(
    `The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`,
  );
  return 0;
}
function sh(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = Ze(e, n);
    const i = Ze(e, t);
    return {
      top: r,
      right: i,
      bottom: r,
      left: i,
      x: i * 2,
      y: r * 2,
    };
  }
  if (typeof e == "object") {
    const r = Ze(e.top ?? e.y ?? 0, n);
    const i = Ze(e.bottom ?? e.y ?? 0, n);
    const s = Ze(e.left ?? e.x ?? 0, t);
    const o = Ze(e.right ?? e.x ?? 0, t);
    return {
      top: r,
      right: o,
      bottom: i,
      left: s,
      x: s + o,
      y: r + i,
    };
  }
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    x: 0,
    y: 0,
  };
}
function ah(e, t, n, r, i, s) {
  const { x: o, y: a } = ct(e, [t, n, r]);
  const { x: l, y: d } = ct(
    {
      x: e.x + e.width,
      y: e.y + e.height,
    },
    [t, n, r],
  );
  const u = i - l;
  const c = s - d;
  return {
    left: Math.floor(o),
    top: Math.floor(a),
    right: Math.floor(u),
    bottom: Math.floor(c),
  };
}
const Gr = (e, t, n, r, i, s) => {
  const o = sh(s, t, n);
  const a = (t - o.x) / e.width;
  const l = (n - o.y) / e.height;
  const d = Math.min(a, l);
  const u = st(d, r, i);
  const c = e.x + e.width / 2;
  const f = e.y + e.height / 2;
  const h = t / 2 - c * u;
  const p = n / 2 - f * u;
  const v = ah(e, h, p, u, t, n);
  const m = {
    left: Math.min(v.left - o.left, 0),
    top: Math.min(v.top - o.top, 0),
    right: Math.min(v.right - o.right, 0),
    bottom: Math.min(v.bottom - o.bottom, 0),
  };
  return {
    x: h - m.left + m.right,
    y: p - m.top + m.bottom,
    zoom: u,
  };
};
const Nt = () => {
  var e;
  return (
    typeof navigator !== "undefined" &&
    ((e = navigator == null ? undefined : navigator.userAgent) == null
      ? undefined
      : e.indexOf("Mac")) >= 0
  );
};
function Ue(e) {
  return e != null && e !== "parent";
}
function Le(e) {
  var t;
  var n;
  return {
    width:
      ((t = e.measured) == null ? undefined : t.width) ??
      e.width ??
      e.initialWidth ??
      0,
    height:
      ((n = e.measured) == null ? undefined : n.height) ??
      e.height ??
      e.initialHeight ??
      0,
  };
}
function Zs(e) {
  var t;
  var n;
  return (
    (((t = e.measured) == null ? undefined : t.width) ??
      e.width ??
      e.initialWidth) !== undefined &&
    (((n = e.measured) == null ? undefined : n.height) ??
      e.height ??
      e.initialHeight) !== undefined
  );
}
function Qs(
  e,
  t = {
    width: 0,
    height: 0,
  },
  n,
  r,
  i,
) {
  const s = {
    ...e,
  };
  const o = r.get(n);
  if (o) {
    const a = o.origin || i;
    s.x += o.internals.positionAbsolute.x - (t.width ?? 0) * a[0];
    s.y += o.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return s;
}
function Li(e, t) {
  if (e.size !== t.size) {
    return false;
  }
  for (const n of e) {
    if (!t.has(n)) {
      return false;
    }
  }
  return true;
}
function ch() {
  let e;
  let t;
  return {
    promise: new Promise((r, i) => {
      e = r;
      t = i;
    }),
    resolve: e,
    reject: t,
  };
}
function lh(e) {
  return {
    ...Bs,
    ...(e || {}),
  };
}
function yt(
  e,
  {
    snapGrid: t = [0, 0],
    snapToGrid: n = false,
    transform: r,
    containerBounds: i,
  },
) {
  const { x: s, y: o } = we(e);
  const a = ut(
    {
      x: s - ((i == null ? undefined : i.left) ?? 0),
      y: o - ((i == null ? undefined : i.top) ?? 0),
    },
    r,
  );
  const { x: l, y: d } = n ? At(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: d,
    ...a,
  };
}
const Xr = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight,
});
const Js = (e) => {
  var t;
  return (
    ((t = e == null ? undefined : e.getRootNode) == null
      ? undefined
      : t.call(e)) || (window == null ? undefined : window.document)
  );
};
const uh = ["INPUT", "SELECT", "TEXTAREA"];
function ea(e) {
  var r;
  var i;
  const t =
    ((i = (r = e.composedPath) == null ? undefined : r.call(e)) == null
      ? undefined
      : i[0]) || e.target;
  if ((t == null ? undefined : t.nodeType) !== 1) {
    return false;
  } else {
    return (
      uh.includes(t.nodeName) ||
      t.hasAttribute("contenteditable") ||
      !!t.closest(".nokey")
    );
  }
}
const ta = (e) => "clientX" in e;
const we = (e, t) => {
  var s;
  var o;
  const n = ta(e);
  const r = n ? e.clientX : (s = e.touches) == null ? undefined : s[0].clientX;
  const i = n ? e.clientY : (o = e.touches) == null ? undefined : o[0].clientY;
  return {
    x: r - ((t == null ? undefined : t.left) ?? 0),
    y: i - ((t == null ? undefined : t.top) ?? 0),
  };
};
const $i = (e, t, n, r, i) => {
  const s = t.querySelectorAll(`.${e}`);
  if (!s || !s.length) {
    return null;
  } else {
    return Array.from(s).map((o) => {
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
  }
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
  const l = e * 0.125 + i * 0.375 + o * 0.375 + n * 0.125;
  const d = t * 0.125 + s * 0.375 + a * 0.375 + r * 0.125;
  const u = Math.abs(l - e);
  const c = Math.abs(d - t);
  return [l, d, u, c];
}
function jt(e, t) {
  if (e >= 0) {
    return e * 0.5;
  } else {
    return t * 25 * Math.sqrt(-e);
  }
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
  const [a, l] = Di({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: i,
    c: o,
  });
  const [d, u] = Di({
    pos: s,
    x1: r,
    y1: i,
    x2: e,
    y2: t,
    c: o,
  });
  const [c, f, h, p] = na({
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
  const i = Math.abs(n - e) / 2;
  const s = n < e ? n + i : n - i;
  const o = Math.abs(r - t) / 2;
  const a = r < t ? r + o : r - o;
  return [s, a, i, o];
}
function dh({
  sourceNode: e,
  targetNode: t,
  selected: n = false,
  zIndex: r = 0,
  elevateOnSelect: i = false,
  zIndexMode: s = "basic",
}) {
  if (s === "manual") {
    return r;
  }
  const o = i && n ? r + 1000 : r;
  const a = Math.max(
    e.parentId || (i && e.selected) ? e.internals.z : 0,
    t.parentId || (i && t.selected) ? t.internals.z : 0,
  );
  return o + a;
}
function fh({
  sourceNode: e,
  targetNode: t,
  width: n,
  height: r,
  transform: i,
}) {
  const s = fn(nn(e), nn(t));
  if (s.x === s.x2) {
    s.x2 += 1;
  }
  if (s.y === s.y2) {
    s.y2 += 1;
  }
  const o = {
    x: -i[0] / i[2],
    y: -i[1] / i[2],
    width: n / i[2],
    height: r / i[2],
  };
  return St(o, hn(s)) > 0;
}
const hh = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) =>
  `xy-edge__${e}${t || ""}-${n}${r || ""}`;
const ph = (e, t) =>
  t.some(
    (n) =>
      n.source === e.source &&
      n.target === e.target &&
      (n.sourceHandle === e.sourceHandle ||
        (!n.sourceHandle && !e.sourceHandle)) &&
      (n.targetHandle === e.targetHandle ||
        (!n.targetHandle && !e.targetHandle)),
  );
const gh = (e, t, n = {}) => {
  var s;
  if (!e.source || !e.target) {
    if ((s = n.onError) != null) {
      s.call(n, "006", ve.error006());
    }
    return t;
  }
  const r = n.getEdgeId || hh;
  let i;
  if (Ys(e)) {
    i = {
      ...e,
    };
  } else {
    i = {
      ...e,
      id: r(e),
    };
  }
  if (ph(i, t)) {
    return t;
  } else {
    if (i.sourceHandle === null) {
      delete i.sourceHandle;
    }
    if (i.targetHandle === null) {
      delete i.targetHandle;
    }
    return t.concat(i);
  }
};
function oa({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [i, s, o, a] = ia({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r,
  });
  return [`M ${e},${t}L ${n},${r}`, i, s, o, a];
}
const Oi = {
  [Z.Left]: {
    x: -1,
    y: 0,
  },
  [Z.Right]: {
    x: 1,
    y: 0,
  },
  [Z.Top]: {
    x: 0,
    y: -1,
  },
  [Z.Bottom]: {
    x: 0,
    y: 1,
  },
};
const mh = ({ source: e, sourcePosition: t = Z.Bottom, target: n }) =>
  t === Z.Left || t === Z.Right
    ? e.x < n.x
      ? {
          x: 1,
          y: 0,
        }
      : {
          x: -1,
          y: 0,
        }
    : e.y < n.y
      ? {
          x: 0,
          y: 1,
        }
      : {
          x: 0,
          y: -1,
        };
const ji = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function yh({
  source: e,
  sourcePosition: t = Z.Bottom,
  target: n,
  targetPosition: r = Z.Top,
  center: i,
  offset: s,
  stepPosition: o,
}) {
  const a = Oi[t];
  const l = Oi[r];
  const d = {
    x: e.x + a.x * s,
    y: e.y + a.y * s,
  };
  const u = {
    x: n.x + l.x * s,
    y: n.y + l.y * s,
  };
  const c = mh({
    source: d,
    sourcePosition: t,
    target: u,
  });
  const f = c.x !== 0 ? "x" : "y";
  const h = c[f];
  let p = [];
  let v;
  let m;
  const y = {
    x: 0,
    y: 0,
  };
  const x = {
    x: 0,
    y: 0,
  };
  const [, , g, w] = ia({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y,
  });
  if (a[f] * l[f] === -1) {
    if (f === "x") {
      v = i.x ?? d.x + (u.x - d.x) * o;
      m = i.y ?? (d.y + u.y) / 2;
    } else {
      v = i.x ?? (d.x + u.x) / 2;
      m = i.y ?? d.y + (u.y - d.y) * o;
    }
    const b = [
      {
        x: v,
        y: d.y,
      },
      {
        x: v,
        y: u.y,
      },
    ];
    const S = [
      {
        x: d.x,
        y: m,
      },
      {
        x: u.x,
        y: m,
      },
    ];
    if (a[f] === h) {
      p = f === "x" ? b : S;
    } else {
      p = f === "x" ? S : b;
    }
  } else {
    const b = [
      {
        x: d.x,
        y: u.y,
      },
    ];
    const S = [
      {
        x: u.x,
        y: d.y,
      },
    ];
    if (f === "x") {
      p = a.x === h ? S : b;
    } else {
      p = a.y === h ? b : S;
    }
    if (t === r) {
      const _ = Math.abs(e[f] - n[f]);
      if (_ <= s) {
        const T = Math.min(s - 1, s - _);
        if (a[f] === h) {
          y[f] = (d[f] > e[f] ? -1 : 1) * T;
        } else {
          x[f] = (u[f] > n[f] ? -1 : 1) * T;
        }
      }
    }
    if (t !== r) {
      const _ = f === "x" ? "y" : "x";
      const T = a[f] === l[_];
      const A = d[_] > u[_];
      const D = d[_] < u[_];
      if (
        (a[f] === 1 && ((!T && A) || (T && D))) ||
        (a[f] !== 1 && ((!T && D) || (T && A)))
      ) {
        p = f === "x" ? b : S;
      }
    }
    const I = {
      x: d.x + y.x,
      y: d.y + y.y,
    };
    const E = {
      x: u.x + x.x,
      y: u.y + x.y,
    };
    const k = Math.max(Math.abs(I.x - p[0].x), Math.abs(E.x - p[0].x));
    const O = Math.max(Math.abs(I.y - p[0].y), Math.abs(E.y - p[0].y));
    if (k >= O) {
      v = (I.x + E.x) / 2;
      m = p[0].y;
    } else {
      v = p[0].x;
      m = (I.y + E.y) / 2;
    }
  }
  const C = {
    x: d.x + y.x,
    y: d.y + y.y,
  };
  const N = {
    x: u.x + x.x,
    y: u.y + x.y,
  };
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
  const i = Math.min(ji(e, t) / 2, ji(t, n) / 2, r);
  const { x: s, y: o } = t;
  if ((e.x === s && s === n.x) || (e.y === o && o === n.y)) {
    return `L${s} ${o}`;
  }
  if (e.y === o) {
    const d = e.x < n.x ? -1 : 1;
    const u = e.y < n.y ? 1 : -1;
    return `L ${s + i * d},${o}Q ${s},${o} ${s},${o + i * u}`;
  }
  const a = e.x < n.x ? 1 : -1;
  const l = e.y < n.y ? -1 : 1;
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
    source: {
      x: e,
      y: t,
    },
    sourcePosition: n,
    target: {
      x: r,
      y: i,
    },
    targetPosition: s,
    center: {
      x: a,
      y: l,
    },
    offset: d,
    stepPosition: u,
  });
  let m = `M${c[0].x} ${c[0].y}`;
  for (let y = 1; y < c.length - 1; y++) {
    m += xh(c[y - 1], c[y], c[y + 1], o);
  }
  m += `L${c[c.length - 1].x} ${c[c.length - 1].y}`;
  return [m, f, h, p, v];
}
function Hi(e) {
  var t;
  return (
    e &&
    (!!e.internals.handleBounds || ((t = e.handles) != null && !!t.length)) &&
    (!!e.measured.width || !!e.width || !!e.initialWidth)
  );
}
function wh(e) {
  var c;
  const { sourceNode: t, targetNode: n } = e;
  if (!Hi(t) || !Hi(n)) {
    return null;
  }
  const r = t.internals.handleBounds || zi(t.handles);
  const i = n.internals.handleBounds || zi(n.handles);
  const s = Vi((r == null ? undefined : r.source) ?? [], e.sourceHandle);
  const o = Vi(
    e.connectionMode === ot.Strict
      ? ((i == null ? undefined : i.target) ?? [])
      : ((i == null ? undefined : i.target) ?? []).concat(
          (i == null ? undefined : i.source) ?? [],
        ),
    e.targetHandle,
  );
  if (!s || !o) {
    if ((c = e.onError) != null) {
      c.call(
        e,
        "008",
        ve.error008(s ? "target" : "source", {
          id: e.id,
          sourceHandle: e.sourceHandle,
          targetHandle: e.targetHandle,
        }),
      );
    }
    return null;
  }
  const a = (s == null ? undefined : s.position) || Z.Bottom;
  const l = (o == null ? undefined : o.position) || Z.Top;
  const d = Ke(t, s, a);
  const u = Ke(n, o, l);
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
  if (!e) {
    return null;
  }
  const t = [];
  const n = [];
  for (const r of e) {
    r.width = r.width ?? 1;
    r.height = r.height ?? 1;
    if (r.type === "source") {
      t.push(r);
    } else if (r.type === "target") {
      n.push(r);
    }
  }
  return {
    source: t,
    target: n,
  };
}
function Ke(e, t, n = Z.Left, r = false) {
  const i =
    ((t == null ? undefined : t.x) ?? 0) + e.internals.positionAbsolute.x;
  const s =
    ((t == null ? undefined : t.y) ?? 0) + e.internals.positionAbsolute.y;
  const { width: o, height: a } = t ?? Le(e);
  if (r) {
    return {
      x: i + o / 2,
      y: s + a / 2,
    };
  }
  switch ((t == null ? undefined : t.position) ?? n) {
    case Z.Top:
      return {
        x: i + o / 2,
        y: s,
      };
    case Z.Right:
      return {
        x: i + o,
        y: s + a / 2,
      };
    case Z.Bottom:
      return {
        x: i + o / 2,
        y: s + a,
      };
    case Z.Left:
      return {
        x: i,
        y: s + a / 2,
      };
  }
}
function Vi(e, t) {
  return (e && (t ? e.find((n) => n.id === t) : e[0])) || null;
}
function Rr(e, t) {
  if (e) {
    if (typeof e == "string") {
      return e;
    } else {
      return `${t ? `${t}__` : ""}${Object.keys(e)
        .sort()
        .map((r) => `${r}=${e[r]}`)
        .join("&")}`;
    }
  } else {
    return "";
  }
}
function vh(
  e,
  { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: i },
) {
  const s = new Set();
  return e
    .reduce((o, a) => {
      [a.markerStart || r, a.markerEnd || i].forEach((l) => {
        if (l && typeof l == "object") {
          const d = Rr(l, t);
          if (!s.has(d)) {
            o.push({
              id: d,
              color: l.color || n,
              ...l,
            });
            s.add(d);
          }
        }
      });
      return o;
    }, [])
    .sort((o, a) => o.id.localeCompare(a.id));
}
const sa = 1000;
const bh = 10;
const Ur = {
  nodeOrigin: [0, 0],
  nodeExtent: _t,
  elevateNodesOnSelect: true,
  zIndexMode: "basic",
  defaults: {},
};
const _h = {
  ...Ur,
  checkEquality: true,
};
function Kr(e, t) {
  const n = {
    ...e,
  };
  for (const r in t) {
    if (t[r] !== undefined) {
      n[r] = t[r];
    }
  }
  return n;
}
function Eh(e, t, n) {
  const r = Kr(Ur, n);
  for (const i of e.values()) {
    if (i.parentId) {
      Qr(i, e, t, r);
    } else {
      const s = It(i, r.nodeOrigin);
      const o = Ue(i.extent) ? i.extent : r.nodeExtent;
      const a = Xe(s, o, Le(i));
      i.internals.positionAbsolute = a;
    }
  }
}
function Sh(e, t) {
  if (!e.handles) {
    if (e.measured) {
      if (t == null) {
        return undefined;
      } else {
        return t.internals.handleBounds;
      }
    } else {
      return undefined;
    }
  }
  const n = [];
  const r = [];
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
    if (i.type === "source") {
      n.push(s);
    } else if (i.type === "target") {
      r.push(s);
    }
  }
  return {
    source: n,
    target: r,
  };
}
function Zr(e) {
  return e === "manual";
}
function Lr(e, t, n, r = {}) {
  var u;
  var c;
  const i = Kr(_h, r);
  const s = {
    i: 0,
  };
  const o = new Map(t);
  const a = i != null && i.elevateNodesOnSelect && !Zr(i.zIndexMode) ? sa : 0;
  let l = e.length > 0;
  let d = false;
  t.clear();
  n.clear();
  for (const f of e) {
    let h = o.get(f.id);
    if (
      i.checkEquality &&
      f === (h == null ? undefined : h.internals.userNode)
    ) {
      t.set(f.id, h);
    } else {
      const p = It(f, i.nodeOrigin);
      const v = Ue(f.extent) ? f.extent : i.nodeExtent;
      const m = Xe(p, v, Le(f));
      h = {
        ...i.defaults,
        ...f,
        measured: {
          width: (u = f.measured) == null ? undefined : u.width,
          height: (c = f.measured) == null ? undefined : c.height,
        },
        internals: {
          positionAbsolute: m,
          handleBounds: Sh(f, h),
          z: aa(f, a, i.zIndexMode),
          userNode: f,
        },
      };
      t.set(f.id, h);
    }
    if (
      (h.measured === undefined ||
        h.measured.width === undefined ||
        h.measured.height === undefined) &&
      !h.hidden
    ) {
      l = false;
    }
    if (f.parentId) {
      Qr(h, t, n, r, s);
    }
    d ||= f.selected ?? false;
  }
  return {
    nodesInitialized: l,
    hasSelectedNodes: d,
  };
}
function Nh(e, t) {
  if (!e.parentId) {
    return;
  }
  const n = t.get(e.parentId);
  if (n) {
    n.set(e.id, e);
  } else {
    t.set(e.parentId, new Map([[e.id, e]]));
  }
}
function Qr(e, t, n, r, i) {
  const {
    elevateNodesOnSelect: s,
    nodeOrigin: o,
    nodeExtent: a,
    zIndexMode: l,
  } = Kr(Ur, r);
  const d = e.parentId;
  const u = t.get(d);
  if (!u) {
    console.warn(
      `Parent node ${d} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`,
    );
    return;
  }
  Nh(e, n);
  if (
    i &&
    !u.parentId &&
    u.internals.rootParentIndex === undefined &&
    l === "auto"
  ) {
    u.internals.rootParentIndex = ++i.i;
    u.internals.z = u.internals.z + i.i * bh;
  }
  if (i && u.internals.rootParentIndex !== undefined) {
    i.i = u.internals.rootParentIndex;
  }
  const c = s && !Zr(l) ? sa : 0;
  const { x: f, y: h, z: p } = Ch(e, u, o, a, c, l);
  const { positionAbsolute: v } = e.internals;
  const m = f !== v.x || h !== v.y;
  if (m || p !== e.internals.z) {
    t.set(e.id, {
      ...e,
      internals: {
        ...e.internals,
        positionAbsolute: m
          ? {
              x: f,
              y: h,
            }
          : v,
        z: p,
      },
    });
  }
}
function aa(e, t, n) {
  const r = xe(e.zIndex) ? e.zIndex : 0;
  if (Zr(n)) {
    return r;
  } else {
    return r + (e.selected ? t : 0);
  }
}
function Ch(e, t, n, r, i, s) {
  const { x: o, y: a } = t.internals.positionAbsolute;
  const l = Le(e);
  const d = It(e, n);
  const u = Ue(e.extent) ? Xe(d, e.extent, l) : d;
  let c = Xe(
    {
      x: o + u.x,
      y: a + u.y,
    },
    r,
    l,
  );
  if (e.extent === "parent") {
    c = Xs(c, l, t);
  }
  const f = aa(e, i, s);
  const h = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: h >= f ? h + 1 : f,
  };
}
function Jr(e, t, n, r = [0, 0]) {
  var o;
  const i = [];
  const s = new Map();
  for (const a of e) {
    const l = t.get(a.parentId);
    if (!l) {
      continue;
    }
    const d =
      ((o = s.get(a.parentId)) == null ? undefined : o.expandedRect) ?? at(l);
    const u = Us(d, a.rect);
    s.set(a.parentId, {
      expandedRect: u,
      parent: l,
    });
  }
  if (s.size > 0) {
    s.forEach(({ expandedRect: a, parent: l }, d) => {
      var g;
      const u = l.internals.positionAbsolute;
      const c = Le(l);
      const f = l.origin ?? r;
      const h = a.x < u.x ? Math.round(Math.abs(u.x - a.x)) : 0;
      const p = a.y < u.y ? Math.round(Math.abs(u.y - a.y)) : 0;
      const v = Math.max(c.width, Math.round(a.width));
      const m = Math.max(c.height, Math.round(a.height));
      const y = (v - c.width) * f[0];
      const x = (m - c.height) * f[1];
      if (h > 0 || p > 0 || y || x) {
        i.push({
          id: d,
          type: "position",
          position: {
            x: l.position.x - h + y,
            y: l.position.y - p + x,
          },
        });
        if ((g = n.get(d)) != null) {
          g.forEach((w) => {
            if (!e.some((C) => C.id === w.id)) {
              i.push({
                id: w.id,
                type: "position",
                position: {
                  x: w.position.x + h,
                  y: w.position.y + p,
                },
              });
            }
          });
        }
      }
      if (c.width < a.width || c.height < a.height || h || p) {
        i.push({
          id: d,
          type: "dimensions",
          setAttributes: true,
          dimensions: {
            width: v + (h ? f[0] * h - y : 0),
            height: m + (p ? f[1] * p - x : 0),
          },
        });
      }
    });
  }
  return i;
}
function kh(e, t, n, r, i, s, o) {
  const a = r == null ? undefined : r.querySelector(".xyflow__viewport");
  let l = false;
  if (!a) {
    return {
      changes: [],
      updatedInternals: l,
    };
  }
  const d = [];
  const u = window.getComputedStyle(a);
  const { m22: c } = new window.DOMMatrixReadOnly(u.transform);
  const f = [];
  for (const h of e.values()) {
    const p = t.get(h.id);
    if (!p) {
      continue;
    }
    if (p.hidden) {
      t.set(p.id, {
        ...p,
        internals: {
          ...p.internals,
          handleBounds: undefined,
        },
      });
      l = true;
      continue;
    }
    const v = Xr(h.nodeElement);
    const m = p.measured.width !== v.width || p.measured.height !== v.height;
    if (
      !!v.width &&
      !!v.height &&
      (!!m || !p.internals.handleBounds || !!h.force)
    ) {
      const x = h.nodeElement.getBoundingClientRect();
      const g = Ue(p.extent) ? p.extent : s;
      let { positionAbsolute: w } = p.internals;
      if (p.parentId && p.extent === "parent") {
        w = Xs(w, v, t.get(p.parentId));
      } else if (g) {
        w = Xe(w, g, v);
      }
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
      t.set(p.id, C);
      if (p.parentId) {
        Qr(C, t, n, {
          nodeOrigin: i,
          zIndexMode: o,
        });
      }
      l = true;
      if (m) {
        d.push({
          id: p.id,
          type: "dimensions",
          dimensions: v,
        });
        if (p.expandParent && p.parentId) {
          f.push({
            id: p.id,
            parentId: p.parentId,
            rect: at(C, i),
          });
        }
      }
    }
  }
  if (f.length > 0) {
    const h = Jr(f, t, n, i);
    d.push(...h);
  }
  return {
    changes: d,
    updatedInternals: l,
  };
}
async function Mh({
  delta: e,
  panZoom: t,
  transform: n,
  translateExtent: r,
  width: i,
  height: s,
}) {
  if (!t || (!e.x && !e.y)) {
    return false;
  }
  const o = await t.setViewportConstrained(
    {
      x: n[0] + e.x,
      y: n[1] + e.y,
      zoom: n[2],
    },
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
  r.set(o, a.set(n, t));
  o = `${i}-${e}`;
  const l = r.get(o) || new Map();
  r.set(o, l.set(n, t));
  if (s) {
    o = `${i}-${e}-${s}`;
    const d = r.get(o) || new Map();
    r.set(o, d.set(n, t));
  }
}
function ca(e, t, n) {
  e.clear();
  t.clear();
  for (const r of n) {
    const {
      source: i,
      target: s,
      sourceHandle: o = null,
      targetHandle: a = null,
    } = r;
    const l = {
      edgeId: r.id,
      source: i,
      target: s,
      sourceHandle: o,
      targetHandle: a,
    };
    const d = `${i}-${o}--${s}-${a}`;
    const u = `${s}-${a}--${i}-${o}`;
    Fi("source", l, u, e, i, o);
    Fi("target", l, d, e, s, a);
    t.set(r.id, r);
  }
}
function la(e, t) {
  if (!e.parentId) {
    return false;
  }
  const n = t.get(e.parentId);
  if (n) {
    if (n.selected) {
      return true;
    } else {
      return la(n, t);
    }
  } else {
    return false;
  }
}
function Bi(e, t, n) {
  var i;
  let r = e;
  do {
    if ((i = r == null ? undefined : r.matches) != null && i.call(r, t)) {
      return true;
    }
    if (r === n) {
      return false;
    }
    r = r == null ? undefined : r.parentElement;
  } while (r);
  return false;
}
function Ih(e, t, n, r) {
  const i = new Map();
  for (const [s, o] of e) {
    if (
      (o.selected || o.id === r) &&
      (!o.parentId || !la(o, e)) &&
      (o.draggable || (t && typeof o.draggable === "undefined"))
    ) {
      const a = e.get(s);
      if (a) {
        i.set(s, {
          id: s,
          position: a.position || {
            x: 0,
            y: 0,
          },
          distance: {
            x: n.x - a.internals.positionAbsolute.x,
            y: n.y - a.internals.positionAbsolute.y,
          },
          extent: a.extent,
          parentId: a.parentId,
          origin: a.origin,
          expandParent: a.expandParent,
          internals: {
            positionAbsolute: a.internals.positionAbsolute || {
              x: 0,
              y: 0,
            },
          },
          measured: {
            width: a.measured.width ?? 0,
            height: a.measured.height ?? 0,
          },
        });
      }
    }
  }
  return i;
}
function Nn({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = true }) {
  var o;
  var a;
  var l;
  const i = [];
  for (const [d, u] of t) {
    const c = (o = n.get(d)) == null ? undefined : o.internals.userNode;
    if (c) {
      i.push({
        ...c,
        position: u.position,
        dragging: r,
      });
    }
  }
  if (!e) {
    return [i[0], i];
  }
  const s = (a = n.get(e)) == null ? undefined : a.internals.userNode;
  return [
    s
      ? {
          ...s,
          position:
            ((l = t.get(e)) == null ? undefined : l.position) || s.position,
          dragging: r,
        }
      : i[0],
    i,
  ];
}
function Ph({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const i = e.values().next().value;
  if (!i) {
    return null;
  }
  const s = {
    x: n - i.distance.x,
    y: r - i.distance.y,
  };
  const o = At(s, t);
  return {
    x: o.x - s.x,
    y: o.y - s.y,
  };
}
function Ah({
  onNodeMouseDown: e,
  getStoreItems: t,
  onDragStart: n,
  onDrag: r,
  onDragStop: i,
}) {
  let s = {
    x: null,
    y: null,
  };
  let o = 0;
  let a = new Map();
  let l = false;
  let d = {
    x: 0,
    y: 0,
  };
  let u = null;
  let c = false;
  let f = null;
  let h = false;
  let p = false;
  let v = null;
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
      s = {
        x: k,
        y: O,
      };
      let P = false;
      const L = a.size > 1;
      const j = L && T ? Ar(Pt(a)) : null;
      const W =
        L && D
          ? Ph({
              dragItems: a,
              snapGrid: A,
              x: k,
              y: O,
            })
          : null;
      for (const [G, H] of a) {
        if (!_.has(G)) {
          continue;
        }
        let Y = {
          x: k - H.distance.x,
          y: O - H.distance.y,
        };
        if (D) {
          Y = W
            ? {
                x: Math.round(Y.x + W.x),
                y: Math.round(Y.y + W.y),
              }
            : At(Y, A);
        }
        let K = null;
        if (L && T && !H.extent && j) {
          const { positionAbsolute: X } = H.internals;
          const J = X.x - j.x + T[0][0];
          const te = X.x + H.measured.width - j.x2 + T[1][0];
          const ne = X.y - j.y + T[0][1];
          const se = X.y + H.measured.height - j.y2 + T[1][1];
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
        P = P || H.position.x !== Q.x || H.position.y !== Q.y;
        H.position = Q;
        H.internals.positionAbsolute = U;
      }
      p = p || P;
      if (!!P && (F(a, true), v && (r || $ || (!N && B)))) {
        const [G, H] = Nn({
          nodeId: N,
          dragItems: a,
          nodeLookup: _,
        });
        if (r != null) {
          r(v, a, G, H);
        }
        if ($ != null) {
          $(v, G, H);
        }
        if (!N && B != null) {
          B(v, H);
        }
      }
    }
    async function S() {
      if (!u) {
        return;
      }
      const {
        transform: k,
        panBy: O,
        autoPanSpeed: _,
        autoPanOnNodeDrag: T,
      } = t();
      if (!T) {
        l = false;
        cancelAnimationFrame(o);
        return;
      }
      const [A, D] = Yr(d, u, _);
      if (A !== 0 || D !== 0) {
        s.x = (s.x ?? 0) - A / k[2];
        s.y = (s.y ?? 0) - D / k[2];
        if (
          await O({
            x: A,
            y: D,
          })
        ) {
          b(s);
        }
      }
      o = requestAnimationFrame(S);
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
      c = true;
      if ((!$ || !C) && !_ && N) {
        if ((L = O.get(N)) == null || !L.selected) {
          F();
        }
      }
      if (C && $ && N) {
        if (e != null) {
          e(N);
        }
      }
      const P = yt(k.sourceEvent, {
        transform: A,
        snapGrid: D,
        snapToGrid: V,
        containerBounds: u,
      });
      s = P;
      a = Ih(O, T, P, N);
      if (a.size > 0 && (n || B || (!N && q))) {
        const [j, W] = Nn({
          nodeId: N,
          dragItems: a,
          nodeLookup: O,
        });
        if (n != null) {
          n(k.sourceEvent, a, j, W);
        }
        if (B != null) {
          B(k.sourceEvent, j, W);
        }
        if (!N && q != null) {
          q(k.sourceEvent, W);
        }
      }
    }
    const E = Cs()
      .clickDistance(M)
      .on("start", (k) => {
        const {
          domNode: O,
          nodeDragThreshold: _,
          transform: T,
          snapGrid: A,
          snapToGrid: D,
        } = t();
        u = (O == null ? undefined : O.getBoundingClientRect()) || null;
        h = false;
        p = false;
        v = k.sourceEvent;
        if (_ === 0) {
          I(k);
        }
        s = yt(k.sourceEvent, {
          transform: T,
          snapGrid: A,
          snapToGrid: D,
          containerBounds: u,
        });
        d = we(k.sourceEvent, u);
      })
      .on("drag", (k) => {
        const {
          autoPanOnNodeDrag: O,
          transform: _,
          snapGrid: T,
          snapToGrid: A,
          nodeDragThreshold: D,
          nodeLookup: V,
        } = t();
        const $ = yt(k.sourceEvent, {
          transform: _,
          snapGrid: T,
          snapToGrid: A,
          containerBounds: u,
        });
        v = k.sourceEvent;
        if (
          (k.sourceEvent.type === "touchmove" &&
            k.sourceEvent.touches.length > 1) ||
          (N && !V.has(N))
        ) {
          h = true;
        }
        if (!h) {
          if (!l && O && c) {
            l = true;
            S();
          }
          if (!c) {
            const B = we(k.sourceEvent, u);
            const q = B.x - d.x;
            const F = B.y - d.y;
            if (Math.sqrt(q * q + F * F) > D) {
              I(k);
            }
          }
          if ((s.x !== $.xSnapped || s.y !== $.ySnapped) && a && c) {
            d = we(k.sourceEvent, u);
            b($);
          }
        }
      })
      .on("end", (k) => {
        if (!c || h) {
          if (h && a.size > 0) {
            t().updateNodePositions(a, false);
          }
          return;
        }
        l = false;
        c = false;
        cancelAnimationFrame(o);
        if (a.size > 0) {
          const {
            nodeLookup: O,
            updateNodePositions: _,
            onNodeDragStop: T,
            onSelectionDragStop: A,
          } = t();
          if (p) {
            _(a, false);
            p = false;
          }
          if (i || T || (!N && A)) {
            const [D, V] = Nn({
              nodeId: N,
              dragItems: a,
              nodeLookup: O,
              dragging: false,
            });
            if (i != null) {
              i(k.sourceEvent, a, D, V);
            }
            if (T != null) {
              T(k.sourceEvent, D, V);
            }
            if (!N && A != null) {
              A(k.sourceEvent, V);
            }
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
    if (f != null) {
      f.on(".drag", null);
    }
  }
  return {
    update: m,
    destroy: y,
  };
}
function Th(e, t, n) {
  const r = [];
  const i = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2,
  };
  for (const s of t.values()) {
    if (St(i, at(s)) > 0) {
      r.push(s);
    }
  }
  return r;
}
const Rh = 250;
function Lh(e, t, n, r) {
  var a;
  var l;
  let i = [];
  let s = Infinity;
  const o = Th(e, n, t + Rh);
  for (const d of o) {
    const u = [
      ...(((a = d.internals.handleBounds) == null ? undefined : a.source) ??
        []),
      ...(((l = d.internals.handleBounds) == null ? undefined : l.target) ??
        []),
    ];
    for (const c of u) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id) {
        continue;
      }
      const { x: f, y: h } = Ke(d, c, c.position, true);
      const p = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(h - e.y, 2));
      if (!(p > t)) {
        if (p < s) {
          i = [
            {
              ...c,
              x: f,
              y: h,
            },
          ];
          s = p;
        } else if (p === s) {
          i.push({
            ...c,
            x: f,
            y: h,
          });
        }
      }
    }
  }
  if (!i.length) {
    return null;
  }
  if (i.length > 1) {
    const d = r.type === "source" ? "target" : "source";
    return i.find((u) => u.type === d) ?? i[0];
  }
  return i[0];
}
function ua(e, t, n, r, i, s = false) {
  var d;
  var u;
  var c;
  const o = r.get(e);
  if (!o) {
    return null;
  }
  const a =
    i === "strict"
      ? (d = o.internals.handleBounds) == null
        ? undefined
        : d[t]
      : [
          ...(((u = o.internals.handleBounds) == null ? undefined : u.source) ??
            []),
          ...(((c = o.internals.handleBounds) == null ? undefined : c.target) ??
            []),
        ];
  const l =
    (n
      ? a == null
        ? undefined
        : a.find((f) => f.id === n)
      : a == null
        ? undefined
        : a[0]) ?? null;
  if (l && s) {
    return {
      ...l,
      ...Ke(o, l, l.position, true),
    };
  } else {
    return l;
  }
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
  if (t) {
    n = true;
  } else if (e && !t) {
    n = false;
  }
  return n;
}
const fa = () => true;
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
  let I = 0;
  let E;
  const { x: k, y: O } = we(e);
  const _ = da(s, b);
  const T = a == null ? undefined : a.getBoundingClientRect();
  let A = false;
  if (!T || !_) {
    return;
  }
  const D = ua(i, _, r, l, t);
  if (!D) {
    return;
  }
  let V = we(e, T);
  let $ = false;
  let B = null;
  let q = false;
  let F = null;
  function P() {
    if (!u || !T) {
      return;
    }
    const [Q, U] = Yr(V, T, N);
    f({
      x: Q,
      y: U,
    });
    I = requestAnimationFrame(P);
  }
  const L = {
    ...D,
    nodeId: i,
    type: _,
    position: D.position,
  };
  const j = l.get(i);
  let G = {
    inProgress: true,
    isValid: null,
    from: Ke(j, L, Z.Left, true),
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
    A = true;
    g(G);
    if (p != null) {
      p(e, {
        nodeId: i,
        handleId: r,
        handleType: _,
      });
    }
  }
  if (M === 0) {
    H();
  }
  function Y(Q) {
    if (!A) {
      const { x: se, y: he } = we(Q);
      const Ee = se - k;
      const Se = he - O;
      if (!(Ee * Ee + Se * Se > M * M)) {
        return;
      }
      H();
    }
    if (!C() || !L) {
      K(Q);
      return;
    }
    const U = w();
    V = we(Q, T);
    E = Lh(ut(V, U, false, [1, 1]), n, l, L);
    if (!$) {
      P();
      $ = true;
    }
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
    F = X.handleDomNode;
    B = X.connection;
    q = $h(!!E, X.isValid);
    const J = l.get(i);
    const te = J ? Ke(J, L, Z.Left, true) : G.from;
    const ne = {
      ...G,
      from: te,
      isValid: q,
      to:
        X.toHandle && q
          ? ct(
              {
                x: X.toHandle.x,
                y: X.toHandle.y,
              },
              U,
            )
          : V,
      toHandle: X.toHandle,
      toPosition: q && X.toHandle ? X.toHandle.position : Ai[L.position],
      toNode: X.toHandle ? l.get(X.toHandle.nodeId) : null,
      pointer: V,
    };
    g(ne);
    G = ne;
  }
  function K(Q) {
    if (!("touches" in Q) || !(Q.touches.length > 0)) {
      if (A) {
        if ((E || F) && B && q) {
          if (v != null) {
            v(B);
          }
        }
        const { inProgress: U, ...X } = G;
        const J = {
          ...X,
          toPosition: G.toHandle ? G.toPosition : null,
        };
        if (m != null) {
          m(Q, J);
        }
        if (s) {
          if (x != null) {
            x(Q, J);
          }
        }
      }
      h();
      cancelAnimationFrame(I);
      $ = false;
      q = false;
      B = null;
      F = null;
      S.removeEventListener("mousemove", Y);
      S.removeEventListener("mouseup", K);
      S.removeEventListener("touchmove", Y);
      S.removeEventListener("touchend", K);
    }
  }
  S.addEventListener("mousemove", Y);
  S.addEventListener("mouseup", K);
  S.addEventListener("touchmove", Y);
  S.addEventListener("touchend", K);
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
  const c = s === "target";
  const f = t
    ? o.querySelector(
        `.${a}-flow__handle[data-id="${l}-${t == null ? undefined : t.nodeId}-${t == null ? undefined : t.id}-${t == null ? undefined : t.type}"]`,
      )
    : null;
  const { x: h, y: p } = we(e);
  const v = o.elementFromPoint(h, p);
  const m = v != null && v.classList.contains(`${a}-flow__handle`) ? v : f;
  const y = {
    handleDomNode: m,
    isValid: false,
    connection: null,
    toHandle: null,
  };
  if (m) {
    const x = da(undefined, m);
    const g = m.getAttribute("data-nodeid");
    const w = m.getAttribute("data-handleid");
    const C = m.classList.contains("connectable");
    const N = m.classList.contains("connectableend");
    if (!g || !x) {
      return y;
    }
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
      (n === ot.Strict
        ? (c && x === "source") || (!c && x === "target")
        : g !== r || w !== i);
    y.isValid = S && d(M);
    y.toHandle = ua(g, x, w, u, n, true);
  }
  return y;
}
const $r = {
  onPointerDown: Dh,
  isValid: ha,
};
function Oh({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const i = de(e);
  function s({
    translateExtent: a,
    width: l,
    height: d,
    zoomStep: u = 1,
    pannable: c = true,
    zoomable: f = true,
    inversePan: h = false,
  }) {
    const p = (g) => {
      if (g.sourceEvent.type !== "wheel" || !t) {
        return;
      }
      const w = n();
      const C = g.sourceEvent.ctrlKey && Nt() ? 10 : 1;
      const N =
        -g.sourceEvent.deltaY *
        (g.sourceEvent.deltaMode === 1
          ? 0.05
          : g.sourceEvent.deltaMode
            ? 1
            : 0.002) *
        u;
      const M = w[2] * Math.pow(2, N * C);
      t.scaleTo(M);
    };
    let v = [0, 0];
    const m = (g) => {
      if (
        g.sourceEvent.type === "mousedown" ||
        g.sourceEvent.type === "touchstart"
      ) {
        v = [
          g.sourceEvent.clientX ?? g.sourceEvent.touches[0].clientX,
          g.sourceEvent.clientY ?? g.sourceEvent.touches[0].clientY,
        ];
      }
    };
    const y = (g) => {
      const w = n();
      if (
        (g.sourceEvent.type !== "mousemove" &&
          g.sourceEvent.type !== "touchmove") ||
        !t
      ) {
        return;
      }
      const C = [
        g.sourceEvent.clientX ?? g.sourceEvent.touches[0].clientX,
        g.sourceEvent.clientY ?? g.sourceEvent.touches[0].clientY,
      ];
      const N = [C[0] - v[0], C[1] - v[1]];
      v = C;
      const M = r() * Math.max(w[2], Math.log(w[2])) * (h ? -1 : 1);
      const b = {
        x: w[0] - N[0] * M,
        y: w[1] - N[1] * M,
      };
      const S = [
        [0, 0],
        [l, d],
      ];
      t.setViewportConstrained(
        {
          x: b.x,
          y: b.y,
          zoom: w[2],
        },
        S,
        a,
      );
    };
    const x = Vs()
      .on("start", m)
      .on("zoom", c ? y : null)
      .on("zoom.wheel", f ? p : null);
    i.call(x, {});
  }
  function o() {
    i.on("zoom", null);
  }
  return {
    update: s,
    destroy: o,
    pointer: me,
  };
}
const pn = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k,
});
const Cn = ({ x: e, y: t, zoom: n }) => dn.translate(e, t).scale(n);
const Qe = (e, t) => e.target.closest(`.${t}`);
const pa = (e, t) => t === 2 && Array.isArray(e) && e.includes(2);
const jh = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
const kn = (e, t = 0, n = jh, r = () => {}) => {
  const i = typeof t == "number" && t > 0;
  if (!i) {
    r();
  }
  if (i) {
    return e.transition().duration(t).ease(n).on("end", r);
  } else {
    return e;
  }
};
const ga = (e) => {
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
    if (Qe(u, t)) {
      if (u.ctrlKey) {
        u.preventDefault();
      }
      return false;
    }
    u.preventDefault();
    u.stopImmediatePropagation();
    const c = n.property("__zoom").k || 1;
    if (u.ctrlKey && o) {
      const m = me(u);
      const y = ga(u);
      const x = c * Math.pow(2, y);
      r.scaleTo(n, x, m, u);
      return;
    }
    const f = u.deltaMode === 1 ? 20 : 1;
    let h = i === We.Vertical ? 0 : u.deltaX * f;
    let p = i === We.Horizontal ? 0 : u.deltaY * f;
    if (!Nt() && u.shiftKey && i !== We.Vertical) {
      h = u.deltaY * f;
      p = 0;
    }
    r.translateBy(n, -(h / c) * s, -(p / c) * s, {
      internal: true,
    });
    const v = pn(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout);
    if (e.isPanScrolling) {
      if (l != null) {
        l(u, v);
      }
      e.panScrollTimeout = setTimeout(() => {
        if (d != null) {
          d(u, v);
        }
        e.isPanScrolling = false;
      }, 150);
    } else {
      e.isPanScrolling = true;
      if (a != null) {
        a(u, v);
      }
    }
  };
}
function zh({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function (r, i) {
    const s = r.type === "wheel";
    const o = !t && s && !r.ctrlKey;
    const a = Qe(r, e);
    if (r.ctrlKey && s && a) {
      r.preventDefault();
    }
    if (o || a) {
      return null;
    }
    r.preventDefault();
    n.call(this, r, i);
  };
}
function Vh({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var s;
    var o;
    var a;
    if ((s = r.sourceEvent) != null && s.internal) {
      return;
    }
    const i = pn(r.transform);
    e.mouseButton = ((o = r.sourceEvent) == null ? undefined : o.button) || 0;
    e.isZoomingOrPanning = true;
    e.prevViewport = i;
    if (((a = r.sourceEvent) == null ? undefined : a.type) === "mousedown") {
      t(true);
    }
    if (n) {
      if (n != null) {
        n(r.sourceEvent, i);
      }
    }
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
    var o;
    var a;
    e.usedRightMouseButton = !!n && !!pa(t, e.mouseButton ?? 0);
    if ((o = s.sourceEvent) == null || !o.sync) {
      r([s.transform.x, s.transform.y, s.transform.k]);
    }
    if (i && ((a = s.sourceEvent) == null || !a.internal)) {
      if (i != null) {
        i(s.sourceEvent, pn(s.transform));
      }
    }
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
      ((a = o.sourceEvent) == null || !a.internal) &&
      ((e.isZoomingOrPanning = false),
      s &&
        pa(t, e.mouseButton ?? 0) &&
        !e.usedRightMouseButton &&
        o.sourceEvent &&
        s(o.sourceEvent),
      (e.usedRightMouseButton = false),
      r(false),
      i)
    ) {
      const l = pn(o.transform);
      e.prevViewport = l;
      clearTimeout(e.timerId);
      e.timerId = setTimeout(
        () => {
          if (i != null) {
            i(o.sourceEvent, l);
          }
        },
        n ? 150 : 0,
      );
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
    const f = e || t;
    const h = n && c.ctrlKey;
    const p = c.type === "wheel";
    if (
      c.button === 1 &&
      c.type === "mousedown" &&
      (Qe(c, `${d}-flow__node`) || Qe(c, `${d}-flow__edge`))
    ) {
      return true;
    }
    if (
      (!r && !f && !i && !s && !n) ||
      o ||
      (u && !p) ||
      (Qe(c, a) && p) ||
      (Qe(c, l) && (!p || (i && p && !e))) ||
      (!n && c.ctrlKey && p)
    ) {
      return false;
    }
    if (
      !n &&
      c.type === "touchstart" &&
      ((m = c.touches) == null ? undefined : m.length) > 1
    ) {
      c.preventDefault();
      return false;
    }
    if (
      (!f && !i && !h && p) ||
      (!r && (c.type === "mousedown" || c.type === "touchstart")) ||
      (Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
    ) {
      return false;
    }
    const v =
      (Array.isArray(r) && r.includes(c.button)) || !c.button || c.button <= 1;
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
    isZoomingOrPanning: false,
    usedRightMouseButton: false,
    prevViewport: {},
    mouseButton: 0,
    timerId: undefined,
    panScrollTimeout: undefined,
    isPanScrolling: false,
  };
  const u = e.getBoundingClientRect();
  const c = Vs().scaleExtent([t, n]).translateExtent(r);
  const f = de(e).call(c);
  x(
    {
      x: i.x,
      y: i.y,
      zoom: st(i.zoom, t, n),
    },
    [
      [0, 0],
      [u.width, u.height],
    ],
    r,
  );
  const h = f.on("wheel.zoom");
  const p = f.on("dblclick.zoom");
  c.wheelDelta(ga);
  async function v(E, k) {
    if (f) {
      return new Promise((O) => {
        if (c != null) {
          c.interpolate(
            (k == null ? undefined : k.interpolate) === "linear" ? mt : Bt,
          ).transform(
            kn(
              f,
              k == null ? undefined : k.duration,
              k == null ? undefined : k.ease,
              () => O(true),
            ),
            E,
          );
        }
      });
    } else {
      return false;
    }
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
    if (_ && !d.isZoomingOrPanning) {
      y();
    }
    const Y = T && !P && !_;
    c.clickDistance(H ? Infinity : !xe(G) || G < 0 ? 0 : G);
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
      : zh({
          noWheelClassName: E,
          preventScrolling: $,
          d3ZoomHandler: h,
        });
    f.on("wheel.zoom", K, {
      passive: false,
    });
    const Q = Vh({
      zoomPanValues: d,
      onDraggingChange: l,
      onPanZoomStart: o,
    });
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
    c.filter(J);
    if (F) {
      f.on("dblclick.zoom", p);
    } else {
      f.on("dblclick.zoom", null);
    }
  }
  function y() {
    c.on("zoom", null);
  }
  async function x(E, k, O) {
    const _ = Cn(E);
    const T = c == null ? undefined : c.constrain()(_, k, O);
    if (T) {
      await v(T);
    }
    return T;
  }
  async function g(E, k) {
    const O = Cn(E);
    await v(O, k);
    return O;
  }
  function w(E) {
    if (f) {
      const k = Cn(E);
      const O = f.property("__zoom");
      if (O.k !== E.zoom || O.x !== E.x || O.y !== E.y) {
        if (c != null) {
          c.transform(f, k, null, {
            sync: true,
          });
        }
      }
    }
  }
  function C() {
    const E = f
      ? zs(f.node())
      : {
          x: 0,
          y: 0,
          k: 1,
        };
    return {
      x: E.x,
      y: E.y,
      zoom: E.k,
    };
  }
  async function N(E, k) {
    if (f) {
      return new Promise((O) => {
        if (c != null) {
          c.interpolate(
            (k == null ? undefined : k.interpolate) === "linear" ? mt : Bt,
          ).scaleTo(
            kn(
              f,
              k == null ? undefined : k.duration,
              k == null ? undefined : k.ease,
              () => O(true),
            ),
            E,
          );
        }
      });
    } else {
      return false;
    }
  }
  async function M(E, k) {
    if (f) {
      return new Promise((O) => {
        if (c != null) {
          c.interpolate(
            (k == null ? undefined : k.interpolate) === "linear" ? mt : Bt,
          ).scaleBy(
            kn(
              f,
              k == null ? undefined : k.duration,
              k == null ? undefined : k.ease,
              () => O(true),
            ),
            E,
          );
        }
      });
    } else {
      return false;
    }
  }
  function b(E) {
    if (c != null) {
      c.scaleExtent(E);
    }
  }
  function S(E) {
    if (c != null) {
      c.translateExtent(E);
    }
  }
  function I(E) {
    const k = !xe(E) || E < 0 ? 0 : E;
    if (c != null) {
      c.clickDistance(k);
    }
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
  e.Line = "line";
  e.Handle = "handle";
})((lt ||= {}));
function Yh({
  width: e,
  prevWidth: t,
  height: n,
  prevHeight: r,
  affectsX: i,
  affectsY: s,
}) {
  const o = e - t;
  const a = n - r;
  const l = [o > 0 ? 1 : o < 0 ? -1 : 0, a > 0 ? 1 : a < 0 ? -1 : 0];
  if (o && i) {
    l[0] = l[0] * -1;
  }
  if (a && s) {
    l[1] = l[1] * -1;
  }
  return l;
}
function qi(e) {
  const t = e.includes("right") || e.includes("left");
  const n = e.includes("bottom") || e.includes("top");
  const r = e.includes("left");
  const i = e.includes("top");
  return {
    isHorizontal: t,
    isVertical: n,
    affectsX: r,
    affectsY: i,
  };
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
  if (e) {
    return !t;
  } else {
    return t;
  }
}
function Gh(e, t, n, r, i, s, o, a) {
  let { affectsX: l, affectsY: d } = t;
  const { isHorizontal: u, isVertical: c } = t;
  const f = u && c;
  const { xSnapped: h, ySnapped: p } = n;
  const { minWidth: v, maxWidth: m, minHeight: y, maxHeight: x } = r;
  const { x: g, y: w, width: C, height: N, aspectRatio: M } = e;
  let b = Math.floor(u ? h - e.pointerX : 0);
  let S = Math.floor(c ? p - e.pointerY : 0);
  const I = C + (l ? -b : b);
  const E = N + (d ? -S : S);
  const k = -s[0] * C;
  const O = -s[1] * N;
  let _ = Ht(I, v, m);
  let T = Ht(E, y, x);
  if (o) {
    let V = 0;
    let $ = 0;
    if (l && b < 0) {
      V = $e(g + b + k, o[0][0]);
    } else if (!l && b > 0) {
      V = De(g + I + k, o[1][0]);
    }
    if (d && S < 0) {
      $ = $e(w + S + O, o[0][1]);
    } else if (!d && S > 0) {
      $ = De(w + E + O, o[1][1]);
    }
    _ = Math.max(_, V);
    T = Math.max(T, $);
  }
  if (a) {
    let V = 0;
    let $ = 0;
    if (l && b > 0) {
      V = De(g + b, a[0][0]);
    } else if (!l && b < 0) {
      V = $e(g + I, a[1][0]);
    }
    if (d && S > 0) {
      $ = De(w + S, a[0][1]);
    } else if (!d && S < 0) {
      $ = $e(w + E, a[1][1]);
    }
    _ = Math.max(_, V);
    T = Math.max(T, $);
  }
  if (i) {
    if (u) {
      const V = Ht(I / M, y, x) * M;
      _ = Math.max(_, V);
      if (o) {
        let $ = 0;
        if ((!l && !d) || (l && !d && f)) {
          $ = De(w + O + I / M, o[1][1]) * M;
        } else {
          $ = $e(w + O + (l ? b : -b) / M, o[0][1]) * M;
        }
        _ = Math.max(_, $);
      }
      if (a) {
        let $ = 0;
        if ((!l && !d) || (l && !d && f)) {
          $ = $e(w + I / M, a[1][1]) * M;
        } else {
          $ = De(w + (l ? b : -b) / M, a[0][1]) * M;
        }
        _ = Math.max(_, $);
      }
    }
    if (c) {
      const V = Ht(E * M, v, m) / M;
      T = Math.max(T, V);
      if (o) {
        let $ = 0;
        if ((!l && !d) || (d && !l && f)) {
          $ = De(g + E * M + k, o[1][0]) / M;
        } else {
          $ = $e(g + (d ? S : -S) * M + k, o[0][0]) / M;
        }
        T = Math.max(T, $);
      }
      if (a) {
        let $ = 0;
        if ((!l && !d) || (d && !l && f)) {
          $ = $e(g + E * M, a[1][0]) / M;
        } else {
          $ = De(g + (d ? S : -S) * M, a[0][0]) / M;
        }
        T = Math.max(T, $);
      }
    }
  }
  S = S + (S < 0 ? T : -T);
  b = b + (b < 0 ? _ : -_);
  if (i) {
    if (f) {
      if (I > E * M) {
        S = (Wi(l, d) ? -b : b) / M;
      } else {
        b = (Wi(l, d) ? -S : S) * M;
      }
    } else if (u) {
      S = b / M;
      d = l;
    } else {
      b = S * M;
      l = d;
    }
  }
  const A = l ? g + b : g;
  const D = d ? w + S : w;
  return {
    width: C + (l ? -b : b),
    height: N + (d ? -S : S),
    x: s[0] * b * (l ? -1 : 1) + A,
    y: s[1] * S * (d ? -1 : 1) + D,
  };
}
const ma = {
  width: 0,
  height: 0,
  x: 0,
  y: 0,
};
const Xh = {
  ...ma,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1,
};
function Uh(e, t, n) {
  const r = t.position.x + e.position.x;
  const i = t.position.y + e.position.y;
  const s = e.measured.width ?? 0;
  const o = e.measured.height ?? 0;
  const a = n[0] * s;
  const l = n[1] * o;
  return [
    [r - a, i - l],
    [r + s - a, i + o - l],
  ];
}
function Kh({
  domNode: e,
  nodeId: t,
  getStoreItems: n,
  onChange: r,
  onEnd: i,
}) {
  const s = de(e);
  let o = {
    controlDirection: qi("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE,
    },
    resizeDirection: undefined,
    keepAspectRatio: false,
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
    let y = {
      ...ma,
    };
    let x = {
      ...Xh,
    };
    o = {
      boundaries: u,
      resizeDirection: f,
      keepAspectRatio: c,
      controlDirection: qi(d),
    };
    let g;
    let w = null;
    let C = [];
    let N;
    let M;
    let b;
    let S = false;
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
        g = k.get(t);
        if (!g) {
          return;
        }
        w = (D == null ? undefined : D.getBoundingClientRect()) ?? null;
        const { xSnapped: V, ySnapped: $ } = yt(E.sourceEvent, {
          transform: O,
          snapGrid: _,
          snapToGrid: T,
          containerBounds: w,
        });
        y = {
          width: g.measured.width ?? 0,
          height: g.measured.height ?? 0,
          x: g.position.x ?? 0,
          y: g.position.y ?? 0,
        };
        x = {
          ...y,
          pointerX: V,
          pointerY: $,
          aspectRatio: y.width / y.height,
        };
        N = undefined;
        M = Ue(g.extent) ? g.extent : undefined;
        if (g.parentId && (g.extent === "parent" || g.expandParent)) {
          N = k.get(g.parentId);
        }
        if (N && g.extent === "parent") {
          M = [
            [0, 0],
            [N.measured.width, N.measured.height],
          ];
        }
        C = [];
        b = undefined;
        for (const [B, q] of k) {
          if (
            q.parentId === t &&
            (C.push({
              id: B,
              position: {
                ...q.position,
              },
              extent: q.extent,
            }),
            q.extent === "parent" || q.expandParent)
          ) {
            const F = Uh(q, g, q.origin ?? A);
            if (b) {
              b = [
                [Math.min(F[0][0], b[0][0]), Math.min(F[0][1], b[0][1])],
                [Math.max(F[1][0], b[1][0]), Math.max(F[1][1], b[1][1])],
              ];
            } else {
              b = F;
            }
          }
        }
        if (h != null) {
          h(E, {
            ...y,
          });
        }
      })
      .on("drag", (E) => {
        const { transform: k, snapGrid: O, snapToGrid: _, nodeOrigin: T } = n();
        const A = yt(E.sourceEvent, {
          transform: k,
          snapGrid: O,
          snapToGrid: _,
          containerBounds: w,
        });
        const D = [];
        if (!g) {
          return;
        }
        const { x: V, y: $, width: B, height: q } = y;
        const F = {};
        const P = g.origin ?? T;
        const {
          width: L,
          height: j,
          x: W,
          y: G,
        } = Gh(
          x,
          o.controlDirection,
          A,
          o.boundaries,
          o.keepAspectRatio,
          P,
          M,
          b,
        );
        const H = L !== B;
        const Y = j !== q;
        const K = W !== V && H;
        const Q = G !== $ && Y;
        if (!K && !Q && !H && !Y) {
          return;
        }
        if (
          (K || Q || P[0] === 1 || P[1] === 1) &&
          ((F.x = K ? W : y.x),
          (F.y = Q ? G : y.y),
          (y.x = F.x),
          (y.y = F.y),
          C.length > 0)
        ) {
          const te = W - V;
          const ne = G - $;
          for (const se of C) {
            se.position = {
              x: se.position.x - te + P[0] * (L - B),
              y: se.position.y - ne + P[1] * (j - q),
            };
            D.push(se);
          }
        }
        if (H || Y) {
          F.width =
            H && (!o.resizeDirection || o.resizeDirection === "horizontal")
              ? L
              : y.width;
          F.height =
            Y && (!o.resizeDirection || o.resizeDirection === "vertical")
              ? j
              : y.height;
          y.width = F.width;
          y.height = F.height;
        }
        if (N && g.expandParent) {
          const te = P[0] * (F.width ?? 0);
          if (F.x && F.x < te) {
            y.x = te;
            x.x = x.x - (F.x - te);
          }
          const ne = P[1] * (F.height ?? 0);
          if (F.y && F.y < ne) {
            y.y = ne;
            x.y = x.y - (F.y - ne);
          }
        }
        const U = Yh({
          width: y.width,
          prevWidth: B,
          height: y.height,
          prevHeight: q,
          affectsX: o.controlDirection.affectsX,
          affectsY: o.controlDirection.affectsY,
        });
        const X = {
          ...y,
          direction: U,
        };
        if ((m == null ? undefined : m(E, X)) !== false) {
          S = true;
          if (p != null) {
            p(E, X);
          }
          r(F, D);
        }
      })
      .on("end", (E) => {
        if (S) {
          if (v != null) {
            v(E, {
              ...y,
            });
          }
          if (i != null) {
            i({
              ...y,
            });
          }
          S = false;
        }
      });
    s.call(I);
  }
  function l() {
    s.on(".drag", null);
  }
  return {
    update: a,
    destroy: l,
  };
}
const Zh = {};
const Yi = (e) => {
  let t;
  const n = new Set();
  const r = (u, c) => {
    const f = typeof u == "function" ? u(t) : u;
    if (!Object.is(f, t)) {
      const h = t;
      t =
        (c ?? (typeof f != "object" || f === null))
          ? f
          : Object.assign({}, t, f);
      n.forEach((p) => p(t, h));
    }
  };
  const i = () => t;
  const l = {
    setState: r,
    getState: i,
    getInitialState: () => d,
    subscribe: (u) => {
      n.add(u);
      return () => n.delete(u);
    },
    destroy: () => {
      if ((Zh ? "production" : undefined) !== "production") {
        console.warn(
          "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.",
        );
      }
      n.clear();
    },
  };
  const d = (t = e(r, i, l));
  return l;
};
const Qh = (e) => (e ? Yi(e) : Yi);
const { useDebugValue: Jh } = ll;
const { useSyncExternalStoreWithSelector: ep } = cl;
const tp = (e) => e;
function ya(e, t = tp, n) {
  const r = ep(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n,
  );
  Jh(r);
  return r;
}
const Gi = (e, t) => {
  const n = Qh(e);
  const r = (i, s = t) => ya(n, i, s);
  Object.assign(r, n);
  return r;
};
const np = (e, t) => (e ? Gi(e, t) : Gi);
function ie(e, t) {
  if (Object.is(e, t)) {
    return true;
  }
  if (
    typeof e != "object" ||
    e === null ||
    typeof t != "object" ||
    t === null
  ) {
    return false;
  }
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) {
      return false;
    }
    for (const [r, i] of e) {
      if (!Object.is(i, t.get(r))) {
        return false;
      }
    }
    return true;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) {
      return false;
    }
    for (const r of e) {
      if (!t.has(r)) {
        return false;
      }
    }
    return true;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length) {
    return false;
  }
  for (const r of n) {
    if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r])) {
      return false;
    }
  }
  return true;
}
const gn = z.createContext(null);
const _Component14 = gn.Provider;
const xa = ve.error001("react");
function ee(e, t) {
  const n = z.useContext(gn);
  if (n === null) {
    throw new Error(xa);
  }
  return ya(n, e, t);
}
function oe() {
  const e = z.useContext(gn);
  if (e === null) {
    throw new Error(xa);
  }
  return z.useMemo(
    () => ({
      getState: e.getState,
      setState: e.setState,
      subscribe: e.subscribe,
    }),
    [e],
  );
}
const Xi = {
  display: "none",
};
const ip = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)",
};
const wa = "react-flow__node-desc";
const va = "react-flow__edge-desc";
const op = "react-flow__aria-live";
const sp = (e) => e.ariaLiveMessage;
const ap = (e) => e.ariaLabelConfig;
function _Component({ rfId: e }) {
  const t = ee(sp);
  return (
    <div id={`${op}-${e}`} aria-live="assertive" aria-atomic="true" style={ip}>
      {t}
    </div>
  );
}
function _Component19({ rfId: e, disableKeyboardA11y: t }) {
  const n = ee(ap);
  return (
    <R.Fragment>
      <div id={`${wa}-${e}`} style={Xi}>
        {t
          ? n["node.a11yDescription.default"]
          : n["node.a11yDescription.keyboardDisabled"]}
      </div>
      <div id={`${va}-${e}`} style={Xi}>
        {n["edge.a11yDescription.default"]}
      </div>
      {!t && <_Component rfId={e} />}
    </R.Fragment>
  );
}
const _Component2 = z.forwardRef(
  (
    { position: e = "top-left", children: t, className: n, style: r, ...i },
    s,
  ) => {
    const o = `${e}`.split("-");
    return (
      <div
        className={le(["react-flow__panel", n, ...o])}
        style={r}
        ref={s}
        {...i}
      >
        {t}
      </div>
    );
  },
);
_Component2.displayName = "Panel";
function _Component18({ proOptions: e, position: t = "bottom-right" }) {
  if (e != null && e.hideAttribution) {
    return null;
  } else {
    return (
      <_Component2
        position={t}
        className="react-flow__attribution"
        data-message="Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev"
      >
        <a
          href="https://reactflow.dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="React Flow attribution"
        >
          React Flow
        </a>
      </_Component2>
    );
  }
}
const dp = (e) => {
  const t = [];
  const n = [];
  for (const [, r] of e.nodeLookup) {
    if (r.selected) {
      t.push(r.internals.userNode);
    }
  }
  for (const [, r] of e.edgeLookup) {
    if (r.selected) {
      n.push(r);
    }
  }
  return {
    selectedNodes: t,
    selectedEdges: n,
  };
};
const zt = (e) => e.id;
function fp(e, t) {
  return (
    ie(e.selectedNodes.map(zt), t.selectedNodes.map(zt)) &&
    ie(e.selectedEdges.map(zt), t.selectedEdges.map(zt))
  );
}
function _Component3({ onSelectionChange: e }) {
  const t = oe();
  const { selectedNodes: n, selectedEdges: r } = ee(dp, fp);
  z.useEffect(() => {
    const i = {
      nodes: n,
      edges: r,
    };
    if (e != null) {
      e(i);
    }
    t.getState().onSelectionChangeHandlers.forEach((s) => s(i));
  }, [n, r, e]);
  return null;
}
const pp = (e) => !!e.onSelectionChangeHandlers;
function _Component17({ onSelectionChange: e }) {
  const t = ee(pp);
  if (e || t) {
    return <_Component3 onSelectionChange={e} />;
  } else {
    return null;
  }
}
const ba = [0, 0];
const mp = {
  x: 0,
  y: 0,
  zoom: 1,
};
const yp = [
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
];
const Ui = [...yp, "rfId"];
const xp = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
});
const Ki = {
  translateExtent: _t,
  nodeOrigin: ba,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: true,
  noPanClassName: "nopan",
  rfId: "1",
};
function _Component16(e) {
  const {
    setNodes: t,
    setEdges: n,
    setMinZoom: r,
    setMaxZoom: i,
    setTranslateExtent: s,
    setNodeExtent: o,
    reset: a,
    setDefaultNodesAndEdges: l,
  } = ee(xp, ie);
  const d = oe();
  z.useEffect(() => {
    l(e.defaultNodes, e.defaultEdges);
    return () => {
      u.current = Ki;
      a();
    };
  }, []);
  const u = z.useRef(Ki);
  z.useEffect(
    () => {
      for (const c of Ui) {
        const f = e[c];
        const h = u.current[c];
        if (f !== h) {
          if (typeof e[c] !== "undefined") {
            if (c === "nodes") {
              t(f);
            } else if (c === "edges") {
              n(f);
            } else if (c === "minZoom") {
              r(f);
            } else if (c === "maxZoom") {
              i(f);
            } else if (c === "translateExtent") {
              s(f);
            } else if (c === "nodeExtent") {
              o(f);
            } else if (c === "ariaLabelConfig") {
              d.setState({
                ariaLabelConfig: lh(f),
              });
            } else if (c === "fitView") {
              d.setState({
                fitViewQueued: f,
              });
            } else if (c === "fitViewOptions") {
              d.setState({
                fitViewOptions: f,
              });
            } else {
              d.setState({
                [c]: f,
              });
            }
          }
        }
      }
      u.current = e;
    },
    Ui.map((c) => e[c]),
  );
  return null;
}
function Zi() {
  if (typeof window === "undefined" || !window.matchMedia) {
    return null;
  } else {
    return window.matchMedia("(prefers-color-scheme: dark)");
  }
}
function vp(e) {
  var r;
  const [t, n] = z.useState(e === "system" ? null : e);
  z.useEffect(() => {
    if (e !== "system") {
      n(e);
      return;
    }
    const i = Zi();
    const s = () => n(i != null && i.matches ? "dark" : "light");
    s();
    if (i != null) {
      i.addEventListener("change", s);
    }
    return () => {
      if (i != null) {
        i.removeEventListener("change", s);
      }
    };
  }, [e]);
  if (t !== null) {
    return t;
  } else if ((r = Zi()) != null && r.matches) {
    return "dark";
  } else {
    return "light";
  }
}
const Qi = typeof document !== "undefined" ? document : null;
function Ct(
  e = null,
  t = {
    target: Qi,
    actInsideInputWithModifier: true,
  },
) {
  const [n, r] = z.useState(false);
  const i = z.useRef(false);
  const s = z.useRef(new Set([]));
  const [o, a] = z.useMemo(() => {
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
        );
      const u = d.reduce((c, f) => c.concat(...f), []);
      return [d, u];
    }
    return [[], []];
  }, [e]);
  z.useEffect(() => {
    const l = (t == null ? undefined : t.target) ?? Qi;
    const d = (t == null ? undefined : t.actInsideInputWithModifier) ?? true;
    if (e !== null) {
      const u = (h) => {
        var m;
        var y;
        i.current = h.ctrlKey || h.metaKey || h.shiftKey || h.altKey;
        if ((!i.current || (i.current && !d)) && ea(h)) {
          return false;
        }
        const v = eo(h.code, a);
        s.current.add(h[v]);
        if (Ji(o, s.current, false)) {
          const x =
            ((y = (m = h.composedPath) == null ? undefined : m.call(h)) == null
              ? undefined
              : y[0]) || h.target;
          const g =
            (x == null ? undefined : x.nodeName) === "BUTTON" ||
            (x == null ? undefined : x.nodeName) === "A";
          if (t.preventDefault !== false && (i.current || !g)) {
            h.preventDefault();
          }
          r(true);
        }
      };
      const c = (h) => {
        const p = eo(h.code, a);
        if (Ji(o, s.current, true)) {
          r(false);
          s.current.clear();
        } else {
          s.current.delete(h[p]);
        }
        if (h.key === "Meta") {
          s.current.clear();
        }
        i.current = false;
      };
      const f = () => {
        s.current.clear();
        r(false);
      };
      if (l != null) {
        l.addEventListener("keydown", u);
      }
      if (l != null) {
        l.addEventListener("keyup", c);
      }
      window.addEventListener("blur", f);
      window.addEventListener("contextmenu", f);
      return () => {
        if (l != null) {
          l.removeEventListener("keydown", u);
        }
        if (l != null) {
          l.removeEventListener("keyup", c);
        }
        window.removeEventListener("blur", f);
        window.removeEventListener("contextmenu", f);
      };
    }
  }, [e, r]);
  return n;
}
function Ji(e, t, n) {
  return e
    .filter((r) => n || r.length === t.size)
    .some((r) => r.every((i) => t.has(i)));
}
function eo(e, t) {
  if (t.includes(e)) {
    return "code";
  } else {
    return "key";
  }
}
const bp = () => {
  const e = oe();
  return z.useMemo(
    () => ({
      zoomIn: async (t) => {
        const { panZoom: n } = e.getState();
        if (n) {
          return n.scaleBy(1.2, t);
        } else {
          return false;
        }
      },
      zoomOut: async (t) => {
        const { panZoom: n } = e.getState();
        if (n) {
          return n.scaleBy(1 / 1.2, t);
        } else {
          return false;
        }
      },
      zoomTo: async (t, n) => {
        const { panZoom: r } = e.getState();
        if (r) {
          return r.scaleTo(t, n);
        } else {
          return false;
        }
      },
      getZoom: () => e.getState().transform[2],
      setViewport: async (t, n) => {
        const {
          transform: [r, i, s],
          panZoom: o,
        } = e.getState();
        if (o) {
          await o.setViewport(
            {
              x: t.x ?? r,
              y: t.y ?? i,
              zoom: t.zoom ?? s,
            },
            n,
          );
          return true;
        } else {
          return false;
        }
      },
      getViewport: () => {
        const [t, n, r] = e.getState().transform;
        return {
          x: t,
          y: n,
          zoom: r,
        };
      },
      setCenter: async (t, n, r) => e.getState().setCenter(t, n, r),
      fitBounds: async (t, n) => {
        const {
          width: r,
          height: i,
          minZoom: s,
          maxZoom: o,
          panZoom: a,
        } = e.getState();
        const l = Gr(t, r, i, s, o, (n == null ? undefined : n.padding) ?? 0.1);
        if (a) {
          await a.setViewport(l, {
            duration: n == null ? undefined : n.duration,
            ease: n == null ? undefined : n.ease,
            interpolate: n == null ? undefined : n.interpolate,
          });
          return true;
        } else {
          return false;
        }
      },
      screenToFlowPosition: (t, n = {}) => {
        const {
          transform: r,
          snapGrid: i,
          snapToGrid: s,
          domNode: o,
        } = e.getState();
        if (!o) {
          return t;
        }
        const { x: a, y: l } = o.getBoundingClientRect();
        const d = {
          x: t.x - a,
          y: t.y - l,
        };
        const u = n.snapGrid ?? i;
        const c = n.snapToGrid ?? s;
        return ut(d, r, c, u);
      },
      flowToScreenPosition: (t) => {
        const { transform: n, domNode: r } = e.getState();
        if (!r) {
          return t;
        }
        const { x: i, y: s } = r.getBoundingClientRect();
        const o = ct(t, n);
        return {
          x: o.x + i,
          y: o.y + s,
        };
      },
    }),
    [],
  );
};
function _a(e, t) {
  const n = [];
  const r = new Map();
  const i = [];
  for (const s of e) {
    if (s.type === "add") {
      i.push(s);
      continue;
    } else if (s.type === "remove" || s.type === "replace") {
      r.set(s.id, [s]);
    } else {
      const o = r.get(s.id);
      if (o) {
        o.push(s);
      } else {
        r.set(s.id, [s]);
      }
    }
  }
  for (const s of t) {
    const o = r.get(s.id);
    if (!o) {
      n.push(s);
      continue;
    }
    if (o[0].type === "remove") {
      continue;
    }
    if (o[0].type === "replace") {
      n.push({
        ...o[0].item,
      });
      continue;
    }
    const a = {
      ...s,
    };
    for (const l of o) {
      _p(l, a);
    }
    n.push(a);
  }
  if (i.length) {
    i.forEach((s) => {
      if (s.index !== undefined) {
        n.splice(s.index, 0, {
          ...s.item,
        });
      } else {
        n.push({
          ...s.item,
        });
      }
    });
  }
  return n;
}
function _p(e, t) {
  switch (e.type) {
    case "select": {
      t.selected = e.selected;
      break;
    }
    case "position": {
      if (typeof e.position !== "undefined") {
        t.position = e.position;
      }
      if (typeof e.dragging !== "undefined") {
        t.dragging = e.dragging;
      }
      break;
    }
    case "dimensions": {
      if (typeof e.dimensions !== "undefined") {
        t.measured = {
          ...e.dimensions,
        };
        if (e.setAttributes) {
          if (e.setAttributes === true || e.setAttributes === "width") {
            t.width = e.dimensions.width;
          }
          if (e.setAttributes === true || e.setAttributes === "height") {
            t.height = e.dimensions.height;
          }
        }
      }
      if (typeof e.resizing == "boolean") {
        t.resizing = e.resizing;
      }
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
  return {
    id: e,
    type: "select",
    selected: t,
  };
}
function Je(e, t = new Set(), n = false) {
  const r = [];
  for (const [i, s] of e) {
    const o = t.has(i);
    if ((s.selected !== undefined || !!o) && s.selected !== o) {
      if (n) {
        s.selected = o;
      }
      r.push(Fe(s.id, o));
    }
  }
  return r;
}
function to({ items: e = [], lookup: t }) {
  var i;
  const n = [];
  const r = new Map(e.map((s) => [s.id, s]));
  for (const [s, o] of e.entries()) {
    const a = t.get(o.id);
    const l =
      ((i = a == null ? undefined : a.internals) == null
        ? undefined
        : i.userNode) ?? a;
    if (l !== undefined && l !== o) {
      n.push({
        id: o.id,
        item: o,
        type: "replace",
      });
    }
    if (l === undefined) {
      n.push({
        item: o,
        type: "add",
        index: s,
      });
    }
  }
  for (const [s] of t) {
    if (r.get(s) === undefined) {
      n.push({
        id: s,
        type: "remove",
      });
    }
  }
  return n;
}
function no(e) {
  return {
    id: e.id,
    type: "remove",
  };
}
const Np = Ks();
function Cp(e, t, n = {}) {
  return gh(e, t, {
    ...n,
    onError: n.onError ?? Np,
  });
}
const ro = (e) => eh(e);
const kp = (e) => Ys(e);
function Ea(e) {
  return z.forwardRef(e);
}
const Mp = typeof window !== "undefined" ? z.useLayoutEffect : z.useEffect;
function io(e) {
  const [t, n] = z.useState(BigInt(0));
  const [r] = z.useState(() => Ip(() => n((i) => i + BigInt(1))));
  Mp(() => {
    const i = r.get();
    if (i.length) {
      e(i);
      r.reset();
    }
  }, [t]);
  return r;
}
function Ip(e) {
  let t = [];
  return {
    get: () => t,
    reset: () => {
      t = [];
    },
    push: (n) => {
      t.push(n);
      e();
    },
  };
}
const Sa = z.createContext(null);
function Pp({ children: e }) {
  const t = oe();
  const n = z.useCallback((a) => {
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
    for (const y of a) {
      v = typeof y == "function" ? y(v) : y;
    }
    let m = to({
      items: v,
      lookup: f,
    });
    for (const y of p.values()) {
      m = y(m);
    }
    if (u) {
      d(v);
    }
    if (m.length > 0) {
      if (c != null) {
        c(m);
      }
    } else if (h) {
      window.requestAnimationFrame(() => {
        const { fitViewQueued: y, nodes: x, setNodes: g } = t.getState();
        if (y) {
          g(x);
        }
      });
    }
  }, []);
  const r = io(n);
  const i = z.useCallback((a) => {
    const {
      edges: l = [],
      setEdges: d,
      hasDefaultEdges: u,
      onEdgesChange: c,
      edgeLookup: f,
    } = t.getState();
    let h = l;
    for (const p of a) {
      h = typeof p == "function" ? p(h) : p;
    }
    if (u) {
      d(h);
    } else if (c) {
      c(
        to({
          items: h,
          lookup: f,
        }),
      );
    }
  }, []);
  const s = io(i);
  const o = z.useMemo(
    () => ({
      nodeQueue: r,
      edgeQueue: s,
    }),
    [],
  );
  return <Sa.Provider value={o}>{e}</Sa.Provider>;
}
function Ap() {
  const e = z.useContext(Sa);
  if (!e) {
    throw new Error("useBatchContext must be used within a BatchProvider");
  }
  return e;
}
const Tp = (e) => !!e.panZoom;
function ei() {
  const e = bp();
  const t = oe();
  const n = Ap();
  const r = ee(Tp);
  const i = z.useMemo(() => {
    const s = (c) => t.getState().nodeLookup.get(c);
    const o = (c) => {
      n.nodeQueue.push(c);
    };
    const a = (c) => {
      n.edgeQueue.push(c);
    };
    const l = (c) => {
      var y;
      var x;
      const { nodeLookup: f, nodeOrigin: h } = t.getState();
      const p = ro(c) ? c : f.get(c.id);
      const v = p.parentId
        ? Qs(p.position, p.measured, p.parentId, f, h)
        : p.position;
      const m = {
        ...p,
        position: v,
        width: ((y = p.measured) == null ? undefined : y.width) ?? p.width,
        height: ((x = p.measured) == null ? undefined : x.height) ?? p.height,
      };
      return at(m);
    };
    const d = (
      c,
      f,
      h = {
        replace: false,
      },
    ) => {
      o((p) =>
        p.map((v) => {
          if (v.id === c) {
            const m = typeof f == "function" ? f(v) : f;
            if (h.replace && ro(m)) {
              return m;
            } else {
              return {
                ...v,
                ...m,
              };
            }
          }
          return v;
        }),
      );
    };
    const u = (
      c,
      f,
      h = {
        replace: false,
      },
    ) => {
      a((p) =>
        p.map((v) => {
          if (v.id === c) {
            const m = typeof f == "function" ? f(v) : f;
            if (h.replace && kp(m)) {
              return m;
            } else {
              return {
                ...v,
                ...m,
              };
            }
          }
          return v;
        }),
      );
    };
    return {
      getNodes: () =>
        t.getState().nodes.map((c) => ({
          ...c,
        })),
      getNode: (c) => {
        var f;
        if ((f = s(c)) == null) {
          return undefined;
        } else {
          return f.internals.userNode;
        }
      },
      getInternalNode: s,
      getEdges: () => {
        const { edges: c = [] } = t.getState();
        return c.map((f) => ({
          ...f,
        }));
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
        const { nodes: c = [], edges: f = [], transform: h } = t.getState();
        const [p, v, m] = h;
        return {
          nodes: c.map((y) => ({
            ...y,
          })),
          edges: f.map((y) => ({
            ...y,
          })),
          viewport: {
            x: p,
            y: v,
            zoom: m,
          },
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
        } = t.getState();
        const { nodes: C, edges: N } = await oh({
          nodesToRemove: c,
          edgesToRemove: f,
          nodes: h,
          edges: p,
          onBeforeDelete: w,
        });
        const M = N.length > 0;
        const b = C.length > 0;
        if (M) {
          const S = N.map(no);
          if (m != null) {
            m(N);
          }
          x(S);
        }
        if (b) {
          const S = C.map(no);
          if (v != null) {
            v(C);
          }
          y(S);
        }
        if (b || M) {
          if (g != null) {
            g({
              nodes: C,
              edges: N,
            });
          }
        }
        return {
          deletedNodes: C,
          deletedEdges: N,
        };
      },
      getIntersectingNodes: (c, f = true, h) => {
        const p = Ri(c);
        const v = p ? c : l(c);
        const m = h !== undefined;
        if (v) {
          return (h || t.getState().nodes).filter((y) => {
            const x = t.getState().nodeLookup.get(y.id);
            if (x && !p && (y.id === c.id || !x.internals.positionAbsolute)) {
              return false;
            }
            const g = at(m ? y : x);
            const w = St(g, v);
            return (
              (f && w > 0) || w >= g.width * g.height || w >= v.width * v.height
            );
          });
        } else {
          return [];
        }
      },
      isNodeIntersecting: (c, f, h = true) => {
        const v = Ri(c) ? c : l(c);
        if (!v) {
          return false;
        }
        const m = St(v, f);
        return (
          (h && m > 0) || m >= f.width * f.height || m >= v.width * v.height
        );
      },
      updateNode: d,
      updateNodeData: (
        c,
        f,
        h = {
          replace: false,
        },
      ) => {
        d(
          c,
          (p) => {
            const v = typeof f == "function" ? f(p) : f;
            if (h.replace) {
              return {
                ...p,
                data: v,
              };
            } else {
              return {
                ...p,
                data: {
                  ...p.data,
                  ...v,
                },
              };
            }
          },
          h,
        );
      },
      updateEdge: u,
      updateEdgeData: (
        c,
        f,
        h = {
          replace: false,
        },
      ) => {
        u(
          c,
          (p) => {
            const v = typeof f == "function" ? f(p) : f;
            if (h.replace) {
              return {
                ...p,
                data: v,
              };
            } else {
              return {
                ...p,
                data: {
                  ...p.data,
                  ...v,
                },
              };
            }
          },
          h,
        );
      },
      getNodesBounds: (c) => {
        const { nodeLookup: f, nodeOrigin: h } = t.getState();
        return th(c, {
          nodeLookup: f,
          nodeOrigin: h,
        });
      },
      getHandleConnections: ({ type: c, id: f, nodeId: h }) => {
        var p;
        return Array.from(
          ((p = t
            .getState()
            .connectionLookup.get(`${h}-${c}${f ? `-${f}` : ""}`)) == null
            ? undefined
            : p.values()) ?? [],
        );
      },
      getNodeConnections: ({ type: c, handleId: f, nodeId: h }) => {
        var p;
        return Array.from(
          ((p = t
            .getState()
            .connectionLookup.get(
              `${h}${c ? (f ? `-${c}-${f}` : `-${c}`) : ""}`,
            )) == null
            ? undefined
            : p.values()) ?? [],
        );
      },
      fitView: async (c) => {
        const f = t.getState().fitViewResolver ?? ch();
        t.setState({
          fitViewQueued: true,
          fitViewOptions: c,
          fitViewResolver: f,
        });
        n.nodeQueue.push((h) => [...h]);
        return f.promise;
      },
    };
  }, []);
  return z.useMemo(
    () => ({
      ...i,
      ...e,
      viewportInitialized: r,
    }),
    [r],
  );
}
const oo = (e) => e.selected;
const Rp = typeof window !== "undefined" ? window : undefined;
function Lp({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = oe();
  const { deleteElements: r } = ei();
  const i = Ct(e, {
    actInsideInputWithModifier: false,
  });
  const s = Ct(t, {
    target: Rp,
  });
  z.useEffect(() => {
    if (i) {
      const { edges: o, nodes: a } = n.getState();
      r({
        nodes: a.filter(oo),
        edges: o.filter(oo),
      });
      n.setState({
        nodesSelectionActive: false,
      });
    }
  }, [i]);
  z.useEffect(() => {
    n.setState({
      multiSelectionActive: s,
    });
  }, [s]);
}
function $p(e) {
  const t = oe();
  z.useEffect(() => {
    const n = () => {
      var i;
      var s;
      var o;
      var a;
      if (
        !e.current ||
        !(
          ((s = (i = e.current).checkVisibility) == null
            ? undefined
            : s.call(i)) ?? true
        )
      ) {
        return false;
      }
      const r = Xr(e.current);
      if (r.height === 0 || r.width === 0) {
        if ((a = (o = t.getState()).onError) != null) {
          a.call(o, "004", ve.error004());
        }
      }
      t.setState({
        width: r.width || 500,
        height: r.height || 500,
      });
    };
    if (e.current) {
      n();
      window.addEventListener("resize", n);
      const r = new ResizeObserver(() => n());
      r.observe(e.current);
      return () => {
        window.removeEventListener("resize", n);
        if (r && e.current) {
          r.unobserve(e.current);
        }
      };
    }
  }, []);
}
const yn = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};
const Dp = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress,
});
function Op({
  onPaneContextMenu: e,
  zoomOnScroll: t = true,
  zoomOnPinch: n = true,
  panOnScroll: r = false,
  panOnScrollSpeed: i = 0.5,
  panOnScrollMode: s = We.Free,
  zoomOnDoubleClick: o = true,
  panOnDrag: a = true,
  defaultViewport: l,
  translateExtent: d,
  minZoom: u,
  maxZoom: c,
  zoomActivationKeyCode: f,
  preventScrolling: h = true,
  children: p,
  noWheelClassName: v,
  noPanClassName: m,
  onViewportChange: y,
  isControlledViewport: x,
  paneClickDistance: g,
  selectionOnDrag: w,
}) {
  const C = oe();
  const N = z.useRef(null);
  const {
    userSelectionActive: M,
    lib: b,
    connectionInProgress: S,
  } = ee(Dp, ie);
  const I = Ct(f);
  const E = z.useRef();
  $p(N);
  const k = z.useCallback(
    (O) => {
      if (y != null) {
        y({
          x: O[0],
          y: O[1],
          zoom: O[2],
        });
      }
      if (!x) {
        C.setState({
          transform: O,
        });
      }
    },
    [y, x],
  );
  z.useEffect(() => {
    if (N.current) {
      E.current = Wh({
        domNode: N.current,
        minZoom: u,
        maxZoom: c,
        translateExtent: d,
        viewport: l,
        onDraggingChange: (A) =>
          C.setState((D) =>
            D.paneDragging === A
              ? D
              : {
                  paneDragging: A,
                },
          ),
        onPanZoomStart: (A, D) => {
          const { onViewportChangeStart: V, onMoveStart: $ } = C.getState();
          if ($ != null) {
            $(A, D);
          }
          if (V != null) {
            V(D);
          }
        },
        onPanZoom: (A, D) => {
          const { onViewportChange: V, onMove: $ } = C.getState();
          if ($ != null) {
            $(A, D);
          }
          if (V != null) {
            V(D);
          }
        },
        onPanZoomEnd: (A, D) => {
          const { onViewportChangeEnd: V, onMoveEnd: $ } = C.getState();
          if ($ != null) {
            $(A, D);
          }
          if (V != null) {
            V(D);
          }
        },
      });
      const { x: O, y: _, zoom: T } = E.current.getViewport();
      C.setState({
        panZoom: E.current,
        transform: [O, _, T],
        domNode: N.current.closest(".react-flow"),
      });
      return () => {
        var A;
        if ((A = E.current) != null) {
          A.destroy();
        }
      };
    }
  }, []);
  z.useEffect(() => {
    var O;
    if ((O = E.current) != null) {
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
    }
  }, [e, t, n, r, i, s, o, a, I, h, m, M, v, b, k, S, w, g]);
  return (
    <div className="react-flow__renderer" ref={N} style={yn}>
      {p}
    </div>
  );
}
const jp = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect,
});
function Hp() {
  const { userSelectionActive: e, userSelectionRect: t } = ee(jp, ie);
  if (e && t) {
    return (
      <div
        className="react-flow__selection react-flow__container"
        style={{
          width: t.width,
          height: t.height,
          transform: `translate(${t.x}px, ${t.y}px)`,
        }}
      />
    );
  } else {
    return null;
  }
}
const Mn = (e, t) => (n) => {
  if (n.target === t.current) {
    if (e != null) {
      e(n);
    }
  }
};
const zp = (e) => ({
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
  const m = z.useRef(0);
  const y = oe();
  const {
    userSelectionActive: x,
    elementsSelectable: g,
    dragging: w,
    connectionInProgress: C,
    panBy: N,
    autoPanSpeed: M,
  } = ee(zp, ie);
  const b = g && (e || x);
  const S = z.useRef(null);
  const I = z.useRef();
  const E = z.useRef(new Set());
  const k = z.useRef(new Set());
  const O = z.useRef(false);
  const _ = z.useRef({
    x: 0,
    y: 0,
  });
  const T = z.useRef(false);
  const A = (H) => {
    if (O.current || C) {
      O.current = false;
      return;
    }
    if (d != null) {
      d(H);
    }
    y.getState().resetSelectedElements();
    y.setState({
      nodesSelectionActive: false,
    });
  };
  const D = (H) => {
    if (Array.isArray(r) && r != null && r.includes(2)) {
      H.preventDefault();
      return;
    }
    if (u != null) {
      u(H);
    }
  };
  const V = c ? (H) => c(H) : undefined;
  const $ = (H) => {
    if (O.current) {
      H.stopPropagation();
      O.current = false;
    }
  };
  const B = (H) => {
    var se;
    var he;
    const { domNode: Y, transform: K } = y.getState();
    I.current = Y == null ? undefined : Y.getBoundingClientRect();
    if (!I.current) {
      return;
    }
    const Q = H.target === S.current;
    if (
      (!Q && !!H.target.closest(".nokey")) ||
      !e ||
      ((!o || !Q) && !t) ||
      H.button !== 0 ||
      !H.isPrimary
    ) {
      return;
    }
    if (
      (he = (se = H.target) == null ? undefined : se.setPointerCapture) != null
    ) {
      he.call(se, H.pointerId);
    }
    O.current = false;
    const { x: J, y: te } = we(H.nativeEvent, I.current);
    const ne = ut(
      {
        x: J,
        y: te,
      },
      K,
    );
    y.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: ne.x,
        startY: ne.y,
        x: J,
        y: te,
      },
    });
    if (!Q) {
      H.stopPropagation();
      H.preventDefault();
    }
  };
  function q(H, Y) {
    const { userSelectionRect: K } = y.getState();
    if (!K) {
      return;
    }
    const {
      transform: Q,
      nodeLookup: U,
      edgeLookup: X,
      connectionLookup: J,
      triggerNodeChanges: te,
      triggerEdgeChanges: ne,
      defaultEdgeOptions: se,
    } = y.getState();
    const he = {
      x: K.startX,
      y: K.startY,
    };
    const { x: Ee, y: Se } = ct(he, Q);
    const Me = {
      startX: he.x,
      startY: he.y,
      x: H < Ee ? H : Ee,
      y: Y < Se ? Y : Se,
      width: Math.abs(H - Ee),
      height: Math.abs(Y - Se),
    };
    const dt = E.current;
    const He = k.current;
    E.current = new Set(
      Wr(U, Me, Q, n === Et.Partial, true).map((ge) => ge.id),
    );
    k.current = new Set();
    const ze = (se == null ? undefined : se.selectable) ?? true;
    for (const ge of E.current) {
      const Ie = J.get(ge);
      if (Ie) {
        for (const { edgeId: Pe } of Ie.values()) {
          const Ve = X.get(Pe);
          if (Ve && (Ve.selectable ?? ze)) {
            k.current.add(Pe);
          }
        }
      }
    }
    if (!Li(dt, E.current)) {
      const ge = Je(U, E.current, true);
      te(ge);
    }
    if (!Li(He, k.current)) {
      const ge = Je(X, k.current);
      ne(ge);
    }
    y.setState({
      userSelectionRect: Me,
      userSelectionActive: true,
      nodesSelectionActive: false,
    });
  }
  function F() {
    if (!i || !I.current) {
      return;
    }
    const [H, Y] = Yr(_.current, I.current, M);
    N({
      x: H,
      y: Y,
    }).then((K) => {
      if (!O.current || !K) {
        m.current = requestAnimationFrame(F);
        return;
      }
      const { x: Q, y: U } = _.current;
      q(Q, U);
      m.current = requestAnimationFrame(F);
    });
  }
  const P = () => {
    cancelAnimationFrame(m.current);
    m.current = 0;
    T.current = false;
  };
  z.useEffect(() => () => P(), []);
  const L = (H) => {
    const {
      userSelectionRect: Y,
      transform: K,
      resetSelectedElements: Q,
    } = y.getState();
    if (!I.current || !Y) {
      return;
    }
    const { x: U, y: X } = we(H.nativeEvent, I.current);
    _.current = {
      x: U,
      y: X,
    };
    const J = ct(
      {
        x: Y.startX,
        y: Y.startY,
      },
      K,
    );
    if (!O.current) {
      const te = t ? 0 : s;
      if (Math.hypot(U - J.x, X - J.y) <= te) {
        return;
      }
      Q();
      if (a != null) {
        a(H);
      }
    }
    O.current = true;
    if (!T.current) {
      F();
      T.current = true;
    }
    q(U, X);
  };
  const j = (H) => {
    var Y;
    var K;
    if (H.button === 0) {
      if (
        (K = (Y = H.target) == null ? undefined : Y.releasePointerCapture) !=
        null
      ) {
        K.call(Y, H.pointerId);
      }
      if (!x && H.target === S.current && y.getState().userSelectionRect) {
        if (A != null) {
          A(H);
        }
      }
      y.setState({
        userSelectionActive: false,
        userSelectionRect: null,
      });
      if (O.current) {
        if (l != null) {
          l(H);
        }
        y.setState({
          nodesSelectionActive: E.current.size > 0,
        });
      }
      P();
    }
  };
  const W = (H) => {
    var Y;
    var K;
    if (
      (K = (Y = H.target) == null ? undefined : Y.releasePointerCapture) != null
    ) {
      K.call(Y, H.pointerId);
    }
    P();
  };
  const G = r === true || (Array.isArray(r) && r.includes(0));
  return (
    <div
      className={le([
        "react-flow__pane",
        {
          draggable: G,
          dragging: w,
          selection: e,
        },
      ])}
      onClick={b ? undefined : Mn(A, S)}
      onContextMenu={Mn(D, S)}
      onWheel={Mn(V, S)}
      onPointerEnter={b ? undefined : f}
      onPointerMove={b ? L : h}
      onPointerUp={b ? j : undefined}
      onPointerCancel={b ? W : undefined}
      onPointerDownCapture={b ? B : undefined}
      onClickCapture={b ? $ : undefined}
      onPointerLeave={p}
      ref={S}
      style={yn}
    >
      {v}
      <Hp />
    </div>
  );
}
function Dr({ id: e, store: t, unselect: n = false, nodeRef: r }) {
  const {
    addSelectedNodes: i,
    unselectNodesAndEdges: s,
    multiSelectionActive: o,
    nodeLookup: a,
    onError: l,
  } = t.getState();
  const d = a.get(e);
  if (!d) {
    if (l != null) {
      l("012", ve.error012(e));
    }
    return;
  }
  t.setState({
    nodesSelectionActive: false,
  });
  if (d.selected) {
    if (n || (d.selected && o)) {
      s({
        nodes: [d],
        edges: [],
      });
      requestAnimationFrame(() => {
        var u;
        if ((u = r == null ? undefined : r.current) == null) {
          return undefined;
        } else {
          return u.blur();
        }
      });
    }
  } else {
    i([e]);
  }
}
function Na({
  nodeRef: e,
  disabled: t = false,
  noDragClassName: n,
  handleSelector: r,
  nodeId: i,
  isSelectable: s,
  nodeClickDistance: o,
}) {
  const a = oe();
  const [l, d] = z.useState(false);
  const u = z.useRef();
  z.useEffect(() => {
    u.current = Ah({
      getStoreItems: () => a.getState(),
      onNodeMouseDown: (c) => {
        Dr({
          id: c,
          store: a,
          nodeRef: e,
        });
      },
      onDragStart: () => {
        d(true);
      },
      onDragStop: () => {
        d(false);
      },
    });
  }, []);
  z.useEffect(() => {
    if (!t && !!e.current && !!u.current) {
      u.current.update({
        noDragClassName: n,
        handleSelector: r,
        domNode: e.current,
        isSelectable: s,
        nodeId: i,
        nodeClickDistance: o,
      });
      return () => {
        var c;
        if ((c = u.current) != null) {
          c.destroy();
        }
      };
    }
  }, [n, r, t, s, e, i, o]);
  return l;
}
const Fp = (e) => (t) =>
  t.selected && (t.draggable || (e && typeof t.draggable === "undefined"));
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
    } = e.getState();
    const c = new Map();
    const f = Fp(o);
    const h = i ? s[0] : 5;
    const p = i ? s[1] : 5;
    const v = n.direction.x * h * n.factor;
    const m = n.direction.y * p * n.factor;
    for (const [, y] of d) {
      if (!f(y)) {
        continue;
      }
      let x = {
        x: y.internals.positionAbsolute.x + v,
        y: y.internals.positionAbsolute.y + m,
      };
      if (i) {
        x = At(x, s);
      }
      const { position: g, positionAbsolute: w } = Gs({
        nodeId: y.id,
        nextPosition: x,
        nodeLookup: d,
        nodeExtent: r,
        nodeOrigin: u,
        onError: a,
      });
      y.position = g;
      y.internals.positionAbsolute = w;
      c.set(y.id, y);
    }
    l(c);
  }, []);
}
const ti = z.createContext(null);
const Bp = ti.Provider;
ti.Consumer;
const ka = () => z.useContext(ti);
const qp = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId,
});
const Wp = (e, t, n) => (r) => {
  const { connectionClickStartHandle: i, connectionMode: s, connection: o } = r;
  const { fromHandle: a, toHandle: l, isValid: d } = o;
  const u =
    (l == null ? undefined : l.nodeId) === e &&
    (l == null ? undefined : l.id) === t &&
    (l == null ? undefined : l.type) === n;
  return {
    connectingFrom:
      (a == null ? undefined : a.nodeId) === e &&
      (a == null ? undefined : a.id) === t &&
      (a == null ? undefined : a.type) === n,
    connectingTo: u,
    clickConnecting:
      (i == null ? undefined : i.nodeId) === e &&
      (i == null ? undefined : i.id) === t &&
      (i == null ? undefined : i.type) === n,
    isPossibleEndHandle:
      s === ot.Strict
        ? (a == null ? undefined : a.type) !== n
        : e !== (a == null ? undefined : a.nodeId) ||
          t !== (a == null ? undefined : a.id),
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
    isConnectable: r = true,
    isConnectableStart: i = true,
    isConnectableEnd: s = true,
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
  var T;
  var A;
  const p = o || null;
  const v = e === "target";
  const m = oe();
  const y = ka();
  const { connectOnClick: x, noPanClassName: g, rfId: w } = ee(qp, ie);
  const {
    connectingFrom: C,
    connectingTo: N,
    clickConnecting: M,
    isPossibleEndHandle: b,
    connectionInProcess: S,
    clickConnectionInProcess: I,
    valid: E,
  } = ee(Wp(y, p, e), ie);
  if (!y && (A = (T = m.getState()).onError) != null) {
    A.call(T, "010", ve.error010());
  }
  const k = (D) => {
    const {
      defaultEdgeOptions: V,
      onConnect: $,
      hasDefaultEdges: B,
    } = m.getState();
    const q = {
      ...V,
      ...D,
    };
    if (B) {
      const { edges: F, setEdges: P, onError: L } = m.getState();
      P(
        Cp(q, F, {
          onError: L,
        }),
      );
    }
    if ($ != null) {
      $(q);
    }
    if (a != null) {
      a(q);
    }
  };
  const O = (D) => {
    if (!y) {
      return;
    }
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
          var q;
          var F;
          if ((F = (q = m.getState()).onConnectEnd) == null) {
            return undefined;
          } else {
            return F.call(q, ...B);
          }
        },
        updateConnection: $.updateConnection,
        onConnect: k,
        isValidConnection:
          n ||
          ((...B) => {
            var q;
            var F;
            return (
              ((F = (q = m.getState()).isValidConnection) == null
                ? undefined
                : F.call(q, ...B)) ?? true
            );
          }),
        getTransform: () => m.getState().transform,
        getFromHandle: () => m.getState().connection.fromHandle,
        autoPanSpeed: $.autoPanSpeed,
        dragThreshold: $.connectionDragThreshold,
      });
    }
    if (V) {
      if (u != null) {
        u(D);
      }
    } else if (c != null) {
      c(D);
    }
  };
  const _ = (D) => {
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
    if (!y || (!B && !i)) {
      return;
    }
    if (!B) {
      if (V != null) {
        V(D.nativeEvent, {
          nodeId: y,
          handleId: p,
          handleType: e,
        });
      }
      m.setState({
        connectionClickStartHandle: {
          nodeId: y,
          type: e,
          id: p,
        },
      });
      return;
    }
    const G = Js(D.target);
    const H = n || F;
    const { connection: Y, isValid: K } = $r.isValid(D.nativeEvent, {
      handle: {
        nodeId: y,
        id: p,
        type: e,
      },
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
    if (K && Y) {
      k(Y);
    }
    const Q = structuredClone(W);
    delete Q.inProgress;
    Q.toPosition = Q.toHandle ? Q.toHandle.position : null;
    if ($ != null) {
      $(D, Q);
    }
    m.setState({
      connectionClickStartHandle: null,
    });
  };
  return (
    <div
      data-handleid={p}
      data-nodeid={y}
      data-handlepos={t}
      data-id={`${w}-${y}-${p}-${e}`}
      className={le([
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
      ])}
      onMouseDown={O}
      onTouchStart={O}
      onClick={x ? _ : undefined}
      ref={h}
      {...f}
    >
      {l}
    </div>
  );
}
const _Component4 = z.memo(Ea(Yp));
function Gp({ data: e, isConnectable: t, sourcePosition: n = Z.Bottom }) {
  return (
    <R.Fragment>
      {e == null ? undefined : e.label}
      <_Component4 type="source" position={n} isConnectable={t} />
    </R.Fragment>
  );
}
function Xp({
  data: e,
  isConnectable: t,
  targetPosition: n = Z.Top,
  sourcePosition: r = Z.Bottom,
}) {
  return (
    <R.Fragment>
      <_Component4 type="target" position={n} isConnectable={t} />
      {e == null ? undefined : e.label}
      <_Component4 type="source" position={r} isConnectable={t} />
    </R.Fragment>
  );
}
function Up() {
  return null;
}
function Kp({ data: e, isConnectable: t, targetPosition: n = Z.Top }) {
  return (
    <R.Fragment>
      <_Component4 type="target" position={n} isConnectable={t} />
      {e == null ? undefined : e.label}
    </R.Fragment>
  );
}
const on = {
  ArrowUp: {
    x: 0,
    y: -1,
  },
  ArrowDown: {
    x: 0,
    y: 1,
  },
  ArrowLeft: {
    x: -1,
    y: 0,
  },
  ArrowRight: {
    x: 1,
    y: 0,
  },
};
const so = {
  input: Gp,
  default: Xp,
  output: Kp,
  group: Up,
};
function Zp(e) {
  var t;
  var n;
  var r;
  var i;
  if (e.internals.handleBounds === undefined) {
    return {
      width:
        e.width ??
        e.initialWidth ??
        ((t = e.style) == null ? undefined : t.width),
      height:
        e.height ??
        e.initialHeight ??
        ((n = e.style) == null ? undefined : n.height),
    };
  } else {
    return {
      width: e.width ?? ((r = e.style) == null ? undefined : r.width),
      height: e.height ?? ((i = e.style) == null ? undefined : i.height),
    };
  }
}
const Qp = (e) => {
  const {
    width: t,
    height: n,
    x: r,
    y: i,
  } = Pt(e.nodeLookup, {
    filter: (s) => !!s.selected,
  });
  return {
    width: xe(t) ? t : null,
    height: xe(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${i}px)`,
  };
};
function Jp({
  onSelectionContextMenu: e,
  noPanClassName: t,
  disableKeyboardA11y: n,
}) {
  const r = oe();
  const {
    width: i,
    height: s,
    transformString: o,
    userSelectionActive: a,
  } = ee(Qp, ie);
  const l = Ca();
  const d = z.useRef(null);
  z.useEffect(() => {
    var h;
    if (!n && (h = d.current) != null) {
      h.focus({
        preventScroll: true,
      });
    }
  }, [n]);
  const u = !a && i !== null && s !== null;
  Na({
    nodeRef: d,
    disabled: !u,
  });
  if (!u) {
    return null;
  }
  const c = e
    ? (h) => {
        const p = r.getState().nodes.filter((v) => v.selected);
        e(h, p);
      }
    : undefined;
  const f = (h) => {
    if (Object.prototype.hasOwnProperty.call(on, h.key)) {
      h.preventDefault();
      l({
        direction: on[h.key],
        factor: h.shiftKey ? 4 : 1,
      });
    }
  };
  return (
    <div
      className={le(["react-flow__nodesselection", "react-flow__container", t])}
      style={{
        transform: o,
      }}
    >
      <div
        ref={d}
        className="react-flow__nodesselection-rect"
        onContextMenu={c}
        tabIndex={n ? undefined : -1}
        onKeyDown={n ? undefined : f}
        style={{
          width: i,
          height: s,
        }}
      />
    </div>
  );
}
const ao = typeof window !== "undefined" ? window : undefined;
const eg = (e) => ({
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
  const { nodesSelectionActive: q, userSelectionActive: F } = ee(eg, ie);
  const P = Ct(d, {
    target: ao,
  });
  const L = Ct(v, {
    target: ao,
  });
  const j = L || b;
  const W = L || w;
  const G = u && j !== true;
  const H = P || F || G;
  Lp({
    deleteKeyCode: l,
    multiSelectionKeyCode: p,
  });
  return (
    <Op
      onPaneContextMenu={s}
      elementsSelectable={y}
      zoomOnScroll={x}
      zoomOnPinch={g}
      panOnScroll={W}
      panOnScrollSpeed={C}
      panOnScrollMode={N}
      zoomOnDoubleClick={M}
      panOnDrag={!P && j}
      defaultViewport={I}
      translateExtent={E}
      minZoom={k}
      maxZoom={O}
      zoomActivationKeyCode={m}
      preventScrolling={_}
      noWheelClassName={A}
      noPanClassName={D}
      onViewportChange={$}
      isControlledViewport={B}
      paneClickDistance={a}
      selectionOnDrag={G}
    >
      <Vp
        onSelectionStart={f}
        onSelectionEnd={h}
        onPaneClick={t}
        onPaneMouseEnter={n}
        onPaneMouseMove={r}
        onPaneMouseLeave={i}
        onPaneContextMenu={s}
        onPaneScroll={o}
        panOnDrag={j}
        autoPanOnSelection={S}
        isSelecting={!!H}
        selectionMode={c}
        selectionKeyPressed={P}
        paneClickDistance={a}
        selectionOnDrag={G}
      >
        {e}
        {q && (
          <Jp
            onSelectionContextMenu={T}
            noPanClassName={D}
            disableKeyboardA11y={V}
          />
        )}
      </Vp>
    </Op>
  );
}
Ma.displayName = "FlowRenderer";
const _Component13 = z.memo(Ma);
const ng = (e) => (t) =>
  e
    ? Wr(
        t.nodeLookup,
        {
          x: 0,
          y: 0,
          width: t.width,
          height: t.height,
        },
        t.transform,
        true,
      ).map((n) => n.id)
    : Array.from(t.nodeLookup.keys());
function rg(e) {
  return ee(z.useCallback(ng(e), [e]), ie);
}
const ig = (e) => e.updateNodeInternals;
function og() {
  const e = ee(ig);
  const [t] = z.useState(() =>
    typeof ResizeObserver === "undefined"
      ? null
      : new ResizeObserver((n) => {
          const r = new Map();
          n.forEach((i) => {
            const s = i.target.getAttribute("data-id");
            r.set(s, {
              id: s,
              nodeElement: i.target,
              force: true,
            });
          });
          e(r);
        }),
  );
  z.useEffect(
    () => () => {
      if (t != null) {
        t.disconnect();
      }
    },
    [t],
  );
  return t;
}
function sg({ node: e, nodeType: t, hasDimensions: n, resizeObserver: r }) {
  const i = oe();
  const s = z.useRef(null);
  const o = z.useRef(null);
  const a = z.useRef(e.sourcePosition);
  const l = z.useRef(e.targetPosition);
  const d = z.useRef(t);
  const u = n && !!e.internals.handleBounds;
  z.useEffect(() => {
    if (s.current && !e.hidden && (!u || o.current !== s.current)) {
      if (o.current) {
        if (r != null) {
          r.unobserve(o.current);
        }
      }
      if (r != null) {
        r.observe(s.current);
      }
      o.current = s.current;
    }
  }, [u, e.hidden]);
  z.useEffect(
    () => () => {
      if (o.current) {
        if (r != null) {
          r.unobserve(o.current);
        }
        o.current = null;
      }
    },
    [],
  );
  z.useEffect(() => {
    if (s.current) {
      const c = d.current !== t;
      const f = a.current !== e.sourcePosition;
      const h = l.current !== e.targetPosition;
      if (c || f || h) {
        d.current = t;
        a.current = e.sourcePosition;
        l.current = e.targetPosition;
        i.getState().updateNodeInternals(
          new Map([
            [
              e.id,
              {
                id: e.id,
                nodeElement: s.current,
                force: true,
              },
            ],
          ]),
        );
      }
    }
  }, [e.id, t, e.sourcePosition, e.targetPosition]);
  return s;
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
    const Y = H.nodeLookup.get(e);
    const K = H.parentLookup.has(e);
    return {
      node: Y,
      internals: Y.internals,
      isParent: K,
    };
  }, ie);
  let N = g.type || "default";
  let M = (m == null ? undefined : m[N]) || so[N];
  if (M === undefined) {
    if (x != null) {
      x("003", ve.error003(N));
    }
    N = "default";
    M = (m == null ? undefined : m.default) || so.default;
  }
  const b = !!g.draggable || (!!a && typeof g.draggable === "undefined");
  const S = !!g.selectable || (!!l && typeof g.selectable === "undefined");
  const I = !!g.connectable || (!!d && typeof g.connectable === "undefined");
  const E = !!g.focusable || (!!u && typeof g.focusable === "undefined");
  const k = oe();
  const O = Zs(g);
  const _ = sg({
    node: g,
    nodeType: N,
    hasDimensions: O,
    resizeObserver: c,
  });
  const T = Na({
    nodeRef: _,
    disabled: g.hidden || !b,
    noDragClassName: f,
    handleSelector: g.dragHandle,
    nodeId: e,
    isSelectable: S,
    nodeClickDistance: y,
  });
  const A = Ca();
  if (g.hidden) {
    return null;
  }
  const D = Le(g);
  const V = Zp(g);
  const $ = S || b || t || n || r || i;
  const B = n
    ? (H) =>
        n(H, {
          ...w.userNode,
        })
    : undefined;
  const q = r
    ? (H) =>
        r(H, {
          ...w.userNode,
        })
    : undefined;
  const F = i
    ? (H) =>
        i(H, {
          ...w.userNode,
        })
    : undefined;
  const P = s
    ? (H) =>
        s(H, {
          ...w.userNode,
        })
    : undefined;
  const L = o
    ? (H) =>
        o(H, {
          ...w.userNode,
        })
    : undefined;
  const j = (H) => {
    const { selectNodesOnDrag: Y, nodeDragThreshold: K } = k.getState();
    if (S && (!Y || !b || K > 0)) {
      Dr({
        id: e,
        store: k,
        nodeRef: _,
      });
    }
    if (t) {
      t(H, {
        ...w.userNode,
      });
    }
  };
  const W = (H) => {
    if (!ea(H.nativeEvent) && !p) {
      if (Fs.includes(H.key) && S) {
        const Y = H.key === "Escape";
        Dr({
          id: e,
          store: k,
          unselect: Y,
          nodeRef: _,
        });
      } else if (
        b &&
        g.selected &&
        Object.prototype.hasOwnProperty.call(on, H.key)
      ) {
        H.preventDefault();
        const { ariaLabelConfig: Y } = k.getState();
        k.setState({
          ariaLiveMessage: Y["node.a11yDescription.ariaLiveMessage"]({
            direction: H.key.replace("Arrow", "").toLowerCase(),
            x: ~~w.positionAbsolute.x,
            y: ~~w.positionAbsolute.y,
          }),
        });
        A({
          direction: on[H.key],
          factor: H.shiftKey ? 4 : 1,
        });
      }
    }
  };
  const G = () => {
    var J;
    if (p || (J = _.current) == null || !J.matches(":focus-visible")) {
      return;
    }
    const {
      transform: H,
      width: Y,
      height: K,
      autoPanOnNodeFocus: Q,
      setCenter: U,
    } = k.getState();
    if (!Q) {
      return;
    }
    if (
      !(
        Wr(
          new Map([[e, g]]),
          {
            x: 0,
            y: 0,
            width: Y,
            height: K,
          },
          H,
          true,
        ).length > 0
      )
    ) {
      U(g.position.x + D.width / 2, g.position.y + D.height / 2, {
        zoom: H[2],
      });
    }
  };
  return (
    <div
      className={le([
        "react-flow__node",
        `react-flow__node-${N}`,
        {
          [h]: b,
        },
        g.className,
        {
          selected: g.selected,
          selectable: S,
          parent: C,
          draggable: b,
          dragging: T,
        },
      ])}
      ref={_}
      style={{
        zIndex: w.z,
        transform: `translate(${w.positionAbsolute.x}px,${w.positionAbsolute.y}px)`,
        pointerEvents: $ ? "all" : "none",
        visibility: O ? "visible" : "hidden",
        ...g.style,
        ...V,
      }}
      data-id={e}
      data-testid={`rf__node-${e}`}
      onMouseEnter={B}
      onMouseMove={q}
      onMouseLeave={F}
      onContextMenu={P}
      onClick={j}
      onDoubleClick={L}
      onKeyDown={E ? W : undefined}
      tabIndex={E ? 0 : undefined}
      onFocus={E ? G : undefined}
      role={g.ariaRole ?? (E ? "group" : undefined)}
      aria-roledescription="node"
      aria-describedby={p ? undefined : `${wa}-${v}`}
      aria-label={g.ariaLabel}
      {...g.domAttributes}
    >
      <Bp value={e}>
        <M
          id={e}
          data={g.data}
          type={N}
          positionAbsoluteX={w.positionAbsolute.x}
          positionAbsoluteY={w.positionAbsolute.y}
          selected={g.selected ?? false}
          selectable={S}
          draggable={b}
          deletable={g.deletable ?? true}
          isConnectable={I}
          sourcePosition={g.sourcePosition}
          targetPosition={g.targetPosition}
          dragging={T}
          dragHandle={g.dragHandle}
          zIndex={w.z}
          parentId={g.parentId}
          {...D}
        />
      </Bp>
    </div>
  );
}
var _Component5 = z.memo(ag);
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
  } = ee(lg, ie);
  const o = rg(e.onlyRenderVisibleElements);
  const a = og();
  return (
    <div className="react-flow__nodes" style={yn}>
      {o.map((l) => (
        <_Component5
          id={l}
          nodeTypes={e.nodeTypes}
          nodeExtent={e.nodeExtent}
          onClick={e.onNodeClick}
          onMouseEnter={e.onNodeMouseEnter}
          onMouseMove={e.onNodeMouseMove}
          onMouseLeave={e.onNodeMouseLeave}
          onContextMenu={e.onNodeContextMenu}
          onDoubleClick={e.onNodeDoubleClick}
          noDragClassName={e.noDragClassName}
          noPanClassName={e.noPanClassName}
          rfId={e.rfId}
          disableKeyboardA11y={e.disableKeyboardA11y}
          resizeObserver={a}
          nodesDraggable={t}
          nodesConnectable={n}
          nodesFocusable={r}
          elementsSelectable={i}
          nodeClickDistance={e.nodeClickDistance}
          onError={s}
          key={l}
        />
      ))}
    </div>
  );
}
Ia.displayName = "NodeRenderer";
const _Component12 = z.memo(Ia);
function dg(e) {
  return ee(
    z.useCallback(
      (n) => {
        if (!e) {
          return n.edges.map((i) => i.id);
        }
        const r = [];
        if (n.width && n.height) {
          for (const i of n.edges) {
            const s = n.nodeLookup.get(i.source);
            const o = n.nodeLookup.get(i.target);
            if (
              s &&
              o &&
              fh({
                sourceNode: s,
                targetNode: o,
                width: n.width,
                height: n.height,
                transform: n.transform,
              })
            ) {
              r.push(i.id);
            }
          }
        }
        return r;
      },
      [e],
    ),
    ie,
  );
}
const fg = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...(e && {
      stroke: e,
    }),
  };
  return (
    <polyline
      className="arrow"
      style={n}
      strokeLinecap="round"
      fill="none"
      strokeLinejoin="round"
      points="-5,-4 0,0 -5,4"
    />
  );
};
const hg = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...(e && {
      stroke: e,
      fill: e,
    }),
  };
  return (
    <polyline
      className="arrowclosed"
      style={n}
      strokeLinecap="round"
      strokeLinejoin="round"
      points="-5,-4 0,0 -5,4 -5,-4"
    />
  );
};
const co = {
  [tn.Arrow]: fg,
  [tn.ArrowClosed]: hg,
};
function pg(e) {
  const t = oe();
  return z.useMemo(() => {
    var i;
    var s;
    if (Object.prototype.hasOwnProperty.call(co, e)) {
      return co[e];
    } else {
      if ((s = (i = t.getState()).onError) != null) {
        s.call(i, "009", ve.error009(e));
      }
      return null;
    }
  }, [e]);
}
const _Component7 = ({
  id: e,
  type: t,
  color: n,
  width: r = 12.5,
  height: i = 12.5,
  markerUnits: s = "strokeWidth",
  strokeWidth: o,
  orient: a = "auto-start-reverse",
}) => {
  const _Component6 = pg(t);
  if (_Component6) {
    return (
      <marker
        className="react-flow__arrowhead"
        id={e}
        markerWidth={`${r}`}
        markerHeight={`${i}`}
        viewBox="-10 -10 20 20"
        markerUnits={s}
        orient={a}
        refX="0"
        refY="0"
      >
        <_Component6 color={n} strokeWidth={o} />
      </marker>
    );
  } else {
    return null;
  }
};
const Pa = ({ defaultColor: e, rfId: t }) => {
  const n = ee((s) => s.edges);
  const r = ee((s) => s.defaultEdgeOptions);
  const i = z.useMemo(
    () =>
      vh(n, {
        id: t,
        defaultColor: e,
        defaultMarkerStart: r == null ? undefined : r.markerStart,
        defaultMarkerEnd: r == null ? undefined : r.markerEnd,
      }),
    [n, r, t, e],
  );
  if (i.length) {
    return (
      <svg className="react-flow__marker" aria-hidden="true">
        <defs>
          {i.map((s) => (
            <_Component7
              id={s.id}
              type={s.type}
              color={s.color}
              width={s.width}
              height={s.height}
              markerUnits={s.markerUnits}
              strokeWidth={s.strokeWidth}
              orient={s.orient}
              key={s.id}
            />
          ))}
        </defs>
      </svg>
    );
  } else {
    return null;
  }
};
Pa.displayName = "MarkerDefinitions";
var _Component1 = z.memo(Pa);
function Aa({
  x: e,
  y: t,
  label: n,
  labelStyle: r,
  labelShowBg: i = true,
  labelBgStyle: s,
  labelBgPadding: o = [2, 4],
  labelBgBorderRadius: a = 2,
  children: l,
  className: d,
  ...u
}) {
  const [c, f] = z.useState({
    x: 1,
    y: 0,
    width: 0,
    height: 0,
  });
  const h = le(["react-flow__edge-textwrapper", d]);
  const p = z.useRef(null);
  z.useEffect(() => {
    if (p.current) {
      const v = p.current.getBBox();
      f({
        x: v.x,
        y: v.y,
        width: v.width,
        height: v.height,
      });
    }
  }, [n]);
  if (n) {
    return (
      <g
        transform={`translate(${e - c.width / 2} ${t - c.height / 2})`}
        className={h}
        visibility={c.width ? "visible" : "hidden"}
        {...u}
      >
        {i && (
          <rect
            width={c.width + o[0] * 2}
            x={-o[0]}
            y={-o[1]}
            height={c.height + o[1] * 2}
            className="react-flow__edge-textbg"
            style={s}
            rx={a}
            ry={a}
          />
        )}
        <text
          className="react-flow__edge-text"
          y={c.height / 2}
          dy="0.3em"
          ref={p}
          style={r}
        >
          {n}
        </text>
        {l}
      </g>
    );
  } else {
    return null;
  }
}
Aa.displayName = "EdgeText";
const _Component8 = z.memo(Aa);
function _Component9({
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
  return (
    <R.Fragment>
      <path
        {...u}
        d={e}
        fill="none"
        className={le(["react-flow__edge-path", u.className])}
      />
      {d ? (
        <path
          d={e}
          fill="none"
          strokeOpacity={0}
          strokeWidth={d}
          className="react-flow__edge-interaction"
        />
      ) : null}
      {r && xe(t) && xe(n) ? (
        <_Component8
          x={t}
          y={n}
          label={r}
          labelStyle={i}
          labelShowBg={s}
          labelBgStyle={o}
          labelBgPadding={a}
          labelBgBorderRadius={l}
        />
      ) : null}
    </R.Fragment>
  );
}
function lo({ pos: e, x1: t, y1: n, x2: r, y2: i }) {
  if (e === Z.Left || e === Z.Right) {
    return [(t + r) * 0.5, n];
  } else {
    return [t, (n + i) * 0.5];
  }
}
function Ta({
  sourceX: e,
  sourceY: t,
  sourcePosition: n = Z.Bottom,
  targetX: r,
  targetY: i,
  targetPosition: s = Z.Top,
}) {
  const [o, a] = lo({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: i,
  });
  const [l, d] = lo({
    pos: s,
    x1: r,
    y1: i,
    x2: e,
    y2: t,
  });
  const [u, c, f, h] = na({
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
      });
      const C = e.isInternal ? undefined : t;
      return (
        <_Component9
          id={C}
          path={x}
          labelX={g}
          labelY={w}
          label={l}
          labelStyle={d}
          labelShowBg={u}
          labelBgStyle={c}
          labelBgPadding={f}
          labelBgBorderRadius={h}
          style={p}
          markerEnd={v}
          markerStart={m}
          interactionWidth={y}
        />
      );
    },
  );
}
const xg = Ra({
  isInternal: false,
});
const La = Ra({
  isInternal: true,
});
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
        borderRadius: y == null ? undefined : y.borderRadius,
        offset: y == null ? undefined : y.offset,
        stepPosition: y == null ? undefined : y.stepPosition,
      });
      const N = e.isInternal ? undefined : t;
      return (
        <_Component9
          id={N}
          path={g}
          labelX={w}
          labelY={C}
          label={o}
          labelStyle={a}
          labelShowBg={l}
          labelBgStyle={d}
          labelBgPadding={u}
          labelBgBorderRadius={c}
          style={f}
          markerEnd={v}
          markerStart={m}
          interactionWidth={x}
        />
      );
    },
  );
}
const Da = $a({
  isInternal: false,
});
const Oa = $a({
  isInternal: true,
});
Da.displayName = "SmoothStepEdge";
Oa.displayName = "SmoothStepEdgeInternal";
function ja(e) {
  return z.memo(({ id: t, ...n }) => {
    var i;
    const r = e.isInternal ? undefined : t;
    return (
      <Da
        {...n}
        id={r}
        pathOptions={z.useMemo(() => {
          var s;
          return {
            borderRadius: 0,
            offset: (s = n.pathOptions) == null ? undefined : s.offset,
          };
        }, [(i = n.pathOptions) == null ? undefined : i.offset])}
      />
    );
  });
}
const wg = ja({
  isInternal: false,
});
const Ha = ja({
  isInternal: true,
});
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
      const [m, y, x] = oa({
        sourceX: n,
        sourceY: r,
        targetX: i,
        targetY: s,
      });
      const g = e.isInternal ? undefined : t;
      return (
        <_Component9
          id={g}
          path={m}
          labelX={y}
          labelY={x}
          label={o}
          labelStyle={a}
          labelShowBg={l}
          labelBgStyle={d}
          labelBgPadding={u}
          labelBgBorderRadius={c}
          style={f}
          markerEnd={h}
          markerStart={p}
          interactionWidth={v}
        />
      );
    },
  );
}
const vg = za({
  isInternal: false,
});
const Va = za({
  isInternal: true,
});
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
        curvature: y == null ? undefined : y.curvature,
      });
      const N = e.isInternal ? undefined : t;
      return (
        <_Component9
          id={N}
          path={g}
          labelX={w}
          labelY={C}
          label={l}
          labelStyle={d}
          labelShowBg={u}
          labelBgStyle={c}
          labelBgPadding={f}
          labelBgBorderRadius={h}
          style={p}
          markerEnd={v}
          markerStart={m}
          interactionWidth={x}
        />
      );
    },
  );
}
const bg = Fa({
  isInternal: false,
});
const Ba = Fa({
  isInternal: true,
});
bg.displayName = "BezierEdge";
Ba.displayName = "BezierEdgeInternal";
const uo = {
  default: Ba,
  straight: Va,
  step: Ha,
  smoothstep: Oa,
  simplebezier: La,
};
const fo = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null,
};
const _g = (e, t, n) => (n === Z.Left ? e - t : n === Z.Right ? e + t : e);
const Eg = (e, t, n) => (n === Z.Top ? e - t : n === Z.Bottom ? e + t : e);
const ho = "react-flow__edgeupdater";
function _Component0({
  position: e,
  centerX: t,
  centerY: n,
  radius: r = 10,
  onMouseDown: i,
  onMouseEnter: s,
  onMouseOut: o,
  type: a,
}) {
  return (
    <circle
      onMouseDown={i}
      onMouseEnter={s}
      onMouseOut={o}
      className={le([ho, `${ho}-${a}`])}
      cx={_g(t, r, e)}
      cy={Eg(n, r, e)}
      r={r}
      stroke="transparent"
      fill="transparent"
    />
  );
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
  const p = oe();
  const v = (w, C) => {
    if (w.button !== 0) {
      return;
    }
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
    } = p.getState();
    const D = C.type === "target";
    const V = (q, F) => {
      f(false);
      if (c != null) {
        c(q, n, C.type, F);
      }
    };
    const $ = (q) => (d == null ? undefined : d(n, q));
    const B = (q, F) => {
      f(true);
      if (u != null) {
        u(w, n, C.type);
      }
      if (E != null) {
        E(q, F);
      }
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
        var F;
        var P;
        return (
          ((P = (F = p.getState()).isValidConnection) == null
            ? undefined
            : P.call(F, ...q)) ?? true
        );
      },
      onConnect: $,
      onConnectStart: B,
      onConnectEnd: (...q) => {
        var F;
        var P;
        if ((P = (F = p.getState()).onConnectEnd) == null) {
          return undefined;
        } else {
          return P.call(F, ...q);
        }
      },
      onReconnectEnd: V,
      updateConnection: A,
      getTransform: () => p.getState().transform,
      getFromHandle: () => p.getState().connection.fromHandle,
      dragThreshold: p.getState().connectionDragThreshold,
      handleDomNode: w.currentTarget,
    });
  };
  const m = (w) =>
    v(w, {
      nodeId: n.target,
      id: n.targetHandle ?? null,
      type: "target",
    });
  const y = (w) =>
    v(w, {
      nodeId: n.source,
      id: n.sourceHandle ?? null,
      type: "source",
    });
  const x = () => h(true);
  const g = () => h(false);
  return (
    <R.Fragment>
      {(e === true || e === "source") && (
        <_Component0
          position={a}
          centerX={r}
          centerY={i}
          radius={t}
          onMouseDown={m}
          onMouseEnter={x}
          onMouseOut={g}
          type="source"
        />
      )}
      {(e === true || e === "target") && (
        <_Component0
          position={l}
          centerX={s}
          centerY={o}
          radius={t}
          onMouseDown={y}
          onMouseEnter={x}
          onMouseOut={g}
          type="target"
        />
      )}
    </R.Fragment>
  );
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
  g = w
    ? {
        ...w,
        ...g,
      }
    : g;
  let C = g.type || "default";
  let N = (v == null ? undefined : v[C]) || uo[C];
  if (N === undefined) {
    if (y != null) {
      y("011", ve.error011(C));
    }
    C = "default";
    N = (v == null ? undefined : v.default) || uo.default;
  }
  const M = !!g.focusable || (!!t && typeof g.focusable === "undefined");
  const b =
    typeof c !== "undefined" &&
    (g.reconnectable || (n && typeof g.reconnectable === "undefined"));
  const S = !!g.selectable || (!!r && typeof g.selectable === "undefined");
  const I = z.useRef(null);
  const [E, k] = z.useState(false);
  const [O, _] = z.useState(false);
  const T = oe();
  const {
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
        const X = U.nodeLookup.get(g.source);
        const J = U.nodeLookup.get(g.target);
        if (!X || !J) {
          return {
            zIndex: g.zIndex,
            ...fo,
          };
        }
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
      [
        g.source,
        g.target,
        g.sourceHandle,
        g.targetHandle,
        g.selected,
        g.zIndex,
      ],
    ),
    ie,
  );
  const P = z.useMemo(
    () => (g.markerStart ? `url('#${Rr(g.markerStart, p)}')` : undefined),
    [g.markerStart, p],
  );
  const L = z.useMemo(
    () => (g.markerEnd ? `url('#${Rr(g.markerEnd, p)}')` : undefined),
    [g.markerEnd, p],
  );
  if (g.hidden || D === null || V === null || $ === null || B === null) {
    return null;
  }
  const j = (U) => {
    var ne;
    const {
      addSelectedEdges: X,
      unselectNodesAndEdges: J,
      multiSelectionActive: te,
    } = T.getState();
    if (S) {
      T.setState({
        nodesSelectionActive: false,
      });
      if (g.selected && te) {
        J({
          nodes: [],
          edges: [g],
        });
        if ((ne = I.current) != null) {
          ne.blur();
        }
      } else {
        X([e]);
      }
    }
    if (i) {
      i(U, g);
    }
  };
  const W = s
    ? (U) => {
        s(U, {
          ...g,
        });
      }
    : undefined;
  const G = o
    ? (U) => {
        o(U, {
          ...g,
        });
      }
    : undefined;
  const H = a
    ? (U) => {
        a(U, {
          ...g,
        });
      }
    : undefined;
  const Y = l
    ? (U) => {
        l(U, {
          ...g,
        });
      }
    : undefined;
  const K = d
    ? (U) => {
        d(U, {
          ...g,
        });
      }
    : undefined;
  const Q = (U) => {
    var X;
    if (!x && Fs.includes(U.key) && S) {
      const { unselectNodesAndEdges: J, addSelectedEdges: te } = T.getState();
      if (U.key === "Escape") {
        if ((X = I.current) != null) {
          X.blur();
        }
        J({
          edges: [g],
        });
      } else {
        te([e]);
      }
    }
  };
  return (
    <svg
      style={{
        zIndex: A,
      }}
    >
      <g
        className={le([
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
        ])}
        onClick={j}
        onDoubleClick={W}
        onContextMenu={G}
        onMouseEnter={H}
        onMouseMove={Y}
        onMouseLeave={K}
        onKeyDown={M ? Q : undefined}
        tabIndex={M ? 0 : undefined}
        role={g.ariaRole ?? (M ? "group" : "img")}
        aria-roledescription="edge"
        data-id={e}
        data-testid={`rf__edge-${e}`}
        aria-label={
          g.ariaLabel === null
            ? undefined
            : g.ariaLabel || `Edge from ${g.source} to ${g.target}`
        }
        aria-describedby={M ? `${va}-${p}` : undefined}
        ref={I}
        {...g.domAttributes}
      >
        {!O && (
          <N
            id={e}
            source={g.source}
            target={g.target}
            type={g.type}
            selected={g.selected}
            animated={g.animated}
            selectable={S}
            deletable={g.deletable ?? true}
            label={g.label}
            labelStyle={g.labelStyle}
            labelShowBg={g.labelShowBg}
            labelBgStyle={g.labelBgStyle}
            labelBgPadding={g.labelBgPadding}
            labelBgBorderRadius={g.labelBgBorderRadius}
            sourceX={D}
            sourceY={V}
            targetX={$}
            targetY={B}
            sourcePosition={q}
            targetPosition={F}
            data={g.data}
            style={g.style}
            sourceHandleId={g.sourceHandle}
            targetHandleId={g.targetHandle}
            markerStart={P}
            markerEnd={L}
            pathOptions={"pathOptions" in g ? g.pathOptions : undefined}
            interactionWidth={g.interactionWidth}
          />
        )}
        {b && (
          <Sg
            edge={g}
            isReconnectable={b}
            reconnectRadius={u}
            onReconnect={c}
            onReconnectStart={f}
            onReconnectEnd={h}
            sourceX={D}
            sourceY={V}
            targetX={$}
            targetY={B}
            sourcePosition={q}
            targetPosition={F}
            setUpdateHover={k}
            setReconnecting={_}
          />
        )}
      </g>
    </svg>
  );
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
  } = ee(kg, ie);
  const w = dg(t);
  return (
    <div className="react-flow__edges">
      <_Component1 defaultColor={e} rfId={n} />
      {w.map((C) => (
        <Cg
          id={C}
          edgesFocusable={m}
          edgesReconnectable={y}
          elementsSelectable={x}
          noPanClassName={i}
          onReconnect={s}
          onContextMenu={o}
          onMouseEnter={a}
          onMouseMove={l}
          onMouseLeave={d}
          onClick={u}
          reconnectRadius={c}
          onDoubleClick={f}
          onReconnectStart={h}
          onReconnectEnd={p}
          rfId={n}
          onError={g}
          edgeTypes={r}
          disableKeyboardA11y={v}
          key={C}
        />
      ))}
    </div>
  );
}
qa.displayName = "EdgeRenderer";
const Mg = z.memo(qa);
const Ig = (e) =>
  `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function Pg({ children: e }) {
  const t = ee(Ig);
  return (
    <div
      className="react-flow__viewport xyflow__viewport react-flow__container"
      style={{
        transform: t,
      }}
    >
      {e}
    </div>
  );
}
function Ag(e) {
  const t = ei();
  const n = z.useRef(false);
  z.useEffect(() => {
    if (!n.current && t.viewportInitialized && e) {
      setTimeout(() => e(t), 1);
      n.current = true;
    }
  }, [e, t.viewportInitialized]);
}
const Tg = (e) => {
  var t;
  if ((t = e.panZoom) == null) {
    return undefined;
  } else {
    return t.syncViewport;
  }
};
function Rg(e) {
  const t = ee(Tg);
  const n = oe();
  z.useEffect(() => {
    if (e) {
      if (t != null) {
        t(e);
      }
      n.setState({
        transform: [e.x, e.y, e.zoom],
      });
    }
  }, [e, t]);
  return null;
}
function Lg(e) {
  if (e.connection.inProgress) {
    return {
      ...e.connection,
      to: ut(e.connection.to, e.transform),
    };
  } else {
    return {
      ...e.connection,
    };
  }
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
function _Component11({ containerStyle: e, style: t, type: n, component: r }) {
  const {
    nodesConnectable: i,
    width: s,
    height: o,
    isValid: a,
    inProgress: l,
  } = ee(Og, ie);
  if (!s || !i || !l) {
    return null;
  } else {
    return (
      <svg
        style={e}
        width={s}
        height={o}
        className="react-flow__connectionline react-flow__container"
      >
        <g className={le(["react-flow__connection", Ws(a)])}>
          <Wa style={t} type={n} CustomComponent={r} isValid={a} />
        </g>
      </svg>
    );
  }
}
const Wa = ({
  style: e,
  type: t = Oe.Bezier,
  CustomComponent: _Component10,
  isValid: r,
}) => {
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
  if (!i) {
    return;
  }
  if (_Component10) {
    return (
      <_Component10
        connectionLineType={t}
        connectionLineStyle={e}
        fromNode={o}
        fromHandle={a}
        fromX={s.x}
        fromY={s.y}
        toX={d.x}
        toY={d.y}
        fromPosition={l}
        toPosition={f}
        connectionStatus={Ws(r)}
        toNode={u}
        toHandle={c}
        pointer={h}
      />
    );
  }
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
      [p] = Tr({
        ...v,
        borderRadius: 0,
      });
      break;
    case Oe.SmoothStep:
      [p] = Tr(v);
      break;
    default:
      [p] = oa(v);
  }
  return (
    <path d={p} fill="none" className="react-flow__connection-path" style={e} />
  );
};
Wa.displayName = "ConnectionLine";
const Hg = {};
function go(e = Hg) {
  z.useRef(e);
  oe();
  z.useEffect(() => {}, [e]);
}
function zg() {
  oe();
  z.useRef(false);
  z.useEffect(() => {}, []);
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
  go(e);
  go(t);
  zg();
  Ag(n);
  Rg(Pe);
  return (
    <_Component13
      onPaneClick={j}
      onPaneMouseEnter={W}
      onPaneMouseMove={G}
      onPaneMouseLeave={H}
      onPaneContextMenu={K}
      onPaneScroll={Y}
      paneClickDistance={Q}
      deleteKeyCode={b}
      selectionKeyCode={x}
      selectionOnDrag={g}
      selectionMode={w}
      onSelectionStart={f}
      onSelectionEnd={h}
      multiSelectionKeyCode={C}
      panActivationKeyCode={N}
      zoomActivationKeyCode={M}
      elementsSelectable={I}
      zoomOnScroll={D}
      zoomOnPinch={V}
      zoomOnDoubleClick={F}
      panOnScroll={$}
      panOnScrollSpeed={B}
      panOnScrollMode={q}
      panOnDrag={P}
      autoPanOnSelection={L}
      defaultViewport={E}
      translateExtent={k}
      minZoom={O}
      maxZoom={_}
      onSelectionContextMenu={c}
      preventScrolling={T}
      noDragClassName={Me}
      noWheelClassName={dt}
      noPanClassName={He}
      disableKeyboardA11y={ze}
      onViewportChange={Ve}
      isControlledViewport={!!Pe}
    >
      <Pg>
        <Mg
          edgeTypes={t}
          onEdgeClick={i}
          onEdgeDoubleClick={o}
          onReconnect={he}
          onReconnectStart={Ee}
          onReconnectEnd={Se}
          onlyRenderVisibleElements={S}
          onEdgeContextMenu={X}
          onEdgeMouseEnter={J}
          onEdgeMouseMove={te}
          onEdgeMouseLeave={ne}
          reconnectRadius={se}
          defaultMarkerColor={A}
          noPanClassName={He}
          disableKeyboardA11y={ze}
          rfId={Ie}
        />
        <_Component11 style={v} type={p} component={m} containerStyle={y} />
        <div className="react-flow__edgelabel-renderer" />
        <_Component12
          nodeTypes={e}
          onNodeClick={r}
          onNodeDoubleClick={s}
          onNodeMouseEnter={a}
          onNodeMouseMove={l}
          onNodeMouseLeave={d}
          onNodeContextMenu={u}
          nodeClickDistance={U}
          onlyRenderVisibleElements={S}
          noPanClassName={He}
          noDragClassName={Me}
          disableKeyboardA11y={ze}
          nodeExtent={ge}
          rfId={Ie}
        />
        <div className="react-flow__viewport-portal" />
      </Pg>
    </_Component13>
  );
}
Ya.displayName = "GraphView";
const Vg = z.memo(Ya);
const Fg = Ks();
const mo = ({
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
  const h = new Map();
  const p = new Map();
  const v = new Map();
  const m = new Map();
  const y = r ?? t ?? [];
  const x = n ?? e ?? [];
  const g = u ?? [0, 0];
  const w = c ?? _t;
  ca(v, m, y);
  const { nodesInitialized: C } = Lr(x, h, p, {
    nodeOrigin: g,
    nodeExtent: w,
    zIndexMode: f,
  });
  let N = [0, 0, 1];
  if (o && i && s) {
    const M = Pt(h, {
      filter: (E) =>
        (!!E.width || !!E.initialWidth) && (!!E.height || !!E.initialHeight),
    });
    const {
      x: b,
      y: S,
      zoom: I,
    } = Gr(M, i, s, l, d, (a == null ? undefined : a.padding) ?? 0.1);
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
    hasDefaultNodes: n !== undefined,
    hasDefaultEdges: r !== undefined,
    panZoom: null,
    minZoom: l,
    maxZoom: d,
    translateExtent: _t,
    nodeExtent: w,
    nodesSelectionActive: false,
    userSelectionActive: false,
    userSelectionRect: null,
    connectionMode: ot.Strict,
    domNode: null,
    paneDragging: false,
    noPanClassName: "nopan",
    nodeOrigin: g,
    nodeDragThreshold: 1,
    connectionDragThreshold: 1,
    snapGrid: [15, 15],
    snapToGrid: false,
    nodesDraggable: true,
    nodesConnectable: true,
    nodesFocusable: true,
    edgesFocusable: true,
    edgesReconnectable: true,
    elementsSelectable: true,
    elevateNodesOnSelect: true,
    elevateEdgesOnSelect: true,
    selectNodesOnDrag: true,
    multiSelectionActive: false,
    fitViewQueued: o ?? false,
    fitViewOptions: a,
    fitViewResolver: null,
    connection: {
      ...qs,
    },
    connectionClickStartHandle: null,
    connectOnClick: true,
    ariaLiveMessage: "",
    autoPanOnConnect: true,
    autoPanOnNodeDrag: true,
    autoPanOnNodeFocus: true,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: Fg,
    isValidConnection: undefined,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: false,
    ariaLabelConfig: Bs,
    zIndexMode: f,
    onNodesChangeMiddlewareMap: new Map(),
    onEdgesChangeMiddlewareMap: new Map(),
  };
};
const Bg = ({
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
      if (y) {
        await ih(
          {
            nodes: m,
            width: w,
            height: C,
            panZoom: y,
            minZoom: N,
            maxZoom: M,
          },
          x,
        );
        if (g != null) {
          g.resolve(true);
        }
        h({
          fitViewResolver: null,
        });
      }
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
        } = p();
        const { nodesInitialized: b, hasSelectedNodes: S } = Lr(m, y, x, {
          nodeOrigin: g,
          nodeExtent: c,
          elevateNodesOnSelect: w,
          checkEquality: true,
          zIndexMode: N,
        });
        const I = M && S;
        if (C && b) {
          v();
          h({
            nodes: m,
            nodesInitialized: b,
            fitViewQueued: false,
            fitViewOptions: undefined,
            nodesSelectionActive: I,
          });
        } else {
          h({
            nodes: m,
            nodesInitialized: b,
            nodesSelectionActive: I,
          });
        }
      },
      setEdges: (m) => {
        const { connectionLookup: y, edgeLookup: x } = p();
        ca(y, x, m);
        h({
          edges: m,
        });
      },
      setDefaultNodesAndEdges: (m, y) => {
        if (m) {
          const { setNodes: x } = p();
          x(m);
          h({
            hasDefaultNodes: true,
          });
        }
        if (y) {
          const { setEdges: x } = p();
          x(y);
          h({
            hasDefaultEdges: true,
          });
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
        } = p();
        const { changes: I, updatedInternals: E } = kh(m, x, g, w, C, N, S);
        if (E) {
          Eh(x, g, {
            nodeOrigin: C,
            nodeExtent: N,
            zIndexMode: S,
          });
          if (b) {
            v();
            h({
              fitViewQueued: false,
              fitViewOptions: undefined,
            });
          } else {
            h({});
          }
          if ((I == null ? undefined : I.length) > 0) {
            if (M) {
              console.log("React Flow: trigger node changes", I);
            }
            if (y != null) {
              y(I);
            }
          }
        }
      },
      updateNodePositions: (m, y = false) => {
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
          const E = w.get(S);
          const k =
            E != null &&
            !!E.expandParent &&
            E != null &&
            !!E.parentId &&
            I != null &&
            !!I.position;
          const O = {
            id: S,
            type: "position",
            position: k
              ? {
                  x: Math.max(0, I.position.x),
                  y: Math.max(0, I.position.y),
                }
              : I.position,
            dragging: y,
          };
          if (E && N.inProgress && N.fromNode.id === E.id) {
            const _ = Ke(E, N.fromHandle, Z.Left, true);
            M({
              ...N,
              from: _,
            });
          }
          if (k && E.parentId) {
            x.push({
              id: S,
              parentId: E.parentId,
              rect: {
                ...I.internals.positionAbsolute,
                width: I.measured.width ?? 0,
                height: I.measured.height ?? 0,
              },
            });
          }
          g.push(O);
        }
        if (x.length > 0) {
          const { parentLookup: S, nodeOrigin: I } = p();
          const E = Jr(x, w, S, I);
          g.push(...E);
        }
        for (const S of b.values()) {
          g = S(g);
        }
        C(g);
      },
      triggerNodeChanges: (m) => {
        const {
          onNodesChange: y,
          setNodes: x,
          nodes: g,
          hasDefaultNodes: w,
          debug: C,
        } = p();
        if (m != null && m.length) {
          if (w) {
            const N = Ep(m, g);
            x(N);
          }
          if (C) {
            console.log("React Flow: trigger node changes", m);
          }
          if (y != null) {
            y(m);
          }
        }
      },
      triggerEdgeChanges: (m) => {
        const {
          onEdgesChange: y,
          setEdges: x,
          edges: g,
          hasDefaultEdges: w,
          debug: C,
        } = p();
        if (m != null && m.length) {
          if (w) {
            const N = Sp(m, g);
            x(N);
          }
          if (C) {
            console.log("React Flow: trigger edge changes", m);
          }
          if (y != null) {
            y(m);
          }
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
          const N = m.map((M) => Fe(M, true));
          w(N);
          return;
        }
        w(Je(g, new Set([...m]), true));
        C(Je(x));
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
          const N = m.map((M) => Fe(M, true));
          C(N);
          return;
        }
        C(Je(x, new Set([...m])));
        w(Je(g, new Set(), true));
      },
      unselectNodesAndEdges: ({ nodes: m, edges: y } = {}) => {
        const {
          edges: x,
          nodes: g,
          nodeLookup: w,
          triggerNodeChanges: C,
          triggerEdgeChanges: N,
        } = p();
        const M = m || g;
        const b = y || x;
        const S = [];
        for (const E of M) {
          if (!E.selected) {
            continue;
          }
          const k = w.get(E.id);
          if (k) {
            k.selected = false;
          }
          S.push(Fe(E.id, false));
        }
        const I = [];
        for (const E of b) {
          if (E.selected) {
            I.push(Fe(E.id, false));
          }
        }
        C(S);
        N(I);
      },
      setMinZoom: (m) => {
        const { panZoom: y, maxZoom: x } = p();
        if (y != null) {
          y.setScaleExtent([m, x]);
        }
        h({
          minZoom: m,
        });
      },
      setMaxZoom: (m) => {
        const { panZoom: y, minZoom: x } = p();
        if (y != null) {
          y.setScaleExtent([x, m]);
        }
        h({
          maxZoom: m,
        });
      },
      setTranslateExtent: (m) => {
        var y;
        if ((y = p().panZoom) != null) {
          y.setTranslateExtent(m);
        }
        h({
          translateExtent: m,
        });
      },
      resetSelectedElements: () => {
        const {
          edges: m,
          nodes: y,
          triggerNodeChanges: x,
          triggerEdgeChanges: g,
          elementsSelectable: w,
        } = p();
        if (!w) {
          return;
        }
        const C = y.reduce(
          (M, b) => (b.selected ? [...M, Fe(b.id, false)] : M),
          [],
        );
        const N = m.reduce(
          (M, b) => (b.selected ? [...M, Fe(b.id, false)] : M),
          [],
        );
        x(C);
        g(N);
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
        if (
          m[0][0] !== N[0][0] ||
          m[0][1] !== N[0][1] ||
          m[1][0] !== N[1][0] ||
          m[1][1] !== N[1][1]
        ) {
          Lr(y, x, g, {
            nodeOrigin: w,
            nodeExtent: m,
            elevateNodesOnSelect: C,
            checkEquality: false,
            zIndexMode: M,
          });
          h({
            nodeExtent: m,
          });
        }
      },
      panBy: (m) => {
        const {
          transform: y,
          width: x,
          height: g,
          panZoom: w,
          translateExtent: C,
        } = p();
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
        if (!N) {
          return false;
        }
        const M =
          typeof (x == null ? undefined : x.zoom) !== "undefined" ? x.zoom : C;
        await N.setViewport(
          {
            x: g / 2 - m * M,
            y: w / 2 - y * M,
            zoom: M,
          },
          {
            duration: x == null ? undefined : x.duration,
            ease: x == null ? undefined : x.ease,
            interpolate: x == null ? undefined : x.interpolate,
          },
        );
        return true;
      },
      cancelConnection: () => {
        h({
          connection: {
            ...qs,
          },
        });
      },
      updateConnection: (m) => {
        h({
          connection: m,
        });
      },
      reset: () =>
        h({
          ...mo(),
        }),
    };
  }, Object.is);
function _Component15({
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
  return (
    <_Component14 value={p}>
      <Pp>{h}</Pp>
    </_Component14>
  );
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
  if (z.useContext(gn)) {
    return <R.Fragment>{e}</R.Fragment>;
  } else {
    return (
      <_Component15
        initialNodes={t}
        initialEdges={n}
        defaultNodes={r}
        defaultEdges={i}
        initialWidth={s}
        initialHeight={o}
        fitView={a}
        initialFitViewOptions={l}
        initialMinZoom={d}
        initialMaxZoom={u}
        nodeOrigin={c}
        nodeExtent={f}
        zIndexMode={h}
      >
        {e}
      </_Component15>
    );
  }
}
const Yg = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0,
};
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
    selectionOnDrag: H = false,
    selectionMode: Y = Et.Full,
    panActivationKeyCode: K = "Space",
    multiSelectionKeyCode: Q = Nt() ? "Meta" : "Control",
    zoomActivationKeyCode: U = Nt() ? "Meta" : "Control",
    snapToGrid: X,
    snapGrid: J,
    onlyRenderVisibleElements: te = false,
    selectNodesOnDrag: ne,
    nodesDraggable: se,
    autoPanOnNodeFocus: he,
    nodesConnectable: Ee,
    nodesFocusable: Se,
    nodeOrigin: Me = ba,
    edgesFocusable: dt,
    edgesReconnectable: He,
    elementsSelectable: ze = true,
    defaultViewport: ge = mp,
    minZoom: Ie = 0.5,
    maxZoom: Pe = 2,
    translateExtent: Ve = _t,
    preventScrolling: nc = true,
    nodeExtent: wn,
    defaultMarkerColor: rc = "#b1b1b7",
    zoomOnScroll: ic = true,
    zoomOnPinch: oc = true,
    panOnScroll: sc = false,
    panOnScrollSpeed: ac = 0.5,
    panOnScrollMode: cc = We.Free,
    zoomOnDoubleClick: lc = true,
    panOnDrag: uc = true,
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
    elevateNodesOnSelect: Oc = true,
    elevateEdgesOnSelect: jc = false,
    disableKeyboardA11y: si = false,
    autoPanOnConnect: Hc,
    autoPanOnNodeDrag: zc,
    autoPanOnSelection: Vc = true,
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
  const vn = ai || "1";
  const il = vp(Jc);
  const ol = z.useCallback(
    (li) => {
      li.currentTarget.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
      if (Tt != null) {
        Tt(li);
      }
    },
    [Tt],
  );
  return (
    <div
      data-testid="rf__wrapper"
      {...nl}
      onScroll={ol}
      style={{
        ...Yc,
        ...Yg,
      }}
      ref={rl}
      className={le(["react-flow", i, il])}
      id={ai}
      role="application"
    >
      <Wg
        nodes={e}
        edges={t}
        width={Zc}
        height={Qc}
        fitView={ii}
        fitViewOptions={oi}
        minZoom={Ie}
        maxZoom={Pe}
        nodeOrigin={Me}
        nodeExtent={wn}
        zIndexMode={ci}
      >
        <_Component16
          nodes={e}
          edges={t}
          defaultNodes={n}
          defaultEdges={r}
          onConnect={h}
          onConnectStart={p}
          onConnectEnd={v}
          onClickConnectStart={m}
          onClickConnectEnd={y}
          nodesDraggable={se}
          autoPanOnNodeFocus={he}
          nodesConnectable={Ee}
          nodesFocusable={Se}
          edgesFocusable={dt}
          edgesReconnectable={He}
          elementsSelectable={ze}
          elevateNodesOnSelect={Oc}
          elevateEdgesOnSelect={jc}
          minZoom={Ie}
          maxZoom={Pe}
          nodeExtent={wn}
          onNodesChange={Ic}
          onEdgesChange={Pc}
          snapToGrid={X}
          snapGrid={J}
          connectionMode={q}
          translateExtent={Ve}
          connectOnClick={Rc}
          defaultEdgeOptions={Dc}
          fitView={ii}
          fitViewOptions={oi}
          onNodesDelete={I}
          onEdgesDelete={E}
          onDelete={k}
          onNodeDragStart={M}
          onNodeDrag={b}
          onNodeDragStop={S}
          onSelectionDrag={T}
          onSelectionDragStart={_}
          onSelectionDragStop={A}
          onMove={u}
          onMoveStart={c}
          onMoveEnd={f}
          noPanClassName={ri}
          nodeOrigin={Me}
          rfId={vn}
          autoPanOnConnect={Hc}
          autoPanOnNodeDrag={zc}
          autoPanSpeed={Fc}
          onError={Wc}
          connectionRadius={Bc}
          isValidConnection={qc}
          selectNodesOnDrag={ne}
          nodeDragThreshold={Gc}
          connectionDragThreshold={Xc}
          onBeforeDelete={B}
          debug={el}
          ariaLabelConfig={tl}
          zIndexMode={ci}
        />
        <Vg
          onInit={d}
          onNodeClick={a}
          onEdgeClick={l}
          onNodeMouseEnter={x}
          onNodeMouseMove={g}
          onNodeMouseLeave={w}
          onNodeContextMenu={C}
          onNodeDoubleClick={N}
          nodeTypes={s}
          edgeTypes={o}
          connectionLineType={F}
          connectionLineStyle={P}
          connectionLineComponent={L}
          connectionLineContainerStyle={j}
          selectionKeyCode={G}
          selectionOnDrag={H}
          selectionMode={Y}
          deleteKeyCode={W}
          multiSelectionKeyCode={Q}
          panActivationKeyCode={K}
          zoomActivationKeyCode={U}
          onlyRenderVisibleElements={te}
          defaultViewport={ge}
          translateExtent={Ve}
          minZoom={Ie}
          maxZoom={Pe}
          preventScrolling={nc}
          zoomOnScroll={ic}
          zoomOnPinch={oc}
          zoomOnDoubleClick={lc}
          panOnScroll={sc}
          panOnScrollSpeed={ac}
          panOnScrollMode={cc}
          panOnDrag={uc}
          autoPanOnSelection={Vc}
          onPaneClick={dc}
          onPaneMouseEnter={fc}
          onPaneMouseMove={hc}
          onPaneMouseLeave={pc}
          onPaneScroll={gc}
          onPaneContextMenu={mc}
          paneClickDistance={yc}
          nodeClickDistance={xc}
          onSelectionContextMenu={D}
          onSelectionStart={V}
          onSelectionEnd={$}
          onReconnect={vc}
          onReconnectStart={bc}
          onReconnectEnd={_c}
          onEdgeContextMenu={Ec}
          onEdgeDoubleClick={Sc}
          onEdgeMouseEnter={Nc}
          onEdgeMouseMove={Cc}
          onEdgeMouseLeave={kc}
          reconnectRadius={Mc}
          defaultMarkerColor={rc}
          noDragClassName={Ac}
          noWheelClassName={Tc}
          noPanClassName={ri}
          rfId={vn}
          disableKeyboardA11y={si}
          nodeExtent={wn}
          viewport={Uc}
          onViewportChange={Kc}
        />
        <_Component17 onSelectionChange={O} />
        {wc}
        <_Component18 proOptions={$c} position={Lc} />
        <_Component19 rfId={vn} disableKeyboardA11y={si} />
      </Wg>
    </div>
  );
}
var $m = Ea(Gg);
function Xg({ dimensions: e, lineWidth: t, variant: n, className: r }) {
  return (
    <path
      strokeWidth={t}
      d={`M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`}
      className={le(["react-flow__background-pattern", n, r])}
    />
  );
}
function Ug({ radius: e, className: t }) {
  return (
    <circle
      cx={e}
      cy={e}
      r={e}
      className={le(["react-flow__background-pattern", "dots", t])}
    />
  );
}
var je;
(function (e) {
  e.Lines = "lines";
  e.Dots = "dots";
  e.Cross = "cross";
})((je ||= {}));
const Kg = {
  [je.Dots]: 1,
  [je.Lines]: 1,
  [je.Cross]: 6,
};
const Zg = (e) => ({
  transform: e.transform,
  patternId: `pattern-${e.rfId}`,
});
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
  const c = z.useRef(null);
  const { transform: f, patternId: h } = ee(Zg, ie);
  const p = r || Kg[t];
  const v = t === je.Dots;
  const m = t === je.Cross;
  const y = Array.isArray(n) ? n : [n, n];
  const x = [y[0] * f[2] || 1, y[1] * f[2] || 1];
  const g = p * f[2];
  const w = Array.isArray(s) ? s : [s, s];
  const C = m ? [g, g] : x;
  const N = [w[0] * f[2] || 1 + C[0] / 2, w[1] * f[2] || 1 + C[1] / 2];
  const M = `${h}${e || ""}`;
  return (
    <svg
      className={le(["react-flow__background", d])}
      style={{
        ...l,
        ...yn,
        "--xy-background-color-props": a,
        "--xy-background-pattern-color-props": o,
      }}
      ref={c}
      data-testid="rf__background"
    >
      <pattern
        id={M}
        x={f[0] % x[0]}
        y={f[1] % x[1]}
        width={x[0]}
        height={x[1]}
        patternUnits="userSpaceOnUse"
        patternTransform={`translate(-${N[0]},-${N[1]})`}
      >
        {v ? (
          <Ug radius={g / 2} className={u} />
        ) : (
          <Xg dimensions={C} lineWidth={i} variant={t} className={u} />
        )}
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill={`url(#${M})`} />
    </svg>
  );
}
Ga.displayName = "Background";
const Dm = z.memo(Ga);
function Qg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" />
    </svg>
  );
}
function Jg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5">
      <path d="M0 0h32v4.2H0z" />
    </svg>
  );
}
function _Component20() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30">
      <path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" />
    </svg>
  );
}
function _Component22() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32">
      <path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" />
    </svg>
  );
}
function _Component21() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32">
      <path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" />
    </svg>
  );
}
function Vt({ children: e, className: t, ...n }) {
  return (
    <button
      type="button"
      className={le(["react-flow__controls-button", t])}
      {...n}
    >
      {e}
    </button>
  );
}
const r0 = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig,
});
function Xa({
  style: e,
  showZoom: t = true,
  showFitView: n = true,
  showInteractive: r = true,
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
  const p = oe();
  const {
    isInteractive: v,
    minZoomReached: m,
    maxZoomReached: y,
    ariaLabelConfig: x,
  } = ee(r0, ie);
  const { zoomIn: g, zoomOut: w, fitView: C } = ei();
  const N = () => {
    g();
    if (s != null) {
      s();
    }
  };
  const M = () => {
    w();
    if (o != null) {
      o();
    }
  };
  const b = () => {
    C(i);
    if (a != null) {
      a();
    }
  };
  const S = () => {
    p.setState({
      nodesDraggable: !v,
      nodesConnectable: !v,
      elementsSelectable: !v,
    });
    if (l != null) {
      l(!v);
    }
  };
  const I = f === "horizontal" ? "horizontal" : "vertical";
  return (
    <_Component2
      className={le(["react-flow__controls", I, d])}
      position={c}
      style={e}
      data-testid="rf__controls"
      aria-label={h ?? x["controls.ariaLabel"]}
    >
      {t && (
        <R.Fragment>
          <Vt
            onClick={N}
            className="react-flow__controls-zoomin"
            title={x["controls.zoomIn.ariaLabel"]}
            aria-label={x["controls.zoomIn.ariaLabel"]}
            disabled={y}
          >
            <Qg />
          </Vt>
          <Vt
            onClick={M}
            className="react-flow__controls-zoomout"
            title={x["controls.zoomOut.ariaLabel"]}
            aria-label={x["controls.zoomOut.ariaLabel"]}
            disabled={m}
          >
            <Jg />
          </Vt>
        </R.Fragment>
      )}
      {n && (
        <Vt
          className="react-flow__controls-fitview"
          onClick={b}
          title={x["controls.fitView.ariaLabel"]}
          aria-label={x["controls.fitView.ariaLabel"]}
        >
          <_Component20 />
        </Vt>
      )}
      {r && (
        <Vt
          className="react-flow__controls-interactive"
          onClick={S}
          title={x["controls.interactive.ariaLabel"]}
          aria-label={x["controls.interactive.ariaLabel"]}
        >
          {v ? <_Component21 /> : <_Component22 />}
        </Vt>
      )}
      {u}
    </_Component2>
  );
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
  const { background: p, backgroundColor: v } = s || {};
  const m = o || p || v;
  return (
    <rect
      className={le([
        "react-flow__minimap-node",
        {
          selected: f,
        },
        d,
      ])}
      x={t}
      y={n}
      rx={u}
      ry={u}
      width={r}
      height={i}
      style={{
        fill: m,
        stroke: a,
        strokeWidth: l,
      }}
      shapeRendering={c}
      onClick={h ? (y) => h(y, e) : undefined}
    />
  );
}
const o0 = z.memo(i0);
const s0 = (e) => e.nodes.map((t) => t.id);
const In = (e) => (e instanceof Function ? e : () => e);
function a0({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: r = 5,
  nodeStrokeWidth: i,
  nodeComponent: s = o0,
  onClick: o,
}) {
  const a = ee(s0, ie);
  const l = In(t);
  const d = In(e);
  const u = In(n);
  const c =
    typeof window === "undefined" || window.chrome
      ? "crispEdges"
      : "geometricPrecision";
  return (
    <R.Fragment>
      {a.map((f) => (
        <_Component23
          id={f}
          nodeColorFunc={l}
          nodeStrokeColorFunc={d}
          nodeClassNameFunc={u}
          nodeBorderRadius={r}
          nodeStrokeWidth={i}
          NodeComponent={s}
          onClick={o}
          shapeRendering={c}
          key={f}
        />
      ))}
    </R.Fragment>
  );
}
function c0({
  id: e,
  nodeColorFunc: t,
  nodeStrokeColorFunc: n,
  nodeClassNameFunc: r,
  nodeBorderRadius: i,
  nodeStrokeWidth: s,
  shapeRendering: o,
  NodeComponent: _Component24,
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
    if (!v) {
      return {
        node: undefined,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      };
    }
    const m = v.internals.userNode;
    const { x: y, y: x } = v.internals.positionAbsolute;
    const { width: g, height: w } = Le(m);
    return {
      node: m,
      x: y,
      y: x,
      width: g,
      height: w,
    };
  }, ie);
  if (!d || d.hidden || !Zs(d)) {
    return null;
  } else {
    return (
      <_Component24
        x={u}
        y={c}
        width={f}
        height={h}
        style={d.style}
        selected={!!d.selected}
        className={r(d)}
        color={t(d)}
        borderRadius={i}
        strokeColor={n(d)}
        strokeWidth={s}
        shapeRendering={o}
        onClick={l}
        id={d.id}
      />
    );
  }
}
const _Component23 = z.memo(c0);
var _Component25 = z.memo(a0);
const d0 = 200;
const f0 = 150;
const h0 = (e) => !e.hidden;
const p0 = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2],
  };
  return {
    viewBB: t,
    boundingRect:
      e.nodeLookup.size > 0
        ? Us(
            Pt(e.nodeLookup, {
              filter: h0,
            }),
            t,
          )
        : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig,
  };
};
const g0 = "react-flow__minimap-desc";
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
  pannable: v = false,
  zoomable: m = false,
  ariaLabel: y,
  inversePan: x,
  zoomStep: g = 1,
  offsetScale: w = 5,
}) {
  const C = oe();
  const N = z.useRef(null);
  const {
    boundingRect: M,
    viewBB: b,
    rfId: S,
    panZoom: I,
    translateExtent: E,
    flowWidth: k,
    flowHeight: O,
    ariaLabelConfig: _,
  } = ee(p0, ie);
  const T = (e == null ? undefined : e.width) ?? d0;
  const A = (e == null ? undefined : e.height) ?? f0;
  const D = M.width / T;
  const V = M.height / A;
  const $ = Math.max(D, V);
  const B = $ * T;
  const q = $ * A;
  const F = w * $;
  const P = M.x - (B - M.width) / 2 - F;
  const L = M.y - (q - M.height) / 2 - F;
  const j = B + F * 2;
  const W = q + F * 2;
  const G = `${g0}-${S}`;
  const H = z.useRef(0);
  const Y = z.useRef();
  H.current = $;
  z.useEffect(() => {
    if (N.current && I) {
      Y.current = Oh({
        domNode: N.current,
        panZoom: I,
        getTransform: () => C.getState().transform,
        getViewScale: () => H.current,
      });
      return () => {
        var X;
        if ((X = Y.current) != null) {
          X.destroy();
        }
      };
    }
  }, [I]);
  z.useEffect(() => {
    var X;
    if ((X = Y.current) != null) {
      X.update({
        translateExtent: E,
        width: k,
        height: O,
        inversePan: x,
        pannable: v,
        zoomStep: g,
        zoomable: m,
      });
    }
  }, [v, m, x, g, E, k, O]);
  const K = h
    ? (X) => {
        var ne;
        const [J, te] = ((ne = Y.current) == null
          ? undefined
          : ne.pointer(X)) || [0, 0];
        h(X, {
          x: J,
          y: te,
        });
      }
    : undefined;
  const Q = p
    ? z.useCallback((X, J) => {
        const te = C.getState().nodeLookup.get(J).internals.userNode;
        p(X, te);
      }, [])
    : undefined;
  const U = y ?? _["minimap.ariaLabel"];
  return (
    <_Component2
      position={f}
      style={{
        ...e,
        "--xy-minimap-background-color-props":
          typeof l == "string" ? l : undefined,
        "--xy-minimap-mask-background-color-props":
          typeof d == "string" ? d : undefined,
        "--xy-minimap-mask-stroke-color-props":
          typeof u == "string" ? u : undefined,
        "--xy-minimap-mask-stroke-width-props":
          typeof c == "number" ? c * $ : undefined,
        "--xy-minimap-node-background-color-props":
          typeof r == "string" ? r : undefined,
        "--xy-minimap-node-stroke-color-props":
          typeof n == "string" ? n : undefined,
        "--xy-minimap-node-stroke-width-props":
          typeof o == "number" ? o : undefined,
      }}
      className={le(["react-flow__minimap", t])}
      data-testid="rf__minimap"
    >
      <svg
        width={T}
        height={A}
        viewBox={`${P} ${L} ${j} ${W}`}
        className="react-flow__minimap-svg"
        role="img"
        aria-labelledby={G}
        ref={N}
        onClick={K}
      >
        {U && <title id={G}>{U}</title>}
        <_Component25
          onClick={Q}
          nodeColor={r}
          nodeStrokeColor={n}
          nodeBorderRadius={s}
          nodeClassName={i}
          nodeStrokeWidth={o}
          nodeComponent={a}
        />
        <path
          className="react-flow__minimap-mask"
          d={`M${P - F},${L - F}h${j + F * 2}v${W + F * 2}h${-j - F * 2}z
        M${b.x},${b.y}h${b.width}v${b.height}h${-b.width}z`}
          fillRule="evenodd"
          pointerEvents="none"
        />
      </svg>
    </_Component2>
  );
}
Ua.displayName = "MiniMap";
z.memo(Ua);
const m0 = (e) => (t) => (e ? `${Math.max(1 / t.transform[2], 1)}` : undefined);
const y0 = {
  [lt.Line]: "right",
  [lt.Handle]: "bottom-right",
};
function x0({
  nodeId: e,
  position: t,
  variant: n = lt.Handle,
  className: r,
  style: i = undefined,
  children: s,
  color: o,
  minWidth: a = 10,
  minHeight: l = 10,
  maxWidth: d = Number.MAX_VALUE,
  maxHeight: u = Number.MAX_VALUE,
  keepAspectRatio: c = false,
  resizeDirection: f,
  autoScale: h = true,
  shouldResize: p,
  onResizeStart: v,
  onResize: m,
  onResizeEnd: y,
}) {
  const x = ka();
  const g = typeof e == "string" ? e : x;
  const w = oe();
  const C = z.useRef(null);
  const N = n === lt.Handle;
  const M = ee(z.useCallback(m0(N && h), [N, h]), ie);
  const b = z.useRef(null);
  const S = t ?? y0[n];
  z.useEffect(() => {
    if (!!C.current && !!g) {
      b.current ||= Kh({
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
          } = w.getState();
          const D = [];
          const V = {
            x: E.x,
            y: E.y,
          };
          const $ = _.get(g);
          if ($ && $.expandParent && $.parentId) {
            const B = $.origin ?? A;
            const q = E.width ?? $.measured.width ?? 0;
            const F = E.height ?? $.measured.height ?? 0;
            const P = {
              id: $.id,
              parentId: $.parentId,
              rect: {
                width: q,
                height: F,
                ...Qs(
                  {
                    x: E.x ?? $.position.x,
                    y: E.y ?? $.position.y,
                  },
                  {
                    width: q,
                    height: F,
                  },
                  $.parentId,
                  _,
                  B,
                ),
              },
            };
            const L = Jr([P], _, T, A);
            D.push(...L);
            V.x = E.x ? Math.max(B[0] * q, E.x) : undefined;
            V.y = E.y ? Math.max(B[1] * F, E.y) : undefined;
          }
          if (V.x !== undefined && V.y !== undefined) {
            const B = {
              id: g,
              type: "position",
              position: {
                ...V,
              },
            };
            D.push(B);
          }
          if (E.width !== undefined && E.height !== undefined) {
            const q = {
              id: g,
              type: "dimensions",
              resizing: true,
              setAttributes: f
                ? f === "horizontal"
                  ? "width"
                  : "height"
                : true,
              dimensions: {
                width: E.width,
                height: E.height,
              },
            };
            D.push(q);
          }
          for (const B of k) {
            const q = {
              ...B,
              type: "position",
            };
            D.push(q);
          }
          O(D);
        },
        onEnd: ({ width: E, height: k }) => {
          const O = {
            id: g,
            type: "dimensions",
            resizing: false,
            dimensions: {
              width: E,
              height: k,
            },
          };
          w.getState().triggerNodeChanges([O]);
        },
      });
      b.current.update({
        controlPosition: S,
        boundaries: {
          minWidth: a,
          minHeight: l,
          maxWidth: d,
          maxHeight: u,
        },
        keepAspectRatio: c,
        resizeDirection: f,
        onResizeStart: v,
        onResize: m,
        onResizeEnd: y,
        shouldResize: p,
      });
      return () => {
        var E;
        if ((E = b.current) != null) {
          E.destroy();
        }
      };
    }
  }, [S, a, l, d, u, c, v, m, y, p]);
  const I = S.split("-");
  return (
    <div
      className={le(["react-flow__resize-control", "nodrag", ...I, n, r])}
      ref={C}
      style={{
        ...i,
        scale: M,
        ...(o && {
          [N ? "backgroundColor" : "borderColor"]: o,
        }),
      }}
    >
      {s}
    </div>
  );
}
z.memo(x0);
const jm = "mathHarnessNode";
const Hm = 1600;
const zm = "We couldn’t complete the Math Harness request. Please try again.";
const Vm = "We cannot process this request at this time.";
const Fm = 248;
const Bm = 128;
const w0 = 376;
const v0 = 280;
const b0 = 640;
const _0 = 52;
const E0 = "ai-math.math-harness-writeup-panel-width.v1";
const qm = {
  padding: 0.18,
};
const Wm = {
  hideAttribution: true,
};
var Pn;
var yo;
function ni() {
  if (yo) {
    return Pn;
  }
  yo = 1;
  var e = "\0";
  var t = "\0";
  var n = "";
  class r {
    constructor(u) {
      ae(this, "_isDirected", true);
      ae(this, "_isMultigraph", false);
      ae(this, "_isCompound", false);
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
      if (u) {
        this._isDirected = Object.hasOwn(u, "directed") ? u.directed : true;
        this._isMultigraph = Object.hasOwn(u, "multigraph")
          ? u.multigraph
          : false;
        this._isCompound = Object.hasOwn(u, "compound") ? u.compound : false;
      }
      if (this._isCompound) {
        this._parent = {};
        this._children = {};
        this._children[t] = {};
      }
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
      this._label = u;
      return this;
    }
    graph() {
      return this._label;
    }
    setDefaultNodeLabel(u) {
      this._defaultNodeLabelFn = u;
      if (typeof u != "function") {
        this._defaultNodeLabelFn = () => u;
      }
      return this;
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
      var f = arguments;
      var h = this;
      u.forEach(function (p) {
        if (f.length > 1) {
          h.setNode(p, c);
        } else {
          h.setNode(p);
        }
      });
      return this;
    }
    setNode(u, c) {
      if (Object.hasOwn(this._nodes, u)) {
        if (arguments.length > 1) {
          this._nodes[u] = c;
        }
        return this;
      } else {
        this._nodes[u] = arguments.length > 1 ? c : this._defaultNodeLabelFn(u);
        if (this._isCompound) {
          this._parent[u] = t;
          this._children[u] = {};
          this._children[t][u] = true;
        }
        this._in[u] = {};
        this._preds[u] = {};
        this._out[u] = {};
        this._sucs[u] = {};
        ++this._nodeCount;
        return this;
      }
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
        delete this._nodes[u];
        if (this._isCompound) {
          this._removeFromParentsChildList(u);
          delete this._parent[u];
          this.children(u).forEach(function (h) {
            c.setParent(h);
          });
          delete this._children[u];
        }
        Object.keys(this._in[u]).forEach(f);
        delete this._in[u];
        delete this._preds[u];
        Object.keys(this._out[u]).forEach(f);
        delete this._out[u];
        delete this._sucs[u];
        --this._nodeCount;
      }
      return this;
    }
    setParent(u, c) {
      if (!this._isCompound) {
        throw new Error("Cannot set parent in a non-compound graph");
      }
      if (c === undefined) {
        c = t;
      } else {
        c += "";
        for (var f = c; f !== undefined; f = this.parent(f)) {
          if (f === u) {
            throw new Error(
              "Setting " + c + " as parent of " + u + " would create a cycle",
            );
          }
        }
        this.setNode(c);
      }
      this.setNode(u);
      this._removeFromParentsChildList(u);
      this._parent[u] = c;
      this._children[c][u] = true;
      return this;
    }
    _removeFromParentsChildList(u) {
      delete this._children[this._parent[u]][u];
    }
    parent(u) {
      if (this._isCompound) {
        var c = this._parent[u];
        if (c !== t) {
          return c;
        }
      }
    }
    children(u = t) {
      if (this._isCompound) {
        var c = this._children[u];
        if (c) {
          return Object.keys(c);
        }
      } else {
        if (u === t) {
          return this.nodes();
        }
        if (this.hasNode(u)) {
          return [];
        }
      }
    }
    predecessors(u) {
      var c = this._preds[u];
      if (c) {
        return Object.keys(c);
      }
    }
    successors(u) {
      var c = this._sucs[u];
      if (c) {
        return Object.keys(c);
      }
    }
    neighbors(u) {
      var c = this.predecessors(u);
      if (c) {
        const h = new Set(c);
        for (var f of this.successors(u)) {
          h.add(f);
        }
        return Array.from(h.values());
      }
    }
    isLeaf(u) {
      var c;
      if (this.isDirected()) {
        c = this.successors(u);
      } else {
        c = this.neighbors(u);
      }
      return c.length === 0;
    }
    filterNodes(u) {
      var c = new this.constructor({
        directed: this._isDirected,
        multigraph: this._isMultigraph,
        compound: this._isCompound,
      });
      c.setGraph(this.graph());
      var f = this;
      Object.entries(this._nodes).forEach(function ([v, m]) {
        if (u(v)) {
          c.setNode(v, m);
        }
      });
      Object.values(this._edgeObjs).forEach(function (v) {
        if (c.hasNode(v.v) && c.hasNode(v.w)) {
          c.setEdge(v, f.edge(v));
        }
      });
      var h = {};
      function p(v) {
        var m = f.parent(v);
        if (m === undefined || c.hasNode(m)) {
          h[v] = m;
          return m;
        } else if (m in h) {
          return h[m];
        } else {
          return p(m);
        }
      }
      if (this._isCompound) {
        c.nodes().forEach((v) => c.setParent(v, p(v)));
      }
      return c;
    }
    setDefaultEdgeLabel(u) {
      this._defaultEdgeLabelFn = u;
      if (typeof u != "function") {
        this._defaultEdgeLabelFn = () => u;
      }
      return this;
    }
    edgeCount() {
      return this._edgeCount;
    }
    edges() {
      return Object.values(this._edgeObjs);
    }
    setPath(u, c) {
      var f = this;
      var h = arguments;
      u.reduce(function (p, v) {
        if (h.length > 1) {
          f.setEdge(p, v, c);
        } else {
          f.setEdge(p, v);
        }
        return v;
      });
      return this;
    }
    setEdge() {
      var u;
      var c;
      var f;
      var h;
      var p = false;
      var v = arguments[0];
      if (typeof v == "object" && v !== null && "v" in v) {
        u = v.v;
        c = v.w;
        f = v.name;
        if (arguments.length === 2) {
          h = arguments[1];
          p = true;
        }
      } else {
        u = v;
        c = arguments[1];
        f = arguments[3];
        if (arguments.length > 2) {
          h = arguments[2];
          p = true;
        }
      }
      u = "" + u;
      c = "" + c;
      if (f !== undefined) {
        f = "" + f;
      }
      var m = o(this._isDirected, u, c, f);
      if (Object.hasOwn(this._edgeLabels, m)) {
        if (p) {
          this._edgeLabels[m] = h;
        }
        return this;
      }
      if (f !== undefined && !this._isMultigraph) {
        throw new Error("Cannot set a named edge when isMultigraph = false");
      }
      this.setNode(u);
      this.setNode(c);
      this._edgeLabels[m] = p ? h : this._defaultEdgeLabelFn(u, c, f);
      var y = a(this._isDirected, u, c, f);
      u = y.v;
      c = y.w;
      Object.freeze(y);
      this._edgeObjs[m] = y;
      i(this._preds[c], u);
      i(this._sucs[u], c);
      this._in[c][m] = y;
      this._out[u][m] = y;
      this._edgeCount++;
      return this;
    }
    edge(u, c, f) {
      var h =
        arguments.length === 1
          ? l(this._isDirected, arguments[0])
          : o(this._isDirected, u, c, f);
      return this._edgeLabels[h];
    }
    edgeAsObj() {
      const u = this.edge(...arguments);
      if (typeof u != "object") {
        return {
          label: u,
        };
      } else {
        return u;
      }
    }
    hasEdge(u, c, f) {
      var h =
        arguments.length === 1
          ? l(this._isDirected, arguments[0])
          : o(this._isDirected, u, c, f);
      return Object.hasOwn(this._edgeLabels, h);
    }
    removeEdge(u, c, f) {
      var h =
        arguments.length === 1
          ? l(this._isDirected, arguments[0])
          : o(this._isDirected, u, c, f);
      var p = this._edgeObjs[h];
      if (p) {
        u = p.v;
        c = p.w;
        delete this._edgeLabels[h];
        delete this._edgeObjs[h];
        s(this._preds[c], u);
        s(this._sucs[u], c);
        delete this._in[c][h];
        delete this._out[u][h];
        this._edgeCount--;
      }
      return this;
    }
    inEdges(u, c) {
      var f = this._in[u];
      if (f) {
        var h = Object.values(f);
        if (c) {
          return h.filter((p) => p.v === c);
        } else {
          return h;
        }
      }
    }
    outEdges(u, c) {
      var f = this._out[u];
      if (f) {
        var h = Object.values(f);
        if (c) {
          return h.filter((p) => p.w === c);
        } else {
          return h;
        }
      }
    }
    nodeEdges(u, c) {
      var f = this.inEdges(u, c);
      if (f) {
        return f.concat(this.outEdges(u, c));
      }
    }
  }
  function i(d, u) {
    if (d[u]) {
      d[u]++;
    } else {
      d[u] = 1;
    }
  }
  function s(d, u) {
    if (!--d[u]) {
      delete d[u];
    }
  }
  function o(d, u, c, f) {
    var h = "" + u;
    var p = "" + c;
    if (!d && h > p) {
      var v = h;
      h = p;
      p = v;
    }
    return h + n + p + n + (f === undefined ? e : f);
  }
  function a(d, u, c, f) {
    var h = "" + u;
    var p = "" + c;
    if (!d && h > p) {
      var v = h;
      h = p;
      p = v;
    }
    var m = {
      v: h,
      w: p,
    };
    if (f) {
      m.name = f;
    }
    return m;
  }
  function l(d, u) {
    return o(d, u.v, u.w, u.name);
  }
  Pn = r;
  return Pn;
}
var An;
var xo;
function S0() {
  if (!xo) {
    xo = 1;
    An = "2.2.4";
  }
  return An;
}
var Tn;
var wo;
function N0() {
  if (!wo) {
    wo = 1;
    Tn = {
      Graph: ni(),
      version: S0(),
    };
  }
  return Tn;
}
var Rn;
var vo;
function C0() {
  if (vo) {
    return Rn;
  }
  vo = 1;
  var e = ni();
  Rn = {
    write: t,
    read: i,
  };
  function t(s) {
    var o = {
      options: {
        directed: s.isDirected(),
        multigraph: s.isMultigraph(),
        compound: s.isCompound(),
      },
      nodes: n(s),
      edges: r(s),
    };
    if (s.graph() !== undefined) {
      o.value = structuredClone(s.graph());
    }
    return o;
  }
  function n(s) {
    return s.nodes().map(function (o) {
      var a = s.node(o);
      var l = s.parent(o);
      var d = {
        v: o,
      };
      if (a !== undefined) {
        d.value = a;
      }
      if (l !== undefined) {
        d.parent = l;
      }
      return d;
    });
  }
  function r(s) {
    return s.edges().map(function (o) {
      var a = s.edge(o);
      var l = {
        v: o.v,
        w: o.w,
      };
      if (o.name !== undefined) {
        l.name = o.name;
      }
      if (a !== undefined) {
        l.value = a;
      }
      return l;
    });
  }
  function i(s) {
    var o = new e(s.options).setGraph(s.value);
    s.nodes.forEach(function (a) {
      o.setNode(a.v, a.value);
      if (a.parent) {
        o.setParent(a.v, a.parent);
      }
    });
    s.edges.forEach(function (a) {
      o.setEdge(
        {
          v: a.v,
          w: a.w,
          name: a.name,
        },
        a.value,
      );
    });
    return o;
  }
  return Rn;
}
var Ln;
var bo;
function k0() {
  if (bo) {
    return Ln;
  }
  bo = 1;
  Ln = e;
  function e(t) {
    var n = {};
    var r = [];
    var i;
    function s(o) {
      if (!Object.hasOwn(n, o)) {
        n[o] = true;
        i.push(o);
        t.successors(o).forEach(s);
        t.predecessors(o).forEach(s);
      }
    }
    t.nodes().forEach(function (o) {
      i = [];
      s(o);
      if (i.length) {
        r.push(i);
      }
    });
    return r;
  }
  return Ln;
}
var $n;
var _o;
function Ka() {
  if (_o) {
    return $n;
  }
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
      if (r !== undefined) {
        return this._arr[r].priority;
      }
    }
    min() {
      if (this.size() === 0) {
        throw new Error("Queue underflow");
      }
      return this._arr[0].key;
    }
    add(n, r) {
      var i = this._keyIndices;
      n = String(n);
      if (!Object.hasOwn(i, n)) {
        var s = this._arr;
        var o = s.length;
        i[n] = o;
        s.push({
          key: n,
          priority: r,
        });
        this._decrease(o);
        return true;
      }
      return false;
    }
    removeMin() {
      this._swap(0, this._arr.length - 1);
      var n = this._arr.pop();
      delete this._keyIndices[n.key];
      this._heapify(0);
      return n.key;
    }
    decrease(n, r) {
      var i = this._keyIndices[n];
      if (r > this._arr[i].priority) {
        throw new Error(
          "New priority is greater than current priority. Key: " +
            n +
            " Old: " +
            this._arr[i].priority +
            " New: " +
            r,
        );
      }
      this._arr[i].priority = r;
      this._decrease(i);
    }
    _heapify(n) {
      var r = this._arr;
      var i = n * 2;
      var s = i + 1;
      var o = n;
      if (i < r.length) {
        o = r[i].priority < r[o].priority ? i : o;
        if (s < r.length) {
          o = r[s].priority < r[o].priority ? s : o;
        }
        if (o !== n) {
          this._swap(n, o);
          this._heapify(o);
        }
      }
    }
    _decrease(n) {
      for (
        var r = this._arr, i = r[n].priority, s;
        n !== 0 && ((s = n >> 1), !(r[s].priority < i));
      ) {
        this._swap(n, s);
        n = s;
      }
    }
    _swap(n, r) {
      var i = this._arr;
      var s = this._keyIndices;
      var o = i[n];
      var a = i[r];
      i[n] = a;
      i[r] = o;
      s[a.key] = n;
      s[o.key] = r;
    }
  }
  $n = e;
  return $n;
}
var Dn;
var Eo;
function Za() {
  if (Eo) {
    return Dn;
  }
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
    var l = {};
    var d = new e();
    var u;
    var c;
    function f(h) {
      var p = h.v !== u ? h.v : h.w;
      var v = l[p];
      var m = o(h);
      var y = c.distance + m;
      if (m < 0) {
        throw new Error(
          "dijkstra does not allow negative edge weights. Bad edge: " +
            h +
            " Weight: " +
            m,
        );
      }
      if (y < v.distance) {
        v.distance = y;
        v.predecessor = u;
        d.decrease(p, y);
      }
    }
    for (
      i.nodes().forEach(function (h) {
        var p = h === s ? 0 : Number.POSITIVE_INFINITY;
        l[h] = {
          distance: p,
        };
        d.add(h, p);
      });
      d.size() > 0 &&
      ((u = d.removeMin()),
      (c = l[u]),
      c.distance !== Number.POSITIVE_INFINITY);
    ) {
      a(u).forEach(f);
    }
    return l;
  }
  return Dn;
}
var On;
var So;
function M0() {
  if (So) {
    return On;
  }
  So = 1;
  var e = Za();
  On = t;
  function t(n, r, i) {
    return n.nodes().reduce(function (s, o) {
      s[o] = e(n, o, r, i);
      return s;
    }, {});
  }
  return On;
}
var jn;
var No;
function Qa() {
  if (No) {
    return jn;
  }
  No = 1;
  jn = e;
  function e(t) {
    var n = 0;
    var r = [];
    var i = {};
    var s = [];
    function o(a) {
      var l = (i[a] = {
        onStack: true,
        lowlink: n,
        index: n++,
      });
      r.push(a);
      t.successors(a).forEach(function (c) {
        if (Object.hasOwn(i, c)) {
          if (i[c].onStack) {
            l.lowlink = Math.min(l.lowlink, i[c].index);
          }
        } else {
          o(c);
          l.lowlink = Math.min(l.lowlink, i[c].lowlink);
        }
      });
      if (l.lowlink === l.index) {
        var d = [];
        var u;
        do {
          u = r.pop();
          i[u].onStack = false;
          d.push(u);
        } while (a !== u);
        s.push(d);
      }
    }
    t.nodes().forEach(function (a) {
      if (!Object.hasOwn(i, a)) {
        o(a);
      }
    });
    return s;
  }
  return jn;
}
var Hn;
var Co;
function I0() {
  if (Co) {
    return Hn;
  }
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
var zn;
var ko;
function P0() {
  if (ko) {
    return zn;
  }
  ko = 1;
  zn = t;
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
    var o = {};
    var a = r.nodes();
    a.forEach(function (l) {
      o[l] = {};
      o[l][l] = {
        distance: 0,
      };
      a.forEach(function (d) {
        if (l !== d) {
          o[l][d] = {
            distance: Number.POSITIVE_INFINITY,
          };
        }
      });
      s(l).forEach(function (d) {
        var u = d.v === l ? d.w : d.v;
        var c = i(d);
        o[l][u] = {
          distance: c,
          predecessor: l,
        };
      });
    });
    a.forEach(function (l) {
      var d = o[l];
      a.forEach(function (u) {
        var c = o[u];
        a.forEach(function (f) {
          var h = c[l];
          var p = d[f];
          var v = c[f];
          var m = h.distance + p.distance;
          if (m < v.distance) {
            v.distance = m;
            v.predecessor = p.predecessor;
          }
        });
      });
    });
    return o;
  }
  return zn;
}
var Vn;
var Mo;
function Ja() {
  if (Mo) {
    return Vn;
  }
  Mo = 1;
  function e(n) {
    var r = {};
    var i = {};
    var s = [];
    function o(a) {
      if (Object.hasOwn(i, a)) {
        throw new t();
      }
      if (!Object.hasOwn(r, a)) {
        i[a] = true;
        r[a] = true;
        n.predecessors(a).forEach(o);
        delete i[a];
        s.push(a);
      }
    }
    n.sinks().forEach(o);
    if (Object.keys(r).length !== n.nodeCount()) {
      throw new t();
    }
    return s;
  }
  class t extends Error {
    constructor() {
      super(...arguments);
    }
  }
  Vn = e;
  e.CycleException = t;
  return Vn;
}
var Fn;
var Io;
function A0() {
  if (Io) {
    return Fn;
  }
  Io = 1;
  var e = Ja();
  Fn = t;
  function t(n) {
    try {
      e(n);
    } catch (r) {
      if (r instanceof e.CycleException) {
        return false;
      }
      throw r;
    }
    return true;
  }
  return Fn;
}
var Bn;
var Po;
function ec() {
  if (Po) {
    return Bn;
  }
  Po = 1;
  Bn = e;
  function e(i, s, o) {
    if (!Array.isArray(s)) {
      s = [s];
    }
    var a = i.isDirected() ? (c) => i.successors(c) : (c) => i.neighbors(c);
    var l = o === "post" ? t : n;
    var d = [];
    var u = {};
    s.forEach((c) => {
      if (!i.hasNode(c)) {
        throw new Error("Graph does not have node: " + c);
      }
      l(c, a, u, d);
    });
    return d;
  }
  function t(i, s, o, a) {
    for (var l = [[i, false]]; l.length > 0;) {
      var d = l.pop();
      if (d[1]) {
        a.push(d[0]);
      } else if (!Object.hasOwn(o, d[0])) {
        o[d[0]] = true;
        l.push([d[0], true]);
        r(s(d[0]), (u) => l.push([u, false]));
      }
    }
  }
  function n(i, s, o, a) {
    for (var l = [i]; l.length > 0;) {
      var d = l.pop();
      if (!Object.hasOwn(o, d)) {
        o[d] = true;
        a.push(d);
        r(s(d), (u) => l.push(u));
      }
    }
  }
  function r(i, s) {
    for (var o = i.length; o--;) {
      s(i[o], o, i);
    }
    return i;
  }
  return Bn;
}
var qn;
var Ao;
function T0() {
  if (Ao) {
    return qn;
  }
  Ao = 1;
  var e = ec();
  qn = t;
  function t(n, r) {
    return e(n, r, "post");
  }
  return qn;
}
var Wn;
var To;
function R0() {
  if (To) {
    return Wn;
  }
  To = 1;
  var e = ec();
  Wn = t;
  function t(n, r) {
    return e(n, r, "pre");
  }
  return Wn;
}
var Yn;
var Ro;
function L0() {
  if (Ro) {
    return Yn;
  }
  Ro = 1;
  var e = ni();
  var t = Ka();
  Yn = n;
  function n(r, i) {
    var s = new e();
    var o = {};
    var a = new t();
    var l;
    function d(c) {
      var f = c.v === l ? c.w : c.v;
      var h = a.priority(f);
      if (h !== undefined) {
        var p = i(c);
        if (p < h) {
          o[f] = l;
          a.decrease(f, p);
        }
      }
    }
    if (r.nodeCount() === 0) {
      return s;
    }
    r.nodes().forEach(function (c) {
      a.add(c, Number.POSITIVE_INFINITY);
      s.setNode(c);
    });
    a.decrease(r.nodes()[0], 0);
    var u = false;
    for (; a.size() > 0;) {
      l = a.removeMin();
      if (Object.hasOwn(o, l)) {
        s.setEdge(l, o[l]);
      } else {
        if (u) {
          throw new Error("Input graph is not connected: " + r);
        }
        u = true;
      }
      r.nodeEdges(l).forEach(d);
    }
    return s;
  }
  return Yn;
}
var Gn;
var Lo;
function $0() {
  if (!Lo) {
    Lo = 1;
    Gn = {
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
    };
  }
  return Gn;
}
var Xn;
var $o;
function be() {
  if ($o) {
    return Xn;
  }
  $o = 1;
  var e = N0();
  Xn = {
    Graph: e.Graph,
    json: C0(),
    alg: $0(),
    version: e.version,
  };
  return Xn;
}
var Un;
var Do;
function D0() {
  if (Do) {
    return Un;
  }
  Do = 1;
  class e {
    constructor() {
      let i = {};
      i._next = i._prev = i;
      this._sentinel = i;
    }
    dequeue() {
      let i = this._sentinel;
      let s = i._prev;
      if (s !== i) {
        t(s);
        return s;
      }
    }
    enqueue(i) {
      let s = this._sentinel;
      if (i._prev && i._next) {
        t(i);
      }
      i._next = s._next;
      s._next._prev = i;
      s._next = i;
      i._prev = s;
    }
    toString() {
      let i = [];
      let s = this._sentinel;
      let o = s._prev;
      while (o !== s) {
        i.push(JSON.stringify(o, n));
        o = o._prev;
      }
      return "[" + i.join(", ") + "]";
    }
  }
  function t(r) {
    r._prev._next = r._next;
    r._next._prev = r._prev;
    delete r._next;
    delete r._prev;
  }
  function n(r, i) {
    if (r !== "_next" && r !== "_prev") {
      return i;
    }
  }
  Un = e;
  return Un;
}
var Kn;
var Oo;
function O0() {
  if (Oo) {
    return Kn;
  }
  Oo = 1;
  let e = be().Graph;
  let t = D0();
  Kn = r;
  let n = () => 1;
  function r(d, u) {
    if (d.nodeCount() <= 1) {
      return [];
    }
    let c = o(d, u || n);
    return i(c.graph, c.buckets, c.zeroIdx).flatMap((h) =>
      d.outEdges(h.v, h.w),
    );
  }
  function i(d, u, c) {
    let f = [];
    let h = u[u.length - 1];
    let p = u[0];
    let v;
    while (d.nodeCount()) {
      while ((v = p.dequeue())) {
        s(d, u, c, v);
      }
      while ((v = h.dequeue())) {
        s(d, u, c, v);
      }
      if (d.nodeCount()) {
        for (let m = u.length - 2; m > 0; --m) {
          v = u[m].dequeue();
          if (v) {
            f = f.concat(s(d, u, c, v, true));
            break;
          }
        }
      }
    }
    return f;
  }
  function s(d, u, c, f, h) {
    let p = h ? [] : undefined;
    d.inEdges(f.v).forEach((v) => {
      let m = d.edge(v);
      let y = d.node(v.v);
      if (h) {
        p.push({
          v: v.v,
          w: v.w,
        });
      }
      y.out -= m;
      a(u, c, y);
    });
    d.outEdges(f.v).forEach((v) => {
      let m = d.edge(v);
      let y = v.w;
      let x = d.node(y);
      x.in -= m;
      a(u, c, x);
    });
    d.removeNode(f.v);
    return p;
  }
  function o(d, u) {
    let c = new e();
    let f = 0;
    let h = 0;
    d.nodes().forEach((m) => {
      c.setNode(m, {
        v: m,
        in: 0,
        out: 0,
      });
    });
    d.edges().forEach((m) => {
      let y = c.edge(m.v, m.w) || 0;
      let x = u(m);
      let g = y + x;
      c.setEdge(m.v, m.w, g);
      h = Math.max(h, (c.node(m.v).out += x));
      f = Math.max(f, (c.node(m.w).in += x));
    });
    let p = l(h + f + 3).map(() => new t());
    let v = f + 1;
    c.nodes().forEach((m) => {
      a(p, v, c.node(m));
    });
    return {
      graph: c,
      buckets: p,
      zeroIdx: v,
    };
  }
  function a(d, u, c) {
    if (c.out) {
      if (c.in) {
        d[c.out - c.in + u].enqueue(c);
      } else {
        d[d.length - 1].enqueue(c);
      }
    } else {
      d[0].enqueue(c);
    }
  }
  function l(d) {
    const u = [];
    for (let c = 0; c < d; c++) {
      u.push(c);
    }
    return u;
  }
  return Kn;
}
var Zn;
var jo;
function ce() {
  if (jo) {
    return Zn;
  }
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
    for (var k = E; b.hasNode(k);) {
      k = g(E);
    }
    I.dummy = S;
    b.setNode(k, I);
    return k;
  }
  function n(b) {
    let S = new e().setGraph(b.graph());
    b.nodes().forEach((I) => S.setNode(I, b.node(I)));
    b.edges().forEach((I) => {
      let E = S.edge(I.v, I.w) || {
        weight: 0,
        minlen: 1,
      };
      let k = b.edge(I);
      S.setEdge(I.v, I.w, {
        weight: E.weight + k.weight,
        minlen: Math.max(E.minlen, k.minlen),
      });
    });
    return S;
  }
  function r(b) {
    let S = new e({
      multigraph: b.isMultigraph(),
    }).setGraph(b.graph());
    b.nodes().forEach((I) => {
      if (!b.children(I).length) {
        S.setNode(I, b.node(I));
      }
    });
    b.edges().forEach((I) => {
      S.setEdge(I, b.edge(I));
    });
    return S;
  }
  function i(b) {
    let S = b.nodes().map((I) => {
      let E = {};
      b.outEdges(I).forEach((k) => {
        E[k.w] = (E[k.w] || 0) + b.edge(k).weight;
      });
      return E;
    });
    return M(b.nodes(), S);
  }
  function s(b) {
    let S = b.nodes().map((I) => {
      let E = {};
      b.inEdges(I).forEach((k) => {
        E[k.v] = (E[k.v] || 0) + b.edge(k).weight;
      });
      return E;
    });
    return M(b.nodes(), S);
  }
  function o(b, S) {
    let I = b.x;
    let E = b.y;
    let k = S.x - I;
    let O = S.y - E;
    let _ = b.width / 2;
    let T = b.height / 2;
    if (!k && !O) {
      throw new Error(
        "Not possible to find intersection inside of the rectangle",
      );
    }
    let A;
    let D;
    if (Math.abs(O) * _ > Math.abs(k) * T) {
      if (O < 0) {
        T = -T;
      }
      A = (T * k) / O;
      D = T;
    } else {
      if (k < 0) {
        _ = -_;
      }
      A = _;
      D = (_ * O) / k;
    }
    return {
      x: I + A,
      y: E + D,
    };
  }
  function a(b) {
    let S = w(p(b) + 1).map(() => []);
    b.nodes().forEach((I) => {
      let E = b.node(I);
      let k = E.rank;
      if (k !== undefined) {
        S[k][E.order] = I;
      }
    });
    return S;
  }
  function l(b) {
    let S = b.nodes().map((E) => {
      let k = b.node(E).rank;
      if (k === undefined) {
        return Number.MAX_VALUE;
      } else {
        return k;
      }
    });
    let I = h(Math.min, S);
    b.nodes().forEach((E) => {
      let k = b.node(E);
      if (Object.hasOwn(k, "rank")) {
        k.rank -= I;
      }
    });
  }
  function d(b) {
    let S = b.nodes().map((_) => b.node(_).rank);
    let I = h(Math.min, S);
    let E = [];
    b.nodes().forEach((_) => {
      let T = b.node(_).rank - I;
      E[T] ||= [];
      E[T].push(_);
    });
    let k = 0;
    let O = b.graph().nodeRankFactor;
    Array.from(E).forEach((_, T) => {
      if (_ === undefined && T % O !== 0) {
        --k;
      } else if (_ !== undefined && k) {
        _.forEach((A) => (b.node(A).rank += k));
      }
    });
  }
  function u(b, S, I, E) {
    let k = {
      width: 0,
      height: 0,
    };
    if (arguments.length >= 4) {
      k.rank = I;
      k.order = E;
    }
    return t(b, "border", k, S);
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
    } else {
      return b.apply(null, S);
    }
  }
  function p(b) {
    const I = b.nodes().map((E) => {
      let k = b.node(E).rank;
      if (k === undefined) {
        return Number.MIN_VALUE;
      } else {
        return k;
      }
    });
    return h(Math.max, I);
  }
  function v(b, S) {
    let I = {
      lhs: [],
      rhs: [],
    };
    b.forEach((E) => {
      if (S(E)) {
        I.lhs.push(E);
      } else {
        I.rhs.push(E);
      }
    });
    return I;
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
    if (S == null) {
      S = b;
      b = 0;
    }
    let E = (O) => O < S;
    if (I < 0) {
      E = (O) => S < O;
    }
    const k = [];
    for (let O = b; E(O); O += I) {
      k.push(O);
    }
    return k;
  }
  function C(b, S) {
    const I = {};
    for (const E of S) {
      if (b[E] !== undefined) {
        I[E] = b[E];
      }
    }
    return I;
  }
  function N(b, S) {
    let I = S;
    if (typeof S == "string") {
      I = (E) => E[S];
    }
    return Object.entries(b).reduce((E, [k, O]) => {
      E[k] = I(O, k);
      return E;
    }, {});
  }
  function M(b, S) {
    return b.reduce((I, E, k) => {
      I[E] = S[k];
      return I;
    }, {});
  }
  return Zn;
}
var Qn;
var Ho;
function j0() {
  if (Ho) {
    return Qn;
  }
  Ho = 1;
  let e = O0();
  let t = ce().uniqueId;
  Qn = {
    run: n,
    undo: i,
  };
  function n(s) {
    (s.graph().acyclicer === "greedy" ? e(s, a(s)) : r(s)).forEach((l) => {
      let d = s.edge(l);
      s.removeEdge(l);
      d.forwardName = l.name;
      d.reversed = true;
      s.setEdge(l.w, l.v, d, t("rev"));
    });
    function a(l) {
      return (d) => l.edge(d).weight;
    }
  }
  function r(s) {
    let o = [];
    let a = {};
    let l = {};
    function d(u) {
      if (!Object.hasOwn(l, u)) {
        l[u] = true;
        a[u] = true;
        s.outEdges(u).forEach((c) => {
          if (Object.hasOwn(a, c.w)) {
            o.push(c);
          } else {
            d(c.w);
          }
        });
        delete a[u];
      }
    }
    s.nodes().forEach(d);
    return o;
  }
  function i(s) {
    s.edges().forEach((o) => {
      let a = s.edge(o);
      if (a.reversed) {
        s.removeEdge(o);
        let l = a.forwardName;
        delete a.reversed;
        delete a.forwardName;
        s.setEdge(o.w, o.v, a, l);
      }
    });
  }
  return Qn;
}
var Jn;
var zo;
function H0() {
  if (zo) {
    return Jn;
  }
  zo = 1;
  let e = ce();
  Jn = {
    run: t,
    undo: r,
  };
  function t(i) {
    i.graph().dummyChains = [];
    i.edges().forEach((s) => n(i, s));
  }
  function n(i, s) {
    let o = s.v;
    let a = i.node(o).rank;
    let l = s.w;
    let d = i.node(l).rank;
    let u = s.name;
    let c = i.edge(s);
    let f = c.labelRank;
    if (d === a + 1) {
      return;
    }
    i.removeEdge(s);
    let h;
    let p;
    let v;
    v = 0;
    ++a;
    for (; a < d; ++v, ++a) {
      c.points = [];
      p = {
        width: 0,
        height: 0,
        edgeLabel: c,
        edgeObj: s,
        rank: a,
      };
      h = e.addDummyNode(i, "edge", p, "_d");
      if (a === f) {
        p.width = c.width;
        p.height = c.height;
        p.dummy = "edge-label";
        p.labelpos = c.labelpos;
      }
      i.setEdge(
        o,
        h,
        {
          weight: c.weight,
        },
        u,
      );
      if (v === 0) {
        i.graph().dummyChains.push(h);
      }
      o = h;
    }
    i.setEdge(
      o,
      l,
      {
        weight: c.weight,
      },
      u,
    );
  }
  function r(i) {
    i.graph().dummyChains.forEach((s) => {
      let o = i.node(s);
      let a = o.edgeLabel;
      let l;
      for (i.setEdge(o.edgeObj, a); o.dummy;) {
        l = i.successors(s)[0];
        i.removeNode(s);
        a.points.push({
          x: o.x,
          y: o.y,
        });
        if (o.dummy === "edge-label") {
          a.x = o.x;
          a.y = o.y;
          a.width = o.width;
          a.height = o.height;
        }
        s = l;
        o = i.node(s);
      }
    });
  }
  return Jn;
}
var er;
var Vo;
function sn() {
  if (Vo) {
    return er;
  }
  Vo = 1;
  const { applyWithChunking: e } = ce();
  er = {
    longestPath: t,
    slack: n,
  };
  function t(r) {
    var i = {};
    function s(o) {
      var a = r.node(o);
      if (Object.hasOwn(i, o)) {
        return a.rank;
      }
      i[o] = true;
      let l = r
        .outEdges(o)
        .map((u) =>
          u == null ? Number.POSITIVE_INFINITY : s(u.w) - r.edge(u).minlen,
        );
      var d = e(Math.min, l);
      if (d === Number.POSITIVE_INFINITY) {
        d = 0;
      }
      return (a.rank = d);
    }
    r.sources().forEach(s);
  }
  function n(r, i) {
    return r.node(i.w).rank - r.node(i.v).rank - r.edge(i).minlen;
  }
  return er;
}
var tr;
var Fo;
function tc() {
  if (Fo) {
    return tr;
  }
  Fo = 1;
  var e = be().Graph;
  var t = sn().slack;
  tr = n;
  function n(o) {
    var a = new e({
      directed: false,
    });
    var l = o.nodes()[0];
    var d = o.nodeCount();
    a.setNode(l, {});
    var u;
    var c;
    for (; r(a, o) < d;) {
      u = i(a, o);
      c = a.hasNode(u.v) ? t(o, u) : -t(o, u);
      s(a, o, c);
    }
    return a;
  }
  function r(o, a) {
    function l(d) {
      a.nodeEdges(d).forEach((u) => {
        var c = u.v;
        var f = d === c ? u.w : c;
        if (!o.hasNode(f) && !t(a, u)) {
          o.setNode(f, {});
          o.setEdge(d, f, {});
          l(f);
        }
      });
    }
    o.nodes().forEach(l);
    return o.nodeCount();
  }
  function i(o, a) {
    return a.edges().reduce(
      (d, u) => {
        let c = Number.POSITIVE_INFINITY;
        if (o.hasNode(u.v) !== o.hasNode(u.w)) {
          c = t(a, u);
        }
        if (c < d[0]) {
          return [c, u];
        } else {
          return d;
        }
      },
      [Number.POSITIVE_INFINITY, null],
    )[1];
  }
  function s(o, a, l) {
    o.nodes().forEach((d) => (a.node(d).rank += l));
  }
  return tr;
}
var nr;
var Bo;
function z0() {
  if (Bo) {
    return nr;
  }
  Bo = 1;
  var e = tc();
  var t = sn().slack;
  var n = sn().longestPath;
  var r = be().alg.preorder;
  var i = be().alg.postorder;
  var s = ce().simplify;
  nr = o;
  o.initLowLimValues = u;
  o.initCutValues = a;
  o.calcCutValue = d;
  o.leaveEdge = f;
  o.enterEdge = h;
  o.exchangeEdges = p;
  function o(x) {
    x = s(x);
    n(x);
    var g = e(x);
    u(g);
    a(g, x);
    for (var w, C; (w = f(g));) {
      C = h(g, x, w);
      p(g, x, w, C);
    }
  }
  function a(x, g) {
    var w = i(x, x.nodes());
    w = w.slice(0, w.length - 1);
    w.forEach((C) => l(x, g, C));
  }
  function l(x, g, w) {
    var C = x.node(w);
    var N = C.parent;
    x.edge(w, N).cutvalue = d(x, g, w);
  }
  function d(x, g, w) {
    var C = x.node(w);
    var N = C.parent;
    var M = true;
    var b = g.edge(w, N);
    var S = 0;
    if (!b) {
      M = false;
      b = g.edge(N, w);
    }
    S = b.weight;
    g.nodeEdges(w).forEach((I) => {
      var E = I.v === w;
      var k = E ? I.w : I.v;
      if (k !== N) {
        var O = E === M;
        var _ = g.edge(I).weight;
        S += O ? _ : -_;
        if (m(x, w, k)) {
          var T = x.edge(w, k).cutvalue;
          S += O ? -T : T;
        }
      }
    });
    return S;
  }
  function u(x, g) {
    if (arguments.length < 2) {
      g = x.nodes()[0];
    }
    c(x, {}, 1, g);
  }
  function c(x, g, w, C, N) {
    var M = w;
    var b = x.node(C);
    g[C] = true;
    x.neighbors(C).forEach((S) => {
      if (!Object.hasOwn(g, S)) {
        w = c(x, g, w, S, C);
      }
    });
    b.low = M;
    b.lim = w++;
    if (N) {
      b.parent = N;
    } else {
      delete b.parent;
    }
    return w;
  }
  function f(x) {
    return x.edges().find((g) => x.edge(g).cutvalue < 0);
  }
  function h(x, g, w) {
    var C = w.v;
    var N = w.w;
    if (!g.hasEdge(C, N)) {
      C = w.w;
      N = w.v;
    }
    var M = x.node(C);
    var b = x.node(N);
    var S = M;
    var I = false;
    if (M.lim > b.lim) {
      S = b;
      I = true;
    }
    var E = g
      .edges()
      .filter((k) => I === y(x, x.node(k.v), S) && I !== y(x, x.node(k.w), S));
    return E.reduce((k, O) => (t(g, O) < t(g, k) ? O : k));
  }
  function p(x, g, w, C) {
    var N = w.v;
    var M = w.w;
    x.removeEdge(N, M);
    x.setEdge(C.v, C.w, {});
    u(x);
    a(x, g);
    v(x, g);
  }
  function v(x, g) {
    var w = x.nodes().find((N) => !g.node(N).parent);
    var C = r(x, w);
    C = C.slice(1);
    C.forEach((N) => {
      var M = x.node(N).parent;
      var b = g.edge(N, M);
      var S = false;
      if (!b) {
        b = g.edge(M, N);
        S = true;
      }
      g.node(N).rank = g.node(M).rank + (S ? b.minlen : -b.minlen);
    });
  }
  function m(x, g, w) {
    return x.hasEdge(g, w);
  }
  function y(x, g, w) {
    return w.low <= g.lim && g.lim <= w.lim;
  }
  return nr;
}
var rr;
var qo;
function V0() {
  if (qo) {
    return rr;
  }
  qo = 1;
  var e = sn();
  var t = e.longestPath;
  var n = tc();
  var r = z0();
  rr = i;
  function i(l) {
    var d = l.graph().ranker;
    if (d instanceof Function) {
      return d(l);
    }
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
    t(l);
    n(l);
  }
  function a(l) {
    r(l);
  }
  return rr;
}
var ir;
var Wo;
function F0() {
  if (Wo) {
    return ir;
  }
  Wo = 1;
  ir = e;
  function e(r) {
    let i = n(r);
    r.graph().dummyChains.forEach((s) => {
      let o = r.node(s);
      let a = o.edgeObj;
      let l = t(r, i, a.v, a.w);
      let d = l.path;
      let u = l.lca;
      let c = 0;
      let f = d[c];
      let h = true;
      while (s !== a.w) {
        o = r.node(s);
        if (h) {
          while ((f = d[c]) !== u && r.node(f).maxRank < o.rank) {
            c++;
          }
          if (f === u) {
            h = false;
          }
        }
        if (!h) {
          while (c < d.length - 1 && r.node((f = d[c + 1])).minRank <= o.rank) {
            c++;
          }
          f = d[c];
        }
        r.setParent(s, f);
        s = r.successors(s)[0];
      }
    });
  }
  function t(r, i, s, o) {
    let a = [];
    let l = [];
    let d = Math.min(i[s].low, i[o].low);
    let u = Math.max(i[s].lim, i[o].lim);
    let c;
    let f;
    c = s;
    do {
      c = r.parent(c);
      a.push(c);
    } while (c && (i[c].low > d || u > i[c].lim));
    f = c;
    c = o;
    while ((c = r.parent(c)) !== f) {
      l.push(c);
    }
    return {
      path: a.concat(l.reverse()),
      lca: f,
    };
  }
  function n(r) {
    let i = {};
    let s = 0;
    function o(a) {
      let l = s;
      r.children(a).forEach(o);
      i[a] = {
        low: l,
        lim: s++,
      };
    }
    r.children().forEach(o);
    return i;
  }
  return ir;
}
var or;
var Yo;
function B0() {
  if (Yo) {
    return or;
  }
  Yo = 1;
  let e = ce();
  or = {
    run: t,
    cleanup: s,
  };
  function t(o) {
    let a = e.addDummyNode(o, "root", {}, "_root");
    let l = r(o);
    let d = Object.values(l);
    let u = e.applyWithChunking(Math.max, d) - 1;
    let c = u * 2 + 1;
    o.graph().nestingRoot = a;
    o.edges().forEach((h) => (o.edge(h).minlen *= c));
    let f = i(o) + 1;
    o.children().forEach((h) => n(o, a, c, f, u, l, h));
    o.graph().nodeRankFactor = c;
  }
  function n(o, a, l, d, u, c, f) {
    let h = o.children(f);
    if (!h.length) {
      if (f !== a) {
        o.setEdge(a, f, {
          weight: 0,
          minlen: l,
        });
      }
      return;
    }
    let p = e.addBorderNode(o, "_bt");
    let v = e.addBorderNode(o, "_bb");
    let m = o.node(f);
    o.setParent(p, f);
    m.borderTop = p;
    o.setParent(v, f);
    m.borderBottom = v;
    h.forEach((y) => {
      n(o, a, l, d, u, c, y);
      let x = o.node(y);
      let g = x.borderTop ? x.borderTop : y;
      let w = x.borderBottom ? x.borderBottom : y;
      let C = x.borderTop ? d : d * 2;
      let N = g !== w ? 1 : u - c[f] + 1;
      o.setEdge(p, g, {
        weight: C,
        minlen: N,
        nestingEdge: true,
      });
      o.setEdge(w, v, {
        weight: C,
        minlen: N,
        nestingEdge: true,
      });
    });
    if (!o.parent(f)) {
      o.setEdge(a, p, {
        weight: 0,
        minlen: u + c[f],
      });
    }
  }
  function r(o) {
    var a = {};
    function l(d, u) {
      var c = o.children(d);
      if (c && c.length) {
        c.forEach((f) => l(f, u + 1));
      }
      a[d] = u;
    }
    o.children().forEach((d) => l(d, 1));
    return a;
  }
  function i(o) {
    return o.edges().reduce((a, l) => a + o.edge(l).weight, 0);
  }
  function s(o) {
    var a = o.graph();
    o.removeNode(a.nestingRoot);
    delete a.nestingRoot;
    o.edges().forEach((l) => {
      var d = o.edge(l);
      if (d.nestingEdge) {
        o.removeEdge(l);
      }
    });
  }
  return or;
}
var sr;
var Go;
function q0() {
  if (Go) {
    return sr;
  }
  Go = 1;
  let e = ce();
  sr = t;
  function t(r) {
    function i(s) {
      let o = r.children(s);
      let a = r.node(s);
      if (o.length) {
        o.forEach(i);
      }
      if (Object.hasOwn(a, "minRank")) {
        a.borderLeft = [];
        a.borderRight = [];
        for (let l = a.minRank, d = a.maxRank + 1; l < d; ++l) {
          n(r, "borderLeft", "_bl", s, a, l);
          n(r, "borderRight", "_br", s, a, l);
        }
      }
    }
    r.children().forEach(i);
  }
  function n(r, i, s, o, a, l) {
    let d = {
      width: 0,
      height: 0,
      rank: l,
      borderType: i,
    };
    let u = a[i][l - 1];
    let c = e.addDummyNode(r, "border", d, s);
    a[i][l] = c;
    r.setParent(c, o);
    if (u) {
      r.setEdge(u, c, {
        weight: 1,
      });
    }
  }
  return sr;
}
var ar;
var Xo;
function W0() {
  if (Xo) {
    return ar;
  }
  Xo = 1;
  ar = {
    adjust: e,
    undo: t,
  };
  function e(l) {
    let d = l.graph().rankdir.toLowerCase();
    if (d === "lr" || d === "rl") {
      n(l);
    }
  }
  function t(l) {
    let d = l.graph().rankdir.toLowerCase();
    if (d === "bt" || d === "rl") {
      i(l);
    }
    if (d === "lr" || d === "rl") {
      o(l);
      n(l);
    }
  }
  function n(l) {
    l.nodes().forEach((d) => r(l.node(d)));
    l.edges().forEach((d) => r(l.edge(d)));
  }
  function r(l) {
    let d = l.width;
    l.width = l.height;
    l.height = d;
  }
  function i(l) {
    l.nodes().forEach((d) => s(l.node(d)));
    l.edges().forEach((d) => {
      let u = l.edge(d);
      u.points.forEach(s);
      if (Object.hasOwn(u, "y")) {
        s(u);
      }
    });
  }
  function s(l) {
    l.y = -l.y;
  }
  function o(l) {
    l.nodes().forEach((d) => a(l.node(d)));
    l.edges().forEach((d) => {
      let u = l.edge(d);
      u.points.forEach(a);
      if (Object.hasOwn(u, "x")) {
        a(u);
      }
    });
  }
  function a(l) {
    let d = l.x;
    l.x = l.y;
    l.y = d;
  }
  return ar;
}
var cr;
var Uo;
function Y0() {
  if (Uo) {
    return cr;
  }
  Uo = 1;
  let e = ce();
  cr = t;
  function t(n) {
    let r = {};
    let i = n.nodes().filter((u) => !n.children(u).length);
    let s = i.map((u) => n.node(u).rank);
    let o = e.applyWithChunking(Math.max, s);
    let a = e.range(o + 1).map(() => []);
    function l(u) {
      if (r[u]) {
        return;
      }
      r[u] = true;
      let c = n.node(u);
      a[c.rank].push(u);
      n.successors(u).forEach(l);
    }
    i.sort((u, c) => n.node(u).rank - n.node(c).rank).forEach(l);
    return a;
  }
  return cr;
}
var lr;
var Ko;
function G0() {
  if (Ko) {
    return lr;
  }
  Ko = 1;
  let e = ce().zipObject;
  lr = t;
  function t(r, i) {
    let s = 0;
    for (let o = 1; o < i.length; ++o) {
      s += n(r, i[o - 1], i[o]);
    }
    return s;
  }
  function n(r, i, s) {
    let o = e(
      s,
      s.map((f, h) => h),
    );
    let a = i.flatMap((f) =>
      r
        .outEdges(f)
        .map((h) => ({
          pos: o[h.w],
          weight: r.edge(h).weight,
        }))
        .sort((h, p) => h.pos - p.pos),
    );
    let l = 1;
    while (l < s.length) {
      l <<= 1;
    }
    let d = l * 2 - 1;
    l -= 1;
    let u = new Array(d).fill(0);
    let c = 0;
    a.forEach((f) => {
      let h = f.pos + l;
      u[h] += f.weight;
      let p = 0;
      while (h > 0) {
        if (h % 2) {
          p += u[h + 1];
        }
        h = (h - 1) >> 1;
        u[h] += f.weight;
      }
      c += f.weight * p;
    });
    return c;
  }
  return lr;
}
var ur;
var Zo;
function X0() {
  if (Zo) {
    return ur;
  }
  Zo = 1;
  ur = e;
  function e(t, n = []) {
    return n.map((r) => {
      let i = t.inEdges(r);
      if (i.length) {
        let s = i.reduce(
          (o, a) => {
            let l = t.edge(a);
            let d = t.node(a.v);
            return {
              sum: o.sum + l.weight * d.order,
              weight: o.weight + l.weight,
            };
          },
          {
            sum: 0,
            weight: 0,
          },
        );
        return {
          v: r,
          barycenter: s.sum / s.weight,
          weight: s.weight,
        };
      } else {
        return {
          v: r,
        };
      }
    });
  }
  return ur;
}
var dr;
var Qo;
function U0() {
  if (Qo) {
    return dr;
  }
  Qo = 1;
  let e = ce();
  dr = t;
  function t(i, s) {
    let o = {};
    i.forEach((l, d) => {
      let u = (o[l.v] = {
        indegree: 0,
        in: [],
        out: [],
        vs: [l.v],
        i: d,
      });
      if (l.barycenter !== undefined) {
        u.barycenter = l.barycenter;
        u.weight = l.weight;
      }
    });
    s.edges().forEach((l) => {
      let d = o[l.v];
      let u = o[l.w];
      if (d !== undefined && u !== undefined) {
        u.indegree++;
        d.out.push(o[l.w]);
      }
    });
    let a = Object.values(o).filter((l) => !l.indegree);
    return n(a);
  }
  function n(i) {
    let s = [];
    function o(l) {
      return (d) => {
        if (!d.merged) {
          if (
            d.barycenter === undefined ||
            l.barycenter === undefined ||
            d.barycenter >= l.barycenter
          ) {
            r(l, d);
          }
        }
      };
    }
    function a(l) {
      return (d) => {
        d.in.push(l);
        if (--d.indegree === 0) {
          i.push(d);
        }
      };
    }
    while (i.length) {
      let l = i.pop();
      s.push(l);
      l.in.reverse().forEach(o(l));
      l.out.forEach(a(l));
    }
    return s
      .filter((l) => !l.merged)
      .map((l) => e.pick(l, ["vs", "i", "barycenter", "weight"]));
  }
  function r(i, s) {
    let o = 0;
    let a = 0;
    if (i.weight) {
      o += i.barycenter * i.weight;
      a += i.weight;
    }
    if (s.weight) {
      o += s.barycenter * s.weight;
      a += s.weight;
    }
    i.vs = s.vs.concat(i.vs);
    i.barycenter = o / a;
    i.weight = a;
    i.i = Math.min(s.i, i.i);
    s.merged = true;
  }
  return dr;
}
var fr;
var Jo;
function K0() {
  if (Jo) {
    return fr;
  }
  Jo = 1;
  let e = ce();
  fr = t;
  function t(i, s) {
    let o = e.partition(i, (p) => Object.hasOwn(p, "barycenter"));
    let a = o.lhs;
    let l = o.rhs.sort((p, v) => v.i - p.i);
    let d = [];
    let u = 0;
    let c = 0;
    let f = 0;
    a.sort(r(!!s));
    f = n(d, l, f);
    a.forEach((p) => {
      f += p.vs.length;
      d.push(p.vs);
      u += p.barycenter * p.weight;
      c += p.weight;
      f = n(d, l, f);
    });
    let h = {
      vs: d.flat(true),
    };
    if (c) {
      h.barycenter = u / c;
      h.weight = c;
    }
    return h;
  }
  function n(i, s, o) {
    let a;
    while (s.length && (a = s[s.length - 1]).i <= o) {
      s.pop();
      i.push(a.vs);
      o++;
    }
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
var hr;
var es;
function Z0() {
  if (es) {
    return hr;
  }
  es = 1;
  let e = X0();
  let t = U0();
  let n = K0();
  hr = r;
  function r(o, a, l, d) {
    let u = o.children(a);
    let c = o.node(a);
    let f = c ? c.borderLeft : undefined;
    let h = c ? c.borderRight : undefined;
    let p = {};
    if (f) {
      u = u.filter((x) => x !== f && x !== h);
    }
    let v = e(o, u);
    v.forEach((x) => {
      if (o.children(x.v).length) {
        let g = r(o, x.v, l, d);
        p[x.v] = g;
        if (Object.hasOwn(g, "barycenter")) {
          s(x, g);
        }
      }
    });
    let m = t(v, l);
    i(m, p);
    let y = n(m, d);
    if (f && ((y.vs = [f, y.vs, h].flat(true)), o.predecessors(f).length)) {
      let x = o.node(o.predecessors(f)[0]);
      let g = o.node(o.predecessors(h)[0]);
      if (!Object.hasOwn(y, "barycenter")) {
        y.barycenter = 0;
        y.weight = 0;
      }
      y.barycenter =
        (y.barycenter * y.weight + x.order + g.order) / (y.weight + 2);
      y.weight += 2;
    }
    return y;
  }
  function i(o, a) {
    o.forEach((l) => {
      l.vs = l.vs.flatMap((d) => (a[d] ? a[d].vs : d));
    });
  }
  function s(o, a) {
    if (o.barycenter !== undefined) {
      o.barycenter =
        (o.barycenter * o.weight + a.barycenter * a.weight) /
        (o.weight + a.weight);
      o.weight += a.weight;
    } else {
      o.barycenter = a.barycenter;
      o.weight = a.weight;
    }
  }
  return hr;
}
var pr;
var ts;
function Q0() {
  if (ts) {
    return pr;
  }
  ts = 1;
  let e = be().Graph;
  let t = ce();
  pr = n;
  function n(i, s, o, a) {
    a ||= i.nodes();
    let l = r(i);
    let d = new e({
      compound: true,
    })
      .setGraph({
        root: l,
      })
      .setDefaultNodeLabel((u) => i.node(u));
    a.forEach((u) => {
      let c = i.node(u);
      let f = i.parent(u);
      if (c.rank === s || (c.minRank <= s && s <= c.maxRank)) {
        d.setNode(u);
        d.setParent(u, f || l);
        i[o](u).forEach((h) => {
          let p = h.v === u ? h.w : h.v;
          let v = d.edge(p, u);
          let m = v !== undefined ? v.weight : 0;
          d.setEdge(p, u, {
            weight: i.edge(h).weight + m,
          });
        });
        if (Object.hasOwn(c, "minRank")) {
          d.setNode(u, {
            borderLeft: c.borderLeft[s],
            borderRight: c.borderRight[s],
          });
        }
      }
    });
    return d;
  }
  function r(i) {
    for (var s; i.hasNode((s = t.uniqueId("_root"))););
    return s;
  }
  return pr;
}
var gr;
var ns;
function J0() {
  if (ns) {
    return gr;
  }
  ns = 1;
  gr = e;
  function e(t, n, r) {
    let i = {};
    let s;
    r.forEach((o) => {
      let a = t.parent(o);
      let l;
      let d;
      while (a) {
        l = t.parent(a);
        if (l) {
          d = i[l];
          i[l] = a;
        } else {
          d = s;
          s = a;
        }
        if (d && d !== a) {
          n.setEdge(d, a);
          return;
        }
        a = l;
      }
    });
  }
  return gr;
}
var mr;
var rs;
function em() {
  if (rs) {
    return mr;
  }
  rs = 1;
  let e = Y0();
  let t = G0();
  let n = Z0();
  let r = Q0();
  let i = J0();
  let s = be().Graph;
  let o = ce();
  mr = a;
  function a(c, f) {
    if (f && typeof f.customOrder == "function") {
      f.customOrder(c, a);
      return;
    }
    let h = o.maxRank(c);
    let p = l(c, o.range(1, h + 1), "inEdges");
    let v = l(c, o.range(h - 1, -1, -1), "outEdges");
    let m = e(c);
    u(c, m);
    if (f && f.disableOptimalOrderHeuristic) {
      return;
    }
    let y = Number.POSITIVE_INFINITY;
    let x;
    for (let g = 0, w = 0; w < 4; ++g, ++w) {
      d(g % 2 ? p : v, g % 4 >= 2);
      m = o.buildLayerMatrix(c);
      let C = t(c, m);
      if (C < y) {
        w = 0;
        x = Object.assign({}, m);
        y = C;
      }
    }
    u(c, x);
  }
  function l(c, f, h) {
    const p = new Map();
    const v = (m, y) => {
      if (!p.has(m)) {
        p.set(m, []);
      }
      p.get(m).push(y);
    };
    for (const m of c.nodes()) {
      const y = c.node(m);
      if (typeof y.rank == "number") {
        v(y.rank, m);
      }
      if (typeof y.minRank == "number" && typeof y.maxRank == "number") {
        for (let x = y.minRank; x <= y.maxRank; x++) {
          if (x !== y.rank) {
            v(x, m);
          }
        }
      }
    }
    return f.map(function (m) {
      return r(c, m, h, p.get(m) || []);
    });
  }
  function d(c, f) {
    let h = new s();
    c.forEach(function (p) {
      let v = p.graph().root;
      let m = n(p, v, h, f);
      m.vs.forEach((y, x) => (p.node(y).order = x));
      i(p, h, m.vs);
    });
  }
  function u(c, f) {
    Object.values(f).forEach((h) => h.forEach((p, v) => (c.node(p).order = v)));
  }
  return mr;
}
var yr;
var is;
function tm() {
  if (is) {
    return yr;
  }
  is = 1;
  let e = be().Graph;
  let t = ce();
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
      let N = 0;
      let M = 0;
      let b = w.length;
      let S = C[C.length - 1];
      C.forEach((I, E) => {
        let k = i(m, I);
        let O = k ? m.node(k).order : b;
        if (k || I === S) {
          C.slice(M, E + 1).forEach((_) => {
            m.predecessors(_).forEach((T) => {
              let A = m.node(T);
              let D = A.order;
              if ((D < N || O < D) && (!A.dummy || !m.node(_).dummy)) {
                s(x, T, _);
              }
            });
          });
          M = E + 1;
          N = O;
        }
      });
      return C;
    }
    if (y.length) {
      y.reduce(g);
    }
    return x;
  }
  function r(m, y) {
    let x = {};
    function g(C, N, M, b, S) {
      let I;
      t.range(N, M).forEach((E) => {
        I = C[E];
        if (m.node(I).dummy) {
          m.predecessors(I).forEach((k) => {
            let O = m.node(k);
            if (O.dummy && (O.order < b || O.order > S)) {
              s(x, k, I);
            }
          });
        }
      });
    }
    function w(C, N) {
      let M = -1;
      let b;
      let S = 0;
      N.forEach((I, E) => {
        if (m.node(I).dummy === "border") {
          let k = m.predecessors(I);
          if (k.length) {
            b = m.node(k[0]).order;
            g(N, S, E, M, b);
            S = E;
            M = b;
          }
        }
        g(N, S, N.length, b, C.length);
      });
      return N;
    }
    if (y.length) {
      y.reduce(w);
    }
    return x;
  }
  function i(m, y) {
    if (m.node(y).dummy) {
      return m.predecessors(y).find((x) => m.node(x).dummy);
    }
  }
  function s(m, y, x) {
    if (y > x) {
      let w = y;
      y = x;
      x = w;
    }
    let g = m[y];
    if (!g) {
      m[y] = g = {};
    }
    g[x] = true;
  }
  function o(m, y, x) {
    if (y > x) {
      let g = y;
      y = x;
      x = g;
    }
    return !!m[y] && Object.hasOwn(m[y], x);
  }
  function a(m, y, x, g) {
    let w = {};
    let C = {};
    let N = {};
    y.forEach((M) => {
      M.forEach((b, S) => {
        w[b] = b;
        C[b] = b;
        N[b] = S;
      });
    });
    y.forEach((M) => {
      let b = -1;
      M.forEach((S) => {
        let I = g(S);
        if (I.length) {
          I = I.sort((k, O) => N[k] - N[O]);
          let E = (I.length - 1) / 2;
          for (let k = Math.floor(E), O = Math.ceil(E); k <= O; ++k) {
            let _ = I[k];
            if (C[S] === S && b < N[_] && !o(x, S, _)) {
              C[_] = S;
              C[S] = w[S] = w[_];
              b = N[_];
            }
          }
        }
      });
    });
    return {
      root: w,
      align: C,
    };
  }
  function l(m, y, x, g, w) {
    let C = {};
    let N = d(m, y, x, w);
    let M = w ? "borderLeft" : "borderRight";
    function b(E, k) {
      let O = N.nodes();
      let _ = O.pop();
      let T = {};
      while (_) {
        if (T[_]) {
          E(_);
        } else {
          T[_] = true;
          O.push(_);
          O = O.concat(k(_));
        }
        _ = O.pop();
      }
    }
    function S(E) {
      C[E] = N.inEdges(E).reduce((k, O) => Math.max(k, C[O.v] + N.edge(O)), 0);
    }
    function I(E) {
      let k = N.outEdges(E).reduce(
        (_, T) => Math.min(_, C[T.w] - N.edge(T)),
        Number.POSITIVE_INFINITY,
      );
      let O = m.node(E);
      if (k !== Number.POSITIVE_INFINITY && O.borderType !== M) {
        C[E] = Math.max(C[E], k);
      }
    }
    b(S, N.predecessors.bind(N));
    b(I, N.successors.bind(N));
    Object.keys(g).forEach((E) => (C[E] = C[x[E]]));
    return C;
  }
  function d(m, y, x, g) {
    let w = new e();
    let C = m.graph();
    let N = p(C.nodesep, C.edgesep, g);
    y.forEach((M) => {
      let b;
      M.forEach((S) => {
        let I = x[S];
        w.setNode(I);
        if (b) {
          var E = x[b];
          var k = w.edge(E, I);
          w.setEdge(E, I, Math.max(N(m, S, b), k || 0));
        }
        b = S;
      });
    });
    return w;
  }
  function u(m, y) {
    return Object.values(y).reduce(
      (x, g) => {
        let w = Number.NEGATIVE_INFINITY;
        let C = Number.POSITIVE_INFINITY;
        Object.entries(g).forEach(([M, b]) => {
          let S = v(m, M) / 2;
          w = Math.max(b + S, w);
          C = Math.min(b - S, C);
        });
        const N = w - C;
        if (N < x[0]) {
          x = [N, g];
        }
        return x;
      },
      [Number.POSITIVE_INFINITY, null],
    )[1];
  }
  function c(m, y) {
    let x = Object.values(y);
    let g = t.applyWithChunking(Math.min, x);
    let w = t.applyWithChunking(Math.max, x);
    ["u", "d"].forEach((C) => {
      ["l", "r"].forEach((N) => {
        let M = C + N;
        let b = m[M];
        if (b === y) {
          return;
        }
        let S = Object.values(b);
        let I = g - t.applyWithChunking(Math.min, S);
        if (N !== "l") {
          I = w - t.applyWithChunking(Math.max, S);
        }
        if (I) {
          m[M] = t.mapValues(b, (E) => E + I);
        }
      });
    });
  }
  function f(m, y) {
    return t.mapValues(m.ul, (x, g) => {
      if (y) {
        return m[y.toLowerCase()][g];
      }
      {
        let w = Object.values(m)
          .map((C) => C[g])
          .sort((C, N) => C - N);
        return (w[1] + w[2]) / 2;
      }
    });
  }
  function h(m) {
    let y = t.buildLayerMatrix(m);
    let x = Object.assign(n(m, y), r(m, y));
    let g = {};
    let w;
    ["u", "d"].forEach((N) => {
      w = N === "u" ? y : Object.values(y).reverse();
      ["l", "r"].forEach((M) => {
        if (M === "r") {
          w = w.map((E) => Object.values(E).reverse());
        }
        let b = (N === "u" ? m.predecessors : m.successors).bind(m);
        let S = a(m, w, x, b);
        let I = l(m, w, S.root, S.align, M === "r");
        if (M === "r") {
          I = t.mapValues(I, (E) => -E);
        }
        g[N + M] = I;
      });
    });
    let C = u(m, g);
    c(g, C);
    return f(g, m.graph().align);
  }
  function p(m, y, x) {
    return (g, w, C) => {
      let N = g.node(w);
      let M = g.node(C);
      let b = 0;
      let S;
      b += N.width / 2;
      if (Object.hasOwn(N, "labelpos")) {
        switch (N.labelpos.toLowerCase()) {
          case "l":
            S = -N.width / 2;
            break;
          case "r":
            S = N.width / 2;
            break;
        }
      }
      if (S) {
        b += x ? S : -S;
      }
      S = 0;
      b += (N.dummy ? y : m) / 2;
      b += (M.dummy ? y : m) / 2;
      b += M.width / 2;
      if (Object.hasOwn(M, "labelpos")) {
        switch (M.labelpos.toLowerCase()) {
          case "l":
            S = M.width / 2;
            break;
          case "r":
            S = -M.width / 2;
            break;
        }
      }
      if (S) {
        b += x ? S : -S;
      }
      S = 0;
      return b;
    };
  }
  function v(m, y) {
    return m.node(y).width;
  }
  return yr;
}
var xr;
var os;
function nm() {
  if (os) {
    return xr;
  }
  os = 1;
  let e = ce();
  let t = tm().positionX;
  xr = n;
  function n(i) {
    i = e.asNonCompoundGraph(i);
    r(i);
    Object.entries(t(i)).forEach(([s, o]) => (i.node(s).x = o));
  }
  function r(i) {
    let s = e.buildLayerMatrix(i);
    let o = i.graph().ranksep;
    let a = 0;
    s.forEach((l) => {
      const d = l.reduce((u, c) => {
        const f = i.node(c).height;
        if (u > f) {
          return u;
        } else {
          return f;
        }
      }, 0);
      l.forEach((u) => (i.node(u).y = a + d / 2));
      a += d + o;
    });
  }
  return xr;
}
var wr;
var ss;
function rm() {
  if (ss) {
    return wr;
  }
  ss = 1;
  let e = j0();
  let t = H0();
  let n = V0();
  let r = ce().normalizeRanks;
  let i = F0();
  let s = ce().removeEmptyRanks;
  let o = B0();
  let a = q0();
  let l = W0();
  let d = em();
  let u = nm();
  let c = ce();
  let f = be().Graph;
  wr = h;
  function h(P, L) {
    let j = L && L.debugTiming ? c.time : c.notime;
    j("layout", () => {
      let W = j("  buildLayoutGraph", () => b(P));
      j("  runLayout", () => p(W, j, L));
      j("  updateInputGraph", () => v(P, W));
    });
  }
  function p(P, L, j) {
    L("    makeSpaceForEdgeLabels", () => S(P));
    L("    removeSelfEdges", () => V(P));
    L("    acyclic", () => e.run(P));
    L("    nestingGraph.run", () => o.run(P));
    L("    rank", () => n(c.asNonCompoundGraph(P)));
    L("    injectEdgeLabelProxies", () => I(P));
    L("    removeEmptyRanks", () => s(P));
    L("    nestingGraph.cleanup", () => o.cleanup(P));
    L("    normalizeRanks", () => r(P));
    L("    assignRankMinMax", () => E(P));
    L("    removeEdgeLabelProxies", () => k(P));
    L("    normalize.run", () => t.run(P));
    L("    parentDummyChains", () => i(P));
    L("    addBorderSegments", () => a(P));
    L("    order", () => d(P, j));
    L("    insertSelfEdges", () => $(P));
    L("    adjustCoordinateSystem", () => l.adjust(P));
    L("    position", () => u(P));
    L("    positionSelfEdges", () => B(P));
    L("    removeBorderNodes", () => D(P));
    L("    normalize.undo", () => t.undo(P));
    L("    fixupEdgeLabelCoords", () => T(P));
    L("    undoCoordinateSystem", () => l.undo(P));
    L("    translateGraph", () => O(P));
    L("    assignNodeIntersects", () => _(P));
    L("    reversePoints", () => A(P));
    L("    acyclic.undo", () => e.undo(P));
  }
  function v(P, L) {
    P.nodes().forEach((j) => {
      let W = P.node(j);
      let G = L.node(j);
      if (W) {
        W.x = G.x;
        W.y = G.y;
        W.rank = G.rank;
        if (L.children(j).length) {
          W.width = G.width;
          W.height = G.height;
        }
      }
    });
    P.edges().forEach((j) => {
      let W = P.edge(j);
      let G = L.edge(j);
      W.points = G.points;
      if (Object.hasOwn(G, "x")) {
        W.x = G.x;
        W.y = G.y;
      }
    });
    P.graph().width = L.graph().width;
    P.graph().height = L.graph().height;
  }
  let m = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"];
  let y = {
    ranksep: 50,
    edgesep: 20,
    nodesep: 50,
    rankdir: "tb",
  };
  let x = ["acyclicer", "ranker", "rankdir", "align"];
  let g = ["width", "height", "rank"];
  let w = {
    width: 0,
    height: 0,
  };
  let C = ["minlen", "weight", "width", "height", "labeloffset"];
  let N = {
    minlen: 1,
    weight: 1,
    width: 0,
    height: 0,
    labeloffset: 10,
    labelpos: "r",
  };
  let M = ["labelpos"];
  function b(P) {
    let L = new f({
      multigraph: true,
      compound: true,
    });
    let j = F(P.graph());
    L.setGraph(Object.assign({}, y, q(j, m), c.pick(j, x)));
    P.nodes().forEach((W) => {
      let G = F(P.node(W));
      const H = q(G, g);
      Object.keys(w).forEach((Y) => {
        if (H[Y] === undefined) {
          H[Y] = w[Y];
        }
      });
      L.setNode(W, H);
      L.setParent(W, P.parent(W));
    });
    P.edges().forEach((W) => {
      let G = F(P.edge(W));
      L.setEdge(W, Object.assign({}, N, q(G, C), c.pick(G, M)));
    });
    return L;
  }
  function S(P) {
    let L = P.graph();
    L.ranksep /= 2;
    P.edges().forEach((j) => {
      let W = P.edge(j);
      W.minlen *= 2;
      if (W.labelpos.toLowerCase() !== "c") {
        if (L.rankdir === "TB" || L.rankdir === "BT") {
          W.width += W.labeloffset;
        } else {
          W.height += W.labeloffset;
        }
      }
    });
  }
  function I(P) {
    P.edges().forEach((L) => {
      let j = P.edge(L);
      if (j.width && j.height) {
        let W = P.node(L.v);
        let H = {
          rank: (P.node(L.w).rank - W.rank) / 2 + W.rank,
          e: L,
        };
        c.addDummyNode(P, "edge-proxy", H, "_ep");
      }
    });
  }
  function E(P) {
    let L = 0;
    P.nodes().forEach((j) => {
      let W = P.node(j);
      if (W.borderTop) {
        W.minRank = P.node(W.borderTop).rank;
        W.maxRank = P.node(W.borderBottom).rank;
        L = Math.max(L, W.maxRank);
      }
    });
    P.graph().maxRank = L;
  }
  function k(P) {
    P.nodes().forEach((L) => {
      let j = P.node(L);
      if (j.dummy === "edge-proxy") {
        P.edge(j.e).labelRank = j.rank;
        P.removeNode(L);
      }
    });
  }
  function O(P) {
    let L = Number.POSITIVE_INFINITY;
    let j = 0;
    let W = Number.POSITIVE_INFINITY;
    let G = 0;
    let H = P.graph();
    let Y = H.marginx || 0;
    let K = H.marginy || 0;
    function Q(U) {
      let X = U.x;
      let J = U.y;
      let te = U.width;
      let ne = U.height;
      L = Math.min(L, X - te / 2);
      j = Math.max(j, X + te / 2);
      W = Math.min(W, J - ne / 2);
      G = Math.max(G, J + ne / 2);
    }
    P.nodes().forEach((U) => Q(P.node(U)));
    P.edges().forEach((U) => {
      let X = P.edge(U);
      if (Object.hasOwn(X, "x")) {
        Q(X);
      }
    });
    L -= Y;
    W -= K;
    P.nodes().forEach((U) => {
      let X = P.node(U);
      X.x -= L;
      X.y -= W;
    });
    P.edges().forEach((U) => {
      let X = P.edge(U);
      X.points.forEach((J) => {
        J.x -= L;
        J.y -= W;
      });
      if (Object.hasOwn(X, "x")) {
        X.x -= L;
      }
      if (Object.hasOwn(X, "y")) {
        X.y -= W;
      }
    });
    H.width = j - L + Y;
    H.height = G - W + K;
  }
  function _(P) {
    P.edges().forEach((L) => {
      let j = P.edge(L);
      let W = P.node(L.v);
      let G = P.node(L.w);
      let H;
      let Y;
      if (j.points) {
        H = j.points[0];
        Y = j.points[j.points.length - 1];
      } else {
        j.points = [];
        H = G;
        Y = W;
      }
      j.points.unshift(c.intersectRect(W, H));
      j.points.push(c.intersectRect(G, Y));
    });
  }
  function T(P) {
    P.edges().forEach((L) => {
      let j = P.edge(L);
      if (Object.hasOwn(j, "x")) {
        if (j.labelpos === "l" || j.labelpos === "r") {
          j.width -= j.labeloffset;
        }
        switch (j.labelpos) {
          case "l":
            j.x -= j.width / 2 + j.labeloffset;
            break;
          case "r":
            j.x += j.width / 2 + j.labeloffset;
            break;
        }
      }
    });
  }
  function A(P) {
    P.edges().forEach((L) => {
      let j = P.edge(L);
      if (j.reversed) {
        j.points.reverse();
      }
    });
  }
  function D(P) {
    P.nodes().forEach((L) => {
      if (P.children(L).length) {
        let j = P.node(L);
        let W = P.node(j.borderTop);
        let G = P.node(j.borderBottom);
        let H = P.node(j.borderLeft[j.borderLeft.length - 1]);
        let Y = P.node(j.borderRight[j.borderRight.length - 1]);
        j.width = Math.abs(Y.x - H.x);
        j.height = Math.abs(G.y - W.y);
        j.x = H.x + j.width / 2;
        j.y = W.y + j.height / 2;
      }
    });
    P.nodes().forEach((L) => {
      if (P.node(L).dummy === "border") {
        P.removeNode(L);
      }
    });
  }
  function V(P) {
    P.edges().forEach((L) => {
      if (L.v === L.w) {
        var j = P.node(L.v);
        j.selfEdges ||= [];
        j.selfEdges.push({
          e: L,
          label: P.edge(L),
        });
        P.removeEdge(L);
      }
    });
  }
  function $(P) {
    var L = c.buildLayerMatrix(P);
    L.forEach((j) => {
      var W = 0;
      j.forEach((G, H) => {
        var Y = P.node(G);
        Y.order = H + W;
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
        });
        delete Y.selfEdges;
      });
    });
  }
  function B(P) {
    P.nodes().forEach((L) => {
      var j = P.node(L);
      if (j.dummy === "selfedge") {
        var W = P.node(j.e.v);
        var G = W.x + W.width / 2;
        var H = W.y;
        var Y = j.x - G;
        var K = W.height / 2;
        P.setEdge(j.e, j.label);
        P.removeNode(L);
        j.label.points = [
          {
            x: G + (Y * 2) / 3,
            y: H - K,
          },
          {
            x: G + (Y * 5) / 6,
            y: H - K,
          },
          {
            x: G + Y,
            y: H,
          },
          {
            x: G + (Y * 5) / 6,
            y: H + K,
          },
          {
            x: G + (Y * 2) / 3,
            y: H + K,
          },
        ];
        j.label.x = j.x;
        j.label.y = j.y;
      }
    });
  }
  function q(P, L) {
    return c.mapValues(c.pick(P, L), Number);
  }
  function F(P) {
    var L = {};
    if (P) {
      Object.entries(P).forEach(([j, W]) => {
        if (typeof j == "string") {
          j = j.toLowerCase();
        }
        L[j] = W;
      });
    }
    return L;
  }
  return wr;
}
var vr;
var as;
function im() {
  if (as) {
    return vr;
  }
  as = 1;
  let e = ce();
  let t = be().Graph;
  vr = {
    debugOrdering: n,
  };
  function n(r) {
    let i = e.buildLayerMatrix(r);
    let s = new t({
      compound: true,
      multigraph: true,
    }).setGraph({});
    r.nodes().forEach((o) => {
      s.setNode(o, {
        label: o,
      });
      s.setParent(o, "layer" + r.node(o).rank);
    });
    r.edges().forEach((o) => s.setEdge(o.v, o.w, {}, o.name));
    i.forEach((o, a) => {
      let l = "layer" + a;
      s.setNode(l, {
        rank: "same",
      });
      o.reduce((d, u) => {
        s.setEdge(d, u, {
          style: "invis",
        });
        return u;
      });
    });
    return s;
  }
  return vr;
}
var br;
var cs;
function om() {
  if (!cs) {
    cs = 1;
    br = "1.1.8";
  }
  return br;
}
var _r;
var ls;
function sm() {
  if (!ls) {
    ls = 1;
    _r = {
      graphlib: be(),
      layout: rm(),
      debug: im(),
      util: {
        time: ce().time,
        notime: ce().notime,
      },
      version: om(),
    };
  }
  return _r;
}
var us = sm();
const Ym = ({
  edges: e,
  errorLabel: t,
  nodeHeight: n,
  nodeSizes: r,
  nodes: i,
  nodeWidth: s,
}) => {
  const o = new us.graphlib.Graph();
  o.setGraph({
    rankdir: "LR",
    ranker: "tight-tree",
    nodesep: 44,
    edgesep: 18,
    ranksep: 96,
    marginx: 28,
    marginy: 28,
  });
  o.setDefaultEdgeLabel(() => ({}));
  const a = new Map();
  for (const f of i) {
    const h = (r == null ? undefined : r.get(f.id)) ?? {
      width: s,
      height: n,
    };
    a.set(f.id, h);
    o.setNode(f.id, h);
  }
  const l = new Set(i.map((f) => f.id));
  for (const f of e) {
    if (l.has(f.source) && l.has(f.target)) {
      o.setEdge(f.source, f.target);
    }
  }
  us.layout(o);
  const d = new Map();
  const u = new Map();
  for (const f of e) {
    d.set(f.target, (d.get(f.target) ?? 0) + 1);
    u.set(f.source, (u.get(f.source) ?? 0) + 1);
  }
  const c = new Map();
  for (const f of i) {
    const h = o.node(f.id);
    const p = a.get(f.id);
    if (!h || !p) {
      throw new Error(`${t} graph node '${f.id}' is missing its layout.`);
    }
    c.set(f.id, {
      x: h.x - p.width / 2,
      y: h.y - p.height / 2,
    });
  }
  return {
    incomingCounts: d,
    outgoingCounts: u,
    positions: c,
  };
};
const am =
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
    [n.breakpoints.down(1000)]: {
      width: e ? `${t}px` : "100%",
      minHeight: e ? 0 : "24rem",
    },
  });
const cm = (e) => (t) => ({
  flex: "0 0 auto",
  minHeight: "2.75rem",
  display: "flex",
  alignItems: "center",
  justifyContent: e ? "center" : "space-between",
  gap: t.spacing(0.35),
});
const lm = {
  flex: "0 0 auto",
  mr: 2,
};
const um = (e) => ({
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
  [e.breakpoints.down(1000)]: {
    display: "none",
  },
});
const dm = (e) => ({
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  padding: e.spacing(1.1),
  overflow: "hidden",
});
const fm = {
  flex: 1,
  minWidth: 0,
  minHeight: 0,
  overflow: "auto",
};
const hm = {
  flex: 1,
  minWidth: 0,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
};
const nt = (e) => ({
  flex: 1,
  minHeight: "14rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: e.spacing(1),
  padding: e.spacing(2),
  textAlign: "center",
});
const pm = (e) => ({
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  gap: e.spacing(0.8),
});
const gm = (e) => ({
  paddingBottom: e.spacing(0.2),
});
const mm = (e) => ({
  padding: e.spacing(1),
  borderRadius: e.shape.radiusSmPx,
});
const _Component34 = z.lazy(() =>
  dl(
    () => import("./PdfCanvasViewer-jW4Ex2Pm.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
  ).then((e) => ({
    default: e.PdfCanvasViewer,
  })),
);
const _Component40 = ({ writeupSource: e }) => {
  if (!e) {
    return (
      <_Component26 sx={nt}>
        <Gt variant="body2" color="textSecondary" align="center">
          No writeup source is available.
        </Gt>
      </_Component26>
    );
  }
  const t = `\`\`\`\`latex
${e}
\`\`\`\``;
  return (
    <_Component26 sx={fm}>
      <_Component27 content={t} showCodeCopyButton={true} />
    </_Component26>
  );
};
const _Component41 = ({
  isPdfPreparing: e,
  isPdfReady: t,
  pdfCompileError: n = null,
  pdfUrl: r = null,
  onPreparePdf: i,
}) =>
  e ? (
    <_Component26 sx={nt}>
      <_Component28 size={28} />
      <Gt variant="body2" color="textSecondary" align="center">
        Preparing compiled PDF.
      </Gt>
    </_Component26>
  ) : t && r ? (
    <_Component29 pdfUrl={r} />
  ) : n ? (
    <_Component26 sx={hm}>
      <_Component30 severity="error" variant="outlined">
        {n}
      </_Component30>
      <_Component26 sx={nt}>
        <_Component32 onClick={i} endIcon={<_Component31 />}>
          Retry PDF compile
        </_Component32>
      </_Component26>
    </_Component26>
  ) : (
    <_Component26 sx={nt}>
      <Gt variant="body2" color="textSecondary" align="center">
        No PDF preview is available.
      </Gt>
      <_Component32 onClick={i} endIcon={<_Component31 />}>
        Compile PDF
      </_Component32>
    </_Component26>
  );
const _Component29 = ({ pdfUrl: e }) => {
  const [t, n] = z.useState(1);
  const [r, i] = z.useState(di);
  const [s, o] = z.useState(null);
  const a = s !== null;
  z.useEffect(() => {
    n(1);
    i(di);
    o(null);
  }, [e]);
  return (
    <_Component26 sx={pm}>
      <_Component33
        isReady={a}
        page={t}
        pageCount={s}
        pdfUrl={e}
        showPageLabel={true}
        sx={gm}
        zoom={r}
        onPageChange={n}
        onZoomChange={i}
      />
      <z.Suspense
        fallback={
          <_Component26 sx={nt}>
            <_Component28 size={28} />
          </_Component26>
        }
      >
        <_Component34
          ariaLabel="Compiled writeup PDF page preview"
          loadErrorMessage="Could not load compiled writeup PDF."
          page={t}
          pdfUrl={e}
          renderErrorMessage="Could not render compiled writeup PDF preview."
          scale={r / 100}
          stateSx={nt}
          sx={mm}
          onPageChange={n}
          onPageCountChange={o}
        />
      </z.Suspense>
    </_Component26>
  );
};
const Gm = ({
  isOpen: e,
  messageIndex: t,
  readOnly: n = false,
  sourceTitle: r = "LaTeX source",
  writeupSource: i,
}) => {
  const [s, o] = z.useState("writeupSource");
  const [a, l] = z.useState(false);
  const { width: d, resizeHandleProps: u } = fl({
    storageKey: E0,
    defaultWidth: w0,
    minWidth: v0,
    maxWidth: b0,
    resizeEdge: "right",
  });
  const c = i.trim();
  const f = !n && a;
  const h = n ? "writeupSource" : s;
  const p = f ? _0 : d;
  const {
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
  });
  const w = z.useCallback(
    (M = true) => {
      g({
        forceCompile: M,
        showErrorToast: false,
      });
    },
    [g],
  );
  const C = z.useCallback(
    (M, b) => {
      o(b);
      if (b === "compiledPdf") {
        w(false);
      }
    },
    [w],
  );
  const N = z.useCallback(() => {
    const M = a && s === "compiledPdf";
    l(!a);
    if (M) {
      w(false);
    }
  }, [a, w, s]);
  return (
    <_Component26
      sx={am({
        isCollapsed: f,
        width: p,
      })}
    >
      <_Component26 sx={cm(f)}>
        {n && (
          <Gt variant="subtitle2" noWrap={true}>
            {r}
          </Gt>
        )}
        {!n && !f && (
          <_Component36
            value={h}
            variant="fullWidth"
            aria-label="Math-harness writeup preview"
            onChange={C}
            sx={{
              p: 0,
              m: 1,
            }}
          >
            <_Component35
              disableRipple={true}
              value="writeupSource"
              label="Writeup source"
              id="math-harness-writeup-source-tab"
              aria-controls="math-harness-writeup-source-panel"
            />
            <_Component35
              disableRipple={true}
              value="compiledPdf"
              label="Compiled PDF"
              id="math-harness-compiled-pdf-tab"
              aria-controls="math-harness-compiled-pdf-panel"
            />
          </_Component36>
        )}
        {!n && (
          <_Component39
            tooltip={f ? "Expand writeup preview" : "Collapse writeup preview"}
            aria-label={
              f ? "Expand writeup preview" : "Collapse writeup preview"
            }
            aria-expanded={!f}
            size="small"
            sx={{
              ...(f
                ? {}
                : {
                    mr: 2,
                  }),
              ...lm,
            }}
            onClick={N}
          >
            {f ? <_Component37 size={18} /> : <_Component38 size={18} />}
          </_Component39>
        )}
      </_Component26>
      {f ? null : (
        <R.Fragment>
          <_Component26
            sx={dm}
            role="tabpanel"
            aria-label={n ? r : undefined}
            id={
              h === "writeupSource"
                ? "math-harness-writeup-source-panel"
                : "math-harness-compiled-pdf-panel"
            }
            aria-labelledby={
              !n && h === "writeupSource"
                ? "math-harness-writeup-source-tab"
                : n
                  ? undefined
                  : "math-harness-compiled-pdf-tab"
            }
          >
            {h === "writeupSource" ? (
              <_Component40 writeupSource={c} />
            ) : (
              <_Component41
                isPdfPreparing={v}
                isPdfReady={m}
                pdfCompileError={y}
                pdfUrl={x}
                onPreparePdf={() => {
                  w();
                }}
              />
            )}
          </_Component26>
          {!n && (
            <_Component26
              aria-label="Resize writeup preview panel"
              {...u}
              sx={um}
            />
          )}
        </R.Fragment>
      )}
    </_Component26>
  );
};
const Xm = (e) => ({
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
});
const Um = (e) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: e.spacing(1),
});
const Km = {
  minWidth: 0,
};
const Zm = (e) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: e.spacing(0.8),
  [e.breakpoints.down(520)]: {
    gridTemplateColumns: "1fr",
  },
});
const Qm = (e) => ({
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: e.spacing(0.25),
  padding: e.spacing(0.9, 1),
  border: `1px solid ${re(e.palette.text.primary, 0.08)}`,
  borderRadius: e.shape.radiusSmPx,
  backgroundColor: re(e.palette.text.primary, 0.025),
});
const Jm = (e) => ({
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: e.spacing(0.75),
});
const ey = (e) => ({
  minWidth: 0,
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) auto",
  alignItems: "center",
  gap: e.spacing(1),
  padding: e.spacing(0.85, 1),
  border: `1px solid ${re(e.palette.text.primary, 0.08)}`,
  borderRadius: e.shape.radiusSmPx,
  backgroundColor: re(e.palette.text.primary, 0.025),
});
const ty = (e) => ({
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: e.spacing(0.4),
  padding: e.spacing(0.9, 1),
  border: `1px solid ${re(e.palette.text.primary, 0.08)}`,
  borderRadius: e.shape.radiusSmPx,
  backgroundColor: re(e.palette.text.primary, 0.025),
});
const ny = (e) => ({
  width: "min(96rem, calc(100vw - 2rem))",
  height: "min(54rem, calc(100dvh - 2rem))",
  maxWidth: "none",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  borderRadius: e.shape.radiusLgPx,
});
const ry = (e) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: e.spacing(1.4),
  padding: e.spacing(1.7, 2),
  borderBottom: `1px solid ${re(e.palette.text.primary, 0.08)}`,
});
const iy = {
  minWidth: 0,
};
const oy = (e) => ({
  display: "flex",
  alignItems: "center",
  gap: e.spacing(0.8),
  flexWrap: "wrap",
  justifyContent: "flex-end",
});
const sy = (e) => ({
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
    "0%, 100%": {
      transform: "scale(1)",
      boxShadow: `0 0 0 0 ${re(e.palette.info.main, 0.44)}`,
    },
    "58%": {
      transform: "scale(1.12)",
      boxShadow: `0 0 0 0.42rem ${re(e.palette.info.main, 0)}`,
    },
  },
  "@keyframes mathHarnessActiveRunBadgeRing": {
    "0%": {
      opacity: 0.62,
      transform: "scale(0.72)",
    },
    "70%, 100%": {
      opacity: 0,
      transform: "scale(1.65)",
    },
  },
  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",
    boxShadow: `0 0 0 0.22rem ${re(e.palette.info.main, 0.18)}`,
    "&::after": {
      display: "none",
    },
  },
});
const ay =
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
    [t.breakpoints.down(1000)]: {
      gridTemplateColumns: "minmax(0, 1fr)",
    },
  });
const cy = (e) => ({
  minWidth: 0,
  minHeight: "24rem",
  overflow: "hidden",
  border: `1px solid ${re(e.palette.text.primary, 0.08)}`,
  borderRadius: e.shape.borderRadiusPx,
  backgroundColor: re(e.palette.background.paper, 0.78),
  "& .react-flow__pane": {
    cursor: "grab",
  },
  "& .react-flow__pane.dragging": {
    cursor: "grabbing",
  },
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
});
const ly = (e) => ({
  minWidth: 0,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  gap: e.spacing(1.2),
  overflow: "hidden",
});
const uy = (e) => ({
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
  _Component4 as H,
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
