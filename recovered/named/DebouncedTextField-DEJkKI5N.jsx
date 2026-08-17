import { E as y, r as e, j as C } from "./index-BM3ZINIl.js";
import { T as E } from "./TextField-D8vc_sXz.js";
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x = [
  [
    "path",
    {
      d: "M10 5H3",
      key: "1qgfaw",
    },
  ],
  [
    "path",
    {
      d: "M12 19H3",
      key: "yhmn1j",
    },
  ],
  [
    "path",
    {
      d: "M14 3v4",
      key: "1sua03",
    },
  ],
  [
    "path",
    {
      d: "M16 17v4",
      key: "1q0r14",
    },
  ],
  [
    "path",
    {
      d: "M21 12h-9",
      key: "1o4lsq",
    },
  ],
  [
    "path",
    {
      d: "M21 19h-5",
      key: "1rlt1p",
    },
  ],
  [
    "path",
    {
      d: "M21 5h-7",
      key: "1oszz2",
    },
  ],
  [
    "path",
    {
      d: "M8 10v4",
      key: "tgpxqk",
    },
  ],
  [
    "path",
    {
      d: "M8 12H3",
      key: "a7s4jb",
    },
  ],
];
const R = y("sliders-horizontal", x);
const T = 300;
function D({
  debounceMs: r = T,
  defaultValue: h,
  onBlur: c,
  onChange: l,
  value: u,
  ...p
}) {
  if (!Number.isFinite(r) || r < 0) {
    throw new Error(
      "DebouncedTextField debounceMs must be a non-negative number.",
    );
  }
  const a = u !== undefined;
  const [k, f] = e.useState(u);
  const t = e.useRef(null);
  const i = e.useRef(null);
  const d = e.useRef(l);
  e.useEffect(() => {
    d.current = l;
  }, [l]);
  const o = e.useCallback(() => {
    if (t.current !== null) {
      clearTimeout(t.current);
      t.current = null;
    }
    i.current = null;
  }, []);
  const s = e.useCallback(() => {
    if (t.current !== null) {
      clearTimeout(t.current);
      t.current = null;
    }
    const n = i.current;
    i.current = null;
    if (n && d.current) {
      d.current(n);
    }
  }, []);
  e.useEffect(() => {
    if (a) {
      f(u);
      o();
    }
  }, [o, a, u]);
  e.useEffect(() => o, [o]);
  const m = e.useCallback(
    (n) => {
      if (a) {
        f(n.target.value);
      }
      i.current = n;
      if (r === 0) {
        s();
        return;
      }
      if (t.current !== null) {
        clearTimeout(t.current);
      }
      t.current = setTimeout(s, r);
    },
    [r, s, a],
  );
  const g = e.useCallback(
    (n) => {
      s();
      if (c != null) {
        c(n);
      }
    },
    [s, c],
  );
  return (
    <E
      {...p}
      defaultValue={h}
      value={a ? k : u}
      onBlur={g}
      onChange={l ? m : undefined}
    />
  );
}
export { D, R as S };
