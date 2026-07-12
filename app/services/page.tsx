"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, ArrowRight } from "lucide-react";
import MicroLabel from "@/components/ui/MicroLabel";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const disciplines = [
    {
      id: "ai",
      name: "AI & Intelligent Automation",
      desc: "Custom agentic workflows and automated pipelines that replace manual operations, built directly into your core tech stack.",
      tags: ["Agentic AI", "n8n Pipelines", "LLM Fine-tuning", "Semantic Search", "RAG Integration", "Data Mining"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRyV3nWgJgmlcNpcz5TXh40gLX4eVOtc5WsccVKDlPHh5rzlV1Qkrm3QXTlvNoGSn_ysj3JWhgoSg5b0ssg2fNK-y4PHHywNateW3eJfgfma493yksy1UHuQhot9fHmsa6-ZV_lnVaeNGm206m1YGnir5SbzAW6GpRzC-OikIoAY0S4RuZvvo2Uy5ReUmsveSl8oI64A7_6XwT9-Xh6OZ6iX6j1ROJ0VoN5x3wBaT59GcDzW3kgNjRyw",
    },
    {
      id: "web",
      name: "Web Development",
      desc: "Pixel-perfect, lightning-fast web applications built with Next.js, structured for maximum performance, SEO, and stability.",
      tags: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "GSAP ScrollTrigger", "API Architecture", "Serverless Handlers"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7dS01w7WeRJO7cLSvEqwrKfZhjNlk57_LEf2UvfontgoOylw67Zvc714wiSGpzXRtJ2tbrH_dRrB7dHbW8oJNX3S9tutdQkagyHgxjPJAO-pYgX4xvcdyZTkxcY_hxoDK9KNX_JZT6IYwMQUVu4E1ACx510H6ezBgTeLv1zyCvLa0ZxPy4Zj8rKA5lvJlbvh8eby8ieou7AVF4Rd-F8ZW09jyR-t5AQKCgm7y-jfO10ZtVHKSt9RFng",
    },
    {
      id: "design",
      name: "Product & UI/UX Design",
      desc: "Immersive interfaces designed to captivate and convert, striking the perfect balance between premium brand aesthetics and user flows.",
      tags: ["Interface Design", "Interactive Prototypes", "Figma Systems", "Awwwards Craft", "UX Research", "Micro-Interactions"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRyV3nWgJgmlcNpcz5TXh40gLX4eVOtc5WsccVKDlPHh5rzlV1Qkrm3QXTlvNoGSn_ysj3JWhgoSg5b0ssg2fNK-y4PHHywNateW3eJfgfma493yksy1UHuQhot9fHmsa6-ZV_lnVaeNGm206m1YGnir5SbzAW6GpRzC-OikIoAY0S4RuZvvo2Uy5ReUmsveSl8oI64A7_6XwT9-Xh6OZ6iX6j1ROJ0VoN5x3wBaT59GcDzW3kgNjRyw",
    },
  ];

  const techAccordion = [
    { title: "AI Platforms", content: "OpenAI, Anthropic, n8n, LangChain, Pinecone, HuggingFace." },
    { title: "Front-end stack", content: "Next.js, React, Tailwind CSS, GSAP, Framer Motion, Three.js." },
    { title: "Back-end & Databases", content: "Node.js edge runtimes, Supabase, PostgreSQL, BQ/Spanner." },
    { title: "DevOps & Cloud Platforms", content: "Vercel, AWS, Google Cloud Engine, GitHub Actions." },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // General entrance fade-in reveals
      gsap.utils.toArray(".reveal-up").forEach((sec: unknown) => {
        const el = sec as HTMLElement;
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
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
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
          {/* Left: Quick Jump Menu */}
          <div className="hidden lg:block lg:col-span-3 sticky top-32 space-y-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-tertiary">
              ✦ Jump to category
            </span>
            <ul className="space-y-3 font-display text-sm font-semibold tracking-wider uppercase">
              {disciplines.map((d) => (
                <li key={d.id}>
                  <button
                    onClick={() => handleJumpToSection(d.id)}
                    className="hover:text-text-primary text-text-secondary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span>{d.name}</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Repeating Blocks */}
          <div className="lg:col-span-9 space-y-24 md:space-y-36">
            {disciplines.map((d, index) => (
              <div
                key={d.id}
                id={d.id}
                className={`reveal-up grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-t border-hairline pt-12`}
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
                  
                  {/* Capabilities tags */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-tertiary">Core Capabilities</span>
                    <div className="flex flex-wrap gap-2">
                      {d.tags.map((tag) => (
                        <span key={tag} className="text-xs font-semibold bg-surface-base border border-hairline px-3 py-1 rounded-full text-text-secondary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Cover Image */}
                <div className="relative aspect-video md:aspect-square w-full rounded-2xl overflow-hidden border border-hairline bg-surface-base">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 pointer-events-none"
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

      </div>
    </div>
  );
}
