"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefreshCw } from "lucide-react";

export default function LoaderDemo() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isRestarting, setIsRestarting] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Simulation of loading progress (0 to 100) over 3 seconds
  useEffect(() => {
    if (isRestarting) return;
    setIsComplete(false);
    setProgress(0);

    const duration = 2800; // 2.8s loading
    const start = performance.now();

    let frameId: number;

    const update = (time: number) => {
      const elapsed = time - start;
      const pct = Math.min(elapsed / duration, 1);
      const currentProgress = Math.floor(pct * 100);

      setProgress(currentProgress);

      if (pct < 1) {
        frameId = requestAnimationFrame(update);
      } else {
        setIsComplete(true);
      }
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [isRestarting]);

  // GSAP animation for the logo fade/glow entrance and pulse
  useGSAP(() => {
    if (isRestarting) return;

    // Reset overlay and content states
    gsap.set(overlayRef.current, { yPercent: 0, opacity: 1, pointerEvents: "all" });
    gsap.set(contentRef.current, { opacity: 0, y: 20 });
    
    // Smooth logo fade-in
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.96 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    );

    // Fade in futuristic HUD elements
    gsap.fromTo(
      hudRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.5, ease: "power2.out" }
    );

    // Dynamic glow pulsing on the logo
    gsap.to(logoRef.current, {
      opacity: 0.85,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.5,
    });
  }, { scope: containerRef, dependencies: [isRestarting] });

  // Handle exiting animation of the loader overlay
  useEffect(() => {
    if (isComplete) {
      const tl = gsap.timeline();

      // Smoothly fade out the logo and HUD elements
      tl.to([logoRef.current, hudRef.current], {
        opacity: 0,
        scale: 1.04,
        duration: 0.6,
        ease: "power2.inOut",
        delay: 0.2,
      });

      // Slide up the overlay to reveal the landing page
      tl.to(
        overlayRef.current,
        {
          yPercent: -100,
          duration: 0.9,
          ease: "power4.inOut",
        },
        "-=0.1"
      );

      // Fade in landing page content
      tl.to(
        contentRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }
  }, [isComplete]);

  const handleReplay = () => {
    setIsRestarting(true);
    setTimeout(() => {
      setIsRestarting(false);
    }, 100);
  };

  // Circumference for circular progress (r=26)
  const strokeCircumference = 2 * Math.PI * 26; // ~163.36
  const strokeDashoffset = strokeCircumference - (strokeCircumference * progress) / 100;

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#07070a] text-white overflow-hidden font-sans select-none"
    >
      {/* Hide global layouts */}
      <style dangerouslySetInnerHTML={{__html: `
        header { display: none !important; }
        footer { display: none !important; }
        body > div > div > div.relative.min-h-screen > div.w-full { display: none !important; }
        body > div > div > div.relative.min-h-screen { padding-top: 0 !important; }
      `}} />

      {/* --- PRESETS & BACKGROUND --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,24,48,0.2)_0%,transparent_75%)] pointer-events-none" />

      {/* --- THE LOADER OVERLAY (ANIMATING THIS ONLY) --- */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/85 backdrop-blur-2xl"
      >
        {/* Futuristic Outer Rotating Reticle */}
        <div className="absolute w-[440px] h-[440px] max-w-[95vw] max-h-[95vw] pointer-events-none flex items-center justify-center opacity-30">
          <svg className="w-full h-full animate-[spin_40s_linear_infinite]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="none" stroke="#00d2ff" strokeWidth="0.25" strokeDasharray="4 8 2 12" />
            <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.1" />
          </svg>
        </div>
        <div className="absolute w-[400px] h-[400px] max-w-[90vw] max-h-[90vw] pointer-events-none flex items-center justify-center opacity-20">
          <svg className="w-full h-full animate-[spin_25s_linear_infinite_reverse]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#00d2ff" strokeWidth="0.15" strokeDasharray="30 15 10 5" />
          </svg>
        </div>

        {/* Center Logo Wrapper */}
        <div
          ref={logoRef}
          className="relative w-80 max-w-[85vw] flex items-center justify-center transition-all duration-300"
        >
          {/* Subtle backglow pulse */}
          <div className="absolute w-64 h-64 bg-[#0066ff]/5 rounded-full blur-3xl opacity-40 pointer-events-none" />

          {/* Exact Logo Image */}
          <img
            src="/logo.png"
            alt="AXEN Logo"
            className="w-full h-auto object-contain select-none pointer-events-none mix-blend-screen"
          />
        </div>

        {/* HUD/Telemetry Details and Circular Progress Ring */}
        <div
          ref={hudRef}
          className="absolute bottom-16 flex flex-col items-center gap-4 text-center pointer-events-none"
        >
          {/* Circular Loader with Monospace Percentage inside */}
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg width="64" height="64" viewBox="0 0 64 64">
              {/* Outer Track */}
              <circle
                cx="32"
                cy="32"
                r="26"
                fill="none"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="1"
              />
              {/* Cyan Progress Ring */}
              <circle
                cx="32"
                cy="32"
                r="26"
                fill="none"
                stroke="#00d2ff"
                strokeWidth="1.5"
                strokeDasharray={strokeCircumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                transform="rotate(-90 32 32)"
                className="transition-all duration-75 ease-out"
                style={{ filter: "drop-shadow(0 0 4px rgba(0, 210, 255, 0.5))" }}
              />
              {/* Percentage Text */}
              <text
                x="32"
                y="35.5"
                fill="rgba(255, 255, 255, 0.85)"
                fontSize="8"
                fontWeight="light"
                fontFamily="monospace"
                textAnchor="middle"
                className="tabular-nums letter-spacing-tight"
              >
                {progress.toString().padStart(2, "0")}%
              </text>
            </svg>
          </div>

          {/* Micro Telemetry Details */}
          <div className="flex flex-col items-center gap-1 font-mono text-[9px] tracking-[0.25em] text-white/40 uppercase">
            <span>CORE_SYNCING // NODE_{progress.toString().padStart(2, "0")}</span>
            <span className="text-[8px] opacity-60">SECURE SHELL CONNECTION ACTIVE</span>
          </div>
        </div>
      </div>

      {/* --- REVEALED DEMO LANDING PAGE --- */}
      <div
        ref={contentRef}
        className="w-full min-h-screen flex flex-col justify-between px-6 py-8 md:px-16 md:py-12 opacity-0"
      >
        <header className="w-full max-w-7xl mx-auto flex justify-between items-center z-10">
          <span className="font-bold text-lg tracking-widest text-white">
            AXEN<span className="text-[#00d2ff] font-black">.</span>
          </span>

          <button
            onClick={handleReplay}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-semibold tracking-wider text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:border-[#00d2ff]/30"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            REPLAY LOADER
          </button>
        </header>

        <main className="w-full max-w-4xl mx-auto flex flex-col justify-center items-start gap-8 flex-grow py-24 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00d2ff]/20 bg-[#00d2ff]/5 text-[10px] font-bold tracking-[0.2em] text-[#00d2ff] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] animate-ping" />
            PROTOTYPE PREVIEW
          </div>

          <h1 className="text-4xl md:text-7xl font-extralight tracking-tight uppercase leading-[0.95]">
            Where intelligence meets <br className="hidden md:inline" />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#00d2ff]/80">
              immersive craft.
            </span>
          </h1>

          <p className="text-sm md:text-base text-white/60 font-light max-w-xl leading-relaxed">
            This demo features the exact user logo blended using mix-blend-screen, wrapped 
            by rotating futuristic hud reticles, and accompanied by a small circular progress 
            ring filling with a glowing cyan stroke.
          </p>
        </main>

        <footer className="w-full max-w-7xl mx-auto flex justify-between items-center border-t border-white/5 pt-6 text-[10px] text-white/40 uppercase tracking-widest z-10">
          <span>Axen Agency Prototype</span>
        </footer>
      </div>
    </div>
  );
}
