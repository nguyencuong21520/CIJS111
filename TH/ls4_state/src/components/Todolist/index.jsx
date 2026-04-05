import InputToDoForm from './inputToDoForm'
import ShowToDoList from './ShowToDoList'
import { useState } from 'react'
const ToDoList = () =>{
    const [todoListData, setTodoListData] = useState([])
    //To do
    // - change mockTodoList -> todoListData using useState
    // - write handleAddTodo function

    const handleAddTodo = (todo) => {
        //to do
    }

    const handleDeleteTodo = (id) => {
        //to do
    }

    const handleEditTodo = (id, todo) => {
        //to do
    }

    return (
        <div>
            <h1>Todo List</h1>
            <InputToDoForm />
            <ShowToDoList todoList={todoListData} />
        </div>
    )


}

export default ToDoList;