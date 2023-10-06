import { cva } from "class-variance-authority";

export const clazz = cva("min-w-[32px] min-h-[32px] bg-surface border-2 focus:outline-none rounded-lg", {
  variants: {
    size: {
      sm: ["!min-w-[32px]", "!h-8"],
      md: ["!min-w-[40px]", "!h-10"],
      lg: ["!min-w-[48px]", "!h-12"],
    },
    variant: {
      primary: ["text-primary hover:text-primary-hover active:text-primary-active border-primary hover:border-primary-hover active:border-primary-active focus-visible:border-primary-focus"],
      secondary: ["text-secondary hover:text-secondary-hover active:text-secondary-active border-secondary hover:border-secondary-hover active:border-secondary-active focus-visible:border-secondary-focus"],
      tertiary: ["text-tertiary hover:text-tertiary-hover active:text-tertiary-active border-tertiary hover:border-tertiary-hover active:border-tertiary-active focus-visible:border-tertiary-focus"],
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});