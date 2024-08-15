/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";
import { peerDependencies } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "vite-react-ts-button",
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(), // @vitejs/plugin-react
    dts({
      insertTypesEntry: true,
    }),
    svgr(),
  ],
  css: {
    modules: {
      scopeBehaviour: "local", // Use CSS modules for local scoping
    },
  },
});
