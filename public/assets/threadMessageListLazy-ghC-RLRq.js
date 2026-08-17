const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/DeferredThreadMessageList-BRB1t-55.js",
      "assets/index-BM3ZINIl.js",
      "assets/index-DCmpUGyQ.css",
      "assets/Markdown-Dh8LhaRc.js",
      "assets/katex.min-ADdKj7O-.js",
      "assets/katex-CfVKi3_s.css",
      "assets/MarkdownHighlights-C-ZhT8z1.js",
      "assets/TextField-D8vc_sXz.js",
      "assets/index-Yb6ONXKu.js",
      "assets/CopyButton-BcOsqrNJ.js",
      "assets/MChip-DiH8NXBU.js",
      "assets/index-DzMT-bSF.js",
      "assets/maximize-2-B07z4fzS.js",
      "assets/ChatInteractionOverrides-dyfOoEnd.js",
      "assets/UserMessage-DN7iPijg.js",
      "assets/assistantStructuredResponseLazy-CCAemx3W.js",
      "assets/useQuery-DM2qiUYb.js",
      "assets/triangle-alert-C5eP7BuB.js",
      "assets/circle-check-B9fquZbm.js",
      "assets/Divider-BcuihGce.js",
      "assets/LoadingSection-wWBu2CqJ.js",
      "assets/ThinkingElapsedLabel-DKCKD95O.js",
      "assets/streamNdjson-sRiOwtSP.js",
      "assets/MessageBubble-DqxHrk03.js",
      "assets/OpenInNewRounded-D-7V5TzF.js",
      "assets/FormControlLabel-CQvCddOM.js",
      "assets/MessageAttachments-nUg1LIry.js",
      "assets/useAttachmentContent-15uaQfvd.js",
      "assets/attachmentsApi-BHgxfYft.js",
      "assets/authFetch-DXjDztUP.js",
      "assets/AttachmentFileName-BwwbwxPg.js",
      "assets/latexAttachmentPreviewLazy-DKgWJirC.js",
      "assets/latexAttachment-C8umpCPo.js",
      "assets/Card-Bf0WPnf4.js",
      "assets/history-7HBMn_Gr.js",
      "assets/AssistantMessageMetadata-BCGLTOhc.js",
      "assets/chatsApi-Ck-JYICO.js",
      "assets/WriteupDisplayControls-E0ZIJhIu.js",
      "assets/PdfCanvasViewerControls-CKiN42mP.js",
      "assets/chevron-left-BwEFN4zp.js",
      "assets/zoom-in-uCZ29dqq.js",
      "assets/Alert-DnFVD8li.js",
      "assets/circle-check-big-D9HEGJKD.js",
      "assets/useMutation-C1SgG9wr.js",
      "assets/NextStepsResponse-NcFjw3w7.js",
      "assets/save-Bre0AB4-.js",
      "assets/send-CDdCro4v.js",
      "assets/play-3zl_nde-.js",
      "assets/FormGroup-BsLWbxpH.js",
      "assets/QuotedSelection-JUU54BvY.js",
      "assets/quote-DYxVpGUS.js",
      "assets/minimize-2-DiBwEVni.js",
      "assets/index-D0EP5Hzg.js",
      "assets/ListItemIcon-CaLBil7Q.js",
      "assets/ListItemText-CBxudZz_.js",
      "assets/useIsMobile-SdtLFChL.js",
    ]),
) => i.map((i) => d[i]);
import { u as d } from "./useQuery-DM2qiUYb.js";
import { s as K, q as m } from "./streamNdjson-sRiOwtSP.js";
import {
  ax as u,
  aj as i,
  ak as k,
  a as l,
  br as U,
  bs as B,
  bt as A,
  p as x,
  r as R,
  $ as I,
} from "./index-BM3ZINIl.js";
import { g as M } from "./authFetch-DXjDztUP.js";
import {
  c as N,
  t as q,
  d as j,
  e as T,
  f as z,
  h as D,
  i as H,
  a as y,
  C as G,
  j as g,
  k as V,
  l as Y,
  n as X,
} from "./chatsApi-Ck-JYICO.js";
import { f as F, i as E, g as P, a as Z, n as J } from "./chatQueryCache-DOdNJrP_.js";
import { u as ee } from "./useInfiniteQuery-CdNTitqC.js";
const te = (e, t) => u.get(i, `chats/${e}/run-state`, void 0, t).then(N);
async function* Ae(e, t) {
  const r = await fetch(`https://app.mathvision.ai/${i}/chats/${e}/run-stream`, {
    method: "GET",
    headers: { Authorization: await M(), Accept: "application/x-ndjson" },
    signal: t,
  });
  if (!r.ok) throw k(r);
  for await (const o of K(r, "No response body was returned from the chat run stream.")) yield T(o);
}
const Pe = async (e, t) => {
    const r = await fetch(
      `https://app.mathvision.ai/${i}/chats/${e}/run-stream-snapshot?after_sequence=${t}`,
      { method: "GET", headers: { Authorization: await M(), Accept: "application/json" } },
    );
    if (!r.ok) throw k(r);
    return (await r.json()).events.map(T);
  },
  ke = (e, t) => u.post(i, `chats/${e}/cancel`, { run_id: t }).then(q),
  xe = (e, t, r) => u.post(i, `chats/${e}/runs/${t}/steer`, j(r)).then(q),
  ae = (e) => {
    const t = new URLSearchParams({ query: e.query });
    (e.limit !== void 0 && t.set("limit", String(e.limit)), e.all && t.set("all", "true"));
    for (const r of e.operations ?? []) t.append("operations", r);
    return t;
  },
  Me = (e) => u.get(i, "search", ae(e)).then(z),
  re = () => u.get(i, "chats/execution-modes").then((e) => e.map(D)),
  ne = () => u.get(i, "chats/workflow-modes").then((e) => e.map(H)),
  se = (e, t, r = {}) => {
    const o = r.markRead ?? !1;
    return m({
      queryKey: t ? l.chat(t) : l.chat("__unrequested__"),
      queryFn: async ({ signal: s }) => {
        if (!t) throw new Error("Requested chat id is required.");
        return F(e, t, { markRead: o && E(), signal: s });
      },
      enabled: !!t && (r.enabled ?? !0),
      retry: !1,
      gcTime: G,
      staleTime: (s) => {
        var a;
        return o && (a = s.state.data) != null && a.hasUnread ? 0 : y;
      },
      refetchOnMount: (s) => {
        var a;
        return o && (a = s.state.data) != null && a.hasUnread ? "always" : !0;
      },
      placeholderData: () => (t ? e.getQueryData(l.chat(t)) : void 0),
    });
  },
  qe = (e, t = {}) => {
    var h;
    const r = x(),
      o = t.markRead ?? !1,
      s = d(se(r, e, t)),
      a = R.useRef(s.isFetching);
    a.current = s.isFetching;
    const n = s.refetch;
    return (
      R.useEffect(() => {
        var f;
        if (!e || !o || !((f = s.data) != null && f.hasUnread)) return;
        let p = !1;
        const c = () => {
          !E() ||
            a.current ||
            p ||
            ((p = !0),
            n().finally(() => {
              p = !1;
            }));
        };
        return (
          document.addEventListener("visibilitychange", c),
          window.addEventListener("focus", c),
          c(),
          () => {
            (document.removeEventListener("visibilitychange", c),
              window.removeEventListener("focus", c));
          }
        );
      }, [e, (h = s.data) == null ? void 0 : h.hasUnread, n, o]),
      s
    );
  },
  oe = (e, t, r = {}) => {
    const o = r.markReadOnCompletedRun ?? !1;
    return m({
      queryKey: t ? l.chatRunState(t) : l.chatRunState("__unrequested__"),
      queryFn: async ({ signal: s }) => {
        var v, S;
        if (!t) throw new Error("Requested chat id is required.");
        const a = P(e, t),
          n = await te(t, s),
          h =
            n.activeRun !== null &&
            ((v = a == null ? void 0 : a.activeRun) == null ? void 0 : v.id) !== n.activeRun.id,
          p =
            n.activeProChatCallStartedAt !== null &&
            (a == null ? void 0 : a.activeProChatCallStartedAt) !== n.activeProChatCallStartedAt,
          c = (a == null ? void 0 : a.latestRun) ?? null,
          f =
            n.latestRun !== null &&
            ((c == null ? void 0 : c.id) !== n.latestRun.id ||
              c.status !== n.latestRun.status ||
              c.lastUpdated !== n.latestRun.lastUpdated),
          W =
            n.activeRun === null &&
            n.latestRun !== null &&
            ["completed", "failed", "canceled"].includes(n.latestRun.status) &&
            f,
          L = !!(a != null && a.activeRun) && n.activeRun === null,
          Q =
            (a == null ? void 0 : a.activeProChatCallStartedAt) !== null &&
            (a == null ? void 0 : a.activeProChatCallStartedAt) !== void 0 &&
            n.activeProChatCallStartedAt === null;
        if (h || p || L || Q || W) {
          h && A(e, t, n);
          const _ = e.getQueryCache().find({ queryKey: l.chat(t), exact: !0 }),
            $ = ((_ == null ? void 0 : _.getObserversCount()) ?? 0) > 0,
            w = ((S = n.latestRun) == null ? void 0 : S.status) === "completed" && E() && (o || $),
            C = await F(e, t, { markRead: w });
          return (
            w || (Z(e), J(C)),
            {
              activeRun: C.activeRun ?? null,
              latestRun: C.latestRun ?? null,
              activeProChatCallStartedAt: C.activeProChatCallStartedAt ?? null,
            }
          );
        }
        return (A(e, t, n), n);
      },
      enabled: !!t && (r.enabled ?? !0),
      retry: !1,
      refetchOnWindowFocus: "always",
      refetchOnReconnect: "always",
      placeholderData: () => {
        if (!t) return;
        const s = P(e, t);
        if (s)
          return {
            activeRun: s.activeRun ?? null,
            latestRun: s.latestRun ?? null,
            activeProChatCallStartedAt: s.activeProChatCallStartedAt ?? null,
          };
      },
      refetchInterval: (s) => {
        var a, n;
        return ((a = s.state.data) != null && a.activeRun) ||
          ((n = s.state.data) != null && n.activeProChatCallStartedAt)
          ? U
          : r.pollWhenIdle === !1
            ? !1
            : B;
      },
    });
  },
  Te = (e, t = {}) => {
    const r = x();
    return d(oe(r, e, t));
  },
  ce = (e, t) => ({ items: e.items.map(t), nextCursor: e.next_cursor, totalCount: e.total_count }),
  le = ({ cursor: e, limit: t }) => ({ limit: t, ...(e ? { cursor: e } : {}) }),
  b = (e) => ({
    folder: X(e.folder),
    childFolderCount: e.child_folder_count,
    chatCount: e.chat_count,
    hierarchyCount: e.hierarchy_count,
  }),
  ie = (e) => ({
    branchSpace: Y(e.branch_space),
    rootChat: g(e.root_chat),
    branchCount: e.branch_count,
    failedCount: e.failed_count,
    runningCount: e.running_count,
    unreadCount: e.unread_count,
    lastEditedAt: e.last_edited_at,
  }),
  ue = async (e) => {
    const t = await u.get(i, "workspace/explorer/snapshot", void 0, e);
    return {
      folders: t.folders.map(b),
      chats: t.chats.map(g),
      hierarchies: t.hierarchies.map(ie),
      hierarchyGraphs: t.hierarchy_graphs.map(V),
    };
  },
  de = async ({ folderId: e, signal: t, ...r }) => {
    const o = await u.get(i, "workspace/explorer/chats", { ...le(r) }, t);
    return ce(o, g);
  },
  he = async (e, t) =>
    (await u.get(i, `workspace/explorer/folders/${encodeURIComponent(e)}/path`, void 0, t)).map(b),
  pe = 40,
  fe = (e) => e.nextCursor ?? void 0,
  Fe = (e = {}) =>
    d({
      queryKey: l.explorerSnapshot(),
      queryFn: ({ signal: t }) => ue(t),
      enabled: e.enabled ?? !0,
      staleTime: y,
    }),
  be = (e, t = {}) => ee({ ...Ce(e), enabled: t.enabled ?? !0 }),
  Ce = (e) => ({
    queryKey: l.explorerChats(e),
    queryFn: ({ pageParam: t, signal: r }) => de({ folderId: e, cursor: t, limit: pe, signal: r }),
    initialPageParam: null,
    getNextPageParam: fe,
    staleTime: y,
  }),
  Oe = (e) =>
    d({
      queryKey: l.explorerFolderPath(e),
      queryFn: ({ signal: t }) => {
        if (!e) throw new Error("Folder id is required to load its explorer path.");
        return he(e, t);
      },
      enabled: !!e,
      staleTime: y,
    }),
  Re = () => m({ queryKey: l.executionModes(), queryFn: re, staleTime: 300 * 1e3 }),
  We = () => {
    const e = d(Re());
    return { executionModes: e.data ?? [], isLoading: e.isPending, error: e.error };
  },
  me = () => m({ queryKey: l.workflowModes(), queryFn: ne, staleTime: 300 * 1e3 }),
  Le = () => {
    const e = d(me());
    return { workflowModes: e.error ? [] : (e.data ?? []), isLoading: e.isPending, error: e.error };
  },
  O = () =>
    I(
      () => import("./DeferredThreadMessageList-BRB1t-55.js"),
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
        48, 49, 50, 51, 52, 53, 54, 55,
      ]),
    ),
  Qe = R.lazy(O),
  $e = R.lazy(() => O().then((e) => ({ default: e.ThreadHistoryControls })));
export {
  Qe as L,
  me as a,
  oe as b,
  Re as c,
  Pe as d,
  Ce as e,
  We as f,
  se as g,
  qe as h,
  Oe as i,
  be as j,
  $e as k,
  O as l,
  te as m,
  ke as n,
  xe as o,
  Le as p,
  Me as q,
  Fe as r,
  Ae as s,
  Te as u,
};
