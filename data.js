/* =========================================================
   EDIT THIS FILE — all personal content lives here.
   ========================================================= */

const SITE = {
  name: "Chhavi Kant",
  role: "Performance Marketer",
  location: "Ghaziabad, India",
  email: "chhavikant.edu@gmail.com",
  bio: "Performance Marketing Executive with hands-on experience in Meta Ads, Google Ads, SEO, social media and WordPress. I run lead-generation campaigns with a cost-per-lead focused, data-driven approach — from audience targeting and creatives to landing pages, WhatsApp lead campaigns, budget control and lead-to-sale tracking. M.Com graduate, DIDM Noida certified.",

  // Put a photo in /assets (e.g. assets/hero.jpg) and set the path.
  // Shown full-screen in grayscale. Leave "" to show the name instead.
  heroImage: "",

  // Optional avatar for the dock's "About" icon (e.g. "assets/me.jpg").
  avatar: "",

  resume: "assets/Chhavi_Kant_Resume.pdf",

  skills: [
    "Meta Ads", "Google Ads", "SEO", "Local SEO", "Lead Generation", "WhatsApp Lead Campaigns",
    "A/B Creative Testing", "Social Media", "WordPress", "Canva", "SEMrush", "Rank Math",
    "Google Business Profile", "CapCut", "Mailchimp", "MS Excel", "ChatGPT", "Claude AI",
  ],

  experience: [
    { when: "Aug 2026 — now", what: "Performance Marketing Executive · JSN Renewable Energy Pvt. Ltd." },
    { when: "2 months", what: "On-the-Job Training, Digital Marketing · Hostinger, Bolbala, Online Strikers" },
    { when: "2019 — Mar 2026", what: "Admin & Data, E-Commerce and Accounts Executive roles · Ghaziabad" },
  ],

  education: [
    { when: "Diploma", what: "Professional Diploma in Digital Marketing · DIDM, Noida" },
    { when: "Workshop", what: "AI Tools Workshop · be10x" },
    { when: "2017 — 2019", what: "M.Com · MMH College, Ghaziabad" },
    { when: "2014 — 2017", what: "B.Com · MMH College, Ghaziabad" },
  ],

  languages: "Hindi · English",

  // Dock links. icon: github | linkedin | x | instagram | behance | dribbble | mail
  socials: [
    { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/chhavikantdigitalmarketing" },
    { label: "Email",    icon: "mail",     url: "mailto:chhavikant.edu@gmail.com" },
  ],
};

/* Projects show up as folders on the desktop.
   x / y   = position on the desktop in % of the screen (desktop only).
   thumb   = image path ("assets/p1.jpg") or any CSS background (gradient).
   stats   = big numbers shown in the window (optional).
   points  = bullet points (optional).
   images  = pictures shown in the window (optional).
   pdf     = a PDF to show inside the window (optional). */
const PROJECTS = [
  {
    title: "Resume",
    year: "2026",
    type: "PDF",
    pdf: "assets/Chhavi_Kant_Resume.pdf",
    description: "My full resume — experience, skills, tools, projects and education.",
    thumb: "repeating-linear-gradient(180deg,#fff 0 7px,#dcdcdc 7px 8px)",
    x: 12, y: 14,
  },
  {
    title: "The Dwell Construction",
    year: "Freelance",
    type: "Meta Ads · Lead Generation",
    stack: "Meta Ads Manager · Canva",
    description: "A paid lead-generation campaign for a construction brand, planned and run end to end on Meta Ads Manager — from audience targeting to ad creative to budget control.",
    stats: [
      { value: "26", label: "Leads" },
      { value: "₹1,939", label: "Total spend" },
      { value: "₹63.79", label: "Cost per lead" },
      { value: "₹31.61", label: "Cost per conversation" },
    ],
    points: [
      "Planned audience targeting, creatives and budget for a lead-generation objective.",
      "Designed the brand's landing page plus ad and social creatives (brochures, posts) in Canva.",
    ],
    thumb: "linear-gradient(135deg,#ff6a2b,#d63a12)",
    x: 68, y: 10,
  },
  {
    title: "JSN Renewable Energy",
    year: "2026 — now",
    type: "Performance Marketing",
    stack: "Meta Ads · WordPress · SEO",
    description: "Running lead-generation for a solar EPC company with residential and commercial projects across Delhi NCR, UP and pan-India.",
    points: [
      "Meta Ads: plan and launch lead-generation campaigns — audience targeting, creatives and budget control — for high-ticket solar installations.",
      "Website & SEO: built and optimised the company website for SEO and lead generation.",
      "Social media: manage the content calendar, posts, reels and stories on Instagram, Facebook and LinkedIn.",
    ],
    thumb: "linear-gradient(135deg,#ffd23f,#f08a00)",
    x: 84, y: 19,
  },
  {
    title: "Google Ads & SEO",
    year: "DIDM Noida",
    type: "Training Project",
    stack: "Google Ads · Keyword Planner · SEMrush",
    description: "Practice Google Ads campaigns and on-page SEO built during the Professional Diploma in Digital Marketing.",
    points: [
      "Keyword selection, ad copy and budget planning for search campaigns.",
      "On-page SEO, keyword research and mapping, and competitor analysis.",
    ],
    thumb: "linear-gradient(135deg,#4e8cff,#1b3fa6)",
    x: 14, y: 60,
  },
  {
    title: "Dance Academy Instagram",
    year: "DIDM Noida",
    type: "Social Media Strategy",
    stack: "Instagram · Canva · Buffer",
    description: "An organic growth strategy for a Classical Dance Academy's Instagram page.",
    points: [
      "Built a content calendar and hashtag strategy.",
      "Wrote an organic growth plan covering posts, reels and stories.",
    ],
    thumb: "radial-gradient(circle at 30% 110%,#fdf497 0%,#fd5949 45%,#d6249f 60%,#285aeb 90%)",
    x: 42, y: 66,
  },
  {
    title: "E-Commerce & Ops",
    year: "2019 — 2026",
    type: "Previous Experience",
    stack: "MS Excel · E-commerce",
    description: "Earlier roles in Ghaziabad that built a base in data, e-commerce and numbers — useful for budget control and lead-to-sale tracking today.",
    points: [
      "E-Commerce Executive — Divya Crystal World (in-house e-commerce).",
      "Administrative & Data Management Executive — Bhavishya International School.",
      "Accounts Executive — Pyramid Tatva & Crystal Destination.",
    ],
    thumb: "linear-gradient(135deg,#3fa45b,#0f3d1d)",
    x: 74, y: 60,
  },
];
