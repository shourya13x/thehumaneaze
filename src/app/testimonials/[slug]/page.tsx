import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Quote, CheckCircle2, Building, Briefcase } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

interface TestimonialPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TESTIMONIALS.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: TestimonialPageProps): Promise<Metadata> {
  const { slug } = await params;
  const testimonial = TESTIMONIALS.find((t) => t.slug === slug);
  if (!testimonial) return { title: "Testimonial Not Found" };

  return {
    title: `${testimonial.clientName} Story | Testimonials | The humanEaze`,
    description: testimonial.quote,
  };
}

export default async function TestimonialDetailPage({ params }: TestimonialPageProps) {
  const { slug } = await params;
  const testimonial = TESTIMONIALS.find((t) => t.slug === slug);

  if (!testimonial) {
    notFound();
  }

  return (
    <div className="bg-cream min-h-screen">
      {/* Header section */}
      <section className="border-b border-border bg-white pb-16 pt-12 md:pb-20 md:pt-16">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy/70 transition-colors hover:text-teal"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 md:h-20 md:w-20 shrink-0 items-center justify-center rounded-full bg-navy text-xl md:text-2xl font-black text-white shadow-brand">
                {testimonial.initials}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal">
                  Client Story &amp; Testimonial
                </span>
                <h1 className="mt-1 text-2xl md:text-4xl font-extrabold text-navy">
                  {testimonial.clientName}
                </h1>
                <p className="text-base text-gray font-medium">
                  {testimonial.clientTitle}
                  {testimonial.company ? ` at ${testimonial.company}` : ""}
                </p>
              </div>
            </div>

            {testimonial.industry && (
              <div className="flex items-center gap-2 text-xs font-semibold text-navy/70 bg-cream border border-border px-3.5 py-2 rounded-lg self-start md:self-auto">
                <Briefcase className="h-4 w-4 text-teal" />
                <span>{testimonial.industry}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Quote section */}
      <section className="border-b border-border bg-accent/30 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="relative rounded-2xl bg-white p-8 md:p-12 shadow-brand border border-border">
            <Quote className="h-12 w-12 text-teal/30" strokeWidth={1.5} />
            <blockquote className="mt-4 text-xl md:text-2xl font-medium leading-relaxed text-navy">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-6 border-t border-border pt-4 text-right">
              <span className="text-sm font-bold text-teal">
                — {testimonial.clientName}, {testimonial.clientTitle}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative & Highlights */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8 space-y-12">
          {/* Partnership Highlights */}
          {testimonial.highlights && testimonial.highlights.length > 0 && (
            <div className="rounded-2xl border border-border bg-white p-8 md:p-10 shadow-brand">
              <h2 className="text-xl md:text-2xl font-bold text-navy">
                Key Transformation Highlights
              </h2>
              <div className="mt-6 space-y-3">
                {testimonial.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal" />
                    <span className="text-base text-navy/85 font-medium leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Story */}
          {testimonial.story && testimonial.story.length > 0 && (
            <div className="rounded-2xl border border-border bg-white p-8 md:p-10 shadow-brand">
              <h2 className="text-xl md:text-2xl font-bold text-navy">
                The Partnership Journey
              </h2>
              <div className="mt-6 space-y-4 text-base md:text-lg text-gray leading-relaxed">
                {testimonial.story.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="rounded-2xl border border-teal/20 bg-white p-8 md:p-12 text-center shadow-brand">
            <h3 className="text-2xl font-bold text-navy md:text-3xl">
              Ready to Build Better People Operations?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-base text-gray">
              Partner with The humanEaze to bring structure, scalability, and clarity to your team.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-teal/90 hover:shadow-lg"
              >
                Discuss Your HR Need
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-navy/20 px-6 py-3 text-sm font-semibold text-navy transition-all hover:bg-navy/5"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
