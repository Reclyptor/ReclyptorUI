import { ComponentPropsWithRef } from "react";

export type HeadProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export type StandardProps = Omit<ComponentPropsWithRef<'thead'>, keyof HeadProps>;