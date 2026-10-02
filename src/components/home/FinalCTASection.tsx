"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { LogoMark } from "@/components/brand/LogoMark";

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 md:py-24">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 items-center justify-center opacity-[0.12] lg:flex">
        <LogoMark className="h-[22rem] w-[22rem] text-teal" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <ScrollReveal>
              <span className="eyebrow">Making your path easier</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Let&apos;s make HR easier.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-4 text-white/60" style={{ maxWidth: "50ch" }}>
                Ready to build people operations that actually work? Let&apos;s start with a conversation about where you are and where you want to go.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-medium text-white transition-all hover:bg-teal/90 hover:shadow-lg"
                >
                  Get a Proposal
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/5"
                >
                  Explore Services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
