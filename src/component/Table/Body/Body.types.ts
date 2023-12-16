import { ComponentPropsWithRef } from "react";

export type BodyProps = {
  highlight?: boolean;
  border?: boolean | 'horizontal' | 'vertical';
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export type StandardProps = Omit<ComponentPropsWithRef<'tbody'>, keyof BodyProps>;