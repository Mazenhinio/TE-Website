# Total Engage — Project Reference

> **This is the single source of truth for the Total Engage website.** Keep it up to date whenever a change is made to the site. See the [Change Log](#change-log) section at the bottom for the update format and history.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Design System](#design-system)
4. [Architecture & File Structure](#architecture--file-structure)
5. [Pages & Routes](#pages--routes)
6. [Backend & API](#backend--api)
7. [Department Pages — Content & Data](#department-pages--content--data)
8. [Completed Work](#completed-work)
9. [Pending Tasks](#pending-tasks)
10. [Change Log](#change-log)

---

## Project Overview

**Client:** Total Engage
**Product:** A white-labeled GoHighLevel (GHL) solution — a full-stack customer engagement, CRM, and marketing automation platform. The GHL origin is intentionally not surfaced to visitors; Total Engage is positioned as a proprietary platform.
**Target Market:** Hospitality sector in the MENA Region (large hotel chains, resort groups, F&B groups)
**Live Portal:** https://portal.totalengage.io
**Design Inspiration:** joinhandshake.com — clean, bold, editorial, card-based, confident use of whitespace, smooth scroll interactions.
**Hosting:** Replit (Node.js + Express backend, React/Vite frontend)
**Legal Entity:** Tech Tactics LLC

**Goal:** A visually premium, animated, conversion-optimized marketing website that positions Total Engage as the #1 hospitality engagement platform in MENA. Every section should feel premium, confident, and alive.

---

## Tech Stack

### Frontend
- **Framework:** React 19 + Vite 7
- **Styling:** Tailwind CSS v3 (JIT mode, custom theme)
- **Animation:**
  - `framer-motion` v12 — page transitions, scroll-reveal, AnimatePresence
  - `GSAP` v3 + ScrollTrigger — counter animations, timeline sequences, scroll-driven reveals
  - `react-spring` v10 — physics-based hover/interactive card effects
  - `lottie-react` — micro-animations, success states
  - CSS Keyframes — shimmer on buttons, marquee scroll, bob animation
- **Routing:** React Router v7 with `AnimatePresence` for page transitions
- **Icons:** Lucide React v0.577
- **Fonts (Google Fonts):**
  - `Bricolage Grotesque` — Hero/display headings (H1, H2)
  - `Instrument Sans` — Body text, UI labels
  - `Space Mono` — Stats, counters, data labels
- **Code Splitting:** `React.lazy()` + `Suspense` on all department pages

### Backend
- **Runtime:** Node.js + Express 5
- **Security:** `helmet` (CSP disabled for CDN assets), `cors`, `express-rate-limit` (5 requests/IP/hour on form endpoints)
- **Email:** `nodemailer` v8
- **Environment Variables:** Stored in `.env` — notably `VITE_GHL_WEBHOOK_URL` for the GHL contact form webhook
- **Static Serving:** Express serves the Vite `dist/` build

### Build & Dev
- `npm run dev` — Vite dev server on `0.0.0.0:5173`
- `npm run build` — Vite build → `dist/`
- `npm start` — Node.js Express server (serves `dist/` + API)
- Last confirmed build: **Success**, 2,184 modules, ~4 seconds (March 18, 2026)

---

## Design System

### Brand Colors (Strict — No Deviations)

| Token | Hex | Usage |
|-------|-----|-------|
| Electric (Primary) | `#DEFF00` | CTAs, hover states, highlights, stat numbers, active elements |
| Brand Black | `#000000` | Primary backgrounds, navbar, text on light surfaces |
| Brand Cream | `#F4F2E6` | Alternate section backgrounds, body text on dark surfaces |

No other hues are permitted. No grays, blues, teals, or golds.

### Derived Tones
```css
--electric-dim:    rgba(222, 255, 0, 0.12)   /* Glow fills, card hover bg */
--electric-glow:   0 0 60px rgba(222,255,0,0.25), 0 0 120px rgba(222,255,0,0.1)
--black-card:      #111111                    /* Card bg on dark sections */
--cream-muted:     rgba(244,242,230,0.55)     /* Muted text on black */
```

### Section Alternation Pattern
Sections alternate Black → Cream → Black to create visual rhythm:
```
Navbar          → Black
Hero            → Black + electric accents
Stats Bar       → Electric (#DEFF00) background — IMPACT MOMENT
Built for Hotels → Cream
Operations      → Black
Automation      → Cream
Done For You    → Black
Campaign Results → Cream
Integrations    → Black
Security        → Cream
Final CTA       → Electric (#DEFF00) — IMPACT CLOSE
Footer          → Black
```

### Typography Scale
| Role | Font | Weight | Size (Desktop) |
|------|------|--------|----------------|
| H1 / Page Title | Bricolage Grotesque | 800 | `clamp(56px, 8vw, 108px)` |
| H2 / Section Title | Bricolage Grotesque | 700 | `clamp(38px, 5vw, 72px)` |
| H3 / Card Title | Instrument Sans | 600 | `clamp(20px, 2.5vw, 28px)` |
| Body | Instrument Sans | 400 | 16–18px, line-height 1.75 |
| Stats / Numbers | Space Mono | 700 | `clamp(48px, 6vw, 80px)` |
| Labels / Tags | Space Mono | 400 | 12–14px, uppercase, 0.08em tracking |

### Buttons
| Context | Style |
|---------|-------|
| On Black bg | `#DEFF00` fill, `#000000` text |
| On Cream bg | `#000000` fill, `#F4F2E6` text |
| On Electric bg | `#000000` fill, `#DEFF00` text |

All buttons: `border-radius: 9999px` (pill), `padding: 14px 32px`, `font-weight: 600`. Hover: invert, 200ms ease.

### Responsive Breakpoints
| Breakpoint | Width | Notes |
|------------|-------|-------|
| Mobile | < 640px | Single column, hamburger nav, full-width CTAs, H1 → 36–40px |
| Tablet | 640–1023px | Two-col grids where needed, condensed hero |
| Desktop | 1024px+ | Full layouts, all hover effects active |
| Wide | > 1440px | Max-width containers cap at 1280px |

---

## Architecture & File Structure

```
TE Website/
├── server.js                    # Express server: API endpoints + static dist serving
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── index.html                   # HTML entry point, meta tags, font imports
├── .env                         # Secrets (VITE_GHL_WEBHOOK_URL, etc.) — never commit
├── .gitignore
├── public/
│   ├── images/                  # Logos, brand assets, integration icons
│   ├── hero-video.mp4
│   ├── Customer Journey.mp4
│   └── crm-mockup.png
├── src/
│   ├── main.jsx                 # React DOM entry, BrowserRouter wrapper
│   ├── App.jsx                  # Route definitions, AnimatePresence, lazy imports
│   ├── App.css
│   ├── index.css                # Tailwind directives, CSS variables, custom scrollbar
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx       # Sticky nav, scroll transparency, mobile overlay, Solutions links
│   │   │   ├── Footer.jsx       # 5-col layout: Platform, Revenue, Operations, Corporate, Legal
│   │   │   └── DepartmentPageTemplate.jsx  # Shared template for all 7 department pages
│   │   ├── sections/            # Homepage section components
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ValueProp.jsx
│   │   │   ├── BuiltForHotels.jsx       # Exploding persona label animation
│   │   │   ├── StatsBar.jsx             # GSAP counter animation on scroll
│   │   │   ├── TrustedLogos.jsx         # Shangri-La, InterContinental, Oteliana logos
│   │   │   ├── OperationsSolutions.jsx  # Unified Inbox + module definitions
│   │   │   ├── AutomationSystem.jsx     # Expandable card layout (Pre-Booking → Post-Departure)
│   │   │   ├── DoneForYou.jsx
│   │   │   ├── CampaignResults.jsx
│   │   │   ├── IntegrationsSection.jsx  # Infinite marquee conveyor belt
│   │   │   ├── SecuritySummary.jsx
│   │   │   ├── FinalCTA.jsx
│   │   │   └── GuestJourney.jsx
│   │   └── ui/
│   │       ├── PageTransition.jsx       # Framer Motion page wrapper
│   │       └── PhoneChatAnimation.jsx   # Live WhatsApp chat simulation
│   ├── pages/
│   │   ├── Home.jsx             # Composes all homepage sections
│   │   ├── Contact.jsx          # Schedule a Demo form → GHL webhook
│   │   ├── FoodBeverage.jsx
│   │   ├── WellnessSpa.jsx
│   │   ├── Weddings.jsx
│   │   ├── KidsClub.jsx
│   │   ├── RoomsSuites.jsx
│   │   ├── LoyaltyRetention.jsx
│   │   └── ReviewsReputation.jsx
│   ├── data/
│   │   └── departmentPages.js   # All content for the 7 department pages (single data source)
│   └── assets/
│       └── react.svg
└── dist/                        # Vite build output (auto-generated, do not edit)
```

---

## Pages & Routes

| Route | Component | Status | Notes |
|-------|-----------|--------|-------|
| `/` | `Home.jsx` | Live | Full homepage with all sections |
| `/contact` | `Contact.jsx` | Live | Schedule a Demo form + GHL webhook |
| `/food-beverage` | `FoodBeverage.jsx` | Live | Bespoke Editorial Design |
| `/wellness-spa` | `WellnessSpa.jsx` | Live | Bespoke Zen Design |
| `/weddings-events` | `Weddings.jsx` | Live | Bespoke Album Design |
| `/kids-club` | `KidsClub.jsx` | Live | Bespoke Playful Design |
| `/rooms-suites` | `RoomsSuites.jsx` | Live | Bespoke Luxury Design |
| `/loyalty-retention` | `LoyaltyRetention.jsx` | Live | Bespoke Network Design |
| `/reviews-reputation` | `ReviewsReputation.jsx` | Live | Bespoke Command Center Design |

All department pages are **lazy-loaded** via `React.lazy()`. The `App.jsx` wraps routes in `<Suspense>` with a minimal spinner fallback.

### Navigation
- **Desktop:** Flat nav with all 7 solution shortcuts (abbreviated: F&B, Spa, Weddings, Kids, Rooms, Loyalty, Reviews) + Contact link + Log In ghost button + Schedule a Demo CTA pill.
- **Mobile:** Hamburger icon (Lucide `Menu`/`X`, z-index 100) opens a full-screen overlay with staggered entrance via Framer Motion. Solutions listed under a `SOLUTIONS` label with left-border divider.
- **Log In** links to: `https://portal.totalengage.io`

### Footer
5-column layout: Platform, Revenue Solutions, Operations Solutions, Corporate Info, Legal. Entity name: **Tech Tactics LLC**, © 2025. All internal links use React Router `<Link>`.

---

## Backend & API

`server.js` (Express 5):

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Returns `{ status: "ok", timestamp }` |
| `/api/demo-request` | POST | Rate-limited (5/IP/hour), logs body, returns success JSON |
| `/api/contact` | POST | Rate-limited (5/IP/hour), logs body, returns success JSON |
| `*` | GET | Serves `dist/index.html` (SPA catch-all) |

**Note:** Email sending via Nodemailer is imported but email dispatch logic is not yet implemented in the route handlers — they currently log and return success. The GHL webhook integration happens client-side via the `VITE_GHL_WEBHOOK_URL` environment variable in the Contact form component.

### Environment Variables
```
VITE_GHL_WEBHOOK_URL=<GoHighLevel webhook URL>
PORT=3000 (or set by Replit)
```

---

## Department Pages — Content & Data

All 7 department pages pull their content from `src/data/departmentPages.js`. Each page entry contains:
- `meta` — `title` and `description` for SEO
- `hero` — `tag`, `h1`, `subheadline`, optional `reverse` flag for layout
- `painPoint` — pain statement copy (1–3 sentences)
- `solutions` — array of `{ title, description }` feature cards (4 items)
- `whatsappSection` — `h2`, `body`, `messages` array for the WhatsApp chat mockup
- `useCases` — array of `{ title, trigger, action }` (5–6 items)
- `results` — array of `{ value, label, icon }` (3 stats)
- `theme` — `{ layout, animation }` hint for the page component

### Department Page Summary

| Page | Key Metrics | Primary Use Case |
|------|-------------|-----------------|
| Food & Beverage | 40% no-show reduction, 3.2x ROI, 89% open rate | Friday Brunch campaigns, pre-arrival dining upsell |
| Wellness & Spa | 2.4x midweek bookings, 67% renewal rate, 92% open | Check-in spa upsell, membership renewal automation |
| Weddings & Events | 5x faster response, 35% more bookings, 91% open | Instant wedding inquiry response, lead nurture |
| Kids Club | 78% participation, 2.1x repeat bookings, 94% satisfaction | Daily activity schedule push to parents |
| Rooms & Suites | 22% upgrade conversion, 40% no-show reduction, 3.5x ROI | 48-hour pre-arrival upsell |
| Loyalty & Retention | 34% repeat booking, 1,270+ guests re-engaged, 4.1x ROI | 90-day lapsed guest re-engagement |
| Reviews & Reputation | +0.4 Google rating, 96% response rate, 73% interception | Post-stay smart routing (happy → Google, unhappy → private) |

### Department Page Shared Structure
Every department page follows this 7-section template:
1. **Hero** — Black bg, two-col (text left, WhatsApp mockup right), fade-in animation
2. **Pain Point** — Cream bg, centered, GSAP scroll-trigger fade-up
3. **Solution Cards** — Black bg, 3–4 cards, Framer Motion stagger
4. **WhatsApp Preview** — Cream bg, two-col, react-spring bubble pop-in animation
5. **Use Cases** — Black bg, grid of Trigger → Action cards
6. **Results** — Electric (`#DEFF00`) bg, 3-col stats row, GSAP count-up
7. **CTA** — Black bg, centered, links to `/contact`

---

## Completed Work

### Homepage
- Hero section with autoplay video on "Watch the Story" button
- Value proposition section with benefit-driven headline
- `BuiltForHotels` — exploding persona label animation (Luxury Resorts, Boutique Hotels, GMs, etc.)
- `StatsBar` — GSAP count-up animation: 400% Lead Connections, 250% Conversion, 40% No-Show Reduction, 10+ Properties, 5+ Countries
- `TrustedLogos` — Shangri-La, InterContinental, Oteliana Travel with grayscale-to-color hover
- `OperationsSolutions` — Unified Inbox (WhatsApp, Outlook, Gmail, Instagram, TikTok), module definitions
- `AutomationSystem` — Expandable card layout across Pre-Booking, Pre-Check-In, In-House, Post-Departure phases with "Drive Sales / Enhance Exp. / Upselling" framework
- `DoneForYou` section
- `CampaignResults` section
- `IntegrationsSection` — Infinite marquee belt: Facebook, TikTok, WhatsApp, Google Calendar, Outlook, Meta, Zoom, TripAdvisor, Booking.com
- `SecuritySummary` section
- `FinalCTA` section

### Navigation & Routing
- All internal `<a>` links converted to React Router `<Link>` for SPA navigation
- Mobile hamburger menu with Lucide icons and z-index 100 fix
- Consistent URL slugs across Navbar, Footer, and App config
- Footer redesigned: 5-column layout, entity updated to Tech Tactics LLC

### Contact / Demo Form
- Custom form component (no embedded GHL widget)
- Fields: First Name, Last Name, Email, Phone, Hotel/Company Name, Job Title, Number of Properties, Message
- Webhook POST to GoHighLevel via `VITE_GHL_WEBHOOK_URL`
- Standard Fetch (no `no-cors` mode) for reliable GHL data reception
- Console debug logging for lead sync verification

### All 7 Department Pages
Each fully built with bespoke design and live data from `departmentPages.js`:
- Food & Beverage, Wellness & Spa, Weddings & Events, Kids Club, Rooms & Suites, Loyalty & Retention, Reviews & Reputation

### Technical
- Custom Total Engage favicon replacing Vite default
- Shangri-La logo fixed (correct brand assets)
- All logo backgrounds made transparent
- Pricing page removed
- All GHL/GoHighLevel branding hidden from public-facing pages
- Build confirmed successful: `npm run build` — 2,184 modules, ~4s

---

## Pending Tasks

### Videos & Media
- Upload all videos to YouTube (`support@totalengage.com`) and embed at 1080p across the platform (Hero, Operations module popups, etc.)

### Final Polish & Launch Preparation
- Implement email dispatch in `/api/demo-request` and `/api/contact` server routes (currently logs only — Nodemailer config needed)
- Create `/thank-you` page for post-form-submission redirect
- SEO & GEO optimization for all 7 department pages (unique `<title>`, `<meta description>`, canonical URLs, OG tags, schema markup)
- Mobile responsiveness audit and cross-browser testing for all 7 bespoke department designs
- Performance audit: lazy-loading verification, final Lighthouse check (target 90+ SEO score per page)
- `prefers-reduced-motion` media query — ensure all animations respect this across every component

### Future Roadmap
- Persona-based navigation ("For Managers" vs "For Marketing" routing)
- Case Studies pages (Shangri-La Jeddah, Abu Dhabi, Dubai, Bengaluru; InterContinental) with individual `/case-studies/[slug]` routes
- Interactive ROI Calculator for Revenue Managers (front-end JS calculation)
- Arabic language support (`Noto Sans Arabic` fallback in font stack)

---

## Change Log

> **Instruction:** Every time a change is made to this website — whether code, content, design, or configuration — add an entry to this log. Include the date and time of the change and a concise technical summary of what was modified and why.

---

### 2026-03-24 — UI Interactivity & Content Personalization

**Summary:** Enhanced the platform's depth with interactive chat previews and tailored high-value hospitality content across departments.

- **Interactive Previews:** Replaced generic tooltips in `AutomationSystem` with high-fidelity, organic WhatsApp message bubbles. Messages are now scenario-specific (e.g., brunch bookings, spa reminders) and appear in top-centered positions to prevent column overlap.
- **Sector Broadening:** Successfully pivoted the platform from "Hotel-only" to "Property, Travel & Entertainment" revenue maximization.
- **Leisure & Activities Overhaul:** Added a dedicated "Leisure & Activities" department to the automation engine and home page value prop, focusing on golf, tennis, and water sports.
- **Kids Club (Birthday Focus):** Tailored the Kids Club department page and automation items to focus on high-margin **Birthday Celebration hosting**, covering inquiry bots, theme selection, and deposit collection.
- **Rooms (Milestone Focus):** Refactored Rooms & Suites content to focus on **driving stay bookings and premium upsells**, specifically targeting honeymoons, anniversaries, and suite upgrades.
- **Design Tuning:** Implemented dual-rotating marquee belts for integrations; increased animation speeds for the automation timeline for a snappier feel.
- **Footer & Navigation:** Updated all sector labels and persona chips to reflect the broader property focus.

---

### 2026-03-24 — Homepage Messaging & Sector Broadening (Initial Phase)

**Summary:** Initial pivot from "Hotel-only" to "Property, Travel & Entertainment".

- Replaced "Hotel" with "Property Revenue" in primary headings and badges across the homepage.
- Updated `BuiltForHotels` section with a new heading: "BUILT FOR HOSPITALITY & LEISURE, by Hospitality Experts."
- Overhauled `AutomationSystem` to include a "Leisure & Sports" stage.

---

---

### 2026-03-18 — Major Architecture & Feature Update

**Summary:** Prepared the site for production with sweeping visual, structural, and integration changes.

- Launched 7 department solution pages (Food & Beverage, Wellness & Spa, Weddings & Events, Kids Club, Rooms & Suites, Loyalty & Retention, Reviews & Reputation), each with a bespoke editorial design.
- Integrated GoHighLevel (GHL) CRM via webhook in the contact form (`VITE_GHL_WEBHOOK_URL`); removed `no-cors` mode; added required Phone Number field; added console debug logging.
- Fixed mobile hamburger menu: replaced manual CSS with Lucide `Menu`/`X` icons, raised z-index to 100.
- Converted all internal `<a>` tags to React Router `<Link>` components for SPA performance.
- Standardized URL slugs across Navbar, Footer, and `App.jsx` route config.
- Redesigned Footer to 5-column layout; updated legal entity to Tech Tactics LLC; removed redundant "Features" and "Security" links.
- Fixed Rooms & Suites hero form to solid black for editorial contrast.
- Fixed Food & Beverage card hover: text turns black on Electric/Lime hover for legibility.
- Confirmed production build success: 2,184 modules, ~4 seconds.

---

### 2026-03-XX — Session: Homepage & Component Overhaul

**Summary:** Transitioned site from generic marketing template to a high-end interactive hospitality platform.

- Removed all references to payment processing and Stripe/Tap integrations; white-labeled GHL branding.
- Built new `AutomationSystem` section with expandable card layout (Pre-Booking → Post-Departure), replacing the previous linear guest journey.
- Built new `BuiltForHotels` section with an "explosive" label/pill animation — persona chips burst from center on scroll.
- Added `TrustedLogos` section: Shangri-La, InterContinental, Oteliana Travel with grayscale-to-color hover effects.
- Replaced static mockups with a live `PhoneChatAnimation` component — WhatsApp back-and-forth simulation with the automated Front Desk engine.
- Restructured homepage section order: Hero → ValueProp → BuiltForHotels → StatsBar → TrustedLogos → OperationsSolutions → AutomationSystem → DoneForYou → CampaignResults → Integrations → Security → FinalCTA.
- Added custom scrollbar utilities and refined typography rhythm in `index.css`.
- Updated custom Total Engage favicon; removed Vite default.
- Removed Pricing page entirely.
- Repurposed Contact page as "Schedule a Demo".
