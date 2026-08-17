import type { ComponentType } from "react";

export const Alert: ComponentType<any>;
export const Box: ComponentType<any>;
export const Button: ComponentType<any>;
export const CircleCheckIcon: ComponentType<any>;
export const CircleIcon: ComponentType<any>;
export const CircularProgress: ComponentType<any>;
export const Dialog: ComponentType<any>;
export const DialogActions: ComponentType<any>;
export const DialogContent: ComponentType<any>;
export const DialogTitle: ComponentType<any>;
export const Divider: ComponentType<any>;
export const FileInputIcon: ComponentType<any>;
export const FilePlusIcon: ComponentType<any>;
export const Markdown: ComponentType<any>;
export const Menu: ComponentType<any>;
export const MenuItem: ComponentType<any>;
export const MenuLabel: ComponentType<any>;
export const Paper: ComponentType<any>;
export const SidebarTreeConnectorIcon: ComponentType<any>;
export const Stack: ComponentType<any>;
export const TextField: ComponentType<any>;
export const TooltipIconButton: ComponentType<any>;
export const Typography: ComponentType<any>;
export function alpha(color: string, opacity: number): string;

export function createLucideIcon(
  name: string,
  nodes: unknown[],
): ComponentType<any>;
export function getErrorMessage(error: unknown, fallback: string): string;
export function buildLatexEditorUrl(
  origin: string,
  documentId: string,
  fileId?: string,
): URL;
export function setLatexEditorSearch(
  search: unknown,
  documentId: string,
  fileId?: string,
): unknown;
export const toast: {
  error(message: string): void;
  warning(message: string): void;
  success(message: string): void;
};
export function useNavigate(): (options: {
  to: string;
  search?(current: unknown): unknown;
}) => Promise<void>;
export function useIsMobile(): boolean;

export interface LatexDocumentSummary {
  id: string;
  name: string;
  revision: number;
}
export interface LatexFile {
  id: string;
  path: string;
}
export function useLatexDocuments(): {
  data?: LatexDocumentSummary[];
  isPending: boolean;
  isError: boolean;
};
export function useLatexDocument(id: string | null): {
  data?: { documentRevision: number };
  isError: boolean;
  refetch(): Promise<{ data?: { documentRevision: number }; isError: boolean }>;
};
export function useImportWriteupFile(): {
  isPending: boolean;
  mutateAsync(input: {
    documentId: string;
    input: {
      source: string;
      preferredPath: string;
      originKey: string;
      expectedRevision: number;
    };
  }): Promise<{ created: boolean; file: LatexFile }>;
};
export function useCreateLatexDocument(): {
  isPending: boolean;
  mutateAsync(input: {
    input: {
      name: string;
      source: string;
      originType: "writeup";
      originKey: string;
    };
  }): Promise<{ id: string; name: string }>;
};
export interface QueuedWriteupPdfState {
  isWriteupPdfPreparing: boolean;
  isWriteupPdfReady: boolean;
  openWriteupPdf(): void;
  pdfCompileError: string | null;
  pdfUrl: string | null;
  prepareWriteupPdfPreview(): void;
}
export function useQueuedWriteupPdf(input: {
  areWriteupActionsEnabled: boolean;
  shouldPrepareWriteupPdf: boolean;
  writeupPdfPreparationPriority: number;
  writeupSource: string;
}): QueuedWriteupPdfState;
