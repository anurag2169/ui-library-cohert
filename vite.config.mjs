import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { peerDependencies } from "./package.json";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "package/index.js"),
      name: "uiLibrary",
      fileName: (format) => `uiLibrary.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(peerDependencies), // Exclude peer dependencies
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
