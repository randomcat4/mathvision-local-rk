import type { ComponentType } from "react";
import type {
  ProChatWorkflowEdge,
  ProChatWorkflowNode,
} from "../features/graph/proChatGraph";
export const Background: ComponentType<any>;
export const Box: ComponentType<any>;
export const Button: ComponentType<any>;
export const Chip: ComponentType<any>;
export const CircularProgress: ComponentType<any>;
export const CloseIcon: ComponentType<any>;
export const Controls: ComponentType<any>;
export const Dialog: ComponentType<any>;
export const DialogContent: ComponentType<any>;
export const DialogTitle: ComponentType<any>;
export const Divider: ComponentType<any>;
export const DownloadIcon: ComponentType<any>;
export const DownloadNotesIcon: ComponentType<any>;
export const Handle: ComponentType<any>;
export const Markdown: ComponentType<any>;
export const PdfCanvasViewer: ComponentType<any>;
export const ReactFlow: ComponentType<any>;
export const ToggleButton: ComponentType<any>;
export const ToggleButtonGroup: ComponentType<any>;
export const Tooltip: ComponentType<any>;
export const TooltipIconButton: ComponentType<any>;
export const Typography: ComponentType<any>;
export const Position: { Left: unknown; Right: unknown };
export const MarkerType: { ArrowClosed: unknown };
export const dialogTitleStyles: unknown;
export const dialogTitleCopyStyles: unknown;
export const dialogTitleActionsStyles: unknown;
export const graphPaneStyles: unknown;
export const graphStateStyles: unknown;
export const fitViewOptions: unknown;
export const proOptions: unknown;
export const detailsHeaderStyles: unknown;
export const detailsHeaderCopyStyles: unknown;
export const sectionStyles: unknown;
export const metricTileStyles: unknown;
export const sidePanelStyles: unknown;
export function graphDialogContentStyles(input: {
  showWriteupPreview: boolean;
}): unknown;
export function alpha(color: string, opacity: number): string;
export function useTheme(): any;
export function formatNodeRuntime(node: ProChatWorkflowNode): string | null;
export function getNodeDetail(node: ProChatWorkflowNode): string | null;
export function layoutWorkflowGraph(input: {
  nodes: ProChatWorkflowNode[];
  edges: ProChatWorkflowEdge[];
  nodeWidth: number;
  nodeHeight: number;
  nodeSizes: Map<string, { width: number; height: number }>;
  errorLabel: string;
}): {
  incomingCounts: Map<string, number>;
  outgoingCounts: Map<string, number>;
  positions: Map<string, { x: number; y: number }>;
};
export function useAttachmentContent(
  id: string | null | undefined,
  enabled?: boolean,
): {
  objectUrl: string | null;
  isLoading: boolean;
  error: unknown;
  load(): Promise<Blob>;
};
