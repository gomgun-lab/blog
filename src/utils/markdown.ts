import fs from "node:fs";
import matter from "gray-matter";
import { Marked } from "marked";
import hljs from "highlight.js";
import { PostMetaSchema } from "../types.js";
import type { Post } from "../types.js";
import { filePathToSlug } from "./routes.js";

const marked = new Marked({
  renderer: {
    code({ text, lang }) {
      const language = lang && hljs.getLanguage(lang) ? lang : "plaintext";
      const highlighted = hljs.highlight(text, { language }).value;
      return `<pre><code class="hljs language-${language}">${highlighted}</code></pre>`;
    },
  },
});

export function markdownToHtml(markdown: string): string {
  return marked.parse(markdown, { async: false }) as string;
}

export function parsePost(filePath: string): Post {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const meta = PostMetaSchema.parse(data);
  const htmlContent = markdownToHtml(content);
  const slug = filePathToSlug(filePath);

  return { ...meta, slug, htmlContent };
}
