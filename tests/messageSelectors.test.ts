import assert from "node:assert/strict";
import test from "node:test";

import {
  findLastAssistantMessageIndex,
  findLastUserMessageIndex,
  indexMessageOrdinals,
  selectVisibleMessages,
} from "../src/domain/chat/messageSelectors";
import type { ChatMessage } from "../src/domain/chat/types";

const message = (role: ChatMessage["role"], content: string): ChatMessage => ({
  role,
  content,
  timestamp: "2026-08-17T00:00:00Z",
});

test("hides only the trailing user message of a canceled inactive run", () => {
  const messages = [message("user", "q1"), message("assistant", "a1"), message("user", "q2")];
  assert.deepEqual(
    selectVisibleMessages({ messages, activeRun: null, latestRun: { status: "canceled" } }),
    messages.slice(0, -1),
  );
  assert.equal(
    selectVisibleMessages({ messages, activeRun: { status: "running" }, latestRun: null }),
    messages,
  );
});

test("finds the final user and assistant messages", () => {
  const messages = [message("user", "q1"), message("assistant", "a1"), message("user", "q2")];
  assert.equal(findLastUserMessageIndex(messages), 2);
  assert.equal(findLastAssistantMessageIndex(messages), 1);
});

test("numbers user and assistant messages independently", () => {
  const messages = [message("user", "q1"), message("assistant", "a1"), message("user", "q2")];
  assert.deepEqual([...indexMessageOrdinals(messages)], [
    [0, { queryNumber: 1 }],
    [1, { responseNumber: 1 }],
    [2, { queryNumber: 2 }],
  ]);
});
