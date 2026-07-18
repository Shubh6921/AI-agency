"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useDrawer } from "@/components/providers/drawer-context";
import { useMagnetic } from "@/hooks/use-magnetic";

import { usePathname } from "next/navigation";
import { useSmoothScroll } from "@/components/providers/smooth-scroll";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const drawerVariants = {
  hidden: { x: "100%" },
  visible: { 
    x: 0, 
    transition: { 
      type: "spring", 
      damping: 30, 
      stiffness: 200,
      staggerChildren: 0.1,
      delayChildren: 0.2
    } 
  },
  exit: { 
    x: "100%", 
    transition: { 
      type: "spring", 
      damping: 30, 
      stiffness: 200,
      staggerChildren: 0.05,
      staggerDirection: -1
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } }
};

export default function EnquiryDrawer() {
  const { isOpen, closeDrawer } = useDrawer();
  const closeBtnRef = useMagnetic<HTMLButtonElement>(30, 0.25);
  const pathname = usePathname();
  const lenis = useSmoothScroll();

  // Close on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeDrawer]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === "/") {
      e.preventDefault();
      closeDrawer();
      setTimeout(() => {
        const target = document.getElementById(targetId);
        if (!target) return;
        if (lenis) {
          lenis.start(); // Ensure lenis isn't paused
          lenis.scrollTo(target);
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 600); // Wait for drawer exit animation to complete
    } else {
      // On sub-pages, close drawer and let Next.js navigate to /#section
      closeDrawer();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Blurred Backdrop */}
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            onClick={closeDrawer}
            className="fixed inset-0 z-[100] bg-canvas/80 backdrop-blur-md"
          />

          {/* Drawer Container */}
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={drawerVariants}
            className="fixed right-0 top-0 bottom-0 z-[101] w-full max-w-lg bg-surface-base border-l border-hairline p-8 md:p-16 flex flex-col justify-between shadow-2xl"
          >
            {/* Header / Close Trigger */}
            <div className="flex justify-between items-center">
              <span className="font-display text-lg font-black uppercase tracking-widest text-text-primary">
                AXEN
              </span>
              <button
                ref={closeBtnRef}
                onClick={closeDrawer}
                aria-label="Close menu"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-hairline bg-surface-raised hover:bg-text-primary hover:text-canvas transition-colors duration-300"
              >
                <X size={18} />
              </button>
            </div>

            {/* Menu Content Links */}
            <div className="flex flex-col gap-10 my-auto">

              {/* Navigation */}
              <motion.div variants={itemVariants} className="space-y-1">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-tertiary">
                  ✦ Navigation
                </span>
                <nav className="flex flex-col gap-4 text-3xl font-display font-medium">
                  <Link href="/#work" onClick={(e) => handleNavClick(e, "work")} className="hover:text-text-secondary transition-colors duration-300">
                    Work
                  </Link>
                  <Link href="/#services" onClick={(e) => handleNavClick(e, "services")} className="hover:text-text-secondary transition-colors duration-300">
                    Services
                  </Link>
                  <Link href="/about" onClick={() => closeDrawer()} className="hover:text-text-secondary transition-colors duration-300">
                    About
                  </Link>
                  <Link href="/#contact" onClick={(e) => handleNavClick(e, "contact")} className="hover:text-text-secondary transition-colors duration-300">
                    Contact
                  </Link>
                </nav>
              </motion.div>

              {/* Business Contacts */}
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-tertiary">
                    ✦ Business Inquiries
                  </span>
                  <div className="flex flex-col gap-1.5 text-lg font-medium text-text-primary">
                    <a href="mailto:hello@axen.ai" className="hover:text-text-secondary transition-colors duration-300">
                      hello@axen.ai
                    </a>
                    <a href="tel:+18005552936" className="hover:text-text-secondary transition-colors duration-300">
                      +1 (800) 555-AXEN
                    </a>
                  </div>
                </div>

                <div className="text-xs text-text-secondary flex gap-2">
                  <span>Est. 2026</span>
                  <span className="text-text-tertiary">•</span>
                  <span>AI-First Product Design Studio</span>
                </div>
              </motion.div>
            </div>

            {/* Footer Row inside Drawer */}
            <motion.div variants={itemVariants} className="border-t border-hairline pt-6 flex flex-col gap-4">
              <p className="font-display text-sm font-semibold tracking-wider text-text-secondary uppercase">
                We Build What&apos;s Next.
              </p>
              <div className="flex gap-6 text-xs text-text-tertiary font-medium">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors duration-300">
                  Twitter/X
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors duration-300">
                  LinkedIn
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors duration-300">
                  Instagram
                </a>
              </div>
            </motion.div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
