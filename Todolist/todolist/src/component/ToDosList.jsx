import ToDoItem from "./TodoItem";

function ToDosList({ todos, onChangeToDo, onDeleteToDo }) {
  let completedTasks = 0;

  todos.map((todo) => {
    if (todo.done) {
      completedTasks = completedTasks + 1;
    }
    return completedTasks;
  });

  return (
    <>
     
      <ol > 
        {todos.map((todo) => (
          <li key={todo.id}>
            <ToDoItem
              todo={todo}
              onChange={onChangeToDo}
              onDelete={onDeleteToDo}
            />
          </li>
        ))}
      </ol>
    </>
  );
}

export default ToDosList;