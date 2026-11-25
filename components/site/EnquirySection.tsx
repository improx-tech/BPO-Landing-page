"use client";

import type { FormEvent, ReactNode } from "react";
import { Check } from "lucide-react";
import { enquiryContent } from "@/content/site";
import { FadeIn } from "./FadeIn";
import { Photo } from "./Photo";
import { SectionHeading } from "./SectionHeading";

/** Enquiry form layout. Submission is wired up in a later phase. */
export function EnquirySection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section aria-labelledby="enquiry-title" className="section-y bg-background">
      <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <FadeIn className="flex h-full flex-col">
          <SectionHeading id="enquiry-title" eyebrow={enquiryContent.eyebrow} title={enquiryContent.title} />
          <ul className="mt-8 grid gap-3">
            {enquiryContent.expectations.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-medium text-charcoal">
                <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                {item}
              </li>
            ))}
          </ul>
          <div className="group relative mt-10 aspect-[16/10] overflow-hidden rounded-lg lg:aspect-auto lg:min-h-72 lg:flex-1">
            <Photo photo={enquiryContent.photo} aspect={4 / 3} sizes="(min-width: 1280px) 520px, (min-width: 1024px) 40vw, 100vw" zoom className="absolute inset-0" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="h-full">
          <form
            onSubmit={handleSubmit}
            aria-labelledby="enquiry-title"
            className="h-full rounded-lg border border-border bg-surface p-6 shadow-soft sm:p-8 lg:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="First Name" htmlFor="firstName">
                <input id="firstName" name="firstName" type="text" autoComplete="given-name" required placeholder="Priya" className="form-field" />
              </Field>
              <Field label="Last Name" htmlFor="lastName">
                <input id="lastName" name="lastName" type="text" autoComplete="family-name" required placeholder="Sharma" className="form-field" />
              </Field>
              <Field label="Email" htmlFor="email">
                <input id="email" name="email" type="email" autoComplete="email" required placeholder="priya@company.com" className="form-field" />
              </Field>
              <Field label="Contact Number" htmlFor="phone">
                <input id="phone" name="phone" type="tel" autoComplete="tel" required placeholder="+91 98765 43210" className="form-field" />
              </Field>
              <Field label="Schedule a Demo" htmlFor="demoDate" hint="Choose a preferred date for your consultation" className="sm:col-span-2">
                <input id="demoDate" name="demoDate" type="date" className="form-field" />
              </Field>
              <Field label="Message" htmlFor="message" className="sm:col-span-2">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us which processes you would like to outsource, your current volumes and your timeline."
                  className="form-field resize-y"
                />
              </Field>
            </div>
            <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-relaxed text-muted-foreground">
                Your details are used only to respond to this enquiry.
              </p>
              <button type="submit" className="btn-submit">
                Submit enquiry
              </button>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-charcoal">
        {label}
      </label>
      {children}
      {hint && <p className="mt-2 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}
