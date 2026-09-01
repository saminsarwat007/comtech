"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { waLink } from "@/lib/content";
import { WhatsAppIcon } from "./Hero";

export default function WhatsAppFloat() {
  const { lang } = useLanguage();

  return (
    <motion.a
      href={waLink(
        lang === "bn"
          ? "আসসালামু আলাইকুম! আমি প্রিন্টিং সেবা সম্পর্কে জানতে চাই।"
          : "Hello Comtech! I want to know about your printing services."
      )}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 18 }}
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3.5 pl-4 pr-5 text-white shadow-2xl shadow-black/25 transition-transform duration-300 hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.4s]" />
      <WhatsAppIcon className="h-6 w-6" />
      <span className="text-sm font-bold">
        {lang === "bn" ? "মেসেজ করুন" : "Chat with us"}
      </span>
    </motion.a>
  );
}
