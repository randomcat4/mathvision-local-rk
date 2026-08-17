import type { mapChat, mapChatSummary } from "../api/chats/responses";

export type Chat = ReturnType<typeof mapChat>;
export type ChatSummary = ReturnType<typeof mapChatSummary>;
export type QueryKey = readonly unknown[];

export interface QueryClient {
  getQueryData<T>(key: QueryKey): T | undefined;
  setQueryData<T>(key: QueryKey, updater: T | ((previous: T | undefined) => T | undefined)): void;
  invalidateQueries(options: { queryKey: QueryKey; exact?: boolean; predicate?: (query: { queryKey: QueryKey }) => boolean }): Promise<unknown>;
  cancelQueries(options: { queryKey: QueryKey; exact?: boolean }): Promise<unknown>;
  prefetchQuery(options: {
    queryKey: QueryKey;
    queryFn: (context: { signal: AbortSignal }) => Promise<unknown>;
    retry: boolean;
    staleTime: number;
    gcTime: number;
  }): Promise<unknown> | void;
}

export const chatQueryKeys: {
  chat(chatId: string): QueryKey;
  chats(): QueryKey;
  explorer(): QueryKey;
  explorerSnapshot(): QueryKey;
  branchSpaces(): QueryKey;
  branchSpaceDetails(): QueryKey;
  branchSpaceGraphs(): QueryKey;
};

export function notifyExplorerChanged(input: {
  chatId: string;
  branchSpaceIds: Array<string | null>;
}): void;
export function storeChatInCaches(client: QueryClient, chat: Chat): void;
export function isConflictingUpdateError(error: unknown): boolean;
export const toast: {
  error(message: string, options: { key: string; preventDuplicate: boolean }): void;
};
