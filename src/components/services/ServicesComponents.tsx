"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import type { ServiceSegment } from "@/lib/types";
import { SERVICES, RECURRING_ENGAGEMENTS } from "@/lib/data-services";

const SEGMENTS: ServiceSegment[] = [
  "HR Foundation",
  "Compliance & HR Operations",
  "Talent & Recruitment",
  "HR Strategy",
  "Performance & Development",
  "Employee Experience",
  "HR Analytics & Technology",
  "Career & Talent Services",
];

function formatPrice(min: number, max: number): string {
  const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;
  return `${fmt(min)} – ${fmt(max)}`;
}

export function ProjectServicesTab() {
  const [activeSegment, setActiveSegment] = useState<ServiceSegment>("HR Foundation");
  const filteredServices = SERVICES.filter((s) => s.segment === activeSegment);

  return (
    <div>
      <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* Desktop: Left rail segment selector */}
        <div className="hidden lg:block">
          <nav className="sticky top-24 space-y-1">
            {SEGMENTS.map((segment) => (
              <button
                key={segment}
                onClick={() => setActiveSegment(segment)}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${
                  activeSegment === segment
                    ? "bg-teal/10 text-teal"
                    : "text-navy/60 hover:bg-navy/5 hover:text-navy"
                }`}
              >
                {segment}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile: Horizontal scroll tab strip */}
        <div className="overflow-x-auto pb-2 lg:hidden">
          <div className="flex gap-2" style={{ minWidth: "max-content" }}>
            {SEGMENTS.map((segment) => (
              <button
                key={segment}
                onClick={() => setActiveSegment(segment)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeSegment === segment
                    ? "bg-teal text-white"
                    : "bg-navy/5 text-navy/60 hover:bg-navy/10 hover:text-navy"
                }`}
              >
                {segment}
              </button>
            ))}
          </div>
        </div>

        {/* Right panel: Pricing table */}
        <div>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-brand md:p-8">
            <h3 className="text-xl font-bold text-navy">{activeSegment}</h3>
            <p className="mt-2 text-sm text-gray">
              Full line-item pricing for {activeSegment.toLowerCase()} services. All prices are indicative — final scope and pricing are customized per engagement.
            </p>

            {/* Pricing table */}
            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-cream">
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray">Service</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray">Price Range</th>
                    <th className="hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray md:table-cell">Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredServices.map((service, index) => (
                    <tr
                      key={service.id}
                      className={`border-b border-border last:border-0 ${
                        index % 2 === 0 ? "bg-white" : "bg-cream/50"
                      }`}
                    >
                      <td className="px-4 py-3.5 text-sm font-medium text-navy">{service.name}</td>
                      <td className="px-4 py-3.5 text-sm text-navy">
                        {service.isCustom ? (
                          <span className="inline-block rounded-full bg-blue/10 px-3 py-0.5 text-xs font-medium text-blue">Custom</span>
                        ) : (
                          formatPrice(service.priceMin, service.priceMax)
                        )}
                      </td>
                      <td className="hidden px-4 py-3.5 text-sm text-gray md:table-cell">{service.priceUnit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-gray">
              * Prices in INR (₹). Final pricing depends on scope, complexity, and organizational size.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RecurringEngagementsTab() {
  return (
    <div className="mt-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {RECURRING_ENGAGEMENTS.map((engagement, index) => (
          <ScrollReveal key={engagement.id} delay={0.05 * index}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-brand transition-all hover:border-teal/30 hover:shadow-md">
              <span className="inline-block w-fit rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
                {engagement.tier}
              </span>
              <h3 className="mt-4 text-base font-bold text-navy">{engagement.title}</h3>
              <p className="mt-2 flex-1 text-sm text-gray">{engagement.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={0.3}>
        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-medium text-white transition-all hover:bg-teal/90 hover:shadow-lg"
          >
            Get Custom Proposal
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </ScrollReveal>
    </div>
  );
}

export function ServiceWorkflow() {
  const steps = [
    { num: "01", title: "Choose Service" },
    { num: "02", title: "Select Scope" },
    { num: "03", title: "Choose Duration" },
    { num: "04", title: "Customize" },
    { num: "05", title: "Get Proposal" },
  ];

  return (
    <ScrollReveal>
      <div className="mt-20 rounded-2xl border border-border bg-white p-8 shadow-brand md:p-12">
        <h3 className="text-center text-xl font-bold text-navy">How It Works</h3>

        {/* Desktop: horizontal */}
        <div className="mt-10 hidden md:block">
          <div className="relative">
            <div className="absolute left-[10%] right-[10%] top-[18px] h-[2px] bg-gradient-to-r from-teal to-navy opacity-15" />
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-teal text-xs font-bold text-white">
                    {step.num}
                  </div>
                  <p className="mt-3 text-sm font-medium text-navy">{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="mt-8 md:hidden">
          <div className="relative pl-8">
            <div className="absolute bottom-0 left-[17px] top-0 w-[2px] bg-gradient-to-b from-teal to-navy opacity-15" />
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.num} className="relative flex items-center gap-4">
                  <div className="absolute -left-8 flex h-9 w-9 items-center justify-center rounded-full bg-teal text-xs font-bold text-white">
                    {step.num}
                  </div>
                  <p className="pl-5 text-sm font-medium text-navy">{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
