import { ComponentPropsWithRef } from "react";

export type RowProps = {
  horizontal?: boolean;
  vertical?: boolean;
};

export type StandardProps = Omit<ComponentPropsWithRef<'tr'>, keyof RowProps>;