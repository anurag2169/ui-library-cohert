import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "package/index.js"),
      name: "uiLibrary",
      fileName: (format) => `uiLibrary.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Exclude peer dependencies
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
