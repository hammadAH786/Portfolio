/**
 * ============================================================
 *  EDIT ME — this is the only file you need to touch to make
 *  this portfolio yours. Replace every placeholder value below
 *  with your real information. Nothing else in the codebase
 *  needs to change for basic content updates.
 * ============================================================
 */

export const profile = {
  name: "Hammad Ahmed",
  photoUrl: "/avt1.png", // ✅ fixed: no "/public", and comma added
  title: "Frontend Developer",
  tagline: " Building Modern , User-Centric & Scalable Web Applications.",
  location: "Lahore, Pakistan",
  email: "hammadahmed4236@gmail.com",
  resumeUrl: "/resume/resume.pdf", // link to a hosted PDF resume
  avatarInitials: "HA", // shown in the hero orb if you don't add a photo
  social: {
    github: "https://github.com/hammadAH786",
    linkedin: "www.linkedin.com/in/hammad-ahmad-66b291199",
  },
};

export const about = {
  paragraphs: [
    "I'm a frontend developer who treats the browser like a material — something you can shape, stretch, and make feel physical. My focus is turning static designs into interfaces with weight, motion, and clarity.",
    "Over the past few years I've worked across small product teams and freelance projects, shipping responsive, accessible interfaces with React, and sweating the details that make a UI feel considered rather than assembled.",
    "When I'm not at the keyboard, I'm usually reverse-engineering interface animations I like, or sketching new layout ideas that probably won't survive contact with a real deadline.",
  ],
  stats: [
    { label: "Years building for the web", value: "1+" },
    { label: "Projects shipped", value: "5+" },
    { label: "Cups of tea, roughly", value: "∞" },
  ],
};

export const skills = [
  { name: "React", level: 90, group: "Frontend" },
  { name: "JavaScript (ES6+)", level: 92, group: "Frontend" },
  { name: "TypeScript", level: 75, group: "Frontend" },
  { name: "CSS / Tailwind", level: 88, group: "Frontend" },
  { name: "HTML5", level: 95, group: "Frontend" },
  { name: "Next.js", level: 70, group: "Frontend" },
  { name: "Node.js", level: 65, group: "Tooling" },
  { name: "Git & GitHub", level: 70, group: "Tooling" },
  { name: "Figma", level: 78, group: "Design" },
  { name: "UI/UX Design", level: 80, group: "Design" },
  { name: "Wordpress", level: 90, group: "E-commerce" },
  { name: "Shopify", level: 80, group: "E-commerce" },
];

export const experience = [
  {
    role: "Frontend Development ",
    org: "SolutionsLoft",
    period: "Nov 2025 - Present",
    description:
      "Built and maintained responsive UI components for client products, collaborated with designers to translate Figma files into pixel-accurate React components, and improved page load performance.",
    tags: ["React", "Tailwind", "Figma"],
  },
  {
    role: "Internship Trainee",
    org: "AverLynx",
    period: "May2025 - July 2025",
    description:
      "Delivered portfolio and small-business websites end-to-end — from initial design concepts to deployment — for a range of independent clients.",
    tags: ["HTML/CSS", "JavaScript", "Vercel"],
  },
  {
    role: "Wordpress Developer",
    org: "Youtube",
    period: "2019 — 2026(Present)",
    description:
      "Designed and maintained WordPress websites, customized themes and plugins, optimized website performance, and managed WooCommerce-based e-commerce solutions.",
    tags: ["Wordpress", "Elementor","WooCommerce","Html/Css","Javascript","PHP","cPanel"],
  },
];

export const projects = [
  {
    title: "Heaven Studio",
    description:
      "A warm, editorial marketing site for an interior design studio — hero, portfolio grid, services, and contact, in a cream-and-terracotta palette.",
    tags: ["React", "tailwindCss", "Vite"],
    image: "ss1.png", // add an image path in /public if you have one, e.g. "/projects/dashboard.png"
    
  },
  {
    title: "Real Estate Agency",
    description:
      "A clean, trust-driven marketing site for a real estate agency — hero, property listings, services, and contact/inquiry flow.",
    tags: ["React.js", "Tailwind",],
    image: "ss5.png",
    liveLink: "https://tumhara-real-estate-vercel-url.vercel.app",
   
  },
  {
    title: "Elderly Care Home Management System",
    description:
      "A web-based solution that streamlines elderly care operations by managing residents, staff, medical records, daily activities, and donations while improving communication with families..",
    tags: ["Html/Css","JavaScript","jQuery","PHP","MySQL","XAMPP","Tailwind",],
    image: "ss6.png",
   
  },
  
];

export const contact = {
  heading: "Let's build something fluid together.",
  subheading:
    "I'm currently open to Junior frontend roles & Internship. If you have a project or opportunity in mind, my inbox is open.",
};
