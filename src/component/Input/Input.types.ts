import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type InputProps = {
  before?: ReactNode;
  prefix?: string;
  suffix?: string;
  after?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export type StandardProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>, keyof InputProps>;