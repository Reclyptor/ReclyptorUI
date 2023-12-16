import React, { forwardRef } from "react";
import { BodyProps, StandardProps } from "./Body.types";
import { clazz } from "./Body.styles";
import { twMerge } from "tailwind-merge";
import useProps from "../../../hook/useProps";
import clsx from "clsx";
import "../../../tailwind.css";

const Body = forwardRef<HTMLTableSectionElement, BodyProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<BodyProps, StandardProps>(_props, ['highlight', 'border', 'variant']);

  return (
    <tbody { ...rest } ref={ _ref } className={ twMerge(clsx(clazz(props), rest.className)) } />
  );
});

export default Body;