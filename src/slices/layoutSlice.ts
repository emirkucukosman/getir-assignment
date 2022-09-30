import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types & Interfaces
import { LayoutState } from "~/interfaces/layout";
import type { RootState } from "~/app/store";

// State
const initialState: LayoutState = {
  isMobileFilterOpen: false,
};

// Slice
const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleIsMobileFilterOpen: (state, action: PayloadAction<boolean | undefined>) => {
      state.isMobileFilterOpen = action.payload ?? !state.isMobileFilterOpen;
    },
  },
});

// Actions
export const { toggleIsMobileFilterOpen } = layoutSlice.actions;

// Selectors
export const selectIsMobileFilterOpen = (state: RootState) => state.layout.isMobileFilterOpen;

// Export reducer
export default layoutSlice.reducer;
