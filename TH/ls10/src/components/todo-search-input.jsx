export default function TodoSearchInput({ searchTerm, onSearchTermChange }) {
  return (
    <div className="mb-7">
      <div className="relative">
        <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          type="text"
          placeholder="Tim kiem cong viec"
          className="h-12 w-full rounded-2xl border border-indigo-100 bg-white px-11 text-base text-slate-700 shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 sm:h-13 sm:px-12"
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
        />
      </div>
    </div>
  )
}
