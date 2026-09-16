"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { WORKFLOW_STEPS } from "@/lib/data";

export function HowWeWorkSection() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <span className="eyebrow">How We Work</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 max-w-xl">
            A Proven Process for Lasting Impact
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mt-4 text-gray">
            Every engagement follows a structured methodology designed to deliver measurable outcomes.
          </p>
        </ScrollReveal>

        {/* Desktop: horizontal flow */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[calc(8.33%+20px)] right-[calc(8.33%+20px)] top-[20px] h-[2px] bg-gradient-to-r from-teal via-blue to-navy opacity-20" />

            <div className="grid grid-cols-6 gap-4">
              {WORKFLOW_STEPS.map((step, index) => (
                <ScrollReveal key={step.number} delay={0.1 * index}>
                  <div className="flex flex-col items-center text-center">
                    {/* Numbered circle */}
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-teal text-sm font-bold text-white shadow-md">
                      {step.number}
                    </div>
                    <h3 className="mt-4 text-sm font-bold text-navy">{step.title}</h3>
                    <p className="mt-2 text-xs text-gray leading-relaxed">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: vertical flow */}
        <div className="mt-12 lg:hidden">
          <div className="relative pl-8">
            {/* Vertical connector line */}
            <div className="absolute bottom-0 left-[19px] top-0 w-[2px] bg-gradient-to-b from-teal via-blue to-navy opacity-20" />

            <div className="space-y-8">
              {WORKFLOW_STEPS.map((step, index) => (
                <ScrollReveal key={step.number} delay={0.05 * index}>
                  <div className="relative flex gap-5">
                    {/* Numbered circle */}
                    <div className="absolute -left-8 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white shadow-md">
                      {step.number}
                    </div>
                    <div className="pl-6">
                      <h3 className="text-base font-bold text-navy">{step.title}</h3>
                      <p className="mt-1 text-sm text-gray">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
