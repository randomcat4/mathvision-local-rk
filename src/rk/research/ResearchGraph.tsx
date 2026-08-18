import { memo, useMemo } from "react";
import { Check, CirclePause, CircleX, Clock3, GitMerge, LockKeyhole } from "./icons";
import { FlowFrame } from "./FlowFrame";
import type { ResearchEdge, ResearchNode } from "./types";

const NODE_WIDTH = 210;
const NODE_HEIGHT = 104;

export function getResearchGraphBounds(nodes: ResearchNode[]) {
  return {
    width: Math.max(2050, ...nodes.map((node) => node.x + NODE_WIDTH + 64)),
    height: Math.max(800, ...nodes.map((node) => node.y + NODE_HEIGHT + 64)),
  };
}

function edgePath(edge: ResearchEdge, nodes: Map<string, ResearchNode>): string {
  const from = nodes.get(edge.from);
  const to = nodes.get(edge.to);
  if (!from || !to) return "";
  const x1 = from.x + NODE_WIDTH;
  const y1 = from.y + NODE_HEIGHT / 2;
  const x2 = to.x;
  const y2 = to.y + NODE_HEIGHT / 2;
  const bend = Math.max(58, Math.abs(x2 - x1) * 0.45);
  if (edge.kind === "repair") {
    return `M ${x1} ${y1} C ${x1 + 80} ${y1 + 160}, ${to.x - 120} ${y2 + 170}, ${x2} ${y2}`;
  }
  return `M ${x1} ${y1} C ${x1 + bend} ${y1}, ${x2 - bend} ${y2}, ${x2} ${y2}`;
}

const statusLabel: Record<ResearchNode["status"], string> = {
  running: "运行中",
  completed: "已完成",
  waiting: "等待中",
  paused: "已暂停",
  rejected: "已否决",
  failed: "失败",
};

const NodeStatusIcon = ({ status }: { status: ResearchNode["status"] }) => {
  if (status === "completed") return <Check size={13} />;
  if (status === "paused") return <CirclePause size={13} />;
  if (status === "rejected" || status === "failed") return <CircleX size={13} />;
  if (status === "waiting") return <Clock3 size={13} />;
  return <span className="rk-node__pulse" aria-hidden="true" />;
};

const ResearchNodeView = memo(function ResearchNodeView({ node, selected, onSelect }: {
  node: ResearchNode;
  selected: boolean;
  onSelect(nodeId: string): void;
}) {
  const active = node.status === "running";
  return (
    <div className="rk-node-position" style={{ transform: `translate(${node.x}px, ${node.y}px)` }}>
      <FlowFrame active={active}>
        <button
          type="button"
          className={`rk-node rk-node--${node.status} rk-node--${node.kind} ${selected ? "is-selected" : ""}`}
          onClick={() => onSelect(node.id)}
          aria-pressed={selected}
        >
          <span className="rk-node__topline">
            <strong>{node.title}</strong>
            <span className="rk-node__status"><NodeStatusIcon status={node.status} />{statusLabel[node.status]}</span>
          </span>
          <span className="rk-node__subtitle">{node.subtitle}</span>
          <span className="rk-node__meta">
            <span>轮次 {node.round}</span>
            <span>{node.runtime}</span>
            {node.dependencies ? <span>依赖 {node.dependencies.ready}/{node.dependencies.total}</span> : <span>{node.progress}%</span>}
          </span>
          {active ? <span className="rk-node__progress"><span style={{ transform: `scaleX(${node.progress / 100})` }} /></span> : null}
        </button>
      </FlowFrame>
      <div className="rk-node-preview" role="tooltip">
        <strong>{node.title}</strong>
        <small>第 {node.round} 轮 · {statusLabel[node.status]}</small>
        <p>{node.reasoning}</p>
        <span>点击查看完整记录</span>
      </div>
    </div>
  );
});

const ResearchEdgeLayer = memo(function ResearchEdgeLayer({ edges, nodes, width, height }: {
  edges: ResearchEdge[];
  nodes: Map<string, ResearchNode>;
  width: number;
  height: number;
}) {
  return (
    <svg className="rk-edges" width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      <defs>
        <filter id="rk-edge-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <marker id="rk-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 8 4 L 0 8 z" />
        </marker>
      </defs>
      {edges.map((edge) => {
        const path = edgePath(edge, nodes);
        if (!path) return null;
        return (
          <g key={edge.id} className={`rk-edge rk-edge--${edge.kind} ${edge.active ? "is-active" : ""}`}>
            <path d={path} className="rk-edge__line" markerEnd="url(#rk-arrow)" />
            {edge.active ? <>
              <path d={path} className="rk-edge__flow" />
              <circle r="2.5" className="rk-edge__particle" filter="url(#rk-edge-glow)">
                <animateMotion dur={edge.kind === "repair" ? "5.8s" : "4.4s"} repeatCount="indefinite" path={path} />
              </circle>
            </> : null}
            {edge.label ? <text className="rk-edge__label"><textPath href={`#${edge.id}`} startOffset="52%">{edge.label}</textPath></text> : null}
            <path id={edge.id} d={path} fill="none" stroke="transparent" />
          </g>
        );
      })}
    </svg>
  );
});

export function ResearchGraph({ nodes, edges, selectedNodeId, onSelect }: {
  nodes: ResearchNode[];
  edges: ResearchEdge[];
  selectedNodeId: string;
  onSelect(nodeId: string): void;
}) {
  const nodeMap = useMemo(() => new Map(nodes.map((node) => [node.id, node])), [nodes]);
  const bounds = useMemo(() => getResearchGraphBounds(nodes), [nodes]);
  const largeGraph = nodes.length > 80;
  return (
    <div className={`rk-graph-stage ${largeGraph ? "rk-graph-stage--large" : ""}`} style={bounds} role="group" aria-label="实时研究树">
      <ResearchEdgeLayer edges={edges} nodes={nodeMap} width={bounds.width} height={bounds.height} />
      {nodes.map((node) => <ResearchNodeView key={node.id} node={node} selected={selectedNodeId === node.id} onSelect={onSelect} />)}
      <div className="rk-graph-key" aria-label="图例">
        <span><span className="rk-key-dot is-running" />运行中</span>
        <span><Check size={12} />已完成</span>
        <span><LockKeyhole size={12} />等待依赖</span>
        <span><GitMerge size={12} />汇合 / 修复</span>
      </div>
    </div>
  );
}
