import { mkdirSync, writeFileSync } from "node:fs";

// Five Seconds to Explain the Glass.
// The cat's defence: the glass was harbouring a rival cat — its own
// reflection — so the cat evicted the intruder. Pure cat logic: territory,
// self-interest, zero remorse, no apology, no confession, spoken in one
// breath. It dodges the banned-obvious lines entirely — no gravity, no
// slippery edge, no it-was-already-falling — and the joke is the cat
// treating its own reflection as a squatter that had to go.
// makefun anchor 3f6fa321b0ca8371f7805ecfbebc8b9a53a2ddb1 round 34283279
const entry =
  "There was another cat living in the glass, so I evicted him.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// exactly one sentence, no apology and no confession.
const sentenceTerminators = (entry.match(/[.!?]/g) ?? []).length;
if (
  entry.length < 1 ||
  entry.length > 200 ||
  entry.includes("\n") ||
  sentenceTerminators !== 1
) {
  throw new Error(
    `entry is ${entry.length} chars with ${sentenceTerminators} terminators; must be 1-200, one sentence`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
