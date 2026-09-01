# Comtech Printers — Local UI/UX Test Plan

App: http://localhost:3100 (prod build already running). Single-page bilingual site.
Source evidence: src/lib/LanguageContext.tsx (localStorage key `comtech-lang`), src/lib/content.ts (WhatsApp numbers 8801715004122 / 8801798933222 / 8801894404477, locations), src/components/Machinery.tsx:64 ("View All N Machines"), src/components/CustomCursor.tsx (dot + ring, pointer:fine only), src/components/Contact.tsx:96 (wa.me per location).

## T1 Hero & images
- Load /. PASS: hero shows logo, "Since 1994" badge, stats, press imagery visible in screenshot.
- Check all imgs loaded via JS: `[...document.images].filter(i=>!i.complete||i.naturalWidth===0)` → PASS if empty (plus visually spot-check machinery gallery).

## T2 Language toggle + persistence
- Click বাংলা toggle in navbar. PASS: hero/nav text becomes Bangla script; computed font-family of a Bangla heading includes Hind Siliguri or Noto Serif Bengali.
- Reload page. PASS: still Bangla; localStorage `comtech-lang` == "bn". Toggle back to EN.

## T3 Navigation + responsive
- Desktop: click nav links Services, Machinery, Contact → PASS: viewport scrolls to matching section headings.
- Set viewport ~390px wide: PASS: hamburger menu appears, opens/closes, links work; no horizontal overflow (document.scrollWidth <= innerWidth), text readable. Return to desktop.

## T4 WhatsApp hrefs
- Floating button href == https://wa.me/8801715004122?text=... ; a service card CTA href starts with https://wa.me/8801715004122. Contact tabs' WhatsApp links use location numbers (8801798933222 branch, 8801894404477 factory). Verify via DOM hrefs; do NOT navigate.

## T5 Contact tabs
- Click Head Office / Branch Office / Factory tabs. PASS: address/phone content changes per tab; tel: and mailto: hrefs present; Google Maps link present; map iframe rendered (visible in screenshot).

## T6 Machinery expand
- Click "View All 28 Machines". PASS: grid expands (many more cards visible, button text changes to collapse variant). Images not broken.

## T7 Custom cursor
- Move mouse over page: PASS: ring/dot cursor follows (visible in screenshots at two positions); hovering a link/button changes ring state (larger/red accent).

## T8 Clients marquee + polish
- PASS: marquee row translates over time (two screenshots differ in position). Visually flag any misalignment/broken layout.
