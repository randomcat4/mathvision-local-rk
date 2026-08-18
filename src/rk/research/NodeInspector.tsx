import { useEffect, useState } from "react";
import { Braces, CheckCircle2, FileCode2, FileText, MessageSquareText, Network, ScrollText } from "./icons";
import type { ResearchEdge, ResearchNode } from "./types";

type InspectorTab = "chat" | "reasoning" | "artifacts";

const authorLabel = {
  MAIN: "主实例",
  SUB: "子实例",
  PROVER: "证明器",
  REVIEW: "审查",
  SYSTEM: "系统",
};

export function NodeInspector({ node, edges, nodesById }: {
  node: ResearchNode;
  edges: ResearchEdge[];
  nodesById: Map<string, ResearchNode>;
}) {
  const [tab, setTab] = useState<InspectorTab>("chat");
  const [artifactView, setArtifactView] = useState<{ name: string; content: string; loading: boolean; error: string | null } | null>(null);
  const upstream = edges.filter((edge) => edge.to === node.id).map((edge) => nodesById.get(edge.from)).filter(Boolean) as ResearchNode[];
  const downstream = edges.filter((edge) => edge.from === node.id).map((edge) => nodesById.get(edge.to)).filter(Boolean) as ResearchNode[];

  useEffect(() => setArtifactView(null), [node.id]);

  const openArtifact = (name: string, path?: string) => {
    if (!path) return;
    setArtifactView({ name, content: "", loading: true, error: null });
    void fetch(`/__local-md?path=${encodeURIComponent(path)}`)
      .then(async (response) => {
        if (!response.ok) throw new Error(await response.text());
        setArtifactView({ name, content: await response.text(), loading: false, error: null });
      })
      .catch((error: unknown) => setArtifactView({
        name,
        content: "",
        loading: false,
        error: error instanceof Error ? error.message : "无法读取这个 Markdown 工件。",
      }));
  };

  return (
    <aside className="rk-inspector" aria-label="研究节点详情">
      <header className="rk-inspector__header">
        <div>
          <span className={`rk-inspector__state rk-inspector__state--${node.status}`}>{node.status === "running" ? "运行中" : node.status === "completed" ? "已完成" : node.status === "paused" ? "已暂停" : node.status === "rejected" ? "已否决" : "等待中"}</span>
          <h2>{node.title}</h2>
          <p>{node.subtitle}</p>
        </div>
        <div className="rk-inspector__progress" aria-label={`进度 ${node.progress}%`}>
          <strong>{node.progress}%</strong><span><i style={{ transform: `scaleX(${node.progress / 100})` }} /></span>
        </div>
      </header>

      <dl className="rk-inspector__facts">
        <div><dt>类型</dt><dd>{node.kind === "agent" ? "子实例" : node.kind === "gate" ? "条件门" : node.kind === "join" ? "依赖汇合" : "研究工作项"}</dd></div>
        <div><dt>轮次</dt><dd>{node.round}</dd></div>
        <div><dt>运行时长</dt><dd>{node.runtime}</dd></div>
        <div><dt>依赖</dt><dd>{node.dependencies ? `${node.dependencies.ready}/${node.dependencies.total}` : `${upstream.length} 项`}</dd></div>
      </dl>

      <nav className="rk-inspector__tabs" aria-label="节点内容">
        <button type="button" className={tab === "chat" ? "is-active" : ""} onClick={() => setTab("chat")}><MessageSquareText size={15} />聊天记录</button>
        <button type="button" className={tab === "reasoning" ? "is-active" : ""} onClick={() => setTab("reasoning")}><Braces size={15} />推理摘要</button>
        <button type="button" className={tab === "artifacts" ? "is-active" : ""} onClick={() => setTab("artifacts")}><ScrollText size={15} />工件</button>
      </nav>

      <div className="rk-inspector__content">
        {tab === "chat" ? <section className="rk-transcript" aria-live="polite">
          {node.messages.length ? node.messages.map((entry) => (
            <article key={entry.id} className={`rk-message rk-message--${entry.author.toLowerCase()}`}>
              <header><strong>{entry.authorLabel ?? authorLabel[entry.author]}</strong><time>{new Date(entry.at).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}</time></header>
              <p>{entry.content}</p>
            </article>
          )) : <div className="rk-empty">该工作项尚未产生聊天记录。</div>}
        </section> : null}

        {tab === "reasoning" ? <section className="rk-reasoning">
          <h3>当前推理</h3>
          <p>{node.reasoning}</p>
          <div className="rk-reasoning__check"><CheckCircle2 size={16} /><span>该摘要属于节点状态，不替代原始聊天与验证工件。</span></div>
        </section> : null}

        {tab === "artifacts" ? <section className="rk-artifacts">
          {node.artifacts.length ? node.artifacts.map((artifact) => (
            <button type="button" key={artifact.id} className="rk-artifact" disabled={!artifact.path} onClick={() => openArtifact(artifact.name, artifact.path)}>
              {artifact.kind === "lean" ? <FileCode2 size={17} /> : <FileText size={17} />}
              <span><strong>{artifact.name}</strong><small>{artifact.summary}</small></span>
            </button>
          )) : <div className="rk-empty">该工作项尚未形成工件。</div>}
        </section> : null}
      </div>

      <section className="rk-relations">
        <h3><Network size={15} />上游与下游</h3>
        <div><strong>上游</strong>{upstream.length ? upstream.map((item) => <span key={item.id}>{item.title}</span>) : <small>无</small>}</div>
        <div><strong>下游</strong>{downstream.length ? downstream.map((item) => <span key={item.id}>{item.title}</span>) : <small>无</small>}</div>
      </section>
      {artifactView ? <div className="rk-artifact-view" role="dialog" aria-modal="true" aria-label={artifactView.name}>
        <header><strong>{artifactView.name}</strong><button type="button" onClick={() => setArtifactView(null)} aria-label="关闭工件">×</button></header>
        {artifactView.loading ? <p>正在读取工件…</p> : null}
        {artifactView.error ? <p className="rk-artifact-view__error">{artifactView.error}</p> : null}
        {artifactView.content ? <pre>{artifactView.content}</pre> : null}
      </div> : null}
    </aside>
  );
}
