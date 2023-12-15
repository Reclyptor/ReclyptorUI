import { ComponentPropsWithRef } from "react";

export type RowProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export type StandardProps = Omit<ComponentPropsWithRef<'tr'>, keyof RowProps>;