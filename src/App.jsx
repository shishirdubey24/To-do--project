
import { Routes, Route,} from "react-router-dom";


import { Login } from "./Router/Login";
import { Register } from "./Router/Regester";
import { Logout } from "./Router/Logout";
import { Todo } from "./Components/Todo";



const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Todo />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default App;
