import assert from "node:assert/strict";
import test from "node:test";
import {
  GAO_ORIGINAL_CHAT_ID,
  GAO_ORIGINAL_RUN_ID,
  gaoOriginalWorkflowChat,
  gaoOriginalWorkflowRun,
  gaoOriginalWorkflowStats,
} from "../src/local/gaoOriginalWorkflowFixture";

test("builds a production-shaped 132-round Gao Pro workflow fixture", () => {
  assert.deepEqual(gaoOriginalWorkflowStats, { rounds: 132, nodes: 660, edges: 659 });
  assert.equal(gaoOriginalWorkflowRun.id, GAO_ORIGINAL_RUN_ID);
  assert.equal(gaoOriginalWorkflowRun.chat_id, GAO_ORIGINAL_CHAT_ID);
  assert.equal(gaoOriginalWorkflowRun.state.workflow.nodes.at(-1)?.round_index, 132);
  assert.equal(gaoOriginalWorkflowRun.state.workflow.edges.length, 659);
});

test("attaches the static Pro call to the original assistant message shape", () => {
  assert.equal(gaoOriginalWorkflowChat.messages.length, 2);
  const assistant = gaoOriginalWorkflowChat.messages[1];
  assert.equal(assistant.role, "assistant");
  assert.ok(assistant.pro_chat_call);
  assert.equal(assistant.pro_chat_call.run_id, GAO_ORIGINAL_RUN_ID);
  assert.equal(assistant.pro_chat_call.status, "completed");
});

test("keeps every workflow edge endpoint inside the fixture graph", () => {
  const ids = new Set(gaoOriginalWorkflowRun.state.workflow.nodes.map((node) => node.id));
  for (const edge of gaoOriginalWorkflowRun.state.workflow.edges) {
    assert.ok(ids.has(edge.source));
    assert.ok(ids.has(edge.target));
  }
});
