import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve users data from localStorage when the component mounts
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();

    // Check if the username already exists
    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      alert("Username already exists! Please choose another one.");
    } else {
      const newUser = { username, password };
      // Add new user to the list of users
      const updatedUsers = [...users, newUser];

      // Store updated users array in localStorage
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      
      alert("Registration successful!");
      navigate("/login"); // Redirect to login page after registration
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
