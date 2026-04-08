import { useState } from 'react'

const InputToDoForm = ({ onAddTodo }) => {
    const [title, setTitle] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const trimmedTitle = title.trim()
        if (!trimmedTitle) return
        onAddTodo(trimmedTitle)
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new todo"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default InputToDoForm;