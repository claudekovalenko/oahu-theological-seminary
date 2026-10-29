# Oahu Theological Seminary — website & student portal

A refreshed site for [Oahu Theological Seminary](https://oahuseminary.org) built with Next.js 16, React 19, and Tailwind CSS 4.

## What's here

| Area | Route | Notes |
| --- | --- | --- |
| Home | `/` | Hero with featured YouTube video, "two doors" (community courses vs. degrees), Start Here pathway, mission, Instagram, events |
| About | `/about` | Letter from the president, location, TLI partnership |
| Degrees | `/degrees`, `/degrees/[slug]` | M.A. in Ecclesial Theology, M.Div., Th.M. |
| Admissions | `/admissions` | Steps, tuition, requirements |
| Community courses | `/courses`, `/courses/[slug]` | Public catalog and outlines of free, non-degree courses |
| Community | `/community` | Pillars, events, video, Instagram, giving |
| Start Here | `/start` | Three intro videos with reflection prompts and progress, then apply |
| Apply | `/start/apply` | One application form for all tracks (`?program=<slug>` preselects) |
| Student portal | `/dashboard` | My courses, catalog, Moodle-style course viewer, optional Moodle embed, sign-in |
| API | `POST /api/apply` | Stores applications in Supabase and/or forwards to a webhook |

## Editing content (no code required)

All copy, links, and course content live in `src/content/`:

- `site.ts` — name, tagline, address, Instagram handle, **YouTube video ID**, tuition, partner, giving link
- `degrees.ts` — the three degree programs
- `courses.ts` — community courses in a Moodle-shaped structure (course → sections → activities)
- `pathway.ts` — the three Start Here videos
- `community.ts` — events, pillars, quotes

**To add the featured YouTube video:** open `src/content/site.ts` and paste the 11-character video ID into `youtube.featuredVideoId`. Do the same for each step in `pathway.ts` and for any `video` activity in `courses.ts`. Until an ID is set, a styled placeholder links to the channel.

## Running locally

```bash
npm install
cp .env.example .env.local   # optional
npm run dev
```

Open http://localhost:3000.

## Optional integrations

### Supabase (accounts, synced progress, application storage)
1. Create a Supabase project and run `supabase/migrations/0001_init.sql` in the SQL editor.
2. Fill in `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`.
3. Enable the **Email** auth provider (magic links) in Supabase.

Without these variables the portal runs in **demo mode**: enrollment and progress are saved in the visitor's browser, and applications are logged on the server (and forwarded to `APPLICATION_WEBHOOK_URL` if set).

### Moodle
Set `NEXT_PUBLIC_MOODLE_URL` to show a Moodle tab in the portal. For the embed to render, Moodle must allow framing (Site administration → Security → HTTP security → *Allow frame embedding*). Each course in `courses.ts` can also carry a `moodleUrl` for a direct "Open in Moodle" button.

Course content is organized exactly like Moodle (course → topic sections → activities of type video / reading / forum / quiz / assignment / link) so material can be moved in either direction.

### Application notifications
Set `APPLICATION_WEBHOOK_URL` to any endpoint that accepts JSON (Zapier, Make, Formspree, an email service) to get notified of new applications.

## Deploying

The site is a standard Next.js app and deploys to Vercel, Netlify, or any Node host. Add the environment variables from `.env.example` in the host's dashboard.

## Scripts

```bash
npm run dev     # local development
npm run build   # production build
npm run start   # serve the build
npm run lint    # eslint
```
