import { Box } from "./Box/Box";
import "../styles/Todo.css";

export const Todo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <Box
      id={todo.id}
      key={todo.id + todo.task}
      name="todo"
      value={todo.id}
      onClick={handleClick}
      className={todo.complete ? "todo strike" : "todo"}
    >
      {todo.task}
    </Box>
  );
};

export default Todo;
