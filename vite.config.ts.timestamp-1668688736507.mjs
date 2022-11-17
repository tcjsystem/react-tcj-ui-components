// vite.config.ts
import { defineConfig } from "file:///Users/pruki/src/ui/react-tcj-ui-components/node_modules/vite/dist/node/index.js";
import react from "file:///Users/pruki/src/ui/react-tcj-ui-components/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tsConfigPaths from "file:///Users/pruki/src/ui/react-tcj-ui-components/node_modules/vite-tsconfig-paths/dist/index.mjs";
import dts from "file:///Users/pruki/src/ui/react-tcj-ui-components/node_modules/vite-plugin-dts/dist/index.mjs";
import { vanillaExtractPlugin } from "file:///Users/pruki/src/ui/react-tcj-ui-components/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
import { resolve } from "path";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    vanillaExtractPlugin(),
    dts({
      include: ["src/components"],
      insertTypesEntry: true,
      skipDiagnostics: true
    })
  ],
  build: {
    lib: {
      entry: resolve("src", "components/index.ts"),
      name: "react-tcj-ui-components",
      formats: ["es", "umd"],
      fileName: (format) => `react-tcj-ui-components.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcHJ1a2kvc3JjL3VpL3JlYWN0LXRjai11aS1jb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvcHJ1a2kvc3JjL3VpL3JlYWN0LXRjai11aS1jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9wcnVraS9zcmMvdWkvcmVhY3QtdGNqLXVpLWNvbXBvbmVudHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHRzQ29uZmlnUGF0aHMgZnJvbSBcInZpdGUtdHNjb25maWctcGF0aHNcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IHsgdmFuaWxsYUV4dHJhY3RQbHVnaW4gfSBmcm9tIFwiQHZhbmlsbGEtZXh0cmFjdC92aXRlLXBsdWdpblwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHRzQ29uZmlnUGF0aHMoKSxcbiAgICB2YW5pbGxhRXh0cmFjdFBsdWdpbigpLFxuICAgIGR0cyh7XG4gICAgICBpbmNsdWRlOiBbXCJzcmMvY29tcG9uZW50c1wiXSxcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXG4gICAgICBza2lwRGlhZ25vc3RpY3M6IHRydWUsXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShcInNyY1wiLCBcImNvbXBvbmVudHMvaW5kZXgudHNcIiksXG4gICAgICBuYW1lOiBcInJlYWN0LXRjai11aS1jb21wb25lbnRzXCIsXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiLCBcInVtZFwiXSxcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgcmVhY3QtdGNqLXVpLWNvbXBvbmVudHMuJHtmb3JtYXR9LmpzYCxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgcmVhY3Q6IFwiUmVhY3RcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVCxTQUFTLG9CQUFvQjtBQUNoVixPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsNEJBQTRCO0FBQ3JDLFNBQVMsZUFBZTtBQUV4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsSUFDZCxxQkFBcUI7QUFBQSxJQUNyQixJQUFJO0FBQUEsTUFDRixTQUFTLENBQUMsZ0JBQWdCO0FBQUEsTUFDMUIsa0JBQWtCO0FBQUEsTUFDbEIsaUJBQWlCO0FBQUEsSUFDbkIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxPQUFPLHFCQUFxQjtBQUFBLE1BQzNDLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVLENBQUMsV0FBVywyQkFBMkI7QUFBQSxJQUNuRDtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsV0FBVztBQUFBLE1BQy9CLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
