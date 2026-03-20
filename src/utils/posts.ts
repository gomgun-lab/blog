import { discoverMarkdownFiles } from "./routes.js";
import { parsePost } from "./markdown.js";
import type { Post } from "../types.js";

let cached: Post[] | null = null;

export function getAllPosts(): Post[] {
  if (cached) return cached;

  const files = discoverMarkdownFiles();
  cached = files.map(parsePost);
  cached.sort((a, b) => (a.date > b.date ? -1 : 1));

  return cached;
}
