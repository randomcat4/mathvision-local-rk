/** Behavior-preserving recovery of attachmentsApi-BHgxfYft.js. */

import type { TimeHTMLAttributes } from "#production-react";

import { getAuthorizationHeader } from "../auth/bearerToken";
import {
  adminApiBasePath,
  apiBasePath,
  createHttpResponseError,
} from "../../runtime/bundledHttpClient.js";

export type DateTimeFormat = "dateTime" | "date" | "time";

export interface DateTimeProps extends Omit<TimeHTMLAttributes<HTMLTimeElement>, "dateTime"> {
  value?: string | number | Date | null;
  format?: DateTimeFormat;
}

export function DateTime({ format = "dateTime", ...props }: DateTimeProps) {
  if (!props.value) return "-";
  const date = new Date(props.value);
  if (Number.isNaN(date.getTime())) throw new Error("Invalid date value provided");

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  const twelveHour = usesTwelveHourClock();
  const displayHours = String(twelveHour ? hours % 12 || 12 : hours).padStart(2, "0");

  let text: string;
  switch (format) {
    case "dateTime":
      text = `${year}-${month}-${day} ${displayHours}:${minutes} ${twelveHour ? period : ""}`.trim();
      break;
    case "date":
      text = `${year}-${month}-${day}`;
      break;
    case "time":
      text = `${displayHours}:${minutes} ${twelveHour ? period : ""}`.trim();
      break;
  }

  const { value: _value, ...timeProps } = props;
  return (
    <time {...timeProps} dateTime={date.toISOString()}>
      {text}
    </time>
  );
}

function usesTwelveHourClock(): boolean {
  const options = new Intl.DateTimeFormat(undefined, { hour: "numeric" }).resolvedOptions();
  return options.hourCycle
    ? options.hourCycle === "h11" || options.hourCycle === "h12"
    : typeof options.hour12 === "boolean"
      ? options.hour12
      : false;
}

export class AttachmentUploadUnavailableError extends Error {
  constructor() {
    super("Attachment uploads are unavailable.");
    this.name = "AttachmentUploadUnavailableError";
  }
}

const attachmentUrl = (path: string, basePath = apiBasePath) =>
  `https://app.mathvision.ai/${basePath}/${path}`;

export interface WireAttachmentRecord {
  attachment_id: string;
  name: string;
  content_type: string;
  kind: string;
  size_bytes: number;
  sha256: string;
  status: string;
  created_at: string;
}

export const mapAttachmentRecord = (attachment: WireAttachmentRecord) => ({
  id: attachment.attachment_id,
  name: attachment.name,
  contentType: attachment.content_type,
  kind: attachment.kind,
  sizeBytes: attachment.size_bytes,
  sha256: attachment.sha256,
  status: attachment.status,
  createdAt: attachment.created_at,
});

export async function uploadAttachment(file: File) {
  if (file.size === 0) throw new Error(`'${file.name}' is empty.`);
  const body = new FormData();
  body.append("file", file);
  const response = await fetch(attachmentUrl("attachments"), {
    method: "POST",
    headers: { Accept: "application/json", Authorization: await getAuthorizationHeader() },
    body,
  });
  if (!response.ok) {
    throw response.status === 404 || response.status === 405
      ? new AttachmentUploadUnavailableError()
      : createHttpResponseError(response);
  }
  const attachment = mapAttachmentRecord((await response.json()) as WireAttachmentRecord);
  if (attachment.status !== "ready") throw new Error("Attachment upload did not complete.");
  return attachment;
}

async function fetchAttachmentContent(
  path: string,
  authorization?: string,
  basePath = apiBasePath,
): Promise<Blob> {
  const response = await fetch(attachmentUrl(path, basePath), {
    headers: {
      Accept: "application/octet-stream",
      ...(authorization ? { Authorization: authorization } : {}),
    },
  });
  if (!response.ok) throw createHttpResponseError(response);
  const blob = await response.blob();
  if (blob.size === 0) throw new Error("Attachment content was empty.");
  return blob;
}

export const getAttachmentContent = async (attachmentId: string) =>
  fetchAttachmentContent(
    `attachments/${encodeURIComponent(attachmentId)}/content`,
    await getAuthorizationHeader(),
  );

export const getAdminChatAttachmentContent = async (
  userId: string,
  chatId: string,
  attachmentId: string,
) =>
  fetchAttachmentContent(
    `users/${encodeURIComponent(userId)}/chats/${encodeURIComponent(chatId)}/attachments/${encodeURIComponent(attachmentId)}`,
    await getAuthorizationHeader(),
    adminApiBasePath,
  );

export const getSharedAttachmentContent = (shareId: string, attachmentId: string) =>
  fetchAttachmentContent(
    `share/${encodeURIComponent(shareId)}/attachments/${encodeURIComponent(attachmentId)}`,
  );
