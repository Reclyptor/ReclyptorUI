import React, { useContext } from "react";
import ThemeContext from "../style/ThemeContext";
import { Theme, ThemeConfiguration } from "../style/ThemeProvider/ThemeProvider.types";
import { blend } from "../util/colors";

const augmentTheme = (theme: ThemeConfiguration): Theme => {
  return {
    transparent: "transparent",
    current: "currentColor",
    black: "#000000",
    white: "#FFFFFF",
    background: theme.background,
    backgroundAccent: blend(theme.background, 95, "#FFFFFF"),
    backgroundMute: blend(theme.background, 80, "#000000"),
    foreground: theme.foreground,
    foregroundAccent: blend(theme.foreground, 95, "#FFFFFF"),
    foregroundMute: blend(theme.foreground, 80, "#000000"),
    primary: theme.primary,
    primaryAccent: blend(theme.primary, 95, "#FFFFFF"),
    primaryMute: blend(theme.primary, 80, "#000000"),
    secondary: theme.secondary,
    secondaryAccent: blend(theme.secondary, 95, "#FFFFFF"),
    secondaryMute: blend(theme.secondary, 80, "#000000")
  };
};

const useTheme = (theme?: Partial<ThemeConfiguration>): Theme => {
  const defaultTheme: ThemeConfiguration = useContext<ThemeConfiguration>(ThemeContext);
  return augmentTheme({ ...defaultTheme, ...theme });
}

export default useTheme;