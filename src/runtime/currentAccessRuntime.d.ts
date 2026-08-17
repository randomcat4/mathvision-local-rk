export const CURRENT_ACCESS_STALE_TIME: number;
export const currentAccessQueryKeys: { currentAccess(): readonly unknown[] };
export interface CurrentAccess {
  inputSafetyBanned?: boolean;
  llmThrottleRole: string;
  [key: string]: unknown;
}
export function fetchCurrentAccess(): Promise<CurrentAccess>;
