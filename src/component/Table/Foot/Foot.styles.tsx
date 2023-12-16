import { cva } from "class-variance-authority";

export const clazz = cva("", {
  variants: {
    highlight: {
      true: "hover:[&>tr]:!bg-surface",
    },
    border: {
      true: [
        "[&>tr>td]:!border-b-2 [&>tr:last-child>td]:!border-b-0",
        "[&>tr>td]:!border-r-2 [&>tr>td:last-child]:!border-r-0"
      ],
      horizontal: "[&>tr>td]:!border-b-2 [&>tr:last-child>td]:!border-b-0",
      vertical: "[&>tr>td]:!border-r-2 [&>tr>td:last-child]:!border-r-0"
    },
    variant: {
      primary: "[&>tr>td]:!text-primary",
      secondary: "[&>tr>td]:!text-secondary",
      tertiary: "[&>tr>td]:!text-tertiary"
    }
  },
  compoundVariants: [
    {
      variant: ["primary", "secondary", "tertiary"],
      className: "[&>tr]:!bg-foreground [&>tr>td]:!text-xs [&>tr>td]:!px-2 [&>tr>td]:!border-surface"
    }
  ],
  defaultVariants: {
  }
});