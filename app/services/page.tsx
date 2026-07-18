"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import MicroLabel from "@/components/ui/MicroLabel";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";




gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("ai-automation");


  const disciplines = [
    {
      id: "ai-automation",
      name: "AI Automation",
      desc: "Intelligent workflows that eliminate manual work.",
      subCategories: ["Workflow Pipelines", "Automated DBs", "Tool Integration"],
      tags: ["n8n", "Make.com", "Zapier", "API Integration", "Data Sync"],
      image: "/services/ai-automation.png",
    },
    {
      id: "ai-agents",
      name: "AI Agents",
      desc: "Autonomous agents that engage, assist and scale.",
      subCategories: ["Autonomous Assistants", "Semantic Search / RAG", "Custom GPTs"],
      tags: ["OpenAI Assistants", "LangChain", "Vector Databases", "Agentic Loops"],
      image: "/services/ai-agents.png",
    },
    {
      id: "web-platforms",
      name: "Web Platforms",
      desc: "Scalable, high-performance web applications.",
      subCategories: ["Next.js Frontends", "API Implementations", "Serverless Edge"],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP ScrollTrigger"],
      image: "/services/web-platforms.png",
    },
  ];

  const techAccordion = [
    { title: "AI Platforms", content: "OpenAI, Anthropic, n8n, LangChain, Pinecone, HuggingFace." },
    { title: "Front-end stack", content: "Next.js, React, Tailwind CSS, GSAP, Framer Motion, Three.js." },
    { title: "Back-end & Databases", content: "Node.js edge runtimes, Supabase, PostgreSQL, BQ/Spanner." },
    { title: "DevOps & Cloud Platforms", content: "Vercel, AWS, Google Cloud Engine, GitHub Actions." },
  ];

  // Track scroll progress of the services list container
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start center", "end center"],
  });

  const beamScale = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const ctx = gsap.context(() => {
      // General entrance fade-in reveals
      gsap.utils.toArray(".reveal-up").forEach((sec: unknown) => {
        const el = sec as HTMLElement;
        gsap.fromTo(
          el,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Synchronize active section highlights
      disciplines.forEach((d) => {
        ScrollTrigger.create({
          trigger: `#${d.id}`,
          start: "top 45%",
          end: "bottom 45%",
          onEnter: () => setActiveSection(d.id),
          onEnterBack: () => setActiveSection(d.id),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleJumpToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div ref={containerRef} className="w-full bg-transparent text-text-primary px-6 md:px-16 py-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* HERO SECTION */}
        <section className="reveal-up mb-24 md:mb-36 space-y-8">
          <MicroLabel>What We Do Best</MicroLabel>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tight leading-[1.1] max-w-3xl">
              Area of Expertise
            </h1>
            <div className="flex flex-wrap gap-4">
              <Button href="/work" variant="ghost" magnetic>
                View projects
              </Button>
              <Button href="/contact" variant="solid" magnetic>
                Let&apos;s connect
              </Button>
            </div>
          </div>
        </section>

        {/* CORE DISCIPLINE GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative mb-32">
          
          {/* Left: Scroll-Synced Sidebar Beam Glow */}
          <div className="hidden lg:block lg:col-span-4 sticky top-32">
            <div className="relative pl-10 py-2">
              
              {/* Background Track Line */}
              <div className="absolute left-[7px] top-4 bottom-4 w-[2px] bg-hairline rounded-full" />
              
              {/* Active Scroll Beam Glow */}
              <div className="absolute left-[7px] top-4 bottom-4 w-[2px]">
                <motion.div
                  className="w-full bg-[#26C7ff] origin-top rounded-full"
                  style={{
                    scaleY: beamScale,
                    height: "100%",
                    boxShadow: "0 0 10px rgba(38, 199, 255, 0.65), 0 0 20px rgba(38, 199, 255, 0.3)",
                  }}
                />
              </div>

              {/* Sidebar Menu Items */}
              <div className="space-y-6">
                {disciplines.map((d, index) => {
                  const isActive = activeSection === d.id;
                  return (
                    <div key={d.id} className="space-y-3">
                      <button
                        onClick={() => handleJumpToSection(d.id)}
                        className="flex items-center gap-5 text-left group w-full relative"
                      >
                        {/* Dot node */}
                        <div className="absolute left-[-41px] flex items-center justify-center">
                          <div className={cn(
                            "w-4 h-4 rounded-full border bg-canvas flex items-center justify-center transition-all duration-300 z-10",
                            isActive ? "border-[#26C7ff]" : "border-hairline group-hover:border-text-secondary"
                          )}>
                            <div className={cn(
                              "w-1.5 h-1.5 rounded-full transition-all duration-300",
                              isActive ? "bg-[#26C7ff] scale-125" : "bg-text-tertiary"
                            )} />
                            {isActive && (
                              <div className="absolute inset-0 rounded-full bg-[#26C7ff]/20 animate-ping" />
                            )}
                          </div>
                        </div>

                        {/* Label */}
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono opacity-40 block">0{index + 1}</span>
                          <span className={cn(
                            "text-sm font-display font-semibold uppercase tracking-wider transition-colors duration-300 block",
                            isActive ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
                          )}>
                            {d.name}
                          </span>
                        </div>
                      </button>

                      {/* Subsidebar Details (Rendered dynamically when active) */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden pl-4 border-l border-hairline/40 ml-[4px] space-y-2"
                          >
                            <p className="text-[11px] text-text-tertiary font-sans leading-relaxed max-w-[200px]">
                              {d.desc}
                            </p>
                            <ul className="space-y-1.5 pt-1">
                              {d.subCategories.map((sub) => (
                                <li 
                                  key={sub}
                                  className="text-[10px] text-[#26C7ff] opacity-80 font-mono tracking-wider uppercase flex items-center gap-1.5"
                                >
                                  <span className="inline-block w-1 h-1 bg-[#26C7ff] rounded-full" />
                                  {sub}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Right: Repeating Blocks */}
          <div ref={listRef} className="lg:col-span-8 space-y-24 md:space-y-36">
            {disciplines.map((d, index) => (
              <div
                key={d.id}
                id={d.id}
                className="reveal-up grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-t border-hairline pt-12"
              >
                {/* Text Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <span className="text-xs font-semibold text-text-tertiary">0{index + 1} /</span>
                  <h3 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary">
                    {d.name}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed leading-6 font-sans">
                    {d.desc}
                  </p>
                </div>

                {/* Cover Image */}
                <div className="relative aspect-video md:aspect-square w-full rounded-2xl overflow-hidden border border-hairline bg-surface-base group">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04] pointer-events-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK ACCORDION */}
        <section className="reveal-up py-20 border-t border-hairline space-y-12">
          <MicroLabel>Our Stack</MicroLabel>
          <div className="max-w-3xl mx-auto space-y-4">
            {techAccordion.map((item, idx) => (
              <div key={idx} className="border-b border-hairline">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-6 text-left hover:text-text-primary text-text-secondary transition-colors duration-300 group"
                >
                  <span className="font-display font-bold text-lg md:text-xl uppercase tracking-wide flex gap-4">
                    <span className="text-text-tertiary">0{idx + 1}.</span> {item.title}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`transform transition-transform duration-300 ${activeAccordion === idx ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out-expo`}
                  style={{
                    maxHeight: activeAccordion === idx ? "200px" : "0",
                  }}
                >
                  <p className="text-sm leading-relaxed text-text-secondary pb-6 font-sans">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Link to About */}
        <div className="h-[20vh] flex flex-col items-center justify-center gap-4 border-t border-hairline/20 mt-24">
          <span className="font-mono text-[10px] tracking-[0.3em] text-text-tertiary uppercase">Next Chapter</span>
          <Link
            href="/about"
            className="font-display text-xl md:text-2xl font-extralight tracking-widest uppercase text-text-secondary hover:text-[#26C7ff] transition-colors duration-300"
          >
            About Our Team →
          </Link>
        </div>

      </div>
    </div>
  );
}
