"use client";

import { ArrowRight, Compass, FileText, Globe, MessageSquare, UserCheck, Briefcase } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SESSION_TYPES } from "@/lib/data-services";

const ICON_MAP: Record<string, React.ElementType> = {
  Compass,
  FileText,
  Linkedin: Globe,
  MessageSquare,
  UserCheck,
  Briefcase,
};

const HOW_IT_WORKS = [
  { num: "01", title: "Choose a Session", description: "Pick the session type that matches your needs." },
  { num: "02", title: "Pick a Time", description: "Select a convenient date and time slot." },
  { num: "03", title: "Make Payment", description: "Complete your booking with secure payment." },
  { num: "04", title: "Meet Your Expert", description: "Connect for your personalized session." },
];

export default function SessionsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream pb-0 pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ScrollReveal>
            <span className="eyebrow">Sessions</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-4">
              Personal Guidance. Practical Direction.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-lg text-gray">
              Book a one-on-one session with our experts for career guidance, resume reviews, interview preparation, and more.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Session cards */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SESSION_TYPES.map((session, index) => {
              const Icon = ICON_MAP[session.icon];
              return (
                <ScrollReveal key={session.id} delay={0.05 * index}>
                  <div className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-brand transition-all hover:border-teal/30 hover:shadow-md">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 transition-colors group-hover:bg-teal/20">
                      {Icon && <Icon className="h-5 w-5 text-teal" strokeWidth={1.5} />}
                    </div>
                    <h3 className="text-lg font-bold text-navy">{session.title}</h3>
                    <p className="mt-1 text-xl font-bold text-teal">{session.price}</p>
                    <p className="mt-3 flex-1 text-sm text-gray">{session.description}</p>
                    <a
                      href={session.bookingUrl}
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-teal/90 hover:shadow-md"
                    >
                      Book Now
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <ScrollReveal>
            <h2 className="text-center">How It Works</h2>
          </ScrollReveal>

          {/* Desktop: horizontal */}
          <div className="mt-12 hidden md:block">
            <div className="relative">
              <div className="absolute left-[12%] right-[12%] top-[18px] h-[2px] bg-gradient-to-r from-teal to-navy opacity-15" />
              <div className="grid grid-cols-4 gap-6">
                {HOW_IT_WORKS.map((step, index) => (
                  <ScrollReveal key={step.num} delay={0.1 * index}>
                    <div className="flex flex-col items-center text-center">
                      <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-teal text-xs font-bold text-white shadow-md">
                        {step.num}
                      </div>
                      <h3 className="mt-4 text-sm font-bold text-navy">{step.title}</h3>
                      <p className="mt-1 text-xs text-gray">{step.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: vertical */}
          <div className="mt-8 md:hidden">
            <div className="relative pl-8">
              <div className="absolute bottom-0 left-[17px] top-0 w-[2px] bg-gradient-to-b from-teal to-navy opacity-15" />
              <div className="space-y-6">
                {HOW_IT_WORKS.map((step, index) => (
                  <ScrollReveal key={step.num} delay={0.05 * index}>
                    <div className="relative flex gap-4">
                      <div className="absolute -left-8 flex h-9 w-9 items-center justify-center rounded-full bg-teal text-xs font-bold text-white shadow-md">
                        {step.num}
                      </div>
                      <div className="pl-5">
                        <h3 className="text-sm font-bold text-navy">{step.title}</h3>
                        <p className="mt-1 text-xs text-gray">{step.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
