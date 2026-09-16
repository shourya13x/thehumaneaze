"use client";

import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck, Users, Target, TrendingUp, Heart, BarChart3, GraduationCap } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SERVICE_CATEGORIES } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  Building2,
  ShieldCheck,
  Users,
  Target,
  TrendingUp,
  Heart,
  BarChart3,
  GraduationCap,
};

export function WhatWeDoSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <span className="eyebrow">What We Do</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 max-w-2xl">
            Comprehensive HR Solutions for Every Stage of Growth
          </h2>
        </ScrollReveal>

        {/* 8 service cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_CATEGORIES.map((service, index) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <ScrollReveal key={service.id} delay={0.05 * index}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-brand transition-all hover:border-teal/30 hover:shadow-md"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 transition-colors group-hover:bg-teal/20">
                    {Icon && <Icon className="h-5 w-5 text-teal" strokeWidth={1.5} />}
                  </div>
                  <h3 className="text-base font-bold text-navy">{service.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-gray">{service.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal transition-all group-hover:gap-2">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-medium text-white transition-all hover:bg-navy/90 hover:shadow-lg"
            >
              View All Services & Pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
