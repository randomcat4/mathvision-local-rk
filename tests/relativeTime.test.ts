import assert from "node:assert/strict";
import test from "node:test";
import {
  createRelativeTimeFormatter,
  secondsUntilRelativeTimeUpdate,
} from "../src/features/time/relativeTime";

test("formats recovered relative-time units against Date.now", () => {
  const originalNow = Date.now;
  Date.now = () => Date.parse("2026-01-01T00:00:00Z");
  try {
    assert.equal(createRelativeTimeFormatter("en-US")("2025-12-31T23:00:00Z"), "1 hour ago");
    assert.equal(createRelativeTimeFormatter("en-US")("2026-01-01T00:00:10Z"), "now");
  } finally {
    Date.now = originalNow;
  }
});

test("computes the next recovered display boundary", () => {
  const originalNow = Date.now;
  Date.now = () => 0;
  try {
    assert.equal(secondsUntilRelativeTimeUpdate(61_000), 59);
    assert.equal(secondsUntilRelativeTimeUpdate(10_000), 50);
  } finally {
    Date.now = originalNow;
  }
});
