"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface LoaderProps {
  visible: boolean;
}

export default function Loader({ visible }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const pulseRef = useRef<gsap.core.Tween | null>(null);
  const progressTweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    if (visible) {
      // Reset progress
      setProgress(0);

      // Lock body scrolling when loader starts
      document.body.style.overflow = "hidden";

      // Reset overlay position to overlay the screen
      gsap.set(overlayRef.current, { yPercent: 0, opacity: 1, pointerEvents: "all" });

      const tl = gsap.timeline();
      // Fade in logo
      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
      );

      // Fade in futuristic HUD elements
      tl.fromTo(
        hudRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      );

      // Start gentle breathe loop on the logo
      tl.add(() => {
        if (pulseRef.current) pulseRef.current.kill();
        pulseRef.current = gsap.to(logoRef.current, {
          opacity: 0.85,
          duration: 1.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Animate progress up to 98% (crawling)
      if (progressTweenRef.current) progressTweenRef.current.kill();
      const progressObj = { value: 0 };
      progressTweenRef.current = gsap.to(progressObj, {
        value: 98,
        duration: 3.5,
        ease: "power1.out",
        onUpdate: () => {
          setProgress(Math.floor(progressObj.value));
        },
      });
    } else {
      // Unlock body scrolling
      document.body.style.overflow = "";

      if (pulseRef.current) pulseRef.current.kill();
      if (progressTweenRef.current) progressTweenRef.current.kill();

      // Instantly accelerate progress to 100%
      const progressObj = { value: progress };
      const exitTimeline = gsap.timeline();

      exitTimeline.to(progressObj, {
        value: 100,
        duration: 0.3,
        ease: "power2.out",
        onUpdate: () => {
          setProgress(Math.floor(progressObj.value));
        },
      });

      // Fade out logo and HUD elements
      exitTimeline.to(
        [logoRef.current, hudRef.current],
        {
          opacity: 0,
          scale: 1.04,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "+=0.1"
      );

      // Slide up overlay
      exitTimeline.to(
        overlayRef.current,
        {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
        },
        "-=0.2"
      );
      
      // Disable clicks on overlay after it exits
      exitTimeline.set(overlayRef.current, { pointerEvents: "none" });
    }
  }, { scope: containerRef, dependencies: [visible] });

  // Cleanup scroll lock on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
      if (pulseRef.current) pulseRef.current.kill();
      if (progressTweenRef.current) progressTweenRef.current.kill();
    };
  }, []);

  // Circumference for circular progress (r=26)
  const strokeCircumference = 2 * Math.PI * 26; // ~163.36
  const strokeDashoffset = strokeCircumference - (strokeCircumference * progress) / 100;

  return (
    <div ref={containerRef} className="relative z-[9999]">
      <div
        ref={overlayRef}
        className="fixed inset-0 flex flex-col items-center justify-center bg-black/85 backdrop-blur-2xl select-none pointer-events-auto"
      >
        {/* Futuristic Outer Rotating Reticles */}
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
          className="relative w-80 max-w-[85vw] flex items-center justify-center opacity-0"
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
          className="absolute bottom-16 flex flex-col items-center gap-4 text-center opacity-0"
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
    </div>
  );
}
