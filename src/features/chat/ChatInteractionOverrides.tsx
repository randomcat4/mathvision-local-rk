/** Behavior-preserving recovery of ChatInteractionOverrides-dyfOoEnd.js. */

import { createContext, useContext, type PropsWithChildren } from "#production-react";

export interface ChatInteractionOverrides {
  branchAssistantMessage?: unknown;
  chatAction?: unknown;
  chatSelect?: unknown;
  composerAction?: unknown;
  profileMenuAction?: unknown;
  profileMenuTrigger?: unknown;
  searchDialogTrigger?: unknown;
  writeupAction?: unknown;
  [key: string]: unknown;
}

const defaultOverrides: ChatInteractionOverrides = {};
const ChatInteractionOverridesContext = createContext(defaultOverrides);

export function ChatInteractionOverridesProvider({
  value,
  children,
}: PropsWithChildren<{ value: ChatInteractionOverrides }>) {
  return (
    <ChatInteractionOverridesContext.Provider value={value}>
      {children}
    </ChatInteractionOverridesContext.Provider>
  );
}

export const useChatInteractionOverrides = () => useContext(ChatInteractionOverridesContext);
