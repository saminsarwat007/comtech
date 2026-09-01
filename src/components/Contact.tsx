"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { locations } from "@/lib/content";
import { WhatsAppIcon } from "./Hero";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { lang, t } = useLanguage();
  const [active, setActive] = useState(0);
  const loc = locations[active];

  return (
    <section id="contact" className="bg-ink py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          dark
          index="06"
          kicker={{ en: "Visit or Message Us", bn: "আসুন বা মেসেজ করুন" }}
          title={{ en: "3 Locations Across Rangpur", bn: "রংপুর জুড়ে ৩টি ঠিকানা" }}
          sub={{
            en: "Walk in for a free consultation on any offset or digital printing job — big or small.",
            bn: "ছোট-বড় যেকোনো অফসেট বা ডিজিটাল প্রিন্টিং কাজের ফ্রি কনসালটেন্সি পেতে আজই চলে আসুন।",
          }}
        />

        {/* Location tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {locations.map((l, i) => (
            <button
              key={l.id}
              onClick={() => setActive(i)}
              className={`border px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                active === i
                  ? "border-white bg-white text-ink"
                  : "border-white/25 text-white/70 hover:border-white/60 hover:text-white"
              }`}
            >
              {t(l.name)}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            key={loc.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col justify-between border border-white/15 bg-white/[0.05] p-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold">{t(loc.name)}</h3>
              <p className="mt-3 text-lg">{t(loc.address)}</p>
              <p className="mt-1 text-sm text-white/60">({t(loc.landmark)})</p>

              <div className="mt-6 space-y-3">
                {loc.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:+88${p.replace(/-/g, "")}`}
                    className="flex items-center gap-3 text-lg font-semibold transition-colors hover:text-brand-yellow"
                  >
                    <Phone strokeWidth={1.5} className="h-5 w-5 shrink-0 text-white/50" />
                    {p}
                  </a>
                ))}
                <a
                  href={`mailto:${loc.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-brand-yellow"
                >
                  <Mail strokeWidth={1.5} className="h-5 w-5 shrink-0 text-white/50" />
                  {loc.email}
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {loc.whatsapp && (
                <a
                  href={`https://wa.me/${loc.whatsapp}?text=${encodeURIComponent(
                    lang === "bn"
                      ? "আসসালামু আলাইকুম! আমি প্রিন্টিং সেবা সম্পর্কে জানতে চাই।"
                      : "Hello Comtech! I want to know about your printing services."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] px-6 py-3 font-bold text-white transition-opacity duration-300 hover:opacity-90"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {lang === "bn" ? "হোয়াটসঅ্যাপ" : "WhatsApp"}
                </a>
              )}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/30 px-6 py-3 font-bold transition-colors duration-300 hover:border-white hover:bg-white hover:text-ink"
              >
                <MapPin strokeWidth={1.5} className="h-5 w-5 shrink-0" />
                {lang === "bn" ? "গুগল ম্যাপে দেখুন" : "Open in Google Maps"}
              </a>
            </div>
          </motion.div>

          <motion.div
            key={`map-${loc.id}`}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden border border-white/15"
          >
            <iframe
              title={`Google Map — ${loc.name.en}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&output=embed&hl=${lang}`}
              className="h-[380px] w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

