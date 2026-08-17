import assert from "node:assert/strict";
import test from "node:test";

import { isPastedTextAttachment } from "../src/features/chat/composerAttachment";

test("recognizes the two recovered pasted-text filename forms", () => {
  assert.equal(isPastedTextAttachment("pasted-text.txt"), true);
  assert.equal(isPastedTextAttachment("pasted-text-12.TXT"), true);
  assert.equal(isPastedTextAttachment("Lemma (pasted).txt"), true);
  assert.equal(isPastedTextAttachment("Lemma (pasted 3).txt"), true);
});

test("does not classify ordinary text files as pasted text", () => {
  assert.equal(isPastedTextAttachment("pasted text.txt"), false);
  assert.equal(isPastedTextAttachment("Lemma.txt"), false);
});
