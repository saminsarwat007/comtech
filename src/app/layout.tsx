import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Hind_Siliguri, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});
const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali"],
  variable: "--font-bangla",
});
const notoSerifBengali = Noto_Serif_Bengali({
  weight: ["400", "600", "700", "800"],
  subsets: ["bengali"],
  variable: "--font-bangla-serif",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://comtech-printers.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Comtech Computer & Printers — Best Printing Press in Rangpur, Bangladesh | Offset & Digital Printing Since 1994",
    template: "%s | Comtech Computer & Printers, Rangpur",
  },
  description:
    "Comtech Computer & Printers (কমটেক কম্পিউটার এন্ড প্রিন্টার্স) — the leading offset & digital printing press in Rangpur, Bangladesh since 1994. Books, banners, packaging, ID cards, T-shirt & mug printing, signboards & more. Call or WhatsApp 01715-004122.",
  keywords: [
    "printing press Rangpur", "printing Rangpur", "offset printing Rangpur",
    "digital printing Rangpur", "printers in Rangpur Bangladesh", "Comtech Rangpur",
    "Comtech Computer and Printers", "book printing Rangpur", "banner printing Rangpur",
    "packaging printing Rangpur", "ID card printing Rangpur", "t-shirt printing Rangpur",
    "mug printing Rangpur", "signboard Rangpur", "billboard printing Rangpur",
    "রংপুর প্রিন্টিং প্রেস", "রংপুর ছাপাখানা", "কমটেক কম্পিউটার এন্ড প্রিন্টার্স",
    "অফসেট প্রিন্টিং রংপুর", "ডিজিটাল প্রিন্টিং রংপুর", "ব্যানার প্রিন্টিং রংপুর",
    "printing press Bangladesh", "best printing press North Bengal",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Comtech Computer & Printers",
    title: "Comtech Computer & Printers — Best Printing Press in Rangpur, Bangladesh",
    description:
      "Offset & digital printing in Rangpur since 1994. Books, banners, packaging, ID cards, T-shirts, mugs & more. WhatsApp 01715-004122.",
    locale: "en_US",
    alternateLocale: "bn_BD",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Comtech Computer & Printers, Rangpur" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comtech Computer & Printers — Printing Press in Rangpur, Bangladesh",
    description:
      "Offset & digital printing in Rangpur since 1994. WhatsApp 01715-004122.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Comtech Computer & Printers",
      alternateName: "কমটেক কম্পিউটার এন্ড প্রিন্টার্স",
      description:
        "Leading offset and digital printing press in Rangpur, Bangladesh since 1994. Books, banners, packaging, ID cards, T-shirt & mug printing, signboards.",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/og.png`,
      foundingDate: "1994",
      telephone: "+8801715004122",
      email: "comtech.printers@gmail.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Central Road, Haji Lane",
        addressLocality: "Rangpur",
        addressRegion: "Rangpur Division",
        addressCountry: "BD",
      },
      geo: { "@type": "GeoCoordinates", latitude: 25.7439, longitude: 89.2752 },
      areaServed: ["Rangpur", "Rangpur Division", "North Bengal", "Bangladesh"],
      sameAs: [`https://wa.me/8801715004122`],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "21:00",
      },
      department: [
        {
          "@type": "LocalBusiness",
          name: "Comtech Computer & Printers — Branch Office",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Dhap Jail Road",
            addressLocality: "Rangpur",
            addressCountry: "BD",
          },
          telephone: "+8801798933222",
        },
        {
          "@type": "LocalBusiness",
          name: "Comtech Computer & Printers — Factory (Press)",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Khasbagh, Tinmatha Mor, G.L. Roy Road",
            addressLocality: "Rangpur",
            addressCountry: "BD",
          },
          telephone: "+8801894404477",
        },
      ],
      makesOffer: [
        "Offset Printing", "Digital Printing", "Book Binding", "Packaging & Labels",
        "ID Card Printing", "T-Shirt Printing", "Mug Printing", "Banner & Signboard Printing",
        "CTP Plate Making", "Graphic Design",
      ].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Comtech Computer & Printers",
      inLanguage: ["en", "bn"],
      publisher: { "@id": `${SITE_URL}/#business` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-lang="en">
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} ${hindSiliguri.variable} ${notoSerifBengali.variable} font-body antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
