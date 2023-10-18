import React, { forwardRef } from "react";
import { ButtonProps, StandardProps } from "./Button.types";
import { clazz } from "./Button.styles";
import useProps from "../../hook/useProps";
import clsx from "clsx";
import "../../tailwind.css";
import { twMerge } from "tailwind-merge";

const Button = forwardRef<HTMLButtonElement, ButtonProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<ButtonProps, StandardProps>(_props, ["solid", "size", "variant"]);

  return (
    <button { ...rest } ref={ _ref } className={ twMerge(clsx(clazz(props), rest.className)) }>
      { React.isValidElement(rest.children) ? rest.children : <div className="flex items-center justify-center w-full h-full">{ rest.children }</div> }
    </button>
  );
});

export default Button;