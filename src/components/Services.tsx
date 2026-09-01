"use client";

import { motion } from "framer-motion";
import {
  Printer,
  MonitorCheck,
  Package,
  BookOpen,
  IdCard,
  Shirt,
  PenTool,
  ScanLine,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { services, waLink } from "@/lib/content";
import SectionHeading from "./SectionHeading";

const icons: Record<string, JSX.Element> = {
  offset: <Printer strokeWidth={1.5} className="h-7 w-7" />,
  digital: <MonitorCheck strokeWidth={1.5} className="h-7 w-7" />,
  packaging: <Package strokeWidth={1.5} className="h-7 w-7" />,
  binding: <BookOpen strokeWidth={1.5} className="h-7 w-7" />,
  idcard: <IdCard strokeWidth={1.5} className="h-7 w-7" />,
  merch: <Shirt strokeWidth={1.5} className="h-7 w-7" />,
  design: <PenTool strokeWidth={1.5} className="h-7 w-7" />,
  ctp: <ScanLine strokeWidth={1.5} className="h-7 w-7" />,
};

export default function Services() {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="01"
          kicker={{ en: "What We Print", bn: "আমরা যা ছাপি" }}
          title={{ en: "Complete Printing Services", bn: "সম্পূর্ণ প্রিন্টিং সেবা" }}
          sub={{
            en: "From a single visiting card to national textbook runs — one press, every solution.",
            bn: "একটি ভিজিটিং কার্ড থেকে জাতীয় পাঠ্যপুস্তক — এক প্রেসেই সব সমাধান।",
          }}
        />

        <div className="grid gap-px overflow-hidden rounded-md border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="group relative flex min-h-[230px] flex-col bg-paper p-6 transition-colors duration-300 hover:bg-[#fffdf9]"
            >
              <div className="flex items-start justify-between">
                <div className="text-ink/70 transition-colors duration-300 group-hover:text-brand-red">
                  {icons[s.icon]}
                </div>
                <ArrowUpRight
                  strokeWidth={1.5}
                  className="h-5 w-5 text-ink/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-red"
                />
              </div>
              <h3 className="font-display mt-auto pt-8 text-lg font-bold leading-snug">{t(s.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{t(s.desc)}</p>
              <span className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-red opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {lang === "bn" ? "হোয়াটসঅ্যাপে জিজ্ঞেস করুন" : "Ask on WhatsApp"}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
