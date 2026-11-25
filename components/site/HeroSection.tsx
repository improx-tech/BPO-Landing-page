import { heroContent, heroPhoto } from "@/content/site";
import { FadeIn } from "./FadeIn";
import { Photo } from "./Photo";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[min(88svh,56rem)] items-end overflow-hidden bg-charcoal">
      <div className="absolute inset-0 -z-10">
        <Photo
          photo={heroPhoto}
          aspect={16 / 9}
          sizes="100vw"
         
          priority
        />
        <div aria-hidden className="hero-overlay absolute inset-0" />
      </div>

      <div className="container-site pb-12 pt-28 md:pb-16 lg:pb-20">
        <div className="max-w-3xl">
          <FadeIn immediate>
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span aria-hidden className="h-px w-10 bg-gold" />
              {heroContent.eyebrow}
            </p>
          </FadeIn>
          <FadeIn immediate delay={0.1}>
            <h1 id="hero-title" className="heading-hero mt-6 text-on-image">
              {heroContent.title}
            </h1>
          </FadeIn>
          <FadeIn immediate delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-image md:text-xl">{heroContent.intro}</p>
          </FadeIn>
        </div>

        <FadeIn immediate delay={0.35}>
          <ul className="mt-10 grid max-w-3xl gap-px overflow-hidden rounded-md border border-on-image/20 bg-on-image/20 sm:grid-cols-3">
            {heroContent.highlights.map((item) => (
              <li key={item} className="bg-charcoal/40 px-5 py-4 text-sm font-medium text-on-image backdrop-blur-sm">
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
