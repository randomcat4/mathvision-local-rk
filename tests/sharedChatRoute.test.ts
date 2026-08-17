import assert from "node:assert/strict";
import test from "node:test";
import { makeSharedMessageKey } from "../src/features/routes/sharedChatRoute";
test("preserves the production shared-message key", () => { assert.equal(makeSharedMessageKey({ role: "assistant", timestamp: "2026-08-17T00:00:00Z" }, 3), "assistant-2026-08-17T00:00:00Z-3"); });
