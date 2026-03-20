(function () {
  var saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);

  var btn = document.querySelector(".theme-toggle");
  var hljsLight = document.getElementById("hljs-light");
  var hljsDark = document.getElementById("hljs-dark");
  if (!btn) return;

  function getEffectiveTheme() {
    var explicit = document.documentElement.getAttribute("data-theme");
    if (explicit) return explicit;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function updateHljs() {
    var isDark = getEffectiveTheme() === "dark";
    if (hljsLight) hljsLight.media = isDark ? "not all" : "all";
    if (hljsDark) hljsDark.media = isDark ? "all" : "not all";
  }

  function updateLabel() {
    btn.textContent = getEffectiveTheme() === "dark" ? "Light" : "Dark";
  }

  function update() {
    updateLabel();
    updateHljs();
  }

  btn.addEventListener("click", function () {
    var next = getEffectiveTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    update();
  });

  update();
})();
