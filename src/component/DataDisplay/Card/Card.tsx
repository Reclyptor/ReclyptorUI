import React, { forwardRef } from "react";
import { CardProps } from "./Card.types";
import "../../../tailwind.css";

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  return (
    <div ref={ ref } className={ props.className } style={ props.style }>
      <div className="w-full h-full bg-foreground rounded-[28px] border-2 border-primary-mute">
        { props.children }
      </div>
    </div>
  );
});

export default Card;