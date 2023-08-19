import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type ButtonProps = {
  size?: 'sm' | 'md' | 'lg';
};

export type StandardProps = Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof ButtonProps>;