import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  selectedCity: string | null;
  selectedVenue: string | null;
}

const initialState: ModalState = {
  isOpen: false,
  selectedCity: null,
  selectedVenue: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    selectCity: (state, action: PayloadAction<string | null>) => {
      state.selectedCity = action.payload;
    },
    selectVenue: (state, action: PayloadAction<string | null>) => {
      state.selectedVenue = action.payload;
    },
  },
});

export const { openModal, closeModal, selectCity, selectVenue } = modalSlice.actions;

export default modalSlice.reducer;
