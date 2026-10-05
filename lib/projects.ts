export type Project = {
  slug: string;
  title: string;
  descriptor: string;
  /** Card tile colors on the home gallery */
  tile: { bg: string; fg: string };
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
  images?: { src: string; alt: string; caption?: string }[];
};

export const projects: Project[] = [
  {
    slug: "wyza",
    title: "Wyza",
    descriptor: "AI market research platform",
    tile: { bg: "bg-jet", fg: "text-cream" },
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
      "An AI market-research platform for African markets — used by brands including Unilever, Tolaram and Glovo across 12+ countries. I’m the primary author of its three-app production monorepo.",
    sections: [
      {
        heading: "What it is",
        body: [
          "Wyza turns a plain-language research brief into a full study: AI-generated surveys, AI-moderated video interviews in 40+ languages, transcription, emotion and persona analysis, and automated reports that turn raw video responses into a board-ready deck in under 48 hours.",
          "The platform is three Next.js apps sharing one monorepo — a research studio for brands, a respondent and field-agent app, and an admin terminal.",
        ],
      },
      {
        heading: "What I own",
        body: [
          "I’ve contributed roughly 1,270 of 2,220 commits (~57% of the codebase) — more than twice the next contributor — spanning ~396 App Router API routes, row-level security policies, generated types and 30+ hand-written SQL migrations.",
          "Long-running AI and video work can’t live inside serverless limits, so I architected the asynchronous side: BullMQ/Redis and pg-boss queues feeding a persistent Railway worker, with 17 scheduled jobs for stuck-job recovery, quota release and credit resets.",
          "Payments run on dual rails — Stripe and Paystack — with webhook idempotency, a credits and wallet ledger, field-agent payouts, bank verification and KYC via BVN/Dojah.",
        ],
      },
      {
        heading: "AI as engineering practice",
        body: [
          "I also built the team’s AI development infrastructure: version-controlled MCP server configuration so every developer’s assistant reads the real schema and real tickets, custom commands for architecture review and refactoring, a Figma design-token sync pipeline, and a spec-driven delivery loop that takes a Linear issue to an opened PR with one command.",
        ],
      },
    ],
    highlights: [
      "~57% of a three-app production monorepo",
      "~396 API routes, 30+ hand-written SQL migrations",
      "Queue-backed AI/video pipeline on Railway workers",
      "Dual payment rails with ledger, payouts and KYC",
    ],
    links: [{ label: "Visit wyza.ai", href: "https://wyza.ai" }],
  },
  {
    slug: "ilimi",
    title: "Ilimi",
    descriptor: "AI learning platform — solo build",
    tile: { bg: "bg-stone", fg: "text-cream" },
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
          "Ilimi generates structured course pathways, modules and adaptive quizzes from a single topic prompt — a learning platform where the curriculum builds itself around what you want to learn.",
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
      "Solo full-stack build — 65 commits, zero co-authors",
      "Nine-model relational schema, end-to-end typed",
      "Auth, subscriptions and monitoring in production",
    ],
    links: [{ label: "Visit ilimi.ai", href: "https://ilimi.ai" }],
  },
  {
    slug: "improdds",
    title: "Improdds",
    descriptor: "Job-search platform + Chrome extension",
    tile: { bg: "bg-khaki", fg: "text-black" },
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
          "Improdds (from “improve your odds”) connects candidates with experienced recruiters for resume optimisation, cover-letter crafting and negotiation advice — with an easy booking system that generates Google Meet sessions automatically.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "The entire front end: candidate and recruiter dashboards, a dynamic calendar booking component, payment processing flow and REST API integration — translated from the product designer’s Figma into Next.js, TypeScript and Tailwind.",
          "I also co-built v1.0 of the Improdds Job Analytics Chrome extension: candidates save job listings from external job sites and get a personalised rank score comparing their saved skills against the skills a listing requires.",
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
    slug: "drdogood",
    title: "DrDoGood",
    descriptor: "Telehealth across four apps",
    tile: { bg: "bg-periwinkle", fg: "text-ink" },
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
      "A telehealth platform connecting patients with health professionals and facilities. I was a core contributor across its patient app, facility portal, organisation dashboard and embeddable booking widget.",
    sections: [
      {
        heading: "The surface area",
        body: [
          "DrDoGood spans multiple production Next.js applications — the patient-facing web app, a health-facility portal and an organisation dashboard. I contributed ~250 commits and +69k lines across that multi-team codebase, as the third most active contributor on the flagship app.",
        ],
      },
      {
        heading: "The interesting constraint",
        body: [
          "The booking widget had to be embeddable on partner sites as a single drop-in bundle — compiled through Parcel under hard bundle-size and style-isolation constraints, so the booking flow could live inside pages we didn’t control.",
          "Core product work was booking, scheduling and dashboard interfaces over a Firebase-backed data layer, with Redux Toolkit state, error boundaries and analytics instrumentation.",
        ],
      },
    ],
    highlights: [
      "~250 commits across a multi-team production codebase",
      "Embeddable widget under bundle-size constraints",
      "Booking and scheduling UX over Firebase",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
