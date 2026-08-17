import assert from "node:assert/strict";
import test from "node:test";

import {
  allocateUniqueLatexProjectName,
  extractLatexProjectName,
  latexToPlainText,
  normalizeLatexFileName,
  normalizeLatexProjectName,
} from "../src/features/latex/naming";

test("normalizes LaTeX file and project names", () => {
  assert.equal(normalizeLatexFileName(" proof.TEX "), "proof.tex");
  assert.equal(normalizeLatexProjectName(" proof.tex "), "proof");
  assert.throws(() => normalizeLatexFileName("folder/proof"), /path separators/);
});

test("allocates names using the recovered case-insensitive suffix rule", () => {
  assert.equal(
    allocateUniqueLatexProjectName([{ name: "Untitled project" }, { name: "untitled project-2" }]),
    "Untitled project-3",
  );
});

test("extracts a plain project name from a LaTeX title", () => {
  assert.equal(
    extractLatexProjectName("\\title[short]{A \\textbf{Useful}~Proof}\\begin{document}"),
    "A Useful Proof",
  );
  assert.equal(extractLatexProjectName("\\section{No title}"), null);
  assert.equal(latexToPlainText("See \\eqref{main} and \\cite{author2026}."), "See main and author2026.");
});
