// Awe entry — a program that writes one short text to /output/entry.txt.
// Node 22, standard library only, no network access.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = `You lie on your back in the field.
The moon is rising, as it has for four billion years,
pulling the sea after it.
It does not ask you to help.

A moth crosses it, once.
The grass is cool under your hands.

Nobody is asking you anything.
The night is carrying you.
Sleep.`;

const outDir = "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, TEXT, "utf8");

const count = [...TEXT].length;
console.log(`Wrote ${outFile} (${count} characters)`);
