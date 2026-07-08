"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useMagnetic<T extends HTMLElement = HTMLDivElement>(range = 50, strength = 0.3) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const bounding = el.getBoundingClientRect();
      const x = clientX - (bounding.left + bounding.width / 2);
      const y = clientY - (bounding.top + bounding.height / 2);

      // Distance formula
      const distance = Math.sqrt(x * x + y * y);

      if (distance < range) {
        // Pull element towards cursor
        gsap.to(el, {
          x: x * strength,
          y: y * strength,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        // Push element back to center if just outside range
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.4,
          ease: "elastic.out(1, 0.3)",
        });
      }
    };

    const handleMouseLeave = () => {
      // Elastic spring back to center
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [range, strength]);

  return ref;
}
