import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

const productionReactPath = fileURLToPath(
  new URL("./src/runtime/reactFromProductionBundle.js", import.meta.url),
);

export default defineConfig({
  plugins: [
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
