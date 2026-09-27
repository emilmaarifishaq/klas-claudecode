# KLAS — Launch Setup Checklist

The login + QRIS payment flow is built in, but it needs a database and three external
accounts before it works.

## 1. Deploy to Vercel

- [ ] Vercel → **Add New Project** → import `emilmaarifishaq/klas-claudecode`
- [ ] Framework preset: Next.js (defaults are fine)

## 2. Database (Vercel Postgres / Neon)

- [ ] Project → **Storage** → **Create Database** → Postgres, attach it to this project
      (this fills `POSTGRES_URL` automatically)
- [ ] Open the database **Query** console and run `db/schema.sql` once

## 3. Tripay (QRIS)

- [ ] Register at [tripay.co.id](https://tripay.co.id) as an individual merchant
- [ ] Stay in **sandbox** until a full payment works end to end
- [ ] Copy Merchant Code, API Key and Private Key
- [ ] Set the callback URL to `https://<your-domain>/api/tripay-callback`
- [ ] Enable the **QRIS** channel

## 4. Resend (sends login credentials)

- [ ] Register at [resend.com](https://resend.com) and create an API key
- [ ] `onboarding@resend.dev` works for testing but only delivers reliably to your own
      address; verify your own domain in Resend before selling publicly

## 5. Environment variables (Vercel → Settings → Environment Variables)

| Variable | Value |
|---|---|
| `NEXTAUTH_SECRET` | **required** — `openssl rand -base64 32` |
| `NEXTAUTH_URL` | `https://<your-domain>` |
| `NEXT_PUBLIC_APP_URL` | `https://<your-domain>` |
| `TRIPAY_SANDBOX` | `true` (set `false` only with production keys) |
| `TRIPAY_MERCHANT_CODE` / `TRIPAY_API_KEY` / `TRIPAY_PRIVATE_KEY` | from Tripay |
| `PRODUCT_NAME` | e.g. `KLAS Claude Code` |
| `PRODUCT_PRICE_IDR` | numbers only, e.g. `99000` |
| `RESEND_API_KEY` | from Resend |
| `RESEND_FROM` | `onboarding@resend.dev` until you verify a domain |

Redeploy after changing variables — the sales page price is baked in at build time.

## 6. Test in sandbox

1. Open `/join` → **Beli Akses** → enter a name and an email you can read
2. Pay with Tripay's sandbox QRIS simulator
3. The credentials email should arrive within a minute or two
4. Sign in at `/login`; you should land on the dashboard

If the email never arrives, check Vercel → Logs for `[tripay-callback] credential email failed`.
The account exists at that point; reset its password in the Query console (generate the
hash locally with `node -e "require('bcryptjs').hash('NEWPASS',12).then(console.log)"`):

```sql
UPDATE users SET password = '<bcrypt hash>' WHERE email = '<buyer email>';
```

## 7. Go live

- [ ] Complete Tripay's production approval, switch to production keys, set `TRIPAY_SANDBOX=false`
- [ ] Redeploy and make one small real payment yourself before announcing

## Adding your lessons

- `data/stages.ts` — the list of stages (title, description, emoji)
- `content/stage-<id>.md` — lessons for that stage; every `## ` heading is one lesson

Keep lessons in `content/`, never in `public/` — files in `public/` can be downloaded
without logging in.
