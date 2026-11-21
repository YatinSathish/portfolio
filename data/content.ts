// ── All site content lives here. Edit text freely; components only render it. ──

export const site = {
  name: "Yatindran Sathishkumar",
  firstName: "Yatindran",
  role: "Software Engineer",
  eyebrow: "SOFTWARE ENGINEER",
  roles: [
    "SOFTWARE ENGINEER",
    "AI ENGINEER",
    "FULL-STACK DEVELOPER",
    "CLOUD ENGINEER",
  ],
  pitch: "Full-stack engineer building AI products, from first screen to production.",
  location: "Based in Sydney · Open to roles Australia-wide",
  seeking: "Open to full-stack & AI engineering roles",
  email: "yatinsat@gmail.com",
  // TODO: replace with your real profile URLs
  linkedin: "https://www.linkedin.com/in/yatindran-sathishkumar-123513249",
  github: "https://github.com/YatinSathish",
  resumeLabel: "Resumè",
  resumePdf: "/Yatindran_Sathishkumar_Resume.pdf",
  repo: "https://github.com/YatinSathish/portfolio",
};

export type Experience = {
  company: string;
  role: string;
  location?: string;
  dates: string;
  bullets: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    company: "Ladder Inc.",
    role: "Software Engineer",
    location: "Sydney",
    dates: "Oct 2025 — Present",
    bullets: [
      "Built the memory layer for an AI aged-care companion on Amazon Bedrock, FastAPI and PostgreSQL, so it remembers each person between conversations while keeping sensitive details away from the model.",
      "Built a platform connecting private philanthropic funds with small Australian charities, including an AI-driven readiness assessment, on Next.js, PostgreSQL and AWS (CDK, ECS Fargate).",
      "Built and shipped VouchPay, a trust and reputation platform for Australian construction funded by the NSW Government's MVP innovation grant, live on both the App Store and Google Play.",
      "Developed key frontend screens including vouch flows, ABR-verified onboarding, project dashboards, and invoice tracking across the React Native mobile app.",
      "Designed a role-based invoice approval system that routes invoices through the correct approver chain at submission time, with access controls enforced server-side.",
      "Deployed backend to AWS EC2 with Nginx and CI/CD via GitHub Actions; shipped iOS and Android releases via Expo EAS.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "Amazon Bedrock",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "AWS CDK",
      "ECS Fargate",
      "React Native",
      "Node.js",
      "MongoDB Atlas",
      "AWS EC2",
      "GitHub Actions",
      "Expo EAS",
    ],
  },
  {
    company: "ClaritySRM",
    role: "Software Engineer",
    location: "Sydney",
    dates: "", // TODO: add date range
    bullets: [
      "Developed Next.js frontend UI components for an AI-based tender management platform built in collaboration with an enterprise client.",
      "Collaborated with client stakeholders to define how key workflows should function within the platform, bridging business needs and technical implementation.",
    ],
    tech: ["Next.js", "TypeScript", "GitHub"],
  },
  {
    company: "Freelance Web Developer",
    role: "Self-employed",
    location: "Sydney",
    dates: "",
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
  // Optional richer layout for the flagship card: a hook line followed by
  // named feature blocks, rendered instead of the plain description paragraph.
  hook?: string;
  features?: { label: string; text: string }[];
  tech: string[];
  link?: { label: string; href: string };
  github?: string;
  stores?: boolean;
  // TODO: add real App Store / Google Play links once submitted
  appStoreUrl?: string;
  playStoreUrl?: string;
  // Paths under /public. One image shows statically; multiple cycle with a
  // crossfade in the phone mock, with pagination dots.
  images?: string[];
};

export const projects: Project[] = [
  {
    id: "ai-companion-memory",
    title: "AI Companion for Aged Care",
    flagship: true,
    attribution: "Shipped at Ladder Inc",
    description:
      "A memory system that lets an AI companion remember each person between conversations, without ever exposing sensitive details to the model.",
    hook: "Loneliness is a real problem in aged care. This memory system lets an AI companion remember each person between conversations, without ever exposing sensitive details to the model.",
    features: [
      {
        label: "Privacy First",
        text: "Only a short summary reaches the model. Medication and other sensitive details never do, and conversations are encrypted, access-audited and kept in Sydney.",
      },
      {
        label: "Memories That Are Checked",
        text: "An LLM on Amazon Bedrock turns each chat into memories, and every one is verified in code against what the person actually said.",
      },
      {
        label: "Carer Input",
        text: "Carers add what residents can't always tell us themselves, such as family names, routines and topics to avoid, kept separate from the resident's own words.",
      },
    ],
    tech: [
      "Python",
      "FastAPI",
      "Amazon Bedrock",
      "PostgreSQL",
      "AWS CDK",
      "ECS Fargate",
    ],
  },
  {
    id: "charity-funding-platform",
    title: "AI-Assisted Charity Funding Platform",
    flagship: true,
    attribution: "Shipped at Ladder Inc",
    description:
      "A platform connecting private philanthropic funds with small Australian charities.",
    hook: "Small Australian charities often struggle to get in front of private philanthropic funds. This platform connects the two.",
    features: [
      {
        label: "For Charities",
        text: "Sign up, tell their story, upload documents and get an AI-driven readiness assessment, then onboarding and a live profile.",
      },
      {
        label: "For Funders",
        text: "Verify a fund, pick causes, browse charities and pledge gifts.",
      },
      {
        label: "Built To Be Trusted",
        text: "Money moves by bank transfer through a partner trust, while the platform keeps the ledger, receipts and records behind role-based access, encrypted bank details and an audit log.",
      },
    ],
    tech: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "AWS CDK",
      "ECS Fargate",
    ],
  },
  {
    id: "vouchpay",
    title: "VouchPay",
    flagship: true,
    attribution: "Shipped at Ladder Inc",
    grant: "Funded by the NSW Government MVP innovation grant",
    description:
      "The Australian construction industry loses AU$3B+ annually to unpaid invoices and unreliable contractors. VouchPay tackles this with peer vouching — a portable, ABN-verified reputation system — and role-based invoice tracking that gives builders, PMs, owners and financiers full visibility from submission to payment.",
    hook: "The Australian construction industry loses AU$3B+ annually to unpaid invoices and unreliable contractors. VouchPay addresses this with two core features:",
    features: [
      {
        label: "Peer Vouching",
        text: "Tradies build a portable reputation verified against the Australian Business Register, tied to their ABN rather than a platform account.",
      },
      {
        label: "Role-Based Invoice Tracking",
        text: "Builders, PMs, owners, and financiers track every invoice from submission through to payment, with full visibility into who submitted, what is outstanding, and where money is held up.",
      },
    ],
    tech: [
      "React Native",
      "TypeScript",
      "Node.js",
      "MongoDB Atlas",
      "AWS EC2",
      "Expo EAS",
    ],
    link: { label: "Visit vouchpay.app", href: "https://vouchpay.app" },
    stores: true,
    appStoreUrl: "https://apps.apple.com/ca/app/vouchpay/id6754034788",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.babylonnexus",
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
    id: "field-service-scheduler",
    title: "Conflict-Free Field Service Scheduling System",
    description:
      "A full-stack scheduling app that assigns technician jobs with transaction-based conflict prevention, closing the race condition behind double-booking, plus a real-time slot availability API and notification tracking.",
    tech: ["Next.js", "TypeScript", "Prisma", "SQLite", "Tailwind CSS"],
    github: "https://github.com/YatinSathish/scheduling-platform",
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
    title: "AI Products",
    body: "I build practical AI products that go beyond basic API calls, including memory systems, RAG pipelines and assessment workflows. I think carefully about what a model should see, what it should never see, and how its outputs are validated before they reach real users. I use Claude Code daily.",
    tech: ["Amazon Bedrock", "FastAPI", "LangChain", "ChromaDB", "Ollama"],
  },
  {
    title: "Full Stack Development",
    body: "I build and ship web and mobile applications end to end, from the first screen through to production, including releases on the App Store and Google Play. I move between frontend and backend depending on what the product needs.",
    tech: ["Next.js", "TypeScript", "React Native", "Node.js", "PostgreSQL"],
  },
  {
    title: "Cloud Infrastructure and Security",
    body: "I define infrastructure as code, deploy containerised backends on AWS and set up automated pipelines so releases are consistent and reliable. Security is part of the build: encryption, least-privilege access and audit trails from the start.",
    tech: ["AWS CDK", "ECS Fargate", "KMS", "GitHub Actions", "Docker"],
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
      "PostgreSQL",
      "Prisma",
      "SQLAlchemy",
      "MongoDB Atlas",
      "SQLite",
      "Atlassian Forge SDK",
    ],
  },
  {
    group: "AI & Data",
    items: [
      "Amazon Bedrock",
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
    items: [
      "AWS CDK",
      "ECS Fargate",
      "RDS",
      "KMS",
      "WAF",
      "Cognito",
      "AWS EC2",
      "Docker",
      "Nginx",
      "PM2",
      "GitHub Actions",
      "CI/CD",
      "Playwright",
    ],
  },
];

export type Education = {
  school: string;
  affiliation?: string;
  degree: string;
  dates: string;
  coursework: string[];
  activities: string[];
};

export const education: Education[] = [
  {
    school: "University of New South Wales (UNSW) Sydney",
    degree: "Master of Information Technology",
    dates: "Sep 2023 — Sep 2025",
    coursework: [
      "Data Services Engineering",
      "Web Frontend Engineering",
      "Recommender Systems",
      "Computer Vision",
      "Neural Networks",
      "Blockchain Applications",
    ],
    activities: [
      "Leadership Foundations Program",
      "Professional Development Program",
      "Study Australia Industry Experience Program (SAIEP)",
    ],
  },
  {
    school: "Sri Sivasubramaniya Nadar College of Engineering (SSNCE)",
    affiliation: "Affiliated with Anna University",
    degree: "Bachelor of Electrical and Electronics Engineering",
    dates: "Aug 2019 — Jun 2023",
    coursework: [
      "Digital Logic",
      "Power Electronics",
      "Microcontrollers",
      "Electrical Machine Design",
    ],
    activities: [
      "Event Organisation Committee — Invente Techfest",
      "Volunteer, SSN Youth Red Cross",
    ],
  },
];

export const buildWords = [
  "bold",
  "smart",
  "real",
  "useful",
  "ambitious",
  "meaningful",
  "memorable",
  "exceptional",
];

export const navLinks = [
  { label: "Experience", href: "/#experience", sections: ["experience"] },
  { label: "Projects", href: "/#projects", sections: ["projects"] },
  { label: "Stack", href: "/#skills", sections: ["skills", "education"] },
  { label: "Contact", href: "/#contact", sections: ["contact"] },
];
