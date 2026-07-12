"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { insightsData } from "@/lib/insights-data";

export default function InsightArticlePage({ params }: { params: { slug: string } }) {
  const article = insightsData.find((a) => a.slug === params.slug);

  if (!article) {
    return notFound();
  }

  return (
    <div className="w-full bg-transparent text-text-primary px-6 md:px-16 py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        
        {/* Navigation Breadcrumb */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-text-secondary hover:text-text-primary uppercase mb-12 transition-colors duration-300"
        >
          <ArrowLeft size={14} /> Back to insights
        </Link>

        {/* ARTICLE HEADER BLOCK */}
        <section className="space-y-6 mb-12">
          <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-text-tertiary">
            <span>{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tight leading-[1.1]">
            {article.title}
          </h1>
        </section>

        {/* HERO COVER IMAGE */}
        <section className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-hairline bg-surface-base mb-16">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover grayscale pointer-events-none"
          />
        </section>

        {/* ARTICLE CONTENT */}
        <article className="prose prose-invert max-w-none font-sans text-text-secondary text-sm md:text-base leading-relaxed space-y-6">
          <p className="text-text-primary font-medium text-lg leading-relaxed mb-6 font-sans">
            {article.excerpt}
          </p>
          <div className="border-l border-text-primary/20 pl-6 my-8 italic text-text-primary text-lg">
            &ldquo;Restraint is not the absence of design. It is the absolute core of precision engineering.&rdquo;
          </div>
          <p>
            {article.content}
          </p>
        </article>

      </div>
    </div>
  );
}
