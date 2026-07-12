"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Play } from "lucide-react";
import MicroLabel from "@/components/ui/MicroLabel";
import Button from "@/components/ui/Button";
import { motion, useScroll, useSpring } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const processContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: processContainerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animations
      gsap.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", stagger: 0.15 }
      );

      // Section triggers for scroll reveal
      gsap.utils.toArray(".reveal-up").forEach((section: unknown) => {
        const el = section as HTMLElement;
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

      // Alternating timeline card entrance animations (Left cards: Step 1 & 3)
      gsap.utils.toArray(".timeline-card-left").forEach((card: unknown) => {
        const el = card as HTMLElement;
        gsap.fromTo(
          el,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        // Glow sync when journey line reaches the box
        const box = el.querySelector(".timeline-box");
        if (box) {
          gsap.fromTo(
            box,
            {
              borderColor: "rgba(35, 35, 38, 1)",
              boxShadow: "0 0 0px rgba(38, 199, 255, 0)",
            },
            {
              borderColor: "rgba(38, 199, 255, 0.28)", // Slightly more visible thin cyan border outline
              boxShadow: "0 0 16px rgba(38, 199, 255, 0.12)", // Slightly stronger soft glow
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top center",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      });

      // Alternating timeline card entrance animations (Right card: Step 2)
      gsap.utils.toArray(".timeline-card-right").forEach((card: unknown) => {
        const el = card as HTMLElement;
        gsap.fromTo(
          el,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        // Glow sync when journey line reaches the box
        const box = el.querySelector(".timeline-box");
        if (box) {
          gsap.fromTo(
            box,
            {
              borderColor: "rgba(35, 35, 38, 1)",
              boxShadow: "0 0 0px rgba(38, 199, 255, 0)",
            },
            {
              borderColor: "rgba(38, 199, 255, 0.28)", // Slightly more visible thin cyan border outline
              boxShadow: "0 0 16px rgba(38, 199, 255, 0.12)", // Slightly stronger soft glow
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top center",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      });

      // Mobile timeline card animations
      gsap.utils.toArray(".timeline-card-mobile").forEach((card: unknown) => {
        const el = card as HTMLElement;
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );

        // Glow sync on mobile
        const box = el.querySelector(".timeline-box");
        if (box) {
          gsap.fromTo(
            box,
            {
              borderColor: "rgba(35, 35, 38, 1)",
              boxShadow: "0 0 0px rgba(38, 199, 255, 0)",
            },
            {
              borderColor: "rgba(38, 199, 255, 0.24)",
              boxShadow: "0 0 12px rgba(38, 199, 255, 0.08)",
              duration: 0.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top center",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      });

      // Stats Count-Up Animation
      gsap.utils.toArray(".count-up").forEach((stat: unknown) => {
        const el = stat as HTMLElement;
        const target = parseInt(el.getAttribute("data-target") || "0", 10);
        const suffix = el.getAttribute("data-suffix") || "";
        
        gsap.fromTo(
          el,
          { textContent: "0" },
          {
            textContent: target.toString(),
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            snap: { textContent: 1 },
            onUpdate: function () {
              if (el) {
                el.textContent = Math.floor(parseFloat(el.textContent || "0")).toString() + suffix;
              }
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-transparent text-text-primary overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-start px-6 md:px-16 pt-36 pb-16 overflow-hidden bg-transparent">
        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className="z-10 space-y-8 text-left">
            <div className="hero-reveal">
              <MicroLabel>UNDERSTAND · BUILD · SCALE</MicroLabel>
            </div>
            
            <h1 className="hero-reveal font-display text-[40px] sm:text-[56px] md:text-[72px] leading-[1] md:leading-[0.9] font-extralight tracking-tight uppercase max-w-xl bg-gradient-to-r from-white/20 via-white/70 to-white bg-clip-text text-transparent">
              Where AI Builds<br />Business &bull;
            </h1>
            
            <p className="hero-reveal text-sm text-white max-w-md leading-relaxed font-light">
              AI agents, automations, websites, and digital systems built for clarity, scale, and high-growth impact.
            </p>
            
            <div className="hero-reveal flex flex-wrap gap-4 pt-4">
              <Button href="/contact" variant="solid" magnetic>
                Build With AXEN
              </Button>
              <Button href="/work" variant="ghost" magnetic>
                See Work
              </Button>
            </div>
          </div>

          {/* Transparent Blank Placeholder Column to let background shine through */}
          <div className="hero-reveal relative w-full aspect-video lg:aspect-square flex items-center justify-center pointer-events-none bg-transparent"></div>

        </div>

        <div className="absolute bottom-6 right-16 hidden md:block hero-reveal">
          <p className="font-sans text-xs text-text-tertiary">Est. 2026 — building AI systems</p>
        </div>
      </section>

      {/* 2. ABOUT TEASER */}
      <section className="reveal-up py-32 px-6 md:px-16 border-t border-hairline relative z-10 bg-canvas/30 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <MicroLabel>About AXEN</MicroLabel>
            </div>
            <div className="md:col-span-8 space-y-8">
              <h2 className="font-sans text-2xl md:text-4xl text-text-primary font-medium leading-relaxed">
                We bridge the gap between complex engineering and human clarity. AXEN builds the intelligent infrastructure that allows visionary teams to scale without friction.
              </h2>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-text-primary uppercase group"
              >
                more about us 
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY FACTS / BENTO GRID */}
      <section className="reveal-up py-32 px-6 md:px-16 bg-surface-base/30 backdrop-blur-sm border-t border-hairline relative z-10">
        <div className="mx-auto max-w-7xl space-y-12">
          
          <MicroLabel>Key Facts</MicroLabel>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Stat 1 */}
            <div className="bg-surface-raised/40 backdrop-blur-sm border border-hairline rounded-2xl p-10 flex flex-col justify-between hover:border-text-secondary/40 transition-colors duration-500 min-h-[220px]">
              <span className="font-display text-6xl font-black text-text-primary leading-none count-up" data-target="50" data-suffix="+">
                0
              </span>
              <p className="text-sm font-medium tracking-wide text-text-secondary">projects delivered</p>
            </div>

            {/* Loop Video / Graphic Bento Card */}
            <div 
              data-cursor="PLAY"
              className="md:col-span-2 bg-surface-raised/40 backdrop-blur-sm border border-hairline rounded-2xl overflow-hidden relative group min-h-[220px]"
            >
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7dS01w7WeRJO7cLSvEqwrKfZhjNlk57_LEf2UvfontgoOylw67Zvc714wiSGpzXRtJ2tbrH_dRrB7dHbW8oJNX3S9tutdQkagyHgxjPJAO-pYgX4xvcdyZTkxcY_hxoDK9KNX_JZT6IYwMQUVu4E1ACx510H6ezBgTeLv1zyCvLa0ZxPy4Zj8rKA5lvJlbvh8eby8ieou7AVF4Rd-F8ZW09jyR-t5AQKCgm7y-jfO10ZtVHKSt9RFng"
                alt="AI Data Sequence Animation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="w-12 h-12 rounded-full bg-text-primary flex items-center justify-center text-canvas cursor-pointer hover:scale-115 transition-transform">
                  <Play size={20} fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-surface-raised/40 backdrop-blur-sm border border-hairline rounded-2xl p-10 flex flex-col justify-between hover:border-text-secondary/40 transition-colors duration-500 min-h-[220px]">
              <span className="font-display text-6xl font-black text-text-primary leading-none count-up" data-target="90" data-suffix="%">
                0
              </span>
              <p className="text-sm font-medium tracking-wide text-text-secondary">client retention</p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PROCESS / TIMELINE */}
      <section ref={processContainerRef} className="py-32 px-6 md:px-16 border-t border-hairline relative z-10 bg-canvas/30 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl space-y-16">
          <div className="text-center md:text-left">
            <MicroLabel>Our Process</MicroLabel>
          </div>

          {/* DESKTOP TIMELINE (Alternating layout with curved path) */}
          <div className="hidden md:block relative w-full min-h-[850px] py-10">
            
            {/* Centered Curved SVG Scroll Line */}
            <div className="absolute inset-0 pointer-events-none flex justify-center">
              <div className="w-full max-w-3xl h-full relative">
                <svg
                  className="absolute inset-0 w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 1000 800"
                >
                  {/* Background Track Line (Inactive) */}
                  <path
                    d="M 500,0 C 500,100 250,100 250,220 C 250,340 750,340 750,460 C 750,580 250,580 250,700 L 250,800"
                    fill="none"
                    stroke="#232326"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />

                  {/* Active Animated Drawing Path */}
                  <motion.path
                    d="M 500,0 C 500,100 250,100 250,220 C 250,340 750,340 750,460 C 750,580 250,580 250,700 L 250,800"
                    fill="none"
                    stroke="#26C7ff"
                    strokeWidth="2.5"
                    style={{ pathLength, filter: "drop-shadow(0 0 8px rgba(38, 199, 255, 0.4))" }}
                  />
                </svg>
              </div>
            </div>

            {/* Alternating Cards Grid */}
            <div className="relative z-10 w-full space-y-24">
              
              {/* Step 1: Left */}
              <div className="grid grid-cols-12 gap-8 items-center min-h-[220px]">
                <div className="col-span-5 timeline-card-left">
                  <div className="timeline-box border border-hairline rounded-2xl p-10 bg-surface-base/30 backdrop-blur-sm transition-all duration-500 space-y-4">
                    <span className="font-display text-base font-bold text-text-tertiary">01 /</span>
                    <h3 className="text-2xl font-bold uppercase tracking-tight font-display text-text-primary">Understand</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      We dive deep into your workflow, architectures, and objectives to pinpoint intelligence bottle-necks.
                    </p>
                  </div>
                </div>
                <div className="col-span-2" />
                <div className="col-span-5" />
              </div>

              {/* Step 2: Right */}
              <div className="grid grid-cols-12 gap-8 items-center min-h-[220px]">
                <div className="col-span-5" />
                <div className="col-span-2" />
                <div className="col-span-5 timeline-card-right">
                  <div className="timeline-box border border-hairline rounded-2xl p-10 bg-surface-base/30 backdrop-blur-sm transition-all duration-500 space-y-4">
                    <span className="font-display text-base font-bold text-text-tertiary">02 /</span>
                    <h3 className="text-2xl font-bold uppercase tracking-tight font-display text-text-primary">Design & Build</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      We develop and design tailormade AI pipelines, responsive platforms, and automations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3: Left */}
              <div className="grid grid-cols-12 gap-8 items-center min-h-[220px]">
                <div className="col-span-5 timeline-card-left">
                  <div className="timeline-box border border-hairline rounded-2xl p-10 bg-surface-base/30 backdrop-blur-sm transition-all duration-500 space-y-4">
                    <span className="font-display text-base font-bold text-text-tertiary">03 /</span>
                    <h3 className="text-2xl font-bold uppercase tracking-tight font-display text-text-primary">Refine & Evolve</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Continuous optimization loops ensure your systems stay fast, secure, and ahead of the curve.
                    </p>
                  </div>
                </div>
                <div className="col-span-2" />
                <div className="col-span-5" />
              </div>

            </div>

          </div>

          {/* MOBILE TIMELINE (Left-aligned straight line) */}
          <div className="block md:hidden relative pl-8 space-y-12">
            
            {/* Straight line for mobile layout */}
            <div className="absolute left-2.5 top-3 bottom-3 w-[2px]">
              <svg
                className="absolute inset-0 h-full w-full overflow-visible"
                preserveAspectRatio="none"
                viewBox="0 0 2 100"
              >
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="100"
                  stroke="#232326"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <motion.path
                  d="M 1,0 L 1,100"
                  stroke="#26C7ff"
                  strokeWidth="2"
                  fill="none"
                  style={{ pathLength, filter: "drop-shadow(0 0 6px rgba(38, 199, 255, 0.5))" }}
                />
              </svg>
            </div>

            {[
              {
                step: "01",
                title: "Understand",
                desc: "We dive deep into your workflow, architectures, and objectives to pinpoint intelligence bottle-necks."
              },
              {
                step: "02",
                title: "Design & Build",
                desc: "We develop and design tailormade AI pipelines, responsive platforms, and automations."
              },
              {
                step: "03",
                title: "Refine & Evolve",
                desc: "Continuous optimization loops ensure your systems stay fast, secure, and ahead of the curve."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative group space-y-3 timeline-card-mobile">
                <div className="timeline-box border border-hairline rounded-2xl p-8 bg-surface-base/30 backdrop-blur-sm transition-all duration-500 space-y-4">
                  <span className="font-display text-base font-bold text-text-tertiary">{item.step} /</span>
                  <h3 className="text-xl font-bold uppercase tracking-tight font-display text-text-primary">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>
    </div>
  );
}
