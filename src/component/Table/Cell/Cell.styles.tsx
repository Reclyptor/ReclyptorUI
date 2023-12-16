import { cva } from "class-variance-authority";

export const clazz = cva("", {
  variants: {
    highlight: {
      true: "hover:!bg-surface"
    },
    border: {
      true: [
        "!border-b-2",
        "!border-r-2"
      ],
      horizontal: "!border-b-2",
      vertical: "!border-r-2"
    },
    variant: {
      primary: "!text-primary",
      secondary: "!text-secondary",
      tertiary: "!text-tertiary"
    }
  },
  compoundVariants: [
    {
      variant: ["primary", "secondary", "tertiary"],
      className: "!bg-foreground !text-xs !px-2 !border-surface"
    }
  ],
  defaultVariants: {
  }
});