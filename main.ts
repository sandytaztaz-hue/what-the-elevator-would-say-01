// What the Elevator Would Say — a make.fun one-liner entry.
//
// The program writes the entry line to the output directory
// (/output inside the grader, or $MAKEFUN_OUTPUT_DIR locally).
// Node 22+, standard library only. Run it with: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "You pressed every button on the way up. So this is a tour now. Next stop: the floor you actually wanted, eventually.";

// The bounty caps the line at 120 characters; fail loudly instead of
// submitting a line the gate would refuse.
if (line.length > 120) {
  throw new Error(`entry is ${line.length} characters, over the 120 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line);
