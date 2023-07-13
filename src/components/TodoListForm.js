import { useState } from "react";

import { Input } from "./Input/Input";
import { Button } from "./Button/Button";

import "../styles/TodoListFormStyles.css";

export const TodoListForm = ({ addTask }) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(todo);
    setTodo("");
  };
  return (
    <form className="todo-list-form-container" onSubmit={handleSubmit}>
      <Input
        onKeyDown={(e) => e.key === "Enter" && setTodo(todo)}
        value={todo}
        type="text"
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <Button>Submit</Button>
    </form>
  );
};
