import type { ReactNode } from "react";
import { site } from "../site.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";

interface LayoutProps {
  title: string;
  description: string;
  activePage?: "home" | "posts";
  stylesheets?: string[];
  children: ReactNode;
}

export function Layout({ title, description, activePage, stylesheets, children }: LayoutProps) {
  return (
    <html lang={site.lang}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`${title} | ${site.name}`}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="/assets/styles/main.css" />
        {stylesheets?.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        <link rel="stylesheet" href="/assets/styles/hljs-light.css" id="hljs-light" />
        <link rel="stylesheet" href="/assets/styles/hljs-dark.css" id="hljs-dark" media="not all" />
        <script src="/assets/scripts/theme.js" />
      </head>
      <body>
        <Header activePage={activePage} />
        <main className="main">
          <div className="container">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
