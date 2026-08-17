var Ld = Object.defineProperty;
var Nd = (n, e, t) => e in n ? Ld(n, e, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: t
}) : n[e] = t;
var Vi = (n, e, t) => Nd(n, typeof e != "symbol" ? e + "" : e, t);
import { r as P, d1 as Bd, j as ue, d2 as Yd, g as qe, T as Wi, bv as Gd, S as Fl, aw as Id, B as Zd } from "./index-BM3ZINIl.js";
import { J as Io } from "./SidebarTreeConnector-DsRNfBIo.js";
import { g as yc } from "./cache-BNzcfneg.js";
import { j as Ul } from "./useLatexQueries-DBpKOPUv.js";
import { w as zd } from "./MarkdownHighlights-C-ZhT8z1.js";
import "./katex.min-ADdKj7O-.js";
import { D as _Component, a as _d, b as Fd } from "./MChip-DiH8NXBU.js";
import { T as Ud, L as Hd } from "./TextField-D8vc_sXz.js";
let Zr = [];
let xc = [];
(() => {
  let n = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(e => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < n.length; e++) {
    (e % 2 ? xc : Zr).push(t = t + n[e]);
  }
})();
function Kd(n) {
  if (n < 768) {
    return false;
  }
  for (let e = 0, t = Zr.length;;) {
    let i = e + t >> 1;
    if (n < Zr[i]) {
      t = i;
    } else if (n >= xc[i]) {
      e = i + 1;
    } else {
      return true;
    }
    if (e == t) {
      return false;
    }
  }
}
function Hl(n) {
  return n >= 127462 && n <= 127487;
}
const Kl = 8205;
function Jd(n, e, t = true, i = true) {
  return (t ? Qc : em)(n, e, i);
}
function Qc(n, e, t) {
  if (e == n.length) {
    return e;
  }
  if (e && Sc(n.charCodeAt(e)) && kc(n.charCodeAt(e - 1))) {
    e--;
  }
  let i = or(n, e);
  for (e += Jl(i); e < n.length;) {
    let s = or(n, e);
    if (i == Kl || s == Kl || t && Kd(s)) {
      e += Jl(s);
      i = s;
    } else if (Hl(s)) {
      let r = 0;
      let o = e - 2;
      while (o >= 0 && Hl(or(n, o))) {
        r++;
        o -= 2;
      }
      if (r % 2 == 0) {
        break;
      }
      e += 2;
    } else {
      break;
    }
  }
  return e;
}
function em(n, e, t) {
  while (e > 0) {
    let i = Qc(n, e - 2, t);
    if (i < e) {
      return i;
    }
    e--;
  }
  return 0;
}
function or(n, e) {
  let t = n.charCodeAt(e);
  if (!kc(t) || e + 1 == n.length) {
    return t;
  }
  let i = n.charCodeAt(e + 1);
  if (Sc(i)) {
    return (t - 55296 << 10) + (i - 56320) + 65536;
  } else {
    return t;
  }
}
function Sc(n) {
  return n >= 56320 && n < 57344;
}
function kc(n) {
  return n >= 55296 && n < 56320;
}
function Jl(n) {
  if (n < 65536) {
    return 1;
  } else {
    return 2;
  }
}
class I {
  lineAt(e) {
    if (e < 0 || e > this.length) {
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    }
    return this.lineInner(e, false, 1, 0);
  }
  line(e) {
    if (e < 1 || e > this.lines) {
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    }
    return this.lineInner(e, true, 1, 0);
  }
  replace(e, t, i) {
    [e, t] = ki(this, e, t);
    let s = [];
    this.decompose(0, e, s, 2);
    if (i.length) {
      i.decompose(0, i.length, s, 3);
    }
    this.decompose(t, this.length, s, 1);
    return lt.from(s, this.length - (t - e) + i.length);
  }
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  slice(e, t = this.length) {
    [e, t] = ki(this, e, t);
    let i = [];
    this.decompose(e, t, i, 0);
    return lt.from(i, t - e);
  }
  eq(e) {
    if (e == this) {
      return true;
    }
    if (e.length != this.length || e.lines != this.lines) {
      return false;
    }
    let t = this.scanIdentical(e, 1);
    let i = this.length - this.scanIdentical(e, -1);
    let s = new zi(this);
    let r = new zi(e);
    for (let o = t, l = t;;) {
      s.next(o);
      r.next(o);
      o = 0;
      if (s.lineBreak != r.lineBreak || s.done != r.done || s.value != r.value) {
        return false;
      }
      l += s.value.length;
      if (s.done || l >= i) {
        return true;
      }
    }
  }
  iter(e = 1) {
    return new zi(this, e);
  }
  iterRange(e, t = this.length) {
    return new wc(this, e, t);
  }
  iterLines(e, t) {
    let i;
    if (e == null) {
      i = this.iter();
    } else {
      if (t == null) {
        t = this.lines + 1;
      }
      let s = this.line(e).from;
      i = this.iterRange(s, Math.max(s, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new vc(i);
  }
  toString() {
    return this.sliceString(0);
  }
  toJSON() {
    let e = [];
    this.flatten(e);
    return e;
  }
  constructor() {}
  static of(e) {
    if (e.length == 0) {
      throw new RangeError("A document must have at least one line");
    }
    if (e.length == 1 && !e[0]) {
      return I.empty;
    } else if (e.length <= 32) {
      return new se(e);
    } else {
      return lt.from(se.split(e, []));
    }
  }
}
class se extends I {
  constructor(e, t = tm(e)) {
    super();
    this.text = e;
    this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, i, s) {
    for (let r = 0;; r++) {
      let o = this.text[r];
      let l = s + o.length;
      if ((t ? i : l) >= e) {
        return new im(s, l, i, o);
      }
      s = l + 1;
      i++;
    }
  }
  decompose(e, t, i, s) {
    let r = e <= 0 && t >= this.length ? this : new se(ea(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (s & 1) {
      let o = i.pop();
      let l = Kn(r.text, o.text.slice(), 0, r.length);
      if (l.length <= 32) {
        i.push(new se(l, o.length + r.length));
      } else {
        let a = l.length >> 1;
        i.push(new se(l.slice(0, a)), new se(l.slice(a)));
      }
    } else {
      i.push(r);
    }
  }
  replace(e, t, i) {
    if (!(i instanceof se)) {
      return super.replace(e, t, i);
    }
    [e, t] = ki(this, e, t);
    let s = Kn(this.text, Kn(i.text, ea(this.text, 0, e)), t);
    let r = this.length + i.length - (t - e);
    if (s.length <= 32) {
      return new se(s, r);
    } else {
      return lt.from(se.split(s, []), r);
    }
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = ki(this, e, t);
    let s = "";
    for (let r = 0, o = 0; r <= t && o < this.text.length; o++) {
      let l = this.text[o];
      let a = r + l.length;
      if (r > e && o) {
        s += i;
      }
      if (e < a && t > r) {
        s += l.slice(Math.max(0, e - r), t - r);
      }
      r = a + 1;
    }
    return s;
  }
  flatten(e) {
    for (let t of this.text) {
      e.push(t);
    }
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let i = [];
    let s = -1;
    for (let r of e) {
      i.push(r);
      s += r.length + 1;
      if (i.length == 32) {
        t.push(new se(i, s));
        i = [];
        s = -1;
      }
    }
    if (s > -1) {
      t.push(new se(i, s));
    }
    return t;
  }
}
class lt extends I {
  constructor(e, t) {
    super();
    this.children = e;
    this.length = t;
    this.lines = 0;
    for (let i of e) {
      this.lines += i.lines;
    }
  }
  lineInner(e, t, i, s) {
    for (let r = 0;; r++) {
      let o = this.children[r];
      let l = s + o.length;
      let a = i + o.lines - 1;
      if ((t ? a : l) >= e) {
        return o.lineInner(e, t, i, s);
      }
      s = l + 1;
      i = a + 1;
    }
  }
  decompose(e, t, i, s) {
    for (let r = 0, o = 0; o <= t && r < this.children.length; r++) {
      let l = this.children[r];
      let a = o + l.length;
      if (e <= a && t >= o) {
        let h = s & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
        if (o >= e && a <= t && !h) {
          i.push(l);
        } else {
          l.decompose(e - o, t - o, i, h);
        }
      }
      o = a + 1;
    }
  }
  replace(e, t, i) {
    [e, t] = ki(this, e, t);
    if (i.lines < this.lines) {
      for (let s = 0, r = 0; s < this.children.length; s++) {
        let o = this.children[s];
        let l = r + o.length;
        if (e >= r && t <= l) {
          let a = o.replace(e - r, t - r, i);
          let h = this.lines - o.lines + a.lines;
          if (a.lines < h >> 4 && a.lines > h >> 6) {
            let c = this.children.slice();
            c[s] = a;
            return new lt(c, this.length - (t - e) + i.length);
          }
          return super.replace(r, l, a);
        }
        r = l + 1;
      }
    }
    return super.replace(e, t, i);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = ki(this, e, t);
    let s = "";
    for (let r = 0, o = 0; r < this.children.length && o <= t; r++) {
      let l = this.children[r];
      let a = o + l.length;
      if (o > e && r) {
        s += i;
      }
      if (e < a && t > o) {
        s += l.sliceString(e - o, t - o, i);
      }
      o = a + 1;
    }
    return s;
  }
  flatten(e) {
    for (let t of this.children) {
      t.flatten(e);
    }
  }
  scanIdentical(e, t) {
    if (!(e instanceof lt)) {
      return 0;
    }
    let i = 0;
    let [s, r, o, l] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (;; s += t, r += t) {
      if (s == o || r == l) {
        return i;
      }
      let a = this.children[s];
      let h = e.children[r];
      if (a != h) {
        return i + a.scanIdentical(h, t);
      }
      i += a.length + 1;
    }
  }
  static from(e, t = e.reduce((i, s) => i + s.length + 1, -1)) {
    let i = 0;
    for (let d of e) {
      i += d.lines;
    }
    if (i < 32) {
      let d = [];
      for (let m of e) {
        m.flatten(d);
      }
      return new se(d, t);
    }
    let s = Math.max(32, i >> 5);
    let r = s << 1;
    let o = s >> 1;
    let l = [];
    let a = 0;
    let h = -1;
    let c = [];
    function f(d) {
      let m;
      if (d.lines > r && d instanceof lt) {
        for (let p of d.children) {
          f(p);
        }
      } else if (d.lines > o && (a > o || !a)) {
        u();
        l.push(d);
      } else if (d instanceof se && a && (m = c[c.length - 1]) instanceof se && d.lines + m.lines <= 32) {
        a += d.lines;
        h += d.length + 1;
        c[c.length - 1] = new se(m.text.concat(d.text), m.length + 1 + d.length);
      } else {
        if (a + d.lines > s) {
          u();
        }
        a += d.lines;
        h += d.length + 1;
        c.push(d);
      }
    }
    function u() {
      if (a != 0) {
        l.push(c.length == 1 ? c[0] : lt.from(c, h));
        h = -1;
        a = c.length = 0;
      }
    }
    for (let d of e) {
      f(d);
    }
    u();
    if (l.length == 1) {
      return l[0];
    } else {
      return new lt(l, t);
    }
  }
}
I.empty = new se([""], 0);
function tm(n) {
  let e = -1;
  for (let t of n) {
    e += t.length + 1;
  }
  return e;
}
function Kn(n, e, t = 0, i = 1000000000) {
  for (let s = 0, r = 0, o = true; r < n.length && s <= i; r++) {
    let l = n[r];
    let a = s + l.length;
    if (a >= t) {
      if (a > i) {
        l = l.slice(0, i - s);
      }
      if (s < t) {
        l = l.slice(t - s);
      }
      if (o) {
        e[e.length - 1] += l;
        o = false;
      } else {
        e.push(l);
      }
    }
    s = a + 1;
  }
  return e;
}
function ea(n, e, t) {
  return Kn(n, [""], e, t);
}
class zi {
  constructor(e, t = 1) {
    this.dir = t;
    this.done = false;
    this.lineBreak = false;
    this.value = "";
    this.nodes = [e];
    this.offsets = [t > 0 ? 1 : (e instanceof se ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = false;;) {
      let i = this.nodes.length - 1;
      let s = this.nodes[i];
      let r = this.offsets[i];
      let o = r >> 1;
      let l = s instanceof se ? s.text.length : s.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (i == 0) {
          this.done = true;
          this.value = "";
          return this;
        }
        if (t > 0) {
          this.offsets[i - 1]++;
        }
        this.nodes.pop();
        this.offsets.pop();
      } else if ((r & 1) == (t > 0 ? 0 : 1)) {
        this.offsets[i] += t;
        if (e == 0) {
          this.lineBreak = true;
          this.value = `
`;
          return this;
        }
        e--;
      } else if (s instanceof se) {
        let a = s.text[o + (t < 0 ? -1 : 0)];
        this.offsets[i] += t;
        if (a.length > Math.max(0, e)) {
          this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e);
          return this;
        }
        e -= a.length;
      } else {
        let a = s.children[o + (t < 0 ? -1 : 0)];
        if (e > a.length) {
          e -= a.length;
          this.offsets[i] += t;
        } else {
          if (t < 0) {
            this.offsets[i]--;
          }
          this.nodes.push(a);
          this.offsets.push(t > 0 ? 1 : (a instanceof se ? a.text.length : a.children.length) << 1);
        }
      }
    }
  }
  next(e = 0) {
    if (e < 0) {
      this.nextInner(-e, -this.dir);
      e = this.value.length;
    }
    return this.nextInner(e, this.dir);
  }
}
class wc {
  constructor(e, t, i) {
    this.value = "";
    this.done = false;
    this.cursor = new zi(e, t > i ? -1 : 1);
    this.pos = t > i ? e.length : 0;
    this.from = Math.min(t, i);
    this.to = Math.max(t, i);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to) {
      this.value = "";
      this.done = true;
      return this;
    }
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let i = t < 0 ? this.pos - this.from : this.to - this.pos;
    if (e > i) {
      e = i;
    }
    i -= e;
    let {
      value: s
    } = this.cursor.next(e);
    this.pos += (s.length + e) * t;
    this.value = s.length <= i ? s : t < 0 ? s.slice(s.length - i) : s.slice(0, i);
    this.done = !this.value;
    return this;
  }
  next(e = 0) {
    if (e < 0) {
      e = Math.max(e, this.from - this.pos);
    } else if (e > 0) {
      e = Math.min(e, this.to - this.pos);
    }
    return this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class vc {
  constructor(e) {
    this.inner = e;
    this.afterBreak = true;
    this.value = "";
    this.done = false;
  }
  next(e = 0) {
    let {
      done: t,
      lineBreak: i,
      value: s
    } = this.inner.next(e);
    if (t && this.afterBreak) {
      this.value = "";
      this.afterBreak = false;
    } else if (t) {
      this.done = true;
      this.value = "";
    } else if (i) {
      if (this.afterBreak) {
        this.value = "";
      } else {
        this.afterBreak = true;
        this.next();
      }
    } else {
      this.value = s;
      this.afterBreak = false;
    }
    return this;
  }
  get lineBreak() {
    return false;
  }
}
if (typeof Symbol !== "undefined") {
  I.prototype[Symbol.iterator] = function () {
    return this.iter();
  };
  zi.prototype[Symbol.iterator] = wc.prototype[Symbol.iterator] = vc.prototype[Symbol.iterator] = function () {
    return this;
  };
}
class im {
  constructor(e, t, i, s) {
    this.from = e;
    this.to = t;
    this.number = i;
    this.text = s;
  }
  get length() {
    return this.to - this.from;
  }
}
function ki(n, e, t) {
  e = Math.max(0, Math.min(n.length, e));
  return [e, Math.max(e, Math.min(n.length, t))];
}
function be(n, e, t = true, i = true) {
  return Jd(n, e, t, i);
}
function nm(n) {
  return n >= 56320 && n < 57344;
}
function sm(n) {
  return n >= 55296 && n < 56320;
}
function Ee(n, e) {
  let t = n.charCodeAt(e);
  if (!sm(t) || e + 1 == n.length) {
    return t;
  }
  let i = n.charCodeAt(e + 1);
  if (nm(i)) {
    return (t - 55296 << 10) + (i - 56320) + 65536;
  } else {
    return t;
  }
}
function Zo(n) {
  if (n <= 65535) {
    return String.fromCharCode(n);
  } else {
    n -= 65536;
    return String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320);
  }
}
function at(n) {
  if (n < 65536) {
    return 1;
  } else {
    return 2;
  }
}
const zr = /\r\n?|\n/;
var Qe = function (n) {
  n[n.Simple = 0] = "Simple";
  n[n.TrackDel = 1] = "TrackDel";
  n[n.TrackBefore = 2] = "TrackBefore";
  n[n.TrackAfter = 3] = "TrackAfter";
  return n;
}(Qe ||= {});
class mt {
  constructor(e) {
    this.sections = e;
  }
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      e += this.sections[t];
    }
    return e;
  }
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t + 1];
      e += i < 0 ? this.sections[t] : i;
    }
    return e;
  }
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  iterGaps(e) {
    for (let t = 0, i = 0, s = 0; t < this.sections.length;) {
      let r = this.sections[t++];
      let o = this.sections[t++];
      if (o < 0) {
        e(i, s, r);
        s += r;
      } else {
        s += o;
      }
      i += r;
    }
  }
  iterChangedRanges(e, t = false) {
    jr(this, e, t);
  }
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length;) {
      let i = this.sections[t++];
      let s = this.sections[t++];
      if (s < 0) {
        e.push(i, s);
      } else {
        e.push(s, i);
      }
    }
    return new mt(e);
  }
  composeDesc(e) {
    if (this.empty) {
      return e;
    } else if (e.empty) {
      return this;
    } else {
      return Cc(this, e);
    }
  }
  mapDesc(e, t = false) {
    if (e.empty) {
      return this;
    } else {
      return _r(this, e, t);
    }
  }
  mapPos(e, t = -1, i = Qe.Simple) {
    let s = 0;
    let r = 0;
    for (let o = 0; o < this.sections.length;) {
      let l = this.sections[o++];
      let a = this.sections[o++];
      let h = s + l;
      if (a < 0) {
        if (h > e) {
          return r + (e - s);
        }
        r += l;
      } else {
        if (i != Qe.Simple && h >= e && (i == Qe.TrackDel && s < e && h > e || i == Qe.TrackBefore && s < e || i == Qe.TrackAfter && h > e)) {
          return null;
        }
        if (h > e || h == e && t < 0 && !l) {
          if (e == s || t < 0) {
            return r;
          } else {
            return r + a;
          }
        }
        r += a;
      }
      s = h;
    }
    if (e > s) {
      throw new RangeError(`Position ${e} is out of range for changeset of length ${s}`);
    }
    return r;
  }
  touchesRange(e, t = e) {
    for (let i = 0, s = 0; i < this.sections.length && s <= t;) {
      let r = this.sections[i++];
      let o = this.sections[i++];
      let l = s + r;
      if (o >= 0 && s <= t && l >= e) {
        if (s < e && l > t) {
          return "cover";
        } else {
          return true;
        }
      }
      s = l;
    }
    return false;
  }
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length;) {
      let i = this.sections[t++];
      let s = this.sections[t++];
      e += (e ? " " : "") + i + (s >= 0 ? ":" + s : "");
    }
    return e;
  }
  toJSON() {
    return this.sections;
  }
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some(t => typeof t != "number")) {
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    }
    return new mt(e);
  }
  static create(e) {
    return new mt(e);
  }
}
class de extends mt {
  constructor(e, t) {
    super(e);
    this.inserted = t;
  }
  apply(e) {
    if (this.length != e.length) {
      throw new RangeError("Applying change set to a document with the wrong length");
    }
    jr(this, (t, i, s, r, o) => e = e.replace(s, s + (i - t), o), false);
    return e;
  }
  mapDesc(e, t = false) {
    return _r(this, e, t, true);
  }
  invert(e) {
    let t = this.sections.slice();
    let i = [];
    for (let s = 0, r = 0; s < t.length; s += 2) {
      let o = t[s];
      let l = t[s + 1];
      if (l >= 0) {
        t[s] = l;
        t[s + 1] = o;
        let a = s >> 1;
        while (i.length < a) {
          i.push(I.empty);
        }
        i.push(o ? e.slice(r, r + o) : I.empty);
      }
      r += o;
    }
    return new de(t, i);
  }
  compose(e) {
    if (this.empty) {
      return e;
    } else if (e.empty) {
      return this;
    } else {
      return Cc(this, e, true);
    }
  }
  map(e, t = false) {
    if (e.empty) {
      return this;
    } else {
      return _r(this, e, t, true);
    }
  }
  iterChanges(e, t = false) {
    jr(this, e, t);
  }
  get desc() {
    return mt.create(this.sections);
  }
  filter(e) {
    let t = [];
    let i = [];
    let s = [];
    let r = new en(this);
    e: for (let o = 0, l = 0;;) {
      let a = o == e.length ? 1000000000 : e[o++];
      while (l < a || l == a && r.len == 0) {
        if (r.done) {
          break e;
        }
        let c = Math.min(r.len, a - l);
        ve(s, c, -1);
        let f = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
        ve(t, c, f);
        if (f > 0) {
          Et(i, t, r.text);
        }
        r.forward(c);
        l += c;
      }
      let h = e[o++];
      while (l < h) {
        if (r.done) {
          break e;
        }
        let c = Math.min(r.len, h - l);
        ve(t, c, -1);
        ve(s, c, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0);
        r.forward(c);
        l += c;
      }
    }
    return {
      changes: new de(t, i),
      filtered: mt.create(s)
    };
  }
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t];
      let s = this.sections[t + 1];
      if (s < 0) {
        e.push(i);
      } else if (s == 0) {
        e.push([i]);
      } else {
        e.push([i].concat(this.inserted[t >> 1].toJSON()));
      }
    }
    return e;
  }
  static of(e, t, i) {
    let s = [];
    let r = [];
    let o = 0;
    let l = null;
    function a(c = false) {
      if (!c && !s.length) {
        return;
      }
      if (o < t) {
        ve(s, t - o, -1);
      }
      let f = new de(s, r);
      l = l ? l.compose(f.map(l)) : f;
      s = [];
      r = [];
      o = 0;
    }
    function h(c) {
      if (Array.isArray(c)) {
        for (let f of c) {
          h(f);
        }
      } else if (c instanceof de) {
        if (c.length != t) {
          throw new RangeError(`Mismatched change set length (got ${c.length}, expected ${t})`);
        }
        a();
        l = l ? l.compose(c.map(l)) : c;
      } else {
        let {
          from: f,
          to: u = f,
          insert: d
        } = c;
        if (f > u || f < 0 || u > t) {
          throw new RangeError(`Invalid change range ${f} to ${u} (in doc of length ${t})`);
        }
        let m = d ? typeof d == "string" ? I.of(d.split(i || zr)) : d : I.empty;
        let p = m.length;
        if (f == u && p == 0) {
          return;
        }
        if (f < o) {
          a();
        }
        if (f > o) {
          ve(s, f - o, -1);
        }
        ve(s, u - f, p);
        Et(r, s, m);
        o = u;
      }
    }
    h(e);
    a(!l);
    return l;
  }
  static empty(e) {
    return new de(e ? [e, -1] : [], []);
  }
  static fromJSON(e) {
    if (!Array.isArray(e)) {
      throw new RangeError("Invalid JSON representation of ChangeSet");
    }
    let t = [];
    let i = [];
    for (let s = 0; s < e.length; s++) {
      let r = e[s];
      if (typeof r == "number") {
        t.push(r, -1);
      } else {
        if (!Array.isArray(r) || typeof r[0] != "number" || r.some((o, l) => l && typeof o != "string")) {
          throw new RangeError("Invalid JSON representation of ChangeSet");
        }
        if (r.length == 1) {
          t.push(r[0], 0);
        } else {
          while (i.length < s) {
            i.push(I.empty);
          }
          i[s] = I.of(r.slice(1));
          t.push(r[0], i[s].length);
        }
      }
    }
    return new de(t, i);
  }
  static createSet(e, t) {
    return new de(e, t);
  }
}
function ve(n, e, t, i = false) {
  if (e == 0 && t <= 0) {
    return;
  }
  let s = n.length - 2;
  if (s >= 0 && t <= 0 && t == n[s + 1]) {
    n[s] += e;
  } else if (s >= 0 && e == 0 && n[s] == 0) {
    n[s + 1] += t;
  } else if (i) {
    n[s] += e;
    n[s + 1] += t;
  } else {
    n.push(e, t);
  }
}
function Et(n, e, t) {
  if (t.length == 0) {
    return;
  }
  let i = e.length - 2 >> 1;
  if (i < n.length) {
    n[n.length - 1] = n[n.length - 1].append(t);
  } else {
    while (n.length < i) {
      n.push(I.empty);
    }
    n.push(t);
  }
}
function jr(n, e, t) {
  let i = n.inserted;
  for (let s = 0, r = 0, o = 0; o < n.sections.length;) {
    let l = n.sections[o++];
    let a = n.sections[o++];
    if (a < 0) {
      s += l;
      r += l;
    } else {
      let h = s;
      let c = r;
      let f = I.empty;
      while (h += l, c += a, a && i && (f = f.append(i[o - 2 >> 1])), !t && o != n.sections.length && !(n.sections[o + 1] < 0)) {
        l = n.sections[o++];
        a = n.sections[o++];
      }
      e(s, h, r, c, f);
      s = h;
      r = c;
    }
  }
}
function _r(n, e, t, i = false) {
  let s = [];
  let r = i ? [] : null;
  let o = new en(n);
  let l = new en(e);
  for (let a = -1;;) {
    if (o.done && l.len || l.done && o.len) {
      throw new Error("Mismatched change set lengths");
    }
    if (o.ins == -1 && l.ins == -1) {
      let h = Math.min(o.len, l.len);
      ve(s, h, -1);
      o.forward(h);
      l.forward(h);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !t))) {
      let h = l.len;
      for (ve(s, l.ins, -1); h;) {
        let c = Math.min(o.len, h);
        if (o.ins >= 0 && a < o.i && o.len <= c) {
          ve(s, 0, o.ins);
          if (r) {
            Et(r, s, o.text);
          }
          a = o.i;
        }
        o.forward(c);
        h -= c;
      }
      l.next();
    } else if (o.ins >= 0) {
      let h = 0;
      let c = o.len;
      while (c) {
        if (l.ins == -1) {
          let f = Math.min(c, l.len);
          h += f;
          c -= f;
          l.forward(f);
        } else if (l.ins == 0 && l.len < c) {
          c -= l.len;
          l.next();
        } else {
          break;
        }
      }
      ve(s, h, a < o.i ? o.ins : 0);
      if (r && a < o.i) {
        Et(r, s, o.text);
      }
      a = o.i;
      o.forward(o.len - c);
    } else {
      if (o.done && l.done) {
        if (r) {
          return de.createSet(s, r);
        } else {
          return mt.create(s);
        }
      }
      throw new Error("Mismatched change set lengths");
    }
  }
}
function Cc(n, e, t = false) {
  let i = [];
  let s = t ? [] : null;
  let r = new en(n);
  let o = new en(e);
  for (let l = false;;) {
    if (r.done && o.done) {
      if (s) {
        return de.createSet(i, s);
      } else {
        return mt.create(i);
      }
    }
    if (r.ins == 0) {
      ve(i, r.len, 0, l);
      r.next();
    } else if (o.len == 0 && !o.done) {
      ve(i, 0, o.ins, l);
      if (s) {
        Et(s, i, o.text);
      }
      o.next();
    } else {
      if (r.done || o.done) {
        throw new Error("Mismatched change set lengths");
      }
      {
        let a = Math.min(r.len2, o.len);
        let h = i.length;
        if (r.ins == -1) {
          let c = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          ve(i, a, c, l);
          if (s && c) {
            Et(s, i, o.text);
          }
        } else if (o.ins == -1) {
          ve(i, r.off ? 0 : r.len, a, l);
          if (s) {
            Et(s, i, r.textBit(a));
          }
        } else {
          ve(i, r.off ? 0 : r.len, o.off ? 0 : o.ins, l);
          if (s && !o.off) {
            Et(s, i, o.text);
          }
        }
        l = (r.ins > a || o.ins >= 0 && o.len > a) && (l || i.length > h);
        r.forward2(a);
        o.forward(a);
      }
    }
  }
}
class en {
  constructor(e) {
    this.set = e;
    this.i = 0;
    this.next();
  }
  next() {
    let {
      sections: e
    } = this.set;
    if (this.i < e.length) {
      this.len = e[this.i++];
      this.ins = e[this.i++];
    } else {
      this.len = 0;
      this.ins = -2;
    }
    this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    if (this.ins < 0) {
      return this.len;
    } else {
      return this.ins;
    }
  }
  get text() {
    let {
      inserted: e
    } = this.set;
    let t = this.i - 2 >> 1;
    if (t >= e.length) {
      return I.empty;
    } else {
      return e[t];
    }
  }
  textBit(e) {
    let {
      inserted: t
    } = this.set;
    let i = this.i - 2 >> 1;
    if (i >= t.length && !e) {
      return I.empty;
    } else {
      return t[i].slice(this.off, e == null ? undefined : this.off + e);
    }
  }
  forward(e) {
    if (e == this.len) {
      this.next();
    } else {
      this.len -= e;
      this.off += e;
    }
  }
  forward2(e) {
    if (this.ins == -1) {
      this.forward(e);
    } else if (e == this.ins) {
      this.next();
    } else {
      this.ins -= e;
      this.off += e;
    }
  }
}
class $t {
  constructor(e, t, i, s) {
    this.from = e;
    this.to = t;
    this.flags = i;
    this.goalColumn = s;
  }
  get anchor() {
    if (this.flags & 32) {
      return this.to;
    } else {
      return this.from;
    }
  }
  get head() {
    if (this.flags & 32) {
      return this.from;
    } else {
      return this.to;
    }
  }
  get empty() {
    return this.from == this.to;
  }
  get assoc() {
    if (this.flags & 8) {
      return -1;
    } else if (this.flags & 16) {
      return 1;
    } else {
      return 0;
    }
  }
  get undirectional() {
    return (this.flags & 64) > 0;
  }
  get bidiLevel() {
    let e = this.flags & 7;
    if (e == 7) {
      return null;
    } else {
      return e;
    }
  }
  map(e, t = -1) {
    let i;
    let s;
    if (this.empty) {
      i = s = e.mapPos(this.from, t);
    } else {
      i = e.mapPos(this.from, 1);
      s = e.mapPos(this.to, -1);
    }
    if (i == this.from && s == this.to) {
      return this;
    } else {
      return new $t(i, s, this.flags, this.goalColumn);
    }
  }
  extend(e, t = e, i = 0) {
    if (e <= this.anchor && t >= this.anchor) {
      return y.range(e, t, undefined, undefined, i);
    }
    let s = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return y.range(this.anchor, s, undefined, undefined, i);
  }
  eq(e, t = false) {
    return this.anchor == e.anchor && this.head == e.head && this.goalColumn == e.goalColumn && (!t || !this.empty || this.assoc == e.assoc);
  }
  toJSON() {
    return {
      anchor: this.anchor,
      head: this.head
    };
  }
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number") {
      throw new RangeError("Invalid JSON representation for SelectionRange");
    }
    return y.range(e.anchor, e.head);
  }
  static create(e, t, i, s) {
    return new $t(e, t, i, s);
  }
}
class y {
  constructor(e, t) {
    this.ranges = e;
    this.mainIndex = t;
  }
  map(e, t = -1) {
    if (e.empty) {
      return this;
    } else {
      return y.create(this.ranges.map(i => i.map(e, t)), this.mainIndex);
    }
  }
  eq(e, t = false) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex) {
      return false;
    }
    for (let i = 0; i < this.ranges.length; i++) {
      if (!this.ranges[i].eq(e.ranges[i], t)) {
        return false;
      }
    }
    return true;
  }
  get main() {
    return this.ranges[this.mainIndex];
  }
  asSingle() {
    if (this.ranges.length == 1) {
      return this;
    } else {
      return new y([this.main], 0);
    }
  }
  addRange(e, t = true) {
    return y.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  replaceRange(e, t = this.mainIndex) {
    let i = this.ranges.slice();
    i[t] = e;
    return y.create(i, this.mainIndex);
  }
  toJSON() {
    return {
      ranges: this.ranges.map(e => e.toJSON()),
      main: this.mainIndex
    };
  }
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length) {
      throw new RangeError("Invalid JSON representation for EditorSelection");
    }
    return new y(e.ranges.map(t => $t.fromJSON(t)), e.main);
  }
  static single(e, t = e) {
    return new y([y.range(e, t)], 0);
  }
  static create(e, t = 0) {
    if (e.length == 0) {
      throw new RangeError("A selection needs at least one range");
    }
    for (let i = 0, s = 0; s < e.length; s++) {
      let r = e[s];
      if (r.empty ? r.from <= i : r.from < i) {
        return y.normalized(e.slice(), t);
      }
      i = r.to;
    }
    return new y(e, t);
  }
  static cursor(e, t = 0, i, s) {
    return $t.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)), s);
  }
  static range(e, t, i, s, r) {
    let o = s == null ? 7 : Math.min(6, s);
    if (!r && e != t) {
      r = t < e ? 1 : -1;
    }
    if (r) {
      o |= r < 0 ? 8 : 16;
    }
    if (t < e) {
      return $t.create(t, e, o | 32, i);
    } else {
      return $t.create(e, t, o, i);
    }
  }
  static undirectionalRange(e, t) {
    return $t.create(e, t, 64, undefined);
  }
  static normalized(e, t = 0) {
    let i = e[t];
    e.sort((s, r) => s.from - r.from);
    t = e.indexOf(i);
    for (let s = 1; s < e.length; s++) {
      let r = e[s];
      let o = e[s - 1];
      if (r.empty ? r.from <= o.to : r.from < o.to) {
        let l = o.from;
        let a = Math.max(r.to, o.to);
        if (s <= t) {
          t--;
        }
        e.splice(--s, 2, r.anchor > r.head ? y.range(a, l) : y.range(l, a));
      }
    }
    return new y(e, t);
  }
}
function qc(n, e) {
  for (let t of n.ranges) {
    if (t.to > e) {
      throw new RangeError("Selection points outside of document");
    }
  }
}
let zo = 0;
class T {
  constructor(e, t, i, s, r) {
    this.combine = e;
    this.compareInput = t;
    this.compare = i;
    this.isStatic = s;
    this.id = zo++;
    this.default = e([]);
    this.extensions = typeof r == "function" ? r(this) : r;
  }
  get reader() {
    return this;
  }
  static define(e = {}) {
    return new T(e.combine || (t => t), e.compareInput || ((t, i) => t === i), e.compare || (e.combine ? (t, i) => t === i : jo), !!e.static, e.enables);
  }
  of(e) {
    return new Jn([], this, 0, e);
  }
  compute(e, t) {
    if (this.isStatic) {
      throw new Error("Can't compute a static facet");
    }
    return new Jn(e, this, 1, t);
  }
  computeN(e, t) {
    if (this.isStatic) {
      throw new Error("Can't compute a static facet");
    }
    return new Jn(e, this, 2, t);
  }
  from(e, t) {
    t ||= i => i;
    return this.compute([e], i => t(i.field(e)));
  }
}
function jo(n, e) {
  return n == e || n.length == e.length && n.every((t, i) => t === e[i]);
}
class Jn {
  constructor(e, t, i, s) {
    this.dependencies = e;
    this.facet = t;
    this.type = i;
    this.value = s;
    this.id = zo++;
  }
  dynamicSlot(e) {
    let i = this.value;
    let s = this.facet.compareInput;
    let r = this.id;
    let o = e[r] >> 1;
    let l = this.type == 2;
    let a = false;
    let h = false;
    let c = [];
    for (let f of this.dependencies) {
      if (f == "doc") {
        a = true;
      } else if (f == "selection") {
        h = true;
      } else if (((e[f.id] ?? 1) & 1) == 0) {
        c.push(e[f.id]);
      }
    }
    return {
      create(f) {
        f.values[o] = i(f);
        return 1;
      },
      update(f, u) {
        if (a && u.docChanged || h && (u.docChanged || u.selection) || Fr(f, c)) {
          let d = i(f);
          if (l ? !ta(d, f.values[o], s) : !s(d, f.values[o])) {
            f.values[o] = d;
            return 1;
          }
        }
        return 0;
      },
      reconfigure: (f, u) => {
        let d;
        let m = u.config.address[r];
        if (m != null) {
          let p = us(u, m);
          if (this.dependencies.every(O => O instanceof T ? u.facet(O) === f.facet(O) : O instanceof le ? u.field(O, false) == f.field(O, false) : true) || (l ? ta(d = i(f), p, s) : s(d = i(f), p))) {
            f.values[o] = p;
            return 0;
          }
        } else {
          d = i(f);
        }
        f.values[o] = d;
        return 1;
      }
    };
  }
  get extension() {
    return this;
  }
}
function ta(n, e, t) {
  if (n.length != e.length) {
    return false;
  }
  for (let i = 0; i < n.length; i++) {
    if (!t(n[i], e[i])) {
      return false;
    }
  }
  return true;
}
function Fr(n, e) {
  let t = false;
  for (let i of e) {
    if (ji(n, i) & 1) {
      t = true;
    }
  }
  return t;
}
function rm(n, e, t) {
  let i = t.map(a => n[a.id]);
  let s = t.map(a => a.type);
  let r = i.filter(a => !(a & 1));
  let o = n[e.id] >> 1;
  function l(a) {
    let h = [];
    for (let c = 0; c < i.length; c++) {
      let f = us(a, i[c]);
      if (s[c] == 2) {
        for (let u of f) {
          h.push(u);
        }
      } else {
        h.push(f);
      }
    }
    return e.combine(h);
  }
  return {
    create(a) {
      for (let h of i) {
        ji(a, h);
      }
      a.values[o] = l(a);
      return 1;
    },
    update(a, h) {
      if (!Fr(a, r)) {
        return 0;
      }
      let c = l(a);
      if (e.compare(c, a.values[o])) {
        return 0;
      } else {
        a.values[o] = c;
        return 1;
      }
    },
    reconfigure(a, h) {
      let c = Fr(a, i);
      let f = h.config.facets[e.id];
      let u = h.facet(e);
      if (f && !c && jo(t, f)) {
        a.values[o] = u;
        return 0;
      }
      let d = l(a);
      if (e.compare(d, u)) {
        a.values[o] = u;
        return 0;
      } else {
        a.values[o] = d;
        return 1;
      }
    }
  };
}
const Cn = T.define({
  static: true
});
class le {
  constructor(e, t, i, s, r) {
    this.id = e;
    this.createF = t;
    this.updateF = i;
    this.compareF = s;
    this.spec = r;
    this.provides = undefined;
  }
  static define(e) {
    let t = new le(zo++, e.create, e.update, e.compare || ((i, s) => i === s), e);
    if (e.provide) {
      t.provides = e.provide(t);
    }
    return t;
  }
  create(e) {
    let t = e.facet(Cn).find(i => i.field == this);
    return ((t == null ? undefined : t.create) || this.createF)(e);
  }
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: i => {
        i.values[t] = this.create(i);
        return 1;
      },
      update: (i, s) => {
        let r = i.values[t];
        let o = this.updateF(r, s);
        if (this.compareF(r, o)) {
          return 0;
        } else {
          i.values[t] = o;
          return 1;
        }
      },
      reconfigure: (i, s) => {
        let r = i.facet(Cn);
        let o = s.facet(Cn);
        let l;
        if ((l = r.find(a => a.field == this)) && l != o.find(a => a.field == this)) {
          i.values[t] = l.create(i);
          return 1;
        } else if (s.config.address[this.id] != null) {
          i.values[t] = s.field(this);
          return 0;
        } else {
          i.values[t] = this.create(i);
          return 1;
        }
      }
    };
  }
  init(e) {
    return [this, Cn.of({
      field: this,
      create: e
    })];
  }
  get extension() {
    return this;
  }
}
const Kt = {
  lowest: 4,
  low: 3,
  default: 2,
  high: 1,
  highest: 0
};
function Di(n) {
  return e => new Tc(e, n);
}
const kt = {
  highest: Di(Kt.highest),
  high: Di(Kt.high),
  default: Di(Kt.default),
  low: Di(Kt.low),
  lowest: Di(Kt.lowest)
};
class Tc {
  constructor(e, t) {
    this.inner = e;
    this.prec = t;
  }
  get extension() {
    return this;
  }
}
class Bs {
  of(e) {
    return new Ur(this, e);
  }
  reconfigure(e) {
    return Bs.reconfigure.of({
      compartment: this,
      extension: e
    });
  }
  get(e) {
    return e.config.compartments.get(this);
  }
}
class Ur {
  constructor(e, t) {
    this.compartment = e;
    this.inner = t;
  }
  get extension() {
    return this;
  }
}
class fs {
  constructor(e, t, i, s, r, o) {
    this.base = e;
    this.compartments = t;
    this.dynamicSlots = i;
    this.address = s;
    this.staticValues = r;
    this.facets = o;
    this.statusTemplate = [];
    while (this.statusTemplate.length < i.length) {
      this.statusTemplate.push(0);
    }
  }
  staticFacet(e) {
    let t = this.address[e.id];
    if (t == null) {
      return e.default;
    } else {
      return this.staticValues[t >> 1];
    }
  }
  static resolve(e, t, i) {
    let s = [];
    let r = Object.create(null);
    let o = new Map();
    for (let u of om(e, t, o)) {
      if (u instanceof le) {
        s.push(u);
      } else {
        (r[u.facet.id] ||= []).push(u);
      }
    }
    let l = Object.create(null);
    let a = [];
    let h = [];
    for (let u of s) {
      l[u.id] = h.length << 1;
      h.push(d => u.slot(d));
    }
    let c = i == null ? undefined : i.config.facets;
    for (let u in r) {
      let d = r[u];
      let m = d[0].facet;
      let p = c && c[u] || [];
      if (d.every(O => O.type == 0)) {
        l[m.id] = a.length << 1 | 1;
        if (jo(p, d)) {
          a.push(i.facet(m));
        } else {
          let O = m.combine(d.map(b => b.value));
          a.push(i && m.compare(O, i.facet(m)) ? i.facet(m) : O);
        }
      } else {
        for (let O of d) {
          if (O.type == 0) {
            l[O.id] = a.length << 1 | 1;
            a.push(O.value);
          } else {
            l[O.id] = h.length << 1;
            h.push(b => O.dynamicSlot(b));
          }
        }
        l[m.id] = h.length << 1;
        h.push(O => rm(O, m, d));
      }
    }
    let f = h.map(u => u(l));
    return new fs(e, o, f, l, a, r);
  }
}
function om(n, e, t) {
  let i = [[], [], [], [], []];
  let s = new Map();
  function r(o, l) {
    let a = s.get(o);
    if (a != null) {
      if (a <= l) {
        return;
      }
      let h = i[a].indexOf(o);
      if (h > -1) {
        i[a].splice(h, 1);
      }
      if (o instanceof Ur) {
        t.delete(o.compartment);
      }
    }
    s.set(o, l);
    if (Array.isArray(o)) {
      for (let h of o) {
        r(h, l);
      }
    } else if (o instanceof Ur) {
      if (t.has(o.compartment)) {
        throw new RangeError("Duplicate use of compartment in extensions");
      }
      let h = e.get(o.compartment) || o.inner;
      t.set(o.compartment, h);
      r(h, l);
    } else if (o instanceof Tc) {
      r(o.inner, o.prec);
    } else if (o instanceof le) {
      i[l].push(o);
      if (o.provides) {
        r(o.provides, l);
      }
    } else if (o instanceof Jn) {
      i[l].push(o);
      if (o.facet.extensions) {
        r(o.facet.extensions, Kt.default);
      }
    } else {
      let h = o.extension;
      if (!h) {
        throw new Error(`Unrecognized extension value in extension set (${o}).`);
      }
      if (h == o) {
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      }
      r(h, l);
    }
  }
  r(n, Kt.default);
  return i.reduce((o, l) => o.concat(l));
}
function ji(n, e) {
  if (e & 1) {
    return 2;
  }
  let t = e >> 1;
  let i = n.status[t];
  if (i == 4) {
    throw new Error("Cyclic dependency between fields and/or facets");
  }
  if (i & 2) {
    return i;
  }
  n.status[t] = 4;
  let s = n.computeSlot(n, n.config.dynamicSlots[t]);
  return n.status[t] = s | 2;
}
function us(n, e) {
  if (e & 1) {
    return n.config.staticValues[e >> 1];
  } else {
    return n.values[e >> 1];
  }
}
const $c = T.define();
const Hr = T.define({
  combine: n => n.some(e => e),
  static: true
});
const Xc = T.define({
  combine: n => n.length ? n[0] : undefined,
  static: true
});
const Ec = T.define();
const Ac = T.define();
const Pc = T.define();
const Mc = T.define({
  combine: n => n.length ? n[0] : false
});
class Ot {
  constructor(e, t) {
    this.type = e;
    this.value = t;
  }
  static define() {
    return new lm();
  }
}
class lm {
  of(e) {
    return new Ot(this, e);
  }
}
class am {
  constructor(e) {
    this.map = e;
  }
  of(e) {
    return new M(this, e);
  }
}
class M {
  constructor(e, t) {
    this.type = e;
    this.value = t;
  }
  map(e) {
    let t = this.type.map(this.value, e);
    if (t === undefined) {
      return undefined;
    } else if (t == this.value) {
      return this;
    } else {
      return new M(this.type, t);
    }
  }
  is(e) {
    return this.type == e;
  }
  static define(e = {}) {
    return new am(e.map || (t => t));
  }
  static mapEffects(e, t) {
    if (!e.length) {
      return e;
    }
    let i = [];
    for (let s of e) {
      let r = s.map(t);
      if (r) {
        i.push(r);
      }
    }
    return i;
  }
}
M.reconfigure = M.define();
M.appendConfig = M.define();
class fe {
  constructor(e, t, i, s, r, o) {
    this.startState = e;
    this.changes = t;
    this.selection = i;
    this.effects = s;
    this.annotations = r;
    this.scrollIntoView = o;
    this._doc = null;
    this._state = null;
    if (i) {
      qc(i, t.newLength);
    }
    if (!r.some(l => l.type == fe.time)) {
      this.annotations = r.concat(fe.time.of(Date.now()));
    }
  }
  static create(e, t, i, s, r, o) {
    return new fe(e, t, i, s, r, o);
  }
  get newDoc() {
    return this._doc ||= this.changes.apply(this.startState.doc);
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  get state() {
    if (!this._state) {
      this.startState.applyTransaction(this);
    }
    return this._state;
  }
  annotation(e) {
    for (let t of this.annotations) {
      if (t.type == e) {
        return t.value;
      }
    }
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(e) {
    let t = this.annotation(fe.userEvent);
    return !!t && (t == e || !!(t.length > e.length) && t.slice(0, e.length) == e && t[e.length] == ".");
  }
}
fe.time = Ot.define();
fe.userEvent = Ot.define();
fe.addToHistory = Ot.define();
fe.remote = Ot.define();
function hm(n, e) {
  let t = [];
  for (let i = 0, s = 0;;) {
    let r;
    let o;
    if (i < n.length && (s == e.length || e[s] >= n[i])) {
      r = n[i++];
      o = n[i++];
    } else if (s < e.length) {
      r = e[s++];
      o = e[s++];
    } else {
      return t;
    }
    if (!t.length || t[t.length - 1] < r) {
      t.push(r, o);
    } else if (t[t.length - 1] < o) {
      t[t.length - 1] = o;
    }
  }
}
function Rc(n, e, t) {
  var i;
  let s;
  let r;
  let o;
  if (t) {
    s = e.changes;
    r = de.empty(e.changes.length);
    o = n.changes.compose(e.changes);
  } else {
    s = e.changes.map(n.changes);
    r = n.changes.mapDesc(e.changes, true);
    o = n.changes.compose(s);
  }
  return {
    changes: o,
    selection: e.selection ? e.selection.map(r) : (i = n.selection) === null || i === undefined ? undefined : i.map(s),
    effects: M.mapEffects(n.effects, s).concat(M.mapEffects(e.effects, r)),
    annotations: n.annotations.length ? n.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: n.scrollIntoView || e.scrollIntoView
  };
}
function Kr(n, e, t) {
  let i = e.selection;
  let s = Oi(e.annotations);
  if (e.userEvent) {
    s = s.concat(fe.userEvent.of(e.userEvent));
  }
  return {
    changes: e.changes instanceof de ? e.changes : de.of(e.changes || [], t, n.facet(Xc)),
    selection: i && (i instanceof y ? i : y.single(i.anchor, i.head)),
    effects: Oi(e.effects),
    annotations: s,
    scrollIntoView: !!e.scrollIntoView
  };
}
function Vc(n, e, t) {
  let i = Kr(n, e.length ? e[0] : {}, n.doc.length);
  if (e.length && e[0].filter === false) {
    t = false;
  }
  for (let r = 1; r < e.length; r++) {
    if (e[r].filter === false) {
      t = false;
    }
    let o = !!e[r].sequential;
    i = Rc(i, Kr(n, e[r], o ? i.changes.newLength : n.doc.length), o);
  }
  let s = fe.create(n, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return fm(t ? cm(s) : s);
}
function cm(n) {
  let e = n.startState;
  let t = true;
  for (let s of e.facet(Ec)) {
    let r = s(n);
    if (r === false) {
      t = false;
      break;
    }
    if (Array.isArray(r)) {
      t = t === true ? r : hm(t, r);
    }
  }
  if (t !== true) {
    let s;
    let r;
    if (t === false) {
      r = n.changes.invertedDesc;
      s = de.empty(e.doc.length);
    } else {
      let o = n.changes.filter(t);
      s = o.changes;
      r = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    n = fe.create(e, s, n.selection && n.selection.map(r), M.mapEffects(n.effects, r), n.annotations, n.scrollIntoView);
  }
  let i = e.facet(Ac);
  for (let s = i.length - 1; s >= 0; s--) {
    let r = i[s](n);
    if (r instanceof fe) {
      n = r;
    } else if (Array.isArray(r) && r.length == 1 && r[0] instanceof fe) {
      n = r[0];
    } else {
      n = Vc(e, Oi(r), false);
    }
  }
  return n;
}
function fm(n) {
  let e = n.startState;
  let t = e.facet(Pc);
  let i = n;
  for (let s = t.length - 1; s >= 0; s--) {
    let r = t[s](n);
    if (r && Object.keys(r).length) {
      i = Rc(i, Kr(e, r, n.changes.newLength), true);
    }
  }
  if (i == n) {
    return n;
  } else {
    return fe.create(e, n.changes, n.selection, i.effects, i.annotations, i.scrollIntoView);
  }
}
const um = [];
function Oi(n) {
  if (n == null) {
    return um;
  } else if (Array.isArray(n)) {
    return n;
  } else {
    return [n];
  }
}
var ee = function (n) {
  n[n.Word = 0] = "Word";
  n[n.Space = 1] = "Space";
  n[n.Other = 2] = "Other";
  return n;
}(ee ||= {});
const dm = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Jr;
try {
  Jr = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {}
function mm(n) {
  if (Jr) {
    return Jr.test(n);
  }
  for (let e = 0; e < n.length; e++) {
    let t = n[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || dm.test(t))) {
      return true;
    }
  }
  return false;
}
function pm(n) {
  return e => {
    if (!/\S/.test(e)) {
      return ee.Space;
    }
    if (mm(e)) {
      return ee.Word;
    }
    for (let t = 0; t < n.length; t++) {
      if (e.indexOf(n[t]) > -1) {
        return ee.Word;
      }
    }
    return ee.Other;
  };
}
class Y {
  constructor(e, t, i, s, r, o) {
    this.config = e;
    this.doc = t;
    this.selection = i;
    this.values = s;
    this.status = e.statusTemplate.slice();
    this.computeSlot = r;
    if (o) {
      o._state = this;
    }
    for (let l = 0; l < this.config.dynamicSlots.length; l++) {
      ji(this, l << 1);
    }
    this.computeSlot = null;
  }
  field(e, t = true) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t) {
        throw new RangeError("Field is not present in this state");
      }
      return;
    }
    ji(this, i);
    return us(this, i);
  }
  update(...e) {
    return Vc(this, e, true);
  }
  applyTransaction(e) {
    let t = this.config;
    let {
      base: i,
      compartments: s
    } = t;
    for (let l of e.effects) {
      if (l.is(Bs.reconfigure)) {
        if (t) {
          s = new Map();
          t.compartments.forEach((a, h) => s.set(h, a));
          t = null;
        }
        s.set(l.value.compartment, l.value.extension);
      } else if (l.is(M.reconfigure)) {
        t = null;
        i = l.value;
      } else if (l.is(M.appendConfig)) {
        t = null;
        i = Oi(i).concat(l.value);
      }
    }
    let r;
    if (t) {
      r = e.startState.values.slice();
    } else {
      t = fs.resolve(i, s, this);
      r = new Y(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (a, h) => h.reconfigure(a, this), null).values;
    }
    let o = e.startState.facet(Hr) ? e.newSelection : e.newSelection.asSingle();
    new Y(t, e.newDoc, o, r, (l, a) => a.update(l, e), e);
  }
  replaceSelection(e) {
    if (typeof e == "string") {
      e = this.toText(e);
    }
    return this.changeByRange(t => ({
      changes: {
        from: t.from,
        to: t.to,
        insert: e
      },
      range: y.cursor(t.from + e.length)
    }));
  }
  changeByRange(e) {
    let t = this.selection;
    let i = e(t.ranges[0]);
    let s = this.changes(i.changes);
    let r = [i.range];
    let o = Oi(i.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]);
      let h = this.changes(a.changes);
      let c = h.map(s);
      for (let u = 0; u < l; u++) {
        r[u] = r[u].map(c);
      }
      let f = s.mapDesc(h, true);
      r.push(a.range.map(f));
      s = s.compose(c);
      o = M.mapEffects(o, c).concat(M.mapEffects(Oi(a.effects), f));
    }
    return {
      changes: s,
      selection: y.create(r, t.mainIndex),
      effects: o
    };
  }
  changes(e = []) {
    if (e instanceof de) {
      return e;
    } else {
      return de.of(e, this.doc.length, this.facet(Y.lineSeparator));
    }
  }
  toText(e) {
    return I.of(e.split(this.facet(Y.lineSeparator) || zr));
  }
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  facet(e) {
    let t = this.config.address[e.id];
    if (t == null) {
      return e.default;
    } else {
      ji(this, t);
      return us(this, t);
    }
  }
  toJSON(e) {
    let t = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e) {
      for (let i in e) {
        let s = e[i];
        if (s instanceof le && this.config.address[s.id] != null) {
          t[i] = s.spec.toJSON(this.field(e[i]), this);
        }
      }
    }
    return t;
  }
  static fromJSON(e, t = {}, i) {
    if (!e || typeof e.doc != "string") {
      throw new RangeError("Invalid JSON representation for EditorState");
    }
    let s = [];
    if (i) {
      for (let r in i) {
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          let o = i[r];
          let l = e[r];
          s.push(o.init(a => o.spec.fromJSON(l, a)));
        }
      }
    }
    return Y.create({
      doc: e.doc,
      selection: y.fromJSON(e.selection),
      extensions: t.extensions ? s.concat([t.extensions]) : s
    });
  }
  static create(e = {}) {
    let t = fs.resolve(e.extensions || [], new Map());
    let i = e.doc instanceof I ? e.doc : I.of((e.doc || "").split(t.staticFacet(Y.lineSeparator) || zr));
    let s = e.selection ? e.selection instanceof y ? e.selection : y.single(e.selection.anchor, e.selection.head) : y.single(0);
    qc(s, i.length);
    if (!t.staticFacet(Hr)) {
      s = s.asSingle();
    }
    return new Y(t, i, s, t.dynamicSlots.map(() => null), (r, o) => o.create(r), null);
  }
  get tabSize() {
    return this.facet(Y.tabSize);
  }
  get lineBreak() {
    return this.facet(Y.lineSeparator) || `
`;
  }
  get readOnly() {
    return this.facet(Mc);
  }
  phrase(e, ...t) {
    for (let i of this.facet(Y.phrases)) {
      if (Object.prototype.hasOwnProperty.call(i, e)) {
        e = i[e];
        break;
      }
    }
    if (t.length) {
      e = e.replace(/\$(\$|\d*)/g, (i, s) => {
        if (s == "$") {
          return "$";
        }
        let r = +(s || 1);
        if (!r || r > t.length) {
          return i;
        } else {
          return t[r - 1];
        }
      });
    }
    return e;
  }
  languageDataAt(e, t, i = -1) {
    let s = [];
    for (let r of this.facet($c)) {
      for (let o of r(this, t, i)) {
        if (Object.prototype.hasOwnProperty.call(o, e)) {
          s.push(o[e]);
        }
      }
    }
    return s;
  }
  charCategorizer(e) {
    let t = this.languageDataAt("wordChars", e);
    return pm(t.length ? t[0] : "");
  }
  wordAt(e) {
    let {
      text: t,
      from: i,
      length: s
    } = this.doc.lineAt(e);
    let r = this.charCategorizer(e);
    let o = e - i;
    let l = e - i;
    while (o > 0) {
      let a = be(t, o, false);
      if (r(t.slice(a, o)) != ee.Word) {
        break;
      }
      o = a;
    }
    while (l < s) {
      let a = be(t, l);
      if (r(t.slice(l, a)) != ee.Word) {
        break;
      }
      l = a;
    }
    if (o == l) {
      return null;
    } else {
      return y.range(o + i, l + i);
    }
  }
}
Y.allowMultipleSelections = Hr;
Y.tabSize = T.define({
  combine: n => n.length ? n[0] : 4
});
Y.lineSeparator = Xc;
Y.readOnly = Mc;
Y.phrases = T.define({
  compare(n, e) {
    let t = Object.keys(n);
    let i = Object.keys(e);
    return t.length == i.length && t.every(s => n[s] == e[s]);
  }
});
Y.languageData = $c;
Y.changeFilter = Ec;
Y.transactionFilter = Ac;
Y.transactionExtender = Pc;
Bs.reconfigure = M.define();
function Je(n, e, t = {}) {
  let i = {};
  for (let s of n) {
    for (let r of Object.keys(s)) {
      let o = s[r];
      let l = i[r];
      if (l === undefined) {
        i[r] = o;
      } else if (l !== o && o !== undefined) {
        if (Object.hasOwnProperty.call(t, r)) {
          i[r] = t[r](l, o);
        } else {
          throw new Error("Config merge conflict for field " + r);
        }
      }
    }
  }
  for (let s in e) {
    if (i[s] === undefined) {
      i[s] = e[s];
    }
  }
  return i;
}
class Mt {
  eq(e) {
    return this == e;
  }
  range(e, t = e) {
    return eo.create(e, t, this);
  }
}
Mt.prototype.startSide = Mt.prototype.endSide = 0;
Mt.prototype.point = false;
Mt.prototype.mapMode = Qe.TrackDel;
function _o(n, e) {
  return n == e || n.constructor == e.constructor && n.eq(e);
}
let eo = class Wc {
  constructor(e, t, i) {
    this.from = e;
    this.to = t;
    this.value = i;
  }
  static create(e, t, i) {
    return new Wc(e, t, i);
  }
};
function to(n, e) {
  return n.from - e.from || n.value.startSide - e.value.startSide;
}
class Fo {
  constructor(e, t, i, s) {
    this.from = e;
    this.to = t;
    this.value = i;
    this.maxPoint = s;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(e, t, i, s = 0) {
    let r = i ? this.to : this.from;
    for (let o = s, l = r.length;;) {
      if (o == l) {
        return o;
      }
      let a = o + l >> 1;
      let h = r[a] - e || (i ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == o) {
        if (h >= 0) {
          return o;
        } else {
          return l;
        }
      }
      if (h >= 0) {
        l = a;
      } else {
        o = a + 1;
      }
    }
  }
  between(e, t, i, s) {
    for (let r = this.findIndex(t, -1000000000, true), o = this.findIndex(i, 1000000000, false, r); r < o; r++) {
      if (s(this.from[r] + e, this.to[r] + e, this.value[r]) === false) {
        return false;
      }
    }
  }
  map(e, t) {
    let i = [];
    let s = [];
    let r = [];
    let o = -1;
    let l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let h = this.value[a];
      let c = this.from[a] + e;
      let f = this.to[a] + e;
      let u;
      let d;
      if (c == f) {
        let m = t.mapPos(c, h.startSide, h.mapMode);
        if (m == null || (u = d = m, h.startSide != h.endSide && (d = t.mapPos(c, h.endSide), d < u))) {
          continue;
        }
      } else {
        u = t.mapPos(c, h.startSide);
        d = t.mapPos(f, h.endSide);
        if (u > d || u == d && h.startSide > 0 && h.endSide <= 0) {
          continue;
        }
      }
      if (!((d - u || h.endSide - h.startSide) < 0)) {
        if (o < 0) {
          o = u;
        }
        if (h.point) {
          l = Math.max(l, d - u);
        }
        i.push(h);
        s.push(u - o);
        r.push(d - o);
      }
    }
    return {
      mapped: i.length ? new Fo(s, r, i, l) : null,
      pos: o
    };
  }
}
class L {
  constructor(e, t, i, s) {
    this.chunkPos = e;
    this.chunk = t;
    this.nextLayer = i;
    this.maxPoint = s;
  }
  static create(e, t, i, s) {
    return new L(e, t, i, s);
  }
  get length() {
    let e = this.chunk.length - 1;
    if (e < 0) {
      return 0;
    } else {
      return Math.max(this.chunkEnd(e), this.nextLayer.length);
    }
  }
  get size() {
    if (this.isEmpty) {
      return 0;
    }
    let e = this.nextLayer.size;
    for (let t of this.chunk) {
      e += t.value.length;
    }
    return e;
  }
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  update(e) {
    let {
      add: t = [],
      sort: i = false,
      filterFrom: s = 0,
      filterTo: r = this.length
    } = e;
    let o = e.filter;
    if (t.length == 0 && !o) {
      return this;
    }
    if (i) {
      t = t.slice().sort(to);
    }
    if (this.isEmpty) {
      if (t.length) {
        return L.of(t);
      } else {
        return this;
      }
    }
    let l = new Dc(this, null, -1).goto(0);
    let a = 0;
    let h = [];
    let c = new Qt();
    while (l.value || a < t.length) {
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let f = t[a++];
        if (!c.addInner(f.from, f.to, f.value)) {
          h.push(f);
        }
      } else if (l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!o || s > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) && c.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex])) {
        l.nextChunk();
      } else {
        if (!o || s > l.to || r < l.from || o(l.from, l.to, l.value)) {
          if (!c.addInner(l.from, l.to, l.value)) {
            h.push(eo.create(l.from, l.to, l.value));
          }
        }
        l.next();
      }
    }
    return c.finishInner(this.nextLayer.isEmpty && !h.length ? L.empty : this.nextLayer.update({
      add: h,
      filter: o,
      filterFrom: s,
      filterTo: r
    }));
  }
  map(e) {
    if (e.empty || this.isEmpty) {
      return this;
    }
    let t = [];
    let i = [];
    let s = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o];
      let a = this.chunk[o];
      let h = e.touchesRange(l, l + a.length);
      if (h === false) {
        s = Math.max(s, a.maxPoint);
        t.push(a);
        i.push(e.mapPos(l));
      } else if (h === true) {
        let {
          mapped: c,
          pos: f
        } = a.map(l, e);
        if (c) {
          s = Math.max(s, c.maxPoint);
          t.push(c);
          i.push(f);
        }
      }
    }
    let r = this.nextLayer.map(e);
    if (t.length == 0) {
      return r;
    } else {
      return new L(i, t, r || L.empty, s);
    }
  }
  between(e, t, i) {
    if (!this.isEmpty) {
      for (let s = 0; s < this.chunk.length; s++) {
        let r = this.chunkPos[s];
        let o = this.chunk[s];
        if (t >= r && e <= r + o.length && o.between(r, e - r, t - r, i) === false) {
          return;
        }
      }
      this.nextLayer.between(e, t, i);
    }
  }
  iter(e = 0) {
    return tn.from([this]).goto(e);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(e, t = 0) {
    return tn.from(e).goto(t);
  }
  static compare(e, t, i, s, r = -1) {
    let o = e.filter(f => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r);
    let l = t.filter(f => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r);
    let a = ia(o, l, i);
    let h = new Li(o, a, r);
    let c = new Li(l, a, r);
    i.iterGaps((f, u, d) => na(h, f, c, u, d, s));
    if (i.empty && i.length == 0) {
      na(h, 0, c, 0, 0, s);
    }
  }
  static eq(e, t, i = 0, s) {
    if (s == null) {
      s = 999999999;
    }
    let r = e.filter(c => !c.isEmpty && t.indexOf(c) < 0);
    let o = t.filter(c => !c.isEmpty && e.indexOf(c) < 0);
    if (r.length != o.length) {
      return false;
    }
    if (!r.length) {
      return true;
    }
    let l = ia(r, o);
    let a = new Li(r, l, 0).goto(i);
    let h = new Li(o, l, 0).goto(i);
    while (true) {
      if (a.to != h.to || !io(a.active, h.active) || a.point && (!h.point || !_o(a.point, h.point))) {
        return false;
      }
      if (a.to > s) {
        return true;
      }
      a.next();
      h.next();
    }
  }
  static spans(e, t, i, s, r = -1) {
    let o = new Li(e, null, r).goto(t);
    let l = t;
    let a = o.openStart;
    while (true) {
      let h = Math.min(o.to, i);
      if (o.point) {
        let c = o.activeForPoint(o.to);
        let f = o.pointFrom < t ? c.length + 1 : o.point.startSide < 0 ? c.length : Math.min(c.length, a);
        s.point(l, h, o.point, c, f, o.pointRank);
        a = Math.min(o.openEnd(h), c.length);
      } else if (h > l) {
        s.span(l, h, o.active, a);
        a = o.openEnd(h);
      }
      if (o.to > i) {
        return a + (o.point && o.to > i ? 1 : 0);
      }
      l = o.to;
      o.next();
    }
  }
  static of(e, t = false) {
    let i = new Qt();
    for (let s of e instanceof eo ? [e] : t ? Om(e) : e) {
      i.add(s.from, s.to, s.value);
    }
    return i.finish();
  }
  static join(e) {
    if (!e.length) {
      return L.empty;
    }
    let t = e[e.length - 1];
    for (let i = e.length - 2; i >= 0; i--) {
      for (let s = e[i]; s != L.empty; s = s.nextLayer) {
        t = new L(s.chunkPos, s.chunk, t, Math.max(s.maxPoint, t.maxPoint));
      }
    }
    return t;
  }
}
L.empty = new L([], [], null, -1);
function Om(n) {
  if (n.length > 1) {
    for (let e = n[0], t = 1; t < n.length; t++) {
      let i = n[t];
      if (to(e, i) > 0) {
        return n.slice().sort(to);
      }
      e = i;
    }
  }
  return n;
}
L.empty.nextLayer = L.empty;
class Qt {
  finishChunk(e) {
    this.chunks.push(new Fo(this.from, this.to, this.value, this.maxPoint));
    this.chunkPos.push(this.chunkStart);
    this.chunkStart = -1;
    this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint);
    this.maxPoint = -1;
    if (e) {
      this.from = [];
      this.to = [];
      this.value = [];
    }
  }
  constructor() {
    this.chunks = [];
    this.chunkPos = [];
    this.chunkStart = -1;
    this.last = null;
    this.lastFrom = -1000000000;
    this.lastTo = -1000000000;
    this.from = [];
    this.to = [];
    this.value = [];
    this.maxPoint = -1;
    this.setMaxPoint = -1;
    this.nextLayer = null;
  }
  add(e, t, i) {
    if (!this.addInner(e, t, i)) {
      (this.nextLayer ||= new Qt()).add(e, t, i);
    }
  }
  addInner(e, t, i) {
    let s = e - this.lastTo || i.startSide - this.last.endSide;
    if (s <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0) {
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    }
    if (s < 0) {
      return false;
    } else {
      if (this.from.length == 250) {
        this.finishChunk(true);
      }
      if (this.chunkStart < 0) {
        this.chunkStart = e;
      }
      this.from.push(e - this.chunkStart);
      this.to.push(t - this.chunkStart);
      this.last = i;
      this.lastFrom = e;
      this.lastTo = t;
      this.value.push(i);
      if (i.point) {
        this.maxPoint = Math.max(this.maxPoint, t - e);
      }
      return true;
    }
  }
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0) {
      return false;
    }
    if (this.from.length) {
      this.finishChunk(true);
    }
    this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint);
    this.chunks.push(t);
    this.chunkPos.push(e);
    let i = t.value.length - 1;
    this.last = t.value[i];
    this.lastFrom = t.from[i] + e;
    this.lastTo = t.to[i] + e;
    return true;
  }
  finish() {
    return this.finishInner(L.empty);
  }
  finishInner(e) {
    if (this.from.length) {
      this.finishChunk(false);
    }
    if (this.chunks.length == 0) {
      return e;
    }
    let t = L.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    this.from = null;
    return t;
  }
}
function ia(n, e, t) {
  let i = new Map();
  for (let r of n) {
    for (let o = 0; o < r.chunk.length; o++) {
      if (r.chunk[o].maxPoint <= 0) {
        i.set(r.chunk[o], r.chunkPos[o]);
      }
    }
  }
  let s = new Set();
  for (let r of e) {
    for (let o = 0; o < r.chunk.length; o++) {
      let l = i.get(r.chunk[o]);
      if (l != null && (t ? t.mapPos(l) : l) == r.chunkPos[o] && (t == null || !t.touchesRange(l, l + r.chunk[o].length))) {
        s.add(r.chunk[o]);
      }
    }
  }
  return s;
}
class Dc {
  constructor(e, t, i, s = 0) {
    this.layer = e;
    this.skip = t;
    this.minPoint = i;
    this.rank = s;
  }
  get startSide() {
    if (this.value) {
      return this.value.startSide;
    } else {
      return 0;
    }
  }
  get endSide() {
    if (this.value) {
      return this.value.endSide;
    } else {
      return 0;
    }
  }
  goto(e, t = -1000000000) {
    this.chunkIndex = this.rangeIndex = 0;
    this.gotoInner(e, t, false);
    return this;
  }
  gotoInner(e, t, i) {
    while (this.chunkIndex < this.layer.chunk.length) {
      let s = this.layer.chunk[this.chunkIndex];
      if ((!this.skip || !this.skip.has(s)) && !(this.layer.chunkEnd(this.chunkIndex) < e) && !(s.maxPoint < this.minPoint)) {
        break;
      }
      this.chunkIndex++;
      i = false;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let s = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, true);
      if (!i || this.rangeIndex < s) {
        this.setRangeIndex(s);
      }
    }
    this.next();
  }
  forward(e, t) {
    if ((this.to - e || this.endSide - t) < 0) {
      this.gotoInner(e, t, true);
    }
  }
  next() {
    while (true) {
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1000000000;
        this.value = null;
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex];
        let t = this.layer.chunk[this.chunkIndex];
        let i = e + t.from[this.rangeIndex];
        this.from = i;
        this.to = e + t.to[this.rangeIndex];
        this.value = t.value[this.rangeIndex];
        this.setRangeIndex(this.rangeIndex + 1);
        if (this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint) {
          break;
        }
      }
    }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      this.chunkIndex++;
      if (this.skip) {
        while (this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex])) {
          this.chunkIndex++;
        }
      }
      this.rangeIndex = 0;
    } else {
      this.rangeIndex = e;
    }
  }
  nextChunk() {
    this.chunkIndex++;
    this.rangeIndex = 0;
    this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
}
class tn {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let s = [];
    for (let r = 0; r < e.length; r++) {
      for (let o = e[r]; !o.isEmpty; o = o.nextLayer) {
        if (o.maxPoint >= i) {
          s.push(new Dc(o, t, i, r));
        }
      }
    }
    if (s.length == 1) {
      return s[0];
    } else {
      return new tn(s);
    }
  }
  get startSide() {
    if (this.value) {
      return this.value.startSide;
    } else {
      return 0;
    }
  }
  goto(e, t = -1000000000) {
    for (let i of this.heap) {
      i.goto(e, t);
    }
    for (let i = this.heap.length >> 1; i >= 0; i--) {
      lr(this.heap, i);
    }
    this.next();
    return this;
  }
  forward(e, t) {
    for (let i of this.heap) {
      i.forward(e, t);
    }
    for (let i = this.heap.length >> 1; i >= 0; i--) {
      lr(this.heap, i);
    }
    if ((this.to - e || this.value.endSide - t) < 0) {
      this.next();
    }
  }
  next() {
    if (this.heap.length == 0) {
      this.from = this.to = 1000000000;
      this.value = null;
      this.rank = -1;
    } else {
      let e = this.heap[0];
      this.from = e.from;
      this.to = e.to;
      this.value = e.value;
      this.rank = e.rank;
      if (e.value) {
        e.next();
      }
      lr(this.heap, 0);
    }
  }
}
function lr(n, e) {
  for (let t = n[e];;) {
    let i = (e << 1) + 1;
    if (i >= n.length) {
      break;
    }
    let s = n[i];
    if (i + 1 < n.length && s.compare(n[i + 1]) >= 0) {
      s = n[i + 1];
      i++;
    }
    if (t.compare(s) < 0) {
      break;
    }
    n[i] = t;
    n[e] = s;
    e = i;
  }
}
class Li {
  constructor(e, t, i) {
    this.minPoint = i;
    this.active = [];
    this.activeTo = [];
    this.activeRank = [];
    this.minActive = -1;
    this.point = null;
    this.pointFrom = 0;
    this.pointRank = 0;
    this.to = -1000000000;
    this.endSide = 0;
    this.openStart = -1;
    this.cursor = tn.from(e, t, i);
  }
  goto(e, t = -1000000000) {
    this.cursor.goto(e, t);
    this.active.length = this.activeTo.length = this.activeRank.length = 0;
    this.minActive = -1;
    this.to = e;
    this.endSide = t;
    this.openStart = -1;
    this.next();
    return this;
  }
  forward(e, t) {
    while (this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0) {
      this.removeActive(this.minActive);
    }
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    qn(this.active, e);
    qn(this.activeTo, e);
    qn(this.activeRank, e);
    this.minActive = sa(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0;
    let {
      value: i,
      to: s,
      rank: r
    } = this.cursor;
    while (t < this.activeRank.length && (r - this.activeRank[t] || s - this.activeTo[t]) > 0) {
      t++;
    }
    Tn(this.active, t, i);
    Tn(this.activeTo, t, s);
    Tn(this.activeRank, t, r);
    if (e) {
      Tn(e, t, this.cursor.from);
    }
    this.minActive = sa(this.active, this.activeTo);
  }
  next() {
    let e = this.to;
    let t = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    while (true) {
      let s = this.minActive;
      if (s > -1 && (this.activeTo[s] - this.cursor.from || this.active[s].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[s] > e) {
          this.to = this.activeTo[s];
          this.endSide = this.active[s].endSide;
          break;
        }
        this.removeActive(s);
        if (i) {
          qn(i, s);
        }
      } else if (this.cursor.value) {
        if (this.cursor.from > e) {
          this.to = this.cursor.from;
          this.endSide = this.cursor.startSide;
          break;
        } else {
          let r = this.cursor.value;
          if (!r.point) {
            this.addActive(i);
            this.cursor.next();
          } else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to) {
            this.cursor.next();
          } else {
            this.point = r;
            this.pointFrom = this.cursor.from;
            this.pointRank = this.cursor.rank;
            this.to = this.cursor.to;
            this.endSide = r.endSide;
            this.cursor.next();
            this.forward(this.to, this.endSide);
            break;
          }
        }
      } else {
        this.to = this.endSide = 1000000000;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let s = i.length - 1; s >= 0 && i[s] < e; s--) {
        this.openStart++;
      }
    }
  }
  activeForPoint(e) {
    if (!this.active.length) {
      return this.active;
    }
    let t = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--) {
      if (this.activeTo[i] > e || this.activeTo[i] == e && this.active[i].endSide >= this.point.endSide) {
        t.push(this.active[i]);
      }
    }
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--) {
      t++;
    }
    return t;
  }
}
function na(n, e, t, i, s, r) {
  n.goto(e);
  t.goto(i);
  let o = i + s;
  let l = i;
  let a = i - e;
  let h = !!r.boundChange;
  for (let c = false;;) {
    let f = n.to + a - t.to;
    let u = f || n.endSide - t.endSide;
    let d = u < 0 ? n.to + a : t.to;
    let m = Math.min(d, o);
    if (n.point || t.point) {
      if (!n.point || !t.point || !_o(n.point, t.point) || !io(n.activeForPoint(n.to), t.activeForPoint(t.to))) {
        r.comparePoint(l, m, n.point, t.point);
      }
      c = false;
    } else {
      if (c) {
        r.boundChange(l);
      }
      if (m > l && !io(n.active, t.active)) {
        r.compareRange(l, m, n.active, t.active);
      }
      if (h && m < o && (f || n.openEnd(d) != t.openEnd(d))) {
        c = true;
      }
    }
    if (d > o) {
      break;
    }
    l = d;
    if (u <= 0) {
      n.next();
    }
    if (u >= 0) {
      t.next();
    }
  }
}
function io(n, e) {
  if (n.length != e.length) {
    return false;
  }
  for (let t = 0; t < n.length; t++) {
    if (n[t] != e[t] && !_o(n[t], e[t])) {
      return false;
    }
  }
  return true;
}
function qn(n, e) {
  for (let t = e, i = n.length - 1; t < i; t++) {
    n[t] = n[t + 1];
  }
  n.pop();
}
function Tn(n, e, t) {
  for (let i = n.length - 1; i >= e; i--) {
    n[i + 1] = n[i];
  }
  n[e] = t;
}
function sa(n, e) {
  let t = -1;
  let i = 1000000000;
  for (let s = 0; s < e.length; s++) {
    if ((e[s] - i || n[s].endSide - n[t].endSide) < 0) {
      t = s;
      i = e[s];
    }
  }
  return t;
}
function Ei(n, e, t = n.length) {
  let i = 0;
  for (let s = 0; s < t && s < n.length;) {
    if (n.charCodeAt(s) == 9) {
      i += e - i % e;
      s++;
    } else {
      i++;
      s = be(n, s);
    }
  }
  return i;
}
function no(n, e, t, i) {
  for (let s = 0, r = 0;;) {
    if (r >= e) {
      return s;
    }
    if (s == n.length) {
      break;
    }
    r += n.charCodeAt(s) == 9 ? t - r % t : 1;
    s = be(n, s);
  }
  if (i === true) {
    return -1;
  } else {
    return n.length;
  }
}
const so = "ͼ";
const ra = typeof Symbol === "undefined" ? "__" + so : Symbol.for(so);
const ro = typeof Symbol === "undefined" ? "__styleSet" + Math.floor(Math.random() * 100000000) : Symbol("styleSet");
const oa = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : {};
class Rt {
  constructor(e, t) {
    this.rules = [];
    let {
      finish: i
    } = t || {};
    function s(o) {
      if (/^@/.test(o)) {
        return [o];
      } else {
        return o.split(/,\s*/);
      }
    }
    function r(o, l, a, h) {
      let c = [];
      let f = /^@(\w+)\b/.exec(o[0]);
      let u = f && f[1] == "keyframes";
      if (f && l == null) {
        return a.push(o[0] + ";");
      }
      for (let d in l) {
        let m = l[d];
        if (/&/.test(d)) {
          r(d.split(/,\s*/).map(p => o.map(O => p.replace(/&/, O))).reduce((p, O) => p.concat(O)), m, a);
        } else if (m && typeof m == "object") {
          if (!f) {
            throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          }
          r(s(d), m, c, u);
        } else if (m != null) {
          c.push(d.replace(/_.*/, "").replace(/[A-Z]/g, p => "-" + p.toLowerCase()) + ": " + m + ";");
        }
      }
      if (c.length || u) {
        a.push((i && !f && !h ? o.map(i) : o).join(", ") + " {" + c.join(" ") + "}");
      }
    }
    for (let o in e) {
      r(s(o), e[o], this.rules);
    }
  }
  getRules() {
    return this.rules.join(`
`);
  }
  static newName() {
    let e = oa[ra] || 1;
    oa[ra] = e + 1;
    return so + e.toString(36);
  }
  static mount(e, t, i) {
    let s = e[ro];
    let r = i && i.nonce;
    if (s) {
      if (r) {
        s.setNonce(r);
      }
    } else {
      s = new gm(e, r);
    }
    s.mount(Array.isArray(t) ? t : [t], e);
  }
}
let la = new Map();
class gm {
  constructor(e, t) {
    let i = e.ownerDocument || e;
    let s = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && s.CSSStyleSheet) {
      let r = la.get(i);
      if (r) {
        return e[ro] = r;
      }
      this.sheet = new s.CSSStyleSheet();
      la.set(i, this);
    } else {
      this.styleTag = i.createElement("style");
      if (t) {
        this.styleTag.setAttribute("nonce", t);
      }
    }
    this.modules = [];
    e[ro] = this;
  }
  mount(e, t) {
    let i = this.sheet;
    let s = 0;
    let r = 0;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      let a = this.modules.indexOf(l);
      if (a < r && a > -1) {
        this.modules.splice(a, 1);
        r--;
        a = -1;
      }
      if (a == -1) {
        this.modules.splice(r++, 0, l);
        if (i) {
          for (let h = 0; h < l.rules.length; h++) {
            i.insertRule(l.rules[h], s++);
          }
        }
      } else {
        while (r < a) {
          s += this.modules[r++].rules.length;
        }
        s += l.rules.length;
        r++;
      }
    }
    if (i) {
      if (t.adoptedStyleSheets.indexOf(this.sheet) < 0) {
        t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets];
      }
    } else {
      let o = "";
      for (let a = 0; a < this.modules.length; a++) {
        o += `${this.modules[a].getRules()}
`;
      }
      this.styleTag.textContent = o;
      let l = t.head || t;
      if (this.styleTag.parentNode != l) {
        l.insertBefore(this.styleTag, l.firstChild);
      }
    }
  }
  setNonce(e) {
    if (this.styleTag && this.styleTag.getAttribute("nonce") != e) {
      this.styleTag.setAttribute("nonce", e);
    }
  }
}
var Vt = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
};
var nn = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: "\""
};
var bm = typeof navigator !== "undefined" && /Mac/.test(navigator.platform);
var ym = typeof navigator !== "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var xe = 0; xe < 10; xe++) {
  Vt[48 + xe] = Vt[96 + xe] = String(xe);
}
for (var xe = 1; xe <= 24; xe++) {
  Vt[xe + 111] = "F" + xe;
}
for (var xe = 65; xe <= 90; xe++) {
  Vt[xe] = String.fromCharCode(xe + 32);
  nn[xe] = String.fromCharCode(xe);
}
for (var ar in Vt) {
  if (!nn.hasOwnProperty(ar)) {
    nn[ar] = Vt[ar];
  }
}
function xm(n) {
  var e = bm && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || ym && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified";
  var t = !e && n.key || (n.shiftKey ? nn : Vt)[n.keyCode] || n.key || "Unidentified";
  if (t == "Esc") {
    t = "Escape";
  }
  if (t == "Del") {
    t = "Delete";
  }
  if (t == "Left") {
    t = "ArrowLeft";
  }
  if (t == "Up") {
    t = "ArrowUp";
  }
  if (t == "Right") {
    t = "ArrowRight";
  }
  if (t == "Down") {
    t = "ArrowDown";
  }
  return t;
}
function j() {
  var n = arguments[0];
  if (typeof n == "string") {
    n = document.createElement(n);
  }
  var e = 1;
  var t = arguments[1];
  if (t && typeof t == "object" && t.nodeType == null && !Array.isArray(t)) {
    for (var i in t) {
      if (Object.prototype.hasOwnProperty.call(t, i)) {
        var s = t[i];
        if (typeof s == "string") {
          n.setAttribute(i, s);
        } else if (s != null) {
          n[i] = s;
        }
      }
    }
    e++;
  }
  for (; e < arguments.length; e++) {
    Lc(n, arguments[e]);
  }
  return n;
}
function Lc(n, e) {
  if (typeof e == "string") {
    n.appendChild(document.createTextNode(e));
  } else if (e != null) {
    if (e.nodeType != null) {
      n.appendChild(e);
    } else if (Array.isArray(e)) {
      for (var t = 0; t < e.length; t++) {
        Lc(n, e[t]);
      }
    } else {
      throw new RangeError("Unsupported child node: " + e);
    }
  }
}
let Te = typeof navigator !== "undefined" ? navigator : {
  userAgent: "",
  vendor: "",
  platform: ""
};
let oo = typeof document !== "undefined" ? document : {
  documentElement: {
    style: {}
  }
};
const lo = /Edge\/(\d+)/.exec(Te.userAgent);
const Nc = /MSIE \d/.test(Te.userAgent);
const ao = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Te.userAgent);
const Ys = !!Nc || !!ao || !!lo;
const aa = !Ys && /gecko\/(\d+)/i.test(Te.userAgent);
const hr = !Ys && /Chrome\/(\d+)/.exec(Te.userAgent);
const ha = "webkitFontSmoothing" in oo.documentElement.style;
const ho = !Ys && /Apple Computer/.test(Te.vendor);
const ca = ho && (/Mobile\/\w+/.test(Te.userAgent) || Te.maxTouchPoints > 2);
var $ = {
  mac: ca || /Mac/.test(Te.platform),
  windows: /Win/.test(Te.platform),
  linux: /Linux|X11/.test(Te.platform),
  ie: Ys,
  ie_version: Nc ? oo.documentMode || 6 : ao ? +ao[1] : lo ? +lo[1] : 0,
  gecko: aa,
  gecko_version: aa ? +(/Firefox\/(\d+)/.exec(Te.userAgent) || [0, 0])[1] : 0,
  chrome: !!hr,
  chrome_version: hr ? +hr[1] : 0,
  ios: ca,
  android: /Android\b/.test(Te.userAgent),
  webkit: ha,
  webkit_version: ha ? +(/\bAppleWebKit\/(\d+)/.exec(Te.userAgent) || [0, 0])[1] : 0,
  safari: ho,
  safari_version: ho ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(Te.userAgent) || [0, 0])[1] : 0,
  tabSize: oo.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
function Uo(n, e) {
  for (let t in n) {
    if (t == "class" && e.class) {
      e.class += " " + n.class;
    } else if (t == "style" && e.style) {
      e.style += ";" + n.style;
    } else {
      e[t] = n[t];
    }
  }
  return e;
}
const ds = Object.create(null);
function Ho(n, e, t) {
  if (n == e) {
    return true;
  }
  n ||= ds;
  e ||= ds;
  let i = Object.keys(n);
  let s = Object.keys(e);
  if (i.length - 0 != s.length - 0) {
    return false;
  }
  for (let r of i) {
    if (r != t && (s.indexOf(r) == -1 || n[r] !== e[r])) {
      return false;
    }
  }
  return true;
}
function Qm(n, e) {
  for (let t = n.attributes.length - 1; t >= 0; t--) {
    let i = n.attributes[t].name;
    if (e[i] == null) {
      n.removeAttribute(i);
    }
  }
  for (let t in e) {
    let i = e[t];
    if (t == "style") {
      n.style.cssText = i;
    } else if (n.getAttribute(t) != i) {
      n.setAttribute(t, i);
    }
  }
}
function fa(n, e, t) {
  let i = false;
  if (e) {
    for (let s in e) {
      if (!t || !(s in t)) {
        i = true;
        if (s == "style") {
          n.style.cssText = "";
        } else {
          n.removeAttribute(s);
        }
      }
    }
  }
  if (t) {
    for (let s in t) {
      if (!e || e[s] != t[s]) {
        i = true;
        if (s == "style") {
          n.style.cssText = t[s];
        } else {
          n.setAttribute(s, t[s]);
        }
      }
    }
  }
  return i;
}
function Sm(n) {
  let e = Object.create(null);
  for (let t = 0; t < n.attributes.length; t++) {
    let i = n.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
class _e {
  eq(e) {
    return false;
  }
  updateDOM(e, t, i) {
    return false;
  }
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  get estimatedHeight() {
    return -1;
  }
  get lineBreaks() {
    return 0;
  }
  ignoreEvent(e) {
    return true;
  }
  coordsAt(e, t, i) {
    return null;
  }
  get isHidden() {
    return false;
  }
  get editable() {
    return false;
  }
  destroy(e) {}
}
var Se = function (n) {
  n[n.Text = 0] = "Text";
  n[n.WidgetBefore = 1] = "WidgetBefore";
  n[n.WidgetAfter = 2] = "WidgetAfter";
  n[n.WidgetRange = 3] = "WidgetRange";
  return n;
}(Se ||= {});
class X extends Mt {
  constructor(e, t, i, s) {
    super();
    this.startSide = e;
    this.endSide = t;
    this.widget = i;
    this.spec = s;
  }
  get heightRelevant() {
    return false;
  }
  static mark(e) {
    return new gn(e);
  }
  static widget(e) {
    let t = Math.max(-10000, Math.min(10000, e.side || 0));
    let i = !!e.block;
    t += i && !e.inlineOrder ? t > 0 ? 300000000 : -400000000 : t > 0 ? 100000000 : -100000000;
    return new ri(e, t, t, i, e.widget || null, false);
  }
  static replace(e) {
    let t = !!e.block;
    let i;
    let s;
    if (e.isBlockGap) {
      i = -500000000;
      s = 400000000;
    } else {
      let {
        start: r,
        end: o
      } = Bc(e, t);
      i = (r ? t ? -300000000 : -1 : 500000000) - 1;
      s = (o ? t ? 200000000 : 1 : -600000000) + 1;
    }
    return new ri(e, i, s, t, e.widget || null, true);
  }
  static line(e) {
    return new bn(e);
  }
  static set(e, t = false) {
    return L.of(e, t);
  }
  hasHeight() {
    if (this.widget) {
      return this.widget.estimatedHeight > -1;
    } else {
      return false;
    }
  }
}
X.none = L.empty;
class gn extends X {
  constructor(e) {
    let {
      start: t,
      end: i
    } = Bc(e);
    super(t ? -1 : 500000000, i ? 1 : -600000000, null, e);
    this.tagName = e.tagName || "span";
    this.attrs = e.class && e.attributes ? Uo(e.attributes, {
      class: e.class
    }) : e.class ? {
      class: e.class
    } : e.attributes || ds;
  }
  eq(e) {
    return this == e || e instanceof gn && this.tagName == e.tagName && Ho(this.attrs, e.attrs);
  }
  range(e, t = e) {
    if (e >= t) {
      throw new RangeError("Mark decorations may not be empty");
    }
    return super.range(e, t);
  }
}
gn.prototype.point = false;
class bn extends X {
  constructor(e) {
    super(-200000000, -200000000, null, e);
  }
  eq(e) {
    return e instanceof bn && this.spec.class == e.spec.class && Ho(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e) {
      throw new RangeError("Line decoration ranges must be zero-length");
    }
    return super.range(e, t);
  }
}
bn.prototype.mapMode = Qe.TrackBefore;
bn.prototype.point = true;
class ri extends X {
  constructor(e, t, i, s, r, o) {
    super(t, i, r, e);
    this.block = s;
    this.isReplace = o;
    this.mapMode = s ? t <= 0 ? Qe.TrackBefore : Qe.TrackAfter : Qe.TrackDel;
  }
  get type() {
    if (this.startSide != this.endSide) {
      return Se.WidgetRange;
    } else if (this.startSide <= 0) {
      return Se.WidgetBefore;
    } else {
      return Se.WidgetAfter;
    }
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof ri && km(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0)) {
      throw new RangeError("Invalid range for replacement decoration");
    }
    if (!this.isReplace && t != e) {
      throw new RangeError("Widget decorations can only have zero-length ranges");
    }
    return super.range(e, t);
  }
}
ri.prototype.point = true;
function Bc(n, e = false) {
  let {
    inclusiveStart: t,
    inclusiveEnd: i
  } = n;
  if (t == null) {
    t = n.inclusive;
  }
  if (i == null) {
    i = n.inclusive;
  }
  return {
    start: t ?? e,
    end: i ?? e
  };
}
function km(n, e) {
  return n == e || !!n && !!e && !!n.compare(e);
}
function gi(n, e, t, i = 0) {
  let s = t.length - 1;
  if (s >= 0 && t[s] + i >= n) {
    t[s] = Math.max(t[s], e);
  } else {
    t.push(n, e);
  }
}
class sn extends Mt {
  constructor(e, t, i) {
    super();
    this.tagName = e;
    this.attributes = t;
    this.rank = i;
  }
  eq(e) {
    return e == this || e instanceof sn && this.tagName == e.tagName && Ho(this.attributes, e.attributes);
  }
  static create(e) {
    return new sn(e.tagName, e.attributes || ds, e.rank == null ? 50 : Math.max(0, Math.min(e.rank, 100)));
  }
  static set(e, t = false) {
    return L.of(e, t);
  }
}
sn.prototype.startSide = sn.prototype.endSide = -1;
function rn(n) {
  let e;
  if (n.nodeType == 11) {
    e = n.getSelection ? n : n.ownerDocument;
  } else {
    e = n;
  }
  return e.getSelection();
}
function co(n, e) {
  if (e) {
    return n == e || n.contains(e.nodeType != 1 ? e.parentNode : e);
  } else {
    return false;
  }
}
function _i(n, e) {
  if (!e.anchorNode) {
    return false;
  }
  try {
    return co(n, e.anchorNode);
  } catch {
    return false;
  }
}
function Fi(n) {
  if (n.nodeType == 3) {
    return ln(n, 0, n.nodeValue.length).getClientRects();
  } else if (n.nodeType == 1) {
    return n.getClientRects();
  } else {
    return [];
  }
}
function Ui(n, e, t, i) {
  if (t) {
    return ua(n, e, t, i, -1) || ua(n, e, t, i, 1);
  } else {
    return false;
  }
}
function Wt(n) {
  for (var e = 0;; e++) {
    n = n.previousSibling;
    if (!n) {
      return e;
    }
  }
}
function ms(n) {
  return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName);
}
function ua(n, e, t, i, s) {
  while (true) {
    if (n == t && e == i) {
      return true;
    }
    if (e == (s < 0 ? 0 : St(n))) {
      if (n.nodeName == "DIV") {
        return false;
      }
      let r = n.parentNode;
      if (!r || r.nodeType != 1) {
        return false;
      }
      e = Wt(n) + (s < 0 ? 0 : 1);
      n = r;
    } else if (n.nodeType == 1) {
      n = n.childNodes[e + (s < 0 ? -1 : 0)];
      if (n.nodeType == 1 && n.contentEditable == "false") {
        return false;
      }
      e = s < 0 ? St(n) : 0;
    } else {
      return false;
    }
  }
}
function St(n) {
  if (n.nodeType == 3) {
    return n.nodeValue.length;
  } else {
    return n.childNodes.length;
  }
}
function on(n, e) {
  let t = e ? n.left : n.right;
  return {
    left: t,
    right: t,
    top: n.top,
    bottom: n.bottom
  };
}
function wm(n) {
  let e = n.visualViewport;
  if (e) {
    return {
      left: 0,
      right: e.width,
      top: 0,
      bottom: e.height
    };
  } else {
    return {
      left: 0,
      right: n.innerWidth,
      top: 0,
      bottom: n.innerHeight
    };
  }
}
function Yc(n, e) {
  let t = e.width / n.offsetWidth;
  let i = e.height / n.offsetHeight;
  if (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - n.offsetWidth) < 1) {
    t = 1;
  }
  if (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(e.height - n.offsetHeight) < 1) {
    i = 1;
  }
  return {
    scaleX: t,
    scaleY: i
  };
}
function vm(n, e, t, i, s, r, o, l) {
  let a = n.ownerDocument;
  let h = a.defaultView || window;
  for (let c = n, f = false; c && !f;) {
    if (c.nodeType == 1) {
      let u;
      let d = c == a.body;
      let m = 1;
      let p = 1;
      if (d) {
        u = wm(h);
      } else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(c).position)) {
          f = true;
        }
        if (c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
          c = c.assignedSlot || c.parentNode;
          continue;
        }
        let x = c.getBoundingClientRect();
        ({
          scaleX: m,
          scaleY: p
        } = Yc(c, x));
        u = {
          left: x.left,
          right: x.left + c.clientWidth * m,
          top: x.top,
          bottom: x.top + c.clientHeight * p
        };
      }
      let O = 0;
      let b = 0;
      if (s == "nearest") {
        if (e.top < u.top + o) {
          b = e.top - (u.top + o);
          if (t > 0 && e.bottom > u.bottom + b) {
            b = e.bottom - u.bottom + o;
          }
        } else if (e.bottom > u.bottom - o) {
          b = e.bottom - u.bottom + o;
          if (t < 0 && e.top - b < u.top) {
            b = e.top - (u.top + o);
          }
        }
      } else {
        let x = e.bottom - e.top;
        let Q = u.bottom - u.top;
        b = (s == "center" && x <= Q ? e.top + x / 2 - Q / 2 : s == "start" || s == "center" && t < 0 ? e.top - o : e.bottom - Q + o) - u.top;
      }
      if (i == "nearest") {
        if (e.left < u.left + r) {
          O = e.left - (u.left + r);
          if (t > 0 && e.right > u.right + O) {
            O = e.right - u.right + r;
          }
        } else if (e.right > u.right - r) {
          O = e.right - u.right + r;
          if (t < 0 && e.left < u.left + O) {
            O = e.left - (u.left + r);
          }
        }
      } else {
        O = (i == "center" ? e.left + (e.right - e.left) / 2 - (u.right - u.left) / 2 : i == "start" == l ? e.left - r : e.right - (u.right - u.left) + r) - u.left;
      }
      if (O || b) {
        if (d) {
          h.scrollBy(O, b);
        } else {
          let x = 0;
          let Q = 0;
          if (b) {
            let C = c.scrollTop;
            c.scrollTop += b / p;
            Q = (c.scrollTop - C) * p;
          }
          if (O) {
            let C = c.scrollLeft;
            c.scrollLeft += O / m;
            x = (c.scrollLeft - C) * m;
          }
          e = {
            left: e.left - x,
            top: e.top - Q,
            right: e.right - x,
            bottom: e.bottom - Q
          };
          if (x && Math.abs(x - O) < 1) {
            i = "nearest";
          }
          if (Q && Math.abs(Q - b) < 1) {
            s = "nearest";
          }
        }
      }
      if (d) {
        break;
      }
      if (e.top < u.top || e.bottom > u.bottom || e.left < u.left || e.right > u.right) {
        e = {
          left: Math.max(e.left, u.left),
          right: Math.min(e.right, u.right),
          top: Math.max(e.top, u.top),
          bottom: Math.min(e.bottom, u.bottom)
        };
      }
      c = c.assignedSlot || c.parentNode;
    } else if (c.nodeType == 11) {
      c = c.host;
    } else {
      break;
    }
  }
}
function Gc(n, e = true) {
  let t = n.ownerDocument;
  let i = null;
  let s = null;
  for (let r = n.parentNode; r && r != t.body && (!!e && !i || !s);) {
    if (r.nodeType == 1) {
      if (!s && r.scrollHeight > r.clientHeight) {
        s = r;
      }
      if (e && !i && r.scrollWidth > r.clientWidth) {
        i = r;
      }
      r = r.assignedSlot || r.parentNode;
    } else if (r.nodeType == 11) {
      r = r.host;
    } else {
      break;
    }
  }
  return {
    x: i,
    y: s
  };
}
class Cm {
  constructor() {
    this.anchorNode = null;
    this.anchorOffset = 0;
    this.focusNode = null;
    this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let {
      anchorNode: t,
      focusNode: i
    } = e;
    this.set(t, Math.min(e.anchorOffset, t ? St(t) : 0), i, Math.min(e.focusOffset, i ? St(i) : 0));
  }
  set(e, t, i, s) {
    this.anchorNode = e;
    this.anchorOffset = t;
    this.focusNode = i;
    this.focusOffset = s;
  }
}
let Ht = null;
if ($.safari && $.safari_version >= 26) {
  Ht = false;
}
function Ic(n) {
  if (n.setActive) {
    return n.setActive();
  }
  if (Ht) {
    return n.focus(Ht);
  }
  let e = [];
  for (let t = n; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode);
  n.focus(Ht == null ? {
    get preventScroll() {
      Ht = {
        preventScroll: true
      };
      return true;
    }
  } : undefined);
  if (!Ht) {
    Ht = false;
    for (let t = 0; t < e.length;) {
      let i = e[t++];
      let s = e[t++];
      let r = e[t++];
      if (i.scrollTop != s) {
        i.scrollTop = s;
      }
      if (i.scrollLeft != r) {
        i.scrollLeft = r;
      }
    }
  }
}
let da;
function ln(n, e, t = e) {
  let i = da ||= document.createRange();
  i.setEnd(n, t);
  i.setStart(n, e);
  return i;
}
function bi(n, e, t, i) {
  let s = {
    key: e,
    code: e,
    keyCode: t,
    which: t,
    cancelable: true
  };
  if (i) {
    ({
      altKey: s.altKey,
      ctrlKey: s.ctrlKey,
      shiftKey: s.shiftKey,
      metaKey: s.metaKey
    } = i);
  }
  let r = new KeyboardEvent("keydown", s);
  r.synthetic = true;
  n.dispatchEvent(r);
  let o = new KeyboardEvent("keyup", s);
  o.synthetic = true;
  n.dispatchEvent(o);
  return r.defaultPrevented || o.defaultPrevented;
}
function qm(n) {
  while (n) {
    if (n && (n.nodeType == 9 || n.nodeType == 11 && n.host)) {
      return n;
    }
    n = n.assignedSlot || n.parentNode;
  }
  return null;
}
function Tm(n, e) {
  let t = e.focusNode;
  let i = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != i) {
    return false;
  }
  for (i = Math.min(i, St(t));;) {
    if (i) {
      if (t.nodeType != 1) {
        return false;
      }
      let s = t.childNodes[i - 1];
      if (s.contentEditable == "false") {
        i--;
      } else {
        t = s;
        i = St(t);
      }
    } else {
      if (t == n) {
        return true;
      }
      i = Wt(t);
      t = t.parentNode;
    }
  }
}
function Zc(n) {
  if (n instanceof Window) {
    return n.pageYOffset > Math.max(0, n.document.documentElement.scrollHeight - n.innerHeight - 4);
  } else {
    return n.scrollTop > Math.max(1, n.scrollHeight - n.clientHeight - 4);
  }
}
function zc(n, e) {
  for (let t = n, i = e;;) {
    if (t.nodeType == 3 && i > 0) {
      return {
        node: t,
        offset: i
      };
    }
    if (t.nodeType == 1 && i > 0) {
      if (t.contentEditable == "false") {
        return null;
      }
      t = t.childNodes[i - 1];
      i = St(t);
    } else if (t.parentNode && !ms(t)) {
      i = Wt(t);
      t = t.parentNode;
    } else {
      return null;
    }
  }
}
function jc(n, e) {
  for (let t = n, i = e;;) {
    if (t.nodeType == 3 && i < t.nodeValue.length) {
      return {
        node: t,
        offset: i
      };
    }
    if (t.nodeType == 1 && i < t.childNodes.length) {
      if (t.contentEditable == "false") {
        return null;
      }
      t = t.childNodes[i];
      i = 0;
    } else if (t.parentNode && !ms(t)) {
      i = Wt(t) + 1;
      t = t.parentNode;
    } else {
      return null;
    }
  }
}
class He {
  constructor(e, t, i = true) {
    this.node = e;
    this.offset = t;
    this.precise = i;
  }
  static before(e, t) {
    return new He(e.parentNode, Wt(e), t);
  }
  static after(e, t) {
    return new He(e.parentNode, Wt(e) + 1, t);
  }
}
var F = function (n) {
  n[n.LTR = 0] = "LTR";
  n[n.RTL = 1] = "RTL";
  return n;
}(F ||= {});
const oi = F.LTR;
const Ko = F.RTL;
function _c(n) {
  let e = [];
  for (let t = 0; t < n.length; t++) {
    e.push(1 << +n[t]);
  }
  return e;
}
const $m = _c("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008");
const Xm = _c("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333");
const fo = Object.create(null);
const nt = [];
for (let n of ["()", "[]", "{}"]) {
  let e = n.charCodeAt(0);
  let t = n.charCodeAt(1);
  fo[e] = t;
  fo[t] = -e;
}
function Fc(n) {
  if (n <= 247) {
    return $m[n];
  } else if (n >= 1424 && n <= 1524) {
    return 2;
  } else if (n >= 1536 && n <= 1785) {
    return Xm[n - 1536];
  } else if (n >= 1774 && n <= 2220) {
    return 4;
  } else if (n >= 8192 && n <= 8204) {
    return 256;
  } else if (n >= 64336 && n <= 65023) {
    return 4;
  } else {
    return 1;
  }
}
const Em = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class ct {
  get dir() {
    if (this.level % 2) {
      return Ko;
    } else {
      return oi;
    }
  }
  constructor(e, t, i) {
    this.from = e;
    this.to = t;
    this.level = i;
  }
  side(e, t) {
    if (this.dir == t == e) {
      return this.to;
    } else {
      return this.from;
    }
  }
  forward(e, t) {
    return e == (this.dir == t);
  }
  static find(e, t, i, s) {
    let r = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= t && l.to >= t) {
        if (l.level == i) {
          return o;
        }
        if (r < 0 || (s != 0 ? s < 0 ? l.from < t : l.to > t : e[r].level > l.level)) {
          r = o;
        }
      }
    }
    if (r < 0) {
      throw new RangeError("Index out of range");
    }
    return r;
  }
}
function Uc(n, e) {
  if (n.length != e.length) {
    return false;
  }
  for (let t = 0; t < n.length; t++) {
    let i = n[t];
    let s = e[t];
    if (i.from != s.from || i.to != s.to || i.direction != s.direction || !Uc(i.inner, s.inner)) {
      return false;
    }
  }
  return true;
}
const _ = [];
function Am(n, e, t, i, s) {
  for (let r = 0; r <= i.length; r++) {
    let o = r ? i[r - 1].to : e;
    let l = r < i.length ? i[r].from : t;
    let a = r ? 256 : s;
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = Fc(n.charCodeAt(h));
      if (u == 512) {
        u = c;
      } else if (u == 8 && f == 4) {
        u = 16;
      }
      _[h] = u == 4 ? 2 : u;
      if (u & 7) {
        f = u;
      }
      c = u;
    }
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = _[h];
      if (u == 128) {
        if (h < l - 1 && c == _[h + 1] && c & 24) {
          u = _[h] = c;
        } else {
          _[h] = 256;
        }
      } else if (u == 64) {
        let d = h + 1;
        while (d < l && _[d] == 64) {
          d++;
        }
        let m = h && c == 8 || d < t && _[d] == 8 ? f == 1 ? 1 : 8 : 256;
        for (let p = h; p < d; p++) {
          _[p] = m;
        }
        h = d - 1;
      } else if (u == 8 && f == 1) {
        _[h] = 1;
      }
      c = u;
      if (u & 7) {
        f = u;
      }
    }
  }
}
function Pm(n, e, t, i, s) {
  let r = s == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
    let h = o ? i[o - 1].to : e;
    let c = o < i.length ? i[o].from : t;
    for (let f = h, u, d, m; f < c; f++) {
      if (d = fo[u = n.charCodeAt(f)]) {
        if (d < 0) {
          for (let p = l - 3; p >= 0; p -= 3) {
            if (nt[p + 1] == -d) {
              let O = nt[p + 2];
              let b = O & 2 ? s : O & 4 ? O & 1 ? r : s : 0;
              if (b) {
                _[f] = _[nt[p]] = b;
              }
              l = p;
              break;
            }
          }
        } else {
          if (nt.length == 189) {
            break;
          }
          nt[l++] = f;
          nt[l++] = u;
          nt[l++] = a;
        }
      } else if ((m = _[f]) == 2 || m == 1) {
        let p = m == s;
        a = p ? 0 : 1;
        for (let O = l - 3; O >= 0; O -= 3) {
          let b = nt[O + 2];
          if (b & 2) {
            break;
          }
          if (p) {
            nt[O + 2] |= 2;
          } else {
            if (b & 4) {
              break;
            }
            nt[O + 2] |= 4;
          }
        }
      }
    }
  }
}
function Mm(n, e, t, i) {
  for (let s = 0, r = i; s <= t.length; s++) {
    let o = s ? t[s - 1].to : n;
    let l = s < t.length ? t[s].from : e;
    for (let a = o; a < l;) {
      let h = _[a];
      if (h == 256) {
        let c = a + 1;
        while (true) {
          if (c == l) {
            if (s == t.length) {
              break;
            }
            c = t[s++].to;
            l = s < t.length ? t[s].from : e;
          } else if (_[c] == 256) {
            c++;
          } else {
            break;
          }
        }
        let f = r == 1;
        let u = (c < e ? _[c] : i) == 1;
        let d = f == u ? f ? 1 : 2 : i;
        for (let m = c, p = s, O = p ? t[p - 1].to : n; m > a;) {
          if (m == O) {
            m = t[--p].from;
            O = p ? t[p - 1].to : n;
          }
          _[--m] = d;
        }
        a = c;
      } else {
        r = h;
        a++;
      }
    }
  }
}
function uo(n, e, t, i, s, r, o) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == s % 2) {
    for (let a = e, h = 0; a < t;) {
      let c = true;
      let f = false;
      if (h == r.length || a < r[h].from) {
        let p = _[a];
        if (p != l) {
          c = false;
          f = p == 16;
        }
      }
      let u = !c && l == 1 ? [] : null;
      let d = c ? i : i + 1;
      let m = a;
      e: while (true) {
        if (h < r.length && m == r[h].from) {
          if (f) {
            break e;
          }
          let p = r[h];
          if (!c) {
            for (let O = p.to, b = h + 1;;) {
              if (O == t) {
                break e;
              }
              if (b < r.length && r[b].from == O) {
                O = r[b++].to;
              } else {
                if (_[O] == l) {
                  break e;
                }
                break;
              }
            }
          }
          h++;
          if (u) {
            u.push(p);
          } else {
            if (p.from > a) {
              o.push(new ct(a, p.from, d));
            }
            let O = p.direction == oi != !(d % 2);
            mo(n, O ? i + 1 : i, s, p.inner, p.from, p.to, o);
            a = p.to;
          }
          m = p.to;
        } else {
          if (m == t || (c ? _[m] != l : _[m] == l)) {
            break;
          }
          m++;
        }
      }
      if (u) {
        uo(n, a, m, i + 1, s, u, o);
      } else if (a < m) {
        o.push(new ct(a, m, d));
      }
      a = m;
    }
  } else {
    for (let a = t, h = r.length; a > e;) {
      let c = true;
      let f = false;
      if (!h || a > r[h - 1].to) {
        let p = _[a - 1];
        if (p != l) {
          c = false;
          f = p == 16;
        }
      }
      let u = !c && l == 1 ? [] : null;
      let d = c ? i : i + 1;
      let m = a;
      e: while (true) {
        if (h && m == r[h - 1].to) {
          if (f) {
            break e;
          }
          let p = r[--h];
          if (!c) {
            for (let O = p.from, b = h;;) {
              if (O == e) {
                break e;
              }
              if (b && r[b - 1].to == O) {
                O = r[--b].from;
              } else {
                if (_[O - 1] == l) {
                  break e;
                }
                break;
              }
            }
          }
          if (u) {
            u.push(p);
          } else {
            if (p.to < a) {
              o.push(new ct(p.to, a, d));
            }
            let O = p.direction == oi != !(d % 2);
            mo(n, O ? i + 1 : i, s, p.inner, p.from, p.to, o);
            a = p.from;
          }
          m = p.from;
        } else {
          if (m == e || (c ? _[m - 1] != l : _[m - 1] == l)) {
            break;
          }
          m--;
        }
      }
      if (u) {
        uo(n, m, a, i + 1, s, u, o);
      } else if (m < a) {
        o.push(new ct(m, a, d));
      }
      a = m;
    }
  }
}
function mo(n, e, t, i, s, r, o) {
  let l = e % 2 ? 2 : 1;
  Am(n, s, r, i, l);
  Pm(n, s, r, i, l);
  Mm(s, r, i, l);
  uo(n, s, r, e, t, i, o);
}
function Rm(n, e, t) {
  if (!n) {
    return [new ct(0, 0, e == Ko ? 1 : 0)];
  }
  if (e == oi && !t.length && !Em.test(n)) {
    return Hc(n.length);
  }
  if (t.length) {
    while (n.length > _.length) {
      _[_.length] = 256;
    }
  }
  let i = [];
  let s = e == oi ? 0 : 1;
  mo(n, s, s, t, 0, n.length, i);
  return i;
}
function Hc(n) {
  return [new ct(0, n, 0)];
}
let Kc = "";
function Vm(n, e, t, i, s) {
  let o = i.head - n.from;
  let l = ct.find(e, o, i.bidiLevel ?? -1, i.assoc);
  let a = e[l];
  let h = a.side(s, t);
  if (o == h) {
    let u = l += s ? 1 : -1;
    if (u < 0 || u >= e.length) {
      return null;
    }
    a = e[l = u];
    o = a.side(!s, t);
    h = a.side(s, t);
  }
  let c = be(n.text, o, a.forward(s, t));
  if (c < a.from || c > a.to) {
    c = h;
  }
  Kc = n.text.slice(Math.min(o, c), Math.max(o, c));
  let f = l == (s ? e.length - 1 : 0) ? null : e[l + (s ? 1 : -1)];
  if (f && c == h && f.level + (s ? 0 : 1) < a.level) {
    return y.cursor(f.side(!s, t) + n.from, f.forward(s, t) ? 1 : -1, f.level);
  } else {
    return y.cursor(c + n.from, a.forward(s, t) ? -1 : 1, a.level);
  }
}
function Wm(n, e, t) {
  for (let i = e; i < t; i++) {
    let s = Fc(n.charCodeAt(i));
    if (s == 1) {
      return oi;
    }
    if (s == 2 || s == 4) {
      return Ko;
    }
  }
  return oi;
}
const Jc = T.define();
const ef = T.define();
const tf = T.define();
const nf = T.define();
const po = T.define();
const sf = T.define();
const rf = T.define();
const Jo = T.define();
const el = T.define();
const of = T.define({
  combine: n => n.some(e => e)
});
const lf = T.define({
  combine: n => n.some(e => e)
});
const af = T.define();
class yi {
  constructor(e, t, i, s, r, o = false) {
    this.range = e;
    this.y = t;
    this.x = i;
    this.yMargin = s;
    this.xMargin = r;
    this.isSnapshot = o;
  }
  map(e) {
    if (e.empty) {
      return this;
    } else {
      return new yi(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
    }
  }
  clip(e) {
    if (this.range.to <= e.doc.length) {
      return this;
    } else {
      return new yi(y.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
    }
  }
}
const $n = M.define({
  map: (n, e) => n.map(e)
});
const hf = M.define();
function $e(n, e, t) {
  let i = n.facet(nf);
  if (i.length) {
    i[0](e);
  } else if (!window.onerror || !window.onerror(String(e), t, undefined, undefined, e)) {
    if (t) {
      console.error(t + ":", e);
    } else {
      console.error(e);
    }
  }
}
const yt = T.define({
  combine: n => n.length ? n[0] : true
});
let Dm = 0;
const ui = T.define({
  combine(n) {
    return n.filter((e, t) => {
      for (let i = 0; i < t; i++) {
        if (n[i].plugin == e.plugin) {
          return false;
        }
      }
      return true;
    });
  }
});
class K {
  constructor(e, t, i, s, r) {
    this.id = e;
    this.create = t;
    this.domEventHandlers = i;
    this.domEventObservers = s;
    this.baseExtensions = r(this);
    this.extension = this.baseExtensions.concat(ui.of({
      plugin: this,
      arg: undefined
    }));
  }
  of(e) {
    return this.baseExtensions.concat(ui.of({
      plugin: this,
      arg: e
    }));
  }
  static define(e, t) {
    const {
      eventHandlers: i,
      eventObservers: s,
      provide: r,
      decorations: o
    } = t || {};
    return new K(Dm++, e, i, s, l => {
      let a = [];
      if (o) {
        a.push(Gs.of(h => {
          let c = h.plugin(l);
          if (c) {
            return o(c);
          } else {
            return X.none;
          }
        }));
      }
      if (r) {
        a.push(r(l));
      }
      return a;
    });
  }
  static fromClass(e, t) {
    return K.define((i, s) => new e(i, s), t);
  }
}
class cr {
  constructor(e) {
    this.spec = e;
    this.mustUpdate = null;
    this.value = null;
  }
  get plugin() {
    return this.spec && this.spec.plugin;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        this.mustUpdate = null;
        if (this.value.update) {
          try {
            this.value.update(t);
          } catch (i) {
            $e(t.state, i, "CodeMirror plugin crashed");
            if (this.value.destroy) {
              try {
                this.value.destroy();
              } catch {}
            }
            this.deactivate();
          }
        }
      }
    } else if (this.spec) {
      try {
        this.value = this.spec.plugin.create(e, this.spec.arg);
      } catch (t) {
        $e(e.state, t, "CodeMirror plugin crashed");
        this.deactivate();
      }
    }
    return this;
  }
  destroy(e) {
    var t;
    if ((t = this.value) !== null && t !== undefined && t.destroy) {
      try {
        this.value.destroy();
      } catch (i) {
        $e(e.state, i, "CodeMirror plugin crashed");
      }
    }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const cf = T.define();
const tl = T.define();
const Gs = T.define();
const ff = T.define();
const il = T.define();
const yn = T.define();
const uf = T.define();
function ma(n, e) {
  let t = n.state.facet(uf);
  if (!t.length) {
    return t;
  }
  let i = t.map(r => r instanceof Function ? r(n) : r);
  let s = [];
  L.spans(i, e.from, e.to, {
    point() {},
    span(r, o, l, a) {
      let h = r - e.from;
      let c = o - e.from;
      let f = s;
      for (let u = l.length - 1; u >= 0; u--, a--) {
        let d = l[u].spec.bidiIsolate;
        let m;
        if (d == null) {
          d = Wm(e.text, h, c);
        }
        if (a > 0 && f.length && (m = f[f.length - 1]).to == h && m.direction == d) {
          m.to = c;
          f = m.inner;
        } else {
          let p = {
            from: h,
            to: c,
            direction: d,
            inner: []
          };
          f.push(p);
          f = p.inner;
        }
      }
    }
  });
  return s;
}
const df = T.define();
function nl(n) {
  let e = 0;
  let t = 0;
  let i = 0;
  let s = 0;
  for (let r of n.state.facet(df)) {
    let o = r(n);
    if (o) {
      if (o.left != null) {
        e = Math.max(e, o.left);
      }
      if (o.right != null) {
        t = Math.max(t, o.right);
      }
      if (o.top != null) {
        i = Math.max(i, o.top);
      }
      if (o.bottom != null) {
        s = Math.max(s, o.bottom);
      }
    }
  }
  return {
    left: e,
    right: t,
    top: i,
    bottom: s
  };
}
const Gi = T.define();
class Ge {
  constructor(e, t, i, s) {
    this.fromA = e;
    this.toA = t;
    this.fromB = i;
    this.toB = s;
  }
  join(e) {
    return new Ge(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length;
    let i = this;
    for (; t > 0; t--) {
      let s = e[t - 1];
      if (!(s.fromA > i.toA)) {
        if (s.toA < i.fromA) {
          break;
        }
        i = i.join(s);
        e.splice(t - 1, 1);
      }
    }
    e.splice(t, 0, i);
    return e;
  }
  static extendWithRanges(e, t) {
    if (t.length == 0) {
      return e;
    }
    let i = [];
    for (let s = 0, r = 0, o = 0;;) {
      let l = s < e.length ? e[s].fromB : 1000000000;
      let a = r < t.length ? t[r] : 1000000000;
      let h = Math.min(l, a);
      if (h == 1000000000) {
        break;
      }
      let c = h + o;
      let f = h;
      let u = c;
      while (true) {
        if (r < t.length && t[r] <= f) {
          let d = t[r + 1];
          r += 2;
          f = Math.max(f, d);
          for (let m = s; m < e.length && e[m].fromB <= f; m++) {
            o = e[m].toA - e[m].toB;
          }
          u = Math.max(u, d + o);
        } else if (s < e.length && e[s].fromB <= f) {
          let d = e[s++];
          f = Math.max(f, d.toB);
          u = Math.max(u, d.toA);
          o = d.toA - d.toB;
        } else {
          break;
        }
      }
      i.push(new Ge(c, u, h, f));
    }
    return i;
  }
}
class ps {
  constructor(e, t, i) {
    this.view = e;
    this.state = t;
    this.transactions = i;
    this.flags = 0;
    this.startState = e.state;
    this.changes = de.empty(this.startState.doc.length);
    for (let r of i) {
      this.changes = this.changes.compose(r.changes);
    }
    let s = [];
    this.changes.iterChangedRanges((r, o, l, a) => s.push(new Ge(r, o, l, a)));
    this.changedRanges = s;
  }
  static create(e, t, i) {
    return new ps(e, t, i);
  }
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get selectionSet() {
    return this.transactions.some(e => e.selection);
  }
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
const Lm = [];
class ie {
  constructor(e, t, i = 0) {
    this.dom = e;
    this.length = t;
    this.flags = i;
    this.parent = null;
    e.cmTile = this;
  }
  get breakAfter() {
    return this.flags & 1;
  }
  get children() {
    return Lm;
  }
  isWidget() {
    return false;
  }
  get isHidden() {
    return false;
  }
  isComposite() {
    return false;
  }
  isLine() {
    return false;
  }
  isText() {
    return false;
  }
  isBlock() {
    return false;
  }
  get domAttrs() {
    return null;
  }
  sync(e) {
    this.flags |= 2;
    if (this.flags & 4) {
      this.flags &= -5;
      let t = this.domAttrs;
      if (t) {
        Qm(this.dom, t);
      }
    }
  }
  toString() {
    return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "");
  }
  destroy() {
    this.parent = null;
  }
  setDOM(e) {
    this.dom = e;
    e.cmTile = this;
  }
  get posAtStart() {
    if (this.parent) {
      return this.parent.posBefore(this);
    } else {
      return 0;
    }
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e, t = this.posAtStart) {
    let i = t;
    for (let s of this.children) {
      if (s == e) {
        return i;
      }
      i += s.length + s.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  covers(e) {
    return true;
  }
  coordsIn(e, t) {
    return null;
  }
  domPosFor(e, t) {
    let i = Wt(this.dom);
    let s = this.length ? e > 0 : t > 0;
    return new He(this.parent.dom, i + (s ? 1 : 0), e == 0 || e == this.length);
  }
  markDirty(e) {
    this.flags &= -3;
    if (e) {
      this.flags |= 4;
    }
    if (this.parent && this.parent.flags & 2) {
      this.parent.markDirty(false);
    }
  }
  get overrideDOMText() {
    return null;
  }
  get root() {
    for (let e = this; e; e = e.parent) {
      if (e instanceof Zs) {
        return e;
      }
    }
    return null;
  }
  static get(e) {
    return e.cmTile;
  }
}
class Is extends ie {
  constructor(e) {
    super(e, 0);
    this._children = [];
  }
  isComposite() {
    return true;
  }
  get children() {
    return this._children;
  }
  get lastChild() {
    if (this.children.length) {
      return this.children[this.children.length - 1];
    } else {
      return null;
    }
  }
  append(e) {
    this.children.push(e);
    e.parent = this;
  }
  sync(e) {
    if (this.flags & 2) {
      return;
    }
    super.sync(e);
    let t = this.dom;
    let i = null;
    let s;
    let r = (e == null ? undefined : e.node) == t ? e : null;
    let o = 0;
    for (let l of this.children) {
      l.sync(e);
      o += l.length + l.breakAfter;
      s = i ? i.nextSibling : t.firstChild;
      if (r && s != l.dom) {
        r.written = true;
      }
      if (l.dom.parentNode == t) {
        while (s && s != l.dom) {
          s = pa(s);
        }
      } else {
        t.insertBefore(l.dom, s);
      }
      i = l.dom;
    }
    s = i ? i.nextSibling : t.firstChild;
    if (r && s) {
      r.written = true;
    }
    while (s) {
      s = pa(s);
    }
    this.length = o;
  }
}
function pa(n) {
  let e = n.nextSibling;
  n.parentNode.removeChild(n);
  return e;
}
class Zs extends Is {
  constructor(e, t) {
    super(t);
    this.view = e;
  }
  owns(e) {
    for (; e; e = e.parent) {
      if (e == this) {
        return true;
      }
    }
    return false;
  }
  isBlock() {
    return true;
  }
  nearest(e) {
    while (true) {
      if (!e) {
        return null;
      }
      let t = ie.get(e);
      if (t && this.owns(t)) {
        return t;
      }
      e = e.parentNode;
    }
  }
  blockTiles(e) {
    for (let t = [], i = this, s = 0, r = 0;;) {
      if (s == i.children.length) {
        if (!t.length) {
          return;
        }
        i = i.parent;
        if (i.breakAfter) {
          r++;
        }
        s = t.pop();
      } else {
        let o = i.children[s++];
        if (o instanceof xt) {
          t.push(s);
          i = o;
          s = 0;
        } else {
          let l = r + o.length;
          let a = e(o, r);
          if (a !== undefined) {
            return a;
          }
          r = l + o.breakAfter;
        }
      }
    }
  }
  resolveBlock(e, t) {
    let i;
    let s = -1;
    let r;
    let o = -1;
    this.blockTiles((l, a) => {
      let h = a + l.length;
      if (e >= a && e <= h) {
        if (l.isWidget() && t >= -1 && t <= 1) {
          if (l.flags & 32) {
            return true;
          }
          if (l.flags & 16) {
            i = undefined;
          }
        }
        if ((a < e || e == h && (t < -1 ? l.length : l.covers(1))) && (!i || !l.isWidget() && i.isWidget())) {
          i = l;
          s = e - a;
        }
        if ((h > e || e == a && (t > 1 ? l.length : l.covers(-1))) && (!r || !l.isWidget() && r.isWidget())) {
          r = l;
          o = e - a;
        }
      }
    });
    if (!i && !r) {
      throw new Error("No tile at position " + e);
    }
    if (i && t < 0 || !r) {
      return {
        tile: i,
        offset: s
      };
    } else {
      return {
        tile: r,
        offset: o
      };
    }
  }
}
class xt extends Is {
  constructor(e, t) {
    super(e);
    this.wrapper = t;
  }
  isBlock() {
    return true;
  }
  covers(e) {
    if (this.children.length) {
      if (e < 0) {
        return this.children[0].covers(-1);
      } else {
        return this.lastChild.covers(1);
      }
    } else {
      return false;
    }
  }
  get domAttrs() {
    return this.wrapper.attributes;
  }
  static of(e, t) {
    let i = new xt(t || document.createElement(e.tagName), e);
    if (!t) {
      i.flags |= 4;
    }
    return i;
  }
}
class wi extends Is {
  constructor(e, t) {
    super(e);
    this.attrs = t;
  }
  isLine() {
    return true;
  }
  static start(e, t, i) {
    let s = new wi(t || document.createElement("div"), e);
    if (!t || !i) {
      s.flags |= 4;
    }
    return s;
  }
  get domAttrs() {
    return this.attrs;
  }
  resolveInline(e, t, i) {
    let s = null;
    let r = -1;
    let o = null;
    let l = -1;
    function a(c, f) {
      for (let u = 0, d = 0; u < c.children.length && d <= f; u++) {
        let m = c.children[u];
        let p = d + m.length;
        if (p >= f) {
          if (m.isComposite()) {
            a(m, f - d);
          } else if ((!o || o.isHidden && (t > 0 || i && Bm(o, m))) && (p > f || m.flags & 32)) {
            o = m;
            l = f - d;
          } else if (d < f || m.flags & 16 && !m.isHidden) {
            s = m;
            r = f - d;
          }
        }
        d = p;
      }
    }
    a(this, e);
    let h = (t < 0 ? s : o) || s || o;
    if (h) {
      return {
        tile: h,
        offset: h == s ? r : l
      };
    } else {
      return null;
    }
  }
  coordsIn(e, t) {
    let i = this.resolveInline(e, t, true);
    if (i) {
      return i.tile.coordsIn(Math.max(0, i.offset), t);
    } else {
      return Nm(this);
    }
  }
  domIn(e, t) {
    let i = this.resolveInline(e, t);
    if (i) {
      let {
        tile: s,
        offset: r
      } = i;
      if (this.dom.contains(s.dom)) {
        if (s.isText()) {
          return new He(s.dom, Math.min(s.dom.nodeValue.length, r));
        } else {
          return s.domPosFor(r, s.flags & 16 ? 1 : s.flags & 32 ? -1 : t);
        }
      }
      let o = i.tile.parent;
      let l = false;
      for (let a of o.children) {
        if (l) {
          return new He(a.dom, 0);
        }
        if (a == i.tile) {
          l = true;
        }
      }
    }
    return new He(this.dom, 0);
  }
}
function Nm(n) {
  let e = n.dom.lastChild;
  if (!e) {
    return n.dom.getBoundingClientRect();
  }
  let t = Fi(e);
  return t[t.length - 1] || null;
}
function Bm(n, e) {
  let t = n.coordsIn(0, 1);
  let i = e.coordsIn(0, 1);
  return t && i && i.top < t.bottom;
}
class Pe extends Is {
  constructor(e, t) {
    super(e);
    this.mark = t;
  }
  get domAttrs() {
    return this.mark.attrs;
  }
  static of(e, t) {
    let i = new Pe(t || document.createElement(e.tagName), e);
    if (!t) {
      i.flags |= 4;
    }
    return i;
  }
}
class ei extends ie {
  constructor(e, t) {
    super(e, t.length);
    this.text = t;
  }
  sync(e) {
    if (!(this.flags & 2)) {
      super.sync(e);
      if (this.dom.nodeValue != this.text) {
        if (e && e.node == this.dom) {
          e.written = true;
        }
        this.dom.nodeValue = this.text;
      }
    }
  }
  isText() {
    return true;
  }
  toString() {
    return JSON.stringify(this.text);
  }
  coordsIn(e, t) {
    let i = this.dom.nodeValue.length;
    if (e > i) {
      e = i;
    }
    let s = e;
    let r = e;
    let o = 0;
    if (e == 0 && t < 0 || e == i && t >= 0) {
      if (!$.chrome && !$.gecko) {
        if (e) {
          s--;
          o = 1;
        } else if (r < i) {
          r++;
          o = -1;
        }
      }
    } else if (t < 0) {
      s--;
    } else if (r < i) {
      r++;
    }
    let l = ln(this.dom, s, r).getClientRects();
    if (!l.length) {
      return null;
    }
    let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
    if ($.safari && !o && a.width == 0) {
      a = Array.prototype.find.call(l, h => h.width) || a;
    }
    if (o) {
      return on(a, o < 0);
    } else {
      return a || null;
    }
  }
  static of(e, t) {
    let i = new ei(t || document.createTextNode(e), e);
    if (!t) {
      i.flags |= 2;
    }
    return i;
  }
}
class li extends ie {
  constructor(e, t, i, s) {
    super(e, t, s);
    this.widget = i;
  }
  isWidget() {
    return true;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  covers(e) {
    if (this.flags & 48) {
      return false;
    } else {
      return (this.flags & (e < 0 ? 64 : 128)) > 0;
    }
  }
  coordsIn(e, t) {
    return this.coordsInWidget(e, t, false);
  }
  coordsInWidget(e, t, i) {
    let s = this.widget.coordsAt(this.dom, e, t);
    if (s) {
      return s;
    }
    if (i) {
      return on(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0);
    }
    {
      let r = this.dom.getClientRects();
      let o = null;
      if (!r.length) {
        return null;
      }
      let l = this.flags & 16 ? true : this.flags & 32 ? false : e > 0;
      for (let a = l ? r.length - 1 : 0; o = r[a], !(e > 0 ? a == 0 : a == r.length - 1 || o.top < o.bottom); a += l ? -1 : 1);
      return on(o, !l);
    }
  }
  get overrideDOMText() {
    if (!this.length) {
      return I.empty;
    }
    let {
      root: e
    } = this;
    if (!e) {
      return I.empty;
    }
    let t = this.posAtStart;
    return e.view.state.doc.slice(t, t + this.length);
  }
  destroy() {
    super.destroy();
    this.widget.destroy(this.dom);
  }
  static of(e, t, i, s, r) {
    if (!r) {
      r = e.toDOM(t);
      if (!e.editable) {
        r.contentEditable = "false";
      }
    }
    return new li(r, i, e, s);
  }
}
class Os extends ie {
  constructor(e) {
    let t = document.createElement("img");
    t.className = "cm-widgetBuffer";
    t.setAttribute("aria-hidden", "true");
    super(t, 0, e);
  }
  get isHidden() {
    return true;
  }
  get overrideDOMText() {
    return I.empty;
  }
  coordsIn(e) {
    return this.dom.getBoundingClientRect();
  }
}
class Ym {
  constructor(e) {
    this.index = 0;
    this.beforeBreak = false;
    this.parents = [];
    this.tile = e;
  }
  advance(e, t, i) {
    let {
      tile: s,
      index: r,
      beforeBreak: o,
      parents: l
    } = this;
    while (e || t > 0) {
      if (s.isComposite()) {
        if (o) {
          if (!e) {
            break;
          }
          if (i) {
            i.break();
          }
          e--;
          o = false;
        } else if (r == s.children.length) {
          if (!e && !l.length) {
            break;
          }
          if (i) {
            i.leave(s);
          }
          o = !!s.breakAfter;
          ({
            tile: s,
            index: r
          } = l.pop());
          r++;
        } else {
          let a = s.children[r];
          let h = a.breakAfter;
          if ((t > 0 ? a.length <= e : a.length < e) && (!i || i.skip(a, 0, a.length) !== false || !a.isComposite)) {
            o = !!h;
            r++;
            e -= a.length;
          } else {
            l.push({
              tile: s,
              index: r
            });
            s = a;
            r = 0;
            if (i && a.isComposite()) {
              i.enter(a);
            }
          }
        }
      } else if (r == s.length) {
        o = !!s.breakAfter;
        ({
          tile: s,
          index: r
        } = l.pop());
        r++;
      } else if (e) {
        let a = Math.min(e, s.length - r);
        if (i) {
          i.skip(s, r, r + a);
        }
        e -= a;
        r += a;
      } else {
        break;
      }
    }
    this.tile = s;
    this.index = r;
    this.beforeBreak = o;
    return this;
  }
  get root() {
    if (this.parents.length) {
      return this.parents[0].tile;
    } else {
      return this.tile;
    }
  }
}
class Gm {
  constructor(e, t, i, s) {
    this.from = e;
    this.to = t;
    this.wrapper = i;
    this.rank = s;
  }
}
class Im {
  constructor(e, t, i) {
    this.cache = e;
    this.root = t;
    this.blockWrappers = i;
    this.curLine = null;
    this.lastBlock = null;
    this.afterWidget = null;
    this.pos = 0;
    this.wrappers = [];
    this.wrapperPos = 0;
  }
  addText(e, t, i, s) {
    this.flushBuffer();
    let o = this.ensureMarks(t, i);
    let l = o.lastChild;
    if (l && l.isText() && !(l.flags & 8) && l.length + e.length < 512) {
      this.cache.reused.set(l, 2);
      let a = o.children[o.children.length - 1] = new ei(l.dom, l.text + e);
      a.parent = o;
    } else {
      o.append(s || ei.of(e, this.cache.find(ei)?.dom));
    }
    this.pos += e.length;
    this.afterWidget = null;
  }
  addComposition(e, t) {
    let i = this.curLine;
    if (i.dom != t.line.dom) {
      i.setDOM(this.cache.reused.has(t.line) ? fr(t.line.dom) : t.line.dom);
      this.cache.reused.set(t.line, 2);
    }
    let s = i;
    for (let l = t.marks.length - 1; l >= 0; l--) {
      let a = t.marks[l];
      let h = s.lastChild;
      if (h instanceof Pe && h.mark.eq(a.mark)) {
        if (h.dom != a.dom) {
          h.setDOM(fr(a.dom));
        }
        s = h;
      } else {
        if (this.cache.reused.get(a)) {
          let f = ie.get(a.dom);
          if (f) {
            f.setDOM(fr(a.dom));
          }
        }
        let c = Pe.of(a.mark, a.dom);
        s.append(c);
        s = c;
      }
      this.cache.reused.set(a, 2);
    }
    let r = ie.get(e.text);
    if (r) {
      this.cache.reused.set(r, 2);
    }
    let o = new ei(e.text, e.text.nodeValue);
    o.flags |= 8;
    this.pos = e.range.toB;
    s.append(o);
  }
  addInlineWidget(e, t, i) {
    let s = this.afterWidget && e.flags & 48 && (this.afterWidget.flags & 48) == (e.flags & 48);
    if (!s) {
      this.flushBuffer();
    }
    let r = this.ensureMarks(t, i);
    if (!s && !(e.flags & 16)) {
      r.append(this.getBuffer(1));
    }
    r.append(e);
    this.pos += e.length;
    this.afterWidget = e;
  }
  addMark(e, t, i) {
    this.flushBuffer();
    this.ensureMarks(t, i).append(e);
    this.pos += e.length;
    this.afterWidget = null;
  }
  addBlockWidget(e) {
    this.getBlockPos().append(e);
    this.pos += e.length;
    this.lastBlock = e;
    this.endLine();
  }
  continueWidget(e) {
    let t = this.afterWidget || this.lastBlock;
    t.length += e;
    this.pos += e;
  }
  addLineStart(e, t) {
    e ||= mf;
    let s = wi.start(e, t || this.cache.find(wi)?.dom, !!t);
    this.getBlockPos().append(this.lastBlock = this.curLine = s);
  }
  addLine(e) {
    this.getBlockPos().append(e);
    this.pos += e.length;
    this.lastBlock = e;
    this.endLine();
  }
  addBreak() {
    this.lastBlock.flags |= 1;
    this.endLine();
    this.pos++;
  }
  addLineStartIfNotCovered(e) {
    if (!this.blockPosCovered()) {
      this.addLineStart(e);
    }
  }
  ensureLine(e) {
    if (!this.curLine) {
      this.addLineStart(e);
    }
  }
  ensureMarks(e, t) {
    let s = this.curLine;
    for (let r = e.length - 1; r >= 0; r--) {
      let o = e[r];
      let l;
      if (t > 0 && (l = s.lastChild) && l instanceof Pe && l.mark.eq(o)) {
        s = l;
        t--;
      } else {
        let a = Pe.of(o, this.cache.find(Pe, h => h.mark.eq(o))?.dom);
        s.append(a);
        s = a;
        t = 0;
      }
    }
    return s;
  }
  endLine() {
    if (this.curLine) {
      this.flushBuffer();
      let e = this.curLine.lastChild;
      if (!e || !Oa(this.curLine, false) || e.dom.nodeName != "BR" && e.isWidget() && (!$.ios || !Oa(this.curLine, true))) {
        this.curLine.append(this.cache.findWidget(ur, 0, 32) || new li(ur.toDOM(), 0, ur, 32));
      }
      this.curLine = this.afterWidget = null;
    }
  }
  updateBlockWrappers() {
    if (this.wrapperPos > this.pos + 10000) {
      this.blockWrappers.goto(this.pos);
      this.wrappers.length = 0;
    }
    for (let e = this.wrappers.length - 1; e >= 0; e--) {
      if (this.wrappers[e].to < this.pos) {
        this.wrappers.splice(e, 1);
      }
    }
    for (let e = this.blockWrappers; e.value && e.from <= this.pos; e.next()) {
      if (e.to >= this.pos) {
        let t = e.rank * 102 + e.value.rank;
        let i = new Gm(e.from, e.to, e.value, t);
        let s = this.wrappers.length;
        while (s > 0 && (this.wrappers[s - 1].rank - i.rank || this.wrappers[s - 1].to - i.to) < 0) {
          s--;
        }
        this.wrappers.splice(s, 0, i);
      }
    }
    this.wrapperPos = this.pos;
  }
  getBlockPos() {
    this.updateBlockWrappers();
    let t = this.root;
    for (let i of this.wrappers) {
      let s = t.lastChild;
      if (i.from < this.pos && s instanceof xt && s.wrapper.eq(i.wrapper)) {
        t = s;
      } else {
        let r = xt.of(i.wrapper, this.cache.find(xt, o => o.wrapper.eq(i.wrapper))?.dom);
        t.append(r);
        t = r;
      }
    }
    return t;
  }
  blockPosCovered() {
    let e = this.lastBlock;
    return e != null && !e.breakAfter && (!e.isWidget() || (e.flags & 160) > 0);
  }
  getBuffer(e) {
    let t = (e < 0 ? 16 : 32) | 2;
    let i = this.cache.find(Os, undefined, 1);
    if (i) {
      i.flags = t;
    }
    return i || new Os(t);
  }
  flushBuffer() {
    if (this.afterWidget && !(this.afterWidget.flags & 32)) {
      this.afterWidget.parent.append(this.getBuffer(-1));
      this.afterWidget = null;
    }
  }
}
class Zm {
  constructor(e) {
    this.skipCount = 0;
    this.text = "";
    this.textOff = 0;
    this.cursor = e.iter();
  }
  skip(e) {
    if (this.textOff + e <= this.text.length) {
      this.textOff += e;
    } else {
      this.skipCount += e - (this.text.length - this.textOff);
      this.text = "";
      this.textOff = 0;
    }
  }
  next(e) {
    if (this.textOff == this.text.length) {
      let {
        value: s,
        lineBreak: r,
        done: o
      } = this.cursor.next(this.skipCount);
      this.skipCount = 0;
      if (o) {
        throw new Error("Ran out of text content when drawing inline views");
      }
      this.text = s;
      let l = this.textOff = Math.min(e, s.length);
      if (r) {
        return null;
      } else {
        return s.slice(0, l);
      }
    }
    let t = Math.min(this.text.length, this.textOff + e);
    let i = this.text.slice(this.textOff, t);
    this.textOff = t;
    return i;
  }
}
const gs = [li, wi, ei, Pe, Os, xt, Zs];
for (let n = 0; n < gs.length; n++) {
  gs[n].bucket = n;
}
class zm {
  constructor(e) {
    this.view = e;
    this.buckets = gs.map(() => []);
    this.index = gs.map(() => 0);
    this.reused = new Map();
  }
  add(e) {
    let t = e.constructor.bucket;
    let i = this.buckets[t];
    if (i.length < 6) {
      i.push(e);
    } else {
      i[this.index[t] = (this.index[t] + 1) % 6] = e;
    }
  }
  find(e, t, i = 2) {
    let s = e.bucket;
    let r = this.buckets[s];
    let o = this.index[s];
    for (let l = r.length - 1; l >= 0; l--) {
      let a = (l + o) % r.length;
      let h = r[a];
      if ((!t || t(h)) && !this.reused.has(h)) {
        r.splice(a, 1);
        if (a < o) {
          this.index[s]--;
        }
        this.reused.set(h, i);
        return h;
      }
    }
    return null;
  }
  findWidget(e, t, i) {
    let s = this.buckets[0];
    if (s.length) {
      for (let r = 0, o = 0;; r++) {
        if (r == s.length) {
          if (o) {
            return null;
          }
          o = 1;
          r = 0;
        }
        let l = s[r];
        if (!this.reused.has(l) && (o == 0 ? l.widget.compare(e) : l.widget.constructor == e.constructor && e.updateDOM(l.dom, this.view, l.widget))) {
          s.splice(r, 1);
          if (r < this.index[0]) {
            this.index[0]--;
          }
          if (l.widget == e && l.length == t && (l.flags & 497) == i) {
            this.reused.set(l, 1);
            return l;
          } else {
            this.reused.set(l, 2);
            return new li(l.dom, t, e, l.flags & -498 | i);
          }
        }
      }
    }
  }
  reuse(e) {
    this.reused.set(e, 1);
    return e;
  }
  maybeReuse(e, t = 2) {
    if (!this.reused.has(e)) {
      this.reused.set(e, t);
      return e.dom;
    }
  }
  clear() {
    for (let e = 0; e < this.buckets.length; e++) {
      this.buckets[e].length = this.index[e] = 0;
    }
  }
}
class jm {
  constructor(e, t, i, s, r) {
    this.view = e;
    this.decorations = s;
    this.disallowBlockEffectsFor = r;
    this.openWidget = false;
    this.openMarks = 0;
    this.cache = new zm(e);
    this.text = new Zm(e.state.doc);
    this.builder = new Im(this.cache, new Zs(e, e.contentDOM), L.iter(i));
    this.cache.reused.set(t, 2);
    this.old = new Ym(t);
    this.reuseWalker = {
      skip: (o, l, a) => {
        this.cache.add(o);
        if (o.isComposite()) {
          return false;
        }
      },
      enter: o => this.cache.add(o),
      leave: () => {},
      break: () => {}
    };
  }
  run(e, t) {
    let i = t && this.getCompositionContext(t.text);
    for (let s = 0, r = 0, o = 0;;) {
      let l = o < e.length ? e[o++] : null;
      let a = l ? l.fromA : this.old.root.length;
      if (a > s) {
        let h = a - s;
        this.preserve(h, !o, !l);
        s = a;
        r += h;
      }
      if (!l) {
        break;
      }
      if (t && l.fromA <= t.range.fromA && l.toA >= t.range.toA) {
        this.forward(l.fromA, t.range.fromA, t.range.fromA < t.range.toA ? 1 : -1);
        this.emit(r, t.range.fromB);
        this.cache.clear();
        this.builder.addComposition(t, i);
        this.text.skip(t.range.toB - t.range.fromB);
        this.forward(t.range.fromA, l.toA);
        this.emit(t.range.toB, l.toB);
      } else {
        this.forward(l.fromA, l.toA);
        this.emit(r, l.toB);
      }
      r = l.toB;
      s = l.toA;
    }
    if (this.builder.curLine) {
      this.builder.endLine();
    }
    return this.builder.root;
  }
  preserve(e, t, i) {
    let s = Um(this.old);
    let r = this.openMarks;
    this.old.advance(e, i ? 1 : -1, {
      skip: (o, l, a) => {
        if (o.isWidget()) {
          if (this.openWidget) {
            this.builder.continueWidget(a - l);
          } else {
            let h = a > 0 || l < o.length ? li.of(o.widget, this.view, a - l, o.flags & 496, this.cache.maybeReuse(o)) : this.cache.reuse(o);
            if (h.flags & 256) {
              h.flags &= -2;
              this.builder.addBlockWidget(h);
            } else {
              this.builder.ensureLine(null);
              this.builder.addInlineWidget(h, s, r);
              r = s.length;
            }
          }
        } else if (o.isText()) {
          this.builder.ensureLine(null);
          if (!l && a == o.length && !this.cache.reused.has(o)) {
            this.builder.addText(o.text, s, r, this.cache.reuse(o));
          } else {
            this.cache.add(o);
            this.builder.addText(o.text.slice(l, a), s, r);
          }
          r = s.length;
        } else if (o.isLine()) {
          o.flags &= -2;
          this.cache.reused.set(o, 1);
          this.builder.addLine(o);
        } else if (o instanceof Os) {
          this.cache.add(o);
        } else if (o instanceof Pe) {
          this.builder.ensureLine(null);
          this.builder.addMark(o, s, r);
          this.cache.reused.set(o, 1);
          r = s.length;
        } else {
          return false;
        }
        this.openWidget = false;
      },
      enter: o => {
        if (o.isLine()) {
          this.builder.addLineStart(o.attrs, this.cache.maybeReuse(o));
        } else {
          this.cache.add(o);
          if (o instanceof Pe) {
            s.unshift(o.mark);
          }
        }
        this.openWidget = false;
      },
      leave: o => {
        if (o.isLine()) {
          s.length &&= r = 0;
        } else if (o instanceof Pe) {
          s.shift();
          r = Math.min(r, s.length);
        }
      },
      break: () => {
        this.builder.addBreak();
        this.openWidget = false;
      }
    });
    this.text.skip(e);
  }
  emit(e, t) {
    let i = null;
    let s = this.builder;
    let r = 0;
    let o = L.spans(this.decorations, e, t, {
      point: (l, a, h, c, f, u) => {
        if (h instanceof ri) {
          if (this.disallowBlockEffectsFor[u]) {
            if (h.block) {
              throw new RangeError("Block decorations may not be specified via plugins");
            }
            if (a > this.view.state.doc.lineAt(l).to) {
              throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
            }
          }
          r = c.length;
          if (f > c.length) {
            s.continueWidget(a - l);
          } else {
            let d = h.widget || (h.block ? vi.block : vi.inline);
            let m = _m(h);
            let p = this.cache.findWidget(d, a - l, m) || li.of(d, this.view, a - l, m);
            if (h.block) {
              if (h.startSide > 0) {
                s.addLineStartIfNotCovered(i);
              }
              s.addBlockWidget(p);
            } else {
              s.ensureLine(i);
              s.addInlineWidget(p, c, f);
            }
          }
          i = null;
        } else {
          i = Fm(i, h);
        }
        if (a > l) {
          this.text.skip(a - l);
        }
      },
      span: (l, a, h, c) => {
        for (let f = l; f < a;) {
          let u = this.text.next(Math.min(512, a - f));
          if (u == null) {
            s.addLineStartIfNotCovered(i);
            s.addBreak();
            f++;
          } else {
            s.ensureLine(i);
            s.addText(u, h, f == l ? c : h.length);
            f += u.length;
          }
          i = null;
        }
      }
    });
    s.addLineStartIfNotCovered(i);
    this.openWidget = o > r;
    this.openMarks = o;
  }
  forward(e, t, i = 1) {
    if (t - e <= 10) {
      this.old.advance(t - e, i, this.reuseWalker);
    } else {
      this.old.advance(5, -1, this.reuseWalker);
      this.old.advance(t - e - 10, -1);
      this.old.advance(5, i, this.reuseWalker);
    }
  }
  getCompositionContext(e) {
    let t = [];
    let i = null;
    for (let s = e.parentNode;; s = s.parentNode) {
      let r = ie.get(s);
      if (s == this.view.contentDOM) {
        break;
      }
      if (r instanceof Pe) {
        t.push(r);
      } else if (r != null && r.isLine()) {
        i = r;
      } else if (!(r instanceof xt)) {
        if (s.nodeName == "DIV" && !i && s != this.view.contentDOM) {
          i = new wi(s, mf);
        } else if (!i) {
          t.push(Pe.of(new gn({
            tagName: s.nodeName.toLowerCase(),
            attributes: Sm(s)
          }), s));
        }
      }
    }
    return {
      line: i,
      marks: t
    };
  }
}
function Oa(n, e) {
  let t = i => {
    for (let s of i.children) {
      if ((e ? s.isText() : s.length) || t(s)) {
        return true;
      }
    }
    return false;
  };
  return t(n);
}
function _m(n) {
  let e = n.isReplace ? (n.startSide < 0 ? 64 : 0) | (n.endSide > 0 ? 128 : 0) : n.startSide > 0 ? 32 : 16;
  if (n.block) {
    e |= 256;
  }
  return e;
}
const mf = {
  class: "cm-line"
};
function Fm(n, e) {
  let t = e.spec.attributes;
  let i = e.spec.class;
  if (!!t || !!i) {
    n ||= {
      class: "cm-line"
    };
    if (t) {
      Uo(t, n);
    }
    if (i) {
      n.class += " " + i;
    }
  }
  return n;
}
function Um(n) {
  let e = [];
  for (let t = n.parents.length; t > 1; t--) {
    let i = t == n.parents.length ? n.tile : n.parents[t].tile;
    if (i instanceof Pe) {
      e.push(i.mark);
    }
  }
  return e;
}
function fr(n) {
  let e = ie.get(n);
  if (e) {
    e.setDOM(n.cloneNode());
  }
  return n;
}
class vi extends _e {
  constructor(e) {
    super();
    this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return true;
  }
}
vi.inline = new vi("span");
vi.block = new vi("div");
const ur = new class extends _e {
  toDOM() {
    return document.createElement("br");
  }
  get isHidden() {
    return true;
  }
  get editable() {
    return true;
  }
}();
class ga {
  constructor(e) {
    this.view = e;
    this.decorations = [];
    this.blockWrappers = [];
    this.dynamicDecorationMap = [false];
    this.domChanged = null;
    this.hasComposition = null;
    this.editContextFormatting = X.none;
    this.lastCompositionAfterCursor = false;
    this.minWidth = 0;
    this.minWidthFrom = 0;
    this.minWidthTo = 0;
    this.impreciseAnchor = null;
    this.impreciseHead = null;
    this.forceSelection = false;
    this.lastUpdate = Date.now();
    this.updateDeco();
    this.tile = new Zs(e, e.contentDOM);
    this.updateInner([new Ge(0, 0, 0, e.state.doc.length)], null);
  }
  update(e) {
    var t;
    let i = e.changedRanges;
    if (this.minWidth > 0 && i.length) {
      if (i.every(({
        fromA: c,
        toA: f
      }) => f < this.minWidthFrom || c > this.minWidthTo)) {
        this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1);
        this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1);
      } else {
        this.minWidth = this.minWidthFrom = this.minWidthTo = 0;
      }
    }
    this.updateEditContextFormatting(e);
    let s = -1;
    if (this.view.inputState.composing >= 0 && !this.view.observer.editContext) {
      if ((t = this.domChanged) !== null && t !== undefined && t.newSel) {
        s = this.domChanged.newSel.head;
      } else if (!rp(e.changes, this.hasComposition) && !e.selectionSet) {
        s = e.state.selection.main.head;
      }
    }
    let r = s > -1 ? Km(this.view, e.changes, s) : null;
    this.domChanged = null;
    if (this.hasComposition) {
      let {
        from: c,
        to: f
      } = this.hasComposition;
      i = new Ge(c, f, e.changes.mapPos(c, -1), e.changes.mapPos(f, 1)).addToSet(i.slice());
    }
    this.hasComposition = r ? {
      from: r.range.fromB,
      to: r.range.toB
    } : null;
    if (($.ie || $.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines) {
      this.forceSelection = true;
    }
    let o = this.decorations;
    let l = this.blockWrappers;
    this.updateDeco();
    let a = tp(o, this.decorations, e.changes);
    if (a.length) {
      i = Ge.extendWithRanges(i, a);
    }
    let h = np(l, this.blockWrappers, e.changes);
    if (h.length) {
      i = Ge.extendWithRanges(i, h);
    }
    if (r && !i.some(c => c.fromA <= r.range.fromA && c.toA >= r.range.toA)) {
      i = r.range.addToSet(i.slice());
    }
    if (this.tile.flags & 2 && i.length == 0) {
      return false;
    } else {
      this.updateInner(i, r);
      if (e.transactions.length) {
        this.lastUpdate = Date.now();
      }
      return true;
    }
  }
  updateInner(e, t) {
    this.view.viewState.mustMeasureContent = true;
    let {
      observer: i
    } = this.view;
    i.ignore(() => {
      if (t || e.length) {
        let o = this.tile;
        let l = new jm(this.view, o, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
        if (t && ie.get(t.text)) {
          l.cache.reused.set(ie.get(t.text), 2);
        }
        this.tile = l.run(e, t);
        Oo(o, l.cache.reused);
      }
      this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px";
      this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let r = $.chrome || $.ios ? {
        node: i.selectionRange.focusNode,
        written: false
      } : undefined;
      this.tile.sync(r);
      if (r && (r.written || i.selectionRange.focusNode != r.node || !this.tile.dom.contains(r.node))) {
        this.forceSelection = true;
      }
      this.tile.dom.style.height = "";
    });
    let s = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) {
      for (let r of this.tile.children) {
        if (r.isWidget() && r.widget instanceof dr) {
          s.push(r.dom);
        }
      }
    }
    i.updateGaps(s);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions) {
      for (let i of t.effects) {
        if (i.is(hf)) {
          this.editContextFormatting = i.value;
        }
      }
    }
  }
  updateSelection(e = false, t = false) {
    if (e || !this.view.observer.selectionRange.focusNode) {
      this.view.observer.readSelectionRange();
    }
    let {
      dom: i
    } = this.tile;
    let s = this.view.root.activeElement;
    let r = s == i;
    let o = !r && !this.view.state.facet(yt) && !(i.tabIndex > -1) && _i(i, this.view.observer.selectionRange) && (!s || !i.contains(s));
    if (!r && !t && !o) {
      return;
    }
    let l = this.forceSelection;
    this.forceSelection = false;
    let a = this.view.state.selection.main;
    let h;
    let c;
    if (a.empty) {
      c = h = this.inlineDOMNearPos(a.anchor, a.assoc || 1);
    } else {
      c = this.inlineDOMNearPos(a.head, a.head == a.from ? 1 : -1);
      h = this.inlineDOMNearPos(a.anchor, a.anchor == a.from ? 1 : -1);
    }
    if ($.gecko && a.empty && !this.hasComposition && Hm(h)) {
      let u = document.createTextNode("");
      this.view.observer.ignore(() => h.node.insertBefore(u, h.node.childNodes[h.offset] || null));
      h = c = new He(u, 0);
      l = true;
    }
    let f = this.view.observer.selectionRange;
    if (l || !f.focusNode || (!Ui(h.node, h.offset, f.anchorNode, f.anchorOffset) || !Ui(c.node, c.offset, f.focusNode, f.focusOffset)) && !this.suppressWidgetCursorChange(f, a)) {
      this.view.observer.ignore(() => {
        if ($.android && $.chrome && i.contains(f.focusNode) && sp(f.focusNode, i)) {
          i.blur();
          i.focus({
            preventScroll: true
          });
        }
        let u = rn(this.view.root);
        if (u) {
          if (a.empty) {
            if ($.gecko) {
              let d = Jm(h.node, h.offset);
              if (d && d != 3) {
                let m = (d == 1 ? zc : jc)(h.node, h.offset);
                if (m) {
                  h = new He(m.node, m.offset);
                }
              }
            }
            u.collapse(h.node, h.offset);
            if (a.bidiLevel != null && u.caretBidiLevel !== undefined) {
              u.caretBidiLevel = a.bidiLevel;
            }
          } else if (u.extend) {
            u.collapse(h.node, h.offset);
            try {
              u.extend(c.node, c.offset);
            } catch {}
          } else {
            let d = document.createRange();
            if (a.anchor > a.head) {
              [h, c] = [c, h];
            }
            d.setEnd(c.node, c.offset);
            d.setStart(h.node, h.offset);
            u.removeAllRanges();
            u.addRange(d);
          }
        }
        if (o && this.view.root.activeElement == i) {
          i.blur();
          if (s) {
            s.focus();
          }
        }
      });
      this.view.observer.setSelectionRange(h, c);
    }
    this.impreciseAnchor = h.precise ? null : new He(f.anchorNode, f.anchorOffset);
    this.impreciseHead = c.precise ? null : new He(f.focusNode, f.focusOffset);
  }
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && Ui(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition) {
      return;
    }
    let {
      view: e
    } = this;
    let t = e.state.selection.main;
    let i = rn(e.root);
    let {
      anchorNode: s,
      anchorOffset: r
    } = e.observer.selectionRange;
    if (!i || !t.empty || !t.assoc || !i.modify) {
      return;
    }
    let o = this.lineAt(t.head, t.assoc);
    if (!o) {
      return;
    }
    let l = o.posAtStart;
    if (t.head == l || t.head == l + o.length) {
      return;
    }
    let a = this.coordsAt(t.head, -1);
    let h = this.coordsAt(t.head, 1);
    if (!a || !h || a.bottom > h.top) {
      return;
    }
    let c = this.domAtPos(t.head + t.assoc, t.assoc);
    i.collapse(c.node, c.offset);
    i.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary");
    e.observer.readSelectionRange();
    let f = e.observer.selectionRange;
    if (e.docView.posFromDOM(f.anchorNode, f.anchorOffset) != t.from) {
      i.collapse(s, r);
    }
  }
  posFromDOM(e, t) {
    let i = this.tile.nearest(e);
    if (!i) {
      if (this.tile.dom.compareDocumentPosition(e) & 2) {
        return 0;
      } else {
        return this.view.state.doc.length;
      }
    }
    let s = i.posAtStart;
    if (i.isComposite()) {
      let r;
      if (e == i.dom) {
        r = i.dom.childNodes[t];
      } else {
        let o = St(e) == 0 ? 0 : t == 0 ? -1 : 1;
        while (true) {
          let l = e.parentNode;
          if (l == i.dom) {
            break;
          }
          if (o == 0 && l.firstChild != l.lastChild) {
            if (e == l.firstChild) {
              o = -1;
            } else {
              o = 1;
            }
          }
          e = l;
        }
        if (o < 0) {
          r = e;
        } else {
          r = e.nextSibling;
        }
      }
      if (r == i.dom.firstChild) {
        return s;
      }
      while (r && !ie.get(r)) {
        r = r.nextSibling;
      }
      if (!r) {
        return s + i.length;
      }
      for (let o = 0, l = s;; o++) {
        let a = i.children[o];
        if (a.dom == r) {
          return l;
        }
        l += a.length + a.breakAfter;
      }
    } else if (i.isText()) {
      if (e == i.dom) {
        return s + t;
      } else {
        return s + (t ? i.length : 0);
      }
    } else {
      return s;
    }
  }
  domAtPos(e, t) {
    let {
      tile: i,
      offset: s
    } = this.tile.resolveBlock(e, t);
    if (i.isWidget()) {
      return i.domPosFor(e, t);
    } else {
      return i.domIn(s, t);
    }
  }
  inlineDOMNearPos(e, t) {
    let i;
    let s = -1;
    let r = false;
    let o;
    let l = -1;
    let a = false;
    this.tile.blockTiles((h, c) => {
      if (h.isWidget()) {
        if (h.flags & 32 && c >= e) {
          return true;
        }
        if (h.flags & 16) {
          r = true;
        }
      } else {
        let f = c + h.length;
        if (c <= e) {
          i = h;
          s = e - c;
          r = f < e;
        }
        if (f >= e && !o) {
          o = h;
          l = e - c;
          a = c > e;
        }
        if (c > e && o) {
          return true;
        }
      }
    });
    if (!i && !o) {
      return this.domAtPos(e, t);
    } else {
      if (r && o) {
        i = null;
      } else if (a && i) {
        o = null;
      }
      if (i && t < 0 || !o) {
        return i.domIn(s, t);
      } else {
        return o.domIn(l, t);
      }
    }
  }
  coordsAt(e, t) {
    let {
      tile: i,
      offset: s
    } = this.tile.resolveBlock(e, t);
    if (i.isWidget()) {
      if (i.widget instanceof dr) {
        return null;
      } else {
        return i.coordsInWidget(s, t, true);
      }
    } else {
      return i.coordsIn(s, t);
    }
  }
  lineAt(e, t) {
    let {
      tile: i
    } = this.tile.resolveBlock(e, t);
    if (i.isLine()) {
      return i;
    } else {
      return null;
    }
  }
  coordsForChar(e) {
    let {
      tile: t,
      offset: i
    } = this.tile.resolveBlock(e, 1);
    if (!t.isLine()) {
      return null;
    }
    function s(r, o) {
      if (r.isComposite()) {
        for (let l of r.children) {
          if (l.length >= o) {
            let a = s(l, o);
            if (a) {
              return a;
            }
          }
          o -= l.length;
          if (o < 0) {
            break;
          }
        }
      } else if (r.isText() && o < r.length) {
        let l = be(r.text, o);
        if (l == o) {
          return null;
        }
        let a = ln(r.dom, o, l).getClientRects();
        for (let h = 0; h < a.length; h++) {
          let c = a[h];
          if (h == a.length - 1 || c.top < c.bottom && c.left < c.right) {
            return c;
          }
        }
      }
      return null;
    }
    return s(t, i);
  }
  measureVisibleLineHeights(e) {
    let t = [];
    let {
      from: i,
      to: s
    } = e;
    let r = this.view.contentDOM.clientWidth;
    let o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1;
    let l = -1;
    let a = this.view.textDirection == F.LTR;
    let h = 0;
    let c = (f, u, d) => {
      for (let m = 0; m < f.children.length && !(u > s); m++) {
        let p = f.children[m];
        let O = u + p.length;
        let b = p.dom.getBoundingClientRect();
        let {
          height: x
        } = b;
        if (d && !m) {
          h += b.top - d.top;
        }
        if (p instanceof xt) {
          if (O > i) {
            c(p, u, b);
          }
        } else if (u >= i && (h > 0 && t.push(-h), t.push(x + h), h = 0, o)) {
          let Q = p.dom.lastChild;
          let C = Q ? Fi(Q) : [];
          if (C.length) {
            let w = C[C.length - 1];
            let S = a ? w.right - b.left : b.right - w.left;
            if (S > l) {
              l = S;
              this.minWidth = r;
              this.minWidthFrom = u;
              this.minWidthTo = O;
            }
          }
        }
        if (d && m == f.children.length - 1) {
          h += d.bottom - b.bottom;
        }
        u = O + p.breakAfter;
      }
    };
    c(this.tile, 0, null);
    return t;
  }
  textDirectionAt(e) {
    let {
      tile: t
    } = this.tile.resolveBlock(e, 1);
    if (getComputedStyle(t.dom).direction == "rtl") {
      return F.RTL;
    } else {
      return F.LTR;
    }
  }
  measureTextSize() {
    let e = this.tile.blockTiles(o => {
      if (o.isLine() && o.children.length && o.length <= 20) {
        let l = 0;
        let a;
        for (let h of o.children) {
          if (!h.isText() || /[^ -~]/.test(h.text)) {
            return;
          }
          let c = Fi(h.dom);
          if (c.length != 1) {
            return;
          }
          l += c[0].width;
          a = c[0].height;
        }
        if (l) {
          return {
            lineHeight: o.dom.getBoundingClientRect().height,
            charWidth: l / o.length,
            textHeight: a
          };
        }
      }
    });
    if (e) {
      return e;
    }
    let t = document.createElement("div");
    let i;
    let s;
    let r;
    t.className = "cm-line";
    t.style.width = "99999px";
    t.style.position = "absolute";
    t.textContent = "abc def ghi jkl mno pqr stu";
    this.view.observer.ignore(() => {
      this.tile.dom.appendChild(t);
      let o = Fi(t.firstChild)[0];
      i = t.getBoundingClientRect().height;
      s = o && o.width ? o.width / 27 : 7;
      r = o && o.height ? o.height : i;
      t.remove();
    });
    return {
      lineHeight: i,
      charWidth: s,
      textHeight: r
    };
  }
  computeBlockGapDeco() {
    let e = [];
    let t = this.view.viewState;
    for (let i = 0, s = 0;; s++) {
      let r = s == t.viewports.length ? null : t.viewports[s];
      let o = r ? r.from - 1 : this.view.state.doc.length;
      if (o > i) {
        let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(X.replace({
          widget: new dr(l),
          block: true,
          inclusive: true,
          isBlockGap: true
        }).range(i, o));
      }
      if (!r) {
        break;
      }
      i = r.to + 1;
    }
    return X.set(e);
  }
  updateDeco() {
    let e = 1;
    let t = this.view.state.facet(Gs).map(r => (this.dynamicDecorationMap[e++] = typeof r == "function") ? r(this.view) : r);
    let i = false;
    let s = this.view.state.facet(il).map((r, o) => {
      let l = typeof r == "function";
      if (l) {
        i = true;
      }
      if (l) {
        return r(this.view);
      } else {
        return r;
      }
    });
    if (s.length) {
      this.dynamicDecorationMap[e++] = i;
      t.push(L.join(s));
    }
    this.decorations = [this.editContextFormatting, ...t, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco];
    while (e < this.decorations.length) {
      this.dynamicDecorationMap[e++] = false;
    }
    this.blockWrappers = this.view.state.facet(ff).map(r => typeof r == "function" ? r(this.view) : r);
  }
  scrollIntoView(e) {
    if (e.isSnapshot) {
      let c = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = c.top - e.yMargin;
      this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let c of this.view.state.facet(af)) {
      try {
        if (c(this.view, e.range, e)) {
          return true;
        }
      } catch (f) {
        $e(this.view.state, f, "scroll handler");
      }
    }
    let {
      range: i
    } = e;
    let s = this.coordsAt(i.head, i.assoc ?? (i.empty ? 0 : i.head > i.anchor ? -1 : 1));
    let r;
    if (!s) {
      return;
    }
    if (!i.empty && (r = this.coordsAt(i.anchor, i.anchor > i.head ? -1 : 1))) {
      s = {
        left: Math.min(s.left, r.left),
        top: Math.min(s.top, r.top),
        right: Math.max(s.right, r.right),
        bottom: Math.max(s.bottom, r.bottom)
      };
    }
    let o = nl(this.view);
    let l = {
      left: s.left - o.left,
      top: s.top - o.top,
      right: s.right + o.right,
      bottom: s.bottom + o.bottom
    };
    let {
      offsetWidth: a,
      offsetHeight: h
    } = this.view.scrollDOM;
    vm(this.view.scrollDOM, l, i.head < i.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, a), -a), Math.max(Math.min(e.yMargin, h), -h), this.view.textDirection == F.LTR);
    if (window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (s.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || s.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
      let c = this.view.docView.lineAt(i.head, 1);
      if (c) {
        c.dom.scrollIntoView({
          block: "nearest"
        });
      }
    }
  }
  lineHasWidget(e) {
    let t = i => i.isWidget() || i.children.some(t);
    return t(this.tile.resolveBlock(e, 1).tile);
  }
  destroy() {
    Oo(this.tile);
  }
}
function Oo(n, e) {
  let t = e == null ? undefined : e.get(n);
  if (t != 1) {
    if (t == null) {
      n.destroy();
    }
    for (let i of n.children) {
      Oo(i, e);
    }
  }
}
function Hm(n) {
  return n.node.nodeType == 1 && n.node.firstChild && (n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == "false") && (n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == "false");
}
function pf(n, e) {
  let t = n.observer.selectionRange;
  if (!t.focusNode) {
    return null;
  }
  let i = zc(t.focusNode, t.focusOffset);
  let s = jc(t.focusNode, t.focusOffset);
  let r = i || s;
  if (s && i && s.node != i.node) {
    let l = ie.get(s.node);
    if (!l || l.isText() && l.text != s.node.nodeValue) {
      r = s;
    } else if (n.docView.lastCompositionAfterCursor) {
      let a = ie.get(i.node);
      if (!!a && (!a.isText() || a.text == i.node.nodeValue)) {
        r = s;
      }
    }
  }
  n.docView.lastCompositionAfterCursor = r != i;
  if (!r) {
    return null;
  }
  let o = e - r.offset;
  return {
    from: o,
    to: o + r.node.nodeValue.length,
    node: r.node
  };
}
function Km(n, e, t) {
  let i = pf(n, t);
  if (!i) {
    return null;
  }
  let {
    node: s,
    from: r,
    to: o
  } = i;
  let l = s.nodeValue;
  if (/[\n\r]/.test(l) || n.state.doc.sliceString(i.from, i.to) != l) {
    return null;
  }
  let a = e.invertedDesc;
  return {
    range: new Ge(a.mapPos(r), a.mapPos(o), r, o),
    text: s
  };
}
function Jm(n, e) {
  if (n.nodeType != 1) {
    return 0;
  } else {
    return (e && n.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < n.childNodes.length && n.childNodes[e].contentEditable == "false" ? 2 : 0);
  }
}
let ep = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    gi(e, t, this.changes);
  }
  comparePoint(e, t) {
    gi(e, t, this.changes);
  }
  boundChange(e) {
    gi(e, e, this.changes);
  }
};
function tp(n, e, t) {
  let i = new ep();
  L.compare(n, e, t, i);
  return i.changes;
}
class ip {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    gi(e, t, this.changes);
  }
  comparePoint() {}
  boundChange(e) {
    gi(e, e, this.changes);
  }
}
function np(n, e, t) {
  let i = new ip();
  L.compare(n, e, t, i);
  return i.changes;
}
function sp(n, e) {
  for (let t = n; t && t != e; t = t.assignedSlot || t.parentNode) {
    if (t.nodeType == 1 && t.contentEditable == "false") {
      return true;
    }
  }
  return false;
}
function rp(n, e) {
  let t = false;
  if (e) {
    n.iterChangedRanges((i, s) => {
      if (i < e.to && s > e.from) {
        t = true;
      }
    });
  }
  return t;
}
class dr extends _e {
  constructor(e) {
    super();
    this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    e.className = "cm-gap";
    this.updateDOM(e);
    return e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    e.style.height = this.height + "px";
    return true;
  }
  get editable() {
    return true;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return false;
  }
}
function op(n, e, t = 1) {
  let i = n.charCategorizer(e);
  let s = n.doc.lineAt(e);
  let r = e - s.from;
  if (s.length == 0) {
    return y.cursor(e);
  }
  if (r == 0) {
    t = 1;
  } else if (r == s.length) {
    t = -1;
  }
  let o = r;
  let l = r;
  if (t < 0) {
    o = be(s.text, r, false);
  } else {
    l = be(s.text, r);
  }
  let a = i(s.text.slice(o, l));
  while (o > 0) {
    let h = be(s.text, o, false);
    if (i(s.text.slice(h, o)) != a) {
      break;
    }
    o = h;
  }
  while (l < s.length) {
    let h = be(s.text, l);
    if (i(s.text.slice(l, h)) != a) {
      break;
    }
    l = h;
  }
  return y.range(o + s.from, l + s.from);
}
function lp(n, e, t, i, s) {
  let r = Math.round((i - e.left) * n.defaultCharacterWidth);
  if (n.lineWrapping && t.height > n.defaultLineHeight * 1.5) {
    let l = n.viewState.heightOracle.textHeight;
    let a = Math.floor((s - t.top - (n.defaultLineHeight - l) * 0.5) / l);
    r += a * n.viewState.heightOracle.lineLength;
  }
  let o = n.state.sliceDoc(t.from, t.to);
  return t.from + no(o, r, n.state.tabSize);
}
function go(n, e, t) {
  let i = n.lineBlockAt(e);
  if (Array.isArray(i.type)) {
    let s;
    for (let r of i.type) {
      if (r.from > e) {
        break;
      }
      if (!(r.to < e)) {
        if (r.from < e && r.to > e) {
          return r;
        }
        if (!s || r.type == Se.Text && (s.type != r.type || (t < 0 ? r.from < e : r.to > e))) {
          s = r;
        }
      }
    }
    return s || i;
  }
  return i;
}
function ap(n, e, t, i) {
  let s = go(n, e.head, e.assoc || -1);
  let r = !i || s.type != Se.Text || !n.lineWrapping && !s.widgetLineBreaks ? null : n.coordsAtPos(e.assoc < 0 && e.head > s.from ? e.head - 1 : e.head);
  if (r) {
    let o = n.dom.getBoundingClientRect();
    let l = n.textDirectionAt(s.from);
    let a = n.posAtCoords({
      x: t == (l == F.LTR) ? o.right - 1 : o.left + 1,
      y: (r.top + r.bottom) / 2
    });
    if (a != null) {
      return y.cursor(a, t ? -1 : 1);
    }
  }
  return y.cursor(t ? s.to : s.from, t ? -1 : 1);
}
function ba(n, e, t, i) {
  let s = n.state.doc.lineAt(e.head);
  let r = n.bidiSpans(s);
  let o = n.textDirectionAt(s.from);
  for (let l = e, a = null;;) {
    let h = Vm(s, r, o, l, t);
    let c = Kc;
    if (!h) {
      if (s.number == (t ? n.state.doc.lines : 1)) {
        return l;
      }
      c = `
`;
      s = n.state.doc.line(s.number + (t ? 1 : -1));
      r = n.bidiSpans(s);
      h = n.visualLineSide(s, !t);
    }
    if (a) {
      if (!a(c)) {
        return l;
      }
    } else {
      if (!i) {
        return h;
      }
      a = i(c);
    }
    l = h;
  }
}
function hp(n, e, t) {
  let i = n.state.charCategorizer(e);
  let s = i(t);
  return r => {
    let o = i(r);
    if (s == ee.Space) {
      s = o;
    }
    return s == o;
  };
}
function cp(n, e, t, i) {
  let s = e.head;
  let r = t ? 1 : -1;
  if (s == (t ? n.state.doc.length : 0)) {
    return y.cursor(s, e.assoc);
  }
  let o = e.goalColumn;
  let l;
  let a = n.contentDOM.getBoundingClientRect();
  let h = n.coordsAtPos(s, e.assoc || ((e.empty ? t : e.head == e.from) ? 1 : -1));
  let c = n.documentTop;
  if (h) {
    if (o == null) {
      o = h.left - a.left;
    }
    l = r < 0 ? h.top : h.bottom;
  } else {
    let m = n.viewState.lineBlockAt(s);
    if (o == null) {
      o = Math.min(a.right - a.left, n.defaultCharacterWidth * (s - m.from));
    }
    l = (r < 0 ? m.top : m.bottom) + c;
  }
  let f = a.left + o;
  let u = n.viewState.heightOracle.textHeight >> 1;
  let d = i ?? u;
  for (let m = 0;; m += u) {
    let p = l + (d + m) * r;
    let O = bo(n, {
      x: f,
      y: p
    }, false, r);
    if (t ? p > a.bottom : p < a.top) {
      return y.cursor(O.pos, O.assoc);
    }
    let b = n.coordsAtPos(O.pos, O.assoc);
    let x = b ? (b.top + b.bottom) / 2 : 0;
    if (!b || (t ? x > l : x < l)) {
      return y.cursor(O.pos, O.assoc, undefined, o);
    }
  }
}
function Hi(n, e, t) {
  while (true) {
    let i = 0;
    for (let s of n) {
      s.between(e - 1, e + 1, (r, o, l) => {
        if (e > r && e < o) {
          let a = i || t || (e - r < o - e ? -1 : 1);
          e = a < 0 ? r : o;
          i = a;
        }
      });
    }
    if (!i) {
      return e;
    }
  }
}
function Of(n, e) {
  let t = null;
  for (let i = 0; i < e.ranges.length; i++) {
    let s = e.ranges[i];
    let r = null;
    if (s.empty) {
      let o = Hi(n, s.from, 0);
      if (o != s.from) {
        r = y.cursor(o, -1);
      }
    } else {
      let o = Hi(n, s.from, -1);
      let l = Hi(n, s.to, 1);
      if (o != s.from || l != s.to) {
        r = y.range(s.from == s.anchor ? o : l, s.from == s.head ? o : l);
      }
    }
    if (r) {
      t ||= e.ranges.slice();
      t[i] = r;
    }
  }
  if (t) {
    return y.create(t, e.mainIndex);
  } else {
    return e;
  }
}
function mr(n, e, t) {
  let i = Hi(n.state.facet(yn).map(s => s(n)), t.from, e.head > t.from ? -1 : 1);
  if (i == t.from) {
    return t;
  } else {
    return y.cursor(i, i < t.from ? 1 : -1);
  }
}
class ht {
  constructor(e, t) {
    this.pos = e;
    this.assoc = t;
  }
}
function bo(n, e, t, i) {
  let s = n.contentDOM.getBoundingClientRect();
  let r = s.top + n.viewState.paddingTop;
  let {
    x: o,
    y: l
  } = e;
  let a = l - r;
  let h;
  while (true) {
    if (a < 0) {
      return new ht(0, 1);
    }
    if (a > n.viewState.docHeight) {
      return new ht(n.state.doc.length, -1);
    }
    h = n.elementAtHeight(a);
    if (i == null) {
      break;
    }
    if (h.type == Se.Text) {
      if (i < 0 ? h.to < n.viewport.from : h.from > n.viewport.to) {
        break;
      }
      let u = n.docView.coordsAt(i < 0 ? h.from : h.to, i > 0 ? -1 : 1);
      if (u && (i < 0 ? u.top <= a + r : u.bottom >= a + r)) {
        break;
      }
    }
    let f = n.viewState.heightOracle.textHeight / 2;
    a = i > 0 ? h.bottom + f : h.top - f;
  }
  if (n.viewport.from >= h.to || n.viewport.to <= h.from) {
    if (t) {
      return null;
    }
    if (h.type == Se.Text) {
      let f = lp(n, s, h, o, l);
      return new ht(f, f == h.from ? 1 : -1);
    }
  }
  if (h.type != Se.Text) {
    if (a < (h.top + h.bottom) / 2) {
      return new ht(h.from, 1);
    } else {
      return new ht(h.to, -1);
    }
  }
  let c = n.docView.lineAt(h.from, 2);
  if (!c || c.length != h.length) {
    c = n.docView.lineAt(h.from, -2);
  }
  return new fp(n, o, l, n.textDirectionAt(h.from)).scanTile(c, h.from);
}
class fp {
  constructor(e, t, i, s) {
    this.view = e;
    this.x = t;
    this.y = i;
    this.baseDir = s;
    this.line = null;
    this.spans = null;
  }
  bidiSpansAt(e) {
    if (!this.line || this.line.from > e || this.line.to < e) {
      this.line = this.view.state.doc.lineAt(e);
      this.spans = this.view.bidiSpans(this.line);
    }
    return this;
  }
  baseDirAt(e, t) {
    let {
      line: i,
      spans: s
    } = this.bidiSpansAt(e);
    return s[ct.find(s, e - i.from, -1, t)].level == this.baseDir;
  }
  dirAt(e, t) {
    let {
      line: i,
      spans: s
    } = this.bidiSpansAt(e);
    return s[ct.find(s, e - i.from, -1, t)].dir;
  }
  bidiIn(e, t) {
    let {
      spans: i,
      line: s
    } = this.bidiSpansAt(e);
    return i.length > 1 || i.length && (i[0].level != this.baseDir || i[0].to + s.from < t);
  }
  scan(e, t, i = false) {
    let s = 0;
    let r = e.length - 1;
    let o = new Set();
    let l = this.bidiIn(e[0], e[r]);
    let a;
    let h;
    let c = -1;
    let f = 1000000000;
    let u;
    e: while (s < r) {
      let m = r - s;
      let p = s + r >> 1;
      t: if (o.has(p)) {
        let b = s + Math.floor(Math.random() * m);
        for (let x = 0; x < m; x++) {
          if (!o.has(b)) {
            p = b;
            break t;
          }
          b++;
          if (b == r) {
            b = s;
          }
        }
        break e;
      }
      o.add(p);
      let O = t(p);
      if (O) {
        for (let b = 0; b < O.length; b++) {
          let x = O[b];
          let Q = 0;
          if (x.width != 0 || !(O.length > 1)) {
            if (x.bottom < this.y) {
              if (!a || a.bottom < x.bottom) {
                a = x;
              }
              Q = 1;
            } else if (x.top > this.y) {
              if (!h || h.top > x.top) {
                h = x;
              }
              Q = -1;
            } else {
              let C = x.left > this.x ? this.x - x.left : x.right < this.x ? this.x - x.right : 0;
              let w = Math.abs(C);
              if (w < f) {
                c = p;
                f = w;
                u = x;
              }
              if (C) {
                Q = C < 0 == (this.baseDir == F.LTR) ? -1 : 1;
              }
            }
            if (Q == -1 && (!l || this.baseDirAt(e[p], 1))) {
              r = p;
            } else if (Q == 1 && (!l || this.baseDirAt(e[p + 1], -1))) {
              s = p + 1;
            }
          }
        }
      }
    }
    if (!u) {
      let m = a && (!h || this.y - a.bottom < h.top - this.y) ? a : h;
      this.y = (m.top + m.bottom) / 2;
      return this.scan(e, t, true);
    }
    if (f && !i) {
      let {
        top: m,
        bottom: p
      } = u;
      if (a && a.bottom > (m + m + p) / 3) {
        this.y = a.bottom - 1;
        return this.scan(e, t, true);
      }
      if (h && h.top < (m + p + p) / 3) {
        this.y = h.top + 1;
        return this.scan(e, t, true);
      }
    }
    let d = (l ? this.dirAt(e[c], 1) : this.baseDir) == F.LTR;
    return {
      i: c,
      after: this.x > (u.left + u.right) / 2 == d
    };
  }
  scanText(e, t) {
    let i = [];
    for (let r = 0; r < e.length; r = be(e.text, r)) {
      i.push(t + r);
    }
    i.push(t + e.length);
    let s = this.scan(i, r => {
      let o = i[r] - t;
      let l = i[r + 1] - t;
      return ln(e.dom, o, l).getClientRects();
    });
    if (s.after) {
      return new ht(i[s.i + 1], -1);
    } else {
      return new ht(i[s.i], 1);
    }
  }
  scanTile(e, t) {
    if (!e.length) {
      return new ht(t, 1);
    }
    if (e.children.length == 1) {
      let l = e.children[0];
      if (l.isText()) {
        return this.scanText(l, t);
      }
      if (l.isComposite()) {
        return this.scanTile(l, t);
      }
    }
    let i = [t];
    for (let l = 0, a = t; l < e.children.length; l++) {
      i.push(a += e.children[l].length);
    }
    let s = this.scan(i, l => {
      let a = e.children[l];
      if (a.flags & 48) {
        return null;
      } else {
        return (a.dom.nodeType == 1 ? a.dom : ln(a.dom, 0, a.length)).getClientRects();
      }
    });
    let r = e.children[s.i];
    let o = i[s.i];
    if (r.isText()) {
      return this.scanText(r, o);
    } else if (r.isComposite()) {
      return this.scanTile(r, o);
    } else if (s.after) {
      return new ht(i[s.i + 1], -1);
    } else {
      return new ht(o, 1);
    }
  }
}
const hi = "￿";
class up {
  constructor(e, t) {
    this.points = e;
    this.view = t;
    this.text = "";
    this.lineSeparator = t.state.facet(Y.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += hi;
  }
  readRange(e, t) {
    if (!e) {
      return this;
    }
    let i = e.parentNode;
    for (let s = e;;) {
      this.findPointBefore(i, s);
      let r = this.text.length;
      this.readNode(s);
      let o = ie.get(s);
      let l = s.nextSibling;
      if (l == t) {
        if (o != null && o.breakAfter && !l && i != this.view.contentDOM) {
          this.lineBreak();
        }
        break;
      }
      let a = ie.get(l);
      if ((o && a ? o.breakAfter : (o ? o.breakAfter : ms(s)) || ms(l) && (s.nodeName != "BR" || o != null && o.isWidget()) && this.text.length > r) && !mp(l, t)) {
        this.lineBreak();
      }
      s = l;
    }
    this.findPointBefore(i, t);
    return this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let i of this.points) {
      if (i.node == e) {
        i.pos = this.text.length + Math.min(i.offset, t.length);
      }
    }
    for (let i = 0, s = this.lineSeparator ? null : /\r\n?|\n/g;;) {
      let r = -1;
      let o = 1;
      let l;
      if (this.lineSeparator) {
        r = t.indexOf(this.lineSeparator, i);
        o = this.lineSeparator.length;
      } else if (l = s.exec(t)) {
        r = l.index;
        o = l[0].length;
      }
      this.append(t.slice(i, r < 0 ? t.length : r));
      if (r < 0) {
        break;
      }
      this.lineBreak();
      if (o > 1) {
        for (let a of this.points) {
          if (a.node == e && a.pos > this.text.length) {
            a.pos -= o - 1;
          }
        }
      }
      i = r + o;
    }
  }
  readNode(e) {
    let t = ie.get(e);
    let i = t && t.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let s = i.iter(); !s.next().done;) {
        if (s.lineBreak) {
          this.lineBreak();
        } else {
          this.append(s.value);
        }
      }
    } else if (e.nodeType == 3) {
      this.readTextNode(e);
    } else if (e.nodeName == "BR") {
      if (e.nextSibling) {
        this.lineBreak();
      }
    } else if (e.nodeType == 1) {
      this.readRange(e.firstChild, null);
    }
  }
  findPointBefore(e, t) {
    for (let i of this.points) {
      if (i.node == e && e.childNodes[i.offset] == t) {
        i.pos = this.text.length;
      }
    }
  }
  findPointInside(e, t) {
    for (let i of this.points) {
      if (e.nodeType == 3 ? i.node == e : e.contains(i.node)) {
        i.pos = this.text.length + (dp(e, i.node, i.offset) ? t : 0);
      }
    }
  }
}
function dp(n, e, t) {
  while (true) {
    if (!e || t < St(e)) {
      return false;
    }
    if (e == n) {
      return true;
    }
    t = Wt(e) + 1;
    e = e.parentNode;
  }
}
function mp(n, e) {
  let t;
  for (; n != e && !!n; n = n.nextSibling) {
    let i = ie.get(n);
    if (i == null || !i.isWidget()) {
      return false;
    }
    if (i) {
      (t ||= []).push(i);
    }
  }
  if (t) {
    for (let i of t) {
      let s = i.overrideDOMText;
      if (s != null && s.length) {
        return false;
      }
    }
  }
  return true;
}
class ya {
  constructor(e, t) {
    this.node = e;
    this.offset = t;
    this.pos = -1;
  }
}
class pp {
  constructor(e, t, i, s) {
    this.typeOver = s;
    this.bounds = null;
    this.text = "";
    this.domChanged = t > -1;
    let {
      impreciseHead: r,
      impreciseAnchor: o
    } = e.docView;
    let l = e.state.selection;
    if (e.state.readOnly && t > -1) {
      this.newSel = null;
    } else if (t > -1 && (this.bounds = gf(e.docView.tile, t, i, 0))) {
      let a = r || o ? [] : gp(e);
      let h = new up(a, e);
      h.readRange(this.bounds.startDOM, this.bounds.endDOM);
      this.text = h.text;
      this.newSel = bp(a, this.bounds.from);
    } else {
      let a = e.observer.selectionRange;
      let h = r && r.node == a.focusNode && r.offset == a.focusOffset || !co(e.contentDOM, a.focusNode) ? l.main.head : e.docView.posFromDOM(a.focusNode, a.focusOffset);
      let c = o && o.node == a.anchorNode && o.offset == a.anchorOffset || !co(e.contentDOM, a.anchorNode) ? l.main.anchor : e.docView.posFromDOM(a.anchorNode, a.anchorOffset);
      let f = e.viewport;
      if (($.ios || $.chrome) && l.main.empty && h != c && (f.from > 0 || f.to < e.state.doc.length)) {
        let u = Math.min(h, c);
        let d = Math.max(h, c);
        let m = f.from - u;
        let p = f.to - d;
        if ((m == 0 || m == 1 || u == 0) && (p == 0 || p == -1 || d == e.state.doc.length)) {
          h = 0;
          c = e.state.doc.length;
        }
      }
      if (e.inputState.composing > -1 && l.ranges.length > 1) {
        this.newSel = l.replaceRange(y.range(c, h));
      } else if (e.lineWrapping && c == h && (!l.main.empty || l.main.head != h) && e.inputState.lastTouchTime > Date.now() - 100) {
        let u = e.coordsAtPos(h, -1);
        let d = 0;
        if (u) {
          d = e.inputState.lastTouchY <= u.bottom ? -1 : 1;
        }
        this.newSel = y.create([y.cursor(h, d)]);
      } else {
        this.newSel = y.single(c, h);
      }
    }
  }
}
function gf(n, e, t, i) {
  if (n.isComposite()) {
    let s = -1;
    let r = -1;
    let o = -1;
    let l = -1;
    for (let a = 0, h = i, c = i; a < n.children.length; a++) {
      let f = n.children[a];
      let u = h + f.length;
      if (h < e && u > t) {
        return gf(f, e, t, h);
      }
      if (u >= e && s == -1) {
        s = a;
        r = h;
      }
      if (h > t && f.dom.parentNode == n.dom) {
        o = a;
        l = c;
        break;
      }
      c = u;
      h = u + f.breakAfter;
    }
    return {
      from: r,
      to: l < 0 ? i + n.length : l,
      startDOM: (s ? n.children[s - 1].dom.nextSibling : null) || n.dom.firstChild,
      endDOM: o < n.children.length && o >= 0 ? n.children[o].dom : null
    };
  } else if (n.isText()) {
    return {
      from: i,
      to: i + n.length,
      startDOM: n.dom,
      endDOM: n.dom.nextSibling
    };
  } else {
    return null;
  }
}
function bf(n, e) {
  let t;
  let {
    newSel: i
  } = e;
  let {
    state: s
  } = n;
  let r = s.selection.main;
  let o = n.inputState.lastKeyTime > Date.now() - 100 ? n.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let {
      from: l,
      to: a
    } = e.bounds;
    let h = r.from;
    let c = null;
    if (o === 8 || $.android && e.text.length < a - l) {
      h = r.to;
      c = "end";
    }
    let f = s.doc.sliceString(l, a, hi);
    let u;
    let d;
    if (!r.empty && r.from >= l && r.to <= a && (e.typeOver || f != e.text) && f.slice(0, r.from - l) == e.text.slice(0, r.from - l) && f.slice(r.to - l) == e.text.slice(u = e.text.length - (f.length - (r.to - l)))) {
      t = {
        from: r.from,
        to: r.to,
        insert: I.of(e.text.slice(r.from - l, u).split(hi))
      };
    } else if (d = yf(f, e.text, h - l, c)) {
      if ($.chrome && o == 13 && d.toB == d.from + 2 && e.text.slice(d.from, d.toB) == hi + hi) {
        d.toB--;
      }
      t = {
        from: l + d.from,
        to: l + d.toA,
        insert: I.of(e.text.slice(d.from, d.toB).split(hi))
      };
    }
  } else if (i && (!n.hasFocus && s.facet(yt) || bs(i, r))) {
    i = null;
  }
  if (!t && !i) {
    return false;
  }
  if (($.mac || $.android) && t && t.from == t.to && t.from == r.head - 1 && /^\. ?$/.test(t.insert.toString()) && n.contentDOM.getAttribute("autocorrect") == "off") {
    if (i && t.insert.length == 2) {
      i = y.single(i.main.anchor - 1, i.main.head - 1);
    }
    t = {
      from: t.from,
      to: t.to,
      insert: I.of([t.insert.toString().replace(".", " ")])
    };
  } else if (s.doc.lineAt(r.from).to < r.to && n.docView.lineHasWidget(r.to) && n.inputState.insertingTextAt > Date.now() - 50) {
    t = {
      from: r.from,
      to: r.to,
      insert: s.toText(n.inputState.insertingText)
    };
  } else if ($.chrome && t && t.from == t.to && t.from == r.head && t.insert.toString() == `
 ` && n.lineWrapping) {
    i &&= y.single(i.main.anchor - 1, i.main.head - 1);
    t = {
      from: r.from,
      to: r.to,
      insert: I.of([" "])
    };
  }
  if (t) {
    return sl(n, t, i, o);
  }
  if (i && !bs(i, r)) {
    let l = false;
    let a = "select";
    if (n.inputState.lastSelectionTime > Date.now() - 50) {
      if (n.inputState.lastSelectionOrigin == "select") {
        l = true;
      }
      a = n.inputState.lastSelectionOrigin;
      if (a == "select.pointer") {
        i = Of(s.facet(yn).map(h => h(n)), i);
      }
    }
    n.dispatch({
      selection: i,
      scrollIntoView: l,
      userEvent: a
    });
    return true;
  } else {
    return false;
  }
}
function sl(n, e, t, i = -1) {
  if ($.ios && n.inputState.flushIOSKey(e)) {
    return true;
  }
  let s = n.state.selection.main;
  if ($.android && (e.to == s.to && (e.from == s.from || e.from == s.from - 1 && n.state.sliceDoc(e.from, s.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && bi(n.contentDOM, "Enter", 13) || (e.from == s.from - 1 && e.to == s.to && e.insert.length == 0 || i == 8 && e.insert.length < e.to - e.from && e.to > s.head) && bi(n.contentDOM, "Backspace", 8) || e.from == s.from && e.to == s.to + 1 && e.insert.length == 0 && bi(n.contentDOM, "Delete", 46))) {
    return true;
  }
  let r = e.insert.toString();
  if (n.inputState.composing >= 0) {
    n.inputState.composing++;
  }
  let o;
  let l = () => o ||= Op(n, e, t);
  if (!n.state.facet(sf).some(a => a(n, e.from, e.to, r, l))) {
    n.dispatch(l());
  }
  return true;
}
function Op(n, e, t) {
  let i;
  let s = n.state;
  let r = s.selection.main;
  let o = -1;
  if (e.from == e.to && e.from < r.from || e.from > r.to) {
    let a = e.from < r.from ? -1 : 1;
    let h = a < 0 ? r.from : r.to;
    let c = Hi(s.facet(yn).map(f => f(n)), h, a);
    if (e.from == c) {
      o = c;
    }
  }
  if (o > -1) {
    i = {
      changes: e,
      selection: y.cursor(e.from + e.insert.length, -1)
    };
  } else if (e.from >= r.from && e.to <= r.to && e.to - e.from >= (r.to - r.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && n.inputState.composing < 0) {
    let a = r.from < e.from ? s.sliceDoc(r.from, e.from) : "";
    let h = r.to > e.to ? s.sliceDoc(e.to, r.to) : "";
    i = s.replaceSelection(n.state.toText(a + e.insert.sliceString(0, undefined, n.state.lineBreak) + h));
  } else {
    let a = s.changes(e);
    let h = t && t.main.to <= a.newLength ? t.main : undefined;
    if (s.selection.ranges.length > 1 && (n.inputState.composing >= 0 || n.inputState.compositionPendingChange) && e.to <= r.to + 10 && e.to >= r.to - 10) {
      let c = n.state.sliceDoc(e.from, e.to);
      let f;
      let u = t && pf(n, t.main.head);
      if (u) {
        let m = e.insert.length - (e.to - e.from);
        f = {
          from: u.from,
          to: u.to - m
        };
      } else {
        f = n.state.doc.lineAt(r.head);
      }
      let d = r.to - e.to;
      i = s.changeByRange(m => {
        if (m.from == r.from && m.to == r.to) {
          return {
            changes: a,
            range: h || m.map(a)
          };
        }
        let p = m.to - d;
        let O = p - c.length;
        if (n.state.sliceDoc(O, p) != c || p >= f.from && O <= f.to) {
          return {
            range: m
          };
        }
        let b = s.changes({
          from: O,
          to: p,
          insert: e.insert
        });
        let x = m.to - r.to;
        return {
          changes: b,
          range: h ? y.range(Math.max(0, h.anchor + x), Math.max(0, h.head + x)) : m.map(b)
        };
      });
    } else {
      i = {
        changes: a,
        selection: h && s.selection.replaceRange(h)
      };
    }
  }
  let l = "input.type";
  if (n.composing || n.inputState.compositionPendingChange && n.inputState.compositionEndedAt > Date.now() - 50) {
    n.inputState.compositionPendingChange = false;
    l += ".compose";
    if (n.inputState.compositionFirstChange) {
      l += ".start";
      n.inputState.compositionFirstChange = false;
    }
  }
  return s.update(i, {
    userEvent: l,
    scrollIntoView: true
  });
}
function yf(n, e, t, i) {
  let s = Math.min(n.length, e.length);
  let r = 0;
  while (r < s && n.charCodeAt(r) == e.charCodeAt(r)) {
    r++;
  }
  if (r == s && n.length == e.length) {
    return null;
  }
  let o = n.length;
  let l = e.length;
  while (o > 0 && l > 0 && n.charCodeAt(o - 1) == e.charCodeAt(l - 1)) {
    o--;
    l--;
  }
  if (i == "end") {
    let a = Math.max(0, r - Math.min(o, l));
    t -= o + a - r;
  }
  if (o < r && n.length < e.length) {
    let a = t <= r && t >= o ? r - t : 0;
    r -= a;
    l = r + (l - o);
    o = r;
  } else if (l < r) {
    let a = t <= r && t >= l ? r - t : 0;
    r -= a;
    o = r + (o - l);
    l = r;
  }
  return {
    from: r,
    toA: o,
    toB: l
  };
}
function gp(n) {
  let e = [];
  if (n.root.activeElement != n.contentDOM) {
    return e;
  }
  let {
    anchorNode: t,
    anchorOffset: i,
    focusNode: s,
    focusOffset: r
  } = n.observer.selectionRange;
  if (t) {
    e.push(new ya(t, i));
    if (s != t || r != i) {
      e.push(new ya(s, r));
    }
  }
  return e;
}
function bp(n, e) {
  if (n.length == 0) {
    return null;
  }
  let t = n[0].pos;
  let i = n.length == 2 ? n[1].pos : t;
  if (t > -1 && i > -1) {
    return y.single(t + e, i + e);
  } else {
    return null;
  }
}
function bs(n, e) {
  return e.head == n.main.head && e.anchor == n.main.anchor;
}
class yp {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e;
    this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e;
    this.lastKeyCode = 0;
    this.lastKeyTime = 0;
    this.lastTouchTime = 0;
    this.lastTouchX = 0;
    this.lastTouchY = 0;
    this.lastFocusTime = 0;
    this.lastScrollTop = 0;
    this.lastScrollLeft = 0;
    this.lastWheelEvent = 0;
    this.pendingIOSKey = undefined;
    this.tabFocusMode = -1;
    this.lastSelectionOrigin = null;
    this.lastSelectionTime = 0;
    this.lastContextMenu = 0;
    this.scrollHandlers = [];
    this.handlers = Object.create(null);
    this.composing = -1;
    this.compositionFirstChange = null;
    this.compositionEndedAt = 0;
    this.compositionPendingKey = false;
    this.compositionPendingChange = false;
    this.insertingText = "";
    this.insertingTextAt = 0;
    this.mouseSelection = null;
    this.draggedContent = null;
    this.handleEvent = this.handleEvent.bind(this);
    this.notifiedFocused = e.hasFocus;
    if ($.safari) {
      e.contentDOM.addEventListener("input", () => null);
    }
    if ($.gecko) {
      Mp(e.contentDOM.ownerDocument);
    }
  }
  handleEvent(e) {
    if (!!qp(this.view, e) && !this.ignoreDuringComposition(e) && (e.type != "keydown" || !this.keydown(e))) {
      if (this.view.updateState != 0) {
        Promise.resolve().then(() => this.runHandlers(e.type, e));
      } else {
        this.runHandlers(e.type, e);
      }
    }
  }
  runHandlers(e, t) {
    let i = this.handlers[e];
    if (i) {
      for (let s of i.observers) {
        s(this.view, t);
      }
      for (let s of i.handlers) {
        if (t.defaultPrevented) {
          break;
        }
        if (s(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = xp(e);
    let i = this.handlers;
    let s = this.view.contentDOM;
    for (let r in t) {
      if (r != "scroll") {
        let o = !t[r].handlers.length;
        let l = i[r];
        if (l && o != !l.handlers.length) {
          s.removeEventListener(r, this.handleEvent);
          l = null;
        }
        if (!l) {
          s.addEventListener(r, this.handleEvent, {
            passive: o
          });
        }
      }
    }
    for (let r in i) {
      if (r != "scroll" && !t[r]) {
        s.removeEventListener(r, this.handleEvent);
      }
    }
    this.handlers = t;
  }
  keydown(e) {
    this.lastKeyCode = e.keyCode;
    this.lastKeyTime = Date.now();
    if (e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) {
      return true;
    }
    if (this.tabFocusMode > 0 && e.keyCode != 27 && Qf.indexOf(e.keyCode) < 0) {
      this.tabFocusMode = -1;
    }
    if ($.android && $.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8)) {
      this.view.observer.delayAndroidKey(e.key, e.keyCode);
      return true;
    }
    let t;
    if ($.ios && !e.synthetic && !e.altKey && !e.metaKey && !e.shiftKey && ((t = xf.find(i => i.keyCode == e.keyCode)) && !e.ctrlKey || Qp.indexOf(e.key) > -1 && e.ctrlKey)) {
      this.pendingIOSKey = t || e;
      setTimeout(() => this.flushIOSKey(), 250);
      return true;
    } else {
      if (e.keyCode != 229) {
        this.view.observer.forceFlush();
      }
      return false;
    }
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    if (!t || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString())) {
      return false;
    } else {
      this.pendingIOSKey = undefined;
      return bi(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : undefined);
    }
  }
  ignoreDuringComposition(e) {
    if (!/^key/.test(e.type) || e.synthetic) {
      return false;
    } else if (this.composing > 0) {
      return true;
    } else if ($.safari && !$.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) {
      this.compositionPendingKey = false;
      return true;
    } else {
      return false;
    }
  }
  startMouseSelection(e) {
    if (this.mouseSelection) {
      this.mouseSelection.destroy();
    }
    this.mouseSelection = e;
  }
  update(e) {
    this.view.observer.update(e);
    if (this.mouseSelection) {
      this.mouseSelection.update(e);
    }
    if (this.draggedContent && e.docChanged) {
      this.draggedContent = this.draggedContent.map(e.changes);
    }
    if (e.transactions.length) {
      this.lastKeyCode = this.lastSelectionTime = 0;
    }
  }
  destroy() {
    if (this.mouseSelection) {
      this.mouseSelection.destroy();
    }
  }
}
function xa(n, e) {
  return (t, i) => {
    try {
      return e.call(n, i, t);
    } catch (s) {
      $e(t.state, s);
    }
  };
}
function xp(n) {
  let e = Object.create(null);
  function t(i) {
    return e[i] ||= {
      observers: [],
      handlers: []
    };
  }
  for (let i of n) {
    let s = i.spec;
    let r = s && s.plugin.domEventHandlers;
    let o = s && s.plugin.domEventObservers;
    if (r) {
      for (let l in r) {
        let a = r[l];
        if (a) {
          t(l).handlers.push(xa(i.value, a));
        }
      }
    }
    if (o) {
      for (let l in o) {
        let a = o[l];
        if (a) {
          t(l).observers.push(xa(i.value, a));
        }
      }
    }
  }
  for (let i in Ke) {
    t(i).handlers.push(Ke[i]);
  }
  for (let i in Ve) {
    t(i).observers.push(Ve[i]);
  }
  return e;
}
const xf = [{
  key: "Backspace",
  keyCode: 8,
  inputType: "deleteContentBackward"
}, {
  key: "Enter",
  keyCode: 13,
  inputType: "insertParagraph"
}, {
  key: "Enter",
  keyCode: 13,
  inputType: "insertLineBreak"
}, {
  key: "Delete",
  keyCode: 46,
  inputType: "deleteContentForward"
}];
const Qp = "dthko";
const Qf = [16, 17, 18, 20, 91, 92, 224, 225];
const Xn = 6;
function En(n) {
  return Math.max(0, n) * 0.7 + 8;
}
function Sp(n, e) {
  return Math.max(Math.abs(n.clientX - e.clientX), Math.abs(n.clientY - e.clientY));
}
class kp {
  constructor(e, t, i, s) {
    this.view = e;
    this.startEvent = t;
    this.style = i;
    this.mustSelect = s;
    this.scrollSpeed = {
      x: 0,
      y: 0
    };
    this.scrolling = -1;
    this.lastEvent = t;
    this.scrollParents = Gc(e.contentDOM);
    this.atoms = e.state.facet(yn).map(o => o(e));
    let r = e.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this));
    r.addEventListener("mouseup", this.up = this.up.bind(this));
    this.extend = t.shiftKey;
    this.multiple = e.state.facet(Y.allowMultipleSelections) && wp(e, t);
    this.dragging = Cp(e, t) && wf(t) == 1 ? null : false;
  }
  start(e) {
    if (this.dragging === false) {
      this.select(e);
    }
  }
  move(e) {
    if (e.buttons == 0) {
      return this.destroy();
    }
    if (this.dragging || this.dragging == null && Sp(this.startEvent, e) < 10) {
      return;
    }
    this.select(this.lastEvent = e);
    let t = 0;
    let i = 0;
    let s = 0;
    let r = 0;
    let o = this.view.win.innerWidth;
    let l = this.view.win.innerHeight;
    if (this.scrollParents.x) {
      ({
        left: s,
        right: o
      } = this.scrollParents.x.getBoundingClientRect());
    }
    if (this.scrollParents.y) {
      ({
        top: r,
        bottom: l
      } = this.scrollParents.y.getBoundingClientRect());
    }
    let a = nl(this.view);
    if (e.clientX - a.left <= s + Xn) {
      t = -En(s - e.clientX);
    } else if (e.clientX + a.right >= o - Xn) {
      t = En(e.clientX - o);
    }
    if (e.clientY - a.top <= r + Xn) {
      i = -En(r - e.clientY);
    } else if (e.clientY + a.bottom >= l - Xn) {
      i = En(e.clientY - l);
    }
    this.setScrollSpeed(t, i);
  }
  up(e) {
    if (this.dragging == null) {
      this.select(this.lastEvent);
    }
    if (!this.dragging) {
      e.preventDefault();
    }
    this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move);
    e.removeEventListener("mouseup", this.up);
    this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(e, t) {
    this.scrollSpeed = {
      x: e,
      y: t
    };
    if (e || t) {
      if (this.scrolling < 0) {
        this.scrolling = setInterval(() => this.scroll(), 50);
      }
    } else if (this.scrolling > -1) {
      clearInterval(this.scrolling);
      this.scrolling = -1;
    }
  }
  scroll() {
    let {
      x: e,
      y: t
    } = this.scrollSpeed;
    if (e && this.scrollParents.x) {
      this.scrollParents.x.scrollLeft += e;
      e = 0;
    }
    if (t && this.scrollParents.y) {
      this.scrollParents.y.scrollTop += t;
      t = 0;
    }
    if (e || t) {
      this.view.win.scrollBy(e, t);
    }
    if (this.dragging === false) {
      this.select(this.lastEvent);
    }
  }
  select(e) {
    let {
      view: t
    } = this;
    let i = Of(this.atoms, this.style.get(e, this.extend, this.multiple));
    if (this.mustSelect || !i.eq(t.state.selection, this.dragging === false)) {
      this.view.dispatch({
        selection: i,
        userEvent: "select.pointer"
      });
    }
    this.mustSelect = false;
  }
  update(e) {
    if (e.transactions.some(t => t.isUserEvent("input.type"))) {
      this.destroy();
    } else if (this.style.update(e)) {
      setTimeout(() => this.select(this.lastEvent), 20);
    }
  }
}
function wp(n, e) {
  let t = n.state.facet(Jc);
  if (t.length) {
    return t[0](e);
  } else if ($.mac) {
    return e.metaKey;
  } else {
    return e.ctrlKey;
  }
}
function vp(n, e) {
  let t = n.state.facet(ef);
  if (t.length) {
    return t[0](e);
  } else if ($.mac) {
    return !e.altKey;
  } else {
    return !e.ctrlKey;
  }
}
function Cp(n, e) {
  let {
    main: t
  } = n.state.selection;
  if (t.empty) {
    return false;
  }
  let i = rn(n.root);
  if (!i || i.rangeCount == 0) {
    return true;
  }
  let s = i.getRangeAt(0).getClientRects();
  for (let r = 0; r < s.length; r++) {
    let o = s[r];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY) {
      return true;
    }
  }
  return false;
}
function qp(n, e) {
  if (!e.bubbles) {
    return true;
  }
  if (e.defaultPrevented) {
    return false;
  }
  for (let t = e.target, i; t != n.contentDOM; t = t.parentNode) {
    if (!t || t.nodeType == 11 || (i = ie.get(t)) && i.isWidget() && !i.isHidden && i.widget.ignoreEvent(e)) {
      return false;
    }
  }
  return true;
}
const Ke = Object.create(null);
const Ve = Object.create(null);
const Sf = $.ie && $.ie_version < 15 || $.ios && $.webkit_version < 604;
function Tp(n) {
  let e = n.dom.parentNode;
  if (!e) {
    return;
  }
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  t.focus();
  setTimeout(() => {
    n.focus();
    t.remove();
    kf(n, t.value);
  }, 50);
}
function zs(n, e, t) {
  for (let i of n.facet(e)) {
    t = i(t, n);
  }
  return t;
}
function kf(n, e) {
  e = zs(n.state, Jo, e);
  let {
    state: t
  } = n;
  let i;
  let s = 1;
  let r = t.toText(e);
  let o = r.lines == t.selection.ranges.length;
  if (yo != null && t.selection.ranges.every(a => a.empty) && yo == r.toString()) {
    let a = -1;
    i = t.changeByRange(h => {
      let c = t.doc.lineAt(h.from);
      if (c.from == a) {
        return {
          range: h
        };
      }
      a = c.from;
      let f = t.toText((o ? r.line(s++).text : e) + t.lineBreak);
      return {
        changes: {
          from: c.from,
          insert: f
        },
        range: y.cursor(h.from + f.length)
      };
    });
  } else if (o) {
    i = t.changeByRange(a => {
      let h = r.line(s++);
      return {
        changes: {
          from: a.from,
          to: a.to,
          insert: h.text
        },
        range: y.cursor(a.from + h.length)
      };
    });
  } else {
    i = t.replaceSelection(r);
  }
  n.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: true
  });
}
Ve.scroll = n => {
  n.inputState.lastScrollTop = n.scrollDOM.scrollTop;
  n.inputState.lastScrollLeft = n.scrollDOM.scrollLeft;
};
Ve.wheel = Ve.mousewheel = n => {
  n.inputState.lastWheelEvent = Date.now();
};
Ke.keydown = (n, e) => {
  n.inputState.setSelectionOrigin("select");
  if (e.keyCode == 27 && n.inputState.tabFocusMode != 0) {
    n.inputState.tabFocusMode = Date.now() + 2000;
  }
  return false;
};
Ve.touchstart = (n, e) => {
  let t = n.inputState;
  let i = e.targetTouches[0];
  t.lastTouchTime = Date.now();
  if (i) {
    t.lastTouchX = i.clientX;
    t.lastTouchY = i.clientY;
  }
  t.setSelectionOrigin("select.pointer");
};
Ve.touchmove = n => {
  n.inputState.setSelectionOrigin("select.pointer");
};
Ke.mousedown = (n, e) => {
  n.observer.flush();
  if (n.inputState.lastTouchTime > Date.now() - 2000) {
    return false;
  }
  let t = null;
  for (let i of n.state.facet(tf)) {
    t = i(n, e);
    if (t) {
      break;
    }
  }
  if (!t && e.button == 0) {
    t = Xp(n, e);
  }
  if (t) {
    let i = !n.hasFocus;
    n.inputState.startMouseSelection(new kp(n, e, t, i));
    if (i) {
      n.observer.ignore(() => {
        Ic(n.contentDOM);
        let r = n.root.activeElement;
        if (r && !r.contains(n.contentDOM)) {
          r.blur();
        }
      });
    }
    let s = n.inputState.mouseSelection;
    if (s) {
      s.start(e);
      return s.dragging === false;
    }
  } else {
    n.inputState.setSelectionOrigin("select.pointer");
  }
  return false;
};
function Qa(n, e, t, i) {
  if (i == 1) {
    return y.cursor(e, t);
  }
  if (i == 2) {
    return op(n.state, e, t);
  }
  {
    let s = n.docView.lineAt(e, t);
    let r = n.state.doc.lineAt(s ? s.posAtEnd : e);
    let o = s ? s.posAtStart : r.from;
    let l = s ? s.posAtEnd : r.to;
    if (l < n.state.doc.length && l == r.to) {
      l++;
    }
    return y.range(o, l);
  }
}
const $p = $.ie && $.ie_version <= 11;
let Sa = null;
let ka = 0;
let wa = 0;
function wf(n) {
  if (!$p) {
    return n.detail;
  }
  let e = Sa;
  let t = wa;
  Sa = n;
  wa = Date.now();
  return ka = !e || t > Date.now() - 400 && Math.abs(e.clientX - n.clientX) < 2 && Math.abs(e.clientY - n.clientY) < 2 ? (ka + 1) % 3 : 1;
}
function Xp(n, e) {
  let t = n.posAndSideAtCoords({
    x: e.clientX,
    y: e.clientY
  }, false);
  let i = wf(e);
  let s = n.state.selection;
  return {
    update(r) {
      if (r.docChanged) {
        t.pos = r.changes.mapPos(t.pos);
        s = s.map(r.changes);
      }
    },
    get(r, o, l) {
      let a = n.posAndSideAtCoords({
        x: r.clientX,
        y: r.clientY
      }, false);
      let h;
      let c = Qa(n, a.pos, a.assoc, i);
      if (t.pos != a.pos && !o) {
        let f = Qa(n, t.pos, t.assoc, i);
        let u = Math.min(f.from, c.from);
        let d = Math.max(f.to, c.to);
        c = u < c.from ? y.range(u, d, c.assoc) : y.range(d, u, c.assoc);
      }
      if (o) {
        return s.replaceRange(s.main.extend(c.from, c.to, c.assoc));
      } else if (l && i == 1 && s.ranges.length > 1 && (h = Ep(s, a.pos))) {
        return h;
      } else if (l) {
        return s.addRange(c);
      } else {
        return y.create([c]);
      }
    }
  };
}
function Ep(n, e) {
  for (let t = 0; t < n.ranges.length; t++) {
    let {
      from: i,
      to: s
    } = n.ranges[t];
    if (i <= e && s >= e) {
      return y.create(n.ranges.slice(0, t).concat(n.ranges.slice(t + 1)), n.mainIndex == t ? 0 : n.mainIndex - (n.mainIndex > t ? 1 : 0));
    }
  }
  return null;
}
Ke.dragstart = (n, e) => {
  let {
    selection: {
      main: t
    }
  } = n.state;
  if (e.target.draggable) {
    let s = n.docView.tile.nearest(e.target);
    if (s && s.isWidget()) {
      let r = s.posAtStart;
      let o = r + s.length;
      if (r >= t.to || o <= t.from) {
        t = y.range(r, o);
      }
    }
  }
  let {
    inputState: i
  } = n;
  if (i.mouseSelection) {
    i.mouseSelection.dragging = true;
  }
  i.draggedContent = t;
  if (e.dataTransfer) {
    e.dataTransfer.setData("Text", zs(n.state, el, n.state.sliceDoc(t.from, t.to)));
    e.dataTransfer.effectAllowed = "copyMove";
  }
  return false;
};
Ke.dragend = n => {
  n.inputState.draggedContent = null;
  return false;
};
function va(n, e, t, i) {
  t = zs(n.state, Jo, t);
  if (!t) {
    return;
  }
  let s = n.posAtCoords({
    x: e.clientX,
    y: e.clientY
  }, false);
  let {
    draggedContent: r
  } = n.inputState;
  let o = i && r && vp(n, e) ? {
    from: r.from,
    to: r.to
  } : null;
  let l = {
    from: s,
    insert: t
  };
  let a = n.state.changes(o ? [o, l] : l);
  n.focus();
  n.dispatch({
    changes: a,
    selection: {
      anchor: a.mapPos(s, -1),
      head: a.mapPos(s, 1)
    },
    userEvent: o ? "move.drop" : "input.drop"
  });
  n.inputState.draggedContent = null;
}
Ke.drop = (n, e) => {
  if (!e.dataTransfer) {
    return false;
  }
  if (n.state.readOnly) {
    return true;
  }
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let i = Array(t.length);
    let s = 0;
    let r = () => {
      if (++s == t.length) {
        va(n, e, i.filter(o => o != null).join(n.state.lineBreak), false);
      }
    };
    for (let o = 0; o < t.length; o++) {
      let l = new FileReader();
      l.onerror = r;
      l.onload = () => {
        if (!/[\x00-\x08\x0e-\x1f]{2}/.test(l.result)) {
          i[o] = l.result;
        }
        r();
      };
      l.readAsText(t[o]);
    }
    return true;
  } else {
    let i = e.dataTransfer.getData("Text");
    if (i) {
      va(n, e, i, true);
      return true;
    }
  }
  return false;
};
Ke.paste = (n, e) => {
  if (n.state.readOnly) {
    return true;
  }
  n.observer.flush();
  let t = Sf ? null : e.clipboardData;
  if (t) {
    kf(n, t.getData("text/plain") || t.getData("text/uri-list"));
    return true;
  } else {
    Tp(n);
    return false;
  }
};
function Ap(n, e) {
  let t = n.dom.parentNode;
  if (!t) {
    return;
  }
  let i = t.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px";
  i.value = e;
  i.focus();
  i.selectionEnd = e.length;
  i.selectionStart = 0;
  setTimeout(() => {
    i.remove();
    n.focus();
  }, 50);
}
function Pp(n) {
  let e = [];
  let t = [];
  let i = false;
  for (let s of n.selection.ranges) {
    if (!s.empty) {
      e.push(n.sliceDoc(s.from, s.to));
      t.push(s);
    }
  }
  if (!e.length) {
    let s = -1;
    for (let {
      from: r
    } of n.selection.ranges) {
      let o = n.doc.lineAt(r);
      if (o.number > s) {
        e.push(o.text);
        t.push({
          from: o.from,
          to: Math.min(n.doc.length, o.to + 1)
        });
      }
      s = o.number;
    }
    i = true;
  }
  return {
    text: zs(n, el, e.join(n.lineBreak)),
    ranges: t,
    linewise: i
  };
}
let yo = null;
Ke.copy = Ke.cut = (n, e) => {
  if (!_i(n.contentDOM, n.observer.selectionRange)) {
    return false;
  }
  let {
    text: t,
    ranges: i,
    linewise: s
  } = Pp(n.state);
  if (!t && !s) {
    return false;
  }
  yo = s ? t : null;
  if (e.type == "cut" && !n.state.readOnly) {
    n.dispatch({
      changes: i,
      scrollIntoView: true,
      userEvent: "delete.cut"
    });
  }
  let r = Sf ? null : e.clipboardData;
  if (r) {
    r.clearData();
    r.setData("text/plain", t);
    return true;
  } else {
    Ap(n, t);
    return false;
  }
};
const vf = Ot.define();
function Cf(n, e) {
  let t = [];
  for (let i of n.facet(rf)) {
    let s = i(n, e);
    if (s) {
      t.push(s);
    }
  }
  if (t.length) {
    return n.update({
      effects: t,
      annotations: vf.of(true)
    });
  } else {
    return null;
  }
}
function qf(n) {
  setTimeout(() => {
    let e = n.hasFocus;
    if (e != n.inputState.notifiedFocused) {
      let t = Cf(n.state, e);
      if (t) {
        n.dispatch(t);
      } else {
        n.update([]);
      }
    }
  }, 10);
}
Ve.focus = n => {
  n.inputState.lastFocusTime = Date.now();
  if (!n.scrollDOM.scrollTop && (n.inputState.lastScrollTop || n.inputState.lastScrollLeft)) {
    n.scrollDOM.scrollTop = n.inputState.lastScrollTop;
    n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft;
  }
  qf(n);
};
Ve.blur = n => {
  n.observer.clearSelectionRange();
  qf(n);
};
Ve.compositionstart = Ve.compositionupdate = n => {
  if (!n.observer.editContext) {
    if (n.inputState.compositionFirstChange == null) {
      n.inputState.compositionFirstChange = true;
    }
    if (n.inputState.composing < 0) {
      n.inputState.composing = 0;
    }
  }
};
Ve.compositionend = n => {
  if (!n.observer.editContext) {
    n.inputState.composing = -1;
    n.inputState.compositionEndedAt = Date.now();
    n.inputState.compositionPendingKey = true;
    n.inputState.compositionPendingChange = n.observer.pendingRecords().length > 0;
    n.inputState.compositionFirstChange = null;
    if ($.chrome && $.android) {
      n.observer.flushSoon();
    } else if (n.inputState.compositionPendingChange) {
      Promise.resolve().then(() => n.observer.flush());
    } else {
      setTimeout(() => {
        if (n.inputState.composing < 0 && n.docView.hasComposition) {
          n.update([]);
        }
      }, 50);
    }
  }
};
Ve.contextmenu = n => {
  n.inputState.lastContextMenu = Date.now();
};
Ke.beforeinput = (n, e) => {
  var t;
  if (e.inputType == "insertText" || e.inputType == "insertCompositionText") {
    n.inputState.insertingText = e.data;
    n.inputState.insertingTextAt = Date.now();
  }
  if (e.inputType == "insertReplacementText" && n.observer.editContext) {
    let r = (t = e.dataTransfer) === null || t === undefined ? undefined : t.getData("text/plain");
    let o = e.getTargetRanges();
    if (r && o.length) {
      let l = o[0];
      let a = n.posAtDOM(l.startContainer, l.startOffset);
      let h = n.posAtDOM(l.endContainer, l.endOffset);
      sl(n, {
        from: a,
        to: h,
        insert: n.state.toText(r)
      }, null);
      return true;
    }
  }
  let s;
  if ($.chrome && $.android && (s = xf.find(r => r.inputType == e.inputType)) && (n.observer.delayAndroidKey(s.key, s.keyCode), s.key == "Backspace" || s.key == "Delete")) {
    let r = window.visualViewport?.height || 0;
    setTimeout(() => {
      if ((window.visualViewport?.height || 0) > r + 10 && n.hasFocus) {
        n.contentDOM.blur();
        n.focus();
      }
    }, 100);
  }
  if ($.ios && e.inputType == "deleteContentForward") {
    n.observer.flushSoon();
  }
  if ($.safari && e.inputType == "insertText" && n.inputState.composing >= 0) {
    setTimeout(() => Ve.compositionend(n, e), 20);
  }
  return false;
};
const Ca = new Set();
function Mp(n) {
  if (!Ca.has(n)) {
    Ca.add(n);
    n.addEventListener("copy", () => {});
    n.addEventListener("cut", () => {});
  }
}
const qa = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let Ci = false;
function Ta() {
  Ci = false;
}
class Rp {
  constructor(e) {
    this.lineWrapping = e;
    this.doc = I.empty;
    this.heightSamples = {};
    this.lineHeight = 14;
    this.charWidth = 7;
    this.textHeight = 14;
    this.lineLength = 30;
  }
  heightForGap(e, t) {
    let i = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    if (this.lineWrapping) {
      i += Math.max(0, Math.ceil((t - e - i * this.lineLength * 0.5) / this.lineLength));
    }
    return this.lineHeight * i;
  }
  heightForLine(e) {
    if (this.lineWrapping) {
      return (1 + Math.max(0, Math.ceil((e - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight;
    } else {
      return this.lineHeight;
    }
  }
  setDoc(e) {
    this.doc = e;
    return this;
  }
  mustRefreshForWrapping(e) {
    return qa.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = false;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (s < 0) {
        i++;
      } else if (!this.heightSamples[Math.floor(s * 10)]) {
        t = true;
        this.heightSamples[Math.floor(s * 10)] = true;
      }
    }
    return t;
  }
  refresh(e, t, i, s, r, o) {
    let l = qa.indexOf(e) > -1;
    let a = Math.abs(t - this.lineHeight) > 0.3 || this.lineWrapping != l;
    this.lineWrapping = l;
    this.lineHeight = t;
    this.charWidth = i;
    this.textHeight = s;
    this.lineLength = r;
    if (a) {
      this.heightSamples = {};
      for (let h = 0; h < o.length; h++) {
        let c = o[h];
        if (c < 0) {
          h++;
        } else {
          this.heightSamples[Math.floor(c * 10)] = true;
        }
      }
    }
    return a;
  }
}
class Vp {
  constructor(e, t) {
    this.from = e;
    this.heights = t;
    this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Ue {
  constructor(e, t, i, s, r) {
    this.from = e;
    this.length = t;
    this.top = i;
    this.height = s;
    this._content = r;
  }
  get type() {
    if (typeof this._content == "number") {
      return Se.Text;
    } else if (Array.isArray(this._content)) {
      return this._content;
    } else {
      return this._content.type;
    }
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    if (this._content instanceof ri) {
      return this._content.widget;
    } else {
      return null;
    }
  }
  get widgetLineBreaks() {
    if (typeof this._content == "number") {
      return this._content;
    } else {
      return 0;
    }
  }
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new Ue(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var H = function (n) {
  n[n.ByPos = 0] = "ByPos";
  n[n.ByHeight = 1] = "ByHeight";
  n[n.ByPosNoHeight = 2] = "ByPosNoHeight";
  return n;
}(H ||= {});
const es = 0.001;
class Xe {
  constructor(e, t, i = 2) {
    this.length = e;
    this.height = t;
    this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e) {
    if (this.height != e) {
      if (Math.abs(this.height - e) > es) {
        Ci = true;
      }
      this.height = e;
    }
  }
  replace(e, t, i) {
    return Xe.of(i);
  }
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, i, s) {
    let r = this;
    let o = i.doc;
    for (let l = s.length - 1; l >= 0; l--) {
      let {
        fromA: a,
        toA: h,
        fromB: c,
        toB: f
      } = s[l];
      let u = r.lineAt(a, H.ByPosNoHeight, i.setDoc(t), 0, 0);
      let d = u.to >= h ? u : r.lineAt(h, H.ByPosNoHeight, i, 0, 0);
      f += d.to - h;
      h = d.to;
      while (l > 0 && u.from <= s[l - 1].toA) {
        a = s[l - 1].fromA;
        c = s[l - 1].fromB;
        l--;
        if (a < u.from) {
          u = r.lineAt(a, H.ByPosNoHeight, i, 0, 0);
        }
      }
      c += u.from - a;
      a = u.from;
      let m = rl.build(i.setDoc(o), e, c, f);
      r = ys(r, r.replace(a, h, m));
    }
    return r.updateHeight(i, 0);
  }
  static empty() {
    return new Be(0, 0, 0);
  }
  static of(e) {
    if (e.length == 1) {
      return e[0];
    }
    let t = 0;
    let i = e.length;
    let s = 0;
    let r = 0;
    while (true) {
      if (t == i) {
        if (s > r * 2) {
          let l = e[t - 1];
          if (l.break) {
            e.splice(--t, 1, l.left, null, l.right);
          } else {
            e.splice(--t, 1, l.left, l.right);
          }
          i += 1 + l.break;
          s -= l.size;
        } else if (r > s * 2) {
          let l = e[i];
          if (l.break) {
            e.splice(i, 1, l.left, null, l.right);
          } else {
            e.splice(i, 1, l.left, l.right);
          }
          i += 2 + l.break;
          r -= l.size;
        } else {
          break;
        }
      } else if (s < r) {
        let l = e[t++];
        if (l) {
          s += l.size;
        }
      } else {
        let l = e[--i];
        if (l) {
          r += l.size;
        }
      }
    }
    let o = 0;
    if (e[t - 1] == null) {
      o = 1;
      t--;
    } else if (e[t] == null) {
      o = 1;
      i++;
    }
    return new Dp(Xe.of(e.slice(0, t)), o, Xe.of(e.slice(i)));
  }
}
function ys(n, e) {
  if (n == e) {
    return n;
  } else {
    if (n.constructor != e.constructor) {
      Ci = true;
    }
    return e;
  }
}
Xe.prototype.size = 1;
const Wp = X.replace({});
class Tf extends Xe {
  constructor(e, t, i) {
    super(e, t);
    this.deco = i;
    this.spaceAbove = 0;
  }
  mainBlock(e, t) {
    return new Ue(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
  }
  blockAt(e, t, i, s) {
    if (this.spaceAbove && e < i + this.spaceAbove) {
      return new Ue(s, 0, i, this.spaceAbove, Wp);
    } else {
      return this.mainBlock(i, s);
    }
  }
  lineAt(e, t, i, s, r) {
    let o = this.mainBlock(s, r);
    if (this.spaceAbove) {
      return this.blockAt(0, i, s, r).join(o);
    } else {
      return o;
    }
  }
  forEachLine(e, t, i, s, r, o) {
    if (e <= r + this.length && t >= r) {
      o(this.lineAt(0, H.ByPos, i, s, r));
    }
  }
  setMeasuredHeight(e) {
    let t = e.heights[e.index++];
    if (t < 0) {
      this.spaceAbove = -t;
      t = e.heights[e.index++];
    } else {
      this.spaceAbove = 0;
    }
    this.setHeight(t);
  }
  updateHeight(e, t = 0, i = false, s) {
    if (s && s.from <= t && s.more) {
      this.setMeasuredHeight(s);
    }
    this.outdated = false;
    return this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class Be extends Tf {
  constructor(e, t, i) {
    super(e, t, null);
    this.collapsed = 0;
    this.widgetHeight = 0;
    this.breaks = 0;
    this.spaceAbove = i;
  }
  mainBlock(e, t) {
    return new Ue(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.breaks);
  }
  replace(e, t, i) {
    let s = i[0];
    if (i.length == 1 && (s instanceof Be || s instanceof ye && s.flags & 4) && Math.abs(this.length - s.length) < 10) {
      if (s instanceof ye) {
        s = new Be(s.length, this.height, this.spaceAbove);
      } else {
        s.height = this.height;
      }
      if (!this.outdated) {
        s.outdated = false;
      }
      return s;
    } else {
      return Xe.of(i);
    }
  }
  updateHeight(e, t = 0, i = false, s) {
    if (s && s.from <= t && s.more) {
      this.setMeasuredHeight(s);
    } else if (i || this.outdated) {
      this.spaceAbove = 0;
      this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight);
    }
    this.outdated = false;
    return this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class ye extends Xe {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let i = e.doc.lineAt(t).number;
    let s = e.doc.lineAt(t + this.length).number;
    let r = s - i + 1;
    let o;
    let l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * r);
      o = a / r;
      if (this.length > r + 1) {
        l = (this.height - a) / (this.length - r - 1);
      }
    } else {
      o = this.height / r;
    }
    return {
      firstLine: i,
      lastLine: s,
      perLine: o,
      perChar: l
    };
  }
  blockAt(e, t, i, s) {
    let {
      firstLine: r,
      lastLine: o,
      perLine: l,
      perChar: a
    } = this.heightMetrics(t, s);
    if (t.lineWrapping) {
      let h = s + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length));
      let c = t.doc.lineAt(h);
      let f = l + c.length * a;
      let u = Math.max(i, e - f / 2);
      return new Ue(c.from, c.length, u, f, 0);
    } else {
      let h = Math.max(0, Math.min(o - r, Math.floor((e - i) / l)));
      let {
        from: c,
        length: f
      } = t.doc.line(r + h);
      return new Ue(c, f, i + l * h, l, 0);
    }
  }
  lineAt(e, t, i, s, r) {
    if (t == H.ByHeight) {
      return this.blockAt(e, i, s, r);
    }
    if (t == H.ByPosNoHeight) {
      let {
        from: d,
        to: m
      } = i.doc.lineAt(e);
      return new Ue(d, m - d, 0, 0, 0);
    }
    let {
      firstLine: o,
      perLine: l,
      perChar: a
    } = this.heightMetrics(i, r);
    let h = i.doc.lineAt(e);
    let c = l + h.length * a;
    let f = h.number - o;
    let u = s + l * f + a * (h.from - r - f);
    return new Ue(h.from, h.length, Math.max(s, Math.min(u, s + this.height - c)), c, 0);
  }
  forEachLine(e, t, i, s, r, o) {
    e = Math.max(e, r);
    t = Math.min(t, r + this.length);
    let {
      firstLine: l,
      perLine: a,
      perChar: h
    } = this.heightMetrics(i, r);
    for (let c = e, f = s; c <= t;) {
      let u = i.doc.lineAt(c);
      if (c == e) {
        let m = u.number - l;
        f += a * m + h * (e - r - m);
      }
      let d = a + h * u.length;
      o(new Ue(u.from, u.length, f, d, 0));
      f += d;
      c = u.to + 1;
    }
  }
  replace(e, t, i) {
    let s = this.length - t;
    if (s > 0) {
      let r = i[i.length - 1];
      if (r instanceof ye) {
        i[i.length - 1] = new ye(r.length + s);
      } else {
        i.push(null, new ye(s - 1));
      }
    }
    if (e > 0) {
      let r = i[0];
      if (r instanceof ye) {
        i[0] = new ye(e + r.length);
      } else {
        i.unshift(new ye(e - 1), null);
      }
    }
    return Xe.of(i);
  }
  decomposeLeft(e, t) {
    t.push(new ye(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new ye(this.length - e - 1));
  }
  updateHeight(e, t = 0, i = false, s) {
    let r = t + this.length;
    if (s && s.from <= t + this.length && s.more) {
      let o = [];
      let l = Math.max(t, s.from);
      let a = -1;
      for (s.from > t && o.push(new ye(s.from - t - 1).updateHeight(e, t)); l <= r && s.more;) {
        let c = e.doc.lineAt(l).length;
        if (o.length) {
          o.push(null);
        }
        let f = s.heights[s.index++];
        let u = 0;
        if (f < 0) {
          u = -f;
          f = s.heights[s.index++];
        }
        if (a == -1) {
          a = f;
        } else if (Math.abs(f - a) >= es) {
          a = -2;
        }
        let d = new Be(c, f, u);
        d.outdated = false;
        o.push(d);
        l += c + 1;
      }
      if (l <= r) {
        o.push(null, new ye(r - l).updateHeight(e, l));
      }
      let h = Xe.of(o);
      if (a < 0 || Math.abs(h.height - this.height) >= es || Math.abs(a - this.heightMetrics(e, t).perLine) >= es) {
        Ci = true;
      }
      return ys(this, h);
    } else if (i || this.outdated) {
      this.setHeight(e.heightForGap(t, t + this.length));
      this.outdated = false;
    }
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class Dp extends Xe {
  constructor(e, t, i) {
    super(e.length + t + i.length, e.height + i.height, t | (e.outdated || i.outdated ? 2 : 0));
    this.left = e;
    this.right = i;
    this.size = e.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, i, s) {
    let r = i + this.left.height;
    if (e < r) {
      return this.left.blockAt(e, t, i, s);
    } else {
      return this.right.blockAt(e, t, r, s + this.left.length + this.break);
    }
  }
  lineAt(e, t, i, s, r) {
    let o = s + this.left.height;
    let l = r + this.left.length + this.break;
    let a = t == H.ByHeight ? e < o : e < l;
    let h = a ? this.left.lineAt(e, t, i, s, r) : this.right.lineAt(e, t, i, o, l);
    if (this.break || (a ? h.to < l : h.from > l)) {
      return h;
    }
    let c = t == H.ByPosNoHeight ? H.ByPosNoHeight : H.ByPos;
    if (a) {
      return h.join(this.right.lineAt(l, c, i, o, l));
    } else {
      return this.left.lineAt(l, c, i, s, r).join(h);
    }
  }
  forEachLine(e, t, i, s, r, o) {
    let l = s + this.left.height;
    let a = r + this.left.length + this.break;
    if (this.break) {
      if (e < a) {
        this.left.forEachLine(e, t, i, s, r, o);
      }
      if (t >= a) {
        this.right.forEachLine(e, t, i, l, a, o);
      }
    } else {
      let h = this.lineAt(a, H.ByPos, i, s, r);
      if (e < h.from) {
        this.left.forEachLine(e, h.from - 1, i, s, r, o);
      }
      if (h.to >= e && h.from <= t) {
        o(h);
      }
      if (t > h.to) {
        this.right.forEachLine(h.to + 1, t, i, l, a, o);
      }
    }
  }
  replace(e, t, i) {
    let s = this.left.length + this.break;
    if (t < s) {
      return this.balanced(this.left.replace(e, t, i), this.right);
    }
    if (e > this.left.length) {
      return this.balanced(this.left, this.right.replace(e - s, t - s, i));
    }
    let r = [];
    if (e > 0) {
      this.decomposeLeft(e, r);
    }
    let o = r.length;
    for (let l of i) {
      r.push(l);
    }
    if (e > 0) {
      $a(r, o - 1);
    }
    if (t < this.length) {
      let l = r.length;
      this.decomposeRight(t, r);
      $a(r, l);
    }
    return Xe.of(r);
  }
  decomposeLeft(e, t) {
    let i = this.left.length;
    if (e <= i) {
      return this.left.decomposeLeft(e, t);
    }
    t.push(this.left);
    if (this.break) {
      i++;
      if (e >= i) {
        t.push(null);
      }
    }
    if (e > i) {
      this.right.decomposeLeft(e - i, t);
    }
  }
  decomposeRight(e, t) {
    let i = this.left.length;
    let s = i + this.break;
    if (e >= s) {
      return this.right.decomposeRight(e - s, t);
    }
    if (e < i) {
      this.left.decomposeRight(e, t);
    }
    if (this.break && e < s) {
      t.push(null);
    }
    t.push(this.right);
  }
  balanced(e, t) {
    if (e.size > t.size * 2 || t.size > e.size * 2) {
      return Xe.of(this.break ? [e, null, t] : [e, t]);
    } else {
      this.left = ys(this.left, e);
      this.right = ys(this.right, t);
      this.setHeight(e.height + t.height);
      this.outdated = e.outdated || t.outdated;
      this.size = e.size + t.size;
      this.length = e.length + this.break + t.length;
      return this;
    }
  }
  updateHeight(e, t = 0, i = false, s) {
    let {
      left: r,
      right: o
    } = this;
    let l = t + r.length + this.break;
    let a = null;
    if (s && s.from <= t + r.length && s.more) {
      a = r = r.updateHeight(e, t, i, s);
    } else {
      r.updateHeight(e, t, i);
    }
    if (s && s.from <= l + o.length && s.more) {
      a = o = o.updateHeight(e, l, i, s);
    } else {
      o.updateHeight(e, l, i);
    }
    if (a) {
      return this.balanced(r, o);
    } else {
      this.height = this.left.height + this.right.height;
      this.outdated = false;
      return this;
    }
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function $a(n, e) {
  let t;
  let i;
  if (n[e] == null && (t = n[e - 1]) instanceof ye && (i = n[e + 1]) instanceof ye) {
    n.splice(e - 1, 3, new ye(t.length + 1 + i.length));
  }
}
const Lp = 5;
class rl {
  constructor(e, t) {
    this.pos = e;
    this.oracle = t;
    this.nodes = [];
    this.lineStart = -1;
    this.lineEnd = -1;
    this.covering = null;
    this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd);
      let s = this.nodes[this.nodes.length - 1];
      if (s instanceof Be) {
        s.length += i - this.pos;
      } else if (i > this.pos || !this.isCovered) {
        this.nodes.push(new Be(i - this.pos, -1, 0));
      }
      this.writtenTo = i;
      if (t > i) {
        this.nodes.push(null);
        this.writtenTo++;
        this.lineStart = -1;
      }
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let s = i.widget ? i.widget.estimatedHeight : 0;
      let r = i.widget ? i.widget.lineBreaks : 0;
      if (s < 0) {
        s = this.oracle.lineHeight;
      }
      let o = t - e;
      if (i.block) {
        this.addBlock(new Tf(o, s, i));
      } else if (o || r || s >= Lp) {
        this.addLineDeco(s, r, o);
      }
    } else if (t > e) {
      this.span(e, t);
    }
    if (this.lineEnd > -1 && this.lineEnd < this.pos) {
      this.lineEnd = this.oracle.doc.lineAt(this.pos).to;
    }
  }
  enterLine() {
    if (this.lineStart > -1) {
      return;
    }
    let {
      from: e,
      to: t
    } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e;
    this.lineEnd = t;
    if (this.writtenTo < e) {
      if (this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) {
        this.nodes.push(this.blankContent(this.writtenTo, e - 1));
      }
      this.nodes.push(null);
    }
    if (this.pos > e) {
      this.nodes.push(new Be(this.pos - e, -1, 0));
    }
    this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let i = new ye(t - e);
    if (this.oracle.doc.lineAt(e).to == t) {
      i.flags |= 4;
    }
    return i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof Be) {
      return e;
    }
    let t = new Be(0, -1, 0);
    this.nodes.push(t);
    return t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    if (t && t.startSide > 0 && !this.isCovered) {
      this.ensureLine();
    }
    this.nodes.push(e);
    this.writtenTo = this.pos = this.pos + e.length;
    if (t && t.endSide > 0) {
      this.covering = e;
    }
  }
  addLineDeco(e, t, i) {
    let s = this.ensureLine();
    s.length += i;
    s.collapsed += i;
    s.widgetHeight = Math.max(s.widgetHeight, e);
    s.breaks += t;
    this.writtenTo = this.pos = this.pos + i;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    if (this.lineStart > -1 && !(t instanceof Be) && !this.isCovered) {
      this.nodes.push(new Be(0, -1, 0));
    } else if (this.writtenTo < this.pos || t == null) {
      this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    }
    let i = e;
    for (let s of this.nodes) {
      if (s instanceof Be) {
        s.updateHeight(this.oracle, i);
      }
      i += s ? s.length : 1;
    }
    return this.nodes;
  }
  static build(e, t, i, s) {
    let r = new rl(i, e);
    L.spans(t, i, s, r, 0);
    return r.finish(i);
  }
}
function Np(n, e, t) {
  let i = new Bp();
  L.compare(n, e, t, i, 0);
  return i.changes;
}
class Bp {
  constructor() {
    this.changes = [];
  }
  compareRange() {}
  comparePoint(e, t, i, s) {
    if (e < t || i && i.heightRelevant || s && s.heightRelevant) {
      gi(e, t, this.changes, 5);
    }
  }
}
function Yp(n, e) {
  let t = n.getBoundingClientRect();
  let i = n.ownerDocument;
  let s = i.defaultView || window;
  let r = Math.max(0, t.left);
  let o = Math.min(s.innerWidth, t.right);
  let l = Math.max(0, t.top);
  let a = Math.min(s.innerHeight, t.bottom);
  for (let h = n.parentNode; h && h != i.body;) {
    if (h.nodeType == 1) {
      let c = h;
      let f = window.getComputedStyle(c);
      if ((c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) && f.overflow != "visible") {
        let u = c.getBoundingClientRect();
        r = Math.max(r, u.left);
        o = Math.min(o, u.right);
        l = Math.max(l, u.top);
        a = Math.min(h == n.parentNode ? s.innerHeight : a, u.bottom);
      }
      h = f.position == "absolute" || f.position == "fixed" ? c.offsetParent : c.parentNode;
    } else if (h.nodeType == 11) {
      h = h.host;
    } else {
      break;
    }
  }
  return {
    left: r - t.left,
    right: Math.max(r, o) - t.left,
    top: l - (t.top + e),
    bottom: Math.max(l, a) - (t.top + e)
  };
}
function Gp(n) {
  let e = n.getBoundingClientRect();
  let t = n.ownerDocument.defaultView || window;
  return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0;
}
function Ip(n, e) {
  let t = n.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
class pr {
  constructor(e, t, i, s) {
    this.from = e;
    this.to = t;
    this.size = i;
    this.displaySize = s;
  }
  static same(e, t) {
    if (e.length != t.length) {
      return false;
    }
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      let r = t[i];
      if (s.from != r.from || s.to != r.to || s.size != r.size) {
        return false;
      }
    }
    return true;
  }
  draw(e, t) {
    return X.replace({
      widget: new Zp(this.displaySize * (t ? e.scaleY : e.scaleX), t)
    }).range(this.from, this.to);
  }
}
class Zp extends _e {
  constructor(e, t) {
    super();
    this.size = e;
    this.vertical = t;
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    if (this.vertical) {
      e.style.height = this.size + "px";
    } else {
      e.style.width = this.size + "px";
      e.style.height = "2px";
      e.style.display = "inline-block";
    }
    return e;
  }
  get estimatedHeight() {
    if (this.vertical) {
      return this.size;
    } else {
      return -1;
    }
  }
}
class Xa {
  constructor(e, t) {
    this.view = e;
    this.state = t;
    this.pixelViewport = {
      left: 0,
      right: window.innerWidth,
      top: 0,
      bottom: 0
    };
    this.inView = true;
    this.paddingTop = 0;
    this.paddingBottom = 0;
    this.contentDOMWidth = 0;
    this.contentDOMHeight = 0;
    this.editorHeight = 0;
    this.editorWidth = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.scrollOffset = 0;
    this.scrolledToBottom = false;
    this.scrollAnchorPos = 0;
    this.scrollAnchorHeight = -1;
    this.scaler = Ea;
    this.scrollTarget = null;
    this.printing = false;
    this.mustMeasureContent = true;
    this.defaultTextDirection = F.LTR;
    this.visibleRanges = [];
    this.mustEnforceCursorAssoc = false;
    let i = t.facet(tl).some(s => typeof s != "function" && s.class == "cm-lineWrapping");
    this.heightOracle = new Rp(i);
    this.stateDeco = Aa(t);
    this.heightMap = Xe.empty().applyChanges(this.stateDeco, I.empty, this.heightOracle.setDoc(t.doc), [new Ge(0, 0, 0, t.doc.length)]);
    for (let s = 0; s < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); s++);
    this.updateViewportLines();
    this.lineGaps = this.ensureLineGaps([]);
    this.lineGapDeco = X.set(this.lineGaps.map(s => s.draw(this, false)));
    this.scrollParent = e.scrollDOM;
    this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport];
    let {
      main: t
    } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let s = i ? t.head : t.anchor;
      if (!e.some(({
        from: r,
        to: o
      }) => s >= r && s <= o)) {
        let {
          from: r,
          to: o
        } = this.lineBlockAt(s);
        e.push(new An(r, o));
      }
    }
    this.viewports = e.sort((i, s) => i.from - s.from);
    return this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    this.scaler = this.heightMap.height <= 7000000 ? Ea : new ol(this.heightOracle, this.heightMap, this.viewports);
    if (e.eq(this.scaler)) {
      return 0;
    } else {
      return 2;
    }
  }
  updateViewportLines() {
    this.viewportLines = [];
    this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, e => {
      this.viewportLines.push(Ii(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = Aa(this.state);
    let s = e.changedRanges;
    let r = Ge.extendWithRanges(s, Np(i, this.stateDeco, e ? e.changes : de.empty(this.state.doc.length)));
    let o = this.heightMap.height;
    let l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
    Ta();
    this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), r);
    if (this.heightMap.height != o || Ci) {
      e.flags |= 2;
    }
    if (l) {
      this.scrollAnchorPos = e.changes.mapPos(l.from, -1);
      this.scrollAnchorHeight = l.top;
    } else {
      this.scrollAnchorPos = -1;
      this.scrollAnchorHeight = o;
    }
    let a = r.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    if (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) {
      a = this.getViewport(0, t);
    }
    let h = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a;
    e.flags |= this.updateForViewport();
    if (h || !e.changes.empty || e.flags & 2) {
      this.updateViewportLines();
    }
    if (this.lineGaps.length || this.viewport.to - this.viewport.from > 4000) {
      this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes)));
    }
    e.flags |= this.computeVisibleRanges(e.changes);
    if (t) {
      this.scrollTarget = t;
    }
    if (!this.mustEnforceCursorAssoc && (e.selectionSet || e.focusChanged) && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(lf)) {
      this.mustEnforceCursorAssoc = true;
    }
  }
  measure() {
    let {
      view: e
    } = this;
    let t = e.contentDOM;
    let i = window.getComputedStyle(t);
    let s = this.heightOracle;
    let r = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? F.RTL : F.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r) || this.mustMeasureContent === "refresh";
    let l = t.getBoundingClientRect();
    let a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height;
    this.mustMeasureContent = false;
    let h = 0;
    let c = 0;
    if (l.width && l.height) {
      let {
        scaleX: w,
        scaleY: S
      } = Yc(t, l);
      if (w > 0.005 && Math.abs(this.scaleX - w) > 0.005 || S > 0.005 && Math.abs(this.scaleY - S) > 0.005) {
        this.scaleX = w;
        this.scaleY = S;
        h |= 16;
        o = a = true;
      }
    }
    let f = (parseInt(i.paddingTop) || 0) * this.scaleY;
    let u = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    if (this.paddingTop != f || this.paddingBottom != u) {
      this.paddingTop = f;
      this.paddingBottom = u;
      h |= 18;
    }
    if (this.editorWidth != e.scrollDOM.clientWidth) {
      if (s.lineWrapping) {
        a = true;
      }
      this.editorWidth = e.scrollDOM.clientWidth;
      h |= 16;
    }
    let d = Gc(this.view.contentDOM, false).y;
    if (d != this.scrollParent) {
      this.scrollParent = d;
      this.scrollAnchorHeight = -1;
      this.scrollOffset = 0;
    }
    let m = this.getScrollOffset();
    if (this.scrollOffset != m) {
      this.scrollAnchorHeight = -1;
      this.scrollOffset = m;
    }
    this.scrolledToBottom = Zc(this.scrollParent || e.win);
    let p = (this.printing ? Ip : Yp)(t, this.paddingTop);
    let O = p.top - this.pixelViewport.top;
    let b = p.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p;
    let x = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (x != this.inView) {
      this.inView = x;
      if (x) {
        a = true;
      }
    }
    if (!this.inView && !this.scrollTarget && !Gp(e.dom)) {
      return 0;
    }
    let Q = l.width;
    if (this.contentDOMWidth != Q || this.editorHeight != e.scrollDOM.clientHeight) {
      this.contentDOMWidth = l.width;
      this.editorHeight = e.scrollDOM.clientHeight;
      h |= 16;
    }
    if (a) {
      let w = e.docView.measureVisibleLineHeights(this.viewport);
      if (s.mustRefreshForHeights(w)) {
        o = true;
      }
      if (o || s.lineWrapping && Math.abs(Q - this.contentDOMWidth) > s.charWidth) {
        let {
          lineHeight: S,
          charWidth: k,
          textHeight: A
        } = e.docView.measureTextSize();
        o = S > 0 && s.refresh(r, S, k, A, Math.max(5, Q / k), w);
        if (o) {
          e.docView.minWidth = 0;
          h |= 16;
        }
      }
      if (O > 0 && b > 0) {
        c = Math.max(O, b);
      } else if (O < 0 && b < 0) {
        c = Math.min(O, b);
      }
      Ta();
      for (let S of this.viewports) {
        let k = S.from == this.viewport.from ? w : e.docView.measureVisibleLineHeights(S);
        this.heightMap = (o ? Xe.empty().applyChanges(this.stateDeco, I.empty, this.heightOracle, [new Ge(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(s, 0, o, new Vp(S.from, k));
      }
      if (Ci) {
        h |= 2;
      }
    }
    let C = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    if (C) {
      if (h & 2) {
        h |= this.updateScaler();
      }
      this.viewport = this.getViewport(c, this.scrollTarget);
      h |= this.updateForViewport();
    }
    if (h & 2 || C) {
      this.updateViewportLines();
    }
    if (this.lineGaps.length || this.viewport.to - this.viewport.from > 4000) {
      this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e));
    }
    h |= this.computeVisibleRanges();
    if (this.mustEnforceCursorAssoc) {
      this.mustEnforceCursorAssoc = false;
      e.docView.enforceCursorAssoc();
    }
    return h;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1000 / 2));
    let s = this.heightMap;
    let r = this.heightOracle;
    let {
      visibleTop: o,
      visibleBottom: l
    } = this;
    let a = new An(s.lineAt(o - i * 1000, H.ByHeight, r, 0, 0).from, s.lineAt(l + (1 - i) * 1000, H.ByHeight, r, 0, 0).to);
    if (t) {
      let {
        head: h
      } = t.range;
      if (h < a.from || h > a.to) {
        let c = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top);
        let f = s.lineAt(h, H.ByPos, r, 0, 0);
        let u;
        if (t.y == "center") {
          u = (f.top + f.bottom) / 2 - c / 2;
        } else if (t.y == "start" || t.y == "nearest" && h < a.from) {
          u = f.top;
        } else {
          u = f.bottom - c;
        }
        a = new An(s.lineAt(u - 500, H.ByHeight, r, 0, 0).from, s.lineAt(u + c + 500, H.ByHeight, r, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1);
    let s = t.mapPos(e.to, 1);
    return new An(this.heightMap.lineAt(i, H.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, H.ByPos, this.heightOracle, 0, 0).to);
  }
  viewportIsAppropriate({
    from: e,
    to: t
  }, i = 0) {
    if (!this.inView) {
      return true;
    }
    let {
      top: s
    } = this.heightMap.lineAt(e, H.ByPos, this.heightOracle, 0, 0);
    let {
      bottom: r
    } = this.heightMap.lineAt(t, H.ByPos, this.heightOracle, 0, 0);
    let {
      visibleTop: o,
      visibleBottom: l
    } = this;
    return (e == 0 || s <= o - Math.max(10, Math.min(-i, 250))) && (t == this.state.doc.length || r >= l + Math.max(10, Math.min(i, 250))) && s > o - 2000 && r < l + 2000;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty) {
      return e;
    }
    let i = [];
    for (let s of e) {
      if (!t.touchesRange(s.from, s.to)) {
        i.push(new pr(t.mapPos(s.from), t.mapPos(s.to), s.size, s.displaySize));
      }
    }
    return i;
  }
  ensureLineGaps(e, t) {
    let i = this.heightOracle.lineWrapping;
    let s = i ? 10000 : 2000;
    let r = s >> 1;
    let o = s << 1;
    if (this.defaultTextDirection != F.LTR && !i) {
      return [];
    }
    let l = [];
    let a = (c, f, u, d) => {
      if (f - c < r) {
        return;
      }
      let m = this.state.selection.main;
      let p = [m.from];
      if (!m.empty) {
        p.push(m.to);
      }
      for (let b of p) {
        if (b > c && b < f) {
          a(c, b - 10, u, d);
          a(b + 10, f, u, d);
          return;
        }
      }
      let O = jp(e, b => b.from >= u.from && b.to <= u.to && Math.abs(b.from - c) < r && Math.abs(b.to - f) < r && !p.some(x => b.from < x && b.to > x));
      if (!O) {
        if (f < u.to && t && i && t.visibleRanges.some(Q => Q.from <= f && Q.to >= f)) {
          let Q = t.moveToLineBoundary(y.cursor(f), false, true).head;
          if (Q > c) {
            f = Q;
          }
        }
        let b = this.gapSize(u, c, f, d);
        let x = i || b < 2000000 ? b : 2000000;
        O = new pr(c, f, b, x);
      }
      l.push(O);
    };
    let h = c => {
      if (c.length < o || c.type != Se.Text) {
        return;
      }
      let f = zp(c.from, c.to, this.stateDeco);
      if (f.total < o) {
        return;
      }
      let u = this.scrollTarget ? this.scrollTarget.range.head : null;
      let d;
      let m;
      if (i) {
        let p = s / this.heightOracle.lineLength * this.heightOracle.lineHeight;
        let O;
        let b;
        if (u != null) {
          let x = Mn(f, u);
          let Q = ((this.visibleBottom - this.visibleTop) / 2 + p) / c.height;
          O = x - Q;
          b = x + Q;
        } else {
          O = (this.visibleTop - c.top - p) / c.height;
          b = (this.visibleBottom - c.top + p) / c.height;
        }
        d = Pn(f, O);
        m = Pn(f, b);
      } else {
        let p = f.total * this.heightOracle.charWidth;
        let O = s * this.heightOracle.charWidth;
        let b = 0;
        if (p > 2000000) {
          for (let S of e) {
            if (S.from >= c.from && S.from < c.to && S.size != S.displaySize && S.from * this.heightOracle.charWidth + b < this.pixelViewport.left) {
              b = S.size - S.displaySize;
            }
          }
        }
        let x = this.pixelViewport.left + b;
        let Q = this.pixelViewport.right + b;
        let C;
        let w;
        if (u != null) {
          let S = Mn(f, u);
          let k = ((Q - x) / 2 + O) / p;
          C = S - k;
          w = S + k;
        } else {
          C = (x - O) / p;
          w = (Q + O) / p;
        }
        d = Pn(f, C);
        m = Pn(f, w);
      }
      if (d > c.from) {
        a(c.from, d, c, f);
      }
      if (m < c.to) {
        a(m, c.to, c, f);
      }
    };
    for (let c of this.viewportLines) {
      if (Array.isArray(c.type)) {
        c.type.forEach(h);
      } else {
        h(c);
      }
    }
    return l;
  }
  gapSize(e, t, i, s) {
    let r = Mn(s, i) - Mn(s, t);
    if (this.heightOracle.lineWrapping) {
      return e.height * r;
    } else {
      return s.total * this.heightOracle.charWidth * r;
    }
  }
  updateLineGaps(e) {
    if (!pr.same(e, this.lineGaps)) {
      this.lineGaps = e;
      this.lineGapDeco = X.set(e.map(t => t.draw(this, this.heightOracle.lineWrapping)));
    }
  }
  computeVisibleRanges(e) {
    let t = this.stateDeco;
    if (this.lineGaps.length) {
      t = t.concat(this.lineGapDeco);
    }
    let i = [];
    L.spans(t, this.viewport.from, this.viewport.to, {
      span(r, o) {
        i.push({
          from: r,
          to: o
        });
      },
      point() {}
    }, 20);
    let s = 0;
    if (i.length != this.visibleRanges.length) {
      s = 12;
    } else {
      for (let r = 0; r < i.length && !(s & 8); r++) {
        let o = this.visibleRanges[r];
        let l = i[r];
        if (o.from != l.from || o.to != l.to) {
          s |= 4;
          if (!e || e.mapPos(o.from, -1) != l.from || e.mapPos(o.to, 1) != l.to) {
            s |= 8;
          }
        }
      }
    }
    this.visibleRanges = i;
    return s;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find(t => t.from <= e && t.to >= e) || Ii(this.heightMap.lineAt(e, H.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find(t => t.top <= e && t.bottom >= e) || Ii(this.heightMap.lineAt(this.scaler.fromDOM(e), H.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  getScrollOffset() {
    return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY;
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    if (t.from >= this.viewport.from || this.viewportLines[0].top - e > 200) {
      return t;
    } else {
      return this.viewportLines[0];
    }
  }
  elementAtHeight(e) {
    return Ii(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class An {
  constructor(e, t) {
    this.from = e;
    this.to = t;
  }
}
function zp(n, e, t) {
  let i = [];
  let s = n;
  let r = 0;
  L.spans(t, n, e, {
    span() {},
    point(o, l) {
      if (o > s) {
        i.push({
          from: s,
          to: o
        });
        r += o - s;
      }
      s = l;
    }
  }, 20);
  if (s < e) {
    i.push({
      from: s,
      to: e
    });
    r += e - s;
  }
  return {
    total: r,
    ranges: i
  };
}
function Pn({
  total: n,
  ranges: e
}, t) {
  if (t <= 0) {
    return e[0].from;
  }
  if (t >= 1) {
    return e[e.length - 1].to;
  }
  let i = Math.floor(n * t);
  for (let s = 0;; s++) {
    let {
      from: r,
      to: o
    } = e[s];
    let l = o - r;
    if (i <= l) {
      return r + i;
    }
    i -= l;
  }
}
function Mn(n, e) {
  let t = 0;
  for (let {
    from: i,
    to: s
  } of n.ranges) {
    if (e <= s) {
      t += e - i;
      break;
    }
    t += s - i;
  }
  return t / n.total;
}
function jp(n, e) {
  for (let t of n) {
    if (e(t)) {
      return t;
    }
  }
}
const Ea = {
  toDOM(n) {
    return n;
  },
  fromDOM(n) {
    return n;
  },
  scale: 1,
  eq(n) {
    return n == this;
  }
};
function Aa(n) {
  let e = n.facet(Gs).filter(i => typeof i != "function");
  let t = n.facet(il).filter(i => typeof i != "function");
  if (t.length) {
    e.push(L.join(t));
  }
  return e;
}
class ol {
  constructor(e, t, i) {
    let s = 0;
    let r = 0;
    let o = 0;
    this.viewports = i.map(({
      from: l,
      to: a
    }) => {
      let h = t.lineAt(l, H.ByPos, e, 0, 0).top;
      let c = t.lineAt(a, H.ByPos, e, 0, 0).bottom;
      s += c - h;
      return {
        from: l,
        to: a,
        top: h,
        bottom: c,
        domTop: 0,
        domBottom: 0
      };
    });
    this.scale = (7000000 - s) / (t.height - s);
    for (let l of this.viewports) {
      l.domTop = o + (l.top - r) * this.scale;
      o = l.domBottom = l.domTop + (l.bottom - l.top);
      r = l.bottom;
    }
  }
  toDOM(e) {
    for (let t = 0, i = 0, s = 0;; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.top) {
        return s + (e - i) * this.scale;
      }
      if (e <= r.bottom) {
        return r.domTop + (e - r.top);
      }
      i = r.bottom;
      s = r.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, i = 0, s = 0;; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.domTop) {
        return i + (e - s) / this.scale;
      }
      if (e <= r.domBottom) {
        return r.top + (e - r.domTop);
      }
      i = r.bottom;
      s = r.domBottom;
    }
  }
  eq(e) {
    if (e instanceof ol) {
      return this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, i) => t.from == e.viewports[i].from && t.to == e.viewports[i].to);
    } else {
      return false;
    }
  }
}
function Ii(n, e) {
  if (e.scale == 1) {
    return n;
  }
  let t = e.toDOM(n.top);
  let i = e.toDOM(n.bottom);
  return new Ue(n.from, n.length, t, i - t, Array.isArray(n._content) ? n._content.map(s => Ii(s, e)) : n._content);
}
const Rn = T.define({
  combine: n => n.join(" ")
});
const xo = T.define({
  combine: n => n.indexOf(true) > -1
});
const Qo = Rt.newName();
const $f = Rt.newName();
const Xf = Rt.newName();
const Ef = {
  "&light": "." + $f,
  "&dark": "." + Xf
};
function So(n, e, t) {
  return new Rt(e, {
    finish(i) {
      if (/&/.test(i)) {
        return i.replace(/&\w*/, s => {
          if (s == "&") {
            return n;
          }
          if (!t || !t[s]) {
            throw new RangeError(`Unsupported selector: ${s}`);
          }
          return t[s];
        });
      } else {
        return n + " " + i;
      }
    }
  });
}
const _p = So("." + Qo, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0,
    overflowAnchor: "none"
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    boxSizing: "border-box",
    minHeight: "100%",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": {
    caretColor: "black"
  },
  "&dark .cm-content": {
    caretColor: "white"
  },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  "@keyframes cm-blink": {
    "0%": {},
    "50%": {
      opacity: 0
    },
    "100%": {}
  },
  "@keyframes cm-blink2": {
    "0%": {},
    "50%": {
      opacity: 0
    },
    "100%": {}
  },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#ddd"
  },
  ".cm-selectionHandle": {
    backgroundColor: "currentColor",
    width: "1.5px"
  },
  ".cm-selectionHandle-start::before, .cm-selectionHandle-end::before": {
    content: "\"\"",
    backgroundColor: "inherit",
    borderRadius: "50%",
    width: "8px",
    height: "8px",
    position: "absolute",
    left: "-3.25px"
  },
  ".cm-selectionHandle-start::before": {
    top: "-8px"
  },
  ".cm-selectionHandle-end::before": {
    bottom: "-8px"
  },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  ".cm-iso": {
    unicodeBidi: "isolate"
  },
  ".cm-announced": {
    position: "fixed",
    top: "-10000px"
  },
  "@media print": {
    ".cm-announced": {
      display: "none"
    }
  },
  "&light .cm-activeLine": {
    backgroundColor: "#cceeff44"
  },
  "&dark .cm-activeLine": {
    backgroundColor: "#99eeff33"
  },
  "&light .cm-specialChar": {
    color: "red"
  },
  "&dark .cm-specialChar": {
    color: "#f78"
  },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    zIndex: 200
  },
  ".cm-gutters-before": {
    insetInlineStart: 0
  },
  ".cm-gutters-after": {
    insetInlineEnd: 0
  },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    border: "0px solid #ddd",
    "&.cm-gutters-before": {
      borderRightWidth: "1px"
    },
    "&.cm-gutters-after": {
      borderLeftWidth: "1px"
    }
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0,
    zIndex: 300
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-dialog": {
    padding: "2px 19px 4px 6px",
    position: "relative",
    "& label": {
      fontSize: "80%"
    }
  },
  ".cm-dialog-close": {
    position: "absolute",
    top: "3px",
    right: "4px",
    backgroundColor: "inherit",
    border: "none",
    font: "inherit",
    fontSize: "14px",
    padding: "0"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top",
    userSelect: "none"
  },
  ".cm-highlightSpace": {
    backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
    backgroundPosition: "center"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, Ef);
const Fp = {
  childList: true,
  characterData: true,
  subtree: true,
  attributes: true,
  characterDataOldValue: true
};
const Or = $.ie && $.ie_version <= 11;
class Up {
  constructor(e) {
    this.view = e;
    this.active = false;
    this.editContext = null;
    this.selectionRange = new Cm();
    this.selectionChanged = false;
    this.delayedFlush = -1;
    this.resizeTimeout = -1;
    this.queue = [];
    this.delayedAndroidKey = null;
    this.flushingAndroidKey = -1;
    this.lastChange = 0;
    this.scrollTargets = [];
    this.intersection = null;
    this.resizeScroll = null;
    this.intersecting = false;
    this.gapIntersection = null;
    this.gaps = [];
    this.printQuery = null;
    this.parentCheck = -1;
    this.dom = e.contentDOM;
    this.observer = new MutationObserver(t => {
      for (let i of t) {
        this.queue.push(i);
      }
      if (($.ie && $.ie_version <= 11 || $.ios && e.composing) && t.some(i => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length)) {
        this.flushSoon();
      } else {
        this.flush();
      }
    });
    if (window.EditContext && $.android && e.constructor.EDIT_CONTEXT !== false && (!$.chrome || !($.chrome_version < 126))) {
      this.editContext = new Kp(e);
      if (e.state.facet(yt)) {
        e.contentDOM.editContext = this.editContext.editContext;
      }
    }
    if (Or) {
      this.onCharData = t => {
        this.queue.push({
          target: t.target,
          type: "characterData",
          oldValue: t.prevValue
        });
        this.flushSoon();
      };
    }
    this.onSelectionChange = this.onSelectionChange.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onPrint = this.onPrint.bind(this);
    this.onScroll = this.onScroll.bind(this);
    if (window.matchMedia) {
      this.printQuery = window.matchMedia("print");
    }
    if (typeof ResizeObserver == "function") {
      this.resizeScroll = new ResizeObserver(() => {
        if (this.view.docView?.lastUpdate < Date.now() - 75) {
          this.onResize();
        }
      });
      this.resizeScroll.observe(e.scrollDOM);
    }
    this.addWindowListeners(this.win = e.win);
    this.start();
    if (typeof IntersectionObserver == "function") {
      this.intersection = new IntersectionObserver(t => {
        if (this.parentCheck < 0) {
          this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1000);
        }
        if (t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting) {
          this.intersecting = !this.intersecting;
          if (this.intersecting != this.view.inView) {
            this.onScrollChanged(document.createEvent("Event"));
          }
        }
      }, {
        threshold: [0, 0.001]
      });
      this.intersection.observe(this.dom);
      this.gapIntersection = new IntersectionObserver(t => {
        if (t.length > 0 && t[t.length - 1].intersectionRatio > 0) {
          this.onScrollChanged(document.createEvent("Event"));
        }
      }, {});
    }
    this.listenForScroll();
    this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers("scroll", e);
    if (this.intersecting) {
      this.view.measure();
    }
  }
  onScroll(e) {
    if (this.intersecting) {
      this.flush(false);
    }
    if (this.editContext) {
      this.view.requestMeasure(this.editContext.measureReq);
    }
    this.onScrollChanged(e);
  }
  onResize() {
    if (this.resizeTimeout < 0) {
      this.resizeTimeout = setTimeout(() => {
        this.resizeTimeout = -1;
        this.view.requestMeasure();
      }, 50);
    }
  }
  onPrint(e) {
    if (e.type != "change" && !!e.type || !!e.matches) {
      this.view.viewState.printing = true;
      this.view.measure();
      setTimeout(() => {
        this.view.viewState.printing = false;
        this.view.requestMeasure();
      }, 500);
    }
  }
  updateGaps(e) {
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, i) => t != e[i]))) {
      this.gapIntersection.disconnect();
      for (let t of e) {
        this.gapIntersection.observe(t);
      }
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey) {
      return;
    }
    let {
      view: i
    } = this;
    let s = this.selectionRange;
    if (i.state.facet(yt) ? i.root.activeElement != this.dom : !_i(this.dom, s)) {
      return;
    }
    let r = s.anchorNode && i.docView.tile.nearest(s.anchorNode);
    if (r && r.isWidget() && r.widget.ignoreEvent(e)) {
      if (!t) {
        this.selectionChanged = false;
      }
      return;
    }
    if (($.ie && $.ie_version <= 11 || $.android && $.chrome) && !i.state.selection.main.empty && s.focusNode && Ui(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset)) {
      this.flushSoon();
    } else {
      this.flush(false);
    }
  }
  readSelectionRange() {
    let {
      view: e
    } = this;
    let t = rn(e.root);
    if (!t) {
      return false;
    }
    let i = $.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && Hp(this.view, t) || t;
    if (!i || this.selectionRange.eq(i)) {
      return false;
    }
    let s = _i(this.dom, i);
    if (s && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && Tm(this.dom, i)) {
      this.view.inputState.lastFocusTime = 0;
      e.docView.updateSelection();
      return false;
    } else {
      this.selectionRange.setRange(i);
      if (s) {
        this.selectionChanged = true;
      }
      return true;
    }
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset);
    this.selectionChanged = false;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0;
    let t = null;
    for (let i = this.dom; i;) {
      if (i.nodeType == 1) {
        if (!t && e < this.scrollTargets.length && this.scrollTargets[e] == i) {
          e++;
        } else {
          t ||= this.scrollTargets.slice(0, e);
        }
        if (t) {
          t.push(i);
        }
        i = i.assignedSlot || i.parentNode;
      } else if (i.nodeType == 11) {
        i = i.host;
      } else {
        break;
      }
    }
    if (e < this.scrollTargets.length && !t) {
      t = this.scrollTargets.slice(0, e);
    }
    if (t) {
      for (let i of this.scrollTargets) {
        i.removeEventListener("scroll", this.onScroll);
      }
      for (let i of this.scrollTargets = t) {
        i.addEventListener("scroll", this.onScroll);
      }
    }
  }
  ignore(e) {
    if (!this.active) {
      return e();
    }
    try {
      this.stop();
      return e();
    } finally {
      this.start();
      this.clear();
    }
  }
  start() {
    if (!this.active) {
      this.observer.observe(this.dom, Fp);
      if (Or) {
        this.dom.addEventListener("DOMCharacterDataModified", this.onCharData);
      }
      this.active = true;
    }
  }
  stop() {
    if (this.active) {
      this.active = false;
      this.observer.disconnect();
      if (Or) {
        this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData);
      }
    }
  }
  clear() {
    this.processRecords();
    this.queue.length = 0;
    this.selectionChanged = false;
  }
  delayAndroidKey(e, t) {
    var i;
    if (!this.delayedAndroidKey) {
      let s = () => {
        let r = this.delayedAndroidKey;
        if (r) {
          this.clearDelayedAndroidKey();
          this.view.inputState.lastKeyCode = r.keyCode;
          this.view.inputState.lastKeyTime = Date.now();
          if (!this.flush() && r.force) {
            bi(this.dom, r.key, r.keyCode);
          }
        }
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(s);
    }
    if (!this.delayedAndroidKey || e == "Enter") {
      this.delayedAndroidKey = {
        key: e,
        keyCode: t,
        force: this.lastChange < Date.now() - 50 || (i = this.delayedAndroidKey) !== null && i !== undefined && !!i.force
      };
    }
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey);
    this.delayedAndroidKey = null;
    this.flushingAndroidKey = -1;
  }
  flushSoon() {
    if (this.delayedFlush < 0) {
      this.delayedFlush = this.view.win.requestAnimationFrame(() => {
        this.delayedFlush = -1;
        this.flush();
      });
    }
  }
  forceFlush() {
    if (this.delayedFlush >= 0) {
      this.view.win.cancelAnimationFrame(this.delayedFlush);
      this.delayedFlush = -1;
    }
    this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords()) {
      this.queue.push(e);
    }
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    if (e.length) {
      this.queue = [];
    }
    let t = -1;
    let i = -1;
    let s = false;
    for (let r of e) {
      let o = this.readMutation(r);
      if (o) {
        if (o.typeOver) {
          s = true;
        }
        if (t == -1) {
          ({
            from: t,
            to: i
          } = o);
        } else {
          t = Math.min(o.from, t);
          i = Math.max(o.to, i);
        }
      }
    }
    return {
      from: t,
      to: i,
      typeOver: s
    };
  }
  readChange() {
    let {
      from: e,
      to: t,
      typeOver: i
    } = this.processRecords();
    let s = this.selectionChanged && _i(this.dom, this.selectionRange);
    if (e < 0 && !s) {
      return null;
    }
    if (e > -1) {
      this.lastChange = Date.now();
    }
    this.view.inputState.lastFocusTime = 0;
    this.selectionChanged = false;
    let r = new pp(this.view, e, t, i);
    this.view.docView.domChanged = {
      newSel: r.newSel ? r.newSel.main : null
    };
    return r;
  }
  flush(e = true) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey) {
      return false;
    }
    if (e) {
      this.readSelectionRange();
    }
    let t = this.readChange();
    if (!t) {
      this.view.requestMeasure();
      return false;
    }
    let i = this.view.state;
    let s = bf(this.view, t);
    if (this.view.state == i && (t.domChanged || t.newSel && !bs(this.view.state.selection, t.newSel.main))) {
      this.view.update([]);
    }
    return s;
  }
  readMutation(e) {
    let t = this.view.docView.tile.nearest(e.target);
    if (!t || t.isWidget()) {
      return null;
    }
    t.markDirty(e.type == "attributes");
    if (e.type == "childList") {
      let i = Pa(t, e.previousSibling || e.target.previousSibling, -1);
      let s = Pa(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: i ? t.posAfter(i) : t.posAtStart,
        to: s ? t.posBefore(s) : t.posAtEnd,
        typeOver: false
      };
    } else if (e.type == "characterData") {
      return {
        from: t.posAtStart,
        to: t.posAtEnd,
        typeOver: e.target.nodeValue == e.oldValue
      };
    } else {
      return null;
    }
  }
  setWindow(e) {
    if (e != this.win) {
      this.removeWindowListeners(this.win);
      this.win = e;
      this.addWindowListeners(this.win);
    }
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize);
    if (this.printQuery) {
      if (this.printQuery.addEventListener) {
        this.printQuery.addEventListener("change", this.onPrint);
      } else {
        this.printQuery.addListener(this.onPrint);
      }
    } else {
      e.addEventListener("beforeprint", this.onPrint);
    }
    e.addEventListener("scroll", this.onScroll);
    e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll);
    e.removeEventListener("resize", this.onResize);
    if (this.printQuery) {
      if (this.printQuery.removeEventListener) {
        this.printQuery.removeEventListener("change", this.onPrint);
      } else {
        this.printQuery.removeListener(this.onPrint);
      }
    } else {
      e.removeEventListener("beforeprint", this.onPrint);
    }
    e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(e) {
    if (this.editContext) {
      this.editContext.update(e);
      if (e.startState.facet(yt) != e.state.facet(yt)) {
        e.view.contentDOM.editContext = e.state.facet(yt) ? this.editContext.editContext : null;
      }
    }
  }
  destroy() {
    var e;
    var t;
    var i;
    this.stop();
    if ((e = this.intersection) !== null && e !== undefined) {
      e.disconnect();
    }
    if ((t = this.gapIntersection) !== null && t !== undefined) {
      t.disconnect();
    }
    if ((i = this.resizeScroll) !== null && i !== undefined) {
      i.disconnect();
    }
    for (let s of this.scrollTargets) {
      s.removeEventListener("scroll", this.onScroll);
    }
    this.removeWindowListeners(this.win);
    clearTimeout(this.parentCheck);
    clearTimeout(this.resizeTimeout);
    this.win.cancelAnimationFrame(this.delayedFlush);
    this.win.cancelAnimationFrame(this.flushingAndroidKey);
    if (this.editContext) {
      this.view.contentDOM.editContext = null;
      this.editContext.destroy();
    }
  }
}
function Pa(n, e, t) {
  while (e) {
    let i = ie.get(e);
    if (i && i.parent == n) {
      return i;
    }
    let s = e.parentNode;
    e = s != n.dom ? s : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function Ma(n, e) {
  let t = e.startContainer;
  let i = e.startOffset;
  let s = e.endContainer;
  let r = e.endOffset;
  let o = n.docView.domAtPos(n.state.selection.main.anchor, 1);
  if (Ui(o.node, o.offset, s, r)) {
    [t, i, s, r] = [s, r, t, i];
  }
  return {
    anchorNode: t,
    anchorOffset: i,
    focusNode: s,
    focusOffset: r
  };
}
function Hp(n, e) {
  if (e.getComposedRanges) {
    let s = e.getComposedRanges(n.root)[0];
    if (s) {
      return Ma(n, s);
    }
  }
  let t = null;
  function i(s) {
    s.preventDefault();
    s.stopImmediatePropagation();
    t = s.getTargetRanges()[0];
  }
  n.contentDOM.addEventListener("beforeinput", i, true);
  n.dom.ownerDocument.execCommand("indent");
  n.contentDOM.removeEventListener("beforeinput", i, true);
  if (t) {
    return Ma(n, t);
  } else {
    return null;
  }
}
class Kp {
  constructor(e) {
    this.from = 0;
    this.to = 0;
    this.pendingContextChange = null;
    this.handlers = Object.create(null);
    this.composing = null;
    this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(e.state.selection.main.head)
    });
    this.handlers.textupdate = i => {
      let s = e.state.selection.main;
      let {
        anchor: r,
        head: o
      } = s;
      let l = this.toEditorPos(i.updateRangeStart);
      let a = this.toEditorPos(i.updateRangeEnd);
      if (e.inputState.composing >= 0 && !this.composing) {
        this.composing = {
          contextBase: i.updateRangeStart,
          editorBase: l,
          drifted: false
        };
      }
      let h = a - l > i.text.length;
      if (l == this.from && r < this.from) {
        l = r;
      } else if (a == this.to && r > this.to) {
        a = r;
      }
      let c = yf(e.state.sliceDoc(l, a), i.text, (h ? s.from : s.to) - l, h ? "end" : null);
      if (!c) {
        let u = y.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        if (!bs(u, s)) {
          e.dispatch({
            selection: u,
            userEvent: "select"
          });
        }
        return;
      }
      let f = {
        from: c.from + l,
        to: c.toA + l,
        insert: I.of(i.text.slice(c.from, c.toB).split(`
`))
      };
      if (($.mac || $.android) && f.from == o - 1 && /^\. ?$/.test(i.text) && e.contentDOM.getAttribute("autocorrect") == "off") {
        f = {
          from: l,
          to: a,
          insert: I.of([i.text.replace(".", " ")])
        };
      }
      this.pendingContextChange = f;
      if (!e.state.readOnly) {
        let u = this.to - this.from + (f.to - f.from + f.insert.length);
        sl(e, f, y.single(this.toEditorPos(i.selectionStart, u), this.toEditorPos(i.selectionEnd, u)));
      }
      if (this.pendingContextChange) {
        this.revertPending(e.state);
        this.setSelection(e.state);
      }
      if (f.from < f.to && !f.insert.length && e.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0, i.updateRangeStart - 1), Math.min(t.text.length, i.updateRangeStart + 1)))) {
        this.handlers.compositionend(i);
      }
    };
    this.handlers.characterboundsupdate = i => {
      let s = [];
      let r = null;
      for (let o = this.toEditorPos(i.rangeStart), l = this.toEditorPos(i.rangeEnd); o < l; o++) {
        let a = e.coordsForChar(o);
        r = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || r || new DOMRect();
        s.push(r);
      }
      t.updateCharacterBounds(i.rangeStart, s);
    };
    this.handlers.textformatupdate = i => {
      let s = [];
      for (let r of i.getTextFormats()) {
        let o = r.underlineStyle;
        let l = r.underlineThickness;
        if (!/none/i.test(o) && !/none/i.test(l)) {
          let a = this.toEditorPos(r.rangeStart);
          let h = this.toEditorPos(r.rangeEnd);
          if (a < h) {
            let c = `text-decoration: underline ${/^[a-z]/.test(o) ? o + " " : o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${/thin/i.test(l) ? 1 : 2}px`;
            s.push(X.mark({
              attributes: {
                style: c
              }
            }).range(a, h));
          }
        }
      }
      e.dispatch({
        effects: hf.of(X.set(s))
      });
    };
    this.handlers.compositionstart = () => {
      if (e.inputState.composing < 0) {
        e.inputState.composing = 0;
        e.inputState.compositionFirstChange = true;
      }
    };
    this.handlers.compositionend = () => {
      e.inputState.composing = -1;
      e.inputState.compositionFirstChange = null;
      if (this.composing) {
        let {
          drifted: i
        } = this.composing;
        this.composing = null;
        if (i) {
          this.reset(e.state);
        }
      }
    };
    for (let i in this.handlers) {
      t.addEventListener(i, this.handlers[i]);
    }
    this.measureReq = {
      read: i => {
        this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect());
        let s = rn(i.root);
        if (s && s.rangeCount) {
          this.editContext.updateSelectionBounds(s.getRangeAt(0).getBoundingClientRect());
        }
      }
    };
  }
  applyEdits(e) {
    let t = 0;
    let i = false;
    let s = this.pendingContextChange;
    e.changes.iterChanges((r, o, l, a, h) => {
      if (i) {
        return;
      }
      let c = h.length - (o - r);
      if (s && o >= s.to) {
        if (s.from == r && s.to == o && s.insert.eq(h)) {
          s = this.pendingContextChange = null;
          t += c;
          this.to += c;
          return;
        } else {
          s = null;
          this.revertPending(e.state);
        }
      }
      r += t;
      o += t;
      if (o <= this.from) {
        this.from += c;
        this.to += c;
      } else if (r < this.to) {
        if (r < this.from || o > this.to || this.to - this.from + h.length > 30000) {
          i = true;
          return;
        }
        this.editContext.updateText(this.toContextPos(r), this.toContextPos(o), h.toString());
        this.to += c;
      }
      t += c;
    });
    if (s && !i) {
      this.revertPending(e.state);
    }
    return !i;
  }
  update(e) {
    let t = this.pendingContextChange;
    let i = e.startState.selection.main;
    if (this.composing && (this.composing.drifted || !e.changes.touchesRange(i.from, i.to) && e.transactions.some(s => !s.isUserEvent("input.type") && s.changes.touchesRange(this.from, this.to)))) {
      this.composing.drifted = true;
      this.composing.editorBase = e.changes.mapPos(this.composing.editorBase);
    } else if (!this.applyEdits(e) || !this.rangeIsValid(e.state)) {
      this.pendingContextChange = null;
      this.reset(e.state);
    } else if (e.docChanged || e.selectionSet || t) {
      this.setSelection(e.state);
    }
    if (e.geometryChanged || e.docChanged || e.selectionSet) {
      e.view.requestMeasure(this.measureReq);
    }
  }
  resetRange(e) {
    let {
      head: t
    } = e.selection.main;
    this.from = Math.max(0, t - 10000);
    this.to = Math.min(e.doc.length, t + 10000);
  }
  reset(e) {
    this.resetRange(e);
    this.editContext.updateText(0, this.editContext.text.length, e.doc.sliceString(this.from, this.to));
    this.setSelection(e);
  }
  revertPending(e) {
    let t = this.pendingContextChange;
    this.pendingContextChange = null;
    this.editContext.updateText(this.toContextPos(t.from), this.toContextPos(t.from + t.insert.length), e.doc.sliceString(t.from, t.to));
  }
  setSelection(e) {
    let {
      main: t
    } = e.selection;
    let i = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor)));
    let s = this.toContextPos(t.head);
    if (this.editContext.selectionStart != i || this.editContext.selectionEnd != s) {
      this.editContext.updateSelection(i, s);
    }
  }
  rangeIsValid(e) {
    let {
      head: t
    } = e.selection.main;
    return (!(this.from > 0) || !(t - this.from < 500)) && (!(this.to < e.doc.length) || !(this.to - t < 500)) && !(this.to - this.from > 30000);
  }
  toEditorPos(e, t = this.to - this.from) {
    e = Math.min(e, t);
    let i = this.composing;
    if (i && i.drifted) {
      return i.editorBase + (e - i.contextBase);
    } else {
      return e + this.from;
    }
  }
  toContextPos(e) {
    let t = this.composing;
    if (t && t.drifted) {
      return t.contextBase + (e - t.editorBase);
    } else {
      return e - this.from;
    }
  }
  destroy() {
    for (let e in this.handlers) {
      this.editContext.removeEventListener(e, this.handlers[e]);
    }
  }
}
class v {
  get state() {
    return this.viewState.state;
  }
  get viewport() {
    return this.viewState.viewport;
  }
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  get inView() {
    return this.viewState.inView;
  }
  get composing() {
    return !!this.inputState && this.inputState.composing > 0;
  }
  get compositionStarted() {
    return !!this.inputState && this.inputState.composing >= 0;
  }
  get root() {
    return this._root;
  }
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  constructor(e = {}) {
    var t;
    this.plugins = [];
    this.pluginMap = new Map();
    this.editorAttrs = {};
    this.contentAttrs = {};
    this.bidiCache = [];
    this.destroyed = false;
    this.updateState = 2;
    this.measureScheduled = -1;
    this.measureRequests = [];
    this.contentDOM = document.createElement("div");
    this.scrollDOM = document.createElement("div");
    this.scrollDOM.tabIndex = -1;
    this.scrollDOM.className = "cm-scroller";
    this.scrollDOM.appendChild(this.contentDOM);
    this.announceDOM = document.createElement("div");
    this.announceDOM.className = "cm-announced";
    this.announceDOM.setAttribute("aria-live", "polite");
    this.dom = document.createElement("div");
    this.dom.appendChild(this.announceDOM);
    this.dom.appendChild(this.scrollDOM);
    if (e.parent) {
      e.parent.appendChild(this.dom);
    }
    let {
      dispatch: i
    } = e;
    this.dispatchTransactions = e.dispatchTransactions || i && (s => s.forEach(r => i(r, this))) || (s => this.update(s));
    this.dispatch = this.dispatch.bind(this);
    this._root = e.root || qm(e.parent) || document;
    this.viewState = new Xa(this, e.state || Y.create(e));
    if (e.scrollTo && e.scrollTo.is($n)) {
      this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state);
    }
    this.plugins = this.state.facet(ui).map(s => new cr(s));
    for (let s of this.plugins) {
      s.update(this);
    }
    this.observer = new Up(this);
    this.inputState = new yp(this);
    this.inputState.ensureHandlers(this.plugins);
    this.docView = new ga(this);
    this.mountStyles();
    this.updateAttrs();
    this.updateState = 0;
    this.requestMeasure();
    if ((t = document.fonts) !== null && t !== undefined && t.ready) {
      document.fonts.ready.then(() => {
        this.viewState.mustMeasureContent = "refresh";
        this.requestMeasure();
      });
    }
  }
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof fe ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
    this.dispatchTransactions(t, this);
  }
  update(e) {
    if (this.updateState != 0) {
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    }
    let t = false;
    let i = false;
    let s;
    let r = this.state;
    for (let u of e) {
      if (u.startState != r) {
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      }
      r = u.state;
    }
    if (this.destroyed) {
      this.viewState.state = r;
      return;
    }
    let o = this.hasFocus;
    let l = 0;
    let a = null;
    if (e.some(u => u.annotation(vf))) {
      this.inputState.notifiedFocused = o;
      l = 1;
    } else if (o != this.inputState.notifiedFocused) {
      this.inputState.notifiedFocused = o;
      a = Cf(r, o);
      if (!a) {
        l = 1;
      }
    }
    let h = this.observer.delayedAndroidKey;
    let c = null;
    if (h) {
      this.observer.clearDelayedAndroidKey();
      c = this.observer.readChange();
      if (c && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) {
        c = null;
      }
    } else {
      this.observer.clear();
    }
    if (r.facet(Y.phrases) != this.state.facet(Y.phrases)) {
      return this.setState(r);
    }
    s = ps.create(this, r, e);
    s.flags |= l;
    let f = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of e) {
        f &&= f.map(u.changes);
        if (u.scrollIntoView) {
          let {
            main: d
          } = u.state.selection;
          let {
            x: m,
            y: p
          } = this.state.facet(v.cursorScrollMargin);
          f = new yi(d.empty ? d : y.cursor(d.head, d.head > d.anchor ? -1 : 1), "nearest", "nearest", p, m);
        }
        for (let d of u.effects) {
          if (d.is($n)) {
            f = d.value.clip(this.state);
          }
        }
      }
      this.viewState.update(s, f);
      this.bidiCache = xs.update(this.bidiCache, s.changes);
      if (!s.empty) {
        this.updatePlugins(s);
        this.inputState.update(s);
      }
      t = this.docView.update(s);
      if (this.state.facet(Gi) != this.styleModules) {
        this.mountStyles();
      }
      i = this.updateAttrs();
      this.showAnnouncements(e);
      this.docView.updateSelection(t, e.some(u => u.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (s.startState.facet(Rn) != s.state.facet(Rn)) {
      this.viewState.mustMeasureContent = true;
    }
    if (t || i || f || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) {
      this.requestMeasure();
    }
    if (t) {
      this.docViewUpdate();
    }
    if (!s.empty) {
      for (let u of this.state.facet(po)) {
        try {
          u(s);
        } catch (d) {
          $e(this.state, d, "update listener");
        }
      }
    }
    if (a || c) {
      Promise.resolve().then(() => {
        if (a && this.state == a.startState) {
          this.dispatch(a);
        }
        if (c && !bf(this, c) && h.force) {
          bi(this.contentDOM, h.key, h.keyCode);
        }
      });
    }
  }
  setState(e) {
    if (this.updateState != 0) {
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    }
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let i of this.plugins) {
        i.destroy(this);
      }
      this.viewState = new Xa(this, e);
      this.plugins = e.facet(ui).map(i => new cr(i));
      this.pluginMap.clear();
      for (let i of this.plugins) {
        i.update(this);
      }
      this.docView.destroy();
      this.docView = new ga(this);
      this.inputState.ensureHandlers(this.plugins);
      this.mountStyles();
      this.updateAttrs();
      this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    if (t) {
      this.focus();
    }
    this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(ui);
    let i = e.state.facet(ui);
    if (t != i) {
      let s = [];
      for (let r of i) {
        let o = t.indexOf(r);
        if (o < 0) {
          s.push(new cr(r));
        } else {
          let l = this.plugins[o];
          l.mustUpdate = e;
          s.push(l);
        }
      }
      for (let r of this.plugins) {
        if (r.mustUpdate != e) {
          r.destroy(this);
        }
      }
      this.plugins = s;
      this.pluginMap.clear();
    } else {
      for (let s of this.plugins) {
        s.mustUpdate = e;
      }
    }
    for (let s = 0; s < this.plugins.length; s++) {
      this.plugins[s].update(this);
    }
    if (t != i) {
      this.inputState.ensureHandlers(this.plugins);
    }
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate) {
        try {
          t.docViewUpdate(this);
        } catch (i) {
          $e(this.state, i, "doc view update listener");
        }
      }
    }
  }
  measure(e = true) {
    if (this.destroyed) {
      return;
    }
    if (this.measureScheduled > -1) {
      this.win.cancelAnimationFrame(this.measureScheduled);
    }
    if (this.observer.delayedAndroidKey) {
      this.measureScheduled = -1;
      this.requestMeasure();
      return;
    }
    this.measureScheduled = 0;
    if (e) {
      this.observer.forceFlush();
    }
    let t = null;
    let i = this.viewState.scrollParent;
    let s = this.viewState.getScrollOffset();
    let {
      scrollAnchorPos: r,
      scrollAnchorHeight: o
    } = this.viewState;
    if (Math.abs(s - this.viewState.scrollOffset) > 1) {
      o = -1;
    }
    this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0;; l++) {
        if (o < 0) {
          if (Zc(i || this.win)) {
            r = -1;
            o = this.viewState.heightMap.height;
          } else {
            let d = this.viewState.scrollAnchorAt(s);
            r = d.from;
            o = d.top;
          }
        }
        this.updateState = 1;
        let a = this.viewState.measure();
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null) {
          break;
        }
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let h = [];
        if (!(a & 4)) {
          [this.measureRequests, h] = [h, this.measureRequests];
        }
        let c = h.map(d => {
          try {
            return d.read(this);
          } catch (m) {
            $e(this.state, m);
            return Ra;
          }
        });
        let f = ps.create(this, this.state, []);
        let u = false;
        f.flags |= a;
        if (t) {
          t.flags |= a;
        } else {
          t = f;
        }
        this.updateState = 2;
        if (!f.empty) {
          this.updatePlugins(f);
          this.inputState.update(f);
          this.updateAttrs();
          u = this.docView.update(f);
          if (u) {
            this.docViewUpdate();
          }
        }
        for (let d = 0; d < h.length; d++) {
          if (c[d] != Ra) {
            try {
              let m = h[d];
              if (m.write) {
                m.write(c[d], this);
              }
            } catch (m) {
              $e(this.state, m);
            }
          }
        }
        if (u) {
          this.docView.updateSelection(true);
        }
        if (!f.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight) {
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget);
              this.viewState.scrollTarget = null;
              o = -1;
              continue;
            } else {
              let m = ((r < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(r).top) - o) / this.scaleY;
              if ((m > 1 || m < -1) && (i == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                s = s + m;
                if (i) {
                  i.scrollTop += m;
                } else {
                  this.win.scrollBy(0, m);
                }
                o = -1;
                continue;
              }
            }
          }
          break;
        }
      }
    } finally {
      this.updateState = 0;
      this.measureScheduled = -1;
    }
    if (t && !t.empty) {
      for (let l of this.state.facet(po)) {
        l(t);
      }
    }
  }
  get themeClasses() {
    return Qo + " " + (this.state.facet(xo) ? Xf : $f) + " " + this.state.facet(Rn);
  }
  updateAttrs() {
    let e = Va(this, cf, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    });
    let t = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      writingsuggestions: "false",
      translate: "no",
      contenteditable: this.state.facet(yt) ? "true" : "false",
      class: "cm-content",
      style: `${$.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    if (this.state.readOnly) {
      t["aria-readonly"] = "true";
    }
    Va(this, tl, t);
    let i = this.observer.ignore(() => {
      let s = fa(this.contentDOM, this.contentAttrs, t);
      let r = fa(this.dom, this.editorAttrs, e);
      return s || r;
    });
    this.editorAttrs = e;
    this.contentAttrs = t;
    return i;
  }
  showAnnouncements(e) {
    let t = true;
    for (let i of e) {
      for (let s of i.effects) {
        if (s.is(v.announce)) {
          if (t) {
            this.announceDOM.textContent = "";
          }
          t = false;
          let r = this.announceDOM.appendChild(document.createElement("div"));
          r.textContent = s.value;
        }
      }
    }
  }
  mountStyles() {
    this.styleModules = this.state.facet(Gi);
    let e = this.state.facet(v.cspNonce);
    Rt.mount(this.root, this.styleModules.concat(_p).reverse(), e ? {
      nonce: e
    } : undefined);
  }
  readMeasured() {
    if (this.updateState == 2) {
      throw new Error("Reading the editor layout isn't allowed during an update");
    }
    if (this.updateState == 0 && this.measureScheduled > -1) {
      this.measure(false);
    }
  }
  requestMeasure(e) {
    if (this.measureScheduled < 0) {
      this.measureScheduled = this.win.requestAnimationFrame(() => this.measure());
    }
    if (e) {
      if (this.measureRequests.indexOf(e) > -1) {
        return;
      }
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++) {
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
        }
      }
      this.measureRequests.push(e);
    }
  }
  plugin(e) {
    let t = this.pluginMap.get(e);
    if (t === undefined || t && t.plugin != e) {
      this.pluginMap.set(e, t = this.plugins.find(i => i.plugin == e) || null);
    }
    return t && t.update(this).value;
  }
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  get documentPadding() {
    return {
      top: this.viewState.paddingTop,
      bottom: this.viewState.paddingBottom
    };
  }
  get scaleX() {
    return this.viewState.scaleX;
  }
  get scaleY() {
    return this.viewState.scaleY;
  }
  elementAtHeight(e) {
    this.readMeasured();
    return this.viewState.elementAtHeight(e);
  }
  lineBlockAtHeight(e) {
    this.readMeasured();
    return this.viewState.lineBlockAtHeight(e);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(e, t, i) {
    return mr(this, e, ba(this, e, t, i));
  }
  moveByGroup(e, t) {
    return mr(this, e, ba(this, e, t, i => hp(this, e.head, i)));
  }
  visualLineSide(e, t) {
    let i = this.bidiSpans(e);
    let s = this.textDirectionAt(e.from);
    let r = i[t ? i.length - 1 : 0];
    return y.cursor(r.side(t, s) + e.from, r.forward(!t, s) ? 1 : -1);
  }
  moveToLineBoundary(e, t, i = true) {
    return ap(this, e, t, i);
  }
  moveVertically(e, t, i) {
    return mr(this, e, cp(this, e, t, i));
  }
  domAtPos(e, t = 1) {
    return this.docView.domAtPos(e, t);
  }
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = true) {
    this.readMeasured();
    let i = bo(this, e, t);
    return i && i.pos;
  }
  posAndSideAtCoords(e, t = true) {
    this.readMeasured();
    return bo(this, e, t);
  }
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(e, t);
    if (!i || i.left == i.right) {
      return i;
    }
    let s = this.state.doc.lineAt(e);
    let r = this.bidiSpans(s);
    let o = r[ct.find(r, e - s.from, -1, t)];
    return on(i, o.dir == F.LTR == t > 0);
  }
  coordsForChar(e) {
    this.readMeasured();
    return this.docView.coordsForChar(e);
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  textDirectionAt(e) {
    if (!this.state.facet(of) || e < this.viewport.from || e > this.viewport.to) {
      return this.textDirection;
    } else {
      this.readMeasured();
      return this.docView.textDirectionAt(e);
    }
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(e) {
    if (e.length > Jp) {
      return Hc(e.length);
    }
    let t = this.textDirectionAt(e.from);
    let i;
    for (let r of this.bidiCache) {
      if (r.from == e.from && r.dir == t && (r.fresh || Uc(r.isolates, i = ma(this, e)))) {
        return r.order;
      }
    }
    i ||= ma(this, e);
    let s = Rm(e.text, t, i);
    this.bidiCache.push(new xs(e.from, e.to, t, i, true, s));
    return s;
  }
  get hasFocus() {
    return (this.dom.ownerDocument.hasFocus() || $.safari && this.inputState?.lastContextMenu > Date.now() - 30000) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      Ic(this.contentDOM);
      this.docView.updateSelection();
    });
  }
  setRoot(e) {
    if (this._root != e) {
      this._root = e;
      this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window);
      this.mountStyles();
    }
  }
  destroy() {
    if (this.root.activeElement == this.contentDOM) {
      this.contentDOM.blur();
    }
    for (let e of this.plugins) {
      e.destroy(this);
    }
    this.plugins = [];
    this.inputState.destroy();
    this.docView.destroy();
    this.dom.remove();
    this.observer.destroy();
    if (this.measureScheduled > -1) {
      this.win.cancelAnimationFrame(this.measureScheduled);
    }
    this.destroyed = true;
  }
  static scrollIntoView(e, t = {}) {
    return $n.of(new yi(typeof e == "number" ? y.cursor(e) : e, t.y ?? "nearest", t.x ?? "nearest", t.yMargin ?? 5, t.xMargin ?? 5));
  }
  scrollSnapshot() {
    let {
      scrollTop: e,
      scrollLeft: t
    } = this.scrollDOM;
    let i = this.viewState.scrollAnchorAt(e);
    return $n.of(new yi(y.cursor(i.from), "start", "start", i.top - e, t, true));
  }
  setTabFocusMode(e) {
    if (e == null) {
      this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1;
    } else if (typeof e == "boolean") {
      this.inputState.tabFocusMode = e ? 0 : -1;
    } else if (this.inputState.tabFocusMode != 0) {
      this.inputState.tabFocusMode = Date.now() + e;
    }
  }
  static domEventHandlers(e) {
    return K.define(() => ({}), {
      eventHandlers: e
    });
  }
  static domEventObservers(e) {
    return K.define(() => ({}), {
      eventObservers: e
    });
  }
  static theme(e, t) {
    let i = Rt.newName();
    let s = [Rn.of(i), Gi.of(So(`.${i}`, e))];
    if (t && t.dark) {
      s.push(xo.of(true));
    }
    return s;
  }
  static baseTheme(e) {
    return kt.lowest(Gi.of(So("." + Qo, e, Ef)));
  }
  static findFromDOM(e) {
    let i = e.querySelector(".cm-content");
    let s = i && ie.get(i) || ie.get(e);
    return (s == null ? undefined : s.root)?.view || null;
  }
}
v.styleModule = Gi;
v.inputHandler = sf;
v.clipboardInputFilter = Jo;
v.clipboardOutputFilter = el;
v.scrollHandler = af;
v.focusChangeEffect = rf;
v.perLineTextDirection = of;
v.exceptionSink = nf;
v.updateListener = po;
v.editable = yt;
v.mouseSelectionStyle = tf;
v.dragMovesSelection = ef;
v.clickAddsSelectionRange = Jc;
v.decorations = Gs;
v.blockWrappers = ff;
v.outerDecorations = il;
v.atomicRanges = yn;
v.bidiIsolatedRanges = uf;
v.cursorScrollMargin = T.define({
  combine: n => {
    let e = 5;
    let t = 5;
    for (let i of n) {
      if (typeof i == "number") {
        e = t = i;
      } else {
        ({
          x: e,
          y: t
        } = i);
      }
    }
    return {
      x: e,
      y: t
    };
  }
});
v.scrollMargins = df;
v.darkTheme = xo;
v.cspNonce = T.define({
  combine: n => n.length ? n[0] : ""
});
v.contentAttributes = tl;
v.editorAttributes = cf;
v.lineWrapping = v.contentAttributes.of({
  class: "cm-lineWrapping"
});
v.announce = M.define();
const Jp = 4096;
const Ra = {};
class xs {
  constructor(e, t, i, s, r, o) {
    this.from = e;
    this.to = t;
    this.dir = i;
    this.isolates = s;
    this.fresh = r;
    this.order = o;
  }
  static update(e, t) {
    if (t.empty && !e.some(r => r.fresh)) {
      return e;
    }
    let i = [];
    let s = e.length ? e[e.length - 1].dir : F.LTR;
    for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
      let o = e[r];
      if (o.dir == s && !t.touchesRange(o.from, o.to)) {
        i.push(new xs(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, false, o.order));
      }
    }
    return i;
  }
}
function Va(n, e, t) {
  for (let i = n.state.facet(e), s = i.length - 1; s >= 0; s--) {
    let r = i[s];
    let o = typeof r == "function" ? r(n) : r;
    if (o) {
      Uo(o, t);
    }
  }
  return t;
}
const eO = $.mac ? "mac" : $.windows ? "win" : $.linux ? "linux" : "key";
function tO(n, e) {
  const t = n.split(/-(?!$)/);
  let i = t[t.length - 1];
  if (i == "Space") {
    i = " ";
  }
  let s;
  let r;
  let o;
  let l;
  for (let a = 0; a < t.length - 1; ++a) {
    const h = t[a];
    if (/^(cmd|meta|m)$/i.test(h)) {
      l = true;
    } else if (/^a(lt)?$/i.test(h)) {
      s = true;
    } else if (/^(c|ctrl|control)$/i.test(h)) {
      r = true;
    } else if (/^s(hift)?$/i.test(h)) {
      o = true;
    } else if (/^mod$/i.test(h)) {
      if (e == "mac") {
        l = true;
      } else {
        r = true;
      }
    } else {
      throw new Error("Unrecognized modifier name: " + h);
    }
  }
  if (s) {
    i = "Alt-" + i;
  }
  if (r) {
    i = "Ctrl-" + i;
  }
  if (l) {
    i = "Meta-" + i;
  }
  if (o) {
    i = "Shift-" + i;
  }
  return i;
}
function Vn(n, e, t) {
  if (e.altKey) {
    n = "Alt-" + n;
  }
  if (e.ctrlKey) {
    n = "Ctrl-" + n;
  }
  if (e.metaKey) {
    n = "Meta-" + n;
  }
  if (t !== false && e.shiftKey) {
    n = "Shift-" + n;
  }
  return n;
}
const iO = kt.default(v.domEventHandlers({
  keydown(n, e) {
    return Pf(Af(e.state), n, e, "editor");
  }
}));
const Yt = T.define({
  enables: iO
});
const Wa = new WeakMap();
function Af(n) {
  let e = n.facet(Yt);
  let t = Wa.get(e);
  if (!t) {
    Wa.set(e, t = rO(e.reduce((i, s) => i.concat(s), [])));
  }
  return t;
}
function nO(n, e, t) {
  return Pf(Af(n.state), e, n, t);
}
let Xt = null;
const sO = 4000;
function rO(n, e = eO) {
  let t = Object.create(null);
  let i = Object.create(null);
  let s = (o, l) => {
    let a = i[o];
    if (a == null) {
      i[o] = l;
    } else if (a != l) {
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
    }
  };
  let r = (o, l, a, h, c) => {
    var u;
    let d = t[o] ||= Object.create(null);
    let m = l.split(/ (?!$)/).map(b => tO(b, e));
    for (let b = 1; b < m.length; b++) {
      let x = m.slice(0, b).join(" ");
      s(x, true);
      d[x] ||= {
        preventDefault: true,
        stopPropagation: false,
        run: [Q => {
          let C = Xt = {
            view: Q,
            prefix: x,
            scope: o
          };
          setTimeout(() => {
            if (Xt == C) {
              Xt = null;
            }
          }, sO);
          return true;
        }]
      };
    }
    let p = m.join(" ");
    s(p, false);
    let O = d[p] ||= {
      preventDefault: false,
      stopPropagation: false,
      run: ((u = d._any?.run) === null || u === undefined ? undefined : u.slice()) || []
    };
    if (a) {
      O.run.push(a);
    }
    if (h) {
      O.preventDefault = true;
    }
    if (c) {
      O.stopPropagation = true;
    }
  };
  for (let o of n) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any) {
      for (let h of l) {
        let c = t[h] ||= Object.create(null);
        c._any ||= {
          preventDefault: false,
          stopPropagation: false,
          run: []
        };
        let {
          any: f
        } = o;
        for (let u in c) {
          c[u].run.push(d => f(d, ko));
        }
      }
    }
    let a = o[e] || o.key;
    if (a) {
      for (let h of l) {
        r(h, a, o.run, o.preventDefault, o.stopPropagation);
        if (o.shift) {
          r(h, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
        }
      }
    }
  }
  return t;
}
let ko = null;
function Pf(n, e, t, i) {
  ko = e;
  let s = xm(e);
  let r = Ee(s, 0);
  let o = at(r) == s.length && s != " ";
  let l = "";
  let a = false;
  let h = false;
  let c = false;
  if (Xt && Xt.view == t && Xt.scope == i) {
    l = Xt.prefix + " ";
    if (Qf.indexOf(e.keyCode) < 0) {
      h = true;
      Xt = null;
    }
  }
  let f = new Set();
  let u = O => {
    if (O) {
      for (let b of O.run) {
        if (!f.has(b) && (f.add(b), b(t))) {
          if (O.stopPropagation) {
            c = true;
          }
          return true;
        }
      }
      if (O.preventDefault) {
        if (O.stopPropagation) {
          c = true;
        }
        h = true;
      }
    }
    return false;
  };
  let d = n[i];
  let m;
  let p;
  if (d) {
    if (u(d[l + Vn(s, e, !o)])) {
      a = true;
    } else if (o && (e.altKey || e.metaKey || e.ctrlKey) && (!$.windows || !e.ctrlKey || !e.altKey) && (!$.mac || !e.altKey || !!e.ctrlKey || !!e.metaKey) && (m = Vt[e.keyCode]) && m != s) {
      if (u(d[l + Vn(m, e, true)]) || e.shiftKey && (p = nn[e.keyCode]) != s && p != m && u(d[l + Vn(p, e, false)])) {
        a = true;
      }
    } else if (o && e.shiftKey && u(d[l + Vn(s, e, true)])) {
      a = true;
    }
    if (!a && u(d._any)) {
      a = true;
    }
  }
  if (h) {
    a = true;
  }
  if (a && c) {
    e.stopPropagation();
  }
  ko = null;
  return a;
}
class ii {
  constructor(e, t, i, s, r) {
    this.className = e;
    this.left = t;
    this.top = i;
    this.width = s;
    this.height = r;
  }
  draw() {
    let e = document.createElement("div");
    e.className = this.className;
    this.adjust(e);
    return e;
  }
  update(e, t) {
    if (t.className != this.className) {
      return false;
    } else {
      this.adjust(e);
      return true;
    }
  }
  adjust(e) {
    e.style.left = this.left + "px";
    e.style.top = this.top + "px";
    if (this.width != null) {
      e.style.width = this.width + "px";
    }
    e.style.height = this.height + "px";
  }
  eq(e) {
    return this.left == e.left && this.top == e.top && this.width == e.width && this.height == e.height && this.className == e.className;
  }
  static forRange(e, t, i) {
    if (i.empty) {
      let s = e.coordsAtPos(i.head, i.assoc || 1);
      if (!s) {
        return [];
      }
      let r = Mf(e);
      return [new ii(t, s.left - r.left, s.top - r.top, null, s.bottom - s.top)];
    } else {
      return oO(e, t, i);
    }
  }
}
function Mf(n) {
  let e = n.scrollDOM.getBoundingClientRect();
  return {
    left: (n.textDirection == F.LTR ? e.left : e.right - n.scrollDOM.clientWidth * n.scaleX) - n.scrollDOM.scrollLeft * n.scaleX,
    top: e.top - n.scrollDOM.scrollTop * n.scaleY
  };
}
function Da(n, e, t, i) {
  let s = n.coordsAtPos(e, t * 2);
  if (!s) {
    return i;
  }
  let r = n.dom.getBoundingClientRect();
  let o = (s.top + s.bottom) / 2;
  let l = n.posAtCoords({
    x: r.left + 1,
    y: o
  });
  let a = n.posAtCoords({
    x: r.right - 1,
    y: o
  });
  if (l == null || a == null) {
    return i;
  } else {
    return {
      from: Math.max(i.from, Math.min(l, a)),
      to: Math.min(i.to, Math.max(l, a))
    };
  }
}
function oO(n, e, t) {
  if (t.to <= n.viewport.from || t.from >= n.viewport.to) {
    return [];
  }
  let i = Math.max(t.from, n.viewport.from);
  let s = Math.min(t.to, n.viewport.to);
  let r = n.textDirection == F.LTR;
  let o = n.contentDOM;
  let l = o.getBoundingClientRect();
  let a = Mf(n);
  let h = o.querySelector(".cm-line");
  let c = h && window.getComputedStyle(h);
  let f = l.left + (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0);
  let u = l.right - (c ? parseInt(c.paddingRight) : 0);
  let d = go(n, i, 1);
  let m = go(n, s, -1);
  let p = d.type == Se.Text ? d : null;
  let O = m.type == Se.Text ? m : null;
  if (p && (n.lineWrapping || d.widgetLineBreaks)) {
    p = Da(n, i, 1, p);
  }
  if (O && (n.lineWrapping || m.widgetLineBreaks)) {
    O = Da(n, s, -1, O);
  }
  if (p && O && p.from == O.from && p.to == O.to) {
    return x(Q(t.from, t.to, p));
  }
  {
    let w = p ? Q(t.from, null, p) : C(d, false);
    let S = O ? Q(null, t.to, O) : C(m, true);
    let k = [];
    if ((p || d).to < (O || m).from - (p && O ? 1 : 0) || d.widgetLineBreaks > 1 && w.bottom + n.defaultLineHeight / 2 < S.top) {
      k.push(b(f, w.bottom, u, S.top));
    } else if (w.bottom < S.top && n.elementAtHeight((w.bottom + S.top) / 2).type == Se.Text) {
      w.bottom = S.top = (w.bottom + S.top) / 2;
    }
    return x(w).concat(k).concat(x(S));
  }
  function b(w, S, k, A) {
    return new ii(e, w - a.left, S - a.top, Math.max(0, k - w), A - S);
  }
  function x({
    top: w,
    bottom: S,
    horizontal: k
  }) {
    let A = [];
    for (let R = 0; R < k.length; R += 2) {
      A.push(b(k[R], w, k[R + 1], S));
    }
    return A;
  }
  function Q(w, S, k) {
    let A = 1000000000;
    let R = -1000000000;
    let B = [];
    function V(D, G, J, ne, me) {
      let U = n.coordsAtPos(D, D == k.to ? -2 : 2);
      let ae = n.coordsAtPos(J, J == k.from ? 2 : -2);
      if (!!U && !!ae) {
        A = Math.min(U.top, ae.top, A);
        R = Math.max(U.bottom, ae.bottom, R);
        if (me == F.LTR) {
          B.push(r && G ? f : U.left, r && ne ? u : ae.right);
        } else {
          B.push(!r && ne ? f : ae.left, !r && G ? u : U.right);
        }
      }
    }
    let E = w ?? k.from;
    let W = S ?? k.to;
    for (let D of n.visibleRanges) {
      if (D.to > E && D.from < W) {
        for (let G = Math.max(D.from, E), J = Math.min(D.to, W);;) {
          let ne = n.state.doc.lineAt(G);
          for (let me of n.bidiSpans(ne)) {
            let U = me.from + ne.from;
            let ae = me.to + ne.from;
            if (U >= J) {
              break;
            }
            if (ae > G) {
              V(Math.max(U, G), w == null && U <= E, Math.min(ae, J), S == null && ae >= W, me.dir);
            }
          }
          G = ne.to + 1;
          if (G >= J) {
            break;
          }
        }
      }
    }
    if (B.length == 0) {
      V(E, w == null, W, S == null, n.textDirection);
    }
    return {
      top: A,
      bottom: R,
      horizontal: B
    };
  }
  function C(w, S) {
    let k = l.top + (S ? w.top : w.bottom);
    return {
      top: k,
      bottom: k,
      horizontal: []
    };
  }
}
function lO(n, e) {
  return n.constructor == e.constructor && n.eq(e);
}
class aO {
  constructor(e, t) {
    this.view = e;
    this.layer = t;
    this.drawn = [];
    this.scaleX = 1;
    this.scaleY = 1;
    this.measureReq = {
      read: this.measure.bind(this),
      write: this.draw.bind(this)
    };
    this.dom = e.scrollDOM.appendChild(document.createElement("div"));
    this.dom.classList.add("cm-layer");
    if (t.above) {
      this.dom.classList.add("cm-layer-above");
    }
    if (t.class) {
      this.dom.classList.add(t.class);
    }
    this.scale();
    this.dom.setAttribute("aria-hidden", "true");
    this.setOrder(e.state);
    e.requestMeasure(this.measureReq);
    if (t.mount) {
      t.mount(this.dom, e);
    }
  }
  update(e) {
    if (e.startState.facet(ts) != e.state.facet(ts)) {
      this.setOrder(e.state);
    }
    if (this.layer.update(e, this.dom) || e.geometryChanged) {
      this.scale();
      e.view.requestMeasure(this.measureReq);
    }
  }
  docViewUpdate(e) {
    if (this.layer.updateOnDocViewUpdate !== false) {
      e.requestMeasure(this.measureReq);
    }
  }
  setOrder(e) {
    let t = 0;
    let i = e.facet(ts);
    while (t < i.length && i[t] != this.layer) {
      t++;
    }
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let {
      scaleX: e,
      scaleY: t
    } = this.view;
    if (e != this.scaleX || t != this.scaleY) {
      this.scaleX = e;
      this.scaleY = t;
      this.dom.style.transform = `scale(${1 / e}, ${1 / t})`;
    }
  }
  draw(e) {
    if (e.length != this.drawn.length || e.some((t, i) => !lO(t, this.drawn[i]))) {
      let t = this.dom.firstChild;
      let i = 0;
      for (let s of e) {
        if (s.update && t && s.constructor && this.drawn[i].constructor && s.update(t, this.drawn[i])) {
          t = t.nextSibling;
          i++;
        } else {
          this.dom.insertBefore(s.draw(), t);
        }
      }
      while (t) {
        let s = t.nextSibling;
        t.remove();
        t = s;
      }
      this.drawn = e;
      if ($.webkit) {
        this.dom.style.display = this.dom.firstChild ? "" : "none";
      }
    }
  }
  destroy() {
    if (this.layer.destroy) {
      this.layer.destroy(this.dom, this.view);
    }
    this.dom.remove();
  }
}
const ts = T.define();
function Rf(n) {
  return [K.define(e => new aO(e, n)), ts.of(n)];
}
const qi = T.define({
  combine(n) {
    return Je(n, {
      cursorBlinkRate: 1200,
      drawRangeCursor: true,
      iosSelectionHandles: true
    }, {
      cursorBlinkRate: (e, t) => Math.min(e, t),
      drawRangeCursor: (e, t) => e || t
    });
  }
});
function hO(n = {}) {
  return [qi.of(n), cO, fO, uO, lf.of(true)];
}
function Vf(n) {
  return n.startState.facet(qi) != n.state.facet(qi);
}
const cO = Rf({
  above: true,
  markers(n) {
    let {
      state: e
    } = n;
    let t = e.facet(qi);
    let i = [];
    for (let s of e.selection.ranges) {
      let r = s == e.selection.main;
      if (s.empty || t.drawRangeCursor && (!r || !$.ios || !t.iosSelectionHandles)) {
        let o = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary";
        let l = s.empty ? s : y.cursor(s.head, s.assoc);
        for (let a of ii.forRange(n, o, l)) {
          i.push(a);
        }
      }
    }
    return i;
  },
  update(n, e) {
    if (n.transactions.some(i => i.selection)) {
      e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink";
    }
    let t = Vf(n);
    if (t) {
      La(n.state, e);
    }
    return n.docChanged || n.selectionSet || t;
  },
  mount(n, e) {
    La(e.state, n);
  },
  class: "cm-cursorLayer"
});
function La(n, e) {
  e.style.animationDuration = n.facet(qi).cursorBlinkRate + "ms";
}
const fO = Rf({
  above: false,
  markers(n) {
    let e = [];
    let {
      main: t,
      ranges: i
    } = n.state.selection;
    for (let s of i) {
      if (!s.empty) {
        for (let r of ii.forRange(n, "cm-selectionBackground", s)) {
          e.push(r);
        }
      }
    }
    if ($.ios && !t.empty && n.state.facet(qi).iosSelectionHandles) {
      for (let s of ii.forRange(n, "cm-selectionHandle cm-selectionHandle-start", y.cursor(t.from, 1))) {
        e.push(s);
      }
      for (let s of ii.forRange(n, "cm-selectionHandle cm-selectionHandle-end", y.cursor(t.to, 1))) {
        e.push(s);
      }
    }
    return e;
  },
  update(n, e) {
    return n.docChanged || n.selectionSet || n.viewportChanged || Vf(n);
  },
  class: "cm-selectionLayer"
});
const uO = kt.highest(v.theme({
  ".cm-line": {
    "& ::selection, &::selection": {
      backgroundColor: "transparent !important"
    },
    caretColor: "transparent !important"
  },
  ".cm-content": {
    caretColor: "transparent !important",
    "& :focus": {
      caretColor: "initial !important",
      "&::selection, & ::selection": {
        backgroundColor: "Highlight !important"
      }
    }
  }
}));
const Wf = M.define({
  map(n, e) {
    if (n == null) {
      return null;
    } else {
      return e.mapPos(n);
    }
  }
});
const Zi = le.define({
  create() {
    return null;
  },
  update(n, e) {
    if (n != null) {
      n = e.changes.mapPos(n);
    }
    return e.effects.reduce((t, i) => i.is(Wf) ? i.value : t, n);
  }
});
const dO = K.fromClass(class {
  constructor(n) {
    this.view = n;
    this.cursor = null;
    this.measureReq = {
      read: this.readPos.bind(this),
      write: this.drawCursor.bind(this)
    };
  }
  update(n) {
    var e;
    let t = n.state.field(Zi);
    if (t == null) {
      if (this.cursor != null) {
        if ((e = this.cursor) !== null && e !== undefined) {
          e.remove();
        }
        this.cursor = null;
      }
    } else {
      if (!this.cursor) {
        this.cursor = this.view.scrollDOM.appendChild(document.createElement("div"));
        this.cursor.className = "cm-dropCursor";
      }
      if (n.startState.field(Zi) != t || n.docChanged || n.geometryChanged) {
        this.view.requestMeasure(this.measureReq);
      }
    }
  }
  readPos() {
    let {
      view: n
    } = this;
    let e = n.state.field(Zi);
    let t = e != null && n.coordsAtPos(e);
    if (!t) {
      return null;
    }
    let i = n.scrollDOM.getBoundingClientRect();
    return {
      left: t.left - i.left + n.scrollDOM.scrollLeft * n.scaleX,
      top: t.top - i.top + n.scrollDOM.scrollTop * n.scaleY,
      height: t.bottom - t.top
    };
  }
  drawCursor(n) {
    if (this.cursor) {
      let {
        scaleX: e,
        scaleY: t
      } = this.view;
      if (n) {
        this.cursor.style.left = n.left / e + "px";
        this.cursor.style.top = n.top / t + "px";
        this.cursor.style.height = n.height / t + "px";
      } else {
        this.cursor.style.left = "-100000px";
      }
    }
  }
  destroy() {
    if (this.cursor) {
      this.cursor.remove();
    }
  }
  setDropPos(n) {
    if (this.view.state.field(Zi) != n) {
      this.view.dispatch({
        effects: Wf.of(n)
      });
    }
  }
}, {
  eventObservers: {
    dragover(n) {
      this.setDropPos(this.view.posAtCoords({
        x: n.clientX,
        y: n.clientY
      }));
    },
    dragleave(n) {
      if (n.target == this.view.contentDOM || !this.view.contentDOM.contains(n.relatedTarget)) {
        this.setDropPos(null);
      }
    },
    dragend() {
      this.setDropPos(null);
    },
    drop() {
      this.setDropPos(null);
    }
  }
});
function mO() {
  return [Zi, dO];
}
function Na(n, e, t, i, s) {
  e.lastIndex = 0;
  for (let r = n.iterRange(t, i), o = t, l; !r.next().done; o += r.value.length) {
    if (!r.lineBreak) {
      while (l = e.exec(r.value)) {
        s(o + l.index, l);
      }
    }
  }
}
function pO(n, e) {
  let t = n.visibleRanges;
  if (t.length == 1 && t[0].from == n.viewport.from && t[0].to == n.viewport.to) {
    return t;
  }
  let i = [];
  for (let {
    from: s,
    to: r
  } of t) {
    s = Math.max(n.state.doc.lineAt(s).from, s - e);
    r = Math.min(n.state.doc.lineAt(r).to, r + e);
    if (i.length && i[i.length - 1].to >= s) {
      i[i.length - 1].to = r;
    } else {
      i.push({
        from: s,
        to: r
      });
    }
  }
  return i;
}
class OO {
  constructor(e) {
    const {
      regexp: t,
      decoration: i,
      decorate: s,
      boundary: r,
      maxLength: o = 1000
    } = e;
    if (!t.global) {
      throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    }
    this.regexp = t;
    if (s) {
      this.addMatch = (l, a, h, c) => s(c, h, h + l[0].length, l, a);
    } else if (typeof i == "function") {
      this.addMatch = (l, a, h, c) => {
        let f = i(l, a, h);
        if (f) {
          c(h, h + l[0].length, f);
        }
      };
    } else if (i) {
      this.addMatch = (l, a, h, c) => c(h, h + l[0].length, i);
    } else {
      throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    }
    this.boundary = r;
    this.maxLength = o;
  }
  createDeco(e) {
    let t = new Qt();
    let i = t.add.bind(t);
    for (let {
      from: s,
      to: r
    } of pO(e, this.maxLength)) {
      Na(e.state.doc, this.regexp, s, r, (o, l) => this.addMatch(l, e, o, i));
    }
    return t.finish();
  }
  updateDeco(e, t) {
    let i = 1000000000;
    let s = -1;
    if (e.docChanged) {
      e.changes.iterChanges((r, o, l, a) => {
        if (a >= e.view.viewport.from && l <= e.view.viewport.to) {
          i = Math.min(l, i);
          s = Math.max(a, s);
        }
      });
    }
    if (e.viewportMoved || s - i > 1000) {
      return this.createDeco(e.view);
    } else if (s > -1) {
      return this.updateRange(e.view, t.map(e.changes), i, s);
    } else {
      return t;
    }
  }
  updateRange(e, t, i, s) {
    for (let r of e.visibleRanges) {
      let o = Math.max(r.from, i);
      let l = Math.min(r.to, s);
      if (l >= o) {
        let a = e.state.doc.lineAt(o);
        let h = a.to < l ? e.state.doc.lineAt(l) : a;
        let c = Math.max(r.from, a.from);
        let f = Math.min(r.to, h.to);
        if (this.boundary) {
          for (; o > a.from; o--) {
            if (this.boundary.test(a.text[o - 1 - a.from])) {
              c = o;
              break;
            }
          }
          for (; l < h.to; l++) {
            if (this.boundary.test(h.text[l - h.from])) {
              f = l;
              break;
            }
          }
        }
        let u = [];
        let d;
        let m = (p, O, b) => u.push(b.range(p, O));
        if (a == h) {
          for (this.regexp.lastIndex = c - a.from; (d = this.regexp.exec(a.text)) && d.index < f - a.from;) {
            this.addMatch(d, e, d.index + a.from, m);
          }
        } else {
          Na(e.state.doc, this.regexp, c, f, (p, O) => this.addMatch(O, e, p, m));
        }
        t = t.update({
          filterFrom: c,
          filterTo: f,
          filter: (p, O) => p < c || O > f,
          add: u
        });
      }
    }
    return t;
  }
}
const wo = /x/.unicode != null ? "gu" : "g";
const gO = new RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`, wo);
const bO = {
  0: "null",
  7: "bell",
  8: "backspace",
  10: "newline",
  11: "vertical tab",
  13: "carriage return",
  27: "escape",
  8203: "zero width space",
  8204: "zero width non-joiner",
  8205: "zero width joiner",
  8206: "left-to-right mark",
  8207: "right-to-left mark",
  8232: "line separator",
  8237: "left-to-right override",
  8238: "right-to-left override",
  8294: "left-to-right isolate",
  8295: "right-to-left isolate",
  8297: "pop directional isolate",
  8233: "paragraph separator",
  65279: "zero width no-break space",
  65532: "object replacement"
};
let gr = null;
function yO() {
  if (gr == null && typeof document !== "undefined" && document.body) {
    let e = document.body.style;
    gr = (e.tabSize ?? e.MozTabSize) != null;
  }
  return gr || false;
}
const is = T.define({
  combine(n) {
    let e = Je(n, {
      render: null,
      specialChars: gO,
      addSpecialChars: null
    });
    if (e.replaceTabs = !yO()) {
      e.specialChars = new RegExp("\t|" + e.specialChars.source, wo);
    }
    if (e.addSpecialChars) {
      e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, wo);
    }
    return e;
  }
});
function xO(n = {}) {
  return [is.of(n), QO()];
}
let Ba = null;
function QO() {
  return Ba ||= K.fromClass(class {
    constructor(n) {
      this.view = n;
      this.decorations = X.none;
      this.decorationCache = Object.create(null);
      this.decorator = this.makeDecorator(n.state.facet(is));
      this.decorations = this.decorator.createDeco(n);
    }
    makeDecorator(n) {
      return new OO({
        regexp: n.specialChars,
        decoration: (e, t, i) => {
          let {
            doc: s
          } = t.state;
          let r = Ee(e[0], 0);
          if (r == 9) {
            let o = s.lineAt(i);
            let l = t.state.tabSize;
            let a = Ei(o.text, l, i - o.from);
            return X.replace({
              widget: new vO((l - a % l) * this.view.defaultCharacterWidth / this.view.scaleX)
            });
          }
          return this.decorationCache[r] ||= X.replace({
            widget: new wO(n, r)
          });
        },
        boundary: n.replaceTabs ? undefined : /[^]/
      });
    }
    update(n) {
      let e = n.state.facet(is);
      if (n.startState.facet(is) != e) {
        this.decorator = this.makeDecorator(e);
        this.decorations = this.decorator.createDeco(n.view);
      } else {
        this.decorations = this.decorator.updateDeco(n, this.decorations);
      }
    }
  }, {
    decorations: n => n.decorations
  });
}
const SO = "•";
function kO(n) {
  if (n >= 32) {
    return SO;
  } else if (n == 10) {
    return "␤";
  } else {
    return String.fromCharCode(9216 + n);
  }
}
class wO extends _e {
  constructor(e, t) {
    super();
    this.options = e;
    this.code = t;
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let t = kO(this.code);
    let i = e.state.phrase("Control character") + " " + (bO[this.code] || "0x" + this.code.toString(16));
    let s = this.options.render && this.options.render(this.code, i, t);
    if (s) {
      return s;
    }
    let r = document.createElement("span");
    r.textContent = t;
    r.title = i;
    r.setAttribute("aria-label", i);
    r.className = "cm-specialChar";
    return r;
  }
  ignoreEvent() {
    return false;
  }
}
class vO extends _e {
  constructor(e) {
    super();
    this.width = e;
  }
  eq(e) {
    return e.width == this.width;
  }
  toDOM() {
    let e = document.createElement("span");
    e.textContent = "\t";
    e.className = "cm-tab";
    e.style.width = this.width + "px";
    return e;
  }
  ignoreEvent() {
    return false;
  }
}
function CO() {
  return TO;
}
const qO = X.line({
  class: "cm-activeLine"
});
const TO = K.fromClass(class {
  constructor(n) {
    this.decorations = this.getDeco(n);
  }
  update(n) {
    if (n.docChanged || n.selectionSet) {
      this.decorations = this.getDeco(n.view);
    }
  }
  getDeco(n) {
    let e = -1;
    let t = [];
    for (let i of n.state.selection.ranges) {
      let s = n.lineBlockAt(i.head);
      if (s.from > e) {
        t.push(qO.range(s.from));
        e = s.from;
      }
    }
    return X.set(t);
  }
}, {
  decorations: n => n.decorations
});
class $O extends _e {
  constructor(e) {
    super();
    this.content = e;
  }
  toDOM(e) {
    let t = document.createElement("span");
    t.className = "cm-placeholder";
    t.style.pointerEvents = "none";
    t.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : typeof this.content == "function" ? this.content(e) : this.content.cloneNode(true));
    t.setAttribute("aria-hidden", "true");
    return t;
  }
  coordsAt(e) {
    let t = e.firstChild ? Fi(e.firstChild) : [];
    if (!t.length) {
      return null;
    }
    let i = window.getComputedStyle(e.parentNode);
    let s = on(t[0], i.direction != "rtl");
    let r = parseInt(i.lineHeight);
    if (s.bottom - s.top > r * 1.5) {
      return {
        left: s.left,
        right: s.right,
        top: s.top,
        bottom: s.top + r
      };
    } else {
      return s;
    }
  }
  ignoreEvent() {
    return false;
  }
}
function XO(n) {
  let e = K.fromClass(class {
    constructor(t) {
      this.view = t;
      this.placeholder = n ? X.set([X.widget({
        widget: new $O(n),
        side: 1
      }).range(0)]) : X.none;
    }
    get decorations() {
      if (this.view.state.doc.length) {
        return X.none;
      } else {
        return this.placeholder;
      }
    }
  }, {
    decorations: t => t.decorations
  });
  if (typeof n == "string") {
    return [e, v.contentAttributes.of({
      "aria-placeholder": n
    })];
  } else {
    return e;
  }
}
const vo = 2000;
function EO(n, e, t) {
  let i = Math.min(e.line, t.line);
  let s = Math.max(e.line, t.line);
  let r = [];
  if (e.off > vo || t.off > vo || e.col < 0 || t.col < 0) {
    let o = Math.min(e.off, t.off);
    let l = Math.max(e.off, t.off);
    for (let a = i; a <= s; a++) {
      let h = n.doc.line(a);
      if (h.length <= l) {
        r.push(y.range(h.from + o, h.to + l));
      }
    }
  } else {
    let o = Math.min(e.col, t.col);
    let l = Math.max(e.col, t.col);
    for (let a = i; a <= s; a++) {
      let h = n.doc.line(a);
      let c = no(h.text, o, n.tabSize, true);
      if (c < 0) {
        r.push(y.cursor(h.to));
      } else {
        let f = no(h.text, l, n.tabSize);
        r.push(y.range(h.from + c, h.from + f));
      }
    }
  }
  return r;
}
function AO(n, e) {
  let t = n.coordsAtPos(n.viewport.from);
  if (t) {
    return Math.round(Math.abs((t.left - e) / n.defaultCharacterWidth));
  } else {
    return -1;
  }
}
function Ya(n, e) {
  let t = n.posAtCoords({
    x: e.clientX,
    y: e.clientY
  }, false);
  let i = n.state.doc.lineAt(t);
  let s = t - i.from;
  let r = s > vo ? -1 : s == i.length ? AO(n, e.clientX) : Ei(i.text, n.state.tabSize, t - i.from);
  return {
    line: i.number,
    col: r,
    off: s
  };
}
function PO(n, e) {
  let t = Ya(n, e);
  let i = n.state.selection;
  if (t) {
    return {
      update(s) {
        if (s.docChanged) {
          let r = s.changes.mapPos(s.startState.doc.line(t.line).from);
          let o = s.state.doc.lineAt(r);
          t = {
            line: o.number,
            col: t.col,
            off: Math.min(t.off, o.length)
          };
          i = i.map(s.changes);
        }
      },
      get(s, r, o) {
        let l = Ya(n, s);
        if (!l) {
          return i;
        }
        let a = EO(n.state, t, l);
        if (a.length) {
          if (o) {
            return y.create(a.concat(i.ranges));
          } else {
            return y.create(a);
          }
        } else {
          return i;
        }
      }
    };
  } else {
    return null;
  }
}
function MO(n) {
  let e = t => t.altKey && t.button == 0;
  return v.mouseSelectionStyle.of((t, i) => e(i) ? PO(t, i) : null);
}
const RO = {
  Alt: [18, n => !!n.altKey],
  Control: [17, n => !!n.ctrlKey],
  Shift: [16, n => !!n.shiftKey],
  Meta: [91, n => !!n.metaKey]
};
const VO = {
  style: "cursor: crosshair"
};
function WO(n = {}) {
  let [e, t] = RO[n.key || "Alt"];
  let i = K.fromClass(class {
    constructor(s) {
      this.view = s;
      this.isDown = false;
    }
    set(s) {
      if (this.isDown != s) {
        this.isDown = s;
        this.view.update([]);
      }
    }
  }, {
    eventObservers: {
      keydown(s) {
        this.set(s.keyCode == e || t(s));
      },
      keyup(s) {
        if (s.keyCode == e || !t(s)) {
          this.set(false);
        }
      },
      mousemove(s) {
        this.set(t(s));
      }
    }
  });
  return [i, v.contentAttributes.of(s => {
    var r;
    if ((r = s.plugin(i)) !== null && r !== undefined && r.isDown) {
      return VO;
    } else {
      return null;
    }
  })];
}
const Wn = "-10000px";
class Df {
  constructor(e, t, i, s) {
    this.facet = t;
    this.createTooltipView = i;
    this.removeTooltipView = s;
    this.input = e.state.facet(t);
    this.tooltips = this.input.filter(o => o);
    let r = null;
    this.tooltipViews = this.tooltips.map(o => r = i(o, r));
  }
  update(e, t) {
    var i;
    let s = e.state.facet(this.facet);
    let r = s.filter(a => a);
    if (s === this.input) {
      for (let a of this.tooltipViews) {
        if (a.update) {
          a.update(e);
        }
      }
      return false;
    }
    let o = [];
    let l = t ? [] : null;
    for (let a = 0; a < r.length; a++) {
      let h = r[a];
      let c = -1;
      if (h) {
        for (let f = 0; f < this.tooltips.length; f++) {
          let u = this.tooltips[f];
          if (u && u.create == h.create) {
            c = f;
          }
        }
        if (c < 0) {
          o[a] = this.createTooltipView(h, a ? o[a - 1] : null);
          if (l) {
            l[a] = !!h.above;
          }
        } else {
          let f = o[a] = this.tooltipViews[c];
          if (l) {
            l[a] = t[c];
          }
          if (f.update) {
            f.update(e);
          }
        }
      }
    }
    for (let a of this.tooltipViews) {
      if (o.indexOf(a) < 0) {
        this.removeTooltipView(a);
        if ((i = a.destroy) !== null && i !== undefined) {
          i.call(a);
        }
      }
    }
    if (t) {
      l.forEach((a, h) => t[h] = a);
      t.length = l.length;
    }
    this.input = s;
    this.tooltips = r;
    this.tooltipViews = o;
    return true;
  }
}
function DO(n) {
  let e = n.dom.ownerDocument.documentElement;
  return {
    top: 0,
    left: 0,
    bottom: e.clientHeight,
    right: e.clientWidth
  };
}
const br = T.define({
  combine: n => {
    return {
      position: $.ios ? "absolute" : n.find(s => s.position)?.position || "fixed",
      parent: n.find(s => s.parent)?.parent || null,
      tooltipSpace: n.find(s => s.tooltipSpace)?.tooltipSpace || DO
    };
  }
});
const Ga = new WeakMap();
const ll = K.fromClass(class {
  constructor(n) {
    this.view = n;
    this.above = [];
    this.inView = true;
    this.madeAbsolute = false;
    this.lastTransaction = 0;
    this.measureTimeout = -1;
    let e = n.state.facet(br);
    this.position = e.position;
    this.parent = e.parent;
    this.classes = n.themeClasses;
    this.createContainer();
    this.measureReq = {
      read: this.readMeasure.bind(this),
      write: this.writeMeasure.bind(this),
      key: this
    };
    this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null;
    this.manager = new Df(n, js, (t, i) => this.createTooltip(t, i), t => {
      if (this.resizeObserver) {
        this.resizeObserver.unobserve(t.dom);
      }
      t.dom.remove();
    });
    this.above = this.manager.tooltips.map(t => !!t.above);
    this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver(t => {
      if (Date.now() > this.lastTransaction - 50 && t.length > 0 && t[t.length - 1].intersectionRatio < 1) {
        this.measureSoon();
      }
    }, {
      threshold: [1]
    }) : null;
    this.observeIntersection();
    n.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this));
    this.maybeMeasure();
  }
  createContainer() {
    if (this.parent) {
      this.container = document.createElement("div");
      this.container.style.position = "relative";
      this.container.className = this.view.themeClasses;
      this.parent.appendChild(this.container);
    } else {
      this.container = this.view.dom;
    }
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let n of this.manager.tooltipViews) {
        this.intersectionObserver.observe(n.dom);
      }
    }
  }
  measureSoon() {
    if (this.measureTimeout < 0) {
      this.measureTimeout = setTimeout(() => {
        this.measureTimeout = -1;
        this.maybeMeasure();
      }, 50);
    }
  }
  update(n) {
    if (n.transactions.length) {
      this.lastTransaction = Date.now();
    }
    let e = this.manager.update(n, this.above);
    if (e) {
      this.observeIntersection();
    }
    let t = e || n.geometryChanged;
    let i = n.state.facet(br);
    if (i.position != this.position && !this.madeAbsolute) {
      this.position = i.position;
      for (let s of this.manager.tooltipViews) {
        s.dom.style.position = this.position;
      }
      t = true;
    }
    if (i.parent != this.parent) {
      if (this.parent) {
        this.container.remove();
      }
      this.parent = i.parent;
      this.createContainer();
      for (let s of this.manager.tooltipViews) {
        this.container.appendChild(s.dom);
      }
      t = true;
    } else if (this.parent && this.view.themeClasses != this.classes) {
      this.classes = this.container.className = this.view.themeClasses;
    }
    if (t) {
      this.maybeMeasure();
    }
  }
  createTooltip(n, e) {
    let t = n.create(this.view);
    let i = e ? e.dom : null;
    t.dom.classList.add("cm-tooltip");
    if (n.arrow && !t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let s = document.createElement("div");
      s.className = "cm-tooltip-arrow";
      t.dom.appendChild(s);
    }
    t.dom.style.position = this.position;
    t.dom.style.top = Wn;
    t.dom.style.left = "0px";
    this.container.insertBefore(t.dom, i);
    if (t.mount) {
      t.mount(this.view);
    }
    if (this.resizeObserver) {
      this.resizeObserver.observe(t.dom);
    }
    return t;
  }
  destroy() {
    var n;
    var e;
    var t;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let i of this.manager.tooltipViews) {
      i.dom.remove();
      if ((n = i.destroy) !== null && n !== undefined) {
        n.call(i);
      }
    }
    if (this.parent) {
      this.container.remove();
    }
    if ((e = this.resizeObserver) !== null && e !== undefined) {
      e.disconnect();
    }
    if ((t = this.intersectionObserver) !== null && t !== undefined) {
      t.disconnect();
    }
    clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let n = 1;
    let e = 1;
    let t = false;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let {
        dom: r
      } = this.manager.tooltipViews[0];
      if ($.safari) {
        let o = r.getBoundingClientRect();
        t = Math.abs(o.top + 10000) > 1 || Math.abs(o.left) > 1;
      } else {
        t = !!r.offsetParent && r.offsetParent != this.container.ownerDocument.body;
      }
    }
    if (t || this.position == "absolute") {
      if (this.parent) {
        let r = this.parent.getBoundingClientRect();
        if (r.width && r.height) {
          n = r.width / this.parent.offsetWidth;
          e = r.height / this.parent.offsetHeight;
        }
      } else {
        ({
          scaleX: n,
          scaleY: e
        } = this.view.viewState);
      }
    }
    let i = this.view.scrollDOM.getBoundingClientRect();
    let s = nl(this.view);
    return {
      visible: {
        left: i.left + s.left,
        top: i.top + s.top,
        right: i.right - s.right,
        bottom: i.bottom - s.bottom
      },
      parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
      pos: this.manager.tooltips.map((r, o) => {
        let l = this.manager.tooltipViews[o];
        if (l.getCoords) {
          return l.getCoords(r.pos);
        } else {
          return this.view.coordsAtPos(r.pos);
        }
      }),
      size: this.manager.tooltipViews.map(({
        dom: r
      }) => r.getBoundingClientRect()),
      space: this.view.state.facet(br).tooltipSpace(this.view),
      scaleX: n,
      scaleY: e,
      makeAbsolute: t
    };
  }
  writeMeasure(n) {
    if (n.makeAbsolute) {
      this.madeAbsolute = true;
      this.position = "absolute";
      for (let l of this.manager.tooltipViews) {
        l.dom.style.position = "absolute";
      }
    }
    let {
      visible: t,
      space: i,
      scaleX: s,
      scaleY: r
    } = n;
    let o = [];
    for (let l = 0; l < this.manager.tooltips.length; l++) {
      let a = this.manager.tooltips[l];
      let h = this.manager.tooltipViews[l];
      let {
        dom: c
      } = h;
      let f = n.pos[l];
      let u = n.size[l];
      if (!f || a.clip !== false && (f.bottom <= Math.max(t.top, i.top) || f.top >= Math.min(t.bottom, i.bottom) || f.right < Math.max(t.left, i.left) - 0.1 || f.left > Math.min(t.right, i.right) + 0.1)) {
        c.style.top = Wn;
        continue;
      }
      let d = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null;
      let m = d ? 7 : 0;
      let p = u.right - u.left;
      let O = Ga.get(h) ?? u.bottom - u.top;
      let b = h.offset || NO;
      let x = this.view.textDirection == F.LTR;
      let Q = u.width > i.right - i.left ? x ? i.left : i.right - u.width : x ? Math.max(i.left, Math.min(f.left - (d ? 14 : 0) + b.x, i.right - p)) : Math.min(Math.max(i.left, f.left - p + (d ? 14 : 0) - b.x), i.right - p);
      let C = this.above[l];
      if (!a.strictSide && (C ? f.top - O - m - b.y < i.top : f.bottom + O + m + b.y > i.bottom) && C == i.bottom - f.bottom > f.top - i.top) {
        C = this.above[l] = !C;
      }
      let w = (C ? f.top - i.top : i.bottom - f.bottom) - m;
      if (w < O && h.resize !== false) {
        if (w < this.view.defaultLineHeight) {
          c.style.top = Wn;
          continue;
        }
        Ga.set(h, O);
        c.style.height = (O = w) / r + "px";
      } else {
        c.style.height &&= "";
      }
      let S = C ? f.top - O - m - b.y : f.bottom + m + b.y;
      let k = Q + p;
      if (h.overlap !== true) {
        for (let A of o) {
          if (A.left < k && A.right > Q && A.top < S + O && A.bottom > S) {
            S = C ? A.top - O - 2 - m : A.bottom + m + 2;
          }
        }
      }
      if (this.position == "absolute") {
        c.style.top = (S - n.parent.top) / r + "px";
        Ia(c, (Q - n.parent.left) / s);
      } else {
        c.style.top = S / r + "px";
        Ia(c, Q / s);
      }
      if (d) {
        let A = f.left + (x ? b.x : -b.x) - (Q + 14 - 7);
        d.style.left = A / s + "px";
      }
      if (h.overlap !== true) {
        o.push({
          left: Q,
          top: S,
          right: k,
          bottom: S + O
        });
      }
      c.classList.toggle("cm-tooltip-above", C);
      c.classList.toggle("cm-tooltip-below", !C);
      if (h.positioned) {
        h.positioned(n.space);
      }
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView))) {
      for (let n of this.manager.tooltipViews) {
        n.dom.style.top = Wn;
      }
    }
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
});
function Ia(n, e) {
  let t = parseInt(n.style.left, 10);
  if (isNaN(t) || Math.abs(e - t) > 1) {
    n.style.left = e + "px";
  }
}
const LO = v.baseTheme({
  ".cm-tooltip": {
    zIndex: 500,
    boxSizing: "border-box"
  },
  "&light .cm-tooltip": {
    border: "1px solid #bbb",
    backgroundColor: "#f5f5f5"
  },
  "&light .cm-tooltip-section:not(:first-child)": {
    borderTop: "1px solid #bbb"
  },
  "&dark .cm-tooltip": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tooltip-arrow": {
    height: "7px",
    width: "14px",
    position: "absolute",
    zIndex: -1,
    overflow: "hidden",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: "7px solid transparent",
      borderRight: "7px solid transparent"
    },
    ".cm-tooltip-above &": {
      bottom: "-7px",
      "&:before": {
        borderTop: "7px solid #bbb"
      },
      "&:after": {
        borderTop: "7px solid #f5f5f5",
        bottom: "1px"
      }
    },
    ".cm-tooltip-below &": {
      top: "-7px",
      "&:before": {
        borderBottom: "7px solid #bbb"
      },
      "&:after": {
        borderBottom: "7px solid #f5f5f5",
        top: "1px"
      }
    }
  },
  "&dark .cm-tooltip .cm-tooltip-arrow": {
    "&:before": {
      borderTopColor: "#333338",
      borderBottomColor: "#333338"
    },
    "&:after": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    }
  }
});
const NO = {
  x: 0,
  y: 0
};
const js = T.define({
  enables: [ll, LO]
});
const Qs = T.define({
  combine: n => n.reduce((e, t) => e.concat(t), [])
});
class _s {
  static create(e) {
    return new _s(e);
  }
  constructor(e) {
    this.view = e;
    this.mounted = false;
    this.dom = document.createElement("div");
    this.dom.classList.add("cm-tooltip-hover");
    this.manager = new Df(e, Qs, (t, i) => this.createHostedView(t, i), t => t.dom.remove());
  }
  createHostedView(e, t) {
    let i = e.create(this.view);
    i.dom.classList.add("cm-tooltip-section");
    this.dom.insertBefore(i.dom, t ? t.dom.nextSibling : this.dom.firstChild);
    if (this.mounted && i.mount) {
      i.mount(this.view);
    }
    return i;
  }
  mount(e) {
    for (let t of this.manager.tooltipViews) {
      if (t.mount) {
        t.mount(e);
      }
    }
    this.mounted = true;
  }
  positioned(e) {
    for (let t of this.manager.tooltipViews) {
      if (t.positioned) {
        t.positioned(e);
      }
    }
  }
  update(e) {
    this.manager.update(e);
  }
  destroy() {
    var e;
    for (let t of this.manager.tooltipViews) {
      if ((e = t.destroy) !== null && e !== undefined) {
        e.call(t);
      }
    }
  }
  passProp(e) {
    let t;
    for (let i of this.manager.tooltipViews) {
      let s = i[e];
      if (s !== undefined) {
        if (t === undefined) {
          t = s;
        } else if (t !== s) {
          return;
        }
      }
    }
    return t;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
}
const BO = js.compute([Qs], n => {
  let e = n.facet(Qs);
  if (e.length === 0) {
    return null;
  } else {
    return {
      pos: Math.min(...e.map(t => t.pos)),
      end: Math.max(...e.map(t => {
        return t.end ?? t.pos;
      })),
      create: _s.create,
      above: e[0].above,
      arrow: e.some(t => t.arrow)
    };
  }
});
const Lf = T.define();
class YO {
  constructor(e, t, i, s, r, o) {
    this.view = e;
    this.source = t;
    this.field = i;
    this.locked = s;
    this.setHover = r;
    this.hoverTime = o;
    this.hoverTimeout = -1;
    this.restartTimeout = -1;
    this.pending = null;
    this.lastMove = {
      x: 0,
      y: 0,
      target: e.dom,
      time: 0
    };
    this.checkHover = this.checkHover.bind(this);
    e.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this));
    e.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update(e) {
    if (this.pending) {
      this.pending = null;
      clearTimeout(this.restartTimeout);
      this.restartTimeout = setTimeout(() => this.startHover(), 20);
    }
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    this.hoverTimeout = -1;
    if (this.active.length) {
      return;
    }
    let e = Date.now() - this.lastMove.time;
    if (e < this.hoverTime) {
      this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e);
    } else {
      this.startHover();
    }
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let {
      view: e,
      lastMove: t
    } = this;
    let i = e.docView.tile.nearest(t.target);
    if (!i) {
      return;
    }
    let s;
    let r = 1;
    if (i.isWidget()) {
      s = i.posAtStart;
    } else {
      s = e.posAtCoords(t);
      if (s == null) {
        return;
      }
      let o = e.coordsAtPos(s);
      if (!o || t.y < o.top || t.y > o.bottom || t.x < o.left - e.defaultCharacterWidth || t.x > o.right + e.defaultCharacterWidth) {
        return;
      }
      let l = e.bidiSpans(e.state.doc.lineAt(s)).find(h => h.from <= s && h.to >= s);
      let a = l && l.dir == F.RTL ? -1 : 1;
      r = t.x < o.left ? -a : a;
    }
    this.activateHover(e, s, r);
  }
  activateHover(e, t, i, s) {
    let r = this.source(e, t, i);
    let o = l => {
      if (l && (!Array.isArray(l) || !!l.length)) {
        let a = Array.isArray(l) ? l : [l];
        if (s) {
          this.locked.set(a, s);
        }
        e.dispatch({
          effects: this.setHover.of(a)
        });
      }
    };
    if (r && "then" in r) {
      let l = this.pending = {
        pos: t
      };
      r.then(a => {
        if (this.pending == l) {
          this.pending = null;
          o(a);
        }
      }, a => $e(e.state, a, "hover tooltip"));
    } else {
      o(r);
    }
  }
  get tooltip() {
    let e = this.view.plugin(ll);
    let t = e ? e.manager.tooltips.findIndex(i => i.create == _s.create) : -1;
    if (t > -1) {
      return e.manager.tooltipViews[t];
    } else {
      return null;
    }
  }
  mousemove(e) {
    this.lastMove = {
      x: e.clientX,
      y: e.clientY,
      target: e.target,
      time: Date.now()
    };
    if (this.hoverTimeout < 0) {
      this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime);
    }
    let {
      active: s,
      tooltip: r
    } = this;
    if (s.length && !this.locked.has(s) && r && !GO(r.dom, e) || this.pending) {
      let {
        pos: o
      } = s[0] || this.pending;
      let l = s[0]?.end ?? o;
      if (o == l ? this.view.posAtCoords(this.lastMove) != o : !IO(this.view, o, l, e.clientX, e.clientY)) {
        this.view.dispatch({
          effects: this.setHover.of([])
        });
        this.pending = null;
      }
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout);
    this.hoverTimeout = -1;
    let {
      active: t
    } = this;
    if (t.length && !this.locked.has(t)) {
      let {
        tooltip: i
      } = this;
      if (i && i.dom.contains(e.relatedTarget)) {
        this.watchTooltipLeave(i.dom);
      } else {
        this.view.dispatch({
          effects: this.setHover.of([])
        });
      }
    }
  }
  watchTooltipLeave(e) {
    let t = i => {
      e.removeEventListener("mouseleave", t);
      let {
        active: s
      } = this;
      if (s.length && !this.locked.has(s) && !this.view.dom.contains(i.relatedTarget)) {
        this.view.dispatch({
          effects: this.setHover.of([])
        });
      }
    };
    e.addEventListener("mouseleave", t);
  }
  destroy() {
    clearTimeout(this.hoverTimeout);
    clearTimeout(this.restartTimeout);
    this.view.dom.removeEventListener("mouseleave", this.mouseleave);
    this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
const Dn = 4;
function GO(n, e) {
  let {
    left: t,
    right: i,
    top: s,
    bottom: r
  } = n.getBoundingClientRect();
  let o;
  if (o = n.querySelector(".cm-tooltip-arrow")) {
    let l = o.getBoundingClientRect();
    s = Math.min(l.top, s);
    r = Math.max(l.bottom, r);
  }
  return e.clientX >= t - Dn && e.clientX <= i + Dn && e.clientY >= s - Dn && e.clientY <= r + Dn;
}
function IO(n, e, t, i, s, r) {
  let o = n.scrollDOM.getBoundingClientRect();
  let l = n.documentTop + n.documentPadding.top + n.contentHeight;
  if (o.left > i || o.right < i || o.top > s || Math.min(o.bottom, l) < s) {
    return false;
  }
  let a = n.posAtCoords({
    x: i,
    y: s
  }, false);
  return a >= e && a <= t;
}
function al(n, e = {}) {
  let t = M.define();
  let i = new WeakMap();
  let s = le.define({
    create() {
      return [];
    },
    update(o, l) {
      let a = i.get(o);
      if (o.length) {
        if (e.hideOnChange && (l.docChanged || l.selection)) {
          o = [];
        } else if (a && a(l)) {
          o = [];
        } else if (e.hideOn) {
          o = o.filter(h => !e.hideOn(l, h));
        }
      }
      if (l.docChanged && o.length) {
        let h = [];
        for (let c of o) {
          let f = l.changes.mapPos(c.pos, -1, Qe.TrackDel);
          if (f != null) {
            let u = Object.assign(Object.create(null), c);
            u.pos = f;
            if (u.end != null) {
              u.end = l.changes.mapPos(u.end);
            }
            h.push(u);
          }
        }
        o = h;
      }
      for (let h of l.effects) {
        if (h.is(t)) {
          o = h.value;
          a = undefined;
        }
        if (h.is(ZO) && !h.value || h.value == s) {
          o = [];
        }
      }
      if (o.length && a) {
        i.set(o, a);
      }
      return o;
    },
    provide: o => Qs.from(o)
  });
  const r = K.define(o => new YO(o, n, s, i, t, e.hoverTime || 300));
  return {
    active: s,
    extension: [s, r, Lf.of(r), BO]
  };
}
function Nf(n, e, t, i = {}) {
  let r = n.state.facet(Lf).map(o => n.plugin(o)).filter(o => !!o);
  if (i.tooltip && i.tooltip.active) {
    let o = r.find(l => l.field == i.tooltip.active);
    if (o) {
      r = [o];
    }
  }
  for (let o of r) {
    o.activateHover(n, e, t, i.until ?? (() => false));
  }
}
function Bf(n, e) {
  let t = n.plugin(ll);
  if (!t) {
    return null;
  }
  let i = t.manager.tooltips.indexOf(e);
  if (i < 0) {
    return null;
  } else {
    return t.manager.tooltipViews[i];
  }
}
const ZO = M.define();
const Za = T.define({
  combine(n) {
    let e;
    let t;
    for (let i of n) {
      e = e || i.topContainer;
      t = t || i.bottomContainer;
    }
    return {
      topContainer: e,
      bottomContainer: t
    };
  }
});
function hl(n, e) {
  let t = n.plugin(Yf);
  let i = t ? t.specs.indexOf(e) : -1;
  if (i > -1) {
    return t.panels[i];
  } else {
    return null;
  }
}
const Yf = K.fromClass(class {
  constructor(n) {
    this.input = n.state.facet(an);
    this.specs = this.input.filter(t => t);
    this.panels = this.specs.map(t => t(n));
    let e = n.state.facet(Za);
    this.top = new Ln(n, true, e.topContainer);
    this.bottom = new Ln(n, false, e.bottomContainer);
    this.top.sync(this.panels.filter(t => t.top));
    this.bottom.sync(this.panels.filter(t => !t.top));
    for (let t of this.panels) {
      t.dom.classList.add("cm-panel");
      if (t.mount) {
        t.mount();
      }
    }
  }
  update(n) {
    let e = n.state.facet(Za);
    if (this.top.container != e.topContainer) {
      this.top.sync([]);
      this.top = new Ln(n.view, true, e.topContainer);
    }
    if (this.bottom.container != e.bottomContainer) {
      this.bottom.sync([]);
      this.bottom = new Ln(n.view, false, e.bottomContainer);
    }
    this.top.syncClasses();
    this.bottom.syncClasses();
    let t = n.state.facet(an);
    if (t != this.input) {
      let i = t.filter(a => a);
      let s = [];
      let r = [];
      let o = [];
      let l = [];
      for (let a of i) {
        let h = this.specs.indexOf(a);
        let c;
        if (h < 0) {
          c = a(n.view);
          l.push(c);
        } else {
          c = this.panels[h];
          if (c.update) {
            c.update(n);
          }
        }
        s.push(c);
        (c.top ? r : o).push(c);
      }
      this.specs = i;
      this.panels = s;
      this.top.sync(r);
      this.bottom.sync(o);
      for (let a of l) {
        a.dom.classList.add("cm-panel");
        if (a.mount) {
          a.mount();
        }
      }
    } else {
      for (let i of this.panels) {
        if (i.update) {
          i.update(n);
        }
      }
    }
  }
  destroy() {
    this.top.sync([]);
    this.bottom.sync([]);
  }
}, {
  provide: n => v.scrollMargins.of(e => {
    let t = e.plugin(n);
    return t && {
      top: t.top.scrollMargin(),
      bottom: t.bottom.scrollMargin()
    };
  })
});
class Ln {
  constructor(e, t, i) {
    this.view = e;
    this.top = t;
    this.container = i;
    this.dom = undefined;
    this.classes = "";
    this.panels = [];
    this.syncClasses();
  }
  sync(e) {
    for (let t of this.panels) {
      if (t.destroy && e.indexOf(t) < 0) {
        t.destroy();
      }
    }
    this.panels = e;
    this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      if (this.dom) {
        this.dom.remove();
        this.dom = undefined;
      }
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div");
      this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom";
      this.dom.style[this.top ? "top" : "bottom"] = "0";
      let t = this.container || this.view.dom;
      t.insertBefore(this.dom, this.top ? t.firstChild : null);
    }
    let e = this.dom.firstChild;
    for (let t of this.panels) {
      if (t.dom.parentNode == this.dom) {
        while (e != t.dom) {
          e = za(e);
        }
        e = e.nextSibling;
      } else {
        this.dom.insertBefore(t.dom, e);
      }
    }
    while (e) {
      e = za(e);
    }
  }
  scrollMargin() {
    if (!this.dom || this.container) {
      return 0;
    } else {
      return Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
    }
  }
  syncClasses() {
    if (!!this.container && this.classes != this.view.themeClasses) {
      for (let e of this.classes.split(" ")) {
        if (e) {
          this.container.classList.remove(e);
        }
      }
      for (let e of (this.classes = this.view.themeClasses).split(" ")) {
        if (e) {
          this.container.classList.add(e);
        }
      }
    }
  }
}
function za(n) {
  let e = n.nextSibling;
  n.remove();
  return e;
}
const an = T.define({
  enables: Yf
});
function zO(n, e) {
  let t;
  let i = new Promise(o => t = o);
  let s = o => jO(o, e, t);
  if (n.state.field(yr, false)) {
    n.dispatch({
      effects: Gf.of(s)
    });
  } else {
    n.dispatch({
      effects: M.appendConfig.of(yr.init(() => [s]))
    });
  }
  let r = If.of(s);
  return {
    close: r,
    result: i.then(o => {
      (n.win.queueMicrotask || (a => n.win.setTimeout(a, 10)))(() => {
        if (n.state.field(yr).indexOf(s) > -1) {
          n.dispatch({
            effects: r
          });
        }
      });
      return o;
    })
  };
}
const yr = le.define({
  create() {
    return [];
  },
  update(n, e) {
    for (let t of e.effects) {
      if (t.is(Gf)) {
        n = [t.value].concat(n);
      } else if (t.is(If)) {
        n = n.filter(i => i != t.value);
      }
    }
    return n;
  },
  provide: n => an.computeN([n], e => e.field(n))
});
const Gf = M.define();
const If = M.define();
function jO(n, e, t) {
  let i = e.content ? e.content(n, () => o(null)) : null;
  if (!i) {
    i = j("form");
    if (e.input) {
      let l = j("input", e.input);
      if (/^(text|password|number|email|tel|url)$/.test(l.type)) {
        l.classList.add("cm-textfield");
      }
      l.name ||= "input";
      i.appendChild(j("label", (e.label || "") + ": ", l));
    } else {
      i.appendChild(document.createTextNode(e.label || ""));
    }
    i.appendChild(document.createTextNode(" "));
    i.appendChild(j("button", {
      class: "cm-button",
      type: "submit"
    }, e.submitLabel || "OK"));
  }
  let s = i.nodeName == "FORM" ? [i] : i.querySelectorAll("form");
  for (let l = 0; l < s.length; l++) {
    let a = s[l];
    a.addEventListener("keydown", h => {
      if (h.keyCode == 27) {
        h.preventDefault();
        o(null);
      } else if (h.keyCode == 13) {
        h.preventDefault();
        o(a);
      }
    });
    a.addEventListener("submit", h => {
      h.preventDefault();
      o(a);
    });
  }
  let r = j("div", i, j("button", {
    onclick: () => o(null),
    "aria-label": n.state.phrase("close"),
    class: "cm-dialog-close",
    type: "button"
  }, ["×"]));
  if (e.class) {
    r.className = e.class;
  }
  r.classList.add("cm-dialog");
  function o(l) {
    if (r.contains(r.ownerDocument.activeElement)) {
      n.focus();
    }
    t(l);
  }
  return {
    dom: r,
    top: e.top,
    mount: () => {
      if (e.focus) {
        let l;
        if (typeof e.focus == "string") {
          l = i.querySelector(e.focus);
        } else {
          l = i.querySelector("input") || i.querySelector("button");
        }
        if (l && "select" in l) {
          l.select();
        } else if (l && "focus" in l) {
          l.focus();
        }
      }
    }
  };
}
class pt extends Mt {
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  eq(e) {
    return false;
  }
  destroy(e) {}
}
pt.prototype.elementClass = "";
pt.prototype.toDOM = undefined;
pt.prototype.mapMode = Qe.TrackBefore;
pt.prototype.startSide = pt.prototype.endSide = -1;
pt.prototype.point = true;
const ns = T.define();
const _O = T.define();
const FO = {
  class: "",
  renderEmptyElements: false,
  elementStyle: "",
  markers: () => L.empty,
  lineMarker: () => null,
  widgetMarker: () => null,
  lineMarkerChange: null,
  initialSpacer: null,
  updateSpacer: null,
  domEventHandlers: {},
  side: "before"
};
const Ki = T.define();
function Zf(n) {
  return [zf(), Ki.of({
    ...FO,
    ...n
  })];
}
const ja = T.define({
  combine: n => n.some(e => e)
});
function zf(n) {
  return [UO];
}
const UO = K.fromClass(class {
  constructor(n) {
    this.view = n;
    this.domAfter = null;
    this.prevViewport = n.viewport;
    this.dom = document.createElement("div");
    this.dom.className = "cm-gutters cm-gutters-before";
    this.dom.setAttribute("aria-hidden", "true");
    this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px";
    this.gutters = n.state.facet(Ki).map(e => new Fa(n, e));
    this.fixed = !n.state.facet(ja);
    for (let e of this.gutters) {
      if (e.config.side == "after") {
        this.getDOMAfter().appendChild(e.dom);
      } else {
        this.dom.appendChild(e.dom);
      }
    }
    if (this.fixed) {
      this.dom.style.position = "sticky";
    }
    this.syncGutters(false);
    n.scrollDOM.insertBefore(this.dom, n.contentDOM);
  }
  getDOMAfter() {
    if (!this.domAfter) {
      this.domAfter = document.createElement("div");
      this.domAfter.className = "cm-gutters cm-gutters-after";
      this.domAfter.setAttribute("aria-hidden", "true");
      this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px";
      this.domAfter.style.position = this.fixed ? "sticky" : "";
      this.view.scrollDOM.appendChild(this.domAfter);
    }
    return this.domAfter;
  }
  update(n) {
    if (this.updateGutters(n)) {
      let e = this.prevViewport;
      let t = n.view.viewport;
      let i = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(i < (t.to - t.from) * 0.8);
    }
    if (n.geometryChanged) {
      let e = this.view.contentHeight / this.view.scaleY + "px";
      this.dom.style.minHeight = e;
      if (this.domAfter) {
        this.domAfter.style.minHeight = e;
      }
    }
    if (this.view.state.facet(ja) != !this.fixed) {
      this.fixed = !this.fixed;
      this.dom.style.position = this.fixed ? "sticky" : "";
      if (this.domAfter) {
        this.domAfter.style.position = this.fixed ? "sticky" : "";
      }
    }
    this.prevViewport = n.view.viewport;
  }
  syncGutters(n) {
    let e = this.dom.nextSibling;
    if (n) {
      this.dom.remove();
      if (this.domAfter) {
        this.domAfter.remove();
      }
    }
    let t = L.iter(this.view.state.facet(ns), this.view.viewport.from);
    let i = [];
    let s = this.gutters.map(r => new HO(r, this.view.viewport, -this.view.documentPadding.top));
    for (let r of this.view.viewportLineBlocks) {
      if (i.length) {
        i = [];
      }
      if (Array.isArray(r.type)) {
        let o = true;
        for (let l of r.type) {
          if (l.type == Se.Text && o) {
            Co(t, i, l.from);
            for (let a of s) {
              a.line(this.view, l, i);
            }
            o = false;
          } else if (l.widget) {
            for (let a of s) {
              a.widget(this.view, l);
            }
          }
        }
      } else if (r.type == Se.Text) {
        Co(t, i, r.from);
        for (let o of s) {
          o.line(this.view, r, i);
        }
      } else if (r.widget) {
        for (let o of s) {
          o.widget(this.view, r);
        }
      }
    }
    for (let r of s) {
      r.finish();
    }
    if (n) {
      this.view.scrollDOM.insertBefore(this.dom, e);
      if (this.domAfter) {
        this.view.scrollDOM.appendChild(this.domAfter);
      }
    }
  }
  updateGutters(n) {
    let e = n.startState.facet(Ki);
    let t = n.state.facet(Ki);
    let i = n.docChanged || n.heightChanged || n.viewportChanged || !L.eq(n.startState.facet(ns), n.state.facet(ns), n.view.viewport.from, n.view.viewport.to);
    if (e == t) {
      for (let s of this.gutters) {
        if (s.update(n)) {
          i = true;
        }
      }
    } else {
      i = true;
      let s = [];
      for (let r of t) {
        let o = e.indexOf(r);
        if (o < 0) {
          s.push(new Fa(this.view, r));
        } else {
          this.gutters[o].update(n);
          s.push(this.gutters[o]);
        }
      }
      for (let r of this.gutters) {
        r.dom.remove();
        if (s.indexOf(r) < 0) {
          r.destroy();
        }
      }
      for (let r of s) {
        if (r.config.side == "after") {
          this.getDOMAfter().appendChild(r.dom);
        } else {
          this.dom.appendChild(r.dom);
        }
      }
      this.gutters = s;
    }
    return i;
  }
  destroy() {
    for (let n of this.gutters) {
      n.destroy();
    }
    this.dom.remove();
    if (this.domAfter) {
      this.domAfter.remove();
    }
  }
}, {
  provide: n => v.scrollMargins.of(e => {
    let t = e.plugin(n);
    if (!t || t.gutters.length == 0 || !t.fixed) {
      return null;
    }
    let i = t.dom.offsetWidth * e.scaleX;
    let s = t.domAfter ? t.domAfter.offsetWidth * e.scaleX : 0;
    if (e.textDirection == F.LTR) {
      return {
        left: i,
        right: s
      };
    } else {
      return {
        right: i,
        left: s
      };
    }
  })
});
function _a(n) {
  if (Array.isArray(n)) {
    return n;
  } else {
    return [n];
  }
}
function Co(n, e, t) {
  while (n.value && n.from <= t) {
    if (n.from == t) {
      e.push(n.value);
    }
    n.next();
  }
}
class HO {
  constructor(e, t, i) {
    this.gutter = e;
    this.height = i;
    this.i = 0;
    this.cursor = L.iter(e.markers, t.from);
  }
  addElement(e, t, i) {
    let {
      gutter: s
    } = this;
    let r = (t.top - this.height) / e.scaleY;
    let o = t.height / e.scaleY;
    if (this.i == s.elements.length) {
      let l = new jf(e, o, r, i);
      s.elements.push(l);
      s.dom.appendChild(l.dom);
    } else {
      s.elements[this.i].update(e, o, r, i);
    }
    this.height = t.bottom;
    this.i++;
  }
  line(e, t, i) {
    let s = [];
    Co(this.cursor, s, t.from);
    if (i.length) {
      s = s.concat(i);
    }
    let r = this.gutter.config.lineMarker(e, t, s);
    if (r) {
      s.unshift(r);
    }
    let o = this.gutter;
    if (s.length != 0 || !!o.config.renderEmptyElements) {
      this.addElement(e, t, s);
    }
  }
  widget(e, t) {
    let i = this.gutter.config.widgetMarker(e, t.widget, t);
    let s = i ? [i] : null;
    for (let r of e.state.facet(_O)) {
      let o = r(e, t.widget, t);
      if (o) {
        (s ||= []).push(o);
      }
    }
    if (s) {
      this.addElement(e, t, s);
    }
  }
  finish() {
    let e = this.gutter;
    while (e.elements.length > this.i) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom);
      t.destroy();
    }
  }
}
class Fa {
  constructor(e, t) {
    this.view = e;
    this.config = t;
    this.elements = [];
    this.spacer = null;
    this.dom = document.createElement("div");
    this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in t.domEventHandlers) {
      this.dom.addEventListener(i, s => {
        let r = s.target;
        let o;
        if (r != this.dom && this.dom.contains(r)) {
          while (r.parentNode != this.dom) {
            r = r.parentNode;
          }
          let a = r.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else {
          o = s.clientY;
        }
        let l = e.lineBlockAtHeight(o - e.documentTop);
        if (t.domEventHandlers[i](e, l, s)) {
          s.preventDefault();
        }
      });
    }
    this.markers = _a(t.markers(e));
    if (t.initialSpacer) {
      this.spacer = new jf(e, 0, 0, [t.initialSpacer(e)]);
      this.dom.appendChild(this.spacer.dom);
      this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none";
    }
  }
  update(e) {
    let t = this.markers;
    this.markers = _a(this.config.markers(e.view));
    if (this.spacer && this.config.updateSpacer) {
      let s = this.config.updateSpacer(this.spacer.markers[0], e);
      if (s != this.spacer.markers[0]) {
        this.spacer.update(e.view, 0, 0, [s]);
      }
    }
    let i = e.view.viewport;
    return !L.eq(this.markers, t, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : false);
  }
  destroy() {
    for (let e of this.elements) {
      e.destroy();
    }
  }
}
class jf {
  constructor(e, t, i, s) {
    this.height = -1;
    this.above = 0;
    this.markers = [];
    this.dom = document.createElement("div");
    this.dom.className = "cm-gutterElement";
    this.update(e, t, i, s);
  }
  update(e, t, i, s) {
    if (this.height != t) {
      this.height = t;
      this.dom.style.height = t + "px";
    }
    if (this.above != i) {
      this.dom.style.marginTop = (this.above = i) ? i + "px" : "";
    }
    if (!KO(this.markers, s)) {
      this.setMarkers(e, s);
    }
  }
  setMarkers(e, t) {
    let i = "cm-gutterElement";
    let s = this.dom.firstChild;
    for (let r = 0, o = 0;;) {
      let l = o;
      let a = r < t.length ? t[r++] : null;
      let h = false;
      if (a) {
        let c = a.elementClass;
        if (c) {
          i += " " + c;
        }
        for (let f = o; f < this.markers.length; f++) {
          if (this.markers[f].compare(a)) {
            l = f;
            h = true;
            break;
          }
        }
      } else {
        l = this.markers.length;
      }
      while (o < l) {
        let c = this.markers[o++];
        if (c.toDOM) {
          c.destroy(s);
          let f = s.nextSibling;
          s.remove();
          s = f;
        }
      }
      if (!a) {
        break;
      }
      if (a.toDOM) {
        if (h) {
          s = s.nextSibling;
        } else {
          this.dom.insertBefore(a.toDOM(e), s);
        }
      }
      if (h) {
        o++;
      }
    }
    this.dom.className = i;
    this.markers = t;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function KO(n, e) {
  if (n.length != e.length) {
    return false;
  }
  for (let t = 0; t < n.length; t++) {
    if (!n[t].compare(e[t])) {
      return false;
    }
  }
  return true;
}
const JO = T.define();
const eg = T.define();
const di = T.define({
  combine(n) {
    return Je(n, {
      formatNumber: String,
      domEventHandlers: {}
    }, {
      domEventHandlers(e, t) {
        let i = Object.assign({}, e);
        for (let s in t) {
          let r = i[s];
          let o = t[s];
          i[s] = r ? (l, a, h) => r(l, a, h) || o(l, a, h) : o;
        }
        return i;
      }
    });
  }
});
class xr extends pt {
  constructor(e) {
    super();
    this.number = e;
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function Qr(n, e) {
  return n.state.facet(di).formatNumber(e, n.state);
}
const tg = Ki.compute([di], n => ({
  class: "cm-lineNumbers",
  renderEmptyElements: false,
  markers(e) {
    return e.state.facet(JO);
  },
  lineMarker(e, t, i) {
    if (i.some(s => s.toDOM)) {
      return null;
    } else {
      return new xr(Qr(e, e.state.doc.lineAt(t.from).number));
    }
  },
  widgetMarker: (e, t, i) => {
    for (let s of e.state.facet(eg)) {
      let r = s(e, t, i);
      if (r) {
        return r;
      }
    }
    return null;
  },
  lineMarkerChange: e => e.startState.facet(di) != e.state.facet(di),
  initialSpacer(e) {
    return new xr(Qr(e, Ua(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let i = Qr(t.view, Ua(t.view.state.doc.lines));
    if (i == e.number) {
      return e;
    } else {
      return new xr(i);
    }
  },
  domEventHandlers: n.facet(di).domEventHandlers,
  side: "before"
}));
function ig(n = {}) {
  return [di.of(n), zf(), tg];
}
function Ua(n) {
  let e = 9;
  while (e < n) {
    e = e * 10 + 9;
  }
  return e;
}
const ng = new class extends pt {
  constructor() {
    super(...arguments);
    this.elementClass = "cm-activeLineGutter";
  }
}();
const sg = ns.compute(["selection"], n => {
  let e = [];
  let t = -1;
  for (let i of n.selection.ranges) {
    let s = n.doc.lineAt(i.head).from;
    if (s > t) {
      t = s;
      e.push(ng.range(s));
    }
  }
  return L.of(e);
});
function rg() {
  return sg;
}
const _f = 1024;
let og = 0;
class Sr {
  constructor(e, t) {
    this.from = e;
    this.to = t;
  }
}
class N {
  constructor(e = {}) {
    this.id = og++;
    this.perNode = !!e.perNode;
    this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    });
    this.combine = e.combine || null;
  }
  add(e) {
    if (this.perNode) {
      throw new RangeError("Can't add per-node props to node types");
    }
    if (typeof e != "function") {
      e = We.match(e);
    }
    return t => {
      let i = e(t);
      if (i === undefined) {
        return null;
      } else {
        return [this, i];
      }
    };
  }
}
N.closedBy = new N({
  deserialize: n => n.split(" ")
});
N.openedBy = new N({
  deserialize: n => n.split(" ")
});
N.group = new N({
  deserialize: n => n.split(" ")
});
N.isolate = new N({
  deserialize: n => {
    if (n && n != "rtl" && n != "ltr" && n != "auto") {
      throw new RangeError("Invalid value for isolate: " + n);
    }
    return n || "auto";
  }
});
N.contextHash = new N({
  perNode: true
});
N.lookAhead = new N({
  perNode: true
});
N.mounted = new N({
  perNode: true
});
class Ji {
  constructor(e, t, i, s = false) {
    this.tree = e;
    this.overlay = t;
    this.parser = i;
    this.bracketed = s;
  }
  static get(e) {
    return e && e.props && e.props[N.mounted.id];
  }
}
const lg = Object.create(null);
class We {
  constructor(e, t, i, s = 0) {
    this.name = e;
    this.props = t;
    this.id = i;
    this.flags = s;
  }
  static define(e) {
    let t = e.props && e.props.length ? Object.create(null) : lg;
    let i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0);
    let s = new We(e.name || "", t, e.id, i);
    if (e.props) {
      for (let r of e.props) {
        if (!Array.isArray(r)) {
          r = r(s);
        }
        if (r) {
          if (r[0].perNode) {
            throw new RangeError("Can't store a per-node prop on a node type");
          }
          t[r[0].id] = r[1];
        }
      }
    }
    return s;
  }
  prop(e) {
    return this.props[e.id];
  }
  get isTop() {
    return (this.flags & 1) > 0;
  }
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  get isError() {
    return (this.flags & 4) > 0;
  }
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  is(e) {
    if (typeof e == "string") {
      if (this.name == e) {
        return true;
      }
      let t = this.prop(N.group);
      if (t) {
        return t.indexOf(e) > -1;
      } else {
        return false;
      }
    }
    return this.id == e;
  }
  static match(e) {
    let t = Object.create(null);
    for (let i in e) {
      for (let s of i.split(" ")) {
        t[s] = e[i];
      }
    }
    return i => {
      for (let s = i.prop(N.group), r = -1; r < (s ? s.length : 0); r++) {
        let o = t[r < 0 ? i.name : s[r]];
        if (o) {
          return o;
        }
      }
    };
  }
}
We.none = new We("", Object.create(null), 0, 8);
class cl {
  constructor(e) {
    this.types = e;
    for (let t = 0; t < e.length; t++) {
      if (e[t].id != t) {
        throw new RangeError("Node type ids should correspond to array positions when creating a node set");
      }
    }
  }
  extend(...e) {
    let t = [];
    for (let i of this.types) {
      let s = null;
      for (let r of e) {
        let o = r(i);
        if (o) {
          s ||= Object.assign({}, i.props);
          let l = o[1];
          let a = o[0];
          if (a.combine && a.id in s) {
            l = a.combine(s[a.id], l);
          }
          s[a.id] = l;
        }
      }
      t.push(s ? new We(i.name, s, i.id, i.flags) : i);
    }
    return new cl(t);
  }
}
const Nn = new WeakMap();
const Ha = new WeakMap();
var te;
(function (n) {
  n[n.ExcludeBuffers = 1] = "ExcludeBuffers";
  n[n.IncludeAnonymous = 2] = "IncludeAnonymous";
  n[n.IgnoreMounts = 4] = "IgnoreMounts";
  n[n.IgnoreOverlays = 8] = "IgnoreOverlays";
  n[n.EnterBracketed = 16] = "EnterBracketed";
})(te ||= {});
class re {
  constructor(e, t, i, s, r) {
    this.type = e;
    this.children = t;
    this.positions = i;
    this.length = s;
    this.props = null;
    if (r && r.length) {
      this.props = Object.create(null);
      for (let [o, l] of r) {
        this.props[typeof o == "number" ? o : o.id] = l;
      }
    }
  }
  toString() {
    let e = Ji.get(this);
    if (e && !e.overlay) {
      return e.tree.toString();
    }
    let t = "";
    for (let i of this.children) {
      let s = i.toString();
      if (s) {
        if (t) {
          t += ",";
        }
        t += s;
      }
    }
    if (this.type.name) {
      return (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "");
    } else {
      return t;
    }
  }
  cursor(e = 0) {
    return new To(this.topNode, e);
  }
  cursorAt(e, t = 0, i = 0) {
    let s = Nn.get(this) || this.topNode;
    let r = new To(s);
    r.moveTo(e, t);
    Nn.set(this, r._tree);
    return r;
  }
  get topNode() {
    return new je(this, 0, 0, null);
  }
  resolve(e, t = 0) {
    let i = hn(Nn.get(this) || this.topNode, e, t, false);
    Nn.set(this, i);
    return i;
  }
  resolveInner(e, t = 0) {
    let i = hn(Ha.get(this) || this.topNode, e, t, true);
    Ha.set(this, i);
    return i;
  }
  resolveStack(e, t = 0) {
    return cg(this, e, t);
  }
  iterate(e) {
    let {
      enter: t,
      leave: i,
      from: s = 0,
      to: r = this.length
    } = e;
    let o = e.mode || 0;
    let l = (o & te.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | te.IncludeAnonymous);;) {
      let h = false;
      if (a.from <= r && a.to >= s && (!l && a.type.isAnonymous || t(a) !== false)) {
        if (a.firstChild()) {
          continue;
        }
        h = true;
      }
      while (h && i && (l || !a.type.isAnonymous) && i(a), !a.nextSibling()) {
        if (!a.parent()) {
          return;
        }
        h = true;
      }
    }
  }
  prop(e) {
    if (e.perNode) {
      if (this.props) {
        return this.props[e.id];
      } else {
        return undefined;
      }
    } else {
      return this.type.prop(e);
    }
  }
  get propValues() {
    let e = [];
    if (this.props) {
      for (let t in this.props) {
        e.push([+t, this.props[t]]);
      }
    }
    return e;
  }
  balance(e = {}) {
    if (this.children.length <= 8) {
      return this;
    } else {
      return dl(We.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, i, s) => new re(this.type, t, i, s, this.propValues), e.makeTree || ((t, i, s) => new re(We.none, t, i, s)));
    }
  }
  static build(e) {
    return fg(e);
  }
}
re.empty = new re(We.none, [], [], 0);
class fl {
  constructor(e, t) {
    this.buffer = e;
    this.index = t;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new fl(this.buffer, this.index);
  }
}
class Dt {
  constructor(e, t, i) {
    this.buffer = e;
    this.length = t;
    this.set = i;
  }
  get type() {
    return We.none;
  }
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length;) {
      e.push(this.childString(t));
      t = this.buffer[t + 3];
    }
    return e.join(",");
  }
  childString(e) {
    let t = this.buffer[e];
    let i = this.buffer[e + 3];
    let s = this.set.types[t];
    let r = s.name;
    if (/\W/.test(r) && !s.isError) {
      r = JSON.stringify(r);
    }
    e += 4;
    if (i == e) {
      return r;
    }
    let o = [];
    while (e < i) {
      o.push(this.childString(e));
      e = this.buffer[e + 3];
    }
    return r + "(" + o.join(",") + ")";
  }
  findChild(e, t, i, s, r) {
    let {
      buffer: o
    } = this;
    let l = -1;
    for (let a = e; a != t && (!Ff(r, s, o[a + 1], o[a + 2]) || !(l = a, i > 0)); a = o[a + 3]);
    return l;
  }
  slice(e, t, i) {
    let s = this.buffer;
    let r = new Uint16Array(t - e);
    let o = 0;
    for (let l = e, a = 0; l < t;) {
      r[a++] = s[l++];
      r[a++] = s[l++] - i;
      let h = r[a++] = s[l++] - i;
      r[a++] = s[l++] - e;
      o = Math.max(o, h);
    }
    return new Dt(r, o, this.set);
  }
}
function Ff(n, e, t, i) {
  switch (n) {
    case -2:
      return t < e;
    case -1:
      return i >= e && t < e;
    case 0:
      return t < e && i > e;
    case 1:
      return t <= e && i > e;
    case 2:
      return i > e;
    case 4:
      return true;
  }
}
function hn(n, e, t, i) {
  for (; n.from == n.to || (t < 1 ? n.from >= e : n.from > e) || (t > -1 ? n.to <= e : n.to < e);) {
    let o = !i && n instanceof je && n.index < 0 ? null : n.parent;
    if (!o) {
      return n;
    }
    n = o;
  }
  let r = i ? 0 : te.IgnoreOverlays;
  if (i) {
    for (let o = n, l = o.parent; l; o = l, l = o.parent) {
      if (o instanceof je && o.index < 0 && l.enter(e, t, r)?.from != o.from) {
        n = l;
      }
    }
  }
  while (true) {
    let o = n.enter(e, t, r);
    if (!o) {
      return n;
    }
    n = o;
  }
}
class Uf {
  cursor(e = 0) {
    return new To(this, e);
  }
  getChild(e, t = null, i = null) {
    let s = Ka(this, e, t, i);
    if (s.length) {
      return s[0];
    } else {
      return null;
    }
  }
  getChildren(e, t = null, i = null) {
    return Ka(this, e, t, i);
  }
  resolve(e, t = 0) {
    return hn(this, e, t, false);
  }
  resolveInner(e, t = 0) {
    return hn(this, e, t, true);
  }
  matchContext(e) {
    return qo(this.parent, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e);
    let i = this;
    while (t) {
      let s = t.lastChild;
      if (!s || s.to != t.to) {
        break;
      }
      if (s.type.isError && s.from == s.to) {
        i = t;
        t = s.prevSibling;
      } else {
        t = s;
      }
    }
    return i;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class je extends Uf {
  constructor(e, t, i, s) {
    super();
    this._tree = e;
    this.from = t;
    this.index = i;
    this._parent = s;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, t, i, s, r = 0) {
    for (let o = this;;) {
      for (let {
          children: l,
          positions: a
        } = o._tree, h = t > 0 ? l.length : -1; e != h; e += t) {
        let c = l[e];
        let f = a[e] + o.from;
        let u;
        if (!!(r & te.EnterBracketed) && !!(c instanceof re) && !!(u = Ji.get(c)) && !u.overlay && !!u.bracketed && !!(i >= f) && !!(i <= f + c.length) || !!Ff(s, i, f, f + c.length)) {
          if (c instanceof Dt) {
            if (r & te.ExcludeBuffers) {
              continue;
            }
            let d = c.findChild(0, c.buffer.length, t, i - f, s);
            if (d > -1) {
              return new At(new ag(o, c, e, f), null, d);
            }
          } else if (r & te.IncludeAnonymous || !c.type.isAnonymous || ul(c)) {
            let d;
            if (!(r & te.IgnoreMounts) && (d = Ji.get(c)) && !d.overlay) {
              return new je(d.tree, f, e, o);
            }
            let m = new je(c, f, e, o);
            if (r & te.IncludeAnonymous || !m.type.isAnonymous) {
              return m;
            } else {
              return m.nextChild(t < 0 ? c.children.length - 1 : 0, t, i, s, r);
            }
          }
        }
      }
      if (r & te.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? e = o.index + t : e = t < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o)) {
        return null;
      }
    }
  }
  get firstChild() {
    return this.nextChild(0, 1, 0, 4);
  }
  get lastChild() {
    return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
  }
  childAfter(e) {
    return this.nextChild(0, 1, e, 2);
  }
  childBefore(e) {
    return this.nextChild(this._tree.children.length - 1, -1, e, -2);
  }
  prop(e) {
    return this._tree.prop(e);
  }
  enter(e, t, i = 0) {
    let s;
    if (!(i & te.IgnoreOverlays) && (s = Ji.get(this._tree)) && s.overlay) {
      let r = e - this.from;
      let o = i & te.EnterBracketed && s.bracketed;
      for (let {
        from: l,
        to: a
      } of s.overlay) {
        if ((t > 0 || o ? l <= r : l < r) && (t < 0 || o ? a >= r : a > r)) {
          return new je(s.tree, s.overlay[0].from + this.from, -1, this);
        }
      }
    }
    return this.nextChild(0, 1, e, t, i);
  }
  nextSignificantParent() {
    let e = this;
    while (e.type.isAnonymous && e._parent) {
      e = e._parent;
    }
    return e;
  }
  get parent() {
    if (this._parent) {
      return this._parent.nextSignificantParent();
    } else {
      return null;
    }
  }
  get nextSibling() {
    if (this._parent && this.index >= 0) {
      return this._parent.nextChild(this.index + 1, 1, 0, 4);
    } else {
      return null;
    }
  }
  get prevSibling() {
    if (this._parent && this.index >= 0) {
      return this._parent.nextChild(this.index - 1, -1, 0, 4);
    } else {
      return null;
    }
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  toString() {
    return this._tree.toString();
  }
}
function Ka(n, e, t, i) {
  let s = n.cursor();
  let r = [];
  if (!s.firstChild()) {
    return r;
  }
  if (t != null) {
    for (let o = false; !o;) {
      o = s.type.is(t);
      if (!s.nextSibling()) {
        return r;
      }
    }
  }
  while (true) {
    if (i != null && s.type.is(i)) {
      return r;
    }
    if (s.type.is(e)) {
      r.push(s.node);
    }
    if (!s.nextSibling()) {
      if (i == null) {
        return r;
      } else {
        return [];
      }
    }
  }
}
function qo(n, e, t = e.length - 1) {
  for (let i = n; t >= 0; i = i.parent) {
    if (!i) {
      return false;
    }
    if (!i.type.isAnonymous) {
      if (e[t] && e[t] != i.name) {
        return false;
      }
      t--;
    }
  }
  return true;
}
class ag {
  constructor(e, t, i, s) {
    this.parent = e;
    this.buffer = t;
    this.index = i;
    this.start = s;
  }
}
class At extends Uf {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, i) {
    super();
    this.context = e;
    this._parent = t;
    this.index = i;
    this.type = e.buffer.set.types[e.buffer.buffer[i]];
  }
  child(e, t, i) {
    let {
      buffer: s
    } = this.context;
    let r = s.findChild(this.index + 4, s.buffer[this.index + 3], e, t - this.context.start, i);
    if (r < 0) {
      return null;
    } else {
      return new At(this.context, this, r);
    }
  }
  get firstChild() {
    return this.child(1, 0, 4);
  }
  get lastChild() {
    return this.child(-1, 0, 4);
  }
  childAfter(e) {
    return this.child(1, e, 2);
  }
  childBefore(e) {
    return this.child(-1, e, -2);
  }
  prop(e) {
    return this.type.prop(e);
  }
  enter(e, t, i = 0) {
    if (i & te.ExcludeBuffers) {
      return null;
    }
    let {
      buffer: s
    } = this.context;
    let r = s.findChild(this.index + 4, s.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    if (r < 0) {
      return null;
    } else {
      return new At(this.context, this, r);
    }
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    if (this._parent) {
      return null;
    } else {
      return this.context.parent.nextChild(this.context.index + e, e, 0, 4);
    }
  }
  get nextSibling() {
    let {
      buffer: e
    } = this.context;
    let t = e.buffer[this.index + 3];
    if (t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length)) {
      return new At(this.context, this._parent, t);
    } else {
      return this.externalSibling(1);
    }
  }
  get prevSibling() {
    let {
      buffer: e
    } = this.context;
    let t = this._parent ? this._parent.index + 4 : 0;
    if (this.index == t) {
      return this.externalSibling(-1);
    } else {
      return new At(this.context, this._parent, e.findChild(t, this.index, -1, 0, 4));
    }
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [];
    let t = [];
    let {
      buffer: i
    } = this.context;
    let s = this.index + 4;
    let r = i.buffer[this.index + 3];
    if (r > s) {
      let o = i.buffer[this.index + 1];
      e.push(i.slice(s, r, o));
      t.push(0);
    }
    return new re(this.type, e, t, this.to - this.from);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function Hf(n) {
  if (!n.length) {
    return null;
  }
  let e = 0;
  let t = n[0];
  for (let r = 1; r < n.length; r++) {
    let o = n[r];
    if (o.from > t.from || o.to < t.to) {
      t = o;
      e = r;
    }
  }
  let i = t instanceof je && t.index < 0 ? null : t.parent;
  let s = n.slice();
  if (i) {
    s[e] = i;
  } else {
    s.splice(e, 1);
  }
  return new hg(s, t);
}
class hg {
  constructor(e, t) {
    this.heads = e;
    this.node = t;
  }
  get next() {
    return Hf(this.heads);
  }
}
function cg(n, e, t) {
  let i = n.resolveInner(e, t);
  let s = null;
  for (let r = i instanceof je ? i : i.context.parent; r; r = r.parent) {
    if (r.index < 0) {
      let o = r.parent;
      (s ||= [i]).push(o.resolve(e, t));
      r = o;
    } else {
      let o = Ji.get(r.tree);
      if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
        let l = new je(o.tree, o.overlay[0].from + r.from, -1, r);
        (s ||= [i]).push(hn(l, e, t, false));
      }
    }
  }
  if (s) {
    return Hf(s);
  } else {
    return i;
  }
}
class To {
  get name() {
    return this.type.name;
  }
  constructor(e, t = 0) {
    this.buffer = null;
    this.stack = [];
    this.index = 0;
    this.bufferNode = null;
    this.mode = t & ~te.EnterBracketed;
    if (e instanceof je) {
      this.yieldNode(e);
    } else {
      this._tree = e.context.parent;
      this.buffer = e.context;
      for (let i = e._parent; i; i = i._parent) {
        this.stack.unshift(i.index);
      }
      this.bufferNode = e;
      this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    if (e) {
      this._tree = e;
      this.type = e.type;
      this.from = e.from;
      this.to = e.to;
      return true;
    } else {
      return false;
    }
  }
  yieldBuf(e, t) {
    this.index = e;
    let {
      start: i,
      buffer: s
    } = this.buffer;
    this.type = t || s.set.types[s.buffer[e]];
    this.from = i + s.buffer[e + 1];
    this.to = i + s.buffer[e + 2];
    return true;
  }
  yield(e) {
    if (e) {
      if (e instanceof je) {
        this.buffer = null;
        return this.yieldNode(e);
      } else {
        this.buffer = e.context;
        return this.yieldBuf(e.index, e.type);
      }
    } else {
      return false;
    }
  }
  toString() {
    if (this.buffer) {
      return this.buffer.buffer.childString(this.index);
    } else {
      return this._tree.toString();
    }
  }
  enterChild(e, t, i) {
    if (!this.buffer) {
      return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, i, this.mode));
    }
    let {
      buffer: s
    } = this.buffer;
    let r = s.findChild(this.index + 4, s.buffer[this.index + 3], e, t - this.buffer.start, i);
    if (r < 0) {
      return false;
    } else {
      this.stack.push(this.index);
      return this.yieldBuf(r);
    }
  }
  firstChild() {
    return this.enterChild(1, 0, 4);
  }
  lastChild() {
    return this.enterChild(-1, 0, 4);
  }
  childAfter(e) {
    return this.enterChild(1, e, 2);
  }
  childBefore(e) {
    return this.enterChild(-1, e, -2);
  }
  enter(e, t, i = this.mode) {
    if (this.buffer) {
      if (i & te.ExcludeBuffers) {
        return false;
      } else {
        return this.enterChild(1, e, t);
      }
    } else {
      return this.yield(this._tree.enter(e, t, i));
    }
  }
  parent() {
    if (!this.buffer) {
      return this.yieldNode(this.mode & te.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    }
    if (this.stack.length) {
      return this.yieldBuf(this.stack.pop());
    }
    let e = this.mode & te.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    this.buffer = null;
    return this.yieldNode(e);
  }
  sibling(e) {
    if (!this.buffer) {
      if (this._tree._parent) {
        return this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode));
      } else {
        return false;
      }
    }
    let {
      buffer: t
    } = this.buffer;
    let i = this.stack.length - 1;
    if (e < 0) {
      let s = i < 0 ? 0 : this.stack[i] + 4;
      if (this.index != s) {
        return this.yieldBuf(t.findChild(s, this.index, -1, 0, 4));
      }
    } else {
      let s = t.buffer[this.index + 3];
      if (s < (i < 0 ? t.buffer.length : t.buffer[this.stack[i] + 3])) {
        return this.yieldBuf(s);
      }
    }
    if (i < 0) {
      return this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode));
    } else {
      return false;
    }
  }
  nextSibling() {
    return this.sibling(1);
  }
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t;
    let i;
    let {
      buffer: s
    } = this;
    if (s) {
      if (e > 0) {
        if (this.index < s.buffer.buffer.length) {
          return false;
        }
      } else {
        for (let r = 0; r < this.index; r++) {
          if (s.buffer.buffer[r + 3] < this.index) {
            return false;
          }
        }
      }
      ({
        index: t,
        parent: i
      } = s);
    } else {
      ({
        index: t,
        _parent: i
      } = this._tree);
    }
    for (; i; {
      index: t,
      _parent: i
    } = i) {
      if (t > -1) {
        for (let r = t + e, o = e < 0 ? -1 : i._tree.children.length; r != o; r += e) {
          let l = i._tree.children[r];
          if (this.mode & te.IncludeAnonymous || l instanceof Dt || !l.type.isAnonymous || ul(l)) {
            return false;
          }
        }
      }
    }
    return true;
  }
  move(e, t) {
    if (t && this.enterChild(e, 0, 4)) {
      return true;
    }
    while (true) {
      if (this.sibling(e)) {
        return true;
      }
      if (this.atLastNode(e) || !this.parent()) {
        return false;
      }
    }
  }
  next(e = true) {
    return this.move(1, e);
  }
  prev(e = true) {
    return this.move(-1, e);
  }
  moveTo(e, t = 0) {
    while ((this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent());
    while (this.enterChild(1, e, t));
    return this;
  }
  get node() {
    if (!this.buffer) {
      return this._tree;
    }
    let e = this.bufferNode;
    let t = null;
    let i = 0;
    if (e && e.context == this.buffer) {
      e: for (let s = this.index, r = this.stack.length; r >= 0;) {
        for (let o = e; o; o = o._parent) {
          if (o.index == s) {
            if (s == this.index) {
              return o;
            }
            t = o;
            i = r + 1;
            break e;
          }
        }
        s = this.stack[--r];
      }
    }
    for (let s = i; s < this.stack.length; s++) {
      t = new At(this.buffer, t, this.stack[s]);
    }
    return this.bufferNode = new At(this.buffer, t, this.index);
  }
  get tree() {
    if (this.buffer) {
      return null;
    } else {
      return this._tree._tree;
    }
  }
  iterate(e, t) {
    for (let i = 0;;) {
      let s = false;
      if (this.type.isAnonymous || e(this) !== false) {
        if (this.firstChild()) {
          i++;
          continue;
        }
        if (!this.type.isAnonymous) {
          s = true;
        }
      }
      while (true) {
        if (s && t) {
          t(this);
        }
        s = this.type.isAnonymous;
        if (!i) {
          return;
        }
        if (this.nextSibling()) {
          break;
        }
        this.parent();
        i--;
        s = true;
      }
    }
  }
  matchContext(e) {
    if (!this.buffer) {
      return qo(this.node.parent, e);
    }
    let {
      buffer: t
    } = this.buffer;
    let {
      types: i
    } = t.set;
    for (let s = e.length - 1, r = this.stack.length - 1; s >= 0; r--) {
      if (r < 0) {
        return qo(this._tree, e, s);
      }
      let o = i[t.buffer[this.stack[r]]];
      if (!o.isAnonymous) {
        if (e[s] && e[s] != o.name) {
          return false;
        }
        s--;
      }
    }
    return true;
  }
}
function ul(n) {
  return n.children.some(e => e instanceof Dt || !e.type.isAnonymous || ul(e));
}
function fg(n) {
  let {
    buffer: t,
    nodeSet: i,
    maxBufferLength: s = _f,
    reused: r = [],
    minRepeatType: o = i.types.length
  } = n;
  let l = Array.isArray(t) ? new fl(t, t.length) : t;
  let a = i.types;
  let h = 0;
  let c = 0;
  function f(w, S, k, A, R, B) {
    let {
      id: V,
      start: E,
      end: W,
      size: D
    } = l;
    let G = c;
    let J = h;
    if (D < 0) {
      l.next();
      if (D == -1) {
        let he = r[V];
        k.push(he);
        A.push(E - w);
        return;
      } else if (D == -3) {
        h = V;
        return;
      } else if (D == -4) {
        c = V;
        return;
      } else {
        throw new RangeError(`Unrecognized record size: ${D}`);
      }
    }
    let ne = a[V];
    let me;
    let U;
    let ae = E - w;
    if (W - E <= s && (U = O(l.pos - S, R))) {
      let he = new Uint16Array(U.size - U.skip);
      let pe = l.pos - U.size;
      let ke = he.length;
      while (l.pos > pe) {
        ke = b(U.start, he, ke);
      }
      me = new Dt(he, W - U.start, i);
      ae = U.start - w;
    } else {
      let he = l.pos - D;
      l.next();
      let pe = [];
      let ke = [];
      let z = V >= o ? V : -1;
      let we = 0;
      let gt = W;
      while (l.pos > he) {
        if (z >= 0 && l.id == z && l.size >= 0) {
          if (l.end <= gt - s) {
            m(pe, ke, E, we, l.end, gt, z, G, J);
            we = pe.length;
            gt = l.end;
          }
          l.next();
        } else if (B > 2500) {
          u(E, he, pe, ke);
        } else {
          f(E, he, pe, ke, z, B + 1);
        }
      }
      if (z >= 0 && we > 0 && we < pe.length) {
        m(pe, ke, E, we, E, gt, z, G, J);
      }
      pe.reverse();
      ke.reverse();
      if (z > -1 && we > 0) {
        let vt = d(ne, J);
        me = dl(ne, pe, ke, 0, pe.length, 0, W - E, vt, vt);
      } else {
        me = p(ne, pe, ke, W - E, G - W, J);
      }
    }
    k.push(me);
    A.push(ae);
  }
  function u(w, S, k, A) {
    let R = [];
    let B = 0;
    let V = -1;
    while (l.pos > S) {
      let {
        id: E,
        start: W,
        end: D,
        size: G
      } = l;
      if (G > 4) {
        l.next();
      } else {
        if (V > -1 && W < V) {
          break;
        }
        if (V < 0) {
          V = D - s;
        }
        R.push(E, W, D);
        B++;
        l.next();
      }
    }
    if (B) {
      let E = new Uint16Array(B * 4);
      let W = R[R.length - 2];
      for (let D = R.length - 3, G = 0; D >= 0; D -= 3) {
        E[G++] = R[D];
        E[G++] = R[D + 1] - W;
        E[G++] = R[D + 2] - W;
        E[G++] = G;
      }
      k.push(new Dt(E, R[2] - W, i));
      A.push(W - w);
    }
  }
  function d(w, S) {
    return (k, A, R) => {
      let B = 0;
      let V = k.length - 1;
      let E;
      let W;
      if (V >= 0 && (E = k[V]) instanceof re) {
        if (!V && E.type == w && E.length == R) {
          return E;
        }
        if (W = E.prop(N.lookAhead)) {
          B = A[V] + E.length + W;
        }
      }
      return p(w, k, A, R, B, S);
    };
  }
  function m(w, S, k, A, R, B, V, E, W) {
    let D = [];
    let G = [];
    while (w.length > A) {
      D.push(w.pop());
      G.push(S.pop() + k - R);
    }
    w.push(p(i.types[V], D, G, B - R, E - B, W));
    S.push(R - k);
  }
  function p(w, S, k, A, R, B, V) {
    if (B) {
      let E = [N.contextHash, B];
      V = V ? [E].concat(V) : [E];
    }
    if (R > 25) {
      let E = [N.lookAhead, R];
      V = V ? [E].concat(V) : [E];
    }
    return new re(w, S, k, A, V);
  }
  function O(w, S) {
    let k = l.fork();
    let A = 0;
    let R = 0;
    let B = 0;
    let V = k.end - s;
    let E = {
      size: 0,
      start: 0,
      skip: 0
    };
    e: for (let W = k.pos - w; k.pos > W;) {
      let D = k.size;
      if (k.id == S && D >= 0) {
        E.size = A;
        E.start = R;
        E.skip = B;
        B += 4;
        A += 4;
        k.next();
        continue;
      }
      let G = k.pos - D;
      if (D < 0 || G < W || k.start < V) {
        break;
      }
      let J = k.id >= o ? 4 : 0;
      let ne = k.start;
      for (k.next(); k.pos > G;) {
        if (k.size < 0) {
          if (k.size == -3 || k.size == -4) {
            J += 4;
          } else {
            break e;
          }
        } else if (k.id >= o) {
          J += 4;
        }
        k.next();
      }
      R = ne;
      A += D;
      B += J;
    }
    if (S < 0 || A == w) {
      E.size = A;
      E.start = R;
      E.skip = B;
    }
    if (E.size > 4) {
      return E;
    } else {
      return undefined;
    }
  }
  function b(w, S, k) {
    let {
      id: A,
      start: R,
      end: B,
      size: V
    } = l;
    l.next();
    if (V >= 0 && A < o) {
      let E = k;
      if (V > 4) {
        let W = l.pos - (V - 4);
        while (l.pos > W) {
          k = b(w, S, k);
        }
      }
      S[--k] = E;
      S[--k] = B - w;
      S[--k] = R - w;
      S[--k] = A;
    } else if (V == -3) {
      h = A;
    } else if (V == -4) {
      c = A;
    }
    return k;
  }
  let x = [];
  let Q = [];
  while (l.pos > 0) {
    f(n.start || 0, n.bufferStart || 0, x, Q, -1, 0);
  }
  let C = n.length ?? (x.length ? Q[0] + x[0].length : 0);
  return new re(a[n.topID], x.reverse(), Q.reverse(), C);
}
const Ja = new WeakMap();
function ss(n, e) {
  if (!n.isAnonymous || e instanceof Dt || e.type != n) {
    return 1;
  }
  let t = Ja.get(e);
  if (t == null) {
    t = 1;
    for (let i of e.children) {
      if (i.type != n || !(i instanceof re)) {
        t = 1;
        break;
      }
      t += ss(n, i);
    }
    Ja.set(e, t);
  }
  return t;
}
function dl(n, e, t, i, s, r, o, l, a) {
  let h = 0;
  for (let m = i; m < s; m++) {
    h += ss(n, e[m]);
  }
  let c = Math.ceil(h * 1.5 / 8);
  let f = [];
  let u = [];
  function d(m, p, O, b, x) {
    for (let Q = O; Q < b;) {
      let C = Q;
      let w = p[Q];
      let S = ss(n, m[Q]);
      for (Q++; Q < b; Q++) {
        let k = ss(n, m[Q]);
        if (S + k >= c) {
          break;
        }
        S += k;
      }
      if (Q == C + 1) {
        if (S > c) {
          let k = m[C];
          d(k.children, k.positions, 0, k.children.length, p[C] + x);
          continue;
        }
        f.push(m[C]);
      } else {
        let k = p[Q - 1] + m[Q - 1].length - w;
        f.push(dl(n, m, p, C, Q, w, k, null, a));
      }
      u.push(w + x - r);
    }
  }
  d(e, t, i, s, 0);
  return (l || a)(f, u, o);
}
class ni {
  constructor(e, t, i, s, r = false, o = false) {
    this.from = e;
    this.to = t;
    this.tree = i;
    this.offset = s;
    this.open = (r ? 1 : 0) | (o ? 2 : 0);
  }
  get openStart() {
    return (this.open & 1) > 0;
  }
  get openEnd() {
    return (this.open & 2) > 0;
  }
  static addTree(e, t = [], i = false) {
    let s = [new ni(0, e.length, e, 0, false, i)];
    for (let r of t) {
      if (r.to > e.length) {
        s.push(r);
      }
    }
    return s;
  }
  static applyChanges(e, t, i = 128) {
    if (!t.length) {
      return e;
    }
    let s = [];
    let r = 1;
    let o = e.length ? e[0] : null;
    for (let l = 0, a = 0, h = 0;; l++) {
      let c = l < t.length ? t[l] : null;
      let f = c ? c.fromA : 1000000000;
      if (f - a >= i) {
        while (o && o.from < f) {
          let u = o;
          if (a >= u.from || f <= u.to || h) {
            let d = Math.max(u.from, a) - h;
            let m = Math.min(u.to, f) - h;
            u = d >= m ? null : new ni(d, m, u.tree, u.offset + h, l > 0, !!c);
          }
          if (u) {
            s.push(u);
          }
          if (o.to > f) {
            break;
          }
          o = r < e.length ? e[r++] : null;
        }
      }
      if (!c) {
        break;
      }
      a = c.toA;
      h = c.toA - c.toB;
    }
    return s;
  }
}
class Kf {
  startParse(e, t, i) {
    if (typeof e == "string") {
      e = new ug(e);
    }
    i = i ? i.length ? i.map(s => new Sr(s.from, s.to)) : [new Sr(0, 0)] : [new Sr(0, e.length)];
    return this.createParse(e, t || [], i);
  }
  parse(e, t, i) {
    let s = this.startParse(e, t, i);
    while (true) {
      let r = s.advance();
      if (r) {
        return r;
      }
    }
  }
}
class ug {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return false;
  }
  read(e, t) {
    return this.string.slice(e, t);
  }
}
new N({
  perNode: true
});
let dg = 0;
class Ye {
  constructor(e, t, i, s) {
    this.name = e;
    this.set = t;
    this.base = i;
    this.modified = s;
    this.id = dg++;
  }
  toString() {
    let {
      name: e
    } = this;
    for (let t of this.modified) {
      if (t.name) {
        e = `${t.name}(${e})`;
      }
    }
    return e;
  }
  static define(e, t) {
    let i = typeof e == "string" ? e : "?";
    if (e instanceof Ye) {
      t = e;
    }
    if (t != null && t.base) {
      throw new Error("Can not derive from a modified tag");
    }
    let s = new Ye(i, [], null, []);
    s.set.push(s);
    if (t) {
      for (let r of t.set) {
        s.set.push(r);
      }
    }
    return s;
  }
  static defineModifier(e) {
    let t = new Ss(e);
    return i => i.modified.indexOf(t) > -1 ? i : Ss.get(i.base || i, i.modified.concat(t).sort((s, r) => s.id - r.id));
  }
}
let mg = 0;
class Ss {
  constructor(e) {
    this.name = e;
    this.instances = [];
    this.id = mg++;
  }
  static get(e, t) {
    if (!t.length) {
      return e;
    }
    let i = t[0].instances.find(l => l.base == e && pg(t, l.modified));
    if (i) {
      return i;
    }
    let s = [];
    let r = new Ye(e.name, s, e, t);
    for (let l of t) {
      l.instances.push(r);
    }
    let o = Og(t);
    for (let l of e.set) {
      if (!l.modified.length) {
        for (let a of o) {
          s.push(Ss.get(l, a));
        }
      }
    }
    return r;
  }
}
function pg(n, e) {
  return n.length == e.length && n.every((t, i) => t == e[i]);
}
function Og(n) {
  let e = [[]];
  for (let t = 0; t < n.length; t++) {
    for (let i = 0, s = e.length; i < s; i++) {
      e.push(e[i].concat(n[t]));
    }
  }
  return e.sort((t, i) => i.length - t.length);
}
function Jf(n) {
  let e = Object.create(null);
  for (let t in n) {
    let i = n[t];
    if (!Array.isArray(i)) {
      i = [i];
    }
    for (let s of t.split(" ")) {
      if (s) {
        let r = [];
        let o = 2;
        let l = s;
        for (let f = 0;;) {
          if (l == "..." && f > 0 && f + 3 == s.length) {
            o = 1;
            break;
          }
          let u = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!u) {
            throw new RangeError("Invalid path: " + s);
          }
          r.push(u[0] == "*" ? "" : u[0][0] == "\"" ? JSON.parse(u[0]) : u[0]);
          f += u[0].length;
          if (f == s.length) {
            break;
          }
          let d = s[f++];
          if (f == s.length && d == "!") {
            o = 0;
            break;
          }
          if (d != "/") {
            throw new RangeError("Invalid path: " + s);
          }
          l = s.slice(f);
        }
        let a = r.length - 1;
        let h = r[a];
        if (!h) {
          throw new RangeError("Invalid path: " + s);
        }
        let c = new cn(i, o, a > 0 ? r.slice(0, a) : null);
        e[h] = c.sort(e[h]);
      }
    }
  }
  return eu.add(e);
}
const eu = new N({
  combine(n, e) {
    let t;
    let i;
    let s;
    while (n || e) {
      if (!n || e && n.depth >= e.depth) {
        s = e;
        e = e.next;
      } else {
        s = n;
        n = n.next;
      }
      if (t && t.mode == s.mode && !s.context && !t.context) {
        continue;
      }
      let r = new cn(s.tags, s.mode, s.context);
      if (t) {
        t.next = r;
      } else {
        i = r;
      }
      t = r;
    }
    return i;
  }
});
class cn {
  constructor(e, t, i, s) {
    this.tags = e;
    this.mode = t;
    this.context = i;
    this.next = s;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(e) {
    if (!e || e.depth < this.depth) {
      this.next = e;
      return this;
    } else {
      e.next = this.sort(e.next);
      return e;
    }
  }
  get depth() {
    if (this.context) {
      return this.context.length;
    } else {
      return 0;
    }
  }
}
cn.empty = new cn([], 2, null);
function tu(n, e) {
  let t = Object.create(null);
  for (let r of n) {
    if (!Array.isArray(r.tag)) {
      t[r.tag.id] = r.class;
    } else {
      for (let o of r.tag) {
        t[o.id] = r.class;
      }
    }
  }
  let {
    scope: i,
    all: s = null
  } = e || {};
  return {
    style: r => {
      let o = s;
      for (let l of r) {
        for (let a of l.set) {
          let h = t[a.id];
          if (h) {
            o = o ? o + " " + h : h;
            break;
          }
        }
      }
      return o;
    },
    scope: i
  };
}
function gg(n, e) {
  let t = null;
  for (let i of n) {
    let s = i.style(e);
    if (s) {
      t = t ? t + " " + s : s;
    }
  }
  return t;
}
function bg(n, e, t, i = 0, s = n.length) {
  let r = new yg(i, Array.isArray(e) ? e : [e], t);
  r.highlightRange(n.cursor(), i, s, "", r.highlighters);
  r.flush(s);
}
class yg {
  constructor(e, t, i) {
    this.at = e;
    this.highlighters = t;
    this.span = i;
    this.class = "";
  }
  startSpan(e, t) {
    if (t != this.class) {
      this.flush(e);
      if (e > this.at) {
        this.at = e;
      }
      this.class = t;
    }
  }
  flush(e) {
    if (e > this.at && this.class) {
      this.span(this.at, e, this.class);
    }
  }
  highlightRange(e, t, i, s, r) {
    let {
      type: o,
      from: l,
      to: a
    } = e;
    if (l >= i || a <= t) {
      return;
    }
    if (o.isTop) {
      r = this.highlighters.filter(d => !d.scope || d.scope(o));
    }
    let h = s;
    let c = xg(e) || cn.empty;
    let f = gg(r, c.tags);
    if (f) {
      if (h) {
        h += " ";
      }
      h += f;
      if (c.mode == 1) {
        s += (s ? " " : "") + f;
      }
    }
    this.startSpan(Math.max(t, l), h);
    if (c.opaque) {
      return;
    }
    let u = e.tree && e.tree.prop(N.mounted);
    if (u && u.overlay) {
      let d = e.node.enter(u.overlay[0].from + l, 1);
      let m = this.highlighters.filter(O => !O.scope || O.scope(u.tree.type));
      let p = e.firstChild();
      for (let O = 0, b = l;; O++) {
        let x = O < u.overlay.length ? u.overlay[O] : null;
        let Q = x ? x.from + l : a;
        let C = Math.max(t, b);
        let w = Math.min(i, Q);
        if (C < w && p) {
          while (e.from < w && (this.highlightRange(e, C, w, s, r), this.startSpan(Math.min(w, e.to), h), !(e.to >= Q) && !!e.nextSibling()));
        }
        if (!x || Q > i) {
          break;
        }
        b = x.to + l;
        if (b > t) {
          this.highlightRange(d.cursor(), Math.max(t, x.from + l), Math.min(i, b), "", m);
          this.startSpan(Math.min(i, b), h);
        }
      }
      if (p) {
        e.parent();
      }
    } else if (e.firstChild()) {
      if (u) {
        s = "";
      }
      do {
        if (!(e.to <= t)) {
          if (e.from >= i) {
            break;
          }
          this.highlightRange(e, t, i, s, r);
          this.startSpan(Math.min(i, e.to), h);
        }
      } while (e.nextSibling());
      e.parent();
    }
  }
}
function xg(n) {
  let e = n.type.prop(eu);
  while (e && e.context && !n.matchContext(e.context)) {
    e = e.next;
  }
  return e || null;
}
const q = Ye.define;
const Bn = q();
const qt = q();
const eh = q(qt);
const th = q(qt);
const Tt = q();
const Yn = q(Tt);
const kr = q(Tt);
const ot = q();
const Ft = q(ot);
const st = q();
const rt = q();
const $o = q();
const Ni = q($o);
const Gn = q();
const g = {
  comment: Bn,
  lineComment: q(Bn),
  blockComment: q(Bn),
  docComment: q(Bn),
  name: qt,
  variableName: q(qt),
  typeName: eh,
  tagName: q(eh),
  propertyName: th,
  attributeName: q(th),
  className: q(qt),
  labelName: q(qt),
  namespace: q(qt),
  macroName: q(qt),
  literal: Tt,
  string: Yn,
  docString: q(Yn),
  character: q(Yn),
  attributeValue: q(Yn),
  number: kr,
  integer: q(kr),
  float: q(kr),
  bool: q(Tt),
  regexp: q(Tt),
  escape: q(Tt),
  color: q(Tt),
  url: q(Tt),
  keyword: st,
  self: q(st),
  null: q(st),
  atom: q(st),
  unit: q(st),
  modifier: q(st),
  operatorKeyword: q(st),
  controlKeyword: q(st),
  definitionKeyword: q(st),
  moduleKeyword: q(st),
  operator: rt,
  derefOperator: q(rt),
  arithmeticOperator: q(rt),
  logicOperator: q(rt),
  bitwiseOperator: q(rt),
  compareOperator: q(rt),
  updateOperator: q(rt),
  definitionOperator: q(rt),
  typeOperator: q(rt),
  controlOperator: q(rt),
  punctuation: $o,
  separator: q($o),
  bracket: Ni,
  angleBracket: q(Ni),
  squareBracket: q(Ni),
  paren: q(Ni),
  brace: q(Ni),
  content: ot,
  heading: Ft,
  heading1: q(Ft),
  heading2: q(Ft),
  heading3: q(Ft),
  heading4: q(Ft),
  heading5: q(Ft),
  heading6: q(Ft),
  contentSeparator: q(ot),
  list: q(ot),
  quote: q(ot),
  emphasis: q(ot),
  strong: q(ot),
  link: q(ot),
  monospace: q(ot),
  strikethrough: q(ot),
  inserted: q(),
  deleted: q(),
  changed: q(),
  invalid: q(),
  meta: Gn,
  documentMeta: q(Gn),
  annotation: q(Gn),
  processingInstruction: q(Gn),
  definition: Ye.defineModifier("definition"),
  constant: Ye.defineModifier("constant"),
  function: Ye.defineModifier("function"),
  standard: Ye.defineModifier("standard"),
  local: Ye.defineModifier("local"),
  special: Ye.defineModifier("special")
};
for (let n in g) {
  let e = g[n];
  if (e instanceof Ye) {
    e.name = n;
  }
}
tu([{
  tag: g.link,
  class: "tok-link"
}, {
  tag: g.heading,
  class: "tok-heading"
}, {
  tag: g.emphasis,
  class: "tok-emphasis"
}, {
  tag: g.strong,
  class: "tok-strong"
}, {
  tag: g.keyword,
  class: "tok-keyword"
}, {
  tag: g.atom,
  class: "tok-atom"
}, {
  tag: g.bool,
  class: "tok-bool"
}, {
  tag: g.url,
  class: "tok-url"
}, {
  tag: g.labelName,
  class: "tok-labelName"
}, {
  tag: g.inserted,
  class: "tok-inserted"
}, {
  tag: g.deleted,
  class: "tok-deleted"
}, {
  tag: g.literal,
  class: "tok-literal"
}, {
  tag: g.string,
  class: "tok-string"
}, {
  tag: g.number,
  class: "tok-number"
}, {
  tag: [g.regexp, g.escape, g.special(g.string)],
  class: "tok-string2"
}, {
  tag: g.variableName,
  class: "tok-variableName"
}, {
  tag: g.local(g.variableName),
  class: "tok-variableName tok-local"
}, {
  tag: g.definition(g.variableName),
  class: "tok-variableName tok-definition"
}, {
  tag: g.special(g.variableName),
  class: "tok-variableName2"
}, {
  tag: g.definition(g.propertyName),
  class: "tok-propertyName tok-definition"
}, {
  tag: g.typeName,
  class: "tok-typeName"
}, {
  tag: g.namespace,
  class: "tok-namespace"
}, {
  tag: g.className,
  class: "tok-className"
}, {
  tag: g.macroName,
  class: "tok-macroName"
}, {
  tag: g.propertyName,
  class: "tok-propertyName"
}, {
  tag: g.operator,
  class: "tok-operator"
}, {
  tag: g.comment,
  class: "tok-comment"
}, {
  tag: g.meta,
  class: "tok-meta"
}, {
  tag: g.invalid,
  class: "tok-invalid"
}, {
  tag: g.punctuation,
  class: "tok-punctuation"
}]);
var wr;
const mi = new N();
function Qg(n) {
  return T.define({
    combine: n ? e => e.concat(n) : undefined
  });
}
const Sg = new N();
class Ie {
  constructor(e, t, i = [], s = "") {
    this.data = e;
    this.name = s;
    if (!Y.prototype.hasOwnProperty("tree")) {
      Object.defineProperty(Y.prototype, "tree", {
        get() {
          return oe(this);
        }
      });
    }
    this.parser = t;
    this.extension = [Lt.of(this), Y.languageData.of((r, o, l) => {
      let a = ih(r, o, l);
      let h = a.type.prop(mi);
      if (!h) {
        return [];
      }
      let c = r.facet(h);
      let f = a.type.prop(Sg);
      if (f) {
        let u = a.resolve(o - a.from, l);
        for (let d of f) {
          if (d.test(u, r)) {
            let m = r.facet(d.facet);
            if (d.type == "replace") {
              return m;
            } else {
              return m.concat(c);
            }
          }
        }
      }
      return c;
    })].concat(i);
  }
  isActiveAt(e, t, i = -1) {
    return ih(e, t, i).type.prop(mi) == this.data;
  }
  findRegions(e) {
    let t = e.facet(Lt);
    if ((t == null ? undefined : t.data) == this.data) {
      return [{
        from: 0,
        to: e.doc.length
      }];
    }
    if (!t || !t.allowsNesting) {
      return [];
    }
    let i = [];
    let s = (r, o) => {
      if (r.prop(mi) == this.data) {
        i.push({
          from: o,
          to: o + r.length
        });
        return;
      }
      let l = r.prop(N.mounted);
      if (l) {
        if (l.tree.prop(mi) == this.data) {
          if (l.overlay) {
            for (let a of l.overlay) {
              i.push({
                from: a.from + o,
                to: a.to + o
              });
            }
          } else {
            i.push({
              from: o,
              to: o + r.length
            });
          }
          return;
        } else if (l.overlay) {
          let a = i.length;
          s(l.tree, l.overlay[0].from + o);
          if (i.length > a) {
            return;
          }
        }
      }
      for (let a = 0; a < r.children.length; a++) {
        let h = r.children[a];
        if (h instanceof re) {
          s(h, r.positions[a] + o);
        }
      }
    };
    s(oe(e), 0);
    return i;
  }
  get allowsNesting() {
    return true;
  }
}
Ie.setState = M.define();
function ih(n, e, t) {
  let i = n.facet(Lt);
  let s = oe(n).topNode;
  if (!i || i.allowsNesting) {
    for (let r = s; r; r = r.enter(e, t, te.ExcludeBuffers | te.EnterBracketed)) {
      if (r.type.isTop) {
        s = r;
      }
    }
  }
  return s;
}
class ks extends Ie {
  constructor(e, t, i) {
    super(e, t, [], i);
    this.parser = t;
  }
  static define(e) {
    let t = Qg(e.languageData);
    return new ks(t, e.parser.configure({
      props: [mi.add(i => i.isTop ? t : undefined)]
    }), e.name);
  }
  configure(e, t) {
    return new ks(this.data, this.parser.configure(e), t || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
function oe(n) {
  let e = n.field(Ie.state, false);
  if (e) {
    return e.tree;
  } else {
    return re.empty;
  }
}
function kg(n, e, t = 50) {
  let s = n.field(Ie.state, false)?.context;
  if (!s) {
    return null;
  }
  let r = s.viewport;
  s.updateViewport({
    from: 0,
    to: e
  });
  let o = s.isDone(e) || s.work(t, e) ? s.tree : null;
  s.updateViewport(r);
  return o;
}
class wg {
  constructor(e) {
    this.doc = e;
    this.cursorPos = 0;
    this.string = "";
    this.cursor = e.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(e) {
    this.string = this.cursor.next(e - this.cursorPos).value;
    this.cursorPos = e + this.string.length;
    return this.cursorPos - this.string.length;
  }
  chunk(e) {
    this.syncTo(e);
    return this.string;
  }
  get lineChunks() {
    return true;
  }
  read(e, t) {
    let i = this.cursorPos - this.string.length;
    if (e < i || t >= this.cursorPos) {
      return this.doc.sliceString(e, t);
    } else {
      return this.string.slice(e - i, t - i);
    }
  }
}
let Bi = null;
class ws {
  constructor(e, t, i = [], s, r, o, l, a) {
    this.parser = e;
    this.state = t;
    this.fragments = i;
    this.tree = s;
    this.treeLen = r;
    this.viewport = o;
    this.skipped = l;
    this.scheduleOn = a;
    this.parse = null;
    this.tempSkipped = [];
  }
  static create(e, t, i) {
    return new ws(e, t, [], re.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new wg(this.state.doc), this.fragments);
  }
  work(e, t) {
    if (t != null && t >= this.state.doc.length) {
      t = undefined;
    }
    if (this.tree != re.empty && this.isDone(t ?? this.state.doc.length)) {
      this.takeTree();
      return true;
    } else {
      return this.withContext(() => {
        if (typeof e == "number") {
          let s = Date.now() + e;
          e = () => Date.now() > s;
        }
        this.parse ||= this.startParse();
        if (t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length) {
          this.parse.stopAt(t);
        }
        while (true) {
          let s = this.parse.advance();
          if (s) {
            this.fragments = this.withoutTempSkipped(ni.addTree(s, this.fragments, this.parse.stoppedAt != null));
            this.treeLen = this.parse.stoppedAt ?? this.state.doc.length;
            this.tree = s;
            this.parse = null;
            if (this.treeLen < (t ?? this.state.doc.length)) {
              this.parse = this.startParse();
            } else {
              return true;
            }
          }
          if (e()) {
            return false;
          }
        }
      });
    }
  }
  takeTree() {
    let e;
    let t;
    if (this.parse && (e = this.parse.parsedPos) >= this.treeLen) {
      if (this.parse.stoppedAt == null || this.parse.stoppedAt > e) {
        this.parse.stopAt(e);
      }
      this.withContext(() => {
        while (!(t = this.parse.advance()));
      });
      this.treeLen = e;
      this.tree = t;
      this.fragments = this.withoutTempSkipped(ni.addTree(this.tree, this.fragments, true));
      this.parse = null;
    }
  }
  withContext(e) {
    let t = Bi;
    Bi = this;
    try {
      return e();
    } finally {
      Bi = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop();) {
      e = nh(e, t.from, t.to);
    }
    return e;
  }
  changes(e, t) {
    let {
      fragments: i,
      tree: s,
      treeLen: r,
      viewport: o,
      skipped: l
    } = this;
    this.takeTree();
    if (!e.empty) {
      let a = [];
      e.iterChangedRanges((h, c, f, u) => a.push({
        fromA: h,
        toA: c,
        fromB: f,
        toB: u
      }));
      i = ni.applyChanges(i, a);
      s = re.empty;
      r = 0;
      o = {
        from: e.mapPos(o.from, -1),
        to: e.mapPos(o.to, 1)
      };
      if (this.skipped.length) {
        l = [];
        for (let h of this.skipped) {
          let c = e.mapPos(h.from, 1);
          let f = e.mapPos(h.to, -1);
          if (c < f) {
            l.push({
              from: c,
              to: f
            });
          }
        }
      }
    }
    return new ws(this.parser, t, i, s, r, o, l, this.scheduleOn);
  }
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to) {
      return false;
    }
    this.viewport = e;
    let t = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let {
        from: s,
        to: r
      } = this.skipped[i];
      if (s < e.to && r > e.from) {
        this.fragments = nh(this.fragments, s, r);
        this.skipped.splice(i--, 1);
      }
    }
    if (this.skipped.length >= t) {
      return false;
    } else {
      this.reset();
      return true;
    }
  }
  reset() {
    if (this.parse) {
      this.takeTree();
      this.parse = null;
    }
  }
  skipUntilInView(e, t) {
    this.skipped.push({
      from: e,
      to: t
    });
  }
  static getSkippingParser(e) {
    return new class extends Kf {
      createParse(t, i, s) {
        let r = s[0].from;
        let o = s[s.length - 1].to;
        return {
          parsedPos: r,
          advance() {
            let a = Bi;
            if (a) {
              for (let h of s) {
                a.tempSkipped.push(h);
              }
              if (e) {
                a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e;
              }
            }
            this.parsedPos = o;
            return new re(We.none, [], [], o - r);
          },
          stoppedAt: null,
          stopAt() {}
        };
      }
    }();
  }
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let t = this.fragments;
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
  }
  static get() {
    return Bi;
  }
}
function nh(n, e, t) {
  return ni.applyChanges(n, [{
    fromA: e,
    toA: t,
    fromB: e,
    toB: t
  }]);
}
class Ti {
  constructor(e) {
    this.context = e;
    this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree) {
      return this;
    }
    let t = this.context.changes(e.changes, e.state);
    let i = this.context.treeLen == e.startState.doc.length ? undefined : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    if (!t.work(20, i)) {
      t.takeTree();
    }
    return new Ti(t);
  }
  static init(e) {
    let t = Math.min(3000, e.doc.length);
    let i = ws.create(e.facet(Lt).parser, e, {
      from: 0,
      to: t
    });
    if (!i.work(20, t)) {
      i.takeTree();
    }
    return new Ti(i);
  }
}
Ie.state = le.define({
  create: Ti.init,
  update(n, e) {
    for (let t of e.effects) {
      if (t.is(Ie.setState)) {
        return t.value;
      }
    }
    if (e.startState.facet(Lt) != e.state.facet(Lt)) {
      return Ti.init(e.state);
    } else {
      return n.apply(e);
    }
  }
});
let iu = n => {
  let e = setTimeout(() => n(), 500);
  return () => clearTimeout(e);
};
if (typeof requestIdleCallback !== "undefined") {
  iu = n => {
    let e = -1;
    let t = setTimeout(() => {
      e = requestIdleCallback(n, {
        timeout: 400
      });
    }, 100);
    return () => e < 0 ? clearTimeout(t) : cancelIdleCallback(e);
  };
}
const vr = typeof navigator !== "undefined" && (wr = navigator.scheduling) !== null && wr !== undefined && wr.isInputPending ? () => navigator.scheduling.isInputPending() : null;
const vg = K.fromClass(class {
  constructor(e) {
    this.view = e;
    this.working = null;
    this.workScheduled = 0;
    this.chunkEnd = -1;
    this.chunkBudget = -1;
    this.work = this.work.bind(this);
    this.scheduleWork();
  }
  update(e) {
    let t = this.view.state.field(Ie.state).context;
    if (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) {
      this.scheduleWork();
    }
    if (e.docChanged || e.selectionSet) {
      if (this.view.hasFocus) {
        this.chunkBudget += 50;
      }
      this.scheduleWork();
    }
    this.checkAsyncSchedule(t);
  }
  scheduleWork() {
    if (this.working) {
      return;
    }
    let {
      state: e
    } = this.view;
    let t = e.field(Ie.state);
    if (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) {
      this.working = iu(this.work);
    }
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus)) {
      this.chunkEnd = t + 30000;
      this.chunkBudget = 3000;
    }
    if (this.chunkBudget <= 0) {
      return;
    }
    let {
      state: i,
      viewport: {
        to: s
      }
    } = this.view;
    let r = i.field(Ie.state);
    if (r.tree == r.context.tree && r.context.isDone(s + 100000)) {
      return;
    }
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !vr ? Math.max(25, e.timeRemaining() - 5) : 1000000000);
    let l = r.context.treeLen < s && i.doc.length > s + 1000;
    let a = r.context.work(() => vr && vr() || Date.now() > o, s + (l ? 0 : 100000));
    this.chunkBudget -= Date.now() - t;
    if (a || this.chunkBudget <= 0) {
      r.context.takeTree();
      this.view.dispatch({
        effects: Ie.setState.of(new Ti(r.context))
      });
    }
    if (this.chunkBudget > 0 && (!a || !!l)) {
      this.scheduleWork();
    }
    this.checkAsyncSchedule(r.context);
  }
  checkAsyncSchedule(e) {
    if (e.scheduleOn) {
      this.workScheduled++;
      e.scheduleOn.then(() => this.scheduleWork()).catch(t => $e(this.view.state, t)).then(() => this.workScheduled--);
      e.scheduleOn = null;
    }
  }
  destroy() {
    if (this.working) {
      this.working();
    }
  }
  isWorking() {
    return !!this.working || !!(this.workScheduled > 0);
  }
}, {
  eventHandlers: {
    focus() {
      this.scheduleWork();
    }
  }
});
const Lt = T.define({
  combine(n) {
    if (n.length) {
      return n[0];
    } else {
      return null;
    }
  },
  enables: n => [Ie.state, vg, v.contentAttributes.compute([n], e => {
    let t = e.facet(n);
    if (t && t.name) {
      return {
        "data-language": t.name
      };
    } else {
      return {};
    }
  })]
});
class Cg {
  constructor(e, t = []) {
    this.language = e;
    this.support = t;
    this.extension = [e, t];
  }
}
const qg = T.define();
const xn = T.define({
  combine: n => {
    if (!n.length) {
      return "  ";
    }
    let e = n[0];
    if (!e || /\S/.test(e) || Array.from(e).some(t => t != e[0])) {
      throw new Error("Invalid indent unit: " + JSON.stringify(n[0]));
    }
    return e;
  }
});
function vs(n) {
  let e = n.facet(xn);
  if (e.charCodeAt(0) == 9) {
    return n.tabSize * e.length;
  } else {
    return e.length;
  }
}
function fn(n, e) {
  let t = "";
  let i = n.tabSize;
  let s = n.facet(xn)[0];
  if (s == "\t") {
    while (e >= i) {
      t += "\t";
      e -= i;
    }
    s = " ";
  }
  for (let r = 0; r < e; r++) {
    t += s;
  }
  return t;
}
function ml(n, e) {
  if (n instanceof Y) {
    n = new Fs(n);
  }
  for (let i of n.state.facet(qg)) {
    let s = i(n, e);
    if (s !== undefined) {
      return s;
    }
  }
  let t = oe(n.state);
  if (t.length >= e) {
    return Tg(n, t, e);
  } else {
    return null;
  }
}
class Fs {
  constructor(e, t = {}) {
    this.state = e;
    this.options = t;
    this.unit = vs(e);
  }
  lineAt(e, t = 1) {
    let i = this.state.doc.lineAt(e);
    let {
      simulateBreak: s,
      simulateDoubleBreak: r
    } = this.options;
    if (s != null && s >= i.from && s <= i.to) {
      if (r && s == e) {
        return {
          text: "",
          from: e
        };
      } else if (t < 0 ? s < e : s <= e) {
        return {
          text: i.text.slice(s - i.from),
          from: s
        };
      } else {
        return {
          text: i.text.slice(0, s - i.from),
          from: i.from
        };
      }
    } else {
      return i;
    }
  }
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak) {
      return "";
    }
    let {
      text: i,
      from: s
    } = this.lineAt(e, t);
    return i.slice(e - s, Math.min(i.length, e + 100 - s));
  }
  column(e, t = 1) {
    let {
      text: i,
      from: s
    } = this.lineAt(e, t);
    let r = this.countColumn(i, e - s);
    let o = this.options.overrideIndentation ? this.options.overrideIndentation(s) : -1;
    if (o > -1) {
      r += o - this.countColumn(i, i.search(/\S|$/));
    }
    return r;
  }
  countColumn(e, t = e.length) {
    return Ei(e, this.state.tabSize, t);
  }
  lineIndent(e, t = 1) {
    let {
      text: i,
      from: s
    } = this.lineAt(e, t);
    let r = this.options.overrideIndentation;
    if (r) {
      let o = r(s);
      if (o > -1) {
        return o;
      }
    }
    return this.countColumn(i, i.search(/\S|$/));
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const nu = new N();
function Tg(n, e, t) {
  let i = e.resolveStack(t);
  let s = e.resolveInner(t, -1).resolve(t, 0).enterUnfinishedNodesBefore(t);
  if (s != i.node) {
    let r = [];
    for (let o = s; o && !(o.from < i.node.from) && !(o.to > i.node.to) && (o.from != i.node.from || o.type != i.node.type); o = o.parent) {
      r.push(o);
    }
    for (let o = r.length - 1; o >= 0; o--) {
      i = {
        node: r[o],
        next: i
      };
    }
  }
  return su(i, n, t);
}
function su(n, e, t) {
  for (let i = n; i; i = i.next) {
    let s = Xg(i.node);
    if (s) {
      return s(pl.create(e, t, i));
    }
  }
  return 0;
}
function $g(n) {
  return n.pos == n.options.simulateBreak && n.options.simulateDoubleBreak;
}
function Xg(n) {
  let e = n.type.prop(nu);
  if (e) {
    return e;
  }
  let t = n.firstChild;
  let i;
  if (t && (i = t.type.prop(N.closedBy))) {
    let s = n.lastChild;
    let r = s && i.indexOf(s.name) > -1;
    return o => Mg(o, true, 1, undefined, r && !$g(o) ? s.from : undefined);
  }
  if (n.parent == null) {
    return Eg;
  } else {
    return null;
  }
}
function Eg() {
  return 0;
}
class pl extends Fs {
  constructor(e, t, i) {
    super(e.state, e.options);
    this.base = e;
    this.pos = t;
    this.context = i;
  }
  get node() {
    return this.context.node;
  }
  static create(e, t, i) {
    return new pl(e, t, i);
  }
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  baseIndentFor(e) {
    let t = this.state.doc.lineAt(e.from);
    while (true) {
      let i = e.resolve(t.from);
      while (i.parent && i.parent.from == i.from) {
        i = i.parent;
      }
      if (Ag(i, e)) {
        break;
      }
      t = this.state.doc.lineAt(i.from);
    }
    return this.lineIndent(t.from);
  }
  continue() {
    return su(this.context.next, this.base, this.pos);
  }
}
function Ag(n, e) {
  for (let t = e; t; t = t.parent) {
    if (n == t) {
      return true;
    }
  }
  return false;
}
function Pg(n) {
  let e = n.node;
  let t = e.childAfter(e.from);
  let i = e.lastChild;
  if (!t) {
    return null;
  }
  let s = n.options.simulateBreak;
  let r = n.state.doc.lineAt(t.from);
  let o = s == null || s <= r.from ? r.to : Math.min(r.to, s);
  for (let l = t.to;;) {
    let a = e.childAfter(l);
    if (!a || a == i) {
      return null;
    }
    if (!a.type.isSkipped) {
      if (a.from >= o) {
        return null;
      }
      let h = /^ */.exec(r.text.slice(t.to - r.from))[0].length;
      return {
        from: t.from,
        to: t.to + h
      };
    }
    l = a.to;
  }
}
function Mg(n, e, t, i, s) {
  let r = n.textAfter;
  let o = r.match(/^\s*/)[0].length;
  let l = i && r.slice(o, o + i.length) == i || s == n.pos + o;
  let a = Pg(n);
  if (a) {
    if (l) {
      return n.column(a.from);
    } else {
      return n.column(a.to);
    }
  } else {
    return n.baseIndent + (l ? 0 : n.unit * t);
  }
}
const Rg = 200;
function Vg() {
  return Y.transactionFilter.of(n => {
    if (!n.docChanged || !n.isUserEvent("input.type") && !n.isUserEvent("input.complete")) {
      return n;
    }
    let e = n.startState.languageDataAt("indentOnInput", n.startState.selection.main.head);
    if (!e.length) {
      return n;
    }
    let t = n.newDoc;
    let {
      head: i
    } = n.newSelection.main;
    let s = t.lineAt(i);
    if (i > s.from + Rg) {
      return n;
    }
    let r = t.sliceString(s.from, i);
    if (!e.some(h => h.test(r))) {
      return n;
    }
    let {
      state: o
    } = n;
    let l = -1;
    let a = [];
    for (let {
      head: h
    } of o.selection.ranges) {
      let c = o.doc.lineAt(h);
      if (c.from == l) {
        continue;
      }
      l = c.from;
      let f = ml(o, c.from);
      if (f == null) {
        continue;
      }
      let u = /^\s*/.exec(c.text)[0];
      let d = fn(o, f);
      if (u != d) {
        a.push({
          from: c.from,
          to: c.from + u.length,
          insert: d
        });
      }
    }
    if (a.length) {
      return [n, {
        changes: a,
        sequential: true
      }];
    } else {
      return n;
    }
  });
}
const rs = T.define();
const ru = new N();
function ce(n) {
  let e = n.firstChild;
  let t = n.lastChild;
  if (e && e.to < t.from) {
    return {
      from: e.to,
      to: t.type.isError ? n.to : t.from
    };
  } else {
    return null;
  }
}
function Wg(n, e, t) {
  let i = oe(n);
  if (i.length < t) {
    return null;
  }
  let s = i.resolveStack(t, 1);
  let r = null;
  for (let o = s; o; o = o.next) {
    let l = o.node;
    if (l.to <= t || l.from > t) {
      continue;
    }
    if (r && l.from < e) {
      break;
    }
    let a = l.type.prop(ru);
    if (a && (l.to < i.length - 50 || i.length == n.doc.length || !Dg(l))) {
      let h = a(l, n);
      if (h && h.from <= t && h.from >= e && h.to > t) {
        r = h;
      }
    }
  }
  return r;
}
function Dg(n) {
  let e = n.lastChild;
  return e && e.to == n.to && e.type.isError;
}
function Cs(n, e, t) {
  for (let i of n.facet(rs)) {
    let s = i(n, e, t);
    if (s) {
      return s;
    }
  }
  return Wg(n, e, t);
}
function ou(n, e) {
  let t = e.mapPos(n.from, 1);
  let i = e.mapPos(n.to, -1);
  if (t >= i) {
    return undefined;
  } else {
    return {
      from: t,
      to: i
    };
  }
}
const Us = M.define({
  map: ou
});
const Qn = M.define({
  map: ou
});
function lu(n) {
  let e = [];
  for (let {
    head: t
  } of n.state.selection.ranges) {
    if (!e.some(i => i.from <= t && i.to >= t)) {
      e.push(n.lineBlockAt(t));
    }
  }
  return e;
}
const Nt = le.define({
  create() {
    return X.none;
  },
  update(n, e) {
    if (e.isUserEvent("delete")) {
      e.changes.iterChangedRanges((i, s) => n = sh(n, i, s));
    }
    n = n.map(e.changes);
    let t = [];
    for (let i of e.effects) {
      if (i.is(Us) && !Lg(n, i.value.from, i.value.to)) {
        t.push(i.value);
      } else if (i.is(Qn)) {
        n = n.update({
          filter: (s, r) => i.value.from != s || i.value.to != r,
          filterFrom: i.value.from,
          filterTo: i.value.to
        });
      }
    }
    if (t.length) {
      let {
        preparePlaceholder: i
      } = e.state.facet(cu);
      let s = t.map(r => (i ? X.replace({
        widget: new zg(i(e.state, r))
      }) : rh).range(r.from, r.to));
      n = n.update({
        add: s
      });
    }
    if (e.selection) {
      n = sh(n, e.selection.main.head);
    }
    return n;
  },
  provide: n => v.decorations.from(n),
  toJSON(n, e) {
    let t = [];
    n.between(0, e.doc.length, (i, s) => {
      t.push(i, s);
    });
    return t;
  },
  fromJSON(n) {
    if (!Array.isArray(n) || n.length % 2) {
      throw new RangeError("Invalid JSON for fold state");
    }
    let e = [];
    for (let t = 0; t < n.length;) {
      let i = n[t++];
      let s = n[t++];
      if (typeof i != "number" || typeof s != "number") {
        throw new RangeError("Invalid JSON for fold state");
      }
      e.push(rh.range(i, s));
    }
    return X.set(e, true);
  }
});
function sh(n, e, t = e) {
  let i = false;
  n.between(e, t, (s, r) => {
    if (s < t && r > e) {
      i = true;
    }
  });
  if (i) {
    return n.update({
      filterFrom: e,
      filterTo: t,
      filter: (s, r) => s >= t || r <= e
    });
  } else {
    return n;
  }
}
function qs(n, e, t) {
  var i;
  let s = null;
  if ((i = n.field(Nt, false)) !== null && i !== undefined) {
    i.between(e, t, (r, o) => {
      if (!s || s.from > r) {
        s = {
          from: r,
          to: o
        };
      }
    });
  }
  return s;
}
function Lg(n, e, t) {
  let i = false;
  n.between(e, e, (s, r) => {
    if (s == e && r == t) {
      i = true;
    }
  });
  return i;
}
function au(n, e) {
  if (n.field(Nt, false)) {
    return e;
  } else {
    return e.concat(M.appendConfig.of(fu()));
  }
}
const Ng = n => {
  for (let e of lu(n)) {
    let t = Cs(n.state, e.from, e.to);
    if (t) {
      n.dispatch({
        effects: au(n.state, [Us.of(t), hu(n, t)])
      });
      return true;
    }
  }
  return false;
};
const Bg = n => {
  if (!n.state.field(Nt, false)) {
    return false;
  }
  let e = [];
  for (let t of lu(n)) {
    let i = qs(n.state, t.from, t.to);
    if (i) {
      e.push(Qn.of(i), hu(n, i, false));
    }
  }
  if (e.length) {
    n.dispatch({
      effects: e
    });
  }
  return e.length > 0;
};
function hu(n, e, t = true) {
  let i = n.state.doc.lineAt(e.from).number;
  let s = n.state.doc.lineAt(e.to).number;
  return v.announce.of(`${n.state.phrase(t ? "Folded lines" : "Unfolded lines")} ${i} ${n.state.phrase("to")} ${s}.`);
}
const Yg = n => {
  let {
    state: e
  } = n;
  let t = [];
  for (let i = 0; i < e.doc.length;) {
    let s = n.lineBlockAt(i);
    let r = Cs(e, s.from, s.to);
    if (r) {
      t.push(Us.of(r));
    }
    i = (r ? n.lineBlockAt(r.to) : s).to + 1;
  }
  if (t.length) {
    n.dispatch({
      effects: au(n.state, t)
    });
  }
  return !!t.length;
};
const Gg = n => {
  let e = n.state.field(Nt, false);
  if (!e || !e.size) {
    return false;
  }
  let t = [];
  e.between(0, n.state.doc.length, (i, s) => {
    t.push(Qn.of({
      from: i,
      to: s
    }));
  });
  n.dispatch({
    effects: t
  });
  return true;
};
const Ig = [{
  key: "Ctrl-Shift-[",
  mac: "Cmd-Alt-[",
  run: Ng
}, {
  key: "Ctrl-Shift-]",
  mac: "Cmd-Alt-]",
  run: Bg
}, {
  key: "Ctrl-Alt-[",
  run: Yg
}, {
  key: "Ctrl-Alt-]",
  run: Gg
}];
const Zg = {
  placeholderDOM: null,
  preparePlaceholder: null,
  placeholderText: "…"
};
const cu = T.define({
  combine(n) {
    return Je(n, Zg);
  }
});
function fu(n) {
  return [Nt, Fg];
}
function uu(n, e) {
  let {
    state: t
  } = n;
  let i = t.facet(cu);
  let s = o => {
    let l = n.lineBlockAt(n.posAtDOM(o.target));
    let a = qs(n.state, l.from, l.to);
    if (a) {
      n.dispatch({
        effects: Qn.of(a)
      });
    }
    o.preventDefault();
  };
  if (i.placeholderDOM) {
    return i.placeholderDOM(n, s, e);
  }
  let r = document.createElement("span");
  r.textContent = i.placeholderText;
  r.setAttribute("aria-label", t.phrase("folded code"));
  r.title = t.phrase("unfold");
  r.className = "cm-foldPlaceholder";
  r.onclick = s;
  return r;
}
const rh = X.replace({
  widget: new class extends _e {
    toDOM(n) {
      return uu(n, null);
    }
  }()
});
class zg extends _e {
  constructor(e) {
    super();
    this.value = e;
  }
  eq(e) {
    return this.value == e.value;
  }
  toDOM(e) {
    return uu(e, this.value);
  }
}
const jg = {
  openText: "⌄",
  closedText: "›",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => false
};
class Cr extends pt {
  constructor(e, t) {
    super();
    this.config = e;
    this.open = t;
  }
  eq(e) {
    return this.config == e.config && this.open == e.open;
  }
  toDOM(e) {
    if (this.config.markerDOM) {
      return this.config.markerDOM(this.open);
    }
    let t = document.createElement("span");
    t.textContent = this.open ? this.config.openText : this.config.closedText;
    t.title = e.state.phrase(this.open ? "Fold line" : "Unfold line");
    return t;
  }
}
function _g(n = {}) {
  let e = {
    ...jg,
    ...n
  };
  let t = new Cr(e, true);
  let i = new Cr(e, false);
  let s = K.fromClass(class {
    constructor(o) {
      this.from = o.viewport.from;
      this.markers = this.buildMarkers(o);
    }
    update(o) {
      if (o.docChanged || o.viewportChanged || o.startState.facet(Lt) != o.state.facet(Lt) || o.startState.field(Nt, false) != o.state.field(Nt, false) || oe(o.startState) != oe(o.state) || e.foldingChanged(o)) {
        this.markers = this.buildMarkers(o.view);
      }
    }
    buildMarkers(o) {
      let l = new Qt();
      for (let a of o.viewportLineBlocks) {
        let h = qs(o.state, a.from, a.to) ? i : Cs(o.state, a.from, a.to) ? t : null;
        if (h) {
          l.add(a.from, a.from, h);
        }
      }
      return l.finish();
    }
  });
  let {
    domEventHandlers: r
  } = e;
  return [s, Zf({
    class: "cm-foldGutter",
    markers(o) {
      return o.plugin(s)?.markers || L.empty;
    },
    initialSpacer() {
      return new Cr(e, false);
    },
    domEventHandlers: {
      ...r,
      click: (o, l, a) => {
        if (r.click && r.click(o, l, a)) {
          return true;
        }
        let h = qs(o.state, l.from, l.to);
        if (h) {
          o.dispatch({
            effects: Qn.of(h)
          });
          return true;
        }
        let c = Cs(o.state, l.from, l.to);
        if (c) {
          o.dispatch({
            effects: Us.of(c)
          });
          return true;
        } else {
          return false;
        }
      }
    }
  }), fu()];
}
const Fg = v.baseTheme({
  ".cm-foldPlaceholder": {
    backgroundColor: "#eee",
    border: "1px solid #ddd",
    color: "#888",
    borderRadius: ".2em",
    margin: "0 1px",
    padding: "0 1px",
    cursor: "pointer"
  },
  ".cm-foldGutter span": {
    padding: "0 1px",
    cursor: "pointer"
  }
});
class Sn {
  constructor(e, t) {
    this.specs = e;
    let i;
    function s(l) {
      let a = Rt.newName();
      (i ||= Object.create(null))["." + a] = l;
      return a;
    }
    const r = typeof t.all == "string" ? t.all : t.all ? s(t.all) : undefined;
    const o = t.scope;
    this.scope = o instanceof Ie ? l => l.prop(mi) == o.data : o ? l => l == o : undefined;
    this.style = tu(e.map(l => ({
      tag: l.tag,
      class: l.class || s(Object.assign({}, l, {
        tag: null
      }))
    })), {
      all: r
    }).style;
    this.module = i ? new Rt(i) : null;
    this.themeType = t.themeType;
  }
  static define(e, t) {
    return new Sn(e, t || {});
  }
}
const Xo = T.define();
const du = T.define({
  combine(n) {
    if (n.length) {
      return [n[0]];
    } else {
      return null;
    }
  }
});
function qr(n) {
  let e = n.facet(Xo);
  if (e.length) {
    return e;
  } else {
    return n.facet(du);
  }
}
function Ol(n, e) {
  let t = [Hg];
  let i;
  if (n instanceof Sn) {
    if (n.module) {
      t.push(v.styleModule.of(n.module));
    }
    i = n.themeType;
  }
  if (e != null && e.fallback) {
    t.push(du.of(n));
  } else if (i) {
    t.push(Xo.computeN([v.darkTheme], s => s.facet(v.darkTheme) == (i == "dark") ? [n] : []));
  } else {
    t.push(Xo.of(n));
  }
  return t;
}
class Ug {
  constructor(e) {
    this.markCache = Object.create(null);
    this.tree = oe(e.state);
    this.decorations = this.buildDeco(e, qr(e.state));
    this.decoratedTo = e.viewport.to;
  }
  update(e) {
    let t = oe(e.state);
    let i = qr(e.state);
    let s = i != qr(e.startState);
    let {
      viewport: r
    } = e.view;
    let o = e.changes.mapPos(this.decoratedTo, 1);
    if (t.length < r.to && !s && t.type == this.tree.type && o >= r.to) {
      this.decorations = this.decorations.map(e.changes);
      this.decoratedTo = o;
    } else if (t != this.tree || e.viewportChanged || s) {
      this.tree = t;
      this.decorations = this.buildDeco(e.view, i);
      this.decoratedTo = r.to;
    }
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length) {
      return X.none;
    }
    let i = new Qt();
    for (let {
      from: s,
      to: r
    } of e.visibleRanges) {
      bg(this.tree, t, (o, l, a) => {
        i.add(o, l, this.markCache[a] ||= X.mark({
          class: a
        }));
      }, s, r);
    }
    return i.finish();
  }
}
const Hg = kt.high(K.fromClass(Ug, {
  decorations: n => n.decorations
}));
const mu = Sn.define([{
  tag: g.meta,
  color: "#404740"
}, {
  tag: g.link,
  textDecoration: "underline"
}, {
  tag: g.heading,
  textDecoration: "underline",
  fontWeight: "bold"
}, {
  tag: g.emphasis,
  fontStyle: "italic"
}, {
  tag: g.strong,
  fontWeight: "bold"
}, {
  tag: g.strikethrough,
  textDecoration: "line-through"
}, {
  tag: g.keyword,
  color: "#708"
}, {
  tag: [g.atom, g.bool, g.url, g.contentSeparator, g.labelName],
  color: "#219"
}, {
  tag: [g.literal, g.inserted],
  color: "#164"
}, {
  tag: [g.string, g.deleted],
  color: "#a11"
}, {
  tag: [g.regexp, g.escape, g.special(g.string)],
  color: "#e40"
}, {
  tag: g.definition(g.variableName),
  color: "#00f"
}, {
  tag: g.local(g.variableName),
  color: "#30a"
}, {
  tag: [g.typeName, g.namespace],
  color: "#085"
}, {
  tag: g.className,
  color: "#167"
}, {
  tag: [g.special(g.variableName), g.macroName],
  color: "#256"
}, {
  tag: g.definition(g.propertyName),
  color: "#00c"
}, {
  tag: g.comment,
  color: "#940"
}, {
  tag: g.invalid,
  color: "#f00"
}]);
const Kg = v.baseTheme({
  "&.cm-focused .cm-matchingBracket": {
    backgroundColor: "#328c8252"
  },
  "&.cm-focused .cm-nonmatchingBracket": {
    backgroundColor: "#bb555544"
  }
});
const pu = 10000;
const Ou = "()[]{}";
const gu = T.define({
  combine(n) {
    return Je(n, {
      afterCursor: true,
      brackets: Ou,
      maxScanDistance: pu,
      renderMatch: tb
    });
  }
});
const Jg = X.mark({
  class: "cm-matchingBracket"
});
const eb = X.mark({
  class: "cm-nonmatchingBracket"
});
function tb(n) {
  let e = [];
  let t = n.matched ? Jg : eb;
  e.push(t.range(n.start.from, n.start.to));
  if (n.end) {
    e.push(t.range(n.end.from, n.end.to));
  }
  return e;
}
function oh(n) {
  let e = [];
  let t = n.facet(gu);
  for (let i of n.selection.ranges) {
    if (!i.empty) {
      continue;
    }
    let s = ft(n, i.head, -1, t) || i.head > 0 && ft(n, i.head - 1, 1, t) || t.afterCursor && (ft(n, i.head, 1, t) || i.head < n.doc.length && ft(n, i.head + 1, -1, t));
    if (s) {
      e = e.concat(t.renderMatch(s, n));
    }
  }
  return X.set(e, true);
}
const ib = K.fromClass(class {
  constructor(n) {
    this.paused = false;
    this.decorations = oh(n.state);
  }
  update(n) {
    if (n.docChanged || n.selectionSet || this.paused) {
      if (n.view.composing) {
        this.decorations = this.decorations.map(n.changes);
        this.paused = true;
      } else {
        this.decorations = oh(n.state);
        this.paused = false;
      }
    }
  }
}, {
  decorations: n => n.decorations
});
const nb = [ib, Kg];
function bu(n = {}) {
  return [gu.of(n), nb];
}
const sb = new N();
function Eo(n, e, t) {
  let i = n.prop(e < 0 ? N.openedBy : N.closedBy);
  if (i) {
    return i;
  }
  if (n.name.length == 1) {
    let s = t.indexOf(n.name);
    if (s > -1 && s % 2 == (e < 0 ? 1 : 0)) {
      return [t[s + e]];
    }
  }
  return null;
}
function Ao(n) {
  let e = n.type.prop(sb);
  if (e) {
    return e(n.node);
  } else {
    return n;
  }
}
function ft(n, e, t, i = {}) {
  let s = i.maxScanDistance || pu;
  let r = i.brackets || Ou;
  let o = oe(n);
  let l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let h = Eo(a.type, t, r);
    if (h && a.from < a.to) {
      let c = Ao(a);
      if (c && (t > 0 ? e >= c.from && e < c.to : e > c.from && e <= c.to)) {
        return rb(n, e, t, a, c, h, r);
      }
    }
  }
  return ob(n, e, t, o, l.type, s, r);
}
function rb(n, e, t, i, s, r, o) {
  let l = i.parent;
  let a = {
    from: s.from,
    to: s.to
  };
  let h = 0;
  let c = l == null ? undefined : l.cursor();
  if (c && (t < 0 ? c.childBefore(i.from) : c.childAfter(i.to))) {
    do {
      if (t < 0 ? c.to <= i.from : c.from >= i.to) {
        if (h == 0 && r.indexOf(c.type.name) > -1 && c.from < c.to) {
          let f = Ao(c);
          return {
            start: a,
            end: f ? {
              from: f.from,
              to: f.to
            } : undefined,
            matched: true
          };
        } else if (Eo(c.type, t, o)) {
          h++;
        } else if (Eo(c.type, -t, o)) {
          if (h == 0) {
            let f = Ao(c);
            return {
              start: a,
              end: f && f.from < f.to ? {
                from: f.from,
                to: f.to
              } : undefined,
              matched: false
            };
          }
          h--;
        }
      }
    } while (t < 0 ? c.prevSibling() : c.nextSibling());
  }
  return {
    start: a,
    matched: false
  };
}
function ob(n, e, t, i, s, r, o) {
  if (t < 0 ? !e : e == n.doc.length) {
    return null;
  }
  let l = t < 0 ? n.sliceDoc(e - 1, e) : n.sliceDoc(e, e + 1);
  let a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != t > 0) {
    return null;
  }
  let h = {
    from: t < 0 ? e - 1 : e,
    to: t > 0 ? e + 1 : e
  };
  let c = n.doc.iterRange(e, t > 0 ? n.doc.length : 0);
  let f = 0;
  for (let u = 0; !c.next().done && u <= r;) {
    let d = c.value;
    if (t < 0) {
      u += d.length;
    }
    let m = e + u * t;
    for (let p = t > 0 ? 0 : d.length - 1, O = t > 0 ? d.length : -1; p != O; p += t) {
      let b = o.indexOf(d[p]);
      if (!(b < 0) && i.resolveInner(m + p, 1).type == s) {
        if (b % 2 == 0 == t > 0) {
          f++;
        } else {
          if (f == 1) {
            return {
              start: h,
              end: {
                from: m + p,
                to: m + p + 1
              },
              matched: b >> 1 == a >> 1
            };
          }
          f--;
        }
      }
    }
    if (t > 0) {
      u += d.length;
    }
  }
  if (c.done) {
    return {
      start: h,
      matched: false
    };
  } else {
    return null;
  }
}
const lb = Object.create(null);
const lh = [We.none];
const ah = [];
const hh = Object.create(null);
const ab = Object.create(null);
for (let [n, e] of [["variable", "variableName"], ["variable-2", "variableName.special"], ["string-2", "string.special"], ["def", "variableName.definition"], ["tag", "tagName"], ["attribute", "attributeName"], ["type", "typeName"], ["builtin", "variableName.standard"], ["qualifier", "modifier"], ["error", "invalid"], ["header", "heading"], ["property", "propertyName"]]) {
  ab[n] = hb(lb, e);
}
function Tr(n, e) {
  if (!(ah.indexOf(n) > -1)) {
    ah.push(n);
    console.warn(e);
  }
}
function hb(n, e) {
  let t = [];
  for (let l of e.split(" ")) {
    let a = [];
    for (let h of l.split(".")) {
      let c = n[h] || g[h];
      if (c) {
        if (typeof c == "function") {
          if (a.length) {
            a = a.map(c);
          } else {
            Tr(h, `Modifier ${h} used at start of tag`);
          }
        } else if (a.length) {
          Tr(h, `Tag ${h} used as modifier`);
        } else {
          a = Array.isArray(c) ? c : [c];
        }
      } else {
        Tr(h, `Unknown highlighting tag ${h}`);
      }
    }
    for (let h of a) {
      t.push(h);
    }
  }
  if (!t.length) {
    return 0;
  }
  let i = e.replace(/ /g, "_");
  let s = i + " " + t.map(l => l.id);
  let r = hh[s];
  if (r) {
    return r.id;
  }
  let o = hh[s] = We.define({
    id: lh.length,
    name: i,
    props: [Jf({
      [i]: t
    })]
  });
  lh.push(o);
  return o.id;
}
F.RTL;
F.LTR;
const cb = n => {
  let {
    state: e
  } = n;
  let t = e.doc.lineAt(e.selection.main.from);
  let i = bl(n.state, t.from);
  if (i.line) {
    return fb(n);
  } else if (i.block) {
    return db(n);
  } else {
    return false;
  }
};
function gl(n, e) {
  return ({
    state: t,
    dispatch: i
  }) => {
    if (t.readOnly) {
      return false;
    }
    let s = n(e, t);
    if (s) {
      i(t.update(s));
      return true;
    } else {
      return false;
    }
  };
}
const fb = gl(Ob, 0);
const ub = gl(yu, 0);
const db = gl((n, e) => yu(n, e, pb(e)), 0);
function bl(n, e) {
  let t = n.languageDataAt("commentTokens", e, 1);
  if (t.length) {
    return t[0];
  } else {
    return {};
  }
}
const Yi = 50;
function mb(n, {
  open: e,
  close: t
}, i, s) {
  let r = n.sliceDoc(i - Yi, i);
  let o = n.sliceDoc(s, s + Yi);
  let l = /\s*$/.exec(r)[0].length;
  let a = /^\s*/.exec(o)[0].length;
  let h = r.length - l;
  if (r.slice(h - e.length, h) == e && o.slice(a, a + t.length) == t) {
    return {
      open: {
        pos: i - l,
        margin: l && 1
      },
      close: {
        pos: s + a,
        margin: a && 1
      }
    };
  }
  let c;
  let f;
  if (s - i <= Yi * 2) {
    c = f = n.sliceDoc(i, s);
  } else {
    c = n.sliceDoc(i, i + Yi);
    f = n.sliceDoc(s - Yi, s);
  }
  let u = /^\s*/.exec(c)[0].length;
  let d = /\s*$/.exec(f)[0].length;
  let m = f.length - d - t.length;
  if (c.slice(u, u + e.length) == e && f.slice(m, m + t.length) == t) {
    return {
      open: {
        pos: i + u + e.length,
        margin: /\s/.test(c.charAt(u + e.length)) ? 1 : 0
      },
      close: {
        pos: s - d - t.length,
        margin: /\s/.test(f.charAt(m - 1)) ? 1 : 0
      }
    };
  } else {
    return null;
  }
}
function pb(n) {
  let e = [];
  for (let t of n.selection.ranges) {
    let i = n.doc.lineAt(t.from);
    let s = t.to <= i.to ? i : n.doc.lineAt(t.to);
    if (s.from > i.from && s.from == t.to) {
      s = t.to == i.to + 1 ? i : n.doc.lineAt(t.to - 1);
    }
    let r = e.length - 1;
    if (r >= 0 && e[r].to > i.from) {
      e[r].to = s.to;
    } else {
      e.push({
        from: i.from + /^\s*/.exec(i.text)[0].length,
        to: s.to
      });
    }
  }
  return e;
}
function yu(n, e, t = e.selection.ranges) {
  let i = t.map(r => bl(e, r.from).block);
  if (!i.every(r => r)) {
    return null;
  }
  let s = t.map((r, o) => mb(e, i[o], r.from, r.to));
  if (n != 2 && !s.every(r => r)) {
    return {
      changes: e.changes(t.map((r, o) => s[o] ? [] : [{
        from: r.from,
        insert: i[o].open + " "
      }, {
        from: r.to,
        insert: " " + i[o].close
      }]))
    };
  }
  if (n != 1 && s.some(r => r)) {
    let r = [];
    for (let o = 0, l; o < s.length; o++) {
      if (l = s[o]) {
        let a = i[o];
        let {
          open: h,
          close: c
        } = l;
        r.push({
          from: h.pos - a.open.length,
          to: h.pos + h.margin
        }, {
          from: c.pos - c.margin,
          to: c.pos + a.close.length
        });
      }
    }
    return {
      changes: r
    };
  }
  return null;
}
function Ob(n, e, t = e.selection.ranges) {
  let i = [];
  let s = -1;
  e: for (let {
    from: r,
    to: o
  } of t) {
    let l = i.length;
    let a = 1000000000;
    let h;
    for (let c = r; c <= o;) {
      let f = e.doc.lineAt(c);
      if (h == null && (h = bl(e, f.from).line, !h)) {
        continue e;
      }
      if (f.from > s && (r == o || o > f.from)) {
        s = f.from;
        let u = /^\s*/.exec(f.text)[0].length;
        let d = u == f.length;
        let m = f.text.slice(u, u + h.length) == h ? u : -1;
        if (u < f.text.length && u < a) {
          a = u;
        }
        i.push({
          line: f,
          comment: m,
          token: h,
          indent: u,
          empty: d,
          single: false
        });
      }
      c = f.to + 1;
    }
    if (a < 1000000000) {
      for (let c = l; c < i.length; c++) {
        if (i[c].indent < i[c].line.text.length) {
          i[c].indent = a;
        }
      }
    }
    if (i.length == l + 1) {
      i[l].single = true;
    }
  }
  if (n != 2 && i.some(r => r.comment < 0 && (!r.empty || r.single))) {
    let r = [];
    for (let {
      line: l,
      token: a,
      indent: h,
      empty: c,
      single: f
    } of i) {
      if (f || !c) {
        r.push({
          from: l.from + h,
          insert: a + " "
        });
      }
    }
    let o = e.changes(r);
    return {
      changes: o,
      selection: e.selection.map(o, 1)
    };
  } else if (n != 1 && i.some(r => r.comment >= 0)) {
    let r = [];
    for (let {
      line: o,
      comment: l,
      token: a
    } of i) {
      if (l >= 0) {
        let h = o.from + l;
        let c = h + a.length;
        if (o.text[c - o.from] == " ") {
          c++;
        }
        r.push({
          from: h,
          to: c
        });
      }
    }
    return {
      changes: r
    };
  }
  return null;
}
const Po = Ot.define();
const gb = Ot.define();
const bb = T.define();
const xu = T.define({
  combine(n) {
    return Je(n, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (e, t) => t
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (e, t) => (i, s) => e(i, s) || t(i, s)
    });
  }
});
const yl = le.define({
  create() {
    return ut.empty;
  },
  update(n, e) {
    let t = e.state.facet(xu);
    let i = e.annotation(Po);
    if (i) {
      let a = Me.fromTransaction(e, i.selection);
      let h = i.side;
      let c = h == 0 ? n.undone : n.done;
      if (a) {
        c = Ts(c, c.length, t.minDepth, a);
      } else {
        c = ku(c, e.startState.selection);
      }
      return new ut(h == 0 ? i.rest : c, h == 0 ? c : i.rest);
    }
    let s = e.annotation(gb);
    if (s == "full" || s == "before") {
      n = n.isolate();
    }
    if (e.annotation(fe.addToHistory) === false) {
      if (e.changes.empty) {
        return n;
      } else {
        return n.addMapping(e.changes.desc);
      }
    }
    let r = Me.fromTransaction(e);
    let o = e.annotation(fe.time);
    let l = e.annotation(fe.userEvent);
    if (r) {
      n = n.addChanges(r, o, l, t, e);
    } else if (e.selection) {
      n = n.addSelection(e.startState.selection, o, l, t.newGroupDelay);
    }
    if (s == "full" || s == "after") {
      n = n.isolate();
    }
    return n;
  },
  toJSON(n) {
    return {
      done: n.done.map(e => e.toJSON()),
      undone: n.undone.map(e => e.toJSON())
    };
  },
  fromJSON(n) {
    return new ut(n.done.map(Me.fromJSON), n.undone.map(Me.fromJSON));
  }
});
function yb(n = {}) {
  return [yl, xu.of(n), v.domEventHandlers({
    beforeinput(e, t) {
      let i = e.inputType == "historyUndo" ? Qu : e.inputType == "historyRedo" ? Mo : null;
      if (i) {
        e.preventDefault();
        return i(t);
      } else {
        return false;
      }
    }
  })];
}
const xb = yl;
function Hs(n, e) {
  return function ({
    state: t,
    dispatch: i
  }) {
    if (!e && t.readOnly) {
      return false;
    }
    let s = t.field(yl, false);
    if (!s) {
      return false;
    }
    let r = s.pop(n, t, e);
    if (r) {
      i(r);
      return true;
    } else {
      return false;
    }
  };
}
const Qu = Hs(0, false);
const Mo = Hs(1, false);
const Qb = Hs(0, true);
const Sb = Hs(1, true);
class Me {
  constructor(e, t, i, s, r) {
    this.changes = e;
    this.effects = t;
    this.mapped = i;
    this.startSelection = s;
    this.selectionsAfter = r;
  }
  setSelAfter(e) {
    return new Me(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e;
    var t;
    var i;
    return {
      changes: (e = this.changes) === null || e === undefined ? undefined : e.toJSON(),
      mapped: (t = this.mapped) === null || t === undefined ? undefined : t.toJSON(),
      startSelection: (i = this.startSelection) === null || i === undefined ? undefined : i.toJSON(),
      selectionsAfter: this.selectionsAfter.map(s => s.toJSON())
    };
  }
  static fromJSON(e) {
    return new Me(e.changes && de.fromJSON(e.changes), [], e.mapped && mt.fromJSON(e.mapped), e.startSelection && y.fromJSON(e.startSelection), e.selectionsAfter.map(y.fromJSON));
  }
  static fromTransaction(e, t) {
    let i = Ze;
    for (let s of e.startState.facet(bb)) {
      let r = s(e);
      if (r.length) {
        i = i.concat(r);
      }
    }
    if (!i.length && e.changes.empty) {
      return null;
    } else {
      return new Me(e.changes.invert(e.startState.doc), i, undefined, t || e.startState.selection, Ze);
    }
  }
  static selection(e) {
    return new Me(undefined, Ze, undefined, undefined, e);
  }
}
function Ts(n, e, t, i) {
  let s = e + 1 > t + 20 ? e - t - 1 : 0;
  let r = n.slice(s, e);
  r.push(i);
  return r;
}
function kb(n, e) {
  let t = [];
  let i = false;
  n.iterChangedRanges((s, r) => t.push(s, r));
  e.iterChangedRanges((s, r, o, l) => {
    for (let a = 0; a < t.length;) {
      let h = t[a++];
      let c = t[a++];
      if (l >= h && o <= c) {
        i = true;
      }
    }
  });
  return i;
}
function wb(n, e) {
  return n.ranges.length == e.ranges.length && n.ranges.filter((t, i) => t.empty != e.ranges[i].empty).length === 0;
}
function Su(n, e) {
  if (n.length) {
    if (e.length) {
      return n.concat(e);
    } else {
      return n;
    }
  } else {
    return e;
  }
}
const Ze = [];
const vb = 200;
function ku(n, e) {
  if (n.length) {
    let t = n[n.length - 1];
    let i = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - vb));
    if (i.length && i[i.length - 1].eq(e)) {
      return n;
    } else {
      i.push(e);
      return Ts(n, n.length - 1, 1000000000, t.setSelAfter(i));
    }
  } else {
    return [Me.selection([e])];
  }
}
function Cb(n) {
  let e = n[n.length - 1];
  let t = n.slice();
  t[n.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1));
  return t;
}
function $r(n, e) {
  if (!n.length) {
    return n;
  }
  let t = n.length;
  let i = Ze;
  while (t) {
    let s = qb(n[t - 1], e, i);
    if (s.changes && !s.changes.empty || s.effects.length) {
      let r = n.slice(0, t);
      r[t - 1] = s;
      return r;
    } else {
      e = s.mapped;
      t--;
      i = s.selectionsAfter;
    }
  }
  if (i.length) {
    return [Me.selection(i)];
  } else {
    return Ze;
  }
}
function qb(n, e, t) {
  let i = Su(n.selectionsAfter.length ? n.selectionsAfter.map(l => l.map(e)) : Ze, t);
  if (!n.changes) {
    return Me.selection(i);
  }
  let s = n.changes.map(e);
  let r = e.mapDesc(n.changes, true);
  let o = n.mapped ? n.mapped.composeDesc(r) : r;
  return new Me(s, M.mapEffects(n.effects, e), o, n.startSelection.map(r), i);
}
const Tb = /^(input\.type|delete)($|\.)/;
class ut {
  constructor(e, t, i = 0, s = undefined) {
    this.done = e;
    this.undone = t;
    this.prevTime = i;
    this.prevUserEvent = s;
  }
  isolate() {
    if (this.prevTime) {
      return new ut(this.done, this.undone);
    } else {
      return this;
    }
  }
  addChanges(e, t, i, s, r) {
    let o = this.done;
    let l = o[o.length - 1];
    if (l && l.changes && !l.changes.empty && e.changes && (!i || Tb.test(i)) && (!l.selectionsAfter.length && t - this.prevTime < s.newGroupDelay && s.joinToEvent(r, kb(l.changes, e.changes)) || i == "input.type.compose")) {
      o = Ts(o, o.length - 1, s.minDepth, new Me(e.changes.compose(l.changes), Su(M.mapEffects(e.effects, l.changes), l.effects), l.mapped, l.startSelection, Ze));
    } else {
      o = Ts(o, o.length, s.minDepth, e);
    }
    return new ut(o, Ze, t, i);
  }
  addSelection(e, t, i, s) {
    let r = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Ze;
    if (r.length > 0 && t - this.prevTime < s && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && wb(r[r.length - 1], e)) {
      return this;
    } else {
      return new ut(ku(this.done, e), this.undone, t, i);
    }
  }
  addMapping(e) {
    return new ut($r(this.done, e), $r(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, i) {
    let s = e == 0 ? this.done : this.undone;
    if (s.length == 0) {
      return null;
    }
    let r = s[s.length - 1];
    let o = r.selectionsAfter[0] || (r.startSelection ? r.startSelection.map(r.changes.invertedDesc, 1) : t.selection);
    if (i && r.selectionsAfter.length) {
      return t.update({
        selection: r.selectionsAfter[r.selectionsAfter.length - 1],
        annotations: Po.of({
          side: e,
          rest: Cb(s),
          selection: o
        }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: true
      });
    }
    if (r.changes) {
      let l = s.length == 1 ? Ze : s.slice(0, s.length - 1);
      if (r.mapped) {
        l = $r(l, r.mapped);
      }
      return t.update({
        changes: r.changes,
        selection: r.startSelection,
        effects: r.effects,
        annotations: Po.of({
          side: e,
          rest: l,
          selection: o
        }),
        filter: false,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: true
      });
    } else {
      return null;
    }
  }
}
ut.empty = new ut(Ze, Ze);
const $b = [{
  key: "Mod-z",
  run: Qu,
  preventDefault: true
}, {
  key: "Mod-y",
  mac: "Mod-Shift-z",
  run: Mo,
  preventDefault: true
}, {
  linux: "Ctrl-Shift-z",
  run: Mo,
  preventDefault: true
}, {
  key: "Mod-u",
  run: Qb,
  preventDefault: true
}, {
  key: "Alt-u",
  mac: "Mod-Shift-u",
  run: Sb,
  preventDefault: true
}];
function Ai(n, e) {
  return y.create(n.ranges.map(e), n.mainIndex);
}
function et(n, e) {
  return n.update({
    selection: e,
    scrollIntoView: true,
    userEvent: "select"
  });
}
function tt({
  state: n,
  dispatch: e
}, t) {
  let i = Ai(n.selection, t);
  if (i.eq(n.selection, true)) {
    return false;
  } else {
    e(et(n, i));
    return true;
  }
}
function Ks(n, e) {
  return y.cursor(e ? n.to : n.from);
}
function wu(n, e) {
  return tt(n, t => t.empty ? n.moveByChar(t, e) : Ks(t, e));
}
function Ce(n) {
  return n.textDirectionAt(n.state.selection.main.head) == F.LTR;
}
const vu = n => wu(n, !Ce(n));
const Cu = n => wu(n, Ce(n));
function qu(n, e) {
  return tt(n, t => t.empty ? n.moveByGroup(t, e) : Ks(t, e));
}
const Xb = n => qu(n, !Ce(n));
const Eb = n => qu(n, Ce(n));
function Ab(n, e, t) {
  if (e.type.prop(t)) {
    return true;
  }
  let i = e.to - e.from;
  return i && (i > 2 || /[^\s,.;:]/.test(n.sliceDoc(e.from, e.to))) || e.firstChild;
}
function Js(n, e, t) {
  let i = oe(n).resolveInner(e.head);
  let s = t ? N.closedBy : N.openedBy;
  for (let a = e.head;;) {
    let h = t ? i.childAfter(a) : i.childBefore(a);
    if (!h) {
      break;
    }
    if (Ab(n, h, s)) {
      i = h;
    } else {
      a = t ? h.to : h.from;
    }
  }
  let r = i.type.prop(s);
  let o;
  let l;
  if (r && (o = t ? ft(n, i.from, 1) : ft(n, i.to, -1)) && o.matched) {
    l = t ? o.end.to : o.end.from;
  } else {
    l = t ? i.to : i.from;
  }
  return y.cursor(l, t ? -1 : 1);
}
const Pb = n => tt(n, e => Js(n.state, e, !Ce(n)));
const Mb = n => tt(n, e => Js(n.state, e, Ce(n)));
function Tu(n, e) {
  return tt(n, t => {
    if (!t.empty) {
      return Ks(t, e);
    }
    let i = n.moveVertically(t, e);
    if (i.head != t.head) {
      return i;
    } else {
      return n.moveToLineBoundary(t, e);
    }
  });
}
const $u = n => Tu(n, false);
const Xu = n => Tu(n, true);
function Eu(n) {
  let e = n.scrollDOM.clientHeight < n.scrollDOM.scrollHeight - 2;
  let t = 0;
  let i = 0;
  let s;
  if (e) {
    for (let r of n.state.facet(v.scrollMargins)) {
      let o = r(n);
      if (o != null && o.top) {
        t = Math.max(o == null ? undefined : o.top, t);
      }
      if (o != null && o.bottom) {
        i = Math.max(o == null ? undefined : o.bottom, i);
      }
    }
    s = n.scrollDOM.clientHeight - t - i;
  } else {
    s = (n.dom.ownerDocument.defaultView || window).innerHeight;
  }
  return {
    marginTop: t,
    marginBottom: i,
    selfScroll: e,
    height: Math.max(n.defaultLineHeight, s - 5)
  };
}
function Au(n, e) {
  let t = Eu(n);
  let {
    state: i
  } = n;
  let s = Ai(i.selection, o => o.empty ? n.moveVertically(o, e, t.height) : Ks(o, e));
  if (s.eq(i.selection)) {
    return false;
  }
  let r;
  if (t.selfScroll) {
    let o = n.coordsAtPos(i.selection.main.head);
    let l = n.scrollDOM.getBoundingClientRect();
    let a = l.top + t.marginTop;
    let h = l.bottom - t.marginBottom;
    if (o && o.top > a && o.bottom < h) {
      r = v.scrollIntoView(s.main.head, {
        y: "start",
        yMargin: o.top - a
      });
    }
  }
  n.dispatch(et(i, s), {
    effects: r
  });
  return true;
}
const ch = n => Au(n, false);
const Ro = n => Au(n, true);
function Gt(n, e, t) {
  let i = n.lineBlockAt(e.head);
  let s = n.moveToLineBoundary(e, t);
  if (s.head == e.head && s.head != (t ? i.to : i.from)) {
    s = n.moveToLineBoundary(e, t, false);
  }
  if (!t && s.head == i.from && i.length) {
    let r = /^\s*/.exec(n.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    if (r && e.head != i.from + r) {
      s = y.cursor(i.from + r);
    }
  }
  return s;
}
const Rb = n => tt(n, e => Gt(n, e, true));
const Vb = n => tt(n, e => Gt(n, e, false));
const Wb = n => tt(n, e => Gt(n, e, !Ce(n)));
const Db = n => tt(n, e => Gt(n, e, Ce(n)));
const Lb = n => tt(n, e => y.cursor(n.lineBlockAt(e.head).from, 1));
const Nb = n => tt(n, e => y.cursor(n.lineBlockAt(e.head).to, -1));
function Bb(n, e, t) {
  let i = false;
  let s = Ai(n.selection, r => {
    let o = ft(n, r.head, -1) || ft(n, r.head, 1) || r.head > 0 && ft(n, r.head - 1, 1) || r.head < n.doc.length && ft(n, r.head + 1, -1);
    if (!o || !o.end) {
      return r;
    }
    i = true;
    let l = o.start.from == r.head ? o.end.to : o.end.from;
    return y.cursor(l);
  });
  if (i) {
    e(et(n, s));
    return true;
  } else {
    return false;
  }
}
const Yb = ({
  state: n,
  dispatch: e
}) => Bb(n, e);
function Fe(n, e, t) {
  let i = Ai(n.state.selection, s => {
    if (s.undirectional && s.head >= s.anchor != e) {
      s = y.range(s.head, s.anchor);
    }
    let r = t(s);
    return y.range(s.anchor, r.head, r.goalColumn, r.bidiLevel || undefined, r.assoc);
  });
  if (i.eq(n.state.selection)) {
    return false;
  } else {
    n.dispatch(et(n.state, i));
    return true;
  }
}
function Pu(n, e) {
  return Fe(n, e, t => n.moveByChar(t, e));
}
const Mu = n => Pu(n, !Ce(n));
const Ru = n => Pu(n, Ce(n));
function Vu(n, e) {
  return Fe(n, e, t => n.moveByGroup(t, e));
}
const Gb = n => Vu(n, !Ce(n));
const Ib = n => Vu(n, Ce(n));
const Zb = n => {
  let e = !Ce(n);
  return Fe(n, e, t => Js(n.state, t, e));
};
const zb = n => {
  let e = Ce(n);
  return Fe(n, e, t => Js(n.state, t, e));
};
function Wu(n, e) {
  return Fe(n, e, t => n.moveVertically(t, e));
}
const Du = n => Wu(n, false);
const Lu = n => Wu(n, true);
function Nu(n, e) {
  return Fe(n, e, t => n.moveVertically(t, e, Eu(n).height));
}
const fh = n => Nu(n, false);
const uh = n => Nu(n, true);
const jb = n => Fe(n, true, e => Gt(n, e, true));
const _b = n => Fe(n, false, e => Gt(n, e, false));
const Fb = n => {
  let e = !Ce(n);
  return Fe(n, e, t => Gt(n, t, e));
};
const Ub = n => {
  let e = Ce(n);
  return Fe(n, e, t => Gt(n, t, e));
};
const Hb = n => Fe(n, false, e => y.cursor(n.lineBlockAt(e.head).from));
const Kb = n => Fe(n, true, e => y.cursor(n.lineBlockAt(e.head).to));
const dh = ({
  state: n,
  dispatch: e
}) => {
  e(et(n, {
    anchor: 0
  }));
  return true;
};
const mh = ({
  state: n,
  dispatch: e
}) => {
  e(et(n, {
    anchor: n.doc.length
  }));
  return true;
};
const ph = ({
  state: n,
  dispatch: e
}) => {
  e(et(n, {
    anchor: n.selection.main.anchor,
    head: 0
  }));
  return true;
};
const Oh = ({
  state: n,
  dispatch: e
}) => {
  e(et(n, {
    anchor: n.selection.main.anchor,
    head: n.doc.length
  }));
  return true;
};
const Jb = ({
  state: n,
  dispatch: e
}) => {
  e(n.update({
    selection: {
      anchor: 0,
      head: n.doc.length
    },
    userEvent: "select"
  }));
  return true;
};
const e0 = ({
  state: n,
  dispatch: e
}) => {
  let t = er(n).map(({
    from: i,
    to: s
  }) => y.range(i, Math.min(s + 1, n.doc.length)));
  e(n.update({
    selection: y.create(t),
    userEvent: "select"
  }));
  return true;
};
const t0 = ({
  state: n,
  dispatch: e
}) => {
  let t = Ai(n.selection, i => {
    let s = oe(n);
    let r = s.resolveStack(i.from, 1);
    if (i.empty) {
      let o = s.resolveStack(i.from, -1);
      if (o.node.from >= r.node.from && o.node.to <= r.node.to) {
        r = o;
      }
    }
    for (let o = r; o; o = o.next) {
      let {
        node: l
      } = o;
      if ((l.from < i.from && l.to >= i.to || l.to > i.to && l.from <= i.from) && o.next) {
        return y.range(l.to, l.from);
      }
    }
    return i;
  });
  if (t.eq(n.selection)) {
    return false;
  } else {
    e(et(n, t));
    return true;
  }
};
function Bu(n, e) {
  let {
    state: t
  } = n;
  let i = t.selection;
  let s = t.selection.ranges.slice();
  for (let r of t.selection.ranges) {
    let o = t.doc.lineAt(r.head);
    if (e ? o.to < n.state.doc.length : o.from > 0) {
      for (let l = r;;) {
        let a = n.moveVertically(l, e);
        if (a.head < o.from || a.head > o.to) {
          if (!s.some(h => h.head == a.head)) {
            s.push(a);
          }
          break;
        } else {
          if (a.head == l.head) {
            break;
          }
          l = a;
        }
      }
    }
  }
  if (s.length == i.ranges.length) {
    return false;
  } else {
    n.dispatch(et(t, y.create(s, s.length - 1)));
    return true;
  }
}
const i0 = n => Bu(n, false);
const n0 = n => Bu(n, true);
const s0 = ({
  state: n,
  dispatch: e
}) => {
  let t = n.selection;
  let i = null;
  if (t.ranges.length > 1) {
    i = y.create([t.main]);
  } else if (!t.main.empty) {
    i = y.create([y.cursor(t.main.head)]);
  }
  if (i) {
    e(et(n, i));
    return true;
  } else {
    return false;
  }
};
function kn(n, e) {
  if (n.state.readOnly) {
    return false;
  }
  let t = "delete.selection";
  let {
    state: i
  } = n;
  let s = i.changeByRange(r => {
    let {
      from: o,
      to: l
    } = r;
    if (o == l) {
      let a = e(r);
      if (a < o) {
        t = "delete.backward";
        a = In(n, a, false);
      } else if (a > o) {
        t = "delete.forward";
        a = In(n, a, true);
      }
      o = Math.min(o, a);
      l = Math.max(l, a);
    } else {
      o = In(n, o, false);
      l = In(n, l, true);
    }
    if (o == l) {
      return {
        range: r
      };
    } else {
      return {
        changes: {
          from: o,
          to: l
        },
        range: y.cursor(o, o < r.head ? -1 : 1)
      };
    }
  });
  if (s.changes.empty) {
    return false;
  } else {
    n.dispatch(i.update(s, {
      scrollIntoView: true,
      userEvent: t,
      effects: t == "delete.selection" ? v.announce.of(i.phrase("Selection deleted")) : undefined
    }));
    return true;
  }
}
function In(n, e, t) {
  if (n instanceof v) {
    for (let i of n.state.facet(v.atomicRanges).map(s => s(n))) {
      i.between(e, e, (s, r) => {
        if (s < e && r > e) {
          e = t ? r : s;
        }
      });
    }
  }
  return e;
}
const Yu = (n, e, t) => kn(n, i => {
  let s = i.from;
  let {
    state: r
  } = n;
  let o = r.doc.lineAt(s);
  let l;
  let a;
  if (t && !e && s > o.from && s < o.from + 200 && !/[^ \t]/.test(l = o.text.slice(0, s - o.from))) {
    if (l[l.length - 1] == "\t") {
      return s - 1;
    }
    let h = Ei(l, r.tabSize);
    let c = h % vs(r) || vs(r);
    for (let f = 0; f < c && l[l.length - 1 - f] == " "; f++) {
      s--;
    }
    a = s;
  } else {
    a = be(o.text, s - o.from, e, e) + o.from;
    if (a == s && o.number != (e ? r.doc.lines : 1)) {
      a += e ? 1 : -1;
    } else if (!e && /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, s - o.from))) {
      a = be(o.text, a - o.from, false, false) + o.from;
    }
  }
  return a;
});
const Vo = n => Yu(n, false, true);
const Gu = n => Yu(n, true, false);
const Iu = (n, e) => kn(n, t => {
  let i = t.head;
  let {
    state: s
  } = n;
  let r = s.doc.lineAt(i);
  let o = s.charCategorizer(i);
  for (let l = null;;) {
    if (i == (e ? r.to : r.from)) {
      if (i == t.head && r.number != (e ? s.doc.lines : 1)) {
        i += e ? 1 : -1;
      }
      break;
    }
    let a = be(r.text, i - r.from, e) + r.from;
    let h = r.text.slice(Math.min(i, a) - r.from, Math.max(i, a) - r.from);
    let c = o(h);
    if (l != null && c != l) {
      break;
    }
    if (h != " " || i != t.head) {
      l = c;
    }
    i = a;
  }
  return i;
});
const Zu = n => Iu(n, false);
const r0 = n => Iu(n, true);
const o0 = n => kn(n, e => {
  let t = n.lineBlockAt(e.head).to;
  if (e.head < t) {
    return t;
  } else {
    return Math.min(n.state.doc.length, e.head + 1);
  }
});
const l0 = n => kn(n, e => {
  let t = n.moveToLineBoundary(e, false).head;
  if (e.head > t) {
    return t;
  } else {
    return Math.max(0, e.head - 1);
  }
});
const a0 = n => kn(n, e => {
  let t = n.moveToLineBoundary(e, true).head;
  if (e.head < t) {
    return t;
  } else {
    return Math.min(n.state.doc.length, e.head + 1);
  }
});
const h0 = ({
  state: n,
  dispatch: e
}) => {
  if (n.readOnly) {
    return false;
  }
  let t = n.changeByRange(i => ({
    changes: {
      from: i.from,
      to: i.to,
      insert: I.of(["", ""])
    },
    range: y.cursor(i.from)
  }));
  e(n.update(t, {
    scrollIntoView: true,
    userEvent: "input"
  }));
  return true;
};
const c0 = ({
  state: n,
  dispatch: e
}) => {
  if (n.readOnly) {
    return false;
  }
  let t = n.changeByRange(i => {
    if (!i.empty || i.from == 0 || i.from == n.doc.length) {
      return {
        range: i
      };
    }
    let s = i.from;
    let r = n.doc.lineAt(s);
    let o = s == r.from ? s - 1 : be(r.text, s - r.from, false) + r.from;
    let l = s == r.to ? s + 1 : be(r.text, s - r.from, true) + r.from;
    return {
      changes: {
        from: o,
        to: l,
        insert: n.doc.slice(s, l).append(n.doc.slice(o, s))
      },
      range: y.cursor(l)
    };
  });
  if (t.changes.empty) {
    return false;
  } else {
    e(n.update(t, {
      scrollIntoView: true,
      userEvent: "move.character"
    }));
    return true;
  }
};
function er(n) {
  let e = [];
  let t = -1;
  for (let i of n.selection.ranges) {
    let s = n.doc.lineAt(i.from);
    let r = n.doc.lineAt(i.to);
    if (!i.empty && i.to == r.from) {
      r = n.doc.lineAt(i.to - 1);
    }
    if (t >= s.number) {
      let o = e[e.length - 1];
      o.to = r.to;
      o.ranges.push(i);
    } else {
      e.push({
        from: s.from,
        to: r.to,
        ranges: [i]
      });
    }
    t = r.number + 1;
  }
  return e;
}
function zu(n, e, t) {
  if (n.readOnly) {
    return false;
  }
  let i = [];
  let s = [];
  for (let r of er(n)) {
    if (t ? r.to == n.doc.length : r.from == 0) {
      continue;
    }
    let o = n.doc.lineAt(t ? r.to + 1 : r.from - 1);
    let l = o.length + 1;
    if (t) {
      i.push({
        from: r.to,
        to: o.to
      }, {
        from: r.from,
        insert: o.text + n.lineBreak
      });
      for (let a of r.ranges) {
        s.push(y.range(Math.min(n.doc.length, a.anchor + l), Math.min(n.doc.length, a.head + l)));
      }
    } else {
      i.push({
        from: o.from,
        to: r.from
      }, {
        from: r.to,
        insert: n.lineBreak + o.text
      });
      for (let a of r.ranges) {
        s.push(y.range(a.anchor - l, a.head - l));
      }
    }
  }
  if (i.length) {
    e(n.update({
      changes: i,
      scrollIntoView: true,
      selection: y.create(s, n.selection.mainIndex),
      userEvent: "move.line"
    }));
    return true;
  } else {
    return false;
  }
}
const f0 = ({
  state: n,
  dispatch: e
}) => zu(n, e, false);
const u0 = ({
  state: n,
  dispatch: e
}) => zu(n, e, true);
function ju(n, e, t) {
  if (n.readOnly) {
    return false;
  }
  let i = [];
  for (let r of er(n)) {
    if (t) {
      i.push({
        from: r.from,
        insert: n.doc.slice(r.from, r.to) + n.lineBreak
      });
    } else {
      i.push({
        from: r.to,
        insert: n.lineBreak + n.doc.slice(r.from, r.to)
      });
    }
  }
  let s = n.changes(i);
  e(n.update({
    changes: s,
    selection: n.selection.map(s, t ? 1 : -1),
    scrollIntoView: true,
    userEvent: "input.copyline"
  }));
  return true;
}
const d0 = ({
  state: n,
  dispatch: e
}) => ju(n, e, false);
const m0 = ({
  state: n,
  dispatch: e
}) => ju(n, e, true);
const p0 = n => {
  if (n.state.readOnly) {
    return false;
  }
  let {
    state: e
  } = n;
  let t = e.changes(er(e).map(({
    from: s,
    to: r
  }) => {
    if (s > 0) {
      s--;
    } else if (r < e.doc.length) {
      r++;
    }
    return {
      from: s,
      to: r
    };
  }));
  let i = Ai(e.selection, s => {
    let r;
    if (n.lineWrapping) {
      let o = n.lineBlockAt(s.head);
      let l = n.coordsAtPos(s.head, s.assoc || 1);
      if (l) {
        r = o.bottom + n.documentTop - l.bottom + n.defaultLineHeight / 2;
      }
    }
    return n.moveVertically(s, true, r);
  }).map(t);
  n.dispatch({
    changes: t,
    selection: i,
    scrollIntoView: true,
    userEvent: "delete.line"
  });
  return true;
};
function O0(n, e) {
  if (/\(\)|\[\]|\{\}/.test(n.sliceDoc(e - 1, e + 1))) {
    return {
      from: e,
      to: e
    };
  }
  let t = oe(n).resolveInner(e);
  let i = t.childBefore(e);
  let s = t.childAfter(e);
  let r;
  if (i && s && i.to <= e && s.from >= e && (r = i.type.prop(N.closedBy)) && r.indexOf(s.name) > -1 && n.doc.lineAt(i.to).from == n.doc.lineAt(s.from).from && !/\S/.test(n.sliceDoc(i.to, s.from))) {
    return {
      from: i.to,
      to: s.from
    };
  } else {
    return null;
  }
}
const gh = _u(false);
const g0 = _u(true);
function _u(n) {
  return ({
    state: e,
    dispatch: t
  }) => {
    if (e.readOnly) {
      return false;
    }
    let i = e.changeByRange(s => {
      let {
        from: r,
        to: o
      } = s;
      let l = e.doc.lineAt(r);
      let a = !n && r == o && O0(e, r);
      if (n) {
        r = o = (o <= l.to ? l : e.doc.lineAt(o)).to;
      }
      let h = new Fs(e, {
        simulateBreak: r,
        simulateDoubleBreak: !!a
      });
      let c = ml(h, r);
      for (c == null && (c = Ei(/^\s*/.exec(e.doc.lineAt(r).text)[0], e.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]);) {
        o++;
      }
      if (a) {
        ({
          from: r,
          to: o
        } = a);
      } else if (r > l.from && r < l.from + 100 && !/\S/.test(l.text.slice(0, r))) {
        r = l.from;
      }
      let f = ["", fn(e, c)];
      if (a) {
        f.push(fn(e, h.lineIndent(l.from, -1)));
      }
      return {
        changes: {
          from: r,
          to: o,
          insert: I.of(f)
        },
        range: y.cursor(r + 1 + f[1].length)
      };
    });
    t(e.update(i, {
      scrollIntoView: true,
      userEvent: "input"
    }));
    return true;
  };
}
function xl(n, e) {
  let t = -1;
  return n.changeByRange(i => {
    let s = [];
    for (let o = i.from; o <= i.to;) {
      let l = n.doc.lineAt(o);
      if (l.number > t && (i.empty || i.to > l.from)) {
        e(l, s, i);
        t = l.number;
      }
      o = l.to + 1;
    }
    let r = n.changes(s);
    return {
      changes: s,
      range: y.range(r.mapPos(i.anchor, 1), r.mapPos(i.head, 1))
    };
  });
}
const Fu = ({
  state: n,
  dispatch: e
}) => {
  if (n.readOnly) {
    return false;
  }
  let t = Object.create(null);
  let i = new Fs(n, {
    overrideIndentation: r => {
      let o = t[r];
      return o ?? -1;
    }
  });
  let s = xl(n, (r, o, l) => {
    let a = ml(i, r.from);
    if (a == null) {
      return;
    }
    if (!/\S/.test(r.text)) {
      a = 0;
    }
    let h = /^\s*/.exec(r.text)[0];
    let c = fn(n, a);
    if (h != c || l.from < r.from + h.length) {
      t[r.from] = a;
      o.push({
        from: r.from,
        to: r.from + h.length,
        insert: c
      });
    }
  });
  if (!s.changes.empty) {
    e(n.update(s, {
      userEvent: "indent"
    }));
  }
  return true;
};
const Ql = ({
  state: n,
  dispatch: e
}) => n.readOnly ? false : (e(n.update(xl(n, (t, i) => {
  i.push({
    from: t.from,
    insert: n.facet(xn)
  });
}), {
  userEvent: "input.indent"
})), true);
const Sl = ({
  state: n,
  dispatch: e
}) => n.readOnly ? false : (e(n.update(xl(n, (t, i) => {
  let s = /^\s*/.exec(t.text)[0];
  if (!s) {
    return;
  }
  let r = Ei(s, n.tabSize);
  let o = 0;
  let l = fn(n, Math.max(0, r - vs(n)));
  while (o < s.length && o < l.length && s.charCodeAt(o) == l.charCodeAt(o)) {
    o++;
  }
  i.push({
    from: t.from + o,
    to: t.from + s.length,
    insert: l.slice(o)
  });
}), {
  userEvent: "delete.dedent"
})), true);
const b0 = n => {
  n.setTabFocusMode();
  return true;
};
const y0 = [{
  key: "Ctrl-b",
  run: vu,
  shift: Mu,
  preventDefault: true
}, {
  key: "Ctrl-f",
  run: Cu,
  shift: Ru
}, {
  key: "Ctrl-p",
  run: $u,
  shift: Du
}, {
  key: "Ctrl-n",
  run: Xu,
  shift: Lu
}, {
  key: "Ctrl-a",
  run: Lb,
  shift: Hb
}, {
  key: "Ctrl-e",
  run: Nb,
  shift: Kb
}, {
  key: "Ctrl-d",
  run: Gu
}, {
  key: "Ctrl-h",
  run: Vo
}, {
  key: "Ctrl-k",
  run: o0
}, {
  key: "Ctrl-Alt-h",
  run: Zu
}, {
  key: "Ctrl-o",
  run: h0
}, {
  key: "Ctrl-t",
  run: c0
}, {
  key: "Ctrl-v",
  run: Ro
}];
const x0 = [{
  key: "ArrowLeft",
  run: vu,
  shift: Mu,
  preventDefault: true
}, {
  key: "Mod-ArrowLeft",
  mac: "Alt-ArrowLeft",
  run: Xb,
  shift: Gb,
  preventDefault: true
}, {
  mac: "Cmd-ArrowLeft",
  run: Wb,
  shift: Fb,
  preventDefault: true
}, {
  key: "ArrowRight",
  run: Cu,
  shift: Ru,
  preventDefault: true
}, {
  key: "Mod-ArrowRight",
  mac: "Alt-ArrowRight",
  run: Eb,
  shift: Ib,
  preventDefault: true
}, {
  mac: "Cmd-ArrowRight",
  run: Db,
  shift: Ub,
  preventDefault: true
}, {
  key: "ArrowUp",
  run: $u,
  shift: Du,
  preventDefault: true
}, {
  mac: "Cmd-ArrowUp",
  run: dh,
  shift: ph
}, {
  mac: "Ctrl-ArrowUp",
  run: ch,
  shift: fh
}, {
  key: "ArrowDown",
  run: Xu,
  shift: Lu,
  preventDefault: true
}, {
  mac: "Cmd-ArrowDown",
  run: mh,
  shift: Oh
}, {
  mac: "Ctrl-ArrowDown",
  run: Ro,
  shift: uh
}, {
  key: "PageUp",
  run: ch,
  shift: fh
}, {
  key: "PageDown",
  run: Ro,
  shift: uh
}, {
  key: "Home",
  run: Vb,
  shift: _b,
  preventDefault: true
}, {
  key: "Mod-Home",
  run: dh,
  shift: ph
}, {
  key: "End",
  run: Rb,
  shift: jb,
  preventDefault: true
}, {
  key: "Mod-End",
  run: mh,
  shift: Oh
}, {
  key: "Enter",
  run: gh,
  shift: gh
}, {
  key: "Mod-a",
  run: Jb
}, {
  key: "Backspace",
  run: Vo,
  shift: Vo,
  preventDefault: true
}, {
  key: "Delete",
  run: Gu,
  preventDefault: true
}, {
  key: "Mod-Backspace",
  mac: "Alt-Backspace",
  run: Zu,
  preventDefault: true
}, {
  key: "Mod-Delete",
  mac: "Alt-Delete",
  run: r0,
  preventDefault: true
}, {
  mac: "Mod-Backspace",
  run: l0,
  preventDefault: true
}, {
  mac: "Mod-Delete",
  run: a0,
  preventDefault: true
}].concat(y0.map(n => ({
  mac: n.key,
  run: n.run,
  shift: n.shift
})));
const Q0 = [{
  key: "Alt-ArrowLeft",
  mac: "Ctrl-ArrowLeft",
  run: Pb,
  shift: Zb
}, {
  key: "Alt-ArrowRight",
  mac: "Ctrl-ArrowRight",
  run: Mb,
  shift: zb
}, {
  key: "Alt-ArrowUp",
  run: f0
}, {
  key: "Shift-Alt-ArrowUp",
  run: d0
}, {
  key: "Alt-ArrowDown",
  run: u0
}, {
  key: "Shift-Alt-ArrowDown",
  run: m0
}, {
  key: "Mod-Alt-ArrowUp",
  run: i0
}, {
  key: "Mod-Alt-ArrowDown",
  run: n0
}, {
  key: "Escape",
  run: s0
}, {
  key: "Mod-Enter",
  run: g0
}, {
  key: "Alt-l",
  mac: "Ctrl-l",
  run: e0
}, {
  key: "Mod-i",
  run: t0,
  preventDefault: true
}, {
  key: "Mod-[",
  run: Sl
}, {
  key: "Mod-]",
  run: Ql
}, {
  key: "Mod-Alt-\\",
  run: Fu
}, {
  key: "Shift-Mod-k",
  run: p0
}, {
  key: "Shift-Mod-\\",
  run: Yb
}, {
  key: "Mod-/",
  run: cb
}, {
  key: "Alt-A",
  run: ub
}, {
  key: "Ctrl-m",
  mac: "Shift-Alt-m",
  run: b0
}].concat(x0);
const S0 = {
  key: "Tab",
  run: Ql,
  shift: Sl
};
const bh = typeof String.prototype.normalize == "function" ? n => n.normalize("NFKD") : n => n;
class $i {
  constructor(e, t, i = 0, s = e.length, r, o) {
    this.test = o;
    this.value = {
      from: 0,
      to: 0,
      precise: false
    };
    this.done = false;
    this.matches = [];
    this.buffer = "";
    this.bufferPos = 0;
    this.iter = e.iterRange(i, s);
    this.bufferStart = i;
    this.normalize = r ? l => r(bh(l)) : bh;
    this.query = this.normalize(t);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      this.bufferStart += this.buffer.length;
      this.iter.next();
      if (this.iter.done) {
        return -1;
      }
      this.bufferPos = 0;
      this.buffer = this.iter.value;
    }
    return Ee(this.buffer, this.bufferPos);
  }
  next() {
    while (this.matches.length) {
      this.matches.pop();
    }
    return this.nextOverlapping();
  }
  nextOverlapping() {
    while (true) {
      let e = this.peek();
      if (e < 0) {
        this.done = true;
        return this;
      }
      let t = Zo(e);
      let i = this.bufferStart + this.bufferPos;
      this.bufferPos += at(e);
      let s = this.normalize(t);
      if (s.length) {
        for (let r = 0, o = i, l = true;; r++) {
          let a = s.charCodeAt(r);
          let h = this.match(a, o, l, this.bufferPos + this.bufferStart, r == s.length - 1);
          if (h) {
            this.value = h;
            return this;
          }
          if (r == s.length - 1) {
            break;
          }
          if (l && r < t.length && t.charCodeAt(r) == a) {
            o++;
          } else {
            l = false;
          }
        }
      }
    }
  }
  match(e, t, i, s, r) {
    let o = null;
    for (let l = 0; l < this.matches.length;) {
      let a = this.matches[l];
      let h = false;
      if (this.query.charCodeAt(a.index) == e) {
        if (a.index == this.query.length - 1) {
          o = {
            from: a.from,
            to: s,
            precise: r && a.precise
          };
        } else {
          a.index++;
          h = true;
        }
      }
      if (h) {
        l++;
      } else {
        this.matches.splice(l, 1);
      }
    }
    if (this.query.charCodeAt(0) == e) {
      if (this.query.length == 1) {
        o = {
          from: t,
          to: s,
          precise: i && r
        };
      } else {
        this.matches.push({
          from: t,
          index: 1,
          precise: i
        });
      }
    }
    if (o && this.test && !this.test(o.from, o.to, this.buffer, this.bufferStart)) {
      o = null;
    }
    return o;
  }
}
if (typeof Symbol !== "undefined") {
  $i.prototype[Symbol.iterator] = function () {
    return this;
  };
}
const Uu = {
  from: -1,
  to: -1,
  match: /.*/.exec(""),
  precise: true
};
const kl = "gm" + (/x/.unicode == null ? "" : "u");
class Hu {
  constructor(e, t, i, s = 0, r = e.length) {
    this.text = e;
    this.to = r;
    this.curLine = "";
    this.done = false;
    this.value = Uu;
    if (/\\[sWDnr]|\n|\r|\[\^/.test(t)) {
      return new Ku(e, t, i, s, r);
    }
    this.re = new RegExp(t, kl + (i != null && i.ignoreCase ? "i" : ""));
    this.test = i == null ? undefined : i.test;
    this.iter = e.iter();
    let o = e.lineAt(s);
    this.curLineStart = o.from;
    this.matchPos = $s(e, s);
    this.getLine(this.curLineStart);
  }
  getLine(e) {
    this.iter.next(e);
    if (this.iter.lineBreak) {
      this.curLine = "";
    } else {
      this.curLine = this.iter.value;
      if (this.curLineStart + this.curLine.length > this.to) {
        this.curLine = this.curLine.slice(0, this.to - this.curLineStart);
      }
      this.iter.next();
    }
  }
  nextLine() {
    this.curLineStart = this.curLineStart + this.curLine.length + 1;
    if (this.curLineStart > this.to) {
      this.curLine = "";
    } else {
      this.getLine(0);
    }
  }
  next() {
    for (let e = this.matchPos - this.curLineStart;;) {
      this.re.lastIndex = e;
      let t = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (t) {
        let i = this.curLineStart + t.index;
        let s = i + t[0].length;
        this.matchPos = $s(this.text, s + (i == s ? 1 : 0));
        if (i == this.curLineStart + this.curLine.length) {
          this.nextLine();
        }
        if ((i < s || i > this.value.to) && (!this.test || this.test(i, s, t))) {
          this.value = {
            from: i,
            to: s,
            precise: true,
            match: t
          };
          return this;
        }
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to) {
        this.nextLine();
        e = 0;
      } else {
        this.done = true;
        return this;
      }
    }
  }
}
const Xr = new WeakMap();
class xi {
  constructor(e, t) {
    this.from = e;
    this.text = t;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, t, i) {
    let s = Xr.get(e);
    if (!s || s.from >= i || s.to <= t) {
      let l = new xi(t, e.sliceString(t, i));
      Xr.set(e, l);
      return l;
    }
    if (s.from == t && s.to == i) {
      return s;
    }
    let {
      text: r,
      from: o
    } = s;
    if (o > t) {
      r = e.sliceString(t, o) + r;
      o = t;
    }
    if (s.to < i) {
      r += e.sliceString(s.to, i);
    }
    Xr.set(e, new xi(o, r));
    return new xi(t, r.slice(t - o, i - o));
  }
}
class Ku {
  constructor(e, t, i, s, r) {
    this.text = e;
    this.to = r;
    this.done = false;
    this.value = Uu;
    this.matchPos = $s(e, s);
    this.re = new RegExp(t, kl + (i != null && i.ignoreCase ? "i" : ""));
    this.test = i == null ? undefined : i.test;
    this.flat = xi.get(e, s, this.chunkEnd(s + 5000));
  }
  chunkEnd(e) {
    if (e >= this.to) {
      return this.to;
    } else {
      return this.text.lineAt(e).to;
    }
  }
  next() {
    while (true) {
      let e = this.re.lastIndex = this.matchPos - this.flat.from;
      let t = this.re.exec(this.flat.text);
      if (t && !t[0] && t.index == e) {
        this.re.lastIndex = e + 1;
        t = this.re.exec(this.flat.text);
      }
      if (t) {
        let i = this.flat.from + t.index;
        let s = i + t[0].length;
        if ((this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) && (!this.test || this.test(i, s, t))) {
          this.value = {
            from: i,
            to: s,
            precise: true,
            match: t
          };
          this.matchPos = $s(this.text, s + (i == s ? 1 : 0));
          return this;
        }
      }
      if (this.flat.to == this.to) {
        this.done = true;
        return this;
      }
      this.flat = xi.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
if (typeof Symbol !== "undefined") {
  Hu.prototype[Symbol.iterator] = Ku.prototype[Symbol.iterator] = function () {
    return this;
  };
}
function k0(n) {
  try {
    new RegExp(n, kl);
    return true;
  } catch {
    return false;
  }
}
function $s(n, e) {
  if (e >= n.length) {
    return e;
  }
  let t = n.lineAt(e);
  let i;
  while (e < t.to && (i = t.text.charCodeAt(e - t.from)) >= 56320 && i < 57344) {
    e++;
  }
  return e;
}
const w0 = n => {
  let {
    state: e
  } = n;
  let t = String(e.doc.lineAt(n.state.selection.main.head).number);
  let {
    close: i,
    result: s
  } = zO(n, {
    label: e.phrase("Go to line"),
    input: {
      type: "text",
      name: "line",
      value: t
    },
    focus: true,
    submitLabel: e.phrase("go")
  });
  s.then(r => {
    let o = r && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(r.elements.line.value);
    if (!o) {
      n.dispatch({
        effects: i
      });
      return;
    }
    let l = e.doc.lineAt(e.selection.main.head);
    let [, a, h, c, f] = o;
    let u = c ? +c.slice(1) : 0;
    let d = h ? +h : l.number;
    if (h && f) {
      let O = d / 100;
      if (a) {
        O = O * (a == "-" ? -1 : 1) + l.number / e.doc.lines;
      }
      d = Math.round(e.doc.lines * O);
    } else if (h && a) {
      d = d * (a == "-" ? -1 : 1) + l.number;
    }
    let m = e.doc.line(Math.max(1, Math.min(e.doc.lines, d)));
    let p = y.cursor(m.from + Math.max(0, Math.min(u, m.length)));
    n.dispatch({
      effects: [i, v.scrollIntoView(p.from, {
        y: "center"
      })],
      selection: p
    });
  });
  return true;
};
const v0 = {
  highlightWordAroundCursor: false,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: false
};
const C0 = T.define({
  combine(n) {
    return Je(n, v0, {
      highlightWordAroundCursor: (e, t) => e || t,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function q0(n) {
  return [A0, E0];
}
const T0 = X.mark({
  class: "cm-selectionMatch"
});
const $0 = X.mark({
  class: "cm-selectionMatch cm-selectionMatch-main"
});
function yh(n, e, t, i) {
  return (t == 0 || n(e.sliceDoc(t - 1, t)) != ee.Word) && (i == e.doc.length || n(e.sliceDoc(i, i + 1)) != ee.Word);
}
function X0(n, e, t, i) {
  return n(e.sliceDoc(t, t + 1)) == ee.Word && n(e.sliceDoc(i - 1, i)) == ee.Word;
}
const E0 = K.fromClass(class {
  constructor(n) {
    this.decorations = this.getDeco(n);
  }
  update(n) {
    if (n.selectionSet || n.docChanged || n.viewportChanged) {
      this.decorations = this.getDeco(n.view);
    }
  }
  getDeco(n) {
    let e = n.state.facet(C0);
    let {
      state: t
    } = n;
    let i = t.selection;
    if (i.ranges.length > 1) {
      return X.none;
    }
    let s = i.main;
    let r;
    let o = null;
    if (s.empty) {
      if (!e.highlightWordAroundCursor) {
        return X.none;
      }
      let a = t.wordAt(s.head);
      if (!a) {
        return X.none;
      }
      o = t.charCategorizer(s.head);
      r = t.sliceDoc(a.from, a.to);
    } else {
      let a = s.to - s.from;
      if (a < e.minSelectionLength || a > 200) {
        return X.none;
      }
      if (e.wholeWords) {
        r = t.sliceDoc(s.from, s.to);
        o = t.charCategorizer(s.head);
        if (!yh(o, t, s.from, s.to) || !X0(o, t, s.from, s.to)) {
          return X.none;
        }
      } else {
        r = t.sliceDoc(s.from, s.to);
        if (!r) {
          return X.none;
        }
      }
    }
    let l = [];
    for (let a of n.visibleRanges) {
      let h = new $i(t.doc, r, a.from, a.to);
      while (!h.next().done) {
        let {
          from: c,
          to: f
        } = h.value;
        if ((!o || yh(o, t, c, f)) && (s.empty && c <= s.from && f >= s.to ? l.push($0.range(c, f)) : (c >= s.to || f <= s.from) && l.push(T0.range(c, f)), l.length > e.maxMatches)) {
          return X.none;
        }
      }
    }
    return X.set(l);
  }
}, {
  decorations: n => n.decorations
});
const A0 = v.baseTheme({
  ".cm-selectionMatch": {
    backgroundColor: "#99ff7780"
  },
  ".cm-searchMatch .cm-selectionMatch": {
    backgroundColor: "transparent"
  }
});
const P0 = ({
  state: n,
  dispatch: e
}) => {
  let {
    selection: t
  } = n;
  let i = y.create(t.ranges.map(s => n.wordAt(s.head) || y.cursor(s.head)), t.mainIndex);
  if (i.eq(t)) {
    return false;
  } else {
    e(n.update({
      selection: i
    }));
    return true;
  }
};
function M0(n, e) {
  let {
    main: t,
    ranges: i
  } = n.selection;
  let s = n.wordAt(t.head);
  let r = s && s.from == t.from && s.to == t.to;
  for (let o = false, l = new $i(n.doc, e, i[i.length - 1].to);;) {
    l.next();
    if (l.done) {
      if (o) {
        return null;
      }
      l = new $i(n.doc, e, 0, Math.max(0, i[i.length - 1].from - 1));
      o = true;
    } else {
      if (o && i.some(a => a.from == l.value.from)) {
        continue;
      }
      if (r) {
        let a = n.wordAt(l.value.from);
        if (!a || a.from != l.value.from || a.to != l.value.to) {
          continue;
        }
      }
      return l.value;
    }
  }
}
const R0 = ({
  state: n,
  dispatch: e
}) => {
  let {
    ranges: t
  } = n.selection;
  if (t.some(r => r.from === r.to)) {
    return P0({
      state: n,
      dispatch: e
    });
  }
  let i = n.sliceDoc(t[0].from, t[0].to);
  if (n.selection.ranges.some(r => n.sliceDoc(r.from, r.to) != i)) {
    return false;
  }
  let s = M0(n, i);
  if (s) {
    e(n.update({
      selection: n.selection.addRange(y.range(s.from, s.to), false),
      effects: v.scrollIntoView(s.to)
    }));
    return true;
  } else {
    return false;
  }
};
const Pi = T.define({
  combine(n) {
    return Je(n, {
      top: false,
      caseSensitive: false,
      literal: false,
      regexp: false,
      wholeWord: false,
      createPanel: e => new F0(e),
      scrollToMatch: e => v.scrollIntoView(e)
    });
  }
});
class Ju {
  constructor(e) {
    this.search = e.search;
    this.caseSensitive = !!e.caseSensitive;
    this.literal = !!e.literal;
    this.regexp = !!e.regexp;
    this.replace = e.replace || "";
    this.valid = !!this.search && (!this.regexp || k0(this.search));
    this.unquoted = this.unquote(this.search);
    this.wholeWord = !!e.wholeWord;
    this.test = e.test;
  }
  unquote(e) {
    if (this.literal) {
      return e;
    } else {
      return e.replace(/\\([nrt\\])/g, (t, i) => i == "n" ? `
` : i == "r" ? "\r" : i == "t" ? "\t" : "\\");
    }
  }
  eq(e) {
    return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord && this.test == e.test;
  }
  create() {
    if (this.regexp) {
      return new B0(this);
    } else {
      return new D0(this);
    }
  }
  getCursor(e, t = 0, i) {
    let s = e.doc ? e : Y.create({
      doc: e
    });
    if (i == null) {
      i = s.doc.length;
    }
    if (this.regexp) {
      return fi(this, s, t, i);
    } else {
      return ci(this, s, t, i);
    }
  }
}
class ed {
  constructor(e) {
    this.spec = e;
  }
}
function V0(n, e, t) {
  return (i, s, r, o) => {
    if (t && !t(i, s, r, o)) {
      return false;
    }
    let l = i >= o && s <= o + r.length ? r.slice(i - o, s - o) : e.doc.sliceString(i, s);
    return n(l, e, i, s);
  };
}
function ci(n, e, t, i) {
  let s;
  if (n.wholeWord) {
    s = W0(e.doc, e.charCategorizer(e.selection.main.head));
  }
  if (n.test) {
    s = V0(n.test, e, s);
  }
  return new $i(e.doc, n.unquoted, t, i, n.caseSensitive ? undefined : r => r.toLowerCase(), s);
}
function W0(n, e) {
  return (t, i, s, r) => {
    if (r > t || r + s.length < i) {
      r = Math.max(0, t - 2);
      s = n.sliceString(r, Math.min(n.length, i + 2));
    }
    return (e(Xs(s, t - r)) != ee.Word || e(Es(s, t - r)) != ee.Word) && (e(Es(s, i - r)) != ee.Word || e(Xs(s, i - r)) != ee.Word);
  };
}
class D0 extends ed {
  constructor(e) {
    super(e);
  }
  nextMatch(e, t, i) {
    let s = ci(this.spec, e, i, e.doc.length).nextOverlapping();
    if (s.done) {
      let r = Math.min(e.doc.length, t + this.spec.unquoted.length);
      s = ci(this.spec, e, 0, r).nextOverlapping();
    }
    if (s.done || s.value.from == t && s.value.to == i) {
      return null;
    } else {
      return s.value;
    }
  }
  prevMatchInRange(e, t, i) {
    for (let s = i;;) {
      let r = Math.max(t, s - 10000 - this.spec.unquoted.length);
      let o = ci(this.spec, e, r, s);
      let l = null;
      while (!o.nextOverlapping().done) {
        l = o.value;
      }
      if (l) {
        return l;
      }
      if (r == t) {
        return null;
      }
      s -= 10000;
    }
  }
  prevMatch(e, t, i) {
    let s = this.prevMatchInRange(e, 0, t);
    s ||= this.prevMatchInRange(e, Math.max(0, i - this.spec.unquoted.length), e.doc.length);
    if (s && (s.from != t || s.to != i)) {
      return s;
    } else {
      return null;
    }
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(e, t) {
    let i = ci(this.spec, e, 0, e.doc.length);
    let s = [];
    while (!i.next().done) {
      if (s.length >= t) {
        return null;
      }
      s.push(i.value);
    }
    return s;
  }
  highlight(e, t, i, s) {
    let r = ci(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(i + this.spec.unquoted.length, e.doc.length));
    while (!r.next().done) {
      s(r.value.from, r.value.to);
    }
  }
}
function L0(n, e, t) {
  return (i, s, r) => (!t || t(i, s, r)) && n(r[0], e, i, s);
}
function fi(n, e, t, i) {
  let s;
  if (n.wholeWord) {
    s = N0(e.charCategorizer(e.selection.main.head));
  }
  if (n.test) {
    s = L0(n.test, e, s);
  }
  return new Hu(e.doc, n.search, {
    ignoreCase: !n.caseSensitive,
    test: s
  }, t, i);
}
function Xs(n, e) {
  return n.slice(be(n, e, false), e);
}
function Es(n, e) {
  return n.slice(e, be(n, e));
}
function N0(n) {
  return (e, t, i) => !i[0].length || (n(Xs(i.input, i.index)) != ee.Word || n(Es(i.input, i.index)) != ee.Word) && (n(Es(i.input, i.index + i[0].length)) != ee.Word || n(Xs(i.input, i.index + i[0].length)) != ee.Word);
}
class B0 extends ed {
  nextMatch(e, t, i) {
    let s = fi(this.spec, e, i, e.doc.length).next();
    if (s.done) {
      s = fi(this.spec, e, 0, t).next();
    }
    if (s.done) {
      return null;
    } else {
      return s.value;
    }
  }
  prevMatchInRange(e, t, i) {
    for (let s = 1;; s++) {
      let r = Math.max(t, i - s * 10000);
      let o = fi(this.spec, e, r, i);
      let l = null;
      while (!o.next().done) {
        l = o.value;
      }
      if (l && (r == t || l.from > r + 10)) {
        return l;
      }
      if (r == t) {
        return null;
      }
    }
  }
  prevMatch(e, t, i) {
    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, i, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, (t, i) => {
      if (i == "&") {
        return e.match[0];
      }
      if (i == "$") {
        return "$";
      }
      for (let s = i.length; s > 0; s--) {
        let r = +i.slice(0, s);
        if (r > 0 && r < e.match.length) {
          return e.match[r] + i.slice(s);
        }
      }
      return t;
    });
  }
  matchAll(e, t) {
    let i = fi(this.spec, e, 0, e.doc.length);
    let s = [];
    while (!i.next().done) {
      if (s.length >= t) {
        return null;
      }
      s.push(i.value);
    }
    return s;
  }
  highlight(e, t, i, s) {
    let r = fi(this.spec, e, Math.max(0, t - 250), Math.min(i + 250, e.doc.length));
    while (!r.next().done) {
      s(r.value.from, r.value.to);
    }
  }
}
const un = M.define();
const wl = M.define();
const Pt = le.define({
  create(n) {
    return new Er(Wo(n).create(), null);
  },
  update(n, e) {
    for (let t of e.effects) {
      if (t.is(un)) {
        n = new Er(t.value.create(), n.panel);
      } else if (t.is(wl)) {
        n = new Er(n.query, t.value ? vl : null);
      }
    }
    return n;
  },
  provide: n => an.from(n, e => e.panel)
});
class Er {
  constructor(e, t) {
    this.query = e;
    this.panel = t;
  }
}
const Y0 = X.mark({
  class: "cm-searchMatch"
});
const G0 = X.mark({
  class: "cm-searchMatch cm-searchMatch-selected"
});
const I0 = K.fromClass(class {
  constructor(n) {
    this.view = n;
    this.decorations = this.highlight(n.state.field(Pt));
  }
  update(n) {
    let e = n.state.field(Pt);
    if (e != n.startState.field(Pt) || n.docChanged || n.selectionSet || n.viewportChanged) {
      this.decorations = this.highlight(e);
    }
  }
  highlight({
    query: n,
    panel: e
  }) {
    if (!e || !n.spec.valid) {
      return X.none;
    }
    let {
      view: t
    } = this;
    let i = new Qt();
    for (let s = 0, r = t.visibleRanges, o = r.length; s < o; s++) {
      let {
        from: l,
        to: a
      } = r[s];
      while (s < o - 1 && a > r[s + 1].from - 500) {
        a = r[++s].to;
      }
      n.highlight(t.state, l, a, (h, c) => {
        let f = t.state.selection.ranges.some(u => u.from == h && u.to == c);
        i.add(h, c, f ? G0 : Y0);
      });
    }
    return i.finish();
  }
}, {
  decorations: n => n.decorations
});
function wn(n) {
  return e => {
    let t = e.state.field(Pt, false);
    if (t && t.query.spec.valid) {
      return n(e, t);
    } else {
      return Cl(e);
    }
  };
}
const As = wn((n, {
  query: e
}) => {
  let {
    to: t
  } = n.state.selection.main;
  let i = e.nextMatch(n.state, t, t);
  if (!i) {
    return false;
  }
  let s = y.single(i.from, i.to);
  let r = n.state.facet(Pi);
  n.dispatch({
    selection: s,
    effects: [ql(n, i), r.scrollToMatch(s.main, n)],
    userEvent: "select.search"
  });
  id(n);
  return true;
});
const Ps = wn((n, {
  query: e
}) => {
  let {
    state: t
  } = n;
  let {
    from: i
  } = t.selection.main;
  let s = e.prevMatch(t, i, i);
  if (!s) {
    return false;
  }
  let r = y.single(s.from, s.to);
  let o = n.state.facet(Pi);
  n.dispatch({
    selection: r,
    effects: [ql(n, s), o.scrollToMatch(r.main, n)],
    userEvent: "select.search"
  });
  id(n);
  return true;
});
const Z0 = wn((n, {
  query: e
}) => {
  let t = e.matchAll(n.state, 1000);
  if (!t || !t.length) {
    return false;
  } else {
    n.dispatch({
      selection: y.create(t.map(i => y.range(i.from, i.to))),
      userEvent: "select.search.matches"
    });
    return true;
  }
});
const z0 = ({
  state: n,
  dispatch: e
}) => {
  let t = n.selection;
  if (t.ranges.length > 1 || t.main.empty) {
    return false;
  }
  let {
    from: i,
    to: s
  } = t.main;
  let r = [];
  let o = 0;
  for (let l = new $i(n.doc, n.sliceDoc(i, s)); !l.next().done;) {
    if (r.length > 1000) {
      return false;
    }
    if (l.value.from == i) {
      o = r.length;
    }
    r.push(y.range(l.value.from, l.value.to));
  }
  e(n.update({
    selection: y.create(r, o),
    userEvent: "select.search.matches"
  }));
  return true;
};
const xh = wn((n, {
  query: e
}) => {
  let {
    state: t
  } = n;
  let {
    from: i,
    to: s
  } = t.selection.main;
  if (t.readOnly) {
    return false;
  }
  let r = e.nextMatch(t, i, i);
  if (!r) {
    return false;
  }
  let o = r;
  let l = [];
  let a;
  let h;
  let c = [];
  if (o.precise) {
    if (o.from == i && o.to == s) {
      h = t.toText(e.getReplacement(o));
      l.push({
        from: o.from,
        to: o.to,
        insert: h
      });
      c.push(v.announce.of(t.phrase("replaced match on line $", t.doc.lineAt(i).number) + "."));
    }
  } else {
    o = e.nextMatch(t, o.from, o.to);
  }
  let f = n.state.changes(l);
  if (o) {
    a = y.single(o.from, o.to).map(f);
    c.push(ql(n, o));
    c.push(t.facet(Pi).scrollToMatch(a.main, n));
  }
  n.dispatch({
    changes: f,
    selection: a,
    effects: c,
    userEvent: "input.replace"
  });
  return true;
});
const j0 = wn((n, {
  query: e
}) => {
  if (n.state.readOnly) {
    return false;
  }
  let t = [];
  for (let s of e.matchAll(n.state, 1000000000)) {
    let {
      from: r,
      to: o,
      precise: l
    } = s;
    if (l) {
      t.push({
        from: r,
        to: o,
        insert: e.getReplacement(s)
      });
    }
  }
  if (!t.length) {
    return false;
  }
  let i = n.state.phrase("replaced $ matches", t.length) + ".";
  n.dispatch({
    changes: t,
    effects: v.announce.of(i),
    userEvent: "input.replace.all"
  });
  return true;
});
function vl(n) {
  return n.state.facet(Pi).createPanel(n);
}
function Wo(n, e) {
  let l = n.selection.main;
  let a = l.empty || l.to > l.from + 100 ? "" : n.sliceDoc(l.from, l.to);
  if (e && !a) {
    return e;
  }
  let h = n.facet(Pi);
  return new Ju({
    search: (e == null ? undefined : e.literal) ?? h.literal ? a : a.replace(/\n/g, "\\n"),
    caseSensitive: (e == null ? undefined : e.caseSensitive) ?? h.caseSensitive,
    literal: (e == null ? undefined : e.literal) ?? h.literal,
    regexp: (e == null ? undefined : e.regexp) ?? h.regexp,
    wholeWord: (e == null ? undefined : e.wholeWord) ?? h.wholeWord
  });
}
function td(n) {
  let e = hl(n, vl);
  return e && e.dom.querySelector("[main-field]");
}
function id(n) {
  let e = td(n);
  if (e && e == n.root.activeElement) {
    e.select();
  }
}
const Cl = n => {
  let e = n.state.field(Pt, false);
  if (e && e.panel) {
    let t = td(n);
    if (t && t != n.root.activeElement) {
      let i = Wo(n.state, e.query.spec);
      if (i.valid) {
        n.dispatch({
          effects: un.of(i)
        });
      }
      t.focus();
      t.select();
    }
  } else {
    n.dispatch({
      effects: [wl.of(true), e ? un.of(Wo(n.state, e.query.spec)) : M.appendConfig.of(H0)]
    });
  }
  return true;
};
const nd = n => {
  let e = n.state.field(Pt, false);
  if (!e || !e.panel) {
    return false;
  }
  let t = hl(n, vl);
  if (t && t.dom.contains(n.root.activeElement)) {
    n.focus();
  }
  n.dispatch({
    effects: wl.of(false)
  });
  return true;
};
const _0 = [{
  key: "Mod-f",
  run: Cl,
  scope: "editor search-panel"
}, {
  key: "F3",
  run: As,
  shift: Ps,
  scope: "editor search-panel",
  preventDefault: true
}, {
  key: "Mod-g",
  run: As,
  shift: Ps,
  scope: "editor search-panel",
  preventDefault: true
}, {
  key: "Escape",
  run: nd,
  scope: "editor search-panel"
}, {
  key: "Mod-Shift-l",
  run: z0
}, {
  key: "Mod-Alt-g",
  run: w0
}, {
  key: "Mod-d",
  run: R0,
  preventDefault: true
}];
class F0 {
  constructor(e) {
    this.view = e;
    let t = this.query = e.state.field(Pt).query.spec;
    this.commit = this.commit.bind(this);
    this.searchField = j("input", {
      value: t.search,
      placeholder: Le(e, "Find"),
      "aria-label": Le(e, "Find"),
      class: "cm-textfield",
      name: "search",
      form: "",
      "main-field": "true",
      onchange: this.commit,
      onkeyup: this.commit
    });
    this.replaceField = j("input", {
      value: t.replace,
      placeholder: Le(e, "Replace"),
      "aria-label": Le(e, "Replace"),
      class: "cm-textfield",
      name: "replace",
      form: "",
      onchange: this.commit,
      onkeyup: this.commit
    });
    this.caseField = j("input", {
      type: "checkbox",
      name: "case",
      form: "",
      checked: t.caseSensitive,
      onchange: this.commit
    });
    this.reField = j("input", {
      type: "checkbox",
      name: "re",
      form: "",
      checked: t.regexp,
      onchange: this.commit
    });
    this.wordField = j("input", {
      type: "checkbox",
      name: "word",
      form: "",
      checked: t.wholeWord,
      onchange: this.commit
    });
    function i(s, r, o) {
      return j("button", {
        class: "cm-button",
        name: s,
        onclick: r,
        type: "button"
      }, o);
    }
    this.dom = j("div", {
      onkeydown: s => this.keydown(s),
      class: "cm-search"
    }, [this.searchField, i("next", () => As(e), [Le(e, "next")]), i("prev", () => Ps(e), [Le(e, "previous")]), i("select", () => Z0(e), [Le(e, "all")]), j("label", null, [this.caseField, Le(e, "match case")]), j("label", null, [this.reField, Le(e, "regexp")]), j("label", null, [this.wordField, Le(e, "by word")]), ...(e.state.readOnly ? [] : [j("br"), this.replaceField, i("replace", () => xh(e), [Le(e, "replace")]), i("replaceAll", () => j0(e), [Le(e, "replace all")])]), j("button", {
      name: "close",
      onclick: () => nd(e),
      "aria-label": Le(e, "close"),
      type: "button"
    }, ["×"])]);
  }
  commit() {
    let e = new Ju({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    });
    if (!e.eq(this.query)) {
      this.query = e;
      this.view.dispatch({
        effects: un.of(e)
      });
    }
  }
  keydown(e) {
    if (nO(this.view, e, "search-panel")) {
      e.preventDefault();
    } else if (e.keyCode == 13 && e.target == this.searchField) {
      e.preventDefault();
      (e.shiftKey ? Ps : As)(this.view);
    } else if (e.keyCode == 13 && e.target == this.replaceField) {
      e.preventDefault();
      xh(this.view);
    }
  }
  update(e) {
    for (let t of e.transactions) {
      for (let i of t.effects) {
        if (i.is(un) && !i.value.eq(this.query)) {
          this.setQuery(i.value);
        }
      }
    }
  }
  setQuery(e) {
    this.query = e;
    this.searchField.value = e.search;
    this.replaceField.value = e.replace;
    this.caseField.checked = e.caseSensitive;
    this.reField.checked = e.regexp;
    this.wordField.checked = e.wholeWord;
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet(Pi).top;
  }
}
function Le(n, e) {
  return n.state.phrase(e);
}
const Zn = 30;
const zn = /[\s\.,:;?!]/;
function ql(n, {
  from: e,
  to: t
}) {
  let i = n.state.doc.lineAt(e);
  let s = n.state.doc.lineAt(t).to;
  let r = Math.max(i.from, e - Zn);
  let o = Math.min(s, t + Zn);
  let l = n.state.sliceDoc(r, o);
  if (r != i.from) {
    for (let a = 0; a < Zn; a++) {
      if (!zn.test(l[a + 1]) && zn.test(l[a])) {
        l = l.slice(a);
        break;
      }
    }
  }
  if (o != s) {
    for (let a = l.length - 1; a > l.length - Zn; a--) {
      if (!zn.test(l[a - 1]) && zn.test(l[a])) {
        l = l.slice(0, a);
        break;
      }
    }
  }
  return v.announce.of(`${n.state.phrase("current match")}. ${l} ${n.state.phrase("on line")} ${i.number}.`);
}
const U0 = v.baseTheme({
  ".cm-panel.cm-search": {
    padding: "2px 6px 4px",
    position: "relative",
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "4px",
      backgroundColor: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    },
    "& input, & button, & label": {
      margin: ".2em .6em .2em 0"
    },
    "& input[type=checkbox]": {
      marginRight: ".2em"
    },
    "& label": {
      fontSize: "80%",
      whiteSpace: "pre"
    }
  },
  "&light .cm-searchMatch": {
    backgroundColor: "#ffff0054"
  },
  "&dark .cm-searchMatch": {
    backgroundColor: "#00ffff8a"
  },
  "&light .cm-searchMatch-selected": {
    backgroundColor: "#ff6a0054"
  },
  "&dark .cm-searchMatch-selected": {
    backgroundColor: "#ff00ff8a"
  }
});
const H0 = [Pt, kt.low(I0), U0];
class sd {
  constructor(e, t, i, s) {
    this.state = e;
    this.pos = t;
    this.explicit = i;
    this.view = s;
    this.abortListeners = [];
    this.abortOnDocChange = false;
  }
  tokenBefore(e) {
    let t = oe(this.state).resolveInner(this.pos, -1);
    while (t && e.indexOf(t.name) < 0) {
      t = t.parent;
    }
    if (t) {
      return {
        from: t.from,
        to: this.pos,
        text: this.state.sliceDoc(t.from, this.pos),
        type: t.type
      };
    } else {
      return null;
    }
  }
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos);
    let i = Math.max(t.from, this.pos - 250);
    let s = t.text.slice(i - t.from, this.pos - t.from);
    let r = s.search(rd(e, false));
    if (r < 0) {
      return null;
    } else {
      return {
        from: i + r,
        to: this.pos,
        text: s.slice(r)
      };
    }
  }
  get aborted() {
    return this.abortListeners == null;
  }
  addEventListener(e, t, i) {
    if (e == "abort" && this.abortListeners) {
      this.abortListeners.push(t);
      if (i && i.onDocChange) {
        this.abortOnDocChange = true;
      }
    }
  }
}
function Qh(n) {
  let e = Object.keys(n).join("");
  let t = /\w/.test(e);
  if (t) {
    e = e.replace(/\w/g, "");
  }
  return `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function K0(n) {
  let e = Object.create(null);
  let t = Object.create(null);
  for (let {
    label: s
  } of n) {
    e[s[0]] = true;
    for (let r = 1; r < s.length; r++) {
      t[s[r]] = true;
    }
  }
  let i = Qh(e) + Qh(t) + "*$";
  return [new RegExp("^" + i), new RegExp(i)];
}
function J0(n) {
  let e = n.map(s => typeof s == "string" ? {
    label: s
  } : s);
  let [t, i] = e.every(s => /^\w+$/.test(s.label)) ? [/\w*$/, /\w+$/] : K0(e);
  return s => {
    let r = s.matchBefore(i);
    if (r || s.explicit) {
      return {
        from: r ? r.from : s.pos,
        options: e,
        validFor: t
      };
    } else {
      return null;
    }
  };
}
class Sh {
  constructor(e, t, i, s) {
    this.completion = e;
    this.source = t;
    this.match = i;
    this.score = s;
  }
}
function si(n) {
  return n.selection.main.from;
}
function rd(n, e) {
  let {
    source: i
  } = n;
  let s = e && i[0] != "^";
  let r = i[i.length - 1] != "$";
  if (!s && !r) {
    return n;
  } else {
    return new RegExp(`${s ? "^" : ""}(?:${i})${r ? "$" : ""}`, n.flags ?? (n.ignoreCase ? "i" : ""));
  }
}
const Tl = Ot.define();
function ey(n, e, t, i) {
  let {
    main: s
  } = n.selection;
  let r = t - s.from;
  let o = i - s.from;
  return {
    ...n.changeByRange(l => {
      if (l != s && t != i && n.sliceDoc(l.from + r, l.from + o) != n.sliceDoc(t, i)) {
        return {
          range: l
        };
      }
      let a = n.toText(e);
      return {
        changes: {
          from: l.from + r,
          to: i == s.from ? l.to : l.from + o,
          insert: a
        },
        range: y.cursor(l.from + r + a.length)
      };
    }),
    scrollIntoView: true,
    userEvent: "input.complete"
  };
}
const kh = new WeakMap();
function ty(n) {
  if (!Array.isArray(n)) {
    return n;
  }
  let e = kh.get(n);
  if (!e) {
    kh.set(n, e = J0(n));
  }
  return e;
}
const Ms = M.define();
const dn = M.define();
class iy {
  constructor(e) {
    this.pattern = e;
    this.chars = [];
    this.folded = [];
    this.any = [];
    this.precise = [];
    this.byWord = [];
    this.score = 0;
    this.matched = [];
    for (let t = 0; t < e.length;) {
      let i = Ee(e, t);
      let s = at(i);
      this.chars.push(i);
      let r = e.slice(t, t + s);
      let o = r.toUpperCase();
      this.folded.push(Ee(o == r ? r.toLowerCase() : o, 0));
      t += s;
    }
    this.astral = e.length != this.chars.length;
  }
  ret(e, t) {
    this.score = e;
    this.matched = t;
    return this;
  }
  match(e) {
    if (this.pattern.length == 0) {
      return this.ret(-100, []);
    }
    if (e.length < this.pattern.length) {
      return null;
    }
    let {
      chars: t,
      folded: i,
      any: s,
      precise: r,
      byWord: o
    } = this;
    if (t.length == 1) {
      let x = Ee(e, 0);
      let Q = at(x);
      let C = Q == e.length ? 0 : -100;
      if (x != t[0]) {
        if (x == i[0]) {
          C += -200;
        } else {
          return null;
        }
      }
      return this.ret(C, [0, Q]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0) {
      return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    }
    let a = t.length;
    let h = 0;
    if (l < 0) {
      for (let x = 0, Q = Math.min(e.length, 200); x < Q && h < a;) {
        let C = Ee(e, x);
        if (C == t[h] || C == i[h]) {
          s[h++] = x;
        }
        x += at(C);
      }
      if (h < a) {
        return null;
      }
    }
    let c = 0;
    let f = 0;
    let u = false;
    let d = 0;
    let m = -1;
    let p = -1;
    let O = /[a-z]/.test(e);
    let b = true;
    for (let x = 0, Q = Math.min(e.length, 200), C = 0; x < Q && f < a;) {
      let w = Ee(e, x);
      if (l < 0) {
        if (c < a && w == t[c]) {
          r[c++] = x;
        }
        if (d < a) {
          if (w == t[d] || w == i[d]) {
            if (d == 0) {
              m = x;
            }
            p = x + 1;
            d++;
          } else {
            d = 0;
          }
        }
      }
      let S;
      let k = w < 255 ? w >= 48 && w <= 57 || w >= 97 && w <= 122 ? 2 : w >= 65 && w <= 90 ? 1 : 0 : (S = Zo(w)) != S.toLowerCase() ? 1 : S != S.toUpperCase() ? 2 : 0;
      if (!x || k == 1 && O || C == 0 && k != 0) {
        if (t[f] == w || i[f] == w && (u = true)) {
          o[f++] = x;
        } else if (o.length) {
          b = false;
        }
      }
      C = k;
      x += at(w);
    }
    if (f == a && o[0] == 0 && b) {
      return this.result(-100 + (u ? -200 : 0), o, e);
    } else if (d == a && m == 0) {
      return this.ret(-200 - e.length + (p == e.length ? 0 : -100), [0, p]);
    } else if (l > -1) {
      return this.ret(-700 - e.length, [l, l + this.pattern.length]);
    } else if (d == a) {
      return this.ret(-900 - e.length, [m, p]);
    } else if (f == a) {
      return this.result(-100 + (u ? -200 : 0) + -700 + (b ? 0 : -1100), o, e);
    } else if (t.length == 2) {
      return null;
    } else {
      return this.result((s[0] ? -700 : 0) + -200 + -1100, s, e);
    }
  }
  result(e, t, i) {
    let s = [];
    let r = 0;
    for (let o of t) {
      let l = o + (this.astral ? at(Ee(i, o)) : 1);
      if (r && s[r - 1] == o) {
        s[r - 1] = l;
      } else {
        s[r++] = o;
        s[r++] = l;
      }
    }
    return this.ret(e - i.length, s);
  }
}
class ny {
  constructor(e) {
    this.pattern = e;
    this.matched = [];
    this.score = 0;
    this.folded = e.toLowerCase();
  }
  match(e) {
    if (e.length < this.pattern.length) {
      return null;
    }
    let t = e.slice(0, this.pattern.length);
    let i = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
    if (i == null) {
      return null;
    } else {
      this.matched = [0, t.length];
      this.score = i + (e.length == this.pattern.length ? 0 : -100);
      return this;
    }
  }
}
const ge = T.define({
  combine(n) {
    return Je(n, {
      activateOnTyping: true,
      activateOnCompletion: () => false,
      activateOnTypingDelay: 100,
      selectOnOpen: true,
      override: null,
      closeOnBlur: true,
      maxRenderedOptions: 100,
      defaultKeymap: true,
      tooltipClass: () => "",
      optionClass: () => "",
      aboveCursor: false,
      icons: true,
      addToOptions: [],
      positionInfo: sy,
      filterStrict: false,
      compareCompletions: (e, t) => (e.sortText || e.label).localeCompare(t.sortText || t.label),
      interactionDelay: 75,
      updateSyncTime: 100
    }, {
      defaultKeymap: (e, t) => e && t,
      closeOnBlur: (e, t) => e && t,
      icons: (e, t) => e && t,
      tooltipClass: (e, t) => i => wh(e(i), t(i)),
      optionClass: (e, t) => i => wh(e(i), t(i)),
      addToOptions: (e, t) => e.concat(t),
      filterStrict: (e, t) => e || t
    });
  }
});
function wh(n, e) {
  if (n) {
    if (e) {
      return n + " " + e;
    } else {
      return n;
    }
  } else {
    return e;
  }
}
function sy(n, e, t, i, s, r) {
  let o = n.textDirection == F.RTL;
  let l = o;
  let a = false;
  let h = "top";
  let c;
  let f;
  let u = e.left - s.left;
  let d = s.right - e.right;
  let m = i.right - i.left;
  let p = i.bottom - i.top;
  if (l && u < Math.min(m, d)) {
    l = false;
  } else if (!l && d < Math.min(m, u)) {
    l = true;
  }
  if (m <= (l ? u : d)) {
    c = Math.max(s.top, Math.min(t.top, s.bottom - p)) - e.top;
    f = Math.min(400, l ? u : d);
  } else {
    a = true;
    f = Math.min(400, (o ? e.right : s.right - e.left) - 30);
    let x = s.bottom - e.bottom;
    if (x >= p || x > e.top) {
      c = t.bottom - e.top;
    } else {
      h = "bottom";
      c = e.bottom - t.top;
    }
  }
  let O = (e.bottom - e.top) / r.offsetHeight;
  let b = (e.right - e.left) / r.offsetWidth;
  return {
    style: `${h}: ${c / O}px; max-width: ${f / b}px`,
    class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right")
  };
}
const $l = M.define();
function ry(n) {
  let e = n.addToOptions.slice();
  if (n.icons) {
    e.push({
      render(t) {
        let i = document.createElement("div");
        i.classList.add("cm-completionIcon");
        if (t.type) {
          i.classList.add(...t.type.split(/\s+/g).map(s => "cm-completionIcon-" + s));
        }
        i.setAttribute("aria-hidden", "true");
        return i;
      },
      position: 20
    });
  }
  e.push({
    render(t, i, s, r) {
      let o = document.createElement("span");
      o.className = "cm-completionLabel";
      let l = t.displayLabel || t.label;
      let a = 0;
      for (let h = 0; h < r.length;) {
        let c = r[h++];
        let f = r[h++];
        if (c > a) {
          o.appendChild(document.createTextNode(l.slice(a, c)));
        }
        let u = o.appendChild(document.createElement("span"));
        u.appendChild(document.createTextNode(l.slice(c, f)));
        u.className = "cm-completionMatchedText";
        a = f;
      }
      if (a < l.length) {
        o.appendChild(document.createTextNode(l.slice(a)));
      }
      return o;
    },
    position: 50
  }, {
    render(t) {
      if (!t.detail) {
        return null;
      }
      let i = document.createElement("span");
      i.className = "cm-completionDetail";
      i.textContent = t.detail;
      return i;
    },
    position: 80
  });
  return e.sort((t, i) => t.position - i.position).map(t => t.render);
}
function Ar(n, e, t) {
  if (n <= t) {
    return {
      from: 0,
      to: n
    };
  }
  if (e < 0) {
    e = 0;
  }
  if (e <= n >> 1) {
    let s = Math.floor(e / t);
    return {
      from: s * t,
      to: (s + 1) * t
    };
  }
  let i = Math.ceil((n - e) / t);
  return {
    from: n - i * t,
    to: n - (i - 1) * t
  };
}
class oy {
  constructor(e, t, i) {
    this.view = e;
    this.stateField = t;
    this.applyCompletion = i;
    this.info = null;
    this.infoDestroy = null;
    this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: a => this.placeInfo(a),
      key: this
    };
    this.space = null;
    this.currentClass = "";
    let s = e.state.field(t);
    let {
      options: r,
      selected: o
    } = s.open;
    let l = e.state.facet(ge);
    this.optionContent = ry(l);
    this.optionClass = l.optionClass;
    this.tooltipClass = l.tooltipClass;
    this.range = Ar(r.length, o, l.maxRenderedOptions);
    this.dom = document.createElement("div");
    this.dom.className = "cm-tooltip-autocomplete";
    this.updateTooltipClass(e.state);
    this.dom.addEventListener("mousedown", a => {
      let {
        options: h
      } = e.state.field(t).open;
      for (let c = a.target, f; c && c != this.dom; c = c.parentNode) {
        if (c.nodeName == "LI" && (f = /-(\d+)$/.exec(c.id)) && +f[1] < h.length) {
          this.applyCompletion(e, h[+f[1]]);
          a.preventDefault();
          return;
        }
      }
      if (a.target == this.list) {
        let c = this.list.classList.contains("cm-completionListIncompleteTop") && a.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && a.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
        if (c != null) {
          e.dispatch({
            effects: $l.of(c)
          });
          a.preventDefault();
        }
      }
    });
    this.dom.addEventListener("focusout", a => {
      let h = e.state.field(this.stateField, false);
      if (h && h.tooltip && e.state.facet(ge).closeOnBlur && a.relatedTarget != e.contentDOM) {
        e.dispatch({
          effects: dn.of(null)
        });
      }
    });
    this.showOptions(r, s.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(e, t) {
    if (this.list) {
      this.list.remove();
    }
    this.list = this.dom.appendChild(this.createListBox(e, t, this.range));
    this.list.addEventListener("scroll", () => {
      if (this.info) {
        this.view.requestMeasure(this.placeInfoReq);
      }
    });
  }
  update(e) {
    let i = e.state.field(this.stateField);
    let s = e.startState.field(this.stateField);
    this.updateTooltipClass(e.state);
    if (i != s) {
      let {
        options: r,
        selected: o,
        disabled: l
      } = i.open;
      if (!s.open || s.open.options != r) {
        this.range = Ar(r.length, o, e.state.facet(ge).maxRenderedOptions);
        this.showOptions(r, i.id);
      }
      this.updateSel();
      if (l != s.open?.disabled) {
        this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
      }
    }
  }
  updateTooltipClass(e) {
    let t = this.tooltipClass(e);
    if (t != this.currentClass) {
      for (let i of this.currentClass.split(" ")) {
        if (i) {
          this.dom.classList.remove(i);
        }
      }
      for (let i of t.split(" ")) {
        if (i) {
          this.dom.classList.add(i);
        }
      }
      this.currentClass = t;
    }
  }
  positioned(e) {
    this.space = e;
    if (this.info) {
      this.view.requestMeasure(this.placeInfoReq);
    }
  }
  updateSel() {
    let e = this.view.state.field(this.stateField);
    let t = e.open;
    if (t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) {
      this.range = Ar(t.options.length, t.selected, this.view.state.facet(ge).maxRenderedOptions);
      this.showOptions(t.options, e.id);
    }
    let i = this.updateSelectedOption(t.selected);
    if (i) {
      this.destroyInfo();
      let {
        completion: s
      } = t.options[t.selected];
      let {
        info: r
      } = s;
      if (!r) {
        return;
      }
      let o = typeof r == "string" ? document.createTextNode(r) : r(s);
      if (!o) {
        return;
      }
      if ("then" in o) {
        o.then(l => {
          if (l && this.view.state.field(this.stateField, false) == e) {
            this.addInfoPane(l, s);
          }
        }).catch(l => $e(this.view.state, l, "completion info"));
      } else {
        this.addInfoPane(o, s);
        i.setAttribute("aria-describedby", this.info.id);
      }
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let i = this.info = document.createElement("div");
    i.className = "cm-tooltip cm-completionInfo";
    i.id = "cm-completionInfo-" + Math.floor(Math.random() * 65535).toString(16);
    if (e.nodeType != null) {
      i.appendChild(e);
      this.infoDestroy = null;
    } else {
      let {
        dom: s,
        destroy: r
      } = e;
      i.appendChild(s);
      this.infoDestroy = r || null;
    }
    this.dom.appendChild(i);
    this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let t = null;
    for (let i = this.list.firstChild, s = this.range.from; i; i = i.nextSibling, s++) {
      if (i.nodeName != "LI" || !i.id) {
        s--;
      } else if (s == e) {
        if (!i.hasAttribute("aria-selected")) {
          i.setAttribute("aria-selected", "true");
          t = i;
        }
      } else if (i.hasAttribute("aria-selected")) {
        i.removeAttribute("aria-selected");
        i.removeAttribute("aria-describedby");
      }
    }
    if (t) {
      ay(this.list, t);
    }
    return t;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info) {
      return null;
    }
    let t = this.dom.getBoundingClientRect();
    let i = this.info.getBoundingClientRect();
    let s = e.getBoundingClientRect();
    let r = this.space;
    if (!r) {
      let o = this.dom.ownerDocument.documentElement;
      r = {
        left: 0,
        top: 0,
        right: o.clientWidth,
        bottom: o.clientHeight
      };
    }
    if (s.top > Math.min(r.bottom, t.bottom) - 10 || s.bottom < Math.max(r.top, t.top) + 10) {
      return null;
    } else {
      return this.view.state.facet(ge).positionInfo(this.view, t, s, i, r, this.dom);
    }
  }
  placeInfo(e) {
    if (this.info) {
      if (e) {
        if (e.style) {
          this.info.style.cssText = e.style;
        }
        this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "");
      } else {
        this.info.style.cssText = "top: -1e6px";
      }
    }
  }
  createListBox(e, t, i) {
    const s = document.createElement("ul");
    s.id = t;
    s.setAttribute("role", "listbox");
    s.setAttribute("aria-expanded", "true");
    s.setAttribute("aria-label", this.view.state.phrase("Completions"));
    s.addEventListener("mousedown", o => {
      if (o.target == s) {
        o.preventDefault();
      }
    });
    let r = null;
    for (let o = i.from; o < i.to; o++) {
      let {
        completion: l,
        match: a
      } = e[o];
      let {
        section: h
      } = l;
      if (h) {
        let u = typeof h == "string" ? h : h.name;
        if (u != r && (o > i.from || i.from == 0)) {
          r = u;
          if (typeof h != "string" && h.header) {
            s.appendChild(h.header(h));
          } else {
            let d = s.appendChild(document.createElement("completion-section"));
            d.textContent = u;
          }
        }
      }
      const c = s.appendChild(document.createElement("li"));
      c.id = t + "-" + o;
      c.setAttribute("role", "option");
      let f = this.optionClass(l);
      if (f) {
        c.className = f;
      }
      for (let u of this.optionContent) {
        let d = u(l, this.view.state, this.view, a);
        if (d) {
          c.appendChild(d);
        }
      }
    }
    if (i.from) {
      s.classList.add("cm-completionListIncompleteTop");
    }
    if (i.to < e.length) {
      s.classList.add("cm-completionListIncompleteBottom");
    }
    return s;
  }
  destroyInfo() {
    if (this.info) {
      if (this.infoDestroy) {
        this.infoDestroy();
      }
      this.info.remove();
      this.info = null;
    }
  }
  destroy() {
    this.destroyInfo();
  }
}
function ly(n, e) {
  return t => new oy(t, n, e);
}
function ay(n, e) {
  let t = n.getBoundingClientRect();
  let i = e.getBoundingClientRect();
  let s = t.height / n.offsetHeight;
  if (i.top < t.top) {
    n.scrollTop -= (t.top - i.top) / s;
  } else if (i.bottom > t.bottom) {
    n.scrollTop += (i.bottom - t.bottom) / s;
  }
}
function vh(n) {
  return (n.boost || 0) * 100 + (n.apply ? 10 : 0) + (n.info ? 5 : 0) + (n.type ? 1 : 0);
}
function hy(n, e) {
  let t = [];
  let i = null;
  let s = null;
  let r = c => {
    t.push(c);
    let {
      section: f
    } = c.completion;
    if (f) {
      i ||= [];
      let u = typeof f == "string" ? f : f.name;
      if (!i.some(d => d.name == u)) {
        i.push(typeof f == "string" ? {
          name: u
        } : f);
      }
    }
  };
  let o = e.facet(ge);
  for (let c of n) {
    if (c.hasResult()) {
      let f = c.result.getMatch;
      if (c.result.filter === false) {
        for (let u of c.result.options) {
          r(new Sh(u, c.source, f ? f(u) : [], 1000000000 - t.length));
        }
      } else {
        let u = e.sliceDoc(c.from, c.to);
        let d;
        let m = o.filterStrict ? new ny(u) : new iy(u);
        for (let p of c.result.options) {
          if (d = m.match(p.label)) {
            let O = p.displayLabel ? f ? f(p, d.matched) : [] : d.matched;
            let b = d.score + (p.boost || 0);
            r(new Sh(p, c.source, O, b));
            if (typeof p.section == "object" && p.section.rank === "dynamic") {
              let {
                name: x
              } = p.section;
              s ||= Object.create(null);
              s[x] = Math.max(b, s[x] || -1000000000);
            }
          }
        }
      }
    }
  }
  if (i) {
    let c = Object.create(null);
    let f = 0;
    let u = (d, m) => (d.rank === "dynamic" && m.rank === "dynamic" ? s[m.name] - s[d.name] : 0) || (typeof d.rank == "number" ? d.rank : 1000000000) - (typeof m.rank == "number" ? m.rank : 1000000000) || (d.name < m.name ? -1 : 1);
    for (let d of i.sort(u)) {
      f -= 100000;
      c[d.name] = f;
    }
    for (let d of t) {
      let {
        section: m
      } = d.completion;
      if (m) {
        d.score += c[typeof m == "string" ? m : m.name];
      }
    }
  }
  let l = [];
  let a = null;
  let h = o.compareCompletions;
  for (let c of t.sort((f, u) => u.score - f.score || h(f.completion, u.completion))) {
    let f = c.completion;
    if (!a || a.label != f.label || a.detail != f.detail || a.type != null && f.type != null && a.type != f.type || a.apply != f.apply || a.boost != f.boost) {
      l.push(c);
    } else if (vh(c.completion) > vh(a)) {
      l[l.length - 1] = c;
    }
    a = c.completion;
  }
  return l;
}
class pi {
  constructor(e, t, i, s, r, o) {
    this.options = e;
    this.attrs = t;
    this.tooltip = i;
    this.timestamp = s;
    this.selected = r;
    this.disabled = o;
  }
  setSelected(e, t) {
    if (e == this.selected || e >= this.options.length) {
      return this;
    } else {
      return new pi(this.options, Ch(t, e), this.tooltip, this.timestamp, e, this.disabled);
    }
  }
  static build(e, t, i, s, r, o) {
    if (s && !o && e.some(h => h.isPending)) {
      return s.setDisabled();
    }
    let l = hy(e, t);
    if (!l.length) {
      if (s && e.some(h => h.isPending)) {
        return s.setDisabled();
      } else {
        return null;
      }
    }
    let a = t.facet(ge).selectOnOpen ? 0 : -1;
    if (s && s.selected != a && s.selected != -1) {
      let h = s.options[s.selected].completion;
      for (let c = 0; c < l.length; c++) {
        if (l[c].completion == h) {
          a = c;
          break;
        }
      }
    }
    return new pi(l, Ch(i, a), {
      pos: e.reduce((h, c) => c.hasResult() ? Math.min(h, c.from) : h, 100000000),
      create: py,
      above: r.aboveCursor
    }, s ? s.timestamp : Date.now(), a, false);
  }
  map(e) {
    return new pi(this.options, this.attrs, {
      ...this.tooltip,
      pos: e.mapPos(this.tooltip.pos)
    }, this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new pi(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, true);
  }
}
class Rs {
  constructor(e, t, i) {
    this.active = e;
    this.id = t;
    this.open = i;
  }
  static start() {
    return new Rs(dy, "cm-ac-" + Math.floor(Math.random() * 2000000).toString(36), null);
  }
  update(e) {
    let {
      state: t
    } = e;
    let i = t.facet(ge);
    let r = (i.override || t.languageDataAt("autocomplete", si(t)).map(ty)).map(a => (this.active.find(c => c.source == a) || new ze(a, this.active.some(c => c.state != 0) ? 1 : 0)).update(e, i));
    if (r.length == this.active.length && r.every((a, h) => a == this.active[h])) {
      r = this.active;
    }
    let o = this.open;
    let l = e.effects.some(a => a.is(Xl));
    if (o && e.docChanged) {
      o = o.map(e.changes);
    }
    if (e.selection || r.some(a => a.hasResult() && e.changes.touchesRange(a.from, a.to)) || !cy(r, this.active) || l) {
      o = pi.build(r, t, this.id, o, i, l);
    } else if (o && o.disabled && !r.some(a => a.isPending)) {
      o = null;
    }
    if (!o && r.every(a => !a.isPending) && r.some(a => a.hasResult())) {
      r = r.map(a => a.hasResult() ? new ze(a.source, 0) : a);
    }
    for (let a of e.effects) {
      if (a.is($l)) {
        o = o && o.setSelected(a.value, this.id);
      }
    }
    if (r == this.active && o == this.open) {
      return this;
    } else {
      return new Rs(r, this.id, o);
    }
  }
  get tooltip() {
    if (this.open) {
      return this.open.tooltip;
    } else {
      return null;
    }
  }
  get attrs() {
    if (this.open) {
      return this.open.attrs;
    } else if (this.active.length) {
      return fy;
    } else {
      return uy;
    }
  }
}
function cy(n, e) {
  if (n == e) {
    return true;
  }
  for (let t = 0, i = 0;;) {
    while (t < n.length && !n[t].hasResult()) {
      t++;
    }
    while (i < e.length && !e[i].hasResult()) {
      i++;
    }
    let s = t == n.length;
    let r = i == e.length;
    if (s || r) {
      return s == r;
    }
    if (n[t++].result != e[i++].result) {
      return false;
    }
  }
}
const fy = {
  "aria-autocomplete": "list"
};
const uy = {};
function Ch(n, e) {
  let t = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": n
  };
  if (e > -1) {
    t["aria-activedescendant"] = n + "-" + e;
  }
  return t;
}
const dy = [];
function od(n, e) {
  if (n.isUserEvent("input.complete")) {
    let i = n.annotation(Tl);
    if (i && e.activateOnCompletion(i)) {
      return 12;
    }
  }
  let t = n.isUserEvent("input.type");
  if (t && e.activateOnTyping) {
    return 5;
  } else if (t) {
    return 1;
  } else if (n.isUserEvent("delete.backward")) {
    return 2;
  } else if (n.selection) {
    return 8;
  } else if (n.docChanged) {
    return 16;
  } else {
    return 0;
  }
}
class ze {
  constructor(e, t, i = false) {
    this.source = e;
    this.state = t;
    this.explicit = i;
  }
  hasResult() {
    return false;
  }
  get isPending() {
    return this.state == 1;
  }
  update(e, t) {
    let i = od(e, t);
    let s = this;
    if (i & 8 || i & 16 && this.touches(e)) {
      s = new ze(s.source, 0);
    }
    if (i & 4 && s.state == 0) {
      s = new ze(this.source, 1);
    }
    s = s.updateFor(e, i);
    for (let r of e.effects) {
      if (r.is(Ms)) {
        s = new ze(s.source, 1, r.value);
      } else if (r.is(dn)) {
        s = new ze(s.source, 0);
      } else if (r.is(Xl)) {
        for (let o of r.value) {
          if (o.source == s.source) {
            s = o;
          }
        }
      }
    }
    return s;
  }
  updateFor(e, t) {
    return this.map(e.changes);
  }
  map(e) {
    return this;
  }
  touches(e) {
    return e.changes.touchesRange(si(e.state));
  }
}
class Qi extends ze {
  constructor(e, t, i, s, r, o) {
    super(e, 3, t);
    this.limit = i;
    this.result = s;
    this.from = r;
    this.to = o;
  }
  hasResult() {
    return true;
  }
  updateFor(e, t) {
    if (!(t & 3)) {
      return this.map(e.changes);
    }
    let s = this.result;
    if (s.map && !e.changes.empty) {
      s = s.map(s, e.changes);
    }
    let r = e.changes.mapPos(this.from);
    let o = e.changes.mapPos(this.to, 1);
    let l = si(e.state);
    if (l > o || !s || t & 2 && (si(e.startState) == this.from || l < this.limit)) {
      return new ze(this.source, t & 4 ? 1 : 0);
    }
    let a = e.changes.mapPos(this.limit);
    if (my(s.validFor, e.state, r, o)) {
      return new Qi(this.source, this.explicit, a, s, r, o);
    } else if (s.update && (s = s.update(s, r, o, new sd(e.state, l, false)))) {
      return new Qi(this.source, this.explicit, a, s, s.from, s.to ?? si(e.state));
    } else {
      return new ze(this.source, 1, this.explicit);
    }
  }
  map(e) {
    if (e.empty) {
      return this;
    }
    let t = this.result.map ? this.result.map(this.result, e) : this.result;
    if (t) {
      return new Qi(this.source, this.explicit, e.mapPos(this.limit), t, e.mapPos(this.from), e.mapPos(this.to, 1));
    } else {
      return new ze(this.source, 0);
    }
  }
  touches(e) {
    return e.changes.touchesRange(this.from, this.to);
  }
}
function my(n, e, t, i) {
  if (!n) {
    return false;
  }
  let s = e.sliceDoc(t, i);
  if (typeof n == "function") {
    return n(s, t, i, e);
  } else {
    return rd(n, true).test(s);
  }
}
const Xl = M.define({
  map(n, e) {
    return n.map(t => t.map(e));
  }
});
const Ae = le.define({
  create() {
    return Rs.start();
  },
  update(n, e) {
    return n.update(e);
  },
  provide: n => [js.from(n, e => e.tooltip), v.contentAttributes.from(n, e => e.attrs)]
});
function El(n, e) {
  const t = e.completion.apply || e.completion.label;
  let i = n.state.field(Ae).active.find(s => s.source == e.source);
  if (i instanceof Qi) {
    if (typeof t == "string") {
      n.dispatch({
        ...ey(n.state, t, i.from, i.to),
        annotations: Tl.of(e.completion)
      });
    } else {
      t(n, e.completion, i.from, i.to);
    }
    return true;
  } else {
    return false;
  }
}
const py = ly(Ae, El);
function jn(n, e = "option") {
  return t => {
    let i = t.state.field(Ae, false);
    if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < t.state.facet(ge).interactionDelay) {
      return false;
    }
    let s = 1;
    let r;
    if (e == "page" && (r = Bf(t, i.open.tooltip))) {
      s = Math.max(2, Math.floor(r.dom.offsetHeight / r.dom.querySelector("li").offsetHeight) - 1);
    }
    let {
      length: o
    } = i.open.options;
    let l = i.open.selected > -1 ? i.open.selected + s * (n ? 1 : -1) : n ? 0 : o - 1;
    if (l < 0) {
      l = e == "page" ? 0 : o - 1;
    } else if (l >= o) {
      l = e == "page" ? o - 1 : 0;
    }
    t.dispatch({
      effects: $l.of(l)
    });
    return true;
  };
}
const Oy = n => {
  let e = n.state.field(Ae, false);
  if (n.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < n.state.facet(ge).interactionDelay) {
    return false;
  } else {
    return El(n, e.open.options[e.open.selected]);
  }
};
const os = n => n.state.field(Ae, false) ? (n.dispatch({
  effects: Ms.of(true)
}), true) : false;
const gy = n => {
  let e = n.state.field(Ae, false);
  if (!e || !e.active.some(t => t.state != 0)) {
    return false;
  } else {
    n.dispatch({
      effects: dn.of(null)
    });
    return true;
  }
};
class by {
  constructor(e, t) {
    this.active = e;
    this.context = t;
    this.time = Date.now();
    this.updates = [];
    this.done = undefined;
  }
}
const yy = 50;
const xy = 1000;
const Qy = K.fromClass(class {
  constructor(n) {
    this.view = n;
    this.debounceUpdate = -1;
    this.running = [];
    this.debounceAccept = -1;
    this.pendingStart = false;
    this.composing = 0;
    for (let e of n.state.field(Ae).active) {
      if (e.isPending) {
        this.startQuery(e);
      }
    }
  }
  update(n) {
    let e = n.state.field(Ae);
    let t = n.state.facet(ge);
    if (!n.selectionSet && !n.docChanged && n.startState.field(Ae) == e) {
      return;
    }
    let i = n.transactions.some(r => {
      let o = od(r, t);
      return o & 8 || (r.selection || r.docChanged) && !(o & 3);
    });
    for (let r = 0; r < this.running.length; r++) {
      let o = this.running[r];
      if (i || o.context.abortOnDocChange && n.docChanged || o.updates.length + n.transactions.length > yy && Date.now() - o.time > xy) {
        for (let l of o.context.abortListeners) {
          try {
            l();
          } catch (a) {
            $e(this.view.state, a);
          }
        }
        o.context.abortListeners = null;
        this.running.splice(r--, 1);
      } else {
        o.updates.push(...n.transactions);
      }
    }
    if (this.debounceUpdate > -1) {
      clearTimeout(this.debounceUpdate);
    }
    if (n.transactions.some(r => r.effects.some(o => o.is(Ms)))) {
      this.pendingStart = true;
    }
    let s = this.pendingStart ? 50 : t.activateOnTypingDelay;
    this.debounceUpdate = e.active.some(r => r.isPending && !this.running.some(o => o.active.source == r.source)) ? setTimeout(() => this.startUpdate(), s) : -1;
    if (this.composing != 0) {
      for (let r of n.transactions) {
        if (r.isUserEvent("input.type")) {
          this.composing = 2;
        } else if (this.composing == 2 && r.selection) {
          this.composing = 3;
        }
      }
    }
  }
  startUpdate() {
    this.debounceUpdate = -1;
    this.pendingStart = false;
    let {
      state: n
    } = this.view;
    let e = n.field(Ae);
    for (let t of e.active) {
      if (t.isPending && !this.running.some(i => i.active.source == t.source)) {
        this.startQuery(t);
      }
    }
    if (this.running.length && e.open && e.open.disabled) {
      this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(ge).updateSyncTime);
    }
  }
  startQuery(n) {
    let {
      state: e
    } = this.view;
    let t = si(e);
    let i = new sd(e, t, n.explicit, this.view);
    let s = new by(n, i);
    this.running.push(s);
    Promise.resolve(n.source(i)).then(r => {
      if (!s.context.aborted) {
        s.done = r || null;
        this.scheduleAccept();
      }
    }, r => {
      this.view.dispatch({
        effects: dn.of(null)
      });
      $e(this.view.state, r);
    });
  }
  scheduleAccept() {
    if (this.running.every(n => n.done !== undefined)) {
      this.accept();
    } else if (this.debounceAccept < 0) {
      this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(ge).updateSyncTime);
    }
  }
  accept() {
    if (this.debounceAccept > -1) {
      clearTimeout(this.debounceAccept);
    }
    this.debounceAccept = -1;
    let e = [];
    let t = this.view.state.facet(ge);
    let i = this.view.state.field(Ae);
    for (let s = 0; s < this.running.length; s++) {
      let r = this.running[s];
      if (r.done === undefined) {
        continue;
      }
      this.running.splice(s--, 1);
      if (r.done) {
        let l = si(r.updates.length ? r.updates[0].startState : this.view.state);
        let a = Math.min(l, r.done.from + (r.active.explicit ? 0 : 1));
        let h = new Qi(r.active.source, r.active.explicit, a, r.done, r.done.from, r.done.to ?? l);
        for (let c of r.updates) {
          h = h.update(c, t);
        }
        if (h.hasResult()) {
          e.push(h);
          continue;
        }
      }
      let o = i.active.find(l => l.source == r.active.source);
      if (o && o.isPending) {
        if (r.done == null) {
          let l = new ze(r.active.source, 0);
          for (let a of r.updates) {
            l = l.update(a, t);
          }
          if (!l.isPending) {
            e.push(l);
          }
        } else {
          this.startQuery(o);
        }
      }
    }
    if (e.length || i.open && i.open.disabled) {
      this.view.dispatch({
        effects: Xl.of(e)
      });
    }
  }
}, {
  eventHandlers: {
    blur(n) {
      let e = this.view.state.field(Ae, false);
      if (e && e.tooltip && this.view.state.facet(ge).closeOnBlur) {
        let t = e.open && Bf(this.view, e.open.tooltip);
        if (!t || !t.dom.contains(n.relatedTarget)) {
          setTimeout(() => this.view.dispatch({
            effects: dn.of(null)
          }), 10);
        }
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      if (this.composing == 3) {
        setTimeout(() => this.view.dispatch({
          effects: Ms.of(false)
        }), 20);
      }
      this.composing = 0;
    }
  }
});
const Sy = typeof navigator == "object" && /Win/.test(navigator.platform);
const ky = kt.highest(v.domEventHandlers({
  keydown(n, e) {
    let t = e.state.field(Ae, false);
    if (!t || !t.open || t.open.disabled || t.open.selected < 0 || n.key.length > 1 || n.ctrlKey && (!Sy || !n.altKey) || n.metaKey) {
      return false;
    }
    let i = t.open.options[t.open.selected];
    let s = t.active.find(o => o.source == i.source);
    let r = i.completion.commitCharacters || s.result.commitCharacters;
    if (r && r.indexOf(n.key) > -1) {
      El(e, i);
    }
    return false;
  }
}));
const ld = v.baseTheme({
  ".cm-tooltip.cm-tooltip-autocomplete": {
    "& > ul": {
      fontFamily: "monospace",
      whiteSpace: "nowrap",
      overflow: "hidden auto",
      maxWidth_fallback: "700px",
      maxWidth: "min(700px, 95vw)",
      minWidth: "250px",
      maxHeight: "10em",
      height: "100%",
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& > li, & > completion-section": {
        padding: "1px 3px",
        lineHeight: 1.2
      },
      "& > li": {
        overflowX: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer"
      },
      "& > completion-section": {
        display: "list-item",
        borderBottom: "1px solid silver",
        paddingLeft: "0.5em",
        opacity: 0.7
      }
    }
  },
  "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#17c",
    color: "white"
  },
  "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#777"
  },
  "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#347",
    color: "white"
  },
  "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#444"
  },
  ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
    content: "\"···\"",
    opacity: 0.5,
    display: "block",
    textAlign: "center",
    cursor: "pointer"
  },
  ".cm-tooltip.cm-completionInfo": {
    position: "absolute",
    padding: "3px 9px",
    width: "max-content",
    maxWidth: "400px",
    boxSizing: "border-box",
    whiteSpace: "pre-line"
  },
  ".cm-completionInfo.cm-completionInfo-left": {
    right: "100%"
  },
  ".cm-completionInfo.cm-completionInfo-right": {
    left: "100%"
  },
  ".cm-completionInfo.cm-completionInfo-left-narrow": {
    right: "30px"
  },
  ".cm-completionInfo.cm-completionInfo-right-narrow": {
    left: "30px"
  },
  "&light .cm-snippetField": {
    backgroundColor: "#00000022"
  },
  "&dark .cm-snippetField": {
    backgroundColor: "#ffffff22"
  },
  ".cm-snippetFieldPosition": {
    verticalAlign: "text-top",
    width: 0,
    height: "1.15em",
    display: "inline-block",
    margin: "0 -0.7px -.7em",
    borderLeft: "1.4px dotted #888"
  },
  ".cm-completionMatchedText": {
    textDecoration: "underline"
  },
  ".cm-completionDetail": {
    marginLeft: "0.5em",
    fontStyle: "italic"
  },
  ".cm-completionIcon": {
    fontSize: "90%",
    width: ".8em",
    display: "inline-block",
    textAlign: "center",
    paddingRight: ".6em",
    opacity: "0.6",
    boxSizing: "content-box"
  },
  ".cm-completionIcon-function, .cm-completionIcon-method": {
    "&:after": {
      content: "'ƒ'"
    }
  },
  ".cm-completionIcon-class": {
    "&:after": {
      content: "'○'"
    }
  },
  ".cm-completionIcon-interface": {
    "&:after": {
      content: "'◌'"
    }
  },
  ".cm-completionIcon-variable": {
    "&:after": {
      content: "'𝑥'"
    }
  },
  ".cm-completionIcon-constant": {
    "&:after": {
      content: "'𝐶'"
    }
  },
  ".cm-completionIcon-type": {
    "&:after": {
      content: "'𝑡'"
    }
  },
  ".cm-completionIcon-enum": {
    "&:after": {
      content: "'∪'"
    }
  },
  ".cm-completionIcon-property": {
    "&:after": {
      content: "'□'"
    }
  },
  ".cm-completionIcon-keyword": {
    "&:after": {
      content: "'🔑︎'"
    }
  },
  ".cm-completionIcon-namespace": {
    "&:after": {
      content: "'▢'"
    }
  },
  ".cm-completionIcon-text": {
    "&:after": {
      content: "'abc'",
      fontSize: "50%",
      verticalAlign: "middle"
    }
  }
});
class wy {
  constructor(e, t, i, s) {
    this.field = e;
    this.line = t;
    this.from = i;
    this.to = s;
  }
}
class Al {
  constructor(e, t, i) {
    this.field = e;
    this.from = t;
    this.to = i;
  }
  map(e) {
    let t = e.mapPos(this.from, -1, Qe.TrackDel);
    let i = e.mapPos(this.to, 1, Qe.TrackDel);
    if (t == null || i == null) {
      return null;
    } else {
      return new Al(this.field, t, i);
    }
  }
}
class Pl {
  constructor(e, t) {
    this.lines = e;
    this.fieldPositions = t;
  }
  instantiate(e, t) {
    let i = [];
    let s = [t];
    let r = e.doc.lineAt(t);
    let o = /^\s*/.exec(r.text)[0];
    for (let a of this.lines) {
      if (i.length) {
        let h = o;
        let c = /^\t*/.exec(a)[0].length;
        for (let f = 0; f < c; f++) {
          h += e.facet(xn);
        }
        s.push(t + h.length - c);
        a = h + a.slice(c);
      }
      i.push(a);
      t += a.length + 1;
    }
    let l = this.fieldPositions.map(a => new Al(a.field, s[a.line] + a.from, s[a.line] + a.to));
    return {
      text: i,
      ranges: l
    };
  }
  static parse(e) {
    let t = [];
    let i = [];
    let s = [];
    let r;
    for (let o of e.split(/\r\n?|\n/)) {
      while (r = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(o)) {
        let l = r[1] ? +r[1] : null;
        let a = r[2] || r[3] || "";
        let h = -1;
        if (l === 0) {
          l = 1000000000;
        }
        let c = a.replace(/\\[{}]/g, f => f[1]);
        for (let f = 0; f < t.length; f++) {
          if (l != null ? t[f].seq == l : c && t[f].name == c) {
            h = f;
          }
        }
        if (h < 0) {
          let f = 0;
          while (f < t.length && (l == null || t[f].seq != null && t[f].seq < l)) {
            f++;
          }
          t.splice(f, 0, {
            seq: l,
            name: c
          });
          h = f;
          for (let u of s) {
            if (u.field >= h) {
              u.field++;
            }
          }
        }
        for (let f of s) {
          if (f.line == i.length && f.from > r.index) {
            let u = r[2] ? 3 + (r[1] || "").length : 2;
            f.from -= u;
            f.to -= u;
          }
        }
        s.push(new wy(h, i.length, r.index, r.index + c.length));
        o = o.slice(0, r.index) + a + o.slice(r.index + r[0].length);
      }
      o = o.replace(/\\([{}])/g, (l, a, h) => {
        for (let c of s) {
          if (c.line == i.length && c.from > h) {
            c.from--;
            c.to--;
          }
        }
        return a;
      });
      i.push(o);
    }
    return new Pl(i, s);
  }
}
let vy = X.widget({
  widget: new class extends _e {
    toDOM() {
      let n = document.createElement("span");
      n.className = "cm-snippetFieldPosition";
      return n;
    }
    ignoreEvent() {
      return false;
    }
  }()
});
let Cy = X.mark({
  class: "cm-snippetField"
});
class Mi {
  constructor(e, t) {
    this.ranges = e;
    this.active = t;
    this.deco = X.set(e.map(i => (i.from == i.to ? vy : Cy).range(i.from, i.to)), true);
  }
  map(e) {
    let t = [];
    for (let i of this.ranges) {
      let s = i.map(e);
      if (!s) {
        return null;
      }
      t.push(s);
    }
    return new Mi(t, this.active);
  }
  selectionInsideField(e) {
    return e.ranges.every(t => this.ranges.some(i => i.field == this.active && i.from <= t.from && i.to >= t.to));
  }
}
const vn = M.define({
  map(n, e) {
    return n && n.map(e);
  }
});
const qy = M.define();
const mn = le.define({
  create() {
    return null;
  },
  update(n, e) {
    for (let t of e.effects) {
      if (t.is(vn)) {
        return t.value;
      }
      if (t.is(qy) && n) {
        return new Mi(n.ranges, t.value);
      }
    }
    if (n && e.docChanged) {
      n = n.map(e.changes);
    }
    if (n && e.selection && !n.selectionInsideField(e.selection)) {
      n = null;
    }
    return n;
  },
  provide: n => v.decorations.from(n, e => e ? e.deco : X.none)
});
function Ml(n, e) {
  return y.create(n.filter(t => t.field == e).map(t => y.range(t.from, t.to)));
}
function Ty(n) {
  let e = Pl.parse(n);
  return (t, i, s, r) => {
    let {
      text: o,
      ranges: l
    } = e.instantiate(t.state, s);
    let {
      main: a
    } = t.state.selection;
    let h = {
      changes: {
        from: s,
        to: r == a.from ? a.to : r,
        insert: I.of(o)
      },
      scrollIntoView: true,
      annotations: i ? [Tl.of(i), fe.userEvent.of("input.complete")] : undefined
    };
    if (l.length) {
      h.selection = Ml(l, 0);
    }
    if (l.some(c => c.field > 0)) {
      let c = new Mi(l, 0);
      let f = h.effects = [vn.of(c)];
      if (t.state.field(mn, false) === undefined) {
        f.push(M.appendConfig.of([mn, Py, Ry, ld]));
      }
    }
    t.dispatch(t.state.update(h));
  };
}
function ad(n) {
  return ({
    state: e,
    dispatch: t
  }) => {
    let i = e.field(mn, false);
    if (!i || n < 0 && i.active == 0) {
      return false;
    }
    let s = i.active + n;
    let r = n > 0 && !i.ranges.some(o => o.field == s + n);
    t(e.update({
      selection: Ml(i.ranges, s),
      effects: vn.of(r ? null : new Mi(i.ranges, s)),
      scrollIntoView: true
    }));
    return true;
  };
}
const $y = ({
  state: n,
  dispatch: e
}) => n.field(mn, false) ? (e(n.update({
  effects: vn.of(null)
})), true) : false;
const Xy = ad(1);
const Ey = ad(-1);
const Ay = [{
  key: "Tab",
  run: Xy,
  shift: Ey
}, {
  key: "Escape",
  run: $y
}];
const qh = T.define({
  combine(n) {
    if (n.length) {
      return n[0];
    } else {
      return Ay;
    }
  }
});
const Py = kt.highest(Yt.compute([qh], n => n.facet(qh)));
function My(n, e) {
  return {
    ...e,
    apply: Ty(n)
  };
}
const Ry = v.domEventHandlers({
  mousedown(n, e) {
    let t = e.state.field(mn, false);
    let i;
    if (!t || (i = e.posAtCoords({
      x: n.clientX,
      y: n.clientY
    })) == null) {
      return false;
    }
    let s = t.ranges.find(r => r.from <= i && r.to >= i);
    if (!s || s.field == t.active) {
      return false;
    } else {
      e.dispatch({
        selection: Ml(t.ranges, s.field),
        effects: vn.of(t.ranges.some(r => r.field > s.field) ? new Mi(t.ranges, s.field) : null),
        scrollIntoView: true
      });
      return true;
    }
  }
});
const pn = {
  brackets: ["(", "[", "{", "'", "\""],
  before: ")]}:;>",
  stringPrefixes: []
};
const ti = M.define({
  map(n, e) {
    let t = e.mapPos(n, -1, Qe.TrackAfter);
    return t ?? undefined;
  }
});
const Rl = new class extends Mt {}();
Rl.startSide = 1;
Rl.endSide = -1;
const hd = le.define({
  create() {
    return L.empty;
  },
  update(n, e) {
    n = n.map(e.changes);
    if (e.selection) {
      let t = e.state.doc.lineAt(e.selection.main.head);
      n = n.update({
        filter: i => i >= t.from && i <= t.to
      });
    }
    for (let t of e.effects) {
      if (t.is(ti)) {
        n = n.update({
          add: [Rl.range(t.value, t.value + 1)]
        });
      }
    }
    return n;
  }
});
function cd() {
  return [Wy, hd];
}
const Pr = "()[]{}<>«»»«［］｛｝";
function fd(n) {
  for (let e = 0; e < Pr.length; e += 2) {
    if (Pr.charCodeAt(e) == n) {
      return Pr.charAt(e + 1);
    }
  }
  return Zo(n < 128 ? n : n + 1);
}
function ud(n, e) {
  return n.languageDataAt("closeBrackets", e)[0] || pn;
}
const Vy = typeof navigator == "object" && /Android\b/.test(navigator.userAgent);
const Wy = v.inputHandler.of((n, e, t, i) => {
  if ((Vy ? n.composing : n.compositionStarted) || n.state.readOnly) {
    return false;
  }
  let s = n.state.selection.main;
  if (i.length > 2 || i.length == 2 && at(Ee(i, 0)) == 1 || e != s.from || t != s.to) {
    return false;
  }
  let r = Ny(n.state, i);
  if (r) {
    n.dispatch(r);
    return true;
  } else {
    return false;
  }
});
const Dy = ({
  state: n,
  dispatch: e
}) => {
  if (n.readOnly) {
    return false;
  }
  let i = ud(n, n.selection.main.head).brackets || pn.brackets;
  let s = null;
  let r = n.changeByRange(o => {
    if (o.empty) {
      let l = By(n.doc, o.head);
      for (let a of i) {
        if (a == l && tr(n.doc, o.head) == fd(Ee(a, 0))) {
          return {
            changes: {
              from: o.head - a.length,
              to: o.head + a.length
            },
            range: y.cursor(o.head - a.length)
          };
        }
      }
    }
    return {
      range: s = o
    };
  });
  if (!s) {
    e(n.update(r, {
      scrollIntoView: true,
      userEvent: "delete.backward"
    }));
  }
  return !s;
};
const Ly = [{
  key: "Backspace",
  run: Dy
}];
function Ny(n, e) {
  let t = ud(n, n.selection.main.head);
  let i = t.brackets || pn.brackets;
  for (let s of i) {
    let r = fd(Ee(s, 0));
    if (e == s) {
      if (r == s) {
        return Iy(n, s, i.indexOf(s + s + s) > -1, t);
      } else {
        return Yy(n, s, r, t.before || pn.before);
      }
    }
    if (e == r && dd(n, n.selection.main.from)) {
      return Gy(n, s, r);
    }
  }
  return null;
}
function dd(n, e) {
  let t = false;
  n.field(hd).between(0, n.doc.length, i => {
    if (i == e) {
      t = true;
    }
  });
  return t;
}
function tr(n, e) {
  let t = n.sliceString(e, e + 2);
  return t.slice(0, at(Ee(t, 0)));
}
function By(n, e) {
  let t = n.sliceString(e - 2, e);
  if (at(Ee(t, 0)) == t.length) {
    return t;
  } else {
    return t.slice(1);
  }
}
function Yy(n, e, t, i) {
  let s = null;
  let r = n.changeByRange(o => {
    if (!o.empty) {
      return {
        changes: [{
          insert: e,
          from: o.from
        }, {
          insert: t,
          from: o.to
        }],
        effects: ti.of(o.to + e.length),
        range: y.range(o.anchor + e.length, o.head + e.length)
      };
    }
    let l = tr(n.doc, o.head);
    if (!l || /\s/.test(l) || i.indexOf(l) > -1) {
      return {
        changes: {
          insert: e + t,
          from: o.head
        },
        effects: ti.of(o.head + e.length),
        range: y.cursor(o.head + e.length)
      };
    } else {
      return {
        range: s = o
      };
    }
  });
  if (s) {
    return null;
  } else {
    return n.update(r, {
      scrollIntoView: true,
      userEvent: "input.type"
    });
  }
}
function Gy(n, e, t) {
  let i = null;
  let s = n.changeByRange(r => r.empty && tr(n.doc, r.head) == t ? {
    changes: {
      from: r.head,
      to: r.head + t.length,
      insert: t
    },
    range: y.cursor(r.head + t.length)
  } : i = {
    range: r
  });
  if (i) {
    return null;
  } else {
    return n.update(s, {
      scrollIntoView: true,
      userEvent: "input.type"
    });
  }
}
function Iy(n, e, t, i) {
  let s = i.stringPrefixes || pn.stringPrefixes;
  let r = null;
  let o = n.changeByRange(l => {
    if (!l.empty) {
      return {
        changes: [{
          insert: e,
          from: l.from
        }, {
          insert: e,
          from: l.to
        }],
        effects: ti.of(l.to + e.length),
        range: y.range(l.anchor + e.length, l.head + e.length)
      };
    }
    let a = l.head;
    let h = tr(n.doc, a);
    let c;
    if (h == e) {
      if (Th(n, a)) {
        return {
          changes: {
            insert: e + e,
            from: a
          },
          effects: ti.of(a + e.length),
          range: y.cursor(a + e.length)
        };
      }
      if (dd(n, a)) {
        let u = t && n.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
        return {
          changes: {
            from: a,
            to: a + u.length,
            insert: u
          },
          range: y.cursor(a + u.length)
        };
      }
    } else {
      if (t && n.sliceDoc(a - e.length * 2, a) == e + e && (c = $h(n, a - e.length * 2, s)) > -1 && Th(n, c)) {
        return {
          changes: {
            insert: e + e + e + e,
            from: a
          },
          effects: ti.of(a + e.length),
          range: y.cursor(a + e.length)
        };
      }
      if (n.charCategorizer(a)(h) != ee.Word && $h(n, a, s) > -1 && !Zy(n, a, e, s)) {
        return {
          changes: {
            insert: e + e,
            from: a
          },
          effects: ti.of(a + e.length),
          range: y.cursor(a + e.length)
        };
      }
    }
    return {
      range: r = l
    };
  });
  if (r) {
    return null;
  } else {
    return n.update(o, {
      scrollIntoView: true,
      userEvent: "input.type"
    });
  }
}
function Th(n, e) {
  let t = oe(n).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function Zy(n, e, t, i) {
  let s = oe(n).resolveInner(e, -1);
  let r = i.reduce((o, l) => Math.max(o, l.length), 0);
  for (let o = 0; o < 5; o++) {
    let l = n.sliceDoc(s.from, Math.min(s.to, s.from + t.length + r));
    let a = l.indexOf(t);
    if (!a || a > -1 && i.indexOf(l.slice(0, a)) > -1) {
      let c = s.firstChild;
      while (c && c.from == s.from && c.to - c.from > t.length + a) {
        if (n.sliceDoc(c.to - t.length, c.to) == t) {
          return false;
        }
        c = c.firstChild;
      }
      return true;
    }
    let h = s.to == e && s.parent;
    if (!h) {
      break;
    }
    s = h;
  }
  return false;
}
function $h(n, e, t) {
  let i = n.charCategorizer(e);
  if (i(n.sliceDoc(e - 1, e)) != ee.Word) {
    return e;
  }
  for (let s of t) {
    let r = e - s.length;
    if (n.sliceDoc(r, e) == s && i(n.sliceDoc(r - 1, r)) != ee.Word) {
      return r;
    }
  }
  return -1;
}
function Vl(n = {}) {
  return [ky, Ae, ge.of(n), Qy, zy, ld];
}
const Wl = [{
  key: "Ctrl-Space",
  run: os
}, {
  mac: "Alt-`",
  run: os
}, {
  mac: "Alt-i",
  run: os
}, {
  key: "Escape",
  run: gy
}, {
  key: "ArrowDown",
  run: jn(true)
}, {
  key: "ArrowUp",
  run: jn(false)
}, {
  key: "PageDown",
  run: jn(true, "page")
}, {
  key: "PageUp",
  run: jn(false, "page")
}, {
  key: "Enter",
  run: Oy
}];
const zy = kt.highest(Yt.computeN([ge], n => n.facet(ge).defaultKeymap ? [Wl] : []));
class Xh {
  constructor(e, t, i) {
    this.from = e;
    this.to = t;
    this.diagnostic = i;
  }
}
class Jt {
  constructor(e, t, i) {
    this.diagnostics = e;
    this.panel = t;
    this.selected = i;
  }
  static init(e, t, i) {
    let s = i.facet(dt).markerFilter;
    if (s) {
      e = s(e, i);
    }
    let r = e.slice().sort((d, m) => d.from - m.from || d.to - m.to);
    let o = new Qt();
    let l = [];
    let a = 0;
    let h = i.doc.iter();
    let c = 0;
    let f = i.doc.length;
    for (let d = 0;;) {
      let m = d == r.length ? null : r[d];
      if (!m && !l.length) {
        break;
      }
      let p;
      let O;
      if (l.length) {
        p = a;
        O = l.reduce((Q, C) => Math.min(Q, C.to), m && m.from > p ? m.from : 100000000);
      } else {
        p = m.from;
        if (p > f) {
          break;
        }
        O = m.to;
        l.push(m);
        d++;
      }
      while (d < r.length) {
        let Q = r[d];
        if (Q.from == p && (Q.to > Q.from || Q.to == p)) {
          l.push(Q);
          d++;
          O = Math.min(Q.to, O);
        } else {
          O = Math.min(Q.from, O);
          break;
        }
      }
      O = Math.min(O, f);
      let b = false;
      if (l.some(Q => Q.from == p && (Q.to == O || O == f)) && (b = p == O, !b && O - p < 10)) {
        let Q = p - (c + h.value.length);
        if (Q > 0) {
          h.next(Q);
          c = p;
        }
        for (let C = p;;) {
          if (C >= O) {
            b = true;
            break;
          }
          if (!h.lineBreak && c + h.value.length > C) {
            break;
          }
          C = c + h.value.length;
          c += h.value.length;
          h.next();
        }
      }
      let x = Qd(l);
      if (b) {
        o.add(p, p, X.widget({
          widget: new e1(x),
          diagnostics: l.slice()
        }));
      } else {
        let Q = l.reduce((C, w) => w.markClass ? C + " " + w.markClass : C, "");
        o.add(p, O, X.mark({
          class: "cm-lintRange cm-lintRange-" + x + Q,
          diagnostics: l.slice(),
          inclusiveEnd: l.some(C => C.to > O)
        }));
      }
      a = O;
      if (a == f) {
        break;
      }
      for (let Q = 0; Q < l.length; Q++) {
        if (l[Q].to <= a) {
          l.splice(Q--, 1);
        }
      }
    }
    let u = o.finish();
    return new Jt(u, t, Bt(u));
  }
}
function Bt(n, e = null, t = 0) {
  let i = null;
  n.between(t, 1000000000, (s, r, {
    spec: o
  }) => {
    if (!e || !(o.diagnostics.indexOf(e) < 0)) {
      if (!i) {
        i = new Xh(s, r, e || o.diagnostics[0]);
      } else {
        if (o.diagnostics.indexOf(i.diagnostic) < 0) {
          return false;
        }
        i = new Xh(i.from, r, i.diagnostic);
      }
    }
  });
  return i;
}
function md(n, e) {
  let t = e.pos;
  let i = e.end || t;
  let s = n.state.facet(dt).hideOn(n, t, i);
  if (s != null) {
    return s;
  }
  let r = n.startState.doc.lineAt(e.pos);
  return !!n.effects.some(o => o.is(ir)) || !!n.changes.touchesRange(r.from, Math.max(r.to, i));
}
function pd(n, e) {
  if (n.field(Re, false)) {
    return e;
  } else {
    return e.concat(M.appendConfig.of(wd));
  }
}
function jy(n, e) {
  return {
    effects: pd(n, [ir.of(e)])
  };
}
const ir = M.define();
const Dl = M.define();
const Od = M.define();
const Re = le.define({
  create() {
    return new Jt(X.none, null, null);
  },
  update(n, e) {
    if (e.docChanged && n.diagnostics.size) {
      let t = n.diagnostics.map(e.changes);
      let i = null;
      let s = n.panel;
      if (n.selected) {
        let r = e.changes.mapPos(n.selected.from, 1);
        i = Bt(t, n.selected.diagnostic, r) || Bt(t, null, r);
      }
      if (!t.size && s && e.state.facet(dt).autoPanel) {
        s = null;
      }
      n = new Jt(t, s, i);
    }
    for (let t of e.effects) {
      if (t.is(ir)) {
        let i = e.state.facet(dt).autoPanel ? t.value.length ? On.open : null : n.panel;
        n = Jt.init(t.value, i, e.state);
      } else if (t.is(Dl)) {
        n = new Jt(n.diagnostics, t.value ? On.open : null, n.selected);
      } else if (t.is(Od)) {
        n = new Jt(n.diagnostics, n.panel, t.value);
      }
    }
    return n;
  },
  provide: n => [an.from(n, e => e.panel), v.decorations.from(n, e => e.diagnostics)]
});
const _y = X.mark({
  class: "cm-lintRange cm-lintRange-active"
});
function Fy(n, e, t) {
  let {
    diagnostics: i
  } = n.state.field(Re);
  let s;
  let r = -1;
  let o = -1;
  i.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, h, {
    spec: c
  }) => {
    if (e >= a && e <= h && (a == h || (e > a || t > 0) && (e < h || t < 0))) {
      s = c.diagnostics;
      r = a;
      o = h;
      return false;
    }
  });
  let l = n.state.facet(dt).tooltipFilter;
  if (s && l) {
    s = l(s, n.state);
  }
  if (s) {
    return {
      pos: r,
      end: o,
      above: n.state.doc.lineAt(r).to < o,
      create() {
        return {
          dom: gd(n, s)
        };
      }
    };
  } else {
    return null;
  }
}
function gd(n, e) {
  return j("ul", {
    class: "cm-tooltip-lint"
  }, e.map(t => xd(n, t, false)));
}
const Uy = n => {
  let e = n.state.field(Re, false);
  if (!e || !e.panel) {
    n.dispatch({
      effects: pd(n.state, [Dl.of(true)])
    });
  }
  let t = hl(n, On.open);
  if (t) {
    t.dom.querySelector(".cm-panel-lint ul").focus();
  }
  return true;
};
const Eh = n => {
  let e = n.state.field(Re, false);
  if (!e || !e.panel) {
    return false;
  } else {
    n.dispatch({
      effects: Dl.of(false)
    });
    return true;
  }
};
const Ll = n => {
  let e = n.state.field(Re, false);
  if (!e) {
    return false;
  }
  let t = n.state.selection.main;
  let i = Bt(e.diagnostics, null, t.to + 1);
  if (!i && (i = Bt(e.diagnostics, null, 0), !i || i.from == t.from && i.to == t.to)) {
    return false;
  } else {
    n.dispatch({
      selection: {
        anchor: i.from,
        head: i.to
      },
      scrollIntoView: true
    });
    Nf(n, i.from, 1, {
      tooltip: Bl,
      until: s => s.docChanged || s.newSelection.main.head < i.from || s.newSelection.main.head > i.to
    });
    return true;
  }
};
const bd = n => {
  let {
    state: t
  } = n;
  let i = t.field(Re, false);
  if (!i) {
    return false;
  }
  let s = t.selection.main;
  let r;
  let o;
  let l;
  let a;
  i.diagnostics.between(0, t.doc.length, (f, u) => {
    if (u < s.to && (r == null || r < f)) {
      r = f;
      o = u;
    }
    if (l == null || f > l) {
      l = f;
      a = u;
    }
  });
  if (l == null || r == null && l == s.from) {
    return false;
  }
  let h = r ?? l;
  let c = o ?? a ?? h;
  n.dispatch({
    selection: {
      anchor: h,
      head: c
    },
    scrollIntoView: true
  });
  Nf(n, h, 1, {
    tooltip: Bl,
    until: f => f.docChanged || f.newSelection.main.head < h || f.newSelection.main.head > c
  });
  return true;
};
const Hy = [{
  key: "Mod-Shift-m",
  run: Uy,
  preventDefault: true
}, {
  key: "F8",
  run: Ll
}];
const Ky = K.fromClass(class {
  constructor(n) {
    this.view = n;
    this.timeout = -1;
    this.set = true;
    let {
      delay: e
    } = n.state.facet(dt);
    this.lintTime = Date.now() + e;
    this.run = this.run.bind(this);
    this.timeout = setTimeout(this.run, e);
  }
  run() {
    clearTimeout(this.timeout);
    let n = Date.now();
    if (n < this.lintTime - 10) {
      this.timeout = setTimeout(this.run, this.lintTime - n);
    } else {
      this.set = false;
      let {
        state: e
      } = this.view;
      let {
        sources: t
      } = e.facet(dt);
      if (t.length) {
        Jy(t.map(i => Promise.resolve(i(this.view))), i => {
          if (this.view.state.doc == e.doc) {
            this.view.dispatch(jy(this.view.state, i.reduce((s, r) => s.concat(r))));
          }
        }, i => {
          $e(this.view.state, i);
        });
      }
    }
  }
  update(n) {
    let e = n.state.facet(dt);
    if (n.docChanged || e != n.startState.facet(dt) || e.needsRefresh && e.needsRefresh(n)) {
      this.lintTime = Date.now() + e.delay;
      if (!this.set) {
        this.set = true;
        this.timeout = setTimeout(this.run, e.delay);
      }
    }
  }
  force() {
    if (this.set) {
      this.lintTime = Date.now();
      this.run();
    }
  }
  destroy() {
    clearTimeout(this.timeout);
  }
});
function Jy(n, e, t) {
  let i = [];
  let s = -1;
  for (let r of n) {
    r.then(o => {
      i.push(o);
      clearTimeout(s);
      if (i.length == n.length) {
        e(i);
      } else {
        s = setTimeout(() => e(i), 200);
      }
    }, t);
  }
}
const dt = T.define({
  combine(n) {
    return {
      sources: n.map(e => e.source).filter(e => e != null),
      ...Je(n.map(e => e.config), {
        delay: 750,
        markerFilter: null,
        tooltipFilter: null,
        needsRefresh: null,
        hideOn: () => null
      }, {
        delay: Math.max,
        markerFilter: Ah,
        tooltipFilter: Ah,
        needsRefresh: (e, t) => e ? t ? i => e(i) || t(i) : e : t,
        hideOn: (e, t) => e ? t ? (i, s, r) => e(i, s, r) || t(i, s, r) : e : t,
        autoPanel: (e, t) => e || t
      })
    };
  }
});
function Ah(n, e) {
  if (n) {
    if (e) {
      return (t, i) => e(n(t, i), i);
    } else {
      return n;
    }
  } else {
    return e;
  }
}
function Do(n, e = {}) {
  return [dt.of({
    source: n,
    config: e
  }), Ky, wd];
}
function yd(n) {
  let e = [];
  if (n) {
    e: for (let {
      name: t
    } of n) {
      for (let i = 0; i < t.length; i++) {
        let s = t[i];
        if (/[a-zA-Z]/.test(s) && !e.some(r => r.toLowerCase() == s.toLowerCase())) {
          e.push(s);
          continue e;
        }
      }
      e.push("");
    }
  }
  return e;
}
function xd(n, e, t) {
  var i;
  let s = t ? yd(e.actions) : [];
  return j("li", {
    class: "cm-diagnostic cm-diagnostic-" + e.severity
  }, j("span", {
    class: "cm-diagnosticText"
  }, e.renderMessage ? e.renderMessage(n) : e.message), (i = e.actions) === null || i === undefined ? undefined : i.map((r, o) => {
    let l = false;
    let a = d => {
      d.preventDefault();
      if (l) {
        return;
      }
      l = true;
      let m = Bt(n.state.field(Re).diagnostics, e);
      if (m) {
        r.apply(n, m.from, m.to);
      }
    };
    let {
      name: h
    } = r;
    let c = s[o] ? h.indexOf(s[o]) : -1;
    let f = c < 0 ? h : [h.slice(0, c), j("u", h.slice(c, c + 1)), h.slice(c + 1)];
    let u = r.markClass ? " " + r.markClass : "";
    return j("button", {
      type: "button",
      class: "cm-diagnosticAction" + u,
      onclick: a,
      onmousedown: a,
      "aria-label": ` Action: ${h}${c < 0 ? "" : ` (access key "${s[o]})"`}.`
    }, f);
  }), e.source && j("div", {
    class: "cm-diagnosticSource"
  }, e.source));
}
class e1 extends _e {
  constructor(e) {
    super();
    this.sev = e;
  }
  eq(e) {
    return e.sev == this.sev;
  }
  toDOM() {
    return j("span", {
      class: "cm-lintPoint cm-lintPoint-" + this.sev
    });
  }
}
class Ph {
  constructor(e, t) {
    this.diagnostic = t;
    this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16);
    this.dom = xd(e, t, true);
    this.dom.id = this.id;
    this.dom.setAttribute("role", "option");
  }
}
class On {
  constructor(e) {
    this.view = e;
    this.items = [];
    let t = s => {
      if (!s.ctrlKey && !s.altKey && !s.metaKey) {
        if (s.keyCode == 27) {
          Eh(this.view);
          this.view.focus();
        } else if (s.keyCode == 38 || s.keyCode == 33) {
          this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
        } else if (s.keyCode == 40 || s.keyCode == 34) {
          this.moveSelection((this.selectedIndex + 1) % this.items.length);
        } else if (s.keyCode == 36) {
          this.moveSelection(0);
        } else if (s.keyCode == 35) {
          this.moveSelection(this.items.length - 1);
        } else if (s.keyCode == 13) {
          this.view.focus();
        } else if (s.keyCode >= 65 && s.keyCode <= 90 && this.selectedIndex >= 0) {
          let {
            diagnostic: r
          } = this.items[this.selectedIndex];
          let o = yd(r.actions);
          for (let l = 0; l < o.length; l++) {
            if (o[l].toUpperCase().charCodeAt(0) == s.keyCode) {
              let a = Bt(this.view.state.field(Re).diagnostics, r);
              if (a) {
                r.actions[l].apply(e, a.from, a.to);
              }
            }
          }
        } else {
          return;
        }
        s.preventDefault();
      }
    };
    let i = s => {
      for (let r = 0; r < this.items.length; r++) {
        if (this.items[r].dom.contains(s.target)) {
          this.moveSelection(r);
        }
      }
    };
    this.list = j("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: t,
      onclick: i
    });
    this.dom = j("div", {
      class: "cm-panel-lint"
    }, this.list, j("button", {
      type: "button",
      name: "close",
      "aria-label": this.view.state.phrase("close"),
      onclick: () => Eh(this.view)
    }, "×"));
    this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(Re).selected;
    if (!e) {
      return -1;
    }
    for (let t = 0; t < this.items.length; t++) {
      if (this.items[t].diagnostic == e.diagnostic) {
        return t;
      }
    }
    return -1;
  }
  update() {
    let {
      diagnostics: e,
      selected: t
    } = this.view.state.field(Re);
    let i = 0;
    let s = false;
    let r = null;
    let o = new Set();
    for (e.between(0, this.view.state.doc.length, (l, a, {
      spec: h
    }) => {
      for (let c of h.diagnostics) {
        if (o.has(c)) {
          continue;
        }
        o.add(c);
        let f = -1;
        let u;
        for (let d = i; d < this.items.length; d++) {
          if (this.items[d].diagnostic == c) {
            f = d;
            break;
          }
        }
        if (f < 0) {
          u = new Ph(this.view, c);
          this.items.splice(i, 0, u);
          s = true;
        } else {
          u = this.items[f];
          if (f > i) {
            this.items.splice(i, f - i);
            s = true;
          }
        }
        if (t && u.diagnostic == t.diagnostic) {
          if (!u.dom.hasAttribute("aria-selected")) {
            u.dom.setAttribute("aria-selected", "true");
            r = u;
          }
        } else if (u.dom.hasAttribute("aria-selected")) {
          u.dom.removeAttribute("aria-selected");
        }
        i++;
      }
    }); i < this.items.length && (this.items.length != 1 || !(this.items[0].diagnostic.from < 0));) {
      s = true;
      this.items.pop();
    }
    if (this.items.length == 0) {
      this.items.push(new Ph(this.view, {
        from: -1,
        to: -1,
        severity: "info",
        message: this.view.state.phrase("No diagnostics")
      }));
      s = true;
    }
    if (r) {
      this.list.setAttribute("aria-activedescendant", r.id);
      this.view.requestMeasure({
        key: this,
        read: () => ({
          sel: r.dom.getBoundingClientRect(),
          panel: this.list.getBoundingClientRect()
        }),
        write: ({
          sel: l,
          panel: a
        }) => {
          let h = a.height / this.list.offsetHeight;
          if (l.top < a.top) {
            this.list.scrollTop -= (a.top - l.top) / h;
          } else if (l.bottom > a.bottom) {
            this.list.scrollTop += (l.bottom - a.bottom) / h;
          }
        }
      });
    } else if (this.selectedIndex < 0) {
      this.list.removeAttribute("aria-activedescendant");
    }
    if (s) {
      this.sync();
    }
  }
  sync() {
    let e = this.list.firstChild;
    function t() {
      let i = e;
      e = i.nextSibling;
      i.remove();
    }
    for (let i of this.items) {
      if (i.dom.parentNode == this.list) {
        while (e != i.dom) {
          t();
        }
        e = i.dom.nextSibling;
      } else {
        this.list.insertBefore(i.dom, e);
      }
    }
    while (e) {
      t();
    }
  }
  moveSelection(e) {
    if (this.selectedIndex < 0) {
      return;
    }
    let t = this.view.state.field(Re);
    let i = Bt(t.diagnostics, this.items[e].diagnostic);
    if (i) {
      this.view.dispatch({
        selection: {
          anchor: i.from,
          head: i.to
        },
        scrollIntoView: true,
        effects: Od.of(i)
      });
    }
  }
  static open(e) {
    return new On(e);
  }
}
function ls(n, e = "viewBox=\"0 0 40 40\"") {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(n)}</svg>')`;
}
function _n(n) {
  return ls(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${n}" fill="none" stroke-width=".7"/>`, "width=\"6\" height=\"3\"");
}
const t1 = v.baseTheme({
  ".cm-diagnostic": {
    padding: "3px 6px 3px 8px",
    marginLeft: "-1px",
    display: "block",
    whiteSpace: "pre-wrap"
  },
  ".cm-diagnostic-error": {
    borderLeft: "5px solid #d11"
  },
  ".cm-diagnostic-warning": {
    borderLeft: "5px solid orange"
  },
  ".cm-diagnostic-info": {
    borderLeft: "5px solid #999"
  },
  ".cm-diagnostic-hint": {
    borderLeft: "5px solid #66d"
  },
  ".cm-diagnosticAction": {
    font: "inherit",
    border: "none",
    padding: "2px 4px",
    backgroundColor: "#444",
    color: "white",
    borderRadius: "3px",
    marginLeft: "8px",
    cursor: "pointer"
  },
  ".cm-diagnosticSource": {
    fontSize: "70%",
    opacity: 0.7
  },
  ".cm-lintRange": {
    backgroundPosition: "left bottom",
    backgroundRepeat: "repeat-x",
    paddingBottom: "0.7px"
  },
  ".cm-lintRange-error": {
    backgroundImage: _n("#f11")
  },
  ".cm-lintRange-warning": {
    backgroundImage: _n("orange")
  },
  ".cm-lintRange-info": {
    backgroundImage: _n("#999")
  },
  ".cm-lintRange-hint": {
    backgroundImage: _n("#66d")
  },
  ".cm-lintRange-active": {
    backgroundColor: "#ffdd9980"
  },
  ".cm-tooltip-lint": {
    padding: 0,
    margin: 0
  },
  ".cm-lintPoint": {
    position: "relative",
    "&:after": {
      content: "\"\"",
      position: "absolute",
      bottom: 0,
      left: "-2px",
      borderLeft: "3px solid transparent",
      borderRight: "3px solid transparent",
      borderBottom: "4px solid #d11"
    }
  },
  ".cm-lintPoint-warning": {
    "&:after": {
      borderBottomColor: "orange"
    }
  },
  ".cm-lintPoint-info": {
    "&:after": {
      borderBottomColor: "#999"
    }
  },
  ".cm-lintPoint-hint": {
    "&:after": {
      borderBottomColor: "#66d"
    }
  },
  ".cm-panel.cm-panel-lint": {
    position: "relative",
    "& ul": {
      maxHeight: "100px",
      overflowY: "auto",
      "& [aria-selected]": {
        backgroundColor: "#ddd",
        "& u": {
          textDecoration: "underline"
        }
      },
      "&:focus [aria-selected]": {
        background_fallback: "#bdf",
        backgroundColor: "Highlight",
        color_fallback: "white",
        color: "HighlightText"
      },
      "& u": {
        textDecoration: "none"
      },
      padding: 0,
      margin: 0
    },
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "2px",
      background: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    }
  },
  "&dark .cm-lintRange-active": {
    backgroundColor: "#86714a80"
  },
  "&dark .cm-panel.cm-panel-lint ul": {
    "& [aria-selected]": {
      backgroundColor: "#2e343e"
    }
  }
});
function i1(n) {
  if (n == "error") {
    return 4;
  } else if (n == "warning") {
    return 3;
  } else if (n == "info") {
    return 2;
  } else {
    return 1;
  }
}
function Qd(n) {
  let e = "hint";
  let t = 1;
  for (let i of n) {
    let s = i1(i.severity);
    if (s > t) {
      t = s;
      e = i.severity;
    }
  }
  return e;
}
class Sd extends pt {
  constructor(e) {
    super();
    this.diagnostics = e;
    this.severity = Qd(e);
  }
  toDOM(e) {
    let t = document.createElement("div");
    t.className = "cm-lint-marker cm-lint-marker-" + this.severity;
    let i = this.diagnostics;
    let s = e.state.facet(nr).tooltipFilter;
    if (s) {
      i = s(i, e.state);
    }
    if (i.length) {
      t.onmouseover = () => s1(e, t, i);
    }
    return t;
  }
}
function n1(n, e) {
  let t = i => {
    let s = e.getBoundingClientRect();
    if (!(i.clientX > s.left - 10) || !(i.clientX < s.right + 10) || !(i.clientY > s.top - 10) || !(i.clientY < s.bottom + 10)) {
      for (let r = i.target; r; r = r.parentNode) {
        if (r.nodeType == 1 && r.classList.contains("cm-tooltip-lint")) {
          return;
        }
      }
      window.removeEventListener("mousemove", t);
      if (n.state.field(kd)) {
        n.dispatch({
          effects: Nl.of(null)
        });
      }
    }
  };
  window.addEventListener("mousemove", t);
}
function s1(n, e, t) {
  function i() {
    let o = n.elementAtHeight(e.getBoundingClientRect().top + 5 - n.documentTop);
    if (n.coordsAtPos(o.from)) {
      n.dispatch({
        effects: Nl.of({
          pos: o.from,
          above: false,
          clip: false,
          create() {
            return {
              dom: gd(n, t),
              getCoords: () => e.getBoundingClientRect()
            };
          }
        })
      });
    }
    e.onmouseout = e.onmousemove = null;
    n1(n, e);
  }
  let {
    hoverTime: s
  } = n.state.facet(nr);
  let r = setTimeout(i, s);
  e.onmouseout = () => {
    clearTimeout(r);
    e.onmouseout = e.onmousemove = null;
  };
  e.onmousemove = () => {
    clearTimeout(r);
    r = setTimeout(i, s);
  };
}
function r1(n, e) {
  let t = Object.create(null);
  for (let s of e) {
    let r = n.lineAt(s.from);
    (t[r.from] ||= []).push(s);
  }
  let i = [];
  for (let s in t) {
    i.push(new Sd(t[s]).range(+s));
  }
  return L.of(i, true);
}
const o1 = Zf({
  class: "cm-gutter-lint",
  markers: n => n.state.field(Lo),
  widgetMarker: (n, e, t) => {
    let i = [];
    n.state.field(Lo).between(t.from, t.to, (s, r, o) => {
      if (s > t.from && s < t.to) {
        i.push(...o.diagnostics);
      }
    });
    if (i.length) {
      return new Sd(i);
    } else {
      return null;
    }
  }
});
const Lo = le.define({
  create() {
    return L.empty;
  },
  update(n, e) {
    n = n.map(e.changes);
    let t = e.state.facet(nr).markerFilter;
    for (let i of e.effects) {
      if (i.is(ir)) {
        let s = i.value;
        if (t) {
          s = t(s || [], e.state);
        }
        n = r1(e.state.doc, s.slice(0));
      }
    }
    return n;
  }
});
const Nl = M.define();
const kd = le.define({
  create() {
    return null;
  },
  update(n, e) {
    if (n && e.docChanged) {
      n = md(e, n) ? null : {
        ...n,
        pos: e.changes.mapPos(n.pos)
      };
    }
    return e.effects.reduce((t, i) => i.is(Nl) ? i.value : t, n);
  },
  provide: n => js.from(n)
});
const l1 = v.baseTheme({
  ".cm-gutter-lint": {
    width: "1.4em",
    "& .cm-gutterElement": {
      padding: ".2em"
    }
  },
  ".cm-lint-marker": {
    width: "1em",
    height: "1em"
  },
  ".cm-lint-marker-info": {
    content: ls("<path fill=\"#aaf\" stroke=\"#77e\" stroke-width=\"6\" stroke-linejoin=\"round\" d=\"M5 5L35 5L35 35L5 35Z\"/>")
  },
  ".cm-lint-marker-warning": {
    content: ls("<path fill=\"#fe8\" stroke=\"#fd7\" stroke-width=\"6\" stroke-linejoin=\"round\" d=\"M20 6L37 35L3 35Z\"/>")
  },
  ".cm-lint-marker-error": {
    content: ls("<circle cx=\"20\" cy=\"20\" r=\"15\" fill=\"#f87\" stroke=\"#f43\" stroke-width=\"6\"/>")
  }
});
const Bl = al(Fy, {
  hideOn: md
});
const wd = [Re, v.decorations.compute([Re], n => {
  let {
    selected: e,
    panel: t
  } = n.field(Re);
  if (!e || !t || e.from == e.to) {
    return X.none;
  } else {
    return X.set([_y.range(e.from, e.to)]);
  }
}), Bl, t1];
const nr = T.define({
  combine(n) {
    return Je(n, {
      hoverTime: 300,
      markerFilter: null,
      tooltipFilter: null
    });
  }
});
function a1(n = {}) {
  return [nr.of(n), Lo, o1, l1, kd];
}
function Mh(e = {}) {
  var t = e;
  var i = t.crosshairCursor;
  var s = i === undefined ? false : i;
  var r = [];
  if (e.closeBracketsKeymap !== false) {
    r = r.concat(Ly);
  }
  if (e.defaultKeymap !== false) {
    r = r.concat(Q0);
  }
  if (e.searchKeymap !== false) {
    r = r.concat(_0);
  }
  if (e.historyKeymap !== false) {
    r = r.concat($b);
  }
  if (e.foldKeymap !== false) {
    r = r.concat(Ig);
  }
  if (e.completionKeymap !== false) {
    r = r.concat(Wl);
  }
  if (e.lintKeymap !== false) {
    r = r.concat(Hy);
  }
  var o = [];
  if (e.lineNumbers !== false) {
    o.push(ig());
  }
  if (e.highlightActiveLineGutter !== false) {
    o.push(rg());
  }
  if (e.highlightSpecialChars !== false) {
    o.push(xO());
  }
  if (e.history !== false) {
    o.push(yb());
  }
  if (e.foldGutter !== false) {
    o.push(_g());
  }
  if (e.drawSelection !== false) {
    o.push(hO());
  }
  if (e.dropCursor !== false) {
    o.push(mO());
  }
  if (e.allowMultipleSelections !== false) {
    o.push(Y.allowMultipleSelections.of(true));
  }
  if (e.indentOnInput !== false) {
    o.push(Vg());
  }
  if (e.syntaxHighlighting !== false) {
    o.push(Ol(mu, {
      fallback: true
    }));
  }
  if (e.bracketMatching !== false) {
    o.push(bu());
  }
  if (e.closeBrackets !== false) {
    o.push(cd());
  }
  if (e.autocompletion !== false) {
    o.push(Vl());
  }
  if (e.rectangularSelection !== false) {
    o.push(MO());
  }
  if (s !== false) {
    o.push(WO());
  }
  if (e.highlightActiveLine !== false) {
    o.push(CO());
  }
  if (e.highlightSelectionMatches !== false) {
    o.push(q0());
  }
  if (e.tabSize && typeof e.tabSize == "number") {
    o.push(xn.of(" ".repeat(e.tabSize)));
  }
  return o.concat([Yt.of(r.flat())]).filter(Boolean);
}
const h1 = "#e5c07b";
const Rh = "#e06c75";
const c1 = "#56b6c2";
const f1 = "#ffffff";
const as = "#abb2bf";
const No = "#7d8799";
const u1 = "#61afef";
const d1 = "#98c379";
const Vh = "#d19a66";
const m1 = "#c678dd";
const p1 = "#21252b";
const Wh = "#2c313a";
const Dh = "#282c34";
const Mr = "#353a42";
const O1 = "#3E4451";
const Lh = "#528bff";
const g1 = v.theme({
  "&": {
    color: as,
    backgroundColor: Dh
  },
  ".cm-content": {
    caretColor: Lh
  },
  ".cm-cursor, .cm-dropCursor": {
    borderLeftColor: Lh
  },
  "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
    backgroundColor: O1
  },
  ".cm-panels": {
    backgroundColor: p1,
    color: as
  },
  ".cm-panels.cm-panels-top": {
    borderBottom: "2px solid black"
  },
  ".cm-panels.cm-panels-bottom": {
    borderTop: "2px solid black"
  },
  ".cm-searchMatch": {
    backgroundColor: "#72a1ff59",
    outline: "1px solid #457dff"
  },
  ".cm-searchMatch.cm-searchMatch-selected": {
    backgroundColor: "#6199ff2f"
  },
  ".cm-activeLine": {
    backgroundColor: "#6699ff0b"
  },
  ".cm-selectionMatch": {
    backgroundColor: "#aafe661a"
  },
  "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
    backgroundColor: "#bad0f847"
  },
  ".cm-gutters": {
    backgroundColor: Dh,
    color: No,
    border: "none"
  },
  ".cm-activeLineGutter": {
    backgroundColor: Wh
  },
  ".cm-foldPlaceholder": {
    backgroundColor: "transparent",
    border: "none",
    color: "#ddd"
  },
  ".cm-tooltip": {
    border: "none",
    backgroundColor: Mr
  },
  ".cm-tooltip .cm-tooltip-arrow:before": {
    borderTopColor: "transparent",
    borderBottomColor: "transparent"
  },
  ".cm-tooltip .cm-tooltip-arrow:after": {
    borderTopColor: Mr,
    borderBottomColor: Mr
  },
  ".cm-tooltip-autocomplete": {
    "& > ul > li[aria-selected]": {
      backgroundColor: Wh,
      color: as
    }
  }
}, {
  dark: true
});
const vd = Sn.define([{
  tag: g.keyword,
  color: m1
}, {
  tag: [g.name, g.deleted, g.character, g.propertyName, g.macroName],
  color: Rh
}, {
  tag: [g.function(g.variableName), g.labelName],
  color: u1
}, {
  tag: [g.color, g.constant(g.name), g.standard(g.name)],
  color: Vh
}, {
  tag: [g.definition(g.name), g.separator],
  color: as
}, {
  tag: [g.typeName, g.className, g.number, g.changed, g.annotation, g.modifier, g.self, g.namespace],
  color: h1
}, {
  tag: [g.operator, g.operatorKeyword, g.url, g.escape, g.regexp, g.link, g.special(g.string)],
  color: c1
}, {
  tag: [g.meta, g.comment],
  color: No
}, {
  tag: g.strong,
  fontWeight: "bold"
}, {
  tag: g.emphasis,
  fontStyle: "italic"
}, {
  tag: g.strikethrough,
  textDecoration: "line-through"
}, {
  tag: g.link,
  color: No,
  textDecoration: "underline"
}, {
  tag: g.heading,
  fontWeight: "bold",
  color: Rh
}, {
  tag: [g.atom, g.bool, g.special(g.variableName)],
  color: Vh
}, {
  tag: [g.processingInstruction, g.string, g.inserted],
  color: d1
}, {
  tag: g.invalid,
  color: f1
}]);
const b1 = [g1, Ol(vd)];
var y1 = v.theme({
  "&": {
    backgroundColor: "#fff"
  }
}, {
  dark: false
});
function x1(e = {}) {
  var t = e;
  var i = t.indentWithTab;
  var s = i === undefined ? true : i;
  var r = t.editable;
  var o = r === undefined ? true : r;
  var l = t.readOnly;
  var a = l === undefined ? false : l;
  var h = t.theme;
  var c = h === undefined ? "light" : h;
  var f = t.placeholder;
  var u = f === undefined ? "" : f;
  var d = t.basicSetup;
  var m = d === undefined ? true : d;
  var p = [];
  if (s) {
    p.unshift(Yt.of([S0]));
  }
  if (m) {
    if (typeof m == "boolean") {
      p.unshift(Mh());
    } else {
      p.unshift(Mh(m));
    }
  }
  if (u) {
    p.unshift(XO(u));
  }
  switch (c) {
    case "light":
      p.push(y1);
      break;
    case "dark":
      p.push(b1);
      break;
    case "none":
      break;
    default:
      p.push(c);
      break;
  }
  if (o === false) {
    p.push(v.editable.of(false));
  }
  if (a) {
    p.push(Y.readOnly.of(true));
  }
  return [...p];
}
var Q1 = n => ({
  line: n.state.doc.lineAt(n.state.selection.main.from),
  lineCount: n.state.doc.lines,
  lineBreak: n.state.lineBreak,
  length: n.state.doc.length,
  readOnly: n.state.readOnly,
  tabSize: n.state.tabSize,
  selection: n.state.selection,
  selectionAsSingle: n.state.selection.asSingle().main,
  ranges: n.state.selection.ranges,
  selectionCode: n.state.sliceDoc(n.state.selection.main.from, n.state.selection.main.to),
  selections: n.state.selection.ranges.map(e => n.state.sliceDoc(e.from, e.to)),
  selectedText: n.state.selection.ranges.some(e => !e.empty)
});
class S1 {
  constructor(e, t) {
    this.timeLeftMS = undefined;
    this.timeoutMS = undefined;
    this.isCancelled = false;
    this.isTimeExhausted = false;
    this.callbacks = [];
    this.timeLeftMS = t;
    this.timeoutMS = t;
    this.callbacks.push(e);
  }
  tick() {
    if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
      this.isTimeExhausted = true;
      var e = this.callbacks.slice();
      this.callbacks.length = 0;
      e.forEach(t => {
        try {
          t();
        } catch (i) {
          console.error("TimeoutLatch callback error:", i);
        }
      });
    }
  }
  cancel() {
    this.isCancelled = true;
    this.callbacks.length = 0;
  }
  reset() {
    this.timeLeftMS = this.timeoutMS;
    this.isCancelled = false;
    this.isTimeExhausted = false;
  }
  get isDone() {
    return this.isCancelled || this.isTimeExhausted;
  }
}
class Nh {
  constructor() {
    this.interval = null;
    this.latches = new Set();
  }
  add(e) {
    this.latches.add(e);
    this.start();
  }
  remove(e) {
    this.latches.delete(e);
    if (this.latches.size === 0) {
      this.stop();
    }
  }
  start() {
    if (this.interval === null) {
      this.interval = setInterval(() => {
        this.latches.forEach(e => {
          e.tick();
          if (e.isDone) {
            this.remove(e);
          }
        });
      }, 1);
    }
  }
  stop() {
    if (this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}
var Rr = null;
var k1 = () => typeof window === "undefined" ? new Nh() : (Rr ||= new Nh(), Rr);
var Bh = Ot.define();
var w1 = 200;
var v1 = [];
function C1(n) {
  var e = n.value;
  var t = n.selection;
  var i = n.onChange;
  var s = n.onStatistics;
  var r = n.onCreateEditor;
  var o = n.onUpdate;
  var l = n.extensions;
  var a = l === undefined ? v1 : l;
  var h = n.autoFocus;
  var c = n.theme;
  var f = c === undefined ? "light" : c;
  var u = n.height;
  var d = u === undefined ? null : u;
  var m = n.minHeight;
  var p = m === undefined ? null : m;
  var O = n.maxHeight;
  var b = O === undefined ? null : O;
  var x = n.width;
  var Q = x === undefined ? null : x;
  var C = n.minWidth;
  var w = C === undefined ? null : C;
  var S = n.maxWidth;
  var k = S === undefined ? null : S;
  var A = n.placeholder;
  var R = A === undefined ? "" : A;
  var B = n.editable;
  var V = B === undefined ? true : B;
  var E = n.readOnly;
  var W = E === undefined ? false : E;
  var D = n.indentWithTab;
  var G = D === undefined ? true : D;
  var J = n.basicSetup;
  var ne = J === undefined ? true : J;
  var me = n.root;
  var U = n.initialState;
  var ae = P.useState();
  var he = ae[0];
  var pe = ae[1];
  var ke = P.useState();
  var z = ke[0];
  var we = ke[1];
  var gt = P.useState();
  var vt = gt[0];
  var Ri = gt[1];
  var De = P.useState(() => ({
    current: null
  }))[0];
  var ai = P.useState(() => ({
    current: null
  }))[0];
  var Z = v.theme({
    "&": {
      height: d,
      minHeight: p,
      maxHeight: b,
      width: Q,
      minWidth: w,
      maxWidth: k
    },
    "& .cm-scroller": {
      height: "100% !important"
    }
  });
  var Oe = v.updateListener.of(it => {
    if (it.docChanged && typeof i == "function" && !it.transactions.some(rr => rr.annotation(Bh))) {
      if (De.current) {
        De.current.reset();
      } else {
        De.current = new S1(() => {
          if (ai.current) {
            var rr = ai.current;
            ai.current = null;
            rr();
          }
          De.current = null;
        }, w1);
        k1().add(De.current);
      }
      var jt = it.state.doc;
      var _t = jt.toString();
      i(_t, it);
    }
    if (s) {
      s(Q1(it));
    }
  });
  var zt = x1({
    theme: f,
    editable: V,
    readOnly: W,
    placeholder: R,
    indentWithTab: G,
    basicSetup: ne
  });
  var Ct = [Oe, Z, ...zt];
  if (o && typeof o == "function") {
    Ct.push(v.updateListener.of(o));
  }
  Ct = Ct.concat(a);
  P.useLayoutEffect(() => {
    if (he && !vt) {
      var it = {
        doc: e,
        selection: t,
        extensions: Ct
      };
      var jt = U ? Y.fromJSON(U.json, it, U.fields) : Y.create(it);
      Ri(jt);
      if (!z) {
        var _t = new v({
          state: jt,
          parent: he,
          root: me
        });
        we(_t);
        if (r) {
          r(_t, jt);
        }
      }
    }
    return () => {
      if (z) {
        Ri(undefined);
        we(undefined);
      }
    };
  }, [he, vt]);
  P.useEffect(() => {
    if (n.container) {
      pe(n.container);
    }
  }, [n.container]);
  P.useEffect(() => () => {
    if (z) {
      z.destroy();
      we(undefined);
    }
    if (De.current) {
      De.current.cancel();
      De.current = null;
    }
  }, [z]);
  P.useEffect(() => {
    if (h && z) {
      z.focus();
    }
  }, [h, z]);
  P.useEffect(() => {
    if (z) {
      z.dispatch({
        effects: M.reconfigure.of(Ct)
      });
    }
  }, [f, a, d, p, b, Q, w, k, R, V, W, G, ne, i, o]);
  P.useEffect(() => {
    if (e !== undefined) {
      var it = z ? z.state.doc.toString() : "";
      if (z && e !== it) {
        var jt = De.current && !De.current.isDone;
        var _t = () => {
          if (z && e !== z.state.doc.toString()) {
            z.dispatch({
              changes: {
                from: 0,
                to: z.state.doc.toString().length,
                insert: e || ""
              },
              annotations: [Bh.of(true)]
            });
          }
        };
        if (jt) {
          ai.current = _t;
        } else {
          _t();
        }
      }
    }
  }, [e, z]);
  return {
    state: vt,
    setState: Ri,
    view: z,
    setView: we,
    container: he,
    setContainer: pe
  };
}
var q1 = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"];
var Cd = P.forwardRef((n, e) => {
  var t = n.className;
  var i = n.value;
  var s = i === undefined ? "" : i;
  var r = n.selection;
  var o = n.extensions;
  var l = o === undefined ? [] : o;
  var a = n.onChange;
  var h = n.onStatistics;
  var c = n.onCreateEditor;
  var f = n.onUpdate;
  var u = n.autoFocus;
  var d = n.theme;
  var m = d === undefined ? "light" : d;
  var p = n.height;
  var O = n.minHeight;
  var b = n.maxHeight;
  var x = n.width;
  var Q = n.minWidth;
  var C = n.maxWidth;
  var w = n.basicSetup;
  var S = n.placeholder;
  var k = n.indentWithTab;
  var A = n.editable;
  var R = n.readOnly;
  var B = n.root;
  var V = n.initialState;
  var E = Bd(n, q1);
  var W = P.useRef(null);
  var D = C1({
    root: B,
    value: s,
    autoFocus: u,
    theme: m,
    height: p,
    minHeight: O,
    maxHeight: b,
    width: x,
    minWidth: Q,
    maxWidth: C,
    basicSetup: w,
    placeholder: S,
    indentWithTab: k,
    editable: A,
    readOnly: R,
    selection: r,
    onChange: a,
    onStatistics: h,
    onCreateEditor: c,
    onUpdate: f,
    extensions: l,
    initialState: V
  });
  var G = D.state;
  var J = D.view;
  var ne = D.container;
  var me = D.setContainer;
  P.useImperativeHandle(e, () => ({
    editor: W.current,
    state: G,
    view: J
  }), [W, ne, G, J]);
  var U = P.useCallback(he => {
    W.current = he;
    me(he);
  }, [me]);
  if (typeof s != "string") {
    throw new Error("value must be typeof string but got " + typeof s);
  }
  var ae = typeof m == "string" ? "cm-theme-" + m : "cm-theme";
  return ue.jsx("div", Yd({
    ref: U,
    className: "" + ae + (t ? " " + t : "")
  }, E));
});
Cd.displayName = "CodeMirror";
const qd = {
  history: xb,
  folds: Nt
};
const hs = n => {
  if (n.trim().length === 0) {
    throw new Error("LaTeX editor session file id must not be blank.");
  }
};
const Yh = n => {
  if (!n || typeof n != "object") {
    return null;
  }
  const e = n;
  if (typeof e.doc == "string") {
    return e.doc;
  } else {
    return null;
  }
};
const T1 = (n, e) => {
  hs(n);
  const t = e.state.doc.toString();
  return {
    schemaVersion: 1,
    fileId: n,
    sourceFingerprint: yc(t),
    editorState: e.state.toJSON(qd),
    scrollLeft: e.scrollDOM.scrollLeft,
    scrollTop: e.scrollDOM.scrollTop,
    capturedAt: Date.now()
  };
};
const $1 = n => n ? {
  json: n.editorState,
  fields: qd
} : undefined;
const X1 = (n, e) => {
  if (!e) {
    return () => {};
  }
  const t = window.requestAnimationFrame(() => {
    n.scrollDOM.scrollLeft = e.scrollLeft;
    n.scrollDOM.scrollTop = e.scrollTop;
  });
  return () => {
    window.cancelAnimationFrame(t);
  };
};
const E1 = ({
  maxEntries: n = 24
} = {}) => {
  if (!Number.isInteger(n) || n < 1) {
    throw new Error("LaTeX editor session cache size must be a positive integer.");
  }
  const e = new Map();
  const t = (l, a) => {
    hs(l);
    const h = e.get(l);
    if (h) {
      if (h.sourceFingerprint === yc(a) && Yh(h.editorState) === a) {
        e.delete(l);
        e.set(l, h);
        return h;
      } else {
        e.delete(l);
        return null;
      }
    } else {
      return null;
    }
  };
  const i = l => {
    hs(l.fileId);
    if (l.schemaVersion !== 1 || !Number.isFinite(l.scrollLeft) || !Number.isFinite(l.scrollTop) || !Number.isFinite(l.capturedAt) || Yh(l.editorState) === null) {
      throw new Error("Cannot cache an invalid LaTeX editor session.");
    }
    e.delete(l.fileId);
    e.set(l.fileId, l);
    while (e.size > n) {
      const a = e.keys().next().value;
      if (typeof a != "string") {
        throw new Error("Could not evict the oldest LaTeX editor session.");
      }
      e.delete(a);
    }
  };
  return {
    read: t,
    write: i,
    capture: (l, a) => {
      const h = T1(l, a);
      i(h);
      return h;
    },
    remove: l => {
      hs(l);
      e.delete(l);
    },
    clear: () => {
      e.clear();
    }
  };
};
const A1 = E1();
const P1 = 750;
const M1 = 1000;
const Gh = n => n instanceof Error ? n : new Error("Could not preserve the LaTeX editor session.");
const R1 = ({
  fileId: n,
  source: e,
  cache: t = A1,
  captureDelayMs: i = P1,
  onCreateEditor: s,
  onError: r
}) => {
  if (!Number.isFinite(i) || i < 0) {
    throw new Error("LaTeX editor session capture delay must be a non-negative number.");
  }
  const o = P.useRef(e);
  o.current = e;
  const l = P.useMemo(() => n ? t.read(n, o.current) : null, [t, n]);
  const a = P.useMemo(() => $1(l), [l]);
  const [h, c] = P.useState(null);
  const f = P.useRef(null);
  const u = P.useRef(null);
  const d = P.useRef(null);
  const m = P.useRef(s);
  const p = P.useRef(r);
  m.current = s;
  p.current = r;
  const O = P.useCallback(() => {
    var S;
    if ((S = u.current) != null) {
      S.call(u);
    }
    u.current = null;
  }, []);
  const b = P.useCallback(S => {
    var A;
    const k = Gh(S);
    c(k);
    if ((A = p.current) != null) {
      A.call(p, k);
    }
    return k;
  }, []);
  const x = P.useCallback(() => {
    O();
    const S = f.current;
    if (!n || !S) {
      return null;
    }
    try {
      const k = t.capture(n, S);
      c(null);
      return k;
    } catch (k) {
      throw b(k);
    }
  }, [t, O, n, b]);
  const Q = P.useCallback(S => {
    var k;
    var A;
    f.current = S;
    if ((k = d.current) != null) {
      k.call(d);
    }
    d.current = X1(S, l);
    if ((A = m.current) != null) {
      A.call(m, S);
    }
  }, [l]);
  const C = P.useCallback(S => {
    f.current = S.view;
    if (!!n && (!!S.docChanged || !!S.selectionSet || !!S.viewportChanged || S.transactions.length !== 0)) {
      O();
      u.current = Io(() => {
        u.current = null;
        try {
          t.capture(n, S.view);
          c(null);
        } catch (k) {
          b(k);
        }
      }, i, M1);
    }
  }, [t, O, i, n, b]);
  const w = P.useCallback(() => {
    O();
    if (n) {
      t.remove(n);
      c(null);
    }
  }, [t, O, n]);
  P.useEffect(() => () => {
    var k;
    O();
    if ((k = d.current) != null) {
      k.call(d);
    }
    d.current = null;
    const S = f.current;
    if (!!n && !!S) {
      try {
        t.capture(n, S);
      } catch (A) {
        const R = Gh(A);
        if (p.current) {
          p.current(R);
        } else {
          console.error("Could not preserve the outgoing LaTeX editor session.", R);
        }
      }
    }
  }, [t, O, n]);
  return {
    initialState: a,
    error: h,
    handleCreateEditor: Q,
    handleEditorUpdate: C,
    captureSession: x,
    clearSession: w,
    cancelScheduledCapture: O
  };
};
const V1 = new Set(["Verbatim", "lstlisting", "minted", "verbatim", "verbatim*"]);
const Yl = (n, e) => {
  let t = 0;
  for (let i = e - 1; i >= 0 && n[i] === "\\"; i -= 1) {
    t += 1;
  }
  return t % 2 === 1;
};
const Vr = (n, e, t) => {
  for (let i = e; i < t; i += 1) {
    if (n[i] !== `
`) {
      n[i] = " ";
    }
  }
};
const wt = n => {
  const e = n.split("");
  for (let t = 0; t < n.length; t += 1) {
    if (n[t] === "%" && !Yl(n, t)) {
      const h = n.indexOf(`
`, t);
      const c = h === -1 ? n.length : h;
      Vr(e, t, c);
      t = c - 1;
      continue;
    }
    if (n.startsWith("\\verb", t) && !/[A-Za-z]/.test(n[t + 5] ?? "")) {
      const h = t + 5;
      const c = n[h];
      if (!c || /\s/.test(c)) {
        continue;
      }
      const f = n.indexOf(c, h + 1);
      const u = f === -1 ? n.length : f + 1;
      Vr(e, t, u);
      t = u - 1;
      continue;
    }
    if (!n.startsWith("\\begin{", t)) {
      continue;
    }
    const i = t + 7;
    const s = n.indexOf("}", i);
    if (s === -1) {
      continue;
    }
    const r = n.slice(i, s);
    if (!V1.has(r)) {
      continue;
    }
    const o = `\\end{${r}}`;
    const l = n.indexOf(o, s + 1);
    const a = l === -1 ? n.length : l;
    Vr(e, s + 1, a);
    t = a - 1;
  }
  return e.join("");
};
const yw = (n, e, t = "{", i = "}") => {
  if (n[e] !== t) {
    return null;
  }
  let s = 1;
  for (let r = e + 1; r < n.length; r += 1) {
    const o = n[r];
    if (!Yl(n, r)) {
      if (o === t) {
        s += 1;
        continue;
      }
      if (o === i && (s -= 1, s === 0)) {
        return {
          from: e,
          to: r + 1,
          value: n.slice(e + 1, r)
        };
      }
    }
  }
  return null;
};
const W1 = (n, e) => {
  const t = e.map((o, l) => {
    if (!Number.isInteger(o) || o < 0 || o > n.length) {
      throw new Error("LaTeX source positions must be valid character offsets.");
    }
    return {
      index: l,
      position: o
    };
  }).sort((o, l) => o.position - l.position);
  const i = Array(e.length);
  let s = 1;
  let r = 0;
  t.forEach(({
    index: o,
    position: l
  }) => {
    while (r < l) {
      if (n[r] === `
`) {
        s += 1;
      }
      r += 1;
    }
    i[o] = s;
  });
  return i;
};
const D1 = n => {
  var t;
  return ((t = wt(n).replace(/\$+[\s\S]*?\$+/g, " ").replace(/\\\[[\s\S]*?\\\]/g, " ").replace(/\\\([\s\S]*?\\\)/g, " ").replace(/\\(?:begin|end)\s*\{[^}]*}/g, " ").replace(/\\[A-Za-z@]+\*?/g, " ").replace(/[{}[\]&~_^#]/g, " ").match(/[\p{L}\p{N}]+(?:['’.-][\p{L}\p{N}]+)*/gu)) == null ? undefined : t.length) ?? 0;
};
const Xi = Yl;
const L1 = /\\begin\s*\{(Verbatim|lstlisting|minted|verbatim\*?)}/;
const N1 = n => {
  const e = wt(n);
  const t = [...e.matchAll(/\\begin\s*\{[^{}]+}/g)].length;
  const i = [...e.matchAll(/\\end\s*\{[^{}]+}/g)].length;
  const s = [...e.matchAll(/\\(?:\[|\()/g)].length;
  const r = [...e.matchAll(/\\(?:\]|\))/g)].length;
  return t - i + s - r;
};
const Td = (n, e = {}) => {
  const t = " ".repeat(e.indentSize ?? 2);
  const i = n.replace(/\r\n?/g, `
`).split(`
`);
  const s = [];
  let r = 0;
  let o = null;
  let l = false;
  i.forEach(a => {
    if (o) {
      if (a.includes(`\\end{${o}}`) || a.includes(`\\end {${o}}`)) {
        o = null;
        r = Math.max(0, r - 1);
        s.push(`${t.repeat(r)}${a.trim()}`);
      } else {
        s.push(a);
      }
      return;
    }
    const h = a.trim();
    if (!h) {
      s.push("");
      return;
    }
    const c = /^\$\$\s*$/.test(h);
    const u = /^(?:\\end\s*\{|\\\]|\\\))/.test(h) || c && l ? Math.max(0, r - 1) : r;
    s.push(`${t.repeat(u)}${h}`);
    r = Math.max(0, r + N1(h));
    if (c) {
      r = Math.max(0, r + (l ? -1 : 1));
      l = !l;
    }
    const d = h.match(L1);
    if (d && !h.includes(`\\end{${d[1]}}`)) {
      o = d[1];
    }
  });
  return s.join(`
`);
};
const Gl = ({
  state: n,
  dispatch: e
}) => {
  const t = n.doc.toString();
  const i = Td(t);
  if (i !== t) {
    e(n.update({
      changes: {
        from: 0,
        to: n.doc.length,
        insert: i
      },
      userEvent: "input.format"
    }));
  }
  return true;
};
const $d = ({
  state: n,
  dispatch: e
}) => {
  const t = n.selection.main;
  if (t.empty) {
    return Gl({
      state: n,
      dispatch: e
    });
  }
  const i = n.doc.lineAt(t.from);
  const s = n.doc.lineAt(t.to);
  const o = Td(n.doc.toString()).split(`
`).slice(i.number - 1, s.number).join(`
`);
  if (o !== n.sliceDoc(i.from, s.to)) {
    e(n.update({
      changes: {
        from: i.from,
        to: s.to,
        insert: o
      },
      selection: {
        anchor: i.from,
        head: i.from + o.length
      },
      userEvent: "input.format"
    }));
  }
  return true;
};
const B1 = {
  openCommandPalette: "Mod-Shift-p",
  save: "Mod-s",
  compile: "Mod-Enter",
  formatDocument: "Alt-Shift-f",
  formatSelection: "Mod-Alt-l",
  nextDiagnostic: "F8",
  previousDiagnostic: "Shift-F8"
};
const Vs = n => () => {
  if (n != null) {
    n();
  }
  return !!n;
};
const Y1 = n => ({
  ...B1,
  ...n
});
const G1 = ({
  callbacks: n,
  keybindings: e
}) => {
  const t = [{
    id: "format-document",
    title: "Format document",
    description: "Normalize indentation throughout the current file.",
    category: "Document",
    shortcut: e.formatDocument || undefined,
    run: Gl
  }, {
    id: "format-selection",
    title: "Format selection",
    description: "Normalize indentation in the selected lines.",
    category: "Edit",
    shortcut: e.formatSelection || undefined,
    isEnabled: i => !i.state.selection.main.empty,
    run: $d
  }, {
    id: "indent",
    title: "Indent selection",
    description: "Indent the selected lines by one level.",
    category: "Edit",
    run: Ql
  }, {
    id: "outdent",
    title: "Outdent selection",
    description: "Remove one indentation level from the selected lines.",
    category: "Edit",
    run: Sl
  }, {
    id: "find",
    title: "Find and replace",
    description: "Open the editor search and replace controls.",
    category: "Navigation",
    shortcut: "Mod-f",
    run: Cl
  }, {
    id: "autocomplete",
    title: "Show completions",
    description: "Open contextual LaTeX suggestions at the cursor.",
    category: "Edit",
    shortcut: "Ctrl-Space",
    run: os
  }, {
    id: "next-diagnostic",
    title: "Go to next problem",
    description: "Move the cursor to the next editor diagnostic.",
    category: "Navigation",
    shortcut: e.nextDiagnostic || undefined,
    run: Ll
  }, {
    id: "previous-diagnostic",
    title: "Go to previous problem",
    description: "Move the cursor to the previous editor diagnostic.",
    category: "Navigation",
    shortcut: e.previousDiagnostic || undefined,
    run: bd
  }];
  if (n.onSave) {
    t.unshift({
      id: "save",
      title: "Save document",
      description: "Save the current file.",
      category: "Document",
      run: Vs(n.onSave)
    });
  }
  if (n.onCompile) {
    t.unshift({
      id: "compile",
      title: "Compile project",
      description: "Compile the current LaTeX project.",
      category: "Document",
      shortcut: e.compile || undefined,
      run: Vs(n.onCompile)
    });
  }
  return t;
};
const Ut = (n, e, t) => {
  if (e) {
    n.push({
      key: e,
      run: t,
      preventDefault: true,
      stopPropagation: true
    });
  }
};
const I1 = ({
  callbacks: n,
  commands: e,
  keybindings: t
}) => {
  const i = new Map(e.map(a => [a.id, a]));
  const s = [];
  Ut(s, t.openCommandPalette, Vs(n.onOpenCommandPalette));
  const r = i.get("save");
  const o = n.onSaveShortcut ? Vs(n.onSaveShortcut) : r == null ? undefined : r.run;
  if (o) {
    Ut(s, t.save, o);
  }
  const l = i.get("compile");
  if (l) {
    Ut(s, t.compile, l.run);
  }
  Ut(s, t.formatDocument, Gl);
  Ut(s, t.formatSelection, $d);
  Ut(s, t.nextDiagnostic, Ll);
  Ut(s, t.previousDiagnostic, bd);
  s.push({
    key: "Mod-Alt-\\",
    run: Fu,
    preventDefault: true,
    stopPropagation: true
  });
  return kt.high(Yt.of(s));
};
var Ih = {};
class Ws {
  constructor(e, t, i, s, r, o, l, a, h, c = 0, f) {
    this.p = e;
    this.stack = t;
    this.state = i;
    this.reducePos = s;
    this.pos = r;
    this.score = o;
    this.buffer = l;
    this.bufferBase = a;
    this.curContext = h;
    this.lookAhead = c;
    this.parent = f;
  }
  toString() {
    return `[${this.stack.filter((e, t) => t % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
  }
  static start(e, t, i = 0) {
    let s = e.parser.context;
    return new Ws(e, [], t, i, i, 0, [], 0, s ? new Zh(s, s.start) : null, 0, null);
  }
  get context() {
    if (this.curContext) {
      return this.curContext.context;
    } else {
      return null;
    }
  }
  pushState(e, t) {
    this.stack.push(this.state, t, this.bufferBase + this.buffer.length);
    this.state = e;
  }
  reduce(e) {
    var t;
    let i = e >> 19;
    let s = e & 65535;
    let {
      parser: r
    } = this.p;
    let o = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos);
    let l = r.dynamicPrecedence(s);
    if (l) {
      this.score += l;
    }
    if (i == 0) {
      if (s < r.minRepeatTerm && this.reducePos < this.pos) {
        this.reducePos = this.pos;
      }
      this.pushState(r.getGoto(this.state, s, true), this.reducePos);
      if (s < r.minRepeatTerm) {
        this.storeNode(s, this.reducePos, this.reducePos, o ? 8 : 4, true);
      }
      this.reduceContext(s, this.reducePos);
      return;
    }
    let a = this.stack.length - (i - 1) * 3 - (e & 262144 ? 6 : 0);
    let h = a ? this.stack[a - 2] : this.p.ranges[0].from;
    if (s < r.minRepeatTerm && h == this.reducePos && this.reducePos < this.pos) {
      this.reducePos = this.pos;
    }
    let c = this.reducePos - h;
    if (c >= 2000 && ((t = this.p.parser.nodeSet.types[s]) === null || t === undefined || !t.isAnonymous)) {
      if (h == this.p.lastBigReductionStart) {
        this.p.bigReductionCount++;
        this.p.lastBigReductionSize = c;
      } else if (this.p.lastBigReductionSize < c) {
        this.p.bigReductionCount = 1;
        this.p.lastBigReductionStart = h;
        this.p.lastBigReductionSize = c;
      }
    }
    let f = a ? this.stack[a - 1] : 0;
    let u = this.bufferBase + this.buffer.length - f;
    if (s < r.minRepeatTerm || e & 131072) {
      let d = r.stateFlag(this.state, 1) ? this.pos : this.reducePos;
      this.storeNode(s, h, d, u + 4, true);
    }
    if (e & 262144) {
      this.state = this.stack[a];
    } else {
      let d = this.stack[a - 3];
      this.state = r.getGoto(d, s, true);
    }
    while (this.stack.length > a) {
      this.stack.pop();
    }
    this.reduceContext(s, h);
  }
  storeNode(e, t, i, s = 4, r = false) {
    if (e == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
      let o = this.buffer.length;
      if (o > 0 && this.buffer[o - 4] == 0 && this.buffer[o - 1] > -1) {
        if (t == i) {
          return;
        }
        if (this.buffer[o - 2] >= t) {
          this.buffer[o - 2] = i;
          return;
        }
      }
    }
    if (!r || this.pos == i) {
      this.buffer.push(e, t, i, s);
    } else {
      let o = this.buffer.length;
      if (o > 0 && (this.buffer[o - 4] != 0 || this.buffer[o - 1] < 0)) {
        let l = false;
        for (let a = o; a > 0 && this.buffer[a - 2] > i; a -= 4) {
          if (this.buffer[a - 1] >= 0) {
            l = true;
            break;
          }
        }
        if (l) {
          while (o > 0 && this.buffer[o - 2] > i) {
            this.buffer[o] = this.buffer[o - 4];
            this.buffer[o + 1] = this.buffer[o - 3];
            this.buffer[o + 2] = this.buffer[o - 2];
            this.buffer[o + 3] = this.buffer[o - 1];
            o -= 4;
            if (s > 4) {
              s -= 4;
            }
          }
        }
      }
      this.buffer[o] = e;
      this.buffer[o + 1] = t;
      this.buffer[o + 2] = i;
      this.buffer[o + 3] = s;
    }
  }
  shift(e, t, i, s) {
    if (e & 131072) {
      this.pushState(e & 65535, this.pos);
    } else if ((e & 262144) == 0) {
      let r = e;
      let {
        parser: o
      } = this.p;
      this.pos = s;
      let l = o.stateFlag(r, 1);
      if (!l && (s > i || t <= o.maxNode)) {
        this.reducePos = s;
      }
      this.pushState(r, l ? i : Math.min(i, this.reducePos));
      this.shiftContext(t, i);
      if (t <= o.maxNode) {
        this.buffer.push(t, i, s, 4);
      }
    } else {
      this.pos = s;
      this.shiftContext(t, i);
      if (t <= this.p.parser.maxNode) {
        this.buffer.push(t, i, s, 4);
      }
    }
  }
  apply(e, t, i, s) {
    if (e & 65536) {
      this.reduce(e);
    } else {
      this.shift(e, t, i, s);
    }
  }
  useNode(e, t) {
    let i = this.p.reused.length - 1;
    if (i < 0 || this.p.reused[i] != e) {
      this.p.reused.push(e);
      i++;
    }
    let s = this.pos;
    this.reducePos = this.pos = s + e.length;
    this.pushState(t, s);
    this.buffer.push(i, s, this.reducePos, -1);
    if (this.curContext) {
      this.updateContext(this.curContext.tracker.reuse(this.curContext.context, e, this, this.p.stream.reset(this.pos - e.length)));
    }
  }
  split() {
    let e = this;
    let t = e.buffer.length;
    for (t && e.buffer[t - 4] == 0 && (t -= 4); t > 0 && e.buffer[t - 2] > e.reducePos;) {
      t -= 4;
    }
    let i = e.buffer.slice(t);
    let s = e.bufferBase + t;
    while (e && s == e.bufferBase) {
      e = e.parent;
    }
    return new Ws(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, i, s, this.curContext, this.lookAhead, e);
  }
  recoverByDelete(e, t) {
    let i = e <= this.p.parser.maxNode;
    if (i) {
      this.storeNode(e, this.pos, t, 4);
    }
    this.storeNode(0, this.pos, t, i ? 8 : 4);
    this.pos = this.reducePos = t;
    this.score -= 190;
  }
  canShift(e) {
    for (let t = new Z1(this);;) {
      let i = this.p.parser.stateSlot(t.state, 4) || this.p.parser.hasAction(t.state, e);
      if (i == 0) {
        return false;
      }
      if ((i & 65536) == 0) {
        return true;
      }
      t.reduce(i);
    }
  }
  recoverByInsert(e) {
    if (this.stack.length >= 300) {
      return [];
    }
    let t = this.p.parser.nextStates(this.state);
    if (t.length > 8 || this.stack.length >= 120) {
      let s = [];
      for (let r = 0, o; r < t.length; r += 2) {
        if ((o = t[r + 1]) != this.state && this.p.parser.hasAction(o, e)) {
          s.push(t[r], o);
        }
      }
      if (this.stack.length < 120) {
        for (let r = 0; s.length < 8 && r < t.length; r += 2) {
          let o = t[r + 1];
          if (!s.some((l, a) => a & 1 && l == o)) {
            s.push(t[r], o);
          }
        }
      }
      t = s;
    }
    let i = [];
    for (let s = 0; s < t.length && i.length < 4; s += 2) {
      let r = t[s + 1];
      if (r == this.state) {
        continue;
      }
      let o = this.split();
      o.pushState(r, this.pos);
      o.storeNode(0, o.pos, o.pos, 4, true);
      o.shiftContext(t[s], this.pos);
      o.reducePos = this.pos;
      o.score -= 200;
      i.push(o);
    }
    return i;
  }
  forceReduce() {
    let {
      parser: e
    } = this.p;
    let t = e.stateSlot(this.state, 5);
    if ((t & 65536) == 0) {
      return false;
    }
    if (!e.validAction(this.state, t)) {
      let i = t >> 19;
      let s = t & 65535;
      let r = this.stack.length - i * 3;
      if (r < 0 || e.getGoto(this.stack[r], s, false) < 0) {
        let o = this.findForcedReduction();
        if (o == null) {
          return false;
        }
        t = o;
      }
      this.storeNode(0, this.pos, this.pos, 4, true);
      this.score -= 100;
    }
    this.reducePos = this.pos;
    this.reduce(t);
    return true;
  }
  findForcedReduction() {
    let {
      parser: e
    } = this.p;
    let t = [];
    let i = (s, r) => {
      if (!t.includes(s)) {
        t.push(s);
        return e.allActions(s, o => {
          if (!(o & 393216)) {
            if (o & 65536) {
              let l = (o >> 19) - r;
              if (l > 1) {
                let a = o & 65535;
                let h = this.stack.length - l * 3;
                if (h >= 0 && e.getGoto(this.stack[h], a, false) >= 0) {
                  return l << 19 | 65536 | a;
                }
              }
            } else {
              let l = i(o, r + 1);
              if (l != null) {
                return l;
              }
            }
          }
        });
      }
    };
    return i(this.state, 0);
  }
  forceAll() {
    while (!this.p.parser.stateFlag(this.state, 2)) {
      if (!this.forceReduce()) {
        this.storeNode(0, this.pos, this.pos, 4, true);
        break;
      }
    }
    return this;
  }
  get deadEnd() {
    if (this.stack.length != 3) {
      return false;
    }
    let {
      parser: e
    } = this.p;
    return e.data[e.stateSlot(this.state, 1)] == 65535 && !e.stateSlot(this.state, 4);
  }
  restart() {
    this.storeNode(0, this.pos, this.pos, 4, true);
    this.state = this.stack[0];
    this.stack.length = 0;
  }
  sameState(e) {
    if (this.state != e.state || this.stack.length != e.stack.length) {
      return false;
    }
    for (let t = 0; t < this.stack.length; t += 3) {
      if (this.stack[t] != e.stack[t]) {
        return false;
      }
    }
    return true;
  }
  get parser() {
    return this.p.parser;
  }
  dialectEnabled(e) {
    return this.p.parser.dialect.flags[e];
  }
  shiftContext(e, t) {
    if (this.curContext) {
      this.updateContext(this.curContext.tracker.shift(this.curContext.context, e, this, this.p.stream.reset(t)));
    }
  }
  reduceContext(e, t) {
    if (this.curContext) {
      this.updateContext(this.curContext.tracker.reduce(this.curContext.context, e, this, this.p.stream.reset(t)));
    }
  }
  emitContext() {
    let e = this.buffer.length - 1;
    if (e < 0 || this.buffer[e] != -3) {
      this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
    }
  }
  emitLookAhead() {
    let e = this.buffer.length - 1;
    if (e < 0 || this.buffer[e] != -4) {
      this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
    }
  }
  updateContext(e) {
    if (e != this.curContext.context) {
      let t = new Zh(this.curContext.tracker, e);
      if (t.hash != this.curContext.hash) {
        this.emitContext();
      }
      this.curContext = t;
    }
  }
  setLookAhead(e) {
    if (e <= this.lookAhead) {
      return false;
    } else {
      this.emitLookAhead();
      this.lookAhead = e;
      return true;
    }
  }
  close() {
    if (this.curContext && this.curContext.tracker.strict) {
      this.emitContext();
    }
    if (this.lookAhead > 0) {
      this.emitLookAhead();
    }
  }
}
class Zh {
  constructor(e, t) {
    this.tracker = e;
    this.context = t;
    this.hash = e.strict ? e.hash(t) : 0;
  }
}
class Z1 {
  constructor(e) {
    this.start = e;
    this.state = e.state;
    this.stack = e.stack;
    this.base = this.stack.length;
  }
  reduce(e) {
    let t = e & 65535;
    let i = e >> 19;
    if (i == 0) {
      if (this.stack == this.start.stack) {
        this.stack = this.stack.slice();
      }
      this.stack.push(this.state, 0, 0);
      this.base += 3;
    } else {
      this.base -= (i - 1) * 3;
    }
    let s = this.start.p.parser.getGoto(this.stack[this.base - 3], t, true);
    this.state = s;
  }
}
class Ds {
  constructor(e, t, i) {
    this.stack = e;
    this.pos = t;
    this.index = i;
    this.buffer = e.buffer;
    if (this.index == 0) {
      this.maybeNext();
    }
  }
  static create(e, t = e.bufferBase + e.buffer.length) {
    return new Ds(e, t, t - e.bufferBase);
  }
  maybeNext() {
    let e = this.stack.parent;
    if (e != null) {
      this.index = this.stack.bufferBase - e.bufferBase;
      this.stack = e;
      this.buffer = e.buffer;
    }
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  next() {
    this.index -= 4;
    this.pos -= 4;
    if (this.index == 0) {
      this.maybeNext();
    }
  }
  fork() {
    return new Ds(this.stack, this.pos, this.index);
  }
}
function Fn(n, e = Uint16Array) {
  if (typeof n != "string") {
    return n;
  }
  let t = null;
  for (let i = 0, s = 0; i < n.length;) {
    let r = 0;
    while (true) {
      let o = n.charCodeAt(i++);
      let l = false;
      if (o == 126) {
        r = 65535;
        break;
      }
      if (o >= 92) {
        o--;
      }
      if (o >= 34) {
        o--;
      }
      let a = o - 32;
      if (a >= 46) {
        a -= 46;
        l = true;
      }
      r += a;
      if (l) {
        break;
      }
      r *= 46;
    }
    if (t) {
      t[s++] = r;
    } else {
      t = new e(r);
    }
  }
  return t;
}
class cs {
  constructor() {
    this.start = -1;
    this.value = -1;
    this.end = -1;
    this.extended = -1;
    this.lookAhead = 0;
    this.mask = 0;
    this.context = 0;
  }
}
const zh = new cs();
class z1 {
  constructor(e, t) {
    this.input = e;
    this.ranges = t;
    this.chunk = "";
    this.chunkOff = 0;
    this.chunk2 = "";
    this.chunk2Pos = 0;
    this.next = -1;
    this.token = zh;
    this.rangeIndex = 0;
    this.pos = this.chunkPos = t[0].from;
    this.range = t[0];
    this.end = t[t.length - 1].to;
    this.readNext();
  }
  resolveOffset(e, t) {
    let i = this.range;
    let s = this.rangeIndex;
    let r = this.pos + e;
    while (r < i.from) {
      if (!s) {
        return null;
      }
      let o = this.ranges[--s];
      r -= i.from - o.to;
      i = o;
    }
    while (t < 0 ? r > i.to : r >= i.to) {
      if (s == this.ranges.length - 1) {
        return null;
      }
      let o = this.ranges[++s];
      r += o.from - i.to;
      i = o;
    }
    return r;
  }
  clipPos(e) {
    if (e >= this.range.from && e < this.range.to) {
      return e;
    }
    for (let t of this.ranges) {
      if (t.to > e) {
        return Math.max(e, t.from);
      }
    }
    return this.end;
  }
  peek(e) {
    let t = this.chunkOff + e;
    let i;
    let s;
    if (t >= 0 && t < this.chunk.length) {
      i = this.pos + e;
      s = this.chunk.charCodeAt(t);
    } else {
      let r = this.resolveOffset(e, 1);
      if (r == null) {
        return -1;
      }
      i = r;
      if (i >= this.chunk2Pos && i < this.chunk2Pos + this.chunk2.length) {
        s = this.chunk2.charCodeAt(i - this.chunk2Pos);
      } else {
        let o = this.rangeIndex;
        let l = this.range;
        while (l.to <= i) {
          l = this.ranges[++o];
        }
        this.chunk2 = this.input.chunk(this.chunk2Pos = i);
        if (i + this.chunk2.length > l.to) {
          this.chunk2 = this.chunk2.slice(0, l.to - i);
        }
        s = this.chunk2.charCodeAt(0);
      }
    }
    if (i >= this.token.lookAhead) {
      this.token.lookAhead = i + 1;
    }
    return s;
  }
  acceptToken(e, t = 0) {
    let i = t ? this.resolveOffset(t, -1) : this.pos;
    if (i == null || i < this.token.start) {
      throw new RangeError("Token end out of bounds");
    }
    this.token.value = e;
    this.token.end = i;
  }
  acceptTokenTo(e, t) {
    this.token.value = e;
    this.token.end = t;
  }
  getChunk() {
    if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
      let {
        chunk: e,
        chunkPos: t
      } = this;
      this.chunk = this.chunk2;
      this.chunkPos = this.chunk2Pos;
      this.chunk2 = e;
      this.chunk2Pos = t;
      this.chunkOff = this.pos - this.chunkPos;
    } else {
      this.chunk2 = this.chunk;
      this.chunk2Pos = this.chunkPos;
      let e = this.input.chunk(this.pos);
      let t = this.pos + e.length;
      this.chunk = t > this.range.to ? e.slice(0, this.range.to - this.pos) : e;
      this.chunkPos = this.pos;
      this.chunkOff = 0;
    }
  }
  readNext() {
    if (this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length)) {
      return this.next = -1;
    } else {
      return this.next = this.chunk.charCodeAt(this.chunkOff);
    }
  }
  advance(e = 1) {
    for (this.chunkOff += e; this.pos + e >= this.range.to;) {
      if (this.rangeIndex == this.ranges.length - 1) {
        return this.setDone();
      }
      e -= this.range.to - this.pos;
      this.range = this.ranges[++this.rangeIndex];
      this.pos = this.range.from;
    }
    this.pos += e;
    if (this.pos >= this.token.lookAhead) {
      this.token.lookAhead = this.pos + 1;
    }
    return this.readNext();
  }
  setDone() {
    this.pos = this.chunkPos = this.end;
    this.range = this.ranges[this.rangeIndex = this.ranges.length - 1];
    this.chunk = "";
    return this.next = -1;
  }
  reset(e, t) {
    if (t) {
      this.token = t;
      t.start = e;
      t.lookAhead = e + 1;
      t.value = t.extended = -1;
    } else {
      this.token = zh;
    }
    if (this.pos != e) {
      this.pos = e;
      if (e == this.end) {
        this.setDone();
        return this;
      }
      while (e < this.range.from) {
        this.range = this.ranges[--this.rangeIndex];
      }
      while (e >= this.range.to) {
        this.range = this.ranges[++this.rangeIndex];
      }
      if (e >= this.chunkPos && e < this.chunkPos + this.chunk.length) {
        this.chunkOff = e - this.chunkPos;
      } else {
        this.chunk = "";
        this.chunkOff = 0;
      }
      this.readNext();
    }
    return this;
  }
  read(e, t) {
    if (e >= this.chunkPos && t <= this.chunkPos + this.chunk.length) {
      return this.chunk.slice(e - this.chunkPos, t - this.chunkPos);
    }
    if (e >= this.chunk2Pos && t <= this.chunk2Pos + this.chunk2.length) {
      return this.chunk2.slice(e - this.chunk2Pos, t - this.chunk2Pos);
    }
    if (e >= this.range.from && t <= this.range.to) {
      return this.input.read(e, t);
    }
    let i = "";
    for (let s of this.ranges) {
      if (s.from >= t) {
        break;
      }
      if (s.to > e) {
        i += this.input.read(Math.max(s.from, e), Math.min(s.to, t));
      }
    }
    return i;
  }
}
class Si {
  constructor(e, t) {
    this.data = e;
    this.id = t;
  }
  token(e, t) {
    let {
      parser: i
    } = t.p;
    j1(this.data, e, t, this.id, i.data, i.tokenPrecTable);
  }
}
Si.prototype.contextual = Si.prototype.fallback = Si.prototype.extend = false;
Si.prototype.fallback = Si.prototype.extend = false;
class It {
  constructor(e, t = {}) {
    this.token = e;
    this.contextual = !!t.contextual;
    this.fallback = !!t.fallback;
    this.extend = !!t.extend;
  }
}
function j1(n, e, t, i, s, r) {
  let o = 0;
  let l = 1 << i;
  let {
    dialect: a
  } = t.p.parser;
  e: while ((l & n[o]) != 0) {
    let h = n[o + 1];
    for (let d = o + 3; d < h; d += 2) {
      if ((n[d + 1] & l) > 0) {
        let m = n[d];
        if (a.allows(m) && (e.token.value == -1 || e.token.value == m || _1(m, e.token.value, s, r))) {
          e.acceptToken(m);
          break;
        }
      }
    }
    let c = e.next;
    let f = 0;
    let u = n[o + 2];
    if (e.next < 0 && u > f && n[h + u * 3 - 3] == 65535) {
      o = n[h + u * 3 - 1];
      continue e;
    }
    while (f < u) {
      let d = f + u >> 1;
      let m = h + d + (d << 1);
      let p = n[m];
      let O = n[m + 1] || 65536;
      if (c < p) {
        u = d;
      } else if (c >= O) {
        f = d + 1;
      } else {
        o = n[m + 2];
        e.advance();
        continue e;
      }
    }
    break;
  }
}
function jh(n, e, t) {
  for (let i = e, s; (s = n[i]) != 65535; i++) {
    if (s == t) {
      return i - e;
    }
  }
  return -1;
}
function _1(n, e, t, i) {
  let s = jh(t, i, e);
  return s < 0 || jh(t, i, n) < s;
}
const Ne = typeof process !== "undefined" && Ih && /\bparse\b/.test(Ih.LOG);
let Wr = null;
function _h(n, e, t) {
  let i = n.cursor(te.IncludeAnonymous);
  for (i.moveTo(e);;) {
    if (!(t < 0 ? i.childBefore(e) : i.childAfter(e))) {
      while (true) {
        if ((t < 0 ? i.to < e : i.from > e) && !i.type.isError) {
          if (t < 0) {
            return Math.max(0, Math.min(i.to - 1, e - 25));
          } else {
            return Math.min(n.length, Math.max(i.from + 1, e + 25));
          }
        }
        if (t < 0 ? i.prevSibling() : i.nextSibling()) {
          break;
        }
        if (!i.parent()) {
          if (t < 0) {
            return 0;
          } else {
            return n.length;
          }
        }
      }
    }
  }
}
class F1 {
  constructor(e, t) {
    this.fragments = e;
    this.nodeSet = t;
    this.i = 0;
    this.fragment = null;
    this.safeFrom = -1;
    this.safeTo = -1;
    this.trees = [];
    this.start = [];
    this.index = [];
    this.nextFragment();
  }
  nextFragment() {
    let e = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (e) {
      this.safeFrom = e.openStart ? _h(e.tree, e.from + e.offset, 1) - e.offset : e.from;
      this.safeTo = e.openEnd ? _h(e.tree, e.to + e.offset, -1) - e.offset : e.to;
      while (this.trees.length) {
        this.trees.pop();
        this.start.pop();
        this.index.pop();
      }
      this.trees.push(e.tree);
      this.start.push(-e.offset);
      this.index.push(0);
      this.nextStart = this.safeFrom;
    } else {
      this.nextStart = 1000000000;
    }
  }
  nodeAt(e) {
    if (e < this.nextStart) {
      return null;
    }
    while (this.fragment && this.safeTo <= e) {
      this.nextFragment();
    }
    if (!this.fragment) {
      return null;
    }
    while (true) {
      let t = this.trees.length - 1;
      if (t < 0) {
        this.nextFragment();
        return null;
      }
      let i = this.trees[t];
      let s = this.index[t];
      if (s == i.children.length) {
        this.trees.pop();
        this.start.pop();
        this.index.pop();
        continue;
      }
      let r = i.children[s];
      let o = this.start[t] + i.positions[s];
      if (o > e) {
        this.nextStart = o;
        return null;
      }
      if (r instanceof re) {
        if (o == e) {
          if (o < this.safeFrom) {
            return null;
          }
          let l = o + r.length;
          if (l <= this.safeTo) {
            let a = r.prop(N.lookAhead);
            if (!a || l + a < this.fragment.to) {
              return r;
            }
          }
        }
        this.index[t]++;
        if (o + r.length >= Math.max(this.safeFrom, e)) {
          this.trees.push(r);
          this.start.push(o);
          this.index.push(0);
        }
      } else {
        this.index[t]++;
        this.nextStart = o + r.length;
      }
    }
  }
}
class U1 {
  constructor(e, t) {
    this.stream = t;
    this.tokens = [];
    this.mainToken = null;
    this.actions = [];
    this.tokens = e.tokenizers.map(i => new cs());
  }
  getActions(e) {
    let t = 0;
    let i = null;
    let {
      parser: s
    } = e.p;
    let {
      tokenizers: r
    } = s;
    let o = s.stateSlot(e.state, 3);
    let l = e.curContext ? e.curContext.hash : 0;
    let a = 0;
    for (let h = 0; h < r.length; h++) {
      if ((1 << h & o) == 0) {
        continue;
      }
      let c = r[h];
      let f = this.tokens[h];
      if ((!i || !!c.fallback) && ((c.contextual || f.start != e.pos || f.mask != o || f.context != l) && (this.updateCachedToken(f, c, e), f.mask = o, f.context = l), f.lookAhead > f.end + 25 && (a = Math.max(f.lookAhead, a)), f.value != 0)) {
        let u = t;
        if (f.extended > -1) {
          t = this.addActions(e, f.extended, f.end, t);
        }
        t = this.addActions(e, f.value, f.end, t);
        if (!c.extend && (i = f, t > u)) {
          break;
        }
      }
    }
    while (this.actions.length > t) {
      this.actions.pop();
    }
    if (a) {
      e.setLookAhead(a);
    }
    if (!i && e.pos == this.stream.end) {
      i = new cs();
      i.value = e.p.parser.eofTerm;
      i.start = i.end = e.pos;
      t = this.addActions(e, i.value, i.end, t);
    }
    this.mainToken = i;
    return this.actions;
  }
  getMainToken(e) {
    if (this.mainToken) {
      return this.mainToken;
    }
    let t = new cs();
    let {
      pos: i,
      p: s
    } = e;
    t.start = i;
    t.end = Math.min(i + 1, s.stream.end);
    t.value = i == s.stream.end ? s.parser.eofTerm : 0;
    return t;
  }
  updateCachedToken(e, t, i) {
    let s = this.stream.clipPos(i.pos);
    t.token(this.stream.reset(s, e), i);
    if (e.value > -1) {
      let {
        parser: r
      } = i.p;
      for (let o = 0; o < r.specialized.length; o++) {
        if (r.specialized[o] == e.value) {
          let l = r.specializers[o](this.stream.read(e.start, e.end), i);
          if (l >= 0 && i.p.parser.dialect.allows(l >> 1)) {
            if ((l & 1) == 0) {
              e.value = l >> 1;
            } else {
              e.extended = l >> 1;
            }
            break;
          }
        }
      }
    } else {
      e.value = 0;
      e.end = this.stream.clipPos(s + 1);
    }
  }
  putAction(e, t, i, s) {
    for (let r = 0; r < s; r += 3) {
      if (this.actions[r] == e) {
        return s;
      }
    }
    this.actions[s++] = e;
    this.actions[s++] = t;
    this.actions[s++] = i;
    return s;
  }
  addActions(e, t, i, s) {
    let {
      state: r
    } = e;
    let {
      parser: o
    } = e.p;
    let {
      data: l
    } = o;
    for (let a = 0; a < 2; a++) {
      for (let h = o.stateSlot(r, a ? 2 : 1);; h += 3) {
        if (l[h] == 65535) {
          if (l[h + 1] == 1) {
            h = bt(l, h + 2);
          } else {
            if (s == 0 && l[h + 1] == 2) {
              s = this.putAction(bt(l, h + 2), t, i, s);
            }
            break;
          }
        }
        if (l[h] == t) {
          s = this.putAction(bt(l, h + 1), t, i, s);
        }
      }
    }
    return s;
  }
}
class H1 {
  constructor(e, t, i, s) {
    this.parser = e;
    this.input = t;
    this.ranges = s;
    this.recovering = 0;
    this.nextStackID = 9812;
    this.minStackPos = 0;
    this.reused = [];
    this.stoppedAt = null;
    this.lastBigReductionStart = -1;
    this.lastBigReductionSize = 0;
    this.bigReductionCount = 0;
    this.stream = new z1(t, s);
    this.tokens = new U1(e, this.stream);
    this.topTerm = e.top[1];
    let {
      from: r
    } = s[0];
    this.stacks = [Ws.start(this, e.top[0], r)];
    this.fragments = i.length && this.stream.end - r > e.bufferLength * 4 ? new F1(i, e.nodeSet) : null;
  }
  get parsedPos() {
    return this.minStackPos;
  }
  advance() {
    let e = this.stacks;
    let t = this.minStackPos;
    let i = this.stacks = [];
    let s;
    let r;
    if (this.bigReductionCount > 300 && e.length == 1) {
      let [o] = e;
      while (o.forceReduce() && o.stack.length && o.stack[o.stack.length - 2] >= this.lastBigReductionStart);
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      while (true) {
        this.tokens.mainToken = null;
        if (l.pos > t) {
          i.push(l);
        } else {
          if (this.advanceStack(l, i, e)) {
            continue;
          }
          {
            if (!s) {
              s = [];
              r = [];
            }
            s.push(l);
            let a = this.tokens.getMainToken(l);
            r.push(a.value, a.end);
          }
        }
        break;
      }
    }
    if (!i.length) {
      let o = s && ex(s);
      if (o) {
        if (Ne) {
          console.log("Finish with " + this.stackID(o));
        }
        return this.stackToTree(o);
      }
      if (this.parser.strict) {
        if (Ne && s) {
          console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none"));
        }
        throw new SyntaxError("No parse at " + t);
      }
      this.recovering ||= 5;
    }
    if (this.recovering && s) {
      let o = this.stoppedAt != null && s[0].pos > this.stoppedAt ? s[0] : this.runRecovery(s, r, i);
      if (o) {
        if (Ne) {
          console.log("Force-finish " + this.stackID(o));
        }
        return this.stackToTree(o.forceAll());
      }
    }
    if (this.recovering) {
      let o = this.recovering == 1 ? 1 : this.recovering * 3;
      if (i.length > o) {
        for (i.sort((l, a) => a.score - l.score); i.length > o;) {
          i.pop();
        }
      }
      if (i.some(l => l.reducePos > t)) {
        this.recovering--;
      }
    } else if (i.length > 1) {
      e: for (let o = 0; o < i.length - 1; o++) {
        let l = i[o];
        for (let a = o + 1; a < i.length; a++) {
          let h = i[a];
          if (l.sameState(h) || l.buffer.length > 500 && h.buffer.length > 500) {
            if ((l.score - h.score || l.buffer.length - h.buffer.length) > 0) {
              i.splice(a--, 1);
            } else {
              i.splice(o--, 1);
              continue e;
            }
          }
        }
      }
      if (i.length > 12) {
        i.sort((o, l) => l.score - o.score);
        i.splice(12, i.length - 12);
      }
    }
    this.minStackPos = i[0].pos;
    for (let o = 1; o < i.length; o++) {
      if (i[o].pos < this.minStackPos) {
        this.minStackPos = i[o].pos;
      }
    }
    return null;
  }
  stopAt(e) {
    if (this.stoppedAt != null && this.stoppedAt < e) {
      throw new RangeError("Can't move stoppedAt forward");
    }
    this.stoppedAt = e;
  }
  advanceStack(e, t, i) {
    let s = e.pos;
    let {
      parser: r
    } = this;
    let o = Ne ? this.stackID(e) + " -> " : "";
    if (this.stoppedAt != null && s > this.stoppedAt) {
      if (e.forceReduce()) {
        return e;
      } else {
        return null;
      }
    }
    if (this.fragments) {
      let h = e.curContext && e.curContext.tracker.strict;
      let c = h ? e.curContext.hash : 0;
      for (let f = this.fragments.nodeAt(s); f;) {
        let u = this.parser.nodeSet.types[f.type.id] == f.type ? r.getGoto(e.state, f.type.id) : -1;
        if (u > -1 && f.length && (!h || (f.prop(N.contextHash) || 0) == c)) {
          e.useNode(f, u);
          if (Ne) {
            console.log(`${o + this.stackID(e)} (via reuse of ${r.getName(f.type.id)})`);
          }
          return true;
        }
        if (!(f instanceof re) || f.children.length == 0 || f.positions[0] > 0) {
          break;
        }
        let d = f.children[0];
        if (d instanceof re && f.positions[0] == 0) {
          f = d;
        } else {
          break;
        }
      }
    }
    let l = r.stateSlot(e.state, 4);
    if (l > 0) {
      e.reduce(l);
      if (Ne) {
        console.log(`${o + this.stackID(e)} (via always-reduce ${r.getName(l & 65535)})`);
      }
      return true;
    }
    if (e.stack.length >= 8400) {
      while (e.stack.length > 6000 && e.forceReduce());
    }
    let a = this.tokens.getActions(e);
    for (let h = 0; h < a.length;) {
      let c = a[h++];
      let f = a[h++];
      let u = a[h++];
      let d = h == a.length || !i;
      let m = d ? e : e.split();
      let p = this.tokens.mainToken;
      m.apply(c, f, p ? p.start : m.pos, u);
      if (Ne) {
        console.log(`${o + this.stackID(m)} (via ${(c & 65536) == 0 ? "shift" : `reduce of ${r.getName(c & 65535)}`} for ${r.getName(f)} @ ${s}${m == e ? "" : ", split"})`);
      }
      if (d) {
        return true;
      }
      if (m.pos > s) {
        t.push(m);
      } else {
        i.push(m);
      }
    }
    return false;
  }
  advanceFully(e, t) {
    let i = e.pos;
    while (true) {
      if (!this.advanceStack(e, null, null)) {
        return false;
      }
      if (e.pos > i) {
        Fh(e, t);
        return true;
      }
    }
  }
  runRecovery(e, t, i) {
    let s = null;
    let r = false;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      let a = t[o << 1];
      let h = t[(o << 1) + 1];
      let c = Ne ? this.stackID(l) + " -> " : "";
      if (l.deadEnd && (r || (r = true, l.restart(), Ne && console.log(c + this.stackID(l) + " (restarted)"), this.advanceFully(l, i)))) {
        continue;
      }
      let f = l.split();
      let u = c;
      for (let d = 0; d < 10 && f.forceReduce() && (Ne && console.log(u + this.stackID(f) + " (via force-reduce)"), !this.advanceFully(f, i)); d++) {
        if (Ne) {
          u = this.stackID(f) + " -> ";
        }
      }
      for (let d of l.recoverByInsert(a)) {
        if (Ne) {
          console.log(c + this.stackID(d) + " (via recover-insert)");
        }
        this.advanceFully(d, i);
      }
      if (this.stream.end > l.pos) {
        if (h == l.pos) {
          h++;
          a = 0;
        }
        l.recoverByDelete(a, h);
        if (Ne) {
          console.log(`${c + this.stackID(l)} (via recover-delete ${this.parser.getName(a)})`);
        }
        Fh(l, i);
      } else if (!s || s.score < f.score) {
        s = f;
      }
    }
    return s;
  }
  stackToTree(e) {
    e.close();
    return re.build({
      buffer: Ds.create(e),
      nodeSet: this.parser.nodeSet,
      topID: this.topTerm,
      maxBufferLength: this.parser.bufferLength,
      reused: this.reused,
      start: this.ranges[0].from,
      length: e.pos - this.ranges[0].from,
      minRepeatType: this.parser.minRepeatTerm
    });
  }
  stackID(e) {
    let t = (Wr ||= new WeakMap()).get(e);
    if (!t) {
      Wr.set(e, t = String.fromCodePoint(this.nextStackID++));
    }
    return t + e;
  }
}
function Fh(n, e) {
  for (let t = 0; t < e.length; t++) {
    let i = e[t];
    if (i.pos == n.pos && i.sameState(n)) {
      if (e[t].score < n.score) {
        e[t] = n;
      }
      return;
    }
  }
  e.push(n);
}
class K1 {
  constructor(e, t, i) {
    this.source = e;
    this.flags = t;
    this.disabled = i;
  }
  allows(e) {
    return !this.disabled || this.disabled[e] == 0;
  }
}
const Dr = n => n;
class J1 {
  constructor(e) {
    this.start = e.start;
    this.shift = e.shift || Dr;
    this.reduce = e.reduce || Dr;
    this.reuse = e.reuse || Dr;
    this.hash = e.hash || (() => 0);
    this.strict = e.strict !== false;
  }
}
class Ls extends Kf {
  constructor(e) {
    super();
    this.wrappers = [];
    if (e.version != 14) {
      throw new RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);
    }
    let t = e.nodeNames.split(" ");
    this.minRepeatTerm = t.length;
    for (let l = 0; l < e.repeatNodeCount; l++) {
      t.push("");
    }
    let i = Object.keys(e.topRules).map(l => e.topRules[l][1]);
    let s = [];
    for (let l = 0; l < t.length; l++) {
      s.push([]);
    }
    function r(l, a, h) {
      s[l].push([a, a.deserialize(String(h))]);
    }
    if (e.nodeProps) {
      for (let l of e.nodeProps) {
        let a = l[0];
        if (typeof a == "string") {
          a = N[a];
        }
        for (let h = 1; h < l.length;) {
          let c = l[h++];
          if (c >= 0) {
            r(c, a, l[h++]);
          } else {
            let f = l[h + -c];
            for (let u = -c; u > 0; u--) {
              r(l[h++], a, f);
            }
            h++;
          }
        }
      }
    }
    this.nodeSet = new cl(t.map((l, a) => We.define({
      name: a >= this.minRepeatTerm ? undefined : l,
      id: a,
      props: s[a],
      top: i.indexOf(a) > -1,
      error: a == 0,
      skipped: e.skippedNodes && e.skippedNodes.indexOf(a) > -1
    })));
    if (e.propSources) {
      this.nodeSet = this.nodeSet.extend(...e.propSources);
    }
    this.strict = false;
    this.bufferLength = _f;
    let o = Fn(e.tokenData);
    this.context = e.context;
    this.specializerSpecs = e.specialized || [];
    this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let l = 0; l < this.specializerSpecs.length; l++) {
      this.specialized[l] = this.specializerSpecs[l].term;
    }
    this.specializers = this.specializerSpecs.map(Uh);
    this.states = Fn(e.states, Uint32Array);
    this.data = Fn(e.stateData);
    this.goto = Fn(e.goto);
    this.maxTerm = e.maxTerm;
    this.tokenizers = e.tokenizers.map(l => typeof l == "number" ? new Si(o, l) : l);
    this.topRules = e.topRules;
    this.dialects = e.dialects || {};
    this.dynamicPrecedences = e.dynamicPrecedences || null;
    this.tokenPrecTable = e.tokenPrec;
    this.termNames = e.termNames || null;
    this.maxNode = this.nodeSet.types.length - 1;
    this.dialect = this.parseDialect();
    this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(e, t, i) {
    let s = new H1(this, e, t, i);
    for (let r of this.wrappers) {
      s = r(s, e, t, i);
    }
    return s;
  }
  getGoto(e, t, i = false) {
    let s = this.goto;
    if (t >= s[0]) {
      return -1;
    }
    for (let r = s[t + 1];;) {
      let o = s[r++];
      let l = o & 1;
      let a = s[r++];
      if (l && i) {
        return a;
      }
      for (let h = r + (o >> 1); r < h; r++) {
        if (s[r] == e) {
          return a;
        }
      }
      if (l) {
        return -1;
      }
    }
  }
  hasAction(e, t) {
    let i = this.data;
    for (let s = 0; s < 2; s++) {
      for (let r = this.stateSlot(e, s ? 2 : 1), o;; r += 3) {
        if ((o = i[r]) == 65535) {
          if (i[r + 1] == 1) {
            o = i[r = bt(i, r + 2)];
          } else {
            if (i[r + 1] == 2) {
              return bt(i, r + 2);
            }
            break;
          }
        }
        if (o == t || o == 0) {
          return bt(i, r + 1);
        }
      }
    }
    return 0;
  }
  stateSlot(e, t) {
    return this.states[e * 6 + t];
  }
  stateFlag(e, t) {
    return (this.stateSlot(e, 0) & t) > 0;
  }
  validAction(e, t) {
    return !!this.allActions(e, i => i == t ? true : null);
  }
  allActions(e, t) {
    let i = this.stateSlot(e, 4);
    let s = i ? t(i) : undefined;
    for (let r = this.stateSlot(e, 1); s == null; r += 3) {
      if (this.data[r] == 65535) {
        if (this.data[r + 1] == 1) {
          r = bt(this.data, r + 2);
        } else {
          break;
        }
      }
      s = t(bt(this.data, r + 1));
    }
    return s;
  }
  nextStates(e) {
    let t = [];
    for (let i = this.stateSlot(e, 1);; i += 3) {
      if (this.data[i] == 65535) {
        if (this.data[i + 1] == 1) {
          i = bt(this.data, i + 2);
        } else {
          break;
        }
      }
      if ((this.data[i + 2] & 1) == 0) {
        let s = this.data[i + 1];
        if (!t.some((r, o) => o & 1 && r == s)) {
          t.push(this.data[i], s);
        }
      }
    }
    return t;
  }
  configure(e) {
    let t = Object.assign(Object.create(Ls.prototype), this);
    if (e.props) {
      t.nodeSet = this.nodeSet.extend(...e.props);
    }
    if (e.top) {
      let i = this.topRules[e.top];
      if (!i) {
        throw new RangeError(`Invalid top rule name ${e.top}`);
      }
      t.top = i;
    }
    if (e.tokenizers) {
      t.tokenizers = this.tokenizers.map(i => {
        let s = e.tokenizers.find(r => r.from == i);
        if (s) {
          return s.to;
        } else {
          return i;
        }
      });
    }
    if (e.specializers) {
      t.specializers = this.specializers.slice();
      t.specializerSpecs = this.specializerSpecs.map((i, s) => {
        let r = e.specializers.find(l => l.from == i.external);
        if (!r) {
          return i;
        }
        let o = Object.assign(Object.assign({}, i), {
          external: r.to
        });
        t.specializers[s] = Uh(o);
        return o;
      });
    }
    if (e.contextTracker) {
      t.context = e.contextTracker;
    }
    if (e.dialect) {
      t.dialect = this.parseDialect(e.dialect);
    }
    if (e.strict != null) {
      t.strict = e.strict;
    }
    if (e.wrap) {
      t.wrappers = t.wrappers.concat(e.wrap);
    }
    if (e.bufferLength != null) {
      t.bufferLength = e.bufferLength;
    }
    return t;
  }
  hasWrappers() {
    return this.wrappers.length > 0;
  }
  getName(e) {
    if (this.termNames) {
      return this.termNames[e];
    } else {
      return String(e <= this.maxNode && this.nodeSet.types[e].name || e);
    }
  }
  get eofTerm() {
    return this.maxNode + 1;
  }
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  dynamicPrecedence(e) {
    let t = this.dynamicPrecedences;
    if (t == null) {
      return 0;
    } else {
      return t[e] || 0;
    }
  }
  parseDialect(e) {
    let t = Object.keys(this.dialects);
    let i = t.map(() => false);
    if (e) {
      for (let r of e.split(" ")) {
        let o = t.indexOf(r);
        if (o >= 0) {
          i[o] = true;
        }
      }
    }
    let s = null;
    for (let r = 0; r < t.length; r++) {
      if (!i[r]) {
        for (let o = this.dialects[t[r]], l; (l = this.data[o++]) != 65535;) {
          (s ||= new Uint8Array(this.maxTerm + 1))[l] = 1;
        }
      }
    }
    return new K1(e, i, s);
  }
  static deserialize(e) {
    return new Ls(e);
  }
}
function bt(n, e) {
  return n[e] | n[e + 1] << 16;
}
function ex(n) {
  let e = null;
  for (let t of n) {
    let i = t.p.stoppedAt;
    if ((t.pos == t.p.stream.end || i != null && t.pos > i) && t.p.parser.stateFlag(t.state, 2) && (!e || e.score < t.score)) {
      e = t;
    }
  }
  return e;
}
function Uh(n) {
  if (n.external) {
    let e = n.extend ? 1 : 0;
    return (t, i) => n.external(t, i) << 1 | e;
  }
  return n.get;
}
const tx = 1;
const ix = 2;
const nx = 3;
const sx = 4;
const rx = 5;
const ox = 6;
const lx = 7;
const ax = 8;
const hx = 392;
const cx = 393;
const fx = 394;
const ux = 395;
const Bo = 9;
const dx = 10;
const mx = 11;
const px = 12;
const Ox = 13;
const gx = 14;
const bx = 15;
const yx = 16;
const xx = 17;
const Qx = 18;
const Sx = 19;
const kx = 20;
const wx = 21;
const vx = 22;
const Cx = 23;
const qx = 24;
const Tx = 25;
const $x = 26;
const Xx = 27;
const Ex = 28;
const Ax = 29;
const Px = 30;
const Mx = 31;
const Rx = 32;
const Vx = 33;
const Wx = 34;
const Dx = 35;
const Lx = 36;
const Hh = 37;
const Kh = 38;
const Jh = 39;
const Nx = 40;
const Bx = 41;
const Yx = 42;
const Gx = 43;
const Ix = 44;
const Zx = 45;
const zx = 46;
const jx = 47;
const _x = 48;
const Fx = 49;
const Ux = 50;
const Hx = 51;
const Kx = 52;
const Jx = 53;
const eQ = 54;
const tQ = 55;
const iQ = 56;
const nQ = 57;
const sQ = 58;
const rQ = 59;
const oQ = 60;
const lQ = 61;
const aQ = 62;
const hQ = 63;
const cQ = 64;
const fQ = 65;
const uQ = 66;
const dQ = 67;
const mQ = 68;
const pQ = 69;
const OQ = 70;
const gQ = 71;
const bQ = 72;
const yQ = 73;
const xQ = 74;
const QQ = 75;
const SQ = 76;
const kQ = 77;
const wQ = 78;
const vQ = 79;
const CQ = 80;
const qQ = 81;
const TQ = 82;
const $Q = 83;
const XQ = 84;
const EQ = 85;
const Lr = 86;
const Nr = 87;
const AQ = 88;
const PQ = 89;
const MQ = 90;
const RQ = 91;
const VQ = 92;
const WQ = 93;
const DQ = 98;
const LQ = 100;
function NQ(n) {
  return n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 48 && n <= 57 || n === 42 || n === 43 || n === 64;
}
function BQ(n) {
  return n >= 65 && n <= 90 || n >= 97 && n <= 122;
}
let ec = null;
let tc = null;
let ic = 0;
function nc(n, e) {
  const t = n.pos + e;
  if (tc === n && ic === t) {
    return ec;
  }
  if (n.peek(e) !== 123) {
    return;
  }
  e++;
  let i = "";
  while (true) {
    const s = n.peek(e);
    if (!NQ(s)) {
      break;
    }
    i += String.fromCharCode(s);
    e++;
  }
  tc = n;
  ic = t;
  return ec = i || null;
}
function sc(n, e) {
  this.name = n;
  this.parent = e;
  this.hash = e ? e.hash : 0;
  for (let t = 0; t < n.length; t++) {
    this.hash += (this.hash << 4) + n.charCodeAt(t) + (n.charCodeAt(t) << 8);
  }
}
const YQ = new J1({
  start: null,
  shift(n, e, t, i) {
    if (e === Bo) {
      return new sc(nc(i, 6) || "", n);
    } else {
      return n;
    }
  },
  reduce(n, e) {
    if (e === DQ && n) {
      return n.parent;
    } else {
      return n;
    }
  },
  reuse(n, e, t, i) {
    if (e.type.id === Bo) {
      return new sc(nc(i, 0) || "", n);
    } else {
      return n;
    }
  },
  hash(n) {
    if (n) {
      return n.hash;
    } else {
      return 0;
    }
  },
  strict: false
});
const GQ = new It((n, e) => {
  if (n.next === 42) {
    n.advance();
  }
  const t = n.next;
  if (t !== -1 && !/\s|\*/.test(String.fromCharCode(t))) {
    for (n.advance();;) {
      const i = n.next;
      if (i === -1 || i === sr) {
        return;
      }
      n.advance();
      if (i === t) {
        break;
      }
    }
    return n.acceptToken(tx);
  }
}, {
  contextual: false
});
const IQ = new It((n, e) => {
  let t = n.next;
  if (t !== -1 && !/\s/.test(String.fromCharCode(t))) {
    if (t === Il) {
      t = Xd;
    }
    n.advance();
    while (true) {
      const i = n.next;
      if (i === -1 || i === sr) {
        return;
      }
      n.advance();
      if (i === t) {
        break;
      }
    }
    return n.acceptToken(ix);
  }
}, {
  contextual: false
});
const ZQ = (n, e, t = 0) => {
  for (let i = 0; i < e.length; i++) {
    if (String.fromCharCode(n.peek(t + i)) !== e[i]) {
      return false;
    }
  }
  return true;
};
const zQ = new It((n, e) => {
  const t = "\\end{" + e.context.name + "}";
  for (let i = 0;; i++) {
    if (n.peek(i) === -1 || ZQ(n, t, i)) {
      return n.acceptToken(rx, i);
    }
  }
}, {
  contextual: false
});
const jQ = new It(n => {
  for (let e = 0;; e++) {
    const t = n.peek(e);
    if (t === -1 || t === Xd) {
      return n.acceptToken(nx, e);
    }
  }
}, {
  contextual: false
});
const _Q = new It(n => {
  for (let e = 0;; e++) {
    const t = n.peek(e);
    if (t === -1 || t === Zl || t === sr) {
      return n.acceptToken(sx, e);
    }
  }
}, {
  contextual: false
});
function Zt(n) {
  return n.charCodeAt(0);
}
const FQ = Zt("\\");
const Il = Zt("{");
const UQ = Zt("[");
const Xd = Zt("}");
const HQ = Zt("\t");
const Zl = Zt(" ");
const sr = Zt(`
`);
const Ed = n => new It(e => {
  for (let t = 0; t < LQ; ++t) {
    const i = e.peek(t);
    if (i === Zl || i === HQ) {
      continue;
    }
    const s = n(i);
    if (s) {
      e.acceptToken(s);
      return;
    }
  }
}, {
  contextual: false,
  fallback: true
});
const KQ = Ed(n => n === Il ? hx : cx);
const JQ = Ed(n => n === Il || n === UQ ? fx : ux);
const eS = Zt("@");
const tS = new It((n, e) => {
  let t = 0;
  let i = -1;
  const s = n.peek(t);
  if (s !== -1 && s === FQ) {
    for (t++;;) {
      const r = n.peek(t);
      if (r === -1 || !BQ(r) && r !== eS) {
        i = t - 1;
        break;
      }
      i = t;
      t++;
    }
    if (i !== -1) {
      return n.acceptToken(ox, i + 1);
    }
  }
});
const rc = "\\end{document}".split("").reverse();
const iS = new It((n, e) => {
  if (n.next !== -1) {
    for (let t = 1; t < rc.length + 1; t++) {
      if (String.fromCharCode(n.peek(-t)) !== rc[t - 1]) {
        return;
      }
    }
    while (n.next === Zl || n.next === sr) {
      if (n.advance() === -1) {
        return n.acceptToken(lx);
      }
    }
    while (n.advance() !== -1);
    return n.acceptToken(ax);
  }
});
const nS = new Set(["\\fullref", "\\Vref", "\\autopageref", "\\autoref", "\\eqref", "\\labelcpageref", "\\labelcref", "\\lcnamecref", "\\lcnamecrefs", "\\namecref", "\\nameCref", "\\namecrefs", "\\nameCrefs", "\\thnameref", "\\thref", "\\titleref", "\\vrefrange", "\\Crefrange", "\\Crefrang", "\\fref", "\\pref", "\\tref", "\\Aref", "\\Bref", "\\Pref", "\\Sref", "\\vref", "\\nameref"]);
const sS = new Set(["\\vpageref", "\\vref", "\\zcpageref", "\\zcref", "\\zfullref", "\\zref", "\\zvpageref", "\\zvref", "\\cref", "\\Cref", "\\pageref", "\\ref", "\\Ref", "\\subref", "\\zpageref", "\\ztitleref", "\\vpagerefrange", "\\zvpagerefrange", "\\zvrefrange", "\\crefrange"]);
const rS = new Set(["\\autocites", "\\Autocites", "\\Cite", "\\citeA", "\\citealp", "\\Citealp", "\\citealt", "\\Citealt", "\\citeauthorNP", "\\citeauthorp", "\\Citeauthorp", "\\citeauthort", "\\Citeauthort", "\\citeNP", "\\citenum", "\\citen", "\\citeonline", "\\cites", "\\Cites", "\\citeurl", "\\citeyearpar", "\\defcitealias", "\\fnotecite", "\\footcite", "\\footcitetext", "\\footfullcite", "\\footnotecites", "\\Footnotecites", "\\fullcite", "\\fullciteA", "\\fullciteauthor", "\\fullciteauthorNP", "\\maskcite", "\\maskciteA", "\\maskcitealp", "\\maskCitealp", "\\maskcitealt", "\\maskCitealt", "\\maskciteauthor", "\\maskciteauthorNP", "\\maskciteauthorp", "\\maskCiteauthorp", "\\maskciteauthort", "\\maskCiteauthort", "\\maskciteNP", "\\maskcitenum", "\\maskcitep", "\\maskCitep", "\\maskcitepalias", "\\maskcitet", "\\maskCitet", "\\maskcitetalias", "\\maskciteyear", "\\maskciteyearNP", "\\maskciteyearpar", "\\maskfullcite", "\\maskfullciteA", "\\maskfullciteauthor", "\\maskfullciteauthorNP", "\\masknocite", "\\maskshortcite", "\\maskshortciteA", "\\maskshortciteauthor", "\\maskshortciteauthorNP", "\\maskshortciteNP", "\\mautocite", "\\Mautocite", "\\mcite", "\\Mcite", "\\mfootcite", "\\mfootcitetext", "\\mparencite", "\\Mparencite", "\\msupercite", "\\mtextcite", "\\Mtextcite", "\\nocite", "\\nocitemeta", "\\notecite", "\\Parencite", "\\parencites", "\\Parencites", "\\pnotecite", "\\shortcite", "\\shortciteA", "\\shortciteauthor", "\\shortciteauthorNP", "\\shortciteNP", "\\smartcite", "\\Smartcite", "\\smartcites", "\\Smartcites", "\\supercite", "\\supercites", "\\textcite", "\\Textcite", "\\textcites", "\\Textcites"]);
const oS = new Set(["\\cite", "\\citeauthor", "\\Citeauthor", "\\citedate", "\\citep", "\\citepalias", "\\Citep", "\\citetitle", "\\citeyear", "\\parencite", "\\citet", "\\citetalias", "\\autocite", "\\Autocite"]);
const lS = new Set(["\\label", "\\thlabel", "\\zlabel"]);
const aS = new Set(["\\text", "\\tag", "\\textrm", "\\intertext"]);
const hS = {
  "\\hbox": xx,
  "\\title": Qx,
  "\\author": Jx,
  "\\affil": eQ,
  "\\affiliation": tQ,
  "\\date": iQ,
  "\\documentclass": Sx,
  "\\usepackage": kx,
  "\\href": wx,
  "\\url": vx,
  "\\verb": Cx,
  "\\lstinline": qx,
  "\\includegraphics": Tx,
  "\\includesvg": $x,
  "\\caption": Xx,
  "\\def": Ex,
  "\\let": Ax,
  "\\left": Px,
  "\\right": Mx,
  "\\newcommand": Rx,
  "\\renewcommand": Vx,
  "\\newenvironment": Wx,
  "\\renewenvironment": Dx,
  "\\book": Lx,
  "\\part": Hh,
  "\\addpart": Hh,
  "\\chapter": Kh,
  "\\addchap": Kh,
  "\\section": Jh,
  "\\addseq": Jh,
  "\\subsection": Nx,
  "\\subsubsection": Bx,
  "\\paragraph": Yx,
  "\\subparagraph": Gx,
  "\\input": Ix,
  "\\include": Zx,
  "\\subfile": zx,
  "\\item": jx,
  "\\centering": Ux,
  "\\newtheorem": _x,
  "\\theoremstyle": Fx,
  "\\bibliography": Hx,
  "\\bibliographystyle": Kx,
  "\\maketitle": nQ,
  "\\textcolor": sQ,
  "\\colorbox": rQ,
  "\\hline": oQ,
  "\\toprule": lQ,
  "\\midrule": aQ,
  "\\bottomrule": hQ,
  "\\multicolumn": cQ,
  "\\parbox": fQ,
  "\\textbf": uQ,
  "\\textit": dQ,
  "\\textsc": mQ,
  "\\texttt": pQ,
  "\\textmd": OQ,
  "\\textsf": gQ,
  "\\textsuperscript": bQ,
  "\\textsubscript": yQ,
  "\\sout": xQ,
  "\\emph": QQ,
  "\\underline": SQ,
  "\\setlength": kQ,
  "\\footnote": wQ,
  "\\endnote": vQ
};
const oc = (n, e) => n === "\\begin" ? Bo : n === "\\end" ? dx : nS.has(n) ? mx : sS.has(n) ? px : rS.has(n) ? Ox : oS.has(n) ? gx : lS.has(n) ? bx : aS.has(n) ? yx : hS[n] || -1;
const cS = new Set(["tabular", "xltabular", "tabularx", "longtable"]);
const fS = new Set(["equation", "equation*", "displaymath", "displaymath*", "math", "math*", "multline", "multline*", "matrix", "tikzcd"]);
const uS = new Set(["array", "eqnarray", "eqnarray*", "align", "align*", "alignat", "alignat*", "flalign", "flalign*", "gather", "gather*", "pmatrix", "pmatrix*", "bmatrix", "bmatrix*", "Bmatrix", "Bmatrix*", "vmatrix", "vmatrix*", "Vmatrix", "Vmatrix*", "smallmatrix", "smallmatrix*", "split", "split*", "gathered", "gathered*", "aligned", "aligned*", "alignedat", "alignedat*", "cases", "cases*", "dcases", "dcases*", "rcases", "rcases*", "IEEEeqnarray", "IEEEeqnarray*", "subeqnarray", "subeqnarray*"]);
const dS = new Set(["verbatim", "boxedverbatim", "lstlisting", "minted", "Verbatim", "lstlisting", "tcblisting", "codeexample", "comment"]);
const mS = {
  document: CQ,
  tikzpicture: EQ,
  figure: Lr,
  "figure*": Lr,
  subfigure: Lr,
  enumerate: Nr,
  itemize: Nr,
  table: AQ,
  description: Nr
};
const lc = (n, e) => cS.has(n) ? qQ : fS.has(n) ? TQ : uS.has(n) ? $Q : dS.has(n) ? XQ : mS[n] || -1;
const pS = {
  "\\(": PQ,
  "\\)": MQ,
  "\\[": RQ,
  "\\]": VQ,
  "\\\\": WQ
};
const ac = (n, e) => pS[n] || -1;
const OS = Ls.deserialize({
  version: 14,
  states: "$MYOVQ#tOOOOQO'#K|'#K|O&rQ#tO'#EtOVQ#tO'#EsO&wQ#tO'#EmO'SQ#tO'#EyO'_Q#tO'#EzO'jQ#tO'#E{O'uQ#tO'#E|O(QQ#tO'#FQO(]Q#tO'#FSO(eQ#tO'#FUO(mQ#tO'#FWO(xQ#tO'#FYO)QQ#tO'#FZO)YQ#tO'#F[O)bQ&jO'#F^O)mQ#tO'#F_O)uQ#tO'#F`O)}Q#uO'#FaO*SQ#vO'#FbO*_Q#tO'#FcO*jQ#tO'#FfO*uQ&jO'#FhO+TQ#tO'#FiO+]Q#tO'#FkO+hQ&jO'#FkO+vQ#tO'#FmO,RQ&jO'#FmO1dQ#tO'#F{OOQO'#Fz'#FzO2jQ$fO'#FoO2uQ$fO'#GTO2zQ#tO'#GUO3SQ$fO'#GVO3_Q$fO'#GWO3jQ#tO'#GXO3rQ$fO'#GYO3}Q#tO'#GZO4VQ#tO'#G^O4VQ#tO'#G`OOQO'#Gb'#GbO4[Q#tO'#GcO:aQ#tO'#GdO@fQ#tO'#GeOFkQ#tO'#GfOFsQ&jO'#GkOGOQ#tO'#GlOGZQ#tO'#GmOGZQ#tO'#GnOGZQ#tO'#GoOGZQ#tO'#GpOGZQ#tO'#GqOGZQ#tO'#GrOGZQ#tO'#GsOGZQ#tO'#GtOGZQ#tO'#GuOGZQ#tO'#GvOGZQ#tO'#GwOG`Q#tO'#GxOGhQ#tO'#GyOGsQ#tO'#GzOOQO'#El'#ElOMRQ#tO'#G{OOQO'#G{'#G{OOQO'#Ek'#EkO!${Q,UO'#G|OOQO'#Iq'#IqO!%SQ,UO'#IpOOQO'#It'#ItO!%ZQ,UO'#IsOOQO'#K{'#K{OVQ#tO'#EcO!*eQ#tO'#IxO!*lQ,UO'#I}O!*lQ,UO'#JSO!*sQ$UO'#JWO!*xQ#tO'#J]OVQ#tO'#JdOVQ#tO'#JhOVQ#tO'#JlOOQO'#Eb'#EbOOQO'#Kz'#KzO!0UQ#tO'#JpOOQO'#Ky'#KyOOQO'#K['#K[OOQO'#KZ'#KZO!0]Q&jO'#JrO!0kQ&jO'#JuO!0yQ&jO'#JxO!1XQ&jO'#J{O!1gQ&jO'#KOO!1uQ&jO'#KRO!2TQ&jO'#KUO!2cQ&jO'#KXO!2qQ#tO'#KWOOQO'#MQ'#MQO!3hQ#tO'#E`QOQ#tOOO!3uQ#tO'#KTO!4lQ#tO'#KQO!5cQ#tO'#J}O!6YQ#tO'#JzO!7PQ#tO'#JwO!7vQ#tO'#JtO!8mQ#tO'#JqO!9dQ&jO'#EuO!:XQ#tO,5;`O!?tQ#tO,5;OO!EaQ#tO,5?eO!JgQ,UO,5?jO# dQ,UO,5?oO#&aQ$UO,5?sO#&lQ#tO,5?xO#+xQ#tO,5@PO#1eQ#tO,5@TO#7QQ#tO,5@XOOQO'#Ew'#EwO#<mQ#tO,5;_O#<rQ#tO'#EoOOQO,5;X,5;XOGZQ#tO,5;XO#GOQ#tO'#EhO#GVQ#tO,5;XOOQO,5;e,5;eO#G_Q#tO,5;eO#GgQ#tO,5;eOOQO,5;f,5;fO#GrQ#tO,5;fO#GzQ#tO,5;fOOQO,5;g,5;gO#HVQ#tO,5;gO#H_Q#tO,5;gO#HjQ#tO'#E}OOQO,5;h,5;hO#MsQ#tO,5;hO#M{Q#tO,5;hOOQO'#FR'#FROOQO,5;l,5;lO#NWQ#tO,5;lO#N]Q#tO,5;lOOQO'#FT'#FTOOQO,5;n,5;nO#NWQ#tO,5;nOOQO'#FV'#FVOOQO,5;p,5;pO#NWQ#tO,5;pOOQO'#FX'#FXOOQO,5;r,5;rO#NWQ#tO,5;rO#N]Q#tO,5;rO#NeQ#tO,5;tO#NWQ#tO,5;tO#NmQ#tO,5;uO#NWQ#tO,5;uO#NuQ#xO'#F]O#NWQ#tO,5;vO#NzQ#tO,5;vO#GVQ#tO,5;xO$ PQ#tO,5;xO#NWQ#tO,5;xOOQO,5;y,5;yO#NWQ#tO,5;yOOQO,5;z,5;zO#NzQ#tO,5;zOOQO,5;{,5;{OOQO,5;|,5;|O$ XQ#vO,5;|O$ ^Q#vO,5;|O$ fQ#xO'#FeOOQO'#Fd'#FdOOQO,5;},5;}O4VQ#tO,5;}O$ kQ#tO,5;}OOQO'#Fg'#FgOOQO,5<Q,5<QO4VQ#tO,5<QO$ kQ#tO,5<QOOQO,5<S,5<SOGZQ#tO,5<SO$ sQ#tO,5<SO#GVQ#tO,5<SOOQO'#Fj'#FjOOQO,5<T,5<TO#NWQ#tO,5<TOOQO'#Fl'#FlOOQO,5<V,5<VO$!OQ#tO,5<VO$!OQ#tO,5<VO$!ZQ#tO,5<VOOQO'#Fn'#FnOOQO,5<X,5<XO$!fQ#tO,5<XO$!fQ#tO,5<XO$!qQ#tO,5<XOOQO,5<g,5<gO$!|Q#tO,5<ZO$#_Q$fO,5<ZO$#gQ'[O,5<oOOQO,5<p,5<pOGZQ#tO,5<pO$#rQ#tO,5<qO$$QQ#xO,5<qO$$VQ$fO,5<qO$#rQ#tO,5<rO$$_Q#xO,5<rO$$dQ$fO,5<rO$$lQ#xO,5<sO$$qQ#tO,5<sO$#rQ#tO,5<tO$$vQ#xO,5<tO$${Q$fO,5<tO$%TQ#|O'#G]OOQO'#G['#G[OOQO,5<u,5<uOOQO'#G_'#G_OOQO,5<x,5<xOOQO'#Ga'#GaOOQO,5<z,5<zO$%YQ#tO,5<}OOQO,5<},5<}OOQO,5=O,5=OOOQO,5=P,5=POOQO'#Gg'#GgO$+_Q#tO,5=QO#NWQ#tO,5=QOOQO,5=V,5=VOGZQ#tO,5=VO$+gQ&jO,5=VOOQO'#Kf'#KfOGOQ#tO,5=WO$+oQ#tO,5=WO#GYQ#tO'#KfOOQO,5=X,5=XOOQO,5=Y,5=YOOQO,5=Z,5=ZOOQO,5=[,5=[OOQO,5=],5=]OOQO,5=^,5=^OOQO,5=_,5=_OOQO,5=`,5=`OOQO,5=a,5=aOOQO,5=b,5=bOOQO,5=c,5=cO$+wQ#tO,5=dO#NWQ#tO,5=dOOQO,5=e,5=eO$,PQ#tO,5=eO$,XQ#tO,5=eOOQO,5=f,5=fO$,dQ#tO,5=fO$,lQ#tO,5=fOOQO'#Kg'#KgO$,wQ#tO,5=gO$,wQ#tO,5=gO$2vQ,UO'#F{O$3TQ#tO'#HRO$3`Q#tO'#HSO$3kQ#tO'#HTO$3vQ#tO'#HUO$4RQ#tO'#HVO$4^Q#tO'#HWO$4iQ#tO'#HYO$4qQ#tO'#H[O$4yQ#tO'#H^O$5UQ#tO'#H_O$5^Q#tO'#HaO$5fQ#tO'#HbO$5nQ&jO'#HcO$5yQ#tO'#HdO$6RQ#tO'#HeO$6ZQ#uO'#HfO$6`Q#vO'#HgO$6kQ#tO'#HhO$6vQ#tO'#HjO$7RQ&jO'#HlO$7aQ#tO'#HmO$7iQ#tO'#HnO$7tQ&jO'#HnO$8SQ#tO'#HoO$8_Q&jO'#HoO$8mQ$fO'#HpO$8xQ$fO'#HqO$8}Q#tO'#HrO$9VQ$fO'#HsO$9bQ$fO'#HtO$9mQ#tO'#HuO$9uQ$fO'#HvO3}Q#tO'#HwO4VQ#tO'#HyO4VQ#tO'#H{OOQO'#H}'#H}O$:QQ,UO'#IOO$?^Q,UO'#IPO$DjQ,UO'#IQO$IvQ#tO'#IRO$JOQ&jO'#IUOGOQ#tO'#IVOGZQ#tO'#IWOGZQ#tO'#IXOGZQ#tO'#IYOGZQ#tO'#IZOGZQ#tO'#I[OGZQ#tO'#I]OGZQ#tO'#I^OGZQ#tO'#I_O$JZQ#tO'#I`O$JZQ#tO'#IaO$JZQ#tO'#IbO$J`Q#tO'#IcO$JhQ#tO'#IdO$JsQ#tO'#IeOOQO'#HQ'#HQO$KOQ!!^O'#L^OOQO'#L^'#L^OOQO'#If'#IfOOQO'#HP'#HPO$KWQ,UO'#IgO$MhQ7[O'#IiO$MoQ,UO'#IhOOQO'#Kh'#KhO$MvQ,UO'#HOOOQO'#G}'#G}O$N^Q,UO'#IoO$NeQ#tO,5=hOOQO'#Ir'#IrOOQO,5?[,5?[O$NjQ#tO,5?[OOQO'#Iu'#IuOOQO,5?_,5?_O$NoQ#tO,5?_O$NtQ#tO,5:}O$NyQ#tO'#GjOOQO'#I{'#I{O% TQ#tO,5?dOOQO'#JQ'#JQO% YQ#tO,5?iO% _Q#tO,5?nOOQO'#JZ'#JZO% dQ#tO,5?rO!*xQ#tO'#JbOOQO'#Kj'#KjO% iQ#tO'#JaOOQO'#J`'#J`O% sQ#tO,5?wO% xQ#tO,5@OO% }Q#tO,5@SO%!SQ#tO,5@WOOQO,5@[,5@[O%!XQ#tO,5@[OOQO-E>Y-E>YO#<rQ#tO'#GSOOQO,5@^,5@^O%!^Q#tO,5@^O%!fQ#tO,5@^O%!qQ&jO,5@^OOQO,5@a,5@aO%#PQ#tO,5@aO%#XQ#tO,5@aO%#dQ&jO,5@aOOQO,5@d,5@dO%#rQ#tO,5@dO%#zQ#tO,5@dO%$VQ&jO,5@dOOQO,5@g,5@gO%$eQ#tO,5@gO%$mQ#tO,5@gO%$xQ&jO,5@gOOQO,5@j,5@jO%%WQ#tO,5@jO%%`Q#tO,5@jO%%kQ&jO,5@jOOQO,5@m,5@mO%%yQ#tO,5@mO%&RQ#tO,5@mO%&^Q&jO,5@mOOQO,5@p,5@pO%&lQ#tO,5@pO%&tQ#tO,5@pO%'PQ&jO,5@pOOQO,5@s,5@sO%'_Q#tO,5@sO%'gQ#tO,5@sO%'rQ&jO,5@sOOQO'#Kr'#KrO%(QQ#tO'#KYOOQO,5@r,5@rOOQO-E>X-E>XOOQO'#Kq'#KqO%(wQ#tO'#KVOOQO,5@o,5@oOOQO'#Kp'#KpO%)nQ#tO'#KSOOQO,5@l,5@lOOQO'#Ko'#KoO%*eQ#tO'#KPOOQO,5@i,5@iOOQO'#Kn'#KnO%+[Q#tO'#J|OOQO,5@f,5@fOOQO'#Km'#KmO%,RQ#tO'#JyOOQO,5@c,5@cOOQO'#Kl'#KlO%,xQ#tO'#JvOOQO,5@`,5@`OOQO'#Kk'#KkO%-oQ#tO'#JsOOQO,5@],5@]O%.fQ#tO,5;POOQO,5;a,5;aO%.kQ#tO,5;aO%.pQ#tO,5?fO%.uQ#tO,5?kO%.zQ#tO,5?pO%/PQ#tO,5?tO%/UQ#tO,5?yO%/ZQ#tO,5@QO%/`Q#tO,5@UO%/eQ#tO,5@YOOQ`'#K_'#K_O%/jQ#tO1G0zO%/jQ#tO1G0zO%5VQ#tO1G0jO%5VQ#tO1G0jO%:rQ#tO1G5PO%:rQ#tO1G5PO%?xQ,UO1G5UO%?xQ,UO1G5UO%DuQ,UO1G5ZO%DuQ,UO1G5ZO%IrQ$UO1G5_O%IrQ$UO1G5_O%IzQ#tO1G5dO%IzQ#tO1G5dO& WQ#tO1G5kO& WQ#tO1G5kO&&sQ#tO1G5oO&&sQ#tO1G5oO&,`Q#tO1G5sO&,`Q#tO1G5sO&1{Q#tO'#ExOOQO1G0y1G0yO#<rQ#tO'#ErOOQO'#K^'#K^O&6}Q#tO'#EpO&7eQ#tO,5;ZOOQO1G0s1G0sO&7jQ#tO'#IvOOQO'#K]'#K]O&7qQ#tO'#EjO&7{Q#tO,5;SOGZQ#tO1G0sOOQO1G1P1G1POGZQ#tO1G1PO&8QQ#tO1G1POOQO1G1Q1G1QOGZQ#tO1G1QO&8YQ#tO1G1QOOQO1G1R1G1ROGZQ#tO1G1RO&8bQ#tO1G1RO#HjQ#tO'#FPOOQO'#K`'#K`O&8jQ#tO'#FOO&8}Q#tO,5;iOOQO1G1S1G1SO#NWQ#tO1G1SO&9SQ#tO1G1SOOQO1G1W1G1WO#NWQ#tO1G1WOOQO1G1Y1G1YOOQO1G1[1G1[OOQO1G1^1G1^O#NWQ#tO1G1^OOQO1G1`1G1`OGZQ#tO1G1`O&9[Q#tO1G1`OOQO1G1a1G1aOGZQ#tO1G1aO&9dQ#tO1G1aO&9lQ#tO,5;wOOQO1G1b1G1bO#NWQ#tO1G1bO&9qQ#tO1G1dOGZQ#tO1G1dO#GVQ#tO1G1dO#NWQ#tO1G1dOOQO1G1e1G1eOOQO1G1f1G1fOOQO1G1h1G1hO&?vQ#vO1G1hO&?{Q#tO,5<POOQO1G1i1G1iO4VQ#tO1G1iOOQO1G1l1G1lO4VQ#tO1G1lOOQO1G1n1G1nOGZQ#tO1G1nO#GVQ#tO1G1nOOQO1G1o1G1oOOQO1G1q1G1qO&@QQ#tO1G1qO&@YQ#tO1G1qO&@eQ#tO1G1qO&@eQ#tO1G1qOOQO1G1s1G1sO&@pQ#tO1G1sO&@xQ#tO1G1sO&ATQ#tO1G1sO&ATQ#tO1G1sO&A`Q&jO'#FqO$#YQ#tO'#FrOOQO'#Ka'#KaO&A}Q#tO1G1uO&A}Q#tO1G1uO&B`Q#tO'#FsO&HgQ#tO'#FsO&B`Q#tO'#FsOOQO1G1u1G1uO&HnQ#tO1G1uOOQO1G2Z1G2ZO&IPQ$fO1G2ZO&IXQ'[O1G2ZOOQO1G2[1G2[OOQO'#Kb'#KbOOQO'#Ke'#KeO$#rQ#tO1G2]OOQO1G2]1G2]O&IdQ#tO1G2]O$#rQ#tO1G2]O&IiQ#xO1G2]O$#rQ#tO1G2^OOQO1G2^1G2^O&InQ#tO1G2^O$#rQ#tO1G2^O&IsQ#xO1G2^O&IxQ#tO1G2_O&I}Q#xO1G2_O$#rQ#tO1G2`O&JSQ#tO1G2`O&J_Q#tO1G2`O$#rQ#tO1G2`O&JdQ#xO1G2`OOQO,5<w,5<wOOQO1G2i1G2iOOQO'#Gh'#GhO&JiQ#tO1G2lO#NWQ#tO1G2lO&JqQ#tO1G2lOOQO1G2q1G2qOGZQ#tO1G2qOOQO-E>d-E>dO&JyQ#tO1G2rOOQO1G2r1G2rOGZQ#tO1G2rOOQO,5AQ,5AQOOQO1G3O1G3OO#NWQ#tO1G3OO&KRQ#tO1G3OOOQO1G3P1G3POGZQ#tO1G3PO&KZQ#tO1G3POOQO1G3Q1G3QOGZQ#tO1G3QO&KcQ#tO1G3QOOQO-E>e-E>eOOQO1G3R1G3ROOQO,5=m,5=mOGZQ#tO,5=mO#GVQ#tO,5=mOOQO,5=n,5=nO&KkQ#tO,5=nO&KsQ#tO,5=nOOQO,5=o,5=oO&LOQ#tO,5=oO&LWQ#tO,5=oOOQO,5=p,5=pO&LcQ#tO,5=pO&LkQ#tO,5=pOOQO,5=q,5=qO&LvQ#tO,5=qO&MOQ#tO,5=qOOQO'#HX'#HXOOQO,5=r,5=rO#NWQ#tO,5=rO#N]Q#tO,5=rOOQO'#HZ'#HZOOQO,5=t,5=tO#NWQ#tO,5=tOOQO'#H]'#H]OOQO,5=v,5=vO#NWQ#tO,5=vOOQO,5=x,5=xO#NWQ#tO,5=xO#N]Q#tO,5=xO&MZQ#tO,5=yO#NWQ#tO,5=yO&McQ#tO,5={O#NWQ#tO,5={O#NWQ#tO,5=|O#NzQ#tO,5=|O#GVQ#tO,5=}O&MkQ#tO,5=}O#NWQ#tO,5=}OOQO,5>O,5>OO#NWQ#tO,5>OOOQO,5>P,5>PO#NzQ#tO,5>POOQO,5>Q,5>QOOQO,5>R,5>RO&MsQ#vO,5>RO&MxQ#vO,5>ROOQO'#Hi'#HiOOQO,5>S,5>SO4VQ#tO,5>SO$ kQ#tO,5>SOOQO'#Hk'#HkOOQO,5>U,5>UO4VQ#tO,5>UO$ kQ#tO,5>UOOQO,5>W,5>WOGZQ#tO,5>WO&NQQ#tO,5>WO#GVQ#tO,5>WOOQO,5>X,5>XO#NWQ#tO,5>XOOQO,5>Y,5>YO&N]Q#tO,5>YO&N]Q#tO,5>YO&NhQ#tO,5>YOOQO,5>Z,5>ZO&NsQ#tO,5>ZO&NsQ#tO,5>ZO' OQ#tO,5>ZO' ZQ#tO,5>[O' lQ$fO,5>[O' tQ'[O,5>]OOQO,5>^,5>^OGZQ#tO,5>^O$#rQ#tO,5>_O'!PQ#xO,5>_O'!UQ$fO,5>_O$#rQ#tO,5>`O'!^Q#xO,5>`O'!cQ$fO,5>`O'!kQ#xO,5>aO'!pQ#tO,5>aO$#rQ#tO,5>bO'!uQ#xO,5>bO'!zQ$fO,5>bOOQO'#Hx'#HxOOQO,5>c,5>cOOQO'#Hz'#HzOOQO,5>e,5>eOOQO'#H|'#H|OOQO,5>g,5>gO'#SQ,UO,5>jOOQO,5>j,5>jOOQO,5>k,5>kOOQO,5>l,5>lOOQO'#IS'#ISO'(`Q#tO,5>mO#NWQ#tO,5>mOOQO,5>p,5>pOGZQ#tO,5>pO'(hQ&jO,5>pOGOQ#tO,5>qO'(pQ#tO,5>qOOQO,5>r,5>rOOQO,5>s,5>sOOQO,5>t,5>tOOQO,5>u,5>uOOQO,5>v,5>vOOQO,5>w,5>wOOQO,5>x,5>xOOQO,5>y,5>yO'(xQ,UO'#H`OOQO,5>z,5>zOOQO,5>{,5>{OOQO,5>|,5>|O')PQ#tO,5>}O#NWQ#tO,5>}OOQO,5?O,5?OO')XQ#tO,5?OO')aQ#tO,5?OOOQO,5?P,5?PO')lQ#tO,5?PO')tQ#tO,5?PO'*PQ#tO'#KiO'*XQ!!^O,5AxOOQO,5Ax,5AxOOQO,5?R,5?RO'*aQ#tO,5?ROOQO'#Ij'#IjOOQO,5?T,5?TO$K_Q7[O,5?TO'*fQ7[O'#IkOOQO,5?S,5?SO'*mQ#tO,5?SOOQO-E>f-E>fOOQO,5?Z,5?ZO'*rQ#tO,5?ZOOQO1G3S1G3SOOQO1G4v1G4vOOQO1G4y1G4yO'*wQ#tO'#IwO'0PQ%WO1G0iO'1VQ#tO'#I|OOQO1G5O1G5OO'1[Q#tO'#JROOQO1G5T1G5TO'1aQ#tO'#JVOOQO1G5Y1G5YO'1fQ#tO'#J[OOQO1G5^1G5^O'1kQ#tO,5?|OOQO-E>h-E>hO'1pQ#tO'#JcOOQO1G5c1G5cO'1uQ#tO'#JgOOQO1G5j1G5jO'1zQ#tO'#JkOOQO1G5n1G5nO'2PQ#tO'#JoOOQO1G5r1G5rOOQO1G5v1G5vO'2UQ#tO,5<nOOQO1G5x1G5xO'2ZQ#tO1G5xO'2`Q#tO1G5xO'2hQ#tO1G5xO'2sQ#tO1G5xOOQO1G5{1G5{O'2ZQ#tO1G5{O'3OQ#tO1G5{O'3WQ#tO1G5{O'3cQ#tO1G5{OOQO1G6O1G6OO'2ZQ#tO1G6OO'3nQ#tO1G6OO'3vQ#tO1G6OO'4RQ#tO1G6OOOQO1G6R1G6RO'2ZQ#tO1G6RO'4^Q#tO1G6RO'4fQ#tO1G6RO'4qQ#tO1G6ROOQO1G6U1G6UO'2ZQ#tO1G6UO'4|Q#tO1G6UO'5UQ#tO1G6UO'5aQ#tO1G6UOOQO1G6X1G6XO'2ZQ#tO1G6XO'5lQ#tO1G6XO'5tQ#tO1G6XO'6PQ#tO1G6XOOQO1G6[1G6[O'2ZQ#tO1G6[O'6[Q#tO1G6[O'6dQ#tO1G6[O'6oQ#tO1G6[OOQO1G6_1G6_O'2ZQ#tO1G6_O'6zQ#tO1G6_O'7SQ#tO1G6_O'7_Q#tO1G6_OOQO-E>p-E>pOOQO-E>o-E>oOOQO-E>n-E>nOOQO-E>m-E>mOOQO-E>l-E>lOOQO-E>k-E>kOOQO-E>j-E>jOOQO-E>i-E>iOOQ!b1G0k1G0kOOQO1G0{1G0{OOQO1G5Q1G5QOOQO1G5V1G5VOOQO1G5[1G5[OOQ`1G5`1G5`OOQO1G5e1G5eOOQO1G5l1G5lOOQO1G5p1G5pOOQO1G5t1G5tOOQ`-E>]-E>]O'7jQ#tO7+&fO'=VQ#tO7+&UO'BrQ#tO7+*kO'GxQ,UO7+*pO'LuQ,UO7+*uO(#rQ$UO7+*yO(#zQ#tO7++OO()WQ#tO7++VO(.sQ#tO7++ZO(4`Q#tO7++_O!:PQ&jO'#EuOOQO,5;d,5;dO(9{Q#tO,5;^OOQO-E>[-E>[OOQ`1G0u1G0uO(:QQ#tO,5?bOOQO-E>Z-E>ZOOQ!Ld1G0n1G0nOOQO7+&_7+&_OOQO7+&k7+&kOGZQ#tO7+&kOOQO7+&l7+&lOGZQ#tO7+&lOOQO7+&m7+&mOGZQ#tO7+&mO(:VQ#tO,5;kOOQO-E>^-E>^OOQO1G1T1G1TOOQO7+&n7+&nO#NWQ#tO7+&nOOQO7+&r7+&rOOQO7+&x7+&xOOQO7+&z7+&zOGZQ#tO7+&zOOQO7+&{7+&{OGZQ#tO7+&{OOQO1G1c1G1cOOQO7+&|7+&|OOQO7+'O7+'OO(:[Q#tO7+'OOGZQ#tO7+'OO#GVQ#tO7+'OOOQO7+'S7+'SOOQO1G1k1G1kOOQO7+'T7+'TOOQO7+'W7+'WOOQO7+'Y7+'YOGZQ#tO7+'YOOQO7+']7+']O#NWQ#tO7+']O(@aQ#tO7+']O(@iQ#tO7+']O(@tQ#tO7+']OOQO7+'_7+'_O#NWQ#tO7+'_O(APQ#tO7+'_O(AXQ#tO7+'_O(AdQ#tO7+'_OOQO,5<],5<]O(AoQ#tO,5<^OOQO-E>_-E>_O&JSQ#tO7+'aOOQO7+'a7+'aO(AtQ#tO7+'aOOQO-E>`-E>`O(BVQ#tO,5<_O(B^Q!NvO'#L[OOQO'#L['#L[OOQO'#Fw'#FwOOQO'#Fv'#FvO(BfQ#tO'#F|O(BmQ&jO'#GROOQO'#Kc'#KcO(B{Q#tO'#FuOOQO,5<_,5<_O(CSQ#tO,5<_O(CXQ#tO,5<_O(AtQ#tO7+'aOOQO7+'u7+'uO(CaQ$fO7+'uO(CfQ$fO7+'uOOQO-E>c-E>cOOQO7+'w7+'wO$#rQ#tO7+'wO$#rQ#tO7+'wO(CnQ#tO7+'wOOQO7+'x7+'xO$#rQ#tO7+'xO$#rQ#tO7+'xO(CsQ#tO7+'xO$#rQ#tO7+'yO(CxQ#tO7+'yO&JSQ#tO7+'zOOQO7+'z7+'zO$#rQ#tO7+'zO$#rQ#tO7+'zO(C}Q#tO7+'zO(DSQ#tO'#GiOOQO7+(W7+(WO(DZQ#tO7+(WO(D`Q#tO7+(WO#NWQ#tO7+(WOOQO7+(]7+(]OOQO7+(^7+(^OGZQ#tO7+(^OOQO7+(j7+(jO#NWQ#tO7+(jOOQO7+(k7+(kOGZQ#tO7+(kOOQO7+(l7+(lOGZQ#tO7+(lOOQO1G3X1G3XOGZQ#tO1G3XOOQO1G3Y1G3YOGZQ#tO1G3YO(DhQ#tO1G3YOOQO1G3Z1G3ZOGZQ#tO1G3ZO(DpQ#tO1G3ZOOQO1G3[1G3[OGZQ#tO1G3[O(DxQ#tO1G3[OOQO1G3]1G3]O#NWQ#tO1G3]O(EQQ#tO1G3]OOQO1G3^1G3^O#NWQ#tO1G3^OOQO1G3`1G3`OOQO1G3b1G3bOOQO1G3d1G3dO#NWQ#tO1G3dOOQO1G3e1G3eO$JZQ#tO1G3eO(EYQ#tO1G3eOOQO1G3g1G3gO$JZQ#tO1G3gO(EbQ#tO1G3gOOQO1G3h1G3hO#NWQ#tO1G3hO(EjQ,UO1G3iOGZQ#tO1G3iO#GVQ#tO1G3iO#NWQ#tO1G3iOOQO1G3j1G3jOOQO1G3k1G3kOOQO1G3m1G3mO(JvQ#vO1G3mOOQO1G3n1G3nO4VQ#tO1G3nOOQO1G3p1G3pO4VQ#tO1G3pOOQO1G3r1G3rOGZQ#tO1G3rO#GVQ#tO1G3rOOQO1G3s1G3sOOQO1G3t1G3tO(J{Q#tO1G3tO(KTQ#tO1G3tO(K`Q#tO1G3tO(K`Q#tO1G3tOOQO1G3u1G3uO(KkQ#tO1G3uO(KsQ#tO1G3uO(LOQ#tO1G3uO(LOQ#tO1G3uO(LZQ#tO1G3vO(LZQ#tO1G3vOOQO1G3v1G3vO(LlQ#tO1G3vOOQO1G3w1G3wO(L}Q$fO1G3wO(MVQ'[O1G3wOOQO1G3x1G3xO$#rQ#tO1G3yOOQO1G3y1G3yO(MbQ#tO1G3yO$#rQ#tO1G3yO(MgQ#xO1G3yO$#rQ#tO1G3zOOQO1G3z1G3zO(MlQ#tO1G3zO$#rQ#tO1G3zO(MqQ#xO1G3zO(MvQ#tO1G3{O(M{Q#xO1G3{O$#rQ#tO1G3|O&JSQ#tO1G3|O(NQQ#tO1G3|O$#rQ#tO1G3|O(NVQ#xO1G3|OOQO1G4U1G4UOOQO'#IT'#ITO(N[Q#tO1G4XO#NWQ#tO1G4XO(NdQ#tO1G4XOOQO1G4[1G4[OGZQ#tO1G4[O(NlQ#tO1G4]OOQO1G4]1G4]OGZQ#tO1G4]OOQMh,5=z,5=zO(NtQ#tO,5=zOOQO1G4i1G4iO#NWQ#tO1G4iO(NyQ#tO1G4iOOQO1G4j1G4jOGZQ#tO1G4jO) RQ#tO1G4jOOQO1G4k1G4kOGZQ#tO1G4kO) ZQ#tO1G4kOOQMh,5AT,5ATO$JZQ#tO,5ATOOQMh-E>g-E>gOOQO1G7d1G7dOOQO1G4m1G4mOOQO1G4o1G4oOOQO,5?V,5?VO$K_Q7[O,5?VOOQO1G4n1G4nOOQO1G4u1G4uO) cQ-hO1G0iO) vQ&jO'#EeOOQ!b,5?c,5?cOOQO7+&T7+&TO) {Q&jO'#IzOOQO,5?h,5?hO)!QQ&jO'#JPOOQO,5?m,5?mO)!VQ&jO'#JUOOQO,5?q,5?qO)![Q&jO'#JYOOQO,5?v,5?vOOQO1G5h1G5hO)!aQ&jO'#J_OOQO,5?},5?}O)!fQ&jO'#JfOOQO,5@R,5@RO)!kQ&jO'#JjOOQO,5@V,5@VO)!pQ&jO'#JnOOQO,5@Z,5@ZOOQO1G2Y1G2YOOQO7++d7++dO'2ZQ#tO7++dO)!uQ#tO7++dO)!}Q#tO7++dOOQO7++g7++gO'2ZQ#tO7++gO)#YQ#tO7++gO)#bQ#tO7++gOOQO7++j7++jO'2ZQ#tO7++jO)#mQ#tO7++jO)#uQ#tO7++jOOQO7++m7++mO'2ZQ#tO7++mO)$QQ#tO7++mO)$YQ#tO7++mOOQO7++p7++pO'2ZQ#tO7++pO)$eQ#tO7++pO)$mQ#tO7++pOOQO7++s7++sO'2ZQ#tO7++sO)$xQ#tO7++sO)%QQ#tO7++sOOQO7++v7++vO'2ZQ#tO7++vO)%]Q#tO7++vO)%eQ#tO7++vOOQO7++y7++yO'2ZQ#tO7++yO)%pQ#tO7++yO)%xQ#tO7++yOOQO1G0x1G0xO)&TQ#tO1G3ROOQO1G4|1G4|OOQO<<JV<<JVOOQO<<JW<<JWOOQO<<JX<<JXOOQO1G1V1G1VOOQO<<JY<<JYOOQO<<Jf<<JfOOQO<<Jg<<JgOOQO<<Jj<<JjO)+ZQ#tO<<JjOGZQ#tO<<JjOOQO<<Jt<<JtOOQO<<Jw<<JwO#NWQ#tO<<JwO)1`Q#tO<<JwO)1hQ#tO<<JwOOQO<<Jy<<JyO#NWQ#tO<<JyO)1sQ#tO<<JyO)1{Q#tO<<JyOOQO1G1x1G1xOOQO<<J{<<J{O&JSQ#tO<<J{OOQO1G1y1G1yO)2WQ#tO1G1yO)2]Q#tO'#KdO)2hQ!NvO,5AvOOQO,5Av,5AvOOQO,5<h,5<hO)2pQ#tO,5<hOOQO,5<m,5<mO)2uQ#tO,5<mO)2}Q#tO,5<mO)3YQ&jO,5<mOOQO-E>a-E>aO)3hQ#tO1G1yO)3oQ#tO<<J{OOQO<<Ka<<KaO)4QQ$fO<<KaO$#rQ#tO<<KcOOQO<<Kc<<KcO$#rQ#tO<<KcO$#rQ#tO<<KdOOQO<<Kd<<KdO$#rQ#tO<<KdO$#rQ#tO<<KeO&JSQ#tO<<KeO$#rQ#tO<<KeOOQO<<Kf<<KfO$#rQ#tO<<KfO&JSQ#tO<<KfO$#rQ#tO<<KfO)4VQ#tO,5=TOOQO<<Kr<<KrO(DZQ#tO<<KrO)4[Q#tO<<KrOOQO<<Kx<<KxOOQO<<LU<<LUOOQO<<LV<<LVOOQO<<LW<<LWOOQO7+(s7+(sOOQO7+(t7+(tOGZQ#tO7+(tOOQO7+(u7+(uOGZQ#tO7+(uOOQO7+(v7+(vOGZQ#tO7+(vOOQO7+(w7+(wO#NWQ#tO7+(wOOQO7+(x7+(xOOQO7+)O7+)OOOQO7+)P7+)PO$JZQ#tO7+)POOQO7+)R7+)RO$JZQ#tO7+)ROOQO7+)S7+)SOOQO7+)T7+)TO)4dQ,UO7+)TOGZQ#tO7+)TO#GVQ#tO7+)TOOQO7+)X7+)XOOQO7+)Y7+)YOOQO7+)[7+)[OOQO7+)^7+)^OGZQ#tO7+)^OOQO7+)`7+)`O#NWQ#tO7+)`O)9pQ#tO7+)`O)9xQ#tO7+)`O):TQ#tO7+)`OOQO7+)a7+)aO#NWQ#tO7+)aO):`Q#tO7+)aO):hQ#tO7+)aO):sQ#tO7+)aO&JSQ#tO7+)bOOQO7+)b7+)bO);OQ#tO7+)bO);OQ#tO7+)bOOQO7+)c7+)cO);aQ$fO7+)cO);fQ$fO7+)cOOQO7+)e7+)eO$#rQ#tO7+)eO$#rQ#tO7+)eO);nQ#tO7+)eOOQO7+)f7+)fO$#rQ#tO7+)fO$#rQ#tO7+)fO);sQ#tO7+)fO$#rQ#tO7+)gO);xQ#tO7+)gO&JSQ#tO7+)hOOQO7+)h7+)hO$#rQ#tO7+)hO$#rQ#tO7+)hO);}Q#tO7+)hOOQO7+)s7+)sO(DZQ#tO7+)sO)<SQ#tO7+)sO#NWQ#tO7+)sOOQO7+)v7+)vOOQO7+)w7+)wOGZQ#tO7+)wOOQMh1G3f1G3fOOQO7+*T7+*TO#NWQ#tO7+*TOOQO7+*U7+*UOGZQ#tO7+*UOOQO7+*V7+*VOGZQ#tO7+*VOOQMh1G6o1G6oOOQO1G4q1G4qOOQO<= O<= OO'2ZQ#tO<= OO)<[Q#tO<= OOOQO<= R<= RO'2ZQ#tO<= RO)<dQ#tO<= ROOQO<= U<= UO'2ZQ#tO<= UO)<lQ#tO<= UOOQO<= X<= XO'2ZQ#tO<= XO)<tQ#tO<= XOOQO<= [<= [O'2ZQ#tO<= [O)<|Q#tO<= [OOQO<= _<= _O'2ZQ#tO<= _O)=UQ#tO<= _OOQO<= b<= bO'2ZQ#tO<= bO)=^Q#tO<= bOOQO<= e<= eO'2ZQ#tO<= eO)=fQ#tO<= eOOQOAN@UAN@UOOQOAN@cAN@cO#NWQ#tOAN@cO)=nQ#tOAN@cOOQOAN@eAN@eO#NWQ#tOAN@eO)=vQ#tOAN@eOOQOAN@gAN@gOOQO7+'e7+'eO)>OQ#tO'#FyOOQ!LQ,5AO,5AOO)>VQ#tO,5AOOOQ!LQ-E>b-E>bOOQO1G7b1G7bOOQO1G2S1G2SOOQO1G2X1G2XO'2ZQ#tO1G2XO)>_Q#tO1G2XO)>gQ#tO1G2XO)>rQ#tO1G2XO)>}Q#tO7+'eO&JSQ#tOAN@gOOQOAN@{AN@{OOQOAN@}AN@}O$#rQ#tOAN@}OOQOANAOANAOO$#rQ#tOANAOO&JSQ#tOANAPOOQOANAPANAPO$#rQ#tOANAPO&JSQ#tOANAQOOQOANAQANAQO$#rQ#tOANAQOOQO1G2o1G2oOOQOANA^ANA^O(DZQ#tOANA^OOQO<<L`<<L`OOQO<<La<<LaOOQO<<Lb<<LbOOQO<<Lc<<LcOOQO<<Lk<<LkOOQO<<Lm<<LmOOQO<<Lo<<LoO)?SQ,UO<<LoOGZQ#tO<<LoOOQO<<Lx<<LxOOQO<<Lz<<LzO#NWQ#tO<<LzO)D`Q#tO<<LzO)DhQ#tO<<LzOOQO<<L{<<L{O#NWQ#tO<<L{O)DsQ#tO<<L{O)D{Q#tO<<L{OOQO<<L|<<L|O&JSQ#tO<<L|O)EWQ#tO<<L|OOQO<<L}<<L}O)EiQ$fO<<L}O$#rQ#tO<<MPOOQO<<MP<<MPO$#rQ#tO<<MPO$#rQ#tO<<MQOOQO<<MQ<<MQO$#rQ#tO<<MQO$#rQ#tO<<MRO&JSQ#tO<<MRO$#rQ#tO<<MROOQO<<MS<<MSO$#rQ#tO<<MSO&JSQ#tO<<MSO$#rQ#tO<<MSOOQO<<M_<<M_O(DZQ#tO<<M_O)EnQ#tO<<M_OOQO<<Mc<<McOOQO<<Mo<<MoOOQO<<Mp<<MpOOQO<<Mq<<MqOOQOANDjANDjO'2ZQ#tOANDjOOQOANDmANDmO'2ZQ#tOANDmOOQOANDpANDpO'2ZQ#tOANDpOOQOANDsANDsO'2ZQ#tOANDsOOQOANDvANDvO'2ZQ#tOANDvOOQOANDyANDyO'2ZQ#tOANDyOOQOAND|AND|O'2ZQ#tOAND|OOQOANEPANEPO'2ZQ#tOANEPOOQOG25}G25}O#NWQ#tOG25}OOQOG26PG26PO#NWQ#tOG26POOQ!LQ,5<e,5<eO)EvQ#tO,5<eOOQ!LQ1G6j1G6jOOQO7+'s7+'sO'2ZQ#tO7+'sO)E{Q#tO7+'sO)FTQ#tO7+'sOOQO<<KP<<KPOOQOG26RG26ROOQOG26iG26iOOQOG26jG26jOOQOG26kG26kO&JSQ#tOG26kOOQOG26lG26lO&JSQ#tOG26lOOQOG26xG26xOOQOANBZANBZOOQOANBfANBfO#NWQ#tOANBfO)F`Q#tOANBfOOQOANBgANBgO#NWQ#tOANBgO)FhQ#tOANBgOOQOANBhANBhO&JSQ#tOANBhOOQOANBiANBiOOQOANBkANBkO$#rQ#tOANBkOOQOANBlANBlO$#rQ#tOANBlO&JSQ#tOANBmOOQOANBmANBmO$#rQ#tOANBmO&JSQ#tOANBnOOQOANBnANBnO$#rQ#tOANBnOOQOANByANByO(DZQ#tOANByOOQOG2:UG2:UOOQOG2:XG2:XOOQOG2:[G2:[OOQOG2:_G2:_OOQOG2:bG2:bOOQOG2:eG2:eOOQOG2:hG2:hOOQOG2:kG2:kOOQOLD+iLD+iOOQOLD+kLD+kOOQ!LQ1G2P1G2POOQO<<K_<<K_O'2ZQ#tO<<K_O)FpQ#tO<<K_OOQOLD,VLD,VOOQOLD,WLD,WOOQOG28QG28QO#NWQ#tOG28QOOQOG28RG28RO#NWQ#tOG28ROOQOG28SG28SOOQOG28VG28VOOQOG28WG28WOOQOG28XG28XO&JSQ#tOG28XOOQOG28YG28YO&JSQ#tOG28YOOQOG28eG28eOOQOAN@yAN@yO'2ZQ#tOAN@yOOQOLD-lLD-lOOQOLD-mLD-mOOQOLD-sLD-sOOQOLD-tLD-tOOQOG26eG26eO)FxQ#tO,5=gO$NtQ#tO,5:}O)LOQ#tO'#G{OVQ#tO'#Ec",
  stateData: ")Lb~O#QOS~OXQOZiO[jO]kO^lO_hO`!OOaqObSOcXOd[Oe_OfbOgcOhdOieOjfOkgOloOmpOn!cOo!cOprOqsOrtOsuOt!yOu!zOv!{Ow!|Ox!}Oy#OOz#PO{#QO|vO}wO!OxO!PzO!Q`O!RaO!SyO!TYO!UZO!VTO!WUO!XVO!YWO!Z{O![]O!]^O!^|O!_|O!`|O!a|O!b}O!c!PO!d!QO!e!RO!f!SO!g!TO!h!UO!i!VO!j!WO!k!XO!l!YO!m!ZO!n![O!o!]O!p!^O!q!_O!{!gO!}!eO#PmO#T!tO#Y!uO#]PO#b!iO#ePO$d!bO$h!iO$l!aO$q!dO$r!iO$s!iO$t!iO~O#Y#^O~O#Y#kO#]#nO#b#oO~O#Y#kO#]#nO#b#rO~O#Y#kO#]#nO#b#uO~O#Y#kO#]#nO#b#xO~O#Y#yO#]#nO#b#|O~O#Y#yO#]#nO#b$QO~O#Y#yO#b$TO~O#Y#yO#b$WO~O#Y#yO#]#nO#b$[O~O#Y#yO#b$^O~O#Y#yO#b$`O~O#Y$aO#b$cO~O#Y#yO#b$fO)t$eO~O#Y#yO#b$hO~O#Y$aO#b$jO~OP$kO~OQ$lO#]#nO#b$nO~O#Y$oO#]#nO#b$sO~O#Y$oO#]#nO#b$wO~O#Y#kO#]#nO#b${O)t$zO~O#Y#yO#b%OO~O#Y#yO#]#nO#b%SO~O#Y#yO#]#nO#b%SO)t%TO~O#Y#yO#]#nO#b%XO~O#Y#yO#]#nO#b%XO)t%YO~O#]#nOX$oXZ$oX[$oX]$oX^$oX_$oX`$oXa$oXb$oXc$oXd$oXe$oXf$oXg$oXh$oXi$oXj$oXk$oXl$oXm$oXn$oXo$oXp$oXq$oXr$oXs$oX|$oX}$oX!O$oX!P$oX!Q$oX!R$oX!S$oX!T$oX!U$oX!V$oX!W$oX!X$oX!Y$oX!Z$oX![$oX!]$oX!^$oX!_$oX!`$oX!a$oX!b$oX!c$oX!d$oX!e$oX!f$oX!g$oX!h$oX!i$oX!j$oX!k$oX!l$oX!m$oX!n$oX!o$oX!p$oX!q$oX#P$oX#Y$oX#b$oX#e$oX$d$oX$h$oX$l$oX$q$oX$s$oX$t$oXY$oX#Z$oX!|$oX#O$oX~Ot$oXu$oXv$oXw$oXx$oXy$oXz$oX{$oX!{$oX!}$oX#T$oX$r$oX)g$oX)q$oX)r$oX)s$oX~P,aOU%[O#b%]O$d%[O~OU%^O~O#Y#kO#b%`O~OU%aO#Y%bO#b%cO~OU%dO#Y%eO#b%fO~O#Y%gO#b%hO~OU%iO#Y%jO#b%kO~O#Y$oO#b%lO~O#Y$oO~O#]#nO#b%tOX%VXZ%VX[%VX]%VX^%VX_%VX`%VXa%VXb%VXc%VXd%VXe%VXf%VXg%VXh%VXi%VXj%VXk%VXl%VXm%VXn%VXo%VXp%VXq%VXr%VXs%VXt%VXu%VXv%VXw%VXx%VXy%VXz%VX{%VX|%VX}%VX!O%VX!P%VX!Q%VX!R%VX!S%VX!T%VX!U%VX!V%VX!W%VX!X%VX!Y%VX!Z%VX![%VX!]%VX!^%VX!_%VX!`%VX!a%VX!b%VX!c%VX!d%VX!e%VX!f%VX!g%VX!h%VX!i%VX!j%VX!k%VX!l%VX!m%VX!n%VX!o%VX!p%VX!q%VX!{%VX!}%VX#P%VX#T%VX#Y%VX#e%VX$d%VX$h%VX$l%VX$q%VX$r%VX$s%VX$t%VX)g%VXY%VX)q%VX)r%VX)s%VX#Z%VX!|%VX#O%VX~O#b%uOX%WXZ%WX[%WX]%WX^%WX_%WX`%WXa%WXb%WXc%WXd%WXe%WXf%WXg%WXh%WXi%WXj%WXk%WXl%WXm%WXn%WXo%WXp%WXq%WXr%WXs%WXt%WXu%WXv%WXw%WXx%WXy%WXz%WX{%WX|%WX}%WX!O%WX!P%WX!Q%WX!R%WX!S%WX!T%WX!U%WX!V%WX!W%WX!X%WX!Y%WX!Z%WX![%WX!]%WX!^%WX!_%WX!`%WX!a%WX!b%WX!c%WX!d%WX!e%WX!f%WX!g%WX!h%WX!i%WX!j%WX!k%WX!l%WX!m%WX!n%WX!o%WX!p%WX!q%WX!{%WX!}%WX#P%WX#T%WX#Y%WX#]%WX#e%WX$d%WX$h%WX$l%WX$q%WX$r%WX$s%WX$t%WX)g%WXY%WX)q%WX)r%WX)s%WX#Z%WX!|%WX#O%WX~O#b%vOX%XXZ%XX[%XX]%XX^%XX_%XX`%XXa%XXb%XXc%XXd%XXe%XXf%XXg%XXh%XXi%XXj%XXk%XXl%XXm%XXn%XXo%XXp%XXq%XXr%XXs%XXt%XXu%XXv%XXw%XXx%XXy%XXz%XX{%XX|%XX}%XX!O%XX!P%XX!Q%XX!R%XX!S%XX!T%XX!U%XX!V%XX!W%XX!X%XX!Y%XX!Z%XX![%XX!]%XX!^%XX!_%XX!`%XX!a%XX!b%XX!c%XX!d%XX!e%XX!f%XX!g%XX!h%XX!i%XX!j%XX!k%XX!l%XX!m%XX!n%XX!o%XX!p%XX!q%XX!{%XX!}%XX#P%XX#T%XX#Y%XX#]%XX#e%XX$d%XX$h%XX$l%XX$q%XX$r%XX$s%XX$t%XX)g%XXY%XX)q%XX)r%XX)s%XX#Z%XX!|%XX#O%XX~O#Y#yO#b%yO~O#Y#kO#b%|O)t%{O~O#Y#yO#]#nO#b&QO~O#Y#kO~O#Y#yO#b&_O~O#Y#kO#]#nO#b&bO~O#Y#kO#]#nO#b&eO~O#Y#kO#]#nOZ%oX[%oX]%oX^%oX_%oX`%oXa%oXb%oXc%oXd%oXe%oXf%oXg%oXh%oXi%oXj%oXk%oXl%oXm%oXn%oXo%oXp%oXq%oXr%oXs%oX|%oX}%oX!O%oX!P%oX!Q%oX!R%oX!S%oX!T%oX!U%oX!V%oX!W%oX!X%oX!Y%oX!Z%oX![%oX!]%oX!^%oX!_%oX!`%oX!a%oX!b%oX!c%oX!d%oX!e%oX!f%oX!g%oX!h%oX!i%oX!j%oX!k%oX!l%oX!m%oX!n%oX!o%oX!p%oX!q%oX!{%oX!}%oX#P%oX#e%oX$d%oX$h%oX$l%oX$q%oX$r%oX$s%oX$t%oX)q%oX)r%oX#Z%oX~O#b&hOX%oXt%oXu%oXv%oXw%oXx%oXy%oXz%oX{%oX#T%oX)g%oXY%oX)s%oX~PHOOXQOZ'PO['QO]'RO^'SO_'OO`'dOa'VOb&jOc&oOd&rOe&uOf&xOg&yOh&zOi&{Oj&|Ok&}Ol'TOm'UOn'zOp'WOq'XOr'YOs'ZO|'[O}']O!O'^O!P'`O!Q&vO!R&wO!S'_O!T&pO!U&qO!V&kO!W&lO!X&mO!Y&nO!Z'aO![&sO!]&tO!^'bO!_'bO!`'bO!a'bO!b'cO!c'eO!d'fO!e'gO!f'hO!g'iO!h'jO!i'kO!j'lO!k'mO!l'nO!m'oO!n'pO!o'qO!p'rO!q'sO#P&iO#Y'yO#]'|O#b'|O#e'|O$d'vO$h'|O$l'uO$s'|O$t'|O'`'|O'a'|O'b'|O~O$q(PO~PNRO#O(RO~PNRO!|(UO~PNROXQOZiO[jO]kO^lO_hO`!OOaqObSOcXOd[Oe_OfbOgcOhdOieOjfOkgOloOmpOn!cOo!cOprOqsOrtOsuO|vO}wO!OxO!PzO!Q`O!RaO!SyO!TYO!UZO!VTO!WUO!XVO!YWO!Z{O![]O!]^O!^|O!_|O!`|O!a|O!b}O!c!PO!d!QO!e!RO!f!SO!g!TO!h!UO!i!VO!j!WO!k!XO!l!YO!m!ZO!n![O!o!]O!p!^O!q!_O!{!gO!}!eO#PmO#T!tO#Y!uO#]PO#b!iO#ePO$d!bO$h!iO$l!aO$q!dO$r!iO$s!iO$t!iO~OY%^P~P!%bOY'tP~PNROT(`O~OXQOZiO[jO]kO^lO_hO`!OOaqObSOcXOd[Oe_OfbOgcOhdOieOjfOkgOloOmpOn!cOo!cOprOqsOrtOsuO|vO}wO!OxO!PzO!Q`O!RaO!SyO!TYO!UZO!VTO!WUO!XVO!YWO!Z{O![]O!]^O!^|O!_|O!`|O!a|O!b}O!c!PO!d!QO!e!RO!f!SO!g!TO!h!UO!i!VO!j!WO!k!XO!l!YO!m!ZO!n![O!o!]O!p!^O!q!_O!{!gO!}!eO#PmO#T!tO#Y(bO#]PO#b!iO#ePO$d!bO$h!iO$l!aO$q!dO$r!iO$s!iO$t!iO)q(cO)r(cO)s(cO~O#Z(jO~PVO#Y(mO#]#nO#b(qO)t(pO~O#Y(mO#]#nO#b(uO)t(tO~O#Y(mO#]#nO#b(yO)t(xO~O#Y(mO#]#nO#b(}O)t(|O~O#Y(mO#]#nO#b)RO)t)QO~O#Y(mO#]#nO#b)VO)t)UO~O#Y(mO#]#nO#b)ZO)t)YO~O#Y(mO#]#nO#b)_O)t)^O~Ot(|Pu(|Pv(|Pw(|Px(|Py(|Pz(|P{(|P)g(|PY(|P#Z(|P~P!%bO)g#SXY#SX#Z#SX~PVO{#QOt(yPu(yPv(yPw(yPx(yPy(yPz(yP)g(yPY(yP#Z(yP~P!%bOz#PO{#QOt(vPu(vPv(vPw(vPx(vPy(vP)g(vPY(vP#Z(vP~P!%bOy#OOz#PO{#QOt(sPu(sPv(sPw(sPx(sP)g(sPY(sP#Z(sP~P!%bOx!}Oy#OOz#PO{#QOt(pPu(pPv(pPw(pP)g(pPY(pP#Z(pP~P!%bOw!|Ox!}Oy#OOz#PO{#QOt(mPu(mPv(mP)g(mPY(mP#Z(mP~P!%bOv!{Ow!|Ox!}Oy#OOz#PO{#QOt(jPu(jP)g(jPY(jP#Z(jP~P!%bOu!zOv!{Ow!|Ox!}Oy#OOz#PO{#QOt(gP)g(gPY(gP#Z(gP~P!%bO!r)yO!s)|O!t)}O!u*OO!v*PO!w*QO!x*RO!y*SO!z*TO#Z)zO#j){O~O#Y#kO#]#nOX#haZ#ha[#ha]#ha^#ha_#ha`#haa#hab#hac#had#hae#haf#hag#hah#hai#haj#hak#hal#ham#han#hao#hap#haq#har#has#hat#hau#hav#haw#hax#hay#haz#ha{#ha|#ha}#ha!O#ha!P#ha!Q#ha!R#ha!S#ha!T#ha!U#ha!V#ha!W#ha!X#ha!Y#ha!Z#ha![#ha!]#ha!^#ha!_#ha!`#ha!a#ha!b#ha!c#ha!d#ha!e#ha!f#ha!g#ha!h#ha!i#ha!j#ha!k#ha!l#ha!m#ha!n#ha!o#ha!p#ha!q#ha!{#ha!}#ha#P#ha#T#ha#b#ha#e#ha$d#ha$h#ha$l#ha$q#ha$r#ha$s#ha$t#ha~O#Y#kO#]#nOX#WaZ#Wa[#Wa]#Wa^#Wa_#Wa`#Waa#Wab#Wac#Wad#Wae#Waf#Wag#Wah#Wai#Waj#Wak#Wal#Wam#Wan#Wao#Wap#Waq#War#Was#Wat#Wau#Wav#Waw#Wax#Way#Waz#Wa{#Wa|#Wa}#Wa!O#Wa!P#Wa!Q#Wa!R#Wa!S#Wa!T#Wa!U#Wa!V#Wa!W#Wa!X#Wa!Y#Wa!Z#Wa![#Wa!]#Wa!^#Wa!_#Wa!`#Wa!a#Wa!b#Wa!c#Wa!d#Wa!e#Wa!f#Wa!g#Wa!h#Wa!i#Wa!j#Wa!k#Wa!l#Wa!m#Wa!n#Wa!o#Wa!p#Wa!q#Wa!{#Wa!}#Wa#P#Wa#T#Wa#b#Wa#e#Wa$d#Wa$h#Wa$l#Wa$q#Wa$r#Wa$s#Wa$t#Wa~O#Y#kO#]#nOX'maY'maZ'ma['ma]'ma^'ma_'ma`'maa'mab'mac'mad'mae'maf'mag'mah'mai'maj'mak'mal'mam'man'mao'map'maq'mar'mas'ma|'ma}'ma!O'ma!P'ma!Q'ma!R'ma!S'ma!T'ma!U'ma!V'ma!W'ma!X'ma!Y'ma!Z'ma!['ma!]'ma!^'ma!_'ma!`'ma!a'ma!b'ma!c'ma!d'ma!e'ma!f'ma!g'ma!h'ma!i'ma!j'ma!k'ma!l'ma!m'ma!n'ma!o'ma!p'ma!q'ma!{'ma!}'ma#P'ma#T'ma#b'ma#e'ma$d'ma$h'ma$l'ma$q'ma$r'ma$s'ma$t'ma~O#Y#kO#]#nOX'raY'raZ'ra['ra]'ra^'ra_'ra`'raa'rab'rac'rad'rae'raf'rag'rah'rai'raj'rak'ral'ram'ran'rap'raq'rar'ras'ra|'ra}'ra!O'ra!P'ra!Q'ra!R'ra!S'ra!T'ra!U'ra!V'ra!W'ra!X'ra!Y'ra!Z'ra!['ra!]'ra!^'ra!_'ra!`'ra!a'ra!b'ra!c'ra!d'ra!e'ra!f'ra!g'ra!h'ra!i'ra!j'ra!k'ra!l'ra!m'ra!n'ra!o'ra!p'ra!q'ra#P'ra#b'ra#e'ra$d'ra$h'ra$l'ra$s'ra$t'ra'`'ra'a'ra'b'ra~O#Y#kO#]#nOX'waY'waZ'wa['wa]'wa^'wa_'wa`'waa'wab'wac'wad'wae'waf'wag'wah'wai'waj'wak'wal'wam'wan'wap'waq'war'was'wa|'wa}'wa!O'wa!P'wa!Q'wa!R'wa!S'wa!T'wa!U'wa!V'wa!W'wa!X'wa!Y'wa!Z'wa!['wa!]'wa!^'wa!_'wa!`'wa!a'wa!b'wa!c'wa!d'wa!e'wa!f'wa!g'wa!h'wa!i'wa!j'wa!k'wa!l'wa!m'wa!n'wa!o'wa!p'wa!q'wa#P'wa#b'wa#e'wa$d'wa$h'wa$l'wa$s'wa$t'wa'`'wa'a'wa'b'wa~O#Y#kO#]#nOT'{a~O#Y#kO#]#nOX(QaZ(Qa[(Qa](Qa^(Qa_(Qa`(Qaa(Qab(Qac(Qad(Qae(Qaf(Qag(Qah(Qai(Qaj(Qak(Qal(Qam(Qan(Qao(Qap(Qaq(Qar(Qas(Qa|(Qa}(Qa!O(Qa!P(Qa!Q(Qa!R(Qa!S(Qa!T(Qa!U(Qa!V(Qa!W(Qa!X(Qa!Y(Qa!Z(Qa![(Qa!](Qa!^(Qa!_(Qa!`(Qa!a(Qa!b(Qa!c(Qa!d(Qa!e(Qa!f(Qa!g(Qa!h(Qa!i(Qa!j(Qa!k(Qa!l(Qa!m(Qa!n(Qa!o(Qa!p(Qa!q(Qa!{(Qa!}(Qa#P(Qa#T(Qa#b(Qa#e(Qa$d(Qa$h(Qa$l(Qa$q(Qa$r(Qa$s(Qa$t(Qa)q(Qa)r(Qa)s(Qa~O#Y#kO#]#nOX(XaZ(Xa[(Xa](Xa^(Xa_(Xa`(Xaa(Xab(Xac(Xad(Xae(Xaf(Xag(Xah(Xai(Xaj(Xak(Xal(Xam(Xan(Xao(Xap(Xaq(Xar(Xas(Xat(Xau(Xav(Xaw(Xax(Xay(Xaz(Xa{(Xa|(Xa}(Xa!O(Xa!P(Xa!Q(Xa!R(Xa!S(Xa!T(Xa!U(Xa!V(Xa!W(Xa!X(Xa!Y(Xa!Z(Xa![(Xa!](Xa!^(Xa!_(Xa!`(Xa!a(Xa!b(Xa!c(Xa!d(Xa!e(Xa!f(Xa!g(Xa!h(Xa!i(Xa!j(Xa!k(Xa!l(Xa!m(Xa!n(Xa!o(Xa!p(Xa!q(Xa!{(Xa!}(Xa#P(Xa#T(Xa#b(Xa#e(Xa$d(Xa$h(Xa$l(Xa$q(Xa$r(Xa$s(Xa$t(Xa~O#Y#kO#]#nOX(]aZ(]a[(]a](]a^(]a_(]a`(]aa(]ab(]ac(]ad(]ae(]af(]ag(]ah(]ai(]aj(]ak(]al(]am(]an(]ao(]ap(]aq(]ar(]as(]at(]au(]av(]aw(]ax(]ay(]az(]a{(]a|(]a}(]a!O(]a!P(]a!Q(]a!R(]a!S(]a!T(]a!U(]a!V(]a!W(]a!X(]a!Y(]a!Z(]a![(]a!](]a!^(]a!_(]a!`(]a!a(]a!b(]a!c(]a!d(]a!e(]a!f(]a!g(]a!h(]a!i(]a!j(]a!k(]a!l(]a!m(]a!n(]a!o(]a!p(]a!q(]a!{(]a!}(]a#P(]a#T(]a#b(]a#e(]a$d(]a$h(]a$l(]a$q(]a$r(]a$s(]a$t(]a~O#Y#kO#]#nOX(aaZ(aa[(aa](aa^(aa_(aa`(aaa(aab(aac(aad(aae(aaf(aag(aah(aai(aaj(aak(aal(aam(aan(aao(aap(aaq(aar(aas(aat(aau(aav(aaw(aax(aay(aaz(aa{(aa|(aa}(aa!O(aa!P(aa!Q(aa!R(aa!S(aa!T(aa!U(aa!V(aa!W(aa!X(aa!Y(aa!Z(aa![(aa!](aa!^(aa!_(aa!`(aa!a(aa!b(aa!c(aa!d(aa!e(aa!f(aa!g(aa!h(aa!i(aa!j(aa!k(aa!l(aa!m(aa!n(aa!o(aa!p(aa!q(aa!{(aa!}(aa#P(aa#T(aa#b(aa#e(aa$d(aa$h(aa$l(aa$q(aa$r(aa$s(aa$t(aa~OY*kO~OXQOZiO[jO]kO^lO_hO`!OOaqObSOcXOd[Oe_OfbOgcOhdOieOjfOkgOloOmpOn!cOo!cOprOqsOrtOsuO|vO}wO!OxO!PzO!Q`O!RaO!SyO!TYO!UZO!VTO!WUO!XVO!YWO!Z{O![]O!]^O!^|O!_|O!`|O!a|O!b}O!c!PO!d!QO!e!RO!f!SO!g!TO!h!UO!i!VO!j!WO!k!XO!l!YO!m!ZO!n![O!o!]O!p!^O!q!_O!{!gO!}!eO#PmO#T*nO#Y*mO#]PO#b!iO#ePO$d!bO$h!iO$l!aO$q!dO$r!iO$s!iO$t!iO)q*nO)r*nO)s*nO#Z#dP~OZiO[jO]kO^lO_hO`!OOaqObSOcXOd[Oe_OfbOgcOhdOieOjfOkgOloOmpOn!cOo!cOprOqsOrtOsuO|vO}wO!OxO!PzO!Q`O!RaO!SyO!TYO!UZO!VTO!WUO!XVO!YWO!Z{O![]O!]^O!^|O!_|O!`|O!a|O!b}O!c!PO!d!QO!e!RO!f!SO!g!TO!h!UO!i!VO!j!WO!k!XO!l!YO!m!ZO!n![O!o!]O!p!^O!q!_O!{!gO!}!eO#PmO#Y*rO#b!iO$d!bO$h!iO$l?_O$q!dO$r!iO$s!iO$t!iO)q*sO)r*sO~O#e#^P~P#BRO#Y#kO#]#nO~O#Y#kO#b*xO~O#Y#kO#]#nO#b*xO~O#Y#kO#b*{O~O#Y#kO#]#nO#b*{O~O#Y#kO#b+OO~O#Y#kO#]#nO#b+OO~OZiO[jO]kO^lO_hO`!OOaqObSOcXOd[Oe_OfbOgcOhdOieOjfOkgOloOmpOn!cOo!cOprOqsOrtOsuO|vO}wO!OxO!PzO!Q`O!RaO!SyO!TYO!UZO!VTO!WUO!XVO!YWO!Z{O![]O!]^O!^|O!_|O!`|O!a|O!b}O!c!PO!d!QO!e!RO!f!SO!g!TO!h!UO!i!VO!j!WO!k!XO!l!YO!m!ZO!n![O!o!]O!p!^O!q!_O!{!gO!}!eO#PmO#Y+QO#]PO#b!iO#ePO$d!bO$h!iO$l!aO$q!dO$r!iO$s!iO$t!iO)q+RO)r+RO)s+RO#Z#rP~O#Y#yO#b+VO~O#Y#yO#]#nO#b+VO~O#Y#yO~O#Y#yO#]#nO~O#Y#kO#b+`O~O#Y#kO#b+cO~OR+eO~O#Y$aO~O#Y#yO#b+kO~OQ+nO~OQ+nO#]#nO~OR+pO~O#Y$oO#]#nO~O#Y#kO#]#nO#b+wO~O#Y#yO#]#nO#b+{O~O#Y#yO#]#nO#b+}O~O#Y#yO#]#nO#b,QO~O#Y#yO#]#nO#b,SO~O#Y,ZO#],UO#b,XO$h,[O)q,TO~OU,^O$d,^O~OU,_O#b,aO*P,`O~O#Y,ZO#]#nO#b,cO$h,[O~OR,gO~OU,hO#Y,iO~OR,lO~OU,mO#Y,nO~OR,oO~O#Y,pO~OR,sO~OU,tO#Y,uO~OS,vO~O#b,wOX%VaZ%Va[%Va]%Va^%Va_%Va`%Vaa%Vab%Vac%Vad%Vae%Vaf%Vag%Vah%Vai%Vaj%Vak%Val%Vam%Van%Vao%Vap%Vaq%Var%Vas%Vat%Vau%Vav%Vaw%Vax%Vay%Vaz%Va{%Va|%Va}%Va!O%Va!P%Va!Q%Va!R%Va!S%Va!T%Va!U%Va!V%Va!W%Va!X%Va!Y%Va!Z%Va![%Va!]%Va!^%Va!_%Va!`%Va!a%Va!b%Va!c%Va!d%Va!e%Va!f%Va!g%Va!h%Va!i%Va!j%Va!k%Va!l%Va!m%Va!n%Va!o%Va!p%Va!q%Va!{%Va!}%Va#P%Va#T%Va#Y%Va#]%Va#e%Va$d%Va$h%Va$l%Va$q%Va$r%Va$s%Va$t%Va)g%VaY%Va)q%Va)r%Va)s%Va#Z%Va!|%Va#O%Va~O#Y#yO#b,zO~O#Y#kO)t,}O~O#Y#kO#b-RO~O#Y#yO#b-UO~O#Y#kO#b-XO~O#Y#kO#]#nO#b-XO~O#Y#kO#b-[O~O#Y#kO#]#nO#b-[O~O#Y#kO#]#nOX%oaZ%oa[%oa]%oa^%oa_%oa`%oaa%oab%oac%oad%oae%oaf%oag%oah%oai%oaj%oak%oal%oam%oan%oao%oap%oaq%oar%oas%oat%oau%oav%oaw%oax%oay%oaz%oa{%oa|%oa}%oa!O%oa!P%oa!Q%oa!R%oa!S%oa!T%oa!U%oa!V%oa!W%oa!X%oa!Y%oa!Z%oa![%oa!]%oa!^%oa!_%oa!`%oa!a%oa!b%oa!c%oa!d%oa!e%oa!f%oa!g%oa!h%oa!i%oa!j%oa!k%oa!l%oa!m%oa!n%oa!o%oa!p%oa!q%oa!{%oa!}%oa#P%oa#T%oa#b%oa#e%oa$d%oa$h%oa$l%oa$q%oa$r%oa$s%oa$t%oa)g%oaY%oa)q%oa)r%oa)s%oa#Z%oa~O'`$oX'a$oX'b$oX~P,aO#Y#kO#]#nO#b-bO~O#Y#kO#]#nO#b-eO~O#Y#kO#]#nO#b-hO~O#Y#kO#]#nO#b-kO~O#Y#yO#]#nO#b-nO~O#Y#yO#]#nO#b-rO~O#Y#yO#b-uO~O#Y#yO#b-xO~O#Y#yO#]#nO#b-{O~O#Y#yO#b-}O~O#Y#yO#b.PO~O#Y$aO#b.RO~O#Y#yO#b.UO)t.TO~O#Y#yO#b.WO~O#Y$aO#b.YO~OP.ZO~OQ.[O#]#nO#b.^O~O#Y$oO#]#nO#b.bO~O#Y$oO#]#nO#b.fO~O#Y#kO#]#nO#b.jO)t.iO~O#Y#yO#b.lO~O#Y#yO#]#nO#b.oO~O#Y#yO#]#nO#b.oO)t.pO~O#Y#yO#]#nO#b.sO~O#Y#yO#]#nO#b.sO)t.tO~OU.uO#b.vO$d.uO~OU.wO~O#Y#kO#b.yO~OU.zO#Y.{O#b.|O~OU.}O#Y/OO#b/PO~O#Y/QO#b/RO~OU/SO#Y/TO#b/UO~O#]#nO#b/^OX&rXZ&rX[&rX]&rX^&rX_&rX`&rXa&rXb&rXc&rXd&rXe&rXf&rXg&rXh&rXi&rXj&rXk&rXl&rXm&rXn&rXp&rXq&rXr&rXs&rX|&rX}&rX!O&rX!P&rX!Q&rX!R&rX!S&rX!T&rX!U&rX!V&rX!W&rX!X&rX!Y&rX!Z&rX![&rX!]&rX!^&rX!_&rX!`&rX!a&rX!b&rX!c&rX!d&rX!e&rX!f&rX!g&rX!h&rX!i&rX!j&rX!k&rX!l&rX!m&rX!n&rX!o&rX!p&rX!q&rX#P&rX#Y&rX#e&rX$d&rX$h&rX$l&rX$q&rX$s&rX$t&rX'`&rX'a&rX'b&rX#O&rX!|&rXY&rX#Z&rXo&rX~O#b/_OX&sXZ&sX[&sX]&sX^&sX_&sX`&sXa&sXb&sXc&sXd&sXe&sXf&sXg&sXh&sXi&sXj&sXk&sXl&sXm&sXn&sXp&sXq&sXr&sXs&sX|&sX}&sX!O&sX!P&sX!Q&sX!R&sX!S&sX!T&sX!U&sX!V&sX!W&sX!X&sX!Y&sX!Z&sX![&sX!]&sX!^&sX!_&sX!`&sX!a&sX!b&sX!c&sX!d&sX!e&sX!f&sX!g&sX!h&sX!i&sX!j&sX!k&sX!l&sX!m&sX!n&sX!o&sX!p&sX!q&sX#P&sX#Y&sX#]&sX#e&sX$d&sX$h&sX$l&sX$q&sX$s&sX$t&sX'`&sX'a&sX'b&sX#O&sX!|&sXY&sX#Z&sXo&sX~O#b/`OX&tXZ&tX[&tX]&tX^&tX_&tX`&tXa&tXb&tXc&tXd&tXe&tXf&tXg&tXh&tXi&tXj&tXk&tXl&tXm&tXn&tXp&tXq&tXr&tXs&tX|&tX}&tX!O&tX!P&tX!Q&tX!R&tX!S&tX!T&tX!U&tX!V&tX!W&tX!X&tX!Y&tX!Z&tX![&tX!]&tX!^&tX!_&tX!`&tX!a&tX!b&tX!c&tX!d&tX!e&tX!f&tX!g&tX!h&tX!i&tX!j&tX!k&tX!l&tX!m&tX!n&tX!o&tX!p&tX!q&tX#P&tX#Y&tX#]&tX#e&tX$d&tX$h&tX$l&tX$q&tX$s&tX$t&tX'`&tX'a&tX'b&tX#O&tX!|&tXY&tX#Z&tXo&tX~O#Y#yO#b/cO~O#Y#kO#b/fO)t/eO~O#Y/qO~O#Y#yO#b/vO~O#Y#kO#]#nO#b/yO~O#Y#kO#]#nO#b/|O~O)h/}O)i0PO~O#Z0QO~PNRO*R0SO*S0SO*T0SO*U0SO*V0SO*W0SO*X0SO*Y0SO*Z0SO*[0SO*]0SO*^0SO*_0SO*`0SO*a0SO*b0SO*c0SO*d0SO*e0SO*f0SO*g0SO*h0SO*i0SO*j0SO*k0SO*l0SO*m0SO*n0SO*o0SO*p0SO*q0SO*r0SO*s0SO~O#b0UO~P$K_Oo0VO~PNRO$q%rX#O%rX!|%rXY%rX#Z%rXo%rX~PNRO$q0ZO~PNRO$q0]O~O#O(RO~O!|(UO~OY0`O~OY%^X#Z%^X~P!%bOY0bO~OY0dO~OY0fO~OY0hO~OY(TX#Z(TX~P!*xOY0lO~OY0nO~OY0pO~OY0rO~O#Z0tO~O#Y(mO#b0wO~O#Y(mO#]#nO#b0yO~O#Y(mO#]#nO#b0yO)t0zO~O#Y(mO#b0|O~O#Y(mO#]#nO#b1OO~O#Y(mO#]#nO#b1OO)t1PO~O#Y(mO#b1RO~O#Y(mO#]#nO#b1TO~O#Y(mO#]#nO#b1TO)t1UO~O#Y(mO#b1WO~O#Y(mO#]#nO#b1YO~O#Y(mO#]#nO#b1YO)t1ZO~O#Y(mO#b1]O~O#Y(mO#]#nO#b1_O~O#Y(mO#]#nO#b1_O)t1`O~O#Y(mO#b1bO~O#Y(mO#]#nO#b1dO~O#Y(mO#]#nO#b1dO)t1eO~O#Y(mO#b1gO~O#Y(mO#]#nO#b1iO~O#Y(mO#]#nO#b1iO)t1jO~O#Y(mO#b1lO~O#Y(mO#]#nO#b1nO~O#Y(mO#]#nO#b1nO)t1oO~Ot(|Xu(|Xv(|Xw(|Xx(|Xy(|Xz(|X{(|X)g(|XY(|X#Z(|X~P!%bO{#QOt(yXu(yXv(yXw(yXx(yXy(yXz(yX)g(yXY(yX#Z(yX~P!%bOz#PO{#QOt(vXu(vXv(vXw(vXx(vXy(vX)g(vXY(vX#Z(vX~P!%bOy#OOz#PO{#QOt(sXu(sXv(sXw(sXx(sX)g(sXY(sX#Z(sX~P!%bOx!}Oy#OOz#PO{#QOt(pXu(pXv(pXw(pX)g(pXY(pX#Z(pX~P!%bOw!|Ox!}Oy#OOz#PO{#QOt(mXu(mXv(mX)g(mXY(mX#Z(mX~P!%bOv!{Ow!|Ox!}Oy#OOz#PO{#QOt(jXu(jX)g(jXY(jX#Z(jX~P!%bOu!zOv!{Ow!|Ox!}Oy#OOz#PO{#QOt(gX)g(gXY(gX#Z(gX~P!%bO#Z1xO~O#Z1yO~O#Z1zO~O#Z1{O~O#Z1|O~O#Z1}O~O#Z2OO~O#Z2PO~O#Z2QO~O#Z2RO~O#Y#kOX#hiZ#hi[#hi]#hi^#hi_#hi`#hia#hib#hic#hid#hie#hif#hig#hih#hii#hij#hik#hil#him#hin#hio#hip#hiq#hir#his#hit#hiu#hiv#hiw#hix#hiy#hiz#hi{#hi|#hi}#hi!O#hi!P#hi!Q#hi!R#hi!S#hi!T#hi!U#hi!V#hi!W#hi!X#hi!Y#hi!Z#hi![#hi!]#hi!^#hi!_#hi!`#hi!a#hi!b#hi!c#hi!d#hi!e#hi!f#hi!g#hi!h#hi!i#hi!j#hi!k#hi!l#hi!m#hi!n#hi!o#hi!p#hi!q#hi!{#hi!}#hi#P#hi#T#hi#]#hi#b#hi#e#hi$d#hi$h#hi$l#hi$q#hi$r#hi$s#hi$t#hi~O#Y#kOX#WiZ#Wi[#Wi]#Wi^#Wi_#Wi`#Wia#Wib#Wic#Wid#Wie#Wif#Wig#Wih#Wii#Wij#Wik#Wil#Wim#Win#Wio#Wip#Wiq#Wir#Wis#Wit#Wiu#Wiv#Wiw#Wix#Wiy#Wiz#Wi{#Wi|#Wi}#Wi!O#Wi!P#Wi!Q#Wi!R#Wi!S#Wi!T#Wi!U#Wi!V#Wi!W#Wi!X#Wi!Y#Wi!Z#Wi![#Wi!]#Wi!^#Wi!_#Wi!`#Wi!a#Wi!b#Wi!c#Wi!d#Wi!e#Wi!f#Wi!g#Wi!h#Wi!i#Wi!j#Wi!k#Wi!l#Wi!m#Wi!n#Wi!o#Wi!p#Wi!q#Wi!{#Wi!}#Wi#P#Wi#T#Wi#]#Wi#b#Wi#e#Wi$d#Wi$h#Wi$l#Wi$q#Wi$r#Wi$s#Wi$t#Wi~O#Y#kOX'miY'miZ'mi['mi]'mi^'mi_'mi`'mia'mib'mic'mid'mie'mif'mig'mih'mii'mij'mik'mil'mim'min'mio'mip'miq'mir'mis'mi|'mi}'mi!O'mi!P'mi!Q'mi!R'mi!S'mi!T'mi!U'mi!V'mi!W'mi!X'mi!Y'mi!Z'mi!['mi!]'mi!^'mi!_'mi!`'mi!a'mi!b'mi!c'mi!d'mi!e'mi!f'mi!g'mi!h'mi!i'mi!j'mi!k'mi!l'mi!m'mi!n'mi!o'mi!p'mi!q'mi!{'mi!}'mi#P'mi#T'mi#]'mi#b'mi#e'mi$d'mi$h'mi$l'mi$q'mi$r'mi$s'mi$t'mi~O#Y#kOX'riY'riZ'ri['ri]'ri^'ri_'ri`'ria'rib'ric'rid'rie'rif'rig'rih'rii'rij'rik'ril'rim'rin'rip'riq'rir'ris'ri|'ri}'ri!O'ri!P'ri!Q'ri!R'ri!S'ri!T'ri!U'ri!V'ri!W'ri!X'ri!Y'ri!Z'ri!['ri!]'ri!^'ri!_'ri!`'ri!a'ri!b'ri!c'ri!d'ri!e'ri!f'ri!g'ri!h'ri!i'ri!j'ri!k'ri!l'ri!m'ri!n'ri!o'ri!p'ri!q'ri#P'ri#]'ri#b'ri#e'ri$d'ri$h'ri$l'ri$s'ri$t'ri'`'ri'a'ri'b'ri~O#Y#kOX'wiY'wiZ'wi['wi]'wi^'wi_'wi`'wia'wib'wic'wid'wie'wif'wig'wih'wii'wij'wik'wil'wim'win'wip'wiq'wir'wis'wi|'wi}'wi!O'wi!P'wi!Q'wi!R'wi!S'wi!T'wi!U'wi!V'wi!W'wi!X'wi!Y'wi!Z'wi!['wi!]'wi!^'wi!_'wi!`'wi!a'wi!b'wi!c'wi!d'wi!e'wi!f'wi!g'wi!h'wi!i'wi!j'wi!k'wi!l'wi!m'wi!n'wi!o'wi!p'wi!q'wi#P'wi#]'wi#b'wi#e'wi$d'wi$h'wi$l'wi$s'wi$t'wi'`'wi'a'wi'b'wi~O#Y#kOT'{i~O#Y#kOX(QiZ(Qi[(Qi](Qi^(Qi_(Qi`(Qia(Qib(Qic(Qid(Qie(Qif(Qig(Qih(Qii(Qij(Qik(Qil(Qim(Qin(Qio(Qip(Qiq(Qir(Qis(Qi|(Qi}(Qi!O(Qi!P(Qi!Q(Qi!R(Qi!S(Qi!T(Qi!U(Qi!V(Qi!W(Qi!X(Qi!Y(Qi!Z(Qi![(Qi!](Qi!^(Qi!_(Qi!`(Qi!a(Qi!b(Qi!c(Qi!d(Qi!e(Qi!f(Qi!g(Qi!h(Qi!i(Qi!j(Qi!k(Qi!l(Qi!m(Qi!n(Qi!o(Qi!p(Qi!q(Qi!{(Qi!}(Qi#P(Qi#T(Qi#](Qi#b(Qi#e(Qi$d(Qi$h(Qi$l(Qi$q(Qi$r(Qi$s(Qi$t(Qi)q(Qi)r(Qi)s(Qi~O#Y#kOX(XiZ(Xi[(Xi](Xi^(Xi_(Xi`(Xia(Xib(Xic(Xid(Xie(Xif(Xig(Xih(Xii(Xij(Xik(Xil(Xim(Xin(Xio(Xip(Xiq(Xir(Xis(Xit(Xiu(Xiv(Xiw(Xix(Xiy(Xiz(Xi{(Xi|(Xi}(Xi!O(Xi!P(Xi!Q(Xi!R(Xi!S(Xi!T(Xi!U(Xi!V(Xi!W(Xi!X(Xi!Y(Xi!Z(Xi![(Xi!](Xi!^(Xi!_(Xi!`(Xi!a(Xi!b(Xi!c(Xi!d(Xi!e(Xi!f(Xi!g(Xi!h(Xi!i(Xi!j(Xi!k(Xi!l(Xi!m(Xi!n(Xi!o(Xi!p(Xi!q(Xi!{(Xi!}(Xi#P(Xi#T(Xi#](Xi#b(Xi#e(Xi$d(Xi$h(Xi$l(Xi$q(Xi$r(Xi$s(Xi$t(Xi~O#Y#kOX(]iZ(]i[(]i](]i^(]i_(]i`(]ia(]ib(]ic(]id(]ie(]if(]ig(]ih(]ii(]ij(]ik(]il(]im(]in(]io(]ip(]iq(]ir(]is(]it(]iu(]iv(]iw(]ix(]iy(]iz(]i{(]i|(]i}(]i!O(]i!P(]i!Q(]i!R(]i!S(]i!T(]i!U(]i!V(]i!W(]i!X(]i!Y(]i!Z(]i![(]i!](]i!^(]i!_(]i!`(]i!a(]i!b(]i!c(]i!d(]i!e(]i!f(]i!g(]i!h(]i!i(]i!j(]i!k(]i!l(]i!m(]i!n(]i!o(]i!p(]i!q(]i!{(]i!}(]i#P(]i#T(]i#](]i#b(]i#e(]i$d(]i$h(]i$l(]i$q(]i$r(]i$s(]i$t(]i~O#Y#kOX(aiZ(ai[(ai](ai^(ai_(ai`(aia(aib(aic(aid(aie(aif(aig(aih(aii(aij(aik(ail(aim(ain(aio(aip(aiq(air(ais(ait(aiu(aiv(aiw(aix(aiy(aiz(ai{(ai|(ai}(ai!O(ai!P(ai!Q(ai!R(ai!S(ai!T(ai!U(ai!V(ai!W(ai!X(ai!Y(ai!Z(ai![(ai!](ai!^(ai!_(ai!`(ai!a(ai!b(ai!c(ai!d(ai!e(ai!f(ai!g(ai!h(ai!i(ai!j(ai!k(ai!l(ai!m(ai!n(ai!o(ai!p(ai!q(ai!{(ai!}(ai#P(ai#T(ai#](ai#b(ai#e(ai$d(ai$h(ai$l(ai$q(ai$r(ai$s(ai$t(ai~O#Y2_O~OXQOZiO[jO]kO^lO_hO`!OOaqObSOcXOd[Oe_OfbOgcOhdOieOjfOkgOloOmpOn!cOo!cOprOqsOrtOsuO|vO}wO!OxO!PzO!Q`O!RaO!SyO!TYO!UZO!VTO!WUO!XVO!YWO!Z{O![]O!]^O!^|O!_|O!`|O!a|O!b}O!c!PO!d!QO!e!RO!f!SO!g!TO!h!UO!i!VO!j!WO!k!XO!l!YO!m!ZO!n![O!o!]O!p!^O!q!_O!{!gO!}!eO#PmO#]PO#b!iO#ePO$d!bO$h!iO$l!aO$q!dO$r!iO$s!iO$t!iO~O#T*nO#Y*mO)q*nO)r*nO)s*nO#Z#dX~P&2QO#Z2cO~O#Z#^P~P#BRO#e#^X#Z#^X~P#BRO#e2fO~O#Y#kO#b2iO~O#Y#kO#b2kO~O#Y#kO#b2mO~O#Y+QO)q+RO)r+RO)s+RO#Z#rX~P&2TO#Z2pO~O#Y#yO#b2rO~O#Y#kO#b2vO~O#Y#kO#b2xO~O#Z2yO~O#]#nOX$QiZ$Qi[$Qi]$Qi^$Qi_$Qi`$Qia$Qib$Qic$Qid$Qie$Qif$Qig$Qih$Qii$Qij$Qik$Qil$Qim$Qin$Qio$Qip$Qiq$Qir$Qis$Qit$Qiu$Qiv$Qiw$Qix$Qiy$Qiz$Qi{$Qi|$Qi}$Qi!O$Qi!P$Qi!Q$Qi!R$Qi!S$Qi!T$Qi!U$Qi!V$Qi!W$Qi!X$Qi!Y$Qi!Z$Qi![$Qi!]$Qi!^$Qi!_$Qi!`$Qi!a$Qi!b$Qi!c$Qi!d$Qi!e$Qi!f$Qi!g$Qi!h$Qi!i$Qi!j$Qi!k$Qi!l$Qi!m$Qi!n$Qi!o$Qi!p$Qi!q$Qi!{$Qi!}$Qi#P$Qi#T$Qi#Y$Qi#b$Qi#e$Qi$d$Qi$h$Qi$l$Qi$q$Qi$r$Qi$s$Qi$t$Qi)g$QiY$Qi)q$Qi)r$Qi)s$Qi#Z$Qi!|$Qi#O$Qi~OQ3PO~O#Z3QO~O#Y#yO#b3WO~O#Y#yO#]#nO#b3WO~O#Y#yO#]#nO#b3YO~O#Y#yO#b3]O~O#Y#yO#]#nO#b3]O~O#Y#yO#]#nO#b3_O~O)u3aO)v3aO)w3aO)x3aO)y3aO)z3aO){3aO)|3aO)}3aO~O#Y,ZO#],UO#b3dO$h,[O)q,TO~O#Y3hO#b,cO~OX3oOY3oOZiO[jO]kO^lO_hO`!OOaqObSOcXOd[Oe_OfbOgcOhdOieOjfOkgOloOmpOn3oOo3oOprOqsOrtOsuOt3nOu3nOv3nOw3nOx3nOy3nOz3nO{3nO|vO}wO!OxO!PzO!Q`O!RaO!SyO!TYO!UZO!VTO!WUO!XVO!YWO!Z{O![]O!]^O!^|O!_|O!`|O!a|O!b}O!c!PO!d!QO!e!RO!f!SO!g!TO!h!UO!i!VO!j!WO!k!XO!l!YO!m!ZO!n![O!o!]O!p!^O!q!_O!{3oO!|3oO!}3oO#O3oO#PmO#T3oO#Y3mO#]3oO#b3oO#e3oO$d3jO$h3oO$l3iO$q3oO$r3oO$s3oO$t3oO)q3oO)r3oO)s3oO~O#Z3qO~P&BhO#Y,ZO#],UO#b3tO$h,[O)q,TO~OU3uO#b3vO~OU3uO#b3vO*P3wO~O#Z3zO~OR3|O~O#Z4OO~OR4QO~O#Z4RO~OR4SO~O#Y,ZO#b,cO$h,[O~O#Z4VO~OR4XO~O#Y4YO#b4[O~O#Y#yO#b4^O~O#Y#kO#b4aO~O#Y#yO#b4cO~O#Y#kO#b4eO~O#Y#kO#b4gO~O#Y#kO#b4kO~O#Y#kO#]#nO#b4kO~O#Y#kO#b4nO~O#Y#kO#]#nO#b4nO~O#Y#kO#b4qO~O#Y#kO#]#nO#b4qO~O#Y#yO#b4tO~O#Y#yO#]#nO#b4tO~O#Y/qO#b4}O~O#Y/qO#b5QO~O#Y#yO#b5XO~OQ5[O~OQ5[O#]#nO~O#Y#kO#]#nO#b5dO~O#Y#yO#]#nO#b5hO~O#Y#yO#]#nO#b5jO~O#Y#yO#]#nO#b5mO~O#Y#yO#]#nO#b5oO~O#Y,ZO#],UO#b5qO$h,[O)q,TO~OU5sO$d5sO~OU5tO#b5vO*P5uO~OR5zO~OU5{O#Y5|O~OR6PO~OU6QO#Y6RO~OR6SO~O#Y6TO~OR6WO~OU6XO#Y6YO~O#b6ZOX&raZ&ra[&ra]&ra^&ra_&ra`&raa&rab&rac&rad&rae&raf&rag&rah&rai&raj&rak&ral&ram&ran&rap&raq&rar&ras&ra|&ra}&ra!O&ra!P&ra!Q&ra!R&ra!S&ra!T&ra!U&ra!V&ra!W&ra!X&ra!Y&ra!Z&ra![&ra!]&ra!^&ra!_&ra!`&ra!a&ra!b&ra!c&ra!d&ra!e&ra!f&ra!g&ra!h&ra!i&ra!j&ra!k&ra!l&ra!m&ra!n&ra!o&ra!p&ra!q&ra#P&ra#Y&ra#]&ra#e&ra$d&ra$h&ra$l&ra$q&ra$s&ra$t&ra'`&ra'a&ra'b&ra#O&ra!|&raY&ra#Z&rao&ra~O#Y#yO#b6^O~O#Y#kO)t6aO~O#Y#kO#b6dO~O#Z6eO~PNRO#Y#yO#b6hO~O#Y#kO#b6kO~O#Y#kO#]#nO#b6kO~O#Y#kO#b6nO~O#Y#kO#]#nO#b6nO~O#Y/qO#b6qO~O)h/}O)i6sO~O#Z6tO~O#b6wO~P$K_Oo0VO~O$q6yO~O#Y6{O~OV6}OW6}OX#ViZ#Vi[#Vi]#Vi^#Vi_#Vi`#Via#Vib#Vic#Vid#Vie#Vif#Vig#Vih#Vii#Vij#Vik#Vil#Vim#Vin#Vio#Vip#Viq#Vir#Vis#Vi|#Vi}#Vi!O#Vi!P#Vi!Q#Vi!R#Vi!S#Vi!T#Vi!U#Vi!V#Vi!W#Vi!X#Vi!Y#Vi!Z#Vi![#Vi!]#Vi!^#Vi!_#Vi!`#Vi!a#Vi!b#Vi!c#Vi!d#Vi!e#Vi!f#Vi!g#Vi!h#Vi!i#Vi!j#Vi!k#Vi!l#Vi!m#Vi!n#Vi!o#Vi!p#Vi!q#Vi#P#Vi#Y#Vi#]#Vi#b#Vi#e#Vi$d#Vi$h#Vi$l#Vi$q#Vi$s#Vi$t#ViY#Vi#Z#Vi~Ot#Viu#Viv#Viw#Vix#Viy#Viz#Vi{#Vi!{#Vi!}#Vi#T#Vi$r#Vi)g#Vi)q#Vi)r#Vi)s#Vi~P'*|O#Y7OO~O#Y7QO~O#Y7SO~O#Y7UO~O#Z7WO~O#Y7XO~O#Y7ZO~O#Y7]O~O#Y7_O~O#Z7aO~O#Y(mO~O#Y(mO#b7cO~O#Y(mO#]#nO#b7cO~O#Y(mO#]#nO#b7eO~O#Y(mO#b7gO~O#Y(mO#]#nO#b7gO~O#Y(mO#]#nO#b7iO~O#Y(mO#b7kO~O#Y(mO#]#nO#b7kO~O#Y(mO#]#nO#b7mO~O#Y(mO#b7oO~O#Y(mO#]#nO#b7oO~O#Y(mO#]#nO#b7qO~O#Y(mO#b7sO~O#Y(mO#]#nO#b7sO~O#Y(mO#]#nO#b7uO~O#Y(mO#b7wO~O#Y(mO#]#nO#b7wO~O#Y(mO#]#nO#b7yO~O#Y(mO#b7{O~O#Y(mO#]#nO#b7{O~O#Y(mO#]#nO#b7}O~O#Y(mO#b8PO~O#Y(mO#]#nO#b8PO~O#Y(mO#]#nO#b8RO~O#Y#kOX#hqZ#hq[#hq]#hq^#hq_#hq`#hqa#hqb#hqc#hqd#hqe#hqf#hqg#hqh#hqi#hqj#hqk#hql#hqm#hqn#hqo#hqp#hqq#hqr#hqs#hqt#hqu#hqv#hqw#hqx#hqy#hqz#hq{#hq|#hq}#hq!O#hq!P#hq!Q#hq!R#hq!S#hq!T#hq!U#hq!V#hq!W#hq!X#hq!Y#hq!Z#hq![#hq!]#hq!^#hq!_#hq!`#hq!a#hq!b#hq!c#hq!d#hq!e#hq!f#hq!g#hq!h#hq!i#hq!j#hq!k#hq!l#hq!m#hq!n#hq!o#hq!p#hq!q#hq!{#hq!}#hq#P#hq#T#hq#]#hq#b#hq#e#hq$d#hq$h#hq$l#hq$q#hq$r#hq$s#hq$t#hq~O#Y#kOX#WqZ#Wq[#Wq]#Wq^#Wq_#Wq`#Wqa#Wqb#Wqc#Wqd#Wqe#Wqf#Wqg#Wqh#Wqi#Wqj#Wqk#Wql#Wqm#Wqn#Wqo#Wqp#Wqq#Wqr#Wqs#Wqt#Wqu#Wqv#Wqw#Wqx#Wqy#Wqz#Wq{#Wq|#Wq}#Wq!O#Wq!P#Wq!Q#Wq!R#Wq!S#Wq!T#Wq!U#Wq!V#Wq!W#Wq!X#Wq!Y#Wq!Z#Wq![#Wq!]#Wq!^#Wq!_#Wq!`#Wq!a#Wq!b#Wq!c#Wq!d#Wq!e#Wq!f#Wq!g#Wq!h#Wq!i#Wq!j#Wq!k#Wq!l#Wq!m#Wq!n#Wq!o#Wq!p#Wq!q#Wq!{#Wq!}#Wq#P#Wq#T#Wq#]#Wq#b#Wq#e#Wq$d#Wq$h#Wq$l#Wq$q#Wq$r#Wq$s#Wq$t#Wq~O#Y#kOX'mqY'mqZ'mq['mq]'mq^'mq_'mq`'mqa'mqb'mqc'mqd'mqe'mqf'mqg'mqh'mqi'mqj'mqk'mql'mqm'mqn'mqo'mqp'mqq'mqr'mqs'mq|'mq}'mq!O'mq!P'mq!Q'mq!R'mq!S'mq!T'mq!U'mq!V'mq!W'mq!X'mq!Y'mq!Z'mq!['mq!]'mq!^'mq!_'mq!`'mq!a'mq!b'mq!c'mq!d'mq!e'mq!f'mq!g'mq!h'mq!i'mq!j'mq!k'mq!l'mq!m'mq!n'mq!o'mq!p'mq!q'mq!{'mq!}'mq#P'mq#T'mq#]'mq#b'mq#e'mq$d'mq$h'mq$l'mq$q'mq$r'mq$s'mq$t'mq~O#Y#kOX'rqY'rqZ'rq['rq]'rq^'rq_'rq`'rqa'rqb'rqc'rqd'rqe'rqf'rqg'rqh'rqi'rqj'rqk'rql'rqm'rqn'rqp'rqq'rqr'rqs'rq|'rq}'rq!O'rq!P'rq!Q'rq!R'rq!S'rq!T'rq!U'rq!V'rq!W'rq!X'rq!Y'rq!Z'rq!['rq!]'rq!^'rq!_'rq!`'rq!a'rq!b'rq!c'rq!d'rq!e'rq!f'rq!g'rq!h'rq!i'rq!j'rq!k'rq!l'rq!m'rq!n'rq!o'rq!p'rq!q'rq#P'rq#]'rq#b'rq#e'rq$d'rq$h'rq$l'rq$s'rq$t'rq'`'rq'a'rq'b'rq~O#Y#kOX'wqY'wqZ'wq['wq]'wq^'wq_'wq`'wqa'wqb'wqc'wqd'wqe'wqf'wqg'wqh'wqi'wqj'wqk'wql'wqm'wqn'wqp'wqq'wqr'wqs'wq|'wq}'wq!O'wq!P'wq!Q'wq!R'wq!S'wq!T'wq!U'wq!V'wq!W'wq!X'wq!Y'wq!Z'wq!['wq!]'wq!^'wq!_'wq!`'wq!a'wq!b'wq!c'wq!d'wq!e'wq!f'wq!g'wq!h'wq!i'wq!j'wq!k'wq!l'wq!m'wq!n'wq!o'wq!p'wq!q'wq#P'wq#]'wq#b'wq#e'wq$d'wq$h'wq$l'wq$s'wq$t'wq'`'wq'a'wq'b'wq~O#Y#kOT'{q~O#Y#kOX(QqZ(Qq[(Qq](Qq^(Qq_(Qq`(Qqa(Qqb(Qqc(Qqd(Qqe(Qqf(Qqg(Qqh(Qqi(Qqj(Qqk(Qql(Qqm(Qqn(Qqo(Qqp(Qqq(Qqr(Qqs(Qq|(Qq}(Qq!O(Qq!P(Qq!Q(Qq!R(Qq!S(Qq!T(Qq!U(Qq!V(Qq!W(Qq!X(Qq!Y(Qq!Z(Qq![(Qq!](Qq!^(Qq!_(Qq!`(Qq!a(Qq!b(Qq!c(Qq!d(Qq!e(Qq!f(Qq!g(Qq!h(Qq!i(Qq!j(Qq!k(Qq!l(Qq!m(Qq!n(Qq!o(Qq!p(Qq!q(Qq!{(Qq!}(Qq#P(Qq#T(Qq#](Qq#b(Qq#e(Qq$d(Qq$h(Qq$l(Qq$q(Qq$r(Qq$s(Qq$t(Qq)q(Qq)r(Qq)s(Qq~O#Y#kOX(XqZ(Xq[(Xq](Xq^(Xq_(Xq`(Xqa(Xqb(Xqc(Xqd(Xqe(Xqf(Xqg(Xqh(Xqi(Xqj(Xqk(Xql(Xqm(Xqn(Xqo(Xqp(Xqq(Xqr(Xqs(Xqt(Xqu(Xqv(Xqw(Xqx(Xqy(Xqz(Xq{(Xq|(Xq}(Xq!O(Xq!P(Xq!Q(Xq!R(Xq!S(Xq!T(Xq!U(Xq!V(Xq!W(Xq!X(Xq!Y(Xq!Z(Xq![(Xq!](Xq!^(Xq!_(Xq!`(Xq!a(Xq!b(Xq!c(Xq!d(Xq!e(Xq!f(Xq!g(Xq!h(Xq!i(Xq!j(Xq!k(Xq!l(Xq!m(Xq!n(Xq!o(Xq!p(Xq!q(Xq!{(Xq!}(Xq#P(Xq#T(Xq#](Xq#b(Xq#e(Xq$d(Xq$h(Xq$l(Xq$q(Xq$r(Xq$s(Xq$t(Xq~O#Y#kOX(]qZ(]q[(]q](]q^(]q_(]q`(]qa(]qb(]qc(]qd(]qe(]qf(]qg(]qh(]qi(]qj(]qk(]ql(]qm(]qn(]qo(]qp(]qq(]qr(]qs(]qt(]qu(]qv(]qw(]qx(]qy(]qz(]q{(]q|(]q}(]q!O(]q!P(]q!Q(]q!R(]q!S(]q!T(]q!U(]q!V(]q!W(]q!X(]q!Y(]q!Z(]q![(]q!](]q!^(]q!_(]q!`(]q!a(]q!b(]q!c(]q!d(]q!e(]q!f(]q!g(]q!h(]q!i(]q!j(]q!k(]q!l(]q!m(]q!n(]q!o(]q!p(]q!q(]q!{(]q!}(]q#P(]q#T(]q#](]q#b(]q#e(]q$d(]q$h(]q$l(]q$q(]q$r(]q$s(]q$t(]q~O#Y#kOX(aqZ(aq[(aq](aq^(aq_(aq`(aqa(aqb(aqc(aqd(aqe(aqf(aqg(aqh(aqi(aqj(aqk(aql(aqm(aqn(aqo(aqp(aqq(aqr(aqs(aqt(aqu(aqv(aqw(aqx(aqy(aqz(aq{(aq|(aq}(aq!O(aq!P(aq!Q(aq!R(aq!S(aq!T(aq!U(aq!V(aq!W(aq!X(aq!Y(aq!Z(aq![(aq!](aq!^(aq!_(aq!`(aq!a(aq!b(aq!c(aq!d(aq!e(aq!f(aq!g(aq!h(aq!i(aq!j(aq!k(aq!l(aq!m(aq!n(aq!o(aq!p(aq!q(aq!{(aq!}(aq#P(aq#T(aq#](aq#b(aq#e(aq$d(aq$h(aq$l(aq$q(aq$r(aq$s(aq$t(aq~O#Z8SO~O#Z8UO~O#Z8YO~O#]#nOX$QqZ$Qq[$Qq]$Qq^$Qq_$Qq`$Qqa$Qqb$Qqc$Qqd$Qqe$Qqf$Qqg$Qqh$Qqi$Qqj$Qqk$Qql$Qqm$Qqn$Qqo$Qqp$Qqq$Qqr$Qqs$Qqt$Qqu$Qqv$Qqw$Qqx$Qqy$Qqz$Qq{$Qq|$Qq}$Qq!O$Qq!P$Qq!Q$Qq!R$Qq!S$Qq!T$Qq!U$Qq!V$Qq!W$Qq!X$Qq!Y$Qq!Z$Qq![$Qq!]$Qq!^$Qq!_$Qq!`$Qq!a$Qq!b$Qq!c$Qq!d$Qq!e$Qq!f$Qq!g$Qq!h$Qq!i$Qq!j$Qq!k$Qq!l$Qq!m$Qq!n$Qq!o$Qq!p$Qq!q$Qq!{$Qq!}$Qq#P$Qq#T$Qq#Y$Qq#b$Qq#e$Qq$d$Qq$h$Qq$l$Qq$q$Qq$r$Qq$s$Qq$t$Qq)g$QqY$Qq)q$Qq)r$Qq)s$Qq#Z$Qq!|$Qq#O$Qq~O#Y#yO#b8cO~O#Y#yO#]#nO#b8cO~O#Y#yO#]#nO#b8eO~O#Y#yO#b8gO~O#Y#yO#]#nO#b8gO~O#Y#yO#]#nO#b8iO~O#e8jO~O#Y,ZO#],UO#b8lO$h,[O)q,TO~O#Z8mO~P&BhO)j8oO)k8qO~O#Z8rO~P&BhO#Y(mO#]#nO#b8wO)t8vO~O#Z$iX~P&BhO#Z8mO~O#Y8yO#b,cO~OU8{O~OU8{O#b8|O~O#Z9PO~O#Z9SO~O#Z9VO~O#Z9ZO~O#Z%^P~P!%bO#Y4YO~O#Y4YO#b9^O~O#Y#kO#b9fO~O#Y#kO#b9hO~O#Y#kO#b9jO~O#Y#yO#b9lO~O#Y/qO#b9pO~O#Y/qO#b9rO~O#]#nOX&ViZ&Vi[&Vi]&Vi^&Vi_&Vi`&Via&Vib&Vic&Vid&Vie&Vif&Vig&Vih&Vii&Vij&Vik&Vil&Vim&Vin&Vip&Viq&Vir&Vis&Vi|&Vi}&Vi!O&Vi!P&Vi!Q&Vi!R&Vi!S&Vi!T&Vi!U&Vi!V&Vi!W&Vi!X&Vi!Y&Vi!Z&Vi![&Vi!]&Vi!^&Vi!_&Vi!`&Vi!a&Vi!b&Vi!c&Vi!d&Vi!e&Vi!f&Vi!g&Vi!h&Vi!i&Vi!j&Vi!k&Vi!l&Vi!m&Vi!n&Vi!o&Vi!p&Vi!q&Vi#P&Vi#Y&Vi#b&Vi#e&Vi$d&Vi$h&Vi$l&Vi$q&Vi$s&Vi$t&Vi'`&Vi'a&Vi'b&Vi#O&Vi!|&ViY&Vi#Z&Vio&Vi~OQ9xO~O#Y#yO#b:OO~O#Y#yO#]#nO#b:OO~O#Y#yO#]#nO#b:QO~O#Y#yO#b:TO~O#Y#yO#]#nO#b:TO~O#Y#yO#]#nO#b:VO~O#Y,ZO#],UO#b:XO$h,[O)q,TO~O#Y,ZO#],UO#b:[O$h,[O)q,TO~OU:]O#b:^O~OU:]O#b:^O*P:_O~O#Z:aO~OR:cO~O#Z:eO~OR:gO~O#Z:hO~OR:iO~O#Z:lO~OR:nO~O#Y4YO#b:pO~O#Y#yO#b:rO~O#Y#kO#b:uO~O#Z:vO~O#Y#yO#b:xO~O#Y#kO#b:zO~O#Y#kO#b:|O~O'`#Vi'a#Vi'b#Vi#O#Vi!|#Vi~P'*|O!r)yO~O!s)|O~O!t)}O~O!u*OO~O!v*PO~O!w*QO~O!x*RO~O!y*SO~O!z*TO~O#Y(mO#b;QO~O#Y(mO#]#nO#b;QO~O#Y(mO#b;TO~O#Y(mO#]#nO#b;TO~O#Y(mO#b;WO~O#Y(mO#]#nO#b;WO~O#Y(mO#b;ZO~O#Y(mO#]#nO#b;ZO~O#Y(mO#b;^O~O#Y(mO#]#nO#b;^O~O#Y(mO#b;aO~O#Y(mO#]#nO#b;aO~O#Y(mO#b;dO~O#Y(mO#]#nO#b;dO~O#Y(mO#b;gO~O#Y(mO#]#nO#b;gO~O#]#nOZ%oi[%oi]%oi^%oi_%oi`%oia%oib%oic%oid%oie%oif%oig%oih%oii%oij%oik%oil%oim%oin%oio%oip%oiq%oir%ois%oi|%oi}%oi!O%oi!P%oi!Q%oi!R%oi!S%oi!T%oi!U%oi!V%oi!W%oi!X%oi!Y%oi!Z%oi![%oi!]%oi!^%oi!_%oi!`%oi!a%oi!b%oi!c%oi!d%oi!e%oi!f%oi!g%oi!h%oi!i%oi!j%oi!k%oi!l%oi!m%oi!n%oi!o%oi!p%oi!q%oi!{%oi!}%oi#P%oi#Y%oi#b%oi#e%oi$d%oi$h%oi$l%oi$q%oi$r%oi$s%oi$t%oi)q%oi)r%oi#Z%oi~O#]#nOX$QyZ$Qy[$Qy]$Qy^$Qy_$Qy`$Qya$Qyb$Qyc$Qyd$Qye$Qyf$Qyg$Qyh$Qyi$Qyj$Qyk$Qyl$Qym$Qyn$Qyo$Qyp$Qyq$Qyr$Qys$Qyt$Qyu$Qyv$Qyw$Qyx$Qyy$Qyz$Qy{$Qy|$Qy}$Qy!O$Qy!P$Qy!Q$Qy!R$Qy!S$Qy!T$Qy!U$Qy!V$Qy!W$Qy!X$Qy!Y$Qy!Z$Qy![$Qy!]$Qy!^$Qy!_$Qy!`$Qy!a$Qy!b$Qy!c$Qy!d$Qy!e$Qy!f$Qy!g$Qy!h$Qy!i$Qy!j$Qy!k$Qy!l$Qy!m$Qy!n$Qy!o$Qy!p$Qy!q$Qy!{$Qy!}$Qy#P$Qy#T$Qy#Y$Qy#b$Qy#e$Qy$d$Qy$h$Qy$l$Qy$q$Qy$r$Qy$s$Qy$t$Qy)g$QyY$Qy)q$Qy)r$Qy)s$Qy#Z$Qy!|$Qy#O$Qy~O#Y#yO#b;kO~O#Y#yO#]#nO#b;kO~O#Y#yO#b;nO~O#Y#yO#]#nO#b;nO~O#Z;qO~O#Y;rO#]#nO#b;tO~O)j8oO)k;vO~O#Z;wO~O#Y(mO#b;yO~O#Y(mO#]#nO#b;{O~O#Y(mO#]#nO#b;{O)t;|O~O#Z;qO~P&BhO#Y,ZO#],UO#b<OO$h,[O)q,TO~OU<PO~O#Z<[O~O#Y4YO#b<^O~O#]#nOX&VqZ&Vq[&Vq]&Vq^&Vq_&Vq`&Vqa&Vqb&Vqc&Vqd&Vqe&Vqf&Vqg&Vqh&Vqi&Vqj&Vqk&Vql&Vqm&Vqn&Vqp&Vqq&Vqr&Vqs&Vq|&Vq}&Vq!O&Vq!P&Vq!Q&Vq!R&Vq!S&Vq!T&Vq!U&Vq!V&Vq!W&Vq!X&Vq!Y&Vq!Z&Vq![&Vq!]&Vq!^&Vq!_&Vq!`&Vq!a&Vq!b&Vq!c&Vq!d&Vq!e&Vq!f&Vq!g&Vq!h&Vq!i&Vq!j&Vq!k&Vq!l&Vq!m&Vq!n&Vq!o&Vq!p&Vq!q&Vq#P&Vq#Y&Vq#b&Vq#e&Vq$d&Vq$h&Vq$l&Vq$q&Vq$s&Vq$t&Vq'`&Vq'a&Vq'b&Vq#O&Vq!|&VqY&Vq#Z&Vqo&Vq~O#Y#yO#b<jO~O#Y#yO#]#nO#b<jO~O#Y#yO#]#nO#b<lO~O#Y#yO#b<nO~O#Y#yO#]#nO#b<nO~O#Y#yO#]#nO#b<pO~O#Y,ZO#],UO#b<rO$h,[O)q,TO~OU<tO~OU<tO#b<uO~O#Z<xO~O#Z<{O~O#Z=OO~O#Z=SO~O#Y4YO#b=UO~O#Y(mO#b=]O~O#Y(mO#b=_O~O#Y(mO#b=aO~O#Y(mO#b=cO~O#Y(mO#b=eO~O#Y(mO#b=gO~O#Y(mO#b=iO~O#Y(mO#b=kO~O#Y#yO#b=mO~O#Y#yO#b=oO~O#Z=pO~P&BhO#Y;rO#]#nO~O#Y(mO#b=tO~O#Y(mO#]#nO#b=tO~O#Y(mO#]#nO#b=vO~O#Z=wO~O#]#nOX&VyZ&Vy[&Vy]&Vy^&Vy_&Vy`&Vya&Vyb&Vyc&Vyd&Vye&Vyf&Vyg&Vyh&Vyi&Vyj&Vyk&Vyl&Vym&Vyn&Vyp&Vyq&Vyr&Vys&Vy|&Vy}&Vy!O&Vy!P&Vy!Q&Vy!R&Vy!S&Vy!T&Vy!U&Vy!V&Vy!W&Vy!X&Vy!Y&Vy!Z&Vy![&Vy!]&Vy!^&Vy!_&Vy!`&Vy!a&Vy!b&Vy!c&Vy!d&Vy!e&Vy!f&Vy!g&Vy!h&Vy!i&Vy!j&Vy!k&Vy!l&Vy!m&Vy!n&Vy!o&Vy!p&Vy!q&Vy#P&Vy#Y&Vy#b&Vy#e&Vy$d&Vy$h&Vy$l&Vy$q&Vy$s&Vy$t&Vy'`&Vy'a&Vy'b&Vy#O&Vy!|&VyY&Vy#Z&Vyo&Vy~O#Y#yO#b>SO~O#Y#yO#]#nO#b>SO~O#Y#yO#b>VO~O#Y#yO#]#nO#b>VO~O#Y,ZO#],UO#b>YO$h,[O)q,TO~OU>ZO~O#Y4YO#b>gO~O#Z>rO~O#Y(mO#b>tO~O#Y(mO#]#nO#b>tO~O#Y#yO#b>yO~O#Y#yO#b>{O~O#Y(mO#b?VO~O#Y#kO#]#nOZ%oa[%oa]%oa^%oa_%oa`%oaa%oab%oac%oad%oae%oaf%oag%oah%oai%oaj%oak%oal%oam%oan%oao%oap%oaq%oar%oas%oa|%oa}%oa!O%oa!P%oa!Q%oa!R%oa!S%oa!T%oa!U%oa!V%oa!W%oa!X%oa!Y%oa!Z%oa![%oa!]%oa!^%oa!_%oa!`%oa!a%oa!b%oa!c%oa!d%oa!e%oa!f%oa!g%oa!h%oa!i%oa!j%oa!k%oa!l%oa!m%oa!n%oa!o%oa!p%oa!q%oa!{%oa!}%oa#P%oa#b%oa#e%oa$d%oa$h%oa$l%oa$q%oa$r%oa$s%oa$t%oa)q%oa)r%oa#Z%oa~O#b?]O~PHOO$l$d#T'a'`'b$h#b$r#b~",
  goto: "#1p*uPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP*vP+U,Z-[._PP.eP:`:f;c<hP=kFaP,T+UFjGkPGqHT<h<h<h<hHWN`Nf<hNk<hNu<hN{<h! R<h<h<h! g<h<h<h<h<h<h!!P!!Z<h!#V<h<h!#a<h!#m<h!%R<hP!&g!&z!'[P!+|!,]<`P!,e!,k!-|!,]PPPP!,]!/Z<h<h<h<h<h<h<h!4_!4b<h!4h<h!4k<h<h<h<h<h!4n!4t!5O!5l<h<h<h<h<h<h<h<h<h<h<h<h<h<h<h<h!5r:f!6o!6r!7]!7i!7u!7u!7u!7u!7u!7u!8R!7u!8]!7u!8c!7u!7u!8i!7u!7u!7u!7u!7u!7u!7u!7u!9^!7u!9h!7u!7u!7u!7u!7u!7u!7u!7u!7u!7u!7u!7u!9r!7u!9u!7u!9x!7u!7u!7u!7u!7u!9{!:R!7u!7u!7u!7u!7u!7u!7u!7u!7u!7u!7u!7u!7u!7u!7u!7u!7i!7]!7]!:]!:i!:uPPP!6o:f!:{!;x:f!<O!<{!=R!=W,Z!=^!>_!>e!>h,Z!>k!?l!?r!?x,Z!?{!@|!AS,Z!AV!BW!B^!Ba,Z!Bd!Ce!Ck!Cn!Ct!Cy,Z!C|!D}!ET,Z!EW!FX!F_,Z!Fb!Gc!Gi!Gl!H[!Hg!Hr!Hu!IU!Ic!If!Iy!JY!J]!Jt!KV!KY!Ku!LY!L]!L|!Mc!Mf!NZ!Nr!Nu# n#!X#![#!i##m##t##|#%r#%y#&g#(p#(z#)Q#+h#+r#,Q#,`#,f#,m#,s#,y#-P#-V#-]#-c#-iPPPPPP#-o#._#/S#0RPPPPPPPPPPPPP#1PP#1XPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP#1eQ#UO[#iR!j!p!q!r?`R(k!u!`!tOR!j!k!o!p!q!r!u#R#T#V#W#X#Y#Z#[#](Y(b(d)a)e)h)k)n)q)t)w4Y?`d'|!d!f!h!l!m'y'{'}(P/qX*n#k(m*m*o!}!sOR!d!f!h!j!k!l!m!o!p!q!r!u#R#T#V#W#X#Y#Z#[#]#k'y'{'}(P(Y(b(d(m)a)e)h)k)n)q)t)w*m*o/q4Y?`!h!jOR!j!k!o!p!q!r!u#R#T#V#W#X#Y#Z#[#]#k(Y(b(d(m)a)e)h)k)n)q)t)w*m*o4Y?`e?`!d!f!h!l!m'y'{'}(P/qQ#`QR6|0`Q#mSQ#qTQ#tUQ#wVQ#{WQ$PXQ$Z[Q$mdQ$reQ$vfQ$ygS%RijS%WklS%Zm&iQ%szW%}!P&O'e/gQ&a!^Q&d!_[&f!a&g&h8T?]?_Q(o!yQ(s!zQ(w!{Q({!|Q)P!}Q)T#OQ)X#PQ)]#QQ*W#_Q*Y#`Q*[#aQ*^#bQ*`#cQ*b#dQ*d#eQ*f#fQ*h#gQ*j#hQ*v#oQ*y#rQ*|#uQ+P#xQ+W#|Q+Y$QQ+^$[Q+i$dQ+o$nQ+r$sQ+t$wS+v$z${Q+z%RS+|%S%TQ,P%WS,R%X%Y#d,d%a%d%i,e,h,j,m,q,t.z.}/S3z3{4O4P4R4V4W5x5{5}6Q6U6X8}9P9Q9S9T9V9X9Z:a:b:e:f:h:l:m<R<T<W<Z<v<x<y<{<|=O=Q=S>]>_>b>eQ-S&QQ-Y&bQ-]&eQ-a&jQ-d&kQ-g&lQ-j&mQ-m&nQ-q&oQ-z&rQ.]&zQ.a&{Q.e&|Q.h&}S.n'P'QS.r'R'SQ/]'`Q/x'rQ/{'sS0x(p(qS0}(t(uS1S(x(yS1X(|(}S1^)Q)RS1c)U)VS1h)Y)ZS1m)^)_Q2{+hQ2}+jQ3U+wS3X+{+|Q3Z+}S3^,Q,RQ3`,SQ4i-bQ4l-eQ4o-hQ4r-kQ4u-nQ4w-rQ4{-{Q5V.SQ5].^Q5_.bQ5a.fS5c.i.jQ5g.nS5i.o.pQ5l.rS5n.s.tQ6l/yQ6o/|S7d0y0zS7h1O1PS7l1T1US7p1Y1ZS7t1_1`S7x1d1eS7|1i1jS8Q1n1oQ8^2|Q8`3OS8d3Y3ZS8h3_3`Q8u3nQ9t5UQ9v5WQ9|5dS:P5h5iQ:R5jS:U5m5nQ:W5oQ;R7eQ;U7iQ;X7mQ;[7qQ;_7uQ;b7yQ;e7}Q;h8RQ;i8_Q;l8eQ;o8iQ;s8oS;z8v8wQ<e9uQ<g9wS<k:Q:RS<o:V:WQ=r;tS=u;{;|Q>Q<fQ>T<lQ>W<pR>u=vQ*u#nR2d*r!u!iOR!j!k!o!p!q!r!u#R#T#V#W#X#Y#Z#[#]#k#n#y(Y(b(d(m)a)e)h)k)n)q)t)w*m*o*r*t+Q+S4Y?`!t!cOR!j!k!o!p!q!r!u#R#T#V#W#X#Y#Z#[#]#k#n#y(Y(b(d(m)a)e)h)k)n)q)t)w*m*o*r*t+Q+S4Y?`]3l,Z3h3m3p8y;r#R!`OR!j!k!o!p!q!r!u#R#T#V#W#X#Y#Z#[#]#k#n#y(Y(b(d(m)a)e)h)k)n)q)t)w*m*o*r*t+Q+S,Z3h3m3p4Y8y;r?`Q#lSQ#pTQ#sUQ#vVQ$xgQ%_qQ%z!OQ&R!QQ&S!RQ&T!SQ&U!TQ&V!UQ&W!VQ&X!WQ&Y!XQ&Z!YQ&[!ZQ&]![Q&`!^Q&c!_Y&f!a&g&h?]?_!r*U#_#`#a#b#c#d#e#f#g#h*V*W*X*Y*Z*[*]*^*_*`*a*b*c*d*e*f*g*h*i*j2T2U2V2W2X2Y2Z2[2]2^S*q#m#oS*w#q#rS*z#t#uS*}#w#xQ+_$]Q+b$_Q+h$dU+u$y$z${Q,b%`S,|%{%|Q-Q&PS-W&a&bS-Z&d&eQ-`&jQ-c&kQ-f&lQ-i&mQ.g&}Q.x'VQ/d'dQ/i'fQ/j'gQ/k'hQ/l'iQ/m'jQ/n'kQ/o'lQ/p'mQ/w'rQ/z'sQ2g*vS2h*x*yS2j*{*|S2l+O+PS2u+`+aS2w+c+dQ2{+iQ2|+jS3T+v+wQ4_,}S4`-P-RS4d-X-YS4f-[-]S4h-a-bS4j-d-eS4m-g-hS4p-j-kQ5U.SU5b.h.i.jQ5w.yS6`/e/fQ6c/hS6j/x/yS6m/{/|Q8V2iQ8W2kQ8X2mQ8[2vQ8]2xQ8^2}Q8_3OQ8a3UQ9`4aQ9b4eQ9c4gQ9d4iS9e4k4lS9g4n4oS9i4q4rQ9t5VQ9u5WS9{5c5dQ:s6aS:t6b6dS:y6k6lS:{6n6oQ;i8`Q<_9fQ<`9hQ<a9jQ<e9vQ<f9wQ<h9|Q=W:uQ=Y:zQ=Z:|R>Q<gQ*p#kQ0u(mR2a*m!}ROR!d!f!h!j!k!l!m!o!p!q!r!u#R#T#V#W#X#Y#Z#[#]#k'y'{'}(P(Y(b(d(m)a)e)h)k)n)q)t)w*m*o/q4Y?`Q#_QR2`*kQ#jRQ(X!jQ(g!pQ(h!qQ(i!rR?^?`R*l#jQ#zWW#}X$P$Q+YS$RY$TS$UZ$W`$X[$Z$[&r+^-z-{4{Q$]]Q$_^Q$d`Q$gaW$|h%O'O.l!n%Pij%R%S%T'P'Q+z+{+|+}.n.o.p3W3X3Y3Z5g5h5i5j8c8d8e:O:P:Q:R;k;l<j<k<l=m>S>T>y!n%Ukl%W%X%Y'R'S,P,Q,R,S.r.s.t3]3^3_3`5l5m5n5o8g8h8i:T:U:V:W;n;o<n<o<p=o>V>W>{S%w}%yQ&P!PQ&^!]S+U#{#|Q+a$^Q+d$`Q+f$bS+j$e$fQ+l$hW,x%x,z,{4^Q-P&OQ-T&^Q-V&_Q-l&nW-o&o-q-r4wS-s&p-uS-v&q-xQ-|&sQ.O&tQ.S&vQ.V&wS/a'c/cQ/h'eQ/u'qS2q+V+WQ2z+gQ3O+kS4b-U-VS4s-m-nQ5O-}Q5R.PQ5S.QS5W.T.UQ5Y.WW6[/b6^6_:rQ6b/gQ6g/uQ6i/vQ8Z2rQ9a4cS9k4t4uQ9s5TQ9w5XS:w6h6iQ<b9lR=X:xQ+T#yR2n+QV+R#y+Q+SQ$OXS+X$P$QR2s+YQ$SYR+Z$TQ$VZR+[$WQ$Y[S+]$Z$[Q-y&rQ2t+^S4z-z-{R9n4{Q$b_Q$ibQ+g$cQ+m$jQ.Q&uQ.X&xQ5T.RR5Z.YQ$qeS+q$r$sR3R+rW$pe$r$s+rW$tf$v$w+tQ%mvQ%owQ%qxW._&{.a.b5_W.c&|.e.f5aQ/V'[Q/X']R/Z'^Q$ufS+s$v$wR3S+tQ$}hQ+x%OQ.k'OR5e.lS%QijU+y%R%S%TS.m'P'QW3V+z+{+|+}U5f.n.o.pW8b3W3X3Y3ZW9}5g5h5i5jU;j8c8d8eW<i:O:P:Q:RS=l;k;lU>R<j<k<lQ>p=mS>x>S>TR?W>yS%VklU,O%W%X%YS.q'R'SW3[,P,Q,R,SU5k.r.s.tW8f3]3^3_3`W:S5l5m5n5oU;m8g8h8iW<m:T:U:V:WS=n;n;oU>U<n<o<pQ>q=oS>z>V>WR?X>{l,V%[,W,X,^.u3f3t5p5q5s8z:Z:[<sR3b,Um,V%[,W,X,^.u3f3t5p5q5s8z:Z:[<sQ,]%[Q,f%aQ,k%dQ,r%iU3e,W,X,^S3y,e,hS3},j,mS4T,q,tQ4U,rQ5r.uQ5y.zQ6O.}Q6V/SU8k3d3f3tS9O3z3{S9R4O4PQ9U4RQ9W4TS9Y4V4WU:Y5p5q5sS:`5x5{S:d5}6QS:j6U6XQ:k6VS;p8l8zS<Q8}9PS<S9Q9SS<U9T9VQ<V9US<X9X9ZQ<Y9YU<q:X:Z:[S<w:a:bS<z:e:fQ<}:hQ=P:jS=R:l:mQ=x<OQ=y<RQ=z<TQ={<UQ=|<WQ=}<XQ>O<ZS>X<r<sS>[<v<xS>^<y<{S>`<|=OQ>a<}S>c=Q=SQ>d=RQ>v=|Q>w>OQ>|>YQ>}>]Q?O>_Q?P>`Q?Q>bQ?R>cQ?S>eQ?Y?QR?Z?SQ3r,ZQ8n3hQ8s3mQ;}8yR=q;r]3o,Z3h3m3p8y;rQ;s8oR=r;t!t!cOR!j!k!o!p!q!r!u#R#T#V#W#X#Y#Z#[#]#k#n#y(Y(b(d(m)a)e)h)k)n)q)t)w*m*o*r*t+Q+S4Y?`d'x!d!f!h!l!m'y'{'}(P/q]3l,Z3h3m3p8y;r#gnOR!d!f!h!j!k!l!m!o!p!q!r!u#R#T#V#W#X#Y#Z#[#]#k#n#y'y'{'}(P(Y(b(d(m)a)e)h)k)n)q)t)w*m*o*r*t+Q+S,Z/q3h3m3p4Y8y;r?`Q(n!yQ(r!zQ(v!{Q(z!|Q)O!}Q)S#OQ)W#PQ)[#QU0v(o(p(qU0{(s(t(uU1Q(w(x(yU1V({(|(}U1[)P)Q)RU1a)T)U)VU1f)X)Y)ZU1k)])^)_W7b0w0x0y0zW7f0|0}1O1PW7j1R1S1T1UW7n1W1X1Y1ZW7r1]1^1_1`W7v1b1c1d1eW7z1g1h1i1jW8O1l1m1n1oQ8t3nU;P7c7d7eU;S7g7h7iU;V7k7l7mU;Y7o7p7qU;]7s7t7uU;`7w7x7yU;c7{7|7}U;f8P8Q8RU;x8u8v8wS=[;Q;RS=^;T;US=`;W;XS=b;Z;[S=d;^;_S=f;a;bS=h;d;eS=j;g;hW=s;y;z;{;|Q>h=]Q>i=_Q>j=aQ>k=cQ>l=eQ>m=gQ>n=iQ>o=kU>s=t=u=vS?U>t>uR?[?VR%nvQ%mvR/V'[R%pwR%rxQ%x}R,{%yQ,y%xS4],z,{R9_4^Q4Z,yS9]4[4]Q:o6]S<]9^9_S=T:p:qQ>P<^S>f=U=VR?T>gQ(Z!kR9[4Y!u!cOR!j!k!o!p!q!r!u#R#T#V#W#X#Y#Z#[#]#k#n#y(Y(b(d(m)a)e)h)k)n)q)t)w*m*o*r*t+Q+S4Y?`R(Q!dQ(O!dQ(T!fQ(W!hS(]!l!mQ0R'yQ0X'{Q0[(PR6f/qe'|!d!f!h!l!m'y'{'}(P/qe'x!d!f!h!l!m'y'{'}(P/qe't!d!f!h!l!m'y'{'}(P/qQ-p&oS4v-q-rR9m4wQ-t&pR4x-uQ-w&qR4y-xQ/r'nQ/s'oQ/t'pQ4|-|Q5P.OQ6p/}S9o4}5OS9q5Q5RQ:}6qQ<c9pR<d9rQ.`&{S5^.a.bR9y5_Q.d&|S5`.e.fR9z5aR/W'[R/Y']R/['^Q/b'cR6_/cQ6]/bS:q6^6_R=V:re'{!d!f!h!l!m'y'{'}(P/qQ0T'zQ6u0UQ6v0VR;O6wQ0W'{R6x0X!u!fOR!j!k!o!p!q!r!u#R#T#V#W#X#Y#Z#[#]#k#n#y(Y(b(d(m)a)e)h)k)n)q)t)w*m*o*r*t+Q+S4Y?`Q(S!fR0^(T!u!hOR!j!k!o!p!q!r!u#R#T#V#W#X#Y#Z#[#]#k#n#y(Y(b(d(m)a)e)h)k)n)q)t)w*m*o*r*t+Q+S4Y?`Q(V!hR0_(WV*s#n*r*tQ0a(XR6z?^!}!kOR!d!f!h!j!k!l!m!o!p!q!r!u#R#T#V#W#X#Y#Z#[#]#k'y'{'}(P(Y(b(d(m)a)e)h)k)n)q)t)w*m*o/q4Y?`Q#aQR7P0bR([!kR0c([!}!lOR!d!f!h!j!k!l!m!o!p!q!r!u#R#T#V#W#X#Y#Z#[#]#k'y'{'}(P(Y(b(d(m)a)e)h)k)n)q)t)w*m*o/q4Y?`Q#bQR7R0dQ(^!lR(_!mR0e(^!}!mOR!d!f!h!j!k!l!m!o!p!q!r!u#R#T#V#W#X#Y#Z#[#]#k'y'{'}(P(Y(b(d(m)a)e)h)k)n)q)t)w*m*o/q4Y?`Q#cQR7T0fR0g(_!}!nOR!d!f!h!j!k!l!m!o!p!q!r!u#R#T#V#W#X#Y#Z#[#]#k'y'{'}(P(Y(b(d(m)a)e)h)k)n)q)t)w*m*o/q4Y?`Q#dQR7V0hR(a!nR0i(a!}!oOR!d!f!h!j!k!l!m!o!p!q!r!u#R#T#V#W#X#Y#Z#[#]#k'y'{'}(P(Y(b(d(m)a)e)h)k)n)q)t)w*m*o/q4Y?`Q#eQR7Y0lR(f!oQ(e!oR0j(bV(c!o(b(dR0m(f!}!pOR!d!f!h!j!k!l!m!o!p!q!r!u#R#T#V#W#X#Y#Z#[#]#k'y'{'}(P(Y(b(d(m)a)e)h)k)n)q)t)w*m*o/q4Y?`Q#fQR7[0nR0o(g!}!qOR!d!f!h!j!k!l!m!o!p!q!r!u#R#T#V#W#X#Y#Z#[#]#k'y'{'}(P(Y(b(d(m)a)e)h)k)n)q)t)w*m*o/q4Y?`Q#gQR7^0pR0q(h!}!rOR!d!f!h!j!k!l!m!o!p!q!r!u#R#T#V#W#X#Y#Z#[#]#k'y'{'}(P(Y(b(d(m)a)e)h)k)n)q)t)w*m*o/q4Y?`Q#hQR7`0rR0s(i!Z!vOR!j!k!p!q!r!u#R#T#V#W#X#Y#Z#[#](Y)a)e)h)k)n)q)t)w4Y?`c#SOR!j!p!q!r!u#T?`c#]OR!j!p!q!r!u#T?`R)x#]b#SOR!j!p!q!r!u#T?`T)v#])wg#[OR!j!p!q!r!u#T#])w?`R)u#[b#SOR!j!p!q!r!u#T?`S)s#[)tT)v#])wk#ZOR!j!p!q!r!u#T#[#])t)w?`R)r#Zb#SOR!j!p!q!r!u#T?`S)p#Z)qS)s#[)tT)v#])wo#YOR!j!p!q!r!u#T#Z#[#])q)t)w?`R)o#Yb#SOR!j!p!q!r!u#T?`S)m#Y)nS)p#Z)qS)s#[)tT)v#])ws#XOR!j!p!q!r!u#T#Y#Z#[#])n)q)t)w?`R)l#Xb#SOR!j!p!q!r!u#T?`S)j#X)kS)m#Y)nS)p#Z)qS)s#[)tT)v#])ww#WOR!j!p!q!r!u#T#X#Y#Z#[#])k)n)q)t)w?`R)i#Wb#SOR!j!p!q!r!u#T?`S)g#W)hS)j#X)kS)m#Y)nS)p#Z)qS)s#[)tT)v#])w{#VOR!j!p!q!r!u#T#W#X#Y#Z#[#])h)k)n)q)t)w?`R)f#Vb#SOR!j!p!q!r!u#T?`S)d#V)eS)g#W)hS)j#X)kS)m#Y)nS)p#Z)qS)s#[)tT)v#])w!P#ROR!j!p!q!r!u#T#V#W#X#Y#Z#[#])e)h)k)n)q)t)w?`R)b#R`#TOR!j!p!q!r!u?`R)c#Tb!xOR!j!p!q!r!u#T?`S(Y!k4YQ(l(YS)`#R)aS)d#V)eS)g#W)hS)j#X)kS)m#Y)nS)p#Z)qS)s#[)tT)v#])wS*t#n*rR2e*tU*o#k(m*mR2b*oQ*V#_Q*X#`Q*Z#aQ*]#bQ*_#cQ*a#dQ*c#eQ*e#fQ*g#gQ*i#hx2S*V*X*Z*]*_*a*c*e*g*i2T2U2V2W2X2Y2Z2[2]2^Q2T*WQ2U*YQ2V*[Q2W*^Q2X*`Q2Y*bQ2Z*dQ2[*fQ2]*hR2^*jS+S#y+QR2o+SQ,W%[[3c,W3f5p8z:Z<sS3f,X,^Q5p.uQ8z3tS:Z5q5sR<s:[%O,Y%[%a%d%i,W,X,^,e,h,j,m,q,r,t.u.z.}/S3d3f3t3z3{4O4P4R4T4V4W5p5q5s5x5{5}6Q6U6V6X8l8z8}9P9Q9S9T9U9V9X9Y9Z:X:Z:[:a:b:e:f:h:j:l:m<O<R<T<U<W<X<Z<r<s<v<x<y<{<|<}=O=Q=R=S=|>O>Y>]>_>`>b>c>e?Q?SS3g,Y3sR3s,[Y3p,Z3h3m8y;rR8x3pQ8p3iR;u8pQ,e%aQ,j%dQ,q%i!Y3x,e,j,q3{4P4W5x5}6U8}9Q9T9X:b:f:m<R<T<W<Z<v<y<|=Q>]>_>b>eQ3{,hQ4P,mQ4W,tQ5x.zQ5}.}Q6U/SQ8}3zQ9Q4OQ9T4RQ9X4VQ:b5{Q:f6QQ:m6XQ<R9PQ<T9SQ<W9VQ<Z9ZQ<v:aQ<y:eQ<|:hQ=Q:lQ>]<xQ>_<{Q>b=OR>e=SQ&O!PS-O&O/gR/g'eS&g!a?_S-^&g8TQ-_&hR8T?]b'}!d!f!h!l!m'y'{(P/qR0Y'}Q0O'uR6r0OS(d!o(bR0k(dQ)w#]R1w)wQ)t#[R1v)tQ)q#ZR1u)qQ)n#YR1t)nQ)k#XR1s)kQ)h#WR1r)hQ)e#VR1q)eQ)a#RR1p)a!Z!wOR!j!k!p!q!r!u#R#T#V#W#X#Y#Z#[#](Y)a)e)h)k)n)q)t)w4Y?`!Y!vOR!j!k!p!q!r!u#R#T#V#W#X#Y#Z#[#](Y)a)e)h)k)n)q)t)w4Y?`V(c!o(b(d!nPOR!j!k!o!p!q!r!u#R#T#V#W#X#Y#Z#[#]#k#y(Y(b(d(m)a)e)h)k)n)q)t)w*m*o+Q+S4Y?`V*s#n*r*t!`!tOR!j!k!o!p!q!r!u#R#T#V#W#X#Y#Z#[#](Y(b(d)a)e)h)k)n)q)t)w4Y?`W*n#k(m*m*oV+R#y+Q+S]3k,Z3h3m3p8y;re'w!d!f!h!l!m'y'{'}(P/qc!xOR!j!p!q!r!u#T?`",
  nodeNames: "⚠ VerbContent LstInlineContent LiteralArgContent SpaceDelimitedLiteralArgContent VerbatimContent Csname TrailingWhitespaceOnly TrailingContent Begin End RefCtrlSeq RefStarrableCtrlSeq CiteCtrlSeq CiteStarrableCtrlSeq LabelCtrlSeq MathTextCtrlSeq HboxCtrlSeq TitleCtrlSeq DocumentClassCtrlSeq UsePackageCtrlSeq HrefCtrlSeq UrlCtrlSeq VerbCtrlSeq LstInlineCtrlSeq IncludeGraphicsCtrlSeq IncludeSvgCtrlSeq CaptionCtrlSeq DefCtrlSeq LetCtrlSeq LeftCtrlSeq RightCtrlSeq NewCommandCtrlSeq RenewCommandCtrlSeq NewEnvironmentCtrlSeq RenewEnvironmentCtrlSeq BookCtrlSeq PartCtrlSeq ChapterCtrlSeq SectionCtrlSeq SubSectionCtrlSeq SubSubSectionCtrlSeq ParagraphCtrlSeq SubParagraphCtrlSeq InputCtrlSeq IncludeCtrlSeq SubfileCtrlSeq ItemCtrlSeq NewTheoremCtrlSeq TheoremStyleCtrlSeq CenteringCtrlSeq BibliographyCtrlSeq BibliographyStyleCtrlSeq AuthorCtrlSeq AffilCtrlSeq AffiliationCtrlSeq DateCtrlSeq MaketitleCtrlSeq TextColorCtrlSeq ColorBoxCtrlSeq HLineCtrlSeq TopRuleCtrlSeq MidRuleCtrlSeq BottomRuleCtrlSeq MultiColumnCtrlSeq ParBoxCtrlSeq TextBoldCtrlSeq TextItalicCtrlSeq TextSmallCapsCtrlSeq TextTeletypeCtrlSeq TextMediumCtrlSeq TextSansSerifCtrlSeq TextSuperscriptCtrlSeq TextSubscriptCtrlSeq TextStrikeOutCtrlSeq EmphasisCtrlSeq UnderlineCtrlSeq SetLengthCtrlSeq FootnoteCtrlSeq EndnoteCtrlSeq DocumentEnvName TabularEnvName EquationEnvName EquationArrayEnvName VerbatimEnvName TikzPictureEnvName FigureEnvName ListEnvName TableEnvName OpenParenCtrlSym CloseParenCtrlSym OpenBracketCtrlSym CloseBracketCtrlSym LineBreakCtrlSym Comment LaTeX Text BlankLine KnownEnvironment DocumentEnvironment BeginEnv EnvNameGroup OpenBrace CloseBrace OptionalArgument OpenBracket ShortOptionalArg Command KnownCommand Title Whitespace TextArgument LongArg CloseBracket NonEmptyGroup Environment BeginEnv EnvNameGroup EnvName Content EndEnv Author Affil Affiliation Date ShortTextArgument ShortArg NonEmptyGroup DocumentClass DocumentClassArgument BibliographyCommand BibliographyArgument BibliographyStyleCommand BibliographyStyleArgument UsePackage PackageArgument TextColorCommand ColorBoxCommand HrefCommand UrlArgument NewTheoremCommand TheoremStyleCommand UrlCommand VerbCommand LstInlineCommand IncludeGraphics IncludeGraphicsArgument FilePathArgument IncludeSvg IncludeSvgArgument Caption Label LabelArgument Ref RefArgument Cite BibKeyArgument Def CtrlSym MacroParameter OptionalMacroParameter DefinitionArgument NewLine DefinitionFragment DefinitionFragmentCommand DefinitionFragmentUnknownCommand CtrlSeq DefinitionFragmentArgument KnownCtrlSym LineBreak Group Dollar Normal Ampersand Tilde SectioningCommand SectioningArgument Let Hbox NewCommand RenewCommand NewEnvironment RenewEnvironment Input InputArgument BareFilePathArgument Include IncludeArgument Subfile SubfileArgument Centering Item Maketitle HorizontalLine MultiColumn SpanArgument ColumnArgument TabularArgument TabularContent MathTextCommand ParBoxCommand TextBoldCommand TextItalicCommand TextSmallCapsCommand TextTeletypeCommand TextMediumCommand TextSansSerifCommand TextSuperscriptCommand TextSubscriptCommand StrikeOutCommand EmphasisCommand UnderlineCommand SetLengthCommand FootnoteCommand EndnoteCommand UnknownCommand DollarMath InlineMath Math MathCommand KnownCommand Title Author Affil Affiliation Date DocumentClass DocumentClassArgument BibliographyCommand BibliographyArgument BibliographyStyleCommand BibliographyStyleArgument UsePackage TextColorCommand MathArgument ColorBoxCommand HrefCommand NewTheoremCommand TheoremStyleCommand UrlCommand VerbCommand LstInlineCommand IncludeGraphics IncludeGraphicsArgument IncludeSvg IncludeSvgArgument Caption Label Ref Cite Def Let Hbox NewCommand RenewCommand NewEnvironment RenewEnvironment Input InputArgument Include IncludeArgument Subfile SubfileArgument Centering Item Maketitle HorizontalLine MultiColumn SpanArgument ColumnArgument MathTextCommand ParBoxCommand TextBoldCommand TextItalicCommand TextSmallCapsCommand TextTeletypeCommand TextMediumCommand TextSansSerifCommand TextSuperscriptCommand TextSubscriptCommand StrikeOutCommand EmphasisCommand UnderlineCommand SetLengthCommand FootnoteCommand EndnoteCommand MathUnknownCommand Group MathDelimitedGroup MathOpening MathDelimiter MathClosing MathSpecialChar Number MathChar DisplayMath BracketMath OpenBracketMath CloseBracketMath ParenMath OpenParenMath CloseParenMath NonEmptyGroup EndEnv TabularEnvironment BeginEnv EnvNameGroup Content EndEnv EquationEnvironment BeginEnv EnvNameGroup Content EndEnv EquationArrayEnvironment BeginEnv EnvNameGroup EndEnv VerbatimEnvironment BeginEnv EnvNameGroup Content EndEnv TikzPictureEnvironment BeginEnv EnvNameGroup Content TikzPictureContent NonEmptyGroup EndEnv FigureEnvironment BeginEnv EnvNameGroup EndEnv ListEnvironment BeginEnv EnvNameGroup EndEnv TableEnvironment BeginEnv EnvNameGroup EndEnv Group Book SectioningCommand Content Part SectioningCommand Content Chapter SectioningCommand Content Section SectioningCommand Content SubSection SectioningCommand Content SubSubSection SectioningCommand Content Paragraph SectioningCommand Content SubParagraph SectioningCommand Content",
  maxTerm: 450,
  context: YQ,
  nodeProps: [["group", -10, 99, 115, 304, 309, 314, 318, 323, 330, 334, 338, "$Environment", -3, 216, 296, 299, "$MathContainer", -8, 343, 346, 349, 352, 355, 358, 361, 364, "$Section"], ["closedBy", 102, "CloseBrace", 105, "CloseBracket", 297, "CloseBracketMath", 300, "CloseParenMath"], ["openedBy", 103, "OpenBrace", 113, "OpenBracket", 298, "OpenBracketMath", 301, "OpenParenMath"]],
  skippedNodes: [0, 94],
  repeatNodeCount: 24,
  tokenData: "!Hy~R!ROX$[XY'mYZ'xZp$[pq'mqs$[st(Ytu)Yuv)_vw*Owx$[xy*Tyz.]z{/}{|+u|}$[}!O+u!O!P1o!P!Q3T!Q!R4u!R!S6i!S!T7h!T!U8g!U!V9f!V!W:e!W!X;d!X!Y<c!Y!Z=b!Z![>a![!^$[!^!_+u!_!`?`!`!a+u!a!c$[!c!}AQ!}#OCc#O#PCj#P#Q!EZ#Q#R!Eb#R#S!F[#S#T$[#T#oAQ#o#p!GU#p#q!GZ#q#r!Ho#r#s!Ht#s;'S$[;'S;=`'g<%lO$[T$cc'bS$rPOX$[Zp$[pq%nqs$[st&cwx$[x|%n|}$[}!O%n!O!P$[!P![%n![!^$[!^!a%n!a!}$[#S#o$[#p#q$[#s;'S$[;'S;=`'g<%lO$[P%sW$rPOX%nZs%nw!}%n#S#o%n#p#q%n#s;'S%n;'S;=`&]<%lO%nP&`P;=`<%l%nS&h]'bSOX&cZp&cqt&cwx&c|}&c!O!P&c![!^&c!a!}&c#S#o&c#p#q&c#s;'S&c;'S;=`'a<%lO&cS'dP;=`<%l&cT'jP;=`<%l$[~'rQ#b~XY'mpq'm~'}P$h~YZ(Q~(VP#T~YZ(QT(a])qP'bSOX&cZp&cqt&cwx&c|}&c!O!P&c![!^&c!a!}&c#S#o&c#p#q&c#s;'S&c;'S;=`'a<%lO&c~)_O$q~~)dT#Q~OY)_YZ)sZ;'S)_;'S;=`)x<%lO)_~)xO#Q~~){P;=`<%l)_~*TO$s~]*^g*TW'`S$rPOX%nZs%nwx%nxy+uyz+uz{+u{|+u|}%n}!O+u!O!P%n!P!Q+u!Q!^%n!^!_+u!_!`+u!`!a+u!a!}%n#Q#R-e#R#S-e#S#o%n#p#q%n#s;'S%n;'S;=`&]<%lO%nT+|g'`S$rPOX%nZs%nwx%nxy+uyz+uz{+u{|+u|}%n}!O+u!O!P%n!P!Q+u!Q!^%n!^!_+u!_!`+u!`!a+u!a!}%n#Q#R-e#R#S-e#S#o%n#p#q%n#s;'S%n;'S;=`&]<%lO%nS-jZ'`Sxy-eyz-ez{-e{|-e}!O-e!P!Q-e!^!_-e!_!`-e!`!a-e#Q#R-e#R#S-e].fg*UW'`S$rPOX%nZs%nwx%nxy+uyz+uz{+u{|+u|}%n}!O+u!O!P%n!P!Q+u!Q!^%n!^!_+u!_!`+u!`!a+u!a!}%n#Q#R-e#R#S-e#S#o%n#p#q%n#s;'S%n;'S;=`&]<%lO%nV0Wg)tQ'`S$rPOX%nZs%nwx%nxy+uyz+uz{+u{|+u|}%n}!O+u!O!P%n!P!Q+u!Q!^%n!^!_+u!_!`+u!`!a+u!a!}%n#Q#R-e#R#S-e#S#o%n#p#q%n#s;'S%n;'S;=`&]<%lO%n]1xc*sW'bS$rPOX$[Zp$[pq%nqs$[st&cwx$[x|%n|}$[}!O%n!O!P$[!P![%n![!^$[!^!a%n!a!}$[#S#o$[#p#q$[#s;'S$[;'S;=`'g<%lO$[]3^g*RW'`S$rPOX%nZs%nwx%nxy+uyz+uz{+u{|+u|}%n}!O+u!O!P%n!P!Q+u!Q!^%n!^!_+u!_!`+u!`!a+u!a!}%n#Q#R-e#R#S-e#S#o%n#p#q%n#s;'S%n;'S;=`&]<%lO%nT4|['aS$rPOX%nZs%nw!O%n!O!P5r!P!Q%n!Q![4u![!}%n#S#o%n#p#q%n#s;'S%n;'S;=`&]<%lO%nT5yY'aS$rPOX%nZs%nw!Q%n!Q![5r![!}%n#S#o%n#p#q%n#s;'S%n;'S;=`&]<%lO%nV6r[)uQ'aS$rPOX%nZs%nw!O%n!O!P5r!P!Q%n!Q![4u![!}%n#S#o%n#p#q%n#s;'S%n;'S;=`&]<%lO%nV7q[)vQ'aS$rPOX%nZs%nw!O%n!O!P5r!P!Q%n!Q![4u![!}%n#S#o%n#p#q%n#s;'S%n;'S;=`&]<%lO%nV8p[)wQ'aS$rPOX%nZs%nw!O%n!O!P5r!P!Q%n!Q![4u![!}%n#S#o%n#p#q%n#s;'S%n;'S;=`&]<%lO%nV9o[)xQ'aS$rPOX%nZs%nw!O%n!O!P5r!P!Q%n!Q![4u![!}%n#S#o%n#p#q%n#s;'S%n;'S;=`&]<%lO%nV:n[)yQ'aS$rPOX%nZs%nw!O%n!O!P5r!P!Q%n!Q![4u![!}%n#S#o%n#p#q%n#s;'S%n;'S;=`&]<%lO%nV;m[)zQ'aS$rPOX%nZs%nw!O%n!O!P5r!P!Q%n!Q![4u![!}%n#S#o%n#p#q%n#s;'S%n;'S;=`&]<%lO%nV<l[){Q'aS$rPOX%nZs%nw!O%n!O!P5r!P!Q%n!Q![4u![!}%n#S#o%n#p#q%n#s;'S%n;'S;=`&]<%lO%nV=k[)|Q'aS$rPOX%nZs%nw!O%n!O!P5r!P!Q%n!Q![4u![!}%n#S#o%n#p#q%n#s;'S%n;'S;=`&]<%lO%nV>j[)}Q'aS$rPOX%nZs%nw!O%n!O!P5r!P!Q%n!Q![4u![!}%n#S#o%n#p#q%n#s;'S%n;'S;=`&]<%lO%nV?ig*PQ'`S$rPOX%nZs%nwx%nxy+uyz+uz{+u{|+u|}%n}!O+u!O!P%n!P!Q+u!Q!^%n!^!_+u!_!`+u!`!a+u!a!}%n#Q#R-e#R#S-e#S#o%n#p#q%n#s;'S%n;'S;=`&]<%lO%nVAZg#jQ'bS$rPOX$[Zp$[pq%nqs$[st&cwx$[xz%nz{Br{|%n|}$[}!O%n!O!P$[!P![%n![!^$[!^!a%n!a!c$[!c!}AQ#S#T$[#T#oAQ#p#q$[#s;'S$[;'S;=`'g<%lO$[RByW#jQ$rPOX%nZs%nw!}%n#S#o%n#p#q%n#s;'S%n;'S;=`&]<%lO%n_CjO*VW#]V]CmjO!cE_!c!fEd!f!gEo!g!wEd!w!xHw!x!yNk!y!}Ed!}#TE_#T#UEd#U#V! }#V#WEd#W#X!%S#X#`Ed#`#a!([#a#fEd#f#g!2y#g#iEd#i#j!=h#j#k!C[#k#oEd#o#p!Dn#p#q!Du#q#r!D|#r;'SE_;'S;=`!ET<%lOE_TEdO$dTTEiQ$lT!c!}Ed#T#oEd]EtS$lT!c!}Ed#T#cEd#c#dFQ#d#oEd]FVS$lT!c!}Ed#T#kEd#k#lFc#l#oEd]FhS$lT!c!}Ed#T#bEd#b#cFt#c#oEd]FyR$lT!c!}Ed#T#UGS#U#oEd]GXS$lT!c!}Ed#T#fEd#f#gGe#g#oEd]GjS$lT!c!}Ed#T#fEd#f#gGv#g#oEd]G{S$lT!c!}Ed#T#cEd#c#dHX#d#oEd]H^S$lT!c!}Ed#T#kEd#k#lHj#l#oEd]HqQ*eW$lT!c!}Ed#T#oEd]H|S$lT!c!}Ed#T#dEd#d#eIY#e#oEd]I_T$lT!c!}Ed#T#UIn#U#WEd#W#XKc#X#oEd]IsS$lT!c!}Ed#T#fEd#f#gJP#g#oEd]JUS$lT!c!}Ed#T#fEd#f#gJb#g#oEd]JgS$lT!c!}Ed#T#cEd#c#dJs#d#oEd]JxS$lT!c!}Ed#T#kEd#k#lKU#l#oEd]K]Q*dW$lT!c!}Ed#T#oEd]KhS$lT!c!}Ed#T#cEd#c#dKt#d#oEd]KyS$lT!c!}Ed#T#kEd#k#lLV#l#oEd]L[S$lT!c!}Ed#T#bEd#b#cLh#c#oEd]LmR$lT!c!}Ed#T#ULv#U#oEd]L{S$lT!c!}Ed#T#fEd#f#gMX#g#oEd]M^S$lT!c!}Ed#T#fEd#f#gMj#g#oEd]MoS$lT!c!}Ed#T#cEd#c#dM{#d#oEd]NQS$lT!c!}Ed#T#kEd#k#lN^#l#oEd]NeQ*gW$lT!c!}Ed#T#oEd]NpS$lT!c!}Ed#T#XEd#X#YN|#Y#oEd]! RS$lT!c!}Ed#T#fEd#f#g! _#g#oEd]! dS$lT!c!}Ed#T#hEd#h#i! p#i#oEd]! wQ*nW$lT!c!}Ed#T#oEd]!!SR$lT!c!}Ed#T#U!!]#U#oEd]!!bS$lT!c!}Ed#T#VEd#V#W!!n#W#oEd]!!sS$lT!c!}Ed#T#_Ed#_#`!#P#`#oEd]!#US$lT!c!}Ed#T#gEd#g#h!#b#h#oEd]!#gS$lT!c!}Ed#T#`Ed#`#a!#s#a#oEd]!#xR$lT!c!}Ed#T#U!$R#U#oEd]!$WS$lT!c!}Ed#T#gEd#g#h!$d#h#oEd]!$iS$lT!c!}Ed#T#[Ed#[#]!$u#]#oEd]!$|Q*bW$lT!c!}Ed#T#oEd]!%XS$lT!c!}Ed#T#cEd#c#d!%e#d#oEd]!%jS$lT!c!}Ed#T#kEd#k#l!%v#l#oEd]!%{S$lT!c!}Ed#T#bEd#b#c!&X#c#oEd]!&^R$lT!c!}Ed#T#U!&g#U#oEd]!&lS$lT!c!}Ed#T#fEd#f#g!&x#g#oEd]!&}S$lT!c!}Ed#T#fEd#f#g!'Z#g#oEd]!'`S$lT!c!}Ed#T#cEd#c#d!'l#d#oEd]!'qS$lT!c!}Ed#T#kEd#k#l!'}#l#oEd]!(UQ*hW$lT!c!}Ed#T#oEd]!(aZ$lT!c!xEd!x!y!)S!y!}Ed#T#U!*f#U#V!,Z#V#W!.`#W#YEd#Y#Z!/r#Z#jEd#j#k!1g#k#oEd]!)XS$lT!c!}Ed#T#XEd#X#Y!)e#Y#oEd]!)jS$lT!c!}Ed#T#fEd#f#g!)v#g#oEd]!){S$lT!c!}Ed#T#hEd#h#i!*X#i#oEd]!*`Q*jW$lT!c!}Ed#T#oEd]!*kS$lT!c!}Ed#T#bEd#b#c!*w#c#oEd]!*|S$lT!c!}Ed#T#ZEd#Z#[!+Y#[#oEd]!+_S$lT!c!}Ed#T#`Ed#`#a!+k#a#oEd]!+pS$lT!c!}Ed#T#XEd#X#Y!+|#Y#oEd]!,TQ*`W$lT!c!}Ed#T#oEd]!,`S$lT!c!}Ed#T#fEd#f#g!,l#g#oEd]!,qR$lT!c!}Ed#T#U!,z#U#oEd]!-PS$lT!c!}Ed#T#VEd#V#W!-]#W#oEd]!-bU$lT!c!}Ed#T#XEd#X#Y!-t#Y#_Ed#_#`!.R#`#oEd]!-{Q*oW$lT!c!}Ed#T#oEd]!.YQ*qW$lT!c!}Ed#T#oEd]!.eS$lT!c!}Ed#T#XEd#X#Y!.q#Y#oEd]!.vS$lT!c!}Ed#T#]Ed#]#^!/S#^#oEd]!/XS$lT!c!}Ed#T#`Ed#`#a!/e#a#oEd]!/lQ*^W$lT!c!}Ed#T#oEd]!/wS$lT!c!}Ed#T#`Ed#`#a!0T#a#oEd]!0YS$lT!c!}Ed#T#cEd#c#d!0f#d#oEd]!0kS$lT!c!}Ed#T#cEd#c#d!0w#d#oEd]!0|S$lT!c!}Ed#T#fEd#f#g!1Y#g#oEd]!1aQ*[W$lT!c!}Ed#T#oEd]!1lS$lT!c!}Ed#T#XEd#X#Y!1x#Y#oEd]!1}S$lT!c!}Ed#T#fEd#f#g!2Z#g#oEd]!2`S$lT!c!}Ed#T#hEd#h#i!2l#i#oEd]!2sQ*iW$lT!c!}Ed#T#oEd]!3OZ$lT!c!xEd!x!y!3q!y!}Ed#T#U!5T#U#V!6x#V#W!8}#W#YEd#Y#Z!:a#Z#jEd#j#k!<U#k#oEd]!3vS$lT!c!}Ed#T#XEd#X#Y!4S#Y#oEd]!4XS$lT!c!}Ed#T#fEd#f#g!4e#g#oEd]!4jS$lT!c!}Ed#T#hEd#h#i!4v#i#oEd]!4}Q*kW$lT!c!}Ed#T#oEd]!5YS$lT!c!}Ed#T#bEd#b#c!5f#c#oEd]!5kS$lT!c!}Ed#T#ZEd#Z#[!5w#[#oEd]!5|S$lT!c!}Ed#T#`Ed#`#a!6Y#a#oEd]!6_S$lT!c!}Ed#T#XEd#X#Y!6k#Y#oEd]!6rQ*aW$lT!c!}Ed#T#oEd]!6}S$lT!c!}Ed#T#fEd#f#g!7Z#g#oEd]!7`R$lT!c!}Ed#T#U!7i#U#oEd]!7nS$lT!c!}Ed#T#VEd#V#W!7z#W#oEd]!8PU$lT!c!}Ed#T#XEd#X#Y!8c#Y#_Ed#_#`!8p#`#oEd]!8jQ*pW$lT!c!}Ed#T#oEd]!8wQ*rW$lT!c!}Ed#T#oEd]!9SS$lT!c!}Ed#T#XEd#X#Y!9`#Y#oEd]!9eS$lT!c!}Ed#T#]Ed#]#^!9q#^#oEd]!9vS$lT!c!}Ed#T#`Ed#`#a!:S#a#oEd]!:ZQ*_W$lT!c!}Ed#T#oEd]!:fS$lT!c!}Ed#T#`Ed#`#a!:r#a#oEd]!:wS$lT!c!}Ed#T#cEd#c#d!;T#d#oEd]!;YS$lT!c!}Ed#T#cEd#c#d!;f#d#oEd]!;kS$lT!c!}Ed#T#fEd#f#g!;w#g#oEd]!<OQ*]W$lT!c!}Ed#T#oEd]!<ZS$lT!c!}Ed#T#XEd#X#Y!<g#Y#oEd]!<lS$lT!c!}Ed#T#fEd#f#g!<x#g#oEd]!<}S$lT!c!}Ed#T#hEd#h#i!=Z#i#oEd]!=bQ*lW$lT!c!}Ed#T#oEd]!=mS$lT!c!}Ed#T#dEd#d#e!=y#e#oEd]!>OT$lT!c!}Ed#T#U!>_#U#WEd#W#X!@S#X#oEd]!>dS$lT!c!}Ed#T#fEd#f#g!>p#g#oEd]!>uS$lT!c!}Ed#T#fEd#f#g!?R#g#oEd]!?WS$lT!c!}Ed#T#cEd#c#d!?d#d#oEd]!?iS$lT!c!}Ed#T#kEd#k#l!?u#l#oEd]!?|Q*cW$lT!c!}Ed#T#oEd]!@XS$lT!c!}Ed#T#cEd#c#d!@e#d#oEd]!@jS$lT!c!}Ed#T#kEd#k#l!@v#l#oEd]!@{S$lT!c!}Ed#T#bEd#b#c!AX#c#oEd]!A^R$lT!c!}Ed#T#U!Ag#U#oEd]!AlS$lT!c!}Ed#T#fEd#f#g!Ax#g#oEd]!A}S$lT!c!}Ed#T#fEd#f#g!BZ#g#oEd]!B`S$lT!c!}Ed#T#cEd#c#d!Bl#d#oEd]!BqS$lT!c!}Ed#T#kEd#k#l!B}#l#oEd]!CUQ*fW$lT!c!}Ed#T#oEd]!CaS$lT!c!}Ed#T#XEd#X#Y!Cm#Y#oEd]!CrS$lT!c!}Ed#T#fEd#f#g!DO#g#oEd]!DTS$lT!c!}Ed#T#hEd#h#i!Da#i#oEd]!DhQ*mW$lT!c!}Ed#T#oEd]!DuO*XW$dT]!D|O*ZW$dT]!ETO*YW$dTT!EWP;=`<%lE_]!EbO*WW#eTT!EiZ)sP'`Sxy-eyz-ez{-e{|-e}!O-e!P!Q-e!^!_-e!_!`-e!`!a-e#Q#R-e#R#S-eT!FcZ)rP'`Sxy-eyz-ez{-e{|-e}!O-e!P!Q-e!^!_-e!_!`-e!`!a-e#Q#R-e#R#S-e~!GZO#Y~]!Gdc*SW'bS$rPOX$[Zp$[pq%nqs$[st&cwx$[x|%n|}$[}!O%n!O!P$[!P![%n![!^$[!^!a%n!a!}$[#S#o$[#p#q$[#s;'S$[;'S;=`'g<%lO$[~!HtO#Z~~!HyO$t~",
  tokenizers: [GQ, IQ, jQ, _Q, zQ, tS, iS, 0, 1, 2, 3, KQ, JQ],
  topRules: {
    LaTeX: [0, 95]
  },
  specialized: [{
    term: 166,
    get: (n, e) => oc(n) << 1,
    external: oc
  }, {
    term: 118,
    get: (n, e) => lc(n) << 1,
    external: lc
  }, {
    term: 158,
    get: (n, e) => ac(n) << 1,
    external: ac
  }],
  tokenPrec: 18913
});
function gS(n) {
  const e = n.state.sliceDoc(Math.max(0, n.pos - 20), n.pos);
  return /\\(begin|end)\{[^}]*$/.test(e);
}
function bS(n) {
  const e = n.state.sliceDoc(Math.max(0, n.pos - 30), n.pos);
  return /\\[a-zA-Z]*$/.test(e);
}
const yS = ["math", "displaymath", "equation", "align", "gather", "multline", "flalign", "alignat", "eqnarray", "array", "cases", "split", "matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "smallmatrix"];
const xS = ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "smallmatrix", "cases", "split", "array"];
function hc(n) {
  const e = n.state.sliceDoc(0, n.pos);
  let t = false;
  let i = false;
  let s = false;
  let r = false;
  const o = [];
  for (let l = 0; l < e.length; l++) {
    const a = e[l];
    const h = l > 0 ? e[l - 1] : "";
    if (h === "\\" && (a === "$" || a === "(" || a === ")" || a === "[" || a === "]" || a === "\\")) {
      if (a === "\\") {
        continue;
      }
      if (a === "(") {
        s = true;
        continue;
      }
      if (a === ")") {
        s = false;
        continue;
      }
      if (a === "[") {
        r = true;
        continue;
      }
      if (a === "]") {
        r = false;
        continue;
      }
      if (a === "$") {
        continue;
      }
    }
    if (a === "$" && h !== "\\") {
      if (e[l + 1] === "$") {
        i = !i;
        l++;
      } else {
        t = !t;
      }
      continue;
    }
    if (a === "\\") {
      const c = e.slice(l).match(/^\\begin\{([^}]+)\}/);
      if (c) {
        o.push(c[1].replace(/\*$/, ""));
        l += c[0].length - 1;
        continue;
      }
      const f = e.slice(l).match(/^\\end\{([^}]+)\}/);
      if (f) {
        const u = f[1].replace(/\*$/, "");
        const d = o.lastIndexOf(u);
        if (d !== -1) {
          o.splice(d, 1);
        }
        l += f[0].length - 1;
      }
    }
  }
  if (t || i || s || r) {
    return true;
  } else {
    return o.some(l => yS.includes(l));
  }
}
const Ad = ["document", "abstract", "appendix", "frontmatter", "mainmatter", "backmatter", "figure", "figure*", "table", "table*", "wrapfigure", "subfigure", "center", "flushleft", "flushright", "quote", "quotation", "verse", "itemize", "enumerate", "description", "list", "verbatim", "verbatim*", "lstlisting", "minted", "Verbatim", "comment", "math", "displaymath", "equation", "equation*", "align", "align*", "gather", "gather*", "multline", "multline*", "flalign", "flalign*", "alignat", "alignat*", "array", "cases", "split", "eqnarray", "eqnarray*", "matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "smallmatrix", "tabular", "tabular*", "tabularx", "longtable", "xltabular", "theorem", "lemma", "corollary", "proposition", "definition", "example", "proof", "tikzpicture", "scope", "minipage"];
const Pd = ["\\documentclass", "\\usepackage", "\\title", "\\author", "\\date", "\\maketitle", "\\tableofcontents", "\\appendix", "\\bibliography", "\\bibliographystyle", "\\part", "\\chapter", "\\section", "\\subsection", "\\subsubsection", "\\paragraph", "\\subparagraph", "\\begin", "\\end", "\\label", "\\ref", "\\pageref", "\\cite", "\\nocite", "\\bibitem", "\\textbf", "\\textit", "\\texttt", "\\textsf", "\\textrm", "\\textsc", "\\emph", "\\underline", "\\textcolor", "\\colorbox", "\\item", "\\itemize", "\\enumerate", "\\includegraphics", "\\caption", "\\figure", "\\frac", "\\sqrt", "\\sum", "\\int", "\\prod", "\\lim", "\\infty", "\\partial", "\\alpha", "\\beta", "\\gamma", "\\delta", "\\epsilon", "\\varepsilon", "\\zeta", "\\eta", "\\theta", "\\iota", "\\kappa", "\\lambda", "\\mu", "\\nu", "\\xi", "\\pi", "\\rho", "\\sigma", "\\tau", "\\upsilon", "\\phi", "\\varphi", "\\chi", "\\psi", "\\omega", "\\Gamma", "\\Delta", "\\Theta", "\\Lambda", "\\Xi", "\\Pi", "\\Sigma", "\\Upsilon", "\\Phi", "\\Psi", "\\Omega", "\\&", "\\%", "\\$", "\\#", "\\_", "\\{", "\\}", "\\\\", "\\quad", "\\qquad", "\\hspace", "\\vspace", "\\hline", "\\cline", "\\multicolumn", "\\multirow", "\\toprule", "\\midrule", "\\bottomrule", "\\newcommand", "\\renewcommand", "\\newenvironment", "\\renewenvironment", "\\def", "\\let", "\\input", "\\include", "\\includeonly"];
const Md = ["\\sin", "\\cos", "\\tan", "\\arcsin", "\\arccos", "\\arctan", "\\sinh", "\\cosh", "\\tanh", "\\log", "\\ln", "\\exp", "\\min", "\\max", "\\sup", "\\inf", "\\lim", "\\limsup", "\\liminf", "\\det", "\\dim", "\\mod", "\\gcd", "\\lcm", "\\mathop", "\\rightarrow", "\\leftarrow", "\\Rightarrow", "\\Leftarrow", "\\mapsto", "\\approx", "\\sim", "\\simeq", "\\cong", "\\equiv", "\\prec", "\\succ", "\\neq", "\\geq", "\\leq", "\\ll", "\\gg", "\\subset", "\\subseteq", "\\in", "\\notin", "\\cap", "\\cup", "\\setminus", "\\emptyset", "\\varnothing", "\\forall", "\\exists", "\\nexists", "\\mathbb{R}", "\\mathbb{Z}", "\\mathbb{N}", "\\mathbb{Q}", "\\mathbb{C}", "\\hat", "\\tilde", "\\bar", "\\vec", "\\dot", "\\ddot", "\\underline", "\\overline", "\\begin{equation}", "\\begin{align}", "\\begin{align*}", "\\begin{gather}", "\\begin{array}", "\\begin{cases}", "\\begin{matrix}", "\\begin{pmatrix}", "\\begin{bmatrix}", "\\begin{vmatrix}"];
const Rd = ["amsmath", "amssymb", "amsfonts", "amsthm", "mathtools", "graphicx", "xcolor", "hyperref", "url", "geometry", "fancyhdr", "lastpage", "booktabs", "tabularx", "longtable", "multirow", "tikz", "pgfplots", "pgf", "babel", "inputenc", "fontenc", "natbib", "biblatex", "cite", "algorithm", "algorithmic", "listings", "minted", "enumitem", "cleveref", "microtype"];
function QS(n, e) {
  return {
    label: n,
    type: "class",
    apply: (t, i, s, r) => {
      const o = t.state.doc.lineAt(s);
      const l = t.state.sliceDoc(o.from, s);
      const c = t.state.sliceDoc(r, r + 1) === "}" ? r + 1 : r;
      if (/\\begin\{[^}]*$/.test(l)) {
        const u = o.text.match(/^(\s*)/);
        const d = u ? u[1] : "";
        const m = d + "  ";
        let p = `${n}}`;
        let O = 1;
        if (e) {
          p += `
${m}
${d}\\end{${n}}`;
          O += m.length + 1;
        }
        t.dispatch({
          changes: {
            from: s,
            to: c,
            insert: p
          },
          selection: {
            anchor: s + n.length + O
          }
        });
      } else if (/\\end\{[^}]*$/.test(l)) {
        t.dispatch({
          changes: {
            from: s,
            to: c,
            insert: `${n}}`
          },
          selection: {
            anchor: s + n.length + 1
          }
        });
      } else {
        t.dispatch({
          changes: {
            from: s,
            to: r,
            insert: n
          },
          selection: {
            anchor: s + n.length
          }
        });
      }
    },
    boost: 1
  };
}
function cc(n, e) {
  if (n.startsWith("\\begin{")) {
    const t = n.match(/\\begin\{([^}]+)\}/);
    if (t) {
      const i = t[1];
      return {
        label: n,
        type: "function",
        apply: (s, r, o, l) => {
          const c = s.state.doc.lineAt(o).text.match(/^(\s*)/);
          const f = c ? c[1] : "";
          const u = f + "  ";
          const m = s.state.sliceDoc(l, l + 1) === "}" ? l + 1 : l;
          let p = `\\begin{${i}}`;
          let O = n.length;
          if (e) {
            p += `
${u}
${f}\\end{${i}}`;
            O += 1 + u.length;
          }
          s.dispatch({
            changes: {
              from: o,
              to: m,
              insert: p
            },
            selection: {
              anchor: o + O
            }
          });
        },
        boost: 1
      };
    }
  }
  return {
    label: n,
    type: "function",
    apply: n,
    boost: 1
  };
}
const SS = [{
  label: "\\begin{...}",
  type: "keyword",
  detail: "LaTeX environment",
  info: "Create a LaTeX environment",
  apply: (n, e, t, i) => {
    n.dispatch({
      changes: {
        from: t,
        to: i,
        insert: "\\begin{}"
      },
      selection: {
        anchor: t + 7
      }
    });
  }
}, {
  label: "\\section{...}",
  type: "keyword",
  detail: "LaTeX section",
  info: "Create a section",
  apply: "\\section{}"
}, {
  label: "\\subsection{...}",
  type: "keyword",
  detail: "LaTeX subsection",
  info: "Create a subsection",
  apply: "\\subsection{}"
}, {
  label: "\\begin{figure}",
  type: "keyword",
  detail: "LaTeX figure environment",
  info: "Create a figure environment",
  apply: (n, e, t, i) => {
    const o = n.state.doc.lineAt(t).text.match(/^(\s*)/);
    const l = o ? o[1] : "";
    const a = l + "  ";
    const h = `\\begin{figure}[htbp]
${a}\\centering
${a}\\includegraphics[width=0.8\\textwidth]{}
${a}\\caption{}
${a}\\label{fig:}
${l}\\end{figure}`;
    n.dispatch({
      changes: {
        from: t,
        to: i,
        insert: h
      },
      selection: {
        anchor: t + 1 + h.indexOf("{}")
      }
    });
  }
}, {
  label: "\\begin{table}",
  type: "keyword",
  detail: "LaTeX table environment",
  info: "Create a table environment",
  apply: (n, e, t, i) => {
    const o = n.state.doc.lineAt(t).text.match(/^(\s*)/);
    const l = o ? o[1] : "";
    const a = l + "  ";
    const h = a + "  ";
    const c = `\\begin{table}[htbp]
${a}\\centering
${a}\\begin{tabular}{ccc}
${h}header1 & header2 & header3 \\\\
${h}\\hline
${h}data1 & data2 & data3 \\\\
${a}\\end{tabular}
${a}\\caption{}
${a}\\label{tab:}
${l}\\end{table}`;
    n.dispatch({
      changes: {
        from: t,
        to: i,
        insert: c
      },
      selection: {
        anchor: t + 1 + c.indexOf("{}")
      }
    });
  }
}];
function Yo(n) {
  return function (e) {
    if (!e.explicit) {
      const i = e.matchBefore(/\\[a-zA-Z]*$|\\(begin|end)\{[a-zA-Z]*$/);
      if (!i || i.from === i.to) {
        return null;
      }
    }
    if (gS(e)) {
      const i = e.matchBefore(/\\(begin|end)\{([a-zA-Z]*)$/);
      if (i) {
        const s = hc(e);
        const r = new Set(xS);
        const l = Ad.filter(a => r.has(a.replace(/\*$/, "")) ? s : true).map(a => QS(a, n));
        return {
          from: i.from + i.text.lastIndexOf("{") + 1,
          options: l,
          validFor: /^[a-zA-Z*]*$/
        };
      }
    }
    if (bS(e)) {
      const i = e.matchBefore(/\\([a-zA-Z]*)$/);
      if (i) {
        let s = Pd.map(r => cc(r, n));
        if (hc(e)) {
          s = [...s, ...Md.map(r => cc(r, n))];
        }
        s = [...s, ...SS];
        return {
          from: i.from,
          options: s,
          validFor: /^\\?[a-zA-Z]*$/
        };
      }
    }
    const t = e.matchBefore(/\\usepackage(\[\S*\])?\{([a-zA-Z,]*)$/);
    if (t) {
      return {
        from: t.from + t.text.lastIndexOf("{") + 1,
        options: Rd.map(i => ({
          label: i,
          type: "constant",
          apply: i,
          boost: 1
        })),
        validFor: /^[a-zA-Z,]*$/
      };
    } else {
      return null;
    }
  };
}
const zl = M.define();
const kS = le.define({
  create: () => ({
    active: false,
    lastEnv: null
  }),
  update(n, e) {
    for (let t of e.effects) {
      if (t.is(zl)) {
        return {
          active: true,
          lastEnv: t.value.envName
        };
      }
    }
    return n;
  }
});
function Vd(n, e) {
  const s = n.state.doc.lineAt(e).text.match(/^(\s*)/);
  if (s) {
    return s[1];
  } else {
    return "";
  }
}
function wS(n) {
  const {
    state: e
  } = n;
  const {
    main: t
  } = e.selection;
  if (t.from !== t.to) {
    return null;
  }
  const s = e.doc.lineAt(t.from).text;
  const r = /\\begin\{([^}]+)\}[ \t]*$/.exec(s);
  if (r) {
    return {
      name: r[1],
      pos: t.from
    };
  } else {
    return null;
  }
}
const vS = n => {
  const e = wS(n);
  if (!e) {
    return false;
  }
  const t = Vd(n, e.pos);
  const i = t + "  ";
  const s = `
${i}
${t}\\end{${e.name}}`;
  n.dispatch({
    changes: {
      from: e.pos,
      insert: s
    },
    selection: {
      anchor: e.pos + i.length + 1
    },
    effects: [zl.of({
      envName: e.name,
      pos: e.pos
    })]
  });
  return true;
};
const CS = n => {
  const {
    state: e
  } = n;
  const {
    main: t
  } = e.selection;
  if (t.from !== t.to) {
    return false;
  }
  const i = e.doc.lineAt(t.from).from;
  const s = e.sliceDoc(i, t.from);
  const r = /\\begin\{([^}]*)$/.exec(s);
  if (r) {
    const o = r[1];
    const l = Vd(n, t.from);
    const a = l + "  ";
    n.dispatch({
      changes: [{
        from: t.from,
        insert: "}"
      }, {
        from: t.from,
        insert: `
${a}
${l}\\end{${o}}`
      }],
      selection: {
        anchor: t.from + a.length + 2
      },
      effects: [zl.of({
        envName: o,
        pos: t.from
      })]
    });
    return true;
  }
  return false;
};
const qS = [kS, Yt.of([{
  key: "Enter",
  run: vS
}, {
  key: "}",
  run: CS
}]), Y.transactionFilter.of(n => {
  if (!n.isUserEvent("input")) {
    return n;
  }
  const e = n.startState;
  const t = n.changes;
  let i = [];
  let s = n.selection;
  let r = false;
  t.iterChanges((o, l, a, h, c) => {
    const f = c.sliceString(0);
    const u = /\\begin\{([^}]+)\}$/.exec(f);
    if (u && n.isUserEvent("input.complete")) {
      const d = u[1];
      const m = e.sliceDoc();
      if (!new RegExp(`\\\\end\\{${d}\\}`).test(m)) {
        const x = e.doc.lineAt(o).text.match(/^(\s*)/);
        const Q = x ? x[1] : "";
        const C = Q + "  ";
        i.push({
          from: h,
          insert: `
${C}
${Q}\\end{${d}}`
        });
        s = y.single(h + C.length + 1);
        r = true;
      }
    }
  });
  if (r) {
    return [n, {
      changes: i,
      selection: s,
      userEvent: "input.auto-close"
    }];
  } else {
    return n;
  }
})];
const TS = {
  checkMissingDocumentEnv: true,
  checkUnmatchedEnvironments: true,
  checkMissingReferences: true,
  checkUnclosedBraces: true,
  checkDuplicateLabels: true,
  checkCitesWithoutBibliography: true,
  fileName: ""
};
const $S = 500;
function XS(n = {}) {
  const e = {
    ...TS,
    ...n
  };
  return t => {
    const s = [];
    const r = t.state.doc;
    const o = kg(t.state, r.length, $S) ?? oe(t.state);
    const l = o.length >= r.length;
    if (e.checkMissingDocumentEnv && l && !WS(e.fileName, r)) {
      ES(o, r, s);
    }
    if (e.checkUnmatchedEnvironments && l) {
      AS(o, r, s);
    }
    if (e.checkMissingReferences || e.checkDuplicateLabels || e.checkCitesWithoutBibliography) {
      RS(o, r, s, {
        missingRefs: e.checkMissingReferences && l,
        duplicateLabels: e.checkDuplicateLabels,
        citesWithoutBib: e.checkCitesWithoutBibliography && l
      });
    }
    if (e.checkUnclosedBraces) {
      VS(t.state, s);
    }
    return s;
  };
}
function ES(n, e, t) {
  let i = false;
  n.cursor().iterate(s => {
    if (i) {
      return false;
    }
    if (s.name === "DocumentEnvironment" || s.name === "DocumentEnvName") {
      i = true;
      return false;
    }
    if (s.name === "BeginEnv") {
      const r = e.sliceString(s.from, Math.min(s.to, s.from + 30));
      if (/^\\begin\s*\{document\}/.test(r)) {
        i = true;
        return false;
      }
    }
  });
  if (!i && e.length > 100) {
    t.push({
      from: 0,
      to: Math.min(e.length, 200),
      severity: "warning",
      message: "Missing document environment. LaTeX documents should be enclosed in \\begin{document}...\\end{document}",
      source: "LaTeX"
    });
  }
}
function AS(n, e, t) {
  const i = [];
  const s = new Set();
  const r = [];
  n.cursor().iterate(a => {
    if (a.name === "BeginEnv" || a.name === "EndEnv") {
      const h = DS(a.node);
      if (!h) {
        return;
      }
      i.push({
        name: e.sliceString(h.from, h.to),
        from: a.from,
        to: a.to,
        kind: a.name === "BeginEnv" ? "begin" : "end"
      });
    } else if (a.name === "VerbatimEnvironment" || a.name === "VerbCtrlSeq") {
      r.push([a.from, a.to]);
    }
  });
  const o = [];
  const l = new Set();
  for (const a of i) {
    if (a.kind === "begin") {
      o.push(a);
      l.add(a.name);
      continue;
    }
    const h = o[o.length - 1];
    if (h && h.name === a.name) {
      o.pop();
      if (!o.some(c => c.name === h.name)) {
        l.delete(h.name);
      }
    } else if (l.has(a.name)) {
      t.push({
        from: a.from,
        to: a.to,
        severity: "error",
        message: h ? `Mismatched \\end{${a.name}} (expected \\end{${h.name}})` : `\\end{${a.name}} without matching \\begin`,
        source: "LaTeX"
      });
      s.add(a.from);
    } else {
      t.push({
        from: a.from,
        to: a.to,
        severity: "error",
        message: `\\end{${a.name}} without matching \\begin{${a.name}}`,
        source: "LaTeX"
      });
      s.add(a.from);
    }
  }
  for (const a of o) {
    t.push({
      from: a.from,
      to: a.to,
      severity: "error",
      message: `Missing \\end{${a.name}}`,
      source: "LaTeX"
    });
  }
  PS(e, t, s, r);
}
function PS(n, e, t, i) {
  const l = MS(n.toString(), i);
  const a = /\\begin\s*\{([^}]+)\}/g;
  const h = /\\end\s*\{([^}]+)\}/g;
  const c = new Map();
  const f = [];
  let u;
  while (u = a.exec(l)) {
    const m = u[1].trim();
    c.set(m, (c.get(m) ?? 0) + 1);
  }
  while (u = h.exec(l)) {
    f.push({
      name: u[1].trim(),
      from: u.index,
      to: u.index + u[0].length
    });
  }
  const d = new Map();
  for (const m of f) {
    if (t.has(m.from)) {
      continue;
    }
    const p = (d.get(m.name) ?? 0) + 1;
    d.set(m.name, p);
    if (p > (c.get(m.name) ?? 0)) {
      e.push({
        from: m.from,
        to: m.to,
        severity: "error",
        message: `\\end{${m.name}} without matching \\begin{${m.name}}`,
        source: "LaTeX"
      });
    }
  }
}
function MS(n, e) {
  let t = "";
  let i = 0;
  let s = 0;
  while (s < n.length) {
    const o = n.charCodeAt(s);
    if (o === 92 && s + 1 < n.length) {
      s += 2;
      continue;
    }
    if (o === 37) {
      t += n.slice(i, s);
      const l = n.indexOf(`
`, s);
      const a = l === -1 ? n.length : l;
      t += " ".repeat(a - s);
      i = a;
      s = a;
      continue;
    }
    s++;
  }
  t += n.slice(i);
  if (e.length === 0) {
    return t;
  }
  let r = t;
  for (const [o, l] of e) {
    const a = Math.max(0, o);
    const h = Math.min(r.length, l);
    if (a >= h) {
      continue;
    }
    const c = r.slice(a, h).replace(/[^\n]/g, " ");
    r = r.slice(0, a) + c + r.slice(h);
  }
  return r;
}
function RS(n, e, t, i) {
  const s = new Map();
  const r = [];
  const o = [];
  let l = false;
  let a = false;
  n.cursor().iterate(h => {
    if (h.name === "LabelCtrlSeq") {
      const m = fc(h.node, e);
      if (m !== null) {
        if (!s.has(m)) {
          s.set(m, []);
        }
        s.get(m).push(h.from);
      }
    } else if (h.name === "RefCtrlSeq" || h.name === "RefStarrableCtrlSeq") {
      const m = fc(h.node, e);
      if (m !== null) {
        r.push({
          name: m,
          from: h.from,
          to: h.node.nextSibling?.to ?? h.to
        });
      }
    } else if (h.name === "CiteCtrlSeq" || h.name === "CiteStarrableCtrlSeq") {
      o.push({
        from: h.from,
        to: h.node.nextSibling?.to ?? h.to
      });
    } else if (h.name === "BibliographyCtrlSeq" || h.name === "BiblatexCtrlSeq") {
      l = true;
    } else if (h.name === "IncludeCtrlSeq" || h.name === "InputCtrlSeq" || h.name === "IncludeOnlyCtrlSeq") {
      a = true;
    } else if (h.name === "BeginEnv") {
      const m = e.sliceString(h.from, h.to);
      if (/\\begin\{thebibliography\}/.test(m)) {
        l = true;
      }
    }
  });
  if (i.missingRefs) {
    for (const h of r) {
      if (!s.has(h.name)) {
        t.push({
          from: h.from,
          to: h.to,
          severity: a ? "info" : "warning",
          message: a ? `Label '${h.name}' not defined in this file` : `Reference to undefined label: ${h.name}`,
          source: "LaTeX"
        });
      }
    }
  }
  if (i.duplicateLabels) {
    for (const [h, c] of s) {
      if (c.length > 1) {
        for (let f = 1; f < c.length; f++) {
          t.push({
            from: c[f],
            to: c[f] + `\\label{${h}}`.length,
            severity: "error",
            message: `Duplicate label: ${h}`,
            source: "LaTeX"
          });
        }
      }
    }
  }
  if (i.citesWithoutBib && o.length > 0 && !l && !a) {
    for (const h of o) {
      t.push({
        from: h.from,
        to: h.to,
        severity: "warning",
        message: "\\cite used but no \\bibliography or thebibliography environment found",
        source: "LaTeX"
      });
    }
  }
}
function VS(n, e) {
  const s = n.doc.toString();
  const r = oe(n);
  const o = [];
  r.cursor().iterate(f => {
    if (f.name === "VerbatimEnvironment" || f.name === "VerbCtrlSeq") {
      o.push([f.from, f.to]);
    }
  });
  const l = f => o.some(([u, d]) => f >= u && f < d);
  const a = [];
  let h = null;
  let c = 0;
  while (c < s.length) {
    const f = s[c];
    if (f === "\\" && c + 1 < s.length) {
      const u = s[c + 1];
      if (u === "\\" || !/[a-zA-Z]/.test(u)) {
        c += 2;
        continue;
      }
      const d = c;
      for (c++; c < s.length && /[a-zA-Z]/.test(s[c]);) {
        c++;
      }
      if (!l(d)) {
        h = {
          start: d,
          name: s.slice(d, c)
        };
      }
      continue;
    }
    if (f === "%" && (c === 0 || s[c - 1] !== "\\")) {
      while (c < s.length && s[c] !== `
`) {
        c++;
      }
      continue;
    }
    if (l(c)) {
      c++;
      continue;
    }
    if (f === "{") {
      a.push({
        pos: c,
        commandStart: (h == null ? undefined : h.start) ?? c,
        commandName: (h == null ? undefined : h.name) ?? ""
      });
      h = null;
    } else if (f === "}") {
      a.pop();
      h = null;
    } else if (f === `
` && c + 1 < s.length && s[c + 1] === `
`) {
      while (a.length > 0) {
        const u = a.pop();
        const d = u.commandName ? `\\${u.commandName}` : "group";
        e.push({
          from: u.commandStart,
          to: u.pos + 1,
          severity: "error",
          message: `Unclosed ${d} — '{' opened here is not closed before paragraph break`,
          source: "LaTeX"
        });
      }
    } else if (!/\s/.test(f)) {
      h = null;
    }
    c++;
  }
  while (a.length > 0) {
    const f = a.pop();
    const u = f.commandName ? `\\${f.commandName}` : "group";
    e.push({
      from: f.commandStart,
      to: f.pos + 1,
      severity: "error",
      message: `Unclosed ${u} — '{' opened here is never closed`,
      source: "LaTeX"
    });
  }
}
function WS(n, e) {
  if (/\.(sty|cls|dtx|ltx|def)$/i.test(n)) {
    return true;
  }
  if (!n) {
    const t = e.sliceString(0, Math.min(e.length, 4000));
    return /\\Provides(Package|Class|File|Explicit(Package|Class))\b/.test(t);
  }
  return false;
}
function DS(n) {
  for (let e = n.firstChild; e; e = e.nextSibling) {
    if (e.name === "EnvNameGroup") {
      for (let t = e.firstChild; t; t = t.nextSibling) {
        if (t.name.endsWith("EnvName")) {
          return t;
        }
      }
    }
  }
  return null;
}
function fc(n, e) {
  let t = n.nextSibling;
  while (t) {
    const i = t.name;
    if (i === "OptionalArgument" || i.startsWith("Optional")) {
      t = t.nextSibling;
      continue;
    }
    if (i.endsWith("Argument") || i === "Group" || i === "TextArgument") {
      return e.sliceString(t.from, t.to).replace(/^\{|\}$/g, "");
    }
    break;
  }
  return null;
}
const LS = {
  "\\documentclass": {
    description: "Defines the type of document to be created.",
    syntax: "\\documentclass[options]{class}",
    example: "\\documentclass[12pt,a4paper]{article}"
  },
  "\\usepackage": {
    description: "Loads a LaTeX package.",
    syntax: "\\usepackage[options]{package}",
    example: "\\usepackage{graphicx}"
  },
  "\\begin": {
    description: "Begins an environment.",
    syntax: "\\begin{environment}",
    example: "\\begin{document}"
  },
  "\\end": {
    description: "Ends an environment.",
    syntax: "\\end{environment}",
    example: "\\end{document}"
  },
  "\\section": {
    description: "Creates a section heading.",
    syntax: "\\section[short title]{title}",
    example: "\\section{Introduction}"
  },
  "\\subsection": {
    description: "Creates a subsection heading.",
    syntax: "\\subsection[short title]{title}",
    example: "\\subsection{Method}"
  },
  "\\subsubsection": {
    description: "Creates a subsubsection heading.",
    syntax: "\\subsubsection[short title]{title}",
    example: "\\subsubsection{Implementation details}"
  },
  "\\textbf": {
    description: "Sets text in bold font.",
    syntax: "\\textbf{text}",
    example: "\\textbf{Important note}"
  },
  "\\textit": {
    description: "Sets text in italic font.",
    syntax: "\\textit{text}",
    example: "\\textit{Emphasized term}"
  },
  "\\emph": {
    description: "Emphasizes text. Typically renders as italic.",
    syntax: "\\emph{text}",
    example: "\\emph{Important}"
  },
  "\\cite": {
    description: "Creates a citation.",
    syntax: "\\cite[text]{key}",
    example: "\\cite{smith2020}"
  },
  "\\ref": {
    description: "Creates a reference to a labeled element.",
    syntax: "\\ref{label}",
    example: "\\ref{fig:sample}"
  },
  "\\label": {
    description: "Assigns a label to an element for referencing.",
    syntax: "\\label{name}",
    example: "\\label{sec:introduction}"
  },
  "\\includegraphics": {
    description: "Includes a graphics file.",
    syntax: "\\includegraphics[options]{filename}",
    example: "\\includegraphics[width=0.8\\textwidth]{figure.png}",
    package: "graphicx"
  },
  "\\frac": {
    description: "Creates a fraction.",
    syntax: "\\frac{numerator}{denominator}",
    example: "\\frac{a}{b}",
    package: "amsmath (optional)"
  },
  "\\item": {
    description: "Defines an item in a list environment.",
    syntax: "\\item[optional label] content",
    example: "\\item First item in list"
  },
  "\\maketitle": {
    description: "Generates a title based on \\title, \\author, and \\date commands.",
    syntax: "\\maketitle",
    example: "\\maketitle"
  },
  "\\title": {
    description: "Specifies the document title.",
    syntax: "\\title{title}",
    example: "\\title{My Document}"
  },
  "\\author": {
    description: "Specifies the document author(s).",
    syntax: "\\author{name}",
    example: "\\author{John Smith}"
  },
  "\\date": {
    description: "Specifies the document date.",
    syntax: "\\date{date}",
    example: "\\date{\\today}"
  },
  "\\caption": {
    description: "Adds a caption to a figure or table.",
    syntax: "\\caption{text}",
    example: "\\caption{A sample figure}"
  },
  "\\hline": {
    description: "Draws a horizontal line in a table.",
    syntax: "\\hline",
    example: "\\hline"
  },
  "\\newcommand": {
    description: "Defines a new command.",
    syntax: "\\newcommand{\\name}[args][default]{definition}",
    example: "\\newcommand{\\mycommand}[1]{Hello #1!}"
  }
};
const uc = {
  document: {
    description: "The main document environment. All visible content must be inside this environment.",
    syntax: "\\begin{document}...\\end{document}",
    example: `\\begin{document}
Hello, world!
\\end{document}`
  },
  figure: {
    description: "Environment for floating figures.",
    syntax: "\\begin{figure}[placement]...\\end{figure}",
    example: `\\begin{figure}[ht]
\\centering
\\includegraphics{image.png}
\\caption{A figure}
\\label{fig:example}
\\end{figure}`
  },
  table: {
    description: "Environment for floating tables.",
    syntax: "\\begin{table}[placement]...\\end{table}",
    example: `\\begin{table}[ht]
\\centering
\\begin{tabular}{cc}
...
\\end{tabular}
\\caption{A table}
\\label{tab:example}
\\end{table}`
  },
  tabular: {
    description: "Environment for creating tables.",
    syntax: "\\begin{tabular}{columns}...\\end{tabular}",
    example: `\\begin{tabular}{|l|c|r|}
\\hline
Left & Center & Right \\\\
\\hline
\\end{tabular}`
  },
  itemize: {
    description: "Environment for bulleted lists.",
    syntax: "\\begin{itemize}...\\end{itemize}",
    example: `\\begin{itemize}
\\item First item
\\item Second item
\\end{itemize}`
  },
  enumerate: {
    description: "Environment for numbered lists.",
    syntax: "\\begin{enumerate}...\\end{enumerate}",
    example: `\\begin{enumerate}
\\item First item
\\item Second item
\\end{enumerate}`
  },
  equation: {
    description: "Environment for numbered equations.",
    syntax: "\\begin{equation}...\\end{equation}",
    example: `\\begin{equation}
E = mc^2
\\end{equation}`
  },
  "equation*": {
    description: "Environment for unnumbered equations.",
    syntax: "\\begin{equation*}...\\end{equation*}",
    example: `\\begin{equation*}
E = mc^2
\\end{equation*}`
  },
  align: {
    description: "Environment for aligning multiple equations, with equation numbers.",
    syntax: "\\begin{align}...\\end{align}",
    example: `\\begin{align}
a &= b \\\\
c &= d
\\end{align}`,
    package: "amsmath"
  },
  "align*": {
    description: "Environment for aligning multiple equations, without equation numbers.",
    syntax: "\\begin{align*}...\\end{align*}",
    example: `\\begin{align*}
a &= b \\\\
c &= d
\\end{align*}`,
    package: "amsmath"
  },
  verbatim: {
    description: "Environment for verbatim text, where LaTeX commands are not processed.",
    syntax: "\\begin{verbatim}...\\end{verbatim}",
    example: `\\begin{verbatim}
This is verbatim text.
\\end{verbatim}`
  },
  center: {
    description: "Environment for centering text.",
    syntax: "\\begin{center}...\\end{center}",
    example: `\\begin{center}
Centered text
\\end{center}`
  },
  tikzpicture: {
    description: "Environment for creating TikZ pictures.",
    syntax: "\\begin{tikzpicture}...\\end{tikzpicture}",
    example: `\\begin{tikzpicture}
\\draw (0,0) -- (1,1);
\\end{tikzpicture}`,
    package: "tikz"
  }
};
const NS = al((n, e, t) => {
  const s = oe(n.state).resolve(e);
  if (s.name === "CtrlSeq" || s.name.endsWith("CtrlSeq") || s.name === "Begin" || s.name === "End") {
    const o = n.state.sliceDoc(s.from, s.to);
    const l = LS[o];
    if (l) {
      return Br(l, s.from, s.to);
    }
  }
  if (s.name === "EnvName" || s.name.endsWith("EnvName")) {
    const o = n.state.sliceDoc(s.from, s.to);
    const l = uc[o];
    if (l) {
      return Br(l, s.from, s.to);
    }
  }
  const r = s.parent;
  if (r && r.name === "EnvNameGroup") {
    const o = BS(r);
    if (o) {
      const l = n.state.sliceDoc(o.from, o.to);
      const a = uc[l];
      if (a) {
        return Br(a, o.from, o.to);
      }
    }
  }
  return null;
});
function BS(n) {
  if (!n) {
    return null;
  }
  for (let e = n.firstChild; e; e = e.nextSibling) {
    if (e.name === "EnvName" || e.name === "DocumentEnvName" || e.name === "TabularEnvName" || e.name === "EquationEnvName" || e.name === "EquationArrayEnvName" || e.name === "VerbatimEnvName" || e.name === "TikzPictureEnvName" || e.name === "FigureEnvName" || e.name === "ListEnvName" || e.name === "TableEnvName") {
      return e;
    }
  }
  return null;
}
function Br(n, e, t) {
  let i = document.createElement("div");
  i.className = "cm-latex-tooltip";
  let s = document.createElement("div");
  s.textContent = n.description;
  s.className = "cm-latex-tooltip-description";
  i.appendChild(s);
  let r = document.createElement("div");
  r.textContent = "Syntax: " + n.syntax;
  r.className = "cm-latex-tooltip-syntax";
  i.appendChild(r);
  if (n.example) {
    let o = document.createElement("div");
    o.textContent = "Example: " + n.example;
    o.className = "cm-latex-tooltip-example";
    i.appendChild(o);
  }
  if (n.package) {
    let o = document.createElement("div");
    o.textContent = "Package: " + n.package;
    o.className = "cm-latex-tooltip-package";
    i.appendChild(o);
  }
  return {
    pos: e,
    end: t,
    above: true,
    create(o) {
      return {
        dom: i
      };
    }
  };
}
const YS = bu({
  brackets: "()[]{}"
});
function GS(n, e, t) {
  const i = oe(n);
  const s = n.doc;
  const r = s.lineAt(e);
  if (!/^\s*\\documentclass\b/.test(r.text) || r.from !== e) {
    return null;
  }
  let o = -1;
  i.cursor().iterate(h => {
    if (o !== -1) {
      return false;
    }
    if (h.name === "DocumentEnvironment" || h.name === "BeginEnv") {
      const c = s.sliceString(h.from, Math.min(h.to, h.from + 30));
      if (/^\\begin\s*\{document\}/.test(c)) {
        o = h.from;
        return false;
      }
    }
  });
  if (o === -1) {
    return null;
  }
  const a = s.lineAt(o).from - 1;
  if (a <= r.to) {
    return null;
  } else {
    return {
      from: r.to,
      to: a
    };
  }
}
function IS(n, e, t) {
  const i = n.doc;
  const s = i.lineAt(e);
  if (s.text.startsWith("% {")) {
    for (let r = s.number + 1; r <= i.lines; r++) {
      const o = i.line(r);
      if (o.text.trim() === "% }") {
        return {
          from: s.to,
          to: o.to - 1
        };
      }
    }
  }
  return null;
}
const Yr = {
  Book: 0,
  Part: 1,
  Chapter: 2,
  Section: 3,
  SubSection: 4,
  SubSubSection: 5,
  Paragraph: 6,
  SubParagraph: 7
};
function ZS(n, e, t) {
  const i = oe(n);
  const s = n.doc;
  let r = i.resolveInner(e, 1);
  while (r && !(r.name in Yr)) {
    r = r.parent;
  }
  if (!r) {
    return null;
  }
  const o = s.lineAt(r.from);
  if (o.from !== e) {
    return null;
  }
  const l = Yr[r.name];
  let a = r.to;
  let h = false;
  let c = r;
  while (c && !h) {
    let f = c.nextSibling;
    while (f) {
      const u = Yr[f.name];
      if (u !== undefined && u <= l) {
        a = s.lineAt(f.from).from - 1;
        h = true;
        break;
      }
      a = f.to;
      f = f.nextSibling;
    }
    if (!h) {
      c = c.parent;
    }
  }
  if (a <= o.to) {
    return null;
  } else {
    return {
      from: o.to,
      to: Math.min(a, s.length)
    };
  }
}
const dc = ks.define({
  parser: OS.configure({
    props: [nu.add({
      Environment: n => n.baseIndent + n.unit,
      KnownEnvironment: n => n.baseIndent + n.unit,
      Group: n => n.baseIndent + n.unit,
      BeginEnv: n => n.baseIndent + n.unit,
      "Content TextArgument LongArg": n => n.baseIndent + n.unit
    }), ru.add({
      Environment: ce,
      KnownEnvironment: ce,
      Group: ce,
      DocumentEnvironment: ce,
      TabularEnvironment: ce,
      EquationEnvironment: ce,
      EquationArrayEnvironment: ce,
      VerbatimEnvironment: ce,
      TikzPictureEnvironment: ce,
      FigureEnvironment: ce,
      ListEnvironment: ce,
      TableEnvironment: ce,
      Book: ce,
      Part: ce,
      Chapter: ce,
      Section: ce,
      SubSection: ce,
      SubSubSection: ce,
      Paragraph: ce,
      SubParagraph: ce
    }), Jf({
      CtrlSeq: g.keyword,
      CtrlSym: g.operator,
      Csname: g.keyword,
      Dollar: g.processingInstruction,
      MathSpecialChar: g.operator,
      MathChar: g.variableName,
      MathOpening: g.bracket,
      MathClosing: g.bracket,
      EnvName: g.className,
      DocumentEnvName: g.className,
      TabularEnvName: g.className,
      EquationEnvName: g.className,
      EquationArrayEnvName: g.className,
      VerbatimEnvName: g.className,
      TikzPictureEnvName: g.className,
      FigureEnvName: g.className,
      ListEnvName: g.className,
      TableEnvName: g.className,
      BookCtrlSeq: g.heading,
      PartCtrlSeq: g.heading,
      ChapterCtrlSeq: g.heading,
      SectionCtrlSeq: g.heading,
      SubSectionCtrlSeq: g.heading,
      SubSubSectionCtrlSeq: g.heading,
      ParagraphCtrlSeq: g.heading,
      SubParagraphCtrlSeq: g.heading,
      Comment: g.comment,
      VerbContent: g.meta,
      VerbatimContent: g.meta,
      LstInlineContent: g.meta,
      LiteralArgContent: g.string,
      SpaceDelimitedLiteralArgContent: g.string,
      OpenBrace: g.bracket,
      CloseBrace: g.bracket,
      OpenBracket: g.bracket,
      CloseBracket: g.bracket,
      Begin: g.keyword,
      End: g.keyword,
      TextBoldCtrlSeq: g.strong,
      TextItalicCtrlSeq: g.emphasis,
      TextSmallCapsCtrlSeq: g.className,
      TextTeletypeCtrlSeq: g.monospace,
      EmphasisCtrlSeq: g.emphasis,
      UnderlineCtrlSeq: g.emphasis,
      TitleCtrlSeq: g.heading,
      AuthorCtrlSeq: g.heading,
      DateCtrlSeq: g.heading,
      Number: g.number,
      Normal: g.content,
      Ampersand: g.operator,
      Tilde: g.operator,
      TrailingContent: g.invalid,
      DocumentClassCtrlSeq: g.definitionKeyword,
      UsePackageCtrlSeq: g.keyword,
      LabelCtrlSeq: g.labelName,
      RefCtrlSeq: g.labelName,
      RefStarrableCtrlSeq: g.labelName,
      CiteCtrlSeq: g.quote,
      CiteStarrableCtrlSeq: g.quote,
      BibliographyCtrlSeq: g.heading,
      BibliographyStyleCtrlSeq: g.heading
    })]
  }),
  languageData: {
    commentTokens: {
      line: "%"
    },
    closeBrackets: {
      brackets: ["(", "[", "{", "'", "\""]
    },
    wordChars: "$\\-_"
  }
});
const Ns = {
  environments: Ad,
  commands: Pd,
  mathCommands: Md,
  packages: Rd
};
function zS(n = {}) {
  const a = {
    ...n,
    autoCloseTags: n.autoCloseTags ?? true,
    enableLinting: n.enableLinting ?? true,
    enableTooltips: n.enableTooltips ?? true,
    enableAutocomplete: n.enableAutocomplete ?? true,
    autoCloseBrackets: n.autoCloseBrackets ?? true,
    fileName: n.fileName ?? "",
    linter: n.linter ?? {}
  };
  const h = [];
  h.push(dc.data.of({
    autocomplete: Yo(a.autoCloseTags)
  }));
  h.push(rs.of(GS));
  h.push(rs.of(IS));
  h.push(rs.of(ZS));
  if (a.enableAutocomplete) {
    h.push(Vl({
      override: [Yo(a.autoCloseTags)],
      defaultKeymap: true,
      activateOnTyping: true,
      icons: true
    }));
    h.push(Yt.of(Wl));
  }
  h.push(YS);
  if (a.autoCloseBrackets) {
    h.push(cd());
  }
  if (a.autoCloseTags) {
    h.push(...qS);
  }
  if (a.enableLinting) {
    h.push(Do(XS({
      ...a.linter,
      fileName: a.fileName
    })));
  }
  if (a.enableTooltips) {
    h.push(NS);
  }
  return new Cg(dc, h);
}
const jS = [{
  label: "\\section",
  detail: "Section",
  template: "\\section\\{${1:title}\\}\n${2}",
  info: "Insert a section heading."
}, {
  label: "\\begin{equation}",
  detail: "Numbered equation",
  template: `\\begin\\{equation\\}
  \${1:equation}
  \\label\\{eq:\${2:key}\\}
\\end\\{equation\\}
\${3}`,
  info: "Insert a numbered equation with a label."
}, {
  label: "\\begin{align}",
  detail: "Aligned equations",
  template: "\\begin\\{align\\}\n  ${1:left} &= ${2:right} \\\\\n  ${3} &= ${4}\n\\end\\{align\\}\n${5}",
  info: "Insert a multi-line aligned equation."
}, {
  label: "\\begin{matrix}",
  detail: "Matrix",
  template: "\\begin\\{${1:pmatrix}\\}\n  ${2:a} & ${3:b} \\\\\n  ${4:c} & ${5:d}\n\\end\\{${1:pmatrix}\\}",
  info: "Insert a 2 by 2 matrix."
}, {
  label: "\\begin{figure}",
  detail: "Figure",
  template: "\\begin\\{figure\\}[${1:htbp}]\n  \\centering\n  \\includegraphics[width=${2:0.8}\\textwidth]\\{${3:image}\\}\n  \\caption\\{${4:caption}\\}\n  \\label\\{fig:${5:key}\\}\n\\end\\{figure\\}\n${6}",
  info: "Insert a figure with an image, caption, and label."
}, {
  label: "\\begin{table}",
  detail: "Table",
  template: `\\begin\\{table\\}[\${1:htbp}]
  \\centering
  \\begin\\{tabular\\}\\{\${2:cc}\\}
    \${3:Heading} & \${4:Heading} \\\\
    \\hline
    \${5:Value} & \${6:Value} \\\\
  \\end\\{tabular\\}
  \\caption\\{\${7:caption}\\}
  \\label\\{tab:\${8:key}\\}
\\end\\{table\\}
\${9}`,
  info: "Insert a floating table with a caption and label."
}, {
  label: "\\begin{theorem}",
  detail: "Theorem",
  template: "\\begin\\{theorem\\}[${1:title}]\n  ${2:statement}\n  \\label\\{thm:${3:key}\\}\n\\end\\{theorem\\}\n${4}",
  info: "Insert a theorem with an optional title and label."
}, {
  label: "\\begin{proof}",
  detail: "Proof",
  template: `\\begin\\{proof\\}
  \${1:argument}
\\end\\{proof\\}
\${2}`,
  info: "Insert a proof environment."
}];
const _S = jS.map(n => My(n.template, {
  label: n.label,
  detail: n.detail,
  info: n.info,
  type: "keyword",
  boost: 20
}));
const FS = /\\(?:auto|page|eq|name|v|V|c|C)?ref\*?\s*\{([^{}]*)$/;
const US = /\\(?:text|paren|foot|smart|super)?cite\w*\*?(?:\s*\[[^\]]*]){0,2}\s*\{([^{}]*)$/;
const HS = /\\usepackage(?:\s*\[[^\]]*])?\s*\{([^{}]*)$/;
const KS = /\\(input|include|subfile|includegraphics|includesvg|bibliography|addbibresource)\*?(?:\s*\[[^\]]*])?\s*\{([^{}]*)$/;
const jl = n => {
  const e = new Set();
  return n.filter(t => {
    const i = t.label;
    if (e.has(i)) {
      return false;
    } else {
      e.add(i);
      return true;
    }
  });
};
const Un = (n, e) => {
  const t = e.split(",").at(-1) ?? "";
  const i = t.length - t.trimStart().length;
  return {
    from: n.pos - t.length + i,
    validFor: /^[^,{}]*$/
  };
};
const JS = n => {
  const e = [];
  for (const t of wt(n).matchAll(/\\(begin|end)\s*\{([^{}]+)}/g)) {
    const i = t[2].trim();
    if (t[1] === "begin") {
      e.push(i);
      continue;
    }
    const s = e.lastIndexOf(i);
    if (s !== -1) {
      e.splice(s);
    }
  }
  return e;
};
const ek = (n, e) => {
  const t = n.labels.map(s => ({
    label: s.key,
    detail: s.filePath ? `${s.filePath}${s.line ? `:${s.line}` : ""}` : "Project label",
    info: s.title,
    type: "variable"
  }));
  const i = e.labels.map(s => ({
    label: s.key,
    detail: "Current file",
    info: s.title,
    type: "variable",
    boost: 10
  }));
  return jl([...i, ...t]);
};
const tk = (n, e) => {
  const t = n.citations.map(s => ({
    label: s.key,
    detail: [s.author, s.filePath].filter(Boolean).join(" · ") || "Bibliography entry",
    info: s.title,
    type: "constant"
  }));
  const i = e.citations.map(s => ({
    label: s.key,
    detail: s.author ? `${s.author} · Current file` : "Current file",
    info: s.title,
    type: "constant",
    boost: 10
  }));
  return jl([...i, ...t]);
};
const ik = (n, e) => ["bibliography", "include", "input", "subfile"].includes(e) ? n.replace(/\.(?:bib|tex)$/i, "") : n;
const nk = (n, e) => ["include", "input", "subfile"].includes(e) ? /\.tex$/i.test(n) : ["addbibresource", "bibliography"].includes(e) ? /\.bib$/i.test(n) : e === "includegraphics" ? /\.(?:jpe?g|pdf|png|svg|webp)$/i.test(n) : e === "includesvg" ? /\.svg$/i.test(n) : true;
const sk = (n, e, t, i) => {
  const s = t.match(FS);
  if (s) {
    return {
      ...Un(n, s[1]),
      options: ek(e, i())
    };
  }
  const r = t.match(US);
  if (r) {
    return {
      ...Un(n, r[1]),
      options: tk(e, i())
    };
  }
  const o = t.match(HS);
  if (o) {
    const a = new Set(i().packages);
    const h = new Set([...Ns.packages, ...e.packages, ...a]);
    return {
      ...Un(n, o[1]),
      options: [...h].sort().map(c => ({
        label: c,
        detail: a.has(c) ? "Used in current file" : e.packages.includes(c) ? "Used in this project" : "LaTeX package",
        type: "namespace"
      }))
    };
  }
  const l = t.match(KS);
  if (l) {
    const a = l[1];
    return {
      ...Un(n, l[2]),
      options: e.files.filter(h => nk(h.path, a)).map(h => ({
        label: ik(h.path, a),
        detail: h.path,
        type: "text"
      }))
    };
  }
  return null;
};
const rk = (n, e, t) => {
  const i = n.matchBefore(/\\(begin|end)\{[A-Za-z*@+\d-]*$/);
  if (!i) {
    return null;
  }
  const s = i.text.startsWith("\\end");
  const r = JS(n.state.sliceDoc(0, i.from));
  const o = new Set(t().environments);
  const a = [...new Set([...Ns.environments, ...e.environments, ...o])].map(h => ({
    label: h,
    detail: o.has(h) ? "Current file environment" : e.environments.includes(h) ? "Project environment" : "LaTeX environment",
    type: "type",
    boost: s && r.includes(h) ? 50 + r.lastIndexOf(h) : 0
  }));
  return {
    from: i.from + i.text.lastIndexOf("{") + 1,
    options: a,
    validFor: /^[A-Za-z*@+\d-]*$/
  };
};
const ok = (n, e, t) => {
  const i = n.matchBefore(/\\[A-Za-z@]*$/);
  if (!i || !n.explicit && i.text.length < 2) {
    return null;
  }
  const r = [...[...new Set(t().commands)].map(o => ({
    label: o,
    detail: "Current file command",
    type: "function",
    boost: 30
  })), ...e.commands.map(o => ({
    label: o,
    detail: "Project command",
    type: "function",
    boost: 20
  })), ...Ns.commands.map(o => ({
    label: o,
    detail: "LaTeX command",
    type: "function"
  })), ...Ns.mathCommands.map(o => ({
    label: o,
    detail: "Math command",
    type: "function"
  })), ..._S];
  return {
    from: i.from,
    options: jl(r),
    validFor: /^\\[A-Za-z@]*$/
  };
};
const lk = (n, e) => t => {
  const i = t.state.doc.lineAt(t.pos);
  const s = t.state.sliceDoc(i.from, t.pos);
  let r;
  const o = () => {
    r ??= e(t.state.doc, t.state.doc.toString());
    return r;
  };
  return sk(t, n, s, o) ?? rk(t, n, o) ?? ok(t, n, o);
};
const Gr = (n, e, t) => {
  const i = e.trim();
  if (i && !n.has(i)) {
    n.set(i, t);
  }
};
const Wd = (n, e) => {
  var c;
  var f;
  var u;
  var d;
  const t = new Map();
  const i = new Map();
  const s = new Set();
  const r = new Set();
  const o = new Set();
  const l = wt(n);
  const a = [...l.matchAll(/\\label\s*\{([^{}]+)}/g)];
  const h = W1(n, a.map(m => m.index));
  a.forEach((m, p) => {
    const O = m[1].trim();
    Gr(t, O, {
      key: O,
      filePath: e,
      line: h[p]
    });
  });
  for (const m of l.matchAll(/\\bibitem(?:\[[^\]]*])?\s*\{([^{}]+)}/g)) {
    const p = m[1].trim();
    Gr(i, p, {
      key: p,
      filePath: e
    });
  }
  for (const m of l.matchAll(/@[A-Za-z]+\s*\{\s*([^,\s]+)\s*,([\s\S]*?)(?=\n\s*@|$)/g)) {
    const p = m[1].trim();
    const O = (f = (c = m[2].match(/\btitle\s*=\s*(?:\{([^{}]*)}|"([^"]*)")/i)) == null ? undefined : c.slice(1).find(Boolean)) == null ? undefined : f.trim();
    const b = (d = (u = m[2].match(/\bauthor\s*=\s*(?:\{([^{}]*)}|"([^"]*)")/i)) == null ? undefined : u.slice(1).find(Boolean)) == null ? undefined : d.trim();
    Gr(i, p, {
      key: p,
      filePath: e,
      title: O,
      author: b
    });
  }
  for (const m of l.matchAll(/\\usepackage(?:\s*\[[^\]]*])?\s*\{([^{}]+)}/g)) {
    m[1].split(",").map(p => p.trim()).filter(Boolean).forEach(p => s.add(p));
  }
  for (const m of l.matchAll(/\\(?:newcommand|renewcommand|providecommand)\*?\s*\{?\s*(\\[A-Za-z@]+)\s*}?/g)) {
    r.add(m[1]);
  }
  for (const m of l.matchAll(/\\(?:newenvironment|renewenvironment)\*?\s*\{([^{}]+)}/g)) {
    o.add(m[1].trim());
  }
  for (const m of l.matchAll(/\\newtheorem\*?\s*\{([^{}]+)}/g)) {
    o.add(m[1].trim());
  }
  return {
    labels: [...t.values()],
    citations: [...i.values()],
    packages: [...s].sort(),
    commands: [...r].sort(),
    environments: [...o].sort()
  };
};
const ak = n => {
  const e = new WeakMap();
  return (t, i) => {
    const s = e.get(t);
    if (s) {
      return s;
    }
    const r = Wd(i, n);
    e.set(t, r);
    return r;
  };
};
const mc = (n, e) => Math.min(n.length, Math.max(0, e));
const hk = (n, e, t) => t.map(i => {
  const s = mc(n, i.from);
  const r = mc(n, Math.max(i.from, i.to));
  const o = n.lineAt(s);
  const l = n.lineAt(r);
  return {
    severity: i.severity,
    file: e,
    line: o.number,
    column: s - o.from + 1,
    endLine: l.number,
    endColumn: r - l.from + 1,
    code: i.code,
    package: i.source ?? "LaTeX editor",
    message: i.message
  };
});
const ck = n => (n == null ? undefined : n.replace(/^\.?\//, "")) ?? null;
const Go = n => JSON.stringify([n.severity, ck(n.file), n.line ?? null, n.column ?? null, n.endLine ?? null, n.endColumn ?? null, n.code ?? null, n.package ?? null, n.message]);
const xw = (n, e) => n === e || n.length === e.length && n.every((t, i) => Go(t) === Go(e[i]));
const Qw = (...n) => {
  const e = new Map();
  n.forEach(t => {
    t.forEach(i => {
      const s = Go(i);
      if (!e.has(s)) {
        e.set(s, i);
      }
    });
  });
  return [...e.values()];
};
const fk = n => {
  const e = String(n.typography.code.fontSize).trim();
  const t = /^([0-9]+(?:\.[0-9]+)?)rem$/.exec(e);
  if (!t) {
    throw new Error("The LaTeX editor theme font size must be expressed in rem.");
  }
  const i = Number(t[1]);
  if (!Number.isFinite(i) || i <= 0) {
    throw new Error("The LaTeX editor theme font size must be a positive rem value.");
  }
  return i;
};
const uk = (n, e = fk(n)) => {
  if (!Number.isFinite(e) || e <= 0) {
    throw new Error("The LaTeX editor font size must be a positive rem value.");
  }
  const t = n.palette.mode === "dark";
  const i = `${e}rem`;
  const s = t ? n.palette.codeSource.background : n.palette.background.paper;
  const r = t ? n.palette.codeSource.text : n.palette.text.primary;
  const o = t ? qe(n.palette.codeSource.background, 0.94) : qe(n.palette.text.primary, 0.025);
  return [v.theme({
    "&": {
      height: "100%",
      backgroundColor: s,
      color: r,
      fontFamily: String(n.typography.code.fontFamily),
      fontSize: i
    },
    "&.cm-focused": {
      outline: "none"
    },
    "&.cm-focused .cm-cursor": {
      borderLeftColor: n.palette.primary.main
    },
    "&.cm-focused .cm-selectionBackground, .cm-selectionBackground": {
      backgroundColor: `${qe(n.palette.primary.main, 0.2)} !important`
    },
    ".cm-activeLine": {
      backgroundColor: qe(n.palette.primary.main, 0.055)
    },
    ".cm-activeLineGutter": {
      backgroundColor: qe(n.palette.primary.main, 0.09),
      color: r
    },
    ".cm-content": {
      caretColor: n.palette.primary.main,
      fontFamily: String(n.typography.code.fontFamily),
      lineHeight: String(n.typography.code.lineHeight),
      paddingBlock: n.spacing(1)
    },
    ".cm-gutters": {
      backgroundColor: o,
      borderRightColor: n.palette.divider,
      color: qe(r, t ? 0.72 : 0.54)
    },
    ".cm-lineNumbers .cm-gutterElement": {
      paddingInline: n.spacing(1)
    },
    ".cm-matchingBracket": {
      backgroundColor: qe(n.palette.info.main, 0.18),
      color: r,
      outline: `1px solid ${qe(n.palette.info.main, 0.44)}`
    },
    ".cm-panels": {
      backgroundColor: n.palette.background.paper,
      color: n.palette.text.primary
    },
    ".cm-panels.cm-panels-top": {
      borderBottomColor: n.palette.divider
    },
    ".cm-searchMatch": {
      backgroundColor: qe(n.palette.warning.main, 0.2),
      outline: `1px solid ${qe(n.palette.warning.main, 0.45)}`
    },
    ".cm-searchMatch.cm-searchMatch-selected": {
      backgroundColor: qe(n.palette.primary.main, 0.24)
    },
    ".cm-tooltip": {
      backgroundColor: n.palette.background.paper,
      borderColor: n.palette.divider,
      borderRadius: n.shape.radiusSmPx,
      boxShadow: n.shadows[8],
      color: n.palette.text.primary
    },
    ".cm-tooltip-autocomplete > ul > li": {
      paddingBlock: n.spacing(0.45),
      paddingInline: n.spacing(1)
    },
    ".cm-tooltip-autocomplete > ul > li[aria-selected]": {
      backgroundColor: n.palette.action.selected,
      color: n.palette.text.primary
    },
    ".cm-completionDetail": {
      color: n.palette.text.secondary,
      fontStyle: "normal",
      marginLeft: n.spacing(1)
    },
    ".cm-latex-hover": {
      maxWidth: "min(32rem, 80vw)",
      padding: n.spacing(1.25)
    },
    ".cm-latex-reference-hover": {
      display: "flex",
      flexDirection: "column",
      gap: n.spacing(0.4)
    },
    ".cm-latex-reference-hover > span": {
      color: n.palette.text.secondary
    },
    ".cm-lintRange-error": {
      backgroundImage: `linear-gradient(135deg, transparent 65%, ${n.palette.error.main} 65%)`
    },
    ".cm-lintRange-warning": {
      backgroundImage: `linear-gradient(135deg, transparent 65%, ${n.palette.warning.main} 65%)`
    }
  }, {
    dark: t
  }), Ol(t ? vd : mu)];
};
const dk = (n, e) => {
  const t = wt(n);
  let i = null;
  for (let s = 0; s < t.length; s += 1) {
    if (Xi(n, s)) {
      continue;
    }
    const r = t.slice(s, s + 2);
    const o = t[s] === "$" ? t[s + 1] === "$" ? "$$" : "$" : ["\\(", "\\)", "\\[", "\\]"].includes(r) ? r : null;
    if (!o) {
      continue;
    }
    if (!i) {
      if (o === "\\)" || o === "\\]") {
        continue;
      }
      i = {
        token: o,
        close: o === "\\(" ? "\\)" : o === "\\[" ? "\\]" : o,
        from: s,
        contentFrom: s + o.length
      };
      s += o.length - 1;
      continue;
    }
    if (o !== i.close) {
      continue;
    }
    const l = s + o.length;
    if (e >= i.from && e <= l) {
      return {
        kind: "math",
        from: i.from,
        to: l,
        expression: n.slice(i.contentFrom, s),
        displayMode: i.token === "$$" || i.token === "\\["
      };
    }
    i = null;
    s += o.length - 1;
  }
  return null;
};
const mk = (n, e) => {
  const t = wt(n);
  for (const i of t.matchAll(/\\begin\s*\{(align\*?|equation\*?|gather\*?|multline\*?|split)}([\s\S]*?)\\end\s*\{\1}/g)) {
    const s = i.index + i[0].length;
    if (e < i.index || e > s) {
      continue;
    }
    const r = i.index + i[0].indexOf(i[2]);
    return {
      kind: "math",
      from: i.index,
      to: s,
      expression: n.slice(r, r + i[2].length),
      displayMode: true
    };
  }
  return null;
};
const pk = (n, e) => {
  const t = wt(n);
  const i = /\\((?:auto|page|eq|name|v|V|c|C)?ref|(?:text|paren|foot|smart|super)?cite\w*)\*?(?:\s*\[[^\]]*]){0,2}\s*\{([^{}]+)}/g;
  for (const s of t.matchAll(i)) {
    const r = s.index + s[0].length;
    if (e < s.index || e > r) {
      continue;
    }
    const o = s[2].split(",");
    let l = o[0].trim();
    let a = s.index + s[0].lastIndexOf("{") + 1;
    for (const h of o) {
      if (e >= a && e <= a + h.length) {
        l = h.trim();
        break;
      }
      a += h.length + 1;
    }
    return {
      kind: s[1].includes("cite") ? "citation" : "reference",
      from: s.index,
      to: r,
      key: l
    };
  }
  return null;
};
const Ok = (n, e) => dk(n, e) ?? mk(n, e) ?? pk(n, e);
const gk = n => () => {
  const e = document.createElement("div");
  e.className = "cm-latex-hover cm-latex-math-hover";
  zd.render(n.expression, e, {
    displayMode: n.displayMode,
    output: "htmlAndMathml",
    strict: "ignore",
    throwOnError: false,
    trust: false
  });
  return {
    dom: e
  };
};
const bk = (n, e) => () => {
  const t = document.createElement("div");
  t.className = "cm-latex-hover cm-latex-reference-hover";
  const i = document.createElement("strong");
  i.textContent = "title" in e && e.title ? e.title : n.key;
  t.appendChild(i);
  const s = document.createElement("span");
  s.textContent = ["author" in e ? e.author : undefined, e.filePath, "line" in e && e.line ? `line ${e.line}` : undefined].filter(Boolean).join(" · ");
  if (s.textContent) {
    t.appendChild(s);
  }
  return {
    dom: t
  };
};
const yk = (n, e, t) => n.kind === "reference" ? t.labels.find(i => i.key === n.key) ?? e.labels.find(i => i.key === n.key) : t.citations.find(i => i.key === n.key) ?? e.citations.find(i => i.key === n.key);
const xk = (n, e) => al((t, i) => {
  const s = t.state.doc.toString();
  const r = Ok(s, i);
  if (!r) {
    return null;
  }
  let o;
  if (r.kind === "math") {
    o = gk(r);
  } else {
    const l = yk(r, n, e(t.state.doc, s));
    o = l ? bk(r, l) : null;
  }
  if (o) {
    return {
      pos: r.from,
      end: r.to,
      above: true,
      create: o
    };
  } else {
    return null;
  }
}, {
  hideOnChange: true,
  hoverTime: 350
});
const _l = () => [{
  name: "Remove",
  apply: (n, e, t) => {
    n.dispatch({
      changes: {
        from: e,
        to: t,
        insert: ""
      }
    });
  }
}];
const Qk = (n, e) => {
  const t = [];
  const i = [];
  for (let s = 0; s < e.length; s += 1) {
    const r = e[s];
    if (!Xi(n, s)) {
      if (r === "{") {
        i.push(s);
        continue;
      }
      if (r === "}") {
        if (i.length > 0) {
          i.pop();
          continue;
        }
        t.push({
          code: "unexpected-brace",
          from: s,
          to: s + 1,
          severity: "error",
          source: "LaTeX syntax",
          message: "Closing brace has no matching opening brace.",
          actions: _l()
        });
      }
    }
  }
  i.forEach(s => {
    t.push({
      code: "unclosed-brace",
      from: s,
      to: s + 1,
      severity: "error",
      source: "LaTeX syntax",
      message: "Opening brace is not closed."
    });
  });
  return t;
};
const Sk = n => {
  const e = [];
  const t = [];
  for (const i of n.matchAll(/\\(begin|end)\s*\{([^{}]+)}/g)) {
    const s = {
      name: i[2].trim(),
      from: i.index,
      to: i.index + i[0].length
    };
    if (i[1] === "begin") {
      t.push(s);
      continue;
    }
    const r = t.at(-1);
    if (!r) {
      e.push({
        code: "unexpected-environment",
        from: s.from,
        to: s.to,
        severity: "error",
        source: "LaTeX syntax",
        message: `\\end{${s.name}} has no matching \\begin{${s.name}}.`,
        actions: _l()
      });
      continue;
    }
    if (r.name === s.name) {
      t.pop();
      continue;
    }
    e.push({
      code: "unexpected-environment",
      from: s.from,
      to: s.to,
      severity: "error",
      source: "LaTeX syntax",
      message: `Expected \\end{${r.name}} before \\end{${s.name}}.`
    });
    const o = t.findLastIndex(l => l.name === s.name);
    if (o !== -1) {
      t.splice(o);
    }
  }
  t.forEach(i => {
    e.push({
      code: "unclosed-environment",
      from: i.from,
      to: i.to,
      severity: "error",
      source: "LaTeX syntax",
      message: `Environment "${i.name}" is not closed.`,
      actions: [{
        name: `Insert \\end{${i.name}}`,
        apply: s => {
          s.dispatch({
            changes: {
              from: s.state.doc.length,
              insert: `
\\end{${i.name}}`
            }
          });
        }
      }]
    });
  });
  return e;
};
const kk = (n, e, t) => {
  if (e[t] === "$" && !Xi(n, t)) {
    if (e[t + 1] === "$") {
      return "$$";
    } else {
      return "$";
    }
  }
  const i = e.slice(t, t + 2);
  if (["\\(", "\\)", "\\[", "\\]"].includes(i) && !Xi(n, t)) {
    return i;
  } else {
    return null;
  }
};
const wk = (n, e) => {
  const t = [];
  const i = [];
  const s = {
    "\\(": "\\)",
    "\\[": "\\]"
  };
  const r = new Set(Object.values(s));
  for (let o = 0; o < e.length; o += 1) {
    const l = kk(n, e, o);
    if (!l) {
      continue;
    }
    const a = o + l.length;
    o = a - 1;
    if (l in s) {
      i.push({
        open: l,
        close: s[l],
        from: a - l.length,
        to: a
      });
      continue;
    }
    const h = i.at(-1);
    if (r.has(l)) {
      if ((h == null ? undefined : h.close) === l) {
        i.pop();
        continue;
      }
      t.push({
        code: "math-delimiter",
        from: a - l.length,
        to: a,
        severity: "error",
        source: "LaTeX syntax",
        message: h ? `Expected ${h.close} before ${l}.` : `${l} has no matching opening math delimiter.`,
        actions: _l()
      });
      continue;
    }
    if ((h == null ? undefined : h.open) === l) {
      i.pop();
      continue;
    }
    if (h) {
      t.push({
        code: "math-delimiter",
        from: a - l.length,
        to: a,
        severity: "error",
        source: "LaTeX syntax",
        message: `Close ${h.open} with ${h.close} before opening ${l}.`
      });
      continue;
    }
    i.push({
      open: l,
      close: l,
      from: a - l.length,
      to: a
    });
  }
  i.forEach(o => {
    t.push({
      code: "math-delimiter",
      from: o.from,
      to: o.to,
      severity: "error",
      source: "LaTeX syntax",
      message: `Math delimiter ${o.open} is not closed with ${o.close}.`
    });
  });
  return t;
};
const vk = (n, e) => {
  var o;
  var l;
  const t = [];
  const i = new Map();
  for (const a of n.matchAll(/\\label\s*\{([^{}]+)}/g)) {
    const h = a[1].trim();
    if (i.get(h)) {
      t.push({
        code: "duplicate-label",
        from: a.index,
        to: a.index + a[0].length,
        severity: "warning",
        source: "LaTeX references",
        message: `Label "${h}" is already defined in this file.`
      });
    } else {
      i.set(h, {
        from: a.index,
        to: a.index + a[0].length
      });
    }
  }
  const s = new Set(((o = e.projectIndex) == null ? undefined : o.labels.filter(a => a.filePath !== e.filePath).map(a => a.key)) ?? []);
  i.forEach((a, h) => {
    if (s.has(h)) {
      t.push({
        code: "duplicate-label",
        from: a.from,
        to: a.to,
        severity: "warning",
        source: "LaTeX references",
        message: `Label "${h}" is already defined in another project file.`
      });
    }
    s.add(h);
  });
  for (const a of n.matchAll(/\\(?:auto|page|eq|name|v|V|c|C)?ref\*?\s*\{([^{}]+)}/g)) {
    const h = a[1].trim();
    if (!s.has(h)) {
      t.push({
        code: "undefined-reference",
        from: a.index,
        to: a.index + a[0].length,
        severity: "warning",
        source: "LaTeX references",
        message: `Reference "${h}" is not defined in the project.`
      });
    }
  }
  const r = new Set(((l = e.projectIndex) == null ? undefined : l.citations.map(a => a.key)) ?? []);
  for (const a of n.matchAll(/(?:@[A-Za-z]+\s*|\\bibitem(?:\[[^\]]*])?\s*)\{\s*([^,}\s]+)/g)) {
    r.add(a[1].trim());
  }
  for (const a of n.matchAll(/\\(?:text|paren|foot|smart|super)?cite\w*\*?(?:\s*\[[^\]]*]){0,2}\s*\{([^{}]+)}/g)) {
    a[1].split(",").map(h => h.trim()).filter(h => h && !r.has(h)).forEach(h => {
      t.push({
        code: "undefined-citation",
        from: a.index,
        to: a.index + a[0].length,
        severity: "warning",
        source: "LaTeX references",
        message: `Citation "${h}" is not defined in the project bibliography.`
      });
    });
  }
  return t;
};
const Ck = (n, e = {}) => {
  const t = wt(n);
  return [...Qk(n, t), ...Sk(t), ...wk(n, t), ...vk(t, e)].sort((i, s) => i.from - s.from);
};
const qk = new Set(["asy", "bbx", "bib", "bst", "c", "cbx", "cfg", "clo", "cls", "cpp", "csv", "dat", "def", "dtx", "enc", "fd", "glo", "gls", "h", "hpp", "ins", "ist", "java", "js", "json", "lbx", "ltx", "lua", "map", "md", "mjs", "pgf", "py", "r", "rb", "rs", "sh", "sty", "tex", "tikz", "toml", "ts", "tsv", "txt", "xdy", "xml", "yaml", "yml"]);
const Dd = n => {
  const e = n.split("/").at(-1) ?? n;
  const t = e.lastIndexOf(".");
  if (t === -1) {
    return "";
  } else {
    return e.slice(t + 1).toLowerCase();
  }
};
const Tk = n => {
  if (n.kind) {
    return n.kind;
  }
  const e = Dd(n.path);
  if (e === "tex" || e === "ltx") {
    return "tex";
  } else if (e === "bib" || e === "bst") {
    return "bibliography";
  } else if (["def", "fd", "sty"].includes(e)) {
    return "style";
  } else if (e === "cls") {
    return "class";
  } else if (["eps", "jpeg", "jpg", "png", "svg", "webp"].includes(e)) {
    return "image";
  } else if (e === "pdf") {
    return "pdf";
  } else if (["csv", "dat", "json", "tsv"].includes(e)) {
    return "data";
  } else {
    return "other";
  }
};
const $k = n => typeof n.content == "string" && (n.kind === "text" || qk.has(Dd(n.path)) || ["bibliography", "class", "style", "tex"].includes(Tk(n)));
const Hn = (n, e, t) => {
  const i = e.trim();
  if (i && !n.has(i)) {
    n.set(i, t);
  }
};
const Xk = n => {
  var l;
  var a;
  const e = new Map();
  const t = new Map();
  const i = new Set((n == null ? undefined : n.packages) ?? []);
  const s = new Set();
  const r = new Set();
  const o = (n == null ? undefined : n.files) ?? [];
  if ((l = n == null ? undefined : n.labels) != null) {
    l.forEach(h => Hn(e, h.key, h));
  }
  if ((a = n == null ? undefined : n.citations) != null) {
    a.forEach(h => Hn(t, h.key, h));
  }
  o.forEach(h => {
    if (!$k(h)) {
      return;
    }
    const c = Wd(h.content ?? "", h.path);
    c.labels.forEach(f => Hn(e, f.key, f));
    c.citations.forEach(f => Hn(t, f.key, f));
    c.packages.forEach(f => i.add(f));
    c.commands.forEach(f => s.add(f));
    c.environments.forEach(f => r.add(f));
  });
  return {
    files: o,
    labels: [...e.values()],
    citations: [...t.values()],
    packages: [...i].sort(),
    commands: [...s].sort(),
    environments: [...r].sort()
  };
};
const Ek = n => {
  const e = [];
  for (let t = 0; t < n.length; t += 1) {
    if (n[t] !== "%" || Xi(n, t)) {
      continue;
    }
    const i = n.indexOf(`
`, t);
    const s = i === -1 ? n.length : i;
    e.push({
      from: t,
      to: s
    });
    t = s - 1;
  }
  return e;
};
const Ak = n => {
  const e = [];
  const t = wt(n);
  const i = [];
  for (let r = 0; r < t.length; r += 1) {
    if (Xi(n, r)) {
      continue;
    }
    const o = t.slice(r, r + 2);
    const l = t[r] === "$" ? t[r + 1] === "$" ? "$$" : "$" : ["\\(", "\\)", "\\[", "\\]"].includes(o) ? o : null;
    if (!l) {
      continue;
    }
    const a = i.at(-1);
    const h = (a == null ? undefined : a.token) === "\\(" ? "\\)" : (a == null ? undefined : a.token) === "\\[" ? "\\]" : a == null ? undefined : a.token;
    if (a && l === h) {
      e.push({
        from: a.from,
        to: r + l.length
      });
      i.pop();
    } else if (!a && !["\\)", "\\]"].includes(l)) {
      i.push({
        token: l,
        from: r
      });
    }
    r += l.length - 1;
  }
  const s = i.at(-1);
  if (s) {
    e.push({
      from: s.from,
      to: n.length
    });
  }
  for (const r of t.matchAll(/\\begin\s*\{(align\*?|equation\*?|gather\*?|math|multline\*?|split)}[\s\S]*?\\end\s*\{\1}/g)) {
    e.push({
      from: r.index,
      to: r.index + r[0].length
    });
  }
  return e;
};
const Pk = n => {
  const e = [];
  for (const t of n.matchAll(/\\(?:[A-Za-z@]+\*?|.)/g)) {
    e.push({
      from: t.index,
      to: t.index + t[0].length
    });
  }
  for (const t of n.matchAll(/\\(?:addbibresource|bibliography|cite\w*|eqref|label|pageref|ref|url)\*?(?:\s*\[[^\]]*]){0,2}\s*\{[^{}]*}/g)) {
    e.push({
      from: t.index,
      to: t.index + t[0].length
    });
  }
  return e;
};
const Mk = n => {
  const e = n.filter(i => i.to > i.from).sort((i, s) => i.from - s.from || i.to - s.to);
  const t = [];
  e.forEach(i => {
    const s = t.at(-1);
    if (!s || i.from > s.to) {
      t.push({
        ...i
      });
      return;
    }
    s.to = Math.max(s.to, i.to);
  });
  return t;
};
const Rk = n => Mk([...Ek(n), ...Ak(n), ...Pk(n)]);
const Vk = (n, e) => {
  const t = [];
  let i = 0;
  e.forEach(s => {
    while (i < n.length && n[i].to <= s.from) {
      i += 1;
    }
    for (let r = i; r < n.length && n[r].from < s.to; r += 1) {
      const o = Math.max(s.from, n[r].from);
      const l = Math.min(s.to, n[r].to);
      if (l > o) {
        t.push({
          from: o,
          to: l
        });
      }
    }
  });
  return t;
};
const Wk = X.mark({
  attributes: {
    spellcheck: "false"
  }
});
const Dk = 350;
const Lk = 750;
const pc = M.define();
const Oc = (n, e) => {
  const t = Vk(e, n.visibleRanges).map(i => Wk.range(i.from, i.to));
  return X.set(t, true);
};
const Nk = K.fromClass(class {
  constructor(n) {
    Vi(this, "decorations");
    Vi(this, "ignoredRanges");
    Vi(this, "cancelScheduledAnalysis", null);
    this.ignoredRanges = [];
    this.decorations = Oc(n, this.ignoredRanges);
    this.scheduleAnalysis(n);
  }
  scheduleAnalysis(n) {
    var e;
    if ((e = this.cancelScheduledAnalysis) != null) {
      e.call(this);
    }
    this.cancelScheduledAnalysis = Io(() => {
      this.cancelScheduledAnalysis = null;
      const t = Rk(n.state.doc.toString());
      n.dispatch({
        effects: pc.of(t)
      });
    }, Dk, Lk);
  }
  update(n) {
    const e = n.transactions.flatMap(t => t.effects).find(t => t.is(pc));
    if (e) {
      this.ignoredRanges = e.value;
    }
    if (n.docChanged) {
      this.ignoredRanges = this.ignoredRanges.map(t => ({
        from: n.changes.mapPos(t.from, -1),
        to: n.changes.mapPos(t.to, 1)
      })).filter(t => t.to > t.from);
      this.scheduleAnalysis(n.view);
    }
    if (e || n.docChanged || n.viewportChanged) {
      this.decorations = Oc(n.view, this.ignoredRanges);
    }
  }
  destroy() {
    var n;
    if ((n = this.cancelScheduledAnalysis) != null) {
      n.call(this);
    }
    this.cancelScheduledAnalysis = null;
  }
}, {
  decorations: n => n.decorations
});
const Bk = [v.contentAttributes.of({
  spellcheck: "true",
  autocapitalize: "off",
  autocomplete: "off",
  autocorrect: "off"
}), Nk];
const gc = n => n.replace(/\r\n?/g, `
`);
const bc = (n, e) => {
  if (e.length === 0) {
    return {
      error: null,
      ranges: []
    };
  }
  const t = gc(n);
  const i = e.map(o => {
    const l = gc(o.oldText);
    const a = t.indexOf(l);
    const h = a === -1 ? -1 : t.indexOf(l, a + 1);
    if (a === -1 || h !== -1) {
      return null;
    } else {
      return {
        edit: o,
        from: a,
        to: a + l.length
      };
    }
  });
  if (i.some(o => o === null)) {
    return {
      error: "The current draft no longer contains one exact match for every proposed replacement.",
      ranges: []
    };
  }
  const s = i.filter(o => o !== null).sort((o, l) => o.from - l.from);
  if (s.some((o, l) => l > 0 && o.from < s[l - 1].to)) {
    return {
      error: "The proposed replacements overlap in the current draft.",
      ranges: []
    };
  } else {
    return {
      error: null,
      ranges: s
    };
  }
};
const Sw = (n, e, t) => {
  if (n.length === 0) {
    return null;
  }
  if (t === "next") {
    if (e !== null) {
      const i = n.find(s => s.from > e);
      if (i) {
        return i;
      }
    }
    return n[0];
  }
  if (e !== null) {
    for (let i = n.length - 1; i >= 0; i -= 1) {
      if (n[i].from < e) {
        return n[i];
      }
    }
  }
  return n[n.length - 1];
};
class Yk extends _e {
  constructor(e) {
    super();
    this.text = e;
  }
  eq(e) {
    return e.text === this.text;
  }
  get lineBreaks() {
    return this.text.split(`
`).length - 1;
  }
  toDOM() {
    const e = document.createElement("span");
    e.className = "cm-latex-edit-proposal-insertion";
    e.textContent = this.text;
    e.setAttribute("aria-label", "Proposed replacement text");
    return e;
  }
}
const Gk = n => n.error ? X.none : X.set(n.ranges.flatMap(({
  edit: e,
  from: t,
  to: i
}) => {
  const s = [X.mark({
    class: "cm-latex-edit-proposal-removal",
    attributes: {
      "aria-label": "Text proposed for replacement"
    }
  }).range(t, i)];
  if (e.newText) {
    s.push(X.widget({
      side: 1,
      widget: new Yk(e.newText.replace(/\r\n?/g, `
`))
    }).range(i));
  }
  return s;
}), true);
const Ik = n => K.fromClass(class {
  constructor(e) {
    Vi(this, "overview", document.createElement("div"));
    this.view = e;
    this.overview.className = "cm-latex-edit-proposal-overview";
    this.overview.setAttribute("role", "group");
    this.overview.setAttribute("aria-label", "Proposed changes overview");
    e.dom.append(this.overview);
    this.render();
  }
  render() {
    const {
      doc: e
    } = this.view.state;
    const i = this.view.state.field(n).ranges.map(({
      from: s,
      to: r
    }) => {
      const o = e.lineAt(s).number;
      const l = e.lineAt(Math.max(s, r - 1)).number;
      const a = document.createElement("button");
      const h = (o - 1) / e.lines * 100;
      const c = (l - o + 1) / e.lines * 100;
      a.type = "button";
      a.className = "cm-latex-edit-proposal-overview-marker";
      a.style.top = `${h}%`;
      a.style.height = `max(4px, ${c}%)`;
      a.title = `Jump to proposed change on line ${o}`;
      a.setAttribute("aria-label", `Jump to proposed change on line ${o}`);
      a.addEventListener("click", f => {
        f.preventDefault();
        f.stopPropagation();
        this.view.dispatch({
          selection: {
            anchor: s
          },
          effects: v.scrollIntoView(s, {
            y: "center"
          })
        });
        this.view.focus();
      });
      return a;
    });
    this.overview.replaceChildren(...i);
  }
  update(e) {
    if (e.docChanged) {
      this.render();
    }
  }
  destroy() {
    this.overview.remove();
  }
});
const Zk = (n, e) => {
  const t = le.define({
    create: i => bc(i.doc.toString(), n),
    update: (i, s) => s.docChanged ? bc(s.newDoc.toString(), n) : i
  });
  return [t, v.decorations.compute([t], i => Gk(i.field(t))), Ik(t), v.baseTheme({
    "&": {
      position: "relative"
    },
    ".cm-latex-edit-proposal-removal": {
      borderRadius: e.shape.borderRadiusPx,
      backgroundColor: qe(e.palette.error.main, 0.16),
      color: e.palette.error.main,
      textDecoration: "line-through",
      textDecorationThickness: "0.12em"
    },
    ".cm-latex-edit-proposal-insertion": {
      display: "inline",
      borderRadius: e.shape.borderRadiusPx,
      marginInline: e.spacing(0.35),
      paddingInline: e.spacing(0.35),
      backgroundColor: qe(e.palette.success.main, 0.16),
      color: e.palette.success.main,
      whiteSpace: "pre-wrap",
      textDecoration: "none"
    },
    ".cm-latex-edit-proposal-overview": {
      position: "absolute",
      zIndex: 20,
      top: e.spacing(0.75),
      right: e.spacing(1.75),
      bottom: e.spacing(0.75),
      width: e.spacing(0.75),
      borderRadius: e.shape.borderRadiusPx,
      backgroundColor: qe(e.palette.text.primary, 0.07),
      pointerEvents: "none"
    },
    ".cm-latex-edit-proposal-overview-marker": {
      position: "absolute",
      left: 0,
      width: "100%",
      minHeight: "4px",
      margin: 0,
      padding: 0,
      border: 0,
      borderRadius: e.shape.borderRadiusPx,
      background: `linear-gradient(to right, ${e.palette.error.main} 0 50%, ${e.palette.success.main} 50% 100%)`,
      boxShadow: `0 0 0 1px ${qe(e.palette.background.paper, 0.72)}`,
      cursor: "pointer",
      pointerEvents: "auto"
    },
    ".cm-latex-edit-proposal-overview-marker:hover": {
      transform: "scaleX(1.5)"
    },
    ".cm-latex-edit-proposal-overview-marker:focus-visible": {
      outline: `2px solid ${e.palette.primary.main}`,
      outlineOffset: "2px"
    }
  })];
};
const zk = n => n;
const jk = (n, e) => e.filter(t => t.line).map(t => {
  const i = n.state.doc.line(Math.min(t.line ?? 1, n.state.doc.lines));
  const s = t.column ? Math.min(i.to, i.from + t.column - 1) : i.from;
  const r = t.endLine ? n.state.doc.line(Math.min(t.endLine, n.state.doc.lines)) : i;
  const o = t.endColumn ? Math.min(r.to, r.from + t.endColumn - 1) : null;
  return {
    from: s,
    to: o ?? (s === i.to ? Math.min(i.to + 1, n.state.doc.length) : i.to),
    severity: zk(t.severity),
    message: t.message,
    source: t.package ?? t.code ?? "LaTeX compiler"
  };
});
const _k = ({
  callbacks: n,
  diagnostics: e,
  fileName: t,
  fontSizeRem: i,
  keybindings: s,
  onLiveDiagnosticsChange: r,
  projectContext: o,
  proposedEdits: l = [],
  spellCheck: a,
  theme: h
}) => {
  const c = Xk(o);
  const f = ak(t);
  const u = lk(c, f);
  const d = G1({
    callbacks: n,
    keybindings: s
  });
  const m = [zS({
    autoCloseTags: true,
    enableAutocomplete: false,
    enableLinting: false,
    enableTooltips: true,
    fileName: t
  }), Vl({
    activateOnTyping: true,
    defaultKeymap: true,
    icons: true,
    override: [u, Yo(true)]
  }), a1(), Do(p => {
    const O = Ck(p.state.doc.toString(), {
      filePath: t,
      projectIndex: c
    });
    if (r != null) {
      r(t, hk(p.state.doc, t, O));
    }
    return O;
  }, {
    delay: 280
  }), Do(p => jk(p, e)), xk(c, f), I1({
    callbacks: n,
    commands: d,
    keybindings: s
  }), uk(h, i), v.lineWrapping];
  if (a) {
    m.push(Bk);
  }
  if (l.length > 0) {
    m.push(Zk(l, h));
  }
  return {
    commands: d,
    extensions: m
  };
};
const Ir = (n, e) => {
  const t = n.selection.main.head;
  const i = n.doc.lineAt(t);
  return {
    line: i.number,
    column: t - i.from + 1,
    cursorOffset: t,
    selectionLength: n.selection.ranges.reduce((s, r) => s + Math.abs(r.to - r.from), 0),
    wordCount: e,
    characterCount: n.doc.length
  };
};
const Fk = {
  overflow: "hidden"
};
const Uk = {
  display: "flex",
  minHeight: 0,
  maxHeight: "min(34rem, 72vh)",
  flexDirection: "column",
  paddingTop: 0
};
const Hk = {
  minHeight: 0,
  overflowY: "auto"
};
const Kk = {
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2
};
const Jk = {
  minWidth: 0
};
const ew = n => [n.title, n.description, n.category, n.shortcut].filter(Boolean).join(" ").toLowerCase();
const _Component2 = ({
  commands: n,
  editorView: e,
  open: t,
  onClose: i
}) => {
  const [s, r] = P.useState("");
  const [o, l] = P.useState(0);
  const a = s.trim().toLowerCase();
  const h = P.useMemo(() => n.filter(m => !a || ew(m).includes(a)), [n, a]);
  const c = Math.min(o, Math.max(0, h.length - 1));
  const f = () => {
    r("");
    l(0);
    i();
  };
  const u = m => {
    var p;
    if (!!e && ((p = m.isEnabled) == null ? undefined : p.call(m, e)) !== false) {
      m.run(e);
      f();
      e.focus();
    }
  };
  const d = m => {
    if (m.key === "ArrowDown") {
      m.preventDefault();
      l(p => Math.max(0, Math.min(p + 1, h.length - 1)));
      return;
    }
    if (m.key === "ArrowUp") {
      m.preventDefault();
      l(p => Math.max(0, p - 1));
      return;
    }
    if (m.key === "Enter") {
      const p = h[c];
      if (p) {
        m.preventDefault();
        u(p);
      }
      return;
    }
    if (m.key === "Escape") {
      m.preventDefault();
      f();
    }
  };
  return <_Component open={t} fullWidth={true} maxWidth="sm" aria-labelledby="latex-command-palette-title" slotProps={{
    paper: {
      sx: Fk
    }
  }} onClose={f}><_d id="latex-command-palette-title"><Wi variant="h6">Editor commands</Wi></_d><Fd sx={Uk}><Ud autoFocus={true} fullWidth={true} value={s} label="Find a command" placeholder="Format, compile, find…" onKeyDown={d} onChange={m => {
        r(m.target.value);
        l(0);
      }} /><Hd dense={true} disablePadding={true} aria-label="Available editor commands" sx={Hk}>{h.map((m, p) => {
          var b;
          const O = e ? ((b = m.isEnabled) == null ? undefined : b.call(m, e)) !== false : false;
          return <Gd disabled={!O} selected={p === c} onClick={() => {
            u(m);
          }} key={m.id}><Fl direction="row" sx={Kk}><Fl sx={Jk}><Wi variant="subtitle2">{m.title}</Wi><Wi variant="caption" color="textSecondary">{m.description}</Wi></Fl>{m.shortcut && <Wi variant="code" color="textSecondary" noWrap={true}>{m.shortcut}</Wi>}</Fl></Gd>;
        })}{h.length === 0 && <Wi variant="body2" color="textSecondary" align="center">No matching commands.</Wi>}</Hd></Fd></_Component>;
};
const iw = {
  flex: 1,
  minWidth: 0,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  "& .latex-source-codemirror": {
    flex: "1 1 auto",
    minWidth: 0,
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  },
  "& .cm-editor": {
    flex: "1 1 auto",
    minWidth: 0,
    minHeight: 0,
    height: "100%",
    background: "transparent"
  },
  "& .cm-scroller": {
    minWidth: 0,
    minHeight: 0,
    overflow: "auto"
  }
};
const nw = {
  autocompletion: false,
  closeBrackets: false,
  completionKeymap: false
};
const sw = 500;
const rw = 750;
const ow = [];
const lw = P.memo(function ({
  id: e,
  role: t,
  ariaLabelledBy: i,
  value: s,
  fileKey: r,
  fileName: o = Ul,
  diagnostics: l = [],
  editable: a = true,
  enableCommandPalette: h = true,
  fontSizeRem: c,
  keybindings: f,
  projectContext: u,
  proposedEdits: d = ow,
  sessionStore: m,
  spellCheck: p = true,
  sx: O,
  onChange: b,
  onCompile: x,
  onCreateEditor: Q,
  onLiveDiagnosticsChange: C,
  onSave: w,
  onSaveShortcut: S,
  onStatusChange: k
}) {
  const A = Id();
  const R = P.useRef(null);
  const B = P.useRef({
    onCompile: x,
    onSave: w,
    onSaveShortcut: S
  });
  const V = P.useRef(C);
  const E = P.useRef(k);
  const W = P.useRef(null);
  const D = P.useRef(0);
  const [G, J] = P.useState(false);
  B.current = {
    onCompile: x,
    onSave: w,
    onSaveShortcut: S
  };
  V.current = C;
  E.current = k;
  const ne = o || Ul;
  const me = P.useMemo(() => Y1(f), [f]);
  const U = !!x;
  const ae = !!w;
  const he = !!S;
  const pe = P.useMemo(() => ({
    onCompile: U ? () => {
      var Z;
      var Oe;
      if ((Oe = (Z = B.current).onCompile) != null) {
        Oe.call(Z);
      }
    } : undefined,
    onSave: ae ? () => {
      var Z;
      var Oe;
      if ((Oe = (Z = B.current).onSave) != null) {
        Oe.call(Z);
      }
    } : undefined,
    onSaveShortcut: he ? () => {
      var Z;
      var Oe;
      if ((Oe = (Z = B.current).onSaveShortcut) != null) {
        Oe.call(Z);
      }
    } : undefined,
    onOpenCommandPalette: h ? () => {
      J(true);
    } : undefined
  }), [h, U, ae, he]);
  const ke = P.useCallback((Z, Oe) => {
    var zt;
    if ((zt = V.current) != null) {
      zt.call(V, Z, Oe);
    }
  }, []);
  const z = P.useMemo(() => _k({
    callbacks: pe,
    diagnostics: l,
    fileName: ne,
    fontSizeRem: c,
    keybindings: me,
    onLiveDiagnosticsChange: ke,
    projectContext: u,
    proposedEdits: d,
    spellCheck: p,
    theme: A
  }), [pe, l, c, ke, u, d, ne, me, p, A]);
  const we = P.useCallback((Z, Oe) => {
    var zt;
    if ((zt = W.current) != null) {
      zt.call(W);
    }
    W.current = Io(() => {
      var Ct;
      W.current = null;
      if (R.current === Z) {
        D.current = D1(Z.state.doc.toString());
        if ((Ct = E.current) != null) {
          Ct.call(E, Ir(Z.state, D.current));
        }
      }
    }, Oe, rw);
  }, []);
  const gt = P.useCallback(Z => {
    R.current = Z;
    if (E.current) {
      D.current = 0;
      E.current(Ir(Z.state, D.current));
      we(Z, 0);
    }
    if (Q != null) {
      Q(Z);
    }
  }, [Q, we]);
  const {
    initialState: vt,
    handleCreateEditor: Ri,
    handleEditorUpdate: De
  } = R1({
    fileId: r ?? null,
    source: s,
    cache: m,
    onCreateEditor: gt
  });
  const ai = P.useCallback(Z => {
    De(Z);
    const Oe = E.current;
    if (Oe && (Z.docChanged || Z.selectionSet)) {
      Oe(Ir(Z.state, D.current));
    }
    if (Oe && Z.docChanged) {
      we(Z.view, sw);
    }
  }, [De, we]);
  P.useEffect(() => () => {
    var Z;
    if ((Z = W.current) != null) {
      Z.call(W);
    }
    W.current = null;
  }, []);
  return <ue.Fragment><Zd id={e} role={t} aria-labelledby={i} sx={[iw, ...(Array.isArray(O) ? O : O ? [O] : [])]}><Cd className="latex-source-codemirror" value={s} height="100%" theme="none" basicSetup={nw} extensions={z.extensions} editable={a} initialState={vt} onCreateEditor={Ri} onUpdate={ai} onChange={b} key={r ?? "latex-source-editor"} /></Zd>{h && G && <_Component2 open={true} commands={z.commands} editorView={R.current} onClose={() => {
      J(false);
    }} />}</ue.Fragment>;
});
const kw = Object.freeze(Object.defineProperty({
  __proto__: null,
  LatexSourceEditor: lw
}, Symbol.toStringTag, {
  value: "Module"
}));
export { Bs as C, X as D, v as E, T as F, pt as G, lw as L, kt as P, Qt as R, M as S, K as V, _e as W, Y as a, de as b, Rt as c, le as d, L as e, uk as f, Zf as g, B1 as h, $k as i, Sw as j, fk as k, xw as l, Qw as m, yw as n, W1 as o, kw as p, bc as r, wt as s };
