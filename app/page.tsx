export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black font-sans text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 h-100 w-md rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.06)_96%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.06)_96%)] bg-[size:28px_28px]" />
      </div>

      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 py-20 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-fuchsia-400/40 bg-white/5 px-4 py-1 text-sm text-fuchsia-100 shadow-[0_0_20px_rgba(217,70,239,0.35)] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            Better Auth · Learning Starter
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block bg-linear-to-r from-fuchsia-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                  This is your Better Auth learning starter.
                </span>
              </h1>
              <p className="max-w-lg text-lg leading-8 text-zinc-300">
                Follow the Better Auth docs, make small commits, and use this
                starter as your workspace to build authentication.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-linear-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(34,211,238,0.4)] transition hover:-translate-y-0.5 hover:brightness-110">
                <a
                  href="https://www.better-auth.com/docs/introduction"
                  target="_blank">    
                  Start the guide
                  </a>
                </button>
                <button className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/60 hover:text-cyan-200">
                  <a
                    href="https://github.com/0xherve/better-auth-playground"
                    target="_blank"
                  >
                    Check the repo
                  </a>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_8px_rgba(217,70,239,0.9)]" />
                  Docs-first plan
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                  Small, focused commits
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                  Better Auth setup pending
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-fuchsia-500/30 bg-white/5 p-6 shadow-[0_0_40px_rgba(217,70,239,0.2)] backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-zinc-200">
                  Learning Checklist
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-300 shadow-[0_0_12px_rgba(34,211,238,0.12)]">
                  Read the setup section
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-300 shadow-[0_0_12px_rgba(217,70,239,0.12)]">
                  Plan the Better Auth client
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-300 shadow-[0_0_12px_rgba(52,211,153,0.12)]">
                  Sketch the first sign‑in flow
                </div>
              </div>
              <div className="mt-6 rounded-2xl bg-linear-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 px-4 py-3 text-center text-sm font-semibold text-black">
                Finish your first milestone
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Doc-to-code workflow",
              description:
                "Follow the Better Auth guide and implement each step in this starter.",
            },
            {
              title: "Project foundation",
              description:
                "A clean Next.js setup with Tailwind and a starter DB schema.",
            },
            {
              title: "Track your progress",
              description:
                "Use the checklist and cards below to mark each milestone.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_24px_rgba(255,255,255,0.06)] backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                {item.description}
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
