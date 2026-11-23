// "One Line, Zero Use" — the impossible courtesy of holding an elevator door open forever.
// The reversal lands on the last three words: "up the stairs".
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revised after reading aloud: "whoever I'm holding it for is" stumbled on the
// for/is collision. "whoever it's for is" is eight characters shorter, keeps the
// deadpan, and makes it funnier that you don't even know who you're waiting on.
const LINE =
  "I can hold any elevator door open forever, but whoever it's for is already four floors up the stairs.";

const MAX_CHARS = 200;

// Writes the line as UTF-8 entry.txt, creating the output directory if needed.
function writeEntry(line: string, dir: string): string {
  if (line.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(`entry must be 1..${MAX_CHARS} characters, got ${line.length}`);
  }
  mkdirSync(dir, { recursive: true });
  const target = join(dir, "entry.txt");
  writeFileSync(target, `${line}\n`, "utf8");
  return target;
}

const dir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";

console.log(`${writeEntry(LINE, dir)} — ${LINE.length} characters`);
