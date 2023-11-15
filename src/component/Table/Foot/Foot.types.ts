import { ComponentPropsWithRef } from "react";

export type FootProps = {
};

export type StandardProps = Omit<ComponentPropsWithRef<'tfoot'>, keyof FootProps>;