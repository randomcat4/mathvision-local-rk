/** Network operations recovered from chatsApi-Ck-JYICO.js. */

import {
  apiBasePath,
  createHttpResponseError,
  httpClient,
} from "../../runtime/bundledHttpClient.js";
import {
  serializeBranchChat,
  serializeChat,
  serializeDeriveTitle,
  serializeMessageFeedback,
  serializeMinimizeMessagePair,
  serializeRunAllNextSteps,
  serializeStartChat,
  serializeUpdateChat,
  type ChatInput,
  type ChatMessageInput,
  type RunSubmissionInput,
} from "./requests";
import {
  mapArchivedActionScope,
  mapBranchSpace,
  mapBranchSpaceWithCount,
  mapChat,
  mapChatSummary,
  mapFolder,
  mapFolderWithCount,
  mapHierarchyGraph,
  mapMessageSearchResult,
  mapSharedChat,
  type WireBranchSpace,
  type WireChat,
  type WireChatSummary,
  type WireFolder,
} from "./responses";

export const CHAT_STALE_TIME_MS = 60_000;
export const CHAT_GC_TIME_MS = 60_000;
const ARCHIVED_CHAT_PAGE_SIZE = 200;
const SHARED_CHAT_PAGE_SIZE = 200;

type MapperInput<T extends (input: never) => unknown> = Parameters<T>[0];

export async function paginateByOffset<T extends { id: string }>({
  fetchPage,
  itemLabel,
  pageSize,
}: {
  fetchPage: (page: { limit: number; offset: number }) => Promise<T[]>;
  itemLabel: string;
  pageSize: number;
}): Promise<T[]> {
  const items: T[] = [];
  const ids = new Set<string>();
  let offset = 0;

  for (;;) {
    const page = await fetchPage({ limit: pageSize, offset });
    if (page.length > pageSize) {
      throw new Error(`${itemLabel} pagination returned more than ${pageSize} items in one page.`);
    }
    for (const item of page) {
      if (ids.has(item.id)) {
        throw new Error(`${itemLabel} pagination returned duplicate id '${item.id}'.`);
      }
      ids.add(item.id);
    }
    items.push(...page);
    if (page.length < pageSize) return items;
    offset += page.length;
  }
}

export const createChat = (input: ChatInput) =>
  httpClient
    .post<WireChat>(apiBasePath, "chats", serializeChat(input))
    .then(mapChat);

export const startChat = (input: { chat: ChatInput; submission: RunSubmissionInput }) =>
  httpClient
    .post<WireChat>(apiBasePath, "chats/start", serializeStartChat(input))
    .then(mapChat);

export const branchChat = (chatId: string, input: { messageIndex: number }) =>
  httpClient
    .post<WireChat>(apiBasePath, `chats/${chatId}/branches`, serializeBranchChat(input))
    .then(mapChat);

export const runAllNextSteps = async (
  chatId: string,
  input: Parameters<typeof serializeRunAllNextSteps>[0],
) => {
  const response = await httpClient.post<{
    source_chat: WireChat;
    root_chat: WireChat;
    branches: WireChat[];
  }>(apiBasePath, `chats/${chatId}/next-steps/run-all`, serializeRunAllNextSteps(input));
  return {
    sourceChat: mapChat(response.source_chat),
    rootChat: mapChat(response.root_chat),
    branchChats: response.branches.map(mapChat),
  };
};

export const minimizeMessagePair = (
  chatId: string,
  input: Parameters<typeof serializeMinimizeMessagePair>[0],
  expectedRevision: number,
) =>
  httpClient
    .post<WireChat>(
      apiBasePath,
      `chats/${chatId}/minimize`,
      serializeMinimizeMessagePair(input, expectedRevision),
    )
    .then(mapChat);

export const setMessageFeedback = (
  chatId: string,
  input: { messageIndex: number; feedback: unknown },
  expectedRevision: number,
) =>
  httpClient
    .post<WireChat>(
      apiBasePath,
      `chats/${chatId}/messages/${input.messageIndex}/feedback`,
      serializeMessageFeedback(input, expectedRevision),
    )
    .then(mapChat);

export const getChat = (chatId: string, signal?: AbortSignal) =>
  httpClient.get<WireChat>(apiBasePath, `chats/${chatId}`, undefined, signal).then(mapChat);

export const markChatRead = (chatId: string) =>
  httpClient.post<unknown>(apiBasePath, `chats/${chatId}/read`, {}).then(() => undefined);

export async function getSharedChat(shareId: string) {
  const response = await fetch(
    `https://app.mathvision.ai/${apiBasePath}/share/${encodeURIComponent(shareId)}`,
    { method: "GET", headers: { Accept: "application/json" } },
  );
  if (!response.ok) throw createHttpResponseError(response);
  return mapSharedChat((await response.json()) as MapperInput<typeof mapSharedChat>);
}

export const listArchivedChats = (signal?: AbortSignal) =>
  paginateByOffset({
    pageSize: ARCHIVED_CHAT_PAGE_SIZE,
    itemLabel: "Archived chat",
    fetchPage: async ({ limit, offset }) =>
      (
        await httpClient.get<WireChatSummary[]>(
          apiBasePath,
          "chats/archived",
          { limit, offset },
          signal,
        )
      ).map(mapChatSummary),
  });

export const listSharedChats = (signal?: AbortSignal) =>
  paginateByOffset({
    pageSize: SHARED_CHAT_PAGE_SIZE,
    itemLabel: "Shared chat",
    fetchPage: async ({ limit, offset }) =>
      (
        await httpClient.get<WireChatSummary[]>(
          apiBasePath,
          "chats/shared",
          { limit, offset },
          signal,
        )
      ).map(mapChatSummary),
  });

export const unshareAllChats = () =>
  httpClient.post<unknown>(apiBasePath, "chats/shared/unshare-all", {}).then(() => undefined);

export const getArchivedChatActionScope = (chatId: string) =>
  httpClient
    .get<MapperInput<typeof mapArchivedActionScope>>(
      apiBasePath,
      `chats/archived/${encodeURIComponent(chatId)}/action-scope`,
    )
    .then(mapArchivedActionScope);

export const updateChat = (
  chatId: string,
  input: Parameters<typeof serializeUpdateChat>[0],
) =>
  httpClient
    .put<WireChat>(apiBasePath, `chats/${chatId}`, serializeUpdateChat(input))
    .then(mapChat);

export const moveChatToFolder = (chatId: string, folderId: string | null) =>
  httpClient
    .post<WireChat>(apiBasePath, `chats/${chatId}/move-to-folder`, { folder_id: folderId })
    .then(mapChat);

export const archiveChat = (chatId: string) =>
  httpClient.post<WireChat>(apiBasePath, `chats/${chatId}/archive`, {}).then(mapChat);

export const restoreChat = (chatId: string, expectedScopeToken: string) =>
  httpClient
    .post<WireChat>(apiBasePath, `chats/${encodeURIComponent(chatId)}/restore`, {
      expected_scope_token: expectedScopeToken,
    })
    .then(mapChat);

export const deriveChatTitle = (chatId: string, input: { messages: ChatMessageInput[] }) =>
  httpClient
    .post<WireChat>(apiBasePath, `chats/${chatId}/derive-title`, serializeDeriveTitle(input))
    .then(mapChat);

export const deleteChat = (
  chatId: string,
  options: { expectedScopeToken?: string; expectedDeleteChatIds?: string[] } = {},
) => {
  const query = new URLSearchParams();
  if (options.expectedScopeToken) query.set("expected_scope_token", options.expectedScopeToken);
  for (const expectedId of options.expectedDeleteChatIds ?? []) {
    query.append("expected_delete_chat_ids", expectedId);
  }
  const suffix = query.toString();
  return httpClient
    .delete<unknown>(
      apiBasePath,
      `chats/${encodeURIComponent(chatId)}${suffix ? `?${suffix}` : ""}`,
    )
    .then(() => undefined);
};

export const mapSearchResponse = (response: {
  chats: WireChatSummary[];
  branch_spaces: Array<WireBranchSpace & { chat_count: number }>;
  folders: Array<WireFolder & { chat_count: number }>;
  messages: Array<MapperInput<typeof mapMessageSearchResult>>;
}) => ({
  chats: response.chats.map(mapChatSummary),
  branchSpaces: response.branch_spaces.map(mapBranchSpaceWithCount),
  folders: response.folders.map(mapFolderWithCount),
  messages: response.messages.map(mapMessageSearchResult),
});

export { mapBranchSpace, mapFolder, mapHierarchyGraph };
