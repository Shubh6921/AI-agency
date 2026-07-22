"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Play } from "lucide-react";
import MicroLabel from "@/components/ui/MicroLabel";
import Button from "@/components/ui/Button";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useSmoothScroll } from "@/components/providers/smooth-scroll";


import WorkPage from "./work/page";
import ServicesPage from "./services/page";
import ContactPage from "./contact/page";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const lenis = useSmoothScroll();

  const containerRef = useRef<HTMLDivElement>(null);
  const processContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: processContainerRef,
    offset: ["start end", "end end"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Box slide-in and glow values synced with beam pathLength progress
  // progress 0.0: Top enters viewport bottom.
  // progress 0.33: Section sticks at top. Box 1 is fully transitioned, Box 2 is at half opacity.
  // progress 0.33 → 1.0: Section is sticky. Box 2 completes, Box 3 transitions.
  const box1X       = useTransform(pathLength, [0.05, 0.28], [-40, 0]);
  const box1Opacity = useTransform(pathLength, [0.05, 0.28], [0, 1]);
  const box1Border  = useTransform(pathLength, [0.05, 0.25], ["rgba(35, 35, 38, 1)", "rgba(38, 199, 255, 0.28)"]);
  const box1Shadow  = useTransform(pathLength, [0.05, 0.25], ["0 0 0px rgba(38, 199, 255, 0)", "0 0 16px rgba(38, 199, 255, 0.12)"]);

  const box2X       = useTransform(pathLength, [0.15, 0.33, 0.60], [40, 20, 0]);
  const box2Opacity = useTransform(pathLength, [0.15, 0.33, 0.60], [0, 0.5, 1]);
  const box2Border  = useTransform(pathLength, [0.15, 0.33, 0.60], ["rgba(35, 35, 38, 1)", "rgba(38, 199, 255, 0.14)", "rgba(38, 199, 255, 0.28)"]);
  const box2Shadow  = useTransform(pathLength, [0.15, 0.33, 0.60], ["0 0 0px rgba(38, 199, 255, 0)", "0 0 8px rgba(38, 199, 255, 0.06)", "0 0 16px rgba(38, 199, 255, 0.12)"]);

  const box3X       = useTransform(pathLength, [0.50, 0.75], [-40, 0]);
  const box3Opacity = useTransform(pathLength, [0.50, 0.75], [0, 1]);
  const box3Border  = useTransform(pathLength, [0.50, 0.75], ["rgba(35, 35, 38, 1)", "rgba(38, 199, 255, 0.28)"]);
  const box3Shadow  = useTransform(pathLength, [0.50, 0.75], ["0 0 0px rgba(38, 199, 255, 0)", "0 0 16px rgba(38, 199, 255, 0.12)"]);

  // Fade out entire process section to black/blank page at the end of scroll
  const sectionOpacity = useTransform(pathLength, [0.93, 0.99], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Mobile / Tablet reveal triggers (max-width: 1023px)
      mm.add("(max-width: 1023px)", () => {
        gsap.fromTo(
          ".hero-reveal",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", stagger: 0.15 }
        );

        // General scroll reveals for mobile
        gsap.utils.toArray(".reveal-up-mobile, .reveal-up").forEach((section: unknown) => {
          const el = section as HTMLElement;
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // Mobile process timeline glow is now handled dynamically by Framer Motion
      });

      // Desktop immersive pinned transitions: ONLY Hero -> About (min-width: 1024px)
      mm.add("(min-width: 1024px)", () => {
        // Pinned Story Wrapper for Hero & About
        const sections = gsap.utils.toArray(".scroll-section") as HTMLElement[];
        const masterTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".scroll-story-wrapper",
            start: "top top",
            end: "+=150%", // 150vh scroll duration for premium slow feel
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
          },
        });

        // Initial setup for About Section (index 1)
        if (sections[1]) {
          gsap.set(sections[1], { opacity: 0, scale: 1.04, y: 80, filter: "blur(20px)", pointerEvents: "none" });
        }
        if (sections[0]) {
          gsap.set(sections[0], { pointerEvents: "auto" });
        }

        // Hero -> About transition
        if (sections[0] && sections[1]) {
          // Outgoing Hero
          masterTimeline.to(
            sections[0],
            {
              opacity: 0,
              scale: 0.97,
              filter: "blur(12px)",
              duration: 1,
              ease: "power4.inOut",
              pointerEvents: "none",
            },
            0
          );

          // Incoming About
          masterTimeline.to(
            sections[1],
            {
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1,
              ease: "power4.inOut",
              pointerEvents: "auto",
            },
            0.15
          );

          // Parallax layers on Hero
          const heroBg = sections[0].querySelector(".parallax-bg");
          const heroDeco = sections[0].querySelector(".parallax-deco");
          const heroFg = sections[0].querySelector(".parallax-fg");

          if (heroBg) masterTimeline.to(heroBg, { y: -80, scale: 1.08, duration: 1.2, ease: "none" }, 0);
          if (heroDeco) masterTimeline.to(heroDeco, { y: -150, duration: 1.2, ease: "none" }, 0);
          if (heroFg) masterTimeline.to(heroFg, { y: -30, duration: 1.2, ease: "none" }, 0);

          // Progressive reveals on About Section
          const aboutHeading = sections[1].querySelector(".reveal-heading");
          const aboutText = sections[1].querySelector(".reveal-text");
          const aboutButtons = sections[1].querySelector(".reveal-buttons");

          if (aboutHeading) {
            gsap.set(aboutHeading, { opacity: 0, y: 25 });
            masterTimeline.to(aboutHeading, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.4);
          }
          if (aboutText) {
            gsap.set(aboutText, { opacity: 0, y: 20 });
            masterTimeline.to(aboutText, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.5);
          }
          if (aboutButtons) {
            gsap.set(aboutButtons, { opacity: 0, y: 15 });
            masterTimeline.to(aboutButtons, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 0.7);
          }
        }

        // Standard Scroll reveals for subsequent normal flow sections (Bento & Process)
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

        // Desktop process cards glow triggers are now handled dynamically by Framer Motion
      });

      // Stats count-up triggers
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

    // Delay ScrollTrigger recalculation to allow child components (Work, Services) to settle and render their triggers
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 600);

    return () => {
      ctx.revert();
      clearTimeout(refreshTimer);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-transparent text-text-primary overflow-x-clip">
      
      {/* 1 & 2: Pinned Story Wrapper (Hero -> About) */}
      <div className="scroll-story-wrapper relative w-full lg:h-screen bg-transparent">
        <div className="lg:relative lg:w-full lg:h-screen lg:overflow-hidden bg-transparent">

          {/* 1. HERO SECTION */}
          <section className="scroll-section scroll-section-1 relative min-h-[90vh] lg:h-screen flex flex-col justify-center px-6 md:px-16 pt-36 pb-16 overflow-hidden bg-transparent lg:absolute lg:inset-0 lg:z-40">
            <div className="parallax-bg absolute inset-0 bg-transparent pointer-events-none" />

            <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 parallax-fg">
              <div className="space-y-8 text-left">
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
                  <Button
                    href="/#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.getElementById("contact");
                      if (target && lenis) lenis.scrollTo(target);
                    }}
                    variant="solid"
                    magnetic
                  >
                    Build With AXEN
                  </Button>
                  <Button
                    href="/#work"
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.getElementById("work");
                      if (target && lenis) lenis.scrollTo(target);
                    }}
                    variant="ghost"
                    magnetic
                  >
                    See Work
                  </Button>
                </div>
              </div>

              <div className="hero-reveal relative w-full aspect-video lg:aspect-square flex items-center justify-center pointer-events-none bg-transparent" />
            </div>

            <div className="absolute bottom-6 right-16 hidden md:block hero-reveal z-10 parallax-deco">
              <p className="font-sans text-xs text-text-tertiary">Est. 2026 — building AI systems</p>
            </div>
          </section>

          {/* 2. ABOUT TEASER */}
          <section className="scroll-section scroll-section-2 py-32 px-6 md:px-16 border-t border-hairline relative bg-canvas/30 backdrop-blur-md lg:h-screen lg:absolute lg:inset-0 lg:z-30 lg:flex lg:flex-col lg:justify-center lg:border-t-0">
            <div className="parallax-bg absolute inset-0 bg-transparent pointer-events-none" />

            <div className="mx-auto max-w-7xl w-full relative z-10 parallax-fg">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-4 reveal-heading">
                  <MicroLabel>About AXEN</MicroLabel>
                </div>
                <div className="md:col-span-8 space-y-8">
                  <h2 className="reveal-text font-sans text-2xl md:text-4xl text-text-primary font-medium leading-relaxed">
                    At AXEN, we build digital experiences that help ambitious businesses move faster, scale smarter, and create lasting impact.
                  </h2>
                  <div className="reveal-buttons">
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
            </div>
          </section>

        </div>
      </div>

      {/* 3. KEY FACTS / BENTO GRID (Normal Document Flow) */}
      <section className="reveal-up py-32 px-6 md:px-16 bg-surface-base/30 backdrop-blur-md border-t border-hairline relative z-10">
        <div className="mx-auto max-w-7xl space-y-12 w-full">
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

      {/* 4. PROCESS / TIMELINE — Sticky pinned: 300vh outer keeps section locked
          to viewport while beam + boxes animate. Pin releases at scroll end. */}
      <div ref={processContainerRef} style={{ height: "300vh" }} className="relative z-10">
        <motion.section style={{ opacity: sectionOpacity }} className="sticky top-0 h-screen flex flex-col justify-center px-6 md:px-16 border-t border-hairline bg-canvas/30 backdrop-blur-md overflow-hidden">
          <div className="mx-auto max-w-7xl space-y-12 w-full">
            <div className="text-center md:text-left">
              <MicroLabel>Our Process</MicroLabel>
            </div>

            {/* DESKTOP TIMELINE */}
          <div className="hidden md:block relative w-full min-h-[500px] py-2">
            <div className="absolute inset-0 pointer-events-none flex justify-center">
              <div className="w-full max-w-3xl h-full relative">
                <svg
                  className="absolute inset-0 w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 1000 500"
                >
                  <path
                    d="M 500,0 C 500,80 250,80 250,180 C 250,280 750,280 750,380 L 750,500"
                    fill="none"
                    stroke="#232326"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <motion.path
                    d="M 500,0 C 500,80 250,80 250,180 C 250,280 750,280 750,380 L 750,500"
                    fill="none"
                    stroke="#26C7ff"
                    strokeWidth="2.5"
                    style={{ pathLength, filter: "drop-shadow(0 0 8px rgba(38, 199, 255, 0.4))" }}
                  />
                </svg>
              </div>
            </div>

            <div className="relative z-10 w-full space-y-12">
              {/* Step 1: Left — slides in from LEFT as beam arrives */}
              <div className="grid grid-cols-12 gap-8 items-center min-h-[160px]">
                <motion.div
                  className="col-span-5 timeline-card-left"
                  style={{ x: box1X, opacity: box1Opacity }}
                >
                  <motion.div
                    onMouseMove={handleMouseMove}
                    style={{ borderColor: box1Border, boxShadow: box1Shadow }}
                    className="timeline-box border rounded-2xl p-8 bg-surface-base/30 backdrop-blur-sm transition-all duration-500 space-y-3"
                  >
                    <span className="font-display text-base font-bold text-text-tertiary">01 /</span>
                    <h3 className="text-xl font-bold uppercase tracking-tight font-display text-text-primary">Understand</h3>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      We dive deep into your workflow, architectures, and objectives to pinpoint intelligence bottlenecks.
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Step 2: Right — slides in from RIGHT as beam arrives */}
              <div className="grid grid-cols-12 gap-8 items-center min-h-[160px]">
                <div className="col-span-7" />
                <motion.div
                  className="col-span-5 timeline-card-right"
                  style={{ x: box2X, opacity: box2Opacity }}
                >
                  <motion.div
                    onMouseMove={handleMouseMove}
                    style={{ borderColor: box2Border, boxShadow: box2Shadow }}
                    className="timeline-box border rounded-2xl p-8 bg-surface-base/30 backdrop-blur-sm transition-all duration-500 space-y-3"
                  >
                    <span className="font-display text-base font-bold text-text-tertiary">02 /</span>
                    <h3 className="text-xl font-bold uppercase tracking-tight font-display text-text-primary">Design & Build</h3>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      We develop and design tailormade AI pipelines, responsive platforms, and automations.
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Step 3: Left — slides in from LEFT as beam arrives */}
              <div className="grid grid-cols-12 gap-8 items-center min-h-[160px]">
                <motion.div
                  className="col-span-5 timeline-card-left"
                  style={{ x: box3X, opacity: box3Opacity }}
                >
                  <motion.div 
                    onMouseMove={handleMouseMove}
                    style={{ borderColor: box3Border, boxShadow: box3Shadow }}
                    className="timeline-box border rounded-2xl p-8 bg-surface-base/30 backdrop-blur-sm transition-all duration-500 space-y-3"
                  >
                    <span className="font-display text-base font-bold text-text-tertiary">03 /</span>
                    <h3 className="text-xl font-bold uppercase tracking-tight font-display text-text-primary">Refine & Evolve</h3>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      Continuous optimization loops ensure your systems stay fast, secure, and ahead of the curve.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* MOBILE TIMELINE */}
          <div className="block md:hidden relative pl-8 space-y-12">
            <div className="absolute left-2.5 top-3 bottom-3 w-[2px]">
              <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 2 100">
                <line x1="1" y1="0" x2="1" y2="100" stroke="#232326" strokeWidth="2" strokeDasharray="4 4" />
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
                desc: "We dive deep into your workflow, architectures, and objectives to pinpoint intelligence bottlenecks.",
                x: box1X,
                opacity: box1Opacity,
                border: box1Border,
                shadow: box1Shadow
              },
              {
                step: "02",
                title: "Design & Build",
                desc: "We develop and design tailormade AI pipelines, responsive platforms, and automations.",
                x: box2X,
                opacity: box2Opacity,
                border: box2Border,
                shadow: box2Shadow
              },
              {
                step: "03",
                title: "Refine & Evolve",
                desc: "Continuous optimization loops ensure your systems stay fast, secure, and ahead of the curve.",
                x: box3X,
                opacity: box3Opacity,
                border: box3Border,
                shadow: box3Shadow
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                style={{ x: item.x, opacity: item.opacity }}
                className="relative group space-y-3 timeline-card-mobile"
              >
                <motion.div 
                  onMouseMove={handleMouseMove}
                  style={{ borderColor: item.border, boxShadow: item.shadow }}
                  className="timeline-box border rounded-2xl p-8 bg-surface-base/30 backdrop-blur-sm transition-all duration-500 space-y-4"
                >
                  <span className="font-display text-base font-bold text-text-tertiary">{item.step} /</span>
                  <h3 className="text-xl font-bold uppercase tracking-tight font-display text-text-primary">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          </div>
        </motion.section>
      </div>



      {/* SOLID WRAPPER FOR SECTIONS BELOW PROCESS — Slides over sticky section cleanly */}
      <div className="relative z-20 bg-canvas">
        {/* 5. WORK SECTION */}
        <div id="work" className="border-t border-hairline/20">
          <WorkPage />
        </div>

        {/* 6. SERVICES SECTION */}
        <div id="services" className="border-t border-hairline/20">
          <ServicesPage />
        </div>

        {/* 9. CONTACT SECTION */}
        <div id="contact" className="border-t border-[#232326]">
          <ContactPage />
        </div>
      </div>

      <style>{`
        .timeline-box {
          position: relative;
        }
        .timeline-box::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.5px;
          background: radial-gradient(
            220px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
            rgba(38, 199, 255, 0.45),
            transparent 80%
          );
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 2;
        }
        .timeline-box:hover::before {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
