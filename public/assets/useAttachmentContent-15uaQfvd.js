import { r as n, j as w, p as E } from "./index-BM3ZINIl.js";
import { u as y } from "./useQuery-DM2qiUYb.js";
import { g as j, a as p, b as x } from "./attachmentsApi-BHgxfYft.js";
const T = (t) => {
    const [r, e] = n.useState(null);
    return (
      n.useEffect(() => {
        if (!t) {
          e(null);
          return;
        }
        const o = URL.createObjectURL(t);
        return (
          e(o),
          () => {
            URL.revokeObjectURL(o);
          }
        );
      }, [t]),
      r
    );
  },
  a = n.createContext(null),
  b = n.createContext(null),
  U = 60 * 1e3,
  d = (t, r, e) => {
    if (r && e) throw new Error("Attachment content cannot be both shared and admin-scoped.");
    return r ? j(r, t) : e ? p(e.userId, e.chatId, t) : x(t);
  },
  m = (t, r, e) => ({
    queryKey: [
      "attachmentContent",
      r ? `shared:${r}` : e ? `admin:${e.userId}:${e.chatId}` : "private",
      t ?? "unrequested",
    ],
    queryFn: () => {
      if (!t) throw new Error("Attachment id is required.");
      return d(t, r, e);
    },
    retry: !1,
    staleTime: Number.POSITIVE_INFINITY,
    gcTime: U,
  }),
  q = ({ chatId: t, children: r }) => w.jsx(a.Provider, { value: t, children: r }),
  L = (t, r = !0) => {
    const e = n.useContext(a),
      o = n.useContext(b),
      {
        data: u,
        error: i,
        fetchStatus: l,
        isPending: f,
        refetch: h,
      } = y({ ...m(t, e, o), enabled: !!t && r }),
      s = u ?? null,
      A = T(s),
      C = n.useCallback(async () => {
        if (!t) throw new Error("Attachment id is required.");
        if (s) return s;
        const c = await h();
        if (c.error) throw c.error;
        if (!c.data) throw new Error("Attachment content was not returned.");
        return c.data;
      }, [t, s, h]);
    return n.useMemo(
      () => ({ blob: s, objectUrl: A, error: i, isLoading: f && l === "fetching", load: C }),
      [s, i, l, f, C, A],
    );
  },
  N = (t, { cacheContent: r = !0 } = {}) => {
    const e = E(),
      o = n.useContext(a),
      u = n.useContext(b);
    return n.useCallback(async () => {
      if (!t) throw new Error("Attachment id is required.");
      return r ? e.fetchQuery(m(t, o, u)) : d(t, o, u);
    }, [u, t, r, e, o]);
  };
export { q as S, L as a, N as b, T as u };
