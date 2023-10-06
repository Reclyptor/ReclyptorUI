import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type CardProps = {
  flip?: boolean;
  solid?: boolean;
  front?: ReactNode;
  back?: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export type StandardProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof CardProps>;