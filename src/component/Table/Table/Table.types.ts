import { ComponentPropsWithRef } from "react";

export type TableProps = {
};

export type StandardProps = Omit<ComponentPropsWithRef<'table'>, keyof TableProps>;