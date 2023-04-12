import React from "react";
import { Navigate } from "react-router-dom";
import { errorRes } from "../../api/responses";

const ProtectedRoute = ({ children }) => {
  const user =
    typeof window !== "undefined" && JSON.parse(localStorage.getItem("user"));

  if (!user) {
    errorRes("Login before accessing this route");
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default ProtectedRoute;
