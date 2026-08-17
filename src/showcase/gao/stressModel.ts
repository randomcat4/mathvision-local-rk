import type { GaoDataset, ResearchEvent } from "./types";

export interface StressReport {
  workflowNodes: number;
  workflowEdges: number;
  detailedCardDomEstimate: number;
  rawMessages: number;
  readableAtOnce: number;
  verdict: "可用" | "临界" | "产品失效";
  reasons: string[];
}

export function buildStressReport(dataset: GaoDataset): StressReport {
  const workflowNodes = dataset.events.length;
  const workflowEdges = Math.max(0, workflowNodes - dataset.threads.length) + dataset.threads.length - 1;
  const detailedCardDomEstimate = workflowNodes * 14 + workflowEdges * 3;
  const rawMessages = dataset.events.length + dataset.loadReplicas.length;
  return {
    workflowNodes,
    workflowEdges,
    detailedCardDomEstimate,
    rawMessages,
    readableAtOnce: 28,
    verdict: workflowNodes > 300 || rawMessages > 800 ? "产品失效" : "临界",
    reasons: [
      "原图对全部节点做一次全局布局，并为每个步骤创建完整 React 卡片。",
      "248×136 的节点在数百步时即使渲染成功，也无法在一个画布中阅读。",
      "消息和详情若不分段，搜索、选中和连接关系扫描会随数据量持续变慢。",
      "这里的“失效”指交互与认知负荷失效，不伪造浏览器崩溃。",
    ],
  };
}

export function filterEvents(events: ResearchEvent[], query: string) {
  const needle = query.trim().toLocaleLowerCase();
  if (!needle) return events;
  return events.filter((event) =>
    `${event.title} ${event.summary} ${event.kind} ${event.status}`.toLocaleLowerCase().includes(needle),
  );
}
