"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { locations, waLink } from "@/lib/content";

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer style={{ background: "#0d1526" }}>
      <div className="cmyk-bar h-1.5 w-full" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 text-white sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Comtech logo" width={48} height={49} className="rounded-sm" />
            <div>
              <div className="font-display font-bold">
                {lang === "bn" ? "কমটেক কম্পিউটার এন্ড প্রিন্টার্স" : "COMTECH Computer & Printers"}
              </div>
              <div className="text-xs text-white/50">
                {t({ en: "Offset & Digital Printing • Since 1994", bn: "অফসেট ও ডিজিটাল মুদ্রণ • ১৯৯৪ থেকে" })}
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {t({
              en: "The trusted printing house of Rangpur — books, banners, packaging, ID cards, T-shirts, mugs, signboards and everything in between.",
              bn: "রংপুরের বিশ্বস্ত ছাপাখানা — বই, ব্যানার, প্যাকেজিং, আইডি কার্ড, টি-শার্ট, মগ, সাইনবোর্ডসহ সবকিছু।",
            })}
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block bg-[#25D366] px-5 py-2.5 text-sm font-bold transition-opacity hover:opacity-90"
          >
            {t({ en: "WhatsApp: 01715-004122", bn: "হোয়াটসঅ্যাপ: ০১৭১৫-০০৪১২২" })}
          </a>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-display mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">
            {t({ en: "Our Locations", bn: "আমাদের ঠিকানা" })}
          </h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {locations.map((l) => (
              <div key={l.id} className="text-sm">
                <div className="font-bold">{t(l.name)}</div>
                <div className="mt-1 text-white/60">{t(l.address)}</div>
                <div className="mt-2 space-y-0.5">
                  {l.phones.map((p) => (
                    <a key={p} href={`tel:+88${p.replace(/-/g, "")}`} className="block text-white/80 hover:text-brand-yellow">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Comtech Computer & Printers, Rangpur, Bangladesh.{" "}
        {t({ en: "All rights reserved.", bn: "সর্বস্বত্ব সংরক্ষিত।" })}
      </div>
    </footer>
  );
}
