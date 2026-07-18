"use client";

import { useLayoutEffect, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import MicroLabel from "@/components/ui/MicroLabel";
import { projectsData } from "@/lib/projects-data";
import { usePathname } from "next/navigation";
import { useSmoothScroll } from "@/components/providers/smooth-scroll";

gsap.registerPlugin(ScrollTrigger);

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function WorkPage() {
  const outerContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const lenis = useSmoothScroll();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timer = setTimeout(() => {
        if (!trackRef.current || !outerContainerRef.current || !headerRef.current) return;

        const track = trackRef.current;
        const outerContainer = outerContainerRef.current;
        const header = headerRef.current;

        ScrollTrigger.refresh();

        const scrollWidth = track.scrollWidth;
        const xVal = -(scrollWidth - window.innerWidth + (window.innerWidth > 768 ? 128 : 48));

        // Create the master timeline that pins the entire WorkPage container
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: outerContainer,
            pin: true,
            scrub: 1.0,
            start: "top top",
            end: () => `+=${scrollWidth + window.innerHeight * 1.5}`,
            invalidateOnRefresh: true,
          },
        });

        // Set initial states for elements
        // Header elements start from the left, gallery starts from the right
        gsap.set(header.querySelectorAll(".work-label"), { x: -150, opacity: 0 });
        gsap.set(header.querySelectorAll(".work-title-word"), { x: -150, opacity: 0 });
        gsap.set(header.querySelectorAll(".work-desc"), { x: -150, opacity: 0 });
        gsap.set(".gallery-container", { x: window.innerWidth > 768 ? 600 : 200, opacity: 0 });

        // Timeline Flow:
        // 1. Slide header label in from left
        tl.to(header.querySelectorAll(".work-label"), {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        });

        // 2. Slide title words in from left
        tl.to(
          header.querySelectorAll(".work-title-word"),
          {
            x: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        );

        // 3. Slide description in from left
        tl.to(
          header.querySelectorAll(".work-desc"),
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        );

        // 4. Slide gallery in from right
        tl.to(
          ".gallery-container",
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.4"
        );

        // 5. Scroll gallery horizontally
        tl.to(
          track,
          {
            x: xVal,
            ease: "none",
            duration: 3.5,
          },
          "+=0.1"
        );
      }, 300);

      return () => clearTimeout(timer);
    }, outerContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={outerContainerRef}
      className="w-full bg-transparent text-text-primary h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div ref={headerRef} className="space-y-4 mx-auto max-w-7xl w-full px-6 md:px-16 mb-8 md:mb-12">
        {/* Label */}
        <div className="work-label inline-block">
          <MicroLabel>Our Portfolio</MicroLabel>
        </div>

        {/* Split title words */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-[1.1] flex flex-wrap gap-x-[0.3em]">
          {["Our", "Work"].map((word, wIdx) => (
            <span key={wIdx} className="work-title-word inline-block will-change-transform">
              {word}
            </span>
          ))}
        </h1>

        {/* Description */}
        <p className="work-desc text-text-secondary text-sm md:text-base max-w-xl leading-relaxed font-sans">
          A curated showcase of digital platforms, custom AI integrations, and premium websites built to operate at the edge of possibility.
        </p>
      </div>

      {/* STICKY HORIZONTAL GALLERY CONTAINER */}
      <div className="gallery-container w-full overflow-hidden flex items-center will-change-transform">
        <div ref={trackRef} className="flex gap-12 md:gap-16 px-6 md:px-16 w-max">
          {projectsData.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              data-cursor="VIEW"
              className="work-card group flex flex-col gap-6 w-[80vw] md:w-[45vw] lg:w-[35vw] flex-shrink-0"
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-hairline bg-surface-base">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 80vw, 35vw"
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

          {/* Terminal Block: Link to Services */}
          <Link
            href="/services"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                const target = document.getElementById("services");
                if (target && lenis) {
                  lenis.scrollTo(target);
                }
              }
            }}
            className="flex flex-col justify-center items-center gap-6 w-[80vw] md:w-[45vw] lg:w-[35vw] flex-shrink-0 border border-dashed border-[#26C7ff]/30 rounded-2xl bg-surface-base/10 backdrop-blur-sm p-8 text-center transition-all duration-300 hover:border-[#26C7ff]/60 relative"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-[#26C7ff]">03 // NEXT PHASE</span>
            <h3 className="font-display text-2xl md:text-3xl font-extralight uppercase tracking-widest text-white max-w-xs">
              Area of Expertise
            </h3>
            <ArrowRight size={24} className="text-[#26C7ff]" />
            <span className="font-mono text-[9px] tracking-[0.25em] text-white/30 uppercase mt-4">
              CLICK TO VIEW SERVICES
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
