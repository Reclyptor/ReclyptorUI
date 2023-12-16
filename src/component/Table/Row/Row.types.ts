import { ComponentPropsWithRef } from "react";

export type RowProps = {
  highlight?: boolean;
  border?: boolean | 'horizontal' | 'vertical';
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export type StandardProps = Omit<ComponentPropsWithRef<'tr'>, keyof RowProps>;