import React, { forwardRef, MouseEvent, useRef } from "react";
import { InputProps, StandardProps } from "./Input.types";
import { clazz, clazzAffix, clazzInput, clazzSlot } from "./Input.styles";
import { twMerge } from "tailwind-merge";
import useProps from "../../hook/useProps";
import clsx from "clsx";
import "../../tailwind.css";

const Input = forwardRef<HTMLInputElement, InputProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<InputProps, StandardProps>(_props, ["before", "prefix", "suffix", "after", "size", "variant"]);
  const ref = useRef<HTMLDivElement>(null);

  const onClick = (ev: MouseEvent<HTMLInputElement>): void => {
    ref.current?.querySelector("input")?.focus();
    rest.onClick?.(ev);
  };

  return (
    <div { ...rest } ref={ ref } onClick={ onClick } className={ twMerge(clsx(clazz(props), rest.className)) }>
      { props.before && <div className={ twMerge(clsx(clazzSlot(props))) }>{ props.before }</div> }
      { props.prefix && <div className={ twMerge(clsx(clazzAffix(props))) }>{ props.prefix }</div> }
      <input { ...rest } ref={ _ref } className={ twMerge(clsx(clazzInput(props)))} />
      { props.suffix && <div className={ twMerge(clsx(clazzAffix(props))) }>{ props.suffix }</div> }
      { props.after && <div className={ twMerge(clsx(clazzSlot(props))) }>{ props.after }</div> }
    </div>
  );
});

export default Input;