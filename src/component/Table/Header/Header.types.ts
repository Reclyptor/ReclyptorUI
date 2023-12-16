import { ComponentPropsWithRef } from "react";

export type HeaderProps = {
  highlight?: boolean;
  border?: boolean | 'horizontal' | 'vertical';
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export type StandardProps = Omit<ComponentPropsWithRef<'th'>, keyof HeaderProps>;