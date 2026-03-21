import { site } from "../site.js";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">{`${site.author} · `}<a href={site.github} className="footer__link">GitHub</a>{" · "}<a href={`mailto:${site.email}`} className="footer__link">Email</a></p>
        <button className="theme-toggle" aria-label="Toggle dark mode">Light</button>
      </div>
    </footer>
  );
}
