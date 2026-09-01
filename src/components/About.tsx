"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const points = [
  {
    en: "Established in 1994 on Central Road, Rangpur — 30 years of continuous operation",
    bn: "১৯৯৪ সালে রংপুরের সেন্ট্রাল রোডে প্রতিষ্ঠিত — ৩০ বছরের অবিচ্ছিন্ন পথচলা",
  },
  {
    en: "Central member of the Bangladesh Mudran Shilpa Samity (Printing Industries Association)",
    bn: "বাংলাদেশ মুদ্রণ শিল্প সমিতির কেন্দ্রীয় সদস্য",
  },
  {
    en: "Fully licensed: press declaration, trade license, income tax, VAT, fire & factory licenses",
    bn: "সম্পূর্ণ লাইসেন্সকৃত: প্রেস ডিক্লারেশন, ট্রেড লাইসেন্স, আয়কর, ভ্যাট, ফায়ার ও কল-কারখানার লাইসেন্স",
  },
  {
    en: "EGP-registered enlisted vendor — participates in EGP tenders, OTP tenders & open quotations",
    bn: "ইজিপি নিবন্ধিত তালিকাভুক্ত ভেন্ডর — ইজিপি টেন্ডার, ওটিপি টেন্ডার ও ওপেন কোটেশনে অংশগ্রহণ করে",
  },
  {
    en: "Expert graphic designers plus Bangla, English & Arabic composers and proof readers",
    bn: "দক্ষ গ্রাফিক ডিজাইনার এবং বাংলা, ইংরেজি ও আরবি কম্পোজিটর ও প্রুফ রিডার",
  },
  {
    en: "Direct sourcing from paper mills & importers — best prices on paper, ink, plates & films",
    bn: "পেপার মিল ও আমদানিকারকদের কাছ থেকে সরাসরি সংগ্রহ — কাগজ, কালি, প্লেট ও ফিল্মে সেরা দাম",
  },
];

export default function About() {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="halftone py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-baseline gap-4 border-b border-ink/15 pb-4">
            <span className="font-display text-sm font-bold tabular-nums text-ink/40">05</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink/60">
              {t({ en: "Our Story", bn: "আমাদের গল্প" })}
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {lang === "bn"
              ? "৩০ বছর ধরে ছাপার শিল্পে"
              : "Three Decades in the Craft of Print"}
          </h2>
          <p className="mt-5 leading-relaxed text-ink/70">
            {lang === "bn"
              ? "বিভাগীয় শহর রংপুরের সেন্ট্রাল রোডে ১৯৯৪ সালে যাত্রা শুরু করে দীর্ঘ ৩০ বছরে কমটেক কম্পিউটার এন্ড প্রিন্টার্স রংপুরসহ উত্তরবঙ্গে অফসেট এবং ডিজিটাল প্রিন্টিং ক্ষেত্রে এক অগ্রণী প্রতিষ্ঠান হিসেবে পরিচিত। কঠোর শ্রম ও অভিজ্ঞতার সাথে যুগের চাহিদা অনুযায়ী প্রযুক্তি এনে কমটেক ধীরে ধীরে একটি কম্পোজিট প্রিন্টিং ফার্মে রূপ নিচ্ছে।"
              : "Starting its journey in 1994 on Central Road in the divisional city of Rangpur, Comtech Computer & Printers has grown over 30 years into a pioneering offset and digital printing house across Rangpur and North Bengal. With hard work, experience and continuous investment in modern technology, Comtech is steadily evolving into a full composite printing firm."}
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p, i) => (
              <motion.li
                key={p.en}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-ink/30 text-ink">
                  <Check strokeWidth={2.5} className="h-3 w-3" />
                </span>
                <span className="text-sm leading-relaxed text-ink/75">{t(p)}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="paper-card crop-corners p-4">
            <Image
              src="/images/binding-line.png"
              alt="14-clamp PBM hot glue book binding line at Comtech factory, Rangpur"
              width={933}
              height={267}
              className="w-full"
            />
            <p className="mt-2 text-center text-xs font-bold uppercase tracking-wider text-ink/50">
              {t({ en: "14-clamp binding line — 5,000 books/hour", bn: "১৪ ক্লাম বাইন্ডিং লাইন — ঘণ্টায় ৫,০০০ বই" })}
            </p>
          </div>

          <div className="bg-brand-blue p-8 text-white">
            <div className="reg-mark mb-4 text-brand-yellow" />
            <blockquote className="font-display text-xl font-semibold leading-relaxed">
              {lang === "bn"
                ? "“একজন ক্রেতাই আমাদের ব্যবসার গুরুত্বপূর্ণ মানুষ। তিনি আমাদের উপরে নির্ভর করেন না, বরং আমরাই তাঁর উপর নির্ভর করি।”"
                : "“The customer is the most important person in our business. They do not depend on us — we depend on them.”"}
            </blockquote>
            <p className="mt-4 text-sm text-white/70">
              {t({ en: "— The Comtech Family Creed", bn: "— কমটেক পরিবারের বিশ্বাস" })}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
