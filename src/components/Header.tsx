import { config } from "../config.js";

export function Header() {
  return (
    <header className="site-header">
      <nav className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="/" className="site-title">
          {config.site.name}
        </a>
        <button className="theme-toggle" type="button" aria-label="Toggle dark mode" />
      </nav>
    </header>
  );
}
