import { ComponentPropsWithRef } from "react";

export type FootProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export type StandardProps = Omit<ComponentPropsWithRef<'tfoot'>, keyof FootProps>;