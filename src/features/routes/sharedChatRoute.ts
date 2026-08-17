export function makeSharedMessageKey(message: { role: string; timestamp: string }, index: number): string {
  return `${message.role}-${message.timestamp}-${index}`;
}

export function formatSharedChatUpdatedAt(value: string, locale?: string): string {
  return new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}
