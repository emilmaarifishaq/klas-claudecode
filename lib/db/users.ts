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
