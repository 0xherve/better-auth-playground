import Link from "next/link";
import { AuthSection } from "@/components/auth/section";
import { CodeBlock } from "@/components/auth/code-block";
import { InfoCard } from "@/components/auth/info-card";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_50%),radial-gradient(circle_at_30%_60%,_rgba(16,185,129,0.12),_transparent_55%),linear-gradient(180deg,_rgba(255,255,255,0.9)_0%,_rgba(244,244,245,1)_100%)] px-6 py-16 text-zinc-900 dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_50%),radial-gradient(circle_at_30%_60%,_rgba(16,185,129,0.18),_transparent_55%),linear-gradient(180deg,_rgba(9,9,11,0.98)_0%,_rgba(9,9,11,1)_100%)] dark:text-zinc-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <header className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
            Auth starter
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Learn auth by wiring the flow yourself
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
            This repo is a teachable starter: auth pages, API handlers, and
            database schema are already in place. Follow the steps below to see
            how Better Auth, Drizzle, and Next.js connect.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/sign-up"
              className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              Create account
            </Link>
            <Link
              href="/sign-in"
              className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200"
            >
              Sign in
            </Link>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <AuthSection
            eyebrow="1. Configure"
            title="Set environment variables for Better Auth"
          >
            Add <code>DATABASE_URL</code>, <code>BETTER_AUTH_SECRET</code>, and
            <code> BETTER_AUTH_URL</code> to your <code>.env.local</code> file.
            These allow Better Auth to connect to Postgres and sign sessions.
          </AuthSection>
          <CodeBlock
            caption=".env.local"
            code={`DATABASE_URL=postgres://user:pass@host:5432/db\nBETTER_AUTH_SECRET=replace-with-random-string\nBETTER_AUTH_URL=http://localhost:3000\nNEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000`}
          />
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <AuthSection
            eyebrow="2. Database"
            title="Generate and run migrations"
          >
            Drizzle reads the schema in <code>lib/db/schema.ts</code>. Generate
            migrations once, then run them against Postgres.
          </AuthSection>
          <CodeBlock
            caption="Commands"
            code={`bun run db:generate\nbun run db:migrate`}
          />
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <InfoCard
            title="Auth server"
            items={[
              "Configured in lib/auth.ts.",
              "Uses drizzleAdapter with PostgreSQL.",
              "Email + password enabled.",
            ]}
          />
          <InfoCard
            title="Auth client"
            items={[
              "Configured in lib/auth-client.ts.",
              "Hooks: useSession.",
              "Helpers: signIn, signUp, signOut.",
            ]}
          />
          <InfoCard
            title="Routes"
            items={[
              "POST /api/auth/sign-up/email",
              "POST /api/auth/sign-in/email",
              "GET /api/auth/session",
            ]}
          />
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <AuthSection
            eyebrow="3. Inspect"
            title="See the session payload"
          >
            After signing in, call <code>/api/auth/session</code> in the browser
            or use the <code>useSession</code> hook in a client component.
          </AuthSection>
          <CodeBlock
            caption="Client hook"
            code={`const { data: session } = useSession();\nconsole.log(session?.user);`}
          />
        </section>
      </main>
    </div>
  );
}
