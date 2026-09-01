"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { clients } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Clients() {
  const { t } = useLanguage();
  const row1 = clients.filter((_, i) => i % 2 === 0);
  const row2 = clients.filter((_, i) => i % 2 === 1);

  return (
    <section id="clients" className="overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="04"
          kicker={{ en: "Trusted By", bn: "যারা আস্থা রাখে" }}
          title={{ en: "70+ Institutions Print With Us", bn: "৭০+ প্রতিষ্ঠান আমাদের সাথে ছাপে" }}
          sub={{
            en: "International NGOs, government bodies, medical colleges, schools and businesses across Rangpur Division.",
            bn: "আন্তর্জাতিক এনজিও, সরকারি সংস্থা, মেডিকেল কলেজ, স্কুল ও ব্যবসা প্রতিষ্ঠান — রংপুর বিভাগ জুড়ে।",
          }}
        />
      </div>

      <div className="marquee-mask space-y-5">
        {[row1, row2].map((row, idx) => (
          <div key={idx} className="flex overflow-hidden">
            <div
              className="animate-marquee flex shrink-0 items-center gap-5 pr-5"
              style={idx === 1 ? { animationDirection: "reverse", animationDuration: "52s" } : undefined}
            >
              {[...row, ...row].map((c, i) => (
                <span
                  key={`${c}-${i}`}
                  className="paper-card whitespace-nowrap px-6 py-3 text-sm font-bold text-ink/75"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto mt-10 max-w-xl px-4 text-center text-sm text-ink/50"
      >
        {t({
          en: "Including CARE, Plan International, Save the Children, RDRS Bangladesh, LAMB, ActionAid, Islamic Relief and many more.",
          bn: "কেয়ার, প্ল্যান ইন্টারন্যাশনাল, সেভ দ্য চিলড্রেন, আরডিআরএস বাংলাদেশ, ল্যাম্ব, অ্যাকশনএইড, ইসলামিক রিলিফসহ আরও অনেকে।",
        })}
      </motion.p>
    </section>
  );
}
