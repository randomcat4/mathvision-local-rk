const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["assets/PdfCanvasViewer-jW4Ex2Pm.js", "assets/index-BM3ZINIl.js", "assets/index-DCmpUGyQ.css", "assets/usePdfDocument-D5PFNoxR.js", "assets/pdfDocument-V1r75ju6.js", "assets/PdfCanvasViewerControls-CKiN42mP.js", "assets/katex.min-ADdKj7O-.js", "assets/katex-CfVKi3_s.css", "assets/chevron-left-BwEFN4zp.js", "assets/MarkdownHighlights-C-ZhT8z1.js", "assets/TextField-D8vc_sXz.js", "assets/index-Yb6ONXKu.js", "assets/zoom-in-uCZ29dqq.js", "assets/LoadingSection-wWBu2CqJ.js", "assets/Alert-DnFVD8li.js"]) => i.map(i => d[i]);
import { g as j, j as e, B as _Component, T as _Component2, aw as q, r as g, V as Q, X as _Component5, _ as T, C as M, $ as re } from "./index-BM3ZINIl.js";
import { b as te, P, M as oe, H as N, g as se, a as ie, c as ae, d as ne, e as le, i as _Component9, f as ce, h as pe, B as _Component7, C as _Component8, j as me, k as A, l as ue, m as ge, s as b, n as fe } from "./graphDialogStyles-BtRC286U.js";
import { a as $ } from "./useAttachmentContent-15uaQfvd.js";
import { a as L } from "./Markdown-Dh8LhaRc.js";
import "./LatexProjectFolderExpansionContext-DKFyp-6E.js";
import "./source-editor-CGMzw50e.js";
import "./LatexWorkspaceCanvas-DKG1oD4d.js";
import "./writeupPdfCompileQueue-lQRkz9rt.js";
import { M as O, D as _Component1, a as _Component6, b as _Component0 } from "./MChip-DiH8NXBU.js";
import { f as z, g as E } from "./UserMessage-DN7iPijg.js";
import { D } from "./Divider-BcuihGce.js";
import { T as _Component3, a as H } from "./SidebarTreeConnector-DsRNfBIo.js";
import { C as _Component4 } from "./circle-check-B9fquZbm.js";
import { F as Pe } from "./OpenInNewRounded-D-7V5TzF.js";
import "./useResizablePanelWidth-DfMwOMGi.js";
import "./useResizablePanelValue-D_NwbF9E.js";
import "./PdfCanvasViewerControls-CKiN42mP.js";
import "./katex.min-ADdKj7O-.js";
import "./chevron-left-BwEFN4zp.js";
import "./MarkdownHighlights-C-ZhT8z1.js";
import "./TextField-D8vc_sXz.js";
import "./index-Yb6ONXKu.js";
import "./zoom-in-uCZ29dqq.js";
import "./LoadingSection-wWBu2CqJ.js";
import "./useQueuedWriteupPdf-CoC8uXix.js";
import "./useLatexQueries-DBpKOPUv.js";
import "./useQuery-DM2qiUYb.js";
import "./search-CE89ACSU.js";
import "./useMutation-C1SgG9wr.js";
import "./useInfiniteQuery-CdNTitqC.js";
import "./cache-BNzcfneg.js";
import "./usePdfObjectUrl-Cd7ol8-S.js";
import "./panel-left-open-BNgbA-Qm.js";
import "./panel-left-close-BNWX01EL.js";
import "./Alert-DnFVD8li.js";
import "./attachmentsApi-BHgxfYft.js";
import "./authFetch-DXjDztUP.js";
import "./CopyButton-BcOsqrNJ.js";
import "./index-DzMT-bSF.js";
import "./useIsMobile-SdtLFChL.js";
import "./file-input-BGVdGffy.js";
import "./ListItemIcon-CaLBil7Q.js";
import "./file-plus-_oOf3yl8.js";
import "./upload-Df6L5ERk.js";
import "./latexWorkspacePanelVisibility-BotBQ6b-.js";
import "./code-xml-DmfSENe3.js";
import "./play-3zl_nde-.js";
import "./save-Bre0AB4-.js";
import "./square-D0gg5_xj.js";
import "./pencil-DHia85Iy.js";
import "./history-7HBMn_Gr.js";
import "./triangle-alert-C5eP7BuB.js";
import "./index-D0EP5Hzg.js";
import "./usePdfDocument-D5PFNoxR.js";
import "./pdfDocument-V1r75ju6.js";
import "./minimize-2-DiBwEVni.js";
import "./maximize-2-B07z4fzS.js";
import "./eraser-B4pclN2p.js";
import "./latexProjectChatMessages-Cty9Jluh.js";
import "./arrow-right-DvMAP92m.js";
import "./quote-DYxVpGUS.js";
import "./grip-vertical-DCI0_0hx.js";
import "./assistantStructuredResponseLazy-CCAemx3W.js";
import "./ThinkingElapsedLabel-DKCKD95O.js";
import "./streamNdjson-sRiOwtSP.js";
import "./MessageBubble-DqxHrk03.js";
import "./MessageAttachments-nUg1LIry.js";
import "./AttachmentFileName-BwwbwxPg.js";
import "./latexAttachmentPreviewLazy-DKgWJirC.js";
import "./latexAttachment-C8umpCPo.js";
import "./Card-Bf0WPnf4.js";
import "./AssistantMessageMetadata-BCGLTOhc.js";
import "./chatsApi-Ck-JYICO.js";
import "./WriteupDisplayControls-E0ZIJhIu.js";
import "./circle-check-big-D9HEGJKD.js";
import "./NextStepsResponse-NcFjw3w7.js";
import "./send-CDdCro4v.js";
import "./FormGroup-BsLWbxpH.js";
import "./FormControlLabel-CQvCddOM.js";
import "./QuotedSelection-JUU54BvY.js";
import "./file-code-corner-DV79SyC0.js";
const K = "proChatWorkflowNode";
const V = 248;
const B = 136;
const C = 16;
const Ce = new Set(["review_join", "ready_gate"]);
const y = r => Ce.has(r.kind);
const S = r => r.split("_").filter(Boolean).map(t => `${t.charAt(0).toUpperCase()}${t.slice(1)}`).join(" ");
const Se = r => r === "failed" ? "error" : r === "completed" ? "success" : r === "running" ? "info" : r === "skipped" ? "secondary" : "default";
const U = (r, t) => t === "failed" ? r.palette.error.main : t === "completed" ? r.palette.success.main : t === "running" ? r.palette.info.main : r.palette.primary.main;
const ke = (r, t) => a => {
  const s = U(a, r);
  return {
    width: V,
    height: B,
    display: "flex",
    flexDirection: "column",
    gap: a.spacing(0.7),
    padding: a.spacing(1.2),
    borderRadius: a.shape.borderRadiusPx,
    border: `${t ? 2 : 1}px solid ${j(s, t ? 0.92 : 0.44)}`,
    color: a.palette.text.primary,
    background: `linear-gradient(135deg, ${j(s, 0.13)}, ${j(a.palette.background.paper, 0.94)})`,
    boxShadow: t ? `0 0 0 3px ${j(s, 0.16)}, 0 18px 36px ${j(s, 0.2)}` : `0 12px 24px ${j(a.palette.text.primary, 0.08)}`,
    cursor: "pointer"
  };
};
const De = r => t => {
  const a = U(t, r);
  return {
    width: C,
    height: C,
    boxSizing: "border-box",
    borderRadius: "50%",
    border: `2px solid ${j(a, 0.42)}`,
    backgroundColor: j(a, 0.08),
    cursor: "default"
  };
};
const Ne = r => ({
  minWidth: 0,
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) max-content",
  alignItems: "center",
  gap: r.spacing(0.75)
});
const _e = r => ({
  marginTop: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: r.spacing(0.7)
});
const I = (r, t) => {
  const a = new Map(r.map(i => [i.id, i]));
  const s = new Map();
  const p = new Set();
  for (const i of r.filter(c => c.kind === "review_join")) {
    const c = t.filter(x => x.source === i.id);
    if (c.length !== 1) {
      throw new Error(`Pro chat review join '${i.id}' must have exactly one outgoing edge.`);
    }
    const o = a.get(c[0].target);
    if ((o == null ? undefined : o.kind) !== "ready_gate") {
      throw new Error(`Pro chat review join '${i.id}' must connect directly to a ready gate.`);
    }
    const w = t.filter(x => x.target === o.id);
    if (w.length !== 1 || w[0].source !== i.id) {
      throw new Error(`Pro chat ready gate '${o.id}' must have exactly one incoming review join edge.`);
    }
    if (o.roundIndex !== i.roundIndex) {
      throw new Error(`Pro chat review join '${i.id}' and ready gate '${o.id}' belong to different rounds.`);
    }
    if (p.has(o.id)) {
      throw new Error(`Pro chat ready gate '${o.id}' is connected to multiple review joins.`);
    }
    s.set(i.id, o.id);
    p.add(o.id);
  }
  const h = r.filter(i => !s.has(i.id)).map(i => p.has(i.id) ? {
    ...i,
    label: "Review readiness gate",
    subtitle: "Review join and readiness evaluation"
  } : i);
  const u = new Set(h.map(i => i.id));
  const l = new Set();
  const m = [];
  for (const i of t) {
    const c = s.get(i.source) ?? i.source;
    const o = s.get(i.target) ?? i.target;
    if (c === o || !u.has(c) || !u.has(o)) {
      continue;
    }
    const w = `${c}\0${o}\0${i.condition ?? ""}`;
    if (!l.has(w)) {
      l.add(w);
      m.push({
        ...i,
        source: c,
        target: o
      });
    }
  }
  return {
    nodes: h,
    edges: m
  };
};
const Re = ({
  data: r,
  selected: t
}) => {
  const {
    incomingCount: a,
    node: s,
    outgoingCount: p
  } = r;
  const h = z(s);
  if (y(s)) {
    return <_Component sx={De(s.status)} title={`${s.label} · ${S(s.status)}`}><N type="target" position={P.Left} /><N type="source" position={P.Right} /></_Component>;
  } else {
    return <_Component sx={ke(s.status, t)}><N type="target" position={P.Left} /><_Component sx={Ne}><_Component2 variant="graphNodeTitle" noWrap={true}>{s.label}</_Component2><O label={S(s.status)} color={Se(s.status)} size="xs" /></_Component><_Component2 variant="caption" color="textSecondary" noWrap={true}>{E(s) || S(s.kind)}</_Component2><_Component sx={_e}><_Component2 variant="caption" color="textSecondary" noWrap={true}>{s.roundIndex === null ? "Run" : `Round ${s.roundIndex}`}</_Component2>{h && <O label={`Elapsed ${h}`} size="xs" />}<_Component2 variant="caption" color="textSecondary" noWrap={true}>in {a} | out {p}</_Component2></_Component><N type="source" position={P.Right} /></_Component>;
  }
};
const Te = {
  [K]: Re
};
const $e = (r, t) => {
  const a = I(r, t);
  const s = new Map(a.nodes.filter(y).map(l => [l.id, {
    width: C,
    height: C
  }]));
  const {
    incomingCounts: p,
    outgoingCounts: h,
    positions: u
  } = te({
    nodes: a.nodes,
    edges: a.edges,
    nodeWidth: V,
    nodeHeight: B,
    nodeSizes: s,
    errorLabel: "Pro chat workflow"
  });
  return a.nodes.map(l => {
    const m = u.get(l.id);
    const i = y(l);
    if (!m) {
      throw new Error(`Pro chat workflow node '${l.id}' has no position.`);
    }
    return {
      id: l.id,
      type: K,
      position: m,
      sourcePosition: P.Right,
      targetPosition: P.Left,
      data: {
        node: l,
        incomingCount: p.get(l.id) ?? 0,
        outgoingCount: h.get(l.id) ?? 0
      },
      draggable: false,
      focusable: !i,
      selectable: !i,
      style: i ? {
        width: C,
        height: C
      } : undefined
    };
  });
};
const Ee = (r, t, a) => I(r, t).edges.map((p, h) => ({
  id: `${p.source}-${p.target}-${h}`,
  source: p.source,
  target: p.target,
  type: "smoothstep",
  label: p.condition ?? undefined,
  markerEnd: {
    type: oe.ArrowClosed,
    color: j(a.palette.text.primary, 0.68)
  },
  style: {
    stroke: j(a.palette.text.primary, 0.52),
    strokeWidth: 2
  }
}));
const Ie = g.lazy(() => re(() => import("./PdfCanvasViewer-jW4Ex2Pm.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])).then(r => ({
  default: r.PdfCanvasViewer
})));
const _ = ({
  label: r,
  value: t
}) => <_Component sx={fe}><_Component2 variant="contextMetricLabel" color="textSecondary" noWrap={true}>{r}</_Component2><_Component2 variant="contextMetricValue" color="textPrimary" noWrap={true}>{t}</_Component2></_Component>;
const We = ({
  attachmentId: r,
  title: t
}) => {
  const a = $(r);
  if (a.objectUrl) {
    return <_Component sx={{
      height: "50rem",
      overflow: "hidden"
    }}><g.Suspense fallback={<_Component sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}><M size={28} /></_Component>}><Ie ariaLabel={`Current search ${t} preview`} loadErrorMessage={`Could not load the round ${t.toLowerCase()}.`} pdfUrl={a.objectUrl} renderErrorMessage={`Could not render the round ${t.toLowerCase()}.`} scale={1} sx={{
          height: "100%"
        }} /></g.Suspense></_Component>;
  } else {
    return <_Component sx={{
      height: "12rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 1
    }}>{a.isLoading && <M size={28} />}<_Component2 variant="body2" color={a.error ? "error" : "textSecondary"} align="center">{!r && "No current research PDF is available."}{r && a.error && `Could not load the current research ${t.toLowerCase()}.`}{r && !a.error && `Preparing the current research ${t.toLowerCase()} preview...`}</_Component2></_Component>;
  }
};
const Fe = ({
  roundIndex: r,
  roundOutput: t
}) => {
  const a = t == null ? undefined : t.artifacts.answerTex.pdfAttachmentId;
  const s = t == null ? undefined : t.artifacts.researchNotesTex.pdfAttachmentId;
  const [p, h] = g.useState("answer");
  const u = p === "answer" && !a ? "researchNotes" : p;
  const l = $(a, false);
  const m = $(s, false);
  const [i, c] = g.useState(null);
  const [o, w] = g.useState(null);
  if (r === null) {
    return <_Component sx={b}><_Component2 variant="subtitle2">Current research PDFs</_Component2><_Component2 variant="body2" color="textSecondary">PDF downloads are available for current research workflow steps.</_Component2></_Component>;
  }
  if (!t) {
    return <_Component sx={b}><_Component2 variant="subtitle2">Current research PDFs</_Component2><_Component2 variant="body2" color="textSecondary">PDFs for current research are not available yet.</_Component2></_Component>;
  }
  const x = async R => {
    const v = R === "answer";
    const G = v ? t.artifacts.answerTex : t.artifacts.researchNotesTex;
    const X = v ? l : m;
    const W = v ? "Answer PDF" : "Research notes PDF";
    const Y = v ? `math-vision-pro-round-${r}-answer.pdf` : `math-vision-pro-round-${r}-research-notes.pdf`;
    if (!G.pdfAttachmentId) {
      throw new Error(`${W} attachment is unavailable.`);
    }
    w(null);
    c(R);
    try {
      const Z = await X.load();
      const F = URL.createObjectURL(Z);
      const k = document.createElement("a");
      k.href = F;
      k.download = Y;
      document.body.appendChild(k);
      k.click();
      k.remove();
      window.setTimeout(() => {
        URL.revokeObjectURL(F);
      }, 0);
    } catch {
      w(`Could not download ${W}.`);
    } finally {
      c(null);
    }
  };
  const f = u === "answer" ? a : s;
  const J = u === "answer" ? "Answer PDF" : "Research notes PDF";
  return <_Component sx={b}><_Component2 variant="subtitle2">Current research PDFs</_Component2><_Component sx={{
      display: "flex",
      justifyContent: "space-between"
    }}><_Component3 exclusive={true} value={u} size="small" aria-label="Current research PDF preview" onChange={(R, v) => {
        if (v) {
          h(v);
        }
      }}><H value="answer" disabled={!a} aria-label="Preview answer PDF">Answer PDF</H><H value="researchNotes" disabled={!s} aria-label="Preview research notes PDF">Research notes PDF</H></_Component3><_Component sx={{
        display: "flex",
        gap: 1
      }}><T size="small" variant="outlined" disabled={!a || i !== null} onClick={() => void x("answer")} startIcon={<_Component4 />}>{i === "answer" ? "Downloading..." : "Download answer PDF"}</T><T size="small" variant="outlined" disabled={!s || i !== null} onClick={() => void x("researchNotes")} startIcon={<Pe />}>{i === "researchNotes" ? "Downloading..." : "Download research notes PDF"}</T></_Component></_Component><We attachmentId={f ?? null} title={J} />{!a && <_Component2 variant="body2" color="error">Answer PDF did not compile.</_Component2>}{!s && <_Component2 variant="body2" color="error">Research notes PDF did not compile.</_Component2>}{o && <_Component2 variant="body2" color="error">{o}</_Component2>}</_Component>;
};
const Me = ({
  node: r,
  onSelectNode: t,
  run: a,
  workflowEdges: s,
  workflowNodes: p
}) => {
  const h = g.useMemo(() => r ? z(r) : null, [r]);
  if (!r) {
    return <_Component sx={A}><_Component2 variant="subtitle1">Highlighted workflow step</_Component2><_Component2 variant="body2" color="textSecondary">Select a graph node to inspect its streamed reasoning and download current research PDFs.</_Component2></_Component>;
  }
  const u = s.filter(o => o.target === r.id);
  const l = s.filter(o => o.source === r.id);
  const m = new Map(p.map(o => [o.id, o]));
  const i = [...u.map(o => o.source), ...l.map(o => o.target)].map(o => m.get(o)).filter(o => o !== undefined);
  const c = a.state.roundOutputs.find(o => o.roundIndex === r.roundIndex);
  return <_Component sx={A}><_Component sx={ue}><_Component sx={ge}><_Component2 variant="subtitle1" noWrap={true}>{r.label}</_Component2><_Component2 variant="caption" color="textSecondary" noWrap={true}>{r.id}</_Component2></_Component></_Component><_Component sx={{
      display: "flex",
      "& > *": {
        flex: "1"
      },
      gap: 1
    }}><_ label="Kind" value={S(r.kind)} /><_ label="Status" value={S(r.status)} /><_ label="Round" value={r.roundIndex ?? "run"} />{h && <_ label="Runtime" value={h} />}</_Component>{E(r) && <e.Fragment><D /><_Component sx={b}><_Component2 variant="subtitle2">Step detail</_Component2><_Component2 variant="body2" color="textSecondary">{E(r)}</_Component2></_Component></e.Fragment>}<D /><_Component sx={b}><_Component2 variant="subtitle2">Streamed reasoning</_Component2>{r.streamReasoning.trim() && <L content={r.streamReasoning} mode="compact" />}{!r.streamReasoning.trim() && <_Component2 variant="body2" color="textSecondary">No streamed reasoning was recorded for this step.</_Component2>}{r.streamReasoningTruncated && <_Component2 variant="caption" color="warning">Earlier reasoning was truncated.</_Component2>}</_Component>{r.kind === "compute" && <e.Fragment><D /><_Component sx={b}><_Component2 variant="subtitle2">Summarized output</_Component2>{r.displaySummary.trim() && <L content={r.displaySummary} mode="compact" />}{!r.displaySummary.trim() && <_Component2 variant="body2" color="textSecondary">No summarized output was recorded for this step.</_Component2>}{r.displaySummaryTruncated && <_Component2 variant="caption" color="warning">Earlier summary text was truncated.</_Component2>}</_Component></e.Fragment>}<D /><Fe roundIndex={r.roundIndex} roundOutput={c} key={r.roundIndex ?? "run"} /><D /><_Component sx={b}><_Component2 variant="subtitle2">Connected workflow steps</_Component2>{i.map(o => <T color="secondary" disabled={y(o)} onClick={() => {
        t(o.id);
      }} key={o.id}>{o.label} · {S(o.status)}</T>)}{i.length === 0 && <_Component2 variant="body2" color="textSecondary">No connected workflow steps.</_Component2>}</_Component></_Component>;
};
const pt = ({
  messageIndex: r,
  onClose: t,
  open: a,
  run: s
}) => {
  const p = q();
  const [h, u] = g.useState(null);
  const l = g.useMemo(() => I(s.state.workflowNodes, s.state.workflowEdges), [s.state.workflowEdges, s.state.workflowNodes]);
  const m = g.useMemo(() => $e(l.nodes, l.edges), [l.edges, l.nodes]);
  const i = g.useMemo(() => Ee(l.nodes, l.edges, p), [p, l.edges, l.nodes]);
  const c = g.useMemo(() => l.nodes.find(f => f.id === h && !y(f)) ?? l.nodes.find(f => f.status === "running" && !y(f)) ?? l.nodes.find(f => !y(f)) ?? null, [h, l.nodes]);
  const o = g.useMemo(() => m.map(x => ({
    ...x,
    selected: x.id === (c == null ? undefined : c.id)
  })), [m, c == null ? undefined : c.id]);
  const w = g.useMemo(() => [s.id, ...m.map(x => `${x.id}@${x.position.x},${x.position.y}`), ...i.map(x => `${x.source}->${x.target}`)].join("|"), [i, m, s.id]);
  return <_Component1 open={a} onClose={t} fullScreen={true}><_Component6 sx={se}><_Component sx={ie}><_Component2 variant="subtitle1" noWrap={true}>Math Vision Pro call workflow</_Component2><_Component2 variant="caption" color="textSecondary" noWrap={true}>Math Vision Pro call message index {r} · {m.length} workflow steps · {i.length} connections</_Component2></_Component><_Component sx={ae}><Q tooltip="Close" aria-label="Close Pro call workflow graph" size="small" onClick={t}><_Component5 /></Q></_Component></_Component6><_Component0 sx={me({
      showWriteupPreview: false
    })}><_Component sx={ne}>{m.length === 0 && <_Component sx={le}><_Component2 variant="body2" color="textSecondary">No workflow graph is available for this Pro call yet.</_Component2></_Component>}{m.length > 0 && <_Component9 nodes={o} edges={i} nodeTypes={Te} nodesDraggable={false} nodesConnectable={false} fitView={true} fitViewOptions={pe} proOptions={ce} onNodeClick={(x, f) => {
          if (!y(f.data.node)) {
            u(f.id);
          }
        }} key={w}><_Component7 /><_Component8 showInteractive={false} /></_Component9>}</_Component><Me node={c} run={s} onSelectNode={u} workflowEdges={l.edges} workflowNodes={l.nodes} /></_Component0></_Component1>;
};
export { pt as ProChatCallGraphDialog };