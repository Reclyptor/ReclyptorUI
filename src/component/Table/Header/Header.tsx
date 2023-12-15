import React, { forwardRef } from "react";
import { HeaderProps, StandardProps } from "./Header.types";
import { clazz } from "./Header.styles";
import { twMerge } from "tailwind-merge";
import useProps from "../../../hook/useProps";
import clsx from "clsx";
import "../../../tailwind.css";

const Header = forwardRef<HTMLTableCellElement, HeaderProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<HeaderProps, StandardProps>(_props, ['variant']);

  return (
    <th { ...rest } ref={ _ref } className={ twMerge(clsx(clazz(props), rest.className)) } />
  );
});

export default Header;