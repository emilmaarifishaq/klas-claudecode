import { sql } from '@vercel/postgres'
import { ensureSchema } from './schema'

export interface StoredUser {
  email: string
  password: string
  name: string
}

export async function getUser(email: string): Promise<StoredUser | undefined> {
  await ensureSchema()
  const { rows } = await sql<StoredUser>`
    SELECT email, password, name FROM users WHERE email = ${email.trim().toLowerCase()}
  `
  return rows[0]
}

export interface Member {
  name: string
  email: string
  joinedAt: Date
  lastLoginAt: Date
}

// Called on every portal page view; the WHERE clause limits writes to once per 5 minutes.
export async function touchLastLogin(email: string): Promise<void> {
  await ensureSchema()
  await sql`
    UPDATE users SET last_login_at = now()
    WHERE email = ${email.trim().toLowerCase()}
      AND (last_login_at IS NULL OR last_login_at < now() - interval '5 minutes')
  `
}

// Everyone who has actually signed in, most recent first.
export async function listMembers(): Promise<Member[]> {
  await ensureSchema()
  const { rows } = await sql`
    SELECT name, email, created_at, last_login_at FROM users
    WHERE last_login_at IS NOT NULL
    ORDER BY last_login_at DESC
  `
  return rows.map(r => ({ name: r.name, email: r.email, joinedAt: r.created_at, lastLoginAt: r.last_login_at }))
}
