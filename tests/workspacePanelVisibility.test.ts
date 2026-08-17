import assert from "node:assert/strict";
import test from "node:test";
import {
  ensureVisibleLatexContentPanel,
  getLatexWorkspaceContentMode,
  parseLatexWorkspacePanelVisibility,
  setLatexWorkspaceContentMode,
} from "../src/features/latex/workspacePanelVisibility";

test("parses only complete boolean visibility records", () => {
  assert.deepEqual(parseLatexWorkspacePanelVisibility('{"source":true,"pdf":false,"chat":true}'), {
    source: true,
    pdf: false,
    chat: true,
  });
  assert.throws(() => parseLatexWorkspacePanelVisibility('{"source":true}'), /invalid/);
});

test("restores Source when both content panels are hidden", () => {
  assert.deepEqual(ensureVisibleLatexContentPanel({ source: false, pdf: false, chat: true }), {
    source: true,
    pdf: false,
    chat: true,
  });
});

test("round-trips the recovered source, pdf, and split modes", () => {
  const initial = { source: true, pdf: true, chat: false };
  for (const mode of ["source", "pdf", "split"] as const) {
    assert.equal(getLatexWorkspaceContentMode(setLatexWorkspaceContentMode(initial, mode)), mode);
  }
  assert.throws(
    () => getLatexWorkspaceContentMode({ source: false, pdf: false, chat: false }),
    /must keep either Source or PDF visible/,
  );
});
