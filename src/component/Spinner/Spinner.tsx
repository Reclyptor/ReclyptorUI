import React, { forwardRef } from "react";
import { SpinnerProps, StandardProps } from "./Spinner.types";
import { clazz } from "./Spinner.styles";
import { twMerge } from "tailwind-merge";
import useProps from "../../hook/useProps";
import clsx from "clsx";
import "../../tailwind.css";

const Spinner = forwardRef<HTMLDivElement, SpinnerProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<SpinnerProps, StandardProps>(_props, []);

  return (
    <div { ...rest } ref={ _ref } className={ twMerge(clsx(clazz(props), rest.className)) }>
      { React.isValidElement(rest.children) ? rest.children : <div className="flex items-center justify-center w-full h-full">{ rest.children }</div> }
    </div>
  );
});

export default Spinner;