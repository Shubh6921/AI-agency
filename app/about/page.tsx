"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MicroLabel from "@/components/ui/MicroLabel";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const values = [
    { title: "Driven by excellence", desc: "We settle for nothing less than absolute precision in both design and code." },
    { title: "Honesty & authenticity", desc: "No hype, no buzzwords. Just honest benchmarks and engineering facts." },
    { title: "Systems built to last", desc: "We write clean, sustainable architectures that support multi-year scaling." },
    { title: "Purposeful decisions", desc: "Every single component, animation, and pixel has a structural purpose." },
    { title: "Real impact over trends", desc: "We build tangible AI systems that solve real operations, not fleeting experiments." },
    { title: "Experience & adaptability", desc: "A seasoned remote team that integrates seamlessly to ship fast." },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
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

  return (
    <div ref={containerRef} className="w-full bg-canvas text-text-primary px-6 md:px-16 py-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* 1. IDENTITY STATEMENT */}
        <section className="reveal-up mb-24 md:mb-32 space-y-8">
          <MicroLabel>Who We Are</MicroLabel>
          <h1 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tight leading-[1.0] max-w-5xl">
            Intelligence,<br />Engineered.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
            <div className="md:col-span-8">
              <p className="text-lg md:text-2xl text-text-secondary leading-relaxed font-sans">
                At AXEN, we combine autonomous AI technology with world-class digital design to build custom platforms and automated agent systems. We believe the modern internet deserves better software, not more noise.
              </p>
            </div>
          </div>
        </section>

        {/* 2. VALUES GRID */}
        <section className="reveal-up border-t border-hairline pt-20 mb-24 md:mb-32 space-y-12">
          <MicroLabel>Our Values</MicroLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div
                key={v.title}
                className="border border-hairline rounded-2xl p-8 bg-surface-base hover:border-text-secondary/40 transition-colors duration-500 space-y-4"
              >
                <span className="font-display text-text-tertiary text-sm font-semibold">0{idx + 1} /</span>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-text-primary">
                  {v.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed font-sans">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. FOUNDER SPOTLIGHT */}
        <section className="reveal-up border-t border-hairline pt-20 mb-24 md:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-5 relative aspect-square w-full rounded-2xl overflow-hidden border border-hairline bg-surface-base">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRyV3nWgJgmlcNpcz5TXh40gLX4eVOtc5WsccVKDlPHh5rzlV1Qkrm3QXTlvNoGSn_ysj3JWhgoSg5b0ssg2fNK-y4PHHywNateW3eJfgfma493yksy1UHuQhot9fHmsa6-ZV_lnVaeNGm206m1YGnir5SbzAW6GpRzC-OikIoAY0S4RuZvvo2Uy5ReUmsveSl8oI64A7_6XwT9-Xh6OZ6iX6j1ROJ0VoN5x3wBaT59GcDzW3kgNjRyw"
                alt="Founder Spotlight"
                fill
                sizes="(max-width: 768px) 100vw, 35vw"
                className="object-cover grayscale pointer-events-none"
              />
            </div>

            <div className="md:col-span-7 space-y-6">
              <MicroLabel>Leadership</MicroLabel>
              <h3 className="font-display text-3xl font-black uppercase tracking-tight text-text-primary">
                Marcus Vance
              </h3>
              <p className="text-xs text-text-tertiary uppercase tracking-wider font-semibold">
                ✦ Founder & Head of AI Systems
              </p>
              
              <div className="border-l-2 border-text-primary/20 pl-6 my-6 italic text-text-secondary text-lg leading-relaxed font-sans">
                &ldquo;We don&apos;t build experiments. We design and deliver production-grade systems that run businesses autonomously.&rdquo;
              </div>

              <div className="pt-2">
                <Button href="/contact" variant="ghost" magnetic>
                  Get in touch
                </Button>
              </div>
            </div>

          </div>
        </section>

        {/* 4. WHO WE ARE NOT FOR (Direct Exclusion Device) */}
        <section className="reveal-up border-t border-hairline pt-20 mb-16">
          <div className="bg-surface-base border border-hairline rounded-2xl p-8 md:p-16 space-y-6">
            <MicroLabel>Positioning</MicroLabel>
            <h3 className="font-display text-2xl md:text-4xl font-black uppercase tracking-tight text-text-primary leading-tight max-w-3xl">
              Who we are not for
            </h3>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-4xl font-sans">
              AXEN does not build low-cost landing pages, boilerplate templates, or quick integrations. We partner with ambitious brands, enterprises, and funded startups that recognize custom AI infrastructure and high-fidelity design are vital to their market longevity. If you want cheap, fast, and generic, we are not the right fit.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
