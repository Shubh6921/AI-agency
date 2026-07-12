"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMagnetic } from "@/hooks/use-magnetic";
import { useDrawer } from "@/components/providers/drawer-context";
import { cn } from "@/lib/utils";

export default function Nav() {
  const pathname = usePathname();
  const { toggleDrawer } = useDrawer();

  // Apply magnetic effect to the primary "Let's Talk" CTA
  const talkBtnRef = useMagnetic(40, 0.2) as React.RefObject<HTMLDivElement>;
  const menuBtnRef = useMagnetic(30, 0.25) as React.RefObject<HTMLDivElement>;

  const navLinks = [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-6 py-6 md:px-16 transition-colors duration-300 pointer-events-none">
      <div className="mx-auto max-w-7xl flex items-center justify-between pointer-events-auto">
        
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <img
            src="/logo-text.png"
            alt="AXEN"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] mix-blend-screen"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium tracking-wide text-text-secondary transition-colors duration-300 hover:text-text-primary py-1 group",
                pathname === link.href && "text-text-primary"
              )}
            >
              {link.label}
              {/* Underline wipe hover effect */}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-text-primary scale-x-0 origin-left transition-transform duration-300 ease-out-expo group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="flex items-center gap-6">
          {/* Let's Talk CTA (Magnetic) */}
          <div ref={talkBtnRef} className="hidden sm:block">
            <Link
              href="/contact"
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
