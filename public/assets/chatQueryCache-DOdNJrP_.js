import { a as c, n as u, s as i, t as p, i as l } from "./index-BM3ZINIl.js";
import { g as h, m as f, C as y, a as C } from "./chatsApi-Ck-JYICO.js";
const S = () => document.visibilityState === "visible" && document.hasFocus(),
  d = (a, r) => a.getQueryData(c.chat(r)) ?? null,
  k = (a, r) => {
    const t = d(a, r);
    if (!t) throw new Error(`Chat '${r}' must be loaded before updating its messages.`);
    return t.messageRevision;
  },
  o = (a, r = []) => {
    u({ chatId: a.id, branchSpaceIds: [a.branchSpaceId, ...r] });
  },
  m = async (a, r, t = {}) => {
    const e = await h(r, t.signal);
    if (t.markRead && e.hasUnread) {
      const n = { ...e, hasUnread: !1 };
      try {
        await f(r);
      } catch (s) {
        return (
          i(a, e),
          o(e),
          console.warn("Could not mark chat as read.", s),
          p.error("Chat loaded, but we couldn’t mark it as read.", {
            key: `chat-mark-read-${r}`,
            preventDuplicate: !0,
          }),
          e
        );
      }
      return (i(a, n), a.invalidateQueries({ queryKey: c.explorer() }), o(n), n);
    }
    return (i(a, e), e);
  },
  E = async (a, r, t) => {
    if (l(t))
      try {
        const e = await m(a, r);
        o(e);
      } catch (e) {
        console.warn("Could not refresh the chat after a conflicting update.", e);
      }
  },
  b = (a, r) => {
    const t = c.chat(r);
    a.getQueryData(t) ||
      a.prefetchQuery({
        queryKey: t,
        queryFn: ({ signal: e }) => h(r, e),
        retry: !1,
        staleTime: C,
        gcTime: y,
      });
  },
  K = (a, r) => {
    var n;
    const t = d(a, r);
    if (t) return t;
    const e = a.getQueryData(c.explorerSnapshot());
    return (
      (e == null ? void 0 : e.chats.find((s) => s.id === r)) ??
      (e == null ? void 0 : e.hierarchyGraphs.flatMap((s) => s.nodes).find((s) => s.id === r)) ??
      ((n = a.getQueryData(c.chats())) == null ? void 0 : n.find((s) => s.id === r)) ??
      null
    );
  },
  g = (a) => a.invalidateQueries({ queryKey: c.explorer() }),
  W = (a) => a.cancelQueries({ queryKey: c.explorer() }),
  _ = (a, r = {}) => {
    const t = new Set(r.excludeBranchSpaceIds ?? []),
      e = (n) => {
        const s = n.queryKey[2];
        return typeof s != "string" || !t.has(s);
      };
    return Promise.all([
      g(a),
      a.invalidateQueries({ queryKey: c.chats() }),
      a.invalidateQueries({ queryKey: c.branchSpaces() }),
      a.invalidateQueries({ queryKey: c.branchSpaceDetails(), predicate: e }),
      a.invalidateQueries({ queryKey: c.branchSpaceGraphs(), predicate: e }),
    ]);
  };
export { g as a, _ as b, W as c, d, k as e, m as f, K as g, S as i, o as n, b as p, E as r };
