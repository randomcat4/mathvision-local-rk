export interface MessageAttachmentData {
  id: string | null;
  attachmentId: string | null;
  name: string;
  contentType: string;
  dataBase64: string | null;
  kind: string;
  sizeBytes: number | null;
}

export function makeBase64DataUrl(contentType: string, dataBase64: string): string {
  return `data:${contentType};base64,${dataBase64}`;
}

export function getEmbeddedAttachmentUrl(
  attachment: Pick<MessageAttachmentData, "contentType" | "dataBase64">,
): string | null {
  return attachment.dataBase64
    ? makeBase64DataUrl(attachment.contentType || "application/octet-stream", attachment.dataBase64)
    : null;
}
