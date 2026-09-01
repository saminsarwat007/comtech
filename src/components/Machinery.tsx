"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { machines } from "@/lib/content";
import SectionHeading from "./SectionHeading";

const INITIAL = 8;

export default function Machinery() {
  const { lang, t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? machines : machines.slice(0, INITIAL);

  return (
    <section id="machinery" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          kicker={{ en: "Production Power", bn: "প্রোডাকশন ক্ষমতা" }}
          title={{ en: "Our Printing Machinery", bn: "আমাদের প্রিন্টিং মেশিনারিজ" }}
          sub={{
            en: "German Heidelberg & Polar, Swedish Solna, web offset lines, CTP plant, large-format printers and a full binding & finishing floor.",
            bn: "জার্মান হাইডেলবার্গ ও পোলার, সুইডিশ স্যোলনা, ওয়েব অফসেট লাইন, সিটিপি প্ল্যান্ট, লার্জ-ফরম্যাট প্রিন্টার এবং সম্পূর্ণ বাইন্ডিং ও ফিনিশিং ব্যবস্থা।",
          }}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((m, i) => (
            <motion.div
              key={m.img}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="group paper-card overflow-hidden rounded-2xl"
            >
              <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-ink/[0.03] to-ink/[0.08] p-4">
                <Image
                  src={`/images/${m.img}`}
                  alt={m.name.en}
                  width={380}
                  height={220}
                  className="max-h-36 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="cmyk-bar absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-sm font-bold leading-snug">{t(m.name)}</h3>
                <p className="text-xs text-ink/55">{t(m.capacity)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="ink-btn rounded-full border-2 border-ink px-8 py-3 font-bold"
          >
            {showAll
              ? lang === "bn" ? "কম দেখুন" : "Show Less"
              : lang === "bn" ? `সব ${machines.length}টি মেশিন দেখুন` : `View All ${machines.length} Machines`}
          </button>
        </div>
      </div>
    </section>
  );
}
