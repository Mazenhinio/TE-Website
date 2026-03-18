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
    title: 'Hotel Kids Club Marketing & Family Guest Engagement | Total Engage',
    description: 'Engage family guests with automated kids club activity updates, WhatsApp notifications for parents, and family-focused hotel marketing.',
  },
  hero: {
    tag: 'KIDS CLUB',
    h1: 'Happy Kids. Relaxed Parents. Repeat Bookings.',
    subheadline: 'Keep parents informed and kids entertained with automated activity updates, session bookings, and family-focused promotions via WhatsApp.',
  },
  painPoint: 'Parents want to know their kids are having fun — but your kids club communication is limited to a poster in the elevator. Families are your highest-value repeat guests, and you are not engaging them.',
  solutions: [
    { title: 'Daily Activity Alerts', description: 'Automated WhatsApp to parents with today\'s kids club schedule and open slots.' },
    { title: 'Pre-Arrival Family Welcome', description: 'Families tagged in CRM receive a personalized message before arrival with kids club highlights.' },
    { title: 'Session Booking', description: 'Parents book specific activities directly via WhatsApp reply.' },
    { title: 'Post-Stay Family Follow-Up', description: 'Targeted re-engagement campaigns for family segments with school holiday offers.' }
  ],
  whatsappSection: {
    context: 'Day-of activity schedule',
    h2: 'Parents Know Exactly What Their Kids Are Doing Today',
    body: 'Every morning, families with children receive the day\'s kids club schedule on WhatsApp. One tap to register. Parents relax. Kids play.',
    messages: [
      { sender: 'Hotel', text: "Good morning! Here is what is happening at the Kids Club today: 10 AM — Arts & Crafts, 11:30 AM — Pool Games, 2 PM — Movie Time, 4 PM — Treasure Hunt. Would you like to sign up your little ones for any of these?" },
      { sender: 'Guest', text: "Pool games and treasure hunt please!" },
      { sender: 'Hotel', text: "Done! Sarah and Adam are registered for Pool Games at 11:30 AM and Treasure Hunt at 4 PM. Have a relaxing day!" }
    ]
  },
  useCases: [
    { title: 'Check-In Family Welcome', trigger: 'Family tag + check-in', action: 'WhatsApp with kids club overview and today\'s schedule.' },
    { title: 'Daily Schedule Push', trigger: 'Every morning 8 AM', action: 'WhatsApp to all in-house families with the day\'s activities.' },
    { title: 'Summer Camp Promotion', trigger: 'Campaign launch', action: 'Broadcast to family segment with summer program details.' },
    { title: 'School Holiday Campaign', trigger: '4 weeks before school holidays', action: 'WhatsApp to past family guests with holiday packages.' },
    { title: 'Post-Stay Family Re-Engagement', trigger: '60 days after checkout', action: 'WhatsApp inviting them back with family package.' }
  ],
  results: [
    { value: '78%', label: 'kids club participation from WhatsApp', icon: 'children/people' },
    { value: '2.1x', label: 'higher repeat booking rate for families', icon: 'refresh/cycle' },
    { value: '94%', label: 'parent satisfaction with activity updates', icon: 'star' }
  ]
};

export const roomsSuitesData = {
  theme: { layout: 'classic-cards', animation: 'sharp-slide' },
  meta: {
    title: 'Hotel Room Upsell & Pre-Arrival Marketing Automation | Total Engage',
    description: 'Maximize room revenue with automated WhatsApp upsells, pre-arrival messaging, and post-stay re-booking campaigns for hotels in MENA.',
  },
  hero: {
    tag: 'ROOMS & SUITES',
    h1: 'Maximize Revenue From Every Room, Every Night',
    subheadline: 'Automated room upgrades, pre-arrival preference collection, and post-stay rebooking — all delivered through WhatsApp before guests even arrive.',
  },
  painPoint: 'Guests book standard rooms online. By the time they arrive, it is too late to upsell. You are leaving upgrade revenue, early check-in fees, and rebooking opportunities on the table because your team cannot reach every guest manually.',
  solutions: [
    { title: 'Pre-Arrival Upsell', description: 'Automated WhatsApp offer to upgrade to a suite or add packages before arrival.' },
    { title: 'Preference Collection', description: 'Guests share room preferences (pillow type, minibar, floor) via WhatsApp before check-in.' },
    { title: 'In-Stay Satisfaction Check', description: 'Mid-stay WhatsApp asking if everything is perfect — catch issues before they become bad reviews.' },
    { title: 'Post-Stay Re-Booking', description: 'Automated re-engagement with seasonal offers and loyalty incentives.' }
  ],
  whatsappSection: {
    context: 'Pre-arrival upgrade offer',
    h2: 'Sell the Suite Before They Arrive',
    body: '48 hours before arrival, guests receive a personalized WhatsApp with an upgrade offer. One reply to confirm. Revenue captured while the guest is still excited about their trip.',
    messages: [
      { sender: 'Hotel', text: "Hi, we are looking forward to welcoming you on Friday! We have a special offer: upgrade to our Ocean View Suite for just a little more. Would you like to upgrade?" },
      { sender: 'Guest', text: "How much more?" },
      { sender: 'Hotel', text: "Just $45 per night more than your current booking. Shall I upgrade you?" },
      { sender: 'Guest', text: "Yes please!" },
      { sender: 'Hotel', text: "Upgraded! Your Ocean View Suite is confirmed. See you Friday." }
    ]
  },
  useCases: [
    { title: '48-Hour Pre-Arrival Upsell', trigger: '2 days before check-in', action: 'WhatsApp with available upgrade and price.' },
    { title: 'Room Preference Collection', trigger: '3 days before check-in', action: 'WhatsApp asking for pillow, minibar, and special request preferences.' },
    { title: 'Early Check-In Offer', trigger: 'Day before arrival', action: 'WhatsApp offering early check-in for a fee.' },
    { title: 'Mid-Stay Satisfaction Check', trigger: 'Day 2 of stay', action: 'WhatsApp asking if everything is good, with quick-reply options.' },
    { title: 'No-Show Prevention', trigger: 'Day of check-in, 6 PM', action: 'WhatsApp confirmation they are still coming.' },
    { title: 'Post-Checkout Re-Booking', trigger: '30 days after checkout', action: 'WhatsApp with seasonal offer and direct booking link.' }
  ],
  results: [
    { value: '22%', label: 'upgrade conversion rate via WhatsApp', icon: 'upward arrow' },
    { value: '40%', label: 'reduction in no-shows', icon: 'downward arrow' },
    { value: '3.5x', label: 'ROI on pre-arrival campaigns', icon: 'chart' }
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
