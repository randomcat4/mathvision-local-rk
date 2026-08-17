import assert from "node:assert/strict";
import test from "node:test";

import {
  firstSentence,
  mapChatMessage,
  normalizeAgentOperationTitle,
} from "../src/api/chats/responses";

test("recovers agent-title normalization", () => {
  assert.equal(firstSentence("Prove the lemma. Then check it."), "Prove the lemma.");
  assert.equal(normalizeAgentOperationTitle("Review: Check parity"), "Check parity");
  assert.throws(() => normalizeAgentOperationTitle("Compute: "), /title is empty/);
});

test("rejects unsupported message roles exactly as production does", () => {
  assert.throws(
    () =>
      mapChatMessage({
        role: "system",
        content: "hidden",
        timestamp: "now",
        reasoning: null,
      }),
    /unsupported message role/,
  );
});

test("maps absent message collections to empty arrays and defaults", () => {
  assert.deepEqual(
    mapChatMessage({
      role: "assistant",
      content: "done",
      timestamp: "now",
      reasoning: null,
    }),
    {
      role: "assistant",
      content: "done",
      timestamp: "now",
      reasoning: null,
      reasoningDurationSeconds: null,
      modelId: undefined,
      reasoningEffort: undefined,
      displayMode: undefined,
      workflowMode: undefined,
      agentExecution: undefined,
      markdownMathFormat: undefined,
      usage: undefined,
      runUsage: undefined,
      sources: [],
      citations: [],
      textSegments: [],
      toolCalls: [],
      latexEditProposalId: null,
      attachments: [],
      quote: null,
      isMinimized: false,
      feedback: null,
      proChatCall: null,
    },
  );
});
