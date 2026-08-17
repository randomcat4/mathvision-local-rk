import { Fragment, memo, useCallback, useEffect, useMemo, useRef, useState } from "#production-react";
import { dismissAnnouncement, dismissAnnouncements, getCurrentAnnouncements, type Announcement } from "../../api/announcements/announcementsApi";
import { DateTime } from "../../api/attachments/attachmentsApi";
import { TimeRelative } from "../time/TimeRelative";
import { DISMISSAL_OUTBOX_STORAGE_PREFIX, LEGACY_DISMISSAL_STORAGE_KEY, dismissalOutboxKey, isRecentAnnouncement, readAnnouncementIds, removeAnnouncementIds, resolveAnnouncementAssetUrl, rewriteAnnouncementMarkdownUrls, writeAnnouncementIds } from "./announcementState";
import { useBundledMutation, useBundledQuery } from "../../runtime/queryRuntime.js";
import { appQueryKeys, Avatar, Box, Button, ChevronLeftIcon, ChevronRightIcon, CloseIcon, Dialog, Divider, getAuthenticatedSubject, getErrorMessage, Markdown, Paper, publishAppEvent, Stack, toast, TooltipIconButton, Typography, useAppQueryClient } from "../../runtime/announcementsUiRuntime.js";

function useDismissalReconciliation() {
  const userId = getAuthenticatedSubject();
  if (!userId) throw new Error("Authenticated user token is missing its subject identifier.");
  const [stored, setStored] = useState(() => ({ legacyAnnouncementIds: readAnnouncementIds(window.localStorage, LEGACY_DISMISSAL_STORAGE_KEY, "legacy announcement dismissal state"), pendingAnnouncementIds: readAnnouncementIds(window.localStorage, dismissalOutboxKey(userId), "pending announcement dismissal state") }));
  const ids = useMemo(() => Array.from(new Set([...stored.legacyAnnouncementIds, ...stored.pendingAnnouncementIds])), [stored]);
  const started = useRef(false);
  const mutation = useBundledMutation({ mutationFn: dismissAnnouncements, onSuccess: () => { try { removeAnnouncementIds(window.localStorage, LEGACY_DISMISSAL_STORAGE_KEY, "legacy announcement dismissal state", stored.legacyAnnouncementIds); removeAnnouncementIds(window.localStorage, dismissalOutboxKey(userId), "pending announcement dismissal state", stored.pendingAnnouncementIds); } catch (error) { console.warn("Could not remove reconciled announcement dismissal state.", error); } setStored({ legacyAnnouncementIds: [], pendingAnnouncementIds: [] }); } });
  const hasPending = ids.length > 0;
  useEffect(() => { if (hasPending && mutation.isIdle && !started.current) { started.current = true; mutation.mutate(ids); } }, [hasPending, ids, mutation]);
  return { error: mutation.error, isPending: hasPending && mutation.isPending, isReady: !hasPending, retry: () => mutation.mutate(ids), queueDismissal: (id: string) => { const key = dismissalOutboxKey(userId); writeAnnouncementIds(window.localStorage, key, [...readAnnouncementIds(window.localStorage, key, "pending announcement dismissal state"), id]); }, markDismissalPersisted: (id: string) => { try { removeAnnouncementIds(window.localStorage, dismissalOutboxKey(userId), "pending announcement dismissal state", [id]); } catch (error) { console.warn("Could not remove a persisted announcement dismissal from the outbox.", error); } } };
}

const contentStyles = { p: { xs: 2, sm: 2.5 } }; const avatarStyles = { width: 48, height: 48, flex: "0 0 auto" }; const authorStyles = { minWidth: 0, flex: 1 }; const headerTextStyles = { minWidth: 0, flex: 1 };
function AnnouncementContent({ announcement, labelId, onClose }: { announcement: Announcement; labelId: string; onClose?: () => void }) { return <Stack direction="row" spacing={1.5} sx={contentStyles}><Avatar alt={announcement.authorName} src={resolveAnnouncementAssetUrl(announcement.authorAvatarSrc)} sx={avatarStyles}/><Stack spacing={1.25} sx={authorStyles}><Stack direction="row" spacing={1} sx={{ alignItems: "flex-start" }}><Stack sx={headerTextStyles}><Typography id={labelId} variant="subtitle2" color="textPrimary" noWrap={true}>{announcement.authorName}</Typography><Typography variant="caption" color="textSecondary"><TimeRelative date={announcement.createdAt}/> · <DateTime value={announcement.createdAt}/></Typography></Stack>{onClose && <TooltipIconButton tooltip="Close" aria-label="Close announcement" onClick={onClose}><CloseIcon size={18}/></TooltipIconButton>}</Stack><Markdown content={rewriteAnnouncementMarkdownUrls(announcement.content)}/></Stack></Stack>; }
const MemoAnnouncementContent = memo(AnnouncementContent);

const panelPositionStyles = { position: "absolute", top: 0, right: 0, zIndex: 1, maxWidth: "calc(100vw - 2rem)", pointerEvents: "auto" };
const panelStyles = { width: "min(28rem, calc(100vw - 2rem))", maxHeight: "min(36rem, calc(100dvh - 1.5rem))", overflowY: "auto" };
const errorStyles = { p: 2.5, alignItems: "flex-start" }; const errorHeaderStyles = { width: "100%", alignItems: "center", justifyContent: "space-between" }; const footerStyles = { alignItems: "center", justifyContent: "space-between", px: 2.5, py: 1 }; const footerButtonsStyles = { alignItems: "center" };

export interface FloatingFeatureAnnouncementsProps { openRequestId: number }
function FloatingFeatureAnnouncementsView({ openRequestId }: FloatingFeatureAnnouncementsProps) {
  const queryClient = useAppQueryClient();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [dismissedIds, setDismissedIds] = useState(() => new Set<string>());
  const [closedRequestId, setClosedRequestId] = useState<number | null>(null);
  const includeDismissed = openRequestId > 0 && openRequestId !== closedRequestId;
  const reconciliation = useDismissalReconciliation();
  const query = useBundledQuery({ queryKey: appQueryKeys.announcements(includeDismissed), queryFn: () => getCurrentAnnouncements(includeDismissed), enabled: reconciliation.isReady, refetchOnWindowFocus: "always", staleTime: 300000 });
  const visible = useMemo(() => { const now = Date.now(); return (query.data ?? []).filter((announcement) => isRecentAnnouncement(announcement.createdAt, now) && (includeDismissed || !dismissedIds.has(announcement.id))); }, [dismissedIds, includeDismissed, query.data]);
  const selectedIndex = visible.findIndex((announcement) => announcement.id === selectedId); const index = selectedIndex >= 0 ? selectedIndex : 0; const announcement = visible[index] ?? null;
  const dismissal = useBundledMutation({ mutationFn: dismissAnnouncement, onSuccess: (_value: unknown, id: string) => { reconciliation.markDismissalPersisted(id); queryClient.setQueryData<Announcement[]>(appQueryKeys.announcements(false), (current) => current?.filter((item) => item.id !== id)); publishAppEvent({ announcementsChanged: true }); } });
  const close = useCallback(() => { if (!announcement) return; try { reconciliation.queueDismissal(announcement.id); } catch (error) { toast.error(`Could not queue the announcement dismissal: ${getErrorMessage(error)}`); return; } setSelectedId(null); setDismissedIds((current) => new Set([...current, ...visible.map((item) => item.id)])); setClosedRequestId(openRequestId); dismissal.mutate(announcement.id); }, [announcement, dismissal, openRequestId, reconciliation, visible]);
  const move = useCallback((offset: number) => { if (visible.length < 2) return; setSelectedId(visible[(index + offset + visible.length) % visible.length].id); }, [index, visible]);
  const error = reconciliation.error ?? query.error;
  if (error) { if (closedRequestId === openRequestId) return null; return <Box sx={panelPositionStyles}><Paper role="alert" variant="floating" sx={panelStyles}><Stack spacing={1.5} sx={errorStyles}><Stack direction="row" sx={errorHeaderStyles}><Typography variant="subtitle2" color="error">Updates unavailable</Typography><TooltipIconButton tooltip="Close" aria-label="Close updates error" onClick={() => setClosedRequestId(openRequestId)}><CloseIcon size={18}/></TooltipIconButton></Stack><Typography variant="body2" color="textSecondary">{getErrorMessage(error)}</Typography><Button size="small" variant="outlined" disabled={reconciliation.isPending} onClick={() => { if (reconciliation.error) reconciliation.retry(); else void query.refetch(); }}>Retry</Button></Stack></Paper></Box>; }
  if (!announcement) return null;
  const labelId = `floating-feature-announcement-${announcement.id}-author`;
  return <Box sx={panelPositionStyles}><Paper id="floating-feature-announcement-panel" role="region" aria-labelledby={labelId} variant="floating" sx={panelStyles}><MemoAnnouncementContent announcement={announcement} labelId={labelId} onClose={close}/>{visible.length > 1 && <Fragment><Divider/><Stack direction="row" sx={footerStyles}><Typography variant="caption" color="textSecondary">{index + 1} of {visible.length}</Typography><Stack direction="row" spacing={0.25} sx={footerButtonsStyles}><TooltipIconButton tooltip="Previous announcement" aria-label="Previous announcement" onClick={() => move(-1)}><ChevronLeftIcon size={18}/></TooltipIconButton><TooltipIconButton tooltip="Next announcement" aria-label="Next announcement" onClick={() => move(1)}><ChevronRightIcon size={18}/></TooltipIconButton></Stack></Stack></Fragment>}</Paper></Box>;
}
export const FloatingFeatureAnnouncements = memo(FloatingFeatureAnnouncementsView);
