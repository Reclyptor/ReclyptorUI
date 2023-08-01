import React, { forwardRef } from "react";
import { ButtonProps, StandardProps } from "./Button.types";
import { buttonClass, buttonStyle, divStyle } from "./button.styles";
import clsx from 'clsx';
import useHAF from "../../../hook/useHAF";
import useProps from "../../../hook/useProps";
import useTheme from "../../../hook/useTheme";
import '../../../tailwind.css';

const Button = forwardRef<HTMLButtonElement, ButtonProps & StandardProps>((_props, _ref) => {
  const theme = useTheme();
  const { ref, state } = useHAF<HTMLButtonElement>(_ref);
  const { props, rest } = useProps<ButtonProps, StandardProps>(_props, ["size"]);

  return (
    <button { ...rest } ref={ ref } className={ clsx(buttonClass({ size: props.size }), rest.className) } style={ buttonStyle(theme, state, rest.style) }>
      { React.isValidElement(rest.children) ? rest.children : <div className="flex items-center justify-center w-full h-full" style={ divStyle(theme, state, rest.style) }>{ rest.children }</div> }
    </button>
  );
});

export default Button;