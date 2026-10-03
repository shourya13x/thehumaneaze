"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function WhoWeAreSection() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <span className="eyebrow inline-block rounded-full bg-teal/10 px-4 py-1.5 font-semibold">
                Who We Are
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4">
                We Make HR Work Better for Growing Businesses
              </h2>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 lg:pt-8">
            <ScrollReveal delay={0.2}>
              <div className="space-y-5 text-justify text-base text-navy/85 md:text-lg leading-relaxed">
                <p>
                  <span className="font-semibold"><span className="text-blue">The human</span><span className="text-teal">Eaze</span></span> helps growing businesses build people operations that are structured, scalable, and built for the way they actually work.
                </p>
                <p>
                  From HR strategy and policies to compliance, performance, employee experience, and day-to-day people operations, we bring structure to the processes behind your people so your business can focus on growing.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
