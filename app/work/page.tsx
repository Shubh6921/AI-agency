"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MicroLabel from "@/components/ui/MicroLabel";
import { projectsData } from "@/lib/projects-data";

gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade reveal cards
      gsap.utils.toArray(".work-card").forEach((card: unknown) => {
        const el = card as HTMLElement;
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-canvas text-text-primary px-6 md:px-16 py-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* HERO SECTION */}
        <section className="mb-24 space-y-6">
          <MicroLabel>Our Portfolio</MicroLabel>
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tight leading-[1.1]">
            Our Work
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed font-sans">
            A curated grid of digital systems, custom AI tools, and premium websites built to operate at the edge of possibility.
          </p>
        </section>

        {/* PROJECTS GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {projectsData.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              data-cursor="VIEW"
              className="work-card group flex flex-col gap-6"
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-hairline bg-surface-base">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 pointer-events-none"
                />
              </div>

              {/* Text Info */}
              <div className="flex justify-between items-start pt-2">
                <div className="space-y-1">
                  <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight text-text-primary">
                    {project.title}
                  </h3>
                  <p className="text-xs text-text-tertiary uppercase tracking-wider font-semibold">
                    ✦ {project.industry}
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-display text-3xl font-black text-text-primary block">
                    {project.outcomeMetric}
                  </span>
                  <span className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider block">
                    {project.outcomeDesc.split(" ")[0]} {project.outcomeDesc.split(" ")[1] || "Outcome"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>

      </div>
    </div>
  );
}
