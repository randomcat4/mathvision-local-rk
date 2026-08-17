import { r as v, t as m, ai as E } from "./index-BM3ZINIl.js";
import { u as f, a as h, b as w } from "./useLatexQueries-DBpKOPUv.js";
import { a as L } from "./latexNaming-BAjxoZ-G.js";
const P = 180,
  j = 50 * 1024 * 1024,
  b = (a, r = "_blank", t = document) => {
    const e = t.createElement("form");
    ((e.action = "https://www.overleaf.com/docs"),
      (e.method = "post"),
      (e.target = r),
      e.setAttribute("rel", "noopener noreferrer"),
      Object.entries(a).forEach(([c, s]) => {
        const i = t.createElement("input");
        ((i.type = "hidden"), (i.name = c), (i.value = s), e.appendChild(i));
      }),
      t.body.appendChild(e),
      e.submit(),
      e.remove());
  },
  I = (a) =>
    new Promise((r, t) => {
      const e = new FileReader();
      (e.addEventListener(
        "load",
        () => {
          if (typeof e.result != "string") {
            t(new Error("Could not encode the project archive."));
            return;
          }
          r(e.result);
        },
        { once: !0 },
      ),
        e.addEventListener(
          "error",
          () => {
            t(e.error ?? new Error("Could not read the project archive."));
          },
          { once: !0 },
        ),
        e.addEventListener(
          "abort",
          () => {
            t(new Error("Project archive encoding was interrupted."));
          },
          { once: !0 },
        ),
        e.readAsDataURL(a));
    }),
  g = async ({ archive: a, compiler: r, mainDocument: t, name: e, targetWindow: c }) => {
    if (a.size > j) throw new Error("Overleaf project archives cannot exceed 50 MB.");
    const s = await I(a);
    b({ snip_uri: s, snip_name: e, main_document: t, engine: r }, "_self", c.document);
  },
  A = (a = {}) => {
    const { beforeCreate: r, onCreated: t } = a,
      { mutateAsync: e } = f(),
      { mutateAsync: c } = h(),
      { mutateAsync: s } = w(),
      [i, p] = v.useState(!1);
    return {
      createProject: v.useCallback(
        async (l) => {
          p(!0);
          let d = null;
          try {
            await (r == null ? void 0 : r());
            const o = await e({
              input: { name: L(l.name), source: l.source, folderId: l.folderId },
            });
            d = { id: o.id, revision: o.revision };
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
              ((d = { id: o.id, revision: u.documentRevision }),
                (n = { ...o, revision: u.documentRevision }));
            }
            return (await (t == null ? void 0 : t(n)), m.success("LaTeX project created."), n);
          } catch (o) {
            const n = E(o, "Could not create the LaTeX project.");
            if (!d) return (m.error(n), null);
            try {
              await s({ documentId: d.id, expectedRevision: d.revision });
            } catch (u) {
              return (
                m.error(
                  `${n} The partially created project could not be removed: ${E(u, "project cleanup failed")}`,
                ),
                null
              );
            }
            return (m.error(n), null);
          } finally {
            p(!1);
          }
        },
        [r, e, c, s, t],
      ),
      isCreatingProject: i,
    };
  };
export { P as O, g as o, A as u };
