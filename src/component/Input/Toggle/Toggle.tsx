import React, { useEffect, useState, MouseEvent, forwardRef } from "react";
import { Check as ToggledIcon, X as NotToggledIcon } from 'lucide-react';
import { StandardProps, ToggleProps } from "./Toggle.types";
import { color } from '../../../util/colors';
import clsx from 'clsx';
import useProps from "../../../hook/useProps";
import '../../../tailwind.css';

const Toggle = forwardRef<HTMLButtonElement, ToggleProps>((_props, ref) => {
  const { props, rest } = useProps<ToggleProps, StandardProps>(_props, ["toggled", "onChange", "size", "className", "style"]);
  const [toggled, setToggled] = useState<boolean>(!!props.toggled);

  const onClick = (ev: MouseEvent<HTMLButtonElement>): void => {
    setToggled(!toggled);
    rest.onClick?.(ev);
  };

  useEffect(() => {
    if (!!props.toggled !== toggled) {
      setToggled(!!props.toggled);
    }
  }, [props.toggled]);

  useEffect(() => {
    props.onChange?.(toggled);
  }, [toggled]);

  return (
    <div className={ props.className } style={ props.style }>
      <div className={ clsx("flex items-center rounded-lg bg-foreground", { "w-8 h-2": props.size === "sm", "w-10 h-[10px]": !props.size || props.size === "md", "w-12 h-[12px]": props.size === "lg" }) }>
        <button { ...rest } ref={ ref } onClick={ onClick } className={ clsx("flex items-center justify-center rounded-full bg-foreground-mute cursor-pointer transition ease-in-out duration-300 hover:border-2 hover:border-primary", { "translate-x-full bg-primary": toggled, "w-[18px] h-[18px]": props.size === "sm", "w-[21px] h-[21px]": !props.size || props.size === "md", "w-6 h-6": props.size === "lg" }) }>
          { toggled ?
            <ToggledIcon size={ clsx({ [12]: props.size === "sm", [15]: !props.size || props.size === "md", [16]: props.size === "lg" }) } strokeWidth={ 4 } color={ color('foreground-mute') } className={ clsx({ "min-w-[18px]": props.size === "sm", "min-w-[21px]": !props.size || props.size === "md", "min-w-6": props.size === "lg" }) } /> :
            <NotToggledIcon size={ clsx({ [12]: props.size === "sm", [15]: !props.size || props.size === "md", [16]: props.size === "lg" }) } strokeWidth={ 4 } color={ color('primary') } className={ clsx({ "min-w-[18px]": props.size === "sm", "min-w-[21px]": !props.size || props.size === "md", "min-w-6": props.size === "lg" }) } />
          }
        </button>
      </div>
    </div>
  );
});

export default Toggle;