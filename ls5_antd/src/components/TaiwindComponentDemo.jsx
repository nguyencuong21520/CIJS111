import React from 'react';

const featureCards = [
  {
    title: 'Fast Development',
    description: 'Build responsive UIs quickly with utility-first classes.',
    badge: 'Productivity',
  },
  {
    title: 'Modern Design',
    description: 'Compose clean layouts with spacing, colors, and typography.',
    badge: 'UI/UX',
  },
  {
    title: 'Reusable Patterns',
    description: 'Extract components and keep consistency across screens.',
    badge: 'Scalable',
  },
];

const TaiwindComponentDemo = () => {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="space-y-4">
          <span className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300 hover:text-cyan-500">
            Tailwind Demo
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Beautiful Tailwind UI Components
          </h1>
          <p className="max-w-2xl text-slate-300">
            A simple showcase with cards, stats, actions, and a mini form using utility classes.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-3">
          {featureCards.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <span className="inline-flex rounded-full bg-slate-800 px-2.5 py-1 text-xs text-slate-300">
                {item.badge}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
              <button className="mt-5 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                Learn More
              </button>
            </article>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-2xl border border-white/10 bg-linear-to-br from-slate-900 to-slate-800 p-6">
            <h2 className="text-xl font-semibold">Dashboard Snapshot</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-sm text-slate-300">Revenue</p>
                <p className="mt-1 text-2xl font-bold">$24,580</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-sm text-slate-300">Users</p>
                <p className="mt-1 text-2xl font-bold">1,290</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-sm text-slate-300">Conversion</p>
                <p className="mt-1 text-2xl font-bold">8.4%</p>
              </div>
            </div>
          </div>

          <form className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Join Newsletter</h2>
            <p className="mt-1 text-sm text-slate-300">
              Get weekly Tailwind tips directly to your inbox.
            </p>

            <label className="mt-5 block text-sm text-slate-300" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-lg border border-white/15 bg-slate-900 px-3 py-2 text-sm outline-none ring-cyan-400 transition placeholder:text-slate-500 focus:ring-2"
            />

            <button
              type="button"
              className="mt-4 w-full rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TaiwindComponentDemo;
