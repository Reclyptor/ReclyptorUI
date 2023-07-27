import React, { forwardRef, useEffect, useState, MouseEvent } from "react";
import { Check as CheckIcon, Minus as IndeterminateIcon } from 'lucide-react';
import { CheckboxProps, StandardProps } from "./Checkbox.types";
import clsx from 'clsx';
import useHAF from '../../../hook/useHAF';
import useProps from "../../../hook/useProps";
import '../../../tailwind.css';

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<CheckboxProps, StandardProps>(_props, ["checked", "onChange", "indeterminate", "size"]);
  const { ref, hover, active } = useHAF<HTMLButtonElement>(_ref);
  const [checked, setChecked] = useState<boolean>(!!props.checked);

  const fill = (): string => {
    if (active) {
      return 'stroke-primary-accent';
    } else if (hover) {
      return 'stroke-primary';
    } else {
      return 'stroke-primary-mute';
    }
  };

  const onClick = (ev: MouseEvent<HTMLButtonElement>): void => {
    setChecked(!checked);
    rest.onClick?.(ev);
  };

  useEffect(() => {
    if (!!props.checked !== checked) {
      setChecked(!!props.checked);
    }
  }, [props.checked]);

  useEffect(() => {
    props.onChange?.(checked);
  }, [checked]);

  return (
    <button { ...rest } ref={ ref } onClick={ onClick } className={ clsx("flex items-center justify-center rounded-sm bg-foreground-mute border-2 border-primary-mute", { "bg-foreground border-primary": hover, "bg-foreground-accent border-primary-accent": active, "cursor-pointer": !rest.disabled, "w-4 h-4": props.size === "sm", "w-[20px] h-[20px]": !props.size || props.size === "md", "w-6 h-6": props.size === "lg" }, rest.className) }>
      {
        (checked || hover) && (props.indeterminate ?
            <IndeterminateIcon size={ clsx({ [12]: props.size === "sm", [14]: !props.size || props.size === "md", [18]: props.size === "lg" }) } strokeWidth={ 4 } className={ clsx(fill(), { "opacity-40": !checked, "min-w-[12px]": props.size === "sm", "min-w-[14px]": !props.size || props.size === "md", "min-w-[18px]": props.size === "lg"  }) } /> :
            <CheckIcon size={ clsx({ [12]: props.size === "sm", [14]: !props.size || props.size === "md", [18]: props.size === "lg" }) } strokeWidth={ 4 } className={ clsx(fill(), { "opacity-40": !checked, "min-w-[12px]": props.size === "sm", "min-w-[14px]": !props.size || props.size === "md", "min-w-[18px]": props.size === "lg" }) } />
        )
      }
    </button>
  );
});

export default Checkbox;