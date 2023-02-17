import React, { useState } from 'react';
import { Check as CheckIcon, Minus as IndeterminateIcon } from 'lucide-react';
import { CheckboxProps } from './Checkbox.types';
import { color } from '../../../util/colors';
import useHAF from '../../../hook/useHAF';
import clsx from 'clsx';
import '../../../tailwind.css';

const Checkbox = (props: CheckboxProps) => {
  const { ref, hover, active } = useHAF<HTMLButtonElement>();
  const [checked, setChecked] = useState<boolean>(!!props.checked);

  const onClick = (): void => {
    setChecked(!checked);
    props.onChange?.(!checked);
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
    <button ref={ ref } onClick={ onClick } className={ props.className }>
      <div className={ clsx("w-4 h-4 rounded-sm bg-foreground-mute border-2 border-primary-mute", { "bg-foreground border-primary": hover, "bg-foreground-accent border-primary-accent": active }) }>
        { (checked || hover) && (
          props.indeterminate ?
            <IndeterminateIcon size={ 12 } strokeWidth={ 4 } color={ color(fill()) } className={ clsx("min-w-3", { "opacity-40": !checked }) } /> :
            <CheckIcon size={ 12 } strokeWidth={ 4 } color={ color(fill()) } className={ clsx("min-w-3", { "opacity-40": !checked }) } />
          )
        }
      </div>
    </button>
  );
};

export default Checkbox;