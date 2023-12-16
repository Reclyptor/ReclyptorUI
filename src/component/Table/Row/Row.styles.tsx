import { cva } from "class-variance-authority";

export const clazz = cva("", {
  variants: {
    highlight: {
      true: [
        "hover:[&>th]:!bg-surface",
        "[&>td]:hover:!bg-surface"
      ]
    },
    border: {
      true: [
        "[&>th]:!border-b-2",
        "[&>th]:!border-r-2 [&>th:last-child]:!border-r-0",
        "[&>td]:!border-b-2",
        "[&>td]:!border-r-2 [&>td:last-child]:!border-r-0"
      ],
      horizontal: [
        "[&>th]:!border-b-2",
        "[&>td]:!border-b-2",
      ],
      vertical: [
        "[&>th]:!border-r-2 [&>th:last-child]:!border-r-0",
        "[&>td]:!border-r-2 [&>td:last-child]:!border-r-0"
      ],
    },
    variant: {
      primary: [
        "[&>th]:!text-primary",
        "[&>td]:!text-primary"
      ],
      secondary: [
        "[&>th]:!text-secondary",
        "[&>td]:!text-secondary"
      ],
      tertiary: [
        "[&>th]:!text-tertiary",
        "[&>td]:!text-tertiary"
      ]
    }
  },
  compoundVariants: [
    {
      variant: ["primary", "secondary", "tertiary"],
      className: [
        "[&:has(th)]:!bg-background [&>th]:!text-sm [&>th]:!underline [&>th]:!px-2 [&>th]:!border-surface",
        "[&:has(td)]:!bg-foreground [&>td]:!text-xs [&>td]:!px-2 [&>td]:!border-surface"
      ]
    }
  ],
  defaultVariants: {
  }
});
