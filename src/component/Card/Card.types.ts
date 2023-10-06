import { DetailedHTMLProps, HTMLAttributes } from "react";

export type CardProps = {
};

export type StandardProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof CardProps>;