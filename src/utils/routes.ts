import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { config } from "../config.js";
import type { PageModule } from "../types.js";

export function discoverMarkdownFiles(): string[] {
  return fs
    .readdirSync(config.paths.posts)
    .filter((f) => f.endsWith(".md"))
    .map((f) => path.join(config.paths.posts, f));
}

export function filePathToSlug(filePath: string): string {
  return path.basename(filePath).replace(/\.md$/, "");
}

export async function discoverPageModules(): Promise<PageModule[]> {
  const files: string[] = [];

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.name.endsWith(".tsx")) {
        files.push(fullPath);
      }
    }
  }

  walk(config.paths.app);

  const modules: PageModule[] = [];

  for (const file of files) {
    const mod = await import(pathToFileURL(file).href);
    const relDir = path.relative(config.paths.app, path.dirname(file));
    const prefix = relDir === "." ? "" : relDir.split(path.sep).join("/");

    modules.push({
      getPages: () =>
        mod.getPages().map((page: { slug: string; element: unknown }) => ({
          ...page,
          slug: [prefix, page.slug].filter(Boolean).join("/"),
        })),
    });
  }

  return modules;
}
