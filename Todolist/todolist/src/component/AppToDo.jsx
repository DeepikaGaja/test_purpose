import { useState } from "react";

function AppTodo({ onAppToDo }) {
  const [title, setTitle] = useState("");

  return (
    <div>
      <input
        placeholder="Enter a task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="textarea"
      />
      <button
        onClick={() => {
          setTitle("");
          onAppToDo(title);
        }}
        disabled={title.length === 0}

        className=" button"
      >
        Add Task
      </button>
    </div>
  );
}

export default AppTodo;