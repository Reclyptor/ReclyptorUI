import React, { forwardRef } from "react";
import { TextFieldProps, StandardProps } from "./TextField.types";
import useProps from "../../../hook/useProps";
import clsx from "clsx";
import "../../../tailwind.css";

const TextField = forwardRef<HTMLInputElement, TextFieldProps & StandardProps>((_props, ref) => {
  const { props, rest } = useProps<TextFieldProps, StandardProps>(_props, ["prefix", "suffix", "className", "style"]);

  return (
    <div className={ clsx("group min-h-[32px] flex items-center justify-between bg-foreground-mute rounded-lg border-2 border-primary-mute hover:bg-foreground hover:border-primary active:bg-foreground-accent active:border-primary-accent", props.className) } style={ props.style }>
      { props.prefix }
      <input { ...rest } ref={ ref } className="w-full h-full px-1 placeholder:text-primary-mute text-primary-mute group-hover:text-primary group-active:text-primary-accent bg-transparent outline-none" />
      { props.suffix }
    </div>
  );
});

export default TextField;