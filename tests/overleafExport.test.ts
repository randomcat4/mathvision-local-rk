import assert from "node:assert/strict";
import test from "node:test";
import {
  exportToOverleaf,
  OVERLEAF_ARCHIVE_SIZE_LIMIT,
} from "../src/features/latex/overleafExport";

test("rejects an Overleaf archive before reading when it exceeds 50 MB", async () => {
  const archive = { size: OVERLEAF_ARCHIVE_SIZE_LIMIT + 1 } as Blob;
  await assert.rejects(
    exportToOverleaf({ archive, compiler: "pdflatex", mainDocument: "main.tex", name: "x", targetWindow: {} as Window }),
    /cannot exceed 50 MB/,
  );
});
