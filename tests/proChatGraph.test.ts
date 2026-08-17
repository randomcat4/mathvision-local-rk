import assert from "node:assert/strict";
import test from "node:test";
import {
  contractReviewGates,
  formatWorkflowLabel,
} from "../src/features/graph/proChatGraph";
const node = (id: string, kind: string, roundIndex: number | null) => ({
  id,
  kind,
  roundIndex,
  status: "completed",
  label: id,
  streamReasoning: "",
  displaySummary: "",
});
test("contracts the recovered review join into its readiness gate", () => {
  const result = contractReviewGates(
    [
      node("a", "compute", 1),
      node("join", "review_join", 1),
      node("gate", "ready_gate", 1),
      node("b", "writeup", 1),
    ],
    [
      { source: "a", target: "join" },
      { source: "join", target: "gate" },
      { source: "gate", target: "b" },
    ],
  );
  assert.deepEqual(
    result.nodes.map((item) => item.id),
    ["a", "gate", "b"],
  );
  assert.deepEqual(
    result.edges.map((edge) => [edge.source, edge.target]),
    [
      ["a", "gate"],
      ["gate", "b"],
    ],
  );
  assert.equal(result.nodes[1].label, "Review readiness gate");
});
test("rejects a malformed recovered review gate", () =>
  assert.throws(
    () =>
      contractReviewGates(
        [node("join", "review_join", 1), node("gate", "ready_gate", 2)],
        [{ source: "join", target: "gate" }],
      ),
    /different rounds/,
  ));
test("formats recovered workflow identifiers", () =>
  assert.equal(formatWorkflowLabel("review_join"), "Review Join"));
