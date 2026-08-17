export interface ComputeToolCall {
  toolType: string;
  toolName: string;
  callId?: string | null;
  arguments: Record<string, unknown>;
}

export interface ComputationArtifact {
  attachmentId: string | null;
  name: string;
  mimeType: string;
  sizeBytes: number;
}

export interface ComputationOutput {
  success: boolean;
  executed: boolean;
  stdout: string;
  stdoutTruncated: boolean;
  stderr: string;
  stderrTruncated: boolean;
  exitCode: number | null;
  timedOut: boolean;
  durationMs: number;
  response: string | null;
  errorType: string | null;
  artifacts: ComputationArtifact[];
}

export interface Calculation {
  callId: string;
  runtime: "python" | "sage";
  code: string;
  inputAttachmentIds: string[];
  output: ComputationOutput | null;
}

const record = (value: unknown): Record<string, unknown> | null =>
  value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
const isComputationTool = (toolName: string) =>
  toolName === "run_computation" || toolName === "run_python";

function runtimeForCall(toolCall: ComputeToolCall): "python" | "sage" | null {
  if (toolCall.toolName === "run_python") return "python";
  if (toolCall.toolName !== "run_computation") return null;
  const output = record(toolCall.arguments.output);
  const runtime = toolCall.arguments.runtime ?? output?.runtime;
  return runtime === "python" || runtime === "sage" ? runtime : null;
}

function parseArtifacts(value: unknown): ComputationArtifact[] {
  return Array.isArray(value)
    ? value.flatMap((entry) => {
        const artifact = record(entry);
        if (
          !artifact ||
          typeof artifact.name !== "string" ||
          typeof artifact.mime_type !== "string" ||
          typeof artifact.size_bytes !== "number"
        ) {
          return [];
        }
        return [{
          attachmentId:
            typeof artifact.attachment_id === "string" ? artifact.attachment_id : null,
          name: artifact.name,
          mimeType: artifact.mime_type,
          sizeBytes: artifact.size_bytes,
        }];
      })
    : [];
}

export function parseComputationOutput(value: unknown): ComputationOutput | null {
  const output = record(value);
  if (!output || typeof output.success !== "boolean") return null;
  return {
    success: output.success,
    executed: typeof output.executed === "boolean" ? output.executed : true,
    stdout: typeof output.stdout === "string" ? output.stdout : "",
    stdoutTruncated: output.stdout_truncated === true,
    stderr: typeof output.stderr === "string" ? output.stderr : "",
    stderrTruncated: output.stderr_truncated === true,
    exitCode: typeof output.exit_code === "number" ? output.exit_code : null,
    timedOut: output.timed_out === true,
    durationMs: typeof output.duration_ms === "number" ? output.duration_ms : 0,
    response: typeof output.response === "string" ? output.response : null,
    errorType: typeof output.error_type === "string" ? output.error_type : null,
    artifacts: parseArtifacts(output.artifacts),
  };
}

export function collectCalculations(toolCalls: ComputeToolCall[]): Calculation[] {
  const calls = toolCalls.filter(
    (toolCall) =>
      toolCall.toolType === "function_call" && Boolean(toolCall.callId) && runtimeForCall(toolCall),
  );
  const outputs = new Map<string, ComputationOutput>();
  for (const toolCall of toolCalls) {
    if (
      toolCall.toolType !== "function_call_output" ||
      !toolCall.callId ||
      !isComputationTool(toolCall.toolName)
    ) {
      continue;
    }
    const output = parseComputationOutput(toolCall.arguments.output);
    if (output) outputs.set(`${toolCall.toolName}:${toolCall.callId}`, output);
  }
  return calls.flatMap((toolCall) => {
    const runtime = runtimeForCall(toolCall);
    const code = toolCall.arguments.code;
    if (!runtime || typeof code !== "string" || !toolCall.callId) return [];
    const inputAttachmentIds = Array.isArray(toolCall.arguments.input_attachment_ids)
      ? toolCall.arguments.input_attachment_ids.filter(
          (value): value is string => typeof value === "string",
        )
      : [];
    return [{
      callId: toolCall.callId,
      runtime,
      code,
      inputAttachmentIds,
      output: outputs.get(`${toolCall.toolName}:${toolCall.callId}`) ?? null,
    }];
  });
}

export function formatComputationDuration(milliseconds: number): string {
  return milliseconds < 1000
    ? `${Math.round(milliseconds)} ms`
    : `${(milliseconds / 1000).toFixed(milliseconds < 10000 ? 2 : 1)} s`;
}
