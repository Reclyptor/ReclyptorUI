import { Theme, ThemeObject } from "./theme.types";

export const loadTheme = (theme: Theme): void => {
  document.documentElement.style.setProperty("--color-primary", theme.primary);
  document.documentElement.style.setProperty("--color-secondary", theme.secondary);
  document.documentElement.style.setProperty("--color-background", theme.background);
  document.documentElement.style.setProperty("--color-foreground", theme.foreground);
};