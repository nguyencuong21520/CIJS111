import TodoListCard from './components/todo-list-card'
import { useMemo, useState } from 'react'

const TODO_ITEMS = [
  { id: 1, title: 'Hom nay phai quet nha' },
  { id: 2, title: 'Hoc bai de chuan bi thi hoc ky' },
  { id: 3, title: 'quet nha la niem vui' },
  { id: 4, title: 'on tap khoa hoc code intensive' },
]

export default function App() {
  const [todos, setTodos] = useState(TODO_ITEMS)
  const [searchTerm, setSearchTerm] = useState('')
  const [todoTitle, setTodoTitle] = useState('')
  const [editingTodoId, setEditingTodoId] = useState(null)

  const resetForm = () => {
    setTodoTitle('')
    setEditingTodoId(null)
  }

  const handleAddTodo = () => {
    const normalizedTitle = todoTitle.trim()
    if (!normalizedTitle) return

    const newTodo = {
      id: Date.now(),
      title: normalizedTitle,
    }

    setTodos((prevTodos) => [...prevTodos, newTodo])
    resetForm()
  }

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))

    if (editingTodoId === id) {
      resetForm()
    }
  }

  const handleStartEditTodo = (id, title) => {
    setEditingTodoId(id)
    setTodoTitle(title)
  }

  const handleUpdateTodo = () => {
    const normalizedTitle = todoTitle.trim()
    if (!normalizedTitle || editingTodoId === null) return

    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === editingTodoId ? { ...todo, title: normalizedTitle } : todo)),
    )
    resetForm()
  }

  const handleSubmitTodo = () => {
    if (editingTodoId === null) {
      handleAddTodo()
      return
    }
    handleUpdateTodo()
  }

  const filteredTodos = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase()
    if (!normalizedSearchTerm) return todos
    return todos.filter((todo) => todo.title.toLowerCase().includes(normalizedSearchTerm))
  }, [todos, searchTerm])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-4 py-8 md:px-10 lg:px-16">
      <TodoListCard
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        items={filteredTodos}
        todoTitle={todoTitle}
        onTodoTitleChange={setTodoTitle}
        onSubmitTodo={handleSubmitTodo}
        onDeleteTodo={handleDeleteTodo}
        onStartEditTodo={handleStartEditTodo}
        isEditing={editingTodoId !== null}
      />
    </main>
  )
}
