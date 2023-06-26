import React, { CSSProperties, ReactNode, forwardRef } from "react";

type TextFieldProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const TextField = forwardRef<HTMLDivElement, TextFieldProps>((props, ref) => {
  return (
    <div ref={ ref } className={ props.className } style={ props.style }>
      { props.children }
    </div>
  );
});

export default TextField;