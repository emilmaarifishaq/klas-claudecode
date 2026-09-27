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

export async function hasUser(email: string): Promise<boolean> {
  await ensureSchema()
  const { rows } = await sql`SELECT 1 FROM users WHERE email = ${email.trim().toLowerCase()}`
  return rows.length > 0
}

// Returns false when an account with this email already exists.
export async function createUser(user: StoredUser): Promise<boolean> {
  await ensureSchema()
  const { rowCount } = await sql`
    INSERT INTO users (email, password, name)
    VALUES (${user.email.trim().toLowerCase()}, ${user.password}, ${user.name})
    ON CONFLICT (email) DO NOTHING
  `
  return (rowCount ?? 0) > 0
}
