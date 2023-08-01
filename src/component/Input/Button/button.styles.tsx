import { CSSProperties } from "react";
import { State } from "../../../hook/useHAF";
import { Theme } from "../../../style/ThemeProvider/ThemeProvider.types";
import { cva } from "class-variance-authority";

export const buttonClass = cva("group min-w-[80px] rounded-lg border-2", {
  variants: {
    size: {
      sm: ["h-8"],
      md: ["h-10"],
      lg: ["h-12"]
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const buttonStyle = (theme: Theme, state: State, style?: CSSProperties) => ({
  background: style?.background ||
  state === 'hover' ? theme.foreground :
    state === 'active' ? theme.foregroundAccent :
      theme.foregroundMute,
  borderColor: style?.borderColor ||
  state === 'hover' ? theme.primary :
    state === 'active' ? theme.primaryAccent :
      theme.primaryMute,
});

export const divStyle = (theme: Theme, state: State, style?: CSSProperties) => ({
  color: style?.color ||
  state === 'hover' ? theme.primary :
    state === 'active' ? theme.primaryAccent :
      theme.primaryMute,
});
