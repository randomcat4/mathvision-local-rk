import { E as b, r as y, j as r, R as j, V as T, _, t as c } from "./index-BM3ZINIl.js";
import { C as E } from "./MChip-DiH8NXBU.js";
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I = [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }],
  ],
  R = b("copy", I),
  k = 2e3,
  v = async (a, { showErrorToast: t = !0 } = {}) => {
    var e;
    if (!((e = navigator.clipboard) != null && e.writeText))
      return (t && c.error("Clipboard copy isn't available in this browser."), !1);
    try {
      return (await navigator.clipboard.writeText(a), !0);
    } catch {
      return (t && c.error("We couldn't copy that text. Please try again."), !1);
    }
  },
  B = ({
    content: a,
    disabled: t = !1,
    label: e,
    tooltipLabel: f,
    iconOnly: C = !1,
    icon: l,
    message: x = "Text copied",
    size: h,
    sx: i,
    variant: m,
  }) => {
    const [o, p] = y.useState(!1);
    if (
      (y.useEffect(() => {
        if (!o) return;
        const n = window.setTimeout(() => {
          p(!1);
        }, k);
        return () => {
          window.clearTimeout(n);
        };
      }, [o]),
      !a.trim() && !t)
    )
      return null;
    const s = f ?? e,
      w = o ? "Copied" : s,
      u = async () => {
        t || !(await v(a)) || (p(!0), c.success(x));
      },
      d = o ? r.jsx(E, {}) : l ? j.createElement(l, { fontSize: "small" }) : r.jsx(R, {});
    return C
      ? r.jsx(T, {
          tooltip: w,
          type: "button",
          "aria-label": s,
          disabled: t,
          disableRipple: !0,
          onClick: () => {
            u();
          },
          sx: [{ boxShadow: (n) => n.shadows[8] }, ...(Array.isArray(i) ? i : [i])],
          color: "inherit",
          children: d,
        })
      : r.jsx(_, {
          type: "button",
          "aria-label": s,
          title: s,
          disabled: t,
          disableRipple: !0,
          onClick: () => {
            u();
          },
          color: "secondary",
          size: h,
          startIcon: d,
          sx: i,
          variant: m,
          children: r.jsx("span", { children: o ? "Copied" : e }),
        });
  };
export { B as C, R as a, v as c };
