"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HeroDiagram } from "@/components/home/HeroDiagram";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-7xl px-5 pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16 lg:pt-14 lg:pb-20 md:px-8">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          <div className="min-w-0">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-navy/[0.03] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy/70">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                Making your path easier
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="mt-4 sm:mt-6 text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] font-bold tracking-tight text-navy leading-[1.12]">
                People Operations &amp;{" "}
                <span className="text-teal">HR Solutions</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-[1.125rem] leading-relaxed text-navy/75 max-w-lg">
                We help growing businesses build scalable HR systems that make people, processes, and performance work better together.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-teal px-5 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-sm transition-all hover:bg-teal/90 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                >
                  Explore Our Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-navy/20 bg-white/80 px-5 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-semibold text-navy shadow-2xs transition-all hover:border-navy/40 hover:bg-white hover:-translate-y-0.5 active:translate-y-0"
                >
                  Get a Proposal
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} direction="right" className="min-w-0 w-full flex items-center justify-center">
            <div className="relative flex w-full max-w-full items-center justify-center">
              <div className="w-full max-w-full lg:max-w-[600px] flex items-center justify-center">
                <HeroDiagram />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
