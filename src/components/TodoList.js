import Todo from "./Todo";
import { Button } from "./Button/Button";
import { Box } from "./Box/Box";

import "../styles/TodoListStyles.css";

export const TodoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <Box className="todo-list-container">
      {toDoList.map((todo) => {
        return (
          <Todo
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <Button onClick={handleFilter}>Clear Completed</Button>
    </Box>
  );
};
