import { CSSProperties, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export type TextFieldProps = {
  prefix?: ReactNode;
  suffix?: ReactNode;
  type?: 'text' | 'password'; // Default 'text'
  clearable?: boolean;
  className?: string;
  style?: CSSProperties;
};

export type StandardProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, keyof TextFieldProps>;