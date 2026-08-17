import { r as b } from "../../chunks/index-BM3ZINIl.jsx";
import {
  D as ft,
  h as bt,
  n as P,
  r as _e,
  W as ht,
  i as Se,
  j as mt,
  k as je,
  p as xt,
  l as vt,
  m as yt,
  o as kt,
  q as Ct,
  s as Fe,
  t as wt,
  v as Ie,
  w as De,
  x as _t,
  y as St,
  z as jt,
  R as Oe,
  E as It,
  F as qe,
  G as Pe,
  H as Dt,
  I as ce,
  J as Ot,
  K as O,
  L as Pt,
  N as G,
  Q as Et,
  U as ue,
  X as At,
  Y as Tt,
} from "../../chunks/ChatPanelMoreMenu-B1X9SOWN.jsx";

var Cr = Object.create;
var Ye = Object.defineProperty;
var wr = Object.defineProperties;
var _r = Object.getOwnPropertyDescriptor;
var Sr = Object.getOwnPropertyDescriptors;
var ae = Object.getOwnPropertySymbols;
var Xe = Object.prototype.hasOwnProperty;
var Je = Object.prototype.propertyIsEnumerable;
var jr = (e, t) => ((t = Symbol[e]) ? t : Symbol.for("Symbol." + e));
var X = (e) => {
  throw TypeError(e);
};
var he = (e, t, r) =>
  t in e
    ? Ye(e, t, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: r,
      })
    : (e[t] = r);
var pe = (e, t) => {
  for (var r in (t ||= {})) {
    if (Xe.call(t, r)) {
      he(e, r, t[r]);
    }
  }
  if (ae) {
    for (var r of ae(t)) {
      if (Je.call(t, r)) {
        he(e, r, t[r]);
      }
    }
  }
  return e;
};
var ge = (e, t) => wr(e, Sr(t));
var Ir = (e, t) => {
  var r = {};
  for (var n in e) {
    if (Xe.call(e, n) && t.indexOf(n) < 0) {
      r[n] = e[n];
    }
  }
  if (e != null && ae) {
    for (var n of ae(e)) {
      if (t.indexOf(n) < 0 && Je.call(e, n)) {
        r[n] = e[n];
      }
    }
  }
  return r;
};
var Dr = (e) => {
  return [, , , Cr(undefined ?? null)];
};
var Ze = [
  "class",
  "method",
  "getter",
  "setter",
  "accessor",
  "field",
  "value",
  "get",
  "set",
];
var F = (e) =>
  e !== undefined && typeof e != "function" ? X("Function expected") : e;
var Or = (e, t, r, n, a) => ({
  kind: Ze[e],
  name: t,
  metadata: n,
  addInitializer: (s) =>
    r._ ? X("Already initialized") : a.push(F(s || null)),
});
var Pr = (e, t) => he(t, jr("metadata"), e[3]);
var Z = (e, t, r, n) => {
  for (var a = 0, s = e[t >> 1], i = s && s.length; a < i; a++) {
    if (t & 1) {
      s[a].call(r);
    } else {
      n = s[a].call(r, n);
    }
  }
  return n;
};
var et = (e, t, r, n, a, s) => {
  var i;
  var c;
  var f;
  var x;
  var g;
  var p = t & 7;
  var m = false;
  var v = false;
  var k = e.length + 1;
  var y = Ze[p + 5];
  var C = (e[k - 1] = []);
  var u = (e[k] ||= []);
  a = a.prototype;
  var _ = _r(
    {
      get [r]() {
        return q(this, s);
      },
      set [r](h) {
        return B(this, s, h);
      },
    },
    r,
  );
  for (var l = n.length - 1; l >= 0; l--) {
    x = Or(p, r, (f = {}), e[3], u);
    x.static = m;
    x.private = v;
    g = x.access = {
      has: (h) => r in h,
    };
    g.get = (h) => h[r];
    g.set = (h, d) => (h[r] = d);
    c = (0, n[l])(
      {
        get: _.get,
        set: _.set,
      },
      x,
    );
    f._ = 1;
    if (c === undefined) {
      if (F(c)) {
        _[y] = c;
      }
    } else if (typeof c != "object" || c === null) {
      X("Object expected");
    } else {
      if (F((i = c.get))) {
        _.get = i;
      }
      if (F((i = c.set))) {
        _.set = i;
      }
      if (F((i = c.init))) {
        C.unshift(i);
      }
    }
  }
  if (_) {
    Ye(a, r, _);
  }
  return a;
};
var tt = (e, t, r) => t.has(e) || X("Cannot " + r);
var q = (e, t, r) => {
  tt(e, t, "read from private field");
  return t.get(e);
};
var H = (e, t, r) =>
  t.has(e)
    ? X("Cannot add the same private member more than once")
    : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, r);
var B = (e, t, r, n) => {
  tt(e, t, "write to private field");
  t.set(e, r);
  return r;
};
function N(e) {
  return e instanceof ye || e instanceof st;
}
var ee = 10;
var Er = class extends Fe {
  constructor(e) {
    super(e);
    const t = wt(() => {
      const { dragOperation: n } = e;
      if (Ie(n.activatorEvent) && N(n.source) && n.status.initialized) {
        const a = e.registry.plugins.get(It);
        if (a) {
          a.disable();
          return () => a.enable();
        }
      }
    });
    const r = e.monitor.addEventListener("dragmove", (n, a) => {
      queueMicrotask(() => {
        if (this.disabled || n.defaultPrevented || !n.nativeEvent) {
          return;
        }
        const { dragOperation: s } = a;
        if (!Ie(n.nativeEvent) || !N(s.source) || !s.shape) {
          return;
        }
        const { actions: i, collisionObserver: c, registry: f } = a;
        const { by: x } = n;
        if (!x) {
          return;
        }
        const g = Rr(x);
        const { source: p, target: m } = s;
        const { center: v } = s.shape.current;
        const k = [];
        const y = [];
        P(() => {
          for (const d of f.droppables) {
            const { id: w } = d;
            if (
              !d.accepts(p) ||
              (w === (m == null ? undefined : m.id) && N(d)) ||
              !d.element
            ) {
              continue;
            }
            let S = d.shape;
            const j = new De(d.element, {
              getBoundingClientRect: (T) => _t(T, undefined, 0.2),
            });
            if (!!j.height && !!j.width) {
              if (
                (g == "down" && v.y + ee < j.center.y) ||
                (g == "up" && v.y - ee > j.center.y) ||
                (g == "left" && v.x - ee > j.center.x) ||
                (g == "right" && v.x + ee < j.center.x)
              ) {
                k.push(d);
                d.shape = j;
                y.push(() => (d.shape = S));
              }
            }
          }
        });
        n.preventDefault();
        c.disable();
        const C = c.computeCollisions(k, St);
        P(() => y.forEach((d) => d()));
        const [u] = C;
        if (!u) {
          return;
        }
        const { id: _ } = u;
        const { index: l, group: h } = p.sortable;
        i.setDropTarget(_).then(() => {
          const { source: d, target: w, shape: S } = s;
          if (!d || !N(d) || !S) {
            return;
          }
          const { index: j, group: T, target: L } = d.sortable;
          const D = l !== j || h !== T;
          const M = D ? L : w == null ? undefined : w.element;
          if (!M) {
            return;
          }
          jt(M);
          const J = new De(M);
          if (!J) {
            return;
          }
          const le = Oe.delta(
            J,
            Oe.from(S.current.boundingRectangle),
            d.alignment,
          );
          i.move({
            by: le,
          });
          if (D) {
            i.setDropTarget(d.id).then(() => c.enable());
          } else {
            c.enable();
          }
        });
      });
    });
    this.destroy = () => {
      r();
      t();
    };
  }
};
function Rr(e) {
  const { x: t, y: r } = e;
  if (t > 0) {
    return "right";
  }
  if (t < 0) {
    return "left";
  }
  if (r > 0) {
    return "down";
  }
  if (r < 0) {
    return "up";
  }
}
var Ar = Object.defineProperty;
var Tr = Object.defineProperties;
var Nr = Object.getOwnPropertyDescriptors;
var Ae = Object.getOwnPropertySymbols;
var zr = Object.prototype.hasOwnProperty;
var Lr = Object.prototype.propertyIsEnumerable;
var Te = (e, t, r) =>
  t in e
    ? Ar(e, t, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: r,
      })
    : (e[t] = r);
var $ = (e, t) => {
  for (var r in (t ||= {})) {
    if (zr.call(t, r)) {
      Te(e, r, t[r]);
    }
  }
  if (Ae) {
    for (var r of Ae(t)) {
      if (Lr.call(t, r)) {
        Te(e, r, t[r]);
      }
    }
  }
  return e;
};
var V = (e, t) => Tr(e, Nr(t));
function Mr(e, t, r) {
  if (t === r) {
    return e;
  }
  const n = e.slice();
  n.splice(r, 0, n.splice(t, 1)[0]);
  return n;
}
function te(e, t) {
  const r = String(t);
  if (Object.prototype.hasOwnProperty.call(e, r)) {
    return r;
  } else {
    return undefined;
  }
}
function fe(e) {
  return (
    "initialIndex" in e &&
    typeof e.initialIndex == "number" &&
    "index" in e &&
    typeof e.index == "number"
  );
}
function Br(e, t, r) {
  var n;
  const { source: s, target: i, canceled: c } = t.operation;
  if (!s || !i || c) {
    if ("preventDefault" in t) {
      t.preventDefault();
    }
    return e;
  }
  const f = (l, h) =>
    l === h || (l !== null && typeof l == "object" && "id" in l && l.id === h);
  if (Array.isArray(e)) {
    const l = e.findIndex((d) => f(d, s.id));
    const h = e.findIndex((d) => f(d, i.id));
    if (l === -1 || h === -1) {
      if (fe(s)) {
        const d = s.initialIndex;
        const w = s.index;
        if (d === w || d < 0 || d >= e.length) {
          if ("preventDefault" in t) {
            t.preventDefault();
          }
          return e;
        } else {
          return r(e, d, w);
        }
      }
      return e;
    }
    if (!c && "index" in s && typeof s.index == "number") {
      const d = s.index;
      if (d !== l) {
        return r(e, l, d);
      }
    }
    return r(e, l, h);
  }
  const x = Object.entries(e);
  let g = -1;
  let p;
  let m = -1;
  let v;
  for (const [l, h] of x) {
    if (g === -1) {
      g = h.findIndex((d) => f(d, s.id));
      if (g !== -1) {
        p = l;
      }
    }
    if (m === -1) {
      m = h.findIndex((d) => f(d, i.id));
      if (m !== -1) {
        v = l;
      }
    }
    if (g !== -1 && m !== -1) {
      break;
    }
  }
  if (g === -1 && fe(s)) {
    const l = s.initialGroup == null ? undefined : te(e, s.initialGroup);
    const h = s.initialIndex;
    const d = s.group == null ? undefined : te(e, s.group);
    const w = s.index;
    if (l == null || d == null || (l === d && h === w)) {
      if ("preventDefault" in t) {
        t.preventDefault();
      }
      return e;
    }
    if (l === d) {
      return V($({}, e), {
        [l]: r(e[l], h, w),
      });
    }
    const S = e[l][h];
    return V($({}, e), {
      [l]: [...e[l].slice(0, h), ...e[l].slice(h + 1)],
      [d]: [...e[d].slice(0, w), S, ...e[d].slice(w)],
    });
  }
  if (!s.manager) {
    return e;
  }
  const { dragOperation: k } = s.manager;
  const y =
    ((n = k.shape) == null ? undefined : n.current.center) ??
    k.position.current;
  if (v == null) {
    const l = te(e, i.id);
    if (l != null) {
      const h = i.shape && y.y > i.shape.center.y ? e[l].length : 0;
      v = l;
      m = h;
    }
  }
  if (p == null || v == null || (p === v && g === m)) {
    if (p != null && p === v && g === m && fe(s)) {
      const l = s.group == null ? undefined : te(e, s.group);
      const h = s.group != null && l !== p;
      const d = s.index !== g;
      if (h || d) {
        const w = s.group == null ? p : l;
        if (w != null) {
          if (p === w) {
            return V($({}, e), {
              [p]: r(e[p], g, s.index),
            });
          }
          const S = e[p][g];
          return V($({}, e), {
            [p]: [...e[p].slice(0, g), ...e[p].slice(g + 1)],
            [w]: [...e[w].slice(0, s.index), S, ...e[w].slice(s.index)],
          });
        }
      }
    }
    if ("preventDefault" in t) {
      t.preventDefault();
    }
    return e;
  }
  if (p === v) {
    return V($({}, e), {
      [p]: r(e[p], g, m),
    });
  }
  const u = i.shape && Math.round(y.y) > Math.round(i.shape.center.y) ? 1 : 0;
  const _ = e[p][g];
  return V($({}, e), {
    [p]: [...e[p].slice(0, g), ...e[p].slice(g + 1)],
    [v]: [...e[v].slice(0, m + u), _, ...e[v].slice(m + u)],
  });
}
function Wr(e, t) {
  return Br(e, t, Mr);
}
function Ne(e) {
  const t = new Map();
  for (const [, r] of e) {
    for (const n of r) {
      t.set(n.id, n.index);
    }
  }
  return t;
}
function ze(e, t, r) {
  var n;
  for (const [a, s] of t) {
    for (const i of s) {
      const c = e.get(i.id);
      if (
        i.index !== c ||
        i.group !== a ||
        (n = r.get(a)) == null ||
        !n.has(i)
      ) {
        return true;
      }
    }
  }
  return false;
}
var Le = "__default__";
var Gr = class extends Fe {
  constructor(e) {
    super(e);
    const t = () => {
      const n = new Map();
      for (const a of e.registry.droppables) {
        if (a instanceof ye) {
          const { sortable: s } = a;
          const { group: i } = s;
          let c = n.get(i);
          if (!c) {
            c = new Set();
            n.set(i, c);
          }
          c.add(s);
        }
      }
      return n;
    };
    const r = [
      e.monitor.addEventListener("dragover", (n, a) => {
        if (this.disabled) {
          return;
        }
        const { dragOperation: s } = a;
        const { source: i, target: c } = s;
        if (!N(i) || !N(c) || i.sortable === c.sortable) {
          return;
        }
        const f = t();
        const x = Ne(f);
        const g = i.sortable.group === c.sortable.group;
        const p = f.get(i.sortable.group);
        const m = g ? p : f.get(c.sortable.group);
        if (!!p && !!m) {
          queueMicrotask(() => {
            if (!n.defaultPrevented) {
              a.renderer.rendering.then(() => {
                const y = t();
                if (ze(x, f, y)) {
                  return;
                }
                const C = i.sortable.element;
                const u = c.sortable.element;
                if (!u || !C || (!g && c.id === i.sortable.group)) {
                  return;
                }
                const _ = re(p);
                const l = g ? _ : re(m);
                const h = i.sortable.group ?? Le;
                const d = c.sortable.group ?? Le;
                const w = {
                  [h]: _,
                  [d]: l,
                };
                const S = Wr(w, n);
                if (w === S) {
                  return;
                }
                const j = S[d].indexOf(i.sortable);
                const T = S[d].indexOf(c.sortable);
                a.collisionObserver.disable();
                Me(C, j, u, T);
                P(() => {
                  for (const [L, D] of S[h].entries()) {
                    D.index = L;
                  }
                  if (!g) {
                    for (const [L, D] of S[d].entries()) {
                      D.group = c.sortable.group;
                      D.index = L;
                    }
                  }
                });
                a.actions
                  .setDropTarget(i.id)
                  .then(() => a.collisionObserver.enable());
              });
            }
          });
        }
      }),
      e.monitor.addEventListener("dragend", (n, a) => {
        if (!n.canceled) {
          return;
        }
        const { dragOperation: s } = a;
        const { source: i } = s;
        if (N(i)) {
          if (
            i.sortable.initialIndex !== i.sortable.index ||
            i.sortable.initialGroup !== i.sortable.group
          ) {
            queueMicrotask(() => {
              const c = t();
              const f = Ne(c);
              const x = c.get(i.sortable.initialGroup);
              if (x) {
                a.renderer.rendering.then(() => {
                  const g = t();
                  if (ze(f, c, g)) {
                    return;
                  }
                  const p = re(x);
                  const m = re(x, Vr);
                  const v = i.sortable.element;
                  const k = m.indexOf(i.sortable);
                  const y = p[k];
                  const C = y == null ? undefined : y.element;
                  if (!!y && !!C && !!v) {
                    Me(v, y.index, C, i.index);
                    P(() => {
                      for (const u of c.values()) {
                        const _ = Array.from(u).values();
                        for (const l of _) {
                          l.index = l.initialIndex;
                          l.group = l.initialGroup;
                        }
                      }
                    });
                  }
                });
              }
            });
          }
        }
      }),
    ];
    this.destroy = () => {
      for (const n of r) {
        n();
      }
    };
  }
};
function Me(e, t, r, n) {
  const a = n < t ? "afterend" : "beforebegin";
  r.insertAdjacentElement(a, e);
}
function $r(e, t) {
  return e.index - t.index;
}
function Vr(e, t) {
  return e.initialIndex - t.initialIndex;
}
function re(e, t = $r) {
  return Array.from(e).sort(t);
}
var Be = [Er, Gr];
var rt = {
  duration: 250,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  idle: false,
};
function We(e) {
  if (typeof e == "boolean") {
    return {
      draggable: e,
      droppable: e,
    };
  } else {
    return {
      draggable: (e == null ? undefined : e.draggable) ?? false,
      droppable: (e == null ? undefined : e.droppable) ?? false,
    };
  }
}
var ne = new ht();
var nt;
var ot;
var z;
var xe;
var U;
var Q;
var ve;
var K;
ot = [Pe];
nt = [Pe];
var ie = class {
  constructor(e, t) {
    H(this, xe, Z(z, 8, this));
    Z(z, 11, this);
    H(this, U);
    H(this, Q);
    H(this, ve, Z(z, 12, this));
    Z(z, 15, this);
    H(this, K);
    this.register = () => {
      P(() => {
        var k;
        var y;
        if ((k = this.manager) != null) {
          k.registry.register(this.droppable);
        }
        if ((y = this.manager) != null) {
          y.registry.register(this.draggable);
        }
      });
      return () => this.unregister();
    };
    this.unregister = () => {
      P(() => {
        var k;
        var y;
        if ((k = this.manager) != null) {
          k.registry.unregister(this.droppable);
        }
        if ((y = this.manager) != null) {
          y.registry.unregister(this.draggable);
        }
      });
    };
    this.destroy = () => {
      P(() => {
        this.droppable.destroy();
        this.draggable.destroy();
      });
    };
    var r = e;
    var {
      effects: n = () => [],
      disabled: a,
      group: s,
      index: i,
      sensors: c,
      type: f,
      transition: x = rt,
      plugins: g,
    } = r;
    var p = Ir(r, [
      "effects",
      "disabled",
      "group",
      "index",
      "sensors",
      "type",
      "transition",
      "plugins",
    ]);
    const m = _e(g, Be);
    const v = We(a);
    this.droppable = new ye(
      ge(pe({}, p), {
        disabled: v.droppable,
      }),
      t,
      this,
    );
    this.draggable = new st(
      ge(pe({}, p), {
        disabled: v.draggable,
        plugins: m,
        effects: () => [
          () => {
            var k;
            var y;
            var C;
            const u =
              (k = this.manager) == null ? undefined : k.dragOperation.status;
            if (
              u != null &&
              u.initializing &&
              this.id ===
                ((C =
                  (y = this.manager) == null
                    ? undefined
                    : y.dragOperation.source) == null
                  ? undefined
                  : C.id)
            ) {
              ne.clear(this.manager);
            }
            if (u != null && u.dragging) {
              ne.set(
                this.manager,
                this.id,
                Se(() => ({
                  initialIndex: this.index,
                  initialGroup: this.group,
                })),
              );
            }
          },
          () => {
            const { index: k, group: y, manager: C } = this;
            const u = q(this, Q);
            const _ = q(this, U);
            if (k !== u || y !== _) {
              B(this, Q, k);
              B(this, U, y);
              this.animate();
            }
          },
          () => {
            var k;
            const { target: C } = this;
            const { isDragSource: u } = this.draggable;
            if (
              (((k = this.draggable.pluginConfig(qe)) == null
                ? undefined
                : k.feedback) ?? "default") === "move" &&
              u
            ) {
              this.droppable.disabled = !C;
            }
          },
          ...n(),
        ],
        type: f,
        sensors: c,
      }),
      t,
      this,
    );
    B(this, K, p.element);
    this.manager = t;
    this.index = i;
    B(this, Q, i);
    this.group = s;
    B(this, U, s);
    this.type = f;
    this.transition = x;
  }
  get initialIndex() {
    var e;
    return (
      ((e = ne.get(this.manager, this.id)) == null
        ? undefined
        : e.initialIndex) ?? this.index
    );
  }
  get initialGroup() {
    var e;
    return (
      ((e = ne.get(this.manager, this.id)) == null
        ? undefined
        : e.initialGroup) ?? this.group
    );
  }
  animate() {
    Se(() => {
      const { manager: e, transition: t } = this;
      const { shape: r } = this.droppable;
      if (!e) {
        return;
      }
      const { idle: n } = e.dragOperation.status;
      if (!!r && !!t && (!n || !!t.idle)) {
        e.renderer.rendering.then(() => {
          const { element: a } = this;
          if (!a) {
            return;
          }
          for (const g of a.getAnimations()) {
            if (
              "transitionProperty" in g &&
              (g.transitionProperty === "transform" ||
                g.transitionProperty === "translate" ||
                g.transitionProperty === "scale")
            ) {
              g.cancel();
            }
          }
          const s = this.refreshShape();
          if (!s) {
            return;
          }
          const i = {
            x: r.boundingRectangle.left - s.boundingRectangle.left,
            y: r.boundingRectangle.top - s.boundingRectangle.top,
          };
          const { translate: c } = mt(a);
          const f = je(a, c, false);
          const x = je(a, c);
          if (i.x || i.y) {
            const g = xt(vt(a))
              ? ge(pe({}, t), {
                  duration: 0,
                })
              : t;
            yt({
              element: a,
              keyframes: {
                translate: [
                  `${f.x + i.x}px ${f.y + i.y}px ${f.z}`,
                  `${x.x}px ${x.y}px ${x.z}`,
                ],
              },
              options: g,
            }).then(() => {
              if (!e.dragOperation.status.dragging) {
                this.droppable.shape = undefined;
              }
            });
          }
        });
      }
    });
  }
  get manager() {
    return this.draggable.manager;
  }
  set manager(e) {
    P(() => {
      this.draggable.manager = e;
      this.droppable.manager = e;
    });
  }
  set element(e) {
    P(() => {
      const t = q(this, K);
      const r = this.droppable.element;
      const n = this.draggable.element;
      if (!r || r === t) {
        this.droppable.element = e;
      }
      if (!n || n === t) {
        this.draggable.element = e;
      }
      B(this, K, e);
    });
  }
  get element() {
    const r = q(this, K);
    if (r) {
      return kt.get(r) ?? r ?? this.droppable.element;
    }
  }
  set target(e) {
    this.droppable.element = e;
  }
  get target() {
    return this.droppable.element;
  }
  set source(e) {
    this.draggable.element = e;
  }
  get source() {
    return this.draggable.element;
  }
  get disabled() {
    const { disabled: e } = this.draggable;
    const { disabled: t } = this.droppable;
    if (e === t) {
      return e;
    } else {
      return {
        draggable: e,
        droppable: t,
      };
    }
  }
  set plugins(e) {
    this.draggable.plugins = _e(e, Be);
  }
  set disabled(e) {
    const t = We(e);
    P(() => {
      this.droppable.disabled = t.droppable;
      this.draggable.disabled = t.draggable;
    });
  }
  set data(e) {
    P(() => {
      this.droppable.data = e;
      this.draggable.data = e;
    });
  }
  set handle(e) {
    this.draggable.handle = e;
  }
  set id(e) {
    this.droppable.id = e;
    this.draggable.id = e;
  }
  get id() {
    return this.droppable.id;
  }
  set sensors(e) {
    this.draggable.sensors = e;
  }
  set modifiers(e) {
    this.draggable.modifiers = e;
  }
  set collisionPriority(e) {
    this.droppable.collisionPriority = e;
  }
  set collisionDetector(e) {
    this.droppable.collisionDetector = e ?? Ct;
  }
  set alignment(e) {
    this.draggable.alignment = e;
  }
  get alignment() {
    return this.draggable.alignment;
  }
  set type(e) {
    P(() => {
      this.droppable.type = e;
      this.draggable.type = e;
    });
  }
  get type() {
    return this.draggable.type;
  }
  set accept(e) {
    this.droppable.accept = e;
  }
  get accept() {
    return this.droppable.accept;
  }
  get isDropTarget() {
    return this.droppable.isDropTarget;
  }
  get isDragSource() {
    return this.draggable.isDragSource;
  }
  get isDragging() {
    return this.draggable.isDragging;
  }
  get isDropping() {
    return this.draggable.isDropping;
  }
  get status() {
    return this.draggable.status;
  }
  refreshShape() {
    return this.droppable.refreshShape();
  }
  accepts(e) {
    return this.droppable.accepts(e);
  }
};
z = Dr();
xe = new WeakMap();
U = new WeakMap();
Q = new WeakMap();
ve = new WeakMap();
K = new WeakMap();
et(z, 4, "index", ot, ie, xe);
et(z, 4, "group", nt, ie, ve);
Pr(z, ie);
var st = class extends bt {
  constructor(e, t, r) {
    super(e, t);
    this.sortable = r;
  }
  get index() {
    return this.sortable.index;
  }
  get initialIndex() {
    return this.sortable.initialIndex;
  }
  get group() {
    return this.sortable.group;
  }
  get initialGroup() {
    return this.sortable.initialGroup;
  }
};
var ye = class extends ft {
  constructor(e, t, r) {
    super(e, t);
    this.sortable = r;
  }
  get index() {
    return this.sortable.index;
  }
  get group() {
    return this.sortable.group;
  }
};
var Kr = Object.defineProperty;
var Hr = Object.defineProperties;
var Fr = Object.getOwnPropertyDescriptors;
var Ge = Object.getOwnPropertySymbols;
var qr = Object.prototype.hasOwnProperty;
var Ur = Object.prototype.propertyIsEnumerable;
var $e = (e, t, r) =>
  t in e
    ? Kr(e, t, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: r,
      })
    : (e[t] = r);
var be = (e, t) => {
  for (var r in (t ||= {})) {
    if (qr.call(t, r)) {
      $e(e, r, t[r]);
    }
  }
  if (Ge) {
    for (var r of Ge(t)) {
      if (Ur.call(t, r)) {
        $e(e, r, t[r]);
      }
    }
  }
  return e;
};
var Qr = (e, t) => Hr(e, Fr(t));
function Yr(e) {
  const {
    accept: t,
    collisionDetector: r,
    collisionPriority: n,
    id: a,
    data: s,
    element: i,
    handle: c,
    index: f,
    group: x,
    disabled: g,
    modifiers: p,
    sensors: m,
    target: v,
    type: k,
    plugins: y,
  } = e;
  const C = be(be({}, rt), e.transition);
  const u = Dt(
    (l) =>
      new ie(
        Qr(be({}, e), {
          transition: C,
          register: false,
          handle: ce(c),
          element: ce(i),
          target: ce(v),
        }),
        l,
      ),
  );
  const _ = Ot(u, Xr);
  O(a, () => (u.id = a));
  Pt(() => {
    P(() => {
      u.group = x;
      u.index = f;
    });
  }, [u, x, f]);
  O(k, () => (u.type = k));
  O(t, () => (u.accept = t), undefined, G);
  O(s, () => s && (u.data = s));
  O(
    f,
    () => {
      var l;
      if (
        (l = u.manager) != null &&
        l.dragOperation.status.idle &&
        C != null &&
        C.idle
      ) {
        u.refreshShape();
      }
    },
    Et,
  );
  ue(c, (l) => (u.handle = l));
  ue(i, (l) => (u.element = l));
  ue(v, (l) => (u.target = l));
  O(g, () => (u.disabled = g ?? false), undefined, G);
  O(m, () => (u.sensors = m), undefined, G);
  O(r, () => (u.collisionDetector = r));
  O(n, () => (u.collisionPriority = n));
  O(y, () => (u.plugins = y), undefined, G);
  O(C, () => (u.transition = C), undefined, G);
  O(p, () => (u.modifiers = p), undefined, G);
  O(e.alignment, () => (u.alignment = e.alignment));
  return {
    sortable: _,
    get isDragging() {
      return _.isDragging;
    },
    get isDropping() {
      return _.isDropping;
    },
    get isDragSource() {
      return _.isDragSource;
    },
    get isDropTarget() {
      return _.isDropTarget;
    },
    handleRef: b.useCallback(
      (l) => {
        u.handle = l ?? undefined;
      },
      [u],
    ),
    ref: b.useCallback(
      (l) => {
        var h;
        var d;
        if (
          !!l ||
          (h = u.element) == null ||
          !h.isConnected ||
          ((d = u.manager) != null && !!d.dragOperation.status.idle)
        ) {
          u.element = l ?? undefined;
        }
      },
      [u],
    ),
    sourceRef: b.useCallback(
      (l) => {
        var h;
        var d;
        if (
          !!l ||
          (h = u.source) == null ||
          !h.isConnected ||
          ((d = u.manager) != null && !!d.dragOperation.status.idle)
        ) {
          u.source = l ?? undefined;
        }
      },
      [u],
    ),
    targetRef: b.useCallback(
      (l) => {
        var h;
        var d;
        if (
          !!l ||
          (h = u.target) == null ||
          !h.isConnected ||
          ((d = u.manager) != null && !!d.dragOperation.status.idle)
        ) {
          u.target = l ?? undefined;
        }
      },
      [u],
    ),
  };
}
function Xr(e, t, r) {
  return e === "isDragSource" && !r && !!t;
}
const Jr = [At, Tt];
const Zr = (e) => [
  ...e,
  qe.configure({
    dropAnimation: null,
  }),
];

export {
  N as isSortableDragEntity,
  Yr as useRecoveredSortable,
  Jr as notebookDragSensors,
  Zr as createNotebookDragPlugins,
};
