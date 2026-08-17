import type { ComponentType, RefObject } from "react";
export const Alert: ComponentType<any>;
export const Box: ComponentType<any>;
export const Button: ComponentType<any>;
export const ChatSubmissionProvider: ComponentType<any>;
export const Chip: ComponentType<any>;
export const CircularProgress: ComponentType<any>;
export const ComposerAttachmentCard: ComponentType<any>;
export const EraserIcon: ComponentType<any>;
export const Markdown: ComponentType<any>;
export const MessageAttachments: ComponentType<any>;
export const MessageBubble: ComponentType<any>;
export const MessageSources: ComponentType<any>;
export const PanelCloseIcon: ComponentType<any>;
export const Stack: ComponentType<any>;
export const TextField: ComponentType<any>;
export const TooltipIconButton: ComponentType<any>;
export const Typography: ComponentType<any>;
export function alpha(color: string, opacity: number): string;
export function createLucideIcon(
  name: string,
  nodes: unknown[],
): ComponentType<any>;
export const ACCEPTED_ATTACHMENT_TYPES: string;
export const ACTIVE_PROJECT_CHAT_MESSAGE: string;
export interface ProjectMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  attachments?: unknown[];
  latexEditProposalId?: string | null;
  markdownMathFormat?: string;
  sources?: unknown[];
  modelId?: string | null;
}
export interface ProjectChat {
  id: string;
  latexDocumentId: string;
  messageRevision: number;
  messages: ProjectMessage[];
  activeRun?: unknown | null;
  latestRun?: { status?: string } | null;
  inputSafetyBlockedAt?: string | null;
}
export function getProjectChat(documentId: string): Promise<ProjectChat>;
export function updateChat(id: string, input: unknown): Promise<ProjectChat>;
export function getErrorMessage(error: unknown, fallback: string): string;
export function shouldRefreshProject(error: unknown): boolean;
export function getRunErrorMessage(chat: ProjectChat): string | null;
export const toast: {
  success(message: string): void;
  error(message: string): void;
};
export const cacheKeys: { editProposals(id: string): readonly unknown[] };
export const queryKeys: unknown;
export function useQuery(options: any): any;
export function useMutation(options: any): any;
export function useQueryClient(): any;
export function useChat(id: string | null, options: unknown): any;
export function useChatPolling(id: string, options: unknown): void;
export function useExecutionModes(): any;
export function useComposerAttachments(options: unknown): any;
export function useChatSubmission(options: unknown): any;
export function useLatexEditProposal(
  documentId: string,
  proposalId: string | null,
): any;
export function useConfirmation(
  factory: (key: string, close: () => void) => unknown,
): { activate(key: string): void; confirmationDialog: unknown };
export function rollbackChat(client: unknown, id: string, error: unknown): void;
export function notifyChatChanged(chat: ProjectChat): void;
