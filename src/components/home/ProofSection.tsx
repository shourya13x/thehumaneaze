"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Quote, Play } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CASE_STUDIES, TESTIMONIALS, VIDEO_LEARNING } from "@/lib/data";
import { LogoMark } from "@/components/brand/LogoMark";
import { cn } from "@/lib/utils";

type ProofTab = "case-studies" | "testimonials" | "hr-learning";

function CaseStudyGraphic({ index }: { index: number }) {
  return (
    <div className="relative flex h-40 items-center justify-center overflow-hidden bg-accent">
      {index === 1 ? (
        <>
          <LogoMark className="absolute left-8 h-24 w-24 text-teal opacity-20" />
          <LogoMark className="relative h-20 w-20 text-teal" />
        </>
      ) : index === 2 ? (
        <>
          <div className="absolute h-32 w-32 rounded-full bg-teal/10" />
          <LogoMark className="relative h-20 w-20 text-teal" />
        </>
      ) : (
        <LogoMark className="h-20 w-20 text-teal" />
      )}
    </div>
  );
}

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function ProofSection() {
  const [activeTab, setActiveTab] = useState<ProofTab>("case-studies");

  return (
    <section className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <ScrollReveal>
              <span className="eyebrow inline-block rounded-full bg-teal/10 px-4 py-1.5 font-semibold">PROOF IT WORKS !</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 max-w-2xl">
                Real Results, Real Voices, Real Learning
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-4 max-w-xl text-navy/80">
                Explore real transformation stories, direct client feedback, and practical HR knowledge designed to help your business scale.
              </p>
            </ScrollReveal>
          </div>

          {/* Tab Switcher */}
          <ScrollReveal delay={0.2}>
            <div className="inline-flex rounded-xl border border-border bg-white p-1.5 shadow-brand">
              <button
                type="button"
                onClick={() => setActiveTab("case-studies")}
                className={cn(
                  "rounded-lg px-4 py-2.5 text-sm font-semibold transition-all",
                  activeTab === "case-studies"
                    ? "bg-teal text-white shadow-sm"
                    : "text-navy/70 hover:bg-navy/5 hover:text-navy"
                )}
              >
                Case Studies
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("testimonials")}
                className={cn(
                  "rounded-lg px-4 py-2.5 text-sm font-semibold transition-all",
                  activeTab === "testimonials"
                    ? "bg-teal text-white shadow-sm"
                    : "text-navy/70 hover:bg-navy/5 hover:text-navy"
                )}
              >
                Testimonials
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("hr-learning")}
                className={cn(
                  "rounded-lg px-4 py-2.5 text-sm font-semibold transition-all",
                  activeTab === "hr-learning"
                    ? "bg-teal text-white shadow-sm"
                    : "text-navy/70 hover:bg-navy/5 hover:text-navy"
                )}
              >
                HR Learning
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Tab 1: Case Studies */}
        {activeTab === "case-studies" && (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((study, index) => (
              <ScrollReveal key={study.id} delay={0.1 * index}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-brand transition-all hover:-translate-y-1 hover:border-teal/30 hover:shadow-lg"
                >
                  {/* Geometric graphic */}
                  <div className="overflow-hidden">
                    <CaseStudyGraphic index={index} />
                  </div>
                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-block w-fit rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
                      {study.category}
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-navy transition-colors group-hover:text-teal">
                      {study.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-gray leading-relaxed">
                      {study.resultLine}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue transition-all group-hover:gap-2">
                      Read More
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Tab 2: Testimonials */}
        {activeTab === "testimonials" && (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={0.1 * index}>
                <Link
                  href={`/testimonials/${testimonial.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-white p-8 shadow-brand transition-all hover:-translate-y-1 hover:border-teal/30 hover:shadow-lg"
                >
                  {/* Quote icon */}
                  <Quote className="h-8 w-8 text-teal/30 transition-colors group-hover:text-teal" strokeWidth={1.5} />

                  {/* Quote text */}
                  <p className="mt-4 flex-1 text-base leading-relaxed text-navy">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-xs font-bold text-white transition-colors group-hover:bg-teal">
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-navy">{testimonial.clientName}</p>
                        <p className="text-xs text-gray">{testimonial.clientTitle}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-teal opacity-0 transition-opacity group-hover:opacity-100">
                      Read Story &rarr;
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Tab 3: HR Learning */}
        {activeTab === "hr-learning" && (
          <div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {VIDEO_LEARNING.map((video, index) => (
                <ScrollReveal key={video.id} delay={0.1 * index}>
                  <Link
                    href="/learning"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-brand transition-all hover:-translate-y-1 hover:border-teal/30 hover:shadow-lg"
                  >
                    {/* Thumbnail placeholder with play button */}
                    <div className="relative aspect-video overflow-hidden bg-accent">
                      <LogoMark className="absolute -right-6 -top-8 h-48 w-48 text-teal opacity-[0.12]" />
                      <LogoMark className="absolute bottom-4 left-6 h-16 w-16 text-teal opacity-30" />

                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                          <Play className="h-6 w-6 text-teal" fill="currentColor" />
                        </div>
                      </div>

                      {/* Duration badge */}
                      <div className="absolute bottom-3 right-3 rounded-md bg-navy/80 px-2 py-0.5 text-xs font-medium text-white">
                        {formatDuration(video.durationSeconds)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">
                      <span className="inline-block w-fit rounded-full bg-blue/10 px-3 py-1 text-xs font-medium text-blue">
                        {video.category}
                      </span>
                      <h3 className="mt-3 text-base font-bold text-navy transition-colors group-hover:text-teal">
                        {video.title}
                      </h3>
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-teal">
                        Explore in Learning &amp; Growth &rarr;
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <div className="mt-10 text-center">
                <Link
                  href="/learning"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors hover:text-navy"
                >
                  Watch More on YouTube
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        )}
      </div>
    </section>
  );
}
