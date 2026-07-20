// ── All site content lives here. Edit text freely; components only render it. ──

export const site = {
  name: "Yatindran Sathishkumar",
  firstName: "Yatindran",
  role: "Software Engineer",
  eyebrow: "SOFTWARE ENGINEER",
  roles: [
    "SOFTWARE ENGINEER",
    "MOBILE APP DEVELOPER",
    "AI ENGINEER",
    "WEB DEVELOPER",
    "DATA ANALYST",
  ],
  pitch: "Full-stack engineer shipping mobile, web & AI products end to end.",
  location: "Based in Sydney · open to roles Australia-wide",
  seeking: "Open to junior–mid roles in software, data engineering & AI",
  email: "yatinsat@gmail.com",
  // TODO: replace with your real profile URLs
  linkedin: "https://www.linkedin.com/in/yatindran-sathishkumar",
  github: "https://github.com/yatindran",
  resumePdf: "/resume.pdf",
  // TODO: replace with the real repo URL once pushed to GitHub
  repo: "https://github.com/yatindran/pf2",
};

export type Experience = {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    company: "Ladder Inc.",
    role: "Software Engineer",
    dates: "Jan 2026 — Present",
    bullets: [
      "Built and shipped VouchPay, a trust & reputation platform for Australian construction, funded by the NSW Government's MVP innovation grant.",
      "Designed the core vouch reputation system with ABR business verification and a role-based invoice approval workflow.",
      "Built dashboards, calendar views and invoice tracking UI across REST APIs and mobile.",
      "Deployed to AWS EC2 with CI/CD via GitHub Actions; shipped iOS & Android via Expo EAS.",
    ],
    tech: ["React Native", "TypeScript", "Node.js", "MongoDB Atlas", "AWS EC2", "GitHub Actions", "Expo EAS"],
  },
  {
    company: "Freelance Web Developer",
    role: "Self-employed",
    dates: "Apr 2026 — Present",
    bullets: [
      "Design and build modern, high-performance websites for small businesses — from React/Next.js builds to custom-themed WordPress sites.",
      "Implement backend integrations including email/SMTP and analytics.",
      "Harden site security: SSL, login protection and brute-force mitigation.",
    ],
    tech: ["React", "Next.js", "WordPress", "Elementor", "SMTP", "Analytics"],
  },
];

export type Project = {
  id: string;
  title: string;
  date?: string;
  flagship?: boolean;
  attribution?: string;
  grant?: string;
  description: string;
  tech: string[];
  link?: { label: string; href: string };
  github?: string;
  stores?: boolean;
  // Set to a path under /public (e.g. "/vouchpay.png") once the screenshot is added
  image?: string | null;
};

export const projects: Project[] = [
  {
    id: "vouchpay",
    title: "VouchPay",
    flagship: true,
    attribution: "Built at Ladder Inc · Software Engineer",
    grant: "Funded by the NSW Government MVP innovation grant",
    description:
      "A trust & reputation platform for the Australian construction industry. Tradespeople and businesses vouch for each other, verified against the Australian Business Register, with role-based invoice approval keeping payments accountable end to end.",
    tech: ["React Native", "TypeScript", "Node.js", "MongoDB Atlas", "AWS EC2", "Expo EAS"],
    link: { label: "vouchpay.app", href: "https://vouchpay.app" },
    stores: true,
    image: null, // TODO: drop screenshot into /public and set e.g. "/vouchpay.png"
  },
  {
    id: "rag-system",
    title: "Customer-Safe Internal Knowledge RAG System",
    date: "Jan 2026",
    description:
      "RAG pipeline ingesting Slack data with LLM-assisted content classification and a citation-gated REST API that keeps internal data out of customer-facing responses.",
    tech: ["FastAPI", "ChromaDB", "Gemini"],
    github: "https://github.com/yatindran", // TODO: repo link
  },
  {
    id: "local-chatbot",
    title: "Local AI Chatbot for Document Assistance",
    date: "Dec 2025",
    description:
      "Local RAG pipeline for querying PDFs in plain English — hybrid semantic + BM25 retrieval with zero external API dependency.",
    tech: ["LangChain", "ChromaDB", "Ollama"],
    github: "https://github.com/yatindran", // TODO: repo link
  },
  {
    id: "data-pipeline",
    title: "Data Pipeline Project",
    description: "End-to-end data pipeline project — details coming soon.", // TODO: one-liner
    tech: ["Python", "Pandas", "SQL"],
    github: "https://github.com/yatindran", // TODO: repo link
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend & Mobile",
    items: ["React Native", "React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Expo EAS", "WordPress", "Elementor", "Figma"],
  },
  {
    group: "Backend & APIs",
    items: ["Node.js", "Express", "Python", "FastAPI", "Flask-RESTx", "SQL", "MongoDB Atlas", "SQLite", "Atlassian Forge SDK"],
  },
  {
    group: "AI & Data",
    items: ["LangChain", "ChromaDB", "Gemini", "Ollama", "Pandas", "JupyterLab"],
  },
  {
    group: "Cloud & Tools",
    items: ["AWS EC2", "Nginx", "PM2", "GitHub Actions", "CI/CD"],
  },
];

export const education = [
  {
    school: "UNSW Sydney",
    degree: "Master of Information Technology",
    dates: "Sep 2023 — Sep 2025",
  },
  {
    school: "SSN College of Engineering, Chennai",
    degree: "Bachelor of Electrical and Electronics Engineering",
    dates: "Aug 2019 — Jun 2023",
  },
];

export const navLinks = [
  { label: "Work", href: "/#experience", sections: ["experience", "projects"] },
  { label: "Stack", href: "/#skills", sections: ["skills", "education"] },
  { label: "Contact", href: "/#contact", sections: ["contact"] },
];
