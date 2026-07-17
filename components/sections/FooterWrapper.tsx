"use client";

import { usePathname } from "next/navigation";
import CTABand from "./CTABand";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname();
  
  // Hide on homepage and horizontal work page
  const isHidden = pathname === "/" || pathname === "/work";
  
  if (isHidden) return null;
  
  return (
    <div className="w-full">
      <CTABand />
      <Footer />
    </div>
  );
}
