import type { ComponentType } from "react";
export const Alert: ComponentType<any>;
export const Box: ComponentType<any>;
export const Button: ComponentType<any>;
export const CircularProgress: ComponentType<any>;
export const CloseIcon: ComponentType<any>;
export const Drawer: ComponentType<any>;
export const IconButton: ComponentType<any>;
export const LatexSourceEditor: ComponentType<any>;
export const Markdown: ComponentType<any>;
export const PlayIcon: ComponentType<any>;
export const PlusFileIcon: ComponentType<any>;
export const Tab: ComponentType<any>;
export const Tabs: ComponentType<any>;
export const TextField: ComponentType<any>;
export const Typography: ComponentType<any>;
export function alpha(color: string, opacity: number): string;
export function extractLatexPreview(source: string): string;
export const MAIN_LATEX_FILE_NAME: string;
export interface LatexDiagnostic {
  severity: string;
  line?: number | null;
  message: string;
}
export interface LatexCompileResult {
  success: boolean;
  durationMs: number;
  diagnostics: LatexDiagnostic[];
  pdfAttachmentId?: string | null;
  pdfBase64?: string | null;
}
export interface LatexDocument {
  id: string;
  name: string;
  source: string;
  lastUpdated: string;
  [key: string]: unknown;
}
export const toast: {
  error(message: string): void;
  success(message: string): void;
};
export function useCreateLatexDocument(): {
  isPending: boolean;
  mutateAsync(input: {
    input: { name: string; source: string };
  }): Promise<LatexDocument>;
};
export function useSourceCompile(): {
  isPending: boolean;
  mutateAsync(input: { input: { source: string } }): Promise<{ id: string }>;
};
export function useCompileJob(
  id: string | null,
  options: { enabled: boolean },
): {
  data?: { status: string; result?: LatexCompileResult | null };
  isError: boolean;
};
export function isCompileJobPending(job: unknown): boolean;
export function usePdfObjectUrl(base64?: string | null): string | null;
export function useAttachmentContent(id?: string | null): {
  objectUrl: string | null;
  isLoading: boolean;
  error: unknown;
};
export function useControlOrMetaShortcut(options: {
  enabled: boolean;
  keyCode: string[];
  onShortcut(): void;
}): void;
