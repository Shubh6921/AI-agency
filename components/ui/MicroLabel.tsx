import React from "react";
import { cn } from "@/lib/utils";

interface MicroLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export default function MicroLabel({ children, className, ...props }: MicroLabelProps) {
  return (
    <span
      className={cn(
        "font-sans text-xs font-semibold uppercase tracking-[0.2em] text-text-tertiary flex items-center gap-2 select-none",
        className
      )}
      {...props}
    >
      <span className="text-text-primary">✦</span> {children}
    </span>
  );
}
