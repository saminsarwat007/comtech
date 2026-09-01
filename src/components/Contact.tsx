"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { locations } from "@/lib/content";
import { WhatsAppIcon } from "./Hero";

export default function Contact() {
  const { lang, t } = useLanguage();
  const [active, setActive] = useState(0);
  const loc = locations[active];

  return (
    <section id="contact" className="bg-ink py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
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
              {t({ en: "Visit or Message Us", bn: "আসুন বা মেসেজ করুন" })}
            </span>
            <span className="h-px w-8 bg-brand-yellow" />
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t({ en: "3 Locations Across Rangpur", bn: "রংপুর জুড়ে ৩টি ঠিকানা" })}
          </h2>
          <p className="mt-4 text-white/60">
            {t({
              en: "Walk in for a free consultation on any offset or digital printing job — big or small.",
              bn: "ছোট-বড় যেকোনো অফসেট বা ডিজিটাল প্রিন্টিং কাজের ফ্রি কনসালটেন্সি পেতে আজই চলে আসুন।",
            })}
          </p>
        </motion.div>

        {/* Location tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {locations.map((l, i) => (
            <button
              key={l.id}
              onClick={() => setActive(i)}
              className={`rounded-full border-2 px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                active === i
                  ? "border-brand-yellow bg-brand-yellow text-ink"
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
            className="flex flex-col justify-between rounded-2xl bg-white/[0.06] p-8 backdrop-blur-sm"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-brand-yellow">{t(loc.name)}</h3>
              <p className="mt-3 text-lg">{t(loc.address)}</p>
              <p className="mt-1 text-sm text-white/60">({t(loc.landmark)})</p>

              <div className="mt-6 space-y-3">
                {loc.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:+88${p.replace(/-/g, "")}`}
                    className="flex items-center gap-3 text-lg font-semibold transition-colors hover:text-brand-yellow"
                  >
                    <PhoneIcon />
                    {p}
                  </a>
                ))}
                <a
                  href={`mailto:${loc.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-brand-yellow"
                >
                  <MailIcon />
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
                  className="flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-bold text-white transition-transform duration-300 hover:scale-105"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {lang === "bn" ? "হোয়াটসঅ্যাপ" : "WhatsApp"}
                </a>
              )}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 font-bold transition-colors duration-300 hover:border-brand-yellow hover:text-brand-yellow"
              >
                <PinIcon />
                {lang === "bn" ? "গুগল ম্যাপে দেখুন" : "Open in Google Maps"}
              </a>
            </div>
          </motion.div>

          <motion.div
            key={`map-${loc.id}`}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-2xl border-4 border-white/10"
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

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 shrink-0 text-brand-yellow">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 shrink-0 text-brand-yellow">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 shrink-0">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
