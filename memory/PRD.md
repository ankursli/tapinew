# Tapi Namastubhyam Charitable Trust — PRD

## Original Problem
Design a completely new, modern, premium, light-themed, award-worthy website for
Tapi Namastubhyam Charitable Trust (Surat). Fresh UX celebrating the sacred Tapi
river and Surat heritage; donation-focused; dummy payment forms; English only for
now; reuse content/members from tapiaarti.com; Google Map; premium motion.

## User Choices (confirmed)
- Payments: DUMMY forms only (no real gateway) — records stored in Mongo.
- Admin panel: No.
- Multilingual: Not now (English-first).
- Content/images: reuse live-site content + members; stock/Unsplash imagery.
- Map: https://maps.app.goo.gl/2p3Uhbeqwpqb7P8V7 (embedded iframe).
- Art direction: Awwwards-level — kinetic hero, masked reveal, lenis, framer-motion,
  numbered manifesto, marquee, parallax.

## Architecture
- Frontend: React 19 + CRA/craco, Tailwind, shadcn/ui, framer-motion, lenis.
  - App.js router: / (Home), /book/:type (aarti|pooja), /donate.
  - Sections in src/sections/*, components in src/components/*, content in src/lib/data.js.
  - Fonts: Cormorant Garamond (display) + Outfit (body) + Noto Serif Devanagari/Gujarati.
  - Local logo at /public/tapi-logo.jpg; shlok PDF at /public/tapi-aarti-shlok.pdf.
- Backend: FastAPI + Motor/Mongo. Endpoints (all /api):
  - GET /config/pricing (seeded), POST/GET /bookings, POST /donations,
    GET /donations/summary, POST /contact.

## Implemented (2026-08-01)
- Full award-worthy landing page: Hero (masked reveal + parallax), Marquee, About,
  Manifesto (Vision/Mission/Why), Tapi mythology, Surat heritage, animated Timeline,
  Community Activities, Daily Aarti, Seva CTA, Members (monogram tiles), Gallery
  (lightbox), Events, News, Download Center (working Gujarati/Devanagari PDF),
  Testimonials, FAQ, Contact (form + map + bank/UPI), Footer.
- Booking pages (Aarti & Pooja) with live configurable pricing + demo checkout + success.
- Donate page with presets/causes/anonymous/PAN rule + demo checkout + success.
- Sticky glass nav, scroll progress, floating Donate, lenis smooth scroll, mobile menu.
- Verified: all endpoints via curl; booking/donation/contact flows via browser; PDF glyphs.

## Notes
- tapiaarti.com member photos & logo URLs are NOT publicly reachable → used official
  provided logo locally + elegant monogram tiles for members (real names/roles kept).
- Payments are MOCKED (demo checkout, no gateway).

## Backlog / Next
- P1: Razorpay integration (real donations/bookings) when keys available.
- P1: Hindi + Gujarati multilingual with language switcher.
- P2: CMS/admin for events, gallery, pricing; recurring/monthly giving; email receipts (Resend).
