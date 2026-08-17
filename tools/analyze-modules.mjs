import { readFile, readdir, writeFile } from "node:fs/promises";
import { basename, resolve } from "node:path";
import { parse } from "@babel/parser";
import traverseModule from "@babel/traverse";

const traverse = traverseModule.default;
const chunkRoot = resolve("recovered/chunks");
const reportRoot = resolve("reports");
const files = (await readdir(chunkRoot)).filter((name) => name.endsWith(".js")).sort();

const modules = [];
for (const name of files) {
  const code = await readFile(resolve(chunkRoot, name), "utf8");
  const ast = parse(code, {
    sourceType: "module",
    plugins: ["jsx", "importAttributes", "topLevelAwait"],
    errorRecovery: true,
  });
  const imports = [];
  const exports = [];
  let jsxElements = 0;
  let reactCalls = 0;

  traverse(ast, {
    ImportDeclaration(path) {
      imports.push(path.node.source.value);
    },
    ExportNamedDeclaration(path) {
      for (const specifier of path.node.specifiers) {
        exports.push(specifier.exported?.name ?? specifier.exported?.value ?? "unknown");
      }
      if (path.node.declaration?.id?.name) exports.push(path.node.declaration.id.name);
    },
    ExportDefaultDeclaration() {
      exports.push("default");
    },
    JSXElement() {
      jsxElements += 1;
    },
    CallExpression(path) {
      const callee = path.node.callee;
      if (
        callee.type === "MemberExpression" &&
        callee.property.type === "Identifier" &&
        ["jsx", "jsxs", "createElement"].includes(callee.property.name)
      ) {
        reactCalls += 1;
      }
    },
  });

  modules.push({
    name,
    bytes: Buffer.byteLength(code),
    imports: [...new Set(imports)].sort(),
    exports: [...new Set(exports)].sort(),
    jsxElements,
    reactCalls,
    likelyApplicationModule: reactCalls > 0 && !isKnownVendorChunk(name),
  });
}

const byName = new Map(modules.map((module) => [module.name, module]));
for (const module of modules) {
  module.localDependencies = module.imports
    .filter((source) => source.startsWith("./"))
    .map((source) => basename(source))
    .filter((name) => byName.has(name));
}

await writeFile(resolve(reportRoot, "modules.json"), `${JSON.stringify(modules, null, 2)}\n`, "utf8");
await writeFile(
  resolve(reportRoot, "application-modules.txt"),
  `${modules.filter((module) => module.likelyApplicationModule).map((module) => module.name).join("\n")}\n`,
  "utf8",
);

console.log(JSON.stringify({
  modules: modules.length,
  applicationCandidates: modules.filter((module) => module.likelyApplicationModule).length,
  dependencyEdges: modules.reduce((sum, module) => sum + module.localDependencies.length, 0),
}, null, 2));

function isKnownVendorChunk(name) {
  return /^(plotly-strict|min-|cytoscape\.esm|katex\.min|pdf_viewer|pdfDocument|editor-|index\.esm)/i.test(name);
}
