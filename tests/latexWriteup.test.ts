import assert from "node:assert/strict";
import test from "node:test";
import { extractLatexWriteupSource } from "../src/features/latex/writeupText";

test("unwraps only a complete recovered LaTeX fence and normalizes newlines", () => {
  assert.equal(extractLatexWriteupSource("```latex\r\na+b\r\n```"), "a+b");
  assert.equal(extractLatexWriteupSource("before\r\nafter"), "before\nafter");
});
