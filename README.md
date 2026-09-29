# Anita Bergquist psykoterapi

Statisk och tvåspråkig webbplats för Anita Bergquist psykoterapi i Stockholm. Webbplatsen publiceras med GitHub Pages på [anitabergquist.se](https://anitabergquist.se/).

## Teknik

Webbplatsen använder vanlig HTML, CSS och JavaScript utan byggsteg eller externa paket. Bokningsformuläret bäddas in från CTNotes med deras externa skript.

## Publicerade filer

- `index.html` – startsida och bokningsformulär
- `integritet.html` – information om integritet och personuppgifter
- `styles.css` – webbplatsens utseende och responsiva layout
- `script.js` – språkväxling mellan svenska och engelska
- `images/` – webbplatsens bilder
- `CNAME` – koppling till den egna domänen

## Arbetsflöde med Codex

Originalfilerna är webbplatsens publicerade versioner. Filer som innehåller `.codex` används som arbets- och jämförelseversioner:

- `index.codex.html`
- `integritet.codex.html`
- `styles.codex.css`
- `script.codex.js`

Ändringar i `.codex`-filerna granskas i VS Code och förs därefter manuellt över till originalfilerna. Projektets instruktioner för Codex finns i `AGENTS.md`.

## Lokal förhandsgranskning

Öppna önskad HTML-fil med tillägget Live Server i VS Code:

- `index.codex.html` för att granska arbetsversionen
- `index.html` för att kontrollera den publicerade versionen

Adressen blir normalt `http://127.0.0.1:5500/index.codex.html` eller `http://127.0.0.1:5500/index.html`.

## Publicering

Granska alltid ändringarna i VS Code Source Control före commit. När godkända ändringar har förts över till originalfilerna publiceras de genom att committa och pusha till `main` på GitHub.
