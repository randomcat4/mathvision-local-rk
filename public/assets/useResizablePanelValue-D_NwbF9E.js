import { E as _, r as t } from "./index-BM3ZINIl.js";
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j = [
    ["path", { d: "m7 11 2-2-2-2", key: "1lz0vl" }],
    ["path", { d: "M11 13h4", key: "1p7l4v" }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ],
  G = _("square-terminal", j),
  F = (o) => (typeof o == "function" ? o() : o),
  M = (o) => JSON.parse(o),
  O = ({
    storageKey: o,
    defaultValue: w,
    parse: d = M,
    serialize: f = JSON.stringify,
    shouldRemove: c,
    writeOnSet: C = !0,
    readErrorMessage: I = "Could not read localStorage value.",
    writeErrorMessage: m = "Could not save localStorage value.",
  }) => {
    const p = t.useCallback(() => {
        if (typeof window > "u") return F(w);
        try {
          const n = window.localStorage.getItem(o);
          return n === null ? F(w) : d(n);
        } catch (n) {
          return (console.warn(I, n), F(w));
        }
      }, [w, d, I, o]),
      u = t.useCallback(
        (n) => {
          if (!(typeof window > "u"))
            try {
              if (c != null && c(n)) {
                window.localStorage.removeItem(o);
                return;
              }
              window.localStorage.setItem(o, f(n));
            } catch (a) {
              console.warn(m, a);
            }
        },
        [f, c, o, m],
      ),
      [S, P] = t.useState(p),
      b = t.useRef(S);
    t.useEffect(() => {
      const n = p();
      ((b.current = n), P(n));
    }, [p]);
    const N = t.useCallback(
        (n) => {
          ((b.current = n), P(n), C && u(n));
        },
        [C, u],
      ),
      v = t.useCallback(
        (n) => {
          const a = n(b.current);
          Object.is(a, b.current) || ((b.current = a), P(a), C && u(a));
        },
        [C, u],
      ),
      k = t.useCallback(() => {
        const n = p();
        return ((b.current = n), P(n), n);
      }, [p]);
    return { value: S, setValue: N, updateValue: v, readValue: p, writeValue: u, reloadValue: k };
  },
  Q = ({
    storageKey: o,
    defaultValue: w,
    minValue: d,
    maxValue: f,
    resizeEdge: c,
    getResizeStartMetrics: C,
    normalizeValue: I,
    getAriaValue: m,
    getAriaValueText: p,
    step: u,
    pageStep: S,
    storedValueErrorMessage: P,
    resizeMetricsErrorMessage: b,
    readErrorMessage: N,
    writeErrorMessage: v,
  }) => {
    const k = t.useCallback(
        (e) => {
          const r = I(e);
          return Math.min(f, Math.max(d, r));
        },
        [f, d, I],
      ),
      n = t.useCallback(
        (e) => {
          const r = JSON.parse(e);
          if (typeof r != "number" || !Number.isFinite(r)) throw new Error(P);
          return k(r);
        },
        [k, P],
      ),
      { value: a, setValue: V } = O({
        storageKey: o,
        defaultValue: w,
        parse: n,
        readErrorMessage: N,
        writeErrorMessage: v,
      }),
      [R, A] = t.useState(a),
      l = t.useRef(a),
      x = t.useRef(null),
      D = t.useRef(null),
      [g, X] = t.useState(!1),
      s = t.useCallback(
        (e) => {
          const r = k(e);
          return ((l.current = r), A((h) => (h === r ? h : r)), r);
        },
        [k],
      ),
      i = t.useCallback(() => {
        D.current !== null && (window.cancelAnimationFrame(D.current), (D.current = null));
      }, []),
      z = t.useCallback(
        (e) => {
          const r = k(e);
          ((l.current = r),
            D.current === null &&
              (D.current = window.requestAnimationFrame(() => {
                ((D.current = null), s(l.current));
              })));
        },
        [k, s],
      );
    (t.useEffect(() => {
      (i(), s(a));
    }, [i, s, a]),
      t.useEffect(
        () => () => {
          i();
        },
        [i],
      ),
      t.useEffect(() => {
        if (!g || typeof document > "u") return;
        const e = document.body.style.cursor,
          r = document.body.style.userSelect;
        return (
          (document.body.style.cursor = "col-resize"),
          (document.body.style.userSelect = "none"),
          () => {
            ((document.body.style.cursor = e), (document.body.style.userSelect = r));
          }
        );
      }, [g]));
    const y = t.useCallback(
        (e) => {
          i();
          const r = s(e);
          V(r);
        },
        [i, s, V],
      ),
      J = t.useCallback(
        (e) => {
          if (e.button !== 0) return;
          const r = C(e.currentTarget, l.current);
          if (
            !Number.isFinite(r.value) ||
            !Number.isFinite(r.pixelsPerValue) ||
            r.pixelsPerValue <= 0
          )
            throw new Error(b);
          (e.preventDefault(),
            e.currentTarget.setPointerCapture(e.pointerId),
            i(),
            (x.current = {
              pointerId: e.pointerId,
              startX: e.clientX,
              startValue: s(r.value),
              pixelsPerValue: r.pixelsPerValue,
            }),
            X(!0));
        },
        [i, C, b, s],
      ),
      T = t.useCallback(
        (e) => {
          const r = x.current;
          if (!r || r.pointerId !== e.pointerId) return;
          const h = c === "left" ? r.startX - e.clientX : e.clientX - r.startX,
            H = r.startValue + h / r.pixelsPerValue;
          z(H);
        },
        [c, z],
      ),
      L = t.useCallback(
        (e) => {
          const r = x.current;
          !r ||
            r.pointerId !== e.pointerId ||
            ((x.current = null),
            e.currentTarget.hasPointerCapture(e.pointerId) &&
              e.currentTarget.releasePointerCapture(e.pointerId),
            i(),
            s(l.current),
            X(!1),
            V(l.current));
        },
        [i, s, V],
      ),
      q = t.useCallback(
        (e) => {
          const r = c === "left" ? u : -u,
            h = c === "left" ? -u : u;
          if (e.key === "ArrowLeft") {
            (e.preventDefault(), y(l.current + r));
            return;
          }
          if (e.key === "ArrowRight") {
            (e.preventDefault(), y(l.current + h));
            return;
          }
          if (e.key === "PageDown") {
            (e.preventDefault(), y(l.current - S));
            return;
          }
          if (e.key === "PageUp") {
            (e.preventDefault(), y(l.current + S));
            return;
          }
          if (e.key === "Home") {
            (e.preventDefault(), y(d));
            return;
          }
          e.key === "End" && (e.preventDefault(), y(f));
        },
        [f, d, S, y, c, u],
      ),
      U = t.useCallback(() => {
        y(w);
      }, [w, y]),
      E = t.useMemo(
        () => ({
          "aria-orientation": "vertical",
          "aria-valuemax": m(f),
          "aria-valuemin": m(d),
          "aria-valuenow": m(R),
          "aria-valuetext": p(R),
          "data-resizing": g ? "true" : void 0,
          onDoubleClick: U,
          onKeyDown: q,
          onLostPointerCapture: L,
          onPointerCancel: L,
          onPointerDown: J,
          onPointerMove: T,
          onPointerUp: L,
          role: "separator",
          tabIndex: 0,
        }),
        [m, p, q, J, L, T, g, f, d, U, R],
      );
    return { value: R, resizeHandleProps: E };
  };
export { G as S, O as a, Q as u };
