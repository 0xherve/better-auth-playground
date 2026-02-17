import type { ReactNode } from "react";

type AuthSectionProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function AuthSection({ eyebrow, title, children }: AuthSectionProps) {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
        {eyebrow}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        {title}
      </h3>
      <div className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {children}
      </div>
    </section>
  );
}
