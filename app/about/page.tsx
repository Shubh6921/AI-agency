"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MicroLabel from "@/components/ui/MicroLabel";
import Button from "@/components/ui/Button";

import { usePathname } from "next/navigation";
import { useSmoothScroll } from "@/components/providers/smooth-scroll";

gsap.registerPlugin(ScrollTrigger);

interface ValueCardProps {
  title: string;
  desc: string;
  idx: number;
}

function ValueCard({ title, desc, idx }: ValueCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable hover effects on mobile/touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const card = cardRef.current;
    const inner = innerRef.current;
    if (!card || !inner) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const rotateY = ((x - xc) / xc) * 12; // max 12deg Y rotation
    const rotateX = -((y - yc) / yc) * 12; // max 12deg X rotation

    gsap.to(inner, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.4,
      overwrite: "auto",
    });
  };

  const handleMouseEnter = () => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const card = cardRef.current;
    if (card) {
      gsap.to(card, {
        "--spotlight-opacity": 1,
        duration: 0.3,
      });
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const inner = innerRef.current;
    if (!card || !inner) return;

    gsap.to(inner, {
      rotateX: 0,
      rotateY: 0,
      ease: "power2.out",
      duration: 0.6,
      overwrite: "auto",
    });

    gsap.to(card, {
      "--spotlight-opacity": 0,
      duration: 0.4,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="value-card-reveal relative group rounded-2xl p-[1px] overflow-hidden transition-all duration-300"
      style={{
        background: `radial-gradient(300px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(38, 199, 255, calc(var(--spotlight-opacity, 0) * 0.35)), #232326 80%)`,
      } as React.CSSProperties}
    >
      {/* 3D tilt inner container */}
      <div
        ref={innerRef}
        className="w-full h-full bg-surface-base rounded-[15px] p-8 space-y-4 relative overflow-hidden transition-colors duration-500 hover:bg-[#0f0f11]"
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        {/* Dynamic Inner Background Spotlight Glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(38, 199, 255, calc(var(--spotlight-opacity, 0) * 0.05)), transparent 80%)`,
          }}
        />

        {/* Content with 3D Pop (translateZ) */}
        <div className="relative z-10 space-y-4" style={{ transform: "translateZ(25px)" }}>
          <span className="font-display text-text-tertiary text-sm font-semibold block transition-colors duration-300 group-hover:text-[#26C7ff]/70">
            0{idx + 1} /
          </span>
          <h3 className="font-display text-xl font-bold uppercase tracking-tight text-text-primary transition-colors duration-300 group-hover:text-[#FAFAFA]">
            {title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed font-sans transition-colors duration-300 group-hover:text-text-primary/80">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const pathname = usePathname();
  const lenis = useSmoothScroll();

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
      // Animate Shubham Rana name chars
      const nameChars = gsap.utils.toArray(".name-char");
      if (nameChars.length > 0) {
        gsap.fromTo(
          nameChars,
          { opacity: 0, y: 15, rotateX: 60 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.035,
            ease: "power4.out",
            scrollTrigger: {
              trigger: nameRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Staggered reveal for cards
      const cards = gsap.utils.toArray(".value-card-reveal");
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 80,
            scale: 0.92,
            rotateX: 12,
            transformPerspective: 1200,
            transformOrigin: "top center",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: ".values-grid-trigger",
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Standard reveal up for other sections
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
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-transparent text-text-primary px-6 md:px-16 py-12 md:py-24">
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
        <section className="border-t border-hairline pt-20 mb-24 md:mb-32 space-y-12 values-grid-trigger">
          <div className="reveal-up">
            <MicroLabel>Our Values</MicroLabel>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <ValueCard
                key={v.title}
                title={v.title}
                desc={v.desc}
                idx={idx}
              />
            ))}
          </div>
        </section>

        {/* 3. FOUNDER SPOTLIGHT */}
        <section className="reveal-up border-t border-hairline pt-20 mb-24 md:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-5 aspect-square w-full rounded-2xl border border-hairline bg-black p-4 flex flex-col justify-center items-center overflow-hidden">
              <pre 
                className="font-mono text-[5px] sm:text-[6px] md:text-[5px] lg:text-[6px] xl:text-[7px] leading-[1.05] text-[#26C7ff] select-none text-center"
                style={{ textShadow: "0 0 6px rgba(38, 199, 255, 0.5)" }}
              >
{`                                                             
..                                                          
                                                             
                                                             
                        ......:::+*+.        ...............
.......................,;*??%SSS%**%SS*.....................
,,,,,,,,,,,,,,,,,,,,,,:%##SS###SSSSSSSSSS+,................,
,,,,,,,,,,,,,,,,,,,,.,S####S#@##SSSS#SSSS##?,               
                     S#####SS##SSS##SS##@SS#?,              
                    ;@#@@##S%SS**%%##S#######+              
                    *@@@S?+;:. ;+;*?###@#####.              
                    #@@%*?%?;;...,;?#@@@##@@;               
                     ;@;:;+?%*,  +%%%*++?@@S                
                    .+%..:;;:,.  ,;++;,.;S;                 
                     .;.                :;.                 
                      .;.               .+:                  
                       .,    ;%??*    .:                    
                        ,:.++*;:;***..:                     
                         :+:,,...,,,;;                      
                          *;::++;:,:+                       
                         ,:+*,...,+++                       
                    ..?@?::,:;***;:::?#:                    
          .;*???*+%@@##@+,,,,,::::,::%@#@@%S@@@@@@?.        
       ;#@###########@#@@*,,.,,,,,,:S@##@@##########@%.     
     %@####################+.....,?##################S@?    
   ;@####################SSS###S###SS####################.  
 .###########################SSSS##################S####S@; 
?###################################################@####S#+
@#@@@@@#@@@@@@@#@@@@@@@##@@@#@@@@@@####@@#######@@@#@#######`}
              </pre>
              <div className="mt-4 font-mono text-[9px] text-[#26C7ff]/75 tracking-[0.25em] uppercase">
                SYS.LOG // SHUBHAM_RANA.EXE
              </div>
            </div>

            <div className="md:col-span-7 space-y-6">
              <MicroLabel>Leadership</MicroLabel>
              <h3
                ref={nameRef}
                className="font-display text-3xl font-black uppercase tracking-tight text-text-primary flex flex-wrap gap-x-[0.25em]"
                style={{ perspective: 1000, transformStyle: "preserve-3d" }}
              >
                {"Shubham Rana".split(" ").map((word, wIdx) => (
                  <span key={wIdx} className="inline-block whitespace-nowrap">
                    {word.split("").map((char, cIdx) => (
                      <span
                        key={cIdx}
                        className="name-char inline-block"
                        style={{ transformOrigin: "bottom center" }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                ))}
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

      {/* Link to Insights */}
      <div className="h-[16vh] flex flex-col items-center justify-center gap-4 border-t border-hairline/20 mt-16">
        <span className="font-mono text-[10px] tracking-[0.3em] text-text-tertiary uppercase">Next Chapter</span>
        <Link
          href="/insights"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              const target = document.getElementById("insights");
              if (target && lenis) {
                lenis.scrollTo(target);
              }
            }
          }}
          className="font-display text-xl md:text-2xl font-extralight tracking-widest uppercase text-text-secondary hover:text-[#26C7ff] transition-colors duration-300"
        >
          Insights &amp; Ideas →
        </Link>
      </div>

    </div>
  );
}
