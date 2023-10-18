import React, { forwardRef, useEffect, useRef } from "react";
import { ProgressProps, StandardProps } from "./Progress.types";
import { clazz, bar } from "./Progress.styles";
import { twMerge } from "tailwind-merge";
import useProps from "../../hook/useProps";
import clsx from "clsx";
import "../../tailwind.css";

const Progress = forwardRef<HTMLDivElement, ProgressProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<ProgressProps, StandardProps>(_props, ["value", "indeterminate", "size", "variant"]);
  const width = props.indeterminate ? undefined : `${ Math.max(0, Math.min(props.value || 0, 100)) }%`;
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    if (Object.keys(props).length) {
      mounted.current = true;
    }
    return () => {
      mounted.current = false;
    };
  }, [props]);

  return (
    <div { ...rest } ref={ _ref } className={ twMerge(clsx(clazz(props), rest.className)) }>
      <div className={ bar({ ...props, mounted: mounted.current }) } style={{ width }} />
    </div>
  );
});

export default Progress;