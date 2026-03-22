import fs from "node:fs";
import path from "node:path";
import { config } from "../config.js";

export function cleanDist() {
  fs.rmSync(config.paths.dist, { recursive: true, force: true });
  fs.mkdirSync(config.paths.dist, { recursive: true });
}

export function writeHtml(slug: string, html: string) {
  const dir = slug ? path.join(config.paths.dist, slug) : config.paths.dist;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf-8");
}

export function copyPublic() {
  if (fs.existsSync(config.paths.public)) {
    fs.cpSync(config.paths.public, config.paths.dist, { recursive: true });
  }
}

export function copyVendorAssets() {
  for (const asset of config.vendorAssets) {
    const dest = path.join(config.paths.dist, asset.dest);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(asset.src, dest);
  }
}
