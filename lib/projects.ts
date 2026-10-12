export type Project = {
  slug: string;
  title: string;
  descriptor: string;
  /** Fallback tile colors when there is no cover image */
  tile: { bg: string; fg: string };
  /** Cover shot: hover preview on the home list + dimmed header bg on the detail page */
  cover?: { src: string; alt: string };
  meta: {
    role: string;
    company: string;
    year: string;
    stack: string[];
  };
  /** Short standfirst shown next to the meta column */
  summary: string;
  sections: { heading: string; body: string[] }[];
  highlights?: string[];
  links?: { label: string; href: string }[];
  images?: {
    src: string;
    alt: string;
    caption?: string;
    /** render at half width, side by side with the next half image */
    half?: boolean;
  }[];
  /** auto-cycling phone-frame slideshow shown in the gallery, gif-style */
  slideshow?: { caption: string; frames: { src: string; alt: string }[] };
};

export const projects: Project[
  ] = [
  {
    slug: "wyza",
    title: "Wyza",
    descriptor: "AI market research platform",
    tile: { bg: "bg-orange", fg: "text-ink" },
    cover: { src: "/images/wyza.jpg", alt: "Wyza homepage" },
    meta: {
      role: "Lead Engineer",
      company: "WonderLabs",
      year: "2025 —",
      stack: [
        "Next.js App Router",
        "TypeScript",
        "Prisma + Supabase",
        "BullMQ / Redis",
        "OpenAI + Gemini",
        "Stripe + Paystack",
      ],
    },
    summary:
      "An AI market-research platform used by companies including Unilever, Tolaram and Glovo across 6+ African markets, with 380+ field agents and 24,000+ responses collected. I’m the primary author of its three production apps.",
    sections: [
      {
        heading: "What it is",
        body: [
          "Wyza helps companies create research studies, recruit and manage respondents, run AI-moderated interviews and turn responses into reports: AI-generated surveys, interviews in 40+ languages, transcription, emotion and persona analysis, and automated reporting that turns raw responses into a presentation-ready report in under 48 hours.",
          "The platform is three Next.js apps sharing one monorepo: a research studio for brands, a respondent and field-agent app, and an admin terminal. I’m the primary author across all three, working in a three-person engineering team.",
        ],
      },
      {
        heading: "Product work I’m proud of",
        body: [
          "Researchers struggled to choose survey types, configure targeting and set up conditional logic, so I helped redesign the core survey-creation flow around a ChatGPT-style experience that turns a research brief into a structured survey and recommends audience targeting. We tested with 20 researchers before rollout; measured survey-creation time dropped by up to 70%, and multi-hour setup flows became minutes.",
          "When Customer.io became too expensive, I replaced it with an internal lead-management workflow with sales-pipeline controls, demo-request alerts and Slack notifications built into the admin product, removing the subscription entirely at an estimated $8k saved over 8 months.",
        ],
      },
      {
        heading: "The engineering underneath",
        body: [
          "Long-running AI and video work can’t live inside serverless limits, so I architected the asynchronous side: BullMQ/Redis and pg-boss queues feeding persistent Railway workers, with recovery and scheduled jobs. This is the infrastructure behind Wyza’s 24,000+ lifetime responses.",
          "Payments run on dual rails, Stripe and Paystack, with webhook idempotency, a credits and wallet ledger, field-agent payouts, bank verification and KYC via BVN/Dojah.",
        ],
      },
      {
        heading: "AI as engineering practice",
        body: [
          "I built /resolve-issue, a Claude-based workflow connected to Linear and GitHub through MCP. It has handled 150+ issues, from bug fixes to v1 features, automating much of the path from a written ticket to an opened PR, and gave the PM enough tooling to resolve lighter bugs without waiting on an engineer.",
          "I also built Gandalf, an internal AI knowledge system used by all 18 team members: product work, sales context, tasks, meeting notes and project status in one place, automated team check-ins twice a day, and a daily project-health view for the CEO.",
        ],
      },
    ],
    highlights: [
      "Survey-creation time cut by up to 70% after redesign",
      "24,000+ responses, 380+ field agents, 6+ markets",
      "150+ issues shipped through my AI issue-to-PR workflow",
      "Primary author of a three-app production monorepo",
      "Internal build replaced Customer.io (~$8k saved)",
    ],
    links: [{ label: "Visit wyza.ai", href: "https://wyza.ai" }],
    images: [
      {
        src: "/images/wyza-studio.jpg",
        alt: "Wyza research studio: describe a research goal and get a study",
        caption: "The research studio: a plain-language brief becomes a structured study (this redesign cut survey-creation time by up to 70%)",
      },
      {
        src: "/images/wyza-chat.jpg",
        alt: "Ask Wyza, the AI agent that turns a brief into study goals through conversation",
        caption: "Ask Wyza reads your brief, asks what it still needs, and writes the study goals",
      },
      {
        src: "/images/wyza-guide.jpg",
        alt: "The generated interview guide: 23 questions across screening, trust, switching and fees",
        caption: "Minutes later: audience, screener and a 23-question interview guide, built section by section",
      },
      {
        src: "/images/wyza-review.jpg",
        alt: "Review & Launch: recruitment groups, quotas and screening checks",
        caption: "Review & Launch: recruitment groups, quotas and screening rules checked before going live",
      },
    ],
    slideshow: {
      caption: "The Wyza Poll mobile app (Expo / React Native): onboarding, rewards, agent mode, coins and circles",
      frames: [
        { src: "/images/wyza-shot-splash.png", alt: "Wyza Poll splash screen" },
        { src: "/images/wyza-shot-goal.png", alt: "Onboarding: set your monthly earnings goal" },
        { src: "/images/wyza-shot-xp.png", alt: "We found a survey for you: XP reward" },
        { src: "/images/wyza-shot-agent.png", alt: "Agent mode dashboard with balance and sync progress" },
        { src: "/images/wyza-shot-coins.png", alt: "Coins arena: balance, referrals and reward history" },
        { src: "/images/wyza-shot-circles.png", alt: "Circle feed community activity" },
      ],
    },
  },
  {
    slug: "drdogood",
    title: "DrDoGood",
    descriptor: "Telehealth across four apps",
    tile: { bg: "bg-stone", fg: "text-cream" },
    cover: { src: "/images/drdogood.jpg", alt: "DrDoGood public website" },
    meta: {
      role: "Frontend Developer",
      company: "DrDoGood",
      year: "2025",
      stack: [
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "Firebase",
        "Parcel (widget build)",
      ],
    },
    summary:
      "A healthcare platform for finding and booking doctors and health facilities, with separate products for patients, providers, facilities and employers. I built across several of them.",
    sections: [
      {
        heading: "What I built",
        body: [
          "The employer dashboard: the product experience companies used to provide healthcare to employees, monitor usage and understand insurance spend.",
          "A facility-rating system that collected patient feedback on quality of care, giving DrDoGood a signal to rank better-performing facilities in search across a network of around 20 facilities.",
          "An embeddable booking widget that let partner websites offer DrDoGood appointment booking directly inside their own products instead of redirecting patients elsewhere. It ships as a single drop-in bundle built under hard bundle-size and style-isolation constraints.",
        ],
      },
      {
        heading: "The platform work",
        body: [
          "I redesigned parts of the public website and product dashboards, and standardised reusable front-end components across the platform, reducing repeated UI work while collaborating with a part-time designer. Core interfaces ran over a Firebase-backed data layer with Redux Toolkit state, error boundaries and analytics instrumentation.",
        ],
      },
    ],
    highlights: [
      "Employer dashboard for healthcare usage and spend",
      "Facility ratings that fed search ranking",
      "Embeddable booking widget for partner sites",
    ],
  },
  {
    slug: "improdds",
    title: "Improdds",
    descriptor: "Job-search platform + Chrome extension",
    tile: { bg: "bg-cream", fg: "text-ink" },
    cover: { src: "/images/improdds-cover.png", alt: "Improdds candidate dashboard" },
    meta: {
      role: "Sole frontend developer",
      company: "Improdds",
      year: "2023 — 2025",
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Material UI / shadcn",
        "Chrome Extension APIs",
      ],
    },
    summary:
      "A platform connecting job seekers with mentors and personalised job-search services. I took the web app from design to production as the only frontend developer, and co-built its Chrome extension.",
    sections: [
      {
        heading: "What it is",
        body: [
          "Improdds (from “improve your odds”) connects candidates with experienced recruiters for resume optimisation, cover-letter crafting and negotiation advice, with an easy booking system that generates Google Meet sessions automatically.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "The entire front end: candidate and recruiter dashboards, a dynamic calendar booking component, payment processing flow and REST API integration, translated from the product designer’s Figma into Next.js, TypeScript and Tailwind.",
          "I also co-built v1.0 of the Improdds Job Analytics Chrome extension, which analyses job listings against a user’s CV and returns a match score to help candidates prioritise where to apply. The booking experience included the calendar logic to coordinate availability across users and time zones.",
        ],
      },
    ],
    highlights: [
      "Design-to-production ownership of the core product",
      "Calendar booking + payment flow",
      "Chrome extension with job ranking, live on the Web Store",
    ],
    links: [
      { label: "Visit improdds.com", href: "https://improdds.com" },
      {
        label: "Chrome extension",
        href: "https://chromewebstore.google.com/detail/improdds-job-analytics/honfdjghfeeidccdlmoiackmakamdeie",
      },
    ],
    images: [
      {
        src: "/images/improdds/improdds-candidate.png",
        alt: "Improdds candidate dashboard",
        caption: "Candidate dashboard",
      },
      {
        src: "/images/improdds/improdds-recruiter.png",
        alt: "Improdds recruiter dashboard",
        caption: "Recruiter dashboard",
      },
      {
        src: "/images/improdds/improdds-chrome-4.png",
        alt: "Improdds Chrome extension",
        caption: "Job Analytics Chrome extension",
      },
    ],
  },
  {
    slug: "ilimi",
    title: "Ilimi",
    descriptor: "Solo-built AI learning platform",
    tile: { bg: "bg-jet", fg: "text-cream" },
    cover: { src: "/images/ilimi.jpg", alt: "Ilimi homepage" },
    meta: {
      role: "Sole author",
      company: "Side project",
      year: "2024 —",
      stack: [
        "Next.js 14 App Router",
        "TypeScript",
        "tRPC + Zod",
        "Prisma + Neon Postgres",
        "OpenAI",
        "Paystack",
      ],
    },
    summary:
      "A full-stack AI product built end to end by one person: give it a topic, and it generates a structured course pathway with modules, sections and adaptive quizzes.",
    sections: [
      {
        heading: "What it is",
        body: [
          "Ilimi turns a topic you want to learn into a persistent, structured course: pathways, modules, sections and adaptive quizzes generated from a single prompt. I built it after noticing that general-purpose AI chat gives useful answers but leaves knowledge scattered across disconnected chat histories.",
        ],
      },
      {
        heading: "How it’s built",
        body: [
          "A nine-model relational schema (pathways → modules → sections, quizzes → questions → options) sits behind end-to-end typed tRPC procedures with Zod validation.",
          "Production concerns are shipped, not sketched: Kinde authentication, Paystack subscriptions with webhook handling, and Sentry monitoring across client, server and edge runtimes.",
        ],
      },
    ],
    highlights: [
      "Solo full-stack build: 65 commits, zero co-authors",
      "Nine-model relational schema, end-to-end typed",
      "Auth, subscriptions and monitoring in production",
    ],
    links: [{ label: "Visit ilimi.ai", href: "https://ilimi.ai" }],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
