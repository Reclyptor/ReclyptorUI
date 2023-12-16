import { cva } from "class-variance-authority";

export const clazz = cva("", {
  variants: {
    highlight: {
      true: "hover:[&>tr>th]:!bg-surface",
    },
    border: {
      true: [
        "[&>tr>th]:!border-b-0 [&>tr:last-child>th]:!border-b-2",
        "[&>tr>th]:!border-r-2 [&>tr>th:last-child]:!border-r-0"
      ],
      horizontal: "[&>tr>th]:!border-b-0 [&>tr:last-child>th]:!border-b-2",
      vertical: "[&>tr>th]:!border-r-2 [&>tr>th:last-child]:!border-r-0"
    },
    variant: {
      primary: "[&>tr>th]:!text-primary",
      secondary: "[&>tr>th]:!text-secondary",
      tertiary: "[&>tr>th]:!text-tertiary"
    }
  },
  compoundVariants: [
    {
      variant: ["primary", "secondary", "tertiary"],
      className: "[&>tr]:!bg-background [&>tr>th]:!text-sm [&>tr>th]:!underline [&>tr>th]:!px-2 [&>tr>th]:!border-surface"
    }
  ],
  defaultVariants: {
  }
});