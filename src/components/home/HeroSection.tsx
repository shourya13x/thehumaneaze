"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { LogoMark } from "@/components/brand/LogoMark";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="pointer-events-none absolute -right-16 top-8 opacity-[0.07] md:right-8 md:top-12">
        <LogoMark className="h-[28rem] w-[28rem] text-teal md:h-[36rem] md:w-[36rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <ScrollReveal>
              <span className="eyebrow">Making your path easier</span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="mt-6">
                People operations that actually{" "}
                <span className="text-teal">work.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-gray">
                We help growing businesses build HR systems that connect people, process, and technology into one seamless operation.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-medium text-white transition-all hover:bg-teal/90 hover:shadow-lg"
                >
                  Explore Services
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
              <div className="relative flex aspect-square w-full max-w-[420px] items-center justify-center">
                <div className="absolute inset-[8%] rounded-full bg-accent" />
                <LogoMark className="relative z-10 h-[58%] w-[58%] text-teal" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
