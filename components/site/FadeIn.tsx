"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Fade on mount instead of when scrolled into view. */
  immediate?: boolean;
  as?: "div" | "li" | "article" | "header";
}

/** Subtle fade-and-rise used throughout the page. Respects reduced-motion preferences. */
export function FadeIn({ children, className, delay = 0, immediate = false, as = "div" }: FadeInProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  const hidden = { opacity: 0, y: reduce ? 0 : 16 };
  const shown = { opacity: 1, y: 0 };
  const transition = { duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] as const };

  return immediate ? (
    <Comp className={className} initial={hidden} animate={shown} transition={transition}>
      {children}
    </Comp>
  ) : (
    <Comp
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={transition}
    >
      {children}
    </Comp>
  );
}
