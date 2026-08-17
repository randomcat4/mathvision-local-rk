import type { ComponentType } from "react";
import type { PendingAgentOperation, PendingAgentOutput, PendingAgentTask } from "../features/chat/pendingAgentState";
export const AgentOperationProgress: ComponentType<any>;
export const AgentTaskProgress: ComponentType<any>;
export const AssistantMessageFrame: ComponentType<any>;
export const AssistantMessageMetadata: ComponentType<any>;
export const Box: ComponentType<any>;
export const MarkdownProvider: ComponentType<any>;
export const MessageBubble: ComponentType<any>;
export const PendingStructuredResponse: ComponentType<any>;
export interface ChatRunStreamEvent {
  type: string; runId?: string | null; sequence?: number; source?: string; text?: string;
  operationId?: string | null; taskId?: string | null; task?: PendingAgentTask;
  tasks?: PendingAgentTask[]; operations?: PendingAgentOperation[]; outputs?: PendingAgentOutput[];
}
export function streamChatRun(chatId: string, signal: AbortSignal): AsyncIterable<ChatRunStreamEvent>;
export function fetchRunStreamSnapshot(chatId: string, afterSequence: number): Promise<ChatRunStreamEvent[]>;
