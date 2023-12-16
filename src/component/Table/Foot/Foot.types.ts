import { ComponentPropsWithRef } from "react";

export type FootProps = {
  highlight?: boolean;
  border?: boolean | 'horizontal' | 'vertical';
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export type StandardProps = Omit<ComponentPropsWithRef<'tfoot'>, keyof FootProps>;