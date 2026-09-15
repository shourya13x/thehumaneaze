"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { LogoMark } from "@/components/brand/LogoMark";

export function WhoWeAreSection() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div>
            <ScrollReveal>
              <span className="eyebrow">Who We Are</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4">
                Your Partner in Building People Operations That Scale
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-gray">
                The humanEaze is a boutique HR consulting firm that helps growing businesses build, optimize, and scale their people operations. We work with startups, SMEs, and enterprises to create HR systems that are practical, compliant, and human-centered.
              </p>
            </ScrollReveal>
          </div>

          {/* Right — Philosophy card */}
          <ScrollReveal delay={0.15}>
            <div className="rounded-2xl border border-border bg-cream p-8 shadow-brand md:p-10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10">
                <LogoMark className="h-5 w-5 text-teal" />
              </div>
              <h3 className="text-xl font-bold text-navy">Our Philosophy</h3>
              <p className="mt-3 text-gray">
                We don&apos;t manage HR in silos. We connect people, process, and technology into one system — because great workplaces aren&apos;t built with disconnected policies and fragmented tools.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["People-First", "Systems Thinking", "Scalable Design"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
