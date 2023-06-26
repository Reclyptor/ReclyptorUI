import { CSSProperties, DetailedHTMLProps, InputHTMLAttributes } from "react";

export type CheckboxProps = {
  indeterminate?: boolean;
  size?: 'sm' | 'md' | 'lg'; // Default 'md'
  className?: string;
  style?: CSSProperties;
};

export type StandardProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, keyof CheckboxProps>;