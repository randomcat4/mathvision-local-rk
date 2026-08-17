/**
 * Behavior-preserving recovery of chatMessageSelectors-CRUAC26Y.js.
 */

import type { ChatMessage, ChatWithRunState, MessageOrdinal } from "./types";

export function selectVisibleMessages(chat: ChatWithRunState): ChatMessage[] {
  if (chat.activeRun || chat.latestRun?.status !== "canceled") return chat.messages;

  const lastMessage = chat.messages.at(-1);
  return lastMessage?.role !== "user" ? chat.messages : chat.messages.slice(0, -1);
}

export function findLastUserMessageIndex(messages: readonly ChatMessage[]): number {
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    if (messages[index].role === "user") return index;
  }
  return -1;
}

export function indexMessageOrdinals(
  messages: readonly ChatMessage[],
): Map<number, MessageOrdinal> {
  const ordinals = new Map<number, MessageOrdinal>();
  let queryNumber = 0;
  let responseNumber = 0;

  for (const [index, message] of messages.entries()) {
    if (message.role === "user") {
      queryNumber += 1;
      ordinals.set(index, { queryNumber });
      continue;
    }

    responseNumber += 1;
    ordinals.set(index, { responseNumber });
  }

  return ordinals;
}

export function findLastAssistantMessageIndex(messages: readonly ChatMessage[]): number {
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    if (messages[index]?.role === "assistant") return index;
  }
  return -1;
}
