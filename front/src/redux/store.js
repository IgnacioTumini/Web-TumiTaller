import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Define tus reducers aquí
const store = configureStore({
  reducer: {
    user: userReducer, // Agrega tus reducers aquí
  },
});
export default store;
