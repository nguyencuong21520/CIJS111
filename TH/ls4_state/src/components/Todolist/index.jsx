import InputToDoForm from './inputToDoForm'
import ShowToDoList from './ShowToDoList'
import { useEffect, useState } from 'react'

const TODO_STORAGE_KEY = 'todo_list_data'

const ToDoList = () => {
    const [todoListData, setTodoListData] = useState([])

    useEffect(() => {
        const savedTodoList = localStorage.getItem(TODO_STORAGE_KEY)
        if (!savedTodoList) return

        try {
            const parsedTodoList = JSON.parse(savedTodoList)
            if (Array.isArray(parsedTodoList)) {
                setTodoListData(parsedTodoList)
            }
        } catch (error) {
            console.error('Cannot parse todo list from localStorage', error)
        }
    }, [])

    const handleAddTodo = (todo) => {
        const newTodo = {
            id: Date.now(),
            title: todo.trim(),
        }

        const nextTodoList = [...todoListData, newTodo]
        setTodoListData(nextTodoList)
        localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(nextTodoList))
    }

    const handleDeleteTodo = (id) => {
        const nextTodoList = todoListData.filter((todo) => todo.id !== id)
        setTodoListData(nextTodoList)
        localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(nextTodoList))
    }

    const handleEditTodo = (id, todo) => {
        const trimmedTodo = todo.trim()
        if (!trimmedTodo) return

        const nextTodoList = todoListData.map((item) =>
            item.id === id ? { ...item, title: trimmedTodo } : item
        )
        setTodoListData(nextTodoList)
        localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(nextTodoList))
    }

    return (
        <div>
            <h1>Todo List</h1>
            <InputToDoForm onAddTodo={handleAddTodo} />
            <ShowToDoList
                todoList={todoListData}
                onDeleteTodo={handleDeleteTodo}
                onEditTodo={handleEditTodo}
            />
        </div>
    )


}

export default ToDoList;