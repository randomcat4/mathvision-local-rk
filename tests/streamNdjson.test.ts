import assert from "node:assert/strict";
import test from "node:test";

import { identity, streamNdjson } from "../src/shared/http/streamNdjson";

test("identity preserves the exact value", () => {
  const value = { stable: true };
  assert.equal(identity(value), value);
});

test("parses records split across stream chunks", async () => {
  const encoder = new TextEncoder();
  const body = new ReadableStream<Uint8Array>({
    start(controller) {
      controller.enqueue(encoder.encode('{"id":1}\n{"id"'));
      controller.enqueue(encoder.encode(':2}\n\n'));
      controller.enqueue(encoder.encode('{"id":3}'));
      controller.close();
    },
  });

  const records: Array<{ id: number }> = [];
  for await (const record of streamNdjson<{ id: number }>(new Response(body), "missing")) {
    records.push(record);
  }
  assert.deepEqual(records, [{ id: 1 }, { id: 2 }, { id: 3 }]);
});

test("uses the recovered error message when the response body is unavailable", async () => {
  const iterator = streamNdjson<{ id: number }>(new Response(null), "stream unavailable");
  await assert.rejects(iterator.next(), /stream unavailable/);
});
