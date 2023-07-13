import { BrowserRouter } from "react-router-dom";

import "./App.css";

import { AppRouter } from "./components/AppRouter";
import { MainScreenNavbar } from "./components/MainScreenNavbar";
function App() {
  return (
    <BrowserRouter>
      <MainScreenNavbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
