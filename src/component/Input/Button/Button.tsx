import React from 'react';
import { ButtonProps } from './Button.types';
import useHAF from '../../../hook/useHAF';
import clsx from 'clsx';
import '../../../tailwind.css';

const Button = (props: ButtonProps) => {
  const { ref, hover, active } = useHAF<HTMLButtonElement>();

  return (
    <button ref={ ref } onClick={ props.onClick } className={ props.className }>
      <div className={ clsx("w-full min-w-[80px] rounded-lg bg-foreground-mute border-2 border-primary-mute", { "bg-foreground border-primary": hover, "bg-foreground-accent border-primary-accent": active }) }>
        { React.isValidElement(props.children) ? props.children : <span className={ clsx("text-primary-mute", { "text-primary": hover, "text-primary-accent": active }) }>{ props.children }</span> }
      </div>
    </button>
  );
};

export default Button;