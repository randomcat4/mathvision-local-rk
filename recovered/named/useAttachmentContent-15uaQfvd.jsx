import { r as n, j as w, p as E } from "./index-BM3ZINIl.js";
import { u as y } from "./useQuery-DM2qiUYb.js";
import { g as j, a as p, b as x } from "./attachmentsApi-BHgxfYft.js";
const T = (t) => {
  const [r, e] = n.useState(null);
  n.useEffect(() => {
    if (!t) {
      e(null);
      return;
    }
    const o = URL.createObjectURL(t);
    e(o);
    return () => {
      URL.revokeObjectURL(o);
    };
  }, [t]);
  return r;
};
const a = n.createContext(null);
const b = n.createContext(null);
const U = 60000;
const d = (t, r, e) => {
  if (r && e) {
    throw new Error(
      "Attachment content cannot be both shared and admin-scoped.",
    );
  }
  if (r) {
    return j(r, t);
  } else if (e) {
    return p(e.userId, e.chatId, t);
  } else {
    return x(t);
  }
};
const m = (t, r, e) => ({
  queryKey: [
    "attachmentContent",
    r ? `shared:${r}` : e ? `admin:${e.userId}:${e.chatId}` : "private",
    t ?? "unrequested",
  ],
  queryFn: () => {
    if (!t) {
      throw new Error("Attachment id is required.");
    }
    return d(t, r, e);
  },
  retry: false,
  staleTime: Number.POSITIVE_INFINITY,
  gcTime: U,
});
const q = ({ chatId: t, children: r }) => (
  <a.Provider value={t}>{r}</a.Provider>
);
const L = (t, r = true) => {
  const e = n.useContext(a);
  const o = n.useContext(b);
  const {
    data: u,
    error: i,
    fetchStatus: l,
    isPending: f,
    refetch: h,
  } = y({
    ...m(t, e, o),
    enabled: !!t && r,
  });
  const s = u ?? null;
  const A = T(s);
  const C = n.useCallback(async () => {
    if (!t) {
      throw new Error("Attachment id is required.");
    }
    if (s) {
      return s;
    }
    const c = await h();
    if (c.error) {
      throw c.error;
    }
    if (!c.data) {
      throw new Error("Attachment content was not returned.");
    }
    return c.data;
  }, [t, s, h]);
  return n.useMemo(
    () => ({
      blob: s,
      objectUrl: A,
      error: i,
      isLoading: f && l === "fetching",
      load: C,
    }),
    [s, i, l, f, C, A],
  );
};
const N = (t, { cacheContent: r = true } = {}) => {
  const e = E();
  const o = n.useContext(a);
  const u = n.useContext(b);
  return n.useCallback(async () => {
    if (!t) {
      throw new Error("Attachment id is required.");
    }
    if (r) {
      return e.fetchQuery(m(t, o, u));
    } else {
      return d(t, o, u);
    }
  }, [u, t, r, e, o]);
};
export { q as S, L as a, N as b, T as u };
