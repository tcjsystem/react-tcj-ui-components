var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// package.json
var package_exports = {};
__export(package_exports, {
  default: () => package_default,
  dependencies: () => dependencies,
  devDependencies: () => devDependencies,
  name: () => name,
  private: () => private2,
  scripts: () => scripts,
  type: () => type,
  version: () => version
});
var name, private2, version, type, scripts, dependencies, devDependencies, package_default;
var init_package = __esm({
  "package.json"() {
    name = "react-tcj-ui-components";
    private2 = true;
    version = "0.0.0";
    type = "module";
    scripts = {
      dev: "vite",
      build: "tsc && vite build",
      preview: "vite preview",
      storybook: "start-storybook -p 6006",
      "build-storybook": "build-storybook"
    };
    dependencies = {
      react: "^18.2.0",
      "react-dom": "^18.2.0",
      "vite-tsconfig-paths": "^3.5.2"
    };
    devDependencies = {
      "@babel/core": "^7.20.2",
      "@storybook/addon-actions": "^6.5.13",
      "@storybook/addon-essentials": "^6.5.13",
      "@storybook/addon-interactions": "^6.5.13",
      "@storybook/addon-links": "^6.5.13",
      "@storybook/builder-vite": "^0.2.5",
      "@storybook/react": "^6.5.13",
      "@storybook/testing-library": "^0.0.13",
      "@types/react": "^18.0.24",
      "@types/react-dom": "^18.0.8",
      "@vitejs/plugin-react": "^2.2.0",
      "babel-loader": "^8.3.0",
      typescript: "^4.6.4",
      vite: "^3.2.3",
      "vite-plugin-dts": "^1.7.0"
    };
    package_default = {
      name,
      private: private2,
      version,
      type,
      scripts,
      dependencies,
      devDependencies
    };
  }
});

// vite.config.ts
import { defineConfig } from "file:///Users/pruki/src/ui/react-tcj-ui-components/node_modules/vite/dist/node/index.js";
import react from "file:///Users/pruki/src/ui/react-tcj-ui-components/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tsConfigPaths from "file:///Users/pruki/src/ui/react-tcj-ui-components/node_modules/vite-tsconfig-paths/dist/index.mjs";
import dts from "file:///Users/pruki/src/ui/react-tcj-ui-components/node_modules/vite-plugin-dts/dist/index.mjs";
import { resolve } from "path";
var packageJson = (init_package(), __toCommonJS(package_exports));
var vite_config_default = defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcHJ1a2kvc3JjL3VpL3JlYWN0LXRjai11aS1jb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvcHJ1a2kvc3JjL3VpL3JlYWN0LXRjai11aS1jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9wcnVraS9zcmMvdWkvcmVhY3QtdGNqLXVpLWNvbXBvbmVudHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHRzQ29uZmlnUGF0aHMgZnJvbSBcInZpdGUtdHNjb25maWctcGF0aHNcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5jb25zdCBwYWNrYWdlSnNvbiA9IHJlcXVpcmUoXCIuL3BhY2thZ2UuanNvblwiKTtcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICB0c0NvbmZpZ1BhdGhzKCksXG4gICAgZHRzKHtcbiAgICAgIGluY2x1ZGU6IFtcInNyYy9jb21wb25lbnRzXCJdLFxuICAgICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSxcbiAgICAgIHNraXBEaWFnbm9zdGljczogdHJ1ZSxcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKFwic3JjXCIsIFwiY29tcG9uZW50cy9pbmRleC50c1wiKSxcbiAgICAgIG5hbWU6IFwicmVhY3QtdGNqLXVpLWNvbXBvbmVudHNcIixcbiAgICAgIGZvcm1hdHM6IFtcImVzXCIsIFwidW1kXCJdLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGByZWFjdC10Y2otdWktY29tcG9uZW50cy4ke2Zvcm1hdH0uanNgLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCJdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogXCJSZWFjdFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1ULFNBQVMsb0JBQW9CO0FBQ2hWLE9BQU8sV0FBVztBQUNsQixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBQ3hCLElBQU0sY0FBYztBQUVwQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsSUFDZCxJQUFJO0FBQUEsTUFDRixTQUFTLENBQUMsZ0JBQWdCO0FBQUEsTUFDMUIsa0JBQWtCO0FBQUEsTUFDbEIsaUJBQWlCO0FBQUEsSUFDbkIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxPQUFPLHFCQUFxQjtBQUFBLE1BQzNDLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVLENBQUMsV0FBVywyQkFBMkI7QUFBQSxJQUNuRDtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsV0FBVztBQUFBLE1BQy9CLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
