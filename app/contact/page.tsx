"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, ArrowLeft, Check } from "lucide-react";
import MicroLabel from "@/components/ui/MicroLabel";

interface FormData {
  name: string;
  email: string;
  company: string;
  project_types: string[];
  budget: string;
  timeline: string;
  message: string;
}

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    project_types: [],
    budget: "",
    timeline: "",
    message: "",
  });

  const projectOptions = ["AI Automation", "Web Development", "Product Design", "Branding", "Other"];
  const budgetOptions = ["$10k - $25k", "$25k - $50k", "$50k - $100k", "$100k+"];
  const timelineOptions = ["ASAP", "1 - 3 months", "Flexible"];

  const faqs = [
    { q: "What is your typical project scope?", a: "We focus on end-to-end builds—from strategy and UI/UX design to full-scale AI pipeline integrations and custom app developments." },
    { q: "How long does a project take?", a: "Most custom systems take 6 to 12 weeks to design, develop, test, and deploy." },
    { q: "Do you sign NDAs?", a: "Yes, we protect our clients' intellectual property and sign non-disclosure agreements before reviewing proprietary systems." },
  ];

  // Simple validation checks for next steps
  const canContinue = () => {
    if (step === 1) {
      return formData.name.trim() !== "" && formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    }
    if (step === 2) {
      return formData.project_types.length > 0;
    }
    if (step === 3) {
      return formData.budget !== "";
    }
    if (step === 4) {
      return formData.timeline !== "";
    }
    return true;
  };

  const handleNext = () => {
    if (canContinue()) setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const toggleProjectType = (type: string) => {
    setFormData((prev) => {
      const exists = prev.project_types.includes(type);
      return {
        ...prev,
        project_types: exists
          ? prev.project_types.filter((t) => t !== type)
          : [...prev.project_types, type],
      };
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || undefined,
          project_type: formData.project_types,
          budget_range: formData.budget,
          timeline: formData.timeline,
          message: formData.message || undefined,
        }),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || "Form submission failed");
      }

      setSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-canvas text-text-primary px-6 md:px-16 py-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* HERO SECTION */}
        <section className="mb-16 space-y-6">
          <MicroLabel>Get In Touch</MicroLabel>
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tight leading-[1.1]">
            Let&apos;s Start Something.
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed font-sans">
            We partner with teams ready to build real AI systems, not experiments.
          </p>
        </section>

        {/* FORM CONTAINER CARD */}
        <section className="max-w-3xl mx-auto bg-surface-base border border-hairline rounded-2xl p-8 md:p-12 mb-24 relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.div key="form" className="space-y-8">
                {/* Step Counter */}
                <div className="flex justify-between items-center text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                  <span>Step {step} / 5</span>
                  <span>{Math.round((step / 5) * 100)}% Complete</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-[2px] bg-hairline rounded-full overflow-hidden">
                  <div
                    className="h-full bg-text-primary transition-all duration-300 ease-out-expo"
                    style={{ width: `${(step / 5) * 100}%` }}
                  />
                </div>

                {/* Step Content */}
                <div className="min-h-[220px] py-4">
                  {step === 1 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight">Tell us about yourself</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-wider text-text-tertiary">Full Name *</label>
                          <input
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-surface-raised border border-hairline rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-text-secondary transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-wider text-text-tertiary">Email Address *</label>
                          <input
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-surface-raised border border-hairline rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-text-secondary transition-colors"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-text-tertiary">Company Name (Optional)</label>
                        <input
                          type="text"
                          placeholder="Acme Corp"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-surface-raised border border-hairline rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-text-secondary transition-colors"
                        />
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight">What type of project is this?</h3>
                      <div className="flex flex-wrap gap-3">
                        {projectOptions.map((opt) => {
                          const active = formData.project_types.includes(opt);
                          return (
                            <button
                              key={opt}
                              onClick={() => toggleProjectType(opt)}
                              className={`px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-300 border ${
                                active
                                  ? "bg-text-primary text-canvas border-transparent"
                                  : "bg-surface-raised text-text-secondary border-hairline hover:text-text-primary"
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight">Budget range</h3>
                      <div className="flex flex-wrap gap-3">
                        {budgetOptions.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setFormData({ ...formData, budget: opt })}
                            className={`px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-300 border ${
                              formData.budget === opt
                                ? "bg-text-primary text-canvas border-transparent"
                                : "bg-surface-raised text-text-secondary border-hairline hover:text-text-primary"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight">Estimated timeline</h3>
                      <div className="flex flex-wrap gap-3">
                        {timelineOptions.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setFormData({ ...formData, timeline: opt })}
                            className={`px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-300 border ${
                              formData.timeline === opt
                                ? "bg-text-primary text-canvas border-transparent"
                                : "bg-surface-raised text-text-secondary border-hairline hover:text-text-primary"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 5 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight">Additional Details</h3>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-text-tertiary">Project Description</label>
                        <textarea
                          placeholder="Outline your targets, data pipelines, integrations, etc."
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-surface-raised border border-hairline rounded-lg p-4 text-sm text-text-primary focus:outline-none focus:border-text-secondary transition-colors"
                        />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Form Controls */}
                <div className="flex justify-between items-center pt-6 border-t border-hairline">
                  {step > 1 ? (
                    <button
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-text-secondary hover:text-text-primary uppercase transition-colors"
                    >
                      <ArrowLeft size={14} /> Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 5 ? (
                    <button
                      onClick={handleNext}
                      disabled={!canContinue()}
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-text-primary hover:text-text-secondary uppercase transition-colors disabled:opacity-30 disabled:pointer-events-none"
                    >
                      Continue <ArrowRight size={14} />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={loading || !canContinue()}
                      className="inline-flex h-12 items-center justify-center rounded-full bg-text-primary px-8 text-sm font-semibold tracking-wider text-canvas uppercase transition-colors hover:bg-text-secondary disabled:opacity-30"
                    >
                      {loading ? "Submitting..." : "Submit Enquiry"}
                    </button>
                  )}
                </div>

                {error && <p className="text-red-500 text-xs font-semibold">{error}</p>}

              </motion.div>
            ) : (
              /* Success State */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-6 flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-text-primary text-canvas flex items-center justify-center mb-2">
                  <Check size={32} />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight">
                  Enquiry Submitted
                </h3>
                <p className="text-text-secondary text-sm max-w-md leading-relaxed font-sans">
                  Thank you for reaching out to AXEN. Our engineering team will review your project details and get back to you within 1-2 business days.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* FAQs */}
        <section className="reveal-up max-w-3xl mx-auto space-y-12">
          <MicroLabel>Frequently Asked Questions</MicroLabel>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-hairline">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-6 text-left hover:text-text-primary text-text-secondary transition-colors duration-300 group"
                >
                  <span className="font-display font-bold text-base uppercase tracking-wide">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform duration-300 ${activeFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out-expo`}
                  style={{
                    maxHeight: activeFaq === idx ? "120px" : "0",
                  }}
                >
                  <p className="text-sm leading-relaxed text-text-secondary pb-6 font-sans">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
