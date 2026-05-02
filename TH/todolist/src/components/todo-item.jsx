/** Class Tailwind dùng chung cho các nút Sửa / Xóa / Lưu / Hủy (giao diện thống nhất). */
const btnClass =
  'rounded border border-neutral-400 bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-900 hover:bg-neutral-200'

/**
 * Một dòng danh sách: text hoặc ô sửa + nút thao tác.
 * App báo đang sửa qua editing; draft/onDraftChange là bản nháp tiêu đề trước khi Lưu.
 * Enter lưu, Escape hủy; các hàm onStartEdit/onSave/onCancel/onDelete do App xử lý.
 */
export function TodoItem({
  todo,
  editing,
  draft,
  onDraftChange,
  onStartEdit,
  onSave,
  onCancel,
  onDelete,
}) {
  return (
    <li className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0 flex-1">
        {editing ? (
          <input
            value={draft}
            onChange={(e) => onDraftChange(e.target.value)}
            className="w-full rounded border border-neutral-300 px-2 py-1.5 outline-none focus:ring-1 focus:ring-blue-500"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter') onSave()
              if (e.key === 'Escape') onCancel()
            }}
          />
        ) : (
          <span className="block break-words">{todo.title}</span>
        )}
      </div>
      <div className="flex shrink-0 gap-2">
        {editing ? (
          <>
            <button type="button" className={btnClass} onClick={onSave}>
              Lưu
            </button>
            <button type="button" className={btnClass} onClick={onCancel}>
              Hủy
            </button>
          </>
        ) : (
          <>
            <button type="button" className={btnClass} onClick={onStartEdit}>
              Sửa
            </button>
            <button type="button" className={btnClass} onClick={onDelete}>
              Xóa
            </button>
          </>
        )}
      </div>
    </li>
  )
}
