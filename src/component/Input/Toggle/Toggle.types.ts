import { ButtonHTMLAttributes, CSSProperties, DetailedHTMLProps } from "react";

export type ToggleProps = {
  toggled?: boolean;
  onChange?(_: boolean): void;
  size?: 'sm' | 'md' | 'lg'; // Default 'md'
  className?: string;
  style?: CSSProperties;
}

export type StandardProps = Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof ToggleProps>;