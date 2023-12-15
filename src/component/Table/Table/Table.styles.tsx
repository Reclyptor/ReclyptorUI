import { cva } from "class-variance-authority";

export const clazz = cva("bg-background rounded-lg [border-collapse:separate] [border-spacing:0] overflow-hidden", {
  variants: {
    highlight: {
      true: [
        "hover:[&>thead>tr>th]:bg-surface",
        "hover:[&>tbody>tr]:bg-surface"
      ]
    },
    border: {
      true: [
        "[&>thead>tr>th]:border-b-0 [&>thead>tr:last-child>th]:border-b-2",
        "[&>tbody>tr>td]:border-b-2 [&>tbody>tr:last-child>td]:border-b-0",
        "[&>thead>tr>th]:border-r-2 [&>thead>tr>th:last-child]:border-r-0",
        "[&>tbody>tr>td]:border-r-2 [&>tbody>tr>td:last-child]:border-r-0"
      ],
      horizontal: [
        "[&>thead>tr>th]:border-b-0 [&>thead>tr:last-child>th]:border-b-2",
        "[&>tbody>tr>td]:border-b-2 [&>tbody>tr:last-child>td]:border-b-0"
      ],
      vertical: [
        "[&>thead>tr>th]:border-r-2 [&>thead>tr>th:last-child]:border-r-0",
        "[&>tbody>tr>td]:border-r-2 [&>tbody>tr>td:last-child]:border-r-0"
      ],
    },
    variant: {
      primary: [
        "border-primary",
        "[&>thead>tr>th]:text-primary",
        "[&>tbody>tr>td]:text-primary"
      ],
      secondary: [
        "border-secondary",
        "[&>thead>tr>th]:text-secondary",
        "[&>tbody>tr>td]:text-secondary"
      ],
      tertiary: [
        "border-tertiary",
        "[&>thead>tr>th]:text-tertiary",
        "[&>tbody>tr>td]:text-tertiary"
      ]
    }
  },
  compoundVariants: [
    {
      variant: ["primary", "secondary", "tertiary"],
      className: [
        "border-2",
        "[&>thead>tr]:bg-background [&>thead>tr>th]:text-sm [&>thead>tr>th]:underline [&>thead>tr>th]:px-2 [&>thead>tr>th]:border-surface",
        "[&>tbody>tr]:bg-foreground [&>tbody>tr>td]:text-xs [&>tbody>tr>td]:px-2 [&>tbody>tr>td]:border-surface"
      ]
    }
  ],
  defaultVariants: {
    variant: "primary"
  }
});