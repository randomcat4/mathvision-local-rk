export type ResearchNodeStatus =
  | "running"
  | "completed"
  | "waiting"
  | "paused"
  | "rejected"
  | "failed";

export type ResearchNodeKind = "root" | "agent" | "join" | "gate" | "review";

export type ResearchEdgeKind =
  | "sequence"
  | "fork"
  | "dependency"
  | "condition"
  | "rejection"
  | "repair"
  | "spawn";

export interface ResearchMessage {
  id: string;
  author: "MAIN" | "SUB" | "PROVER" | "REVIEW" | "SYSTEM";
  authorLabel?: string;
  at: string;
  content: string;
}

export interface ResearchArtifact {
  id: string;
  name: string;
  kind: "markdown" | "lean" | "log";
  summary: string;
  path?: string;
}

export interface ResearchNode {
  id: string;
  title: string;
  subtitle: string;
  kind: ResearchNodeKind;
  status: ResearchNodeStatus;
  x: number;
  y: number;
  progress: number;
  round: number;
  runtime: string;
  dependencies?: { ready: number; total: number };
  reasoning: string;
  messages: ResearchMessage[];
  artifacts: ResearchArtifact[];
}

export interface ResearchEdge {
  id: string;
  from: string;
  to: string;
  kind: ResearchEdgeKind;
  label?: string;
  active?: boolean;
}

export interface ResearchEvent {
  id: string;
  at: string;
  nodeId: string;
  summary: string;
}

export interface ResearchSnapshot {
  runId: string;
  title: string;
  status: "running" | "paused" | "completed" | "failed";
  startedAt: string;
  revision: number;
  source: "live" | "historical";
  metrics?: {
    fetchMs: number;
    normalizeMs: number;
    layoutMs: number;
  };
  nodes: ResearchNode[];
  edges: ResearchEdge[];
  events: ResearchEvent[];
}

export type ResearchCommand =
  | { type: "pause" }
  | { type: "resume" }
  | { type: "focus-running" };

export interface ResearchRuntime {
  getSnapshot(): Promise<ResearchSnapshot>;
  subscribe(listener: (snapshot: ResearchSnapshot) => void): () => void;
  dispatch(command: ResearchCommand): Promise<void>;
}
