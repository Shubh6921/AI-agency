"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  User,
  FileText,
  Cpu,
  Mail,
  MessageSquare,
  Database,
  CheckCircle2,
  Play,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AIWorkflowAnimation() {
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Auto-advance workflow steps: 0 -> 1 -> 2 -> 3 (branch) -> 4 -> 5
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 2200);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const stepStatus = [
    { label: "Processing Request", status: "Initiating workflow..." },
    { label: "Form Capture", status: "Capturing lead fields..." },
    { label: "AI Qualification", status: "Analyzing lead intent & score..." },
    { label: "Parallel Dispatch", status: "Sending Email & WhatsApp..." },
    { label: "CRM Sync", status: "Updating contact records..." },
    { label: "Sales Notification", status: "Completed! Sales team notified." },
  ];

  return (
    <div className="w-full bg-[#050505] text-white p-5 md:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden font-sans">

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00C8FF]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10 border-b border-white/10 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00C8FF] animate-ping" />
            <span className="font-mono text-[11px] text-[#00C8FF] uppercase tracking-widest font-semibold">
              Live AI Automation Engine
            </span>
          </div>
          <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-tight text-white">
            Lead Qualification & Dispatch Workflow
          </h3>
        </div>

        {/* Play / Restart Controls */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#00C8FF]/40 text-xs font-mono uppercase tracking-wider text-white hover:text-[#00C8FF] transition-all"
          >
            {isPlaying ? (
              <>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Live Demo
              </>
            ) : (
              <>
                <Play size={12} />
                Play
              </>
            )}
          </button>
          <button
            onClick={() => {
              setActiveStep(0);
              setIsPlaying(true);
            }}
            className="p-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#00C8FF]/40 text-white hover:text-[#00C8FF] transition-all"
            title="Reset Workflow"
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>

      {/* WORKFLOW GRAPH CANVAS (TOUCH SCROLLABLE TO PREVENT OVERLAP) */}
      <div className="w-full overflow-x-auto scrollbar-none py-2">
        <div className="min-w-[720px] relative z-10 py-6 min-h-[340px] flex flex-col justify-center">

          {/* SVG Pulse Connection Lines */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 300">
              <defs>
                <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00C8FF" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#00C8FF" stopOpacity="1" />
                  <stop offset="100%" stopColor="#00C8FF" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Path 1: Customer -> Website Form */}
              <line x1="120" y1="150" x2="250" y2="150" stroke="#1f2937" strokeWidth="2" strokeDasharray="4 4" />
              <motion.line
                x1="120" y1="150" x2="250" y2="150"
                stroke="#00C8FF"
                strokeWidth="2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={activeStep >= 1 ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />

              {/* Path 2: Website Form -> AI Qualification */}
              <line x1="360" y1="150" x2="470" y2="150" stroke="#1f2937" strokeWidth="2" strokeDasharray="4 4" />
              <motion.line
                x1="360" y1="150" x2="470" y2="150"
                stroke="#00C8FF"
                strokeWidth="2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={activeStep >= 2 ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />

              {/* Path 3a: AI Qualification -> Email Branch (Top) */}
              <path d="M 570 150 C 600 150, 600 90, 640 90" fill="none" stroke="#1f2937" strokeWidth="2" strokeDasharray="4 4" />
              <motion.path
                d="M 570 150 C 600 150, 600 90, 640 90"
                fill="none"
                stroke="#00C8FF"
                strokeWidth="2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={activeStep >= 3 ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />

              {/* Path 3b: AI Qualification -> WhatsApp Branch (Bottom) */}
              <path d="M 570 150 C 600 150, 600 210, 640 210" fill="none" stroke="#1f2937" strokeWidth="2" strokeDasharray="4 4" />
              <motion.path
                d="M 570 150 C 600 150, 600 210, 640 210"
                fill="none"
                stroke="#00C8FF"
                strokeWidth="2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={activeStep >= 3 ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />

              {/* Path 4a: Email -> CRM */}
              <path d="M 740 90 C 780 90, 780 150, 810 150" fill="none" stroke="#1f2937" strokeWidth="2" strokeDasharray="4 4" />
              <motion.path
                d="M 740 90 C 780 90, 780 150, 810 150"
                fill="none"
                stroke="#00C8FF"
                strokeWidth="2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={activeStep >= 4 ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />

              {/* Path 4b: WhatsApp -> CRM */}
              <path d="M 740 210 C 780 210, 780 150, 810 150" fill="none" stroke="#1f2937" strokeWidth="2" strokeDasharray="4 4" />
              <motion.path
                d="M 740 210 C 780 210, 780 150, 810 150"
                fill="none"
                stroke="#00C8FF"
                strokeWidth="2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={activeStep >= 4 ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />

              {/* Path 5: CRM -> Sales Team */}
              <line x1="870" y1="150" x2="930" y2="150" stroke="#1f2937" strokeWidth="2" strokeDasharray="4 4" />
              <motion.line
                x1="870" y1="150" x2="930" y2="150"
                stroke="#00C8FF"
                strokeWidth="2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={activeStep >= 5 ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            </svg>
          </div>

          {/* WORKFLOW NODES GRID */}
          <div className="grid grid-cols-6 gap-3 items-center relative z-10">

            {/* Node 1: Customer */}
            <WorkflowNode
              stepIndex={0}
              currentStep={activeStep}
              title="Customer"
              subtitle="Inquiry Sent"
              icon={User}
              onClick={() => setActiveStep(0)}
              shouldReduceMotion={shouldReduceMotion}
            />

            {/* Node 2: Website Form */}
            <WorkflowNode
              stepIndex={1}
              currentStep={activeStep}
              title="Website Form"
              subtitle="Data Captured"
              icon={FileText}
              onClick={() => setActiveStep(1)}
              shouldReduceMotion={shouldReduceMotion}
            />

            {/* Node 3: AI Qualification (Featured Core) */}
            <div className="relative">
              <WorkflowNode
                stepIndex={2}
                currentStep={activeStep}
                title="AI Qualification"
                subtitle="Scoring & Intent"
                icon={Cpu}
                isAiCore
                onClick={() => setActiveStep(2)}
                shouldReduceMotion={shouldReduceMotion}
              />
            </div>

            {/* Node 4: Parallel Branch (Email + WhatsApp) */}
            <div className="flex flex-col gap-3">
              <WorkflowNode
                stepIndex={3}
                currentStep={activeStep}
                title="Email"
                subtitle="Sequence Sent"
                icon={Mail}
                isBranch
                onClick={() => setActiveStep(3)}
                shouldReduceMotion={shouldReduceMotion}
              />
              <WorkflowNode
                stepIndex={3}
                currentStep={activeStep}
                title="WhatsApp"
                subtitle="Notification"
                icon={MessageSquare}
                isBranch
                onClick={() => setActiveStep(3)}
                shouldReduceMotion={shouldReduceMotion}
              />
            </div>

            {/* Node 5: CRM */}
            <WorkflowNode
              stepIndex={4}
              currentStep={activeStep}
              title="CRM"
              subtitle="Record Updated"
              icon={Database}
              onClick={() => setActiveStep(4)}
              shouldReduceMotion={shouldReduceMotion}
            />

            {/* Node 6: Sales Team */}
            <WorkflowNode
              stepIndex={5}
              currentStep={activeStep}
              title="Sales Team"
              subtitle="Intent Alert"
              icon={CheckCircle2}
              onClick={() => setActiveStep(5)}
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>
        </div>
      </div>

      {/* FOOTER STATUS BAR */}
      <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00C8FF] animate-pulse shrink-0" />
          <span className="text-white/60">CURRENT STATUS:</span>
          <span className="text-[#00C8FF] font-bold uppercase tracking-wider truncate max-w-[280px]">
            {stepStatus[activeStep].status}
          </span>
        </div>

        <div className="flex items-center gap-4 text-white/40">
          <span>STEP {activeStep + 1} OF 6</span>
          <span>•</span>
          <span>60 FPS RENDER</span>
        </div>
      </div>
    </div>
  );
}

interface WorkflowNodeProps {
  stepIndex: number;
  currentStep: number;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  isAiCore?: boolean;
  isBranch?: boolean;
  onClick: () => void;
  shouldReduceMotion?: boolean | null;
}

function WorkflowNode({
  stepIndex,
  currentStep,
  title,
  subtitle,
  icon: Icon,
  isAiCore,
  isBranch,
  onClick,
  shouldReduceMotion,
}: WorkflowNodeProps) {
  const isActive = currentStep === stepIndex;
  const isPassed = currentStep > stepIndex;

  return (
    <motion.div
      onClick={onClick}
      animate={
        !shouldReduceMotion && isActive
          ? { scale: 1.03 }
          : { scale: 1 }
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "cursor-pointer p-3 rounded-2xl border transition-all duration-300 relative bg-[#0a0a0d]/90 backdrop-blur-md flex flex-col items-center text-center group min-w-[100px]",
        isActive
          ? "border-[#00C8FF] shadow-[0_0_25px_rgba(0,200,255,0.3)] bg-[#00C8FF]/10 text-white"
          : isPassed
            ? "border-[#00C8FF]/40 text-white/90 bg-white/[0.02]"
            : "border-white/10 text-white/50 hover:border-white/30 bg-white/[0.01]",
        isBranch ? "py-2.5 px-3 text-left items-start flex-row gap-2.5 min-w-[110px]" : ""
      )}
    >
      {/* Node Icon Container */}
      <div className="relative mb-2 shrink-0">
        {/* Rotating AI Core Ring */}
        {isAiCore && (
          <motion.div
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute -inset-1.5 rounded-full border border-dashed border-[#00C8FF]/50 pointer-events-none"
          />
        )}

        <div
          className={cn(
            "w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300",
            isActive
              ? "bg-[#00C8FF] text-canvas shadow-[0_0_15px_rgba(0,200,255,0.6)]"
              : isPassed
                ? "bg-[#00C8FF]/20 text-[#00C8FF]"
                : "bg-white/5 text-white/40 group-hover:text-white/80"
          )}
        >
          {isAiCore ? <Sparkles size={18} className={isActive ? "animate-spin" : ""} /> : <Icon size={18} />}
        </div>
      </div>

      {/* Node Titles - NO OVERLAP */}
      <div className={cn("w-full overflow-hidden", isBranch ? "space-y-0.5" : "space-y-1")}>
        <h4 className="font-display text-[11px] sm:text-xs font-bold uppercase tracking-tight text-white leading-tight break-words text-center">
          {title}
        </h4>
        <p className="text-[9px] font-mono text-white/50 tracking-tight leading-none text-center truncate">
          {subtitle}
        </p>
      </div>

      {/* Status Pulse Indicator */}
      {isActive && (
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C8FF] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00C8FF]" />
        </span>
      )}
    </motion.div>
  );
}
