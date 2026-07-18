"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSmoothScroll } from "./smooth-scroll";
import gsap from "gsap";

interface PageTransitionContextType {
  triggerTransition: (url: string, label?: string, isBackwards?: boolean) => void;
  isTransitioning: boolean;
}

const PageTransitionContext = createContext<PageTransitionContextType | null>(null);

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) {
    return {
      triggerTransition: () => {},
      isTransitioning: false,
    };
  }
  return context;
};

type TransitionStyle = "split-vertical" | "grid-matrix" | "zoom-fade";

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useSmoothScroll();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [label, setLabel] = useState("");

  // Use refs for values that must be fresh inside async callbacks / effects
  const isTransitioningRef = useRef(false);
  const isBackwardsRef = useRef(false);
  const lastPathname = useRef(pathname);
  // KEY FIX: store chosen style in a ref so exit useEffect always reads the correct value
  const activeStyleRef = useRef<TransitionStyle>("split-vertical");
  const safetyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Disable browser scroll restoration
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Overlay DOM refs
  const containerRef = useRef<HTMLDivElement>(null);
  const splitTopRef = useRef<HTMLDivElement>(null);
  const splitBottomRef = useRef<HTMLDivElement>(null);
  const overlayPanelRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const gridCellsRef = useRef<HTMLDivElement>(null);

  const getTransitionStyle = (_from: string, to: string): { style: TransitionStyle; labelText: string } => {
    if (to === "/work") return { style: "zoom-fade", labelText: "02 // PORTFOLIO" };
    if (to === "/services") return { style: "split-vertical", labelText: "03 // SERVICES" };
    if (to === "/about") return { style: "split-vertical", labelText: "04 // ABOUT US" };
    if (to === "/contact") return { style: "grid-matrix", labelText: "05 // CONTACT" };
    return { style: "zoom-fade", labelText: "01 // AXEN NODE" };
  };

  // Force-clear all overlays — called as a safety net
  const forceReset = useCallback(() => {
    if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
    gsap.killTweensOf([splitTopRef.current, splitBottomRef.current, overlayPanelRef.current, gridCellsRef.current, textRef.current]);
    gsap.set(textRef.current, { opacity: 0, y: 0 });
    gsap.set([splitTopRef.current, splitBottomRef.current, overlayPanelRef.current, gridCellsRef.current], { display: "none" });
    gsap.set(containerRef.current, { pointerEvents: "none" });
    isTransitioningRef.current = false;
    isBackwardsRef.current = false;
    setIsTransitioning(false);
    if (lenis) lenis.start();
  }, [lenis]);

  const triggerTransition = useCallback(
    (url: string, customLabel?: string, isBackwards = false) => {
      if (isTransitioningRef.current) return;
      isTransitioningRef.current = true;
      isBackwardsRef.current = isBackwards;
      setIsTransitioning(true);

      if (isBackwards && typeof window !== "undefined") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).__axen_backwards_entry = true;
      }

      const { style: chosenStyle, labelText } = getTransitionStyle(pathname, url);
      // Store in ref — NOT just state — so exit effect always gets the right value
      activeStyleRef.current = chosenStyle;
      setLabel(customLabel || labelText);

      if (lenis) lenis.stop();
      gsap.set(containerRef.current, { pointerEvents: "all" });

      // Kill leftover tweens
      gsap.killTweensOf([splitTopRef.current, splitBottomRef.current, overlayPanelRef.current, gridCellsRef.current, textRef.current]);

      const tl = gsap.timeline({
        onComplete: () => {
          if (!isBackwards) {
            window.scrollTo(0, 0);
            if (lenis) lenis.scrollTo(0, { immediate: true });
          }
          router.push(url, { scroll: false });
        },
      });

      // ENTRY: cover the screen
      if (chosenStyle === "split-vertical") {
        gsap.set(splitTopRef.current, { yPercent: -100, display: "block" });
        gsap.set(splitBottomRef.current, { yPercent: 100, display: "block" });
        tl.to([splitTopRef.current, splitBottomRef.current], {
          yPercent: 0,
          duration: 0.5,
          ease: "expo.inOut",
          stagger: 0.03,
        });
      } else if (chosenStyle === "grid-matrix") {
        const cells = gridCellsRef.current?.querySelectorAll(".matrix-cell");
        gsap.set(gridCellsRef.current, { display: "grid" });
        if (cells) {
          gsap.set(cells, { scaleY: 0, opacity: 0 });
          tl.to(cells, {
            scaleY: 1, opacity: 1,
            duration: 0.45,
            ease: "power3.inOut",
            stagger: { grid: [1, 6], from: "random", amount: 0.2 },
          });
        }
      } else {
        // zoom-fade: solid dark overlay
        gsap.set(overlayPanelRef.current, { opacity: 0, display: "block" });
        tl.to(overlayPanelRef.current, { opacity: 1, duration: 0.38, ease: "power2.inOut" });
      }

      // Show label card on top
      tl.fromTo(
        textRef.current,
        { opacity: 0, scale: 0.9, y: 18 },
        { opacity: 1, scale: 1, y: 0, duration: 0.28, ease: "back.out(1.4)" },
        "-=0.18"
      );

      // Safety net: if navigation never completes, force clear after 4s
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
      safetyTimerRef.current = setTimeout(forceReset, 4000);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lenis, router, pathname, forceReset]
  );

  // EXIT animation — fires when pathname changes after router.push
  useEffect(() => {
    if (!isTransitioningRef.current) {
      lastPathname.current = pathname;
      return;
    }

    if (pathname === lastPathname.current) return;

    // Clear safety timer — navigation succeeded
    if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
    lastPathname.current = pathname;

    // Scroll reset for forward transitions only
    if (!isBackwardsRef.current) {
      window.scrollTo(0, 0);
      if (lenis) lenis.scrollTo(0, { immediate: true });
    }

    // Read style from ref — always fresh, never stale
    const style = activeStyleRef.current;

    // Kill any still-running entry tweens before exiting
    gsap.killTweensOf([splitTopRef.current, splitBottomRef.current, overlayPanelRef.current, gridCellsRef.current, textRef.current]);

    const tl = gsap.timeline({
      onComplete: () => {
        // Hard reset every element
        gsap.set(textRef.current, { opacity: 0, y: 0, scale: 1 });
        gsap.set([splitTopRef.current, splitBottomRef.current, overlayPanelRef.current, gridCellsRef.current], { display: "none" });
        // Reset split panels to their off-screen starting positions
        gsap.set(splitTopRef.current, { yPercent: -100 });
        gsap.set(splitBottomRef.current, { yPercent: 100 });
        gsap.set(overlayPanelRef.current, { opacity: 0 });
        gsap.set(containerRef.current, { pointerEvents: "none" });
        isTransitioningRef.current = false;
        isBackwardsRef.current = false;
        setIsTransitioning(false);
        if (lenis) lenis.start();
      },
    });

    // Fade label out first
    tl.to(textRef.current, { opacity: 0, y: -14, duration: 0.2, ease: "power2.in" });

    // EXIT: uncover the screen
    if (style === "split-vertical") {
      tl.to(splitTopRef.current, { yPercent: -100, duration: 0.48, ease: "expo.inOut" }, "-=0.05");
      tl.to(splitBottomRef.current, { yPercent: 100, duration: 0.48, ease: "expo.inOut" }, "<");
    } else if (style === "grid-matrix") {
      const cells = gridCellsRef.current?.querySelectorAll(".matrix-cell");
      if (cells && cells.length > 0) {
        tl.to(
          cells,
          { scaleY: 0, opacity: 0, duration: 0.4, ease: "power3.inOut", stagger: { grid: [1, 6], from: "random", amount: 0.16 } },
          "-=0.05"
        );
      }
    } else {
      // zoom-fade
      tl.to(overlayPanelRef.current, { opacity: 0, duration: 0.38, ease: "power2.inOut" }, "-=0.05");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, lenis]);

  return (
    <PageTransitionContext.Provider value={{ triggerTransition, isTransitioning }}>
      {children}

      {/* Global Transition Overlays — always mounted, toggled by display/opacity */}
      <div
        ref={containerRef}
        className="fixed inset-0 z-[99999] pointer-events-none select-none overflow-hidden"
      >
        {/* Split Vertical — top half */}
        <div
          ref={splitTopRef}
          className="absolute top-0 left-0 w-full h-[50vh] bg-[#070708] hidden"
          style={{ transform: "translateY(-100%)" }}
        />
        {/* Split Vertical — bottom half */}
        <div
          ref={splitBottomRef}
          className="absolute bottom-0 left-0 w-full h-[50vh] bg-[#070708] hidden"
          style={{ transform: "translateY(100%)" }}
        />

        {/* Grid Matrix */}
        <div
          ref={gridCellsRef}
          className="absolute inset-0 hidden w-full h-full pointer-events-none"
          style={{ display: "none", gridTemplateColumns: "repeat(6, 1fr)" }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="matrix-cell bg-[#070708] w-full h-full origin-top"
            />
          ))}
        </div>

        {/* Zoom Fade — solid dark overlay */}
        <div
          ref={overlayPanelRef}
          className="absolute inset-0 bg-[#070708] hidden"
        />

        {/* Floating label card */}
        <div
          ref={textRef}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          style={{ opacity: 0 }}
        >
          <div className="bg-[#0b0b0d]/90 border border-white/10 rounded-2xl px-10 py-8 backdrop-blur-md max-w-sm w-full mx-6 text-center space-y-4 shadow-2xl">
            <div className="flex justify-center items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#26C7ff] animate-ping" />
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/40">
                LOADING PROCESS NODE
              </span>
            </div>
            <h2 className="font-display text-lg md:text-xl font-bold uppercase tracking-widest text-white">
              {label}
            </h2>
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#26C7ff]/50 to-transparent mx-auto" />
          </div>
        </div>
      </div>
    </PageTransitionContext.Provider>
  );
}
