import {
  E as b,
  r as y,
  j as r,
  R as j,
  V as T,
  _,
  t as c,
} from "./index-BM3ZINIl.js";
import { C as E } from "./MChip-DiH8NXBU.js";
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I = [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
];
const R = b("copy", I);
const k = 2000;
const v = async (a, { showErrorToast: t = true } = {}) => {
  var e;
  if ((e = navigator.clipboard) == null || !e.writeText) {
    if (t) {
      c.error("Clipboard copy isn't available in this browser.");
    }
    return false;
  }
  try {
    await navigator.clipboard.writeText(a);
    return true;
  } catch {
    if (t) {
      c.error("We couldn't copy that text. Please try again.");
    }
    return false;
  }
};
const B = ({
  content: a,
  disabled: t = false,
  label: e,
  tooltipLabel: f,
  iconOnly: C = false,
  icon: l,
  message: x = "Text copied",
  size: h,
  sx: i,
  variant: m,
}) => {
  const [o, p] = y.useState(false);
  y.useEffect(() => {
    if (!o) {
      return;
    }
    const n = window.setTimeout(() => {
      p(false);
    }, k);
    return () => {
      window.clearTimeout(n);
    };
  }, [o]);
  if (!a.trim() && !t) {
    return null;
  }
  const s = f ?? e;
  const w = o ? "Copied" : s;
  const u = async () => {
    if (!t && !!(await v(a))) {
      p(true);
      c.success(x);
    }
  };
  const d = o ? (
    <E />
  ) : l ? (
    j.createElement(l, {
      fontSize: "small",
    })
  ) : (
    <R />
  );
  if (C) {
    return (
      <T
        tooltip={w}
        type="button"
        aria-label={s}
        disabled={t}
        disableRipple={true}
        onClick={() => {
          u();
        }}
        sx={[
          {
            boxShadow: (n) => n.shadows[8],
          },
          ...(Array.isArray(i) ? i : [i]),
        ]}
        color="inherit"
      >
        {d}
      </T>
    );
  } else {
    return (
      <_
        type="button"
        aria-label={s}
        title={s}
        disabled={t}
        disableRipple={true}
        onClick={() => {
          u();
        }}
        color="secondary"
        size={h}
        startIcon={d}
        sx={i}
        variant={m}
      >
        <span>{o ? "Copied" : e}</span>
      </_>
    );
  }
};
export { B as C, R as a, v as c };
