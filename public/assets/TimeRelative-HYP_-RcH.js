import { r as c, j as m } from "./index-BM3ZINIl.js";
import { M as h } from "./MChip-DiH8NXBU.js";
import { D as p } from "./attachmentsApi-BHgxfYft.js";
const d = [
    { unit: "year", seconds: 31536e3 },
    { unit: "month", seconds: 2592e3 },
    { unit: "week", seconds: 604800 },
    { unit: "day", seconds: 86400 },
    { unit: "hour", seconds: 3600 },
    { unit: "minute", seconds: 60 },
  ],
  l = () => {
    var e;
    return ((e = globalThis.navigator) == null ? void 0 : e.language) ?? "en-US";
  },
  T = (e = l()) => {
    const t = new Intl.RelativeTimeFormat(e, { numeric: "auto" });
    return (a) => {
      try {
        const r = new Date(a);
        if (isNaN(r.getTime())) throw new Error("Invalid date input provided");
        const s = Date.now(),
          n = r.getTime() - s,
          o = Math.round(n / 1e3),
          u = Math.abs(o);
        for (const { unit: i, seconds: f } of d)
          if (u >= f) {
            const v = Math.round(o / f);
            return t.format(v, i);
          }
        return t.format(0, "second");
      } catch (r) {
        return (console.error("Error formatting relative time:", r), "");
      }
    };
  },
  g = (e) => {
    const t = new Date(e);
    if (isNaN(t.getTime())) throw new Error("Invalid date input provided");
    const a = Date.now(),
      r = t.getTime() - a,
      s = Math.round(r / 1e3),
      n = Math.abs(s);
    for (const { seconds: o } of d) if (n >= o) return Math.abs(o * Math.ceil(n / o) - n);
    return 60 - n;
  },
  w = ({ date: e, locale: t = l(), className: a, ...r }) => {
    const s = c.useMemo(() => T(t), [t]),
      [n, o] = c.useState(() => s(e)),
      u = c.useMemo(() => new Date(e), [e]),
      i = c.useRef(null);
    return (
      c.useEffect(() => {
        const f = () => {
          o(s(e));
        };
        return (
          i.current && clearInterval(i.current),
          (i.current = setTimeout(f, g(e) * 1e3)),
          () => {
            i.current && clearInterval(i.current);
          }
        );
      }, [e, s, n]),
      m.jsx("time", {
        dateTime: u.toISOString(),
        className: a,
        title: u.toLocaleString(t),
        ...r,
        children: n,
      })
    );
  },
  x = ({ time: e }) =>
    e
      ? m.jsx(h, { label: m.jsx(w, { date: e }), size: "xs", tooltip: m.jsx(p, { value: e }) })
      : "-";
export { w as T, x as a };
