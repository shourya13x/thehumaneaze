"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TEAM_MEMBERS } from "@/lib/data";

export function MeetTheTeamSection() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <span className="eyebrow">Our Team</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 max-w-xl">Meet the People Behind the Work</h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member, index) => (
            <ScrollReveal key={member.id} delay={0.1 * index}>
              <div className="flex flex-col items-center rounded-2xl border border-border bg-cream p-6 text-center shadow-brand">
                {/* Portrait placeholder — geometric initials */}
                <div className="relative">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-navy">
                    <span className="text-2xl font-bold text-white">{member.initials}</span>
                  </div>
                  {/* Decorative dot */}
                  <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-cream bg-teal" />
                </div>

                <h3 className="mt-5 text-base font-bold text-navy">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-teal">{member.role}</p>
                <p className="mt-3 text-sm text-gray">{member.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
