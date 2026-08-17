import { aE as f, aF as y, aG as E, r as m, aH as v, aI as g, aw as w } from "./index-BM3ZINIl.js";
function M(e, r, t, s, c) {
  const [n, d] = m.useState(() => (c && t ? t(e).matches : s ? s(e).matches : r));
  return (
    v(() => {
      if (!t) return;
      const o = t(e),
        a = () => {
          d(o.matches);
        };
      return (
        a(),
        o.addEventListener("change", a),
        () => {
          o.removeEventListener("change", a);
        }
      );
    }, [e, t]),
    n
  );
}
const Q = { ...E },
  p = Q.useSyncExternalStore;
function S(e, r, t, s, c) {
  const n = m.useCallback(() => r, [r]),
    d = m.useMemo(() => {
      if (c && t) return () => t(e).matches;
      if (s !== null) {
        const { matches: i } = s(e);
        return () => i;
      }
      return n;
    }, [n, e, s, c, t]),
    [o, a] = m.useMemo(() => {
      if (t === null) return [n, () => () => {}];
      const i = t(e);
      return [
        () => i.matches,
        (u) => (
          i.addEventListener("change", u),
          () => {
            i.removeEventListener("change", u);
          }
        ),
      ];
    }, [n, t, e]);
  return p(a, o, d);
}
function h(e = {}) {
  const { themeId: r } = e;
  return function (s, c = {}) {
    let n = f();
    n && r && (n = n[r] || n);
    const d = typeof window < "u" && typeof window.matchMedia < "u",
      {
        defaultMatches: o = !1,
        matchMedia: a = d ? window.matchMedia : null,
        ssrMatchMedia: l = null,
        noSsr: i = !1,
      } = y({ name: "MuiUseMediaQuery", props: c, theme: n });
    let u = typeof s == "function" ? s(n) : s;
    return (
      (u = u.replace(/^@media( ?)/m, "")),
      u.includes("print") &&
        console.warn(
          [
            "MUI: You have provided a `print` query to the `useMediaQuery` hook.",
            "Using the print media query to modify print styles can lead to unexpected results.",
            "Consider using the `displayPrint` field in the `sx` prop instead.",
            "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print.",
          ].join(`
`),
        ),
      (p !== void 0 ? S : M)(u, o, a, l, i)
    );
  };
}
h();
const b = h({ themeId: g }),
  U = (e = "md") => {
    const r = w();
    return b(r.breakpoints.down(e));
  };
export { b as a, U as u };
