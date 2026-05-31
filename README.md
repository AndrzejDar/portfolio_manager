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

Lighthouse scores against the live deploy at
`https://projects.anddar00.com/` (mobile, headless, Lighthouse 12.8.2):

| Category | Score |
|---|---|
| Performance | 97 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

Reproduce with:

```
npx lighthouse https://projects.anddar00.com/ --chrome-flags="--headless"
```

### A11y pass

Three Lighthouse audits failed in the baseline run and were fixed:

- `button-name` — icon-only buttons in the project detail dialog
  (`Code2` / `FileSymlink`) had no accessible name. Fixed with `aria-label`
  plus the `asChild` pattern so the underlying `<a>` is the single
  focusable element.
- `color-contrast` — disabled project cards used `text-gray-400` on white
  which failed WCAG AA. Bumped to `text-gray-500`.
- `label-content-name-mismatch` — the OpenAI client `Input` had only a
  `placeholder` and no real label. Fixed with `sr-only` `<FormLabel>` plus
  `aria-label`.

Other a11y work bundled in the pass: dashboard project cards are
keyboard-focusable via `<Link>`; MobileSidebar trigger has an explicit
translated accessible name (`common.openMenu`); decorative icons marked
`aria-hidden="true"`; visible focus rings (`focus-visible:ring-2`) on all
interactive elements.

### i18n SSR hydration

react-i18next + Next.js App Router can produce SSR/client text-content
mismatches when language detection runs at module-init time: the server
renders with the fallback language (English) because `localStorage` and
`navigator` are unavailable, while the client immediately detects a
different language and re-renders, triggering React `#418` / `#423` /
`#425` errors that Lighthouse counts as console errors against Best
Practices.

This codebase sidesteps that by running language detection in a
`useEffect` inside `I18nProvider` rather than through
`i18next-browser-languagedetector` at init. Server and first client
paint always render English; user preference (from `localStorage` or
`navigator.language`) is applied post-mount via
`i18n.changeLanguage()`. Trade-off: brief English flash for non-EN
users on first paint (~50–200ms). Benefit: zero hydration errors and a
deterministic `<html lang="en">` for crawlers.

### SEO

A static `public/robots.txt` is committed so the file is served by
Next.js as `text/plain`; without it the `[slug]` dynamic route would
intercept `/robots.txt` and return SPA HTML, breaking Lighthouse's
robots audit (the parser would see `<!DOCTYPE html>` instead of robots
directives).

### Performance — remaining 3 points

The 97 vs 100 gap on Performance is third-party / not actionable:

- `Array.prototype.flat` / `flatMap` / `Object.fromEntries` polyfills
  bundled inside `axios` and `openai` SDK chunks (not this codebase's
  source) — fixing means swapping deps.
- Largest Contentful Paint at ~2.4s is mostly cold-cache TTFB from
  Vercel edge.
- Back/forward cache disabled because Clerk's session check sets
  `Cache-Control: no-store` — Lighthouse marks this `Not actionable`.

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
