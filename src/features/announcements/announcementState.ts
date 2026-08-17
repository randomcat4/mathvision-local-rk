export const RECENT_ANNOUNCEMENT_WINDOW_MS = 7 * 24 * 60 * 60 * 1000;
export const LEGACY_DISMISSAL_STORAGE_KEY = "ai-math.feature-announcements-dismissed.v1";
export const DISMISSAL_OUTBOX_STORAGE_PREFIX = "ai-math.feature-announcement-dismissal-outbox.v1";
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function dismissalOutboxKey(userId: string): string { return `${DISMISSAL_OUTBOX_STORAGE_PREFIX}:${encodeURIComponent(userId)}`; }
export function writeAnnouncementIds(storage: Pick<Storage, "setItem" | "removeItem">, key: string, ids: string[]): void { if (ids.length === 0) { storage.removeItem(key); return; } storage.setItem(key, JSON.stringify(Array.from(new Set(ids)))); }
export function readAnnouncementIds(storage: Pick<Storage, "getItem" | "setItem" | "removeItem">, key: string, label: string, warn: (message: string, error?: unknown) => void = console.warn): string[] {
  let stored: string | null;
  try { stored = storage.getItem(key); } catch (error) { warn(`Could not read ${label}.`, error); return []; }
  if (stored === null) return [];
  let parsed: unknown;
  try { parsed = JSON.parse(stored); } catch (error) { warn(`Removed unreadable ${label}.`, error); try { storage.removeItem(key); } catch (removeError) { warn(`Could not remove unreadable ${label}.`, removeError); } return []; }
  if (!Array.isArray(parsed)) { warn(`Removed invalid ${label}: expected an array.`); try { storage.removeItem(key); } catch (error) { warn(`Could not remove invalid ${label}.`, error); } return []; }
  const valid = parsed.filter((value): value is string => typeof value === "string" && UUID_PATTERN.test(value));
  if (valid.length !== parsed.length) { warn(`Removed invalid announcement ids from ${label}.`); try { writeAnnouncementIds(storage, key, valid); } catch (error) { warn(`Could not clean invalid ${label}.`, error); } }
  return Array.from(new Set(valid));
}
export function removeAnnouncementIds(storage: Pick<Storage, "getItem" | "setItem" | "removeItem">, key: string, label: string, ids: string[]): void { const removed = new Set(ids); writeAnnouncementIds(storage, key, readAnnouncementIds(storage, key, label).filter((id) => !removed.has(id))); }
export function isRecentAnnouncement(createdAt: string, now: number): boolean { const date = new Date(createdAt); if (Number.isNaN(date.getTime())) throw new Error(`Announcement has an invalid createdAt date.`); return now - date.getTime() <= RECENT_ANNOUNCEMENT_WINDOW_MS; }
export function resolveAnnouncementAssetUrl(path: string | null | undefined, appOrigin = "https://app.mathvision.ai", apiBasePath = "api"): string | undefined { if (!path) return undefined; const origin = appOrigin.replace(/\/$/, ""); const prefix = `/${apiBasePath}/`; return origin && path.startsWith(prefix) ? `${origin}${path}` : path; }
export function rewriteAnnouncementMarkdownUrls(markdown: string, appOrigin = "https://app.mathvision.ai", apiBasePath = "api"): string { const origin = appOrigin.replace(/\/$/, ""); if (!origin) return markdown; const prefix = `/${apiBasePath}/`; const escaped = prefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); return markdown.replace(new RegExp(`(\\]\\()${escaped}`, "g"), `$1${origin}${prefix}`); }
