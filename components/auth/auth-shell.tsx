import type { ReactNode } from "react";

type AuthShellProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function AuthShell({ title, subtitle, children }: AuthShellProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_45%),radial-gradient(circle_at_20%_60%,_rgba(16,185,129,0.16),_transparent_50%),linear-gradient(180deg,_rgba(15,23,42,0.08)_0%,_rgba(255,255,255,0.9)_40%,_rgba(255,255,255,1)_100%)] px-4 py-16 text-zinc-900 dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_50%),radial-gradient(circle_at_20%_60%,_rgba(16,185,129,0.25),_transparent_55%),linear-gradient(180deg,_rgba(15,23,42,0.95)_0%,_rgba(9,9,11,0.98)_45%,_rgba(9,9,11,1)_100%)] dark:text-zinc-100 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 lg:grid lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
            Better Auth starter
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-300">
            {subtitle}
          </p>
          <div className="mt-10 space-y-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
