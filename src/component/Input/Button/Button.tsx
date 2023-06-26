import React, { forwardRef } from "react";
import { ButtonProps, StandardProps } from "./Button.types";
import clsx from 'clsx';
import useProps from "../../../hook/useProps";
import '../../../tailwind.css';

const Button = forwardRef<HTMLButtonElement, ButtonProps & StandardProps>((_props, ref) => {
  const { props, rest } = useProps<ButtonProps, StandardProps>(_props, ["size"]);

  return (
    <button { ...rest } ref={ ref }>
      <div className={ clsx("group w-full min-w-[80px] rounded-lg bg-foreground-mute border-2 border-primary-mute hover:bg-foreground hover:border-primary active:bg-foreground-accent active:border-primary-accent", { "h-8": props.size === "sm", "h-10": !props.size || props.size === "md", "h-12": props.size === "lg" }) }>
        { React.isValidElement(rest.children) ? rest.children : <div className="flex items-center justify-center w-full h-full text-primary-mute group-hover:text-primary group-active:text-primary-accent">{ rest.children }</div> }
      </div>
    </button>
  );
});

export default Button;