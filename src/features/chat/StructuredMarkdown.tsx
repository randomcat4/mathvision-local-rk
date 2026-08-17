import {
  citationLinkComponents,
  citationPreviewComponents,
  advancePastWord,
  escapeMarkdownLabel,
  formatSourceLabel,
  InlineMarkdown,
  isInsideMath,
  splitsWord,
  transformOutsideProtectedMarkdown,
  wrapMarkdownUrl,
} from "../../runtime/structuredMarkdownRuntime.js";
import {
  prepareStructuredMarkdown,
  type LiteratureSource,
  type StructuredCitation,
  type StructuredSource,
} from "./structuredMarkdownText";

export interface StructuredMarkdownProps {
  areCitationPreviewsEnabled?: boolean;
  components?: Record<string, unknown>;
  content: string;
  citations?: StructuredCitation[];
  definitionHighlights?: unknown[];
  mathLabelPrefix?: string | number;
  mathSyntax?: string;
  literatureSources?: LiteratureSource[];
  mode?: "default" | "compact" | string;
  sources?: StructuredSource[];
  sx?: unknown;
}

export function StructuredMarkdown({
  areCitationPreviewsEnabled = true,
  components,
  content,
  citations = [],
  definitionHighlights = [],
  mathLabelPrefix,
  mathSyntax = "compatibility",
  literatureSources = [],
  mode = "default",
  sources = [],
  sx,
}: StructuredMarkdownProps) {
  if (!content.trim()) return null;
  const compact = mode === "compact";
  const prepared = prepareStructuredMarkdown(
    content,
    sources,
    citations,
    literatureSources,
    compact,
    {
      advancePastWord,
      escapeMarkdownLabel,
      formatSourceLabel,
      isInsideMath,
      splitsWord,
      transformOutsideProtectedMarkdown,
      wrapMarkdownUrl,
    },
  );
  const citationComponents =
    !compact || literatureSources.length > 0
      ? areCitationPreviewsEnabled
        ? citationPreviewComponents
        : citationLinkComponents
      : undefined;
  const mergedComponents =
    citationComponents && components
      ? { ...citationComponents, ...components }
      : (components ?? citationComponents);
  return (
    <InlineMarkdown
      content={prepared}
      mathLabelPrefix={compact ? undefined : mathLabelPrefix}
      mathSyntax={mathSyntax}
      mode={mode}
      sx={sx}
      components={mergedComponents}
      highlights={compact ? undefined : definitionHighlights}
      showCodeCopyButton={!compact}
    />
  );
}
