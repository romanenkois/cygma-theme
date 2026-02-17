// Cygma Theme — Color Palette
// Edit colors here and run `npm run build` to regenerate the theme JSON.

const palette = {
  bg:        "#141414",
  fg:        "#E2F6F5",
  muted:     "#5D6565",
  darkGray:  "#2F3333",
  pink:      "#E7288E",
  darkPink:  "#B40864",
  deepPink:  "#640E3C",
  teal:      "#4FD4CB",
  yellow:    "#FFD725",
  red:       "#F93319",
};

/**
 * Append a 2-digit hex alpha suffix to a color.
 * Uses raw hex values (00–FF) matching VS Code's 8-digit hex notation.
 * @param {string} hex       Base color, e.g. "#141414"
 * @param {string} hexAlpha  2-char hex opacity, e.g. "30", "7b", "f0"
 * @example alpha(palette.bg, "60") => "#14141460"
 */
function alpha(hex, hexAlpha) {
  return `${hex.slice(0, 7)}${hexAlpha}`;
}

module.exports = { palette, alpha };
