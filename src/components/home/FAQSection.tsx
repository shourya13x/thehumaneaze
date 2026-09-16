"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/data";

export function FAQSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="eyebrow">FAQ</span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 text-center">Frequently Asked Questions</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Accordion className="mt-12">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                className="border-b border-border"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium text-navy hover:text-teal hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-gray">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
