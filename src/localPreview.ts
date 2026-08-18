import { localRepository } from "./local/localRepository";
import {
  GAO_ORIGINAL_CHAT_ID,
  GAO_ORIGINAL_RUN_ID,
  type GaoWorkflowSnapshot,
} from "./local/gaoWorkflowContract";

const PRODUCTION_ORIGIN = "https://app.mathvision.ai";

export function isLocalPreviewHost(location: Location = window.location): boolean {
  return location.hostname === "127.0.0.1" || location.hostname === "localhost";
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

async function requestBody(request: Request): Promise<Record<string, unknown>> {
  if (!request.body) return {};
  try {
    return (await request.json()) as Record<string, unknown>;
  } catch {
    return {};
  }
}

let gaoWorkflowSnapshotPromise: Promise<GaoWorkflowSnapshot> | undefined;

async function loadGaoWorkflowSnapshot(nativeFetch: typeof window.fetch): Promise<GaoWorkflowSnapshot> {
  gaoWorkflowSnapshotPromise ??= nativeFetch("/__local-rk/researches/gao-original-workflow", {
    cache: "no-store",
  }).then(async (response) => {
    if (!response.ok) {
      const error = await response.json().catch(() => ({})) as { detail?: string };
      throw new Error(error.detail ?? "无法读取本地 RK 研究数据库。");
    }
    return response.json() as Promise<GaoWorkflowSnapshot>;
  });
  return gaoWorkflowSnapshotPromise;
}

async function localGet(pathname: string, nativeFetch: typeof window.fetch): Promise<Response> {
  if (pathname.endsWith("/workspace/explorer/snapshot")) {
    return json(localRepository.snapshot());
  }
  if (pathname.endsWith("/workspace/explorer/chats")) {
    const { chatSummary } = await loadGaoWorkflowSnapshot(nativeFetch);
    const items = [chatSummary, ...localRepository.listChats()];
    return json({ items, next_cursor: null, total_count: items.length });
  }
  if (pathname.includes("/workspace/explorer/folders/") && pathname.endsWith("/path")) {
    return json([]);
  }
  if (pathname.endsWith("/me/access")) {
    return json({
      allow: true,
      disabled: false,
      input_safety_banned: false,
      input_safety_banned_until: null,
      reason: null,
      llm_throttle_role: "local-preview",
      max_allowed_users: null,
      legal_accepted: true,
      terms_accepted_at: null,
      accepted_terms_version: null,
      accepted_privacy_policy_version: null,
      terms_version: "local-preview",
      privacy_policy_version: "local-preview",
    });
  }
  if (pathname.endsWith("/me/profile")) {
    return json(localRepository.getProfile());
  }

  if (pathname.endsWith("/chats/archived")) return json(localRepository.listChats({ archived: true }));
  if (pathname.endsWith("/chats/shared")) return json([]);
  if (pathname.endsWith("/chats")) {
    const { chatSummary } = await loadGaoWorkflowSnapshot(nativeFetch);
    return json([chatSummary, ...localRepository.listChats()]);
  }
  if (pathname.endsWith("/folders")) return json(localRepository.listFolders());

  const chatMatch = pathname.match(/\/chats\/([^/]+)$/);
  if (chatMatch) {
    const chatId = decodeURIComponent(chatMatch[1]);
    const chat = chatId === GAO_ORIGINAL_CHAT_ID
      ? (await loadGaoWorkflowSnapshot(nativeFetch)).chat
      : localRepository.getChat(chatId);
    return chat ? json(chat) : json({ detail: "Chat not found" }, 404);
  }

  const adminHarnessMatch = pathname.match(
    /\/users\/[^/]+\/chats\/([^/]+)\/agent-harness-runs\/([^/]+)$/,
  );
  if (
    adminHarnessMatch &&
    decodeURIComponent(adminHarnessMatch[1]) === GAO_ORIGINAL_CHAT_ID &&
    decodeURIComponent(adminHarnessMatch[2]) === GAO_ORIGINAL_RUN_ID
  ) {
    return json((await loadGaoWorkflowSnapshot(nativeFetch)).run);
  }
  const harnessMatch = pathname.match(/\/agent-harness\/runs\/([^/]+)$/);
  if (harnessMatch && decodeURIComponent(harnessMatch[1]) === GAO_ORIGINAL_RUN_ID) {
    return json((await loadGaoWorkflowSnapshot(nativeFetch)).run);
  }

  // Empty list endpoints are enough to render the authentic empty-state shell.
  if (
    /\/(chats|folders|branch-spaces|bookmarks|notebooks|announcements|research-problems|latex-documents|latex\/documents)$/.test(
      pathname,
    )
  ) {
    return json([]);
  }

  return json([], 200);
}

async function localWrite(request: Request, pathname: string): Promise<Response> {
  const method = request.method.toUpperCase();
  const body = await requestBody(request);

  if (pathname.endsWith("/me/profile") && method === "PATCH") {
    return json(localRepository.updateProfile(body));
  }
  if (pathname.endsWith("/me/tour-guide") && method === "PATCH") {
    const profile = localRepository.getProfile();
    const currentTourGuide = typeof profile.tour_guide === "object" && profile.tour_guide
      ? profile.tour_guide as Record<string, unknown>
      : {};
    const tourKey = typeof body.tour_key === "string" ? body.tour_key : "thread";
    return json(localRepository.updateProfile({
      tour_guide: {
        ...currentTourGuide,
        [tourKey]: body.completed === true,
      },
    }));
  }
  if (pathname.endsWith("/chats/start") && method === "POST") {
    const chatInput = typeof body.chat === "object" && body.chat ? body.chat as Record<string, unknown> : {};
    const submission = typeof body.submission === "object" && body.submission
      ? body.submission as Record<string, unknown>
      : {};
    const messages = Array.isArray(submission.messages) ? submission.messages : chatInput.messages;
    return json(localRepository.createChat({ ...chatInput, messages }));
  }
  if (pathname.endsWith("/chats") && method === "POST") {
    return json(localRepository.createChat(body));
  }
  if (pathname.endsWith("/folders") && method === "POST") {
    return json(localRepository.createFolder(body));
  }

  const archiveMatch = pathname.match(/\/chats\/([^/]+)\/(archive|restore)$/);
  if (archiveMatch && method === "POST") {
    const chat = localRepository.archiveChat(decodeURIComponent(archiveMatch[1]), archiveMatch[2] === "archive");
    return chat ? json(chat) : json({ detail: "Chat not found" }, 404);
  }
  const moveMatch = pathname.match(/\/chats\/([^/]+)\/move-to-folder$/);
  if (moveMatch && method === "POST") {
    const chat = localRepository.updateChat(decodeURIComponent(moveMatch[1]), body);
    return chat ? json(chat) : json({ detail: "Chat not found" }, 404);
  }
  const chatMatch = pathname.match(/\/chats\/([^/]+)$/);
  if (chatMatch && method === "PUT") {
    const chat = localRepository.updateChat(decodeURIComponent(chatMatch[1]), body);
    return chat ? json(chat) : json({ detail: "Chat not found" }, 404);
  }
  if (chatMatch && method === "DELETE") {
    return localRepository.deleteChat(decodeURIComponent(chatMatch[1]))
      ? new Response(null, { status: 204 })
      : json({ detail: "Chat not found" }, 404);
  }

  const folderParentMatch = pathname.match(/\/folders\/([^/]+)\/parent$/);
  if (folderParentMatch && method === "PATCH") {
    const folder = localRepository.updateFolder(decodeURIComponent(folderParentMatch[1]), body);
    return folder ? json(folder) : json({ detail: "Folder not found" }, 404);
  }
  const folderMatch = pathname.match(/\/folders\/([^/]+)$/);
  if (folderMatch && method === "PATCH") {
    const folder = localRepository.updateFolder(decodeURIComponent(folderMatch[1]), body);
    return folder ? json(folder) : json({ detail: "Folder not found" }, 404);
  }
  if (folderMatch && method === "DELETE") {
    return localRepository.deleteFolder(decodeURIComponent(folderMatch[1]))
      ? new Response(null, { status: 204 })
      : json({ detail: "Folder not found" }, 404);
  }

  return json({ detail: `Local endpoint is not implemented: ${method} ${pathname}` }, 501);
}

export function installLocalPreviewNetwork(): void {
  if (!isLocalPreviewHost()) return;
  const nativeFetch = window.fetch.bind(window);
  window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const request = input instanceof Request ? input : new Request(input, init);
    const url = new URL(request.url, window.location.href);
    if (url.origin !== PRODUCTION_ORIGIN || !url.pathname.startsWith("/api/v1")) {
      return nativeFetch(input, init);
    }
    if (request.method.toUpperCase() === "GET") return localGet(url.pathname, nativeFetch);
    return localWrite(request, url.pathname);
  };
}
