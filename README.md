# Parkeringskalkyl

Webbapp som jämför vad gatuparkering kostar i olika scenarion, t.ex. om det lönar sig att flytta bilen till en billigare plats under helgen. En enda fil (`index.html`) utan backend och utan externa bibliotek. Inställningarna sparas i webbläsarens localStorage.

## Använda
Öppna sidan, ställ in start- och sluttid, och jämför scenariona överst. Platser, priser, P-förbud och tidsgränser kan ändras under "Parkeringsplatser", så att appen går att använda i andra städer. "Återställ standard" tar tillbaka standardvärdena.

## Beräkning
- Varje etapp delas i segment per dygn: dagtid och övrig tid enligt platsens tider.
- Varje etapps summa avrundas till hela kronor.
- Per minut är standard. "Per påbörjad timme" avrundar varje etapps längd uppåt till hela timmar.
- P-förbud räknas med ISO-veckonummer (udda/jämna veckor).
- Tidsgränsen jämförs med dagar där den gäller: vardag utom dag före sön- och helgdag (svenska helgdagar räknas ut i appen). Appen varnar men blockerar inte.
- Tider räknas som klocktid; en natt med sommartidsomställning räknas som en vanlig natt.

## Testa
- I webbläsaren: knappen "Kör testerna", eller `korTester()` i konsolen.
- I terminalen: `node test/kor-tester.mjs`

Testfall (standardvärden, per minut): scenario 1 = 862 kr, scenario 2 = 475 kr, scenario 3 = 526 kr (801: 128 kr, 805: 398 kr).
