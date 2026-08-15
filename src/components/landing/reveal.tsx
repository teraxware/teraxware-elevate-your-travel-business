import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
            tone === "dark"
              ? "glass-dark text-primary-foreground"
              : "bg-secondary text-brand-navy"
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`mt-5 text-balance text-3xl font-bold sm:text-4xl md:text-5xl ${
          tone === "dark" ? "text-primary-foreground" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            tone === "dark" ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}