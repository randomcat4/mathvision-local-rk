import { memo, useCallback, useMemo, useState, type MouseEventHandler, type ReactNode } from "#production-react";

import type { mapChatMessage } from "../../api/chats/responses";
import {
  AgentExecutionSummary,
  AgentOutputListItem,
  AgentTaskProgress,
  Alert,
  AlertTitle,
  Chip,
  CitationLink,
  CITATION_LINK_TITLE,
  escapeMarkdownLabel,
  Link,
  List,
  normalizeAssistantMarkdown,
  SAFE_AGENT_ERROR_MESSAGE,
  Stack,
  Typography,
  UNRESOLVED_SAFE_ERROR_PREFIX,
} from "../../runtime/agentExecutionRuntime.js";
import { StructuredMarkdown } from "../chat/StructuredMarkdown";
import { agentOutputIdFromHref, appendUnreferencedAgentOutputs } from "./agentExecutionLinks";

type ChatMessage = ReturnType<typeof mapChatMessage>;

export interface AgentExecutionResultProps {
  message: ChatMessage;
  chatId?: string;
  messageIndex: number;
  responseNumber?: number;
  areCitationPreviewsEnabled?: boolean;
  areVariableHighlightsEnabled?: boolean;
  areWriteupActionsEnabled?: boolean;
  areWriteupExportsEnabled?: boolean;
  shouldPrepareWriteupPdf?: boolean;
  writeupPdfPreparationPriority?: number;
  onContentResizeInteraction?: () => void;
}

interface MarkdownAnchorProps {
  node?: unknown;
  href?: string;
  title?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  className?: string;
  id?: string;
  [key: string]: unknown;
}

const outcomeLabels = { completed: "Completed", partial: "Partial result", failed: "Failed" } as const;
const outcomeColors = { completed: "success", partial: "warning", failed: "error" } as const;
const containerStyles = (theme: { spacing(value: number): string }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.2),
});
const unresolvedListStyles = { listStyle: "disc", paddingLeft: 3 };

function AgentExecutionResultView({
  message,
  chatId,
  messageIndex,
  responseNumber,
  areCitationPreviewsEnabled = true,
  areVariableHighlightsEnabled = true,
  areWriteupActionsEnabled = true,
  areWriteupExportsEnabled = true,
  shouldPrepareWriteupPdf = false,
  writeupPdfPreparationPriority = 0,
  onContentResizeInteraction,
}: AgentExecutionResultProps) {
  const execution = message.agentExecution;
  const citationState = useMemo(() => {
    const requestedCitationIds = new Set(execution?.citationIds ?? []);
    const answerCitations = (message.citations ?? []).filter((citation) =>
      requestedCitationIds.has(citation.id),
    );
    const presentCitationIds = new Set(answerCitations.map((citation) => citation.id));
    const requestedSourceIds = new Set(answerCitations.flatMap((citation) => citation.sourceIds));
    const answerSources = (message.sources ?? []).filter((source) => requestedSourceIds.has(source.id));
    const presentSourceIds = new Set(answerSources.map((source) => source.id));
    return {
      answerCitations,
      answerSources,
      missingAnswerCitationIds: [...requestedCitationIds].filter((id) => !presentCitationIds.has(id)),
      missingAnswerSourceIds: [...requestedSourceIds].filter((id) => !presentSourceIds.has(id)),
    };
  }, [execution?.citationIds, message.citations, message.sources]);
  const outputsById = useMemo(
    () => new Map((execution?.outputs ?? []).map((output) => [output.id, output])),
    [execution?.outputs],
  );
  const [requestedOutput, setRequestedOutput] = useState<{
    outputId: string;
    requestKey: number;
  } | null>(null);
  const selectOutput = useCallback(
    (outputId: string) => {
      if (!outputsById.has(outputId)) {
        throw new Error(`Final answer references unavailable Agent output '${outputId}'.`);
      }
      onContentResizeInteraction?.();
      setRequestedOutput((previous) => ({
        outputId,
        requestKey: (previous?.requestKey ?? 0) + 1,
      }));
    },
    [onContentResizeInteraction, outputsById],
  );
  const answer = useMemo(() => {
    if (!execution) return "";
    if (execution.outcome === "failed") return SAFE_AGENT_ERROR_MESSAGE;
    return appendUnreferencedAgentOutputs(
      execution.answer,
      execution.usedOperationOutputIds,
      new Map(execution.outputs.map((output) => [output.id, output.title])),
      escapeMarkdownLabel,
    );
  }, [execution]);
  const normalizedAnswer = useMemo(
    () => normalizeAssistantMarkdown(answer, message.markdownMathFormat ?? undefined),
    [answer, message.markdownMathFormat],
  );
  const unresolvedItems = useMemo(
    () =>
      (execution?.unresolvedItems ?? []).map((item) => {
        const visibleItem = item.startsWith(UNRESOLVED_SAFE_ERROR_PREFIX)
          ? SAFE_AGENT_ERROR_MESSAGE
          : item;
        return {
          content: normalizeAssistantMarkdown(visibleItem, message.markdownMathFormat ?? undefined),
          item: visibleItem,
        };
      }),
    [execution?.unresolvedItems, message.markdownMathFormat],
  );
  const markdownComponents = useMemo(
    () => ({
      a: ({ node: _node, href, title, children, onClick, ...anchorProps }: MarkdownAnchorProps) => {
        const outputId = agentOutputIdFromHref(href);
        if (!outputId || !outputsById.has(outputId)) {
          return title === CITATION_LINK_TITLE && href ? (
            <CitationLink
              className={anchorProps.className}
              href={href}
              id={anchorProps.id}
              isPreviewEnabled={areCitationPreviewsEnabled}
              label={children}
            />
          ) : (
            <a href={href} title={title} onClick={onClick} {...anchorProps}>{children}</a>
          );
        }
        return (
          <Link
            href={href}
            title={title}
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              onClick?.(event);
              if (!event.defaultPrevented) {
                event.preventDefault();
                selectOutput(outputId);
              }
            }}
            {...anchorProps}
          >
            {children}
          </Link>
        );
      },
    }),
    [areCitationPreviewsEnabled, outputsById, selectOutput],
  );
  if (!execution) return null;
  const sharedProgressProps = {
    execution,
    areCitationPreviewsEnabled,
    areVariableHighlightsEnabled,
    areWriteupActionsEnabled,
    areWriteupExportsEnabled,
    chatId,
    message,
    messageIndex,
    onContentResizeInteraction,
    operationOutputRequestKey: requestedOutput?.requestKey,
    requestedOperationOutputId: requestedOutput?.outputId,
    responseNumber,
    shouldPrepareWriteupPdf,
    writeupPdfPreparationPriority,
  };

  return (
    <Stack sx={containerStyles}>
      <AgentTaskProgress
        tasks={execution.tasks}
        operations={execution.operations}
        operationOutputs={execution.outputs}
        onOperationOutputSelect={selectOutput}
        {...sharedProgressProps}
      />
      <AgentExecutionSummary {...sharedProgressProps} />
      <Stack component="section" aria-label="Final outcome" sx={(theme: { spacing(value: number): string }) => ({ gap: theme.spacing(1) })}>
        <Stack direction="row" sx={(theme: { spacing(value: number): string }) => ({ alignItems: "center", gap: theme.spacing(0.7) })}>
          <Typography variant="subtitle2">Final outcome</Typography>
          <Chip label={outcomeLabels[execution.outcome]} color={outcomeColors[execution.outcome]} size="xs" variant="filled" />
        </Stack>
        <StructuredMarkdown
          areCitationPreviewsEnabled={areCitationPreviewsEnabled}
          components={markdownComponents}
          content={normalizedAnswer}
          citations={citationState.answerCitations}
          definitionHighlights={[]}
          mathLabelPrefix={responseNumber}
          mathSyntax={message.markdownMathFormat === "canonical-v1" ? "canonical" : "compatibility"}
          sources={citationState.answerSources}
        />
        {citationState.missingAnswerCitationIds.length > 0 ? (
          <Alert severity="error">Referenced answer citations are unavailable: {citationState.missingAnswerCitationIds.join(", ")}.</Alert>
        ) : null}
        {citationState.missingAnswerSourceIds.length > 0 ? (
          <Alert severity="error">Referenced answer sources are unavailable: {citationState.missingAnswerSourceIds.join(", ")}.</Alert>
        ) : null}
      </Stack>
      {execution.unresolvedItems.length > 0 ? (
        <Alert severity="warning">
          <AlertTitle>Unresolved items</AlertTitle>
          <List sx={unresolvedListStyles}>
            {unresolvedItems.map(({ content, item }) => (
              <AgentOutputListItem component="li" disablePadding={true} key={item}>
                <StructuredMarkdown
                  content={content}
                  mathSyntax={message.markdownMathFormat === "canonical-v1" ? "canonical" : "compatibility"}
                  mode="compact"
                />
              </AgentOutputListItem>
            ))}
          </List>
        </Alert>
      ) : null}
      {execution.safeError ? (
        <Alert severity="error"><AlertTitle>Agent error</AlertTitle>{SAFE_AGENT_ERROR_MESSAGE}</Alert>
      ) : null}
    </Stack>
  );
}

export const AgentExecutionResult = memo(AgentExecutionResultView);
