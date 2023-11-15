import { ComponentPropsWithRef } from "react";

export type BodyProps = {
};

export type StandardProps = Omit<ComponentPropsWithRef<'tbody'>, keyof BodyProps>;