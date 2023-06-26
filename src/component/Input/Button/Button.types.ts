import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type ButtonProps = {
  size?: 'sm' | 'md' | 'lg'; // Default 'md'
};

export type StandardProps = Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof ButtonProps>;