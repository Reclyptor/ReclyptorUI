import React, { useState } from 'react';
import { Check as ToggledIcon, X as NotToggledIcon } from 'lucide-react';
import { ToggleProps } from './Toggle.types';
import { color } from '../../../util/colors';
import clsx from 'clsx';
import '../../../tailwind.css';

const Toggle = (props: ToggleProps) => {
  const [toggled, setToggled] = useState<boolean>(!!props.toggled);

  const onClick = (): void => {
    setToggled(!toggled);
    props.onChange?.(!toggled);
  };

  return (
    <div className={ props.className }>
      <div className="flex items-center w-8 h-2 rounded-lg bg-foreground">
        <button onClick={ onClick } className={ clsx("flex items-center justify-center w-4 h-4 rounded-full bg-foreground-mute cursor-pointer transition ease-in-out duration-300 hover:outline hover:outline-none hover:outline-2 hover:outline-primary", { "translate-x-full bg-primary": toggled }) }>
          { toggled ?
            <ToggledIcon size={ 12 } strokeWidth={ 4 } color={ color('foreground-mute') } className="min-w-3" /> :
            <NotToggledIcon size={ 12 } strokeWidth={ 4 } color={ color('primary') } className="min-w-3" />
          }
        </button>
      </div>
    </div>
  );
};

export default Toggle;