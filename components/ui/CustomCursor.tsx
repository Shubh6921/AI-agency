"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    // Hide default cursor on desktop
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop) return;

    document.body.style.cursor = "none";

    // Set initial positions
    gsap.set(cursor, { xPercent: -50, yPercent: -50, scale: 0 });
    gsap.set(dot, { xPercent: -50, yPercent: -50 });

    // QuickTo handlers for high-performance mouse tracking
    const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3.out" });
    const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3.out" });

    const xToDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3.out" });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3.out" });

    // Show cursor on first movement
    let hasMoved = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!hasMoved) {
        gsap.to(cursor, { scale: 1, duration: 0.3 });
        hasMoved = true;
      }
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToDot(e.clientX);
      yToDot(e.clientY);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor]");
      
      if (interactive) {
        setIsActive(true);
        const customText = interactive.getAttribute("data-cursor");
        
        if (customText) {
          setCursorText(customText);
          gsap.to(cursor, {
            width: 80,
            height: 80,
            backgroundColor: "#FAFAFA",
            mixBlendMode: "normal",
            borderColor: "transparent",
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(dot, { opacity: 0, duration: 0.2 });
        } else {
          // Default link hover: magnetic scale / mix-blend difference
          gsap.to(cursor, {
            scale: 1.5,
            backgroundColor: "#FAFAFA",
            mixBlendMode: "difference",
            borderColor: "transparent",
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(dot, { opacity: 0, duration: 0.2 });
        }
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor]");
      
      if (interactive) {
        setIsActive(false);
        setCursorText("");
        gsap.to(cursor, {
          width: 32,
          height: 32,
          scale: 1,
          backgroundColor: "transparent",
          mixBlendMode: "normal",
          borderColor: "#FAFAFA",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(dot, { opacity: 1, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      {/* Outer Follower Ring */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:flex items-center justify-center rounded-full border border-text-primary/40 bg-transparent transition-transform duration-100 ease-out"
        style={{
          width: "32px",
          height: "32px",
        }}
      >
        <span
          ref={textRef}
          className="font-display text-[9px] font-bold uppercase tracking-wider text-canvas opacity-0 transition-opacity duration-200"
          style={{
            opacity: isActive && cursorText ? 1 : 0,
          }}
        >
          {cursorText}
        </span>
      </div>

      {/* Inner Pinpoint Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden md:block h-1.5 w-1.5 rounded-full bg-text-primary"
      />
    </>
  );
}
