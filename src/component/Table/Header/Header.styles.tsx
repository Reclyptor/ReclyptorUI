import { cva } from "class-variance-authority";

export const clazz = cva("", {
  variants: {
    variant: {
      primary: "",
      secondary: "",
      tertiary: ""
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});