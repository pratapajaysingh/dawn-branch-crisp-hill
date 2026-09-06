import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full rounded-lg bg-cream px-3 py-2.5 text-sm text-ink shadow-[inset_0_0_0_1px_var(--color-line)] transition-[box-shadow] duration-150 placeholder:text-muted focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_2px_var(--color-teal)] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
