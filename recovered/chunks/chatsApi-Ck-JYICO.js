import { ax as n, aj as s, ak as A } from "./index-BM3ZINIl.js";
const y = (e) => {
    var t;
    return (
      ((t = e.split(new RegExp("(?<=[.!?])\\s+(?=[A-Z0-9])", "u"))[0]) == null
        ? void 0
        : t.trim()) || e
    );
  },
  h = (e) => {
    const t = e.replace(/^(?:Answer|Compute|Research|Review|Visualize|Write):\s*/iu, "");
    if (!t) throw new Error("Agent operation title is empty after removing its redundant label.");
    return t;
  },
  u = (e) => {
    var t;
    return {
      taskId: e.task_id,
      revision: e.revision,
      title: ((t = e.title) == null ? void 0 : t.trim()) || y(e.objective),
      objective: e.objective,
      status: e.status,
      createdAt: e.created_at,
      startedAt: e.started_at ?? null,
      completedAt: e.completed_at ?? null,
      successCriteria: e.success_criteria.map((a) => ({
        criterionId: a.criterion_id,
        text: a.text,
        status: a.status,
        resultSummary: a.result_summary ?? null,
        operationOutputIds: a.operation_output_ids,
        citationIds: a.citation_ids,
        artifactRefs: a.artifact_refs,
      })),
      resultSummary: e.result_summary ?? null,
      unresolvedItems: e.unresolved_items,
      operationOutputIds: e.operation_output_ids,
      safeError: e.safe_error ? { code: e.safe_error.code, message: e.safe_error.message } : null,
    };
  },
  I = (e) => ({
    id: e.id,
    revision: e.revision,
    taskId: e.task_id,
    operation: e.operation,
    status: e.status,
    title: h(e.title),
    summary: e.summary ?? null,
    error: e.error ?? null,
    startedAtMs: e.started_at_ms ?? null,
    finishedAtMs: e.finished_at_ms ?? null,
  }),
  f = (e) => ({
    id: e.id,
    taskId: e.task_id,
    operation: e.operation,
    status: e.status,
    title: h(e.title),
    response: e.response,
    markdownMathFormat: e.markdown_math_format ?? null,
    sourceIds: e.source_ids,
    citationIds: e.citation_ids,
    toolCallIndexes: e.tool_call_indexes,
    artifactRefs: e.artifact_refs,
  }),
  S = (e) => ({
    outcome: e.outcome,
    answer: e.answer,
    tasks: e.tasks.map(u),
    operations: e.operations.map(I),
    outputs: e.outputs.map(f),
    usedTaskIds: e.used_task_ids,
    usedOperationOutputIds: e.used_operation_output_ids,
    citationIds: e.citation_ids,
    artifactRefs: e.artifact_refs,
    unresolvedItems: e.unresolved_items,
    safeError: e.safe_error ? { code: e.safe_error.code, message: e.safe_error.message } : null,
  }),
  de = (e) => ({
    id: e.id,
    chatId: e.chat_id,
    messageIndex: e.message_index,
    messageTimestamp: e.message_timestamp,
    createdAt: e.created_at,
    chatTitle: e.chat_title,
    responsePreview: e.response_preview,
    branchSpaceId: e.chat_branch_space_id,
    folderId: e.chat_folder_id,
    archivedAt: e.chat_archived_at,
  }),
  g = (e) => {
    if (e.role !== "user" && e.role !== "assistant")
      throw new Error("Chat response contains an unsupported message role.");
    return {
      role: e.role,
      content: e.content,
      timestamp: e.timestamp,
      reasoning: e.reasoning,
      reasoningDurationSeconds: e.reasoning_duration_seconds ?? null,
      modelId: e.model_id ?? void 0,
      reasoningEffort: e.reasoning_effort ?? void 0,
      displayMode: e.display_mode ?? void 0,
      workflowMode: e.workflow_mode ?? void 0,
      agentExecution: e.agent_execution ? S(e.agent_execution) : void 0,
      markdownMathFormat: e.markdown_math_format ?? void 0,
      usage: e.usage ? T(e.usage) : void 0,
      runUsage: e.run_usage ? P(e.run_usage) : void 0,
      sources: (e.sources ?? []).map(w),
      citations: (e.citations ?? []).map(U),
      textSegments: (e.text_segments ?? []).map(M),
      toolCalls: (e.tool_calls ?? []).map($),
      latexEditProposalId: e.latex_edit_proposal_id ?? null,
      attachments: (e.attachments ?? []).map(R),
      quote: e.quote ? E(e.quote) : null,
      isMinimized: e.is_minimized ?? !1,
      feedback: e.feedback ?? null,
      proChatCall: e.pro_chat_call ? k(e.pro_chat_call) : null,
    };
  },
  k = (e) => ({
    runId: e.run_id,
    status: e.status,
    answerTex: e.answer_tex,
    researchNotesTex: e.research_notes_tex,
    errorMessage: e.error_message,
    startedAt: e.started_at,
    finishedAt: e.finished_at,
  }),
  T = (e) => ({
    modelId: e.model,
    inputTokens: e.input_tokens,
    outputTokens: e.output_tokens,
    totalTokens: e.total_tokens,
  }),
  P = (e) => ({
    inputTokens: e.input_tokens,
    cachedInputTokens: e.cached_input_tokens,
    cacheWriteInputTokens: e.cache_write_input_tokens,
    outputTokens: e.output_tokens,
    totalTokens: e.total_tokens,
    usageReports: e.usage_reports,
    breakdown: e.breakdown.map((t) => ({
      purpose: t.purpose,
      modelId: t.model,
      inputTokens: t.input_tokens,
      cachedInputTokens: t.cached_input_tokens,
      cacheWriteInputTokens: t.cache_write_input_tokens,
      outputTokens: t.output_tokens,
      totalTokens: t.total_tokens,
      usageReports: t.usage_reports,
    })),
  }),
  R = (e) => ({
    id: e.attachment_id ?? e.id ?? null,
    attachmentId: e.attachment_id ?? null,
    name: e.name,
    contentType: e.content_type,
    dataBase64: e.data_base64 ?? null,
    kind: e.kind,
    sizeBytes: e.size_bytes ?? null,
  }),
  E = (e) => ({
    text: e.text,
    messageIndex: e.message_index,
    range: e.range ? { start: e.range.start, end: e.range.end } : null,
  }),
  w = (e) => ({
    id: e.id,
    url: e.url,
    title: e.title ?? null,
    domain: e.domain,
    provider: e.provider,
    tool: e.tool,
    retrievedAt: e.retrieved_at ?? null,
    status: e.status,
  }),
  U = (e) => ({
    id: e.id,
    sourceIds: e.source_ids,
    startIndex: e.start_index ?? null,
    endIndex: e.end_index ?? null,
    anchorText: e.anchor_text ?? null,
    citedText: e.cited_text ?? null,
  }),
  M = (e) => ({ type: e.type, text: e.text ?? null, sourceIds: e.source_ids ?? [] }),
  $ = (e) => ({
    provider: e.provider,
    api: e.api,
    toolType: e.tool_type,
    toolName: e.tool_name,
    callId: e.call_id ?? null,
    itemId: e.item_id ?? null,
    status: e.status ?? null,
    arguments: e.arguments ?? {},
  }),
  i = (e) => ({
    id: e.id,
    userId: e.user_id,
    title: e.title,
    branchTitlePending: e.branch_title_pending,
    branchSpaceId: e.branch_space_id,
    folderId: e.folder_id,
    latexDocumentId: e.latex_document_id,
    messages: e.messages.map(g),
    messageRevision: e.message_revision,
    contextSummary: e.context_summary ? z(e.context_summary) : null,
    contextUsage: e.context_usage ? B(e.context_usage) : null,
    isPublic: e.is_public,
    hasUnread: e.has_unread,
    isPinned: e.is_pinned,
    pinnedAt: e.pinned_at,
    archivedAt: e.archived_at,
    inputSafetyBlockedAt: e.input_safety_blocked_at,
    inputSafetyBannedUntil: e.input_safety_banned_until ?? null,
    activeRun: e.active_run ? d(e.active_run) : null,
    latestRun: e.latest_run ? d(e.latest_run) : null,
    activeProChatCallStartedAt: e.active_pro_chat_call_started_at ?? null,
    ...(e.submitted_run !== void 0
      ? { submittedRun: e.submitted_run ? d(e.submitted_run) : null }
      : {}),
    createdAt: e.created_at,
    lastUpdated: e.last_updated,
    deletedAt: e.deleted_at,
  }),
  z = (e) => ({
    id: e.id,
    previousSummaryId: e.previous_summary_id,
    summaryCount: e.summary_count ?? 1,
    summarizedMessageCount: e.summarized_message_count,
    retainedTurnCount: e.retained_turn_count,
    triggerMessageIndex: e.trigger_message_index,
    createdAt: e.created_at,
  }),
  B = (e) => ({ inputTokens: e.input_tokens, thresholdTokens: e.threshold_tokens }),
  c = (e) => ({
    id: e.id,
    userId: e.user_id,
    title: e.title,
    branchTitlePending: e.branch_title_pending,
    branchSpaceId: e.branch_space_id,
    folderId: e.folder_id,
    latexDocumentId: e.latex_document_id,
    preview: e.preview,
    messageCount: e.message_count,
    messageRevision: e.message_revision,
    isPublic: e.is_public,
    hasUnread: e.has_unread,
    isPinned: e.is_pinned,
    pinnedAt: e.pinned_at,
    archivedAt: e.archived_at,
    inputSafetyBlockedAt: e.input_safety_blocked_at,
    activeRun: e.active_run ? d(e.active_run) : null,
    latestRun: e.latest_run ? d(e.latest_run) : null,
    activeProChatCallStartedAt: e.active_pro_chat_call_started_at ?? null,
    createdAt: e.created_at,
    lastUpdated: e.last_updated,
    deletedAt: e.deleted_at,
  }),
  D = (e) => ({
    selectedChatId: e.selected_chat_id,
    restoreChatIds: e.restore_chat_ids,
    deleteChatIds: e.delete_chat_ids,
    archivedDeleteChatIds: e.archived_delete_chat_ids,
    activeDeleteChatIds: e.active_delete_chat_ids,
    scopeToken: e.scope_token,
  }),
  F = (e) => ({
    id: e.id,
    title: e.title,
    messages: e.messages.map(g),
    messageRevision: e.message_revision,
    createdAt: e.created_at,
    lastUpdated: e.last_updated,
  }),
  d = (e) => ({
    id: e.id,
    chatId: e.chat_id,
    userId: e.user_id,
    status: e.status,
    clientRequestId: e.client_request_id ?? null,
    inputRevision: e.input_revision,
    outputRevision: e.output_revision ?? null,
    workflowMode: e.workflow_mode ?? "single",
    modelId: e.model_id ?? null,
    reasoningEffort: e.reasoning_effort ?? null,
    operation: e.operation ?? null,
    nextStepsRegeneration: e.next_steps_regeneration
      ? {
          choices: e.next_steps_regeneration.choices,
          selectedChoiceIndexes: e.next_steps_regeneration.selected_choice_indexes,
        }
      : null,
    errorMessage: e.error_message ?? null,
    attemptCount: e.attempt_count,
    publicErrorCode: e.public_error_code ?? null,
    publicErrorRetryAt: e.public_error_retry_at ?? null,
    publicErrorLimitValue: e.public_error_limit_value ?? null,
    publicErrorWindowSeconds: e.public_error_window_seconds ?? null,
    startedAt: e.started_at,
    finishedAt: e.finished_at ?? null,
    createdAt: e.created_at,
    lastUpdated: e.last_updated,
  }),
  re = (e) => ({
    activeRun: e.active_run ? d(e.active_run) : null,
    latestRun: e.latest_run ? d(e.latest_run) : null,
    activeProChatCallStartedAt: e.active_pro_chat_call_started_at ?? null,
  }),
  le = (e) => {
    var t, a, o;
    return {
      type: e.type,
      sequence: e.sequence,
      runId: e.run_id,
      chatId: e.chat_id,
      createdAt: e.created_at,
      status: e.status ?? null,
      source: e.source ?? null,
      text: e.text ?? null,
      ...(e.operation_id !== void 0 ? { operationId: e.operation_id } : {}),
      ...(e.task_id !== void 0 ? { taskId: e.task_id } : {}),
      task: e.task ? u(e.task) : null,
      tasks: ((t = e.tasks) == null ? void 0 : t.map(u)) ?? null,
      operations: ((a = e.operations) == null ? void 0 : a.map(I)) ?? null,
      outputs: ((o = e.outputs) == null ? void 0 : o.map(f)) ?? null,
    };
  },
  v = (e) => ({
    id: e.id,
    userId: e.user_id,
    name: e.name,
    folderId: e.folder_id,
    rootChatId: e.root_chat_id,
    createdAt: e.created_at,
    lastUpdated: e.last_updated,
  }),
  O = (e) => ({
    id: e.id,
    userId: e.user_id,
    name: e.name,
    parentId: e.parent_id,
    isPinned: e.is_pinned,
    pinnedAt: e.pinned_at,
    createdAt: e.created_at,
    lastUpdated: e.last_updated,
  }),
  q = (e) => ({
    id: e.id,
    branchSpaceId: e.branch_space_id,
    sourceChatId: e.source_chat_id,
    sourceMessageIndex: e.source_message_index,
    targetChatId: e.target_chat_id,
    createdAt: e.created_at,
    lastUpdated: e.last_updated,
  }),
  ce = (e) => ({
    branchSpace: v(e.branch_space),
    rootChatId: e.root_chat_id,
    nodes: e.nodes.map(c),
    edges: e.edges.map(q),
  }),
  L = (e) => ({ ...v(e), chatCount: e.chat_count }),
  H = (e) => ({ ...O(e), chatCount: e.chat_count }),
  W = (e) => ({
    chatId: e.chat_id,
    userId: e.user_id,
    chatTitle: e.chat_title,
    branchSpaceId: e.branch_space_id,
    folderId: e.folder_id,
    archivedAt: e.archived_at,
    deletedAt: e.deleted_at,
    messageIndex: e.message_index,
    message: {
      role: e.message.role,
      timestamp: e.message.timestamp,
      excerpt: e.message.excerpt,
      operation: e.message.operation,
    },
  }),
  _e = (e) => ({
    chats: e.chats.map(c),
    branchSpaces: e.branch_spaces.map(L),
    folders: e.folders.map(H),
    messages: e.messages.map(W),
  }),
  x = (e) => ({
    title: e.title ?? null,
    ...(e.branchSpaceId !== void 0 ? { branch_space_id: e.branchSpaceId } : {}),
    ...(e.folderId !== void 0 ? { folder_id: e.folderId } : {}),
    messages: (e.messages ?? []).map(_),
    ...(e.isPublic !== void 0 ? { is_public: e.isPublic } : {}),
    user: e.user
      ? {
          first_name: e.user.firstName ?? null,
          last_name: e.user.lastName ?? null,
          email: e.user.email ?? null,
        }
      : null,
  }),
  N = (e) => ({ message_index: e.messageIndex }),
  G = (e) => ({
    message_index: e.messageIndex,
    expected_revision: e.expectedRevision,
    branch_space_name: e.branchSpaceName,
    selections: e.selections.map((t) => ({ choice_index: t.choiceIndex, prompt: t.prompt })),
    execution_mode: e.executionMode,
    reasoning_effort: e.reasoningEffort,
  }),
  j = (e, t) => ({
    user_message_index: e.userMessageIndex,
    ...(e.assistantMessageIndex !== void 0 && e.assistantMessageIndex !== null
      ? { assistant_message_index: e.assistantMessageIndex }
      : {}),
    is_minimized: e.isMinimized,
    expected_revision: t,
  }),
  Q = (e, t) => ({ feedback: e.feedback, expected_revision: t }),
  C = (e) => ({
    ...(e.workflowMode === "agent" ? { workflow_mode: "agent" } : {}),
    ...(e.messages !== void 0 ? { messages: e.messages.map(_) } : {}),
    ...(e.executionMode !== void 0 ? { execution_mode: e.executionMode } : {}),
    ...(e.operation !== void 0 ? { operation: e.operation } : {}),
    ...(e.reasoningEffort !== void 0 ? { reasoning_effort: e.reasoningEffort } : {}),
    ...(e.nextStepsRegeneration !== void 0
      ? {
          next_steps_regeneration: {
            choices: e.nextStepsRegeneration.choices,
            selected_choice_indexes: e.nextStepsRegeneration.selectedChoiceIndexes,
          },
        }
      : {}),
    ...(e.clientRequestId !== void 0 ? { client_request_id: e.clientRequestId } : {}),
    ...(e.proChatCall ? { pro_chat_call: !0 } : {}),
    ...(e.latexEditorContext !== void 0
      ? {
          latex_editor_context: {
            document_revision: e.latexEditorContext.documentRevision,
            ...(e.latexEditorContext.activeFileId !== void 0
              ? { active_file_id: e.latexEditorContext.activeFileId }
              : {}),
            ...(e.latexEditorContext.selectionStart !== void 0
              ? { selection_start: e.latexEditorContext.selectionStart }
              : {}),
            ...(e.latexEditorContext.selectionEnd !== void 0
              ? { selection_end: e.latexEditorContext.selectionEnd }
              : {}),
          },
        }
      : {}),
  }),
  V = (e) => ({ chat: x(e.chat), submission: C(e.submission) }),
  Y = (e) => ({
    ...(e.title !== void 0 ? { title: e.title } : {}),
    ...(e.folderId !== void 0 ? { folder_id: e.folderId } : {}),
    ...(e.isPublic !== void 0 ? { is_public: e.isPublic } : {}),
    ...(e.isPinned !== void 0 ? { is_pinned: e.isPinned } : {}),
    ...C(e),
    ...(e.expectedRevision !== void 0 ? { expected_revision: e.expectedRevision } : {}),
  }),
  Z = (e) => ({ messages: e.messages.map(_) }),
  pe = (e) => ({ name: e.name, parent_id: e.parentId ?? null }),
  ue = (e) => ({
    ...(e.name !== void 0 ? { name: e.name } : {}),
    ...(e.isPinned !== void 0 ? { is_pinned: e.isPinned } : {}),
  }),
  me = (e) => ({
    id: e.id,
    label: e.label,
    description: e.description,
    isDefault: e.is_default,
    supportsReasoning: e.capabilities.supports_reasoning,
    reasoningEfforts: e.capabilities.reasoning_efforts,
    supportsImages: e.capabilities.supports_images,
    supportsDocuments: e.capabilities.supports_documents,
    supportsPdfInput: e.capabilities.supports_pdf_input,
    nativeFileContentTypes: e.capabilities.native_file_content_types,
    contextWindow: e.capabilities.context_window,
    inputTokenLimit: e.capabilities.input_token_limit,
    outputTokenLimit: e.capabilities.output_token_limit,
    maxImagesPerPrompt: e.capabilities.max_images_per_prompt,
    maxDocumentsPerPrompt: e.capabilities.max_documents_per_prompt,
    maxPdfPagesPerPrompt: e.capabilities.max_pdf_pages_per_prompt,
    maxUploadFileSizeMb: e.capabilities.max_upload_file_size_mb,
    maxRequestSizeMb: e.capabilities.max_request_size_mb,
  }),
  he = (e) => ({
    id: e.id,
    label: e.label,
    description: e.description,
    isDefault: e.is_default,
    capabilities: {
      supportsOperationSelection: e.capabilities.supports_operation_selection,
      supportsExecutionModeSelection: e.capabilities.supports_execution_mode_selection,
      supportsSteering: e.capabilities.supports_steering,
      maxOperations: e.capabilities.max_operations,
    },
  }),
  K = (e) => {
    const t = {
      name: e.name,
      content_type: e.contentType,
      kind: e.kind,
      ...(e.sizeBytes !== void 0 && e.sizeBytes !== null ? { size_bytes: e.sizeBytes } : {}),
    };
    if (e.attachmentId) return { attachment_id: e.attachmentId, ...t };
    if (!e.dataBase64) throw new Error(`Attachment '${e.name}' has no stored id or legacy data.`);
    return { ...(e.id ? { id: e.id } : {}), ...t, data_base64: e.dataBase64 };
  },
  J = (e) => ({
    text: e.text,
    message_index: e.messageIndex,
    ...(e.range ? { range: { start: e.range.start, end: e.range.end } } : {}),
  }),
  _ = (e) => ({
    role: e.role,
    content: e.content,
    timestamp: e.timestamp,
    ...(e.reasoning ? { reasoning: e.reasoning } : {}),
    ...(e.reasoningDurationSeconds !== void 0 && e.reasoningDurationSeconds !== null
      ? { reasoning_duration_seconds: e.reasoningDurationSeconds }
      : {}),
    ...(e.modelId ? { model_id: e.modelId } : {}),
    ...(e.reasoningEffort ? { reasoning_effort: e.reasoningEffort } : {}),
    ...(e.displayMode ? { display_mode: e.displayMode } : {}),
    ...(e.usage ? { usage: X(e.usage) } : {}),
    ...(e.sources && e.sources.length > 0 ? { sources: e.sources.map(ee) } : {}),
    ...(e.citations && e.citations.length > 0 ? { citations: e.citations.map(te) } : {}),
    ...(e.textSegments && e.textSegments.length > 0
      ? { text_segments: e.textSegments.map(ae) }
      : {}),
    ...(e.toolCalls && e.toolCalls.length > 0 ? { tool_calls: e.toolCalls.map(se) } : {}),
    ...(e.attachments && e.attachments.length > 0 ? { attachments: e.attachments.map(K) } : {}),
    ...(e.quote ? { quote: J(e.quote) } : {}),
    ...(e.isMinimized ? { is_minimized: !0 } : {}),
    ...(e.feedback !== void 0 ? { feedback: e.feedback } : {}),
  }),
  Ie = (e) => ({
    messages: e.messages.map(_),
    expected_revision: e.expectedRevision,
    client_request_id: e.clientRequestId,
  }),
  X = (e) => ({
    model: e.modelId,
    input_tokens: e.inputTokens,
    output_tokens: e.outputTokens,
    total_tokens: e.totalTokens,
  }),
  ee = (e) => ({
    id: e.id,
    url: e.url,
    title: e.title ?? null,
    domain: e.domain,
    provider: e.provider,
    tool: e.tool,
    retrieved_at: e.retrievedAt ?? null,
    status: e.status,
  }),
  te = (e) => ({
    id: e.id,
    source_ids: e.sourceIds,
    start_index: e.startIndex ?? null,
    end_index: e.endIndex ?? null,
    anchor_text: e.anchorText ?? null,
    cited_text: e.citedText ?? null,
  }),
  ae = (e) => ({ type: e.type, text: e.text ?? null, source_ids: e.sourceIds }),
  se = (e) => ({
    provider: e.provider,
    api: e.api,
    tool_type: e.toolType,
    tool_name: e.toolName,
    ...(e.callId ? { call_id: e.callId } : {}),
    ...(e.itemId ? { item_id: e.itemId } : {}),
    ...(e.status ? { status: e.status } : {}),
    arguments: e.arguments,
  }),
  fe = 60 * 1e3,
  ge = 60 * 1e3,
  b = async ({ fetchPage: e, itemLabel: t, pageSize: a }) => {
    const o = [],
      l = new Set();
    let m = 0;
    for (;;) {
      const r = await e({ limit: a, offset: m });
      if (r.length > a)
        throw new Error(`${t} pagination returned more than ${a} items in one page.`);
      for (const p of r) {
        if (l.has(p.id)) throw new Error(`${t} pagination returned duplicate id '${p.id}'.`);
        l.add(p.id);
      }
      if ((o.push(...r), r.length < a)) return o;
      m += r.length;
    }
  },
  ve = (e) => n.post(s, "chats", x(e)).then(i),
  xe = (e) => n.post(s, "chats/start", V(e)).then(i),
  Ce = (e, t) => n.post(s, `chats/${e}/branches`, N(t)).then(i),
  be = (e, t) =>
    n
      .post(s, `chats/${e}/next-steps/run-all`, G(t))
      .then((a) => ({
        sourceChat: i(a.source_chat),
        rootChat: i(a.root_chat),
        branchChats: a.branches.map(i),
      })),
  Ae = (e, t, a) => n.post(s, `chats/${e}/minimize`, j(t, a)).then(i),
  ye = (e, t, a) => n.post(s, `chats/${e}/messages/${t.messageIndex}/feedback`, Q(t, a)).then(i),
  Se = (e, t) => n.get(s, `chats/${e}`, void 0, t).then(i),
  ke = (e) => n.post(s, `chats/${e}/read`, {}).then(() => {}),
  Te = async (e) => {
    const t = await fetch(`https://app.mathvision.ai/${s}/share/${encodeURIComponent(e)}`, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    if (!t.ok) throw A(t);
    return F(await t.json());
  },
  ne = 200,
  Pe = async (e) =>
    b({
      pageSize: ne,
      itemLabel: "Archived chat",
      fetchPage: async ({ limit: t, offset: a }) =>
        (await n.get(s, "chats/archived", { limit: t, offset: a }, e)).map(c),
    }),
  ie = 200,
  Re = async (e) =>
    b({
      pageSize: ie,
      itemLabel: "Shared chat",
      fetchPage: async ({ limit: t, offset: a }) =>
        (await n.get(s, "chats/shared", { limit: t, offset: a }, e)).map(c),
    }),
  Ee = () => n.post(s, "chats/shared/unshare-all", {}).then(() => {}),
  we = (e) => n.get(s, `chats/archived/${encodeURIComponent(e)}/action-scope`).then((t) => D(t)),
  Ue = (e, t) => n.put(s, `chats/${e}`, Y(t)).then(i),
  Me = (e, t) => n.post(s, `chats/${e}/move-to-folder`, { folder_id: t }).then(i),
  $e = (e) => n.post(s, `chats/${e}/archive`, {}).then(i),
  ze = (e, t) =>
    n.post(s, `chats/${encodeURIComponent(e)}/restore`, { expected_scope_token: t }).then(i),
  Be = (e, t) => n.post(s, `chats/${e}/derive-title`, Z(t)).then(i),
  De = (e, t = {}) => {
    const a = new URLSearchParams();
    t.expectedScopeToken && a.set("expected_scope_token", t.expectedScopeToken);
    for (const l of t.expectedDeleteChatIds ?? []) a.append("expected_delete_chat_ids", l);
    const o = a.toString();
    return n.delete(s, `chats/${encodeURIComponent(e)}${o ? `?${o}` : ""}`).then(() => {});
  };
export {
  pe as A,
  ue as B,
  ge as C,
  Be as D,
  be as E,
  Ce as F,
  ve as G,
  xe as H,
  Ae as I,
  ye as J,
  fe as a,
  Te as b,
  re as c,
  Ie as d,
  le as e,
  _e as f,
  Se as g,
  me as h,
  he as i,
  c as j,
  ce as k,
  v as l,
  ke as m,
  O as n,
  we as o,
  b as p,
  De as q,
  ze as r,
  Me as s,
  i as t,
  Ue as u,
  $e as v,
  Pe as w,
  Ee as x,
  Re as y,
  de as z,
};
