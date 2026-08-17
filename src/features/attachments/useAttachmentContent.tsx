import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "#production-react";

import {
  getAdminChatAttachmentContent,
  getAttachmentContent,
  getSharedAttachmentContent,
} from "../../api/attachments/attachmentsApi";
import {
  useBundledQuery,
  useBundledQueryClient,
  type QueryOptions,
} from "../../runtime/queryRuntime.js";

export interface AdminAttachmentScope {
  userId: string;
  chatId: string;
}

const SharedChatIdContext = createContext<string | null>(null);
const AdminAttachmentScopeContext = createContext<AdminAttachmentScope | null>(null);
const ATTACHMENT_CACHE_GC_TIME_MS = 60_000;

export function useObjectUrl(blob: Blob | null | undefined): string | null {
  const [objectUrl, setObjectUrl] = useState<string | null>(null);
  useEffect(() => {
    if (!blob) {
      setObjectUrl(null);
      return;
    }
    const nextObjectUrl = URL.createObjectURL(blob);
    setObjectUrl(nextObjectUrl);
    return () => URL.revokeObjectURL(nextObjectUrl);
  }, [blob]);
  return objectUrl;
}

async function fetchAttachmentForScope(
  attachmentId: string,
  sharedChatId: string | null,
  adminScope: AdminAttachmentScope | null,
): Promise<Blob> {
  if (sharedChatId && adminScope) {
    throw new Error("Attachment content cannot be both shared and admin-scoped.");
  }
  if (sharedChatId) return getSharedAttachmentContent(sharedChatId, attachmentId);
  if (adminScope) {
    return getAdminChatAttachmentContent(
      adminScope.userId,
      adminScope.chatId,
      attachmentId,
    );
  }
  return getAttachmentContent(attachmentId);
}

function attachmentContentQuery(
  attachmentId: string | null | undefined,
  sharedChatId: string | null,
  adminScope: AdminAttachmentScope | null,
): QueryOptions<Blob> {
  return {
    queryKey: [
      "attachmentContent",
      sharedChatId
        ? `shared:${sharedChatId}`
        : adminScope
          ? `admin:${adminScope.userId}:${adminScope.chatId}`
          : "private",
      attachmentId ?? "unrequested",
    ],
    queryFn: () => {
      if (!attachmentId) throw new Error("Attachment id is required.");
      return fetchAttachmentForScope(attachmentId, sharedChatId, adminScope);
    },
    retry: false,
    staleTime: Number.POSITIVE_INFINITY,
    gcTime: ATTACHMENT_CACHE_GC_TIME_MS,
  };
}

export function SharedAttachmentScope({
  chatId,
  children,
}: {
  chatId: string | null;
  children: ReactNode;
}) {
  return <SharedChatIdContext.Provider value={chatId}>{children}</SharedChatIdContext.Provider>;
}

export interface AttachmentContentResult {
  blob: Blob | null;
  objectUrl: string | null;
  error: unknown;
  isLoading: boolean;
  load(): Promise<Blob>;
}

export function useAttachmentContent(
  attachmentId: string | null | undefined,
  enabled = true,
): AttachmentContentResult {
  const sharedChatId = useContext(SharedChatIdContext);
  const adminScope = useContext(AdminAttachmentScopeContext);
  const { data, error, fetchStatus, isPending, refetch } = useBundledQuery({
    ...attachmentContentQuery(attachmentId, sharedChatId, adminScope),
    enabled: Boolean(attachmentId) && enabled,
  });
  const blob = data ?? null;
  const objectUrl = useObjectUrl(blob);
  const load = useCallback(async () => {
    if (!attachmentId) throw new Error("Attachment id is required.");
    if (blob) return blob;
    const result = await refetch();
    if (result.error) throw result.error;
    if (!result.data) throw new Error("Attachment content was not returned.");
    return result.data;
  }, [attachmentId, blob, refetch]);
  return useMemo(
    () => ({
      blob,
      objectUrl,
      error,
      isLoading: isPending && fetchStatus === "fetching",
      load,
    }),
    [blob, objectUrl, error, isPending, fetchStatus, load],
  );
}

export function useAttachmentContentLoader(
  attachmentId: string | null | undefined,
  { cacheContent = true }: { cacheContent?: boolean } = {},
): () => Promise<Blob> {
  const queryClient = useBundledQueryClient();
  const sharedChatId = useContext(SharedChatIdContext);
  const adminScope = useContext(AdminAttachmentScopeContext);
  return useCallback(async () => {
    if (!attachmentId) throw new Error("Attachment id is required.");
    return cacheContent
      ? queryClient.fetchQuery(attachmentContentQuery(attachmentId, sharedChatId, adminScope))
      : fetchAttachmentForScope(attachmentId, sharedChatId, adminScope);
  }, [adminScope, attachmentId, cacheContent, queryClient, sharedChatId]);
}
