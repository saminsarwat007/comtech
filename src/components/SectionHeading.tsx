"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function SectionHeading({
  kicker,
  title,
  sub,
}: {
  kicker: { en: string; bn: string };
  title: { en: string; bn: string };
  sub?: { en: string; bn: string };
}) {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-12 max-w-2xl text-center"
    >
      <div className="mb-3 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-brand-red" />
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">
          {t(kicker)}
        </span>
        <span className="h-px w-8 bg-brand-red" />
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{t(title)}</h2>
      {sub && <p className="mt-4 text-ink/60">{t(sub)}</p>}
    </motion.div>
  );
}
