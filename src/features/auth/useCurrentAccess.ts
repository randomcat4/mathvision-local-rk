import {
  CURRENT_ACCESS_STALE_TIME,
  currentAccessQueryKeys,
  fetchCurrentAccess,
  type CurrentAccess,
} from "../../runtime/currentAccessRuntime.js";
import { useBundledQuery } from "../../runtime/queryRuntime.js";

export function useCurrentAccess(): CurrentAccess {
  const query = useBundledQuery({
    queryKey: currentAccessQueryKeys.currentAccess(),
    queryFn: fetchCurrentAccess,
    staleTime: CURRENT_ACCESS_STALE_TIME,
    refetchInterval: (currentQuery) =>
      currentQuery.state.data?.inputSafetyBanned ? 30_000 : false,
  });
  if (!query.data) throw new Error("Current user access was unavailable.");
  return query.data;
}

export function useLlmThrottleRole(): string {
  return useCurrentAccess().llmThrottleRole;
}
