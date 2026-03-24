// Data for all department pages based on TOTAL_ENGAGE_NEW_PAGES_SPEC.md

export const foodBeverageData = {
  theme: { layout: 'offset-grid', animation: 'dynamic-fade' },
  meta: {
    title: 'Best WhatsApp Marketing Tool for Hotel Restaurants & Dining | Total Engage',
    description: 'Drive more F&B revenue with automated WhatsApp campaigns, table booking reminders, and post-dining review collection for hotel restaurants across MENA.',
  },
  hero: {
    tag: 'FOOD & BEVERAGE',
    h1: 'Drive More Revenue From Every Restaurant, Bar, and Lounge',
    subheadline: 'Automate guest outreach for dining reservations, seasonal menus, and exclusive F&B promotions — all through WhatsApp.',
  },
  painPoint: 'Your restaurants are full on weekends but empty on weekdays. Promotions go out on Instagram and hope for the best. There is no direct line to guests who already love your food. You are leaving revenue on the table — literally.',
  solutions: [
    { title: 'Targeted Promotions', description: 'Send WhatsApp campaigns for seasonal menus, Ramadan iftars, Friday brunches, and new chef launches to segmented guest lists.' },
    { title: 'Automated Table Reminders', description: 'Confirmation and reminder messages before every reservation. Reduce no-shows by up to 40%.' },
    { title: 'Post-Dining Reviews', description: 'Automatically request Google Reviews after a dining experience. Happy guests go public, unhappy guests get a private recovery flow.' },
    { title: 'Social Media Scheduling', description: 'Plan and publish F&B content to Instagram and TikTok directly from the platform.' }
  ],
  whatsappSection: {
    context: 'Pre-arrival upsell',
    h2: 'Sell Tonight\'s Specials Before Guests Leave Their Room',
    body: 'Guests who checked in today automatically receive a WhatsApp message with tonight\'s dining options. One tap to book. No app download, no front desk call.',
    messages: [
      { sender: 'Hotel', text: "Welcome to Shangri-La,! Tonight at Shang Palace we have a special 5-course tasting menu by Chef Liu. Would you like to reserve a table?" },
      { sender: 'Guest', text: "Yes please, 7:30pm for 2" },
      { sender: 'Hotel', text: "Done! Your table is confirmed for 7:30 PM. See you tonight." }
    ]
  },
  useCases: [
    { title: 'Friday Brunch Campaign', trigger: 'Every Wednesday', action: 'WhatsApp to previous brunch guests with this week\'s menu and booking link.' },
    { title: 'Birthday Dining Offer', trigger: 'Guest birthday in 7 days', action: 'Personalized WhatsApp with complimentary dessert offer at any outlet.' },
    { title: 'Post-Checkout F&B Review', trigger: 'Guest checks out', action: 'WhatsApp asking to rate their dining experience, routing to Google Reviews or private feedback.' },
    { title: 'Ramadan Iftar Promotion', trigger: 'Ramadan campaign start date', action: 'Broadcast to all Muslim-tagged guests in database with iftar packages.' },
    { title: 'New Menu Launch', trigger: 'Manual campaign', action: 'WhatsApp blast to F&B loyalty segment with new menu preview and early booking link.' },
    { title: 'No-Show Recovery', trigger: 'Guest missed reservation', action: 'WhatsApp follow-up with rebooking option for the next 48 hours.' }
  ],
  results: [
    { value: '40%', label: 'reduction in no-shows', icon: 'downward arrow' },
    { value: '3.2x', label: 'ROI on F&B WhatsApp campaigns', icon: 'upward arrow' },
    { value: '89%', label: 'message open rate', icon: 'eye/open envelope' }
  ]
};

export const wellnessSpaData = {
  theme: { layout: 'minimal-centered', animation: 'smooth-float' },
  meta: {
    title: 'Hotel Spa & Wellness Marketing Automation | WhatsApp Campaigns | Total Engage',
    description: 'Boost spa bookings and wellness membership renewals with automated WhatsApp marketing for hotel wellness clubs across MENA.',
  },
  hero: {
    tag: 'WELLNESS & SPA',
    h1: 'Fill Every Treatment Room, Every Day',
    subheadline: 'Automated wellness promotions, class bookings, and membership renewals delivered directly to your guests via WhatsApp.',
  },
  painPoint: 'Your spa has availability midweek but guests do not know about it. Membership renewals slip through the cracks. You are relying on in-room flyers that guests never read.',
  solutions: [
    { title: 'In-Stay Spa Promotions', description: 'WhatsApp sent on check-in day with available treatments and one-tap booking.' },
    { title: 'Membership Renewals', description: 'Automated reminders before expiry with renewal link.' },
    { title: 'Class & Session Booking', description: 'Guests receive the weekly wellness schedule and book directly via WhatsApp.' },
    { title: 'Post-Visit Feedback', description: 'Collect spa satisfaction scores and route to reviews or recovery.' }
  ],
  whatsappSection: {
    reverse: true,
    context: 'Check-in day spa upsell',
    h2: 'Every Guest Knows About Your Spa Before They Unpack',
    body: 'The moment a guest checks in, they receive a curated wellness menu based on their preferences. No front desk pitch needed.',
    messages: [
      { sender: 'Hotel', text: "Welcome! Our Wellness Club has openings today. How about a 60-minute deep tissue massage at 3 PM? We also have sunset yoga at 5:30 PM." },
      { sender: 'Guest', text: "The massage sounds great" },
      { sender: 'Hotel', text: "Booked! 3 PM deep tissue massage. Please arrive 15 minutes early. Enjoy your stay." }
    ]
  },
  useCases: [
    { title: 'Check-In Wellness Offer', trigger: 'Guest checks in', action: 'WhatsApp with today\'s available spa slots.' },
    { title: 'Membership Expiry Reminder', trigger: '14 days before expiry', action: 'WhatsApp with renewal link and a limited-time offer.' },
    { title: 'Seasonal Wellness Package', trigger: 'Campaign launch', action: 'Broadcast to wellness segment (detox January, summer body, Ramadan wellness).' },
    { title: 'Post-Treatment Review', trigger: '2 hours after treatment', action: 'WhatsApp feedback request.' },
    { title: 'Repeat Guest Spa Offer', trigger: 'Returning guest check-in', action: 'Personalized WhatsApp with their preferred treatment pre-booked.' }
  ],
  results: [
    { value: '2.4x', label: 'increase in midweek spa bookings', icon: 'calendar' },
    { value: '67%', label: 'membership renewal rate via WhatsApp', icon: 'refresh/cycle' },
    { value: '92%', label: 'message open rate', icon: 'eye/open envelope' }
  ]
};

export const weddingsData = {
  theme: { layout: 'elegant-split', animation: 'slow-reveal' },
  meta: {
    title: 'Wedding & Event Marketing Automation for Hotels | Total Engage',
    description: 'Capture more wedding inquiries, automate event follow-ups, and drive special occasion bookings for hotels in MENA with WhatsApp marketing.',
  },
  hero: {
    tag: 'WEDDINGS & SPECIAL OCCASIONS',
    reverse: true,
    h1: 'Capture Every Wedding Inquiry. Celebrate Every Milestone.',
    subheadline: 'From first inquiry to the big day and beyond — automate your entire wedding and special occasions pipeline through WhatsApp and social media.',
  },
  painPoint: 'Wedding inquiries come in through Instagram DMs, WhatsApp, email, and your website. Half of them get a late reply. Anniversary and birthday guests are never recognized. You are missing the most emotional — and profitable — bookings in hospitality.',
  solutions: [
    { title: 'Instant Inquiry Response', description: 'Every wedding lead from any channel gets an immediate, personalized reply with venue details and availability.' },
    { title: 'Automated Venue Showcases', description: 'Nurture leads with automated WhatsApp galleries of your ballrooms, testimonials, and detailed wedding brochures.' },
    { title: 'Guest RSVP & Concierge', description: 'Automatically manage guest lists, collect RSVPs, and share dietary preferences with your team via WhatsApp.' },
    { title: 'Proposal & Celebration Packages', description: 'Automated upsell for romantic packages, surprises, and milestone celebrations.' }
  ],
  whatsappSection: {
    context: 'Wedding inquiry instant response',
    h2: 'Reply to Wedding Inquiries in Seconds, Not Days',
    body: 'A couple sends a WhatsApp message asking about wedding venues. They get an instant, personalized response with packages, a virtual tour link, and available dates. No human needed for the first touch.',
    messages: [
      { sender: 'Guest', text: "Hi, we're looking at wedding venues for November 2026. Do you have availability for around 200 guests?" },
      { sender: 'Hotel', text: "Congratulations on your upcoming wedding! We would love to host your special day. We have two stunning venues available in November. Here is a link to our virtual tour. Would you like to schedule a site visit?" },
      { sender: 'Guest', text: "The Grand Ballroom looks perfect. Can we visit this Saturday?" },
      { sender: 'Hotel', text: "Absolutely! I have booked a site visit for you this Saturday at 11 AM with our Events Manager. See you then!" }
    ]
  },
  useCases: [
    { title: 'Instant Wedding Lead Response', trigger: 'Inquiry via any channel', action: 'Immediate WhatsApp reply with venue info and CTA.' },
    { title: 'Lead Nurture Sequence', trigger: '3 days after initial inquiry', action: 'WhatsApp follow-up with testimonials and package comparisons.' },
    { title: 'Anniversary Outreach', trigger: 'Guest wedding anniversary', action: 'WhatsApp with romantic dinner or suite upgrade offer.' },
    { title: 'Birthday Campaign', trigger: '7 days before guest birthday', action: 'WhatsApp with birthday celebration package.' },
    { title: 'Corporate Events / MICE', trigger: 'Corporate inquiry tag', action: 'Dedicated response with meeting room specs, AV setup, and F&B menus.' },
    { title: 'Post-Event Follow-Up', trigger: '1 day after event', action: 'Thank you message with feedback link and photo gallery.' }
  ],
  results: [
    { value: '5x', label: 'faster response to wedding inquiries', icon: 'lightning bolt' },
    { value: '35%', label: 'increase in wedding bookings', icon: 'upward arrow' },
    { value: '91%', label: 'open rate on anniversary campaigns', icon: 'heart' }
  ]
};

export const kidsClubData = {
  theme: { layout: 'playful-stack', animation: 'bouncy-pop' },
  meta: {
    title: 'Hotel Kids Club & Birthday Party Hosting Automation | Total Engage',
    description: 'Maximize kids club revenue by automating birthday party inquiries, package upselling, and family celebrations through WhatsApp.',
  },
  hero: {
    tag: 'KIDS CLUB & CELEBRATIONS',
    h1: 'The Easiest Way to Host Unforgettable Birthdays',
    subheadline: 'From the first inquiry to the final candle—automate your birthday party bookings, package upselling, and parent communications via WhatsApp.',
  },
  painPoint: 'Your kids club is a revenue goldmine, but birthday inquiries slip through the cracks of busy front desks. Parents want instant quotes and easy booking, not waiting days for an email. You are missing out on high-margin celebration revenue.',
  solutions: [
    { title: '24/7 Birthday Inquiry Bot', description: 'Immediate WhatsApp responses to party inquiries with automated package availability and pricing.' },
    { title: 'Interactive Party Menus', description: 'Let parents browse themes, cake options, and catering menus directly on WhatsApp with one-tap selection.' },
    { title: 'Automated Deposits', description: 'Secure party dates with automated deposit links and instant confirmation messages.' },
    { title: 'Post-Party Memory Sharing', description: 'Automatically send a thank-you note with a photo gallery link and a discount for their next celebration.' }
  ],
  whatsappSection: {
    context: 'Birthday Party Inquiry',
    h2: 'Confirm a Full Birthday Party in Under 3 Minutes',
    body: 'A parent asks about a birthday party for 15 kids. Instead of waiting for a callback, they get an instant menu of packages, pick a theme, and pay the deposit—all without your team lifting a finger.',
    messages: [
      { sender: 'Guest', text: "Do you have any availability for a 5th birthday party on Saturday, June 14th? Looking for about 20 kids." },
      { sender: 'Hotel', text: "We do! 🎂 Our 'Superhero Adventure' and 'Jungle Explorer' themes are available for that date. Would you like to see our all-inclusive party packages?" },
      { sender: 'Guest', text: "Yes, the Superhero one please!" },
      { sender: 'Hotel', text: "Great choice! 🦸‍♂️ Here's the package: includes 2h private room, cake, gifts, and a kids buffet for 20. Would you like to secure the date with a 20% deposit?" }
    ]
  },
  useCases: [
    { title: 'Instant Party Inquiry', trigger: 'Inquiry via WhatsApp/Web', action: 'Immediate reply with birthday brochures and availability.' },
    { title: 'Package Upsell Nudge', trigger: 'Party booked', action: 'WhatsApp 7 days before party with "Pro Photographer" or "Mascot Visit" add-ons.' },
    { title: 'Dietary Requirement Check', trigger: '3 days before party', action: 'Automated WhatsApp to host parent asking for guest allergy list.' },
    { title: 'School Holiday Campaign', trigger: '4 weeks before holidays', action: 'WhatsApp to past birthday guest families with holiday camp offers.' },
    { title: 'Anniversary Celebration', trigger: '1 year after party', action: 'WhatsApp: "Time flies! Leo is turning 6 soon—want to see our new party themes?"' }
  ],
  results: [
    { value: '3.5x', label: 'increase in birthday party leads', icon: 'celebration' },
    { value: '82%', label: 'deposit conversion on WhatsApp', icon: 'credit-card' },
    { value: '96%', label: 'parent satisfaction with party booking', icon: 'star' }
  ]
};

export const roomsSuitesData = {
  theme: { layout: 'classic-cards', animation: 'sharp-slide' },
  meta: {
    title: 'Hotel Room Revenue & Experience Upsell Automation | Total Engage',
    description: 'Drive more room bookings and high-value stay experiences with automated WhatsApp upsells for honeymoons, anniversaries, and extended stays.',
  },
  hero: {
    tag: 'ROOMS, SUITES & EXPERIENCES',
    h1: 'Turn a Stay into a Lifetime Memory',
    subheadline: 'Automate high-value upsells for honeymoons, anniversaries, and premium suite upgrades—delivered directly via WhatsApp when guests are most excited.',
  },
  painPoint: 'Guests book standard rooms online and the conversation often ends there. You are missing out on the most profitable revenue streams in hospitality—milestone celebrations and premium experiences—because your team cannot reach every guest with a personalized offer.',
  solutions: [
    { title: 'Automated Milestone Concierge', description: 'Detect keywords like "honeymoon" or "anniversary" in bookings and automatically send a curated list of romantic packages.' },
    { title: 'One-Tap Suite Upgrades', description: 'Offer available suites 48 hours before arrival. Capture revenue from high-value inventory that would otherwise go unsold.' },
    { title: 'Long-Stay Incentives', description: 'Automatically identify guests staying 3+ nights and offer them an exclusive "Extended Bliss" package or late check-out.' },
    { title: 'Milestone Recall Booking', description: 'A year later, automatically invite guests back with a "Celebrate Again" offer tailored to their previous stay.' }
  ],
  whatsappSection: {
    context: 'Honeymoon Package Upsell',
    h2: 'Upgrading the Experience Before They Even Pack',
    body: 'A guest mentions they are celebrate their honeymoon in a booking note. They get an instant, personalized WhatsApp with a curated "Honeymoon Bliss" package—champagne, rose petal turndown, and a private dinner—capturing extra revenue instantly.',
    messages: [
      { sender: 'Hotel', text: "Congratulations on your upcoming honeymoon! 🥂 To make your stay extra special, we've curated a 'Honeymoon Bliss' package for you. Would you like to see the details?" },
      { sender: 'Guest', text: "Yes please!" },
      { sender: 'Hotel', text: "Our package includes a chilled bottle of champagne, rose petal turndown service, and a private sunset dinner for two. We can add this to your stay for just $120. Shall I confirm?" },
      { sender: 'Guest', text: "That sounds perfect, please add it!" }
    ]
  },
  useCases: [
    { title: 'Milestone Detection & Upsell', trigger: 'Keyword match: "Honeymoon"', action: 'Automated WhatsApp with romantic celebration packages.' },
    { title: '48h Pre-Arrival Suite Upgrade', trigger: '2 days before check-in', action: 'WhatsApp with exclusive availability alerts for premium suites.' },
    { title: 'extended Stay Offer', trigger: 'Booking duration > 3 nights', action: 'WhatsApp with complimentary spa credit or resort-wide discounts.' },
    { title: 'Anniversary Return Campaign', trigger: '11 months after stay', action: 'WhatsApp recalling their milestone and offering a return discount.' },
    { title: 'Last-Room Urgency Push', trigger: 'High occupancy detected', action: 'WhatsApp broadcast to past guests with exclusive rates on the final available rooms.' }
  ],
  results: [
    { value: '31%', label: 'upsell conversion on milestone stays', icon: 'heart' },
    { value: '2.8x', label: 'higher ROI on pre-arrival suite offers', icon: 'upward arrow' },
    { value: '91%', label: 'guest satisfaction with personalized offers', icon: 'star' }
  ]
};

export const loyaltyRetentionData = {
  theme: { layout: 'timeline', animation: 'sequential-grow' },
  meta: {
    title: 'Hotel Guest Retention & Loyalty CRM Automation | Total Engage',
    description: 'Turn one-time visitors into lifelong guests with CRM segmentation, automated WhatsApp campaigns, and personalized loyalty engagement for MENA hotels.',
  },
  hero: {
    tag: 'LOYALTY & RETENTION',
    reverse: true,
    h1: 'Turn Every Guest Into a Regular',
    subheadline: 'Segment your guest database, trigger personalized campaigns, and build lasting relationships — all automated through WhatsApp.',
  },
  painPoint: 'You have thousands of past guests in your database but no way to reach them meaningfully. Generic email blasts get ignored. Your best guests are not recognized when they return. One-time visitors never come back because no one invited them.',
  solutions: [
    { title: 'CRM Segmentation & Tagging', description: 'Auto-tag guests by stay history, spend level, preferences, nationality, and occasion.' },
    { title: 'Automated Re-Engagement', description: 'Lapsed guests get a WhatsApp campaign after 90 days with a personalized offer to return.' },
    { title: 'VIP Recognition', description: 'Repeat and high-spend guests are flagged automatically. Staff are alerted. Special welcome messages are sent.' },
    { title: 'Campaign ROI Tracking', description: 'Track every WhatsApp campaign from send to booking, with revenue attribution.' }
  ],
  whatsappSection: {
    context: 'Lapsed guest re-engagement',
    h2: 'Bring Guests Back Without Lifting a Finger',
    body: 'A guest who stayed 6 months ago and loved your hotel gets a personalized WhatsApp with a seasonal offer. Their name, their favorite room type, their preferred dates — all pulled from the CRM automatically.',
    messages: [
      { sender: 'Hotel', text: "Hi! It has been a while since your last visit and we miss you! This Eid, we have a special rate on our Deluxe Sea View rooms. Book before March 20 and enjoy complimentary breakfast. Interested?" },
      { sender: 'Guest', text: "Send me the details!" },
      { sender: 'Hotel', text: "Here you go: [booking link]. Your preferred dates and room type are pre-selected. Let me know if you need anything else." }
    ]
  },
  useCases: [
    { title: '90-Day Lapsed Guest Campaign', trigger: 'No booking in 90 days', action: 'WhatsApp with personalized return offer.' },
    { title: 'VIP Welcome Alert', trigger: 'VIP-tagged guest checks in', action: 'Notify GM + send premium welcome WhatsApp.' },
    { title: 'Birthday Loyalty Offer', trigger: '7 days before birthday', action: 'WhatsApp with birthday stay/dinner package.' },
    { title: 'Post-Stay NPS Collection', trigger: '24 hours after checkout', action: 'WhatsApp with 1-question satisfaction score.' },
    { title: 'Seasonal Broadcast to Segments', trigger: 'Manual campaign', action: 'Targeted WhatsApp to specific segments (families, couples, business travelers).' },
    { title: 'Refer-a-Friend Campaign', trigger: 'Guest rated 5 stars', action: 'WhatsApp with referral code and incentive.' }
  ],
  results: [
    { value: '34%', label: 'repeat booking rate', icon: 'refresh/cycle' },
    { value: '1,270+', label: 'guests re-engaged per campaign', icon: 'people' },
    { value: '4.1x', label: 'ROI on retention campaigns', icon: 'chart' }
  ]
};

export const reviewsReputationData = {
  theme: { layout: 'dashboard-grid', animation: 'zoom-in' },
  meta: {
    title: 'Hotel Review Management & AI-Powered Reputation Platform | Total Engage',
    description: 'Drive more 5-star reviews, eliminate negative feedback, and reply to Google, TripAdvisor, and Booking.com reviews instantly with AI. Built for MENA hotels.',
  },
  hero: {
    tag: 'REVIEWS & REPUTATION',
    h1: 'Drive More Five-Star Reviews. Eliminate Negative Ones.',
    subheadline: 'Automate review collection, route happy guests to Google, intercept unhappy guests privately, and reply to every review with AI — across every platform.',
  },
  painPoint: 'Bad reviews happen in public. Recovery happens too late. Your team cannot monitor Google, TripAdvisor, and Booking.com around the clock. Meanwhile, happy guests leave without ever being asked to share their experience.',
  solutions: [
    { title: 'Smart Review Routing', description: 'Happy guests are directed to Google Reviews. Unhappy guests enter a private recovery flow. No more public complaints.' },
    { title: 'AI-Powered Review Replies', description: 'Every review on Google, TripAdvisor, and Booking.com gets a thoughtful, instant AI-generated reply.' },
    { title: 'Automated Post-Stay Requests', description: 'WhatsApp sent after checkout asking guests to rate their experience.' },
    { title: 'Sentiment Dashboard', description: 'AI-powered summary of overall guest sentiment, trends, and actionable insights across all properties.' }
  ],
  whatsappSection: {
    context: 'Post-stay smart routing',
    h2: 'The Review That Never Goes Public',
    body: 'After checkout, guests receive a simple satisfaction question. If they are happy, they are directed to Google Reviews with a one-tap link. If they are not, they enter a private feedback form where your team can resolve the issue before it ever becomes a public review.',
    messages: [
      { sender: 'Hotel', text: "Thank you for staying with us! How was your experience? Rate us from 1 to 5." },
      { sender: 'Guest', text: "2" },
      { sender: 'Hotel', text: "We are sorry to hear that. We want to make it right. Could you share what happened? Your feedback goes directly to our Guest Relations Manager." }
    ]
  },
  useCases: [
    { title: 'Post-Checkout Review Request', trigger: 'Guest checks out', action: 'WhatsApp asking for a 1–5 rating.' },
    { title: '5-Star Google Redirect', trigger: 'Rating 4 or 5', action: 'WhatsApp with Google Reviews direct link.' },
    { title: 'Low Score Private Recovery', trigger: 'Rating 1–3', action: 'WhatsApp with private feedback form + alert to Guest Relations.' },
    { title: 'AI Review Reply — Google', trigger: 'New Google review detected', action: 'AI drafts and posts a reply within minutes.' },
    { title: 'AI Review Reply — TripAdvisor', trigger: 'New review on Booking/TripAdvisor', action: 'AI drafts and posts a reply immediately.' },
    { title: 'Monthly Sentiment Report', trigger: '1st of month', action: 'AI-generated sentiment summary emailed to GM.' }
  ],
  results: [
    { value: '+0.4', label: 'average Google rating uplift', icon: 'star' },
    { value: '96%', label: 'review response rate with AI', icon: 'reply/chat bubble' },
    { value: '73%', label: 'negative review interception rate', icon: 'shield' }
  ]
};
