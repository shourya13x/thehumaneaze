"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function OurPhilosophySection() {
  return (
    <section className="section-padding bg-navy">
      <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
        <ScrollReveal>
          <span className="eyebrow text-teal/80">Our Philosophy</span>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mt-5 mx-auto text-2xl font-semibold leading-snug text-white md:text-3xl lg:text-4xl">
            &ldquo;We don&apos;t just manage HR. We make organizations work
            better.&rdquo;
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
