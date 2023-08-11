import { Theme, ThemeConfiguration } from "../ThemeProvider/ThemeProvider.types";

const defaultTheme: ThemeConfiguration = require("../../theme/default.json");

const loadTheme = (theme: ThemeConfiguration = defaultTheme): Theme => {
  return {
    ...theme,
    transparent: "transparent",
    current: "currentColor",
    black: "#000000",
    white: "#FFFFFF",
  };
};

export default loadTheme;