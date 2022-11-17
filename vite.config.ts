import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    vanillaExtractPlugin(),
    dts({
      include: ["src/components"],
      insertTypesEntry: true,
      skipDiagnostics: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: "#",
        replacement: resolve(__dirname, "/src"),
      },
    ],
  },
  build: {
    lib: {
      entry: resolve("src", "components/index.ts"),
      name: "react-tcj-ui-components",
      formats: ["es", "umd"],
      fileName: (format) => `react-tcj-ui-components.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
