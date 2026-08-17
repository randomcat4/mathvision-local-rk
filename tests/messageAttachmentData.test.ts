import assert from "node:assert/strict";
import test from "node:test";
import { getEmbeddedAttachmentUrl, makeBase64DataUrl } from "../src/features/attachments/messageAttachmentData";

test("builds the production base64 data URL", () => {
  assert.equal(makeBase64DataUrl("text/plain", "YWJj"), "data:text/plain;base64,YWJj");
});

test("uses the production fallback MIME type for embedded attachments", () => {
  assert.equal(getEmbeddedAttachmentUrl({ contentType: "", dataBase64: "YWJj" }), "data:application/octet-stream;base64,YWJj");
  assert.equal(getEmbeddedAttachmentUrl({ contentType: "text/plain", dataBase64: null }), null);
});
