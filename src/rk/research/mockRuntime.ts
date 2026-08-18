import type {
  ResearchCommand,
  ResearchEdge,
  ResearchMessage,
  ResearchNode,
  ResearchRuntime,
  ResearchSnapshot,
} from "./types";

const now = () => new Date().toISOString();

function message(id: string, author: ResearchMessage["author"], content: string): ResearchMessage {
  return { id, author, at: now(), content };
}

const baseNodes: ResearchNode[] = [
  {
    id: "root",
    title: "高问题 · 主研究",
    subtitle: "探索零点分布与临界线约束",
    kind: "root",
    status: "completed",
    x: 56,
    y: 320,
    progress: 100,
    round: 1,
    runtime: "00:18",
    reasoning: "把总目标拆成结构归约、宇称审计与容量闭合三条可独立验证的路线。",
    messages: [message("m-root-1", "MAIN", "先并行检查定义、宇称闭合和 U127 容量界。")],
    artifacts: [],
  },
  {
    id: "fork",
    title: "并行分叉",
    subtitle: "派生三个独立研究方向",
    kind: "review",
    status: "completed",
    x: 294,
    y: 320,
    progress: 100,
    round: 2,
    runtime: "00:04",
    reasoning: "三条路线共享原始命题，但不共享未经验证的中间结论。",
    messages: [message("m-fork-1", "SYSTEM", "已创建三个隔离子实例。")],
    artifacts: [],
  },
  {
    id: "u127",
    title: "子实例 · U127-AUDIT",
    subtitle: "审计量词、偶层提升与容量闭合",
    kind: "agent",
    status: "completed",
    x: 548,
    y: 92,
    progress: 100,
    round: 31,
    runtime: "06:19",
    reasoning: "固定 occurrence label 后，三处修订可以分别闭合；标签不能在合并时被抹去。",
    messages: [
      message("m-u127-1", "MAIN", "只修 U127 审计指出的三个位置，不改命题。"),
      message("m-u127-2", "SUB", "三个位置已逐项修复；最后一步必须显式保留 occurrence label。"),
      message("m-u127-3", "REVIEW", "修订包送匿名验证，作者线程不自行盖章。"),
    ],
    artifacts: [{ id: "a-u127", name: "U127_audit.md", kind: "markdown", summary: "三处修订与依赖说明" }],
  },
  {
    id: "parity",
    title: "子实例 · PARITY-08",
    subtitle: "放宽条件 (8) 并验证宇称 seam",
    kind: "agent",
    status: "running",
    x: 548,
    y: 320,
    progress: 73,
    round: 56,
    runtime: "05:58",
    reasoning: "分别为偶可以严格放宽为总和为偶；当前正在检查放宽后 R 的扩大是否影响下游容量估计。",
    messages: [
      message("m-parity-1", "MAIN", "删除 individual-even，只保留 total-even，逐步检查证明。"),
      message("m-parity-2", "SUB", "闭合只使用了 |V+|+|V-| 的宇称，没有分别调用两侧为偶。"),
      message("m-parity-3", "PROVER", "Lean parity seam 已通过；正在整理可复用引理。"),
    ],
    artifacts: [{ id: "a-parity", name: "parity_seam.lean", kind: "lean", summary: "总和为偶的最小形式化引理" }],
  },
  {
    id: "bound",
    title: "子实例 · BOUND-LEMMA",
    subtitle: "临界密度估计与显式界",
    kind: "agent",
    status: "paused",
    x: 548,
    y: 548,
    progress: 42,
    round: 27,
    runtime: "07:43",
    reasoning: "等待 parity 放宽后的参数范围稳定，再重新计算最坏情形。",
    messages: [message("m-bound-1", "SYSTEM", "人工暂停：上游参数仍在变化。")],
    artifacts: [],
  },
  {
    id: "join",
    title: "依赖汇合 · 2/3",
    subtitle: "至少两条路线完成才可继续",
    kind: "join",
    status: "waiting",
    x: 806,
    y: 320,
    progress: 67,
    round: 34,
    runtime: "等待中",
    dependencies: { ready: 2, total: 3 },
    reasoning: "U127 与 parity 已提供可审计结果；密度界仍处于人工暂停。",
    messages: [message("m-join-1", "SYSTEM", "依赖满足 2/3，尚未达到启动条件。")],
    artifacts: [],
  },
  {
    id: "gate",
    title: "条件门",
    subtitle: "放宽后是否保持容量界？",
    kind: "gate",
    status: "waiting",
    x: 1052,
    y: 320,
    progress: 0,
    round: 0,
    runtime: "未启动",
    reasoning: "条件成立则进入验证；否则保留否决路线并产生修订尝试。",
    messages: [],
    artifacts: [],
  },
  {
    id: "conclude",
    title: "结论 · THEOREM",
    subtitle: "形成可提交的最终闭合",
    kind: "review",
    status: "waiting",
    x: 1304,
    y: 104,
    progress: 0,
    round: 0,
    runtime: "未启动",
    reasoning: "等待条件门给出肯定证据。",
    messages: [],
    artifacts: [],
  },
  {
    id: "refine",
    title: "修订尝试 · 2",
    subtitle: "调整参数与适用条件",
    kind: "agent",
    status: "running",
    x: 1304,
    y: 320,
    progress: 58,
    round: 16,
    runtime: "04:33",
    reasoning: "把失败点缩小到最后一次容量闭合，不回滚已经通过的定义与宇称部分。",
    messages: [
      message("m-refine-1", "REVIEW", "容量闭合仍缺一条严格不等式，退回修订。"),
      message("m-refine-2", "SUB", "保留前两段，只重算末端参数。"),
    ],
    artifacts: [{ id: "a-refine", name: "capacity_patch.md", kind: "markdown", summary: "容量闭合修订草案" }],
  },
  {
    id: "rejected",
    title: "路线否决",
    subtitle: "朴素计数法不满足条件",
    kind: "review",
    status: "rejected",
    x: 1304,
    y: 536,
    progress: 100,
    round: 9,
    runtime: "03:02",
    reasoning: "该路线混淆 occurrence 与 value，匿名审计给出显式反例。",
    messages: [message("m-reject-1", "REVIEW", "路线保留用于审计，但不再向下游传播结论。")],
    artifacts: [{ id: "a-reject", name: "counterexample.log", kind: "log", summary: "m=67 显式碰撞" }],
  },
  {
    id: "verify",
    title: "子实例 · L55VERIFY",
    subtitle: "匿名验证修订后的容量闭合",
    kind: "agent",
    status: "waiting",
    x: 1554,
    y: 320,
    progress: 12,
    round: 8,
    runtime: "02:17",
    dependencies: { ready: 1, total: 2 },
    reasoning: "收到修订包后独立重放，不读取作者线程的自我评价。",
    messages: [message("m-verify-1", "SYSTEM", "等待修订尝试与 Lean seam 两项依赖。")],
    artifacts: [],
  },
];

const baseEdges: ResearchEdge[] = [
  { id: "e-root-fork", from: "root", to: "fork", kind: "sequence" },
  { id: "e-fork-u127", from: "fork", to: "u127", kind: "fork" },
  { id: "e-fork-parity", from: "fork", to: "parity", kind: "fork", active: true },
  { id: "e-fork-bound", from: "fork", to: "bound", kind: "fork" },
  { id: "e-u127-join", from: "u127", to: "join", kind: "dependency" },
  { id: "e-parity-join", from: "parity", to: "join", kind: "dependency", active: true },
  { id: "e-bound-join", from: "bound", to: "join", kind: "dependency" },
  { id: "e-join-gate", from: "join", to: "gate", kind: "sequence", label: "等待 1 项依赖" },
  { id: "e-gate-conclude", from: "gate", to: "conclude", kind: "condition", label: "是" },
  { id: "e-gate-refine", from: "gate", to: "refine", kind: "condition", label: "修订" },
  { id: "e-gate-reject", from: "gate", to: "rejected", kind: "rejection", label: "否" },
  { id: "e-refine-parity", from: "refine", to: "parity", kind: "repair", label: "修复回环", active: true },
  { id: "e-refine-verify", from: "refine", to: "verify", kind: "dependency" },
];

const spawnedNode: ResearchNode = {
  id: "spawned",
  title: "子问题 · ODD-ODD",
  subtitle: "检查 odd–odd realization 的新增谱",
  kind: "agent",
  status: "running",
  x: 1788,
  y: 320,
  progress: 18,
  round: 3,
  runtime: "00:41",
  reasoning: "条件 (8) 放宽后出现的新 realization 需要单独确认不会破坏下游构造。",
  messages: [message("m-spawn-1", "MAIN", "从 parity 路线动态派生：枚举 odd–odd realization。")],
  artifacts: [],
};

function cloneSnapshot(snapshot: ResearchSnapshot): ResearchSnapshot {
  return structuredClone(snapshot);
}

class LocalResearchRuntime implements ResearchRuntime {
  private snapshot: ResearchSnapshot = {
    runId: "rk-gao-live-001",
    title: "高问题 · 实时研究",
    status: "running",
    startedAt: now(),
    revision: 1,
    source: "live",
    nodes: baseNodes,
    edges: baseEdges,
    events: [
      { id: "event-1", at: now(), nodeId: "parity", summary: "PARITY-08 正在验证 total-even 放宽。" },
      { id: "event-2", at: now(), nodeId: "refine", summary: "修订尝试 2 已进入最后一次容量闭合。" },
    ],
  };

  private listeners = new Set<(snapshot: ResearchSnapshot) => void>();
  private interval: ReturnType<typeof setInterval> | undefined;
  private tick = 0;

  async getSnapshot(): Promise<ResearchSnapshot> {
    return cloneSnapshot(this.snapshot);
  }

  subscribe(listener: (snapshot: ResearchSnapshot) => void): () => void {
    this.listeners.add(listener);
    listener(cloneSnapshot(this.snapshot));
    this.ensureTicker();
    return () => {
      this.listeners.delete(listener);
      if (this.listeners.size === 0 && this.interval) {
        clearInterval(this.interval);
        this.interval = undefined;
      }
    };
  }

  async dispatch(command: ResearchCommand): Promise<void> {
    if (command.type === "pause" && this.snapshot.status === "running") {
      this.snapshot.status = "paused";
      this.snapshot.nodes = this.snapshot.nodes.map((node) => node.status === "running" ? { ...node, status: "paused" } : node);
      this.record("parity", "人工暂停：所有活动子实例已进入安全点。 ");
    }
    if (command.type === "resume" && this.snapshot.status === "paused") {
      this.snapshot.status = "running";
      this.snapshot.nodes = this.snapshot.nodes.map((node) =>
        node.id === "parity" || node.id === "refine" || node.id === "spawned" ? { ...node, status: "running" } : node,
      );
      this.record("parity", "研究已恢复，活动路径从最近事件继续。 ");
    }
    this.publish();
  }

  private ensureTicker(): void {
    if (this.interval) return;
    this.interval = setInterval(() => this.advance(), 2800);
  }

  private advance(): void {
    if (this.snapshot.status !== "running") return;
    this.tick += 1;
    this.snapshot.nodes = this.snapshot.nodes.map((node) => {
      if (node.status !== "running") return node;
      return { ...node, progress: Math.min(94, node.progress + (node.id === "refine" ? 3 : 2)), round: node.round + 1 };
    });

    if (this.tick === 3 && !this.snapshot.nodes.some((node) => node.id === spawnedNode.id)) {
      this.snapshot.nodes = [...this.snapshot.nodes, spawnedNode];
      this.snapshot.edges = [...this.snapshot.edges, {
        id: "e-verify-spawned",
        from: "verify",
        to: "spawned",
        kind: "spawn",
        label: "动态派生",
        active: true,
      }];
      this.record("spawned", "发现 odd–odd realization，动态增生一个可独立审计的子问题。 ");
    } else {
      const target = this.tick % 2 === 0 ? "refine" : "parity";
      this.record(target, target === "parity" ? "收到新的宇称枚举结果，继续缩小适用范围。" : "容量参数已重算一轮，正在检查最终不等式。 ");
    }
    this.publish();
  }

  private record(nodeId: string, summary: string): void {
    const event = { id: `event-${Date.now()}`, at: now(), nodeId, summary };
    this.snapshot.revision += 1;
    this.snapshot.events = [event, ...this.snapshot.events].slice(0, 20);
    this.snapshot.nodes = this.snapshot.nodes.map((node) => node.id === nodeId ? {
      ...node,
      messages: [...node.messages, message(`m-${Date.now()}`, "SYSTEM", summary)].slice(-12),
    } : node);
  }

  private publish(): void {
    const snapshot = cloneSnapshot(this.snapshot);
    this.listeners.forEach((listener) => listener(snapshot));
  }
}

export const localResearchRuntime: ResearchRuntime = new LocalResearchRuntime();
