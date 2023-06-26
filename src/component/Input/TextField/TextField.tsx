import React, { FormEvent, forwardRef, useEffect, useState } from "react";
import { TextFieldProps, StandardProps } from "./TextField.types";
import { XCircle as ClearIcon } from "lucide-react";
import { color } from "../../../util/colors";
import useProps from "../../../hook/useProps";
import clsx from "clsx";
import "../../../tailwind.css";
import useHAF from "../../../hook/useHAF";

const TextField = forwardRef<HTMLInputElement, TextFieldProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<TextFieldProps, StandardProps>(_props, ["prefix", "suffix", "type", "clearable", "className", "style"]);
  const [value, setValue] = useState<string>(String(rest.value || ''));
  const { ref } = useHAF<HTMLInputElement>(_ref);

  const onInput = (ev: FormEvent<HTMLInputElement>): void => {
    setValue((ev.target as HTMLInputElement).value || '');
    rest.onInput?.(ev);
  };

  const clear = (): void => {
    if (ref.current) {
      ref.current.value = '';
      ref.current.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
    }
  };

  useEffect(() => {
    if (rest.value !== value) {
      setValue(String(rest.value || ''));
    }
  }, [rest.value]);

  return (
    <div className={ clsx("group min-h-[32px] flex items-center justify-between bg-foreground-mute rounded-lg border-2 border-primary-mute hover:bg-foreground hover:border-primary active:bg-foreground-accent active:border-primary-accent", props.className) } style={ props.style }>
      { props.prefix }
      <input { ...rest } ref={ ref } value={ value } onInput={ onInput } type={ props.type || "text" } className="w-full h-full px-1 placeholder:text-primary-mute text-primary-mute group-hover:text-primary group-active:text-primary-accent bg-transparent outline-none" />
      { props.clearable && value && <ClearIcon onClick={ clear } size={ 16 } strokeWidth={ 2 } color={ color("primary") } className="cursor-pointer min-w-[16px] mr-1" /> }
      { props.suffix }
    </div>
  );
});

export default TextField;