import React, { forwardRef } from "react";
import { CardProps, StandardProps } from "./Card.types";
import { clazz } from "./Card.styles";
import useProps from "../../hook/useProps";
import clsx from "clsx";
import "../../tailwind.css";
import { twMerge } from "tailwind-merge";

const Card = forwardRef<HTMLDivElement, CardProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<CardProps, StandardProps>(_props, ["flip", "solid", "front", "back", "variant"]);

  return (
    <div { ...rest } ref={ _ref } className={ twMerge(clsx(clazz(props), rest.className)) }>
      { rest.children ?
        <div className="flex items-center justify-center w-full h-full bg-[inherit] rounded-[inherit] [backface-visibility:hidden]">{ rest.children }</div> :
        <>
          <div className="absolute flex items-center justify-center w-full h-full bg-[inherit] rounded-[inherit] [backface-visibility:hidden]">{ props.front }</div>
          <div className="absolute flex items-center justify-center w-full h-full bg-[inherit] rounded-[inherit] [backface-visibility:hidden] [transform:rotateY(180deg)]">{ props.back }</div>
        </>
      }
    </div>
  );
});

export default Card;