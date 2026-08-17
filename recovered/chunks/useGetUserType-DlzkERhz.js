import { a0 as t, a1 as a, w as u } from "./index-BM3ZINIl.js";
import { u as c } from "./useQuery-DM2qiUYb.js";
const n = () => {
    const e = c({
      queryKey: u.currentAccess(),
      queryFn: a,
      staleTime: t,
      refetchInterval: (s) => {
        var r;
        return (r = s.state.data) != null && r.inputSafetyBanned ? 3e4 : !1;
      },
    });
    if (!e.data) throw new Error("Current user access was unavailable.");
    return e.data;
  },
  y = () => n().llmThrottleRole;
export { y as a, n as u };
