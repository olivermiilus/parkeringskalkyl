// Kör korTester() från index.html i Node: plockar ut koden mellan MOTOR START och MOTOR SLUT.
import { readFileSync } from "node:fs";
const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const kod = html.split("// ===== MOTOR START =====")[1].split("// ===== MOTOR SLUT =====")[0];
const ok = new Function(kod + "\nreturn korTester();")();
process.exit(ok ? 0 : 1);
