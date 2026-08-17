import {
  hashWriteupSource,
  LATEX_FILE_EXTENSION,
} from "../../runtime/latexRuntime.js";
import { extractLatexProjectName } from "./naming";
export { extractLatexWriteupSource } from "./writeupText";

export function createLatexWriteupName(title?: string | null): string {
  const projectName = title ? extractLatexProjectName(title) : null;
  return (
    projectName ??
    `Writeup ${new Date()
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}Z$/, "Z")}`
  );
}

export function createLatexWriteupFileName(title?: string | null): string {
  return `${createLatexWriteupName(title)}${LATEX_FILE_EXTENSION}`;
}

export interface WriteupCacheKeyInput {
  chatId?: string | null;
  messageIndex: number;
  source: string;
}

export function createWriteupCacheKey({
  chatId,
  messageIndex,
  source,
}: WriteupCacheKeyInput): string {
  return [
    "chat",
    chatId ?? "unknown",
    "assistant",
    String(messageIndex),
    "writeup",
    hashWriteupSource(source),
  ].join(":");
}
