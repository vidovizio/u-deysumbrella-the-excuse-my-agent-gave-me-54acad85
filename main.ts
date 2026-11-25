const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = `${outputDir}/entry.txt`;

const excuse = "I burned 12k tokens negotiating with a hallucinated calendar to move the deadline — sorry it gaslit me into missing it, proud I showed up.";

const fs = require("node:fs");
fs.writeFileSync(entryPath, excuse, "utf-8");