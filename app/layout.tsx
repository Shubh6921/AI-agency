import type { Metadata } from "next";
import { Manrope, Orbitron } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/smooth-scroll";
import DrawerProvider from "@/components/providers/drawer-context";
import LoaderProvider from "@/components/providers/loader-provider";
import CustomCursor from "@/components/ui/CustomCursor";
import Nav from "@/components/sections/Nav";
import EnquiryDrawer from "@/components/sections/EnquiryDrawer";
import CTABand from "@/components/sections/CTABand";
import Footer from "@/components/sections/Footer";
import Background3D from "@/components/Background3D";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AXEN — AI for Ambitious Brands",
  description: "AI-first digital agency combining strategy, design, development, and automation to build products that feel years ahead of the competition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${orbitron.variable} bg-canvas text-text-primary font-sans antialiased selection:bg-text-primary selection:text-canvas overflow-x-hidden`}
      >
        <DrawerProvider>
          <SmoothScroll>
            {/* Global Custom Cursor */}
            <CustomCursor />

            {/* Interactive 3D Background */}
            <Background3D />
            
            <LoaderProvider>
              {/* Header / Nav */}
              <Nav />

              {/* Slide-out Drawer */}
              <EnquiryDrawer />

              {/* Page content wrapper */}
              <div className="relative min-h-screen flex flex-col justify-between pt-28">
                <main className="flex-grow">
                  {children}
                </main>
                
                {/* Footer CTA & Sitemap */}
                <div className="w-full">
                  <CTABand />
                  <Footer />
                </div>
              </div>
            </LoaderProvider>
          </SmoothScroll>
        </DrawerProvider>
      </body>
    </html>
  );
}
