import { useEffect, useMemo, useState } from "react";
import { Activity, CirclePause, Crosshair, Maximize2, Minus, Play, Plus, Search, Settings2 } from "./icons";
import { gaoResearchRuntime } from "./gaoRuntime";
import { NodeInspector } from "./NodeInspector";
import { ResearchGraph } from "./ResearchGraph";
import { useResearchRuntime } from "./useResearchRuntime";

export function ResearchWorkspace() {
  const runtime = gaoResearchRuntime;
  const snapshot = useResearchRuntime(runtime);
  const [selectedNodeId, setSelectedNodeId] = useState("parity");
  const [zoom, setZoom] = useState(0.62);
  const [query, setQuery] = useState("");
  const [elapsed, setElapsed] = useState("00:00:00");

  useEffect(() => {
    if (!snapshot) return;
    const update = () => {
      const seconds = Math.max(0, Math.floor((Date.now() - new Date(snapshot.startedAt).getTime()) / 1000));
      const hours = Math.floor(seconds / 3600).toString().padStart(2, "0");
      const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
      const rest = (seconds % 60).toString().padStart(2, "0");
      setElapsed(`${hours}:${minutes}:${rest}`);
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [snapshot?.startedAt]);

  const nodesById = useMemo(() => new Map(snapshot?.nodes.map((node) => [node.id, node]) ?? []), [snapshot?.nodes]);
  const selectedNode = nodesById.get(selectedNodeId) ?? snapshot?.nodes[0];
  const runningCount = snapshot?.nodes.filter((node) => node.status === "running").length ?? 0;
  const completedCount = snapshot?.nodes.filter((node) => node.status === "completed").length ?? 0;
  const rejectedCount = snapshot?.nodes.filter((node) => node.status === "rejected" || node.status === "failed").length ?? 0;
  const visibleNodes = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!snapshot || !normalized) return snapshot?.nodes ?? [];
    return snapshot.nodes.filter((node) => `${node.title} ${node.subtitle}`.toLowerCase().includes(normalized));
  }, [query, snapshot]);

  if (!snapshot || !selectedNode) {
    return <main className="rk-loading" aria-busy="true"><span /><strong>正在连接研究运行时</strong><small>读取快照与事件流…</small></main>;
  }

  const togglePause = () => void runtime.dispatch({ type: snapshot.status === "paused" ? "resume" : "pause" });
  const runStatusLabel = snapshot.status === "completed" ? "历史回放" : snapshot.status === "failed" ? "运行失败" : snapshot.status === "paused" ? "已暂停" : "运行中";

  return (
    <main className="rk-workspace">
      <a className="rk-skip-link" href="#rk-graph-canvas">跳到研究图</a>
      <header className="rk-topbar">
        <div className="rk-brand"><span className="rk-brand__mark"><Activity size={17} /></span><strong>RK 实时研究</strong></div>
        <div className="rk-run-summary">
          <span className={`rk-run-state rk-run-state--${snapshot.status}`}><i />{runStatusLabel}</span>
          <span>研究轮次 <strong>{Math.max(...snapshot.nodes.map((node) => node.round))}</strong></span>
          <span>运行时长 <strong>{elapsed}</strong></span>
          <span>节点 <strong>{snapshot.nodes.length}</strong></span>
          <span className="rk-summary-success">完成 <strong>{completedCount}</strong></span>
          <span className="rk-summary-active">活动 <strong>{runningCount}</strong></span>
          <span className="rk-summary-danger">否决 <strong>{rejectedCount}</strong></span>
        </div>
        <div className="rk-topbar__actions">
          {snapshot.source === "live" ? <button type="button" className="rk-action rk-action--primary" onClick={togglePause}>
            {snapshot.status === "paused" ? <Play size={15} /> : <CirclePause size={15} />}
            {snapshot.status === "paused" ? "继续运行" : "暂停研究"}
          </button> : null}
          <button type="button" className="rk-icon-button" aria-label="研究设置"><Settings2 size={17} /></button>
        </div>
      </header>

      <section className="rk-commandbar" aria-label="研究图控制">
        <label className="rk-search"><Search size={15} /><span className="rk-visually-hidden">搜索节点</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索节点、路线或引理" /></label>
        <div className="rk-live-note" aria-live="polite"><i />{snapshot.source === "historical" ? `SQLite 历史快照 · 读取 ${snapshot.metrics?.fetchMs.toFixed(0) ?? "—"} ms · 布局 ${snapshot.metrics?.layoutMs.toFixed(0) ?? "—"} ms` : `事件流已连接 · 修订 ${snapshot.revision}`}</div>
        <div className="rk-commandbar__spacer" />
        <button type="button" className="rk-toolbar-button" onClick={() => {
          const active = snapshot.nodes.find((node) => node.status === "running");
          if (active) setSelectedNodeId(active.id);
        }}><Crosshair size={15} />聚焦运行中</button>
        <div className="rk-zoom-controls" aria-label="缩放">
          <button type="button" aria-label="缩小" onClick={() => setZoom((value) => Math.max(0.58, value - 0.08))}><Minus size={15} /></button>
          <span>{Math.round(zoom * 100)}%</span>
          <button type="button" aria-label="放大" onClick={() => setZoom((value) => Math.min(1.2, value + 0.08))}><Plus size={15} /></button>
          <button type="button" aria-label="适合画布" onClick={() => setZoom(0.82)}><Maximize2 size={15} /></button>
        </div>
      </section>

      <div className="rk-main-layout">
        <section className="rk-canvas" id="rk-graph-canvas" aria-label="实时研究树画布">
          {query && visibleNodes.length !== snapshot.nodes.length ? <div className="rk-filter-note">匹配 {visibleNodes.length} 个节点；图中其余节点保持上下文可见。</div> : null}
          <div className="rk-canvas__scaled" style={{ transform: `scale(${zoom})` }}>
            <ResearchGraph nodes={snapshot.nodes} edges={snapshot.edges} selectedNodeId={selectedNode.id} onSelect={setSelectedNodeId} />
          </div>
          <div className="rk-event-toast" key={snapshot.events[0]?.id}>
            <span className="rk-event-toast__dot" />
            <div><strong>{nodesById.get(snapshot.events[0]?.nodeId)?.title ?? "研究事件"}</strong><p>{snapshot.events[0]?.summary}</p></div>
            <time>{snapshot.events[0] ? new Date(snapshot.events[0].at).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }) : ""}</time>
          </div>
        </section>
        <NodeInspector node={selectedNode} edges={snapshot.edges} nodesById={nodesById} />
      </div>
    </main>
  );
}
