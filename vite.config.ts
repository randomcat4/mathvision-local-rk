import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import { readFile } from "node:fs/promises";
import { extname, relative, resolve } from "node:path";
import { readGaoWorkflowSnapshot } from "./tools/gaoWorkflowStore";

const productionReactPath = fileURLToPath(
  new URL("./src/runtime/reactFromProductionBundle.js", import.meta.url),
);
const localMarkdownRoot = fileURLToPath(
  new URL("../publish/zhuang-gao-cyclic-index-two/", import.meta.url),
);
const localRkDatabase = fileURLToPath(
  new URL("./data/gao-workflow.sqlite", import.meta.url),
);

function localRkResearchMiddleware(request: any, response: any, next: () => void) {
  const url = new URL(request.url ?? "/", "http://127.0.0.1");
  if (url.pathname !== "/__local-rk/researches/gao-original-workflow") {
    next();
    return;
  }
  try {
    const snapshot = readGaoWorkflowSnapshot(localRkDatabase);
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.setHeader("Cache-Control", "no-store");
    response.end(JSON.stringify(snapshot));
  } catch (error) {
    response.statusCode = 503;
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.end(JSON.stringify({
      detail: error instanceof Error ? error.message : "无法读取本地 RK 研究数据库。",
    }));
  }
}

function localMarkdownMiddleware(request: any, response: any, next: () => void) {
  const url = new URL(request.url ?? "/", "http://127.0.0.1");
  if (url.pathname !== "/__local-md") {
    next();
    return;
  }
  const requestedPath = url.searchParams.get("path");
  if (!requestedPath) {
    response.statusCode = 400;
    response.end("Missing Markdown path.");
    return;
  }
  const resolvedPath = resolve(requestedPath);
  const relativePath = relative(localMarkdownRoot, resolvedPath);
  const outsideRoot = relativePath.startsWith("..") || resolve(localMarkdownRoot, relativePath) !== resolvedPath;
  if (outsideRoot || extname(resolvedPath).toLowerCase() !== ".md") {
    response.statusCode = 403;
    response.end("Markdown path is outside the Gao evidence root.");
    return;
  }
  void readFile(resolvedPath, "utf8")
    .then((content) => {
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/markdown; charset=utf-8");
      response.end(content);
    })
    .catch(() => {
      response.statusCode = 404;
      response.end("Markdown file was not found.");
    });
}

const localMarkdownPlugin = {
  name: "local-gao-markdown-reader",
  configureServer(server: any) {
    server.middlewares.use(localMarkdownMiddleware);
  },
  configurePreviewServer(server: any) {
    server.middlewares.use(localMarkdownMiddleware);
  },
};

const localRkResearchPlugin = {
  name: "local-rk-research-store",
  configureServer(server: any) {
    server.middlewares.use(localRkResearchMiddleware);
  },
  configurePreviewServer(server: any) {
    server.middlewares.use(localRkResearchMiddleware);
  },
};

export default defineConfig({
  plugins: [
    localRkResearchPlugin,
    localMarkdownPlugin,
    {
      name: "lucide-production-react-bridge",
      enforce: "pre",
      resolveId(source, importer) {
        if (source === "react" && importer?.includes("lucide-react")) {
          return productionReactPath;
        }
      },
    },
  ],
  resolve: {
    alias: [
      {
        find: "#production-react",
        replacement: productionReactPath,
      },
    ],
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  esbuild: {
    jsx: "automatic",
  },
  build: {
    target: "es2022",
  },
});
