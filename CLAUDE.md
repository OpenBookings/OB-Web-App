# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev       # Start dev server on localhost:3000
bun run build     # Production build
bun run lint      # Run ESLint
bun run start     # Start production server (port 8080)
```

No test suite is configured yet.

## Architecture

OpenBookings is a hotel booking platform built with **Next.js 16 App Router**, React 19, TypeScript, and Tailwind CSS v4. It uses **Bun** as the package manager.

### Key Services

| Service | Purpose | Library |
|---|---|---|
| Firebase Auth | Magic-link authentication | Admin SDK (server) + client SDK (browser) |
| PostgreSQL + PostGIS | Hotel inventory & geospatial search | `pg` client |
| Algolia | City/location instant search | `react-instantsearch` |
| Postmark | Transactional email (magic links) | `postmark` |
| MapLibre GL | Map visualization | `maplibre-gl` |

### Request Flow

**Authentication:**
1. User submits email → POST `/auth/login-link`
2. Server calls `createMagicLink()` (Firebase Admin) → sends link via Postmark template `code-your-own`
3. User clicks link → `/auth/verify?oobCode=...` → Firebase verifies

**Hotel Search:**
1. UI calls `GET /api/query` with destination, dates, guests
2. Route queries PostgreSQL with a CTE that uses PostGIS `ST_DWithin` (250km radius), filters availability and room capacity, returns cheapest room per property
3. Algolia handles location autocomplete (city names) separately in `SearchBar.tsx`

### Path Aliases

`@/*` maps to repo root (e.g., `@/lib/postgres/db`, `@/components/ui/button`).

### Component Conventions

- Server components by default; add `"use client"` only when needed
- UI primitives live in `/components/ui/` (shadcn/ui wrapping Radix)
- Feature components live in `/components/plug-in/`
- `cn()` from `@/lib/utils` for conditional classnames

### Security Rules (enforced by ESLint + CSP)

- No `eval()`, `new Function()`, or `dangerouslySetInnerHTML` — ESLint will reject these
- All event handlers must use `addEventListener()` or React's synthetic events (no inline `onclick=`)
- CSP is set in `next.config.ts` — update it there if you need to add new external domains

### Rate Limiting

`/lib/rateLimit.ts` is an in-memory rate limiter (3 requests/10 min per email, 5/10 min per IP). It resets on server restart — fine for development, not suitable for multi-instance production.

### Environment Variables

**Build-time** (must be set as `NEXT_PUBLIC_*` before `next build`):
```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_APP_URL
NEXT_PUBLIC_MAPTILER_STYLE_ID
NEXT_PUBLIC_MAPTILER_API_KEY
NEXT_PUBLIC_POSTHOG_KEY
NEXT_PUBLIC_POSTHOG_HOST
NEXT_PUBLIC_DATABASE_URL
```

**Runtime-only** (never exposed to browser):
```
POSTMARK_SERVER_TOKEN   # or POSTMARK_API_KEY
FIREBASE_SERVICE_ACCOUNT_KEY   # JSON string, or split into:
  FIREBASE_PROJECT_ID / FIREBASE_CLIENT_EMAIL / FIREBASE_PRIVATE_KEY
PORT   # defaults to 8080
```

### Deployment

Deployed to **Google Cloud Run** via Cloud Build (`cloudbuild.yaml`). The Dockerfile uses a multi-stage Bun + Alpine build. Firebase Admin SDK uses Application Default Credentials automatically in Cloud Run.
