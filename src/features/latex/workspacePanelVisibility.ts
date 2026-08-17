export interface LatexWorkspacePanelVisibility {
  source: boolean;
  pdf: boolean;
  chat: boolean;
}

export type LatexWorkspaceContentMode = "source" | "pdf" | "split";

export const LATEX_WORKSPACE_PANEL_VISIBILITY_STORAGE_KEY =
  "ai-math.latex-workspace-content-panel-visibility.v1";

const INITIAL_VISIBILITY: LatexWorkspacePanelVisibility = {
  source: true,
  pdf: true,
  chat: false,
};

export const DEFAULT_LATEX_WORKSPACE_PANEL_VISIBILITY = {
  source: INITIAL_VISIBILITY.source,
  pdf: INITIAL_VISIBILITY.pdf,
  chat: INITIAL_VISIBILITY.chat,
};

export function parseLatexWorkspacePanelVisibility(
  serialized: string,
): LatexWorkspacePanelVisibility {
  const parsed: unknown = JSON.parse(serialized);
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("Saved LaTeX content panel visibility is invalid.");
  }
  const value = parsed as Record<string, unknown>;
  if (
    typeof value.source !== "boolean" ||
    typeof value.pdf !== "boolean" ||
    typeof value.chat !== "boolean"
  ) {
    throw new Error("Saved LaTeX content panel visibility is invalid.");
  }
  return { source: value.source, pdf: value.pdf, chat: value.chat };
}

export function ensureVisibleLatexContentPanel(
  visibility: LatexWorkspacePanelVisibility,
): LatexWorkspacePanelVisibility {
  return visibility.source || visibility.pdf
    ? visibility
    : { ...visibility, source: true };
}

export function getLatexWorkspaceContentMode(
  visibility: LatexWorkspacePanelVisibility,
): LatexWorkspaceContentMode {
  if (!visibility.source && !visibility.pdf) {
    throw new Error("The LaTeX workspace must keep either Source or PDF visible.");
  }
  return visibility.source && visibility.pdf
    ? "split"
    : visibility.pdf
      ? "pdf"
      : "source";
}

export function setLatexWorkspaceContentMode(
  visibility: LatexWorkspacePanelVisibility,
  mode: LatexWorkspaceContentMode,
): LatexWorkspacePanelVisibility {
  return { ...visibility, source: mode !== "pdf", pdf: mode !== "source" };
}
