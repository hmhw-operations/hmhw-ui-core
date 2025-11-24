/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";
import { peerDependencies } from "./package.json";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { copy } from "vite-plugin-copy";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "hmhw-ui-core",
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs", "es"]
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)]
    },
    sourcemap: true,
    emptyOutDir: true,
    outDir: "dist" // Specify the output directory
  },
  plugins: [
    react(), // @vitejs/plugin-react
    libInjectCss(), // Ensure CSS is injected into the library build
    dts({
      insertTypesEntry: true
    }),
    svgr(),
    copy({
      targets: [
        { src: "./src/styles", dest: "dist" } // Copy styles folder to dist
      ]
    })
  ],
  css: {
    modules: {
      scopeBehaviour: "local" // Use CSS modules for local scoping
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts"
  }
});
