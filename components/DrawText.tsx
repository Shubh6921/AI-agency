"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";

interface DrawTextProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
  stagger?: number;
}

export default function DrawText({ text, className = "", duration = 0.08, delay = 0.5, stagger = 0.08 }: DrawTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayChars, setDisplayChars] = useState<string[]>(text.split("").map(() => ""));
  const [activeIndices, setActiveIndices] = useState<boolean[]>(text.split("").map(() => false));
  const [flippingIndices, setFlippingIndices] = useState<boolean[]>(text.split("").map(() => false));
  const hasAnimatedRef = useRef(false);
  const intervalsRef = useRef<NodeJS.Timeout[]>([]);

  const characters = text.split("");
  const flipChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-+#@$%";

  const runTickerAnimation = useCallback(
    (animationDelay = 0) => {
      // Clear any existing intervals
      intervalsRef.current.forEach(clearInterval);
      intervalsRef.current = [];

      // Reset states
      setDisplayChars(text.split("").map(() => ""));
      setActiveIndices(text.split("").map(() => false));
      setFlippingIndices(text.split("").map(() => false));

      const characters = text.split("");
      characters.forEach((targetChar, index) => {
        const letterDelay = animationDelay + index * stagger;

        gsap.delayedCall(letterDelay, () => {
          setFlippingIndices((prev) => {
            const next = [...prev];
            next[index] = true;
            return next;
          });

          let flipCount = 0;
          const maxFlips = 8 + Math.floor(Math.random() * 6);

          const flipInterval = setInterval(() => {
            flipCount++;

            if (flipCount >= maxFlips) {
              clearInterval(flipInterval);
              setDisplayChars((prev) => {
                const next = [...prev];
                next[index] = targetChar;
                return next;
              });
              setActiveIndices((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
              setFlippingIndices((prev) => {
                const next = [...prev];
                next[index] = false;
                return next;
              });
            } else {
              setDisplayChars((prev) => {
                const next = [...prev];
                next[index] = flipChars[Math.floor(Math.random() * flipChars.length)];
                return next;
              });
            }
          }, duration * 1000);

          intervalsRef.current.push(flipInterval);
        });
      });
    },
    [text, duration, stagger]
  );

  useEffect(() => {
    if (!containerRef.current || hasAnimatedRef.current) return;

    const ctx = gsap.context(() => {
      runTickerAnimation(delay);
      hasAnimatedRef.current = true;
    }, containerRef);

    return () => {
      ctx.revert();
      hasAnimatedRef.current = false;
      intervalsRef.current.forEach(clearInterval);
    };
  }, [delay, runTickerAnimation]);

  const handleMouseEnter = () => {
    if (hasAnimatedRef.current) {
      runTickerAnimation(0);
    }
  };

  return (
    <h1
      ref={containerRef}
      className={className}
      onMouseEnter={handleMouseEnter}
      style={{
        lineHeight: 0.9,
        letterSpacing: "0.02em",
        fontFamily: "var(--font-display), sans-serif",
        display: "flex",
        flexWrap: "wrap",
        cursor: "pointer",
      }}
    >
      {characters.map((char, index) => (
        <span
          key={index}
          className="relative inline-block transition-colors duration-100"
          style={{
            backgroundColor: activeIndices[index] ? "#ffffff" : "transparent",
            color: activeIndices[index] ? "#000000" : flippingIndices[index] ? "#ffffff" : "transparent",
            padding: "0.08em 0.05em",
            marginRight: "0.06em",
            minWidth: char === " " ? "0.3em" : undefined,
          }}
        >
          {displayChars[index] || (char === " " ? "\u00A0" : "")}
        </span>
      ))}
    </h1>
  );
}
