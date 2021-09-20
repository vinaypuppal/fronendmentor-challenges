import { defineConfig } from "vite";
import multipage from "vite-plugin-multipage";

export default defineConfig({
  plugins: [
    multipage({
      // This is an optional object, defaults as follows:
      mimeCheck: true /* mimeCheck: Set the MIME type on each request using
                         `mime-types.lookup()` */,
      open: "/challenges/order-summary-component/index.html" /* open: Path to load when starting the server.
                   May be left empty and not open anything. */,
      pageDir:
        "challenges" /* pageDir: Path to the directory with the pages. */,
      purgeDir: "challenges" /* purgeDir: Path to be removed after building.
                           May be left empty to remove nothing. */,
      removePageDirs: false /* removePageDirs: Change the final result from
                               "./page/index.html" to "./page.html". */,
      rootPage: "index.html" /* rootPage: The entry point into each page. */,
    }),
  ],

  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
