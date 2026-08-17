import { useEffect, useState } from "#production-react";
import {
  applyAgentTask,
  createAgentResetSnapshot,
  getPendingStatusLabel,
  mergeAgentResetSnapshot,
  parseAgentTaskIndex,
  type PendingAgentOperation,
  type PendingAgentOutput,
  type PendingAgentSnapshot,
  type PendingAgentTask,
  type PendingTaskRevision,
} from "./pendingAgentState";
import {
  fetchRunStreamSnapshot,
  streamChatRun,
  type ChatRunStreamEvent,
} from "../../runtime/pendingMessageRuntime.js";

export interface ActiveChatRun {
  id: string;
  workflowMode?: string;
  status?: string;
}
export interface PendingStream {
  taskId?: string | null;
  operationId?: string;
  reasoningText: string;
  phase: "waiting" | "reasoning" | "generating";
  latestSequence: number;
}
interface ScopedStreams {
  runId: string | null;
  streams: PendingStream[];
}
const terminalEvents = new Set(["completed", "failed", "canceled"]);

export function usePendingRunStream({
  chatId,
  activeRun,
  refetchRunState,
}: {
  chatId: string;
  activeRun?: ActiveChatRun | null;
  refetchRunState(): void;
}) {
  const [reasoningText, setReasoningText] = useState("");
  const [phase, setPhase] = useState("waiting");
  const [snapshot, setSnapshot] = useState<PendingAgentSnapshot>({
    runId: null,
    tasks: [],
    operations: [],
    outputs: [],
  });
  const [operationStreams, setOperationStreams] = useState<ScopedStreams>({
    runId: null,
    streams: [],
  });
  const [taskStreams, setTaskStreams] = useState<ScopedStreams>({
    runId: null,
    streams: [],
  });

  useEffect(() => {
    const runId = activeRun?.id ?? null;
    const workflowMode = activeRun?.workflowMode ?? "single";
    const empty = () => {
      setReasoningText("");
      setPhase("waiting");
      setSnapshot({ runId, tasks: [], operations: [], outputs: [] });
      setOperationStreams({ runId, streams: [] });
      setTaskStreams({ runId, streams: [] });
    };
    if (!runId || runId.startsWith("optimistic-")) {
      empty();
      return;
    }
    const controller = new AbortController();
    let disposed = false;
    let bufferedReasoning = "";
    let flushTimer: number | null = null;
    let highestSequence = 0;
    let resetSequence = 0;
    let reasoningSequence = 0;
    let outputStarted = false;
    const seenSequences = new Set<number>();
    const taskRevisions = new Map<string, PendingTaskRevision>();
    const operationReasoning = new Map<string, Map<number, string>>();
    const operationOutputSequence = new Map<string, number>();
    const operationTaskIds = new Map<string, string | null>();
    const taskReasoning = new Map<string, Map<number, string>>();
    const taskOutputSequence = new Map<string, number>();

    const flush = () => {
      flushTimer = null;
      if (disposed) {
        bufferedReasoning = "";
        return;
      }
      if (!bufferedReasoning) return;
      const text = bufferedReasoning;
      bufferedReasoning = "";
      setReasoningText((current) => `${current}${text}`);
    };
    const scheduleFlush = () => {
      if (flushTimer === null) flushTimer = window.setTimeout(flush, 80);
    };
    const cancelFlush = () => {
      if (flushTimer !== null) {
        window.clearTimeout(flushTimer);
        flushTimer = null;
      }
    };
    const createOperationStream = (operationId: string): PendingStream => {
      if (!operationTaskIds.has(operationId))
        throw new Error("Agent operation stream is missing its task scope.");
      const chunks = operationReasoning.get(operationId);
      const outputAt = operationOutputSequence.get(operationId);
      let latest = outputAt ?? 0;
      const text = [...(chunks?.entries() ?? [])]
        .sort(([left], [right]) => left - right)
        .map(([sequence, value]) => {
          latest = Math.max(latest, sequence);
          return value;
        })
        .join("");
      return {
        operationId,
        taskId: operationTaskIds.get(operationId) ?? null,
        reasoningText: text,
        phase:
          outputAt !== undefined
            ? "generating"
            : chunks
              ? "reasoning"
              : "waiting",
        latestSequence: latest,
      };
    };
    const publishOperation = (operationId: string) => {
      const stream = createOperationStream(operationId);
      setOperationStreams((current) => {
        const streams = current.runId === runId ? current.streams : [];
        const index = streams.findIndex(
          (item) => item.operationId === operationId,
        );
        return {
          runId,
          streams:
            index === -1
              ? [...streams, stream]
              : streams.map((item, itemIndex) =>
                  itemIndex === index ? stream : item,
                ),
        };
      });
    };
    const createTaskStream = (taskId: string): PendingStream => {
      const chunks = taskReasoning.get(taskId);
      const outputAt = taskOutputSequence.get(taskId);
      let latest = outputAt ?? 0;
      const text = [...(chunks?.entries() ?? [])]
        .sort(([left], [right]) => left - right)
        .map(([sequence, value]) => {
          latest = Math.max(latest, sequence);
          return value;
        })
        .join("");
      return {
        taskId,
        reasoningText: text,
        phase:
          outputAt !== undefined
            ? "generating"
            : chunks
              ? "reasoning"
              : "waiting",
        latestSequence: latest,
      };
    };
    const publishTask = (taskId: string) => {
      const stream = createTaskStream(taskId);
      setTaskStreams((current) => {
        const streams = current.runId === runId ? current.streams : [];
        const index = streams.findIndex((item) => item.taskId === taskId);
        return {
          runId,
          streams:
            index === -1
              ? [...streams, stream]
              : streams.map((item, itemIndex) =>
                  itemIndex === index ? stream : item,
                ),
        };
      });
    };
    const handleOperationDelta = (event: ChatRunStreamEvent) => {
      if (workflowMode !== "agent")
        throw new Error(
          "A scoped Agent operation delta was received for a Chat run.",
        );
      if (!event.operationId)
        throw new Error("Agent operation delta is missing its operation id.");
      if (event.sequence === undefined)
        throw new Error("Agent operation delta is missing its sequence.");
      if (event.sequence <= resetSequence) return;
      if (event.source !== "reasoning" && event.source !== "output")
        throw new Error("Agent operation delta has an unsupported source.");
      if (event.source === "reasoning" && !event.text)
        throw new Error("Agent operation reasoning delta has no text.");
      const hasTaskScope = event.taskId !== undefined;
      const previousTaskId = operationTaskIds.get(event.operationId);
      if (
        operationTaskIds.has(event.operationId) &&
        hasTaskScope &&
        previousTaskId !== (event.taskId ?? null)
      )
        throw new Error("Agent operation delta changed its task scope.");
      operationTaskIds.set(
        event.operationId,
        hasTaskScope ? (event.taskId ?? null) : (previousTaskId ?? null),
      );
      if (event.source === "reasoning") {
        const chunks =
          operationReasoning.get(event.operationId) ??
          new Map<number, string>();
        chunks.set(event.sequence, event.text!);
        operationReasoning.set(event.operationId, chunks);
      } else
        operationOutputSequence.set(
          event.operationId,
          Math.max(
            operationOutputSequence.get(event.operationId) ?? 0,
            event.sequence,
          ),
        );
      publishOperation(event.operationId);
    };
    const handleTaskDelta = (event: ChatRunStreamEvent) => {
      if (workflowMode !== "agent")
        throw new Error(
          "A scoped Agent task delta was received for a Chat run.",
        );
      if (!event.taskId)
        throw new Error("Agent task delta is missing its task id.");
      parseAgentTaskIndex(event.taskId);
      if (event.sequence === undefined)
        throw new Error("Agent task delta is missing its sequence.");
      if (event.sequence <= resetSequence) return;
      if (event.source !== "reasoning" && event.source !== "output")
        throw new Error("Agent task delta has an unsupported source.");
      if (event.source === "reasoning" && !event.text)
        throw new Error("Agent task reasoning delta has no text.");
      if (event.source === "reasoning") {
        const chunks =
          taskReasoning.get(event.taskId) ?? new Map<number, string>();
        chunks.set(event.sequence, event.text!);
        taskReasoning.set(event.taskId, chunks);
      } else
        taskOutputSequence.set(
          event.taskId,
          Math.max(taskOutputSequence.get(event.taskId) ?? 0, event.sequence),
        );
      publishTask(event.taskId);
    };
    const pruneOperations = (sequence: number) => {
      for (const [id, chunks] of operationReasoning) {
        for (const key of chunks.keys())
          if (key <= sequence) chunks.delete(key);
        if (!chunks.size) operationReasoning.delete(id);
      }
      for (const [id, value] of operationOutputSequence)
        if (value <= sequence) operationOutputSequence.delete(id);
      for (const id of [...operationTaskIds.keys()])
        if (!operationReasoning.has(id) && !operationOutputSequence.has(id))
          operationTaskIds.delete(id);
      setOperationStreams({
        runId,
        streams: [...operationTaskIds.keys()].map(createOperationStream),
      });
    };
    const pruneTasks = (sequence: number) => {
      for (const [id, chunks] of taskReasoning) {
        for (const key of chunks.keys())
          if (key <= sequence) chunks.delete(key);
        if (!chunks.size) taskReasoning.delete(id);
      }
      for (const [id, value] of taskOutputSequence)
        if (value <= sequence) taskOutputSequence.delete(id);
      const ids = new Set([
        ...taskReasoning.keys(),
        ...taskOutputSequence.keys(),
      ]);
      setTaskStreams({ runId, streams: [...ids].map(createTaskStream) });
    };
    const processEvent = (event: ChatRunStreamEvent): boolean => {
      if (disposed) return false;
      if (event.runId && event.runId !== runId) return true;
      const operationDelta =
        event.type === "delta" && event.operationId != null;
      const taskDelta =
        event.type === "delta" && !operationDelta && event.taskId != null;
      if (event.sequence !== undefined) {
        if (
          seenSequences.has(event.sequence) ||
          (event.sequence < highestSequence &&
            event.type !== "task" &&
            !operationDelta &&
            !taskDelta &&
            (event.type !== "reset" || workflowMode !== "agent"))
        )
          return true;
        highestSequence = Math.max(highestSequence, event.sequence);
        seenSequences.add(event.sequence);
      }
      if (
        event.type === "delta" &&
        event.taskId !== undefined &&
        !operationDelta &&
        !taskDelta
      )
        throw new Error(
          "Agent operation delta task scope is missing an operation id.",
        );
      if (operationDelta) {
        handleOperationDelta(event);
        return true;
      }
      if (taskDelta) {
        handleTaskDelta(event);
        return true;
      }
      if (event.type === "task") {
        if (event.sequence === undefined)
          throw new Error("Agent task stream event is missing its sequence.");
        if (event.sequence < resetSequence) return true;
        if (!event.task)
          throw new Error("Agent task stream event is missing its payload.");
        const revision = taskRevisions.get(event.task.taskId);
        if (!revision || revision.revision < event.task.revision) {
          taskRevisions.set(event.task.taskId, {
            sequence: event.sequence,
            revision: event.task.revision,
          });
          setSnapshot((current) => applyAgentTask(current, runId, event.task!));
        }
        return true;
      }
      if (
        event.type === "delta" &&
        event.source === "reasoning" &&
        event.text
      ) {
        reasoningSequence = Math.max(reasoningSequence, event.sequence ?? 0);
        if (event.sequence === undefined || event.sequence >= resetSequence) {
          if (!outputStarted) setPhase("reasoning");
          bufferedReasoning += event.text;
          scheduleFlush();
        }
        return true;
      }
      if (event.type === "delta" && event.source === "output") {
        reasoningSequence = Math.max(reasoningSequence, event.sequence ?? 0);
        outputStarted = true;
        cancelFlush();
        flush();
        setPhase("generating");
        return true;
      }
      if (event.type === "reset") {
        let reset: PendingAgentSnapshot | null = null;
        const sequence = event.sequence ?? 0;
        if (workflowMode === "agent") {
          if (event.sequence === undefined)
            throw new Error(
              "Agent reset stream event is missing its sequence.",
            );
          if (!event.tasks || !event.operations || !event.outputs)
            throw new Error(
              "Agent reset stream event is missing its task, operation, or output snapshot.",
            );
          if (event.sequence < resetSequence) return true;
          reset = createAgentResetSnapshot(
            runId,
            event.tasks,
            event.operations,
            event.outputs,
          );
          pruneOperations(sequence);
          pruneTasks(sequence);
        }
        if (sequence >= reasoningSequence) {
          cancelFlush();
          bufferedReasoning = "";
          outputStarted = false;
          setReasoningText("");
          setPhase("waiting");
        }
        resetSequence = Math.max(resetSequence, sequence);
        if (reset) {
          const newer = new Map(
            [...taskRevisions].filter(
              ([, revision]) => revision.sequence > sequence,
            ),
          );
          setSnapshot((current) =>
            mergeAgentResetSnapshot(current, reset!, sequence, newer),
          );
          taskRevisions.clear();
          for (const task of reset.tasks) {
            const revision = newer.get(task.taskId);
            taskRevisions.set(
              task.taskId,
              revision && revision.revision > task.revision
                ? revision
                : { sequence, revision: task.revision },
            );
          }
          for (const [id, revision] of newer)
            if (!taskRevisions.has(id)) taskRevisions.set(id, revision);
        }
        return true;
      }
      if (event.type === "idle") {
        refetchRunState();
        return false;
      }
      if (terminalEvents.has(event.type)) {
        cancelFlush();
        flush();
        refetchRunState();
        return false;
      }
      return true;
    };
    empty();
    void (async () => {
      try {
        for await (const event of streamChatRun(chatId, controller.signal))
          if (!processEvent(event)) break;
      } catch (error) {
        if (!controller.signal.aborted)
          console.warn("Chat run stream failed; polling will continue.", error);
      } finally {
        cancelFlush();
        flush();
      }
    })();
    const polling = window.setInterval(() => {
      void fetchRunStreamSnapshot(chatId, highestSequence)
        .then((events) => {
          for (const event of events)
            if (!processEvent(event)) {
              controller.abort();
              break;
            }
        })
        .catch((error) => {
          if (!controller.signal.aborted)
            console.warn("Chat run stream snapshot failed.", error);
        });
    }, 700);
    return () => {
      disposed = true;
      controller.abort();
      window.clearInterval(polling);
      cancelFlush();
    };
  }, [activeRun?.id, activeRun?.workflowMode, chatId, refetchRunState]);

  const runId = activeRun?.id ?? null;
  const tasks = snapshot.runId === runId ? snapshot.tasks : [];
  const operations = snapshot.runId === runId ? snapshot.operations : [];
  return {
    pendingReasoningText: reasoningText,
    pendingAssistantPhase: phase,
    pendingTasks: tasks,
    pendingOperations: operations,
    pendingOutputs: snapshot.runId === runId ? snapshot.outputs : [],
    pendingTaskStreams: taskStreams.runId === runId ? taskStreams.streams : [],
    pendingOperationStreams:
      operationStreams.runId === runId ? operationStreams.streams : [],
    pendingStatusLabel: getPendingStatusLabel(
      activeRun,
      phase,
      tasks,
      operations,
    ),
  };
}
