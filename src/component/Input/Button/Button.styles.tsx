import { cva } from "class-variance-authority";

export const clazz = cva(null, {
  variants: {
    size: {
      sm: ["!min-w-[32px]", "!h-8"],
      md: ["!min-w-[40px]", "!h-10"],
      lg: ["!min-w-[48px]", "!h-12"],
    }
  },
  defaultVariants: {
  }
});