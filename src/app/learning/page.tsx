"use client";

import { ArrowRight, BookOpen, Rocket, Building, Download, Play } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { LEARNING_CATEGORIES, RESOURCES } from "@/lib/data-services";
import type { Metadata } from "next";

const ICON_MAP: Record<string, React.ElementType> = {
  BookOpen,
  Rocket,
  Building,
};

export default function LearningPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream pb-0 pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ScrollReveal>
            <span className="eyebrow">Learning & Growth</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-4">
              Learn. Grow. Build <span className="text-teal">Better.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-lg text-gray">
              Resources, workshops, and guides to help you and your organization build stronger people operations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category cards */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {LEARNING_CATEGORIES.map((category, index) => {
              const Icon = ICON_MAP[category.icon];
              return (
                <ScrollReveal key={category.id} delay={0.1 * index}>
                  <div className="group flex h-full flex-col rounded-2xl border border-border bg-white p-8 shadow-brand transition-all hover:border-teal/30 hover:shadow-md">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10">
                      {Icon && <Icon className="h-6 w-6 text-teal" strokeWidth={1.5} />}
                    </div>
                    <h3 className="text-xl font-bold text-navy">{category.name}</h3>
                    <p className="mt-2 text-sm text-gray">{category.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-navy/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-teal transition-all group-hover:gap-2">
                      Explore
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ScrollReveal>
            <span className="eyebrow">Featured Resources</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4">Guides, Templates & Videos</h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((resource, index) => (
              <ScrollReveal key={resource.id} delay={0.05 * index}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-cream p-6 shadow-brand transition-all hover:shadow-md">
                  {/* Type icon */}
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue/10">
                    {resource.type === "video" ? (
                      <Play className="h-5 w-5 text-blue" strokeWidth={1.5} />
                    ) : (
                      <Download className="h-5 w-5 text-blue" strokeWidth={1.5} />
                    )}
                  </div>

                  <span className="inline-block w-fit rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
                    {resource.category}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-navy">{resource.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-gray">{resource.description}</p>

                  <a
                    href={resource.type === "video" ? resource.videoUrl : resource.downloadUrl}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue transition-colors hover:text-navy"
                  >
                    {resource.type === "video" ? "Watch" : "Download"}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
