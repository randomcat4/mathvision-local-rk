import { useCallback, useState } from "#production-react";
import {
  getErrorMessage,
  toast,
  useCreateLatexDocument,
  useCreateLatexDocumentFile,
  useDeleteLatexDocument,
  type LatexDocument,
} from "../../runtime/latexMutationRuntime.js";
import { normalizeLatexProjectName } from "./naming";

export interface LatexProjectCreationInput {
  name: string;
  source: string;
  folderId?: string | null;
  templateId?: string | null;
}

export interface UseLatexProjectCreationOptions {
  beforeCreate?: () => void | Promise<void>;
  onCreated?: (document: LatexDocument) => void | Promise<void>;
}

export function useLatexProjectCreation({
  beforeCreate,
  onCreated,
}: UseLatexProjectCreationOptions = {}) {
  const { mutateAsync: createDocument } = useCreateLatexDocument();
  const { mutateAsync: createFile } = useCreateLatexDocumentFile();
  const { mutateAsync: deleteDocument } = useDeleteLatexDocument();
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const createProject = useCallback(
    async (input: LatexProjectCreationInput): Promise<LatexDocument | null> => {
      setIsCreatingProject(true);
      let cleanup: { id: string; revision: string | number } | null = null;
      try {
        await beforeCreate?.();
        const created = await createDocument({
          input: {
            name: normalizeLatexProjectName(input.name),
            source: input.source,
            folderId: input.folderId,
          },
        });
        cleanup = { id: created.id, revision: created.revision };
        let completed = created;
        if (input.templateId === "research-paper") {
          const file = await createFile({
            documentId: created.id,
            input: {
              path: "references.bib",
              kind: "text",
              content: "% Add bibliography entries here.\n",
              expectedRevision: created.revision,
            },
          });
          cleanup = { id: created.id, revision: file.documentRevision };
          completed = { ...created, revision: file.documentRevision };
        }
        await onCreated?.(completed);
        toast.success("LaTeX project created.");
        return completed;
      } catch (error) {
        const message = getErrorMessage(error, "Could not create the LaTeX project.");
        if (!cleanup) {
          toast.error(message);
          return null;
        }
        try {
          await deleteDocument({
            documentId: cleanup.id,
            expectedRevision: cleanup.revision,
          });
        } catch (cleanupError) {
          toast.error(
            `${message} The partially created project could not be removed: ${getErrorMessage(cleanupError, "project cleanup failed")}`,
          );
          return null;
        }
        toast.error(message);
        return null;
      } finally {
        setIsCreatingProject(false);
      }
    },
    [beforeCreate, createDocument, createFile, deleteDocument, onCreated],
  );
  return { createProject, isCreatingProject };
}
