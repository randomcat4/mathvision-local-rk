import "./assets/index-DCmpUGyQ.css";
import "./assets/index-u5-SH7k2.css";
import "./assets/LatexWorkspaceCanvas-D7OCDecY.css";
import "katex/dist/katex.min.css";
import "./assets/graphDialogStyles-C5ap-Sga.css";

if (window.location.pathname === "/gao-workflow") {
  await import("./showcase/gao/main");
} else {
  const { installLocalPreviewNetwork } = await import("./localPreview");
  installLocalPreviewNetwork();
  await import("./chunks/index-BM3ZINIl.jsx");
}
