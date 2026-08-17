import assert from "node:assert/strict";
import test from "node:test";

import {
  decreasePdfZoom,
  increasePdfZoom,
  nextPdfPage,
  previousPdfPage,
} from "../src/features/pdf/pdfCanvasControls";

test("clamps recovered PDF page navigation", () => {
  assert.equal(previousPdfPage(1), 1);
  assert.equal(previousPdfPage(3), 2);
  assert.equal(nextPdfPage(3, 3), 3);
  assert.equal(nextPdfPage(1, 3), 2);
});

test("clamps recovered PDF zoom changes", () => {
  assert.equal(decreasePdfZoom(60, 60, 20), 60);
  assert.equal(decreasePdfZoom(120, 60, 20), 100);
  assert.equal(increasePdfZoom(180, 180, 20), 180);
  assert.equal(increasePdfZoom(120, 180, 20), 140);
});
