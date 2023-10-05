import { Theme } from "./theme.types";

export const loadTheme = (theme: Theme): void => {
  document.documentElement.style.setProperty("--color-primary", theme.primary);
  document.documentElement.style.setProperty("--color-primary-hover", theme.primaryHover);
  document.documentElement.style.setProperty("--color-primary-active", theme.primaryActive);
  document.documentElement.style.setProperty("--color-primary-focus", theme.primaryFocus);
  document.documentElement.style.setProperty("--color-secondary", theme.secondary);
  document.documentElement.style.setProperty("--color-secondary-hover", theme.secondaryHover);
  document.documentElement.style.setProperty("--color-secondary-active", theme.secondaryActive);
  document.documentElement.style.setProperty("--color-secondary-focus", theme.secondaryFocus);
  document.documentElement.style.setProperty("--color-tertiary", theme.tertiary);
  document.documentElement.style.setProperty("--color-tertiary-hover", theme.tertiaryHover);
  document.documentElement.style.setProperty("--color-tertiary-active", theme.tertiaryActive);
  document.documentElement.style.setProperty("--color-tertiary-focus", theme.tertiaryFocus);
  document.documentElement.style.setProperty("--color-background", theme.background);
  document.documentElement.style.setProperty("--color-foreground", theme.foreground);
  document.documentElement.style.setProperty("--color-surface", theme.surface);
};