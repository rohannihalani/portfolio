// ─────────────────────────────────────────────
//  PORTFOLIO CONTENT  –  edit anything here
// ─────────────────────────────────────────────

export const personal = {
  name: "Rohan Nihalani",
  firstName: "Rohan",
  lastName: "Nihalani",

  // One-liner shown below your name in the hero
  title: "Builder & Engineer",

  // 2–4 sentences about yourself. Keep it personal.
  bio: "I'm a sophomore CS student at UCSB who likes building things people actually use. I co-founded Rhome, where I architect the full stack and keep the growth moving. I care about fast systems, clean code, and products that feel effortless.",

  location: "Santa Barbara, CA",
  email: "rohannihalani@ucsb.edu",
  phone: "925-519-8175",
  github: "https://github.com/rohannihalani",
  linkedin: "https://www.linkedin.com/in/rohannihalani",

  // Drop a photo in /public/ and update the path, or leave null for initials
  photo: null as string | null,
};

// ─── INTERESTS ────────────────────────────────
// Replace / add your own
export const interests: string[] = [
  "Distributed systems",
  "Entrepreneurship",
  "Music",
  "Photography",
  "Startups",
  "Coffee",
  // add more or swap these out
];

// ─── CURRENTLY BUILDING ───────────────────────
export const building = [
  {
    name: "Rhome",
    role: "Co-Founder",
    description:
      "A social recommendation platform built on Go and React Native. 1,000+ active users, 3,000+ recommendations, and 10% MoM growth since launch.",
    tags: ["Go", "React Native", "AWS", "DynamoDB", "S3"],
    link: null as string | null, // add URL when ready
    status: "Active" as const,
  },
  {
    name: "Daily Nexus App",
    role: "Mobile App Developer",
    description:
      "The first mobile news app at any UC campus — real-time stories, push notifications, and personalised content for UCSB students.",
    tags: ["React Native", "Node.js", "API Design"],
    link: null as string | null,
    status: "Active" as const,
  },
];

// ─── WORK EXPERIENCE ──────────────────────────
export const experience = [
  {
    company: "Rhome",
    role: "Co-Founder",
    dates: "Aug 2024 – Present",
    location: "San Francisco Bay Area",
    bullets: [
      "Architected a scalable full-stack platform using Go and React Native, with AWS DynamoDB and S3 supporting high-concurrency dual-platform data retrieval.",
      "Scaled to 1,000+ active users and 3,000+ recommendations, sustaining 10% MoM growth through rapid iteration and data-driven marketing.",
      "Led end-to-end technical strategy — system design, cloud infrastructure, performance tuning, and CI/CD pipelines.",
    ],
  },
  {
    company: "Daily Nexus",
    role: "Mobile App Developer",
    dates: "Oct 2025 – Present",
    location: "Santa Barbara, CA",
    bullets: [
      "Leading development of the first-ever mobile news app at any UC campus, serving real-time news and personalised content to students.",
      "Engineered a unified API layer with a non-blocking request architecture to handle thousands of simultaneous connections.",
    ],
  },
  {
    company: "Velosimo",
    role: "Software Engineering Intern",
    dates: "Jun 2023 – Aug 2023",
    location: "Remote",
    bullets: [
      "Built a TypeScript-based JSON sanitation utility to automate data parsing and formatting, cutting developer prep time by 15%.",
    ],
  },
];

// ─── LEADERSHIP ───────────────────────────────
export const leadership = [
  {
    org: "ACM.Industry",
    role: "Technical Executive",
    dates: "Jun 2025 – Present",
    location: "Santa Barbara, CA",
    description:
      "Oversee technical strategy and code quality for student consulting teams delivering solutions to RTX, Turing, CrossnoKaye, and Unwrap AI.",
  },
  {
    org: "UCSB New Venture Program",
    role: "New Venture Fellow",
    dates: "Mar 2025 – Present",
    location: "Santa Barbara, CA",
    description:
      "Ideating, building, and pitching a business plan and go-to-market strategy in a competitive, year-long entrepreneurial program.",
  },
];

// ─── PROJECTS ─────────────────────────────────
export const projects = [
  {
    name: "AI Document Summarizer — Custom Testing Framework",
    description:
      "Custom Python testing framework for an AI summarizer using singleton + decorator-based design. Supports deterministic, exception-based, and non-deterministic test cases with a CLI-driven, CI/CD-ready test runner and JSON reporting.",
    tags: ["Python", "CLI Tooling", "Singleton Pattern", "CI/CD"],
    link: null as string | null,
  },
  {
    name: "MenuMate",
    description:
      "React Native app that cross-references restaurant menus with user dietary restrictions in real time, powered by Firebase for live data sync.",
    tags: ["React Native", "Expo", "Node.js", "Firebase"],
    link: null as string | null,
  },
];

// ─── EDUCATION ────────────────────────────────
export const education = {
  school: "University of California, Santa Barbara",
  degree: "Bachelor of Science in Computer Science",
  dates: "2024 – 2027",
  location: "Santa Barbara, California",
  gpa: "3.92 / 4.00",
  coursework: [
    "Object Oriented Design & Implementation",
    "Foundations of Computer Science",
    "Problem Solving with Computers I & II",
    "Probability & Statistics",
    "Vector Calculus with Applications",
  ],
};

// ─── SKILLS ───────────────────────────────────
export const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "C++", "Java", "Go", "Swift", "SQL"],
  Frameworks: ["React.js", "Next.js", "React Native", "Node.js", "Django", "Gin", "NumPy", "Scikit-Learn"],
  "Cloud & Infra": ["AWS Lambda", "EC2", "DynamoDB", "S3", "Cognito", "EventBridge"],
  Tools: ["Git", "Claude Code", "Cursor", "Windsurf"],
};
