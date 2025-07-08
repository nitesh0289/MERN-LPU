import React from "react";
import { Navigate } from "react-router";

function AdminRoute(props) {
  const user = JSON.parse(localStorage.getItem("loggedinUser")) || [];
  const isAdmin = user?.[0]?.email === "abcd@gmail.com";

  return isAdmin ? props.children : <Navigate to={"/"} />;
}

export default AdminRoute;
