"use client";

import { Quote } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TESTIMONIALS } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <span className="eyebrow">Testimonials</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 max-w-xl">What Our Clients Say</h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={0.1 * index}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-cream p-8 shadow-brand">
                {/* Quote icon */}
                <Quote className="h-8 w-8 text-teal/30" strokeWidth={1.5} />

                {/* Quote text */}
                <p className="mt-4 flex-1 text-base leading-relaxed text-navy">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy">{testimonial.clientName}</p>
                    <p className="text-xs text-gray">{testimonial.clientTitle}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
