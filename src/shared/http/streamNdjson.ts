/**
 * Behavior-preserving recovery of streamNdjson-sRiOwtSP.js.
 */

export function identity<T>(value: T): T {
  return value;
}

export async function* streamNdjson<T>(
  response: Response,
  missingBodyMessage: string,
): AsyncGenerator<T, void, void> {
  const reader = response.body?.getReader();
  if (!reader) throw new Error(missingBodyMessage);

  const decoder = new TextDecoder("utf-8");
  let buffer = "";

  function* parseCompleteLines(): Generator<T, void, void> {
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";

    for (const line of lines) {
      const trimmedLine = line.trim();
      if (trimmedLine) yield JSON.parse(trimmedLine) as T;
    }
  }

  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;

    const text = decoder.decode(value, { stream: true });
    if (text) {
      buffer += text;
      yield* parseCompleteLines();
    }
  }

  const remainingText = decoder.decode();
  if (remainingText) buffer += remainingText;
  if (buffer.trim()) yield JSON.parse(buffer.trim()) as T;
}
