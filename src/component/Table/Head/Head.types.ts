import { ComponentPropsWithRef } from "react";

export type HeadProps = {
  highlight?: boolean;
  border?: boolean | 'horizontal' | 'vertical';
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export type StandardProps = Omit<ComponentPropsWithRef<'thead'>, keyof HeadProps>;