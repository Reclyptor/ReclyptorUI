import { CSSProperties } from "react";
import { State } from "../../../hook/useHAF";
import { Theme } from "../../../style/ThemeProvider/ThemeProvider.types";
import { cva } from "class-variance-authority";

export const clazz = cva("group min-w-[80px] min-h-[32px] rounded-lg border-2", {
  variants: {
    size: {
      sm: ["h-8"],
      md: ["h-10"],
      lg: ["h-12"],
    }
  },
  defaultVariants: {
  }
});

export const style = (theme: Theme, state: State, style?: CSSProperties) => ({
  background:
    state === 'active' ? theme.foreground.active :
      state === 'hover' ? theme.foreground.hover :
        state === 'focus' ? theme.foreground.focus :
          theme.foreground.default,
  borderColor:
    state === 'active' ? theme.primary.active :
      state === 'hover' ? theme.primary.hover :
        state === 'focus' ? theme.primary.focus :
          theme.primary.default,
  color:
    state === 'active' ? theme.primary.active :
      state === 'hover' ? theme.primary.hover :
        state === 'focus' ? theme.primary.focus :
          theme.primary.default,
  ...style
});