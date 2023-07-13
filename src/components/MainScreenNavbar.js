import React from "react";
import { Link } from "react-router-dom";
import "../styles/MainScreenNavbarStyles.css";

import { Box } from "./Box/Box";

export const MainScreenNavbar = () => {
  return (
    <Box className="main-screen-navbar">
      <Link className="navbar-link" to="/">
        Todos
      </Link>
      <Link className="navbar-link" to="/login">
        Login
      </Link>
      <Link className="navbar-link" to="/sign-up">
        Sign up
      </Link>
    </Box>
  );
};
