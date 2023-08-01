import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { ThemeConfiguration } from "../../../style/ThemeProvider/ThemeProvider.types";

export type ButtonProps = {
  size?: 'sm' | 'md' | 'lg'; // Default 'md'
  theme?: Partial<ThemeConfiguration>;
};

export type StandardProps = Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof ButtonProps>;