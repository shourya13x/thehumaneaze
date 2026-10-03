"use client";

import Link from "next/link";
import { Building2, ShieldCheck, Users, TrendingUp, Heart, BarChart3 } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SERVICE_CATEGORIES } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  Building2,
  ShieldCheck,
  Users,
  TrendingUp,
  Heart,
  BarChart3,
};

export function WhatWeDoSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <span className="eyebrow inline-block rounded-full bg-teal/10 px-4 py-1.5 font-semibold">WHAT WE DO</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 max-w-2xl">
            HR Solutions Built Around Your Business
          </h2>
        </ScrollReveal>

        {/* 6 service cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CATEGORIES.map((service, index) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <ScrollReveal key={service.id} delay={0.05 * index}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-brand transition-all hover:-translate-y-0.5 hover:border-teal/30 hover:shadow-md"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 transition-colors group-hover:bg-teal/20">
                    {Icon && <Icon className="h-5 w-5 text-teal" strokeWidth={1.5} />}
                  </div>
                  <h3 className="text-base font-bold text-navy transition-colors group-hover:text-teal">
                    {service.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-navy/70 leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
