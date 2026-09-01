"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { services, waLink } from "@/lib/content";
import SectionHeading from "./SectionHeading";

const icons: Record<string, JSX.Element> = {
  offset: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8">
      <rect x="3" y="8" width="18" height="9" rx="1.5" />
      <circle cx="8" cy="12.5" r="2" />
      <circle cx="16" cy="12.5" r="2" />
      <path d="M6 8V5h12v3M7 17v3M17 17v3" />
    </svg>
  ),
  digital: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8">
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M3 9h18M7 20h10M9 16v4M15 16v4" />
    </svg>
  ),
  packaging: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8">
      <path d="M3 8l9-5 9 5v8l-9 5-9-5V8z" />
      <path d="M3 8l9 5 9-5M12 13v8" />
    </svg>
  ),
  binding: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8">
      <path d="M5 4h11a3 3 0 013 3v13H8a3 3 0 01-3-3V4z" />
      <path d="M8 4v13a3 3 0 003 3M5 8h3M5 12h3" />
    </svg>
  ),
  idcard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="11" r="2" />
      <path d="M6 16c.5-1.5 1.7-2 3-2s2.5.5 3 2M14 9h4M14 12h4M14 15h2" />
    </svg>
  ),
  merch: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8">
      <path d="M8 4l-4 3 2 3 2-1v11h8V9l2 1 2-3-4-3a4 4 0 01-8 0z" />
    </svg>
  ),
  design: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8">
      <path d="M12 19l7-7-4-4-7 7-1 5 5-1zM15 8l1-1a2.5 2.5 0 013.5 3.5L18.5 11" />
      <path d="M4 21h4" />
    </svg>
  ),
  ctp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  ),
};

export default function Services() {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          kicker={{ en: "What We Print", bn: "আমরা যা ছাপি" }}
          title={{ en: "Complete Printing Services", bn: "সম্পূর্ণ প্রিন্টিং সেবা" }}
          sub={{
            en: "From a single visiting card to national textbook runs — one press, every solution.",
            bn: "একটি ভিজিটিং কার্ড থেকে জাতীয় পাঠ্যপুস্তক — এক প্রেসেই সব সমাধান।",
          }}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.a
              key={s.icon}
              href={waLink(
                lang === "bn"
                  ? `আসসালামু আলাইকুম! আমি ${s.title.bn} সম্পর্কে জানতে চাই।`
                  : `Hello Comtech! I'm interested in ${s.title.en}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              className="group paper-card relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-brand-yellow/20 transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:scale-150" />
              <div className="mb-4 inline-flex rounded-xl bg-ink/5 p-3 text-brand-blue transition-colors duration-300 group-hover:bg-brand-red group-hover:text-white">
                {icons[s.icon]}
              </div>
              <h3 className="font-display mb-2 text-lg font-bold">{t(s.title)}</h3>
              <p className="text-sm leading-relaxed text-ink/65">{t(s.desc)}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-red opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {lang === "bn" ? "হোয়াটসঅ্যাপে জিজ্ঞেস করুন" : "Ask on WhatsApp"} →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
