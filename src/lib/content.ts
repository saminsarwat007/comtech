export type Lang = "en" | "bn";

export const WHATSAPP_NUMBER = "8801715004122";
export const bnDigits = (s: string | number) =>
  String(s).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);

export const waLink = (text?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export interface Location {
  id: string;
  name: { en: string; bn: string };
  address: { en: string; bn: string };
  landmark: { en: string; bn: string };
  phones: string[];
  whatsapp?: string;
  email: string;
  mapQuery: string;
}

export const locations: Location[] = [
  {
    id: "head-office",
    name: { en: "Head Office", bn: "হেড অফিস" },
    address: { en: "Central Road, Rangpur", bn: "সেন্ট্রাল রোড, রংপুর" },
    landmark: {
      en: "Haji Lane, in front of Jatiya Party office",
      bn: "হাজী লেন, জাতীয় পার্টি অফিসের সামনে",
    },
    phones: ["01715-004122", "02588810015"],
    whatsapp: "8801715004122",
    email: "comtech.printers@gmail.com",
    mapQuery: "Central Road, Rangpur, Bangladesh",
  },
  {
    id: "branch-office",
    name: { en: "Branch Office", bn: "শাখা অফিস" },
    address: { en: "Dhap Jail Road, Rangpur", bn: "ধাপ জেল রোড, রংপুর" },
    landmark: {
      en: "In front of Kachhir Uddin Memorial Hospital",
      bn: "কছির উদ্দিন মেমোরিয়াল হাসপাতালের সামনে",
    },
    phones: ["01798-933222"],
    whatsapp: "8801798933222",
    email: "comtech.printersdhap@gmail.com",
    mapQuery: "Dhap Jail Road, Rangpur, Bangladesh",
  },
  {
    id: "factory",
    name: { en: "Factory (Press)", bn: "ফ্যাক্টরি (প্রেস)" },
    address: {
      en: "Khasbagh, Tinmatha Mor, G.L. Roy Road, Rangpur",
      bn: "খাসবাগ, তিনমাথা মোড়, জি.এল.রায় রোড, রংপুর",
    },
    landmark: {
      en: "In front of Najmun Nahar Hospital",
      bn: "নাজমুন নাহার হাসপাতালের সামনে",
    },
    phones: ["02588810018", "01894-404477"],
    whatsapp: "8801894404477",
    email: "comtech.printers@gmail.com",
    mapQuery: "G.L. Roy Road, Khasbagh, Rangpur, Bangladesh",
  },
];

export const services = [
  {
    icon: "offset",
    title: { en: "Offset Printing", bn: "অফসেট প্রিন্টিং" },
    desc: {
      en: "Books, textbooks, exam scripts, diaries, calendars, magazines, registers & more on Heidelberg and Roland presses.",
      bn: "হাইডেলবার্গ ও রোল্যান্ড প্রেসে বই, পাঠ্যপুস্তক, পরীক্ষার খাতা, ডায়েরি, ক্যালেন্ডার, ম্যাগাজিন, রেজিস্টার খাতা ও আরও অনেক কিছু।",
    },
  },
  {
    icon: "digital",
    title: { en: "Digital Printing", bn: "ডিজিটাল প্রিন্টিং" },
    desc: {
      en: "Solvent, eco-solvent & UV printing — banners, billboards, signboards, festoons, PVC banners and display stands.",
      bn: "সলভেন্ট, ইকো-সলভেন্ট ও ইউভি প্রিন্টিং — ব্যানার, বিলবোর্ড, সাইনবোর্ড, ফেস্টুন, পিভিসি ব্যানার ও ডিসপ্লে স্ট্যান্ড।",
    },
  },
  {
    icon: "packaging",
    title: { en: "Packaging & Labels", bn: "প্যাকেজিং ও লেবেল" },
    desc: {
      en: "Medicine packets, cartons, soap wrappers, food packets, stickers and labels with die-cutting and foil embossing.",
      bn: "ঔষধের প্যাকেট, কার্টুন, সাবান মোড়ক, খাবারের প্যাকেট, স্টিকার ও লেবেল — ডাই কাটিং ও ফয়েল এমবুশসহ।",
    },
  },
  {
    icon: "binding",
    title: { en: "Book Binding", bn: "বুক বাইন্ডিং" },
    desc: {
      en: "Hot glue perfect binding, thread sewing, spiral & ring binding, lamination — up to 5,000 books per hour.",
      bn: "হট গ্লু পারফেক্ট বাইন্ডিং, জুস সেলাই, স্পাইরাল ও রিং বাইন্ডিং, লেমিনেশন — ঘণ্টায় ৫,০০০ বই পর্যন্ত।",
    },
  },
  {
    icon: "idcard",
    title: { en: "ID Cards & Cards", bn: "আইডি কার্ড ও কার্ড" },
    desc: {
      en: "Student & staff ID cards, visiting cards, invitation cards, certificates — 50 cards per hour.",
      bn: "ছাত্র ও কর্মচারী আইডি কার্ড, ভিজিটিং কার্ড, দাওয়াতপত্র, সার্টিফিকেট — ঘণ্টায় ৫০টি কার্ড।",
    },
  },
  {
    icon: "merch",
    title: { en: "T-Shirt & Mug Printing", bn: "টি-শার্ট ও মগ প্রিন্টিং" },
    desc: {
      en: "Multi-colour ceramic mug printing (30/hour) and T-shirt printing (500 pieces/hour) for events and promotions.",
      bn: "মাল্টি কালার সিরামিক মগ প্রিন্টিং (ঘণ্টায় ৩০টি) ও টি-শার্ট প্রিন্টিং (ঘণ্টায় ৫০০ পিস) — ইভেন্ট ও প্রমোশনের জন্য।",
    },
  },
  {
    icon: "design",
    title: { en: "Graphic Design & Composing", bn: "গ্রাফিক ডিজাইন ও কম্পোজ" },
    desc: {
      en: "Professional graphic designers and Bangla, English & Arabic composers with expert proof readers.",
      bn: "প্রফেশনাল গ্রাফিক্স ডিজাইনার এবং বাংলা, ইংরেজি ও আরবি কম্পোজিটর — অভিজ্ঞ প্রুফ রিডারসহ।",
    },
  },
  {
    icon: "ctp",
    title: { en: "CTP Plate Making", bn: "সিটিপি প্লেট মেকিং" },
    desc: {
      en: "In-house CTP exposure and plate washing — 35 plates per hour for fast offset turnaround.",
      bn: "নিজস্ব সিটিপি এক্সপোজার ও প্লেট ওয়াশ — দ্রুত অফসেট কাজের জন্য ঘণ্টায় ৩৫টি প্লেট।",
    },
  },
];

export const sectors = [
  {
    title: { en: "Education", bn: "শিক্ষা প্রতিষ্ঠান" },
    desc: {
      en: "Admission forms, prospectuses, diaries, ID cards, receipt books, exam scripts, syllabus, question papers, result sheets, certificates, posters & leaflets for schools, colleges, madrasas, kindergartens and coaching centres.",
      bn: "স্কুল-কলেজ, মাদ্রাসা, কিন্ডারগার্টেন ও কোচিং সেন্টারের ভর্তি ফরম, প্রসপেক্টাস, ডায়েরি, আইডি কার্ড, রসিদ বই, পরীক্ষার খাতা, সিলেবাস, প্রশ্নপত্র, রেজাল্ট শীট, প্রশংসাপত্র, পোস্টার ও লিফলেট।",
    },
  },
  {
    title: { en: "NGO & Microfinance", bn: "এনজিও ও মাইক্রোফাইন্যান্স" },
    desc: {
      en: "Project profiles, training modules, flip charts, flash cards, bulletins, annual reports, loan application forms, savings & loan pass books, deposit vouchers and all register books.",
      bn: "প্রজেক্ট প্রোফাইল, প্রশিক্ষণ মডিউল, ফ্লিপচার্ট, ফ্ল্যাশকার্ড, বুলেটিন, বার্ষিক প্রতিবেদন, ঋণের আবেদনপত্র, সঞ্চয় ও ঋণ পাশ বই, জমা ভাউচার ও সব ধরনের রেজিস্টার বুক।",
    },
  },
  {
    title: { en: "Healthcare", bn: "স্বাস্থ্যসেবা" },
    desc: {
      en: "Prescription pads, files & folders, envelopes, visiting cards, ECG / CT scan / X-ray envelopes and admission treatment files for hospitals, clinics and diagnostic centres.",
      bn: "হাসপাতাল, ক্লিনিক ও ডায়াগনস্টিক সেন্টারের প্রেসক্রিপশন প্যাড, ফাইল-ফোল্ডার, খাম, ভিজিটিং কার্ড, ইসিজি / সিটি স্ক্যান / এক্স-রে খাম ও অ্যাডমিশন ট্রিটমেন্ট ফাইল।",
    },
  },
  {
    title: { en: "Government & Tenders", bn: "সরকারি ও টেন্ডার" },
    desc: {
      en: "National textbooks, university exam scripts, ballot papers, election posters. Comtech participates in EGP tenders, OTP tenders and open quotations as an enlisted vendor.",
      bn: "জাতীয় পাঠ্যপুস্তক, বিশ্ববিদ্যালয়ের পরীক্ষার খাতা, ব্যালট পেপার, নির্বাচনী পোস্টার। কমটেক ইজিপি টেন্ডার, ওটিপি টেন্ডার ও ওপেন কোটেশনে অংশগ্রহণ করে।",
    },
  },
  {
    title: { en: "Religious", bn: "ধর্মীয়" },
    desc: {
      en: "Waz mahfil & Islamic jalsa posters, leaflets, volunteer ID cards, invitations, donation receipt books and Ramadan calendars.",
      bn: "ওয়াজ মাহফিল ও ইসলামী জলসার পোস্টার, লিফলেট, ভলান্টিয়ার আইডি কার্ড, দাওয়াতপত্র, চাঁদা আদায় রসিদ বই ও রমজানের ক্যালেন্ডার।",
    },
  },
  {
    title: { en: "Industry & Business", bn: "শিল্প ও ব্যবসা" },
    desc: {
      en: "Product packaging, cartons, wrappers, labels, stickers, shop signs, billboards, banners and complete brand printing for businesses of every size.",
      bn: "পণ্যের প্যাকেজিং, কার্টুন, মোড়ক, লেবেল, স্টিকার, দোকানের সাইন, বিলবোর্ড, ব্যানার — ছোট-বড় সব ব্যবসার সম্পূর্ণ ব্র্যান্ড প্রিন্টিং।",
    },
  },
];

export const machines = [
  { img: "four-hi-web-offset.png", name: { en: "Four-Hi Web Offset (Gaj) — 20″", bn: "ফোর হাই ওয়েব অফসেট (গজ) — ২০ ইঞ্চি" }, capacity: { en: "8-colour, 30,000 forms/hour", bn: "৮ কালার, ঘণ্টায় ৩০ হাজার ফর্মা" } },
  { img: "heidelberg-sord.png", name: { en: "Heidelberg SORD 2-Colour — 25/36″", bn: "হাইডেলবার্গ সর্ড বাই কালার — ২৫/৩৬ ইঞ্চি" }, capacity: { en: "2-colour, 10,000 sheets/hour", bn: "২ কালার, ঘণ্টায় ১০ হাজার শিট" } },
  { img: "ronald-record.png", name: { en: "Ronald Record — 25/38″", bn: "রোনাল্ড রেকর্ড — ২৫/৩৮ ইঞ্চি" }, capacity: { en: "2-colour, 5,000 sheets/hour", bn: "২ কালার, ঘণ্টায় ৫ হাজার শিট" } },
  { img: "perv-2c.png", name: { en: "Perv 2C 2-Colour — 22/32″", bn: "পারভ 2C বাই কালার — ২২/৩২ ইঞ্চি" }, capacity: { en: "2-colour, 5,000 sheets/hour", bn: "২ কালার, ঘণ্টায় ৫ হাজার শিট" } },
  { img: "roland-perv-2c.png", name: { en: "Roland Perv 2C — 23/36″", bn: "রোল্যান্ড পারভ 2C — ২৩/৩৬ ইঞ্চি" }, capacity: { en: "2-colour, 5,000 sheets/hour", bn: "২ কালার, ঘণ্টায় ৫ হাজার শিট" } },
  { img: "heidelberg-emo.png", name: { en: "Heidelberg EMO (Germany) — 18/25″", bn: "হাইডেলবার্গ ইমো (জার্মানি) — ১৮/২৫ ইঞ্চি" }, capacity: { en: "Single colour, 6,000 sheets/hour", bn: "সিঙ্গেল কালার, ঘণ্টায় ৬ হাজার শিট" } },
  { img: "heidelberg-kord.png", name: { en: "Heidelberg KORS — 20/28″", bn: "হাইডেলবার্গ কর্জ — ২০/২৮ ইঞ্চি" }, capacity: { en: "Single colour, 4,000 sheets/hour", bn: "সিঙ্গেল কালার, ঘণ্টায় ৪ হাজার শিট" } },
  { img: "heidelberg-kord2.png", name: { en: "Heidelberg KORD — 18/25.25″", bn: "হাইডেলবার্গ কর্ড — ১৮/২৫.২৫ ইঞ্চি" }, capacity: { en: "Single colour, 4,000 sheets/hour", bn: "সিঙ্গেল কালার, ঘণ্টায় ৪ হাজার শিট" } },
  { img: "solna-single.png", name: { en: "Solna Single Colour — 18/25″", bn: "স্যোলনা সিঙ্গেল কালার — ১৮/২৫ ইঞ্চি" }, capacity: { en: "Single colour, 4,000 sheets/hour", bn: "সিঙ্গেল কালার, ঘণ্টায় ৪ হাজার শিট" } },
  { img: "dx7-eco-solvent.png", name: { en: "DX7 Eco-Solvent Printer", bn: "DX7 ইকো-সলভেন্ট প্রিন্টার" }, capacity: { en: "Multi-colour, 300 sq ft/hour", bn: "মাল্টি কালার, ঘণ্টায় ৩০০ স্কয়ার ফিট" } },
  { img: "dx5-solvent.png", name: { en: "DX5 Solvent Printer", bn: "DX5 সলভেন্ট প্রিন্টার" }, capacity: { en: "Multi-colour, 500 sq ft/hour", bn: "মাল্টি কালার, ঘণ্টায় ৫০০ স্কয়ার ফিট" } },
  { img: "binding-line.png", name: { en: "14-Clamp PBM Hot Glue Binding Line", bn: "১৪ ক্লাম পিবিএম হট গ্লু বুক বাইন্ডিং মেশিন" }, capacity: { en: "5,000 books/hour", bn: "ঘণ্টায় ৫ হাজার কপি বই" } },
  { img: "martini-binder.png", name: { en: "5-Clamp Muller Martini Hot Glue Binder", bn: "৫ ক্লাম মোলার মার্টিন হট গ্লু বাইন্ডিং মেশিন" }, capacity: { en: "2,000 books/hour", bn: "ঘণ্টায় ২ হাজার বই" } },
  { img: "clamp-binder.png", name: { en: "1-Clamp China Hot Glue Binder", bn: "১ ক্লাম চায়না হট গ্লু বাইন্ডিং মেশিন" }, capacity: { en: "2,000 books/hour", bn: "ঘণ্টায় ২ হাজার বই" } },
  { img: "thread-sewing.png", name: { en: "Book Thread Sewing Machine", bn: "বই এর ফর্মা জুস সেলাই (বাইন্ডিং) মেশিন" }, capacity: { en: "5,000 forms/hour", bn: "ঘণ্টায় ৫ হাজার ফর্মা জুস সেলাই" } },
  { img: "polar-cutting.png", name: { en: "German Polar Paper Cutter — 36″ & 45″", bn: "জার্মানি পোলার পেপার কাটিং — ৩৬ ও ৪৫ ইঞ্চি" }, capacity: { en: "100 reams/hour", bn: "ঘণ্টায় ১০০ রিম কাগজ কাটিং" } },
  { img: "wohlenberg-cutting.png", name: { en: "German Wohlenberg Paper Cutter — 36″", bn: "জার্মানি ওলেনবার্গ পেপার কাটিং — ৩৬ ইঞ্চি" }, capacity: { en: "100 reams/hour", bn: "ঘণ্টায় ১০০ রিম কাগজ কাটিং" } },
  { img: "three-knife.png", name: { en: "Wohlenberg 3-Knife Book Cutter", bn: "জার্মানি ওলেনবার্গ ৩ নাইফ বুক কাটিং মেশিন" }, capacity: { en: "10,000 books/hour", bn: "ঘণ্টায় ১০,০০০ বই কাটিং" } },
  { img: "die-cutting.png", name: { en: "Die Cutting — 19/26″ & 24/32″", bn: "ডাই কাটিং — ১৯/২৬ ও ২৪/৩২ ইঞ্চি" }, capacity: { en: "15,000 sheets/hour", bn: "ঘণ্টায় ১৫ হাজার শিট কাটিং" } },
  { img: "foil-embossing.png", name: { en: "Foil Embossing Machine (Germany)", bn: "ফয়েল এ্যাম্বুস মেশিন (জার্মানি)" }, capacity: { en: "2,000 sheets/hour", bn: "ঘণ্টায় ২ হাজার কাগজ ফয়েল" } },
  { img: "lamination-42.png", name: { en: "Lamination Machine — 42″", bn: "লেমিনেশন মেশিন — ৪২ ইঞ্চি" }, capacity: { en: "3,000 sheets/hour", bn: "ঘণ্টায় ৩ হাজার শিট" } },
  { img: "lamination-roll.png", name: { en: "Roll Lamination Machine", bn: "রোল লেমিনেশন মেশিন" }, capacity: { en: "5,000 sq ft/hour", bn: "ঘণ্টায় ৫ হাজার স্কয়ার ফিট" } },
  { img: "ctp-exposure.png", name: { en: "CTP Exposure Machine", bn: "সিটিপি এক্সপোজার মেশিন" }, capacity: { en: "35 plates/hour", bn: "ঘণ্টায় ৩৫টি প্লেট" } },
  { img: "ctp-plate-wash.png", name: { en: "CTP Plate Wash Machine", bn: "সিটিপি প্লেট ওয়াশ মেশিন" }, capacity: { en: "35 plates/hour", bn: "ঘণ্টায় ৩৫টি প্লেট" } },
  { img: "id-card-printer.png", name: { en: "ID Card Printer", bn: "আইডি কার্ড প্রিন্টার" }, capacity: { en: "50 cards/hour", bn: "ঘণ্টায় ৫০টি কার্ড" } },
  { img: "mug-press.png", name: { en: "Ceramic Mug Printer (Multi-Colour)", bn: "সিরামিক মগ প্রিন্টিং মেশিন (মাল্টি কালার)" }, capacity: { en: "30 mugs/hour", bn: "ঘণ্টায় ৩০টি মগ প্রিন্ট" } },
  { img: "tshirt-press.png", name: { en: "T-Shirt Printing Machine", bn: "টি-শার্ট প্রিন্টিং মেশিন" }, capacity: { en: "500 pieces/hour", bn: "ঘণ্টায় ৫০০ পিস" } },
  { img: "spiral-binder.png", name: { en: "Spiral Notebook Binding Machine", bn: "স্পাইরাল নোটবুক বাইন্ডিং মেশিন" }, capacity: { en: "30 pieces/hour", bn: "ঘণ্টায় ৩০ পিস" } },
  { img: "ring-binder.png", name: { en: "Ring Spiral Notebook Binder", bn: "রিং স্পাইরাল খাতা, নোটবুক বাইন্ডিং মেশিন" }, capacity: { en: "40 pieces/hour", bn: "ঘণ্টায় ৪০ পিস" } },
];

export const clients = [
  "CARE", "Plan International", "RDRS Bangladesh", "LAMB", "Save the Children",
  "ActionAid Bangladesh", "Islamic Relief Bangladesh", "Concern Ltd.", "UCEP Bangladesh",
  "Prime Medical College", "Rangpur Medical College", "JANO", "Gram Bikash Kendra",
  "Gono Kallyan Sangstha (GKS)", "Life Care", "ESDO", "ASOD", "Motahar Group",
  "Rangpur Cantonment Schools", "Bangladesh Government", "KMMCH", "Lions Club",
  "Sight is My Right", "ConnectHomes", "Eshoo Desh Gori", "Bangladesh Shishu Academy",
];
