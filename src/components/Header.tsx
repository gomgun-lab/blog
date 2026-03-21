import { site } from "../site.js";

interface HeaderProps {
  activePage?: "home" | "posts";
}

export function Header({ activePage }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="header__logo">{site.name}</a>
        <nav className="header__nav">
          <a href="/" className={`header__link${activePage === "home" ? " header__link--active" : ""}`}>Home</a>
          <a href="/posts/" className={`header__link${activePage === "posts" ? " header__link--active" : ""}`}>Posts</a>
        </nav>
      </div>
    </header>
  );
}
