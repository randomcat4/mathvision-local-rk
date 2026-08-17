import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type PropsWithChildren,
} from "#production-react";
import {
  expandLatexAncestors,
  parseExpandedLatexFolders,
  serializeExpandedLatexFolders,
  type ExpandedLatexFolders,
} from "./latexFolderTree";
import { usePersistentValue } from "../../runtime/latexFolderExpansionRuntime.js";
const STORAGE_KEY = "workspace-explorer-latex-expanded-folder-paths";
interface FolderExpansionContextValue {
  expandedFolderPathsByDocument: ExpandedLatexFolders;
  setExpandedFolderPaths(documentId: string, paths: Set<string>): void;
}
const FolderExpansionContext =
  createContext<FolderExpansionContextValue | null>(null);
export function LatexProjectFolderExpansionProvider({
  children,
}: PropsWithChildren) {
  const { value, updateValue } = usePersistentValue({
    storageKey: STORAGE_KEY,
    defaultValue: {},
    parse: parseExpandedLatexFolders,
    serialize: serializeExpandedLatexFolders,
    readErrorMessage: "Could not read the saved expanded LaTeX folders.",
    writeErrorMessage: "Could not save the expanded LaTeX folders.",
  });
  const setExpandedFolderPaths = useCallback(
    (documentId: string, paths: Set<string>) =>
      updateValue((current) => {
        const next = { ...current };
        if (paths.size > 0) next[documentId] = paths;
        else delete next[documentId];
        return next;
      }),
    [updateValue],
  );
  const context = useMemo(
    () => ({ expandedFolderPathsByDocument: value, setExpandedFolderPaths }),
    [value, setExpandedFolderPaths],
  );
  return (
    <FolderExpansionContext.Provider value={context}>
      {children}
    </FolderExpansionContext.Provider>
  );
}
export function useLatexProjectFolderExpansion() {
  const value = useContext(FolderExpansionContext);
  if (!value)
    throw new Error(
      "LaTeX project folder expansion requires its workspace provider.",
    );
  return value;
}
export { expandLatexAncestors };
