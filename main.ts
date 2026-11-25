// Writes entry.txt verbatim to /output/entry.txt (single line, 84 chars).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(here, "entry.txt"), "utf8");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text);
