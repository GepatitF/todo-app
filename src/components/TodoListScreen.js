import { useState } from "react";

import { TodoListForm } from "./TodoListForm";
import { TodoList } from "./TodoList";
import { MainScreenNavbar } from "./MainScreenNavbar";
import { Box } from "./Box/Box";
import data from "../data.json";

import "../styles/TodoListScreenStyles.css";

export const TodoListScreen = () => {
  const [todoList, setTodoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = todoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTodoList(mapped);
  };

  const handleFilter = () => {
    let filtered = todoList.filter((task) => {
      return !task.complete;
    });
    setTodoList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...todoList];
    copy = [
      ...copy,
      { id: todoList.length + 1, task: userInput, complete: false },
    ];
    setTodoList(copy);
  };

  return (
    <Box>
      <TodoListForm addTask={addTask} />
      <TodoList
        toDoList={todoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
    </Box>
  );
};
