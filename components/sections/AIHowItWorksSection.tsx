"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion } from "framer-motion";
import MicroLabel from "@/components/ui/MicroLabel";

gsap.registerPlugin(ScrollTrigger);

interface StepCard {
  stepNum: string;
  stepLabel: string;
  title: string;
  desc: string;
}

const stepsData: StepCard[] = [
  {
    stepNum: "01",
    stepLabel: "STEP 1 →",
    title: "BUSINESS ANALYSIS",
    desc: "We map out your current bottlenecks & processes.",
  },
  {
    stepNum: "02",
    stepLabel: "STEP 2 →",
    title: "WORKFLOW DESIGN",
    desc: "Architect tailored AI pipelines & logic paths.",
  },
  {
    stepNum: "03",
    stepLabel: "STEP 3 →",
    title: "AI AUTOMATION DEVELOPMENT",
    desc: "Build & integrate robust multi-tool workflows.",
  },
  {
    stepNum: "04",
    stepLabel: "STEP 4 →",
    title: "TESTING & OPTIMIZATION",
    desc: "Rigorous stress testing for 99.9% reliability.",
  },
  {
    stepNum: "05",
    stepLabel: "STEP 5 →",
    title: "DEPLOYMENT",
    desc: "Seamless launch with zero downtime.",
  },
  {
    stepNum: "06",
    stepLabel: "STEP 6",
    title: "ONGOING SUPPORT",
    desc: "Continuous monitoring, maintenance & evolution.",
  },
];

export default function AIHowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const grid = gridRef.current;
    if (!container || !grid) return;

    const cards = gsap.utils.toArray(".gsap-reveal-card") as HTMLElement[];

    const ctx = gsap.context(() => {
      // Set initial 3D Pitch/Tilt Matrix state for cards
      gsap.set(cards, {
        opacity: 0,
        y: 50,
        rotateX: 18,
        scale: 0.94,
        transformOrigin: "50% 100%",
        force3D: true,
      });

      // Pinned GSAP ScrollTrigger Timeline - 3D Pitch/Tilt Scrub
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 0.55,
          anticipatePin: 1,
        },
      });

      // Cards 3D Pitch Slide In 1-by-1 in Series
      cards.forEach((card) => {
        tl.to(
          card,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.45,
            ease: "power2.out",
            force3D: true,
          },
          "+=0.08"
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Mouse Spotlight movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#050505] text-white flex flex-col justify-center py-20 px-6 md:px-16 overflow-hidden font-sans border-t border-white/10"
    >
      {/* Background Soft Neon Cyan Aurora Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00C8FF]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl w-full space-y-10 relative z-10">
        
        {/* Header - ALWAYS VISIBLE IMMEDIATELY */}
        <div className="space-y-3">
          <MicroLabel>CLEAR 6-STEP IMPLEMENTATION PROCESS</MicroLabel>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            HOW IT WORKS
          </h2>
        </div>

        {/* 6-Card Grid (3D Pitch Matrix Series Reveals) */}
        <div style={{ perspective: 1200 }} ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stepsData.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onMouseMove={handleMouseMove}
              style={{ transformStyle: "preserve-3d", willChange: "transform, opacity" }}
              className="gsap-reveal-card spotlight-card relative rounded-2xl border border-white/10 bg-[#08080a] p-8 space-y-6 flex flex-col justify-between hover:border-[#00C8FF]/50 hover:shadow-[0_0_15px_rgba(0,200,255,0.12)] transition-colors duration-300 group"
            >
              {/* Header Bar: Step Number & Label */}
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-black text-[#00C8FF] tracking-tight group-hover:drop-shadow-[0_0_5px_rgba(0,200,255,0.4)] transition-all">
                  {card.stepNum}
                </span>
                <span className="font-mono text-xs text-white/40 uppercase tracking-widest group-hover:text-white/70 transition-colors">
                  {card.stepLabel}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#00C8FF] transition-colors">
                  {card.title}
                </h3>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed font-sans font-light">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Spotlight CSS */}
      <style>{`
        .spotlight-card {
          position: relative;
        }
        .spotlight-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.2px;
          background: radial-gradient(
            250px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
            rgba(0, 200, 255, 0.18),
            transparent 75%
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
        .spotlight-card:hover::before {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
