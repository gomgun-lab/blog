import type { ReactElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { discoverPageModules } from "./utils/routes.js";
import { cleanDist, writeHtml, copyPublic, copyVendorAssets } from "./utils/fs-helpers.js";

const DOCTYPE = "<!DOCTYPE html>\n";

function renderPage(element: ReactElement) {
  return DOCTYPE + renderToStaticMarkup(element);
}

async function build() {
  cleanDist();
  copyPublic();
  copyVendorAssets();

  const pageModules = await discoverPageModules();

  for (const mod of pageModules) {
    for (const page of mod.getPages()) {
      writeHtml(page.slug, renderPage(page.element));
    }
  }
}

build();
