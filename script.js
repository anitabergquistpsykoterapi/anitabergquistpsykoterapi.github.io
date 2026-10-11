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

const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
const linkLanguage = ["sv", "en"].includes(requestedLanguage) ? requestedLanguage : null;
const storedLanguage = window.localStorage.getItem(storageKey);
const savedLanguage = ["sv", "en"].includes(storedLanguage) ? storedLanguage : null;
const browserLanguage = navigator.language.toLowerCase().startsWith("sv") ? "sv" : "en";
const activeLanguage = linkLanguage || savedLanguage || browserLanguage;

if (linkLanguage) {
  window.localStorage.setItem(storageKey, linkLanguage);
}

applyLanguage(activeLanguage);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.setLang;
    window.localStorage.setItem(storageKey, language);
    applyLanguage(language);

    const url = new URL(window.location.href);
    if (url.searchParams.has("lang")) {
      url.searchParams.set("lang", language);
      window.history.replaceState(window.history.state, "", url.href);
    }
  });
});

if (brandLink) {
  brandLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
