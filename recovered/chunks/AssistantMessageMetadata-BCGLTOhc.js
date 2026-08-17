import { j as a, B as u } from "./index-BM3ZINIl.js";
import { C as M, a as h } from "./ThinkingElapsedLabel-DKCKD95O.js";
import { g as b } from "./assistantStructuredResponseLazy-CCAemx3W.js";
import { M as o } from "./MChip-DiH8NXBU.js";
const w = (l) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: l.spacing(0.8),
    flexWrap: "wrap",
    marginBottom: l.spacing(0.72),
    paddingInline: l.spacing(0.2),
  }),
  y = ({
    message: l,
    responseNumber: i,
    operation: n,
    availableModels: f,
    hasAdminRetryActivity: r = !1,
  }) => {
    var p, x;
    const e = l.modelId ?? ((p = l.usage) == null ? void 0 : p.modelId) ?? null,
      s = l.workflowMode === "agent",
      m = `Mode: ${(e ? (((x = f.find((j) => j.id === e)) == null ? void 0 : x.label) ?? "mathvision") : null) ?? "mathvision"}`,
      d = !s && !!e,
      c = !s && !!n,
      t = c && n ? b(n) : null,
      g = t ? a.jsx(h, { operation: n }) : void 0;
    return !i && !c && !d && !s && !r
      ? null
      : a.jsxs(u, {
          sx: w,
          children: [
            i &&
              a.jsx(o, { label: `Answer ${i}`, color: "primary", size: "xs", variant: "filled" }),
            s && a.jsx(o, { label: "Agent", color: "primary", size: "xs", variant: "filled" }),
            t && a.jsx(o, { label: t, variant: "filled", color: "primary", icon: g }),
            d && a.jsx(o, { label: m, variant: "filled", color: "secondary" }),
            r &&
              a.jsx(o, {
                label: "Retries detected",
                variant: "filled",
                color: "warning",
                size: "small",
              }),
            l.proChatCall &&
              a.jsx(o, {
                label: "Math Vision Pro",
                icon: a.jsx(M, {}),
                color: "warning",
                variant: "filled",
                size: "small",
                sx: { ml: "auto" },
              }),
          ],
        });
  };
export { y as A };
