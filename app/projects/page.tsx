import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { ArrowUpRight, Github, Code, Globe } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  website?: string;
  status?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Mentora — Education Marketplace Platform",
    description:
      "A full-stack education marketplace connecting students and parents with mentors for personalized learning. Built role-based experiences for students, parents, mentors, and administrators across mobile and web platforms, including mentor discovery, profiles, lesson booking, dashboards, notifications, wallet and payment flows, identity verification, and administrative moderation. The platform also integrates AI-powered learning features that generate lesson summaries and quizzes from meeting transcripts using Gemini and Recall.ai. Contributed across product development, frontend and backend implementation, API integration, verification workflows, and end-to-end platform development.",
    tags: ["React Native", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "AWS", "Gemini", "Recall.ai", "Product Development"],
    github: "https://github.com/baris-aydin",
    website: "https://mentoratr.com",
  },
  {
    title: "INFADS — Creator Intelligence & Influencer Marketing Platform",
    description:
      "An ongoing influencer intelligence and marketing platform focused on the Turkish creator ecosystem. INFADS helps brands and agencies discover, analyze, compare, and shortlist Instagram creators using creator, content, audience, and campaign intelligence. The platform combines public social data, historical snapshots, calculated metrics, sampled audience analysis, and verified Instagram Insights to provide engagement analytics, audience quality, demographics, reachability, brand affinity, benchmarking, and creator reports. Also includes creator accounts, campaign workflows, shortlists, comparisons, and decision-support tools. The platform is actively under development with new analytics and marketplace capabilities being continuously added.",
    tags: ["Next.js", "TypeScript", "REST APIs", "Data Analytics", "Instagram API", "AWS", "Creator Intelligence", "Product Development"],
    website: "https://infads.io",
    status: "In Development",
  },
  {
    title: "Apollon Entertainment Systems Website",
    description:
      "Designed and developed a digital showroom for Apollon Entertainment Systems, an automotive technology brand offering multimedia, safety, and motorcycle smart systems. Built a responsive product catalog with category pages, vehicle-brand filtering, product detail templates, and distributor inquiry flows. Structured the platform for scalable content management, SEO, analytics, and future product expansion using Next.js, TypeScript, Tailwind CSS, Sanity CMS, and Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel"],
    github: "https://github.com/baris-aydin/apollon-website",
    website: "https://apollones.com",
  },
  {
    title: "Sakarya Torf — E-Commerce Website",
    description:
      "Designed and developed a responsive e-commerce website for Sakarya Torf, a Turkish agricultural growing-medium brand. Built product pages for multiple product sizes, purchasing and checkout flows, customer information and order summary interfaces, product education content, legal e-commerce pages, and a dedicated photo and video gallery. The website is structured for direct-to-consumer sales in Turkey and designed around a simple purchasing experience, responsive mobile usability, SEO, and scalable product content.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "E-Commerce", "Responsive Design", "Vercel", "SEO"],
    website: "https://sakaryatorf.com",
  },
  {
    title: "Tweet Time Indexer",
    description:
      "A full-stack web application that extracts and indexes timestamps from Twitter/X screenshots using OCR. Upload screenshots, filter by date ranges, and export results as CSV or ZIP. Built with Next.js, FastAPI, and PaddleOCR, with async processing via Redis workers. Fully containerized and deployed on AWS with App Runner, ECS Fargate, Amplify, and PostgreSQL.",
    tags: ["TypeScript", "Python", "FastAPI", "PaddleOCR", "AWS", "Docker"],
    website: "https://www.tweetindexer.com",
  },
  {
    title: "Hiking Assistant Vest",
    description:
      "A smart hiking system combining embedded hardware and mobile software to deliver real-time environmental and motion data. A Raspberry Pi–based vest collects sensor data and communicates with a cross-platform app using BLE and MQTT. Supports features like step tracking and safety-related event detection. Focused on reliable sensor integration, efficient wireless communication, and clear real-time presentation.",
    tags: ["Raspberry Pi", "Python", "BLE", "MQTT", "React Native"],
    github: "https://github.com/mesmi/Hiking-Assistant-Vest",
  },
  {
    title: "Security System (STM32 + FreeRTOS)",
    description:
      "An embedded security system built on STM32 using C and FreeRTOS for responsive real-time behavior. Integrates keypad input, OLED + LED status, motion detection, and buzzer alerts. Uses multiple tasks to handle input, sensor monitoring, and feedback concurrently. Emphasized task coordination and reliable hardware–software interaction.",
    tags: ["C", "FreeRTOS", "STM32", "Embedded"],
    github: "https://github.com/baris-aydin",
  },
  {
    title: "Personal Task Management Web App",
    description:
      "A full-stack task manager built with React, Node.js/Express, and MongoDB with JWT authentication. Designed RESTful APIs to create, update, and delete tasks while keeping data flow consistent between client and server. Implemented a minimalist UI focused on clarity and speed. Applied Git-based workflow, error handling, and scalable backend patterns.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST"],
    github: "https://github.com/baris-aydin/personal-task-management",
  },
];

const LINK_CLASS =
  "inline-flex items-center gap-2 py-1 underline underline-offset-4 transition-colors hover:text-primary";

export default function ProjectsPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="fade-in-up">
          <span className="text-primary font-medium mb-2 block">Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Projects
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Selected work across embedded systems, automation tooling, and
            full-stack development.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              className="fade-in-up card-hover flex flex-col rounded-2xl border border-border bg-card/60 p-6"
              style={{ animationDelay: `${100 + i * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Code className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl font-semibold">{p.title}</h2>
                    {p.status && (
                      <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {p.status}
                      </span>
                    )}
                  </div>
                </div>

                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground" />
              </div>

              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm">
                {p.github && (
                  <Link
                    className={LINK_CLASS}
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} on GitHub (opens in a new tab)`}
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                )}
                {p.website && (
                  <Link
                    className={LINK_CLASS}
                    href={p.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} website (opens in a new tab)`}
                  >
                    <Globe className="h-4 w-4" />
                    Website
                    <ArrowUpRight className="-ml-1 h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
