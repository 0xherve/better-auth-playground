# Better Auth Starter

This is a teaching-first Next.js starter repo for learning how Better Auth
works with Drizzle and PostgreSQL. It includes minimal UI plus annotated pages
that explain each step of the auth flow.

## What this repo gives you

- Better Auth wired to a Drizzle + PostgreSQL database
- Signup and sign-in pages with the real API calls
- A dashboard page that reads the session client-side
- Teaching notes alongside the UI so you can follow the flow

## Requirements

- Bun (recommended) or Node.js 18+
- PostgreSQL database

## Setup

1. Install dependencies

```bash
bun install
```

2. Add environment variables

```bash
cp .env.local.example .env.local
```

Update the values:

```bash
DATABASE_URL=postgres://user:pass@host:5432/db
BETTER_AUTH_SECRET=replace-with-random-string
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
```

3. Run migrations

```bash
bun run db:generate
bun run db:migrate
```

4. Start the dev server

```bash
bun run dev
```

## Walkthrough

1. Open `app/page.tsx` to see the learning steps.
2. Visit `/sign-up` to create an account.
3. Visit `/sign-in` to sign in with that account.
4. Visit `/dashboard` to inspect the session data.
5. Open `app/api/auth/route.ts` to see where Better Auth mounts routes.

## File map

- `lib/auth.ts`: Better Auth server config
- `lib/auth-client.ts`: Better Auth client config + hooks
- `app/api/auth/route.ts`: Next.js route handler for Better Auth
- `lib/db/schema.ts`: Drizzle schema for auth tables
- `app/sign-up/page.tsx`: Signup UI + notes
- `app/sign-in/page.tsx`: Sign-in UI + notes
- `app/dashboard/page.tsx`: Session + sign-out demo
