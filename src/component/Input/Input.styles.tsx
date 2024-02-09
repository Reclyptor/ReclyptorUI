import { cva } from "class-variance-authority";

export const clazz = cva("flex items-center justify-center bg-surface border-2 rounded-lg px-2", {
  variants: {
    size: {
      undefined: "min-w-fit h-fit",
      sm: "min-w-6 h-6",
      md: "min-w-8 h-8",
      lg: "min-w-10 h-10",
    },
    variant: {
      primary: "border-primary hover:border-primary-hover active:border-primary-active focus-visible:border-primary-focus focus-within:border-primary-focus hover:focus-within:border-primary-focus",
      secondary: "border-secondary hover:border-secondary-hover active:border-secondary-active focus-visible:border-secondary-focus focus-within:border-secondary-focus hover:focus-within:border-secondary-focus",
      tertiary: "border-tertiary hover:border-tertiary-hover active:border-tertiary-active focus-visible:border-tertiary-focus focus-within:border-tertiary-focus hover:focus-within:border-tertiary-focus"
    }
  },
  defaultVariants: {
    size: undefined,
    variant: "primary"
  }
});

export const clazzInput = cva("flex-grow h-[inherit] bg-transparent ring-0 outline-none", {
  variants: {
    variant: {
      primary: "text-primary placeholder:text-primary placeholder:opacity-50",
      secondary: "text-secondary placeholder:text-secondary placeholder:opacity-50",
      tertiary: "text-tertiary placeholder:text-tertiary placeholder:opacity-50"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});

export const clazzSlot = cva("flex items-center justify-center w-8 min-h-full max-h-[inherit] overflow-hidden", {
  variants: {
  },
  defaultVariants: {
  }
});

export const clazzAffix = cva("w-fit h-fit max-h-[inherit] mx-1", {
  variants: {
    variant: {
      primary: "text-primary placeholder:text-primary",
      secondary: "text-secondary placeholder:text-secondary",
      tertiary: "text-tertiary placeholder:text-tertiary",
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});
