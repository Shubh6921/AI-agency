"use client";

import React from "react";
import Link from "next/link";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "ghost";
  magnetic?: boolean;
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "solid",
  magnetic = false,
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const magneticRef = useMagnetic(40, 0.2);

  const baseStyles = "inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 select-none";
  const variantStyles =
    variant === "solid"
      ? "bg-text-primary text-canvas hover:bg-text-secondary"
      : "border border-hairline bg-transparent text-text-primary hover:bg-surface-raised";

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
    </span>
  );

  if (href) {
    if (magnetic) {
      return (
        <div ref={magneticRef as React.RefObject<HTMLDivElement>}>
          <Link href={href} className={cn(baseStyles, variantStyles, className)}>
            {content}
          </Link>
        </div>
      );
    }
    return (
      <Link href={href} className={cn(baseStyles, variantStyles, className)}>
        {content}
      </Link>
    );
  }

  if (magnetic) {
    return (
      <div ref={magneticRef as React.RefObject<HTMLDivElement>}>
        <button className={cn(baseStyles, variantStyles, className)} {...props}>
          {content}
        </button>
      </div>
    );
  }

  return (
    <button className={cn(baseStyles, variantStyles, className)} {...props}>
      {content}
    </button>
  );
}
