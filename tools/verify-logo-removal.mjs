import { readFile, readdir } from "node:fs/promises";
import { extname, resolve } from "node:path";

const roots = [resolve("src"), resolve("public"), resolve("dist")];
const forbidden = [/math-vision-logo/iu, /Math Vision logo/u, /BZDuanMC/u, /DOQk6oFV/u];
const violations = [];

for (const root of roots) {
  for (const file of await walk(root)) {
    if (![".html", ".js", ".jsx", ".ts", ".tsx", ".css", ".svg"].includes(extname(file))) continue;
    const contents = await readFile(file, "utf8");
    if (forbidden.some((pattern) => pattern.test(contents))) violations.push(file);
  }
}

if (violations.length > 0) {
  throw new Error(`Logo references remain:\n${violations.join("\n")}`);
}
console.log("Logo-removal gate passed.");

async function walk(directory) {
  const output = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) output.push(...(await walk(path)));
    else output.push(path);
  }
  return output;
}
