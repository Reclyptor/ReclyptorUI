import { cva } from "class-variance-authority";

export const clazz = cva("border-2 focus:outline-none rounded-lg", {
  variants: {
    solid: {
      false: null,
      true: null,
    },
    size: {
      undefined: "min-w-fit min-h-fit",
      sm: "min-w-6 h-6",
      md: "min-w-8 h-8",
      lg: "min-w-10 h-10",
    },
    variant: {
      primary: "border-primary hover:border-primary-hover active:border-primary-active focus-visible:border-primary-focus",
      secondary: "border-secondary hover:border-secondary-hover active:border-secondary-active focus-visible:border-secondary-focus",
      tertiary: "border-tertiary hover:border-tertiary-hover active:border-tertiary-active focus-visible:border-tertiary-focus"
    }
  },
  compoundVariants: [
    {
      variant: "primary",
      solid: false,
      className: "bg-surface text-primary hover:text-primary-hover active:text-primary-active focus-visible:text-primary-focus"
    },
    {
      variant: "primary",
      solid: true,
      className: "bg-primary text-surface hover:bg-primary-hover active:bg-primary-active focus-visible:bg-primary-focus"
    },
    {
      variant: "secondary",
      solid: false,
      className: "bg-surface text-secondary hover:text-secondary-hover active:text-secondary-active focus-visible:text-secondary-focus"
    },
    {
      variant: "secondary",
      solid: true,
      className: "bg-secondary text-surface hover:bg-secondary-hover active:bg-secondary-active focus-visible:bg-secondary-focus"
    },
    {
      variant: "tertiary",
      solid: false,
      className: "bg-surface text-tertiary hover:text-tertiary-hover active:text-tertiary-active focus-visible:text-tertiary-focus"
    },
    {
      variant: "tertiary",
      solid: true,
      className: "bg-tertiary text-surface hover:bg-tertiary-hover active:bg-tertiary-active focus-visible:bg-tertiary-focus"
    }
  ],
  defaultVariants: {
    solid: false,
    size: undefined,
    variant: "primary"
  }
});