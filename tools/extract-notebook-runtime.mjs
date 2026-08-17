import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const routePath = resolve("src/views/recovered/route.lazy-B7bltzFg.tsx");
const runtimePath = resolve("src/recovered/notebooks/notebookRuntime.ts");
const route = await readFile(routePath, "utf8");
const startMarker = "const ps = (e) => {";
const endMarker = "const Ks = ({";
const start = route.indexOf(startMarker);
const end = route.indexOf(endMarker, start);
if (start < 0 || end < 0) throw new Error("Notebook route runtime boundary was not found.");

const runtime = route.slice(start, end);
const imports = `import {
  r as o,
  p as be,
  q as we,
  ax as J,
  aj as ee,
  c2 as U,
  n as Fe,
  c3 as ft,
  c4 as Dt,
} from "../../chunks/index-BM3ZINIl.jsx";
import { p as no } from "../../chunks/chatsApi-Ck-JYICO.js";
import { u as oa } from "../../chunks/useQuery-DM2qiUYb.js";
import { u as Be } from "../../chunks/useMutation-C1SgG9wr.js";

var pa = (e, t, a) =>
  t in e
    ? Object.defineProperty(e, t, { enumerable: true, configurable: true, writable: true, value: a })
    : (e[t] = a);
var ot = (e, t, a) => pa(e, typeof t != "symbol" ? t + "" : t, a);

`;
const exports = `
export {
  Ai as NOTEBOOK_OPERATIONS,
  Ps as NOTEBOOK_TITLE_MAX_LENGTH,
  Rs as hasRunningNotebookCell,
  Ns as useNotebooks,
  _i as useNotebook,
  Ms as useCreateNotebook,
  qs as useUpdateNotebook,
  $s as useMoveNotebook,
  Us as useDeleteNotebook,
  Li as useNotebookActionQueue,
};
`;
await mkdir(resolve("src/recovered/notebooks"), { recursive: true });
await writeFile(runtimePath, `${imports}${runtime}${exports}`, "utf8");

const routeImport = `import {
  NOTEBOOK_OPERATIONS as Ai,
  NOTEBOOK_TITLE_MAX_LENGTH as Ps,
  hasRunningNotebookCell as Rs,
  useCreateNotebook as Ms,
  useDeleteNotebook as Us,
  useMoveNotebook as $s,
  useNotebook as _i,
  useNotebookActionQueue as Li,
  useNotebooks as Ns,
  useUpdateNotebook as qs,
} from "../../recovered/notebooks/notebookRuntime";
`;
const insertion = route.indexOf("import {");
const nextRoute = `${route.slice(0, insertion)}${routeImport}${route.slice(insertion, start)}${route.slice(end)}`;
await writeFile(routePath, nextRoute, "utf8");
console.log(`Extracted ${runtime.length} characters of notebook data/runtime code.`);
