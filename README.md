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
- Internationalization — react-i18next (EN / PL)
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

## Quality

Lighthouse scores measured against the live deploy at
`https://projects.anddar00.com/` (mobile, headless, Lighthouse 12.8.2):

| Category | Score |
|---|---|
| Performance | 94 |
| Accessibility | 88 |
| Best Practices | 96 |
| SEO | 91 |

Reproduce locally with:

```
npx lighthouse https://projects.anddar00.com/ --chrome-flags="--headless"
```

The 88 accessibility score reflected three failing audits — `button-name`
(icon-only buttons missing accessible names), `color-contrast` (disabled
project cards using `text-gray-400` on white), and `label-content-name-mismatch`
(the OpenAI client input had only a `placeholder`, no label). All three are
fixed in this branch and will be reflected in the next deploy.

A11y baseline established by this pass:

- Project cards are keyboard-focusable via `<Link>`; disabled cards announce
  `aria-disabled`.
- Icon-only buttons in the project detail dialog have `aria-label`s and use
  `asChild` so the underlying `<a>` is the single focusable element.
- The MobileSidebar trigger has an explicit accessible name
  (`common.openMenu`, translated for EN/PL).
- The OpenAI client `Input` has both an `sr-only` `<FormLabel>` and an
  `aria-label`.
- Decorative icons are marked `aria-hidden="true"`.
- All interactive elements expose a visible focus ring
  (`focus-visible:ring-2`).

Local production-build Lighthouse runs require the Clerk environment
variables to be set; without them every route returns 500 and the audit
cannot complete. The live-deploy numbers above are the authoritative
scores.

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
