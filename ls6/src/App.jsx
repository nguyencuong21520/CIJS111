import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  const loadData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    setTodos(data)
  }

  return (
    <div style={{ padding: '1rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Todos demo</h1>
      <p>
        <button type="button" onClick={loadData}>
         Load todos
        </button>
      </p>
      <ul style={{ listStyle: 'none', padding: 0, maxWidth: 640 }}>
        {todos.map((item) => (
          <li
            key={item.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: 8,
              padding: '0.75rem 1rem',
              marginBottom: 8,
            }}
          >
            <strong>#{item.id}</strong> — {item.title}
            <br />
            <small>
              userId: {item.userId} · completed: {String(item.completed)}
            </small>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
