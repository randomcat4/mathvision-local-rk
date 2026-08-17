import assert from "node:assert/strict";
import test from "node:test";
import { serializeFeedbackReport } from "../src/api/reports/feedbackPayload";

test("serializes feedback using the recovered snake-case nullable payload", () => {
  assert.deepEqual(serializeFeedbackReport({ kind: "bug", message: "broken" }), {
    kind: "bug",
    message: "broken",
    chat_id: null,
    page_url: null,
  });
});
