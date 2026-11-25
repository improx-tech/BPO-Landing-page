import { Check, Minus } from "lucide-react";
import { comparisonRows, whyContent } from "@/content/site";
import { FadeIn } from "./FadeIn";
import { Photo } from "./Photo";
import { SectionHeading } from "./SectionHeading";

const tableCols = "md:grid-cols-[minmax(0,3fr)_minmax(0,5fr)_minmax(0,5fr)]";

export function WhyImproxSection() {
  return (
    <section aria-labelledby="why-title" className="section-y bg-stone">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-stretch lg:gap-16">
          <FadeIn className="lg:h-full">
            <div className="group relative aspect-[16/10] overflow-hidden lg:h-full rounded-lg shadow-soft lg:aspect-auto lg:min-h-[32rem]">
              <Photo photo={whyContent.photo} aspect={4 / 5} sizes="(min-width: 1024px) 40vw, 100vw" zoom className="absolute inset-0" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading id="why-title" eyebrow={whyContent.eyebrow} title={whyContent.title} intro={whyContent.intro} />
            <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {whyContent.advantages.map((item) => (
                <li key={item.title} className="border-t border-gold/50 pt-5 sm:last:col-span-2">
                  <h3 className="font-semibold text-charcoal">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <div className="mt-16 overflow-hidden rounded-lg border border-border bg-surface lg:mt-20">
            <div className={`hidden border-b border-border md:grid ${tableCols}`} aria-hidden>
              <p className="eyebrow px-8 py-5 text-muted-foreground">Factor</p>
              <p className="eyebrow py-5 pl-8 pr-8 text-muted-foreground">In-house operations</p>
              <p className="eyebrow bg-forest px-8 py-5 text-gold">With Improx Technologies</p>
            </div>
            <dl>
              {comparisonRows.map((row) => (
                <div
                  key={row.factor}
                  className={`grid border-b border-border transition-colors duration-300 last:border-b-0 hover:bg-background ${tableCols}`}
                >
                  <dt className="px-6 pb-2 pt-6 font-semibold text-charcoal md:px-8 md:py-6">{row.factor}</dt>
                  <dd className="flex gap-3 px-6 py-3 text-sm leading-relaxed text-muted-foreground md:px-8 md:py-6">
                    <Minus aria-hidden className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="min-w-0">
                      <span className="sr-only">In-house: </span>
                      <span className="mb-1 block text-xs font-semibold uppercase tracking-wider md:hidden">In-house</span>
                      {row.inHouse}
                    </span>
                  </dd>
                  <dd className="flex gap-3 bg-forest/5 px-6 pb-6 pt-3 text-sm leading-relaxed text-charcoal md:px-8 md:py-6">
                    <Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-forest" />
                    <span className="min-w-0">
                      <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-forest md:hidden">With Improx</span>
                      <span className="sr-only">With Improx: </span>
                      {row.improx}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
