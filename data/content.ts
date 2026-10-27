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
  bio: "I'm a computer science student at UC Santa Barbara, passionate about building products that solve real problems, especially at the intersection of technology, media, and human connection. This summer I interned on AllTrails’ Android Core Services team, and I’m currently building Rhome, a platform for sharing and discovering trusted media recs from friends. I love learning new technologies, exploring the outdoors, and playing piano in my free time.",

  location: "Santa Barbara / Bay Area",
  email: "rohan.ved.nihalani@gmail.com",
  phone: "925-519-8175",
  github: "https://github.com/rohannihalani",
  linkedin: "https://www.linkedin.com/in/rohannihalani",

  // Drop a photo in /public/ and update the path, or leave null for initials
  photo: "rohan.JPG",
};

// ─── INTERESTS ────────────────────────────────
// Replace / add your own
export const interests: string[] = [
  "Entrepreneurship",
  "Piano",
  "Hiking",
  "Startups",
  "System Design",
  "Surfing",
  // add more or swap these out
];

// ─── CURRENTLY BUILDING ───────────────────────
export const building = [
  {
    name: "Rhome",
    role: "Co-Founder",
    description:
      "A social recommendation app live on the App Store and Google Play, built with React Native, Go/Gin, and DynamoDB on AWS. 1,500+ users, 5,000+ curated recommendations, and 50+ releases.",
    tags: ["Go", "Gin", "React Native", "AWS", "DynamoDB", "Python"],
    link: "https://rhomeapp.com", // add URL when ready
    status: "Active" as const,
  },
  {
    name: "Daily Nexus App",
    role: "Lead Mobile Developer",
    description:
      "The first mobile news app for UCSB’s 25,000-student community — real-time articles and push notifications from the campus newspaper.",
    tags: ["React Native", "Node.js", "API Design"],
    link: null as string | null,
    status: "Active" as const,
  },
];

// ─── WORK EXPERIENCE ──────────────────────────
export const experience = [
  {
    company: "AllTrails",
    role: "Software Engineering Intern · Android, Core Services",
    dates: "Jun 2026 – Aug 2026",
    location: "San Francisco, CA",
    bullets: [
      "Designed and shipped Android’s session-log capture and export pipeline end-to-end within a large-scale production Kotlin codebase: a telemetry plugin, a dedicated Room database, and a multi-file archive writer producing archives readable by the desktop console tool iOS already used.",
      "Routed all call sites through a non-blocking command channel drained by a single IO-dispatcher coroutine, with per-command failure isolation so one bad write can’t take down the logging pipeline.",
      "Modeled the on-device schema across five tables (session, span, event, property, location) with scoped properties and automatic row expiry, keeping local storage bounded while integrating as one additional telemetry target so no existing call sites changed.",
    ],
  },
  {
    company: "Rhome",
    role: "Co-Founder & Lead Engineer",
    dates: "Aug 2024 – Present",
    location: "San Francisco Bay Area",
    bullets: [
      "Built and shipped a social recommendation app from zero to the App Store and Google Play, owning the React Native client, Go/Gin API, DynamoDB data model, and AWS infrastructure; grew to 1,500+ users and 5,000+ curated recommendations across 50+ releases driven by user interviews and in-app feedback.",
      "Modeled a read-heavy social graph in DynamoDB with a single-table design keyed to the app’s core access patterns, keeping each feed load to one query as the recommendation set grew past 5,000 items.",
      "Built a Python ranking service with scikit-learn that surfaces recommendations by graph-proximity and curation overlap rather than engagement.",
    ],
  },
  {
    company: "Daily Nexus",
    role: "Lead Mobile Developer",
    dates: "Oct 2025 – Present",
    location: "Santa Barbara, CA",
    bullets: [
      "Building the first mobile news app for UCSB’s 25,000-student community, delivering real-time articles and push notifications from the campus newspaper.",
      "Developed a custom middleware layer to transform legacy CMS data into a unified JSON API, enabling fast content delivery across iOS and Android.",
    ],
  },
  {
    company: "ACM.Industry",
    role: "Technical Executive",
    dates: "Jun 2025 – Jun 2026",
    location: "Santa Barbara, CA",
    bullets: [
      "Oversaw technical strategy and code quality for student consulting teams delivering software to clients including RTX, Turing, CrossnoKaye, and Unwrap AI.",
      "Led a 5-person team building ORAS (Order & Receiving Automation System) for IV Outfitters — a full-stack procurement and CRM platform using Next.js, FastAPI, and PostgreSQL that automates purchase orders, shipment tracking, and warehouse receiving, reducing manual processing time by 50%.",
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
    name: "Rhome",
    description:
      "Full-stack social recommendation app built with React Native, Go/Gin, and DynamoDB on AWS, with a Python/scikit-learn ranking service. Shipped 50+ releases to 1,500+ users and 5,000+ curated recommendations.",
    tags: ["Go", "React Native", "AWS", "DynamoDB", "Python"],
    link: "https://rhome.app" as string | null,
  },
  {
    name: "ORAS — Order & Receiving Automation System",
    description:
      "Full-stack procurement and CRM platform for IV Outfitters, built by a 5-person ACM.Industry team I led. Automates purchase orders, shipment tracking, and warehouse receiving, cutting manual processing time by 50%.",
    tags: ["Next.js", "FastAPI", "PostgreSQL"],
    link: null as string | null,
  },
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
  dates: "2024 - 2028",
  location: "Santa Barbara, California",
  gpa: "3.87 / 4.00",
  coursework: [
    "Object Oriented Design (C++)",
    "Data Structures & Algorithms",
    "Machine Learning",
    "Artificial Intelligence",
  ],
};

// ─── SKILLS ───────────────────────────────────
export const skills = {
  Languages: [
    "Python",
    "Java",
    "C++",
    "Go",
    "JavaScript",
    "TypeScript",
    "Swift",
    "Kotlin",
    "SQL",
    "HTML/CSS",
  ],
  Frameworks: [
    "React",
    "React Native",
    "Node.js",
    "Next.js",
    "Django",
    "FastAPI",
    "Flask",
    "Gin",
    "Room",
    "Kotlin Coroutines",
    "NumPy",
    "Scikit-Learn",
    "Pandas",
  ],
  "Cloud & Infra": [
    "AWS Lambda",
    "EC2",
    "DynamoDB",
    "S3",
    "Cognito",
    "ElastiCache",
    "Firebase",
    "PostgreSQL",
  ],
  Tools: [
    "Git",
    "GitHub Actions",
    "Docker",
    "Linux",
    "REST APIs",
    "CI/CD",
    "Jira",
    "Claude Code",
    "Cursor",
  ],
};
