import { apiBasePath, httpClient } from "../../runtime/bundledHttpClient.js";

interface WireAnnouncementImage { id: string; name: string; content_type: string; size_bytes: number; created_at: string; src: string }
interface WireAnnouncement { id: string; author_name: string; author_avatar_src?: string | null; content: string; created_at: string; updated_at: string; images: WireAnnouncementImage[] }
export interface AnnouncementImage { id: string; name: string; contentType: string; sizeBytes: number; createdAt: string; src: string }
export interface Announcement { id: string; authorName: string; authorAvatarSrc?: string | null; content: string; createdAt: string; updatedAt: string; images: AnnouncementImage[] }

export function mapAnnouncement(announcement: WireAnnouncement): Announcement {
  return { id: announcement.id, authorName: announcement.author_name, authorAvatarSrc: announcement.author_avatar_src, content: announcement.content, createdAt: announcement.created_at, updatedAt: announcement.updated_at, images: announcement.images.map((image) => ({ id: image.id, name: image.name, contentType: image.content_type, sizeBytes: image.size_bytes, createdAt: image.created_at, src: image.src })) };
}

export async function getCurrentAnnouncements(includeDismissed = false): Promise<Announcement[]> {
  const announcements = await httpClient.get<WireAnnouncement[]>(apiBasePath, "announcements/current", { include_dismissed: includeDismissed });
  return announcements.map(mapAnnouncement);
}
export async function dismissAnnouncement(id: string): Promise<void> { await httpClient.put(apiBasePath, `announcements/${id}/dismissal`, {}); }
const DISMISSAL_BATCH_SIZE = 1000;
export async function dismissAnnouncements(ids: string[]): Promise<void> { for (let index = 0; index < ids.length; index += DISMISSAL_BATCH_SIZE) await httpClient.put(apiBasePath, "announcements/dismissals/bulk", { announcement_ids: ids.slice(index, index + DISMISSAL_BATCH_SIZE) }); }
