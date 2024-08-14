import { statusFilters } from "./constants";
import { createSelector } from "@reduxjs/toolkit";

export const selectTasks = (state) => state.tasks.items;
export const selectIsLoading = (state) => state.tasks.isLoading;
export const selectError = (state) => state.tasks.error;
export const selectStatusFilter = (state) => state.filters.status;
export const selectSearchFilter = (state) => state.filters.search;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter, selectSearchFilter],
  (tasks, statusFilter, searchFilter) => {
    // Фільтруємо завдання за статусом
    const filteredTasks = tasks.filter((task) => {
      switch (statusFilter) {
        case statusFilters.active:
          return !task.completed;
        case statusFilters.completed:
          return task.completed;
        default:
          return true;
      }
    });

    // Додаємо пошуковий фільтр
    return filteredTasks.filter((task) =>
      task.text.toLowerCase().includes(searchFilter.toLowerCase())
    );
  }
);

export const selectTaskCount = createSelector([selectTasks], (tasks) => {
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return count;
});
