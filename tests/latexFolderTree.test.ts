import assert from "node:assert/strict";
import test from "node:test";
import {
  buildLatexFileTree,
  expandLatexAncestors,
  parseExpandedLatexFolders,
  serializeExpandedLatexFolders,
} from "../src/features/latex/latexFolderTree";
const file = (id: string, path: string, kind = "text") => ({
  id,
  documentId: "d",
  path,
  kind,
  lastUpdated: "2026-01-01",
});
test("builds the recovered LaTeX folder tree with the main root file first", () => {
  const tree = buildLatexFileTree(
    [
      file("b", "notes.tex"),
      file("f", "chapters", "folder"),
      file("c", "chapters/a.tex"),
      file("m", "main.tex"),
    ],
    "main.tex",
  );
  assert.deepEqual(
    tree.map((node) => node.file.path),
    ["main.tex", "notes.tex", "chapters"],
  );
  assert.equal(tree[2].children[0].file.path, "chapters/a.tex");
});
test("rejects missing recovered parent folders", () =>
  assert.throws(
    () => buildLatexFileTree([file("c", "missing/a.tex")]),
    /missing folder/,
  ));
test("expands only ancestors and round trips persisted folders", () => {
  const expanded = expandLatexAncestors(new Set(["a"]), "a/b/c.tex");
  assert.deepEqual([...expanded], ["a", "a/b"]);
  const saved = serializeExpandedLatexFolders({ d: expanded });
  assert.deepEqual([...parseExpandedLatexFolders(saved).d], ["a", "a/b"]);
});
