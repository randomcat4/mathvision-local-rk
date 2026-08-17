import { j as m, B as _Component } from "./index-BM3ZINIl.js";
import { v as A, a as N, b, S as _Component2 } from "./SupportingArtifactCard-B1XjYGZI.js";
import { V as B } from "./ViewportVisualizationFigure-BIlJdDlH.js";
const l = (e, o) => {
  var r;
  if (e === null || typeof e != "object" || Array.isArray(e)) {
    return null;
  } else {
    return ((r = Object.entries(e).find(([s]) => s === o)) == null ? undefined : r[1]) ?? null;
  }
};
const u = e => typeof e == "string" ? e : null;
const C = e => Array.isArray(e) ? e.flatMap(o => {
  var c;
  var i;
  var p;
  const r = (c = u(l(o, "artifact_name"))) == null ? undefined : c.trim();
  const s = (i = u(l(o, "caption"))) == null ? undefined : i.trim();
  const a = (p = u(l(o, "alt_text"))) == null ? undefined : p.trim();
  const d = u(l(o, "python_code"));
  if (r && s && a) {
    return [{
      artifactName: r,
      caption: s,
      altText: a,
      pythonCode: d
    }];
  } else {
    return [];
  }
}) : [];
const M = ({
  artifactRefs: e,
  artifacts: o,
  children: r,
  mathSyntax: s = "compatibility"
}) => {
  const a = C(e);
  const d = new Map(a.map(t => [t.artifactName, t]));
  const c = new Map(o.map(t => [t.name, t]));
  const i = new Set();
  const p = a.flatMap(t => {
    const n = c.get(t.artifactName);
    if (!n || i.has(n.name)) {
      return [];
    } else {
      i.add(n.name);
      return [n];
    }
  });
  let g = 0;
  let f = 0;
  return <_Component sx={A}><_Component sx={N}>{r}</_Component>{p.length > 0 && <_Component sx={b}>{p.map(t => {
        const n = d.get(t.name);
        const x = (n == null ? undefined : n.caption) ?? t.name;
        const j = (n == null ? undefined : n.altText) ?? x;
        const h = n == null ? undefined : n.pythonCode;
        if (t.kind === "image" && (!!t.attachmentId || !!t.href) || t.kind !== "image" && t.kind !== "file" && !!t.attachmentId) {
          g += 1;
          return <B altText={j} artifact={t} caption={x} figureNumber={g} mathSyntax={s} pythonCode={h} key={t.key} />;
        } else {
          f += 1;
          return <_Component2 artifact={t} caption={x} mathSyntax={s} pythonCode={h} supportingFileNumber={f} key={t.key} />;
        }
      })}</_Component>}</_Component>;
};
export { M as G };
