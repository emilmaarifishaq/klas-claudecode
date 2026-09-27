# KLAS

Paid online course portal: public sales page, Tripay QRIS checkout, automatic account
creation with emailed credentials, and a logged-in classroom with per-lesson progress.

Next.js 16 · NextAuth (credentials) · Vercel Postgres · Tripay · Resend · Tailwind 4

## Flow

`/join` (sales page) → `/checkout` → Tripay QRIS → `/api/tripay-callback` marks the order
paid, creates the account and emails a password → `/login` → classroom.

Everything except `/join`, `/login`, `/checkout` and `/api/*` requires a session
(`proxy.ts`, plus a server-side check in `app/(portal)/layout.tsx`).

## Run locally

```bash
cp .env.example .env.local   # fill in values
npm install
npm run dev
```

See [SETUP.md](SETUP.md) for the launch checklist.
