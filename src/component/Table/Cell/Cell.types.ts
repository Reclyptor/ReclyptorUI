import { ComponentPropsWithRef } from "react";

export type CellProps = {
};

export type StandardProps = Omit<ComponentPropsWithRef<'td'>, keyof CellProps>;