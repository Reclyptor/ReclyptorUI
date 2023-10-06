import { cva } from "class-variance-authority";

export const clazz = cva("relative min-w-fit min-h-fit border-2 rounded-lg", {
  variants: {
    flip: {
      false: "transition-transform [transform-style:preserve-3d] duration-500",
      true: "transition-transform [transform-style:preserve-3d] duration-500 [transform:rotateY(180deg)]"
    },
    solid: {
      false: "bg-foreground",
      true: "text-surface",
    },
    variant: {
      primary: "border-primary",
      secondary: "border-secondary",
      tertiary: "border-tertiary"
    }
  },
  compoundVariants: [
    {
      variant: "primary",
      solid: false,
      className: "text-primary"
    },
    {
      variant: "primary",
      solid: true,
      className: "bg-primary"
    },
    {
      variant: "secondary",
      solid: false,
      className: "text-secondary"
    },
    {
      variant: "secondary",
      solid: true,
      className: "bg-secondary"
    },
    {
      variant: "tertiary",
      solid: false,
      className: "text-tertiary"
    },
    {
      variant: "tertiary",
      solid: true,
      className: "bg-tertiary"
    }
  ],
  defaultVariants: {
    solid: false,
    variant: "primary"
  }
});