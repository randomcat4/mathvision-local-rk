import { access, readFile, readdir, writeFile } from "node:fs/promises";
import { extname, resolve } from "node:path";

for (const root of [resolve("src/recovered"), resolve("src/vendor/recovered")]) {
  for (const path of await walk(root)) {
    if (![".ts", ".tsx"].includes(extname(path))) continue;
    let code = await readFile(path, "utf8");
    const candidates = [...code.matchAll(/\.\.\/\.\.\/chunks\/([^"']+?)\.js(?=["'])/g)];
    for (const match of candidates) {
      const base = match[1];
      for (const extension of [".tsx", ".jsx"]) {
        if (await exists(resolve("src/chunks", `${base}${extension}`))) {
          code = code.replaceAll(`../../chunks/${base}.js`, `../../chunks/${base}${extension}`);
          break;
        }
      }
    }
    await writeFile(path, code, "utf8");
  }
}

async function exists(path) {
  try { await access(path); return true; } catch { return false; }
}

async function walk(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) result.push(...await walk(path));
    else result.push(path);
  }
  return result;
}
