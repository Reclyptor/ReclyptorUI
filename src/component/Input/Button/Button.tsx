import React, { forwardRef } from "react";
import { ButtonProps, StandardProps } from "./Button.types";
import { cva } from "class-variance-authority";
import clsx from 'clsx';
import useProps from "../../../hook/useProps";
import '../../../tailwind.css';

const classes = cva("", {
  variants: {
    size: {
      sm: ["h-8"],
      md: ["h-10"],
      lg: ["h-12"]
    }
  },
  defaultVariants: {
    size: "md"
  }
});

const Button = forwardRef<HTMLButtonElement, ButtonProps & StandardProps>((_props, ref) => {
  const { props, rest } = useProps<ButtonProps, StandardProps>(_props, ["size"]);

  return (
    <button { ...rest } ref={ ref } className={ clsx("group min-w-[80px] rounded-lg bg-foreground-mute border-2 border-primary-mute hover:bg-foreground hover:border-primary active:bg-foreground-accent active:border-primary-accent", classes({ size: props.size }), rest.className) }>
      { React.isValidElement(rest.children) ? rest.children : <div className="flex items-center justify-center w-full h-full text-primary-mute group-hover:text-primary group-active:text-primary-accent">{ rest.children }</div> }
    </button>
  );
});

export default Button;