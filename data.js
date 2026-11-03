/* =========================================================
   EDIT THIS FILE — all your personal content lives here.
   ========================================================= */

const SITE = {
  name: "Your Name",
  role: "Designer & Developer",
  location: "City, Country",
  email: "you@example.com",
  bio: "I build things for the web — interfaces, tools and visual experiments. Replace this with a couple of sentences about who you are and what you love making.",

  // Optional: put a photo in /assets (e.g. assets/hero.jpg) and set the path.
  // It's shown full-screen in grayscale. Leave "" to show your name instead.
  heroImage: "",

  // Optional avatar for the dock's "About" icon (e.g. "assets/me.jpg").
  avatar: "",

  skills: ["JavaScript", "React", "Node.js", "Figma", "UI Design", "Python"],

  experience: [
    { when: "2024 — now", what: "Role · Company" },
    { when: "2022 — 2024", what: "Role · Company" },
    { when: "2018 — 2022", what: "Degree · University" },
  ],

  // Dock links. icon: github | linkedin | x | instagram | behance | dribbble | mail
  socials: [
    { label: "GitHub",   icon: "github",   url: "https://github.com/" },
    { label: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/" },
    { label: "X",        icon: "x",        url: "https://x.com/" },
    { label: "Email",    icon: "mail",     url: "mailto:you@example.com" },
  ],
};

/* Projects show up as folders on the desktop.
   x / y = position on the desktop in % of the screen (desktop only).
   thumb  = an image path ("assets/p1.jpg") or any CSS background (gradient).
   images = pictures shown inside the window (paths or CSS gradients). */
const PROJECTS = [
  {
    title: "Project One",
    year: "2025",
    type: "Web App",
    stack: "React · Node",
    link: "https://example.com",
    description: "A short description of the project: what it is, the problem it solves and what you did. Two or three sentences is plenty.",
    thumb: "linear-gradient(135deg,#ff6a2b,#d63a12)",
    images: ["linear-gradient(135deg,#ff6a2b,#7a1d06)"],
    x: 12, y: 14,
  },
  {
    title: "Project Two",
    year: "2025",
    type: "Brand / Identity",
    stack: "Figma",
    link: "",
    description: "Describe the second project here. Mention the outcome — users, numbers, awards or anything that shows impact.",
    thumb: "linear-gradient(135deg,#f4f4f4,#cfcfcf)",
    images: ["linear-gradient(160deg,#fafafa,#9a9a9a)"],
    x: 68, y: 10,
  },
  {
    title: "Project Three",
    year: "2024",
    type: "Mobile App",
    stack: "Swift",
    link: "",
    description: "Describe the third project here.",
    thumb: "linear-gradient(135deg,#8d8d8d,#4b4b4b)",
    images: ["linear-gradient(135deg,#777,#222)"],
    x: 14, y: 60,
  },
  {
    title: "Project Four",
    year: "2024",
    type: "Experiment",
    stack: "Three.js",
    link: "",
    description: "Describe the fourth project here.",
    thumb: "linear-gradient(135deg,#ff2e4d,#8a0016)",
    images: ["linear-gradient(135deg,#ff2e4d,#30000a)"],
    x: 42, y: 66,
  },
  {
    title: "Project Five",
    year: "2023",
    type: "Open Source",
    stack: "TypeScript",
    link: "",
    description: "Describe the fifth project here.",
    thumb: "linear-gradient(135deg,#4e8cff,#1b3fa6)",
    images: ["linear-gradient(135deg,#4e8cff,#0b1a4a)"],
    x: 84, y: 22,
  },
  {
    title: "Project Six",
    year: "2023",
    type: "Website",
    stack: "Next.js",
    link: "",
    description: "Describe the sixth project here.",
    thumb: "linear-gradient(135deg,#3fa45b,#0f3d1d)",
    images: ["linear-gradient(135deg,#3fa45b,#06210f)"],
    x: 74, y: 60,
  },
];
