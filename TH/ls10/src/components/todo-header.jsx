export default function TodoHeader() {
  return (
    <header className="mb-8 text-center">
      <p className="mb-3 w-fit mx-auto justify-center items-center gap-3 rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
        <span className="inline-block mr-2 h-2 w-2 rounded-full bg-blue-500" />
        Daily Planner
      </p>
      <h1 className="inline-flex items-center gap-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
        <svg viewBox="0 0 24 24" className="h-9 w-9 text-indigo-500 sm:h-10 sm:w-10" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 6h11" />
          <path d="M9 12h11" />
          <path d="M9 18h11" />
          <path d="m3 6 1 1 2-2" />
          <path d="m3 12 1 1 2-2" />
          <path d="m3 18 1 1 2-2" />
        </svg>
        Todo List
      </h1>
      <p className="mx-auto mt-3 max-w-lg text-sm text-slate-500 sm:text-base">
        Organize your tasks with a clean and modern layout.
      </p>
    </header>
  )
}
