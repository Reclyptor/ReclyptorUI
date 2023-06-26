import React, { ChangeEvent, FormEvent, forwardRef, useState } from "react";
import clsx from 'clsx';
import useHAF from '../../../hook/useHAF';
import useProps from "../../../hook/useProps";
import { Check as CheckIcon, Minus as IndeterminateIcon } from 'lucide-react';
import { CheckboxProps, StandardProps } from "./Checkbox.types";
import { color } from '../../../util/colors';
import '../../../tailwind.css';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<CheckboxProps, StandardProps>(_props, ["indeterminate", "size", "className", "style"]);
  const { ref, hover, active } = useHAF<HTMLInputElement>();
  const [checked, setChecked] = useState<boolean>(!!rest.checked);

  const onClick = (): void => {
    setChecked(!checked);
  };

  const fill = (): string => {
    if (active) {
      return 'primary-accent';
    } else if (hover) {
      return 'primary';
    } else {
      return 'primary-mute';
    }
  };

  return (
    <div ref={ ref } onClick={ onClick } className={ clsx("flex items-center justify-center rounded-sm bg-foreground-mute border-2 border-primary-mute", { "bg-foreground border-primary": hover, "bg-foreground-accent border-primary-accent": active, "cursor-pointer": !rest.disabled, "w-4 h-4": props.size === "sm", "w-5 h-5": !props.size || props.size === "md", "w-6 h-6": props.size === "lg" }, props.className) } style={ props.style }>
      <input { ...rest } ref={ _ref } type="checkbox" className="hidden" checked={ checked } />
      {
        (checked || hover) && (props.indeterminate ?
          <IndeterminateIcon size={ clsx({ [12]: props.size === "sm", [14]: !props.size || props.size === "md", [18]: props.size === "lg" }) } strokeWidth={ 4 } color={ color(fill()) } className={ clsx("min-w-3", { "opacity-40": !checked }) } /> :
          <CheckIcon size={ clsx({ [12]: props.size === "sm", [14]: !props.size || props.size === "md", [18]: props.size === "lg" }) } strokeWidth={ 4 } color={ color(fill()) } className={ clsx("min-w-3", { "opacity-40": !checked }) } />
        )
      }
    </div>
  );
});

export default Checkbox;