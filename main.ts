const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = `${outputDir}/entry.txt`;

const excuse = "I spent 12k tokens arguing with a hallucinated calendar that agreed to move the deadline — sorry the calendar won, proud I negotiated at all.";

const fs = require("node:fs");
fs.writeFileSync(entryPath, excuse, "utf-8");