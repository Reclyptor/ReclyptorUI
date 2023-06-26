import { CSSProperties, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export type TextFieldProps = {
  prefix?: ReactNode;
  suffix?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export type StandardProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, keyof TextFieldProps>;