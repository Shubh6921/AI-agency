"use client";

import { motion } from "framer-motion";
import { TrendingUp, Bot, Zap, Sparkles } from "lucide-react";
import MicroLabel from "@/components/ui/MicroLabel";

const automationCategories = [
  {
    title: "Sales Automation",
    icon: TrendingUp,
    isLeft: true,
    items: [
      "Lead capture from website, Meta Ads & Google Ads",
      "CRM updates",
      "Automated follow-ups",
      "Proposal generation",
      "Meeting scheduling",
    ],
  },
  {
    title: "Customer Support",
    icon: Bot,
    isLeft: false,
    items: [
      "AI chatbot",
      "WhatsApp automation",
      "Email responses",
      "FAQ handling",
      "Ticket routing",
    ],
  },
  {
    title: "Operations",
    icon: Zap,
    isLeft: true,
    items: [
      "Invoice generation",
      "Payment reminders",
      "Report generation",
      "Inventory updates",
      "Employee notifications",
    ],
  },
  {
    title: "Marketing",
    icon: Sparkles,
    isLeft: false,
    items: [
      "Email campaigns",
      "Lead nurturing",
      "Social media workflows",
      "Review requests",
    ],
  },
];

export default function AIWhatWeAutomateSection() {
  return (
    <section id="what-we-automate" className="space-y-12 border-t border-hairline pt-16 overflow-hidden">
      
      {/* HEADER: LUXURY 3D PERSPECTIVE SLIDE IN FROM LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -60, rotateY: -12, scale: 0.96 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 24,
          mass: 0.8,
        }}
        style={{ perspective: 1000, transformStyle: "preserve-3d", willChange: "transform, opacity" }}
        className="space-y-4"
      >
        <MicroLabel>Comprehensive Automation Capabilities</MicroLabel>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
          What We Can Automate
        </h2>
      </motion.div>

      {/* 4 BLOCKS: 3D PERSPECTIVE TILT SLIDE IN (LEFT BLOCKS FROM LEFT, RIGHT BLOCKS FROM RIGHT) */}
      <div style={{ perspective: 1200 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {automationCategories.map((cat, idx) => {
          const Icon = cat.icon;
          const isLeft = cat.isLeft;

          return (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                x: isLeft ? -70 : 70, // Left blocks slide in from -70px, Right blocks from +70px
                rotateY: isLeft ? -14 : 14, // 3D Perspective Tilt Yaw Angle
                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotateY: 0,
                scale: 1,
              }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 22,
                delay: idx * 0.1, // Staggered entry timing
              }}
              style={{ transformStyle: "preserve-3d", willChange: "transform, opacity" }}
              className="bg-surface-base border border-hairline rounded-2xl p-8 space-y-6 hover:border-[#26C7ff]/50 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,200,255,0.14)]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#26C7ff]/10 border border-[#26C7ff]/30 flex items-center justify-center text-[#26C7ff] group-hover:scale-105 transition-transform duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide group-hover:text-[#26C7ff] transition-colors">
                  {cat.title}
                </h3>
              </div>

              <ul className="space-y-3 border-t border-hairline/50 pt-4">
                {cat.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="text-[#26C7ff] font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
