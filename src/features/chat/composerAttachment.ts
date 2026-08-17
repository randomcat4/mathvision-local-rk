export type ComposerAttachmentKind = "image" | "file" | string;

interface ComposerAttachmentBase {
  id: string;
  name: string;
  contentType: string;
  kind: ComposerAttachmentKind;
  sizeBytes: number;
}

export interface LocalComposerAttachment extends ComposerAttachmentBase {
  storage: "local";
  file: File;
  attachmentId: null;
  legacyId?: string | null;
}

export interface StoredComposerAttachment extends ComposerAttachmentBase {
  storage: "stored";
  file: null;
  attachmentId: string;
}

export type ComposerAttachment = LocalComposerAttachment | StoredComposerAttachment;

const pastedTextFileName = /(?:^pasted-text(?:-\d+)?| \(pasted(?: \d+)?\))\.txt$/i;

export function isPastedTextAttachment(fileName: string): boolean {
  return pastedTextFileName.test(fileName);
}

const PASTED_TEXT_CHARACTER_THRESHOLD = 8000;
const PASTED_TEXT_LINE_THRESHOLD = 80;
const PASTED_TEXT_FILE_NAME_LIMIT = 48;

export function shouldConvertPastedText({ text, hasClipboardFiles, selectionStart, selectionEnd }: { text: string; hasClipboardFiles: boolean; selectionStart: number | null; selectionEnd: number | null }): boolean {
  if (!text.trim() || hasClipboardFiles || (selectionStart !== null && selectionEnd !== null && selectionStart !== selectionEnd)) return false;
  if (text.length >= PASTED_TEXT_CHARACTER_THRESHOLD) return true;
  let lines = 1;
  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (character === "\n" || character === "\r") {
      if (character === "\r" && text[index + 1] === "\n") index += 1;
      lines += 1;
      if (lines >= PASTED_TEXT_LINE_THRESHOLD) return true;
    }
  }
  return false;
}

export function createPastedTextFile(text: string, existingNames: Iterable<string>): File {
  if (!text.trim()) throw new Error("Pasted text must not be blank.");
  const unavailable = new Set(Array.from(existingNames, (name) => name.toLowerCase()));
  const normalized = text.trim().replace(/[<>:"/\\|?*\u0000-\u001f\u007f]+/g, " ").replace(/\s+/g, " ");
  const baseName = Array.from(normalized).slice(0, PASTED_TEXT_FILE_NAME_LIMIT).join("").replace(/^[. ]+|[. ]+$/g, "") || "Clipboard text";
  let fileName = `${baseName} (pasted).txt`;
  let suffix = 2;
  while (unavailable.has(fileName.toLowerCase())) { fileName = `${baseName} (pasted ${suffix}).txt`; suffix += 1; }
  return new File([text], fileName, { type: "text/plain" });
}
