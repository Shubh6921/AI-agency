"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { useMagnetic } from "@/hooks/use-magnetic";

export default function Footer() {
  const topBtnRef = useMagnetic(30, 0.25) as React.RefObject<HTMLButtonElement>;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-canvas border-t border-hairline text-text-secondary py-16 md:py-24 px-6 md:px-16 relative z-10">
      <div className="mx-auto max-w-7xl">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16 md:mb-24">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2 space-y-6">
            <span className="font-display text-3xl font-black uppercase tracking-widest text-text-primary">
              AXEN
            </span>
            <p className="max-w-sm text-sm text-text-secondary leading-relaxed">
              We combine AI engineering with premium UI/UX design to build websites and products that feel years ahead of the competition.
            </p>
          </div>

          {/* Column 2: Sitemap Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-primary">
              ✦ Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/work" className="hover:text-text-primary transition-colors duration-300">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-text-primary transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-text-primary transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-text-primary transition-colors duration-300">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-text-primary transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact coordinates */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-primary">
              ✦ Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@axen.ai" className="hover:text-text-primary transition-colors duration-300">
                  hello@axen.ai
                </a>
              </li>
              <li>
                <a href="tel:+18005552936" className="hover:text-text-primary transition-colors duration-300">
                  +1 (800) 555-AXEN
                </a>
              </li>
              <li className="text-text-tertiary">
                Remote-first, global team.
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-hairline pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyrights */}
          <div className="text-xs text-text-tertiary flex flex-col sm:flex-row gap-2 sm:gap-6 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} AXEN. All rights reserved.</span>
            <div className="flex gap-4 justify-center">
              <Link href="/privacy" className="hover:text-text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-text-primary transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Back to Top (Magnetic Button) */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
              Back to Top
            </span>
            <button
              ref={topBtnRef}
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-hairline bg-surface-base hover:bg-surface-raised hover:text-text-primary transition-colors duration-300"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
