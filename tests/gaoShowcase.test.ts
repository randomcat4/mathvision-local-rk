import assert from "node:assert/strict";
import test from "node:test";
import { gaoDataset } from "../src/showcase/gao/data";
import { buildStressReport, filterEvents } from "../src/showcase/gao/stressModel";

test("keeps real research, reconstruction, and load replicas in separate denominators", () => {
  assert.equal(gaoDataset.realWorkUnits, 132);
  assert.equal(gaoDataset.threads.filter((thread) => thread.workUnit).length, 132);
  assert.equal(gaoDataset.events.length, gaoDataset.threads.length * 3);
  assert.equal(gaoDataset.loadReplicas.length, 720);
  assert.ok(gaoDataset.loadReplicas.every((event) => event.evidence === "压力副本"));
});

test("preserves the unresolved parent theorem while showing verified local results", () => {
  assert.equal(gaoDataset.projectStatus, "UNRESOLVED_FROZEN_SUBFAMILY");
  assert.equal(gaoDataset.threads.find((thread) => thread.id === "g02-vkh13")?.status, "已验证");
  assert.equal(gaoDataset.threads.find((thread) => thread.id === "p8-h2c")?.status, "提示错误");
  assert.equal(gaoDataset.threads.find((thread) => thread.id === "p9-ap5p")?.status, "已验证");
});

test("models the original graph as a product failure without claiming a browser crash", () => {
  const report = buildStressReport(gaoDataset);
  assert.equal(report.workflowNodes, gaoDataset.events.length);
  assert.equal(report.verdict, "产品失效");
  assert.ok(report.reasons.some((reason) => reason.includes("不伪造浏览器崩溃")));
});

test("filters timeline content without changing the source arrays", () => {
  const result = filterEvents(gaoDataset.events, "AP5P");
  assert.ok(result.length > 0);
  assert.ok(result.every((event) => event.title.includes("AP5P")));
  assert.equal(filterEvents(gaoDataset.events, "").length, gaoDataset.events.length);
});
