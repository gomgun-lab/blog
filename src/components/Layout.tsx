import type { ReactNode } from "react";
import { config } from "../config.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";

interface LayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function Layout({ title, description, children }: LayoutProps) {
  return (
    <html lang={config.site.lang}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`${title} | ${config.site.name}`}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="/assets/styles/main.css" />
        <link rel="stylesheet" href="/assets/styles/hljs-light.css" id="hljs-light" />
        <link rel="stylesheet" href="/assets/styles/hljs-dark.css" id="hljs-dark" media="(prefers-color-scheme: dark)" />
      </head>
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
        <script src="/assets/scripts/theme.js" defer />
      </body>
    </html>
  );
}
