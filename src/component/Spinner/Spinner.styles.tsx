import { cva } from "class-variance-authority";

export const clazz = cva("rounded-full", {
  variants: {
    indeterminate: {
      true: "animate-[spin_1s_linear_infinite,pulse_2s_linear_infinite]"
    }
  },
  defaultVariants: {
  }
});