# Project Explorer

A personal portfolio dashboard that aggregates and presents my side projects in
a single place. Each entry has its own detail page rendered either as a YouTube
walkthrough embed or as a live iframe of the deployed project.

Live at [projects.anddar00.com](https://projects.anddar00.com).

## Stack

- Next.js 13 (App Router with route groups)
- React 18
- TypeScript
- Tailwind CSS + shadcn/ui
- Clerk (authentication)
- React Hook Form + Zod (form validation)
- OpenAI SDK (for the embedded ChatGPT client project)
- Lucide React icons

## What's here

```
app/
  (auth)/                              Clerk sign-in / sign-up flows
  (dashboard)/
    layout.tsx                         Sidebar + navbar shell
    (routes)/
      dashboard/                       Project list home
      [slug]/                          Dynamic project detail page (YouTube embed or iframe)
      GPT_api/                         OpenAI chat client demo
      project_routes.tsx               Central project metadata config
  api/
    conversation/route.ts              Server route for OpenAI calls
components/                            shadcn/ui primitives + custom UI (sidebar, navbar, avatars)
middleware.ts                          Clerk auth middleware
```

All routes are public; auth is only enforced server-side on the
`/api/conversation` endpoint so the ChatGPT client cannot be used anonymously.

## Running locally

Required environment variables (see `.env.example`):

```
OPENAI_API_KEY=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

Then:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Projects showcased

- **Virtual Warehouse Manager** — Web app for managing a virtual store and
  handling deliveries of digital products. React, Tailwind, Redux, React Query.
- **Portfolio Site** — My previous portfolio site, populated from Sanity CMS.
  React with Framer Motion and SCSS.
- **Project Manager** — Project management system with tagging, customization,
  and full user account management against an external API. Next.js, React
  Query, shadcn/ui.
- **Neural Network Race** — Evolutionary neural network car simulation in pure
  JS. 1000 agents per generation, weighted-parent crossover, mutation, and
  progressively harder randomly generated courses.
- **Sorting Algorithms Visualizer** — Visual comparison of common sorting
  algorithms (work in progress).
- **Pathfinding Game** — Rimworld-inspired Unity/C# prototype focused on a
  building system, procedural pawn behavior, and an A* pathfinder that scales
  to ~1000 characters.
- **Architecture Firm Site** — WordPress site for AKD Architekci. Bespoke
  design and SEO work; ranked 3rd for target keywords after three years with
  no updates.
- **ChatGPT Client** — Minimal ChatGPT client backed by the OpenAI SDK. Auth
  required server-side because of API cost.
- **Crypto Wallet Scraper & Visualizer** — Scrapes transaction history from a
  given BTC wallet address and renders it on a graph with summary stats. MERN
  stack (MongoDB, Express, React, Node).

## Status

The codebase dates from 2023 and serves as the live portfolio at
[projects.anddar00.com](https://projects.anddar00.com).
