import { memo } from 'react'

/**
 * Ô tìm kiếm — chỉ dùng lọc danh sách hiển thị.
 * memo: tránh render lại khi chỉ gõ ô thêm việc (state newTitle khác) mà không đổi search.
 */
function TodoSearchInputComponent({ value, onChange }) {
  return (
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Tìm kiếm công việc"
      className="mt-4 w-full rounded-md border border-neutral-300 px-3 py-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
    />
  )
}

export const TodoSearchInput = memo(TodoSearchInputComponent)
