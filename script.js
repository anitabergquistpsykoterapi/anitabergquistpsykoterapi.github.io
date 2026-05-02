const html = document.documentElement;
const buttons = document.querySelectorAll("[data-set-lang]");
const brandLink = document.querySelector(".brand[href='#']");
const storageKey = "anitas-terapi-language";

function applyLanguage(language) {
  html.dataset.uiLang = language;
  html.lang = language === "sv" ? "sv" : "en";

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
