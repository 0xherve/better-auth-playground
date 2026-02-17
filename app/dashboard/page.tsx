import Link from "next/link";
import { UserInfo } from "@/components/auth/user-info";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { AuthSection } from "@/components/auth/section";
import { CodeBlock } from "@/components/auth/code-block";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
        <header className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
            Authenticated
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">
            Dashboard snapshot
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            You are signed in. This page uses the client session hook and shows
            a sign-out button.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200"
            >
              Back home
            </Link>
            <SignOutButton />
          </div>
        </header>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Session data
          </h2>
          <div className="mt-4">
            <UserInfo />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <AuthSection eyebrow="Hook" title="Use session client-side">
            The <code>useSession</code> hook reads from
            <code> /api/auth/session</code>. It returns loading state and the
            current user when authenticated.
          </AuthSection>
          <CodeBlock
            caption="Client usage"
            code={`import { useSession } from \"@/lib/auth-client\";\n\nconst { data: session, isPending } = useSession();`}
          />
        </div>
      </div>
    </div>
  );
}
