const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// The site always opens in dark mode; the button lets visitors switch to light for this visit.
function applyTheme(theme) {
  body.classList.toggle("light", theme === "light");
  body.classList.toggle("dark", theme !== "light");
  toggleButton.textContent = theme === "light" ? "🌙" : "☀️";
  toggleButton.title = theme === "light" ? "Switch to dark mode" : "Switch to light mode";
}

applyTheme("dark");

toggleButton.addEventListener("click", () => {
  applyTheme(body.classList.contains("light") ? "dark" : "light");
});
