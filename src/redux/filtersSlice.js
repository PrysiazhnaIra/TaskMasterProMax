import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    status: statusFilters.all,
    search: "",
  },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
    setSearchFilter(state, action) {
      state.search = action.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { setStatusFilter, setSearchFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
