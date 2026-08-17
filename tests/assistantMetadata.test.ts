import assert from "node:assert/strict";
import test from "node:test";
import { getAssistantMetadataValues } from "../src/features/chat/assistantMetadata";

test("uses direct model ids before usage ids and preserves the production fallback", () => {
  assert.deepEqual(
    getAssistantMetadataValues(
      { modelId: "direct", usage: { modelId: "usage" } },
      [{ id: "direct", label: "Direct model" }],
    ),
    { isAgent: false, modelLabel: "Mode: Direct model", showModel: true },
  );
  assert.equal(
    getAssistantMetadataValues({ usage: { modelId: "unknown" } }, []).modelLabel,
    "Mode: mathvision",
  );
});

test("agent mode suppresses the ordinary model chip", () => {
  assert.deepEqual(getAssistantMetadataValues({ modelId: "m", workflowMode: "agent" }, []), {
    isAgent: true,
    modelLabel: "Mode: mathvision",
    showModel: false,
  });
});
