import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";

// // Middleware для збереження в Local Storage
// const saveToLocalStorage = (store) => (next) => (action) => {
//   const result = next(action);
//   const state = store.getState();
//   localStorage.setItem("tasks", JSON.stringify(state.tasks));
//   return result;
// };

// // Ініціалізація стану з Local Storage
// const loadFromLocalStorage = () => {
//   const savedTasks = localStorage.getItem("tasks");
//   return savedTasks ? JSON.parse(savedTasks) : undefined;
// };

// const preloadedState = {
//   tasks: loadFromLocalStorage(),
//   filters: {
//     status: "all",
//   },
// };

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },

  // Для ініціалізації стану з Local Storage
  // preloadedState,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(saveToLocalStorage),
});
