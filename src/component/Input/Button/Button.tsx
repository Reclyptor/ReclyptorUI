import React, { forwardRef } from "react";
import { ButtonProps, StandardProps } from "./Button.types";
import { clazz, style } from "./Button.styles";
import clsx from "clsx";
import useHAF from "../../../hook/useHAF";
import useProps from "../../../hook/useProps";
import useTheme from "../../../style/useTheme/useTheme";
import "../../../tailwind.css";

const Button = forwardRef<HTMLButtonElement, ButtonProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<ButtonProps, StandardProps>(_props, ["size"]);
  const { ref, state } = useHAF<HTMLButtonElement>(_ref);
  const theme = useTheme();

  return (
    <button { ...rest } ref={ ref } className={ clsx(clazz(props), rest.className) } style={ style(theme, state, rest.style) }>
      { React.isValidElement(rest.children) ? rest.children : <div className="flex items-center justify-center w-full h-full">{ rest.children }</div> }
    </button>
  );
});

export default Button;