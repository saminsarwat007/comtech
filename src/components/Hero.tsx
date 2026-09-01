"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { machines, waLink, bnDigits } from "@/lib/content";

const stats = [
  { value: "30+", label: { en: "Years of Trust", bn: "বছরের আস্থা" } },
  { value: `${machines.length}`, label: { en: "Production Machines", bn: "প্রোডাকশন মেশিন" } },
  { value: "70+", label: { en: "Institutional Clients", bn: "প্রাতিষ্ঠানিক গ্রাহক" } },
  { value: "3", label: { en: "Locations in Rangpur", bn: "রংপুরে শাখা" } },
];

export default function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section id="top" className="ruled relative overflow-hidden pb-20 pt-32 sm:pt-36">
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2.5 border border-ink/20 bg-[#fffdf9] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-ink/70"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-red" />
            {lang === "bn" ? "১৯৯৪ সাল থেকে রংপুরে" : "Since 1994 · Rangpur"}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.6rem]"
          >
            {lang === "bn" ? (
              <>
                রংপুরের বিশ্বস্ত{" "}
                <span className="relative inline-block text-brand-red">
                  অফসেট ও ডিজিটাল
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 9" fill="none" preserveAspectRatio="none">
                    <path d="M2 7C50 2 150 2 198 7" stroke="var(--brand-yellow)" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                প্রিন্টিং প্রেস
              </>
            ) : (
              <>
                Rangpur&apos;s Trusted{" "}
                <span className="relative inline-block text-brand-red">
                  Offset &amp; Digital
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 9" fill="none" preserveAspectRatio="none">
                    <path d="M2 7C50 2 150 2 198 7" stroke="var(--brand-yellow)" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                Printing Press
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg"
          >
            {lang === "bn"
              ? "কমটেক কম্পিউটার এন্ড প্রিন্টার্স — ৩০ বছর ধরে উত্তরবঙ্গের অগ্রণী ছাপাখানা। বই থেকে বিলবোর্ড, প্যাকেজিং থেকে আইডি কার্ড — সব ধরনের প্রিন্টিং এক ছাদের নিচে।"
              : "Comtech Computer & Printers — North Bengal's leading printing house for 30 years. From books to billboards, packaging to ID cards — every kind of printing under one roof."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href={waLink(
                lang === "bn"
                  ? "আসসালামু আলাইকুম! আমি একটি প্রিন্টিং কাজের কোটেশন চাই।"
                  : "Hello Comtech! I would like a quote for a printing job."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-ink px-7 py-3.5 font-bold text-white transition-colors duration-300 hover:bg-brand-red"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {lang === "bn" ? "ফ্রি কোটেশন নিন" : "Get a Free Quote"}
            </a>
            <a
              href="tel:+8801715004122"
              className="border border-ink/30 px-7 py-3.5 font-bold text-ink transition-colors duration-300 hover:border-ink hover:bg-[#fffdf9]"
            >
              {lang === "bn" ? "কল করুন: ০১৭১৫-০০৪১২২" : "Call: 01715-004122"}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 grid grid-cols-2 divide-x divide-ink/15 border-y border-ink/15 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.value} className="px-4 py-5 first:pl-0">
                <div className="font-display text-3xl font-bold tabular-nums">
                  {lang === "bn" ? bnDigits(s.value) : s.value}
                </div>
                <div className="mt-1 text-xs font-medium text-ink/55">{t(s.label)}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative"
        >
          <div className="paper-card crop-corners relative p-5">
            <div className="flex items-center justify-between pb-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/45">
                Press Floor · Khasbagh, Rangpur
              </span>
              <span className="reg-mark scale-75 text-ink/35" />
            </div>
            <Image
              src="/images/heidelberg-sord.png"
              alt="Heidelberg 2-colour offset printing press at Comtech, Rangpur"
              width={748}
              height={346}
              className="w-full"
              priority
            />
            <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-3">
              <span className="text-xs font-bold uppercase tracking-widest text-ink/50">
                Heidelberg SORD · 25/36″
              </span>
              <span className="cmyk-bar h-1.5 w-16" />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="paper-card p-3">
              <Image
                src="/images/dx5-solvent.png"
                alt="DX5 large-format solvent printer"
                width={296}
                height={190}
                className="mx-auto max-h-24 w-auto object-contain"
              />
              <span className="mt-2 block text-center text-[10px] font-bold uppercase tracking-[0.2em] text-ink/50">
                {lang === "bn" ? "লার্জ ফরম্যাট" : "Large Format"}
              </span>
            </div>
            <div className="paper-card p-3">
              <Image
                src="/images/id-cards.png"
                alt="Full-colour ID card printing"
                width={150}
                height={115}
                className="mx-auto max-h-24 w-auto object-contain"
              />
              <span className="mt-2 block text-center text-[10px] font-bold uppercase tracking-[0.2em] text-ink/50">
                {lang === "bn" ? "আইডি কার্ড" : "ID Cards"}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
