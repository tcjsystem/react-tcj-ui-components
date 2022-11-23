import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react({
      // Exclude storybook stories
      exclude: /\.stories\.(t|j)sx?$/,
      // Only .tsx files
      include: ["**/*.tsx", "**/*.ts"],
      jsxRuntime: "classic",
    }),
    tsConfigPaths(),
    vanillaExtractPlugin(),
    dts({
      include: ["src"],
      insertTypesEntry: true,
      skipDiagnostics: true,
    }),
  ],
  build: {
    minify: false,
    lib: {
      entry: resolve("src", "index.ts"),
      name: "react-tcj-ui-components",
      formats: ["es", "umd"],
      fileName: (format) => `react-tcj-ui-components.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
