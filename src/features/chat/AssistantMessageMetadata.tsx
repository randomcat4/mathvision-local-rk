import {
  Box,
  getOperationLabel,
  MChip,
  ThinkingElapsedIcon,
  ThinkingElapsedLabel,
} from "../../runtime/messageMetadataUiRuntime.js";
import {
  getAssistantMetadataValues,
  type AssistantMetadataMessage,
  type AvailableModel,
} from "./assistantMetadata";

const metadataStyles = (theme: { spacing(value: number): string }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: theme.spacing(0.8),
  flexWrap: "wrap",
  marginBottom: theme.spacing(0.72),
  paddingInline: theme.spacing(0.2),
});

export interface AssistantMessageMetadataProps {
  message: AssistantMetadataMessage;
  responseNumber?: number | null;
  operation?: unknown;
  availableModels: readonly AvailableModel[];
  hasAdminRetryActivity?: boolean;
}

export function AssistantMessageMetadata({
  message,
  responseNumber,
  operation,
  availableModels,
  hasAdminRetryActivity = false,
}: AssistantMessageMetadataProps) {
  const { isAgent, modelLabel, showModel } = getAssistantMetadataValues(
    message,
    availableModels,
  );
  const hasOperation = !isAgent && Boolean(operation);
  const operationLabel = hasOperation && operation ? getOperationLabel(operation) : null;
  const operationIcon = operationLabel ? <ThinkingElapsedLabel operation={operation} /> : undefined;

  if (!responseNumber && !hasOperation && !showModel && !isAgent && !hasAdminRetryActivity) {
    return null;
  }
  return (
    <Box sx={metadataStyles}>
      {responseNumber && (
        <MChip label={`Answer ${responseNumber}`} color="primary" size="xs" variant="filled" />
      )}
      {isAgent && <MChip label="Agent" color="primary" size="xs" variant="filled" />}
      {operationLabel && (
        <MChip label={operationLabel} variant="filled" color="primary" icon={operationIcon} />
      )}
      {showModel && <MChip label={modelLabel} variant="filled" color="secondary" />}
      {hasAdminRetryActivity && (
        <MChip label="Retries detected" variant="filled" color="warning" size="small" />
      )}
      {message.proChatCall && (
        <MChip
          label="Math Vision Pro"
          icon={<ThinkingElapsedIcon />}
          color="warning"
          variant="filled"
          size="small"
          sx={{ ml: "auto" }}
        />
      )}
    </Box>
  );
}
