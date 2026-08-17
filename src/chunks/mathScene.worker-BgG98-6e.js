(function () {
  "use strict";
  const w = (t) => t,
    $ = (t) => t,
    nt = (t) => (Number.isFinite(t) ? t : Number.NaN),
    v = (t) => (n, o) => nt(w(t(n, o))),
    rt = (t) => {
      if (!Number.isFinite(t)) return t;
      const n = Math.floor(t),
        o = t - n;
      return o < 0.5 ? n : o > 0.5 ? n + 1 : n % 2 === 0 ? n : n + 1;
    },
    S = (t) => {
      if (!Array.isArray(t)) return () => t;
      const n = t[0];
      if (n === "var") {
        const e = t[1];
        return (r) => r[e];
      }
      if (n === "param") {
        const e = t[1];
        return (r, a) => a[e];
      }
      if (n === "const") {
        const e = t[1],
          r = e === "pi" ? Math.PI : e === "tau" ? Math.PI * 2 : Math.E;
        return () => r;
      }
      const o = S(t[1]);
      if (n === "neg") return v((e, r) => -w(o(e, r)));
      if (n === "abs") return v((e, r) => Math.abs(w(o(e, r))));
      if (n === "sqrt") return v((e, r) => Math.sqrt(w(o(e, r))));
      if (n === "exp") return v((e, r) => Math.exp(w(o(e, r))));
      if (n === "log") return v((e, r) => Math.log(w(o(e, r))));
      if (n === "log10") return v((e, r) => Math.log10(w(o(e, r))));
      if (n === "sin") return v((e, r) => Math.sin(w(o(e, r))));
      if (n === "cos") return v((e, r) => Math.cos(w(o(e, r))));
      if (n === "tan") return v((e, r) => Math.tan(w(o(e, r))));
      if (n === "asin") return v((e, r) => Math.asin(w(o(e, r))));
      if (n === "acos") return v((e, r) => Math.acos(w(o(e, r))));
      if (n === "atan") return v((e, r) => Math.atan(w(o(e, r))));
      if (n === "sinh") return v((e, r) => Math.sinh(w(o(e, r))));
      if (n === "cosh") return v((e, r) => Math.cosh(w(o(e, r))));
      if (n === "tanh") return v((e, r) => Math.tanh(w(o(e, r))));
      if (n === "floor") return v((e, r) => Math.floor(w(o(e, r))));
      if (n === "ceil") return v((e, r) => Math.ceil(w(o(e, r))));
      if (n === "round") return v((e, r) => rt(w(o(e, r))));
      if (n === "sign") return v((e, r) => Math.sign(w(o(e, r))));
      if (n === "not") return (e, r) => !$(o(e, r));
      const i = S(t[2]);
      if (n === "add") return v((e, r) => w(o(e, r)) + w(i(e, r)));
      if (n === "sub") return v((e, r) => w(o(e, r)) - w(i(e, r)));
      if (n === "mul") return v((e, r) => w(o(e, r)) * w(i(e, r)));
      if (n === "div") return v((e, r) => w(o(e, r)) / w(i(e, r)));
      if (n === "pow") return v((e, r) => Math.pow(w(o(e, r)), w(i(e, r))));
      if (n === "mod")
        return v((e, r) => {
          const a = w(o(e, r)),
            c = w(i(e, r));
          return a - Math.floor(a / c) * c;
        });
      if (n === "min") return v((e, r) => Math.min(w(o(e, r)), w(i(e, r))));
      if (n === "max") return v((e, r) => Math.max(w(o(e, r)), w(i(e, r))));
      if (n === "atan2") return v((e, r) => Math.atan2(w(o(e, r)), w(i(e, r))));
      if (n === "eq") return (e, r) => o(e, r) === i(e, r);
      if (n === "ne") return (e, r) => o(e, r) !== i(e, r);
      if (n === "lt") return (e, r) => w(o(e, r)) < w(i(e, r));
      if (n === "le") return (e, r) => w(o(e, r)) <= w(i(e, r));
      if (n === "gt") return (e, r) => w(o(e, r)) > w(i(e, r));
      if (n === "ge") return (e, r) => w(o(e, r)) >= w(i(e, r));
      if (n === "and") return (e, r) => $(o(e, r)) && $(i(e, r));
      if (n === "or") return (e, r) => $(o(e, r)) || $(i(e, r));
      const s = S(t[3]);
      if (n === "clamp") return v((e, r) => Math.min(w(s(e, r)), Math.max(w(i(e, r)), w(o(e, r)))));
      if (n === "select") return (e, r) => ($(o(e, r)) ? i(e, r) : s(e, r));
      throw new Error(`Unsupported validated Math Scene operator ${n}.`);
    },
    Y = (t, n) => {
      if (t.type === "bool") {
        if (typeof n != "boolean") throw new Error(`${t.label} requires a boolean value.`);
        return n;
      }
      if (t.type === "enum") {
        if (typeof n != "string" || !t.options.includes(n))
          throw new Error(`${t.label} requires one of its declared options.`);
        return n;
      }
      if (typeof n != "number" || !Number.isFinite(n))
        throw new Error(`${t.label} requires a finite number.`);
      if (t.type === "int" && !Number.isSafeInteger(n))
        throw new Error(`${t.label} requires a safe integer.`);
      if (t.minimum !== void 0 && n < t.minimum)
        throw new Error(`${t.label} must be at least ${t.minimum}.`);
      if (t.maximum !== void 0 && n > t.maximum)
        throw new Error(`${t.label} must be at most ${t.maximum}.`);
      return n;
    },
    ot = (t, n, o = L(t)) => {
      const i = Object.fromEntries(t.parameters.map((s) => [s.id, Y(s, n[s.id] ?? s.default)]));
      return o.flatMap((s) =>
        s.evaluate({}, i) === !0
          ? []
          : [{ id: s.id, message: s.message, parameterIds: s.parameterIds }],
      );
    },
    L = (t) =>
      t.constraints.map((n) => ({
        id: n.id,
        message: n.message,
        parameterIds: n.parameterIds,
        evaluate: S(n.expression),
      })),
    F = Math.PI * 2,
    it = 4,
    st = () => {
      const t = new Error("Math Scene evaluation was superseded.");
      return ((t.name = "MathSceneEvaluationCancelledError"), t);
    },
    at = (t) => {
      let n = t >>> 0;
      return () => {
        n = (n + 1831565813) >>> 0;
        let o = n;
        return (
          (o = Math.imul(o ^ (o >>> 15), o | 1)),
          (o ^= o + Math.imul(o ^ (o >>> 7), o | 61)),
          ((o ^ (o >>> 14)) >>> 0) / 4294967296
        );
      };
    },
    ct = (t) => {
      let n = null;
      return () => {
        if (n !== null) {
          const r = n;
          return ((n = null), r);
        }
        let o = 0;
        for (; o <= Number.EPSILON;) o = t();
        const i = t(),
          s = Math.sqrt(-2 * Math.log(o)),
          e = F * i;
        return ((n = s * Math.sin(e)), s * Math.cos(e));
      };
    },
    H = (t, n, o, i) => {
      const s = new Float64Array(o * 2 + 1);
      let e = 0;
      for (let c = -o; c <= o; c += 1) {
        const u = F * c,
          d = Math.exp(-(u * u) / (2 * n * t));
        ((e += d), (s[c + o] = e));
      }
      const r = F * (o + 1),
        a = Math.exp(-(r * r) / (2 * n * t));
      return {
        supportMayBeTruncated: (2 * a) / (e + 2 * a) > 1e-12,
        sample: () => {
          const c = i() * e;
          let u = 0,
            d = s.length - 1;
          for (; u < d;) {
            const p = Math.floor((u + d) / 2);
            s[p] > c ? (d = p) : (u = p + 1);
          }
          return u - o;
        },
      };
    },
    G = (t, n, o, i, s) => {
      const e = new Float64Array(o);
      for (let c = 1; c < o; c += 1) e[c] = e[c - 1] + s() * i;
      const r = e[o - 1],
        a = new Float64Array(o);
      for (let c = 0; c < o; c += 1) {
        const u = c / (o - 1);
        a[c] = t + e[c] - u * r + u * F * n;
      }
      return ((a[o - 1] = t + F * n), a);
    },
    ut = ({ computation: t, diffusion: n, duration: o, seed: i, start: s, steps: e }) =>
      JSON.stringify([t.id, t.pathCount, t.featuredPath, t.windingLimit, n, o, i, s[0], s[1], e]),
    lt = async ({
      cacheKey: t,
      computation: n,
      diffusion: o,
      duration: i,
      execution: s,
      seed: e,
      start: r,
      steps: a,
    }) => {
      const c = o * i;
      if (!Number.isFinite(c) || c <= 0)
        throw new Error(`${n.id} diffusion times timeline duration must be finite and positive.`);
      const u = at(e),
        d = ct(u),
        p = H(i, o, n.windingLimit, u),
        M = H(i, o, n.windingLimit, u),
        f = n.pathCount * a,
        m = new Float64Array(f),
        y = new Float64Array(f),
        h = new Float64Array(a * 2),
        l = Math.sqrt(c / (a - 1));
      for (let b = 0; b < n.pathCount; b += 1) {
        if (b % it === 0 && (await s.yieldControl(), s.shouldCancel())) throw st();
        const g = p.sample(),
          C = M.sample(),
          E = G(r[0], g, a, l, d),
          I = G(r[1], C, a, l, d);
        for (let N = 0; N < a; N += 1) {
          const B = b * a + N,
            U = Math.round((E[N] - r[0]) / F),
            P = Math.round((I[N] - r[1]) / F);
          if (!Number.isFinite(U) || !Number.isFinite(P))
            throw new Error(`${n.id} produced a non-finite winding number.`);
          ((m[B] = U),
            (y[B] = P),
            b === n.featuredPath && ((h[N * 2] = E[N]), (h[N * 2 + 1] = I[N])));
        }
      }
      return {
        cacheKey: t,
        featuredPath: h,
        pathCount: n.pathCount,
        steps: a,
        warnings:
          p.supportMayBeTruncated || M.supportMayBeTruncated
            ? [{ code: "winding_support_truncated", computationId: n.id }]
            : [],
        windingU: m,
        windingV: y,
      };
    },
    ft = (t, n, o) => {
      if (n - t + 1 <= o) return { lower: t, upper: n, overflow: !1 };
      const s = o - 2;
      let e = -Math.floor((s - 1) / 2),
        r = e + s - 1;
      return (
        n < r && ((r = n), (e = r - s + 1)),
        t > e && ((e = t), (r = e + s - 1)),
        { lower: e, upper: r, overflow: !0 }
      );
    },
    dt = (t, n) => JSON.stringify([t.id, n, t.maxBins]),
    mt = ({ cacheKey: t, computation: n, source: o, values: i }) => {
      let s = 0,
        e = 0;
      for (const f of i) ((s = Math.min(s, f)), (e = Math.max(e, f)));
      if (e - s + 1 > n.maxBins && n.maxBins <= 2) {
        const f = Math.floor(s + (e - s) / 2),
          m = n.maxBins === 1 ? [`${s} … ${e}`] : [`${s} … ${f}`, `${f + 1} … ${e}`],
          y = new Int32Array(o.steps * n.maxBins);
        for (let h = 0; h < o.pathCount; h += 1)
          for (let l = 0; l < o.steps; l += 1) {
            const b = i[h * o.steps + l],
              g = n.maxBins === 1 || b <= f ? 0 : 1;
            y[l * n.maxBins + g] += 1;
          }
        return {
          bins: m,
          cacheKey: t,
          counts: y,
          rowWidth: n.maxBins,
          steps: o.steps,
          warnings: [
            { code: "histogram_overflow", computationId: n.id, count: o.pathCount * o.steps },
          ],
        };
      }
      const a = ft(s, e, n.maxBins),
        c = a.upper - a.lower + 1,
        u = c + (a.overflow ? 2 : 0),
        d = a.overflow
          ? [
              `< ${a.lower}`,
              ...Array.from({ length: c }, (f, m) => String(a.lower + m)),
              `> ${a.upper}`,
            ]
          : Array.from({ length: c }, (f, m) => String(a.lower + m)),
        p = new Int32Array(o.steps * u);
      let M = 0;
      for (let f = 0; f < o.pathCount; f += 1)
        for (let m = 0; m < o.steps; m += 1) {
          const y = i[f * o.steps + m];
          let h;
          (a.overflow && y < a.lower
            ? ((h = 0), (M += 1))
            : a.overflow && y > a.upper
              ? ((h = u - 1), (M += 1))
              : (h = y - a.lower + (a.overflow ? 1 : 0)),
            (p[m * u + h] += 1));
        }
      return {
        bins: d,
        cacheKey: t,
        counts: p,
        rowWidth: u,
        steps: o.steps,
        warnings: M > 0 ? [{ code: "histogram_overflow", computationId: n.id, count: M }] : [],
      };
    },
    ht = (t) => t instanceof Error && t.name === "MathSceneEvaluationCancelledError",
    pt = (t) => {
      const n = t.target.map((r, a) => r - t.position[a]),
        o = Math.hypot(...n),
        i = Math.hypot(...t.up);
      if (!Number.isFinite(o) || o === 0 || !Number.isFinite(i) || i === 0) return !1;
      const s = n.reduce((r, a, c) => r + (a / o) * (t.up[c] / i), 0),
        e = 2 * o * Math.tan((t.fov * Math.PI) / 360);
      return Number.isFinite(s) && Math.abs(s) < 1 - 1e-6 && Number.isFinite(e) && e > 0;
    },
    wt = (t) => ({
      cache: new Map(),
      datasets: t.map((n) => ({
        dataset: n,
        expressions:
          n.type === "transform"
            ? new Map(
                n.operations.flatMap((o, i) =>
                  o.type === "derive" || o.type === "filter"
                    ? [[i, { operation: o, evaluate: S(o.expression) }]]
                    : [],
                ),
              )
            : new Map(),
      })),
    }),
    D = async (t) => {
      if ((await t.yieldControl(), !t.shouldCancel())) return;
      const n = new Error("Math Scene evaluation was superseded.");
      throw ((n.name = "MathSceneEvaluationCancelledError"), n);
    },
    gt = (t, n) => JSON.stringify(t.parameterIds.map((o) => [o, n[o]])),
    yt = (t) => Object.fromEntries(Object.entries(t).map(([n, o]) => [n, [...o]])),
    J = (t, n) => Object.fromEntries(Object.entries(t).map(([o, i]) => [o, i[n]])),
    j = (t, n, o) => t.variableIds.some((i) => n[i][o] === null),
    bt = (t) => (typeof t == "number" && !Number.isFinite(t) ? null : t),
    X = (t, n) => Object.fromEntries(Object.entries(t).map(([o, i]) => [o, n.map((s) => i[s])])),
    Mt = (t, n) =>
      t === null
        ? n === null
          ? 0
          : 1
        : n === null
          ? -1
          : typeof t == "number" && typeof n == "number"
            ? t - n
            : typeof t == "boolean" && typeof n == "boolean"
              ? Number(t) - Number(n)
              : String(t).localeCompare(String(n)),
    vt = (t, n) => {
      const o = [],
        i = [];
      let s = 0,
        e = 0;
      for (const r of t) {
        const a = typeof r == "number" && Number.isFinite(r) ? r : null;
        if ((i.push(a), a !== null && ((s += a), (e += 1)), i.length > n)) {
          const c = i.shift();
          c != null && ((s -= c), (e -= 1));
        }
        o.push(e === 0 ? null : s / e);
      }
      return o;
    },
    Ct = (t, n) => {
      const o = t.flatMap((u, d) => {
        const p = n[d];
        return typeof u == "number" &&
          Number.isFinite(u) &&
          typeof p == "number" &&
          Number.isFinite(p)
          ? [[u, p]]
          : [];
      });
      if (o.length < 2) return t.map(() => null);
      const i = o.reduce((u, [d]) => u + d, 0) / o.length,
        s = o.reduce((u, [, d]) => u + d, 0) / o.length,
        e = o.reduce((u, [d, p]) => u + (d - i) * (p - s), 0),
        r = o.reduce((u, [d]) => u + (d - i) ** 2, 0);
      if (!Number.isFinite(r) || r === 0) return t.map(() => null);
      const a = e / r,
        c = s - a * i;
      return t.map((u) => (typeof u == "number" && Number.isFinite(u) ? c + a * u : null));
    },
    Et = async (t, n, o, i) => {
      const s = t.dataset;
      let e = yt(n.columns),
        r = n.rowCount;
      for (const [a, c] of s.operations.entries()) {
        const u = t.expressions.get(a);
        if (c.type === "filter") {
          if (!u) throw new Error(`Math Scene dataset ${s.id} filter was not compiled.`);
          const d = [];
          for (let p = 0; p < r; p += 1)
            (p > 0 && p % 4096 === 0 && (await D(i)),
              !j(c, e, p) && u.evaluate(J(e, p), o) === !0 && d.push(p));
          ((e = X(e, d)), (r = d.length));
          continue;
        }
        if (c.type === "sort") {
          const d = Array.from({ length: r }, (p, M) => M);
          (d.sort((p, M) => {
            const f = e[c.column][p],
              m = e[c.column][M];
            if (f === null) return m === null ? 0 : 1;
            if (m === null) return -1;
            const y = Mt(f, m);
            return c.direction === "ascending" ? y : -y;
          }),
            (e = X(e, d)));
          continue;
        }
        if (c.type === "derive") {
          if (!u) throw new Error(`Math Scene dataset ${s.id} derivation was not compiled.`);
          const d = [];
          for (let p = 0; p < r; p += 1)
            (p > 0 && p % 4096 === 0 && (await D(i)),
              d.push(j(c, e, p) ? null : bt(u.evaluate(J(e, p), o))));
          e[c.id] = d;
          continue;
        }
        if (c.type === "rolling_mean") {
          e[c.output] = vt(e[c.column], c.window);
          continue;
        }
        e[c.output] = Ct(e[c.x], e[c.y]);
      }
      return { columns: e, rowCount: r };
    },
    Nt = (t) => (t === null ? "null" : `${typeof t}:${JSON.stringify(t)}`),
    St = (t, n) => {
      const o = new Map();
      for (let e = 0; e < n.rowCount; e += 1) {
        const r = n.columns[t.groupBy][e],
          a = Nt(r),
          c = o.get(a) ?? { group: r, values: [], count: 0 };
        if (((c.count += 1), t.column)) {
          const u = n.columns[t.column][e];
          typeof u == "number" && Number.isFinite(u) && c.values.push(u);
        }
        o.set(a, c);
      }
      const i = [],
        s = [];
      for (const e of o.values()) {
        if ((i.push(e.group), t.operation === "count")) {
          s.push(e.count);
          continue;
        }
        if (e.values.length === 0) {
          s.push(null);
          continue;
        }
        t.operation === "sum"
          ? s.push(e.values.reduce((r, a) => r + a, 0))
          : t.operation === "mean"
            ? s.push(e.values.reduce((r, a) => r + a, 0) / e.values.length)
            : t.operation === "min"
              ? s.push(e.values.reduce((r, a) => Math.min(r, a)))
              : s.push(e.values.reduce((r, a) => Math.max(r, a)));
      }
      return { columns: { group: i, value: s }, rowCount: i.length };
    },
    It = (t, n) => `${Number(t.toPrecision(6))}–${Number(n.toPrecision(6))}`,
    xt = (t, n) => {
      const o = n.columns[t.column].filter((a) => typeof a == "number" && Number.isFinite(a));
      if (o.length === 0) return { columns: { bin: [], count: [] }, rowCount: 0 };
      const i = o.reduce((a, c) => Math.min(a, c)),
        s = o.reduce((a, c) => Math.max(a, c));
      if (i === s) return { columns: { bin: [String(i)], count: [o.length] }, rowCount: 1 };
      const e = (s - i) / t.binCount,
        r = Array.from({ length: t.binCount }, () => 0);
      for (const a of o) {
        const c = Math.min(t.binCount - 1, Math.floor((a - i) / e));
        r[c] += 1;
      }
      return {
        columns: { bin: r.map((a, c) => It(i + c * e, i + (c + 1) * e)), count: r },
        rowCount: t.binCount,
      };
    },
    Ft = async (t, n, o) => {
      const i = new Map();
      for (const s of t.datasets) {
        const { dataset: e } = s,
          r = e.type === "table" ? null : i.get(e.source);
        if (e.type !== "table" && !r)
          throw new Error(`Math Scene dataset ${e.id} source is unavailable.`);
        const a = [e.type, e.id, (r == null ? void 0 : r.cacheKey) ?? "", gt(e, n)].join("|");
        let c = t.cache.get(e.id);
        if ((c == null ? void 0 : c.cacheKey) !== a) {
          let u;
          (e.type === "table"
            ? (u = {
                columns: Object.fromEntries(e.columns.map((d) => [d.id, [...d.values]])),
                rowCount: e.rowCount,
              })
            : e.type === "transform"
              ? (u = await Et(s, r, n, o))
              : e.type === "aggregate"
                ? (u = St(e, r))
                : (u = xt(e, r)),
            (c = { id: e.id, cacheKey: a, ...u }),
            t.cache.set(e.id, c));
        }
        (i.set(e.id, c), await D(o));
      }
      return i;
    },
    Q = (t, n) => `${t}\0${n}`,
    _t = (t) => {
      const n = new Map();
      for (const i of t.panels)
        if (i.type !== "chart")
          for (const s of i.objects) {
            const e =
              s.type === "points" || s.type === "data_points" || s.type === "data_curve"
                ? []
                : s.type === "explicit_curve" || s.type === "explicit_surface"
                  ? [S(s.expression)]
                  : s.expressions.map(S);
            n.set(Q(i.id, s.id), { evaluators: e, object: s, panel: i });
          }
      const o = new Map();
      for (const i of t.computations)
        i.type === "brownian_bridge_flat_torus" &&
          o.set(i.id, {
            computation: i,
            diffusion: S(i.diffusion),
            seed: S(i.seed),
            start: i.start.map(S),
          });
      return {
        brownianCache: new Map(),
        brownianComputations: o,
        constraints: L(t),
        datasets: wt(t.datasets),
        duration: t.timeline ? S(t.timeline.duration) : null,
        histogramCache: new Map(),
        objects: n,
        scene: t,
      };
    },
    $t = (t, n, o) => {
      const i = new Set(t.parameters.map(({ id: r }) => r));
      for (const r of Object.keys(n))
        if (!i.has(r)) throw new Error(`Math Scene evaluation received unknown parameter ${r}.`);
      const s = Object.fromEntries(t.parameters.map((r) => [r.id, Y(r, n[r.id] ?? r.default)])),
        e = ot(t, s, o);
      if (e.length > 0) throw new Error(e.map(({ message: r }) => r).join(" "));
      return s;
    },
    O = (t) => {
      const n = t.map(Math.fround);
      return n.every(Number.isFinite) ? n : null;
    },
    T = (t, n) => {
      const o = n[0],
        i = n[1],
        s = n[2] ?? 0;
      ((t.hasPoint = !0),
        (t.min[0] = Math.min(t.min[0], o)),
        (t.min[1] = Math.min(t.min[1], i)),
        (t.min[2] = Math.min(t.min[2], s)),
        (t.max[0] = Math.max(t.max[0], o)),
        (t.max[1] = Math.max(t.max[1], i)),
        (t.max[2] = Math.max(t.max[2], s)));
    },
    W = (t, n, o) => {
      const i = new Uint8Array(Math.max(0, n.length - 1));
      for (let s = 0; s < n.length - 1; s += 1) {
        if (((!n[s] || !n[s + 1]) && (i[s] = 1), i[s])) continue;
        let e = 0;
        for (let r = 0; r < o; r += 1) {
          const a = t[(s + 1) * o + r] - t[s * o + r];
          e += a * a;
        }
        Number.isFinite(e) || (i[s] = 1);
      }
      return i;
    },
    At = (t, n, o, i, s) => {
      const e = W(t, n, o),
        r = new Float64Array(e.length);
      r.fill(Number.NaN);
      for (let a = 0; a < e.length; a += 1) {
        if (e[a]) continue;
        let c = 0;
        for (let d = 0; d < o; d += 1) {
          const p = t[(a + 1) * o + d] - t[a * o + d];
          c += p * p;
        }
        const u = Math.sqrt(c);
        Number.isFinite(u) && (r[a] = u);
      }
      for (let a = 0; a < e.length; a += 1) {
        const c = r[a];
        if (e[a] || !Number.isFinite(c) || c === 0) continue;
        const u = [r[a - 1], r[a + 1]].filter((h) => Number.isFinite(h));
        if (u.length === 0) continue;
        const d = Math.min(...u);
        if (c <= Math.max(d * 4, 1e-8)) continue;
        const p = (a + 0.5) / (n.length - 1),
          M = (1 - p) * s.min + p * s.max,
          f = i(M);
        if (!f) {
          e[a] = 1;
          continue;
        }
        let m = 0;
        for (let h = 0; h < o; h += 1) {
          const l = (t[a * o + h] + t[(a + 1) * o + h]) / 2,
            b = f[h] - l;
          m += b * b;
        }
        const y = Math.sqrt(m);
        y > c * 0.25 && y > d * 2 && (e[a] = 1);
      }
      return e;
    },
    x = async (t) => {
      if ((await t.yieldControl(), t.shouldCancel())) {
        const n = new Error("Math Scene evaluation was superseded.");
        throw ((n.name = "MathSceneEvaluationCancelledError"), n);
      }
    },
    k = (t) => Math.max(1, Math.floor(5e4 / Math.max(1, t))),
    Pt = async (t, n, o, i, s, e, r) => {
      const a = n.sampling[s],
        c = new Float32Array(a * t.dimension),
        u = new Uint8Array(a),
        d = n.domain[0],
        p = k(n.expressionNodeCount),
        M = (m) => {
          const y = { [d.variable]: m },
            h = n.type === "explicit_curve" ? [m, o[0](y, i)] : o.map((l) => l(y, i));
          return O(h);
        };
      let f = 0;
      for (let m = 0; m < a; m += 1) {
        m > 0 && m % p === 0 && (await x(r));
        const y = m / (a - 1),
          h = (1 - y) * d.min + y * d.max,
          l = M(h);
        if (!l) {
          f += 1;
          continue;
        }
        ((u[m] = 1), T(e, l));
        for (let b = 0; b < t.dimension; b += 1) c[m * t.dimension + b] = l[b];
      }
      return {
        id: n.id,
        kind: "curve",
        dimension: t.dimension,
        breakAfter: At(c, u, t.dimension, M, d),
        positions: c,
        reveal: "all",
        valid: u,
        invalidSampleCount: f,
        sampleCount: a,
      };
    },
    Ot = async (t, n, o, i, s, e, r) => {
      const a = i.steps,
        c = new Float32Array(a * t.dimension),
        u = new Uint8Array(a),
        d = k(n.expressionNodeCount);
      let p = 0;
      for (let M = 0; M < a; M += 1) {
        M > 0 && M % d === 0 && (await x(r));
        const f = {
            [n.variables[0]]: i.featuredPath[M * 2],
            [n.variables[1]]: i.featuredPath[M * 2 + 1],
          },
          m = o.map((h) => h(f, s)),
          y = O(m);
        if (!y) {
          p += 1;
          continue;
        }
        ((u[M] = 1), T(e, y));
        for (let h = 0; h < t.dimension; h += 1) c[M * t.dimension + h] = y[h];
      }
      return {
        id: n.id,
        kind: "curve",
        dimension: t.dimension,
        breakAfter: W(c, u, t.dimension),
        positions: c,
        reveal: n.reveal,
        valid: u,
        invalidSampleCount: p,
        sampleCount: a,
      };
    },
    Tt = (t, n, o, i, s) => {
      const e = n[o * 3],
        r = n[o * 3 + 1],
        a = n[o * 3 + 2],
        c = n[i * 3] - e,
        u = n[i * 3 + 1] - r,
        d = n[i * 3 + 2] - a,
        p = n[s * 3] - e,
        M = n[s * 3 + 1] - r,
        f = n[s * 3 + 2] - a,
        m = u * f - d * M,
        y = d * p - c * f,
        h = c * M - u * p,
        l = Math.hypot(m, y, h);
      if (!(!Number.isFinite(l) || l === 0))
        for (const b of [o, i, s])
          ((t[b * 3] += m / l), (t[b * 3 + 1] += y / l), (t[b * 3 + 2] += h / l));
    },
    Vt = async (t, n, o, i, s, e) => {
      const r = t.sampling[i],
        a = r * r,
        c = new Float32Array(a * 3),
        u = new Uint8Array(a),
        [d, p] = t.domain,
        M = k(t.expressionNodeCount);
      let f = 0;
      for (let l = 0; l < r; l += 1) {
        const b = l / (r - 1),
          g = (1 - b) * p.min + b * p.max;
        for (let C = 0; C < r; C += 1) {
          const E = C / (r - 1),
            I = (1 - E) * d.min + E * d.max,
            N = l * r + C;
          N > 0 && N % M === 0 && (await x(e));
          const B = { [d.variable]: I, [p.variable]: g },
            U = t.type === "explicit_surface" ? [I, g, n[0](B, o)] : n.map((Kt) => Kt(B, o)),
            P = O(U);
          if (!P) {
            f += 1;
            continue;
          }
          ((u[N] = 1), T(s, P), c.set(P, N * 3));
        }
      }
      const m = [];
      for (let l = 0; l < r - 1; l += 1) {
        l > 0 && l % 16 === 0 && (await x(e));
        for (let b = 0; b < r - 1; b += 1) {
          const g = l * r + b,
            C = g + 1,
            E = g + r,
            I = E + 1;
          (u[g] && u[C] && u[E] && m.push(g, C, E), u[C] && u[I] && u[E] && m.push(C, I, E));
        }
      }
      const y = Uint32Array.from(m),
        h = new Float32Array(a * 3);
      for (let l = 0; l < y.length; l += 3)
        (l > 0 && l % 12288 === 0 && (await x(e)), Tt(h, c, y[l], y[l + 1], y[l + 2]));
      for (let l = 0; l < a; l += 1) {
        l > 0 && l % 4096 === 0 && (await x(e));
        const b = l * 3,
          g = Math.hypot(h[b], h[b + 1], h[b + 2]);
        Number.isFinite(g) && g > 0 && ((h[b] /= g), (h[b + 1] /= g), (h[b + 2] /= g));
      }
      return {
        id: t.id,
        kind: "surface",
        indices: y,
        normals: h,
        positions: c,
        invalidSampleCount: f,
        sampleCount: a,
      };
    },
    Bt = (t, n, o) => {
      const i = n.points.flatMap((s) => {
        const e = O(s);
        return e ? (T(o, e), [e]) : [];
      });
      return {
        id: n.id,
        kind: "points",
        dimension: t.dimension,
        positions: Float32Array.from(i.flat()),
        invalidSampleCount: n.points.length - i.length,
        sampleCount: n.points.length,
      };
    },
    qt = (t, n, o, i) => {
      const s = new Float32Array(o.rowCount * t.dimension),
        e = new Uint8Array(o.rowCount);
      let r = 0;
      for (let u = 0; u < o.rowCount; u += 1) {
        const d = n.coordinates.map((M) => o.columns[M][u]),
          p = O(d.map((M) => (typeof M == "number" ? M : Number.NaN)));
        if (!p) {
          r += 1;
          continue;
        }
        ((e[u] = 1), T(i, p), s.set(p, u * t.dimension));
      }
      if (n.type === "data_curve")
        return {
          id: n.id,
          kind: "curve",
          dimension: t.dimension,
          breakAfter: W(s, e, t.dimension),
          positions: s,
          reveal: "all",
          valid: e,
          invalidSampleCount: r,
          sampleCount: o.rowCount,
        };
      const a = new Float32Array((o.rowCount - r) * t.dimension);
      let c = 0;
      for (let u = 0; u < o.rowCount; u += 1)
        e[u] && (a.set(s.subarray(u * t.dimension, (u + 1) * t.dimension), c), (c += t.dimension));
      return {
        id: n.id,
        kind: "points",
        dimension: t.dimension,
        positions: a,
        invalidSampleCount: r,
        sampleCount: o.rowCount,
      };
    },
    zt = (t, n) => {
      const o = n.get(t.computation);
      if (!o || t.output !== "featured_path")
        throw new Error(
          `Math Scene computed curve source ${t.computation}.${t.output} is unavailable.`,
        );
      return o;
    },
    q = (t) => "dataset" in t,
    _ = (t, n) => {
      if (!q(t)) throw new Error("Math Scene expected a dataset column reference.");
      const o = n.get(t.dataset),
        i = o == null ? void 0 : o.columns[t.column];
      if (!o || !i)
        throw new Error(`Math Scene dataset column ${t.dataset}.${t.column} is unavailable.`);
      return [...i];
    },
    Ut = () => ({
      hasPoint: !1,
      max: [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
      min: [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
    }),
    Dt = (t, n, o) => {
      if (!q(t.x)) {
        if (t.type !== "bar" || q(t.y))
          throw new Error(`Math Scene chart mark ${t.id} has incompatible computation data.`);
        const s = o.get(t.x.computation),
          e = o.get(t.y.computation);
        if (!s || !e || t.x.output !== "bins" || t.y.output !== "counts")
          throw new Error(`Math Scene chart mark ${t.id} data is unavailable.`);
        return {
          id: t.id,
          kind: "bar",
          timeline: !0,
          bins: [...s.bins],
          counts: new Int32Array(e.counts),
          rowWidth: e.rowWidth,
          steps: e.steps,
        };
      }
      const i = _(t.x, n);
      return "lower" in t
        ? { id: t.id, kind: "band", x: i, lower: _(t.lower, n), upper: _(t.upper, n) }
        : "z" in t
          ? { id: t.id, kind: t.type, x: i, y: _(t.y, n), z: _(t.z, n) }
          : {
              id: t.id,
              kind: t.type,
              timeline: !1,
              x: i,
              y: _(t.y, n),
              ...(t.errorY ? { errorY: _(t.errorY, n) } : {}),
            };
    },
    Wt = async (t, n, o, i) => {
      const { scene: s } = t,
        e = $t(s, n, t.constraints),
        r = t.duration ? t.duration({}, e) : null;
      if (s.timeline && (!Number.isFinite(r) || (r ?? 0) <= 0))
        throw new Error("Math Scene timeline duration must be positive.");
      const a = await Ft(t.datasets, e, i),
        c = new Map(),
        u = new Map(),
        d = [];
      for (const f of s.computations) {
        if (f.type !== "brownian_bridge_flat_torus") continue;
        const m = t.brownianComputations.get(f.id);
        if (!m || !s.timeline || r === null)
          throw new Error(`Math Scene computation ${f.id} was not compiled.`);
        const y = m.seed({}, e),
          h = m.diffusion({}, e),
          l = m.start.map((C) => C({}, e));
        if (!Number.isSafeInteger(y) || y < 0 || y > 4294967295)
          throw new Error(`${f.id} seed must be an unsigned 32-bit integer.`);
        if (!Number.isFinite(h) || h <= 0) throw new Error(`${f.id} diffusion must be positive.`);
        if (!Number.isFinite(h * r) || h * r <= 0)
          throw new Error(`${f.id} diffusion times timeline duration must be finite and positive.`);
        if (!l.every(Number.isFinite)) throw new Error(`${f.id} start must be finite.`);
        const b = ut({
          computation: f,
          diffusion: h,
          duration: r,
          seed: y,
          start: l,
          steps: s.timeline.steps,
        });
        let g = t.brownianCache.get(f.id);
        ((g == null ? void 0 : g.cacheKey) !== b && (g = void 0),
          g ||
            ((g = await lt({
              cacheKey: b,
              computation: f,
              diffusion: h,
              duration: r,
              execution: i,
              seed: y,
              start: l,
              steps: s.timeline.steps,
            })),
            t.brownianCache.set(f.id, g)),
          c.set(f.id, g),
          d.push(...g.warnings));
      }
      for (const f of s.computations) {
        if (f.type !== "integer_histogram") continue;
        const m = c.get(f.source.computation);
        if (!m) throw new Error(`Math Scene histogram ${f.id} source is unavailable.`);
        const y = f.source.output === "winding_u" ? m.windingU : m.windingV,
          h = dt(f, m.cacheKey);
        let l = t.histogramCache.get(f.id);
        ((l == null ? void 0 : l.cacheKey) !== h && (l = void 0),
          l ||
            ((l = mt({ cacheKey: h, computation: f, source: m, values: y })),
            t.histogramCache.set(f.id, l)),
          u.set(f.id, l),
          d.push(...l.warnings));
      }
      const p = [],
        M = new Map();
      for (const f of s.panels) {
        if (i.shouldCancel()) {
          const l = new Error("Math Scene evaluation was superseded.");
          throw ((l.name = "MathSceneEvaluationCancelledError"), l);
        }
        if (f.type === "chart") {
          const l = f.marks.flatMap((b) => {
            if (!b.visible) return [];
            const g = Dt(b, a, u);
            if (
              ("lower" in g
                ? g.x.length
                : "z" in g
                  ? g.z.length
                  : "counts" in g
                    ? g.rowWidth
                    : g.y.length) === 0
            )
              return (d.push({ code: "empty_runtime_result", panelId: f.id, objectId: b.id }), []);
            if (g.kind === "bar" && g.timeline) {
              const E = f.marks.find(({ id: N }) => N === b.id);
              if (!E || E.type !== "bar" || q(E.y)) return [g];
              const I = M.get(E.y.computation);
              I ? (g.counts = I) : M.set(E.y.computation, g.counts);
            }
            return [g];
          });
          (l.length === 0 && d.push({ code: "empty_runtime_result", panelId: f.id }),
            p.push({ id: f.id, kind: "chart", marks: l }),
            await x(i));
          continue;
        }
        const m = Ut(),
          y = f.view.camera;
        f.type === "geometry_3d" &&
          y &&
          "position" in y &&
          !pt(y) &&
          d.push({ code: "degenerate_camera", panelId: f.id });
        const h = [];
        for (const l of f.objects) {
          if (!l.visible) continue;
          const b = t.objects.get(Q(f.id, l.id));
          if (!b) throw new Error(`Math Scene object ${f.id}.${l.id} was not compiled.`);
          let g;
          if (l.type === "points") g = Bt(f, l, m);
          else if (l.type === "data_points" || l.type === "data_curve") {
            const C = a.get(l.source);
            if (!C) throw new Error(`Math Scene object ${l.id} dataset is unavailable.`);
            g = qt(f, l, C, m);
          } else
            l.type === "computed_curve"
              ? (g = await Ot(f, l, b.evaluators, zt(l.source, c), e, m, i))
              : l.type === "explicit_curve" || l.type === "parametric_curve"
                ? (g = await Pt(f, l, b.evaluators, e, o, m, i))
                : (g = await Vt(l, b.evaluators, e, o, m, i));
          if ((h.push(g), i.shouldCancel())) {
            const C = new Error("Math Scene evaluation was superseded.");
            throw ((C.name = "MathSceneEvaluationCancelledError"), C);
          }
          h.length % 8 === 0 && (await x(i));
        }
        h.length > 0 && h.length % 8 !== 0 && (await x(i));
        for (const l of h)
          l.invalidSampleCount > 0 &&
            d.push({
              code: "non_finite_samples",
              panelId: f.id,
              objectId: l.id,
              count: l.invalidSampleCount,
              sampleCount: l.sampleCount,
            });
        (m.hasPoint || d.push({ code: "empty_runtime_result", panelId: f.id }),
          p.push({
            id: f.id,
            kind: f.type,
            objects: h,
            bounds: m.hasPoint ? { min: m.min, max: m.max } : null,
          }));
      }
      return { panels: p, quality: o, warnings: d };
    },
    kt = (t) => {
      const n = t.panels.flatMap((o) =>
        o.kind === "chart"
          ? o.marks.flatMap((i) => (i.kind === "bar" && i.timeline ? [i.counts.buffer] : []))
          : o.objects.flatMap((i) =>
              i.kind === "curve"
                ? [i.positions.buffer, i.valid.buffer, i.breakAfter.buffer]
                : i.kind === "surface"
                  ? [i.positions.buffer, i.normals.buffer, i.indices.buffer]
                  : [i.positions.buffer],
            ),
      );
      return [...new Set(n)];
    },
    z = self;
  let R = null,
    V = 0,
    A = null,
    K = !1;
  const Z = new MessageChannel(),
    tt = [];
  Z.port1.onmessage = () => {
    var t;
    (t = tt.shift()) == null || t();
  };
  const Rt = () =>
      new Promise((t) => {
        (tt.push(t), Z.port2.postMessage(null));
      }),
    et = async () => {
      if (!K) {
        K = !0;
        try {
          for (; A;) {
            const t = A;
            A = null;
            try {
              if (!R) throw new Error("Math Scene worker was evaluated before initialization.");
              const n = await Wt(R, t.parameters, t.quality, {
                shouldCancel: () => t.id !== V,
                yieldControl: Rt,
              });
              if (t.id !== V) continue;
              const o = { type: "evaluation", id: t.id, ok: !0, evaluation: n };
              z.postMessage(o, kt(n));
            } catch (n) {
              if (ht(n) || t.id !== V) continue;
              const o = {
                type: "evaluation",
                id: t.id,
                ok: !1,
                error:
                  n instanceof Error ? n.message : "Math Scene evaluation failed unexpectedly.",
              };
              z.postMessage(o);
            }
          }
        } finally {
          ((K = !1), A && et());
        }
      }
    };
  z.onmessage = (t) => {
    const n = t.data;
    if (n.type === "initialize") {
      ((R = _t(n.scene)), (V = 0), (A = null));
      const o = { type: "initialized" };
      z.postMessage(o);
      return;
    }
    ((V = n.id), (A = n), et());
  };
})();
