# Instruktioner för Codex

## Arbetsregler

- Ändra aldrig originalfiler utan att användaren uttryckligen ber om det.
- Skapa och ändra experimentella versioner med namn enligt mönstret:
  - `index.codex.html`
  - `script.codex.js`
  - `styles.codex.css`
- Om en motsvarande `.codex`-fil saknas, skapa den i stället för att ändra originalfilen.
- Ändra inte andra filer än de som uttryckligen ingår i uppgiften.
- Skapa aldrig commits, stage:a inte filer och pusha aldrig till GitHub utan uttryckligt godkännande.
- Beskriv alltid:
  - vilka filer som ändrats
  - vad som ändrats
  - hur originalfilerna är skyddade
- Kör relevanta tester eller kontroller efter ändringar.
- Ange alltid hur webbresultatet kan förhandsgranskas lokalt.
- Ändra inte `.env`-filer, lösenord, API-nycklar eller andra hemligheter.

## Projektets arbetssätt

- Originalfilerna granskas och uppdateras manuellt av användaren.
- `.codex`-filer används som arbets-, experiment- och jämförelseversioner.
- Alla ändringar ska kunna granskas i VS Code Source Control.
- Innan ändringar görs ska Codex kort ange planerade filer och åtgärder.
- Om uppgiften kräver ändring av en originalfil ska Codex stanna och be om uttryckligt godkännande.
- Codex ska inte skapa nya beroenden eller ändra projektets struktur utan att först fråga.

## Förhandsgranskning

- För HTML/CSS/JavaScript ska Codex ange hur sidan startas lokalt.
- Om en utvecklingsserver används ska Codex ange den lokala adressen, exempelvis `http://localhost:5173`.
- Codex ska inte anta att en visuell ändring är korrekt utan att beskriva hur den kan kontrolleras i webbläsare.
