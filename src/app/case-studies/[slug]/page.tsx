import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Quote } from "lucide-react";
import { CASE_STUDIES } from "@/lib/data";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((cs) => cs.slug === slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | Case Studies | The humanEaze`,
    description: study.resultLine,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!study) {
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

          <div className="mt-8">
            <span className="inline-block rounded-full bg-teal/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal">
              {study.category}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold text-navy md:text-5xl md:leading-tight">
              {study.title}
            </h1>
            <p className="mt-4 text-lg text-gray md:text-xl leading-relaxed">
              {study.resultLine}
            </p>

            {study.clientType && (
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-navy/80">
                <span className="text-gray">Client Profile:</span>
                <span className="rounded-md bg-cream px-2.5 py-1 text-navy border border-border">
                  {study.clientType}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      {study.metrics && study.metrics.length > 0 && (
        <section className="border-b border-border bg-accent/40 py-10">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="grid gap-6 sm:grid-cols-3">
              {study.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-border bg-white p-6 text-center shadow-brand"
                >
                  <p className="text-3xl font-black text-teal md:text-4xl">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-navy">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Narrative */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8 space-y-16">
          {/* The Challenge */}
          {study.challenge && (
            <div className="rounded-2xl border border-border bg-white p-8 md:p-10 shadow-brand">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold text-navy">The Challenge</h2>
              </div>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-gray">
                {study.challenge}
              </p>
            </div>
          )}

          {/* The Solution */}
          {study.solution && study.solution.length > 0 && (
            <div className="rounded-2xl border border-border bg-white p-8 md:p-10 shadow-brand">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold text-navy">Our Approach &amp; Solution</h2>
              </div>
              <p className="mt-4 text-base text-gray leading-relaxed">
                We worked hands-on with leadership and frontline managers to design, implement, and institutionalize practical HR frameworks:
              </p>
              <ul className="mt-6 space-y-3.5">
                {study.solution.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-xs font-bold text-teal">
                      {idx + 1}
                    </span>
                    <span className="text-base text-navy/85 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Results & Impact */}
          {study.results && study.results.length > 0 && (
            <div className="rounded-2xl border border-border bg-white p-8 md:p-10 shadow-brand">
              <h2 className="text-2xl font-bold text-navy">Measurable Impact</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {study.results.map((result, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-border/80 bg-cream/50 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    <span className="text-sm font-medium text-navy leading-relaxed">
                      {result}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Client Testimonial */}
          {study.quote && (
            <div className="relative overflow-hidden rounded-2xl bg-navy p-8 md:p-12 text-white shadow-xl">
              <Quote className="h-10 w-10 text-teal/40" />
              <p className="mt-4 text-lg md:text-xl font-medium leading-relaxed italic text-white/90">
                &ldquo;{study.quote.text}&rdquo;
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-bold text-white">{study.quote.author}</p>
                <p className="text-sm text-teal">{study.quote.role}</p>
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="rounded-2xl border border-teal/20 bg-white p-8 md:p-12 text-center shadow-brand">
            <h3 className="text-2xl font-bold text-navy md:text-3xl">
              Facing a Similar HR Challenge?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-base text-gray">
              We help growing businesses build structured, scalable HR systems tailored to the way they actually operate.
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
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
