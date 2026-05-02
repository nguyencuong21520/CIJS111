import { useState } from 'react'
import { TodoForm } from './components/todo-form.jsx'
import { TodoList } from './components/todo-list.jsx'
import { TodoSearchInput } from './components/todo-search-input.jsx'
import './App.css'

/**
 * Ứng dụng Todo List — component gốc.
 *
 * - Toàn bộ dữ liệu nằm trong bộ nhớ (state React). Reload trang sẽ mất danh sách.
 * - Không dùng custom hook: logic CRUD được giữ trực tiếp đây để dễ theo dõi khi học.
 */
export default function App() {
  // Danh sách công việc: mỗi phần tử có id (chuỗi duy nhất) và title (nội dung hiển thị).
  const [todos, setTodos] = useState([])

  // Nội dung ô input khi đang thêm việc mới (controlled component trong TodoForm).
  const [newTitle, setNewTitle] = useState('')

  // Chuỗi người dùng gõ vào ô tìm kiếm — dùng để lọc danh sách, không sửa dữ liệu gốc todos.
  const [search, setSearch] = useState('')

  // id của công việc đang được sửa; null nghĩa là không ai đang chỉnh sửa.
  const [editingId, setEditingId] = useState(null)

  // Bản nháp tiêu đề khi sửa — chỉ có nghĩa khi editingId khớp với một todo.
  const [editDraft, setEditDraft] = useState('')

  // Chuẩn hóa từ khóa: bỏ khoảng trắng đầu/cuối + chữ thường để so sánh không phân biệt hoa thường.
  const q = search.trim().toLowerCase()
  // Nếu không có từ khóa thì hiện toàn bộ; ngược lại chỉ giữ các todo có title chứa q.
  const visibleTodos = !q ? todos : todos.filter((t) => t.title.toLowerCase().includes(q))

  // Thêm công việc (Create); bỏ qua nếu sau trim rỗng.
  function handleAddTodo(e) {
    e.preventDefault() // Tránh reload trang khi submit form (hành vi mặc định của <form>).
    const t = newTitle.trim()
    if (!t) return
    setTodos((prev) => [...prev, { id: crypto.randomUUID(), title: t }])
    setNewTitle('')
  }

  // Bắt đầu sửa: gán editingId và copy title vào bản nháp.
  function startEdit(todo) {
    setEditingId(todo.id)
    setEditDraft(todo.title)
  }

  // Thoát sửa, xóa bản nháp.
  function cancelEdit() {
    setEditingId(null)
    setEditDraft('')
  }

  // Update: ghi đè title của đúng id; không làm gì nếu rỗng hoặc chưa chọn ai để sửa.
  function saveEdit() {
    const t = editDraft.trim()
    if (!t || !editingId) return
    setTodos((prev) =>
      prev.map((x) => (x.id === editingId ? { ...x, title: t } : x)),
    )
    cancelEdit()
  }

  // Delete: bỏ khỏi mảng; nếu đang sửa đúng mục đó thì đóng form sửa.
  function deleteTodo(id) {
    setTodos((prev) => prev.filter((x) => x.id !== id))
    if (editingId === id) cancelEdit()
  }

  return (
    <div className="min-h-screen bg-neutral-100 py-10 text-neutral-900">
      <main className="mx-auto max-w-xl px-4">
        <div className="rounded-lg border border-neutral-300 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
          <h1 className="mb-8 text-center text-3xl font-bold text-black sm:text-4xl">
            Todo List
          </h1>

          {/* Form thêm việc: state newTitle do App nắm để submit xử lý tại đây */}
          <TodoForm
            value={newTitle}
            onChange={setNewTitle}
            onSubmit={handleAddTodo}
          />
          <TodoSearchInput value={search} onChange={setSearch} />

          {/* Danh sách + trạng thái rỗng / không khớp tìm kiếm */}
          <TodoList
            todos={todos}
            visibleTodos={visibleTodos}
            editingId={editingId}
            editDraft={editDraft}
            onDraftChange={setEditDraft}
            onSaveEdit={saveEdit}
            onCancelEdit={cancelEdit}
            onStartEdit={startEdit}
            onDelete={deleteTodo}
          />
        </div>
      </main>
    </div>
  )
}
