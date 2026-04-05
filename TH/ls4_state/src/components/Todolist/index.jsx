import InputToDoForm from './inputToDoForm'
import ShowToDoList from './ShowToDoList'
const ToDoList = () =>{

    const mockTodoList = [
        {
            id: 1,
            title: 'Todo 1',
        },
        {
            id: 2,
            title: 'Todo 2',
        },
        {
            id: 3,
            title: 'Todo 3',
        },
    ]
    //To do
    // - change mockTodoList -> todoListData using useState
    // - write handleAddTodo function

    return (
        <div>
            <h1>Todo List</h1>
            <InputToDoForm />
            <ShowToDoList todoList={mockTodoList} />
        </div>
    )


}

export default ToDoList;