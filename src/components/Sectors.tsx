"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { sectors } from "@/lib/content";

const colors = ["border-cmyk-c", "border-cmyk-m", "border-brand-yellow", "border-ink", "border-brand-red", "border-brand-blue"];

export default function Sectors() {
  const { t } = useLanguage();

  return (
    <section id="sectors" className="relative bg-ink py-20 text-white sm:py-24">
      <div className="halftone-light absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-brand-yellow" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-yellow">
              {t({ en: "Who We Serve", bn: "যাদের সেবা দিই" })}
            </span>
            <span className="h-px w-8 bg-brand-yellow" />
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t({ en: "Every Sector, One Press", bn: "সব সেক্টর, এক প্রেস" })}
          </h2>
          <p className="mt-4 text-white/60">
            {t({
              en: "Government offices, NGOs, banks, universities, schools, hospitals and businesses across North Bengal rely on Comtech.",
              bn: "সরকারি অফিস, এনজিও, ব্যাংক, বিশ্ববিদ্যালয়, স্কুল, হাসপাতাল ও ব্যবসা প্রতিষ্ঠান — উত্তরবঙ্গ জুড়ে সবাই কমটেকের উপর আস্থা রাখে।",
            })}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <motion.div
              key={s.title.en}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.1 }}
              className={`rounded-2xl border-t-4 ${colors[i % colors.length]} bg-white/[0.06] p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.12]`}
            >
              <h3 className="font-display mb-3 text-xl font-bold">{t(s.title)}</h3>
              <p className="text-sm leading-relaxed text-white/70">{t(s.desc)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
