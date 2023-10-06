import React, { forwardRef } from "react";
import { CardProps, StandardProps } from "./Card.types";
import { clazz } from "./Card.styles";
import useProps from "../../hook/useProps";
import clsx from "clsx";
import "../../tailwind.css";

const Card = forwardRef<HTMLDivElement, CardProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<CardProps, StandardProps>(_props, []);

  return (
    <div { ...rest } ref={ _ref } className={ clsx(clazz(props), rest.className) }>
      { React.isValidElement(rest.children) ? rest.children : <div className="flex items-center justify-center w-full h-full">{ rest.children }</div> }
    </div>
  );
});

export default Card;