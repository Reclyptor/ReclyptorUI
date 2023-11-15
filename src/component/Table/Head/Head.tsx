import React, { forwardRef } from "react";
import { HeadProps, StandardProps } from "./Head.types";
import { clazz } from "./Head.styles";
import { twMerge } from "tailwind-merge";
import useProps from "../../../hook/useProps";
import clsx from "clsx";
import "../../../tailwind.css";

const Head = forwardRef<HTMLTableSectionElement, HeadProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<HeadProps, StandardProps>(_props, []);

  return (
    <thead { ...rest } ref={ _ref } className={ twMerge(clsx(clazz(props), rest.className)) } />
  );
});

export default Head;