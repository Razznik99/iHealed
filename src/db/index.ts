import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// We provide a fallback for the build to pass if DATABASE_URL is not set yet
const sql = neon(process.env.DATABASE_URL || 'postgres://localhost/postgres');
export const db = drizzle({ client: sql });
