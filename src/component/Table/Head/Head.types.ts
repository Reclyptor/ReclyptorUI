import { ComponentPropsWithRef } from "react";

export type HeadProps = {
};

export type StandardProps = Omit<ComponentPropsWithRef<'thead'>, keyof HeadProps>;