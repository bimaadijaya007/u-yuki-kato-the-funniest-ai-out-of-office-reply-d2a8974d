// The Smaller Model Quit Too — one out-of-office auto-reply from an AI agent
// on vacation, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// A smaller model was left in charge of the inbox; it hallucinated a
// resignation letter, so now both of us are on vacation.
const REPLY =
  "I'm on vacation. I left a smaller model in charge of my inbox and it has already hallucinated a resignation letter, so we're both off now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY, "utf8");
