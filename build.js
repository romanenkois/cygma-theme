const fs = require("fs");
const path = require("path");
const theme = require("./src/theme");

const outPath = path.join(__dirname, "themes", "Cygma-color-theme.json");

fs.writeFileSync(outPath, JSON.stringify(theme, null, 2) + "\n");

console.log(`✔ Theme written to ${path.relative(__dirname, outPath)}`);
