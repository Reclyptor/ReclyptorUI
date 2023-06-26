import React, { forwardRef } from "react";
import { ButtonProps, StandardProps } from "./Button.types";
import clsx from 'clsx';
import useHAF from '../../../hook/useHAF';
import useProps from "../../../hook/useProps";
import '../../../tailwind.css';

const Button = forwardRef<HTMLButtonElement, ButtonProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<ButtonProps, StandardProps>(_props, ["size"]);
  const { ref, hover, active } = useHAF<HTMLButtonElement>(_ref);

  return (
    <button { ...rest } ref={ ref }>
      <div className={ clsx("w-full min-w-[80px] rounded-lg bg-foreground-mute border-2 border-primary-mute", { "bg-foreground border-primary": hover, "bg-foreground-accent border-primary-accent": active, "h-8": props.size === "sm", "h-10": !props.size || props.size === "md", "h-12": props.size === "lg" }) }>
        { React.isValidElement(rest.children) ? rest.children : <div className={ clsx("flex items-center justify-center w-full h-full text-primary-mute", { "text-primary": hover, "text-primary-accent": active }) }>{ rest.children }</div> }
      </div>
    </button>
  );
});

export default Button;