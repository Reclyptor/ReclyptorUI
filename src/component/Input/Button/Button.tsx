import React, { forwardRef } from "react";
import { ButtonProps, StandardProps } from "./Button.types";
import { clazz } from "./Button.styles";
import useProps from "../../../hook/useProps";
import clsx from "clsx";
import "../../../tailwind.css";

const Button = forwardRef<HTMLButtonElement, ButtonProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<ButtonProps, StandardProps>(_props, ["size"]);

  return (
    <button { ...rest } ref={ _ref } className={ clsx("min-w-[32px] min-h-[32px] bg-foreground text-primary border-2 border-primary rounded-lg", clazz(props), rest.className) }>
      { React.isValidElement(rest.children) ? rest.children : <div className="flex items-center justify-center w-full h-full">{ rest.children }</div> }
    </button>
  );
});

export default Button;