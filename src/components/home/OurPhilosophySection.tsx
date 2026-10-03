"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function OurPhilosophySection() {
  return (
    <section className="bg-navy py-7 sm:py-8 md:py-9 lg:py-11">
      <div className="mx-auto max-w-6xl px-5 md:px-8 text-center">
        <ScrollReveal>
          <p className="mx-auto flex w-full items-center justify-center gap-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            <span className="h-px w-8 bg-teal" aria-hidden="true" />
            Our Philosophy
            <span className="h-px w-8 bg-teal" aria-hidden="true" />
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p
            className="mt-4 sm:mt-5 mx-auto text-lg sm:text-xl md:text-2xl lg:text-[1.65rem] xl:text-[1.85rem] font-medium italic leading-snug text-white lg:whitespace-nowrap"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            &ldquo;We don&apos;t just manage HR.{" "}
            <span className="text-teal">We make organizations work better.</span>&rdquo;
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
