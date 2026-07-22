"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  Zap,
  TrendingUp,
  ChevronDown,
  Sparkles,
  Bot,
  Building2,
  Stethoscope,
  ShoppingBag,
  ArrowDown,
  Check,
} from "lucide-react";
import MicroLabel from "@/components/ui/MicroLabel";
import Button from "@/components/ui/Button";
import { useDrawer } from "@/components/providers/drawer-context";
import AIWorkflowAnimation from "@/components/sections/AIWorkflowAnimation";
import AIHowItWorksSection from "@/components/sections/AIHowItWorksSection";
import AIWhatWeAutomateSection from "@/components/sections/AIWhatWeAutomateSection";

export default function AIAutomationPage() {
  const { openDrawer } = useDrawer();
  const [activeTab, setActiveTab] = useState<"real-estate" | "healthcare" | "ecommerce">("real-estate");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const painPoints = [
    "Your team spends hours on repetitive tasks.",
    "Leads slip through the cracks.",
    "Customers wait too long for replies.",
    "Data is entered manually into multiple systems.",
    "Follow-ups are inconsistent.",
    "Operations slow down as your business grows.",
  ];

  const useCases = {
    "real-estate": {
      title: "Real Estate",
      icon: Building2,
      steps: [
        "Visitor fills inquiry form",
        "AI qualifies the lead",
        "Schedules a property visit",
        "Updates CRM",
        "Sends WhatsApp confirmation",
        "Sales team gets notified",
      ],
    },
    healthcare: {
      title: "Healthcare",
      icon: Stethoscope,
      steps: [
        "Patient books appointment",
        "Reminder sent automatically",
        "Doctor calendar updated",
        "Follow-up messages after visit",
      ],
    },
    ecommerce: {
      title: "E-commerce",
      icon: ShoppingBag,
      steps: [
        "Customer places an order",
        "Invoice generated",
        "Inventory updated",
        "Shipping email sent",
        "Support AI answers queries",
      ],
    },
  };

  const businessResults = [
    "Save 20–40 hours every week",
    "Respond to customers instantly",
    "Never miss a lead",
    "Reduce manual errors",
    "Improve team productivity",
    "Scale operations without hiring",
  ];

  const technologies = [
    "OpenAI",
    "Claude",
    "n8n",
    "Make",
    "Supabase",
    "Next.js",
    "WhatsApp Business API",
    "Gmail",
    "Stripe",
    "HubSpot",
    "Salesforce",
    "Google Workspace",
  ];

  const whyChooseUs = [
    { title: "Custom-built for your business", desc: "Tailored to your specific architecture and workflows." },
    { title: "No one-size-fits-all templates", desc: "Bespoke automation engineering designed for long-term scalability." },
    { title: "Secure integrations", desc: "Enterprise-grade data encryption, key privacy, and access control." },
    { title: "Scalable architecture", desc: "Built to handle 10x volume without breaking or slowing down." },
    { title: "Continuous optimization", desc: "Regular performance reviews to tweak and maximize efficiency." },
    { title: "Dedicated post-launch support", desc: "Direct engineering support for quick adjustments and upgrades." },
  ];

  const faqs = [
    {
      q: "How long does implementation take?",
      a: "Typically 1–4 weeks depending on complexity.",
    },
    {
      q: "Can it integrate with my existing software?",
      a: "Yes. We integrate with CRMs, ERPs, payment gateways, and hundreds of third-party tools.",
    },
    {
      q: "Do I need technical knowledge?",
      a: "No. We handle the setup, deployment, and maintenance.",
    },
  ];

  return (
    <div className="w-full bg-canvas text-text-primary px-6 md:px-16 py-12 md:py-24 space-y-32">
      <div className="mx-auto max-w-7xl space-y-32">

        {/* 1. LUXURY HERO SECTION */}
        <section className="relative pt-6 pb-12 overflow-hidden">
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[700px] h-[450px] bg-[#00C8FF]/4 blur-[180px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md text-xs font-mono font-medium uppercase tracking-widest text-white/70"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C8FF]" />
                <span>AI AUTOMATION SERVICES</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[1.02] text-white"
              >
                AI AUTOMATION<span className="text-[#00C8FF]">.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl text-white/70 font-sans font-light leading-relaxed max-w-2xl"
              >
                Automate repetitive business operations—from lead capture & CRM updates to invoice generation, WhatsApp notifications, and internal workflows.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex flex-wrap items-center gap-3 px-5 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md text-xs md:text-sm font-sans font-medium text-white/80 tracking-wide"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C8FF]" />
                <span>Save 20+ hours/week</span>
                <span className="text-white/20">•</span>
                <span>Zero missed leads</span>
                <span className="text-white/20">•</span>
                <span>Scale operations without hiring</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="pt-2 flex flex-wrap gap-4"
              >
                <Button onClick={openDrawer} variant="solid" magnetic>
                  Book a Free Consultation
                </Button>
                <Button href="#what-we-automate" variant="ghost" magnetic>
                  Explore Automations
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10"
              >
                <div className="space-y-1">
                  <div className="font-display text-2xl md:text-3xl font-black text-white">20-40h</div>
                  <div className="text-xs font-mono text-white/40 uppercase tracking-wider">Weekly Saved</div>
                </div>
                <div className="space-y-1">
                  <div className="font-display text-2xl md:text-3xl font-black text-[#00C8FF]">99.9%</div>
                  <div className="text-xs font-mono text-white/40 uppercase tracking-wider">Workflow Accuracy</div>
                </div>
                <div className="space-y-1">
                  <div className="font-display text-2xl md:text-3xl font-black text-white">0</div>
                  <div className="text-xs font-mono text-white/40 uppercase tracking-wider">Missed Leads</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5"
            >
              <div className="p-2 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-2xl">
                <AIWorkflowAnimation />
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. THE PROBLEMS WE SOLVE (SLIDE IN FROM LEFT) */}
        <section className="space-y-12 border-t border-hairline pt-16 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: -8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 1000, transformStyle: "preserve-3d", willChange: "transform, opacity" }}
            className="space-y-4 max-w-2xl"
          >
            <MicroLabel>Pain Points We Eliminate</MicroLabel>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
              Are you facing these challenges?
            </h2>
            <p className="text-text-secondary text-sm md:text-base">
              Instead of listing generic features, here are the operational bottlenecks we directly eliminate:
            </p>
          </motion.div>

          <div style={{ perspective: 1000 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -60, rotateY: -10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ transformStyle: "preserve-3d", willChange: "transform, opacity" }}
                className="bg-surface-raised/40 border border-hairline/80 hover:border-[#26C7ff]/40 rounded-2xl p-6 space-y-4 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                  <AlertCircle size={20} />
                </div>
                <p className="text-sm md:text-base font-medium text-text-primary leading-relaxed">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. WHAT WE CAN AUTOMATE (SLIDE IN FROM LEFT/RIGHT) */}
        <AIWhatWeAutomateSection />

        {/* 4. HOW IT WORKS (GSAP SCROLLTRIGGER 3D SERIES REVEAL) */}
        <AIHowItWorksSection />

        {/* 5. EXAMPLE USE CASES (SLIDE IN FROM LEFT) */}
        <section className="space-y-12 border-t border-hairline pt-16 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <MicroLabel>Industry Workflows</MicroLabel>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
              Example Use Cases
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-3"
          >
            {(Object.keys(useCases) as Array<keyof typeof useCases>).map((key) => {
              const uc = useCases[key];
              const Icon = uc.icon;
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-[#26C7ff] text-canvas shadow-lg shadow-[#26C7ff]/20"
                      : "bg-surface-raised border border-hairline text-text-secondary hover:text-text-primary"
                  }`}
                >
                  <Icon size={16} />
                  {uc.title}
                </button>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-surface-base border border-hairline rounded-2xl p-8 md:p-12"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 max-w-2xl mx-auto"
              >
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-text-primary text-center pb-4">
                  {useCases[activeTab].title} Workflow Loop
                </h3>

                <div className="space-y-3">
                  {useCases[activeTab].steps.map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-3">
                      <div className="w-full bg-surface-raised border border-hairline rounded-xl p-4 text-center text-sm font-medium text-text-primary shadow-sm hover:border-[#26C7ff]/50 transition-colors">
                        {step}
                      </div>
                      {idx < useCases[activeTab].steps.length - 1 && (
                        <ArrowDown size={18} className="text-[#26C7ff] animate-pulse" />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </section>

        {/* 6. BUSINESS RESULTS (SLIDE IN FROM LEFT) */}
        <section className="space-y-12 border-t border-hairline pt-16 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <MicroLabel>Tangible ROI</MicroLabel>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
              What You Can Expect
            </h2>
            <p className="text-text-secondary text-sm md:text-base">
              Instead of promises, here are the real-world operational outcomes:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessResults.map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-surface-raised/40 border border-hairline/80 hover:border-[#26C7ff]/40 rounded-2xl p-6 flex items-start gap-4 transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-[#26C7ff]/10 border border-[#26C7ff]/30 flex items-center justify-center text-[#26C7ff] shrink-0">
                  <Check size={18} />
                </div>
                <span className="text-sm md:text-base font-semibold text-text-primary">
                  {result}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 7. TECHNOLOGIES WE USE (SLIDE IN FROM LEFT) */}
        <section className="space-y-12 border-t border-hairline pt-16 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <MicroLabel>Stack & Ecosystem</MicroLabel>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
              Technologies We Use
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="px-5 py-2.5 rounded-full bg-surface-raised border border-hairline text-xs md:text-sm font-mono tracking-wider text-text-primary hover:border-[#26C7ff]/40 transition-colors"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </section>

        {/* 8. WHY CHOOSE AXEN (SLIDE IN FROM LEFT) */}
        <section className="space-y-12 border-t border-hairline pt-16 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <MicroLabel>Our Advantage</MicroLabel>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
              Why Choose Axen
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-surface-base border border-hairline rounded-2xl p-6 space-y-3 hover:border-[#26C7ff]/50 transition-colors"
              >
                <h3 className="font-display text-lg font-bold uppercase text-text-primary">
                  {item.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 9. FAQ SECTION (SLIDE IN FROM LEFT) */}
        <section className="space-y-12 border-t border-hairline pt-16 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 max-w-xl"
          >
            <MicroLabel>Common Questions</MicroLabel>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border-b border-hairline pb-4"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between py-4 text-left hover:text-[#26C7ff] transition-colors"
                  >
                    <span className="font-display text-lg font-bold uppercase text-text-primary">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`transform transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#26C7ff]" : "text-text-tertiary"
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="text-sm text-text-secondary leading-relaxed pt-2 pb-2 font-sans">
                      {faq.a}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 10. FINAL CTA (SLIDE IN FROM LEFT) */}
        <motion.section
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border border-hairline bg-surface-raised/40 rounded-3xl p-10 md:p-16 text-center space-y-8 relative overflow-hidden"
        >
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight">
              Ready to Automate Your Business?
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              Let&apos;s identify the repetitive work that&apos;s slowing your business down and build AI workflows that save time, reduce costs, and help you scale.
            </p>
          </div>

          <div>
            <Button onClick={openDrawer} variant="solid" magnetic>
              Schedule a Free Strategy Call
            </Button>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
