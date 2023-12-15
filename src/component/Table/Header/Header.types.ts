import { ComponentPropsWithRef } from "react";

export type HeaderProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export type StandardProps = Omit<ComponentPropsWithRef<'th'>, keyof HeaderProps>;