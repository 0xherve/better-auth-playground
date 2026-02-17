import { AuthCard } from "@/components/auth/auth-card";
import { AuthShell } from "@/components/auth/auth-shell";
import { CodeBlock } from "@/components/auth/code-block";
import { InfoCard } from "@/components/auth/info-card";
import { AuthSection } from "@/components/auth/section";
import { SignInForm } from "@/components/auth/sign-in-form";
import Link from "next/link";

export default function SignInPage() {
  return (
    <AuthShell
      title="Sign in and inspect the flow"
      subtitle="This page shows the client-side steps for authenticating with Better Auth. The form is the only active component; everything else is teaching notes you can keep or delete."
    >
      <AuthSection
        eyebrow="Step 1"
        title="Client calls the Better Auth sign-in helper"
      >
        The sign-in form calls <code>signIn.email</code> from
        <code> lib/auth-client.ts</code>. That function posts to
        <code> /api/auth/sign-in/email</code> and expects your email + password.
      </AuthSection>
      <CodeBlock
        caption="Form handler"
        code={`await signIn.email({\n  email,\n  password\n}, {\n  onSuccess: () => router.push(\"/dashboard\"),\n  onError: (ctx) => setError(ctx.error.message ?? \"Failed to sign in\")\n});`}
      />
      <InfoCard
        title="What happens on success"
        items={[
          "Better Auth creates a session row in the database.",
          "A session cookie is set in the browser.",
          "The client can fetch /api/auth/session to read user data.",
        ]}
      />
      <AuthCard
        title="Welcome back"
        description="Sign in to access the dashboard and inspect the session response."
        footer={
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            No account yet?{" "}
            <Link href="/sign-up" className="font-medium text-blue-600">
              Create one
            </Link>
            .
          </div>
        }
      >
        <SignInForm />
      </AuthCard>
      <div className="text-sm text-zinc-600 dark:text-zinc-400">
        <Link href="/">Back to home</Link>
      </div>
    </AuthShell>
  );
}
