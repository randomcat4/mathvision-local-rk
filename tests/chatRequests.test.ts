import assert from "node:assert/strict";
import test from "node:test";

import {
  serializeAttachment,
  serializeChat,
  serializeChatMessage,
  serializeRunSubmission,
} from "../src/api/chats/requests";

test("keeps the production attachment id and legacy-data branches", () => {
  assert.deepEqual(
    serializeAttachment({
      attachmentId: "stored-1",
      dataBase64: "ignored",
      name: "proof.pdf",
      contentType: "application/pdf",
      kind: "document",
      sizeBytes: 12,
    }),
    {
      attachment_id: "stored-1",
      name: "proof.pdf",
      content_type: "application/pdf",
      kind: "document",
      size_bytes: 12,
    },
  );
  assert.throws(
    () =>
      serializeAttachment({
        name: "empty.txt",
        contentType: "text/plain",
        kind: "document",
      }),
    /has no stored id or legacy data/,
  );
});

test("preserves truthy and undefined checks in message serialization", () => {
  const serialized = serializeChatMessage({
    role: "assistant",
    content: "answer",
    timestamp: "now",
    reasoning: "",
    reasoningDurationSeconds: 0,
    sources: [],
    isMinimized: false,
    feedback: null,
  });
  assert.deepEqual(serialized, {
    role: "assistant",
    content: "answer",
    timestamp: "now",
    reasoning_duration_seconds: 0,
    feedback: null,
  });
});

test("preserves null folder ids while omitting undefined ids", () => {
  assert.deepEqual(serializeChat({ folderId: null }), {
    title: null,
    folder_id: null,
    messages: [],
    user: null,
  });
  assert.deepEqual(serializeChat({}), { title: null, messages: [], user: null });
});

test("emits workflow mode only for agent submissions", () => {
  assert.deepEqual(serializeRunSubmission({ workflowMode: "single", proChatCall: false }), {});
  assert.deepEqual(serializeRunSubmission({ workflowMode: "agent", proChatCall: true }), {
    workflow_mode: "agent",
    pro_chat_call: true,
  });
});
