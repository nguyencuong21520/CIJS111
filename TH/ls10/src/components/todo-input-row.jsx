export default function TodoInputRow({ todoTitle, onTodoTitleChange, onSubmitTodo, isEditing }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div className="relative flex-1">
        <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
        <input
          type="text"
          placeholder="Nhap cong viec moi"
          className="h-12 w-full rounded-2xl border border-blue-100 bg-white px-11 text-base text-slate-700 shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-100 sm:h-13 sm:px-12"
          value={todoTitle}
          onChange={(e) => onTodoTitleChange(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="inline-flex h-12 min-w-28 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 sm:h-13"
        onClick={onSubmitTodo}
        disabled={!todoTitle.trim()}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
        {isEditing ? 'Sua' : 'Them'}
      </button>
    </div>
  )
}
