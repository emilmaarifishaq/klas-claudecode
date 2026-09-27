import { sql } from '@vercel/postgres'

let ready: Promise<void> | null = null

async function migrate() {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `

  await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS last_login_at TIMESTAMPTZ`

  // Admin account from env, so the owner can sign in without buying or running SQL.
  // Re-applied on every cold start, so changing ADMIN_PASSWORD_HASH in Vercel resets the password.
  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase()
  const adminHash = process.env.ADMIN_PASSWORD_HASH
  if (adminEmail && adminHash) {
    await sql`
      INSERT INTO users (email, password, name)
      VALUES (${adminEmail}, ${adminHash}, 'Admin')
      ON CONFLICT (email) DO UPDATE SET password = EXCLUDED.password
    `
  }
}

// Creates tables on first use (once per server instance); db/schema.sql stays as reference.
export function ensureSchema(): Promise<void> {
  if (!ready) {
    ready = migrate().catch(error => {
      ready = null
      throw error
    })
  }
  return ready
}
