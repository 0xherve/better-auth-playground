import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';
import { env } from 'process';

config({ path: '.env.local' });

export default defineConfig({
  out: './drizzle',
  schema: './lib/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL!,
  },
});
