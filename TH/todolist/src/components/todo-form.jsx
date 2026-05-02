/**
 * Form thêm công việc mới.
 * Controlled component: App truyền value/onChange để ô nhập luôn khớp state; submit gọi onSubmit của App (thêm + reset ô).
 */
export function TodoForm({ value, onChange, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full overflow-hidden rounded-md border border-neutral-300"
    >
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Nhập công việc mới"
        className="min-w-0 flex-1 border-0 px-3 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
      />
      <button
        type="submit"
        className="shrink-0 border-l border-neutral-300 bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-500"
      >
        Thêm
      </button>
    </form>
  )
}
