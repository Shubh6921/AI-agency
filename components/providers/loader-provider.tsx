"use client";

import { createContext, useContext, useState, useEffect, Suspense, useCallback } from "react";
import { usePathname } from "next/navigation";
import Loader from "@/components/ui/Loader";

const LoaderContext = createContext({ isLoading: true });

export const useLoader = () => useContext(LoaderContext);

function NavigationWatcher({ onChange }: { onChange: () => void }) {
  const pathname = usePathname();
  useEffect(() => {
    onChange();
  }, [pathname, onChange]);
  return null;
}

interface LoaderProviderProps {
  children: React.ReactNode;
}

export default function LoaderProvider({ children }: LoaderProviderProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Once loading finishes or page changes, we hide the loader overlay
  const handleRouteChangeComplete = useCallback(() => {
    // Add a tiny buffer (300ms) for smoother transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Initial page load loading state timer
    const initialTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    // Global click listener to intercept navigation
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor) {
        const href = anchor.getAttribute("href");
        const targetAttr = anchor.getAttribute("target");

        // Intercept left-clicks to internal paths (skipping hash links and new tabs)
        if (
          href &&
          href.startsWith("/") &&
          !href.startsWith("#") &&
          targetAttr !== "_blank" &&
          !event.defaultPrevented &&
          event.button === 0 &&
          !event.metaKey &&
          !event.ctrlKey &&
          !event.shiftKey &&
          !event.altKey
        ) {
          const currentPath = window.location.pathname;
          // Only show loader if we are actually shifting routes
          if (href !== currentPath) {
            setIsLoading(true);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });
    return () => {
      clearTimeout(initialTimer);
      document.removeEventListener("click", handleAnchorClick, { capture: true });
    };
  }, []);

  return (
    <LoaderContext.Provider value={{ isLoading }}>
      <Suspense fallback={null}>
        <NavigationWatcher onChange={handleRouteChangeComplete} />
      </Suspense>
      <Loader visible={isLoading} />
      <div>
        {children}
      </div>
    </LoaderContext.Provider>
  );
}
