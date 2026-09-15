"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { VIDEO_LEARNING } from "@/lib/data";
import { LogoMark } from "@/components/brand/LogoMark";

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function HRLearningSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <span className="eyebrow">HR Learning</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 max-w-xl">Learn From Our Experts</h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {VIDEO_LEARNING.map((video, index) => (
            <ScrollReveal key={video.id} delay={0.1 * index}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-brand transition-all hover:shadow-md">
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
                  <h3 className="mt-3 text-base font-bold text-navy">{video.title}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors hover:text-navy"
            >
              Watch More on YouTube
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
