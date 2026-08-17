import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const routePath = resolve("src/views/recovered/route.lazy-B7bltzFg.tsx");
const outputPath = resolve("src/recovered/chat/ChatsWorkspace.tsx");
const route = await readFile(routePath, "utf8");
const startMarker = "function _Component14({";
const endMarker = "const Ks = ({";
const start = route.indexOf(startMarker);
const end = route.indexOf(endMarker, start);
if (start < 0 || end < 0) throw new Error("Chat workspace boundary was not found.");

const header = route.slice(0, start);
const notebookImportStart = header.indexOf("import {\n  NOTEBOOK_OPERATIONS as Ai,");
const notebookImportClosing = '} from "../../recovered/notebooks/notebookRuntime";\n';
const notebookImportEnd = notebookImportStart < 0
  ? -1
  : header.indexOf(notebookImportClosing, notebookImportStart);
const cleanHeader = notebookImportStart < 0 || notebookImportEnd < 0
  ? header
  : `${header.slice(0, notebookImportStart)}${header.slice(notebookImportEnd + notebookImportClosing.length)}`;
const workspace = route.slice(start, end);
const relocated = `${cleanHeader}${workspace}`
  .replaceAll('from "./', 'from "../../chunks/')
  .replaceAll('import "./', 'import "../../chunks/')
  .replaceAll('import("./', 'import("../../chunks/');
await mkdir(resolve("src/recovered/chat"), { recursive: true });
await writeFile(
  outputPath,
  `${relocated}\nexport { _Component28 as ChatsWorkspace };\n`,
  "utf8",
);

const routeImport = 'import { ChatsWorkspace as _Component28 } from "../../recovered/chat/ChatsWorkspace";\n';
const nextRoute = `${route.slice(0, start)}${routeImport}${route.slice(end)}`;
await writeFile(routePath, nextRoute, "utf8");
console.log(`Extracted ${workspace.length} characters of chat workspace code.`);
