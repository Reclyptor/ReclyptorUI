import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { SpinnerProps, StandardProps } from "./Spinner.types";
import { clazz } from "./Spinner.styles";
import { twMerge } from "tailwind-merge";
import useProps from "../../hook/useProps";
import clsx from "clsx";
import "../../tailwind.css";

const Spinner = forwardRef<HTMLDivElement, SpinnerProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<SpinnerProps, StandardProps>(_props, ["value", "indeterminate", "radius", "variant"]);
  const [width, setWidth] = useState<string>();
  const [height, setHeight] = useState<string>();
  const ref = useRef<HTMLDivElement>(null);
  const reverse = useRef<boolean>(false);
  const [val, setVal] = useState<number>(30);

  useImperativeHandle(_ref, () => ref.current as HTMLDivElement);

  const padding = useMemo(() => {
    return `calc(${ ref.current?.offsetWidth || 0 }px / ${ 2 * Math.PI })`;
  }, [width, ref.current?.offsetWidth]);

  const background = useMemo(() => {
    const variant = props.variant || 'primary';
    const percentage = props.indeterminate ? val : Math.max(0, Math.min(100, props.value || 0));
    return `conic-gradient(var(--color-${ variant }) 0, var(--color-${ variant }) ${ percentage }%, transparent ${ percentage }%, transparent)`;
  }, [props.value, props.variant, props.indeterminate, val]);

  const resize = useCallback(() => {
    setHeight(`${ ref.current?.offsetWidth || 0 }px`);
  }, [width, ref.current?.offsetWidth]);

  useEffect(() => {
    window.addEventListener('load', resize);
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('load', resize);
      window.removeEventListener('resize', resize);
    }
  }, [resize])

  useEffect(resize, [resize]);

  useEffect(() => {
    setWidth(props.radius ? `${ 2 * Math.abs(props.radius) }px` : '100%');
  }, [props.radius]);

  useEffect(() => {
    setVal(30);
    if (props.indeterminate) {
      const interval = setInterval(() => {
        setVal((v) => {
          const nv = reverse.current ? v-1 : v+1;
          if (nv === 0 || nv === 90) {
            reverse.current = !reverse.current;
          }
          return nv;
        });
      }, 20);
      return () => {
        clearInterval(interval);
      };
    }
  }, [props.indeterminate]);

  // bg-primary bg-[linear-gradient(140deg,_rgb(54,_36,_31)_0%,_rgb(121,_56,_100)_50%,_rgb(106,_117,_25)_75%)]
  return (
    <div { ...rest } ref={ ref } className={ twMerge(clsx(clazz(props), rest.className)) } style={{ width, height, background, padding, WebkitMaskImage: `radial-gradient(farthest-side, transparent calc(100% - (${ padding })), #fff 0)` }}>
      { React.isValidElement(rest.children) ? rest.children : <div className="flex items-center justify-center w-full h-full">{ rest.children }</div> }
    </div>
  );
});

export default Spinner;