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
  TooltipIconButton,
  Typography,
  useAttachmentContent,
  useTheme,
} from "../../runtime/proChatGraphRuntime.js";

const archivedMessageRoleLabels: Record<ArchivedThreadMessage["role"], string> = {
  request: "任务下发",
  response: "回复",
  tool: "运行回传",
  review: "审计裁决",
};

const archivedMessageTime = new Intl.DateTimeFormat("zh-CN", {
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});

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
    incomingCount: number;
    node: ProChatWorkflowNode;
    outgoingCount: number;
  };
  selected: boolean;
}) {
  const { node, incomingCount, outgoingCount } = data;
  const runtime = formatNodeRuntime(node);
  if (isContractedWorkflowNode(node))
    return (
      <Box
        sx={gateStyles(node.status)}
        title={`${node.label} · ${formatWorkflowLabel(node.status)}`}
      >
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </Box>
    );
  return (
    <Box sx={nodeStyles(node.status, selected)}>
      <Handle type="target" position={Position.Left} />
      <Box sx={nodeHeading}>
        <Typography variant="graphNodeTitle" noWrap>
          {node.label}
        </Typography>
        <Chip
          label={formatWorkflowLabel(node.status)}
          color={workflowStatusColor(node.status)}
          size="xs"
        />
      </Box>
      <Typography variant="caption" color="textSecondary" noWrap>
        {getNodeDetail(node) || formatWorkflowLabel(node.kind)}
      </Typography>
      <Box sx={nodeFooter}>
        <Typography variant="caption" color="textSecondary" noWrap>
          {node.roundIndex === null ? "Run" : `Round ${node.roundIndex}`}
        </Typography>
        {runtime && <Chip label={`Elapsed ${runtime}`} size="xs" />}
        <Typography variant="caption" color="textSecondary" noWrap>
          in {incomingCount} | out {outgoingCount}
        </Typography>
      </Box>
      <Handle type="source" position={Position.Right} />
    </Box>
  );
}
const nodeTypes = { [PRO_CHAT_WORKFLOW_NODE_TYPE]: WorkflowNode };
function createGraphNodes(
  nodes: ProChatWorkflowNode[],
  edges: ProChatWorkflowEdge[],
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
  title,
}: {
  attachmentId: string | null;
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
            ariaLabel={`Current search ${title} preview`}
            loadErrorMessage={`Could not load the round ${title.toLowerCase()}.`}
            pdfUrl={attachment.objectUrl}
            renderErrorMessage={`Could not render the round ${title.toLowerCase()}.`}
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
        {!attachmentId && "No current research PDF is available."}
        {attachmentId &&
          attachment.error &&
          `Could not load the current research ${title.toLowerCase()}.`}
        {attachmentId &&
          !attachment.error &&
          `Preparing the current research ${title.toLowerCase()} preview...`}
      </Typography>
    </Box>
  );
}
function CurrentResearchPdfs({
  roundIndex,
  roundOutput,
}: {
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
        <Typography variant="subtitle2">Current research PDFs</Typography>
        <Typography variant="body2" color="textSecondary">
          PDF downloads are available for current research workflow steps.
        </Typography>
      </Box>
    );
  if (!roundOutput)
    return (
      <Box sx={sectionStyles}>
        <Typography variant="subtitle2">Current research PDFs</Typography>
        <Typography variant="body2" color="textSecondary">
          PDFs for current research are not available yet.
        </Typography>
      </Box>
    );
  const download = async (kind: "answer" | "researchNotes") => {
    const answerKind = kind === "answer";
    const artifact = answerKind
      ? roundOutput.artifacts.answerTex
      : roundOutput.artifacts.researchNotesTex;
    const attachment = answerKind ? answer : notes;
    const label = answerKind ? "Answer PDF" : "Research notes PDF";
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
        ? `math-vision-pro-round-${roundIndex}-answer.pdf`
        : `math-vision-pro-round-${roundIndex}-research-notes.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 0);
    } catch {
      setError(`Could not download ${label}.`);
    } finally {
      setDownloading(null);
    }
  };
  const previewId = view === "answer" ? answerId : notesId;
  const title = view === "answer" ? "Answer PDF" : "Research notes PDF";
  return (
    <Box sx={sectionStyles}>
      <Typography variant="subtitle2">Current research PDFs</Typography>
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
            Answer PDF
          </ToggleButton>
          <ToggleButton
            value="researchNotes"
            disabled={!notesId}
            aria-label="Preview research notes PDF"
          >
            Research notes PDF
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
              ? "Downloading..."
              : "Download answer PDF"}
          </Button>
          <Button
            size="small"
            variant="outlined"
            disabled={!notesId || downloading !== null}
            onClick={() => void download("researchNotes")}
            startIcon={<DownloadNotesIcon />}
          >
            {downloading === "researchNotes"
              ? "Downloading..."
              : "Download research notes PDF"}
          </Button>
        </Box>
      </Box>
      <PdfPreview attachmentId={previewId ?? null} title={title} />
      {!answerId && (
        <Typography variant="body2" color="error">
          Answer PDF did not compile.
        </Typography>
      )}
      {!notesId && (
        <Typography variant="body2" color="error">
          Research notes PDF did not compile.
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
  node,
  onSelectNode,
  run,
  edges,
  nodes,
}: {
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
        <Typography variant="subtitle1">Highlighted workflow step</Typography>
        <Typography variant="body2" color="textSecondary">
          Select a graph node to inspect its streamed reasoning and download
          current research PDFs.
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
            {node.id}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", "& > *": { flex: 1 }, gap: 1 }}>
        <Metric label="Kind" value={formatWorkflowLabel(node.kind)} />
        <Metric label="Status" value={formatWorkflowLabel(node.status)} />
        <Metric label="Round" value={node.roundIndex ?? "run"} />
        {runtime && <Metric label="Runtime" value={runtime} />}
      </Box>
      {detail && (
        <>
          <Divider />
          <Box sx={sectionStyles}>
            <Typography variant="subtitle2">Step detail</Typography>
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
        <Typography variant="subtitle2">Streamed reasoning</Typography>
        {node.streamReasoning.trim() ? (
          <Markdown content={node.streamReasoning} mode="compact" />
        ) : (
          <Typography variant="body2" color="textSecondary">
            No streamed reasoning was recorded for this step.
          </Typography>
        )}
        {node.streamReasoningTruncated && (
          <Typography variant="caption" color="warning">
            Earlier reasoning was truncated.
          </Typography>
        )}
      </Box>
      {node.kind === "compute" && (
        <>
          <Divider />
          <Box sx={sectionStyles}>
            <Typography variant="subtitle2">Summarized output</Typography>
            {node.displaySummary.trim() ? (
              <Markdown content={node.displaySummary} mode="compact" />
            ) : (
              <Typography variant="body2" color="textSecondary">
                No summarized output was recorded for this step.
              </Typography>
            )}
            {node.displaySummaryTruncated && (
              <Typography variant="caption" color="warning">
                Earlier summary text was truncated.
              </Typography>
            )}
          </Box>
        </>
      )}
      <Divider />
      <CurrentResearchPdfs
        roundIndex={node.roundIndex}
        roundOutput={output}
        key={node.roundIndex ?? "run"}
      />
      <Divider />
      <Box sx={sectionStyles}>
        <Typography variant="subtitle2">Connected workflow steps</Typography>
        {connected.map((item) => (
          <Button
            color="secondary"
            disabled={isContractedWorkflowNode(item)}
            onClick={() => onSelectNode(item.id)}
            key={item.id}
          >
            {item.label} · {formatWorkflowLabel(item.status)}
          </Button>
        ))}
        {connected.length === 0 && (
          <Typography variant="body2" color="textSecondary">
            No connected workflow steps.
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
  return (
    <Box sx={sectionStyles}>
      <Typography variant="subtitle2">聊天记录</Typography>
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
          return (
            <Box
              key={message.id}
              sx={{
                alignSelf: isRequest ? "flex-end" : "flex-start",
                maxWidth: "92%",
              }}
            >
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
                <Markdown content={message.content} mode="compact" />
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
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
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const graph = useMemo(
    () => contractReviewGates(run.state.workflowNodes, run.state.workflowEdges),
    [run.state.workflowNodes, run.state.workflowEdges],
  );
  const nodes = useMemo(
    () => createGraphNodes(graph.nodes, graph.edges),
    [graph.nodes, graph.edges],
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
            Math Vision Pro call workflow
          </Typography>
          <Typography variant="caption" color="textSecondary" noWrap>
            Math Vision Pro call message index {messageIndex} · {nodes.length}{" "}
            workflow steps · {edges.length} connections
          </Typography>
        </Box>
        <Box sx={dialogTitleActionsStyles}>
          <TooltipIconButton
            tooltip="Close"
            aria-label="Close Pro call workflow graph"
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
                No workflow graph is available for this Pro call yet.
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
