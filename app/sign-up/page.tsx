import { AuthCard } from "@/components/auth/auth-card";
import { AuthShell } from "@/components/auth/auth-shell";
import { CodeBlock } from "@/components/auth/code-block";
import { InfoCard } from "@/components/auth/info-card";
import { AuthSection } from "@/components/auth/section";
import { SignUpForm } from "@/components/auth/sign-up-form";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <AuthShell
      title="Create an account and see the signup flow"
      subtitle="This page highlights the Better Auth signup call and what the API does for you. Use it as a walkthrough while you build your own UI."
    >
      <AuthSection eyebrow="Step 1" title="Client sends a sign-up request">
        The signup form calls <code>signUp.email</code>. Better Auth validates
        the input, hashes the password, and inserts a new user row.
      </AuthSection>
      <CodeBlock
        caption="Form handler"
        code={`await signUp.email({\n  name,\n  email,\n  password\n}, {\n  onSuccess: () => router.push(\"/dashboard\"),\n  onError: (ctx) => setError(ctx.error.message ?? \"Failed to create account\")\n});`}
      />
      <InfoCard
        title="What Better Auth creates"
        items={[
          "User row in the user table.",
          "Session row in the session table.",
          "Session cookie stored in the browser.",
        ]}
      />
      <AuthCard
        title="Get started"
        description="Create an account to inspect the session payload."
        footer={
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Already registered?{" "}
            <Link href="/sign-in" className="font-medium text-blue-600">
              Sign in instead
            </Link>
            .
          </div>
        }
      >
        <SignUpForm />
      </AuthCard>
      <div className="text-sm text-zinc-600 dark:text-zinc-400">
        <Link href="/">Back to home</Link>
      </div>
    </AuthShell>
  );
}
