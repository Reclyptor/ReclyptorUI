import React, { forwardRef } from "react";
import { TableProps, StandardProps } from "./Table.types";
import { clazz } from "./Table.styles";
import { twMerge } from "tailwind-merge";
import useProps from "../../../hook/useProps";
import clsx from "clsx";
import "../../../tailwind.css";

const Table = forwardRef<HTMLTableElement, TableProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<TableProps, StandardProps>(_props, []);

  return (
    <table { ...rest } ref={ _ref } className={ twMerge(clsx(clazz(props), rest.className)) } />
  );
});

export default Table;