import { createReadStream, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync } from "node:fs";
import { homedir } from "node:os";
import { basename, dirname, join } from "node:path";
import { createInterface } from "node:readline";
import { DatabaseSync } from "node:sqlite";
import {
  gaoOriginalWorkflowChat,
  gaoOriginalWorkflowChatSummary,
  gaoOriginalWorkflowRun,
} from "../src/local/gaoOriginalWorkflowFixture";

const ROOT_SESSION_ID = "01a00a48-6236-7982-8817-aab512b31f31";
const sessionRoot = process.env.RK_GAO_CODEX_SESSIONS ?? join(homedir(), ".codex", "sessions", "2026", "08", "16");
const databasePath = process.env.RK_GAO_DATABASE ?? join(import.meta.dirname, "..", "data", "gao-workflow.sqlite");
const evidenceRoot = process.env.RK_GAO_EVIDENCE_ROOT
  ?? join(import.meta.dirname, "..", "..", "publish", "zhuang-gao-cyclic-index-two");

const proArtifactFiles: Record<string, string[]> = {
  "p5-h2z": ["p5h2z01.txt", "p5h2z01r.md"],
  "p5-c3s": ["p5c3s01.txt", "p5c3s01r.md"],
  "p5-ap": ["p5ap01.txt", "p5ap01r.md"],
  "p6-h2i": ["p6h2i01.txt", "p6h2i01r.md"],
  "p6-c4s": ["p6c4s01.txt", "p6c4s01r.md"],
  "p6-ap2": ["p6ap201.txt", "p6ap201r.md"],
  "p7-h2s": ["p7h2s01.txt", "p7h2s01r.md", "p7h2s01v.md"],
  "p7-c5s": ["p7c5s01.txt", "p7c5s01r.md", "p7c5s01v.md"],
  "p7-ap3": ["p7ap301.txt", "p7ap301r.md", "p7ap301v.md"],
  "p8-h2c": ["p8h2c01.txt", "p8h2c01r.md", "p8h2c01v.md"],
  "p8-c6": ["p8c6s01.txt", "p8c6s01r.md", "p8c6s01v.md"],
  "p8-ap4f": ["p8ap4f01.txt", "p8ap4f01r.md", "p8ap4f01v.md"],
  "p9-h2e": ["p9h2e01.txt", "p9h2e01r.md", "p9h2e01v.md"],
  "p9-c6g": ["p9c6g01.txt", "p9c6g01r.md", "p9c6g01v.md"],
  "p9-ap5p": ["p9ap5p01.txt", "p9ap5p01r.md", "p9ap5p01v.md"],
};

interface SessionMeta {
  id: string;
  parent_thread_id?: string;
  timestamp: string;
  agent_path?: string;
  agent_nickname?: string;
  thread_source?: string;
}

interface VisibleMessage {
  id: string;
  author: string;
  role: "commentary" | "final";
  content: string;
  at: string;
  provenance: "source_thread";
  sourceLabel: string;
}

interface ImportedSession {
  file: string;
  meta: SessionMeta;
  messages: VisibleMessage[];
}

function json(value: unknown): string {
  return JSON.stringify(value);
}

function sessionFiles(root: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(root, { withFileTypes: true })) {
    const path = join(root, entry.name);
    if (entry.isDirectory()) files.push(...sessionFiles(path));
    else if (entry.isFile() && entry.name.endsWith(".jsonl")) files.push(path);
  }
  return files;
}

async function firstRecord(path: string): Promise<Record<string, unknown> | undefined> {
  const lines = createInterface({ input: createReadStream(path, { encoding: "utf8" }), crlfDelay: Infinity });
  for await (const line of lines) {
    lines.close();
    try {
      return JSON.parse(line) as Record<string, unknown>;
    } catch {
      return undefined;
    }
  }
  return undefined;
}

function contentText(content: unknown): string {
  if (!Array.isArray(content)) return "";
  return content
    .map((item) => {
      if (!item || typeof item !== "object") return "";
      const value = item as Record<string, unknown>;
      return typeof value.text === "string" ? value.text : "";
    })
    .join("")
    .trim();
}

async function readSession(path: string, meta: SessionMeta): Promise<ImportedSession> {
  const messages: VisibleMessage[] = [];
  const lines = createInterface({ input: createReadStream(path, { encoding: "utf8" }), crlfDelay: Infinity });
  for await (const line of lines) {
    let record: Record<string, unknown>;
    try {
      record = JSON.parse(line) as Record<string, unknown>;
    } catch {
      continue;
    }
    if (record.type !== "response_item") continue;
    const payload = record.payload as Record<string, unknown> | undefined;
    if (!payload || payload.type !== "message" || payload.role !== "assistant") continue;
    const phase = payload.phase;
    if (phase !== "commentary" && phase !== "final_answer") continue;
    const content = contentText(payload.content);
    if (!content) continue;
    messages.push({
      id: `${meta.id}-message-${messages.length + 1}`,
      author: meta.id === ROOT_SESSION_ID ? "主实例" : `子实例 ${agentCode(meta)}`,
      role: phase === "final_answer" ? "final" : "commentary",
      content,
      at: typeof record.timestamp === "string" ? record.timestamp : meta.timestamp,
      provenance: "source_thread",
      sourceLabel: meta.id === ROOT_SESSION_ID ? "主实例原始记录" : `Codex 子实例 ${agentCode(meta)}`,
    });
  }
  return { file: path, meta, messages };
}

function agentCode(meta: SessionMeta): string {
  const pathCode = meta.agent_path?.split("/").filter(Boolean).at(-1);
  return (pathCode || "MAIN").toUpperCase();
}

async function discoverSessions(): Promise<ImportedSession[]> {
  const selected: Array<{ file: string; meta: SessionMeta }> = [];
  for (const file of sessionFiles(sessionRoot)) {
    const record = await firstRecord(file);
    if (record?.type !== "session_meta") continue;
    const meta = record.payload as SessionMeta | undefined;
    if (!meta || (meta.id !== ROOT_SESSION_ID && meta.parent_thread_id !== ROOT_SESSION_ID)) continue;
    selected.push({ file, meta });
  }
  selected.sort((left, right) => left.meta.timestamp.localeCompare(right.meta.timestamp));
  return Promise.all(selected.map(({ file, meta }) => readSession(file, meta)));
}

function withoutArchivedMessages(node: Record<string, unknown>): Record<string, unknown> {
  const copy = { ...node };
  delete copy.archived_messages;
  return copy;
}

function localizeBaselineNode(node: Record<string, unknown>): Record<string, unknown> {
  const localized = { ...node };
  const id = String(node.id).toUpperCase();
  if (node.kind === "main_instance") {
    localized.label = `主实例 · ${id}`;
    localized.subtitle = "主实例调度与研究裁决";
  } else if (node.kind === "route_rejected") {
    localized.label = `否决路线 · ${id}`;
    localized.subtitle = "已否决或冻结的研究路线";
  } else if (node.kind === "agent_thread") {
    localized.label = `子实例 · ${id}`;
    localized.subtitle = "并行研究线程";
  }
  delete localized.archived_messages;
  return localized;
}

const sessionNodeAliases: Record<string, string> = {
  "sub2-recompute": "sub2-finite",
  "u127-fresh-verify": "sub1-u127-verify",
  "u127-verify2": "sub1-u127-verify",
  u127map: "sub1-u127-verify",
  t3map: "t3p11",
  l43map: "main-l46",
  vkhcheck: "l55verify",
  t3proof: "t3p11",
  t3verify: "t3-adversary",
  vkhverify: "l55verify",
  vkt2map: "main-smooth",
  k3verify: "main-smooth",
  l50verify: "main-smooth",
  s2audit: "main-smooth",
  l51verify: "main-smooth",
  s1audit: "main-smooth",
  s1repairverify: "main-smooth",
  s3audit: "main-smooth",
  s1repairverify2: "main-smooth",
  s4audit: "main-smooth",
  l52verify: "main-smooth",
  l54verify: "main-smooth",
  l53verify: "main-smooth",
  k7tailverify: "l55verify",
  kuniformverify: "kuniform-verify",
  ksecondverify: "ksecond-verify",
  l56verify: "main-smooth",
  t3two: "t3p11",
  l57verify: "main-smooth",
  t3twoverify: "t3-adversary",
  l57reverify: "main-smooth",
  t3twocanon: "t3-adversary",
  t3m21verify: "t3-adversary",
  t3overlapverify: "t3-adversary",
  "gao-history": "main-final",
  "gao-distance": "main-final",
  "breakthrough-audit": "main-final",
};

function sessionTargetNode(session: ImportedSession, nodeIds: Set<string>): string {
  const normalized = agentCode(session.meta).toLowerCase().replaceAll("_", "-");
  const target = nodeIds.has(normalized) ? normalized : sessionNodeAliases[normalized];
  if (!target || !nodeIds.has(target)) {
    throw new Error(`No workflow node mapping exists for Codex session ${agentCode(session.meta)}.`);
  }
  return target;
}

function workflowRecordMessage(node: Record<string, any>): Record<string, unknown> {
  const reasoning = String(node.stream_reasoning ?? "").trim();
  const summaryText = String(node.display_summary ?? "").trim();
  const sections = [
    "这不是独立聊天线程，而是从该节点已经保存的研究账本、推理线索和阶段裁决中整理出的相关思路。",
    node.subtitle ? `### 研究问题\n\n${String(node.subtitle).trim()}` : "",
    reasoning ? `### 推理线索\n\n${reasoning}` : "",
    summaryText ? `### 阶段结论\n\n${summaryText}` : "",
  ].filter(Boolean);
  return {
    id: `${node.id}-workflow-record`,
    author: "研究账本",
    role: "commentary",
    content: sections.join("\n\n"),
    at: String(node.stream_updated_at ?? node.stream_started_at ?? new Date(0).toISOString()),
    provenance: "workflow_record",
    sourceLabel: "节点载荷与研究账本整理",
  };
}

interface ImportedArtifact {
  nodeId: string;
  path: string;
  kind: "pro_response" | "review" | "verification";
}

function attachProArtifacts(nodes: Array<Record<string, any>>): ImportedArtifact[] {
  const imported: ImportedArtifact[] = [];
  const manualRoot = join(evidenceRoot, "fresh", "g02", "manual2");
  for (const node of nodes) {
    const files = proArtifactFiles[String(node.id)];
    if (!files) continue;
    const messages: Array<Record<string, unknown>> = [];
    for (const file of files) {
      const path = join(manualRoot, file);
      if (!existsSync(path)) continue;
      const verification = file.endsWith("v.md");
      const review = file.endsWith("r.md");
      const kind = verification ? "verification" : review ? "review" : "pro_response";
      const link = file.endsWith(".md") ? `[${file}](${path})\n\n` : "";
      messages.push({
        id: `${node.id}-artifact-${messages.length + 1}`,
        author: verification ? "独立验证" : review ? "主实例" : "RK Pro",
        role: verification || review ? "review" : "response",
        content: `${link}${readFileSync(path, "utf8")}`,
        at: statSync(path).mtime.toISOString(),
        provenance: "source_artifact",
        sourceLabel: file,
      });
      imported.push({ nodeId: String(node.id), path, kind });
    }
    if (messages.length) node.archived_messages = messages;
  }
  return imported;
}

function writeDatabase(sessions: ImportedSession[]): void {
  mkdirSync(dirname(databasePath), { recursive: true });
  if (existsSync(databasePath)) rmSync(databasePath);
  const database = new DatabaseSync(databasePath);
  try {
    database.exec(`
      PRAGMA journal_mode = WAL;
      PRAGMA foreign_keys = ON;
      CREATE TABLE researches (
        research_id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        chat_json TEXT NOT NULL,
        summary_json TEXT NOT NULL
      );
      CREATE TABLE research_runs (
        run_id TEXT PRIMARY KEY,
        research_id TEXT NOT NULL REFERENCES researches(research_id),
        run_json TEXT NOT NULL
      );
      CREATE TABLE chat_messages (
        research_id TEXT NOT NULL REFERENCES researches(research_id),
        ordinal INTEGER NOT NULL,
        payload_json TEXT NOT NULL,
        PRIMARY KEY (research_id, ordinal)
      );
      CREATE TABLE workflow_nodes (
        run_id TEXT NOT NULL REFERENCES research_runs(run_id),
        node_id TEXT NOT NULL,
        ordinal INTEGER NOT NULL,
        payload_json TEXT NOT NULL,
        PRIMARY KEY (run_id, node_id)
      );
      CREATE TABLE workflow_edges (
        run_id TEXT NOT NULL REFERENCES research_runs(run_id),
        ordinal INTEGER NOT NULL,
        payload_json TEXT NOT NULL,
        PRIMARY KEY (run_id, ordinal)
      );
      CREATE TABLE thread_messages (
        run_id TEXT NOT NULL,
        node_id TEXT NOT NULL,
        ordinal INTEGER NOT NULL,
        payload_json TEXT NOT NULL,
        PRIMARY KEY (run_id, node_id, ordinal),
        FOREIGN KEY (run_id, node_id) REFERENCES workflow_nodes(run_id, node_id)
      );
      CREATE TABLE source_sessions (
        run_id TEXT NOT NULL REFERENCES research_runs(run_id),
        node_id TEXT NOT NULL,
        source_session_id TEXT NOT NULL,
        source_path TEXT NOT NULL,
        imported_at TEXT NOT NULL,
        PRIMARY KEY (run_id, source_session_id),
        FOREIGN KEY (run_id, node_id) REFERENCES workflow_nodes(run_id, node_id)
      );
      CREATE TABLE source_artifacts (
        run_id TEXT NOT NULL REFERENCES research_runs(run_id),
        node_id TEXT NOT NULL,
        ordinal INTEGER NOT NULL,
        source_path TEXT NOT NULL,
        source_kind TEXT NOT NULL,
        PRIMARY KEY (run_id, node_id, ordinal),
        FOREIGN KEY (run_id, node_id) REFERENCES workflow_nodes(run_id, node_id)
      );
      CREATE TABLE research_rounds (
        run_id TEXT NOT NULL REFERENCES research_runs(run_id),
        round_index INTEGER NOT NULL,
        payload_json TEXT NOT NULL,
        PRIMARY KEY (run_id, round_index)
      );
      CREATE TABLE round_outputs (
        run_id TEXT NOT NULL REFERENCES research_runs(run_id),
        round_index INTEGER NOT NULL,
        payload_json TEXT NOT NULL,
        PRIMARY KEY (run_id, round_index)
      );
    `);

    const originalRun = structuredClone(gaoOriginalWorkflowRun) as Record<string, any>;
    const state = originalRun.state as Record<string, any>;
    const originalNodes = (state.workflow.nodes as Array<Record<string, unknown>>)
      .filter((node) => node.kind !== "codex_archive")
      .map(localizeBaselineNode);
    const originalNodeIds = new Set(originalNodes.map((node) => String(node.id)));
    const originalEdges = (state.workflow.edges as Array<Record<string, unknown>>)
      .filter((edge) => originalNodeIds.has(String(edge.source)) && originalNodeIds.has(String(edge.target)))
      .map((edge) => ({ ...edge, condition: null }));

    const root = sessions.find((session) => session.meta.id === ROOT_SESSION_ID);
    const importedArtifacts = attachProArtifacts(originalNodes);
    const rootNode = originalNodes.find((node) => node.id === "main-freeze");
    if (rootNode && root?.messages.length) rootNode.archived_messages = root.messages;

    const children = sessions.filter((session) => session.meta.id !== ROOT_SESSION_ID);
    const sessionsByNode = new Map<string, VisibleMessage[]>();
    const sessionTargets = children.map((session) => {
      const nodeId = sessionTargetNode(session, originalNodeIds);
      const messages = sessionsByNode.get(nodeId) ?? [];
      messages.push(...session.messages);
      sessionsByNode.set(nodeId, messages);
      return nodeId;
    });
    for (const [nodeId, messages] of sessionsByNode) {
      const node = originalNodes.find((candidate) => candidate.id === nodeId);
      if (!node) throw new Error(`Mapped workflow node ${nodeId} is missing.`);
      const existing = Array.isArray(node.archived_messages) ? node.archived_messages : [];
      node.archived_messages = [...existing, ...messages]
        .sort((left, right) => String(left.at).localeCompare(String(right.at)));
    }
    for (const node of originalNodes) {
      if (!Array.isArray(node.archived_messages) || node.archived_messages.length === 0) {
        node.archived_messages = [workflowRecordMessage(node)];
      }
    }
    const nodes = originalNodes;
    const edges = originalEdges;

    const chat = structuredClone(gaoOriginalWorkflowChat) as Record<string, any>;
    const chatMessages = chat.messages as Array<Record<string, unknown>>;
    delete chat.messages;
    const chatSummary = {
      ...structuredClone(gaoOriginalWorkflowChatSummary),
      preview: `本地 RK 数据库中的 Gao 研究回放：${children.length} 个真实 Codex 子实例线程。`,
    };
    const runBase = { ...originalRun, state: { ...state } };
    delete runBase.state.workflow;
    delete runBase.state.rounds;
    delete runBase.state.round_outputs;

    database.exec("BEGIN IMMEDIATE");
    database.prepare("INSERT INTO researches VALUES (?, ?, ?, ?)").run(
      "gao-original-workflow",
      String(chat.title),
      json(chat),
      json(chatSummary),
    );
    database.prepare("INSERT INTO research_runs VALUES (?, ?, ?)").run(
      "gao-original-run",
      "gao-original-workflow",
      json(runBase),
    );
    const insertChat = database.prepare("INSERT INTO chat_messages VALUES (?, ?, ?)");
    chatMessages.forEach((message, index) => insertChat.run("gao-original-workflow", index, json(message)));

    const insertNode = database.prepare("INSERT INTO workflow_nodes VALUES (?, ?, ?, ?)");
    const insertThreadMessage = database.prepare("INSERT INTO thread_messages VALUES (?, ?, ?, ?)");
    nodes.forEach((node, index) => {
      const nodeId = String(node.id);
      const messages = Array.isArray(node.archived_messages) ? node.archived_messages : [];
      insertNode.run("gao-original-run", nodeId, index, json(withoutArchivedMessages(node)));
      messages.forEach((message: Record<string, unknown>, messageIndex: number) =>
        insertThreadMessage.run("gao-original-run", nodeId, messageIndex, json(message)));
    });

    const insertEdge = database.prepare("INSERT INTO workflow_edges VALUES (?, ?, ?)");
    edges.forEach((edge, index) => insertEdge.run("gao-original-run", index, json(edge)));
    const insertRound = database.prepare("INSERT INTO research_rounds VALUES (?, ?, ?)");
    (state.rounds as Array<Record<string, any>>).forEach((round) =>
      insertRound.run("gao-original-run", Number(round.round_index), json(round)));
    const insertOutput = database.prepare("INSERT INTO round_outputs VALUES (?, ?, ?)");
    (state.round_outputs as Array<Record<string, any>>).forEach((output) =>
      insertOutput.run("gao-original-run", Number(output.round_index), json(output)));
    const insertSource = database.prepare("INSERT INTO source_sessions VALUES (?, ?, ?, ?, ?)");
    children.forEach((session, index) =>
      insertSource.run(
        "gao-original-run",
        sessionTargets[index],
        session.meta.id,
        basename(session.file),
        new Date().toISOString(),
      ));
    const insertArtifact = database.prepare("INSERT INTO source_artifacts VALUES (?, ?, ?, ?, ?)");
    const artifactOrdinals = new Map<string, number>();
    importedArtifacts.forEach((artifact) => {
      const ordinal = artifactOrdinals.get(artifact.nodeId) ?? 0;
      insertArtifact.run("gao-original-run", artifact.nodeId, ordinal, artifact.path, artifact.kind);
      artifactOrdinals.set(artifact.nodeId, ordinal + 1);
    });
    database.exec("COMMIT");
    console.log(JSON.stringify({ databasePath, sessions: sessions.length, childThreads: children.length, proArtifacts: importedArtifacts.length, nodes: nodes.length, edges: edges.length }));
  } catch (error) {
    try {
      database.exec("ROLLBACK");
    } catch {
      // No transaction was open.
    }
    throw error;
  } finally {
    database.close();
  }
}

if (!existsSync(sessionRoot)) throw new Error(`Codex session root does not exist: ${sessionRoot}`);
writeDatabase(await discoverSessions());
