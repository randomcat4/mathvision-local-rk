import assert from "node:assert/strict";
import test from "node:test";
import {
  decodeBase64Utf8,
  isLatexAttachment,
} from "../src/features/latex/attachmentEncoding";
import { decodePdfBase64 } from "../src/features/pdf/usePdfObjectUrl";

test("recognizes LaTeX attachments using the recovered trim and case rule", () => {
  assert.equal(isLatexAttachment("  Proof.TeX "), true);
  assert.equal(isLatexAttachment("Proof.tex.backup"), false);
});

test("decodes base64 attachment text as non-fatal UTF-8", () => {
  assert.equal(decodeBase64Utf8("5pWw5a2m"), "数学");
});

test("creates PDF blobs with the recovered media type", async () => {
  const blob = decodePdfBase64("JVBERg==");
  assert.equal(blob.type, "application/pdf");
  assert.equal(await blob.text(), "%PDF");
});
