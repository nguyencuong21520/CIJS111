/**
 * Ô tìm kiếm — chỉ dùng lọc danh sách hiển thị, không đụng vào dữ liệu gốc.
 * type="search": một số trình duyệt có UI gợi ý riêng cho ô tìm kiếm.
 * value và onChange do App điều khiển.
 */
export function TodoSearchInput({ value, onChange }) {
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
