import { j as q, B as pt, r as L } from "./index-BM3ZINIl.js";
import { A as gt, b as ct } from "./AgentTaskProgress-bXMst_Kr.js";
import { A as lt, b as ft } from "./ThinkingElapsedLabel-DKCKD95O.js";
import { A as mt } from "./AssistantMessageMetadata-BCGLTOhc.js";
import { d as kt } from "./assistantStructuredResponseLazy-CCAemx3W.js";
import { M as wt } from "./MessageBubble-DqxHrk03.js";
import { d as ht, s as It } from "./threadMessageListLazy-ghC-RLRq.js";
import { M as St } from "./Markdown-Dh8LhaRc.js";
import "./SupportingArtifactCard-B1XjYGZI.js";
import "./MarkdownHighlights-C-ZhT8z1.js";
import "./TextField-D8vc_sXz.js";
import "./index-Yb6ONXKu.js";
import "./CopyButton-BcOsqrNJ.js";
import "./MChip-DiH8NXBU.js";
import "./katex.min-ADdKj7O-.js";
import "./file-code-corner-DV79SyC0.js";
import "./code-xml-DmfSENe3.js";
import "./Drawer-ByPJ5WV0.js";
import "./useAttachmentContent-15uaQfvd.js";
import "./useQuery-DM2qiUYb.js";
import "./attachmentsApi-BHgxfYft.js";
import "./authFetch-DXjDztUP.js";
import "./Card-Bf0WPnf4.js";
import "./Alert-DnFVD8li.js";
import "./StructuredMarkdown-DAWLLRpf.js";
import "./AlertTitle-B2wnIUF2.js";
import "./triangle-alert-C5eP7BuB.js";
import "./circle-check-B9fquZbm.js";
import "./Divider-BcuihGce.js";
import "./LoadingSection-wWBu2CqJ.js";
import "./streamNdjson-sRiOwtSP.js";
import "./OpenInNewRounded-D-7V5TzF.js";
import "./FormControlLabel-CQvCddOM.js";
import "./chatsApi-Ck-JYICO.js";
import "./chatQueryCache-DOdNJrP_.js";
import "./useInfiniteQuery-CdNTitqC.js";
import "./index-DzMT-bSF.js";
const xt = (e) => ({ display: "flex", flexDirection: "column", gap: e.spacing(1.2) }),
  At = ({
    runId: e,
    startedAt: s,
    message: a,
    responseNumber: c,
    operation: w,
    availableModels: h,
    streamText: f,
    statusLabel: g,
    workflowMode: i = "single",
    chatId: l,
    messageIndex: n,
    tasks: u = [],
    taskStreams: x = [],
    operations: A = [],
    operationOutputs: E = [],
    operationStreams: O = [],
    onContentChange: b,
  }) =>
    q.jsxs(lt, {
      children: [
        q.jsx(mt, { message: a, responseNumber: c, operation: w, availableModels: h }),
        q.jsxs(wt, {
          type: "assistant",
          children: [
            i === "agent" &&
              q.jsxs(pt, {
                sx: xt,
                children: [
                  q.jsx(gt, {
                    chatId: l,
                    messageIndex: n,
                    tasks: u,
                    operations: A,
                    operationOutputs: E,
                    taskStreams: x,
                    onContentChange: b,
                  }),
                  q.jsx(ct, {
                    chatId: l,
                    messageIndex: n,
                    runId: e,
                    operations: A,
                    operationOutputs: E,
                    operationStreams: O,
                    responseNumber: c,
                    startedAt: s,
                    statusLabel: g,
                    tasks: u,
                    onContentChange: b,
                  }),
                ],
              }),
            i !== "agent" &&
              q.jsx(kt, {
                runId: e,
                startedAt: s,
                streamText: f,
                statusLabel: g,
                headingLabel: "Thinking",
                onContentChange: b,
              }),
          ],
        }),
      ],
    }),
  Tt = (e) => e === "completed" || e === "failed" || e === "canceled",
  qt = /^agent-task-(0|[1-9]\d*)$/,
  Q = (e) => {
    const s = qt.exec(e),
      a = s ? Number(s[1]) : Number.NaN;
    if (!Number.isSafeInteger(a)) throw new Error(`Agent task id is malformed: ${e}.`);
    return a;
  },
  v = (e) => [...e].sort((s, a) => Q(s.taskId) - Q(a.taskId)),
  Mt = (e, s, a) => {
    Q(a.taskId);
    const c = e.runId === s ? e.tasks : [],
      w = e.runId === s ? e.operations : [],
      h = e.runId === s ? e.outputs : [],
      f = c.findIndex((i) => i.taskId === a.taskId),
      g = c[f];
    return g && g.revision >= a.revision
      ? e
      : {
          runId: s,
          tasks: v(f === -1 ? [...c, a] : c.map((i, l) => (l === f ? a : i))),
          operations: w,
          outputs: h,
        };
  },
  tt = (e, s, a, c) => {
    if (new Set(s.map((i) => i.taskId)).size !== s.length)
      throw new Error("Agent task reset snapshot contains duplicate task ids.");
    if (new Set(a.map((i) => i.id)).size !== a.length)
      throw new Error("Agent task reset snapshot contains duplicate operation ids.");
    if (new Set(c.map((i) => i.id)).size !== c.length)
      throw new Error("Agent task reset snapshot contains duplicate operation output ids.");
    const g = new Map(a.map((i) => [i.id, i]));
    for (const i of c) {
      const l = g.get(i.id);
      if (!l || l.status !== i.status || l.operation !== i.operation || l.taskId !== i.taskId)
        throw new Error("Agent task reset snapshot output does not match its operation.");
    }
    return { runId: e, tasks: v(s), operations: a, outputs: c };
  },
  Et = (e, s, a, c) => {
    if (e.runId !== s.runId) return s;
    if (!s.runId) throw new Error("Agent reset snapshot is missing its run id.");
    const w = new Map(e.tasks.map((n) => [n.taskId, n])),
      h = new Set(s.tasks.map((n) => n.taskId)),
      f = s.tasks.map((n) => {
        const u = c.get(n.taskId),
          x = w.get(n.taskId);
        return u && u.sequence > a && u.revision > n.revision && x && x.revision >= u.revision
          ? x
          : n;
      });
    for (const n of e.tasks) h.has(n.taskId) || f.push(n);
    const g = new Map(s.operations.map((n) => [n.id, n])),
      i = e.operations.map((n) => {
        const u = g.get(n.id);
        return u ? (g.delete(n.id), u.revision >= n.revision ? u : n) : n;
      });
    i.push(...g.values());
    const l = new Map(e.outputs.map((n) => [n.id, n]));
    for (const n of s.outputs) l.set(n.id, n);
    return tt(s.runId, f, i, [...l.values()]);
  },
  bt = (e, s, a = [], c = []) => {
    var w;
    if ((e == null ? void 0 : e.workflowMode) === "agent") {
      if (s === "generating") return "Preparing the answer...";
      const h = a.filter((u) => u.status === "running");
      if (h.length === 1) return `Working on ${h[0].objective}...`;
      if (h.length > 1) return `Working on ${h.length} tasks...`;
      const f = a.filter((u) => u.status === "planned");
      if (f.length === 1) return `Preparing ${f[0].objective}...`;
      if (f.length > 1) return `Preparing ${f.length} tasks...`;
      const g = c.filter((u) => u.status === "running"),
        i = c.filter((u) => u.status === "planned"),
        l = g.length > 0 ? g : i,
        n = g.length > 0 ? "Running" : "Preparing";
      if (l.length === 1) {
        const u = (w = ft.find((x) => x.value === l[0].operation)) == null ? void 0 : w.label;
        if (!u) throw new Error(`Missing label for Agent operation "${l[0].operation}".`);
        return `${n} ${u}...`;
      }
      return l.length > 1
        ? `${n} ${l.length} operations...`
        : a.length > 0 || c.length > 0
          ? "Preparing the answer..."
          : "Planning tasks...";
    }
    return (e == null ? void 0 : e.status) === "queued"
      ? "Queued..."
      : s === "reasoning"
        ? "Reasoning ..."
        : s === "generating"
          ? "Generating Response"
          : "Waiting for model output...";
  },
  Pt = ({ chatId: e, activeRun: s, refetchRunState: a }) => {
    const [c, w] = L.useState(""),
      [h, f] = L.useState("waiting"),
      [g, i] = L.useState({ runId: null, tasks: [], operations: [], outputs: [] }),
      [l, n] = L.useState({ runId: null, streams: [] }),
      [u, x] = L.useState({ runId: null, streams: [] });
    L.useEffect(() => {
      const k = (s == null ? void 0 : s.id) ?? null,
        G = (s == null ? void 0 : s.workflowMode) ?? "single";
      if (!k || k.startsWith("optimistic-")) {
        (w(""),
          f("waiting"),
          i({ runId: k, tasks: [], operations: [], outputs: [] }),
          n({ runId: k, streams: [] }),
          x({ runId: k, streams: [] }));
        return;
      }
      const z = new AbortController();
      let U = !1,
        j = "",
        $ = null,
        H = 0,
        P = 0,
        _ = 0,
        V = !1;
      const X = new Set(),
        T = new Map(),
        B = new Map(),
        N = new Map(),
        M = new Map(),
        C = new Map(),
        D = new Map(),
        K = () => {
          if ((($ = null), U)) {
            j = "";
            return;
          }
          if (!j) return;
          const t = j;
          ((j = ""), w((r) => `${r}${t}`));
        },
        st = () => {
          $ === null && ($ = window.setTimeout(K, 80));
        },
        W = () => {
          $ !== null && (window.clearTimeout($), ($ = null));
        },
        Y = (t) => {
          if (!M.has(t)) throw new Error("Agent operation stream is missing its task scope.");
          const r = B.get(t),
            d = N.get(t);
          let o = d ?? 0;
          const p = [...((r == null ? void 0 : r.entries()) ?? [])]
            .sort(([m], [I]) => m - I)
            .map(([m, I]) => ((o = Math.max(o, m)), I))
            .join("");
          return {
            operationId: t,
            taskId: M.get(t) ?? null,
            reasoningText: p,
            phase: d !== void 0 ? "generating" : r ? "reasoning" : "waiting",
            latestSequence: o,
          };
        },
        et = (t) => {
          const r = Y(t);
          n((d) => {
            const o = d.runId === k ? d.streams : [],
              p = o.findIndex((m) => m.operationId === t);
            return { runId: k, streams: p === -1 ? [...o, r] : o.map((m, I) => (I === p ? r : m)) };
          });
        },
        Z = (t) => {
          const r = C.get(t),
            d = D.get(t);
          let o = d ?? 0;
          const p = [...((r == null ? void 0 : r.entries()) ?? [])]
            .sort(([m], [I]) => m - I)
            .map(([m, I]) => ((o = Math.max(o, m)), I))
            .join("");
          return {
            taskId: t,
            reasoningText: p,
            phase: d !== void 0 ? "generating" : r ? "reasoning" : "waiting",
            latestSequence: o,
          };
        },
        nt = (t) => {
          const r = Z(t);
          x((d) => {
            const o = d.runId === k ? d.streams : [],
              p = o.findIndex((m) => m.taskId === t);
            return { runId: k, streams: p === -1 ? [...o, r] : o.map((m, I) => (I === p ? r : m)) };
          });
        },
        rt = (t) => {
          if (G !== "agent")
            throw new Error("A scoped Agent operation delta was received for a Chat run.");
          if (!t.operationId) throw new Error("Agent operation delta is missing its operation id.");
          if (t.sequence === void 0)
            throw new Error("Agent operation delta is missing its sequence.");
          if (t.sequence <= P) return;
          if (t.source !== "reasoning" && t.source !== "output")
            throw new Error("Agent operation delta has an unsupported source.");
          if (t.source === "reasoning" && !t.text)
            throw new Error("Agent operation reasoning delta has no text.");
          const r = t.taskId !== void 0,
            d = M.get(t.operationId);
          if (M.has(t.operationId) && r && d !== (t.taskId ?? null))
            throw new Error("Agent operation delta changed its task scope.");
          const o = r ? (t.taskId ?? null) : (d ?? null);
          if ((M.set(t.operationId, o), t.source === "reasoning")) {
            const p = B.get(t.operationId) ?? new Map();
            (p.set(t.sequence, t.text), B.set(t.operationId, p));
          }
          (t.source === "output" &&
            N.set(t.operationId, Math.max(N.get(t.operationId) ?? 0, t.sequence)),
            et(t.operationId));
        },
        ot = (t) => {
          if (G !== "agent")
            throw new Error("A scoped Agent task delta was received for a Chat run.");
          if (!t.taskId) throw new Error("Agent task delta is missing its task id.");
          if ((Q(t.taskId), t.sequence === void 0))
            throw new Error("Agent task delta is missing its sequence.");
          if (!(t.sequence <= P)) {
            if (t.source !== "reasoning" && t.source !== "output")
              throw new Error("Agent task delta has an unsupported source.");
            if (t.source === "reasoning" && !t.text)
              throw new Error("Agent task reasoning delta has no text.");
            if (t.source === "reasoning") {
              const r = C.get(t.taskId) ?? new Map();
              (r.set(t.sequence, t.text), C.set(t.taskId, r));
            }
            (t.source === "output" && D.set(t.taskId, Math.max(D.get(t.taskId) ?? 0, t.sequence)),
              nt(t.taskId));
          }
        },
        it = (t) => {
          for (const [r, d] of B) {
            for (const o of d.keys()) o <= t && d.delete(o);
            d.size === 0 && B.delete(r);
          }
          for (const [r, d] of N) d <= t && N.delete(r);
          for (const r of [...M.keys()]) !B.has(r) && !N.has(r) && M.delete(r);
          n({ runId: k, streams: [...M.keys()].map(Y) });
        },
        at = (t) => {
          for (const [d, o] of C) {
            for (const p of o.keys()) p <= t && o.delete(p);
            o.size === 0 && C.delete(d);
          }
          for (const [d, o] of D) o <= t && D.delete(d);
          const r = new Set([...C.keys(), ...D.keys()]);
          x({ runId: k, streams: [...r].map(Z) });
        },
        R = (t) => {
          if (U) return !1;
          if (t.runId && t.runId !== k) return !0;
          const r = t.type === "delta" && t.operationId !== void 0 && t.operationId !== null,
            d = t.type === "delta" && !r && t.taskId !== void 0 && t.taskId !== null;
          if (t.sequence !== void 0) {
            if (
              X.has(t.sequence) ||
              (t.sequence < H &&
                t.type !== "task" &&
                !r &&
                !d &&
                !(t.type === "reset" && G === "agent"))
            )
              return !0;
            ((H = Math.max(H, t.sequence)), X.add(t.sequence));
          }
          if (t.type === "delta" && t.taskId !== void 0 && !r && !d)
            throw new Error("Agent operation delta task scope is missing an operation id.");
          if (r) return (rt(t), !0);
          if (d) return (ot(t), !0);
          if (t.type === "task") {
            if (t.sequence === void 0)
              throw new Error("Agent task stream event is missing its sequence.");
            if (t.sequence < P) return !0;
            const o = t.task;
            if (!o) throw new Error("Agent task stream event is missing its payload.");
            const p = T.get(o.taskId);
            return (
              (p && p.revision >= o.revision) ||
                (T.set(o.taskId, { sequence: t.sequence, revision: o.revision }),
                i((m) => Mt(m, k, o))),
              !0
            );
          }
          if (t.type === "delta" && t.source === "reasoning" && t.text)
            return (
              (_ = Math.max(_, t.sequence ?? 0)),
              (t.sequence !== void 0 && t.sequence < P) ||
                (V || f("reasoning"), (j += t.text), st()),
              !0
            );
          if (t.type === "delta" && t.source === "output")
            return ((_ = Math.max(_, t.sequence ?? 0)), (V = !0), W(), K(), f("generating"), !0);
          if (t.type === "reset") {
            let o = null;
            const p = t.sequence ?? 0;
            if (G === "agent") {
              if (t.sequence === void 0)
                throw new Error("Agent reset stream event is missing its sequence.");
              if (!t.tasks || !t.operations || !t.outputs)
                throw new Error(
                  "Agent reset stream event is missing its task, operation, or output snapshot.",
                );
              if (t.sequence < P) return !0;
              ((o = tt(k, t.tasks, t.operations, t.outputs)), it(p), at(p));
            }
            if (
              (p >= _ && (W(), (j = ""), (V = !1), w(""), f("waiting")), (P = Math.max(P, p)), o)
            ) {
              const m = new Map(T),
                I = new Map([...m].filter(([, S]) => S.sequence > p));
              (i((S) => Et(S, o, p, I)), T.clear());
              for (const S of o.tasks) {
                const y = I.get(S.taskId);
                if (y && y.revision > S.revision) {
                  T.set(S.taskId, y);
                  continue;
                }
                T.set(S.taskId, { sequence: p, revision: S.revision });
              }
              for (const [S, y] of I) T.has(S) || T.set(S, y);
              for (const [S, y] of m) T.has(S) || T.set(S, y);
            }
            return !0;
          }
          return t.type === "idle" ? (a(), !1) : Tt(t.type) ? (W(), K(), a(), !1) : !0;
        };
      (w(""),
        f("waiting"),
        i({ runId: k, tasks: [], operations: [], outputs: [] }),
        n({ runId: k, streams: [] }),
        x({ runId: k, streams: [] }));
      const dt = async () => {
          try {
            for await (const t of It(e, z.signal)) if (!R(t)) break;
          } catch (t) {
            z.signal.aborted || console.warn("Chat run stream failed; polling will continue.", t);
          } finally {
            (W(), K());
          }
        },
        ut = window.setInterval(() => {
          ht(e, H)
            .then((t) => {
              for (const r of t)
                if (!R(r)) {
                  z.abort();
                  break;
                }
            })
            .catch((t) => {
              z.signal.aborted || console.warn("Chat run stream snapshot failed.", t);
            });
        }, 700);
      return (
        dt(),
        () => {
          ((U = !0), z.abort(), window.clearInterval(ut), W());
        }
      );
    }, [s == null ? void 0 : s.id, s == null ? void 0 : s.workflowMode, e, a]);
    const A = (s == null ? void 0 : s.id) ?? null,
      E = g.runId === A ? g.tasks : [],
      O = g.runId === A ? g.operations : [],
      b = g.runId === A ? g.outputs : [],
      J = l.runId === A ? l.streams : [],
      F = u.runId === A ? u.streams : [];
    return {
      pendingReasoningText: c,
      pendingAssistantPhase: h,
      pendingTasks: E,
      pendingOperations: O,
      pendingOutputs: b,
      pendingTaskStreams: F,
      pendingOperationStreams: J,
      pendingStatusLabel: bt(s, h, E, O),
    };
  },
  yt = ({
    chatId: e,
    activeRun: s,
    refetchRunState: a,
    startedAt: c,
    message: w,
    messageIndex: h,
    responseNumber: f,
    operation: g,
    availableModels: i,
    onContentChange: l,
  }) => {
    const {
        pendingReasoningText: n,
        pendingStatusLabel: u,
        pendingTasks: x,
        pendingTaskStreams: A,
        pendingOperations: E,
        pendingOutputs: O,
        pendingOperationStreams: b,
      } = Pt({ chatId: e, activeRun: s, refetchRunState: a }),
      J = (s == null ? void 0 : s.id) ?? `${e}-${c}`,
      F = (s == null ? void 0 : s.workflowMode) === "agent";
    return q.jsx(At, {
      runId: J,
      startedAt: c,
      message: F ? {} : w,
      responseNumber: f,
      operation: F ? void 0 : g,
      availableModels: i,
      streamText: n,
      statusLabel: u,
      workflowMode: (s == null ? void 0 : s.workflowMode) ?? "single",
      chatId: e,
      messageIndex: h,
      tasks: x,
      taskStreams: A,
      operations: E,
      operationOutputs: O,
      operationStreams: b,
      onContentChange: l,
    });
  },
  ls = ({ markdownLatexMacros: e, ...s }) =>
    q.jsx(St, { macros: e, children: q.jsx(yt, { ...s }) });
export { ls as ThreadPendingAssistantMessage };
