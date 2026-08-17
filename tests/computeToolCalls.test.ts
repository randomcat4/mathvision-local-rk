import assert from "node:assert/strict";
import test from "node:test";

import {
  collectCalculations,
  formatComputationDuration,
  parseComputationOutput,
} from "../src/features/compute/computeToolCalls";

test("pairs recovered computation calls and outputs by tool name and call id", () => {
  const calculations = collectCalculations([
    { toolType: "function_call", toolName: "run_python", callId: "call-1", arguments: { code: "print(1)" } },
    { toolType: "function_call_output", toolName: "run_python", callId: "call-1", arguments: { output: { success: true, stdout: "1\n", duration_ms: 1250 } } },
  ]);
  assert.equal(calculations.length, 1);
  assert.equal(calculations[0].runtime, "python");
  assert.equal(calculations[0].output?.stdout, "1\n");
});

test("rejects malformed outputs and preserves recovered duration formatting", () => {
  assert.equal(parseComputationOutput({ stdout: "missing success" }), null);
  assert.equal(formatComputationDuration(999.6), "1000 ms");
  assert.equal(formatComputationDuration(1250), "1.25 s");
  assert.equal(formatComputationDuration(12000), "12.0 s");
});
