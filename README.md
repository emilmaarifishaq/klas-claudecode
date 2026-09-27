# Claude Code Club — Personal Learning Portal

Private, single-user portal for the Claude Code Club course material the owner is
subscribed to (from `emilmaarifishaq/skool-portal`), with a login in front of it.

Not for public or paid distribution: the course content belongs to Claude Code Club.
Keep Vercel Authentication (Settings → Deployment Protection) turned on.

Next.js 16 · NextAuth (credentials) · Neon Postgres · Tailwind 4

## Setup

1. Attach a Neon/Postgres database to the Vercel project (fills `POSTGRES_URL`); tables are created automatically.
2. Set `NEXTAUTH_SECRET`, `NEXTAUTH_URL`, `ADMIN_EMAIL`, `ADMIN_PASSWORD_HASH` (see `.env.example`).
3. Redeploy, then sign in at `/login`.

Lessons live in `content/stage-<id>.md` (read server-side, never from `public/`);
stage list in `data/stages.ts`; images, PDFs and resources in `public/`.
