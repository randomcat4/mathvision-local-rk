import { r as v, t as m, ai as E } from "./index-BM3ZINIl.js";
import { u as f, a as h, b as w } from "./useLatexQueries-DBpKOPUv.js";
import { a as L } from "./latexNaming-BAjxoZ-G.js";
const P = 180;
const j = 52428800;
const b = (a, r = "_blank", t = document) => {
  const e = t.createElement("form");
  e.action = "https://www.overleaf.com/docs";
  e.method = "post";
  e.target = r;
  e.setAttribute("rel", "noopener noreferrer");
  Object.entries(a).forEach(([c, s]) => {
    const i = t.createElement("input");
    i.type = "hidden";
    i.name = c;
    i.value = s;
    e.appendChild(i);
  });
  t.body.appendChild(e);
  e.submit();
  e.remove();
};
const I = (a) =>
  new Promise((r, t) => {
    const e = new FileReader();
    e.addEventListener(
      "load",
      () => {
        if (typeof e.result != "string") {
          t(new Error("Could not encode the project archive."));
          return;
        }
        r(e.result);
      },
      {
        once: true,
      },
    );
    e.addEventListener(
      "error",
      () => {
        t(e.error ?? new Error("Could not read the project archive."));
      },
      {
        once: true,
      },
    );
    e.addEventListener(
      "abort",
      () => {
        t(new Error("Project archive encoding was interrupted."));
      },
      {
        once: true,
      },
    );
    e.readAsDataURL(a);
  });
const g = async ({
  archive: a,
  compiler: r,
  mainDocument: t,
  name: e,
  targetWindow: c,
}) => {
  if (a.size > j) {
    throw new Error("Overleaf project archives cannot exceed 50 MB.");
  }
  const s = await I(a);
  b(
    {
      snip_uri: s,
      snip_name: e,
      main_document: t,
      engine: r,
    },
    "_self",
    c.document,
  );
};
const A = (a = {}) => {
  const { beforeCreate: r, onCreated: t } = a;
  const { mutateAsync: e } = f();
  const { mutateAsync: c } = h();
  const { mutateAsync: s } = w();
  const [i, p] = v.useState(false);
  return {
    createProject: v.useCallback(
      async (l) => {
        p(true);
        let d = null;
        try {
          await (r == null ? undefined : r());
          const o = await e({
            input: {
              name: L(l.name),
              source: l.source,
              folderId: l.folderId,
            },
          });
          d = {
            id: o.id,
            revision: o.revision,
          };
          let n = o;
          if (l.templateId === "research-paper") {
            const u = await c({
              documentId: o.id,
              input: {
                path: "references.bib",
                kind: "text",
                content: `% Add bibliography entries here.
`,
                expectedRevision: o.revision,
              },
            });
            d = {
              id: o.id,
              revision: u.documentRevision,
            };
            n = {
              ...o,
              revision: u.documentRevision,
            };
          }
          await (t == null ? undefined : t(n));
          m.success("LaTeX project created.");
          return n;
        } catch (o) {
          const n = E(o, "Could not create the LaTeX project.");
          if (!d) {
            m.error(n);
            return null;
          }
          try {
            await s({
              documentId: d.id,
              expectedRevision: d.revision,
            });
          } catch (u) {
            m.error(
              `${n} The partially created project could not be removed: ${E(u, "project cleanup failed")}`,
            );
            return null;
          }
          m.error(n);
          return null;
        } finally {
          p(false);
        }
      },
      [r, e, c, s, t],
    ),
    isCreatingProject: i,
  };
};
export { P as O, g as o, A as u };
