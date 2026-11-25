"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { services } from "@/content/site";
import { cn } from "@/lib/cn";
import { FadeIn } from "./FadeIn";
import { Photo } from "./Photo";
import { SectionHeading } from "./SectionHeading";

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const current = services[active] ?? services[0]!;

  return (
    <section aria-labelledby="services-title" className="section-y bg-background">
      <div className="container-site">
        <FadeIn>
          <SectionHeading
            id="services-title"
            eyebrow="Our services"
            title="Our Business Process Outsourcing Services"
            intro="Seven core service lines, each delivered by a dedicated team with documented procedures, quality checks and regular performance reporting."
          />
        </FadeIn>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          {/* Detail panel — desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-stone shadow-soft">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={current.title}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
                  >
                    <Photo photo={current.photo} aspect={4 / 3} sizes="(min-width: 1280px) 520px, 42vw" />
                  </motion.div>
                </AnimatePresence>
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.35 }}
                  className="mt-8"
                  aria-live="polite"
                >
                  <p className="eyebrow text-gold">{String(active + 1).padStart(2, "0")} / 07</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-charcoal">{current.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{current.detail}</p>
                  <ul className="mt-6 grid gap-3">
                    {current.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm font-medium text-charcoal">
                        <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Service list */}
          <ol className="border-t border-line">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = index === active;
              return (
                <li
                  key={service.title}
                  tabIndex={0}
                  aria-current={isActive ? "true" : undefined}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={cn(
                    "group relative cursor-default border-b border-line py-7 outline-none transition-colors duration-300 focus-visible:bg-surface md:py-8 lg:px-6",
                    isActive ? "lg:bg-surface" : "hover:bg-surface/60",
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "absolute left-0 top-0 hidden h-full w-0.5 origin-top bg-gold transition-transform duration-500 lg:block",
                      isActive ? "scale-y-100" : "scale-y-0",
                    )}
                  />
                  <div className="flex gap-5">
                    <span
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-md border transition-colors duration-300",
                        isActive
                          ? "border-forest bg-forest text-primary-foreground"
                          : "border-border bg-surface text-forest group-hover:border-forest",
                      )}
                    >
                      <Icon aria-hidden className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-lg font-semibold tracking-tight text-charcoal md:text-xl">{service.title}</h3>
                        <span className="text-xs font-semibold tabular-nums text-gold">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-2 leading-relaxed text-muted-foreground">{service.summary}</p>

                      {/* Image + detail inline on mobile and tablet */}
                      <div className="mt-5 lg:hidden">
                        <div className="group aspect-[16/9] overflow-hidden rounded-md bg-stone">
                          <Photo photo={service.photo} aspect={16 / 9} sizes="(min-width: 768px) 80vw, 100vw" zoom />
                        </div>
                        <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                          {service.points.map((point) => (
                            <li key={point} className="flex items-start gap-2 text-sm text-charcoal">
                              <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
