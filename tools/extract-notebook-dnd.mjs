import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const notebookPath = resolve("src/views/recovered/NotebookWorkspaceContent-Cmckz3Qo.tsx");
const vendorPath = resolve("src/vendor/recovered/dndKitSortableRuntime.tsx");
const notebook = await readFile(notebookPath, "utf8");
const startMarker = "var Cr = Object.create;";
const endMarker = 'const en = "notebook-cell";';
const start = notebook.indexOf(startMarker);
const end = notebook.indexOf(endMarker, start);
if (start < 0 || end < 0) throw new Error("Notebook dnd-kit boundary was not found.");

const runtime = notebook.slice(start, end);
const imports = `import { r as b } from "../../chunks/index-BM3ZINIl.jsx";
import {
  D as ft,
  h as bt,
  n as P,
  r as _e,
  W as ht,
  i as Se,
  j as mt,
  k as je,
  p as xt,
  l as vt,
  m as yt,
  o as kt,
  q as Ct,
  s as Fe,
  t as wt,
  v as Ie,
  w as De,
  x as _t,
  y as St,
  z as jt,
  R as Oe,
  E as It,
  F as qe,
  G as Pe,
  H as Dt,
  I as ce,
  J as Ot,
  K as O,
  L as Pt,
  N as G,
  Q as Et,
  U as ue,
  X as At,
  Y as Tt,
} from "../../chunks/ChatPanelMoreMenu-B1X9SOWN.jsx";

`;
const exports = `
export {
  N as isSortableDragEntity,
  Yr as useRecoveredSortable,
  Jr as notebookDragSensors,
  Zr as createNotebookDragPlugins,
};
`;
await mkdir(resolve("src/vendor/recovered"), { recursive: true });
await writeFile(vendorPath, `${imports}${runtime}${exports}`, "utf8");

const notebookImport = `import {
  createNotebookDragPlugins as Zr,
  isSortableDragEntity as N,
  notebookDragSensors as Jr,
  useRecoveredSortable as Yr,
} from "../../vendor/recovered/dndKitSortableRuntime";
`;
const insertion = notebook.indexOf("import {");
const nextNotebook = `${notebook.slice(0, insertion)}${notebookImport}${notebook.slice(insertion, start)}${notebook.slice(end)}`;
await writeFile(notebookPath, nextNotebook, "utf8");
console.log(`Extracted ${runtime.length} characters of dnd-kit sortable runtime.`);
