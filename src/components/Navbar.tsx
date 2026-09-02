"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { waLink } from "@/lib/content";

const waText = (lang: string) =>
  lang === "bn"
    ? "আসসালামু আলাইকুম! আমি আপনাদের প্রিন্টিং সেবা সম্পর্কে জানতে চাই।"
    : "Hello Comtech! I want to know about your printing services.";

const navItems = [
  { href: "#services", label: { en: "Services", bn: "সেবাসমূহ" } },
  { href: "#sectors", label: { en: "Sectors", bn: "সেক্টর" } },
  { href: "#machinery", label: { en: "Machinery", bn: "মেশিনারি" } },
  { href: "#clients", label: { en: "Clients", bn: "গ্রাহক" } },
  { href: "#about", label: { en: "About", bn: "আমাদের কথা" } },
  { href: "#contact", label: { en: "Contact", bn: "যোগাযোগ" } },
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/90 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="cmyk-bar h-1 w-full" />
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Comtech Computer & Printers logo"
            width={44}
            height={45}
            className="rounded-sm"
            priority
          />
          <div className="leading-tight">
            <span className="font-display block text-sm font-bold tracking-tight sm:text-base">
              {lang === "bn" ? "কমটেক কম্পিউটার এন্ড প্রিন্টার্স" : "COMTECH Computer & Printers"}
            </span>
            <span className="block text-[11px] text-ink/60">
              {lang === "bn" ? "রংপুর • ১৯৯৪ সাল থেকে" : "Rangpur • Since 1994"}
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-ink/80 transition-colors hover:text-ink"
            >
              {t(item.label)}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-red transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language toggle */}
          <div className="flex overflow-hidden border border-ink/40 text-xs font-bold">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 transition-colors ${
                lang === "en" ? "bg-ink text-white" : "bg-transparent text-ink hover:bg-ink/10"
              }`}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
            <button
              onClick={() => setLang("bn")}
              className={`px-3 py-1.5 font-bangla transition-colors ${
                lang === "bn" ? "bg-ink text-white" : "bg-transparent text-ink hover:bg-ink/10"
              }`}
              aria-pressed={lang === "bn"}
            >
              বাংলা
            </button>
          </div>

          <a
            href={waLink(waText(lang))}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-ink px-4 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-brand-red sm:block"
          >
            {lang === "bn" ? "হোয়াটসঅ্যাপ" : "WhatsApp Us"}
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-6 bg-ink transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-paper shadow-lg lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="border-b border-ink/10 py-3 text-base font-medium"
                >
                  {t(item.label)}
                </a>
              ))}
              <a
                href={waLink(waText(lang))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 bg-ink px-5 py-3 text-center font-bold text-white"
              >
                {lang === "bn" ? "হোয়াটসঅ্যাপে মেসেজ করুন" : "Message us on WhatsApp"}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
