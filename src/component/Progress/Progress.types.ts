import { DetailedHTMLProps, HTMLAttributes } from "react";

export type ProgressProps = {
  value?: number;
  indeterminate?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export type StandardProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof ProgressProps>;