"use client";

import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CASE_STUDIES } from "@/lib/data";
import { LogoMark } from "@/components/brand/LogoMark";

function CaseStudyGraphic({ index }: { index: number }) {
  return (
    <div className="relative flex h-40 items-center justify-center overflow-hidden bg-accent">
      {index === 1 ? (
        <>
          <LogoMark className="absolute left-8 h-24 w-24 text-teal opacity-20" />
          <LogoMark className="relative h-20 w-20 text-teal" />
        </>
      ) : index === 2 ? (
        <>
          <div className="absolute h-32 w-32 rounded-full bg-teal/10" />
          <LogoMark className="relative h-20 w-20 text-teal" />
        </>
      ) : (
        <LogoMark className="h-20 w-20 text-teal" />
      )}
    </div>
  );
}

export function CaseStudiesSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <span className="eyebrow">Case Studies</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 max-w-xl">Real Results for Real Businesses</h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((study, index) => (
            <ScrollReveal key={study.id} delay={0.1 * index}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-brand transition-all hover:shadow-md">
                {/* Geometric graphic */}
                <div className="overflow-hidden">
                  <CaseStudyGraphic index={index} />
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-block w-fit rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
                    {study.category}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-navy">{study.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-gray">{study.resultLine}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue transition-all group-hover:gap-2">
                    Read More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
