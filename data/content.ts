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
  linkedin: "https://www.linkedin.com/in/yatindran-sathishkumar-123513249",
  github: "https://github.com/YatinSathish",
  resumePdf: "/resume.pdf",
  // TODO: replace with the real repo URL once pushed to GitHub
  repo: "https://github.com/YatinSathish",
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
    tech: [
      "React Native",
      "TypeScript",
      "Node.js",
      "MongoDB Atlas",
      "AWS EC2",
      "GitHub Actions",
      "Expo EAS",
    ],
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
    tech: [
      "React Native",
      "TypeScript",
      "Node.js",
      "MongoDB Atlas",
      "AWS EC2",
      "Expo EAS",
    ],
    link: { label: "vouchpay.app", href: "https://vouchpay.app" },
    stores: true,
    image: null, // TODO: drop screenshot into /public and set e.g. "/vouchpay.png"
  },
  {
    id: "rag-system",
    title: "Customer-Safe Internal Knowledge RAG System",
    date: "Jan 2026",
    description:
      "An internal knowledge chatbot built on a RAG pipeline that ingests Slack data, classifies content using an LLM, and serves grounded answers through a citation-gated REST API.",
    tech: ["Python", "FastAPI", "ChromaDB", "Gemini 2.5 Flash"],
    github:
      "https://github.com/YatinSathish/Internal-Knowledge-to-Customer-Safe-AI-Assistant",
  },
  {
    id: "local-chatbot",
    title: "Local AI Chatbot for Document Assistance",
    date: "Dec 2025",
    description:
      "A fully offline PDF chatbot powered by a local RAG pipeline with hybrid semantic and BM25 retrieval. No API keys, no cloud, no data leaving your machine.",
    tech: ["Python", "Ollama", "Llama 3.2", "ChromaDB", "BM25"],
    github: "https://github.com/YatinSathish/PDF-Reader-Chatbot",
  },
  {
    id: "data-pipeline",
    title: "NSW Fuel Price Data Analysis",
    description:
      "Data analysis of 60,000+ NSW FuelCheck records, comparing fuel prices across urban and rural regions and independent vs franchised stations using Python and Pandas.",
    tech: ["Python", "Pandas", "Matplotlib", "Jupyter"],
    github: "https://github.com/YatinSathish/NSW-Fuel-Data-Analysis",
  },
];

export type Capability = {
  title: string;
  body: string;
  tech: string[];
};

export const whatIDo: Capability[] = [
  {
    title: "Mobile and Full Stack Development",
    body: "I build and ship mobile and web applications end to end, from the first screen through to production deployment on iOS and Android. I work across React Native, TypeScript, Node.js, and AWS, and I am comfortable moving between frontend and backend depending on what the product needs.",
    tech: ["React Native", "TypeScript", "Node.js", "Next.js", "AWS EC2"],
  },
  {
    title: "AI and RAG Systems",
    body: "I build practical AI systems that go beyond basic API calls, including RAG pipelines, local LLM deployments, and citation-gated knowledge systems. I use Claude Code daily and think carefully about how AI outputs should be validated before they reach real users.",
    tech: ["LangChain", "ChromaDB", "FastAPI", "Ollama", "Gemini"],
  },
  {
    title: "Cloud Deployment and CI/CD",
    body: "I deploy and maintain production backends on AWS, configure Nginx and PM2, and set up automated pipelines so releases are consistent and reliable. I have shipped to both the App Store and Google Play through Expo EAS.",
    tech: ["AWS EC2", "GitHub Actions", "Nginx", "Expo EAS", "CI/CD"],
  },
  {
    title: "Data Engineering and Analysis",
    body: "I build data pipelines that clean, transform, and make sense of raw datasets. I have worked with Python and Pandas across ETL pipelines, SQL querying, and exploratory data analysis, turning messy data into something useful.",
    tech: ["Python", "Pandas", "SQL", "SQLite", "Matplotlib"],
  },
];

// Dense grouped list used by the resume page document
export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend & Mobile",
    items: [
      "React Native",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
      "Expo EAS",
      "WordPress",
      "Elementor",
      "Figma",
    ],
  },
  {
    group: "Backend & APIs",
    items: [
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "Flask-RESTx",
      "SQL",
      "MongoDB Atlas",
      "SQLite",
      "Atlassian Forge SDK",
    ],
  },
  {
    group: "AI & Data",
    items: [
      "LangChain",
      "ChromaDB",
      "Gemini",
      "Ollama",
      "Pandas",
      "JupyterLab",
    ],
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
