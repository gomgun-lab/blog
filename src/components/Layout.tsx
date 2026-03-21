import type { ReactNode } from "react";
import { config } from "../config.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";

interface LayoutProps {
  title: string;
  description: string;
  activePage?: "home" | "posts";
  children: ReactNode;
}

export function Layout({ title, description, activePage, children }: LayoutProps) {
  return (
    <html lang={config.site.lang}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`${title} | ${config.site.name}`}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="/assets/styles/main.css" />
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
