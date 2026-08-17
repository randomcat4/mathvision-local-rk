import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

import generateModule from "@babel/generator";
import { parse } from "@babel/parser";
import traverseModule from "@babel/traverse";
import prettier from "prettier";

const generate = generateModule.default ?? generateModule;
const traverse = traverseModule.default ?? traverseModule;
const inputRoot = resolve("recovered/jsx");
const outputRoot = resolve("recovered/named");
const report = [];

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

for (const fileName of (await readdir(inputRoot)).filter((name) => name.endsWith(".jsx")).sort()) {
  const source = await readFile(resolve(inputRoot, fileName), "utf8");
  const ast = parse(source, { sourceType: "module", plugins: ["jsx"] });
  const semanticName = fileName.replace(/\.jsx$/u, "").replace(/-[A-Za-z0-9_-]{8,}$/u, "");
  let renamedFrom = null;

  if (/^[A-Z][A-Za-z0-9]*$/u.test(semanticName)) {
    const exportedLocals = [];
    for (const statement of ast.program.body) {
      if (statement.type === "ExportNamedDeclaration") {
        for (const specifier of statement.specifiers) {
          if (specifier.type === "ExportSpecifier" && specifier.local.type === "Identifier") {
            exportedLocals.push(specifier.local.name);
          }
        }
      }
    }

    if (exportedLocals.length === 1 && exportedLocals[0] !== semanticName) {
      traverse(ast, {
        Program(path) {
          if (path.scope.hasBinding(exportedLocals[0])) {
            renamedFrom = exportedLocals[0];
            path.scope.rename(exportedLocals[0], semanticName);
          }
        },
      });
    }
  }

  const generated = generate(ast, { comments: true }).code;
  const formatted = await prettier.format(generated, { parser: "babel" });
  await writeFile(resolve(outputRoot, fileName), formatted, "utf8");
  report.push({ fileName, semanticName, renamedFrom, renamed: renamedFrom !== null });
}

await writeFile(
  resolve("reports/primary-name-recovery.json"),
  `${JSON.stringify(report, null, 2)}\n`,
  "utf8",
);
console.log(`Primary names recovered: ${report.filter((item) => item.renamed).length}/${report.length}`);
