import dagre from "@dagrejs/dagre";
import type {
  ResearchArtifact,
  ResearchCommand,
  ResearchEdge,
  ResearchEdgeKind,
  ResearchMessage,
  ResearchNode,
  ResearchNodeKind,
  ResearchRuntime,
  ResearchSnapshot,
} from "./types";

const ENDPOINT = "/__local-rk/researches/gao-original-workflow";
const NODE_WIDTH = 210;
const NODE_HEIGHT = 104;

interface RawMessage {
  id?: string;
  author?: string;
  role?: string;
  content?: string;
  at?: string;
}

interface RawNode {
  id: string;
  kind?: string;
  label?: string;
  subtitle?: string;
  round_index?: number | null;
  status?: string;
  stream_reasoning?: string;
  stream_output?: string;
  display_summary?: string;
  stream_started_at?: string | null;
  stream_updated_at?: string | null;
  archived_messages?: RawMessage[];
}

interface RawEdge {
  source: string;
  target: string;
  condition?: string | null;
}

interface RawSnapshot {
  chatSummary?: { title?: string };
  run: {
    id?: string;
    status?: string;
    started_at?: string;
    finished_at?: string;
    last_updated?: string;
    state?: { workflow?: { nodes?: RawNode[]; edges?: RawEdge[] } };
  };
}

const markdownLink = /\[([^\]]+)\]\(([A-Za-z]:[\\/][^)]+\.md)\)/g;

function authorOf(message: RawMessage): ResearchMessage["author"] {
  const author = message.author ?? "";
  if (author.includes("主实例") || message.role === "request") return "MAIN";
  if (author.includes("验证") || author.includes("审") || message.role === "review") return "REVIEW";
  if (author.toLowerCase().includes("pro") || author.includes("证明")) return "PROVER";
  if (author.includes("子实例") || message.role === "response") return "SUB";
  return "SYSTEM";
}

function artifactsOf(node: RawNode): ResearchArtifact[] {
  const found = new Map<string, ResearchArtifact>();
  for (const message of node.archived_messages ?? []) {
    for (const match of message.content?.matchAll(markdownLink) ?? []) {
      const path = match[2].replaceAll("\\", "/");
      found.set(path, {
        id: `${node.id}-artifact-${found.size + 1}`,
        name: match[1],
        kind: "markdown",
        summary: "节点聊天记录引用的 Gao 研究工件",
        path,
      });
    }
  }
  return [...found.values()];
}

function nodeKind(raw: RawNode): ResearchNodeKind {
  if (raw.kind === "main_instance") return raw.round_index === 1 ? "root" : "review";
  if (raw.kind === "route_rejected") return "review";
  return "agent";
}

function nodeStatus(raw: RawNode): ResearchNode["status"] {
  if (raw.kind === "route_rejected" || raw.status === "failed") return "rejected";
  if (raw.status === "running") return "running";
  if (raw.status === "paused") return "paused";
  if (raw.status === "completed") return "completed";
  return "waiting";
}

function runtimeOf(node: RawNode): string {
  if (!node.stream_started_at || !node.stream_updated_at) return "—";
  const seconds = Math.max(0, Math.round((Date.parse(node.stream_updated_at) - Date.parse(node.stream_started_at)) / 1000));
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  return `${minutes}:${(seconds % 60).toString().padStart(2, "0")}`;
}

function edgeKind(raw: RawEdge, nodes: Map<string, RawNode>, inDegree: Map<string, number>, outDegree: Map<string, number>): ResearchEdgeKind {
  const from = nodes.get(raw.source);
  const to = nodes.get(raw.target);
  if (to?.kind === "route_rejected" || to?.status === "failed") return "rejection";
  if ((to?.round_index ?? 0) <= (from?.round_index ?? 0)) return "repair";
  if ((outDegree.get(raw.source) ?? 0) > 1) return "fork";
  if ((inDegree.get(raw.target) ?? 0) > 1) return "dependency";
  return "sequence";
}

function createSnapshot(raw: RawSnapshot, fetchMs: number): ResearchSnapshot {
  const normalizeStarted = performance.now();
  const rawNodes = raw.run.state?.workflow?.nodes ?? [];
  const rawEdges = raw.run.state?.workflow?.edges ?? [];
  const byId = new Map(rawNodes.map((node) => [node.id, node]));
  const inDegree = new Map<string, number>();
  const outDegree = new Map<string, number>();
  for (const edge of rawEdges) {
    inDegree.set(edge.target, (inDegree.get(edge.target) ?? 0) + 1);
    outDegree.set(edge.source, (outDegree.get(edge.source) ?? 0) + 1);
  }

  const layoutStarted = performance.now();
  const graph = new dagre.graphlib.Graph({ multigraph: true });
  graph.setGraph({ rankdir: "LR", ranker: "tight-tree", nodesep: 44, edgesep: 18, ranksep: 96, marginx: 48, marginy: 48 });
  graph.setDefaultEdgeLabel(() => ({}));
  rawNodes.forEach((node) => graph.setNode(node.id, { width: NODE_WIDTH, height: NODE_HEIGHT }));
  rawEdges.forEach((edge, index) => graph.setEdge(edge.source, edge.target, {}, `${edge.source}-${edge.target}-${index}`));
  dagre.layout(graph);
  const layoutMs = performance.now() - layoutStarted;

  const nodes: ResearchNode[] = rawNodes.map((node) => {
    const position = graph.node(node.id) as { x: number; y: number } | undefined;
    const messages = (node.archived_messages ?? []).map((message, index): ResearchMessage => ({
      id: message.id ?? `${node.id}-message-${index}`,
      author: authorOf(message),
      authorLabel: message.author,
      at: message.at ?? node.stream_updated_at ?? raw.run.last_updated ?? new Date(0).toISOString(),
      content: message.content ?? "",
    }));
    return {
      id: node.id,
      title: node.label ?? node.id,
      subtitle: node.subtitle ?? (node.kind === "evidence_thread" ? "证据与验证线程" : "研究线程"),
      kind: nodeKind(node),
      status: nodeStatus(node),
      x: Math.max(0, (position?.x ?? NODE_WIDTH / 2) - NODE_WIDTH / 2),
      y: Math.max(0, (position?.y ?? NODE_HEIGHT / 2) - NODE_HEIGHT / 2),
      progress: node.status === "completed" || node.status === "failed" ? 100 : 0,
      round: node.round_index ?? 0,
      runtime: runtimeOf(node),
      dependencies: (inDegree.get(node.id) ?? 0) > 1 ? { ready: inDegree.get(node.id) ?? 0, total: inDegree.get(node.id) ?? 0 } : undefined,
      reasoning: node.display_summary || node.stream_reasoning || node.stream_output || "该节点只保存了关联聊天记录。",
      messages,
      artifacts: artifactsOf(node),
    };
  });

  const edges: ResearchEdge[] = rawEdges.map((edge, index) => ({
    id: `gao-edge-${index}`,
    from: edge.source,
    to: edge.target,
    kind: edgeKind(edge, byId, inDegree, outDegree),
    label: edge.condition ?? undefined,
    active: false,
  }));
  const events = [...nodes]
    .sort((a, b) => Date.parse((byId.get(b.id)?.stream_updated_at ?? "")) - Date.parse((byId.get(a.id)?.stream_updated_at ?? "")))
    .slice(0, 20)
    .map((node, index) => ({
      id: `gao-event-${index}`,
      at: byId.get(node.id)?.stream_updated_at ?? raw.run.last_updated ?? new Date(0).toISOString(),
      nodeId: node.id,
      summary: node.reasoning.slice(0, 180),
    }));
  const normalizeMs = performance.now() - normalizeStarted - layoutMs;
  return {
    runId: raw.run.id ?? "gao-original-run",
    title: raw.chatSummary?.title ?? "Gao 多智能体研究回放",
    status: raw.run.status === "failed" ? "failed" : raw.run.status === "completed" ? "completed" : "running",
    startedAt: raw.run.started_at ?? new Date(0).toISOString(),
    revision: 1,
    source: "historical",
    metrics: { fetchMs, normalizeMs, layoutMs },
    nodes,
    edges,
    events,
  };
}

class GaoResearchRuntime implements ResearchRuntime {
  private snapshot: ResearchSnapshot | null = null;
  private loading: Promise<ResearchSnapshot> | null = null;
  private listeners = new Set<(snapshot: ResearchSnapshot) => void>();

  getSnapshot(): Promise<ResearchSnapshot> {
    if (this.snapshot) return Promise.resolve(this.snapshot);
    if (!this.loading) {
      this.loading = this.load().then((snapshot) => {
        this.snapshot = snapshot;
        this.listeners.forEach((listener) => listener(snapshot));
        return snapshot;
      });
    }
    return this.loading;
  }

  subscribe(listener: (snapshot: ResearchSnapshot) => void): () => void {
    this.listeners.add(listener);
    if (this.snapshot) listener(this.snapshot);
    return () => this.listeners.delete(listener);
  }

  async dispatch(_command: ResearchCommand): Promise<void> {
    // Historical Gao runs are immutable. Live commands are intentionally ignored.
  }

  private async load(): Promise<ResearchSnapshot> {
    const started = performance.now();
    const response = await fetch(ENDPOINT, { headers: { Accept: "application/json" }, cache: "no-store" });
    if (!response.ok) throw new Error(`Gao 研究数据读取失败（${response.status}）`);
    const raw = await response.json() as RawSnapshot;
    return createSnapshot(raw, performance.now() - started);
  }
}

export const gaoResearchRuntime: ResearchRuntime = new GaoResearchRuntime();
