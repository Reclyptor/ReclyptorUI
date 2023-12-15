import { ComponentPropsWithRef } from "react";

export type CellProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export type StandardProps = Omit<ComponentPropsWithRef<'td'>, keyof CellProps>;