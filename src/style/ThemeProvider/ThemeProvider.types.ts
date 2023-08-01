import { ReactNode } from "react";

export type ThemeConfiguration = {
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
};

export type Theme = {
  transparent: string;
  current: string;
  black: string;
  white: string;
  background: string;
  backgroundAccent: string;
  backgroundMute: string;
  foreground: string;
  foregroundAccent: string;
  foregroundMute: string;
  primary: string;
  primaryAccent: string;
  primaryMute: string;
  secondary: string;
  secondaryAccent: string;
  secondaryMute: string;
};

export type ThemeProviderProps = {
  theme?: Partial<ThemeConfiguration>;
  children?: ReactNode;
};