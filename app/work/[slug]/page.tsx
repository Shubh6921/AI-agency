"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import MicroLabel from "@/components/ui/MicroLabel";
import Button from "@/components/ui/Button";
import { projectsData } from "@/lib/projects-data";

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  // Find next project for bottom footer navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === params.slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <div className="w-full bg-transparent text-text-primary px-6 md:px-16 py-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Navigation Breadcrumb */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-text-secondary hover:text-text-primary uppercase mb-12 transition-colors duration-300"
        >
          <ArrowLeft size={14} /> Back to work
        </Link>

        {/* HERO TITLE BLOCK */}
        <section className="space-y-6 mb-16">
          <MicroLabel>{project.industry} Case Study</MicroLabel>
          <h1 className="font-display text-4xl md:text-7xl font-black uppercase tracking-tight leading-[1.0]">
            {project.title}
          </h1>
        </section>

        {/* HERO HEADER COVER IMAGE */}
        <section className="relative aspect-video w-full rounded-2xl overflow-hidden border border-hairline bg-surface-base mb-16 md:mb-24">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover grayscale pointer-events-none"
          />
        </section>

        {/* META SPECIFICATIONS ROW */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-hairline pb-16 mb-16">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-text-tertiary block mb-2">✦ Client</span>
            <span className="text-sm font-semibold text-text-primary">{project.client}</span>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-text-tertiary block mb-2">✦ Role</span>
            <span className="text-sm font-semibold text-text-primary">{project.role}</span>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-text-tertiary block mb-2">✦ Focus</span>
            <span className="text-sm font-semibold text-text-primary">{project.industry}</span>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-text-tertiary block mb-2">✦ Stack</span>
            <div className="flex flex-wrap gap-1">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-xs text-text-secondary bg-surface-base px-2 py-0.5 rounded border border-hairline">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CHALLENGE / APPROACH / OUTCOME NARRATIVE */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-24">
          
          {/* Main narrative */}
          <div className="md:col-span-8 space-y-12">
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-text-primary">
                The Challenge
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed font-sans">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-text-primary">
                Our Approach
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed font-sans">
                {project.approach}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-text-primary">
                The Outcome
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed font-sans">
                {project.outcome}
              </p>
            </div>
          </div>

          {/* Metric Side Card */}
          <div className="md:col-span-4 bg-surface-base border border-hairline rounded-2xl p-8 h-fit space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-wider text-text-tertiary block">
              ✦ Highlight Metric
            </span>
            <div className="space-y-2">
              <span className="font-display text-6xl font-black text-text-primary block">
                {project.outcomeMetric}
              </span>
              <p className="text-sm text-text-secondary leading-relaxed font-sans">
                {project.outcomeDesc}
              </p>
            </div>
          </div>

        </section>

        {/* FOOTER PREV/NEXT NAVIGATOR */}
        <section className="border-t border-hairline pt-16 flex justify-between items-center">
          <div className="space-y-1">
            <span className="text-[9px] font-bold uppercase tracking-widest text-text-tertiary block">Next Case Study</span>
            <Link
              href={`/work/${nextProject.slug}`}
              className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary hover:text-text-secondary transition-colors duration-300 flex items-center gap-3 group"
            >
              {nextProject.title}
              <ArrowRight size={24} className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>

          <Button href="/contact" variant="solid" magnetic>
            Start your project
          </Button>
        </section>

      </div>
    </div>
  );
}
