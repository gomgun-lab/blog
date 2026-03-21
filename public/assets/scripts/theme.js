(function () {
  const STORAGE_KEY = "theme";

  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);

    var hljsLight = document.getElementById("hljs-light");
    var hljsDark = document.getElementById("hljs-dark");
    var isDark = theme === "dark";
    if (hljsLight) hljsLight.media = isDark ? "not all" : "all";
    if (hljsDark) hljsDark.media = isDark ? "all" : "not all";
  }

  applyTheme(getPreferredTheme());

  function updateToggleText(toggle) {
    const current = document.documentElement.getAttribute("data-theme");
    toggle.textContent = current === "dark" ? "Light" : "Dark";
  }

  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".theme-toggle");
    if (!toggle) return;

    updateToggleText(toggle);

    toggle.addEventListener("click", function () {
      const current = document.documentElement.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
      updateToggleText(toggle);
    });
  });
})();
