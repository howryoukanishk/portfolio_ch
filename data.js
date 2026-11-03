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
  heroImage: "assets/hero.webp",

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
   sections= case-study sections (optional): { h, p, list, kv, table, cards, note, quote }.
   caseStudy = link to a full case-study PDF (optional).
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
    x: 4, y: 12,
  },
  {
    title: "The Dwell Construction",
    year: "17–24 Aug 2026",
    type: "Meta Ads · Lead Generation",
    stack: "Meta Ads Manager · Instant Forms · WhatsApp",
    role: "End-to-end campaign execution",
    caseStudy: "assets/Dwell_Construction_Case_Study.pdf",
    description: "A real client lead-generation campaign on Facebook and Instagram for an interior design and construction firm in Delhi NCR and Meerut. I planned, built, launched and monitored it end to end: audience, budget, creatives, copy, conversion paths and lead-quality review.",
    stats: [
      { value: "31", label: "Form leads", sub: "₹66.19 per lead · Terrace Garden" },
      { value: "38", label: "WhatsApp conversations", sub: "₹35.21 each · Interior Design" },
      { value: "8–10", label: "Quotations issued", sub: "by the client to campaign prospects" },
      { value: "₹3,389.80", label: "Total spend", sub: "₹500/day over 8 days" },
    ],
    sections: [
      {
        h: "Overview",
        kv: [
          ["Client", "Dwell Construction"],
          ["Industry", "Interior Design & Construction"],
          ["Platform", "Facebook & Instagram"],
          ["Objective", "Leads"],
          ["Daily budget", "₹500"],
        ],
        p: "Dwell Construction designs and builds terrace gardens, homes, interiors and commercial spaces. This campaign put Terrace Garden first, followed by Interior Design.",
      },
      {
        h: "Audience",
        kv: [
          ["Location", "Delhi NCR + Meerut"],
          ["Age", "25–60"],
          ["Gender", "All"],
          ["Placement", "Advantage+"],
        ],
        p: "Delhi NCR is the client's main service area, and Meerut was added at their request. The 25–60 range targets people at a stage of life where renovation and interiors are relevant. I kept gender broad because there was no strong reason to exclude anyone at launch.",
      },
      {
        h: "Campaign structure",
        cards: [
          { title: "Terrace Garden", tag: "₹300/day · Primary", text: "Conversion: Instant Form", list: ["Desire", "Hook", "Testimonial"] },
          { title: "Interior Design", tag: "₹200/day · Secondary", text: "Conversion: WhatsApp", list: ["Before_its_built", "Makeover"] },
        ],
        p: "Two ad sets with their own budgets. This let me spend by business priority, judge each service on its own, use a different conversion path for each, and compare creatives within each service instead of treating two customer journeys as one.",
      },
      {
        h: "Creative strategy",
        table: {
          head: ["Creative", "Idea", "Funnel role"],
          rows: [
            ["Desire", "An ordinary terrace next to what it could become, so viewers picture their own space.", "Desire → Consideration → Lead"],
            ["Hook", "A project and process angle that builds toward the reveal.", "Attention → Interest → Lead"],
            ["Testimonial", "A real customer from a finished terrace garden, for social proof.", "Trust → Consideration → Lead"],
            ["Before_its_built", "A rendered interior video to show the finished result.", "Visualisation → Interest → Conversation"],
            ["Makeover", "The transformation of a home through interior design.", "Transformation → Interest → Conversation"],
          ],
        },
      },
      {
        h: "Conversion strategy",
        list: [
          "Terrace Garden used a Meta Instant Form asking for name, phone, project location, budget and timeline, with OTP verification to filter out low-intent submissions.",
          "Interior Design used WhatsApp so prospects could describe their requirements directly, with less friction.",
        ],
      },
      {
        h: "What I did",
        list: [
          "Set up the Meta ad account environment and got partner access.",
          "Built the campaign and ad-set structure, defined the audience and split the budget.",
          "Wrote and finalised the ad copy, using AI for brainstorming.",
          "Matched creatives to ad sets and chose the conversion locations.",
          "Built the Instant Form with qualifying questions and OTP verification.",
          "Launched and monitored the campaign, then reviewed lead quality with the client.",
          "Edited the client's raw Terrace Garden footage for ads.",
        ],
      },
      {
        h: "Launch and a forced change",
        p: [
          "The campaign brought in 4 leads on day 1 and 6 more on day 2. Desire quickly became the strongest Terrace Garden creative, while Before_its_built was driving WhatsApp conversations.",
          "After four days the client asked to remove Desire because of a third-party ownership concern about the project shown in the video. It was removed despite performing well. Since the campaign was still in its learning phase, I avoided making other changes at the same time and let the remaining ads run. The Testimonial creative then started producing leads.",
        ],
      },
      {
        h: "Results",
        kv: [
          ["Spend", "₹3,389.80"],
          ["Reach", "19,384"],
          ["Impressions", "25,520"],
          ["Frequency", "1.32"],
        ],
        table: {
          head: ["Service", "Conversion", "Result", "Cost"],
          rows: [
            ["Terrace Garden", "Instant Form", "31 form leads", "₹66.19 / lead"],
            ["Interior Design", "WhatsApp", "38 conversations", "₹35.21 / conversation"],
          ],
        },
        note: "Form leads and WhatsApp conversations are different actions, so I don't add them up into one \"69 leads\" figure. My scope was lead generation and qualification, not sales. The client issued about 8–10 quotations to campaign prospects; closed sales and revenue weren't tracked, so I don't claim them.",
      },
      {
        h: "What it showed",
        list: [
          "Creative angle matters: Desire drove the early response, and Testimonial carried on after it was removed.",
          "Match the conversion path to the service: forms for structured qualification, WhatsApp for direct conversation.",
          "Performance isn't the only constraint. Sometimes the best ad is one you're not allowed to keep running.",
          "Avoid unnecessary changes during the learning phase.",
        ],
      },
      {
        h: "What I'd test next",
        list: [
          "More variations on the strongest creative angles, and more testimonial creatives.",
          "More real-project footage instead of renders, and different hooks around the same offer.",
          "Instant Form against WhatsApp for the same service.",
          "Tracking from lead to qualified lead to quotation to customer, and optimising on cost per qualified lead.",
        ],
      },
      {
        quote: "Performance marketing is not simply about launching ads and watching metrics. It involves making structured decisions around audience, budget, creative, conversion paths and lead quality, while adapting to real-world business constraints.",
      },
    ],
    thumb: "linear-gradient(135deg,#ff6a2b,#d63a12)",
    x: 64, y: 10,
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
    x: 83, y: 14,
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
    x: 4, y: 62,
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
    x: 64, y: 68,
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
    x: 83, y: 68,
  },
];
