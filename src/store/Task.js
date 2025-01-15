import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload); // Add new task to the array
    },

    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },

    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.checked = !task.checked;
      }
    },
    clearTasks: () => {
      return []; // Clear all tasks
    },

    loadTasks: (state, action) => {
      return action.payload; // Load tasks from localStorage
    },
  },
});

// Export the actions so they can be dispatched in components
export const taskAction = taskSlice.actions;

// Export the reducer to be used in the store
export default taskSlice.reducer;
