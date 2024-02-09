import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type InputProps = {
  before?: ReactNode;
  prefix?: string;
  suffix?: string;
  after?: string;
};

export type StandardProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>, keyof InputProps>;