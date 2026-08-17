export interface LatexProjectFile {
  id: string;
  documentId: string;
  path: string;
  kind: string;
  contentType?: string | null;
  lastUpdated: string;
  [key: string]: unknown;
}
export interface LatexFileTreeNode {
  file: LatexProjectFile;
  children: LatexFileTreeNode[];
}
const compareNames = (left: string, right: string) =>
  left.localeCompare(right, undefined, { numeric: true, sensitivity: "base" });
export function compareLatexProjectFiles(
  left: LatexProjectFile,
  right: LatexProjectFile,
  mainFilePath?: string | null,
) {
  const leftParts = left.path.split("/");
  const rightParts = right.path.split("/");
  const leftRootFile = leftParts.length === 1 && left.kind !== "folder";
  const rightRootFile = rightParts.length === 1 && right.kind !== "folder";
  if (leftRootFile && rightRootFile) {
    if (left.path === mainFilePath) return -1;
    if (right.path === mainFilePath) return 1;
    return compareNames(left.path, right.path);
  }
  if (leftRootFile) return -1;
  if (rightRootFile) return 1;
  return (
    compareNames(leftParts[0], rightParts[0]) ||
    compareNames(left.path, right.path)
  );
}
export const getLatexPathName = (path: string) =>
  path.split("/").at(-1) ?? path;
export function getLatexParentPath(path: string) {
  const index = path.lastIndexOf("/");
  return index === -1 ? "" : path.slice(0, index);
}
export function getLatexAncestorPaths(path: string) {
  const parts = path.split("/");
  return parts
    .slice(0, -1)
    .map((_part, index) => parts.slice(0, index + 1).join("/"));
}
export function buildLatexFileTree(
  files: LatexProjectFile[],
  mainFilePath?: string | null,
) {
  const sorted = [...files].sort((left, right) =>
    compareLatexProjectFiles(left, right, mainFilePath),
  );
  const nodes = new Map<string, LatexFileTreeNode>();
  for (const file of sorted) {
    if (nodes.has(file.path))
      throw new Error(`Duplicate LaTeX project path '${file.path}'.`);
    nodes.set(file.path, { children: [], file });
  }
  const roots: LatexFileTreeNode[] = [];
  for (const file of sorted) {
    const node = nodes.get(file.path);
    if (!node)
      throw new Error(`Missing LaTeX project tree node '${file.path}'.`);
    const parentPath = getLatexParentPath(file.path);
    if (!parentPath) {
      roots.push(node);
      continue;
    }
    const parent = nodes.get(parentPath);
    if (!parent)
      throw new Error(
        `LaTeX project item '${file.path}' is missing folder '${parentPath}'.`,
      );
    if (parent.file.kind !== "folder")
      throw new Error(`LaTeX project path '${parentPath}' isn't a folder.`);
    parent.children.push(node);
  }
  return roots;
}
export function expandLatexAncestors(
  expanded: Set<string>,
  selectedPath?: string | null,
) {
  if (!selectedPath) return expanded;
  const ancestors = getLatexAncestorPaths(selectedPath);
  return ancestors.every((path) => expanded.has(path))
    ? expanded
    : new Set([...expanded, ...ancestors]);
}
export type ExpandedLatexFolders = Record<string, Set<string>>;
export function parseExpandedLatexFolders(
  serialized: string,
): ExpandedLatexFolders {
  const parsed: unknown = JSON.parse(serialized);
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
    throw new Error("Saved expanded LaTeX folder paths are invalid.");
  const result: ExpandedLatexFolders = {};
  for (const [documentId, paths] of Object.entries(parsed)) {
    if (
      !Array.isArray(paths) ||
      !paths.every((path) => typeof path === "string")
    )
      throw new Error(
        `Saved expanded folders for LaTeX project '${documentId}' are invalid.`,
      );
    result[documentId] = new Set(paths);
  }
  return result;
}
export const serializeExpandedLatexFolders = (value: ExpandedLatexFolders) =>
  JSON.stringify(
    Object.fromEntries(
      Object.entries(value).map(([documentId, paths]) => [
        documentId,
        [...paths],
      ]),
    ),
  );
