import assert from "node:assert/strict";
import { join } from "node:path";
import { DatabaseSync } from "node:sqlite";
import test from "node:test";
import { readGaoWorkflowSnapshot } from "../tools/gaoWorkflowStore";

const databasePath = join(import.meta.dirname, "..", "data", "gao-workflow.sqlite");

test("loads the Gao page from the normalized local RK database", () => {
  const snapshot = readGaoWorkflowSnapshot(databasePath);
  const state = snapshot.run.state as Record<string, any>;
  const nodes = state.workflow.nodes as Array<Record<string, any>>;
  const edges = state.workflow.edges as Array<Record<string, any>>;

  assert.equal(snapshot.run.id, "gao-original-run");
  assert.equal(nodes.length, 176);
  assert.equal(edges.length, 318);
  assert.equal(nodes.filter((node) => node.kind === "codex_archive").length, 0);
  assert.ok(nodes.every((node) => node.archived_messages.length > 0));
  assert.ok(edges.every((edge) => edge.condition === null));
});

test("distinguishes original threads, original artifacts, and reconstructed research records", () => {
  const snapshot = readGaoWorkflowSnapshot(databasePath);
  const nodes = (snapshot.run.state as Record<string, any>).workflow.nodes as Array<Record<string, any>>;
  const messages = nodes.flatMap((node) => node.archived_messages as Array<Record<string, unknown>>);
  const byProvenance = messages.reduce<Record<string, Array<Record<string, unknown>>>>(
    (groups, message) => {
      const provenance = String(message.provenance);
      (groups[provenance] ??= []).push(message);
      return groups;
    },
    {},
  );

  assert.equal(byProvenance.source_thread?.length, 364);
  assert.equal(byProvenance.source_artifact?.length, 39);
  assert.equal(byProvenance.workflow_record?.length, 146);
  assert.ok(byProvenance.workflow_record?.every((message) =>
    String(message.content).includes("不是独立聊天线程")));
});

test("maps every real Codex session into an existing workflow node", () => {
  const database = new DatabaseSync(databasePath, { readOnly: true });
  try {
    const counts = database.prepare(`
      SELECT COUNT(*) AS sessions, COUNT(DISTINCT node_id) AS nodes
      FROM source_sessions
      WHERE run_id = ?
    `).get("gao-original-run") as { sessions: number; nodes: number };
    assert.equal(counts.sessions, 42);
    assert.equal(counts.nodes, 14);
    const staleArchives = database.prepare(
      "SELECT COUNT(*) AS count FROM source_sessions WHERE node_id LIKE 'codex-thread-%'",
    ).get() as { count: number };
    assert.equal(staleArchives.count, 0);
  } finally {
    database.close();
  }
});
