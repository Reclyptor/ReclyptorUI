import React, { forwardRef } from "react";
import { RowProps, StandardProps } from "./Row.types";
import { clazz } from "./Row.styles";
import { twMerge } from "tailwind-merge";
import useProps from "../../../hook/useProps";
import clsx from "clsx";
import "../../../tailwind.css";

const Row = forwardRef<HTMLTableRowElement, RowProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<RowProps, StandardProps>(_props, []);

  return (
    <tr { ...rest } ref={ _ref } className={ twMerge(clsx(clazz(props), rest.className)) } />
  );
});

export default Row;