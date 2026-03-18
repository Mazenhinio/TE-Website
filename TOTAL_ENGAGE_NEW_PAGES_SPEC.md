# Total Engage — New Pages Build Specification

> **Purpose:** This document is the single source of truth for building all new department/feature pages for the Total Engage website. Follow every instruction precisely. Do not deviate from the design system, content structure, or SEO requirements defined here.

---

## Table of Contents

1. [Global Rules](#global-rules)
2. [Design System Reference](#design-system-reference)
3. [Shared Page Template](#shared-page-template)
4. [Page 1: Food & Beverage](#page-1-food--beverage)
5. [Page 2: Wellness Club / Spa](#page-2-wellness-club--spa)
6. [Page 3: Weddings & Special Occasions](#page-3-weddings--special-occasions)
7. [Page 4: Kids Club](#page-4-kids-club)
8. [Page 5: Rooms & Suites](#page-5-rooms--suites)
9. [Page 6: Loyalty & Guest Retention](#page-6-loyalty--guest-retention)
10. [Page 7: Reviews & Reputation Management](#page-7-reviews--reputation-management)
11. [Page 8: Contact / Schedule a Demo](#page-8-contact--schedule-a-demo)
12. [Navigation & Routing](#navigation--routing)
13. [SEO & GEO Requirements](#seo--geo-requirements)
14. [Animation Requirements](#animation-requirements)
15. [Responsive Breakpoints](#responsive-breakpoints)

---

## Global Rules

1. **Every page must follow the existing design system exactly.** Do not introduce new colors, fonts, or spacing values.
2. **Every page must be SEO and GEO (Generative Engine Optimization) driven.** Each page targets specific keywords embedded naturally into headings, body copy, meta tags, and alt text.
3. **No pricing information on any page.** Never mention pricing, plans, tiers, or costs anywhere.
4. **Every page ends with the same CTA:** Schedule a Demo section linking to the demo form.
5. **All pages share the same header/navigation and footer as the homepage.**
6. **All animations must use the same libraries as the homepage:** Framer Motion, GSAP + ScrollTrigger, react-spring. No new animation dependencies.
7. **All pages must be fully responsive** across desktop (1440px+), tablet (768px–1024px), and mobile (320px–767px).
8. **Section alternation rule:** Black (`#000000`) and cream (`#F4F2E6`) background sections alternate. Accent sections use `#DEFF00`.
9. **WhatsApp message previews are the primary visual element.** Every page must show at least one realistic WhatsApp conversation mockup relevant to that department.
10. **Do not use stock photography.** Use UI mockups, WhatsApp message previews, dashboard screenshots, and abstract/geometric visuals only.

---

## Design System Reference

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#DEFF00` | CTAs, accent highlights, hover states, impact sections |
| `--color-black` | `#000000` | Primary backgrounds (alternating), text on cream |
| `--color-cream` | `#F4F2E6` | Secondary backgrounds (alternating), text on black |

**No other colors are permitted.** No grays, no blues, no teals, no golds.

### Typography
| Role | Font | Weight | Size (desktop) |
|------|------|--------|----------------|
| H1 / Page Title | Bricolage Grotesque | 800 | 64–72px |
| H2 / Section Title | Bricolage Grotesque | 700 | 40–48px |
| H3 / Subsection | Instrument Sans | 600 | 28–32px |
| Body | Instrument Sans | 400 | 16–18px |
| Labels / Tags | Space Mono | 400 | 12–14px |
| Stats / Numbers | Bricolage Grotesque | 800 | 56–72px |

### Buttons
| Context | Style |
|---------|-------|
| On black bg | `#DEFF00` fill, `#000000` text |
| On cream bg | `#000000` fill, `#F4F2E6` text |
| On `#DEFF00` bg | `#000000` fill, `#DEFF00` text |

All buttons: `border-radius: 100px` (pill shape), `padding: 14px 32px`, `font-family: Instrument Sans`, `font-weight: 600`, `font-size: 16px`. Hover: invert fill/text colors with 200ms ease transition.

### Spacing
- Section vertical padding: `120px` desktop, `80px` tablet, `60px` mobile
- Content max-width: `1200px`, centered
- Between elements within a section: `24px–48px`

---

## Shared Page Template

Every department page follows this exact section structure. Content within each section varies per page (defined in individual page specs below).

### Section 1: Hero Banner
- **Background:** `#000000`
- **Layout:** Two columns — left: text content, right: visual (WhatsApp mockup or UI screenshot)
- **Content:**
  - Small label/tag above headline (e.g., `FOOD & BEVERAGE`) in `#DEFF00`, Space Mono
  - H1 headline — benefit-driven, contains primary SEO keyword
  - 2–3 line subheadline in `#F4F2E6`
  - CTA button: "Schedule a Demo"
- **Animation:** Text fades in from left (staggered), visual slides in from right. Framer Motion, `duration: 0.6s`, `ease: easeOut`.

### Section 2: Problem / Pain Point
- **Background:** `#F4F2E6`
- **Layout:** Centered text, max-width 800px
- **Content:** 2–3 sentences describing the challenge hotels face in this department WITHOUT Total Engage. Frame it as a question or pain statement.
- **Animation:** Fade up on scroll. GSAP ScrollTrigger.

### Section 3: Solution Overview (What We Do)
- **Background:** `#000000`
- **Layout:** Three-column card grid
- **Content:** 3–4 feature cards, each with:
  - Icon or small visual (use simple geometric shapes or abstract icons in `#DEFF00`)
  - H3 title
  - 2 lines of description
- **Animation:** Cards stagger in from bottom, 150ms delay between each. Framer Motion.

### Section 4: WhatsApp Preview / Visual Proof
- **Background:** `#F4F2E6`
- **Layout:** Two columns — left: descriptive text, right: WhatsApp message mockup
- **Content:**
  - H2 title explaining the automation
  - Body text describing the flow
  - Realistic WhatsApp conversation showing the actual message a guest would receive
- **Animation:** WhatsApp messages appear one by one (typing indicator → message bubble) simulating a real conversation. Use react-spring for the bubble pop-in.

### Section 5: Use Cases / Automations List
- **Background:** `#000000`
- **Layout:** Two-column grid of use case cards OR a vertical accordion
- **Content:** 4–6 specific automations relevant to this department. Each with:
  - Title (e.g., "Pre-Arrival Dinner Reservation Prompt")
  - One-line description
  - Trigger → Action format (e.g., "Guest checks in → WhatsApp sent with tonight's specials")
- **Animation:** Scroll-triggered stagger reveal.

### Section 6: Results / Impact
- **Background:** `#DEFF00` (accent section)
- **Layout:** 3-column stats row
- **Content:** 3 metrics relevant to this department with large numbers, supporting text, and icons
- **Animation:** Count-up animation on numbers when section enters viewport. Use GSAP.

### Section 7: CTA — Schedule a Demo
- **Background:** `#000000`
- **Layout:** Centered
- **Content:**
  - H2: "Ready to transform your [department]?"
  - Subtext: "One platform. Every guest. Every property."
  - CTA button: "Schedule a Demo" → links to `/contact`
- **Animation:** Fade up on scroll.

---

## Page 1: Food & Beverage

**Route:** `/food-and-beverage`

**Meta Title:** `Best WhatsApp Marketing Tool for Hotel Restaurants & Dining | Total Engage`
**Meta Description:** `Drive more F&B revenue with automated WhatsApp campaigns, table booking reminders, and post-dining review collection for hotel restaurants across MENA.`

### Hero
- **Tag:** `FOOD & BEVERAGE`
- **H1:** `Drive More Revenue From Every Restaurant, Bar, and Lounge`
- **Subheadline:** `Automate guest outreach for dining reservations, seasonal menus, and exclusive F&B promotions — all through WhatsApp.`
- **Visual:** WhatsApp mockup showing a hotel sending a Friday brunch promotion with a "Book Now" button.

### Pain Point
`Your restaurants are full on weekends but empty on weekdays. Promotions go out on Instagram and hope for the best. There is no direct line to guests who already love your food. You are leaving revenue on the table — literally.`

### Solution Cards
1. **Targeted Promotions** — Send WhatsApp campaigns for seasonal menus, Ramadan iftars, Friday brunches, and new chef launches to segmented guest lists.
2. **Automated Table Reminders** — Confirmation and reminder messages before every reservation. Reduce no-shows by up to 40%.
3. **Post-Dining Reviews** — Automatically request Google Reviews after a dining experience. Happy guests go public, unhappy guests get a private recovery flow.
4. **Social Media Scheduling** — Plan and publish F&B content to Instagram and TikTok directly from the platform.

### WhatsApp Preview
- **Context:** Pre-arrival upsell
- **H2:** `Sell Tonight's Specials Before Guests Leave Their Room`
- **Body:** `Guests who checked in today automatically receive a WhatsApp message with tonight's dining options. One tap to book. No app download, no front desk call.`
- **WhatsApp mockup conversation:**
  - Hotel: "Welcome to Shangri-La, {name}! Tonight at Shang Palace we have a special 5-course tasting menu by Chef Liu. Would you like to reserve a table?"
  - Guest: "Yes please, 7:30pm for 2"
  - Hotel: "Done! Your table is confirmed for 7:30 PM. See you tonight."

### Use Cases
1. **Friday Brunch Campaign** — Trigger: Every Wednesday → Action: WhatsApp to previous brunch guests with this week's menu and booking link.
2. **Birthday Dining Offer** — Trigger: Guest birthday in 7 days → Action: Personalized WhatsApp with complimentary dessert offer at any outlet.
3. **Post-Checkout F&B Review** — Trigger: Guest checks out → Action: WhatsApp asking to rate their dining experience, routing to Google Reviews or private feedback.
4. **Ramadan Iftar Promotion** — Trigger: Ramadan campaign start date → Action: Broadcast to all Muslim-tagged guests in database with iftar packages.
5. **New Menu Launch** — Trigger: Manual campaign → Action: WhatsApp blast to F&B loyalty segment with new menu preview and early booking link.
6. **No-Show Recovery** — Trigger: Guest missed reservation → Action: WhatsApp follow-up with rebooking option for the next 48 hours.

### Results
- **40%** reduction in no-shows | Icon: downward arrow
- **3.2x** ROI on F&B WhatsApp campaigns | Icon: upward arrow
- **89%** message open rate | Icon: eye/open envelope

---

## Page 2: Wellness Club / Spa

**Route:** `/wellness-spa`

**Meta Title:** `Hotel Spa & Wellness Marketing Automation | WhatsApp Campaigns | Total Engage`
**Meta Description:** `Boost spa bookings and wellness membership renewals with automated WhatsApp marketing for hotel wellness clubs across MENA.`

### Hero
- **Tag:** `WELLNESS & SPA`
- **H1:** `Fill Every Treatment Room, Every Day`
- **Subheadline:** `Automated wellness promotions, class bookings, and membership renewals delivered directly to your guests via WhatsApp.`
- **Visual:** WhatsApp mockup showing a spa appointment confirmation with treatment details.

### Pain Point
`Your spa has availability midweek but guests do not know about it. Membership renewals slip through the cracks. You are relying on in-room flyers that guests never read.`

### Solution Cards
1. **In-Stay Spa Promotions** — WhatsApp sent on check-in day with available treatments and one-tap booking.
2. **Membership Renewals** — Automated reminders before expiry with renewal link.
3. **Class & Session Booking** — Guests receive the weekly wellness schedule and book directly via WhatsApp.
4. **Post-Visit Feedback** — Collect spa satisfaction scores and route to reviews or recovery.

### WhatsApp Preview
- **Context:** Check-in day spa upsell
- **H2:** `Every Guest Knows About Your Spa Before They Unpack`
- **Body:** `The moment a guest checks in, they receive a curated wellness menu based on their preferences. No front desk pitch needed.`
- **WhatsApp mockup:**
  - Hotel: "Welcome, {name}! Our Wellness Club has openings today. How about a 60-minute deep tissue massage at 3 PM? We also have sunset yoga at 5:30 PM."
  - Guest: "The massage sounds great"
  - Hotel: "Booked! 3 PM deep tissue massage. Please arrive 15 minutes early. Enjoy your stay."

### Use Cases
1. **Check-In Wellness Offer** — Trigger: Guest checks in → Action: WhatsApp with today's available spa slots.
2. **Membership Expiry Reminder** — Trigger: 14 days before expiry → Action: WhatsApp with renewal link and a limited-time offer.
3. **Seasonal Wellness Package** — Trigger: Campaign launch → Action: Broadcast to wellness segment (detox January, summer body, Ramadan wellness).
4. **Post-Treatment Review** — Trigger: 2 hours after treatment → Action: WhatsApp feedback request.
5. **Repeat Guest Spa Offer** — Trigger: Returning guest check-in (tagged as spa user) → Action: Personalized WhatsApp with their preferred treatment pre-booked.

### Results
- **2.4x** increase in midweek spa bookings | Icon: calendar
- **67%** membership renewal rate via WhatsApp | Icon: refresh/cycle
- **92%** message open rate | Icon: eye/open envelope

---

## Page 3: Weddings & Special Occasions

**Route:** `/weddings-special-occasions`

**Meta Title:** `Wedding & Event Marketing Automation for Hotels | Total Engage`
**Meta Description:** `Capture more wedding inquiries, automate event follow-ups, and drive special occasion bookings for hotels in MENA with WhatsApp marketing.`

### Hero
- **Tag:** `WEDDINGS & SPECIAL OCCASIONS`
- **H1:** `Capture Every Wedding Inquiry. Celebrate Every Milestone.`
- **Subheadline:** `From first inquiry to the big day and beyond — automate your entire wedding and special occasions pipeline through WhatsApp and social media.`
- **Visual:** WhatsApp mockup showing a wedding venue inquiry response with a photo carousel link.

### Pain Point
`Wedding inquiries come in through Instagram DMs, WhatsApp, email, and your website. Half of them get a late reply. Anniversary and birthday guests are never recognized. You are missing the most emotional — and profitable — bookings in hospitality.`

### Solution Cards
1. **Instant Inquiry Response** — Every wedding lead from any channel gets an immediate, personalized reply with venue details and availability.
2. **Automated Follow-Up Sequences** — Nurture wedding leads over weeks with venue showcases, testimonials, and package details.
3. **Anniversary & Birthday Detection** — CRM tags trigger personalized outreach for returning guests' special dates.
4. **Proposal & Celebration Packages** — Automated upsell for romantic packages, surprises, and milestone celebrations.

### WhatsApp Preview
- **Context:** Wedding inquiry instant response
- **H2:** `Reply to Wedding Inquiries in Seconds, Not Days`
- **Body:** `A couple sends a WhatsApp message asking about wedding venues. They get an instant, personalized response with packages, a virtual tour link, and available dates. No human needed for the first touch.`
- **WhatsApp mockup:**
  - Guest: "Hi, we're looking at wedding venues for November 2026. Do you have availability for around 200 guests?"
  - Hotel: "Congratulations on your upcoming wedding! We would love to host your special day. We have two stunning venues available in November — our Grand Ballroom (up to 300 guests) and the Garden Terrace (up to 180 guests). Here is a link to our virtual tour and packages: [link]. Would you like to schedule a site visit?"
  - Guest: "The Grand Ballroom looks perfect. Can we visit this Saturday?"
  - Hotel: "Absolutely! I have booked a site visit for you this Saturday at 11 AM with our Events Manager, Layla. See you then!"

### Use Cases
1. **Instant Wedding Lead Response** — Trigger: Inquiry via any channel → Action: Immediate WhatsApp reply with venue info and CTA.
2. **Lead Nurture Sequence** — Trigger: 3 days after initial inquiry, no booking → Action: WhatsApp follow-up with testimonials and package comparisons.
3. **Anniversary Outreach** — Trigger: Guest wedding anniversary (from CRM) → Action: WhatsApp with romantic dinner or suite upgrade offer.
4. **Birthday Campaign** — Trigger: 7 days before guest birthday → Action: WhatsApp with birthday celebration package.
5. **Corporate Events / MICE** — Trigger: Corporate inquiry tag → Action: Dedicated response with meeting room specs, AV setup, and F&B menus.
6. **Post-Event Follow-Up** — Trigger: 1 day after event → Action: Thank you message with feedback link and photo gallery.

### Results
- **5x** faster response to wedding inquiries | Icon: lightning bolt
- **35%** increase in wedding bookings from WhatsApp leads | Icon: upward arrow
- **91%** open rate on anniversary campaigns | Icon: heart

---

## Page 4: Kids Club

**Route:** `/kids-club`

**Meta Title:** `Hotel Kids Club Marketing & Family Guest Engagement | Total Engage`
**Meta Description:** `Engage family guests with automated kids club activity updates, WhatsApp notifications for parents, and family-focused hotel marketing.`

### Hero
- **Tag:** `KIDS CLUB`
- **H1:** `Happy Kids. Relaxed Parents. Repeat Bookings.`
- **Subheadline:** `Keep parents informed and kids entertained with automated activity updates, session bookings, and family-focused promotions via WhatsApp.`
- **Visual:** WhatsApp mockup showing a daily kids club schedule sent to a parent.

### Pain Point
`Parents want to know their kids are having fun — but your kids club communication is limited to a poster in the elevator. Families are your highest-value repeat guests, and you are not engaging them.`

### Solution Cards
1. **Daily Activity Alerts** — Automated WhatsApp to parents with today's kids club schedule and open slots.
2. **Pre-Arrival Family Welcome** — Families tagged in CRM receive a personalized message before arrival with kids club highlights.
3. **Session Booking** — Parents book specific activities directly via WhatsApp reply.
4. **Post-Stay Family Follow-Up** — Targeted re-engagement campaigns for family segments with school holiday offers.

### WhatsApp Preview
- **Context:** Day-of activity schedule
- **H2:** `Parents Know Exactly What Their Kids Are Doing Today`
- **Body:** `Every morning, families with children receive the day's kids club schedule on WhatsApp. One tap to register. Parents relax. Kids play.`
- **WhatsApp mockup:**
  - Hotel: "Good morning, {name}! Here is what is happening at the Kids Club today: 10 AM — Arts & Crafts, 11:30 AM — Pool Games (ages 5-10), 2 PM — Movie Time, 4 PM — Treasure Hunt. Would you like to sign up your little ones for any of these?"
  - Guest: "Pool games and treasure hunt please!"
  - Hotel: "Done! Sarah and Adam are registered for Pool Games at 11:30 AM and Treasure Hunt at 4 PM. Have a relaxing day!"

### Use Cases
1. **Check-In Family Welcome** — Trigger: Family tag + check-in → Action: WhatsApp with kids club overview and today's schedule.
2. **Daily Schedule Push** — Trigger: Every morning 8 AM → Action: WhatsApp to all in-house families with the day's activities.
3. **Summer Camp Promotion** — Trigger: Campaign launch → Action: Broadcast to family segment with summer program details and early-bird booking.
4. **School Holiday Campaign** — Trigger: 4 weeks before school holidays → Action: WhatsApp to past family guests with holiday packages.
5. **Post-Stay Family Re-Engagement** — Trigger: 60 days after checkout → Action: WhatsApp inviting them back with family package.

### Results
- **78%** kids club participation from WhatsApp-notified families | Icon: children/people
- **2.1x** higher repeat booking rate for family guests | Icon: refresh/cycle
- **94%** parent satisfaction with activity updates | Icon: star

---

## Page 5: Rooms & Suites

**Route:** `/rooms-suites`

**Meta Title:** `Hotel Room Upsell & Pre-Arrival Marketing Automation | Total Engage`
**Meta Description:** `Maximize room revenue with automated WhatsApp upsells, pre-arrival messaging, and post-stay re-booking campaigns for hotels in MENA.`

### Hero
- **Tag:** `ROOMS & SUITES`
- **H1:** `Maximize Revenue From Every Room, Every Night`
- **Subheadline:** `Automated room upgrades, pre-arrival preference collection, and post-stay rebooking — all delivered through WhatsApp before guests even arrive.`
- **Visual:** WhatsApp mockup showing a room upgrade offer with a photo of the suite.

### Pain Point
`Guests book standard rooms online. By the time they arrive, it is too late to upsell. You are leaving upgrade revenue, early check-in fees, and rebooking opportunities on the table because your team cannot reach every guest manually.`

### Solution Cards
1. **Pre-Arrival Upsell** — Automated WhatsApp offer to upgrade to a suite or add packages before arrival.
2. **Preference Collection** — Guests share room preferences (pillow type, minibar, floor) via WhatsApp before check-in.
3. **In-Stay Satisfaction Check** — Mid-stay WhatsApp asking if everything is perfect — catch issues before they become bad reviews.
4. **Post-Stay Re-Booking** — Automated re-engagement with seasonal offers and loyalty incentives.

### WhatsApp Preview
- **Context:** Pre-arrival upgrade offer
- **H2:** `Sell the Suite Before They Arrive`
- **Body:** `48 hours before arrival, guests receive a personalized WhatsApp with an upgrade offer. One reply to confirm. Revenue captured while the guest is still excited about their trip.`
- **WhatsApp mockup:**
  - Hotel: "Hi {name}, we are looking forward to welcoming you on Friday! We have a special offer: upgrade to our Ocean View Suite for just a little more. King bed, private balcony, and complimentary breakfast. Would you like to upgrade?"
  - Guest: "How much more?"
  - Hotel: "Just $45 per night more than your current booking. Shall I upgrade you?"
  - Guest: "Yes please!"
  - Hotel: "Upgraded! Your Ocean View Suite is confirmed. See you Friday."

### Use Cases
1. **48-Hour Pre-Arrival Upsell** — Trigger: 2 days before check-in → Action: WhatsApp with available upgrade and price.
2. **Room Preference Collection** — Trigger: 3 days before check-in → Action: WhatsApp asking for pillow, minibar, and special request preferences.
3. **Early Check-In / Late Checkout Offer** — Trigger: Day before arrival → Action: WhatsApp offering early check-in for a fee.
4. **Mid-Stay Satisfaction Check** — Trigger: Day 2 of stay → Action: WhatsApp asking if everything is good, with quick-reply options.
5. **No-Show Prevention** — Trigger: Day of check-in, not yet arrived by 6 PM → Action: WhatsApp confirmation they are still coming.
6. **Post-Checkout Re-Booking** — Trigger: 30 days after checkout → Action: WhatsApp with seasonal offer and direct booking link.

### Results
- **22%** upgrade conversion rate via WhatsApp | Icon: upward arrow
- **40%** reduction in no-shows | Icon: downward arrow
- **3.5x** ROI on pre-arrival campaigns | Icon: chart

---

## Page 6: Loyalty & Guest Retention

**Route:** `/loyalty-retention`

**Meta Title:** `Hotel Guest Retention & Loyalty CRM Automation | Total Engage`
**Meta Description:** `Turn one-time visitors into lifelong guests with CRM segmentation, automated WhatsApp campaigns, and personalized loyalty engagement for MENA hotels.`

### Hero
- **Tag:** `LOYALTY & RETENTION`
- **H1:** `Turn Every Guest Into a Regular`
- **Subheadline:** `Segment your guest database, trigger personalized campaigns, and build lasting relationships — all automated through WhatsApp.`
- **Visual:** Dashboard mockup showing CRM segments (VIP, Returning, Lapsed, New) with campaign stats.

### Pain Point
`You have thousands of past guests in your database but no way to reach them meaningfully. Generic email blasts get ignored. Your best guests are not recognized when they return. One-time visitors never come back because no one invited them.`

### Solution Cards
1. **CRM Segmentation & Tagging** — Auto-tag guests by stay history, spend level, preferences, nationality, and occasion.
2. **Automated Re-Engagement** — Lapsed guests get a WhatsApp campaign after 90 days with a personalized offer to return.
3. **VIP Recognition** — Repeat and high-spend guests are flagged automatically. Staff are alerted. Special welcome messages are sent.
4. **Campaign ROI Tracking** — Track every WhatsApp campaign from send to booking, with revenue attribution.

### WhatsApp Preview
- **Context:** Lapsed guest re-engagement
- **H2:** `Bring Guests Back Without Lifting a Finger`
- **Body:** `A guest who stayed 6 months ago and loved your hotel gets a personalized WhatsApp with a seasonal offer. Their name, their favorite room type, their preferred dates — all pulled from the CRM automatically.`
- **WhatsApp mockup:**
  - Hotel: "Hi {name}, it has been a while since your last visit and we miss you! This Eid, we have a special rate on our Deluxe Sea View rooms — the same room type you loved last time. Book before March 20 and enjoy complimentary breakfast. Interested?"
  - Guest: "Send me the details!"
  - Hotel: "Here you go: [booking link]. Your preferred dates and room type are pre-selected. Let me know if you need anything else."

### Use Cases
1. **90-Day Lapsed Guest Campaign** — Trigger: No booking in 90 days → Action: WhatsApp with personalized return offer.
2. **VIP Welcome Alert** — Trigger: VIP-tagged guest checks in → Action: Notify GM + send premium welcome WhatsApp.
3. **Birthday Loyalty Offer** — Trigger: 7 days before birthday → Action: WhatsApp with birthday stay/dinner package.
4. **Post-Stay NPS Collection** — Trigger: 24 hours after checkout → Action: WhatsApp with 1-question satisfaction score.
5. **Seasonal Broadcast to Segments** — Trigger: Manual campaign → Action: Targeted WhatsApp to specific segments (families, couples, business travelers).
6. **Refer-a-Friend Campaign** — Trigger: Guest rated 5 stars → Action: WhatsApp with referral code and incentive.

### Results
- **34%** repeat booking rate from WhatsApp campaigns | Icon: refresh/cycle
- **1,270+** guests re-engaged per campaign | Icon: people
- **4.1x** ROI on retention campaigns | Icon: chart

---

## Page 7: Reviews & Reputation Management

**Route:** `/reviews-reputation`

**Meta Title:** `Hotel Review Management & AI-Powered Reputation Platform | Total Engage`
**Meta Description:** `Drive more 5-star reviews, eliminate negative feedback, and reply to Google, TripAdvisor, and Booking.com reviews instantly with AI. Built for MENA hotels.`

### Hero
- **Tag:** `REVIEWS & REPUTATION`
- **H1:** `Drive More Five-Star Reviews. Eliminate Negative Ones.`
- **Subheadline:** `Automate review collection, route happy guests to Google, intercept unhappy guests privately, and reply to every review with AI — across every platform.`
- **Visual:** Split visual — left side: a Google Reviews profile showing 4.8 stars with an upward arrow, right side: WhatsApp mockup showing a post-stay review request.

### Pain Point
`Bad reviews happen in public. Recovery happens too late. Your team cannot monitor Google, TripAdvisor, and Booking.com around the clock. Meanwhile, happy guests leave without ever being asked to share their experience.`

### Solution Cards
1. **Smart Review Routing** — Happy guests are directed to Google Reviews. Unhappy guests enter a private recovery flow. No more public complaints.
2. **AI-Powered Review Replies** — Every review on Google, TripAdvisor, and Booking.com gets a thoughtful, instant AI-generated reply.
3. **Automated Post-Stay Requests** — WhatsApp sent after checkout asking guests to rate their experience.
4. **Sentiment Dashboard** — AI-powered summary of overall guest sentiment, trends, and actionable insights across all properties.

### WhatsApp Preview
- **Context:** Post-stay smart routing
- **H2:** `The Review That Never Goes Public`
- **Body:** `After checkout, guests receive a simple satisfaction question. If they are happy, they are directed to Google Reviews with a one-tap link. If they are not, they enter a private feedback form where your team can resolve the issue before it ever becomes a public review.`
- **WhatsApp mockup:**
  - Hotel: "Thank you for staying with us, {name}! How was your experience? Rate us from 1 to 5."
  - Guest: "5"
  - Hotel: "We are so glad you enjoyed your stay! It would mean a lot if you could share your experience on Google: [Google Review link]. Thank you!"
  - (Second scenario — unhappy guest)
  - Guest: "2"
  - Hotel: "We are sorry to hear that. We want to make it right. Could you share what happened? Your feedback goes directly to our Guest Relations Manager."

### Use Cases
1. **Post-Checkout Review Request** — Trigger: Guest checks out → Action: WhatsApp asking for a 1–5 rating.
2. **5-Star → Google Redirect** — Trigger: Rating 4 or 5 → Action: WhatsApp with Google Reviews direct link.
3. **Low Score → Private Recovery** — Trigger: Rating 1–3 → Action: WhatsApp with private feedback form + alert to Guest Relations.
4. **AI Review Reply — Google** — Trigger: New Google review detected → Action: AI drafts and posts a reply within minutes.
5. **AI Review Reply — TripAdvisor/Booking.com** — Same as above for other platforms.
6. **Monthly Sentiment Report** — Trigger: 1st of month → Action: AI-generated sentiment summary emailed to GM and marketing.

### Results
- **+0.4** average Google rating uplift within 6 months | Icon: star
- **96%** review response rate with AI | Icon: reply/chat bubble
- **73%** negative review interception rate | Icon: shield

---

## Page 8: Contact / Schedule a Demo

**Route:** `/contact`

**Meta Title:** `Schedule a Demo | Total Engage — Guest Engagement Platform for Hotels`
**Meta Description:** `Book a free demo of Total Engage, the leading WhatsApp marketing and guest engagement platform for hotels in the MENA region.`

### Layout
- **Background:** `#000000`
- **Two columns:**
  - Left: headline + subtext + trust indicators
  - Right: custom form

### Left Column
- **H1:** `See Total Engage in Action`
- **Subtext:** `Get a personalized walkthrough of how Total Engage can transform guest engagement across your hotel or chain.`
- **Trust indicators below:**
  - "Trusted by Shangri-La, InterContinental, and more"
  - "No commitment. No credit card."
  - "One platform. Every guest. Every property."

### Right Column — Form
Build this as a **custom form component** styled in Total Engage's UI. Do NOT embed a GHL form or calendar widget.

**Fields:**
| Field | Type | Required |
|-------|------|----------|
| First Name | text | yes |
| Last Name | text | yes |
| Email | email | yes |
| Phone | tel | yes |
| Hotel / Company Name | text | yes |
| Job Title | text | no |
| Number of Properties | dropdown: 1, 2–5, 6–20, 20+ | yes |
| Message | textarea | no |

**Submit button:** "Schedule a Demo" — `#DEFF00` fill, `#000000` text.

**Form behavior:**
1. On submit, send a POST request as a **webhook to GoHighLevel**. The webhook URL will be configured as an environment variable (`VITE_GHL_WEBHOOK_URL`).
2. Include all form fields as JSON in the webhook payload.
3. On success, redirect to a **Thank You page** (`/thank-you`).

### Thank You Page (`/thank-you`)
- **Background:** `#000000`
- **Centered layout:**
  - Checkmark icon in `#DEFF00`
  - **H1:** `Thank You!`
  - **Body:** `One of our team will reach out to you shortly to schedule your demo.`
  - Link: "Back to Home" → `/`
- **Animation:** Checkmark scales in with a spring animation (react-spring), text fades up after.

---

## Navigation & Routing

Update the site navigation to include the new pages:

### Primary Nav (Header)
```
Logo | Solutions ▾ | Contact
```

**Solutions dropdown:**
```
Food & Beverage         → /food-and-beverage
Wellness & Spa          → /wellness-spa
Weddings & Events       → /weddings-special-occasions
Kids Club               → /kids-club
Rooms & Suites          → /rooms-suites
Loyalty & Retention     → /loyalty-retention
Reviews & Reputation    → /reviews-reputation
```

**Contact** → `/contact`

### Footer
Add all page links in a "Solutions" column in the footer alongside existing links.

### React Router
Add routes for all new paths. Use code-splitting with `React.lazy()` and `Suspense` for each page to keep bundle size minimal.

---

## SEO & GEO Requirements

### Every Page Must Have:
1. **Unique `<title>` tag** — as specified per page above.
2. **Unique `<meta name="description">` tag** — as specified per page above.
3. **Canonical URL** — self-referencing.
4. **Open Graph tags** — `og:title`, `og:description`, `og:url`, `og:image` (use a branded OG image per page if possible, otherwise use the site-wide OG image).
5. **H1 must contain the primary keyword** — only one H1 per page.
6. **H2s must contain secondary keywords** — naturally embedded, not stuffed.
7. **Image alt text** — descriptive and keyword-relevant for every visual.
8. **Internal linking** — each page should link to at least 2 other department pages contextually within the body copy (e.g., the F&B page might say "See how we also automate guest retention" linking to the loyalty page).
9. **Schema markup** — Add `Organization` schema on the homepage and `WebPage` schema on each department page.
10. **Sitemap** — Auto-generate `sitemap.xml` including all new routes.

### GEO (Generative Engine Optimization)
- Write copy in a clear, factual, question-answering style that AI search engines can extract.
- Include natural FAQ-style content within the body (not a separate FAQ section).
- Embed structured claims: "Total Engage helps hotels in the MENA region automate WhatsApp marketing for [department]."
- Avoid fluff. Every sentence should carry information.

---

## Animation Requirements

All animations must use the existing stack. No new dependencies.

| Element | Library | Details |
|---------|---------|---------|
| Page enter | Framer Motion | `motion.div` with `initial={{ opacity: 0 }}` `animate={{ opacity: 1 }}` |
| Section reveal on scroll | GSAP + ScrollTrigger | Fade up + slight Y translate, `trigger: section element`, `start: "top 80%"` |
| Card stagger | Framer Motion | `staggerChildren: 0.15` in parent `variants` |
| Stats count-up | GSAP | `gsap.to()` targeting the number, counting from 0 to target over 1.5s |
| WhatsApp message bubbles | react-spring | `useTrail` for sequential bubble pop-in, 400ms delay between each |
| Button hover | CSS | Color inversion, `transition: all 0.2s ease` |
| Hero visual | Framer Motion | Slide in from right: `initial={{ x: 100, opacity: 0 }}` `animate={{ x: 0, opacity: 1 }}` |

**Performance rules:**
- All scroll animations use `will-change: transform, opacity` and are GPU-accelerated.
- Animations are disabled when `prefers-reduced-motion: reduce` is set.
- No animation fires until the element is in viewport (no off-screen animation overhead).

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Desktop | 1024px+ | Two-column layouts, full animations, hover effects active |
| Tablet | 768px–1023px | Two-column → stacked where needed, reduced spacing, hover effects → tap |
| Mobile | 320px–767px | Single column, H1 size reduced to 36–40px, section padding reduced, WhatsApp mockups scale to full-width, cards stack vertically |

**Mobile-specific rules:**
- Navigation collapses to hamburger menu.
- WhatsApp mockup fills the width with 16px horizontal padding.
- CTA buttons become full-width.
- Stats row stacks vertically (one stat per row).
- Solutions dropdown in mobile nav becomes an expandable accordion.

---

## Final Checklist Before Shipping

- [ ] All 7 department pages render correctly at all breakpoints
- [ ] Contact/demo form submits webhook successfully to GHL
- [ ] Thank you page displays correctly after submission
- [ ] All meta tags and OG tags are unique per page
- [ ] Sitemap.xml includes all new routes
- [ ] Navigation dropdown works on desktop and mobile
- [ ] Footer includes all new page links
- [ ] All animations perform smoothly (60fps target)
- [ ] `prefers-reduced-motion` disables animations
- [ ] No pricing information anywhere
- [ ] Internal links between pages work
- [ ] All WhatsApp mockups render correctly on mobile
- [ ] Page load performance: each page under 3s on 3G
- [ ] Lighthouse SEO score: 90+ on each page
