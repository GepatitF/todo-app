import { Route, Routes } from "react-router-dom";

import { Box } from "./Box/Box";
import { TodoListScreen } from "./TodoListScreen";

export const AppRouter = () => {
  return (
    <Box className="app-router">
      <Routes>
        <Route path="/" element={<TodoListScreen />} />
      </Routes>
    </Box>
  );
};
