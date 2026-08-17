import { j as q, B as _Component4, r as L } from "./index-BM3ZINIl.js";
import { A as _Component2, b as _Component3 } from "./AgentTaskProgress-bXMst_Kr.js";
import { A as _Component7, b as ft } from "./ThinkingElapsedLabel-DKCKD95O.js";
import { A as _Component } from "./AssistantMessageMetadata-BCGLTOhc.js";
import { d as _Component5 } from "./assistantStructuredResponseLazy-CCAemx3W.js";
import { M as _Component6 } from "./MessageBubble-DqxHrk03.js";
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
const xt = e => ({
  display: "flex",
  flexDirection: "column",
  gap: e.spacing(1.2)
});
const At = ({
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
  onContentChange: b
}) => <_Component7><_Component message={a} responseNumber={c} operation={w} availableModels={h} /><_Component6 type="assistant">{i === "agent" && <_Component4 sx={xt}><_Component2 chatId={l} messageIndex={n} tasks={u} operations={A} operationOutputs={E} taskStreams={x} onContentChange={b} /><_Component3 chatId={l} messageIndex={n} runId={e} operations={A} operationOutputs={E} operationStreams={O} responseNumber={c} startedAt={s} statusLabel={g} tasks={u} onContentChange={b} /></_Component4>}{i !== "agent" && <_Component5 runId={e} startedAt={s} streamText={f} statusLabel={g} headingLabel="Thinking" onContentChange={b} />}</_Component6></_Component7>;
const Tt = e => e === "completed" || e === "failed" || e === "canceled";
const qt = /^agent-task-(0|[1-9]\d*)$/;
const Q = e => {
  const s = qt.exec(e);
  const a = s ? Number(s[1]) : Number.NaN;
  if (!Number.isSafeInteger(a)) {
    throw new Error(`Agent task id is malformed: ${e}.`);
  }
  return a;
};
const v = e => [...e].sort((s, a) => Q(s.taskId) - Q(a.taskId));
const Mt = (e, s, a) => {
  Q(a.taskId);
  const c = e.runId === s ? e.tasks : [];
  const w = e.runId === s ? e.operations : [];
  const h = e.runId === s ? e.outputs : [];
  const f = c.findIndex(i => i.taskId === a.taskId);
  const g = c[f];
  if (g && g.revision >= a.revision) {
    return e;
  } else {
    return {
      runId: s,
      tasks: v(f === -1 ? [...c, a] : c.map((i, l) => l === f ? a : i)),
      operations: w,
      outputs: h
    };
  }
};
const tt = (e, s, a, c) => {
  if (new Set(s.map(i => i.taskId)).size !== s.length) {
    throw new Error("Agent task reset snapshot contains duplicate task ids.");
  }
  if (new Set(a.map(i => i.id)).size !== a.length) {
    throw new Error("Agent task reset snapshot contains duplicate operation ids.");
  }
  if (new Set(c.map(i => i.id)).size !== c.length) {
    throw new Error("Agent task reset snapshot contains duplicate operation output ids.");
  }
  const g = new Map(a.map(i => [i.id, i]));
  for (const i of c) {
    const l = g.get(i.id);
    if (!l || l.status !== i.status || l.operation !== i.operation || l.taskId !== i.taskId) {
      throw new Error("Agent task reset snapshot output does not match its operation.");
    }
  }
  return {
    runId: e,
    tasks: v(s),
    operations: a,
    outputs: c
  };
};
const Et = (e, s, a, c) => {
  if (e.runId !== s.runId) {
    return s;
  }
  if (!s.runId) {
    throw new Error("Agent reset snapshot is missing its run id.");
  }
  const w = new Map(e.tasks.map(n => [n.taskId, n]));
  const h = new Set(s.tasks.map(n => n.taskId));
  const f = s.tasks.map(n => {
    const u = c.get(n.taskId);
    const x = w.get(n.taskId);
    if (u && u.sequence > a && u.revision > n.revision && x && x.revision >= u.revision) {
      return x;
    } else {
      return n;
    }
  });
  for (const n of e.tasks) {
    if (!h.has(n.taskId)) {
      f.push(n);
    }
  }
  const g = new Map(s.operations.map(n => [n.id, n]));
  const i = e.operations.map(n => {
    const u = g.get(n.id);
    if (u) {
      g.delete(n.id);
      if (u.revision >= n.revision) {
        return u;
      } else {
        return n;
      }
    } else {
      return n;
    }
  });
  i.push(...g.values());
  const l = new Map(e.outputs.map(n => [n.id, n]));
  for (const n of s.outputs) {
    l.set(n.id, n);
  }
  return tt(s.runId, f, i, [...l.values()]);
};
const bt = (e, s, a = [], c = []) => {
  var w;
  if ((e == null ? undefined : e.workflowMode) === "agent") {
    if (s === "generating") {
      return "Preparing the answer...";
    }
    const h = a.filter(u => u.status === "running");
    if (h.length === 1) {
      return `Working on ${h[0].objective}...`;
    }
    if (h.length > 1) {
      return `Working on ${h.length} tasks...`;
    }
    const f = a.filter(u => u.status === "planned");
    if (f.length === 1) {
      return `Preparing ${f[0].objective}...`;
    }
    if (f.length > 1) {
      return `Preparing ${f.length} tasks...`;
    }
    const g = c.filter(u => u.status === "running");
    const i = c.filter(u => u.status === "planned");
    const l = g.length > 0 ? g : i;
    const n = g.length > 0 ? "Running" : "Preparing";
    if (l.length === 1) {
      const u = (w = ft.find(x => x.value === l[0].operation)) == null ? undefined : w.label;
      if (!u) {
        throw new Error(`Missing label for Agent operation "${l[0].operation}".`);
      }
      return `${n} ${u}...`;
    }
    if (l.length > 1) {
      return `${n} ${l.length} operations...`;
    } else if (a.length > 0 || c.length > 0) {
      return "Preparing the answer...";
    } else {
      return "Planning tasks...";
    }
  }
  if ((e == null ? undefined : e.status) === "queued") {
    return "Queued...";
  } else if (s === "reasoning") {
    return "Reasoning ...";
  } else if (s === "generating") {
    return "Generating Response";
  } else {
    return "Waiting for model output...";
  }
};
const Pt = ({
  chatId: e,
  activeRun: s,
  refetchRunState: a
}) => {
  const [c, w] = L.useState("");
  const [h, f] = L.useState("waiting");
  const [g, i] = L.useState({
    runId: null,
    tasks: [],
    operations: [],
    outputs: []
  });
  const [l, n] = L.useState({
    runId: null,
    streams: []
  });
  const [u, x] = L.useState({
    runId: null,
    streams: []
  });
  L.useEffect(() => {
    const k = (s == null ? undefined : s.id) ?? null;
    const G = (s == null ? undefined : s.workflowMode) ?? "single";
    if (!k || k.startsWith("optimistic-")) {
      w("");
      f("waiting");
      i({
        runId: k,
        tasks: [],
        operations: [],
        outputs: []
      });
      n({
        runId: k,
        streams: []
      });
      x({
        runId: k,
        streams: []
      });
      return;
    }
    const z = new AbortController();
    let U = false;
    let j = "";
    let $ = null;
    let H = 0;
    let P = 0;
    let _ = 0;
    let V = false;
    const X = new Set();
    const T = new Map();
    const B = new Map();
    const N = new Map();
    const M = new Map();
    const C = new Map();
    const D = new Map();
    const K = () => {
      $ = null;
      if (U) {
        j = "";
        return;
      }
      if (!j) {
        return;
      }
      const t = j;
      j = "";
      w(r => `${r}${t}`);
    };
    const st = () => {
      if ($ === null) {
        $ = window.setTimeout(K, 80);
      }
    };
    const W = () => {
      if ($ !== null) {
        window.clearTimeout($);
        $ = null;
      }
    };
    const Y = t => {
      if (!M.has(t)) {
        throw new Error("Agent operation stream is missing its task scope.");
      }
      const r = B.get(t);
      const d = N.get(t);
      let o = d ?? 0;
      const p = [...((r == null ? undefined : r.entries()) ?? [])].sort(([m], [I]) => m - I).map(([m, I]) => {
        o = Math.max(o, m);
        return I;
      }).join("");
      return {
        operationId: t,
        taskId: M.get(t) ?? null,
        reasoningText: p,
        phase: d !== undefined ? "generating" : r ? "reasoning" : "waiting",
        latestSequence: o
      };
    };
    const et = t => {
      const r = Y(t);
      n(d => {
        const o = d.runId === k ? d.streams : [];
        const p = o.findIndex(m => m.operationId === t);
        return {
          runId: k,
          streams: p === -1 ? [...o, r] : o.map((m, I) => I === p ? r : m)
        };
      });
    };
    const Z = t => {
      const r = C.get(t);
      const d = D.get(t);
      let o = d ?? 0;
      const p = [...((r == null ? undefined : r.entries()) ?? [])].sort(([m], [I]) => m - I).map(([m, I]) => {
        o = Math.max(o, m);
        return I;
      }).join("");
      return {
        taskId: t,
        reasoningText: p,
        phase: d !== undefined ? "generating" : r ? "reasoning" : "waiting",
        latestSequence: o
      };
    };
    const nt = t => {
      const r = Z(t);
      x(d => {
        const o = d.runId === k ? d.streams : [];
        const p = o.findIndex(m => m.taskId === t);
        return {
          runId: k,
          streams: p === -1 ? [...o, r] : o.map((m, I) => I === p ? r : m)
        };
      });
    };
    const rt = t => {
      if (G !== "agent") {
        throw new Error("A scoped Agent operation delta was received for a Chat run.");
      }
      if (!t.operationId) {
        throw new Error("Agent operation delta is missing its operation id.");
      }
      if (t.sequence === undefined) {
        throw new Error("Agent operation delta is missing its sequence.");
      }
      if (t.sequence <= P) {
        return;
      }
      if (t.source !== "reasoning" && t.source !== "output") {
        throw new Error("Agent operation delta has an unsupported source.");
      }
      if (t.source === "reasoning" && !t.text) {
        throw new Error("Agent operation reasoning delta has no text.");
      }
      const r = t.taskId !== undefined;
      const d = M.get(t.operationId);
      if (M.has(t.operationId) && r && d !== (t.taskId ?? null)) {
        throw new Error("Agent operation delta changed its task scope.");
      }
      const o = r ? t.taskId ?? null : d ?? null;
      M.set(t.operationId, o);
      if (t.source === "reasoning") {
        const p = B.get(t.operationId) ?? new Map();
        p.set(t.sequence, t.text);
        B.set(t.operationId, p);
      }
      if (t.source === "output") {
        N.set(t.operationId, Math.max(N.get(t.operationId) ?? 0, t.sequence));
      }
      et(t.operationId);
    };
    const ot = t => {
      if (G !== "agent") {
        throw new Error("A scoped Agent task delta was received for a Chat run.");
      }
      if (!t.taskId) {
        throw new Error("Agent task delta is missing its task id.");
      }
      Q(t.taskId);
      if (t.sequence === undefined) {
        throw new Error("Agent task delta is missing its sequence.");
      }
      if (!(t.sequence <= P)) {
        if (t.source !== "reasoning" && t.source !== "output") {
          throw new Error("Agent task delta has an unsupported source.");
        }
        if (t.source === "reasoning" && !t.text) {
          throw new Error("Agent task reasoning delta has no text.");
        }
        if (t.source === "reasoning") {
          const r = C.get(t.taskId) ?? new Map();
          r.set(t.sequence, t.text);
          C.set(t.taskId, r);
        }
        if (t.source === "output") {
          D.set(t.taskId, Math.max(D.get(t.taskId) ?? 0, t.sequence));
        }
        nt(t.taskId);
      }
    };
    const it = t => {
      for (const [r, d] of B) {
        for (const o of d.keys()) {
          if (o <= t) {
            d.delete(o);
          }
        }
        if (d.size === 0) {
          B.delete(r);
        }
      }
      for (const [r, d] of N) {
        if (d <= t) {
          N.delete(r);
        }
      }
      for (const r of [...M.keys()]) {
        if (!B.has(r) && !N.has(r)) {
          M.delete(r);
        }
      }
      n({
        runId: k,
        streams: [...M.keys()].map(Y)
      });
    };
    const at = t => {
      for (const [d, o] of C) {
        for (const p of o.keys()) {
          if (p <= t) {
            o.delete(p);
          }
        }
        if (o.size === 0) {
          C.delete(d);
        }
      }
      for (const [d, o] of D) {
        if (o <= t) {
          D.delete(d);
        }
      }
      const r = new Set([...C.keys(), ...D.keys()]);
      x({
        runId: k,
        streams: [...r].map(Z)
      });
    };
    const R = t => {
      if (U) {
        return false;
      }
      if (t.runId && t.runId !== k) {
        return true;
      }
      const r = t.type === "delta" && t.operationId !== undefined && t.operationId !== null;
      const d = t.type === "delta" && !r && t.taskId !== undefined && t.taskId !== null;
      if (t.sequence !== undefined) {
        if (X.has(t.sequence) || t.sequence < H && t.type !== "task" && !r && !d && (t.type !== "reset" || G !== "agent")) {
          return true;
        }
        H = Math.max(H, t.sequence);
        X.add(t.sequence);
      }
      if (t.type === "delta" && t.taskId !== undefined && !r && !d) {
        throw new Error("Agent operation delta task scope is missing an operation id.");
      }
      if (r) {
        rt(t);
        return true;
      }
      if (d) {
        ot(t);
        return true;
      }
      if (t.type === "task") {
        if (t.sequence === undefined) {
          throw new Error("Agent task stream event is missing its sequence.");
        }
        if (t.sequence < P) {
          return true;
        }
        const o = t.task;
        if (!o) {
          throw new Error("Agent task stream event is missing its payload.");
        }
        const p = T.get(o.taskId);
        if (!p || !(p.revision >= o.revision)) {
          T.set(o.taskId, {
            sequence: t.sequence,
            revision: o.revision
          });
          i(m => Mt(m, k, o));
        }
        return true;
      }
      if (t.type === "delta" && t.source === "reasoning" && t.text) {
        _ = Math.max(_, t.sequence ?? 0);
        if (t.sequence === undefined || !(t.sequence < P)) {
          if (!V) {
            f("reasoning");
          }
          j += t.text;
          st();
        }
        return true;
      }
      if (t.type === "delta" && t.source === "output") {
        _ = Math.max(_, t.sequence ?? 0);
        V = true;
        W();
        K();
        f("generating");
        return true;
      }
      if (t.type === "reset") {
        let o = null;
        const p = t.sequence ?? 0;
        if (G === "agent") {
          if (t.sequence === undefined) {
            throw new Error("Agent reset stream event is missing its sequence.");
          }
          if (!t.tasks || !t.operations || !t.outputs) {
            throw new Error("Agent reset stream event is missing its task, operation, or output snapshot.");
          }
          if (t.sequence < P) {
            return true;
          }
          o = tt(k, t.tasks, t.operations, t.outputs);
          it(p);
          at(p);
        }
        if (p >= _) {
          W();
          j = "";
          V = false;
          w("");
          f("waiting");
        }
        P = Math.max(P, p);
        if (o) {
          const m = new Map(T);
          const I = new Map([...m].filter(([, S]) => S.sequence > p));
          i(S => Et(S, o, p, I));
          T.clear();
          for (const S of o.tasks) {
            const y = I.get(S.taskId);
            if (y && y.revision > S.revision) {
              T.set(S.taskId, y);
              continue;
            }
            T.set(S.taskId, {
              sequence: p,
              revision: S.revision
            });
          }
          for (const [S, y] of I) {
            if (!T.has(S)) {
              T.set(S, y);
            }
          }
          for (const [S, y] of m) {
            if (!T.has(S)) {
              T.set(S, y);
            }
          }
        }
        return true;
      }
      if (t.type === "idle") {
        a();
        return false;
      } else if (Tt(t.type)) {
        W();
        K();
        a();
        return false;
      } else {
        return true;
      }
    };
    w("");
    f("waiting");
    i({
      runId: k,
      tasks: [],
      operations: [],
      outputs: []
    });
    n({
      runId: k,
      streams: []
    });
    x({
      runId: k,
      streams: []
    });
    const dt = async () => {
      try {
        for await (const t of It(e, z.signal)) {
          if (!R(t)) {
            break;
          }
        }
      } catch (t) {
        if (!z.signal.aborted) {
          console.warn("Chat run stream failed; polling will continue.", t);
        }
      } finally {
        W();
        K();
      }
    };
    const ut = window.setInterval(() => {
      ht(e, H).then(t => {
        for (const r of t) {
          if (!R(r)) {
            z.abort();
            break;
          }
        }
      }).catch(t => {
        if (!z.signal.aborted) {
          console.warn("Chat run stream snapshot failed.", t);
        }
      });
    }, 700);
    dt();
    return () => {
      U = true;
      z.abort();
      window.clearInterval(ut);
      W();
    };
  }, [s == null ? undefined : s.id, s == null ? undefined : s.workflowMode, e, a]);
  const A = (s == null ? undefined : s.id) ?? null;
  const E = g.runId === A ? g.tasks : [];
  const O = g.runId === A ? g.operations : [];
  const b = g.runId === A ? g.outputs : [];
  const J = l.runId === A ? l.streams : [];
  const F = u.runId === A ? u.streams : [];
  return {
    pendingReasoningText: c,
    pendingAssistantPhase: h,
    pendingTasks: E,
    pendingOperations: O,
    pendingOutputs: b,
    pendingTaskStreams: F,
    pendingOperationStreams: J,
    pendingStatusLabel: bt(s, h, E, O)
  };
};
const _Component8 = ({
  chatId: e,
  activeRun: s,
  refetchRunState: a,
  startedAt: c,
  message: w,
  messageIndex: h,
  responseNumber: f,
  operation: g,
  availableModels: i,
  onContentChange: l
}) => {
  const {
    pendingReasoningText: n,
    pendingStatusLabel: u,
    pendingTasks: x,
    pendingTaskStreams: A,
    pendingOperations: E,
    pendingOutputs: O,
    pendingOperationStreams: b
  } = Pt({
    chatId: e,
    activeRun: s,
    refetchRunState: a
  });
  const J = (s == null ? undefined : s.id) ?? `${e}-${c}`;
  const F = (s == null ? undefined : s.workflowMode) === "agent";
  return <At runId={J} startedAt={c} message={F ? {} : w} responseNumber={f} operation={F ? undefined : g} availableModels={i} streamText={n} statusLabel={u} workflowMode={(s == null ? undefined : s.workflowMode) ?? "single"} chatId={e} messageIndex={h} tasks={x} taskStreams={A} operations={E} operationOutputs={O} operationStreams={b} onContentChange={l} />;
};
const ls = ({
  markdownLatexMacros: e,
  ...s
}) => <St macros={e}><_Component8 {...s} /></St>;
export { ls as ThreadPendingAssistantMessage };
