"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function SectionHeading({
  index,
  kicker,
  title,
  sub,
  dark,
}: {
  index?: string;
  kicker: { en: string; bn: string };
  title: { en: string; bn: string };
  sub?: { en: string; bn: string };
  dark?: boolean;
}) {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="mb-14"
    >
      <div
        className={`flex items-baseline gap-4 border-b pb-4 ${
          dark ? "border-white/15" : "border-ink/15"
        }`}
      >
        {index && (
          <span
            className={`font-display text-sm font-bold tabular-nums ${
              dark ? "text-white/40" : "text-ink/40"
            }`}
          >
            {index}
          </span>
        )}
        <span
          className={`text-[11px] font-bold uppercase tracking-[0.3em] ${
            dark ? "text-white/60" : "text-ink/60"
          }`}
        >
          {t(kicker)}
        </span>
        <span className={`reg-mark ml-auto hidden scale-75 sm:block ${dark ? "text-white/25" : "text-ink/25"}`} />
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
          {t(title)}
        </h2>
        {sub && (
          <p className={`max-w-md text-[15px] leading-relaxed lg:justify-self-end ${dark ? "text-white/60" : "text-ink/60"}`}>
            {t(sub)}
          </p>
        )}
      </div>
    </motion.div>
  );
}
