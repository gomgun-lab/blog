import { config } from "../config.js";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>{`\u00A9 ${new Date().getFullYear()} ${config.site.name}`}</p>
      </div>
    </footer>
  );
}
