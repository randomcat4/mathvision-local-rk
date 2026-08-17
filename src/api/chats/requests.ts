/**
 * Request serialization recovered from chatsApi-Ck-JYICO.js.
 * Optional-field tests deliberately match the production bundle's truthy/undefined checks.
 */

export interface AttachmentInput {
  id?: string | null;
  attachmentId?: string | null;
  name: string;
  contentType: string;
  kind: string;
  sizeBytes?: number | null;
  dataBase64?: string | null;
}

export interface QuoteInput {
  text: string;
  messageIndex: number;
  range?: { start: number; end: number } | null;
}

export interface UsageInput {
  modelId: string;
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
}

export interface SourceInput {
  id: string;
  url: string;
  title: string | null;
  domain: string;
  provider: string;
  tool: string;
  retrievedAt: string | null;
  status: string;
}

export interface CitationInput {
  id: string;
  sourceIds: string[];
  startIndex: number | null;
  endIndex: number | null;
  anchorText: string | null;
  citedText: string | null;
}

export interface TextSegmentInput {
  type: string;
  text: string | null;
  sourceIds: string[];
}

export interface ToolCallInput {
  provider: string;
  api: string;
  toolType: string;
  toolName: string;
  callId?: string | null;
  itemId?: string | null;
  status?: string | null;
  arguments: Record<string, unknown>;
}

export interface ChatMessageInput {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  reasoning?: string | null;
  reasoningDurationSeconds?: number | null;
  modelId?: string | null;
  reasoningEffort?: string | null;
  displayMode?: string | null;
  usage?: UsageInput | null;
  sources?: SourceInput[];
  citations?: CitationInput[];
  textSegments?: TextSegmentInput[];
  toolCalls?: ToolCallInput[];
  attachments?: AttachmentInput[];
  quote?: QuoteInput | null;
  isMinimized?: boolean;
  feedback?: unknown;
}

export interface ChatInput {
  title?: string | null;
  branchSpaceId?: string | null;
  folderId?: string | null;
  messages?: ChatMessageInput[];
  isPublic?: boolean;
  user?: {
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
  } | null;
}

export interface RunSubmissionInput {
  workflowMode?: string;
  messages?: ChatMessageInput[];
  executionMode?: string;
  operation?: string;
  reasoningEffort?: string;
  nextStepsRegeneration?: {
    choices: unknown[];
    selectedChoiceIndexes: number[];
  };
  clientRequestId?: string;
  proChatCall?: boolean;
  latexEditorContext?: {
    documentRevision: number;
    activeFileId?: string;
    selectionStart?: number;
    selectionEnd?: number;
  };
}

export function serializeAttachment(attachment: AttachmentInput) {
  const metadata = {
    name: attachment.name,
    content_type: attachment.contentType,
    kind: attachment.kind,
    ...(attachment.sizeBytes !== undefined && attachment.sizeBytes !== null
      ? { size_bytes: attachment.sizeBytes }
      : {}),
  };

  if (attachment.attachmentId) return { attachment_id: attachment.attachmentId, ...metadata };
  if (!attachment.dataBase64) {
    throw new Error(`Attachment '${attachment.name}' has no stored id or legacy data.`);
  }
  return {
    ...(attachment.id ? { id: attachment.id } : {}),
    ...metadata,
    data_base64: attachment.dataBase64,
  };
}

export function serializeQuote(quote: QuoteInput) {
  return {
    text: quote.text,
    message_index: quote.messageIndex,
    ...(quote.range ? { range: { start: quote.range.start, end: quote.range.end } } : {}),
  };
}

export function serializeUsage(usage: UsageInput) {
  return {
    model: usage.modelId,
    input_tokens: usage.inputTokens,
    output_tokens: usage.outputTokens,
    total_tokens: usage.totalTokens,
  };
}

export function serializeSource(source: SourceInput) {
  return {
    id: source.id,
    url: source.url,
    title: source.title ?? null,
    domain: source.domain,
    provider: source.provider,
    tool: source.tool,
    retrieved_at: source.retrievedAt ?? null,
    status: source.status,
  };
}

export function serializeCitation(citation: CitationInput) {
  return {
    id: citation.id,
    source_ids: citation.sourceIds,
    start_index: citation.startIndex ?? null,
    end_index: citation.endIndex ?? null,
    anchor_text: citation.anchorText ?? null,
    cited_text: citation.citedText ?? null,
  };
}

export function serializeTextSegment(segment: TextSegmentInput) {
  return { type: segment.type, text: segment.text ?? null, source_ids: segment.sourceIds };
}

export function serializeToolCall(toolCall: ToolCallInput) {
  return {
    provider: toolCall.provider,
    api: toolCall.api,
    tool_type: toolCall.toolType,
    tool_name: toolCall.toolName,
    ...(toolCall.callId ? { call_id: toolCall.callId } : {}),
    ...(toolCall.itemId ? { item_id: toolCall.itemId } : {}),
    ...(toolCall.status ? { status: toolCall.status } : {}),
    arguments: toolCall.arguments,
  };
}

export function serializeChatMessage(message: ChatMessageInput) {
  return {
    role: message.role,
    content: message.content,
    timestamp: message.timestamp,
    ...(message.reasoning ? { reasoning: message.reasoning } : {}),
    ...(message.reasoningDurationSeconds !== undefined &&
    message.reasoningDurationSeconds !== null
      ? { reasoning_duration_seconds: message.reasoningDurationSeconds }
      : {}),
    ...(message.modelId ? { model_id: message.modelId } : {}),
    ...(message.reasoningEffort ? { reasoning_effort: message.reasoningEffort } : {}),
    ...(message.displayMode ? { display_mode: message.displayMode } : {}),
    ...(message.usage ? { usage: serializeUsage(message.usage) } : {}),
    ...(message.sources && message.sources.length > 0
      ? { sources: message.sources.map(serializeSource) }
      : {}),
    ...(message.citations && message.citations.length > 0
      ? { citations: message.citations.map(serializeCitation) }
      : {}),
    ...(message.textSegments && message.textSegments.length > 0
      ? { text_segments: message.textSegments.map(serializeTextSegment) }
      : {}),
    ...(message.toolCalls && message.toolCalls.length > 0
      ? { tool_calls: message.toolCalls.map(serializeToolCall) }
      : {}),
    ...(message.attachments && message.attachments.length > 0
      ? { attachments: message.attachments.map(serializeAttachment) }
      : {}),
    ...(message.quote ? { quote: serializeQuote(message.quote) } : {}),
    ...(message.isMinimized ? { is_minimized: true } : {}),
    ...(message.feedback !== undefined ? { feedback: message.feedback } : {}),
  };
}

export function serializeChat(chat: ChatInput) {
  return {
    title: chat.title ?? null,
    ...(chat.branchSpaceId !== undefined ? { branch_space_id: chat.branchSpaceId } : {}),
    ...(chat.folderId !== undefined ? { folder_id: chat.folderId } : {}),
    messages: (chat.messages ?? []).map(serializeChatMessage),
    ...(chat.isPublic !== undefined ? { is_public: chat.isPublic } : {}),
    user: chat.user
      ? {
          first_name: chat.user.firstName ?? null,
          last_name: chat.user.lastName ?? null,
          email: chat.user.email ?? null,
        }
      : null,
  };
}

export function serializeRunSubmission(input: RunSubmissionInput) {
  return {
    ...(input.workflowMode === "agent" ? { workflow_mode: "agent" } : {}),
    ...(input.messages !== undefined
      ? { messages: input.messages.map(serializeChatMessage) }
      : {}),
    ...(input.executionMode !== undefined ? { execution_mode: input.executionMode } : {}),
    ...(input.operation !== undefined ? { operation: input.operation } : {}),
    ...(input.reasoningEffort !== undefined ? { reasoning_effort: input.reasoningEffort } : {}),
    ...(input.nextStepsRegeneration !== undefined
      ? {
          next_steps_regeneration: {
            choices: input.nextStepsRegeneration.choices,
            selected_choice_indexes: input.nextStepsRegeneration.selectedChoiceIndexes,
          },
        }
      : {}),
    ...(input.clientRequestId !== undefined ? { client_request_id: input.clientRequestId } : {}),
    ...(input.proChatCall ? { pro_chat_call: true } : {}),
    ...(input.latexEditorContext !== undefined
      ? {
          latex_editor_context: {
            document_revision: input.latexEditorContext.documentRevision,
            ...(input.latexEditorContext.activeFileId !== undefined
              ? { active_file_id: input.latexEditorContext.activeFileId }
              : {}),
            ...(input.latexEditorContext.selectionStart !== undefined
              ? { selection_start: input.latexEditorContext.selectionStart }
              : {}),
            ...(input.latexEditorContext.selectionEnd !== undefined
              ? { selection_end: input.latexEditorContext.selectionEnd }
              : {}),
          },
        }
      : {}),
  };
}

export function serializeStartChat(input: { chat: ChatInput; submission: RunSubmissionInput }) {
  return { chat: serializeChat(input.chat), submission: serializeRunSubmission(input.submission) };
}

export function serializeUpdateChat(
  input: RunSubmissionInput & {
    title?: string;
    folderId?: string | null;
    isPublic?: boolean;
    isPinned?: boolean;
    expectedRevision?: number;
  },
) {
  return {
    ...(input.title !== undefined ? { title: input.title } : {}),
    ...(input.folderId !== undefined ? { folder_id: input.folderId } : {}),
    ...(input.isPublic !== undefined ? { is_public: input.isPublic } : {}),
    ...(input.isPinned !== undefined ? { is_pinned: input.isPinned } : {}),
    ...serializeRunSubmission(input),
    ...(input.expectedRevision !== undefined ? { expected_revision: input.expectedRevision } : {}),
  };
}

export const serializeBranchChat = (input: { messageIndex: number }) => ({
  message_index: input.messageIndex,
});

export const serializeRunAllNextSteps = (input: {
  messageIndex: number;
  expectedRevision: number;
  branchSpaceName: string;
  selections: Array<{ choiceIndex: number; prompt: string }>;
  executionMode: string;
  reasoningEffort: string;
}) => ({
  message_index: input.messageIndex,
  expected_revision: input.expectedRevision,
  branch_space_name: input.branchSpaceName,
  selections: input.selections.map((selection) => ({
    choice_index: selection.choiceIndex,
    prompt: selection.prompt,
  })),
  execution_mode: input.executionMode,
  reasoning_effort: input.reasoningEffort,
});

export const serializeMinimizeMessagePair = (
  input: { userMessageIndex: number; assistantMessageIndex?: number | null; isMinimized: boolean },
  expectedRevision: number,
) => ({
  user_message_index: input.userMessageIndex,
  ...(input.assistantMessageIndex !== undefined && input.assistantMessageIndex !== null
    ? { assistant_message_index: input.assistantMessageIndex }
    : {}),
  is_minimized: input.isMinimized,
  expected_revision: expectedRevision,
});

export const serializeMessageFeedback = (input: { feedback: unknown }, expectedRevision: number) => ({
  feedback: input.feedback,
  expected_revision: expectedRevision,
});

export const serializeAppendMessages = (input: {
  messages: ChatMessageInput[];
  expectedRevision: number;
  clientRequestId: string;
}) => ({
  messages: input.messages.map(serializeChatMessage),
  expected_revision: input.expectedRevision,
  client_request_id: input.clientRequestId,
});

export const serializeDeriveTitle = (input: { messages: ChatMessageInput[] }) => ({
  messages: input.messages.map(serializeChatMessage),
});

export const serializeCreateFolder = (input: { name: string; parentId?: string | null }) => ({
  name: input.name,
  parent_id: input.parentId ?? null,
});

export const serializeUpdateFolder = (input: { name?: string; isPinned?: boolean }) => ({
  ...(input.name !== undefined ? { name: input.name } : {}),
  ...(input.isPinned !== undefined ? { is_pinned: input.isPinned } : {}),
});
