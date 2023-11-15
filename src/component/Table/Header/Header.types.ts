import { ComponentPropsWithRef } from "react";

export type HeaderProps = {
};

export type StandardProps = Omit<ComponentPropsWithRef<'th'>, keyof HeaderProps>;