import { memo, useDeferredValue, useMemo, useState } from "react";
import { gaoDataset, routeOptions, stageOptions } from "./data";
import { buildStressReport, filterEvents } from "./stressModel";
import type { EvidenceClass, ResearchEvent, ResearchStatus, ResearchThread } from "./types";

type Tab = "map" | "timeline" | "stress" | "github";
const stress = buildStressReport(gaoDataset);

type IconProps = { size?: number };
const glyph = (character: string) => function Glyph({ size = 14 }: IconProps) {
  return <span aria-hidden="true" className="gao-glyph" style={{ width: size, height: size, fontSize: Math.max(10, size - 2) }}>{character}</span>;
};
const Activity = glyph("↯");
const Archive = glyph("□");
const BookOpen = glyph("▤");
const CheckCircle2 = glyph("✓");
const ChevronDown = glyph("⌄");
const CircleAlert = glyph("!");
const CircleDot = glyph("•");
const Clock3 = glyph("◷");
const Filter = glyph("≡");
const GitBranch = glyph("⑂");
const GitCommitHorizontal = glyph("⌁");
const Layers3 = glyph("≋");
const Search = glyph("⌕");
const ShieldCheck = glyph("◇");
const Sparkles = glyph("✦");
const XCircle = glyph("×");

const statusIcon: Record<ResearchStatus, typeof CheckCircle2> = {
  已验证: CheckCircle2,
  已证伪: XCircle,
  提示错误: CircleAlert,
  局部完成: ShieldCheck,
  开放: CircleDot,
  停用: Archive,
};

function StatusPill({ status }: { status: ResearchStatus }) {
  const Icon = statusIcon[status];
  return <span className={`gao-status gao-status--${status}`}><Icon size={13} />{status}</span>;
}

const ThreadCard = memo(function ThreadCard({ thread, selected, onSelect }: {
  thread: ResearchThread;
  selected: boolean;
  onSelect(thread: ResearchThread): void;
}) {
  return (
    <button className={`gao-thread ${selected ? "is-selected" : ""}`} onClick={() => onSelect(thread)}>
      <span className="gao-thread__rail" />
      <span className="gao-thread__copy">
        <span className="gao-thread__eyebrow">{thread.workUnit ? `U${thread.workUnit}` : thread.route}</span>
        <strong>{thread.title}</strong>
        <small>{thread.summary}</small>
      </span>
      <StatusPill status={thread.status} />
    </button>
  );
});

function ProjectMap({ threads, selected, onSelect }: {
  threads: ResearchThread[];
  selected: ResearchThread;
  onSelect(thread: ResearchThread): void;
}) {
  const stages = useMemo(() => stageOptions.map((stage) => ({
    stage,
    threads: threads.filter((thread) => thread.stage === stage),
  })).filter((group) => group.threads.length), [threads]);
  return (
    <div className="gao-map" aria-label="研究线程图">
      {stages.map((group, stageIndex) => (
        <section className="gao-stage" key={group.stage}>
          <header>
            <span className="gao-stage__number">{String(stageIndex + 1).padStart(2, "0")}</span>
            <div><strong>{group.stage}</strong><small>{group.threads.length} 个线程</small></div>
          </header>
          <div className="gao-stage__threads">
            {group.threads.slice(0, 8).map((thread) => (
              <ThreadCard key={thread.id} thread={thread} selected={thread.id === selected.id} onSelect={onSelect} />
            ))}
            {group.threads.length > 8 && <div className="gao-stage__more">另有 {group.threads.length - 8} 个归档线程，可在时间线中检索</div>}
          </div>
        </section>
      ))}
    </div>
  );
}

const EventRow = memo(function EventRow({ event, onOpen }: { event: ResearchEvent; onOpen(id: string): void }) {
  return (
    <button className="gao-event" onClick={() => onOpen(event.threadId)}>
      <span className="gao-event__time">{new Date(event.at).toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" })}</span>
      <span className={`gao-event__dot gao-event__dot--${event.status}`} />
      <span className="gao-event__body"><strong>{event.title}</strong><small>{event.summary}</small></span>
      <span className={`gao-evidence gao-evidence--${event.evidence}`}>{event.evidence}</span>
    </button>
  );
});

function Timeline({ events, onOpen }: { events: ResearchEvent[]; onOpen(id: string): void }) {
  const [limit, setLimit] = useState(60);
  return (
    <div className="gao-timeline">
      <div className="gao-timeline__legend"><span>显示 {Math.min(limit, events.length)} / {events.length}</span><span>列表按段渲染，不一次塞入全部消息</span></div>
      {events.slice(0, limit).map((event) => <EventRow key={event.id} event={event} onOpen={onOpen} />)}
      {limit < events.length && <button className="gao-load" onClick={() => setLimit((value) => value + 60)}>再载入 60 条 <ChevronDown size={15} /></button>}
    </div>
  );
}

function StressPanel() {
  const comparison = [
    ["节点语义", "一次运行步骤", "持久研究线程 + 独立事实状态"],
    ["数百节点", "全量布局、全量卡片", "阶段聚合、按需展开"],
    ["消息", "随会话整段加载", "分段列表 + 搜索延迟"],
    ["成功含义", "运行 completed", "运行、证明、验证三轴分离"],
    ["来源时间", "单一运行时间", "工件 / 任务 / GitHub 并列"],
  ];
  return (
    <div className="gao-stress">
      <div className="gao-callout gao-callout--danger">
        <CircleAlert size={20} />
        <div><strong>结论：原工作流在这组规模上属于产品失效</strong><p>不是声称浏览器必崩；而是图即使画出来也不可读，且每次打开都承担全量布局和完整 React 节点成本。</p></div>
      </div>
      <div className="gao-metrics gao-metrics--stress">
        <div><span>{stress.workflowNodes}</span><small>真实/重建执行步骤</small></div>
        <div><span>{stress.workflowEdges}</span><small>估算连接</small></div>
        <div><span>{stress.rawMessages}</span><small>含压力副本的消息</small></div>
        <div><span>{stress.detailedCardDomEstimate.toLocaleString()}</span><small>DOM 规模估算</small></div>
      </div>
      <div className="gao-table">
        <div className="gao-table__head"><span>维度</span><span>MathVision 原工作流</span><span>本页承载方式</span></div>
        {comparison.map((row) => <div className="gao-table__row" key={row[0]}>{row.map((cell) => <span key={cell}>{cell}</span>)}</div>)}
      </div>
      <div className="gao-notes"><h3>判定依据</h3>{stress.reasons.map((reason) => <p key={reason}><CheckCircle2 size={15} />{reason}</p>)}</div>
      <div className="gao-callout"><ShieldCheck size={20} /><div><strong>分母没有混用</strong><p>720 条“压力副本”只测试列表密度；不计入 132 个真实工作单元，也不改变任何数学状态。</p></div></div>
    </div>
  );
}

function GitHubPanel() {
  return (
    <div className="gao-github">
      <div className="gao-pr">
        <GitCommitHorizontal size={22} />
        <div><small>randomcat4/zhuang-gao-cyclic-index-two · Draft PR</small><strong>#{gaoDataset.pullRequest.number} Audit Gao cyclic-index-two progress through P9</strong><p>{gaoDataset.pullRequest.state} · {gaoDataset.pullRequest.commits} commits · {gaoDataset.pullRequest.changedFiles} files</p></div>
      </div>
      <p className="gao-source-note"><CircleAlert size={15} />提交时间是“证据何时进仓库”，不一定等于数学工作实际发生时间。本页不把它们合并成一个伪精确时间。</p>
      <div className="gao-commit-list">
        {gaoDataset.github.slice().reverse().map((item) => <div key={item.commit}><code>{item.commit}</code><span>{item.title}</span><time>{new Date(item.at).toLocaleString("zh-CN")}</time></div>)}
      </div>
    </div>
  );
}

function Inspector({ thread }: { thread: ResearchThread }) {
  return (
    <aside className="gao-inspector">
      <header><span>{thread.route}</span><StatusPill status={thread.status} /><h2>{thread.title}</h2><p>{thread.summary}</p></header>
      <section><h3>三条状态轴</h3><dl><div><dt>数学范围</dt><dd>{thread.mathematicalScope}</dd></div><div><dt>证明状态</dt><dd>{thread.proofState}</dd></div><div><dt>验证状态</dt><dd>{thread.verificationState}</dd></div></dl></section>
      {thread.blocker && <section className="gao-inspector__blocker"><h3>当前断点</h3><p>{thread.blocker}</p></section>}
      <section><h3>时间与来源</h3>{thread.times.map((time) => <div className="gao-time" key={`${time.source}-${time.at}`}><Clock3 size={14} /><div><strong>{time.source}</strong><time>{new Date(time.at).toLocaleString("zh-CN")}</time><small>{time.detail}</small></div></div>)}</section>
      <section><h3>依赖</h3><div className="gao-tags">{thread.dependencies.length ? thread.dependencies.map((id) => <span key={id}>{id}</span>) : <small>根节点</small>}</div></section>
      <section><h3>证据工件</h3>{thread.artifacts.map((artifact) => <p className="gao-artifact" key={artifact}><BookOpen size={14} />{artifact}</p>)}</section>
    </aside>
  );
}

export function GaoWorkflowPage() {
  const [tab, setTab] = useState<Tab>("map");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [route, setRoute] = useState("全部路线");
  const [includeLoad, setIncludeLoad] = useState(false);
  const [selected, setSelected] = useState<ResearchThread>(gaoDataset.threads.at(-1) ?? gaoDataset.threads[0]);
  const threads = useMemo(() => gaoDataset.threads.filter((thread) => {
    const matchesRoute = route === "全部路线" || thread.route === route;
    const needle = deferredQuery.trim().toLocaleLowerCase();
    const matchesQuery = !needle || `${thread.title} ${thread.summary} ${thread.route} ${thread.stage}`.toLocaleLowerCase().includes(needle);
    return matchesRoute && matchesQuery;
  }), [deferredQuery, route]);
  const events = useMemo(() => {
    const allowed = new Set(threads.map((thread) => thread.id));
    const source = includeLoad ? [...gaoDataset.events, ...gaoDataset.loadReplicas] : gaoDataset.events;
    return filterEvents(source.filter((event) => allowed.has(event.threadId)), deferredQuery).slice().reverse();
  }, [deferredQuery, includeLoad, threads]);
  const openThread = (id: string) => {
    const found = gaoDataset.threads.find((thread) => thread.id === id);
    if (found) setSelected(found);
  };
  const tabs: Array<[Tab, string, (props: IconProps) => React.JSX.Element]> = [["map", "研究地图", GitBranch], ["timeline", "过程时间线", Activity], ["stress", "原工作流压力", Layers3], ["github", "GitHub 时间戳", GitCommitHorizontal]];
  return (
    <div className="gao-shell">
      <aside className="gao-nav">
        <div className="gao-nav__mark">R</div>
        <nav><button className="is-active" title="研究"><Sparkles size={19} /></button><button title="资料"><BookOpen size={19} /></button><button title="归档"><Archive size={19} /></button></nav>
        <div className="gao-avatar">本</div>
      </aside>
      <aside className="gao-explorer">
        <header><span>RESEARCH EXPLORER</span><button><Filter size={14} /></button></header>
        <div className="gao-project-title"><CircleDot size={15} /><div><strong>Gao cyclic index two</strong><small>本地静态研究快照</small></div></div>
        <div className="gao-tree">
          {stageOptions.map((stage) => <button key={stage} onClick={() => { setQuery(stage); setTab("map"); }}><span>⌄</span>{stage}<small>{gaoDataset.threads.filter((thread) => thread.stage === stage).length}</small></button>)}
        </div>
        <div className="gao-explorer__foot"><strong>证据边界</strong><p>原始证据、账本重建和压力副本始终分开。</p></div>
      </aside>
      <main className="gao-main">
        <header className="gao-topbar">
          <div><small>高循环指数二问题 · 研究过程回放</small><h1>从 132 个工作单元到精确阻塞</h1></div>
          <div className="gao-topbar__status"><span>母题状态</span><strong>仍未解决</strong></div>
        </header>
        <section className="gao-summary">
          <div><span>{gaoDataset.realWorkUnits}</span><small>真实工作单元</small></div>
          <div><span>{gaoDataset.sourceRounds.canonical}</span><small>主研究轮次</small></div>
          <div><span>{gaoDataset.sourceRounds.g02}</span><small>G02 延伸轮次</small></div>
          <div><span>{gaoDataset.pullRequest.commits}</span><small>PR 提交</small></div>
          <p><ShieldCheck size={16} />局部引理有进展；双反射 companion、无限同步规避类和小 k 窗口仍开放。</p>
        </section>
        <div className="gao-controls">
          <div className="gao-tabs">{tabs.map(([id, label, Icon]) => <button key={id} className={tab === id ? "is-active" : ""} onClick={() => setTab(id)}><Icon size={15} />{label}</button>)}</div>
          <label className="gao-search"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索路线、引理、反例…" /></label>
          <label className="gao-select"><select value={route} onChange={(event) => setRoute(event.target.value)}>{routeOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
          {tab === "timeline" && <label className="gao-toggle"><input type="checkbox" checked={includeLoad} onChange={(event) => setIncludeLoad(event.target.checked)} /><span />加入 720 条压力副本</label>}
        </div>
        <div className="gao-workspace">
          <section className="gao-canvas">
            {tab === "map" && <ProjectMap threads={threads} selected={selected} onSelect={setSelected} />}
            {tab === "timeline" && <Timeline events={events} onOpen={openThread} />}
            {tab === "stress" && <StressPanel />}
            {tab === "github" && <GitHubPanel />}
          </section>
          <Inspector thread={selected} />
        </div>
      </main>
    </div>
  );
}
