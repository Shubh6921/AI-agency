"use client";

import { useLayoutEffect, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronRight } from "lucide-react";
import MicroLabel from "@/components/ui/MicroLabel";
import Button from "@/components/ui/Button";
import { projectsData } from "@/lib/projects-data";
import { usePathname } from "next/navigation";
import { useSmoothScroll } from "@/components/providers/smooth-scroll";
import { useDrawer } from "@/components/providers/drawer-context";

gsap.registerPlugin(ScrollTrigger);

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function WorkPage() {
  const outerContainerRef = useRef<HTMLDivElement>(null);
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const lenis = useSmoothScroll();
  const { toggleDrawer } = useDrawer();

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const dx = x - xc;
    const dy = y - yc;
    gsap.to(card, {
      rotateY: dx / 30,
      rotateX: -dy / 30,
      ease: "power3.out",
      duration: 0.6,
    });
  };

  const handleImageMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      ease: "power3.out",
      duration: 0.8,
    });
  };


  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timer = setTimeout(() => {
        if (!outerContainerRef.current) return;

        ScrollTrigger.refresh();

        // 1. Desktop pinned ScrollTrigger (only active on desktop viewports)
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
          // Entrance Timeline (runs as section enters viewport from bottom)
          const entranceTl = gsap.timeline({
            scrollTrigger: {
              trigger: desktopContainerRef.current,
              scrub: 1.0,
              start: "top bottom",
              end: "top top",
              invalidateOnRefresh: true,
            },
          });

          // Set initial states for entrance elements (No scaling)
          gsap.set(".work-header-reveal", { y: 40, opacity: 0, filter: "blur(8px)" });
          gsap.set(".project-text-container", { y: 40, opacity: 0, filter: "blur(8px)" });
          gsap.set(".project-image-wrapper", { opacity: 0, filter: "blur(12px)" });
          gsap.set(".project-dots-container", { x: -30, opacity: 0 });
          gsap.set(".project-letstalk-reveal", { y: 20, opacity: 0 });

          // Entrance Animations (No scaling)
          entranceTl
            .to(".work-header-reveal", { y: 0, opacity: 1, filter: "blur(0px)", stagger: 0.1, duration: 1, ease: "power2.out" })
            .to(".project-text-container", { y: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power2.out" }, "-=0.7")
            .to(".project-image-wrapper", { opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }, "-=1")
            .to(".project-dots-container", { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=1")
            .to(".project-letstalk-reveal", { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.8");

          const scrollTl = gsap.timeline({
            scrollTrigger: {
              id: "desktop-work-pin",
              trigger: desktopContainerRef.current,
              pin: true,
              scrub: 1.0,
              start: "top top",
              end: () => `+=${window.innerHeight * 3.5}`,
              invalidateOnRefresh: true,
            },
          });

          // Set initial states (No scaling)
          gsap.set(".project-text-0", { opacity: 1, y: 0, filter: "blur(0px)", pointerEvents: "auto" });
          gsap.set(".project-image-0", { opacity: 1, filter: "blur(0px)", pointerEvents: "auto" });
          gsap.set(".project-metric-0", { opacity: 1, y: 0, filter: "blur(0px)" });
          gsap.set(".project-dot-0", { backgroundColor: "#26C7ff", scale: 1.5 });
          gsap.set(".project-dot-label-0", { opacity: 1 });

          gsap.set([".project-text-1", ".project-text-2", ".project-more-text"], {
            opacity: 0,
            y: 40,
            filter: "blur(8px)",
            pointerEvents: "none",
          });
          gsap.set([".project-image-1", ".project-image-2", ".project-more-visual"], {
            opacity: 0,
            filter: "blur(12px)",
            pointerEvents: "none",
          });
          gsap.set([".project-metric-1", ".project-metric-2", ".project-more-visual-overlay"], {
            opacity: 0,
            y: 30,
            filter: "blur(8px)",
          });
          gsap.set([".project-dot-1", ".project-dot-2", ".project-dot-3"], {
            backgroundColor: "#6B6B70",
            scale: 1,
          });
          gsap.set([".project-dot-label-1", ".project-dot-label-2", ".project-dot-label-3"], {
            opacity: 0,
          });

          // Transition 0 -> 1 (Time 1.0 to 2.2)
          scrollTl
            .to(".project-dot-0", { backgroundColor: "#6B6B70", scale: 1, duration: 0.5 }, 1)
            .to(".project-dot-label-0", { opacity: 0, duration: 0.5 }, 1)
            .to(".project-dot-1", { backgroundColor: "#26C7ff", scale: 1.5, duration: 0.5 }, 1.3)
            .to(".project-dot-label-1", { opacity: 1, duration: 0.5 }, 1.3)
            .to(".project-text-0", { opacity: 0, y: -30, filter: "blur(8px)", pointerEvents: "none", duration: 1 }, 1)
            .to(".project-image-0", { opacity: 0, filter: "blur(12px)", pointerEvents: "none", duration: 1 }, 1)
            .to(".project-metric-0", { opacity: 0, y: -20, filter: "blur(8px)", duration: 1 }, 1)
            .to(".project-text-1", { opacity: 1, y: 0, filter: "blur(0px)", pointerEvents: "auto", duration: 1 }, 1.3)
            .to(".project-image-1", { opacity: 1, filter: "blur(0px)", pointerEvents: "auto", duration: 1 }, 1.3)
            .to(".project-metric-1", { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 }, 1.3)

          // Transition 1 -> 2 (Time 3.0 to 4.2)
            .to(".project-dot-1", { backgroundColor: "#6B6B70", scale: 1, duration: 0.5 }, 3)
            .to(".project-dot-label-1", { opacity: 0, duration: 0.5 }, 3)
            .to(".project-dot-2", { backgroundColor: "#26C7ff", scale: 1.5, duration: 0.5 }, 3.3)
            .to(".project-dot-label-2", { opacity: 1, duration: 0.5 }, 3.3)
            .to(".project-text-1", { opacity: 0, y: -30, filter: "blur(8px)", pointerEvents: "none", duration: 1 }, 3)
            .to(".project-image-1", { opacity: 0, filter: "blur(12px)", pointerEvents: "none", duration: 1 }, 3)
            .to(".project-metric-1", { opacity: 0, y: -20, filter: "blur(8px)", duration: 1 }, 3)
            .to(".project-text-2", { opacity: 1, y: 0, filter: "blur(0px)", pointerEvents: "auto", duration: 1 }, 3.3)
            .to(".project-image-2", { opacity: 1, filter: "blur(0px)", pointerEvents: "auto", duration: 1 }, 3.3)
            .to(".project-metric-2", { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 }, 3.3)

          // Transition 2 -> 3 (Time 5.0 to 6.2)
            .to(".project-dot-2", { backgroundColor: "#6B6B70", scale: 1, duration: 0.5 }, 5)
            .to(".project-dot-label-2", { opacity: 0, duration: 0.5 }, 5)
            .to(".project-dot-3", { backgroundColor: "#26C7ff", scale: 1.5, duration: 0.5 }, 5.3)
            .to(".project-dot-label-3", { opacity: 1, duration: 0.5 }, 5.3)
            .to(".project-text-2", { opacity: 0, y: -30, filter: "blur(8px)", pointerEvents: "none", duration: 1 }, 5)
            .to(".project-image-2", { opacity: 0, filter: "blur(12px)", pointerEvents: "none", duration: 1 }, 5)
            .to(".project-metric-2", { opacity: 0, y: -20, filter: "blur(8px)", duration: 1 }, 5)
            .to(".project-more-text", { opacity: 1, y: 0, filter: "blur(0px)", pointerEvents: "auto", duration: 1 }, 5.3)
            .to(".project-more-visual", { opacity: 1, filter: "blur(0px)", pointerEvents: "auto", duration: 1 }, 5.3)
            .to(".project-more-visual-overlay", { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 }, 5.3);
        });

        // 2. Mobile/Tablet reveal-on-scroll animations
        mm.add("(max-width: 1023px)", () => {
          gsap.utils.toArray(".reveal-up-mobile").forEach((card: unknown) => {
            const el = card as HTMLElement;
            gsap.fromTo(
              el,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              }
            );
          });
        });
      }, 300);

      return () => clearTimeout(timer);
    }, outerContainerRef);

    return () => ctx.revert();
  }, [lenis]);

  return (
    <div ref={outerContainerRef} className="w-full bg-transparent text-text-primary relative">
      
      {/* ========================================================================= */}
      {/* DESKTOP SPLIT-SCREEN WORK SHOWCASE */}
      {/* ========================================================================= */}
      <div 
        ref={desktopContainerRef} 
        className="hidden lg:flex w-full h-screen flex-col items-center justify-between py-12 relative overflow-hidden bg-canvas animate-grain"
        style={{ perspective: 1500 }}
      >
        
        {/* Left Side: Navigation HUD Dots */}
        <div className="project-dots-container absolute left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 z-20 pointer-events-auto select-none">
          {[0, 1, 2, 3].map((val) => (
            <button 
              key={val} 
              className="flex items-center gap-4 group cursor-pointer text-left focus:outline-none" 
              onClick={() => {
                if (lenis && desktopContainerRef.current) {
                  const trigger = ScrollTrigger.getById("desktop-work-pin");
                  if (trigger) {
                    const start = trigger.start;
                    const end = trigger.end;
                    const totalDist = end - start;
                    const targetScroll = start + (val / 3) * totalDist + 50; 
                    lenis.scrollTo(targetScroll);
                  }
                }
              }}
            >
              <div className={`project-dot-${val} w-2 h-2 rounded-full transition-all duration-500`} style={{ backgroundColor: "#6B6B70" }} />
              <span className={`project-dot-label-${val} font-mono text-[9px] tracking-[0.25em] text-[#26C7ff] transition-all duration-500`}>
                {val === 3 ? "MORE" : `0${val + 1}`}
              </span>
            </button>
          ))}
        </div>

        {/* Centered Top Header: Our Work */}
        <div className="work-header-reveal text-center space-y-1.5 z-20 relative select-none">
          <MicroLabel>Our Portfolio</MicroLabel>
          <h2 className="font-display text-2xl lg:text-3xl font-extralight uppercase tracking-widest text-white leading-none">
            Our Work
          </h2>
        </div>

        {/* Balanced Grid (col-span-6 / col-span-6, gap-10, px-8, aligned at pt-[56px] to match centered console top) */}
        <div className="grid grid-cols-12 gap-10 items-stretch flex-grow w-full max-w-[92vw] mx-auto px-8 relative z-10">
          
          {/* Left Column: Description + Active Project Details */}
          <div className="col-span-6 flex flex-col justify-start pt-24 pb-10 border-r border-white/5 pr-4 pl-12 relative h-full">
            
            {/* Bottom Block: Transitioning Project Text (Aligned horizontally with preview top) */}
            <div className="project-text-container relative flex-grow min-h-[250px]">
              
              {/* Project Details Elements */}
              {projectsData.map((project, idx) => (
                <div
                  key={project.slug}
                  className={`project-text-${idx} absolute inset-0 flex flex-col justify-end pb-12 space-y-6 pointer-events-none opacity-0 select-none`}
                  style={{ zIndex: 10 - idx }}
                >
                  {/* Huge background index outline */}
                  <span className="font-display text-[150px] font-black text-white/[0.015] absolute -top-16 -left-12 select-none pointer-events-none block leading-none">
                    0{idx + 1}
                  </span>

                  <div className="space-y-2 relative z-10">
                    <span className="font-mono text-[9px] text-[#26C7ff] uppercase tracking-[0.25em] block">
                      SYSTEM // 0{idx + 1} &middot; SELECTED WORK
                    </span>
                    <h3 className="font-display text-4xl font-bold uppercase tracking-tight text-text-primary leading-none">
                      {project.title}
                    </h3>
                    <p className="text-[10px] text-text-tertiary uppercase tracking-[0.2em] font-semibold flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-text-tertiary rounded-full inline-block animate-pulse" /> {project.industry}
                    </p>
                  </div>
                  
                  <p className="text-text-secondary text-sm leading-relaxed max-w-lg font-sans pointer-events-auto relative z-10">
                    {project.challenge}
                  </p>

                  {/* Blueprint Technical Specifications Grid */}
                  <div className="grid grid-cols-2 gap-4 border-t border-b border-white/5 py-4 max-w-lg text-[11px] font-mono text-text-secondary relative z-10">
                    <div className="space-y-1">
                      <span className="text-[9px] text-text-tertiary uppercase tracking-wider block">✦ Focus Areas</span>
                      <p className="font-sans text-[11px] text-white font-light">{project.services.slice(0, 2).join(" · ")}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] text-text-tertiary uppercase tracking-wider block">✦ System Stack</span>
                      <p className="font-sans text-[11px] text-white font-light">{project.techStack.slice(0, 3).join(" · ")}</p>
                    </div>
                  </div>

                  <div className="pt-2 pointer-events-auto relative z-10">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#26C7ff] hover:text-white transition-colors duration-300 group"
                    >
                      Explore Case Study
                      <ChevronRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              ))}

              {/* State 3: See More Text */}
              <div
                className="project-more-text absolute inset-0 flex flex-col justify-end pb-12 space-y-6 pointer-events-none opacity-0 select-none"
                style={{ zIndex: 1 }}
              >
                <span className="font-display text-[150px] font-black text-white/[0.015] absolute -top-16 -left-12 select-none pointer-events-none block leading-none">
                  04
                </span>

                <div className="space-y-2 relative z-10">
                  <span className="font-mono text-[9px] text-[#26C7ff] uppercase tracking-[0.25em] block">
                    CAPABILITY // 04 &middot; AREA OF EXPERTISE
                  </span>
                  <h3 className="font-display text-4xl font-bold uppercase tracking-tight text-text-primary leading-none">
                    MORE EXPERTISE
                  </h3>
                  <p className="text-[10px] text-text-tertiary uppercase tracking-[0.2em] font-semibold flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-text-tertiary rounded-full inline-block animate-pulse" /> CORE CAPABILITIES
                  </p>
                </div>
                
                <p className="text-text-secondary text-sm leading-relaxed max-w-md font-sans pointer-events-auto relative z-10">
                  Discover our comprehensive suite of services, intelligent agentic automations, and advanced web infrastructures.
                </p>

                <div className="pt-4 pointer-events-auto relative z-10">
                  <Button
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
                    variant="solid"
                    className="h-10 text-[10px] tracking-[0.2em] font-semibold"
                    magnetic
                  >
                    View Expertise
                  </Button>
                </div>
              </div>

            </div>

            {/* Fixed Bottom Block: Start your project button (Separated by line) */}
            <div className="project-letstalk-reveal pt-6 border-t border-white/5 mt-auto relative z-10">
              <button 
                onClick={toggleDrawer}
                className="font-mono text-[10px] tracking-[0.2em] text-[#26C7ff] hover:text-white uppercase flex items-center gap-2 group transition-colors duration-300"
              >
                [ Start Your Project ]
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Column: Big Project Previews (col-span-6, pl-4, aligned to top [pt-[72px]] to align console top at [96px]) */}
          <div 
            className="project-image-wrapper col-span-6 flex flex-col justify-start pt-[72px] pl-4 relative h-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            
            {/* Background glowing bubble */}
            <div 
              className="absolute w-[80%] h-[80%] rounded-full opacity-35 blur-[120px] pointer-events-none select-none z-0" 
              style={{
                background: "radial-gradient(circle, rgba(38,199,255,0.1) 0%, rgba(0,0,0,0) 70%)"
              }}
            />

            {/* Shift Container: Shifted slightly to bottom right (translate-x-4 translate-y-6) */}
            <div className="w-full translate-x-4 translate-y-6 relative">

              {/* Framed Stack of Showcase Visuals (macOS Style Bezel) */}
              <div 
                onMouseMove={handleImageMouseMove}
                onMouseLeave={handleImageMouseLeave}
                className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/5 bg-surface-base shadow-[0_0_60px_rgba(38,199,255,0.06)] z-10 transition-transform duration-300 ease-out will-change-transform flex flex-col"
              >
                
                {/* Window Header Bar (macOS Bezel style) */}
                <div className="w-full h-8 bg-black/40 border-b border-white/5 flex items-center justify-between px-4 select-none relative z-30">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#26C7ff]/40 border border-[#26C7ff]/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  {projectsData.map((project, idx) => (
                    <span 
                      key={project.slug}
                      className={`project-image-${idx} font-mono text-[8px] tracking-[0.2em] text-white/30 uppercase absolute left-1/2 -translate-x-1/2 pointer-events-none opacity-0`}
                    >
                      AXEN://PORTFOLIO/{project.slug}.sys
                    </span>
                  ))}
                  <span className="project-more-visual font-mono text-[8px] tracking-[0.2em] text-white/30 uppercase absolute left-1/2 -translate-x-1/2 pointer-events-none opacity-0">
                    AXEN://PORTFOLIO/SERVICES.sys
                  </span>
                  <div className="w-12 h-1" />
                </div>

                <div className="relative flex-grow w-full overflow-hidden">
                  {/* Diagonal reflection sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20" />

                  {/* Stacked Images (No scaling transitions) */}
                  {projectsData.map((project, idx) => (
                    <Link
                      key={project.slug}
                      href={`/work/${project.slug}`}
                      data-cursor="VIEW"
                      className={`project-image-${idx} absolute inset-0 w-full h-full opacity-0 pointer-events-none transition-all duration-300`}
                      style={{ zIndex: 10 - idx }}
                    >
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 50vw"
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700 pointer-events-none"
                      />
                      
                      {/* Floating HUD status label */}
                      <div className="absolute top-4 left-4 backdrop-blur-md bg-black/50 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2 text-[9px] font-mono text-[#26C7ff] tracking-[0.2em] select-none z-30">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#26C7ff] animate-pulse" />
                        {idx === 0 ? "AI PIPELINE ACTIVE" : idx === 1 ? "AUTONOMOUS DISPATCH" : "DYNAMIC OPTIMIZATION"}
                      </div>

                      {/* Floating Tech Stack Overlay */}
                      <div className="absolute bottom-4 right-4 backdrop-blur-md bg-black/50 px-3 py-1.5 rounded-lg border border-white/10 text-[9px] font-mono text-white/80 uppercase tracking-[0.2em] z-30">
                        {project.techStack.slice(0, 3).join(" · ")}
                      </div>
                    </Link>
                  ))}

                  {/* State 3: Pinned See More Visual */}
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
                    className="project-more-visual absolute inset-0 w-full h-full opacity-0 pointer-events-none flex flex-col justify-center items-center gap-6 border border-dashed border-[#26C7ff]/20 rounded-2xl bg-surface-base/30 backdrop-blur-sm p-8 text-center transition-all duration-500 hover:border-[#26C7ff]/40 z-10"
                  >
                    <span className="font-mono text-xs tracking-[0.2em] text-[#26C7ff]">04 // NEXT PHASE</span>
                    <h3 className="font-display text-2xl md:text-3xl font-extralight uppercase tracking-widest text-white max-w-xs">
                      Let&apos;s Build It
                    </h3>
                    <ArrowRight size={24} className="text-[#26C7ff] animate-bounce" />
                    <span className="font-mono text-[9px] tracking-[0.25em] text-white/30 uppercase mt-4">
                      CLICK TO EXPLORE SERVICES
                    </span>
                  </Link>
                </div>

              </div>

              {/* Overlapping Floating Metric Card (Parallax Layer) */}
              {projectsData.map((project, idx) => (
                <div
                  key={project.slug}
                  className={`project-metric-${idx} absolute -bottom-6 -left-6 backdrop-blur-md bg-black/75 rounded-2xl border border-white/10 p-5 shadow-2xl z-20 pointer-events-none w-72 transition-all duration-300`}
                  style={{ zIndex: 30 }}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#26C7ff] shadow-[0_0_8px_#26C7ff]" />
                      <span className="font-mono text-[8px] text-text-tertiary tracking-[0.2em] uppercase">SYSTEM PERFORMANCE IMPACT</span>
                    </div>
                    <span className="font-display text-4xl font-extralight text-white block leading-none pt-1">
                      {project.outcomeMetric}
                    </span>
                    <p className="text-[10px] text-text-secondary font-sans font-light leading-normal">
                      {project.outcomeDesc}
                    </p>
                  </div>
                </div>
              ))}

              {/* State 3 Floating Overlap Visual */}
              <div 
                className="project-more-visual-overlay absolute -bottom-6 -left-6 backdrop-blur-md bg-black/75 rounded-2xl border border-white/10 p-5 shadow-2xl z-20 pointer-events-none w-72 transition-all duration-300"
                style={{ zIndex: 30 }}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#26C7ff] shadow-[0_0_8px_#26C7ff]" />
                    <span className="font-mono text-[8px] text-text-tertiary tracking-[0.2em] uppercase">NEXT STAGE OF COOPERATION</span>
                  </div>
                  <span className="font-display text-4xl font-extralight text-white block leading-none pt-1">
                    SCALE UP
                  </span>
                  <p className="text-[10px] text-text-secondary font-sans font-light leading-normal">
                    Connect with AXEN advisors to review custom system scopes and automate key bottlenecks.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE VERTICAL CARD SHOWCASE */}
      {/* ========================================================================= */}
      <div className="lg:hidden w-full py-16 px-6 md:px-16 space-y-16 bg-transparent">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-block">
            <MicroLabel>Our Portfolio</MicroLabel>
          </div>
          <h2 className="font-display text-3xl font-black uppercase tracking-tight text-white leading-none">
            Our Work
          </h2>
          <p className="text-text-secondary text-sm max-w-xl font-sans leading-relaxed">
            A curated showcase of digital platforms, custom AI integrations, and premium websites built to operate at the edge of possibility.
          </p>
          <div className="pt-2">
            <Button variant="ghost" className="h-9 px-5 text-xs" onClick={toggleDrawer}>
              Start your project
            </Button>
          </div>
        </div>

        {/* Project List */}
        <div className="space-y-12">
          {projectsData.map((project, idx) => (
            <div key={project.slug} className="reveal-up-mobile flex flex-col gap-6 border-b border-hairline/60 pb-10">
              <Link
                href={`/work/${project.slug}`}
                className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-hairline bg-surface-base"
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-cover grayscale"
                />
                
                {/* Mobile floating tags */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[9px] font-mono text-[#26C7ff] tracking-wider">
                  0{idx + 1} &middot; ACTIVE
                </div>

                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[9px] font-mono text-white/80 tracking-wider">
                  {project.techStack.slice(0, 2).join(" · ")}
                </div>
              </Link>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-[#26C7ff] uppercase tracking-wider block">
                    0{idx + 1} / 0{projectsData.length} &middot; {project.role}
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-text-secondary text-xs leading-relaxed font-sans">
                  {project.challenge}
                </p>

                <div className="flex justify-between items-center pt-2">
                  <div>
                    <span className="font-display text-2xl font-black text-text-primary block leading-none">
                      {project.outcomeMetric}
                    </span>
                    <span className="text-[9px] text-text-tertiary font-semibold uppercase tracking-wider block mt-1">
                      {project.outcomeDesc}
                    </span>
                  </div>

                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#26C7ff]"
                  >
                    Case Study
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Mobile See More Card */}
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
            className="reveal-up-mobile flex flex-col justify-center items-center gap-6 w-full border border-dashed border-[#26C7ff]/20 rounded-2xl bg-surface-base/10 backdrop-blur-sm p-12 text-center"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-[#26C7ff]">04 // NEXT PHASE</span>
            <h3 className="font-display text-2xl font-extralight uppercase tracking-widest text-white">
              See Services
            </h3>
            <ArrowRight size={20} className="text-[#26C7ff] animate-bounce" />
            <span className="font-mono text-[9px] tracking-[0.25em] text-white/30 uppercase">
              CLICK TO VIEW SERVICES
            </span>
          </Link>
        </div>
      </div>

    </div>
  );
}
