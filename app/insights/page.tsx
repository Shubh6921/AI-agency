"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MicroLabel from "@/components/ui/MicroLabel";
import { insightsData } from "@/lib/insights-data";

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "AI Strategy", "Design", "Engineering", "Case Notes"];

  const filteredArticles = activeCategory === "All"
    ? insightsData
    : insightsData.filter((art) => art.category === activeCategory);

  return (
    <div className="w-full bg-transparent text-text-primary px-6 md:px-16 py-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* HERO SECTION */}
        <section className="mb-16 space-y-6">
          <MicroLabel>Agency Insights</MicroLabel>
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tight leading-[1.1]">
            Insights
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed font-sans">
            Our thoughts on artificial intelligence pipelines, digital design craftsmanship, and serverless engineering architectures.
          </p>
        </section>

        {/* CATEGORY FILTERS */}
        <section className="flex flex-wrap gap-3 border-b border-hairline pb-8 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-300 border ${
                activeCategory === cat
                  ? "bg-text-primary text-canvas border-transparent"
                  : "bg-transparent text-text-secondary border-hairline hover:bg-surface-raised hover:text-text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* ARTICLES GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Media frame */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-hairline bg-surface-base">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 pointer-events-none"
                  />
                </div>

                {/* Meta details */}
                <div className="flex gap-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                  <span>{article.category}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>

                {/* Headline */}
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-text-primary hover:text-text-secondary transition-colors duration-300">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-text-secondary text-sm leading-relaxed font-sans">
                  {article.excerpt}
                </p>
              </div>

              <div className="text-xs font-semibold uppercase tracking-wider text-text-primary flex items-center gap-1 group-hover:gap-2 transition-all duration-300 pt-2">
                Read article <span>→</span>
              </div>
            </Link>
          ))}
        </section>

      </div>
    </div>
  );
}
