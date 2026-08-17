import assert from "node:assert/strict";
import test from "node:test";

import {
  agentOutputIdFromHref,
  appendUnreferencedAgentOutputs,
} from "../src/features/agent/agentExecutionLinks";

test("accepts only recovered agent output fragment ids", () => {
  assert.equal(agentOutputIdFromHref("#agent-output-agent-operation-0"), "agent-operation-0");
  assert.equal(agentOutputIdFromHref("#agent-output-agent-operation-01"), null);
  assert.equal(agentOutputIdFromHref("https://example.com"), null);
});

test("appends only used outputs not already linked by the answer", () => {
  const answer = "See [first](#agent-output-agent-operation-0).";
  const titles = new Map([
    ["agent-operation-0", "First"],
    ["agent-operation-1", "Second"],
  ]);
  assert.equal(
    appendUnreferencedAgentOutputs(
      answer,
      ["agent-operation-0", "agent-operation-1"],
      titles,
      (value) => value,
    ),
    `${answer}\n\nSee intermediate result: [Second](#agent-output-agent-operation-1).`,
  );
});
