"use client";

import { useEffect, useRef } from "react";
import { usePageTransition } from "@/components/providers/page-transition-provider";
import { useRouter } from "next/navigation";

/**
 * Triggers a page transition when the user scrolls UP at the very top of the page.
 * Uses a cumulative delta threshold so a single accidental wheel tick won't fire it.
 *
 * @param targetUrl  - Route to transition to
 * @param label      - Display label shown during transition
 * @param prefetch   - Optional: also prefetch the target route on mount
 */
export function useReverseScroll(targetUrl: string, label: string, prefetch = true) {
  const { triggerTransition } = usePageTransition();
  const triggerRef = useRef(triggerTransition);
  const router = useRouter();
  const hasTriggeredRef = useRef(false);

  // Keep the transition function ref fresh
  useEffect(() => {
    triggerRef.current = triggerTransition;
  });

  // Prefetch the target on mount
  useEffect(() => {
    if (prefetch) router.prefetch(targetUrl);
  }, [router, targetUrl, prefetch]);

  useEffect(() => {
    // Reset guard when component mounts (new page visit)
    hasTriggeredRef.current = false;

    // Guard: ignore scroll events for the first 1000ms to allow layout,
    // scroll position initialization, and scroll inertia to settle.
    let isReady = false;
    const readyTimer = setTimeout(() => {
      isReady = true;
    }, 1000);

    // Accumulate scroll delta while at the top.
    // We need the user to intentionally scroll up ~80px worth of delta
    // before triggering — prevents accidental fires from a single wheel tick.
    let accumulatedDelta = 0;

    const handleWheel = (e: WheelEvent) => {
      if (!isReady || hasTriggeredRef.current) return;

      // If they scroll down, reset the accumulator
      if (window.scrollY > 5 || e.deltaY > 0) {
        accumulatedDelta = 0;
        return;
      }

      // Accumulate upward delta only when at the top
      accumulatedDelta += Math.abs(e.deltaY);

      if (accumulatedDelta > 80) {
        hasTriggeredRef.current = true;
        triggerRef.current(targetUrl, label, true);
      }
    };

    // Touch support: detect upward swipe from top
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (!isReady || hasTriggeredRef.current) return;
      if (window.scrollY > 5) return;
      const deltaY = e.changedTouches[0].clientY - touchStartY;
      // Positive deltaY means finger moved down = scroll UP
      if (deltaY > 60) {
        hasTriggeredRef.current = true;
        triggerRef.current(targetUrl, label, true);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      clearTimeout(readyTimer);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [targetUrl, label]);
}
