export interface LatexDocument {
  id: string;
  revision: string | number;
  [key: string]: unknown;
}
interface AsyncMutation<TInput, TOutput> {
  mutateAsync(input: TInput): Promise<TOutput>;
}
export function useCreateLatexDocument(): AsyncMutation<
  { input: { name: string; source: string; folderId?: string | null } },
  LatexDocument
>;
export function useCreateLatexDocumentFile(): AsyncMutation<
  { documentId: string; input: { path: string; kind: string; content: string; expectedRevision: string | number } },
  { documentRevision: string | number; [key: string]: unknown }
>;
export function useDeleteLatexDocument(): AsyncMutation<
  { documentId: string; expectedRevision: string | number },
  unknown
>;
export const toast: { success(message: string): void; error(message: string): void };
export function getErrorMessage(error: unknown, fallback: string): string;
