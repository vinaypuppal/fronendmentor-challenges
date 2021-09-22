import { defineConfig } from "vite";
import multipage from "vite-plugin-multipage";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [
    svelte(),
    multipage({
      mimeCheck: true,
      open: "/challenges/order-summary-component/index.html",
      pageDir: "challenges",
      purgeDir: "challenges",
      removePageDirs: false,
      rootPage: "index.html",
    }),
  ],
  build: {
    polyfillDynamicImport: false,
  },
});
