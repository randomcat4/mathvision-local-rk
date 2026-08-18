export const PRO_CHAT_WORKFLOW_NODE_TYPE = "proChatWorkflowNode";
export const PRO_CHAT_NODE_WIDTH = 248;
export const PRO_CHAT_NODE_HEIGHT = 136;
export const PRO_CHAT_GATE_SIZE = 16;

export interface ArchivedThreadMessage {
  id: string;
  author: string;
  role: "request" | "response" | "tool" | "review";
  content: string;
  at: string;
}

export interface ProChatWorkflowNode {
  id: string;
  kind: string;
  status: string;
  label: string;
  subtitle?: string;
  roundIndex: number | null;
  streamReasoning: string;
  streamReasoningTruncated?: boolean;
  displaySummary: string;
  displaySummaryTruncated?: boolean;
  archivedMessages?: ArchivedThreadMessage[];
  [key: string]: unknown;
}
export interface ProChatWorkflowEdge {
  source: string;
  target: string;
  condition?: string | null;
  [key: string]: unknown;
}

const contractedKinds = new Set(["review_join", "ready_gate"]);
export const isContractedWorkflowNode = (node: ProChatWorkflowNode) =>
  contractedKinds.has(node.kind);
export const formatWorkflowLabel = (value: string) =>
  value
    .split("_")
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(" ");
export const workflowStatusColor = (status: string) =>
  status === "failed"
    ? "error"
    : status === "completed"
      ? "success"
      : status === "running"
        ? "info"
        : status === "skipped"
          ? "secondary"
          : "default";

export function contractReviewGates(
  nodes: ProChatWorkflowNode[],
  edges: ProChatWorkflowEdge[],
) {
  const nodesById = new Map(nodes.map((node) => [node.id, node]));
  const reviewToGate = new Map<string, string>();
  const consumedGates = new Set<string>();
  for (const review of nodes.filter((node) => node.kind === "review_join")) {
    const outgoing = edges.filter((edge) => edge.source === review.id);
    if (outgoing.length !== 1)
      throw new Error(
        `Pro chat review join '${review.id}' must have exactly one outgoing edge.`,
      );
    const gate = nodesById.get(outgoing[0].target);
    if (gate?.kind !== "ready_gate")
      throw new Error(
        `Pro chat review join '${review.id}' must connect directly to a ready gate.`,
      );
    const incoming = edges.filter((edge) => edge.target === gate.id);
    if (incoming.length !== 1 || incoming[0].source !== review.id)
      throw new Error(
        `Pro chat ready gate '${gate.id}' must have exactly one incoming review join edge.`,
      );
    if (gate.roundIndex !== review.roundIndex)
      throw new Error(
        `Pro chat review join '${review.id}' and ready gate '${gate.id}' belong to different rounds.`,
      );
    if (consumedGates.has(gate.id))
      throw new Error(
        `Pro chat ready gate '${gate.id}' is connected to multiple review joins.`,
      );
    reviewToGate.set(review.id, gate.id);
    consumedGates.add(gate.id);
  }
  const contractedNodes = nodes
    .filter((node) => !reviewToGate.has(node.id))
    .map((node) =>
      consumedGates.has(node.id)
        ? {
            ...node,
            label: "Review readiness gate",
            subtitle: "Review join and readiness evaluation",
          }
        : node,
    );
  const nodeIds = new Set(contractedNodes.map((node) => node.id));
  const edgeKeys = new Set<string>();
  const contractedEdges: ProChatWorkflowEdge[] = [];
  for (const edge of edges) {
    const source = reviewToGate.get(edge.source) ?? edge.source;
    const target = reviewToGate.get(edge.target) ?? edge.target;
    if (source === target || !nodeIds.has(source) || !nodeIds.has(target))
      continue;
    const key = `${source}\0${target}\0${edge.condition ?? ""}`;
    if (!edgeKeys.has(key)) {
      edgeKeys.add(key);
      contractedEdges.push({ ...edge, source, target });
    }
  }
  return { nodes: contractedNodes, edges: contractedEdges };
}
