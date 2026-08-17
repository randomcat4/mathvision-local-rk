import assert from "node:assert/strict";
import test from "node:test";
import { getLatexProjectTemplate, latexProjectTemplates } from "../src/features/latex/projectTemplates";

test("recovers all four production LaTeX project templates", () => {
  assert.deepEqual(latexProjectTemplates.map(({ id }) => id), ["article", "report", "presentation", "research-paper"]);
  assert.match(getLatexProjectTemplate("presentation").source, /aspectratio=169/);
});

test("falls back to the production article template", () => {
  assert.equal(getLatexProjectTemplate("missing").id, "article");
});
