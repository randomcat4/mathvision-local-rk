import { e as r, c as o, a, l as s, g as p, b as i } from "./threadMessageListLazy-ghC-RLRq.js";
import { m as h } from "./index-BM3ZINIl.jsx";
import "./useQuery-DM2qiUYb.js";
import "./streamNdjson-sRiOwtSP.js";
import "./authFetch-DXjDztUP.js";
import "./chatsApi-Ck-JYICO.js";
import "./chatQueryCache-DOdNJrP_.js";
import "./useInfiniteQuery-CdNTitqC.js";
const R = (t) => {
    (h(), t.prefetchInfiniteQuery(r(null)), t.prefetchQuery(o()), t.prefetchQuery(a()));
  },
  g = (t, e) => {
    (s(),
      t
        .prefetchQuery(p(t, e, { markRead: !0 }))
        .then(() => t.prefetchQuery(i(t, e, { markReadOnCompletedRun: !0 }))));
  };
export { g as startChatDetailRoutePrefetch, R as startChatWorkspaceRoutePrefetch };
