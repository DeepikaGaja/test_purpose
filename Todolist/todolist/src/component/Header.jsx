import { useState } from "react";
import AppTodo from "./AppToDo";
import ToDosList from "./ToDosList";

let nextId = 1;
const initialTodos = [{ id: 0, title: "Task1", done: false }];

function Header() {
  const [todos, setTodos] = useState(initialTodos);

  function addToDo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  function editToDo(nextTodo) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === nextTodo.id) {
          return nextTodo;
        } else {
          return todo;
        }
      })
    );
  }

  function deleteToDo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <div>
        <AppTodo onAppToDo={addToDo} />
        <ToDosList
          todos={todos}
          onChangeToDo={editToDo}
          onDeleteToDo={deleteToDo}
        />
      </div>
    </>
  );
}

export default Header;