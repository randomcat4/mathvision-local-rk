import { u as y } from "./useQuery-DM2qiUYb.js";
import { ax as s, aj as k, aR as w, p as m, r as q, aS as S, n as p } from "./index-BM3ZINIl.js";
import { u as B } from "./search-CE89ACSU.js";
import { u } from "./useMutation-C1SgG9wr.js";
import { u as M } from "./useInfiniteQuery-CdNTitqC.js";
import { l as E, c as g, a, i as I, s as v, r as X } from "./cache-BNzcfneg.js";
const i = k,
  L = (e) => ({
    id: e.id,
    userId: e.user_id,
    name: e.name,
    folderId: e.folder_id,
    source: e.source,
    revision: e.revision ?? 0,
    compiler: e.compiler ?? "pdflatex",
    mainFilePath: e.main_file_path ?? e.name,
    originType: e.origin_type ?? null,
    originKey: e.origin_key ?? null,
    itemCount: e.item_count,
    isPinned: e.is_pinned,
    pinnedAt: e.pinned_at,
    createdAt: e.created_at,
    lastUpdated: e.last_updated,
  }),
  J = (e) => ({
    id: e.id,
    userId: e.user_id,
    name: e.name,
    folderId: e.folder_id,
    revision: e.revision ?? 0,
    compiler: e.compiler ?? "pdflatex",
    mainFilePath: e.main_file_path ?? e.name,
    originType: e.origin_type ?? null,
    originKey: e.origin_key ?? null,
    itemCount: e.item_count,
    isPinned: e.is_pinned,
    pinnedAt: e.pinned_at,
    createdAt: e.created_at,
    lastUpdated: e.last_updated,
  }),
  O = (e) => ({
    severity: e.severity,
    file: e.file ?? null,
    line: e.line ?? null,
    column: e.column ?? null,
    endLine: e.end_line ?? null,
    endColumn: e.end_column ?? null,
    code: e.code ?? null,
    package: e.package ?? null,
    message: e.message,
    raw: e.raw ?? null,
  }),
  j = (e) => ({
    success: e.success,
    pdfAttachmentId: e.pdf_attachment_id ?? null,
    synctexAttachmentId: e.synctex_attachment_id ?? null,
    outputAttachmentId: e.output_attachment_id ?? null,
    outputFiles: (e.output_files ?? []).map((t) => ({ path: t.path, sizeBytes: t.size_bytes })),
    pdfBase64: e.pdf_base64 ?? null,
    diagnostics: e.diagnostics.map(O),
    log: e.log,
    durationMs: e.duration_ms,
  }),
  h = (e) => ({
    id: e.id,
    documentId: e.document_id ?? null,
    userId: e.user_id,
    status: e.status,
    documentRevision: e.document_revision ?? null,
    sourceSha256: e.source_sha256 ?? null,
    compiler: e.compiler ?? null,
    mainFilePath: e.main_file_path ?? null,
    clean: e.clean ?? !1,
    cancelRequestedAt: e.cancel_requested_at ?? null,
    isStale: e.is_stale ?? !1,
    result: e.result ? j(e.result) : null,
    errorMessage: e.error_message ?? null,
    startedAt: e.started_at ?? null,
    finishedAt: e.finished_at ?? null,
    createdAt: e.created_at,
    lastUpdated: e.last_updated,
  }),
  V = (e) => ({
    id: e.id,
    status: e.status,
    documentRevision: e.document_revision ?? null,
    compiler: e.compiler,
    isStale: e.is_stale,
    success: e.success ?? null,
    durationMs: e.duration_ms ?? null,
    hasPdf: e.has_pdf,
    hasLog: e.has_log,
    hasDiagnostics: e.has_diagnostics,
    hasOutputArchive: e.has_output_archive,
    startedAt: e.started_at ?? null,
    finishedAt: e.finished_at ?? null,
    createdAt: e.created_at,
  }),
  f = (e) => ({
    id: e.id,
    documentId: e.document_id,
    path: e.path,
    kind: e.kind,
    content: e.content ?? null,
    attachmentId: e.attachment_id ?? null,
    contentType: e.content_type ?? null,
    originType: e.origin_type ?? null,
    originKey: e.origin_key ?? null,
    sizeBytes: e.size_bytes,
    revision: e.revision,
    createdAt: e.created_at,
    lastUpdated: e.last_updated,
  }),
  $ = (e) => ({
    id: e.id,
    documentId: e.document_id,
    chatId: e.chat_id,
    chatRunId: e.chat_run_id,
    userId: e.user_id,
    summary: e.summary,
    baseDocumentRevision: e.base_document_revision,
    edits: e.edits.map((t) => ({
      fileId: t.file_id,
      path: t.path,
      fileRevision: t.file_revision,
      oldText: t.old_text,
      newText: t.new_text,
    })),
    validationCompileJobId: e.validation_compile_job_id,
    validationErrorMessage: e.validation_error_message,
    status: e.status,
    appliedDocumentRevision: e.applied_document_revision,
    appliedAt: e.applied_at,
    createdAt: e.created_at,
    lastUpdated: e.last_updated,
  }),
  N = (e) => ({
    ...(e.name !== void 0 ? { name: e.name } : {}),
    ...(e.source !== void 0 ? { source: e.source } : {}),
    ...(e.compiler !== void 0 ? { compiler: e.compiler } : {}),
    ...(e.mainFilePath !== void 0 ? { main_file_path: e.mainFilePath } : {}),
    ...(e.folderId !== void 0 ? { folder_id: e.folderId } : {}),
    ...(e.originType !== void 0 ? { origin_type: e.originType } : {}),
    ...(e.originKey !== void 0 ? { origin_key: e.originKey } : {}),
  }),
  z = (e) => ({
    ...(e.name !== void 0 ? { name: e.name } : {}),
    ...(e.source !== void 0 ? { source: e.source } : {}),
    ...(e.compiler !== void 0 ? { compiler: e.compiler } : {}),
    ...(e.mainFilePath !== void 0 ? { main_file_path: e.mainFilePath } : {}),
    ...(e.isPinned !== void 0 ? { is_pinned: e.isPinned } : {}),
    ...(e.historyOrigin !== void 0 ? { history_origin: e.historyOrigin } : {}),
    ...(e.historySessionId !== void 0 ? { history_session_id: e.historySessionId } : {}),
    expected_revision: e.expectedRevision,
  }),
  F = (e) => ({
    ...(e.source !== void 0 ? { source: e.source } : {}),
    ...(e.expectedRevision !== void 0 ? { expected_revision: e.expectedRevision } : {}),
    ...(e.compiler !== void 0 ? { compiler: e.compiler } : {}),
    ...(e.clean !== void 0 ? { clean: e.clean } : {}),
  }),
  c = () => "latex/documents",
  H = (e) => ({ fileId: e.file_id, path: e.path, kind: e.kind, isDeleted: e.is_deleted }),
  A = (e) => ({
    id: e.id,
    documentId: e.document_id,
    actorId: e.actor_id,
    origin: e.origin,
    documentRevisionStart: e.document_revision_start,
    documentRevisionEnd: e.document_revision_end,
    projectName: e.project_name,
    compiler: e.compiler,
    mainFilePath: e.main_file_path,
    isFinalized: e.is_finalized,
    label: e.label,
    llmRunId: e.llm_run_id,
    llmMessageId: e.llm_message_id,
    createdAt: e.created_at,
    lastUpdated: e.last_updated,
    changedFiles: e.changed_files.map(H),
  }),
  W = (e) => ({
    fileId: e.file_id,
    oldPath: e.old_path,
    newPath: e.new_path,
    oldKind: e.old_kind,
    newKind: e.new_kind,
    oldIsDeleted: e.old_is_deleted,
    newIsDeleted: e.new_is_deleted,
    oldContent: e.old_content,
    newContent: e.new_content,
    oldContentSha256: e.old_content_sha256,
    newContentSha256: e.new_content_sha256,
    oldAttachmentId: e.old_attachment_id,
    newAttachmentId: e.new_attachment_id,
  }),
  Y = (e) => ({ items: e.items.map(A), nextCursor: e.next_cursor, totalCount: e.total_count }),
  G = (e) => ({
    version: A(e.version),
    baseVersionId: e.base_version_id,
    metadataChanged: e.metadata_changed,
    files: e.files.map(W),
  }),
  K = (e) => ({
    documentRevision: e.document_revision,
    fileId: e.file_id,
    path: e.path,
    kind: e.kind,
    isDeleted: e.is_deleted,
    content: e.content,
    contentSha256: e.content_sha256,
    attachmentId: e.attachment_id,
  }),
  Z = (e) => s.get(i, c(), void 0, e).then((t) => t.map(L)),
  Me = (e) => s.get(i, `${c()}/${encodeURIComponent(e)}`).then(L),
  b = async (e) =>
    (await s.get(i, `${c()}/explorer/tree`, void 0, e)).map((n) => ({
      document: J(n.document),
      files: n.files.map(f),
    })),
  ee = (e) => s.post(i, c(), N(e)).then(L),
  te = (e, t) => s.patch(i, `${c()}/${encodeURIComponent(e)}`, z(t)).then(L),
  ne = (e, t) =>
    s.patch(i, `${c()}/${encodeURIComponent(e)}/folder`, { folder_id: t.folderId }).then(L),
  oe = (e, t) =>
    s
      .delete(i, `${c()}/${encodeURIComponent(e)}`, { expected_revision: t.expectedRevision })
      .then(() => {}),
  ae = (e) => s.get(i, `latex/compile-jobs/${encodeURIComponent(e)}`).then(h),
  ie = (e) =>
    s
      .get(i, `${c()}/${encodeURIComponent(e)}/compile/latest-success`)
      .then((t) => (t ? h(t) : null)),
  se = (e) => s.post(i, "latex/compile/latest-success", F(e)).then((t) => (t ? h(t) : null)),
  re = (e, t) => s.post(i, `${c()}/${encodeURIComponent(e)}/compile`, F(t)).then(h),
  ce = (e) => s.post(i, "latex/compile", F(e)).then(h),
  de = (e) =>
    s
      .get(i, `${c()}/${encodeURIComponent(e)}/files`)
      .then((t) => ({ documentRevision: t.document_revision, files: t.files.map(f) })),
  le = (e, t) =>
    s.get(i, `${c()}/${encodeURIComponent(e)}/edit-proposals/${encodeURIComponent(t)}`).then($),
  ue = (e, t) =>
    s
      .post(i, `${c()}/${encodeURIComponent(e)}/edit-proposals/${encodeURIComponent(t)}/apply`, {})
      .then((n) => ({ proposal: $(n.proposal), documentRevision: n.document_revision })),
  me = (e, t) =>
    s
      .delete(i, `${c()}/${encodeURIComponent(e)}/edit-proposals/${encodeURIComponent(t)}`)
      .then(() => {}),
  pe = (e, t) =>
    s
      .post(
        i,
        `${c()}/${encodeURIComponent(e)}/edit-proposals/${encodeURIComponent(t)}/pdf-preview`,
        {},
      )
      .then((n) => ({ baseline: h(n.baseline), candidate: h(n.candidate) })),
  ye = (e, t) =>
    s
      .post(i, `${c()}/${encodeURIComponent(e)}/files`, {
        path: t.path,
        kind: t.kind,
        ...(t.content !== void 0 ? { content: t.content } : {}),
        ...(t.historyOrigin !== void 0 ? { history_origin: t.historyOrigin } : {}),
        ...(t.historySessionId !== void 0 ? { history_session_id: t.historySessionId } : {}),
        expected_revision: t.expectedRevision,
      })
      .then((n) => ({ documentRevision: n.document_revision, file: f(n.file) })),
  _e = (e, t) =>
    s
      .post(i, `${c()}/${encodeURIComponent(e)}/writeup-files`, {
        source: t.source,
        preferred_path: t.preferredPath,
        origin_key: t.originKey,
        expected_revision: t.expectedRevision,
      })
      .then((n) => ({
        documentRevision: n.document_revision,
        file: f(n.file),
        created: n.created,
      })),
  he = (e, t, n) =>
    s
      .patch(i, `${c()}/${encodeURIComponent(e)}/files/${encodeURIComponent(t)}`, {
        ...(n.path !== void 0 ? { path: n.path } : {}),
        ...(n.content !== void 0 ? { content: n.content } : {}),
        ...(n.historyOrigin !== void 0 ? { history_origin: n.historyOrigin } : {}),
        ...(n.historySessionId !== void 0 ? { history_session_id: n.historySessionId } : {}),
        expected_revision: n.expectedRevision,
      })
      .then((o) => ({ documentRevision: o.document_revision, file: f(o.file) })),
  xe = (e, t) =>
    s
      .patch(i, `${c()}/${encodeURIComponent(e)}/files`, {
        expected_revision: t.expectedRevision,
        updates: t.updates.map((n) => ({ file_id: n.fileId, content: n.content })),
        ...(t.historyOrigin !== void 0 ? { history_origin: t.historyOrigin } : {}),
        ...(t.historySessionId !== void 0 ? { history_session_id: t.historySessionId } : {}),
      })
      .then((n) => ({ documentRevision: n.document_revision, files: n.files.map(f) })),
  fe = (e, t, n) =>
    s
      .delete(i, `${c()}/${encodeURIComponent(e)}/files/${encodeURIComponent(t)}`, {
        expected_revision: n,
      })
      .then((o) => ({ documentRevision: o.document_revision })),
  ve = async (e, t, n) => {
    const o = new FormData();
    (t.forEach((d) => {
      const l = d.webkitRelativePath || d.name;
      (o.append("files", d, d.name), o.append("paths", l));
    }),
      o.append("expected_revision", String(n)));
    const r = await w.post(`${i}/${c()}/${encodeURIComponent(e)}/files/upload`, o, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return { documentRevision: r.data.document_revision, files: r.data.files.map(f) };
  },
  Le = async (e, t, n, o = !1) => {
    const r = new FormData();
    (r.append("file", t, t.name),
      r.append("expected_revision", String(n)),
      r.append("replace", String(o)));
    const d = await w.post(`${i}/${c()}/${encodeURIComponent(e)}/import`, r, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return L(d.data);
  },
  Ie = async (e) =>
    (await w.get(`${i}/${c()}/${encodeURIComponent(e)}/export`, { responseType: "blob" })).data,
  Ce = (e) => s.get(i, `${c()}/${encodeURIComponent(e)}/compile-history`).then((t) => t.map(V)),
  ge = async (e, t = {}) => {
    const n = await s.get(i, c() + "/" + encodeURIComponent(e) + "/versions", {
      limit: t.limit ?? 40,
      ...(t.cursor ? { cursor: t.cursor } : {}),
    });
    return Y(n);
  },
  Pe = async (e, t, n = {}) => {
    const o = await s.get(
      i,
      c() + "/" + encodeURIComponent(e) + "/versions/" + encodeURIComponent(t) + "/compare",
      {
        ...(n.baseVersionId ? { base_version_id: n.baseVersionId } : {}),
        ...(n.fileId ? { file_id: n.fileId } : {}),
        ...(n.includeContent === !1 ? { include_content: !1 } : {}),
      },
    );
    return G(o);
  },
  we = async (e, t, n) => {
    const o = await s.get(
      i,
      c() +
        "/" +
        encodeURIComponent(e) +
        "/versions/at/" +
        encodeURIComponent(String(t)) +
        "/files/" +
        encodeURIComponent(n),
    );
    return K(o);
  },
  Fe = async (e, t, n) => {
    const o = await s.get(
      i,
      c() +
        "/" +
        encodeURIComponent(e) +
        "/versions/at/" +
        encodeURIComponent(String(t)) +
        "/files/by-path",
      { path: n },
    );
    return K(o);
  },
  Re = (e) => s.post(i, `latex/compile-jobs/${encodeURIComponent(e)}/cancel`, {}).then(h),
  De = (e, t) =>
    s.post(i, `latex/compile-jobs/${encodeURIComponent(e)}/synctex/forward`, {
      file: t.file,
      line: t.line,
      column: t.column,
    }),
  Ue = (e, t) =>
    s.post(i, `latex/compile-jobs/${encodeURIComponent(e)}/synctex/reverse`, {
      page: t.page,
      x: t.x,
      y: t.y,
    }),
  qe = ".tex",
  Xe = `main${qe}`,
  Se = "Untitled project",
  Je = [
    { value: "pdflatex", label: "pdfLaTeX" },
    { value: "xelatex", label: "XeLaTeX" },
    { value: "lualatex", label: "LuaLaTeX" },
  ],
  Oe = !1,
  T = 6e4,
  Q = (e) => {
    if (e.length === 0) throw new Error("A LaTeX file mutation returned no project files.");
    return e.reduce((t, n) =>
      new Date(n.lastUpdated).getTime() > new Date(t.lastUpdated).getTime() ? n : t,
    ).lastUpdated;
  },
  Ee = (e) =>
    (e == null ? void 0 : e.status) === "queued" || (e == null ? void 0 : e.status) === "running",
  R = (e) =>
    [...e].sort((t, n) => {
      if (t.isPinned !== n.isPinned) return t.isPinned ? -1 : 1;
      const o = new Date(n.pinnedAt ?? 0).getTime() - new Date(t.pinnedAt ?? 0).getTime();
      return o !== 0
        ? o
        : t.name.localeCompare(n.name, void 0, { numeric: !0, sensitivity: "base" });
    }),
  P = (e, t) => {
    if (!e) return e;
    const n = e.some((o) => o.id === t.id) ? e.map((o) => (o.id === t.id ? t : o)) : [...e, t];
    return R(n);
  },
  D = (e, t) => {
    const { source: n, ...o } = t,
      r = { document: o, files: [] };
    e.setQueryData(a.projectExplorer(), (d) => {
      var _;
      if (!d) return d;
      const l = new Map(d.map((x) => [x.document.id, x]));
      return (
        l.set(t.id, { ...r, files: ((_ = l.get(t.id)) == null ? void 0 : _.files) ?? [] }),
        R([...l.values()].map((x) => x.document)).map((x) => {
          const U = l.get(x.id);
          if (!U) throw new Error(`Created LaTeX project '${x.id}' is missing its explorer item.`);
          return U;
        })
      );
    });
  },
  je = (e = {}) =>
    y({
      queryKey: a.documents(),
      queryFn: async ({ signal: t }) => R(await Z(t)),
      enabled: e.enabled ?? !0,
      staleTime: T,
    }),
  Ve = (e = {}) =>
    y({
      queryKey: a.projectExplorer(),
      queryFn: ({ signal: t }) => b(t),
      enabled: e.enabled ?? !0,
      staleTime: T,
    }),
  Ne = (e) =>
    y({
      queryKey: a.files(e),
      queryFn: () => {
        if (!e) throw new Error("Document id is required to load LaTeX project files.");
        return de(e);
      },
      enabled: !!e,
    }),
  ze = (e, t) =>
    y({
      queryKey: a.editProposal(e, t),
      queryFn: () => {
        if (!e || !t)
          throw new Error("Document and proposal ids are required to load proposed LaTeX edits.");
        return le(e, t);
      },
      enabled: !!(e && t),
      retry: !1,
      refetchInterval: (n) => {
        const o = n.state.data;
        return (o == null ? void 0 : o.status) === "pending" &&
          !o.validationCompileJobId &&
          !o.validationErrorMessage
          ? 700
          : !1;
      },
    }),
  He = () => {
    const e = m();
    return u({
      mutationFn: ({ documentId: t, proposalId: n }) => ue(t, n),
      onSuccess: async (t, n) => {
        (e.setQueryData(a.editProposal(n.documentId, n.proposalId), t.proposal),
          await Promise.all([
            I(e),
            e.invalidateQueries({ queryKey: a.files(n.documentId) }),
            e.invalidateQueries({ queryKey: a.versions(n.documentId) }),
          ]),
          p({ latexProjectsChanged: !0 }));
      },
    });
  },
  We = () => {
    const e = m();
    return u({
      mutationFn: ({ documentId: t, proposalId: n }) => me(t, n),
      onSuccess: (t, n) =>
        e.invalidateQueries({ queryKey: a.editProposal(n.documentId, n.proposalId), exact: !0 }),
    });
  },
  Ye = () => u({ mutationFn: ({ documentId: e, proposalId: t }) => pe(e, t) }),
  $e = (e, t) => {
    const n = g(e);
    return (
      e.setQueryData(a.documents(), (o) => P(o, t)),
      D(e, t),
      n.then(async () => {
        (await Promise.all([I(e), e.invalidateQueries({ queryKey: S })]),
          p({ latexProjectsChanged: !0, workspaceExplorerChanged: !0 }));
      })
    );
  },
  Ge = () => {
    const e = m(),
      t = q.useRef(new WeakMap()),
      n = u({
        mutationKey: E.createDocument(),
        mutationFn: ({ input: d }) => ee(d),
        onSuccess: (d) => {
          const l = $e(e, d);
          (t.current.set(d, l),
            l.catch((_) => {
              console.error(
                `Could not reconcile created LaTeX project '${d.id}' with the workspace explorer.`,
                _,
              );
            }));
        },
      }),
      o = n.mutateAsync,
      r = q.useCallback(
        async (d) => {
          const l = await o(d),
            _ = t.current.get(l);
          if (!_)
            throw new Error(
              `Created LaTeX project '${l.id}' is missing its workspace reconciliation.`,
            );
          try {
            await _;
          } finally {
            t.current.delete(l);
          }
          return l;
        },
        [o],
      );
    return { ...n, mutateAsync: r };
  },
  Ze = () =>
    B({
      filters: { exact: !0, mutationKey: E.createDocument(), status: "pending" },
      select: (e) => {
        const t = e.state.variables;
        return {
          key: `pending-latex-project:${e.mutationId}`,
          name: t.input.name ?? Se,
          folderId: t.input.folderId ?? null,
        };
      },
    }),
  be = () => {
    const e = m();
    return u({
      mutationFn: ({ documentId: t, input: n }) => ne(t, n),
      onSuccess: async (t) => {
        (await g(e),
          e.setQueryData(a.documents(), (n) => P(n, t)),
          D(e, t),
          await Promise.all([I(e), e.invalidateQueries({ queryKey: S })]),
          p({ latexProjectsChanged: !0, workspaceExplorerChanged: !0 }),
          e.invalidateQueries({ queryKey: a.versions(t.id) }));
      },
    });
  },
  et = () => {
    const e = m();
    return u({
      mutationFn: ({ documentId: t, input: n }) => te(t, n),
      onSuccess: async (t) => {
        (await g(e),
          e.setQueryData(a.documents(), (n) => P(n, t)),
          D(e, t),
          e.setQueryData(a.files(t.id), (n) => n && { ...n, documentRevision: t.revision }),
          await Promise.all([I(e), e.invalidateQueries({ queryKey: a.versions(t.id) })]),
          p({ latexProjectsChanged: !0 }));
      },
    });
  },
  tt = () => {
    const e = m();
    return u({
      mutationFn: ({ documentId: t, expectedRevision: n }) => oe(t, { expectedRevision: n }),
      onSuccess: async (t, n) => {
        (await g(e),
          X(e, [n.documentId]),
          await I(e),
          p({ removedLatexProjectIds: [n.documentId], latexProjectsChanged: !0 }));
      },
    });
  },
  nt = (e, t = {}) =>
    y({
      queryKey: a.compileJob(e),
      queryFn: async () => {
        if (!e) throw new Error("Compile job id is required.");
        return ae(e);
      },
      enabled: !!e && (t.enabled ?? !0),
      gcTime: 0,
      refetchInterval: (n) => (Ee(n.state.data) ? 700 : !1),
    }),
  ot = (e, t = {}) =>
    y({
      queryKey: a.latestSuccessfulCompileJob(e),
      queryFn: async () => {
        if (!e) throw new Error("Document id is required.");
        return ie(e);
      },
      enabled: !!e && (t.enabled ?? !0),
    }),
  at = (e, t = {}) =>
    y({
      queryKey: a.latestSuccessfulSourceCompileJob(e),
      queryFn: async () => {
        if (!e) throw new Error("LaTeX source is required.");
        return se({ source: e });
      },
      enabled: !!e && (t.enabled ?? !0),
    }),
  it = () => u({ mutationFn: ({ documentId: e, input: t }) => re(e, t) }),
  st = () => u({ mutationFn: ({ input: e }) => ce(e) }),
  C = async (e, t) => {
    await Promise.all([
      e.invalidateQueries({ queryKey: a.documents() }),
      e.invalidateQueries({ queryKey: a.documentSummaries() }),
      e.invalidateQueries({ queryKey: a.projectExplorer() }),
      e.invalidateQueries({ queryKey: a.files(t) }),
      e.invalidateQueries({ queryKey: a.versions(t) }),
    ]);
  },
  rt = () => {
    const e = m();
    return u({
      mutationFn: ({ documentId: t, input: n }) => ye(t, n),
      onSuccess: async (t, n) => {
        (await e.cancelQueries({ queryKey: a.files(n.documentId), exact: !0 }),
          e.setQueryData(
            a.files(n.documentId),
            (o) => o && { documentRevision: t.documentRevision, files: [...o.files, t.file] },
          ),
          v(e, {
            documentId: n.documentId,
            revision: t.documentRevision,
            lastUpdated: t.file.lastUpdated,
            fileUpdate: { kind: "upsert", files: [t.file] },
          }),
          await C(e, n.documentId),
          p({ latexProjectsChanged: !0 }));
      },
    });
  },
  ct = () => {
    const e = m();
    return u({
      mutationFn: ({ documentId: t, input: n }) => _e(t, n),
      onSuccess: async (t, n) => {
        (await e.cancelQueries({ queryKey: a.files(n.documentId), exact: !0 }),
          e.setQueryData(
            a.files(n.documentId),
            (o) =>
              o && {
                documentRevision: t.documentRevision,
                files: o.files.some((r) => r.id === t.file.id)
                  ? o.files.map((r) => (r.id === t.file.id ? t.file : r))
                  : [...o.files, t.file],
              },
          ),
          v(e, {
            documentId: n.documentId,
            revision: t.documentRevision,
            lastUpdated: t.file.lastUpdated,
            fileUpdate: { kind: "upsert", files: [t.file] },
          }),
          await C(e, n.documentId),
          p({ latexProjectsChanged: !0 }));
      },
    });
  },
  dt = () => {
    const e = m();
    return u({
      mutationFn: ({ documentId: t, fileId: n, input: o }) => he(t, n, o),
      onSuccess: async (t, n) => {
        var d;
        const o = a.files(n.documentId);
        await e.cancelQueries({ queryKey: o, exact: !0 });
        const r =
          (d = e.getQueryData(o)) == null ? void 0 : d.files.find((l) => l.id === t.file.id);
        (e.setQueryData(
          o,
          (l) =>
            l && {
              documentRevision: t.documentRevision,
              files: l.files.map((_) => (_.id === t.file.id ? t.file : _)),
            },
        ),
          v(e, {
            documentId: n.documentId,
            revision: t.documentRevision,
            lastUpdated: t.file.lastUpdated,
            fileUpdate: {
              kind: "upsert",
              files: [t.file],
              previousFilePath: r == null ? void 0 : r.path,
            },
          }),
          n.input.path !== void 0
            ? await C(e, n.documentId)
            : await e.invalidateQueries({ queryKey: a.versions(n.documentId) }),
          p({ latexProjectsChanged: !0 }));
      },
    });
  },
  lt = () => {
    const e = m();
    return u({
      mutationFn: ({ documentId: t, input: n }) => xe(t, n),
      onSuccess: async (t, n) => {
        (await e.cancelQueries({ queryKey: a.files(n.documentId), exact: !0 }),
          e.setQueryData(a.files(n.documentId), t),
          v(e, {
            documentId: n.documentId,
            revision: t.documentRevision,
            lastUpdated: Q(t.files),
            fileUpdate: { kind: "replace", files: t.files },
          }),
          await e.invalidateQueries({ queryKey: a.versions(n.documentId) }),
          p({ latexProjectsChanged: !0 }));
      },
    });
  },
  ut = () => {
    const e = m();
    return u({
      mutationFn: ({ documentId: t, fileId: n, expectedRevision: o }) => fe(t, n, o),
      onSuccess: async (t, n) => {
        (await e.cancelQueries({ queryKey: a.files(n.documentId), exact: !0 }),
          e.setQueryData(
            a.files(n.documentId),
            (o) =>
              o && {
                documentRevision: t.documentRevision,
                files: o.files.filter((r) => r.id !== n.fileId),
              },
          ),
          v(e, {
            documentId: n.documentId,
            revision: t.documentRevision,
            fileUpdate: { kind: "remove", fileId: n.fileId },
          }),
          await C(e, n.documentId),
          p({ latexProjectsChanged: !0 }));
      },
    });
  },
  mt = () => {
    const e = m();
    return u({
      mutationFn: ({ documentId: t, files: n, expectedRevision: o }) => ve(t, n, o),
      onSuccess: async (t, n) => {
        (v(e, {
          documentId: n.documentId,
          revision: t.documentRevision,
          lastUpdated: Q(t.files),
          fileUpdate: { kind: "upsert", files: t.files },
        }),
          await C(e, n.documentId),
          p({ latexProjectsChanged: !0 }));
      },
    });
  },
  pt = () => {
    const e = m();
    return u({
      mutationFn: ({ documentId: t, file: n, expectedRevision: o, replace: r }) => Le(t, n, o, r),
      onSuccess: async (t) => {
        (e.setQueryData(a.documents(), (n) => P(n, t)),
          await e.invalidateQueries({ queryKey: a.files(t.id) }),
          await e.invalidateQueries({ queryKey: a.documentSummaries() }),
          await e.invalidateQueries({ queryKey: a.projectExplorer() }),
          await e.invalidateQueries({ queryKey: a.versions(t.id) }),
          p({ latexProjectsChanged: !0 }));
      },
    });
  },
  yt = () => u({ mutationFn: ({ documentId: e }) => Ie(e) }),
  _t = (e, t = {}) =>
    y({
      queryKey: a.compileHistory(e),
      queryFn: () => {
        if (!e) throw new Error("Document id is required to load compile history.");
        return Ce(e);
      },
      enabled: !!e && (t.enabled ?? !0),
    }),
  ht = (e, t = {}) =>
    M({
      queryKey: a.versions(e),
      queryFn: ({ pageParam: n }) => {
        if (!e) throw new Error("Document id is required to load project history.");
        return ge(e, { cursor: n, limit: 40 });
      },
      initialPageParam: null,
      getNextPageParam: (n) => n.nextCursor ?? void 0,
      enabled: !!e && (t.enabled ?? !0),
    }),
  xt = ({
    documentId: e,
    versionId: t,
    baseVersionId: n,
    fileId: o,
    includeContent: r = !0,
    enabled: d,
  }) =>
    y({
      queryKey: a.versionCompare(e, t, n, o, r),
      queryFn: () => {
        if (!e || !t) throw new Error("Document and version ids are required for comparison.");
        return Pe(e, t, { baseVersionId: n, fileId: o, includeContent: r });
      },
      enabled: !!(e && t) && (d ?? !0),
    }),
  ft = ({ documentId: e, documentRevision: t, fileId: n }) =>
    y({
      queryKey: a.versionFileAtRevision(e, t, n),
      queryFn: () => {
        if (!e || t === null || !n)
          throw new Error(
            "Document, revision, and file ids are required for a historical source snapshot.",
          );
        return we(e, t, n);
      },
      enabled: !!(e && t !== null && t > 0 && n),
    }),
  vt = ({ documentId: e, documentRevision: t, path: n }) =>
    y({
      queryKey: a.versionFileAtRevisionByPath(e, t, n),
      queryFn: () => {
        if (!e || t === null || !n)
          throw new Error(
            "Document, revision, and path are required for a historical source snapshot.",
          );
        return Fe(e, t, n);
      },
      enabled: !!(e && t !== null && t > 0 && n),
    }),
  Lt = () => u({ mutationFn: ({ jobId: e }) => Re(e) }),
  It = () => u({ mutationFn: ({ jobId: e, input: t }) => De(e, t) }),
  Ct = () => u({ mutationFn: ({ jobId: e, input: t }) => Ue(e, t) });
export {
  lt as A,
  It as B,
  Ct as C,
  Se as D,
  ht as E,
  xt as F,
  dt as G,
  He as H,
  We as I,
  Ye as J,
  _t as K,
  qe as L,
  ft as M,
  vt as N,
  Je as O,
  Oe as P,
  rt as a,
  tt as b,
  st as c,
  at as d,
  nt as e,
  ze as f,
  ae as g,
  je as h,
  Ee as i,
  Xe as j,
  Ne as k,
  ct as l,
  yt as m,
  pt as n,
  be as o,
  et as p,
  Me as q,
  de as r,
  Ve as s,
  Ze as t,
  Ge as u,
  it as v,
  Lt as w,
  ot as x,
  ut as y,
  mt as z,
};
