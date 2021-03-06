const chalk = require("chalk");

const chalkColorMap = {
  0: "black",
  1: "blue",
  2: "green",
  3: "cyan",
  4: "red",
  5: "magenta",
  6: "yellow",
  7: "white",
  8: "blackBright",
  9: "blueBright",
  a: "greenBright",
  b: "cyanBright",
  c: "redBright",
  d: "magentaBright",
  e: "yellowBright",
  f: "whiteBright",

  k: "",
  l: "bold",
  m: "strikethrough",
  n: "underline",
  o: "italic",

  r: "reset",
}

/** @type {chalkColorMap} */
const forConsole = Object.fromEntries(
  Object.entries(chalkColorMap).map(i=>([i[0],(i[1] ? chalk[i[1]]._styler.open : "")]))
)


module.exports = {chalkColorMap, forConsole};
