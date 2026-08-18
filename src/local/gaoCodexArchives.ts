export interface GaoCodexArchiveMessage {
  id: string;
  author: string;
  role: "commentary" | "final";
  content: string;
  at: string;
}

export interface GaoCodexArchive {
  id: string;
  sessionId: string;
  agentPath: string;
  nickname: string;
  round: number;
  status: "completed" | "failed";
  summary: string;
  sourceNode: string;
  targetNode: string;
  messages: GaoCodexArchiveMessage[];
}

const message = (
  thread: string,
  index: number,
  author: string,
  role: GaoCodexArchiveMessage["role"],
  at: string,
  content: string,
): GaoCodexArchiveMessage => ({ id: `${thread}-visible-${index}`, author, role, at, content });

export const gaoCodexArchives: GaoCodexArchive[] = [
  {
    id: "codex-l55verify",
    sessionId: "01a00b2d-fb3e-76a1-b0a5-7d5fefb376de",
    agentPath: "/root/l55verify",
    nickname: "Huygens",
    round: 55,
    status: "completed",
    summary: "审计完成，结论为 CORRECT_INTEGRATION。",
    sourceNode: "l55verify",
    targetNode: "main-smooth",
    messages: [
      message("codex-l55verify", 1, "Huygens", "commentary", "2026-08-16T19:27:56Z", "我会按 `math-theorem` 的核验流程做这次只读整合审计，严格限制在指定目录与指定文件，最终只写 `fresh/g02/smooth/l55verify.md`。该技能要求先核对证据链和边界条件，因此我会逐项重算接口与证书，不改证明正文。"),
      message("codex-l55verify", 2, "Huygens", "final", "2026-08-16T19:30:13Z", "审计完成，结论为 `CORRECT_INTEGRATION`。\n\n报告：[l55verify.md](C:\\game\\ai4math\\publish\\zhuang-gao-cyclic-index-two\\fresh\\g02\\smooth\\l55verify.md)"),
    ],
  },
  {
    id: "codex-ksecond",
    sessionId: "01a00b34-4c1c-7281-a1c9-6aea10c500cd",
    agentPath: "/root/ksecond",
    nickname: "Descartes",
    round: 52,
    status: "completed",
    summary: "PROVED_UNIFORM：所有奇数 k≥9 的 smooth 必要 miss 系统为空。",
    sourceNode: "ksecond",
    targetNode: "ksecond-verify",
    messages: [
      message("codex-ksecond", 1, "Descartes", "commentary", "2026-08-16T19:34:52Z", "我会按指定边界独立研究：只在目标目录读取三份指定证据（其中原始输出仅取 §6/§7），并先按项目连续性规则核对外置记忆；不会访问 `C:\\canglan\\`，也不会查看其他智能体目录。数学证明任务会使用 `math-theorem` 工作流，并只写入 `fresh/g02/smooth/ksecond.md`。"),
      message("codex-ksecond", 2, "Descartes", "final", "2026-08-16T19:41:53Z", "`PROVED_UNIFORM`\n\n已完成并写入：\n\n[ksecond.md](C:\\game\\ai4math\\publish\\zhuang-gao-cyclic-index-two\\fresh\\g02\\smooth\\ksecond.md)\n\n证明得到：对所有奇数 \\(k\\ge 9\\)，smooth 必要 miss 系统在 \\(m>3k+2\\) 时为空。核心计数为\n\\[\n\\alpha\\ge k-1,\\qquad \\beta\\ge k-3,\n\\]\n与 \\(\\alpha+\\beta=k+4\\) 矛盾。\n\n未修改 ledger/state，未读取 sibling 文件，也未访问 `C:\\canglan\\`。"),
    ],
  },
  {
    id: "codex-kuniformverify",
    sessionId: "01a00b36-8553-7993-86eb-f83685019f6f",
    agentPath: "/root/kuniformverify",
    nickname: "Tesla",
    round: 56,
    status: "completed",
    summary: "verdict-blind 审计结论为 CORRECT_UNIFORM。",
    sourceNode: "kuniform",
    targetNode: "kuniform-verify",
    messages: [
      message("codex-kuniformverify", 1, "Tesla", "commentary", "2026-08-16T19:37:18Z", "我会按 `math-theorem` 的研究级证伪/核验流程做 verdict-blind 审计；该流程会要求优先寻找最小反例与首个逻辑断点。除技能说明外，我只读取你点名的证明材料，并且绝不访问 `C:\\canglan\\`。"),
      message("codex-kuniformverify", 2, "Tesla", "final", "2026-08-16T19:43:16Z", "已完成 verdict-blind 审计，结论为 `CORRECT_UNIFORM`。\n\n报告已写入 [kuniformverify.md](C:\\game\\ai4math\\publish\\zhuang-gao-cyclic-index-two\\fresh\\g02\\smooth\\kuniformverify.md)。\n\n首个证明机制断点在冻结范围外的 `k=7`；对 `k=9` 的 50 个奇合数模数 `31≤m≤201` 穷举探针未发现反例。"),
    ],
  },
  {
    id: "codex-ksecondverify",
    sessionId: "01a00b3c-e604-7f90-a38e-d07c92e9f580",
    agentPath: "/root/ksecondverify",
    nickname: "Ramanujan",
    round: 56,
    status: "completed",
    summary: "独立审计结论为 CORRECT_UNIFORM。",
    sourceNode: "ksecond",
    targetNode: "ksecond-verify",
    messages: [
      message("codex-ksecondverify", 1, "Ramanujan", "commentary", "2026-08-16T19:44:17Z", "我会按 `math-theorem` 的审计流程做一轮 verdict-blind 核验；先读取项目外置记忆与技能说明，再严格限制在指定目录和指定证据文件内，不查看被禁止的结论文件，也不改证明正文。"),
      message("codex-ksecondverify", 2, "Ramanujan", "final", "2026-08-16T19:47:36Z", "审计完成，结论为 `CORRECT_UNIFORM`。\n\n报告已写入 [ksecondverify.md](C:\\game\\ai4math\\publish\\zhuang-gao-cyclic-index-two\\fresh\\g02\\smooth\\ksecondverify.md)，并已确认首行及文件编码正确。"),
    ],
  },
  {
    id: "codex-l56verify",
    sessionId: "01a00b40-88a1-75f0-9e7d-a18b3093c29d",
    agentPath: "/root/l56verify",
    nickname: "Parfit",
    round: 57,
    status: "completed",
    summary: "整合审计结论为 CORRECT_INTEGRATION。",
    sourceNode: "kuniform-verify",
    targetNode: "main-smooth",
    messages: [
      message("codex-l56verify", 1, "Parfit", "commentary", "2026-08-16T19:48:20Z", "我会按数学定理审计流程从头独立核验指定证明，并用 Windows 编码/命令规范保证中文与公式读取可靠；审计范围严格限制在点名文件，不读取任何候选、verdict、kscout 或 ledger 结论。"),
      message("codex-l56verify", 2, "Parfit", "final", "2026-08-16T19:57:40Z", "已完成。结论为 `CORRECT_INTEGRATION`，审计文件：\n\n[fresh/g02/smooth/l56verify.md](C:\\game\\ai4math\\publish\\zhuang-gao-cyclic-index-two\\fresh\\g02\\smooth\\l56verify.md)\n\n未发现关键缺口；全 fixed-family 拼接覆盖完整，且未越界到其他 selected atoms、high-reflection 或 Gao。"),
    ],
  },
  {
    id: "codex-t3two",
    sessionId: "01a00b44-433f-70f2-85f3-ed47eeb868f5",
    agentPath: "/root/t3two",
    nickname: "Hubble",
    round: 84,
    status: "completed",
    summary: "STRICT_COMPRESSION：建立统一 cross-factor 双奇偶必要 miss 系统。",
    sourceNode: "t3p11",
    targetNode: "t3-adversary",
    messages: [
      message("codex-t3two", 1, "Hubble", "commentary", "2026-08-16T19:52:17Z", "我会用 math-theorem 的证明/证伪流程处理这条统一支路；只读取你列出的材料，且不会进入 `C:\\canglan\\`。重点先核验 prefix-sum complement 计数到底依赖 selected factor 还是 companion 的 parity-lift 性质。"),
      message("codex-t3two", 2, "Hubble", "final", "2026-08-16T19:58:11Z", "已完成，结果为 `STRICT_COMPRESSION`，工件写入：\n\n[t3two.md](C:\\game\\ai4math\\publish\\zhuang-gao-cyclic-index-two\\fresh\\g02\\t3\\t3two.md)\n\n主要结果：\n\n- 建立统一 cross-factor 双奇偶必要 miss 系统。\n- 证明 prefix-complement 计数只需 `F'` 原子性，不需要 `F'` parity-lift 假设。\n- 严格排除：\n  - `m=21, k<=11`\n  - `m=23, k<=7`\n  - `m=25, k<=3`\n- 第一精确断点是：需进一步控制两组 parity-target overlap，或使用完整双侧卷积谱；`r01kuniform.md` 的特殊等差行结构不能直接迁移。"),
    ],
  },
  {
    id: "codex-l57verify",
    sessionId: "01a00b49-9787-7833-a280-3517394dcf58",
    agentPath: "/root/l57verify",
    nickname: "Godel",
    round: 57,
    status: "failed",
    summary: "CRITICAL_GAPS：k=5 的平行与反平行方向未覆盖。",
    sourceNode: "ksecond-verify",
    targetNode: "main-smooth",
    messages: [
      message("codex-l57verify", 1, "Godel", "commentary", "2026-08-16T19:58:10Z", "我会按 `math-theorem` 的严格核验流程做只读审计，并用中文输出；审计范围严格限制在指定项目目录与列出的证据入口，不接触 `C:\\canglan\\`，也不读取被禁止的 verdict/ledger 文件。技能要求会影响我的操作：先完整读取相关规范，再逐条建立“主张—引用—蕴含方向—参数覆盖”核验表，最后只写指定的 `l57verify.md`。"),
      message("codex-l57verify", 2, "Godel", "final", "2026-08-16T20:00:48Z", "审计完成，结论为 `CRITICAL_GAPS`。\n\n关键缺口：L53 仅证明 `k=5` 的非平行 smooth 情形，未覆盖平行与反平行方向，因而整合稿的双反射穷尽结论尚不成立。\n\n报告：[l57verify.md](C:\\game\\ai4math\\publish\\zhuang-gao-cyclic-index-two\\fresh\\g02\\smooth\\l57verify.md)"),
    ],
  },
  {
    id: "codex-t3twoverify",
    sessionId: "01a00b4b-90d7-72f1-9b57-b991429cde71",
    agentPath: "/root/t3twoverify",
    nickname: "Pascal",
    round: 85,
    status: "completed",
    summary: "独立对抗审计结论为 CORRECT_STRICT_COMPRESSION。",
    sourceNode: "t3-adversary",
    targetNode: "main-quarantine",
    messages: [
      message("codex-t3twoverify", 1, "Pascal", "commentary", "2026-08-16T20:00:15Z", "我会按 `math-theorem` 的审计流程做一次独立、只读核验；严格限定在指定项目目录内，不查看 sibling/worker verdict，也不触碰 `C:\\canglan\\`。最终只写 `fresh/g02/t3/t3twoverify.md`，不修证明。"),
      message("codex-t3twoverify", 2, "Pascal", "final", "2026-08-16T20:03:13Z", "已完成独立对抗审计，结论为 `CORRECT_STRICT_COMPRESSION`。\n\n审计文件：[t3twoverify.md](C:\\game\\ai4math\\publish\\zhuang-gao-cyclic-index-two\\fresh\\g02\\t3\\t3twoverify.md)"),
    ],
  },
  {
    id: "codex-t3twocanon",
    sessionId: "01a00b50-9ee8-7e42-afb7-26ebf1bf239b",
    agentPath: "/root/t3twocanon",
    nickname: "Mill",
    round: 86,
    status: "completed",
    summary: "新鲜一致性审计结论为 CORRECT_INTEGRATION。",
    sourceNode: "t3-adversary",
    targetNode: "main-quarantine",
    messages: [
      message("codex-t3twocanon", 1, "Mill", "commentary", "2026-08-16T20:05:46Z", "我会按 math-theorem 审计流程检查这份结构引理，只在指定发布目录内读取列出的材料，并仅写 `fresh/g02/t3/t3twocanon.md`。技能要求会影响核验方式：我会把量词、边界情形与“首断点”逐项当作可证伪断言检查。"),
      message("codex-t3twocanon", 2, "Mill", "final", "2026-08-16T20:08:18Z", "完成新鲜一致性/整合审计并写入：\n\n[fresh/g02/t3/t3twocanon.md](C:\\game\\ai4math\\publish\\zhuang-gao-cyclic-index-two\\fresh\\g02\\t3\\t3twocanon.md)\n\n结论为 `CORRECT_INTEGRATION`：可晋升为严格结构压缩/closed-strip lemma；`(M)`、`(P)`、量词、边界及首断点均正确，但明确不得表述为全 `t=3` 闭合。"),
    ],
  },
  {
    id: "codex-t3m21verify",
    sessionId: "01a00b56-f2cc-7053-aa68-8b358f1ca200",
    agentPath: "/root/t3m21verify",
    nickname: "Russell",
    round: 86,
    status: "completed",
    summary: "STATUS: CORRECT；两套独立实现和消毒器全部通过。",
    sourceNode: "t3-adversary",
    targetNode: "main-quarantine",
    messages: [
      message("codex-t3m21verify", 1, "Russell", "commentary", "2026-08-16T20:12:49Z", "我会按 `math-theorem` 的研究级复验流程做独立重算；先读取该技能的完整规范及项目外置状态，再严格限制到指定项目目录，冻结独立实现后才与 `t3m21a` 报告对照。不会访问 `C:\\canglan\\`，也不会停止任何共享任务。"),
      message("codex-t3m21verify", 2, "Russell", "final", "2026-08-16T20:22:26Z", "STATUS: CORRECT\n\n独立复验完成：\n\n- 54,264 个六子集里恰有 252 个合法 support。\n- 构成一个仿射轨道，代表 `{0,1,2,4,7,14}`；稳定子均为 1。\n- 5,040 个 support/residue 见证全部通过，且均可取一对反射出现。\n- 两种旋转符号方向均已核对，严格推出 `k≥3` 不可能。\n- `k=1` 明确未闭合。\n- C++、独立 Python 复算及 ASan/UBSan 全部通过。\n- 实现冻结后才读取 `t3m21a/report.md`；未读取其代码或日志，结论完全一致。\n- 未访问 `C:\\canglan\\`，未干预共享任务。\n\n主要工件：[report.md](C:/game/ai4math/publish/zhuang-gao-cyclic-index-two/fresh/g02/RUNS/t3m21b/report.md)；[witnesses.csv](C:/game/ai4math/publish/zhuang-gao-cyclic-index-two/fresh/g02/RUNS/t3m21b/witnesses.csv)；[preflight.md](C:/game/ai4math/publish/zhuang-gao-cyclic-index-two/fresh/g02/RUNS/t3m21b/preflight.md)。"),
    ],
  },
];
