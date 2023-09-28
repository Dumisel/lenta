import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  selectedGroup: string | null;
  selectedCategory: string | null;
  selectedSubcategory: string | null;
  selectedSku: string | null;
}

const initialState: FilterState = {
  selectedGroup: null,
  selectedCategory: null,
  selectedSubcategory: null,
  selectedSku: null,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    selectGroup: (state, action: PayloadAction<string | null>) => {
      state.selectedGroup = action.payload;
    },
    selectCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
    },
    selectSubcategory: (state, action: PayloadAction<string | null>) => {
      state.selectedSubcategory = action.payload;
    },
    selectSku: (state, action: PayloadAction<string | null>) => {
      state.selectedSku = action.payload;
    },
    updateFilters: (state, action: PayloadAction<string | null>) => {
      state.selectedSku = action.payload;
    },
  },
});

export const { selectGroup, selectCategory, selectSubcategory, selectSku, updateFilters } = filterSlice.actions;

export default filterSlice.reducer;