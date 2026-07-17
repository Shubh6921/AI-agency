"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMagnetic } from "@/hooks/use-magnetic";
import { useDrawer } from "@/components/providers/drawer-context";

import { useSmoothScroll } from "@/components/providers/smooth-scroll";

export default function Nav() {
  const pathname = usePathname();
  const { toggleDrawer } = useDrawer();
  const lenis = useSmoothScroll();

  // Apply magnetic effect to the primary "Let's Talk" CTA
  const talkBtnRef = useMagnetic(40, 0.2) as React.RefObject<HTMLDivElement>;
  const menuBtnRef = useMagnetic(30, 0.25) as React.RefObject<HTMLDivElement>;



  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const target = document.getElementById(targetId);
      if (target && lenis) {
        lenis.scrollTo(target);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-6 py-6 md:px-16 transition-colors duration-300 pointer-events-none">
      <div className="mx-auto max-w-7xl flex items-center justify-between pointer-events-auto">
        
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <Image
            src="/logo-text.png"
            alt="AXEN"
            width={120}
            height={48}
            priority
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] mix-blend-screen"
          />
        </Link>



        {/* CTA Actions */}
        <div className="flex items-center gap-6">
          {/* Let's Talk CTA (Magnetic) */}
          <div ref={talkBtnRef} className="hidden sm:block">
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="inline-flex h-10 items-center justify-center rounded-full bg-text-primary px-6 text-sm font-medium text-canvas transition-colors duration-300 hover:bg-text-secondary"
            >
              Let&apos;s talk
            </Link>
          </div>

          {/* Hamburger Menu Icon (Magnetic) */}
          <div ref={menuBtnRef}>
            <button
              onClick={toggleDrawer}
              aria-label="Open menu"
              className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-full border border-hairline bg-surface-base hover:bg-surface-raised transition-colors duration-300"
            >
              <span className="w-5 h-[1.5px] bg-text-primary" />
              <span className="w-5 h-[1.5px] bg-text-primary" />
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
