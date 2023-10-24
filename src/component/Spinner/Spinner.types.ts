import { DetailedHTMLProps, HTMLAttributes } from "react";

export type SpinnerProps = {
  value?: number;
  indeterminate?: boolean;
  radius?: number;
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export type StandardProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof SpinnerProps>;