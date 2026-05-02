import { memo } from 'react'
import { TodoItem } from './todo-item.jsx'

/**
 * Danh sách + các trường hợp rỗng.
 * memo: khi chỉ TodoForm rerender nhưng todos/search/editing không đổi — không cần chạy lại toàn bộ list wrapper.
 */
function TodoListComponent({
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
            onStartEdit={onStartEdit}
            onSave={onSaveEdit}
            onCancel={onCancelEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </ul>
  )
}

export const TodoList = memo(TodoListComponent)
