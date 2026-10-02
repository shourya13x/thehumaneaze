"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HeroDiagram } from "@/components/home/HeroDiagram";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream">

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <ScrollReveal>
              <span className="eyebrow">Making your path easier</span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="mt-6">
                People Operations &amp;{" "}
                <span className="text-teal">HR Solutions</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-navy/80">
                We help growing businesses build scalable HR systems that make people, processes, and performance work better together.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-medium text-white transition-all hover:bg-teal/90 hover:shadow-lg"
                >
                  Explore Our Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-navy/20 px-6 py-3 text-sm font-medium text-navy transition-all hover:border-navy/40 hover:bg-navy/5"
                >
                  Get a Proposal
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} direction="right">
            <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none">
              <div className="w-full max-w-[440px]">
                <HeroDiagram />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
