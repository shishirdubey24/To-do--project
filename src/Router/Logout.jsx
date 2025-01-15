import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Clear login status
    navigate("/login"); // Redirect to Login page
  };

  return (
    <button onClick={handleLogout} className="logout-btn">
      Logout
    </button>
  );
};
