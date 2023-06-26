import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type CheckboxProps = {
  checked?: boolean;
  onChange?(_: boolean): void;
  indeterminate?: boolean;
  size?: 'sm' | 'md' | 'lg'; // Default 'md'
};

export type StandardProps = Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof CheckboxProps>;