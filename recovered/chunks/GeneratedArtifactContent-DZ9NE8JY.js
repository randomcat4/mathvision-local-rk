import { j as m, B as y } from "./index-BM3ZINIl.js";
import { v as A, a as N, b, S as w } from "./SupportingArtifactCard-B1XjYGZI.js";
import { V as B } from "./ViewportVisualizationFigure-BIlJdDlH.js";
const l = (e, o) => {
    var r;
    return e === null || typeof e != "object" || Array.isArray(e)
      ? null
      : (((r = Object.entries(e).find(([s]) => s === o)) == null ? void 0 : r[1]) ?? null);
  },
  u = (e) => (typeof e == "string" ? e : null),
  C = (e) =>
    Array.isArray(e)
      ? e.flatMap((o) => {
          var c, i, p;
          const r = (c = u(l(o, "artifact_name"))) == null ? void 0 : c.trim(),
            s = (i = u(l(o, "caption"))) == null ? void 0 : i.trim(),
            a = (p = u(l(o, "alt_text"))) == null ? void 0 : p.trim(),
            d = u(l(o, "python_code"));
          return r && s && a ? [{ artifactName: r, caption: s, altText: a, pythonCode: d }] : [];
        })
      : [],
  M = ({ artifactRefs: e, artifacts: o, children: r, mathSyntax: s = "compatibility" }) => {
    const a = C(e),
      d = new Map(a.map((t) => [t.artifactName, t])),
      c = new Map(o.map((t) => [t.name, t])),
      i = new Set(),
      p = a.flatMap((t) => {
        const n = c.get(t.artifactName);
        return !n || i.has(n.name) ? [] : (i.add(n.name), [n]);
      });
    let g = 0,
      f = 0;
    return m.jsxs(y, {
      sx: A,
      children: [
        m.jsx(y, { sx: N, children: r }),
        p.length > 0 &&
          m.jsx(y, {
            sx: b,
            children: p.map((t) => {
              const n = d.get(t.name),
                x = (n == null ? void 0 : n.caption) ?? t.name,
                j = (n == null ? void 0 : n.altText) ?? x,
                h = n == null ? void 0 : n.pythonCode;
              return (t.kind === "image" && !!(t.attachmentId || t.href)) ||
                (t.kind !== "image" && t.kind !== "file" && !!t.attachmentId)
                ? ((g += 1),
                  m.jsx(
                    B,
                    {
                      altText: j,
                      artifact: t,
                      caption: x,
                      figureNumber: g,
                      mathSyntax: s,
                      pythonCode: h,
                    },
                    t.key,
                  ))
                : ((f += 1),
                  m.jsx(
                    w,
                    {
                      artifact: t,
                      caption: x,
                      mathSyntax: s,
                      pythonCode: h,
                      supportingFileNumber: f,
                    },
                    t.key,
                  ));
            }),
          }),
      ],
    });
  };
export { M as G };
