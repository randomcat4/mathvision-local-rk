import assert from "node:assert/strict";
import test from "node:test";
import { parseArtifactReferences } from "../src/features/artifacts/artifactReferences";

test("keeps only complete artifact references and preserves Python source", () => {
  assert.deepEqual(
    parseArtifactReferences([
      { artifact_name: " plot ", caption: " Figure 1 ", alt_text: " Plot ", python_code: "x=1" },
      { artifact_name: "missing-caption", alt_text: "Nope" },
      null,
    ]),
    [{ artifactName: "plot", caption: "Figure 1", altText: "Plot", pythonCode: "x=1" }],
  );
});
