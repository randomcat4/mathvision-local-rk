import { Suspense, useMemo, useState } from "#production-react";
import {
  PRO_CHAT_GATE_SIZE,
  PRO_CHAT_NODE_HEIGHT,
  PRO_CHAT_NODE_WIDTH,
  PRO_CHAT_WORKFLOW_NODE_TYPE,
  contractReviewGates,
  formatWorkflowLabel,
  isContractedWorkflowNode,
  workflowStatusColor,
  type ArchivedThreadMessage,
  type ProChatWorkflowEdge,
  type ProChatWorkflowNode,
} from "./proChatGraph";
import {
  alpha,
  Background,
  Box,
  Button,
  Chip,
  CircularProgress,
  CloseIcon,
  Controls,
  detailsHeaderCopyStyles,
  detailsHeaderStyles,
  dialogTitleActionsStyles,
  dialogTitleCopyStyles,
  dialogTitleStyles,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  DownloadIcon,
  DownloadNotesIcon,
  fitViewOptions,
  formatNodeRuntime,
  getNodeDetail,
  graphDialogContentStyles,
  graphPaneStyles,
  graphStateStyles,
  Handle,
  layoutWorkflowGraph,
  MarkerType,
  Markdown,
  metricTileStyles,
  PdfCanvasViewer,
  Position,
  proOptions,
  ReactFlow,
  sectionStyles,
  sidePanelStyles,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  TooltipIconButton,
  Typography,
  useAttachmentContent,
  useTheme,
} from "../../runtime/proChatGraphRuntime.js";
import {
  extractLocalMarkdownLinks,
  localMarkdownArtifactUrl,
  removeLocalMarkdownLinkTargets,
  type LocalMarkdownLink,
} from "./localMarkdownArtifacts";

const archivedMessageRoleLabels: Record<ArchivedThreadMessage["role"], string> = {
  request: "任务下发",
  response: "回复",
  tool: "运行回传",
  review: "审计裁决",
  commentary: "进度",
  final: "最终回传",
};

const archivedMessageTime = new Intl.DateTimeFormat("zh-CN", {
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});

const gaoWorkflowLabels: Record<string, string> = {
  agent_thread: "子实例线程",
  codex_archive: "Codex 线程存档",
  completed: "已完成",
  evidence_thread: "证据线程",
  failed: "失败／已否决",
  main_instance: "主实例",
  route_rejected: "已否决路线",
  running: "运行中",
};

const workflowLabel = (value: string, chinese: boolean) =>
  chinese ? (gaoWorkflowLabels[value] ?? formatWorkflowLabel(value)) : formatWorkflowLabel(value);

interface RoundArtifact {
  pdfAttachmentId?: string | null;
}
interface RoundOutput {
  roundIndex: number;
  artifacts: { answerTex: RoundArtifact; researchNotesTex: RoundArtifact };
}
export interface ProChatRun {
  id: string;
  state: {
    workflowNodes: ProChatWorkflowNode[];
    workflowEdges: ProChatWorkflowEdge[];
    roundOutputs: RoundOutput[];
  };
}
const statusColor = (theme: any, status: string) =>
  status === "failed"
    ? theme.palette.error.main
    : status === "completed"
      ? theme.palette.success.main
      : status === "running"
        ? theme.palette.info.main
        : theme.palette.primary.main;
const nodeStyles = (status: string, selected: boolean) => (theme: any) => {
  const color = statusColor(theme, status);
  return {
    width: PRO_CHAT_NODE_WIDTH,
    height: PRO_CHAT_NODE_HEIGHT,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(0.7),
    padding: theme.spacing(1.2),
    borderRadius: theme.shape.borderRadiusPx,
    border: `${selected ? 2 : 1}px solid ${alpha(color, selected ? 0.92 : 0.44)}`,
    color: theme.palette.text.primary,
    background: `linear-gradient(135deg, ${alpha(color, 0.13)}, ${alpha(theme.palette.background.paper, 0.94)})`,
    boxShadow: selected
      ? `0 0 0 3px ${alpha(color, 0.16)}, 0 18px 36px ${alpha(color, 0.2)}`
      : `0 12px 24px ${alpha(theme.palette.text.primary, 0.08)}`,
    cursor: "pointer",
  };
};
const gateStyles = (status: string) => (theme: any) => {
  const color = statusColor(theme, status);
  return {
    width: PRO_CHAT_GATE_SIZE,
    height: PRO_CHAT_GATE_SIZE,
    boxSizing: "border-box",
    borderRadius: "50%",
    border: `2px solid ${alpha(color, 0.42)}`,
    backgroundColor: alpha(color, 0.08),
    cursor: "default",
  };
};
const nodeHeading = (theme: any) => ({
  minWidth: 0,
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) max-content",
  alignItems: "center",
  gap: theme.spacing(0.75),
});
const nodeFooter = (theme: any) => ({
  marginTop: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(0.7),
});

function WorkflowNode({
  data,
  selected,
}: {
  data: {
    chinese: boolean;
    incomingCount: number;
    node: ProChatWorkflowNode;
    outgoingCount: number;
  };
  selected: boolean;
}) {
  const { node, incomingCount, outgoingCount, chinese } = data;
  const runtime = formatNodeRuntime(node);
  if (isContractedWorkflowNode(node))
    return (
      <Box
        sx={gateStyles(node.status)}
        title={`${node.label} · ${workflowLabel(node.status, chinese)}`}
      >
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </Box>
    );
  return (
    <Tooltip
      arrow
      enterDelay={260}
      placement="top"
      title={
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75, maxWidth: 360, padding: 0.5 }}>
          <Typography variant="subtitle2">{node.label}</Typography>
          <Typography variant="caption">
            {node.roundIndex === null ? "运行级节点" : `第 ${node.roundIndex} 轮`} · {workflowLabel(node.status, chinese)}
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 4, overflow: "hidden" }}
          >
            {node.displaySummary || node.streamReasoning || "没有记录摘要。"}
          </Typography>
          <Typography variant="caption">点击查看完整记录</Typography>
        </Box>
      }
    >
      <Box sx={nodeStyles(node.status, selected)}>
        <Handle type="target" position={Position.Left} />
        <Box sx={nodeHeading}>
          <Typography variant="graphNodeTitle" noWrap>
            {node.label}
          </Typography>
          <Chip
            label={workflowLabel(node.status, chinese)}
            color={workflowStatusColor(node.status)}
            size="xs"
          />
        </Box>
        <Typography variant="caption" color="textSecondary" noWrap>
          {getNodeDetail(node) || workflowLabel(node.kind, chinese)}
        </Typography>
        <Box sx={nodeFooter}>
          <Typography variant="caption" color="textSecondary" noWrap>
            {chinese
              ? (node.roundIndex === null ? "运行" : `第 ${node.roundIndex} 轮`)
              : (node.roundIndex === null ? "Run" : `Round ${node.roundIndex}`)}
          </Typography>
          {runtime && <Chip label={chinese ? `用时 ${runtime}` : `Elapsed ${runtime}`} size="xs" />}
          <Typography variant="caption" color="textSecondary" noWrap>
            {chinese ? `入 ${incomingCount}｜出 ${outgoingCount}` : `in ${incomingCount} | out ${outgoingCount}`}
          </Typography>
        </Box>
        <Handle type="source" position={Position.Right} />
      </Box>
    </Tooltip>
  );
}
const nodeTypes = { [PRO_CHAT_WORKFLOW_NODE_TYPE]: WorkflowNode };
function createGraphNodes(
  nodes: ProChatWorkflowNode[],
  edges: ProChatWorkflowEdge[],
  chinese: boolean,
) {
  const contracted = contractReviewGates(nodes, edges);
  const sizes = new Map(
    contracted.nodes
      .filter(isContractedWorkflowNode)
      .map((node) => [
        node.id,
        { width: PRO_CHAT_GATE_SIZE, height: PRO_CHAT_GATE_SIZE },
      ]),
  );
  const layout = layoutWorkflowGraph({
    nodes: contracted.nodes,
    edges: contracted.edges,
    nodeWidth: PRO_CHAT_NODE_WIDTH,
    nodeHeight: PRO_CHAT_NODE_HEIGHT,
    nodeSizes: sizes,
    errorLabel: "Pro chat workflow",
  });
  return contracted.nodes.map((node) => {
    const position = layout.positions.get(node.id);
    const gate = isContractedWorkflowNode(node);
    if (!position)
      throw new Error(`Pro chat workflow node '${node.id}' has no position.`);
    return {
      id: node.id,
      type: PRO_CHAT_WORKFLOW_NODE_TYPE,
      position,
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      data: {
        chinese,
        node,
        incomingCount: layout.incomingCounts.get(node.id) ?? 0,
        outgoingCount: layout.outgoingCounts.get(node.id) ?? 0,
      },
      draggable: false,
      focusable: !gate,
      selectable: !gate,
      style: gate
        ? { width: PRO_CHAT_GATE_SIZE, height: PRO_CHAT_GATE_SIZE }
        : undefined,
    };
  });
}
function createGraphEdges(
  nodes: ProChatWorkflowNode[],
  edges: ProChatWorkflowEdge[],
  theme: any,
) {
  return contractReviewGates(nodes, edges).edges.map((edge, index) => ({
    id: `${edge.source}-${edge.target}-${index}`,
    source: edge.source,
    target: edge.target,
    type: "smoothstep",
    label: edge.condition ?? undefined,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: alpha(theme.palette.text.primary, 0.68),
    },
    style: { stroke: alpha(theme.palette.text.primary, 0.52), strokeWidth: 2 },
  }));
}
function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <Box sx={metricTileStyles}>
      <Typography variant="contextMetricLabel" color="textSecondary" noWrap>
        {label}
      </Typography>
      <Typography variant="contextMetricValue" color="textPrimary" noWrap>
        {value}
      </Typography>
    </Box>
  );
}
function PdfPreview({
  attachmentId,
  chinese,
  title,
}: {
  attachmentId: string | null;
  chinese: boolean;
  title: string;
}) {
  const attachment = useAttachmentContent(attachmentId);
  if (attachment.objectUrl)
    return (
      <Box sx={{ height: "50rem", overflow: "hidden" }}>
        <Suspense
          fallback={
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress size={28} />
            </Box>
          }
        >
          <PdfCanvasViewer
            ariaLabel={chinese ? `${title}预览` : `Current search ${title} preview`}
            loadErrorMessage={chinese ? `无法加载本轮${title}。` : `Could not load the round ${title.toLowerCase()}.`}
            pdfUrl={attachment.objectUrl}
            renderErrorMessage={chinese ? `无法渲染本轮${title}。` : `Could not render the round ${title.toLowerCase()}.`}
            scale={1}
            sx={{ height: "100%" }}
          />
        </Suspense>
      </Box>
    );
  return (
    <Box
      sx={{
        height: "12rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
      }}
    >
      {attachment.isLoading && <CircularProgress size={28} />}
      <Typography
        variant="body2"
        color={attachment.error ? "error" : "textSecondary"}
        align="center"
      >
        {!attachmentId && (chinese ? "没有可用的当前研究 PDF。" : "No current research PDF is available.")}
        {attachmentId &&
          attachment.error &&
          (chinese ? `无法加载当前研究${title}。` : `Could not load the current research ${title.toLowerCase()}.`)}
        {attachmentId &&
          !attachment.error &&
          (chinese ? `正在准备当前研究${title}预览……` : `Preparing the current research ${title.toLowerCase()} preview...`)}
      </Typography>
    </Box>
  );
}
function CurrentResearchPdfs({
  chinese,
  roundIndex,
  roundOutput,
}: {
  chinese: boolean;
  roundIndex: number | null;
  roundOutput?: RoundOutput;
}) {
  const answerId = roundOutput?.artifacts.answerTex.pdfAttachmentId;
  const notesId = roundOutput?.artifacts.researchNotesTex.pdfAttachmentId;
  const [selected, setSelected] = useState("answer");
  const view = selected === "answer" && !answerId ? "researchNotes" : selected;
  const answer = useAttachmentContent(answerId, false);
  const notes = useAttachmentContent(notesId, false);
  const [downloading, setDownloading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  if (roundIndex === null)
    return (
      <Box sx={sectionStyles}>
        <Typography variant="subtitle2">{chinese ? "当前研究 PDF" : "Current research PDFs"}</Typography>
        <Typography variant="body2" color="textSecondary">
          {chinese ? "当前研究步骤可提供 PDF 下载。" : "PDF downloads are available for current research workflow steps."}
        </Typography>
      </Box>
    );
  if (!roundOutput)
    return (
      <Box sx={sectionStyles}>
        <Typography variant="subtitle2">{chinese ? "当前研究 PDF" : "Current research PDFs"}</Typography>
        <Typography variant="body2" color="textSecondary">
          {chinese ? "当前研究 PDF 尚不可用。" : "PDFs for current research are not available yet."}
        </Typography>
      </Box>
    );
  const download = async (kind: "answer" | "researchNotes") => {
    const answerKind = kind === "answer";
    const artifact = answerKind
      ? roundOutput.artifacts.answerTex
      : roundOutput.artifacts.researchNotesTex;
    const attachment = answerKind ? answer : notes;
    const label = answerKind ? (chinese ? "答案 PDF" : "Answer PDF") : (chinese ? "研究笔记 PDF" : "Research notes PDF");
    if (!artifact.pdfAttachmentId)
      throw new Error(`${label} attachment is unavailable.`);
    setError(null);
    setDownloading(kind);
    try {
      const blob = await attachment.load();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = answerKind
        ? `${chinese ? "rk" : "math-vision-pro"}-round-${roundIndex}-answer.pdf`
        : `${chinese ? "rk" : "math-vision-pro"}-round-${roundIndex}-research-notes.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 0);
    } catch {
      setError(chinese ? `无法下载${label}。` : `Could not download ${label}.`);
    } finally {
      setDownloading(null);
    }
  };
  const previewId = view === "answer" ? answerId : notesId;
  const title = view === "answer" ? (chinese ? "答案 PDF" : "Answer PDF") : (chinese ? "研究笔记 PDF" : "Research notes PDF");
  return (
    <Box sx={sectionStyles}>
      <Typography variant="subtitle2">{chinese ? "当前研究 PDF" : "Current research PDFs"}</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <ToggleButtonGroup
          exclusive
          value={view}
          size="small"
          aria-label="Current research PDF preview"
          onChange={(_event: unknown, value: string | null) => {
            if (value) setSelected(value);
          }}
        >
          <ToggleButton
            value="answer"
            disabled={!answerId}
            aria-label="Preview answer PDF"
          >
            {chinese ? "答案 PDF" : "Answer PDF"}
          </ToggleButton>
          <ToggleButton
            value="researchNotes"
            disabled={!notesId}
            aria-label="Preview research notes PDF"
          >
            {chinese ? "研究笔记 PDF" : "Research notes PDF"}
          </ToggleButton>
        </ToggleButtonGroup>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            size="small"
            variant="outlined"
            disabled={!answerId || downloading !== null}
            onClick={() => void download("answer")}
            startIcon={<DownloadIcon />}
          >
            {downloading === "answer"
              ? (chinese ? "下载中……" : "Downloading...")
              : (chinese ? "下载答案 PDF" : "Download answer PDF")}
          </Button>
          <Button
            size="small"
            variant="outlined"
            disabled={!notesId || downloading !== null}
            onClick={() => void download("researchNotes")}
            startIcon={<DownloadNotesIcon />}
          >
            {downloading === "researchNotes"
              ? (chinese ? "下载中……" : "Downloading...")
              : (chinese ? "下载研究笔记 PDF" : "Download research notes PDF")}
          </Button>
        </Box>
      </Box>
      <PdfPreview attachmentId={previewId ?? null} chinese={chinese} title={title} />
      {!answerId && (
        <Typography variant="body2" color="error">
          {chinese ? "答案 PDF 未能编译。" : "Answer PDF did not compile."}
        </Typography>
      )}
      {!notesId && (
        <Typography variant="body2" color="error">
          {chinese ? "研究笔记 PDF 未能编译。" : "Research notes PDF did not compile."}
        </Typography>
      )}
      {error && (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      )}
    </Box>
  );
}
function NodeDetails({
  chinese,
  node,
  onSelectNode,
  run,
  edges,
  nodes,
}: {
  chinese: boolean;
  node: ProChatWorkflowNode | null;
  onSelectNode(id: string): void;
  run: ProChatRun;
  edges: ProChatWorkflowEdge[];
  nodes: ProChatWorkflowNode[];
}) {
  const runtime = useMemo(
    () => (node ? formatNodeRuntime(node) : null),
    [node],
  );
  if (!node)
    return (
      <Box sx={sidePanelStyles}>
        <Typography variant="subtitle1">{chinese ? "当前工作流节点" : "Highlighted workflow step"}</Typography>
        <Typography variant="body2" color="textSecondary">
          {chinese
            ? "选择一个图节点，查看其聊天记录、推理、结果及上下游。"
            : "Select a graph node to inspect its streamed reasoning and download current research PDFs."}
        </Typography>
      </Box>
    );
  const incoming = edges.filter((edge) => edge.target === node.id);
  const outgoing = edges.filter((edge) => edge.source === node.id);
  const byId = new Map(nodes.map((item) => [item.id, item]));
  const connected = [
    ...incoming.map((edge) => edge.source),
    ...outgoing.map((edge) => edge.target),
  ]
    .map((id) => byId.get(id))
    .filter((item): item is ProChatWorkflowNode => item !== undefined);
  const output = run.state.roundOutputs.find(
    (item) => item.roundIndex === node.roundIndex,
  );
  const detail = getNodeDetail(node);
  return (
    <Box sx={sidePanelStyles}>
      <Box sx={detailsHeaderStyles}>
        <Box sx={detailsHeaderCopyStyles}>
          <Typography variant="subtitle1" noWrap>
            {node.label}
          </Typography>
          <Typography variant="caption" color="textSecondary" noWrap>
            {node.kind === "codex_archive" ? `第 ${node.roundIndex} 轮子实例` : node.id}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", "& > *": { flex: 1 }, gap: 1 }}>
        <Metric label={chinese ? "类型" : "Kind"} value={workflowLabel(node.kind, chinese)} />
        <Metric label={chinese ? "状态" : "Status"} value={workflowLabel(node.status, chinese)} />
        <Metric label={chinese ? "轮次" : "Round"} value={node.roundIndex ?? (chinese ? "运行" : "run")} />
        {runtime && <Metric label={chinese ? "用时" : "Runtime"} value={runtime} />}
      </Box>
      {detail && (
        <>
          <Divider />
          <Box sx={sectionStyles}>
            <Typography variant="subtitle2">{chinese ? "节点详情" : "Step detail"}</Typography>
            <Typography variant="body2" color="textSecondary">
              {detail}
            </Typography>
          </Box>
        </>
      )}
      {node.archivedMessages?.length ? (
        <>
          <Divider />
          <ArchivedThreadTranscript messages={node.archivedMessages} />
        </>
      ) : null}
      <Divider />
      <Box sx={sectionStyles}>
        <Typography variant="subtitle2">{chinese ? "推理记录" : "Streamed reasoning"}</Typography>
        {node.streamReasoning.trim() ? (
          <Markdown content={node.streamReasoning} mode="compact" />
        ) : (
          <Typography variant="body2" color="textSecondary">
            {chinese ? "这个节点没有保存推理记录。" : "No streamed reasoning was recorded for this step."}
          </Typography>
        )}
        {node.streamReasoningTruncated && (
          <Typography variant="caption" color="warning">
            {chinese ? "较早的推理内容已截断。" : "Earlier reasoning was truncated."}
          </Typography>
        )}
      </Box>
      {node.displaySummary.trim() && (
        <>
          <Divider />
          <Box sx={sectionStyles}>
            <Typography variant="subtitle2">结果摘要</Typography>
            <Markdown content={node.displaySummary} mode="compact" />
            {node.displaySummaryTruncated && (
              <Typography variant="caption" color="warning">
                {chinese ? "较早的摘要内容已截断。" : "Earlier summary text was truncated."}
              </Typography>
            )}
          </Box>
        </>
      )}
      <Divider />
      <CurrentResearchPdfs
        chinese={chinese}
        roundIndex={node.roundIndex}
        roundOutput={output}
        key={node.roundIndex ?? "run"}
      />
      <Divider />
      <Box sx={sectionStyles}>
        <Typography variant="subtitle2">{chinese ? "上下游节点" : "Connected workflow steps"}</Typography>
        {connected.map((item) => (
          <Button
            color="secondary"
            disabled={isContractedWorkflowNode(item)}
            onClick={() => onSelectNode(item.id)}
            key={item.id}
          >
            {item.label} · {workflowLabel(item.status, chinese)}
          </Button>
        ))}
        {connected.length === 0 && (
          <Typography variant="body2" color="textSecondary">
            {chinese ? "没有相连的工作流节点。" : "No connected workflow steps."}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

function ArchivedThreadTranscript({
  messages,
}: {
  messages: ArchivedThreadMessage[];
}) {
  const onlyWorkflowRecords = messages.every(
    (message) => message.provenance === "workflow_record",
  );
  const [artifact, setArtifact] = useState<{
    content: string;
    error: string | null;
    label: string;
    loading: boolean;
  } | null>(null);
  const openArtifact = (link: LocalMarkdownLink) => {
    setArtifact({ content: "", error: null, label: link.label, loading: true });
    void fetch(localMarkdownArtifactUrl(link.path))
      .then(async (response) => {
        if (!response.ok) throw new Error(await response.text());
        const content = await response.text();
        setArtifact({ content, error: null, label: link.label, loading: false });
      })
      .catch((error: unknown) => {
        setArtifact({
          content: "",
          error: error instanceof Error ? error.message : "无法读取这个 Markdown 文件。",
          label: link.label,
          loading: false,
        });
      });
  };
  return (
    <>
      <Box sx={sectionStyles}>
        <Typography variant="subtitle2">
          {onlyWorkflowRecords ? "相关研究思路" : "原始记录与相关思路"}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            paddingBlock: 0.5,
          }}
        >
          {messages.map((message) => {
            const isRequest = message.role === "request";
            const markdownLinks = extractLocalMarkdownLinks(message.content);
            return (
              <Box
                key={message.id}
                sx={{
                  alignSelf: isRequest ? "flex-end" : "flex-start",
                  maxWidth: "92%",
                }}
              >
                <Typography variant="caption" color="textSecondary">
                  {message.provenance === "source_thread"
                    ? "原始线程"
                    : message.provenance === "source_artifact"
                      ? "原始工件"
                      : message.provenance === "workflow_record"
                        ? "账本整理"
                        : "存档记录"}
                  {message.sourceLabel ? ` · ${message.sourceLabel}` : ""}
                </Typography>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    gap: 0.75,
                    justifyContent: isRequest ? "flex-end" : "flex-start",
                    marginBottom: 0.5,
                  }}
                >
                  <Typography variant="caption" sx={{ fontWeight: 700 }}>
                    {message.author}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {archivedMessageRoleLabels[message.role]} · {archivedMessageTime.format(new Date(message.at))}
                  </Typography>
                </Box>
                <Box
                  sx={(theme: any) => ({
                    backgroundColor: isRequest
                      ? alpha(theme.palette.primary.main, 0.12)
                      : message.role === "review"
                        ? alpha(theme.palette.warning.main, 0.12)
                        : alpha(theme.palette.text.primary, 0.055),
                    border: `1px solid ${
                      isRequest
                        ? alpha(theme.palette.primary.main, 0.2)
                        : message.role === "review"
                          ? alpha(theme.palette.warning.main, 0.22)
                          : alpha(theme.palette.text.primary, 0.08)
                    }`,
                    borderRadius: 2,
                    padding: 1.25,
                    "& p:first-of-type": { marginTop: 0 },
                    "& p:last-of-type": { marginBottom: 0 },
                  })}
                >
                  <Markdown content={removeLocalMarkdownLinkTargets(message.content)} mode="compact" />
                  {markdownLinks.map((link) => (
                    <Button color="secondary" onClick={() => openArtifact(link)} key={link.path}>
                      打开 {link.label}
                    </Button>
                  ))}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Dialog open={artifact !== null} onClose={() => setArtifact(null)} fullWidth maxWidth="lg">
        <DialogTitle>
          <Box sx={{ alignItems: "center", display: "flex", justifyContent: "space-between", gap: 2 }}>
            <Typography variant="subtitle1">{artifact?.label ?? "Markdown"}</Typography>
            <Button onClick={() => setArtifact(null)}>关闭</Button>
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          {artifact?.loading ? <CircularProgress size={24} /> : null}
          {artifact?.error ? <Typography color="error">{artifact.error}</Typography> : null}
          {artifact?.content ? <Markdown content={artifact.content} mode="compact" /> : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
export function ProChatCallGraphDialog({
  messageIndex,
  onClose,
  open,
  run,
}: {
  messageIndex: number;
  onClose(): void;
  open: boolean;
  run: ProChatRun;
}) {
  const theme = useTheme();
  const chinese = run.id === "gao-original-run";
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const graph = useMemo(
    () => contractReviewGates(run.state.workflowNodes, run.state.workflowEdges),
    [run.state.workflowNodes, run.state.workflowEdges],
  );
  const nodes = useMemo(
    () => createGraphNodes(graph.nodes, graph.edges, chinese),
    [graph.nodes, graph.edges, chinese],
  );
  const edges = useMemo(
    () => createGraphEdges(graph.nodes, graph.edges, theme),
    [graph.nodes, graph.edges, theme],
  );
  const selected = useMemo(
    () =>
      graph.nodes.find(
        (node) => node.id === selectedId && !isContractedWorkflowNode(node),
      ) ??
      graph.nodes.find(
        (node) => node.status === "running" && !isContractedWorkflowNode(node),
      ) ??
      graph.nodes.find((node) => !isContractedWorkflowNode(node)) ??
      null,
    [selectedId, graph.nodes],
  );
  const visibleNodes = useMemo(
    () =>
      nodes.map((node) => ({ ...node, selected: node.id === selected?.id })),
    [nodes, selected?.id],
  );
  const graphKey = useMemo(
    () =>
      [
        run.id,
        ...nodes.map(
          (node) => `${node.id}@${node.position.x},${node.position.y}`,
        ),
        ...edges.map((edge) => `${edge.source}->${edge.target}`),
      ].join("|"),
    [edges, nodes, run.id],
  );
  return (
    <Dialog open={open} onClose={onClose} fullScreen>
      <DialogTitle sx={dialogTitleStyles}>
        <Box sx={dialogTitleCopyStyles}>
          <Typography variant="subtitle1" noWrap>
            {chinese ? "RK 研究工作流" : "RK research workflow"}
          </Typography>
          <Typography variant="caption" color="textSecondary" noWrap>
            {chinese
              ? `RK 运行 · 消息 ${messageIndex} · ${nodes.length} 个节点 · ${edges.length} 条连接`
              : `RK run message index ${messageIndex} · ${nodes.length} workflow steps · ${edges.length} connections`}
          </Typography>
        </Box>
        <Box sx={dialogTitleActionsStyles}>
          <TooltipIconButton
            tooltip={chinese ? "关闭" : "Close"}
            aria-label={chinese ? "关闭 RK 研究工作流" : "Close Pro call workflow graph"}
            size="small"
            onClick={onClose}
          >
            <CloseIcon />
          </TooltipIconButton>
        </Box>
      </DialogTitle>
      <DialogContent
        sx={graphDialogContentStyles({ showWriteupPreview: false })}
      >
        <Box sx={graphPaneStyles}>
          {nodes.length === 0 && (
            <Box sx={graphStateStyles}>
              <Typography variant="body2" color="textSecondary">
                {chinese ? "当前还没有可用的研究工作流图。" : "No workflow graph is available for this Pro call yet."}
              </Typography>
            </Box>
          )}
          {nodes.length > 0 && (
            <ReactFlow
              nodes={visibleNodes}
              edges={edges}
              nodeTypes={nodeTypes}
              nodesDraggable={false}
              nodesConnectable={false}
              fitView
              fitViewOptions={fitViewOptions}
              proOptions={proOptions}
              onNodeClick={(_event: unknown, node: any) => {
                if (!isContractedWorkflowNode(node.data.node))
                  setSelectedId(node.id);
              }}
              key={graphKey}
            >
              <Background />
              <Controls showInteractive={false} />
            </ReactFlow>
          )}
        </Box>
        <NodeDetails
          chinese={chinese}
          node={selected}
          run={run}
          onSelectNode={setSelectedId}
          edges={graph.edges}
          nodes={graph.nodes}
        />
      </DialogContent>
    </Dialog>
  );
}
