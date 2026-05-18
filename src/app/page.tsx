import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-zinc-950 to-slate-900 text-white">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
              Jivanjor
            </div>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Build beautiful content experiences for your community.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-300">
                Jivanjor is the content front door for your site. Manage site
                updates, announcements and editorial workflow in one place.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/admin/login"
                className="inline-flex rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Admin login
              </Link>
              <Link
                href="#features"
                className="inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore features
              </Link>
            </div>
          </div>

          <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30">
            <div className="space-y-6">
              <div className="rounded-3xl bg-zinc-900 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
                  Live preview
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-white">
                  Editorial dashboard made simple
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  Publish updates quickly and keep editors aligned with a
                  central CMS workspace.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-zinc-950/70 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    Content
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Create posts
                  </p>
                </div>
                <div className="rounded-3xl bg-zinc-950/70 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    Workflow
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Track approvals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="features" className="mt-24 space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300">
              Features
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Everything your editors need
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Content management",
                description:
                  "Organize pages, posts, and website announcements.",
              },
              {
                title: "Admin controls",
                description: "Secure access for authorized team members only.",
              },
              {
                title: "Modern dashboards",
                description:
                  "A clear view of pending tasks and published updates.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-zinc-900/80 p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
