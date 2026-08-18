import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import { readFile } from "node:fs/promises";
import { extname, relative, resolve } from "node:path";

const productionReactPath = fileURLToPath(
  new URL("./src/runtime/reactFromProductionBundle.js", import.meta.url),
);
const localMarkdownRoot = fileURLToPath(
  new URL("../publish/zhuang-gao-cyclic-index-two/", import.meta.url),
);

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

export default defineConfig({
  plugins: [
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
