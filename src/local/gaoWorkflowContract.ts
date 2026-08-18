export const GAO_ORIGINAL_CHAT_ID = "gao-original-workflow";
export const GAO_ORIGINAL_RUN_ID = "gao-original-run";
export const GAO_ORIGINAL_ADMIN_USER_ID = "local-user";

export interface GaoWorkflowSnapshot {
  chat: Record<string, unknown>;
  chatSummary: Record<string, unknown>;
  run: Record<string, unknown>;
}
