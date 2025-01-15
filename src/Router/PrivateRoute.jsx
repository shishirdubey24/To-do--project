/* eslint-disable react/prop-types */
// src/Router/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const isRegistered = localStorage.getItem("isRegistered");

  if (!isRegistered) {
    return <Navigate to="/register" />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children; // Render the protected component if all conditions are met
};

export default PrivateRoute;
