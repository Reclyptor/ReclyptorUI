import { cva } from "class-variance-authority";

export const clazz = cva("w-full bg-surface rounded-lg overflow-hidden", {
  variants: {
    size: {
      undefined: "h-6",
      sm: "h-4",
      md: "h-6",
      lg: "h-8"
    }
  },
  defaultVariants: {
  }
});

export const bar = cva("h-[inherit] rounded-[inherit]", {
  variants: {
    mounted: {
      false: null,
      true: null
    },
    indeterminate: {
      false: null,
      true: "animate-[loader_1s_linear_infinite]"
    },
    variant: {
      primary: "bg-primary",
      secondary: "bg-secondary",
      tertiary: "bg-tertiary",
    }
  },
  compoundVariants: [
    {
      mounted: true,
      indeterminate: false,
      className: "transition-[width] ease-linear"
    }
  ],
  defaultVariants: {
    mounted: false,
    indeterminate: false,
    variant: "primary"
  }
})