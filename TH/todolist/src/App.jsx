import { useCallback, useMemo, useState } from 'react'
import { TodoForm } from './components/todo-form.jsx'
import { TodoList } from './components/todo-list.jsx'
import { TodoSearchInput } from './components/todo-search-input.jsx'
import './App.css'

/**
 * Ứng dụng Todo List — component gốc.
 *
 * - useMemo: tính lại visibleTodos chỉ khi todos hoặc search thay đổi (tránh filter lặp không cần thiết mỗi lần render).
 * - useCallback: handlers truyền xuống component đã bọc memo giữ tham chiếu ổn định giữa các lần render khi deps không đổi.
 */
export default function App() {
  const [todos, setTodos] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [search, setSearch] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editDraft, setEditDraft] = useState('')

  // Chỉ tính lại khi danh sách hoặc chuỗi tìm kiếm đổi
  const visibleTodos = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return todos
    return todos.filter((t) => t.title.toLowerCase().includes(q))
  }, [todos, search])

  const handleAddTodo = useCallback(
    (e) => {
      e.preventDefault()
      const t = newTitle.trim()
      if (!t) return
      setTodos((prev) => [...prev, { id: crypto.randomUUID(), title: t }])
      setNewTitle('')
    },
    [newTitle],
  )

  const startEditById = useCallback((id) => {
    const todo = todos.find((t) => t.id === id)
    if (todo) {
      setEditingId(todo.id)
      setEditDraft(todo.title)
    }
  }, [todos])

  const cancelEdit = useCallback(() => {
    setEditingId(null)
    setEditDraft('')
  }, [])

  const saveEdit = useCallback(() => {
    const t = editDraft.trim()
    if (!t || !editingId) return
    setTodos((prev) =>
      prev.map((x) => (x.id === editingId ? { ...x, title: t } : x)),
    )
    cancelEdit()
  }, [editDraft, editingId, cancelEdit])

  const deleteTodoById = useCallback(
    (id) => {
      setTodos((prev) => prev.filter((x) => x.id !== id))
      if (editingId === id) cancelEdit()
    },
    [editingId, cancelEdit],
  )

  return (
    <div className="min-h-screen bg-neutral-100 py-10 text-neutral-900">
      <main className="mx-auto max-w-xl px-4">
        <div className="rounded-lg border border-neutral-300 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
          <h1 className="mb-8 text-center text-3xl font-bold text-black sm:text-4xl">
            Todo List
          </h1>

          <TodoForm
            value={newTitle}
            onChange={setNewTitle}
            onSubmit={handleAddTodo}
          />
          <TodoSearchInput value={search} onChange={setSearch} />

          <TodoList
            todos={todos}
            visibleTodos={visibleTodos}
            editingId={editingId}
            editDraft={editDraft}
            onDraftChange={setEditDraft}
            onSaveEdit={saveEdit}
            onCancelEdit={cancelEdit}
            onStartEdit={startEditById}
            onDelete={deleteTodoById}
          />
        </div>
      </main>
    </div>
  )
}
