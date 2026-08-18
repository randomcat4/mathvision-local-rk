import { gaoDataset } from "../showcase/gao/data";

export const GAO_ORIGINAL_CHAT_ID = "gao-original-workflow";
export const GAO_ORIGINAL_RUN_ID = "gao-original-run";
export const GAO_ORIGINAL_ADMIN_USER_ID = "local-user";

const baseTime = Date.parse("2026-08-14T09:00:00-04:00");
const workThreads = gaoDataset.threads.filter(
  (thread): thread is typeof thread & { workUnit: number } => thread.workUnit !== undefined,
);

function timestamp(roundIndex: number, offsetMinutes = 0) {
  return new Date(baseTime + (roundIndex * 19 + offsetMinutes) * 60_000).toISOString();
}

const roles = [
  { kind: "author", label: "Main researcher", detail: "提出候选证明或反例" },
  { kind: "critic", label: "Referee", detail: "检查量词、作用域和首个断点" },
  { kind: "fresh_critic", label: "Fresh audit", detail: "隔离上下文独立验缝" },
  { kind: "council", label: "Research council", detail: "比较路线并决定修补或晋升" },
  { kind: "compute", label: "Deterministic check", detail: "枚举、哈希或有限证书复算" },
] as const;

const workflowNodes = workThreads.flatMap((thread) =>
  roles.map((role, roleIndex) => {
    const startedAt = timestamp(thread.workUnit, roleIndex * 2);
    const updatedAt = timestamp(thread.workUnit, roleIndex * 2 + 1);
    return {
      id: `round-${thread.workUnit}-${role.kind}`,
      kind: role.kind,
      label: `U${thread.workUnit} · ${role.label}`,
      subtitle: `${thread.route} · ${role.detail}`,
      round_index: thread.workUnit,
      status: "completed",
      stream_reasoning: `研究对象：${thread.title}\n\n${role.detail}。严格范围：${thread.mathematicalScope}`,
      stream_output: "",
      stream_reasoning_truncated: false,
      stream_output_truncated: false,
      display_summary: `${thread.summary}\n\n状态：${thread.status}。${thread.blocker ?? "该局部单元已完成账本登记。"}`,
      display_summary_truncated: false,
      display_summary_is_final: true,
      stream_started_at: startedAt,
      stream_updated_at: updatedAt,
    };
  }),
);

const workflowEdges = workThreads.flatMap((thread, threadIndex) => {
  const withinRound = roles.slice(0, -1).map((role, roleIndex) => ({
    source: `round-${thread.workUnit}-${role.kind}`,
    target: `round-${thread.workUnit}-${roles[roleIndex + 1].kind}`,
    condition: roleIndex === 0 ? "submitted for review" : "review complete",
  }));
  const nextThread = workThreads[threadIndex + 1];
  return nextThread
    ? [
        ...withinRound,
        {
          source: `round-${thread.workUnit}-compute`,
          target: `round-${nextThread.workUnit}-author`,
          condition: thread.status === "已证伪" ? "route repaired" : "ledger advanced",
        },
      ]
    : withinRound;
});

const rounds = workThreads.map((thread) => ({
  round_index: thread.workUnit,
  author_summary: `${thread.title}\n\n${thread.summary}`,
  critic_reports: [
    {
      model: "simulated-referee",
      accepted: thread.status !== "提示错误",
      report: `主审记录：${thread.proofState}。本节点只代表局部工作单元，不改变 Gao 母题状态。`,
    },
  ],
  fresh_audit_reports: [
    {
      model: "simulated-fresh-auditor",
      accepted: thread.status === "已验证" || thread.status === "局部完成",
      report: `独立验证记录：${thread.verificationState}。`,
    },
  ],
  council: {
    replies: [
      {
        model: "simulated-council",
        text: thread.blocker ?? "保留该局部结果，继续下一工作单元。",
        error: null,
      },
    ],
  },
  compute: {
    requested: true,
    stdout_summary: `工件：${thread.artifacts.join("；")}`,
    response: "",
  },
}));

const failedCompile = {
  pdf_attachment_id: null,
  compile: {
    success: false,
    pages: 0,
    diagnostics: "Static workflow fixture: no PDF attachment was generated.",
    duration_ms: 0,
  },
};

const roundOutputs = workThreads.map((thread) => ({
  round_index: thread.workUnit,
  author_summary: thread.summary,
  files: { answer_tex: "", research_notes_tex: "" },
  artifacts: { answer_tex: failedCompile, research_notes_tex: failedCompile },
  created_at: timestamp(thread.workUnit, 11),
}));

export const gaoOriginalWorkflowRun = {
  id: GAO_ORIGINAL_RUN_ID,
  status: "completed",
  max_rounds: workThreads.length,
  chat_id: GAO_ORIGINAL_CHAT_ID,
  assistant_message_index: 1,
  state: {
    files: { answer_tex: "", research_notes_tex: "" },
    round_outputs: roundOutputs,
    rounds,
    workflow: { nodes: workflowNodes, edges: workflowEdges },
    completed: true,
    last_error: null,
  },
  error_message: null,
  started_at: timestamp(1),
  finished_at: timestamp(132, 12),
  created_at: timestamp(1),
  last_updated: timestamp(132, 12),
};

export const gaoOriginalWorkflowChat = {
  id: GAO_ORIGINAL_CHAT_ID,
  user_id: GAO_ORIGINAL_ADMIN_USER_ID,
  title: "Gao：132 轮 MathVision Pro 模拟研究",
  branch_title_pending: false,
  branch_space_id: null,
  folder_id: null,
  latex_document_id: null,
  messages: [
    {
      role: "user",
      content:
        "请在冻结的 Gao 循环指数二问题上持续研究。每轮必须给出候选、反例攻击、主审、隔离验证和确定性复算；局部结论不得外推母题。",
      timestamp: timestamp(1),
      attachments: [],
    },
    {
      role: "assistant",
      content: "",
      timestamp: timestamp(132, 12),
      reasoning: null,
      reasoning_duration_seconds: null,
      model_id: "mathvision-pro-simulation",
      workflow_mode: "single",
      display_mode: "plain",
      sources: [],
      citations: [],
      text_segments: [],
      tool_calls: [],
      attachments: [],
      feedback: null,
      pro_chat_call: {
        run_id: GAO_ORIGINAL_RUN_ID,
        status: "completed",
        answer_tex: "",
        research_notes_tex: "",
        error_message: null,
        started_at: timestamp(1),
        finished_at: timestamp(132, 12),
      },
    },
  ],
  message_revision: 2,
  context_summary: null,
  context_usage: { input_tokens: 187420, threshold_tokens: 200000 },
  is_public: false,
  has_unread: false,
  is_pinned: true,
  pinned_at: timestamp(132, 12),
  archived_at: null,
  input_safety_blocked_at: null,
  input_safety_banned_until: null,
  active_run: null,
  latest_run: null,
  active_pro_chat_call_started_at: null,
  created_at: timestamp(1),
  last_updated: timestamp(132, 12),
  deleted_at: null,
};

export const gaoOriginalWorkflowChatSummary = {
  ...gaoOriginalWorkflowChat,
  messages: undefined,
  preview: "132 轮、660 个原工作流步骤；静态模拟数据。",
  message_count: gaoOriginalWorkflowChat.messages.length,
};

export const gaoOriginalWorkflowStats = {
  rounds: rounds.length,
  nodes: workflowNodes.length,
  edges: workflowEdges.length,
};
