import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-md bg-cream px-3 text-sm text-ink shadow-[inset_0_0_0_1px_var(--color-line)] transition-[box-shadow] duration-150 placeholder:text-muted focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_2px_var(--color-teal)] disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
