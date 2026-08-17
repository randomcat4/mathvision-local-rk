/**
 * Recovered from chatsApi-Ck-JYICO.js and chatMessageSelectors-CRUAC26Y.js.
 * Field names and nullability follow the production bundle.
 */

export type ChatMessageRole = "user" | "assistant";

export interface ChatMessage {
  role: ChatMessageRole;
  content: string;
  timestamp: string;
  [field: string]: unknown;
}

export interface ChatRunSummary {
  status: string;
  [field: string]: unknown;
}

export interface ChatWithRunState {
  messages: ChatMessage[];
  activeRun: ChatRunSummary | null;
  latestRun: ChatRunSummary | null;
}

export interface MessageOrdinal {
  queryNumber?: number;
  responseNumber?: number;
}
