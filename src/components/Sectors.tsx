"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  HeartHandshake,
  Stethoscope,
  Landmark,
  MoonStar,
  Factory,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { sectors } from "@/lib/content";
import SectionHeading from "./SectionHeading";

const icons = [GraduationCap, HeartHandshake, Stethoscope, Landmark, MoonStar, Factory];

export default function Sectors() {
  const { t } = useLanguage();

  return (
    <section id="sectors" className="relative bg-ink py-20 text-white sm:py-28">
      <div className="halftone-light absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          dark
          index="02"
          kicker={{ en: "Who We Serve", bn: "যাদের সেবা দিই" }}
          title={{ en: "Every Sector, One Press", bn: "সব সেক্টর, এক প্রেস" }}
          sub={{
            en: "Government offices, NGOs, banks, universities, schools, hospitals and businesses across North Bengal rely on Comtech.",
            bn: "সরকারি অফিস, এনজিও, ব্যাংক, বিশ্ববিদ্যালয়, স্কুল, হাসপাতাল ও ব্যবসা প্রতিষ্ঠান — উত্তরবঙ্গ জুড়ে সবাই কমটেকের উপর আস্থা রাখে।",
          }}
        />

        <div className="grid gap-px overflow-hidden rounded-md border border-white/15 bg-white/15 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={s.title.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="group bg-ink p-7 transition-colors duration-300 hover:bg-[#1d2537]"
              >
                <Icon
                  strokeWidth={1.5}
                  className="h-7 w-7 text-white/50 transition-colors duration-300 group-hover:text-brand-yellow"
                />
                <h3 className="font-display mt-6 text-xl font-bold">{t(s.title)}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/60">{t(s.desc)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
