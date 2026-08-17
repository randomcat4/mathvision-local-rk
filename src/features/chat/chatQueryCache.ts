/** Behavior-preserving recovery of chatQueryCache-DOdNJrP_.js. */

import {
  chatQueryKeys,
  isConflictingUpdateError,
  notifyExplorerChanged,
  storeChatInCaches,
  toast,
  type Chat,
  type ChatSummary,
  type QueryClient,
} from "../../runtime/chatCacheRuntime.js";
import {
  CHAT_GC_TIME_MS,
  CHAT_STALE_TIME_MS,
  getChat,
  markChatRead,
} from "../../api/chats/client";

export const isDocumentActive = () =>
  document.visibilityState === "visible" && document.hasFocus();

export const getCachedChat = (queryClient: QueryClient, chatId: string): Chat | null =>
  queryClient.getQueryData<Chat>(chatQueryKeys.chat(chatId)) ?? null;

export function getCachedChatRevision(queryClient: QueryClient, chatId: string): number {
  const chat = getCachedChat(queryClient, chatId);
  if (!chat) throw new Error(`Chat '${chatId}' must be loaded before updating its messages.`);
  return chat.messageRevision;
}

export function notifyChatExplorerChanged(chat: Chat, additionalBranchSpaceIds = [] as Array<string | null>) {
  notifyExplorerChanged({
    chatId: chat.id,
    branchSpaceIds: [chat.branchSpaceId, ...additionalBranchSpaceIds],
  });
}

export async function loadChat(
  queryClient: QueryClient,
  chatId: string,
  options: { signal?: AbortSignal; markRead?: boolean } = {},
): Promise<Chat> {
  const chat = await getChat(chatId, options.signal);
  if (options.markRead && chat.hasUnread) {
    const readChat = { ...chat, hasUnread: false };
    try {
      await markChatRead(chatId);
    } catch (error) {
      storeChatInCaches(queryClient, chat);
      notifyChatExplorerChanged(chat);
      console.warn("Could not mark chat as read.", error);
      toast.error("Chat loaded, but we couldn’t mark it as read.", {
        key: `chat-mark-read-${chatId}`,
        preventDuplicate: true,
      });
      return chat;
    }
    storeChatInCaches(queryClient, readChat);
    queryClient.invalidateQueries({ queryKey: chatQueryKeys.explorer() });
    notifyChatExplorerChanged(readChat);
    return readChat;
  }
  storeChatInCaches(queryClient, chat);
  return chat;
}

export async function refreshChatAfterConflict(
  queryClient: QueryClient,
  chatId: string,
  error: unknown,
): Promise<void> {
  if (!isConflictingUpdateError(error)) return;
  try {
    const chat = await loadChat(queryClient, chatId);
    notifyChatExplorerChanged(chat);
  } catch (refreshError) {
    console.warn("Could not refresh the chat after a conflicting update.", refreshError);
  }
}

export function prefetchChat(queryClient: QueryClient, chatId: string): void {
  const queryKey = chatQueryKeys.chat(chatId);
  if (queryClient.getQueryData(queryKey)) return;
  void queryClient.prefetchQuery({
    queryKey,
    queryFn: ({ signal }) => getChat(chatId, signal),
    retry: false,
    staleTime: CHAT_STALE_TIME_MS,
    gcTime: CHAT_GC_TIME_MS,
  });
}

export function findCachedChatSummary(
  queryClient: QueryClient,
  chatId: string,
): Chat | ChatSummary | null {
  const chat = getCachedChat(queryClient, chatId);
  if (chat) return chat;

  const snapshot = queryClient.getQueryData<{
    chats: ChatSummary[];
    hierarchyGraphs: Array<{ nodes: ChatSummary[] }>;
  }>(chatQueryKeys.explorerSnapshot());
  return (
    snapshot?.chats.find((item) => item.id === chatId) ??
    snapshot?.hierarchyGraphs.flatMap((graph) => graph.nodes).find((item) => item.id === chatId) ??
    queryClient.getQueryData<ChatSummary[]>(chatQueryKeys.chats())?.find((item) => item.id === chatId) ??
    null
  );
}

export const invalidateExplorer = (queryClient: QueryClient) =>
  queryClient.invalidateQueries({ queryKey: chatQueryKeys.explorer() });

export const cancelExplorer = (queryClient: QueryClient) =>
  queryClient.cancelQueries({ queryKey: chatQueryKeys.explorer() });

export function invalidateChatExplorerData(
  queryClient: QueryClient,
  options: { excludeBranchSpaceIds?: string[] } = {},
) {
  const excludedIds = new Set(options.excludeBranchSpaceIds ?? []);
  const includeQuery = (query: { queryKey: readonly unknown[] }) => {
    const branchSpaceId = query.queryKey[2];
    return typeof branchSpaceId !== "string" || !excludedIds.has(branchSpaceId);
  };
  return Promise.all([
    invalidateExplorer(queryClient),
    queryClient.invalidateQueries({ queryKey: chatQueryKeys.chats() }),
    queryClient.invalidateQueries({ queryKey: chatQueryKeys.branchSpaces() }),
    queryClient.invalidateQueries({
      queryKey: chatQueryKeys.branchSpaceDetails(),
      predicate: includeQuery,
    }),
    queryClient.invalidateQueries({
      queryKey: chatQueryKeys.branchSpaceGraphs(),
      predicate: includeQuery,
    }),
  ]);
}
