import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types & Interfaces
import { FilterState } from "~/interfaces/filter";
import type { RootState } from "~/app/store";

// State
const initialState: FilterState = {
  page: 1,
  sort: "price",
  order: "asc",
  itemType: "mug",
  manufacturers: [],
  tags: [],
};

// Slice
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<Partial<Omit<FilterState, "manufacturers" | "tags">>>
    ) => {
      // Map the action payload to the state
      Object.entries(action.payload).map(([key, value]) => {
        (state as any)[key] = value;
      });
    },
    setArrayFilter: (
      state,
      action: PayloadAction<{ key: "manufacturers" | "tags"; value: string }>
    ) => {
      // Destructure the action payload
      const { key, value } = action.payload;

      // Check if the value already exists in the array
      if (!state[key].includes(value)) {
        // If the value doesn't exist, add it to the array
        state[key].push(value);
        return;
      }

      // If the value exists, remove it from the array
      state[key] = state[key].filter((m) => m !== value);
    },
    resetFilter: (state) => {
      // Reset the state to the initial state
      Object.entries(initialState).map(([key, value]) => {
        (state as any)[key] = value;
      });
    },
  },
});

// Actions
export const { setFilter, setArrayFilter, resetFilter } = filterSlice.actions;

// Selectors
export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;
export const selectOrder = (state: RootState) => state.filter.order;
export const selectItemType = (state: RootState) => state.filter.itemType;
export const selectManufacturers = (state: RootState) => state.filter.manufacturers;
export const selectTags = (state: RootState) => state.filter.tags;

// Export reducer
export default filterSlice.reducer;
