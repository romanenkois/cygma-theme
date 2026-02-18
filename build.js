const fs = require("fs");
const path = require("path");
const {
  dark,
  darkHighContrast,
  light,
  lightHighContrast,
} = require("./src/colors");
const buildTheme = require("./src/theme");

const themes = [
  { palette: dark, variant: "Dark", file: "Cygma-dark-color-theme.json" },
  {
    palette: darkHighContrast,
    variant: "Dark High Contrast",
    file: "Cygma-dark-high-contrast-color-theme.json",
  },
  { palette: light, variant: "Light", file: "Cygma-light-color-theme.json" },
  {
    palette: lightHighContrast,
    variant: "Light High Contrast",
    file: "Cygma-light-high-contrast-color-theme.json",
  },
];

for (const { palette, variant, file } of themes) {
  const theme = buildTheme(palette, variant);
  const outPath = path.join(__dirname, "themes", file);
  fs.writeFileSync(outPath, JSON.stringify(theme, null, 2) + "\n");
  console.log(
    `✔ ${variant} theme written to ${path.relative(__dirname, outPath)}`,
  );
}
