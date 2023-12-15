import React, { forwardRef } from "react";
import { FootProps, StandardProps } from "./Foot.types";
import { clazz } from "./Foot.styles";
import { twMerge } from "tailwind-merge";
import useProps from "../../../hook/useProps";
import clsx from "clsx";
import "../../../tailwind.css";

const Foot = forwardRef<HTMLTableSectionElement, FootProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<FootProps, StandardProps>(_props, ['variant']);

  return (
    <tfoot { ...rest } ref={ _ref } className={ twMerge(clsx(clazz(props), rest.className)) } />
  );
});

export default Foot;