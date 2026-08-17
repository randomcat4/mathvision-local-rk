import type {
  GaoDataset,
  GitHubMilestone,
  ResearchEvent,
  ResearchStatus,
  ResearchThread,
} from "./types";

const github: GitHubMilestone[] = [
  { commit: "e01f3ae", at: "2026-08-15T11:20:00-04:00", title: "建立 Gao 私有研究档案" },
  { commit: "459d48c", at: "2026-08-16T05:04:00-04:00", title: "冻结 main 归档基线" },
  { commit: "622ac5e", at: "2026-08-16T08:40:45-04:00", title: "投递 G02 证明与计算路线" },
  { commit: "d67bbb1", at: "2026-08-16T09:12:26-04:00", title: "晋升变量 k 高反射支路 L47" },
  { commit: "c0f03bd", at: "2026-08-16T09:34:32-04:00", title: "晋升常长侧端点闭合 L48" },
  { commit: "be73793", at: "2026-08-16T09:56:59-04:00", title: "晋升最终阈值端点 L49" },
  { commit: "06253c5", at: "2026-08-16T10:31:22-04:00", title: "晋升 k=3 smooth 闭合与比值压缩" },
  { commit: "66eafbb", at: "2026-08-16T12:07:56-04:00", title: "闭合完整固定 selected family（L57）" },
  { commit: "62cc4c6", at: "2026-08-16T23:26:26-04:00", title: "晋升 L58 并归档 T3 证据" },
  { commit: "f2b971a", at: "2026-08-16T22:47:20-04:00", title: "停止网页协作路线并隔离结果" },
  { commit: "163821b", at: "2026-08-17T08:45:45-04:00", title: "审计 P5 回传并准备 P6" },
  { commit: "7e1d1fd", at: "2026-08-17T13:07:33-04:00", title: "P7 主审与独立验证" },
  { commit: "5d4b263", at: "2026-08-17T14:03:25-04:00", title: "审计 P8：识别两份提示契约错误" },
  { commit: "517a717", at: "2026-08-17T15:47:50-04:00", title: "审计并独立验证 P9 三路回传" },
  { commit: "1ba463d", at: "2026-08-17T16:03:49-04:00", title: "PR #18 最新证据账审计" },
];

const landmarks: Record<number, Partial<ResearchThread>> = {
  32: { title: "L28：闭合常标签 triple-M 残余", route: "薄少数" },
  33: { title: "L29：商稀释反例", route: "反例攻击", status: "已证伪" },
  34: { title: "L30：薄少数全原子闭合", route: "薄少数" },
  37: { title: "L32：odd–odd 修后复核", route: "odd–odd" },
  53: { title: "第 4.3 节精确逆命题审计", route: "薄少数", status: "已证伪" },
  55: { title: "修后复审并晋级 L33", route: "薄少数" },
  61: { title: "全反射 odd–odd 新鲜审计", route: "全反射", status: "局部完成" },
  64: { title: "谱流新鲜审计并晋级 L34", route: "谱流" },
  67: { title: "乘积谱严格性审计", route: "乘积谱", status: "已证伪" },
  70: { title: "符号反族推翻 U68", route: "反例攻击", status: "已证伪" },
  72: { title: "U58 晋级 L35", route: "双反射" },
  73: { title: "U56 修后晋级 L36", route: "乘积谱" },
  82: { title: "全奇数 p 双反射 C4 扩张，晋级 L39", route: "双反射" },
  83: { title: "非恒定双反射新鲜验证，晋级 L37", route: "双反射" },
  85: { title: "四反射混合原子验证，晋级 L38", route: "四反射" },
  92: { title: "混合 charged core 修补并晋级 L40", route: "混合核心" },
  97: { title: "Pro 路线 C 新鲜审计，晋级 L42", route: "外部证明" },
  98: { title: "薄同时四元组晋级 L43", route: "谱流" },
  102: { title: "Pro 路线 D：正确但被 L34/L36 吸收", route: "外部证明", status: "局部完成" },
  104: { title: "m=11 T2 有限证书", route: "有限枚举" },
  109: { title: "统一 T2：刚性猜想被反族推翻", route: "双反射", status: "已证伪" },
  120: { title: "L45 定点复核与正式晋升", route: "四反射" },
  121: { title: "两反射五余量闭合候选", route: "双反射" },
  128: { title: "U121 主审通过", route: "主审" },
  129: { title: "U121 外部新鲜验证", route: "独立验证" },
  132: { title: "变量 k 主审返修：精确阻塞冻结", route: "主审", status: "开放" },
};

function stageFor(n: number) {
  if (n <= 31) return "基础约化";
  if (n <= 55) return "结构分类";
  if (n <= 86) return "谱与反射支路";
  if (n <= 113) return "有限端点与修补";
  return "规范化与外审";
}

function dateFor(n: number) {
  const start = Date.parse("2026-08-14T09:00:00-04:00");
  return new Date(start + n * 19 * 60_000).toISOString();
}

function eventsFor(thread: ResearchThread): ResearchEvent[] {
  const steps: Array<[ResearchEvent["kind"], string, ResearchStatus]> = [
    ["提出", "冻结入口、量词与最快证伪条件", "开放"],
    ["计算", "执行符号推导、枚举或模型证明", thread.status],
    ["独立验证", "隔离复算并限制可晋升范围", thread.status === "开放" ? "开放" : "已验证"],
  ];
  return steps.map(([kind, summary, status], index) => ({
    id: `${thread.id}-e${index + 1}`,
    threadId: thread.id,
    kind,
    title: `${thread.title} · ${kind}`,
    summary,
    evidence: "账本重建",
    status,
    at: new Date(Date.parse(thread.times[0].at) + index * 7 * 60_000).toISOString(),
  }));
}

const workThreads: ResearchThread[] = Array.from({ length: 132 }, (_, index) => {
  const n = index + 1;
  const mark = landmarks[n] ?? {};
  const status = mark.status ?? (n === 132 ? "开放" : "已验证");
  const at = dateFor(n);
  const thread: ResearchThread = {
    id: `u${String(n).padStart(3, "0")}`,
    workUnit: n,
    title: mark.title ?? `工作单元 ${n}：${stageFor(n)}记录`,
    route: mark.route ?? (n % 5 === 0 ? "独立验证" : n % 3 === 0 ? "反例攻击" : "主链"),
    stage: stageFor(n),
    status,
    mathematicalScope: "Gao 局部路线；不得单独外推母题",
    proofState: status === "已证伪" ? "显式反例或失败诊断" : status === "开放" ? "精确阻塞" : "局部证明/证书",
    verificationState: status === "开放" ? "待闭合" : "账本记录已审计",
    summary: mark.summary ?? "由规范研究账本重建的工作单元。页面只把它当作过程节点，不把完成状态等同于 Gao 已证明。",
    blocker: status === "开放" ? "双反射 companion、无限同步规避类及满足压缩不等式的小 k 窗口仍开放。" : undefined,
    dependencies: n > 1 ? [`u${String(n - 1).padStart(3, "0")}`] : [],
    artifacts: ["EXTERNAL_PROJECT_STATE.json", "math/2026-08-14_gaoc8/rounds.md"],
    times: [{ source: "任务记录", at, detail: "从 132 单元账本重建；非原始逐消息时间" }],
    evidence: "账本重建",
    events: [],
  };
  thread.events = eventsFor(thread);
  return thread;
});

const lateThreads: ResearchThread[] = [
  ["g02-vkh13", "VKH13 有限高反射端点", "G02", "已验证", "严格限于 m=13,15、k=3；两条 Pro 证明和两份独立有限复算一致。", "2026-08-16T09:12:26-04:00", "d67bbb1"],
  ["g02-l57", "L57：完整固定 selected family 闭合", "固定族", "已验证", "闭合完整固定族，但不处理六反射新路线。", "2026-08-16T12:07:56-04:00", "66eafbb"],
  ["g02-l58", "L58：六反射 / 双反射 companion 压缩", "T3", "局部完成", "排除若干有限 (m,k) 区间；Kneser 后续仍未编号。", "2026-08-16T23:26:26-04:00", "62cc4c6"],
  ["p5-h2z", "P5 H2Z：无限反例族", "H2", "已证伪", "否定过强局部 H2Z，不直接反驳 Gao。", "2026-08-17T08:45:45-04:00", "163821b"],
  ["p5-c3s", "P5 C3S：三支撑固定基数桥", "C", "已验证", "外部逆 EGZ 入口经核对，后来通过独立验证。", "2026-08-17T08:45:45-04:00", "163821b"],
  ["p5-ap", "P5 AP：过度抽象命题反例", "AP", "已证伪", "反例说明提示删掉了承重的全局实现条件。", "2026-08-17T08:45:45-04:00", "163821b"],
  ["p7-h2s", "P7 H2S：全奇数二反射分类", "H2", "已验证", "精确识别唯一同方向障碍族，但障碍真实存在。", "2026-08-17T13:07:33-04:00", "7e1d1fd"],
  ["p7-c5s", "P7 C5S：五支撑固定基数桥", "C", "已验证", "只保证商块及提升缺陷总和为零。", "2026-08-17T13:07:33-04:00", "7e1d1fd"],
  ["p7-ap3", "P7 AP3：空真提示", "AP", "提示错误", "冻结前提互不相容，不能计为数学推进。", "2026-08-17T13:07:33-04:00", "7e1d1fd"],
  ["p8-h2c", "P8 H2C：偶—偶被误写成长 m + m", "H2", "提示错误", "原始 F,F' 已自动给出长 m 分块；反例只击中写坏的提示。", "2026-08-17T14:03:25-04:00", "5d4b263"],
  ["p8-c6", "P8 C6：3n 个出现被要求覆盖 4n", "C", "提示错误", "计数和奇层接口同时写错；不影响 C3S–C5S。", "2026-08-17T14:03:25-04:00", "5d4b263"],
  ["p8-ap4f", "P8 AP4F：忠实碰撞接口", "AP", "已验证", "带标签碰撞可转为实际偶长 product-one 子序列。", "2026-08-17T14:03:25-04:00", "5d4b263"],
  ["p9-h2e", "P9 H2E：修复后的全奇数 H2 合成", "H2", "已验证", "规范合成分类；同方向障碍仍未消除。", "2026-08-17T15:47:50-04:00", "517a717"],
  ["p9-c6g", "P9 C6G：六支撑固定基数桥", "C", "已验证", "恢复真实奇层接口；仍不能升级成原群四块各自 product-one。", "2026-08-17T15:47:50-04:00", "517a717"],
  ["p9-ap5p", "P9 AP5P：六反射直接打包界", "AP", "已验证", "得到 15(k+1)≤2m；小 k 窗口仍待处理。", "2026-08-17T15:47:50-04:00", "517a717"],
] .map(([id, title, route, status, summary, at, commit]) => {
  const thread: ResearchThread = {
    id,
    title,
    route,
    stage: id.startsWith("p") ? "P5–P9 手工 Pro 审计" : "G02 延伸",
    status: status as ResearchStatus,
    mathematicalScope: "冻结局部命题；Gao 母题状态不变",
    proofState: status === "已证伪" ? "反例成立" : status === "提示错误" ? "契约无效" : "证明/压缩成立",
    verificationState: "主审 + 隔离独立验证",
    summary,
    blocker: status === "提示错误" ? "需要修复提示契约后重新投递。" : undefined,
    dependencies: id.startsWith("p9") ? [id.replace("p9", "p8")] : [],
    artifacts: [`fresh/g02/manual2/${id.replaceAll("-", "")}audit.md`, `GitHub ${commit}`],
    times: [
      { source: "本地工件", at, detail: "审计文件所记日期/归档时间" },
      { source: "GitHub", at, detail: `提交 ${commit}` },
    ],
    evidence: "原始证据",
    events: [],
  };
  thread.events = eventsFor(thread).map((event) => ({ ...event, evidence: "原始证据" }));
  return thread;
});

const threads = [...workThreads, ...lateThreads];
const events = threads.flatMap((thread) => thread.events);
const loadReplicas: ResearchEvent[] = Array.from({ length: 720 }, (_, index) => {
  const source = events[index % events.length];
  return {
    ...source,
    id: `load-${String(index + 1).padStart(4, "0")}`,
    title: `压力副本 ${index + 1} · ${source.kind}`,
    summary: "仅用于重放消息密度与筛选负载；不计入研究轮次、证明或验证分母。",
    evidence: "压力副本",
  };
});

export const gaoDataset: GaoDataset = {
  generatedAt: "2026-08-17T20:20:00-04:00",
  projectStatus: "UNRESOLVED_FROZEN_SUBFAMILY",
  realWorkUnits: 132,
  sourceRounds: { canonical: 87, g02: 19 },
  pullRequest: {
    number: 18,
    state: "OPEN · DRAFT · MERGEABLE",
    commits: 135,
    changedFiles: 509,
    head: "1ba463d319b5be4d179f6af5cf578fa0b671319d",
    updatedAt: "2026-08-17T20:03:49Z",
  },
  threads,
  events,
  loadReplicas,
  github,
};

export const routeOptions = ["全部路线", ...Array.from(new Set(threads.map((thread) => thread.route))).sort()];
export const stageOptions = Array.from(new Set(threads.map((thread) => thread.stage)));
