import React from "react";
import { Navigate } from "react-router";

function PrivateRoute(props) {
  const user = JSON.parse(localStorage.getItem("loggedinUser")) || [];
  const isAuthenticated = user.length;

  return isAuthenticated ? props.children : <Navigate to={"/login"} />;
}

export default PrivateRoute;
