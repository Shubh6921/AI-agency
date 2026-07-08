"use client";

import Link from "next/link";
import { useMagnetic } from "@/hooks/use-magnetic";

export default function CTABand() {
  const btnRef = useMagnetic(40, 0.2) as React.RefObject<HTMLDivElement>;

  return (
    <section className="w-full bg-text-primary text-canvas py-24 md:py-32 px-6 md:px-16 flex flex-col items-center text-center justify-center relative overflow-hidden select-none">
      {/* Decorative Brand Eyebrow */}
      <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-canvas/60 mb-6">
        ✦ Ready to Begin?
      </span>

      {/* Massive Bold Headline */}
      <h2 className="font-display text-4xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1] mb-12">
        Let&apos;s build what&apos;s next. Together.
      </h2>

      {/* Magnetic Black Pill Button */}
      <div ref={btnRef}>
        <Link
          href="/contact"
          className="inline-flex h-14 items-center justify-center rounded-full bg-canvas px-10 text-sm font-semibold tracking-wider text-text-primary uppercase transition-colors duration-300 hover:bg-surface-raised hover:text-text-primary"
        >
          Start your project
        </Link>
      </div>

      {/* Background Graphic Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-canvas" />
        <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-canvas" />
      </div>
    </section>
  );
}
