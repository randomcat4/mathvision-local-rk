export interface AvailableModel {
  id: string;
  label: string;
}

export interface AssistantMetadataMessage {
  modelId?: string | null;
  usage?: { modelId?: string | null } | null;
  workflowMode?: string | null;
  proChatCall?: unknown;
}

export interface AssistantMetadataValues {
  isAgent: boolean;
  modelLabel: string;
  showModel: boolean;
}

export function getAssistantMetadataValues(
  message: AssistantMetadataMessage,
  availableModels: readonly AvailableModel[],
): AssistantMetadataValues {
  const modelId = message.modelId ?? message.usage?.modelId ?? null;
  const isAgent = message.workflowMode === "agent";
  const modelName = modelId
    ? availableModels.find((model) => model.id === modelId)?.label ?? "mathvision"
    : null;
  return {
    isAgent,
    modelLabel: `Mode: ${modelName ?? "mathvision"}`,
    showModel: !isAgent && Boolean(modelId),
  };
}
