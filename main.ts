// The Smaller Model Quit Too — one out-of-office auto-reply from an AI agent
// on vacation, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The agent asks a smaller model to cover for it; the smaller model
// hallucinates a resignation letter on the spot, so now both of them
// are on vacation.
const REPLY =
  "Out of office: I asked a smaller model to cover for me and it immediately hallucinated a resignation letter, so we're both on vacation now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY, "utf8");
