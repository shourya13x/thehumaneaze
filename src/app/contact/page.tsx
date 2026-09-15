"use client";

import { useActionState } from "react";
import { Mail, Phone, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { LogoMark } from "@/components/brand/LogoMark";
import { submitContactForm, type ContactFormState } from "./actions";

const HELP_OPTIONS = [
  "HR Foundation & Policies",
  "Compliance & Operations",
  "Talent & Recruitment",
  "HR Strategy",
  "Performance Management",
  "Employee Experience",
  "HR Technology",
  "Career Services",
  "Other",
];

const COMPANY_SIZES = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–500 employees",
  "500+ employees",
];

const initialState: ContactFormState = {
  success: false,
  errors: {},
  message: "",
};

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors || errors.length === 0) return null;
  return (
    <p className="mt-1 text-sm text-navy font-medium">
      {errors[0]}
    </p>
  );
}

export default function ContactPage() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  return (
    <>
      {/* Header */}
      <section className="bg-cream pb-0 pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ScrollReveal>
            <span className="eyebrow">Contact Us</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-4">Let&apos;s Start a Conversation.</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-lg text-gray">
              Tell us about your challenges and goals. We&apos;ll get back to you within 24 hours with a tailored response.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Contact info */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            {/* Left: Form */}
            <ScrollReveal>
              {state.success ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-teal/20 bg-white p-12 text-center shadow-brand">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
                    <CheckCircle2 className="h-8 w-8 text-teal" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-navy">Message Sent!</h3>
                  <p className="mt-2 text-gray">{state.message}</p>
                </div>
              ) : (
                <form action={formAction} className="rounded-2xl border border-border bg-white p-6 shadow-brand md:p-8">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg border border-border bg-cream px-4 py-2.5 text-sm text-navy outline-none transition-all placeholder:text-gray/50 focus:border-teal focus:ring-2 focus:ring-teal/20"
                        placeholder="Your name"
                      />
                      <FieldError errors={state.errors?.name} />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-border bg-cream px-4 py-2.5 text-sm text-navy outline-none transition-all placeholder:text-gray/50 focus:border-teal focus:ring-2 focus:ring-teal/20"
                        placeholder="you@company.com"
                      />
                      <FieldError errors={state.errors?.email} />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full rounded-lg border border-border bg-cream px-4 py-2.5 text-sm text-navy outline-none transition-all placeholder:text-gray/50 focus:border-teal focus:ring-2 focus:ring-teal/20"
                        placeholder="+91 98765 43210"
                      />
                      <FieldError errors={state.errors?.phone} />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-navy">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        className="w-full rounded-lg border border-border bg-cream px-4 py-2.5 text-sm text-navy outline-none transition-all placeholder:text-gray/50 focus:border-teal focus:ring-2 focus:ring-teal/20"
                        placeholder="Your company"
                      />
                      <FieldError errors={state.errors?.company} />
                    </div>
                  </div>

                  {/* Company Size */}
                  <div className="mt-5">
                    <label htmlFor="companySize" className="mb-1.5 block text-sm font-medium text-navy">
                      Company Size *
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      required
                      className="w-full rounded-lg border border-border bg-cream px-4 py-2.5 text-sm text-navy outline-none transition-all focus:border-teal focus:ring-2 focus:ring-teal/20"
                      defaultValue=""
                    >
                      <option value="" disabled>Select company size</option>
                      {COMPANY_SIZES.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                    <FieldError errors={state.errors?.companySize} />
                  </div>

                  {/* What do you need help with? */}
                  <div className="mt-5">
                    <p className="mb-3 text-sm font-medium text-navy">
                      What do you need help with? *
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {HELP_OPTIONS.map((option) => (
                        <label
                          key={option}
                          className="flex cursor-pointer items-center gap-2.5 rounded-lg border border-border px-3 py-2.5 text-sm text-navy transition-all hover:border-teal/30 hover:bg-teal/5 has-[:checked]:border-teal/40 has-[:checked]:bg-teal/10"
                        >
                          <input
                            type="checkbox"
                            name="helpNeeded"
                            value={option}
                            className="h-4 w-4 rounded border-border accent-teal"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                    <FieldError errors={state.errors?.helpNeeded} />
                  </div>

                  {/* Message */}
                  <div className="mt-5">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full rounded-lg border border-border bg-cream px-4 py-2.5 text-sm text-navy outline-none transition-all placeholder:text-gray/50 focus:border-teal focus:ring-2 focus:ring-teal/20"
                      placeholder="Tell us about your HR challenges and what you're looking to achieve..."
                    />
                    <FieldError errors={state.errors?.message} />
                  </div>

                  {/* Error message */}
                  {state.message && !state.success && (
                    <p className="mt-4 text-sm font-medium text-navy">{state.message}</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={pending}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-medium text-white transition-all hover:bg-teal/90 hover:shadow-lg disabled:opacity-60 sm:w-auto"
                  >
                    {pending ? "Sending..." : "Send Message"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </ScrollReveal>

            {/* Right: Contact info + Geometric */}
            <div className="space-y-8">
              <ScrollReveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-white p-6 shadow-brand">
                  <h3 className="text-lg font-bold text-navy">Direct Contact</h3>
                  <ul className="mt-5 space-y-4">
                    <li>
                      <a
                        href="mailto:hello@thehumaneaze.com"
                        className="flex items-center gap-3 text-sm text-gray transition-colors hover:text-navy"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal/10">
                          <Mail className="h-4 w-4 text-teal" strokeWidth={1.5} />
                        </div>
                        hello@thehumaneaze.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+919876543210"
                        className="flex items-center gap-3 text-sm text-gray transition-colors hover:text-navy"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal/10">
                          <Phone className="h-4 w-4 text-teal" strokeWidth={1.5} />
                        </div>
                        +91 98765 43210
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm text-gray transition-colors hover:text-navy"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal/10">
                          <MessageCircle className="h-4 w-4 text-teal" strokeWidth={1.5} />
                        </div>
                        WhatsApp
                      </a>
                    </li>
                  </ul>

                  <div className="mt-6 flex items-center gap-3">
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy/5 text-navy/40 transition-colors hover:bg-teal/10 hover:text-teal">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy/5 text-navy/40 transition-colors hover:bg-teal/10 hover:text-teal">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy/5 text-navy/40 transition-colors hover:bg-teal/10 hover:text-teal">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/></svg>
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Geometric graphic */}
              <ScrollReveal delay={0.2}>
                <div className="flex items-center justify-center rounded-2xl border border-border bg-white p-12 shadow-brand">
                  <LogoMark className="h-36 w-36 text-teal" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
