import assert from "node:assert/strict";
import test from "node:test";

import {
  normalizeAssistantCitationLinks,
  resolveLiteratureMarkers,
} from "../src/features/chat/structuredMarkdownText";

test("normalizes parenthesized and hostname-only citation links", () => {
  assert.equal(
    normalizeAssistantCitationLinks("([example.com](https://example.com/))"),
    '[example.com](https://example.com/ "assistant-source-citation")',
  );
  assert.equal(
    normalizeAssistantCitationLinks("[paper](https://example.com/paper)"),
    "[paper](https://example.com/paper)",
  );
});

test("resolves complete literature source markers and leaves unknown markers alone", () => {
  const sources = [{ source_id: "A1", link: "https://example.com/a" }];
  const dependencies = {
    escapeMarkdownLabel: (label: string) =>
      label.replace(/\\/g, "\\\\").replace(/\[/g, "\\[").replace(/\]/g, "\\]"),
    transformOutsideProtectedMarkdown: (text: string, transform: (part: string) => string) =>
      transform(text),
    wrapMarkdownUrl: (url: string) => `<${url.replace(/>/g, "%3E")}>`,
  };
  assert.equal(
    resolveLiteratureMarkers("See [A1] and [A2].", sources, dependencies),
    'See [\\[A1\\]](<https://example.com/a> "assistant-source-citation") and [A2].',
  );
});
