import TodoHeader from './todo-header'
import TodoInputRow from './todo-input-row'
import TodoItem from './todo-item'
import TodoSearchInput from './todo-search-input'

export default function TodoListCard({
  items,
  searchTerm,
  onSearchTermChange,
  todoTitle,
  onTodoTitleChange,
  onSubmitTodo,
  onDeleteTodo,
  onStartEditTodo,
  isEditing,
}) {
  return (
    <section className="animate-fade-up relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-white/60 bg-white/75 px-5 py-8 shadow-[0_20px_80px_-24px_rgba(59,130,246,0.35)] backdrop-blur-md sm:px-8 sm:py-10">
      <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-violet-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-cyan-300/25 blur-3xl" />
      <TodoHeader />
      <TodoInputRow
        todoTitle={todoTitle}
        onTodoTitleChange={onTodoTitleChange}
        onSubmitTodo={onSubmitTodo}
        isEditing={isEditing}
      />
      <TodoSearchInput
        searchTerm={searchTerm}
        onSearchTermChange={onSearchTermChange}
      />

      <ul className="space-y-3">
        {items.map((item, index) => (
          <TodoItem
            key={item.id}
            title={item.title}
            index={index}
            id={item.id}
            onDeleteTodo={onDeleteTodo}
            onStartEditTodo={onStartEditTodo}
          />
        ))}
      </ul>
    </section>
  )
}
