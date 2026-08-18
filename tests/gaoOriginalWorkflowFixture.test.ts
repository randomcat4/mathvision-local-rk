import assert from "node:assert/strict";
import test from "node:test";
import {
  GAO_ORIGINAL_CHAT_ID,
  GAO_ORIGINAL_RUN_ID,
  gaoOriginalWorkflowChat,
  gaoOriginalWorkflowRun,
  gaoOriginalWorkflowStats,
} from "../src/local/gaoOriginalWorkflowFixture";

test("builds a production-shaped 132-round parallel Gao workflow fixture", () => {
  assert.deepEqual(gaoOriginalWorkflowStats, {
    rounds: 132,
    nodes: 176,
    edges: 318,
    rejected: 16,
  });
  assert.equal(gaoOriginalWorkflowRun.id, GAO_ORIGINAL_RUN_ID);
  assert.equal(gaoOriginalWorkflowRun.chat_id, GAO_ORIGINAL_CHAT_ID);
  assert.equal(gaoOriginalWorkflowRun.state.workflow.nodes.at(-1)?.round_index, 132);
  assert.equal(gaoOriginalWorkflowRun.state.workflow.edges.length, 318);
});

test("attaches the static Pro call to the original assistant message shape", () => {
  assert.equal(gaoOriginalWorkflowChat.messages.length, 2);
  const assistant = gaoOriginalWorkflowChat.messages[1];
  assert.equal(assistant.role, "assistant");
  assert.ok(assistant.pro_chat_call);
  assert.equal(assistant.pro_chat_call.run_id, GAO_ORIGINAL_RUN_ID);
  assert.equal(assistant.pro_chat_call.status, "completed");
  assert.equal(
    gaoOriginalWorkflowChat.messages.filter((message) => message.role === "user").length,
    1,
  );
});

test("fans the main instance out to isolated agents and preserves rejected routes", () => {
  const workflow = gaoOriginalWorkflowRun.state.workflow;
  const firstDispatch = workflow.edges
    .filter((edge) => edge.source === "main-freeze")
    .map((edge) => edge.target);
  for (const target of [
    "pro1-u132-audit",
    "pro2-u131",
    "sub1-u127",
    "sub2-finite",
  ]) {
    assert.ok(firstDispatch.includes(target));
  }
  assert.ok(workflow.nodes.some((node) => node.id === "mixed-reject" && node.status === "failed"));
  assert.ok(workflow.nodes.some((node) => node.id === "reducible-reject" && node.status === "failed"));
  assert.ok(workflow.edges.length > workflow.nodes.length - 1);
  assert.equal(
    workflow.edges.some((edge) => edge.condition === "parallel ledger work unit"),
    false,
  );
});

test("keeps every workflow edge endpoint inside the fixture graph", () => {
  const ids = new Set(gaoOriginalWorkflowRun.state.workflow.nodes.map((node) => node.id));
  for (const edge of gaoOriginalWorkflowRun.state.workflow.edges) {
    assert.ok(ids.has(edge.source));
    assert.ok(ids.has(edge.target));
  }
});
