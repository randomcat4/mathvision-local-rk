const v = (e) => {
    let t = 3735928559 ^ e.length,
      o = 1103547991 ^ e.length;
    for (let r = 0; r < e.length; r += 1) {
      const s = e.charCodeAt(r);
      ((t = Math.imul(t ^ s, 2654435761)), (o = Math.imul(o ^ s, 1597334677)));
    }
    return (
      (t = Math.imul(t ^ (t >>> 16), 2246822507) ^ Math.imul(o ^ (o >>> 13), 3266489909)),
      (o = Math.imul(o ^ (o >>> 16), 2246822507) ^ Math.imul(t ^ (t >>> 13), 3266489909)),
      [e.length.toString(36), (o >>> 0).toString(36), (t >>> 0).toString(36)].join("-")
    );
  },
  c = {
    documents: () => ["latex", "documents"],
    documentSummaries: () => ["latex", "documentSummaries"],
    projectExplorer: () => ["latex", "projectExplorer"],
    files: (e) => ["latex", "documents", e, "files"],
    editProposals: (e) => ["latex", "documents", e, "editProposals"],
    editProposal: (e, t) => [...c.editProposals(e), t],
    compileJob: (e) => ["latex", "compileJob", e],
    compileHistory: (e) => ["latex", "documents", e, "compileHistory"],
    versions: (e) => ["latex", "documents", e, "versions"],
    versionCompare: (e, t, o, r, s) => ["latex", "documents", e, "versions", t, "compare", o, r, s],
    versionFileAtRevision: (e, t, o) => ["latex", "documents", e, "versions", "at", t, "files", o],
    versionFileAtRevisionByPath: (e, t, o) => [
      "latex",
      "documents",
      e,
      "versions",
      "at",
      t,
      "files",
      "by-path",
      o,
    ],
    latestSuccessfulCompileJob: (e) => ["latex", "latestSuccessfulCompileJob", e],
    latestSuccessfulSourceCompileJob: (e) => [
      "latex",
      "latestSuccessfulSourceCompileJob",
      e ? v(e) : null,
    ],
  },
  S = { createDocument: () => ["latex", "createDocument"] },
  x = (e, t) => e && t(e),
  l = (e, t) => {
    if ((t == null ? void 0 : t.kind) !== "upsert" || t.files.length !== 1 || !t.previousFilePath)
      return e;
    const [o] = t.files,
      r = t.previousFilePath;
    return r === o.path
      ? e
      : e === r
        ? o.path
        : e.startsWith(`${r}/`)
          ? `${o.path}${e.slice(r.length)}`
          : e;
  },
  d = (e) => {
    const { content: t, ...o } = e;
    return o;
  },
  p = (e, t) => {
    if (!t) return [...e];
    if (t.kind === "replace") return t.files.map(d);
    if (t.kind === "remove") return e.filter((s) => s.id !== t.fileId);
    const o = new Map(t.files.map((s) => [s.id, d(s)])),
      r = e.map((s) => o.get(s.id) ?? s);
    for (const s of t.files) e.some((a) => a.id === s.id) || r.push(d(s));
    return r;
  },
  Q = (e, { documentId: t, revision: o, lastUpdated: r, fileUpdate: s }) => {
    (e.setQueryData(c.documents(), (a) =>
      a == null
        ? void 0
        : a.map((i) => {
            if (i.id !== t) return i;
            const n = l(i.mainFilePath, s),
              u =
                (s == null ? void 0 : s.kind) === "remove" || s == null
                  ? void 0
                  : s.files.find((m) => m.path === n);
            return {
              ...i,
              revision: o,
              mainFilePath: n,
              ...(r ? { lastUpdated: r } : {}),
              ...((u == null ? void 0 : u.kind) === "text" ? { source: u.content ?? "" } : {}),
            };
          }),
    ),
      e.setQueryData(c.projectExplorer(), (a) =>
        a == null
          ? void 0
          : a.map((i) =>
              i.document.id !== t
                ? i
                : {
                    ...i,
                    document: {
                      ...i.document,
                      revision: o,
                      mainFilePath: l(i.document.mainFilePath, s),
                      ...(r ? { lastUpdated: r } : {}),
                    },
                    files: p(i.files, s),
                  },
            ),
      ),
      e.setQueryData(
        c.documentSummaries(),
        (a) =>
          a && {
            ...a,
            pages: a.pages.map((i) => ({
              ...i,
              items: i.items.map((n) =>
                n.id === t
                  ? {
                      ...n,
                      revision: o,
                      mainFilePath: l(n.mainFilePath, s),
                      ...(r ? { lastUpdated: r } : {}),
                    }
                  : n,
              ),
            })),
          },
      ));
  },
  y = (e) =>
    Promise.all([
      e.cancelQueries({ queryKey: c.documents(), exact: !0 }),
      e.cancelQueries({ queryKey: c.documentSummaries(), exact: !0 }),
      e.cancelQueries({ queryKey: c.projectExplorer(), exact: !0 }),
    ]),
  f = (e) =>
    Promise.all([
      e.invalidateQueries({ queryKey: c.documents() }),
      e.invalidateQueries({ queryKey: c.documentSummaries() }),
      e.invalidateQueries({ queryKey: c.projectExplorer() }),
    ]),
  h = (e, t) => {
    const o = new Set(t);
    if (o.size === 0) return;
    const r = e.getQueryData(c.documents()) ?? [],
      s = e.getQueryData(c.projectExplorer()) ?? [],
      a = e.getQueryData(c.documentSummaries()),
      i = new Set(
        [
          ...r.map((n) => n.id),
          ...s.map((n) => n.document.id),
          ...((a == null ? void 0 : a.pages.flatMap((n) => n.items.map((u) => u.id))) ?? []),
        ].filter((n) => o.has(n)),
      );
    (e.setQueryData(c.documents(), (n) => x(n, (u) => u.filter((m) => !o.has(m.id)))),
      e.setQueryData(c.projectExplorer(), (n) =>
        x(n, (u) => u.filter((m) => !o.has(m.document.id))),
      ),
      e.setQueryData(
        c.documentSummaries(),
        (n) =>
          n && {
            ...n,
            pages: n.pages.map((u) => ({
              ...u,
              items: u.items.filter((m) => !o.has(m.id)),
              totalCount: Math.max(0, u.totalCount - i.size),
            })),
          },
      ));
    for (const n of o)
      (e.removeQueries({ queryKey: ["latex", "documents", n], type: "inactive" }),
        e.removeQueries({
          queryKey: c.latestSuccessfulCompileJob(n),
          exact: !0,
          type: "inactive",
        }));
  },
  g = (e, t) => {
    const o = new Set(t),
      r = new Set();
    for (const a of e.getQueryData(c.documents()) ?? [])
      a.folderId && o.has(a.folderId) && r.add(a.id);
    for (const a of e.getQueryData(c.projectExplorer()) ?? [])
      a.document.folderId && o.has(a.document.folderId) && r.add(a.document.id);
    const s = [...r];
    return (h(e, s), s);
  },
  D = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        cancelLatexProjectCollectionQueries: y,
        invalidateLatexProjectCollectionQueries: f,
        removeLatexDocumentsFromCache: h,
        removeLatexDocumentsInFoldersFromCache: g,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
export { c as a, g as b, y as c, D as d, v as g, f as i, S as l, h as r, Q as s };
