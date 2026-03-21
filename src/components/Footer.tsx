export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">{"홍길동 · "}<a href="https://github.com" className="footer__link">GitHub</a>{" · "}<a href="mailto:hello@example.com" className="footer__link">Email</a></p>
        <button className="theme-toggle" aria-label="Toggle dark mode">Light</button>
      </div>
    </footer>
  );
}
