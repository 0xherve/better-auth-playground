# Better Auth Learning Starter

A Next.js starter project for learning and implementing Better Auth. This repo provides a clean foundation with Next.js, Tailwind CSS, Drizzle ORM, and a PostgreSQL database schema ready for authentication.

## Prerequisites

- Node.js (or Bun)
- PostgreSQL database (e.g., hosted on Railway or locally)

## Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/0xherve/better-auth-playground
   cd better-auth-playground
   ```

2. Install dependencies:
   ```bash
   bun install  # or npm install
   ```

## Environment Setup

Copy `.env.local` and fill in your values:

```
DATABASE_URL=postgres://user:pass@host:5432/db
BETTER_AUTH_SECRET=replace-with-random-string
BETTER_AUTH_URL=http://localhost:3000
```

- **DATABASE_URL**: Your PostgreSQL connection string.
- **BETTER_AUTH_SECRET**: A random string for Better Auth security.
- **BETTER_AUTH_URL**: Your app's URL (localhost for dev).

## Running the App

1. Generate and run database migrations:
   ```bash
   bun run db:generate
   bun run db:migrate
   ```

2. Start the development server:
   ```bash
   bun run dev  # or npm run dev
   ```

Visit `http://localhost:3000` to see the starter.

## Next Steps

Follow the Better Auth docs to implement authentication features. Use the learning checklist on the homepage to track progress.