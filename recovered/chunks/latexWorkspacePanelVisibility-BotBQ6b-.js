import { E as c } from "./index-BM3ZINIl.js";
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const t = [
    ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
    ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
    ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
    ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
    ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  n = c("locate-fixed", t),
  p = "ai-math.latex-workspace-content-panel-visibility.v1",
  a = { source: !0, pdf: !0, chat: !1 },
  d = { source: a.source, pdf: a.pdf, chat: a.chat },
  f = (e) => {
    const r = JSON.parse(e);
    if (!r || typeof r != "object" || Array.isArray(r))
      throw new Error("Saved LaTeX content panel visibility is invalid.");
    const o = r;
    if (typeof o.source != "boolean" || typeof o.pdf != "boolean" || typeof o.chat != "boolean")
      throw new Error("Saved LaTeX content panel visibility is invalid.");
    return { source: o.source, pdf: o.pdf, chat: o.chat };
  },
  i = (e) => (e.source || e.pdf ? e : { ...e, source: !0 }),
  u = (e) => {
    if (!e.source && !e.pdf)
      throw new Error("The LaTeX workspace must keep either Source or PDF visible.");
    return e.source && e.pdf ? "split" : e.pdf ? "pdf" : "source";
  },
  l = (e, r) => ({ ...e, source: r !== "pdf", pdf: r !== "source" });
export { d as D, n as L, p as a, i as e, u as g, f as p, l as s };
