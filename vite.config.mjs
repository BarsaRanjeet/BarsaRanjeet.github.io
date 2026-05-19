import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";

export default defineConfig({
  base: "./",
  build: {
    outDir: "build",
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@utils": "/src/utils",
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".scss"],
  },
  server: {
    port: 3000,
  },
});