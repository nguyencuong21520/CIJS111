
const ShowToDoList = (props) =>{
    const { todoList } = props;
    return (
        <div>
            {todoList.map((todo) => (
                <div key={todo.id}>
                    <i>{todo.id}</i> - <span>{todo.title}</span>
                </div>
            ))}
        </div>
    )
}

export default ShowToDoList;