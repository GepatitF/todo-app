import { useState } from "react";

import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { TodoList } from "./components/TodoList";
import { TodoListForm } from "./components/TodoListForm";
import { MainScreenNavbar } from "./components/MainScreenNavbar";
import data from "./data.json";

function App() {
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
    <BrowserRouter>
      <AppRouter />
      <MainScreenNavbar />
      <TodoListForm addTask={addTask} />
      <TodoList
        toDoList={todoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
    </BrowserRouter>
  );
}

export default App;
