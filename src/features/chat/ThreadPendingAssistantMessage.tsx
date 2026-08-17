import type {
  PendingAgentOperation,
  PendingAgentOutput,
  PendingAgentTask,
} from "./pendingAgentState";
import {
  usePendingRunStream,
  type ActiveChatRun,
  type PendingStream,
} from "./pendingRunStream";
import {
  AgentOperationProgress,
  AgentTaskProgress,
  AssistantMessageFrame,
  AssistantMessageMetadata,
  Box,
  MarkdownProvider,
  MessageBubble,
  PendingStructuredResponse,
} from "../../runtime/pendingMessageRuntime.js";

const agentProgressStyles = (theme: { spacing(value: number): string }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.2),
});

interface PendingMessageContentProps {
  runId: string;
  startedAt: number;
  message: Record<string, unknown>;
  responseNumber: number;
  operation?: string;
  availableModels?: unknown[];
  streamText: string;
  statusLabel: string;
  workflowMode?: string;
  chatId: string;
  messageIndex: number;
  tasks?: PendingAgentTask[];
  taskStreams?: PendingStream[];
  operations?: PendingAgentOperation[];
  operationOutputs?: PendingAgentOutput[];
  operationStreams?: PendingStream[];
  onContentChange?(): void;
}

function PendingMessageContent({
  runId,
  startedAt,
  message,
  responseNumber,
  operation,
  availableModels,
  streamText,
  statusLabel,
  workflowMode = "single",
  chatId,
  messageIndex,
  tasks = [],
  taskStreams = [],
  operations = [],
  operationOutputs = [],
  operationStreams = [],
  onContentChange,
}: PendingMessageContentProps) {
  return (
    <AssistantMessageFrame>
      <AssistantMessageMetadata
        message={message}
        responseNumber={responseNumber}
        operation={operation}
        availableModels={availableModels}
      />
      <MessageBubble type="assistant">
        {workflowMode === "agent" && (
          <Box sx={agentProgressStyles}>
            <AgentTaskProgress
              chatId={chatId}
              messageIndex={messageIndex}
              tasks={tasks}
              operations={operations}
              operationOutputs={operationOutputs}
              taskStreams={taskStreams}
              onContentChange={onContentChange}
            />
            <AgentOperationProgress
              chatId={chatId}
              messageIndex={messageIndex}
              runId={runId}
              operations={operations}
              operationOutputs={operationOutputs}
              operationStreams={operationStreams}
              responseNumber={responseNumber}
              startedAt={startedAt}
              statusLabel={statusLabel}
              tasks={tasks}
              onContentChange={onContentChange}
            />
          </Box>
        )}
        {workflowMode !== "agent" && (
          <PendingStructuredResponse
            runId={runId}
            startedAt={startedAt}
            streamText={streamText}
            statusLabel={statusLabel}
            headingLabel="Thinking"
            onContentChange={onContentChange}
          />
        )}
      </MessageBubble>
    </AssistantMessageFrame>
  );
}

export interface ThreadPendingAssistantMessageProps {
  chatId: string;
  activeRun?: ActiveChatRun | null;
  refetchRunState(): void;
  startedAt: number;
  message: Record<string, unknown>;
  messageIndex: number;
  responseNumber: number;
  operation?: string;
  availableModels?: unknown[];
  onContentChange?(): void;
  markdownLatexMacros?: Record<string, string>;
}

function PendingAssistantMessage(
  props: Omit<ThreadPendingAssistantMessageProps, "markdownLatexMacros">,
) {
  const pending = usePendingRunStream({
    chatId: props.chatId,
    activeRun: props.activeRun,
    refetchRunState: props.refetchRunState,
  });
  const runId = props.activeRun?.id ?? `${props.chatId}-${props.startedAt}`;
  const agentMode = props.activeRun?.workflowMode === "agent";
  return (
    <PendingMessageContent
      runId={runId}
      startedAt={props.startedAt}
      message={agentMode ? {} : props.message}
      responseNumber={props.responseNumber}
      operation={agentMode ? undefined : props.operation}
      availableModels={props.availableModels}
      streamText={pending.pendingReasoningText}
      statusLabel={pending.pendingStatusLabel}
      workflowMode={props.activeRun?.workflowMode ?? "single"}
      chatId={props.chatId}
      messageIndex={props.messageIndex}
      tasks={pending.pendingTasks}
      taskStreams={pending.pendingTaskStreams}
      operations={pending.pendingOperations}
      operationOutputs={pending.pendingOutputs}
      operationStreams={pending.pendingOperationStreams}
      onContentChange={props.onContentChange}
    />
  );
}

export function ThreadPendingAssistantMessage({
  markdownLatexMacros,
  ...props
}: ThreadPendingAssistantMessageProps) {
  return (
    <MarkdownProvider macros={markdownLatexMacros}>
      <PendingAssistantMessage {...props} />
    </MarkdownProvider>
  );
}
