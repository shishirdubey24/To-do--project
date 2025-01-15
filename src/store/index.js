// store.js
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./Task";

const myStore = configureStore({
  reducer: {
    task: taskReducer, // Add the task reducer
  },
});

export default myStore;
