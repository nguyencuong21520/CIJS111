export default function TodoItem({ title, index, id, onDeleteTodo, onStartEditTodo }) {
  return (
    <li
      className="animate-fade-up flex items-center justify-between rounded-2xl border border-white/70 bg-gradient-to-r from-white to-blue-50/60 px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:px-5"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="flex items-center gap-3 pr-4">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m5 12 4 4L19 6" />
          </svg>
        </span>
        <span className="text-base font-medium text-slate-800 sm:text-lg">{title}</span>
      </div>

      <div className="flex shrink-0 gap-2">
        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-xl border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-sm font-medium text-amber-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-100"
          onClick={() => onStartEditTodo(id, title)}

        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 20h9" />
            <path d="m16.5 3.5 4 4L7 21l-4 1 1-4Z" />
          </svg>
          Sua
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-1.5 text-sm font-medium text-rose-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-rose-100"
          onClick={() => onDeleteTodo(id)}
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18" />
            <path d="M8 6V4h8v2" />
            <path d="M19 6 18 20H6L5 6" />
          </svg>
          Xoa
        </button>
      </div>
    </li>
  )
}
