export type EvidenceClass = "原始证据" | "账本重建" | "压力副本";
export type ResearchStatus =
  | "已验证"
  | "已证伪"
  | "提示错误"
  | "局部完成"
  | "开放"
  | "停用";

export interface EvidenceTime {
  source: "本地工件" | "任务记录" | "GitHub";
  at: string;
  detail: string;
}

export interface ResearchEvent {
  id: string;
  threadId: string;
  kind: "提出" | "计算" | "主审" | "独立验证" | "修补" | "归档";
  title: string;
  summary: string;
  evidence: EvidenceClass;
  status: ResearchStatus;
  at: string;
}

export interface ResearchThread {
  id: string;
  workUnit?: number;
  title: string;
  route: string;
  stage: string;
  status: ResearchStatus;
  mathematicalScope: string;
  proofState: string;
  verificationState: string;
  summary: string;
  blocker?: string;
  dependencies: string[];
  artifacts: string[];
  times: EvidenceTime[];
  evidence: EvidenceClass;
  events: ResearchEvent[];
}

export interface GitHubMilestone {
  commit: string;
  at: string;
  title: string;
}

export interface GaoDataset {
  generatedAt: string;
  projectStatus: string;
  realWorkUnits: number;
  sourceRounds: { canonical: number; g02: number };
  pullRequest: {
    number: number;
    state: string;
    commits: number;
    changedFiles: number;
    head: string;
    updatedAt: string;
  };
  threads: ResearchThread[];
  events: ResearchEvent[];
  loadReplicas: ResearchEvent[];
  github: GitHubMilestone[];
}
