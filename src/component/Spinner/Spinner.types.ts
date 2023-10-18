import { DetailedHTMLProps, HTMLAttributes } from "react";

export type SpinnerProps = {
};

export type StandardProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof SpinnerProps>;