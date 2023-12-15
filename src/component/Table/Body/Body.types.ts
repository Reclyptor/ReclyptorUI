import { ComponentPropsWithRef } from "react";

export type BodyProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export type StandardProps = Omit<ComponentPropsWithRef<'tbody'>, keyof BodyProps>;