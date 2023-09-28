import { configureStore } from '@reduxjs/toolkit';
import modalReducer from "./modalSlice";
import filterReducer from "./filterSlice"; 

const store = configureStore({
  reducer: {
    modal: modalReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
