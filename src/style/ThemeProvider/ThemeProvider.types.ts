import { ReactNode } from "react";

export type ThemeConfiguration = {
  background: {
    default: string;
    hover: string;
    active: string;
    focus: string;
  };
  foreground: {
    default: string;
    hover: string;
    active: string;
    focus: string;
  };
  primary: {
    default: string;
    hover: string;
    active: string;
    focus: string;
  };
  secondary: {
    default: string;
    hover: string;
    active: string;
    focus: string;
  };
};

export type Theme = ThemeConfiguration & {
  transparent: string;
  current: string;
  black: string;
  white: string;
};

export type ThemeProviderProps = {
  theme?: ThemeConfiguration;
  children?: ReactNode;
};