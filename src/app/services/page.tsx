"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ProjectServicesTab, RecurringEngagementsTab, ServiceWorkflow } from "@/components/services/ServicesComponents";

type TabValue = "project" | "recurring";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<TabValue>("project");

  return (
    <>
      {/* Header */}
      <section className="bg-cream pb-0 pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ScrollReveal>
            <span className="eyebrow">Services & Pricing</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-4">Our Services</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-lg text-gray">
              Transparent pricing for every stage of your HR journey. Choose from project-based engagements or ongoing partnerships.
            </p>
          </ScrollReveal>

          {/* Tab switcher */}
          <ScrollReveal delay={0.2}>
            <div className="mt-10 inline-flex rounded-xl border border-border bg-white p-1 shadow-brand">
              <button
                onClick={() => setActiveTab("project")}
                className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-all ${
                  activeTab === "project"
                    ? "bg-teal text-white shadow-sm"
                    : "text-navy/60 hover:text-navy"
                }`}
              >
                Project Services
              </button>
              <button
                onClick={() => setActiveTab("recurring")}
                className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-all ${
                  activeTab === "recurring"
                    ? "bg-teal text-white shadow-sm"
                    : "text-navy/60 hover:text-navy"
                }`}
              >
                Recurring Engagements
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tab content */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {activeTab === "project" ? <ProjectServicesTab /> : <RecurringEngagementsTab />}
          <ServiceWorkflow />
        </div>
      </section>
    </>
  );
}
