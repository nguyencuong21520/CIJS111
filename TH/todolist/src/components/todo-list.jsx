import { TodoItem } from './todo-item.jsx'

/**
 * Danh sách: (1) chưa có việc, (2) có việc nhưng tìm không ra, (3) map visibleTodos sang TodoItem.
 * todos là danh sách đầy đủ để phân biệt “trống hẳn” với “có nhưng lọc rỗng”; phần còn lại do App điều khiển (sửa, lưu, hủy, xóa).
 */
export function TodoList({
  todos,
  visibleTodos,
  editingId,
  editDraft,
  onDraftChange,
  onSaveEdit,
  onCancelEdit,
  onStartEdit,
  onDelete,
}) {
  return (
    <ul className="mt-2 divide-y divide-neutral-200">
      {todos.length === 0 ? (
        <li className="py-10 text-center text-neutral-500">Chưa có công việc.</li>
      ) : visibleTodos.length === 0 ? (
        <li className="py-10 text-center text-neutral-500">Không tìm thấy.</li>
      ) : (
        visibleTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            editing={editingId === todo.id}
            draft={editDraft}
            onDraftChange={onDraftChange}
            onStartEdit={() => onStartEdit(todo)}
            onSave={onSaveEdit}
            onCancel={onCancelEdit}
            onDelete={() => onDelete(todo.id)}
          />
        ))
      )}
    </ul>
  )
}
