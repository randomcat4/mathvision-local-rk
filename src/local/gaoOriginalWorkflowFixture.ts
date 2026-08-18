import { gaoDataset } from "../showcase/gao/data";

export const GAO_ORIGINAL_CHAT_ID = "gao-original-workflow";
export const GAO_ORIGINAL_RUN_ID = "gao-original-run";
export const GAO_ORIGINAL_ADMIN_USER_ID = "local-user";

const baseTime = Date.parse("2026-08-14T09:00:00-04:00");
const workThreads = gaoDataset.threads.filter(
  (thread): thread is typeof thread & { workUnit: number } => thread.workUnit !== undefined,
);
const timestamp = (round: number, offset = 0) =>
  new Date(baseTime + (round * 19 + offset) * 60_000).toISOString();

interface TraceNode {
  id: string;
  round: number;
  actor: string;
  lane: string;
  title: string;
  summary: string;
  status?: "completed" | "failed";
}

const traceNodes: TraceNode[] = [
  { id: "main-freeze", round: 1, actor: "MAIN", lane: "orchestration", title: "Freeze theorem and evidence boundary", summary: "用户只在这里给出一次研究任务。主实例冻结命题、证据等级和四个隔离执行槽。" },
  { id: "pro1-u132-audit", round: 2, actor: "PRO-1", lane: "integration audit", title: "U132 fresh integration audit", summary: "从零检查 U109/U115/U121 到主定理的蕴含链；首轮发现两处承重缺口。", status: "failed" },
  { id: "pro2-u131", round: 2, actor: "PRO-2", lane: "proof reconstruction", title: "Rebuild missing U131 proof", summary: "确认规范工件缺失后，从冻结定义重建自包含证明，不从编号猜结论。" },
  { id: "sub1-u127", round: 2, actor: "SUB-1", lane: "targeted repair", title: "Repair U127 at three exact points", summary: "保持冻结命题不变，逐点修补审计中定位的三个局部缺口。" },
  { id: "sub2-finite", round: 2, actor: "SUB-2", lane: "server recomputation", title: "Independent finite replay", summary: "独立复算 m=11 与 m=13,15,21；有限成功不外推无限参数。" },
  { id: "pro1-u132-r2", round: 3, actor: "PRO-1", lane: "integration audit", title: "Re-audit U132 with missing evidence", summary: "补齐独立证据后返回 CORRECT_INTEGRATION，只允许晋升严格局部分支。" },
  { id: "sub1-u127-verify", round: 3, actor: "FRESH-VERIFY", lane: "anonymous verification", title: "Fresh verification of U127 repair", summary: "匿名验证修订稿，裁决 CORRECT；不由修补作者自行盖章。" },
  { id: "main-l46", round: 4, actor: "MAIN", lane: "ledger decision", title: "Promote L46; keep Gao unresolved", summary: "整合四路证据，只晋升一旋转四反射 odd–odd residual；母题保持 UNRESOLVED_WITH_EXACT_BLOCKER。" },

  { id: "l55verify", round: 52, actor: "SUB-VERIFY", lane: "k=7", title: "Verify canonical k=7 closure", summary: "固定 k=7 的规范证明与新鲜验缝并行推进。" },
  { id: "kuniform", round: 52, actor: "SUB-ANALYTIC-A", lane: "uniform k", title: "Uniform analytic attack for odd k≥9", summary: "尝试以相邻目标行与重复目标计数停止逐 k 枚举。" },
  { id: "kscout", round: 52, actor: "SUB-COMPUTE", lane: "counterexample search", title: "Search the L54 residual region", summary: "服务器在 k=9,11,13 的冻结有限余区主动寻找 miss tuple。" },
  { id: "ksecond", round: 52, actor: "SUB-ANALYTIC-B", lane: "independent proof", title: "Second uniform proof route", summary: "用前缀和覆盖给出独立的缺失 residue 上界。" },
  { id: "kuniform-verify", round: 56, actor: "FRESH-VERIFY-A", lane: "uniform k", title: "Audit first uniform proof", summary: "匿名对抗审计量词、奇偶和合数模数边界。" },
  { id: "ksecond-verify", round: 56, actor: "FRESH-VERIFY-B", lane: "uniform k", title: "Audit second uniform proof", summary: "独立检查前缀和证明，不读取第一路线结论。" },
  { id: "main-smooth", round: 57, actor: "MAIN", lane: "ledger decision", title: "Integrate fixed-k smooth closures", summary: "合并解析证明、有限探针和新鲜验缝；明确有限搜索只是旁证。" },

  { id: "t3p11", round: 84, actor: "PRO-ATTACK", lane: "six-reflection companion", title: "t3p11 end-to-end proof candidate", summary: "提出六反射 selected atom 与双反射 companion 的完整候选，保留为待新鲜验证。" },
  { id: "mixed-r1", round: 84, actor: "PRO-MIXED", lane: "mixed atom", title: "Mixed-atom route, round 1", summary: "提出按总旋转数 K 闭合大反射区间的严格局部候选。" },
  { id: "reducible-r1", round: 84, actor: "PRO-REDUCIBLE", lane: "outside L43", title: "Reducible-block route, round 1", summary: "提出 L43 菜单外的单箱全交错充分条件。" },
  { id: "global-r1", round: 84, actor: "PRO-GLOBAL", lane: "all-bad/C4", title: "Global all-bad route, round 1", summary: "提出偶层含循环零和核时的全八坏型闭合候选。" },
  { id: "t3-adversary", round: 85, actor: "FRESH-ATTACK", lane: "six-reflection companion", title: "Adversarial check of t3p11", summary: "检查十个风险点，结果仅为 FAILED_TO_DISPROVE，不等于正面认证。" },
  { id: "mixed-r2", round: 85, actor: "PRO-MIXED", lane: "mixed atom", title: "Mixed route claims all K<m", summary: "候选扩大到全部 K<m，随后交给匿名反证线程。" },
  { id: "reducible-r2", round: 85, actor: "PRO-REDUCIBLE", lane: "outside L43", title: "Separate the route from L43", summary: "承认首轮商骨架不新，尝试依靠提升标签得到严格新子类。" },
  { id: "global-r2", round: 85, actor: "PRO-GLOBAL", lane: "all-bad/C4", title: "Extend even-layer method to ν≤2", summary: "作者声称推进到 ν≤2，等待独立审计。" },
  { id: "mixed-reject", round: 87, actor: "MAIN-AUDIT", lane: "mixed atom", title: "Reject mixed K<m proof", summary: "K=m−1 时删去两个系数 1 后总和是 2N−1，不能套用 2N 极值分类；四型穷尽失败。", status: "failed" },
  { id: "reducible-reject", round: 87, actor: "MAIN-AUDIT", lane: "outside L43", title: "Reject reducible closure", summary: "纯旋转 padding 中没有反射，不能偷用反射状态变号；闭合定理无效。", status: "failed" },
  { id: "global-hold", round: 87, actor: "MAIN-AUDIT", lane: "all-bad/C4", title: "Hold ν≤2 and ν=3 routes", summary: "审计混淆商群条件与提升条件；ν=3 仍卡在 L12–L13 精确目标命中。", status: "failed" },
  { id: "main-quarantine", round: 88, actor: "MAIN", lane: "model provenance", title: "Quarantine degraded web rounds", summary: "第三批后多路线同步出现量词错套与短答突变；相关结论全部降级，不进入证明账。" },

  { id: "manual-dispatch", round: 109, actor: "MAIN", lane: "manual Pro orchestration", title: "Restart three corrected manual lanes", summary: "按 H2、C、AP 三条隔离路线重新冻结合同；每批回传后再做主审与新鲜验证。" },
  { id: "p5-h2z", round: 110, actor: "PRO-H2", lane: "H2", title: "P5 H2Z", summary: "被全部奇数 m≥7 的原子族反例否定；不改变 Gao。", status: "failed" },
  { id: "p5-c3s", round: 110, actor: "PRO-C", lane: "fixed-cardinality bridge", title: "P5 C3S", summary: "三支撑固定基数桥通过主审，进入独立验证。" },
  { id: "p5-ap", round: 110, actor: "PRO-AP", lane: "abstraction attack", title: "P5 AP", summary: "过强 +15 抽象命题被 m=257 反例否定；不满足真实全局接口。", status: "failed" },
  { id: "p6-h2i", round: 114, actor: "PRO-H2", lane: "H2", title: "P6 H2I", summary: "m≥9 主链成立，但 m=7,k=4 越出所引逆定理范围，留下精确缺口。", status: "failed" },
  { id: "p6-c4s", round: 114, actor: "PRO-C", lane: "fixed-cardinality bridge", title: "P6 C4S", summary: "四支撑桥的范围、容量和提升主审通过，等待新鲜验证。" },
  { id: "p6-ap2", round: 114, actor: "PRO-AP", lane: "abstraction attack", title: "P6 AP2", summary: "平衡三进制反例说明全局恒等式仍不足以挽救 k=1 抽象命题。", status: "failed" },
  { id: "p7-h2s", round: 120, actor: "PRO-H2", lane: "H2", title: "P7 H2S", summary: "修复 m=7 边界并由全量 7^5 枚举旁证；新鲜验证 CORRECT。" },
  { id: "p7-c5s", round: 120, actor: "PRO-C", lane: "fixed-cardinality bridge", title: "P7 C5S", summary: "五支撑固定基数桥通过主审与独立验证。" },
  { id: "p7-ap3", round: 120, actor: "PRO-AP", lane: "abstraction attack", title: "P7 AP3", summary: "冻结前提互相矛盾，答案虽形式正确但属于空真，不能计数学推进。", status: "failed" },
  { id: "p8-h2c", round: 126, actor: "PRO-H2", lane: "H2", title: "P8 H2C contract failure", summary: "把两个非空偶长块误写成两个各长 m 的块；这是提示错误，不是否定 P7。", status: "failed" },
  { id: "p8-c6", round: 126, actor: "PRO-C", lane: "fixed-cardinality bridge", title: "P8 C6 contract failure", summary: "只有 3n 个 occurrence 却要求覆盖 4n；同时奇层接口写错。", status: "failed" },
  { id: "p8-ap4f", round: 126, actor: "PRO-AP", lane: "faithful collision", title: "P8 AP4F", summary: "带标号反射对的固定符号碰撞可忠实转成偶长 product-one 子序列；主审和新鲜验证通过。" },
  { id: "p9-h2e", round: 131, actor: "PRO-H2", lane: "H2", title: "P9 H2E", summary: "以正确偶—偶接口合成全奇数分类；唯一真实障碍为同方向族。" },
  { id: "p9-c6g", round: 131, actor: "PRO-C", lane: "group bridge", title: "P9 C6G", summary: "回到真实 G_m 有序奇层乘积，得到四个商 product-one 块及 C4 缺陷总和零。" },
  { id: "p9-ap5p", round: 131, actor: "PRO-AP", lane: "packing bound", title: "P9 AP5P", summary: "证明十五个 E0 平移两两不交，并得到 15(k+1)≤2m。" },
  { id: "main-final", round: 132, actor: "MAIN", lane: "current frontier", title: "Freeze exact remaining blocker", summary: "三路局部结果可进入候选包，但小 k 窗口和伴随因子谱未闭合；Gao 仍 UNRESOLVED。" },
];

const traceEdges = [
  ...["pro1-u132-audit", "pro2-u131", "sub1-u127", "sub2-finite"].map((target) => ({ source: "main-freeze", target, condition: "parallel isolated dispatch" })),
  { source: "pro1-u132-audit", target: "pro1-u132-r2", condition: "critical gaps; supply missing evidence" },
  { source: "sub1-u127", target: "sub1-u127-verify", condition: "anonymous repair package" },
  ...["pro1-u132-r2", "pro2-u131", "sub1-u127-verify", "sub2-finite"].map((source) => ({ source, target: "main-l46", condition: "independent evidence returned" })),
  ...["l55verify", "kuniform", "kscout", "ksecond"].map((target) => ({ source: "main-l46", target, condition: "parallel smooth-family attack" })),
  { source: "kuniform", target: "kuniform-verify", condition: "anonymous candidate" },
  { source: "ksecond", target: "ksecond-verify", condition: "independent candidate" },
  ...["l55verify", "kscout", "kuniform-verify", "ksecond-verify"].map((source) => ({ source, target: "main-smooth", condition: "evidence gate" })),
  ...["t3p11", "mixed-r1", "reducible-r1", "global-r1"].map((target) => ({ source: "main-smooth", target, condition: "parallel frontier route" })),
  { source: "t3p11", target: "t3-adversary", condition: "fresh attack" },
  { source: "mixed-r1", target: "mixed-r2", condition: "candidate strengthened" },
  { source: "reducible-r1", target: "reducible-r2", condition: "separate from L43" },
  { source: "global-r1", target: "global-r2", condition: "extend to ν≤2" },
  { source: "mixed-r2", target: "mixed-reject", condition: "2N−1 boundary breaks classification" },
  { source: "reducible-r2", target: "reducible-reject", condition: "illegal sign change" },
  { source: "global-r2", target: "global-hold", condition: "quotient/lift mismatch" },
  ...["t3-adversary", "mixed-reject", "reducible-reject", "global-hold"].map((source) => ({ source, target: "main-quarantine", condition: "route review" })),
  { source: "main-quarantine", target: "manual-dispatch", condition: "restart from certified boundary" },
  ...["p5-h2z", "p5-c3s", "p5-ap"].map((target) => ({ source: "manual-dispatch", target, condition: "parallel P5 lane" })),
  { source: "p5-h2z", target: "p6-h2i", condition: "replace disproved abstraction" },
  { source: "p5-c3s", target: "p6-c4s", condition: "increase support" },
  { source: "p5-ap", target: "p6-ap2", condition: "repair global identity" },
  { source: "p6-h2i", target: "p7-h2s", condition: "repair m=7 gap" },
  { source: "p6-c4s", target: "p7-c5s", condition: "increase support" },
  { source: "p6-ap2", target: "p7-ap3", condition: "stronger frozen contract" },
  { source: "p7-h2s", target: "p8-h2c", condition: "attempt synthesis" },
  { source: "p7-c5s", target: "p8-c6", condition: "increase support" },
  { source: "p7-ap3", target: "p8-ap4f", condition: "replace vacuous contract" },
  { source: "p8-h2c", target: "p9-h2e", condition: "fix block-length contract" },
  { source: "p8-c6", target: "p9-c6g", condition: "fix count and ordered product" },
  { source: "p8-ap4f", target: "p9-ap5p", condition: "derive packing bound" },
  ...["p9-h2e", "p9-c6g", "p9-ap5p"].map((source) => ({ source, target: "main-final", condition: "main audit and freeze" })),
];

const phaseAnchors = [
  { first: 1, last: 31, source: "main-freeze", target: "main-l46" },
  { first: 32, last: 55, source: "main-l46", target: "main-smooth" },
  { first: 56, last: 86, source: "main-smooth", target: "main-quarantine" },
  { first: 87, last: 113, source: "main-quarantine", target: "manual-dispatch" },
  { first: 114, last: 132, source: "manual-dispatch", target: "main-final" },
];

function actorFor(workUnit: number, route: string) {
  if (route === "反例攻击") return "SUB-ATTACK";
  if (route === "独立验证") return "FRESH-VERIFY";
  if (route === "主审") return "MAIN-AUDIT";
  return ["MAIN", "PRO-A", "PRO-B", "SUB-COMPUTE"][workUnit % 4];
}

const evidenceNodes = workThreads.map((thread) => ({
  id: `ledger-${thread.id}`,
  kind: thread.status === "已证伪" || thread.status === "提示错误" ? "route_rejected" : "evidence_thread",
  label: `${actorFor(thread.workUnit, thread.route)} · U${thread.workUnit}`,
  subtitle: `${thread.route} · ${thread.title}`,
  round_index: thread.workUnit,
  status: thread.status === "已证伪" || thread.status === "提示错误" ? "failed" : "completed",
  stream_reasoning: `${thread.summary}\n\n证据边界：${thread.mathematicalScope}`,
  stream_output: "",
  stream_reasoning_truncated: false,
  stream_output_truncated: false,
  display_summary: `${thread.proofState}；${thread.verificationState}。${thread.blocker ?? "该工作单元已进入证据账。"}`,
  display_summary_truncated: false,
  display_summary_is_final: true,
  stream_started_at: thread.times[0]?.at ?? timestamp(thread.workUnit),
  stream_updated_at: timestamp(thread.workUnit, 7),
}));

const workflowNodes = [
  ...traceNodes.map((node) => ({
    id: node.id,
    kind: node.status === "failed" ? "route_rejected" : node.actor === "MAIN" ? "main_instance" : "agent_thread",
    label: `${node.actor} · ${node.title}`,
    subtitle: node.lane,
    round_index: node.round,
    status: node.status ?? "completed",
    stream_reasoning: node.summary,
    stream_output: "",
    stream_reasoning_truncated: false,
    stream_output_truncated: false,
    display_summary: node.status === "failed" ? `${node.summary}\n\n路线被否决或冻结，不进入正式证明账。` : node.summary,
    display_summary_truncated: false,
    display_summary_is_final: true,
    stream_started_at: timestamp(node.round),
    stream_updated_at: timestamp(node.round, 7),
  })),
  ...evidenceNodes,
];

const evidenceEdges = workThreads.flatMap((thread) => {
  const phase = phaseAnchors.find(({ first, last }) => thread.workUnit >= first && thread.workUnit <= last);
  if (!phase) return [];
  const nodeId = `ledger-${thread.id}`;
  return [
    { source: phase.source, target: nodeId, condition: null },
    {
      source: nodeId,
      target: phase.target,
      condition: null,
    },
  ];
});

const workflowEdges = [...traceEdges, ...evidenceEdges];

const rounds = Array.from({ length: 132 }, (_, index) => {
  const roundIndex = index + 1;
  const trace = traceNodes.filter((node) => node.round === roundIndex);
  const evidence = workThreads.find((thread) => thread.workUnit === roundIndex);
  return {
    round_index: roundIndex,
    author_summary: trace.length > 0 ? trace.map((node) => `${node.actor}: ${node.title}`).join("\n") : evidence?.title ?? `Evidence work unit ${roundIndex}`,
    critic_reports: trace.filter((node) => node.status === "failed").map((node) => ({ model: node.actor, accepted: false, report: `${node.title}: ${node.summary}` })),
    fresh_audit_reports: trace.filter((node) => node.actor.includes("VERIFY")).map((node) => ({ model: node.actor, accepted: node.status !== "failed", report: node.summary })),
    council: { replies: trace.filter((node) => node.actor === "MAIN").map((node) => ({ model: "main-instance", text: node.summary, error: null })) },
    compute: { requested: evidence?.route === "有限枚举" || evidence?.route === "反例攻击", stdout_summary: evidence ? `工件：${evidence.artifacts.join("；")}` : "", response: "" },
  };
});

const failedCompile = { pdf_attachment_id: null, compile: { success: false, pages: 0, diagnostics: "Static workflow fixture: no PDF attachment was generated.", duration_ms: 0 } };
const roundOutputs = workThreads.map((thread) => ({
  round_index: thread.workUnit,
  author_summary: thread.summary,
  files: { answer_tex: "", research_notes_tex: "" },
  artifacts: { answer_tex: failedCompile, research_notes_tex: failedCompile },
  created_at: thread.times[0]?.at ?? timestamp(thread.workUnit, 11),
}));

export const gaoOriginalWorkflowRun = {
  id: GAO_ORIGINAL_RUN_ID,
  status: "completed",
  max_rounds: 132,
  chat_id: GAO_ORIGINAL_CHAT_ID,
  assistant_message_index: 1,
  state: { files: { answer_tex: "", research_notes_tex: "" }, round_outputs: roundOutputs, rounds, workflow: { nodes: workflowNodes, edges: workflowEdges }, completed: true, last_error: null },
  error_message: null,
  started_at: timestamp(1),
  finished_at: timestamp(132, 12),
  created_at: timestamp(1),
  last_updated: timestamp(132, 12),
};

export const gaoOriginalWorkflowChat = {
  id: GAO_ORIGINAL_CHAT_ID,
  user_id: GAO_ORIGINAL_ADMIN_USER_ID,
  title: "Gao：Codex 多智能体并行研究回放",
  branch_title_pending: false,
  branch_space_id: null,
  folder_id: null,
  latex_document_id: null,
  messages: [
    { role: "user", content: "请持续研究冻结的 Gao 循环指数二问题。主实例负责证据边界和路线裁决；各子实例隔离并行，失败路线必须保留且不得进入证明账。", timestamp: timestamp(1), attachments: [] },
    { role: "assistant", content: "", timestamp: timestamp(132, 12), reasoning: null, reasoning_duration_seconds: null, model_id: "mathvision-pro-simulation", workflow_mode: "single", display_mode: "plain", sources: [], citations: [], text_segments: [], tool_calls: [], attachments: [], feedback: null, pro_chat_call: { run_id: GAO_ORIGINAL_RUN_ID, status: "completed", answer_tex: "", research_notes_tex: "", error_message: null, started_at: timestamp(1), finished_at: timestamp(132, 12) } },
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

export const gaoOriginalWorkflowChatSummary = { ...gaoOriginalWorkflowChat, messages: undefined, preview: "Codex 主实例、并行子实例、验证和被否决路线的静态回放。", message_count: gaoOriginalWorkflowChat.messages.length };
export const gaoOriginalWorkflowStats = { rounds: rounds.length, nodes: workflowNodes.length, edges: workflowEdges.length, rejected: workflowNodes.filter((node) => node.status === "failed").length };
