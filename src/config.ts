import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);
const ROOT = path.resolve(import.meta.dirname, "..");

export const config = {
  paths: {
    app: path.join(ROOT, "src/app"),
    dist: path.join(ROOT, "dist"),
    posts: path.join(ROOT, "posts"),
    public: path.join(ROOT, "public"),
  },
  vendorAssets: [
    {
      src: require.resolve("highlight.js/styles/github.min.css"),
      dest: "assets/styles/hljs-light.css",
    },
    {
      src: require.resolve("highlight.js/styles/github-dark.min.css"),
      dest: "assets/styles/hljs-dark.css",
    },
  ],
} as const;
