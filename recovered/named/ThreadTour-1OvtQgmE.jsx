var Kn = Object.defineProperty;
var Xn = (t, e, n) =>
  e in t
    ? Kn(t, e, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: n,
      })
    : (t[e] = n);
var G = (t, e, n) => Xn(t, typeof e != "symbol" ? e + "" : e, n);
import {
  E as Jn,
  r as g,
  bM as Zn,
  aT as ee,
  aZ as pn,
  R as I,
  g as J,
  j as H,
  bN as Qn,
  _ as Dt,
  S as _Component,
  T as _Component2,
  aw as mn,
} from "./index-BM3ZINIl.js";
import { u as tr, a as er } from "./useIsMobile-SdtLFChL.js";
import { a3 as _Component5, a4 as Me } from "./ChatPanelMoreMenu-B1X9SOWN.js";
import { P as _Component9 } from "./play-3zl_nde-.js";
import { C as _Component6 } from "./MChip-DiH8NXBU.js";
import { A as _Component7 } from "./arrow-right-DvMAP92m.js";
import { a as _Component3 } from "./LoadingSection-wWBu2CqJ.js";
import { D as _Component4 } from "./Divider-BcuihGce.js";
import {
  h as W,
  T as V,
  b as ar,
  j as lr,
} from "./ThinkingElapsedLabel-DKCKD95O.js";
import "./useMutation-C1SgG9wr.js";
import "./chatsApi-Ck-JYICO.js";
import "./chatQueryCache-DOdNJrP_.js";
import "./threadMessageListLazy-ghC-RLRq.js";
import "./useQuery-DM2qiUYb.js";
import "./streamNdjson-sRiOwtSP.js";
import "./authFetch-DXjDztUP.js";
import "./useInfiniteQuery-CdNTitqC.js";
import "./MarkdownHighlights-C-ZhT8z1.js";
import "./TextField-D8vc_sXz.js";
import "./index-Yb6ONXKu.js";
import "./FormControlLabel-CQvCddOM.js";
import "./OpenInNewRounded-D-7V5TzF.js";
import "./ListItemText-CBxudZz_.js";
import "./ChatInteractionOverrides-dyfOoEnd.js";
import "./DebouncedTextField-DEJkKI5N.js";
import "./useGetUserType-DlzkERhz.js";
import "./Alert-DnFVD8li.js";
import "./search-CE89ACSU.js";
import "./WorkspaceSidePanelFrame-BElEFQhq.js";
import "./useResizablePanelWidth-DfMwOMGi.js";
import "./useResizablePanelValue-D_NwbF9E.js";
import "./LogoutRounded-BsETu1qq.js";
import "./LinkOffRounded-CKGtm4_4.js";
import "./attachmentsApi-BHgxfYft.js";
import "./ListItemIcon-CaLBil7Q.js";
import "./AlertTitle-B2wnIUF2.js";
import "./SidebarTreeConnector-DsRNfBIo.js";
import "./file-code-corner-DV79SyC0.js";
import "./chatMessageSelectors-CRUAC26Y.js";
import "./Badge-b-klHfWK.js";
import "./cache-BNzcfneg.js";
import "./circle-DSozMRKK.js";
import "./FormGroup-BsLWbxpH.js";
import "./TimeRelative-HYP_-RcH.js";
import "./panel-left-close-BNWX01EL.js";
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ur = [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay",
    },
  ],
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1",
    },
  ],
];
const _Component8 = Jn("compass", ur);
function gn(t) {
  return (e) => typeof e === t;
}
var dr = gn("function");
var pr = (t) => t === null;
var Fe = (t) => Object.prototype.toString.call(t).slice(8, -1) === "RegExp";
var je = (t) => !mr(t) && !pr(t) && (dr(t) || typeof t == "object");
var mr = gn("undefined");
function gr(t, e, n) {
  if (xr(n, t, e)) {
    return true;
  } else {
    Sr(n, t, e);
    if (t.constructor !== e.constructor) {
      return false;
    } else if (Array.isArray(t) && Array.isArray(e)) {
      return hr(t, e, n);
    } else if (t instanceof Map && e instanceof Map) {
      return wr(t, e, n);
    } else if (t instanceof Set && e instanceof Set) {
      return Tr(t, e);
    } else if (t instanceof WeakMap || t instanceof WeakSet) {
      return false;
    } else if (ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
      return yr(t, e);
    } else if (Fe(t) && Fe(e)) {
      return t.source === e.source && t.flags === e.flags;
    } else if (t instanceof Error && e instanceof Error) {
      return br(t, e, n);
    } else if (t.valueOf !== Object.prototype.valueOf) {
      return t.valueOf() === e.valueOf();
    } else if (t.toString !== Object.prototype.toString) {
      return t.toString() === e.toString();
    } else {
      return Er(t, e, n);
    }
  }
}
function Ft(t, e, n) {
  if (t === e || (Number.isNaN(t) && Number.isNaN(e))) {
    return true;
  } else if (!t || !je(t) || !e || !je(e)) {
    return false;
  } else {
    return gr(t, e, n);
  }
}
function hr(t, e, n) {
  const { length: r } = t;
  if (r !== e.length) {
    return false;
  }
  for (let o = r; o-- !== 0;) {
    if (!Ft(t[o], e[o], n)) {
      return false;
    }
  }
  return true;
}
function yr(t, e) {
  if (t.byteLength !== e.byteLength) {
    return false;
  }
  const n = new DataView(t.buffer);
  const r = new DataView(e.buffer);
  let o = t.byteLength;
  while (o--) {
    if (n.getUint8(o) !== r.getUint8(o)) {
      return false;
    }
  }
  return true;
}
function br(t, e, n) {
  return (
    t.message === e.message && t.name === e.name && Ft(t.cause, e.cause, n)
  );
}
function wr(t, e, n) {
  if (t.size !== e.size) {
    return false;
  }
  for (const r of t.entries()) {
    if (!e.has(r[0])) {
      return false;
    }
  }
  for (const r of t.entries()) {
    if (!Ft(r[1], e.get(r[0]), n)) {
      return false;
    }
  }
  return true;
}
function Er(t, e, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) {
    return false;
  }
  for (let o = r.length; o-- !== 0;) {
    if (!Object.prototype.hasOwnProperty.call(e, r[o])) {
      return false;
    }
  }
  for (let o = r.length; o-- !== 0;) {
    const i = r[o];
    if ((i !== "_owner" || !t.$$typeof) && !Ft(t[i], e[i], n)) {
      return false;
    }
  }
  return true;
}
function Tr(t, e) {
  if (t.size !== e.size) {
    return false;
  }
  for (const n of t.entries()) {
    if (!e.has(n[0])) {
      return false;
    }
  }
  return true;
}
function xr(t, e, n) {
  var r;
  return ((r = t.get(e)) == null ? undefined : r.has(n)) ?? false;
}
function Sr(t, e, n) {
  let r = t.get(e);
  if (!r) {
    r = new WeakSet();
    t.set(e, r);
  }
  r.add(n);
}
function Te(t, e) {
  return Ft(t, e, new WeakMap());
}
function ae() {
  var t;
  return (
    typeof window !== "undefined" &&
    (t = window == null ? undefined : window.document) != null &&
    !!t.createElement
  );
}
function Or(t, ...e) {
  if (t && t.removeEventListener) {
    t.removeEventListener(...e);
  }
}
function Rr(t, ...e) {
  if (t && t.addEventListener) {
    t.addEventListener(...e);
  }
}
function vr() {
  const t = g.useRef(true);
  if (t.current) {
    t.current = false;
    return true;
  } else {
    return t.current;
  }
}
function Cr(t, e) {
  const n = vr();
  g.useEffect(() => {
    if (!n) {
      return t();
    }
  }, e);
}
function hn(t) {
  const e = g.useRef(undefined);
  g.useEffect(() => {
    e.current = t;
  });
  return e.current;
}
function Pr(t, e) {
  const n = g.useRef(e);
  if (!Te(e, n.current)) {
    n.current = e;
  }
  return g.useMemo(t, n.current);
}
function Ar(t) {
  g.useEffect(() => {
    t();
  }, []);
}
function kr(t = 0) {
  const [e, n] = g.useState({
    height: ae() ? window.innerHeight : 0,
    width: ae() ? window.innerWidth : 0,
  });
  const r = g.useRef(0);
  const o = g.useRef(() => {
    window.clearTimeout(r.current);
    r.current = window.setTimeout(() => {
      n({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, t);
  });
  g.useEffect(() => {
    if (!ae()) {
      return () => {};
    }
    const i = o.current;
    n({
      height: window.innerHeight,
      width: window.innerWidth,
    });
    Rr(window, "resize", i);
    return () => {
      Or(window, "resize", i);
    };
  }, []);
  return e;
}
var Lr = Zn();
var Nr = [
  "Array",
  "ArrayBuffer",
  "AsyncFunction",
  "AsyncGenerator",
  "AsyncGeneratorFunction",
  "Date",
  "Error",
  "Function",
  "Generator",
  "GeneratorFunction",
  "HTMLElement",
  "Map",
  "Object",
  "Promise",
  "RegExp",
  "Set",
  "URL",
  "WeakMap",
  "WeakSet",
];
var Ir = [
  "bigint",
  "boolean",
  "null",
  "number",
  "string",
  "symbol",
  "undefined",
];
function jt(t) {
  const e = Object.prototype.toString.call(t).slice(8, -1);
  if (/HTML\w+Element/.test(e)) {
    return "HTMLElement";
  }
  if (Dr(e)) {
    return e;
  }
}
function ot(t) {
  return (e) => jt(e) === t;
}
function Dr(t) {
  return Nr.includes(t);
}
function Ct(t) {
  return (e) => typeof e === t;
}
function _r(t) {
  return Ir.includes(t);
}
var Mr = ["innerHTML", "ownerDocument", "style", "attributes", "nodeValue"];
var Bt = (t) => Array.isArray(t);
var Fr = (t) => jt(t) === "AsyncGeneratorFunction";
var jr = ot("AsyncFunction");
var Br = Ct("bigint");
var $r = (t) => t === true || t === false;
var Hr = ot("Date");
var Ur = ot("Error");
var yt = Ct("function");
var zr = ot("GeneratorFunction");
var Wr = (t) => typeof t == "number" && Number.isInteger(t);
var he = ot("Map");
var yn = (t) => Number.isNaN(t);
var xe = (t) => t === null;
var bn = ot("Function");
var Vr = ot("Promise");
var Gr = ot("RegExp");
var ye = ot("Set");
var $t = Ct("string");
var qr = Ct("symbol");
var Se = Ct("undefined");
var Yr = ot("WeakMap");
var Kr = ot("WeakSet");
var Oe = (t) => xe(t) || Se(t);
var wn = (t) => !Se(t);
var Xr = (t) => Ct("number")(t) && !yn(t);
var Jr = (t) => $t(t) && t.trim().length > 0;
var Zr = (t) => {
  if (!$t(t) || t.length === 0) {
    return false;
  }
  const e = t.trim();
  return e.length > 0 && Number.isFinite(Number(e));
};
var ne = (t) => !Oe(t) && (yt(t) || typeof t == "object");
var En = (t) => {
  if (jt(t) !== "Object") {
    return false;
  }
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.getPrototypeOf({});
};
var Qr = (t) => xe(t) || _r(typeof t);
var to = (t) => jt(t) === "URL";
var Tn = (t) => !Oe(t) && yt(t[Symbol.iterator]);
var eo = (t) => Tn(t) && yt(t.next) && yt(t.throw);
var no = (t) => yt(t) && /^class\s/.test(t.toString());
var ro = (t, e) => (!Bt(t) || !yt(e) ? false : t.every((n) => e(n)));
var oo = (t) =>
  ne(t) &&
  !En(t) &&
  t.nodeType === 1 &&
  $t(t.nodeName) &&
  Mr.every((e) => e in t);
var io = (t) =>
  ($t(t) && t.length === 0) ||
  (Bt(t) && t.length === 0) ||
  (ne(t) && !he(t) && !ye(t) && Object.keys(t).length === 0) ||
  (ye(t) && t.size === 0) ||
  (he(t) && t.size === 0);
var so = (t, e) =>
  !t || !e ? false : Object.getPrototypeOf(t) === e.prototype;
var co = (t, e) => (Bt(t) ? t.indexOf(e) > -1 : false);
var ao = (t, e, n) => {
  if (!ne(t) || !e) {
    return false;
  }
  const r = t[e];
  if (yt(n)) {
    return n(r);
  } else {
    return wn(r);
  }
};
function j(t) {
  if (t === null) {
    return "null";
  }
  switch (typeof t) {
    case "bigint":
      return "bigint";
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "string":
      return "string";
    case "symbol":
      return "symbol";
    case "undefined":
      return "undefined";
  }
  if (Bt(t)) {
    return "Array";
  }
  if (bn(t)) {
    return "Function";
  }
  const e = jt(t);
  return e || "Object";
}
j.array = Bt;
j.arrayOf = ro;
j.asyncGeneratorFunction = Fr;
j.asyncFunction = jr;
j.bigint = Br;
j.boolean = $r;
j.class = no;
j.date = Hr;
j.defined = wn;
j.domElement = oo;
j.empty = io;
j.error = Ur;
j.function = yt;
j.generator = eo;
j.generatorFunction = zr;
j.instanceOf = so;
j.integer = Wr;
j.iterable = Tn;
j.map = he;
j.nan = yn;
j.null = xe;
j.nullOrUndefined = Oe;
j.nonEmptyString = Jr;
j.number = Xr;
j.numericString = Zr;
j.object = ne;
j.oneOf = co;
j.plainFunction = bn;
j.plainObject = En;
j.primitive = Qr;
j.promise = Vr;
j.propertyOf = ao;
j.regexp = Gr;
j.set = ye;
j.string = $t;
j.symbol = qr;
j.undefined = Se;
j.url = to;
j.weakMap = Yr;
j.weakSet = Kr;
var X = j;
/* v8 ignore next -- @preserve */
var le;
var Be;
function lo() {
  if (Be) {
    return le;
  }
  Be = 1;
  function t(r) {
    return Object.prototype.hasOwnProperty.call(r, "props");
  }
  function e(r, o) {
    return r + n(o);
  }
  function n(r) {
    if (r === null || typeof r == "boolean" || typeof r === "undefined") {
      return "";
    } else if (typeof r == "number") {
      return r.toString();
    } else if (typeof r == "string") {
      return r;
    } else if (Array.isArray(r)) {
      return r.reduce(e, "");
    } else if (
      t(r) &&
      Object.prototype.hasOwnProperty.call(r.props, "children")
    ) {
      return n(r.props.children);
    } else {
      return "";
    }
  }
  n.default = n;
  le = n;
  return le;
}
var uo = lo();
const ue = ee(uo);
var fe = {
  exports: {},
};
var $e;
function fo() {
  if (!$e) {
    $e = 1;
    (function (t) {
      const e = Object.getPrototypeOf({});
      function n() {
        return function (i) {
          return (
            typeof i == "object" &&
            i !== null &&
            !(i instanceof RegExp) &&
            !(i instanceof Date)
          );
        };
      }
      function r(o) {
        function i(b) {
          return b !== "constructor" && b !== "prototype" && b !== "__proto__";
        }
        function s(b) {
          let E = 0;
          const v = b.length;
          const P = new Array(v);
          for (E; E < v; ++E) {
            P[E] = d(b[E]);
          }
          return P;
        }
        function a(b) {
          const E = {};
          if (u && Object.getPrototypeOf(b) !== e) {
            return u(b);
          }
          const v = l(b);
          let P;
          let _;
          let L;
          P = 0;
          _ = v.length;
          for (; P < _; ++P) {
            if (i((L = v[P]))) {
              E[L] = d(b[L]);
            }
          }
          return E;
        }
        function c(b, E) {
          const v = b.length;
          const P = E.length;
          let _ = 0;
          const L = new Array(v + P);
          for (_; _ < v; ++_) {
            L[_] = d(b[_]);
          }
          for (_ = 0; _ < P; ++_) {
            L[_ + v] = d(E[_]);
          }
          return L;
        }
        const f = Object.prototype.propertyIsEnumerable;
        function m(b) {
          const E = Object.keys(b);
          const v = Object.getOwnPropertySymbols(b);
          for (let P = 0, _ = v.length; P < _; ++P) {
            if (f.call(b, v[P])) {
              E.push(v[P]);
            }
          }
          return E;
        }
        const l = o != null && o.symbols ? m : Object.keys;
        const u =
          typeof (o == null ? undefined : o.cloneProtoObject) == "function"
            ? o.cloneProtoObject
            : undefined;
        const p =
          typeof (o == null ? undefined : o.isMergeableObject) == "function"
            ? o.isMergeableObject
            : n();
        const h = (o == null ? undefined : o.onlyDefinedProperties) === true;
        function T(b) {
          return typeof b != "object" || b === null;
        }
        const S =
          o && typeof o.mergeArray == "function"
            ? o.mergeArray({
                clone: d,
                deepmerge: w,
                getKeys: l,
                isMergeableObject: p,
              })
            : c;
        function d(b) {
          if (p(b)) {
            if (Array.isArray(b)) {
              return s(b);
            } else {
              return a(b);
            }
          } else {
            return b;
          }
        }
        function y(b, E) {
          const v = {};
          const P = l(b);
          const _ = l(E);
          let L;
          let C;
          let x;
          L = 0;
          C = P.length;
          for (; L < C; ++L) {
            if (i((x = P[L])) && _.indexOf(x) === -1) {
              v[x] = d(b[x]);
            }
          }
          L = 0;
          C = _.length;
          for (; L < C; ++L) {
            if (i((x = _[L]))) {
              if (x in b) {
                if (P.indexOf(x) !== -1) {
                  if (u && p(E[x]) && Object.getPrototypeOf(E[x]) !== e) {
                    v[x] = u(E[x]);
                  } else {
                    v[x] = w(b[x], E[x]);
                  }
                }
              } else {
                if (h && typeof E[x] === "undefined") {
                  continue;
                }
                v[x] = d(E[x]);
              }
            }
          }
          return v;
        }
        function w(b, E) {
          if (h && typeof E === "undefined") {
            return d(b);
          }
          const v = Array.isArray(E);
          const P = Array.isArray(b);
          if (T(E)) {
            return E;
          } else if (p(b)) {
            if (v && P) {
              return S(b, E);
            } else if (v !== P) {
              return d(E);
            } else {
              return y(b, E);
            }
          } else {
            return d(E);
          }
        }
        function O() {
          switch (arguments.length) {
            case 0:
              return {};
            case 1:
              return d(arguments[0]);
            case 2:
              return w(arguments[0], arguments[1]);
          }
          let b;
          for (let E = 0, v = arguments.length; E < v; ++E) {
            b = w(b, arguments[E]);
          }
          return b;
        }
        if (o != null && o.all) {
          return O;
        } else {
          return w;
        }
      }
      t.exports = r;
      t.exports.default = r;
      t.exports.deepmerge = r;
      Object.defineProperty(t.exports, "isMergeableObject", {
        get: n,
      });
    })(fe);
  }
  return fe.exports;
}
var po = fo();
const mo = ee(po);
var de;
var He;
function go() {
  if (He) {
    return de;
  }
  He = 1;
  var t = new Error("Element already at target scroll position");
  var e = new Error("Scroll cancelled");
  var n = Math.min;
  var r = Date.now;
  de = {
    left: o("scrollLeft"),
    top: o("scrollTop"),
  };
  function o(a) {
    return function (f, m, l, u) {
      l = l || {};
      if (typeof l == "function") {
        u = l;
        l = {};
      }
      if (typeof u != "function") {
        u = s;
      }
      var p = r();
      var h = f[a];
      var T = l.ease || i;
      var S = isNaN(l.duration) ? 350 : +l.duration;
      var d = false;
      if (h === m) {
        u(t, f[a]);
      } else {
        requestAnimationFrame(w);
      }
      return y;
      function y() {
        d = true;
      }
      function w(O) {
        if (d) {
          return u(e, f[a]);
        }
        var b = r();
        var E = n(1, (b - p) / S);
        var v = T(E);
        f[a] = v * (m - h) + h;
        if (E < 1) {
          requestAnimationFrame(w);
        } else {
          requestAnimationFrame(function () {
            u(null, f[a]);
          });
        }
      }
    };
  }
  function i(a) {
    return (1 - Math.cos(Math.PI * a)) * 0.5;
  }
  function s() {}
  return de;
}
var ho = go();
const yo = ee(ho);
var qt = {
  exports: {},
};
var bo = qt.exports;
var Ue;
function wo() {
  if (!Ue) {
    Ue = 1;
    (function (t) {
      (function (e, n) {
        if (t.exports) {
          t.exports = n();
        } else {
          e.Scrollparent = n();
        }
      })(bo, function () {
        function e(r) {
          var o = getComputedStyle(r, null).getPropertyValue("overflow");
          return o.indexOf("scroll") > -1 || o.indexOf("auto") > -1;
        }
        function n(r) {
          if (r instanceof HTMLElement || r instanceof SVGElement) {
            for (var o = r.parentNode; o.parentNode;) {
              if (e(o)) {
                return o;
              }
              o = o.parentNode;
            }
            return document.scrollingElement || document.documentElement;
          }
        }
        return n;
      });
    })(qt);
  }
  return qt.exports;
}
var Eo = wo();
const xn = ee(Eo);
const To = ["top", "right", "bottom", "left"];
const We = To.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
const Rt = Math.min;
const Et = Math.max;
const Kt = Math.round;
const Wt = Math.floor;
const it = (t) => ({
  x: t,
  y: t,
});
const xo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom",
};
function be(t, e, n) {
  return Et(t, Rt(e, n));
}
function Pt(t, e) {
  if (typeof t == "function") {
    return t(e);
  } else {
    return t;
  }
}
function ft(t) {
  return t.split("-")[0];
}
function st(t) {
  return t.split("-")[1];
}
function Sn(t) {
  if (t === "x") {
    return "y";
  } else {
    return "x";
  }
}
function Re(t) {
  if (t === "y") {
    return "height";
  } else {
    return "width";
  }
}
function ht(t) {
  const e = t[0];
  if (e === "t" || e === "b") {
    return "y";
  } else {
    return "x";
  }
}
function ve(t) {
  return Sn(ht(t));
}
function On(t, e, n = false) {
  const r = st(t);
  const o = ve(t);
  const i = Re(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  if (e.reference[i] > e.floating[i]) {
    s = Jt(s);
  }
  return [s, Jt(s)];
}
function So(t) {
  const e = Jt(t);
  return [Xt(t), e, Xt(e)];
}
function Xt(t) {
  if (t.includes("start")) {
    return t.replace("start", "end");
  } else {
    return t.replace("end", "start");
  }
}
const Ve = ["left", "right"];
const Ge = ["right", "left"];
const Oo = ["top", "bottom"];
const Ro = ["bottom", "top"];
function vo(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      if (n) {
        if (e) {
          return Ge;
        } else {
          return Ve;
        }
      } else if (e) {
        return Ve;
      } else {
        return Ge;
      }
    case "left":
    case "right":
      if (e) {
        return Oo;
      } else {
        return Ro;
      }
    default:
      return [];
  }
}
function Co(t, e, n, r) {
  const o = st(t);
  let i = vo(ft(t), n === "start", r);
  if (o) {
    i = i.map((s) => s + "-" + o);
    if (e) {
      i = i.concat(i.map(Xt));
    }
  }
  return i;
}
function Jt(t) {
  const e = ft(t);
  return xo[e] + t.slice(e.length);
}
function Po(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t,
  };
}
function Rn(t) {
  if (typeof t != "number") {
    return Po(t);
  } else {
    return {
      top: t,
      right: t,
      bottom: t,
      left: t,
    };
  }
}
function Zt(t) {
  const { x: e, y: n, width: r, height: o } = t;
  return {
    width: r,
    height: o,
    top: n,
    left: e,
    right: e + r,
    bottom: n + o,
    x: e,
    y: n,
  };
}
function qe(t, e, n) {
  let { reference: r, floating: o } = t;
  const i = ht(e);
  const s = ve(e);
  const a = Re(s);
  const c = ft(e);
  const f = i === "y";
  const m = r.x + r.width / 2 - o.width / 2;
  const l = r.y + r.height / 2 - o.height / 2;
  const u = r[a] / 2 - o[a] / 2;
  let p;
  switch (c) {
    case "top":
      p = {
        x: m,
        y: r.y - o.height,
      };
      break;
    case "bottom":
      p = {
        x: m,
        y: r.y + r.height,
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: l,
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: l,
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y,
      };
  }
  switch (st(e)) {
    case "start":
      p[s] -= u * (n && f ? -1 : 1);
      break;
    case "end":
      p[s] += u * (n && f ? -1 : 1);
      break;
  }
  return p;
}
async function Ao(t, e) {
  var n;
  if (e === undefined) {
    e = {};
  }
  const { x: r, y: o, platform: i, rects: s, elements: a, strategy: c } = t;
  const {
    boundary: f = "clippingAncestors",
    rootBoundary: m = "viewport",
    elementContext: l = "floating",
    altBoundary: u = false,
    padding: p = 0,
  } = Pt(e, t);
  const h = Rn(p);
  const S = a[u ? (l === "floating" ? "reference" : "floating") : l];
  const d = Zt(
    await i.getClippingRect({
      element:
        (n = await (i.isElement == null ? undefined : i.isElement(S))) ==
          null || n
          ? S
          : S.contextElement ||
            (await (i.getDocumentElement == null
              ? undefined
              : i.getDocumentElement(a.floating))),
      boundary: f,
      rootBoundary: m,
      strategy: c,
    }),
  );
  const y =
    l === "floating"
      ? {
          x: r,
          y: o,
          width: s.floating.width,
          height: s.floating.height,
        }
      : s.reference;
  const w = await (i.getOffsetParent == null
    ? undefined
    : i.getOffsetParent(a.floating));
  const O = (await (i.isElement == null ? undefined : i.isElement(w)))
    ? (await (i.getScale == null ? undefined : i.getScale(w))) || {
        x: 1,
        y: 1,
      }
    : {
        x: 1,
        y: 1,
      };
  const b = Zt(
    i.convertOffsetParentRelativeRectToViewportRelativeRect
      ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: a,
          rect: y,
          offsetParent: w,
          strategy: c,
        })
      : y,
  );
  return {
    top: (d.top - b.top + h.top) / O.y,
    bottom: (b.bottom - d.bottom + h.bottom) / O.y,
    left: (d.left - b.left + h.left) / O.x,
    right: (b.right - d.right + h.right) / O.x,
  };
}
const ko = 50;
const Lo = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s,
  } = n;
  const a = s.detectOverflow
    ? s
    : {
        ...s,
        detectOverflow: Ao,
      };
  const c = await (s.isRTL == null ? undefined : s.isRTL(e));
  let f = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: o,
  });
  let { x: m, y: l } = qe(f, r, c);
  let u = r;
  let p = 0;
  const h = {};
  for (let T = 0; T < i.length; T++) {
    const S = i[T];
    if (!S) {
      continue;
    }
    const { name: d, fn: y } = S;
    const {
      x: w,
      y: O,
      data: b,
      reset: E,
    } = await y({
      x: m,
      y: l,
      initialPlacement: r,
      placement: u,
      strategy: o,
      middlewareData: h,
      rects: f,
      platform: a,
      elements: {
        reference: t,
        floating: e,
      },
    });
    m = w ?? m;
    l = O ?? l;
    h[d] = {
      ...h[d],
      ...b,
    };
    if (E && p < ko) {
      p++;
      if (typeof E == "object") {
        if (E.placement) {
          u = E.placement;
        }
        if (E.rects) {
          f =
            E.rects === true
              ? await s.getElementRects({
                  reference: t,
                  floating: e,
                  strategy: o,
                })
              : E.rects;
        }
        ({ x: m, y: l } = qe(f, u, c));
      }
      T = -1;
    }
  }
  return {
    x: m,
    y: l,
    placement: u,
    strategy: o,
    middlewareData: h,
  };
};
const No = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: c,
    } = e;
    const { element: f, padding: m = 0 } = Pt(t, e) || {};
    if (f == null) {
      return {};
    }
    const l = Rn(m);
    const u = {
      x: n,
      y: r,
    };
    const p = ve(o);
    const h = Re(p);
    const T = await s.getDimensions(f);
    const S = p === "y";
    const d = S ? "top" : "left";
    const y = S ? "bottom" : "right";
    const w = S ? "clientHeight" : "clientWidth";
    const O = i.reference[h] + i.reference[p] - u[p] - i.floating[h];
    const b = u[p] - i.reference[p];
    const E = await (s.getOffsetParent == null
      ? undefined
      : s.getOffsetParent(f));
    let v = E ? E[w] : 0;
    if (!v || !(await (s.isElement == null ? undefined : s.isElement(E)))) {
      v = a.floating[w] || i.floating[h];
    }
    const P = O / 2 - b / 2;
    const _ = v / 2 - T[h] / 2 - 1;
    const L = Rt(l[d], _);
    const C = Rt(l[y], _);
    const x = L;
    const A = v - T[h] - C;
    const k = v / 2 - T[h] / 2 + P;
    const M = be(x, k, A);
    const $ =
      !c.arrow &&
      st(o) != null &&
      k !== M &&
      i.reference[h] / 2 - (k < x ? L : C) - T[h] / 2 < 0;
    const D = $ ? (k < x ? k - x : k - A) : 0;
    return {
      [p]: u[p] + D,
      data: {
        [p]: M,
        centerOffset: k - M - D,
        ...($ && {
          alignmentOffset: D,
        }),
      },
      reset: $,
    };
  },
});
function Io(t, e, n) {
  return (
    t
      ? [...n.filter((o) => st(o) === t), ...n.filter((o) => st(o) !== t)]
      : n.filter((o) => ft(o) === o)
  ).filter((o) => (t ? st(o) === t || (e ? Xt(o) !== o : false) : true));
}
const Do = function (t = {}) {
  return {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n;
      var r;
      var o;
      const {
        rects: i,
        middlewareData: s,
        placement: a,
        platform: c,
        elements: f,
      } = e;
      const {
        crossAxis: m = false,
        alignment: l,
        allowedPlacements: u = We,
        autoAlignment: p = true,
        ...h
      } = Pt(t, e);
      const T = l !== undefined || u === We ? Io(l || null, p, u) : u;
      const S = await c.detectOverflow(e, h);
      const d = ((n = s.autoPlacement) == null ? undefined : n.index) || 0;
      const y = T[d];
      if (y == null) {
        return {};
      }
      const w = On(
        y,
        i,
        await (c.isRTL == null ? undefined : c.isRTL(f.floating)),
      );
      if (a !== y) {
        return {
          reset: {
            placement: T[0],
          },
        };
      }
      const O = [S[ft(y)], S[w[0]], S[w[1]]];
      const b = [
        ...(((r = s.autoPlacement) == null ? undefined : r.overflows) || []),
        {
          placement: y,
          overflows: O,
        },
      ];
      const E = T[d + 1];
      if (E) {
        return {
          data: {
            index: d + 1,
            overflows: b,
          },
          reset: {
            placement: E,
          },
        };
      }
      const v = b
        .map((L) => {
          const C = st(L.placement);
          return [
            L.placement,
            C && m
              ? L.overflows.slice(0, 2).reduce((x, A) => x + A, 0)
              : L.overflows[0],
            L.overflows,
          ];
        })
        .sort((L, C) => L[1] - C[1]);
      const _ =
        ((o = v.filter((L) =>
          L[2].slice(0, st(L[0]) ? 2 : 3).every((C) => C <= 0),
        )[0]) == null
          ? undefined
          : o[0]) || v[0][0];
      if (_ !== a) {
        return {
          data: {
            index: d + 1,
            overflows: b,
          },
          reset: {
            placement: _,
          },
        };
      } else {
        return {};
      }
    },
  };
};
const _o = function (t = {}) {
  return {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      var r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: c,
        elements: f,
      } = e;
      const {
        mainAxis: m = true,
        crossAxis: l = true,
        fallbackPlacements: u,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: T = true,
        ...S
      } = Pt(t, e);
      if ((n = i.arrow) != null && n.alignmentOffset) {
        return {};
      }
      const d = ft(o);
      const y = ht(a);
      const w = ft(a) === a;
      const O = await (c.isRTL == null ? undefined : c.isRTL(f.floating));
      const b = u || (w || !T ? [Jt(a)] : So(a));
      const E = h !== "none";
      if (!u && E) {
        b.push(...Co(a, T, h, O));
      }
      const v = [a, ...b];
      const P = await c.detectOverflow(e, S);
      const _ = [];
      let L = ((r = i.flip) == null ? undefined : r.overflows) || [];
      if (m) {
        _.push(P[d]);
      }
      if (l) {
        const k = On(o, s, O);
        _.push(P[k[0]], P[k[1]]);
      }
      L = [
        ...L,
        {
          placement: o,
          overflows: _,
        },
      ];
      if (!_.every((k) => k <= 0)) {
        var C;
        var x;
        const k = (((C = i.flip) == null ? undefined : C.index) || 0) + 1;
        const M = v[k];
        if (
          M &&
          (!(l === "alignment" ? y !== ht(M) : false) ||
            L.every((N) => (ht(N.placement) === y ? N.overflows[0] > 0 : true)))
        ) {
          return {
            data: {
              index: k,
              overflows: L,
            },
            reset: {
              placement: M,
            },
          };
        }
        let $ =
          (x = L.filter((D) => D.overflows[0] <= 0).sort(
            (D, N) => D.overflows[1] - N.overflows[1],
          )[0]) == null
            ? undefined
            : x.placement;
        if (!$) {
          switch (p) {
            case "bestFit": {
              var A;
              const D =
                (A = L.filter((N) => {
                  if (E) {
                    const U = ht(N.placement);
                    return U === y || U === "y";
                  }
                  return true;
                })
                  .map((N) => [
                    N.placement,
                    N.overflows.filter((U) => U > 0).reduce((U, z) => U + z, 0),
                  ])
                  .sort((N, U) => N[1] - U[1])[0]) == null
                  ? undefined
                  : A[0];
              if (D) {
                $ = D;
              }
              break;
            }
            case "initialPlacement":
              $ = a;
              break;
          }
        }
        if (o !== $) {
          return {
            reset: {
              placement: $,
            },
          };
        }
      }
      return {};
    },
  };
};
const Mo = new Set(["left", "top"]);
async function Fo(t, e) {
  const { placement: n, platform: r, elements: o } = t;
  const i = await (r.isRTL == null ? undefined : r.isRTL(o.floating));
  const s = ft(n);
  const a = st(n);
  const c = ht(n) === "y";
  const f = Mo.has(s) ? -1 : 1;
  const m = i && c ? -1 : 1;
  const l = Pt(e, t);
  let {
    mainAxis: u,
    crossAxis: p,
    alignmentAxis: h,
  } = typeof l == "number"
    ? {
        mainAxis: l,
        crossAxis: 0,
        alignmentAxis: null,
      }
    : {
        mainAxis: l.mainAxis || 0,
        crossAxis: l.crossAxis || 0,
        alignmentAxis: l.alignmentAxis,
      };
  if (a && typeof h == "number") {
    p = a === "end" ? h * -1 : h;
  }
  if (c) {
    return {
      x: p * m,
      y: u * f,
    };
  } else {
    return {
      x: u * f,
      y: p * m,
    };
  }
}
const jo = function (t = 0) {
  return {
    name: "offset",
    options: t,
    async fn(e) {
      var n;
      var r;
      const { x: o, y: i, placement: s, middlewareData: a } = e;
      const c = await Fo(e, t);
      if (
        s === ((n = a.offset) == null ? undefined : n.placement) &&
        (r = a.arrow) != null &&
        r.alignmentOffset
      ) {
        return {};
      } else {
        return {
          x: o + c.x,
          y: i + c.y,
          data: {
            ...c,
            placement: s,
          },
        };
      }
    },
  };
};
const Bo = function (t = {}) {
  return {
    name: "shift",
    options: t,
    async fn(e) {
      const { x: n, y: r, placement: o, platform: i } = e;
      const {
        mainAxis: s = true,
        crossAxis: a = false,
        limiter: c = {
          fn: (d) => {
            let { x: y, y: w } = d;
            return {
              x: y,
              y: w,
            };
          },
        },
        ...f
      } = Pt(t, e);
      const m = {
        x: n,
        y: r,
      };
      const l = await i.detectOverflow(e, f);
      const u = ht(ft(o));
      const p = Sn(u);
      let h = m[p];
      let T = m[u];
      if (s) {
        const d = p === "y" ? "top" : "left";
        const y = p === "y" ? "bottom" : "right";
        const w = h + l[d];
        const O = h - l[y];
        h = be(w, h, O);
      }
      if (a) {
        const d = u === "y" ? "top" : "left";
        const y = u === "y" ? "bottom" : "right";
        const w = T + l[d];
        const O = T - l[y];
        T = be(w, T, O);
      }
      const S = c.fn({
        ...e,
        [p]: h,
        [u]: T,
      });
      return {
        ...S,
        data: {
          x: S.x - n,
          y: S.y - r,
          enabled: {
            [p]: s,
            [u]: a,
          },
        },
      };
    },
  };
};
function re() {
  return typeof window !== "undefined";
}
function At(t) {
  if (vn(t)) {
    return (t.nodeName || "").toLowerCase();
  } else {
    return "#document";
  }
}
function tt(t) {
  var e;
  return (
    (t == null || (e = t.ownerDocument) == null ? undefined : e.defaultView) ||
    window
  );
}
function ct(t) {
  var e;
  if ((e = (vn(t) ? t.ownerDocument : t.document) || window.document) == null) {
    return undefined;
  } else {
    return e.documentElement;
  }
}
function vn(t) {
  if (re()) {
    return t instanceof Node || t instanceof tt(t).Node;
  } else {
    return false;
  }
}
function nt(t) {
  if (re()) {
    return t instanceof Element || t instanceof tt(t).Element;
  } else {
    return false;
  }
}
function dt(t) {
  if (re()) {
    return t instanceof HTMLElement || t instanceof tt(t).HTMLElement;
  } else {
    return false;
  }
}
function Ye(t) {
  if (!re() || typeof ShadowRoot === "undefined") {
    return false;
  } else {
    return t instanceof ShadowRoot || t instanceof tt(t).ShadowRoot;
  }
}
function Ht(t) {
  const { overflow: e, overflowX: n, overflowY: r, display: o } = rt(t);
  return (
    /auto|scroll|overlay|hidden|clip/.test(e + r + n) &&
    o !== "inline" &&
    o !== "contents"
  );
}
function $o(t) {
  return /^(table|td|th)$/.test(At(t));
}
function oe(t) {
  try {
    if (t.matches(":popover-open")) {
      return true;
    }
  } catch {}
  try {
    return t.matches(":modal");
  } catch {
    return false;
  }
}
const Ho = /transform|translate|scale|rotate|perspective|filter/;
const Uo = /paint|layout|strict|content/;
const wt = (t) => !!t && t !== "none";
let pe;
function Ce(t) {
  const e = nt(t) ? rt(t) : t;
  return (
    wt(e.transform) ||
    wt(e.translate) ||
    wt(e.scale) ||
    wt(e.rotate) ||
    wt(e.perspective) ||
    (!Pe() && (wt(e.backdropFilter) || wt(e.filter))) ||
    Ho.test(e.willChange || "") ||
    Uo.test(e.contain || "")
  );
}
function zo(t) {
  let e = bt(t);
  while (dt(e) && !vt(e)) {
    if (Ce(e)) {
      return e;
    }
    if (oe(e)) {
      return null;
    }
    e = bt(e);
  }
  return null;
}
function Pe() {
  if (pe == null) {
    pe =
      typeof CSS !== "undefined" &&
      CSS.supports &&
      CSS.supports("-webkit-backdrop-filter", "none");
  }
  return pe;
}
function vt(t) {
  return /^(html|body|#document)$/.test(At(t));
}
function rt(t) {
  return tt(t).getComputedStyle(t);
}
function ie(t) {
  if (nt(t)) {
    return {
      scrollLeft: t.scrollLeft,
      scrollTop: t.scrollTop,
    };
  } else {
    return {
      scrollLeft: t.scrollX,
      scrollTop: t.scrollY,
    };
  }
}
function bt(t) {
  if (At(t) === "html") {
    return t;
  }
  const e = t.assignedSlot || t.parentNode || (Ye(t) && t.host) || ct(t);
  if (Ye(e)) {
    return e.host;
  } else {
    return e;
  }
}
function Cn(t) {
  const e = bt(t);
  if (vt(e)) {
    if (t.ownerDocument) {
      return t.ownerDocument.body;
    } else {
      return t.body;
    }
  } else if (dt(e) && Ht(e)) {
    return e;
  } else {
    return Cn(e);
  }
}
function _t(t, e, n) {
  var r;
  if (e === undefined) {
    e = [];
  }
  if (n === undefined) {
    n = true;
  }
  const o = Cn(t);
  const i = o === ((r = t.ownerDocument) == null ? undefined : r.body);
  const s = tt(o);
  if (i) {
    const a = we(s);
    return e.concat(
      s,
      s.visualViewport || [],
      Ht(o) ? o : [],
      a && n ? _t(a) : [],
    );
  } else {
    return e.concat(o, _t(o, [], n));
  }
}
function we(t) {
  if (t.parent && Object.getPrototypeOf(t.parent)) {
    return t.frameElement;
  } else {
    return null;
  }
}
function Pn(t) {
  const e = rt(t);
  let n = parseFloat(e.width) || 0;
  let r = parseFloat(e.height) || 0;
  const o = dt(t);
  const i = o ? t.offsetWidth : n;
  const s = o ? t.offsetHeight : r;
  const a = Kt(n) !== i || Kt(r) !== s;
  if (a) {
    n = i;
    r = s;
  }
  return {
    width: n,
    height: r,
    $: a,
  };
}
function Ae(t) {
  if (nt(t)) {
    return t;
  } else {
    return t.contextElement;
  }
}
function Ot(t) {
  const e = Ae(t);
  if (!dt(e)) {
    return it(1);
  }
  const n = e.getBoundingClientRect();
  const { width: r, height: o, $: i } = Pn(e);
  let s = (i ? Kt(n.width) : n.width) / r;
  let a = (i ? Kt(n.height) : n.height) / o;
  if (!s || !Number.isFinite(s)) {
    s = 1;
  }
  if (!a || !Number.isFinite(a)) {
    a = 1;
  }
  return {
    x: s,
    y: a,
  };
}
const Wo = it(0);
function An(t) {
  const e = tt(t);
  if (!Pe() || !e.visualViewport) {
    return Wo;
  } else {
    return {
      x: e.visualViewport.offsetLeft,
      y: e.visualViewport.offsetTop,
    };
  }
}
function Vo(t, e = false, n) {
  if (!n || (e && n !== tt(t))) {
    return false;
  } else {
    return e;
  }
}
function Tt(t, e = false, n = false, r) {
  const o = t.getBoundingClientRect();
  const i = Ae(t);
  let s = it(1);
  if (e) {
    if (r) {
      if (nt(r)) {
        s = Ot(r);
      }
    } else {
      s = Ot(t);
    }
  }
  const a = Vo(i, n, r) ? An(i) : it(0);
  let c = (o.left + a.x) / s.x;
  let f = (o.top + a.y) / s.y;
  let m = o.width / s.x;
  let l = o.height / s.y;
  if (i) {
    const u = tt(i);
    const p = r && nt(r) ? tt(r) : r;
    let h = u;
    let T = we(h);
    while (T && r && p !== h) {
      const S = Ot(T);
      const d = T.getBoundingClientRect();
      const y = rt(T);
      const w = d.left + (T.clientLeft + parseFloat(y.paddingLeft)) * S.x;
      const O = d.top + (T.clientTop + parseFloat(y.paddingTop)) * S.y;
      c *= S.x;
      f *= S.y;
      m *= S.x;
      l *= S.y;
      c += w;
      f += O;
      h = tt(T);
      T = we(h);
    }
  }
  return Zt({
    width: m,
    height: l,
    x: c,
    y: f,
  });
}
function se(t, e) {
  const n = ie(t).scrollLeft;
  if (e) {
    return e.left + n;
  } else {
    return Tt(ct(t)).left + n;
  }
}
function kn(t, e) {
  const n = t.getBoundingClientRect();
  const r = n.left + e.scrollLeft - se(t, n);
  const o = n.top + e.scrollTop;
  return {
    x: r,
    y: o,
  };
}
function Go(t) {
  let { elements: e, rect: n, offsetParent: r, strategy: o } = t;
  const i = o === "fixed";
  const s = ct(r);
  const a = e ? oe(e.floating) : false;
  if (r === s || (a && i)) {
    return n;
  }
  let c = {
    scrollLeft: 0,
    scrollTop: 0,
  };
  let f = it(1);
  const m = it(0);
  const l = dt(r);
  if ((l || (!l && !i)) && ((At(r) !== "body" || Ht(s)) && (c = ie(r)), l)) {
    const p = Tt(r);
    f = Ot(r);
    m.x = p.x + r.clientLeft;
    m.y = p.y + r.clientTop;
  }
  const u = s && !l && !i ? kn(s, c) : it(0);
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - c.scrollLeft * f.x + m.x + u.x,
    y: n.y * f.y - c.scrollTop * f.y + m.y + u.y,
  };
}
function qo(t) {
  return Array.from(t.getClientRects());
}
function Yo(t) {
  const e = ct(t);
  const n = ie(t);
  const r = t.ownerDocument.body;
  const o = Et(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth);
  const i = Et(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + se(t);
  const a = -n.scrollTop;
  if (rt(r).direction === "rtl") {
    s += Et(e.clientWidth, r.clientWidth) - o;
  }
  return {
    width: o,
    height: i,
    x: s,
    y: a,
  };
}
const Ke = 25;
function Ko(t, e) {
  const n = tt(t);
  const r = ct(t);
  const o = n.visualViewport;
  let i = r.clientWidth;
  let s = r.clientHeight;
  let a = 0;
  let c = 0;
  if (o) {
    i = o.width;
    s = o.height;
    const m = Pe();
    if (!m || (m && e === "fixed")) {
      a = o.offsetLeft;
      c = o.offsetTop;
    }
  }
  const f = se(r);
  if (f <= 0) {
    const m = r.ownerDocument;
    const l = m.body;
    const u = getComputedStyle(l);
    const p =
      (m.compatMode === "CSS1Compat" &&
        parseFloat(u.marginLeft) + parseFloat(u.marginRight)) ||
      0;
    const h = Math.abs(r.clientWidth - l.clientWidth - p);
    if (h <= Ke) {
      i -= h;
    }
  } else if (f <= Ke) {
    i += f;
  }
  return {
    width: i,
    height: s,
    x: a,
    y: c,
  };
}
function Xo(t, e) {
  const n = Tt(t, true, e === "fixed");
  const r = n.top + t.clientTop;
  const o = n.left + t.clientLeft;
  const i = dt(t) ? Ot(t) : it(1);
  const s = t.clientWidth * i.x;
  const a = t.clientHeight * i.y;
  const c = o * i.x;
  const f = r * i.y;
  return {
    width: s,
    height: a,
    x: c,
    y: f,
  };
}
function Xe(t, e, n) {
  let r;
  if (e === "viewport") {
    r = Ko(t, n);
  } else if (e === "document") {
    r = Yo(ct(t));
  } else if (nt(e)) {
    r = Xo(e, n);
  } else {
    const o = An(t);
    r = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height,
    };
  }
  return Zt(r);
}
function Ln(t, e) {
  const n = bt(t);
  if (n === e || !nt(n) || vt(n)) {
    return false;
  } else {
    return rt(n).position === "fixed" || Ln(n, e);
  }
}
function Jo(t, e) {
  const n = e.get(t);
  if (n) {
    return n;
  }
  let r = _t(t, [], false).filter((a) => nt(a) && At(a) !== "body");
  let o = null;
  const i = rt(t).position === "fixed";
  let s = i ? bt(t) : t;
  while (nt(s) && !vt(s)) {
    const a = rt(s);
    const c = Ce(s);
    if (!c && a.position === "fixed") {
      o = null;
    }
    if (
      i
        ? !c && !o
        : (!c &&
            a.position === "static" &&
            !!o &&
            (o.position === "absolute" || o.position === "fixed")) ||
          (Ht(s) && !c && Ln(t, s))
    ) {
      r = r.filter((m) => m !== s);
    } else {
      o = a;
    }
    s = bt(s);
  }
  e.set(t, r);
  return r;
}
function Zo(t) {
  let { element: e, boundary: n, rootBoundary: r, strategy: o } = t;
  const s = [
    ...(n === "clippingAncestors"
      ? oe(e)
        ? []
        : Jo(e, this._c)
      : [].concat(n)),
    r,
  ];
  const a = Xe(e, s[0], o);
  let c = a.top;
  let f = a.right;
  let m = a.bottom;
  let l = a.left;
  for (let u = 1; u < s.length; u++) {
    const p = Xe(e, s[u], o);
    c = Et(p.top, c);
    f = Rt(p.right, f);
    m = Rt(p.bottom, m);
    l = Et(p.left, l);
  }
  return {
    width: f - l,
    height: m - c,
    x: l,
    y: c,
  };
}
function Qo(t) {
  const { width: e, height: n } = Pn(t);
  return {
    width: e,
    height: n,
  };
}
function ti(t, e, n) {
  const r = dt(e);
  const o = ct(e);
  const i = n === "fixed";
  const s = Tt(t, true, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0,
  };
  const c = it(0);
  function f() {
    c.x = se(o);
  }
  if (r || (!r && !i)) {
    if (At(e) !== "body" || Ht(o)) {
      a = ie(e);
    }
    if (r) {
      const p = Tt(e, true, i, e);
      c.x = p.x + e.clientLeft;
      c.y = p.y + e.clientTop;
    } else if (o) {
      f();
    }
  }
  if (i && !r && o) {
    f();
  }
  const m = o && !r && !i ? kn(o, a) : it(0);
  const l = s.left + a.scrollLeft - c.x - m.x;
  const u = s.top + a.scrollTop - c.y - m.y;
  return {
    x: l,
    y: u,
    width: s.width,
    height: s.height,
  };
}
function me(t) {
  return rt(t).position === "static";
}
function Je(t, e) {
  if (!dt(t) || rt(t).position === "fixed") {
    return null;
  }
  if (e) {
    return e(t);
  }
  let n = t.offsetParent;
  if (ct(t) === n) {
    n = n.ownerDocument.body;
  }
  return n;
}
function Nn(t, e) {
  const n = tt(t);
  if (oe(t)) {
    return n;
  }
  if (!dt(t)) {
    let o = bt(t);
    while (o && !vt(o)) {
      if (nt(o) && !me(o)) {
        return o;
      }
      o = bt(o);
    }
    return n;
  }
  let r = Je(t, e);
  while (r && $o(r) && me(r)) {
    r = Je(r, e);
  }
  if (r && vt(r) && me(r) && !Ce(r)) {
    return n;
  } else {
    return r || zo(t) || n;
  }
}
const ei = async function (t) {
  const e = this.getOffsetParent || Nn;
  const n = this.getDimensions;
  const r = await n(t.floating);
  return {
    reference: ti(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height,
    },
  };
};
function ni(t) {
  return rt(t).direction === "rtl";
}
const ri = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Go,
  getDocumentElement: ct,
  getClippingRect: Zo,
  getOffsetParent: Nn,
  getElementRects: ei,
  getClientRects: qo,
  getDimensions: Qo,
  getScale: Ot,
  isElement: nt,
  isRTL: ni,
};
function In(t, e) {
  return (
    t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
  );
}
function oi(t, e) {
  let n = null;
  let r;
  const o = ct(t);
  function i() {
    var a;
    clearTimeout(r);
    if ((a = n) != null) {
      a.disconnect();
    }
    n = null;
  }
  function s(a = false, c = 1) {
    i();
    const f = t.getBoundingClientRect();
    const { left: m, top: l, width: u, height: p } = f;
    if (!a) {
      e();
    }
    if (!u || !p) {
      return;
    }
    const h = Wt(l);
    const T = Wt(o.clientWidth - (m + u));
    const S = Wt(o.clientHeight - (l + p));
    const d = Wt(m);
    const w = {
      rootMargin: -h + "px " + -T + "px " + -S + "px " + -d + "px",
      threshold: Et(0, Rt(1, c)) || 1,
    };
    let O = true;
    function b(E) {
      const v = E[0].intersectionRatio;
      if (v !== c) {
        if (!O) {
          return s();
        }
        if (v) {
          s(false, v);
        } else {
          r = setTimeout(() => {
            s(false, 1e-7);
          }, 1000);
        }
      }
      if (v === 1 && !In(f, t.getBoundingClientRect())) {
        s();
      }
      O = false;
    }
    try {
      n = new IntersectionObserver(b, {
        ...w,
        root: o.ownerDocument,
      });
    } catch {
      n = new IntersectionObserver(b, w);
    }
    n.observe(t);
  }
  s(true);
  return i;
}
function Ze(t, e, n, r = {}) {
  const {
    ancestorScroll: o = true,
    ancestorResize: i = true,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = false,
  } = r;
  const f = Ae(t);
  const m = o || i ? [...(f ? _t(f) : []), ...(e ? _t(e) : [])] : [];
  m.forEach((d) => {
    if (o) {
      d.addEventListener("scroll", n, {
        passive: true,
      });
    }
    if (i) {
      d.addEventListener("resize", n);
    }
  });
  const l = f && a ? oi(f, n) : null;
  let u = -1;
  let p = null;
  if (s) {
    p = new ResizeObserver((d) => {
      let [y] = d;
      if (y && y.target === f && p && e) {
        p.unobserve(e);
        cancelAnimationFrame(u);
        u = requestAnimationFrame(() => {
          var w;
          if ((w = p) != null) {
            w.observe(e);
          }
        });
      }
      n();
    });
    if (f && !c) {
      p.observe(f);
    }
    if (e) {
      p.observe(e);
    }
  }
  let h;
  let T = c ? Tt(t) : null;
  if (c) {
    S();
  }
  function S() {
    const d = Tt(t);
    if (T && !In(T, d)) {
      n();
    }
    T = d;
    h = requestAnimationFrame(S);
  }
  n();
  return () => {
    var d;
    m.forEach((y) => {
      if (o) {
        y.removeEventListener("scroll", n);
      }
      if (i) {
        y.removeEventListener("resize", n);
      }
    });
    if (l != null) {
      l();
    }
    if ((d = p) != null) {
      d.disconnect();
    }
    p = null;
    if (c) {
      cancelAnimationFrame(h);
    }
  };
}
const ii = jo;
const si = Do;
const ci = Bo;
const ai = _o;
const Qe = No;
const li = (t, e, n) => {
  const r = new Map();
  const o = {
    platform: ri,
    ...n,
  };
  const i = {
    ...o.platform,
    _c: r,
  };
  return Lo(t, e, {
    ...o,
    platform: i,
  });
};
var ui = typeof document !== "undefined";
function fi() {}
var Yt = ui ? g.useLayoutEffect : fi;
function Qt(t, e) {
  if (t === e) {
    return true;
  }
  if (typeof t != typeof e) {
    return false;
  }
  if (typeof t == "function" && t.toString() === e.toString()) {
    return true;
  }
  let n;
  let r;
  let o;
  if (t && e && typeof t == "object") {
    if (Array.isArray(t)) {
      n = t.length;
      if (n !== e.length) {
        return false;
      }
      for (r = n; r-- !== 0;) {
        if (!Qt(t[r], e[r])) {
          return false;
        }
      }
      return true;
    }
    o = Object.keys(t);
    n = o.length;
    if (n !== Object.keys(e).length) {
      return false;
    }
    for (r = n; r-- !== 0;) {
      if (!{}.hasOwnProperty.call(e, o[r])) {
        return false;
      }
    }
    for (r = n; r-- !== 0;) {
      const i = o[r];
      if ((i !== "_owner" || !t.$$typeof) && !Qt(t[i], e[i])) {
        return false;
      }
    }
    return true;
  }
  return t !== t && e !== e;
}
function Dn(t) {
  if (typeof window === "undefined") {
    return 1;
  } else {
    return (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
}
function tn(t, e) {
  const n = Dn(t);
  return Math.round(e * n) / n;
}
function ge(t) {
  const e = g.useRef(t);
  Yt(() => {
    e.current = t;
  });
  return e;
}
function en(t = {}) {
  const {
    placement: e = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: { reference: i, floating: s } = {},
    transform: a = true,
    whileElementsMounted: c,
    open: f,
  } = t;
  const [m, l] = g.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: e,
    middlewareData: {},
    isPositioned: false,
  });
  const [u, p] = g.useState(r);
  if (!Qt(u, r)) {
    p(r);
  }
  const [h, T] = g.useState(null);
  const [S, d] = g.useState(null);
  const y = g.useCallback((N) => {
    if (N !== E.current) {
      E.current = N;
      T(N);
    }
  }, []);
  const w = g.useCallback((N) => {
    if (N !== v.current) {
      v.current = N;
      d(N);
    }
  }, []);
  const O = i || h;
  const b = s || S;
  const E = g.useRef(null);
  const v = g.useRef(null);
  const P = g.useRef(m);
  const _ = c != null;
  const L = ge(c);
  const C = ge(o);
  const x = ge(f);
  const A = g.useCallback(() => {
    if (!E.current || !v.current) {
      return;
    }
    const N = {
      placement: e,
      strategy: n,
      middleware: u,
    };
    if (C.current) {
      N.platform = C.current;
    }
    li(E.current, v.current, N).then((U) => {
      const z = {
        ...U,
        isPositioned: x.current !== false,
      };
      if (k.current && !Qt(P.current, z)) {
        P.current = z;
        pn.flushSync(() => {
          l(z);
        });
      }
    });
  }, [u, e, n, C, x]);
  Yt(() => {
    if (f === false && P.current.isPositioned) {
      P.current.isPositioned = false;
      l((N) => ({
        ...N,
        isPositioned: false,
      }));
    }
  }, [f]);
  const k = g.useRef(false);
  Yt(() => {
    k.current = true;
    return () => {
      k.current = false;
    };
  }, []);
  Yt(() => {
    if (O) {
      E.current = O;
    }
    if (b) {
      v.current = b;
    }
    if (O && b) {
      if (L.current) {
        return L.current(O, b, A);
      }
      A();
    }
  }, [O, b, A, L, _]);
  const M = g.useMemo(
    () => ({
      reference: E,
      floating: v,
      setReference: y,
      setFloating: w,
    }),
    [y, w],
  );
  const $ = g.useMemo(
    () => ({
      reference: O,
      floating: b,
    }),
    [O, b],
  );
  const D = g.useMemo(() => {
    const N = {
      position: n,
      left: 0,
      top: 0,
    };
    if (!$.floating) {
      return N;
    }
    const U = tn($.floating, m.x);
    const z = tn($.floating, m.y);
    if (a) {
      return {
        ...N,
        transform: "translate(" + U + "px, " + z + "px)",
        ...(Dn($.floating) >= 1.5 && {
          willChange: "transform",
        }),
      };
    } else {
      return {
        position: n,
        left: U,
        top: z,
      };
    }
  }, [n, a, $.floating, m.x, m.y]);
  return g.useMemo(
    () => ({
      ...m,
      update: A,
      refs: M,
      elements: $,
      floatingStyles: D,
    }),
    [m, A, M, $, D],
  );
}
const di = (t) => {
  function e(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: t,
    fn(n) {
      const { element: r, padding: o } = typeof t == "function" ? t(n) : t;
      if (r && e(r)) {
        if (r.current != null) {
          return Qe({
            element: r.current,
            padding: o,
          }).fn(n);
        } else {
          return {};
        }
      } else if (r) {
        return Qe({
          element: r,
          padding: o,
        }).fn(n);
      } else {
        return {};
      }
    },
  };
};
const nn = (t, e) => {
  const n = ii(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e],
  };
};
const pi = (t, e) => {
  const n = ci(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e],
  };
};
const mi = (t, e) => {
  const n = ai(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e],
  };
};
const gi = (t, e) => {
  const n = si(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e],
  };
};
const hi = (t, e) => {
  const n = di(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e],
  };
};
const yi = {
  arrowBase: 32,
  arrowColor: "#ffffff",
  arrowSize: 16,
  arrowSpacing: 12,
  backgroundColor: "#ffffff",
  beaconSize: 36,
  beaconTrigger: "click",
  beforeTimeout: 5000,
  blockTargetInteraction: false,
  buttons: ["back", "close", "primary"],
  closeButtonAction: "close",
  disableFocusTrap: false,
  dismissKeyAction: "close",
  hideOverlay: false,
  loaderDelay: 300,
  offset: 10,
  overlayClickAction: "close",
  overlayColor: "#00000080",
  primaryColor: "#000000",
  scrollDuration: 300,
  scrollOffset: 20,
  showProgress: false,
  skipBeacon: false,
  skipScroll: false,
  spotlightPadding: 10,
  spotlightRadius: 4,
  targetWaitTimeout: 1000,
  textColor: "#000000",
  width: 380,
  zIndex: 100,
};
const bi = {
  beaconOptions: {
    offset: -18,
  },
};
const _n = {
  back: "Back",
  close: "Close",
  last: "Last",
  next: "Next",
  nextWithProgress: "Next ({current} of {total})",
  open: "Open the dialog",
  skip: "Skip",
};
const wi = {
  isFixed: false,
  locale: _n,
  placement: "bottom",
};
const Ei = {
  continuous: false,
  debug: false,
  run: false,
  scrollToFirstStep: false,
  steps: [],
};
const B = {
  INIT: "init",
  START: "start",
  STOP: "stop",
  RESET: "reset",
  PREV: "prev",
  NEXT: "next",
  GO: "go",
  CLOSE: "close",
  SKIP: "skip",
  REPLAY: "replay",
  UPDATE: "update",
  COMPLETE: "complete",
};
const q = {
  TOUR_START: "tour:start",
  STEP_BEFORE_HOOK: "step:before_hook",
  STEP_BEFORE: "step:before",
  SCROLL_START: "scroll:start",
  SCROLL_END: "scroll:end",
  BEACON: "beacon",
  TOOLTIP: "tooltip",
  STEP_AFTER: "step:after",
  STEP_AFTER_HOOK: "step:after_hook",
  TOUR_END: "tour:end",
  TOUR_STATUS: "tour:status",
  TARGET_NOT_FOUND: "error:target_not_found",
  ERROR: "error",
};
const R = {
  INIT: "init",
  READY: "ready",
  BEACON_BEFORE: "beacon_before",
  BEACON: "beacon",
  TOOLTIP_BEFORE: "tooltip_before",
  TOOLTIP: "tooltip",
  COMPLETE: "complete",
};
const Q = {
  BUTTON_BACK: "button_back",
  BUTTON_CLOSE: "button_close",
  BUTTON_PRIMARY: "button_primary",
  BUTTON_SKIP: "button_skip",
  KEYBOARD: "keyboard",
  OVERLAY: "overlay",
};
const F = {
  IDLE: "idle",
  READY: "ready",
  WAITING: "waiting",
  RUNNING: "running",
  PAUSED: "paused",
  SKIPPED: "skipped",
  FINISHED: "finished",
};
const Ti = "react-joyride-portal";
function xi(t) {
  const e = {};
  for (const n in t) {
    if (t[n] !== undefined) {
      e[n] = t[n];
    }
  }
  return e;
}
function St(...t) {
  return mo({
    all: true,
    isMergeableObject: (e) => !!X.plainObject(e) && !g.isValidElement(e),
  })(...t);
}
function Mn(t) {
  return Object.prototype.toString.call(t).slice(8, -1).toLowerCase();
}
function lt(t, e = {}) {
  const { defaultValue: n, step: r, steps: o } = e;
  let i = ue(t);
  if (i) {
    if ((i.includes("{current}") || i.includes("{total}")) && r && o) {
      i = i.replace("{current}", r.toString()).replace("{total}", o.toString());
    }
  } else if (
    g.isValidElement(t) &&
    !Object.values(t.props).length &&
    Mn(t.type) === "function"
  ) {
    try {
      i = lt(t.type({}), e);
    } catch {
      i = ue(n);
    }
  } else {
    i = ue(n);
  }
  return i;
}
function Y(t, e, n, ...r) {
  if (!t) {
    return;
  }
  const o = new Date();
  const i = `${String(o.getHours()).padStart(2, "0")}:${String(o.getMinutes()).padStart(2, "0")}:${String(o.getSeconds()).padStart(2, "0")}.${String(o.getMilliseconds()).padStart(3, "0")}`;
  console.log(
    `${e} %c${n}%c ${i}`,
    "font-weight: bold",
    "color: gray; font-weight: normal",
    ...r,
  );
}
function Si(t, e) {
  const n = xi(e);
  return {
    ...t,
    ...n,
  };
}
function Mt() {}
function Oi(t) {
  return Object.keys(t);
}
function te(t, ...e) {
  if (!X.plainObject(t)) {
    throw new TypeError("Expected an object");
  }
  const n = {};
  for (const r in t) {
    if ({}.hasOwnProperty.call(t, r) && !e.includes(r)) {
      n[r] = t[r];
    }
  }
  return n;
}
function rn(t, ...e) {
  if (!X.plainObject(t)) {
    throw new TypeError("Expected an object");
  }
  if (!e.length) {
    return t;
  }
  const n = {};
  for (const r in t) {
    if ({}.hasOwnProperty.call(t, r) && e.includes(r)) {
      n[r] = t[r];
    }
  }
  return n;
}
function Ee(t, e, n) {
  const r = (i) =>
    i.replace("{current}", String(e)).replace("{total}", String(n));
  if (Mn(t) === "string") {
    return r(t);
  }
  if (!g.isValidElement(t)) {
    return t;
  }
  const { children: o } = t.props;
  if (X.string(o) && o.includes("{current}")) {
    return g.cloneElement(t, {
      children: r(o),
    });
  }
  if (Array.isArray(o)) {
    return g.cloneElement(t, {
      children: o.map((i) => (typeof i == "string" ? r(i) : Ee(i, e, n))),
    });
  }
  if (X.function(t.type) && !Object.values(t.props).length) {
    try {
      return Ee(t.type({}), e, n);
    } catch {
      return t;
    }
  }
  return t;
}
function on(t) {
  return Oi(t)
    .sort()
    .reduce((e, n) => {
      e[n] = t[n];
      return e;
    }, {});
}
function ke() {
  var t;
  return (
    typeof window !== "undefined" &&
    (t = window.document) != null &&
    !!t.createElement
  );
}
function sn(t) {
  let e = 0;
  let n = 0;
  let r = t;
  while (r) {
    e += r.offsetTop;
    n += r.offsetLeft;
    r = r.offsetParent;
  }
  return {
    left: n,
    top: e,
  };
}
function Le(t) {
  if (t) {
    return t.getBoundingClientRect();
  } else {
    return null;
  }
}
function Ri(t = false) {
  const { body: e, documentElement: n } = document;
  if (!e || !n) {
    return 0;
  }
  if (t) {
    const r = [
      e.scrollHeight,
      e.offsetHeight,
      n.clientHeight,
      n.scrollHeight,
      n.offsetHeight,
    ].sort((i, s) => i - s);
    const o = Math.floor(r.length / 2);
    if (r.length % 2 === 0) {
      return (r[o - 1] + r[o]) / 2;
    } else {
      return r[o];
    }
  }
  return Math.max(
    e.scrollHeight,
    e.offsetHeight,
    n.clientHeight,
    n.scrollHeight,
    n.offsetHeight,
  );
}
function et(t) {
  if (!t) {
    return null;
  }
  if (typeof t == "function") {
    try {
      return t();
    } catch {
      return null;
    }
  }
  if (typeof t == "object" && "current" in t) {
    return t.current;
  }
  if (typeof t == "string") {
    try {
      return document.querySelector(t);
    } catch {
      return null;
    }
  }
  return t;
}
function vi(t, e, n) {
  const r = Le(t);
  const o = kt(t);
  const i = o ? !o.isSameNode(Z()) : false;
  const s = n ?? Lt(t);
  let a = 0;
  let c = (r == null ? undefined : r.top) ?? 0;
  if (i && s) {
    c = (r == null ? undefined : r.top) ?? 0;
  } else if (o instanceof HTMLElement) {
    a = o.scrollTop;
    if (!i && !s) {
      c += a;
    }
    if (!o.isSameNode(Z())) {
      c += Z().scrollTop;
    }
  }
  return Math.floor(c - e);
}
function kt(t, e) {
  if (!t) {
    return Z();
  }
  const n = xn(t);
  if (n) {
    if (n.isSameNode(Z())) {
      if (e) {
        return document;
      } else {
        return Z();
      }
    }
    if (!(n.scrollHeight > n.offsetHeight)) {
      return Z();
    }
  }
  return n;
}
function Ci(t) {
  const e = t.getBoundingClientRect();
  const n = Z();
  const r = e.top + e.height / 2;
  const o = window.innerHeight / 2;
  return Math.max(0, n.scrollTop + r - o);
}
function Pi(t, e) {
  if (!t) {
    return 0;
  }
  const n = xn(t) ?? Z();
  const r = parseFloat(getComputedStyle(t).scrollMarginTop) || 0;
  const o = Le(n);
  const i = n.scrollTop ?? 0;
  const { offsetTop: s = 0, scrollTop: a = 0 } = n;
  let c = t.getBoundingClientRect().top + a;
  if (s && (Fn(t) || Ai(t))) {
    const m = t.getBoundingClientRect();
    const l = m.top - ((o == null ? undefined : o.top) ?? 0);
    const u = l + m.height;
    const p = n.clientHeight;
    const h = p * 0.2;
    if (l >= h && u <= p - h) {
      c = i;
    } else {
      c = l + i;
    }
  }
  const f = Math.floor(c - e - r);
  if (f < 0) {
    return 0;
  } else {
    return f;
  }
}
function Ai(t) {
  return t.offsetParent !== document.body;
}
function Fn(t) {
  if (!t) {
    return false;
  }
  const e = kt(t);
  if (e) {
    return !e.isSameNode(Z());
  } else {
    return false;
  }
}
function Lt(t, e = "fixed") {
  if (!t || !(t instanceof Element)) {
    return false;
  }
  const { nodeName: n } = t;
  if (n === "BODY" || n === "HTML") {
    return false;
  } else if (getComputedStyle(t).position === e) {
    return true;
  } else if (t.parentNode) {
    return Lt(t.parentNode, e);
  } else {
    return false;
  }
}
function Vt(t) {
  if (!t) {
    return false;
  }
  let e = t;
  while (e && e !== document.body) {
    if (e instanceof HTMLElement) {
      const { display: n, visibility: r } = getComputedStyle(e);
      if (n === "none" || r === "hidden") {
        return false;
      }
    }
    e = e.parentElement ?? null;
  }
  return true;
}
function cn(t) {
  const {
    isFirstStep: e,
    scrollToFirstStep: n,
    step: r,
    target: o,
    targetLifecycle: i,
  } = t;
  if (
    r.skipScroll ||
    (e && !n && i !== R.TOOLTIP) ||
    r.placement === "center"
  ) {
    return false;
  }
  const s = o != null && o.isConnected ? kt(o) : Z();
  const a = s ? !s.isSameNode(Z()) : false;
  if ((r.isFixed || Lt(o)) && !a) {
    return false;
  } else {
    return s.scrollHeight > s.clientHeight;
  }
}
function Z() {
  return document.scrollingElement ?? document.documentElement;
}
function an(t, e) {
  const { duration: n, element: r } = e;
  let o = () => {};
  const i = new Promise((s) => {
    const { scrollTop: a } = r;
    const c = t > a ? t - a : a - t;
    o = yo.top(
      r,
      t,
      {
        duration: c < 100 ? 50 : n,
      },
      () => {
        s();
      },
    );
  });
  return {
    cancel: o,
    promise: i,
  };
}
function ki(t) {
  const e = t.replace(
    /^#?([\da-f])([\da-f])([\da-f])$/i,
    (r, o, i, s) => o + o + i + i + s + s,
  );
  const n = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})/i.exec(e);
  if (n) {
    return [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)];
  } else {
    return [];
  }
}
const jn = {
  backgroundColor: "transparent",
  border: 0,
  borderRadius: 0,
  color: "#555555",
  cursor: "pointer",
  fontSize: 16,
  lineHeight: 1,
  padding: 0,
  WebkitAppearance: "none",
};
const Gt = {
  ...jn,
  borderRadius: 4,
  padding: 8,
};
function Li(t, e) {
  const { styles: n } = t;
  const r = St(n ?? {}, e.styles ?? {});
  let { width: o } = e;
  if (ke()) {
    o =
      typeof o == "number" && window.innerWidth < o
        ? window.innerWidth - 30
        : o;
  }
  const i = {
    bottom: 0,
    left: 0,
    overflow: "hidden",
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: e.zIndex,
  };
  return St(
    {
      arrow: {
        alignItems: "center",
        color: e.arrowColor,
        display: "inline-flex",
        justifyContent: "center",
        position: "absolute",
      },
      beaconWrapper: {
        ...jn,
        display: "inline-flex",
        borderRadius: "50%",
        position: "relative",
      },
      beacon: {
        height: e.beaconSize,
        width: e.beaconSize,
      },
      beaconInner: {
        animation: "joyride-beacon-inner 1.2s infinite ease-in-out",
        backgroundColor: e.primaryColor,
        borderRadius: "50%",
        display: "block",
        height: "50%",
        left: "50%",
        opacity: 0.7,
        position: "absolute",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
      },
      beaconOuter: {
        animation: "joyride-beacon-outer 1.2s infinite ease-in-out",
        backgroundColor: `rgba(${ki(e.primaryColor).join(",")}, 0.2)`,
        border: `2px solid ${e.primaryColor}`,
        borderRadius: "50%",
        boxSizing: "border-box",
        display: "block",
        height: "100%",
        left: 0,
        opacity: 0.9,
        position: "absolute",
        top: 0,
        transformOrigin: "center",
        width: "100%",
      },
      buttonBack: {
        ...Gt,
        color: e.primaryColor,
        marginLeft: "auto",
        marginRight: 5,
      },
      buttonClose: {
        ...Gt,
        color: e.textColor,
        height: 12,
        padding: 8,
        position: "absolute",
        right: 0,
        top: 0,
        width: 12,
      },
      buttonPrimary: {
        ...Gt,
        backgroundColor: e.primaryColor,
        color: e.backgroundColor,
      },
      buttonSkip: {
        ...Gt,
        color: e.textColor,
        fontSize: 14,
      },
      floater: {
        display: "inline-block",
        filter: "drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))",
        maxWidth: "100%",
        transition: "opacity 0.3s",
      },
      loader: {
        alignItems: "center",
        display: "flex",
        height: 48,
        inset: 0,
        justifyContent: "center",
        pointerEvents: "none",
        position: "fixed",
        width: 48,
        zIndex: e.zIndex + 1,
      },
      overlay: {
        ...i,
        backgroundColor: e.overlayColor,
      },
      spotlight: {},
      tooltip: {
        backgroundColor: e.backgroundColor,
        borderRadius: 5,
        boxSizing: "border-box",
        color: e.textColor,
        fontSize: 16,
        maxWidth: "100%",
        padding: 12,
        position: "relative",
        width: o,
      },
      tooltipContainer: {
        lineHeight: 1.4,
        textAlign: "center",
      },
      tooltipTitle: {
        fontSize: 18,
        margin: 0,
      },
      tooltipContent: {
        paddingBottom: 12,
        paddingTop: 12,
      },
      tooltipFooter: {
        alignItems: "center",
        display: "flex",
        justifyContent: "flex-end",
      },
      tooltipFooterSpacer: {
        flex: 1,
      },
    },
    r,
  );
}
const Ni = [
  "after",
  "arrowBase",
  "arrowColor",
  "arrowSize",
  "arrowSpacing",
  "backgroundColor",
  "beaconSize",
  "beaconTrigger",
  "before",
  "beforeTimeout",
  "buttons",
  "closeButtonAction",
  "skipBeacon",
  "dismissKeyAction",
  "disableFocusTrap",
  "hideOverlay",
  "skipScroll",
  "blockTargetInteraction",
  "loaderDelay",
  "offset",
  "overlayClickAction",
  "overlayColor",
  "primaryColor",
  "scrollDuration",
  "scrollOffset",
  "showProgress",
  "spotlightPadding",
  "spotlightRadius",
  "targetWaitTimeout",
  "textColor",
  "width",
  "zIndex",
];
function Ne(t, e) {
  if (!e) {
    return null;
  }
  const n = St(
    wi,
    rn(
      t,
      "arrowComponent",
      "beaconComponent",
      "floatingOptions",
      "loaderComponent",
      "locale",
      "styles",
      "tooltipComponent",
    ),
    e,
  );
  const r = St(yi, t.options ?? {}, rn(e, ...Ni));
  const o = Li(t, {
    ...n,
    ...r,
  });
  const i = St(bi, t.floatingOptions ?? {}, n.floatingOptions ?? {});
  return {
    ...n,
    ...r,
    locale: St(_n, t.locale ?? {}, n.locale || {}),
    floatingOptions: i,
    spotlightPadding: Ii(r.spotlightPadding),
    styles: o,
  };
}
function Ii(t) {
  if (typeof t == "number") {
    return {
      top: t,
      right: t,
      bottom: t,
      left: t,
    };
  } else {
    return {
      top: (t == null ? undefined : t.top) ?? 0,
      right: (t == null ? undefined : t.right) ?? 0,
      bottom: (t == null ? undefined : t.bottom) ?? 0,
      left: (t == null ? undefined : t.left) ?? 0,
    };
  }
}
function Di(t, e, n) {
  const { action: r } = e;
  const o = n && [B.PREV, B.NEXT].includes(r);
  return t.skipBeacon || t.placement === "center" || o;
}
function Bn(t, e = false) {
  if (X.plainObject(t)) {
    if (t.target) {
      return true;
    } else {
      Y(e, "tour", "target is missing from the step");
      return false;
    }
  } else {
    Y(e, "tour", "step must be an object");
    return false;
  }
}
function $n(t, e = false) {
  if (X.array(t)) {
    return t.every((n) => Bn(n, e));
  } else {
    Y(e, "tour", "steps must be an array");
    return false;
  }
}
var _i = class {
  constructor(t) {
    G(this, "beaconPosition", null);
    G(this, "debug");
    G(this, "eventListeners", new Map());
    G(this, "listeners", new Set());
    G(this, "props");
    G(this, "snapshot");
    G(this, "state");
    G(this, "steps");
    G(this, "tooltipPosition", null);
    G(this, "cleanupPositionData", () => {
      this.beaconPosition = null;
      this.tooltipPosition = null;
    });
    G(this, "getPositionData", (t) =>
      t === "beacon" ? this.beaconPosition : this.tooltipPosition,
    );
    G(this, "getServerSnapshot", () => this.snapshot);
    G(this, "getSnapshot", () => this.snapshot);
    G(this, "getEventState", () => te(this.snapshot, "positioned"));
    G(this, "getState", () => te(this.snapshot, "positioned"));
    G(this, "setPositionData", (t, e) => {
      var r;
      var o;
      var i;
      if (
        ((r = t === "beacon" ? this.beaconPosition : this.tooltipPosition) ==
        null
          ? undefined
          : r.placement) !== e.placement
      ) {
        Y(
          this.debug,
          `step:${this.state.index}`,
          "positioned",
          `${t} ${e.placement}`,
        );
      }
      if (t === "beacon") {
        this.beaconPosition = e;
      } else {
        this.tooltipPosition = e;
      }
      if (
        (this.state.lifecycle === R.BEACON_BEFORE ||
          this.state.lifecycle === R.TOOLTIP_BEFORE) &&
        !this.state.positioned
      ) {
        this.updateState({
          positioned: true,
        });
      }
      const n =
        (i = (o = this.getStep()) == null ? undefined : o.floatingOptions) ==
        null
          ? undefined
          : i.onPosition;
      if (n) {
        n(e);
      }
    });
    G(this, "setSteps", (t) => {
      this.steps = t;
      this.updateState({
        size: t.length,
      });
    });
    G(this, "dispatch", (t, e) => {
      const n = this.eventListeners.get(t.type);
      if (n) {
        for (const r of n) {
          try {
            r(t, e);
          } catch {}
        }
      }
    });
    G(this, "on", (t, e) => {
      let n = this.eventListeners.get(t);
      if (!n) {
        n = new Set();
        this.eventListeners.set(t, n);
      }
      n.add(e);
      return () => {
        n.delete(e);
      };
    });
    G(this, "subscribe", (t) => {
      this.listeners.add(t);
      return () => {
        this.listeners.delete(t);
      };
    });
    G(this, "updateState", (t, e = false) => {
      const { controlled: n, index: r } = this.state;
      const o = this.snapshot;
      const i = n && !e && t.index !== undefined ? r : (t.index ?? r);
      const s = {
        action: t.action ?? this.state.action,
        controlled: n,
        index: i,
        lifecycle: t.lifecycle ?? this.state.lifecycle,
        origin: t.origin ?? null,
        positioned: t.positioned ?? this.state.positioned,
        scrolling: t.scrolling ?? this.state.scrolling,
        size: t.size ?? this.state.size,
        status: t.status ?? this.state.status,
        waiting: t.waiting ?? this.state.waiting,
      };
      const a = this.applyTransitions(s);
      this.state = a;
      if (!Te(o, a)) {
        this.snapshot = Object.freeze({
          ...a,
        });
        for (const c of this.listeners) {
          c(this.snapshot);
        }
      }
    });
    const { initialStepIndex: e, stepIndex: n, steps: r = [] } = t ?? {};
    const o = X.number(n);
    let i = 0;
    this.debug = (t == null ? undefined : t.debug) ?? false;
    if (o) {
      i = n;
      if (X.number(e)) {
        Y(this.debug, "tour", "initialStepIndex is ignored in controlled mode");
      }
    } else if (X.number(e)) {
      if (e >= 0 && e < r.length) {
        i = e;
      } else if (r.length > 0) {
        Y(this.debug, "tour", "initialStepIndex is out of bounds");
      }
    }
    this.props = t ?? {
      steps: [],
    };
    this.steps = r;
    this.state = {
      action: B.INIT,
      controlled: o,
      index: i,
      lifecycle: R.INIT,
      origin: null,
      positioned: false,
      scrolling: false,
      size: r.length,
      status: r.length ? F.READY : F.IDLE,
      waiting: false,
    };
    this.snapshot = Object.freeze({
      ...this.state,
    });
  }
  applyTransitions(t) {
    if (t.status === F.WAITING && t.size > 0) {
      return {
        ...t,
        status: F.RUNNING,
      };
    } else {
      return t;
    }
  }
  getStep(t) {
    return Ne(this.props, this.steps[t ?? this.state.index]);
  }
};
function Mi(t) {
  return new _i(t);
}
function ln(t, e) {
  return Math.min(Math.max(t, 0), e);
}
function Fi(t, e, n) {
  const r = g.useRef(e);
  const o = g.useRef(n);
  r.current = e;
  o.current = n;
  return g.useMemo(() => {
    const i = () => t.current.getSnapshot();
    return {
      close: (d = null) => {
        const { index: y, status: w } = i();
        if (w === F.RUNNING) {
          t.current.updateState({
            action: B.CLOSE,
            index: y + 1,
            origin: d,
            lifecycle: R.COMPLETE,
            positioned: false,
            scrolling: false,
            waiting: false,
          });
        }
      },
      go: (d) => {
        const { controlled: y, size: w, status: O } = i();
        if (y) {
          Y(r.current, "tour", "go() is not supported in controlled mode");
          return;
        }
        if (O === F.RUNNING) {
          t.current.updateState({
            action: B.GO,
            index: d,
            lifecycle: R.COMPLETE,
            positioned: false,
            scrolling: false,
            status: d < w ? O : F.FINISHED,
            waiting: false,
          });
        }
      },
      info: () => te(t.current.getSnapshot(), "positioned"),
      next: (d) => {
        const { index: y, size: w, status: O } = i();
        if (O === F.RUNNING) {
          t.current.updateState({
            action: B.NEXT,
            index: ln(y + 1, w),
            lifecycle: R.COMPLETE,
            origin: d,
            positioned: false,
            scrolling: false,
            waiting: false,
          });
        }
      },
      open: () => {
        const { status: d } = i();
        if (d === F.RUNNING) {
          t.current.updateState({
            action: B.UPDATE,
            lifecycle: R.TOOLTIP_BEFORE,
            positioned: false,
            scrolling: false,
            waiting: false,
          });
        }
      },
      prev: (d) => {
        const { index: y, size: w, status: O } = i();
        if (O === F.RUNNING) {
          t.current.updateState({
            action: B.PREV,
            index: ln(y - 1, w),
            lifecycle: R.COMPLETE,
            origin: d,
            positioned: false,
            scrolling: false,
            waiting: false,
          });
        }
      },
      replay: (d) => {
        const { lifecycle: y, status: w } = i();
        if (w === F.RUNNING && y === R.TOOLTIP) {
          t.current.updateState({
            action: B.REPLAY,
            lifecycle: R.COMPLETE,
            origin: d,
            positioned: false,
            scrolling: false,
            waiting: false,
          });
        }
      },
      reset: (d = false) => {
        const { controlled: y } = i();
        if (y) {
          Y(r.current, "tour", "reset() is not supported in controlled mode");
          return;
        }
        o.current();
        t.current.updateState({
          action: B.RESET,
          index: 0,
          lifecycle: R.INIT,
          positioned: false,
          scrolling: false,
          status: d ? F.RUNNING : F.READY,
          waiting: false,
        });
      },
      skip: (d) => {
        const { status: y } = i();
        if (y === F.RUNNING) {
          t.current.updateState({
            action: B.SKIP,
            lifecycle: R.COMPLETE,
            origin: d,
            positioned: false,
            scrolling: false,
            status: F.SKIPPED,
            waiting: false,
          });
        }
      },
      start: (d) => {
        const { index: y, size: w } = i();
        o.current();
        t.current.updateState(
          {
            action: B.START,
            index: X.number(d) ? d : y,
            lifecycle: R.INIT,
            positioned: false,
            scrolling: false,
            status: w ? F.RUNNING : F.WAITING,
            waiting: false,
          },
          true,
        );
      },
      stop: (d = false) => {
        const { index: y, status: w } = i();
        if (![F.FINISHED, F.SKIPPED].includes(w)) {
          t.current.updateState({
            action: B.STOP,
            index: y + (d ? 1 : 0),
            lifecycle: R.COMPLETE,
            positioned: false,
            scrolling: false,
            status: F.PAUSED,
            waiting: false,
          });
        }
      },
    };
  }, [t]);
}
const ji = new Set(["origin", "positioned"]);
function Bi(t, e) {
  const n = g.useRef(null);
  g.useEffect(() => {
    if (!e) {
      return;
    }
    const r = t.current.getSnapshot();
    Y(true, "tour", "init", r);
    n.current = r;
    return t.current.subscribe((o) => {
      const i = n.current;
      n.current = o;
      if (!i) {
        return;
      }
      const s = {};
      let a = false;
      for (const c of Object.keys(o)) {
        if (o[c] !== i[c] && !ji.has(c)) {
          s[c] = {
            from: i[c],
            to: o[c],
          };
          if (c === "status" || c === "size") {
            a = true;
          }
        }
      }
      if (Object.keys(s).length) {
        if (!!a || !(o.index >= o.size)) {
          Y(true, a ? "tour" : `step:${o.index}`, "state", s);
        }
      }
    });
  }, [e, t]);
}
function $i(t, e, n) {
  const r = g.useRef(t);
  const o = g.useRef(e);
  r.current = t;
  o.current = e;
  return g.useCallback(
    (i, s, a) => {
      var f;
      const c = {
        ...n.current.getEventState(),
        error: null,
        scroll: null,
        step: s,
        type: i,
        ...a,
      };
      if ((f = r.current) != null) {
        f.call(r, c, o.current);
      }
      n.current.dispatch(c, o.current);
    },
    [n],
  );
}
function gt(t, e) {
  return {
    hasChanged(n) {
      return t[n] !== e[n];
    },
    hasChangedTo(n, r) {
      const o = t[n];
      const i = e[n];
      if (Array.isArray(r)) {
        return r.includes(o) && !r.includes(i);
      } else {
        return o === r && i !== r;
      }
    },
    previous: e,
  };
}
function Hi(t) {
  const {
    addFailure: e,
    controls: n,
    emitEvent: r,
    previousState: o,
    props: i,
    state: s,
    step: a,
    store: c,
  } = t;
  const {
    action: f,
    index: m,
    lifecycle: l,
    positioned: u,
    scrolling: p,
    size: h,
    status: T,
  } = s;
  const S = hn(a) ?? null;
  const d = g.useRef(null);
  const y = g.useRef(i);
  const w = g.useRef(s);
  const O = g.useRef(o);
  const b = g.useRef(a);
  const E = g.useRef(S);
  const v = g.useRef(n);
  const P = g.useRef(null);
  const _ = g.useRef(null);
  const L = g.useRef(null);
  y.current = i;
  w.current = s;
  O.current = o;
  b.current = a;
  E.current = S;
  v.current = n;
  const C = () => {
    if (P.current) {
      clearInterval(P.current);
      P.current = null;
    }
    _.current = null;
    if (L.current) {
      L.current.cancel();
      L.current = null;
    }
  };
  g.useEffect(() => {
    if (!O.current) {
      return;
    }
    const { hasChangedTo: x } = gt(w.current, O.current);
    const A = x("action", [B.NEXT, B.PREV, B.SKIP, B.CLOSE, B.REPLAY]);
    const k =
      f === B.START && (d.current === B.CLOSE || d.current === B.REPLAY);
    if (A || k) {
      d.current = f;
    }
  }, [f]);
  g.useEffect(() => {
    if (!O.current) {
      return () => {
        C();
      };
    }
    const { hasChanged: x } = gt(w.current, O.current);
    const A = b.current;
    if (x("index")) {
      C();
    }
    if (T !== F.RUNNING || !A || l !== R.INIT) {
      return () => {
        C();
      };
    }
    const { hasChangedTo: k } = gt(w.current, O.current);
    if (
      k("status", F.RUNNING) &&
      [F.IDLE, F.READY, F.PAUSED].includes(O.current.status)
    ) {
      r(q.TOUR_START, A);
    }
    c.current.cleanupPositionData();
    const { debug: M } = y.current;
    if (A.before && !L.current) {
      Y(M, `step:${m}`, "before()", A);
      L.current = {
        cancel: () => {},
      };
      c.current.updateState({
        waiting: true,
      });
      r(q.STEP_BEFORE_HOOK, A, {
        action: d.current ?? w.current.action,
      });
      const $ = () => {
        L.current = null;
        c.current.updateState({
          action: d.current ?? w.current.action,
          waiting: false,
          lifecycle: R.READY,
        });
      };
      const D = new AbortController();
      const N = A.beforeTimeout;
      L.current = {
        cancel: () => D.abort(),
      };
      const U = N
        ? setTimeout(() => {
            if (!D.signal.aborted) {
              Y(M, `step:${m}`, "before()", "timed out", `${N}ms`);
              D.abort();
              e(A, "before_hook");
              r(q.ERROR, A, {
                error: new Error("Step before hook timed out"),
              });
              $();
            }
          }, N)
        : null;
      A.before({
        ...c.current.getState(),
        action: d.current ?? c.current.getState().action,
        step: A,
      })
        .then(() => {
          if (!D.signal.aborted) {
            if (U) {
              clearTimeout(U);
            }
            $();
          }
        })
        .catch((z) => {
          if (!D.signal.aborted) {
            if (U) {
              clearTimeout(U);
            }
            e(A, "before_hook");
            r(q.ERROR, A, {
              error: z instanceof Error ? z : new Error(String(z)),
            });
            $();
          }
        });
    } else if (!L.current) {
      if (P.current && _.current !== A.target) {
        C();
      }
      const $ = et(A.target);
      if ($ && Vt($)) {
        C();
        c.current.updateState({
          action: d.current ?? B.UPDATE,
          lifecycle: R.READY,
          waiting: false,
        });
      } else if (A.targetWaitTimeout === 0) {
        c.current.updateState({
          action: d.current ?? B.UPDATE,
          lifecycle: R.READY,
          waiting: false,
        });
      } else if (!P.current) {
        const { targetWaitTimeout: D } = A;
        const N = Date.now();
        _.current = A.target;
        Y(M, `step:${m}`, "polling", "started", `${D}ms`);
        c.current.updateState({
          waiting: true,
        });
        P.current = setInterval(() => {
          const U = et(A.target);
          const z = Date.now() - N;
          const at = z >= D;
          if ((U && Vt(U)) || at) {
            Y(
              M,
              `step:${m}`,
              "polling",
              U && Vt(U) ? "found" : "timed out",
              `${z}ms`,
            );
            C();
            c.current.updateState({
              action: d.current ?? B.UPDATE,
              lifecycle: R.READY,
              waiting: false,
            });
          }
        }, 100);
      }
    }
    return () => {
      C();
    };
  }, [e, r, m, l, T, c]);
  g.useEffect(() => {
    if (!O.current) {
      return;
    }
    const {
      hasChanged: x,
      hasChangedTo: A,
      previous: k,
    } = gt(w.current, O.current);
    const M = b.current;
    if (!M) {
      return;
    }
    const $ = et(M.target);
    const D = !!$;
    if (D && Vt($)) {
      if (A("lifecycle", R.READY) && k.lifecycle === R.INIT) {
        r(q.STEP_BEFORE, M, {
          action: d.current ?? w.current.action,
        });
      }
      if (A("lifecycle", R.READY)) {
        const N = w.current;
        const U = Di(M, N, y.current.continuous) ? R.TOOLTIP : R.BEACON;
        const z = et(M.scrollTarget ?? M.spotlightTarget ?? M.target);
        const at = cn({
          isFirstStep: N.index === 0,
          scrollToFirstStep: y.current.scrollToFirstStep,
          step: M,
          target: z,
          targetLifecycle: U,
        });
        const Ut = U === R.TOOLTIP ? R.TOOLTIP_BEFORE : R.BEACON_BEFORE;
        Y(y.current.debug, `step:${m}`, "scroll", at ? "needed" : "skipped");
        c.current.updateState({
          action: B.UPDATE,
          lifecycle: Ut,
          scrolling: at,
        });
      }
    } else if (
      w.current.status === F.RUNNING &&
      l !== R.INIT &&
      l !== R.COMPLETE &&
      x("lifecycle")
    ) {
      Y(
        y.current.debug,
        `step:${m}`,
        D ? "Target not visible" : "Target not mounted",
        M,
      );
      e(M, "target_not_found");
      r(q.TARGET_NOT_FOUND, M);
      const N = w.current;
      if (!N.controlled) {
        c.current.updateState({
          action: B.UPDATE,
          index: N.index + (N.action === B.PREV ? -1 : 1),
          lifecycle: R.INIT,
        });
      }
    }
  }, [e, r, m, l, c]);
  g.useEffect(() => {
    if (!O.current) {
      return;
    }
    const { hasChangedTo: x, previous: A } = gt(w.current, O.current);
    const k = b.current;
    const M = E.current;
    if (k && x("lifecycle", R.TOOLTIP_BEFORE) && A.lifecycle === R.BEACON) {
      const N = et(k.scrollTarget ?? k.spotlightTarget ?? k.target);
      if (
        cn({
          isFirstStep: w.current.index === 0,
          scrollToFirstStep: y.current.scrollToFirstStep,
          step: k,
          target: N,
          targetLifecycle: R.TOOLTIP,
        })
      ) {
        c.current.updateState({
          scrolling: true,
          positioned: false,
        });
        return;
      }
    }
    const $ = l === R.BEACON_BEFORE || l === R.TOOLTIP_BEFORE;
    if (k && $ && !p) {
      const N = l === R.TOOLTIP_BEFORE ? R.TOOLTIP : R.BEACON;
      c.current.updateState({
        action: B.UPDATE,
        lifecycle: N,
      });
    }
    if (k && x("lifecycle", R.BEACON)) {
      r(q.BEACON, k);
    }
    if (k && x("lifecycle", R.TOOLTIP)) {
      r(q.TOOLTIP, k);
    }
    const D = w.current;
    if (
      (D.status === F.RUNNING ||
        (D.controlled && D.status === F.PAUSED && k)) &&
      M &&
      x("lifecycle", R.COMPLETE) &&
      A.lifecycle === R.TOOLTIP &&
      (r(q.STEP_AFTER, M, {
        action: d.current ?? B.UPDATE,
        index: A.index ?? D.index,
        lifecycle: D.lifecycle,
      }),
      M.after)
    ) {
      r(q.STEP_AFTER_HOOK, M, {
        action: d.current ?? B.UPDATE,
        index: A.index ?? D.index,
        lifecycle: D.lifecycle,
      });
      try {
        M.after({
          ...c.current.getState(),
          action: d.current ?? B.UPDATE,
          index: A.index ?? D.index,
          lifecycle: D.lifecycle,
          step: M,
        });
      } catch {}
    }
  }, [r, l, u, p, c]);
  g.useEffect(() => {
    if (!O.current) {
      return;
    }
    const { hasChangedTo: x, previous: A } = gt(w.current, O.current);
    const k = b.current;
    const M = E.current;
    if (x("action", B.REPLAY) && x("lifecycle", R.COMPLETE)) {
      c.current.updateState({
        lifecycle: R.INIT,
      });
      return;
    }
    if (h && !k && l === R.INIT) {
      c.current.updateState({
        action: B.UPDATE,
        lifecycle: R.COMPLETE,
        status: F.FINISHED,
      });
    }
    if (
      !w.current.controlled &&
      T === F.RUNNING &&
      x("lifecycle", R.COMPLETE) &&
      m < h
    ) {
      c.current.updateState({
        action: B.UPDATE,
        lifecycle: R.INIT,
      });
    }
    if (x("lifecycle", R.COMPLETE) && m >= h) {
      c.current.updateState({
        action: B.UPDATE,
        lifecycle: R.COMPLETE,
        status: F.FINISHED,
      });
    }
    const $ = k ?? M ?? Ne(y.current, y.current.steps[m - 1]);
    if ($ && x("status", [F.FINISHED, F.SKIPPED])) {
      let D;
      if (k) {
        D = m;
      } else if (M) {
        D = A.index ?? m;
      } else {
        D = m - 1;
      }
      r(q.TOUR_END, $, {
        index: D,
      });
      if (!w.current.controlled) {
        v.current.reset();
      }
      d.current = null;
    }
    if (k && x("action", B.STOP)) {
      d.current = null;
      r(q.TOUR_STATUS, k);
    }
    if (k && x("action", B.RESET)) {
      r(q.TOUR_STATUS, k);
      d.current = null;
    }
  }, [f, r, m, l, h, T, c]);
}
function Ui({ controls: t, emitEvent: e, props: n, state: r, store: o }) {
  const { debug: i, initialStepIndex: s, run: a, stepIndex: c, steps: f } = n;
  const m = g.useRef(undefined);
  const l = g.useRef(r);
  const u = g.useRef(t);
  l.current = r;
  u.current = t;
  g.useEffect(() => {
    const p = m.current;
    m.current = n;
    if (!p || n === p) {
      return;
    }
    const { hasChanged: h } = gt(n, p);
    if (!Te(p.steps, f)) {
      if ($n(f, i)) {
        o.current.setSteps(f);
      } else {
        Y(i, "tour", "Steps are not valid", f);
        e(
          q.ERROR,
          f[0] ?? {
            target: "",
            content: "",
          },
          {
            error: new Error("Steps are not valid"),
          },
        );
      }
    }
    if (h("run")) {
      if (a) {
        if (o.current.getState().size) {
          u.current.start(c ?? s);
        }
      } else {
        u.current.stop();
      }
    } else if (X.number(c) && h("stepIndex")) {
      const T = X.number(p.stepIndex) && p.stepIndex < c ? B.NEXT : B.PREV;
      if (![F.FINISHED, F.SKIPPED].includes(l.current.status)) {
        o.current.updateState(
          {
            action: T,
            index: c,
            lifecycle: R.INIT,
            positioned: false,
          },
          true,
        );
      }
    }
  }, [i, e, s, n, a, c, f, o]);
}
function zi(t, e) {
  var a;
  var c;
  var f;
  var m;
  const { beaconPosition: n, lifecycle: r, scrollOffset: o, step: i } = e;
  if (i.scrollTarget || i.spotlightTarget) {
    return Math.max(0, t);
  }
  let s = t - i.spotlightPadding.top;
  if (r === R.BEACON_BEFORE && n != null && n.placement) {
    const l = Wi(n);
    if (!["bottom"].includes(n.placement)) {
      s += Math.floor(l - o);
    }
  } else if (r === R.TOOLTIP_BEFORE) {
    const { placement: l } = i;
    if (l === "top") {
      const u =
        ((a = document.querySelector(".react-joyride__floater")) == null
          ? undefined
          : a.getBoundingClientRect().height) ?? 0;
      const p =
        (c = i.floatingOptions) != null && c.hideArrow ? 0 : i.arrowSize;
      const h = i.offset + i.spotlightPadding.top + p;
      s -= u + h;
    } else if (l === "left" || l === "right") {
      const u =
        ((f = document.querySelector(".react-joyride__floater")) == null
          ? undefined
          : f.getBoundingClientRect().height) ?? 0;
      const p =
        ((m = et(i.target)) == null
          ? undefined
          : m.getBoundingClientRect().height) ?? 0;
      const h = o + i.spotlightPadding.top + p / 2 - u / 2;
      if (h < o) {
        s -= o - h;
      }
    }
  }
  return Math.max(0, s);
}
function Wi(t) {
  var n;
  const e = (n = t.middlewareData) == null ? undefined : n.offset;
  if (e) {
    if (["left", "right"].some((r) => t.placement.startsWith(r))) {
      return e.x;
    } else {
      return e.y;
    }
  } else {
    return 0;
  }
}
function Vi({
  emitEvent: t,
  previousState: e,
  props: n,
  state: r,
  step: o,
  store: i,
}) {
  const { index: s, lifecycle: a, positioned: c, scrolling: f, status: m } = r;
  const l = g.useRef(null);
  const u = g.useRef(r);
  const p = g.useRef(e);
  const h = g.useRef(n);
  const T = g.useRef(o);
  u.current = r;
  p.current = e;
  h.current = n;
  T.current = o;
  g.useEffect(
    () => () => {
      var S;
      if ((S = l.current) != null) {
        S.call(l);
      }
    },
    [],
  );
  g.useEffect(() => {
    var b;
    if (!p.current || !T.current) {
      return;
    }
    const { hasChangedTo: S } = gt(u.current, p.current);
    const d = T.current;
    const { debug: y } = h.current;
    const { scrollDuration: w } = d;
    const O = a === R.BEACON_BEFORE || a === R.TOOLTIP_BEFORE;
    if (m === F.RUNNING && O && f && S("positioned", true)) {
      const E = et(d.scrollTarget ?? d.spotlightTarget ?? d.target);
      const v = i.current.getPositionData("beacon");
      const P = kt(E);
      const _ = P ? !P.isSameNode(Z()) : false;
      if ((b = l.current) != null) {
        b.call(l);
      }
      (async () => {
        if (_ && !Lt(P)) {
          const D = Z();
          const N = Ci(P);
          const U = {
            initial: D.scrollTop,
            target: N,
            element: D,
            duration: w,
          };
          t(q.SCROLL_START, d, {
            scroll: U,
          });
          const { cancel: z, promise: at } = an(N, {
            element: D,
            duration: w,
          });
          l.current = z;
          await at;
          t(q.SCROLL_END, d, {
            scroll: U,
          });
        }
        const C = Math.floor(Pi(E, d.scrollOffset)) || 0;
        const x = _
          ? C
          : zi(C, {
              beaconPosition: v,
              lifecycle: a,
              scrollOffset: d.scrollOffset,
              step: d,
            });
        Y(y, `step:${s}`, "scroll", _ ? "custom" : "document", `${C} → ${x}`);
        const A = P;
        const k = {
          initial: A.scrollTop,
          target: x,
          element: A,
          duration: w,
        };
        t(q.SCROLL_START, d, {
          scroll: k,
        });
        const { cancel: M, promise: $ } = an(x, {
          element: A,
          duration: w,
        });
        l.current = M;
        await $;
        t(q.SCROLL_END, d, {
          scroll: k,
        });
        i.current.updateState({
          scrolling: false,
        });
      })().catch(() => {
        i.current.updateState({
          scrolling: false,
        });
      });
    }
  }, [t, s, a, c, f, m, i]);
}
function Gi(t) {
  const e = Pr(() => Si(Ei, t), [t]);
  const {
    debug: n,
    initialStepIndex: r,
    onEvent: o,
    run: i,
    stepIndex: s,
    steps: a,
  } = e;
  const c = g.useRef(Mi(e));
  const f = Lr.useSyncExternalStore(
    c.current.subscribe,
    c.current.getSnapshot,
    c.current.getServerSnapshot,
  );
  const [m, l] = g.useState([]);
  const u = g.useCallback((b, E) => {
    l((v) => [
      ...v,
      {
        reason: E,
        step: b,
      },
    ]);
  }, []);
  const p = g.useCallback(() => {
    l([]);
  }, []);
  Bi(c, n);
  const h = Fi(c, n, p);
  const T = $i(o, h, c);
  const { index: S, size: d, status: y } = f;
  const w = hn(f);
  const O = g.useMemo(() => Ne(e, a[S]), [S, e, a]);
  Ar(() => {
    if (i && d && $n(a, n)) {
      h.start(s ?? r);
    }
  });
  Cr(() => {
    if (i && d && y === F.IDLE) {
      c.current.updateState({
        status: F.READY,
      });
    }
  }, [i, d, y]);
  Ui({
    controls: h,
    emitEvent: T,
    props: e,
    state: f,
    store: c,
  });
  Hi({
    addFailure: u,
    controls: h,
    emitEvent: T,
    previousState: w,
    props: e,
    state: f,
    step: O,
    store: c,
  });
  Vi({
    emitEvent: T,
    previousState: w,
    props: e,
    state: f,
    step: O,
    store: c,
  });
  return {
    controls: h,
    failures: m,
    mergedProps: e,
    state: f,
    step: O,
    store: c,
  };
}
function qi(t) {
  const [e, n] = g.useState(null);
  g.useEffect(() => {
    let r = null;
    let o = false;
    if (t) {
      if (X.domElement(t)) {
        r = t;
        o = true;
      } else {
        const i = document.querySelector(t);
        if (i) {
          r = i;
        }
      }
    } else {
      const i = document.createElement("div");
      i.id = Ti;
      document.body.appendChild(i);
      r = i;
    }
    n(r);
    return () => {
      if (!!r && !o) {
        if (r.parentNode === document.body) {
          document.body.removeChild(r);
        }
      }
    };
  }, [t]);
  return e;
}
const Yi = {
  animation: "joyride-loader-spin 1s linear infinite",
  border: "5px solid rgba(0, 0, 0, 0.1)",
  borderRadius: "50%",
  borderTopColor: "#555",
};
function Ki({ nonce: t, step: e }) {
  const { loaderComponent: n } = e;
  const r = !!n;
  g.useEffect(() => {
    if (r || document.getElementById("joyride-loader-animation")) {
      return Mt;
    }
    const c = document.createElement("style");
    c.id = "joyride-loader-animation";
    if (t) {
      c.setAttribute("nonce", t);
    }
    c.appendChild(
      document.createTextNode(`
        @keyframes joyride-loader-spin {
          to { transform: rotate(360deg); }
        }
      `),
    );
    document.head.appendChild(c);
    return () => {
      const f = document.getElementById("joyride-loader-animation");
      if (f != null && f.parentNode) {
        f.parentNode.removeChild(f);
      }
    };
  }, [r, t]);
  if (n === null) {
    return null;
  }
  const { height: o, width: i, ...s } = e.styles.loader;
  let a;
  if (n) {
    const c = n;
    a = I.createElement(c, {
      step: e,
    });
  } else {
    a = I.createElement("div", {
      style: {
        ...Yi,
        height: o,
        width: i,
        borderTopColor: e.primaryColor,
      },
    });
  }
  return I.createElement(
    "div",
    {
      className: "react-joyride__loader",
      "data-testid": "loader",
      style: s,
    },
    a,
  );
}
const Xi = {
  height: 0,
  isFixed: false,
  left: 0,
  top: 0,
  width: 0,
};
function It(t, e) {
  const n = et(t);
  if (!n) {
    return Xi;
  }
  const r = Le(n);
  const o = Lt(n);
  const i = vi(n, e.top, o);
  return {
    height: Math.round(
      ((r == null ? undefined : r.height) ?? 0) + e.top + e.bottom,
    ),
    isFixed: o,
    left: Math.round(((r == null ? undefined : r.left) ?? 0) - e.left),
    top: i,
    width: Math.round(
      ((r == null ? undefined : r.width) ?? 0) + e.left + e.right,
    ),
  };
}
function Ji(t, e, n) {
  const [r, o] = g.useState(() => It(t, e));
  const i = g.useRef(undefined);
  const s = g.useRef(null);
  const a = g.useRef(n);
  const c = g.useRef(null);
  const f = g.useCallback(() => {
    clearTimeout(i.current);
    i.current = window.setTimeout(() => {
      o((l) => {
        const u = It(t, e);
        if (
          l.top === u.top &&
          l.left === u.left &&
          l.width === u.width &&
          l.height === u.height &&
          l.isFixed === u.isFixed
        ) {
          return l;
        } else {
          return u;
        }
      });
    }, 100);
  }, [t, e]);
  g.useEffect(() => {
    let l = null;
    const u = (h) => {
      s.current = kt(h, true);
      if (s.current) {
        s.current.addEventListener("scroll", f, {
          passive: true,
        });
      }
      window.addEventListener("scroll", f, {
        passive: true,
      });
      window.addEventListener("resize", f);
      if (typeof ResizeObserver !== "undefined") {
        c.current = new ResizeObserver(f);
        c.current.observe(h);
      }
      o(It(t, e));
    };
    const p = et(t);
    if (p) {
      u(p);
    } else {
      l = new MutationObserver(() => {
        const h = et(t);
        if (h) {
          if (l != null) {
            l.disconnect();
          }
          l = null;
          u(h);
        }
      });
      l.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }
    return () => {
      var h;
      if (l != null) {
        l.disconnect();
      }
      if (s.current) {
        s.current.removeEventListener("scroll", f);
      }
      window.removeEventListener("scroll", f);
      window.removeEventListener("resize", f);
      if ((h = c.current) != null) {
        h.disconnect();
      }
      clearTimeout(i.current);
    };
  }, [t, e, f]);
  g.useEffect(() => {
    if (a.current && !n) {
      o(It(t, e));
    }
    a.current = n;
  }, [n, t, e]);
  let m = r;
  if (a.current && !n) {
    m = It(t, e);
  }
  return m;
}
function Zi(t, e, n) {
  let r = `M0 0H${t}V${e}H0Z`;
  if (n) {
    r += ` ${n}`;
  }
  return r;
}
function un(t, e, n, r, o) {
  if (n <= 0 || r <= 0) {
    return "";
  }
  const i = Math.max(0, Math.min(o, n / 2, r / 2));
  let s = `M${t + i} ${e}`;
  s += `H${t + n - i}`;
  s += `A${i} ${i} 0 0 1 ${t + n} ${e + i}`;
  s += `V${e + r - i}`;
  s += `A${i} ${i} 0 0 1 ${t + n - i} ${e + r}`;
  s += `H${t + i}`;
  s += `A${i} ${i} 0 0 1 ${t} ${e + r - i}`;
  s += `V${e + i}`;
  s += `A${i} ${i} 0 0 1 ${t + i} ${e}Z`;
  return s;
}
const Qi = [R.BEACON_BEFORE, R.BEACON];
function ts(t) {
  var $;
  var D;
  const {
    blockTargetInteraction: e,
    continuous: n,
    hideOverlay: r,
    lifecycle: o,
    onClickOverlay: i,
    overlayClickAction: s,
    placement: a,
    portalElement: c,
    scrolling: f,
    spotlightPadding: m,
    spotlightRadius: l,
    spotlightTarget: u,
    styles: p,
    target: h,
    waiting: T,
  } = t;
  const S = kr();
  const d = Ji(u ?? h, m, f || T);
  const y = g.useRef(null);
  const w = (o === R.TOOLTIP || o === R.TOOLTIP_BEFORE) && a !== "center";
  const [O, b] = g.useState(false);
  const E = c ? (($ = y.current) == null ? undefined : $.offsetParent) : null;
  const v = (E == null ? undefined : E.clientWidth) ?? S.width;
  const P = (E == null ? undefined : E.clientHeight) ?? Ri() ?? S.height;
  const _ =
    ((D = p.overlay) == null ? undefined : D.backgroundColor) ??
    "rgba(0, 0, 0, 0.5)";
  const L = g.useMemo(() => {
    const { backgroundColor: N, mixBlendMode: U, ...z } = p.overlay;
    return {
      height: P,
      pointerEvents: "none",
      ...z,
    };
  }, [P, p.overlay]);
  const C = w && !f && !T;
  g.useEffect(() => {
    if (C) {
      requestAnimationFrame(() => b(true));
    } else {
      b(false);
    }
  }, [C]);
  const x = n && Qi.includes(o);
  const A = !n && o !== R.TOOLTIP;
  if (r || (!T && (x || A))) {
    return null;
  }
  let k = "";
  if (C) {
    if (c && E) {
      const N = et(u ?? h);
      if (N) {
        const U = sn(N);
        const z = sn(E);
        k = un(
          U.left - z.left - m.left,
          U.top - z.top - m.top,
          N.offsetWidth + m.left + m.right,
          N.offsetHeight + m.top + m.bottom,
          l,
        );
      }
    } else {
      k = un(d.left, d.top, d.width, d.height, l);
    }
  }
  const M = Zi(v, P, k);
  return I.createElement(
    "div",
    {
      ref: y,
      "aria-hidden": "true",
      className: "react-joyride__overlay",
      "data-testid": "overlay",
      style: L,
    },
    I.createElement(
      "svg",
      {
        className: "react-joyride__spotlight",
        "data-testid": "spotlight",
        style: {
          height: P,
          left: 0,
          position: d.isFixed ? "fixed" : "absolute",
          top: 0,
          width: v,
        },
      },
      I.createElement("path", {
        d: M,
        fill: _,
        fillRule: "evenodd",
        onClick: i,
        style: {
          cursor: s ? "pointer" : "default",
          pointerEvents: "auto",
        },
      }),
      k &&
        I.createElement("path", {
          d: k,
          fill: _,
          style: {
            opacity: O ? 0 : 1,
            pointerEvents: e ? "auto" : "none",
            transition: "opacity 0.2s",
          },
        }),
      k &&
        Object.keys(p.spotlight).length > 0 &&
        I.createElement("path", {
          d: k,
          fill: "none",
          style: {
            pointerEvents: "none",
          },
          ...p.spotlight,
        }),
    ),
  );
}
function Hn(t) {
  const { children: e, element: n } = t;
  if (n) {
    return pn.createPortal(e, n);
  } else {
    return null;
  }
}
const es =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), area[href], [tabindex]:not([tabindex="-1"]), [contenteditable]';
function ns(t, e) {
  const n = g.useRef(null);
  g.useEffect(() => {
    if (!t) {
      return Mt;
    }
    n.current = document.activeElement;
    const r = (i) => {
      if (i.key !== "Tab") {
        return;
      }
      const s = [...t.querySelectorAll(es)];
      const { shiftKey: a } = i;
      if (!s.length) {
        return;
      }
      i.preventDefault();
      let c = document.activeElement ? s.indexOf(document.activeElement) : 0;
      if (c === -1 || (!a && c + 1 === s.length)) {
        c = 0;
      } else if (a && c === 0) {
        c = s.length - 1;
      } else {
        c += a ? -1 : 1;
      }
      s[c].focus();
    };
    t.addEventListener("keydown", r, false);
    let o;
    {
      const i = t.querySelector(e);
      if (i) {
        o = setTimeout(() => {
          i.focus({
            preventScroll: true,
          });
        }, 100);
      }
    }
    return () => {
      var i;
      t.removeEventListener("keydown", r);
      if (o !== undefined) {
        clearTimeout(o);
      }
      if ((i = n.current) != null) {
        i.focus({
          preventScroll: true,
        });
      }
    };
  }, [t, e]);
}
function ut(t, e, n) {
  const [r] = t.split("-");
  switch (r) {
    case "top":
    case "bottom":
      return {
        width: e,
        height: n,
      };
    case "left":
    case "right":
      return {
        width: n,
        height: e,
      };
    default:
      return null;
  }
}
function rs(t, e, n) {
  const [r] = t.split("-");
  switch (r) {
    case "top":
      return {
        points: `0,0 ${e / 2},${n} ${e},0`,
        ...ut(t, e, n),
      };
    case "bottom":
      return {
        points: `${e},${n} ${e / 2},0 0,${n}`,
        ...ut(t, e, n),
      };
    case "left":
      return {
        points: `0,0 ${n},${e / 2} 0,${e}`,
        ...ut(t, e, n),
      };
    case "right":
      return {
        points: `${n},${e} ${n},0 0,${e / 2}`,
        ...ut(t, e, n),
      };
    default:
      return null;
  }
}
function os(t, e, n, r) {
  if (!e) {
    return {};
  }
  const [o] = t.split("-");
  switch (o) {
    case "top":
      return {
        bottom: -n,
        left: e.x ?? 0,
        ...ut(t, r, n),
      };
    case "bottom":
      return {
        top: -n,
        left: e.x ?? 0,
        ...ut(t, r, n),
      };
    case "left":
      return {
        right: -n,
        top: e.y ?? 0,
        ...ut(t, r, n),
      };
    case "right":
      return {
        left: -n,
        top: e.y ?? 0,
        ...ut(t, r, n),
      };
    default:
      return {};
  }
}
function is({
  arrowComponent: t,
  arrowRef: e,
  base: n,
  placement: r,
  position: o,
  size: i,
  styles: s,
}) {
  const a = t;
  let c = null;
  if (a) {
    if (!ut(r, n, i)) {
      return null;
    }
    c = I.createElement(
      "span",
      {
        style: {
          flexShrink: 0,
        },
      },
      I.createElement(a, {
        base: n,
        placement: r,
        size: i,
      }),
    );
  } else {
    const f = rs(r, n, i);
    if (!f) {
      return null;
    }
    c = I.createElement(
      "svg",
      {
        height: f.height,
        width: f.width,
        xmlns: "http://www.w3.org/2000/svg",
      },
      I.createElement("polygon", {
        fill: "currentColor",
        points: f.points,
      }),
    );
  }
  return I.createElement(
    "span",
    {
      ref: e,
      className: "react-joyride__arrow",
      "data-testid": "arrow",
      style: {
        ...s,
        ...os(r, o, i, n),
        ...(o
          ? {}
          : {
              visibility: "hidden",
            }),
      },
    },
    c,
  );
}
function ss(t) {
  const {
    beaconComponent: e,
    continuous: n,
    index: r,
    isLastStep: o,
    locale: i,
    nonce: s,
    onInteract: a,
    shouldFocus: c,
    size: f,
    step: m,
    styles: l,
  } = t;
  const u = g.useRef(null);
  const p = !!e;
  g.useEffect(() => {
    if (p || document.getElementById("joyride-beacon-animation")) {
      return Mt;
    }
    const S = document.createElement("style");
    S.id = "joyride-beacon-animation";
    if (s) {
      S.setAttribute("nonce", s);
    }
    S.appendChild(
      document.createTextNode(`
        @keyframes joyride-beacon-inner {
          20% {
            opacity: 0.9;
          }

          90% {
            opacity: 0.7;
          }
        }

        @keyframes joyride-beacon-outer {
          0% {
            transform: scale(1);
          }

          45% {
            opacity: 0.7;
            transform: scale(0.75);
          }

          100% {
            opacity: 0.9;
            transform: scale(1);
          }
        }
      `),
    );
    document.head.appendChild(S);
    const d = setTimeout(() => {
      if (X.domElement(u.current) && c) {
        u.current.focus();
      }
    }, 0);
    return () => {
      clearTimeout(d);
      const y = document.getElementById("joyride-beacon-animation");
      if (y != null && y.parentNode) {
        y.parentNode.removeChild(y);
      }
    };
  }, [p, s, c]);
  const h = lt(i.open);
  let T;
  if (e) {
    const S = e;
    T = I.createElement(S, {
      continuous: n,
      index: r,
      isLastStep: o,
      size: f,
      step: m,
    });
  } else {
    T = I.createElement(
      "span",
      {
        style: l.beacon,
      },
      I.createElement("span", {
        style: l.beaconOuter,
      }),
      I.createElement("span", {
        style: l.beaconInner,
      }),
    );
  }
  return I.createElement(
    "button",
    {
      ref: u,
      "aria-label": h,
      className: "react-joyride__beacon",
      "data-testid": "button-beacon",
      onClick: a,
      onMouseEnter: a,
      style: l.beaconWrapper,
      title: h,
      type: "button",
    },
    T,
  );
}
function cs({ styles: t, ...e }) {
  const { color: n, height: r, width: o, ...i } = t;
  return I.createElement(
    "button",
    {
      style: i,
      type: "button",
      ...e,
    },
    I.createElement(
      "svg",
      {
        height: typeof r == "number" ? `${r}px` : r,
        preserveAspectRatio: "xMidYMid",
        version: "1.1",
        viewBox: "0 0 18 18",
        width: typeof o == "number" ? `${o}px` : o,
        xmlns: "http://www.w3.org/2000/svg",
      },
      I.createElement(
        "g",
        null,
        I.createElement("path", {
          d: "M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",
          fill: n,
        }),
      ),
    ),
  );
}
function as(t) {
  const {
    backProps: e,
    closeProps: n,
    index: r,
    isLastStep: o,
    primaryProps: i,
    skipProps: s,
    step: a,
    tooltipProps: c,
  } = t;
  const { buttons: f, content: m, styles: l, title: u } = a;
  const p = {};
  if (f.includes("primary")) {
    p.primary = I.createElement("button", {
      "data-testid": "button-primary",
      style: l.buttonPrimary,
      type: "button",
      ...i,
    });
  }
  if (f.includes("skip") && !o) {
    p.skip = I.createElement("button", {
      "aria-live": "off",
      "data-testid": "button-skip",
      style: l.buttonSkip,
      type: "button",
      ...s,
    });
  }
  if (f.includes("back") && r > 0) {
    p.back = I.createElement("button", {
      "data-testid": "button-back",
      style: l.buttonBack,
      type: "button",
      ...e,
    });
  }
  p.close =
    f.includes("close") &&
    I.createElement(cs, {
      "data-testid": "button-close",
      styles: l.buttonClose,
      ...n,
    });
  const h = u
    ? {
        "aria-labelledby": "joyride-tooltip-title",
        "aria-describedby": "joyride-tooltip-content",
      }
    : {
        "aria-label": lt(m),
        "aria-describedby": "joyride-tooltip-content",
      };
  return I.createElement(
    "div",
    {
      key: "JoyrideTooltip",
      className: "react-joyride__tooltip",
      "data-joyride-step": r,
      ...(a.id && {
        "data-joyride-id": a.id,
      }),
      style: l.tooltip,
      ...c,
      ...h,
    },
    I.createElement(
      "div",
      {
        style: l.tooltipContainer,
      },
      u &&
        I.createElement(
          "h4",
          {
            id: "joyride-tooltip-title",
            style: l.tooltipTitle,
          },
          u,
        ),
      I.createElement(
        "div",
        {
          id: "joyride-tooltip-content",
          style: l.tooltipContent,
        },
        m,
      ),
    ),
    f.some((T) => T === "back" || T === "primary" || T === "skip") &&
      I.createElement(
        "div",
        {
          style: l.tooltipFooter,
        },
        I.createElement(
          "div",
          {
            style: l.tooltipFooterSpacer,
          },
          p.skip,
        ),
        p.back,
        p.primary,
      ),
    p.close,
  );
}
function ls(t) {
  const {
    continuous: e,
    controls: n,
    index: r,
    isLastStep: o,
    size: i,
    step: s,
  } = t;
  const a = (d) => {
    d.preventDefault();
    n.prev(Q.BUTTON_BACK);
  };
  const c = (d) => {
    d.preventDefault();
    if (s.closeButtonAction === "skip") {
      n.skip(Q.BUTTON_CLOSE);
    } else if (s.closeButtonAction === "replay") {
      n.replay(Q.BUTTON_CLOSE);
    } else {
      n.close(Q.BUTTON_CLOSE);
    }
  };
  const f = (d) => {
    d.preventDefault();
    if (!e) {
      n.close(Q.BUTTON_PRIMARY);
      return;
    }
    n.next(Q.BUTTON_PRIMARY);
  };
  const m = (d) => {
    d.preventDefault();
    n.skip(Q.BUTTON_SKIP);
  };
  const l = () => {
    const {
      back: d,
      close: y,
      last: w,
      next: O,
      nextWithProgress: b,
      skip: E,
    } = s.locale;
    const v = lt(d);
    const P = lt(y);
    const _ = lt(w);
    const L = lt(O);
    const C = lt(E);
    let x = y;
    let A = P;
    if (e) {
      x = O;
      A = L;
      if (s.showProgress && !o) {
        const k = lt(b, {
          step: r + 1,
          steps: i,
        });
        x = Ee(b, r + 1, i);
        A = k;
      }
      if (o) {
        x = w;
        A = _;
      }
    }
    return {
      backProps: {
        "aria-label": v,
        children: d,
        "data-action": "back",
        onClick: a,
        role: "button",
        title: v,
      },
      closeProps: {
        "aria-label": P,
        children: y,
        "data-action": "close",
        onClick: c,
        role: "button",
        title: P,
      },
      primaryProps: {
        "aria-label": A,
        children: x,
        "data-action": "primary",
        onClick: f,
        role: "button",
        title: A,
      },
      skipProps: {
        "aria-label": C,
        children: E,
        "data-action": "skip",
        onClick: m,
        role: "button",
        title: C,
      },
      tooltipProps: {
        "aria-modal": true,
        role: "alertdialog",
      },
    };
  };
  const {
    arrowComponent: u,
    beaconComponent: p,
    tooltipComponent: h,
    ...T
  } = s;
  let S;
  if (h) {
    const d = h;
    S = I.createElement(d, {
      ...l(),
      continuous: e,
      controls: n,
      index: r,
      isLastStep: o,
      size: i,
      step: T,
    });
  } else {
    S = I.createElement(as, {
      ...l(),
      continuous: e,
      controls: n,
      index: r,
      isLastStep: o,
      size: i,
      step: T,
    });
  }
  return S;
}
function us(t) {
  if (t.startsWith("left")) {
    return ["top", "bottom"];
  }
  if (t.startsWith("right")) {
    return ["bottom", "top"];
  }
}
function fs(t, e, n) {
  var r;
  var o;
  if (t) {
    return [gi()];
  } else if (
    ((r = e.floatingOptions) == null ? undefined : r.flipOptions) === false
  ) {
    return [];
  } else {
    return [
      mi({
        crossAxis: false,
        fallbackPlacements: us(n),
        padding: 20,
        ...((o = e.floatingOptions) == null ? undefined : o.flipOptions),
      }),
    ];
  }
}
function ds(t) {
  var U;
  var z;
  var at;
  var Ut;
  var Ie;
  const {
    continuous: e,
    controls: n,
    index: r,
    lifecycle: o,
    nonce: i,
    open: s,
    portalElement: a,
    setPositionData: c,
    setTooltipRef: f,
    shouldScroll: m,
    size: l,
    step: u,
    target: p,
    updateState: h,
  } = t;
  const T = g.useRef(null);
  const S = g.useRef({});
  const d = g.useRef({});
  const y = u.placement === "center";
  const w = u.placement === "auto";
  const O = g.useMemo(
    () => ({
      getBoundingClientRect: () => ({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        top: window.innerHeight / 2,
        left: window.innerWidth / 2,
        bottom: window.innerHeight / 2,
        right: window.innerWidth / 2,
        width: 0,
        height: 0,
      }),
    }),
    [],
  );
  const b = g.useMemo(() => (Fn(p) ? kt(p) : undefined), [p]);
  const E = g.useMemo(() => Lt(p), [p]);
  const v = g.useMemo(
    () =>
      b
        ? {
            boundary: b,
            rootBoundary: "viewport",
          }
        : {},
    [b],
  );
  const P = y || w ? "bottom" : u.placement;
  const _ = y
    ? "fixed"
    : (((U = u.floatingOptions) == null ? undefined : U.strategy) ??
      (u.isFixed || E ? "fixed" : "absolute"));
  const L = g.useMemo(() => {
    var K;
    var pt;
    var Nt;
    var De;
    if (y) {
      return [
        {
          name: "center",
          fn: ({ rects: xt }) => ({
            x: (window.innerWidth - xt.floating.width) / 2,
            y: (window.innerHeight - xt.floating.height) / 2,
          }),
        },
      ];
    } else {
      return [
        nn(
          ({ placement: xt }) => {
            var _e;
            let zt = "right";
            if (xt.startsWith("top")) {
              zt = "top";
            } else if (xt.startsWith("bottom")) {
              zt = "bottom";
            } else if (xt.startsWith("left")) {
              zt = "left";
            }
            const Yn = u.spotlightTarget ? 0 : u.spotlightPadding[zt];
            return (
              u.offset +
              Yn +
              ((_e = u.floatingOptions) != null && _e.hideArrow
                ? 0
                : u.arrowSize)
            );
          },
          [
            u.offset,
            u.spotlightPadding,
            u.spotlightTarget,
            u.arrowSize,
            (K = u.floatingOptions) == null ? undefined : K.hideArrow,
          ],
        ),
        ...fs(w, u, P),
        pi({
          padding: 10,
          ...v,
          ...((pt = u.floatingOptions) == null ? undefined : pt.shiftOptions),
        }),
        ...((Nt = u.floatingOptions) != null && Nt.hideArrow
          ? []
          : [
              hi(
                {
                  element: T,
                  padding: u.arrowSpacing,
                },
                [u.arrowSpacing, u.arrowBase],
              ),
            ]),
        ...(((De = u.floatingOptions) == null ? undefined : De.middleware) ??
          []),
      ];
    }
  }, [y, u, w, P, v]);
  const C = en({
    ...(y
      ? {
          elements: {
            reference: O,
          },
        }
      : {}),
    placement: P,
    strategy: _,
    middleware: L,
  });
  const x = en({
    strategy: _,
    placement: u.beaconPlacement ?? (w || y ? "bottom" : u.placement),
    middleware: g.useMemo(() => {
      var K;
      var pt;
      return [
        nn(
          ((pt =
            (K = u.floatingOptions) == null ? undefined : K.beaconOptions) ==
          null
            ? undefined
            : pt.offset) ?? -18,
        ),
      ];
    }, [
      (at = (z = u.floatingOptions) == null ? undefined : z.beaconOptions) ==
      null
        ? undefined
        : at.offset,
    ]),
    whileElementsMounted: Ze,
  });
  d.current = C.middlewareData;
  S.current = x.middlewareData;
  g.useEffect(() => {
    var Nt;
    const { floating: K, reference: pt } = C.elements;
    if (!!pt && !!K && o === R.TOOLTIP) {
      return Ze(
        pt,
        K,
        C.update,
        (Nt = u.floatingOptions) == null ? undefined : Nt.autoUpdate,
      );
    }
  }, [
    o,
    C.update,
    (Ut = u.floatingOptions) == null ? undefined : Ut.autoUpdate,
    u.target,
    C.elements,
  ]);
  g.useEffect(() => {
    if (!y && p) {
      C.refs.setReference(p);
    }
    if (p) {
      x.refs.setReference(p);
    }
  }, [x.refs, y, p, C.refs]);
  g.useEffect(() => {
    if (C.isPositioned) {
      c("tooltip", {
        placement: C.placement,
        x: C.x ?? 0,
        y: C.y ?? 0,
        middlewareData: d.current,
      });
    }
  }, [c, C.isPositioned, C.placement, C.x, C.y]);
  g.useEffect(() => {
    if (x.isPositioned) {
      c("beacon", {
        placement: x.placement,
        x: x.x ?? 0,
        y: x.y ?? 0,
        middlewareData: S.current,
      });
    }
  }, [c, x.isPositioned, x.placement, x.x, x.y]);
  const A = u.zIndex + 1;
  const k = g.useCallback(
    (K) => {
      if (K.type !== "mouseenter" || u.beaconTrigger === "hover") {
        h({
          lifecycle: R.TOOLTIP_BEFORE,
          positioned: false,
        });
      }
    },
    [u.beaconTrigger, h],
  );
  const M = g.useCallback(
    (K) => {
      if (K) {
        C.refs.setFloating(K);
        f(K);
      }
    },
    [C.refs, f],
  );
  const { arrow: $, floater: D } = u.styles;
  let N = null;
  if (o === R.TOOLTIP || o === R.TOOLTIP_BEFORE) {
    const K = on({
      ...D,
      ...C.floatingStyles,
      zIndex: A,
      opacity: s && C.isPositioned ? 1 : 0,
      ...(!s && {
        transition: "none",
      }),
    });
    N = I.createElement(
      "div",
      {
        ref: M,
        className: "react-joyride__floater",
        "data-testid": "floater",
        id: `react-joyride-step-${r}`,
        style: K,
      },
      I.createElement(ls, {
        continuous: e,
        controls: n,
        index: r,
        isLastStep: r + 1 === l,
        size: l,
        step: u,
      }),
      !y &&
        ((Ie = u.floatingOptions) == null || !Ie.hideArrow) &&
        I.createElement(is, {
          arrowComponent: u.arrowComponent,
          arrowRef: T,
          base: u.arrowBase,
          placement: C.placement,
          position: C.middlewareData.arrow,
          size: u.arrowSize,
          styles: $,
        }),
    );
  } else if (o === R.BEACON || o === R.BEACON_BEFORE) {
    N = I.createElement(
      "div",
      {
        ref: x.refs.setFloating,
        className: "react-joyride__floater",
        "data-testid": "floater-beacon",
        id: `react-joyride-step-${r}-beacon`,
        style: on({
          ...x.floatingStyles,
          zIndex: A,
        }),
      },
      I.createElement(ss, {
        beaconComponent: u.beaconComponent,
        continuous: e,
        index: r,
        isLastStep: r + 1 === l,
        locale: u.locale,
        nonce: i,
        onInteract: k,
        shouldFocus: m,
        size: l,
        step: u,
        styles: u.styles,
      }),
    );
  }
  return I.createElement(
    Hn,
    {
      element: a,
    },
    N,
  );
}
function ps(t) {
  const {
    continuous: e,
    controls: n,
    index: r,
    lifecycle: o,
    nonce: i,
    portalElement: s,
    setPositionData: a,
    shouldScroll: c,
    size: f,
    step: m,
    updateState: l,
  } = t;
  const [u, p] = g.useState(null);
  ns(m.disableFocusTrap ? null : u, "[data-action=primary]");
  const h = et(m.target);
  const T = o === R.TOOLTIP;
  if (!Bn(m) || !X.domElement(h)) {
    return null;
  } else {
    return I.createElement(ds, {
      key: `JoyrideStep-${r}`,
      continuous: e,
      controls: n,
      index: r,
      lifecycle: o,
      nonce: i,
      open: T,
      portalElement: s,
      setPositionData: a,
      setTooltipRef: p,
      shouldScroll: c,
      size: f,
      step: m,
      target: h,
      updateState: l,
    });
  }
}
function ms({ controls: t, mergedProps: e, state: n, step: r, store: o }) {
  const {
    continuous: i,
    debug: s,
    nonce: a,
    portalElement: c,
    scrollToFirstStep: f,
  } = e;
  const m = qi(c);
  const { index: l, lifecycle: u, status: p } = n;
  const h = p === F.RUNNING;
  const [T, S] = g.useState(false);
  const d = g.useRef(null);
  const y = (r == null ? undefined : r.loaderDelay) ?? 0;
  g.useEffect(() => {
    if (n.waiting) {
      if (y === 0) {
        S(true);
      } else {
        d.current = setTimeout(() => {
          S(true);
        }, y);
      }
    } else {
      S(false);
    }
    return () => {
      if (d.current) {
        clearTimeout(d.current);
        d.current = null;
      }
    };
  }, [y, n.waiting]);
  g.useEffect(() => {
    if (!h) {
      return;
    }
    const b = (E) => {
      if (!!r && u === R.TOOLTIP) {
        if (E.key === "Escape" && r.dismissKeyAction) {
          if (r.dismissKeyAction === "next") {
            t.next(Q.KEYBOARD);
          } else if (r.dismissKeyAction === "replay") {
            t.replay(Q.KEYBOARD);
          } else {
            t.close(Q.KEYBOARD);
          }
        }
      }
    };
    document.body.addEventListener("keydown", b, {
      passive: true,
    });
    return () => {
      document.body.removeEventListener("keydown", b);
    };
  }, [t, h, u, r]);
  const w = g.useCallback(() => {
    switch (r == null ? undefined : r.overlayClickAction) {
      case "close":
        t.close(Q.OVERLAY);
        break;
      case "next":
        t.next(Q.OVERLAY);
        break;
      case "replay":
        t.replay(Q.OVERLAY);
        break;
    }
  }, [t, r == null ? undefined : r.overlayClickAction]);
  if (!r || !h) {
    return null;
  }
  const O = n.action === B.START && !r.skipBeacon && r.placement !== "center";
  return I.createElement(
    I.Fragment,
    null,
    u !== R.INIT &&
      I.createElement(ps, {
        ...n,
        continuous: i,
        controls: t,
        debug: s,
        nonce: a,
        portalElement: m,
        setPositionData: o.current.setPositionData,
        shouldScroll: !r.skipScroll && (l !== 0 || f),
        step: r,
        updateState: o.current.updateState,
      }),
    I.createElement(
      Hn,
      {
        element: m,
      },
      I.createElement(
        I.Fragment,
        null,
        T &&
          I.createElement(Ki, {
            nonce: a,
            step: r,
          }),
        !O &&
          I.createElement(ts, {
            ...r,
            continuous: i,
            lifecycle: u,
            onClickOverlay: w,
            portalElement: c ? m : null,
            scrolling: n.scrolling,
            waiting: n.waiting,
          }),
      ),
    ),
  );
}
function gs(t) {
  const {
    controls: e,
    failures: n,
    mergedProps: r,
    state: o,
    step: i,
    store: s,
  } = Gi(t);
  return {
    controls: e,
    failures: n,
    on: g.useCallback((a, c) => s.current.on(a, c), [s]),
    state: g.useMemo(() => te(o, "positioned"), [o]),
    step: i,
    Tour: ke()
      ? I.createElement(ms, {
          controls: e,
          mergedProps: r,
          state: o,
          step: i,
          store: s,
        })
      : null,
  };
}
function hs(t) {
  const { Tour: e } = gs(t);
  return e;
}
function Un(t) {
  if (ke()) {
    return I.createElement(hs, t);
  } else {
    return null;
  }
}
const ys = {
  px: 2.25,
  pb: 2,
  pt: 1.8,
};
const bs = {
  minWidth: 0,
};
const ws = (t) => ({
  alignItems: "center",
  background: `linear-gradient(145deg, ${J(t.palette.primary.main, 0.18)}, ${J(t.palette.primary.main, 0.06)})`,
  border: `1px solid ${J(t.palette.primary.main, 0.3)}`,
  borderRadius: t.shape.radiusMdPx,
  boxShadow: `inset 0 1px 0 ${J(t.palette.background.paper, 0.64)}`,
  color: "primary.main",
  flex: "0 0 auto",
  height: 42,
  justifyContent: "center",
  width: 42,
});
const Es = (t) => ({
  backgroundColor: J(t.palette.primary.main, 0.1),
  borderRadius: 999,
  height: 5,
  mt: 1.5,
  overflow: "hidden",
  "& .MuiLinearProgress-bar": {
    background: `linear-gradient(90deg, ${t.palette.primary.main}, ${t.palette.success.main})`,
    borderRadius: 999,
    transition: t.transitions.create("transform", {
      duration: 440,
      easing: t.transitions.easing.easeInOut,
    }),
  },
});
const Ts = {
  animation:
    "thread-tour-content-enter 320ms cubic-bezier(0.22, 1, 0.36, 1) both",
  minHeight: 94,
  pt: 1.9,
  "@keyframes thread-tour-content-enter": {
    from: {
      opacity: 0,
      transform: "translateY(8px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
};
const xs = {
  alignItems: "center",
  justifyContent: "space-between",
  minHeight: 40,
  pt: 1.5,
};
const Ss = {
  alignItems: "center",
};
const Os = {
  alignItems: "center",
};
const zn = {
  minWidth: 96,
};
const Rs = (t) => ({
  background: `linear-gradient(90deg, ${t.palette.primary.main}, ${t.palette.success.main} 58%, ${J(t.palette.primary.main, 0.18)})`,
  height: 4,
  width: "100%",
});
const Wn = (t) => ({
  arrow: {
    filter: `drop-shadow(0 5px 5px ${J(t.palette.surface.shadow, 0.12)})`,
  },
  floater: {
    filter: "none",
    willChange: "opacity",
  },
  tooltip: {
    background: `linear-gradient(155deg, ${t.palette.background.paper} 0%, ${J(t.palette.surface.highlight, t.palette.mode === "dark" ? 0.28 : 0.36)} 155%)`,
    border: `1px solid ${J(t.palette.primary.main, 0.22)}`,
    borderRadius: t.shape.radiusLgPx,
    boxShadow: `0 28px 80px ${J(t.palette.surface.shadow, t.palette.mode === "dark" ? 0.42 : 0.22)}, inset 0 1px 0 ${J(t.palette.background.paper, 0.72)}`,
    isolation: "isolate",
    overflow: "hidden",
    padding: 0,
  },
  spotlight: {
    filter: `drop-shadow(0 0 12px ${J(t.palette.primary.main, 0.34)})`,
    stroke: t.palette.primary.main,
    strokeWidth: 2,
  },
  beaconInner: {
    backgroundColor: t.palette.primary.main,
  },
  beaconOuter: {
    borderColor: t.palette.primary.main,
    backgroundColor: J(t.palette.primary.main, 0.18),
  },
});
const Vn = () => (
  <Qn
    styles={(t) => ({
      ".react-joyride__floater": {
        transition: "opacity 240ms cubic-bezier(0.22, 1, 0.36, 1) !important",
      },
      ".react-joyride__spotlight path:nth-of-type(2)": {
        transition: "opacity 340ms cubic-bezier(0.22, 1, 0.36, 1) !important",
      },
      "@media (prefers-reduced-motion: reduce)": {
        ".react-joyride__floater, .react-joyride__spotlight path": {
          animation: "none !important",
          transition: "none !important",
        },
        ".react-joyride__tooltip [data-thread-tour-content]": {
          animation: "none !important",
        },
      },
      "@media (prefers-reduced-motion: no-preference)": {
        ".react-joyride__spotlight path:last-of-type": {
          animation: `${t.transitions.duration.complex * 5}ms ease-in-out infinite thread-tour-spotlight-breathe`,
        },
      },
      "@keyframes thread-tour-spotlight-breathe": {
        "0%, 100%": {
          strokeOpacity: 0.72,
        },
        "50%": {
          strokeOpacity: 1,
        },
      },
    })}
  />
);
const Gn = ({
  actions: t,
  content: e,
  contentId: n,
  eyebrow: r,
  icon: o,
  index: i,
  progressLabel: s,
  progressValue: a,
  step: c,
  titleId: f,
  tooltipProps: m,
}) => (
  <div
    className="react-joyride__tooltip"
    data-joyride-step={i}
    {...(c.id && {
      "data-joyride-id": c.id,
    })}
    style={c.styles.tooltip}
    {...m}
    aria-labelledby={c.title ? f : undefined}
    aria-describedby={n}
  >
    <_Component aria-hidden="true" sx={Rs} />
    <_Component sx={ys}>
      {(o || r) && (
        <_Component direction="row" spacing={1.35} sx={Ss}>
          {o && (
            <_Component aria-hidden="true" sx={ws}>
              {o}
            </_Component>
          )}
          {r && (
            <_Component sx={bs}>
              <_Component2 variant="cardEyebrow" color="primary">
                {r}
              </_Component2>
            </_Component>
          )}
        </_Component>
      )}
      {a !== undefined && s && (
        <_Component3
          aria-label={s}
          aria-valuetext={s}
          variant="determinate"
          value={a}
          sx={Es}
        />
      )}
      <_Component
        data-thread-tour-content={true}
        spacing={0.75}
        sx={Ts}
        key={i}
      >
        {c.title && (
          <_Component2 id={f} variant="subtitle1" color="text.primary">
            {c.title}
          </_Component2>
        )}
        <_Component2 id={n} variant="body2" color="text.secondary">
          {e}
        </_Component2>
      </_Component>
      <_Component4 />
      <_Component direction="row" spacing={1} sx={xs}>
        {t}
      </_Component>
    </_Component>
  </div>
);
const vs = ({
  backProps: t,
  index: e,
  isLastStep: n,
  primaryProps: r,
  size: o,
  skipProps: i,
  step: s,
  tooltipProps: a,
}) => {
  const c = `thread-tour-title-${e}`;
  const f = `thread-tour-content-${e}`;
  const m = `Step ${e + 1} of ${o}`;
  return (
    <Gn
      index={e}
      step={s}
      tooltipProps={a}
      titleId={c}
      contentId={f}
      progressLabel={m}
      progressValue={((e + 1) / o) * 100}
      content={s.content}
      actions={
        <H.Fragment>
          {s.buttons.includes("skip") && !n && (
            <Dt
              aria-label={i["aria-label"]}
              data-action={i["data-action"]}
              data-testid="button-skip"
              size="small"
              title={i.title}
              variant="text"
              onClick={i.onClick}
            >
              {i["aria-label"]}
            </Dt>
          )}
          <_Component direction="row" spacing={0.75} sx={Os}>
            {s.buttons.includes("back") && e > 0 && (
              <Dt
                aria-label={t["aria-label"]}
                data-action={t["data-action"]}
                data-testid="button-back"
                size="small"
                startIcon={<_Component5 aria-hidden="true" size={16} />}
                title={t.title}
                variant="outlined"
                onClick={t.onClick}
              >
                {t["aria-label"]}
              </Dt>
            )}
            {s.buttons.includes("primary") && (
              <Dt
                aria-label={r["aria-label"]}
                data-action={r["data-action"]}
                data-testid="button-primary"
                endIcon={
                  n ? (
                    <_Component6 aria-hidden="true" size={16} />
                  ) : (
                    <_Component7 aria-hidden="true" size={16} />
                  )
                }
                size="small"
                sx={zn}
                title={r.title}
                variant="contained"
                onClick={r.onClick}
              >
                {r["aria-label"]}
              </Dt>
            )}
          </_Component>
        </H.Fragment>
      }
    />
  );
};
const Cs = ({
  index: t,
  primaryProps: e,
  skipProps: n,
  step: r,
  tooltipProps: o,
}) => {
  var c;
  const i = `thread-tour-button-soft-guide-title-${t}`;
  const s = `thread-tour-button-soft-guide-content-${t}`;
  const a = (c = r.data) == null ? undefined : c.onShowNow;
  if (typeof a != "function") {
    throw new Error("Thread tour button soft guide requires a show handler.");
  }
  return (
    <Gn
      index={t}
      step={r}
      tooltipProps={o}
      titleId={i}
      contentId={s}
      eyebrow="Quick start"
      icon={<_Component8 aria-hidden="true" size={21} strokeWidth={2.2} />}
      content={r.content}
      actions={
        <H.Fragment>
          <Dt
            aria-label={n["aria-label"]}
            data-action={n["data-action"]}
            data-testid="button-soft-guide-dismiss"
            size="small"
            title={n.title}
            variant="text"
            onClick={n.onClick}
          >
            {n["aria-label"]}
          </Dt>
          <Dt
            aria-label={e["aria-label"]}
            data-action={e["data-action"]}
            data-testid="button-soft-guide-show-now"
            endIcon={
              <_Component9 aria-hidden="true" fill="currentColor" size={14} />
            }
            size="small"
            sx={zn}
            title={e.title}
            variant="contained"
            onClick={(f) => {
              f.preventDefault();
              a();
            }}
          >
            {e["aria-label"]}
          </Dt>
        </H.Fragment>
      }
    />
  );
};
const fn = 1200;
const Ps = ["back", "skip", "primary"];
const As = ["skip", "primary"];
const qn = (t) => {
  g.useEffect(() => {
    if (!t || typeof document === "undefined") {
      return;
    }
    const e = document.body.style.overflow;
    const n = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = e;
      document.documentElement.style.overflow = n;
    };
  }, [t]);
};
const dn = (t, e) =>
  new Promise((n) => {
    if (typeof document === "undefined") {
      n(null);
      return;
    }
    const r = W(t);
    const o = performance.now();
    const i = () => {
      const s = document.querySelector(r);
      if (s) {
        n(s);
        return;
      }
      if (performance.now() - o >= e) {
        n(null);
        return;
      }
      window.requestAnimationFrame(i);
    };
    i();
  });
const ks = {
  chat: "Chat reads your prompt and automatically chooses the operation that best fits the request.",
  question:
    "Question gives a focused answer to a specific mathematical question or point of confusion.",
  "lit-search":
    "Literature Search finds relevant research and organizes the sources around your question.",
  compute:
    "Compute runs a concrete Python or Sage calculation and reports the observed result.",
  visualization:
    "Visualization turns mathematical structure or data into an appropriate diagram, graph, or plot.",
  writeup:
    "Writeup produces a polished, structured mathematical document suitable for further editing or export.",
  referee:
    "Referee critiques an argument for gaps, hidden assumptions, invalid steps, and concrete fixes.",
  "next-steps":
    "Next Steps proposes useful directions for continuing the current problem or proof.",
};
const Ls = ar.map((t) => ({
  target: lr[t.value],
  title: t.label,
  content: ks[t.value],
}));
const Ns = (t) => () =>
  typeof document === "undefined"
    ? null
    : (document.querySelector(W(t)) ??
      document.querySelector(W(V.composerOperation)));
const Is = async (t) => {
  if (typeof document === "undefined" || document.querySelector(W(t))) {
    return;
  }
  const n = await dn(V.composerOperation, fn);
  const r = n == null ? undefined : n.querySelector('[role="combobox"]');
  if (!!r && r.getAttribute("aria-expanded") !== "true") {
    r.dispatchEvent(
      new MouseEvent("mousedown", {
        bubbles: true,
        button: 0,
      }),
    );
    await dn(t, fn);
  }
};
const Ds = () =>
  new Promise((t) => {
    var r;
    if (typeof document === "undefined") {
      t();
      return;
    }
    const e = document.querySelector(W(V.composerOperationChat));
    const n = e == null ? undefined : e.closest(".MuiPopover-root");
    if (
      (r = n == null ? undefined : n.querySelector(".MuiBackdrop-root")) != null
    ) {
      r.click();
    }
    window.requestAnimationFrame(() => {
      t();
    });
  });
const Cc = ({
  includeProChatCallStep: t = false,
  includeChatSidebarStep: e = false,
  includeWorkspaceToolbarSteps: n = true,
  run: r,
  onEvent: o,
}) => {
  const i = mn();
  const s = tr();
  const a = er("(prefers-reduced-motion: reduce)", {
    noSsr: true,
  });
  qn(r);
  const c = g.useMemo(
    () => [
      {
        target: W(V.composerInput),
        title: "Message",
        content:
          "Type your question, proof, or instructions here. Press Enter to run it, or Shift+Enter for a new line.",
        placement: "top-start",
      },
      {
        target: W(V.composerOperation),
        title: "Operation",
        content:
          "Chat chooses the best operation automatically. Choose another operation here when you want to run it directly.",
        placement: "top-start",
      },
      ...Ls.map(({ target: m, title: l, content: u }) => ({
        target: Ns(m),
        title: l,
        content: u,
        placement: "right",
        skipScroll: true,
        before: async () => {
          await Is(m);
        },
      })),
      {
        target: W(V.composerNextSteps),
        title: "Next Steps shortcut",
        content:
          "Run Next Steps directly when you want suggestions for where to take the work next.",
        placement: "top",
        before: Ds,
      },
      ...(t
        ? [
            {
              target: W(V.composerProRun),
              title: "Pro run",
              content:
                "Use your daily Math Vision Pro run for a deeper background analysis of a demanding prompt.",
              placement: "top",
            },
          ]
        : []),
      {
        target: W(V.composerModel),
        title: "mathvision mode",
        content:
          "Choose the mathvision mode that will handle the request. Available modes can differ in speed and capability.",
        placement: "top",
      },
      {
        target: W(V.composerAttachFiles),
        title: "Attach files",
        content:
          "Attach supporting PDFs, images, text, or other compatible files to the message.",
        placement: "top",
      },
      {
        target: W(V.composerLatex),
        title: "Attach LaTeX",
        content:
          "Select LaTeX documents from your workspace so the model can use them as context.",
        placement: "top",
      },
      {
        target: W(V.composerSubmit),
        title: "Run",
        content:
          "Run the selected operation. This button changes to Cancel while a response is in progress.",
        placement: "top-end",
      },
      ...(e
        ? [
            {
              target: W(V.chatSidebarNewChat),
              title: "New chat",
              content:
                "Choose Recents or any Explorer folder, then create a chat without leaving the workspace.",
              placement: "right",
            },
            {
              target: W(V.chatSidebarCreateFolder),
              title: "New folder",
              content:
                "Choose Explorer root or any existing folder as the destination. LaTeX projects and chats each have their own placement button beside it.",
              placement: "right",
            },
            {
              target: W(V.chatSidebarSearch),
              title: "Search",
              content: "Search chat titles, folders, or messages inside chats.",
              placement: "right",
            },
            {
              target: W(V.chatSidebarExplorer),
              title: "Explorer and chats",
              content:
                "Folders, chat hierarchies, and LaTeX projects share one file-tree explorer. Loose chats stay in their own section.",
              placement: "right",
            },
            {
              target: W(V.chatSidebarClose),
              title: "Close panel",
              content:
                "Hide the chat side panel when you want more room to work.",
              placement: "right",
            },
          ]
        : []),
      ...(n && (s || !e)
        ? [
            {
              target: W(V.workspacePanelToggle),
              title: s ? "Side panel" : "Open side panel",
              content:
                "Open or close the workspace side panel without leaving your chat.",
              placement: "bottom-start",
            },
          ]
        : []),
      ...(s
        ? []
        : [
            {
              target: W(V.contextUsage),
              title: "Context capacity",
              content:
                "See how much of the chat context is in use. Hover or click for details.",
              placement: "bottom-end",
            },
            {
              target: W(V.variableHighlights),
              title: "Variable highlights",
              content:
                "Turn mathematical variable highlighting on or off for this chat.",
              placement: "bottom-end",
            },
            ...(n
              ? []
              : [
                  {
                    target: W(V.workspaceMoreActions),
                    title: "Guided tour",
                    content:
                      "Open More actions and choose Guided tour whenever you want to replay this guide.",
                    placement: "bottom-end",
                  },
                ]),
          ]),
      ...(n && !s
        ? [
            {
              target: W(V.workspaceThemeMode),
              title: "Theme",
              content:
                "Choose from five light and dark themes. Your selection is saved.",
              placement: "bottom-end",
            },
            {
              target: W(V.workspaceMoreActions),
              title: "More actions",
              content:
                "Open the guided tour, announcements, Slack support, and the feedback form.",
              placement: "bottom-end",
            },
          ]
        : []),
    ],
    [e, t, n, s],
  );
  const f = g.useMemo(() => Wn(i), [i]);
  return (
    <H.Fragment>
      <Vn />
      <Un
        continuous={true}
        run={r}
        steps={c}
        locale={{
          back: "Back",
          last: "Done",
          next: "Next",
          skip: "Skip tour",
        }}
        options={{
          arrowBase: 24,
          arrowColor: i.palette.background.paper,
          arrowSize: 12,
          arrowSpacing: 18,
          backgroundColor: i.palette.background.paper,
          buttons: Ps,
          closeButtonAction: "skip",
          dismissKeyAction: "next",
          offset: 12,
          overlayColor: J(i.palette.surface.shadow, 0.58),
          overlayClickAction: false,
          primaryColor: i.palette.primary.main,
          scrollDuration: a ? 0 : 520,
          scrollOffset: 32,
          showProgress: false,
          skipBeacon: true,
          skipScroll: false,
          spotlightPadding: {
            top: 12,
            right: 12,
            bottom: 12,
            left: 12,
          },
          spotlightRadius: i.shape.radiusLg,
          targetWaitTimeout: 2400,
          textColor: i.palette.text.primary,
          width: 408,
          zIndex: i.zIndex.tooltip + 10,
        }}
        styles={f}
        tooltipComponent={vs}
        onEvent={o}
      />
    </H.Fragment>
  );
};
const Pc = ({ run: t, onDismiss: e, onShowNow: n, tourKey: r = Me.thread }) => {
  const o = mn();
  qn(t);
  const i = g.useMemo(() => {
    const c = r === Me.hierarchyThread;
    return [
      {
        target: W(V.workspaceMoreActions),
        title: c
          ? "Learn the hierarchy composer"
          : "Learn the message composer",
        content:
          "Open More actions to find the guided tour, or start it now to learn every operation and composer control.",
        placement: "bottom-end",
        skipScroll: true,
        data: {
          onShowNow: n,
        },
      },
    ];
  }, [n, r]);
  const s = g.useMemo(() => Wn(o), [o]);
  const a = g.useCallback(
    (c) => {
      if (c.status === F.FINISHED || c.status === F.SKIPPED) {
        e();
      }
    },
    [e],
  );
  return (
    <H.Fragment>
      <Vn />
      <Un
        continuous={true}
        run={t}
        steps={i}
        locale={{
          last: "Show me now",
          skip: "Maybe later",
        }}
        options={{
          arrowBase: 24,
          arrowColor: o.palette.background.paper,
          arrowSize: 12,
          arrowSpacing: 18,
          backgroundColor: o.palette.background.paper,
          buttons: As,
          closeButtonAction: "skip",
          dismissKeyAction: "next",
          offset: 12,
          overlayColor: J(o.palette.surface.shadow, 0.24),
          overlayClickAction: "next",
          primaryColor: o.palette.primary.main,
          skipBeacon: true,
          skipScroll: true,
          spotlightPadding: {
            top: 9,
            right: 9,
            bottom: 9,
            left: 9,
          },
          spotlightRadius: o.shape.radiusLg,
          targetWaitTimeout: 2400,
          textColor: o.palette.text.primary,
          width: 360,
          zIndex: o.zIndex.tooltip + 10,
        }}
        styles={s}
        tooltipComponent={Cs}
        onEvent={a}
      />
    </H.Fragment>
  );
};
export { Pc as ThreadTourButtonSoftGuideRenderer, Cc as ThreadTourRenderer };
