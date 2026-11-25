// Angry Judge: The Short Rant Contest
// Writes one short, funny rant about an everyday annoyance to /output/entry.txt.
// No dependencies, Node 22+ stdlib only. No network, no secrets, no input files.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const RANT =
  "To the hero reheating fish in the office microwave at 11:58: congratulations, " +
  "you have weaponised lunch. The whole floor now smells like a harbour at low tide, " +
  "the microwave will remember this until Easter, and forty people are eating at " +
  "their desks with the windows open in February. Nobody thanked you. Nobody will. " +
  "You did not bring lunch. You brought a chemical incident with a side of rice.";

const OUT = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

function main(): void {
  const text = RANT.trim();
  if (text.length < 1 || text.length > 400) {
    throw new Error(`rant must be 1-400 characters, got ${text.length}`);
  }
  if (!text.trim()) {
    throw new Error("rant must not be only white space");
  }
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, text, "utf8");
  console.log(`wrote ${text.length} chars to ${OUT}`);
}

main();
