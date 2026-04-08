const ShowToDoList = (props) => {
    const { todoList, onDeleteTodo, onEditTodo } = props;
    return (
        <div>
            {todoList.map((todo) => (
                <div key={todo.id}>
                    <i>{todo.id}</i> - <span>{todo.title}</span>
                    <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
                    <button
                        onClick={() => {
                            const newTitle = window.prompt('Edit todo', todo.title)
                            if (newTitle !== null) {
                                onEditTodo(todo.id, newTitle)
                            }
                        }}
                    >
                        Edit
                    </button>
                </div>

            ))}
        </div>
    )
}

export default ShowToDoList;