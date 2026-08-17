const FENCED_LATEX = /^[ \t]*```(?:latex|tex)?[ \t]*\r?\n([\s\S]*?)\r?\n```[ \t]*$/i;

export function extractLatexWriteupSource(value: string): string {
  return (FENCED_LATEX.exec(value)?.[1] ?? value).replace(/\r\n?/g, "\n");
}
