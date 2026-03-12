# Total Engage — New Website Build Specification
### For Antigravity (Google AI IDE) | Replit Hosted

---

## 🧭 Project Overview

**Client:** Total Engage  
**Product:** White-labeled solution of Go High Level (GHL) — a full-stack customer engagement, CRM, and marketing automation platform.  
**Target Market:** Hospitality sector in the MENA Region (large hotel chains, resort groups, F&B groups)  
**Current Site:** [totalengage.com](https://totalengage.com)  
**Design Inspiration:** [joinhandshake.com](https://joinhandshake.com) — clean, bold, modern, card-based sections, strong typography hierarchy, confident use of whitespace, smooth scroll interactions, persona-based navigation.  
**Hosting Platform:** Replit (Node.js + Express backend, React/Vite frontend, all assets self-contained or CDN-linked)

**Goal:** Build a visually stunning, animated, conversion-optimized marketing website that positions Total Engage as the #1 hospitality engagement platform in MENA. Every section should feel premium, confident, and alive. The visitor must feel *totally engaged*.

---

## 🏗️ Tech Stack (Replit-Compatible)

### Frontend
- **Framework:** React 18 + Vite (fast HMR, Replit-compatible)
- **Styling:** Tailwind CSS v3 (JIT mode, no compiler issues)
- **Animation Libraries:**
  - `framer-motion` — page transitions, scroll-triggered reveals, gesture animations
  - `GSAP` (GreenSock) + `ScrollTrigger` — timeline animations, pin sections, counter animations
  - `lottie-react` — micro-animations and icon animations
  - `react-spring` — physics-based hover/interactive card effects
  - `tsparticles` or `@tsparticles/react` — hero background particle effects
- **Routing:** React Router v6
- **Icons:** Lucide React + custom SVG icons
- **Fonts:** Google Fonts (self-hosted via `@fontsource` for Replit compatibility)
  - Display/Hero: `Bricolage Grotesque` or `Syne`
  - Body: `DM Sans`
  - Accent/Numbers: `Space Mono` (for stat counters)

### Backend (Replit Node.js)
- **Runtime:** Node.js 20 + Express.js
- **Contact Form / Demo Booking:** Express API route → sends email via Nodemailer (SMTP) or Resend API
- **Environment Variables:** Stored in Replit Secrets (`.env` equivalent)
- **Static Serving:** Express serves the Vite build output (`/dist`)
- **Health Check Route:** `GET /api/health` for Replit uptime monitoring
- **Rate Limiting:** `express-rate-limit` on form submission endpoints
- **CORS:** Configured for same-origin

### Database (Optional / Phase 2)
- Replit DB (key-value) or PostgreSQL via Replit's built-in DB for storing demo request leads

### Deployment
- Single Replit project with `package.json` scripts:
  - `"dev": "vite"` (frontend dev)
  - `"server": "node server.js"` (backend dev)
  - `"build": "vite build"`
  - `"start": "node server.js"` (serves built frontend + API)
- Replit Always-On enabled
- Custom domain pointed to Replit deployment

---

## 🎨 Design System

### Brand Colors (STRICT — Do Not Deviate)

Total Engage's brand identity uses exactly three core colors. Every design decision must be derived from this palette only.

```
BRAND ELECTRIC:   #deff00    /* Electric yellow-green — the HERO color. Primary CTAs,
                                active states, highlights, underlines, glows, badges,
                                stat numbers, hover accents. This is the brand's energy. */

BRAND BLACK:      #000000    /* Pure black — primary backgrounds (sections, hero),
                                text on light surfaces, card backgrounds on cream sections,
                                navbar background. Maximum contrast anchor. */

BRAND CREAM:      #f4f2e6    /* Warm off-white/cream — alternate section backgrounds,
                                primary body text on black, card fill on dark sections,
                                form backgrounds. Prevents cold/sterile feel. */
```

### Derived Tones (Staying On-Brand)
These are computed from the three brand colors — no new hues introduced:

```css
:root {
  /* ── Core Brand ── */
  --electric:           #deff00;
  --electric-dim:       rgba(222, 255, 0, 0.12);   /* Glow fills, card hover bg */
  --electric-glow:      0 0 60px rgba(222,255,0,0.25), 0 0 120px rgba(222,255,0,0.1);
  --electric-border:    1px solid rgba(222,255,0,0.3);

  --black:              #000000;
  --black-soft:         #0d0d0d;                   /* Slightly lifted black for layering */
  --black-card:         #111111;                   /* Card bg on black sections */
  --black-border:       rgba(255,255,255,0.08);    /* Subtle border on dark surfaces */

  --cream:              #f4f2e6;
  --cream-dim:          #e8e6d8;                   /* Slightly darker cream for dividers */
  --cream-muted:        rgba(244,242,230,0.55);    /* Muted text on black backgrounds */
  --cream-subtle:       rgba(244,242,230,0.12);    /* Very subtle fills on black */

  /* ── Semantic Assignments ── */
  --bg-hero:            #000000;
  --bg-section-alt:     #f4f2e6;                   /* Alternating cream sections */
  --bg-card-dark:       #111111;
  --bg-card-light:      #ffffff;

  --text-on-black:      #f4f2e6;
  --text-on-cream:      #000000;
  --text-muted-dark:    rgba(244,242,230,0.55);
  --text-muted-light:   rgba(0,0,0,0.45);

  --cta-bg:             #deff00;
  --cta-text:           #000000;                   /* Black text on electric button */
  --cta-hover-bg:       #ecff4d;                   /* Lighter electric on hover */

  /* ── Gradients ── */
  --gradient-electric-glow: radial-gradient(ellipse at center, rgba(222,255,0,0.15) 0%, transparent 70%);
  --gradient-section-fade:  linear-gradient(180deg, #000000 0%, #0d0d0d 100%);
  --gradient-card-border:   linear-gradient(135deg, rgba(222,255,0,0.4), rgba(222,255,0,0.05));
}
```

### Section Alternation Pattern
The page must rhythmically alternate between black and cream sections to create visual pace:

```
Navbar         → Black background
Hero           → Black background + electric accents
Stats Bar      → Electric (#deff00) background + black text  ← IMPACT MOMENT
"Built for Hospitality" → Cream background + black text
Features Grid  → Black background + electric highlights
"How It Works" → Cream background + black text
MENA Section   → Black background + electric accents
Testimonials   → Cream background
Integrations   → Black background
Final CTA      → Electric (#deff00) background + black text  ← IMPACT CLOSE
Footer         → Black background
```

This alternation mirrors Handshake's rhythm — bold color blocks create natural section separators without needing dividers.

### Typography Scale
```
--font-display:   'Bricolage Grotesque', sans-serif   /* Hero headings — wide, bold, modern */
--font-body:      'Instrument Sans', sans-serif        /* Body, UI text — clean, readable */
--font-mono:      'Space Mono', monospace              /* Stats, counters, data labels */

Hero H1:    clamp(56px, 8vw, 108px) / font-weight: 800 / letter-spacing: -0.03em
Section H2: clamp(38px, 5vw, 72px)  / font-weight: 700 / letter-spacing: -0.02em
Card H3:    clamp(20px, 2.5vw, 28px) / font-weight: 600
Body:       16-18px / line-height: 1.75
Caption:    12-13px / letter-spacing: 0.08em / text-transform: uppercase / font-weight: 500
Stat:       clamp(48px, 6vw, 80px) / font-family: Space Mono / color: #deff00
```

**Font Rationale:** Bricolage Grotesque is wide, assertive, and modern — it owns the screen at large sizes. The electric `#deff00` brand color on pure black at 108px is an unforgettable first impression. Zero purple gradients, zero generic SaaS aesthetics.

### Spacing & Grid
- 12-column grid, max-width 1280px, centered
- Section vertical padding: `clamp(80px, 10vw, 160px)`
- Generous whitespace between elements (Handshake-style breathing room)

### Border Radius
- Cards: `16px`
- Buttons: `9999px` (pill) for CTAs, `8px` for secondary
- Tags/Badges: `6px`

### Shadows & Effects
```css
--shadow-card-dark:   0 0 0 1px rgba(222,255,0,0.08), 0 8px 40px rgba(0,0,0,0.6);
--shadow-card-light:  0 0 0 1px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.08);
--shadow-electric:    0 0 60px rgba(222,255,0,0.2), 0 0 120px rgba(222,255,0,0.08);
--shadow-button:      0 4px 24px rgba(222,255,0,0.35);
--shadow-button-hover:0 8px 40px rgba(222,255,0,0.55);
```

---

## 🗺️ Sitemap

```
/                    → Homepage (main conversion page)
/features            → Full features breakdown
/hospitality         → Industry page: Hospitality & MENA focus
/case-studies        → Client stories (Shangri-La, IHG, etc.)
/pricing             → Pricing tiers
/integrations        → Integration ecosystem
/about               → About Total Engage
/contact             → Contact + demo booking
/blog                → Thought leadership (Phase 2)
/legal/privacy       → Privacy Policy
/legal/terms         → Terms of Service
```

---

## 📄 Page-by-Page Specifications

---

### 1. HOMEPAGE (`/`)

#### 1.1 Navbar
- **Behavior:** Transparent on load → solid `#0A0A0F` with blur (`backdrop-filter: blur(20px)`) on scroll (>50px)
- **Logo:** Total Engage wordmark (SVG, left-aligned)
- **Nav Links:** Features | Hospitality | Case Studies | Pricing | Integrations
- **CTAs:** `Log In` (ghost button) + `Schedule a Demo` (gold pill button with subtle shimmer animation)
- **Mobile:** Hamburger menu → full-screen overlay nav with staggered item entrance (framer-motion)
- **Animation:** Nav links have a sliding underline hover effect using CSS `::after` pseudo-element

#### 1.2 Hero Section
**Content:**
```
EYEBROW LABEL: "The Hospitality Engagement Platform"

H1: "Turn Every Guest  
     Into a Loyal Regular."

SUBHEADLINE: 
"Total Engage gives MENA's leading hotels one unified platform 
to automate marketing, manage conversations, and drive direct 
bookings — powered by AI."

CTAs: [Schedule a Demo →] [Watch 2-min Overview ▶]

SOCIAL PROOF BAR: 
"Trusted by" → Logo strip: Shangri-La | InterContinental | [+ more slots]
```

**Design & Animation:**
- Full-viewport height (`100svh`)
- Background: Pure `#000000`. A large radial gradient in `rgba(222,255,0,0.07)` sits behind the hero headline — subtle electric aura, not a spotlight.
- **H1 animation:** Word-by-word staggered reveal with GSAP `SplitText` or manual word-span approach — each word slides up and fades in with 0.08s stagger. The word `"Loyal"` renders in `#deff00` to create a visual pop mid-sentence.
- **Subheadline:** Cream (`#f4f2e6`) text, fades in 0.6s after H1 completes
- **CTAs:**
  - Primary: Pill button, `#deff00` background, `#000000` text, bold. Has a sharp electric shimmer sweep (CSS `background-position` keyframe on a white-to-transparent gradient overlay). On hover: scale up slightly, shadow increases (`--shadow-button-hover`).
  - Secondary `Watch Overview`: Ghost button with `#deff00` border + `#deff00` text. No fill. On hover: fills to `rgba(222,255,0,0.1)`.
- Both CTAs slide up from below (framer-motion, delay after headline)
- **Logo strip:** Horizontal infinite marquee. Logos in white/cream, desaturated. Black bar background.
- **Floating UI mockup:** Right side of hero. A product dashboard mockup in a dark frame — the frame has a thin `#deff00` border on top edge only (like a monitor bezel). Gently bobs with CSS `translateY` keyframe. Below it: a soft electric glow puddle (`box-shadow` radial).
- Particles: Replace tsparticles with a pure CSS animated grid of faint `#deff00` dots (opacity 0.04–0.08) — a subtle tech-grid texture on the black background. More refined than floating particles.

#### 1.3 Stats Bar
**Content:**
```
[ 400% ]  More Lead Connections   |
[ 250% ]  Higher Conversion Rate  |
[ 40%  ]  Reduction in No-Shows   |
[ 10+  ]  Properties Served       |
[ 5+   ]  MENA Countries          |
```

**Design:** THIS IS THE HIGHEST IMPACT BAND ON THE PAGE. Full-width section with `#deff00` background and `#000000` text. Pure electric yellow-green — unmissable. Numbers in `Space Mono` font, bold, black. Labels in smaller black text below each number. The contrast is jarring in the best possible way — it signals energy and confidence.

Numbers animate from 0 to final value using GSAP `CountTo` when scrolled into view. The entire band has a very subtle `scaleX` entrance from 0.95 to 1.0 (GSAP ScrollTrigger).

#### 1.4 "Built for Hospitality" Section
**Content:**
```
EYEBROW: "Industry-Specific"
H2: "The only CRM built  
     around the guest journey."

Body: "From pre-arrival campaigns to post-stay loyalty loops, Total Engage 
understands how hospitality works. Stop using generic CRMs and start using 
a platform that speaks your language."
```

**Layout:** This is a **cream (`#f4f2e6`) background section** — the first palette shift after the black hero and electric stats bar. Text and elements in black. Text left (50%), right side shows animated **guest journey diagram** — a vertical timeline/flowchart showing touchpoints: `Pre-Arrival Email → WhatsApp Check-in Reminder → In-Stay Upsell → Post-Stay Review Request → Loyalty Re-engagement`. Each node on the timeline animates in sequentially on scroll (GSAP ScrollTrigger, stagger).

**Colors:** Timeline line in `#000000`. Active/current node dot filled with `#deff00`. Node labels in `#000000`.

#### 1.5 Feature Cards Grid — "Everything You Need"
**Content:**
```
EYEBROW: "Platform Features"
H2: "One platform. Every channel. Zero complexity."
```

**8 Feature Cards (2x4 grid on desktop, 1-col mobile):**

| Icon | Feature | Short Description |
|------|---------|-------------------|
| 💬 | Unified Inbox | All guest messages — WhatsApp, SMS, Email, Instagram — in one thread. Never miss a conversation. |
| 🤖 | CRM & Automation | Tag, segment, and automate guest workflows. Set it once, run forever. |
| 📲 | WhatsApp Campaigns | Send broadcast campaigns to segmented lists. High open rates, personal feel. |
| 📅 | Appointment Booking | Let guests book F&B reservations, spa slots, and concierge services — automatically. |
| 📊 | Social Media Posting | Schedule and publish across all channels from one dashboard. |
| 💳 | Payments & Products | Sell packages, take deposits, and process payments with Stripe, Tap, and more. |
| 🏷️ | CRM Tagging & Segmentation | Build precision guest segments. VIP, Repeat Visitor, Anniversary, Corporate. |
| 📈 | Analytics & Reporting | Understand performance across every campaign, channel, and property. |

**Card Design:**
- **Black section background** (`#000000` / `#111111` cards)
- Card border: `1px solid rgba(222,255,0,0.1)` — barely visible electric border at rest
- Icon: SVG/Lottie in `#deff00`
- Card title: `#f4f2e6` (cream)
- Card body: `rgba(244,242,230,0.6)` (muted cream)
- On hover: Border brightens to `rgba(222,255,0,0.4)`, background gets `rgba(222,255,0,0.04)` fill, card lifts `translateY(-6px)`, icon glows with `--shadow-electric`
- Staggered entrance animation when grid scrolls into view (framer-motion `whileInView`, stagger 0.07s)

#### 1.6 "How It Works" — Three Step Section
**Content:**
```
H2: "Up and running in days, not months."

Step 1: Connect Your Channels
"Plug in your WhatsApp, email, social accounts, and booking systems. 
Total Engage unifies everything in minutes."

Step 2: Build Your Guest Journeys
"Use our drag-and-drop automation builder to create journeys for every 
guest scenario — from first booking to loyal VIP."

Step 3: Grow With Intelligence
"Watch your campaigns perform, optimise with AI suggestions, and 
scale across every property in your portfolio."
```

**Design:** **Cream background section** (`#f4f2e6`). Horizontal 3-step flow with large step numbers (1, 2, 3) in giant faded black (opacity 0.06) behind each card — like watermark numbers. A connecting animated dotted line in `#000000` (opacity 0.2) flows between steps. On scroll, each step card pops in with a spring animation. The step that is "active" in the scroll scrub gets its number outlined in `#deff00`.

#### 1.7 "MENA First" Marquee / Highlight
**Content:**
```
H2: "Built for the Region. Ready for the World."

Body: "Total Engage is designed with MENA hospitality in mind. 
Full Arabic language support, local payment gateways (Tap Payments, 
Moyasar, HyperPay), WhatsApp-first communication, 
and local compliance — all built in."
```

**Design:** **Black section** (`#000000`). 2-column layout. Left: bold cream text. Right: Animated SVG map of MENA region — black background, country outlines in `rgba(244,242,230,0.15)`. Glowing dot markers in `#deff00` on UAE, KSA, Bahrain, Egypt, India. Dots pulse with a `box-shadow` glow animation. Lines connecting dots drawn in on scroll via GSAP `drawSVG`. Below: Horizontal infinite marquee of country flags + city names in cream text on black.

#### 1.8 Client Testimonials / Case Study Teaser
**Content:**
```
EYEBROW: "Social Proof"
H2: "The world's top hotel brands  
     choose Total Engage."
```

**3 testimonial cards** (carousel on mobile, 3-col on desktop):

```
Card 1 — Shangri-La Hotels
Property: Shangri-La Jeddah
"Total Engage completely transformed how we communicate with guests. 
Our no-show rate dropped by 38% within the first 60 days."
— Director of Guest Experience, Shangri-La Jeddah

Card 2 — Shangri-La Abu Dhabi
"Managing campaigns across multiple properties used to take a full team. 
Now one person runs it all from a single dashboard."
— Marketing Manager, Shangri-La Abu Dhabi

Card 3 — InterContinental Hotels
"The WhatsApp campaign feature alone paid for the platform 10x over 
in the first quarter."
— Revenue Manager, InterContinental
```

**Design:** **Cream background section** (`#f4f2e6`). Cards are white (`#ffffff`) with a black `1px` border. Quote text in black. Hotel name badge has `#deff00` background + black text. Active card slightly scales up, others desaturate slightly. Framer Motion carousel with drag gesture support on mobile.

#### 1.9 Integration Ecosystem
**Content:**
```
H2: "Integrates with the tools  
     you already use."
```

**Design:** **Black section**. Centered hub-and-spoke diagram (SVG/Canvas). Total Engage logo in center — white text, `#deff00` dot/icon. Surrounding integration logos in white. Connecting spoke lines in `rgba(222,255,0,0.2)`. On hover of any integration logo: its spoke line brightens to full `#deff00` and pulses, the logo brightens. Integration logos orbit or sit at fixed positions.

Below: `"+ 50 more integrations"` link → `/integrations`

#### 1.10 Final CTA Section
**Content:**
```
H2: "Ready to transform  
     your guest experience?"

Subtext: "Join Shangri-La, InterContinental, and dozens of MENA's 
finest properties already on Total Engage."

CTA: [Schedule Your Free Demo →]

Secondary: "No credit card required. Setup in under 48 hours."
```

**Design:** Full-width `#deff00` section — pure electric yellow-green. ALL text in `#000000`. This is the page's final punch. The CTA button inverts: black background + `#deff00` text (reversed from the rest of the site). Large, bold heading. Below it: the "No credit card required" line in a smaller, muted black.

Subtle animated texture: a CSS diagonal stripe pattern (black at 3% opacity) slowly scrolls across the background (`background-position` keyframe animation) — adds a premium tactile feel to the flat color. No particles needed here — the color itself is the statement.

#### 1.11 Footer
**Columns:**
```
Col 1: Logo + tagline + social icons (LinkedIn, Instagram, X)
Col 2: Platform — Features, Integrations, Pricing, Security
Col 3: Company — About, Blog, Case Studies, Careers
Col 4: Support — Help Center, Contact, Schedule Demo
Col 5: Legal — Privacy Policy, Terms of Service, GDPR
```

**Bottom bar:** `© 2025 Total Engage. All rights reserved. | Built for Hospitality in MENA.`

**Design:** Black (`#000000`) background. Cream (`#f4f2e6`) text and links. Links on hover transition to `#deff00`. Social icons: cream at rest → `#deff00` + scale on hover. A thin top border: `1px solid rgba(222,255,0,0.2)`. Bottom bar text in muted cream (`rgba(244,242,230,0.45)`).

---

### 2. FEATURES PAGE (`/features`)

**Hero:**
```
H1: "Every feature a  
     hospitality team needs."
Subheadline: "Purpose-built tools for guest acquisition, engagement, retention, and revenue."
```

**Layout:** Left sidebar sticky navigation with feature category pills. Right: full-page feature deep-dives in sections.

**Feature Sections (each is a full-width section with alternating left/right layout):**

1. **Unified Inbox** — Screenshot mockup + description. Show WhatsApp, email, SMS, Instagram threads in a single view. Highlight: "Never ask a guest 'Can you tell us more?' again — their full history is right there."

2. **CRM & Automation Builder** — Drag-and-drop workflow animation (use GSAP to animate blocks connecting). Highlight segments: VIP guests, repeat bookers, lapsed guests.

3. **WhatsApp Campaigns** — Mockup of WhatsApp-style chat bubbles with a broadcast campaign. Show open rate stats: `98% open rate vs. 22% email`.

4. **Appointment & Reservation Booking** — Calendar/booking widget mockup. Highlight: spa, restaurant, concierge, room upgrades.

5. **Social Media Scheduling** — Multi-platform posting interface mockup.

6. **Payment Processing** — Payment method icons: Stripe, Tap, Moyasar, HyperPay, Apple Pay, Google Pay. "Accept payments from every guest, everywhere."

7. **CRM Tagging & Segmentation** — Visual tag cloud / segment builder showing filters: `VIP | Repeat Visitor | Anniversary Guest | Corporate | Spa Enthusiast`.

8. **Analytics Dashboard** — Dark dashboard screenshot with live-looking chart animations (recharts or Chart.js animated on scroll).

---

### 3. HOSPITALITY PAGE (`/hospitality`)

This is the highest-converting page. Speak directly to hotel GMs, Marketing Directors, Revenue Managers.

**Hero:**
```
H1: "The engagement platform  
     5-star hotels trust."
Subheadline: "From chain hotels in Jeddah to resort groups in the UAE — Total Engage powers guest relationships for MENA's finest properties."
```

**Sections:**
1. **Persona Cards** — 3 cards: General Manager | Marketing Director | Revenue Manager. Each persona hover reveals their specific pain points and how Total Engage solves them (flip card animation).

2. **Guest Journey Map** — Interactive SVG guest journey: Awareness → Booking → Pre-Arrival → In-Stay → Post-Stay → Loyalty. Click each stage to see the Total Engage features that activate at that point.

3. **MENA-Specific Features** — Arabic UI support, Ramadan/Eid campaign templates, local payment gateways, regional compliance.

4. **Multi-Property Management** — Show how chain hotels manage multiple properties from one dashboard. Animated split-view mockup.

5. **ROI Calculator (Interactive)** — A simple form widget:
   - Number of guest check-ins per month: `[slider]`
   - Current no-show rate: `[slider]`
   - Average booking value: `[input]`
   → Outputs: Estimated revenue recovered, time saved per month, estimated ROI.
   (All front-end JavaScript calculation, no backend needed)

---

### 4. CASE STUDIES PAGE (`/case-studies`)

**Hero:** `"Results that speak for themselves."`

**Case Study Cards:**
Each card shows: Property photo (placeholder), hotel brand logo, key stat (e.g., `-38% no-shows`), one-line summary, `Read Story →` link.

**Properties to feature:**
- Shangri-La Jeddah
- Shangri-La Abu Dhabi
- Shangri-La Dubai
- Shangri-La Bengaluru
- InterContinental

**Individual Case Study Template (`/case-studies/[slug]`):**
```
Header: Hotel name + location + badge ("GoHighLevel Powered")
Stats row: 3 hero metrics
Challenge: What they struggled with
Solution: How Total Engage was deployed
Results: Detailed outcomes with charts
Testimonial: Pull quote from stakeholder
CTA: "Want similar results? Schedule a Demo"
```

---

### 5. PRICING PAGE (`/pricing`)

**Toggle:** Monthly / Annual (annual shows 20% discount badge)

**3 Tiers:**

| | Starter | Growth | Enterprise |
|--|--------|--------|-----------|
| Price | $99/mo | $220/mo | Custom |
| Properties | 1 | Up to 3 | Unlimited |
| Contacts | 2,500 | 10,000 | Unlimited |
| WhatsApp Campaigns | ✓ | ✓ | ✓ |
| Automation Workflows | 1 | 5 | Unlimited |
| Booking System | ✓ | ✓ | ✓ |
| Payment Processing | ✓ | ✓ | ✓ |
| Multi-Property | ✗ | ✓ | ✓ |
| Dedicated Onboarding | ✗ | ✗ | ✓ |
| SLA | ✗ | ✗ | ✓ |
| CTA | Get Started | Most Popular | Contact Sales |

**Design:**
- Middle tier (`Growth`) is visually elevated: slightly larger card, gold `"Most Popular"` badge, stronger shadow/glow
- Toggle animates prices with a flip/counter animation
- FAQ accordion below pricing cards (framer-motion AnimatePresence for expand/collapse)

---

### 6. INTEGRATIONS PAGE (`/integrations`)

**Hero:** `"Connect Total Engage to your entire tech stack."`

**Filter bar:** All | Communication | Payments | Marketing | Analytics | Booking | Social

**Integration cards grid:** Each card: logo + name + category badge + short description + `Learn More` link

**Featured integrations with deep-dive:**
- WhatsApp Business API
- Stripe
- Tap Payments (MENA-specific highlight)
- Moyasar (KSA)
- Twilio
- Zapier
- Meta Business Suite
- Google Ads

---

### 7. CONTACT / DEMO PAGE (`/contact`)

**Layout:** Two-column. Left: Form. Right: What to expect from the demo + calendar preview.

**Form Fields:**
```
Full Name *
Work Email *
Phone Number (with country dial code selector)
Hotel / Property Name *
Number of Properties [dropdown: 1 | 2-5 | 6-15 | 16+]
Your Role [dropdown: GM | Marketing | Revenue | Operations | IT | Other]
What's your biggest challenge? [textarea]
[Submit: Schedule My Free Demo →]
```

**Backend:** `POST /api/demo-request` → validates inputs → sends email notification via Nodemailer/Resend to internal team + confirmation email to prospect.

**Right side content:**
```
"What happens next?"
✓ We'll confirm your slot within 2 hours
✓ 30-minute live walkthrough tailored to your property
✓ See your use case demoed live
✓ Get a custom implementation plan
✓ No pressure. No commitment.
```

**Design:** Form has floating label inputs (label animates up on focus, CSS transition). Submit button has a loading spinner state. Success state shows a checkmark animation (Lottie).

---

## 🎬 Animation Masterplan

### Library Usage Summary

| Library | Used For |
|---------|---------|
| `framer-motion` | Page transitions, scroll-reveal cards, hover states, modal/overlay animations, carousel |
| `GSAP + ScrollTrigger` | Hero text reveal, counter animations, pinned sections, path drawing (SVG), timeline sequences |
| `lottie-react` | Success states, feature icons (on hover), loading states |
| `react-spring` | Physics-based card hover (tilt + lift), interactive elements |
| `tsparticles` | Hero background particle field |
| CSS Keyframes | Shimmer on buttons, aurora background, marquee scroll, logo strip, bob animation on mockup |

### Key Animation Moments

1. **Page Load Sequence:**
   - Background particles fade in (0.5s)
   - Navbar slides down (0.3s)
   - Hero eyebrow label fades in (0.5s, delay 0.3s)
   - H1 words stagger up (0.08s per word, delay 0.6s)
   - Subheadline fades in (0.4s, delay 1.0s)
   - CTAs slide up (0.4s, delay 1.2s)
   - Product mockup slides in from right (0.6s, delay 0.8s, spring easing)
   - Logo strip begins scrolling (delay 1.6s)

2. **Scroll-Triggered Reveals:**
   - All sections use `framer-motion` `whileInView` with `once: true`
   - Cards stagger in with `0.07s` delay between items
   - Stats bar numbers count up from 0 using GSAP `CountTo` on enter

3. **Hover Micro-interactions:**
   - Feature cards: `scale(1.02)`, `translateY(-6px)`, gold border glow appears
   - Nav links: Underline slides in from left
   - CTA buttons: Shimmer sweep across button surface
   - Integration logos: Scale + brighten + connecting line draws to center

4. **GSAP ScrollTrigger Pinned Section:**
   - On the "How It Works" section, consider a pinned scroll where the 3 steps animate in while the user scrolls through a pinned container (scrub effect)

5. **Lottie Animations:**
   - Contact form success: Large animated checkmark
   - Loading spinner on form submit
   - Feature icons: Each feature card icon has a subtle Lottie animation that plays on card hover

6. **Page Transitions:**
   - Route changes use `framer-motion` `AnimatePresence` with a fade + slide transition (0.3s ease)

---

## 📱 Responsive Breakpoints

```
Mobile:  < 640px   (1-col layouts, full-width CTAs, hamburger nav)
Tablet:  640–1024px (2-col grids, condensed hero)
Desktop: > 1024px  (full layouts as described above)
Wide:    > 1440px  (max-width containers kick in, no stretching)
```

**Mobile-specific:**
- Hero text size reduced, product mockup moves below text
- Feature grid becomes 1-col
- Testimonial section becomes swipeable carousel (framer-motion drag)
- Stats bar wraps to 2x2 grid
- Sticky bottom CTA bar: `[Schedule a Demo]` always visible on mobile

---

## ⚙️ Backend API Endpoints

```
GET  /api/health              → Returns { status: "ok", timestamp }
POST /api/demo-request        → Accepts lead form, sends emails
POST /api/contact             → General contact form
GET  /api/case-studies        → Returns JSON array of case study metadata (or serve as static JSON)
```

### `/api/demo-request` Request Body:
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "property": "string",
  "propertyCount": "string",
  "role": "string",
  "challenge": "string"
}
```

### Email Flow:
1. Validate all required fields (server-side)
2. Send confirmation email to prospect (HTML template, branded Total Engage)
3. Send notification email to `team@totalengage.com` with lead details
4. Return `{ success: true, message: "Demo request received" }` or error

---

## 🔐 Security & Performance

- **Form validation:** Both client-side (React) and server-side (Express)
- **Rate limiting:** Max 5 demo requests per IP per hour (`express-rate-limit`)
- **Helmet.js:** HTTP security headers
- **Environment variables:** API keys, SMTP credentials in Replit Secrets (never hardcoded)
- **Image optimization:** Use WebP format, lazy-load all below-fold images
- **Code splitting:** Vite's automatic route-based code splitting
- **GSAP/framer-motion:** `will-change: transform` on animated elements, `transform: translateZ(0)` for GPU acceleration
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` — skip all entrance animations, keep only functional transitions
- **Font loading:** `font-display: swap` on all custom fonts

---

## 📁 Project Directory Structure

```
totalengage-website/
├── server.js                     # Express server (serves API + static build)
├── package.json
├── .env.example                  # Template for Replit Secrets
├── vite.config.js
├── tailwind.config.js
├── index.html
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg              # Open Graph preview image
│   └── fonts/                   # Self-hosted font files (optional)
├── src/
│   ├── main.jsx
│   ├── App.jsx                   # Router setup + AnimatePresence wrapper
│   ├── index.css                 # Tailwind directives + CSS variables + keyframes
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx        # Reusable CTA button with shimmer
│   │   │   ├── Card.jsx          # Feature/testimonial card base
│   │   │   ├── Badge.jsx         # Label/eyebrow badges
│   │   │   ├── AnimatedCounter.jsx
│   │   │   ├── SectionReveal.jsx # framer-motion whileInView wrapper
│   │   │   └── Marquee.jsx       # Infinite scroll marquee
│   │   ├── sections/             # Homepage sections as components
│   │   │   ├── HeroSection.jsx
│   │   │   ├── StatsBar.jsx
│   │   │   ├── BuiltForHospitality.jsx
│   │   │   ├── FeaturesGrid.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── MENASection.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── IntegrationHub.jsx
│   │   │   └── FinalCTA.jsx
│   │   └── forms/
│   │       └── DemoRequestForm.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Features.jsx
│   │   ├── Hospitality.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── CaseStudyDetail.jsx
│   │   ├── Pricing.jsx
│   │   ├── Integrations.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   ├── features.js           # Feature card data
│   │   ├── integrations.js       # Integration list data
│   │   ├── caseStudies.js        # Case study metadata
│   │   └── pricing.js            # Pricing tier data
│   ├── hooks/
│   │   ├── useScrollAnimation.js # Custom GSAP scroll hook
│   │   └── useCountUp.js         # Counter animation hook
│   ├── utils/
│   │   └── roiCalculator.js      # ROI calculator logic
│   └── assets/
│       ├── logos/                # Client logos (SVG)
│       ├── icons/                # Feature icons (SVG/Lottie JSON)
│       └── mockups/              # Product screenshot mockups
```

---

## 🧩 Replit-Specific Configuration

### `package.json` Scripts
```json
{
  "scripts": {
    "dev": "vite --host 0.0.0.0 --port 5173",
    "build": "vite build",
    "preview": "vite preview",
    "server:dev": "node --watch server.js",
    "start": "node server.js"
  }
}
```

### `server.js` Structure
```javascript
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet({ contentSecurityPolicy: false })); // CSP disabled for CDN assets
app.use(cors());
app.use(express.json());

// Rate limiting for forms
const formLimiter = rateLimit({ windowMs: 60 * 60 * 1000, max: 5 });

// API Routes
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.post('/api/demo-request', formLimiter, handleDemoRequest);
app.post('/api/contact', formLimiter, handleContact);

// Serve React app (in production)
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Total Engage running on port ${PORT}`));
```

### `.replit` File
```toml
run = "npm start"
entrypoint = "server.js"

[nix]
channel = "stable-23_11"

[deployment]
run = ["sh", "-c", "npm run build && npm start"]
deploymentTarget = "cloudrun"
```

### Environment Variables (Replit Secrets)
```
SMTP_HOST=smtp.resend.com
SMTP_PORT=465
SMTP_USER=resend
SMTP_PASS=re_xxxxxxxxxxxx
TEAM_EMAIL=team@totalengage.com
NODE_ENV=production
```

---

## 📊 SEO & Metadata

### Global Meta Tags (`index.html`)
```html
<title>Total Engage | The Hospitality Engagement Platform for MENA</title>
<meta name="description" content="Total Engage gives MENA's leading hotels one unified platform to automate guest marketing, manage conversations, and drive direct bookings. Trusted by Shangri-La and InterContinental." />
<meta name="keywords" content="hotel CRM MENA, hospitality marketing automation, WhatsApp hotel campaigns, guest engagement platform, CRM UAE, hotel software Saudi Arabia" />
<meta property="og:title" content="Total Engage — Built for MENA Hospitality" />
<meta property="og:description" content="The only CRM platform built for 5-star hotels in the Middle East." />
<meta property="og:image" content="/og-image.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="canonical" href="https://totalengage.com" />
```

### Page-specific titles:
- `/features` → `Platform Features | Total Engage`
- `/hospitality` → `Hotel CRM for MENA | Total Engage`
- `/pricing` → `Pricing Plans | Total Engage`
- `/case-studies` → `Client Success Stories | Shangri-La, IHG & More`

---

## ✅ Implementation Checklist for Antigravity

- [ ] Initialize Vite + React project
- [ ] Install all npm dependencies (framer-motion, gsap, lottie-react, react-spring, react-router-dom, express, nodemailer, helmet, cors, express-rate-limit, tailwindcss)
- [ ] Set up Tailwind with custom config — extend theme: `electric: '#deff00'`, `cream: '#f4f2e6'`, `brand-black: '#000000'`
- [ ] Define all CSS custom properties in `index.css` (see Design System section)
- [ ] Import Google Fonts: Bricolage Grotesque, Instrument Sans, Space Mono
- [ ] Build Navbar with scroll behavior (transparent → black + blur)
- [ ] Build Hero section with CSS dot-grid texture + GSAP staggered text animation
- [ ] Build all homepage sections in order (follow Section Alternation Pattern strictly)
- [ ] Build Footer
- [ ] Build Features, Hospitality, Case Studies, Pricing, Integrations, Contact pages
- [ ] Set up React Router with AnimatePresence
- [ ] Build Express server with API endpoints
- [ ] Build demo request form with email sending
- [ ] Test on mobile (responsive breakpoints)
- [ ] Test on Replit (confirm `PORT` env var is used, `0.0.0.0` binding)
- [ ] Add SEO meta tags
- [ ] Test animation performance (requestAnimationFrame, GPU layers)
- [ ] Add `prefers-reduced-motion` media query support
- [ ] Final QA pass

---

## 💡 Creative Direction Notes for Antigravity

1. **Brand Identity — Non-Negotiable:** Three colors only: `#deff00` (electric), `#000000` (black), `#f4f2e6` (cream). No additions. Every design decision flows from these three. When in doubt: black background, cream text, electric accents.

2. **The Electric Rule:** `#deff00` should be used *purposefully*, not everywhere. It should mark the most important thing on any given screen — the primary CTA button, the active stat, the hovered feature icon, the highlighted word in a headline. When everything glows, nothing does.

3. **Section Rhythm:** Strictly alternate black and cream sections (see Section Alternation Pattern). The stats bar and final CTA should be full electric `#deff00` — these are the two highest-energy moments on the page.

4. **Tone:** Confident, bold, modern. The brand identity is not "safe luxury" — it's disruptive and energetic. The electric yellow-green says "we're not your boring hotel software." Lean into that.

5. **Handshake inspiration points:** Bold, centered hero typography. Clean card grids with generous hover states. Persona-based navigation. Trust signals (logos, stats) integrated naturally. Simple, direct CTAs. Strong section-to-section rhythm.

6. **MENA sensitivity:** Include Arabic character support in the font stack (add `Noto Sans Arabic` as a fallback for any Arabic text). City and flag references reinforce regional authority.

7. **Button consistency across entire site:**
   - On black backgrounds: `#deff00` fill + `#000000` text
   - On cream backgrounds: `#000000` fill + `#f4f2e6` text
   - On electric backgrounds: `#000000` fill + `#deff00` text
   - Ghost variants: border matches the accent of that section

8. **Avoid:** Any gold, purple, blue, teal, or other accent colors. The brand is three colors — honor it. No stock photo people. No clip-art icons. No drop shadows using color (only black/transparent shadows). No gradients that introduce new hues.

---

*Specification version: 1.0 | Prepared for Total Engage | March 2025*
*Feed this entire document to Antigravity as the project brief.*
