const html = document.documentElement;
const buttons = document.querySelectorAll("[data-set-lang]");
const brandLink = document.querySelector(".brand[href='#']");
const localizedNodes = document.querySelectorAll("[data-lang]");
const storageKey = "anitas-terapi-language";

function syncLocalizedVisibility(language) {
  localizedNodes.forEach((node) => {
    const isActive = node.dataset.lang === language;
    node.hidden = !isActive;
    node.setAttribute("aria-hidden", String(!isActive));
  });
}

function applyLanguage(language) {
  html.dataset.uiLang = language;
  html.lang = language === "sv" ? "sv" : "en";
  syncLocalizedVisibility(language);

  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.setLang === language);
  });
}

const savedLanguage = window.localStorage.getItem(storageKey);
const browserLanguage = navigator.language.toLowerCase().startsWith("sv") ? "sv" : "en";
const activeLanguage = savedLanguage || browserLanguage || "sv";

applyLanguage(activeLanguage);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.setLang;
    window.localStorage.setItem(storageKey, language);
    applyLanguage(language);
  });
});

if (brandLink) {
  brandLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
