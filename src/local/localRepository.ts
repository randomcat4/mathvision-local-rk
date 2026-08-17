const STORAGE_KEY = "mathvision:local-workspace:v1";
const LOCAL_USER_ID = "local-user";

export interface LocalFolderRecord {
  id: string;
  user_id: string;
  name: string;
  parent_id: string | null;
  is_pinned: boolean;
  pinned_at: string | null;
  created_at: string;
  last_updated: string;
}

export interface LocalChatRecord {
  id: string;
  user_id: string;
  title: string;
  branch_title_pending: boolean;
  branch_space_id: string | null;
  folder_id: string | null;
  latex_document_id: string | null;
  messages: Array<Record<string, unknown>>;
  message_revision: number;
  is_public: boolean;
  has_unread: boolean;
  is_pinned: boolean;
  pinned_at: string | null;
  archived_at: string | null;
  input_safety_blocked_at: string | null;
  active_run: null;
  latest_run: null;
  active_pro_chat_call_started_at: null;
  created_at: string;
  last_updated: string;
  deleted_at: string | null;
}

interface LocalWorkspaceState {
  version: 1;
  chats: LocalChatRecord[];
  folders: LocalFolderRecord[];
  profile: Record<string, unknown>;
}

function initialState(): LocalWorkspaceState {
  return {
    version: 1,
    chats: [],
    folders: [],
    profile: {
      id: LOCAL_USER_ID,
      first_name: "Local",
      last_name: "User",
      display_name: "Local User",
      email: "",
      personalization: "",
      tour_guide: {},
      waitlist_affiliation: null,
      waitlist_heard_about: null,
      waitlist_referred_by: null,
      arxiv_paper: null,
      area_of_interest_keywords: [],
      onboarded_at: new Date(0).toISOString(),
    },
  };
}

function readState(): LocalWorkspaceState {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return initialState();
  try {
    const parsed = JSON.parse(raw) as Partial<LocalWorkspaceState>;
    if (parsed.version !== 1 || !Array.isArray(parsed.chats) || !Array.isArray(parsed.folders)) {
      return initialState();
    }
    return {
      version: 1,
      chats: parsed.chats,
      folders: parsed.folders,
      profile: parsed.profile ?? initialState().profile,
    };
  } catch {
    return initialState();
  }
}

function writeState(state: LocalWorkspaceState): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent("mathvision:local-workspace-changed"));
}

function id(prefix: string): string {
  return `${prefix}-${crypto.randomUUID()}`;
}

function now(): string {
  return new Date().toISOString();
}

function chatSummary(chat: LocalChatRecord): Record<string, unknown> {
  const lastMessage = chat.messages.at(-1);
  return {
    ...chat,
    messages: undefined,
    preview: typeof lastMessage?.content === "string" ? lastMessage.content : "",
    message_count: chat.messages.length,
  };
}

function createChatRecord(input: Record<string, unknown>): LocalChatRecord {
  const createdAt = now();
  const messages = Array.isArray(input.messages)
    ? (input.messages as Array<Record<string, unknown>>)
    : [];
  return {
    id: id("chat"),
    user_id: LOCAL_USER_ID,
    title: typeof input.title === "string" && input.title.trim() ? input.title : "New chat",
    branch_title_pending: false,
    branch_space_id: typeof input.branch_space_id === "string" ? input.branch_space_id : null,
    folder_id: typeof input.folder_id === "string" ? input.folder_id : null,
    latex_document_id: null,
    messages,
    message_revision: messages.length,
    is_public: input.is_public === true,
    has_unread: false,
    is_pinned: false,
    pinned_at: null,
    archived_at: null,
    input_safety_blocked_at: null,
    active_run: null,
    latest_run: null,
    active_pro_chat_call_started_at: null,
    created_at: createdAt,
    last_updated: createdAt,
    deleted_at: null,
  };
}

export class LocalRepository {
  getProfile(): Record<string, unknown> {
    return readState().profile;
  }

  updateProfile(patch: Record<string, unknown>): Record<string, unknown> {
    const state = readState();
    state.profile = { ...state.profile, ...patch };
    writeState(state);
    return state.profile;
  }

  listChats(options: { archived?: boolean } = {}): Array<Record<string, unknown>> {
    return readState().chats
      .filter((chat) => !chat.deleted_at && Boolean(chat.archived_at) === Boolean(options.archived))
      .sort((left, right) => right.last_updated.localeCompare(left.last_updated))
      .map(chatSummary);
  }

  getChat(chatId: string): LocalChatRecord | undefined {
    return readState().chats.find((chat) => chat.id === chatId && !chat.deleted_at);
  }

  createChat(input: Record<string, unknown>): LocalChatRecord {
    const state = readState();
    const chat = createChatRecord(input);
    state.chats.unshift(chat);
    writeState(state);
    return chat;
  }

  updateChat(chatId: string, patch: Record<string, unknown>): LocalChatRecord | undefined {
    const state = readState();
    const chat = state.chats.find((candidate) => candidate.id === chatId && !candidate.deleted_at);
    if (!chat) return undefined;
    if (typeof patch.title === "string") chat.title = patch.title;
    if ("folder_id" in patch) chat.folder_id = typeof patch.folder_id === "string" ? patch.folder_id : null;
    if (Array.isArray(patch.messages)) chat.messages = patch.messages as Array<Record<string, unknown>>;
    if (typeof patch.is_public === "boolean") chat.is_public = patch.is_public;
    chat.message_revision = chat.messages.length;
    chat.last_updated = now();
    writeState(state);
    return chat;
  }

  archiveChat(chatId: string, archived: boolean): LocalChatRecord | undefined {
    return this.updateChatFields(chatId, { archived_at: archived ? now() : null });
  }

  deleteChat(chatId: string): boolean {
    return Boolean(this.updateChatFields(chatId, { deleted_at: now() }));
  }

  listFolders(): LocalFolderRecord[] {
    return readState().folders.sort((left, right) => left.name.localeCompare(right.name));
  }

  createFolder(input: Record<string, unknown>): LocalFolderRecord {
    const state = readState();
    const createdAt = now();
    const folder: LocalFolderRecord = {
      id: id("folder"),
      user_id: LOCAL_USER_ID,
      name: typeof input.name === "string" && input.name.trim() ? input.name : "Untitled folder",
      parent_id: typeof input.parent_id === "string" ? input.parent_id : null,
      is_pinned: false,
      pinned_at: null,
      created_at: createdAt,
      last_updated: createdAt,
    };
    state.folders.push(folder);
    writeState(state);
    return folder;
  }

  updateFolder(folderId: string, patch: Record<string, unknown>): LocalFolderRecord | undefined {
    const state = readState();
    const folder = state.folders.find((candidate) => candidate.id === folderId);
    if (!folder) return undefined;
    if (typeof patch.name === "string") folder.name = patch.name;
    if ("parent_id" in patch) folder.parent_id = typeof patch.parent_id === "string" ? patch.parent_id : null;
    folder.last_updated = now();
    writeState(state);
    return folder;
  }

  deleteFolder(folderId: string): boolean {
    const state = readState();
    const before = state.folders.length;
    state.folders = state.folders.filter((folder) => folder.id !== folderId);
    for (const chat of state.chats) if (chat.folder_id === folderId) chat.folder_id = null;
    if (state.folders.length === before) return false;
    writeState(state);
    return true;
  }

  snapshot(): Record<string, unknown> {
    const state = readState();
    return {
      folders: state.folders,
      chats: state.chats.filter((chat) => !chat.archived_at && !chat.deleted_at).map(chatSummary),
      hierarchies: [],
      hierarchy_graphs: [],
    };
  }

  reset(): void {
    window.localStorage.removeItem(STORAGE_KEY);
  }

  private updateChatFields(
    chatId: string,
    patch: Pick<LocalChatRecord, "archived_at"> | Pick<LocalChatRecord, "deleted_at">,
  ): LocalChatRecord | undefined {
    const state = readState();
    const chat = state.chats.find((candidate) => candidate.id === chatId);
    if (!chat) return undefined;
    Object.assign(chat, patch, { last_updated: now() });
    writeState(state);
    return chat;
  }
}

export const localRepository = new LocalRepository();
