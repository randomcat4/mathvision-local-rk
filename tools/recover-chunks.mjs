import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { basename, extname, join, resolve } from "node:path";
import prettier from "prettier";

const sourceRoot = resolve("../mvref01/raw/assets");
const outputRoot = resolve("recovered/chunks");
const logoPattern = /^math-vision-logo(?:-mark)?-/i;

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

const files = (await readdir(sourceRoot, { withFileTypes: true }))
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name)
  .sort();

const records = [];
for (const name of files) {
  if (logoPattern.test(name)) {
    records.push({ name, action: "removed-logo" });
    continue;
  }

  const extension = extname(name).toLowerCase();
  const inputPath = join(sourceRoot, name);
  const outputPath = join(outputRoot, name);
  const input = await readFile(inputPath);

  if (extension === ".js") {
    const formatted = await prettier.format(input.toString("utf8"), {
      parser: "babel",
      printWidth: 100,
      semi: true,
      singleQuote: false,
      trailingComma: "all",
    });
    await writeFile(outputPath, formatted, "utf8");
    records.push({ name, action: "formatted-javascript", inputBytes: input.length, outputBytes: Buffer.byteLength(formatted) });
    continue;
  }

  if (extension === ".css") {
    const formatted = await prettier.format(input.toString("utf8"), {
      parser: "css",
      printWidth: 100,
    });
    await writeFile(outputPath, formatted, "utf8");
    records.push({ name, action: "formatted-css", inputBytes: input.length, outputBytes: Buffer.byteLength(formatted) });
    continue;
  }

  await writeFile(outputPath, input);
  records.push({ name, action: "copied", inputBytes: input.length, outputBytes: input.length });
}

await writeFile(
  resolve("reports/recovery-manifest.json"),
  `${JSON.stringify({ sourceRoot, outputRoot, files: records }, null, 2)}\n`,
  "utf8",
);

const counts = records.reduce((result, record) => {
  result[record.action] = (result[record.action] ?? 0) + 1;
  return result;
}, {});
console.log(JSON.stringify(counts, null, 2));
