import { DetailedHTMLProps, HTMLAttributes } from "react";

export type DockProps = {
};

export type StandardProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof DockProps>;