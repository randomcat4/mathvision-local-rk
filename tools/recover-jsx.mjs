import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { webcrack } from "webcrack";

const chunkRoot = resolve("recovered/chunks");
const outputRoot = resolve("recovered/jsx");
const reportPath = resolve("reports/jsx-recovery.json");
const candidates = (await readFile(resolve("reports/application-modules.txt"), "utf8"))
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean);

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

const records = [];
for (const [index, name] of candidates.entries()) {
  try {
    const input = await readFile(resolve(chunkRoot, name), "utf8");
    const result = await webcrack(input, {
      jsx: true,
      unpack: false,
      deobfuscate: true,
      unminify: true,
    });
    const outputName = name.replace(/\.js$/, ".jsx");
    await writeFile(resolve(outputRoot, outputName), `${result.code.trim()}\n`, "utf8");
    records.push({ name, outputName, status: "recovered", bytes: Buffer.byteLength(result.code) });
  } catch (error) {
    records.push({ name, status: "failed", error: error instanceof Error ? error.message : String(error) });
  }
  if ((index + 1) % 10 === 0 || index + 1 === candidates.length) {
    console.log(`${index + 1}/${candidates.length}`);
  }
}

await writeFile(reportPath, `${JSON.stringify(records, null, 2)}\n`, "utf8");
console.log(JSON.stringify({
  recovered: records.filter((record) => record.status === "recovered").length,
  failed: records.filter((record) => record.status === "failed").length,
}, null, 2));
