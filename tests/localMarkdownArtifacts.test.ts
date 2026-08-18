import assert from "node:assert/strict";
import test from "node:test";
import {
  extractLocalMarkdownLinks,
  localMarkdownArtifactUrl,
  removeLocalMarkdownLinkTargets,
} from "../src/features/graph/localMarkdownArtifacts";

test("extracts local Markdown artifacts without exposing their target in rendered chat", () => {
  const source = "报告：[l55verify.md](C:\\game\\ai4math\\publish\\zhuang-gao-cyclic-index-two\\fresh\\g02\\smooth\\l55verify.md)";
  assert.deepEqual(extractLocalMarkdownLinks(source), [{
    label: "l55verify.md",
    path: "C:\\game\\ai4math\\publish\\zhuang-gao-cyclic-index-two\\fresh\\g02\\smooth\\l55verify.md",
  }]);
  assert.equal(removeLocalMarkdownLinkTargets(source), "报告：l55verify.md");
});

test("encodes local Markdown paths for the read-only preview endpoint", () => {
  assert.equal(
    localMarkdownArtifactUrl("C:\\game\\proof.md"),
    "/__local-md?path=C%3A%5Cgame%5Cproof.md",
  );
});
