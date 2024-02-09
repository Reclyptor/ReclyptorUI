import React, { forwardRef, useRef } from "react";
import { InputProps, StandardProps } from "./Input.types";
import { clazz } from "./Input.styles";
import { twMerge } from "tailwind-merge";
import useProps from "../../hook/useProps";
import clsx from "clsx";
import "../../tailwind.css";

const Input = forwardRef<HTMLInputElement, InputProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<InputProps, StandardProps>(_props, []);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div { ...rest } ref={ ref } className={ twMerge(clsx(clazz(props), rest.className)) }>
      <div className="w-8 h-8"></div>
      <div className="w-fit h-fit"></div>
      <input { ...rest } ref={ _ref } className="w-full h-full bg-transparent"/>
      <div className="w-fit h-fit"></div>
      <div className="w-8 h-8"></div>
    </div>
  );
});

export default Input;