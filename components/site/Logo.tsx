import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  tone?: "light" | "dark";
}

/** Temporary Improx Technologies wordmark — replace with the uploaded logo file when provided. */
export function Logo({ className, tone = "dark" }: LogoProps) {
  const light = tone === "light";
  return (
    <span className={cn("inline-flex items-center gap-3", className)} aria-label="Improx Technologies">
      <svg aria-hidden viewBox="0 0 32 32" className="h-8 w-8 shrink-0">
        <rect x="1" y="1" width="30" height="30" rx="3" className="fill-none stroke-gold" strokeWidth="2" />
        <rect x="9" y="8" width="3.5" height="16" className="fill-gold" />
        <path d="M16 24V8l7 8-7 8Z" className="fill-gold" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={cn("text-lg font-bold tracking-tight", light ? "text-on-image" : "text-charcoal")}>
          Improx
        </span>
        <span className={cn("mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.28em]", light ? "text-on-image-muted" : "text-muted-foreground")}>
          Technologies
        </span>
      </span>
    </span>
  );
}
