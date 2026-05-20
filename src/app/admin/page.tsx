export default function AdminHomePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-surface/80 bg-background p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
              Admin overview
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-foreground">
              Jivanjor CMS
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-foreground/70">
              Access your content tools, pending drafts, and editorial workflows
              from this dashboard.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article className="rounded-3xl border border-surface/80 bg-background p-6 shadow-xl shadow-black/5">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
            Create
          </p>
          <h2 className="mt-4 text-xl font-semibold text-foreground">
            New content
          </h2>
          <p className="mt-3 text-sm leading-6 text-foreground/70">
            Start an article, announcement, or site update in one place.
          </p>
        </article>

        <article className="rounded-3xl border border-surface/80 bg-background p-6 shadow-xl shadow-black/5">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
            Manage
          </p>
          <h2 className="mt-4 text-xl font-semibold text-foreground">
            Content library
          </h2>
          <p className="mt-3 text-sm leading-6 text-foreground/70">
            Browse published and draft items, then edit or schedule updates.
          </p>
        </article>

        <article className="rounded-3xl border border-surface/80 bg-background p-6 shadow-xl shadow-black/5">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
            Insights
          </p>
          <h2 className="mt-4 text-xl font-semibold text-foreground">
            Editorial status
          </h2>
          <p className="mt-3 text-sm leading-6 text-foreground/70">
            Keep track of approval status, review tasks, and next publishing
            steps.
          </p>
        </article>
      </section>
    </div>
  );
}
