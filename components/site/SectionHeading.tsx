import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({ id, eyebrow, title, intro, className, align = "left" }: SectionHeadingProps) {
  return (
    <header className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("eyebrow flex items-center gap-3 text-forest", align === "center" && "justify-center")}>
        <span aria-hidden className="h-px w-8 bg-gold" />
        {eyebrow}
      </p>
      <h2 id={id} className="heading-section mt-5 text-charcoal">
        {title}
      </h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>}
    </header>
  );
}
