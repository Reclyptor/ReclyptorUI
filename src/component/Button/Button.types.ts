import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type ButtonProps = {
  solid?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export type StandardProps = Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof ButtonProps>;