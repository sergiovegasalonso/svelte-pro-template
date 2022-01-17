import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { fileURLToPath } from "url";
import { dirname } from "path";

const absolutePath = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@": `${absolutePath}/src`,
    },
  },
  plugins: [svelte()],
});
