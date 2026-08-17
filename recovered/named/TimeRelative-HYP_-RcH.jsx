import { r as c, j as m } from "./index-BM3ZINIl.js";
import { M as _Component3 } from "./MChip-DiH8NXBU.js";
import { D as _Component2 } from "./attachmentsApi-BHgxfYft.js";
const d = [
  {
    unit: "year",
    seconds: 31536000,
  },
  {
    unit: "month",
    seconds: 2592000,
  },
  {
    unit: "week",
    seconds: 604800,
  },
  {
    unit: "day",
    seconds: 86400,
  },
  {
    unit: "hour",
    seconds: 3600,
  },
  {
    unit: "minute",
    seconds: 60,
  },
];
const l = () => {
  var e;
  return (
    ((e = globalThis.navigator) == null ? undefined : e.language) ?? "en-US"
  );
};
const T = (e = l()) => {
  const t = new Intl.RelativeTimeFormat(e, {
    numeric: "auto",
  });
  return (a) => {
    try {
      const r = new Date(a);
      if (isNaN(r.getTime())) {
        throw new Error("Invalid date input provided");
      }
      const s = Date.now();
      const n = r.getTime() - s;
      const o = Math.round(n / 1000);
      const u = Math.abs(o);
      for (const { unit: i, seconds: f } of d) {
        if (u >= f) {
          const v = Math.round(o / f);
          return t.format(v, i);
        }
      }
      return t.format(0, "second");
    } catch (r) {
      console.error("Error formatting relative time:", r);
      return "";
    }
  };
};
const g = (e) => {
  const t = new Date(e);
  if (isNaN(t.getTime())) {
    throw new Error("Invalid date input provided");
  }
  const a = Date.now();
  const r = t.getTime() - a;
  const s = Math.round(r / 1000);
  const n = Math.abs(s);
  for (const { seconds: o } of d) {
    if (n >= o) {
      return Math.abs(o * Math.ceil(n / o) - n);
    }
  }
  return 60 - n;
};
const _Component = ({ date: e, locale: t = l(), className: a, ...r }) => {
  const s = c.useMemo(() => T(t), [t]);
  const [n, o] = c.useState(() => s(e));
  const u = c.useMemo(() => new Date(e), [e]);
  const i = c.useRef(null);
  c.useEffect(() => {
    const f = () => {
      o(s(e));
    };
    if (i.current) {
      clearInterval(i.current);
    }
    i.current = setTimeout(f, g(e) * 1000);
    return () => {
      if (i.current) {
        clearInterval(i.current);
      }
    };
  }, [e, s, n]);
  return (
    <time
      dateTime={u.toISOString()}
      className={a}
      title={u.toLocaleString(t)}
      {...r}
    >
      {n}
    </time>
  );
};
const x = ({ time: e }) =>
  e ? (
    <_Component3
      label={<_Component date={e} />}
      size="xs"
      tooltip={<_Component2 value={e} />}
    />
  ) : (
    "-"
  );
export { _Component as T, x as a };
