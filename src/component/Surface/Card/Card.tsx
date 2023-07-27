import React, { forwardRef } from "react";
import { CardProps } from "./Card.types";
import "../../../tailwind.css";
import clsx from "clsx";

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  return (
    <div ref={ ref } className={ clsx("bg-foreground rounded-[28px] border-2 border-primary-mute", props.className) } style={ props.style }>
      { props.children }
    </div>
  );
});

export default Card;