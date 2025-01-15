import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { taskAction } from "../store/Task"; 
import { getLocalStorageTodoData,setLocalStorageTodoData } from "./TodoLocalStorage";
import { useSelector } from "react-redux";
import WeatherCard from "./Weather";
export const Todo = () => {
  const dispatch = useDispatch(); 
  const tasks = useSelector((store) => store.task);
 
  useEffect(() => {
    const savedTasks = getLocalStorageTodoData();
    if (savedTasks.length > 0) {
      dispatch(taskAction.loadTasks(savedTasks)); // Dispatch action to load tasks into Redux store
    }
  }, [dispatch]);

  useEffect(() => {
    setLocalStorageTodoData(tasks);
  }, [tasks]);
  const handleClearTodoData = () => {
    dispatch(taskAction.clearTasks()); 
  };

  return (
    <div className="page-content"> 
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
     
      <TodoForm /> 
      
      <section className="myUnOrdList">
        <ul>
          <TodoList /> {/* Task list is directly fetched from Redux */}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear all
        </button>
      </section>
    </section>
    <div className="weather-section">
        <WeatherCard/> {/* Weather info on the right */}
      </div>
    </div>
  );
};
