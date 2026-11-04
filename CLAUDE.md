# parkeringskalkyl

Jämför kostnad för gatuparkering i redigerbara scenarion. En fil (`index.html`), ingen backend, inga bibliotek, localStorage.
Live: https://olivermiilus.github.io/parkeringskalkyl/ (publikt repo olivermiilus/parkeringskalkyl, GitHub Pages från main /).

## Filer
| Fil | Ansvar |
|---|---|
| `index.html` | MOTOR (mellan `// ===== MOTOR START/SLUT =====`) + GRÄNSSNITT |
| `test/kor-tester.mjs` | Kör `korTester()` i Node genom att plocka ut MOTOR-delen |
| `README.md` | Beräkningsregler och test |

## Nyckeldata
`standardLage()`: `{version, start, slut, debitering: "minut"|"timme", platser[], scenarion[]}`.
Plats: `id, kod, namn, dagPris, dagFran, dagTill, ovrigPris, forbud {veckodag 1–7, fran, till, vecka alla|udda|jamna} | null, tidsgrans | null, anteckning`.
Scenario: `{id, namn, etapper: [{platsId, start}]}` – första etappens start = null (global starttid).
Varning: `{kort, text, niva: "info"|"varning"}` – ⚠ bara för "varning".

## Invarianter
- Testfall (standard, per minut): 862 / 475 / 526 kr (801: 128, 805: 398). Prisdata och testfall ändras inte utan att säga det till Oliver.
- Per påbörjad timme = etappens längd avrundas uppåt till hela timmar (antagande).
- Klocktid via Date.UTC (sommartid ignoreras). Svenska helgdagar räknas i appen; tidsgräns gäller dag som inte är sön/helgdag och vars nästa dag inte är det.
- UI: `rita()` ritar allt, `ritaResultat()` bara listan (behåller fokus). Öppna `<details data-id>` bevaras vid omritning.

## Publicera
Ändra `index.html` → `node test/kor-tester.mjs` → commit → `git push` (Pages bygger om på 1–2 min).
