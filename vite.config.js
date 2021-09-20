import { defineConfig } from "vite";
import multipage from "vite-plugin-multipage";

export default defineConfig({
  plugins: [
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
