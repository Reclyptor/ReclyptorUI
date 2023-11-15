import React, { forwardRef } from "react";
import { CellProps, StandardProps } from "./Cell.types";
import { clazz } from "./Cell.styles";
import { twMerge } from "tailwind-merge";
import useProps from "../../../hook/useProps";
import clsx from "clsx";
import "../../../tailwind.css";

const Cell = forwardRef<HTMLTableCellElement, CellProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<CellProps, StandardProps>(_props, []);

  return (
    <td { ...rest } ref={ _ref } className={ twMerge(clsx(clazz(props), rest.className)) } />
  );
});

export default Cell;