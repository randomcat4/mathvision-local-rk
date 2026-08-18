import { DatabaseSync } from "node:sqlite";

export interface GaoWorkflowSnapshot {
  chat: Record<string, unknown>;
  chatSummary: Record<string, unknown>;
  run: Record<string, unknown>;
}

function parseObject(value: string): Record<string, unknown> {
  return JSON.parse(value) as Record<string, unknown>;
}

export function readGaoWorkflowSnapshot(databasePath: string): GaoWorkflowSnapshot {
  const database = new DatabaseSync(databasePath, { readOnly: true });
  try {
    const research = database
      .prepare("SELECT chat_json, summary_json FROM researches WHERE research_id = ?")
      .get("gao-original-workflow") as { chat_json: string; summary_json: string } | undefined;
    const runRow = database
      .prepare("SELECT run_json FROM research_runs WHERE run_id = ?")
      .get("gao-original-run") as { run_json: string } | undefined;
    if (!research || !runRow) throw new Error("Gao research snapshot is missing from the local RK database.");

    const chat = parseObject(research.chat_json);
    chat.messages = database
      .prepare("SELECT payload_json FROM chat_messages WHERE research_id = ? ORDER BY ordinal")
      .all("gao-original-workflow")
      .map((row) => parseObject((row as { payload_json: string }).payload_json));

    const archivedByNode = new Map<string, Record<string, unknown>[]>();
    for (const row of database
      .prepare("SELECT node_id, payload_json FROM thread_messages WHERE run_id = ? ORDER BY node_id, ordinal")
      .all("gao-original-run") as Array<{ node_id: string; payload_json: string }>) {
      const messages = archivedByNode.get(row.node_id) ?? [];
      messages.push(parseObject(row.payload_json));
      archivedByNode.set(row.node_id, messages);
    }

    const nodes = (database
      .prepare("SELECT node_id, payload_json FROM workflow_nodes WHERE run_id = ? ORDER BY ordinal")
      .all("gao-original-run") as Array<{ node_id: string; payload_json: string }>).map((row) => ({
        ...parseObject(row.payload_json),
        archived_messages: archivedByNode.get(row.node_id),
      }));
    const edges = database
      .prepare("SELECT payload_json FROM workflow_edges WHERE run_id = ? ORDER BY ordinal")
      .all("gao-original-run")
      .map((row) => parseObject((row as { payload_json: string }).payload_json));
    const rounds = database
      .prepare("SELECT payload_json FROM research_rounds WHERE run_id = ? ORDER BY round_index")
      .all("gao-original-run")
      .map((row) => parseObject((row as { payload_json: string }).payload_json));
    const roundOutputs = database
      .prepare("SELECT payload_json FROM round_outputs WHERE run_id = ? ORDER BY round_index")
      .all("gao-original-run")
      .map((row) => parseObject((row as { payload_json: string }).payload_json));

    const run = parseObject(runRow.run_json);
    const state = (run.state as Record<string, unknown>) ?? {};
    run.state = {
      ...state,
      rounds,
      round_outputs: roundOutputs,
      workflow: { nodes, edges },
    };
    return { chat, chatSummary: parseObject(research.summary_json), run };
  } finally {
    database.close();
  }
}
