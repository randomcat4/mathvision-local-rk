/** Response mappers recovered from chatsApi-Ck-JYICO.js. */

interface WireSafeError {
  code: string;
  message: string;
}

interface WireAgentCriterion {
  criterion_id: string;
  text: string;
  status: string;
  result_summary?: string | null;
  operation_output_ids: string[];
  citation_ids: string[];
  artifact_refs: unknown[];
}

interface WireAgentTask {
  task_id: string;
  revision: number;
  title?: string | null;
  objective: string;
  status: string;
  created_at: string;
  started_at?: string | null;
  completed_at?: string | null;
  success_criteria: WireAgentCriterion[];
  result_summary?: string | null;
  unresolved_items: string[];
  operation_output_ids: string[];
  safe_error?: WireSafeError | null;
}

interface WireAgentOperation {
  id: string;
  revision: number;
  task_id: string;
  operation: string;
  status: string;
  title: string;
  summary?: string | null;
  error?: string | null;
  started_at_ms?: number | null;
  finished_at_ms?: number | null;
}

interface WireAgentOutput {
  id: string;
  task_id: string;
  operation: string;
  status: string;
  title: string;
  response: string;
  markdown_math_format?: string | null;
  source_ids: string[];
  citation_ids: string[];
  tool_call_indexes: number[];
  artifact_refs: unknown[];
}

interface WireAgentExecution {
  outcome: "completed" | "partial" | "failed";
  answer: string;
  tasks: WireAgentTask[];
  operations: WireAgentOperation[];
  outputs: WireAgentOutput[];
  used_task_ids: string[];
  used_operation_output_ids: string[];
  citation_ids: string[];
  artifact_refs: unknown[];
  unresolved_items: string[];
  safe_error?: WireSafeError | null;
}

interface WireUsage {
  model: string;
  input_tokens: number;
  output_tokens: number;
  total_tokens: number;
}

interface WireRunUsageItem {
  purpose: string;
  model: string;
  input_tokens: number;
  cached_input_tokens: number;
  cache_write_input_tokens: number;
  output_tokens: number;
  total_tokens: number;
  usage_reports: unknown[];
}

interface WireRunUsage {
  input_tokens: number;
  cached_input_tokens: number;
  cache_write_input_tokens: number;
  output_tokens: number;
  total_tokens: number;
  usage_reports: unknown[];
  breakdown: WireRunUsageItem[];
}

interface WireSource {
  id: string;
  url: string;
  title?: string | null;
  domain: string;
  provider: string;
  tool: string;
  retrieved_at?: string | null;
  status: string;
}

interface WireCitation {
  id: string;
  source_ids: string[];
  start_index?: number | null;
  end_index?: number | null;
  anchor_text?: string | null;
  cited_text?: string | null;
}

interface WireTextSegment {
  type: string;
  text?: string | null;
  source_ids?: string[] | null;
}

interface WireToolCall {
  provider: string;
  api: string;
  tool_type: string;
  tool_name: string;
  call_id?: string | null;
  item_id?: string | null;
  status?: string | null;
  arguments?: Record<string, unknown> | null;
}

interface WireAttachment {
  id?: string | null;
  attachment_id?: string | null;
  name: string;
  content_type: string;
  kind: string;
  data_base64?: string | null;
  size_bytes?: number | null;
}

interface WireQuote {
  text: string;
  message_index: number;
  range?: { start: number; end: number } | null;
}

interface WireProChatCall {
  run_id: string;
  status: string;
  answer_tex: string | null;
  research_notes_tex: string | null;
  error_message: string | null;
  started_at: string;
  finished_at: string | null;
}

export interface WireChatMessage {
  role: string;
  content: string;
  timestamp: string;
  reasoning: string | null;
  reasoning_duration_seconds?: number | null;
  model_id?: string | null;
  reasoning_effort?: string | null;
  display_mode?: string | null;
  workflow_mode?: string | null;
  agent_execution?: WireAgentExecution | null;
  markdown_math_format?: string | null;
  usage?: WireUsage | null;
  run_usage?: WireRunUsage | null;
  sources?: WireSource[] | null;
  citations?: WireCitation[] | null;
  text_segments?: WireTextSegment[] | null;
  tool_calls?: WireToolCall[] | null;
  latex_edit_proposal_id?: string | null;
  attachments?: WireAttachment[] | null;
  quote?: WireQuote | null;
  is_minimized?: boolean | null;
  feedback?: unknown;
  pro_chat_call?: WireProChatCall | null;
}

export function firstSentence(text: string): string {
  return text.split(new RegExp("(?<=[.!?])\\s+(?=[A-Z0-9])", "u"))[0]?.trim() || text;
}

export function normalizeAgentOperationTitle(title: string): string {
  const normalized = title.replace(
    /^(?:Answer|Compute|Research|Review|Visualize|Write):\s*/iu,
    "",
  );
  if (!normalized) {
    throw new Error("Agent operation title is empty after removing its redundant label.");
  }
  return normalized;
}

export function mapAgentTask(task: WireAgentTask) {
  return {
    taskId: task.task_id,
    revision: task.revision,
    title: task.title?.trim() || firstSentence(task.objective),
    objective: task.objective,
    status: task.status,
    createdAt: task.created_at,
    startedAt: task.started_at ?? null,
    completedAt: task.completed_at ?? null,
    successCriteria: task.success_criteria.map((criterion) => ({
      criterionId: criterion.criterion_id,
      text: criterion.text,
      status: criterion.status,
      resultSummary: criterion.result_summary ?? null,
      operationOutputIds: criterion.operation_output_ids,
      citationIds: criterion.citation_ids,
      artifactRefs: criterion.artifact_refs,
    })),
    resultSummary: task.result_summary ?? null,
    unresolvedItems: task.unresolved_items,
    operationOutputIds: task.operation_output_ids,
    safeError: task.safe_error
      ? { code: task.safe_error.code, message: task.safe_error.message }
      : null,
  };
}

export function mapAgentOperation(operation: WireAgentOperation) {
  return {
    id: operation.id,
    revision: operation.revision,
    taskId: operation.task_id,
    operation: operation.operation,
    status: operation.status,
    title: normalizeAgentOperationTitle(operation.title),
    summary: operation.summary ?? null,
    error: operation.error ?? null,
    startedAtMs: operation.started_at_ms ?? null,
    finishedAtMs: operation.finished_at_ms ?? null,
  };
}

export function mapAgentOutput(output: WireAgentOutput) {
  return {
    id: output.id,
    taskId: output.task_id,
    operation: output.operation,
    status: output.status,
    title: normalizeAgentOperationTitle(output.title),
    response: output.response,
    markdownMathFormat: output.markdown_math_format ?? null,
    sourceIds: output.source_ids,
    citationIds: output.citation_ids,
    toolCallIndexes: output.tool_call_indexes,
    artifactRefs: output.artifact_refs,
  };
}

export function mapAgentExecution(execution: WireAgentExecution) {
  return {
    outcome: execution.outcome,
    answer: execution.answer,
    tasks: execution.tasks.map(mapAgentTask),
    operations: execution.operations.map(mapAgentOperation),
    outputs: execution.outputs.map(mapAgentOutput),
    usedTaskIds: execution.used_task_ids,
    usedOperationOutputIds: execution.used_operation_output_ids,
    citationIds: execution.citation_ids,
    artifactRefs: execution.artifact_refs,
    unresolvedItems: execution.unresolved_items,
    safeError: execution.safe_error
      ? { code: execution.safe_error.code, message: execution.safe_error.message }
      : null,
  };
}

export function mapChatMessage(message: WireChatMessage) {
  if (message.role !== "user" && message.role !== "assistant") {
    throw new Error("Chat response contains an unsupported message role.");
  }
  const role: "user" | "assistant" = message.role;
  return {
    role,
    content: message.content,
    timestamp: message.timestamp,
    reasoning: message.reasoning,
    reasoningDurationSeconds: message.reasoning_duration_seconds ?? null,
    modelId: message.model_id ?? undefined,
    reasoningEffort: message.reasoning_effort ?? undefined,
    displayMode: message.display_mode ?? undefined,
    workflowMode: message.workflow_mode ?? undefined,
    agentExecution: message.agent_execution ? mapAgentExecution(message.agent_execution) : undefined,
    markdownMathFormat: message.markdown_math_format ?? undefined,
    usage: message.usage
      ? {
          modelId: message.usage.model,
          inputTokens: message.usage.input_tokens,
          outputTokens: message.usage.output_tokens,
          totalTokens: message.usage.total_tokens,
        }
      : undefined,
    runUsage: message.run_usage
      ? {
          inputTokens: message.run_usage.input_tokens,
          cachedInputTokens: message.run_usage.cached_input_tokens,
          cacheWriteInputTokens: message.run_usage.cache_write_input_tokens,
          outputTokens: message.run_usage.output_tokens,
          totalTokens: message.run_usage.total_tokens,
          usageReports: message.run_usage.usage_reports,
          breakdown: message.run_usage.breakdown.map((item) => ({
            purpose: item.purpose,
            modelId: item.model,
            inputTokens: item.input_tokens,
            cachedInputTokens: item.cached_input_tokens,
            cacheWriteInputTokens: item.cache_write_input_tokens,
            outputTokens: item.output_tokens,
            totalTokens: item.total_tokens,
            usageReports: item.usage_reports,
          })),
        }
      : undefined,
    sources: (message.sources ?? []).map((source) => ({
      id: source.id,
      url: source.url,
      title: source.title ?? null,
      domain: source.domain,
      provider: source.provider,
      tool: source.tool,
      retrievedAt: source.retrieved_at ?? null,
      status: source.status,
    })),
    citations: (message.citations ?? []).map((citation) => ({
      id: citation.id,
      sourceIds: citation.source_ids,
      startIndex: citation.start_index ?? null,
      endIndex: citation.end_index ?? null,
      anchorText: citation.anchor_text ?? null,
      citedText: citation.cited_text ?? null,
    })),
    textSegments: (message.text_segments ?? []).map((segment) => ({
      type: segment.type,
      text: segment.text ?? null,
      sourceIds: segment.source_ids ?? [],
    })),
    toolCalls: (message.tool_calls ?? []).map((toolCall) => ({
      provider: toolCall.provider,
      api: toolCall.api,
      toolType: toolCall.tool_type,
      toolName: toolCall.tool_name,
      callId: toolCall.call_id ?? null,
      itemId: toolCall.item_id ?? null,
      status: toolCall.status ?? null,
      arguments: toolCall.arguments ?? {},
    })),
    latexEditProposalId: message.latex_edit_proposal_id ?? null,
    attachments: (message.attachments ?? []).map((attachment) => ({
      id: attachment.attachment_id ?? attachment.id ?? null,
      attachmentId: attachment.attachment_id ?? null,
      name: attachment.name,
      contentType: attachment.content_type,
      dataBase64: attachment.data_base64 ?? null,
      kind: attachment.kind,
      sizeBytes: attachment.size_bytes ?? null,
    })),
    quote: message.quote
      ? {
          text: message.quote.text,
          messageIndex: message.quote.message_index,
          range: message.quote.range
            ? { start: message.quote.range.start, end: message.quote.range.end }
            : null,
        }
      : null,
    isMinimized: message.is_minimized ?? false,
    feedback: message.feedback ?? null,
    proChatCall: message.pro_chat_call
      ? {
          runId: message.pro_chat_call.run_id,
          status: message.pro_chat_call.status,
          answerTex: message.pro_chat_call.answer_tex,
          researchNotesTex: message.pro_chat_call.research_notes_tex,
          errorMessage: message.pro_chat_call.error_message,
          startedAt: message.pro_chat_call.started_at,
          finishedAt: message.pro_chat_call.finished_at,
        }
      : null,
  };
}

export interface WireChatRun {
  id: string;
  chat_id: string;
  user_id: string;
  status: string;
  client_request_id?: string | null;
  input_revision: number;
  output_revision?: number | null;
  workflow_mode?: string | null;
  model_id?: string | null;
  reasoning_effort?: string | null;
  operation?: string | null;
  next_steps_regeneration?: {
    choices: unknown[];
    selected_choice_indexes: number[];
  } | null;
  error_message?: string | null;
  attempt_count: number;
  public_error_code?: string | null;
  public_error_retry_at?: string | null;
  public_error_limit_value?: number | null;
  public_error_window_seconds?: number | null;
  started_at: string;
  finished_at?: string | null;
  created_at: string;
  last_updated: string;
}

export function mapChatRun(run: WireChatRun) {
  return {
    id: run.id,
    chatId: run.chat_id,
    userId: run.user_id,
    status: run.status,
    clientRequestId: run.client_request_id ?? null,
    inputRevision: run.input_revision,
    outputRevision: run.output_revision ?? null,
    workflowMode: run.workflow_mode ?? "single",
    modelId: run.model_id ?? null,
    reasoningEffort: run.reasoning_effort ?? null,
    operation: run.operation ?? null,
    nextStepsRegeneration: run.next_steps_regeneration
      ? {
          choices: run.next_steps_regeneration.choices,
          selectedChoiceIndexes: run.next_steps_regeneration.selected_choice_indexes,
        }
      : null,
    errorMessage: run.error_message ?? null,
    attemptCount: run.attempt_count,
    publicErrorCode: run.public_error_code ?? null,
    publicErrorRetryAt: run.public_error_retry_at ?? null,
    publicErrorLimitValue: run.public_error_limit_value ?? null,
    publicErrorWindowSeconds: run.public_error_window_seconds ?? null,
    startedAt: run.started_at,
    finishedAt: run.finished_at ?? null,
    createdAt: run.created_at,
    lastUpdated: run.last_updated,
  };
}

interface WireContextSummary {
  id: string;
  previous_summary_id: string | null;
  summary_count?: number | null;
  summarized_message_count: number;
  retained_turn_count: number;
  trigger_message_index: number;
  created_at: string;
}

interface WireContextUsage {
  input_tokens: number;
  threshold_tokens: number;
}

export interface WireChat {
  id: string;
  user_id: string;
  title: string;
  branch_title_pending: boolean;
  branch_space_id: string | null;
  folder_id: string | null;
  latex_document_id: string | null;
  messages: WireChatMessage[];
  message_revision: number;
  context_summary?: WireContextSummary | null;
  context_usage?: WireContextUsage | null;
  is_public: boolean;
  has_unread: boolean;
  is_pinned: boolean;
  pinned_at: string | null;
  archived_at: string | null;
  input_safety_blocked_at: string | null;
  input_safety_banned_until?: string | null;
  active_run?: WireChatRun | null;
  latest_run?: WireChatRun | null;
  active_pro_chat_call_started_at?: string | null;
  submitted_run?: WireChatRun | null;
  created_at: string;
  last_updated: string;
  deleted_at: string | null;
}

export interface WireChatSummary extends Omit<WireChat, "messages"> {
  preview: string;
  message_count: number;
}

export function mapContextSummary(summary: WireContextSummary) {
  return {
    id: summary.id,
    previousSummaryId: summary.previous_summary_id,
    summaryCount: summary.summary_count ?? 1,
    summarizedMessageCount: summary.summarized_message_count,
    retainedTurnCount: summary.retained_turn_count,
    triggerMessageIndex: summary.trigger_message_index,
    createdAt: summary.created_at,
  };
}

export function mapChat(chat: WireChat) {
  return {
    id: chat.id,
    userId: chat.user_id,
    title: chat.title,
    branchTitlePending: chat.branch_title_pending,
    branchSpaceId: chat.branch_space_id,
    folderId: chat.folder_id,
    latexDocumentId: chat.latex_document_id,
    messages: chat.messages.map(mapChatMessage),
    messageRevision: chat.message_revision,
    contextSummary: chat.context_summary ? mapContextSummary(chat.context_summary) : null,
    contextUsage: chat.context_usage
      ? {
          inputTokens: chat.context_usage.input_tokens,
          thresholdTokens: chat.context_usage.threshold_tokens,
        }
      : null,
    isPublic: chat.is_public,
    hasUnread: chat.has_unread,
    isPinned: chat.is_pinned,
    pinnedAt: chat.pinned_at,
    archivedAt: chat.archived_at,
    inputSafetyBlockedAt: chat.input_safety_blocked_at,
    inputSafetyBannedUntil: chat.input_safety_banned_until ?? null,
    activeRun: chat.active_run ? mapChatRun(chat.active_run) : null,
    latestRun: chat.latest_run ? mapChatRun(chat.latest_run) : null,
    activeProChatCallStartedAt: chat.active_pro_chat_call_started_at ?? null,
    ...(chat.submitted_run !== undefined
      ? { submittedRun: chat.submitted_run ? mapChatRun(chat.submitted_run) : null }
      : {}),
    createdAt: chat.created_at,
    lastUpdated: chat.last_updated,
    deletedAt: chat.deleted_at,
  };
}

export function mapChatSummary(chat: WireChatSummary) {
  return {
    id: chat.id,
    userId: chat.user_id,
    title: chat.title,
    branchTitlePending: chat.branch_title_pending,
    branchSpaceId: chat.branch_space_id,
    folderId: chat.folder_id,
    latexDocumentId: chat.latex_document_id,
    preview: chat.preview,
    messageCount: chat.message_count,
    messageRevision: chat.message_revision,
    isPublic: chat.is_public,
    hasUnread: chat.has_unread,
    isPinned: chat.is_pinned,
    pinnedAt: chat.pinned_at,
    archivedAt: chat.archived_at,
    inputSafetyBlockedAt: chat.input_safety_blocked_at,
    activeRun: chat.active_run ? mapChatRun(chat.active_run) : null,
    latestRun: chat.latest_run ? mapChatRun(chat.latest_run) : null,
    activeProChatCallStartedAt: chat.active_pro_chat_call_started_at ?? null,
    createdAt: chat.created_at,
    lastUpdated: chat.last_updated,
    deletedAt: chat.deleted_at,
  };
}

export interface WireBranchSpace {
  id: string;
  user_id: string;
  name: string;
  folder_id: string | null;
  root_chat_id: string | null;
  created_at: string;
  last_updated: string;
  chat_count?: number;
}

export interface WireFolder {
  id: string;
  user_id: string;
  name: string;
  parent_id: string | null;
  is_pinned: boolean;
  pinned_at: string | null;
  created_at: string;
  last_updated: string;
  chat_count?: number;
}

export interface WireBranchEdge {
  id: string;
  branch_space_id: string;
  source_chat_id: string;
  source_message_index: number | null;
  target_chat_id: string;
  created_at: string;
  last_updated: string;
}

export const mapBranchSpace = (space: WireBranchSpace) => ({
  id: space.id,
  userId: space.user_id,
  name: space.name,
  folderId: space.folder_id,
  rootChatId: space.root_chat_id,
  createdAt: space.created_at,
  lastUpdated: space.last_updated,
});

export const mapFolder = (folder: WireFolder) => ({
  id: folder.id,
  userId: folder.user_id,
  name: folder.name,
  parentId: folder.parent_id,
  isPinned: folder.is_pinned,
  pinnedAt: folder.pinned_at,
  createdAt: folder.created_at,
  lastUpdated: folder.last_updated,
});

export const mapBranchEdge = (edge: WireBranchEdge) => ({
  id: edge.id,
  branchSpaceId: edge.branch_space_id,
  sourceChatId: edge.source_chat_id,
  sourceMessageIndex: edge.source_message_index,
  targetChatId: edge.target_chat_id,
  createdAt: edge.created_at,
  lastUpdated: edge.last_updated,
});

export const mapHierarchyGraph = (graph: {
  branch_space: WireBranchSpace;
  root_chat_id: string;
  nodes: WireChatSummary[];
  edges: WireBranchEdge[];
}) => ({
  branchSpace: mapBranchSpace(graph.branch_space),
  rootChatId: graph.root_chat_id,
  nodes: graph.nodes.map(mapChatSummary),
  edges: graph.edges.map(mapBranchEdge),
});

export const mapBranchSpaceWithCount = (space: WireBranchSpace & { chat_count: number }) => ({
  ...mapBranchSpace(space),
  chatCount: space.chat_count,
});

export const mapFolderWithCount = (folder: WireFolder & { chat_count: number }) => ({
  ...mapFolder(folder),
  chatCount: folder.chat_count,
});

export const mapRunState = (state: {
  active_run?: WireChatRun | null;
  latest_run?: WireChatRun | null;
  active_pro_chat_call_started_at?: string | null;
}) => ({
  activeRun: state.active_run ? mapChatRun(state.active_run) : null,
  latestRun: state.latest_run ? mapChatRun(state.latest_run) : null,
  activeProChatCallStartedAt: state.active_pro_chat_call_started_at ?? null,
});

export const mapArchivedActionScope = (scope: {
  selected_chat_id: string;
  restore_chat_ids: string[];
  delete_chat_ids: string[];
  archived_delete_chat_ids: string[];
  active_delete_chat_ids: string[];
  scope_token: string;
}) => ({
  selectedChatId: scope.selected_chat_id,
  restoreChatIds: scope.restore_chat_ids,
  deleteChatIds: scope.delete_chat_ids,
  archivedDeleteChatIds: scope.archived_delete_chat_ids,
  activeDeleteChatIds: scope.active_delete_chat_ids,
  scopeToken: scope.scope_token,
});

export const mapSharedChat = (chat: {
  id: string;
  title: string;
  messages: WireChatMessage[];
  message_revision: number;
  created_at: string;
  last_updated: string;
}) => ({
  id: chat.id,
  title: chat.title,
  messages: chat.messages.map(mapChatMessage),
  messageRevision: chat.message_revision,
  createdAt: chat.created_at,
  lastUpdated: chat.last_updated,
});

export const mapRunEvent = (event: {
  type: string;
  sequence: number;
  run_id: string;
  chat_id: string;
  created_at: string;
  status?: string | null;
  source?: string | null;
  text?: string | null;
  operation_id?: string;
  task_id?: string;
  task?: WireAgentTask | null;
  tasks?: WireAgentTask[] | null;
  operations?: WireAgentOperation[] | null;
  outputs?: WireAgentOutput[] | null;
}) => ({
  type: event.type,
  sequence: event.sequence,
  runId: event.run_id,
  chatId: event.chat_id,
  createdAt: event.created_at,
  status: event.status ?? null,
  source: event.source ?? null,
  text: event.text ?? null,
  ...(event.operation_id !== undefined ? { operationId: event.operation_id } : {}),
  ...(event.task_id !== undefined ? { taskId: event.task_id } : {}),
  task: event.task ? mapAgentTask(event.task) : null,
  tasks: event.tasks?.map(mapAgentTask) ?? null,
  operations: event.operations?.map(mapAgentOperation) ?? null,
  outputs: event.outputs?.map(mapAgentOutput) ?? null,
});

export const mapMessageSearchResult = (result: {
  id: string;
  chat_id: string;
  message_index: number;
  message_timestamp: string;
  created_at: string;
  chat_title: string;
  response_preview: string;
  chat_branch_space_id: string | null;
  chat_folder_id: string | null;
  chat_archived_at: string | null;
}) => ({
  id: result.id,
  chatId: result.chat_id,
  messageIndex: result.message_index,
  messageTimestamp: result.message_timestamp,
  createdAt: result.created_at,
  chatTitle: result.chat_title,
  responsePreview: result.response_preview,
  branchSpaceId: result.chat_branch_space_id,
  folderId: result.chat_folder_id,
  archivedAt: result.chat_archived_at,
});

export const mapModelConfig = (model: {
  id: string;
  label: string;
  description: string;
  is_default: boolean;
  capabilities: {
    supports_reasoning: boolean;
    reasoning_efforts: string[];
    supports_images: boolean;
    supports_documents: boolean;
    supports_pdf_input: boolean;
    native_file_content_types: string[];
    context_window: number;
    input_token_limit: number;
    output_token_limit: number;
    max_images_per_prompt: number;
    max_documents_per_prompt: number;
    max_pdf_pages_per_prompt: number;
    max_upload_file_size_mb: number;
    max_request_size_mb: number;
  };
}) => ({
  id: model.id,
  label: model.label,
  description: model.description,
  isDefault: model.is_default,
  supportsReasoning: model.capabilities.supports_reasoning,
  reasoningEfforts: model.capabilities.reasoning_efforts,
  supportsImages: model.capabilities.supports_images,
  supportsDocuments: model.capabilities.supports_documents,
  supportsPdfInput: model.capabilities.supports_pdf_input,
  nativeFileContentTypes: model.capabilities.native_file_content_types,
  contextWindow: model.capabilities.context_window,
  inputTokenLimit: model.capabilities.input_token_limit,
  outputTokenLimit: model.capabilities.output_token_limit,
  maxImagesPerPrompt: model.capabilities.max_images_per_prompt,
  maxDocumentsPerPrompt: model.capabilities.max_documents_per_prompt,
  maxPdfPagesPerPrompt: model.capabilities.max_pdf_pages_per_prompt,
  maxUploadFileSizeMb: model.capabilities.max_upload_file_size_mb,
  maxRequestSizeMb: model.capabilities.max_request_size_mb,
});

export const mapExecutionConfig = (config: {
  id: string;
  label: string;
  description: string;
  is_default: boolean;
  capabilities: {
    supports_operation_selection: boolean;
    supports_execution_mode_selection: boolean;
    supports_steering: boolean;
    max_operations: number;
  };
}) => ({
  id: config.id,
  label: config.label,
  description: config.description,
  isDefault: config.is_default,
  capabilities: {
    supportsOperationSelection: config.capabilities.supports_operation_selection,
    supportsExecutionModeSelection: config.capabilities.supports_execution_mode_selection,
    supportsSteering: config.capabilities.supports_steering,
    maxOperations: config.capabilities.max_operations,
  },
});
