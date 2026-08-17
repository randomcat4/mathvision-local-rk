import {
  Suspense,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "#production-react";
import { THREAD_TOUR_TARGETS } from "./AssistantTools";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  alpha,
  Box,
  Card,
  Chip,
  CitationLink,
  ComputeStructuredSection,
  CopyButton,
  ExpandMoreIcon,
  getSectionCopyContent,
  getStructuredSections,
  isLiteratureSources,
  isNextStepChoices,
  isVariableDefinitions,
  NextStepChoices,
  NextStepsResponse,
  Paper,
  Stack,
  stringifySectionValue,
  StructuredMarkdown,
  Tab,
  Tabs,
  transformMarkdownMath,
  Typography,
  VisualizationStructuredSection,
  WriteupStructuredResponsePanel,
  type CitationConnection,
  type CitationMetadata,
  type LiteratureSource,
  type StructuredResponse,
  type StructuredSection,
  type VariableDefinition,
} from "../../runtime/assistantStructuredRuntime.js";

export type ReviewSeverity = "low" | "medium" | "high";
type Appearance = "chat" | "notebook";
const definitionListStyles = (theme: any) => ({
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
  margin: 0,
  overflow: "hidden",
  border: `1px solid ${alpha(theme.palette.text.primary, 0.07)}`,
  borderRadius: theme.shape.borderRadiusPx,
  backgroundColor: alpha(theme.palette.background.paper, 0.62),
});
const definitionRow = (theme: any) => ({
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
  "& + &": {
    borderTop: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
  },
});
const definitionTerm = (theme: any) => ({
  minWidth: 0,
  margin: 0,
  padding: theme.spacing(1.15, 1.5),
  overflowX: "auto",
  overflowY: "hidden",
  borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
  backgroundColor: alpha(theme.palette.primary.main, 0.035),
  [theme.breakpoints.down(720)]: { padding: theme.spacing(1.2, 1.4) },
});
const definitionMeaning = (theme: any) => ({
  minWidth: 0,
  margin: 0,
  padding: theme.spacing(1.3, 1.5),
  [theme.breakpoints.down(720)]: { padding: theme.spacing(1.2, 1.4) },
});
const symbolStyles = (theme: any) => ({
  display: "block",
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,
  margin: 0,
  color: theme.palette.text.secondary,
  fontSize: ".88rem",
  fontWeight: 800,
  lineHeight: 1.25,
  "& :where(p)": { margin: 0 },
  "& :where(.katex)": {
    display: "inline-block",
    maxWidth: "none",
    overflow: "visible",
    verticalAlign: "middle",
    fontSize: "1em",
  },
});
const notesStyles = (theme: any) => ({
  marginTop: theme.spacing(1.4),
  paddingTop: theme.spacing(1.4),
  borderTop: `1px solid ${alpha(theme.palette.text.primary, 0.12)}`,
  color: theme.palette.text.secondary,
});
const markdownStyles = { fontSize: "1rem" };
export const assistantHeaderStyles = {
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: 1,
  flexWrap: "wrap",
  pb: 1.2,
  mb: 1.8,
  borderBottom: "1px solid",
  borderColor: "divider",
};
const notebookHeaderStyles = {
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  minHeight: "1.75rem",
};
const severityPalette = (theme: any, severity: ReviewSeverity) =>
  severity === "low"
    ? theme.palette.success
    : severity === "medium"
      ? { ...theme.palette.warning, main: theme.palette.review.medium }
      : theme.palette.warning;
export const assistantContainerStyles =
  (severity: ReviewSeverity | null, appearance: Appearance = "chat") =>
  (theme: any) => {
    if (appearance === "notebook")
      return {
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(0.5),
      };
    if (!severity)
      return {
        display: "flex",
        flexDirection: "column",
        gap: ".75rem",
        scrollMarginTop: theme.spacing(20),
      };
    const color = severityPalette(theme, severity);
    return {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: ".75rem",
      scrollMarginTop: theme.spacing(20),
      paddingLeft: theme.spacing(1.25),
      "&::before": {
        content: '""',
        position: "absolute",
        top: theme.spacing(0.2),
        bottom: theme.spacing(0.2),
        left: 0,
        width: ".28rem",
        borderRadius: "999px",
        background: `linear-gradient(180deg, ${alpha(color.main, 0.95)}, ${alpha(color.main, 0.34)})`,
        boxShadow: `0 0 0 1px ${alpha(color.main, 0.16)}, 0 0 22px ${alpha(color.main, 0.14)}`,
      },
    };
  };
export const assistantPanelStyles =
  (severity: ReviewSeverity | null, appearance: Appearance = "chat") =>
  (theme: any) => {
    if (appearance === "notebook")
      return {
        minWidth: 0,
        padding: theme.spacing(0.5, 0, 0),
        border: 0,
        borderRadius: 0,
        background: "transparent",
        boxShadow: "none",
      };
    const color = severity ? severityPalette(theme, severity) : null;
    return {
      minWidth: 0,
      padding: theme.spacing(2),
      border: `1px solid ${color ? alpha(color.main, 0.18) : alpha(theme.palette.text.primary, 0.08)}`,
      borderRadius: theme.shape.borderRadiusPx,
      background: color
        ? `linear-gradient(135deg, ${alpha(color.main, 0.055)}, ${alpha(theme.palette.background.paper, 0.78)} 36%, ${alpha(theme.palette.background.paper, 0.66)})`
        : `linear-gradient(180deg, ${alpha(theme.palette.background.paper, 0.82)}, ${alpha(theme.palette.background.paper, 0.66)})`,
      boxShadow: `inset 0 1px 0 ${alpha(theme.palette.common.white, 0.28)}, 0 16px 32px ${alpha(theme.palette.text.primary, 0.05)}`,
      [theme.breakpoints.down(720)]: { padding: theme.spacing(1.6) },
    };
  };
const tabsStyles =
  (severity: ReviewSeverity | null, appearance: Appearance) => (theme: any) => {
    const review = severity ? severityPalette(theme, severity) : null;
    const color = review?.main ?? theme.palette.primary.main;
    if (appearance === "notebook")
      return {
        flex: "1 1 auto",
        minHeight: 0,
        minWidth: 0,
        borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
        "& .MuiTabs-list": { gap: theme.spacing(1.5) },
        "& .MuiTab-root": {
          minWidth: 0,
          minHeight: "2.25rem",
          padding: theme.spacing(0.5, 0.25),
        },
        "& .MuiTabs-indicator": {
          height: "2px",
          borderRadius: "2px 2px 0 0",
          backgroundColor: color,
        },
      };
    return {
      flex: "1 1 auto",
      minHeight: 0,
      minWidth: 0,
      padding: theme.spacing(0.35, 0.5),
      borderRadius: "999px",
      border: `1px solid ${alpha(color, review ? 0.2 : 0.1)}`,
      background: `linear-gradient(180deg, ${alpha(theme.palette.background.paper, 0.94)}, ${alpha(color, review ? 0.08 : 0.035)})`,
      boxShadow: `inset 0 1px 0 ${alpha(theme.palette.common.white, 0.34)}, 0 8px 22px ${alpha(color, review ? 0.1 : 0.05)}`,
      "& .MuiTabs-list": {
        gap: theme.spacing(0.5),
        width: "max-content",
        minWidth: "100%",
        justifyContent: "flex-start",
        paddingInline: theme.spacing(1.1),
        [theme.breakpoints.down(720)]: { paddingInline: theme.spacing(0.65) },
      },
      "& .MuiTab-root": {
        zIndex: 1,
        minHeight: "2.7rem",
        paddingInline: theme.spacing(1.8),
        [theme.breakpoints.down(720)]: {
          fontSize: ".72rem",
          minHeight: "2.55rem",
          paddingInline: theme.spacing(1.56),
        },
      },
      "& .MuiTabs-indicator": {
        top: theme.spacing(0.35),
        bottom: theme.spacing(0.35),
        height: "auto",
        borderRadius: "999px",
        background: `linear-gradient(135deg, ${alpha(color, review ? 0.2 : 0.14)}, ${alpha(color, review ? 0.08 : 0.05)})`,
        border: `1px solid ${alpha(color, review ? 0.24 : 0.16)}`,
        boxShadow: `0 3px 10px ${alpha(color, 0.12)}`,
      },
      ...(review ? { "& .Mui-selected": { color: review.main } } : {}),
    };
  };

function boldSymbol(symbol: string) {
  const trimmed = symbol.trim();
  return !trimmed || /^\\(?:boldsymbol|mathbf|pmb)\b/.test(trimmed)
    ? symbol
    : `\\boldsymbol{${trimmed}}`;
}
function VariableDefinitions({
  definitions,
  areCitationPreviewsEnabled = true,
  citations = [],
  mathSyntax = "compatibility",
  sources = [],
}: {
  definitions: VariableDefinition[];
  areCitationPreviewsEnabled?: boolean;
  citations?: unknown[];
  mathSyntax?: string;
  sources?: unknown[];
}) {
  return (
    <Box component="dl" sx={definitionListStyles}>
      {definitions.map((definition, index) => (
        <Box
          component="div"
          sx={definitionRow}
          key={`${definition.symbol}-${index}`}
        >
          <Box component="dt" sx={definitionTerm}>
            <StructuredMarkdown
              areCitationPreviewsEnabled={areCitationPreviewsEnabled}
              content={transformMarkdownMath(definition.symbol, boldSymbol)}
              citations={citations}
              mathSyntax={mathSyntax}
              sources={sources}
              sx={symbolStyles}
            />
          </Box>
          <Box component="dd" sx={definitionMeaning}>
            <StructuredMarkdown
              areCitationPreviewsEnabled={areCitationPreviewsEnabled}
              content={definition.meaning}
              citations={citations}
              mathSyntax={mathSyntax}
              sources={sources}
              sx={markdownStyles}
            />
            {definition.notes && (
              <Box sx={notesStyles}>
                <StructuredMarkdown
                  areCitationPreviewsEnabled={areCitationPreviewsEnabled}
                  content={definition.notes}
                  citations={citations}
                  mathSyntax={mathSyntax}
                  sources={sources}
                  sx={markdownStyles}
                />
              </Box>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
function StructuredTabs({
  active,
  appearance,
  ariaLabel = "Structured response sections",
  actionsEnabled,
  hasWriteup,
  idPrefix = "assistant-structured",
  onChange,
  sections,
  severity,
}: {
  active: string;
  appearance: Appearance;
  ariaLabel?: string;
  actionsEnabled: boolean;
  hasWriteup: boolean;
  idPrefix?: string;
  onChange(key: string): void;
  sections: StructuredSection[];
  severity: ReviewSeverity | null;
}) {
  return (
    <Box
      sx={(theme: any) => ({
        minWidth: 0,
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(0.75),
        [theme.breakpoints.down(720)]: { gap: theme.spacing(0.55) },
      })}
    >
      <Tabs
        data-thread-tour-target={
          hasWriteup && actionsEnabled
            ? THREAD_TOUR_TARGETS.structuredResponseTabs
            : undefined
        }
        value={active}
        variant="scrollable"
        scrollButtons={false}
        aria-label={ariaLabel}
        sx={tabsStyles(severity, appearance)}
        onChange={(_event: unknown, value: string) => {
          if (value !== active) onChange(value);
        }}
      >
        {sections.map((section) => (
          <Tab
            data-thread-tour-target={
              section.key === "writeup"
                ? THREAD_TOUR_TARGETS.writeupTab
                : undefined
            }
            disableRipple
            value={section.key}
            label={section.label}
            id={`${idPrefix}-tab-${section.key}`}
            aria-controls={`${idPrefix}-panel-${section.key}`}
            key={section.key}
          />
        ))}
      </Tabs>
    </Box>
  );
}
const connectionsStyles = (theme: any) => ({
  marginTop: theme.spacing(1.25),
  paddingTop: theme.spacing(1.25),
  borderTop: `1px solid ${alpha(theme.palette.text.primary, 0.1)}`,
});
const accordionStyles = (theme: any) => ({
  marginTop: theme.spacing(1),
  border: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
  borderRadius: theme.shape.borderRadiusPx,
  backgroundColor: alpha(theme.palette.background.paper, 0.42),
  boxShadow: "none",
  "&::before": { display: "none" },
  "&.Mui-expanded": { margin: `${theme.spacing(1)} 0 0` },
});
function ConnectionGroup({
  enabled,
  connections,
  label,
}: {
  enabled: boolean;
  connections: CitationConnection[];
  label: string;
}) {
  return (
    <Stack spacing={0.65}>
      <Typography variant="cardEyebrow" color="textSecondary">
        {label}
      </Typography>
      <Stack
        direction="row"
        spacing={0.65}
        useFlexGap
        sx={{ flexWrap: "wrap" }}
      >
        {connections.map((connection) => (
          <CitationLink
            accessibleLabel={connection.title}
            href={connection.link}
            isPreviewEnabled={enabled}
            label={
              connection.source_id
                ? `${connection.source_id} · ${connection.title}`
                : connection.title
            }
            title={connection.title}
            key={`${connection.relationship}:${connection.source_id ?? connection.link}`}
          />
        ))}
      </Stack>
    </Stack>
  );
}
function CitationConnections({
  enabled,
  metadata,
}: {
  enabled: boolean;
  metadata: CitationMetadata;
}) {
  const id = useId();
  const cites = metadata.connections.filter(
    (item) => item.relationship === "cites",
  );
  const citedBy = metadata.connections.filter(
    (item) => item.relationship === "cited_by",
  );
  const summary = (label: string, items: CitationConnection[]) => {
    const ids = items.flatMap((item) =>
      item.source_id ? [item.source_id] : [],
    );
    const rest = items.length - ids.length;
    return ids.length === 0
      ? `${label}: ${items.length} related ${items.length === 1 ? "paper" : "papers"}`
      : `${label}: ${ids.join(", ")}${rest > 0 ? ` + ${rest} more` : ""}`;
  };
  return (
    <Stack sx={connectionsStyles}>
      <Stack
        direction="row"
        spacing={0.65}
        useFlexGap
        sx={{ flexWrap: "wrap" }}
      >
        {metadata.citation_count != null && (
          <Chip
            color="primary"
            label={`Cited by ${metadata.citation_count.toLocaleString()}`}
            size="small"
          />
        )}
        {cites.length > 0 && (
          <Chip
            label={summary("Cites", cites)}
            size="small"
            variant="outlined"
          />
        )}
        {citedBy.length > 0 && (
          <Chip
            label={summary("Cited by", citedBy)}
            size="small"
            variant="outlined"
          />
        )}
      </Stack>
      {metadata.connections.length > 0 && (
        <Accordion
          disableGutters
          slotProps={{
            heading: { component: "h4" },
            transition: { unmountOnExit: true },
          }}
          sx={accordionStyles}
        >
          <AccordionSummary
            id={`${id}-header`}
            aria-controls={`${id}-content`}
            expandIcon={<ExpandMoreIcon fontSize="small" />}
          >
            <Typography component="span" variant="cardMeta">
              Citation connections ({metadata.connections.length})
            </Typography>
          </AccordionSummary>
          <AccordionDetails id={`${id}-content`}>
            <Stack spacing={1.25}>
              {cites.length > 0 && (
                <ConnectionGroup
                  enabled={enabled}
                  connections={cites}
                  label="Cites"
                />
              )}
              {citedBy.length > 0 && (
                <ConnectionGroup
                  enabled={enabled}
                  connections={citedBy}
                  label="Cited by"
                />
              )}
            </Stack>
          </AccordionDetails>
        </Accordion>
      )}
    </Stack>
  );
}
const sourceCard = (theme: any) => ({
  minWidth: 0,
  padding: theme.spacing(1.9),
  border: `1px solid ${alpha(theme.palette.text.primary, 0.07)}`,
  borderRadius: theme.shape.borderRadiusPx,
  backgroundColor: alpha(theme.palette.background.paper, 0.62),
});
function LiteratureSources({
  sources,
  enabled,
  citations,
  citationSources,
  definitionHighlights,
  mathSyntax,
  markdownMode,
}: {
  sources: LiteratureSource[];
  enabled: boolean;
  citations: unknown[];
  citationSources: unknown[];
  definitionHighlights: unknown[];
  mathSyntax: string;
  markdownMode: string;
}) {
  return (
    <Stack spacing={0.85}>
      {sources.map((source) => (
        <Card variant="inset" sx={sourceCard} key={source.source_id}>
          <Box sx={{ display: "inline-block", mb: "1.1rem" }}>
            <Typography
              component="span"
              variant="cardEyebrow"
              color="textSecondary"
            >
              {source.source_id}
            </Typography>
          </Box>
          <Typography component="h3" variant="cardTitle">
            {source.title}
          </Typography>
          <Box sx={{ mt: ".45rem" }}>
            <Typography component="p" variant="cardMeta" color="textSecondary">
              {[
                source.authors,
                source.venue_year,
                source.source_type,
                source.verification_status,
              ]
                .filter(Boolean)
                .join(" · ")}
            </Typography>
          </Box>
          {source.citation_metadata && (
            <CitationConnections
              enabled={enabled}
              metadata={source.citation_metadata}
            />
          )}{" "}
          {source.theorem_statement && (
            <Box sx={notesStyles}>
              <StructuredMarkdown
                areCitationPreviewsEnabled={enabled}
                content={source.theorem_statement}
                citations={citations}
                definitionHighlights={definitionHighlights}
                literatureSources={sources}
                mathSyntax={mathSyntax}
                mode={markdownMode}
                sources={citationSources}
                sx={markdownStyles}
              />
            </Box>
          )}
          <StructuredMarkdown
            areCitationPreviewsEnabled={enabled}
            content={source.relevance}
            citations={citations}
            definitionHighlights={definitionHighlights}
            literatureSources={sources}
            mathSyntax={mathSyntax}
            mode={markdownMode}
            sources={citationSources}
            sx={markdownStyles}
          />
          {source.link && (
            <CitationLink
              accessibleLabel={source.title}
              href={source.link}
              isPreviewEnabled={enabled}
              label="Open source"
              title={source.title}
            />
          )}
        </Card>
      ))}
    </Stack>
  );
}
const severityLabels = {
  low: "Low severity",
  medium: "Medium severity",
  high: "High severity",
};
function SectionContent({
  artifactMessage,
  section,
  citations,
  enabled,
  definitionHighlights,
  mathLabelPrefix,
  markdownMathFormat,
  mathSyntax,
  markdownMode,
  literatureSources,
  sources,
  visualizationArtifactRefs,
  visualizationArtifacts,
  decisionSeverity,
  nextStepChoiceRunLabel,
  areNextStepTooltipsDisabled,
  onSelectNextStep,
}: {
  artifactMessage: unknown;
  section: StructuredSection;
  citations: unknown[];
  enabled: boolean;
  definitionHighlights: unknown[];
  mathLabelPrefix?: string | number;
  markdownMathFormat?: string;
  mathSyntax: string;
  markdownMode: string;
  literatureSources: LiteratureSource[];
  sources: unknown[];
  visualizationArtifactRefs: unknown;
  visualizationArtifacts: unknown;
  decisionSeverity: ReviewSeverity | null;
  nextStepChoiceRunLabel?: string;
  areNextStepTooltipsDisabled: boolean;
  onSelectNextStep?: unknown;
}) {
  if (section.key === "choices" && isNextStepChoices(section.value))
    return (
      <NextStepChoices
        choices={section.value}
        runLabel={nextStepChoiceRunLabel}
        areTooltipsDisabled={areNextStepTooltipsDisabled}
        mathSyntax={mathSyntax}
        onSelectNextStep={onSelectNextStep}
      />
    );
  if (section.key === "variable_defs" && isVariableDefinitions(section.value))
    return (
      <VariableDefinitions
        definitions={section.value}
        areCitationPreviewsEnabled={enabled}
        citations={citations}
        mathSyntax={mathSyntax}
        sources={sources}
      />
    );
  if (
    (section.key === "sources" || section.key === "bibliography") &&
    isLiteratureSources(section.value)
  )
    return (
      <LiteratureSources
        sources={section.value}
        enabled={enabled}
        citations={citations}
        citationSources={sources}
        definitionHighlights={definitionHighlights}
        mathSyntax={mathSyntax}
        markdownMode={markdownMode}
      />
    );
  const content = (
    <Box sx={{ minWidth: 0 }}>
      <StructuredMarkdown
        areCitationPreviewsEnabled={enabled}
        content={stringifySectionValue(section.value, markdownMathFormat)}
        citations={citations}
        definitionHighlights={definitionHighlights}
        mathLabelPrefix={mathLabelPrefix}
        mathSyntax={mathSyntax}
        literatureSources={literatureSources}
        mode={markdownMode}
        sources={sources}
        sx={markdownStyles}
      />
    </Box>
  );
  if (section.key === "visualization" && typeof section.value === "string")
    return (
      <Suspense fallback={content}>
        <VisualizationStructuredSection
          artifactMessage={artifactMessage}
          artifactRefs={visualizationArtifactRefs}
          artifacts={visualizationArtifacts}
          mathSyntax={mathSyntax}
        >
          {content}
        </VisualizationStructuredSection>
      </Suspense>
    );
  if (section.key === "decision" && decisionSeverity)
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 1.2,
          minWidth: 0,
        }}
      >
        <Box
          sx={(theme: any) => ({
            display: "inline-flex",
            alignItems: "center",
            minHeight: "1.625rem",
            paddingInline: theme.spacing(1),
            paddingBlock: theme.spacing(0.25),
            border: `1px solid ${alpha(theme.palette.text.primary, 0.1)}`,
            borderRadius: "999px",
            backgroundColor: alpha(theme.palette.background.paper, 0.72),
            color: theme.palette.text.primary,
          })}
        >
          <Typography variant="caption" color="inherit">
            {severityLabels[decisionSeverity]}
          </Typography>
        </Box>
        {content}
      </Box>
    );
  return content;
}

export interface AssistantStructuredResponseProps {
  appearance?: Appearance;
  artifactMessage?: unknown;
  chatId?: string | null;
  messageIndex: number;
  areWriteupActionsEnabled?: boolean;
  areWriteupExportsEnabled?: boolean;
  areCitationPreviewsEnabled?: boolean;
  shouldPrepareWriteupPdf?: boolean;
  writeupPdfPreparationPriority?: number;
  areVariableHighlightsEnabled?: boolean;
  areNextStepTooltipsDisabled?: boolean;
  responseNumber?: number;
  markdownMathFormat?: string;
  response: StructuredResponse;
  toolCalls?: unknown;
  computationArtifacts?: unknown;
  visualizationArtifacts?: unknown;
  citations?: unknown[];
  sources?: unknown[];
  nextStepChoiceRunLabel?: string;
  isNextStepsActionDisabled?: boolean;
  isRunAllNextStepsDisabled?: boolean;
  isRunAllNextStepsPending?: boolean;
  onSelectNextStep?: unknown;
  onRunNextSteps?: unknown;
  onRunAllNextSteps?: unknown;
  onContentResizeInteraction?(): void;
  sectionIdPrefix?: string;
  sectionsAriaLabel?: string;
}
const isSeverity = (value: unknown): value is ReviewSeverity =>
  value === "low" || value === "medium" || value === "high";
export function AssistantStructuredResponse({
  appearance = "chat",
  artifactMessage,
  chatId = null,
  messageIndex,
  areWriteupActionsEnabled = true,
  areWriteupExportsEnabled = true,
  areCitationPreviewsEnabled = true,
  shouldPrepareWriteupPdf = false,
  writeupPdfPreparationPriority = 0,
  areVariableHighlightsEnabled = true,
  areNextStepTooltipsDisabled = false,
  responseNumber,
  markdownMathFormat,
  response,
  toolCalls,
  computationArtifacts,
  visualizationArtifacts,
  citations = [],
  sources = [],
  nextStepChoiceRunLabel,
  isNextStepsActionDisabled = false,
  isRunAllNextStepsDisabled = false,
  isRunAllNextStepsPending = false,
  onSelectNextStep,
  onRunNextSteps,
  onRunAllNextSteps,
  onContentResizeInteraction,
  sectionIdPrefix = "assistant-structured",
  sectionsAriaLabel = "Structured response sections",
}: AssistantStructuredResponseProps) {
  const sections = useMemo(() => getStructuredSections(response), [response]);
  const literatureSources = useMemo(
    () =>
      response.operation === "lit-search" &&
      isLiteratureSources(response.bibliography)
        ? response.bibliography
        : [],
    [response],
  );
  const mathSyntax =
    markdownMathFormat === "canonical-v1" ? "canonical" : "compatibility";
  const markdownMode = useMemo(
    () =>
      response.operation === "compute" ||
      sections.some(
        (section) =>
          section.key === "variable_defs" &&
          isVariableDefinitions(section.value),
      )
        ? "default"
        : "compact",
    [response.operation, sections],
  );
  const severity = useMemo(
    () =>
      response.operation === "referee" && isSeverity(response.decision_severity)
        ? response.decision_severity
        : null,
    [response],
  );
  const highlights = useMemo(
    () =>
      isVariableDefinitions(response.variable_defs)
        ? response.variable_defs
            .map((item, index) => ({
              id: `variable-definition-${index}`,
              note: item.notes?.trim(),
              text: item.symbol.trim(),
              tooltip: item.meaning.trim(),
            }))
            .filter((item) => item.text && item.tooltip)
        : [],
    [response],
  );
  const definitionHighlights = areVariableHighlightsEnabled ? highlights : [];
  const sectionKeySignature = sections.map((section) => section.key).join("|");
  const [activeKey, setActiveKey] = useState(sections[0]?.key ?? "");
  const containerRef = useRef<HTMLElement | null>(null);
  const pendingScrollKey = useRef<string | null>(null);
  const activeSection =
    sections.find((section) => section.key === activeKey) ??
    sections[0] ??
    null;
  const computeCode =
    response.operation === "compute" && activeSection?.key === "code";
  const copyContent = useMemo(
    () =>
      activeSection && !computeCode
        ? getSectionCopyContent(activeSection.value)
        : "",
    [activeSection, computeCode],
  );
  useEffect(() => {
    pendingScrollKey.current = null;
    setActiveKey(sections[0]?.key ?? "");
  }, [sectionKeySignature, sections]);
  useLayoutEffect(() => {
    if (pendingScrollKey.current === activeSection?.key) {
      pendingScrollKey.current = null;
      if (appearance !== "notebook")
        containerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
    }
  }, [activeSection?.key, appearance]);
  const writeupSection = sections.find(
    (section) => section.key === "writeup" && typeof section.value === "string",
  );
  const writeup =
    typeof writeupSection?.value === "string" ? writeupSection.value : null;
  const writeupActive = activeSection?.key === "writeup" && writeup !== null;
  if (response.operation === "next-steps")
    return (
      <NextStepsResponse
        choices={response.choices}
        mathSyntax={mathSyntax}
        messageIndex={messageIndex}
        nextStepChoiceRunLabel={nextStepChoiceRunLabel}
        areTooltipsDisabled={areNextStepTooltipsDisabled}
        isNextStepsActionDisabled={isNextStepsActionDisabled}
        areRunAllNextStepsDisabled={isRunAllNextStepsDisabled}
        areRunAllNextStepsPending={isRunAllNextStepsPending}
        onSelectNextStep={onSelectNextStep}
        onRunNextSteps={onRunNextSteps}
        onRunAllNextSteps={onRunAllNextSteps}
      />
    );
  if (!activeSection) return null;
  return (
    <Box ref={containerRef} sx={assistantContainerStyles(severity, appearance)}>
      <StructuredTabs
        active={activeSection.key}
        appearance={appearance}
        ariaLabel={sectionsAriaLabel}
        actionsEnabled={areWriteupActionsEnabled}
        hasWriteup={!!writeup}
        idPrefix={sectionIdPrefix}
        sections={sections}
        severity={severity}
        onChange={(key) => {
          onContentResizeInteraction?.();
          pendingScrollKey.current = key;
          setActiveKey(key);
        }}
      />
      {writeup !== null && (
        <Suspense fallback={null}>
          <WriteupStructuredResponsePanel
            areWriteupActionsEnabled={areWriteupActionsEnabled}
            areWriteupExportsEnabled={areWriteupExportsEnabled}
            chatId={chatId}
            copyContent={copyContent}
            hidden={!writeupActive}
            markdownMode={markdownMode}
            messageIndex={messageIndex}
            onContentResizeInteraction={onContentResizeInteraction}
            panelId={`${sectionIdPrefix}-panel-writeup`}
            panelLabelledBy={`${sectionIdPrefix}-tab-writeup`}
            shouldPrepareWriteupPdf={shouldPrepareWriteupPdf}
            writeupPdfPreparationPriority={writeupPdfPreparationPriority}
            writeupValue={writeup}
          />
        </Suspense>
      )}
      {!writeupActive && (
        <Paper
          variant="inset"
          sx={assistantPanelStyles(severity, appearance)}
          role="tabpanel"
          id={`${sectionIdPrefix}-panel-${activeSection.key}`}
          aria-labelledby={`${sectionIdPrefix}-tab-${activeSection.key}`}
        >
          {!computeCode && (
            <Box
              component="header"
              sx={
                appearance === "notebook"
                  ? notebookHeaderStyles
                  : assistantHeaderStyles
              }
            >
              <CopyButton
                content={copyContent}
                label="Copy"
                tooltipLabel="Copy response"
                iconOnly
              />
            </Box>
          )}
          {computeCode && (
            <Suspense fallback={null}>
              <ComputeStructuredSection
                artifactMessage={artifactMessage}
                artifacts={computationArtifacts}
                mathSyntax={mathSyntax}
                status={response.status}
                toolCalls={toolCalls}
              />
            </Suspense>
          )}
          {!computeCode && (
            <SectionContent
              artifactMessage={artifactMessage}
              section={activeSection}
              citations={citations}
              enabled={areCitationPreviewsEnabled}
              definitionHighlights={definitionHighlights}
              mathLabelPrefix={responseNumber}
              markdownMathFormat={markdownMathFormat}
              mathSyntax={mathSyntax}
              markdownMode={markdownMode}
              literatureSources={literatureSources}
              sources={sources}
              visualizationArtifactRefs={response.artifact_refs}
              visualizationArtifacts={visualizationArtifacts}
              decisionSeverity={severity}
              nextStepChoiceRunLabel={nextStepChoiceRunLabel}
              areNextStepTooltipsDisabled={areNextStepTooltipsDisabled}
              onSelectNextStep={onSelectNextStep}
            />
          )}
        </Paper>
      )}
    </Box>
  );
}
